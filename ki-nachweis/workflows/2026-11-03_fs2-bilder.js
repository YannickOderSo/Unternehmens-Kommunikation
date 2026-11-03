export const meta = {
  name: 'fs2-bilder',
  description: 'HOLY-Bilder und Screenshots beschaffen, auswählen, intern in Präsentation und Konzept-Webseite einbauen, abnehmen',
  phases: [
    { title: 'Beschaffen', detail: 'Produkt- und Bildwelt, Touchpoint-Screenshots, Vorbilder' },
    { title: 'Auswahl', detail: 'je Bildplatz das beste Motiv, Zuschnitt, intern/bilder.js' },
    { title: 'Einbau', detail: 'Präsentation und Konzept-Webseite, beide Fassungen prüfen' },
    { title: 'Abnahme', detail: 'Aussehen, Ehrlichkeit, Technik – nur lesend' },
  ],
}

const SCRATCH = '/tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad'

const GEMEINSAM = `PROJEKT: Studentische Fallstudie 2 (Customer Journey) zur Marke HOLY, Gruppe Heisler/Knauber/Welker, HS Kaiserslautern, Modul Unternehmenskommunikation (Prof. Dr. Daniel Stenger), Vortrag Di 10.11.2026. Repository: /home/user/Unternehmens-Kommunikation (alle Pfade relativ dazu). Ordner: fallstudie-2-customer-journey/praesentation/ (Web-Präsentation mit der Engine aus FS1, Thema „Pfad“; Bildkacheln .p-kachel mit data-status offen/frei/rueckfall, siehe js/folien/pfad.js und css/folien/pfad.css; Gestaltungsplan: fallstudie-2-customer-journey/gestaltungsplan.md) und fallstudie-2-customer-journey/konzept-website/ (7 Seiten: Konzept einer verbesserten HOLY-Webseite = Mockups zu Aufgabe A7; fester Hinweisbalken „Studentisches Konzept … keine Website der HOLY Softdrinks GmbH · keine Bestellung möglich“, noindex). Persona Marco (fiktiv): 28, Lagerarbeiter im Drei-Schicht-Betrieb, entdeckt HOLY in Creator-Videos, sucht selbst, kauft online die 50er-Dose auf Vorrat, nutzt SQUAD Rewards.

AUFTRAG VON YANNICK (03.11.2026, wörtlich): „Lade dir die Grafiken online runter die du brauchst von Holy die Webseite und die Präsentation muss gut aussehen rechte sind nicht wichtig wir nutzen es weder kommerziell noch öffentlich nur privat in der uni“.

ÖFFENTLICH VS. INTERN (Pflicht): Repository und GitHub Pages sind öffentlich. Damit die Bilder wie gewünscht nur privat in der Uni genutzt werden, liegen heruntergeladene Bilder und Screenshots von HOLY oder Dritten NUR in fallstudie-2-customer-journey/praesentation/intern/ bzw. fallstudie-2-customer-journey/konzept-website/intern/ (beide per .gitignore ausgeschlossen – mit git check-ignore -v prüfen). Niemals in bilder/, _vorschau/, export/ oder andere versionierte Ordner. Nichts committen, nichts pushen.
Die Datei fallstudie-2-customer-journey/praesentation/intern/gruender-video.mp4 nicht öffnen, nicht ansehen, nicht verschieben. Den Ordner fallstudie-1-brand-persona/ nicht ändern. Keine Dateien unter /root/.claude/uploads lesen. Keine Namen von KI-Modellen in Dateien schreiben.

NETZ: HTTPS läuft über einen Proxy (Umgebungsvariable HTTPS_PROXY); curl funktioniert direkt. Playwright: PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core, im Skript const { chromium } = await import(process.env.PLAYWRIGHT_CORE + '/index.mjs'); chromium.launch({ proxy: { server: process.env.HTTPS_PROXY } }); Kontext mit ignoreHTTPSErrors: true und locale 'de-DE'. Mobil: viewport 390 × 844, deviceScaleFactor 2, iPhone-User-Agent. Cookie-Banner dürfen weggeklickt werden (ablehnen bevorzugt). Keine Konten anlegen, nicht einloggen, keine Formulare mit Daten absenden, keinen Checkout starten, nichts kaufen. Eigene Hilfsskripte ins Scratchpad ${SCRATCH}/bilder-d06/ (nicht ins Repository, außer wo ausdrücklich verlangt).

EHRLICHKEIT: Jedes Bild bekommt eine wahre Beschreibung und Herkunft (URL, Abrufdatum 03.11.2026). HOLY-Werbebilder nie als eigene Fotos der Gruppe ausgeben; Screenshots nur von echten Seiten, nicht nachbauen oder verfälschen. Quellen angeben.`

