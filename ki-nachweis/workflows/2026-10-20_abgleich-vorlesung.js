export const meta = {
  name: 'abgleich-vorlesung',
  description: 'Vorlesungsfolien von Prof. Stenger auswerten und unsere Fallstudie 1 (Folien, Ausarbeitungen, Begriffe, Quellen) dagegen abgleichen – nur Bericht, keine inhaltlichen Änderungen',
  phases: [
    { title: 'Auswerten', detail: 'Vorlesungsfolien in zwei Teilen: Modelle, Begriffe, Aufbau, Anforderungen mit Seitenzahl' },
    { title: 'Abgleichen', detail: 'fünf Bereiche gegen unsere Dateien' },
    { title: 'Prüfen', detail: 'jeden Befund an Folie und Datei gegenprüfen' },
    { title: 'Bericht', detail: 'abgleich-vorlesung.md schreiben' },
  ],
}

const PFAD = '/home/user/Unternehmens-Kommunikation'
const SCRATCH = '/tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad'
const GEMEINSAM = `
Kontext: Studentische Gruppenarbeit im Modul Unternehmenskommunikation (Prof. Dr. Daniel Stenger, HS Kaiserslautern), Fallstudie 1 „Brand Persona & Markenidentität“ für die Marke HOLY, Vortrag Mo 26.10.2026. Gruppe: Yannick Heisler (Bündel A: Brand Persona, Limbic Map, Markenkompetenz; Synthese Markensteuerrad C2), Lukas Welker (Bündel B: Befragung – Repertory Grid, Laddering, Analogien, Folien 06–08b), Elias Knauber (Bündel C: Kommunikationsanalyse, Folien 09–11; präsentiert Folie 10). Repository: ${PFAD}. Arbeitsstand: fallstudie-1-brand-persona/ (methoden.md, persona-steckbrief.md, persona-datenerhebung.md, limbic-map.md, markenkompetenz.md, folienentwuerfe.md, arbeitsplan.md, gruenderbefragung.md, dossier-buendel-b.md, recherche/holy-recherche.md) und die Web-Präsentation fallstudie-1-brand-persona/praesentation/index.html (23 Folien inkl. Backup B1–B8; je Folie Notizen in <aside class="notizen">, Kästen „FOLIE xx“, Daten in <script type="application/json" class="daten">), dazu README.md (Aufgabe, Bewertung) und ki-nachweis/ki-nachweis.md.
NEU (${args.datum}): Yannick hat die Vorlesungsfolien von Prof. Stenger ins Repository gelegt: unterlagen/Stenger Folien.pdf (129 Seiten, 16:9, Scan). Bisher galt im Projekt (CLAUDE.md): „Kein Vorlesungsmaterial vorhanden: Modellbegriffe nach Standardliteratur verwenden und darauf hinweisen, dass die Gruppe sie mit den Vorlesungsfolien abgleichen soll.“ Dieser Abgleich ist jetzt die Aufgabe. Seitenweiser Text liegt in ${SCRATCH}/stenger-seiten.txt (Marken „===== SEITE n =====“). Für Grafiken (z. B. Markensteuerrad S. 87–89, Limbic Map S. 69–71 und 93, Positionierung S. 92–94, Aufgabe Fallstudie 1 S. 57–60) die Seite als Bild ansehen: pdftoppm -f n -l n -r 80 -png "${PFAD}/unterlagen/Stenger Folien.pdf" ${SCRATCH}/vorlesung/s (Ordner vorher anlegen), dann das PNG mit dem Read-Werkzeug öffnen.
Regeln: NUR LESEN – keine Datei im Repository ändern (Ausnahme: der Bericht in der letzten Phase). Jede Aussage über die Vorlesung mit Seitenzahl („Stenger, S. n“), kurze wörtliche Zitate nur wo nötig (Zitatrecht), sonst Paraphrase. Jede Aussage über unseren Stand mit Datei und Stelle (Abschnitt/Folie/Zeile). Nichts erfinden: Was die Folien nicht sagen, als „Vorlesung sagt dazu nichts“ kennzeichnen. Modellwissen nur als „Modellwissen“ gekennzeichnet. Keine Dateien unter /root/.claude/uploads und keine Datei mit „NUR-Gruppenordner“ im Namen öffnen. Keine Modellbezeichnungen (Namen von KI-Modellen) in Dateien. Deutsch, kurze Sätze.
`

