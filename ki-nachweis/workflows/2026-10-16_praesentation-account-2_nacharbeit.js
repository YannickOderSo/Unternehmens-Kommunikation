export const meta = {
  name: 'praesentation-account-2-nacharbeit',
  description: 'Nacharbeit Web-Präsentation Fallstudie 1: abgeschnittene Abschlussbefunde umsetzen, zweite Abschlussprüfung (Technik/Anforderungen, Inhalt/Fakten), letzter Feinschliff',
  phases: [
    { title: 'Nacharbeit', detail: 'abgeschnittene Befunde der Abschlussprüfung umsetzen' },
    { title: 'Zweite Abschlussprüfung', detail: 'Anforderungen/Technik und Inhalt/Fakten unabhängig' },
    { title: 'Letzter Feinschliff', detail: 'Befunde der zweiten Prüfung umsetzen' },
  ],
}
// Workflow-Skript von Account 2 (Yannick Heisler), 16.10.2026 – Nacharbeit zu 2026-10-14_praesentation-account-2.js.
// Anlass: Im Feinschliff-Auftrag des Hauptworkflows wurde die Befundliste der Abschlussprüfung mit kurz(…, 16000)
// gekürzt; 18 von 40 Befunden (Index 22–39) erreichten den Feinschliff-Agenten nicht. Sie stehen hier wörtlich als
// Konstante RESTBEFUNDE (aus dem Workflow-Protokoll). Ergänzt (16.10., nach Merge von master): Befunde der Live-Prüfung
// von Account 1 (Übergabe Ü02) als U02_BEFUNDE. Rahmenregeln, Aufgabe, Ablaufplan, Schemas und der Auftrag der
// Anforderungsprüfung sind wörtlich aus dem Hauptskript übernommen.

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


