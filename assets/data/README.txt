Optionaler Datenimport: Wahlkreiskandidierende

- Datei: assets/data/wahlkreiskandidierende.json
- Format: JSON-Objekt mit Wahlkreis-IDs als Schlüssel.
- Struktur pro Wahlkreis:

{
  "wahlkreis-<nr>-<slug>": {
    "candidates": [
      {
        "name": "Vorname Nachname",
        "partyId": "CDU|GRÜNE|SPD|FDP|LINKE|AfD|...",
        "partyName": "Optional: voller Parteiname (falls partyId unbekannt)",
        "bio": "Optional",
        "priorities": ["Optional"],
        "localTheses": { "51": 1, "52": 0 }
      }
    ]
  }
}

Hinweise:
- partyId sollte mit den in data.js definierten IDs übereinstimmen (z.B. "CDU", "GRÜNE").
- Felder bio/priorities/localTheses sind optional.
- Wenn die Datei fehlt, läuft die App mit den in data.js hinterlegten Platzhaltern weiter.
- Beispiel siehe wahlkreiskandidierende.sample.json.
