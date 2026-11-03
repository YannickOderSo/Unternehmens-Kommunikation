export const meta = {
  name: 'fs2-webseite-echt',
  description: 'Konzept-Webseite so umgestalten, dass sie wie ein echter HOLY-Shop aussieht: 3 Entwürfe, Jury, Umbau aller 7 Seiten, Abnahme, Nacharbeit',
  phases: [
    { title: 'Entwürfe', detail: '3 Gestaltungsrichtungen für Start- und Produktseite in getrennten Kopien' },
    { title: 'Jury', detail: '2 unabhängige Bewertungen anhand von Bildschirmfotos' },
    { title: 'Umbau', detail: 'Siegerentwurf auf alle 7 Seiten, Prüfskripte, Folie-08-Bilder' },
    { title: 'Abnahme', detail: 'Gestaltung/Realismus und Technik/Ehrlichkeit' },
    { title: 'Nacharbeit', detail: 'Befunde umsetzen und erneut prüfen' },
  ],
}

const R = '/home/user/Unternehmens-Kommunikation'
const FS2 = R + '/fallstudie-2-customer-journey'
const WEB = FS2 + '/konzept-website'
const SP = '/tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad/d09'
const REF = FS2 + '/praesentation/intern/roh/touchpoints'

const AUFTRAG = `
AUSLÖSER (Yannick, 03.11.2026, wörtlich): „Das Video läuft nur die Seite soll schon wie eine richtige Webseite aussehen das sieht eher wie ein konzept aus.“
Gemeint ist die Konzept-Webseite ${WEB}/ (7 Seiten: index, koffein-check, produkt, warenkorb, danke, squad, haendler; Stand Commit ae2a266). Sie wirkt heute wie ein Entwurf: cremefarbene Flächen, gestrichelte Kästen, viele Erklärsätze, „Beispielwert“-Etiketten, Skizzen, „(Konzept)“ in Knöpfen, „KONZEPT“ unter der Wortmarke, Bildnachweise unter jedem Bild, eher kleine Bilder, formularartige Gestaltung. Ziel: Sie soll aussehen wie eine echte, professionelle Shop-Webseite von HOLY – die Seite zeigt ja, wie HOLYs Webseite nach unserem Konzept aussehen könnte.

REFERENZ für die Formensprache von HOLYs echtem Shop (nur ansehen mit dem Read-Werkzeug, keine Bilder daraus übernehmen): ${REF}/k3-produkt-starterset/ (k3-produktseite-raspberry-raptor-oben-desktop.png, -mobil.png, -preis-*.png, k3-starterset-energy-*.png, k3-mix-and-match-seite-*.png), ${REF}/k6-squad-rewards/, ${REF}/kauf-warenkorb/, ${REF}/k1-creator-video/ (Landingpages *-x-holy-*), ${REF}/earned-bewertungen/ (produktseite-bewertungen). Typische Merkmale: schmale Ankündigungsleiste oben, Kopfzeile mit Wortmarke, Navigation und Icons (Suche, Konto, Warenkorb), Hintergrund in der Sortenfarbe (Raspberry Raptor: Pink), große abgerundete Bildkarte, weiße Infokarte, sehr fette schmale Überschriften, Sternebewertung, Packungs-Karten mit Bild und Preis, Kacheln mit Symbolen, große Kaufknöpfe, Fuß mit Spalten.

MUSS BLEIBEN (Sicherheit und Ehrlichkeit – nicht verhandelbar; die Seite ist öffentlich auf GitHub Pages und trägt HOLYs Marke):
1. Der Hinweistext exakt „Studentisches Konzept der Gruppe (HS Kaiserslautern) – keine Website der HOLY Softdrinks GmbH · keine Bestellung möglich“ steht auf jeder Seite oben ohne Scrollen lesbar (Kontrast ≥ 4,5:1). Er darf wie eine echte schmale Ankündigungsleiste gestaltet sein. meta robots „noindex,nofollow“ bleibt. Im Fuß bleibt der Satz „Studentisches Konzept …“, die Liste der Bildnachweise (data-nur-intern/data-intern-liste wie heute) und der Quellen-Link.
2. Keine <form>, keine Eingabefelder, die etwas absenden, keine Felder für Passwort, Kartennummer, IBAN, Adresse oder Login. Knöpfe führen nur zur nächsten Konzeptseite. Keine externen Anfragen (keine CDNs, keine Webfonts von außen).
3. Kennzeichnungen bleiben sichtbar: „Werbung“ beim Creator-Code (Kennzeichnungspflicht), „Symbolbild“ als kleines Etikett am Bild bei Symbolbildern (Karton, Regal). Die übrigen Bildnachweise dürfen aus der Bildunterschrift in den Fuß wandern.
4. Alle Inhalte, Maßnahmen und Rechnungen bleiben erhalten (Code-Übernahme, Koffein-Check, Preise, Preis je Portion, Grundpreis, Code-Abzug, Versand, Liefertermin, Coins, Level, QR-Code-Einstieg, Nachfüll-Erinnerung, Service). Fakten über HOLY nur, wenn sie schon auf der Seite stehen oder mit Befund-ID im Dossier ${FS2}/recherche-customer-journey.md belegt sind – KEINE neuen Werbeaussagen ohne Quelle (z. B. nicht „7 Vitamine“, „NewCaff“, „Zuckerfrei“ erfinden, nur wenn mit ID belegt).
5. Alle IDs, Klassen und data-Attribute, auf die ${WEB}/assets/konzept.js, ${WEB}/werkzeuge/pruefen.mjs und ${WEB}/werkzeuge/folie08-bilder.mjs zugreifen, bleiben funktionsfähig (vorher per grep prüfen; z. B. #packung-titel, #h-weiter, .option[data-packung], data-intern*, data-k-*, data-mit-packung, data-ohne-anmerkungen, .fuss .nur-anm a, .anm, data-ziel).
6. Präsentationsmodus (?anmerkungen=1) bleibt mit allen Anmerkungen. Erklärsätze für die Präsentation, Skizzen, „Beispielwert“-Etiketten und Sätze wie „Konzept: Der Knopf führt nur zur nächsten Konzeptseite“ dürfen in der normalen Ansicht verschwinden, wenn sie im Präsentationsmodus sichtbar sind. In der normalen Ansicht genügt dann ein Satz im Fuß: „Liefertermine, Bestellnummer, Coins und Kontostände sind Beispielwerte.“ „(Konzept)“ in Knopftexten und „KONZEPT“ unter der Wortmarke dürfen weg (die Hinweisleiste trägt die Kennzeichnung).
7. Mobil zuerst (390 × 844), kein waagerechtes Scrollen ab 320 px, Fokus sichtbar, alt-Texte, Kontrast ≥ 4,5:1 für Text.
8. Schriften nur lokal: ${WEB}/schriften/ (Bricolage Grotesque, variabel: Breite 75–100 %, Gewicht 200–800 – schmal und fett passt zu HOLYs Überschriften). Inter darf aus ${FS2}/praesentation/schriften/ kopiert werden (Lizenzdatei mitkopieren, HERKUNFT.txt ergänzen).
9. Bilder: vorhandene Dateien in fremdbilder/ (Register fremdbilder/register.js). Neue Ausschnitte nur aus vorhandenen Dateien (fremdbilder/ oder ${FS2}/praesentation/intern/roh/produkt/), mit Registereintrag (datei, alt, nachweis, motiv, platz, quelle, pixel). Keine neuen Downloads. Keine Gesichter oder Namen von Privatpersonen.
10. Nichts committen/pushen, kein git reset/checkout/stash. Keine Namen von KI-Modellen in Dateien. Sprache Deutsch.
Playwright: PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core, Chromium mit --no-sandbox, Netz nach außen per Route sperren.
`

