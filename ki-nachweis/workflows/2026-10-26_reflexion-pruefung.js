export const meta = {
  name: 'reflexion-pruefung',
  description: 'Reflexionsentwurf (Yannick, Fallstudie 1) auf Faktentreue und Bewertungskriterien prüfen',
  phases: [{ title: 'Prüfen', detail: 'Fakten und Kriterien' }],
}

const DATEI = '/home/user/Unternehmens-Kommunikation/fallstudie-1-brand-persona/reflexion-yannick-heisler.md'
const REPO = '/home/user/Unternehmens-Kommunikation'

const GEMEINSAM = `Kontext: Yannick Heisler (Studierender, Gruppe mit Elias Knauber und Lukas Welker) muss für Fallstudie 1 (Marke HOLY, Brand Persona & Markenidentität, Vortrag Di 27.10.2026) eine individuelle Selbstreflexion abgeben: offizielle Vorlage ${REPO}/reflexion-vorlage.md (sechs Fragen, höchstens 500 Wörter, eigene Erfahrungen; bewertet je 5 % Tiefe der Reflexion, Kritische Selbstbewertung, Lerntransfer & Entwicklungsbedarf). Claude hat einen ENTWURF geschrieben: ${DATEI}. Nur lesen, nichts ändern. Fundstellen mit Datei und Zeile oder Zitat angeben. Nicht unter /root/.claude/uploads lesen. Melde nur echte Probleme; jede Korrektur als konkreter Ersatzwortlaut, der das Wortlimit einhält (die Zählung betrifft nur die sechs Antworten).`

const BEFUNDE = {
  type: 'object',
  properties: {
    befunde: { type: 'array', items: { type: 'object', properties: {
      id: { type: 'string' }, schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
      frage: { type: 'string', description: 'Frage 1–6 oder Kopf/Hinweise' }, problem: { type: 'string' },
      beleg: { type: 'string' }, ersatz: { type: 'string', description: 'konkreter Ersatzwortlaut' } },
      required: ['id', 'schwere', 'frage', 'problem', 'beleg', 'ersatz'] } },
    woerter: { type: 'string', description: 'eigene Wortzählung der sechs Antworten' },
    geprueft: { type: 'string' },
  },
  required: ['befunde', 'woerter', 'geprueft'],
}

const PRUEFER = [
  { key: 'fakten', prompt: `${GEMEINSAM}

Dein Auftrag: FAKTENTREUE. Prüfe jede Tatsachenaussage im Entwurf an den Quellen im Repository: ${REPO}/ki-nachweis/ki-nachweis.md (Abschnitt 1, v. a. Einträge 120, 135, 159, 175; Prüfstatus „☐ offen“), ${REPO}/fallstudie-1-brand-persona/ (README.md, arbeitsplan.md, methoden.md §6, abgleich-vorlesung.md, gruenderbefragung.md, vortragsskript.md – Folie 10, buendel-b/README.md, recherche/holy-recherche.md Anhang A, limbic-map.md). Fragen: Stimmt Yannicks Rolle (Bündel A, Synthese C2, Koordination, Präsentation, KI-Nachweis)? Stimmen Daten (22.10., 23.10.), Zahlen (42 von 155, 32 Einzelaussagen, acht Agenten), Befunde (gutes Gewissen vs. verlässlich sein; Hürde selbst anrühren vs. Markenkern; Limbic Types nicht in der Vorlesung; S. 78)? Sind Gründeraussagen als Selbstauskunft gekennzeichnet und KI-simulierte Befragte als solche? Werden Teammitglieder fair und zutreffend beschrieben (keine Schuldzuweisung, nichts Falsches über Elias oder Lukas, z. B. Lukas' Beitrag Gründerkontakt, Elias' KI-gestützte Ausarbeitungen)? Behauptet der Entwurf etwas über Yannicks Erleben, das den Akten widerspricht?` },
  { key: 'kriterien', prompt: `${GEMEINSAM}

Dein Auftrag: BEWERTUNGSKRITERIEN UND VORGABEN aus Sicht von Prof. Stenger. Lies die Vorlage (Leitfragen, Dreischritt Was? → Na und? → Was nun?, Lerntransfer-Hinweis, KI-Hinweis unter der Reflexion). Prüfe je Frage: konkret statt allgemein? echte Tiefe (Ursache, Bedeutung) oder nur Aufzählung? kritische Selbstbewertung mit Beleg (eine Stärke, eine Schwäche)? Lerntransfer konkret (wo, wie)? Zählt das Wortlimit (zähle selbst)? Ist der KI-Hinweis korrekt und ehrlich formuliert? Klingt etwas nach Floskel oder nach KI-Text, das ein Prüfer als unpersönlich abwerten würde – und wie ließe es sich konkreter fassen, ohne Fakten zu erfinden (du darfst nur Fakten aus dem Repository nutzen, z. B. ${REPO}/ki-nachweis/ki-nachweis.md, ${REPO}/fallstudie-1-brand-persona/arbeitsplan.md, praesentation/LIESMICH.md)? Höchstens 6 Befunde, die wichtigsten zuerst.` },
]

const ergebnisse = await parallel(PRUEFER.map(p => () =>
  agent(p.prompt, { label: `pruefen:${p.key}`, phase: 'Prüfen', schema: BEFUNDE }).then(r => ({ key: p.key, ...(r || {}) }))))
return ergebnisse.filter(Boolean)