const AUSWERTUNG = {
  type: 'object',
  properties: {
    seiten: { type: 'string', description: 'ausgewerteter Seitenbereich' },
    themen: { type: 'array', items: { type: 'object', properties: { seiten: { type: 'string' }, thema: { type: 'string' }, inhalt: { type: 'string', description: 'Modelle, Definitionen, Aufbau/Felder, Begriffe, Beispiele, genannte Autoren/Quellen – knapp, aber vollständig' }, relevanz_fs1: { type: 'string' } }, required: ['seiten', 'thema', 'inhalt', 'relevanz_fs1'] } },
    anforderungen: { type: 'array', items: { type: 'string' }, description: 'ausdrückliche Anforderungen an Fallstudie 1 bzw. Präsentationen/Bewertung mit Seitenzahl' },
  },
  required: ['seiten', 'themen', 'anforderungen'],
}

phase('Auswerten')
const teile = [{ von: 1, bis: 65 }, { von: 66, bis: 129 }]
const auswertung = (await parallel(teile.map(t => () => agent(GEMEINSAM + `
Auftrag AUSWERTEN: Werte die Vorlesungsfolien Seite ${t.von} bis ${t.bis} vollständig aus (Text aus stenger-seiten.txt; jede Seite mit Grafik, Modell, Tabelle oder Aufgabenstellung zusätzlich als Bild ansehen). Liste alle Themen mit Seitenzahl. Bei Modellen (Markensteuerrad nach Esch, Brand Persona, Limbic Map nach Häusel, Positionierung, Repertory Grid, Laddering, Analogiemethoden, Markenidentität/Markenimage, Kotler, Kommunikationsmodelle usw.) genau festhalten: Name und Urheber laut Folie, Felder/Dimensionen mit ihren Bezeichnungen, Reihenfolge, Leitfragen, Beispiele (z. B. Häagen-Dazs), Literaturangaben mit Auflage. Halte jede ausdrückliche Anforderung an Fallstudie 1 und an Präsentationen fest (Inhalt, Methoden, Umfang, Zeit, Bewertung, KI-Nutzung, Abgabe).`,
  { label: 'auswerten:' + t.von + '-' + t.bis, phase: 'Auswerten', schema: AUSWERTUNG })))).filter(Boolean)
log(auswertung.length + ' von 2 Teilen ausgewertet')

