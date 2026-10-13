# Prompt-Bibliothek & Prompt-Log – Fallstudie 1

Die Aufgabe verlangt ausdrücklich: **Prompts dokumentieren und Vorgehen begründen (Backup).**
Diese Datei hat drei Teile: (A) Prompt-Bibliothek zum Kopieren · (B) Prompt-Log zum Ausfüllen · (C) Textbaustein für die Begründung.

Platzhalter: `[MARKE]`, `[URL]`, `[BRANCHE]`, `[KATEGORIE]`, `[W1]`–`[W5]` (Wettbewerber), `[PERSONA]` (Kurzfassung der Persona).

**Tool-Wahl:** Recherche mit Quellenangaben → Perplexity oder ChatGPT/Claude mit Websuche. Simulation, Strukturierung,
Synthese → ChatGPT oder Claude. Bilder → Midjourney, DALL·E, Firefly o. Ä. Tool und Version im Log notieren.

---

## A. Prompt-Bibliothek

### P0 – Kontext (am Anfang jeder neuen Chat-Session)

```text
Du unterstützt eine studentische Gruppe im Modul Unternehmenskommunikation bei einer Fallstudie zur
Markenidentität der Marke [MARKE] (Branche: [BRANCHE], Markt: Deutschland).
Theoretischer Rahmen ist das Markensteuerrad nach Esch mit den Feldern Markenkompetenz, Markenattribute,
Markennutzen, Markentonalität und Markenbild.

Regeln:
- Trenne klar zwischen belegten Fakten (immer mit Quelle und Jahr) und Annahmen (kennzeichne sie als [ANNAHME]).
- Erfinde keine Zahlen, Studien, Quellen oder Zitate. Wenn du etwas nicht weißt, schreib "unbekannt".
- Antworte auf Deutsch, strukturiert und knapp.

Bestätige in einem Satz, dass du den Rahmen verstanden hast.
```

### P1 – Markenkompetenz (Desk Research)

```text
Recherchiere zur Marke [MARKE] (Website: [URL]):
1. Gründung, Herkunft und die 3–5 wichtigsten Meilensteine der Markenhistorie
2. Eigentümer bzw. Konzernzugehörigkeit; Umsatz, Mitarbeitende und Marktanteil in Deutschland
3. Produkt- bzw. Leistungsportfolio und Preispositionierung
4. Rolle der Marke im Markt (z. B. Pionier, Herausforderer, Spezialist, Marktführer) mit Begründung
5. Selbstverständnis laut Unternehmen: Mission, Vision, Werte, Claim

Gib zu jeder Aussage die URL der Quelle und das Jahr an. Kennzeichne alles, wofür du keine belastbare Quelle findest.
Ausgabe als Tabelle: Merkmal | Inhalt | Quelle.
```

### P2 – Wettbewerbsset

```text
Nenne 5–6 Marken, die eine Person aus der Kernzielgruppe von [MARKE] in Deutschland realistischerweise als
Alternative in Betracht zieht (direkte und indirekte Wettbewerber).
Begründe je Marke in einem Satz, warum sie zum Relevant Set gehört, und ordne Preisniveau und Positionierung grob ein.
Ausgabe als Tabelle: Marke | Begründung | Preisniveau | Positionierung.
```

### P3 – Datengrundlage für die Persona

```text
Welche öffentlich verfügbaren Daten gibt es zur Kundschaft von [MARKE] bzw. zu Käufer:innen der Kategorie
[KATEGORIE] in Deutschland? Suche gezielt nach:
- Alter, Geschlecht, Bildung, Einkommen, Haushaltsgröße
- Wohnort (Stadt/Land, Region)
- Kaufhäufigkeit, Kaufkanäle, Preissensibilität, Markentreue
- Mediennutzung (Plattformen, Nutzungsdauer, Formate)
- Werte, Einstellungen, Lebensstil

Nenne für jede Zahl Quelle, Jahr und – falls angegeben – Stichprobe. Mögliche Quellen: Statista, VuMA,
best for planning, ARD/ZDF-Medienstudie, Sinus-Milieus, AGOF, Geschäftsberichte, Mediadaten der Plattformen.
Wenn es für die Marke selbst keine Daten gibt, nutze Daten zur Kategorie und sag das ausdrücklich.
```

