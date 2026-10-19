#!/usr/bin/env node
/* =============================================================================
   uebersicht.mjs – Kontaktbogen aller Folien (export/uebersicht.png) erzeugen
   -----------------------------------------------------------------------------
   Baut aus den Folienbildern in export/folien/<id>.png (Endzustand jeder Folie,
   erzeugt mit pruefen.mjs, siehe AUTOREN.md Abschnitt 15) eine Übersichtsseite
   im Stil „Editorial“ und speichert sie als PNG (2400 px breit):
     • Kopf: Titel und Marke, Fallstudie, Veranstaltung, Dozent, Gruppe, Datum
       (alles aus marke.js), Sollzeit der Hauptfolien (Summe data-zeit)
     • Abschnitt „Präsentation“ (Hauptfolien inkl. optionaler Folie 01b) und
       „Backup“ – je 4 Kacheln pro Reihe mit Nummer, Titel, Bündel und Sollzeit
     • Fußnote mit Stand und Hinweisen
   Reihenfolge, Nummern, Titel, Bündel und Sollzeiten liest das Skript aus
   index.html (Deck.folien()), Farben aus den Tokens des Themas Editorial (hell).
   Nachbau der Übersicht von Account 2 (Stand 17.10.2026), deren Erzeugung nicht
   dokumentiert war (Account 1, Übernahme 17.–19.10.2026).

   AUFRUF (im Ordner praesentation/, nach dem Erzeugen der Folienbilder):
     PLAYWRIGHT_CORE=/pfad/zu/node_modules/playwright-core \
     node werkzeuge/uebersicht.mjs index.html --stand 19.10.2026
   Optionen
     --bilder ORDNER   Folienbilder (Standard: export/folien)
     --ziel DATEI      Ausgabe (Standard: export/uebersicht.png)
     --stand TEXT      Datum in der Fußnote (Standard: heutiges Datum)
   Umgebung wie bei pruefen.mjs: PLAYWRIGHT_CORE, CHROME_PFAD.
   Die Seite wird in einem temporären Ordner des Betriebssystems gebaut und
   danach gelöscht; es wird nichts aus dem Internet geladen.
   ============================================================================= */

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';

const argv = process.argv.slice(2);
const opt = { datei: null, bilder: 'export/folien', ziel: 'export/uebersicht.png', stand: null };
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  const wert = () => { const w = argv[++i]; if (w === undefined) abbruch('Wert fehlt für ' + a); return w; };
  if (a === '--bilder') opt.bilder = wert();
  else if (a === '--ziel') opt.ziel = wert();
  else if (a === '--stand') opt.stand = wert();
  else if (a.startsWith('--')) abbruch('Unbekannte Option ' + a);
  else opt.datei = a;
}
function abbruch(text) { console.error('FEHLER: ' + text); process.exit(2); }
if (!opt.datei) abbruch('HTML-Datei fehlt. Beispiel: node werkzeuge/uebersicht.mjs index.html');
const datei = path.resolve(opt.datei);
const ordner = path.dirname(datei);
const bilder = path.resolve(opt.bilder);
const ziel = path.resolve(opt.ziel);
if (!fs.existsSync(datei)) abbruch('Datei nicht gefunden: ' + datei);
if (!fs.existsSync(bilder)) abbruch('Ordner mit Folienbildern fehlt: ' + bilder);
if (!opt.stand) {
  const d = new Date();
  opt.stand = String(d.getDate()).padStart(2, '0') + '.' + String(d.getMonth() + 1).padStart(2, '0') + '.' + d.getFullYear();
}

const require = createRequire(import.meta.url);
let playwright;
try { playwright = require(process.env.PLAYWRIGHT_CORE || 'playwright-core'); }
catch (e) { abbruch('playwright-core nicht gefunden. PLAYWRIGHT_CORE=/pfad/zu/node_modules/playwright-core setzen. (' + e.message + ')'); }
const chromePfad = process.env.CHROME_PFAD || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const browser = await playwright.chromium.launch({ executablePath: chromePfad, args: ['--no-sandbox', '--allow-file-access-from-files'] });
const kontext = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
await kontext.route('**/*', (r) => (/^(file|data|blob|about):/i.test(r.request().url()) ? r.continue() : r.abort()));

