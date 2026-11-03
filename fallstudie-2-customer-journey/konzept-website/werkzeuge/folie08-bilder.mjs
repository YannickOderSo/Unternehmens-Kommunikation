// Bildschirmfotos der Konzept-Webseite für Folie 08 der Präsentation: 390 × 844, je Seite der Ausschnitt, den die
// Anmerkung auf der Folie beschreibt. Rahmen 3–5 zeigen durchgehend Marcos 50er-Dose (Persona: 50er-Pulverdose auf
// Vorrat): Produktseite mit gewählter 50er-Dose ab „Packung wählen“, Warenkorb und Danke-Seite mit ?packung=50
// (Danke-Seite ab „So geht's weiter“). So passen Bild und Anmerkungszeile zusammen (Abnahme D06).
//
// Aufruf (im Repository, PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core oder eigener Pfad):
//   mit --intern: Fassung mit Bildern (Standard der Webseite; der Schaltername stammt aus der Zeit vor der Freigabe)
//                node fallstudie-2-customer-journey/konzept-website/werkzeuge/folie08-bilder.mjs --intern
//                → fallstudie-2-customer-journey/praesentation/fremdbilder/konzept-0n-….png (versioniert)
//                  mit den Fremdbildern aus konzept-website/fremdbilder/, veröffentlicht mit Freigabe (KI-Nachweis FS2
//                  Nr. 17), nicht kommerziell, für die Lehrveranstaltung; keine eigenen Fotos der Gruppe.
//   ohne Schalter: Rückfall ohne Fremdbilder (Anfragen nach konzept-website/fremdbilder/ gesperrt, eigene Zeichnungen
//                und Platzhalter) für die Rückfall-Kacheln der Präsentation
//                node fallstudie-2-customer-journey/konzept-website/werkzeuge/folie08-bilder.mjs
//                → fallstudie-2-customer-journey/praesentation/bilder/konzept-0n-….png (versioniert)
//   Optional als weiteres Argument ein anderer Zielordner. Der Rückfall darf nicht unter einem intern/-Ordner oder in
//   einem ausgeschlossenen Ordner landen (Prüfung mit git check-ignore); die Fassung mit Bildern darf überall hin.
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const { chromium } = await import((process.env.PLAYWRIGHT_CORE || '/opt/node-tools/node_modules/playwright-core') + '/index.mjs');

const WEBSEITE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PRAESENTATION = path.resolve(WEBSEITE, '..', 'praesentation');
const FREMD_URL = pathToFileURL(path.join(WEBSEITE, 'fremdbilder')).href + '/';
const args = process.argv.slice(2);
const MIT_BILDERN = args.includes('--intern');                     // Name des Schalters bleibt aus technischen Gründen
const zielArg = args.find((a) => !a.startsWith('--'));
const ziel = path.resolve(zielArg || (MIT_BILDERN ? path.join(PRAESENTATION, 'fremdbilder') : path.join(PRAESENTATION, 'bilder')));

// Sicherung: Der Rückfall gehört in einen versionierten Ordner außerhalb von intern/ (seit der Freigabe KI-Nachweis
// FS2 Nr. 17 sind auch die Bilder mit Fremdbildern veröffentlicht, für sie gibt es keinen Zwang zu einem bestimmten Ordner)
const ignoriert = spawnSync('git', ['check-ignore', '-q', path.join(ziel, 'konzept-01-landingpage.png')], { cwd: WEBSEITE }).status === 0;
if (!MIT_BILDERN && (ignoriert || /[\\/]intern([\\/]|$)/.test(ziel))) { console.error('Abbruch: Der Rückfall ohne Fremdbilder gehört nicht nach ' + ziel + ' (ausgeschlossen oder unter intern/).'); process.exit(2); }
if (MIT_BILDERN && !fs.existsSync(path.join(WEBSEITE, 'fremdbilder', 'register.js'))) { console.error('Abbruch: konzept-website/fremdbilder/register.js fehlt – ohne Register gibt es keine Fassung mit Bildern.'); process.exit(2); }
fs.mkdirSync(ziel, { recursive: true });