const RICHTUNGEN = [
  { key: 'holy-nah', titel: 'HOLY-nah', text: 'Formensprache von HOLYs echtem Shop möglichst nah treffen (eigene Umsetzung, kein Nachbau einzelner Grafiken): Produktseite auf Pink (Raspberry Raptor), große abgerundete Bildkarte links, weiße Infokarte rechts, sehr fette schmale Überschriften (Bricolage 75 % Breite, 800), Packungs-Karten wie im Shop, Sterne, Ankündigungsleiste oben (gelb), Kopfzeile mit Navigation und Icons. Startseite: Creator-Landingpage mit großem Produktbild und Code-Gutschein.' },
  { key: 'shop-standard', titel: 'Moderner Shop-Standard', text: 'Klarer, heller E-Commerce-Standard wie gute Shopify-Shops: viel Weiß, große Produktbilder mit Galerie, Produktkarten-Raster, mobile Kaufleiste unten (sticky), deutliche Preis-Hierarchie, Vertrauenselemente (Bewertungen, Versand, Garantie) als Symbolreihe; HOLY-Gelb und -Pink als Akzent, fette schmale Überschriften.' },
  { key: 'kampagne', titel: 'Kampagnen-Look', text: 'Mutig und markennah wie eine Kampagnenseite, die in den Shop übergeht: farbige Vollflächen-Abschnitte (Gelb, Pink, Schwarz), sehr große Typografie, großes Hero-Produktbild, Bewertungs-Band, Sortenfarben, kräftige Knöpfe; trotzdem klarer Kaufweg und gute Lesbarkeit mobil.' },
]

