# KI-Nachweis Fallstudie 2 – Unternehmenskommunikation

**Gruppe:** Yannick Heisler · Elias Knauber · Lukas Welker
**Modul:** Unternehmenskommunikation, Prof. Dr. Daniel Stenger, Hochschule Kaiserslautern
**Fallstudie 2:** Customer Journey & Blog-Beitrag (Präsentation Mo, 09.11.2026) · Marke HOLY

Diese Datei dokumentiert jede KI-Nutzung der Gruppe für Fallstudie 2. Der abgeschlossene Nachweis für Fallstudie 1
steht in [`ki-nachweis.md`](ki-nachweis.md) (Einträge 01–206). Aufbau wie dort:

1. **Prompts an Claude Code**: Arbeitssitzung von Yannick im Repository
2. **Delegationen an Unteragenten**: Teilaufgaben, die Claude Code selbst an weitere KI-Agenten vergeben hat
3. **KI-Nutzung außerhalb von Claude Code**: z. B. ChatGPT, Perplexity, Bildgeneratoren (alle drei)

**Tool:** Claude Code (Anthropic), Cloud-Sitzung: https://claude.ai/code/session_01YSremZuLwkZBrQtVwPaAAr
**Rohdaten:** [`rohprotokoll.jsonl`](rohprotokoll.jsonl) (gemeinsam mit Fallstudie 1; Einträge für Fallstudie 2 ab
27.10.2026), Erklärung siehe [Abschnitt 4](#4-wie-dieser-nachweis-entsteht)

Begonnen am 27.10.2026 mit der Vorbereitung auf Fallstudie 2 (Entscheidung Yannick, Eintrag 03).

---

## 1. Prompts an Claude Code

Wenn nicht anders angegeben, stammt der Prompt von **Yannick Heisler**. Prompts stehen wörtlich (inkl. Tippfehler).

| Nr. | Datum | Von | Inhalt (kurz) | Unteragenten | Ergebnis |
|-----|-------|-----|---------------|--------------|----------|
| 01 | 27.10.2026 | Yannick | Überlegen, wie die Kritik von Prof. Stenger in Fallstudie 2 umgesetzt wird (z. B. mehr Bilder) | D01 (Workflow) | 43 Vorschläge aus 4 Blickwinkeln, zu einem Plan verdichtet (Chat) |
| 02 | 27.10.2026 | Systemhinweis (kein Prompt der Gruppe) | Stop-Hook: uncommittete Änderungen (Rohprotokoll) | – | committet und gepusht |
| 03 | 27.10.2026 | Yannick | „ja“: Vorbereitung als Beginn von Fallstudie 2 dokumentieren | – | diese Datei angelegt; `CLAUDE.md`, `README.md` angepasst |
| 04 | 30.10.2026 | Yannick | Fallstudie 2 anfangen: Deep Research und Gestaltungsplan nach den neu festgelegten Regeln | D02 (Workflow) | Recherche-Dossier (353 Befunde), Gestaltungsplan, 3 Musterfolien, README in `fallstudie-2-customer-journey/` |
| 05 | 30.10.2026 | Yannick | Erlaubnis, in dieses Repository zu pushen | – | Schreibzugriff eingerichtet; Nachweis begonnen |
| 06 | 30.10.2026 | Yannick | „Versuch es noch einmal“: abgebrochene Schritte nach dem Nutzungslimit erneut starten | D03 (Workflow) | Schlussprüfungen abgeschlossen, Korrekturen in Dossier und Plan eingearbeitet |
| 07 | 30.10.2026 | Systemhinweis (kein Prompt der Gruppe) | Stop-Hook: uncommittete Änderungen | – | Zwischenstand committet und gepusht |
| 08 | 02.11.2026 | Yannick | Videobotschaft des HOLY-Gründers für die nächste Präsentation (Anhang: Video) | – | nur technische Daten gelesen; Inhalt nicht ausgewertet, Einwilligung offen; nicht im Repository |
| 09 | 02.11.2026 | Yannick | Gründer hat zugestimmt (Video und Stimme in der Präsentation); Platz am Ende | – | Gestaltungsplan: Video als Schlussschritt auf Folie 09 (9.5), Zeit und Klicks angepasst; `.gitignore`; Video nur lokal |
| 10 | 03.11.2026 | Yannick | Aufgabenfolie zu Fallstudie 2 erhalten (Anhang: Foto der Folie) | D04 (Workflow) | Aufgabe abgeschrieben (README), Termin 10.11.; Abgleich: A1, A2, A4, A6, A7 teilweise abgedeckt, A3 und A5 fehlen weitgehend; Vorschlag neuer Folienplan (Chat) |
| 11 | 03.11.2026 | Yannick | Mit dem Bau anfangen; Prof. Stenger regt eine eigene HOLY-Webseite an | D05 (Workflow) | Plan umgebaut, Best Practices X01–X17 (Dossier 7a), Konzept-Webseite (7 Seiten), Präsentation (9 Folien + B1–B9); Abnahmebefunde eingearbeitet, Logos eingebaut |
| 12 | 03.11.2026 | Yannick | Freigabe: HOLY-Logos dürfen genutzt werden (Gründer eingeweiht) | – | umgesetzt (Eintrag 11): Oval auf Folie 01 und 09, Wortmarke im Kopf der Konzept-Webseite |
| 13 | 03.11.2026 | Systemhinweis (kein Prompt der Gruppe) | Stop-Hook: uncommittete Änderungen (Gestaltungsplan, während D05 läuft) | – | Zwischenstand committet und gepusht |
| 14 | 03.11.2026 | Systemhinweis (kein Prompt der Gruppe) | Meldung: Workflow D05 „fs2-bau“ abgeschlossen | – | Ergebnisse gelesen, Abnahme ausgewertet (weiter in Eintrag 11) |
| 15 | 03.11.2026 | Yannick | HOLY-Grafiken online herunterladen; Webseite und Präsentation sollen gut aussehen; Nutzung nur privat in der Uni | D06 (Workflow) | 281 Kandidaten beschafft, 64 Dateien ausgewählt und eingebaut (Präsentation 44, Webseite 20), Abnahme mit 23 Befunden; zuerst nur in `intern/`, nach Freigabe 17 veröffentlicht |
| 16 | 03.11.2026 | Systemhinweis (kein Prompt der Gruppe) | Stop-Hook: uncommittete Änderungen (nur Rohprotokoll, während D06 läuft) | – | Rohprotokoll committet und gepusht |
| 17 | 03.11.2026 | Yannick | Freigabe: heruntergeladene Bilder dürfen auf GitHub (Pages) veröffentlicht werden | D07 (Workflow) | umgesetzt: Endbilder nach `fremdbilder/` (versioniert, auf GitHub Pages), Rohdownloads bleiben in `intern/` ausgeschlossen; Befunde der D06-Abnahme in D07 |
| 18 | 03.11.2026 | Yannick | Gründer-Video direkt in die Präsentation (auch online) | D07 (Workflow) | Rückfrage beantwortet: Gründer mit öffentlicher Online-Version einverstanden; Video nach `praesentation/video/` (versioniert), Folie 09 spielt es online ab |

### 01 – 27.10.2026 – Yannick

> Überlege schon mal wie wir in der nächsten Fallstudie seine Kritik umsetzen können wie mehr Bilder

- **Anhänge:** keine. Bezug: Bewertungsbogen von Prof. Stenger zu Fallstudie 1 (`ki-nachweis.md`, Eintrag 205).
- **Vorgehen Claude:** Aufgabe zu Fallstudie 2 in den Unterlagen gesucht: Stenger-Folie 57 nennt nur „Customer
  Journey & Blog Beitrag, am 09.11.“; eine eigene Aufgabenfolie wie Folie 60 für Fallstudie 1 gibt es nicht. Die
  Vorlesungsseiten zur Customer Journey (etwa S. 107–129) dienen als Grundlage. Workflow D01 mit vier Planern
  gestartet (Bilder und Visualisierung, Inhalt und Modelle, Zeit und Vortrag, „weniger nüchtern“), jeder mit Stengers
  Kommentaren im Wortlaut, nur lesend, mit Quellenangabe.
- **Ergebnis:** Plan im Chat: (1) sofort klären (Mail an Prof. Stenger, Bildfreigaben), (2) echtes Material statt
  KI (Selbstversuch mit Fotos, eigene Produktfotos, offene Kurzinterviews, Bewertungen codieren), (3) Gestaltung
  (HOLY-Farben, ein Bild je Folie, Journey-Map mit Bildern, Moodboard, Blog als Mock-up, weniger Fußnoten),
  (4) Inhalt nach Stengers Touchpoint-Prozess und Übung S. 128/129, Herleitung auf der Folie, (5) Zeit (höchstens
  9 Hauptfolien, 25 Klicks, 12:30 Sollzeit, Zeitwächter, zwei Generalproben mit Messung, Änderungsstopp).
- **Dateien:** `ki-nachweis/workflows/2026-10-27_fs2-kritik-umsetzen.js`
- **Unteragenten:** D01
- **Prüfung durch die Gruppe:** ☐ offen

### 02 – 27.10.2026 – Systemhinweis (kein Prompt der Gruppe)

> Stop hook feedback: There are uncommitted changes in the repository. Please commit and push these changes to the remote branch.

- **Vorgehen Claude:** Rohprotokoll committet und gepusht.
- **Prüfung durch die Gruppe:** ☐ offen

### 03 – 27.10.2026 – Yannick

> ja

- **Anhänge:** keine. Antwort auf Claudes Frage, ob die Vorbereitung (Eintrag 01) als Beginn von Fallstudie 2 in
  einer neuen Datei dokumentiert werden soll.
- **Vorgehen Claude:** Diese Datei angelegt (Aufbau wie `ki-nachweis.md`, Nummern ab 01, Delegationen ab D01);
  Workflow-Skript von D01 nach `workflows/` kopiert; Pausenhinweis in `CLAUDE.md` durch den Verweis auf diese Datei
  ersetzt; `README.md` verlinkt beide Nachweise.
- **Ergebnis:** Nachweis für Fallstudie 2 läuft.
- **Dateien:** `ki-nachweis/ki-nachweis-fallstudie-2.md`, `ki-nachweis/workflows/2026-10-27_fs2-kritik-umsetzen.js`,
  `CLAUDE.md`, `README.md`
- **Unteragenten:** keine
- **Prüfung durch die Gruppe:** ☐ offen

### 04 – 30.10.2026 – Yannick

> Es muss Fallstudie 2 angefangen werden mache schon mal ein deep research dazu und einen Plan für Design nach den neu festgelegten Regeln. Du hast ja die Auswertung von der ersten Fallstudie im github oder?

- **Anhänge:** keine.
- **Sitzung:** neue Cloud-Sitzung https://claude.ai/code/session_01QaxnpigZhpAt4W2MG1X86c, gestartet im Repository
  `Marketing`; dieses Repository war zuerst nur lesend eingebunden. Die Hooks aus `.claude/settings.json` greifen in
  dieser Sitzung nicht, deshalb fehlen Prompt 04 und 05 im `rohprotokoll.jsonl`; der Wortlaut steht hier.
- **Vorgehen Claude:** Auswertung von Fallstudie 1 gesucht und gefunden: Bewertung von Prof. Stenger
  (`ki-nachweis.md`, Eintrag 205; Kommentare im Wortlaut im Workflow-Skript von D01) und der Plan aus Eintrag 01.
  Als „neu festgelegte Regeln“ verwendet: der Plan aus Eintrag 01 (R1 Klären, R2 echtes Material, R3 Gestaltung,
  R4 Inhalt nach Stengers Touchpoint-Prozess, R5 Zeit) und die bestehenden Gruppenregeln; zusätzlich, nur als
  Vorschlag, die Gestaltungsprinzipien der Neugestaltung „Der rote Faden“ vom 29.10.2026 (Repository
  `Management-im-KMU`, Branch `claude/adoring-carson-l7t75l`). Vorlesungsfolien (`unterlagen/Stenger Folien.pdf`,
  S. 56–60 und 107–129) als Text und Seitenbilder aufbereitet. Workflow D02 gestartet.
- **Ergebnis:** Ordner `fallstudie-2-customer-journey/` (Ergebnis von D02 und D03, Inhalt aus Websuche der
  Unteragenten mit Quellen; Einordnungen und Vorschläge als **H** gekennzeichnet):
  - **Recherche-Dossier** `recherche-customer-journey.md`: 353 Befunde (215 ✔, 63 ✎, 29 ~, 44 H, 2 ✗ nur in
    Anhang A), 274 neue Quellen plus Quellen aus dem FS1-Dossier; Touchpoints je Phase nach Stengers Raster,
    Touchpoint-Liste nach dem Intersport-Muster, fünf Brüche, Suche und Content-Lücken, Benchmark von 14 Marken-Blogs,
    Leitplanken für Blog-Aussagen, fünf Blog-Themen mit Empfehlung „Koffein-Check“, Vorschlag für die Übung
    S. 128/129 (20 Aktivitäten), Fragen an Prof. Stenger und an HOLY.
  - **Gestaltungsplan** `gestaltungsplan.md`: Richtung „Der Journey-Pfad – Editorial mit Bildern“ (beide Jurys auf
    Platz 1) mit Übernahmen aus den anderen zwei Richtungen; 9 Hauptfolien, 22 Klicks, 11:40 + 0:50 Reserve = 12:30;
    Antwort auf jeden Kommentar von Prof. Stenger, Bildplan mit Rückfällen, Meilensteine bis 09.11. ohne Personen.
  - **Musterfolien** `_entwuerfe/{reise,markenwelt,faden}/journey.{html,png}` (eigene Gestaltung, Bildkacheln als
    Platzhalter).
  - **README** des Ordners mit Aufgabe, Bezug zu FS1 und „Was wir annehmen und beim Prof klären müssen“; Ordner-Link
    in `README.md`.
- **Dateien:** `fallstudie-2-customer-journey/` (neu: `README.md`, `recherche-customer-journey.md`,
  `gestaltungsplan.md`, `_entwuerfe/`), `README.md`, `ki-nachweis/workflows/2026-10-30_fs2-recherche-gestaltung.js`,
  `…-fortsetzung.js`, `ki-nachweis/workflows/2026-10-30_fs2-pruefvermerke/`
- **Unteragenten:** D02
- **Prüfung durch die Gruppe:** ☐ offen

### 05 – 30.10.2026 – Yannick

> Du darfst ins Unternehmens-Kommunikation Repo pushen

- **Anhänge:** keine. Antwort auf Claudes Hinweis, dass der Schreibzugriff fehlte.
- **Vorgehen Claude:** Repository mit Schreibzugriff an die Sitzung angehängt und neu geklont; Einträge 04, 05 und
  D02 angelegt, Workflow-Skript abgelegt, committet und gepusht.
- **Dateien:** `ki-nachweis/ki-nachweis-fallstudie-2.md`, `ki-nachweis/workflows/2026-10-30_fs2-recherche-gestaltung.js`
- **Unteragenten:** keine
- **Prüfung durch die Gruppe:** ☐ offen

### 06 – 30.10.2026 – Yannick

> Versuch es noch einmal

- **Anhänge:** keine. Gesendet, während Claude den Abbruch von D02 auswertete: Die Fortsetzung von D02 war bis auf
  zwei Schritte fertig; diese zwei (Einarbeitung der Schlussprüfung ins Dossier, Schlussprüfung des Gestaltungsplans)
  waren am Nutzungslimit gescheitert.
- **Vorgehen Claude:** Zuerst die Fortsetzung von D02 wieder aufgenommen. Sie startete aber schon fertige Schritte
  (Jury, Schlussprüfung des Dossiers) neu, statt sie aus dem Zwischenspeicher zu übernehmen, und hätte den fertigen
  Gestaltungsplan überschreiben können; deshalb nach etwa einer Minute gestoppt (keine Datei geändert, per Vergleich
  mit einer Sicherung geprüft). Festgestellt, dass der abgebrochene Korrektur-Agent das Dossier schon zu großen Teilen
  korrigiert hatte (41 Änderungen), Anhang A.9 aber noch Platzhalter war. Dann einen schlanken Workflow D03 nur für die
  zwei offenen Schritte gestartet; das fertige Prüfergebnis zum Dossier bekommt er als Datei. Nach D03 selbst
  nachgeprüft (siehe D03) und die Prüfvermerke zu R, P und G abgelegt, deren Fehlen die Schlussprüfung bemängelt hatte.
- **Ergebnis:** Dossier und Gestaltungsplan sind schlussgeprüft und korrigiert (Dossier Anhang A.9, Plan Abschnitt 15).
- **Dateien:** `ki-nachweis/workflows/2026-10-30_fs2-schlusspruefung-rest.js`,
  `ki-nachweis/workflows/2026-10-30_fs2-pruefvermerke/`, `fallstudie-2-customer-journey/recherche-customer-journey.md`,
  `fallstudie-2-customer-journey/gestaltungsplan.md`, `fallstudie-2-customer-journey/_entwuerfe/faden/journey.{html,png}`
- **Unteragenten:** D03
- **Prüfung durch die Gruppe:** ☐ offen

### 07 – 30.10.2026 – Systemhinweis (kein Prompt der Gruppe)

> Stop hook feedback: [~/.claude/stop-hook-git-check.sh]: There are uncommitted changes in the repository. Please commit and push these changes to the remote branch.

- **Vorgehen Claude:** Zwischenstand committet und gepusht, während D03 noch läuft: Dossier (Korrekturen der
  Schlussprüfung teilweise eingearbeitet, Anhang A.9 noch Platzhalter), Gestaltungsplan vor seiner Schlussprüfung,
  drei Musterfolien, neue `fallstudie-2-customer-journey/README.md`, Ordner-Link in `README.md`. Der Endstand folgt
  nach D03.
- **Dateien:** `fallstudie-2-customer-journey/` (neu), `README.md`, `ki-nachweis/ki-nachweis-fallstudie-2.md`
- **Unteragenten:** keine
- **Prüfung durch die Gruppe:** ☐ offen

### 08 – 02.11.2026 – Yannick

> Vom holy Gründer eine videobotschaft für unsere nächste Präsentation

- **Anhänge:** ein Video `VID-20261102-WA0011.mp4` (laut Yannick Videobotschaft des HOLY-Gründers Mathias Horsch;
  16,1 s, Hochformat 576 × 1024, H.264/AAC, 3,5 MB).
- **Vorgehen Claude:** Nur die technischen Daten mit `ffprobe` gelesen. Das Video **nicht** angesehen, nicht
  transkribiert und nicht ins Repository übernommen: Gesicht und Stimme sind personenbezogene Daten; die
  Einwilligung des Gründers aus Fallstudie 1 galt der Abschrift und Auswertung seiner Sprachnachrichten
  (`fallstudie-1-brand-persona/gruenderbefragung.md`, Kopf „Freigabe“), nicht diesem Video (HSKL-KI-Richtlinie Nr. 6).
  Beim Push lag schon die Arbeit einer anderen Sitzung vom 30.10. (Einträge 04–07, D02, D03) auf `master`; per Merge
  zusammengeführt, dieser Eintrag deshalb als 08 (lokal zuerst als 04 angelegt).
- **Ergebnis:** Antwort im Chat; keine Datei außer diesem Nachweis.
- **Dateien:** `ki-nachweis/ki-nachweis-fallstudie-2.md`
- **Unteragenten:** keine
- **Prüfung durch die Gruppe:** ☐ offen

### 09 – 02.11.2026 – Yannick

> Er hat zugestimmt wir dürfen es einbauen in die Präsentation Video und stimme plan ist am ende

- **Anhänge:** keine.
- **Vorgehen Claude:** Zustimmung des Gründers (laut Yannick) für Video und Stimme in der Präsentation vermerkt; nicht
  umfasst sind Veröffentlichung (Repository, GitHub Pages) und KI-Transkription – deshalb Video weiter **nicht**
  angesehen oder transkribiert. Weil der Gestaltungsplan höchstens 9 Hauptfolien erlaubt (R5), läuft das Video nicht
  als eigene Folie, sondern als Klick 1 auf der Schlussfolie 09 vor „Fragen?“. `gestaltungsplan.md` angepasst:
  Folienplan (09: 2 Klicks, 65 s), Summen (23 Klicks, 11:55 + 0:35 Reserve = 12:30) in Kurzfassung, R5, Antworttabelle,
  10.1 und Kürzungsplan; Bildplan v01; neuer Abschnitt 9.5; Technik 11.2 (Video-Schritt, Rückfall); Beamer-Test 11.4
  (Ton); 13.3 (Antwort des Gründers). `.gitignore` angelegt (wie im Plan 11.2 vorgesehen) für
  `fallstudie-2-customer-journey/praesentation/intern/` und `…/_test/`; Video dorthin kopiert
  (`intern/gruender-video.mp4`, per `git check-ignore` geprüft: nicht im Repository).
- **Ergebnis:** Plan für das Gründer-Video am Schluss steht; Video liegt nur lokal in dieser Sitzung und beim Team.
- **Dateien:** `fallstudie-2-customer-journey/gestaltungsplan.md`, `.gitignore`, `ki-nachweis/ki-nachweis-fallstudie-2.md`
- **Unteragenten:** keine
- **Prüfung durch die Gruppe:** ☐ offen

### 10 – 03.11.2026 – Yannick

> Wir haben die Aufgaben bekommen

- **Anhänge:** ein Foto der Aufgabenfolie „FALLSTUDIE 2: Customer Journey – Präsentation am 10.11.“ (in der Vorlesung
  am Bildschirm aufgenommen; sieben Aufgaben mit Kästchen, Fußzeile „Unternehmenskommunikation – Prof. Dr. Daniel
  Stenger“). Keine Personen erkennbar.
- **Vorgehen Claude:** Folie wörtlich in `fallstudie-2-customer-journey/README.md` abgeschrieben (Abschnitt „Aufgabe“),
  Unterschiede zur bisherigen Planung benannt (Termin 10.11. statt 09.11., kein Blog mehr, Top 3 statt Top 2
  Touchpoints je Phase mit priorisiertem Top-Touchpoint, IST und SOLL eines zentralen Wegs, Überleitungen,
  branchenübergreifende Best Practices, Mockups); Termin in `README.md` und FS2-README nachgezogen. Workflow D04
  gleicht die Aufgabe mit `gestaltungsplan.md` und `recherche-customer-journey.md` ab.
- **Ergebnis:** Im Chat: Abdeckung je Aufgabe, Vorschlag für den zentralen Weg (online, laut Persona), neuer Folienplan
  innerhalb R5 (9 Folien: u. a. neue Folie „Überleitungen im IST“, „Best Practice → Maßnahme“, Mock-up-Strecke statt
  Blog-Folie), fehlende Recherche (branchenübergreifende Best Practices als größte Lücke; Übergangsprotokoll im
  Selbstversuch; Persona-Daten für Top 3), neuer Zeitplan bis Di 10.11. und neue Fragen an Prof. Stenger. Plan und
  Dossier noch **nicht** geändert (wartet auf Yannicks Entscheidung).
- **Dateien:** `README.md`, `fallstudie-2-customer-journey/README.md`, `ki-nachweis/workflows/2026-11-03_fs2-aufgabe-abgleich.js`
- **Unteragenten:** D04
- **Prüfung durch die Gruppe:** ☐ offen

### 11 – 03.11.2026 – Yannick

> Fang an mit dem Bau und ich schaue es mir dann an er meinte auch wir könnten eine eigene Holy Webseite bauen wie wir es uns vorstellen würde um es besser zu machen

- **Anhänge:** keine. Bezug: Entscheidungsvorschläge 1–4 aus Eintrag 10 (zentraler Weg online, neuer Folienplan,
  Blog als Seite der Konzept-Webseite, Termine bis Di 10.11.); als angenommen behandelt.
- **Vorgehen Claude:** Workflow D05 „fs2-bau“ mit 8 Unteragenten in fünf Phasen: (1) Gestaltungsplan umbauen und
  parallel branchenübergreifende Best Practices je Top-Touchpoint per Websuche recherchieren (2 Agenten), (2) Fälle
  an den Quellen prüfen und als neues Dossier-Kapitel schreiben, (3) Konzept-Webseite (eigene HOLY-Webseite als
  Mockup der optimierten Touchpoints, mit festem Hinweisbalken „Studentisches Konzept … keine Website der HOLY
  Softdrinks GmbH · keine Bestellung möglich“, noindex, ohne Logo und fremde Bilder, ohne Datenversand),
  (4) Präsentation mit FS1-Engine und Thema „Pfad“, (5) Abnahme Technik und Inhalt/Recht (nur lesend).
- **Ergebnis (nach Abschluss von D05 und Nacharbeit durch Claude):**
  - **Gestaltungsplan** nach A1–A7 umgebaut: 9 Hauptfolien, 23 Klicks, 11:50 + 0:40 Reserve; Top 3 je Phase mit
    Herleitung; Überleitungen Ü1–Ü4 mit Maßstab (6.7); Konzept-Webseite statt Blog (7); Meilensteine M6–M13.
  - **Dossier Kap. 7a** „Best Practices je Top-Touchpoint“: 17 branchenfremde Fälle (X01–X17; 10 ✔, 6 ✎, 1 ~), Quellen
    [275]–[321] aus Websuche am 03.11.2026; Teilaussagen ohne prüfbare Quelle gestrichen (siehe D05).
  - **Konzept-Webseite** `fallstudie-2-customer-journey/konzept-website/`: 7 Seiten entlang des zentralen Wegs (SOLL),
    Präsentationsmodus `?anmerkungen=1` mit 47 Anmerkungen, Hinweisbalken, `noindex`, keine Formulare, keine externen
    Anfragen.
  - **Präsentation** `fallstudie-2-customer-journey/praesentation/`: FS1-Engine, Thema „Pfad“, Folien 01–09 und B1–B9,
    Videobotschaft auf 09 nur per Pfad aus `intern/` (nicht im Repository).
  - **Abnahme** (2 Prüfer) und **Nacharbeit durch Claude** nach deren Befunden: Konzept-Webseite – Iced Teas mit
    natürlichem Koffein ergänzt (Help-Center selbst abgerufen, 03.11.2026), Abschnitt Schichtarbeit ohne impliziten
    Konsumrat, Altershinweis auf der Landingpage, Rechtsaussage zur Health-Claims-Verordnung als Einschätzung „keine
    Rechtsberatung“, Grundpreise als „aus 7 g je Portion gerechnet“ bzw. „offen“ gekennzeichnet, Garantie-Siegel als
    „Vorschlag der Gruppe“, Mischtipp ohne „mehr Pulver“, `?code=` nur noch mit Beispielcodes, Kopf bei 320 px.
    Präsentation – Ü1 „wackelt“ statt „trägt“ (eigener Maßstab: Umweg über die Suche), Entscheidungskriterium für Platz 1
    auf 06, „Wirkung meist nur Firmenangabe“ auf 07, neue Bildschirmfotos auf 08 passend zu den Anmerkungen, Bezug zum
    Markensteuerrad aus FS1, Sprechtexte ohne noch nicht erledigte Erhebungen („[erst nach … so sprechen]“), Belegzeile
    04 in 26 px, Überlauf-Ausnahme nur am Pfad auf 09. Dazu README FS2, Gestaltungsplan, Dossier (X07, 7a.7, S27),
    LIESMICH, QUELLEN, AUTOREN §9.
  - **HOLY-Logos (Freigabe Eintrag 12):** gelbes Oval auf Folie 01 und 09 (mit Quellenzeile), Wortmarke im Kopf jeder
    Seite der Konzept-Webseite; Hinweisbalken und `noindex` bleiben.
  - **Veröffentlichung:** Mit diesem Push ist die Konzept-Webseite über GitHub Pages erreichbar (gekennzeichnet, keine
    Bestellung). Die Frage an Prof. Stenger bleibt (Gestaltungsplan 13.2 Nr. 16); bei Widerspruch kommt der Ordner aus
    `master`.
  - **Bewusst offen (für die Gruppe):** eigene Fotos und Rückfall-Grafiken (alle Bildkacheln stehen noch auf „offen“),
    Selbstversuch, Workshop, Interviews, Wortbudget 02/07/09, `referent-test.mjs` für FS2, schriftliche Logo-Freigabe
    des Gründers mit Umfang, Bestätigung der Vorbilder auf 07.
  - **Herkunft:** Best Practices aus Websuche (Quellen mit Abrufdatum im Dossier); alle Aussagen über HOLY aus dem
    Dossier mit Befund-ID; der Satz zu den Iced Teas aus eigenem Abruf des Help-Centers am 03.11.2026; Gestaltung und
    Texte KI-gestützte Entwürfe.
- **Dateien:** `fallstudie-2-customer-journey/gestaltungsplan.md`, `recherche-customer-journey.md`, `README.md`,
  `konzept-website/` (neu, inkl. `bilder/holy-logo-wortmarke.png`, `werkzeuge/pruefen.mjs`, `werkzeuge/folie08-bilder.mjs`),
  `praesentation/` (neu, inkl. `bilder/holy-logo-oval.png`); `ki-nachweis/workflows/2026-11-03_fs2-bau.js`
- **Unteragenten:** D05
- **Prüfung durch die Gruppe:** ☐ offen

### 12 – 03.11.2026 – Yannick

> Du darfst die holy Logos nutzen es ist nur für ein studentenprojekt und der Gründer ist eingeweiht

- **Anhänge:** keine.
- **Vorgehen Claude:** Freigabe vermerkt (laut Yannick: Gründer eingeweiht, nur für das Studienprojekt). Sie gilt für
  die HOLY-Logos (vorhanden aus FS1: `holy-logo-oval.png`, `holy-logo-wortmarke.png`, Quelle de.holy.com, Abruf
  16.10.2026), nicht für Produktfotos, Screenshots oder Social-Media-Bilder. Der laufende Workflow D05 arbeitet noch
  mit der Regel „kein Logo“; die Logos baut Claude nach dessen Abschluss in Präsentation und Konzept-Webseite ein.
  Der Hinweisbalken „Studentisches Konzept … keine Website der HOLY Softdrinks GmbH“ und noindex bleiben, damit die
  Konzept-Webseite mit Logo nicht als echte HOLY-Seite durchgeht.
- **Ergebnis:** vermerkt; umgesetzt nach Abschluss von D05 (Eintrag 11): Oval auf Folie 01 und 09, Wortmarke im Kopf
  der Konzept-Webseite. Die Abnahme von D05 empfiehlt, die Freigabe des Gründers schriftlich mit Umfang (Hörsaal,
  Repository, GitHub Pages) abzulegen.
- **Dateien:** `ki-nachweis/ki-nachweis-fallstudie-2.md`
- **Unteragenten:** keine
- **Prüfung durch die Gruppe:** ☐ offen

### 13 – 03.11.2026 – Systemhinweis (kein Prompt der Gruppe)

> Stop hook feedback: There are uncommitted changes in the repository. Please commit and push these changes to the remote branch.

- **Vorgehen Claude:** Der Plan-Agent von D05 bearbeitet gerade `gestaltungsplan.md`; der Zwischenstand wurde als
  solcher committet und gepusht. Der fertige Stand folgt nach Abschluss und Abnahme von D05.
- **Prüfung durch die Gruppe:** ☐ offen

### 14 – 03.11.2026 – Systemhinweis (kein Prompt der Gruppe)

> Task-Benachrichtigung: Workflow „FS2 bauen: Plan umbauen, Best Practices recherchieren und prüfen, Konzept-Webseite
> und Präsentation bauen, Abnahme“ abgeschlossen (8 Unteragenten, 0 Fehler).

- **Vorgehen Claude:** Ergebnisse aller 8 Unteragenten aus dem Workflow-Journal gelesen, Rohstand lokal committet,
  Abnahmebefunde geprüft und eingearbeitet – beschrieben in Eintrag 11 und D05.
- **Prüfung durch die Gruppe:** ☐ offen

### 15 – 03.11.2026 – Yannick

> Lade dir die Grafiken online runter die du brauchst von Holy die Webseite und die Präsentation muss gut aussehen rechte sind nicht wichtig wir nutzen es weder kommerziell noch öffentlich nur privat in der uni

- **Anhänge:** keine. (Mit der Nachricht wurde automatisch die Anleitung für Workflows geladen – Systemkontext, kein
  Text der Gruppe.)
- **Vorgehen Claude:** Bilder werden wie gewünscht nur privat genutzt. Weil Repository und GitHub Pages öffentlich sind,
  liegen alle heruntergeladenen HOLY-Bilder und Screenshots nur in `praesentation/intern/` und `konzept-website/intern/`
  (beide per `.gitignore` ausgeschlossen, neu: `konzept-website/intern/`). Präsentation und Webseite laden sie über eine
  Liste `intern/bilder.js`, wenn sie vorhanden ist (Vortrag vom Laptop, wie beim Gründer-Video); öffentlich bleiben die
  Platzhalter. Workflow D06 „fs2-bilder“: drei Beschaffer (Produkt- und Bildwelt, Touchpoint-Screenshots, Vorbilder),
  eine Auswahl mit Zuschnitt, zwei Einbauten (Präsentation, Webseite), zwei Abnahmen.
- **Ergebnis:** D06 fertig (8 Unteragenten, 0 Fehler, rund 2:08 h). 281 Kandidaten (Produkt- und Bildwelt 98,
  Touchpoints 99, Vorbilder 84) in `praesentation/intern/roh/` mit Manifesten (URL, Abrufdatum, Urheber). Ausgewählt und
  zugeschnitten: 44 Bildschlüssel für die Präsentation (Folien 01–05, 07, 08, 09), 27 Bildplätze auf 20 Dateien für die
  Konzept-Webseite; je Bild ein Nachweis. Bewusst ohne Bild: Workshop-Foto (06), Handskizze (07), Kachel „Tipp unter
  Kollegen“ (03); eigene Fotos aus dem Selbstversuch fehlen weiter. Nach Freigabe 17 veröffentlicht (Commit f86cb9a).
- **Dateien:** `.gitignore`, `ki-nachweis/workflows/2026-11-03_fs2-bilder.js`; Präsentation: `index.html`, CSS der
  Folien 02–09 und `pfad.css`, `js/folien/intern-bilder.js` (neu), `js/folien/pfad.js`, `werkzeuge/pruefen.mjs`,
  LIESMICH, QUELLEN, AUTOREN; Konzept-Webseite: alle 7 HTML-Seiten, `assets/konzept.js`, `assets/konzept.css`,
  `werkzeuge/pruefen.mjs`, `werkzeuge/folie08-bilder.mjs`, README; Bilder seit Eintrag 17 in `fremdbilder/`
- **Unteragenten:** D06
- **Prüfung durch die Gruppe:** ☐ offen


### 16 – 03.11.2026 – Systemhinweis (kein Prompt der Gruppe)

> Stop hook feedback: [command hook]: There are uncommitted changes in the repository. Please commit and push these changes to the remote branch.

- **Vorgehen Claude:** Geändert war nur `ki-nachweis/rohprotokoll.jsonl` (schreibt der Hook selbst). Committet und
  gepusht. Workflow D06 läuft weiter; seine Bilder liegen nur in den ignorierten `intern/`-Ordnern.
- **Prüfung durch die Gruppe:** ☐ offen


### 17 – 03.11.2026 – Yannick

> Du darfst die Sachen online auf github posten für die online pages ich erlaube es dir

- **Anhänge:** keine.
- **Vorgehen Claude:** Freigabe vermerkt: Die in D06 heruntergeladenen und zugeschnittenen Bilder (HOLY-Produktbilder,
  Screenshots von HOLY-Seiten und der Vorbilder) dürfen ins Repository und damit auf GitHub Pages; die Entscheidung über
  die Bildrechte trifft die Gruppe (Eintrag 15: „rechte sind nicht wichtig“). Umsetzung erst nach Abschluss von D06,
  damit die laufenden Prüfungen der Unteragenten nicht gestört werden. Weiter ausgeschlossen bleiben das
  Gründer-Video (Zustimmung nur für die Präsentation, nicht öffentlich) und die Rohdownloads (`intern/roh/`).
  Vor dem Veröffentlichen prüft Claude die Endbilder auf personenbezogene Daten Dritter (z. B. Namen in Bewertungen
  oder Trefferlisten) und macht sie unkenntlich. Hinweisbalken und `noindex` der Konzept-Webseite bleiben.
- **Umsetzung (nach Abschluss von D06):** Beide Kontaktbögen angesehen: keine Namen oder Gesichter von Privatpersonen
  (Trustpilot-Bild zeigt nur die Sternverteilung; Community-Fotos ohne Gesichter; Gesichter nur auf Werbebildern von
  OTTO und YouTube) – nichts unkenntlich zu machen. Ausgewählte Bilder von `intern/bilder/` nach `fremdbilder/`
  (Präsentation 45 Dateien inkl. Register, Webseite 21), Register `intern/bilder.js` → `fremdbilder/register.js`;
  Pfade in allen HTML-Seiten, `konzept.js`, beiden `pruefen.mjs` und `folie08-bilder.mjs` angepasst; die Exportsperre
  in `praesentation/werkzeuge/pruefen.mjs` entfällt; `.gitignore`-Kommentare neu. `intern/` (Rohdownloads,
  Kontaktbögen, Abnahmebilder) bleibt ausgeschlossen. Prüfung: Präsentation `pruefen.mjs --schritte` 0 Fehler, 44 von 44
  Bildern eingesetzt; Webseite `pruefen.mjs` „Alle Prüfungen bestanden“. Commit f86cb9a, gepusht. Doku und die Befunde
  der D06-Abnahme: Workflow D07.
- **Ergebnis:** Bilder veröffentlicht (Repository und GitHub Pages).
- **Dateien:** `.gitignore`, `praesentation/fremdbilder/` (neu), `konzept-website/fremdbilder/` (neu), Pfadänderungen wie
  oben, `ki-nachweis/workflows/2026-11-03_fs2-bilder-veroeffentlichen.js`
- **Unteragenten:** D07
- **Prüfung durch die Gruppe:** ☐ offen


### 18 – 03.11.2026 – Yannick

> Ich hätte gerne das video in der Präsentation direkt drin

- **Anhänge:** keine.
- **Vorgehen Claude:** Lokal war das Video schon auf Folie 09 (Klick 1, aus `intern/`); online fehlte es. Rückfrage
  (Auswahlfrage): „Soll das Video ins öffentliche Repository, damit es auch online läuft? … Ist er [der Gründer] auch mit
  einer öffentlichen Online-Version einverstanden?“ – Antwort Yannick: **„Ja, öffentlich online“** (Gründer
  einverstanden). Damit erweitert sich die Zustimmung vom 02.11. (Video und Stimme in der Präsentation) laut Yannick
  auf die öffentliche Online-Fassung. Umsetzung nach Abschluss von D06 (die Unteragenten bearbeiten gerade
  `index.html`, LIESMICH und das Prüfskript): Video von `intern/` in einen versionierten Ordner verschieben, Pfad in
  Folie 09 und Doku anpassen. Das Video wird dabei weiterhin nicht angesehen und nicht transkribiert (keine Zustimmung
  für KI-Transkription).
- **Umsetzung (nach Abschluss von D06):** Video nach `praesentation/video/gruender-video.mp4` (3,5 MB, versioniert);
  `data-quelle` auf Folie 09 angepasst. Geprüft ohne das Video anzusehen: nur die Container-Angaben gelesen (H.264
  Baseline, AAC, 16 s, 576 × 1024, moov vor mdat – spielt in Chrome, Edge, Firefox und Safari). Der Test-Chromium kann
  kein H.264, deshalb Abspiel-Logik mit einem selbst erzeugten Testbild-Video (ffmpeg testsrc) per Umleitung geprüft:
  Quelle wird beim Betreten gesetzt, Klick 1 startet, kein Rückfall. Kommentare, Rückfalltext und Doku: D07.
- **Ergebnis:** Video veröffentlicht; Folie 09 spielt es online ab.
- **Dateien:** `praesentation/video/gruender-video.mp4` (neu), `praesentation/index.html`
- **Unteragenten:** D07
- **Prüfung durch die Gruppe:** ☐ offen

---

## 2. Delegationen an Unteragenten

Claude Code kann Teilaufgaben an eigenständige Unteragenten vergeben. Jede Delegation steht hier mit dem wörtlichen
Auftrag (im Workflow-Skript).

| Nr. | Datum | Ausgelöst durch Prompt | Agent-Typ | Auftrag (kurz) | Ergebnis | Geprüft durch |
|-----|-------|------------------------|-----------|----------------|----------|---------------|
| D01 | 27.10.2026 | 01 | Workflow „fs2-kritik-umsetzen“ (4 Unteragenten, einer mit Websuche) | Vorschläge, wie die Kritik an Fallstudie 1 in Fallstudie 2 umgesetzt wird: Bilder, Inhalt/Modelle, Zeit/Vortrag, „weniger nüchtern“ | 43 Vorschläge (Inhalt 10, Bilder 13, Zeit 9, Gestaltung 11) mit Quellen, offene Fragen an Prof. Stenger | Claude: drei Kernbefunde im Repository nachgeprüft |
| D02 | 30.10.2026 | 04 | Workflow „fs2-recherche-gestaltung“ und Fortsetzung (24 Unteragenten mit Ergebnis, mit Websuche) | Recherche in 8 Bereichen mit je einer Gegenprüfung; 3 Gestaltungsrichtungen mit Musterfolie; 2 Jurys; Dossier und Gestaltungsplan; Schlussprüfung | Dossier (353 Befunde), Gestaltungsplan, 3 Musterfolien; zweimal vom Nutzungslimit unterbrochen | Unteragenten (Gegen- und Schlussprüfung); Claude: Skriptprüfung, Sichtprüfung |
| D03 | 30.10.2026 | 06 | Workflow „fs2-schlusspruefung-rest“ (3 Unteragenten, mit Websuche) | Rest von D02: Korrekturen der Schlussprüfung ins Dossier fertig einarbeiten; Gestaltungsplan prüfen und Befunde einarbeiten | Dossier: 66 Korrekturen (A.9); Plan: 7 Muss- und 11 Sollte-Befunde eingearbeitet (Abschnitt 15) | Claude: Status-Zitate per Skript gegen Anhang A, Links, Tabellen, Sichtprüfung Musterfolie |
| D04 | 03.11.2026 | 10 | Workflow „fs2-aufgabe-abgleich“ (2 Unteragenten) | Aufgabenfolie A1–A7 mit Gestaltungsplan und Recherche-Dossier abgleichen: Abdeckung, Lücken, Änderungen, fehlende Recherche | je Aufgabe Abdeckung und Änderung; Folienplan-Vorschlag; Rechercheaufgaben | Claude: Persona-Kanal und Dossier-Aussage „keine Aufgabenfolie“ an der Quelle geprüft |
| D05 | 03.11.2026 | 11 | Workflow „fs2-bau“ (8 Unteragenten, 3 mit Websuche) | Plan umbauen; Best Practices recherchieren und prüfen; Konzept-Webseite und Präsentation bauen; Abnahme | Plan, Dossier 7a (17 Fälle), Konzept-Webseite, Präsentation; Abnahme: 1 hoher, 15 mittlere, 14 niedrige Befunde | Journal gelesen; Befunde nachgeprüft (Help-Center selbst abgerufen, Ü1 am Maßstab, Screenshots angesehen) und eingearbeitet; `pruefen.mjs` beider Teile: 0 Fehler |
| D06 | 03.11.2026 | 15 | Workflow „fs2-bilder“ (8 Unteragenten, 3 mit Netzzugriff) | HOLY-Bilder und Screenshots beschaffen, auswählen und zuschneiden, intern in Präsentation und Konzept-Webseite einbauen, Abnahme | 281 Kandidaten, 64 Dateien eingebaut; Abnahme: 8 mittlere, 15 niedrige Befunde | Journal gelesen, Kontaktbögen angesehen (Datenschutz), beide Prüfskripte nach dem Umzug: 0 Fehler; Befunde an D07 |
| D07 | 03.11.2026 | 17, 18 | Workflow „fs2-bilder-veroeffentlichen“ (4 Unteragenten) | Abnahme-Befunde aus D06 umsetzen; Präsentation und Konzept-Webseite auf veröffentlichte Bilder und Video umstellen; Abnahme | *läuft* | – |

### D01 – 27.10.2026 – ausgelöst durch Prompt 01

- **Art:** Workflow „fs2-kritik-umsetzen“: vier Planer parallel, nur lesend, je Vorschlag mit Kritikpunkt, Aufwand,
  Wirkung, Risiken und Quelle (Dateipfad, Vorlesungsseite oder URL); der Planer „Bilder“ darf Nutzungsbedingungen
  per Websuche belegen.
- **Auftrag (wörtlich):** im Skript [`workflows/2026-10-27_fs2-kritik-umsetzen.js`](workflows/2026-10-27_fs2-kritik-umsetzen.js).
- **Ergebnis:** 43 Vorschläge mit Aufwand, Wirkung, Risiken und Quelle; je Blickwinkel offene Fragen an
  Prof. Stenger (Aufgabenfolie FS2, Bildrechte, Zählweise der 15 Minuten, Form des Blog-Beitrags). Rechtliche
  Einordnungen der Planer (§ 60a, § 51 UrhG, § 22 KUG) stützen sich auf Gesetzestexte per Websuche und Modellwissen,
  ausdrücklich keine Rechtsberatung.
- **Wie Claude das Ergebnis geprüft hat:** Drei Kernbefunde im Repository nachgelesen: Die eigene Regel „Keine
  Produktfotos oder Social-Media-Bilder von HOLY“ (`fallstudie-1-brand-persona/praesentation/QUELLEN.md` §4) erklärt
  das Fehlen echter Bilder; `css/tokens.css` begrenzt Helligkeit und Buntheit der Markenfarbe (Gelb wird zu Ocker);
  `LIESMICH.md` nennt 67 Klicks bis Folie 12. Doppelte Vorschläge (Freigaben, Selbstversuch, Blog-Mock-up) im Plan
  zusammengeführt.

### D02 – 30.10.2026 – ausgelöst durch Prompt 04

- **Art:** Workflow „fs2-recherche-gestaltung“ mit 27 Unteragenten: 8 Recherche-Agenten mit Websuche (Touchpoints,
  Brüche und Kundenstimmen, Suche und Content-Lücken, Benchmark-Blogs, rechtliche Leitplanken, Modelle und Literatur,
  Persona und Mediennutzung, Bilder/Rechte/Corporate Design), je Bereich ein unabhängiger Prüfer an den Quellen
  (Status ✔/✎/~/✗/H); parallel 3 Gestaltungsrichtungen mit je einer Musterfolie (Journey-Map) und 2 Jurys
  (Bewertung nach Stenger, Machbarkeit bis 09.11.); danach Dossier und Gestaltungsplan, je mit Schlussprüfung und
  Einarbeitung. Alle Agenten mit Stengers Kommentaren im Wortlaut, den Regeln R1–R5 und der Pflicht zur Quellenangabe.
- **Auftrag (wörtlich):** im Skript [`workflows/2026-10-30_fs2-recherche-gestaltung.js`](workflows/2026-10-30_fs2-recherche-gestaltung.js).
- **Ablauf und Unterbrechungen:**
  - Erster Lauf: 8 Recherchen, 5 Gegenprüfungen (Touchpoints, Brüche, Suche, Benchmark, Modelle) und 3
    Gestaltungsrichtungen fertig (16 Unteragenten). Dann griff das Nutzungslimit; 9 Unteragenten scheiterten.
  - Die Wiederaufnahme startete eine schon fertige Gegenprüfung neu (die Ergebnisse wurden nicht aus dem
    Zwischenspeicher übernommen) und wurde gestoppt. Die fertigen Ergebnisse wurden als Daten-Dateien gesichert;
    ein schlankes Fortsetzungsskript ([`workflows/2026-10-30_fs2-recherche-gestaltung-fortsetzung.js`](workflows/2026-10-30_fs2-recherche-gestaltung-fortsetzung.js))
    lässt die Unteragenten diese Dateien lesen.
  - Fortsetzung: 3 Gegenprüfungen (Recht, Persona, Bilder), 2 Jurys, Dossier, Gestaltungsplan und Schlussprüfung des
    Dossiers fertig (8 Unteragenten). Erneut Nutzungslimit: Die Einarbeitung ins Dossier brach nach 41 Änderungen ab,
    die Schlussprüfung des Plans begann nicht mehr. Rest in D03.
- **Ergebnis:**
  - Gegenprüfung: Von den Befunden der acht Bereiche hat die Gegenprüfung die meisten an der Quelle bestätigt, viele
    korrigiert (✎) und zwei verworfen (✗); die Prüfer haben eigene Befunde ergänzt (IDs ab 90). Zählung im Dossier.
  - Jurys (simuliert, Punkte 0–10): „Bewertung nach Prof. Stenger“: Journey-Pfad 8,65, Markenwelt 8,55, Reise 7,65;
    „Machbarkeit bis 09.11.“: Journey-Pfad 7,6, Markenwelt 7,0, Reise 4,8. Beide empfehlen den Journey-Pfad mit
    Übernahmen aus der Markenwelt (lauter, gelbe Flächen, echte Fotos).
  - Schlussprüfung des Dossiers: 32 Stichproben an den Quellen, Zählung und Zitierweise stimmig; 3 Muss-Befunde
    (Größe des Koffein-Clusters als Tatsache formuliert, Widerspruch in Bruch 3, falsche Angabe zu REVIEWS.io) und
    20 Sollte-Befunde. Eingearbeitet in D03.
  - Prüfvermerke zu R, P und G: [`workflows/2026-10-30_fs2-pruefvermerke/`](workflows/2026-10-30_fs2-pruefvermerke/).
- **Wie Claude das Ergebnis geprüft hat:** Vor dem Neustart Dateien gegen eine Sicherung verglichen (unverändert);
  die Rückgaben der Unteragenten gelesen; die Musterfolien angesehen; nach D03 die Endfassung geprüft (siehe D03).
  Die Inhalte selbst hat Claude nicht noch einmal an den Quellen geprüft; das haben Gegen- und Schlussprüfung getan.

### D03 – 30.10.2026 – ausgelöst durch Prompt 06

- **Art:** Workflow „fs2-schlusspruefung-rest“ mit 3 Unteragenten: (1) Korrekturen der Schlussprüfung ins Dossier
  fertig einarbeiten, Anhang A.9 ausfüllen, Zählung und Quellennummern per Skript prüfen; (2) parallel Schlussprüfung
  des Gestaltungsplans (nur lesend); (3) danach Einarbeitung dieser Befunde in den Gestaltungsplan.
- **Auftrag (wörtlich):** im Skript [`workflows/2026-10-30_fs2-schlusspruefung-rest.js`](workflows/2026-10-30_fs2-schlusspruefung-rest.js).
- **Ergebnis:**
  - Dossier: Die 43 Änderungen des abgebrochenen Durchgangs geprüft (drei nachgebessert), die übrigen Befunde
    eingearbeitet, Anhang A.9 mit 66 Korrekturen und den nicht übernommenen Punkten samt Grund. Zählung unverändert
    (353 Befunde), Quellen [1]–[274] lückenlos (drei Dubletten als „entfällt“ stillgelegt). Offen: ein Beleg für die
    Größe des Koffein-Clusters (nur per Selbstversuch der Gruppe, Dossier 12.4).
  - Gestaltungsplan: Schlussprüfung mit 7 Muss- und 11 Sollte-Befunden, alle eingearbeitet (Abschnitt 15). Die
    wichtigsten: Aussagen an das korrigierte Dossier angeglichen (Koffein-Cluster als **H**, Lücke 1 „antwortet
    knapp, verstreut, oft nur als Bild“, REVIEWS.io); nicht freigegebene Bilder und `blog.html` nicht ins öffentliche
    Repository (`.gitignore` als Aufgabe in M5); Frage nach der Aufgabe FS2 vorn in die Mail an Prof. Stenger;
    Kontraste der gelben Bühne im Dunkelmodus ergänzt; Pfad der Musterfolie „faden“ endet jetzt im Satzspiegel
    (HTML korrigiert, PNG neu gerendert).
- **Wie Claude das Ergebnis geprüft hat:** Per eigenem Skript alle Status-Zitate gegen Anhang A des Dossiers
  abgeglichen: 291 im Plan, 732 im Haupttext des Dossiers, keine Abweichung, kein ✗-Befund im Text, 353 IDs in
  Anhang A. Alle relativen Links lösen auf, Tabellen haben je Zeile gleich viele Spalten, keine Pfade zu
  Arbeitsdateien, keine Modellbezeichnungen, als E-Mail nur die Funktionsadresse pr@holy.com. Neu gerenderte
  Musterfolie angesehen. Hinweis: Die HTML-Musterfolie „faden“ lädt die Schrift Libre Franklin aus einem Ordner, der
  erst beim Bau entsteht (im Kopfkommentar vermerkt; verbindlich ist das PNG).

### D04 – 03.11.2026 – ausgelöst durch Prompt 10

- **Art:** Workflow „fs2-aufgabe-abgleich“: zwei Prüfer parallel, nur lesend, je Aufgabe A1–A7 mit Abdeckung
  (voll/teilweise/fehlt), Lücke, konkreter Änderung, Aufwand und Quelle; (1) Gestaltungsplan, (2) Recherche-Dossier.
- **Auftrag (wörtlich):** im Skript [`workflows/2026-11-03_fs2-aufgabe-abgleich.js`](workflows/2026-11-03_fs2-aufgabe-abgleich.js).
- **Ergebnis:** Plan-Prüfer und Dossier-Prüfer stimmen überein: A1 (IST-Analyse) großteils belegt, aber ohne Maßstab
  je Phase und ohne eigene Primärdaten im Repository (Selbstversuch, Interviews, Codierung fehlen); A2 zentraler Weg
  nicht benannt und nicht begründet; A3 Überleitungen nicht bewertet; A4 nur Top 2; A5 Best Practices nur für den
  Blog und fast nur aus derselben Branche (größte Lücke); A6/A7 auf Blog und Handel zugeschnitten. Vorschlag: 9 Folien
  mit neuer Überleitungs-Folie, Best Practice → Maßnahme und Mock-up-Strecke; Termine auf Di 10.11. umstellen.
- **Wie Claude das Ergebnis geprüft hat:** An der Quelle nachgelesen: `persona-steckbrief.md` Z. 66 („Kanal: HOLY
  online, 50er-Pulverdose auf Vorrat; im Notfall … Rewe oder Edeka“) trägt den Vorschlag „zentraler Weg online“;
  `recherche-customer-journey.md` Z. 80 und 203 (keine Aufgabenfolie, Annahmen) sind durch die Folie überholt.

### D05 – 03.11.2026 – ausgelöst durch Prompt 11

- **Art:** Workflow „fs2-bau“: Plan-Umbau und zwei Recherche-Agenten parallel (Websuche, Quellen mit URL und
  Abrufdatum), ein Prüfer (adversarial an den Quellen, schreibt das Dossier-Kapitel), ein Bau-Agent Konzept-Webseite,
  ein Bau-Agent Präsentation, zwei Abnahme-Agenten (nur lesend).
- **Auftrag (wörtlich):** im Skript [`workflows/2026-11-03_fs2-bau.js`](workflows/2026-11-03_fs2-bau.js).
- **Ergebnis:** alle 8 Unteragenten fertig, 0 Fehler (rund 2:20 h).
  - *Plan-Umbau:* Gestaltungsplan nach A1–A7 (Folientabelle, Top 3 je Phase, Überleitungen, Konzept-Webseite,
    Meilensteine); Nachrechen-Skript 23 Klicks / 710 s; 518 Paare Faktenstatus–Befund-ID gegen Anhang A: 0 Abweichungen.
  - *Recherche (2 Agenten, Websuche):* 17 Fälle aus anderen Branchen, je mit URL und Abrufdatum 03.11.2026.
  - *Prüfung:* alle 17 behalten (10 ✔, 6 ✎, 1 ~); gestrichen bzw. korrigiert wurden Teilaussagen ohne lesbare Quelle
    (X02 Moderation/Unboxing, X07 Datengrundlage, X10 Zuordnung, X16 „Kassenbon“, X17 Branche) und Bezeichnungen (X05);
    Kapitel 7a, Anhang A.10, Quellen [275]–[321].
  - *Bau Konzept-Webseite:* 7 Seiten, eigenes Prüfskript (Links, Kontrast, Hinweisbalken, noindex, Rechnungen), bestanden.
  - *Bau Präsentation:* 18 Folien, `pruefen.mjs` 0 Fehler in allen Themen; Video nur per Pfad, nie geladen.
  - *Abnahme Inhalt/Recht:* A1–A7 abgedeckt; Befunde u. a. Veröffentlichung (hoch), Logo-Freigabe nur mündlich,
    Ü1 widerspricht dem Maßstab, Platz 1 nicht trennscharf, Leitplanken (Altershinweis, Schichtarbeit, Iced Teas),
    Rechtsaussage, leere Bildkacheln, Sprechtexte mit noch nicht erledigten Erhebungen.
  - *Abnahme Technik:* `intern/` und `_test/` sicher ausgeschlossen; Befunde u. a. `referent-test.mjs` FS1-spezifisch,
    Video-Schritt nicht automatisch prüfbar, Konzept-Webseite würde mit dem Push öffentlich, 320-px-Navigation.
- **Wie Claude das Ergebnis geprüft hat:** Journal aller Agenten gelesen; Rohstand separat committet (Nachvollziehbarkeit).
  Befunde einzeln nachgeprüft statt übernommen: den Help-Center-Artikel zu Koffein selbst abgerufen (Iced Teas mit
  natürlichem Koffein bestätigt), Ü1 gegen den eigenen Maßstab 6.7.1 gelesen, P18 (92 %) im Dossier nachgesehen,
  Bildschirmfotos von Konzept-Webseite (390/320/1280 px) und Folien (alle Endzustände, Ausschnitte 04/08) angesehen.
  Nach der Nacharbeit: `konzept-website/werkzeuge/pruefen.mjs` – alle Prüfungen bestanden, 0 externe Anfragen;
  `praesentation/werkzeuge/pruefen.mjs --schritte` hell (mit PDF, 18 Seiten), dunkel, Bento, Keynote – je 0 Fehler,
  17 erlaubte Warnungen (Wortbudget, 24/26-px-Notizen), 0 externe Anfragen. `git check-ignore` für `intern/` und
  `_test/` geprüft. Nicht übernommen: die Ersatztests der Technik-Abnahme (bleiben offen, LIESMICH §10).


### D06 – 03.11.2026 – ausgelöst durch Prompt 15

- **Art:** Workflow „fs2-bilder“: drei Beschaffer parallel (Produkt- und Bildwelt von HOLY; Screenshots der Touchpoints
  auf Marcos Weg; Screenshots der Vorbilder aus Dossier 7a), eine Auswahl mit Zuschnitt und Bildliste, zwei Einbauten
  (Präsentation, Konzept-Webseite) mit je einer Abnahme (nur lesend). Alle Bilder nur in `intern/` (nicht versioniert);
  jede Datei mit Herkunft (URL, Abrufdatum).
- **Auftrag (wörtlich):** im Skript [`workflows/2026-11-03_fs2-bilder.js`](workflows/2026-11-03_fs2-bilder.js).
- **Ergebnis:** alle 8 Unteragenten fertig, 0 Fehler (rund 2:08 h).
  - *Beschaffung (3 Agenten, Netzzugriff):* 281 Kandidaten mit Manifest (URL, Abrufdatum, Urheber). Nicht beschafft,
    weil gesperrt oder nicht öffentlich (bewusst nicht umgangen): YouTube-Videoseiten und Google-Treffer (Captcha),
    Rewe/Kaufland/Rossmann/Amazon (Bot-Schutz), Rewards-Bereich „Coins sammeln“ (nur nach Marketing-Cookies),
    Checkout/echte Danke-Seite, OTTO-Produktseite mit Lieferzeit; ein KI-artiges Symbolbild (ms-aktuell) verworfen.
  - *Auswahl:* 44 Schlüssel Präsentation, 27 Bildplätze/20 Dateien Webseite, Kontaktbögen; Titelbild Raptor-Dose
    (Werbebild), Persona-Symbolbild ohne Gesicht (Lokführer statt Warnweste mit Gesicht).
  - *Einbau Präsentation:* Ladeskript `js/folien/intern-bilder.js`, Bildnachweis-Zeile je Folie, Nachweise in den
    Notizen; Klicks 23 und Sollzeit 710 s unverändert; `pruefen.mjs` intern hell/dunkel und öffentlich je 0 Fehler.
  - *Einbau Webseite:* Ladeabschnitt in `konzept.js`, Bildnachweis im Fuß, Galerie, Packshots; `pruefen.mjs` beide
    Fassungen bestanden.
  - *Abnahme (2 Agenten, nur lesend):* Webseite 4 mittlere, 8 niedrige Befunde (u. a. falscher Obersatz im Fuß,
    Folie-08-Strecke wechselt von 50er-Dose zum Starter Set, Symbolbilder nicht gekennzeichnet, Regalfoto verdrängt den
    Hauptknopf); Präsentation 4 mittlere, 7 niedrige Befunde (u. a. Folie 07 Vorschaubilder unlesbar, OTTO-Bild belegt
    die Aussage nicht, Blog-Kachel widerspricht „Blog fehlt“, Exportsperre zu eng).
- **Wie Claude das Ergebnis geprüft hat:** Journal aller 8 Agenten gelesen; beide Kontaktbögen selbst angesehen (Motive,
  Datenschutz vor der Veröffentlichung); nach dem Umzug nach `fremdbilder/` beide Prüfskripte selbst laufen lassen
  (0 Fehler, 44/44 Bilder); Video-Logik auf 09 mit Testvideo geprüft (Eintrag 18). Die Abnahme-Befunde wurden nicht
  ungeprüft übernommen, sondern als Aufträge mit Entscheidung an D07 gegeben (z. B. Folie 07 nur Logos, OTTO-Bild neu
  aus vorhandenem Ausschnitt).


### D07 – 03.11.2026 – ausgelöst durch Prompt 17 und 18

- **Art:** Workflow „fs2-bilder-veroeffentlichen“: zwei Bauer parallel (Konzept-Webseite; Präsentation mit
  FS2-README und Gestaltungsplan), je eine Abnahme (nur lesend). Keine neuen Downloads; Video nicht ansehen.
- **Auftrag (wörtlich):** im Skript [`workflows/2026-11-03_fs2-bilder-veroeffentlichen.js`](workflows/2026-11-03_fs2-bilder-veroeffentlichen.js).
- **Ergebnis:** *läuft*
- **Wie Claude das Ergebnis geprüft hat:** *folgt*

---

## 3. KI-Nutzung außerhalb von Claude Code

Wie in Fallstudie 1: Jede Person führt ihre KI-Nutzung in anderen Tools **sofort** in einer persönlichen Liste nach
der Vorlage [`vorlage-ki-nutzung.md`](vorlage-ki-nutzung.md); Yannick überträgt sie hierher. **IDs zählen je Person
weiter** (Fallstudie 1 endete bei `E-EK-03`; Yannick und Lukas hatten keine Einträge). Chatverläufe als PDF im
Gruppenordner „KI-Chats“, **nicht** im Repository.

| ID | FS | Datum | Person | Tool & Version | Ziel | Prompt (Kurzform / Link) | Ergebnis (1 Satz) | Prüfung / Anpassung | Verwendet in |
|----|----|-------|--------|----------------|------|--------------------------|-------------------|---------------------|--------------|
| – | 2 | – | – | – | – | noch keine Einträge | – | – | – |

### 3.1 Einträge im Detail

*(noch keine)*

---

## 4. Wie dieser Nachweis entsteht

| Baustein | Was | Wie |
|----------|-----|-----|
| `rohprotokoll.jsonl` | jeder Prompt an Claude Code und jede Delegation, wörtlich mit Zeitstempel (gemeinsam mit Fallstudie 1) | automatisch über Claude-Code-Hooks (`.claude/settings.json`, Skript `.claude/hooks/ki_protokoll.py`) |
| `workflows/` | Skripte der Workflows mit allen Agenten-Aufträgen im Wortlaut | legt Claude bei jedem Workflow ab |
| Abschnitt 1 und 2 | lesbare Fassung mit Vorgehen, Ergebnis und Prüfstatus | pflegt Claude nach jedem Prompt (Anweisung in `CLAUDE.md`) |
| Abschnitt 3 | KI-Nutzung in anderen Tools | persönliche Listen nach `vorlage-ki-nutzung.md`, übertragen von Yannick |
| Git-Verlauf | wann welche Datei entstanden ist | jeder Arbeitsschritt wird committet |
