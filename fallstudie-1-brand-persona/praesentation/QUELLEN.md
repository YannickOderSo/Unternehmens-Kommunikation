# QUELLEN – Schriften, Bibliotheken, Icons, Bilder und KI-Unterstützung

Alles, was die Web-Präsentation (`index.html`) verwendet, liegt im Ordner `praesentation/` – es wird
nichts aus dem Internet nachgeladen (keine CDNs, keine externen Schriften, Skripte oder Bilder).
Stand: 25.10.2026 (25.10.: Ausarbeitungen von Elias Knauber laut seiner Prompt-Sammlung KI-gestützt – KI-Nachweis
E-EK-01 bis 03 –, Lukas Welker ohne KI, Abschnitte 5 und 6; 24.10.: Gründerbefragung mit eigener Folie 05b und im Abgleich auf Folie 10, Abschnitt 5;
23.10.: KI-simulierte Befragung Bündel B als Quelle der Folien 06, 07, 08b, B4, B5, Abschnitt 5;
Papagei auch in der Abstimmung und auf der Abstimmseite, Abschnitt 3; 22.10.: Ausarbeitungen von Elias Knauber – Kommunikationsanalyse und Analogien – als Quelle,
Abschnitt 5; keine Bilder daraus übernommen; Screenshot-Ausnahme für den Raptor auf Folie 09 entfällt, eigene
Zeichnungen Papagei, Comedian und „Produkt in der Hand“, Abschnitte 3 und 4; seit 18.10.: Logo auf Folie 12 neben das Fazit verlegt, Regel für Social-Media-Bilder,
Kategoriedaten Kantar/Statista vollständig, Rechtevermerk Limbic®, „Nachprüfung, KI-gestützt“ statt „eigene
Prüfung“; 19.10.: Abruf des DNB-Katalogs als KI-gestützt gekennzeichnet, Grafiken in `../grafiken/` eingeordnet,
Gründerbefragung als zweite Ausnahme in Abschnitt 5; Rätselbild Folie 01 und Persona-Bild Folie 04 als eigene
Illustrationen, KI-gestützt, statt Platzhalter; 20.10.: Analogie-Tier Chamäleon statt Waschbär, Abschnitte 3 und 5;
Rätselbild Folie 01 mit dem Original-Logo auf der Dose, `raetsel-holy-logo.svg`, Entscheidung Yannick, Abschnitte 3
und 4 – nach zwei Prüfungen ehrlicher eingeordnet: fiktive Dose, Logo als Teil von Illustration und Rätsel).

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
- **Zeichnungen auf den Folien** (z. B. Tier-Piktogramme Chamäleon, Adler, Löwe, Schwan auf Folie 08 und
  auf der Abstimmseite – das Chamäleon seit 20.10.2026 statt des Waschbärs –, seit 22.10.2026 auf Folie 08
  zusätzlich Papagei (Elias Knaubers anderes Tier – bei ihm „Tier 1“; seit 23.10.2026 gleichwertig mit dem Chamäleon
  auch in der Abstimmung und auf der Abstimmseite `abstimmen.html` statt des Fuchses, dieselbe Zeichnung in
  `js/folien/08-analogien.js` und `js/abstimmen.js`) und ein Mensch am
  Mikrofon (Impro-Comedian), Motiv-Piktogramme auf Folie 09/09b – seit 22.10.2026 u. a. „Produkt in der Hand“ als
  Schlüsselbild-Kandidat und ein Schachbrett (Streetwear-Code nach Elias) –, Markensteuerrad, Limbic Map, Diagramme): eigene SVG-Zeichnungen bzw. per Skript aus
  den Daten erzeugt – kein Nachbau von Markenzeichen, keine Vorlage aus Elias' Bildschirmaufnahmen. Das Maskottchen
  von HOLY (Adler, im Dossier „Raptor“) wird nur benannt und mit einer allgemeinen Adler-Zeichnung angedeutet
  (Folie 08), nicht nachgebildet. Die bis 21.10.2026 vorgesehene Ausnahme – ein Screenshot des Raptor-Beitrags als
  Schlüsselbild auf Folie 09 – entfällt (Abschnitt 4).
