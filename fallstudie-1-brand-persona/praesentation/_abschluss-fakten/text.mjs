// Prüfskript (temporär): sichtbaren Text jeder Folie im Endzustand ausgeben + Screenshots
import { createRequire } from 'node:module';
import path from 'node:path';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require('/tmp/claude-0/-home-user-Unternehmens-Kommunikation/de57a793-3a57-5bbc-8922-be77d2a31fa2/scratchpad/werkzeuge/node_modules/playwright-core');
const basis = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const aus = path.resolve(path.dirname(new URL(import.meta.url).pathname), 'bilder');
fs.mkdirSync(aus, { recursive: true });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
const seite = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
const fehler = [];
seite.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') fehler.push(m.type() + ': ' + m.text()); });
seite.on('pageerror', (e) => fehler.push('pageerror: ' + e.message));
await seite.goto('file://' + basis + '/index.html?optional=alle');
await seite.waitForFunction(() => window.Deck && window.Deck.istBereit, null, { timeout: 15000 });
await seite.evaluate(() => window.Deck.testmodus(true));
const folien = await seite.evaluate(() => window.Deck.folien().map((f) => ({ id: f.id, nummer: f.nummer, schritte: f.schritteGesamt })));
const nur = process.argv[2] ? process.argv[2].split(',') : null;
for (const f of folien) {
  if (nur && !nur.includes(f.id)) continue;
  const stufen = process.argv[3] === 'alle' ? [...Array(f.schritte + 1).keys()] : [f.schritte];
  for (const n of stufen) {
    await seite.evaluate(({ id, n }) => window.Deck.gehe(id, n, { sofort: true, still: true }), { id: f.id, n });
    await seite.waitForTimeout(1600);
    const text = await seite.evaluate((id) => {
      const s = document.getElementById(id);
      const teile = [];
      const walker = document.createTreeWalker(s, NodeFilter.SHOW_TEXT);
      let k;
      while ((k = walker.nextNode())) {
        const t = k.textContent.replace(/\s+/g, ' ').trim();
        if (!t) continue;
        const el = k.parentElement;
        if (el.closest('.notizen, script, style, [hidden]')) continue;
        let sichtbar = true, e = el;
        while (e && e !== document.body) { const cs = getComputedStyle(e); if (cs.display === 'none' || cs.visibility === 'hidden' || parseFloat(cs.opacity) < 0.05) { sichtbar = false; break; } e = e.parentElement; }
        if (!sichtbar) continue;
        const r = el.getBoundingClientRect(); if (r.width < 1 || r.height < 1) continue;
        teile.push(t);
      }
      return teile.join(' | ');
    }, f.id);
    console.log('=== ' + f.id + ' (Nr. ' + f.nummer + ') Schritt ' + n + '/' + f.schritte + '\n' + text + '\n');
    await seite.screenshot({ path: path.join(aus, f.id + '-' + n + '.png'), scale: 'css' });
  }
}
console.log('KONSOLE:\n' + fehler.join('\n'));
await browser.close();
