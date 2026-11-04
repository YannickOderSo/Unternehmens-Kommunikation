// Rendert buehne.html deterministisch mit Playwright (Netz nach außen gesperrt, nur der eigene lokale Server).
//   node render.cjs bilder <ziel> <skala> t1 t2 ...  → PNG-Standbilder (Skala 1 = 1080 × 1920, 0.5 = 540 × 960)
//   node render.cjs folge <ziel> <vonBild> <bisBild>  → JPEG-Bildfolge 30 fps, 1080 × 1920; Bilder mit Bewegungsunschärfe
//        (window.__unschaerfe(t) > 1) als Zwischenbilder NNNN_k.jpg, die unschaerfe.py zu NNNN.jpg mittelt
// Pfade: buehne.html liegt hier, bilder/ → ../intern/d11/bilder/, schriften/ → ../../konzept-website/schriften/
// Werbespot HOLY (studentisches Konzept, HS Kaiserslautern) · KI-gestützt erstellt · Prüfung durch die Gruppe offen
const path = require('path'), fs = require('fs'), http = require('http');
const { chromium } = require(process.env.PLAYWRIGHT_CORE || '/opt/node-tools/node_modules/playwright-core');
const HIER = __dirname;
const WURZELN = { 'bilder/': path.resolve(HIER, '../intern/d11/bilder'), 'schriften/': path.resolve(HIER, '../../konzept-website/schriften'), '': HIER };
const TYP = { '.html': 'text/html; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2' };
const FPS = 30, VERSCHLUSS = 0.5; // halbe Bilddauer (180°)
const server = http.createServer((q, a) => {
  const rel = decodeURIComponent(q.url.split('?')[0]).replace(/^\/+/, '');
  const pre = Object.keys(WURZELN).find(k => rel.startsWith(k));
  const basis = WURZELN[pre], f = path.normalize(path.join(basis, rel.slice(pre.length)));
  if (!f.startsWith(basis) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { a.writeHead(404); a.end(); return; }
  a.writeHead(200, { 'Content-Type': TYP[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(a);
});
(async () => {
  const [modus, ziel, ...rest] = process.argv.slice(2);
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const basis = `http://127.0.0.1:${server.address().port}`;
  const skala = modus === 'bilder' ? Number(rest.shift()) : 1;
  const b = await chromium.launch({ args: ['--no-sandbox', '--force-color-profile=srgb', '--hide-scrollbars'] });
  const k = await b.newContext({ viewport: { width: Math.round(1080 * skala), height: Math.round(1920 * skala) }, deviceScaleFactor: 1 });
  let extern = 0;
  await k.route('**/*', r => { if (r.request().url().startsWith(basis)) r.continue(); else { extern++; r.abort(); } });
  const pg = await k.newPage(); const fehler = [];
  pg.on('pageerror', e => fehler.push(String(e))); pg.on('requestfailed', r => fehler.push('fehlgeschlagen: ' + r.url()));
  await pg.goto(`${basis}/buehne.html?s=${skala}`); await pg.evaluate(() => window.__bereit);
  const schriften = [...new Set(await pg.evaluate(() => [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family)))];
  fs.mkdirSync(ziel, { recursive: true });
  const setze = t => pg.evaluate(t => window.__setTime(t), t);
  if (modus === 'bilder') for (const s of rest.map(Number)) {
    await setze(s); await pg.screenshot({ path: `${ziel}/t${s.toFixed(2)}.png` });
  } else {
    const [von, bis] = rest.map(Number);
    for (let f = von; f < bis; f++) {
      const t = f / FPS, n = await pg.evaluate(t => window.__unschaerfe(t), t), name = String(f).padStart(4, '0');
      if (n <= 1) { await setze(t); await pg.screenshot({ path: `${ziel}/${name}.jpg`, type: 'jpeg', quality: 96 }); continue; }
      for (let i = 0; i < n; i++) { // Zwischenzeiten ab t vorwärts: ein Bild auf einem Schnitt mischt nie zwei Szenen
        await setze(t + (i / n) * VERSCHLUSS / FPS);
        await pg.screenshot({ path: `${ziel}/${name}_${i}.jpg`, type: 'jpeg', quality: 96 });
      }
    }
  }
  schriften.push(...await pg.evaluate(() => [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family)));
  console.log('Schriften:', [...new Set(schriften)].join(', '), '· extern blockiert:', extern, '· Fehler:', fehler.join(' | ') || 'keine');
  await b.close(); server.close();
})();