- **Illustrationen auf Folie 01 und 04** (seit 19.10.2026, Dateien in Abschnitt 4): eigene Gestaltung,
  KI-gestützt (Claude Code), 19.10.2026 – **von Claude Code als SVG-Code erzeugt** (Rätselbild per
  Generator-Skript, Persona-Bild direkt als SVG mit Hilfsskript für die Regalgeometrie); Motivvorgaben,
  Auswahl und Prüfung durch die Gruppe. Ohne Vorlage, ohne Fotos, ohne Bilder aus dem Netz und ohne
  Bildgenerator. Kein Logo, kein Schriftzug und keine kopierte Verpackung von HOLY; Farben und Bildstil nur
  nachempfunden (Dossier Kap. 6.3/6.4 ✔ [1, 5, 30, 73]). **Ausnahme seit Di, 20.10.2026: das Rätselbild auf
  Folie 01** (nächster Punkt). Es enthält eine Datei aus dem Netz – das Original-Logo `holy-logo-oval.png` von
  de.holy.com, also auch den Schriftzug von HOLY – und setzt es auf eine nachempfundene, erfundene Verpackung.
  Für dieses eine Bild sind die Regeln „ohne Bilder aus dem Netz“, „kein Logo, kein Schriftzug“ und „Verpackung
  nur ohne Markenzeichen nachempfinden“ aufgehoben (Entscheidung Yannick, KI-Nachweis Nr. 98). Für Folie 04 und
  alle weiteren Illustrationen gelten sie weiter. Eine echte Verpackung ist weiterhin nicht kopiert.
  - **Rätselbild Folie 01** (seit 20.10.2026 `raetsel-holy-logo.svg`): Produkt-Stillleben mit einer
    **fiktiven Pappdose** (nachempfunden ist nur der Verpackungstyp – runde Pappdose mit schwarzem Deckel,
    Dossier 6.3 ✔ [30]; Etikett, Sorte, Sticker und Gestaltung sind erfunden, kein echtes Produkt); auf dem
    Etikett groß und frontal das **Original-Logo** von HOLY (gelbes Oval,
    `holy-logo-oval.png`, © HOLY Softdrinks GmbH, de.holy.com, Abruf 16.10.2026), darunter eine kleine
    Drachenfrucht im Comic-Aufkleber-Stil, dazu Shaker, Drachenfrucht, Eiswürfel. Das Logo ist **unverändert**
    als base64-PNG (data-URI) in die SVG eingebettet und nur skaliert – nicht nachgezeichnet, nicht verzerrt,
    nicht umgefärbt, nichts darübergelegt. Eingebettet, weil eine als Bild geladene SVG keine externen Dateien
    nachlädt (im Browser und im Druck-PDF geprüft, 20.10.2026). **Entscheidung von Yannick Heisler (Di,
    20.10.2026, KI-Nachweis Nr. 98)**, nachdem das Publikum beim Rätsel ohne Logo keine Chance hatte: „Groß das
    Logo und daneben bei der Auflösung dann die illustration mit logo“. **Art der Nutzung (ehrlich eingeordnet):**
    Die Logo-Datei ist unverändert, die Darstellung nicht nur Kennzeichnung – das Logo ist Teil der Illustration
    und des Rätsels: in Schritt 0 und 1 von Folie 01 stark vergrößert und unscharf und noch **ohne Quelle** (sie
    verriete die Lösung), ab der Auflösung mit Quelle in der Fußzeile. **Offen:** Klärung mit dem Betreuer
    (LIESMICH, Abschnitt 12) – konkret: Original-Logo auf einer erfundenen Verpackung, im Rätsel unscharf,
    öffentlich im Repository und in den Exporten. Bis zur Klärung bleibt die Fassung ohne Logo
    (`raetsel-holy.svg`, 19.10.2026) als Rückfall liegen. **Weiter kein Tier auf dem Etikett:** HOLY
    gibt jeder Energy-Sorte ein eigenes Comic-Tier (Dossier 6.3 ✔ [30]), jedes gezeichnete Tier könnte also
    eine echte Sorte nachbilden; die erste Fassung (19.10.) zeigte einen Tukan, und HOLY führt selbst eine
    Sorte mit Tukan, „Thai Lime Toucan“ (Websuche 19.10.2026: de.holy.com/products/thai-lime-toucan;
    change.org/topic/holy-de-de – nicht im Dossier). Kennzeichnung in der Fußzeile von Folie 01 (zwei Zeilen,
    ab der Auflösung): „Logo © HOLY Softdrinks GmbH, de.holy.com (Abruf 16.10.2026)“ und „Illustration: eigene
    Gestaltung, KI-gestützt (Claude Code), 20.10.2026“; auf der Titelfolie zusätzlich „· Dose fiktiv“ in der
    Einordnungszeile („Studentische Fallstudie · keine Verbindung zur HOLY Softdrinks GmbH · Dose fiktiv“ – für
    PDF und Übersicht; die Fußzeile ist dafür zu kurz). Die Logo-Zeile bleibt auch ohne `logoTitel` stehen,
    solange das Rätselbild das Logo zeigt (`js/folien/01-einstieg.js`).
  - **Persona-Bild Folie 04** (`persona-marco.svg`): „Marco, 28“ vor der Nachtschicht im Lager (Warnweste,
    Shaker ohne Aufschrift, Hochregale, Nachtfenster). **Fiktive Person** – keine reale oder erkennbare
    Person, kein Foto, kein KI-generiertes Foto. Lager und Nachtschicht nach Steckbrief A2 §2; Warnweste,
    Haare, Bart und Hautfarbe sind Gestaltungsentscheidungen, nicht aus dem Steckbrief. Kennzeichnung auf dem
    Bild „Illustration: eigene Gestaltung, KI‑gestützt (Claude Code), 19.10.2026“ und in der Fußzeile
    „Person, Bild, Zitat fiktiv (Illustration, KI-gestützt)“; B7 „Icons, Grafiken, Illustrationen“.
  - **Später optional:** eigenes Foto oder ein KI-Bild nach Bild-Prompt P6 (`../prompts.md`; ausgefüllte
    Vorlage in `LIESMICH.md`, Abschnitt 12). Dann hier und in Abschnitt 4 Herkunft ändern (KI-generiert:
    Werkzeug, Datum, Prompt P6, keine reale oder erkennbare Person), Kennzeichnung auf der Folie und in B7
    anpassen und die Nutzung im KI-Nachweis eintragen.
