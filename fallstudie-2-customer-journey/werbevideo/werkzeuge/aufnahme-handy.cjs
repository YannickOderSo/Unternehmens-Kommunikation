// Bildschirmaufnahmen der Konzept-Webseite für den Werbespot (Fassung mit Bildern, lokal, Netz gesperrt).
// Handy 390 × 844 CSS-Pixel bei dreifacher Pixeldichte (1170 × 2532 px), damit die Aufnahme im Spot nie vergrößert wird.
// Die Seite wird Bild für Bild zeitgesteuert gescrollt (30 fps, feste Easing-Kurve, keine Zufallswerte); Tipps zeigt die
// Bühne als eigene Grafik. Ausgabe: ../intern/handy/<szene>/NNNN.png bzw. ../intern/handy/<name>.png
// Aufruf: node aufnahme-handy.cjs   (Playwright aus /opt/node-tools; anderer Pfad über PLAYWRIGHT_CORE=...)
// Werbespot HOLY (studentisches Konzept, HS Kaiserslautern) · KI-gestützt erstellt · Prüfung durch die Gruppe offen
const path = require('path');
const fs = require('fs');
const { chromium } = require(process.env.PLAYWRIGHT_CORE || '/opt/node-tools/node_modules/playwright-core');
const WEB = path.resolve(__dirname, '../../konzept-website') + '/';
const AUS = path.resolve(__dirname, '../intern/handy');
const FPS = 30;
const ease = x => x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; // ease-in-out (kubisch)

// Scroll-Fahrplan der Startseite (Sekunden ab Aufnahmebeginn → scrollY in CSS-Pixeln): Code mit „Werbung“ stehen lassen,
// dann in EINER schnellen Fahrt bis „Erst nachlesen, dann entscheiden.“ (kein Halt am Bewertungs-Band, Nacharbeit
// Abnahme: Band nur in schneller Fahrt, Bewegungsunschärfe zeichnet die Bühne aus scroll.json), dort halten (Tipp).
const START = [[0, 0], [0.42, 0], [1.25, 2890], [2.0, 2890]];
const START_DAUER = 2.0;
function lage(plan, t) {
  for (let i = 0; i < plan.length - 1; i++) {
    const [t0, y0] = plan[i], [t1, y1] = plan[i + 1];
    if (t <= t1) return y0 + (y1 - y0) * ease(Math.min(1, Math.max(0, (t - t0) / (t1 - t0 || 1))));
  }
  return plan[plan.length - 1][1];
}

(async () => {
  fs.mkdirSync(AUS + '/start', { recursive: true });
  const b = await chromium.launch({ args: ['--no-sandbox'] });
  const k = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
  let extern = 0;
  await k.route('**/*', r => { if (r.request().url().startsWith('file://')) r.continue(); else { extern++; r.abort(); } });
  const p = await k.newPage();
  const laden = async url => {
    await p.goto('file://' + WEB + url); await p.evaluate(() => document.fonts.ready);
    await p.evaluate(() => Promise.race([new Promise(r => setTimeout(r, 3000)), Promise.all([...document.images].map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })))]));
    await p.addStyleTag({ content: 'html{scroll-behavior:auto!important} *{caret-color:transparent}' });
    await p.waitForTimeout(400);
  };
  const nurRest = process.argv.includes('--ohne-start');
  // 1 Startseite: vom Code über „HOLY Energy in vier Zahlen“ bis „Erst nachlesen, dann entscheiden.“
  if (!nurRest) {
  await laden('index.html');
  fs.rmSync(AUS + '/start', { recursive: true, force: true }); fs.mkdirSync(AUS + '/start', { recursive: true });
  // Lage des Bewertungs-Bands (Dokument-Koordinaten) messen: in Bildern, in denen die Fahrt langsam ist, darf es nicht im
  // sichtbaren Bereich unter der festen Hinweisleiste stehen
  const band = await p.evaluate(() => { const r = document.querySelector('.band-bewertung').getBoundingClientRect(); return [r.top + scrollY, r.bottom + scrollY]; });
  const leiste = await p.evaluate(() => { const e = document.querySelector('.hinweisbalken'); return e ? e.getBoundingClientRect().height : 46; });
  const n = Math.round(START_DAUER * FPS), ys = [];
  for (let i = 0; i < n; i++) {
    const y = Math.round(lage(START, i / FPS) * 3) / 3;
    await p.evaluate(y => window.scrollTo(0, y), y);
    ys.push(await p.evaluate(() => scrollY));
    await p.screenshot({ path: `${AUS}/start/${String(i).padStart(4, '0')}.png` });
  }
  // Bewegung je Bild (CSS-Pixel) für die Bewegungsunschärfe der Bühne; Band sichtbar = Band schneidet [y + Leiste, y + 844]
  const info = ys.map((y, i) => ({ y, dy: i ? y - ys[i - 1] : 0, band: band[1] > y + leiste && band[0] < y + 844 }));
  fs.writeFileSync(AUS + '/start/scroll.json', JSON.stringify({ band, leiste, bilder: info }, null, 1));
  const langsam = info.filter(b => b.band && Math.abs(b.dy) < 60).length;
  console.log('Bewertungs-Band sichtbar in', info.filter(b => b.band).length, 'Bildern, davon langsam (< 60 CSS-px je Bild):', langsam);
  }
  // 2 Koffein-Check: oben („Kurz gesagt“) und nach dem Tipp auf „7 Quellen“
  await laden('koffein-check.html');
  await p.screenshot({ path: AUS + '/koffein-oben.png' });
  await p.click('.verfasser a[href="#quellen"]'); await p.waitForTimeout(300);
  await p.screenshot({ path: AUS + '/koffein-quellen.png' });
  // 3 Danke-Seite mit Squad-Einstieg, dann echter Tipp auf „Squad beitreten“ → squad.html
  await laden('danke.html');
  await p.screenshot({ path: AUS + '/danke.png' });
  await Promise.all([p.waitForNavigation(), p.click('.knopfreihe .knopf[href="squad.html"]')]);
  await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500);
  await p.screenshot({ path: AUS + '/squad.png' });
  console.log('Aufnahmen fertig, externe Anfragen:', extern, '· Adresse nach Tipp:', p.url().split('/').pop());
  await b.close();
})();
