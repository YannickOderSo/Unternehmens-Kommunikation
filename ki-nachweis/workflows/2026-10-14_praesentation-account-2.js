// Workflow-Skript von Account 2 (Yannick Heisler), 14.10.2026 – abgeleitet aus 2026-10-13_praesentation-layout.js
// (Übergabe-Prompt: ki-nachweis/uebergaben/2026-10-14_account-2_praesentation.md).
// Änderungen gegenüber dem Original (alles andere wörtlich übernommen):
//  - Phasen „Gestaltung“ und „Bewertung“ entfallen; Sieger (richtung-1, Editorial), Punkte, Übernahmen und Warnungen
//    aus praesentation/_entwuerfe/JURY.md als Konstanten (Listen wörtlich aus JURY.md, beide Jurys).
//  - Pfade: TOOLS im Scratchpad dieser Sitzung; Chromium unter /opt/pw-browsers/.
//  - REGELN, Punkt 2: Marke HOLY (statt „Marke steht noch nicht fest“), HOLY-Fakten nur aus dem Recherche-Dossier.
//  - Fundament: Hinweis auf das abgebrochene, unvollständige Fundament (prüfen, darauf aufbauen oder ersetzen)
//    und Markenname HOLY in marke.js.
//  - Jury-Hinweise werden ungekürzt übergeben (kurz-Grenze 12000 statt 4000/3000 Zeichen), damit keine Übernahme fehlt.
export const meta = {
  name: 'praesentation-account-2',
  description: 'Web-Präsentation Fallstudie 1 ab Fundament: Engine, Folien bauen/prüfen/überarbeiten, Integration, Abschlussprüfung, Feinschliff',
  phases: [
    { title: 'Fundament', detail: 'Engine, Designsystem, Bausteine, Werkzeuge' },
    { title: 'Folien', detail: 'sieben Folien-Gruppen parallel' },
    { title: 'Prüfung', detail: 'je Gruppe strenge Prüfung' },
    { title: 'Überarbeitung', detail: 'je Gruppe Befunde umsetzen' },
    { title: 'Integration', detail: 'zusammenführen, vereinheitlichen, exportieren' },
    { title: 'Abschlussprüfung', detail: 'Anforderungen und Gesamteindruck' },
    { title: 'Feinschliff', detail: 'Abschlussbefunde umsetzen' },
  ],
}

const REPO = '/home/user/Unternehmens-Kommunikation'
const FS = REPO + '/fallstudie-1-brand-persona'
const P = FS + '/praesentation'
const TOOLS = '/tmp/claude-0/-home-user-Unternehmens-Kommunikation/de57a793-3a57-5bbc-8922-be77d2a31fa2/scratchpad/werkzeuge'
const CHROME = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'

const kurz = (o, n = 12000) => { const s = JSON.stringify(o); return s.length > n ? s.slice(0, n) + ' …[gekürzt]' : s }

const REGELN = `Rahmen (gilt für dich als Unteragent):
- Projekt: Web-Präsentation (HTML/CSS/JS; läuft im Browser offline per Doppelklick auf index.html, ohne Build-Schritt und ohne Server) für die 15-minütige, benotete Präsentation der Fallstudie 1 „Brand Persona & Markenidentität“ (Modul Unternehmenskommunikation, Prof. Dr. Daniel Stenger, Hochschule Kaiserslautern; Gruppe: Yannick Heisler, Elias Knauber, Lukas Welker; Präsentation Mo, 26.10.2026).
- Die Marke ist HOLY (Energy- und Hydration-Drinks, https://de.holy.com; von der Gruppe gewählt am 13.10.2026 aus der Liste des Professors). Wo der Markenname steht, den Platzhalter-Mechanismus verwenden (Element mit Attribut data-marke, wird aus marke.js befüllt; dort name: 'HOLY'). Fakten über HOLY (Zahlen, Historie, Produkte, Zielgruppe, Kanäle, Farben, Claims) NUR aus dem Recherche-Dossier ${FS}/recherche/holy-recherche.md, jeweils mit Quelle und Faktenstatus aus dem Dossier. Solange das Dossier fehlt: Inhalte als Beispieldaten kennzeichnen, Farben neutral lassen. Keine Fakten, Zahlen, Logos oder Zitate über reale Unternehmen erfinden. Beispieldaten sind erlaubt, müssen aber sichtbar als „Beispieldaten“ gekennzeichnet sein.
- Alle sichtbaren Texte, Code-Kommentare und neuen Dateinamen auf Deutsch, Umlaute korrekt (ä, ö, ü, ß). Code verständlich kommentieren, damit Studierende später Texte und Werte ändern können.
- Keine Laufzeit-Abhängigkeit vom Internet: keine CDNs, keine externen Schriften, Skripte oder Bilder. Schriften als woff2 lokal (Quelle: ${TOOLS}/node_modules/@fontsource-variable/* bzw. ${TOOLS}/node_modules/@fontsource/*; nur die Teilmengen latin und latin-ext kopieren, Lizenzdatei mitkopieren). QR-Code-Bibliothek: ${TOOLS}/node_modules/qrcode-generator (MIT).
- Für Screenshots und Tests: Node mit playwright-core aus ${TOOLS}/node_modules/playwright-core (Import per absolutem Pfad oder mit NODE_PATH=${TOOLS}/node_modules); Browser: chromium.launch({ executablePath: '${CHROME}', args: ['--no-sandbox'] }); Bühne/Viewport 1920×1080. Sieh dir deine Screenshots mit dem Read-Werkzeug selbst an und verbessere, bis es wirklich gut aussieht.
- Die Hauptsitzung kümmert sich um KI-Nachweis und Git. Du bearbeitest NICHT: ki-nachweis/*, CLAUDE.md, README.md-Dateien außerhalb von ${P}, .claude/*; du machst KEINE git-Commits oder -Pushes. Bearbeite nur die Dateien, die dir in deinem Auftrag zugewiesen sind.
- Wenn du fremden Code, Schriften, Icons oder Bilder verwendest, nenne sie mit Lizenz und Herkunft in deiner Rückgabe (Feld quellen). Fachinhalte zu Modellen (Esch, Häusel, Kelly, Gutman, Reynolds & Gutman, Aaker, Kroeber-Riel) stammen aus deinem Modellwissen – kennzeichne Unsicherheiten.
- Lesbarkeit auf dem Beamer ist Pflicht: Fließtext mindestens 28 px auf der 1920er-Bühne (Tabellen im Backup mindestens 22 px), Titel 56–96 px, Kontrast mindestens WCAG AA, höchstens ca. 40 Wörter sichtbarer Text pro Hauptfolie.`

const AUFGABE = '„Erarbeiten Sie eine Brand Persona und Markenidentität für Ihre Unternehmensmarke anhand des Markensteuerrads nach Esch. Nutzen Sie hierfür insbesondere Desk Research und KI-Tools als Methoden. Dokumentieren Sie Ihre Prompts und begründen Sie Ihr Vorgehen (Backup).“ Teilaufgaben: Brand Persona (Geografie, Soziodemografie, Kaufverhalten, Mediennutzung, Psychografie; u. a. Limbic Map); Markenidentität: Repertory Grid → Markeneigenschaften; Laddering → Markennutzen; Analogiemethoden (Marke wäre Mensch/Tier) → Markentonalität; Kommunikationsanalyse (Instagram/Facebook/YouTube; Corporate Design, Schlüsselbilder, Bildwelten, Logo, Slogan) → Markenbild; Zusammenführung im Markensteuerrad. Bewertung: Problemverständnis 15 %, Anwendung von Konzepten & Modellen 20 %, Analyse & Argumentation 20 %, Qualität der Lösung/Empfehlung 15 %, Vermittlung & Präsentationsstil 7,5 %, Visualisierung & Foliengestaltung 7,5 %.'

const FOLIENPLAN = [
  'f01 · 01-einstieg · Einstieg: Welche Marke steckt dahinter? + Titel · 45 s · Bündel A · Feld: –',
  'f01b · 01b-wortwolke · (optional) Live-Wortwolke „Was verbindet ihr mit [Marke]?“ · 45 s · Bündel A · data-optional',
  'f02 · 02-vorgehen · Ausgangslage & Vorgehen (Steuerrad als interaktive Agenda) · 60 s · Bündel A · Feld: hub',
  'f03 · 03-markenkompetenz · Markenkompetenz · 45 s · Bündel A · Feld: kompetenz',
  'f04 · 04-persona · Brand Persona · 90 s · Bündel A · Feld: persona',
  'f05 · 05-limbic-map · Limbic Map · 60 s · Bündel A · Feld: persona',
  'f06 · 06-repertory-grid · Repertory Grid → Markenattribute · 90 s · Bündel B · Feld: attribute',
  'f07 · 07-laddering · Laddering → Markennutzen · 90 s · Bündel B · Feld: nutzen',
  'f08 · 08-analogien · Analogien + Live-Umfrage → Markentonalität · 120 s · Bündel B · Feld: tonalitaet',
  'f09 · 09-kommunikationsanalyse · Kommunikationsanalyse → Markenbild · 120 s · Bündel C · Feld: bild',
  'f10 · 10-markensteuerrad · Markensteuerrad (Synthese) · 75 s · Bündel C · Feld: hub',
  'f11 · 11-fazit · Fazit & Empfehlungen · 90 s · Bündel C · Feld: –',
  'f12 · 12-fragen · Danke & Fragen (Steuerrad als Sprungmenü) · 0 s · alle · Feld: –',
  'b1–b7 · 13-backup · Backup: Methodik, Prompt-Log, Datenquellen Persona, RG-Rohdaten, Laddering-Matrix, KA-Raster, Quellenverzeichnis · data-backup',
  'Summe Hauptfolien ohne optionale Folie: 885 s = 14:45 (15 s Puffer)',
].join('\n')

const TOKENS = '--marke-primaer, --marke-sekundaer, --f-hintergrund, --f-flaeche, --f-flaeche-2, --f-linie, --f-text, --f-text-2, --f-akzent, --f-auf-akzent, --f-hart, --f-hart-flaeche, --f-weich, --f-weich-flaeche, --f-kern, --f-erfolg, --f-warnung, --schrift-display, --schrift-text, --groesse-titel, --groesse-untertitel, --groesse-text, --groesse-klein, --radius-s, --radius-m, --radius-l, --schatten-1, --schatten-2, --abstand-1 bis --abstand-8, --dauer-kurz, --dauer-mittel, --dauer-lang, --kurve, --kurve-feder'

// ---------- Schemas ----------
const QUELLEN = { type: 'array', items: { type: 'object', properties: { was: { type: 'string' }, lizenz: { type: 'string' }, herkunft: { type: 'string' } }, required: ['was', 'lizenz'] } }
const RICHTUNG_SCHEMA = { type: 'object', properties: {
  id: { type: 'string' }, name: { type: 'string' }, kurzbeschreibung: { type: 'string' }, ordner: { type: 'string' },
  tokens_datei: { type: 'string' }, screenshots: { type: 'array', items: { type: 'string' } },
  schriften: QUELLEN, bewegung: { type: 'string' },
  staerken: { type: 'array', items: { type: 'string' } }, risiken: { type: 'array', items: { type: 'string' } } },
  required: ['id', 'name', 'kurzbeschreibung', 'ordner', 'tokens_datei', 'screenshots', 'schriften', 'bewegung'] }