- **Rückfall-Zeichnung Folie 04** (Inline-SVG in `index.html`, Stand 16.10.2026): stilisierte Figur ohne
  Gesicht; erscheint nur, wenn in den Daten von Folie 04 kein `"bild"` steht.
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
| `raetsel-holy-logo.svg` | **Rätselbild Folie 01** (seit Di, 20.10.2026, `marke.js → raetselBild`, 1920 × 1080): Szene wie `raetsel-holy.svg`, aber auf dem Etikett einer **fiktiven Dose** groß und frontal das **Original-Logo** (gelbes Oval, Datei `holy-logo-oval.png` unverändert als base64-PNG eingebettet – einmal, im Attribut `href` –, nur skaliert auf 330 × 190,8 Einheiten), darunter eine kleine Drachenfrucht im Comic-Aufkleber-Stil (kein Tier); keine weiteren Dateien, keine Filter oder Masken; Zoomwerte `data-stufen="440/11,220/10,100/0"`, `data-fokus="63.5% 59.8%"` (Kopfkommentar der Datei) | Illustration: eigene Gestaltung, KI-gestützt (Claude Code), 20.10.2026 – von Claude Code als SVG-Code erzeugt (Generator-Skript der Fassung vom 19.10., Etikett neu; das Skript liegt nicht im Repository), kein Foto. **Logo:** © HOLY Softdrinks GmbH, de.holy.com, Abruf 16.10.2026, Datei unverändert – eingebaut auf Entscheidung von Yannick Heisler (20.10.2026, KI-Nachweis Nr. 98); als Teil der Illustration und des Rätsels genutzt (Abschnitt 3); Klärung mit dem Betreuer offen |
| `raetsel-holy.svg` | **Rückfall ohne Logo** – bis 20.10.2026 Rätselbild Folie 01 (seit 19.10.2026, 1920 × 1080; zurzeit nicht eingetragen, Wechsel in `marke.js → raetselBild` und bei Folie 01 `data-fokus="60.1% 60.7%"`): Produkt-Stillleben – nachempfundene Pappdose mit schwarzem Etikett, darauf eine Drachenfrucht im Comic-Aufkleber-Stil mit Heiligenschein (**kein Tier** – siehe Abschnitt 3), Shaker mit pinkem Getränk, Drachenfrucht, Eiswürfel, Messlöffel vor HOLY-Gelb auf dunklem Tisch – **ohne Logo, Schrift oder kopiertes Verpackungsdesign**; Motiv nach Dossier Kap. 6.4 ✔ [1, 5, 73] und 6.3 ✔ [30] (Pappdose), Farben Gelb `#FFD007`, Schwarz `#1D1D1B` nach Kap. 6.3 ✔ [1], dazu Pink und Grün; Zoompunkt `data-fokus="60.1% 60.7%"` | Illustration: eigene Gestaltung, KI-gestützt (Claude Code), 19.10.2026 – von Claude Code als SVG-Code erzeugt, kein Foto; ein eigenes Foto bleibt möglich |
| `persona-marco.svg` | **Persona-Bild Folie 04** (seit 19.10.2026, Daten `"bild"` der Folie, 1 : 1): fiktive Person „Marco, 28“ vor der Nachtschicht im Lager – Warnweste in Markengelb, Shaker ohne Logo und Aufschrift, Hochregale, Nachtfenster mit Mond; **ohne Logo und Verpackung von HOLY** | Illustration: eigene Gestaltung, KI-gestützt (Claude Code), 19.10.2026 – von Claude Code als SVG-Code erzeugt; fiktive Person, kein Foto, kein KI-generiertes Foto; ein eigenes Foto oder KI-Bild nach P6 bleibt möglich |
| `platzhalter-raetsel.svg` | früheres gezeichnetes Rätselbild (Dose und Shaker vor Gelb, ohne Logo, Stand 16.10.2026) – zurzeit nicht eingetragen; bleibt als Rückfallwert von `js/komponenten.js` liegen (mit diesem Dateinamen zeigt Folie 01 die Pille „Platzhalterbild“) | eigene Gestaltung |
| `holy-logo-wortmarke.png` | offizielle HOLY-Wortmarke, 389 × 105 px (Folie 09b, über `marke.js → logo`; im Dunkelmodus auf einer hellen Unterlage, das Bild selbst unverändert; Quelle in der Fußzeile von 09b und in B7) | © HOLY Softdrinks GmbH; Seitenkopf von https://de.holy.com (Datei `HOLY_Logo_1.png`), abgerufen 16.10.2026, unverändert |
| `holy-logo-oval.png` | offizielles HOLY-Logo im gelben Oval, 692 × 400 px – **Folie 01** (Auflösung des Rätsels und Titelfolie) und **Folie 12** (seit 17.10.2026; seit 18.10.2026 oben rechts neben dem Fazit über HOLY, nicht mehr neben den Gruppennamen), jeweils über `marke.js → logoTitel`; nur verkleinert angezeigt, Quelle in den Fußzeilen von Folie 01 und 12 sowie in B7. Seit 20.10.2026 zusätzlich unverändert in `raetsel-holy-logo.svg` eingebettet (Logo auf der Dose im Rätselbild, Folie 01) | © HOLY Softdrinks GmbH; Seitenfuß von https://de.holy.com (Datei `HOLY_Logo_NewYellow.png`), abgerufen 16.10.2026, unverändert |
| `platzhalter-logo.svg` | neutraler Logo-Platzhalter (früher Folie 09b; steht er wieder in `marke.js → logo`, zeigt Folie 09b kein Bild, nur die Beschreibung der Wortmarke) | eigene Gestaltung |
| `platzhalter-persona.svg`, `platzhalter-post.svg` | weitere Platzhalter (zurzeit nicht verwendet) | eigene Gestaltung |