const ENTWURF_SCHEMA = {
  type: 'object',
  properties: {
    ordner: { type: 'string' },
    bilder: { type: 'array', items: { type: 'string' } },
    beschreibung: { type: 'string' },
    pruefungen: { type: 'string' },
    risiken: { type: 'string' },
  },
  required: ['ordner', 'bilder', 'beschreibung', 'pruefungen', 'risiken'],
}

const JURY_SCHEMA = {
  type: 'object',
  properties: {
    bewertungen: { type: 'array', items: { type: 'object', properties: {
      key: { type: 'string' },
      realismus: { type: 'number' }, markennaehe: { type: 'number' }, mobil: { type: 'number' },
      lesbarkeit: { type: 'number' }, ehrlichkeit: { type: 'number' }, uebertragbarkeit: { type: 'number' },
      summe: { type: 'number' }, staerken: { type: 'string' }, schwaechen: { type: 'string' } },
      required: ['key', 'realismus', 'markennaehe', 'mobil', 'lesbarkeit', 'ehrlichkeit', 'uebertragbarkeit', 'summe', 'staerken', 'schwaechen'] } },
    sieger: { type: 'string' },
    uebernehmen: { type: 'array', items: { type: 'string' } },
    begruendung: { type: 'string' },
  },
  required: ['bewertungen', 'sieger', 'uebernehmen', 'begruendung'],
}

const BAU_SCHEMA = {
  type: 'object',
  properties: {
    dateien: { type: 'array', items: { type: 'string' } },
    erledigt: { type: 'string' },
    pruefungen: { type: 'string' },
    offen: { type: 'array', items: { type: 'string' } },
    hinweise_hauptsitzung: { type: 'string' },
  },
  required: ['dateien', 'erledigt', 'pruefungen', 'offen', 'hinweise_hauptsitzung'],
}

const PRUEF_SCHEMA = {
  type: 'object',
  properties: {
    befunde: { type: 'array', items: { type: 'object', properties: {
      schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] }, datei: { type: 'string' }, stelle: { type: 'string' },
      problem: { type: 'string' }, vorschlag: { type: 'string' } }, required: ['schwere', 'datei', 'stelle', 'problem', 'vorschlag'] } },
    fazit: { type: 'string' },
  },
  required: ['befunde', 'fazit'],
}

