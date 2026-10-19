// Hinweis 19.10.2026: Stellen mit Inhalten der Gründerbefragung sind geschwärzt (Datenschutz, KI-Nachweis 64).
// Die ausgeführte, ungeschwärzte Fassung liegt im Gruppenordner.
export const meta = {
  name: 'gruender-befragung',
  description: 'Gründer-Sprachnachrichten: Antworten mit Persona, Limbic Map, Markenkompetenz, Markensteuerrad und Bündel B abgleichen, Befunde unabhängig prüfen',
  phases: [
    { title: 'Abgleich', detail: 'Persona + Limbic Map, Markenkompetenz + Markensteuerrad, Bündel B (Repertory Grid, Laddering)' },
    { title: 'Prüfen', detail: 'Treue zum Transkript und zu den Repo-Dateien, Methodik und Datenschutz' },
  ],
}

const T = args.transkript
const GEMEINSAM = `
Kontext: Studentische Gruppenarbeit (Modul Unternehmenskommunikation, Prof. Dr. Daniel Stenger, HS Kaiserslautern), Fallstudie 1 „Brand Persona & Markenidentität“, Marke HOLY. Gruppe: Yannick Heisler (Bündel A: Markenkompetenz, Persona, Limbic Map; leitet die Markensteuerrad-Synthese), Lukas Welker (Bündel B: Repertory Grid, Laddering, Analogien), Elias Knauber (Bündel C: Kommunikationsanalyse, präsentiert Folie 10 Markensteuerrad). Repository /home/user/Unternehmens-Kommunikation, Arbeitsordner fallstudie-1-brand-persona/. Heute ist ${args.datum}. Präsentation Mo 26.10.2026.
Neu: Lukas hat einem Gründer von HOLY per LinkedIn einen Fragenkatalog mit 14 Fragen geschickt. Der Gründer hat mit zwei Sprachnachrichten geantwortet (zusammen gut 5 Minuten) und der KI-gestützten Abschrift und Auswertung zugestimmt. Das bereinigte Transkript mit Fragenkatalog und Zeitmarken steht in ${T}. Es ist eine Selbstauskunft des Unternehmens (Innensicht, Selbstbild der Marke), keine Kundenbefragung. Angaben des Gründers zu eigenen Daten oder Anteilen sind unbelegt. [geschwärzt: Inhalt der Gründerbefragung, ungeschwärzte Fassung im Gruppenordner]
Feste Regeln:
- Lies ${T} vollständig. Öffne KEINE Dateien unter /root/.claude/uploads, keine Audiodateien und keine andere Datei mit „NUR-Gruppenordner“ im Namen (vor allem nicht die Statista-Datei).
- Nur lesen: keine Dateien ändern, kein git. Keine Websuche (alles Nötige liegt im Repository).
- Jede Aussage mit Fundstelle: im Repository Datei + Abschnitt + Zeilennummer, im Transkript Fragenummer + Datei (WA0004/WA0003) + Zeitmarke. Keine Zahl, kein Zitat erfinden. Was du nicht selbst gelesen hast, gilt als ungeprüft.
- Gib Aussagen des Gründers als Paraphrase wieder; wörtlich höchstens kurze Schlüsselbegriffe (bis 8 Wörter). Kein Name des Gründers (wer geantwortet hat, ist im Transkript nicht festgehalten).
- Halte Innensicht (Gründer) und Außensicht (Kund:innen, Daten, Befragte) auseinander. Eine Gründeraussage bestätigt keine Tatsache über die Kundschaft; sie zeigt, wie das Unternehmen die Marke sieht.
- Keine Modellbezeichnungen (Namen von KI-Modellen) in deine Antwort schreiben.
`
const BEFUNDE = {
  type: 'object',
  properties: {
    bereich: { type: 'string' },
    befunde: { type: 'array', items: { type: 'object', properties: {
      id: { type: 'string', description: 'Kürzel, z. B. P1, K3, B5' },
      thema: { type: 'string' },
      repo_datei: { type: 'string' },
      repo_stelle: { type: 'string', description: 'Abschnitt + Zeile' },
      repo_aussage: { type: 'string', description: 'was dort steht, kurz und genau' },
      gruender_frage: { type: 'string', description: 'Frage-Nr. + Datei + Zeitmarke' },
      gruender_aussage: { type: 'string', description: 'Paraphrase' },
      urteil: { type: 'string', enum: ['bestätigt', 'ergänzt', 'widerspricht', 'neu', 'nicht vergleichbar'] },
      gewicht: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
      empfehlung: { type: 'string', description: 'konkrete Änderung oder Nutzung; sagen, ob sofort möglich oder Gruppenentscheid' },
      zustaendig: { type: 'string', enum: ['Yannick', 'Lukas', 'Elias', 'Gruppe'] } },
      required: ['id', 'thema', 'repo_datei', 'repo_stelle', 'repo_aussage', 'gruender_frage', 'gruender_aussage', 'urteil', 'gewicht', 'empfehlung', 'zustaendig'] } },
    hinweise: { type: 'array', items: { type: 'string' } },
  },
  required: ['bereich', 'befunde', 'hinweise'],
}

