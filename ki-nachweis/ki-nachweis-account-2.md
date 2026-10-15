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
| A2-03 | 14.10.2026 | Yannick (Account 2) | Um 7 Uhr prüfen, ob Account 1 neu gepusht hat | – | Prüfung um 07:00 Uhr geplant |
| A2-04 | 14.10.2026 | System | Container-Neustart: Fundament-Agent unterbrochen, Workflow-Werkzeug nun verfügbar | A2-D01.01 fortgesetzt | Zwischenstand gesichert |
| A2-05 | 14.10.2026 | System | Automatischer Hinweis: nicht versionierte Dateien (Testausgaben) | – | `.gitignore` für Testordner |
| A2-06 | 14.10.2026 | System | Workflow-Lauf `wf_878fd85d-3f2` durch Nutzungslimit abgebrochen; Neustart der Sitzung | A2-D01 (fortgesetzt) | Skript ergänzt, Workflow mit resume fortgesetzt |
| A2-07 | 14.10.2026 | System (Routine aus A2-03) | Geplante Prüfung „7 Uhr: master auf neuen Push prüfen“ (zugestellt erst 11:58 Uhr) | – | neuer Commit auf master ohne Dossier; kein Merge |
| A2-08 | 14.10.2026 | System | Zweiter Abbruch des Workflows durch Nutzungslimit; mehrere Neustarts der Sitzung | A2-D01 | Zwischenstand gesichert |
| A2-09 | 14.10.2026 | Yannick (Account 2) | Limit zurückgesetzt – weitermachen | A2-D01 (fortgesetzt) | Dossier übernommen, Skript gehärtet, Workflow mit resume fortgesetzt |
| A2-10 | 14.10.2026 | System | Dritter Abbruch des Workflows durch Nutzungslimit; Neustarts der Sitzung | A2-D01 | Zwischenstand gesichert |
| A2-11 | 14.10.2026 | Yannick (Account 2) | Frage: Mit wem Interviews führen, sind sie Pflicht? | – | Antwort im Chat (aus Aufgabe, methoden.md, Dossier) |
| A2-12 | 14.10.2026 | Yannick (Account 2) | Limit zurückgesetzt – weitermachen | A2-D01 (fortgesetzt) | Workflow mit resume fortgesetzt |
| A2-13 | 14./15.10.2026 | System | Vierter Abbruch des Workflows durch Nutzungslimit | A2-D01 | Zwischenstand gesichert |
| A2-14 | 15.10.2026 | Yannick (Account 2) | „Weiter“ | A2-D01 (fortgesetzt) | master übernommen, Workflow mit resume fortgesetzt |
| A2-15 | 15.10.2026 | System | Fünfter Abbruch des Workflows durch Nutzungslimit (Überarbeitung) | A2-D01 | Zwischenstand gesichert |
| A2-16 | 15.10.2026 | Yannick (Account 2) | Limit zurückgesetzt – weitermachen | A2-D01 (fortgesetzt) | Workflow mit resume fortgesetzt |
| A2-17 | 15.10.2026 | System | Sechster Abbruch des Workflows durch Nutzungslimit (Überarbeitung) | A2-D01 | Zwischenstand gesichert |
| A2-18 | 16.10.2026 | Yannick (Account 2) | „Erneut versuchen“ | A2-D01 (fortgesetzt) | master übernommen, Workflow mit resume fortgesetzt |

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

### A2-03 – 14.10.2026 – Yannick Heisler (Account 2)

> Da der Kontigent vom Master account fast aufgebraucht ist schaue spätestens nochmal um 7 uhr wenn sich sein Kontigent erneuert nach ob ein neuer push da ist

- **Vorgehen Claude:** `master` sofort geprüft (03:00 Uhr: kein neuer Commit, letzter Stand `bd71310`, HOLY-Dossier
  noch nicht vorhanden). Eine einmalige Erinnerung an diese Sitzung für **07:00 Uhr (Berlin)** angelegt (Werkzeug
  `send_later`, Routine „7 Uhr: master auf neuen Push prüfen“). Dann: `git fetch origin master`; liegt ein neuer Push vor
  (vor allem `fallstudie-1-brand-persona/recherche/holy-recherche.md`), wird `master` per Merge-Commit in
  `praesentation-account-2` übernommen und das Dossier in die laufende Stufe eingespeist; sonst stündlich erneut prüfen,
  höchstens bis 10 Uhr. Zwischendurch prüft Claude `master` bei jeder abgeschlossenen Stufe.
