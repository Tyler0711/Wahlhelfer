// --- DATA ---
const theses = [
    { 
        id: 1, 
        text: "Der Ausbau von Windkraftanlagen in Baden-Württemberg sollte beschleunigt werden.", 
        explanation: "Diese These befasst sich mit der Geschwindigkeit, mit der Windkraft als erneuerbare Energiequelle im Land ausgebaut werden soll. Befürworter sehen darin einen wichtigen Schritt zur Energiewende, während Kritiker Umweltaspekte oder die Beeinträchtigung des Landschaftsbildes anführen.",
        // NEU
        pro: [
            "Wichtiger Schritt zur Erreichung der Klimaziele und zur Energiewende.",
            "Verringert die Abhängigkeit von fossilen Brennstoffen und Energieimporten.",
            "Windkraft ist eine etablierte und kosteneffiziente Technologie."
        ],
        con: [
            "Beeinträchtigung des Landschaftsbildes und Lärmbelästigung für Anwohner.",
            "Potenzielle Gefährdung von Vögeln und Fledermäusen (Artenschutz).",
            "Schwankende Energieerzeugung (Volatilität) erfordert Speicherlösungen."
        ]
        // ENDE NEU
    },
    { 
        id: 2, 
        text: "Studiengebühren für Nicht-EU-Ausländer sollten wieder abgeschafft werden.", 
        explanation: "Hier geht es um die Frage, ob Studierende von außerhalb der Europäischen Union in Baden-Württemberg Studiengebühren zahlen sollen. Die Abschaffung wird oft mit Chancengleichheit und der Attraktivität des Studienstandorts begründet, die Beibehaltung mit der Finanzierung der Hochschulen.",
        // NEU
        pro: [
            "Erhöht die Chancengleichheit und den Zugang zu Bildung für internationale Talente.",
            "Steigert die Attraktivität des Studienstandorts Baden-Württemberg im globalen Wettbewerb.",
            "Fördert den kulturellen Austausch und die Internationalisierung der Hochschulen."
        ],
        con: [
            "Die Gebühren generieren wichtige Einnahmen zur Verbesserung der Lehre und Ausstattung.",
            "Studierende aus dem Ausland nutzen die Infrastruktur und sollten sich daran beteiligen.",
            "Andere Länder (z.B. USA, UK) erheben ebenfalls hohe Gebühren."
        ]
        // ENDE NEU
    },
    { 
        id: 3, 
        text: "Das Land sollte den Ausbau von Radschnellwegen stärker finanziell fördern.", 
        explanation: "Diese These betrifft die Infrastruktur für den Radverkehr. Eine stärkere Förderung von Radschnellwegen soll den Umstieg auf das Fahrrad erleichtern, die Umwelt entlasten und die Verkehrssituation verbessern.",
        // NEU
        pro: [
            "Fördert eine umweltfreundliche und gesunde Mobilitätsalternative.",
            "Entlastet Straßen und den ÖPNV, besonders im Berufsverkehr.",
            "Verbessert die Verkehrssicherheit für Radfahrende."
        ],
        con: [
            "Hohe Baukosten für oft spezialisierte Strecken.",
            "Flächenverbrauch und Konkurrenz zu anderen Verkehrswegen (Fußgänger, Autos).",
            "Nutzen ist stark wetterabhängig und auf bestimmte Nutzergruppen beschränkt."
        ]
        // ENDE NEU
    },
    { 
        id: 4, 
        text: "In allen städtischen Neubaugebieten sollte eine Quote für sozialen Wohnungsbau gelten.", 
        explanation: "Die These thematisiert die Schaffung von bezahlbarem Wohnraum in Städten. Eine Quote würde Bauträger verpflichten, einen bestimmten Anteil an Sozialwohnungen zu errichten, um die Wohnungsnot zu lindern.",
        // NEU
        pro: [
            "Sorgt für bezahlbaren Wohnraum für Gering- und Normalverdiener.",
            "Verhindert soziale Segregation und fördert gemischte Wohnviertel.",
            "Bremst den Anstieg der Mieten im gesamten Stadtgebiet."
        ],
        con: [
            "Verlangsamt und verteuert den allgemeinen Wohnungsbau, da Investoren abgeschreckt werden.",
            "Führt zu höheren Preisen für die frei finanzierten Wohnungen (Quersubventionierung).",
            "Bürokratischer Aufwand bei der Umsetzung und Vergabe."
        ]
        // ENDE NEU
    },
    { 
        id: 5, 
        text: "Die Videoüberwachung auf öffentlichen Plätzen sollte ausgeweitet werden.", 
        explanation: "Hierbei geht es um die Balance zwischen Sicherheit und Datenschutz. Eine Ausweitung der Videoüberwachung soll Kriminalität vorbeugen und aufklären, während Kritiker Bedenken hinsichtlich der Privatsphäre äußern.",
        // NEU
        pro: [
            "Erhöht das subjektive Sicherheitsgefühl der Bevölkerung.",
            "Hilft bei der Aufklärung von Straftaten (Beweismittel).",
            "Kann abschreckend auf potenzielle Täter wirken."
        ],
        con: [
            "Eingriff in die PrivatsphEre und die informationelle Selbstbestimmung aller Bürger.",
            "Gefahr der permanenten Überwachung und des Missbrauchs der Daten.",
            "Verdrängt Kriminalität oft nur in unbeobachtete Bereiche, statt sie zu verhindern."
        ]
        // ENDE NEU


    },
{
    id: 6,
    text: "Das neunjährige Gymnasium (G9) sollte als Regelschulform wieder eingeführt werden.",
    explanation: "Diese These betrifft die Schulpolitik und die Dauer der gymnasialen Oberstufe. Die Wiedereinführung von G9 wird oft mit einer Entzerrung des Lehrplans und mehr Zeit für die individuelle Entwicklung der Schüler begründet.",
    pro: [
           "Weniger Stoffdruck",
           "Mehr Zeit für persönliche Entwicklung",
           "Mehr Zeit für Vertiefung sowie musisch-soziale Angebote"
    ],
    con: [
        "Längere Schulzeit kann zu psychischer Belastung führen.",
        "Verzögerung des Berufseinstiegs um ein Jahr.",
        "Höhere Kosten für das Schulsystem."
    ]
    // ENDE NEU
},
    { id: 7, text: "Baden-Württemberg sollte sich für ein generelles Tempolimit von 130 km/h auf Autobahnen einsetzen.", explanation: "Diese These bezieht sich auf die Verkehrspolitik und den Klimaschutz. Ein Tempolimit soll den CO2-Ausstoß reduzieren, die Verkehrssicherheit erhöhen und Staus mindern.",
        pro: [
            "Reduziert CO2-Ausstoß und Kraftstoffverbrauch.",
            "Erhöht Verkehrssicherheit durch weniger schwere Unfälle.",
            "Glättet Verkehrsfluss und kann Stauspitzen verringern."
        ],
        con: [
            "Eingriff in individuelle Freiheit und Fahrdynamik.",
            "Begrenzter zusätzlicher Nutzen gegenüber anderen Klimamaßnahmen.",
            "Kann Wirtschafts- und Logistikverkehr leicht verlangsamen."
        ]
    },
    { id: 8, text: "Die Förderung für den Kauf von Elektroautos sollte vom Land aufgestockt werden.", explanation: "Hier geht es um die Unterstützung der Elektromobilität. Eine höhere Förderung soll den Umstieg auf Elektrofahrzeuge attraktiver machen und so zur Reduzierung von Emissionen beitragen.",
        pro: [
            "Beschleunigt Markthochlauf emissionsarmer Mobilität.",
            "Unterstützt heimische Innovations- und Zulieferindustrie.",
            "Senkt langfristig Betriebskosten für Nutzer."
        ],
        con: [
            "Hohe fiskalische Kosten und Mitnahmeeffekte für Besserverdienende.",
            "Lenkt Mittel von Infrastruktur (Ladenetz/ÖPNV) weg.",
            "Ökobilanz abhängig von Strommix und Batterieproduktion."
        ]
    },
    { id: 9, text: "These 9: Die Digitalisierung der Verwaltung sollte massiv beschleunigt werden.", explanation: "Diese These betrifft die Modernisierung der öffentlichen Verwaltung durch digitale Angebote. Befürworter sehen darin Effizienzgewinne und bessere Bürgerservices, während Kritiker Datenschutz und digitale Spaltung thematisieren.",
        pro: [
            "Verkürzt Bearbeitungszeiten und spart Personalressourcen.",
            "Erhöht Transparenz und Nachvollziehbarkeit von Verfahren.",
            "Senkt Bürokratiekosten für Bürger und Unternehmen."
        ],
        con: [
            "Hohe Anfangsinvestitionen und Migrationsrisiken alter Systeme.",
            "Datenschutz- und IT-Sicherheitsrisiken bei schlechter Umsetzung.",
            "Gefahr digitaler Ausgrenzung weniger technikaffiner Menschen."
        ]
    },
    { id: 10, text: "These 10: Der öffentliche Nahverkehr (ÖPNV) sollte landesweit kostenfrei sein.", explanation: "Hierbei geht es um die Finanzierung und Zugänglichkeit des ÖPNV. Eine kostenfreie Nutzung soll den Umstieg vom Auto fördern und die Mobilität für alle Bevölkerungsschichten verbessern.",
        pro: [
            "Senkt Barrieren und fördert Umstieg vom Auto.",
            "Entlastet Haushalte mit niedrigen Einkommen.",
            "Einfachere Tarifstruktur reduziert Komplexität."
        ],
        con: [
            "Hoher dauerhafter Finanzierungsbedarf aus Steuern.",
            "Überlastung zu Stoßzeiten ohne parallelen Ausbau.",
            "Fehlende Preissignale können ineffiziente Nutzung fördern."
        ]
    },
    { id: 11, text: "These 11: Die Anzahl der Lehrerstellen an Schulen in Baden-Württemberg sollte deutlich erhöht werden.", explanation: "Diese These befasst sich mit der Qualität der Bildung und der Arbeitsbelastung von Lehrkräften. Eine Erhöhung der Stellen soll kleinere Klassen und eine bessere individuelle Förderung ermöglichen.",
        pro: [
            "Kleinere Klassen ermöglichen bessere individuelle Förderung.",
            "Entlastet Lehrkräfte und senkt Burnout-Risiko.",
            "Verbessert langfristig Unterrichtsqualität und Bildungschancen."
        ],
        con: [
            "Schwierige Gewinnung qualifizierten Personals (Fachkräftemangel).",
            "Erhöht laufende Personalkosten erheblich.",
            "Mehr Koordinations- und Verwaltungsaufwand möglich."
        ]
    },
    { id: 12, text: "These 12: Der Anbau von gentechnisch veränderten Pflanzen sollte in Baden-Württemberg verboten bleiben.", explanation: "Hier geht es um die Landwirtschaftspolitik und den Umgang mit Gentechnik. Befürworter eines Verbots sehen Risiken für Umwelt und Gesundheit, während andere Potenzial für Ertragssteigerungen sehen.",
        pro: [
            "Vorsorgeprinzip bei unklaren Langzeitfolgen für Ökosysteme.",
            "Schutz ökologischer und traditioneller Anbauformen.",
            "Erhöht Verbraucherakzeptanz heimischer Produkte."
        ],
        con: [
            "Verpasst Ertrags- und Resilienzsteigerungen (z.B. Trockenstress).",
            "Hemmt Forschung und Wettbewerbsfähigkeit des Standorts.",
            "Importierte Produkte unterlaufen Effekt des Verbots."
        ]
    },
    { id: 13, text: "These 13: Das Land sollte mehr Mittel für die Sanierung und Modernisierung von Krankenhäusern bereitstellen.", explanation: "Diese These betrifft die Gesundheitsversorgung und die Infrastruktur der Krankenhäuser. Eine stärkere Finanzierung soll die Qualität der medizinischen Versorgung sichern und verbessern.",
        pro: [
            "Verbessert Patientensicherheit und Versorgungsqualität.",
            "Energieeffiziente Gebäude senken Betriebskosten langfristig.",
            "Modernes Equipment steigert Attraktivität für Fachkräfte."
        ],
        con: [
            "Hoher Investitionsbedarf belastet den Haushalt.",
            "Umbauten verursachen vorübergehende Kapazitätsengpässe.",
            "Risiko ineffizienter Mittelverwendung ohne Priorisierung."
        ]
    },
    { id: 14, text: "These 14: Kulturelle Einrichtungen (Theater, Museen) sollten stärker staatlich gefördert werden.", explanation: "Hierbei geht es um die Wertschätzung und Zugänglichkeit von Kunst und Kultur. Eine höhere Förderung soll die Vielfalt des kulturellen Angebots sichern und erweitern.",
        pro: [
            "Sichert Vielfalt und Teilhabe am kulturellen Leben.",
            "Stärkt regionale Identität und Tourismus.",
            "Fördert Bildung und kreatives Lernen."
        ],
        con: [
            "Zusätzliche Subventionen belasten den Haushalt.",
            "Risiko Abhängigkeit von staatlicher Finanzierung.",
            "Mittel könnten in Pflichtaufgaben fließen."
        ]
    },
    { id: 15, text: "These 15: Die Landesregierung sollte sich für eine stärkere Regulierung großer Digitalkonzerne einsetzen.", explanation: "Diese These befasst sich mit der Digitalpolitik und der Macht großer Technologieunternehmen. Eine stärkere Regulierung soll fairen Wettbewerb und Datenschutz gewährleisten.",
        pro: [
            "Schützt Wettbewerb und verhindert Missbrauch von Marktmacht.",
            "Verbessert Datenschutz und Transparenz.",
            "Fördert Innovationschancen kleiner Anbieter."
        ],
        con: [
            "Zu viel Regulierung kann Investitionen abschrecken.",
            "Erheblicher Verwaltungs- und Compliance-Aufwand.",
            "Alleingänge können Standortnachteil erzeugen."
        ]
    },
    { id: 16, text: "These 16: Der Bau neuer Autobahnen und Bundesstraßen in Baden-Württemberg sollte gestoppt werden.", explanation: "Diese These betrifft die Verkehrsinfrastruktur und den Umweltschutz. Ein Baustopp soll Flächenverbrauch reduzieren und den Fokus auf nachhaltige Mobilität legen.",
        pro: [
            "Reduziert Flächenversiegelung und Biodiversitätsverlust.",
            "Lenkt Mittel in Sanierung und nachhaltige Alternativen.",
            "Senkt langfristige Unterhaltungs- und Ausbaukosten."
        ],
        con: [
            "Kapazitätsengpässe können sich bei wachsendem Verkehr verschärfen.",
            "Wirtschaftliche Erreichbarkeit ländlicher Räume leidet.",
            "Staus auf bestehenden Strecken ohne Alternativen."
        ]
    },
    { id: 17, text: "These 17: Die Polizeipräsenz in ländlichen Gebieten sollte erhöht werden.", explanation: "Hier geht es um die Sicherheit im ländlichen Raum. Eine höhere Polizeipräsenz soll das Sicherheitsgefühl stärken und die Kriminalität bekämpfen.",
        pro: [
            "Stärkt Sicherheitsgefühl und verkürzt Reaktionszeiten.",
            "Bessere Prävention von Eigentums- und Gewaltkriminalität.",
            "Fördert Vertrauensbeziehungen zur Bevölkerung."
        ],
        con: [
            "Hohe Personalkosten bei oft geringer Fallbelastung.",
            "Digitale Meldesysteme könnten kosteneffizienter sein.",
            "Risiko Überwachungsempfinden trotz geringer Kriminalität."
        ]
    },
    { id: 18, text: "These 18: Die duale Ausbildung (Berufsschule und Betrieb) sollte weiter gestärkt werden.", explanation: "Diese These betrifft die Bildungspolitik und die Fachkräftesicherung. Eine Stärkung der dualen Ausbildung soll die Attraktivität handwerklicher und technischer Berufe erhöhen.",
        pro: [
            "Sichert praxisnahe Qualifikationen für den Mittelstand.",
            "Reduziert Jugendarbeitslosigkeit durch direkte Übergänge.",
            "Fördert regionale Bindung von Fachkräften."
        ],
        con: [
            "Abhängigkeit von Unternehmenslage und Konjunktur.",
            "Qualitätsunterschiede zwischen Ausbildungsbetrieben.",
            "Kann akademische Bildungschancen verdrängen."
        ]
    },
    { id: 19, text: "These 19: Baden-Württemberg sollte sich für ein bundesweites Verbot von Glyphosat einsetzen.", explanation: "Hierbei geht es um den Einsatz von Pestiziden in der Landwirtschaft und den Umweltschutz. Ein Verbot soll die Artenvielfalt schützen und die Gesundheit der Bevölkerung gewährleisten.",
        pro: [
            "Schützt Biodiversität und Bodenorganismen.",
            "Reduziert Rückstände in Nahrung und Umwelt.",
            "Fördert mechanische und ökologische Alternativen."
        ],
        con: [
            "Erhöht Arbeits- und Produktionskosten für Betriebe.",
            "Mögliche Übergangs-Ertragseinbußen.",
            "Gefahr Ausweichen auf andere problematische Mittel."
        ]
    },
    { id: 20, text: "These 20: Die Landesregierung sollte die Gründung von Start-ups stärker finanziell unterstützen.", explanation: "Diese These betrifft die Wirtschaftsförderung und Innovation. Eine stärkere Unterstützung soll die Wettbewerbsfähigkeit des Landes stärken und neue Arbeitsplätze schaffen.",
        pro: [
            "Beschleunigt Innovation und regionale Wertschöpfung.",
            "Schafft zukunftsfähige Arbeitsplätze.",
            "Verbessert Kapitalzugang in frühen Unternehmensphasen."
        ],
        con: [
            "Risiko Mitnahmeeffekte ohne nachhaltiges Geschäftsmodell.",
            "Staatliche Auswahl kann Marktverzerrungen erzeugen.",
            "Fokus auf Start-ups könnte etablierte KMU benachteiligen."
        ]
    },
    { id: 21, text: "These 21: Der Ausbau des Mobilfunknetzes (5G) sollte auch in abgelegenen Gebieten vorangetrieben werden.", explanation: "Diese These befasst sich mit der digitalen Infrastruktur. Ein flächendeckender Ausbau soll die digitale Teilhabe sichern und die Wirtschaft ankurbeln.",
        pro: [
            "Sichert digitale Teilhabe ländlicher Regionen.",
            "Unterstützt Landwirtschaft und Industrie (IoT-Anwendungen).",
            "Verhindert digitale Abwanderung junger Menschen."
        ],
        con: [
            "Hohe Investitionskosten bei geringer Nutzerdichte.",
            "Geringe Renditeperspektive für Betreiber.",
            "Diskussion über Umwelt- und Gesundheitswirkung kann Projekte verzögern."
        ]
    },
    { id: 22, text: "These 22: Die Landesförderung für Sportvereine sollte erhöht werden.", explanation: "Hier geht es um die Unterstützung des Ehrenamtes und der Sportförderung. Eine höhere Förderung soll die Vereinsarbeit stärken und die Gesundheitsförderung unterstützen.",
        pro: [
            "Stärkt Ehrenamt und sozialen Zusammenhalt.",
            "Fördert Gesundheit und Prävention (langfristige Kostendämpfung).",
            "Integration und Inklusion durch gemeinsames Training."
        ],
        con: [
            "Zusätzliche dauerhafte Subventionslast.",
            "Risiko ungleicher Verteilung nach Lobbyeinfluss.",
            "Mittel könnten im Schulsport effizienter wirken."
        ]
    },
    { id: 23, text: "These 23: Die Einführung eines verpflichtenden Sozialjahres für junge Menschen sollte geprüft werden.", explanation: "Diese These betrifft die Gesellschaftspolitik. Ein Sozialjahr soll den sozialen Zusammenhalt stärken und jungen Menschen Orientierung bieten.",
        pro: [
            "Fördert soziale Kompetenzen und Verantwortungsgefühl.",
            "Entlastet soziale Einrichtungen personell.",
            "Bietet Orientierung für Bildungs- und Berufsentscheidungen."
        ],
        con: [
            "Zwang statt Freiwilligkeit kann Motivation senken.",
            "Verzögert Studien- oder Berufseinstieg.",
            "Administrativer Aufwand für Matching und Qualitätssicherung."
        ]
    },
    { id: 24, text: "These 24: Die Anzahl der Studienplätze an den Universitäten des Landes sollte erhöht werden.", explanation: "Hierbei geht es um die Bildungschancen und die Fachkräftesicherung. Eine Erhöhung der Studienplätze soll mehr jungen Menschen den Zugang zu höherer Bildung ermöglichen.",
        pro: [
            "Verbessert Zugang zu akademischer Bildung.",
            "Fördert Fachkräftesicherung in Engpassbereichen.",
            "Erhöht regionale Attraktivität für Talente."
        ],
        con: [
            "Qualitätsrisiko bei knappen Ressourcen (Personal/Räume).",
            "Hohe Investitions- und Betriebskosten.",
            "Gefahr von Überakademisierung gegenüber dualen Wegen."
        ]
    },
    { id: 25, text: "These 25: Die Landesregierung sollte sich für eine Lockerung des Ladenschlussgesetzes einsetzen.", explanation: "Diese These betrifft die Wirtschaftspolitik und die Öffnungszeiten im Einzelhandel. Eine Lockerung soll die Wettbewerbsfähigkeit stärken und den Konsumenten mehr Flexibilität bieten.",
        pro: [
            "Mehr Konsumentenflexibilität und Serviceorientierung.",
            "Stärkt Wettbewerb und Umsätze in urbanen Zentren.",
            "Anpassung an digitale und veränderte Lebensrhythmen."
        ],
        con: [
            "Belastung für Beschäftigte (Arbeitszeiten/Familienleben).",
            "Vorteil für große Ketten gegenüber kleinen Läden.",
            "Mehr Energieverbrauch durch längere Öffnungszeiten."
        ]
    },
    { id: 26, text: "These 26: Der Schutz des Schwarzwalds vor Borkenkäferbefall sollte Priorität haben, auch durch verstärkten Holzeinschlag.", explanation: "Hier geht es um den Waldschutz und die Forstwirtschaft. Ein verstärkter Holzeinschlag soll die Ausbreitung des Borkenkäfers eindämmen und den Wald schützen.",
        pro: [
            "Eindämmung des Befalls verhindert Ausbreitung.",
            "Nutzung von Schadholz statt Verfall schafft Wertschöpfung.",
            "Ermöglicht Aufbau klimastabiler Mischwälder."
        ],
        con: [
            "Intensive Eingriffe stören Ökosystem und Arten.",
            "Risiko Übernutzung gesunder Bestände.",
            "Bodenverdichtung und Erosion durch Maschinen."
        ]
    },
    { id: 27, text: "These 27: Die Förderung von Forschung und Entwicklung im Bereich Künstliche Intelligenz sollte massiv ausgebaut werden.", explanation: "Diese These betrifft die Innovationspolitik und die Zukunftsfähigkeit des Landes. Eine stärkere Förderung soll Baden-Württemberg als KI-Standort etablieren.",
        pro: [
            "Positioniert das Land als globalen Innovationsstandort.",
            "Produktivitätsschübe in Industrie und Verwaltung.",
            "Zieht internationale Fachkräfte und Kapital an."
        ],
        con: [
            "Hohe dauerhafte Finanzierung ohne garantierten Output.",
            "Komplexe ethische und Datenschutzfragen.",
            "Gefahr Konzentration auf Trend statt Grundlagenforschung."
        ]
    },
    { id: 28, text: "These 28: Die Landesregierung sollte die Gebühren für Kinderbetreuung schrittweise abschaffen.", explanation: "Hierbei geht es um die Familienpolitik und die Vereinbarkeit von Familie und Beruf. Eine Gebührenfreiheit soll Familien finanziell entlasten und die Chancengleichheit erhöhen.",
        pro: [
            "Entlastet Familien finanziell und fördert Erwerbstätigkeit.",
            "Verbessert Teilnahme an frühkindlicher Bildung.",
            "Sozialer Ausgleich für geringere Einkommen."
        ],
        con: [
            "Hoher Ersatzfinanzierungsbedarf aus Steuermitteln.",
            "Qualitätsdruck ohne parallele Investitionen.",
            "Geringer Zusatznutzen für sehr hohe Einkommen (Mitnahmeeffekt)."
        ]
    },
    { id: 29, text: "These 29: Der Ausbau der erneuerbaren Energien sollte Vorrang vor dem Artenschutz haben.", explanation: "Diese These thematisiert den Konflikt zwischen Energiewende und Naturschutz. Ein Vorrang soll den schnellen Ausbau erneuerbarer Energien ermöglichen.",
        pro: [
            "Beschleunigt Energiewende und Emissionsminderung.",
            "Reduziert Importabhängigkeit kritischer Energieträger.",
            "Skaleneffekte können langfristig Strompreise senken."
        ],
        con: [
            "Gefahr Verlust von Artenvielfalt und Habitatqualität.",
            "Akzeptanzprobleme bei wahrgenommenen Opfern.",
            "Konflikte mit bestehenden Naturschutzvorgaben."
        ]
    },
    { id: 30, text: "These 30: Das Land sollte mehr Personal für die Pflege in Krankenhäusern und Pflegeheimen einstellen.", explanation: "Hier geht es um die Gesundheitsversorgung und die Arbeitsbedingungen in der Pflege. Mehr Personal soll die Qualität der Versorgung verbessern und die Belastung der Pflegenden reduzieren.",
        pro: [
            "Verbessert Betreuungsqualität und Patientensicherheit.",
            "Reduziert Überlastung und Fluktuation im Beruf.",
            "Steigert Attraktivität des Pflegeberufs (Nachwuchsgewinn)."
        ],
        con: [
            "Fachkräftemangel erschwert schnelle Besetzung.",
            "Höhere laufende Personalkosten für Träger/Haushalt.",
            "Begrenzter Effizienzgewinn ohne Prozessoptimierung."
        ]
    },
    { id: 31, text: "These 31: Die Finanzierung der Hochschulen sollte stärker an deren Forschungsleistung gekoppelt werden.", explanation: "Diese These betrifft die Hochschulpolitik und die Leistungsanreize. Eine stärkere Kopplung soll die Forschungsqualität erhöhen.",
        pro: [
            "Setzt Leistungsanreize für exzellente Forschung.",
            "Kann internationale Sichtbarkeit verbessern.",
            "Erhöht Transparenz der Mittelvergabe."
        ],
        con: [
            "Gefahr Vernachlässigung von Lehre und Grundausstattung.",
            "Benachteiligung kleinerer oder neuer Fachbereiche.",
            "Kurzfristiger Output-Fokus statt langfristiger Grundlagenarbeit."
        ]
    },
    { id: 32, text: "These 32: Der Einsatz von Drohnen zur Überwachung der Landesgrenzen sollte erlaubt sein.", explanation: "Hierbei geht es um die Sicherheit und die Überwachung. Der Einsatz von Drohnen soll die Grenzkontrollen effektiver gestalten.",
        pro: [
            "Effiziente großflächige Beobachtung mit weniger Personal.",
            "Schnellere Lageerkennung bei Schmuggel und illegalen Übertritten.",
            "Langfristig Kosteneinsparung gegenüber Patrouillen."
        ],
        con: [
            "Datenschutz- und Privatsphäreprobleme angrenzender Gebiete.",
            "Technische Ausfälle und Fehlalarme (Wetter/Störungen).",
            "Risiko schrittweiser Ausweitung auf allgemeine Überwachung."
        ]
    },
    { id: 33, text: "These 33: Die Einführung eines verpflichtenden Sozialjahres für junge Menschen sollte geprüft werden.", explanation: "Diese These betrifft die Gesellschaftspolitik. Ein Sozialjahr soll den sozialen Zusammenhalt stärken und jungen Menschen Orientierung bieten.",
        pro: [
            "Fördert soziale Kompetenzen und Verantwortungsgefühl.",
            "Entlastet soziale Einrichtungen personell.",
            "Bietet Orientierung für Bildungs- und Berufsentscheidungen."
        ],
        con: [
            "Zwang statt Freiwilligkeit kann Motivation senken.",
            "Verzögert Studien- oder Berufseinstieg.",
            "Administrativer Aufwand für Matching und Qualitätssicherung."
        ]
    },
    { id: 34, text: "These 34: Der Ausbau des Schienennetzes für den Güterverkehr sollte Priorität haben.", explanation: "Hier geht es um die Verkehrspolitik und den Umweltschutz. Ein Ausbau des Schienennetzes soll den Güterverkehr von der Straße verlagern.",
        pro: [
            "Verlagert LKW-Verkehr und senkt CO2 sowie Staus.",
            "Weniger Straßenverschleiß und Unfallrisiko.",
            "Planbare Lieferketten durch stabile Kapazitäten."
        ],
        con: [
            "Hohe Bau- und Trassenkosten mit langen Genehmigungen.",
            "Flächenkonflikte mit Siedlung und Naturschutz.",
            "Nutzen abhängig von Anschlusslogistik (letzte Meile)."
        ]
    },
    { id: 35, text: "These 35: Die Landesregierung sollte sich für eine stärkere Förderung des ländlichen Raums einsetzen.", explanation: "Diese These betrifft die Regionalentwicklung und die Gleichwertigkeit der Lebensverhältnisse. Eine stärkere Förderung soll die Attraktivität ländlicher Gebiete erhöhen.",
        pro: [
            "Sichert gleichwertige Lebensverhältnisse und verhindert Abwanderung.",
            "Stärkt regionale Wirtschaft und Nahversorgung.",
            "Entlastet Ballungsräume beim Wohn- und Mietdruck."
        ],
        con: [
            "Gefahr Streuung von Mitteln ohne klare Wirkungsmessung.",
            "Hoher Koordinationsaufwand über viele Programme.",
            "Kann ineffiziente Strukturen konservieren."
        ]
    },
    { id: 36, text: "These 36: Die Schuldenbremse im Landeshaushalt sollte gelockert werden, um mehr Investitionen zu ermöglichen.", explanation: "Hierbei geht es um die Finanzpolitik und die Investitionsfähigkeit des Landes. Eine Lockerung soll mehr Spielraum für Zukunftsinvestitionen schaffen.",
        pro: [
            "Ermöglicht Zukunftsinvestitionen (Digitalisierung, Klima, Bildung).",
            "Antizyklische Ausgaben stabilisieren Konjunktur.",
            "Langfristige Produktivität kann höhere Schulden kompensieren."
        ],
        con: [
            "Risiko dauerhafter Verschuldungsdynamik.",
            "Zinsänderungen belasten Haushalt zukünftig.",
            "Gefahr konsumtiver statt investiver Ausgaben."
        ]
    },
    { id: 37, text: "These 37: Die Förderung des ökologischen Landbaus sollte deutlich erhöht werden.", explanation: "Diese These betrifft die Agrarpolitik und den Umweltschutz. Eine höhere Förderung soll den Anteil des ökologischen Landbaus steigern.",
        pro: [
            "Fördert Biodiversität und Bodengesundheit.",
            "Stärkt Markenprofil regionaler Produkte.",
            "Reduziert Pestizid- und Düngerbelastung."
        ],
        con: [
            "Geringere Erträge erhöhen Flächen- und Lebensmittelpreise.",
            "Umstellungskosten und Bürokratie für Betriebe.",
            "Nicht jede Kultur gleich effizient ökologisch anbaubar."
        ]
    },
    { id: 38, text: "These 38: Die Landesregierung sollte sich für eine verpflichtende Gendersprache in öffentlichen Einrichtungen einsetzen.", explanation: "Hier geht es um Gleichberechtigung und Sprachgebrauch. Eine verpflichtende Gendersprache soll zur sprachlichen Gleichstellung beitragen.",
        pro: [
            "Erhöht Sichtbarkeit aller Geschlechter und Inklusion.",
            "Sensibilisiert Verwaltung für Gleichstellungsfragen.",
            "Vereinheitlichung vermeidet inkonsistente Kommunikation."
        ],
        con: [
            "Akzeptanzprobleme und wahrgenommene Sprachkomplexität.",
            "Zusätzlicher Schulungs- und Umstellungsaufwand.",
            "Fokus auf Form statt materielle Gleichstellung möglich."
        ]
    },
    { id: 39, text: "These 39: Der Ausbau von Ganztagsschulen sollte in Baden-Württemberg flächendeckend erfolgen.", explanation: "Diese These betrifft die Bildungspolitik und die Vereinbarkeit von Familie und Beruf. Ein flächendeckender Ausbau soll die Bildungsangebote erweitern und Eltern entlasten.",
        pro: [
            "Bessere Lernförderung und individuelle Betreuung.",
            "Verbessert Vereinbarkeit von Familie und Beruf.",
            "Mehr Chancenausgleich bei sozialer Herkunft."
        ],
        con: [
            "Zusätzlicher Personal- und Raumbedarf.",
            "Höhere Betriebskosten für Kommunen.",
            "Weniger Freizeit und Autonomie für Kinder (Akzeptanzfrage)."
        ]
    },
    { id: 40, text: "These 40: Die Landesregierung sollte die Nutzung von E-Scootern in Fußgängerzonen verbieten.", explanation: "Hierbei geht es um die Verkehrssicherheit und die Nutzung des öffentlichen Raums. Ein Verbot soll die Sicherheit von Fußgängern gewährleisten.",
        pro: [
            "Erhöht Sicherheit und reduziert Unfallrisiko für Fußgänger.",
            "Freihaltung für barrierefreie Mobilität.",
            "Verhindert wildes Abstellen und Behinderungen."
        ],
        con: [
            "Einschränkung emissionsarmer Mikromobilität.",
            "Touristische und lokale Flexibilität sinkt.",
            "Vollverbote statt differenzierter Regeln können unverhältnismäßig sein."
        ]
    },
    { id: 41, text: "These 41: Die Landesförderung für den Breitbandausbau in unterversorgten Gebieten sollte verstärkt werden.", explanation: "Diese These betrifft die digitale Infrastruktur und die digitale Teilhabe. Eine verstärkte Förderung soll schnelle Internetverbindungen für alle ermöglichen.",
        pro: [
            "Standortvorteil für Unternehmen und Homeoffice.",
            "Ermöglicht moderne Bildungs- und Gesundheitsangebote.",
            "Reduziert digitale Kluft zwischen Stadt und Land."
        ],
        con: [
            "Hohe Tiefbaukosten bei geringer Bevölkerungsdichte.",
            "Gefahr von Doppelförderung oder ineffizienten Projekten.",
            "Technologieveraltung durch Zwischenlösungen möglich."
        ]
    },
    { id: 42, text: "These 42: Die Anzahl der Polizisten auf der Straße sollte erhöht werden.", explanation: "Hier geht es um die innere Sicherheit. Eine höhere Präsenz soll das Sicherheitsgefühl stärken und Kriminalität abschrecken.",
        pro: [
            "Sichtbare Präsenz wirkt abschreckend.",
            "Schnellere Intervention bei Vorfällen.",
            "Stärkt subjektives Sicherheitsgefühl."
        ],
        con: [
            "Hohe Personalkosten und Rekrutierungsengpässe.",
            "Begrenzter Effekt ohne präventive Sozialarbeit und Analyse.",
            "Bindet Mittel statt Ursachen zu bekämpfen."
        ]
    },
    { id: 43, text: "These 43: Die Landesregierung sollte sich für eine stärkere Förderung des Tourismus in Baden-Württemberg einsetzen.", explanation: "Diese These betrifft die Wirtschaftsförderung und die Attraktivität des Landes. Eine stärkere Förderung soll den Tourismus ankurbeln und Arbeitsplätze sichern.",
        pro: [
            "Schafft regionale Arbeitsplätze und Wertschöpfung.",
            "Vermarktet Kultur- und Naturangebote nachhaltig.",
            "Saisonverlängerung stabilisiert Einnahmen."
        ],
        con: [
            "Gefahr Überlastung lokaler Infrastruktur (Overtourism).",
            "Abhängigkeit von krisenanfälligem Sektor.",
            "Ressourcen könnten diversere Wirtschaftszweige stärken."
        ]
    },
    { id: 44, text: "These 44: Die Einführung einer landesweiten Pflegestärkung durch zusätzliche Steuern sollte geprüft werden.", explanation: "Hierbei geht es um die Finanzierung der Pflege. Zusätzliche Steuern sollen die Pflegeleistungen verbessern und die Belastung der Pflegebedürftigen reduzieren.",
        pro: [
            "Schafft verlässliche Finanzierung qualitätssteigernder Maßnahmen.",
            "Entlastet Pflegebedürftige und Angehörige finanziell.",
            "Ermöglicht Ausbau präventiver und rehabilitativer Angebote."
        ],
        con: [
            "Zusätzliche Steuerlast für Bürger und Wirtschaft.",
            "Risiko ineffizienter Mittelverwendung ohne Reformen.",
            "Politisch schwer vermittelbar (Akzeptanzproblem)."
        ]
    },
    { id: 45, text: "These 45: Der Bau neuer Wohngebiete sollte vorrangig auf Brachflächen und nicht auf Grünflächen erfolgen.", explanation: "Diese These betrifft die Stadtentwicklung und den Umweltschutz. Die Nutzung von Brachflächen soll den Flächenverbrauch reduzieren und Grünflächen erhalten.",
        pro: [
            "Schont Natur- und Erholungsflächen (Biodiversität).",
            "Revitalisiert Industriebrachen und fördert Innenentwicklung.",
            "Reduziert Zersiedelung und Infrastrukturfolgekosten."
        ],
        con: [
            "Altlastensanierung kann teuer und langwierig sein.",
            "Begrenzte Verfügbarkeit geeigneter Brachflächen.",
            "Verzögerungen können Wohnraummangel verschärfen."
        ]
    },
    { id: 46, text: "These 46: Die Landesregierung sollte die Einführung eines verpflichtenden Kita-Jahres vor der Einschulung unterstützen.", explanation: "Hier geht es um die frühkindliche Bildung und Chancengleichheit. Ein verpflichtendes Kita-Jahr soll allen Kindern einen guten Start in die Schule ermöglichen.",
        pro: [
            "Angleichung von Entwicklungsständen und Sprachförderung.",
            "Früherkennung von Förderbedarf (Inklusion).",
            "Erleichtert Übergang in die Grundschule für Familien."
        ],
        con: [
            "Zusätzlicher Kapazitäts- und Personalbedarf.",
            "Weniger elterliche Wahlfreiheit bei Betreuung.",
            "Kostenbelastung für Kommunen und Land."
        ]
    },
    { id: 47, text: "These 47: Die Förderung von Elektrobussen im ÖPNV sollte massiv ausgebaut werden.", explanation: "Diese These betrifft die Verkehrspolitik und den Klimaschutz. Eine stärkere Förderung soll den Umstieg auf emissionsfreie Busse beschleunigen.",
        pro: [
            "Senkt lokale Emissionen und Luftschadstoffe.",
            "Niedriger Geräuschpegel verbessert Stadtqualität.",
            "Skalierung senkt Batterie- und Betriebskosten."
        ],
        con: [
            "Hohe Anschaffungs- und Ladeinfrastrukturkosten.",
            "Reichweiten- und Wetterabhängigkeit im ländlichen Betrieb.",
            "Flottenumstellung bindet Kapital für andere Verbesserungen."
        ]
    },
    { id: 48, text: "These 48: Die Landesregierung sollte die Forschung an Künstlicher Intelligenz im Bereich der Medizin stärker fördern.", explanation: "Hierbei geht es um die Gesundheitsforschung und Innovation. Eine stärkere Förderung soll neue Diagnose- und Behandlungsmethoden ermöglichen.",
        pro: [
            "Schnellere Diagnosen und personalisierte Therapien.",
            "Entlastung Fachpersonal durch Automatisierung von Routine.",
            "Wettbewerbsvorteil für Gesundheitsstandort."
        ],
        con: [
            "Datenschutz und ethische Risiken bei Patientendaten.",
            "Abhängigkeit von proprietären Algorithmen/Plattformen.",
            "Hohe Validierungs- und Zulassungskosten."
        ]
    },
    { id: 49, text: "These 49: Der Ausbau von Autobahnraststätten mit Ladesäulen für Elektroautos sollte beschleunigt werden.", explanation: "Diese These betrifft die Infrastruktur für Elektromobilität. Ein beschleunigter Ausbau soll die Nutzung von Elektroautos attraktiver machen.",
        pro: [
            "Reduziert Reichweitenangst und fördert Fernverkehrs-E-Mobilität.",
            "Gleichmäßigere Auslastung des Stromnetzes durch intelligente Steuerung.",
            "Stärkt Standortattraktivität für Reisende und Logistik."
        ],
        con: [
            "Hohe Investitionskosten bei anfänglich niedriger Auslastung.",
            "Netzanschluss und Lastspitzen technisch anspruchsvoll.",
            "Gefahr Insel-/Einzellösungen ohne Standardisierung."
        ]
    },
    { id: 50, text: "These 50: Die Landesregierung sollte sich für ein Verbot von Einwegplastikprodukten im Land einsetzen.", explanation: "Hier geht es um den Umweltschutz und die Abfallvermeidung. Ein Verbot soll die Umweltbelastung durch Plastik reduzieren.",
        pro: [
            "Senkt Plastikmüll und Mikroplastikrisiken in Umwelt.",
            "Fördert Entwicklung nachhaltiger Mehrweg-Alternativen.",
            "Entlastet langfristig kommunale Entsorgungskosten."
        ],
        con: [
            "Umstellungskosten für Unternehmen und Gastronomie.",
            "Ersatzmaterialien haben eigene Umweltbilanzprobleme.",
            "Verbraucherkomfort kurzfristig eingeschränkt."
        ]
    },
    { id: 51, text: "Die lokale Infrastruktur (Straßen, Brücken) sollte stärker saniert werden, auch wenn dies zu vorübergehenden Beeinträchtigungen führt.", explanation: "Diese These betrifft die Notwendigkeit, in die Instandhaltung und Modernisierung der lokalen Verkehrswege zu investieren, selbst wenn dies kurzfristig Baustellen und Umleitungen bedeutet.",
        pro: [
            "Verhindert teure spätere Totalsperrungen durch vorbeugende Sanierung.",
            "Erhöht langfristig Verkehrssicherheit und Effizienz.",
            "Modernisierung kann Emissionen durch weniger Stau senken."
        ],
        con: [
            "Kurzfristige Belastung für Wirtschaft und Bewohner.",
            "Bindet Haushaltsmittel statt Neuprojekte zu finanzieren.",
            "Risiko Kostensteigerungen bei parallelen Großprojekten."
        ]
    },
    { id: 52, text: "Es sollten mehr öffentliche Grünflächen und Parks in städtischen Gebieten geschaffen werden.", explanation: "Hier geht es um die Lebensqualität in Städten und den Umweltschutz. Die Schaffung neuer Grünflächen soll die Erholungsmöglichkeiten verbessern und zur Artenvielfalt beitragen.",
        pro: [
            "Verbessert Stadtklima (Hitze- und Wasserrückhalt).",
            "Fördert Gesundheit und psychisches Wohlbefinden.",
            "Erhöht Biodiversität und ökologische Vernetzung."
        ],
        con: [
            "Konkurrenz um Flächen mit Wohn- und Gewerbeentwicklung.",
            "Pflege- und Bewässerungskosten für Kommunen.",
            "Langsame Wirkung bei neu angelegten Flächen (Wachstumszeit)."
        ]
    }
];

