export const meta = {
  name: 'logo-raetsel',
  description: 'Folie 01: Rätsel mit großem, stufenweise schärferem HOLY-Logo; bei der Auflösung daneben die Illustration mit Logo auf der Dose',
  phases: [
    { title: 'Bauen', detail: 'Illustration mit Logo, Rätselstufen, Texte und Doku' },
    { title: 'Prüfen', detail: 'Rätsel und Darstellung; Rechte, Kennzeichnung, Doku' },
    { title: 'Nacharbeit', detail: 'Befunde einarbeiten, Exporte' },
  ],
}

const GEMEINSAM = `
Kontext: Web-Präsentation einer studentischen Gruppenarbeit (Fallstudie 1, Marke HOLY, Vortrag Mo 26.10.2026) in /home/user/Unternehmens-Kommunikation/fallstudie-1-brand-persona/praesentation. Lies zuerst AUTOREN.md (Aufbau, Prüfwerkzeug §9, Exporte §15, Abschnitt zu D16 „Illustrationen“), Folie 01 in index.html (Kasten „FOLIE 01“, Kommentarblock „RÄTSELBILD“, <div class="raetsel" data-stufen=… data-fokus=…>, Fußzeile, Notizen), marke.js (raetselBild, logo, logoTitel), js/komponenten.js Baustein „5. RÄTSEL“ (Stufen „Zoom%/Unschärfe px“, Standard 300/40,210/22,145/9,100/0; das Rätselbild wird in der Auflösung zur Bildtafel rechts), QUELLEN.md §3/§4 und bilder/raetsel-holy.svg (Kopfkommentar).

PROBLEM (Yannick, ${args.datum}): Auf Folie 01 hat das Publikum keine Chance, die Marke zu erraten. Schritt 0 zeigt die Illustration 300 % vergrößert und 40 px unscharf (nur Farbflecken), Schritt 1 löst sofort auf; die Illustration enthält bewusst kein Logo.
ENTSCHEIDUNG YANNICK (wörtlich): „Groß das Logo und daneben bei der Auflösung dann die illustration mit logo“. Umsetzung:
- Die Illustration bekommt das ECHTE HOLY-Logo auf die Dose: bilder/holy-logo-oval.png (692 × 400, gelbes Oval) unverändert (nicht nachzeichnen, nicht verzerren, nicht umfärben; nur skalieren), groß und frontal auf dem Etikett der Pappdose, gut lesbar auch in der Bildtafel. Die Drachenfrucht-Sticker-Gestaltung entsprechend umbauen (z. B. Frucht kleiner/unten oder weg), Gesamtbild stimmig halten. WICHTIG: Eine SVG, die als Bild bzw. CSS-Hintergrund geladen wird, darf keine externen Dateien nachladen – das Logo deshalb als data-URI (base64-PNG) in die SVG einbetten (oder einen anderen, im Browser UND im Druck-PDF geprüften Weg wählen). Neue Datei bilder/raetsel-holy-logo.svg anlegen (raetsel-holy.svg bleibt als Rückfall liegen) und in marke.js → raetselBild eintragen.
- Rätsel: Schritt 0 zeigt das Logo GROSS (data-fokus auf die Mitte des Logos auf der Dose, Zoom so, dass das Oval einen Großteil der Bühne füllt), unscharf genug, dass es ein Rätsel ist, aber Form und Farben (gelbes Oval, schwarze Schrift) erkennbar; mindestens eine Zwischenstufe (Hinweis), in der die Schrift fast lesbar ist; dann Auflösung: links Titel mit Logo wie bisher, rechts in der Bildtafel die Illustration mit Logo auf der Dose. data-stufen und data-fokus entsprechend setzen und begründen; Anzahl der Klicks auf Folie 01 im Kasten und in den Notizen nennen.
- Kennzeichnung: Fußzeile bleibt zweizeilig und kurz (die Zeile ist nowrap – längere Fassungen liefen schon einmal über): Logo-Zeile wie bisher, Bildzeile „Illustration: eigene Gestaltung, KI-gestützt (Claude Code), 20.10.2026“ o. ä.; in QUELLEN.md §3/§4 festhalten: Illustration enthält das Original-Logo (© HOLY Softdrinks GmbH, de.holy.com, Abruf 16.10.2026) auf Entscheidung von Yannick (${args.datum}); die frühere Regel „Illustrationen ohne Logo“ ist damit für Folie 01 aufgehoben; die Klärung der Logo-Nutzung mit dem Betreuer bleibt offen (LIESMICH-Checkliste).
Feste Regeln: Nur Folie 01 und die zugehörigen Stellen ändern (index.html Folie 01, marke.js raetselBild samt Kommentar, bilder/raetsel-holy-logo.svg, ggf. CSS/JS des Rätsel-Bausteins nur wenn nötig, QUELLEN.md, LIESMICH.md, AUTOREN.md). Folie 08/10 und die Live-Abstimmung NICHT ändern (dort lief gerade ein anderer Umbau). Keine Logos oder Bilder aus dem Netz außer der vorhandenen Datei bilder/holy-logo-oval.png. Keine Modellbezeichnungen (Namen von KI-Modellen) in Dateien. Deutsch, Stil der vorhandenen Dateien. Kein git commit, ki-nachweis/ nicht ändern. Prüfwerkzeug: PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core node werkzeuge/pruefen.mjs index.html --ausgabe _test/<x> --schritte [--nur f01] [--thema bento|keynote] [--modus dunkel] [--druck <pdf>]; Testausgaben nur unter praesentation/_test/, Hilfsskripte im Scratchpad. Bildrate beim Zoom beachten (D16: Filter, Masken und feine Raster machten den 300-%-Zoom ruckelig – keine Filter/Masken).
`