Von HOLY sind nur die beiden **offiziellen Logos** eingebunden, als Dateien unverändert, im Rahmen einer
studentischen Fallstudie; es besteht keine Verbindung zur HOLY Softdrinks GmbH. Auf den Folien 01 (Auflösung und
Titel), 09b und 12 dienen sie der Kennzeichnung der analysierten Marke (je mit Quelle in der Fußzeile, gesammelt in
B7). **Auf Folie 01 seit 20.10.2026 außerdem als Teil einer Illustration:** das Oval auf einer fiktiven Dose im
Rätselbild (dieselbe Datei, eingebettet); im Rätsel stark vergrößert und unscharf, die Quelle erscheint erst mit der
Auflösung (Abschnitt 3). Das geht über reine Kennzeichnung hinaus – deshalb ausdrücklich Teil der Klärung mit dem
Betreuer (unten). Bewusst **ohne** Logo:
Kopfzeile aller Folien, Folie 03, das Zentrum des Steuerrads (dort steht der Markenkern – so heißt die Mitte in der
Vorlesung, Stenger, S. 90–91; bei Esch selbst auch „Markenkompetenz“; Begriff angeglichen am 21.10.2026), die
öffentliche Startseite der Gruppe und die öffentliche Abstimmseite `abstimmen.html` (Live-Umfrage, seit 19.10.2026;
oben steht dort „Studentische Fallstudie · keine Verbindung zur HOLY Softdrinks GmbH“, HOLY nur in der Frage) – dort
entstünde der Eindruck einer HOLY-eigenen oder beauftragten Arbeit.
Die Logo-Nutzung stimmt die Gruppe mit dem Betreuer ab (LIESMICH, Abschnitt 12) – seit 20.10.2026 einschließlich
des Logos in der Illustration auf Folie 01 (Rückfall ohne Logo: `raetsel-holy.svg`; dann `marke.js → raetselBild`
umstellen – nur `logoTitel` zu leeren entfernt das Logo auf der Dose nicht). Die Exporte (`export/`, verlinkt auf
der öffentlichen Startseite) zeigen seit 20.10.2026 die Fassung mit Logo; lehnt der Betreuer ab, nach dem Rückfall
neu erzeugen. Auf Folie 12 steht das Logo
deshalb beim Fazit über die Marke und nicht neben den Gruppennamen (dort wirkte es wie ein Absender).

**Keine Produktfotos oder Social-Media-Bilder von HOLY.** Die vom 18. bis 21.10.2026 vorgesehene einzige Ausnahme –
ein Screenshot des Schlüsselbild-Beitrags (Raptor) auf Folie 09, nur nach Zustimmung des Betreuers – **entfällt seit
Do, 22.10.2026**: Laut Elias Knaubers Kommunikationsanalyse hat HOLY kein festes Schlüsselbild, der Adler ist das
Maskottchen; Folie 09 zeigt für den Kandidaten „Produkt in der Hand“ ein eigenes Piktogramm.
**Aus Elias' Ausarbeitungen ist kein Bild übernommen.** Seine Kommunikationsanalyse enthält Bildschirmaufnahmen von
Profilköpfen, Beiträgen und der Facebook-Suche (Abbildungen 1–4, zum Teil mit erkennbaren Personen); beide PDFs
liegen nur im Gruppenordner, nicht im Repository und nicht in den Exporten. Übernommen sind nur Text, Zahlen und
Befunde mit Quellenangabe (Abschnitt 5). Soll später doch ein Screenshot auf eine Folie (z. B. ein Beitrag mit
Produkt in der Hand), gilt weiter: **nur nach Zustimmung des Betreuers**, möglichst ohne erkennbare Personen, Quelle
in der Fußzeile nach dem Muster „Screenshot © HOLY Softdrinks GmbH, <Plattform> <Konto>, Beitrag vom TT.MM.JJJJ,
Abruf TT.MM.2026“, die Datei in dieser Tabelle und in B7 („Logos und Screenshot“) eintragen. Eigene Bilder nur mit
geklärten Rechten verwenden und die Quelle in der Fußzeile der Folie nennen.

