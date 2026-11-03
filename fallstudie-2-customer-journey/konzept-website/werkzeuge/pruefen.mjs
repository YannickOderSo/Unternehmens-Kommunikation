#!/usr/bin/env node
/* ==========================================================================
   Prüfung der Konzept-Webseite (Fallstudie 2) mit Playwright/Chromium
   Aufruf (im Repository):  node fallstudie-2-customer-journey/konzept-website/werkzeuge/pruefen.mjs
   Optionen:  --fassung beide|oeffentlich|intern   welche Fassung geprüft wird (Standard: beide)
              --ohne-bilder   keine Bildschirmfotos schreiben
              --bericht DATEI Ergebnis zusätzlich als JSON speichern
   Playwright: require(process.env.PLAYWRIGHT_CORE || 'playwright'); Chromium über CHROME_PFAD wählbar.

   Zwei Fassungen:
     öffentlich  wie im Repository und auf GitHub Pages: Anfragen nach intern/ werden gesperrt (route.abort), es gibt
                 kein window.INTERN_BILDER; außer der Wortmarke keine Bilder, Platzhalter und eigene Zeichnungen sichtbar.
                 Bildschirmfotos IMMER aus dieser Fassung nach ../_vorschau/ (versioniert) – so kommt nie ein HOLY-Foto
                 ins Repository.
     intern      mit intern/bilder.js (per .gitignore ausgeschlossen): Bilder nur aus intern/bilder/, jedes mit alt,
                 width und height, geladen (kein kaputtes Bild), jeder Bildplatz mit vorhandenem Schlüssel gefüllt,
                 Bildnachweis im Fuß sichtbar. Bildschirmfotos nach ../intern/vorschau/ (oberer Bildschirm, ganze Seite
                 bei 390 px, ganze Seite bei 1280 px). Fehlt intern/bilder.js, gibt es eine Warnung statt eines Fehlers.

   Geprüft wird (gestaltungsplan.md 7.2/7.3):
     1. alle Seiten laden ohne Konsolenfehler und ohne Skriptfehler (normal und mit ?anmerkungen=1)
     2. keine externen Anfragen (jede Anfrage außer file:, data:, blob:, about: wird blockiert und gezählt);
        keine externen Adressen in src/href; keine Formulare und Eingabefelder
     3. alle internen Links erreichbar (Datei vorhanden, Sprungziel #id vorhanden)
     4. Hinweisbalken auf jeder Seite: wörtlicher Text, sichtbar, oben, bleibt beim Scrollen stehen, kein Schließen-Knopf
     5. <meta name="robots" content="noindex,nofollow"> auf jeder Seite
     6. 390 px Breite ohne waagerechtes Scrollen (auch im Präsentationsmodus und bei 1280 px)
     7. Kontrast WCAG 2.x für jeden sichtbaren Text (4,5 : 1, große Schrift 3 : 1)
     8. Präsentationsmodus: Zahl der Marker = Zahl der Anmerkungen, jede mit Befund-IDs, Rundgang per „Weiter“
     9. Rechnungen: Packungswahl, Warenkorb je Packung, Code aus der Adresse, Nachfüll-Rechner
    10. Bilder je Fassung (siehe oben); interne Fassung zusätzlich: Galerie der Produktseite tauscht das große Bild
   Bildschirmfotos 390 × 844 (Normalmodus, oberer Bildschirm) nach ../_vorschau/ (öffentliche Fassung).
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_CORE || 'playwright');

const WURZEL = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const VORSCHAU = path.join(WURZEL, '_vorschau');                    // versioniert: nur öffentliche Fassung
const INTERN = path.join(WURZEL, 'fremdbilder');                    // veröffentlichte Fremdbilder (Freigabe KI-Nachweis FS2 Nr. 17)
const INTERN_VORSCHAU = path.join(WURZEL, 'intern', 'vorschau');
const INTERN_JS = path.join(INTERN, 'register.js');
const INTERN_URL = pathToFileURL(INTERN).href + '/';
const istIntern = (u) => typeof u === 'string' && u.startsWith(INTERN_URL);
const args = process.argv.slice(2);
const MIT_BILDERN = !args.includes('--ohne-bilder');
const berichtPfad = args.includes('--bericht') ? args[args.indexOf('--bericht') + 1] : null;
const fassungArg = args.includes('--fassung') ? args[args.indexOf('--fassung') + 1] : 'beide';
if (!['beide', 'oeffentlich', 'intern'].includes(fassungArg)) { console.error('--fassung beide|oeffentlich|intern'); process.exit(2); }

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

const fehler = [];
const notizen = [];
const warnungen = [];
const extern = [];
let FASSUNG = 'oeffentlich';                                        // aktuell geprüfte Fassung
const f = (ort, text) => fehler.push('[' + FASSUNG + '] ' + ort + ': ' + text);

/* Fassungen festlegen; fehlt intern/bilder.js, wird die interne Fassung mit Warnung übersprungen */
const FASSUNGEN = fassungArg === 'beide' ? ['oeffentlich', 'intern'] : [fassungArg];
let REGISTER = null;                                                // Inhalt von intern/bilder.js (nur zum Abgleich)
if (FASSUNGEN.includes('intern')) {
  if (!fs.existsSync(INTERN_JS)) {
    warnungen.push('intern/bilder.js fehlt – interne Fassung nicht geprüft (öffentliche Fassung ' + (FASSUNGEN.includes('oeffentlich') ? 'wird' : 'stattdessen') + ' geprüft).');
    FASSUNGEN.splice(FASSUNGEN.indexOf('intern'), 1);
    if (!FASSUNGEN.length) FASSUNGEN.push('oeffentlich');
  } else {
    try {
      const fenster = {};
      new Function('window', fs.readFileSync(INTERN_JS, 'utf8'))(fenster);
      REGISTER = fenster.INTERN_BILDER || null;
    } catch (e) { fehler.push('[intern] intern/bilder.js: Syntaxfehler ' + e.message); }
    if (REGISTER) {
      for (const [k, e] of Object.entries(REGISTER)) {
        if (!/^fremdbilder\/[\w.-]+\.(jpe?g|png|webp)$/i.test(e.datei || '')) fehler.push('[intern] intern/bilder.js: ' + k + ' mit Datei außerhalb von intern/bilder/: ' + e.datei);
        else if (!fs.existsSync(path.join(WURZEL, e.datei))) fehler.push('[intern] intern/bilder.js: Datei fehlt für ' + k + ': ' + e.datei);
        if (!e.alt || !e.nachweis || !/\d+\s*[×x]\s*\d+/.test(e.pixel || '')) fehler.push('[intern] intern/bilder.js: ' + k + ' ohne alt, nachweis oder pixel');
      }
    }
  }
}
const INTERN_FUSS = 'Produktbilder und Screenshots: HOLY Softdrinks GmbH (de.holy.com), Abruf 03.11.2026 – nur intern für die Lehrveranstaltung.';

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
    // öffentliche Fassung: intern/ ist gesperrt wie auf GitHub Pages (dort fehlt der Ordner)
    if (fassung === 'oeffentlich' && istIntern(u)) return route.abort();
    if (/^(file|data|blob|about):/i.test(u)) return route.continue();
    extern.push(u);
    return route.abort();
  });
  return k;
}