/* ---------- Phase 1: drei Entwürfe in getrennten Kopien ---------- */
phase('Entwürfe')
const entwuerfe = (await parallel(RICHTUNGEN.map((r) => () => agent(
  `Du bist Gestalter:in für einen ENTWURF der Richtung „${r.titel}“.
${AUFTRAG}
RICHTUNG: ${r.text}

ARBEITSWEISE:
- Lege eine eigene Kopie an: mkdir -p ${SP}/${r.key} && cp -r ${WEB} ${SP}/${r.key}/konzept-website (dazu bei Bedarf Schriften aus ${FS2}/praesentation/schriften/ in die Kopie). Arbeite AUSSCHLIESSLICH in dieser Kopie. Das Repository nicht ändern.
- Sieh dir zuerst die Referenzbilder und den heutigen Stand an (${WEB}/intern/vorschau/01-index-1280.png, 03-produkt-1280.png, 01-index-ganz.png, 03-produkt-ganz.png).
- Gestalte index.html und produkt.html (und das gemeinsame CSS, ggf. kleine Anpassungen an konzept.js) vollständig in deiner Richtung, mobil und Desktop. Alle Regeln unter MUSS BLEIBEN gelten auch im Entwurf. Die übrigen 5 Seiten müssen nicht schön sein, dürfen aber nicht kaputtgehen.
- Bildschirmfotos (deviceScaleFactor 1) nach ${SP}/${r.key}/bilder/: index-390.png (erster Bildschirm 390 × 844), index-390-ganz.png, index-1280.png (1280 × 800), index-1280-ganz.png, produkt-390.png, produkt-390-ganz.png, produkt-1280.png, produkt-1280-ganz.png, produkt-390-anmerkungen.png (?anmerkungen=1). Sieh dir jedes Bild mit dem Read-Werkzeug an und verbessere, bis es wie ein echter Shop wirkt.
- Kurzprüfung in der Kopie: keine Konsolenfehler, keine externen Anfragen (per Route sperren), kein waagerechtes Scrollen bei 320 px, Hinweisleiste sichtbar und exakt, noindex vorhanden; wenn möglich node werkzeuge/pruefen.mjs der Kopie laufen lassen und Fehler nennen (Fehler, die nur an geänderter Struktur liegen, als Risiko für den Umbau notieren).
ERGEBNIS: ordner (Pfad der Kopie), bilder (Pfade), beschreibung (Gestaltungsidee, Farben, Schrift, Bausteine), pruefungen, risiken (was beim Übertrag auf alle Seiten/Prüfskripte zu beachten ist).`,
  { label: 'entwurf:' + r.key, phase: 'Entwürfe', schema: ENTWURF_SCHEMA })
  .then((e) => (e ? { ...e, key: r.key, titel: r.titel } : null))))).filter(Boolean)

log('Entwürfe fertig: ' + entwuerfe.map((e) => e.key).join(', '))
if (!entwuerfe.length) return { fehler: 'keine Entwürfe' }

