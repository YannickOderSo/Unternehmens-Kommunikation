export const meta = {
  name: 'dossier-buendel-b-nachpruefung',
  description: 'Gekürzte Fassung des Dossiers für Lukas gegen Repository und Workflow-Fassung prüfen',
  phases: [
    { title: 'Prüfen', detail: '2 Prüfer: Faktentreue der Kürzung, Vollständigkeit gegenüber der Workflow-Fassung' },
  ],
}

const GEMEINSAM = `
Kontext: Studentische Gruppenarbeit, Fallstudie 1, Marke HOLY. Repository /home/user/Unternehmens-Kommunikation. Heute ist der 16.10.2026.
Die Datei fallstudie-1-brand-persona/dossier-buendel-b.md ist ein Dossier für Lukas (Bündel B). Die ausführliche Fassung aus einem Workflow (7.279 Wörter, mit Zeilen-Fundstellen) steht im Commit a2ffb07 (git show a2ffb07:fallstudie-1-brand-persona/dossier-buendel-b.md). Claude hat sie auf die aktuelle Fassung gekürzt (Fundstellen jetzt als Datei + Abschnitt statt Zeile) und dabei teils umformuliert.
Regeln: nur lesen, nichts ändern, kein git commit. Öffne keine Dateien unter /root/.claude/uploads und keine Datei mit „NUR-Gruppenordner“ im Namen. Erfinde keine Befunde; wenn alles stimmt, sag das.
`
const BEFUNDE = {
  type: 'object',
  properties: {
    befunde: { type: 'array', items: { type: 'object', properties: {
      schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
      stelle: { type: 'string' }, problem: { type: 'string' }, beleg: { type: 'string' }, vorschlag: { type: 'string' } },
      required: ['schwere', 'stelle', 'problem', 'beleg', 'vorschlag'] } },
    gesamturteil: { type: 'string' },
  },
  required: ['befunde', 'gesamturteil'],
}

phase('Prüfen')
const ergebnisse = await parallel([
  () => agent(`${GEMEINSAM}
Prüfe die AKTUELLE Fassung Satz für Satz auf Faktentreue gegenüber dem Repository: jede Zahl, jeder Termin und Wochentag, jede Quellennummer [n], jeder Abschnittsverweis (z. B. „Aufgaben B1“, „Recherche-Dossier 5.3“, „Steckbrief, Abschnitt 4“, „Vorlage-KI, Datenschutz“) muss in der genannten Datei stehen bzw. dort zu finden sein. Dateien: fallstudie-1-brand-persona/{persona-steckbrief.md, persona-daten.md, persona-datenerhebung.md, methoden.md, prompts.md, aufgaben-im-detail.html, arbeitsplan.md, README.md, recherche/holy-recherche.md, praesentation/index.html}, ki-nachweis/vorlage-ki-nutzung.md. Achte besonders auf Stellen, die beim Kürzen umformuliert wurden (vergleiche mit a2ffb07), auf als belegt dargestellte Annahmen und auf Statista-Werte, die nicht in persona-steckbrief.md oder persona-daten.md stehen. Prüfe auch, dass die Prompts in Anhang 1 inhaltlich P7, P9 und P11 aus prompts.md entsprechen (bis auf die genannten Abwandlungen).`,
    { label: 'pruefen:faktentreue', phase: 'Prüfen', schema: BEFUNDE }),
  () => agent(`${GEMEINSAM}
Prüfe die VOLLSTÄNDIGKEIT der Kürzung: Vergleiche a2ffb07 mit der aktuellen Fassung. Welche Inhalte sind weggefallen, die Lukas zum Ausführen von Bündel B wirklich braucht (Anweisungen, Warnungen, Fristen, Datenschutz, Kennzeichnungsregeln, Entscheidungen, Widersprüche, die ihn sonst in eine Falle laufen lassen)? Bewerte jeden Wegfall: „hoch“ = Lukas macht ohne die Info etwas falsch oder verpasst eine Frist; „mittel“ = er muss nachfragen oder suchen; „niedrig“ = nett zu haben. Bewusst gekürzt wurden: Zeilen-Fundstellen, JSON-Feldnamen der Web-Präsentation, Detailanleitung für Sheets-Formeln, Zeitangaben aus data-zeit/README, einige Widerspruchszeilen. Schlage für hoch/mittel eine knappe Formulierung (1–2 Sätze) vor, die wieder rein sollte.`,
    { label: 'pruefen:vollstaendigkeit', phase: 'Prüfen', schema: BEFUNDE }),
])
return ergebnisse.filter(Boolean)