- **Ergebnis:** Prüfung geplant; Ergebnis folgt als eigener Eintrag
- **Unteragenten:** keine
- **Prüfung durch die Gruppe:** ☐ offen

### A2-04 – 14.10.2026 – Systemhinweis (kein Prompt der Gruppe)

> The container was restarted. The following background tasks were running and are now stopped:
> - Fundament: Engine & Designsystem (task …)

- **Herkunft:** automatische Meldung der Umgebung (ca. 03:15 Uhr), nicht von der Gruppe geschrieben
- **Vorgehen Claude:** Zwischenstand des Fundaments committet und gepusht (`33afd3f`), den unterbrochenen Unteragenten
  A2-D01.01 mit seinem gespeicherten Verlauf fortgesetzt (Nachricht über SendMessage, siehe A2-D01). Nach dem Neustart
  steht in der Sitzung das Workflow-Werkzeug zur Verfügung: Das Skript wurde so ergänzt, dass die Fundament-Rückgabe
  als `args.engine` übergeben werden kann; ab Phase „Folien“ läuft der Workflow mit dem Workflow-Werkzeug (`b308d45`).
- **Unteragenten:** A2-D01.01 (fortgesetzt)

### A2-05 – 14.10.2026 – Systemhinweis (kein Prompt der Gruppe)

> Stop hook feedback:
> [~/.claude/stop-hook-git-check.sh]: There are untracked files in the repository. Please commit and push these changes to the remote branch.

- **Herkunft:** automatische Prüfung der Cloud-Umgebung, nicht von der Gruppe geschrieben
- **Vorgehen Claude:** Die nicht versionierten Dateien waren Testausgaben des Fundament-Agenten (`praesentation/_test/`).
  Statt sie zu committen: `praesentation/.gitignore` für die Testordner angelegt; committet und gepusht.
- **Unteragenten:** keine

### A2-06 – 14.10.2026 – Systemhinweise (kein Prompt der Gruppe)

> Benachrichtigung: Workflow „Web-Präsentation Fallstudie 1 ab Fundament …“ failed: Error: Integration nicht fertig
> geworden – alle sieben Folien-Agenten und der Integrations-Agent mit „You've hit your session limit · resets 5:50am (UTC)“.
> Danach: „This session's worker process was restarted. …“

- **Herkunft:** automatische Meldungen der Umgebung, nicht von der Gruppe geschrieben
- **Stand:** Kein Unteragent des Laufs `wf_878fd85d-3f2` wurde fertig. Drei Folien-Agenten hatten schon Dateien angelegt
  (`01-einstieg`, `03-markenkompetenz`, `04-persona`, jeweils HTML/CSS/JS, unvollständig) – als Zwischenstand gesichert.
- **Vorgehen Claude (ca. 12:00 Uhr):** Workflow-Skript ergänzt – Hinweis im Folien-Auftrag, dass Dateien aus dem
  abgebrochenen Lauf unvollständig vorliegen können; Abbruch statt Integration, wenn keine Folien-Gruppe fertig wird
  (sonst würde die Integration bei einem Nutzungslimit alle Folien selbst bauen wollen). Danach den Workflow mit
  `resumeFromRunId` fortgesetzt (gleiches Skript, gleiche `args`).
- **Unteragenten:** A2-D01 (fortgesetzt)

### A2-07 – 14.10.2026 – Systemhinweis (kein Prompt der Gruppe): geplante Prüfung aus A2-03

> Geplante Prüfung (auf Yannicks Wunsch, Prompt A2-03): Es ist 7 Uhr (Berlin). Prüfe mit git fetch origin master, ob
> Account 1 neue Commits auf master gepusht hat – vor allem das HOLY-Dossier
> fallstudie-1-brand-persona/recherche/holy-recherche.md. Falls ja: master in praesentation-account-2 mergen
> (Merge-Commit, kein Rebase), Dossier sichten und HOLY-Fakten (mit Quelle und Faktenstatus) in die laufende bzw.
> nächste Workflow-Stufe einfließen lassen (marke.js-Farben nur mit belegter Quelle). Falls nein: in einer Stunde erneut
> prüfen (send_later), höchstens bis 10 Uhr. Systemhinweis im KI-Nachweis Account 2 vermerken, committen und pushen.
> Danach mit dem Präsentationsbau weitermachen.

- **Herkunft:** von Claude in A2-03 angelegte Erinnerung (Routine), ausgelöst 07:00 Uhr, in dieser Sitzung erst um
  11:58 Uhr angekommen (Sitzung war bis dahin durch das Nutzungslimit blockiert)
