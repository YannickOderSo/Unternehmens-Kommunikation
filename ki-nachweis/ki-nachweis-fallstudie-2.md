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
| 19 | 03.11.2026 | Yannick | Video läuft; die Konzept-Webseite soll wie eine richtige Webseite aussehen, nicht wie ein Konzept | D09 (Workflow) | Alle 7 Seiten im Shop-Look (Sieger „Kampagne“); Hinweisleiste, `noindex`, keine Formulare, Kennzeichnung bleiben; Folie 08 mit neuen Bildschirmfotos; Prüfskripte 0 Fehler |
| 20 | 04.11.2026 | Systemhinweis (kein Prompt der Gruppe) | Meldung: Workflow D09 „fs2-webseite-echt“ abgeschlossen | – | Ergebnisse gelesen und selbst geprüft, Abschluss in Eintrag 19 und D09 |
| 21 | 04.11.2026 | Systemhinweis (kein Prompt der Gruppe) | Stop-Hook: uncommittete Änderungen (nur Rohprotokoll) | – | Rohprotokoll committet und gepusht |
| 22 | 04.11.2026 | Yannick | D09 passt; als Nächstes ein kleines, realistisch wirkendes Werbevideo für HOLY im Stil des Konzepts, Stimme über ElevenLabs | D10 (Workflow) | Spot „Zahlen statt Versprechen“ (26,8 s, 9:16, Stimme „simpleact-design-b“, Musik und Geräusche von ElevenLabs) in `werbevideo/`; Pflichtkennzeichnung durchgehend |
| 23 | 04.11.2026 | Systemhinweis (kein Prompt der Gruppe) | Container-Neustart: Workflow D10 abgebrochen; später Meldung „D10 abgeschlossen“ | – | D10 mit gespeicherten Zwischenergebnissen fortgesetzt; Ergebnis geprüft (Eintrag 22) |
| 24 | 04.11.2026 | Yannick | Spot ist langweilig, nur Fakten, keine Emotionen; Zielgruppe ansprechen, aufregend; an kurzen Spots großer Firmen orientieren | D11 (Workflow) | Neuer Spot „Mein Moment.“ (24,5 s): Marcos Feierabend-Ritual mit Rückblende, Countdown, Beat-Drop beim Schütteln und Squad; Vorfassung in `werbevideo/vorfassung-d10/` |
| 25 | 05.11.2026 | Yannick | Auf der HOLY-Startseite eine Weiterleitung zu Fallstudie 2 einführen | – | Startseite `index.html`: Fallstudie 2 als erste Karte mit Präsentation, Konzept-Webseite und Werbespot; Fallstudie 1 darunter |
| 26 | 08.11.2026 | Yannick | Präsentation finalisieren (Rückfragen: ohne eigene Erhebung, Werbespot auf Folie 08, Redeskript als PDF) | D12 (Workflow) | Platzhalter ehrlich ersetzt (B1 Methodenfolie, B5 Kundenstimmen aus Portalen), Spot-Knopf auf 08, Redeskript MD + PDF (12 Seiten); 0 Fehler |
| 27 | 08.11.2026 | Yannick | Hinweis: das Werbevideo kann auch eingebaut werden | – | bereits Teil von D12 (Knopf „Spot ansehen ▶“ auf Folie 08); keine zusätzliche Delegation |
| 28 | 08.11.2026 | Yannick | Mit mehr Agenten schneller umsetzen | D12 (Fortsetzung) | Ablauf nach dem Umbau parallelisiert: Redeskript und 4 Abnahmen gleichzeitig, dann Nacharbeit und Redeskript-Prüfung gleichzeitig |
| 29 | 08.11.2026 | Systemhinweis (kein Prompt der Gruppe) | Stop-Hook: uncommittete Änderungen (Zwischenstand von D12 in der Präsentation) | – | Zwischenstand auf Sicherungs-Branch `zwischenstand-d12` gepusht; master erst nach Abschluss von D12 |
| 30 | 08.11.2026 | Yannick | Bei einem Bild steht „Antwort fehlt“; Überlegung, ob man mehr Sachen optisch besser darstellen kann | D13, D14 (Workflows) | Alle Entwürfe übernommen (Linien-Symbole erlaubt): 04 leere, durchgestrichene Browserseite „keine Antwortseite“ + „bricht“; 02 Steckbrief/Verben/Ring; 03 Kästchen + Signalkreise; 05 Urteilszeichen + Lücke an Ü2; 06 Ränge; 07 Brücke statt Tabelle; 09 Messpunkte am Pfad; Prüfläufe 0 Fehler, 16 Warnungen |
| 31 | 08.11.2026 | Systemhinweis (kein Prompt der Gruppe) | Stop-Hook: uncommittete Änderungen (eingespielte D13-Entwürfe, während D14 prüft) | – | Zwischenstand auf Sicherungs-Branch `zwischenstand-d14` gepusht; master bekommt den geprüften Stand nach D14 |
| 32 | 08.11.2026 | Yannick | Braucht auch das neue Skript | – | Redeskript (MD + 12-seitiges PDF) neu erzeugt: 7 Hinweise zu den neuen Folien ergänzt bzw. angepasst (02, 03, 04, 05, 07, 09), u. a. „Werbung ist gekennzeichnet“ auf 07 immer sagen; Sprechtext, Zeiten, Klicks unverändert |
| 33 | 10.11.2026 | Yannick (mit der Gruppe) | Reflexionsbogen ausfüllen; die Gruppe sitzt zusammen und will Fragen zum Beantworten; dieses Mal nur ein Bogen | – | Fragen an die Gruppe im Chat, gegliedert nach den sechs Fragen der Vorlage, mit Erinnerungshilfen aus dem Nachweis; Entwurf folgt nach den Antworten |
| 34 | 10.11.2026 | Gruppe (über Yannicks Sitzung) | Antworten der Gruppe auf die 14 Fragen zum Reflexionsbogen | – | Entwurf des gemeinsamen Bogens „Team HOLY“ aus den Antworten, als PDF im Chat; nicht im Repository (Antwort 14) |
| 35 | 10.11.2026 | Gruppe (über Yannicks Sitzung) | Rückmeldung zum Entwurf: 5 Phasen statt AIDA; Elias' Erfahrung, keine Erhebung; Ergänzungen übernehmen; „übernommen“ stimmt | – | Endfassung des Bogens als PDF im Chat (Frage 2 auf die fünf Phasen umgestellt); Zusatzsätze zu Frage 2/5 und KI-Hinweis ohne Antwort, daher nicht eingefügt |
| 36 | 10.11.2026 | Gruppe (über Yannicks Sitzung) | Text kritischer zu Schwächen schreiben und etwas umformulieren | – | Fassung 3 des Bogens (456 Wörter, 1 Seite) als PDF im Chat: Schwächen zu Daten, Persona, Recht, KI-Prüfung, Rollen; neue Aussagen zur Prüfung im Chat markiert |
| 37 | 10.11.2026 | Yannick | Webseite runternehmen, die Präsentation ist fertig; eine HTML-Webseite zum Herunterladen für den HOLY-Gründer erstellen | D15 (Workflow) | Konzept-Webseite aus master entfernt (GitHub Pages: 404; Startseite, Folie 08 ohne Live-Demo, B8, Doku angepasst; Prüflauf 0 Fehler); ZIP für den Gründer (1,6 MB) nach den Antworten der Gruppe angepasst (neutraler Bildvermerk, „von der Gruppe geprüft“, Wertungen als Einschätzung) und offline geprüft; als Datei an die Gruppe |
| 38 | 10.11.2026 | Systemhinweis (kein Prompt der Gruppe) | Stop-Hook: uncommittete Änderungen (KI-Nachweis; D15 ändert gerade das Repository) | – | Nur der KI-Nachweis committet und gepusht; die Abschaltung der Konzept-Webseite folgt geprüft nach D15 |

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
### 19 – 03.11.2026 – Yannick

> Das Video läuft nur die Seite soll schon wie eine richtige Webseite aussehen das sieht eher wie ein konzept aus.

- **Anhänge:** keine.
- **Vorgehen Claude:** Rückmeldung zum Video vermerkt (läuft online). Die Konzept-Webseite wird so umgestaltet, dass sie
  wie ein echter HOLY-Shop wirkt (Formensprache von HOLYs Shop als Referenz: Ankündigungsleiste, Kopfzeile mit
  Navigation, Sortenfarbe, große Bildkarten, Packungs-Karten). Bleiben aus Sicherheits- und Ehrlichkeitsgründen, weil die
  Seite öffentlich ist und HOLYs Marke trägt: der Hinweistext „Studentisches Konzept … keine Bestellung möglich“
  (künftig als schmale Ankündigungsleiste), `noindex`, keine Formulare, keine externen Anfragen, Kennzeichnung
  „Werbung“ und „Symbolbild“; Erklärtexte, Skizzen und „Beispielwert“-Etiketten wandern in den Präsentationsmodus.
  Workflow D09: drei Gestaltungsrichtungen (HOLY-nah, Shop-Standard, Kampagne) in getrennten Kopien, zwei Jurys,
  Umbau aller 7 Seiten samt Prüfskript und Folie-08-Bildern, zwei Abnahmen, Nacharbeit.
- **Ergebnis (04.11.2026):** Sieger nach Jury-Punkten „Kampagne“ (97; HOLY-nah 95, Shop-Standard 95). Alle 7 Seiten
  haben jetzt einheitlichen Shop-Kopf (Menü, Wortmarke, Konto, Warenkorb), Sortenfarben (Pink, Lila), Packungs-Karten,
  Bewertungsband, Warenkorb und Bestellbestätigung wie im Shop, Kundenkonto für den Squad, Händlerfinder als
  Marktkarten. Weg aus der normalen Ansicht: „KONZEPT“ unter der Wortmarke, „(Konzept)“ in Knöpfen, Skizzen,
  Erklärsätze, „Beispielwert“-Etiketten, Befund-IDs und Abrufstempel im Text, Bildunterschriften – sie stehen im
  Präsentationsmodus (`?anmerkungen=1`) bzw. gesammelt im Fuß. Immer sichtbar bleiben: Hinweisleiste im Wortlaut (jetzt
  gelbe Ankündigungsleiste), „Werbung“ am Creator-Code, „Symbolbild“ am Bild, „Platzhalter“ an den Bewertungen,
  „Vorschlag der Gruppe“ an jeder Garantie, Fuß mit Kennung, Bildnachweisen, Rechtestatus und Beispielwert-Satz;
  `noindex`, keine Formulare, keine externen Anfragen. Neue Schrift Inter (lokal, OFL, aus der Präsentation kopiert).
  Bilder: keine neuen Downloads; fünf Fremdbilder in höherer Auflösung neu aus vorhandenen Rohdateien exportiert, fünf
  neue Registereinträge auf vorhandene Dateien. Folie 08: neue Bildschirmfotos (Danke-Seite jetzt von oben mit
  Squad-Karte), Streifen gegen angeschnittene Hinweisleiste, Notizen nachgezogen. Zur Entscheidung der Gruppe:
  Beispielwert-Etiketten nur im Präsentationsmodus (Abweichung, vermerkt in `gestaltungsplan.md` 7.3), graue
  Skelettzeilen statt Bewertungstexten, Bestellnummer „Nr. 100248“, Standardpackung der Produktseite (weiter Starter
  Set, Links auf die 50er-Dose), neue Shop-Texte, gelbe statt schwarzer Hinweisleiste.
