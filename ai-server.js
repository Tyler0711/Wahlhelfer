// AI Analysis Server - Handles API calls to different AI providers
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Import AI provider modules
const OpenAI = require('openai');
const Anthropic = require('@anthropic-ai/sdk');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize AI clients (API keys from environment variables)
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
});

const googleAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// Helper function to build analysis prompt with model-specific perspectives
function buildAnalysisPrompt(modelName, provider, answeredTheses) {
    // Check if there are weighted theses
    const hasWeightedTheses = answeredTheses.some(t => t.weighted);
    
    // Model-specific analytical approaches
    const modelPerspectives = {
        'GPT-4': `Schreibe eine sachliche politische Analyse als zusammenhängenden Fließtext ohne Überschriften, Markdown, Sternchen oder Aufzählungen. Beginne NICHT mit "Die Analyse zeigt..." oder ähnlichen Meta-Beschreibungen, sondern steige direkt inhaltlich ein (z.B. "Auf Basis von X Thesen..."). Nenne konkrete Zahlen, Prozente und spezifische Thesen. Identifiziere politische Muster, ordne die Person auf der Links-Rechts-Achse ein. ${hasWeightedTheses ? 'Berücksichtige besonders die als wichtig markierten Thesen.' : 'Es wurden keine Thesen als besonders wichtig markiert.'} Schreibe 1-2 informative Absätze. WICHTIG: Beende die Analyse mit einer konkreten Wahlempfehlung (1-2 Parteien) mit kurzer Begründung.`,

        'Claude 3.5': `Schreibe eine ethisch-philosophische Analyse als zusammenhängenden Fließtext ohne Überschriften, Markdown, Sternchen oder Aufzählungen. Beginne NICHT mit "Die ethische Analyse..." oder ähnlichen Meta-Beschreibungen, sondern steige direkt inhaltlich ein. Identifiziere Grundwerte (Freiheit vs. Gleichheit), moralische Dilemmata und die Konsistenz der Positionen. Nenne konkrete Beispiel-Antworten und erkläre welche Gesellschaftsvision dahinter steht. ${hasWeightedTheses ? 'Berücksichtige besonders die als wichtig markierten Thesen.' : ''} Schreibe 1-2 sachliche Absätze. WICHTIG: Beende die Analyse mit einer Wahlempfehlung basierend auf ethischer Passung.`,

        'Gemini': `Schreibe eine zahlenbasierte Analyse als zusammenhängenden Fließtext ohne Überschriften, Markdown, Sternchen oder Aufzählungen. Beginne NICHT mit "Die datenbasierte Analyse..." oder ähnlichen Meta-Beschreibungen, sondern steige direkt mit konkreten Zahlen ein (z.B. "Von X Antworten zeigen sich..."). Erstelle ein quantitatives Profil, gruppiere Antworten in Themencluster, zeige statistische Auffälligkeiten und vergleiche mit dem Durchschnittswähler. ${hasWeightedTheses ? 'Berücksichtige die gewichteten Thesen.' : ''} Schreibe 1-2 analytische Absätze mit konkreten Prozenten. WICHTIG: Beende mit einer datenbasierten Wahlempfehlung (welche Partei statistisch am besten passt).`,

        'Perplexity': `Schreibe eine evidenzbasierte Analyse als zusammenhängenden Fließtext ohne Überschriften, Markdown, Sternchen oder Aufzählungen. Beginne NICHT mit "Die evidenzbasierte Analyse..." oder ähnlichen Meta-Beschreibungen, sondern steige direkt inhaltlich ein. Unterscheide wissenschaftlich fundierte vs. ideologische Positionen. Diskutiere langfristige vs. kurzfristige Konsequenzen und identifiziere systemisches Denken. ${hasWeightedTheses ? 'Gehe auf die priorisierten Thesen ein.' : ''} Nenne 2-3 spezifische Beispiele. Schreibe 1-2 Absätze. WICHTIG: Beende mit einer evidenzbasierten Wahlempfehlung (welche Partei wissenschaftlich fundierte Positionen vertritt).`,

        'Mistral': `Schreibe eine nuancierte Analyse als zusammenhängenden Fließtext ohne Überschriften, Markdown, Sternchen oder Aufzählungen. Beginne NICHT mit "Die nuancierte Analyse..." oder ähnlichen Meta-Beschreibungen, sondern steige direkt inhaltlich ein. Identifiziere Grauzonen, Ambivalenzen und Trade-offs. Zeige wo Pragmatismus vs. Idealismus erkennbar ist. Finde überraschende Positionen und diskutiere mögliche Inkonsistenzen. ${hasWeightedTheses ? 'Berücksichtige die Priorisierungen.' : ''} Schreibe 1-2 differenzierte Absätze mit konkreten Beispielen. WICHTIG: Beende mit einer differenzierten Wahlempfehlung, die auch Zwischentöne berücksichtigt.`
    };

    const perspective = modelPerspectives[modelName] || modelPerspectives['GPT-4'];
    
    let prompt = `${perspective}\n\nABSTIMMUNGSVERHALTEN (Landtagswahl BW 2026):\n`;
    
    // Group theses by categories for better analysis
    const categories = {
        'Umwelt & Energie': [],
        'Bildung & Soziales': [],
        'Wirtschaft & Arbeit': [],
        'Sicherheit & Verkehr': [],
        'Sonstige': []
    };
    
    answeredTheses.forEach(thesis => {
        const answerText = thesis.answer === 1 ? 'DAFÜR' : thesis.answer === -1 ? 'DAGEGEN' : 'NEUTRAL';
        const weighted = thesis.weighted ? ' [WICHTIG]' : '';
        const line = `${answerText}: ${thesis.text}${weighted}`;
        
        // Categorize (simple keyword matching)
        if (thesis.text.match(/Wind|Solar|Energie|Klima|CO2|Umwelt|Grün/i)) {
            categories['Umwelt & Energie'].push(line);
        } else if (thesis.text.match(/Schule|Bildung|Kita|Studium|Lehrer/i)) {
            categories['Bildung & Soziales'].push(line);
        } else if (thesis.text.match(/Wirtschaft|Start-up|Unternehmen|Arbeit|Mindestlohn/i)) {
            categories['Wirtschaft & Arbeit'].push(line);
        } else if (thesis.text.match(/Polizei|Sicherheit|Überwachung|Verkehr|Auto|ÖPNV/i)) {
            categories['Sicherheit & Verkehr'].push(line);
        } else {
            categories['Sonstige'].push(line);
        }
    });
    
    // Add categorized answers to prompt
    for (const [category, items] of Object.entries(categories)) {
        if (items.length > 0) {
            prompt += `\n${category}:\n${items.join('\n')}\n`;
        }
    }
    
    prompt += `\n\nErstelle eine detaillierte Analyse (200-250 Wörter) auf Deutsch als normaler Fließtext ohne Markdown, Sternchen, Bullet-Points oder Überschriften. Sei spezifisch, nenne konkrete Thesen, gib Zahlen und Prozente, und nutze deine einzigartige Analyseperspektive. Schreibe 1-2 gut strukturierte Absätze.`;
    
    return prompt;
}