### P4 – Persona-Steckbrief

```text
Erstelle auf Basis dieser Rechercheergebnisse eine Brand Persona für die Kernzielgruppe von [MARKE]:

[RECHERCHEERGEBNISSE AUS P3 EINFÜGEN]

Struktur:
- Name, Alter, ein Zitat (ein Satz, wie die Person über die Kategorie spricht)
- Geografie: Wohnort, Stadt/Land, Region
- Soziodemografie: Geschlecht, Bildung, Beruf, Haushaltsnettoeinkommen, Haushalt/Familienstand
- Kaufverhalten: Kaufanlässe, Frequenz, Kanäle (online/offline), Preissensibilität, Entscheidungskriterien,
  Markentreue, Informationsquellen vor dem Kauf
- Mediennutzung: Plattformen mit Nutzungsdauer, bevorzugte Formate, Tageszeiten, Medien und Influencer
- Psychografie: Werte, Lebensstil, Interessen, Ziele, Pains & Gains, Einstellung zur Kategorie

Kennzeichne jede Angabe als [DATEN: Quelle] oder [ANNAHME: kurze Begründung].
Die Persona soll realistisch und konkret sein, kein Klischee.
```

### P5 – Limbic Map

```text
Ordne diese Persona auf der Limbic Map nach Häusel ein:

[PERSONA EINFÜGEN]

1. Gewichte die drei Motiv- und Emotionssysteme Balance, Dominanz und Stimulanz (Summe 100 %) und begründe jede
   Gewichtung mit konkreten Merkmalen der Persona.
2. Welche Mischbereiche (Abenteuer/Thrill, Disziplin/Kontrolle, Fantasie/Genuss) sind relevant?
3. Welchem Limbic Type entspricht sie am ehesten (Traditionalisten, Harmoniser, Offene, Hedonisten, Abenteurer,
   Performer, Disziplinierte)? Nenne auch den zweitwahrscheinlichsten Typ.
4. Verorte zusätzlich die Marke [MARKE] auf der Limbic Map: Welche Motive spricht ihr aktueller Auftritt an?
5. Bewerte den Fit zwischen Persona und Marke und leite 3 Konsequenzen für Bildwelt, Tonalität und Botschaften ab.
```

### P6 – Persona-Bild (Bildgenerator)

```text
Fotorealistisches Porträt, natürliches Tageslicht, [ALTER]-jährige Person, [BERUF], in [ALLTAGSSITUATION
PASSEND ZUR PERSONA], Kleidungsstil [STIL], authentischer Gesichtsausdruck, keine Stockfoto-Ästhetik, Querformat.
```

Auf der Folie kennzeichnen: *„Bild KI-generiert ([Tool])“*.

### P7 – Repertory Grid: Konstrukte erheben (simulierte Befragte)

```text
Simuliere 5 unterschiedliche Befragte aus der Zielgruppe von [MARKE]. Grundlage ist diese Persona: [PERSONA].
Variiere Alter, Geschlecht und Nutzungsintensität der Kategorie; stelle die 5 Befragten zuerst in je einer Zeile vor.

Elemente: M = [MARKE], W1 = [W1], W2 = [W2], W3 = [W3], W4 = [W4], W5 = [W5], I = "meine Idealmarke".

Führe mit jeder befragten Person diese 8 Triadenvergleiche durch:
1) M–W1–W2  2) M–W3–I  3) W1–W4–I  4) M–W5–W2  5) W2–W3–W4  6) M–W4–I  7) W1–W3–W5  8) M–W5–I

Frage jeweils: "In welcher wichtigen Hinsicht sind sich zwei dieser Marken ähnlich und unterscheiden sich von der dritten?"
Notiere pro Triade das bipolare Konstrukt (Pol – Gegenpol) im Wortlaut der befragten Person.
Antworte so, wie echte Konsument:innen sprechen würden, nicht in Marketing-Fachsprache.

Zum Schluss: Liste alle Konstrukte, fasse inhaltlich gleiche zusammen und gib an, wie oft jedes genannt wurde.
```

### P8 – Repertory Grid: Rating