const JURY_SCHEMA = { type: 'object', properties: {
  bewertungen: { type: 'array', items: { type: 'object', properties: {
    richtung: { type: 'string', description: 'Ordner-ID: richtung-1, richtung-2 oder richtung-3' },
    lesbarkeit: { type: 'number' }, modernitaet: { type: 'number' }, professionalitaet: { type: 'number' },
    farbtausch: { type: 'number' }, animationspotenzial: { type: 'number' }, einheitlichkeit: { type: 'number' },
    gesamt: { type: 'number' }, begruendung: { type: 'string' } }, required: ['richtung', 'gesamt', 'begruendung'] } },
  uebernehmen: { type: 'array', items: { type: 'string' } }, warnungen: { type: 'array', items: { type: 'string' } } },
  required: ['bewertungen', 'uebernehmen'] }
const ENGINE_SCHEMA = { type: 'object', properties: {
  dateien: { type: 'array', items: { type: 'string' } }, api: { type: 'string' },
  komponenten: { type: 'array', items: { type: 'object', properties: { name: { type: 'string' }, markup: { type: 'string' }, hinweise: { type: 'string' } }, required: ['name', 'markup'] } },
  pruefen: { type: 'string' }, zusammenbauen: { type: 'string' }, themen: { type: 'array', items: { type: 'string' } },
  pruefbericht: { type: 'string' }, offene_punkte: { type: 'array', items: { type: 'string' } }, quellen: QUELLEN },
  required: ['dateien', 'api', 'komponenten', 'pruefen', 'zusammenbauen', 'pruefbericht'] }
const FOLIEN_SCHEMA = { type: 'object', properties: {
  dateien: { type: 'array', items: { type: 'string' } },
  folien: { type: 'array', items: { type: 'object', properties: { id: { type: 'string' }, titel: { type: 'string' }, layout: { type: 'string' }, animationen: { type: 'string' }, interaktion: { type: 'string' }, zeit: { type: 'number' } }, required: ['id', 'titel', 'layout'] } },
  screenshots: { type: 'array', items: { type: 'string' } }, pruefbericht: { type: 'string' },
  engine_wuensche: { type: 'array', items: { type: 'string' } }, quellen: QUELLEN, offene_punkte: { type: 'array', items: { type: 'string' } } },
  required: ['dateien', 'folien', 'screenshots', 'pruefbericht'] }
const BEFUND = { type: 'object', properties: {
  schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] }, folie: { type: 'string' },
  kategorie: { type: 'string', enum: ['gestaltung', 'lesbarkeit', 'inhalt', 'technik', 'animation', 'konsistenz', 'interaktion', 'dokumentation'] },
  beschreibung: { type: 'string' }, vorschlag: { type: 'string' } }, required: ['schwere', 'folie', 'kategorie', 'beschreibung', 'vorschlag'] }
const PRUEF_SCHEMA = { type: 'object', properties: { befunde: { type: 'array', items: BEFUND }, gesamturteil: { type: 'string' }, screenshots: { type: 'array', items: { type: 'string' } } }, required: ['befunde', 'gesamturteil'] }
const FIX_SCHEMA = { type: 'object', properties: {
  behoben: { type: 'array', items: { type: 'string' } },
  nicht_behoben: { type: 'array', items: { type: 'object', properties: { befund: { type: 'string' }, grund: { type: 'string' } }, required: ['befund', 'grund'] } },
  dateien: { type: 'array', items: { type: 'string' } }, screenshots: { type: 'array', items: { type: 'string' } },
  pruefbericht: { type: 'string' }, engine_wuensche: { type: 'array', items: { type: 'string' } }, quellen: QUELLEN },
  required: ['behoben', 'nicht_behoben', 'pruefbericht'] }
const INTEG_SCHEMA = { type: 'object', properties: {
  dateien: { type: 'array', items: { type: 'string' } }, engine_aenderungen: { type: 'array', items: { type: 'string' } },
  pruefbericht: { type: 'string' }, pdf: { type: 'string' }, uebersicht_png: { type: 'string' },
  folien_ids: { type: 'array', items: { type: 'string' } }, zeit_summe_sekunden: { type: 'number' },
  quellen: QUELLEN, offene_punkte: { type: 'array', items: { type: 'string' } } },
  required: ['dateien', 'pruefbericht', 'pdf', 'uebersicht_png', 'folien_ids'] }
const KRITIK_SCHEMA = { type: 'object', properties: { befunde: { type: 'array', items: BEFUND }, erfuellt: { type: 'array', items: { type: 'string' } }, gesamturteil: { type: 'string' } }, required: ['befunde', 'erfuellt', 'gesamturteil'] }