- **Herkunft:** Gestaltung und Texte aus dem Modellwissen; alle Zahlen standen schon auf der Seite bzw. im Dossier
  (Befund-IDs im Code); keine Websuche, keine neuen Werbeaussagen.
- **Dateien:** `fallstudie-2-customer-journey/konzept-website/` (alle 7 Seiten, `assets/konzept.css`, `assets/konzept.js`,
  `fremdbilder/register.js` und 5 Bilder, `schriften/` mit Inter und Lizenz, `werkzeuge/pruefen.mjs`,
  `werkzeuge/folie08-bilder.mjs`, `README.md`, `_vorschau/`), `fallstudie-2-customer-journey/gestaltungsplan.md` (7.3),
  `fallstudie-2-customer-journey/praesentation/` (`bilder/` und `fremdbilder/konzept-0n-….png`,
  `fremdbilder/register.js`, `index.html` Folie 08, `css/folien/08-mockups.css`, `QUELLEN.md`, `AUTOREN.md` §13),
  `ki-nachweis/workflows/2026-11-03_fs2-webseite-echt.js`
- **Unteragenten:** D09
- **Prüfung durch die Gruppe:** ☐ offen

### 20 – 04.11.2026 – Systemhinweis (kein Prompt der Gruppe)

> Meldung (Hintergrundaufgabe): Workflow „Konzept-Webseite so umgestalten, dass sie wie ein echter HOLY-Shop aussieht:
> 3 Entwürfe, Jury, Umbau aller 7 Seiten, Abnahme, Nacharbeit“ abgeschlossen.

- **Vorgehen Claude:** Journal und Rückgaben aller 9 Unteragenten gelesen, beide Prüfskripte selbst ausgeführt, Seiten
  und Folie 08 angesehen, alt-Texte der Folie-08-Bilder eingetragen, committet, gepusht und GitHub Pages geprüft
  (Inter-Schrift, Register und neue Seiten live). Einzelheiten in Eintrag 19 und D09.
- **Prüfung durch die Gruppe:** ☐ offen

### 21 – 04.11.2026 – Systemhinweis (kein Prompt der Gruppe)

> Stop hook feedback: [command hook]: There are uncommitted changes in the repository. Please commit and push these changes to the remote branch.

- **Vorgehen Claude:** Geändert war nur `ki-nachweis/rohprotokoll.jsonl` (schreibt der Hook selbst). Committet und
  gepusht.
- **Prüfung durch die Gruppe:** ☐ offen

### 22 – 04.11.2026 – Yannick

> Ja das passt als nächstes müsste ich das du ein kleines Werbevideo machst für Holy aber im Style unserer Konzeptes. Für die Stimme habe ich ein API Key von Elevenlabs in der Cloudsitzung hinterlegt. Mache ein kleines Video welches realistisch aussieht und den Geist des Konzeptes wiedergibt

- **Anhänge:** keine.
- **Vorgehen Claude:** Freigabe von D09 vermerkt. ElevenLabs ist über die Sitzung erreichbar (der Schlüssel wird vom
  Netzwerk-Proxy eingesetzt und war für Claude nicht sichtbar). Festgelegt: Hochformat 9:16 (wie ein Creator-Short,
  passend zu Ü1), etwa 20–30 Sekunden, deutsche Sprecherstimme aus den vorgefertigten bzw. synthetisch erzeugten
  Stimmen von ElevenLabs – **keine geklonte Stimme** und nichts aus der Videobotschaft des Gründers. Bild aus den
  veröffentlichten HOLY-Produktbildern und echten Bildschirmaufnahmen der Konzept-Webseite. Im Video bleiben sichtbar:
  „Studentisches Konzept … keine Werbung der HOLY Softdrinks GmbH“, „Stimme KI-generiert“, Altershinweis; Aussagen nur
  mit Befund-ID. Workflow D10: drei Drehbücher, Jury, Produktion, zwei Abnahmen, Nacharbeit.
- **Ergebnis:** Werbespot „Zahlen statt Versprechen“ (Sieger der Jury), 26,8 s, 1080 × 1920, H.264/AAC, 10,4 MB,
  −14 LUFS: selbstironischer Einstieg („Wir könnten dir jetzt viel versprechen … Machen wir nicht. Hier sind Zahlen.“),
  vier Zahlenkarten mit HOLY-Produktfotos (7 g + 500 ml, 160 mg Koffein je Portion, 0,1 g Zucker pro 100 ml,
  0,80 € je Portion), Handy-Strecke mit echten Aufnahmen der Konzept-Webseite (Code ist schon drin, Koffein-Check
  „eine Portion pro Tag“, Squad mit einem Klick), Endkarte „Zahlen statt Versprechen.“. Durchgehend die Zeile
  „Studentisches Konzept (HS Kaiserslautern) · keine Werbung der HOLY Softdrinks GmbH · Stimme KI-generiert“, Altershinweis
  und voller Hinweis auf der Endkarte, „Werbung“ am Platzhalter-Code, Beispielwerte gekennzeichnet; Untertitel (VTT).
  Stimme: synthetisch gestaltete ElevenLabs-Stimme „simpleact-design-b“ (keine Klonstimme); Musik und Geräusche ebenfalls
  von ElevenLabs. 459 Zeichen Sprachausgabe verbraucht. Offene Punkte für die Gruppe in `werbevideo/README.md` §8 (u. a.
  „Wir“-Stimme als HOLY-Absender, 0,1 g Zucker als Heldenzahl, Konzept-Funktionen gesprochen wie Tatsachen).
- **Herkunft:** Aussagen mit Befund-IDs S92, R06, R14, B09, T22, R98, B12, R19, R20, R25, T32, B05, S27 (Belegliste in
  `werbevideo/drehbuch.md`); Gestaltung, Schnitt, Ton und Texte aus dem Modellwissen; keine Websuche, keine Downloads.
- **Dateien:** `fallstudie-2-customer-journey/werbevideo/` (`holy-werbespot.mp4`, `holy-werbespot-poster.jpg`,
  `holy-werbespot.de.vtt`, `drehbuch.md`, `README.md`, `werkzeuge/`), `.gitignore` (`werbevideo/intern/`),
  `ki-nachweis/workflows/2026-11-04_fs2-werbevideo.js`
- **Unteragenten:** D10
- **Prüfung durch die Gruppe:** ☐ offen

### 24 – 04.11.2026 – Yannick

> Der Spot ist langweilig gestaltet, nur fakten keine Emotionen. Wie wird dadurch die Zielgruppe angesprochen. Es nicht aufregend. Orientiere dich an anderen größeren Firmen wie die solche Kurzen Spots machen

- **Anhänge:** keine.
- **Vorgehen Claude:** Kritik angenommen: Der Spot D10 setzt die Konzeptidee „Zahlen statt Versprechen“ zu wörtlich um und
  spricht die Zielgruppe (Persona Marco, 28, und HOLYs junge Community) nicht emotional an. Neuer Workflow D11: zuerst
  Recherche mit Websuche (wie große Marken kurze Spots bauen – Aufhänger in den ersten Sekunden, Geschichte, Gefühl,
  Musik und Schnitt; was die Zielgruppe anspricht), dann drei emotionale Konzepte mit Storyboard und Hörprobe, Jury,
  Produktion, zwei Abnahmen, Nacharbeit. Belegte Zahlen höchstens als Nebensache; weiter keine gesundheits- oder
  leistungsbezogenen Versprechen, Pflichtkennzeichnung bleibt, keine Klonstimme. Zusätzlich erlaubt: HOLYs eigene
  Lifestyle-Werbefotos mit Models (nicht Gründer, Team, Creator oder Community-Mitglieder). Der Spot D10 bleibt als
  Vorfassung erhalten.
- **Ergebnis:** Spot „Mein Moment.“ (24,5 s, 9:16, 13,5 MB, −14,2 LUFS). Ablauf: Freitag 14:06, das Sachet reißt
  („RRRIPP!“, „Feierabend!“), Freeze und Rückspulen; Rückblenden Montag (Code war schon drin, CREATOR10 mit „Werbung“),
  Dienstag (fiktiver Chat: „160 mg je Portion. Steht aufm Etikett.“ – „Nerd.“), Donnerstag (Paket da, „Plot-Twist? Gab's
  keinen.“); „Und jetzt …“, Countdown 3-2-1, Beat-Drop beim Schütteln („TSCHK!“) mit sechs Schnitten im Takt, „Mmh!
  Raspberry Raptor“, Squad-Nachricht „Samstag, 15 Uhr?“, „Willkommen im Squad, Marco.“, Endkarte „HOLY. Mein Moment. Und
  deiner?“ mit Altershinweis und vollem Hinweis. Pflichtzeile durchgehend, ergänzt um „Chats und Szenen fiktiv“.
  Stimme: neu per Voice Design gestaltete synthetische Stimme „d11-ritual-design“ (im ElevenLabs-Konto angelegt, keine
  Klonung), Musik und Geräusche von ElevenLabs; 861 Zeichen Sprache. Bilder: HOLY-Produkt- und Lifestyle-Werbefotos
  (u. a. ein Model beim Trinken), Squad-Grafiken, Aufnahme der Konzept-Webseite. Der Spot D10 liegt als Vorfassung in
  `werbevideo/vorfassung-d10/`. Offene Punkte für die Gruppe in `werbevideo/README.md` §8.
