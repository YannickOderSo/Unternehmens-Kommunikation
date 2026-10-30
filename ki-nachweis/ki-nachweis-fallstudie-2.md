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
| 04 | 30.10.2026 | Yannick | Fallstudie 2 anfangen: Deep Research und Gestaltungsplan nach den neu festgelegten Regeln | D02 (Workflow) | läuft |
| 05 | 30.10.2026 | Yannick | Erlaubnis, in dieses Repository zu pushen | – | Schreibzugriff eingerichtet; Nachweis begonnen |
| 06 | 30.10.2026 | Yannick | „Versuch es noch einmal“: abgebrochene Schritte nach dem Nutzungslimit erneut starten | D03 (Workflow) | läuft |
| 07 | 30.10.2026 | Systemhinweis (kein Prompt der Gruppe) | Stop-Hook: uncommittete Änderungen | – | Zwischenstand committet und gepusht |

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
- **Ergebnis:** *(läuft)*
- **Dateien:** `ki-nachweis/workflows/2026-10-30_fs2-recherche-gestaltung.js` (Ergebnisdateien folgen)
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
  zwei offenen Schritte gestartet; das fertige Prüfergebnis zum Dossier bekommt er als Datei.
- **Dateien:** `ki-nachweis/workflows/2026-10-30_fs2-schlusspruefung-rest.js`
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

---

## 2. Delegationen an Unteragenten

Claude Code kann Teilaufgaben an eigenständige Unteragenten vergeben. Jede Delegation steht hier mit dem wörtlichen
Auftrag (im Workflow-Skript).

| Nr. | Datum | Ausgelöst durch Prompt | Agent-Typ | Auftrag (kurz) | Ergebnis | Geprüft durch |
|-----|-------|------------------------|-----------|----------------|----------|---------------|
| D01 | 27.10.2026 | 01 | Workflow „fs2-kritik-umsetzen“ (4 Unteragenten, einer mit Websuche) | Vorschläge, wie die Kritik an Fallstudie 1 in Fallstudie 2 umgesetzt wird: Bilder, Inhalt/Modelle, Zeit/Vortrag, „weniger nüchtern“ | 43 Vorschläge (Inhalt 10, Bilder 13, Zeit 9, Gestaltung 11) mit Quellen, offene Fragen an Prof. Stenger | Claude: drei Kernbefunde im Repository nachgeprüft |
| D02 | 30.10.2026 | 04 | Workflow „fs2-recherche-gestaltung“ (27 Unteragenten, mit Websuche) | Recherche in 8 Bereichen mit je einer Gegenprüfung; 3 Gestaltungsrichtungen mit Musterfolie; 2 Jurys; Dossier und Gestaltungsplan; Schlussprüfung | läuft | – |
| D03 | 30.10.2026 | 06 | Workflow „fs2-schlusspruefung-rest“ (3 Unteragenten, mit Websuche) | Rest von D02: Korrekturen der Schlussprüfung ins Dossier fertig einarbeiten; Gestaltungsplan prüfen und Befunde einarbeiten | läuft | – |

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
- **Ergebnis:** *(läuft)*
- **Wie Claude das Ergebnis geprüft hat:** *(folgt)*

### D03 – 30.10.2026 – ausgelöst durch Prompt 06

- **Art:** Workflow „fs2-schlusspruefung-rest“ mit 3 Unteragenten: (1) Korrekturen der Schlussprüfung ins Dossier
  fertig einarbeiten, Anhang A.9 ausfüllen, Zählung und Quellennummern per Skript prüfen; (2) parallel Schlussprüfung
  des Gestaltungsplans (nur lesend); (3) danach Einarbeitung dieser Befunde in den Gestaltungsplan.
- **Auftrag (wörtlich):** im Skript [`workflows/2026-10-30_fs2-schlusspruefung-rest.js`](workflows/2026-10-30_fs2-schlusspruefung-rest.js).
- **Ergebnis:** *(läuft)*
- **Wie Claude das Ergebnis geprüft hat:** *(folgt)*

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
