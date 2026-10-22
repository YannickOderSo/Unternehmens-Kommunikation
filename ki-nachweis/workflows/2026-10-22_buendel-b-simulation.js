export const meta = {
  name: 'buendel-b-simulation',
  description: 'Bündel B ohne Lukas: KI-simulierte Befragung (8 unabhängige Befragte + Kontrollgruppe) für Repertory Grid, Laddering, Analogien und Aaker; Codierung, Rechnung per Skript, Prüfung, Folienvorschlag',
  phases: [
    { title: 'Interviews', detail: 'je Befragte:r ein Agent: Triaden, Analogien, Aaker; Kontrollgruppe ohne Persona-Block; P11 einmal' },
    { title: 'Konstrukte', detail: 'Konstrukte codieren (8–12), Kontrollgruppe mitcodieren' },
    { title: 'Bewertung', detail: 'P8 je Befragte:r; Auswertung Analogien/Aaker parallel; Repertory-Grid-Auswertung per Skript' },
    { title: 'Laddering', detail: 'P9 je Befragte:r ab den Attributen; Codierung, Implikationsmatrix, HVM' },
    { title: 'Synthese', detail: 'Ausarbeitungen, Protokoll, Folienvorschlag' },
    { title: 'Prüfen', detail: 'Methodik/Kennzeichnung, Nachrechnen, Plausibilität/Verzerrung' },
    { title: 'Nacharbeit', detail: 'Befunde einarbeiten, Endbericht' },
  ],
}

const B = '/home/user/Unternehmens-Kommunikation/fallstudie-1-brand-persona/buendel-b'

const P0 = `Du unterstützt eine studentische Gruppe im Modul Unternehmenskommunikation bei einer Fallstudie zur
Markenidentität der Marke HOLY (Branche: Energy- und Hydration-Drinks, Markt: Deutschland).
Theoretischer Rahmen ist das Markensteuerrad nach Esch mit den Feldern Markenkompetenz, Markenattribute,
Markennutzen, Markentonalität und Markenbild.

Regeln:
- Trenne klar zwischen belegten Fakten (immer mit Quelle und Jahr) und Annahmen (kennzeichne sie als [ANNAHME]).
- Erfinde keine Zahlen, Studien, Quellen oder Zitate. Wenn du etwas nicht weißt, schreib "unbekannt".
- Antworte auf Deutsch, strukturiert und knapp.`

const PERSONA = `Persona „Marco, 28“ – Kernzielgruppe von HOLY. Die Person ist fiktiv: Name, Beruf, Wohnort und Alltag sind Annahmen.
- Wer: 28, Fachkraft für Lagerlogistik im Drei-Schicht-Betrieb, Realschulabschluss + Ausbildung, mittleres Einkommen, wohnt mit seiner Freundin und einer Katze zur Miete in Dortmund.
- Alltag: Früh-, Spät- und Nachtschicht im Wechsel. In der Freizeit trifft er Freunde, zockt online und geht joggen. Er schaut viel YouTube, ist auf Instagram und TikTok und hört Podcasts.
- Kaufverhalten: Er trinkt mehrmals pro Woche Energy, vor allem vor Spät- und Nachtschichten. HOLY-Pulver bestellt er online in der 50er-Dose auf Vorrat (ca. 0,80 € pro Portion, Mix-&-Match-Rabatt). Vorher hat er Monster aus der Dose getrunken. Bevor er etwas Neues kauft, liest er Bewertungen.
- Motive: Er will wach durch die Schicht kommen: ohne Zucker, aber mit Geschmack. Er will gesünder leben, aber es muss schnell gehen. Er rechnet in Preis pro Portion und mag den Humor und das „Squad“-Gefühl der Marke.
- Nicht: kein Schüler-Gamer. HOLY trinkt er meist nicht beim Zocken (laut Gründer gilt das für die meisten Kund:innen).`

const BEFRAGTE = [
  { id: 'T1', profil: 'Mann, 28, Schichtdienst Logistik, Vieltrinker, HOLY-Kunde.', herkunft: 'Dossier Bündel B §2 (unverändert)' },
  { id: 'T2', profil: 'Frau, 29, Pflegefachkraft im Schichtdienst, trinkt etwa 1× pro Woche Energy, hat HOLY im Supermarkt entdeckt.', herkunft: 'Dossier Bündel B §2 (unverändert)' },
  { id: 'T3', profil: 'Mann, 22, Student, zockt viel, trinkt Monster aus der Dose, kennt HOLY von YouTube.', herkunft: 'Dossier Bündel B §2 (unverändert)' },
  { id: 'T4', profil: 'Frau, 35, Bürojob, trinkt selten Energy, eher Cola Zero, achtet auf Zucker.', herkunft: 'Dossier Bündel B §2 (unverändert)' },
  { id: 'T5', profil: 'Mann, 39, Lkw-Fahrer, trinkt täglich Red Bull, preisbewusst, skeptisch gegenüber Pulver.', herkunft: 'Dossier Bündel B §2 (unverändert)' },
  { id: 'T6', profil: 'Frau, 24, Fitnesstrainerin in Teilzeit und Sportstudentin, trinkt fast täglich etwas Zuckerfreies, ist seit etwa einem Jahr HOLY-Kundin und bestellt online, folgt HOLY auf Instagram.', herkunft: 'Ergänzung 22.10.2026 nach den Auswahlkriterien für Interviews (Dossier Bündel B §5), weil keine echten Interviews stattfinden' },
  { id: 'T7', profil: 'Mann, 33, Rettungssanitäter im Schichtdienst, trinkt mehrmals pro Woche Energy aus der Dose (Monster, Red Bull), hat HOLY einmal probiert und nicht wieder gekauft.', herkunft: 'Ergänzung 22.10.2026 nach Dossier Bündel B §5' },
  { id: 'T8', profil: 'Mann, 25, Auszubildender zum Kfz-Mechatroniker, trinkt gelegentlich Energy (meist Monster), kennt HOLY nur aus TikTok-Videos, hat es nie gekauft.', herkunft: 'Ergänzung 22.10.2026 nach Dossier Bündel B §5' },
]