- **Herkunft:** Recherche mit Websuche (65 Quellen, Abruf 04.11.2026, u. a. YouTube ABCD, TikTok Creative Best
  Practices, HORIZONT zur HOLY-Kampagne „Mach's dir wie nie zuvor“, Duolingo, Coca-Cola, Nike; Liste in
  `werbevideo/drehbuch.md` §9); Aussagen S92, R19, R25, T32, T35; Geschmack „Himbeere × Yuzu“ laut Packungsaufdruck;
  Gestaltung, Texte, Schnitt und Ton aus dem Modellwissen.
- **Dateien:** `fallstudie-2-customer-journey/werbevideo/` (neuer Spot, Poster, Untertitel, `drehbuch.md`, `README.md`,
  `werkzeuge/`; `vorfassung-d10/`), `ki-nachweis/workflows/2026-11-04_fs2-werbevideo-emotion.js`
- **Unteragenten:** D11
- **Prüfung durch die Gruppe:** ☐ offen

### 25 – 05.11.2026 – Yannick

> Du musst auf der holy Startseite eine Weiterleitung zu Fallstudie 2 einführen

- **Anhänge:** keine.
- **Vorgehen Claude:** „HOLY-Startseite“ verstanden als die Startseite der Gruppe auf GitHub Pages (`index.html` im
  Hauptordner, Titel „HOLY · Fallstudien Unternehmenskommunikation“), auf der Fallstudie 2 bisher nur als „folgt“ stand.
  Keine automatische Umleitung, weil Fallstudie 1 sonst nicht mehr erreichbar wäre: Fallstudie 2 steht jetzt als erste,
  hervorgehobene Karte mit Knöpfen zur Präsentation, zur Konzept-Webseite und zum Werbespot, dazu Unterlagen (README,
  Gestaltungsplan, KI-Nachweis FS2). Fallstudie 1 folgt darunter, Datum FS2 auf Di, 10.11.2026 korrigiert, Fuß verlinkt
  beide KI-Nachweise. Danach Sichtprüfung bei 390 und 1280 px und Linkprüfung.
- **Ergebnis:** siehe Übersicht
- **Dateien:** `index.html`
- **Unteragenten:** keine
- **Prüfung durch die Gruppe:** ☐ offen

### 26 – 08.11.2026 – Yannick

> Finalisiere die Präsentation

- **Anhänge:** keine.
- **Rückfragen von Claude (Auswahlfragen) und Antworten von Yannick:**
  1. Platzhalter der eigenen Erhebung (O-Töne 02, „Tipp unter Kollegen“ 03, „(vorläufig)“ 05, Workshop-Foto 06,
     Handskizze 07, Selbstversuch B1, Interviews B5) – im Repository liegen keine Ergebnisse. → **„Ohne Erhebung
     (Empfohlen)“**: Platzhalter raus, ehrlich als Analyse von Dossier, Shop und Stichproben kennzeichnen, nichts erfinden.
  2. Werbespot „Mein Moment.“ in die Präsentation? → **„Auf Folie 08 (Empfohlen)“**.
  3. Zusätzlich erstellen? → **„Redeskript als PDF“** (nicht gewählt: Notfall-PDF/Übersicht, Wortkürzung).
- **Vorgehen Claude:** Bestand geprüft (Prüflauf 0 Fehler, 17 Warnungen; alle 18 Folien angesehen; keine Beiträge der
  Gruppe zu Selbstversuch, Interviews, Workshop im Repository). Workflow D12: Umbau (Platzhalter, Sprechtexte, Titel,
  Backup-Folien, Spot-Knopf auf 08, Doku), Redeskript, zwei Abnahmen, Nacharbeit.
- **Ergebnis:** Präsentation ohne Platzhalter: „offen“-Kacheln und O-Ton-Zeile weg, Titel 05 ohne „(vorläufig)“,
  Herleitungen nennen die Grundlage (Dossier, Abrufe von Shop/Suche, KI-gestützte Stichproben, „ohne eigenen
  Testkauf“), B1 neu „Recherche und Abrufe statt eigener Erhebung“ (was geprüft, was nicht erhoben, Grenzen), B5 neu
  „Kundenstimmen aus Portalen, keine Interviews“, B9 mit „nicht durchgeführt“. Folie 08: Knopf „Spot ansehen ▶“ spielt
  den Werbespot in einer Bühne (Esc/Blättertaste/Ende schließen, kein Autoplay, nicht im Druck). Redeskript
  `redeskript.md` und `Fallstudie-2_Redeskript.pdf` (12 Seiten, Sprecherverteilung als Vorschlag, wörtlich gleich den
  Notizen). Sollzeit 12:15, 23 Klicks, 1.249 gesprochene Wörter.
- **Dateien:** `fallstudie-2-customer-journey/praesentation/` (`index.html`, CSS, JS inkl. neu `08-spot.js`/`08-spot.css`,
  LIESMICH, QUELLEN, AUTOREN §14), `gestaltungsplan.md`, `README.md`, `redeskript.md`, `Fallstudie-2_Redeskript.pdf`,
  `werkzeuge-redeskript/`; `ki-nachweis/workflows/2026-11-08_fs2-finalisieren.js`
- **Unteragenten:** D12
- **Prüfung durch die Gruppe:** ☐ offen

### 27 – 08.11.2026 – Yannick

> Du kannst auch das Video von der Werbung einbauen
> Das wir oben erstellt haben

- **Anhänge:** keine.
- **Vorgehen Claude:** Der Einbau des Werbespots „Mein Moment.“ ist schon Teil des laufenden Workflows D12 (Antwort auf
  die Rückfrage in Nr. 26: Knopf auf Folie 08, Abspielen in der Präsentation). Keine Änderung am Auftrag; Rückmeldung an
  Yannick, dass der Spot eingebaut wird.
- **Dateien:** keine
- **Unteragenten:** keine
- **Prüfung durch die Gruppe:** ☐ offen

### 28 – 08.11.2026 – Yannick

> Kannst du es mit mehr agenten schneller umsetzen

- **Anhänge:** keine.
- **Vorgehen Claude:** Der Umbau in D12 bearbeitet eine einzige Datei (`index.html`) und lässt sich nicht gefahrlos
  aufteilen; er läuft weiter. Der Rest des Workflows wird umgebaut und nach dem Umbau mit gespeichertem Zwischenstand
  fortgesetzt: Redeskript und vier statt zwei Abnahmen (Inhalt 01–05, Inhalt 06–09/Backup/Doku, Technik, Vortrag/Layout)
  laufen gleichzeitig, danach Nacharbeit der Präsentation und Prüfung des Redeskripts gleichzeitig, zum Schluss das
  finale Redeskript. Geändertes Skript: `ki-nachweis/workflows/2026-11-08_fs2-finalisieren.js`.
- **Dateien:** `ki-nachweis/workflows/2026-11-08_fs2-finalisieren.js`
- **Unteragenten:** D12 (Fortsetzung)
- **Prüfung durch die Gruppe:** ☐ offen

### 29 – 08.11.2026 – Systemhinweis (kein Prompt der Gruppe)

> Stop hook feedback: [command hook]: There are uncommitted changes in the repository. Please commit and push these changes to the remote branch.

- **Vorgehen Claude:** Die offenen Änderungen sind der halbfertige Umbau aus dem laufenden Workflow D12 (`index.html`,
  CSS, JS, Doku). Ein Push auf master würde diesen Zwischenstand sofort auf GitHub Pages veröffentlichen, zwei Tage vor
  dem Vortrag. Deshalb als Sicherung auf den Branch `zwischenstand-d12` gepusht (Arbeitsverzeichnis und master
  unverändert); master bekommt den geprüften Stand nach Abschluss von D12. Der Hinweis wiederholt sich, solange D12 läuft
  (erneut nach dem Fortsetzen von D12); jedes Mal wird nur der Sicherungs-Branch aktualisiert, ohne neuen Eintrag.
- **Prüfung durch die Gruppe:** ☐ offen

### 30 – 08.11.2026 – Yannick

> Da ist bei einem Bild "Antwort fehlt".
> Und ich überlege ob man noch ein paar mehr Sachen besser optisch darstellen kann

- **Anhänge:** keine.
- **Rückfragen von Claude (Auswahlfragen, nach Zusendung der Vorher-nachher-Bilder) und Antworten von Yannick:**
  1. Welche neu gestalteten Folien übernehmen (die Browserseite auf 04 in jedem Fall)? → **alle vier Gruppen:**
     „04 + 05 Bruchstelle (Empfohlen)“, „02 + 03 Persona/IST“, „06 + 07 SOLL/Vorbilder“, „09 + 01 Fazit/Titel“.
  2. Gestaltungsplan 3.7 schließt „Icon-Abzeichen“ aus; die Entwürfe nutzen schlichte Linien-Symbole. → **„Erlauben
     (Empfohlen)“**: Symbole bleiben, Abweichung wird im Gestaltungsplan als Entscheidung vermerkt.
- **Vorgehen Claude:** Gemeint ist auf Folie 04 der gestrichelte Kasten „Antwortseite fehlt“ (`.p-leerstelle`). Er ist
  inhaltlich gewollt (HOLY hat keine Antwortseite, Marco weicht auf die freie Suche aus), sieht aber aus wie ein
  fehlendes Bild – wird als deutlich gestaltete Bruchstelle neu gezeichnet. Für die zweite Frage: Workflow D13 baut in
  vier getrennten Kopien der Präsentation Entwürfe für bessere Visualisierungen (02/03, 04/05, 06/07, 09) mit
  Vorher-nachher-Bildern; je Entwurf eine Prüfung (Ehrlichkeit, Lesbarkeit, Technik) und Nachbesserung. Das Original
  bleibt unverändert, bis Yannick auswählt, was übernommen wird (Arbeitsweise: Ergebnis zeigen, Freigabe abwarten).