// ---------- Ergebnis der Phasen „Gestaltung“ und „Bewertung“ (Workflow D01, 13.10.2026) als Konstanten ----------
// Quelle: fallstudie-1-brand-persona/praesentation/_entwuerfe/JURY.md (Gesamtpunkte: Summe der Gesamtnoten beider Jurys). Gleichstand Editorial/Bento hell –
// das Original-Skript wählt bei Gleichstand die erste Richtung: Editorial (richtung-1).
const E = P + '/_entwuerfe'
const richtungen = [
  { id: 'richtung-1', name: 'Editorial', ordner: E + '/richtung-1', tokens_datei: E + '/richtung-1/tokens.css', kurzbeschreibung: 'Hell, sachlich-elegant wie ein hochwertiges Magazin: strenges 12-Spalten-Raster, Fraunces + Inter, viel Weißraum, feine Linien, sparsamer Akzent; ruhige, präzise Bewegung.' },
  { id: 'richtung-3', name: 'Bento hell', ordner: E + '/richtung-3', tokens_datei: E + '/richtung-3/tokens.css', kurzbeschreibung: 'Hell, freundlich, Bento-Grid mit abgerundeten Karten, Plus Jakarta Sans + Bricolage Grotesque, OKLCH-Farbsystem; federnde, gestaffelte Bewegung.' },
  { id: 'richtung-2', name: 'Keynote dunkel', ordner: E + '/richtung-2', tokens_datei: E + '/richtung-2/tokens.css', kurzbeschreibung: 'Dunkle Keynote-Bühne mit Glow, Inter Tight + Space Grotesk, Glas-Karten; filmische Bewegung, View-Transition-Morph.' },
]
const punkte = { 'richtung-1': 16.5, 'richtung-3': 16.5, 'richtung-2': 12.5 }
const rangfolge = richtungen
const sieger = rangfolge[0]
const andere = rangfolge.slice(1)
// Wörtlich aus JURY.md (Abschnitte „In die beste Richtung übernehmen“ und „Warnungen“ beider Jurys)
const uebernehmen = [
  "[Jury Wirkung & Bewertung] Aus richtung-2: Morph per View Transition, bei dem das große Steuerrad auf der Hub-Folie in das Mini-Steuerrad der Kopflinie auf der Zielfolie schrumpft (Klick aufs Mini-Rad führt zurück). Mit Fallback ohne Morph für Browser ohne startViewTransition und bei „Bewegung reduzieren“. Das passt direkt zum vorhandenen klickbaren Mini-Steuerrad von richtung-1.",
  "[Jury Wirkung & Bewertung] Aus richtung-2: Kopplung über data-paar. Beim Zeigen leuchten Feld und zugehörige Methode gemeinsam auf, die übrigen Felder treten deutlich zurück (Deckkraft ca. 45 %). Das ersetzt den zu dezenten Hover von richtung-1.",
  "[Jury Wirkung & Bewertung] Aus richtung-2 (ähnlich in richtung-3): gestrichelte Logikpfeile zwischen den Methoden, „Attribute sind die Startpunkte“ (Repertory Grid → Laddering) und „Tonalität ist der Prüfmaßstab“ (Analogien → Kommunikationsanalyse). Sie machen die Argumentationskette des Vorgehens sichtbar, was der Vermittlung dient.",
  "[Jury Wirkung & Bewertung] Aus richtung-2: Im Repertory Grid die drei abgeleiteten Attribute als oberste Zeilen sortieren und gemeinsam hinterlegen, in den Attributzeilen rechts je eine Mini-Hantel (Marke ● gegen Wettbewerber ○) statt nur der Zahl.",
  "[Jury Wirkung & Bewertung] Aus richtung-2: Das Rätselbild der Einstiegsfolie vollflächig (full-bleed) als einziger „Bühnenmoment“ inszenieren und mit dem vierstufigen Hinweis-Mechanismus von richtung-1 kombinieren (Zoom 300 → 100 %, Unschärfe 40 → 0 px).",
  "[Jury Wirkung & Bewertung] Aus richtung-2: „LIVE“ und „BEISPIELDATEN“ als gut sichtbare Pillen in der Rubrikzeile sowie die Angabe „n = …“ im Ergebnis-Kopf der Umfrage.",
  "[Jury Wirkung & Bewertung] Aus richtung-3: Flächen- und Texttokens mit fester OKLCH-Helligkeit, bei denen nur der Farbton aus der Marke kommt (oklch(from var(--marke-sekundaer) 0.932 min(c, 0.012) h)). So vergraut das Papierweiß bei fast schwarzer Sekundärfarbe nicht, was im Rot-Test von richtung-1 sichtbar passiert. Dazu die luminanzbasierte Schriftwahl auf Akzentflächen über color(from … xyz-d65 …).",
  "[Jury Wirkung & Bewertung] Aus richtung-3: eine zentrale marke.js (Name und zwei Farben, setzt Variablen am <html>) und in der Werkzeugleiste Farbwähler für Primär- und Sekundärfarbe, damit die Gruppe Markenfarben live testen kann. Damit verschwindet auch der Ladefehler von richtung-1.",
  "[Jury Wirkung & Bewertung] Aus richtung-3: auf der Umfrage-Folie eine große Aussagezahl, „27 % sehen [Marke] wie wir: als …“, plus hochzählender Stimmenzähler (in Editorial-Typografie als große Fraunces-Ziffer statt als getönte Karte).",
  "[Jury Wirkung & Bewertung] Aus richtung-3: echte Federkurve per linear() (mit cubic-bezier-Ersatz) für Punkte, Marker und den Kern des Steuerrads.",
  "[Jury Wirkung & Bewertung] Aus richtung-3: Methodeneinträge im Hub mit einem eindeutigen „Folie x →“-Pfeil als Klick-Hinweis. Die Meta-Zeile „Ziffer = Folie · Felder und Methoden sind klickbar“ fällt dafür von der Beamer-Folie weg.",
  "[Jury Wirkung & Bewertung] Aus richtung-3: Kennzahlen kräftiger setzen (große Ziffern mit mindestens Gewicht 500–600). Für richtung-1 heißt das: Fraunces-Ziffern und Titel von 340/380 auf ca. 420–480 anheben.",
  "[Jury Hörsaal-Praxis] Aus richtung-1: Kopfzeile mit Rubrik, Seitenzahl und KLICKBAREM Mini-Steuerrad, das das aktuelle Feld markiert. Das kleine Rad-Symbol im Kicker von R3 sollte genau diese Funktion bekommen, aber mindestens ca. 56 px groß sein.",
  "[Jury Hörsaal-Praxis] Aus richtung-1: das mehrstufige Rätsel (Zoom 300 → 210 → 145 → 100 %, Unschärfe 40 → 22 → 9 → 0 px, Fortschritt „Hinweis x von 4“) statt eines einzigen Klicks auf „Auflösen“. Das bindet das Publikum länger.",
  "[Jury Hörsaal-Praxis] Aus richtung-1: die Reihenfolge der Datenerzählung im Polaritätenprofil (Raster → Ideallinie → Wettbewerber → Marke → Punkte → Hervorhebung der drei Zeilen → Attributkarten) und die ruhigen Bewegungswerte (Wege höchstens 18 px, Staffel 70 ms, Feder nur für Punkte und Marker). Damit lassen sich Feder- und „Wackeln“-Effekte von R3 dämpfen.",
  "[Jury Hörsaal-Praxis] Aus richtung-1: Quellenzeile mit Skalenerklärung („Skala 1 = linker Pol, 7 = rechter Pol“) und Anrede in Sie-Form („Ihr Tipp? Rufen Sie ihn einfach in den Raum.“), sofern die Gruppe den Professor direkt anspricht. Die Anrede einheitlich festlegen.",
  "[Jury Hörsaal-Praxis] Aus richtung-1: Tokens für Bewegung und Kontrast samt Kommentarstil (Lesehilfe zu oklch(from …)) als Vorbild für die Dokumentation, damit Studierende die Werte gezielt ändern können.",
  "[Jury Hörsaal-Praxis] Aus richtung-2: die drei hervorgehobenen Attribute im Profil oben als gemeinsames Band gruppieren (01–03), statt sie über das Diagramm zu verteilen. Das verkürzt den Blickweg vom Diagramm zu den Kennzahlkarten.",
  "[Jury Hörsaal-Praxis] Aus richtung-2: kleine Hantel-Grafik in den Attributkarten (Punkt Marke ↔ Punkt Wettbewerber auf einer Linie) neben der großen Zahl „+2,8“. So sieht man, woher die Zahl kommt.",
  "[Jury Hörsaal-Praxis] Aus richtung-2: beim Zeigen auf Feld oder Methode die übrigen Felder abdunkeln (nicht nur das Paar hervorheben). Das ist auf dem Beamer deutlicher als die Sättigungsänderung in R3.",
  "[Jury Hörsaal-Praxis] Aus richtung-2: den View-Transition-Morph vom Hub-Rad ins Mini-Rad der Zielfolie und zurück, nur als Zusatz für Browser, die ihn können: mit Rückfall auf einfaches Überblenden bei prefers-reduced-motion oder fehlender Unterstützung, ohne blur-Filter im Übergang.",
  "[Jury Hörsaal-Praxis] Aus richtung-2: auf der Umfragefolie die Pille „LIVE“ mit ruhig pulsierendem Punkt und „n = …“ sowie den Rahmen um die ganze Zeile „Unsere Analyse“. Das ist aus der letzten Reihe besser erkennbar als das Etikett im Balken.",
  "[Jury Hörsaal-Praxis] Aus richtung-2: das Rätselbild randlos über die ganze Folie. Ein großes Motiv ist aus der letzten Reihe leichter zu erraten als eine Kachel. Darauf aber helle Schrift auf abgedunkeltem Verlauf mit nachgemessenem Kontrast."
]
const warnungen = [
  "[Jury Wirkung & Bewertung] Beamer-Test Pflicht: Die leichten Fraunces-Gewichte (340–380) mit hohem Strichkontrast, die Feldtönungen von 11–13 % und die 1,5-px-Haarlinien in richtung-1 können auf einem lichtschwachen Hörsaal-Beamer ausbleichen. Vorschlag: Titel und Ziffern 420–480, Tönungen 18–22 %, Linien 2 px. Am echten Gerät prüfen.",
  "[Jury Wirkung & Bewertung] Fachlich unsicher (Modellwissen, keine Websuche): Alle drei Entwürfe nutzen dieselbe vorgegebene Feldanordnung (oben links Markennutzen, unten links Markenattribute, oben rechts Markentonalität, unten rechts Markenbild). Ich bin nicht sicher, ob Esch Nutzen und Attribute oben oder unten anordnet. Er schreibt meines Wissens auch „Markentonalitäten“ im Plural. Bitte mit den Vorlesungsfolien abgleichen, ebenso Kelly (1955) als Ursprung des Repertory Grid und Häusel/Gruppe Nymphenburg als Urheber der Limbic Map.",
  "[Jury Wirkung & Bewertung] Wortbudget: Die Hub-Folien haben laut Playwright-Messung (innerText) rund 110 (richtung-1), 111 (richtung-2) und 91 Wörter (richtung-3), weit über den rund 40 Wörtern für Hauptfolien. Hub schrittweise aufbauen oder Methodenbeschreibungen erst beim Zeigen bzw. Klick einblenden.",
  "[Jury Wirkung & Bewertung] Meta-Hinweise für die Bedienung gehören nicht auf die Beamer-Folie, etwa „Ziffer = Folie · Felder und Methoden sind klickbar“ (richtung-1) und „FELD ODER METHODE ANKLICKEN“ (richtung-2). Besser in eine Sprechernotiz oder ein Bedienfeld, das nur auf dem Laptop sichtbar ist.",
  "[Jury Wirkung & Bewertung] Beispieldaten-Konsistenz: In richtung-2 passen n = 48 und 24 % bzw. 11 % nicht zu ganzen Stimmen. In richtung-3 passen 38 Stimmen nicht zu 27/19/12 % (richtig wären 26/18/13 %). Nur richtung-1 ist stimmig (64 Stimmen). Prozentwerte im fertigen Deck per JavaScript aus Stimmenzahlen berechnen statt von Hand einzutragen.",
  "[Jury Wirkung & Bewertung] Live-Umfrage gegen Offline-Vorgabe: Die Präsentation läuft ohne Internet, eine Live-Umfrage braucht aber ein Umfrage-Werkzeug mit Internetzugang beim Publikum. Ergebnisse können nicht automatisch auf die Folie kommen. Einen Plan festlegen: Ergebnisse während der Präsentation von Hand in ein Datenobjekt tippen oder kurz zur Ansicht des Werkzeugs wechseln. Die QR-Adresse beispiel.de/umfrage muss vorher ersetzt und der QR-Code mit mehreren Handys getestet werden.",
  "[Jury Wirkung & Bewertung] richtung-2 bei Übernahme von Teilen: Die Titel-Laufweite von −0,03 bis −0,04 em lässt Buchstaben kollidieren (höchstens −0,015 em verwenden). Endlosanimationen (atmen, kamerafahrt, umlauf) und backdrop-filter nicht übernehmen, sie lenken während des Vortrags ab und kosten Leistung. Die Glow-Stärke bei gesättigten Markenfarben begrenzen (Rot-Test glüht flächig).",
  "[Jury Wirkung & Bewertung] View Transitions laufen nur in aktuellen Browsern (Chrome/Edge sicher). Am Präsentationsrechner der Hochschule mit genau dem verwendeten Browser testen und den Fallback ohne Morph ebenfalls prüfen.",
  "[Jury Wirkung & Bewertung] Seitenverhältnis: Alle Entwürfe sind auf eine feste 1920×1080-Bühne ausgelegt. Viele Hörsaal-Beamer arbeiten mit 16:10 oder 1280×800. Die Skalierung bzw. Letterbox am Zielgerät prüfen, damit nichts abgeschnitten wird und Text nicht unter die Mindestgröße fällt.",
  "[Jury Wirkung & Bewertung] Markenpassung: Kursiver Serif-Markenname und Editorial-Anmutung können zu einer jungen, lifestyle-orientierten Marke im Widerspruch stehen (laut CLAUDE.md ist HOLY vorgeschlagen, die Bestätigung ist offen). Nach der Markenwahl prüfen, ob der Markenname aufrecht bzw. ohne Kursive gesetzt werden sollte, um das Corporate Design der Marke nicht zu verfälschen. Keine Logos oder Schriften der Marke ohne Quelle und Rechteklärung einbauen.",
  "[Jury Wirkung & Bewertung] Ansprache vereinheitlichen: richtung-1 siezt („Rufen Sie ihn einfach in den Raum“), richtung-3 sagt „ihr“ („Ruft es rein!“). Für Prof. und Kommiliton:innen eine Form festlegen und im ganzen Deck durchhalten.",
  "[Jury Wirkung & Bewertung] Kleinste Schrift in allen Entwürfen ist 22 px (Kopfzeilen-Rubriken, Quellenzeilen, Badges). Das ist für Meta-Informationen vertretbar, darf aber nicht für inhaltliche Aussagen verwendet werden.",
  "[Jury Hörsaal-Praxis] Kontrastprüfungen müssen auch Text auf FELDFLÄCHEN abdecken, nicht nur Text auf dem Hintergrund. In richtung-2 liegen die Feldnamen nachgemessen bei 3,4–3,7:1 (neutral hell, Rot dunkel, Grün hell) und mit Gelb/Schwarz im dunklen Modus bei 2,57:1 („Markenbild“). Das widerspricht der Angabe „mindestens 4,5:1“. Eigene Testbilder liegen unter /tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad/jury/hoersaal/ (Stresstest Gelb #FFD400/#1D1D1B und Blau #0057B8/#F39200 sowie Beamer-Simulation sim-*.png).",
  "[Jury Hörsaal-Praxis] Die Beamer-Simulation ist ein eigenes, vereinfachtes Näherungsmodell (Herunterskalieren auf 1280×720, Umgebungslicht +12 % linear, Verstärkung 0,85, Sättigung 75 %), kein Normverfahren. Vor dem 26.10. unbedingt im echten Hörsaal mit eingeschaltetem Licht und vom letzten Platz aus prüfen.",
  "[Jury Hörsaal-Praxis] Dunkler Standard (richtung-2) ist in hellen Hörsälen kritisch: Glow, Körnung und Glaskanten verschwinden, die Bühne wird mittelgrau. Wenn dunkle Elemente übernommen werden, dann nur für einzelne Momente (Einstieg), nicht als Grundmodus.",
  "[Jury Hörsaal-Praxis] Leistungsrisiko richtung-2: backdrop-filter blur(22 px) auf mehreren Karten, blur-Filter in Ein- und Ausblendungen, feTurbulence-Körnung und endlose Glow-Animation können auf Hochschulrechnern oder Beamer-Laptops ruckeln. Ein „Beamer-Modus“ ohne diese Effekte ist Pflicht, falls etwas davon übernommen wird.",
  "[Jury Hörsaal-Praxis] Alle drei Hub-Folien überschreiten die Richtgröße von ca. 40 Wörtern deutlich (R1 und R2 ca. 90, R3 ca. 60). Leitfragen und Methodenbeschreibungen besser schrittweise einblenden oder in die Sprechernotizen verschieben.",
  "[Jury Hörsaal-Praxis] Inhaltstexte unter 28 px: R2 Feldfragen 26 px, Kernfrage 25 px, Notizen 24 px kursiv, Pillen-Info 26 px. R3 Kerntext 26 px, Persona-Unterzeile 26 px, „Folie x →“ 24 px. Auf mindestens 28 px anheben; nur reine Metaangaben (Quelle, Seitenzahl) dürfen 22–24 px haben.",
  "[Jury Hörsaal-Praxis] richtung-1: Fraunces mit Gewicht 340–380 und hoher optischer Größe wird am Beamer dünn. Gewicht auf mindestens 450 anheben und opsz begrenzen. Haarlinien von 1,5 px auf 2 px setzen. Marke und Wettbewerber im Profil zusätzlich über die Strichart unterscheiden. Kleinere Satzfehler: Der Verbindungspunkt kollidiert mit „Markennutzen“, das „ä“ in „Markentonalität“ berührt den Außenring. muster.html lädt ../../marke.js, die noch nicht existiert (Konsolenfehler).",
  "[Jury Hörsaal-Praxis] richtung-3: Weiße Karten auf hellgrauer Bühne trennen sich nur über Schatten und einen feinen Rand, am Beamer verschwinden die Kartenkanten. Rand verstärken (ca. 2 px, dunkler) oder den Helligkeitsabstand von Bühne und Karte vergrößern. Icons wie die Pfote und die Du-Form („Ruft es rein!“) auf Seriosität prüfen.",
  "[Jury Hörsaal-Praxis] Hover-Effekte (Feld und Methode leuchten gemeinsam auf) funktionieren nicht mit Präsentations-Clicker oder Touch. Die Navigation muss vollständig per Tastatur und Clicker gehen (Pfeiltasten, Fokusreihenfolge, sichtbarer Fokusrahmen).",
  "[Jury Hörsaal-Praxis] QR-Code: Für das Scannen aus hinteren Reihen so groß wie möglich darstellen (deutlich über 300 px Kantenlänge auf der 1920er-Bühne, Ruhezone erhalten) und die Kurz-URL in mindestens 40 px daneben setzen. Die Zieladresse ist derzeit nur der Platzhalter beispiel.de/umfrage.",
  "[Jury Hörsaal-Praxis] Farbtausch erst mit den bestätigten CI-Farben der gewählten Marke endgültig testen (HOLY ist noch nicht bestätigt). Keine Markenfarben raten oder erfinden; Werte nur aus offiziellen Quellen übernehmen und die Quelle nennen.",
  "[Jury Hörsaal-Praxis] Fachlicher Abgleich mit den Vorlesungsfolien nötig, alles aus dem Modellwissen und nicht per Websuche geprüft: Lage der vier Felder im Markensteuerrad nach Esch (Nutzen oben links, Attribute unten links, Tonalität oben rechts, Bild unten rechts, Kompetenz im Zentrum), Kelly (1955) als Ursprung des Repertory Grid, Limbic Map nach Häusel (Gruppe Nymphenburg) sowie die von den Entwürfen gewählte Zuordnung Methode → Feld.",
  "[Jury Hörsaal-Praxis] WCAG-Schwellen (4,5:1 für normalen Text, 3:1 für Großtext ab 24 px bzw. 18,66 px fett) stammen aus dem Modellwissen. Die genannten Kontrastwerte sind Pixelmessungen an Screenshots (Antialiasing kann sie leicht verfälschen) und keine Token-Berechnung.",
  "[Jury Hörsaal-Praxis] Die Beispieldaten unterscheiden sich zwischen den Richtungen (z. B. Eule, Fuchs oder Löwe als Analyse-Tier; Vorsprung 3,1 bzw. 2,6 bzw. 2,8). Bei der Zusammenführung ein einziges, konsistentes Beispieldatenobjekt verwenden, das sichtbar als „Beispieldaten“ gekennzeichnet bleibt."
]
log(`Jury-Punkte (Konstanten aus JURY.md): ${rangfolge.map(r => r.name + ' ' + punkte[r.id]).join(' · ')} → Sieger: ${sieger.name}`)

