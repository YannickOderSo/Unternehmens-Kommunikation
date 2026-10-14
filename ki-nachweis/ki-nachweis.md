# KI-Nachweis – Unternehmenskommunikation

**Gruppe:** Yannick Heisler · Elias Knauber · Lukas Welker
**Modul:** Unternehmenskommunikation, Prof. Dr. Daniel Stenger, Hochschule Kaiserslautern

Diese Datei dokumentiert jede KI-Nutzung der Gruppe:

1. **Prompts an Claude Code**: Arbeitssitzung von Yannick im Repository
2. **Delegationen an Unteragenten**: Teilaufgaben, die Claude Code selbst an weitere KI-Agenten vergeben hat
3. **KI-Nutzung außerhalb von Claude Code**: z. B. ChatGPT, Perplexity, Bildgeneratoren (alle drei)

**Tool:** Claude Code (Anthropic), Cloud-Sitzung: https://claude.ai/code/session_01YSremZuLwkZBrQtVwPaAAr
**Rohdaten:** [`rohprotokoll.jsonl`](rohprotokoll.jsonl), Erklärung siehe [Abschnitt 4](#4-wie-dieser-nachweis-entsteht)

---

## 1. Prompts an Claude Code

Wenn nicht anders angegeben, stammt der Prompt von **Yannick Heisler**. Prompts stehen wörtlich (inkl. Tippfehler).

| Nr. | Datum | Von | Inhalt (kurz) | Unteragenten | Ergebnis |
|-----|-------|-----|---------------|--------------|----------|
| 01 | 13.10.2026 | Yannick | Vorlesungsfolien 57–60 ohne Text | – | Arbeitsgrundlage Fallstudie 1 |
| 02 | 13.10.2026 | System | Automatischer Hinweis: Dateien nicht committet | – | Commit + Push |
| 03 | 13.10.2026 | Yannick | Gruppe, Arbeitsplan, KI-Nachweis | – | Arbeitsplan, diese Datei, automatische Protokollierung |
| 04 | 13.10.2026 | Yannick | Rückfrage erneut stellen; Antworten zu Marke und Arbeitsweise | – | Arbeitsweise festgelegt, Arbeitsplan angepasst |
| 05 | 13.10.2026 | Yannick | Freigabe: Folie 2 entwerfen | – | Folienentwurf Folie 2 + Grafik |
| 06 | 13.10.2026 | Yannick | Noch keine Rollen; PDF mit Aufgaben und Aufteilung für die Gruppe | – | PDF (5 Seiten), Bündel statt Namen |
| 07 | 13.10.2026 | Yannick | Folienlayout: modern, animiert, interaktiv (+ Antworten auf Rückfrage) | D01 (Workflow) | Web-Präsentation – *in Arbeit* |
| 08 | 13.10.2026 | System | Leerer Eintrag durch Neustart der Sitzung | – | – |
| 09 | 13.10.2026 | Yannick | PDF des Profs: Unternehmensliste und Reflexionsvorlage | D02 (Workflow) | Reflexionsvorlage angepasst; Vergleich abgebrochen (siehe 10) |
| 10 | 13.10.2026 | Yannick | Recherche aller Unternehmen stoppen; HOLY vorgeschlagen | D02 gestoppt | Marke HOLY vermerkt |
| 11 | 13.10.2026 | System | Nutzungslimit erreicht, Workflow D01 unterbrochen; Sitzung dreimal neu gestartet | – | – |
| 12 | 13.10.2026 | Yannick | Limit zurückgesetzt – weitermachen | D01 fortgesetzt | Präsentation *in Arbeit* |
| 13 | 13.10.2026 | Yannick | HOLY gewählt; gegengeprüfte Recherche für das Team-Meeting | D03 (Workflow) | Dossier *in Arbeit* |
| 14 | 13./14.10.2026 | System | Nutzungslimit erneut erreicht: D01 und D03 unterbrochen; Sitzung neu gestartet | – | – |
| 15 | 14.10.2026 | Yannick | Limit zurückgesetzt – weitermachen | D03 fortgesetzt | Dossier *in Arbeit* |
| 16 | 14.10.2026 | Yannick | Übergabe-Prompt für einen zweiten Account | Ü01 (Übergabe) | Prompt, JURY.md, Entwürfe auf GitHub |

### 01 – 13.10.2026 – Yannick

> *(kein Text)* – 4 Bilder hochgeladen: Vorlesungsfolien 57–60
> (Aufgabenstellungen Unternehmenskommunikation · Bewertungskriterien für die Fallstudien ·
> Bewertungskriterien für die Reflektion · Fallstudie 1: Brand Persona & Markenidentität)

- **Vorgehen Claude:** Rückfrage nach Unternehmen, gewünschtem Ergebnis und Vorarbeit gestellt; Yannick hat sie
  abgelehnt (versehentlich, siehe 04). Daraufhin eine unternehmensneutrale Arbeitsgrundlage aus den Folien erstellt. Die Fachinhalte (Esch,
  Häusel, Kelly, Gutman / Reynolds & Gutman, Aaker, Kroeber-Riel) stammen aus dem Modellwissen von Claude, **ohne
  Websuche**.
- **Ergebnis:** `README.md`, `fallstudie-1-brand-persona/README.md`, `methoden.md`, `prompts.md`, `reflexion-vorlage.md`
- **Unteragenten:** keine
- **Prüfung durch die Gruppe:** ☐ offen – Modellbegriffe und Literaturangaben mit den Vorlesungsfolien abgleichen

### 02 – 13.10.2026 – Systemhinweis (kein Prompt der Gruppe)

> Stop hook feedback: [~/.claude/stop-hook-git-check.sh]: There are untracked files in the repository. Please commit
> and push these changes to the remote branch.

- **Herkunft:** automatische Prüfung der Cloud-Umgebung am Ende einer Antwort, nicht von der Gruppe geschrieben
- **Vorgehen Claude:** Dateien committet und auf GitHub gepusht (Commit `45a71f6`)
- **Unteragenten:** keine

### 03 – 13.10.2026 – Yannick

> Folgendes wir sollen in einer 3er Gruppe Ich (Yannick Heisler, Elias Knauber und Lukas Welker). Die Fallstudie auf
> bearbeiten, erstelle uns daraus einen Arbeitsplan und wichtig, wir brauchen am Ende einen Datei mit Nachweisen welche
> KI Prompts genutzt werden also soll eine Liste geführt werden mit meinen Prompts an dich und die Delegation wenn du
> aufgaben nochmal an Unteragents einteilst.

- **Vorgehen Claude:**
  - Arbeitsplan für drei Personen mit Rollen, Übergaben und Tagesplan bis 26.10. erstellt; Folienplan um Sprecher ergänzt
  - diese Nachweisdatei angelegt; Prompt-Log-Vorlage aus `prompts.md` hierher verschoben (Abschnitt 3)
  - automatische Protokollierung eingerichtet (Abschnitt 4) und getestet; Einträge 01–03 nachgetragen
  - `CLAUDE.md` angelegt, damit auch spätere Claude-Sitzungen den Nachweis weiterführen
- **Ergebnis:** `fallstudie-1-brand-persona/arbeitsplan.md`, `ki-nachweis/ki-nachweis.md`, `ki-nachweis/rohprotokoll.jsonl`,
  `.claude/settings.json`, `.claude/hooks/ki_protokoll.py`, `CLAUDE.md`; angepasst: `README.md`,
  `fallstudie-1-brand-persona/README.md`, `fallstudie-1-brand-persona/prompts.md`
- **Unteragenten:** keine
- **Prüfung durch die Gruppe:** ☐ offen – Rollenverteilung und Termine im Kickoff bestätigen

### 04 – 13.10.2026 – Yannick

> Kannst du die Anfrage erneut schicken? Ich habe sie nur abgelehnt weil ich den Prompt schicken wollte

- **Vorgehen Claude:** Rückfrage mit vier Auswahlfragen erneut gestellt. Yannicks Antworten:

  | Frage | Antwort |
  |-------|---------|
  | Für welches Unternehmen bearbeitet ihr die Fallstudie 1? | „Der Prof gibt uns noch eine Liste mit Unternehmen“ |
  | Bei welchen Arbeitspaketen soll ich mitarbeiten? | Schritt für Schritt |
  | In welcher Form sollen die Ergebnisse kommen? | Ausarbeitung + Folienentwürfe |
  | Gibt es Material, das ich berücksichtigen soll? | Nein, von Null |

  Daraufhin Arbeitsweise in `CLAUDE.md` festgehalten und Arbeitsplan an die ausstehende Unternehmensliste angepasst.
  Erster Eintrag, den der Hook automatisch ins Rohprotokoll geschrieben hat.
- **Ergebnis:** angepasst: `CLAUDE.md`, `README.md`, `fallstudie-1-brand-persona/README.md`,
  `fallstudie-1-brand-persona/arbeitsplan.md`, diese Datei
- **Unteragenten:** keine
- **Prüfung durch die Gruppe:** ☐ offen

### 05 – 13.10.2026 – Yannick

> Ja

- **Kontext:** Antwort auf Claudes Frage „Bis dahin kann ich als ersten Schritt Folie 2 „Ausgangslage & Vorgehen“
  entwerfen, die funktioniert für jede Marke. Soll ich damit anfangen?“
- **Vorgehen Claude:** Folienentwurf für Folie 2 erstellt (Titel als Kernaussage, Leitfrage, Sprechtext, drei mögliche
  Rückfragen). Die Grafik (Methoden → Felder des Markensteuerrads) hat Claude per Python-Skript als SVG erzeugt, als PNG
  gerendert und visuell geprüft. Inhalte aus dem Modellwissen von Claude, ohne Websuche.
- **Ergebnis:** `fallstudie-1-brand-persona/folienentwuerfe.md`, `fallstudie-1-brand-persona/grafiken/folie-02-vorgehen.svg`
  (+ `.png`, `.py`); angepasst: `fallstudie-1-brand-persona/README.md`, `CLAUDE.md`, diese Datei
- **Unteragenten:** keine
- **Prüfung durch die Gruppe:** ☐ offen – Anordnung des Steuerrads mit der Vorlesung abgleichen, Sprechtext stoppen

### 06 – 13.10.2026 – Yannick

> Teile mal noch keine Rollen ein, erstelle eine PDF Datei mit was abgearbeitet werden muss und wie man die Arbeit
> aufteilen muss, dieses Dokument schicke ich dann in die Gruppe rein damit jeder sich seine Aufgaben raussuchen kann

- **Vorgehen Claude:** Aufgabenübersicht als HTML geschrieben und mit Chromium als A4-PDF erzeugt (5 Seiten):
  Überblick und Aufgabe, zehn Arbeitspakete mit Aufwandsschätzung und Abhängigkeiten, drei Bündel zum Aussuchen
  (mit Namensfeld), Termine und Übergaben, Spielregeln und Bewertungskriterien. Seiten als Bilder gerendert und
  Layout visuell geprüft. Die Stundenangaben sind Schätzungen von Claude. Beim Abgleich mit Folie 58 fiel auf, dass
  die Präsentationskriterien zusammen 15 % statt der angegebenen 30 % ergeben – als offene Frage aufgenommen.
  Namenszuordnungen in Arbeitsplan, Folienplan und Folienentwurf durch Bündel A/B/C ersetzt.
- **Ergebnis:** `fallstudie-1-brand-persona/Fallstudie-1_Aufgaben-und-Aufteilung.pdf`,
  `fallstudie-1-brand-persona/aufgabenuebersicht.html`; angepasst: `arbeitsplan.md`, `README.md` (beide),
  `folienentwuerfe.md`, `CLAUDE.md`, diese Datei
- **Unteragenten:** keine
- **Prüfung durch die Gruppe:** ☐ offen – Aufwandsschätzungen und Bündelzuschnitt im Kickoff prüfen

### 07 – 13.10.2026 – Yannick

> Woran du schon mal arbeiten kannst ist am Layout der Folien ich möchte sie modern Designt haben mit Animation und die
> Präsentation soll einen Interaktiven Touch haben

- **Vorgehen Claude:** Rückfrage mit drei Auswahlfragen gestellt. Yannicks Antworten:

  | Frage | Antwort |
  |-------|---------|
  | Mit welchem Programm präsentiert ihr am 26.10.? | Web-Präsentation (Browser) |
  | Was soll der „interaktive Touch“ sein? | Live-Umfrage per QR-Code, Klickbare Navigation, Einstieg mit Publikum |
  | Welche Farbwelt soll das Design haben? | Jetzt neutral, später Marke |

  Danach Werkzeuge vorbereitet (Playwright für Tests und Screenshots, freie Schriften, QR-Code-Bibliothek – alles lokal,
  damit die Präsentation offline läuft), die automatische Protokollierung um Workflows erweitert und den Bau der
  Präsentation als Workflow mit mehreren Unteragenten gestartet (siehe D01).
- **Ergebnis:** *in Arbeit* – Ordner `fallstudie-1-brand-persona/praesentation/`; angepasst: `.claude/settings.json`,
  `.claude/hooks/ki_protokoll.py` (Workflows werden mitprotokolliert), diese Datei; neu: `ki-nachweis/workflows/`
- **Unteragenten:** D01
- **Prüfung durch die Gruppe:** ☐ offen

### 08 – 13.10.2026 – Systemhinweis (kein Prompt der Gruppe)

> *(leerer Eintrag im Rohprotokoll, 17:35 Uhr)*

- **Herkunft:** Die Sitzung wurde technisch neu gestartet; dabei hat die Protokollierung einen leeren Prompt erfasst.
  Kein Inhalt, keine Aktion.

### 09 – 13.10.2026 – Yannick

> @"/root/.claude/uploads/…/60f809f5-Vorlesung_Unternehmenskommunikation_2026_UnternehmenReflektion.pdf" Er hat die
> Selbstreflexionsliste und die auswahlmöglichkeit an Unternehmen geliefert

- **Anhang:** PDF von Prof. Stenger (2 Seiten): Seite 1 „Unternehmen zur Auswahl für Fallstudien“ (10 Marken: HOLY,
  air up, waterdrop, nucao, SNOCKS, GOT BAG, Oatsome, 3Bears, everdrop, koawach), Seite 2 „Selbstreflektion – Vorlage zur
  Einreichung“ (6 Fragen, max. 500 Wörter pro Fallstudie). Abgelegt unter `unterlagen/`.
- **Vorgehen Claude:** PDF ausgelesen; Reflexionsvorlage auf die offiziellen Fragen umgestellt und den
  Bewertungskriterien (Folie 59) zugeordnet; Unternehmensliste in die README übernommen. Websuche getestet und einen
  zweiten Workflow gestartet, der die zehn Marken mit Quellen recherchiert, die Fakten unabhängig gegenprüft und für
  alle drei Fallstudien bewertet (siehe D02).
- **Ergebnis:** `reflexion-vorlage.md`, `README.md`, `CLAUDE.md`, `unterlagen/…UnternehmenReflektion.pdf`; Vergleich abgebrochen (siehe 10)
- **Unteragenten:** D02
- **Prüfung durch die Gruppe:** ☐ offen

### 10 – 13.10.2026 – Yannick

> Verschwende dein Kontigent nicht für die Recherche von allen Unternehmen. Ich habe meinem Team vorgeschlagen das wir
> Holy nehmen

- **Vorgehen Claude:** Workflow D02 sofort gestoppt (zu diesem Zeitpunkt liefen erst die Recherchen zu HOLY und air up,
  keine war fertig; es gibt keine verwertbaren Ergebnisse). Marke HOLY als Vorschlag in README und CLAUDE.md vermerkt.
- **Ergebnis:** `README.md`, `CLAUDE.md`, diese Datei
- **Unteragenten:** D02 gestoppt
- **Prüfung durch die Gruppe:** ☐ offen – Marke HOLY in der Gruppe bestätigen

### 11 – 13.10.2026 – Systemhinweise (kein Prompt der Gruppe)

> Benachrichtigung: Workflow D01 „failed: Fundament nicht fertig geworden“ – drei Unteragenten (Jury: Hörsaal-Praxis,
> Jury: Wirkung & Bewertung, Engine & Designsystem) mit „You've hit your session limit“ abgebrochen.
> Danach dreimal (19:05, 20:05, 21:01 Uhr): „This session's worker process was restarted. …“

- **Herkunft:** automatische Meldungen der Umgebung, nicht von der Gruppe geschrieben. Das Rohprotokoll hat die
  Neustart-Meldungen als „prompt“ erfasst.
- **Stand von D01 zu diesem Zeitpunkt:** die drei Gestaltungsrichtungen waren fertig (Ordner
  `fallstudie-1-brand-persona/praesentation/_entwuerfe/`), Jury und Fundament abgebrochen.

### 12 – 13.10.2026 – Yannick

> Ich habe mein Nutzungslimit erreicht, während du gearbeitet hast, aber es wurde inzwischen zurückgesetzt. Bitte mache
> dort weiter, wo du aufgehört hast.

- **Vorgehen Claude:** Stand von D01 geprüft (drei fertige Gestaltungsrichtungen als Kontaktbogen angesehen),
  Workflow D01 unverändert fortgesetzt: Die drei fertigen Richtungen kommen aus dem Zwischenspeicher, ab der Jury läuft
  er neu (gleiches Skript, keine neuen Aufträge).
- **Ergebnis:** *in Arbeit*
- **Unteragenten:** D01 (fortgesetzt)
- **Prüfung durch die Gruppe:** ☐ offen

### 13 – 13.10.2026 – Yannick

> Holy wurde ausgewählt  als bereite für ein morgiges Team Meeting eine Recherche vor die von mehreren Agenten gegen
> geprüft ist mit Daten der firma angepasst an unsere Aufgabe

- **Vorgehen Claude:** HOLY als gewählte Marke in README, Arbeitsplan und CLAUDE.md eingetragen. Workflow D03 gestartet:
  sechs Recherche-Bereiche, zugeschnitten auf die Fallstudien (Unternehmen & Markenkompetenz · Produkte, Preise,
  Inhaltsstoffe & Markenattribute · Zielgruppe & Persona-Datenbasis · Wettbewerb & Marktumfeld · Kommunikation &
  Markenbild · Customer Journey, Touchpoints & Risiken), jeder Bereich von zwei unabhängigen Prüf-Agenten gegengeprüft
  (Primärquellen; Gegenrecherche & Aktualität), danach Dossier mit Faktenstatus (✔ gesichert, ✎ korrigiert, ~ unsicher,
  ✗ verworfen), Schlussprüfung und Korrektur. Daten der Firma bevorzugt (Website, Impressum, Register, Pressemitteilungen,
  Gründerinterviews, Social-Media-Profile).
- **Ergebnis:** *in Arbeit* – Ordner `fallstudie-1-brand-persona/recherche/`; angepasst: `README.md` (beide),
  `arbeitsplan.md`, `CLAUDE.md`, diese Datei
- **Unteragenten:** D03
- **Prüfung durch die Gruppe:** ☐ offen

### 14 – 13./14.10.2026 – Systemhinweise (kein Prompt der Gruppe)

> Benachrichtigungen: D01 „failed: Fundament nicht fertig geworden“ (Engine & Designsystem: „You've hit your session
> limit“); D03 „failed: Dossier nicht fertig geworden“ (11 Unteragenten mit „You've hit your session limit“).
> Danach mehrfach: „This session's worker process was restarted. …“

- **Stand:** D01 – Gestaltungsrichtungen und Jury fertig, Fundament abgebrochen. D03 – vier Recherche-Bereiche fertig,
  zwei Recherchen, alle Gegenprüfungen und das Dossier abgebrochen.

### 15 – 14.10.2026 – Yannick

> Ich habe mein Nutzungslimit erreicht, während du gearbeitet hast, aber es wurde inzwischen zurückgesetzt. Bitte mache
> dort weiter, wo du aufgehört hast.

- **Vorgehen Claude:** Zuerst D03 (Recherche für das heutige Meeting) unverändert fortgesetzt – fertige Agenten kommen
  aus dem Zwischenspeicher. D01 (Präsentation) wird erst danach fortgesetzt, damit nicht beide Workflows gleichzeitig
  das Kontingent aufbrauchen.
- **Ergebnis:** *in Arbeit*
- **Unteragenten:** D03 (fortgesetzt)
- **Prüfung durch die Gruppe:** ☐ offen

### 16 – 14.10.2026 – Yannick

> Gib einen Prompt weiter wenn du Arbeit verteilen willst an einen zweiten account

- **Vorgehen Claude:** Den Bau der Präsentation (D01) für den zweiten Account vorbereitet: Jury-Ergebnis aus dem
  Workflow-Protokoll als `fallstudie-1-brand-persona/praesentation/_entwuerfe/JURY.md` gesichert (Gleichstand Editorial
  und Bento hell mit je 16,5 Punkten, Keynote dunkel 12,5; Standard laut Skript: Editorial), die drei Entwürfe und das
  unvollständige Fundament auf GitHub gelegt, `.gitattributes` (Rohprotokoll wird beim Zusammenführen vereinigt statt zu
  kollidieren), CLAUDE.md um die parallele Arbeit ergänzt und den Übergabe-Prompt geschrieben (siehe Ü01).
- **Ergebnis:** `ki-nachweis/uebergaben/2026-10-14_account-2_praesentation.md`, `praesentation/_entwuerfe/` (inkl.
  `JURY.md`), `praesentation/` (unvollständiges Fundament), `.gitattributes`, `CLAUDE.md`, diese Datei
- **Unteragenten:** keine (Übergabe an zweiten Account: Ü01)
- **Prüfung durch die Gruppe:** ☐ offen

---

## 2. Delegationen an Unteragenten

Claude Code kann Teilaufgaben an eigenständige Unteragenten vergeben (z. B. parallele Recherche). Jede Delegation
steht hier mit dem wörtlichen Auftrag.

| Nr. | Datum | Ausgelöst durch Prompt | Agent-Typ | Auftrag (kurz) | Ergebnis | Geprüft durch |
|-----|-------|------------------------|-----------|----------------|----------|---------------|
| D01 | 13.10.2026 | 07, 12 | Workflow „praesentation-layout“ (bis zu 31 Unteragenten) | Web-Präsentation gestalten, bauen, prüfen | zweimal unterbrochen (Nutzungslimit); fertig: 3 Gestaltungsrichtungen, Jury; Rest an Account 2 übergeben (Ü01) | – |
| Ü01 | 14.10.2026 | 16 | Übergabe an zweiten Account (eigene Claude-Code-Sitzung) | D01 ab „Fundament“ zu Ende führen, Branch `praesentation-account-2` | *übergeben* | – |
| D02 | 13.10.2026 | 09 | Workflow „unternehmensvergleich“ (geplant 22 Unteragenten, mit Websuche) | 10 Marken recherchieren, gegenprüfen, bewerten | abgebrochen (Prompt 10) | – |
| D03 | 13.10.2026 | 13, 15 | Workflow „holy-recherche“ (bis zu 21 Unteragenten, mit Websuche) | HOLY recherchieren, je Bereich zweifach gegenprüfen, Dossier | unterbrochen (Nutzungslimit), fortgesetzt 14.10. 00:02 UTC – *läuft* | – |

<!-- Vorlage für den Detaileintrag:
### D01 – TT.MM.JJJJ – ausgelöst durch Prompt NN
- **Agent-Typ:** …
- **Auftrag (wörtlich):**
  > …
- **Ergebnis:** …
- **Wie Claude das Ergebnis geprüft hat:** …
-->

### D01 – 13.10.2026 – ausgelöst durch Prompt 07

- **Art:** Workflow „praesentation-layout“ – ein Skript, das Unteragenten nacheinander und parallel startet. Jeder
  Unteragent bekommt einen festen Auftrag; die Ergebnisse fließen in die nächste Stufe.
- **Auftrag (wörtlich):** vollständig im Skript [`workflows/2026-10-13_praesentation-layout.js`](workflows/2026-10-13_praesentation-layout.js)
  (alle Agenten-Aufträge stehen dort als Text) und automatisch im Rohprotokoll (Eintrag `"art": "workflow"`, 17:48 Uhr).
- **Geplante Stufen:**

  | Stufe | Unteragenten | Auftrag (kurz) |
  |-------|--------------|----------------|
  | Gestaltung | 3 | je eine Gestaltungsrichtung als Muster: „Editorial“ (hell), „Keynote dunkel“, „Bento hell“ |
  | Bewertung | 2 | Jury: Hörsaal-Praxis (Lesbarkeit, Kontrast, Farbtausch) sowie Wirkung & Bewertungskriterien |
  | Fundament | 1 | Engine: Navigation, Animationen, Übergänge, Referentenansicht, Übersicht, Druck/PDF, Steuerrad-Navigation, QR-Umfrage, Wortwolke, Themen, Prüfwerkzeug |
  | Folien | 7 | je eine Foliengruppe bauen (Einstieg & Vorgehen · Markenkompetenz, Persona, Limbic Map · Repertory Grid & Laddering · Analogien & Umfrage · Kommunikationsanalyse · Synthese, Fazit, Fragen · Backup) |
  | Prüfung | 7 | je Foliengruppe strenge Prüfung (Gestaltung, Lesbarkeit, Inhalt, Technik, Animation) |
  | Überarbeitung | 7 | je Foliengruppe Befunde umsetzen |
  | Integration | 1 | zusammenführen, vereinheitlichen, PDF und Bilder exportieren, Anleitung schreiben |
  | Abschlussprüfung | 2 | Anforderungen vollständig? Gesamteindruck als Art Director |
  | Feinschliff | 1 | Abschlussbefunde umsetzen |

- **Vorgaben an alle Unteragenten:** keine erfundenen Fakten über reale Marken (Platzhalter, Beispieldaten sichtbar
  gekennzeichnet), alles offline lauffähig, fremde Schriften/Bibliotheken mit Lizenz melden, Unsicherheiten bei
  Modellinhalten kennzeichnen, KI-Nachweis und Git nicht selbst anfassen.
- **Ergebnis:** *läuft*
- **Wie Claude das Ergebnis geprüft hat:** Unterbrechungen siehe 11 und 14. Fertig wurden die drei Gestaltungsrichtungen
  (Kontaktbogen von Claude angesehen, Screenshots in `praesentation/_entwuerfe/*/screenshots/`) und die zwei Jury-Bewertungen
  (gesichert in `praesentation/_entwuerfe/JURY.md`). Das Fundament blieb unvollständig; der Rest wurde übergeben (Ü01).

### Ü01 – 14.10.2026 – ausgelöst durch Prompt 16

- **Art:** Übergabe an einen zweiten Account (eigene Claude-Code-Sitzung im selben Repository, Branch
  `praesentation-account-2`). Dessen Prompts und Delegationen stehen in `ki-nachweis-account-2.md`.
- **Auftrag (wörtlich):** [`uebergaben/2026-10-14_account-2_praesentation.md`](uebergaben/2026-10-14_account-2_praesentation.md)
- **Ergebnis:** *übergeben*
- **Wie Claude das Ergebnis geprüft hat:** *folgt beim Zusammenführen*

### D02 – 13.10.2026 – ausgelöst durch Prompt 09

- **Art:** Workflow „unternehmensvergleich“.
- **Auftrag (wörtlich):** vollständig im Skript [`workflows/2026-10-13_unternehmensvergleich.js`](workflows/2026-10-13_unternehmensvergleich.js)
  und automatisch im Rohprotokoll (Eintrag `"art": "workflow"`).
- **Stufen:** Recherche (10 Agenten, je Marke, mit Websuche und Quellenpflicht) → Faktencheck (10 Agenten, je Marke
  unabhängige Gegenprüfung der entscheidungsrelevanten Aussagen und Suche nach übersehenen Risiken) → Vergleich
  (2 Jury-Agenten: Fallstudien-Eignung über alle drei Fallstudien sowie Gruppenpraxis).
- **Ergebnis:** auf Yannicks Wunsch abgebrochen (Prompt 10). Gestartet waren nur 2 Recherche-Agenten (HOLY, air up), keiner
  war fertig; es wurden keine Ergebnisse verwendet.
- **Wie Claude das Ergebnis geprüft hat:** entfällt

### D03 – 13.10.2026 – ausgelöst durch Prompt 13

- **Art:** Workflow „holy-recherche“.
- **Auftrag (wörtlich):** vollständig im Skript [`workflows/2026-10-13_holy-recherche.js`](workflows/2026-10-13_holy-recherche.js)
  und automatisch im Rohprotokoll (Eintrag `"art": "workflow"`).
- **Stufen:** Recherche (6 Agenten, je Bereich, mit Websuche, Quellenpflicht, Daten der Firma bevorzugt) →
  Gegenprüfung (12 Agenten: je Bereich eine Primärquellen-Prüfung und eine Gegenrecherche zu Aktualität und Widersprüchen)
  → Dossier (1 Agent: Markdown, HTML, PDF mit Faktenstatus) → Schlussprüfung (1 Agent, inkl. eigener Stichprobe der
  wichtigsten Zahlen) → Korrektur (1 Agent).
- **Ergebnis:** *läuft*
- **Wie Claude das Ergebnis geprüft hat:** *folgt nach Abschluss*

---

## 3. KI-Nutzung außerhalb von Claude Code

Jede Person trägt ihre Prompts in anderen Tools **sofort** ein. Den vollständigen Chatverlauf als Link oder PDF ablegen
(z. B. in `ki-nachweis/chats/`) und hier verweisen. Prompt-Vorlagen: [`prompts.md`](../fallstudie-1-brand-persona/prompts.md)

| ID | Datum | Person | Tool & Version | Ziel | Prompt (Kurzform / Link) | Ergebnis (1 Satz) | Prüfung / Anpassung | Folie |
|----|-------|--------|----------------|------|--------------------------|-------------------|---------------------|-------|
| E01 | | | | | | | | |

**Spalte „Prüfung / Anpassung“** ist die wichtigste: Was wurde kontrolliert (Quelle geöffnet, mit echtem Interview
verglichen, nachgerechnet), was wurde verworfen oder geändert und warum?

---

## 4. Wie dieser Nachweis entsteht

| Baustein | Was | Wie |
|----------|-----|-----|
| `rohprotokoll.jsonl` | jeder Prompt an Claude Code und jede Delegation an Unteragenten (einzeln oder als Workflow-Skript), wörtlich mit Zeitstempel | automatisch über Claude-Code-Hooks (`.claude/settings.json`, Skript `.claude/hooks/ki_protokoll.py`) |
| `workflows/` | Skripte der Workflows mit allen Agenten-Aufträgen im Wortlaut | legt Claude bei jedem Workflow ab |
| Abschnitt 1 und 2 | lesbare Fassung mit Vorgehen, Ergebnis und Prüfstatus | pflegt Claude nach jedem Prompt (Anweisung in `CLAUDE.md`) |
| Abschnitt 3 | KI-Nutzung in anderen Tools | trägt jede Person selbst ein |
| Git-Verlauf | wann welche Datei entstanden ist | jeder Arbeitsschritt wird committet |

Die automatische Protokollierung wurde während Prompt 03 eingerichtet. Die Einträge 01–03 sind deshalb im Rohprotokoll
als `"nachgetragen": true` markiert; alle späteren Einträge schreibt der Hook selbst.