/* 1. Angaben aus der Präsentation lesen (alle Folien inkl. optionaler) */
const seite = await kontext.newPage();
await seite.goto(pathToFileURL(datei).href + '?aufnahme&optional=alle&thema=editorial&modus=hell', { waitUntil: 'load' });
await seite.waitForFunction(() => window.Deck && window.Deck.istBereit, null, { timeout: 15000 });
const info = await seite.evaluate(() => {
  const m = window.Deck.marke || window.MARKE || {};
  const css = getComputedStyle(document.documentElement);
  const farbe = (t) => {
    /* Token in eine feste Farbe auflösen (color-mix → rgb) */
    const el = document.createElement('span');
    el.style.color = 'var(' + t + ')';
    document.body.appendChild(el);
    const c = getComputedStyle(el).color;
    el.remove();
    return c;
  };
  return {
    marke: { name: m.name, titel: m.titel, fallstudie: m.fallstudie, veranstaltung: m.veranstaltung,
      dozent: m.dozent, gruppe: m.gruppe, datum: m.datum },
    farben: { grund: farbe('--f-hintergrund'), text: farbe('--f-text'), text2: farbe('--f-text-2'),
      linie: farbe('--f-linie'), akzent: farbe('--f-akzent'), rahmen: farbe('--f-linie-stark') },
    folien: window.Deck.folien().map((f) => ({ id: f.id, nummer: f.nummer, titel: f.titel, zeit: f.zeit,
      buendel: f.buendel, backup: f.backup, optional: f.optional }))
  };
});
await seite.close();