// ---------- Phase 3: Fundament ----------
const FORTSETZUNG = `Fortsetzung: Ein früherer Durchlauf dieses Auftrags wurde durch ein Nutzungslimit abgebrochen. In ${P}/ liegen bereits unvollständige Dateien (css/tokens.css, css/deck.css, css/komponenten.css, js/deck.js, js/komponenten.js, js/vendor/, marke.js, schriften/, bilder/, werkzeuge/zusammenbauen.py, werkzeuge/vorlage.html); es fehlen u. a. AUTOREN.md, LIESMICH.md, werkzeuge/pruefen.mjs, folien/ und folien/_demo.html. Prüfe die vorhandenen Dateien gründlich (Vollständigkeit gegenüber diesem Auftrag, Fehler) und baue darauf auf oder ersetze sie, wo sie nicht taugen. Trage in marke.js den Markennamen HOLY ein (name und kurz: 'HOLY'); Farben bleiben neutral (leer), bis das Recherche-Dossier ${FS}/recherche/holy-recherche.md belegte Markenfarben nennt.`

const enginePrompt = `${REGELN}

Aufgabe: Baue das technische und gestalterische Fundament („Engine“) der Web-Präsentation im Ordner ${P}/. Danach bauen sieben andere Agenten parallel die einzelnen Folien gegen deine Schnittstelle – sie muss deshalb vollständig, stabil, getestet und in ${P}/AUTOREN.md präzise dokumentiert sein.

Wünsche des Nutzers: modernes Design, Animationen, interaktiver Touch – konkret: Live-Umfrage per QR-Code, klickbare Navigation (Markensteuerrad als Menü), Einstieg mit Publikum. Farben jetzt neutral, später Markenfarben (einfach in marke.js tauschbar). Präsentiert wird im Browser.

Gestaltung: Die Jury hat die Richtung „${sieger.name}“ gewählt (Ordner ${sieger.ordner}, Tokens ${sieger.tokens_datei}, Screenshots dort; Punkte: ${kurz(punkte)}). Übernimm deren Tokens als Standard-Thema und verbessere sie mit diesen Hinweisen der Jury: ${kurz(uebernehmen, 12000)}. Warnungen der Jury: ${kurz(warnungen, 12000)}. (Vollständige Begründungen der Jury: ${E}/JURY.md.) Die anderen Richtungen (${andere.map(r => r.name + ': ' + r.tokens_datei).join('; ')}) bietest du zusätzlich als umschaltbare Themen an (Tokens: Farben, Schriften, Radien, Schatten, Bewegung), damit die Gruppe vergleichen kann. Jedes Thema in hell und dunkel. Schriften lokal in ${P}/schriften/.

Ordnerstruktur (genau so):
- ${P}/index.html – erzeugt von werkzeuge/zusammenbauen.py aus werkzeuge/vorlage.html und den Folien-Dateien
- ${P}/marke.js – Konfiguration für die Gruppe: Markenname (lang/kurz), Farben (primaer, sekundaer), Logo- und Rätselbild-Pfad, Gruppe (Namen), Datum, Veranstaltung, Umfragen (z. B. umfragen.tier: frage, optionen, link, ergebnisLink, unsereAntwort), Wortwolken, optionale Folien an/aus, Beispieldaten-Hinweis an/aus, Standard-Thema und -Modus. Ausführlich kommentiert: Wenn die Marke feststeht, soll die Gruppe nur hier etwas ändern müssen.
- ${P}/css/tokens.css (Themen und Tokens), css/deck.css (Bühne, Übergänge, Übersicht, Hilfe, Referentenansicht, Druck), css/komponenten.css (Bausteine), css/folien/ (je Folie optional eine Datei – legen die Folien-Agenten an)
- ${P}/js/deck.js (Engine), js/komponenten.js (Bausteine), js/vendor/ (qrcode-generator mit Lizenz), js/folien/ (je Folie optional eine Datei – legen die Folien-Agenten an)
- ${P}/folien/ – je Folie(ngruppe) eine HTML-Datei mit <section>-Elementen (legen die Folien-Agenten an; Dateien mit _ am Anfang werden beim Zusammenbauen übersprungen, außer ausdrücklich mit --nur angefordert)
- ${P}/schriften/, ${P}/bilder/ (neutrale Platzhalter, z. B. platzhalter-logo.svg, platzhalter-raetsel.svg, platzhalter-persona.svg, platzhalter-post.svg)
- ${P}/werkzeuge/vorlage.html, werkzeuge/zusammenbauen.py, werkzeuge/pruefen.mjs
- ${P}/AUTOREN.md (Schnittstelle für Folien-Autor:innen), ${P}/LIESMICH.md (Bedienung, vorläufig)

Folien-Format (verbindlich, so in AUTOREN.md beschreiben):
<section class="folie" id="f06" data-titel="Repertory Grid" data-feld="attribute" data-zeit="90" data-buendel="B" [data-optional] [data-backup] [data-layout="…"]>
  <header class="folie-kopf"><p class="kicker">…</p><h2 class="titel">Kernaussage</h2></header>
  <div class="folie-inhalt"> … Elemente mit data-schritt="1", data-schritt="2" … und data-animation="…" … </div>
  <footer class="folie-fuss"><p class="quelle">Quelle: …</p></footer>
  <aside class="notizen">Sprechtext …</aside>
  <script type="application/json" class="daten">{ … }</script>   (optional, für datengetriebene Grafiken)
</section>
- data-feld ∈ {kompetenz, attribute, nutzen, tonalitaet, bild, persona, hub, leer} steuert das Mini-Steuerrad (Navigator): auf Folien mit Feld automatisch oben rechts eingeblendet, aktuelles Feld hervorgehoben (persona = Rahmen hervorgehoben); bei hub und leer nicht.
- data-zeit = Sollzeit in Sekunden (für die Referentenansicht), data-buendel = A, B, C oder alle.
- data-optional: Folie wird übersprungen, außer in marke.js eingeschaltet. data-backup: Folie liegt hinter der Schlussfolie, Übersicht zeigt sie in eigener Rubrik.
- Platzhalter: <span data-marke></span> (Name), data-marke="kurz", data-gruppe, data-datum, data-veranstaltung (werden aus marke.js befüllt). Badge <span class="beispiel">Beispieldaten</span> (über marke.js ausblendbar).

Ablaufplan der Präsentation (für Mini-Steuerrad, Agenda-Sprünge und Tests): 
${FOLIENPLAN}

Engine-Funktionen (alle umsetzen und mit Playwright testen):
1. Bühne 1920×1080, auf jedes Fenster skaliert (Letterbox), scharf; Hintergrund aus Tokens.
2. Navigation: Tastatur (→ ↓ Leertaste Bild↓ Enter = weiter; ← ↑ Bild↑ Rücktaste = zurück; Pos1/Ende; Ziffern + Enter = Folie anspringen; O = Übersicht; P = Referentenansicht; F = Vollbild; B oder . = Schwarzbild; T = Thema wechseln; D = hell/dunkel; H oder ? = Hilfe mit allen Tasten; Esc schließt Overlays). Präsentations-Clicker (Bild↑/Bild↓, Pfeiltasten) müssen funktionieren. Ist ein Eingabefeld fokussiert (Wortwolke, Wert-Eingabe der Umfrage), werden Tasten NICHT als Navigation interpretiert. Wischen auf Touch-Geräten. Dezente Bedienleiste (Pfeile, Fortschrittsbalken, Foliennummer), blendet sich bei Inaktivität aus.
3. Schritte: Elemente mit data-schritt="n" (n ≥ 1) erscheinen nacheinander; data-animation ∈ {einblenden, hoch, runter, links, rechts, zoom, zeichnen (SVG-Pfade zeichnen sich über stroke-dashoffset), zaehlen (Zahl zählt bis data-ziel, deutsches Zahlenformat, optional data-dezimalen, data-einheit), unschaerfe (wird scharf), hervorheben}; optional data-verzoegerung (ms) und data-dauer; Container mit data-staffel lassen ihre Kinder gestaffelt erscheinen. Rückwärts werden Schritte sauber zurückgenommen; kommt man rückwärts auf eine Folie, sind alle Schritte sichtbar. Schritte können über Hooks auch Zustandswechsel auslösen (siehe 9).
4. Übergänge: modern, ruhig, richtungsabhängig, mit der View Transitions API (document.startViewTransition) und Fallback; Elemente mit data-morph="name" (→ view-transition-name) morphen zwischen Folien (z. B. großes Steuerrad → Mini-Steuerrad). prefers-reduced-motion ⇒ keine Bewegung. Keine Ruckler, keine Layoutsprünge.
5. Adresse: #f06 bzw. #f06.2 (Folie.Schritt); Neuladen behält die Position.
6. Übersicht (O): Raster aller Folien als Miniaturen mit Nummer, Titel, Bündel und Sollzeit; Backup in eigener Rubrik; Klick/Enter springt.
7. Referentenansicht (P): öffnet dieselbe Datei in einem zweiten Fenster (z. B. index.html?referent): aktuelle Folie mit aktuellem Schritt, nächste Folie bzw. nächster Schritt, Sprechtext aus .notizen (groß), Gesamt-Uhr (verstrichen gegen 15:00, Farbwarnung), Folien-Uhr gegen data-zeit, Uhrzeit, Bündel der Folie; Timer pausieren/zurücksetzen. Steuerung in beide Richtungen. Synchronisation per window.postMessage zwischen Hauptfenster und Referentenfenster (funktioniert auch bei file://), zusätzlich BroadcastChannel, wenn verfügbar.
8. Druck/PDF: Strg+P bzw. ?druck ⇒ jede Folie eine Seite 16:9, alle Schritte sichtbar, Interaktionen im Endzustand, keine Bedienelemente, Notizen ausgeblendet (mit ?druck&notizen unter der Folie). Teste den PDF-Export mit Chromium (page.pdf()).
9. JS-Schnittstelle für Folien-Skripte (in AUTOREN.md dokumentieren): window.Deck mit mindestens Deck.registriere(folienId, { betreten(ctx), verlassen(ctx), schritt(ctx, n, richtung), druck(ctx) }), Deck.zustand() → { folie, folienIndex, schritt, schritteGesamt, anzahlFolien }, Deck.gehe(folieOderIndex, schritt), Deck.weiter(), Deck.zurueck(), Deck.marke (Konfiguration), Deck.util (z. B. zahlFormat, warte, animiere(element, keyframes, optionen) mit Beachtung von reduced motion, SVG-Helfer). ctx enthält das Folien-Element, die geparsten .daten, bewegungReduziert, druckmodus. Ereignisse 'deck:folie' und 'deck:schritt' auf document.
10. Bausteine in komponenten.js/.css (jeweils mit Beispiel in AUTOREN.md):
   a) Steuerrad (SVG, aus Konfiguration erzeugt): <div class="steuerrad" data-modus="hub|synthese|menue|mini">. Felder: kompetenz (Zentrum), nutzen (oben links), attribute (unten links), tonalitaet (oben rechts), bild (unten rechts), dazu ein Persona-Rahmen; Leitfragen nach Esch; Feldfarben aus Tokens (--f-hart, --f-weich, --f-kern). Felder klickbar; sie springen zur passenden Folie (Zuordnung automatisch über data-feld der Folien). Modus hub: Methoden außen beschriftbar (Desk Research → kompetenz, Repertory Grid → attribute, Laddering → nutzen, Analogien → tonalitaet, Kommunikationsanalyse → bild, Persona + Limbic Map → Rahmen), schrittweise aufbaubar. Modus synthese: Stichworte je Feld aus JSON, schrittweise, mit Quellenkürzel, Markenkern im Zentrum. Modus menue: großes Sprungmenü (Fragerunde). Mini-Navigator automatisch auf Folien mit Feld, Klick öffnet Sprungmenü; morpht per View Transition aus dem großen Rad.
   b) QR-Code: <div class="qr" data-qr="https://…"> → scharfes SVG über qrcode-generator, darunter die Kurz-URL.
   c) Live-Umfrage: <div class="umfrage" data-umfrage="tier"> – Frage, Optionen, Link und unsere Antwort aus marke.js. Zeigt QR-Code (wenn Link gesetzt) und Antwortbalken. Ergebnisse: (1) Zählmodus für Handzeichen/Zurufe: Klick auf Option = +1, Umschalt+Klick oder Rechtsklick = −1, auf der Folie zusätzlich Ziffern 1–9; (2) Werte direkt eintragen (Doppelklick auf Wert), z. B. aus Mentimeter/Particify übernommen; (3) Knopf „Ergebnisse öffnen“ öffnet den Ergebnis-Link in neuem Tab. Balken animieren weich (Prozent + Anzahl); Ergebnisse überstehen ein Neuladen (localStorage, immer mit try/catch); Zurücksetzen-Knopf. Ein Auflösungs-Schritt hebt „Unsere Analyse“ hervor. Ohne Link: nur Zählmodus, kein QR.
   d) Live-Wortwolke: <div class="wortwolke" data-wortwolke="assoziationen" [data-nur-anzeige]> – Teammitglied tippt Zurufe ins Eingabefeld (Enter), Wörter fliegen animiert in die Wolke, Mehrfachnennungen werden größer; gespeichert (localStorage, try/catch), dieselbe Wolke erscheint auf späteren Folien im Anzeigemodus wieder; Löschen per Knopf, Wort entfernen per Alt+Klick.
   e) Rätsel/Enthüllen: data-animation="unschaerfe" bzw. Klasse .raetsel (stark vergrößerter, unscharfer Bildausschnitt, der im Schritt scharf wird und herauszoomt).
   f) Zähler (siehe Schritte, zaehlen).
   g) Gestaltungsbausteine: .beispiel, .quelle, .kicker, Karten (.karte mit Varianten), Kennzahl (.kennzahl: Wert + Beschriftung), Chip/Tag, Legende „Daten vs. Annahme“, Bild-Platzhalter (.bild-platzhalter mit Beschriftung), Zitat, Rasterklassen (z. B. .raster-12 mit Spannweiten, .raster-2, .raster-3), Icon-Satz als Inline-SVG-Sprite (eigene schlichte Icons oder Lucide/Tabler unter ISC/MIT – Lizenz nennen; keine Plattform-Logos nachbauen).
11. Barrierefreiheit: Fokus-Stile, <button> für Bedienelemente, aria-live für Folienwechsel, Kontraste AA in allen Themen.
12. Robustheit: keine Konsolenfehler, keine externen Netzwerkanfragen, läuft per file:// in Chrome/Edge (getestet) und mit Fallbacks in Firefox/Safari.
13. Werkzeuge:
   - werkzeuge/zusammenbauen.py [--nur f01,f02 oder Dateinamen] [--ausgabe PFAD]: erzeugt index.html (oder die Ausgabe) aus vorlage.html, fügt die <section>s aus folien/*.html in Dateinamen-Reihenfolge ein (Dateien mit _ überspringen, außer explizit angefordert), verlinkt automatisch vorhandene css/folien/<name>.css und js/folien/<name>.js; relative Pfade stimmen auch für Ausgaben in Unterordnern (z. B. _test/).
   - werkzeuge/pruefen.mjs <html-datei> [--ausgabe ORDNER] [--schritte] [--nur f03,f04] [--thema NAME] [--modus hell|dunkel] [--druck PDF-PFAD] [--skala 0.5]: lädt per file://, läuft alle Folien (mit --schritte alle Schritte) über die Deck-API ab, speichert Screenshots (Dateiname mit Folien-ID und Schritt) und prüft: Konsolen- und Seitenfehler, externe Netzwerkanfragen, geladene Schriften, Überlauf (sichtbare Elemente außerhalb der Bühne; in ihrem Container abgeschnittener Text), fehlende Notizen, fehlendes data-zeit; Ausgabe als JSON-Bericht (stdout und bericht.json). playwright-core über Umgebungsvariable PLAYWRIGHT_CORE (Pfad zum Paket, hier ${TOOLS}/node_modules/playwright-core) oder normalen Import; Chrome-Pfad über CHROME_PFAD (Standard ${CHROME}).
14. Demo: Lege folien/_demo.html an (mehrere Folien, die JEDEN Baustein und jede Animation zeigen, inkl. Steuerrad in allen Modi, Umfrage, Wortwolke, QR, Rätsel, Zähler, data-morph) und teste damit gründlich: vor und zurück, Übersicht, Referentenansicht mit zwei Fenstern, Druck, hell/dunkel, alle Themen, reduzierte Bewegung, Tastatur bei fokussiertem Eingabefeld. Sieh dir die Screenshots an und verbessere, bis alles hochwertig aussieht. Die Demo bleibt als Referenz für die Folien-Agenten liegen.
15. AUTOREN.md: vollständige, präzise Schnittstelle mit Beispiel-Markup für jedes Layout und jeden Baustein, Token-Liste, Lesbarkeitsregeln (≥ 28 px Fließtext, Titel als Kernaussage, ≤ 40 Wörter sichtbarer Text, Beispieldaten kennzeichnen) und Arbeitsablauf für Folien-Agenten (Datei anlegen → zusammenbauen --nur … --ausgabe _test/… → pruefen --schritte → Screenshots ansehen), inkl. exakter Befehle mit Umgebungsvariablen. LIESMICH.md: Bedienung (Tasten, Referentenansicht, Umfrage, Wortwolke, Thema), vorläufig.
Qualitätsanspruch: Grundlage einer benoteten Präsentation – modern, ruhig, hochwertig, flüssig animiert, fehlerfrei. Lieber weniger, dafür perfekt funktionierende Effekte. Teste wirklich alles mit Playwright und sieh dir die Ergebnisse an.
${FORTSETZUNG}
Rückgabe: Dateien, API-Zusammenfassung (so, dass Folien-Agenten damit arbeiten können), Bausteine mit Beispiel-Markup, exakte Aufrufe für pruefen und zusammenbauen, Themenliste, Prüfbericht, offene Punkte, Quellen.`