const DATEI_SCHEMA = {
  type: 'object',
  properties: {
    dateien: { type: 'array', items: { type: 'object', properties: {
      datei: { type: 'string' }, quelle_url: { type: 'string' }, seite: { type: 'string' }, art: { type: 'string' },
      inhalt: { type: 'string' }, breite: { type: 'number' }, hoehe: { type: 'number' }, vorschlag: { type: 'string' } },
      required: ['datei', 'quelle_url', 'art', 'inhalt'] } },
    nicht_gefunden: { type: 'array', items: { type: 'string' } },
    hinweise: { type: 'string' },
  },
  required: ['dateien', 'nicht_gefunden', 'hinweise'],
}

const MANIFEST = `Lege in jedem Unterordner eine manifest.json an (Liste mit datei, quelle_url, seite, art, inhalt, breite, hoehe, vorschlag). Gib alle brauchbaren Dateien zurück: datei = Pfad relativ zum Repository; quelle_url = direkte Bild- oder Seiten-URL; seite = Seite, auf der es zu sehen ist; art = packshot | lifestyle | grafik | handel | screenshot | logo; inhalt = was genau zu sehen ist; vorschlag = wofür es sich in Präsentation oder Webseite eignet. Sieh dir die wichtigsten Kandidaten mit dem Read-Werkzeug an, bevor du sie empfiehlst (unscharfe, abgeschnittene oder von Bannern verdeckte Bilder aussortieren). Unter nicht_gefunden: was du gesucht und nicht bekommen hast, mit Grund.`

const AUFTRAG_PRODUKT = `${GEMEINSAM}

DEINE AUFGABE (Beschaffer 1: Produkt- und Bildwelt): Lade die Produkt- und Bildwelt von HOLY herunter nach fallstudie-2-customer-journey/praesentation/intern/roh/produkt/ (Unterordner frei).
Quellen: Shopify-JSON des deutschen Shops (z. B. https://de.holy.com/products/raspberry-raptor.js, https://de.holy.com/products.json?limit=250, Kollektionen /collections/<name>/products.json) mit den Medien-URLs (cdn.shopify.com) in Originalgröße; Startseite und Kollektionsseiten (Hero- und Bannerbilder, Lifestyle); das Press Kit (frühere Kopie: ${SCRATCH}/presskit/presskit.pdf und pk-*.png – Bilder daraus extrahieren, z. B. mit pdfimages oder PyMuPDF, falls vorhanden; sonst Seiten als Bild); Handel: Bilder oder Shop-Seiten, die HOLY im Regal, an einem Display oder in Handels-Onlineshops zeigen (dm, Rewe, Edeka, Kaufland, Amazon – per Websuche finden).
Gebraucht werden vor allem: (1) Packshots Energy Raspberry Raptor (50er-Dose, 10er-Dose, Sachet/Probierportion, Sachet-Box), Starter Set Energy, Shaker/Bottle, Versandkarton bzw. Unboxing; (2) Lifestyle-Bilder (Menschen mit Shaker im Alltag, bei der Arbeit, beim Sport) – eines groß für die Titelfolie (Platz rechts ca. 800 × 780, fast quadratisch) und eines als Symbolbild für die Persona-Folie (Alltag eines 28-jährigen Lagerarbeiters „vor der Schicht“; es ist ein Symbolbild aus HOLYs Bildwelt, nicht Marco); (3) Bilder aus der SQUAD-Rewards-Welt (Grafiken, Level); (4) Handel/Regal/Display.
Größe: Originale bis höchstens 2400 px Kantenlänge behalten (größere mit PIL verkleinern), keine Datei über 4 MB, insgesamt höchstens ca. 150 Dateien.
${MANIFEST}`