/* ---------- Phase 2: Jury ---------- */
phase('Jury')
const juryText = (blickwinkel) => `Du bist Jury-Mitglied (${blickwinkel}). Bewerte ${entwuerfe.length} Entwürfe für die Konzept-Webseite unabhängig.
${AUFTRAG}
ENTWÜRFE:
${entwuerfe.map((e) => `- ${e.key} („${e.titel}“): Ordner ${e.ordner}; Bilder: ${e.bilder.join(', ')}\n  Beschreibung: ${e.beschreibung}\n  Risiken: ${e.risiken}`).join('\n')}
VERGLEICH: heutiger Stand ${WEB}/intern/vorschau/01-index-1280.png, 03-produkt-1280.png, 01-index-ganz.png, 03-produkt-ganz.png; HOLYs echter Shop ${REF}/k3-produkt-starterset/k3-produktseite-raspberry-raptor-oben-desktop.png und -mobil.png.
Sieh dir ALLE Bilder jedes Entwurfs mit dem Read-Werkzeug an. Öffne bei Bedarf die Seiten selbst (Playwright) in den Kopien. Prüfe stichprobenhaft die MUSS-Regeln (Hinweisleiste exakt und sichtbar, Werbung/Symbolbild-Kennzeichnung, keine Formulare, keine externen Anfragen, Präsentationsmodus funktioniert).
Vergib je Entwurf 1–10 Punkte: realismus (wirkt wie ein echter, professioneller Shop), markennaehe (passt zu HOLYs Marke), mobil (390 px), lesbarkeit (Kontrast, Hierarchie, Barrierearmut), ehrlichkeit (MUSS-Regeln eingehalten, Kennzeichnung nicht versteckt), uebertragbarkeit (lässt sich sauber auf Warenkorb, Danke, Squad, Händler, Koffein-Check übertragen). summe = Summe der sechs. Nenne sieger (key) und uebernehmen (konkrete gute Ideen aus den anderen Entwürfen, die der Sieger übernehmen soll).`
const urteile = (await parallel([
  () => agent(juryText('Blickwinkel Kundschaft und Markenwirkung: Würde Marco, 28, das für HOLYs echten Shop halten? Wirkt es hochwertig?'), { label: 'jury:marke', phase: 'Jury', schema: JURY_SCHEMA }),
  () => agent(juryText('Blickwinkel Umsetzung, Barrierefreiheit und Ehrlichkeit: Ist es sauber, lesbar, übertragbar und hält es alle MUSS-Regeln ein?'), { label: 'jury:umsetzung', phase: 'Jury', schema: JURY_SCHEMA }),
])).filter(Boolean)

const punkte = {}
entwuerfe.forEach((e) => { punkte[e.key] = 0 })
urteile.forEach((u) => (u.bewertungen || []).forEach((b) => { if (b.key in punkte) punkte[b.key] += Number(b.summe) || 0 }))
const rangfolge = Object.keys(punkte).sort((a, b) => punkte[b] - punkte[a])
const sieger = entwuerfe.find((e) => e.key === rangfolge[0])
const uebernehmen = urteile.flatMap((u) => u.uebernehmen || [])
log('Jury: ' + rangfolge.map((k) => k + ' ' + punkte[k]).join(' · ') + ' → Sieger ' + sieger.key)

