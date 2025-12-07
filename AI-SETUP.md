# 🤖 KI-Analyse Server Setup

Dieser Guide erklärt, wie du echte KI-Analysen von verschiedenen AI-Modellen in deinem Wahlhelfer aktivierst.

## 📋 Voraussetzungen

- Node.js installiert (Version 16 oder höher)
- NPM Package Manager

## 🚀 Schnellstart

### 1. Dependencies installieren

Öffne ein Terminal im Projektordner und führe aus:

```bash
npm install
```

Dies installiert alle benötigten Pakete:
- `express` - Web-Server
- `cors` - Cross-Origin Requests
- `dotenv` - Umgebungsvariablen
- `openai` - OpenAI GPT-4 Client
- `@anthropic-ai/sdk` - Anthropic Claude Client
- `@google/generative-ai` - Google Gemini Client

### 2. API Keys konfigurieren

1. Kopiere die Beispiel-Datei:
   ```bash
   copy .env.example .env
   ```

2. Öffne die `.env` Datei und füge deine API-Keys ein:

   ```env
   OPENAI_API_KEY=sk-...
   ANTHROPIC_API_KEY=sk-ant-...
   GOOGLE_API_KEY=AI...
   ```

### 3. Server starten

#### Option A: Beide Server gleichzeitig (empfohlen)
```bash
npm run dev
```

Dies startet:
- Frontend-Server auf `http://localhost:3000`
- AI-Server auf `http://localhost:3001`

#### Option B: Server einzeln starten

Terminal 1 - Frontend:
```bash
npm start
```

Terminal 2 - AI-Server:
```bash
npm run ai-server
```

### 4. Testen

1. Öffne `http://localhost:3000` im Browser
2. Beantworte die Wahl-Fragen
3. Scrolle auf der Ergebnisseite nach unten zu "Analysen von Top KI-Modellen"
4. Klicke auf ein KI-Modell → Es wird eine echte Analyse von der jeweiligen KI erstellt!

## 🔑 API Keys erhalten

### OpenAI (GPT-4)
1. Gehe zu https://platform.openai.com/
2. Registriere dich / Logge dich ein
3. Navigiere zu "API Keys"
4. Erstelle einen neuen Key
5. **Wichtig:** Du brauchst Credits auf deinem Account ($5-10 empfohlen)

**Kosten:** ~$0.01-0.03 pro Analyse

### Anthropic (Claude)
1. Gehe zu https://console.anthropic.com/
2. Registriere dich / Logge dich ein
3. Navigiere zu "API Keys"
4. Erstelle einen neuen Key
5. Lade Credits auf

**Kosten:** ~$0.01-0.02 pro Analyse

### Google (Gemini)
1. Gehe zu https://makersuite.google.com/app/apikey
2. Logge dich mit Google-Account ein
3. Erstelle einen API Key
4. **Kostenlos** für moderate Nutzung!

**Kosten:** Kostenlos bis 60 Anfragen/Minute

### Llama 3 (Optional)

Du hast zwei Optionen:

#### Option 1: Together AI
1. Gehe zu https://api.together.xyz/
2. Registriere dich
3. Erstelle einen API Key
4. Entkommentiere den Together AI Code in `ai-server.js` (Zeile 86-98)

**Kosten:** ~$0.001-0.002 pro Analyse

#### Option 2: Replicate
1. Gehe zu https://replicate.com/
2. Registriere dich
3. Navigiere zu "Account" → "API Tokens"
4. Erstelle einen Token
5. Entkommentiere den Replicate Code in `ai-server.js` (Zeile 100-113)

**Kosten:** ~$0.001 pro Analyse

### Mistral (Optional)
1. Gehe zu https://console.mistral.ai/
2. Registriere dich
3. Erstelle einen API Key
4. Entkommentiere den Mistral Code in `ai-server.js` (Zeile 135-150)

**Kosten:** ~$0.002-0.005 pro Analyse

## 💰 Kosten-Übersicht

Geschätzte Kosten pro 100 Analysen (alle Modelle):
- **Nur GPT-4 + Claude + Gemini:** ~$3-5
- **Alle 5 Modelle:** ~$4-7

Die günstigste Variante ist **nur Gemini** zu nutzen (kostenlos!).

## 🔧 Troubleshooting

### "Cannot find module 'xyz'"
→ Führe `npm install` erneut aus

### "API key not valid"
→ Prüfe, ob der API Key korrekt in der `.env` Datei eingetragen ist
→ Starte den Server neu nach Änderungen an der `.env`

### "CORS Error"
→ Stelle sicher, dass beide Server laufen
→ Prüfe, dass der AI-Server auf Port 3001 läuft

### "Analysis shows fallback text"
→ Server läuft nicht / API-Key fehlt
→ Frontend nutzt automatisch Fallback-Texte wenn Backend nicht erreichbar

## 🎯 Welche KIs soll ich nutzen?

### Minimale Setup (Kostenlos):
- ✅ **Gemini** (Google) - Kostenlos, sehr gut!

### Empfohlene Setup (Budget):
- ✅ **Gemini** (Google) - Kostenlos
- ✅ **GPT-4** (OpenAI) - Beste Qualität
- ✅ **Claude** (Anthropic) - Sehr ausgewogen

### Premium Setup (Alle):
- ✅ Alle 5 Modelle für maximale Vergleichbarkeit

## 📝 Hinweise

- **Datenschutz:** Die Antworten werden nur zur Analyse an die APIs gesendet, nicht gespeichert
- **Rate Limits:** Bei vielen Anfragen kann es zu Verzögerungen kommen
- **Kosten:** Behalte dein API-Budget im Auge
- **Fallback:** Wenn ein API-Call fehlschlägt, wird automatisch ein Fallback-Text angezeigt

## 🎨 Anpassungen

Du kannst den Analyse-Prompt in `ai-server.js` anpassen (Funktion `buildAnalysisPrompt`), um andere Schwerpunkte zu setzen.

## ✅ Fertig!

Jetzt hast du echte KI-Analysen von den besten AI-Modellen der Welt in deinem Wahlhelfer! 🚀