/* 2. Seite bauen */
const esc = (t) => String(t == null ? '' : t).replace(/[&<>"]/g, (z) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[z]));
const zeit = (s) => Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
const fehlend = info.folien.filter((f) => !fs.existsSync(path.join(bilder, f.id + '.png')));
if (fehlend.length) abbruch('Folienbilder fehlen: ' + fehlend.map((f) => f.id + '.png').join(', ') + ' (erst mit pruefen.mjs erzeugen)');
const haupt = info.folien.filter((f) => !f.backup);
const backup = info.folien.filter((f) => f.backup);
const summe = haupt.filter((f) => !f.optional).reduce((s, f) => s + (Number(f.zeit) || 0), 0);
const d = String(info.marke.datum || '').split('-');
const tage = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
const datum = d.length === 3 ? tage[new Date(+d[0], +d[1] - 1, +d[2]).getDay()] + ', ' + d[2] + '.' + d[1] + '.' + d[0] : '';
const meta = (f) => {
  if (f.backup) return 'Backup';
  const z = Number(f.zeit) || 0;
  const b = f.buendel === 'alle' ? 'alle' : 'Bündel ' + f.buendel;
  return (f.optional ? 'optional · ' : '') + b + ' · ' + (z ? zeit(z) : 'Fragerunde');
};
const kachel = (f) => `
      <figure class="kachel">
        <img src="${pathToFileURL(path.join(bilder, f.id + '.png')).href}" alt="">
        <figcaption><span class="nr">${esc(f.nummer)}</span><span class="titel">${esc(f.titel)}</span><span class="meta">${esc(meta(f))}</span></figcaption>
      </figure>`;
const schrift = (datei, stil) => `@font-face { font-family: "${datei.startsWith('fraunces') ? 'Fraunces Deck' : 'Inter Deck'}"; src: url("${pathToFileURL(path.join(ordner, 'schriften', datei)).href}") format("woff2"); font-weight: 100 900; font-style: ${stil}; }`;
const F = info.farben;
const html = `<!doctype html>
<html lang="de"><head><meta charset="utf-8"><title>Übersicht</title>
<style>
  ${schrift('fraunces-latin-opsz-normal.woff2', 'normal')}
  ${schrift('fraunces-latin-ext-opsz-normal.woff2', 'normal')}
  ${schrift('fraunces-latin-full-italic.woff2', 'italic')}
  ${schrift('inter-latin-opsz-normal.woff2', 'normal')}
  ${schrift('inter-latin-ext-opsz-normal.woff2', 'normal')}
  * { box-sizing: border-box; }
  html, body { margin: 0; background: ${F.grund}; color: ${F.text}; }
  body { width: 2400px; padding: 56px 64px 52px; font-family: "Inter Deck", sans-serif; }
  header { display: flex; justify-content: space-between; align-items: flex-end; gap: 48px;
    padding-bottom: 28px; border-bottom: 3px solid ${F.text}; }
  h1 { margin: 0; font-family: "Fraunces Deck", serif; font-weight: 500; font-size: 62px; line-height: 1.05;
    font-variation-settings: "opsz" 72; letter-spacing: -0.01em; }
  h1 em { font-style: italic; color: ${F.akzent}; font-variation-settings: "opsz" 72, "WONK" 0; }
  .kopf-meta { text-align: right; font-size: 22px; line-height: 1.5; color: ${F.text2}; }
  h2 { margin: 40px 0 22px; font-size: 22px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: ${F.akzent}; }
  .raster { display: grid; grid-template-columns: repeat(4, 1fr); column-gap: 27px; row-gap: 30px; }
  .kachel { margin: 0; }
  .kachel img { display: block; width: 100%; aspect-ratio: 16 / 9; border: 2px solid ${F.linie}; }
  figcaption { display: grid; grid-template-columns: auto 1fr auto; column-gap: 18px; align-items: baseline;
    margin-top: 14px; }
  .nr { font-family: "Fraunces Deck", serif; font-weight: 600; font-size: 30px; font-variation-settings: "opsz" 36; }
  .titel { font-size: 22px; line-height: 1.3; }
  .meta { font-size: 18px; color: ${F.text2}; white-space: nowrap; }
  footer { margin-top: 40px; padding-top: 18px; border-top: 2px solid ${F.linie}; font-size: 19px; line-height: 1.5; color: ${F.text2}; }
</style></head>
<body>
  <header>
    <h1>${esc(info.marke.titel)} · <em>${esc(info.marke.name)}</em></h1>
    <div class="kopf-meta">
      ${esc(info.marke.fallstudie)} · ${esc(info.marke.veranstaltung)} · ${esc(info.marke.dozent)}<br>
      ${esc((info.marke.gruppe || []).join(' · '))}${datum ? ' · ' + esc(datum) : ''}<br>
      Alle Folien im Endzustand · Sollzeit Hauptfolien ${zeit(summe)} min
    </div>
  </header>
  <h2>Präsentation</h2>
  <div class="raster">${haupt.map(kachel).join('')}
  </div>
  <h2>Backup (nur über die Übersicht, Taste O)</h2>
  <div class="raster">${backup.map(kachel).join('')}
  </div>
  <footer>Folie 01b ist optional und standardmäßig ausgeblendet (marke.js → optionaleFolien). Beispieldaten sind gekennzeichnet; Folien 03–05: Entwurf, Freigabe offen. Stand ${esc(opt.stand)} · erzeugt aus index.html (werkzeuge/uebersicht.mjs)</footer>
</body></html>`;

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'uebersicht-'));
const tmpHtml = path.join(tmp, 'uebersicht.html');
fs.writeFileSync(tmpHtml, html);
const s2 = await browser.newPage({ viewport: { width: 2400, height: 1200 } });
await s2.goto(pathToFileURL(tmpHtml).href, { waitUntil: 'load' });
await s2.evaluate(() => document.fonts.ready);
await s2.evaluate(() => Promise.all([...document.images].map((i) => (i.complete ? null : new Promise((r) => { i.onload = i.onerror = r; })))));
fs.mkdirSync(path.dirname(ziel), { recursive: true });
await s2.screenshot({ path: ziel, fullPage: true });
const groesse = await s2.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.scrollHeight]);
await browser.close();
fs.rmSync(tmp, { recursive: true, force: true });
console.log(JSON.stringify({ ziel: path.relative(process.cwd(), ziel), breite: groesse[0], hoehe: groesse[1],
  folien: info.folien.length, hauptfolien: haupt.length, backup: backup.length, sollzeitHauptfolien: zeit(summe), stand: opt.stand }));