const parties = [
    { id: "CDU", name: "CDU", color: "bg-black", logo: "assets/logos/cdu.svg", generalDescription: "Die CDU in Baden-Württemberg vertritt eine bürgerlich-konservative Politik, die auf wirtschaftliche Stärke, innere Sicherheit und eine solide Finanzpolitik setzt. Sie betont oft die Bedeutung von Familie und Tradition, während sie gleichzeitig moderne Themen wie Digitalisierung und Klimaschutz im Blick hat, jedoch oft mit einem Fokus auf technologische Lösungen und Eigenverantwortung.", positions: {1: 0, 2: -1, 3: 1, 4: 0, 5: 1, 6: 1, 7: -1, 8: 1, 9: 1, 10: -1, 11: 0, 12: -1, 13: 1, 14: 0, 15: 0, 16: -1, 17: 1, 18: 1, 19: 0, 20: 1, 21: 1, 22: 1, 23: 0, 24: 0, 25: 1, 26: 1, 27: 1, 28: -1, 29: -1, 30: 1, 31: 1, 32: 1, 33: 0, 34: 1, 35: 1, 36: -1, 37: 0, 38: -1, 39: 1, 40: 0, 41: 1, 42: 1, 43: 1, 44: -1, 45: 1, 46: 1, 47: 1, 48: 1, 49: 1, 50: 0, 51: 1, 52: 0} },
    { id: "GRÜNE", name: "Bündnis 90/Die Grünen", color: "bg-green-600", logo: "assets/logos/gruene.svg", generalDescription: "Bündnis 90/Die Grünen in Baden-Württemberg legen ihren Schwerpunkt auf Umwelt- und Klimaschutz, soziale Gerechtigkeit und eine offene Gesellschaft. Sie setzen sich stark für erneuerbare Energien, nachhaltige Mobilität und Bildung ein und verfolgen eine progressive Politik in vielen gesellschaftlichen Fragen.", positions: {1: 1, 2: -1, 3: 1, 4: 1, 5: -1, 6: -1, 7: 1, 8: 1, 9: 1, 10: 0, 11: 1, 12: 1, 13: 1, 14: 1, 15: 1, 16: 1, 17: -1, 18: 1, 19: 1, 20: 1, 21: 1, 22: 1, 23: 0, 24: 1, 25: -1, 26: -1, 27: 1, 28: 1, 29: 1, 30: 1, 31: 0, 32: -1, 33: 0, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1, 41: 1, 42: -1, 43: 1, 44: 1, 45: 1, 46: 1, 47: 1, 48: 1, 49: 1, 50: 1, 51: 0, 52: 1} },
    { id: "SPD", name: "SPD", color: "bg-red-600", logo: "assets/logos/spd.svg", generalDescription: "Die SPD in Baden-Württemberg konzentriert sich auf soziale Gerechtigkeit, gute Arbeit und Bildung für alle. Sie tritt für eine starke öffentliche Daseinsvorsorge, bezahlbaren Wohnraum und die Stärkung der Arbeitnehmerrechte ein. Klimaschutz wird als soziale Frage betrachtet.", positions: {1: 1, 2: 1, 3: 1, 4: 1, 5: 0, 6: 0, 7: 1, 8: 0, 9: 1, 10: 0, 11: 1, 12: 1, 13: 1, 14: 1, 15: 1, 16: 0, 17: 0, 18: 1, 19: 1, 20: 0, 21: 1, 22: 1, 23: -1, 24: 1, 25: -1, 26: 0, 27: 1, 28: 1, 29: 0, 30: 1, 31: 0, 32: -1, 33: -1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 0, 39: 1, 40: 0, 41: 1, 42: 1, 43: 1, 44: 1, 45: 1, 46: 1, 47: 1, 48: 1, 49: 1, 50: 1, 51: 1, 52: 1} },
    { id: "FDP", name: "FDP", color: "bg-yellow-400", logo: "assets/logos/fdp.svg", generalDescription: "Die FDP in Baden-Württemberg setzt sich für individuelle Freiheit, Eigenverantwortung und eine starke Wirtschaft ein. Sie plädiert für Bürokratieabbau, weniger staatliche Eingriffe, Bildungsexzellenz und innovative Lösungen, insbesondere im digitalen Bereich. Ihre Politik ist oft auf die Stärkung des Mittelstands und die Förderung von Unternehmertum ausgerichtet.", positions: {1: 1, 2: -1, 3: 1, 4: -1, 5: 0, 6: 1, 7: -1, 8: 1, 9: 1, 10: -1, 11: -1, 12: -1, 13: 0, 14: -1, 15: -1, 16: -1, 17: 0, 18: 1, 19: -1, 20: 1, 21: 1, 22: 0, 23: -1, 24: -1, 25: 1, 26: 1, 27: 1, 28: -1, 29: -1, 30: -1, 31: 1, 32: 0, 33: -1, 34: 0, 35: 0, 36: -1, 37: -1, 38: -1, 39: 0, 40: -1, 41: 1, 42: 1, 43: 1, 44: -1, 45: 0, 46: 0, 47: 1, 48: 1, 49: 1, 50: -1, 51: 1, 52: 0} },
    { id: "AfD", name: "AfD", color: "bg-blue-500", logo: "assets/logos/afd.svg", generalDescription: "Die AfD in Baden-Württemberg vertritt eine nationalkonservative und rechtspopulistische Politik. Ihre Schwerpunkte liegen auf der Migrationsbegrenzung, der Kritik an der EU und der Klimapolitik sowie der Stärkung der inneren Sicherheit. Sie betont oft die Bewahrung nationaler Identität und traditioneller Werte.", positions: {1: -1, 2: -1, 3: -1, 4: -1, 5: 1, 6: 1, 7: -1, 8: -1, 9: 0, 10: -1, 11: -1, 12: 1, 13: 0, 14: -1, 15: -1, 16: -1, 17: 1, 18: 1, 19: -1, 20: 0, 21: 1, 22: 0, 23: 1, 24: -1, 25: 0, 26: 1, 27: 0, 28: -1, 29: -1, 30: 0, 31: 1, 32: 1, 33: 1, 34: -1, 35: 1, 36: -1, 37: -1, 38: -1, 39: -1, 40: 1, 41: 0, 42: 1, 43: 0, 44: -1, 45: 0, 46: -1, 47: -1, 48: 0, 49: -1, 50: -1, 51: 1, 52: -1} },
    { id: "LINKE", name: "Die Linke", color: "bg-purple-700", logo: "assets/logos/linke.svg", generalDescription: "Die Linke in Baden-Württemberg setzt sich für soziale Gerechtigkeit, Umverteilung und Frieden ein. Sie fordert eine Stärkung des Sozialstaats, kostenlose Bildung und Gesundheitsversorgung sowie eine Umverteilung von Reichtum. Klimaschutz wird mit sozialer Gerechtigkeit verbunden.", positions: {1: 1, 2: 1, 3: 1, 4: 1, 5: -1, 6: -1, 7: 1, 8: 1, 9: 1, 10: 1, 11: 1, 12: 1, 13: 1, 14: 1, 15: 1, 16: 1, 17: -1, 18: 1, 19: 1, 20: 1, 21: 1, 22: 1, 23: -1, 24: 1, 25: 0, 26: -1, 27: 1, 28: 1, 29: 1, 30: 1, 31: -1, 32: -1, 33: -1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1, 41: 1, 42: -1, 43: 1, 44: 1, 45: 1, 46: 1, 47: 1, 48: 1, 49: 1, 50: 1, 51: 1, 52: 1} },
    { id: "FW", name: "Freie Wähler", color: "bg-orange-500", logo: "assets/logos/fw.svg", generalDescription: "Die Freien Wähler in Baden-Württemberg konzentrieren sich auf kommunale Selbstverwaltung, Bürgernähe und eine pragmatische Sachpolitik. Sie treten für eine solide Finanzpolitik, die Stärkung des Ehrenamtes und die Förderung des ländlichen Raums ein, oft ohne starre ideologische Vorgaben.", positions: {1: 0, 2: 0, 3: 1, 4: 0, 5: 1, 6: 1, 7: 0, 8: 0, 9: 1, 10: -1, 11: 1, 12: 0, 13: 1, 14: 0, 15: 0, 16: -1, 17: 1, 18: 1, 19: 0, 20: 0, 21: 1, 22: 1, 23: 0, 24: 0, 25: 1, 26: 1, 27: 1, 28: 0, 29: 0, 30: 1, 31: 0, 32: 1, 33: 0, 34: 1, 35: 1, 36: 0, 37: 1, 38: -1, 39: 1, 40: 0, 41: 1, 42: 1, 43: 1, 44: 0, 45: 1, 46: 0, 47: 1, 48: 1, 49: 1, 50: 0, 51: 1, 52: 1} },
    { id: "PIRATEN", name: "Piratenpartei", color: "bg-gray-700", logo: "assets/logos/piraten.svg", generalDescription: "Die Piratenpartei in Baden-Württemberg legt ihren Fokus auf digitale Bürgerrechte, Transparenz und Datenschutz. Sie setzt sich für Open Government, freie Software und eine Reform des Urheberrechts ein. Auch Themen wie Bildung und soziale Gerechtigkeit sind Teil ihres Programms, oft mit einem starken Bezug zur Digitalisierung.", positions: {1: 1, 2: 1, 3: 1, 4: 1, 5: -1, 6: 0, 7: 1, 8: 1, 9: 1, 10: 1, 11: 1, 12: 1, 13: 1, 14: 1, 15: 1, 16: 1, 17: -1, 18: 1, 19: 1, 20: 1, 21: 1, 22: 1, 23: -1, 24: 1, 25: 1, 26: -1, 27: 1, 28: 1, 29: 1, 30: 1, 31: -1, 32: -1, 33: -1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1, 41: 1, 42: -1, 43: 1, 44: 1, 45: 1, 46: 1, 47: 1, 48: 1, 49: 1, 50: 1, 51: 0, 52: 1} }
];