- **Ergebnis:** *Zwischenstand:* Entwürfe für 01–07 und 09 fertig, geprüft und nachgebessert (siehe D13). Folie 04: Die
  Leerstelle ist jetzt eine leere, durchgestrichene Browserseite mit dem Namen „keine Antwortseite“. Die vier Änderungen
  lassen sich ohne Konflikt zusammenführen (Probe in einer Kopie). Vorher-nachher-Bilder an Yannick geschickt; Auswahl
  durch Yannick: alle Folien, Linien-Symbole erlaubt (siehe Rückfragen). Übernahme (D14): Claude hat die vier
  Diffs eingespielt; Doku-Agent und Prüf-Agent parallel, dann Nacharbeit (07: Stationen als volle Knoten wie Platz 1
  auf 06; 07: Einblendungen erst, wenn der Weg ankommt; 04: Wort „bricht“ neben dem Zeichen; 03: „stärkt“ als offener
  Kreis, damit der volle Kreis mit Kreuz nur „bricht“ heißt). Claude selbst: B9 (KI-Kennzeichnung) nennt jetzt die
  Visualisierungen und Nr. 30 / D13, D14; Prüfstand in AUTOREN §15 und LIESMICH eingetragen. Endstand: hell, dunkel,
  Rückfall je 0 Fehler, 16 Warnungen (vorher 17), 38 bzw. 0 Fremdbilder, PDF 18 Seiten, Klicks 23, Sollzeit 735 s;
  Sprechtext unverändert, Redeskript gilt weiter (Wortlaut 0 Abweichungen). Offen für die Gruppe (AUTOREN §15,
  LIESMICH §14): Legende „bricht“ auf 05 ggf. um „oder Anschluss fehlt“ ergänzen; Wegname 07 ggf. „Zentraler Weg (SOLL,
  H)“; sichtbare Textkürzungen aus D13 freigeben – auf 07 steht „Werbung“ (✔ R25) nur noch im Sprechtext und muss
  gesagt werden; 07 im Dunkelmodus: Stationen gelb auf gelbem Weg nur als Verdickung erkennbar.
- **Dateien:** `fallstudie-2-customer-journey/praesentation/` (`index.html` Folien 01–07, 09, B9; CSS `01`–`07`,
  `09`, `pfad.css`; `js/folien/pfad.js`; `fremdbilder/register.js` Feld „platz“; LIESMICH §8, §10–§12, §14; AUTOREN
  §1–§3, §6, §15; QUELLEN), `gestaltungsplan.md` (Abweichung D13, 3.6, 3.7, 5.1, 6.x u. a.), `README.md`;
  `ki-nachweis/workflows/2026-11-08_fs2-visualisierung.js`, `…-visualisierung-uebernahme.js`
- **Unteragenten:** D13
- **Prüfung durch die Gruppe:** ☐ offen

### 31 – 08.11.2026 – Systemhinweis (kein Prompt der Gruppe)

> Stop hook feedback: [command hook]: There are uncommitted changes in the repository. Please commit and push these
> changes to the remote branch.

- **Anhänge:** keine.
- **Vorgehen Claude:** Die uncommitteten Änderungen sind die eingespielten D13-Entwürfe, die D14 gerade prüft und
  dokumentiert. Ein Push auf master würde einen ungeprüften Stand auf GitHub Pages veröffentlichen. Deshalb wie bei
  Nr. 29: Zwischenstand als normaler Commit auf den Sicherungs-Branch `zwischenstand-d14` (ohne Force-Push), master
  bleibt unverändert, bis D14 abgeschlossen und geprüft ist. Wiederholt sich der Hinweis, wird dieser Eintrag ergänzt.
- **Dateien:** keine auf master (außer diesem Nachweis)
- **Unteragenten:** keine
- **Prüfung durch die Gruppe:** ☐ offen

### 32 – 08.11.2026 – Yannick

> Brauche auch das neue skript

- **Anhänge:** keine.
- **Vorgehen Claude:** Gemeint ist das Redeskript (`redeskript.md`, `Fallstudie-2_Redeskript.pdf`). Der Sprechtext hat
  sich durch D13/D14 nicht geändert (Wortlaut-Prüfung 0 Abweichungen), aber die fest im Generator hinterlegten
  Hinweise (⚠) beschreiben teils die alten Folien. Claude passt sie an die neuen Folien und die in D13/D14 ergänzten
  Notizen an (Quellen: Notizen der Folien 02–05, 07, 09; LIESMICH §14), erzeugt MD und PDF neu und schickt das PDF.
- **Ergebnis:** Neue bzw. geänderte Hinweise (⚠): 02 Balkenpaare und Rückfrage „Messen die Balken das Entdecken und
  Prüfen?“; 03 Kästchen und Signalkreise; 04 auf die leere Seite „keine Antwortseite“ zeigen, Rückfragen Help-Center und
  „Warum schon ‚bricht‘?“; 05 an Ü2 stehen bleiben, Zeichen über die Legende erklären; 07 SOLL-Weg = Vorschlag,
  Linien-Symbole KI-gestützt, **„… und die Werbung ist gekennzeichnet“ immer sagen** (steht nicht mehr auf der Folie,
  auch bei Kürzung 3); 09 Kennzahl über ihrem Messpunkt, Bilder = Weg heute. Kopfzeile nennt Nr. 32. Geprüft:
  `wortlaut-pruefen.py` 33 Einträge, 0 Abweichungen; Sollzeit 12:15, 23 Klicks, 1.249 Wörter wie vorher; Unterschied
  alt/neu per `diff` nur in den Hinweisen und der Kopfzeile; PDF 12 Seiten, Seite 8 (Folie 07) angesehen.
- **Dateien:** `fallstudie-2-customer-journey/werkzeuge-redeskript/redeskript-generator.py`, `redeskript.md`,
  `Fallstudie-2_Redeskript.pdf`
- **Unteragenten:** keine
- **Prüfung durch die Gruppe:** ☐ offen

### 33 – 10.11.2026 – Yannick (mit der Gruppe)

> Wir müssen wieder einen Reflexionsbogen ausfüllen. Wir sitzen hier als Gruppe, schicke uns Fragen zum beantworten,
> dieses Mal brauchen wir nur einen

- **Anhänge:** keine.
- **Vorgehen Claude:** Vorlage `reflexion-vorlage.md` (sechs offizielle Fragen von Prof. Stenger, höchstens 500 Wörter,
  Kriterien Tiefe, Selbstkritik, Lerntransfer) und das Vorgehen aus Fallstudie 1 (Entwurf aus den Antworten der Person,
  KI-Nachweis FS1 Nr. 181–191) nachgelesen. „Nur einen“ verstanden als einen gemeinsamen Bogen der Gruppe in Wir-Form.
  Fragen an die Gruppe im Chat gestellt, je offizieller Frage zwei bis drei Unterfragen mit Erinnerungshilfen aus diesem
  Nachweis (z. B. Nr. 01 Kritik aus FS1, Nr. 17 Fremdbilder, Nr. 26 keine eigene Erhebung, Nr. 30 Folie 04). Nichts
  vorformuliert: Der Entwurf entsteht erst aus den Antworten der Gruppe.
- **Ergebnis:** Fragen im Chat; Entwurf folgt.
- **Dateien:** nur dieser Nachweis
- **Unteragenten:** keine
- **Prüfung durch die Gruppe:** ☐ offen

### 34 – 10.11.2026 – Gruppe (über Yannicks Sitzung)

> 1. Wir sind Team Holy
> 2. Nicht viel da gerade Elias Knauber diesen Weg so durchgegangen ist.
> 3. Wir verstehen die Customer Journey jetzt bresser
> 4. Customer Journey und AIDA
> 5. Ne gab da keins
> 6. Die Webseite professionell Designen damit es auch als alternative durchgeht
> 7. Als Gruppe entschieden wir vorgehen und würden wir wieder machen, dadurch haben wir auch persönliche Touchpoints kennen lernen können bsp. Durch Elias.
> 8.  Rechtliche Unklarheit bezüglich unserer öffentlichen Holy Webseite
> 9. Im Projekt und Fallstudie 3 und für eigene Projekte in der Zukunft
> 10. Wir tragen erst später vor aber wir haben aufjedenfall mehr optische Bilder genutzt und mehr Unterstützung vom Gründer
> 11. Nichts denke Fallstudie 2 lief gut außer wir kriegen totales vernichtendes Feedback.
> 12. Gut lief die Kommunikation, schwer lief die Terminfindung damit jeder Zeit hat.
> 13. Yannick hat die Technik gemacht, Lukas hat die Kommunikation mit Holy delegiert. Elias hat uns vorangebracht mit seinen Persönlichen Touchpoints.
> 14.   Hier im Chat als PDF

- **Anhänge:** keine.
- **Vorgehen Claude:** Antworten den Fragen aus Nr. 33 zugeordnet und daraus den gemeinsamen Bogen nach
  `reflexion-vorlage.md` in Wir-Form geschrieben (einfache Sprache, ohne Gedankenstriche, höchstens 500 Wörter). Wenige
  Ergänzungen aus dem Repository (Hinweisbalken der Konzept-Webseite, Videobotschaft des Gründers, Bruch beim
  Nachlesen) sind im Chat als „bitte prüfen“ markiert, ebenso Stellen, an denen die Antworten knapp sind (Grenzen der
  Modelle, Schwäche) und „AIDA“ (kommt in Präsentation und Unterlagen nicht vor). Der Bogen liegt auf Wunsch der Gruppe
  nur als PDF im Chat, nicht im öffentlichen Repository.
- **Ergebnis:** PDF-Entwurf im Chat; Prüfung durch die Gruppe offen.
- **Dateien:** nur dieser Nachweis (PDF im Scratchpad der Sitzung, nicht versioniert)
- **Unteragenten:** keine
- **Prüfung durch die Gruppe:** ☐ offen

### 35 – 10.11.2026 – Gruppe (über Yannicks Sitzung)

> 1. Ja wir meinen die 5 Phasen
> 2. Ja wir meinen es als seine Erfahrung nicht als erhehbung
> 3. Mach
> 4. JA

- **Anhänge:** keine.
- **Vorgehen Claude:** Antworten den Prüfpunkten 1–4 aus dem Chat zu Nr. 34 zugeordnet: Frage 2 nennt jetzt „die
  Customer Journey mit ihren fünf Phasen von Aware bis Advocate“ statt AIDA; Elias' Weg bleibt als persönliche Erfahrung
  beschrieben; die Ergänzungen aus dem Repository (Fragen 1, 3, 4, 5) und „übernommen“ (Frage 6) sind bestätigt. Die
  Zusatzsätze zu Frage 2 und 5 (Punkt 5) und der KI-Hinweis (Punkt 6) wurden nicht beantwortet und sind deshalb nicht
  eingefügt. PDF neu erzeugt (1 Seite, Wortzahl per Skript).
- **Ergebnis:** Endfassung als PDF im Chat; nicht im Repository (Wunsch der Gruppe, Nr. 34).
- **Dateien:** nur dieser Nachweis
- **Unteragenten:** keine
- **Prüfung durch die Gruppe:** ☐ offen

