// Bildschirmfotos der Konzept-Webseite für Folie 08 der Präsentation: 390 × 844, je Seite der Ausschnitt, den die
// Anmerkung auf der Folie beschreibt. Rahmen 3–5 zeigen durchgehend Marcos 50er-Dose (Persona: 50er-Pulverdose auf
// Vorrat): Produktseite mit ?packung=50 (vorgewählte 50er-Dose, wie nach dem Knopf der Startseite) ab „Packung wählen“,
// Warenkorb und Danke-Seite mit ?packung=50 (Danke-Seite seit der D09-Nacharbeit von oben: Kopf, „Danke!“ und die
// Squad-Karte mit „Squad beitreten“). So passen Bild und Anmerkungszeile zusammen (Abnahme D06, D07, D09).
// Seit der Gestaltung D09 („Kampagnen-Look“) prüft das Skript zusätzlich, dass der Inhalt, den die Anmerkungszeile auf
// Folie 08 nennt, ganz im Bild steht (unter der Hinweisleiste, über dem unteren Rand): 01 Code und beide Wege („Code
// steht schon da, zwei klare Wege“), 02 erster Punkt von „Kurz gesagt“ („Koffein als Text statt Etikettbild“), 03 die
// 50er-Dose mit Preis je Portion und Grundpreis („Preis je Portion und Grundpreis“), 04 Lieferdatum und Endpreis („ein
// Liefertermin, Endpreis vorab“), 05 „Danke!“ und der Knopf „Squad beitreten“ („Squad in einem Schritt statt Sackgasse“;
// D09-Nacharbeit: vorher war die Squad-Karte hinter „Deine Bestellung“ aus dem Bild gerutscht). 03 verlangt zusätzlich die
// Zeile „Endpreis inkl. Versand“ ganz im Bild (vorher halb abgeschnitten). Die Hinweisleiste muss in jedem Bild ganz oben
// stehen; ihren Text schneidet auf Folie 08 seit der D09-Nacharbeit keine Rahmenecke mehr an (08-mockups.css: schwarzer
// Streifen über dem Bildschirmfoto wie eine Statusleiste).
//
// Aufruf (im Repository, PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core oder eigener Pfad):
//   mit --intern: Fassung mit Bildern (Standard der Webseite; der Schaltername stammt aus der Zeit vor dem
//                Veröffentlichungsbeschluss)
//                node fallstudie-2-customer-journey/konzept-website/werkzeuge/folie08-bilder.mjs --intern
//                → fallstudie-2-customer-journey/praesentation/fremdbilder/konzept-0n-….png (versioniert)
//                  mit den Fremdbildern aus konzept-website/fremdbilder/; Veröffentlichung von der Gruppe beschlossen
//                  (KI-Nachweis FS2 Nr. 17), keine Genehmigung der Rechteinhaber eingeholt; nicht kommerziell, für die
//                  Lehrveranstaltung; keine eigenen Fotos der Gruppe.
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

// Sicherung: Der Rückfall gehört in einen versionierten Ordner außerhalb von intern/ (seit dem Veröffentlichungsbeschluss
// der Gruppe, KI-Nachweis FS2 Nr. 17, sind auch die Bilder mit Fremdbildern veröffentlicht, für sie gibt es keinen Zwang
// zu einem bestimmten Ordner)
const ignoriert = spawnSync('git', ['check-ignore', '-q', path.join(ziel, 'konzept-01-landingpage.png')], { cwd: WEBSEITE }).status === 0;
if (!MIT_BILDERN && (ignoriert || /[\\/]intern([\\/]|$)/.test(ziel))) { console.error('Abbruch: Der Rückfall ohne Fremdbilder gehört nicht nach ' + ziel + ' (ausgeschlossen oder unter intern/).'); process.exit(2); }
if (MIT_BILDERN && !fs.existsSync(path.join(WEBSEITE, 'fremdbilder', 'register.js'))) { console.error('Abbruch: konzept-website/fremdbilder/register.js fehlt – ohne Register gibt es keine Fassung mit Bildern.'); process.exit(2); }
fs.mkdirSync(ziel, { recursive: true });