// Die 18 abgeschnittenen Befunde wörtlich aus dem Protokoll des Hauptworkflows (Abschlussprüfung, Index 22–39)
const RESTBEFUNDE = (typeof args !== 'undefined' && args && args.restBefunde) || [{"schwere": "mittel", "folie": "f08b", "kategorie": "inhalt", "beschreibung": "Die Fußnote sagt „Werte der Wettbewerber: nicht erhoben“. Das Diagramm zeigt aber Red-Bull- und waterdrop-Marker (R/W) auf den Skalen, im selben Stil wie Messwerte. Das widerspricht sich sichtbar auf derselben Folie und ist für Prüfende angreifbar.", "vorschlag": "Marker als Schätzung kennzeichnen: `#f08b .g4t-wb-marker{border-style:dashed;opacity:.8}` und in der Legende „Red Bull (geschätzt)“ bzw. „waterdrop (geschätzt)“. Alternativ R/W bis zur Erhebung mit `hidden` ausblenden."}, {"schwere": "mittel", "folie": "Gesamt (Zeitplan)", "kategorie": "inhalt", "beschreibung": "Die Sollzeit der Hauptfolien beträgt 14:45 min bei 15 min Vortragszeit. Puffer: 15 s, obwohl es zwei Live-Momente gibt (Zurufe auf f01, Handzeichen-Umfrage mit 5 Optionen auf f08 in 70 s). Mit der optionalen f01b (+45 s) und dem dann aktiven Abgleich-Schritt auf f10 sind es über 15:30 min.", "vorschlag": "In den data-zeit-Attributen 45–60 s freimachen, z. B. f04 und f06 je 90 → 80 und f11 90 → 75. f01b nur einplanen, wenn dafür f08 auf die Analogie-Karten ohne Umfrage verkürzt wird. In der Probe die Umfrage mit Stoppuhr testen."}, {"schwere": "niedrig", "folie": "f10 (Schritt 9 „Abgleich“, nur mit Wortwolke)", "kategorie": "inhalt", "beschreibung": "Der Abgleich-Schritt (Image gegenüber Identität, „4 von 13 Ihrer Zurufe…“) schließt den Bogen zu f01b gut. Der Titel bleibt aber „stimmige Identität – bis auf zwei Lücken“, und die Kürzel-Legende im Fuß gehört zu Inhalten, die in diesem Schritt ausgeblendet sind.", "vorschlag": "Wie auf f08 einen Schritt-Titel nutzen, z. B. ein zweites `<h2 class=\"titel\" data-schritt=\"9\">` mit „Ihr Bild von HOLY trifft unseren Kern – teilweise“, und die Legende mit `#f10:has(.g6s-abgleich.schritt-an) .folie-fuss p:first-child{opacity:0}` ausblenden."}, {"schwere": "niedrig", "folie": "f02 → f03 (Übergang)", "kategorie": "animation", "beschreibung": "Beim Morph des großen Steuerrads in das Mini-Rad im Kopf (view-transition „steuerrad“) fliegt eine ca. 100 px große graue Scheibe etwa 150 ms lang über den neuen Titel („So●●nks“, Zwischenbild bei 160 ms).", "vorschlag": "In css/deck.css: `::view-transition-old(steuerrad){animation-duration:140ms}` und `::view-transition-new(steuerrad){animation-delay:220ms}`. Alternativ den Morph nur zwischen Folien mit Mini-Rad zulassen (data-morph auf f02 erst ab dem zweiten Wechsel setzen)."}, {"schwere": "niedrig", "folie": "f01 → f02 (Übergang)", "kategorie": "animation", "beschreibung": "Der gleichzeitige Crossfade von dunkler Titelfolie zu heller Inhaltsfolie erzeugt etwa bei 480 ms ein graues, doppelt belichtetes Zwischenbild: Der f02-Titel liegt geisterhaft über dem f01-Bild.", "vorschlag": "Beim Moduswechsel nacheinander statt gleichzeitig überblenden: JS setzt `html.wechsel-modus`, dazu `html.wechsel-modus::view-transition-old(folie){animation-duration:180ms}` und `html.wechsel-modus::view-transition-new(folie){animation-delay:160ms}`."}, {"schwere": "niedrig", "folie": "f08b, f10 (Zwischenschritte)", "kategorie": "animation", "beschreibung": "Leere Rahmen bleiben mehrere Schritte sichtbar. Auf f08b zeigt das Feld „Ins Steuerrad“ drei Überschriften ohne Inhalt, auf f10 steht neben „MARKENKERN“ sechs Schritte lang ein gestrichelter Leerkasten. Beides liest sich als „fehlt etwas“.", "vorschlag": "Die Überschriften erst mit ihrem Inhalt einblenden (data-schritt auf die jeweilige `<p class=\"karte-kicker\">` übertragen). Für f10: `#f10 .g6s-kern-wert:not(.schritt-an){border-color:transparent}`, damit der Platz frei bleibt, aber kein Rahmen zu sehen ist."}, {"schwere": "niedrig", "folie": "f05, f04, f03, f08, f08b (kursive Fraunces)", "kategorie": "lesbarkeit", "beschreibung": "Die eingesetzte Fraunces-Datei (nur opsz-Achse) nutzt in der Kursiven die „wonky“-Formen (b, h, k, l). „Abenteuer/Thrill“, „Kontrolle“ und „Ohne Zucker…“ lesen sich auf Distanz unruhig, das b ähnelt einer 6. Vermutung aus Modellwissen: Die Ersetzung hängt an WONK bzw. opsz; vor dem Umbau prüfen.", "vorschlag": "Die Dateien fraunces-latin-full-italic.woff2 und fraunces-latin-ext-full-italic.woff2 (vorhanden in @fontsource-variable/fraunces, OFL) statt der opsz-Varianten einbinden und für Kursive `font-variation-settings:\"opsz\" var(--opsz-titel),\"WONK\" 0` setzen. Alternativ für kursive Beschriftungen unter 40 px `\"opsz\" 14`."}, {"schwere": "niedrig", "folie": "f02, b4, b7", "kategorie": "technik", "beschreibung": "Die kursive Inter wird vom Browser schräggestellt („Attribute als Startpunkte“, Zeitschriftentitel in B7, Ø-W-Spalte in B4), weil nur der Normalschnitt geladen ist.", "vorschlag": "In css/tokens.css zwei @font-face-Regeln für „Inter Deck“ mit `font-style: italic` ergänzen (inter-latin-opsz-italic.woff2 und inter-latin-ext-opsz-italic.woff2 aus @fontsource-variable/inter, OFL) und nach schriften/ kopieren."}, {"schwere": "niedrig", "folie": "f02 (Schritt 1)", "kategorie": "gestaltung", "beschreibung": "Im gelben Kern steht „Wer bin ich?“ unter „Marken-kompetenz“ und berührt den Kernring. leitfragenPassen() prüft den Kern ausdrücklich nicht (.sr-label--kern ist ausgenommen).", "vorschlag": "`.sr-label--kern .sr-label-frage{font-size:.82em;margin-top:2px}` oder die Kernfrage nur in der Desk-Research-Pille zeigen (`.sr-label--kern .sr-label-frage{display:none}`)."}, {"schwere": "niedrig", "folie": "f02 (Titel)", "kategorie": "konsistenz", "beschreibung": "Der Titel von f02 ist 56 px groß (--groesse-titel-klein, wie bei den Backups), alle übrigen Inhaltsfolien haben 72 px. In der Übersicht wirkt die Agenda-Folie deshalb leiser als die Methodenfolien.", "vorschlag": "In css/folien/02-vorgehen.css `#f02 .titel{font-size:64px}` setzen und Platz über `#f02 .g1-ausgangslage{margin-top:var(--abstand-2)}` zurückholen, oder die Ausgangslage-Zeile in die Notizen verschieben und 72 px nutzen."}, {"schwere": "niedrig", "folie": "f06", "kategorie": "lesbarkeit", "beschreibung": "Die Kopfzeile „NENNUNGEN GESAMT 1 2 3 4 5 6 7“ verbindet zwei verschiedene Skalen: Die Zahlen 1–7 gehören zum Profil, die Überschrift zur linken Spalte. Die Legende ist zweigeteilt (Linien links, „⊢ Vorsprung“ rechts über dem Panel).", "vorschlag": "Die Zahlen mit einer eigenen Kopfzeile versehen (`<text class=\"rg-kopf-text\">Bewertung 1–7</text>` über dem Gitter, „Nennungen“ über der linken Spalte). Den Vorsprung-Eintrag in .rg-legende neben „HOLY“ setzen. Optional Ideal- und Wettbewerberlinie im Endzustand auf `opacity:.6`, damit HOLY und die drei Attribute dominieren."}, {"schwere": "niedrig", "folie": "B1 bzw. f06, f07, f08, B2, B4, B5", "kategorie": "konsistenz", "beschreibung": "B1 zeigt „Simulation mit [N] echten Kurzinterviews abgleichen“ als Platzhalter. Fünf andere Folien nennen bereits „3 echte Kurzinterviews“ bzw. n = 8 (5 + 3).", "vorschlag": "Entweder [N] durch „3“ ersetzen (die Klasse .bk-ergaenzen entfernen) oder überall einheitlich „[N]“ bzw. „geplant: 3“ schreiben, damit die Zahl über das Deck konsistent ist."}, {"schwere": "niedrig", "folie": "f09b → f10 → f11", "kategorie": "konsistenz", "beschreibung": "Die Ampellogik wechselt. „Zur Persona“ ist auf f09b braun „TEILWEISE“, derselbe Befund ist auf f10/f11 rot als „Lücke 2“, also genauso rot wie der schwerere „Bruch“. Rot steht außerdem auf f05 für die neutrale Limbic-Kategorie „Dominanz“.", "vorschlag": "Lücken einheitlich in var(--f-warnung) (Braun-Orange), nur „Bruch“ in var(--f-fehler): `#f10 .g6s-luecke-kopf{color:var(--f-warnung)}` und `.chip--luecke{--chip-farbe:var(--f-warnung)}` auf f11. Den Dominanz-Punkt auf f05 in einem Nicht-Signalton (z. B. var(--f-text-2) oder ein gedecktes Rosé) setzen."}, {"schwere": "niedrig", "folie": "f11 / PDF-Export", "kategorie": "dokumentation", "beschreibung": "Die Erläuterungszeilen der Empfehlungen 1 und 2 („160 mg und „18+“ vorn drauf…“, „Creator aus Pflege…“) erscheinen nur im eigenen Schritt und fehlen im Endzustand, also auch im PDF-Handout.", "vorschlag": "Im Druck bzw. in der Aufnahme alle Unterzeilen zeigen: `@media print{#f11 .g6f-unterzeile{display:block!important;opacity:1!important}}` sowie dieselbe Regel für `html.aufnahme`."}, {"schwere": "niedrig", "folie": "alle (unten rechts)", "kategorie": "interaktion", "beschreibung": "Nach jeder Mausbewegung oder jedem Klick verdeckt die Bedienleiste 2,5 s lang das Ende der Quellenzeile (f02: „Dossier ✔ [4, 8, 22, 25]“) bzw. den Bildnachweis auf f01. Beim Weiterklicken mit der Maus passiert das bei jedem Schritt.", "vorschlag": "In js/deck.js aufwachen() nur auslösen, wenn die Maus im unteren rechten Bereich ist: `if (e && e.clientY < innerHeight - 160) return;` für mousemove. Für mousedown die Leiste gar nicht wecken."}, {"schwere": "niedrig", "folie": "Übersicht (Taste O)", "kategorie": "interaktion", "beschreibung": "Wird die Übersicht ab Folie 05 geöffnet, scrollt sie so weit, dass die Überschrift „Übersicht“ oben abgeschnitten ist. Das wirkt in der Fragerunde, für die f12 die Taste O ausdrücklich anbietet, unsauber.", "vorschlag": "Beim Öffnen `aktiveKachel.scrollIntoView({block:'center'})` statt 'start' verwenden oder `.uebersicht-kachel{scroll-margin-top:200px}` setzen."}, {"schwere": "niedrig", "folie": "Dunkelmodus (f04, f08, f08b, f09b, f10)", "kategorie": "gestaltung", "beschreibung": "Weiche und Akzent-Flächen werden im Dunkelmodus zu einem satten Olivbraun (--f-weich-flaeche: 26 % Primärfarbe, --f-akzent-flaeche: 22 %). Große Karten wie auf f08 wirken dadurch schwer und khakifarben. Kontraste bestehen aber durchgehend.", "vorschlag": "In css/tokens.css (Editorial, dunkel): `--f-akzent-flaeche: color-mix(in oklab, var(--marke-primaer) 12%, #1B1C1F)` und `--f-weich-flaeche: color-mix(in oklab, var(--marke-primaer) 15%, #1E1F22)`, dazu für Karten `box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--marke-primaer) 30%, transparent)`."}, {"schwere": "niedrig", "folie": "Titel aller Folien (Markenname)", "kategorie": "gestaltung", "beschreibung": "„HOLY“ ist in allen Titeln braun-kursiv gesetzt. Braun ist kein HOLY-Ton (laut f09b #FFD007 und #1D1D1B). Das Gelb erscheint nur im Kern und in den Werte-Pillen. Das wirkt seriös, ist aber weit von der frechen Gelb-Schwarz-Marke entfernt.", "vorschlag": "Markenname schwarz mit gelbem Textmarker statt Braun: `.titel [data-marke]{color:var(--f-text);background:linear-gradient(transparent 62%, var(--marke-primaer) 62% 92%, transparent 92%);font-style:italic}`. Das hält den Kontrast ein und ist markentreu."}]
// Befunde aus der Live-Prüfung von Account 1 (Übergabe Ü02, ki-nachweis/uebergaben/2026-10-16_account-2_befunde-live-pruefung.md),
// wörtlich übernommen; ebenso die Liste der master-Änderungen, die erhalten bleiben müssen.
const U02_BEFUNDE = "1. (mittel) Referentenansicht: Der Sprechtext scrollt nicht zum aktuellen Schritt. In js/deck.js, referentAktualisieren() (ca. Z. 2306–2316) wird beim Folienwechsel scrollTop = 0 gesetzt, danach nur ist-erreicht/ist-jetzt umgeschaltet. Bei 1440×900 (Standardgröße des Popups) ist der aktuelle Absatz in 46 von 63 Zuständen nicht sichtbar, bei 1920×1080 in 31 von 63 (z. B. f07.3, f10.8, f02.7). Vorschlag: nach dem Umschalten den Absatz mit .ist-jetzt in den Blick holen (scrollTo bzw. scrollIntoView mit block: 'start', behavior: 'smooth') und mit A−/A+ prüfen.\n2. (mittel) Handy hochkant (390×844): Die Bedienleiste (css/deck.css ab ca. Z. 436, .bedienleiste) ist breiter als der Bildschirm; „Zurück“ und Teile von „Weiter“ und der Foliennummer liegen außerhalb. Vorschlag: @media (max-width: 560px) Leiste begrenzen (max-width: calc(100vw - 32px), flex-wrap) oder Nebenknöpfe (Farbwähler, Thema, Referent, Vollbild) ausblenden; in der Hilfe (H) „Touch: nach links wischen = weiter, nach rechts = zurück“ ergänzen; im Hochformat einen kleinen Hinweis „Gerät quer halten“ (@media (orientation: portrait) and (max-width: 600px)).\n3. (niedrig) Folie 08, Schritt 0–1 (Umfrage sichtbar): Ziffern zählen Stimmen und gehen zugleich in den Sprungpuffer. „1“ „0“ Enter zählt eine Stimme für Option 1 und meldet „Folie 0 gibt es nicht“ – jeder Sprungversuch verfälscht das Live-Ergebnis. Vorschlag: mindestens in LIESMICH und Hilfe darauf hinweisen; besser Ziffern nur zählen, wenn kein Sprungpuffer läuft, bzw. Zählmodus ausdrücklich aktivieren.\n4. (niedrig) Touch-Ziele: Knöpfe der Bedienleiste 36×36 px; optional @media (pointer: coarse) auf 44×44 px.\n5. (mittel) Einordnung auf den Folien: Wer direkt auf eine Folie oder das PDF kommt, sieht Wertungen über HOLY ohne Hinweis, dass es eine studentische Arbeit ist. Vorschlag: auf Folie 01 (Titelzustand) und/oder Folie 12 eine kleine Zeile, z. B. „Studentische Fallstudie, Hochschule Kaiserslautern · keine Verbindung zur HOLY Softdrinks GmbH“ (Metagröße, nicht im Wortbudget).\n6. Danach Export erneuern: export/praesentation.pdf, export/uebersicht.png und export/folien/*.png (Folie 09b zeigt jetzt das Logo statt des Platzhalters)."
const U02_ERHALTEN = "   - bilder/holy-logo-wortmarke.png und bilder/holy-logo-oval.png (offizielle Logos von de.holy.com, Abruf 16.10.2026); marke.js → logo zeigt jetzt auf die Wortmarke (Folie 09b); QUELLEN.md Abschnitt 4 entsprechend; Quellenzeile von f09b beginnt mit „Logo © HOLY Softdrinks GmbH, de.holy.com (Abruf 16.10.2026)“; alt-Text in js/folien/09-kommunikationsanalyse.js auf „Logo der Marke“ geändert.\n   - In praesentation/index.html und _entwuerfe/richtung-*/muster.html: <meta name=\"robots\" content=\"noindex, nofollow\">; in praesentation/index.html zusätzlich ein Favicon als data-URI (behebt die einzige 404-Meldung in der Konsole).\n   - Neu im Hauptverzeichnis: index.html (Startseite der Webseite) und .nojekyll."
const EXPORTE = `export/praesentation.pdf (Druckmodus, alle Folien inkl. Backup), export/uebersicht.png (Kontaktbogen aller Folien im Endzustand), export/folien/<id>.png (jede Folie im Endzustand, 1600 px breit)`