### 36 – 10.11.2026 – Gruppe (über Yannicks Sitzung)

> Ja schreibe den text kritischer zu schwächen und formuliere es etwas um

- **Anhänge:** keine.
- **Vorgehen Claude:** „Ja“ als Zustimmung zu den beiden Zusatzsätzen aus Punkt 5 (Grenzen der Modelle, Schwäche)
  verstanden; der KI-Hinweis (Punkt 6) bleibt weg. Alle sechs Antworten umformuliert und kritischer gefasst, nur mit
  Aussagen, die aus den Antworten der Gruppe oder aus dem Repository belegbar sind: keine eigene Erhebung, obwohl nach
  Fallstudie 1 geplant (Nr. 01, Nr. 26); fiktive Persona; Fremdbilder ohne Genehmigung der Rechteinhaber, Logo mit
  Einverständnis (Nr. 12, Nr. 17); Prüfung der KI-Ergebnisse durch die Gruppe offen (Spalte „Prüfung“ in diesem
  Nachweis); Rollen erst spät verteilt (Gestaltungsplan, Stand 08.11.). Deutungen, die die Gruppe bestätigen muss
  (Gefahr, nur Elias' Sicht zu bestätigen; viel Zeit in Gestaltung statt Kundenstimmen; Terminfindung als Grund für die
  späte Rollenverteilung; Vorsätze für Fallstudie 3), sind im Chat markiert. Wortzahl per Skript: 456 von 500.
- **Ergebnis:** Fassung 3 als PDF im Chat; nicht im Repository.
- **Dateien:** nur dieser Nachweis
- **Unteragenten:** keine
- **Prüfung durch die Gruppe:** ☐ offen

### 37 – 10.11.2026 – Yannick

> Nimm die Webseite runter die Präsentation ist fertig erstelle noch eine HTML Webseite zum runterladen für den holygründer

- **Anhänge:** keine.
- **Rückfragen von Claude (Auswahlfragen, nach der Prüfung des Pakets in D15) und Antworten der Gruppe:**
  1. Bildvermerk im Fuß jeder Seite für den Gründer (bisher „… keine Genehmigung der Rechteinhaber eingeholt …“, Verweis
     auf diesen Nachweis)? → **„Neutral (Empfohlen)“**: „Bilder: Produktbilder und Grafiken der HOLY Softdrinks GmbH sowie
     Fotos Dritter (Herkunft je Bild unten), Abruf 03.11.2026; nur für die Lehrveranstaltung verwendet, nicht kommerziell;
     keine eigenen Fotos der Gruppe.“
  2. Vermerk „Prüfung durch die Gruppe offen“? → **„Von der Gruppe geprüft“** (Angabe der Gruppe, dass sie die Texte
     durchgesehen hat).
  3. Rechtliche Wertungen im Präsentationsmodus? → **„Abschwächen (Empfohlen)“**: als Einschätzung der Gruppe gekennzeichnet.
- **Vorgehen Claude:** Verstanden als: die öffentliche **Konzept-Webseite** (der HOLY-Shop im Konzept, den die Live-Demo
  auf Folie 08 brauchte) von GitHub Pages nehmen; die Präsentationen bleiben online, weil der Link zu Fallstudie 1
  schon mit der Abgabe-E-Mail verschickt wurde (`ki-nachweis.md`, Nr. 200). GitHub Pages veröffentlicht hier den ganzen Branch
  ohne Build (`.nojekyll`), deshalb geht „runter“ nur, indem der Ordner `konzept-website/` aus `master` entfernt wird;
  in der Git-Historie des öffentlichen Repositorys bleibt er sichtbar. Für den Gründer: die sieben Seiten mit Bildern,
  Schriften und Skripten als ZIP zum Offline-Öffnen (ohne Werkzeuge, Vorschaubilder und interne Ordner), mit kurzer
  Anleitung; das Paket liegt nicht im öffentlichen Repository, sondern geht als Datei an die Gruppe.
- **Ergebnis:** Konzept-Webseite aus `master` entfernt (51 Dateien; letzter Stand Commit `cb4a89d`). Startseite ohne
  Knopf, Folie 08 ohne „Live-Demo ↗“ (Sprechtext unverändert), Backup B8 ohne toten Pfad, Doku mit Vermerk 10.11.2026.
  ZIP `HOLY-Konzept-Webseite_Team-HOLY.zip` (1,6 MB, 7 Seiten, Bilder, Schriften, Anleitung) für den Gründer gebaut; liegt
  nicht im Repository. Vor dem Versand von der Gruppe zu entscheiden (Befunde D15): Rechtevermerk im Fuß jeder Seite
  („keine Genehmigung der Rechteinhaber eingeholt“, Verweis auf diesen Nachweis), „Prüfung durch die Gruppe offen“,
  rechtliche Wertungen im Präsentationsmodus; Versand als Download-Link statt Mail-Anhang (ZIP enthält .js-Dateien).
  Nach den Antworten (siehe Rückfragen) nur im Paket geändert, nicht im Repository: Bildvermerk neutral (7 Seiten),
  „von der Gruppe geprüft“ (7 Seiten, `koffein-check.txt`, Anleitung), vier Wertungen als Einschätzung gekennzeichnet
  (Koffein-Check: Fokus-Aussagen; Start: Werbekennzeichnung; Produkt: Echtheit von Bewertungen, Garantie-AGB), Anleitung
  erweitert (Öffnen unter Windows und Mac, Marco als fiktive Persona, Kürzel der Befunde, Datumsangaben). Kommentare im
  Quelltext unverändert. Eigene Prüfung des fertigen ZIP (1,6 MB): 7 Seiten × 2 Größen offline, 0 Fehler, alle Bilder
  geladen, 0 Anfragen nach außen, kein alter Vermerk sichtbar, Anmerkungsmodus funktioniert.
- **Dateien:** `index.html` (Startseite); `fallstudie-2-customer-journey/konzept-website/` (entfernt); `README.md`,
  `gestaltungsplan.md`, `werbevideo/README.md`; `praesentation/index.html` (Folie 08, B8), `css/folien/08-mockups.css`
  (Kommentar), `LIESMICH.md`, `AUTOREN.md` §16
- **Unteragenten:** D15
- **Prüfung durch die Gruppe:** ☐ offen

### 38 – 10.11.2026 – Systemhinweis (kein Prompt der Gruppe)

> Stop hook feedback: [command hook]: There are uncommitted changes in the repository. Please commit and push these
> changes to the remote branch.

- **Anhänge:** keine.
- **Vorgehen Claude:** Nur die Dateien des KI-Nachweises committet und gepusht (`git commit -- <Pfade>`). Die übrigen
  Änderungen gehören zu D15, das noch läuft (Entfernen der Konzept-Webseite, Verweise, Doku); sie gehen erst nach
  Abschluss und eigener Prüfung auf master, damit GitHub Pages keinen halben Stand zeigt. Wiederholt sich der Hinweis,
  wird dieser Eintrag ergänzt.
