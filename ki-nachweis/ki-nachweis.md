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
| 09 | 13.10.2026 | Yannick | PDF des Profs: Unternehmensliste und Reflexionsvorlage | D02 (Workflow) | Reflexionsvorlage angepasst; Unternehmensvergleich *in Arbeit* |

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
- **Ergebnis:** `reflexion-vorlage.md`, `README.md`, `CLAUDE.md`, `unterlagen/…UnternehmenReflektion.pdf`; Vergleich *in Arbeit*
- **Unteragenten:** D02
- **Prüfung durch die Gruppe:** ☐ offen

---

## 2. Delegationen an Unteragenten

Claude Code kann Teilaufgaben an eigenständige Unteragenten vergeben (z. B. parallele Recherche). Jede Delegation
steht hier mit dem wörtlichen Auftrag.

| Nr. | Datum | Ausgelöst durch Prompt | Agent-Typ | Auftrag (kurz) | Ergebnis | Geprüft durch |
|-----|-------|------------------------|-----------|----------------|----------|---------------|
| D01 | 13.10.2026 | 07 | Workflow „praesentation-layout“ (bis zu 31 Unteragenten) | Web-Präsentation gestalten, bauen, prüfen | *läuft* | – |
| D02 | 13.10.2026 | 09 | Workflow „unternehmensvergleich“ (22 Unteragenten, mit Websuche) | 10 Marken recherchieren, gegenprüfen, bewerten | *läuft* | – |

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
- **Wie Claude das Ergebnis geprüft hat:** *folgt nach Abschluss*

### D02 – 13.10.2026 – ausgelöst durch Prompt 09

- **Art:** Workflow „unternehmensvergleich“.
- **Auftrag (wörtlich):** vollständig im Skript [`workflows/2026-10-13_unternehmensvergleich.js`](workflows/2026-10-13_unternehmensvergleich.js)
  und automatisch im Rohprotokoll (Eintrag `"art": "workflow"`).
- **Stufen:** Recherche (10 Agenten, je Marke, mit Websuche und Quellenpflicht) → Faktencheck (10 Agenten, je Marke
  unabhängige Gegenprüfung der entscheidungsrelevanten Aussagen und Suche nach übersehenen Risiken) → Vergleich
  (2 Jury-Agenten: Fallstudien-Eignung über alle drei Fallstudien sowie Gruppenpraxis).
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
