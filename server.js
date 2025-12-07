// Simple Express server to serve static files and provide /analyze endpoint
// Run: npm install && npm start
// Supports real KI provider when environment variables are set, else falls back to heuristic summary.
// See README for activation instructions.

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '1mb' }));
// Serve static files (HTML/CSS/JS) from project root
app.use(express.static(path.join(__dirname)));

// Utility: very lightweight summary generator based on prompt content (fallback)
function buildHeuristicSummary(prompt) {
  if (!prompt) return 'Keine Daten erhalten.';
  // Extract answered theses lines
  const thesisLines = prompt.split('\n').filter(l => l.startsWith('- These:'));
  const answeredCount = thesisLines.length;
  // Extract party lines
  const partyLines = prompt.split('\n').filter(l => l.trim().startsWith('- ') && l.includes('{'));
  // Very naive top party guess: count occurrences of '1' (dafür) inside each party positions JSON
  let topParty = null;
  let topScore = -1;
  partyLines.forEach(line => {
    const match = line.match(/-\s(.+?):\s(\{.*\})/);
    if (!match) return;
    const partyName = match[1].trim();
    try {
      const obj = JSON.parse(match[2]);
      const score = Object.values(obj).reduce((acc, v) => acc + (v === 1 ? 1 : 0), 0);
      if (score > topScore) {
        topScore = score;
        topParty = partyName;
      }
    } catch (_) {}
  });
  const intro = `Du hast ${answeredCount} Thesen beantwortet. Diese lokale Heuristik (KEINE echte KI) sieht aktuell die meiste inhaltliche Aktivität bei: ${topParty || 'keine Partei erkennbar'}.`;
  const advise = 'Für eine echte Analyse aktiviere einen KI-Provider im Server (siehe README).';
  return `${intro}\n\n${advise}`;
}

// Provider call (OpenAI-compatible Chat Completions REST). No SDK needed, uses native fetch (Node >=18).
async function callRealProvider(prompt) {
  const provider = process.env.AI_PROVIDER; // 'openai' (others could be added later)
  if (!provider) throw new Error('Kein KI-Provider konfiguriert (AI_PROVIDER fehlt).');
  if (provider !== 'openai') throw new Error(`Unbekannter KI-Provider: ${provider}`);

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error('OPENAI_API_KEY fehlt.');

  const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';
  const timeoutMs = parseInt(process.env.AI_TIMEOUT_MS || '25000', 10);
  const controller = new AbortController();
  const tHandle = setTimeout(() => controller.abort(), timeoutMs);
  const body = {
    model,
    messages: [
      { role: 'system', content: 'Du bist ein neutraler politischer Analyse-Assistent für die Landtagswahl Baden-Württemberg.' },
      { role: 'user', content: prompt }
    ],
    max_tokens: 650,
    temperature: 0.7
  };
  let resp;
  try {
    resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
      signal: controller.signal
    });
  } catch (e) {
    if (e.name === 'AbortError') throw new Error(`KI Anfrage Timeout (${timeoutMs}ms).`);
    throw new Error(`Netzwerkfehler: ${e.message}`);
  } finally {
    clearTimeout(tHandle);
  }
  if (!resp.ok) {
    let errText = `HTTP ${resp.status}`;
    try { errText = await resp.text(); } catch (_) {}
    throw new Error(`Provider Fehler: ${errText}`);
  }
  const data = await resp.json();
  const text = data.choices?.[0]?.message?.content;
  if (!text) throw new Error('Unerwartetes Antwortformat des Providers (kein content).');
  return text.trim();
}

app.post('/analyze', async (req, res) => {
  const { prompt } = req.body || {};
  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Ungültiger oder fehlender Prompt.' });
  }
  let aiText = null;
  let usedFallback = false;
  try {
    if (process.env.AI_PROVIDER) {
      aiText = await callRealProvider(prompt);
    } else {
      throw new Error('Kein KI-Provider gesetzt, Fallback wird genutzt.');
    }
  } catch (err) {
    console.warn('KI-Provider Fehler, nutze Fallback:', err.message);
    aiText = buildHeuristicSummary(prompt);
    usedFallback = true;
  }
  return res.json({
    meta: {
      provider: process.env.AI_PROVIDER || 'fallback',
      fallback: usedFallback
    },
    candidates: [
      {
        content: { parts: [{ text: aiText }] }
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
  console.log('Öffne wahlogetrennt.html über diesen Server, nicht direkt per Datei-Doppelklick.');
});