/* ---------- Phase 3: Umbau aller 7 Seiten ---------- */
phase('Umbau')
const bau = await agent(`Du bist der Bauer. Übertrage den Siegerentwurf „${sieger.titel}“ (${sieger.key}) auf die echte Konzept-Webseite ${WEB}/ – alle 7 Seiten.
${AUFTRAG}
SIEGERENTWURF: Kopie ${sieger.ordner}; Bilder ${sieger.bilder.join(', ')}; Beschreibung: ${sieger.beschreibung}; Risiken: ${sieger.risiken}
JURY (Punkte gesamt): ${rangfolge.map((k) => k + ' ' + punkte[k]).join(', ')}. Begründungen: ${urteile.map((u) => u.begruendung).join(' | ')}
AUS DEN ANDEREN ENTWÜRFEN ÜBERNEHMEN (prüfen, sinnvoll einbauen): ${uebernehmen.join(' | ') || '–'}
Andere Entwürfe zum Nachsehen: ${entwuerfe.filter((e) => e.key !== sieger.key).map((e) => e.ordner).join(', ')}

AUFGABEN:
1. index.html und produkt.html aus dem Siegerentwurf übernehmen (Diff gegen ${WEB} prüfen, nichts Funktionales verlieren) und koffein-check, warenkorb, danke, squad, haendler im selben Stil gestalten (Warenkorb wie ein echter Shop-Warenkorb, Danke-Seite wie eine echte Bestellbestätigung, Squad wie ein echtes Kundenkonto-/Rewards-Dashboard, Händlerseite wie eine echte QR-Landingpage, Koffein-Check wie ein echter Ratgeber-Artikel im Shop).
2. werkzeuge/pruefen.mjs anpassen, wo es an alter Gestaltung hängt (z. B. Erster-Bildschirm-Prüfungen, Selektoren). Sicherheits- und Ehrlichkeitsprüfungen (Hinweisbalken exakt, noindex, keine Formulare, keine externen Anfragen, Links, Rechnungen, Kennzeichnung, Bildnachweise, Register) NICHT abschwächen; bei Bedarf ergänzen (z. B. „Werbung“ beim Code sichtbar, „Symbolbild“-Etikett sichtbar, Beispielwert-Satz im Fuß).
3. werkzeuge/folie08-bilder.mjs: Die fünf Bildschirmfotos für Folie 08 (390 × 844; produkt mit ?packung=50 ab #packung-titel, warenkorb/danke mit ?packung=50, danke ab #h-weiter) müssen weiter die Anmerkungen von Folie 08 tragen: „Code steht schon da, zwei klare Wege“, „Koffein als Text statt Etikettbild“, „Preis je Portion und Grundpreis“, „ein Liefertermin, Endpreis vorab“, „Squad in einem Schritt statt Sackgasse“. Anker bei Bedarf anpassen. Beide Modi laufen lassen (ohne Schalter → praesentation/bilder/, mit --intern → praesentation/fremdbilder/) und alle 10 Bilder ansehen. praesentation/fremdbilder/register.js NICHT ändern – neue alt-Texte für konzept-01..05 ins Ergebnis schreiben.
4. README.md (Gestaltung, Kennzeichnung, Prüfen, Seitenliste) auf den neuen Stand; neue Schriften in schriften/HERKUNFT.txt.
5. Prüfen: node ${WEB}/werkzeuge/pruefen.mjs → 0 Fehler (schreibt _vorschau/ neu – gewollt). Alle 7 Seiten bei 390 (erster Bildschirm und ganz), 1280 und 320 px ansehen (Read), außerdem ?anmerkungen=1 bei 390 px für index und produkt. Kein Konsolenfehler, keine externe Anfrage.
ERGEBNIS: dateien, erledigt, pruefungen, offen, hinweise_hauptsitzung (inkl. alt-Texte konzept-01..05, Quellen neuer Aussagen).`, { label: 'umbau', phase: 'Umbau', schema: BAU_SCHEMA })