function dateiUrl(datei, query) {
  return pathToFileURL(path.join(WURZEL, datei)).href + (query || '');
}

/* Seite laden und Fehler mitschneiden */
async function oeffne(kontext, datei, query, ort) {
  const page = await kontext.newPage();
  const meldungen = [];
  const fassung = FASSUNG;
  const erwartet = (u) => fassung === 'oeffentlich' && istIntern(u);   // gesperrtes intern/bilder.js
  page.on('console', (m) => {
    if (m.type() !== 'error' && m.type() !== 'warning') return;
    if (erwartet((m.location() || {}).url) && /Failed to load resource/.test(m.text())) return;
    const wo = (m.location() || {}).url || '';
    meldungen.push(m.type() + ': ' + m.text() + (/^file:/i.test(wo) ? ' (' + path.relative(WURZEL, fileURLToPath(wo.split('?')[0].split('#')[0])) + ')' : ''));
  });
  page.on('pageerror', (e) => meldungen.push('pageerror: ' + e.message));
  page.on('requestfailed', (r) => { if (/^file:/i.test(r.url()) && !erwartet(r.url())) meldungen.push('requestfailed: ' + r.url()); });
  await page.goto(dateiUrl(datei, query), { waitUntil: 'load' });
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
      if (cs.visibility === 'hidden' || Number(cs.opacity) === 0) return;
      const vorne = parse(cs.color); if (!vorne) return;
      const hinten = grund(el);
      const l1 = lum(vorne.rgb), l2 = lum(hinten);
      const k = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
      const groesse = parseFloat(cs.fontSize), gewicht = Number(cs.fontWeight) || 400;
      const gross = groesse >= 24 || (groesse >= 18.66 && gewicht >= 700);
      const soll = gross ? 3 : 4.5;
      gezaehlt++;
      if (k < soll) probleme.push({ text: el.textContent.trim().slice(0, 60), kontrast: Math.round(k * 100) / 100, soll, farbe: cs.color, grund: 'rgb(' + hinten.join(', ') + ')' });
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

/* Bilder der Seite erfassen (img und Einbettungen, Bildplätze, Fußhinweis) */
async function bilderInfo(page) {
  return page.evaluate((INTERN_FUSS) => {
    const sichtbar = (el) => !!el && el.getClientRects().length > 0 && getComputedStyle(el).visibility !== 'hidden';
    const fussIntern = Array.from(document.querySelectorAll('[data-nur-intern]'));
    return {
      register: window.INTERN_BILDER ? Object.keys(window.INTERN_BILDER) : null,
      htmlKlasse: document.documentElement.classList.contains('intern-bilder'),
      elemente: Array.from(document.querySelectorAll('img, picture, video, iframe, object, embed, svg image')).map((e) => {
        const r = e.getBoundingClientRect();
        return {
          tag: e.tagName.toLowerCase(), src: e.getAttribute('src') || e.getAttribute('href') || '',
          wortmarke: e.matches('.wortmarke img') && e.getAttribute('src') === 'bilder/holy-logo-wortmarke.png',
          alt: e.hasAttribute('alt') ? e.getAttribute('alt') : null, breite: e.getAttribute('width'), hoehe: e.getAttribute('height'),
          lazy: e.getAttribute('loading') === 'lazy', deko: !!e.closest('[data-intern-deko]'), oben: Math.round(r.top + window.scrollY),
          sichtbar: sichtbar(e)
        };
      }),
      plaetze: Array.from(document.querySelectorAll('[data-intern]')).map((s) => ({ schluessel: s.getAttribute('data-intern'), aktiv: s.getAttribute('data-intern-aktiv'), mitBild: s.classList.contains('mit-bild'), sichtbar: sichtbar(s) })),
      fussInternSichtbar: fussIntern.some(sichtbar),
      fussInternText: fussIntern.map((e) => e.textContent.replace(/\s+/g, ' ').trim()).join(' '),
      fussInternEintraege: document.querySelectorAll('[data-intern-liste] li').length,
      oeffentlichSatzSichtbar: Array.from(document.querySelectorAll('[data-nur-oeffentlich]')).some(sichtbar),
      oeffentlichSaetze: document.querySelectorAll('[data-nur-oeffentlich]').length,
      leereSichtbarePlaetze: Array.from(document.querySelectorAll('.bildplatz')).filter((b) => sichtbar(b) && !b.querySelector('img')).length,
      fensterHoehe: window.innerHeight
    };
  }, INTERN_FUSS);
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
  if (FASSUNG === 'oeffentlich') {
    if (b.register) f(ort, 'window.INTERN_BILDER vorhanden, obwohl intern/ gesperrt ist');
    if (fremd.length) f(ort, fremd.length + ' Bild-, Video- oder Einbettungselemente (öffentlich nur eigene SVG und die Wortmarke im Kopf erlaubt)');
    if (b.htmlKlasse || b.plaetze.some((p) => p.mitBild)) f(ort, 'Bildplatz mit Bild in der öffentlichen Fassung');
    if (b.fussInternSichtbar) f(ort, 'Bildnachweis der internen Fassung sichtbar');
    if (b.oeffentlichSaetze && !b.oeffentlichSatzSichtbar) f(ort, 'Satz „Keine HOLY-Fotos …“ fehlt im Fuß');
  } else {
    if (!b.register) { f(ort, 'window.INTERN_BILDER fehlt (intern/bilder.js nicht geladen)'); return; }
    for (const e of fremd) {
      if (e.tag !== 'img') { f(ort, '<' + e.tag + '> nicht erlaubt (nur img aus intern/bilder/)'); continue; }
      if (!/^fremdbilder\/[\w.-]+\.(jpe?g|png|webp)$/i.test(e.src)) f(ort, 'Bild nicht aus intern/bilder/: ' + e.src);
      if (e.alt === null) f(ort, 'Bild ohne alt: ' + e.src);
      else if (!e.alt && !e.deko) f(ort, 'Bild mit leerem alt außerhalb eines Knopfs/Links mit Text: ' + e.src);
      if (!e.breite || !e.hoehe) f(ort, 'Bild ohne width/height: ' + e.src);
      // erster Bildschirm sofort laden, darunter lazy (Toleranz: nur eindeutige Fälle melden)
      if (modus === 'normal' && e.sichtbar && e.lazy && e.oben < b.fensterHoehe * 0.75) f(ort, 'Bild im ersten Bildschirm mit loading="lazy": ' + e.src);
    }
    if (!fremd.length) f(ort, 'keine internen Bilder eingebaut');
    for (const p of b.plaetze) {
      const schluessel = p.schluessel.replace('{packung}', '');
      const bekannt = p.schluessel.includes('{packung}') ? b.register.some((k) => k.startsWith(schluessel)) : b.register.includes(p.schluessel);
      if (!bekannt) { warnungen.push(ort + ': Bildplatz „' + p.schluessel + '“ hat keinen Eintrag in intern/bilder.js'); continue; }
      if (!p.mitBild) f(ort, 'Bildplatz „' + p.schluessel + '“ ohne Bild (Datei nicht geladen?)');
    }
    if (!b.fussInternSichtbar || !b.fussInternText.includes(INTERN_FUSS)) f(ort, 'Bildnachweis der internen Fassung im Fuß fehlt oder weicht ab');
    if (!b.fussInternEintraege) f(ort, 'keine Einzelnachweise im Fuß');
    if (b.oeffentlichSatzSichtbar) f(ort, 'Satz „Keine HOLY-Fotos …“ in der internen Fassung sichtbar');
  }
  if (b.leereSichtbarePlaetze) f(ort, b.leereSichtbarePlaetze + ' sichtbare leere Bildplätze');
}

async function pruefeFassung() {
  const fotoOrdner = FASSUNG === 'oeffentlich' ? VORSCHAU : INTERN_VORSCHAU;
  if (MIT_BILDERN) fs.mkdirSync(fotoOrdner, { recursive: true });

  /* ---------- 1–8, 10: jede Seite, normal und im Präsentationsmodus ---------- */
  const mobil = await neuerKontext(390, 844, true);

  for (const [kurz, datei] of SEITEN) {
    for (const modus of ['normal', 'anmerkungen']) {
      const ort = datei + (modus === 'anmerkungen' ? ' ?anmerkungen=1' : '');
      const s = await oeffne(mobil, datei, modus === 'anmerkungen' ? '?anmerkungen=1' : '', ort);
      const { page } = s;
      const info = await page.evaluate((HINWEIS) => {
        const bar = document.querySelector('.hinweisbalken');
        const r = bar ? bar.getBoundingClientRect() : null;
        return {
          titel: document.title,
          robots: (document.querySelector('meta[name="robots"]') || {}).content || '',
          hinweisText: bar ? bar.textContent.replace(/\s+/g, ' ').trim() : '',
          hinweisAnzahl: document.querySelectorAll('.hinweisbalken').length,
          hinweisOben: r ? Math.round(r.top) : null,
          hinweisSichtbar: !!bar && bar.getClientRects().length > 0 && getComputedStyle(bar).display !== 'none' && getComputedStyle(bar).visibility !== 'hidden',
          hinweisPosition: bar ? getComputedStyle(bar).position : '',
          hinweisKnoepfe: bar ? bar.querySelectorAll('button, a, [role="button"]').length : -1,
          erstesKind: document.body.firstElementChild === bar,
          formulare: document.querySelectorAll('form').length,
          eingaben: document.querySelectorAll('input, textarea, select').length,
          externeAttribute: Array.from(document.querySelectorAll('[src], [href], [action], [srcset]'))
            .map((el) => el.getAttribute('src') || el.getAttribute('href') || el.getAttribute('action') || el.getAttribute('srcset'))
            .filter((u) => /^(https?:)?\/\//i.test(u || '')),
          schrift: document.fonts.check('750 20px "Bricolage Konzept"') && Array.from(document.fonts).some((ff) => ff.family.includes('Bricolage Konzept') && ff.status === 'loaded'),
          anmText: Array.from(document.querySelectorAll('.anm')).map((a) => ({ ids: (a.getAttribute('data-ids') || '').trim(), text: a.textContent.trim().length })),
          punkte: document.querySelectorAll('.anm-punkt').length,
          links: Array.from(document.querySelectorAll('a[href]')).map((a) => ({ href: a.getAttribute('href'), abs: a.href, ohne: a.hasAttribute('data-ohne-anmerkungen') })),
          // Logo-Bilder: nur außerhalb von intern/ geprüft (interne Packshots dürfen „Logo-Shaker“ heißen)
          hatHolyLogoBild: !!Array.from(document.querySelectorAll('img[alt*="Logo" i], svg[aria-label*="Logo" i]')).find((e) => !/^fremdbilder\//.test(e.getAttribute('src') || ''))
        };
      }, HINWEIS);

      if (!info.titel) f(ort, 'kein <title>');
      if (info.robots !== 'noindex,nofollow') f(ort, 'meta robots fehlt oder falsch: "' + info.robots + '"');
      if (info.hinweisAnzahl !== 1) f(ort, 'Hinweisbalken ' + info.hinweisAnzahl + '-mal');
      if (info.hinweisText !== HINWEIS) f(ort, 'Hinweisbalken-Text weicht ab: "' + info.hinweisText + '"');
      if (!info.hinweisSichtbar || info.hinweisOben !== 0) f(ort, 'Hinweisbalken nicht sichtbar oben (top=' + info.hinweisOben + ')');
      if (info.hinweisPosition !== 'sticky' && info.hinweisPosition !== 'fixed') f(ort, 'Hinweisbalken nicht fest (position ' + info.hinweisPosition + ')');
      if (info.hinweisKnoepfe !== 0) f(ort, 'Hinweisbalken enthält Bedienelemente (ausblendbar?)');
      if (!info.erstesKind) f(ort, 'Hinweisbalken ist nicht das erste Element im <body>');
      if (info.formulare || info.eingaben) f(ort, 'Formular oder Eingabefeld gefunden (' + info.formulare + '/' + info.eingaben + ')');
      if (info.externeAttribute.length) f(ort, 'externe Adressen: ' + info.externeAttribute.join(', '));
      if (!info.schrift) f(ort, 'Schrift „Bricolage Konzept“ nicht geladen');
      if (info.hatHolyLogoBild) f(ort, 'Element mit „Logo“ in alt/aria-label');

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
      if (nachScroll.scrollY < 100) notizen.push('[' + FASSUNG + '] ' + ort + ': Seite kaum scrollbar (' + nachScroll.scrollY + ' px)');
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
        if (rel.startsWith('intern')) { f(ort, 'Link in den internen Ordner: ' + l.href); continue; }
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
        ergebnisSeiten.push({ fassung: FASSUNG, datei, anmerkungen: info.anmText.length, links: info.links.length, texteGeprueft: m.gezaehlt, bilder: b1.elemente.filter((e) => !e.wortmarke).length });
        if (MIT_BILDERN) {
          await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
          await page.waitForTimeout(80);
          const ziel = path.join(fotoOrdner, kurz + '.png');
          await page.screenshot({ path: ziel, fullPage: false });
          bildschirmfotos.push(path.relative(WURZEL, ziel));
          if (FASSUNG === 'intern') {
            const ganz = path.join(fotoOrdner, kurz + '-ganz.png');
            await page.screenshot({ path: ganz, fullPage: true });
            bildschirmfotos.push(path.relative(WURZEL, ganz));
          }
        }
      }
      meldeKonsole(s);
      await page.close();
    }
  }

  /* ---------- 6b: Desktop-Breite ---------- */
  const breit = await neuerKontext(1280, 800, false);
  for (const [kurz, datei] of SEITEN) {
    const s = await oeffne(breit, datei, '', datei + ' @1280');
    const nichtGeladen = await ladeAlleBilder(s.page);
    nichtGeladen.forEach((src) => f(s.ort, 'Bild nicht geladen: ' + src));
    const m = await messe(s.page);
    if (m.scrollBreite > m.clientBreite) f(s.ort, 'waagerechtes Scrollen (scrollWidth ' + m.scrollBreite + ')');
    m.probleme.forEach((p) => f(s.ort, 'Kontrast ' + p.kontrast + ' < ' + p.soll + ' bei „' + p.text + '“'));
    if (MIT_BILDERN && FASSUNG === 'intern') {
      const ziel = path.join(fotoOrdner, kurz + '-1280.png');
      await s.page.screenshot({ path: ziel, fullPage: true });
      bildschirmfotos.push(path.relative(WURZEL, ziel));
    }
    meldeKonsole(s);
    await s.page.close();
  }
  await breit.close();

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
    const hinweis = await s.page.isVisible('[data-nur-beispielcode]');
    if (hinweis) f(s.ort, 'Beispielcode-Hinweis trotz Code in der Adresse sichtbar');
    meldeKonsole(s); await s.page.close();
  }
  {
    // Produktseite: Packung 50 wählen
    const s = await oeffne(mobil, 'produkt.html', '', 'produkt.html Packungswahl');
    const start = await text(s.page, '[data-p-ende]');
    if (start !== '24,99 €') f(s.ort, 'Startwert Endpreis ' + start + ' statt 24,99 €');
    await s.page.click('.option[data-packung="50"]');
    const werte = { preis: await text(s.page, '[data-p-preis]'), je: await text(s.page, '[data-p-je]'), grund: await text(s.page, '[data-p-grund]'), ende: await text(s.page, '[data-p-ende]') };
    const soll = { preis: '39,99 €', je: '0,80 € je Portion', grund: 'Grundpreis 114,26 € / kg (aus 7 g je Portion gerechnet)', ende: '44,98 €' };
    Object.keys(soll).forEach((k) => { if (werte[k] !== soll[k]) f(s.ort, k + ' = "' + werte[k] + '" statt "' + soll[k] + '"'); });
    const links = await s.page.$$eval('[data-warenkorb-link]', (as) => as.map((a) => a.getAttribute('href')));
    if (!links.every((h) => /packung=50/.test(h))) f(s.ort, 'Warenkorb-Links ohne packung=50: ' + links.join(', '));
    await s.page.click('.option[data-packung="1"]');
    if ((await text(s.page, '[data-p-ende]')) !== '6,98 €') f(s.ort, 'Endpreis 1 Portion nicht 6,98 €');
    // interne Fassung: Galerie tauscht das große Bild und den Nachweis
    if (FASSUNG === 'intern') {
      const g = await s.page.evaluate(async () => {
        const knoepfe = Array.from(document.querySelectorAll('[data-intern-galerie] button.mit-bild'));
        const gross = document.querySelector('[data-intern-held] img');
        if (knoepfe.length < 2 || !gross) return { knoepfe: knoepfe.length, gross: !!gross };
        const vorher = gross.getAttribute('src');
        knoepfe[2 % knoepfe.length].click();
        await new Promise((r) => setTimeout(r, 100));
        const nachher = gross.getAttribute('src');
        const nachweis = document.querySelector('[data-intern-held] [data-intern-nachweis]').textContent;
        const gedrueckt = knoepfe.filter((k) => k.getAttribute('aria-pressed') === 'true').length;
        knoepfe[0].click();
        return { knoepfe: knoepfe.length, gross: true, vorher, nachher, zurueck: gross.getAttribute('src'), nachweis, gedrueckt, geladen: gross.complete };
      });
      if (g.knoepfe !== 5 || !g.gross) f(s.ort, 'Galerie unvollständig ' + JSON.stringify(g));
      else if (g.vorher === g.nachher || g.zurueck !== g.vorher || !g.nachweis || g.gedrueckt !== 1) f(s.ort, 'Galerie tauscht das Bild nicht richtig ' + JSON.stringify(g));
    }
    meldeKonsole(s); await s.page.close();
  }
  for (const [q, gesamt, versand] of [['', '22,49 €', '0,00 €'], ['?packung=50', '40,98 €', '4,99 €'], ['?packung=10', '16,23 €', '4,99 €'], ['?packung=1', '6,78 €', '4,99 €'], ['?packung=quatsch', '22,49 €', '0,00 €']]) {
    const s = await oeffne(mobil, 'warenkorb.html', q, 'warenkorb.html' + q);
    const g = await text(s.page, '[data-k-gesamt]');
    const v = await text(s.page, '[data-k-versand]');
    if (g !== gesamt) f(s.ort, 'Gesamt ' + g + ' statt ' + gesamt);
    if (v !== versand) f(s.ort, 'Versand ' + v + ' statt ' + versand);
    const danke = await s.page.getAttribute('.express a', 'href');
    const p = q.includes('packung=') && !q.includes('quatsch') ? q.split('=')[1] : 'set';
    if (!danke.includes('packung=' + p)) f(s.ort, 'Danke-Link ohne packung=' + p + ': ' + danke);
    if (FASSUNG === 'intern') {
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
  }
  {
    // „Anmerkungen ausblenden“ führt auf dieselbe Seite ohne Parameter
    const s = await oeffne(mobil, 'squad.html', '?anmerkungen=1', 'squad.html ausblenden');
    const h = await s.page.getAttribute('.fuss .nur-anm a', 'href');
    if (h !== 'squad.html') f(s.ort, '„Anmerkungen ausblenden“ zeigt auf "' + h + '"');
    meldeKonsole(s); await s.page.close();
  }
  await mobil.close();
}

for (const fassung of FASSUNGEN) {
  FASSUNG = fassung;
  await pruefeFassung();
}
await browser.close();

if (extern.length) fehler.push('Netz: ' + extern.length + ' externe Anfragen blockiert: ' + Array.from(new Set(extern)).join(', '));

const bericht = { zeitpunkt: new Date().toISOString(), fassungen: FASSUNGEN, seiten: ergebnisSeiten, fehler, warnungen, notizen, externeAnfragen: extern.length, bilder: bildschirmfotos };
if (berichtPfad) fs.writeFileSync(berichtPfad, JSON.stringify(bericht, null, 2));
console.log(JSON.stringify({ fassungen: FASSUNGEN, seiten: ergebnisSeiten, externeAnfragen: extern.length, notizen, bildschirmfotos }, null, 2));
if (warnungen.length) console.log('\nWARNUNG (' + warnungen.length + '):\n- ' + warnungen.join('\n- '));
if (fehler.length) {
  console.log('\nFEHLER (' + fehler.length + '):\n- ' + fehler.join('\n- '));
  process.exit(1);
}
console.log('\nAlle Prüfungen bestanden (' + FASSUNGEN.map((x) => x === 'oeffentlich' ? 'öffentliche' : 'interne').join(' und ') + ' Fassung).');
