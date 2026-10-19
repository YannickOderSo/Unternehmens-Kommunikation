export const meta = {
  name: 'platzhalterbilder',
  description: 'Platzhalterbilder der Präsentation durch eigene Illustrationen ersetzen (Folie 01 Rätselbild, Folie 04 Persona), Platzhalter-Schilder entfernen, prüfen, Exporte erneuern',
  phases: [
    { title: 'Bilder', detail: 'Rätselbild und Persona-Illustration parallel als SVG, mit Sichtprüfung' },
    { title: 'Einbau', detail: 'marke.js, index.html, Notizen, Kästen, QUELLEN.md, B1/B2/B7' },
    { title: 'Prüfen', detail: 'Darstellung; Inhalt, Kennzeichnung und Rechte' },
    { title: 'Nacharbeit', detail: 'Befunde einarbeiten, Exporte erneuern' },
  ],
}

const GEMEINSAM = `
Kontext: Web-Präsentation einer studentischen Gruppenarbeit (Fallstudie 1 „Brand Persona & Markenidentität“, Marke HOLY, Modul Unternehmenskommunikation, HS Kaiserslautern) in /home/user/Unternehmens-Kommunikation/fallstudie-1-brand-persona/praesentation (index.html, marke.js, js/, css/, bilder/, werkzeuge/pruefen.mjs, LIESMICH.md, AUTOREN.md, QUELLEN.md). Öffentlich über GitHub Pages. Heute ist ${args.datum}, Vortrag Mo 26.10.2026. Gestaltung „Editorial“ (Tokens in css/, Themen editorial/bento/keynote, hell/dunkel). Markenfarben HOLY: Gelb #FFD007, Schwarz #1D1D1B (marke.js).
AUFTRAG VON YANNICK: „Und füge weitestgehend alle Platzhalter Bilder ein und mache dann das Platzhalter Schild weg.“
Bestand:
- Folie 01 (f01, Bündel A): Rätselbild marke.js → raetselBild = 'bilder/platzhalter-raetsel.svg' (gezeichnete Dose und Shaker vor Gelb, ohne Logo). js/folien/01-einstieg.js zeigt die Pille „Platzhalterbild“, solange der Dateiname „platzhalter“ enthält. Ablauf: Schritt 0 stark vergrößert und unscharf (Rätsel „Welche Marke steckt dahinter?“), Schritt 1 scharf und herausgezoomt, Logo erscheint, Schritt 2 Bild in der rechten Bildtafel neben der Titelfolie; Zoompunkt data-fokus im HTML. Lies den Kommentarblock „01-einstieg.html“ und den Kasten „FOLIE 01“ in index.html.
- Folie 04 (f04, Bündel A): Persona „Marco, 28“ (Kern-Persona, Fachkraft für Lagerlogistik im Drei-Schicht-Betrieb, Großstadt, trinkt HOLY vor Spät- und Nachtschichten, Zitat fiktiv: „Ohne Zucker durch die Nachtschicht – und es schmeckt.“; siehe ../persona-steckbrief.md §2). Bild bisher: gezeichnete, gesichtslose Figur im Inline-SVG bzw. bilder/platzhalter-persona.svg mit dem Hinweis „Platzhalter – KI-Bild folgt“ (Daten bildHinweis). Geplant war ein fotorealistisches KI-Bild über Prompt P6 (../prompts.md), das es in dieser Sitzung nicht gibt.
- Folie 09 (f09, Bündel C, Elias): Schlüsselbild ist ein Piktogramm statt Raptor-Screenshot. Regel QUELLEN.md §4: Social-Media-Bilder von HOLY nur nach Zustimmung des Betreuers. NICHT ändern; nur im Bericht als offen nennen.
ENTSCHEIDUNG: Es gibt in dieser Umgebung keinen Bildgenerator und keine eigenen Fotos. Fotos oder Bilder von HOLY aus dem Netz dürfen nicht verwendet werden (Rechte, öffentliches Repository). Deshalb ersetzen wir die beiden Platzhalter durch hochwertige EIGENE ILLUSTRATIONEN (SVG, von Hand bzw. per Skript gezeichnet), die als fertige Bilder taugen, und kennzeichnen sie ehrlich: „Illustration: eigene Gestaltung, KI-gestützt (Claude Code), 19.10.2026“. Yannick kann später jederzeit ein eigenes Foto bzw. ein KI-Foto nach P6 eintragen.
Feste Regeln: Kein Logo und kein Schriftzug von HOLY in den Illustrationen (das Logo erscheint auf f01 separat). Verpackung höchstens nachempfunden (Farben, Pappdose, Comic-Tier-Stil laut Recherche-Dossier 6.3/6.4), nicht kopiert. Keine echten Personen. Keine externen Ressourcen, keine Bibliotheken. Nichts an Inhalten anderer Folien ändern; nicht ki-nachweis/*, nicht ../*.md außer ausdrücklich genannt. Kein git commit. Keine Modellbezeichnungen (Namen von KI-Modellen) in Dateien. Deutsch.
Rendern zum Ansehen: /opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell --no-sandbox --disable-gpu --hide-scrollbars --window-size=B,H --screenshot=… file://…svg, oder Playwright (PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core). Prüfwerkzeug: im Ordner praesentation: node werkzeuge/pruefen.mjs index.html --ausgabe _test/<name> --schritte [--nur f01,f04] [--thema bento|keynote] [--modus dunkel]. Schreibe Testausgaben nur nach praesentation/_test/.
`
const BILD = {
  type: 'object',
  properties: {
    datei: { type: 'string' },
    beschreibung: { type: 'string', description: 'Motiv, Aufbau, Farben, Format' },
    einbau: { type: 'string', description: 'was der Einbau tun muss (Pfad, Zoompunkt, Seitenverhältnis, Hinweise)' },
    gesehen: { type: 'string', description: 'welche Renderings du selbst angesehen hast und was du verbessert hast' },
    offen: { type: 'array', items: { type: 'string' } },
  },
  required: ['datei', 'beschreibung', 'einbau', 'gesehen', 'offen'],
}