// --- WAHLKREIS DATA (Fictional for demonstration) ---
const wahlkreise = [
    { id: "wahlkreis-1-stuttgart-i", name: "Wahlkreis 1, Stuttgart I" },
    { id: "wahlkreis-2-stuttgart-ii", name: "Wahlkreis 2, Stuttgart II" },
    { id: "wahlkreis-3-stuttgart-iii", name: "Wahlkreis 3, Stuttgart III" },
    { id: "wahlkreis-4-stuttgart-iv", name: "Wahlkreis 4, Stuttgart IV" },
    { id: "wahlkreis-5-boeblingen", name: "Wahlkreis 5, Böblingen" },
    { id: "wahlkreis-6-leonberg", name: "Wahlkreis 6, Leonberg" },
    { id: "wahlkreis-7-esslingen", name: "Wahlkreis 7, Esslingen" },
    { id: "wahlkreis-8-kirchheim", name: "Wahlkreis 8, Kirchheim" },
    { id: "wahlkreis-9-nuertingen", name: "Wahlkreis 9, Nürtingen" },
    { id: "wahlkreis-10-goeppingen", name: "Wahlkreis 10, Göppingen" },
    { id: "wahlkreis-11-geislingen", name: "Wahlkreis 11, Geislingen" },
    { id: "wahlkreis-12-ludwigsburg", name: "Wahlkreis 12, Ludwigsburg" },
    { id: "wahlkreis-13-vaihingen", name: "Wahlkreis 13, Vaihingen" },
    { id: "wahlkreis-14-bietigheim-bissingen", name: "Wahlkreis 14, Bietigheim-Bissingen" },
    { id: "wahlkreis-15-waiblingen", name: "Wahlkreis 15, Waiblingen" },
    { id: "wahlkreis-16-schorndorf", name: "Wahlkreis 16, Schorndorf" },
    { id: "wahlkreis-17-backnang", name: "Wahlkreis 17, Backnang" },
    { id: "wahlkreis-18-heilbronn", name: "Wahlkreis 18, Heilbronn" },
    { id: "wahlkreis-19-eppingen", name: "Wahlkreis 19, Eppingen" },
    { id: "wahlkreis-20-neckarsulm", name: "Wahlkreis 20, Neckarsulm" },
    { id: "wahlkreis-21-hohenlohe", name: "Wahlkreis 21, Hohenlohe" },
    { id: "wahlkreis-22-schwaebisch-hall", name: "Wahlkreis 22, Schwäbisch Hall" },
    { id: "wahlkreis-23-main-tauber", name: "Wahlkreis 23, Main-Tauber" },
    { id: "wahlkreis-24-heidenheim", name: "Wahlkreis 24, Heidenheim" },
    { id: "wahlkreis-25-schwaebisch-gmuend", name: "Wahlkreis 25, Schwäbisch Gmünd" },
    { id: "wahlkreis-26-aalen", name: "Wahlkreis 26, Aalen" },
    { id: "wahlkreis-27-karlsruhe-i", name: "Wahlkreis 27, Karlsruhe I" },
    { id: "wahlkreis-28-karlsruhe-ii", name: "Wahlkreis 28, Karlsruhe II" },
    { id: "wahlkreis-29-bruchsal", name: "Wahlkreis 29, Bruchsal" },
    { id: "wahlkreis-30-bretten", name: "Wahlkreis 30, Bretten" },
    { id: "wahlkreis-31-ettlingen", name: "Wahlkreis 31, Ettlingen" },
    { id: "wahlkreis-32-rastatt", name: "Wahlkreis 32, Rastatt" },
    { id: "wahlkreis-33-baden-baden", name: "Wahlkreis 33, Baden-Baden" },
    { id: "wahlkreis-34-heidelberg", name: "Wahlkreis 34, Heidelberg" },
    { id: "wahlkreis-35-mannheim-i", name: "Wahlkreis 35, Mannheim I" },
    { id: "wahlkreis-36-mannheim-ii", name: "Wahlkreis 36, Mannheim II" },
    { id: "wahlkreis-37-wiesloch", name: "Wahlkreis 37, Wiesloch" },
    { id: "wahlkreis-38-neckar-odenwald", name: "Wahlkreis 38, Neckar-Odenwald" },
    { id: "wahlkreis-39-weinheim", name: "Wahlkreis 39, Weinheim" },
    { id: "wahlkreis-40-schwetzingen", name: "Wahlkreis 40, Schwetzingen" },
    { id: "wahlkreis-41-sinsheim", name: "Wahlkreis 41, Sinsheim" },
    { id: "wahlkreis-42-pforzheim", name: "Wahlkreis 42, Pforzheim" },
    { id: "wahlkreis-43-calw", name: "Wahlkreis 43, Calw" },
    { id: "wahlkreis-44-enz", name: "Wahlkreis 44, Enz" },
    { id: "wahlkreis-45-freudenstadt", name: "Wahlkreis 45, Freudenstadt" },
    { id: "wahlkreis-46-freiburg-i", name: "Wahlkreis 46, Freiburg I" },
    { id: "wahlkreis-47-freiburg-ii", name: "Wahlkreis 47, Freiburg II" },
    { id: "wahlkreis-48-breisgau", name: "Wahlkreis 48, Breisgau" },
    { id: "wahlkreis-49-emmendingen", name: "Wahlkreis 49, Emmendingen" },
    { id: "wahlkreis-50-lahr", name: "Wahlkreis 50, Lahr" },
    { id: "wahlkreis-51-offenburg", name: "Wahlkreis 51, Offenburg" },
    { id: "wahlkreis-52-kehl", name: "Wahlkreis 52, Kehl" },
    { id: "wahlkreis-53-rottweil", name: "Wahlkreis 53, Rottweil" },
    { id: "wahlkreis-54-villingen-schwenningen", name: "Wahlkreis 54, Villingen-Schwenningen" },
    { id: "wahlkreis-55-tuttlingen-donaueschingen", name: "Wahlkreis 55, Tuttlingen-Donaueschingen" },
    { id: "wahlkreis-56-konstanz", name: "Wahlkreis 56, Konstanz" },
    { id: "wahlkreis-57-singen", name: "Wahlkreis 57, Singen" },
    { id: "wahlkreis-58-loerrach", name: "Wahlkreis 58, Lörrach" },
    { id: "wahlkreis-59-waldshut", name: "Wahlkreis 59, Waldshut" },
    { id: "wahlkreis-60-reutlingen", name: "Wahlkreis 60, Reutlingen" },
    { id: "wahlkreis-61-hechingen-muensingen", name: "Wahlkreis 61, Hechingen-Münsingen" },
    { id: "wahlkreis-62-tuebingen", name: "Wahlkreis 62, Tübingen" },
    { id: "wahlkreis-63-balingen", name: "Wahlkreis 63, Balingen" },
    { id: "wahlkreis-64-ulm", name: "Wahlkreis 64, Ulm" },
    { id: "wahlkreis-65-ehingen", name: "Wahlkreis 65, Ehingen" },
    { id: "wahlkreis-66-biberach", name: "Wahlkreis 66, Biberach" },
    { id: "wahlkreis-67-bodensee", name: "Wahlkreis 67, Bodensee" },
    { id: "wahlkreis-68-wangen", name: "Wahlkreis 68, Wangen" },
    { id: "wahlkreis-69-ravensburg", name: "Wahlkreis 69, Ravensburg" },
    { id: "wahlkreis-70-sigmaringen", name: "Wahlkreis 70, Sigmaringen" }
];