const BERICHT = {
  type: 'object',
  properties: {
    dateien: { type: 'array', items: { type: 'object', properties: { datei: { type: 'string' }, was: { type: 'string' } }, required: ['datei', 'was'] } },
    stufen: { type: 'string', description: 'gewählte data-stufen und data-fokus mit Begründung, Zahl der Klicks' },
    getestet: { type: 'string' },
    offen: { type: 'array', items: { type: 'string' } },
  },
  required: ['dateien', 'stufen', 'getestet', 'offen'],
}

phase('Bauen')
const bau = await agent(GEMEINSAM + `
Auftrag BAUEN: Illustration mit Logo (bilder/raetsel-holy-logo.svg), Rätselstufen auf Folie 01, Texte (Kasten, Kommentarblock, Notizen mit Moderation „Was sehen Sie?“ je Stufe und Auflösung), marke.js, QUELLEN.md, LIESMICH.md (Checkliste Folie 01: Rätsel mit zwei Personen testen bleibt offen), AUTOREN.md (Änderungstabelle mit Datum). Iterativ prüfen: Schritte von f01 in editorial, bento, keynote, hell/dunkel rendern und SELBST ansehen (Kontaktbogen: jede Stufe, dazu Bildtafel in Originalgröße); Erkennbarkeit des Logos je Stufe beurteilen (Stufe 0: Form und Farben, Zwischenstufe: Schrift fast lesbar, Auflösung: klar); Druck-PDF Seite 1 prüfen (Logo in der Illustration sichtbar – data-URI!); Bildrate des Zoom-Übergangs grob messen wie in D16. pruefen.mjs --nur f01 --schritte → 0 Fehler.`, { label: 'bau', phase: 'Bauen', schema: BERICHT })