const ELEMENTE = 'Elemente: M = HOLY, W1 = Red Bull, W2 = Monster, W3 = Gönrgy, W4 = waterdrop, W5 = Coca-Cola Zero, I = "mein idealer Drink für jeden Tag".'
const TRIADEN = '1) M–W1–W2  2) M–W3–I  3) W1–W4–I  4) M–W5–W2  5) W2–W3–W4  6) M–W4–I  7) W1–W3–W5  8) M–W5–I'
const FACETTEN = 'bodenständig, ehrlich, gesund, fröhlich, gewagt, temperamentvoll, fantasievoll, zeitgemäß, zuverlässig, intelligent, erfolgreich, vornehm, charmant, naturverbunden, robust'

function rahmen(pfad) {
  return `RAHMEN FÜR DICH ALS AGENT (nicht Teil des Gesprächs):
- Du bist ein Unteragent, der genau EINE KI-simulierte befragte Person für eine studentische Fallstudie spielt (alles fiktiv, wird überall als „KI-simuliert“ gekennzeichnet).
- Benutze KEINE Werkzeuge – mit einer Ausnahme: Schreibe am Ende genau die Daten, die du als Ergebnis zurückgibst, als JSON (UTF-8, eingerückt) mit dem Write-Werkzeug nach ${pfad}. Lies keine Dateien, durchsuche nichts, keine Websuche, kein git, ki-nachweis/ nicht anfassen.
- Die Projektregel „Fakten über HOLY nur mit Quelle aus dem Dossier“ gilt hier NICHT für deine Rollenantworten: Die Person äußert Eindrücke und Meinungen aus ihrem Alltag (Supermarkt, Werbung, Social Media, Freunde). Sie nennt keine genauen Zahlen, die sie nicht sicher weiß (Preise, mg, Kalorien); Unsicheres sagt sie vage oder mit „weiß nicht“. Die P0-Kennzeichnung [ANNAHME] brauchst du in den Antworten der Person nicht: Alles, was sie sagt, ist ihre Meinung.
- Bleib konsequent in der Rolle: Alltagssprache, kurze Sätze, keine Marketing- oder Theoriebegriffe. Die Person muss HOLY nicht mögen; Kritik, Gleichgültigkeit und Unwissen sind genauso gültig wie Begeisterung.
`
}

function befragtenBlock(b) {
  return `Verwende in diesem Chat immer genau diese befragte Person (fiktiv) und nenne sie ${b.id}:
${b.id}: ${b.profil}`
}

const I1 = {
  type: 'object',
  properties: {
    befragte: { type: 'string' },
    vorstellung: { type: 'string' },
    auswahlfragen: { type: 'object', properties: { haeufigkeit_energy: { type: 'string' }, alltag: { type: 'string' }, bekannte_marken: { type: 'array', items: { type: 'string' } } }, required: ['haeufigkeit_energy', 'alltag', 'bekannte_marken'] },
    triaden: { type: 'array', items: { type: 'object', properties: {
      nr: { type: 'integer' }, elemente: { type: 'string' }, uebersprungen: { type: 'boolean' }, grund: { type: 'string' },
      paar: { type: 'array', items: { type: 'string' } }, einzeln: { type: 'string' },
      pol_paar: { type: 'string' }, pol_einzeln: { type: 'string' }, wortlaut: { type: 'string' } },
      required: ['nr', 'elemente', 'uebersprungen', 'pol_paar', 'pol_einzeln', 'wortlaut'] } },
    tier: { type: 'object', properties: { tier: { type: 'string' }, gruende: { type: 'array', items: { type: 'string' } } }, required: ['tier', 'gruende'] },
    mensch: { type: 'object', properties: { kurzbeschreibung: { type: 'string' }, alter: { type: 'string' }, beruf: { type: 'string' }, stil: { type: 'string' }, auf_der_party: { type: 'string' }, beziehung_zu_kunden: { type: 'string' }, gruende: { type: 'array', items: { type: 'string' } } }, required: ['kurzbeschreibung', 'alter', 'beruf', 'stil', 'auf_der_party', 'beziehung_zu_kunden', 'gruende'] },
    gefuehle: { type: 'array', items: { type: 'string' } },
    erlebnis: { type: 'string' },
    aaker: { type: 'array', items: { type: 'object', properties: {
      marke: { type: 'string', enum: ['HOLY', 'Red Bull', 'waterdrop'] }, bekannt: { type: 'boolean' },
      werte: { type: 'object', description: 'je Eigenschaft 1–5 oder null (unbekannt)', additionalProperties: { type: ['integer', 'null'] } } },
      required: ['marke', 'bekannt', 'werte'] } },
    holy_gekauft: { type: 'string' },
  },
  required: ['befragte', 'vorstellung', 'auswahlfragen', 'triaden', 'tier', 'mensch', 'gefuehle', 'erlebnis', 'aaker', 'holy_gekauft'],
}

