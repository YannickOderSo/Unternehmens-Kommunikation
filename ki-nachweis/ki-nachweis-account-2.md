# KI-Nachweis – Account 2 (Bau der Web-Präsentation Fallstudie 1)

**Gruppe:** Yannick Heisler · Elias Knauber · Lukas Welker
**Modul:** Unternehmenskommunikation, Prof. Dr. Daniel Stenger, Hochschule Kaiserslautern

Diese Datei dokumentiert die KI-Nutzung im **zweiten Claude-Code-Account** von Yannick Heisler. Aufbau wie
[`ki-nachweis.md`](ki-nachweis.md) (Account 1); Nummern mit Vorsatz **A2-**, damit sie sich beim Zusammenführen
nicht mit Account 1 überschneiden.

1. **Prompts an Claude Code** (Account 2)
2. **Delegationen an Unteragenten** (Workflow und einzelne Unteragenten)

**Tool:** Claude Code (Anthropic), Cloud-Sitzung: https://claude.ai/code/session_01WENvSKE982i3xiS8DSDQ8j
**Branch:** `praesentation-account-2` (von `master` abgezweigt am 14.10.2026, Stand `bd71310`)
**Übergabe von Account 1:** [`uebergaben/2026-10-14_account-2_praesentation.md`](uebergaben/2026-10-14_account-2_praesentation.md) (Ü01 in `ki-nachweis.md`)
**Rohdaten:** [`rohprotokoll.jsonl`](rohprotokoll.jsonl) – schreibt der Hook automatisch (Einträge mit
`"sitzung": "de57a793-3a57-5bbc-8922-be77d2a31fa2"` stammen aus dieser Sitzung)

---

## 1. Prompts an Claude Code

Person bei allen Einträgen: **Yannick Heisler (Account 2)**, sofern nicht anders angegeben. Prompts stehen wörtlich (inkl. Tippfehler).

| Nr. | Datum | Von | Inhalt (kurz) | Unteragenten | Ergebnis |
|-----|-------|-----|---------------|--------------|----------|
| A2-01 | 14.10.2026 | Yannick (Account 2) | Übergabe-Prompt: Web-Präsentation ab „Fundament“ zu Ende bauen | A2-D01 (Workflow) | *in Arbeit* |
| A2-02 | 14.10.2026 | System | Automatischer Hinweis: nicht committete Änderungen | – | Commit + Push |

### A2-01 – 14.10.2026 – Yannick Heisler (Account 2)

