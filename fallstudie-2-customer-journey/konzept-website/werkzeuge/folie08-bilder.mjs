// Bildschirmfotos der Konzept-Webseite für Folie 08 der Präsentation: 390 × 844, je Seite der Ausschnitt, den die
// Anmerkung auf der Folie beschreibt (Produktseite mit gewählter 50er-Dose ab „Packung wählen“, Danke-Seite ab „So geht's weiter“).
//
// Aufruf (im Repository, PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core oder eigener Pfad):
//   öffentlich:  node fallstudie-2-customer-journey/konzept-website/werkzeuge/folie08-bilder.mjs
//                → fallstudie-2-customer-journey/praesentation/bilder/konzept-0n-….png (versioniert)
//                  Anfragen nach konzept-website/intern/ sind gesperrt: Platzhalter wie im Repository, keine HOLY-Fotos.
//   intern:      node fallstudie-2-customer-journey/konzept-website/werkzeuge/folie08-bilder.mjs --intern
//                → fallstudie-2-customer-journey/praesentation/intern/bilder/konzept-0n-….png (per .gitignore ausgeschlossen)
//                  mit den HOLY-Produktbildern aus konzept-website/intern/ (nur für den Vortrag im Hörsaal).
//   Optional als weiteres Argument ein anderer Zielordner; mit --intern muss er per .gitignore ausgeschlossen sein,
//   ohne --intern darf er nicht unter einem intern/-Ordner liegen (Prüfung mit git check-ignore).
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const { chromium } = await import((process.env.PLAYWRIGHT_CORE || '/opt/node-tools/node_modules/playwright-core') + '/index.mjs');

const WEBSEITE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PRAESENTATION = path.resolve(WEBSEITE, '..', 'praesentation');
const INTERN_URL = pathToFileURL(path.join(WEBSEITE, 'fremdbilder')).href + '/';
const args = process.argv.slice(2);
const INTERN = args.includes('--intern');
const zielArg = args.find((a) => !a.startsWith('--'));
const ziel = path.resolve(zielArg || (INTERN ? path.join(PRAESENTATION, 'fremdbilder') : path.join(PRAESENTATION, 'bilder')));

// Sicherung: HOLY-Fotos nie in einen versionierten Ordner, öffentliche Bilder nicht in intern/
const ignoriert = spawnSync('git', ['check-ignore', '-q', path.join(ziel, 'konzept-01-landingpage.png')], { cwd: WEBSEITE }).status === 0;
// seit Freigabe KI-Nachweis FS2 Nr. 17 (03.11.2026) sind die Fremdbilder veröffentlicht: kein Zwang mehr zu einem ausgeschlossenen Ordner
if (!INTERN && (ignoriert || /[\\/]intern([\\/]|$)/.test(ziel))) { console.error('Abbruch: öffentliche Fassung gehört nicht nach ' + ziel); process.exit(2); }
if (INTERN && !fs.existsSync(path.join(WEBSEITE, 'fremdbilder', 'register.js'))) { console.error('Abbruch: konzept-website/fremdbilder/register.js fehlt.'); process.exit(2); }
fs.mkdirSync(ziel, { recursive: true });

const liste = [
  ['index.html', null, 'konzept-01-landingpage.png'],
  ['koffein-check.html', null, 'konzept-02-koffein-check.png'],
  ['produkt.html', '#packung-titel', 'konzept-03-produktseite.png'],
  ['warenkorb.html', null, 'konzept-04-warenkorb.png'],
  ['danke.html', '#h-weiter', 'konzept-05-danke.png'],
];
const b = await chromium.launch({ args: ['--no-sandbox'] });
const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
const fehler = [];
p.on('pageerror', (e) => fehler.push(e.message));
await p.route('**/*', (r) => {
  const u = r.request().url();
  if (/^https?:/i.test(u)) return r.abort();                    // keine Anfragen nach außen
  if (!INTERN && u.startsWith(INTERN_URL)) return r.abort();      // öffentliche Fassung: intern/ gesperrt
  return r.continue();
});
for (const [datei, anker, name] of liste) {
  await p.goto(pathToFileURL(path.join(WEBSEITE, datei)).href);
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
  const internBilder = await p.evaluate(() => document.querySelectorAll('img.intern-bild').length);
  if (nichtGeladen.length) fehler.push(datei + ': nicht geladen ' + nichtGeladen.join(', '));
  if (!INTERN && internBilder) fehler.push(datei + ': interne Bilder in der öffentlichen Fassung');
  if (anker) {
    await p.evaluate((a) => {
      const el = document.querySelector(a);
      const oben = document.querySelector('.hinweisbalken').getBoundingClientRect().height;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - oben - 14, behavior: 'instant' });
    }, anker);
  }
  await p.waitForTimeout(250);
  await p.screenshot({ path: path.join(ziel, name) });
  console.log(name, anker || 'oben', INTERN ? '(intern, ' + internBilder + ' Bilder auf der Seite)' : '(öffentlich)');
}
await b.close();
if (fehler.length) { console.error('FEHLER:\n- ' + fehler.join('\n- ')); process.exit(1); }
console.log('→ ' + path.relative(process.cwd(), ziel));