function interview1(b) {
  return rahmen(B + '/rohdaten/interviews/' + b.id + '.json') + `
Nachricht 1 (P0):
${P0}

Nachricht 2 (Befragten-Block, Abwandlung: nur diese eine Person):
${befragtenBlock(b)}

Nachricht 3 (P7-Abwandlung für eine Person, ergänzt um die Interviewteile aus dem Leitfaden, Dossier Bündel B §5):
Simuliere die befragte Person ${b.id} aus der Zielgruppe von HOLY. Grundlage ist diese Persona:
${PERSONA}
Die Persona beschreibt die Zielgruppe der Studie; ${b.id} ist eine eigene Person mit dem Profil aus Nachricht 2 und weiß nur, was diese Person wissen kann. Stelle ${b.id} zuerst in einer Zeile vor.

Teil 1 – Auswahlfragen: „Wie oft trinkst du Energy Drinks?“ „Arbeitest du im Schichtdienst, im Büro oder studierst du?“ „Welche dieser Marken kennst du: Red Bull, Monster, HOLY, Gönrgy, waterdrop, Coca-Cola Zero?“ (nur Marken, die diese Person realistisch kennt)

Teil 2 – Triaden. ${ELEMENTE}
Führe mit ${b.id} diese 8 Triadenvergleiche durch:
${TRIADEN}
Frage jeweils: "In welcher wichtigen Hinsicht sind sich zwei dieser Marken ähnlich und unterscheiden sich von der dritten?" Nachfrage: "Und wie würdest du die dritte beschreiben?"
Notiere pro Triade das bipolare Konstrukt (Pol – Gegenpol) im Wortlaut der befragten Person: pol_paar = was die zwei ähnlichen gemeinsam haben, pol_einzeln = wie die dritte ist; paar/einzeln als Kürzel (M, W1 … W5, I); wortlaut = ein bis zwei Sätze Originalton. Kennt die Person eine Marke der Triade nicht, wird die Triade übersprungen (uebersprungen = true, grund nennen, Pole leer). Antworte so, wie echte Konsument:innen sprechen würden, nicht in Marketing-Fachsprache.

Teil 3 – Analogien (offen gefragt, nichts vorgeschlagen): „Wenn HOLY ein Tier wäre – welches, und warum? Nenn drei Gründe.“ „Wenn HOLY ein Mensch wäre – wie wäre die Person? Alter, Beruf, Stil, wie verhält sie sich auf einer Party, welche Beziehung hat sie zu ihren Kund:innen? Drei Gründe.“ „Welche drei Gefühle verbindest du mit HOLY?“ „Gibt es ein Erlebnis oder einen Moment, an den du bei HOLY denkst?“ Kennt die Person HOLY kaum, antwortet sie nach ihrem Eindruck oder sagt „weiß nicht“.

Teil 4 – Markenpersönlichkeit (Bogen nach Aaker; 1 = trifft gar nicht zu, 5 = trifft voll zu): Bewerte HOLY, Red Bull und waterdrop je mit diesen 15 Eigenschaften: ${FACETTEN}. Schlüssel in „werte“ genau so schreiben (mit Umlauten). Kennt die Person eine Marke nicht: bekannt = false, alle Werte null.

Teil 5 – zum Schluss: „Hast du HOLY schon gekauft?“`
}

function kontrolle(b) {
  return rahmen(B + '/rohdaten/kontrolle/' + b.id + '.json') + `
Nachricht 1 (P0):
${P0}

Nachricht 2 (Befragten-Block, Abwandlung: nur diese eine Person):
${befragtenBlock(b)}

Nachricht 3 (P7-Abwandlung für eine Person, KONTROLLGRUPPE: ohne Persona-Block):
Simuliere die befragte Person ${b.id}. Stelle ${b.id} zuerst in einer Zeile vor.

Teil 1 – Auswahlfragen: „Wie oft trinkst du Energy Drinks?“ „Arbeitest du im Schichtdienst, im Büro oder studierst du?“ „Welche dieser Marken kennst du: Red Bull, Monster, HOLY, Gönrgy, waterdrop, Coca-Cola Zero?“ (nur Marken, die diese Person realistisch kennt)

Teil 2 – Triaden. ${ELEMENTE}
Führe mit ${b.id} diese 8 Triadenvergleiche durch:
${TRIADEN}
Frage jeweils: "In welcher wichtigen Hinsicht sind sich zwei dieser Marken ähnlich und unterscheiden sich von der dritten?" Nachfrage: "Und wie würdest du die dritte beschreiben?"
Notiere pro Triade das bipolare Konstrukt (Pol – Gegenpol) im Wortlaut der befragten Person: pol_paar, pol_einzeln, paar/einzeln als Kürzel, wortlaut = ein bis zwei Sätze Originalton. Unbekannte Marke in der Triade → überspringen mit Grund. Antworte so, wie echte Konsument:innen sprechen würden, nicht in Marketing-Fachsprache.`
}

const K1 = {
  type: 'object',
  properties: {
    befragte: { type: 'string' },
    vorstellung: { type: 'string' },
    auswahlfragen: { type: 'object', properties: { haeufigkeit_energy: { type: 'string' }, alltag: { type: 'string' }, bekannte_marken: { type: 'array', items: { type: 'string' } } }, required: ['haeufigkeit_energy', 'alltag', 'bekannte_marken'] },
    triaden: I1.properties.triaden,
  },
  required: ['befragte', 'vorstellung', 'auswahlfragen', 'triaden'],
}

const P11 = `RAHMEN: Du bist ein Unteragent und führst genau diesen einen Chat aus (Prompt P11 der Gruppe, „KI-gestützt (Tool)“, simuliert KEINE Befragten). Benutze keine Werkzeuge außer einmal Write am Ende: Schreibe deine vollständige Antwort als Markdown nach ${B}/rohdaten/p11-ki.md (Kopf: „P11 – KI-gestützt (Tool), Lauf vom 22.10.2026 im Workflow D25; Antwort unverändert“). Lies keine Dateien, keine Websuche, kein git, ki-nachweis/ nicht anfassen. Was du über Red Bull und waterdrop sagst, ist Modellwissen – kennzeichne es.

Nachricht 1 (P0):
${P0}

Nachricht 2 (P11, Abwandlung Dossier Bündel B Anhang 1: [W1]/[W2] = Red Bull/waterdrop):
Stell dir vor, die Marke HOLY wäre ein Mensch. Beschreibe: Alter, Geschlecht, Beruf, Wohnort, Kleidungsstil, Hobbys, wie die Person spricht, welches Auto sie fährt, wie sie sich auf einer Party verhält und welche Beziehung sie zu ihren Kund:innen hat (z. B. Freund, Mentor, Entertainer, Dienstleister).
Stell dir dann vor, HOLY wäre ein Tier: Welches und warum (3 Gründe)?

Mache dasselbe für Red Bull und waterdrop zum Vergleich.

Leite anschließend für HOLY ab:
- 4–5 Persönlichkeitsmerkmale
- die dominanten Markenemotionen
- die Zuordnung zu den Dimensionen der Brand Personality Scale nach Aaker (Aufrichtigkeit, Spannung, Kompetenz, Kultiviertheit, Robustheit)

Gib als Ergebnis den vollständigen Antworttext zurück.`