const BILDER = [
  { key: 'raetsel', prompt: `BILD 1 – RÄTSELBILD FÜR FOLIE 01: Neue Datei bilder/raetsel-holy.svg (ersetzt bilder/platzhalter-raetsel.svg; die alte Datei NICHT löschen). Schau dir zuerst die alte Datei, js/folien/01-einstieg.js, css/folien/01-*.css und die Renderings von f01 in allen drei Schritten an (pruefen.mjs --nur f01 --schritte), damit Format, Bildausschnitt und Zoom passen.
Motiv: Stillleben/Szene, die ein Publikum an HOLY denken lässt, ohne Schriftzug: eine runde Pappdose für Getränkepulver mit Comic-Tier-Figur (eigene Figur, z. B. frech grinsendes Tier), daneben ein Shaker mit Getränk in kräftiger Farbe, ein paar Eiswürfel/Pulverkörnchen, Hintergrund in HOLY-Gelb #FFD007 mit schwarzen Akzenten (#1D1D1B); moderner, flacher Illustrationsstil mit Tiefe (Schatten, Lichtkanten), der auf 1920×1080 hochwertig wirkt. Schritt 0 (stark vergrößert, unscharf) darf die Marke nicht verraten, soll aber Gelb-Schwarz und eine markante Form zeigen; der Zoompunkt soll auf einem typischen Detail liegen (z. B. Tiergesicht), nicht auf einem Schriftzug. Schlage den Zoompunkt (data-fokus in Prozent) vor.
Iteriere mindestens dreimal: rendern, ansehen (auch verkleinert in der Bildtafel von Schritt 2 und als unscharfe Vorschau), verbessern. Gib den Pfad und die Vorgaben für den Einbau zurück; ändere index.html, marke.js und JS NICHT (das macht der Einbau).` },
  { key: 'persona', prompt: `BILD 2 – PERSONA-ILLUSTRATION FÜR FOLIE 04: Neue Datei bilder/persona-marco.svg. Schau dir zuerst das heutige Inline-SVG bzw. bilder/platzhalter-persona.svg, css/folien/04-persona.css, js/folien/04-persona.js und die Renderings von f04 an (pruefen.mjs --nur f04 --schritte, auch --thema bento/keynote und --modus dunkel), damit Seitenverhältnis, Rahmen und Farben passen.
Motiv: Marco, 28, freundlich, Ende zwanzig, im Lager eines Logistikzentrums zu Beginn der Nachtschicht: Arbeitsjacke mit Warnweste oder Reflexstreifen, im Hintergrund Hochregale und Hallenlicht, durch ein Fenster Nacht/Mond; er hält einen Shaker mit buntem Getränk (ohne Logo). Mit Gesicht und Ausdruck (keine gesichtslose Figur), nicht karikiert, respektvoll, keine Stereotype. Flacher, hochwertiger Illustrationsstil passend zur Präsentation (Farben aus den Tokens/der bisherigen Zeichnung, ein gelber HOLY-Akzent), funktioniert in hell und dunkel. Keine Schrift im Bild.
Iteriere mindestens dreimal: rendern, im Folienrahmen ansehen (auch in Bento und Keynote, dunkel), verbessern. Gib den Pfad und die Vorgaben für den Einbau zurück; ändere index.html, marke.js und JS NICHT (das macht der Einbau). Liefere zusätzlich einen fertig ausgefüllten Prompt nach P6 (../prompts.md) für ein späteres fotorealistisches KI-Bild (Alter, Beruf, Situation, Stil aus dem Steckbrief), damit Yannick ihn optional selbst verwenden kann – nur als Text im Feld „einbau“.` },
]