phase('Nacharbeit')
const nacharbeit = await agent(`${REGELN}

Aufgabe: Setze die folgenden Befunde der Abschlussprüfung und der Live-Prüfung in der Web-Präsentation ${P} um (du darfst alle Dateien in ${P} ändern; index.html ist die Quelle der Folieninhalte). Diese ${RESTBEFUNDE.length} Befunde waren im Auftrag des vorherigen Feinschliffs wegen einer Längenbegrenzung abgeschnitten und sind deshalb noch nicht bearbeitet. Prüfe bei jedem Befund zuerst am aktuellen Stand, ob er inzwischen schon erledigt ist (dann unter behoben mit Vermerk „bereits erledigt“).
Befunde (vollständig): ${JSON.stringify(RESTBEFUNDE)}
Zusätzlich die Befunde aus der Live-Prüfung der Webseite durch Account 1 (Übergabe Ü02, wörtlich):
${U02_BEFUNDE}
Diese Änderungen von master sind bereits in deinem Stand enthalten und dürfen NICHT zurückgedreht werden (Ü02, wörtlich):
${U02_ERHALTEN}
Passe LIESMICH.md an diesen Stand an (das Logo auf Folie 09b ist jetzt die offizielle Wortmarke, kein Platzhalter mehr). Folie 04 (Persona) inhaltlich nicht umbauen – die Gruppe ersetzt die Inhalte selbst (Grundlage: ${FS}/persona-daten.md, ${FS}/persona-steckbrief.md).
Priorität: hoch → mittel → niedrig (niedrige nur, wenn eindeutig und risikoarm). Keine Inhalte erfinden; Fakten über HOLY nur aus dem Dossier ${FS}/recherche/holy-recherche.md. Danach vollständig prüfen (werkzeuge/pruefen.mjs mit --schritte, hell und dunkel, Druck; Interaktionen stichprobenartig mit Playwright), geänderte Screenshots ansehen und die Exporte aktualisieren (${EXPORTE}). Entferne alle Testordner (_test, _abschluss-test, _abschluss-gestaltung), falls vorhanden. Aktualisiere LIESMICH.md, QUELLEN.md und AUTOREN.md, falls sich etwas geändert hat.
Rückgabe: behoben, nicht behoben (mit Grund), Dateien, Screenshot-Pfade, Prüfbericht, Quellen.`, { label: 'Nacharbeit: abgeschnittene Befunde', phase: 'Nacharbeit', schema: FIX_SCHEMA })
if (!nacharbeit) throw new Error('Nacharbeit nicht fertig – mit resume fortsetzen')