const ANALYSE = `
Kontext: Fallstudie 1 (Marke HOLY, Vortrag Mo 26.10.2026), Bündel B (Repertory Grid → Markeneigenschaften, Laddering → Markennutzen, Analogien/Aaker → Markentonalität). Lukas Welker liefert kein Material mehr; Yannick (22.10.2026): „wenn du etwas KI Simulieren musst für ein richtiges Ergebnis dann mach das“. Deshalb eine KI-simulierte Befragung: 8 Befragte T1–T8 (T1–T5 aus dem Dossier Bündel B §2, T6–T8 ergänzt nach §5), jede Person in einem eigenen, unabhängigen Agenten; zusätzlich eine Kontrollgruppe (dieselben 8 Profile ohne Persona-Block, nur Triaden), um zu sehen, welche Konstrukte der Persona-Block vorprägt. Arbeitsordner: ${B} (rohdaten/, codierung/, auswertung/). Methodische Grundlage: ../dossier-buendel-b.md (§3 Methode für Methode, §5, §7; Anhang 2 = Hypothesen, erst NACH der eigenen Codierung lesen), ../methoden.md §2–§4, ../prompts.md P7–P11 und Teil C, Vorlesung: KI-Personas ersetzen kein Kundengespräch (Stenger, S. 78).
Feste Regeln: Rechnen NUR per Skript (Python 3, deterministisch, im Ordner auswertung/, mit Kommentaren und Formeln wie in methoden.md §2/§3; die Gruppe kann in Sheets nachrechnen) – nie Zahlen im Kopf oder per Sprachmodell. Codieren ist qualitative Arbeit: Codebücher mit Definition und Beispielen, jede Zuordnung als Zeile in einer CSV (Semikolon). Alles ist „KI-simuliert“ – nie „Befragte sagen“ ohne diesen Zusatz, keine Aussagen über Signifikanz oder Repräsentativität. Keine echten Personen, keine personenbezogenen Daten, kein Statista-Material als Eingabe. Keine Modellbezeichnungen (Namen von KI-Modellen) in Dateien. Deutsch. Schreibe nur in ${B}; index.html, ../*.md außerhalb von buendel-b, praesentation/ und ki-nachweis/ NICHT ändern; kein git.
`

const KODES = {
  type: 'object',
  properties: {
    codebuch: { type: 'array', items: { type: 'object', properties: { id: { type: 'string' }, links: { type: 'string' }, rechts: { type: 'string' }, definition: { type: 'string' }, im_persona_block: { type: 'boolean' } }, required: ['id', 'links', 'rechts', 'definition', 'im_persona_block'] } },
    dateien: { type: 'array', items: { type: 'string' } },
    hinweise: { type: 'array', items: { type: 'string' } },
  },
  required: ['codebuch', 'dateien', 'hinweise'],
}

phase('Interviews')
const [interviews, kontrollen, p11] = await Promise.all([
  parallel(BEFRAGTE.map(b => () => agent(interview1(b), { label: 'interview:' + b.id, phase: 'Interviews', schema: I1 }))),
  parallel(BEFRAGTE.map(b => () => agent(kontrolle(b), { label: 'kontrolle:' + b.id, phase: 'Interviews', schema: K1 }))),
  agent(P11, { label: 'p11', phase: 'Interviews' }),
])
const ok = BEFRAGTE.map((b, i) => ({ b, i1: interviews[i] })).filter(x => x.i1)
log('Interviews: ' + ok.length + ' von 8, Kontrolle: ' + kontrollen.filter(Boolean).length + ' von 8')

phase('Konstrukte')
const kodes = await agent(ANALYSE + `
Auftrag KONSTRUKTE CODIEREN (P7-Auswertung, „Nennungen selbst zählen“): Lies ALLE Dateien in ${B}/rohdaten/interviews/ und ${B}/rohdaten/kontrolle/ (prüfe, dass jede Datei gültiges JSON ist; fehlt eine, melde es). Lies vorher NICHT Anhang 2 des Dossiers, nicht recherche/, nicht index.html, nicht folienentwuerfe.md – die Konstrukte sollen aus den Antworten entstehen, nicht aus den Hypothesen.
1. Fasse die Konstrukte der HAUPTGRUPPE zu 8–12 Codes zusammen (Dubletten zusammenfassen, Gegensätze mit mehr als zwei Polen aufteilen), Pole im Wortlaut der Befragten (kurz, je höchstens ca. 3 Wörter, alltagssprachlich). Richte jeden Code so aus, dass der Pol, den die Befragten HOLY häufiger zuschreiben, rechts steht (7); kommt HOLY in den Nennungen nicht vor, begründe die Richtung. Konstrukte, die nirgends hinpassen, unter „sonstige“ (zählen nicht).
2. Codiere die KONTROLLGRUPPE mit demselben Codebuch (neue Codes nur, wenn nötig, als X01 …; sie gehen nicht in P8).
3. Markiere je Code „im_persona_block“: Ist der Gegensatz im Persona-Block angelegt (Zucker, Preis pro Portion, Pulver/online, Humor, Squad, Gaming, Joggen …)? Persona-Block wörtlich:
${PERSONA}
4. Schreibe ${B}/codierung/konstrukte-codebuch.csv (id;links;rechts;definition;beispiele;im_persona_block) und ${B}/codierung/konstrukte-zuordnung.csv (gruppe;befragte;triade;elemente;paar;einzeln;pol_paar;pol_einzeln;code;holy_seite – „rechts“/„links“/„–“, je nachdem, welchem Pol HOLY in dieser Antwort zugeordnet ist). Jede nicht übersprungene Triade jeder Datei = genau eine Zeile.
5. Schreibe ein kurzes Codier-Protokoll ${B}/codierung/konstrukte-protokoll.md (Regeln, schwierige Fälle, was unter „sonstige“ fiel).
Gib das Codebuch der Hauptgruppe (nur K-Codes) zurück.`, { label: 'codieren:konstrukte', phase: 'Konstrukte', schema: KODES })