- **Ergebnis der Prüfung (11:59 Uhr):** Auf `master` liegt ein neuer Commit von Account 1 (`b04a6bc`, 09:57 Uhr:
  „KI-Nachweis: dritte Unterbrechung durch Nutzungslimit, Recherche D03 fortgesetzt“ – nur `ki-nachweis.md` und
  Rohprotokoll). Das HOLY-Dossier liegt **noch nicht** vor.
- **Vorgehen Claude:** Kein Merge, weil der neue Commit nur den Nachweis von Account 1 betrifft und für die Präsentation
  nichts bringt (Account 1 führt später ohnehin zusammen). Die stündliche Nachprüfung bis 10 Uhr entfällt, weil 10 Uhr
  bei Zustellung schon vorbei war; stattdessen prüft Claude `master` weiter bei jeder abgeschlossenen Workflow-Stufe und
  vor der Integration. Bis dahin gilt: Name HOLY, Inhalte als Beispieldaten, Farben neutral.
- **Unteragenten:** keine

### A2-08 – 14.10.2026 – Systemhinweise (kein Prompt der Gruppe)

> Benachrichtigung: Workflow „Web-Präsentation Fallstudie 1 ab Fundament …“ failed: Error: Integration nicht fertig
> geworden – „You've hit your session limit · resets 2:50pm (UTC)“ bei 8 von 10 Unteragenten.
> Danach viermal: „This session's worker process was restarted. …“

- **Herkunft:** automatische Meldungen der Umgebung, nicht von der Gruppe geschrieben
- **Stand:** Fertig wurden die Folien-Agenten „Einstieg & Vorgehen“ (f01, f01b, f02) und „Markenkompetenz, Persona,
  Limbic Map“ (f03–f05). Gescheitert: die übrigen fünf Folien-Agenten, beide gestarteten Prüf-Agenten und die
  Integration. Schwachstelle im Skript entdeckt: Ein gescheiterter Prüf-Agent wurde wie „keine Befunde“ behandelt, und
  die Integration startete trotz fehlender Gruppen.

### A2-09 – 14.10.2026 – Yannick Heisler (Account 2)

> Ich habe mein Nutzungslimit erreicht, während du gearbeitet hast, aber es wurde inzwischen zurückgesetzt. Bitte mache dort weiter, wo du aufgehört hast.

- **Vorgehen Claude (16:52 Uhr):**
  - Zwischenstand der Folien committet (`1580d7e`).
  - `master` geprüft: Das **HOLY-Recherche-Dossier** liegt jetzt vor (`d42f681`, dazu `58e3906`). `master` per
    Merge-Commit übernommen (`bd5f568`, kein Rebase). Damit gilt ab jetzt die Regel aus dem Auftrag: Fakten über HOLY
    nur aus `fallstudie-1-brand-persona/recherche/holy-recherche.md` mit Quelle und Faktenstatus. Die schon gebauten
    Folien f01–f05 entstanden noch ohne Dossier; die Prüf-Agenten sehen das Dossier und melden fehlende Fakten als Befund.
  - Workflow-Skript gehärtet: Ein gescheiterter Prüf- oder Überarbeitungs-Agent lässt die Gruppe unfertig; fehlt eine
    Gruppe, bricht der Workflow vor der Integration ab und wird später mit resume fortgesetzt. Die Agenten-Aufträge
    selbst sind unverändert, damit die zwei fertigen Folien-Agenten aus dem Zwischenspeicher kommen.
  - Workflow `wf_878fd85d-3f2` mit `resumeFromRunId` fortgesetzt.
- **Ergebnis:** *in Arbeit*
- **Unteragenten:** A2-D01 (fortgesetzt)
- **Prüfung durch die Gruppe:** ☐ offen

### A2-10 – 14.10.2026 – Systemhinweise (kein Prompt der Gruppe)

