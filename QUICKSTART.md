# 🚀 Schnellstart - Echte KI-Analysen

## Schritt 1: Dependencies installieren
```powershell
npm install
```

## Schritt 2: API Keys konfigurieren
```powershell
# Kopiere die Vorlage
copy .env.example .env

# Öffne .env und füge mindestens einen API Key ein:
# - OPENAI_API_KEY für GPT-4
# - ANTHROPIC_API_KEY für Claude  
# - GOOGLE_API_KEY für Gemini (KOSTENLOS!)
```

## Schritt 3: Server starten
```powershell
# Beide Server gleichzeitig:
npm run dev

# ODER einzeln in zwei Terminals:
npm start          # Frontend
npm run ai-server  # KI-Backend
```

## Schritt 4: Testen
1. Öffne http://localhost:3000
2. Beantworte die Fragen
3. Klicke auf ein KI-Modell → Echte Analyse! ✨

---

📖 Ausführliche Anleitung: Siehe `AI-SETUP.md`