phase('Fundament')
const engine = await agent(enginePrompt, { label: 'Engine & Designsystem', phase: 'Fundament', schema: ENGINE_SCHEMA })
if (!engine) throw new Error('Fundament nicht fertig geworden')
log('Fundament fertig: ' + engine.dateien.length + ' Dateien')

// ---------- Phase 4–6: Folien bauen, prüfen, überarbeiten ----------
const GRUPPEN = [
  { key: 'g1', name: 'Einstieg & Vorgehen', dateien: ['01-einstieg', '01b-wortwolke', '02-vorgehen'], ids: 'f01,f01b,f02',
    brief: `f01 Einstieg (45 s, Bündel A, kein Feld): Das Publikum wird sofort eingebunden. Schritt 0: stark vergrößerter, unscharfer Bildausschnitt (Rätselbild aus marke.js, bis dahin Platzhalter) und die Frage „Welche Marke steckt dahinter?“ – das Publikum ruft. Schritt 1: Bild wird scharf und zoomt heraus, Markenname erscheint. Schritt 2: Titel „Brand Persona & Markenidentität“, Unterzeile „Fallstudie 1 · Unternehmenskommunikation · Prof. Dr. Daniel Stenger“, Gruppe (aus marke.js) und Datum. Wirkung wie der Auftakt einer Keynote. Notizen: Moderation (Frage stellen, kurz warten, auflösen, Thema nennen).
f01b Live-Wortwolke (optional: data-optional, 45 s, Bündel A): „Was verbindet ihr mit [Marke]?“ – ein Teammitglied tippt Zurufe ein, die Wolke wächst live (Baustein Wortwolke, ID assoziationen). Kleiner Hinweis auf der Folie: „Wir kommen am Ende darauf zurück“. Notizen: Ablauf, und dass die Folie optional ist (Zeit!).
f02 Ausgangslage & Vorgehen (60 s, Bündel A, data-feld="hub"): Inhalt exakt nach ${FS}/folienentwuerfe.md, Abschnitt Folie 2 (Titel „Sechs Methoden, ein Modell: So leiten wir die Identität von [Marke] her“, Leitfrage „Wofür steht [Marke] – und passt ihr heutiger Auftritt dazu?“, Steuerrad mit den Methoden außen, Verkettungen „Attribute sind die Startpunkte“ und „Tonalität ist der Prüfmaßstab“, Persona-Rahmen, Quellenzeile „Eigene Darstellung nach Esch (Markensteuerrad) und Häusel (Limbic Map), erstellt mit KI-Unterstützung“, Sprechtext aus dem Entwurf in .notizen). Nutze den Steuerrad-Baustein (Modus hub). Animation: Rad baut sich auf (Zentrum → Quadranten), dann erscheinen die Methoden nacheinander mit sich zeichnenden Verbindungen, zuletzt Persona-Rahmen und Verkettungspfeile. Die Folie ist zugleich interaktive Agenda: Klick auf Feld oder Methode springt zur Folie (Desk Research/Markenkompetenz f03, Persona f04, Repertory Grid f06, Laddering f07, Analogien f08, Kommunikationsanalyse f09); Folienverweise sichtbar. Das Rad geht per data-morph in das Mini-Steuerrad der Folgefolien über.` },
  { key: 'g2', name: 'Markenkompetenz, Persona, Limbic Map', dateien: ['03-markenkompetenz', '04-persona', '05-limbic-map'], ids: 'f03,f04,f05',
    brief: `f03 Markenkompetenz (45 s, A, kompetenz): „Wer bin ich?“ – horizontale Zeitleiste der Markenhistorie (Gründung + 3–4 Meilensteine; Platzhalter-Jahre und -Texte, Beispieldaten), drei Kennzahlen als große Zahlen mit Zähl-Animation (z. B. Umsatz, Mitarbeitende, Marktanteil – Beispieldaten), Marktrolle als markantes Label (z. B. „Herausforderer“), Selbstverständnis/Claim als Zitat-Platzhalter. Titel-Muster: „[Marke]: <Rolle> mit <Kernkompetenz>“. Notizen: Gerüst.
f04 Brand Persona (90 s, A, persona): Steckbrief, der wie ein echtes Profil wirkt: Bild-Platzhalter (Kennzeichnung „Bild KI-generiert“), Name, Alter, Wohnort, Zitat; die fünf geforderten Dimensionen als klar gegliederte Blöcke mit Icons: Geografie, Soziodemografie, Kaufverhalten, Mediennutzung (Mini-Balken je Plattform), Psychografie (Werte, Pains & Gains); Legende „Daten vs. Annahme“ (zwei Markierungen); Beispieldaten. Animation: Profil baut sich gestaffelt auf. Inhalt datengetrieben aus JSON. Achtung Wortzahl: lieber knapp und visuell.
f05 Limbic Map (60 s, A, persona): eigene, vereinfachte Darstellung in Anlehnung an die Limbic® Map nach Häusel (Gruppe Nymphenburg): Motiv- und Emotionssysteme Balance, Dominanz, Stimulanz mit den Mischbereichen Abenteuer/Thrill, Disziplin/Kontrolle, Fantasie/Genuss und den Limbic Types (Traditionalisten, Harmoniser, Offene, Hedonisten, Abenteurer, Performer, Disziplinierte), angeordnet wie in der Literatur üblich – wo du bei Positionen unsicher bist, im Code und in den Notizen vermerken, dass die Gruppe sie mit der Vorlesung abgleichen muss. Zwei Punkte (Persona und Marke) werden aus JSON-Gewichten (Balance/Dominanz/Stimulanz in %) positioniert und fliegen animiert an ihre Stelle; eine Verbindung zeigt den Fit. Rechts: Limbic Type der Persona und 3 Konsequenzen für die Kommunikation. Quellenzeile mit Häusel und Markenhinweis (Limbic® ist eine eingetragene Marke der Gruppe Nymphenburg).` },
  { key: 'g3', name: 'Repertory Grid & Laddering', dateien: ['06-repertory-grid', '07-laddering'], ids: 'f06,f07',
    brief: `f06 Repertory Grid → Markenattribute (90 s, B, attribute): Schritt 1: Methode in zehn Sekunden verständlich: drei Markenkarten (Triade) – zwei rücken zusammen, eine ab, darüber erscheint ein bipolares Konstrukt (z. B. „innovativ – traditionell“). Schritt 2: Polaritätenprofil (SVG, datengetrieben aus JSON: 6–8 Konstrukte, Skala 1–7, Linien für [Marke], stärksten Wettbewerber und Idealmarke) – die Linien zeichnen sich nacheinander. Schritt 3: die drei Konstrukte mit hoher Relevanz, großer Differenzierung und Nähe zum Ideal werden hervorgehoben und rechts als „Markenattribute“ benannt. Beispieldaten kennzeichnen; Legende; Quelle: eigene Erhebung (n = …, KI-simulierte Befragte + Kurzinterviews), Methode nach Kelly (1955).
f07 Laddering → Markennutzen (90 s, B, nutzen): Hierarchical Value Map als Leiter: Ebenen von unten nach oben Attribute → funktionale Konsequenzen → psychosoziale Konsequenzen → Werte (Means-End-Chain nach Gutman 1982; Reynolds & Gutman 1988). Die Animation klettert Ebene für Ebene hoch, Verbindungen zeichnen sich (Linienstärke = Häufigkeit aus der Implikationsmatrix, datengetrieben), danach erscheinen zwei Kästen „Sachlich-funktionaler Nutzen“ und „Psychosozialer Nutzen“. Beispieldaten kennzeichnen. Die Attribute unten passen inhaltlich zu f06 (gleiche Beispiel-Attribute).` },
  { key: 'g4', name: 'Analogien & Live-Umfrage', dateien: ['08-analogien'], ids: 'f08',
    brief: `f08 Analogien → Markentonalität mit Live-Umfrage (120 s, B, tonalitaet): Schritt 0: Frage ans Publikum „Wenn [Marke] ein Tier wäre – welches?“ mit QR-Code und Kurz-URL (Baustein Umfrage, ID tier, Optionen aus marke.js) – das Publikum stimmt am Handy ab oder per Handzeichen (Zählmodus). Schritt 1: Ergebnisbalken mit Auflösung „Unsere Analyse: …“. Schritt 2: Gegenüberstellung „Wenn [Marke] ein Mensch wäre“ (Kurzprofil: Alter, Beruf, Stil, Auftreten – Platzhalter) und „… ein Tier wäre“ (Tier + 3 Gründe), im Kontrast zu zwei Wettbewerbern (klein). Schritt 3: abgeleitete Markentonalität: 4–5 Persönlichkeitsmerkmale und Markenemotionen, zugeordnet zu Aakers Brand-Personality-Dimensionen (Aufrichtigkeit, Spannung, Kompetenz, Kultiviertheit, Robustheit) als ruhige Balken- oder Radardarstellung (datengetrieben, Beispieldaten). Hinweis auf der Folie oder in den Notizen: Die Publikumsumfrage ist eine kleine Live-Ergänzung, keine repräsentative Erhebung. Die Folie muss auch ohne Umfrage-Link (nur Zählmodus) gut aussehen. Wird die Folie zu voll, teile sie in f08 (Umfrage + Analogien) und f08b (Tonalität), Gesamtzeit 120 s (z. B. 70 + 50 s), beides in derselben Datei.` },
  { key: 'g5', name: 'Kommunikationsanalyse', dateien: ['09-kommunikationsanalyse'], ids: 'f09',
    brief: `f09 Kommunikationsanalyse → Markenbild (120 s, C, bild): Schritt 1: drei Kanal-Kacheln (Instagram, Facebook, YouTube – nur neutrale Icons oder Schriftzug, keine Plattform-Logos nachbauen) mit Followern, Beiträgen pro Woche und Ø Engagement-Rate (Zähl-Animation, Beispieldaten; Formel klein: (Likes + Kommentare) / Follower × 100). Schritt 2: Bildwelt – Raster aus 6–9 Post-Platzhaltern (später Screenshots), ein Schlüsselbild hervorgehoben (Begriff nach Kroeber-Riel). Schritt 3: Corporate Design – Logo-Platzhalter, Farbpalette (aus den Markenfarben in marke.js, mit HEX-Werten), Typografie-Muster, Claim/Slogan. Schritt 4: Fit-Bewertung (Markenbild ↔ Markentonalität, ↔ Persona/Limbic Type, Konsistenz über die Kanäle) mit ✓ / ~ / ✗ und je einem Satz Begründung – die Brücke zu den Empfehlungen. Wird die Folie zu voll, teile sie in f09 und f09b (Gesamtzeit 120 s) in derselben Datei.` },
  { key: 'g6', name: 'Synthese, Fazit, Fragen', dateien: ['10-markensteuerrad', '11-fazit', '12-fragen'], ids: 'f10,f11,f12',
    brief: `f10 Markensteuerrad – Synthese (75 s, C, hub): großes Steuerrad (Baustein, Modus synthese). Die Felder füllen sich nacheinander mit je 3–4 Stichworten aus JSON, jedes mit Quellenkürzel (DR Desk Research, RG Repertory Grid, LA Laddering, AN Analogien, KA Kommunikationsanalyse, LM Limbic Map). Am Ende erscheint der Markenkern als ein Satz. Optionaler letzter Schritt: Vergleich mit der Publikums-Wortwolke aus f01b („Ihr habt gesagt …“ – Wortwolke im Anzeigemodus, nur wenn Wörter vorhanden). Klick auf ein Feld springt zur Detailfolie.
f11 Fazit & Empfehlungen (90 s, C, kein Feld): drei Kernerkenntnisse (kompakt) und 2–3 Empfehlungen als Karten (Was? · Kanal · Warum? mit Verweis auf die Lücke aus Folie 9 bzw. dem Steuerrad), Schritt für Schritt. Titel als Kernaussage. Die Empfehlungen sind das Bewertungskriterium „Qualität der Lösung/Empfehlung“ (15 %) – entsprechend prominent.
f12 Danke & Fragen (data-zeit 0, alle): „Danke! Fragen?“ mit Gruppe und dem Steuerrad als Sprungmenü (Modus menue) für Rückfragen: Klick auf Feld oder Methode springt zur Folie; zusätzlich Links zu den Backup-Folien b1–b7. Dezenter Hinweis „Taste O: Übersicht“.` },
  { key: 'g7', name: 'Backup', dateien: ['13-backup'], ids: 'b1,b2,b3,b4,b5,b6,b7',
    brief: `Backup-Folien b1–b7 (alle mit data-backup, data-zeit 0, Bündel A sammelt) in einer Datei folien/13-backup.html. Informationsdichter als die Hauptfolien, aber genauso sauber: b1 Methodik & Begründung des Vorgehens (Desk Research + KI-Tools: wofür, Qualitätssicherung, Limitationen – Inhalt aus ${FS}/prompts.md Abschnitt C); b2 Prompt-Log (Auszug als Tabelle mit Spalten ID, Tool, Ziel, Prüfung, Folie – Beispielzeilen; Hinweis auf den vollständigen KI-Nachweis); b3 Datenquellen Persona (Tabelle Quelle, Jahr, Stichprobe, genutzt für …); b4 Repertory-Grid-Rohdaten (Tabelle Konstrukte × Elemente mit Mittelwerten, datengetrieben, Beispieldaten – passend zu f06); b5 Laddering-Leitern & Implikationsmatrix (kompakt, passend zu f07); b6 Raster Kommunikationsanalyse (Codiertabelle); b7 Quellenverzeichnis (Literatur aus ${FS}/methoden.md, einheitlich zitiert, plus Hinweis auf eingesetzte Schriften/Bibliotheken). Tabellen gut lesbar (mindestens 22 px), Zebra-Streifen, klare Kopfzeilen; Inhalte datengetrieben oder leicht editierbar.` },
]