const liste = (kodes && kodes.codebuch ? kodes.codebuch : []).filter(k => /^K/.test(k.id))
const kListe = liste.map(k => k.id + ': ' + k.links + ' (1) – ' + k.rechts + ' (7)').join('\n')
log('Codebuch: ' + liste.length + ' Konstrukte')

const P8S = {
  type: 'object',
  properties: {
    befragte: { type: 'string' },
    bewertungen: { type: 'array', items: { type: 'object', properties: {
      konstrukt: { type: 'string' },
      M: { type: ['integer', 'null'] }, W1: { type: ['integer', 'null'] }, W2: { type: ['integer', 'null'] }, W3: { type: ['integer', 'null'] }, W4: { type: ['integer', 'null'] }, W5: { type: ['integer', 'null'] }, I: { type: ['integer', 'null'] } },
      required: ['konstrukt', 'M', 'W1', 'W2', 'W3', 'W4', 'W5', 'I'] } },
    kommentar: { type: 'string' },
  },
  required: ['befragte', 'bewertungen', 'kommentar'],
}

function p8(x) {
  return rahmen(B + '/rohdaten/bewertungen/' + x.b.id + '.json') + `
Nachricht 1 (P0):
${P0}

Nachricht 2 (Befragten-Block):
${befragtenBlock(x.b)}

Rückblick – das hat ${x.b.id} im ersten Gespräch selbst gesagt (deine eigenen Antworten; bleib dabei, auch bei den Marken, die die Person nicht kennt):
${JSON.stringify({ vorstellung: x.i1.vorstellung, auswahlfragen: x.i1.auswahlfragen, triaden: x.i1.triaden, holy_gekauft: x.i1.holy_gekauft })}

Nachricht 3 (P8 aus prompts.md, für diese eine Person; Ausgabe als JSON statt CSV):
Hier sind die konsolidierten Konstrukte (aus den Antworten aller Befragten zusammengefasst):
${kListe}

${ELEMENTE}
Bewerte als ${x.b.id} alle Elemente (M, W1–W5, I) auf jedem Konstrukt mit 1 (linker Pol) bis 7 (rechter Pol). Eine Marke, die ${x.b.id} nicht kennt, bekommt null. „konstrukt“ = die Kennung (K01 …). Keine Mittelwerte berechnen. In „kommentar“ ein, zwei Sätze, was der Person beim Bewerten schwerfiel.`
}

const ANALOG = {
  type: 'object',
  properties: {
    tierfrage: { type: 'array', items: { type: 'object', properties: { tier: { type: 'string' }, anzahl: { type: 'integer' }, befragte: { type: 'string' } }, required: ['tier', 'anzahl', 'befragte'] } },
    aaker: { type: 'array', items: { type: 'object', properties: { marke: { type: 'string' }, dimension: { type: 'string' }, mittel: { type: 'number' }, n: { type: 'integer' } }, required: ['marke', 'dimension', 'mittel', 'n'] } },
    vorschlag_08b: { type: 'string', description: 'Merkmale (4–5 mit Aaker-Dimension), Emotionen (3), Beziehung, Erlebnisse – mit Herleitung' },
    vergleich: { type: 'string', description: 'Befragte ↔ Elias ↔ P11 ↔ Hypothese' },
    dateien: { type: 'array', items: { type: 'string' } },
  },
  required: ['tierfrage', 'aaker', 'vorschlag_08b', 'vergleich', 'dateien'],
}

const RG = {
  type: 'object',
  properties: {
    regel: { type: 'string' },
    konstrukte: { type: 'array', items: { type: 'object', properties: {
      id: { type: 'string' }, links: { type: 'string' }, rechts: { type: 'string' }, nennungen: { type: 'integer' }, befragte_mit_nennung: { type: 'integer' },
      M: { type: 'number' }, W_mittel: { type: 'number' }, staerkster: { type: 'number' }, I: { type: 'number' },
      differenzierung: { type: 'number' }, ideal_distanz: { type: 'number' }, kontrolle_nennungen: { type: 'integer' },
      ergebnis: { type: 'string', description: 'Attribut | Hürde | –' } },
      required: ['id', 'links', 'rechts', 'nennungen', 'befragte_mit_nennung', 'M', 'W_mittel', 'staerkster', 'I', 'differenzierung', 'ideal_distanz', 'kontrolle_nennungen', 'ergebnis'] } },
    staerkster_wettbewerber: { type: 'string' },
    attribute: { type: 'array', items: { type: 'string' }, description: 'Startpunkte fürs Laddering, wortgleich für Folie 06/07/10 (2–4)' },
    dateien: { type: 'array', items: { type: 'string' } },
    hinweise: { type: 'array', items: { type: 'string' } },
  },
  required: ['regel', 'konstrukte', 'staerkster_wettbewerber', 'attribute', 'dateien', 'hinweise'],
}