// API Endpoint for GPT-4 Analysis
app.post('/api/analyze/gpt4', async (req, res) => {
    try {
        const { answeredTheses } = req.body;
        const prompt = buildAnalysisPrompt('GPT-4', 'OpenAI', answeredTheses);
        
        const completion = await openai.chat.completions.create({
            model: 'gpt-4-turbo-preview',
            messages: [
                {
                    role: 'system',
                    content: 'Du bist ein politischer Analyst, der Wählerverhalten analysiert. Sei präzise, nenne konkrete Zahlen und Beispiele, und gib detaillierte, spezifische Einschätzungen. Vermeide Allgemeinplätze.'
                },
                {
                    role: 'user',
                    content: prompt
                }
            ],
            max_tokens: 500,
            temperature: 0.8
        });
        
        res.json({ analysis: completion.choices[0].message.content });
    } catch (error) {
        console.error('GPT-4 Error:', error);
        res.status(500).json({ error: error.message });
    }
});

// API Endpoint for Claude Analysis
app.post('/api/analyze/claude', async (req, res) => {
    try {
        const { answeredTheses } = req.body;
        const prompt = buildAnalysisPrompt('Claude 3.5', 'Anthropic', answeredTheses);
        
        const message = await anthropic.messages.create({
            model: 'claude-3-5-sonnet-20241022',
            max_tokens: 500,
            messages: [
                {
                    role: 'user',
                    content: prompt
                }
            ],
            temperature: 0.8
        });
        
        res.json({ analysis: message.content[0].text });
    } catch (error) {
        console.error('Claude Error:', error);
        res.status(500).json({ error: error.message });
    }
});