const eigeneDateien = g => g.dateien.map(d => `folien/${d}.html, css/folien/${d}.css, js/folien/${d}.js`).join('; ')

const folienPrompt = g => `${REGELN}

Aufgabe: Gestalte und baue die Folien „${g.name}“ der Web-Präsentation in ${P}. Das Fundament (Engine, Designsystem, Bausteine) ist fertig. Lies zuerst ${P}/AUTOREN.md vollständig und sieh dir ${P}/folien/_demo.html, css/tokens.css und css/komponenten.css an. Halte dich strikt an diese Schnittstelle und das Designsystem (Tokens statt fester Farben und Schriften), damit alle Folien wie aus einem Guss wirken – sieben Agenten bauen parallel.
Zusammenfassung der Engine: ${kurz({ api: engine.api, komponenten: engine.komponenten, pruefen: engine.pruefen, zusammenbauen: engine.zusammenbauen }, 9000)}

Deine Folien-IDs: ${g.ids}. Du darfst NUR diese Dateien anlegen oder ändern (Pfade relativ zu ${P}): ${eigeneDateien(g)} – sowie Testausgaben unter ${P}/_test/${g.key}*. Engine-Dateien (js/deck.js, js/komponenten.js, css/tokens.css, css/deck.css, css/komponenten.css, werkzeuge/*, marke.js, bilder/*, schriften/*) NICHT ändern. Fehlt dort etwas, löse es folienlokal und melde es als engine_wuensche (bei Bedarf an marke.js mit genauem Vorschlag für den Eintrag). Eigene Bilder nur als SVG in deinen Folien- oder CSS-Dateien.

Gesamtablauf (zur Einordnung):
${FOLIENPLAN}

Aufgabe der Gruppe laut Folie: ${AUFGABE}
Inhaltliche Grundlagen: ${FS}/README.md (roter Faden, Folienplan, Check), ${FS}/methoden.md (Methoden, Vorlagen), ${FS}/folienentwuerfe.md (fertiger Entwurf Folie 2), ${FS}/prompts.md.

Briefing für deine Folien:
${g.brief}

Anforderungen an jede Folie: Titel als Kernaussage (mit Platzhaltern über data-marke, solange die Marke fehlt), Kicker mit Methode bzw. Feld, klare visuelle Hierarchie, höchstens ca. 40 Wörter sichtbarer Text (Backup ausgenommen), Fließtext ≥ 28 px, schrittweise Animation, die die Argumentation stützt (ruhig, nicht verspielt), Quellenzeile, Sprechtext-Gerüst in .notizen passend zu data-zeit, data-zeit/data-buendel/data-feld laut Ablauf, Beispieldaten gekennzeichnet, datengetriebene Grafiken über <script type="application/json" class="daten"> mit verständlichen deutschen Feldnamen, damit die Gruppe später echte Werte eintragen kann. Der Druckmodus zeigt den Endzustand. Interaktive Elemente müssen mit Maus UND Tastatur bedienbar sein und dürfen die Navigation nicht stören.
Ablauf: bauen → zusammenbauen.py --nur ${g.ids} --ausgabe ${P}/_test/${g.key}.html → pruefen.mjs mit --schritte (Ausgabe ${P}/_test/${g.key}-bilder), auch mit --modus dunkel und --druck → JEDEN Screenshot ansehen → verbessern, bis der Prüfbericht fehlerfrei ist und die Folien hochwertig aussehen.
Rückgabe: Dateien, Folienbeschreibung (ID, Titel, Layout, Animationen, Interaktion, Zeit), Screenshot-Pfade, Prüfbericht-Zusammenfassung, Engine-Wünsche, Quellen, offene Punkte.`