phase('Bewertung')
const [bewertungen, analogien] = await Promise.all([
  parallel(ok.map(x => () => agent(p8(x), { label: 'p8:' + x.b.id, phase: 'Bewertung', schema: P8S }))),
  agent(ANALYSE + `
Auftrag ANALOGIEN UND AAKER AUSWERTEN: Lies ${B}/rohdaten/interviews/*.json (Teile 3 und 4) und ${B}/rohdaten/p11-ki.md.
1. ZUERST codieren, ohne Hypothesen zu lesen: Tiernamen vereinheitlichen (Synonyme), Gründe, Mensch-Beschreibungen (Eigenschaften), Beziehung zu den Kund:innen, Gefühle, Erlebnisse → ${B}/codierung/analogien-codierung.csv (befragte;teil;originaltext;code) und Codebuch ${B}/codierung/analogien-codebuch.csv.
2. Skript ${B}/auswertung/analogien_aaker.py: Häufigkeiten (Tiere, Eigenschaften, Gefühle, Beziehung); Aaker: Facetten → Dimensionen (Aufrichtigkeit = bodenständig, ehrlich, gesund, fröhlich; Spannung = gewagt, temperamentvoll, fantasievoll, zeitgemäß; Kompetenz = zuverlässig, intelligent, erfolgreich; Kultiviertheit = vornehm, charmant; Robustheit = naturverbunden, robust – Zuordnung nach Aaker 1997, deutsche Wörter Übersetzung aus dem Modellwissen, mit Vorlesung abgleichen). Dimensionswert je Person = Mittel ihrer Facetten (null auslassen), dann Mittel über die Personen, die die Marke kennen; n je Zelle ausgeben. Ergebnisse als CSV in ${B}/auswertung/.
3. ERST DANACH vergleichen mit Elias' Analogien (../analogien.md – Mensch Impro-Comedian, Tiere Papagei und Chamäleon), P11 und der Hypothese (Dossier Bündel B Anhang 2, B3; Folie 08b-Titel „spricht wie ein frecher Kumpel“, Feld Tonalität „frecher Kumpel · wandelbar · Spaß“). Was stützen die simulierten Befragten, was nicht? Nennt jemand Chamäleon oder Papagei? Ehrlich berichten, nichts passend machen.
4. Vorschlag für Folie 08b (Daten wie dort: dimensionen mit marke/wettbewerber [Red Bull, waterdrop], merkmale 4–5 je mit Aaker-Dimension, emotionen 3, beziehung, erlebnisse) – jedes Element mit Herleitung (Zählung bzw. Quelle).`, { label: 'auswertung:analogien', phase: 'Bewertung', schema: ANALOG }),
])
log('P8: ' + bewertungen.filter(Boolean).length + ' Bewertungsbögen')

const rg = await agent(ANALYSE + `
Auftrag REPERTORY GRID AUSWERTEN (P8 → Markeneigenschaften). Daten: ${B}/codierung/konstrukte-codebuch.csv, ${B}/codierung/konstrukte-zuordnung.csv, ${B}/rohdaten/bewertungen/*.json (prüfe Vollständigkeit; Werte außerhalb 1–7 melden).
AUSWAHLREGEL – vor dem Rechnen festgelegt (22.10.2026, im Auftrag von Yannick; NICHT nachträglich ändern, Abweichungen nur als Hinweis):
- Relevanz: von mindestens 3 der 8 Befragten genannt (Hauptgruppe); Nennungen = Zahl der zugeordneten Triaden-Antworten.
- Differenzierung = |Ø M − Ø W|, Ø W = Mittel der fünf Wettbewerber-Mittel (W1–W5); Schwelle ≥ 1,0 Skalenpunkt (Aufgaben B1).
- Nähe zum Ideal: Ideal-Distanz = |Ø M − Ø I| ≤ 1,0.
- Attribut = alle drei erfüllt; Wortlaut = der Pol, an dem HOLY liegt (kurz, wortgleich für Folie 06, 07 und 10). Höchstens 4 aufs Steuerrad (Rangfolge nach Differenzierung), weitere ins Backup. „Hürde“ = Relevanz und Differenzierung erfüllt, aber Ideal-Distanz > 1,0 und HOLY liegt am vom Ideal abgewandten Pol.
- Mittelwerte je Element nur über Befragte mit Wert (null = Marke unbekannt); n je Zelle mitführen.
- Stärkster Wettbewerber = Wettbewerber mit der kleinsten mittleren Ideal-Distanz über alle Konstrukte (festgelegt vor dem Rechnen); „staerkster“ = sein Ø je Konstrukt.
- Kontrollgruppe: Nennungen je Code in der Kontrollgruppe daneben (zeigt, was ohne Persona-Block auch entsteht).
Schreibe ${B}/auswertung/repertory_grid.py (liest die Dateien, rechnet, schreibt ${B}/auswertung/repertory-grid-ergebnis.csv und ${B}/auswertung/repertory-grid-bewertungen-lang.csv), führe es aus und prüfe 2 Werte von Hand im Code-Kommentar nach. Gibt die Regel weniger als 2 Attribute her, NICHT die Regel ändern: dann die erfüllenden Attribute plus als Startpunkte fürs Laddering die besten weiteren Konstrukte nach Differenzierung (als „Startpunkt, kein Attribut“ kennzeichnen). Gib die Startpunkte fürs Laddering zurück (2–4, exakt in dem Wortlaut, der auf die Folien soll).`, { label: 'auswertung:repertory-grid', phase: 'Bewertung', schema: RG })

const attribute = (rg && rg.attribute && rg.attribute.length ? rg.attribute : ['zuckerfrei']).slice(0, 4)
log('Startpunkte fürs Laddering: ' + attribute.join(', '))

const P9S = {
  type: 'object',
  properties: {
    befragte: { type: 'string' },
    leitern: { type: 'array', items: { type: 'object', properties: {
      attribut: { type: 'string' }, wichtig: { type: 'boolean' }, begruendung_wenn_nicht: { type: 'string' }, dialog: { type: 'string' },
      stufen: { type: 'array', items: { type: 'object', properties: { ebene: { type: 'string', enum: ['Attribut', 'funktional', 'psychosozial', 'Wert'] }, text: { type: 'string' } }, required: ['ebene', 'text'] } } },
      required: ['attribut', 'wichtig', 'dialog', 'stufen'] } },
  },
  required: ['befragte', 'leitern'],
}

function p9(x) {
  return rahmen(B + '/rohdaten/leitern/' + x.b.id + '.json') + `
Nachricht 1 (P0):
${P0}

Nachricht 2 (Befragten-Block):
${befragtenBlock(x.b)}

Rückblick – so hat sich ${x.b.id} vorgestellt und das weiß die Person über die Marken (eigene Antworten aus dem ersten Gespräch):
${JSON.stringify({ vorstellung: x.i1.vorstellung, auswahlfragen: x.i1.auswahlfragen, holy_gekauft: x.i1.holy_gekauft })}

Nachricht 3 (P9-Abwandlung aus dem Dossier Bündel B, Anhang 1):
Führe ein Laddering-Interview nach der Means-End-Chain-Theorie (Gutman; Reynolds & Gutman) mit ${x.b.id} aus meiner vorigen Nachricht.

Startpunkte sind diese Eigenschaften der Marke HOLY: ${attribute.join(', ')}.

Frage zuerst, ob die Eigenschaft der Person beim Kauf wichtig ist. Wenn nicht, keine Leiter, sondern kurz begründen.
Frage sonst pro Eigenschaft wiederholt "Warum ist dir das wichtig?", bis ein persönlicher Wert erreicht ist (mindestens 3 Stufen). Gib das Interview als Dialog wieder.
Fasse danach jede Leiter als Kette zusammen:
Attribut → funktionale Konsequenz → psychosoziale Konsequenz → Wert
(Im Ergebnis: „stufen“ in der Reihenfolge der Leiter, jede Stufe mit ihrer Ebene; mehrere Stufen derselben Ebene sind erlaubt. Ist eine Eigenschaft unwichtig: wichtig = false, stufen leer.)`
}