const BEREICHE = [
  { key: 'persona-limbic', prompt: `Bereich PERSONA UND LIMBIC MAP (Kürzel P1, P2, …). Lies fallstudie-1-brand-persona/persona-steckbrief.md, persona-daten.md, limbic-map.md, folienentwuerfe.md (Folien 4 und 5) und recherche/holy-recherche.md Kap. 4 (Zielgruppe). Vergleiche mit den Antworten zu Frage 2 (Kernzielgruppe), 5–9 (Eigenschaften, Konsequenzen, Werte, was fehlen würde) und 11–14:
- Zielgruppe laut Gründer (Altersspanne, Geschlecht, Berufe, Motive) gegen Persona „Marco, 28“ (Alter, männlich, Schichtdienst, Motive, Pains/Gains), die bisherige Gründerquelle [24] (Podcast) und den Vorschlag der 5 simulierten Befragten (Steckbrief Abschnitt 4). Unterscheide Zielgruppe (wen das Unternehmen erreichen will) und Kernkundschaft (wer heute kauft).
- Werte und Gefühle laut Gründer [geschwärzt: Inhalt der Gründerbefragung, ungeschwärzte Fassung im Gruppenordner] gegen die Limbic-Map-Verortung (Persona Hedonisten, Marke im Stimulanz-Bereich, Fit „passt teilweise“, offene Punkte §8). Welche Gründeraussagen stützen, verschieben oder widersprechen der Verortung der MARKE? Achtung Zirkelschluss: Die Limbic Map hat die Persona bewusst nicht aus dem Markenauftritt abgeleitet; Gründeraussagen dürfen die Persona-Verortung nicht ersetzen.
- Was davon gehört auf Folie 4 oder 5, was ins Backup, was nirgends hin?` },
  { key: 'kompetenz-steuerrad', prompt: `Bereich MARKENKOMPETENZ UND MARKENSTEUERRAD (Kürzel K1, K2, …). Lies fallstudie-1-brand-persona/markenkompetenz.md, folienentwuerfe.md (Folien 2 und 3), methoden.md §0 und §6 (Markensteuerrad-Vorlage), aufgaben-im-detail.html (Aufgabe C2 Markensteuerrad und A1) und recherche/holy-recherche.md Kap. 2.6–2.8 (Marktrolle, Selbstverständnis, Repositionierung), 3.6–3.7, 5.3 (Wettbewerbsset), 6.5–6.7 (Claims, Tonalität).
- Frage 1, 3, 4, 10, 12–14 gegen die Markenkompetenz: Kernkompetenz „zuckerfreie Softdrinks zum Selbermixen“, Rolle Herausforderer (Bezugsmarkt Softdrinks), Wettbewerbsset-Vorschlag, Vision/Purpose („most loved soft drink brand“), Firmenwerte [17], Markenversprechen „Geiler Geschmack mit gutem Gewissen“. Was bestätigt der Gründer, was ist neu? [geschwärzt: Inhalt der Gründerbefragung, ungeschwärzte Fassung im Gruppenordner]
- Markensteuerrad nach Esch in der Fassung von methoden.md §6 (Zentrum Markenkompetenz „Wer bin ich?“; Markenattribute „Über welche Eigenschaften verfüge ich?“; Markennutzen „Was biete ich an?“; Markentonalität „Wie bin ich?“; Markenbild „Wie trete ich auf?“; Quellenkürzel DR, RG, LA, AN, KA, LM). Ordne jede Gründeraussage einem Feld zu (oder keinem), sag, ob sie als Innensicht im Steuerrad taugt, und schlage ein eigenes Quellenkürzel für die Gründerbefragung vor. Yannick leitet die Synthese am Do 22.10.; das Steuerrad ist ein Identitätsmodell (Selbstbild), deshalb ist die Gründersicht dort besonders wertvoll, aber sie muss gegen Außensicht (Bündel B und C) gestellt werden.
- Spannungen benennen (zwischen Antworten verschiedener Fragen und gegenüber markenkompetenz.md). [geschwärzt: Inhalt der Gründerbefragung, ungeschwärzte Fassung im Gruppenordner]` },
  { key: 'buendel-b', prompt: `Bereich BÜNDEL B: REPERTORY GRID UND LADDERING (Kürzel B1, B2, …). Lies fallstudie-1-brand-persona/dossier-buendel-b.md (ganz, auch Anhang 1 und 2), methoden.md §2–4, aufgaben-im-detail.html (Bündel B) und folienentwuerfe.md (Folien 6–8, falls vorhanden).
- Frage 4 (drei Triaden) als Repertory Grid: Welche bipolaren Konstrukte nennt der Gründer je Triade (Ähnlichkeitspol – Kontrastpol; den Gegenpol hat er nicht immer ausgesprochen, dann als „nicht genannt“ kennzeichnen)? Wie verhalten sie sich zu den Triaden in methoden.md §2 und den Konstrukt-Hypothesen in Anhang 2?
- Frage 5–11 als Laddering: Formuliere die Leitern Attribut → funktionale Konsequenz → psychosoziale Konsequenz → Wert nur aus dem, was der Gründer sagt (Lücken als Lücken kennzeichnen), und vergleiche mit den Ketten-Hypothesen in Anhang 2 (B2-Tabelle).
- Wie kann Lukas die Antworten methodisch sauber nutzen? Z. B. als eigene Spalte „Innensicht Gründer“ im Vergleich Gruppe ↔ KI ↔ Umfeld ↔ Interviews ↔ Hypothese (Dossier Bündel B Abschnitt 5), als Abgleich Selbstbild – Fremdbild. Risiken: Die Gründerantworten dürfen den Befragten nicht vorgelegt werden; Lukas soll seine Interviews unabhängig auswerten, bevor er die Gründerantworten vergleicht (wie Anhang 2). Nennt der Gründer Konstrukte, die in den Hypothesen fehlen? [geschwärzt: Inhalt der Gründerbefragung, ungeschwärzte Fassung im Gruppenordner]
- Tonalität (Analogien, B3): Was sagt der Gründer zu Werten und Auftreten [geschwärzt: Inhalt der Gründerbefragung, ungeschwärzte Fassung im Gruppenordner], das Lukas für B3 nutzen kann?` },
]

