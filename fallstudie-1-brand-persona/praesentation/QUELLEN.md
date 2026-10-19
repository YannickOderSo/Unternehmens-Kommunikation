# QUELLEN – Schriften, Bibliotheken, Icons, Bilder und KI-Unterstützung

Alles, was die Web-Präsentation (`index.html`) verwendet, liegt im Ordner `praesentation/` – es wird
nichts aus dem Internet nachgeladen (keine CDNs, keine externen Schriften, Skripte oder Bilder).
Stand: 19.10.2026 (seit 18.10.: Logo auf Folie 12 neben das Fazit verlegt, Regel für Social-Media-Bilder,
Kategoriedaten Kantar/Statista vollständig, Rechtevermerk Limbic®, „Nachprüfung, KI-gestützt“ statt „eigene
Prüfung“; 19.10.: Abruf des DNB-Katalogs als KI-gestützt gekennzeichnet, Grafiken in `../grafiken/` eingeordnet,
Gründerbefragung als zweite Ausnahme in Abschnitt 5).

## 1. Schriften (Ordner `schriften/`)

Alle Schriften: Format woff2, variable Schriften, nur die Zeichensätze „latin“ und „latin-ext“ (Deutsch
inkl. ä, ö, ü, ß, „ “ – €). Lizenz: **SIL Open Font License 1.1** (Lizenztexte `schriften/LIZENZ-*-OFL.txt`).
Bezogen über die npm-Pakete von **Fontsource** (https://fontsource.org, Version 5.3.0), Originalquelle
Google Fonts. Einzelheiten: `schriften/HERKUNFT.txt`.

| Schrift | Verwendung | Paket | Original |
|---|---|---|---|
| Fraunces (normal + kursiv) | Titel, Zahlen – Thema „Editorial“ (Standard); kursiv aus der Datei mit allen Achsen („full“: wght, opsz, SOFT, WONK), damit die „wonky“-Formen abgeschaltet werden können | `@fontsource-variable/fraunces` | github.com/undercasetype/Fraunces |
| Inter (normal + kursiv) | Fließtext, Kicker – Editorial und Keynote | `@fontsource-variable/inter` | github.com/rsms/inter |
| Inter Tight | Titel – Thema „Keynote“ | `@fontsource-variable/inter-tight` | github.com/rsms/inter |
| Space Grotesk | Zahlen/Kicker – Thema „Keynote“ | `@fontsource-variable/space-grotesk` | github.com/floriankarsten/space-grotesk |
| Bricolage Grotesque | Titel – Thema „Bento“; Ersatzschrift für die HOLY-Überschriften auf Folie 09b | `@fontsource-variable/bricolage-grotesque` | github.com/ateliertriay/bricolage |
| Plus Jakarta Sans | Fließtext – Thema „Bento“; Ersatzschrift für den HOLY-Fließtext auf Folie 09b | `@fontsource-variable/plus-jakarta-sans` | github.com/tokotype/PlusJakartaSans |

Die frühere kursive Fraunces-Datei ohne WONK-Achse (`fraunces-latin(-ext)-opsz-italic.woff2`) liegt weiter in
`schriften/`, weil die Startseite der Webseite (`index.html` im Hauptverzeichnis) sie einbindet.

Die Originalschriften von HOLY („ObviouslyNarrow“, „PP Agrandir“, laut Recherche-Dossier Kap. 6.3) sind
kommerziell und werden **nicht** verwendet; Folie 09b deutet sie mit frei lizenzierten Ersatzschriften an
(gekennzeichnet mit *).

## 2. Bibliotheken

| Bibliothek | Datei | Lizenz | Herkunft |
|---|---|---|---|
| qrcode-generator 2.0.4 (Kazuhiko Arase) | `js/vendor/qrcode-generator.js` (unverändert, nur umbenannt) | MIT (`js/vendor/LIZENZ-qrcode-generator.txt`) | npm-Paket „qrcode-generator“, https://github.com/kazuhikoarase/qrcode-generator |

„QR Code“ ist eine eingetragene Marke der DENSO WAVE INCORPORATED.

Alle übrigen Programmteile (`js/deck.js`, `js/komponenten.js`, `js/folien/*.js`, `css/*.css`,
`css/folien/*.css`, `werkzeuge/pruefen.mjs`) sind für dieses Projekt geschrieben (mit KI-Unterstützung,
siehe Abschnitt 5) – keine fremden Frameworks.

**Nur zum Prüfen, nicht Teil der Präsentation:** `werkzeuge/pruefen.mjs` nutzt **playwright-core**
(Version 1.56.1, Lizenz Apache-2.0, https://github.com/microsoft/playwright) mit einem Chromium-Browser.
Beides wird nicht mitgeliefert und ist für den Vortrag nicht nötig.

## 3. Icons, Zeichnungen und Grafiken

- **Icon-Satz** (Linien-Icons 24 × 24, Strichstärke 2; Inline-SVG-Sprite am Anfang von `index.html`):
  eigene Gestaltung, keine fremden Icon-Bibliotheken, keine Plattform-Logos.
- **Zeichnungen auf den Folien** (z. B. Tier-Piktogramme Waschbär, Adler, Löwe, Schwan auf Folie 08,
  Motiv-Piktogramme auf Folie 09/09b, Markensteuerrad, Limbic Map, Diagramme): eigene SVG-Zeichnungen
  bzw. per Skript aus den Daten erzeugt – kein Nachbau von Markenzeichen. Das Maskottchen „Raptor“ von
  HOLY wird nur benannt (Folie 09: Adler-Piktogramm als Platzhalter), nicht abgebildet – einzige mögliche
  Ausnahme ist der Screenshot des Schlüsselbild-Beitrags auf Folie 09 (Regel in Abschnitt 4).
- **Persona-Platzhalter auf Folie 04** (Inline-SVG in `index.html`, Stand 16.10.2026): eigene,
  stilisierte Zeichnung „Marco in der Nachtschicht“ – Figur ohne Gesicht, Arbeitsjacke mit
  Reflexstreifen, Shaker, Mond und Häuser. Fiktive Person, kein Foto, kein KI-Bild; gekennzeichnet
  „Platzhalter – KI-Bild folgt“, bis die Gruppe das gekennzeichnete KI-Bild (Bild-Prompt P6 in
  `../prompts.md`) einträgt. **Dann diesen Absatz ändern:** Persona-Bild KI-generiert (Werkzeug, Datum,
  Prompt P6), fiktive Person, keine reale oder erkennbare Person; Datei in Abschnitt 4 eintragen und in B7
  („Technik“) eine Zeile „Persona-Bild Folie 04: KI-generiert, Werkzeug, Datum“ ergänzen.
- **Grafiken in `../grafiken/`** (folie-02, -03, -05; SVG/PNG, per Python-Skript erzeugt): eigene Gestaltung
  zu den Folienentwürfen – Ausarbeitungs- bzw. PowerPoint-Variante (Segoe UI, Rot/Blaugrau), **nicht Teil der
  Web-Präsentation** und nicht für die Projektion gedacht (Schrift zu klein, andere Farben und in folie-05
  andere Markerformen als Folie 05); Rechtevermerk Limbic® wörtlich in folie-05 (siehe nächster Punkt).
- **Markensteuerrad** nach Esch, **Limbic Map** nach Häusel: eigene, vereinfachte Darstellungen (Lage der
  Felder nach Gruppe Nymphenburg Consult AG 2020 [105], S. 3; Lage der Typen nach nymphenburg.de, Abruf
  17.10.2026). Rechtevermerk wie in [105], S. 7: „Limbic®, die Limbic® Map und die Limbic® Types sind
  urheber- und patentrechtlich geschützte Begriffe und Verfahren der Gruppe Nymphenburg Consult AG.“
  (wörtlich in B7, in den Notizen von Folie 05 und in der Grafik `../grafiken/folie-05-limbic-map`; in der
  Fußzeile von Folie 05 aus Platzgründen gekürzt: „Limbic®, Limbic® Map, Limbic® Types: urheber- und
  patentrechtlich geschützt (Gruppe Nymphenburg Consult AG)“).

## 4. Bilder (Ordner `bilder/`)

| Datei | Inhalt | Herkunft |
|---|---|---|
| `platzhalter-raetsel.svg` | gezeichnetes Produkt-Stillleben für das Einstiegsrätsel (Folie 01): Dose und Shaker vor gelbem Hintergrund, Früchte, Eiswürfel – **ohne Logo, Schrift oder Verpackungsdesign**; Motiv nach Dossier Kap. 6.4 ✔ [1, 5, 73], Farben Gelb `#FFD007`, Schwarz `#1D1D1B`, Creme `#F3EDE1` nach Kap. 6.3 ✔ [1] (Stand 16.10.2026) | eigene Gestaltung – **bis 23.10. durch eigenes Foto ersetzen** |
| `holy-logo-wortmarke.png` | offizielle HOLY-Wortmarke, 389 × 105 px (Folie 09b, über `marke.js → logo`; im Dunkelmodus auf einer hellen Unterlage, das Bild selbst unverändert; Quelle in der Fußzeile von 09b und in B7) | © HOLY Softdrinks GmbH; Seitenkopf von https://de.holy.com (Datei `HOLY_Logo_1.png`), abgerufen 16.10.2026, unverändert |
| `holy-logo-oval.png` | offizielles HOLY-Logo im gelben Oval, 692 × 400 px – **Folie 01** (Auflösung des Rätsels und Titelfolie) und **Folie 12** (seit 17.10.2026; seit 18.10.2026 oben rechts neben dem Fazit über HOLY, nicht mehr neben den Gruppennamen), jeweils über `marke.js → logoTitel`; nur verkleinert angezeigt, Quelle in den Fußzeilen von Folie 01 und 12 sowie in B7 | © HOLY Softdrinks GmbH; Seitenfuß von https://de.holy.com (Datei `HOLY_Logo_NewYellow.png`), abgerufen 16.10.2026, unverändert |
| `platzhalter-logo.svg` | neutraler Logo-Platzhalter (früher Folie 09b; steht er wieder in `marke.js → logo`, zeigt Folie 09b kein Bild, nur die Beschreibung der Wortmarke) | eigene Gestaltung |
| `platzhalter-persona.svg`, `platzhalter-post.svg` | weitere Platzhalter (zurzeit nicht verwendet) | eigene Gestaltung |

Von HOLY sind nur die beiden **offiziellen Logos** eingebunden, unverändert und ausschließlich zur Kennzeichnung der
analysierten Marke im Rahmen einer studentischen Fallstudie; es besteht keine Verbindung zur HOLY Softdrinks GmbH.
Verwendet auf den Folien 01, 09b und 12 (je mit Quelle in der Fußzeile, gesammelt in B7). Bewusst **ohne** Logo:
Kopfzeile aller Folien, Folie 03, das Zentrum des Steuerrads (dort steht nach Esch die Markenkompetenz) und die
öffentliche Startseite der Gruppe – dort entstünde der Eindruck einer HOLY-eigenen oder beauftragten Arbeit.
Die Logo-Nutzung stimmt die Gruppe mit dem Betreuer ab (LIESMICH, Abschnitt 12). Auf Folie 12 steht das Logo
deshalb beim Fazit über die Marke und nicht neben den Gruppennamen (dort wirkte es wie ein Absender).

**Keine Produktfotos oder Social-Media-Bilder von HOLY** – mit einer einzigen vorgesehenen Ausnahme (Regel seit
18.10.2026): ein Screenshot des Schlüsselbild-Beitrags (Raptor) auf Folie 09 als Gegenstand der Analyse, und
**nur nach Zustimmung des Betreuers**. Dann Quelle in der Fußzeile von Folie 09 nach dem Muster
„Screenshot © HOLY Softdrinks GmbH, <Plattform> <Konto>, Beitrag vom TT.MM.JJJJ, Abruf TT.MM.2026“, die Datei
in dieser Tabelle und in B7 („Logos und Screenshot“) eintragen. Ohne Zustimmung bleibt das Piktogramm auf
Folie 09. Eigene Bilder nur mit geklärten Rechten verwenden und die Quelle in der Fußzeile der Folie nennen.

## 5. Inhalte und Fakten

- **Fakten über HOLY** (Zahlen, Historie, Produkte, Zielgruppe, Kanäle, Farben, Claims): ausschließlich aus
  dem Recherche-Dossier `../recherche/holy-recherche.md` (Stand 13./14.10.2026), jeweils mit Quellennummer
  [n] und Faktenstatus (✔ gesichert, ✎ korrigiert, ~ unsicher, H Hypothese). Das vollständige
  Quellenverzeichnis steht im Dossier (Anhang B); Backup-Folie **B8** löst alle Nummern auf, die sichtbar
  auf den Folien stehen (Kurzangaben aus Anhang B), B7 nennt Literatur und Technik. Für die Folien 03 und 05
  hat der bearbeitende KI-Agent am 17.10.2026 Quellen zusätzlich nachgelesen (auf den Folien und in B7
  „Nachprüfung 17.10.2026, KI-gestützt“, KI-Nachweis 52, 55/56; Adressen in `../markenkompetenz.md` und
  `../limbic-map.md`); die Prüfung durch die Gruppe steht im KI-Nachweis noch aus. Zahlen und Zitate auf den
  Folien tragen weiter die Dossier-Nummern.
- **Ausnahme – Kategoriedaten außerhalb des Dossiers** (Kategorie Energy Drinks, nicht HOLY):
  - **Statista Consumer Insights**, Zielgruppen-Report „Energydrink-Konsument:innen in Deutschland“, Stand
    02/2025, Online-Befragung 18–64 J., n = 1.583 (Vergleich: alle Befragten, n = 35.956), de.statista.com
    (Studien-ID 120400), abgerufen 16.10.2026: **Mediennutzung und Psychografie** auf Folie 04 und in B3 sowie
    die Basis der Gewichte in den Notizen von Folie 05.
  - **Kantar Media TGI 2023**, ab 15 J., n = 10.089, zitiert nach de.statista.com (ID 1363733), abgerufen
    16.10.2026: **Kaufhäufigkeit** auf Folie 04 und in B3 (B8: „extern“).
  - **VuMA 2022** (zitiert nach de.statista.com) nur in den Notizen von B3 (Männeranteil, für Rückfragen).
  Alle über die Campuslizenz der HSKL; Quellenangaben in `../persona-steckbrief.md` (Abschnitt „Quellen“),
  Kurzfassung in `../persona-daten.md`. Sie stehen **nicht** im Recherche-Dossier und sind auf den Folien als
  Kategoriedaten („nicht HOLY“) bzw. in B3/B7/B8 als „extern“ gekennzeichnet.
- **Ausnahme – Gründerbefragung (GB)**, seit 19.10.2026: Horsch, M. (2026): Antworten auf den Fragenkatalog der
  Gruppe, zwei Sprachnachrichten an L. Welker, LinkedIn, 18.10.2026. Eigene Erhebung ohne Dossier-Nummer,
  Auswertung in `../gruenderbefragung.md`. Gründer Mathias Horsch hat der Abschrift und Auswertung mit KI
  zugestimmt; Name, Paraphrasen und kurze Zitate sind freigegeben (laut Yannick, 19.10.2026). Immer als
  Selbstauskunft gekennzeichnet („laut Gründer Mathias Horsch (Befragung 10/2026)“ bzw. „Horsch 2026 (GB)“),
  nie als Tatsache über die Kundschaft. Sichtbar: auf Folie 03 als Zusatz in der Quellzeile
  des Claims („auch laut Gründer Mathias Horsch (Befragung 10/2026)“, seit 19.10.2026 auf Wunsch von Yannick) und
  im Backup B1, B3 (Status „extern“, wie in der Legende von B7) und B7. Sonst steht GB auf den Hauptfolien nur in
  den Notizen und in den Kommentarkästen („FOLIE 02“–„05“, „10“, „11“). Die Angabe „95 %“ nur mit dem Zusatz „laut Gründer, Datengrundlage nicht
  offengelegt“ und nur in den Notizen. Transkript und Audio liegen nur im Gruppenordner, nicht im Repository.
- **Markenfarben** Gelb `#FFD007` und Schwarz `#1D1D1B`: Dossier Kap. 6.3 ✔ [1] (Werte aus dem CSS der
  Website de.holy.com, kein offizieller Styleguide).
- **Beispieldaten** (Pille „Beispieldaten“) stehen auf den Folien 06, 07, 08, 08b, 09 (Beiträge,
  Engagement, Motivanteile und Zahl der codierten Beiträge – die Follower-Zahlen sind belegt), 10, 11, 12
  (Fazit, beruht auf 10/11) sowie B4–B6; B1 trägt „teils geplant“ (Kurzinterviews stehen aus), B2 „teils
  Beispiel“ (Bündel A belegt, P7–P14 noch Beispiel). Folie 09b
  enthält keine Beispielwerte: Fakten belegt, die Fit-Bewertung ist als Hypothese gekennzeichnet. Alles
  bleibt Beispiel, bis die Gruppe eigene Erhebungen einträgt.
- **Modelle und Fachbegriffe** (Markensteuerrad nach Esch, Limbic Map nach Häusel, Repertory Grid nach
  Kelly, Laddering/Means-End-Chain nach Gutman sowie Reynolds & Gutman, Brand Personality nach Aaker,
  Schlüsselbild nach Kroeber-Riel): nach Standardliteratur aus dem Modellwissen der KI – **mit den
  Vorlesungsfolien von Prof. Stenger abgleichen**. Jahr und Auflage für Esch und Häusel (B7, Fußzeile Folie 02):
  neueste Ausgaben laut Katalog der Deutschen Nationalbibliothek, am 17.10.2026 vom bearbeitenden KI-Agenten abgerufen – Esch, F.-R. &
  Esch, D. (2024): *Strategie und Technik der Markenführung*, 10. Aufl., München: Vahlen (ISBN 978-3-8006-7096-3);
  Häusel, H.-G. (2019): *Think Limbic! Die Macht des Unbewussten nutzen für Management und Verkauf*, 6. Aufl.,
  Freiburg: Haufe (ISBN 978-3-648-12719-3; am 18./19.10.2026 KI-gestützt mit den Händlerangaben von hugendubel.de
  und ebook.de abgeglichen: 6. Aufl., erschienen 26.08.2019, kartoniert). Die Bücher selbst
  wurden nicht eingesehen; nutzt die Gruppe eine andere Ausgabe, dort anpassen. Kotler (Rollen auf Folie 03)
  fehlt noch in B7 (Auflage ungeprüft).
- **HOLY** ist eine Marke der HOLY Softdrinks GmbH; sie wird hier nur im Rahmen der Lehrveranstaltung
  analysiert. Erwähnte Wettbewerber (z. B. Red Bull, waterdrop) gehören ihren jeweiligen Inhabern.

## 6. KI-Unterstützung

Diese Präsentation wurde **mit KI-Unterstützung erstellt: Claude Code (Anthropic)** – Engine, Designsystem,
Folienaufbau, Diagramme, Sprechtext-Entwürfe, Prüfwerkzeug und diese Dokumentation. Die Gestaltung wurde in
drei Richtungen entworfen und per Jury-Bewertung ausgewählt (`_entwuerfe/JURY.md`). Alle Prompts,
Unteragenten und Prüfschritte sind im KI-Nachweis der Gruppe dokumentiert (`../../ki-nachweis/`). Inhalte
über HOLY stammen aus dem geprüften Recherche-Dossier, nicht aus dem Modellwissen; Beispieldaten sind
gekennzeichnet. Die Gruppe prüft und verantwortet alle Inhalte vor dem Vortrag.
