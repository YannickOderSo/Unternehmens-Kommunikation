export const meta = {
  name: 'vorlage-ki-nutzung-pruefung',
  description: 'Vorlage für die KI-Nutzung der Gruppenmitglieder aus drei Blickwinkeln prüfen',
  phases: [
    { title: 'Prüfung', detail: 'drei unabhängige Prüfer: Zusammenführung, Nutzbarkeit, Prüfungsanforderungen' },
  ],
}

const SCHEMA = {
  type: 'object',
  properties: {
    befunde: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          stelle: { type: 'string', description: 'Abschnitt oder Zeile der Vorlage' },
          problem: { type: 'string' },
          vorschlag: { type: 'string', description: 'konkreter Formulierungs- oder Strukturvorschlag auf Deutsch' },
          schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
          beleg: { type: 'string', description: 'Quelle: Datei + Abschnitt im Repository oder URL mit Abrufdatum; "Modellwissen", wenn keine Quelle' },
        },
        required: ['stelle', 'problem', 'vorschlag', 'schwere', 'beleg'],
      },
    },
    gesamturteil: { type: 'string', description: '2–3 Sätze' },
  },
  required: ['befunde', 'gesamturteil'],
}

const GEMEINSAM = `Repository: /home/user/Unternehmens-Kommunikation (studentische Gruppenarbeit, Modul Unternehmenskommunikation, Hochschule Kaiserslautern; Gruppe Yannick Heisler, Elias Knauber, Lukas Welker; Marke HOLY).
Zu prüfen ist die neue Datei ki-nachweis/vorlage-ki-nutzung.md. Yannick schickt sie an die beiden anderen Gruppenmitglieder. Sie tragen darin jede eigene KI-Nutzung außerhalb von Claude Code ein (ChatGPT, Perplexity, Bildgeneratoren usw.) und schicken die Datei bis Sa 24.10.2026 zurück. Yannick überträgt danach alle Einträge in ki-nachweis/ki-nachweis.md, Abschnitt 3 ("KI-Nutzung außerhalb von Claude Code"), zu einer großen KI-Liste.
Lies die Vorlage vollständig und vergleiche sie mit den unten genannten Dateien.
Ändere KEINE Dateien und führe keine git-Befehle aus. Melde nur Befunde, die wirklich etwas verbessern; keine Geschmacksfragen. Gib bei jedem Befund eine Quelle an (Datei + Abschnitt oder URL mit Abrufdatum) oder kennzeichne ihn als Modellwissen. Wenn alles passt, gib eine leere Befundliste zurück.`