phase('Laddering')
const okB = ok.filter((x, i) => bewertungen[i])
const leitern = await parallel(ok.map(x => () => agent(p9(x), { label: 'p9:' + x.b.id, phase: 'Laddering', schema: P9S })))
log('P9: ' + leitern.filter(Boolean).length + ' Laddering-Interviews')

const lad = await agent(ANALYSE + `
Auftrag LADDERING AUSWERTEN (P10 ohne KI-Rechnung): Lies ${B}/rohdaten/leitern/*.json. Startpunkte waren: ${attribute.join(', ')}.
1. Codieren: gleichbedeutende Begriffe je Ebene vereinheitlichen (Codes je höchstens 3 Wörter, alltagssprachlich, Attribut-Codes wortgleich mit den Startpunkten), Codebuch ${B}/codierung/leitern-codebuch.csv (code;ebene;definition;beispiele) und Zuordnung ${B}/codierung/leitern-zuordnung.csv (befragte;attribut;stufe_nr;ebene;originaltext;code). Lies dabei NICHT Anhang 2 des Dossiers (erst danach).
2. Skript ${B}/auswertung/laddering.py: Implikationsmatrix der DIREKTEN Verbindungen (aufeinanderfolgende codierte Stufen einer Leiter; jede Verbindung je Leiter einmal), Cut-off ≥ 2 Nennungen (festgelegt vor dem Rechnen), HVM-Knoten und -Kanten über dem Cut-off, Zahl der Abbrüche („nicht wichtig“) je Startpunkt, Zahl der Leitern. Ausgabe: ${B}/auswertung/implikationsmatrix.csv, ${B}/auswertung/hvm.json (knoten mit ebene, kanten mit anzahl), ${B}/auswertung/hvm.md (Mermaid graph BT).
3. Danach: Markennutzen sachlich-funktional und psychosozial (je ein kurzer Satz, aus der HVM begründet); stärkste Leiter; Abgleich mit Anhang 2 (B2) und den bisherigen Beispieldaten von Folie 07 („Genuss mit gutem Gewissen“, Knoten zuckerfrei → Genuss ohne Zucker → gutes Gewissen → Gesundheit): Was stützt die Simulation, was nicht? Ehrlich berichten.
Zusammenfassung als Text zurückgeben (Knoten je Ebene, Kanten mit Anzahl, Nutzen, Abbrüche, Dateien, Auffälligkeiten).`, { label: 'auswertung:laddering', phase: 'Laddering' })

phase('Synthese')
const synthese = await agent(ANALYSE + `
Auftrag SYNTHESE: Lies alle Dateien in ${B} (rohdaten, codierung, auswertung) und die Zwischenberichte unten. Lies außerdem (nur lesen!): ../praesentation/index.html Folien f06, f07, f08 (Notizen), f08b, f10, b1, b4, b5 (Datenstrukturen, Titel, Fußzeilen, Notizen, Kästen), ../folienentwuerfe.md, ../methoden.md §2–§4, ../dossier-buendel-b.md (jetzt auch Anhang 2), ../analogien.md (Elias).
Schreibe in ${B}:
- README.md: Überblick (was, warum, wer: „KI-simuliert im Auftrag von Yannick Heisler, 22.10.2026, Workflow D25“), Dateiliste, Lesehilfe, wichtigste Ergebnisse in fünf Sätzen, Grenzen (Stenger, S. 78; dossier §7; prompts.md Teil C).
- simulation-protokoll.md: Design (Befragte mit Herkunft, Elemente, Triaden, Ablauf je Gespräch, Kontrollgruppe, Unabhängigkeit: je Person ein eigener Agent ohne Dateizugriff), Prompts als Vorlage wörtlich (P0, Befragten-Block, P7/P8/P9/P11-Abwandlungen – Wortlaut aus dem Workflow-Skript ki-nachweis/workflows/2026-10-22_buendel-b-simulation.js, falls vorhanden, sonst aus den Zwischenberichten), Auswahlregeln mit Zeitpunkt, Rechenwege, Abweichungen vom Dossier (z. B. 8 statt 5 Befragte, keine echten Interviews, keine Kundenstimmen, Aaker durch simulierte statt menschliche Bewertende) mit Begründung.
- repertory-grid.md, laddering.md, analogien-befragung.md: ausgefüllte Vorlagen aus ../methoden.md §2, §3, §4 (soweit Bündel B) mit den Ergebnissen, Tabellen aus den CSV-Dateien, Abgleich mit Anhang 2 (was spontan kam, was nie, was neu ist), Spalte „im Persona-Block angelegt“ und Kontrollgruppe.
- folienvorschlag.md: je Folie (06, 07, 08 nur Notizen/Fußzeile, 08b, 10 Felder Markeneigenschaften/Nutzen/Tonalität und Lücken, B1 Grenzen, B4, B5) GENAU, was sich ändern soll: Daten-JSON im Format der jeweiligen Folie (vollständig, einsetzbar), Titel als Kernaussage (passend zu den Ergebnissen – nichts schönen), Kicker-Pille „KI-simuliert“ statt „Beispieldaten“, Fußzeilen („KI-simulierte Befragung, n = 8 (T1–T8), keine echten Interviews“ o. ä.), Sprechtext je Schritt in der Sollzeit, je Folie zwei Rückfragen mit Antwort (u. a. „Warum KI-simulierte Befragte?“ mit Stenger S. 78 und S. 60), Auswirkungen auf Folie 10 (stimmen „zuckerfrei“, „Community-nah“, „Genuss ohne Zucker“, „gutes Gewissen“, „dazugehören“, Tonalität, Lücke 1 „Koffein vs. gutes Gewissen“ noch?) als Entscheidungsvorlage für Yannick. Keine Folie selbst ändern.
Zwischenberichte:
` + JSON.stringify({ befragte: BEFRAGTE, attribute, kodes, rg, analogien, laddering: lad, p11_kurz: typeof p11 === 'string' ? p11.slice(0, 3000) : p11 }, null, 1), { label: 'synthese', phase: 'Synthese' })