const genericNames = [
    "Max Mustermann", "Erika Beispiel", "Hans Schmidt", "Lena Meier", "Tim Müller",
    "Sophie Weber", "Paul Fischer", "Anna Klein", "Jonas Schulz", "Laura Wagner",
    "Peter Hoffmann", "Maria Richter", "David Koch", "Sarah Berger", "Felix Keller",
    "Julia Wolf", "Christian Schwarz", "Nadine Fuchs", "Oliver Stein", "Lisa Bach"
];
let nameIndex = 0;
let partyIndex = 0;

function generateCandidates(numCandidates = 4) {
    const candidates = [];
    const partyIds = parties.map(p => p.id); // Get all party IDs
    for (let i = 0; i < numCandidates; i++) {
        const name = genericNames[nameIndex % genericNames.length];
        const partyId = partyIds[partyIndex % partyIds.length];
        const party = parties.find(p => p.id === partyId);

        candidates.push({
            name: name,
            partyId: partyId,
            bio: `**${name}** ist ein engagierter Vertreter der ${party.name} im Wahlkreis. Mit langjähriger Erfahrung in der Kommunalpolitik setzt sich ${name} leidenschaftlich für die Stärkung der lokalen Wirtschaft und die Verbesserung der Lebensqualität in der Region ein. Ein besonderes Anliegen ist die Förderung von Bildung und nachhaltigen Infrastrukturprojekten.`,
            priorities: [
                'Stärkung der lokalen Wirtschaft',
                'Verbesserung der Bildungsinfrastruktur',
                'Nachhaltige Regionalentwicklung',
                'Bürgerbeteiligung und Transparenz'
            ],
            // Simulate positions for a few theses, including the new local ones
            localTheses: {
                51: party.positions[51], // Position on local infrastructure
                52: party.positions[52], // Position on green spaces
                1: party.positions[1] // Example: align with party on a general thesis
            }
        });
        nameIndex++;
        partyIndex++;
    }
    return candidates;
}