const AUFTRAG_TOUCHPOINTS = `${GEMEINSAM}

DEINE AUFGABE (Beschaffer 2: Screenshots der Touchpoints): Mach echte Screenshots der Stationen auf Marcos zentralem Weg (IST) nach fallstudie-2-customer-journey/praesentation/intern/roh/touchpoints/. Lies zur Orientierung im Gestaltungsplan Abschnitt 4 (Bildplan b05–b11, b19, b20) und 6 (Journey-Map, Stationen K1–K6, Überleitungen Ü1–Ü4).
Je Station mobil (390 × 844, deviceScaleFactor 2) und, wo sinnvoll, Desktop (1440 × 900):
- K1 Creator-Video mit Code: echtes Video eines Creators mit HOLY-Rabattcode (YouTube; per Websuche finden, z. B. „HOLY Energy Code Rabatt“ oder „HOLY Energy Werbung Creator“): Screenshot der Videoseite und hochauflösendes Vorschaubild (https://i.ytimg.com/vi/<id>/maxresdefault.jpg); dazu eine der Creator-Landingpages im HOLY-Shop (Dossier ✔ T02: 41 Kooperations-Landingpages; z. B. über Links in Videobeschreibungen oder Websuche finden).
- K2 eigene Suche: Trefferseiten für „holy energy koffein“ und „holy energy rabattcode“ (Google mit hl=de&gl=de; bei Captcha oder Sperre Bing oder DuckDuckGo – im Manifest genau angeben, welche Suchmaschine); der Help-Center-Artikel zu Koffein (https://help.de.weareholy.com/de-DE/wie-viel-koffein-enthalten-die-produkte-692203); die Produktseite mit dem Etikettbild (Koffein steht nur im Bild).
- K3 Produktseite/Starter Set: https://de.holy.com/products/raspberry-raptor und die Starter-Set-Seite (oben mit Bild und am Preis), Mix-&-Match-Hinweis, Lieferzeit-Angaben.
- Kauf: Warenkorb mit einem Produkt (nur über die Shop-Oberfläche bzw. /cart/add?id=…, ohne Checkout, ohne Eingaben).
- K6 SQUAD Rewards: Rewards-Seite(n) im Shop.
- Earned: Bewertungen (Trustpilot-Seite von HOLY; Bewertungen auf der Produktseite).
- Blog: https://de.holy.com/blogs/news (leer, „noch keine Beiträge“).
- Überleitungen (b20, für Backup B1/B4): je ein Screenshot an den Übergängen, wo Marco wechseln muss (Video → Suche, Suche → Help-Center auf alter Domain, Produktseite → Etikettbild, Warenkorb → Lieferzeit-Angaben).
Cookie-Banner vor dem Screenshot schließen (ablehnen). Keine Personen- oder Kontodaten im Bild. Prüfe jeden Screenshot mit Read: lesbar, kein Banner im Weg, kein Fehlerbildschirm.
${MANIFEST}`

const AUFTRAG_VORBILDER = `${GEMEINSAM}

DEINE AUFGABE (Beschaffer 3: Vorbilder aus anderen Branchen): Mach Screenshots der Best Practices aus dem Dossier (fallstudie-2-customer-journey/recherche-customer-journey.md, Kapitel 7a und Anhang B.1, Quellen [275]–[321]) nach fallstudie-2-customer-journey/praesentation/intern/roh/vorbilder/. Auf Folie 07 der Präsentation stehen je Phase: YouTube Shopping (X01, Produkt-Tag im Video führt direkt zum Produkt), Apple (X04, heikle Frage selbst als Text beantwortet), zooplus (X08, Grundpreis neben jedem Preis), OTTO (X12, Lieferzeit schon am Artikel), Philips (X14, Erinnerung nach Verbrauch – z. B. Bürstenkopf-Erinnerung), Pampers Club (X16, Code in der Packung). Für jedes Vorbild 1–2 Screenshots, die genau diese Mechanik zeigen (mobil oder Desktop, je nachdem, was sie besser zeigt; den aussagekräftigen Ausschnitt zusätzlich als Zuschnitt speichern). Dazu, wenn möglich, Logo oder Wortmarke jedes Vorbilds als kleine Datei (PNG/SVG). Optional für Backup B6 die übrigen X-Fälle (X02, X03, X05–X07, X09–X11, X13, X15, X17), je ein Screenshot. Cookie-Banner schließen.
${MANIFEST}`