phase('Abgleich')
const abgleich = await parallel(BEREICHE.map(b => () =>
  agent(`${GEMEINSAM}\nAuftrag: ${b.prompt}\nGib 6–15 Befunde zurück, die für die Präsentation oder die Ausarbeitungen wirklich zählen; ordne jede der 14 Fragen mindestens einmal zu, wenn sie in deinen Bereich fällt. In „hinweise“: was du nicht prüfen konntest, und Transkriptstellen, die unklar sind.`,
    { label: `abgleich:${b.key}`, phase: 'Abgleich', schema: BEFUNDE })))
const ok = abgleich.filter(Boolean)
log(`${ok.length} von 3 Bereichen, ${ok.reduce((n, r) => n + r.befunde.length, 0)} Befunde`)

const URTEILE = {
  type: 'object',
  properties: {
    pruefer: { type: 'string' },
    urteile: { type: 'array', items: { type: 'object', properties: {
      id: { type: 'string' },
      verdikt: { type: 'string', enum: ['hält', 'korrigieren', 'verwerfen'] },
      begruendung: { type: 'string', description: 'mit Fundstelle' },
      korrektur: { type: 'string', description: 'korrigierte Fassung des Befunds, falls nötig' } },
      required: ['id', 'verdikt', 'begruendung'] } },
    fehlend: { type: 'array', items: { type: 'string' }, description: 'wichtige Abgleiche, die alle drei Bereiche übersehen haben' },
    gesamturteil: { type: 'string' },
  },
  required: ['pruefer', 'urteile', 'fehlend', 'gesamturteil'],
}
const ALLE = JSON.stringify(ok, null, 1)
const PRUEFER = [
  { key: 'treue', prompt: `Prüfer TREUE (adversarial): Prüfe JEDEN Befund an den Quellen nach. (1) Gibt die Paraphrase wieder, was der Gründer an dieser Zeitmarke sagt, ohne Zuspitzung oder Ergänzung? Stimmen Fragenummer und Zeitmarke? (2) Steht in der genannten Repo-Datei an der genannten Stelle wirklich, was „repo_aussage“ sagt? (3) Ist das Urteil (bestätigt/ergänzt/widerspricht/neu) gedeckt, oder wird ein Unterschied in der Sache (z. B. Zielgruppe gegen Kernkundschaft) als Widerspruch verkauft oder umgekehrt?` },
  { key: 'methodik', prompt: `Prüfer METHODIK UND DATENSCHUTZ (adversarial): Prüfe JEDEN Befund und jede Empfehlung: (1) Wird Innensicht als Beleg über Kund:innen verwendet (z. B. Anteile oder „laut Daten“ ohne Kennzeichnung als unbelegte Selbstauskunft) [geschwärzt: Inhalt der Gründerbefragung, ungeschwärzte Fassung im Gruppenordner]? (2) Sind die Modellbegriffe richtig verwendet (Markensteuerrad nach Esch; Repertory Grid nach Kelly; Means-End-Chain/Laddering nach Gutman sowie Reynolds & Gutman; Limbic Map nach Häusel), und ist der Hinweis auf den Abgleich mit der Vorlesung gewahrt? (3) Gefährdet eine Empfehlung die Unabhängigkeit von Lukas' Interviews oder schiebt sie Yannick Arbeit aus Bündel B bzw. C zu? (4) Datenschutz und Rechte: Ist eine Empfehlung mit dem öffentlichen Repository und der noch offenen Zitierfreigabe (Zitate mit Namen auf Folien erst nach Rücksprache) vereinbar? Lange wörtliche Zitate gehören nicht ins Repository.` },
]

phase('Prüfen')
const pruefungen = await parallel(PRUEFER.map(p => () =>
  agent(`${GEMEINSAM}\nNur lesen, nichts ändern.\nBefunde aus dem Abgleich (JSON):\n${ALLE}\n\n${p.prompt}\nGib zu jeder Befund-ID ein Urteil. Erfinde keine Fehler; was stimmt, bekommt „hält“.`,
    { label: `pruefen:${p.key}`, phase: 'Prüfen', schema: URTEILE })))

return { abgleich: ok, pruefungen: pruefungen.filter(Boolean) }
