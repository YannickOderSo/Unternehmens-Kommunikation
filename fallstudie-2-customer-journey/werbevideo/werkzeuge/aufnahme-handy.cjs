// Echte Bildschirmaufnahme der Konzept-Webseite (Startseite oben, „Dein Code ist schon drin.“ mit CREATOR10 + „Werbung“)
// für die Montag-Szene des Werbespots „Mein Moment.“ (Workflow D11). Lokal, Netz nach außen gesperrt.
// Handy 390 × 844 CSS-Pixel bei dreifacher Pixeldichte (1170 × 2532 px), damit die Aufnahme im Spot nie vergrößert wird.
// Ausgabe: ../intern/d11/bilder/handy-start.png · Aufruf: node aufnahme-handy.cjs (Playwright aus /opt/node-tools; anderer
// Pfad über PLAYWRIGHT_CORE=...)
// Werbespot HOLY (studentisches Konzept, HS Kaiserslautern) · KI-gestützt erstellt · Prüfung durch die Gruppe offen
const path = require('path');
const fs = require('fs');
const { chromium } = require(process.env.PLAYWRIGHT_CORE || '/opt/node-tools/node_modules/playwright-core');
const WEB = path.resolve(__dirname, '../../konzept-website') + '/';
const AUS = path.resolve(__dirname, '../intern/d11/bilder');

(async () => {
  fs.mkdirSync(AUS, { recursive: true });
  const b = await chromium.launch({ args: ['--no-sandbox'] });
  const k = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
  let extern = 0;
  await k.route('**/*', r => { if (r.request().url().startsWith('file://')) r.continue(); else { extern++; r.abort(); } });
  const p = await k.newPage();
  await p.goto('file://' + WEB + 'index.html');
  await p.evaluate(() => document.fonts.ready);
  await p.evaluate(() => Promise.race([new Promise(r => setTimeout(r, 3000)),
    Promise.all([...document.images].map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })))]));
  await p.addStyleTag({ content: 'html{scroll-behavior:auto!important} *{caret-color:transparent}' });
  await p.waitForTimeout(400);
  await p.screenshot({ path: AUS + '/handy-start.png' });
  console.log('handy-start.png gespeichert · externe Anfragen blockiert:', extern);
  await b.close();
})();
