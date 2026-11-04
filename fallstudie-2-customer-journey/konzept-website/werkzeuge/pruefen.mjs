#!/usr/bin/env node
/* ==========================================================================
   Prüfung der Konzept-Webseite (Fallstudie 2) mit Playwright/Chromium
   Aufruf (im Repository):  node fallstudie-2-customer-journey/konzept-website/werkzeuge/pruefen.mjs
   Optionen:  --fassung beide|bilder|rueckfall   welche Fassung geprüft wird (Standard: beide)
                        (alte Namen gehen weiter: intern = bilder, oeffentlich = rueckfall)
              --ohne-fotos    keine Bildschirmfotos schreiben (alter Name: --ohne-bilder)
              --bericht DATEI Ergebnis zusätzlich als JSON speichern
   Playwright: require(process.env.PLAYWRIGHT_CORE || 'playwright'); Chromium über CHROME_PFAD wählbar.

   Zwei Fassungen derselben Dateien:
     mit Bildern  der Standard – so läuft die Seite im Repository, auf GitHub Pages und im Hörsaal. fremdbilder/register.js
                  setzt window.INTERN_BILDER (Name aus der Zeit vor dem Veröffentlichungsbeschluss), konzept.js baut die
                  Bilder aus fremdbilder/ ein. Die Veröffentlichung hat die Gruppe beschlossen (KI-Nachweis FS2 Nr. 17),
                  eine Genehmigung der Rechteinhaber wurde nicht eingeholt; nicht kommerziell, für die Lehrveranstaltung;
                  keine eigenen Fotos der Gruppe. Geprüft: jeder Registereintrag
                  mit Datei in fremdbilder/, alt, nachweis, motiv, pixel (= echte Bildgröße); jedes Bild geladen, mit alt,
                  width, height; kein Bild im ersten Bildschirm mit loading="lazy"; jeder Bildplatz mit vorhandenem
                  Schlüssel gefüllt (bei {packung} ohne Schlüssel: ausgeblendet); Unterschrift am Bild = unterschrift bzw.
                  nachweis; Fuß mit Obersatz und je Nachweis einem Eintrag „Motiv: Nachweis“; register.js und jede
                  Bilddatei des Registers im Git-Index (git ls-files --error-unmatch), sonst WARNUNG „nicht versioniert –
                  fehlt nach dem Push auf GitHub Pages“.
                  Bildschirmfotos: ../_vorschau/0n-….png (oberer Bildschirm, 390 × 844, versioniert – so sieht es auf
                  GitHub Pages aus); ganze Seite bei 390 und 1280 px nach ../intern/vorschau/ (per .gitignore ausgeschlossen).
                  Zusätzlich die GitHub-Pages-Probe: alle Seiten über einen lokalen HTTP-Server (wie GitHub Pages, mit
                  fremdbilder/) laden – keine Konsolenfehler, keine 404, alle Bilder geladen.
     Rückfall ohne Fremdbilder  wenn fremdbilder/register.js fehlt: Anfragen nach fremdbilder/ werden gesperrt, es gibt
                  kein window.INTERN_BILDER; außer der Wortmarke keine Bilder, Platzhalter und eigene Zeichnungen sichtbar,
                  Satz „Keine HOLY-Fotos …“ im Fuß. Bildschirmfotos nur nach ../intern/vorschau-rueckfall/ (ausgeschlossen).

   Geprüft wird (gestaltungsplan.md 7.2/7.3):
     1. alle Seiten laden ohne Konsolenfehler und ohne Skriptfehler (normal und mit ?anmerkungen=1)
     2. keine externen Anfragen (jede Anfrage außer file:, data:, blob:, about: und dem lokalen Prüfserver wird blockiert
        und gezählt); keine externen Adressen in src/href; keine Formulare und Eingabefelder
     3. alle internen Links erreichbar (Datei vorhanden, Sprungziel #id vorhanden), kein Link nach intern/
     4. Hinweisbalken auf jeder Seite: wörtlicher Text, sichtbar, oben, bleibt beim Scrollen stehen, kein Schließen-Knopf
     5. <meta name="robots" content="noindex,nofollow"> auf jeder Seite
     6. 390 px Breite ohne waagerechtes Scrollen (auch im Präsentationsmodus), dazu 320 und 1280 px
     7. Kontrast WCAG 2.x für jeden sichtbaren Text (4,5 : 1, große Schrift 3 : 1)
     8. Präsentationsmodus: Zahl der Marker = Zahl der Anmerkungen, jede mit Befund-IDs, Rundgang per „Weiter“
     9. Rechnungen: Packungswahl, Warenkorb je Packung, Code aus der Adresse, Nachfüll-Rechner; Startpackung der
        Produktseite aus ?packung= (Knopf der Startseite → produkt.html?packung=50, Code reist mit); Nachkauf von
        squad.html (?nachkauf=1 bis zur Danke-Seite, ohne Shaker-Hinweis und Shaker-Bild bei der 50er-Dose)
    10. Bilder je Fassung (siehe oben); mit Bildern zusätzlich: großes Bild der Produktseite folgt der Packung, bis in der
        Galerie geklickt wird; Vorschaubild im Warenkorb und Shaker auf der Danke-Seite passen zu ?packung=
    11. erster Bildschirm 390 × 844: Händlerseite Code-Box und Hauptknopf, Produktseite Titel, Bewertung und Preise (auch
        mit ?packung=50), Warenkorb Lieferdatum und Endpreis (jede Packung, Folie 08), Koffein-Check erster Punkt von
        „Kurz gesagt“, Danke-Seite Titel mit Zustelltag, Squad Kontostand; 1280 px: Knopf „Zum Produkt aus dem Video“
        und Hauptknopf der Händlerseite je in einer Zeile
    12. Kennzeichnung seit der Gestaltung D09 („Kampagnen-Look“, Beispiel-Etiketten nur im Präsentationsmodus): Fuß jeder
        Seite mit Kennung „Studentisches Konzept der Gruppe (HS Kaiserslautern)“, dem Satz „Liefertermine, Bestellnummer,
        Coins und Kontostände sind Beispielwerte.“ und dem Link „Quellen und Stand“ – sichtbar, in beiden Modi; „Werbung“
        sichtbar neben jedem sichtbaren Creator-Code; „Vorschlag der Gruppe“ sichtbar an jeder Garantie (#garantie,
        #garantie-kurz); „Platzhalter“ sichtbar an jeder Bewertungskarte; Etikett „Symbolbild“ sichtbar an jedem Bild,
        dessen Nachweis mit „Symbolbild · “ beginnt; Schriften „Bricolage Konzept“ und „Inter Konzept“ geladen;
        Präsentationsmodus zeigt die Beispiel-Etiketten (.nur-anm-i) und den Beispielcode-Hinweis; Menü-Knopf klappt auf
        und schließt mit Escape; Kaufleiste der Produktseite erst nach dem Kaufknopf sichtbar, Preis folgt der Packung
    13. D09-Nacharbeit (Abnahme Technik und Gestaltung, 04.11.2026):
        – „wirklich sichtbar“ statt nur „im DOM und gerendert“ für Hinweisleiste, „Werbung“, „Symbolbild“, „Vorschlag der
          Gruppe“, „Platzhalter“, Kennung und Beispielwert-Satz im Fuß: wirksame Deckkraft ≥ 0,9 über alle Vorfahren,
          Schriftfarbe ohne Alpha, Schrift ≥ 11 px, Etikett „Symbolbild“ innerhalb des Bildes, in der Mitte nicht verdeckt
          (elementFromPoint, Element dafür kurz in den Blick geholt); Hinweisleiste zusätzlich ganz im Fenster
        – Kontrastmessung (7.) rechnet die Deckkraft ein (Schriftfarbe mit Alpha und opacity der Vorfahren werden mit dem
          Hintergrund gemischt), Text mit Deckkraft 0 gilt als Fehler
        – Tab-Rundgang: kein fokussiertes Element (teil)verdeckt von Kaufleiste (Produktseite, 390 und 1280 px) oder vom
          Knopf „Anmerkungen ansehen“ (Präsentationsmodus, alle Seiten, 390 px), WCAG 2.2 SC 2.4.11
        – keine Recherche- und Entwurfssprache im Hauptteil der normalen Ansicht (z. B. „noch nicht belegt“, „Befunde ✔“,
          „Studentischer Entwurf“, „Hier steht eine echte“, „selbst gerechnet“, „Start der Strecke“, „HOLY-KONZEPT“;
          Quellenliste des Koffein-Checks ausgenommen)
        – Versionsprüfung (WARNUNG) auch für Schriften aus @font-face, Lizenztexte, assets/, bilder/ und die HTML-Seiten
   ========================================================================== */
import fs from 'node:fs';
import http from 'node:http';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_CORE || 'playwright');