> Benachrichtigung: Workflow „Web-Präsentation Fallstudie 1 ab Fundament …“ failed: Error: Keine Folien-Gruppe fertig
> geworden – später mit resume fortsetzen („You've hit your session limit · resets 7:50pm (UTC)“ bei 7 Unteragenten).
> Danach zweimal: „This session's worker process was restarted. …“

- **Herkunft:** automatische Meldungen der Umgebung, nicht von der Gruppe geschrieben
- **Stand:** Fertig sind jetzt die Folien-Agenten für fünf von sieben Gruppen (Einstieg & Vorgehen; Markenkompetenz,
  Persona, Limbic Map; Repertory Grid & Laddering; Analogien & Live-Umfrage; Kommunikationsanalyse). Alle Prüf-Agenten
  sowie „Synthese, Fazit, Fragen“ und „Backup“ scheiterten am Limit. Die Härtung aus A2-09 griff: keine Integration.

### A2-11 – 14.10.2026 – Yannick Heisler (Account 2)

> Mit wem sollen die interviews geführt werden? Und sind diese wirklich pflicht?

- **Vorgehen Claude:** Aufgabenstellung (`fallstudie-1-brand-persona/README.md`), `methoden.md`, `arbeitsplan.md`,
  `prompts.md` und das HOLY-Dossier (Kap. 4.1, 4.3, 4.5, 10.2) gelesen und im Chat geantwortet: Die Interviews sind laut
  Aufgabenfolie **keine Pflicht** („insbesondere Desk Research und KI-Tools“); sie sind ein Vorschlag aus
  `methoden.md`/`arbeitsplan.md` (Account 1, Modellwissen) zur Absicherung der KI-simulierten Befragten.
  Empfehlung: 3–5 Kurzinterviews à ca. 10 Min. mit Personen aus der Zielgruppe laut Dossier (ab 18, Kern 25–40,
  Schicht- und Büroberufe, Studierende; Nutzer:innen zuckerfreier Softdrinks/Energy Drinks), Inhalt: Triaden fürs
  Repertory Grid, Laddering ab den Attributen, Analogie-Fragen. Ohne Interviews müssen Quellenzeilen und Sprechtext
  („KI-simulierte Befragte + Kurzinterviews“) angepasst werden.
- **Ergebnis:** Antwort im Chat; keine Dateien geändert (außer diesem Nachweis)
- **Unteragenten:** keine
- **Prüfung durch die Gruppe:** ☐ offen – Entscheidung Interviews ja/nein, ggf. bei Prof. Stenger nachfragen

### A2-12 – 14.10.2026 – Yannick Heisler (Account 2)

> Ich habe mein Nutzungslimit erreicht, während du gearbeitet hast, aber es wurde inzwischen zurückgesetzt. Bitte mache dort weiter, wo du aufgehört hast.

- **Vorgehen Claude (21:52 Uhr):** Zwischenstand committet (`8dc24f6`), Workflow `wf_878fd85d-3f2` mit
  `resumeFromRunId` fortgesetzt (fünf fertige Folien-Agenten aus dem Zwischenspeicher).
- **Ergebnis:** *in Arbeit*
- **Unteragenten:** A2-D01 (fortgesetzt)
- **Prüfung durch die Gruppe:** ☐ offen

### A2-13 – 14./15.10.2026 – Systemhinweis (kein Prompt der Gruppe)

> Benachrichtigung: Workflow „Web-Präsentation Fallstudie 1 ab Fundament …“ failed: Error: Keine Folien-Gruppe fertig
> geworden – später mit resume fortsetzen („You've hit your session limit · resets 12:50am (UTC)“ bei 7 Unteragenten).

- **Herkunft:** automatische Meldung der Umgebung, nicht von der Gruppe geschrieben
- **Stand:** Alle sieben Folien-Agenten fertig; Prüfungen fertig für „Einstieg & Vorgehen“ und „Markenkompetenz,
  Persona, Limbic Map“. Gescheitert: fünf Prüfungen und die zwei ersten Überarbeitungen.

### A2-14 – 15.10.2026 – Yannick Heisler (Account 2)

> Weiter

- **Vorgehen Claude (17:27 Uhr):** Zwischenstand committet (`aded21a`). `master` geprüft: neun neue Commits von
  Account 1 (u. a. Rollenverteilung: Bündel A + Markensteuerrad Yannick, B Lukas, C Elias; echte Interviews durch Lukas
  geplant; Dossier leicht aktualisiert) – per Merge-Commit übernommen (`451663b`). Workflow `wf_878fd85d-3f2` mit
  `resumeFromRunId` fortgesetzt (neun fertige Agenten aus dem Zwischenspeicher).
- **Ergebnis:** *in Arbeit*
- **Unteragenten:** A2-D01 (fortgesetzt)
- **Prüfung durch die Gruppe:** ☐ offen

### A2-15 – 15.10.2026 – Systemhinweis (kein Prompt der Gruppe)

> Benachrichtigung: Workflow „Web-Präsentation Fallstudie 1 ab Fundament …“ failed: Error: Keine Folien-Gruppe fertig
> geworden – später mit resume fortsetzen („You've hit your session limit · resets 5:40pm (UTC)“ bei allen sieben
> Überarbeitungs-Agenten). Danach: „This session's worker process was restarted. …“

- **Herkunft:** automatische Meldungen der Umgebung, nicht von der Gruppe geschrieben
- **Stand:** Alle sieben Folien-Gruppen gebaut und geprüft (14 Agenten fertig); alle sieben Überarbeitungen am Limit
  gescheitert (Teiländerungen an `folien/02-vorgehen.html` als Zwischenstand gesichert, `f646a41`).

### A2-16 – 15.10.2026 – Yannick Heisler (Account 2)

> Ich habe mein Nutzungslimit erreicht, während du gearbeitet hast, aber es wurde inzwischen zurückgesetzt. Bitte mache dort weiter, wo du aufgehört hast.

- **Vorgehen Claude (19:42 Uhr):** Zwischenstand committet (`f646a41`), `master` geprüft (nichts Neues seit A2-14),
  Workflow `wf_878fd85d-3f2` mit `resumeFromRunId` fortgesetzt (14 fertige Agenten aus dem Zwischenspeicher; es laufen
  die sieben Überarbeitungen, danach Integration, Abschlussprüfung, Feinschliff).
- **Ergebnis:** *in Arbeit*
- **Unteragenten:** A2-D01 (fortgesetzt)
- **Prüfung durch die Gruppe:** ☐ offen

### A2-17 – 15.10.2026 – Systemhinweis (kein Prompt der Gruppe)

> Benachrichtigung: Workflow „Web-Präsentation Fallstudie 1 ab Fundament …“ failed: Error: Folien-Gruppen unvollständig
> (Repertory Grid & Laddering, Analogien & Live-Umfrage, Kommunikationsanalyse, Synthese, Fazit, Fragen, Backup) – mit
> resume fortsetzen („You've hit your session limit · resets 10:40pm (UTC)“ bei fünf Überarbeitungs-Agenten).
> Danach: „This session's worker process was restarted. …“

- **Herkunft:** automatische Meldungen der Umgebung, nicht von der Gruppe geschrieben
- **Stand:** 16 Agenten fertig – alle Folien gebaut und geprüft; Überarbeitung fertig für „Einstieg & Vorgehen“ und
  „Markenkompetenz, Persona, Limbic Map“; die übrigen fünf Überarbeitungen abgebrochen (Teiländerungen gesichert, `aaf6db0`).

### A2-18 – 16.10.2026 – Yannick Heisler (Account 2)

> Erneut versuchen

- **Vorgehen Claude (00:07 Uhr):** Zwischenstand committet (`aaf6db0`), `master` übernommen (Anleitung
  Persona-Datenerhebung, `methoden.md`; Merge-Commit `dad8514`), Workflow `wf_878fd85d-3f2` mit `resumeFromRunId`
  fortgesetzt (16 fertige Agenten aus dem Zwischenspeicher). Hinweis: Laut Meldung wird das Limit erst um 00:40 Uhr
  zurückgesetzt; scheitern die Agenten sofort, setzt Claude danach erneut fort.
- **Ergebnis:** *in Arbeit*
- **Unteragenten:** A2-D01 (fortgesetzt)
- **Prüfung durch die Gruppe:** ☐ offen

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
  | A2-D01.01 | Fundament | Engine & Designsystem (Agent-Werkzeug, general-purpose; nach Container-Neustart fortgesetzt, ca. 38 min, 105 Werkzeugaufrufe) | [engine-designsystem.md](workflows/2026-10-14_praesentation-account-2_auftraege/engine-designsystem.md) | fertig – Rückgabe: [engine-designsystem.json](workflows/2026-10-14_praesentation-account-2_rueckgaben/engine-designsystem.json); neu: `AUTOREN.md`, `LIESMICH.md` (vorläufig), `werkzeuge/pruefen.mjs`, `folien/_demo.html` (+ CSS/JS), `index.html` (Demo); überarbeitet: Engine, Bausteine, Themen, `marke.js` (Name HOLY, Farben neutral) | Rückgabe gelesen; Demo selbst neu zusammengebaut und mit `pruefen.mjs` geprüft (15 Folien: 0 Fehler, keine externen Anfragen, Schriften lokal, 2 Warnungen Wortbudget 43/44 Wörter); vier Folien als Kontaktbogen angesehen (Titel, Hub, Repertory Grid, Umfrage) – sauber, Editorial-Stil umgesetzt. Auffällig: Markenname in Titeln noch kursiv, Bedienhinweise in der Quellenzeile der Demo-Umfrage → an Folien-/Prüfstufe |

- **Ab Phase „Folien“ mit dem Workflow-Werkzeug** (14.10.2026, ca. 04:05 Uhr; Lauf-ID `wf_878fd85d-3f2`): gestartet mit
  `scriptPath` = [`workflows/2026-10-14_praesentation-account-2.js`](workflows/2026-10-14_praesentation-account-2.js) und
  `args.engine` = Rückgabe von A2-D01.01 ([engine-designsystem.json](workflows/2026-10-14_praesentation-account-2_rueckgaben/engine-designsystem.json)).
  Die Aufträge der folgenden Unteragenten entstehen aus den Textvorlagen im Skript (identischer Wortlaut wie im
  Original D01, nur mit den im Kopf des Skripts genannten Änderungen); der Hook protokolliert den Start als
  `"art": "workflow"`. Wegen 4 Prozessorkernen laufen höchstens 2 Unteragenten gleichzeitig.
- **Sechste Fortsetzung (A2-18)** (16.10.2026, 00:07 Uhr): unverändertes Skript, `resumeFromRunId`. Aus dem
  Zwischenspeicher: 7 Folien-, 7 Prüf- und 2 Überarbeitungs-Agenten.
- **Fünfte Fortsetzung (A2-16)** (15.10.2026, 19:42 Uhr): unverändertes Skript, `resumeFromRunId`. Aus dem
  Zwischenspeicher: sieben Folien-Agenten, sieben Prüf-Agenten.
- **Vierte Fortsetzung (A2-14)** (15.10.2026, 17:27 Uhr): unverändertes Skript, `resumeFromRunId`. Aus dem
  Zwischenspeicher: sieben Folien-Agenten, zwei Prüf-Agenten.
- **Dritte Fortsetzung (A2-12)** (14.10.2026, 21:52 Uhr): unverändertes Skript, `resumeFromRunId`. Fertig aus dem
  Zwischenspeicher: fünf Folien-Agenten; neu: Folien „Synthese, Fazit, Fragen“ und „Backup“, alle Prüfungen usw.
- **Zweite Fortsetzung (A2-09)** (14.10.2026, ca. 17:00 Uhr): nach Merge des HOLY-Dossiers und Härtung des Skripts
  (gescheiterte Prüf-/Überarbeitungs-Agenten lassen die Gruppe unfertig; Abbruch vor der Integration, solange eine
  Gruppe fehlt) erneut mit `resumeFromRunId` fortgesetzt. Bisher fertig: Folien „Einstieg & Vorgehen“ und
  „Markenkompetenz, Persona, Limbic Map“.
- **Fortsetzung nach Abbruch durch Nutzungslimit (A2-06)** (14.10.2026, ca. 12:05 Uhr): gleicher Lauf
  `wf_878fd85d-3f2` mit `resumeFromRunId` fortgesetzt. Skript vorher ergänzt (Hinweis auf unvollständige Folien-Dateien,
  Abbruch statt Integration ohne fertige Folien-Gruppe, Fundament-Rückgabe als Konstante im Skript statt `args`).
- **Fortsetzung nach Container-Neustart (A2-04), Nachricht an A2-D01.01 (wörtlich):**
  > Der Container wurde neu gestartet; dein Lauf wurde dabei unterbrochen. Deine bisherigen Dateien in
  > /home/user/Unternehmens-Kommunikation/fallstudie-1-brand-persona/praesentation/ sind erhalten (Zwischenstand ist
  > committet), laufende Prozesse (z. B. Browser, Testläufe) sind beendet. Bitte setze deinen Auftrag genau dort fort, wo
  > du aufgehört hast (Auftragsdatei: /home/user/Unternehmens-Kommunikation/ki-nachweis/workflows/2026-10-14_praesentation-account-2_auftraege/engine-designsystem.md).
  > Die Werkzeuge im Scratchpad (playwright-core, Schriften, qrcode-generator) und Chromium unter /opt/pw-browsers/ sind
  > weiterhin vorhanden. Schreibe zum Schluss deine Rückgabe als gültiges JSON in
  > /tmp/claude-0/-home-user-Unternehmens-Kommunikation/de57a793-3a57-5bbc-8922-be77d2a31fa2/scratchpad/workflow-zustand/rueckgaben/engine-designsystem.json
  > und antworte mit einer kurzen Zusammenfassung.
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