const pruefPrompt = (g, bau) => `${REGELN}

Aufgabe: Prüfe die Folien „${g.name}“ (IDs ${g.ids}) der Web-Präsentation in ${P} streng und konstruktiv. Ändere KEINE Dateien außer Testausgaben unter ${P}/_test/pruef-${g.key}*.
Angaben des Folien-Agenten: ${kurz(bau, 6000)}
Schnittstelle und Designsystem: ${P}/AUTOREN.md, css/tokens.css, css/komponenten.css, folien/_demo.html.
Baue eine Testseite (zusammenbauen.py --nur ${g.ids} --ausgabe ${P}/_test/pruef-${g.key}.html), führe pruefen.mjs mit --schritte aus, zusätzlich mit --modus dunkel und --druck, und sieh dir JEDEN Screenshot an. Teste die Interaktionen selbst mit Playwright (Klicks, Tastatur, vor und zurück).
Prüfe:
1. Gestaltung: Hierarchie, Raster, Weißraum, Ausrichtung, Einheitlichkeit mit dem Designsystem (nur Tokens), Qualität der Grafiken.
2. Lesbarkeit: Schriftgrößen (Fließtext ≥ 28 px, Backup-Tabellen ≥ 22 px), Kontrast, Wortzahl, kein Überlauf oder Abschneiden.
3. Inhalt: Titel als Kernaussage, fachlich korrekte Modellbegriffe (Esch, Häusel, Kelly, Gutman, Aaker, Kroeber-Riel), passt zur Aufgabe (${AUFGABE}) und zu ${FS}/methoden.md und ${FS}/folienentwuerfe.md, Platzhalter statt erfundener Markenfakten, Beispieldaten gekennzeichnet, Quellenzeilen, Notizen passend zur Sollzeit.
4. Technik: Schritte vor und zurück, Druckmodus, dunkler Modus, Konsolenfehler, Datenstruktur verständlich editierbar.
5. Animation und Interaktion: ruhig, sinnvoll, flüssig; interaktive Elemente mit Maus und Tastatur bedienbar, keine Konflikte mit der Navigation.
6. Konsistenz mit dem Ablauf: data-zeit, data-buendel, data-feld laut Plan:
${FOLIENPLAN}
Gib konkrete Befunde mit Schwere (hoch/mittel/niedrig), Folie, Kategorie, Beschreibung und präzisem Verbesserungsvorschlag zurück, außerdem ein Gesamturteil.`

const fixPrompt = (g, bau, pruef) => `${REGELN}

Aufgabe: Setze die Prüfbefunde für die Folien „${g.name}“ (IDs ${g.ids}) in ${P} um. Du darfst NUR diese Dateien ändern: ${eigeneDateien(g)} (sowie Testausgaben unter ${P}/_test/${g.key}*). Engine-Probleme nicht in Engine-Dateien beheben, sondern als engine_wuensche melden.
Angaben des Folien-Agenten: ${kurz(bau, 5000)}
Befunde der Prüfung: ${kurz(pruef, 9000)}
Setze alle Befunde der Schwere hoch und mittel um, niedrige, wenn sie eindeutig und risikoarm sind. Danach erneut zusammenbauen (--nur ${g.ids} --ausgabe ${P}/_test/${g.key}.html) und mit pruefen.mjs (--schritte, auch dunkel und --druck) prüfen, jeden geänderten Screenshot ansehen.
Rückgabe: behoben, nicht behoben (mit Grund), Dateien, Screenshot-Pfade, Prüfbericht, Engine-Wünsche, Quellen.`

const folienErgebnisse = (await pipeline(
  GRUPPEN,
  g => agent(folienPrompt(g), { label: 'Folien: ' + g.name, phase: 'Folien', schema: FOLIEN_SCHEMA }),
  (bau, g) => bau ? agent(pruefPrompt(g, bau), { label: 'Prüfung: ' + g.name, phase: 'Prüfung', schema: PRUEF_SCHEMA }).then(pruef => ({ bau, pruef })) : null,
  (x, g) => {
    if (!x) return null
    const befunde = (x.pruef && x.pruef.befunde) || []
    if (!befunde.length) return { gruppe: g.key, name: g.name, bau: x.bau, pruef: x.pruef, fix: null }
    return agent(fixPrompt(g, x.bau, x.pruef), { label: 'Überarbeitung: ' + g.name, phase: 'Überarbeitung', schema: FIX_SCHEMA })
      .then(fix => ({ gruppe: g.key, name: g.name, bau: x.bau, pruef: x.pruef, fix }))
  },
)).filter(Boolean)
const fehlend = GRUPPEN.filter(g => !folienErgebnisse.find(e => e.gruppe === g.key)).map(g => g.name)
if (fehlend.length) log('Nicht fertig geworden: ' + fehlend.join(', '))
log(`Folien-Gruppen fertig: ${folienErgebnisse.length}/${GRUPPEN.length}`)