> Du arbeitest im GitHub-Repository YannickOderSo/Unternehmens-Kommunikation (Gruppenarbeit im Modul Unternehmenskommunikation, Hochschule Kaiserslautern; Gruppe: Yannick Heisler, Elias Knauber, Lukas Welker; Marke: HOLY). Eine andere Claude-Code-Sitzung (Account 1) arbeitet parallel auf dem Branch master. Du übernimmst den Bau der Web-Präsentation für Fallstudie 1 (Präsentation am 26.10.2026). Das ist ein freigegebenes Arbeitspaket: Bau die Präsentation bis zum Ende, ohne nach jedem Schritt auf Freigabe zu warten.
>
> ZUERST LESEN
> - CLAUDE.md (Regeln, KI-Nachweis), README.md, fallstudie-1-brand-persona/README.md, methoden.md, folienentwuerfe.md
> - fallstudie-1-brand-persona/praesentation/_entwuerfe/JURY.md (Bewertung der drei Gestaltungsrichtungen)
> - ki-nachweis/workflows/2026-10-13_praesentation-layout.js – das ursprüngliche Workflow-Skript; darin stehen alle Anforderungen und alle Agenten-Aufträge im Wortlaut.
>
> ZUSAMMENARBEIT (damit nichts kollidiert)
> 1. Lege den Branch praesentation-account-2 von master an und arbeite nur dort. Committe und pushe nach jeder abgeschlossenen Phase – Nutzungslimits können die Sitzung unterbrechen, Gepushtes geht nicht verloren. Nicht nach master mergen; das macht Account 1.
> 2. Ändere nur Dateien unter fallstudie-1-brand-persona/praesentation/ sowie deine eigenen Nachweisdateien (Punkt 3).
> 3. KI-Nachweis – abweichend von CLAUDE.md: Führe deine Einträge in ki-nachweis/ki-nachweis-account-2.md (gleicher Aufbau wie ki-nachweis/ki-nachweis.md: Abschnitt 1 jeder Prompt wörtlich mit Vorgehen, Dateien, Unteragenten, Prüfstatus; Abschnitt 2 jede Delegation an Unteragenten oder Workflows mit Auftrag). Person: Yannick Heisler (Account 2). Erster Eintrag: dieser Prompt. Lege jedes Workflow-Skript zusätzlich unter ki-nachweis/workflows/ ab (Dateiname mit Datum und „account-2“). ki-nachweis/rohprotokoll.jsonl schreibt der Hook in .claude/settings.json automatisch – nicht von Hand ändern.
> 4. Fakten über HOLY nur aus fallstudie-1-brand-persona/recherche/holy-recherche.md (entsteht gerade auf master; mit git fetch origin master holen). Solange es fehlt: Markenname „HOLY“ eintragen, Inhalte als Beispieldaten kennzeichnen, Farben neutral lassen. Keine Fakten, Zahlen oder Logos erfinden.
>
> STAND
> - Web-Präsentation (HTML/CSS/JS), läuft offline per Doppelklick auf index.html, keine CDNs, keine externen Schriften. Wunsch von Yannick: modernes Design mit Animationen und interaktivem Touch – Live-Umfrage per QR-Code, klickbare Navigation über das Markensteuerrad, Einstieg mit Publikum (Rätsel „Welche Marke steckt dahinter?“). Farben jetzt neutral, später HOLY-Farben über marke.js.
> - Fertig: drei Gestaltungsrichtungen in praesentation/_entwuerfe/ und die Jury (JURY.md). Standard ist „Editorial“ (richtung-1) – Gleichstand mit „Bento hell“ – mit den in JURY.md genannten Übernahmen aus den anderen Richtungen und unter Beachtung der Warnungen (u. a. Fraunces-Gewichte ≥ 450, Linien 2 px, Feldtönungen 18–22 %, Hub höchstens ca. 40 sichtbare Wörter, Prozentwerte per JavaScript aus Stimmenzahlen, keine Bedienhinweise auf der Beamer-Folie, Kontraste auch auf Feldflächen prüfen).
> - Begonnen, aber durch ein Nutzungslimit abgebrochen: das Fundament (Engine). Unter praesentation/ liegen unvollständige Dateien (css/, js/, marke.js, schriften/, bilder/, werkzeuge/zusammenbauen.py, werkzeuge/vorlage.html); es fehlen u. a. AUTOREN.md, werkzeuge/pruefen.mjs und folien/. Prüfe sie und baue darauf auf oder ersetze sie.
>
> AUFTRAG
> Führe die Arbeit ab der Phase „Fundament“ zu Ende: Fundament → Folien (sieben Gruppen) → Prüfung → Überarbeitung → Integration & Export → Abschlussprüfung → Feinschliff. Nutze dafür einen Workflow mit mehreren Unteragenten. Erzeuge das neue Skript aus dem vorhandenen:
> - Phasen „Gestaltung“ und „Bewertung“ entfallen; Sieger (richtung-1, Editorial) sowie Übernahmen und Warnungen aus JURY.md als Konstanten einsetzen.
> - Alle übrigen Agenten-Aufträge inhaltlich unverändert lassen; zusätzlich: Markenname HOLY in marke.js, HOLY-Fakten nur aus dem Recherche-Dossier (siehe oben).
> - Pfade anpassen: REPO = dein Klon, TOOLS = eigener Ordner in deinem Scratchpad, Chromium unter /opt/pw-browsers/ (nicht „playwright install“ ausführen).
> - Werkzeuge vorher in TOOLS installieren: npm install playwright-core@1.56.1 qrcode-generator@2.0.4 @fontsource-variable/inter @fontsource-variable/inter-tight @fontsource-variable/fraunces @fontsource-variable/plus-jakarta-sans @fontsource-variable/bricolage-grotesque @fontsource-variable/space-grotesk @fontsource-variable/manrope @fontsource-variable/dm-sans @fontsource/instrument-serif
> - Nach einer Unterbrechung den Workflow mit resume fortsetzen statt neu zu starten.
>
> FERTIG, WENN
> fallstudie-1-brand-persona/praesentation/index.html vollständig, geprüft und offline lauffähig ist; export/praesentation.pdf und export/uebersicht.png existieren; LIESMICH.md und QUELLEN.md vollständig sind; alles auf praesentation-account-2 gepusht ist und ki-nachweis/ki-nachweis-account-2.md jeden Prompt und jede Delegation enthält. Gib zum Schluss eine kurze Zusammenfassung (Stand, offene Punkte, letzter Commit), die Yannick an Account 1 weitergeben kann.

