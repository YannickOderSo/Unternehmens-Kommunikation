export const meta = {
  name: 'vorlage-ki-nutzung-nachpruefung',
  description: 'Überarbeitete KI-Vorlage gegen alle Befunde der ersten Prüfung nachprüfen',
  phases: [
    { title: 'Nachprüfung', detail: 'ein unabhängiger Prüfer: Befunde erledigt? neue Widersprüche?' },
  ],
}

const SCHEMA = {
  type: 'object',
  properties: {
    offen: {
      type: 'array',
      description: 'Befunde der ersten Prüfung, die nicht oder nur falsch umgesetzt sind, sowie neue Probleme',
      items: {
        type: 'object',
        properties: {
          art: { type: 'string', enum: ['nicht umgesetzt', 'falsch umgesetzt', 'neues Problem'] },
          datei: { type: 'string' },
          stelle: { type: 'string' },
          problem: { type: 'string' },
          vorschlag: { type: 'string' },
          schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
          beleg: { type: 'string', description: 'Datei + Abschnitt oder URL; "Modellwissen", wenn keine Quelle' },
        },
        required: ['art', 'datei', 'stelle', 'problem', 'vorschlag', 'schwere', 'beleg'],
      },
    },
    bewusst_nicht_umgesetzt_ok: { type: 'string', description: 'Befunde, die absichtlich anders gelöst wurden, und ob die Lösung vertretbar ist' },
    gesamturteil: { type: 'string' },
  },
  required: ['offen', 'bewusst_nicht_umgesetzt_ok', 'gesamturteil'],
}

phase('Nachprüfung')
const r = await agent(`Repository: /home/user/Unternehmens-Kommunikation (studentische Gruppenarbeit, Hochschule Kaiserslautern, Marke HOLY).
Die Datei ki-nachweis/vorlage-ki-nutzung.md ist eine Vorlage, in die zwei Gruppenmitglieder ihre KI-Nutzung außerhalb von Claude Code eintragen. Yannick überträgt die Listen danach in ki-nachweis/ki-nachweis.md, Abschnitt 3.
Eine erste Prüfung mit drei Prüfern hat Befunde geliefert. Sie stehen vollständig (JSON, Feld "result") in: /tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/tasks/wi498pkq7.output
Danach wurden geändert: ki-nachweis/vorlage-ki-nutzung.md (neu geschrieben), ki-nachweis/ki-nachweis.md (Abschnitt 3 und 4), fallstudie-1-brand-persona/aufgaben-im-detail.html, fallstudie-1-brand-persona/arbeitsplan.md. Die Änderungen siehst du mit "git diff" (nur lesen; keine git-Befehle, die etwas verändern).

Aufgabe:
1. Gehe JEDEN Befund der ersten Prüfung durch: umgesetzt, falsch umgesetzt oder nicht umgesetzt? Absichtlich anders gelöst ist in Ordnung, wenn die Lösung vertretbar ist (z. B. wurde die Übersichtstabelle in der Vorlage gestrichen statt erweitert; Bündel bleiben ohne Namen). Melde nur, was wirklich noch fehlt oder falsch ist.
2. Suche NEUE Probleme durch die Änderungen: Widersprüche zwischen den vier Dateien (Termine, Ablageort der Chatverläufe, wer überträgt, ID-Schema), kaputte Markdown-Struktur (prüfe z. B. mit "pandoc -f commonmark_x -t html ki-nachweis/vorlage-ki-nutzung.md", ob genau die beabsichtigten Codeblöcke entstehen), falsche Verweise (Aufgaben-IDs A1–C4, Prompt-Nummern P0–P14 laut fallstudie-1-brand-persona/prompts.md, Backup-Folien B1–B7), sprachliche Fehler (korrektes Deutsch, Umlaute, Du-Form in der Vorlage).
3. Prüfe die Angaben zur KI-Richtlinie der HSKL (Präsidium 24.07.2025, Hochschulanzeiger Nr. 4/2025, Nr. 6 Datenschutz, Nr. 7 Urheberrecht, Nr. 8 Prüfungen) und zur Handreichung "Eigenständigkeitserklärung für Prüfungen" (16.09.2024) gegen den Originaltext. Die extrahierten Texte liegen in /tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad/hskl/richtlinie.txt und handreichung.txt (Quellen: https://www.hs-kl.de/fileadmin/hochschule/aktuelles/hochschulanzeiger/Hochschulanzeiger_Nr._4_2025_01.pdf und https://www.hs-kl.de/fileadmin/hochschule/stabsstellen/qualitaetsmanagement/hochschuldidaktik/Handreichung_Eigenstaendigkeitserklaerung_KI-Tools_20240916_korr.pdf). Werden sie richtig wiedergegeben, ohne Übertreibung?
Ändere keine Dateien. Gib zu jedem Punkt eine Quelle an. Wenn nichts offen ist, gib eine leere Liste zurück.`, { label: 'nachpruefer', phase: 'Nachprüfung', schema: SCHEMA })
return r
