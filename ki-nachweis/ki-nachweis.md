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

---

## 2. Delegationen an Unteragenten

Claude Code kann Teilaufgaben an eigenständige Unteragenten vergeben (z. B. parallele Recherche). Jede Delegation
steht hier mit dem wörtlichen Auftrag.

| Nr. | Datum | Ausgelöst durch Prompt | Agent-Typ | Auftrag (kurz) | Ergebnis | Geprüft durch |
|-----|-------|------------------------|-----------|----------------|----------|---------------|
| – | – | – | – | *bisher keine Delegation* | – | – |

<!-- Vorlage für den Detaileintrag:
### D01 – TT.MM.JJJJ – ausgelöst durch Prompt NN
- **Agent-Typ:** …
- **Auftrag (wörtlich):**
  > …
- **Ergebnis:** …
- **Wie Claude das Ergebnis geprüft hat:** …
-->

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
| `rohprotokoll.jsonl` | jeder Prompt an Claude Code und jede Delegation an einen Unteragenten, wörtlich mit Zeitstempel | automatisch über Claude-Code-Hooks (`.claude/settings.json`, Skript `.claude/hooks/ki_protokoll.py`) |
| Abschnitt 1 und 2 | lesbare Fassung mit Vorgehen, Ergebnis und Prüfstatus | pflegt Claude nach jedem Prompt (Anweisung in `CLAUDE.md`) |
| Abschnitt 3 | KI-Nutzung in anderen Tools | trägt jede Person selbst ein |
| Git-Verlauf | wann welche Datei entstanden ist | jeder Arbeitsschritt wird committet |

Die automatische Protokollierung wurde während Prompt 03 eingerichtet. Die Einträge 01–03 sind deshalb im Rohprotokoll
als `"nachgetragen": true` markiert; alle späteren Einträge schreibt der Hook selbst.