const AUSWAHL_SCHEMA = {
  type: 'object',
  properties: {
    zuordnung: { type: 'array', items: { type: 'object', properties: {
      ziel: { type: 'string' }, schluessel: { type: 'string' }, datei: { type: 'string' }, platz: { type: 'string' },
      motiv: { type: 'string' }, nachweis: { type: 'string' }, pixel: { type: 'string' } },
      required: ['ziel', 'schluessel', 'datei', 'platz', 'motiv', 'nachweis'] } },
    offen: { type: 'array', items: { type: 'string' } },
    kontaktbogen: { type: 'array', items: { type: 'string' } },
    hinweise: { type: 'string' },
  },
  required: ['zuordnung', 'offen', 'kontaktbogen', 'hinweise'],
}

const BAU_SCHEMA = {
  type: 'object',
  properties: {
    dateien: { type: 'array', items: { type: 'string' } },
    erledigt: { type: 'string' },
    pruefungen: { type: 'string' },
    offen: { type: 'array', items: { type: 'string' } },
  },
  required: ['dateien', 'erledigt', 'pruefungen', 'offen'],
}

const ABNAHME_SCHEMA = {
  type: 'object',
  properties: {
    befunde: { type: 'array', items: { type: 'object', properties: {
      schwere: { type: 'string' }, datei: { type: 'string' }, stelle: { type: 'string' }, problem: { type: 'string' }, vorschlag: { type: 'string' } },
      required: ['schwere', 'datei', 'stelle', 'problem', 'vorschlag'] } },
    fazit: { type: 'string' },
  },
  required: ['befunde', 'fazit'],
}

phase('Beschaffen')
const beschafft = await parallel([
  () => agent(AUFTRAG_PRODUKT, { label: 'beschaffen:produkt-bildwelt', phase: 'Beschaffen', schema: DATEI_SCHEMA }),
  () => agent(AUFTRAG_TOUCHPOINTS, { label: 'beschaffen:touchpoints', phase: 'Beschaffen', schema: DATEI_SCHEMA }),
  () => agent(AUFTRAG_VORBILDER, { label: 'beschaffen:vorbilder', phase: 'Beschaffen', schema: DATEI_SCHEMA }),
])
const namen = ['produkt-bildwelt', 'touchpoints', 'vorbilder']
const kandidaten = beschafft.map((b, i) => b ? { beschaffer: namen[i], dateien: b.dateien, nicht_gefunden: b.nicht_gefunden, hinweise: b.hinweise } : { beschaffer: namen[i], ausgefallen: true })
log('Kandidaten: ' + kandidaten.map(k => k.beschaffer + ' ' + (k.dateien ? k.dateien.length : 'ausgefallen')).join(' · '))