## 5. Inhalte und Fakten

- **Fakten über HOLY** (Zahlen, Historie, Produkte, Zielgruppe, Kanäle, Farben, Claims): aus dem
  Recherche-Dossier `../recherche/holy-recherche.md` (Stand 13./14.10.2026), jeweils mit Quellennummer
  [n] und Faktenstatus (✔ gesichert, ✎ korrigiert, ~ unsicher, H Hypothese) – Ausnahmen unten
  (Kategoriedaten, Gründerbefragung, seit 22.10.2026 die Ausarbeitungen von Elias Knauber). Das vollständige
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
  - **VuMA 2022** (zitiert nach de.statista.com, IDs 557342, 557180, 557371, 557416, abgerufen 16.10.2026) nur in
    den Notizen von Folie 04 (Rückfrage „fast die Hälfte Frauen?“) und B3 (Männeranteil, für Rückfragen).
  - **Eurostat** (lfsa_ewpshi, Beschäftigte in Schichtarbeit nach Geschlecht und Alter, Deutschland, Daten 2025,
    Männer 25–49 J.: 17 %) nur in den Notizen von Folie 04 (Rückfrage „Randgruppe?“); Beleg und Abruf im
    Persona-Steckbrief A2 (`../persona-steckbrief.md`, Abschnitt „Quellen“; KI-gestützt am 15.10.2026 an der
    Eurostat-API geprüft). Nachgetragen am 21.10.2026 (VORTRAGSREIFE A20).
  Statista Consumer Insights, Kantar TGI und VuMA über die Campuslizenz der HSKL; Eurostat frei abrufbar (Abruf
  siehe Persona-Steckbrief). Quellenangaben in `../persona-steckbrief.md` (Abschnitt „Quellen“), Kurzfassung in
  `../persona-daten.md`. Keine dieser Quellen steht im Recherche-Dossier. Was auf Folien sichtbar ist (Statista CI,
  Kantar TGI), ist dort als Kategoriedaten („nicht HOLY“) bzw. in B3/B7/B8 als „extern“ gekennzeichnet; VuMA und
  Eurostat stehen nur in den Notizen (Satz berichtigt am 21.10.2026, Nacharbeit D23).
- **Ausnahme – Gründerbefragung (GB)**, seit 19.10.2026: Horsch, M. (2026): Antworten auf den Fragenkatalog der
  Gruppe, zwei Sprachnachrichten an L. Welker, LinkedIn, 10/2026 (Dateien vom 18.10.2026; Versanddatum bestätigt Lukas). Eigene Erhebung ohne Dossier-Nummer,
  Auswertung in `../gruenderbefragung.md`. Gründer Mathias Horsch hat der Abschrift und Auswertung mit KI
  zugestimmt; Name, Paraphrasen und kurze Zitate sind freigegeben (laut Yannick, 19.10.2026). Immer als
  Selbstauskunft gekennzeichnet („laut Gründer Mathias Horsch (Befragung 10/2026)“ bzw. „Horsch 2026 (GB)“),
  nie als Tatsache über die Kundschaft. Sichtbar: auf Folie 03 als Zusatz in der Quellzeile
  des Claims („auch laut Gründer Mathias Horsch (Befragung 10/2026)“, seit 19.10.2026 auf Wunsch von Yannick) und
  im Backup B1, B3 (Status „extern“, wie in der Legende von B7) und B7. **Seit Sa, 24.10.2026** (Wunsch Lukas,
  Entscheidung Yannick, `AUTOREN.md` 25) zusätzlich auf der eigenen **Folie 05b „Gründerbefragung: Innensicht“**
  (Paraphrasen und kurze Schlüsselbegriffe aus `../gruenderbefragung.md` Abschnitt 3, Pille „Innensicht ·
  Selbstauskunft (n = 1)“, Fußzeile „Horsch, M. (2026): Gründerbefragung, zwei Sprachnachrichten an L. Welker,
  10/2026 – Selbstauskunft (Horsch 2026, GB)“; Datum „10/2026“, weil 18.10. nur das Dateidatum ist und das
  Versanddatum noch Lukas bestätigt), im Abgleich auf **Folie 10** (Spalte „Selbstbild · Auftritt & Gründer“,
  Zeile „Positionierung · wie Gründer“ als Knopf zu 05b) und in B7 („GB (03, 05b, 10, B1, B3)“). Auf
  **Folie 02** nur im Sprechtext („dazu die Gründerbefragung als Innensicht“); die Methodenkarte Desk Research bleibt
  „Herkunft, Historie, Marktrolle“ (Prüfung D27: eine eigene Befragung ist Primärerhebung, keine Sekundärrecherche).
  Sonst steht GB auf den Hauptfolien nur in den Notizen und in den Kommentarkästen („FOLIE 02“–„05b“, „10“, „11“,
  „12“). Die Angabe „95 %“ nur mit dem Zusatz „laut Gründer, Datengrundlage nicht
  offengelegt“ und nur in den Notizen. Transkript und Audio liegen nur im Gruppenordner, nicht im Repository.