const BEFUNDE = {
  type: 'object',
  properties: {
    pruefer: { type: 'string' },
    befunde: { type: 'array', items: { type: 'object', properties: { schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] }, stelle: { type: 'string' }, problem: { type: 'string' }, beleg: { type: 'string' }, vorschlag: { type: 'string' } }, required: ['schwere', 'stelle', 'problem', 'beleg', 'vorschlag'] } },
  },
  required: ['pruefer', 'befunde'],
}
const PRUEFER = [
  { key: 'raetsel', prompt: `Prüfer RÄTSEL UND DARSTELLUNG (adversarial, nichts ändern): Ist das Rätsel fair – Stufe 0 weder trivial (Schrift lesbar) noch hoffnungslos (nur Farbflecken), die Zwischenstufe ein echter Hinweis? Beurteile anhand eigener Screenshots in editorial/bento/keynote hell/dunkel, auch verkleinert wie auf einem Hörsaal-Beamer aus der letzten Reihe (z. B. 960 × 540). Ist das Logo auf der Dose unverändert (Proportionen, Farben, keine Verzerrung), groß und sauber platziert, stimmig mit dem Rest der Illustration? Läuft der Übergang flüssig (keine Ruckler gegenüber vorher)? Fußzeile, Titel, Logo links in der Auflösung ohne Überlappung? Druck-PDF Seite 1 und Folienbild f01: Logo in der Illustration sichtbar?` },
  { key: 'rechte-doku', prompt: `Prüfer RECHTE, KENNZEICHNUNG, DOKU (adversarial, nichts ändern): Ist die Nutzung des Original-Logos in der Illustration überall korrekt gekennzeichnet (Fußzeile Folie 01, QUELLEN §3/§4, B7 falls nötig, LIESMICH-Checkliste mit offener Betreuer-Klärung), und ist die Entscheidung von Yannick vom 20.10.2026 als Grund festgehalten? Widersprechen sich Kasten, Kommentarblock, Notizen, marke.js-Kommentar, QUELLEN und AUTOREN (z. B. noch „ohne Logo und Schrift“, alte data-fokus-/data-stufen-Werte, Klickzahl)? Ist die SVG sauber (gültiges XML, data-URI statt externer Verweis, keine Filter/Masken, Kopfkommentar mit Kennzeichnung)? Nur erlaubte Dateien geändert (git diff --name-only; Folie 08/10 und Live-Abstimmung unverändert)? Keine Modellbezeichnungen.` },
]
phase('Prüfen')
const pruefungen = (await parallel(PRUEFER.map(p => () =>
  agent(GEMEINSAM + '\n' + p.prompt + '\nBericht des Baus:\n' + JSON.stringify(bau, null, 1),
    { label: 'pruefen:' + p.key, phase: 'Prüfen', schema: BEFUNDE })))).filter(Boolean)

phase('Nacharbeit')
const nacharbeit = await agent(GEMEINSAM + `
Auftrag NACHARBEIT: Befunde „hoch“ und „mittel“ umsetzen, „niedrig“ wo sinnvoll, Rest begründen. Danach pruefen.mjs index.html --schritte --optional (0 Fehler), Exporte nach AUTOREN §15 neu erzeugen und nach export/ kopieren (PDF 22 Seiten ohne 01b, 23 Folienbilder, Übersicht --stand 20.10.2026); f01 als Bild und PDF-Seite 1 ansehen. Für Yannick: was er ansehen/freigeben soll (Stufenbilder), was mit zwei Testpersonen zu prüfen ist. Kein Commit, ki-nachweis/ nicht ändern.
Berichte:
` + JSON.stringify({ bau, pruefungen }, null, 1), { label: 'nacharbeit', phase: 'Nacharbeit', schema: {
  type: 'object',
  properties: {
    umgesetzt: { type: 'array', items: { type: 'string' } },
    nicht_umgesetzt: { type: 'array', items: { type: 'string' } },
    tests: { type: 'string' },
    screenshots: { type: 'array', items: { type: 'string' }, description: 'absolute Pfade der Stufenbilder von f01 für Yannick' },
    fuer_yannick: { type: 'array', items: { type: 'string' } },
  },
  required: ['umgesetzt', 'nicht_umgesetzt', 'tests', 'screenshots', 'fuer_yannick'],
} })

return { bau, pruefungen, nacharbeit }