const BEFUNDE = {
  type: 'object',
  properties: {
    bereich: { type: 'string' },
    befunde: { type: 'array', items: { type: 'object', properties: {
      art: { type: 'string', enum: ['fehlt', 'abweichend', 'begriff', 'quelle', 'passt'] },
      vorlesung: { type: 'string', description: 'was die Vorlesung sagt, mit Seitenzahl' },
      unser_stand: { type: 'string', description: 'was wir haben, mit Datei und Stelle' },
      vorschlag: { type: 'string' },
      zustaendig: { type: 'string', description: 'Yannick (A/C2) / Lukas (B) / Elias (C) / Claude technisch' },
      dringlichkeit: { type: 'string', enum: ['vor dem Vortrag', 'wenn Zeit', 'nur Hinweis'] },
    }, required: ['art', 'vorlesung', 'unser_stand', 'vorschlag', 'zustaendig', 'dringlichkeit'] } },
  },
  required: ['bereich', 'befunde'],
}
const BEREICHE = [
  { key: 'aufgabe', prompt: 'BEREICH AUFGABE UND BEWERTUNG: Aufgabenstellung Fallstudie 1 (v. a. S. 57–60) und alle Anforderungen an Präsentation, Zeit, KI-Nutzung, Bewertung gegen README.md, arbeitsplan.md, die Folienfolge in index.html (Agenda, Reihenfolge, Zeitangaben data-zeit) und den KI-Nachweis. Wird jeder geforderte Baustein (Brand Persona mit Geografie, Soziodemografie, Kaufverhalten, Mediennutzung, Psychografie; Limbic Map; Repertory Grid; Laddering; Analogiemethoden Mensch/Tier; Zusammenführung im Markensteuerrad; Desk Research und KI-Tools) sichtbar erfüllt? Fehlt etwas, ist etwas überflüssig oder falsch benannt?' },
  { key: 'persona-limbic', prompt: 'BEREICH BRAND PERSONA UND LIMBIC MAP: Vorlesung zu Brand Persona (Bestandteile, Vorgehen, Beispiele) und zur Limbic Map nach Häusel (Emotionssysteme, Begriffe zur Verortung, Darstellung, Territorium der Marke) gegen persona-steckbrief.md, persona-datenerhebung.md, limbic-map.md, folienentwuerfe.md und die Folien 02–05 sowie Backups in index.html (Begriffe, Achsen/Felder, Bezeichnungen, Quellenangaben).' },
  { key: 'befragung', prompt: 'BEREICH MARKENIDENTITÄT DURCH BEFRAGUNG: Vorlesung zu Repertory Grid, Laddering (Means-End-Kette: Eigenschaften – Nutzen – Werte o. ä.) und Analogiemethoden (Marke als Mensch/Tier, ggf. weitere) gegen methoden.md, dossier-buendel-b.md, gruenderbefragung.md (nur Methodenteil), die Folien 06, 07, 08, 08b und Backups in index.html. Begriffe, Ablauf, Auswertung, Darstellung, Quellen.' },
  { key: 'steuerrad', prompt: 'BEREICH MARKENSTEUERRAD, POSITIONIERUNG, MARKENKOMPETENZ: Vorlesung zum Markensteuerrad nach Esch (Felder und ihre Bezeichnungen, linke/rechte Hirnhälfte bzw. hard/soft facts, Leitfragen, Beispiel Häagen-Dazs S. 89), zum Weg Markenidentität → Positionierung → Umsetzung → Markenimage (S. 87, 106), zur Positionierung (S. 92–94) und zu Kotler gegen Folie 03 (Markenkompetenz), Folie 10 (Markensteuerrad; Daten und Notizen), Folie 11/12, markenkompetenz.md und folienentwuerfe.md. Stimmen Feldnamen, Zuordnung und Lesart überein?' },
  { key: 'begriffe-quellen', prompt: 'BEREICH BEGRIFFE, LITERATUR, KOMMUNIKATION: Literaturempfehlungen der Vorlesung (S. 3 u. a.: Bruhn, Esch, Kroeber-Riel/Esch – mit Auflagen) gegen unsere Quellenangaben (methoden.md, praesentation/QUELLEN.md, Backup-Folien B1–B8, Fußzeilen); zentrale Begriffe (Unternehmenskommunikation, Markenidentität, Markenimage, Corporate Identity, Tonalität, Kommunikationsinstrumente usw.) gegen unseren Sprachgebrauch; Kommunikationsteile der Vorlesung gegen die Folien 09, 09b, 11, 12 (Bündel C). Wo verwenden wir „Standardliteratur“-Begriffe, die die Vorlesung anders nennt?' },
]