- **Ausnahme – Ausarbeitungen von Elias Knauber** (Bündel C), seit Do, 22.10.2026: eigene Erhebungen der Gruppe
  ohne Dossier-Nummer, **KI-gestützt (Prompt-Sammlung E. Knauber, KI-Nachweis E-EK-01 bis 03)** – seit So, 25.10.2026
  bekannt: Kommunikationsanalyse mit E-EK-01, Mensch-Analogie mit E-EK-03, dazu ein Leitfaden zum Verständnis der
  Aufgaben (E-EK-02). Die Daten (Bildschirmaufnahmen 20./21.10.2026) sind Elias' eigene; wie weit er die Ergebnisse
  überarbeitet und geprüft hat und welches Tool er nutzte, ist nicht angegeben (Fragen in
  `../kommunikationsanalyse.md` §13 und `../analogien.md` §10).
  - **Kommunikationsanalyse:** Knauber, E. (2026): *Kommunikationsanalyse zum Markenbild von HOLY – Instagram,
    Facebook, TikTok und YouTube im Vergleich.* Ausarbeitung, 12 S. Datengrundlage: eigene Bildschirmaufnahmen vom
    20.10.2026 (Profile Instagram holysquad.official, TikTok @holysquad.official, YouTube @HOLYSquadOfficial) und
    vom 21.10.2026 (Facebook-Suche nach „HOLY“; Followerzahl der Seite direkt abgelesen), vier Einzelbeiträge
    (Instagram 23.06. und 20.10.2026, TikTok 27.06. und 17.10.2026), Desk Research vom 16.10.2026 (HOLY „Our
    Story“, Angabe zur Facebook-Gruppe). KI-gestützt (E-EK-01; Facebook kommt in diesem Prompt nicht vor). Auf den
    Folien kurz „Kommunikationsanalyse E. Knauber“ bzw. „eigene Bildschirmaufnahmen 20./21.10.2026“, seit So,
    25.10.2026 in den Fußzeilen von 09, 09b und B6 mit „KI-gestützt“; im Steuerrad Kürzel **KA**. Verwendet auf Folie 09, 09b, 10 (Feld
    Markenbild, Lücke 2), 11 (Empfehlung 3), B6, als Eintrag in B7 und in den Notizen (u. a. Folie 08: Adler als
    Maskottchen, uneinheitlicher Absender).
  - **Analogien:** Knauber, E. (2026): *HOLY – Analogien: Mensch und Tier.* Ausarbeitung, Stand 16.10.2026, 2 S.
    Elias' Quellen: HOLY-Website (de.holy.com, inkl. „Unsere Story“ und Produktseiten), HOLY-Stellenanzeigen,
    Instagram @holysquad.official und @holysquad.fr, Facebook-Seite holysquad.official, X @Holysquad_uk, HOLY
    TV-Spot 2026; abgerufen am 16.10.2026. KI-gestützt (Mensch-Analogie: E-EK-03; Papagei und Chamäleon lagen dem
    Tool nur als Vorinformation vor). Auf den Folien kurz „Ausarbeitung E. Knauber“, seit So, 25.10.2026 in der
    Fußzeile von 08 „Ausarbeitung E. Knauber, KI-gestützt“; im Steuerrad Kürzel **AN**. Verwendet auf Folie 08 (Tiere, Mensch, Fußzeile, Notizen), seit 23.10.2026 im Feld Tonalität auf Folie 10
    („frech · gesellig · wandelbar“, je ein Wort aus Elias' drei Analogien) und in den Notizen von 08b (Selbstbild
    gegen das KI-simulierte Fremdbild).
  Übertragen KI-gestützt (Claude Code) am 22.10.2026 (KI-Nachweis 119, Workflow D24) nach
  `../kommunikationsanalyse.md` und `../analogien.md`; dort ist bei jedem Punkt vermerkt, was zusätzlich im Dossier
  steht (mit Status) und was nur Elias belegt. Zahlen sind die Werte aus Elias' Ausarbeitung (aus seinen Aufnahmen
  abgelesen bzw. dort gerechnet – ob von ihm oder vom KI-Tool, ist nicht angegeben), nicht nachgerechnet; Follower,
  Likes und Aufrufe gelten als Indizien (keine Insights). Belege außerhalb des Dossiers (z. B. Nutella-Werbeparodie,
  Stellenanzeigen, Claims je Land) stehen nur in Elias' Ausarbeitung und sind nicht gegengeprüft. **Keine Bilder übernommen** (Abschnitt 4), keine Namen privater Personen; die PDFs liegen im
  Gruppenordner, nicht im Repository.