- **Herkunft des Textes:** identisch mit dem Übergabe-Prompt von Account 1
  ([`uebergaben/2026-10-14_account-2_praesentation.md`](uebergaben/2026-10-14_account-2_praesentation.md)); von Claude
  zeichengenau gegen den Eintrag im Rohprotokoll (14.10.2026, 02:52:28 Uhr) geprüft.
- **Vorgehen Claude:**
  - Pflichtlektüre gelesen (CLAUDE.md, README.md, Fallstudien-README, methoden.md, folienentwuerfe.md, JURY.md,
    Workflow-Skript von D01) und das unvollständige Fundament gesichtet.
  - Branch `praesentation-account-2` von `master` angelegt (ohne Upstream auf `master`, damit kein Push dorthin geht).
  - Werkzeuge im Scratchpad installiert (playwright-core 1.56.1, qrcode-generator 2.0.4, Schriften von Fontsource);
    Chromium aus `/opt/pw-browsers/` getestet.
  - Neues Workflow-Skript aus dem Original erzeugt (Änderungen stehen im Kopf des Skripts): Phasen „Gestaltung“ und
    „Bewertung“ entfernt, Jury-Ergebnis als Konstanten (Listen wörtlich aus JURY.md), Pfade angepasst, Marke HOLY und
    Dossier-Pflicht in den Rahmenregeln, Fortsetzungshinweis für das Fundament.
  - **Abweichung:** In dieser Sitzung gibt es kein Workflow-Werkzeug. Das Skript wird deshalb mit einer
    Ausführungshilfe abgearbeitet, die die Aufträge wörtlich als Dateien erzeugt; Claude startet für jeden Auftrag einen
    Unteragenten mit dem Agent-Werkzeug und setzt nach jeder Stufe mit den gespeicherten Rückgaben fort (siehe A2-D01).
  - HOLY-Dossier (`fallstudie-1-brand-persona/recherche/holy-recherche.md`) lag beim Start noch nicht auf `master` →
    Markenname „HOLY“, Inhalte als Beispieldaten, Farben neutral.
- **Ergebnis:** *in Arbeit*
- **Unteragenten:** A2-D01
- **Prüfung durch die Gruppe:** ☐ offen

### A2-02 – 14.10.2026 – Systemhinweis (kein Prompt der Gruppe)

> Stop hook feedback:
> [~/.claude/stop-hook-git-check.sh]: There are uncommitted changes in the repository. Please commit and push these changes to the remote branch.

- **Herkunft:** automatische Prüfung der Cloud-Umgebung am Ende einer Antwort, nicht von der Gruppe geschrieben
- **Vorgehen Claude:** offene Änderung (neuer Eintrag des Hooks im Rohprotokoll für die Delegation A2-D01.01) und
  diesen Eintrag committet und gepusht
- **Unteragenten:** keine

---

## 2. Delegationen an Unteragenten

| Nr. | Datum | Ausgelöst durch Prompt | Agent-Typ | Auftrag (kurz) | Ergebnis | Geprüft durch |
|-----|-------|------------------------|-----------|----------------|----------|---------------|
| A2-D01 | 14.10.2026 | A2-01 | Workflow „praesentation-account-2“ (ausgeführt über das Agent-Werkzeug, bis zu 27 Unteragenten vom Typ general-purpose) | Web-Präsentation ab „Fundament“ bauen, prüfen, überarbeiten, integrieren, exportieren | *läuft* | – |

### A2-D01 – 14.10.2026 – ausgelöst durch Prompt A2-01

- **Art:** Workflow „praesentation-account-2“ – abgeleitet aus D01 (Account 1). Jeder Unteragent bekommt einen festen
  Auftrag; die Rückgaben fließen in die nächste Stufe.