phase('Abgleichen')
const abgleich = (await parallel(BEREICHE.map(b => () => agent(GEMEINSAM + '\n' + b.prompt + `
Lies dazu die betroffenen Dateien selbst und die Vorlesungsseiten im Original (Text und bei Grafiken das Bild). Auswertung der Vorlesung als Orientierung (nicht ungeprüft übernehmen):
` + JSON.stringify(auswertung, null, 1), { label: 'abgleich:' + b.key, phase: 'Abgleichen', schema: BEFUNDE })))).filter(Boolean)

phase('Prüfen')
const pruefung = await agent(GEMEINSAM + `
Auftrag GEGENPRÜFUNG (adversarial): Prüfe JEDEN Befund unten an der Vorlesungsseite (Text und Bild) und an der genannten Datei/Stelle. Verwirf Befunde, die die Vorlesung nicht hergibt oder die unseren Stand falsch wiedergeben; korrigiere Seitenzahlen und Stellen; fasse Doppelte zusammen; ergänze, was alle übersehen haben (Vollständigkeitsprüfung gegen die Aufgabenstellung S. 60). Gib die bereinigte Liste zurück, jeder Befund mit Prüfvermerk.
Befunde:
` + JSON.stringify(abgleich, null, 1), { label: 'pruefen', phase: 'Prüfen', schema: {
  type: 'object',
  properties: {
    befunde: { type: 'array', items: { type: 'object', properties: {
      bereich: { type: 'string' }, art: { type: 'string' }, vorlesung: { type: 'string' }, unser_stand: { type: 'string' },
      vorschlag: { type: 'string' }, zustaendig: { type: 'string' }, dringlichkeit: { type: 'string' }, pruefvermerk: { type: 'string' },
    }, required: ['bereich', 'art', 'vorlesung', 'unser_stand', 'vorschlag', 'zustaendig', 'dringlichkeit', 'pruefvermerk'] } },
    verworfen: { type: 'array', items: { type: 'string' } },
  },
  required: ['befunde', 'verworfen'],
} })

phase('Bericht')
const bericht = await agent(GEMEINSAM + `
Auftrag BERICHT: Schreibe die neue Datei ${PFAD}/fallstudie-1-brand-persona/abgleich-vorlesung.md (die einzige Datei, die du anlegen darfst; nichts anderes ändern, kein Commit). Aufbau: Kopf (Stand ${args.datum}, Herkunft: KI-gestützter Abgleich (Claude Code), Grundlage unterlagen/Stenger Folien.pdf, geprüft gegen Folien und Dateien, Prüfstatus „☐ offen“ für die Gruppe); 1. Ergebnis auf einen Blick (5–8 Sätze: was passt, was fehlt, was vor dem Vortrag zu tun ist); 2. Was die Vorlesung zu Fallstudie 1 verlangt (Anforderungen mit Seitenzahl) und wo wir es erfüllen (Folie/Datei); 3. Befunde nach Bereich als Tabellen (Art, Vorlesung mit Seite, unser Stand mit Datei/Stelle, Vorschlag, zuständig, Dringlichkeit); 4. Aufgabenliste je Person (Yannick, Lukas, Elias, Claude technisch) nach Dringlichkeit; 5. Begriffe: Vorlesung ↔ unsere Bezeichnung (Glossar-Tabelle); 6. Was die Vorlesung nicht abdeckt (unsere Ergänzungen aus Standardliteratur bleiben, gekennzeichnet). Stil der übrigen .md-Dateien, deutsch, knapp. Danach kurze Zusammenfassung zurückgeben.
Geprüfte Befunde:
` + JSON.stringify(pruefung, null, 1) + `
Auswertung der Vorlesung:
` + JSON.stringify(auswertung, null, 1), { label: 'bericht', phase: 'Bericht', schema: {
  type: 'object',
  properties: { datei: { type: 'string' }, zusammenfassung: { type: 'string' }, vor_dem_vortrag: { type: 'array', items: { type: 'string' } } },
  required: ['datei', 'zusammenfassung', 'vor_dem_vortrag'],
} })

return { auswertung, abgleich, pruefung, bericht }