// --- KANDIDATEN-DATEN MIT PARTEIENKANDIDATEN UND 2021ER GEWINNER ---
// Struktur: Jeder Wahlkreis hat seine eigenen Kandidaten und seinen eigenen 2021er Gewinner
const candidatesByWahlkreis = {
    "wahlkreis-1-stuttgart-i": {
        candidates: [
            { name: "Teresa Schreiber", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat mit Fokus auf Wirtschaft und Sicherheit." },
            { name: "Muhterem Aras", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin mit Schwerpunkt Klimaschutz und Nachhaltigkeit." },
            { name: "Hanna Binder", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat, engagiert für Arbeitnehmerrechte und Soziales." },
            { name: "Claudia Schober", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin für Wirtschaftsfreiheit und Digitalisierung." },
            { name: "Mersedeh Ghazaei", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat für soziale Gerechtigkeit und Umverteilung." },
            { name: "Arthur Hammerschmidt", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin mit Fokus auf Sicherheit und Migration." }
        ],
        winnerOf2021: { name: "Muhterem Aras", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen" }
    },
    "wahlkreis-2-stuttgart-ii": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat mit Fokus auf Wirtschaft und Sicherheit." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin mit Schwerpunkt Klimaschutz und Nachhaltigkeit." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat, engagiert für Arbeitnehmerrechte und Soziales." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin für Wirtschaftsfreiheit und Digitalisierung." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat für soziale Gerechtigkeit und Umverteilung." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin mit Fokus auf Sicherheit und Migration." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen" }
    },
    "wahlkreis-3-stuttgart-iii": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat mit Fokus auf Wirtschaft und Sicherheit." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin mit Schwerpunkt Klimaschutz und Nachhaltigkeit." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat, engagiert für Arbeitnehmerrechte und Soziales." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin für Wirtschaftsfreiheit und Digitalisierung." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat für soziale Gerechtigkeit und Umverteilung." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin mit Fokus auf Sicherheit und Migration." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "SPD", partyName: "SPD" }
    },
    "wahlkreis-4-stuttgart-iv": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat mit Fokus auf Wirtschaft und Sicherheit." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin mit Schwerpunkt Klimaschutz und Nachhaltigkeit." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat, engagiert für Arbeitnehmerrechte und Soziales." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin für Wirtschaftsfreiheit und Digitalisierung." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat für soziale Gerechtigkeit und Umverteilung." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin mit Fokus auf Sicherheit und Migration." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-5-boeblingen": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat mit Fokus auf Wirtschaft und Sicherheit." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin mit Schwerpunkt Klimaschutz und Nachhaltigkeit." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat, engagiert für Arbeitnehmerrechte und Soziales." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin für Wirtschaftsfreiheit und Digitalisierung." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat für soziale Gerechtigkeit und Umverteilung." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin mit Fokus auf Sicherheit und Migration." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-6-leonberg": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-7-esslingen": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen" }
    },
    "wahlkreis-8-kirchheim": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "SPD", partyName: "SPD" }
    },
    "wahlkreis-9-nuertingen": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-10-goeppingen": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-11-geislingen": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen" }
    },
    "wahlkreis-12-ludwigsburg": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "SPD", partyName: "SPD" }
    },
    "wahlkreis-13-vaihingen": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-14-bietigheim-bissingen": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen" }
    },
    "wahlkreis-15-waiblingen": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-16-schorndorf": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen" }
    },
    "wahlkreis-17-backnang": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-18-heilbronn": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "SPD", partyName: "SPD" }
    },
    "wahlkreis-19-eppingen": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-20-neckarsulm": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen" }
    }
    ,
    "wahlkreis-21-hohenlohe": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-22-schwaebisch-hall": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-23-main-tauber": {
        // Aktualisierte reale Kandidatendaten (Quelle: Benutzerinput, Stand 2025-11-15)
        // Annahme: CDU-Kandidat führt akademischen Titel auch im aktuellen Auftritt ("Prof. Dr."). Falls nicht gewünscht, kann vereinfacht werden.
        candidates: [
            { name: "Gerd Bayer", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Gerd Bayer (Grüne) setzt lokal auf Klima- und Flächenschutz sowie nachhaltige Mobilität." },
            { name: "Prof. Dr. Wolfgang Reinhart", partyId: "CDU", partyName: "CDU", bio: "Prof. Dr. Wolfgang Reinhart (CDU) fokussiert Wirtschaftskraft im ländlichen Raum, Verlässlichkeit und Ehrenamt." },
            { name: "Can Kurter", partyId: "SPD", partyName: "SPD", bio: "Can Kurter (SPD) steht für soziale Sicherheit, bezahlbares Wohnen und gute Arbeit im Main-Tauber-Kreis." },
            { name: "Artur Schmidt", partyId: "FDP", partyName: "FDP", bio: "Artur Schmidt (FDP) wirbt für Bürokratieabbau, Gründerfreundlichkeit und digitale Infrastruktur." },
            { name: "Robert Binder", partyId: "LINKE", partyName: "Die Linke", bio: "Robert Binder (Linke) setzt sich ein für Mieterschutz, soziale Teilhabe und gerechte Bildung." },
            { name: "Jeannette Fischer", partyId: "AfD", partyName: "AfD", bio: "Jeannette Fischer (AfD) betont innere Sicherheit und Kritik an Migrationspolitik." }
        ],
        winnerOf2021: { name: "Prof. Dr. Wolfgang Reinhart", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-24-heidenheim": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-25-schwaebisch-gmuend": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-26-aalen": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-27-karlsruhe-i": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-28-karlsruhe-ii": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen" }
    },
    "wahlkreis-29-bruchsal": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-30-bretten": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-31-ettlingen": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen" }
    },
    "wahlkreis-32-rastatt": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-33-baden-baden": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-34-heidelberg": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "SPD", partyName: "SPD" }
    },
    "wahlkreis-35-mannheim-i": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen" }
    },
    "wahlkreis-36-mannheim-ii": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-37-wiesloch": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-38-neckar-odenwald": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen" }
    },
    "wahlkreis-39-weinheim": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-40-schwetzingen": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen" }
    },
    "wahlkreis-41-sinsheim": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-42-pforzheim": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen" }
    },
    "wahlkreis-43-calw": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-44-enz": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen" }
    },
    "wahlkreis-45-freudenstadt": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-46-freiburg-i": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen" }
    },
    "wahlkreis-47-freiburg-ii": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-48-breisgau": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen" }
    },
    "wahlkreis-49-emmendingen": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-50-lahr": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    }
    ,
    "wahlkreis-51-offenburg": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen" }
    },
    "wahlkreis-52-kehl": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-53-rottweil": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-54-villingen-schwenningen": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen" }
    },
    "wahlkreis-55-tuttlingen-donaueschingen": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-56-konstanz": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen" }
    },
    "wahlkreis-57-singen": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-58-loerrach": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-59-waldshut": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-60-reutlingen": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen" }
    },
    "wahlkreis-61-hechingen-muensingen": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-62-tuebingen": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen" }
    },
    "wahlkreis-63-balingen": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-64-ulm": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-65-ehingen": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-66-biberach": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-67-bodensee": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-68-wangen": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-69-ravensburg": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    },
    "wahlkreis-70-sigmaringen": {
        candidates: [
            { name: "Placeholder CDU Name", partyId: "CDU", partyName: "CDU", bio: "CDU-Kandidat." },
            { name: "Placeholder Grüne Name", partyId: "GRÜNE", partyName: "Bündnis 90/Die Grünen", bio: "Grüne Kandidatin." },
            { name: "Placeholder SPD Name", partyId: "SPD", partyName: "SPD", bio: "SPD-Kandidat." },
            { name: "Placeholder FDP Name", partyId: "FDP", partyName: "FDP", bio: "FDP-Kandidatin." },
            { name: "Placeholder Linke Name", partyId: "LINKE", partyName: "Die Linke", bio: "Linker Kandidat." },
            { name: "Placeholder AfD Name", partyId: "AfD", partyName: "AfD", bio: "AfD-Kandidatin." }
        ],
        winnerOf2021: { name: "Placeholder 2021 Gewinner", partyId: "CDU", partyName: "CDU" }
    }
};