phase('Zweite Abschlussprüfung')
const anforderungenPrompt = `${REGELN}

Aufgabe: Prüfe die fertige Web-Präsentation in ${P} streng gegen alle Anforderungen. Ändere keine Projektdateien (eigene Testskripte nur im Ordner ${P}/_abschluss-test/, den du am Ende wieder löschst).
Anforderungen des Nutzers: „Woran du schon mal arbeiten kannst ist am Layout der Folien ich möchte sie modern Designt haben mit Animation und die Präsentation soll einen Interaktiven Touch haben“. Entscheidungen: Web-Präsentation im Browser; interaktiv: Live-Umfrage per QR-Code, klickbare Navigation, Einstieg mit Publikum; Farben jetzt neutral, später Markenfarben (über marke.js tauschbar).
Weitere Anforderungen: offline per file:// lauffähig (keine externen Anfragen), Referentenansicht mit Notizen und Uhren, Druck/PDF, Zeitplan 14:45, alle Folien laut Ablaufplan vorhanden, Folieninhalte passen zur Aufgabe und zu den Methoden (${FS}/README.md, ${FS}/methoden.md, ${FS}/folienentwuerfe.md), Platzhalter statt erfundener Markenfakten, Beispieldaten gekennzeichnet, Texte deutsch und fehlerfrei, Lesbarkeit (≥ 28 px Fließtext), Bewertungskriterien Visualisierung und Vermittlung bedient, LIESMICH.md und QUELLEN.md vollständig und korrekt, marke.js verständlich.
Ablaufplan:
${FOLIENPLAN}
Teste selbst mit Playwright: Tastaturnavigation durch alle Folien und Schritte (vor und zurück), Übersicht, Referentenansicht (zweites Fenster, Synchronisation in beide Richtungen), Umfrage (zählen, Wert eintragen, zurücksetzen, Auflösung), Wortwolke (Wörter eintippen, ohne dass die Navigation reagiert; Anzeige auf späterer Folie), Steuerrad-Klicks springen zur richtigen Folie, Mini-Navigator, Druck-PDF, reduzierte Bewegung, Thema und Modus wechseln, Farbtausch über marke.js (teste mit einer Kopie in ${P}/_abschluss-test/), Konsolenfehler, externe Anfragen.
Rückgabe: Befunde (Schwere, Folie, Kategorie, Beschreibung, Vorschlag), was erfüllt ist, Gesamturteil.`