// API Endpoint for Gemini Analysis
app.post('/api/analyze/gemini', async (req, res) => {
    try {
        const { answeredTheses } = req.body;
        const prompt = buildAnalysisPrompt('Gemini', 'Google', answeredTheses);
        
        const model = googleAI.getGenerativeModel({ model: 'gemini-pro' });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        res.json({ analysis: text });
    } catch (error) {
        console.error('Gemini Error:', error);
        res.status(500).json({ error: error.message });
    }
});

// API Endpoint for Perplexity
app.post('/api/analyze/perplexity', async (req, res) => {
    try {
        const { answeredTheses } = req.body;
        const prompt = buildAnalysisPrompt('Perplexity', 'Perplexity AI', answeredTheses);
        
        // Perplexity API integration (uncomment if you have Perplexity API key)
        /*
        const response = await fetch('https://api.perplexity.ai/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.PERPLEXITY_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama-3.1-sonar-large-128k-online',
                messages: [{ role: 'user', content: prompt }],
                max_tokens: 500,
                temperature: 0.8
            })
        });
        const data = await response.json();
        res.json({ analysis: data.choices[0].message.content });
        */
        
        // Fallback: Simulated response (remove when using real API)
        res.json({ 
            analysis: 'Perplexity Analyse: API-Integration steht bereit. Bitte konfiguriere PERPLEXITY_API_KEY in der .env Datei.' 
        });
    } catch (error) {
        console.error('Perplexity Error:', error);
        res.status(500).json({ error: error.message });
    }
});

// API Endpoint for Mistral
app.post('/api/analyze/mistral', async (req, res) => {
    try {
        const { answeredTheses } = req.body;
        const prompt = buildAnalysisPrompt('Mistral', 'Mistral AI', answeredTheses);
        
        // Using Mistral AI API (uncomment when you have API key)
        /*
        const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.MISTRAL_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'mistral-large-latest',
                messages: [{ role: 'user', content: prompt }],
                max_tokens: 300,
                temperature: 0.7
            })
        });
        const data = await response.json();
        res.json({ analysis: data.choices[0].message.content });
        */
        
        // Fallback: Simulated response (remove when using real API)
        res.json({ 
            analysis: 'Mistral Analyse: API-Integration steht bereit. Bitte konfiguriere MISTRAL_API_KEY in der .env Datei.' 
        });
    } catch (error) {
        console.error('Mistral Error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'AI Analysis Server running' });
});

app.listen(PORT, () => {
    console.log(`🤖 AI Analysis Server running on http://localhost:${PORT}`);
    console.log(`\n📋 Available endpoints:`);
    console.log(`   POST /api/analyze/gpt4`);
    console.log(`   POST /api/analyze/claude`);
    console.log(`   POST /api/analyze/gemini`);
    console.log(`   POST /api/analyze/llama`);
    console.log(`   POST /api/analyze/mistral`);
    console.log(`\n⚙️  Make sure to configure API keys in .env file`);
});