- **KI-simulierte Befragung Bündel B** (seit Fr, 23.10.2026 auf den Folien; Workflow D25, 22./23.10.2026, im Auftrag
  von Yannick Heisler, KI-Nachweis 120; Einbau Workflow D26, KI-Nachweis 135): acht **fiktive, KI-simulierte
  Befragte** T1–T8 (je ein eigener KI-Agent ohne Dateizugriff) und eine Kontrollgruppe ohne Persona-Text; Codierung
  KI-gestützt, Mittelwerte, Implikationsmatrix und Aaker-Werte **per Python-Skript**. **Keine echten Interviews, keine
  Kundenstimmen, keine Signifikanz, keine Repräsentativität** – Hypothesen (Stenger, S. 78). Ablage, Prompts wörtlich,
  Rohantworten, Codierung und Skripte: `../buendel-b/` (Überblick `README.md`, Grenzen dort); Zahlen auf den Folien
  nur aus `../buendel-b/auswertung/*.csv` bzw. `hvm.json`. Auf den Folien Pille **„KI-simuliert“** und Fußzeile „KI-simulierte
  Befragung, n = 8 (T1–T8), keine echten Interviews“. Verwendet auf Folie 06 (Repertory Grid), 07 (Laddering), 08b
  (Aaker-Bogen, Analogie-Fragen), B4, B5, im Sprechtext und in den Notizen von Folie 08 (Tierfrage offen gestellt:
  Papagei 5 von 8) und im Abgleich Selbstbild ↔ Fremdbild auf Folie 10. **Nicht im Steuerrad** (Entscheidung Yannick
  23.10.2026: Rad = Selbstbild). Wettbewerbsset und Idealmarke sind Vorschläge des Dossiers, nicht von der Gruppe
  beschlossen.
- **Analogie-Tiere Papagei und Chamäleon** (Folie 08; Chamäleon seit Di, 20.10.2026, vorher Waschbär nach der
  Hypothese im Dossier Kap. 6.7; seit Fr, 23.10.2026 **beide gleichwertig**, Entscheidung Yannick nach Elias' Notizen,
  KI-Nachweis 135): Einordnung und – seit Do, 22.10.2026 – Begründung von Elias Knauber (Ausarbeitung Analogien, Stand
  16.10.2026; KI-gestützt laut Prompt-Sammlung E. Knauber, KI-Nachweis E-EK-01 bis 03 – die Tiere lagen dem Tool nur
  als Vorinformation vor): Papagei – gesellig, bunt; Chamäleon – wandelbar, kreativ (dazu in den Notizen anpassungsfähig); je mit
  seinen Belegen (Eigenschaften und Belege von Elias, die Paarung je Zeile hat die Übertragung gebildet – von Elias zu
  bestätigen); als Mensch ein Impro-Comedian. Die Analogie bleibt eine Hypothese (H). Vom 20. bis 22.10.2026
  stand auf der Folie ein **Vorschlag, KI-gestützt** aus dem Recherche-Dossier (Kap. 1, 2.1, 2.7, 2.8, 3.1,
  6.1–6.3, 6.6, 7.1, 8); diese Dossier-Belege stehen seither nur noch als gekennzeichnete Ergänzung in den Notizen
  von Folie 08. Ohne Websuche. Die Alltagsbedeutung von „Chamäleon“ („ohne festen Kern“, Tarnung) ist
  Sprachgebrauch aus dem Modellwissen; Elias' Gegenargument zur Tarnung (Farbwechsel zur Kommunikation mit
  Artgenossen) steht bei ihm ohne Quelle. Die Fußzeile von Folie 08 nennt die Ausarbeitung, aber nicht den
  Tiernamen, weil sie schon während der Abstimmung zu sehen ist.
- **Markenfarben** Gelb `#FFD007` und Schwarz `#1D1D1B`: Dossier Kap. 6.3 ✔ [1] (Werte aus dem CSS der
  Website de.holy.com, kein offizieller Styleguide).
