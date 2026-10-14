# Übergabe-Prompt an Account 2 – Web-Präsentation Fallstudie 1

Erstellt von Claude Code (Account 1) am 14.10.2026 auf Yannicks Wunsch (KI-Nachweis, Prompt 16).
Yannick kopiert den Text unten in eine neue Claude-Code-Sitzung des zweiten Accounts, geöffnet im Repository
`YannickOderSo/Unternehmens-Kommunikation`.

---

```text
Du arbeitest im GitHub-Repository YannickOderSo/Unternehmens-Kommunikation (Gruppenarbeit im Modul Unternehmenskommunikation, Hochschule Kaiserslautern; Gruppe: Yannick Heisler, Elias Knauber, Lukas Welker; Marke: HOLY). Eine andere Claude-Code-Sitzung (Account 1) arbeitet parallel auf dem Branch master. Du übernimmst den Bau der Web-Präsentation für Fallstudie 1 (Präsentation am 26.10.2026). Das ist ein freigegebenes Arbeitspaket: Bau die Präsentation bis zum Ende, ohne nach jedem Schritt auf Freigabe zu warten.

ZUERST LESEN
- CLAUDE.md (Regeln, KI-Nachweis), README.md, fallstudie-1-brand-persona/README.md, methoden.md, folienentwuerfe.md
- fallstudie-1-brand-persona/praesentation/_entwuerfe/JURY.md (Bewertung der drei Gestaltungsrichtungen)
- ki-nachweis/workflows/2026-10-13_praesentation-layout.js – das ursprüngliche Workflow-Skript; darin stehen alle Anforderungen und alle Agenten-Aufträge im Wortlaut.

ZUSAMMENARBEIT (damit nichts kollidiert)
1. Lege den Branch praesentation-account-2 von master an und arbeite nur dort. Committe und pushe nach jeder abgeschlossenen Phase – Nutzungslimits können die Sitzung unterbrechen, Gepushtes geht nicht verloren. Nicht nach master mergen; das macht Account 1.
2. Ändere nur Dateien unter fallstudie-1-brand-persona/praesentation/ sowie deine eigenen Nachweisdateien (Punkt 3).
3. KI-Nachweis – abweichend von CLAUDE.md: Führe deine Einträge in ki-nachweis/ki-nachweis-account-2.md (gleicher Aufbau wie ki-nachweis/ki-nachweis.md: Abschnitt 1 jeder Prompt wörtlich mit Vorgehen, Dateien, Unteragenten, Prüfstatus; Abschnitt 2 jede Delegation an Unteragenten oder Workflows mit Auftrag). Person: Yannick Heisler (Account 2). Erster Eintrag: dieser Prompt. Lege jedes Workflow-Skript zusätzlich unter ki-nachweis/workflows/ ab (Dateiname mit Datum und „account-2“). ki-nachweis/rohprotokoll.jsonl schreibt der Hook in .claude/settings.json automatisch – nicht von Hand ändern.
4. Fakten über HOLY nur aus fallstudie-1-brand-persona/recherche/holy-recherche.md (entsteht gerade auf master; mit git fetch origin master holen). Solange es fehlt: Markenname „HOLY“ eintragen, Inhalte als Beispieldaten kennzeichnen, Farben neutral lassen. Keine Fakten, Zahlen oder Logos erfinden.

STAND
- Web-Präsentation (HTML/CSS/JS), läuft offline per Doppelklick auf index.html, keine CDNs, keine externen Schriften. Wunsch von Yannick: modernes Design mit Animationen und interaktivem Touch – Live-Umfrage per QR-Code, klickbare Navigation über das Markensteuerrad, Einstieg mit Publikum (Rätsel „Welche Marke steckt dahinter?“). Farben jetzt neutral, später HOLY-Farben über marke.js.
- Fertig: drei Gestaltungsrichtungen in praesentation/_entwuerfe/ und die Jury (JURY.md). Standard ist „Editorial“ (richtung-1) – Gleichstand mit „Bento hell“ – mit den in JURY.md genannten Übernahmen aus den anderen Richtungen und unter Beachtung der Warnungen (u. a. Fraunces-Gewichte ≥ 450, Linien 2 px, Feldtönungen 18–22 %, Hub höchstens ca. 40 sichtbare Wörter, Prozentwerte per JavaScript aus Stimmenzahlen, keine Bedienhinweise auf der Beamer-Folie, Kontraste auch auf Feldflächen prüfen).
- Begonnen, aber durch ein Nutzungslimit abgebrochen: das Fundament (Engine). Unter praesentation/ liegen unvollständige Dateien (css/, js/, marke.js, schriften/, bilder/, werkzeuge/zusammenbauen.py, werkzeuge/vorlage.html); es fehlen u. a. AUTOREN.md, werkzeuge/pruefen.mjs und folien/. Prüfe sie und baue darauf auf oder ersetze sie.

AUFTRAG
Führe die Arbeit ab der Phase „Fundament“ zu Ende: Fundament → Folien (sieben Gruppen) → Prüfung → Überarbeitung → Integration & Export → Abschlussprüfung → Feinschliff. Nutze dafür einen Workflow mit mehreren Unteragenten. Erzeuge das neue Skript aus dem vorhandenen:
- Phasen „Gestaltung“ und „Bewertung“ entfallen; Sieger (richtung-1, Editorial) sowie Übernahmen und Warnungen aus JURY.md als Konstanten einsetzen.
- Alle übrigen Agenten-Aufträge inhaltlich unverändert lassen; zusätzlich: Markenname HOLY in marke.js, HOLY-Fakten nur aus dem Recherche-Dossier (siehe oben).
- Pfade anpassen: REPO = dein Klon, TOOLS = eigener Ordner in deinem Scratchpad, Chromium unter /opt/pw-browsers/ (nicht „playwright install“ ausführen).
- Werkzeuge vorher in TOOLS installieren: npm install playwright-core@1.56.1 qrcode-generator@2.0.4 @fontsource-variable/inter @fontsource-variable/inter-tight @fontsource-variable/fraunces @fontsource-variable/plus-jakarta-sans @fontsource-variable/bricolage-grotesque @fontsource-variable/space-grotesk @fontsource-variable/manrope @fontsource-variable/dm-sans @fontsource/instrument-serif
- Nach einer Unterbrechung den Workflow mit resume fortsetzen statt neu zu starten.

FERTIG, WENN
fallstudie-1-brand-persona/praesentation/index.html vollständig, geprüft und offline lauffähig ist; export/praesentation.pdf und export/uebersicht.png existieren; LIESMICH.md und QUELLEN.md vollständig sind; alles auf praesentation-account-2 gepusht ist und ki-nachweis/ki-nachweis-account-2.md jeden Prompt und jede Delegation enthält. Gib zum Schluss eine kurze Zusammenfassung (Stand, offene Punkte, letzter Commit), die Yannick an Account 1 weitergeben kann.
```