phase('Bilder')
const bilder = (await parallel(BILDER.map(b => () =>
  agent(`${GEMEINSAM}\n${b.prompt}`, { label: `bild:${b.key}`, phase: 'Bilder', schema: BILD })))).filter(Boolean)
log(`${bilder.length} von 2 Bildern`)
// Erster Lauf nur bis hier (args.nurBilder), weil parallel Workflow D15 dieselben Dateien ändert;
// der Einbau folgt per resume nach dem Ende von D15 (die Bilder kommen dann aus dem Zwischenspeicher).
if (args.nurBilder) return { bilder }

const AENDERUNGEN = {
  type: 'object',
  properties: {
    geaendert: { type: 'array', items: { type: 'object', properties: { datei: { type: 'string' }, stelle: { type: 'string' }, was: { type: 'string' } }, required: ['datei', 'stelle', 'was'] } },
    geprueft: { type: 'string' },
    offen: { type: 'array', items: { type: 'string' } },
  },
  required: ['geaendert', 'geprueft', 'offen'],
}
phase('Einbau')
const einbau = await agent(`${GEMEINSAM}
Auftrag EINBAU der fertigen Bilder (Bericht unten).
1. Folie 01: marke.js → raetselBild auf 'bilder/raetsel-holy.svg' (Kommentar anpassen); data-fokus nach Vorgabe; Fußzeile „Bild: …“ auf „Illustration: eigene Gestaltung, KI-gestützt (Claude Code), 19.10.2026“ (Logo-Quelle bleibt); die Pille „Platzhalterbild“ verschwindet dann von selbst (Dateiname ohne „platzhalter“) – prüfen. Kasten „FOLIE 01“ und Kommentarblock: Bild ist jetzt eine Illustration; ein eigenes Foto bleibt möglich (wie). Notizen ggf. anpassen.
2. Folie 04: Persona-Bild auf bilder/persona-marco.svg umstellen (so, wie die Folie Bilder einbindet – Daten/Skript prüfen; das Inline-SVG nur entfernen, wenn es durch die Datei ersetzt wird), bildHinweis-Schild „Platzhalter – KI-Bild folgt“ entfernen bzw. durch eine kleine Kennzeichnung „Illustration (KI-gestützt)“ ersetzen, wenn die Folie eine Bildkennzeichnung vorsieht; Fußzeile „Person und Zitat fiktiv“ → „Person, Bild und Zitat fiktiv; Illustration: eigene Gestaltung, KI-gestützt“ (kurz halten, Fußzeilenlänge beachten). Kasten „FOLIE 04“, Notizen, B1-Notizen („noch ein Platzhalter“ streichen), B2 Zeile P6 (P6 jetzt: „Persona-Bild als eigene Illustration statt Bildgenerator; P6 optional“), B7 Zeile „Icons, Grafiken“ falls nötig.
3. QUELLEN.md (§3 Bilder) und LIESMICH.md (Checkliste: Rätselbild/Persona-Bild erledigt, wie man ein eigenes Foto oder ein P6-Bild einträgt; P6-Prompt aus dem Bericht als Vorlage) und AUTOREN.md (Änderungstabelle) aktualisieren. ../prompts.md: unter P6 einen Satz „Stand 19.10.2026: Folie 04 nutzt eine eigene Illustration; P6 optional“ ergänzen – sonst keine ../*.md ändern.
4. Folie 09 NICHT ändern (Bündel C, Zustimmung des Betreuers offen).
5. Prüfen: pruefen.mjs --schritte --optional in editorial; --nur f01,f04,b1,b2,b7 zusätzlich in bento, keynote und dunkel; 0 Fehler; Screenshots von f01 (alle Schritte) und f04 selbst ansehen. Suche danach im sichtbaren Text aller Folien nach „Platzhalter“ (Druckmodus-Text oder DOM) und melde jeden Rest.
Bericht der Bilder (JSON):
${JSON.stringify(bilder, null, 1)}`, { label: 'einbau', phase: 'Einbau', schema: AENDERUNGEN })