phase('Auswahl')
const auswahl = await agent(`${GEMEINSAM}

DEINE AUFGABE (Auswahl und Zuschnitt): Wähle für jeden Bildplatz in Präsentation und Konzept-Webseite das beste Bild aus den Kandidaten der drei Beschaffer und bereite es auf.

BILDPLÄTZE PRÄSENTATION (gemessen bei 1920 × 1080; Format: Folie, Klasse, Kennung, Art, Größe in Folienpixeln, heutige Beschriftung):
${JSON.stringify(args.slots, null, 1)}
Die Persona-Kachel f02 .e2-foto ist erst nach Klick sichtbar und wurde mit 0 × 0 gemessen – miss sie selbst (index.html im Browser öffnen, Folie f02, Schritt 1; oder CSS css/folien/02-persona.css lesen). Zusätzlich Folie 07: je Vorbild-Zeile ein kleines Bild (ca. 160 × 90) und, falls vorhanden, ein Logo (Höhe ca. 32). Folie 08 (fünf Handyrahmen) bekommt seine internen Bildschirmfotos vom Website-Bau, nicht von dir.
Liefere Dateien in doppelter Pixelgröße des Platzes (Beamer, Schärfe), JPEG oder WebP Qualität ~85; PNG nur für Screenshots mit viel Text.

REGELN DER ZUORDNUNG: Die Kacheln K1–K6 auf 04, 05 und 09 zeigen dieselbe Station (gleiches Motiv, je Größe passend zugeschnitten): K1 Creator-Video mit Code, K2 eigene Suche, K3 Produktseite/Starter Set, K4 Regal (Handel, Nebenweg), K5 Unboxing/Lieferung, K6 SQUAD Rewards. Moodboard 03: je Kachel genau das genannte Motiv; „Blog 0 Beiträge“ als echter Screenshot von /blogs/news, falls vorhanden. Wo es kein ehrliches Motiv gibt (Workshop-Foto b12, Handskizze b15, „Tipp unter Kollegen“), bleibt der Platz offen – nicht mit Bildern füllen, die etwas anderes zeigen. Titelfolie f01: großes, starkes Bild (Produkt mit Shaker oder Lifestyle), Anschnitt rechts. Persona f02: Symbolbild aus HOLYs Bildwelt, im Nachweis „Symbolbild“.
ZUSCHNITT: Bei Screenshots den aussagekräftigen Ausschnitt wählen (bei 200 × 112 muss das Motiv erkennbar sein, z. B. Produktbild und Preis statt der ganzen Seite). Bei Fotos Motiv mittig, nichts Wichtiges abschneiden. Lieber ein klares Detail als eine unlesbare Gesamtansicht.

BILDPLÄTZE WEBSITE (fallstudie-2-customer-journey/konzept-website/): Lies die 7 HTML-Seiten und finde die Platzhalter (figure.platzhalter, eigene Zeichnungen, Teaser) und Stellen, an denen ein Produktbild die Seite deutlich verbessert: Produktseite (großes Produktbild, kleine Galerie mit 2–4 Bildern), Packungswahl (kleine Packshots je Packung: Starter Set, 50er, 10er, 1 Portion), Startseite (Teaser Starter Set, Bereich „aus dem Video“ – z. B. Produktbild statt Skizze, die Skizze darf bleiben), Warenkorb (Vorschaubild je Packung), Danke-Seite (Paket/Shaker), Squad-Seite (Rewards-Bild), Händlerseite (Regal/Handel), Koffein-Check (höchstens ein ruhiges Produktbild, kein Etikettbild als Ersatz für Text). Größen für mobil (390 px breit, 2× Pixeldichte), Produktbilder quadratisch.

AUSGABE: Präsentation nach fallstudie-2-customer-journey/praesentation/intern/bilder/, Website nach fallstudie-2-customer-journey/konzept-website/intern/bilder/. Lege in beiden intern/ eine Datei bilder.js an: window.INTERN_BILDER = { "<schluessel>": { "datei": "intern/bilder/<name>", "alt": "<Alternativtext>", "nachweis": "<z. B. Bild: HOLY Softdrinks GmbH (de.holy.com), Abruf 03.11.2026 | Screenshot de.holy.com, 03.11.2026>", "motiv": "<kurz>" }, … }; – Schlüssel sprechend und stabil, z. B. b01-titel, b04-persona, k1-creator, k2-suche, k3-produktseite, k4-regal, k5-unboxing, k6-squad (je Größe ein eigener Schlüssel mit Suffix, z. B. k3-produktseite-04 / -05 / -09, oder eine Datei, die für alle drei Größen gut zugeschnitten ist), m03-creator, m03-regal, …, v07-youtube, v07-apple …, web-produkt-hero, web-packung-50 usw. Prüfe mit git check-ignore -v, dass alle Dateien ignoriert sind. Erzeuge je einen Kontaktbogen (PNG) aller Endbilder mit Schlüssel: fallstudie-2-customer-journey/praesentation/intern/kontaktbogen.png und fallstudie-2-customer-journey/konzept-website/intern/kontaktbogen.png; sieh sie dir an und verbessere schwache Zuschnitte.
Gib die Zuordnung zurück (ziel = praesentation | website, schluessel, datei, platz = welcher Platz, motiv, nachweis, pixel) und unter offen, welche Plätze bewusst leer bleiben und warum.

KANDIDATEN DER BESCHAFFER:
${JSON.stringify(kandidaten, null, 1)}`, { label: 'auswahl', phase: 'Auswahl', schema: AUSWAHL_SCHEMA })

const zuordnungP = (auswahl && auswahl.zuordnung || []).filter(z => z.ziel === 'praesentation')
const zuordnungW = (auswahl && auswahl.zuordnung || []).filter(z => z.ziel === 'website')
log('Zuordnung: Präsentation ' + zuordnungP.length + ', Website ' + zuordnungW.length + ', offen ' + (auswahl ? auswahl.offen.length : '?'))