const faktenPrompt = `${REGELN}

Aufgabe: Zweite, unabhängige Abschlussprüfung der fertigen Web-Präsentation in ${P} mit Schwerpunkt Inhalt und Fakten. Ändere keine Projektdateien (eigene Testskripte nur im Ordner ${P}/_abschluss-fakten/, den du am Ende wieder löschst).
Prüfe vollständig, Folie für Folie (alle Haupt- und Backup-Folien, sichtbarer Text, Daten-JSON und Sprechtext in .notizen, LIESMICH.md und QUELLEN.md):
1. Jede Aussage, Zahl, Jahreszahl und jedes Zitat über HOLY, Wettbewerber oder Marktdaten gegen das Recherche-Dossier ${FS}/recherche/holy-recherche.md: steht es dort, stimmt der Wert, ist die Quelle bzw. der Faktenstatus richtig angegeben? Angaben mit „~ unsicher“ müssen gekennzeichnet sein, „✗ verworfen“ darf nicht vorkommen, „H“ (Hypothese) muss als Hypothese erkennbar sein, Selbstauskünfte als Selbstauskunft.
2. Beispieldaten: Sind alle nicht belegten Werte (Repertory Grid, Laddering, Umfrage, Analogien, Kennzahlen der Kommunikationsanalyse …) sichtbar als Beispieldaten gekennzeichnet? Passen die Beispieldaten folienübergreifend zusammen (f06 ↔ B4, f07 ↔ B5, f08/f08b ↔ marke.js, f09/f09b ↔ B6, f10 ↔ f03–f09, f11 ↔ f10)?
3. Modellbegriffe (Esch, Häusel, Kelly, Gutman, Reynolds & Gutman, Aaker, Kroeber-Riel) fachlich korrekt und einheitlich; Unsicherheiten als „mit Vorlesung abgleichen“ markiert.
4. Rechtschreibung, Grammatik, Umlaute, einheitliche Anrede (Sie), einheitliche Schreibweisen (HOLY, Markensteuerrad, Brand Persona …).
5. Roter Faden: Titel als Kernaussage, die Folie belegt sie; Ableitungskette Persona → Repertory Grid → Laddering → Analogien → Kommunikationsanalyse → Steuerrad → Empfehlungen ohne Widersprüche.
Aufgabe der Gruppe laut Folie: ${AUFGABE}
Ablaufplan:
${FOLIENPLAN}
Rückgabe: Befunde (Schwere, Folie, Kategorie, Beschreibung, präziser Vorschlag), was erfüllt ist, Gesamturteil.`