const PRUEFER = [
  {
    key: 'zusammenfuehrung',
    prompt: `${GEMEINSAM}

Dein Blickwinkel: ZUSAMMENFÜHRBARKEIT UND VOLLSTÄNDIGKEIT.
Vergleiche mit: ki-nachweis/ki-nachweis.md (Abschnitt 1 Aufbau der Einträge, Abschnitt 3 Tabellenspalten und Hinweise, Abschnitt 4), CLAUDE.md (Abschnitt "Pflicht: KI-Nachweis führen", Punkte 1–6), fallstudie-1-brand-persona/arbeitsplan.md (Abschnitt "Regeln für den KI-Nachweis"), fallstudie-1-brand-persona/prompts.md (Teil B).
Fragen: Lässt sich jedes Feld der Vorlage ohne Informationsverlust in die Spalten von Abschnitt 3 übertragen? Fehlt ein Pflichtangabe aus CLAUDE.md (Datum, Person, Prompt wörtlich inkl. Tippfehler, Anhänge beschrieben, Herkunft Websuche/Modellwissen, Prüfstatus)? Kollidiert das ID-Schema mit der vorhandenen Platzhalterzeile E01 in Abschnitt 3? Ist klar, wohin Chatverläufe kommen (Abschnitt 3 nennt ki-nachweis/chats/)? Gibt es Widersprüche zu den Terminen im Arbeitsplan (KI-Nutzung "alle → A, Sa 24.10.")? Beachte: Die Bündel sind noch keinen Personen zugeordnet; die Vorlage darf niemandem ein Bündel zuschreiben.`,
  },
  {
    key: 'nutzbarkeit',
    prompt: `${GEMEINSAM}

Dein Blickwinkel: NUTZBARKEIT FÜR STUDIERENDE OHNE GITHUB-ERFAHRUNG.
Die beiden Empfänger bekommen die Datei per Gruppenchat und öffnen sie vermutlich in einem Texteditor, Word, Google Docs oder Notion, nicht in GitHub.
Fragen: Ist jede Anweisung eindeutig und in wenigen Minuten pro Eintrag erledigbar? Funktioniert die Markdown-Struktur (Tabelle, Codeblöcke, Checkboxen) auch, wenn man die Datei in Word/Google Docs öffnet, oder braucht es einen Hinweis? Gibt es unnötige Länge, Doppelungen, Fachjargon, unklare Platzhalter (z. B. "E-__-01")? Ist das Beispiel hilfreich und neutral (darf keine inhaltlichen Ergebnisse der Fallstudie vorwegnehmen, besonders keine Analogie-Antworten wie Tiere – vgl. fallstudie-1-brand-persona/recherche/holy-recherche.md, Abschnitt 6.7)? Prüfe die Sprache: korrektes Deutsch, korrekte Umlaute, keine Anglizismen, wo es ein gängiges deutsches Wort gibt; Du-Form durchgehend.
Vergleiche zusätzlich mit fallstudie-1-brand-persona/aufgaben-im-detail.html (dort stehen die Aufgaben-IDs A1–C4 und Prompt-Nummern), damit Verweise stimmen.`,
  },
  {
    key: 'anforderungen',
    prompt: `${GEMEINSAM}

Dein Blickwinkel: PRÜFUNGSANFORDERUNGEN, WISSENSCHAFTLICHE REDLICHKEIT, DATENSCHUTZ.
Grundlagen im Repository: README.md (Bewertungskriterien), fallstudie-1-brand-persona/README.md (Aufgabe: "Nutzen Sie hierfür insbesondere Desk Research und KI-Tools als Methoden. Dokumentieren Sie Ihre Prompts und begründen Sie Ihr Vorgehen (Backup)."), reflexion-vorlage.md (Hinweis zur KI-Nutzung bei der Reflexion), fallstudie-1-brand-persona/prompts.md Teil C.
Recherchiere per Websuche, ob die Hochschule Kaiserslautern (bzw. ihr Fachbereich Betriebswirtschaft) Leitlinien oder Vorgaben zur Kennzeichnung oder Dokumentation von KI-Nutzung in Studien- und Prüfungsleistungen veröffentlicht hat. Wenn ja: Was verlangen sie konkret (z. B. Tool, Version, Datum, Prompt, Zweck, Umfang, Eigenständigkeitserklärung), und deckt die Vorlage das ab? Nenne URL und Abrufdatum. Wenn du nichts Belastbares findest, sag das ausdrücklich und erfinde nichts; ziehe dann höchstens allgemein verbreitete Empfehlungen deutscher Hochschulen heran und kennzeichne sie als solche, mit Quelle.
Prüfe außerdem: Fehlt ein Hinweis zum Datenschutz (z. B. keine personenbezogenen Daten von Interviewpartnern oder Kommentierenden in KI-Tools hochladen) oder zum Urheberrecht bei KI-Bildern und hochgeladenen Screenshots? Fehlt etwas, das der Professor bei "Prompts dokumentieren und Vorgehen begründen" erwarten dürfte?`,
  },
]

phase('Prüfung')
const ergebnisse = await parallel(PRUEFER.map(p => () =>
  agent(p.prompt, { label: `pruefer:${p.key}`, phase: 'Prüfung', schema: SCHEMA })
    .then(r => r ? { pruefer: p.key, ...r } : null)
))
return ergebnisse.filter(Boolean)
