// Rendert die Bühne buehne.html Bild für Bild (1080 × 1920, 30 fps) mit Playwright.
// Ein kleiner lokaler Server (127.0.0.1) liefert fallstudie-2-customer-journey/ aus; alle anderen Anfragen sind gesperrt.
// Aufruf:
//   node render.cjs                      → alle Bilder nach ../intern/bilder-folge/NNNN.jpg
//   node render.cjs --standbild 2.4 9.5  → einzelne Standbilder nach ../intern/standbilder/t<sek>.png
// Werbespot HOLY (studentisches Konzept, HS Kaiserslautern) · KI-gestützt erstellt · Prüfung durch die Gruppe offen
const path = require('path');
const fs = require('fs');
const http = require('http');
const { chromium } = require(process.env.PLAYWRIGHT_CORE || '/opt/node-tools/node_modules/playwright-core');

const WURZEL = path.resolve(__dirname, '../..');
const DAUER = 26.8, FPS = 30;
const TYP = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.webp': 'image/webp', '.woff2': 'font/woff2', '.css': 'text/css' };

const server = http.createServer((q, a) => {
  const p = path.normalize(path.join(WURZEL, decodeURIComponent(q.url.split('?')[0])));
  if (!p.startsWith(WURZEL) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { a.writeHead(404); a.end(); return; }
  a.writeHead(200, { 'Content-Type': TYP[path.extname(p)] || 'application/octet-stream' });
  fs.createReadStream(p).pipe(a);
});

(async () => {
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const basis = `http://127.0.0.1:${server.address().port}`;
  const b = await chromium.launch({ args: ['--no-sandbox', '--force-color-profile=srgb', '--hide-scrollbars'] });
  const k = await b.newContext({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  let extern = 0;
  await k.route('**/*', r => { if (r.request().url().startsWith(basis)) r.continue(); else { extern++; r.abort(); } });
  const p = await k.newPage();
  const fehler = [];
  p.on('pageerror', e => fehler.push(String(e)));
  p.on('requestfailed', r => fehler.push('Anfrage fehlgeschlagen: ' + r.url()));
  await p.goto(basis + '/werbevideo/werkzeuge/buehne.html');
  await p.evaluate(() => window.__bereit);
  const schriften = await p.evaluate(() => [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family));
  console.log('Schriften geladen:', [...new Set(schriften)].join(', '));

  const i = process.argv.indexOf('--standbild');
  if (i > 0) {
    const aus = path.resolve(__dirname, '../intern/standbilder'); fs.mkdirSync(aus, { recursive: true });
    for (const s of process.argv.slice(i + 1).map(Number)) {
      await p.evaluate(t => window.__setTime(t), s);
      await p.screenshot({ path: `${aus}/t${s.toFixed(2)}.png` });
    }
  } else {
    const aus = path.resolve(__dirname, '../intern/bilder-folge'); fs.mkdirSync(aus, { recursive: true });
    const n = Math.round(DAUER * FPS);
    for (let f = 0; f < n; f++) {
      await p.evaluate(t => window.__setTime(t), f / FPS);
      await p.screenshot({ path: `${aus}/${String(f).padStart(4, '0')}.jpg`, type: 'jpeg', quality: 96 });
      if (f % 60 === 0) process.stdout.write(`${f}/${n} `);
    }
    console.log('\nBilder:', n);
  }
  console.log('externe Anfragen:', extern, '· Fehler:', fehler.length ? fehler.join(' | ') : 'keine');
  await b.close(); server.close();
})();