// [Datei, Adresszusatz, Sprungziel, Ausgabe]
const liste = [
  ['index.html', '', null, 'konzept-01-landingpage.png'],
  ['koffein-check.html', '', null, 'konzept-02-koffein-check.png'],
  ['produkt.html', '', '#packung-titel', 'konzept-03-produktseite.png'],
  ['warenkorb.html', '?packung=50', null, 'konzept-04-warenkorb.png'],
  ['danke.html', '?packung=50', '#h-weiter', 'konzept-05-danke.png'],
];
const b = await chromium.launch({ args: ['--no-sandbox'] });
const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
const fehler = [];
p.on('pageerror', (e) => fehler.push(e.message));
await p.route('**/*', (r) => {
  const u = r.request().url();
  if (/^https?:/i.test(u)) return r.abort();                        // keine Anfragen nach außen
  if (!MIT_BILDERN && u.startsWith(FREMD_URL)) return r.abort();     // Rückfall: fremdbilder/ gesperrt
  return r.continue();
});
for (const [datei, query, anker, name] of liste) {
  await p.goto(pathToFileURL(path.join(WEBSEITE, datei)).href + query);
  await p.evaluate(() => document.fonts.ready);
  // Produktseite: Marcos Vorratsdose (Persona: 50er-Dose auf Vorrat) wählen
  if (datei === 'produkt.html') await p.click('.option[data-packung="50"]');
  // alle Bilder laden (lazy → eager), damit nichts halb geladen im Bildschirmfoto steht
  const nichtGeladen = await p.evaluate(async () => {
    const imgs = Array.from(document.images);
    imgs.forEach((i) => { if (i.loading === 'lazy') i.loading = 'eager'; });
    await Promise.all(imgs.map((i) => (i.complete ? null : new Promise((ok) => { i.addEventListener('load', ok, { once: true }); i.addEventListener('error', ok, { once: true }); setTimeout(ok, 5000); }))));
    await Promise.all(imgs.filter((i) => i.complete && i.naturalWidth).map((i) => i.decode().catch(() => null)));
    return Array.from(document.images).filter((i) => !i.complete || !i.naturalWidth).map((i) => i.getAttribute('src'));
  });
  const fremdBilder = await p.evaluate(() => document.querySelectorAll('img.intern-bild').length);
  if (nichtGeladen.length) fehler.push(datei + ': nicht geladen ' + nichtGeladen.join(', '));
  if (!MIT_BILDERN && fremdBilder) fehler.push(datei + ': Fremdbilder im Rückfall');
  if (MIT_BILDERN && !fremdBilder) fehler.push(datei + ': keine Fremdbilder in der Fassung mit Bildern');
  // Warenkorb und Danke-Seite: wirklich die 50er-Dose (Posten, Preis und Shaker so, wie die Seite sie selbst berechnet)
  if (query.includes('packung=50')) {
    const k = await p.evaluate(() => ({ name: (document.querySelector('[data-k-name]') || {}).textContent || '', gesamt: (document.querySelector('[data-k-gesamt]') || {}).textContent || '', coins: (document.querySelector('[data-k-coins]') || {}).textContent || '', shaker: (document.querySelector('.schritt-zeile[data-intern]') || { getAttribute: () => null }).getAttribute('data-intern-aktiv') }));
    if (datei === 'warenkorb.html' && !/50 Portionen/.test(k.name)) fehler.push(datei + ': Posten ist nicht die 50er-Dose (' + k.name + ')');
    if (MIT_BILDERN && datei === 'danke.html' && k.shaker !== 'web-danke-shaker-50') fehler.push(datei + ': Shaker-Bild ' + k.shaker + ' statt web-danke-shaker-50');
    console.log('  ' + datei + query + ': ' + (k.name ? k.name + ', Gesamt ' + k.gesamt.trim() : '') + (k.coins ? ' · Coins ' + k.coins : '') + (k.shaker ? ' · Shaker ' + k.shaker : ''));
  }
  if (anker) {
    await p.evaluate((a) => {
      const el = document.querySelector(a);
      const oben = document.querySelector('.hinweisbalken').getBoundingClientRect().height;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - oben - 14, behavior: 'instant' });
    }, anker);
  }
  await p.waitForTimeout(250);
  await p.screenshot({ path: path.join(ziel, name) });
  console.log(name, (query || '') + (anker ? ' ' + anker : ' oben'), MIT_BILDERN ? '(mit Bildern, ' + fremdBilder + ' Fremdbilder auf der Seite)' : '(Rückfall ohne Fremdbilder)');
}
await b.close();
if (fehler.length) { console.error('FEHLER:\n- ' + fehler.join('\n- ')); process.exit(1); }
console.log('→ ' + path.relative(process.cwd(), ziel));