- **Beispieldaten** (Pille „Beispieldaten“): **Seit Fr, 23.10.2026** tragen 06, 07, 08b, B4 und B5 statt
  „Beispieldaten“ die Pille **„KI-simuliert“** (vorheriger Punkt). Folie 10, 11, 12, B1 und B2 zieht am 23.10.2026 ein
  paralleler Synthese-Schritt nach – maßgeblich sind die Kästen in `index.html`. Beim Abgleich dieser Datei trug
  Folie 10 die Pille **„teils KI-simuliert“** (das Rad zeigt das Selbstbild aus Quellen, KI-simuliert ist nur der
  Abgleich), Folie 11 und 12 keine Pille mehr; B1 („teils geplant“) und B2 („teils Beispiel“) waren noch nicht
  nachgezogen (Stand bis 22.10.2026: Pille „Beispieldaten“ auf 10, 11, 12). Auf Folie 08 sind nur die Tiere
  der Wettbewerber im Kontrast Beispiel („(Beispiel)“, ohne Pille). **Seit Do, 22.10.2026 ohne Beispieldaten:** Folie 08 (Tier und Mensch nach Elias
  Knauber), Folie 09 (vier Kanäle mit Elias' Werten; Beiträge pro Woche, Engagement-Raten, Motivanteile und die
  Zahl der codierten Beiträge waren Beispielwerte und entfallen ersatzlos) und B6 (Elias' Tabelle 1 statt der
  Beispiel-Codiertabelle). B1 trug bis 22.10.2026 „teils geplant“ (Kurzinterviews – es gab keine), B2 „teils
  Beispiel“ (Bündel A belegt, P7–P14 Beispiel; seit 23.10.2026 P7–P11 echte Läufe D25 – Einbau parallel; seit So,
  25.10.2026 statt der Beispielzeile P12 die Zeile „E-EK-01–03“ – Elias' KI-Nutzung laut Prompt-Sammlung; P13, P14
  bleiben Beispiel, die Pille „teils Beispiel“ bleibt). Folie 09b
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
  **Abgleich mit der Vorlesung, Stand Mi, 21.10.2026** (`../abgleich-vorlesung.md`, freigegeben von Yannick):
  Die Begriffe des Steuerrads folgen jetzt den Vorlesungsfolien (Stenger, S. 60, 87–94) – Mitte „Markenkern“
  (bis dahin „Markenkompetenz“, so bei Esch selbst; #27), Leitfragen in der Wir-Form (#28), Feld
  „Markeneigenschaften“ (bis dahin „Markenattribute“; #29); der Satz über dem Rad auf Folie 10 heißt
  „Positionierung“ (S. 87, 94; bis dahin „Markenkern“). Limbic Types und Prozentgewichte (Folie 05) stehen nicht in
  der Vorlesung und sind als eigene Erweiterung gekennzeichnet (#22). Repertory Grid, Laddering und
  Analogien nennt die Vorlesung nur als Aufgabe (S. 60), Aaker und Kotlers Wettbewerbsrollen gar nicht;
  Schlüsselbilder stehen auf S. 60 und 97 ohne Urheber, Kroeber-Riel/Esch (2018) in der Literaturliste (S. 3).
  Literaturangaben sind noch nicht auf die Vorlesungsausgaben umgestellt (#11–#14, nicht freigegeben).
- **HOLY** ist eine Marke der HOLY Softdrinks GmbH; sie wird hier nur im Rahmen der Lehrveranstaltung
  analysiert. Erwähnte Wettbewerber (z. B. Red Bull, waterdrop) gehören ihren jeweiligen Inhabern.

## 6. KI-Unterstützung

Diese Präsentation wurde **mit KI-Unterstützung erstellt: Claude Code (Anthropic)** – Engine, Designsystem,
Folienaufbau, Diagramme, Sprechtext-Entwürfe, Prüfwerkzeug und diese Dokumentation. Die Gestaltung wurde in
drei Richtungen entworfen und per Jury-Bewertung ausgewählt (`_entwuerfe/JURY.md`). Alle Prompts,
Unteragenten und Prüfschritte sind im KI-Nachweis der Gruppe dokumentiert (`../../ki-nachweis/`). Inhalte
über HOLY stammen aus dem geprüften Recherche-Dossier und aus eigenen Erhebungen der Gruppe (Gründerbefragung,
seit 22.10.2026 Elias Knaubers Ausarbeitungen), nicht aus dem Modellwissen; Beispieldaten sind gekennzeichnet.
Elias' Ausarbeitungen sind selbst **KI-gestützt (Prompt-Sammlung E. Knauber, KI-Nachweis E-EK-01 bis 03)** – mit
einem KI-Tool, das er nicht nennt; wie weit er die Ergebnisse überarbeitet und geprüft hat, ist nicht angegeben
(seit So, 25.10.2026, Abschnitt 5). Lukas hat keine KI genutzt (laut Yannick, 25.10.2026). Die
Befragung auf 06, 07, 08b, B4, B5 ist seit 23.10.2026 eine **KI-simulierte** Befragung (acht fiktive Befragte,
Workflow D25) – gekennzeichnet mit „KI-simuliert“; sie gibt Hypothesen wieder, keine Kundenstimmen, und steht nicht im
Steuerrad. Die Gruppe prüft und verantwortet alle Inhalte vor dem Vortrag.