// ---------- Phase 7: Integration ----------
const gruppenKurz = folienErgebnisse.map(e => ({
  gruppe: e.gruppe, name: e.name, dateien: e.bau.dateien, folien: e.bau.folien,
  engine_wuensche: [...(e.bau.engine_wuensche || []), ...((e.fix && e.fix.engine_wuensche) || [])],
  offene_punkte: e.bau.offene_punkte, nicht_behoben: e.fix ? e.fix.nicht_behoben : [],
  quellen: [...(e.bau.quellen || []), ...((e.fix && e.fix.quellen) || [])],
}))
const integrationPrompt = `${REGELN}

Aufgabe: Führe die Web-Präsentation in ${P} zusammen und mache sie präsentationsfertig. Du darfst jetzt alle Dateien in ${P} ändern.
Engine: ${kurz({ api: engine.api, pruefen: engine.pruefen, zusammenbauen: engine.zusammenbauen, offene_punkte: engine.offene_punkte, quellen: engine.quellen }, 6000)}
Ergebnisse der Folien-Gruppen: ${kurz(gruppenKurz, 16000)}
${fehlend.length ? 'ACHTUNG, diese Gruppen sind nicht fertig geworden – baue ihre Folien selbst nach dem Ablaufplan: ' + fehlend.join(', ') : ''}
Ablaufplan:
${FOLIENPLAN}
Schritte:
1. Engine-Wünsche aller Gruppen sichten; sinnvolle zentral in Engine bzw. marke.js umsetzen und die folienlokalen Behelfslösungen dann aufräumen. Konfigurationsbedarf der Folien in marke.js zusammenführen und gut kommentieren.
2. Gesamt-index.html erzeugen (zusammenbauen.py, alle Folien in richtiger Reihenfolge inkl. optionaler Folie und Backup) und prüfen: pruefen.mjs mit --schritte für alle Folien, hell und dunkel, alle Themen stichprobenartig, Druck-PDF; Tastatur, Übersicht, Referentenansicht (zwei Fenster, Synchronisation), Umfrage-Zählmodus, Wortwolke, Steuerrad-Sprünge. Alle Fehler beheben.
3. Einheitlichkeit herstellen: gleiche Kopf- und Fußbereiche, Abstände, Schriftgrößen, Farblogik, Animationsstil, Position des Mini-Steuerrads, Beispieldaten-Badges, Quellenzeilen. Erzeuge dafür einen Kontaktbogen aller Folien und sieh ihn dir an.
4. Zeitplan prüfen: Summe data-zeit der Hauptfolien = 885 s (14:45), optionale Folie 45 s, Backup 0.
5. Danach ist index.html die einzige Quelle für die Folieninhalte (Folien-HTML inline). Entferne folien/*.html (inkl. _demo.html), werkzeuge/zusammenbauen.py, werkzeuge/vorlage.html und ${P}/_test/ – aber erst, wenn index.html vollständig und geprüft ist; die folienbezogenen CSS/JS-Dateien bleiben als eigene Dateien verlinkt. Behalte werkzeuge/pruefen.mjs. Setze vor jede Folie in index.html einen gut sichtbaren Kommentarkopf (Folie, Bündel, was die Gruppe hier ändern muss). Prüfe danach erneut, ob alles funktioniert (Pfade!).
6. Exporte: ${P}/export/praesentation.pdf (Druckmodus, alle Folien inkl. Backup), ${P}/export/uebersicht.png (Kontaktbogen aller Folien im Endzustand), ${P}/export/folien/<id>.png (jede Folie im Endzustand, 1600 px breit).
7. Dokumentation (Deutsch, verständlich für die Gruppe): ${P}/LIESMICH.md vollständig: Start (Doppelklick, empfohlener Browser Chrome oder Edge, Vollbild), alle Tasten, Referentenansicht mit zweitem Bildschirm (Bildschirm erweitern statt spiegeln), Clicker, Umfrage einrichten (z. B. Particify oder Mentimeter: Umfrage anlegen, Link in marke.js, Zählmodus als Plan B), Wortwolke, Marke eintragen (marke.js: Name, Farben, Logo, Rätselbild), Texte ändern (wo in index.html), Thema wählen, Plan B (PDF auf USB-Stick), Technik-Checkliste für den Präsentationstag. ${P}/QUELLEN.md: alle Schriften, Bibliotheken, Icons mit Lizenz und Herkunft sowie Hinweis, dass die Präsentation mit KI-Unterstützung (Claude Code) erstellt wurde. AUTOREN.md aktualisieren (Bearbeitung jetzt direkt in index.html). Entferne ${P}/_entwuerfe/*/ NICHT (bleibt als Dokumentation der Gestaltungsrichtungen), aber lösche dort große Zwischendateien, die keine Screenshots, muster.html oder tokens.css sind.
Rückgabe: Dateien, Engine-Änderungen, Prüfbericht, PDF-Pfad, Kontaktbogen-Pfad, Folien-IDs in Reihenfolge, Zeitsumme in Sekunden, Quellen, offene Punkte.`

phase('Integration')
const integration = await agent(integrationPrompt, { label: 'Integration & Export', phase: 'Integration', schema: INTEG_SCHEMA })
if (!integration) throw new Error('Integration nicht fertig geworden')

// ---------- Phase 8: Abschlussprüfung ----------
const anforderungenPrompt = `${REGELN}

Aufgabe: Prüfe die fertige Web-Präsentation in ${P} streng gegen alle Anforderungen. Ändere keine Projektdateien (eigene Testskripte nur im Ordner ${P}/_abschluss-test/, den du am Ende wieder löschst).
Anforderungen des Nutzers: „Woran du schon mal arbeiten kannst ist am Layout der Folien ich möchte sie modern Designt haben mit Animation und die Präsentation soll einen Interaktiven Touch haben“. Entscheidungen: Web-Präsentation im Browser; interaktiv: Live-Umfrage per QR-Code, klickbare Navigation, Einstieg mit Publikum; Farben jetzt neutral, später Markenfarben (über marke.js tauschbar).
Weitere Anforderungen: offline per file:// lauffähig (keine externen Anfragen), Referentenansicht mit Notizen und Uhren, Druck/PDF, Zeitplan 14:45, alle Folien laut Ablaufplan vorhanden, Folieninhalte passen zur Aufgabe und zu den Methoden (${FS}/README.md, ${FS}/methoden.md, ${FS}/folienentwuerfe.md), Platzhalter statt erfundener Markenfakten, Beispieldaten gekennzeichnet, Texte deutsch und fehlerfrei, Lesbarkeit (≥ 28 px Fließtext), Bewertungskriterien Visualisierung und Vermittlung bedient, LIESMICH.md und QUELLEN.md vollständig und korrekt, marke.js verständlich.
Ablaufplan:
${FOLIENPLAN}
Teste selbst mit Playwright: Tastaturnavigation durch alle Folien und Schritte (vor und zurück), Übersicht, Referentenansicht (zweites Fenster, Synchronisation in beide Richtungen), Umfrage (zählen, Wert eintragen, zurücksetzen, Auflösung), Wortwolke (Wörter eintippen, ohne dass die Navigation reagiert; Anzeige auf späterer Folie), Steuerrad-Klicks springen zur richtigen Folie, Mini-Navigator, Druck-PDF, reduzierte Bewegung, Thema und Modus wechseln, Farbtausch über marke.js (teste mit einer Kopie in ${P}/_abschluss-test/), Konsolenfehler, externe Anfragen.
Rückgabe: Befunde (Schwere, Folie, Kategorie, Beschreibung, Vorschlag), was erfüllt ist, Gesamturteil.`

const gestaltungPrompt = `${REGELN}

Aufgabe: Du bist Art Director und bewertest die fertige Präsentation in ${P} als Ganzes. Sieh dir ${P}/export/uebersicht.png und alle Bilder in ${P}/export/folien/ an und erzeuge eigene Screenshots einzelner Schritte sowie im dunklen Modus (Testausgaben nur in ${P}/_abschluss-gestaltung/, am Ende löschen). Ändere keine Projektdateien.
Prüfe: einheitliche Gestaltung (Typografie, Abstände, Raster, Farben, Icon- und Diagrammstil, Kopf und Fuß), visuelle Hierarchie und Lesbarkeit aus der letzten Reihe, Qualität der Animationen (ruhig, sinnvoll, flüssig – nimm dafür auch Zwischenbilder während einer Animation auf), Modernität, Wirkung der interaktiven Elemente, Dramaturgie über 15 Minuten, ob die Folien die Argumentation stützen (Bewertungskriterium Visualisierung & Foliengestaltung).
Rückgabe: konkrete Befunde mit Schwere, Folie, Kategorie und präzisem Verbesserungsvorschlag (auf CSS-/Markup-Ebene), was gelungen ist (erfuellt) und Gesamturteil.`

phase('Abschlussprüfung')
const [anforderungen, gestaltung] = await parallel([
  () => agent(anforderungenPrompt, { label: 'Abschluss: Anforderungen', phase: 'Abschlussprüfung', schema: KRITIK_SCHEMA }),
  () => agent(gestaltungPrompt, { label: 'Abschluss: Gestaltung', phase: 'Abschlussprüfung', schema: KRITIK_SCHEMA }),
])
const abschlussBefunde = [...((anforderungen && anforderungen.befunde) || []), ...((gestaltung && gestaltung.befunde) || [])]
const wichtig = abschlussBefunde.filter(b => b.schwere !== 'niedrig')
log(`Abschlussprüfung: ${abschlussBefunde.length} Befunde, davon ${wichtig.length} hoch/mittel`)

// ---------- Phase 9: Feinschliff ----------
let feinschliff = null
if (abschlussBefunde.length) {
  phase('Feinschliff')
  feinschliff = await agent(`${REGELN}

Aufgabe: Setze die Befunde der beiden Abschlussprüfungen in der Web-Präsentation ${P} um (du darfst alle Dateien in ${P} ändern; index.html ist die Quelle der Folieninhalte).
Befunde: ${kurz(abschlussBefunde, 16000)}
Priorität: hoch → mittel → niedrig (niedrige nur, wenn eindeutig und risikoarm). Danach vollständig prüfen (pruefen.mjs mit --schritte, hell und dunkel, Druck; Interaktionen stichprobenartig mit Playwright) und die Exporte aktualisieren (export/praesentation.pdf, export/uebersicht.png, export/folien/*.png). Entferne alle Testordner (_test, _abschluss-test, _abschluss-gestaltung), falls noch vorhanden. Aktualisiere LIESMICH.md, QUELLEN.md und AUTOREN.md, falls sich etwas geändert hat.
Rückgabe: behoben, nicht behoben (mit Grund), Dateien, Screenshot-Pfade, Prüfbericht, Quellen.`, { label: 'Feinschliff', phase: 'Feinschliff', schema: FIX_SCHEMA })
}

return {
  punkte, sieger: sieger.name, rangfolge: rangfolge.map(r => ({ id: r.id, name: r.name, punkte: punkte[r.id] })),
  engine: { dateien: engine.dateien, themen: engine.themen, pruefbericht: engine.pruefbericht, offene_punkte: engine.offene_punkte, quellen: engine.quellen },
  folien: folienErgebnisse.map(e => ({ gruppe: e.gruppe, name: e.name, folien: e.bau.folien, befunde: (e.pruef && e.pruef.befunde || []).length, behoben: e.fix ? e.fix.behoben.length : 0, nicht_behoben: e.fix ? e.fix.nicht_behoben : [] })),
  fehlend,
  integration,
  abschluss: { anforderungen, gestaltung },
  feinschliff,
}