```text
Hier sind die konsolidierten Konstrukte: [LISTE DER 8–12 KONSTRUKTE, je "Pol 1 – Pol 7"].

Bewerte als jede der 5 befragten Personen alle Elemente (M, W1–W5, I) auf jedem Konstrukt mit 1 (linker Pol)
bis 7 (rechter Pol). Gib das Ergebnis ausschließlich als CSV aus mit den Spalten:
Befragte;Konstrukt;M;W1;W2;W3;W4;W5;I
Keine Mittelwerte berechnen.
```

Mittelwerte, Differenzierung und Ideal-Distanz in Excel/Google Sheets berechnen – Sprachmodelle rechnen unzuverlässig.

### P9 – Laddering-Interview (simuliert)

```text
Führe ein Laddering-Interview nach der Means-End-Chain-Theorie (Gutman; Reynolds & Gutman) mit einer Person,
die dieser Persona entspricht: [PERSONA].

Startpunkte sind diese Eigenschaften der Marke [MARKE]: [ATTRIBUT 1], [ATTRIBUT 2], [ATTRIBUT 3], [ATTRIBUT 4].

Frage pro Eigenschaft wiederholt "Warum ist dir das wichtig?", bis ein persönlicher Wert erreicht ist
(mindestens 3 Stufen). Gib das Interview als Dialog wieder.
Fasse danach jede Leiter als Kette zusammen:
Attribut → funktionale Konsequenz → psychosoziale Konsequenz → Wert
```

Mit 3–5 verschiedenen simulierten Personen wiederholen (z. B. die Befragten aus P7).

### P10 – Implikationsmatrix, HVM, Markennutzen

```text
Hier sind [N] Leitern aus Laddering-Interviews zur Marke [MARKE]:

[LEITERN EINFÜGEN]

1. Vereinheitliche gleichbedeutende Begriffe (Codierung) und zeige die Codeliste.
2. Erstelle eine Implikationsmatrix: Wie oft führt ein Element direkt zu einem anderen?
3. Leite eine Hierarchical Value Map ab, die nur Verbindungen mit mindestens 2 Nennungen enthält.
   Gib sie als Mermaid-Diagramm (graph BT) aus.
4. Formuliere den sachlich-funktionalen und den psychosozialen Markennutzen von [MARKE] in je 2–3 Stichpunkten.
```

Implikationsmatrix stichprobenartig von Hand nachzählen.

### P11 – Analogiemethoden

```text
Stell dir vor, die Marke [MARKE] wäre ein Mensch. Beschreibe: Alter, Geschlecht, Beruf, Wohnort, Kleidungsstil,
Hobbys, wie die Person spricht, welches Auto sie fährt, wie sie sich auf einer Party verhält und welche Beziehung
sie zu ihren Kund:innen hat (z. B. Freund, Mentor, Entertainer, Dienstleister).
Stell dir dann vor, [MARKE] wäre ein Tier: Welches und warum (3 Gründe)?

Mache dasselbe für [W1] und [W2] zum Vergleich.

Leite anschließend für [MARKE] ab:
- 4–5 Persönlichkeitsmerkmale
- die dominanten Markenemotionen
- die Zuordnung zu den Dimensionen der Brand Personality Scale nach Aaker
  (Aufrichtigkeit, Spannung, Kompetenz, Kultiviertheit, Robustheit)
```

Ergebnis mit den Antworten der Gruppe und von 3–5 befragten Personen vergleichen und Unterschiede im Backup festhalten.

### P12 – Kommunikationsanalyse (mit Screenshots)

```text
Ich lade [N] Screenshots aktueller Beiträge der Marke [MARKE] auf [Instagram / Facebook / YouTube] hoch.
Analysiere jeden Beitrag nach diesem Raster und gib eine Tabelle aus:
Nr. | Format | Thema/Content-Kategorie | Bildmotiv & Personen | Farbwelt | Tonalität der Caption
(Ansprache, Humor, Emojis) | Markenpräsenz (Logo, Farben, Produkt) | Call-to-Action

Fasse danach zusammen:
1. wiederkehrende Bildwelten und mögliche Schlüsselbilder
2. Konsistenz zwischen den Beiträgen und mit dem Corporate Design
3. Passung zu dieser Markentonalität: [TONALITÄT AUS P11]
Beschreibe nur, was auf den Screenshots zu sehen ist.
```

