# Wahlhelfer BW 2026

Dieses Projekt ist ein einfacher, statischer Wahl-Kompass mit optionaler KI-Analyse. Aktuell ruft das Frontend `fetch('/analyze')` auf. Wenn du die HTML-Datei direkt mit Doppelklick im Browser öffnest (`file://`), existiert kein Server und der Request schlägt fehl. Du brauchst einen lokalen Server mit einem `/analyze`-Endpoint.

## Schnelle Aktivierung der (Stub) KI-Analyse
1. Installiere Abhängigkeiten:
   ```powershell
   npm install
   ```
2. Starte den Server:
   ```powershell
   npm start
   ```
3. Öffne im Browser: `http://localhost:3000/wahlogetrennt.html`
4. Führe den Fragebogen aus und klicke unter "KI-Analyse" auf "Analyse anfordern".
5. Du erhältst nun eine einfache heuristische Zusammenfassung (kein echtes Modell), da der Server eine Stub-Logik verwendet.

## Warum schlug es vorher fehl?
- Beim direkten Öffnen der Datei (`file://...`) zeigt der Browser auf keinen HTTP-Server. `fetch('/analyze')` versucht einen relativen HTTP-Endpunkt aufzurufen, der nicht existiert.
- Ergebnis: Netzwerkausnahme / Fehler in der Konsole und Fallback-Analyse aus dem Frontend.

## Struktur der erwarteten Antwort
Das Frontend erwartet JSON in diesem Format:
```json
{
  "candidates": [
    {
      "content": {
        "parts": [
          { "text": "Dein Analyse-Text" }
        ]
      }
    }
  ]
}
```
Die Stub liefert genau dieses Schema.

## Echte KI-Integration (OpenAI direkt eingebaut)
In `server.js` ist bereits echte OpenAI-Unterstützung vorgesehen. Aktiviere sie per Umgebungsvariablen:

```powershell
# PowerShell (Windows)
$env:AI_PROVIDER = 'openai'
$env:OPENAI_API_KEY = 'DEIN_KEY_HIER'
# Optional: anderes Modell & Timeout (ms)
$env:OPENAI_MODEL = 'gpt-4o-mini'
$env:AI_TIMEOUT_MS = '25000'
npm start
```

Danach liefert `/analyze` echte KI-Antworten. Bei Fehlern (Timeout, fehlender Key, Rate Limit) fällt der Server automatisch auf die heuristische Zusammenfassung zurück (meta.fallback = true).

Response-Beispiel:
```json
{
  "meta": { "provider": "openai", "fallback": false },
  "candidates": [ { "content": { "parts": [ { "text": "...Analyse..." } ] } } ]
}
```

### Fehler- & Troubleshooting-Checkliste
| Problem | Ursache | Lösung |
|---------|---------|--------|
| 400 Ungültiger Prompt | JSON body leer oder kein `prompt` | Stelle sicher, dass Frontend prompt sendet |
| 401 / 403 | API-Key falsch oder fehlt | `echo $env:OPENAI_API_KEY` prüfen |
| Timeout | Modell langsam oder Netzproblem | `AI_TIMEOUT_MS` erhöhen (z.B. 40000) |
| Rate Limit | Zu viele Requests | kurz warten, Key/Plan prüfen |
| Fallback aktiv | Provider-Fehler oder nicht gesetzt | `AI_PROVIDER` und Key prüfen |

### Alternative Provider (Platzhalter)
Weitere Anbieter können analog integriert werden (z.B. HuggingFace Inference, Azure OpenAI). Vorgehen: zusätzliche Branch in `callRealProvider` für `AI_PROVIDER==='huggingface'` hinzufügen.

## Sicherheitshinweise
- Lege API Keys niemals fest in Dateien ein. Nutze Umgebungsvariablen oder `.env` (und `.env` in `.gitignore`).
- Prüfe Antwortinhalte vor Anzeige, falls du Moderation benötigst.

## Fallback Lokale Analyse
Falls der externe Request fehlschlägt oder ein unerwartetes Format zurückkommt, erzeugt das Frontend automatisch eine lokale heuristische Zusammenfassung der Antworten (`generateLocalSummary`). Diese zeigt dir trotzdem eine Auswertung, damit die Nutzererfahrung nicht leer bleibt.

## Nächste Schritte / Ideen
- Erweiterung der Heuristik (z.B. Gewichtung besser begründen)
- Logging & Metriken (Antwortzeit, Fehler)
- CORS / Auth für geschützte Umgebungen
- Tests für /analyze Route (Jest oder Vitest)

Viel Erfolg beim Aktivieren der echten KI-Analyse!