// [Datei, Adresszusatz, Sprungziel, Ausgabe, Elemente, die ganz im Bild stehen müssen (Anmerkung auf Folie 08)]
const liste = [
  ['index.html', '', null, 'konzept-01-landingpage.png', ['.codebox', '.held .knopfreihe']],
  ['koffein-check.html', '', null, 'konzept-02-koffein-check.png', ['.kurz h2', '.kurz li']],
  ['produkt.html', '?packung=50', '#packung-titel', 'konzept-03-produktseite.png', ['.option[data-packung="50"]', '.option[data-packung="1"]', '#preisbaustein .endpreis']],
  ['warenkorb.html', '?packung=50', null, 'konzept-04-warenkorb.png', ['#lieferdatum', '[data-k-gesamt]']],
  ['danke.html', '?packung=50', null, 'konzept-05-danke.png', ['.kopf .wortmarke', 'main h1', '#squad-einstieg .knopf']],
];
// Rahmen auf Folie 08 (praesentation/css/folien/pfad.css 5.14 und 08-mockups.css): Bildschirm 220 − 2 × 12 = 196 px breit,
// Eckradius 34 px, darüber ein 12 px hoher schwarzer Streifen. Daraus: Wo schneidet die Rundung das Bildschirmfoto
// (390 px breit) an? Der Text der Hinweisleiste muss ganz innerhalb der Rundung liegen (Abnahme Gestaltung D09).
const RAHMEN = { schirm: 196, radius: 34, streifen: 12 };
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
for (const [datei, query, anker, name, imBild] of liste) {
  await p.goto(pathToFileURL(path.join(WEBSEITE, datei)).href + query);
  await p.evaluate(() => document.fonts.ready);
  // Produktseite: Marcos Vorratsdose (Persona: 50er-Dose auf Vorrat) ist über ?packung=50 vorgewählt (Abnahme D07)
  if (datei === 'produkt.html') {
    const gewaehlt = await p.evaluate(() => Array.from(document.querySelectorAll('.option[aria-checked="true"]')).map((o) => o.getAttribute('data-packung')).join());
    if (gewaehlt !== '50') fehler.push(datei + query + ': vorgewählt ist „' + gewaehlt + '“ statt 50');
  }
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
  if (query.includes('packung=50') && datei !== 'produkt.html') {
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
  // Inhalt der Anmerkung ganz im Bild (unter der Hinweisleiste, über dem unteren Rand), Hinweisleiste oben sichtbar
  const lage = await p.evaluate((liste) => {
    const oben = document.querySelector('.hinweisbalken').getBoundingClientRect().bottom;
    const bar = document.querySelector('.hinweisbalken').getBoundingClientRect();
    return liste.map((sel) => { const el = document.querySelector(sel); if (!el) return sel + ' fehlt'; const r = el.getBoundingClientRect(); return (r.top >= oben - 1 && r.bottom <= window.innerHeight) ? null : sel + ' bei ' + Math.round(r.top) + '–' + Math.round(r.bottom) + ' px'; }).filter(Boolean)
      .concat(bar.top === 0 && bar.left >= 0 && bar.right <= window.innerWidth ? [] : ['Hinweisleiste nicht ganz oben im Bild']);
  }, imBild);
  if (lage.length) fehler.push(name + ': nicht ganz im Bild – ' + lage.join(', '));
  // Hinweisleiste im Handyrahmen: keine Textzeile in der Eckrundung
  const ecke = await p.evaluate((R) => {
    const s = R.schirm / window.innerWidth;                     // Bildpixel → Folienpixel
    const rad = R.radius, breite = R.schirm;
    const innen = (x, y) => {                                   // Punkt (Folienpixel, y ab Oberkante Bildschirm) innerhalb der Rundung?
      const cx = x < rad ? rad : (x > breite - rad ? breite - rad : x);
      return y >= rad || (x - cx) ** 2 + (y - rad) ** 2 <= rad * rad;
    };
    const bar = document.querySelector('.hinweisbalken'); const r = document.createRange(); const aus = [];
    const w = document.createTreeWalker(bar, NodeFilter.SHOW_TEXT);
    for (let n = w.nextNode(); n; n = w.nextNode()) {
      if (!n.textContent.trim()) continue;
      r.selectNodeContents(n);
      for (const q of r.getClientRects()) {
        const oben = R.streifen + q.top * s, unten = R.streifen + q.bottom * s;
        if (![[q.left * s, oben], [q.right * s, oben], [q.left * s, unten], [q.right * s, unten]].every(([x, y]) => innen(x, y))) aus.push(Math.round(q.left) + '–' + Math.round(q.right) + ' px in Zeile ab ' + Math.round(q.top) + ' px');
      }
    }
    return aus;
  }, RAHMEN);
  if (ecke.length) fehler.push(name + ': Hinweisleiste im Rahmen von Folie 08 angeschnitten (' + ecke.join(', ') + ')');
  await p.screenshot({ path: path.join(ziel, name) });
  console.log(name, (query || '') + (anker ? ' ' + anker : ' oben'), MIT_BILDERN ? '(mit Bildern, ' + fremdBilder + ' Fremdbilder auf der Seite)' : '(Rückfall ohne Fremdbilder)');
}
await b.close();
if (fehler.length) { console.error('FEHLER:\n- ' + fehler.join('\n- ')); process.exit(1); }
console.log('→ ' + path.relative(process.cwd(), ziel));