const AUFTRAG_BAU_P = `${GEMEINSAM}

DEINE AUFGABE (Einbau Präsentation): Baue die internen Bilder in die Präsentation fallstudie-2-customer-journey/praesentation/ ein. Lies vorher LIESMICH.md, AUTOREN.md, js/folien/pfad.js, css/folien/pfad.css, werkzeuge/pruefen.mjs (Kopf und Aufrufoptionen) und die Bildkacheln in index.html. Die Bilder und intern/bilder.js liegen bereit (Kontaktbogen: praesentation/intern/kontaktbogen.png).

ZUORDNUNG (aus dem Auswahl-Schritt):
${JSON.stringify(zuordnungP, null, 1)}
Bewusst offen: ${JSON.stringify(auswahl ? auswahl.offen : [])}

TECHNIK (Pflicht):
1. Lademechanismus: <script src="intern/bilder.js"></script> vor den Folien-Skripten einbinden. Kacheln und Bilder bekommen data-intern="<schluessel>". Ein kleines Skript (z. B. js/folien/intern-bilder.js oder in pfad.js, vor dem Engine-Start) setzt bei vorhandenem window.INTERN_BILDER ein <img> (mit alt, width/height) in die Kachel, setzt data-status="frei" und hängt den Nachweis an die Quellzeile der Folie bzw. ein Attribut an. Fehlt bilder.js (öffentliche Fassung, GitHub Pages), bleibt alles wie heute (Platzhalter/Rückfall), ohne kaputte Bild-Symbole. Prüfe, wie ?aufnahme, ?druck und ?kacheln=rueckfall mit internen Bildern umgehen sollen, und dokumentiere die Entscheidung (Exporte unter export/ und praesentation/bilder/ dürfen nie interne Bilder enthalten).
2. werkzeuge/pruefen.mjs: Fehlt intern/bilder.js, ist das eine Warnung („öffentliche Fassung ohne interne Bilder“), kein Fehler. Füge eine Option hinzu, die interne Dateien per Route sperrt (öffentliche Fassung prüfen), und prüfe in der internen Fassung: jedes data-intern hat einen Schlüssel in bilder.js, jedes Bild ist geladen (naturalWidth > 0), nicht verzerrt (object-fit oder passendes Seitenverhältnis). Aufruf heute: LIESMICH §8.
3. Folie 08: Setze data-intern="konzept-01" … "konzept-05" auf die fünf Bilder in den Handyrahmen. Die internen Dateien (Bildschirmfotos der Konzept-Webseite MIT Produktbildern) erzeugt der parallel laufende Website-Bau bzw. die Hauptsitzung unter praesentation/intern/bilder/konzept-0n-*.png und ergänzt die Schlüssel in bilder.js; fehlen sie, bleiben die öffentlichen Bilder aus praesentation/bilder/ stehen. Ergänze die fünf Schlüssel nicht selbst mit falschen Dateien.

GESTALTUNG: Die Präsentation soll mit den Bildern gut und professionell aussehen (Stengers Kritik an FS1: „oft sehr nüchtern“, „Produktabbildungen zeigen“). Du darfst Bildkacheln vergrößern oder Folien umbauen, wo es dem Bild nützt (z. B. Journey-Map 04 mit größeren Kacheln, Moodboard 03, Folie 07 je Zeile ein kleines Bild des Vorbilds, Titelfolie mit großem Bild), solange pruefen.mjs ohne Fehler läuft, Klicks und Sollzeiten gleich bleiben (23 Klicks, 710 s; LIESMICH §3) und Titel und Sprechtexte inhaltlich stimmen. Bildnachweise: eine kurze Quellzeile je Folie (z. B. „Bilder: HOLY (de.holy.com), Screenshots 03.11.2026“) – nur in der internen Fassung sichtbar, wenn Bilder geladen sind. Kachelbeschriftungen wie „offen: eigenes Foto“ passen nicht mehr, wo jetzt ein HOLY-Bild steht – anpassen; im Sprechtext nichts als eigenes Foto ausgeben (Selbstversuch und eigene Fotos sind weiter offen; die HOLY-Bilder zeigen die echten Touchpoints).
PRÜFEN: beide Fassungen (intern und öffentlich) mit pruefen.mjs --schritte (hell; intern zusätzlich --modus dunkel) bis 0 Fehler; Ausgaben nur nach praesentation/_test/. Sieh dir alle Hauptfolien 01–09 in der internen Fassung als Bildschirmfoto an (Endzustand jeder Folie) und korrigiere, was nicht gut aussieht (Zuschnitt, Schärfe, Lesbarkeit, Kontrast von Text auf Bildern). DOKU: LIESMICH.md (Abschnitt „Interne Fassung mit Bildern“: Ordner intern/ neben index.html, wie man zeigt, wie man prüft; öffentliche Fassung), QUELLEN.md (interne Bilder mit Herkunft; die Dateien selbst bleiben außerhalb des Repositorys), AUTOREN.md (neuer Abschnitt). Nichts committen. Gib geänderte Dateien, Erledigtes, Prüfergebnisse und Offenes zurück.`