### P13 – Synthese im Markensteuerrad

```text
Hier sind unsere Analyseergebnisse zur Marke [MARKE]:
- Markenkompetenz (Desk Research): [...]
- Persona & Limbic Map: [...]
- Repertory Grid (Markenattribute): [...]
- Laddering / HVM (Markennutzen): [...]
- Analogien (Markentonalität): [...]
- Kommunikationsanalyse (Markenbild): [...]

1. Fülle das Markensteuerrad nach Esch mit je 3–5 prägnanten Stichworten pro Feld
   (Markenkompetenz, Markenattribute, Markennutzen, Markentonalität, Markenbild).
   Verwende ausschließlich unsere Ergebnisse und nenne hinter jedem Stichwort die Analyse, aus der es stammt.
2. Formuliere den Markenkern in einem Satz.
3. Prüfe die Konsistenz zwischen den Feldern und benenne Widersprüche.
4. Leite aus den Widersprüchen 2–3 konkrete Empfehlungen für die Kommunikation ab (was, Kanal, Begründung).
```

### P14 – Kritische Prüfung vor der Präsentation

```text
Prüfe unsere Präsentation (Gliederung bzw. Folientexte unten) kritisch aus Sicht eines Professors für
Unternehmenskommunikation. Bewertungskriterien: Problemverständnis & Fokussierung (15 %), Anwendung von Konzepten
und Modellen (20 %), Analyse & Argumentation (20 %), Qualität der Empfehlung (15 %), Vermittlung (7,5 %),
Visualisierung (7,5 %).
Nenne die 5 größten Schwächen mit konkreter Verbesserung und 5 Rückfragen, die in der Diskussion kommen könnten.

[GLIEDERUNG / FOLIENTEXTE]
```

---

## B. Prompt-Log (für das Backup)

Jeder Prompt, dessen Ergebnis in die Präsentation einfließt, bekommt eine Zeile. Den vollständigen Chatverlauf
als Link oder PDF ablegen und in der Spalte „Prompt“ verweisen.

| ID | Datum | Person | Tool & Version | Ziel | Prompt (Kurzform / Link) | Ergebnis (1 Satz) | Prüfung / Anpassung | Folie |
|----|-------|--------|----------------|------|--------------------------|-------------------|---------------------|-------|
| 01 | | | | | | | | |
| 02 | | | | | | | | |

**Spalte „Prüfung / Anpassung“** ist die wichtigste: Was habt ihr kontrolliert (Quelle geöffnet, mit echtem Interview
verglichen, nachgerechnet), was habt ihr verworfen oder geändert und warum?

---

## C. Begründung des Vorgehens (Textbaustein für Backup-Folie B1)

**Warum Desk Research?** Markenkompetenz und Persona brauchen eine belastbare Faktenbasis: Unternehmensangaben,
Marktdaten und Mediennutzungsstudien. Jede Zahl ist mit Quelle und Jahr belegt.

**Wofür KI-Tools – und wofür nicht?**
1. *Recherche beschleunigen:* nur mit Quellenangabe; jede verwendete Quelle wurde geöffnet und geprüft.
2. *Befragte simulieren* für Repertory Grid, Laddering und Analogien, weil eine Primärerhebung im nötigen Umfang
   im Zeitrahmen nicht möglich war. Grundlage der Simulation ist die datenbasierte Persona.
3. *Strukturieren und Synthetisieren:* Codierung, HVM, Entwurf des Markensteuerrads – die Endauswahl hat die Gruppe getroffen.
4. *Nicht* für Berechnungen (Mittelwerte, Engagement-Raten → Excel) und nicht als Quelle für Fakten.

**Qualitätssicherung:** Trennung von Daten und Annahmen; Triangulation der simulierten Antworten mit [N] echten
Kurzinterviews; Quellenprüfung; Gegenprüfung mit einem kritischen Review-Prompt (P14).

**Limitationen:** Simulierte Befragte geben wieder, was in den Trainingsdaten über die Marke steht – bekannte Klischees
werden verstärkt, Nischenwissen fehlt, es gibt keine Repräsentativität. Sprachmodelle können Fakten erfinden;
deshalb wurde nichts ungeprüft übernommen. KI-generierte Bilder sind gekennzeichnet.