- **Auftrag (wörtlich):**
  - Skript: [`workflows/2026-10-14_praesentation-account-2.js`](workflows/2026-10-14_praesentation-account-2.js)
    (alle Agenten-Aufträge als Textvorlagen; Änderungen gegenüber D01 im Kopfkommentar)
  - Ausführungshilfe: [`workflows/2026-10-14_praesentation-account-2_ausfuehrung.mjs`](workflows/2026-10-14_praesentation-account-2_ausfuehrung.mjs)
  - jeder einzelne Auftrag so, wie ihn der Unteragent erhalten hat:
    [`workflows/2026-10-14_praesentation-account-2_auftraege/`](workflows/2026-10-14_praesentation-account-2_auftraege/)
  - Rückgaben der Unteragenten (JSON):
    [`workflows/2026-10-14_praesentation-account-2_rueckgaben/`](workflows/2026-10-14_praesentation-account-2_rueckgaben/)
  - Nachricht an jeden Unteragenten (Agent-Werkzeug, automatisch im Rohprotokoll als `"art": "delegation"`; Label,
    Phase und Dateiname je Agent eingesetzt):
    > Du bist Unteragent im Workflow „praesentation-account-2“ (Web-Präsentation für Fallstudie 1, Repository
    > /home/user/Unternehmens-Kommunikation, Branch praesentation-account-2). Label: „…“, Phase „…“.
    >
    > Dein Auftrag steht wörtlich in der Datei …/2026-10-14_praesentation-account-2_auftraege/….md. Lies die Datei
    > vollständig (alle Zeilen, notfalls in mehreren Teilen) und führe den Auftrag genau aus. Halte dich an die
    > Rahmenregeln darin (u. a. keine git-Commits, ki-nachweis/ nicht bearbeiten – nur lesen). Gib alle verwendeten
    > Quellen (Schriften, Bibliotheken, Icons, Fachliteratur) mit Lizenz und Herkunft im Feld „quellen“ an und
    > kennzeichne Inhalte aus deinem Modellwissen. Schreibe zum Schluss deine Rückgabe als gültiges JSON in die im
    > Auftrag genannte Datei und antworte mit einer kurzen Zusammenfassung.
- **Vorgaben an alle Unteragenten** (Rahmenregeln im Skript): Marke HOLY; Fakten über HOLY nur aus dem Recherche-Dossier
  mit Quelle und Faktenstatus, sonst sichtbar gekennzeichnete Beispieldaten; nichts erfinden; alles offline lauffähig;
  fremde Schriften/Bibliotheken mit Lizenz und Herkunft melden (Feld `quellen`); Unsicherheiten bei Modellinhalten
  kennzeichnen; KI-Nachweis und Git nicht selbst anfassen.
- **Stufen und Unteragenten:**

  | Nr. | Stufe | Unteragent (Label) | Auftrag | Ergebnis | Wie Claude das Ergebnis geprüft hat |
  |-----|-------|--------------------|---------|----------|-------------------------------------|
  | A2-D01.01 | Fundament | Engine & Designsystem | [engine-designsystem.md](workflows/2026-10-14_praesentation-account-2_auftraege/engine-designsystem.md) | *läuft* | – |

- **Ergebnis:** *läuft*
- **Wie Claude das Ergebnis geprüft hat:** *folgt nach Abschluss*

---

## 3. Wie dieser Nachweis entsteht

| Baustein | Was | Wie |
|----------|-----|-----|
| `rohprotokoll.jsonl` | jeder Prompt an Claude Code und jede Delegation an einen Unteragenten, wörtlich mit Zeitstempel | automatisch über den Hook in `.claude/settings.json` (gemeinsam mit Account 1; Zusammenführung per `merge=union`) |
| `workflows/2026-10-14_praesentation-account-2*` | Skript, Ausführungshilfe, alle Aufträge und Rückgaben | legt Claude (Account 2) ab und committet sie nach jeder Stufe |
| Abschnitt 1 und 2 | lesbare Fassung mit Vorgehen, Ergebnis und Prüfstatus | pflegt Claude (Account 2) nach jedem Prompt und jeder Stufe |
| Git-Verlauf (Branch `praesentation-account-2`) | wann welche Datei entstanden ist | Commit und Push nach jeder abgeschlossenen Phase |