const BEF = {
  type: 'object',
  properties: {
    pruefer: { type: 'string' },
    befunde: { type: 'array', items: { type: 'object', properties: { schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] }, datei: { type: 'string' }, problem: { type: 'string' }, beleg: { type: 'string' }, vorschlag: { type: 'string' } }, required: ['schwere', 'datei', 'problem', 'beleg', 'vorschlag'] } },
    urteil: { type: 'string' },
  },
  required: ['pruefer', 'befunde', 'urteil'],
}
const PR = [
  { key: 'methodik', p: `Prüfer METHODIK UND KENNZEICHNUNG (adversarial, nichts ändern): Entspricht das Vorgehen dem Dossier Bündel B, methoden.md §2–§4 und prompts.md (Abwandlungen begründet)? Waren die simulierten Personen unabhängig und unbeeinflusst (Prompts im Skript ki-nachweis/workflows/2026-10-22_buendel-b-simulation.js bzw. im Protokoll: stehen Hypothesen, Chamäleon/Adler/Raptor, Folienbegriffe darin)? Codierung: Stichprobe von mindestens 30 Zuordnungen gegen den Originaltext – zu grob zusammengefasst, Pole verdreht, HOLY-Seite falsch, Codes mit Dossier- statt Befragtenwörtern? Wurde die Auswahlregel vor dem Rechnen festgelegt und eingehalten? Steht überall „KI-simuliert“, keine Signifikanz-/Repräsentativitätsaussagen, Grenzen nach Stenger S. 78 ehrlich? Ist der Folienvorschlag ehrlich (Titel nicht geschönt)?` },
  { key: 'rechnung', p: `Prüfer NACHRECHNEN (adversarial; eigenes Skript im Scratchpad /tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad/d25-pruefung/, die vorhandenen Skripte NICHT wiederverwenden): Rechne aus den Rohdaten und Zuordnungs-CSVs alles unabhängig nach – Nennungen und Befragte je Code, Mittelwerte je Element mit n, Ø W, Differenzierung, Ideal-Distanz, stärkster Wettbewerber, Auswahl nach Regel, Kontrollgruppe, Implikationsmatrix, Kanten ≥ 2, Abbrüche, Aaker-Mittel, Tierhäufigkeiten. Stimmen die Zahlen in auswertung/*.csv, den Ausarbeitungen und folienvorschlag.md (Rundung!)? Passen Rohdateien zu den Strukturen (gültiges JSON, Werte 1–7 bzw. 1–5, alle Triaden zugeordnet)?` },
  { key: 'plausibilitaet', p: `Prüfer PLAUSIBILITÄT UND VERZERRUNG (adversarial, nichts ändern): Klingen die simulierten Antworten wie echte Konsument:innen oder wie Marketing? Sind die 8 Personen zu ähnlich (gleiche Konstrukte, gleiche Formulierungen)? Erfundene Markenfakten (Preise, Inhaltsstoffe, Produkte von HOLY, Gönrgy, waterdrop) – gegen ../recherche/holy-recherche.md prüfen und Widersprüche listen. Stereotype (Gaming, Schichtdienst, Geschlecht) – reproduziert die Simulation Klischees (Stenger S. 78)? Was zeigt die Kontrollgruppe über die Prägung durch den Persona-Block? Welche Ergebnisse sind tragfähig genug für die Folien, welche nur mit Vorbehalt, welche gar nicht? Stimmen Folienvorschlag und Ergebnisse überein?` },
]

phase('Prüfen')
const pruefungen = (await parallel(PR.map(x => () => agent(ANALYSE + '\n' + x.p + '\nBerichte:\n' + JSON.stringify({ rg, analogien, laddering: lad, synthese }, null, 1), { label: 'pruefen:' + x.key, phase: 'Prüfen', schema: BEF })))).filter(Boolean)

phase('Nacharbeit')
const nach = await agent(ANALYSE + `
Auftrag NACHARBEIT: Setze alle Befunde „hoch“ und „mittel“ in den Dateien unter ${B} um (Codierung korrigieren, Skripte neu ausführen, Ausarbeitungen, Protokoll und Folienvorschlag nachziehen), „niedrig“ wo sinnvoll; Rest begründen. Rohdaten der simulierten Personen NICHT verändern (nur Auffälligkeiten dokumentieren). Am Ende: alle Skripte laufen fehlerfrei, Zahlen in allen Dateien stimmen mit den CSV überein. Gib einen Endbericht zurück: Kernergebnisse je Methode (mit Zahlen), Folienvorschlag in Stichworten, Entscheidungen für Yannick, Grenzen, geänderte Dateien.
Prüfberichte:
` + JSON.stringify(pruefungen, null, 1), { label: 'nacharbeit', phase: 'Nacharbeit', schema: {
  type: 'object',
  properties: {
    umgesetzt: { type: 'array', items: { type: 'string' } },
    nicht_umgesetzt: { type: 'array', items: { type: 'string' } },
    ergebnisse: { type: 'string' },
    folienvorschlag_kurz: { type: 'array', items: { type: 'string' } },
    entscheidungen_yannick: { type: 'array', items: { type: 'string' } },
    grenzen: { type: 'array', items: { type: 'string' } },
  },
  required: ['umgesetzt', 'nicht_umgesetzt', 'ergebnisse', 'folienvorschlag_kurz', 'entscheidungen_yannick', 'grenzen'],
} })

return { attribute, rg, analogien, laddering: lad, pruefungen, nacharbeit: nach }