const [anforderungen, fakten] = await parallel([
  () => agent(anforderungenPrompt, { label: 'Zweite Prüfung: Anforderungen', phase: 'Zweite Abschlussprüfung', schema: KRITIK_SCHEMA }),
  () => agent(faktenPrompt, { label: 'Zweite Prüfung: Inhalt & Fakten', phase: 'Zweite Abschlussprüfung', schema: KRITIK_SCHEMA }),
])
if (!anforderungen || !fakten) throw new Error('Zweite Abschlussprüfung unvollständig – mit resume fortsetzen')
const befunde = [...(anforderungen.befunde || []), ...(fakten.befunde || [])]
log(`Zweite Abschlussprüfung: ${befunde.length} Befunde, davon ${befunde.filter(b => b.schwere !== 'niedrig').length} hoch/mittel`)

let feinschliff = null
if (befunde.length) {
  phase('Letzter Feinschliff')
  feinschliff = await agent(`${REGELN}

Aufgabe: Setze die Befunde der zweiten Abschlussprüfung in der Web-Präsentation ${P} um (du darfst alle Dateien in ${P} ändern; index.html ist die Quelle der Folieninhalte).
Befunde (vollständig, ${befunde.length} Stück): ${JSON.stringify(befunde)}
Priorität: hoch → mittel → niedrig (niedrige nur, wenn eindeutig und risikoarm). Keine Inhalte erfinden; Fakten über HOLY nur aus dem Dossier ${FS}/recherche/holy-recherche.md; was nur die Gruppe liefern kann, unter nicht behoben mit Grund und in der Checkliste in LIESMICH.md. Danach vollständig prüfen (werkzeuge/pruefen.mjs mit --schritte, hell und dunkel, Druck; Interaktionen stichprobenartig mit Playwright), geänderte Screenshots ansehen und die Exporte aktualisieren (${EXPORTE}). Entferne alle Testordner (_test, _abschluss-test, _abschluss-gestaltung, _abschluss-fakten), falls vorhanden. Aktualisiere LIESMICH.md, QUELLEN.md und AUTOREN.md, falls sich etwas geändert hat.
Rückgabe: behoben, nicht behoben (mit Grund), Dateien, Screenshot-Pfade, Prüfbericht, Quellen.`, { label: 'Letzter Feinschliff', phase: 'Letzter Feinschliff', schema: FIX_SCHEMA })
  if (!feinschliff) throw new Error('Letzter Feinschliff nicht fertig – mit resume fortsetzen')
}

return { nacharbeit, zweite_pruefung: { anforderungen, fakten }, feinschliff }