// --- LEADING CANDIDATES (SPITZENKANDIDATEN) ---
const leadingCandidates = {
    "CDU": {
        partyId: "CDU",
        partyName: "Christdemokratische Union Deutschlands",
        name: "Manuel Hagel",
        bio: "Manuel Hagel ist seit 2023 Landesvorsitzender der CDU Baden-Württemberg, zuvor Generalsekretär und Fraktionsvorsitzender. 2025 wurde er mit großer Mehrheit als Spitzenkandidat nominiert und setzt Akzente bei Wirtschaft, Forschung und Familie.",
        positions: [
            "Wirtschaft stärken und Bürokratie abbauen",
            "Forschung und Innovation fördern",
            "Familienland Baden-Württemberg ausbauen"
        ],
        image: "CDU"
    },
    "GRÜNE": {
        partyId: "GRÜNE",
        partyName: "Bündnis 90/Die Grünen",
        name: "Cem Özdemir",
        bio: "Cem Özdemir stammt aus Bad Urach, war Europa- und Bundestagsabgeordneter und bis Mai 2025 Bundesminister für Ernährung und Landwirtschaft. 2025 wurde er mit 97 Prozent als Kandidat für das Amt des Ministerpräsidenten nominiert; er steht für ökologisch-ökonomische Politik, Bildung und Integration.",
        positions: [
            "Wirtschaft und Klimaschutz zusammendenken",
            "Erneuerbare Energien und nachhaltige Mobilität ausbauen",
            "Bildung und Integration stärken"
        ],
        image: "GRÜNE"
    },
    "SPD": {
        partyId: "SPD",
        partyName: "Sozialdemokratische Partei Deutschlands",
        name: "Andreas Stoch",
        bio: "Andreas Stoch ist Landesvorsitzender der SPD und seit 2016 Vorsitzender der Landtagsfraktion; von 2013 bis 2016 war er Kultusminister. 2025 wurde er erneut zum Spitzenkandidaten gewählt und setzt Schwerpunkte bei Wirtschaft, Bildung und Wohnen.",
        positions: [
            "Wirtschaft und gute Arbeit stärken",
            "Bildung verbessern",
            "Bezahlbaren Wohnraum schaffen"
        ],
        image: "SPD"
    },
    "FDP": {
        partyId: "FDP",
        partyName: "Freie Demokratische Partei",
        name: "Dr. Hans-Ulrich Rülke",
        bio: "Dr. Hans‑Ulrich Rülke ist langjähriger FDP-Fraktionsvorsitzender im Landtag, seit Anfang 2025 Landesvorsitzender und 2026 erneut Spitzenkandidat. Bekannt für klare Rhetorik, setzt er auf einen Kurs der Entfesselung von Wirtschaft und Verwaltung.",
        positions: [
            "Bürokratie abbauen",
            "Mittelstand, Innovation und Digitalisierung stärken",
            "Verlässliche Finanzen und leistungsorientierte Bildung"
        ],
        image: "FDP"
    },
    "LINKE": {
        partyId: "LINKE",
        partyName: "Die Linke",
        name: "Kim Sophie Bohnen, Amelie Vollmer und Mersedeh Ghazaei",
        bio: "Die Linke tritt 2026 mit einem weiblichen Spitzentrio an: Kim Sophie Bohnen (Listenplatz 1), Amelie Vollmer (Platz 2) und Mersedeh Ghazaei (Platz 3). Das Trio steht für soziale Politik, Mieterschutz und gerechte Bildungschancen.",
        positions: [
            "Bezahlbares Wohnen und Mieterschutz",
            "Soziale Gerechtigkeit und feministische Akzente",
            "Bildungsgerechtigkeit, Antirassismus und Friedenspolitik"
        ],
        image: "LINKE"
    },
    "AfD": {
        partyId: "AfD",
        partyName: "Alternative für Deutschland",
        name: "Markus Frohnmaier",
        bio: "Markus Frohnmaier ist seit 2022 Co‑Vorsitzender der AfD Baden‑Württemberg und Bundestagsabgeordneter. 2025 wurde er zum Ministerpräsidenten‑Kandidaten nominiert; er kandidiert nicht für ein Landtagsmandat.",
        positions: [
            "Migration stark begrenzen",
            "Klimaschutzpolitik zurückfahren",
            "Russlandfreundliche Außenpolitik"
        ],
        image: "AfD"
    }
};

// Debug: log how many wahlkreise entries are present (open DevTools Console)
console.log('Loaded candidatesByWahlkreis entries:', Object.keys(candidatesByWahlkreis).length);