- **Dateien:** `ki-nachweis/ki-nachweis-fallstudie-2.md`, `ki-nachweis/workflows/2026-11-10_fs2-webseite-offline-gruender-paket.js`
- **Unteragenten:** keine
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
| D07 | 03.11.2026 | 17, 18 | Workflow „fs2-bilder-veroeffentlichen“ (4 Unteragenten) | Abnahme-Befunde aus D06 umsetzen; Präsentation und Konzept-Webseite auf veröffentlichte Bilder und Video umstellen; Abnahme | alle D06-Befunde umgesetzt (Folie 07 nur Logos, B6 ohne Platz); Doku umgestellt; Abnahme: 6 mittlere, 13 niedrige Befunde | Journal gelesen; beide Prüfskripte selbst: 0 Fehler (38 Bilder); Endzustände 01–09 angesehen; Befunde an D08 |
| D08 | 03.11.2026 | 17, 18 | Workflow „fs2-bilder-nacharbeit“ (4 Unteragenten) | Restbefunde aus D07: Rechtestatus ehrlich formulieren, Vorname einer Privatperson entfernen, Doku-Reste, Zuschnitte, Video-Rückfalltext, unbenutzte Fremdbilder zurückhalten; Abnahme | W1–W10 und P1–P11 umgesetzt; Abnahme: 0 mittlere, 7 niedrige Befunde | Journal gelesen; 7 Restbefunde selbst behoben; Prüfskripte (hell, dunkel, Webseite): 0 Fehler; Volltextsuche Vorname; Folien und Webseite angesehen |
| D09 | 03.11.2026 | 19 | Workflow „fs2-webseite-echt“ (9 Unteragenten) | Konzept-Webseite wie einen echten HOLY-Shop gestalten: 3 Entwürfe, Jury, Umbau, Abnahme, Nacharbeit | Sieger „Kampagne“ auf allen 7 Seiten; Abnahmen 3 hohe, 11 mittlere, 11 niedrige Befunde, fast alle umgesetzt | Claude: beide Prüfskripte selbst (0 Fehler), Volltextsuche Sicherheitsmerkmale, Sichtprüfung 390/1280 px und Folie 08; alt-Texte Folie 08 selbst eingetragen |
| D10 | 04.11.2026 | 22 | Workflow „fs2-werbevideo“ (9 Unteragenten, ElevenLabs über die Schnittstelle) | Werbevideo 9:16 für HOLY im Stil des Konzepts: 3 Drehbücher mit Storyboard, Jury, Produktion, Abnahme, Nacharbeit | Spot „Zahlen statt Versprechen“ (26,8 s); Jury 97/93/82 Punkte; Abnahmen 1 hoher, 6 mittlere, 15 niedrige Befunde, fast alle umgesetzt | Claude: ffprobe, Lautheit, Kontaktbogen, Untertitel, Volltextsuche |
| D11 | 04.11.2026 | 24 | Workflow „fs2-werbevideo-emotion“ (11 Unteragenten, 2 mit Websuche, ElevenLabs über die Schnittstelle) | Spot neu: emotional und aufregend wie Kurzspots großer Marken – Recherche, 3 Konzepte, Jury, Produktion, Abnahme, Nacharbeit | Spot „Mein Moment.“ (24,5 s); Recherche 65 Quellen; Jury 111/106/100 Punkte; Abnahmen 2 hohe, 7 mittlere, 8 niedrige Befunde, umgesetzt | Claude: ffprobe, Lautheit, Kontaktbogen, Untertitel, Volltextsuche |
| D12 | 08.11.2026 | 26, 28 | Workflow „fs2-finalisieren“ (9 Unteragenten, nach Nr. 28 parallelisiert) | Präsentation finalisieren: Platzhalter der Erhebung ehrlich ersetzen, Werbespot auf 08, Redeskript als PDF, Abnahme, Nacharbeit | fertig; Abnahmen 7 mittlere, 32 niedrige Befunde, umgesetzt | Claude: Prüflauf 0 Fehler, Volltextsuche, alle 18 Folien und Redeskript angesehen |
| D13 | 08.11.2026 | 30 | Workflow „fs2-visualisierung“ (12 Unteragenten, je Gruppe Entwurf → Prüfung → Nachbesserung) | Entwürfe für bessere Visualisierungen in vier Kopien (02/03, 04/05 inkl. Leerstelle, 06/07, 09) | Entwürfe für 01–07 und 09; Prüfungen: 01, 03, 05 übernehmen, 02, 04, 06, 07, 09 mit Änderungen, in der Nachbesserung umgesetzt; je Kopie 0 Fehler; Auswahl offen | Claude: Rückgaben gelesen, alle Montagen angesehen, Diffs probeweise zusammengeführt |
| D14 | 08.11.2026 | 30 | Workflow „fs2-visualisierung-uebernahme“ (3 Unteragenten) | Nach Yannicks Auswahl: eingespielte D13-Entwürfe – Doku und Kommentare nachziehen, zusammengeführte Präsentation unabhängig prüfen, Befunde abarbeiten | Doku in 8 Dateien + Kommentare nachgezogen (nur Kommentare in HTML/CSS, per Skript geprüft); Prüfung: 0 hohe, 1 mittlerer, 5 niedrige Befunde; Nacharbeit: 4 umgesetzt, 2 als Gruppenentscheidung vermerkt | Claude: eigene Prüfläufe hell/dunkel/Rückfall (0 Fehler), Wortlaut Redeskript, Endzustände angesehen, Diff-Suche Modellnamen/URLs |
| D15 | 10.11.2026 | 37 | Workflow „fs2-webseite-offline-gruender-paket“ (2 Unteragenten parallel) | Konzept-Webseite aus master entfernen und alle Verweise anpassen (Startseite, Folie 08 ohne Live-Demo, Doku); ZIP für den Gründer unabhängig prüfen (offline, Links, Bilder, Anleitung, heikle Stellen) | Abschaltung: 51 Dateien entfernt, 8 Dateien angepasst, Prüfläufe 0 Fehler/16 Warnungen, Wortlaut 0 Abweichungen; Paket: 14 Aufrufe offline, 0 Fehler, 80/80 Bilder, 0 Netzanfragen; 12 Befunde (1 hoch, 4 mittel, 7 niedrig) zu Inhalt und Versand | Claude: Diff gelesen, B8 selbst angepasst, eigener Prüflauf 0 Fehler, Wortlaut-Prüfung, Pages nach dem Push geprüft |

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
- **Ergebnis:** alle 4 Unteragenten fertig, 0 Fehler (rund 34 min).
  - *Webseite:* Fuß-Obersatz neu, Bildnachweise mit Motiv und zusammengefasst, Symbolbilder (Karton, Regal)
    gekennzeichnet, Händlerseite mit Code und Knopf im ersten Bildschirm, großes Produktbild folgt der Packung,
    Shaker je Packung (pinker Shaker neu aus vorhandenem Packshot), Produkt-Tag im Knopf, Münze neu zugeschnitten,
    `_vorschau/` zeigt die Fassung mit Bildern, Folie-08-Strecke durchgehend 50er-Dose; `pruefen.mjs` mit neuer
    GitHub-Pages-Probe (lokaler HTTP-Server) bestanden. Textkorrekturen mit Quelle: 10 Portionen = Sachet-Box
    (Shop-Packshot), Shaker gratis zur ersten Dose (✔ T22).
  - *Präsentation:* Folie 07 nur Logos (einfarbig; die sechs Vorschaubilder unlesbar, auf B6 kein Platz), OTTO-Bild
    als Textausschnitt mit dem belegenden Satz, Blog-Kachel „Blog: 0 Beiträge“ und Sprechtext 04 „Der Blog ist leer
    (0 Beiträge)“ (✔ M01, ✔ L39), Symbolbild-Label 02, Bildquellzeilen, Rückfalltext 09; Doku (LIESMICH, QUELLEN,
    AUTOREN, README FS2, Gestaltungsplan) auf „Fassung mit Bildern“ / „Rückfall ohne Fremdbilder“. Klicks 23 und
    Sollzeit 710 s unverändert.
  - *Abnahme (2 Agenten, nur lesend):* Präsentation 4 mittlere, 7 niedrige Befunde (u. a. Gestaltungsplan-Regeln ohne
    vermerkte Abweichung, B8 „mit Freigabe“ missverständlich, alte Begriffe in den Einträgen konzept-01..05, **Vorname
    eines Community-Mitglieds im Bildnachweis** – schon seit Commit f86cb9a öffentlich); Webseite 2 mittlere,
    6 niedrige Befunde (u. a. „mit Freigabe“ ohne Urheber der Freigabe, „Foto: Lebensmittel Zeitung“ nennt einen
    unbekannten Urheber, Produkt-Tag und Ziel passen nicht zusammen).
- **Wie Claude das Ergebnis geprüft hat:** Journal aller 4 Agenten gelesen; beide Prüfskripte selbst laufen lassen
  (Präsentation 0 Fehler, 17 Warnungen, 38 Bilder; Webseite bestanden); Endzustände der Folien 01–09 als Kontaktbogen
  angesehen; Vorname per Volltextsuche bestätigt. Stand committet (6288a1d); Restbefunde mit Entscheidungen
  (Rechtestatus-Formulierung, unbenutzte Bilder zurückhalten, Knopf-Ziel) an D08.


### D08 – 03.11.2026 – ausgelöst durch Prompt 17 und 18

- **Art:** Workflow „fs2-bilder-nacharbeit“: zwei Bauer parallel (Konzept-Webseite; Präsentation mit Gestaltungsplan
  und README FS2), je eine adversariale Abnahme (nur lesend). Vorgabe für den Rechtestatus: Veröffentlichung der
  Fremdbilder von der Gruppe beschlossen (Nr. 17), keine Genehmigung der Rechteinhaber eingeholt; Logo mit
  Einverständnis (Nr. 12); Video mit Zustimmung des Gründers (Nr. 18).
- **Auftrag (wörtlich):** im Skript [`workflows/2026-11-03_fs2-bilder-nacharbeit.js`](workflows/2026-11-03_fs2-bilder-nacharbeit.js).
- **Ergebnis:** alle 4 Unteragenten fertig, 0 Fehler (rund 31 min).
  - *Webseite (W1–W10):* Fuß-Obersatz „Veröffentlichung von der Gruppe beschlossen (KI-Nachweis FS2 Nr. 17), keine
    Genehmigung der Rechteinhaber eingeholt“; Bildunterschriften „Symbolbild · Quelle: … (Urheber unbekannt/nicht
    genannt)“; Regalfoto enger zugeschnitten (nur HOLY-Ware); Produktseite übernimmt `?packung=`, Knopf „Zum Produkt
    aus dem Video“ führt zur 50er-Dose; Nachkauf über die Squad-Seite ohne Gratis-Shaker (✔ T22); Logo-Regel und
    historische Namen in der README; Silbentrennung im Garantie-Kasten; Prüfskript warnt bei nicht versionierten
    Bilddateien.
  - *Präsentation (P1–P11):* Gestaltungsplan vermerkt die Abweichung (Beschluss der Gruppe, keine Genehmigung von HOLY
    bzw. der Rechteinhaber, keine Zustimmung des Betreuers eingeholt); B8 mit genauem Rechtestatus; Vorname des
    Community-Mitglieds aus Bildnachweis und QUELLEN entfernt (in der Git-Historie ab f86cb9a weiter enthalten);
    Einträge konzept-01..05 neu; Folie-08-Kasten korrigiert; Video 09 mit Standardtext und eigenem Fehlertext;
    m03-suche neu zugeschnitten; m03-dose-shaker als Werbebild gekennzeichnet; die sechs unbenutzten
    Vorbild-Bilder aus `fremdbilder/` nach `intern/vorbilder-zurueckgehalten/` (nicht mehr veröffentlicht).
  - *Abnahme (2 Agenten, nur lesend):* keine hohen oder mittleren Befunde; 7 niedrige (Umschalter „Anmerkungen“
    verlieren Packung/Nachkauf, Danke-Seite spricht Nachkäufer als Erstkäufer an, Git-Prüfung nur mit englischer
    Fehlermeldung, Quelle konzept-03 ohne `?packung=50` (2×), B8-Aufzählung ohne Fotos Dritter, `.gitignore`-Kommentar).
- **Wie Claude das Ergebnis geprüft hat:** Journal aller 4 Agenten gelesen; die 7 niedrigen Befunde selbst behoben
  (`konzept.js`: Umschalter behalten `packung`/`nachkauf`, Nachkauf blendet Beitritts-Texte aus; `pruefen.mjs`:
  Rückgabecode 128 statt Fehlertext, zwei neue Prüffälle; Register und QUELLEN `produkt.html?packung=50`; B8-Text;
  `.gitignore`). Danach: Webseite `pruefen.mjs` bestanden (inkl. GitHub-Pages-Probe), Präsentation `pruefen.mjs
  --schritte` hell und dunkel je 0 Fehler, 17 Warnungen; Volltextsuche nach dem Vornamen: 0 Treffer außerhalb von
  `intern/`; Folien 02, 03, 09, B8 und die sieben Vorschaubilder der Webseite angesehen. Nicht gelöscht (Sicherheitssperre
  bei Löschungen im Wurzelverzeichnis): zwei Fehlausgaben eines Testaufrufs (`/dunkel.log`, `/rueckfall.log`, je 771 Byte,
  außerhalb des Repositorys im Container).


### D09 – 03.11.2026 – ausgelöst durch Prompt 19

- **Art:** Workflow „fs2-webseite-echt“: drei Gestalter parallel (je eigene Kopie im Scratchpad: HOLY-nah,
  Shop-Standard, Kampagne), zwei Jury-Agenten (Markenwirkung; Umsetzung/Barrierefreiheit/Ehrlichkeit) mit Punkten,
  Sieger nach Punktsumme, ein Bauer für alle 7 Seiten, zwei Abnahmen (Gestaltung; Technik/Ehrlichkeit), eine
  Nacharbeit. Vorgaben: Hinweistext, `noindex`, keine Formulare/externen Anfragen, Kennzeichnung bleiben; keine neuen
  Fakten ohne Befund-ID; keine neuen Downloads.