const BEFUNDE = {
  type: 'object',
  properties: {
    pruefer: { type: 'string' },
    befunde: { type: 'array', items: { type: 'object', properties: {
      schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] }, stelle: { type: 'string' }, problem: { type: 'string' }, beleg: { type: 'string' }, vorschlag: { type: 'string' } },
      required: ['schwere', 'stelle', 'problem', 'beleg', 'vorschlag'] } },
    gesamturteil: { type: 'string' },
  },
  required: ['pruefer', 'befunde', 'gesamturteil'],
}
const STAND = JSON.stringify({ bilder, einbau }, null, 1)
const PRUEFER = [
  { key: 'darstellung', prompt: `Prüfer DARSTELLUNG (adversarial): Wirken die Illustrationen hochwertig und stimmig zur Präsentation (nicht kindlich, nicht billig, keine Zeichenfehler wie verdrehte Hände, abgeschnittene Köpfe, Kanten)? f01 in allen drei Schritten: verrät Schritt 0 die Marke? ist Schritt 1/2 scharf und gut im Rahmen? f04: Proportionen, Ausdruck, Lesbarkeit der Folie, Kontrast zum Rahmen, hell/dunkel, editorial/bento/keynote. Übersicht/PDF-Darstellung. pruefen.mjs --schritte --optional muss 0 Fehler haben. Sieh dir alle Screenshots selbst an.` },
  { key: 'inhalt', prompt: `Prüfer INHALT, KENNZEICHNUNG, RECHTE (adversarial): Ist jede Illustration ehrlich gekennzeichnet (eigene Gestaltung, KI-gestützt) – auf der Folie bzw. in der Fußzeile, in QUELLEN.md, B7, B2? Enthalten die SVGs Logo, Schriftzug oder 1:1 kopierte Verpackungsmotive von HOLY? Passt das Persona-Bild zum Steckbrief (Alter, Beruf, Schicht, kein Gaming-Anlass) und zum Hinweis „fiktiv“? Sind alle sichtbaren „Platzhalter“-Schilder auf 01 und 04 weg, und stimmen Notizen, Kästen, LIESMICH-Checkliste, B1/B2 überein (keine Reste wie „KI-Bild folgt“, „noch ein Platzhalter“)? Wurde Folie 09 unverändert gelassen? Keine Modellbezeichnungen in Dateien.` },
]
phase('Prüfen')
const pruefungen = (await parallel(PRUEFER.map(p => () =>
  agent(`${GEMEINSAM}\nNur prüfen (schreiben nur unter praesentation/_test/). Stand (JSON):\n${STAND}\n\n${p.prompt}\nJeder Befund mit Beleg und Vorschlag; erfinde keine Befunde.`,
    { label: `pruefen:${p.key}`, phase: 'Prüfen', schema: BEFUNDE })))).filter(Boolean)
log(`${pruefungen.flatMap(p => p.befunde).length} Befunde`)

phase('Nacharbeit')
const nacharbeit = await agent(`${GEMEINSAM}
Auftrag NACHARBEIT: Arbeite alle hohen und mittleren Befunde ein (auch an den SVGs, falls nötig), niedrige, wenn klar und klein. Danach pruefen.mjs index.html --schritte --optional (0 Fehler) und Exporte nach AUTOREN.md Abschnitt „Exporte erzeugen“ erneuern (PDF ohne 01b, Folienbilder, Übersicht mit --stand 19.10.2026). Melde Umgesetztes, Nicht-Umgesetztes mit Grund, Testergebnis und den fertigen P6-Prompt für Yannick.
Befunde (JSON):
${JSON.stringify(pruefungen, null, 1)}`, { label: 'nacharbeit', phase: 'Nacharbeit', schema: {
  type: 'object',
  properties: {
    umgesetzt: { type: 'array', items: { type: 'string' } },
    nicht_umgesetzt: { type: 'array', items: { type: 'string' } },
    tests: { type: 'string' },
    fuer_yannick: { type: 'array', items: { type: 'string' } },
  },
  required: ['umgesetzt', 'nicht_umgesetzt', 'tests', 'fuer_yannick'],
} })

return { bilder, einbau, pruefungen, nacharbeit }