const WURZEL = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const VORSCHAU = path.join(WURZEL, '_vorschau');                              // versioniert: Fassung mit Bildern, oberer Bildschirm
const VORSCHAU_GANZ = path.join(WURZEL, 'intern', 'vorschau');                // ausgeschlossen: ganze Seiten zum Ansehen
const VORSCHAU_RUECKFALL = path.join(WURZEL, 'intern', 'vorschau-rueckfall'); // ausgeschlossen: Rückfall ohne Fremdbilder
const FREMD = path.join(WURZEL, 'fremdbilder');                               // veröffentlichte Fremdbilder (Beschluss der Gruppe, KI-Nachweis FS2 Nr. 17)
const REGISTER_JS = path.join(FREMD, 'register.js');
const FREMD_URL = pathToFileURL(FREMD).href + '/';
const istFremd = (u) => typeof u === 'string' && (u.startsWith(FREMD_URL) || /^http:\/\/127\.0\.0\.1:\d+\/fremdbilder\//.test(u));
const args = process.argv.slice(2);
const MIT_FOTOS = !args.includes('--ohne-fotos') && !args.includes('--ohne-bilder');
const berichtPfad = args.includes('--bericht') ? args[args.indexOf('--bericht') + 1] : null;
const ALIAS = { beide: 'beide', bilder: 'bilder', intern: 'bilder', rueckfall: 'rueckfall', oeffentlich: 'rueckfall' };
const fassungArg = ALIAS[args.includes('--fassung') ? args[args.indexOf('--fassung') + 1] : 'beide'];
if (!fassungArg) { console.error('--fassung beide|bilder|rueckfall (alte Namen: intern, oeffentlich)'); process.exit(2); }
const NAME = { bilder: 'mit Bildern', rueckfall: 'Rückfall ohne Fremdbilder' };

const SEITEN = [
  ['01-index', 'index.html'],
  ['02-koffein-check', 'koffein-check.html'],
  ['03-produkt', 'produkt.html'],
  ['04-warenkorb', 'warenkorb.html'],
  ['05-danke', 'danke.html'],
  ['06-squad', 'squad.html'],
  ['07-haendler', 'haendler.html']
];
const HINWEIS = 'Studentisches Konzept der Gruppe (HS Kaiserslautern) – keine Website der HOLY Softdrinks GmbH · keine Bestellung möglich';
/* Obersatz der Bildnachweise im Fuß (Fassung mit Bildern), wörtlich in allen 7 Seiten und in README.md */
const BILDER_FUSS = 'Bilder: Produktbilder und Grafiken der HOLY Softdrinks GmbH sowie Fotos Dritter (Herkunft je Bild unten), Abruf 03.11.2026 – Veröffentlichung von der Gruppe beschlossen (KI-Nachweis FS2 Nr. 17), keine Genehmigung der Rechteinhaber eingeholt; nicht kommerziell, für die Lehrveranstaltung; keine eigenen Fotos der Gruppe.';
const PACKUNGEN = ['set', '1', '10', '50'];
/* Satz im Fuß jeder Seite (Gestaltung D09): ersetzt in der normalen Ansicht die Etiketten „Beispielwert“ */
const BEISPIEL_SATZ = 'Liefertermine, Bestellnummer, Coins und Kontostände sind Beispielwerte.';

const fehler = [];
const notizen = [];
const warnungen = [];
const extern = [];
let FASSUNG = 'bilder';                                                       // aktuell geprüfte Fassung
const f = (ort, text) => fehler.push('[' + NAME[FASSUNG] + '] ' + ort + ': ' + text);

/* Register lesen und prüfen. Es ist seit dem Veröffentlichungsbeschluss (KI-Nachweis FS2 Nr. 17) versioniert: fehlt es,
   ist das ein Fehler. */
const FASSUNGEN = fassungArg === 'beide' ? ['bilder', 'rueckfall'] : [fassungArg];
let REGISTER = null;
if (!fs.existsSync(REGISTER_JS)) {
  fehler.push('fremdbilder/register.js fehlt (seit dem Veröffentlichungsbeschluss, KI-Nachweis FS2 Nr. 17, versioniert) – Fassung mit Bildern nicht prüfbar.');
  if (FASSUNGEN.includes('bilder')) FASSUNGEN.splice(FASSUNGEN.indexOf('bilder'), 1);
  if (!FASSUNGEN.length) FASSUNGEN.push('rueckfall');
} else {
  try {
    const fenster = {};
    new Function('window', fs.readFileSync(REGISTER_JS, 'utf8'))(fenster);
    REGISTER = fenster.INTERN_BILDER || null;
  } catch (e) { fehler.push('fremdbilder/register.js: Syntaxfehler ' + e.message); }
  if (REGISTER) {
    for (const [k, e] of Object.entries(REGISTER)) {
      if (!/^fremdbilder\/[\w.-]+\.(jpe?g|png|webp)$/i.test(e.datei || '')) fehler.push('fremdbilder/register.js: ' + k + ' mit Datei außerhalb von fremdbilder/: ' + e.datei);
      else if (!fs.existsSync(path.join(WURZEL, e.datei))) fehler.push('fremdbilder/register.js: Datei fehlt für ' + k + ': ' + e.datei);
      if (!e.alt || !e.nachweis || !e.motiv || !/\d+\s*[×x]\s*\d+/.test(e.pixel || '')) fehler.push('fremdbilder/register.js: ' + k + ' ohne alt, nachweis, motiv oder pixel');
      if (/^Symbolbild/.test(e.alt || '') !== /^Symbolbild · /.test(e.nachweis || '')) fehler.push('fremdbilder/register.js: ' + k + ' Symbolbild nicht in alt und nachweis gleich gekennzeichnet');
      if (e.unterschrift && /^Symbolbild · /.test(e.nachweis) && !/^Symbolbild · /.test(e.unterschrift)) fehler.push('fremdbilder/register.js: ' + k + ' Unterschrift ohne „Symbolbild · “');
    }
    // jede veröffentlichte Datei in fremdbilder/ gehört zu einem Eintrag (keine verwaisten Fremdbilder)
    const benutzt = new Set(Object.values(REGISTER).map((e) => e.datei));
    for (const d of fs.readdirSync(FREMD)) {
      if (d === 'register.js') continue;
      if (!benutzt.has('fremdbilder/' + d)) warnungen.push('fremdbilder/' + d + ' wird von keinem Registereintrag benutzt');
    }
    // versioniert oder vorgemerkt? Nur Dateien im Git-Index kommen mit dem Push auf GitHub Pages (Abnahme D07)
    let gitDa = true;
    for (const d of ['fremdbilder/register.js', ...Array.from(benutzt).sort()]) {
      if (!fs.existsSync(path.join(WURZEL, d))) continue;                    // fehlende Datei meldet schon der Register-Abgleich
      const v = gitBekannt(d);
      if (v === null) { gitDa = false; break; }
      if (!v) warnungen.push(d + ': nicht versioniert – fehlt nach dem Push auf GitHub Pages (git add)');
    }
    if (!gitDa) notizen.push('git nicht verfügbar oder kein Repository – Versionierung der Fremdbilder nicht geprüft');
  }
}
/* D09-Nacharbeit (Abnahme Technik): auch Schriften (jede per @font-face eingebundene Datei), Lizenztexte, assets/, bilder/
   und die Seiten selbst müssen im Git-Index stehen – sonst fällt die Seite auf GitHub Pages still auf die Systemschrift
   zurück oder der Lizenztext der OFL 1.1 fehlt bei der Weitergabe */
{
  const css = fs.readFileSync(path.join(WURZEL, 'assets', 'konzept.css'), 'utf8');
  const schriften = Array.from(css.matchAll(/url\("\.\.\/(schriften\/[^"]+)"\)/g), (m) => m[1]);
  const weitere = [];
  for (const ordner of ['schriften', 'assets', 'bilder']) {
    if (!fs.existsSync(path.join(WURZEL, ordner))) continue;
    for (const d of fs.readdirSync(path.join(WURZEL, ordner))) if (/\.(woff2|txt|css|js|png|jpe?g|webp|svg)$/i.test(d)) weitere.push(ordner + '/' + d);
  }
  const dateien = Array.from(new Set([...schriften, ...weitere, ...SEITEN.map(([, d]) => d), 'koffein-check.txt'])).sort();
  let gitDa = true;
  for (const d of dateien) {
    if (!fs.existsSync(path.join(WURZEL, d))) { if (schriften.includes(d)) fehler.push('assets/konzept.css bindet ' + d + ' ein, die Datei fehlt'); continue; }
    const v = gitBekannt(d);
    if (v === null) { gitDa = false; break; }
    if (!v) warnungen.push(d + ': nicht versioniert – fehlt nach dem Push auf GitHub Pages (git add)');
  }
  if (!gitDa) notizen.push('git nicht verfügbar oder kein Repository – Versionierung von Schriften, Lizenzen, assets/, bilder/ und Seiten nicht geprüft');
}

/* true: Datei steht im Git-Index (versioniert oder mit git add vorgemerkt); false: nicht; null: git fehlt oder kein Repository */
function gitBekannt(datei) {
  const r = spawnSync('git', ['ls-files', '--error-unmatch', '--', datei], { cwd: WURZEL, encoding: 'utf8' });
  if (r.error || r.status === null) return null;
  if (r.status === 0) return true;
  return r.status === 128 ? null : false;   // 128: kein Repository (sprachunabhängig), 1: nicht versioniert
}

/* Lokaler Prüfserver wie GitHub Pages (statisch, mit fremdbilder/), nur 127.0.0.1 */
const TYPEN = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => {
  const pfad = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const datei = path.join(WURZEL, path.normalize(pfad).replace(/^([/\\])+/, ''));
  if (!datei.startsWith(WURZEL) || /[/\\]intern([/\\]|$)/.test(path.relative(WURZEL, datei)) || !fs.existsSync(datei) || fs.statSync(datei).isDirectory()) {
    res.writeHead(404, { 'content-type': 'text/plain' }); res.end('404'); return;
  }
  res.writeHead(200, { 'content-type': TYPEN[path.extname(datei).toLowerCase()] || 'application/octet-stream' });
  fs.createReadStream(datei).pipe(res);
});
await new Promise((ok) => server.listen(0, '127.0.0.1', ok));
const SERVER_URL = 'http://127.0.0.1:' + server.address().port + '/';

const browser = await chromium.launch({
  executablePath: process.env.CHROME_PFAD || undefined,
  args: ['--no-sandbox', '--disable-background-networking', '--no-proxy-server',
    '--host-resolver-rules=MAP * ~NOTFOUND , EXCLUDE localhost , EXCLUDE 127.0.0.1']
});

async function neuerKontext(breite, hoehe, mobil) {
  const k = await browser.newContext({ viewport: { width: breite, height: hoehe }, deviceScaleFactor: 1, isMobile: mobil, hasTouch: mobil, locale: 'de-DE' });
  const fassung = FASSUNG;
  await k.route('**/*', (route) => {
    const u = route.request().url();
    // Rückfall: fremdbilder/ ist gesperrt, als fehle der Ordner
    if (fassung === 'rueckfall' && istFremd(u)) return route.abort();
    if (/^(file|data|blob|about):/i.test(u) || u.startsWith(SERVER_URL)) return route.continue();
    extern.push(u);
    return route.abort();
  });
  return k;
}

function dateiUrl(datei, query) {
  return pathToFileURL(path.join(WURZEL, datei)).href + (query || '');
}

/* „Wirklich sichtbar“ (D09-Nacharbeit, Abnahme Technik): Vorher galt ein Element als sichtbar, sobald es gerendert war
   (getClientRects, visibility). Eine Mutationskopie mit unsichtbarer Hinweisleiste (color: transparent, 3 px), „Werbung“
   mit opacity 0 und einem Symbolbild-Etikett außerhalb des Bildes bestand damit alle Prüfungen. Die Funktion liefert null
   (sichtbar) oder den Grund. bildplatz: Rechteck, in dem das Element ganz liegen muss (Etikett am Bild). ganzImFenster:
   Element muss ohne Scrollen ganz im Fenster stehen (Hinweisleiste). Sonst wird das Element für den Treffertest kurz in die
   Mitte des Fensters geholt (ohne Glätten) und die Scrollposition danach zurückgesetzt. */
const WIRKLICH_SICHTBAR = `window.__wirklichSichtbar = function (el, bildplatz, ganzImFenster) {
  if (!el || !el.isConnected) return 'fehlt';
  if (!el.getClientRects().length) return 'nicht gerendert';
  var cs = getComputedStyle(el);
  if (cs.visibility !== 'visible') return 'visibility ' + cs.visibility;
  var deck = 1;
  for (var x = el; x && x.nodeType === 1; x = x.parentElement) deck *= Number(getComputedStyle(x).opacity);
  if (deck < 0.9) return 'Deckkraft ' + deck.toFixed(2);
  var m = /rgba?\\(([^)]+)\\)/.exec(cs.color);
  var teile = m ? m[1].split(/[ ,\\/]+/).filter(Boolean).map(Number) : [];
  if (teile.length > 3 && teile[3] < 1) return 'Schriftfarbe mit Alpha ' + teile[3];
  if (parseFloat(cs.fontSize) < 11) return 'Schrift ' + cs.fontSize;
  var r = el.getBoundingClientRect();
  if (r.width < 4 || r.height < 4) return 'zu klein (' + Math.round(r.width) + ' × ' + Math.round(r.height) + ' px)';
  if (bildplatz) {
    var b = bildplatz.getBoundingClientRect();
    if (r.left < b.left - 1 || r.right > b.right + 1 || r.top < b.top - 1 || r.bottom > b.bottom + 1) return 'außerhalb des Bildes';
  }
  if (ganzImFenster && (r.top < -1 || r.left < -1 || r.bottom > innerHeight + 1 || r.right > innerWidth + 1)) return 'nicht ganz im Fenster';
  var vorher = window.scrollY;
  if (!ganzImFenster && (r.top < 0 || r.bottom > innerHeight)) { el.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'instant' }); r = el.getBoundingClientRect(); }
  var px = Math.min(Math.max(r.left + Math.min(r.width / 2, 12), 0), innerWidth - 1);
  var py = Math.min(Math.max(r.top + r.height / 2, 0), innerHeight - 1);
  var treffer = document.elementFromPoint(px, py);
  if (window.scrollY !== vorher) window.scrollTo({ top: vorher, behavior: 'instant' });
  if (r.right <= 0 || r.left >= innerWidth) return 'waagerecht außerhalb des Fensters';
  if (!treffer || !(treffer === el || el.contains(treffer))) return 'verdeckt von ' + (treffer ? treffer.tagName.toLowerCase() + (treffer.classList.length ? '.' + treffer.classList[0] : '') : 'nichts');
  return null;
};`;

/* Seite laden und Fehler mitschneiden */
async function oeffne(kontext, datei, query, ort, basis) {
  const page = await kontext.newPage();
  await page.addInitScript({ content: WIRKLICH_SICHTBAR });
  const meldungen = [];
  const fassung = FASSUNG;
  const erwartet = (u) => fassung === 'rueckfall' && istFremd(u);       // gesperrtes fremdbilder/register.js
  page.on('console', (m) => {
    if (m.type() !== 'error' && m.type() !== 'warning') return;
    if (erwartet((m.location() || {}).url) && /Failed to load resource/.test(m.text())) return;
    const wo = (m.location() || {}).url || '';
    meldungen.push(m.type() + ': ' + m.text() + (/^file:/i.test(wo) ? ' (' + path.relative(WURZEL, fileURLToPath(wo.split('?')[0].split('#')[0])) + ')' : (wo ? ' (' + wo + ')' : '')));
  });
  page.on('pageerror', (e) => meldungen.push('pageerror: ' + e.message));
  page.on('requestfailed', (r) => { if (/^(file|http):/i.test(r.url()) && !erwartet(r.url()) && !extern.includes(r.url())) meldungen.push('requestfailed: ' + r.url()); });
  page.on('response', (r) => { if (r.status() >= 400 && !erwartet(r.url())) meldungen.push('HTTP ' + r.status() + ': ' + r.url()); });
  await page.goto(basis ? basis + datei + (query || '') : dateiUrl(datei, query), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  return { page, meldungen, ort };
}
function meldeKonsole({ meldungen, ort }) {
  meldungen.forEach((m) => f(ort, 'Konsole ' + m));
}

/* Kontrast und Überlauf im Browser messen */
async function messe(page) {
  return page.evaluate(() => {
    const parse = (s) => { const m = /rgba?\(([^)]+)\)/.exec(s); if (!m) return null; const p = m[1].split(/[ ,/]+/).filter(Boolean).map(Number); return { rgb: p.slice(0, 3), a: p.length > 3 ? p[3] : 1 }; };
    const lum = (c) => { const v = c.map((x) => { x /= 255; return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4); }); return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2]; };
    const grund = (el) => { while (el) { const c = parse(getComputedStyle(el).backgroundColor); if (c && c.a > 0.5) return c.rgb; el = el.parentElement; } return [255, 255, 255]; };
    const probleme = [];
    let gezaehlt = 0;
    document.querySelectorAll('body *').forEach((el) => {
      if (el.closest('svg, script, style, .sr-only')) return;
      const hatText = Array.from(el.childNodes).some((n) => n.nodeType === 3 && n.textContent.trim());
      if (!hatText) return;
      if (!el.getClientRects().length) return;
      const cs = getComputedStyle(el);
      if (cs.visibility === 'hidden') return;
      const vorne = parse(cs.color); if (!vorne) return;
      // Deckkraft (D09-Nacharbeit): Alpha der Schriftfarbe mal opacity aller Vorfahren; Text mit Deckkraft 0 ist unsichtbar
      // (Fehler), dazwischen wird die Schrift mit dem Hintergrund gemischt
      let deck = vorne.a;
      for (let x = el; x && x.nodeType === 1; x = x.parentElement) deck *= Number(getComputedStyle(x).opacity);
      const hinten = grund(el);
      if (deck <= 0.001) { gezaehlt++; probleme.push({ text: el.textContent.trim().slice(0, 60), kontrast: 1, soll: 4.5, farbe: cs.color + ', Deckkraft 0', grund: 'rgb(' + hinten.join(', ') + ')' }); return; }
      const gemischt = vorne.rgb.map((c, i) => c * deck + hinten[i] * (1 - deck));
      const l1 = lum(gemischt), l2 = lum(hinten);
      const k = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
      const groesse = parseFloat(cs.fontSize), gewicht = Number(cs.fontWeight) || 400;
      const gross = groesse >= 24 || (groesse >= 18.66 && gewicht >= 700);
      const soll = gross ? 3 : 4.5;
      gezaehlt++;
      if (k < soll) probleme.push({ text: el.textContent.trim().slice(0, 60), kontrast: Math.round(k * 100) / 100, soll, farbe: cs.color + (deck < 1 ? ', Deckkraft ' + deck.toFixed(2) : ''), grund: 'rgb(' + hinten.join(', ') + ')' });
    });
    const de = document.documentElement;
    return { probleme, gezaehlt, scrollBreite: de.scrollWidth, fensterBreite: window.innerWidth, clientBreite: de.clientWidth };
  });
}