- **Auftrag (wörtlich):** im Skript [`workflows/2026-11-03_fs2-webseite-echt.js`](workflows/2026-11-03_fs2-webseite-echt.js).
- **Ergebnis:** 9 Unteragenten, alle mit Ergebnis. Jury: Kampagne 97, HOLY-nah 95, Shop-Standard 95 Punkte (zwei
  Jurys, je 6 Kriterien). Bauer übernahm den Sieger mit Elementen der anderen Entwürfe für alle 7 Seiten und erweiterte
  `pruefen.mjs` (nichts abgeschwächt; Gegenprobe mit 7 eingebauten Fehlern). Abnahme Gestaltung/Realismus: 3 hohe,
  8 mittlere, 6 niedrige Befunde (u. a. Blindtext in Bewertungen, „Grundpreis offen“ am Preis, Fuß von 2–2,5
  Handy-Bildschirmen, Abrufstempel im Text, Folie-08-Bild der Danke-Seite). Abnahme Technik/Ehrlichkeit: keine hohen,
  3 mittlere, 5 niedrige Befunde (Sichtbarkeitsprüfung zu schwach, Kaufleiste verdeckt Fokus, Inter-Dateien
  unversioniert, falsche Kontrastangaben, Zitat nicht wörtlich). Nacharbeit: alle Befunde umgesetzt außer Kopf im
  Folie-08-Bild 03 (bräuchte klebenden Kopf) und Standardpackung (Gruppenentscheidung); `pruefen.mjs` prüft jetzt
  echte Sichtbarkeit (Deckkraft, Farbe, Größe, Verdeckung) und einen Tab-Rundgang, 4 Mutationen werden erkannt.
  Quellen: Referenz-Bildschirmfotos von HOLYs Shop aus `intern/` (Abruf 03.11.2026) und Dossier-IDs; keine Websuche.
- **Wie Claude das Ergebnis geprüft hat:** Journal und alle Rückgaben gelesen. Selbst ausgeführt:
  `konzept-website/werkzeuge/pruefen.mjs` (beide Fassungen, GitHub-Pages-Probe) – „Alle Prüfungen bestanden“,
  0 externe Anfragen, keine Warnung (nach `git add` der Inter-Dateien); `praesentation/werkzeuge/pruefen.mjs index.html
  --schritte` – 0 Fehler, 17 Warnungen (wie vorher), 38 Bilder eingesetzt. Per Volltextsuche: `noindex,nofollow` und
  kein `form`/`input`/`textarea`/`select` auf allen 7 Seiten, Hinweistext im Wortlaut. Angesehen: erste Bildschirme
  aller 7 Seiten bei 390 px, Start-, Produkt-, Warenkorb- und Danke-Seite bei 1280 px, Fuß, Bewertungen, die fünf
  Folie-08-Bilder und Folie 08 bei 1920 × 1080. Die alt-Texte von `konzept-01` … `-05` in
  `praesentation/fremdbilder/register.js` (den die Agenten nicht ändern durften) selbst nach dem Bildinhalt eingetragen,
  dazu Datum, Motiv, Notiz „Identität“ und AUTOREN §13.

### D10 – 04.11.2026 – ausgelöst durch Prompt 22

- **Art:** Workflow „fs2-werbevideo“: drei Drehbuch-Autoren parallel (Richtungen „Der Weg aus dem Video“, „Zahlen statt
  Versprechen“, „Erst nachlesen, dann entscheiden“; je Drehbuch, Storyboard-Standbilder und eine kurze Hörprobe), zwei
  Jury-Agenten (Wirkung; Ehrlichkeit/Recht/Machbarkeit), eine Produktion (Stimme über ElevenLabs, animierte Bühne per
  Playwright, Schnitt und Ton mit ffmpeg), zwei Abnahmen, eine Nacharbeit. Vorgaben: keine geklonte Stimme, nichts aus der
  Videobotschaft des Gründers, nur veröffentlichte HOLY-Bilder, Aussagen nur mit Befund-ID, Pflichtkennzeichnungen im
  Bild, höchstens 8.000 Zeichen Sprachausgabe.
- **Auftrag (wörtlich):** im Skript [`workflows/2026-11-04_fs2-werbevideo.js`](workflows/2026-11-04_fs2-werbevideo.js).
- **Ergebnis:** 9 Unteragenten (nach einem Container-Neustart fortgesetzt; zwei Drehbücher kamen aus dem Zwischenspeicher).
  Jury: „Zahlen statt Versprechen“ 97, „Der Weg aus dem Video“ 93, „Erst nachlesen, dann entscheiden“ 82 Punkte.
  Abnahme Wirkung: 1 hoher (EFSA-Satz und Überschrift des Koffein-Checks kurz im Handy lesbar), 3 mittlere, 7 niedrige
  Befunde; Abnahme Ehrlichkeit/Recht/Technik: 3 mittlere (Bewertungsband lesbar, Eis-Foto ohne Registerschlüssel,
  Modellkennungen in der Doku), 8 niedrige. Nacharbeit: alle hohen und mittleren und fast alle niedrigen umgesetzt, Spot
  neu gebaut. Quellen: Dossier-IDs, Konzept-Webseite, Bildregister; keine Websuche.
- **Wie Claude das Ergebnis geprüft hat:** Rückgaben gelesen; selbst gemessen: ffprobe (H.264 High, 1080 × 1920,
  yuv420p, 30 fps, AAC 48 kHz, 26,8 s, 10,4 MB), Lautheit −14,0 LUFS, Spitze −1,4 dBFS; Kontaktbogen mit einem Bild je
  Sekunde angesehen (Pflichtzeile in jedem Bild, Endkarte mit Altershinweis und vollem Hinweis); Untertitel gelesen;
  Volltextsuche in `werbevideo/` (ohne `intern/`) nach Schlüsseln, der Klonstimmen-ID und Modellnamen – kein Treffer;
  `intern/` per `.gitignore` ausgeschlossen. Das Video selbst nicht angehört (kein Ton in der Sitzung); die Aussprache
  hat der Unteragent per Speech-to-Text der eigenen Tonspur geprüft.

### D11 – 04.11.2026 – ausgelöst durch Prompt 24

- **Art:** Workflow „fs2-werbevideo-emotion“: zwei Recherche-Agenten mit Websuche (Kurzspots großer Marken; Zielgruppe
  und Werberegeln für Energy-Drinks), drei Konzept-Agenten (Richtungen „Ritual“, „Squad“, „Humor“; je Drehbuch,
  Storyboard, Bewegungstest, Hörprobe), zwei Jury-Agenten (Kreativ; Ehrlichkeit/Recht/Machbarkeit), eine Produktion,
  zwei Abnahmen, eine Nacharbeit. Vorgaben wie D10, dazu: HOLYs Lifestyle-Werbefotos mit Models erlaubt (nicht Gründer,
  Team, Creator, Community), Voice Design und eleven-v3-Tags erlaubt, keine Klonstimme, höchstens 10.000 Zeichen
  Sprache; Vorfassung D10 nach `werbevideo/vorfassung-d10/`.
- **Auftrag (wörtlich):** im Skript [`workflows/2026-11-04_fs2-werbevideo-emotion.js`](workflows/2026-11-04_fs2-werbevideo-emotion.js).
- **Ergebnis:** 11 Unteragenten, alle mit Ergebnis. Recherche: 65 Quellen mit URL (Marken-Spots, Plattform-Leitfäden,
  Zielgruppe, Werberegeln). Jury: „Ritual“ 111, „Humor“ 106, „Squad“ 100 Punkte. Abnahme Emotion: 2 hohe (Spannungsloch
  1,5–8 s, Drop knallt nicht), 5 mittlere, 3 niedrige Befunde; Abnahme Ehrlichkeit/Recht/Technik: 2 mittlere (Seufzer als
  „müde → wach“ lesbar, Squad-Nachricht am Model-Foto), 5 niedrige. Nacharbeit: alle umgesetzt (Rückblenden mit Gags,
  Drop +3,2 LU, sechs Schnitte im Takt, neue Takes „Feierabend!“ und „Mmh!“), Spot neu gebaut.
- **Wie Claude das Ergebnis geprüft hat:** Rückgaben gelesen; selbst gemessen: ffprobe (H.264 High, 1080 × 1920,
  yuv420p, 30 fps, AAC 48 kHz, 24,5 s, 13,5 MB), Lautheit −14,2 LUFS, Spitze −3,0 dBFS; Kontaktbogen (32 Bilder über die
  ganze Länge) angesehen: Pflichtzeile in jedem Bild, Endkarte mit Altershinweis und vollem Hinweis, „Werbung“ am Code;
  Untertitel gelesen; Herkunft „Himbeere × Yuzu“ im Drehbuch nachgesehen; Volltextsuche nach Schlüsseln, Klonstimmen-ID
  und Modellkennungen (nur Treffer: die Suchmuster im Prüfskript selbst). Ton nicht angehört.

### D12 – 08.11.2026 – ausgelöst durch Prompt 26

- **Art:** Workflow „fs2-finalisieren“: ein Umbau-Agent (Inventur der Platzhalter, ehrliche Umformulierung ohne eigene
  Erhebung, Spot-Knopf auf Folie 08, Doku), ein Redeskript-Agent (Markdown und PDF nach dem Vorbild von FS1,
  Sprecherverteilung nur als Vorschlag), zwei Abnahmen (Inhalt/Ehrlichkeit; Technik/Vortrag), eine Nacharbeit.
  Vorgabe: nichts erfinden (keine O-Töne, Interviewzahlen, Workshop- oder Selbstversuchsdaten).
- **Auftrag (wörtlich):** im Skript [`workflows/2026-11-08_fs2-finalisieren.js`](workflows/2026-11-08_fs2-finalisieren.js)
  (Fassung nach Nr. 28; die erste Fassung hatte Redeskript, zwei Abnahmen und Nacharbeit nacheinander).