/* ---------- Phase 4: Abnahme ---------- */
phase('Abnahme')
const KONTEXT = `\nKontext – Ergebnis des Bauers (nicht ungeprüft übernehmen):\n` + JSON.stringify(bau).slice(0, 10000) + `\n` + AUFTRAG
const abnahmen = (await parallel([
  () => agent(`Prüfe die umgestaltete Konzept-Webseite ${WEB}/ adversarial unter dem Blickwinkel GESTALTUNG UND REALISMUS. Ändere NICHTS im Repository (eigene Bildschirmfotos nach ${SP}/abnahme-gestaltung/). Frage: Wirkt jede der 7 Seiten (390 px erster Bildschirm und ganz, 1280 px) wie ein echter, professioneller Shop von HOLY – oder wo wirkt sie noch wie ein Konzept/Entwurf? Vergleiche mit HOLYs echtem Shop (${REF}/…) und mit dem alten Stand (git show ae2a266:fallstudie-2-customer-journey/konzept-website/_vorschau/01-index.png usw.). Achte auf: Hierarchie, Abstände, Bildgrößen und -qualität (keine verpixelten oder verzerrten Bilder), Typografie, Knöpfe, Konsistenz über alle Seiten, leere oder gequetschte Bereiche, Platzhalter-Optik, abgeschnittene Texte, Desktop-Breiten. Prüfe auch die fünf Folie-08-Bilder ${FS2}/praesentation/fremdbilder/konzept-0*.png (sollen auf einem Handy-Rahmen gut aussehen und die Anmerkungen von Folie 08 belegen). Melde konkrete Befunde mit Schwere, Datei, Stelle, Problem, Vorschlag und Bildbeleg.` + KONTEXT, { label: 'abnahme:gestaltung', phase: 'Abnahme', schema: PRUEF_SCHEMA }),
  () => agent(`Prüfe die umgestaltete Konzept-Webseite ${WEB}/ adversarial unter dem Blickwinkel TECHNIK, EHRLICHKEIT UND SICHERHEIT. Ändere NICHTS im Repository; pruefen.mjs schreibt _vorschau/ – deshalb auf einer Kopie unter ${SP}/abnahme-technik/ laufen lassen. Prüfe: alle MUSS-Regeln (Hinweistext exakt und ohne Scrollen sichtbar auf allen Seiten, noindex, keine Formulare/Eingabefelder, keine externen Anfragen, „Werbung“ und „Symbolbild“ sichtbar, Beispielwert-Satz im Fuß, Bildnachweise im Fuß vollständig, Quellen-Link); alle Funktionen (Code-Übernahme ?code=, Packungswahl und ?packung=, Rechnungen gegen konzept.js, Warenkorb → Danke, Nachkauf ?nachkauf=1, Präsentationsmodus ?anmerkungen=1 mit allen Anmerkungen, Umschalter, Galerie); dass pruefen.mjs nicht abgeschwächt wurde (git diff ae2a266 -- …/werkzeuge/pruefen.mjs); keine neuen Fakten ohne Quelle (git diff der HTML-Texte gegen ae2a266; jede neue Aussage über HOLY mit Befund-ID?); Kontrast, Fokus, alt-Texte, 320 px; folie08-bilder.mjs beide Modi; keine KI-Modellnamen, keine personenbezogenen Daten. Melde konkrete Befunde mit Schwere, Datei, Stelle, Problem, Vorschlag und Beleg.` + KONTEXT, { label: 'abnahme:technik', phase: 'Abnahme', schema: PRUEF_SCHEMA }),
])).filter(Boolean)

/* ---------- Phase 5: Nacharbeit ---------- */
phase('Nacharbeit')
const befunde = abnahmen.flatMap((a) => a.befunde || [])
const nacharbeit = befunde.length ? await agent(`Du bist der Bauer für die Nacharbeit an der Konzept-Webseite ${WEB}/. Setze alle Befunde der Schwere hoch und mittel um und die niedrigen, wenn sie mit wenig Aufwand die Wirkung „echter Shop“ verbessern oder Ehrlichkeit/Technik betreffen. Prüfe jeden Befund zuerst selbst (nicht blind übernehmen); wenn du einen nicht umsetzt, begründe es.
BEFUNDE:
${JSON.stringify(befunde, null, 1).slice(0, 30000)}
FAZITS: ${abnahmen.map((a) => a.fazit).join(' | ').slice(0, 4000)}
Danach: node ${WEB}/werkzeuge/pruefen.mjs → 0 Fehler; folie08-bilder.mjs beide Modi (praesentation/fremdbilder/register.js NICHT ändern, neue alt-Texte ins Ergebnis); betroffene Seiten bei 390/1280/320 px ansehen.
${AUFTRAG}
ERGEBNIS: dateien, erledigt (je Befund: umgesetzt/nicht umgesetzt + Grund), pruefungen, offen, hinweise_hauptsitzung (inkl. alt-Texte konzept-01..05).`, { label: 'nacharbeit', phase: 'Nacharbeit', schema: BAU_SCHEMA }) : null

return { entwuerfe, urteile, punkte, sieger: sieger.key, bau, abnahmen, nacharbeit }