/* Sprungziele einer Datei (id="…") */
const idCache = new Map();
function ids(datei) {
  if (!idCache.has(datei)) {
    const html = fs.readFileSync(path.join(WURZEL, datei), 'utf8');
    idCache.set(datei, new Set(Array.from(html.matchAll(/\bid="([^"]+)"/g), (m) => m[1])));
  }
  return idCache.get(datei);
}

const ergebnisSeiten = [];
const bildschirmfotos = [];

/* Bilder der Seite erfassen (img und Einbettungen, Bildplätze, Fuß) */
async function bilderInfo(page) {
  return page.evaluate(() => {
    const sichtbar = (el) => !!el && el.getClientRects().length > 0 && getComputedStyle(el).visibility !== 'hidden';
    const fussBilder = Array.from(document.querySelectorAll('[data-nur-intern]'));
    const p = new URLSearchParams(location.search).get('packung');
    const packung = ['set', '1', '10', '50'].includes(p) ? p : 'set';
    return {
      register: window.INTERN_BILDER ? Object.keys(window.INTERN_BILDER) : null,
      htmlKlasse: document.documentElement.classList.contains('intern-bilder'),
      elemente: Array.from(document.querySelectorAll('img, picture, video, iframe, object, embed, svg image')).map((e) => {
        const r = e.getBoundingClientRect();
        return {
          tag: e.tagName.toLowerCase(), src: e.getAttribute('src') || e.getAttribute('href') || '',
          wortmarke: e.matches('.wortmarke img') && e.getAttribute('src') === 'bilder/holy-logo-wortmarke.png',
          alt: e.hasAttribute('alt') ? e.getAttribute('alt') : null, breite: e.getAttribute('width'), hoehe: e.getAttribute('height'),
          natur: e.naturalWidth ? e.naturalWidth + '×' + e.naturalHeight : '',
          lazy: e.getAttribute('loading') === 'lazy', deko: !!e.closest('[data-intern-deko]'), oben: Math.round(r.top + window.scrollY),
          sichtbar: sichtbar(e)
        };
      }),
      plaetze: Array.from(document.querySelectorAll('[data-intern]')).map((s) => {
        const n = s.querySelector('[data-intern-nachweis]');
        return {
          schluessel: s.getAttribute('data-intern'), aufgeloest: s.getAttribute('data-intern').replace('{packung}', packung),
          aktiv: s.getAttribute('data-intern-aktiv'), mitBild: s.classList.contains('mit-bild'), sichtbar: sichtbar(s),
          unterschrift: n ? n.textContent.replace(/\s+/g, ' ').trim() : null,
          symbolEtikett: Array.from(s.querySelectorAll('.symbol-etikett')).some((x) => x.textContent.trim() === 'Symbolbild' && window.__wirklichSichtbar(x, x.closest('.bildplatz') || s) === null),
          symbolGrund: Array.from(s.querySelectorAll('.symbol-etikett')).map((x) => window.__wirklichSichtbar(x, x.closest('.bildplatz') || s)).filter(Boolean).join('; ')
        };
      }),
      fussSichtbar: fussBilder.some(sichtbar),
      fussText: fussBilder.map((e) => e.textContent.replace(/\s+/g, ' ').trim()).join(' '),
      fussEintraege: Array.from(document.querySelectorAll('[data-intern-liste] li')).map((li) => ({ text: li.textContent.replace(/\s+/g, ' ').trim(), motiv: (li.querySelector('b') || {}).textContent || '' })),
      rueckfallSatzSichtbar: Array.from(document.querySelectorAll('[data-nur-oeffentlich]')).some(sichtbar),
      rueckfallSaetze: document.querySelectorAll('[data-nur-oeffentlich]').length,
      leereSichtbarePlaetze: Array.from(document.querySelectorAll('.bildplatz')).filter((b) => sichtbar(b) && !b.querySelector('img')).length,
      fensterHoehe: window.innerHeight
    };
  });
}

/* alle Bilder laden (lazy → eager), für Prüfung und ganzseitige Bildschirmfotos; gibt nicht geladene Bilder zurück */
async function ladeAlleBilder(page) {
  return page.evaluate(async () => {
    const imgs = Array.from(document.images);
    imgs.forEach((i) => { if (i.loading === 'lazy') i.loading = 'eager'; });
    await Promise.all(imgs.map((i) => (i.complete ? null : new Promise((ok) => { i.addEventListener('load', ok, { once: true }); i.addEventListener('error', ok, { once: true }); setTimeout(ok, 5000); }))));
    await Promise.all(imgs.filter((i) => i.complete && i.naturalWidth && i.decode).map((i) => i.decode().catch(() => null)));
    return Array.from(document.images).filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.getAttribute('src'));
  });
}

/* Bilder je Fassung prüfen */
function pruefeBilder(ort, b, modus) {
  const fremd = b.elemente.filter((e) => !e.wortmarke);
  if (FASSUNG === 'rueckfall') {
    if (b.register) f(ort, 'window.INTERN_BILDER vorhanden, obwohl fremdbilder/ gesperrt ist');
    if (fremd.length) f(ort, fremd.length + ' Bild-, Video- oder Einbettungselemente (im Rückfall nur eigene SVG und die Wortmarke im Kopf)');
    if (b.htmlKlasse || b.plaetze.some((p) => p.mitBild)) f(ort, 'Bildplatz mit Bild im Rückfall');
    if (b.fussSichtbar) f(ort, 'Bildnachweise im Rückfall sichtbar');
    if (b.rueckfallSaetze && !b.rueckfallSatzSichtbar) f(ort, 'Satz „Keine HOLY-Fotos …“ fehlt im Fuß');
  } else {
    if (!b.register) { f(ort, 'window.INTERN_BILDER fehlt (fremdbilder/register.js nicht geladen)'); return; }
    for (const e of fremd) {
      if (e.tag !== 'img') { f(ort, '<' + e.tag + '> nicht erlaubt (nur img aus fremdbilder/)'); continue; }
      if (!/^fremdbilder\/[\w.-]+\.(jpe?g|png|webp)$/i.test(e.src)) f(ort, 'Bild nicht aus fremdbilder/: ' + e.src);
      if (e.alt === null) f(ort, 'Bild ohne alt: ' + e.src);
      else if (!e.alt && !e.deko) f(ort, 'Bild mit leerem alt außerhalb eines Knopfs/Links mit Text: ' + e.src);
      if (!e.breite || !e.hoehe) f(ort, 'Bild ohne width/height: ' + e.src);
      else if (e.natur && e.natur !== e.breite + '×' + e.hoehe) f(ort, 'pixel im Register (' + e.breite + '×' + e.hoehe + ') ≠ Bilddatei (' + e.natur + '): ' + e.src);
      // erster Bildschirm sofort laden, darunter lazy (Toleranz: nur eindeutige Fälle melden)
      if (modus === 'normal' && e.sichtbar && e.lazy && e.oben < b.fensterHoehe * 0.75) f(ort, 'Bild im ersten Bildschirm mit loading="lazy": ' + e.src);
    }
    if (!fremd.length) f(ort, 'keine Fremdbilder eingebaut');
    for (const p of b.plaetze) {
      const offen = p.schluessel.includes('{packung}');
      const bekannt = b.register.includes(p.aufgeloest);
      if (!bekannt) {
        if (offen) { if (p.sichtbar) f(ort, 'Bildplatz „' + p.aufgeloest + '“ ohne Registereintrag ist sichtbar (soll ausgeblendet sein)'); }
        else warnungen.push(ort + ': Bildplatz „' + p.schluessel + '“ hat keinen Eintrag in fremdbilder/register.js');
        continue;
      }
      if (!p.mitBild) { f(ort, 'Bildplatz „' + p.aufgeloest + '“ ohne Bild (Datei nicht geladen?)'); continue; }
      const e = REGISTER[p.aktiv];
      if (e && p.unterschrift !== null && p.unterschrift !== (e.unterschrift || e.nachweis)) f(ort, 'Unterschrift am Bild „' + p.unterschrift + '“ passt nicht zu ' + p.aktiv);
      // Gestaltung D09: Die Unterschrift steht nicht mehr sichtbar am Bild (Nachweis im Fuß); Symbolbilder brauchen deshalb das
      // sichtbare Etikett „Symbolbild“ (konzept.js)
      if (e && /^Symbolbild · /.test(e.nachweis) && p.sichtbar && !p.symbolEtikett) f(ort, 'Symbolbild „' + p.aktiv + '“ ohne sichtbares Etikett „Symbolbild“ am Bild' + (p.symbolGrund ? ' (' + p.symbolGrund + ')' : ''));
      // Motiv im Fuß: zusammengefasste Motive („Packshot 50 Portionen / 10 Portionen“) enthalten alle Wörter des Motivs
      if (e && !b.fussEintraege.some((x) => x.text.endsWith(e.nachweis) && e.motiv.split(/[\s/:]+/).filter(Boolean).every((w) => x.motiv.split(/[\s/:]+/).includes(w)))) f(ort, 'Fuß ohne Eintrag „' + e.motiv + ': ' + e.nachweis.slice(0, 50) + '…“');
    }
    if (!b.fussSichtbar || !b.fussText.includes(BILDER_FUSS)) f(ort, 'Obersatz der Bildnachweise im Fuß fehlt oder weicht ab');
    if (!b.fussEintraege.length) f(ort, 'keine Einzelnachweise im Fuß');
    const gesehen = new Set();
    for (const x of b.fussEintraege) {
      if (!x.motiv || !/: $/.test(x.motiv)) f(ort, 'Fußeintrag ohne Motiv davor: ' + x.text.slice(0, 60));
      const nachweis = x.text.slice(x.motiv.length);
      if (gesehen.has(nachweis)) f(ort, 'Nachweis doppelt im Fuß (nicht zusammengefasst): ' + nachweis.slice(0, 60));
      gesehen.add(nachweis);
    }
    if (b.rueckfallSatzSichtbar) f(ort, 'Satz „Keine HOLY-Fotos …“ in der Fassung mit Bildern sichtbar');
  }
  if (b.leereSichtbarePlaetze) f(ort, b.leereSichtbarePlaetze + ' sichtbare leere Bildplätze');
}

/* erster Bildschirm (Abnahme D06): Elemente müssen bei 390 × 844 oben beginnen bzw. ganz drin sein */
const ERSTER_BILDSCHIRM = {
  'haendler.html': [['.held .codebox', 'ganz'], ['.held .knopfreihe .knopf', 'ganz']],
  'produkt.html': [['main h1', 'beginnt'], ['.bewertung-kurz', 'beginnt'], ['.optionen .option .preis', 'beginnt']],
  'index.html': [['.held .codebox', 'ganz'], ['.held .knopfreihe .knopf', 'beginnt']],
  // Gestaltung D09 (Folie 08 zeigt diese Ausschnitte): Lieferdatum und Endpreis, „Kurz gesagt“, Zustelltag, Kontostand
  'warenkorb.html': [['#lieferdatum', 'ganz'], ['[data-k-gesamt]', 'ganz']],
  'koffein-check.html': [['.kurz li', 'ganz']],
  'danke.html': [['main h1', 'ganz']],
  'squad.html': [['#stand .coinstand', 'ganz']]
};

async function pruefeFassung() {
  const fotoOrdner = FASSUNG === 'bilder' ? VORSCHAU : VORSCHAU_RUECKFALL;
  if (MIT_FOTOS) { fs.mkdirSync(fotoOrdner, { recursive: true }); if (FASSUNG === 'bilder') fs.mkdirSync(VORSCHAU_GANZ, { recursive: true }); }

  /* ---------- 1–8, 10, 11: jede Seite, normal und im Präsentationsmodus ---------- */
  const mobil = await neuerKontext(390, 844, true);

  for (const [kurz, datei] of SEITEN) {
    for (const modus of ['normal', 'anmerkungen']) {
      const ort = datei + (modus === 'anmerkungen' ? ' ?anmerkungen=1' : '');
      const s = await oeffne(mobil, datei, modus === 'anmerkungen' ? '?anmerkungen=1' : '', ort);
      const { page } = s;
      const info = await page.evaluate(([HINWEIS, BEISPIEL_SATZ]) => {
        const ws = window.__wirklichSichtbar;
        /* kleinstes Element in wurzel, dessen Text das Muster enthält (für „Vorschlag der Gruppe“, Fußsätze) */
        const traeger = (wurzel, muster) => {
          if (!wurzel || !wurzel.textContent.includes(muster)) return null;
          let el = wurzel;
          for (;;) { const k = Array.from(el.children).find((c) => c.textContent.includes(muster)); if (!k) return el; el = k; }
        };
        const bar = document.querySelector('.hinweisbalken');
        const r = bar ? bar.getBoundingClientRect() : null;
        return {
          titel: document.title,
          robots: (document.querySelector('meta[name="robots"]') || {}).content || '',
          hinweisText: bar ? bar.textContent.replace(/\s+/g, ' ').trim() : '',
          hinweisAnzahl: document.querySelectorAll('.hinweisbalken').length,
          hinweisOben: r ? Math.round(r.top) : null,
          hinweisSichtbar: !!bar && bar.getClientRects().length > 0 && getComputedStyle(bar).display !== 'none' && getComputedStyle(bar).visibility !== 'hidden',
          hinweisWirklich: ws(bar, null, true),
          hinweisPosition: bar ? getComputedStyle(bar).position : '',
          hinweisKnoepfe: bar ? bar.querySelectorAll('button, a, [role="button"]').length : -1,
          erstesKind: document.body.firstElementChild === bar,
          formulare: document.querySelectorAll('form').length,
          eingaben: document.querySelectorAll('input, textarea, select').length,
          externeAttribute: Array.from(document.querySelectorAll('[src], [href], [action], [srcset]'))
            .map((el) => el.getAttribute('src') || el.getAttribute('href') || el.getAttribute('action') || el.getAttribute('srcset'))
            .filter((u) => /^(https?:)?\/\//i.test(u || '')),
          schrift: document.fonts.check('750 20px "Bricolage Konzept"') && Array.from(document.fonts).some((ff) => ff.family.includes('Bricolage Konzept') && ff.status === 'loaded'),
          schriftText: document.fonts.check('400 16px "Inter Konzept"') && Array.from(document.fonts).some((ff) => ff.family.includes('Inter Konzept') && ff.status === 'loaded'),
          // 12: Kennzeichnung (innerText enthält nur gerenderten Text, also nichts aus ausgeblendeten Elementen)
          fussText: (document.querySelector('footer.fuss') || {}).innerText || '',
          fussQuellen: Array.from(document.querySelectorAll('footer.fuss a')).some((a) => /#quellen$/.test(a.getAttribute('href') || '') && a.innerText.trim() === 'Quellen und Stand' && a.getClientRects().length > 0),
          codeOhneWerbung: Array.from(document.querySelectorAll('[data-code]')).filter((c) => c.getClientRects().length > 0).filter((c) => {
            const box = c.closest('.codebox, .code-zeile, li, p'); if (!box) return true;
            return !Array.from(box.querySelectorAll('.werbung')).some((w) => w.textContent.trim() === 'Werbung' && ws(w) === null);
          }).map((c) => c.textContent.trim()),
          garantieOhneVorschlag: Array.from(document.querySelectorAll('#garantie, #garantie-kurz')).filter((g) => g.getClientRects().length > 0).map((g) => {
            const el = traeger(g, 'Vorschlag der Gruppe'); const grund = el ? ws(el) : 'fehlt';
            return grund ? '#' + g.id + ' (' + grund + ')' : null;
          }).filter(Boolean),
          bewertungOhnePlatzhalter: Array.from(document.querySelectorAll('.bewertung')).filter((k) => k.getClientRects().length > 0 && !Array.from(k.querySelectorAll('.beispiel')).some((x) => x.textContent.trim() === 'Platzhalter' && ws(x) === null)).length,
          fussWirklich: ['Studentisches Konzept der Gruppe (HS Kaiserslautern)', BEISPIEL_SATZ].map((s) => { const el = traeger(document.querySelector('footer.fuss'), s); const g = el ? ws(el) : 'fehlt'; return g ? s.slice(0, 30) + '… (' + g + ')' : null; }).filter(Boolean),
          // D09-Nacharbeit: Recherche- und Entwurfssprache im Hauptteil der normalen Ansicht (Quellenliste ausgenommen)
          entwurfsSprache: (() => {
            const main = document.querySelector('main'); if (!main) return [];
            let text = main.innerText;
            document.querySelectorAll('main .quellen').forEach((q) => { text = text.split(q.innerText).join(' '); });
            return ['noch nicht belegt', 'Befunde ✔', 'Studentischer Entwurf', 'Hier steht eine echte', 'selbst gerechnet', 'Start der Strecke', 'HOLY-KONZEPT', '(Konzept)', 'Grundpreis offen', 'Im Konzept gilt'].filter((w) => text.includes(w));
          })(),
          beispielEtiketten: Array.from(document.querySelectorAll('.nur-anm-i')).length,
          beispielEtikettenSichtbar: Array.from(document.querySelectorAll('.nur-anm-i')).filter((x) => x.getClientRects().length > 0).length,
          anmText: Array.from(document.querySelectorAll('.anm')).map((a) => ({ ids: (a.getAttribute('data-ids') || '').trim(), text: a.textContent.trim().length })),
          punkte: document.querySelectorAll('.anm-punkt').length,
          links: Array.from(document.querySelectorAll('a[href]')).map((a) => ({ href: a.getAttribute('href'), abs: a.href, ohne: a.hasAttribute('data-ohne-anmerkungen') })),
          // Logo-Bilder: nur außerhalb von fremdbilder/ geprüft (HOLY-Packshots dürfen „Logo-Shaker“ heißen)
          hatHolyLogoBild: !!Array.from(document.querySelectorAll('img[alt*="Logo" i], svg[aria-label*="Logo" i]')).find((e) => !/^fremdbilder\//.test(e.getAttribute('src') || ''))
        };
      }, [HINWEIS, BEISPIEL_SATZ]);

      if (!info.titel) f(ort, 'kein <title>');
      if (info.robots !== 'noindex,nofollow') f(ort, 'meta robots fehlt oder falsch: "' + info.robots + '"');
      if (info.hinweisAnzahl !== 1) f(ort, 'Hinweisbalken ' + info.hinweisAnzahl + '-mal');
      if (info.hinweisText !== HINWEIS) f(ort, 'Hinweisbalken-Text weicht ab: "' + info.hinweisText + '"');
      if (!info.hinweisSichtbar || info.hinweisOben !== 0) f(ort, 'Hinweisbalken nicht sichtbar oben (top=' + info.hinweisOben + ')');
      if (info.hinweisWirklich) f(ort, 'Hinweisbalken nicht wirklich sichtbar: ' + info.hinweisWirklich);
      info.fussWirklich.forEach((g) => f(ort, 'Fußsatz nicht wirklich sichtbar: ' + g));
      if (modus === 'normal' && info.entwurfsSprache.length) f(ort, 'Entwurfs- oder Recherchesprache in der normalen Ansicht: „' + info.entwurfsSprache.join('“, „') + '“');
      if (info.hinweisPosition !== 'sticky' && info.hinweisPosition !== 'fixed') f(ort, 'Hinweisbalken nicht fest (position ' + info.hinweisPosition + ')');
      if (info.hinweisKnoepfe !== 0) f(ort, 'Hinweisbalken enthält Bedienelemente (ausblendbar?)');
      if (!info.erstesKind) f(ort, 'Hinweisbalken ist nicht das erste Element im <body>');
      if (info.formulare || info.eingaben) f(ort, 'Formular oder Eingabefeld gefunden (' + info.formulare + '/' + info.eingaben + ')');
      if (info.externeAttribute.length) f(ort, 'externe Adressen: ' + info.externeAttribute.join(', '));
      if (!info.schrift) f(ort, 'Schrift „Bricolage Konzept“ nicht geladen');
      if (!info.schriftText) f(ort, 'Schrift „Inter Konzept“ nicht geladen (schriften/inter-*.woff2 fehlt? Dann fällt die Seite still auf die Systemschrift zurück)');
      // 12: Kennzeichnung im Fuß, an Code, Garantie und Bewertungen – in beiden Modi
      if (!info.fussText.includes('Studentisches Konzept der Gruppe (HS Kaiserslautern)')) f(ort, 'Fuß ohne sichtbare Kennung „Studentisches Konzept der Gruppe (HS Kaiserslautern)“');
      if (!info.fussText.includes(BEISPIEL_SATZ)) f(ort, 'Fuß ohne sichtbaren Satz „' + BEISPIEL_SATZ + '“ (Beispiel-Etiketten stehen nur im Präsentationsmodus)');
      if (!info.fussQuellen) f(ort, 'Fuß ohne sichtbaren Link „Quellen und Stand“ (#quellen)');
      info.codeOhneWerbung.forEach((c) => f(ort, 'Creator-Code „' + c + '“ ohne sichtbares Etikett „Werbung“ daneben'));
      info.garantieOhneVorschlag.forEach((g) => f(ort, 'Garantie ' + g + ' ohne wirklich sichtbaren Hinweis „Vorschlag der Gruppe“'));
      if (info.bewertungOhnePlatzhalter) f(ort, info.bewertungOhnePlatzhalter + ' Bewertungskarte(n) ohne wirklich sichtbares Etikett „Platzhalter“');
      if (modus === 'normal' && info.beispielEtikettenSichtbar) f(ort, info.beispielEtikettenSichtbar + ' Beispiel-Etiketten (.nur-anm-i) in der normalen Ansicht sichtbar');
      if (modus === 'anmerkungen' && info.beispielEtiketten && !info.beispielEtikettenSichtbar) f(ort, 'Präsentationsmodus zeigt die Beispiel-Etiketten (.nur-anm-i) nicht');
      if (info.hatHolyLogoBild) f(ort, 'Element mit „Logo“ in alt/aria-label');

      // 11: erster Bildschirm (vor dem Nachladen, so wie man die Seite öffnet)
      if (modus === 'normal' && ERSTER_BILDSCHIRM[datei]) {
        const lage = await page.evaluate((liste) => liste.map(([sel, art]) => {
          const el = document.querySelector(sel); const r = el ? el.getBoundingClientRect() : null;
          return { sel, art, da: !!r, oben: r ? Math.round(r.top) : null, unten: r ? Math.round(r.bottom) : null, h: window.innerHeight };
        }), ERSTER_BILDSCHIRM[datei]);
        for (const l of lage) {
          if (!l.da) f(ort, 'erster Bildschirm: ' + l.sel + ' fehlt');
          else if (l.art === 'ganz' ? l.unten > l.h : l.oben >= l.h) f(ort, 'erster Bildschirm 390 × 844: ' + l.sel + ' ' + (l.art === 'ganz' ? 'endet bei ' + l.unten : 'beginnt bei ' + l.oben) + ' px');
        }
      }

      // Bilder: zuerst im Ladezustand (lazy/eager), dann alle laden und erneut (kein Bildplatz darf zurückfallen)
      const b0 = await bilderInfo(page);
      const nichtGeladen = await ladeAlleBilder(page);
      nichtGeladen.forEach((src) => f(ort, 'Bild nicht geladen: ' + src));
      const b1 = await bilderInfo(page);
      b1.elemente.forEach((e) => { const v = b0.elemente.find((x) => x.src === e.src); if (v) e.lazy = v.lazy; });
      pruefeBilder(ort, b1, modus);

      // Hinweisbalken bleibt beim Scrollen stehen
      await page.evaluate(() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' }));
      await page.waitForTimeout(50);
      const nachScroll = await page.evaluate(() => {
        const bar = document.querySelector('.hinweisbalken');
        const r = bar.getBoundingClientRect();
        const mitte = document.elementFromPoint(Math.min(window.innerWidth - 2, r.left + r.width / 2), r.top + Math.min(8, r.height / 2));
        return { oben: Math.round(r.top), sichtbar: !!mitte && bar.contains(mitte), scrollY: Math.round(window.scrollY) };
      });
      if (nachScroll.scrollY < 100) notizen.push('[' + NAME[FASSUNG] + '] ' + ort + ': Seite kaum scrollbar (' + nachScroll.scrollY + ' px)');
      if (nachScroll.oben !== 0 || !nachScroll.sichtbar) f(ort, 'Hinweisbalken nach dem Scrollen nicht oben sichtbar (top=' + nachScroll.oben + ')');
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));

      // Links
      for (const l of info.links) {
        const u = new URL(l.abs);
        if (u.protocol !== 'file:') { f(ort, 'Link nicht intern: ' + l.href); continue; }
        const zielPfad = fileURLToPath(u.href.split('#')[0].split('?')[0]);
        if (!fs.existsSync(zielPfad)) { f(ort, 'Link-Ziel fehlt: ' + l.href); continue; }
        const rel = path.relative(WURZEL, zielPfad);
        if (rel.startsWith('..')) { f(ort, 'Link führt aus dem Ordner: ' + l.href); continue; }
        if (rel.startsWith('intern')) { f(ort, 'Link in den ausgeschlossenen Ordner intern/: ' + l.href); continue; }
        if (u.hash && u.hash.length > 1 && rel.endsWith('.html') && !ids(rel).has(decodeURIComponent(u.hash.slice(1)))) f(ort, 'Sprungziel fehlt: ' + l.href);
        if (modus === 'anmerkungen' && rel.endsWith('.html') && !l.ohne && !l.href.startsWith('#') && !/[?&]anmerkungen=1/.test(l.href)) f(ort, 'Link reicht ?anmerkungen=1 nicht weiter: ' + l.href);
      }

      // Anmerkungen
      if (modus === 'normal') {
        if (!info.anmText.length) f(ort, 'keine Anmerkungen (.anm)');
        info.anmText.forEach((a, i) => {
          if (!a.ids) f(ort, 'Anmerkung ' + (i + 1) + ' ohne Befund-IDs (data-ids)');
          if (a.text < 40) f(ort, 'Anmerkung ' + (i + 1) + ' zu kurz');
        });
        if (info.punkte) f(ort, 'Marker im Normalmodus sichtbar');
      } else {
        if (info.punkte !== info.anmText.length) f(ort, 'Marker ' + info.punkte + ' ≠ Anmerkungen ' + info.anmText.length);
        // Rundgang: Start, dann alle Anmerkungen per „Weiter“
        await page.click('.anm-start');
        for (let i = 0; i < info.anmText.length; i++) {
          const z = await page.evaluate(() => {
            const b = document.querySelector('.anm-blatt');
            return { offen: !b.hidden, nummer: b.querySelector('.nummer').textContent, text: b.querySelector('.text').textContent.length, ids: b.querySelector('.ids').textContent, aktiv: document.querySelectorAll('.anm-ziel-aktiv').length };
          });
          if (!z.offen || z.text < 40 || !z.ids || z.aktiv !== 1) f(ort, 'Rundgang bei Anmerkung ' + (i + 1) + ' fehlerhaft ' + JSON.stringify(z));
          await page.click('.anm-blatt .vor');
        }
        await page.click('.anm-blatt .zu');
        await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
      }

      // Kontrast und Überlauf
      const m = await messe(page);
      if (m.scrollBreite > m.fensterBreite || m.scrollBreite > m.clientBreite) f(ort, 'waagerechtes Scrollen bei 390 px (scrollWidth ' + m.scrollBreite + ')');
      m.probleme.forEach((p) => f(ort, 'Kontrast ' + p.kontrast + ' < ' + p.soll + ' bei „' + p.text + '“ (' + p.farbe + ' auf ' + p.grund + ')'));

      if (modus === 'normal') {
        ergebnisSeiten.push({ fassung: NAME[FASSUNG], datei, anmerkungen: info.anmText.length, links: info.links.length, texteGeprueft: m.gezaehlt, bilder: b1.elemente.filter((e) => !e.wortmarke).length, fussEintraege: b1.fussEintraege.length });
        if (MIT_FOTOS) {
          await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
          await page.waitForTimeout(80);
          const ziel = path.join(fotoOrdner, kurz + '.png');
          await page.screenshot({ path: ziel, fullPage: false });
          bildschirmfotos.push(path.relative(WURZEL, ziel));
          if (FASSUNG === 'bilder') {
            const ganz = path.join(VORSCHAU_GANZ, kurz + '-ganz.png');
            await page.screenshot({ path: ganz, fullPage: true });
            bildschirmfotos.push(path.relative(WURZEL, ganz));
          }
        }
      }
      meldeKonsole(s);
      await page.close();
    }
  }

  /* ---------- 6b: Desktop-Breite 1280 px und sehr schmal 320 px ---------- */
  const breit = await neuerKontext(1280, 800, false);
  for (const [kurz, datei] of SEITEN) {
    const s = await oeffne(breit, datei, '', datei + ' @1280');
    const nichtGeladen = await ladeAlleBilder(s.page);
    nichtGeladen.forEach((src) => f(s.ort, 'Bild nicht geladen: ' + src));
    const m = await messe(s.page);
    if (m.scrollBreite > m.clientBreite) f(s.ort, 'waagerechtes Scrollen (scrollWidth ' + m.scrollBreite + ')');
    m.probleme.forEach((p) => f(s.ort, 'Kontrast ' + p.kontrast + ' < ' + p.soll + ' bei „' + p.text + '“'));
    if (datei === 'index.html' || datei === 'haendler.html') {
      // Hauptknopf oben ab 900 px in einer Zeile: „Zum Produkt aus dem Video“ (Abnahme D06), „Coins holen und in den
      // Squad (Konzept)“ (Abnahme D07)
      const zeilen = await s.page.evaluate(() => {
        const k = document.querySelector('.held .knopfreihe .knopf'); if (!k) return -1;
        const r = document.createRange(); const tops = new Set();
        Array.from(k.childNodes).filter((n) => n.nodeType === 3 && n.textContent.trim()).forEach((n) => { r.selectNodeContents(n); Array.from(r.getClientRects()).forEach((x) => tops.add(Math.round(x.top))); });
        return tops.size;
      });
      if (zeilen !== 1) f(s.ort, 'Hauptknopf oben bricht um (' + zeilen + ' Zeilen)');
    }
    if (MIT_FOTOS && FASSUNG === 'bilder') {
      const ziel = path.join(VORSCHAU_GANZ, kurz + '-1280.png');
      await s.page.screenshot({ path: ziel, fullPage: true });
      bildschirmfotos.push(path.relative(WURZEL, ziel));
    }
    meldeKonsole(s);
    await s.page.close();
  }
  await breit.close();
  const schmal = await neuerKontext(320, 640, true);
  for (const [kurz, datei] of SEITEN) {
    const s = await oeffne(schmal, datei, '', datei + ' @320');
    await ladeAlleBilder(s.page);
    const m = await messe(s.page);
    if (m.scrollBreite > m.clientBreite) f(s.ort, 'waagerechtes Scrollen bei 320 px (scrollWidth ' + m.scrollBreite + ')');
    if (MIT_FOTOS && FASSUNG === 'bilder') {
      const ziel = path.join(VORSCHAU_GANZ, kurz + '-320.png');
      await s.page.screenshot({ path: ziel, fullPage: true });
      bildschirmfotos.push(path.relative(WURZEL, ziel));
    }
    meldeKonsole(s);
    await s.page.close();
  }
  await schmal.close();

  /* ---------- 9: Rechnungen und Parameter ---------- */
  async function text(page, sel) { return (await page.textContent(sel)).replace(/\s+/g, ' ').trim(); }
  {
    // Fremder Code wird ignoriert (nur Beispielcodes), Beispielcode aus der Adresse übernommen und an Links weitergereicht
    const s0 = await oeffne(mobil, 'index.html', '?code=Test-12%3Cb%3E', 'index.html ?code=fremd');
    const code0 = await text(s0.page, '.codebox [data-code]');
    if (code0 !== 'CREATOR10') f(s0.ort, 'Fremder Code nicht ignoriert: "' + code0 + '"');
    await s0.page.close();
    const s = await oeffne(mobil, 'index.html', '?code=marco10', 'index.html ?code=');
    const code = await text(s.page, '.codebox [data-code]');
    if (code !== 'MARCO10') f(s.ort, 'Code nicht übernommen/bereinigt: "' + code + '"');
    const href = await s.page.getAttribute('.knopfreihe a[href^="produkt.html"]', 'href');
    if (!/code=MARCO10/.test(href)) f(s.ort, 'Code nicht an den Produkt-Link gehängt: ' + href);
    // Produkt-Tag im Knopf zeigt die 50er-Dose → die Produktseite wählt sie vor (Abnahme D07)
    if (!/[?&]packung=50(&|$)/.test(href)) f(s.ort, 'Knopf „Zum Produkt aus dem Video“ ohne packung=50: ' + href);
    const hinweis = await s.page.isVisible('[data-nur-beispielcode]');
    if (hinweis) f(s.ort, 'Beispielcode-Hinweis trotz Code in der Adresse sichtbar');
    meldeKonsole(s); await s.page.close();
    // Präsentationsmodus ohne Code: Hinweis „Beispielcode …“ sichtbar (normale Ansicht: Satz im Fuß)
    const s2 = await oeffne(mobil, 'index.html', '?anmerkungen=1', 'index.html ?anmerkungen=1 Beispielcode');
    if (!(await s2.page.isVisible('[data-nur-beispielcode]'))) f(s2.ort, 'Beispielcode-Hinweis im Präsentationsmodus nicht sichtbar');
    meldeKonsole(s2); await s2.page.close();
  }
  {
    // Menü-Knopf (390 px): klappt die Hauptnavigation auf, Escape schließt und setzt den Fokus zurück (alle 7 Seiten gleich)
    for (const [, datei] of SEITEN) {
      const s = await oeffne(mobil, datei, '', datei + ' Menü');
      const vorher = await s.page.isVisible('#hauptnav');
      await s.page.click('.menue-knopf');
      const offen = { nav: await s.page.isVisible('#hauptnav'), aria: await s.page.getAttribute('.menue-knopf', 'aria-expanded') };
      await s.page.keyboard.press('Escape');
      const zu = await s.page.evaluate(() => ({ nav: getComputedStyle(document.getElementById('hauptnav')).display !== 'none', aria: document.querySelector('.menue-knopf').getAttribute('aria-expanded'), fokus: document.activeElement === document.querySelector('.menue-knopf') }));
      if (vorher || !offen.nav || offen.aria !== 'true' || zu.nav || zu.aria !== 'false' || !zu.fokus) f(s.ort, 'Menü-Knopf: auf/zu fehlerhaft ' + JSON.stringify({ vorher, offen, zu }));
      meldeKonsole(s); await s.page.close();
    }
  }
  {
    // 13: Tab-Rundgang (D09-Nacharbeit, Abnahme Technik; WCAG 2.2 SC 2.4.11 „Focus Not Obscured“): Kein fokussiertes Element
    // darf – auch nur teilweise – unter der Kaufleiste (Produktseite) oder dem schwebenden Knopf „Anmerkungen ansehen“
    // (Präsentationsmodus) liegen. Mit reduzierter Bewegung, damit der Browser ohne Glätten scrollt.
    const rundgang = async (kontext, datei, query, ort) => {
      const s = await oeffne(kontext, datei, query, ort);
      await s.page.emulateMedia({ reducedMotion: 'reduce' });
      const gesehen = new Set();
      const verdeckt = [];
      for (let i = 0; i < 400; i++) {
        await s.page.keyboard.press('Tab');
        const z = await s.page.evaluate(() => new Promise((ok) => requestAnimationFrame(() => requestAnimationFrame(() => {
          const el = document.activeElement;
          if (!el || el === document.body) return ok({ ende: true });
          if (!el.dataset.rundgang) el.dataset.rundgang = String(Math.random());
          const r = el.getBoundingClientRect();
          const name = (el.innerText || el.getAttribute('aria-label') || el.tagName).replace(/\s+/g, ' ').trim().slice(0, 50);
          const decken = [];
          const leiste = document.querySelector('.kaufleiste');
          if (leiste && !el.closest('.kaufleiste') && getComputedStyle(leiste).visibility === 'visible' && !leiste.hidden) decken.push(['Kaufleiste', leiste.getBoundingClientRect()]);
          const knopf = document.querySelector('.anm-start');
          if (knopf && el !== knopf && !knopf.hidden && knopf.getClientRects().length) decken.push(['Knopf „Anmerkungen ansehen“', knopf.getBoundingClientRect()]);
          const treffer = decken.filter(([, d]) => r.bottom > d.top + 1 && r.top < d.bottom - 1 && r.right > d.left + 1 && r.left < d.right - 1)
            .map(([n, d]) => n + ' (Element ' + Math.round(r.top) + '–' + Math.round(r.bottom) + ' px, verdeckt ab ' + Math.round(d.top) + ' px)');
          ok({ id: el.dataset.rundgang, name, treffer });
        }))));
        if (z.ende || gesehen.has(z.id)) break;
        gesehen.add(z.id);
        z.treffer.forEach((t) => verdeckt.push('„' + z.name + '“ unter ' + t));
      }
      verdeckt.forEach((v) => f(ort, 'Fokus verdeckt: ' + v));
      if (gesehen.size < 5) f(ort, 'Tab-Rundgang erreicht nur ' + gesehen.size + ' Elemente');
      meldeKonsole(s); await s.page.close();
    };
    await rundgang(mobil, 'produkt.html', '', 'produkt.html Tab-Rundgang 390 px');
    await rundgang(mobil, 'produkt.html', '?packung=50', 'produkt.html?packung=50 Tab-Rundgang 390 px');
    const breitTab = await neuerKontext(1280, 800, false);
    await rundgang(breitTab, 'produkt.html', '', 'produkt.html Tab-Rundgang 1280 px');
    await rundgang(breitTab, 'warenkorb.html', '?anmerkungen=1', 'warenkorb.html ?anmerkungen=1 Tab-Rundgang 1280 px');
    await breitTab.close();
    for (const [, datei] of SEITEN) await rundgang(mobil, datei, '?anmerkungen=1', datei + ' ?anmerkungen=1 Tab-Rundgang 390 px');
  }
  {
    // Produktseite: Packung 50 wählen
    const s = await oeffne(mobil, 'produkt.html', '', 'produkt.html Packungswahl');
    const start = await text(s.page, '[data-p-ende]');
    if (start !== '24,99 €') f(s.ort, 'Startwert Endpreis ' + start + ' statt 24,99 €');
    await s.page.click('.option[data-packung="50"]');
    const werte = { preis: await text(s.page, '[data-p-preis]'), je: await text(s.page, '[data-p-je]'), grund: await text(s.page, '[data-p-grund]'), ende: await text(s.page, '[data-p-ende]') };
    // Grundpreis seit der D09-Nacharbeit ohne Recherche-Satz („aus 7 g je Portion gerechnet“ steht als Fußnote und im Fuß)
    const soll = { preis: '39,99 €', je: '0,80 € je Portion', grund: '114,26 € / kg', ende: '44,98 €' };
    Object.keys(soll).forEach((k) => { if (werte[k] !== soll[k]) f(s.ort, k + ' = "' + werte[k] + '" statt "' + soll[k] + '"'); });
    const links = await s.page.$$eval('[data-warenkorb-link]', (as) => as.map((a) => a.getAttribute('href')));
    if (!links.every((h) => /packung=50/.test(h))) f(s.ort, 'Warenkorb-Links ohne packung=50: ' + links.join(', '));
    await s.page.click('.option[data-packung="1"]');
    if ((await text(s.page, '[data-p-ende]')) !== '6,98 €') f(s.ort, 'Endpreis 1 Portion nicht 6,98 €');
    // Kaufleiste (Gestaltung D09): oben unsichtbar, nach dem Kaufknopf sichtbar, Preis und Ziel folgen der Packung
    await s.page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await s.page.waitForTimeout(150);
    const leiste = async () => s.page.evaluate(() => {
      const l = document.querySelector('.kaufleiste'); if (!l) return null;
      const r = l.getBoundingClientRect();
      return { sichtbar: !l.hidden && getComputedStyle(l).visibility !== 'hidden' && r.top < window.innerHeight, preis: l.querySelector('[data-p-preis]').textContent.replace(/\s+/g, ' ').trim(), ziel: l.querySelector('a').getAttribute('href'), oben: Math.round(r.top) };
    });
    const l0 = await leiste();
    if (!l0) f(s.ort, 'Kaufleiste fehlt');
    else {
      if (l0.sichtbar) f(s.ort, 'Kaufleiste schon im ersten Bildschirm sichtbar (verdeckt Preise)');
      await s.page.evaluate(() => window.scrollTo({ top: document.querySelector('#koffein').getBoundingClientRect().top + window.scrollY, behavior: 'instant' }));
      await s.page.waitForTimeout(400);
      const l1 = await leiste();
      if (!l1.sichtbar || l1.preis !== '1,99 €' || !/packung=1(&|$)/.test(l1.ziel)) f(s.ort, 'Kaufleiste nach dem Kaufknopf falsch ' + JSON.stringify(l1));
    }
    meldeKonsole(s); await s.page.close();
  }
  for (const [q, soll, ende] of [['?packung=50', '50', '44,98 €'], ['?packung=10&code=MARCO10', '10', '17,48 €'], ['?packung=quatsch', 'set', '24,99 €']]) {
    // Startpackung aus der Adresse (Knopf der Startseite → produkt.html?packung=50); ungültige Werte → Starter Set
    const s = await oeffne(mobil, 'produkt.html', q, 'produkt.html' + q);
    const z = await s.page.evaluate(() => ({
      gewaehlt: Array.from(document.querySelectorAll('.option[aria-checked="true"]')).map((o) => o.getAttribute('data-packung')),
      ende: document.querySelector('[data-p-ende]').textContent.replace(/\s+/g, ' ').trim(),
      links: Array.from(document.querySelectorAll('[data-warenkorb-link]')).map((a) => a.getAttribute('href')),
      gross: (document.querySelector('[data-intern-held]') || { getAttribute: () => null }).getAttribute('data-intern-aktiv'),
      lage: ['main h1', '.bewertung-kurz', '.optionen .option .preis'].map((sel) => { const el = document.querySelector(sel); return el ? Math.round(el.getBoundingClientRect().top) : null; }),
      h: window.innerHeight
    }));
    if (z.gewaehlt.join() !== soll) f(s.ort, 'gewählt ' + z.gewaehlt.join() + ' statt ' + soll);
    if (z.ende !== ende) f(s.ort, 'Endpreis ' + z.ende + ' statt ' + ende);
    if (!z.links.length || !z.links.every((h) => new RegExp('[?&]packung=' + soll + '(&|$)').test(h))) f(s.ort, 'Warenkorb-Links ohne packung=' + soll + ': ' + z.links.join(', '));
    if (q.includes('code=') && !z.links.every((h) => /code=MARCO10/.test(h))) f(s.ort, 'Code reist nicht mit: ' + z.links.join(', '));
    if (FASSUNG === 'bilder' && z.gross !== 'web-produkt-gross-' + soll) f(s.ort, 'großes Bild ' + z.gross + ' statt web-produkt-gross-' + soll);
    if (z.lage.some((o) => o === null || o >= z.h)) f(s.ort, 'erster Bildschirm 390 × 844: Titel, Bewertung oder erster Preis nicht oben (' + z.lage.join(', ') + ' px)');
    meldeKonsole(s); await s.page.close();
  }
  if (FASSUNG === 'bilder') {
    // großes Bild folgt der Packung, bis in der Galerie geklickt wird; Galerie tauscht Bild und Nachweis
    const s = await oeffne(mobil, 'produkt.html', '', 'produkt.html großes Bild');
    const g = await s.page.evaluate(async () => {
      const warte = () => new Promise((r) => setTimeout(r, 80));
      const gross = document.querySelector('[data-intern-held] img');
      const r = { knoepfe: document.querySelectorAll('[data-intern-galerie] button.mit-bild').length, gross: !!gross };
      if (!gross) return r;
      const src = () => gross.getAttribute('src');
      const unter = () => document.querySelector('[data-intern-held] [data-intern-nachweis]').textContent;
      const fuss = () => Array.from(document.querySelectorAll('[data-intern-liste] li')).map((li) => li.textContent);
      r.start = src(); r.startFuss = fuss();
      for (const p of ['50', '10', '1']) { document.querySelector('.option[data-packung="' + p + '"]').click(); await warte(); r['p' + p] = src(); r['u' + p] = unter(); }
      r.gedruecktBei1 = document.querySelectorAll('[data-intern-galerie] button[aria-pressed="true"]').length;
      const knoepfe = Array.from(document.querySelectorAll('[data-intern-galerie] button.mit-bild'));
      knoepfe[2].click(); await warte();
      r.galerie = src(); r.galerieUnter = unter(); r.galerieAktiv = knoepfe[2].getAttribute('data-intern-aktiv');
      r.gedrueckt = knoepfe.filter((k) => k.getAttribute('aria-pressed') === 'true').length;
      document.querySelector('.option[data-packung="set"]').click(); await warte();
      r.nachKlick = src(); r.fussNachKlick = fuss();
      return r;
    });
    const datei = (k) => (REGISTER[k] || {}).datei;
    if (g.knoepfe !== 5 || !g.gross) f(s.ort, 'Galerie unvollständig ' + JSON.stringify(g));
    else {
      if (g.start !== datei('web-produkt-gross-set')) f(s.ort, 'großes Bild beim Starter Set ' + g.start + ' statt ' + datei('web-produkt-gross-set'));
      for (const p of ['50', '10', '1']) {
        if (g['p' + p] !== datei('web-produkt-gross-' + p)) f(s.ort, 'großes Bild bei ' + p + ': ' + g['p' + p] + ' statt ' + datei('web-produkt-gross-' + p));
        const e = REGISTER['web-produkt-gross-' + p] || {};
        if (g['u' + p] !== (e.unterschrift || e.nachweis)) f(s.ort, 'Nachweis am großen Bild bei ' + p + ' passt nicht');
      }
      if (g.gedruecktBei1) f(s.ort, 'Galerieknopf gedrückt, obwohl das große Bild (1 Portion) nicht in der Galerie ist');
      if (g.galerie !== datei(g.galerieAktiv) || g.gedrueckt !== 1 || g.galerieUnter !== ((REGISTER[g.galerieAktiv] || {}).unterschrift || (REGISTER[g.galerieAktiv] || {}).nachweis)) f(s.ort, 'Galerie tauscht Bild oder Nachweis nicht richtig ' + JSON.stringify({ galerie: g.galerie, gedrueckt: g.gedrueckt }));
      if (g.nachKlick !== g.galerie) f(s.ort, 'großes Bild folgt nach Galerieklick noch der Packung');
      if (!g.startFuss.some((t) => t.endsWith(REGISTER['web-produkt-gross-set'].nachweis))) f(s.ort, 'Fuß ohne Nachweis des großen Bildes');
    }
    meldeKonsole(s); await s.page.close();
  }
  for (const [q, gesamt, versand] of [['', '22,49 €', '0,00 €'], ['?packung=50', '40,98 €', '4,99 €'], ['?packung=10', '16,23 €', '4,99 €'], ['?packung=1', '6,78 €', '4,99 €'], ['?packung=quatsch', '22,49 €', '0,00 €']]) {
    const s = await oeffne(mobil, 'warenkorb.html', q, 'warenkorb.html' + q);
    const g = await text(s.page, '[data-k-gesamt]');
    const v = await text(s.page, '[data-k-versand]');
    if (g !== gesamt) f(s.ort, 'Gesamt ' + g + ' statt ' + gesamt);
    if (v !== versand) f(s.ort, 'Versand ' + v + ' statt ' + versand);
    // erster Bildschirm 390 × 844 je Packung (Folie 08 zeigt ?packung=50): Lieferdatum und Endpreis ganz sichtbar
    const lage = await s.page.evaluate(() => ['#lieferdatum', '[data-k-gesamt]'].map((sel) => { const el = document.querySelector(sel); return el ? Math.round(el.getBoundingClientRect().bottom) : 9999; }));
    if (lage.some((u) => u > 844)) f(s.ort, 'erster Bildschirm 390 × 844: Lieferdatum oder Endpreis endet bei ' + lage.join(' / ') + ' px');
    const danke = await s.page.getAttribute('.express a', 'href');
    const p = q.includes('packung=') && !q.includes('quatsch') ? q.split('=')[1] : 'set';
    if (!danke.includes('packung=' + p)) f(s.ort, 'Danke-Link ohne packung=' + p + ': ' + danke);
    if (FASSUNG === 'bilder') {
      // Vorschaubild passt zur Packung aus der Adresse
      const aktiv = await s.page.getAttribute('[data-warenkorb] [data-intern]', 'data-intern-aktiv');
      if (aktiv !== 'web-warenkorb-' + p) f(s.ort, 'Vorschaubild ' + aktiv + ' statt web-warenkorb-' + p);
    }
    meldeKonsole(s); await s.page.close();
  }
  {
    const s = await oeffne(mobil, 'danke.html', '', 'danke.html Erinnerung');
    if ((await text(s.page, '[data-e-leer]')) !== 'Mo., 14.12.2026') f(s.ort, 'Leer-Tag (3×/Woche) falsch: ' + (await text(s.page, '[data-e-leer]')));
    await s.page.click('button[data-pro-woche="7"]');
    if ((await text(s.page, '[data-e-leer]')) !== 'Do., 26.11.2026') f(s.ort, 'Leer-Tag (täglich) falsch: ' + (await text(s.page, '[data-e-leer]')));
    if ((await text(s.page, '[data-e-erinnern]')) !== 'Sa., 21.11.2026') f(s.ort, 'Erinnerung (täglich) falsch: ' + (await text(s.page, '[data-e-erinnern]')));
    await s.page.click('[data-optin]');
    if (!(await s.page.isVisible('[data-optin-text]'))) f(s.ort, 'Opt-in-Hinweis erscheint nicht');
    meldeKonsole(s); await s.page.close();
    const s2 = await oeffne(mobil, 'danke.html', '?packung=50', 'danke.html ?packung=50');
    if ((await text(s2.page, '[data-e-portionen]')) !== '50 Portionen') f(s2.ort, 'Portionen bei packung=50 falsch');
    if ((await text(s2.page, '[data-k-coins]')) !== '410') f(s2.ort, 'Coins bei packung=50 nicht 410');
    meldeKonsole(s2); await s2.page.close();
    // Shaker nur, wenn die Packung laut Seite einen enthält: set schwarz, 50 pink, 10 und 1 ohne Bild
    for (const [p, schluessel, titel] of [['set', 'web-danke-shaker-set', 'Shaker auspacken, loslegen'], ['50', 'web-danke-shaker-50', 'Shaker auspacken, loslegen'], ['10', null, 'Auspacken, loslegen'], ['1', null, 'Auspacken, loslegen']]) {
      const s3 = await oeffne(mobil, 'danke.html', '?packung=' + p, 'danke.html Shaker ?packung=' + p);
      const z = await s3.page.evaluate(() => {
        const platz = document.querySelector('.schritt-zeile[data-intern]'); const bild = platz.querySelector('.bildplatz');
        return { aktiv: platz.getAttribute('data-intern-aktiv'), sichtbar: !!bild && bild.getClientRects().length > 0, titel: platz.querySelector('h3').textContent.trim() };
      });
      if (z.titel !== titel) f(s3.ort, 'Überschrift „' + z.titel + '“ statt „' + titel + '“');
      if (FASSUNG === 'bilder' && schluessel && z.aktiv !== schluessel) f(s3.ort, 'Shaker-Bild ' + z.aktiv + ' statt ' + schluessel);
      if (!schluessel && (z.aktiv || z.sichtbar)) f(s3.ort, 'Shaker-Bild sichtbar, obwohl die Packung keinen Shaker enthält');
      meldeKonsole(s3); await s3.page.close();
    }
  }
  {
    // Nachkauf (Abnahme D07): squad.html → warenkorb.html?packung=50&nachkauf=1 → danke.html; der Gratis-Shaker kommt nur
    // zur ersten Dose (✔ T22), also kein Shaker-Hinweis im Warenkorb und kein Shaker-Bild auf der Danke-Seite
    const sq = await oeffne(mobil, 'squad.html', '?code=MARCO10', 'squad.html Nachkauf-Links');
    const nl = (await sq.page.$$eval('a[href^="warenkorb.html"]', (as) => as.map((a) => a.getAttribute('href')))).filter((h) => /packung=50/.test(h));
    if (nl.length !== 2 || !nl.every((h) => /[?&]nachkauf=1(&|$)/.test(h) && /code=MARCO10/.test(h))) f(sq.ort, 'Nachkauf-Links ohne nachkauf=1 oder Code: ' + nl.join(', '));
    meldeKonsole(sq); await sq.page.close();
    for (const [q, shakerText] of [['?packung=50', true], ['?packung=50&nachkauf=1', false]]) {
      const s = await oeffne(mobil, 'warenkorb.html', q, 'warenkorb.html' + q + ' Shaker-Hinweis');
      const zusatz = await text(s.page, '[data-k-zusatz]');
      if (/Shaker/.test(zusatz) !== shakerText) f(s.ort, 'Zusatz „' + zusatz + '“ ' + (shakerText ? 'ohne' : 'mit') + ' Shaker-Hinweis');
      if ((await text(s.page, '[data-k-gesamt]')) !== '40,98 €') f(s.ort, 'Gesamt nicht 40,98 €');
      const weiter = await s.page.$$eval('a[data-mit-packung]', (as) => as.map((a) => a.getAttribute('href')));
      if (!weiter.length || !weiter.every((h) => /packung=50/.test(h) && (shakerText || /[?&]nachkauf=1(&|$)/.test(h)))) f(s.ort, 'Danke-Links reichen packung/nachkauf nicht weiter: ' + weiter.join(', '));
      meldeKonsole(s); await s.page.close();
    }
    for (const [q, schluessel, titel] of [['?packung=50&nachkauf=1', null, 'Auspacken, loslegen'], ['?packung=set&nachkauf=1', 'web-danke-shaker-set', 'Shaker auspacken, loslegen']]) {
      const s = await oeffne(mobil, 'danke.html', q, 'danke.html Shaker ' + q);
      const z = await s.page.evaluate(() => {
        const platz = document.querySelector('.schritt-zeile[data-intern]'); const bild = platz.querySelector('.bildplatz');
        return { aktiv: platz.getAttribute('data-intern-aktiv'), sichtbar: !!bild && bild.getClientRects().length > 0, titel: platz.querySelector('h3').textContent.trim() };
      });
      if (z.titel !== titel) f(s.ort, 'Überschrift „' + z.titel + '“ statt „' + titel + '“');
      if (FASSUNG === 'bilder' && schluessel && z.aktiv !== schluessel) f(s.ort, 'Shaker-Bild ' + z.aktiv + ' statt ' + schluessel);
      if (!schluessel && (z.aktiv || z.sichtbar)) f(s.ort, 'Shaker-Bild beim Nachkauf der 50er-Dose sichtbar (Shaker nur zur ersten Dose)');
      meldeKonsole(s); await s.page.close();
    }
  }
  {
    // „Anmerkungen ausblenden“ führt auf dieselbe Seite ohne Parameter
    const s = await oeffne(mobil, 'squad.html', '?anmerkungen=1', 'squad.html ausblenden');
    const h = await s.page.getAttribute('.fuss .nur-anm a', 'href');
    if (h !== 'squad.html') f(s.ort, '„Anmerkungen ausblenden“ zeigt auf "' + h + '"');
    meldeKonsole(s); await s.page.close();
  }
  {
    // Umschalter behalten Packung und Nachkauf (Abnahme D08); Nachkauf blendet Erstkäufer-Texte aus
    const s = await oeffne(mobil, 'danke.html', '?packung=50&nachkauf=1&anmerkungen=1', 'danke.html Nachkauf ausblenden');
    const h = await s.page.getAttribute('.fuss .nur-anm a', 'href');
    if (h !== 'danke.html?packung=50&nachkauf=1') f(s.ort, '„Anmerkungen ausblenden“ zeigt auf "' + h + '" statt danke.html?packung=50&nachkauf=1');
    const sicht = await s.page.evaluate(() => ({
      erst: Array.from(document.querySelectorAll('[data-nur-erstkauf]')).filter((e) => e.getClientRects().length > 0).length,
      nach: Array.from(document.querySelectorAll('[data-nur-nachkauf]')).filter((e) => e.getClientRects().length > 0).length }));
    if (sicht.erst || !sicht.nach) f(s.ort, 'Nachkauf: Erstkäufer-Texte sichtbar (' + sicht.erst + ') oder Nachkauf-Text fehlt (' + sicht.nach + ')');
    meldeKonsole(s); await s.page.close();
    const p = await oeffne(mobil, 'produkt.html', '?packung=50&anmerkungen=1', 'produkt.html ausblenden mit Packung');
    const hp = await p.page.getAttribute('.fuss .nur-anm a', 'href');
    if (!/^produkt\.html\?packung=50(&|$)/.test(hp || '')) f(p.ort, '„Anmerkungen ausblenden“ verliert die Packung: "' + hp + '"');
    meldeKonsole(p); await p.page.close();
  }
  await mobil.close();

  /* ---------- GitHub-Pages-Probe: über HTTP wie auf GitHub Pages (nur Fassung mit Bildern) ---------- */
  if (FASSUNG === 'bilder') {
    const kontext = await neuerKontext(390, 844, true);
    for (const [, datei] of SEITEN) {
      for (const q of ['', '?anmerkungen=1&packung=50&code=MARCO10']) {
        const s = await oeffne(kontext, datei, q, datei + q + ' über HTTP (wie GitHub Pages)', SERVER_URL);
        const nichtGeladen = await ladeAlleBilder(s.page);
        nichtGeladen.forEach((src) => f(s.ort, 'Bild nicht geladen: ' + src));
        const z = await s.page.evaluate(() => ({ register: !!window.INTERN_BILDER, bilder: document.querySelectorAll('img.intern-bild').length, fuss: document.querySelectorAll('[data-intern-liste] li').length }));
        if (!z.register || !z.bilder || !z.fuss) f(s.ort, 'Fremdbilder nicht eingebaut ' + JSON.stringify(z));
        meldeKonsole(s);
        await s.page.close();
      }
    }
    await kontext.close();
  }
}

for (const fassung of FASSUNGEN) {
  FASSUNG = fassung;
  await pruefeFassung();
}
await browser.close();
server.close();

if (extern.length) fehler.push('Netz: ' + extern.length + ' externe Anfragen blockiert: ' + Array.from(new Set(extern)).join(', '));

const bericht = { zeitpunkt: new Date().toISOString(), fassungen: FASSUNGEN.map((x) => NAME[x]), seiten: ergebnisSeiten, fehler, warnungen, notizen, externeAnfragen: extern.length, bilder: bildschirmfotos };
if (berichtPfad) fs.writeFileSync(berichtPfad, JSON.stringify(bericht, null, 2));
console.log(JSON.stringify({ fassungen: FASSUNGEN.map((x) => NAME[x]), seiten: ergebnisSeiten, externeAnfragen: extern.length, notizen, bildschirmfotos }, null, 2));
if (warnungen.length) console.log('\nWARNUNG (' + warnungen.length + '):\n- ' + warnungen.join('\n- '));
if (fehler.length) {
  console.log('\nFEHLER (' + fehler.length + '):\n- ' + fehler.join('\n- '));
  process.exit(1);
}
console.log('\nAlle Prüfungen bestanden (' + FASSUNGEN.map((x) => x === 'bilder' ? 'Fassung mit Bildern inkl. GitHub-Pages-Probe' : 'Rückfall ohne Fremdbilder').join(' und ') + ').');