- **Ergebnis:** 9 Unteragenten mit Ergebnis (Umbau; dann gleichzeitig Redeskript und 4 Abnahmen; dann gleichzeitig
  Nacharbeit und Prüfung des Redeskripts; Redeskript final). Abnahmen: Inhalt 01–05 5 mittlere/7 niedrige, Inhalt
  06–09/Backup 2/9, Technik 0/5, Vortrag/Layout 0/11, Redeskript 1/6 – alle umgesetzt. Prüfläufe der Nacharbeit: hell,
  dunkel, Rückfall mit Druck je 0 Fehler, 17 Warnungen; Spot-Funktionstest 70/70; Wortlaut Redeskript 0 Abweichungen.
- **Wie Claude das Ergebnis geprüft hat:** `pruefen.mjs index.html` selbst: 0 Fehler, 17 Warnungen, 38 Fremdbilder;
  alle 18 Folien im Endzustand angesehen; Volltextsuche im sichtbaren Text: kein „offen“, „vorläufig“, „erst nach“;
  „Selbstversuch/Interview/Workshop“ nur noch in der Aussage „nicht erhoben“ (B1, B5, B9); erste Seite des
  Redeskript-PDF angesehen (Vorschlag deutlich gekennzeichnet, Zeitrechnung); keine Modellnamen im Redeskript.

### D13 – 08.11.2026 – ausgelöst durch Prompt 30

- **Art:** Workflow „fs2-visualisierung“ als Pipeline: vier Gestalter parallel, jeder in einer eigenen Kopie der
  Präsentation im Scratchpad (02/03 Persona und IST; 04/05 Journey-Map und Übergänge mit Pflicht „Leerstelle
  Antwortseite“; 06/07 SOLL und Vorbilder; 09 Fazit, 01 Feinschliff); je Gruppe danach eine Prüfung (Ehrlichkeit,
  Lesbarkeit, Technik) und eine Nachbesserung. Ergebnis: Vorher-nachher-Montagen und Diffs; das Original bleibt
  unverändert, bis Yannick auswählt.
- **Auftrag (wörtlich):** im Skript [`workflows/2026-11-08_fs2-visualisierung.js`](workflows/2026-11-08_fs2-visualisierung.js).
- **Ergebnis:** 12 Unteragenten, alle mit Ergebnis. Entwürfe:
  - 02: Steckbrief mit Strich-Symbolen, Verben des Titels (entdeckt, prüft, kauft) als Gliederung, Balkenpaare mit Ø
    als dünnem Balken, 61 % als Ring;
  - 03: Kästchen je Kontaktpunkt (13 · 30 · 11, drei offene für die fehlenden Owned), Signalzeichen statt „+/−“;
  - 04: Leerstelle als leere, durchgestrichene Browserseite „keine Antwortseite“, Zeichen „bricht“ am Nebenweg;
  - 05: Urteile als Zeichen (Dreieck = wackelt, Kreuz = bricht), Lücke mit Bruchstrichen an Ü2, Zeichenlegende;
  - 06: Platz 1 hervorgehoben, Plätze 2/3 als Ring, Kriterien-Legende mit Symbolen;
  - 07: Tabelle ersetzt durch Brücke „Vorbild → Symbol → Station → Maßnahme“ am durchgehenden SOLL-Weg;
  - 09: Kennzahlen als Messpunkte Ü1–Ü4 direkt am Pfad; 01: Pfad stößt ans Foto.
  Prüfungen: 01, 03, 05 übernehmen; 02, 04, 06, 07, 09 nur mit Änderungen. Beispiele: auf 02 „gelb = Marcos Kanal“ ohne
  Beleg im Steckbrief, auf 04 ein Warndreieck im Widerspruch zu 05, auf 07 „eigene Zeichnungen“ statt „KI-gestützt
  erstellt“, auf 09 fehlte „Vorschlag“. Diese Befunde sind in der Nachbesserung umgesetzt. Prüfläufe je Kopie (hell,
  dunkel, Rückfall, Druck): 0 Fehler, 16–17 Warnungen. Sprechtext auf allen Folien wörtlich unverändert. Offen für die
  Gruppe: Linien-Symbole auf 02, 03, 05, 06, 07 weichen von Plan 3.7 („keine Icon-Abzeichen“) ab. Keine neuen Fakten;
  Gestaltungsentscheidungen aus Modellwissen.
- **Wie Claude das Ergebnis geprüft hat:** Rückgaben aller 12 Unteragenten gelesen; alle Vorher-nachher-Montagen
  (01–07, 09) selbst angesehen; die vier Diffs probeweise nacheinander auf eine frische Kopie der Präsentation
  angewendet: ohne Konflikt. Eigene Prüfläufe folgen bei der Übernahme.

### D14 – 08.11.2026 – ausgelöst durch Prompt 30 (nach Yannicks Auswahl)

- **Art:** Workflow „fs2-visualisierung-uebernahme“. Vorher hat Claude die vier D13-Diffs selbst in die Präsentation
  eingespielt (ohne Konflikt). Dann zwei Unteragenten parallel: ein Doku-Agent (Gestaltungsplan 3.6/3.7/5.1 mit
  Abweichung „Linien-Symbole erlaubt“, AUTOREN, LIESMICH, Bildregister, Kommentare; nur Text außerhalb der Folien) und
  ein Prüf-Agent (nur lesen: Prüfläufe hell, dunkel, Rückfall mit Druck, alle Bilder 01–07 und 09, Nebenwirkungen auf 08
  und Backup, Zahlen und Sprechtext gegen HEAD, Bedienung). Danach ein Nacharbeits-Agent für die Befunde.
- **Auftrag (wörtlich):** im Skript [`workflows/2026-11-08_fs2-visualisierung-uebernahme.js`](workflows/2026-11-08_fs2-visualisierung-uebernahme.js).
- **Ergebnis:** 3 Unteragenten, alle mit Ergebnis. Doku-Agent: Gestaltungsplan (Abweichung D13, 3.6 neue Komponenten,
  3.7 Ausnahme Linien-Symbole mit Nr. 30, 5.1, 6.x „seit D13“), AUTOREN §15, LIESMICH §14, QUELLEN, README, Bildregister
  (Feld „platz“), Kommentare in HTML/CSS („erlaubt von Yannick am 08.11.2026“); per Skript belegt, dass HTML und CSS sich
  nur in Kommentaren geändert haben. Prüf-Agent (nur lesen): drei Läufe je 0 Fehler, 16 Warnungen; 08 und B1–B9 pixelgleich
  mit HEAD; Zahlen und Sprechtext gleich; Bedienung 07/05 ohne Hänger; Befunde: D14-01 (mittel, Ringe auf 07 widersprechen
  06), D14-02 bis D14-06 (niedrig: Einblendung vor dem Weg auf 07, „bricht“ auf 04 ohne Wort, voller Kreis mit + und ×
  doppeldeutig, H am SOLL-Weg, sichtbare Textkürzungen). Nacharbeit: D14-01 bis D14-04 umgesetzt, D14-06 als Liste in
  AUTOREN §15; D14-03 Teil 2 (Legende 05) und D14-05 (Wegname 07) als Entscheidung der Gruppe vermerkt.
- **Wie Claude das Ergebnis geprüft hat:** Rückgaben gelesen; danach selbst: B9 um D13/D14 ergänzt (Hinweis des
  Doku-Agents), `pruefen.mjs` hell, dunkel und Rückfall mit Druck je 0 Fehler, 16 Warnungen, 38 bzw. 0 Fremdbilder, 0
  externe Anfragen, PDF 18 Seiten; `wortlaut-pruefen.py` 0 Abweichungen; Endzustände 02–07, 09, B9 hell sowie 03, 04,
  05, 07 dunkel und 02, 04, 07, 09 im Rückfall angesehen; Diff nach Modellnamen und neuen Adressen durchsucht – kein
  Treffer. Prüfzahlen in AUTOREN §15 und LIESMICH eingetragen.

### D15 – 10.11.2026 – ausgelöst durch Prompt 37

- **Art:** Workflow „fs2-webseite-offline-gruender-paket“: zwei Unteragenten parallel. (1) Abschalt-Agent: versionierte
  Dateien der Konzept-Webseite aus `master` entfernen (letzter Stand Commit `cb4a89d`), Startseite und Folie 08 ohne
  Verweis auf die Webseite, Doku mit Vermerk 10.11.2026, Prüfläufe der Präsentation, Wortlaut des Redeskripts
  unverändert. (2) Paket-Prüfer, nur lesend: das von Claude gebaute ZIP für den Gründer entpacken und offline prüfen
  (alle 7 Seiten, keine Anfragen nach außen, Bilder, Schriften, Links, Anmerkungsmodus, Hinweisbalken), Anleitung
  gegen die Seiten prüfen, heikle Stellen für den Empfänger benennen.
- **Auftrag (wörtlich):** im Skript [`workflows/2026-11-10_fs2-webseite-offline-gruender-paket.js`](workflows/2026-11-10_fs2-webseite-offline-gruender-paket.js).
- **Ergebnis:** Abschalt-Agent: 51 versionierte Dateien entfernt (gestagt), 8 Dateien angepasst; Prüfläufe mit Bildern und
  Rückfall je 0 Fehler, 16 Warnungen, PDF 18 Seiten; Wortlaut Redeskript 0 Abweichungen; Startseite 10 lokale Ziele ok.
  Offene Punkte: Regie im Sprechtext 08 nennt die Live-Demo noch (bewusst, Redeskript zitiert wörtlich); sichtbarer Pfad
  auf B8. Paket-Prüfer: ZIP byte-gleich mit `cb4a89d` plus Anleitung, offline 0 Fehler, 80/80 Bilder, 288 Links je Größe
  ok, Klickstrecke und Anmerkungsmodus ok. Befunde: P01 hoch (Rechtevermerk im Fuß richtet sich an den Rechteinhaber),
  P02/P03 mittel (Prüfvermerk offen, rechtliche Wertungen), P04 mittel (Anleitung zu knapp für Windows), P05 mittel
  (Mail-Anhang mit .js kann blockiert werden – Modellwissen), P06–P12 niedrig.
- **Wie Claude das Ergebnis geprüft hat:** Rückgaben gelesen; Diff der Startseite gelesen; Suche nach toten
  Markdown-Links auf die Webseite (keine); B8 selbst angepasst (sichtbarer Pfad ersetzt); eigener Prüflauf der
  Präsentation 0 Fehler, 16 Warnungen; `wortlaut-pruefen.py` 0 Abweichungen; nach dem Push Startseite und Adresse der
  Konzept-Webseite auf GitHub Pages abgerufen.

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