const AUFTRAG_BAU_W = `${GEMEINSAM}

DEINE AUFGABE (Einbau Konzept-Webseite): Baue die internen Bilder in die Konzept-Webseite fallstudie-2-customer-journey/konzept-website/ ein. Lies vorher README.md, assets/konzept.js, assets/konzept.css, werkzeuge/pruefen.mjs und werkzeuge/folie08-bilder.mjs. Die Bilder und intern/bilder.js liegen bereit (Kontaktbogen: konzept-website/intern/kontaktbogen.png).

ZUORDNUNG (aus dem Auswahl-Schritt):
${JSON.stringify(zuordnungW, null, 1)}

TECHNIK (Pflicht): <script src="intern/bilder.js"></script> vor assets/konzept.js. Elemente mit data-intern="<schluessel>" bekommen bei vorhandenem window.INTERN_BILDER ein <img> (mit width/height, alt; loading="lazy" außer im ersten Bildschirm), sonst bleibt die heutige Platzhalterfläche bzw. Zeichnung – ohne kaputte Bild-Symbole. Hinweisbalken (fest, wörtlich), noindex, keine Formulare, keine externen Anfragen und die Rechnungen bleiben unverändert. werkzeuge/pruefen.mjs: Bilder aus intern/ erlaubt (die Prüfung „keine img außer Wortmarke“ entsprechend anpassen); fehlt intern/bilder.js → Warnung statt Fehler; Optionen für interne und öffentliche Fassung; _vorschau/ wird IMMER in der öffentlichen Fassung erzeugt (interne Dateien per Route sperren), damit nie HOLY-Fotos ins Repository kommen; interne Bildschirmfotos nach konzept-website/intern/vorschau/. Bildnachweis im Fuß jeder Seite: in der internen Fassung zusätzlich „Produktbilder und Screenshots: HOLY Softdrinks GmbH (de.holy.com), Abruf 03.11.2026 – nur intern für die Lehrveranstaltung“ (per Skript nur anzeigen, wenn Bilder geladen sind).
FOLIE 08 DER PRÄSENTATION: Erweitere werkzeuge/folie08-bilder.mjs um einen Schalter --intern: dann mit internen Bildern und Ausgabe nach fallstudie-2-customer-journey/praesentation/intern/bilder/konzept-01-landingpage.png … konzept-05-danke.png (gleiche Ausschnitte wie heute: Produktseite mit gewählter 50er-Dose ab „Packung wählen“, Danke-Seite ab „So geht's weiter“); ohne Schalter weiter öffentlich (intern/ gesperrt) nach praesentation/bilder/. Führe am Ende beide Modi aus und ergänze in fallstudie-2-customer-journey/praesentation/intern/bilder.js die Schlüssel konzept-01 … konzept-05 (datei, alt, nachweis „Bildschirmfoto der Konzept-Webseite (interne Fassung mit HOLY-Produktbildern), 03.11.2026“, motiv), ohne die übrigen Einträge zu verändern (die Datei ist ein JS-Objekt; vorsichtig ergänzen, danach mit node auf Syntax prüfen).
GESTALTUNG: Die Seite soll wie ein moderner, gut gemachter Shop aussehen (mobil zuerst, 390 px) – mit echten Produktbildern: großes Produktbild auf der Produktseite (ggf. kleine Galerie), Packshots in der Packungswahl und im Warenkorb, Teaser mit Bild auf der Startseite, Bild auf Danke-, Squad- und Händlerseite. Eigene SVG-Skizzen (Video → Tag → Shop, Kalender usw.) dürfen bleiben, wo sie etwas erklären. Kontraste wie bisher. Die öffentliche Fassung (ohne intern/) muss weiter ordentlich aussehen (Platzhalter wie heute).
PRÜFEN: beide Fassungen bis „Alle Prüfungen bestanden“; sieh dir alle 7 Seiten in der internen Fassung bei 390 px (ganze Seite) und Startseite plus Produktseite bei 1280 px an und korrigiere, was nicht gut aussieht. DOKU: README.md der Website nachziehen (Kennzeichnung: interne Bilder, wie man die interne Fassung öffnet, wie man prüft). Nichts committen. Gib geänderte Dateien, Erledigtes, Prüfergebnisse und Offenes zurück.`

const abnahmeAuftrag = (was) => `${GEMEINSAM}

DEINE AUFGABE (Abnahme ${was}, nur lesen und testen – keine Datei im Repository ändern): Prüfe ${was === 'Präsentation' ? 'die Präsentation fallstudie-2-customer-journey/praesentation/' : 'die Konzept-Webseite fallstudie-2-customer-journey/konzept-website/'} in der internen Fassung (mit intern/bilder.js) und in der öffentlichen (intern/ per Playwright-Route gesperrt). Lies den Abschnitt zur internen Fassung in ${was === 'Präsentation' ? 'LIESMICH.md' : 'README.md'}.
MASSSTAB 1 – AUSSEHEN: Sieht ${was === 'Präsentation' ? 'jede Hauptfolie 01–09 (Endzustand und wichtige Zwischenschritte)' : 'jede der 7 Seiten (390 px, ganze Seite; dazu 1280 px Start- und Produktseite)'} mit den Bildern gut und professionell aus? Bildschnitt, Schärfe, Größe, Ausrichtung, Ruhe, einheitlicher Stil, Lesbarkeit${was === 'Präsentation' ? ' aus der letzten Reihe (Beamer)' : ''}, Kontrast von Text auf Bildern. Wirkt etwas überladen oder leer?
MASSSTAB 2 – EHRLICHKEIT: Passt jedes Bild zu dem, was daneben behauptet wird? Keine HOLY-Werbung als eigenes Foto ausgegeben, Nachweise vorhanden und richtig, Symbolbilder als solche gekennzeichnet, Platzhalter für noch offene eigene Fotos ehrlich.${was === 'Konzept-Webseite' ? ' Hinweisbalken auf jeder Seite, noindex, keine Bestellung möglich – wirkt die Seite trotz Produktbildern eindeutig als studentisches Konzept?' : ''}
MASSSTAB 3 – TECHNIK: ${was === 'Präsentation' ? 'pruefen.mjs beider Fassungen (--schritte), Folie 09 Video unverändert (nur Pfad, nicht abspielen oder ansehen), Exporte/öffentliche Bilder ohne interne Bilder' : 'werkzeuge/pruefen.mjs beider Fassungen, _vorschau/ ohne HOLY-Fotos (ansehen!), keine externen Anfragen, 320/390/1280 px ohne waagerechtes Scrollen'}; git status --porcelain --ignored und git check-ignore: keine interne Datei versioniert oder vorgemerkt; öffentliche Fassung ohne kaputte Bild-Symbole und ohne Fehler.
Bildschirmfotos und Skripte nur nach ${was === 'Präsentation' ? 'fallstudie-2-customer-journey/praesentation/_test/abnahme-d06/' : 'fallstudie-2-customer-journey/konzept-website/intern/abnahme-d06/'} bzw. ins Scratchpad. Gib Befunde zurück (schwere hoch | mittel | niedrig, datei, stelle, problem, vorschlag – konkret und umsetzbar) und ein Fazit (2–5 Sätze, inkl. was gut gelungen ist).`

phase('Einbau')
const ergebnisse = await pipeline(
  [
    { name: 'Präsentation', auftrag: AUFTRAG_BAU_P },
    { name: 'Konzept-Webseite', auftrag: AUFTRAG_BAU_W },
  ],
  (it) => agent(it.auftrag, { label: 'einbau:' + it.name, phase: 'Einbau', schema: BAU_SCHEMA }),
  (bau, it) => agent(abnahmeAuftrag(it.name), { label: 'abnahme:' + it.name, phase: 'Abnahme', schema: ABNAHME_SCHEMA })
    .then(ab => ({ bau, abnahme: ab })),
)

return {
  kandidaten: kandidaten.map(k => ({ beschaffer: k.beschaffer, anzahl: k.dateien ? k.dateien.length : 0, nicht_gefunden: k.nicht_gefunden, hinweise: k.hinweise })),
  auswahl,
  praesentation: ergebnisse[0],
  website: ergebnisse[1],
}
