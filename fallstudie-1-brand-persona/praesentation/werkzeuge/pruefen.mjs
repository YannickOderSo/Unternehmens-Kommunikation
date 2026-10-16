#!/usr/bin/env node
/* =============================================================================
   pruefen.mjs – Folien automatisch prüfen und Screenshots machen
   -----------------------------------------------------------------------------
   Öffnet die Präsentation (index.html) per file:// in Chromium (Playwright),
   läuft alle Folien über die Deck-Schnittstelle ab, speichert Screenshots und
   prüft:
     • Konsolenfehler, Seitenfehler, fehlende lokale Dateien
     • externe Netzwerkanfragen (verboten – die Präsentation läuft offline)
     • geladene Schriften
     • Überlauf: sichtbare Elemente außerhalb der Bühne, abgeschnittener Text
     • Schriftgröße (Inhalt ≥ 28 px, Metaangaben ≥ 22 px)
     • Kontrast Text/Hintergrund (WCAG AA: 4,5 : 1, Großtext 3 : 1)
     • Wortbudget (Hauptfolie ≤ 40 sichtbare Wörter; am Zeilenende getrennte
       Wörter wie „Marken-<br>nutzen“ zählen als ein Wort)
     • mit --schritte: Überlauf, abgeschnittener Text, Schriftgröße und Kontrast
       in JEDEM Schritt (Befunde, die nur in einem Zwischenschritt auftreten,
       tragen den Zusatz „nur in Schritt n“)
     • überlappender Text (Zeilen zweier Elemente liegen übereinander)
     • fehlende Notizen, fehlendes data-zeit / data-titel
   Elemente mit dem Attribut data-ueberlauf-ok (z. B. ein absichtlich über den
   Rand laufendes Bild) und ihr Inhalt sind von der Überlaufprüfung ausgenommen,
   Elemente mit data-ueberlappung-ok von der Überlappungsprüfung.
   Ergebnis: JSON-Bericht auf stdout und in <ausgabe>/bericht.json.
   Rückgabewert (Exit-Code): 0 = keine Fehler, 1 = Fehler gefunden, 2 = Abbruch.

   VORAUSSETZUNG: Node.js und das Paket playwright-core mit einem Chromium
   (einmalig z. B.: npm install playwright-core && npx playwright install chromium).
   Für die Präsentation selbst wird das NICHT gebraucht – nur für diese Prüfung.

   AUFRUF (im Ordner praesentation/):
     PLAYWRIGHT_CORE=/pfad/zu/node_modules/playwright-core \
     node werkzeuge/pruefen.mjs index.html --ausgabe _test/pruefung --schritte
   Der Ordner _test/ ist in .gitignore eingetragen (Testausgaben nicht einchecken).

   Optionen
     --ausgabe ORDNER       Screenshots + bericht.json (Standard: <datei>-pruefung/)
     --schritte             jeden Schritt fotografieren und prüfen (sonst nur den Endzustand)
     --nur f03,f04          nur diese Folien (IDs oder Nummern)
     --thema NAME           editorial | bento | keynote
     --modus hell|dunkel
     --druck PDF-PFAD       zusätzlich PDF erzeugen (wie Strg+P) und Seiten zählen
     --skala 0.5            Screenshots verkleinert (schneller); Prüfungen bleiben exakt
     --optional             auch optionale Folien (data-optional) prüfen
     --primaer HEX --sekundaer HEX   Markenfarben testen (z. B. FFD400 1D1D1B)
     --bewegung-reduziert   wie „Bewegung reduzieren“ im Betriebssystem
     --ohne-bilder          keine Screenshots, nur Prüfungen
   Umgebung
     PLAYWRIGHT_CORE  Pfad zum Paket playwright-core (sonst normaler Import)
     CHROME_PFAD      Chromium/Chrome (Standard /opt/pw-browsers/chromium-1194/chrome-linux/chrome)
   ============================================================================= */

import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';

/* ---------- Argumente ---------- */
const argv = process.argv.slice(2);
const opt = { datei: null, ausgabe: null, schritte: false, nur: null, thema: null, modus: null, druck: null,
  skala: 1, optional: false, primaer: null, sekundaer: null, reduziert: false, ohneBilder: false };
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  const wert = () => { const w = argv[++i]; if (w === undefined) abbruch('Wert fehlt für ' + a); return w; };
  if (a === '--ausgabe') opt.ausgabe = wert();
  else if (a === '--schritte') opt.schritte = true;
  else if (a === '--nur') opt.nur = wert().split(',').map((x) => x.trim()).filter(Boolean);
  else if (a === '--thema') opt.thema = wert();
  else if (a === '--modus') opt.modus = wert();
  else if (a === '--druck') opt.druck = wert();
  else if (a === '--skala') opt.skala = parseFloat(wert()) || 1;
  else if (a === '--optional') opt.optional = true;
  else if (a === '--primaer') opt.primaer = wert().replace(/^#/, '');
  else if (a === '--sekundaer') opt.sekundaer = wert().replace(/^#/, '');
  else if (a === '--bewegung-reduziert') opt.reduziert = true;
  else if (a === '--ohne-bilder') opt.ohneBilder = true;
  else if (a === '--hilfe' || a === '-h') { console.log(fs.readFileSync(new URL(import.meta.url)).toString().split('*/')[0]); process.exit(0); }
  else if (a.startsWith('--')) abbruch('Unbekannte Option ' + a);
  else opt.datei = a;
}
function abbruch(text) { console.error('FEHLER: ' + text); process.exit(2); }
if (!opt.datei) abbruch('HTML-Datei fehlt. Beispiel: node werkzeuge/pruefen.mjs index.html --ausgabe _test/pruefung --schritte');
const datei = path.resolve(opt.datei);
if (!fs.existsSync(datei)) abbruch('Datei nicht gefunden: ' + datei);
const ausgabe = path.resolve(opt.ausgabe || datei.replace(/\.html?$/i, '') + '-pruefung');
fs.mkdirSync(ausgabe, { recursive: true });

/* ---------- Playwright laden ---------- */
const require = createRequire(import.meta.url);
let playwright;
try {
  playwright = require(process.env.PLAYWRIGHT_CORE || 'playwright-core');
} catch (e) {
  abbruch('playwright-core nicht gefunden. PLAYWRIGHT_CORE=/pfad/zu/node_modules/playwright-core setzen. (' + e.message + ')');
}
const chromePfad = process.env.CHROME_PFAD || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

/* ---------- Bericht ---------- */
const bericht = {
  datei: path.relative(process.cwd(), datei),
  zeitpunkt: new Date().toISOString(),
  einstellungen: { thema: opt.thema, modus: opt.modus, schritte: opt.schritte, skala: opt.skala, optional: opt.optional,
    primaer: opt.primaer, sekundaer: opt.sekundaer, bewegungReduziert: opt.reduziert },
  zusammenfassung: {},
  fehler: [],          // muss behoben werden
  warnungen: [],       // sollte geprüft werden
  folien: [],
  schriften: [],
  screenshots: [],
  externeAnfragen: [],
  druck: null
};
const fehler = (ort, text) => bericht.fehler.push({ ort, text });
const warnung = (ort, text) => bericht.warnungen.push({ ort, text });

/* ---------- Browser ---------- */
const browser = await playwright.chromium.launch({ executablePath: chromePfad, args: ['--no-sandbox', '--allow-file-access-from-files'] });
const breite = Math.round(1920 * opt.skala);
const hoehe = Math.round(1080 * opt.skala);
const kontext = await browser.newContext({
  viewport: { width: breite, height: hoehe },
  reducedMotion: opt.reduziert ? 'reduce' : 'no-preference'
});
/* Externe Anfragen blockieren und protokollieren */
await kontext.route('**/*', (route) => {
  const url = route.request().url();
  if (/^(file|data|blob|about):/i.test(url)) return route.continue();
  bericht.externeAnfragen.push(url);
  return route.abort();
});

function adresse(extra) {
  const p = new URLSearchParams();
  p.set('aufnahme', '');
  if (opt.thema) p.set('thema', opt.thema);
  if (opt.modus) p.set('modus', opt.modus);
  if (opt.optional) p.set('optional', 'alle');
  if (opt.primaer) p.set('primaer', opt.primaer);
  if (opt.sekundaer) p.set('sekundaer', opt.sekundaer);
  Object.entries(extra || {}).forEach(([k, v]) => p.set(k, v));
  return pathToFileURL(datei).href + '?' + p.toString().replace(/=(&|$)/g, '$1');
}

function seiteBeobachten(seite, ort) {
  seite.on('console', (m) => {
    if (m.type() === 'error') fehler(ort, 'Konsole: ' + m.text());
    else if (m.type() === 'warning') warnung(ort, 'Konsole (Warnung): ' + m.text());
  });
  seite.on('pageerror', (e) => fehler(ort, 'Seitenfehler: ' + e.message));
  seite.on('requestfailed', (r) => {
    const url = r.url();
    if (/^file:/i.test(url)) fehler(ort, 'Datei fehlt oder nicht lesbar: ' + decodeURIComponent(url.replace(/^file:\/\//, '')) + ' (' + (r.failure() || {}).errorText + ')');
  });
}

const seite = await kontext.newPage();
seiteBeobachten(seite, 'Seite');
await seite.goto(adresse(), { waitUntil: 'load' });
try {
  await seite.waitForFunction(() => window.Deck && window.Deck.istBereit, null, { timeout: 15000 });
} catch (e) {
  fehler('Seite', 'Deck wurde nicht bereit (deck.js nicht geladen oder Fehler beim Start).');
  await ende();
}
await seite.evaluate(() => document.fonts && document.fonts.ready);
await seite.evaluate(() => window.Deck.testmodus(true));

/* ---------- Schriften ---------- */
bericht.schriften = await seite.evaluate(() => {
  const liste = [];
  document.fonts.forEach((f) => { if (f.status === 'loaded') liste.push(f.family.replace(/"/g, '') + ' ' + f.style + ' ' + f.weight); });
  return [...new Set(liste)];
});
const schriftCheck = await seite.evaluate(() => {
  const s = getComputedStyle(document.documentElement);
  return ['--schrift-display', '--schrift-text'].map((t) => {
    const fam = s.getPropertyValue(t).trim().split(',')[0];
    return { token: t, familie: fam, geladen: document.fonts.check('40px ' + fam) && [...document.fonts].some((f) => f.status === 'loaded' && fam.replace(/"/g, '') === f.family.replace(/"/g, '')) };
  });
});
schriftCheck.forEach((s) => { if (!s.geladen) fehler('Schriften', s.token + ': ' + s.familie + ' wurde nicht geladen (Pfad in tokens.css?)'); });

/* ---------- Farbpaare aus den Tokens (auch Text auf SVG-Flächen des Steuerrads) ----------
   [Schrift, Fläche, Mindestkontrast, Bedeutung]. Großtext (≥ 24 px) braucht 3 : 1,
   normaler Text 4,5 : 1 (WCAG 2.1 AA). Geprüft im aktuellen Thema und Modus. */
const PAARE = [
  ['--f-text', '--f-hintergrund', 4.5, 'Text auf Hintergrund'],
  ['--f-text-2', '--f-hintergrund', 4.5, 'Nebentext auf Hintergrund'],
  ['--f-text-2', '--f-flaeche', 4.5, 'Nebentext auf Fläche'],
  ['--f-text', '--f-karte', 4.5, 'Text auf Karte'],
  ['--f-akzent', '--f-hintergrund', 4.5, 'Akzenttext (Kicker) auf Hintergrund'],
  ['--f-akzent', '--f-akzent-flaeche', 4.5, 'Akzenttext auf Akzentfläche'],
  ['--f-auf-akzent', '--f-akzent', 4.5, 'Schrift auf Akzent (Etikett „Unsere Analyse“)'],
  ['--f-hart', '--f-hart-flaeche', 3, 'Feldname auf Hard-Facts-Feld (Großtext)'],
  ['--f-weich', '--f-weich-flaeche', 3, 'Feldname auf Soft-Facts-Feld (Großtext)'],
  ['--f-text-2', '--f-hart-flaeche', 4.5, 'Leitfrage auf Hard-Facts-Feld'],
  ['--f-text-2', '--f-weich-flaeche', 4.5, 'Leitfrage auf Soft-Facts-Feld'],
  ['--f-auf-kern', '--f-kern', 3, 'Schrift im Kern (Großtext)'],
  ['--f-erfolg', '--f-hintergrund', 4.5, 'Live-Pille'],
  ['--f-warnung', '--f-hintergrund', 4.5, 'Beispieldaten-Pille']
];
bericht.farbpaare = await seite.evaluate((paare) => {
  const leinwand = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
  const rgb = (farbe) => { leinwand.clearRect(0, 0, 1, 1); leinwand.fillStyle = '#000'; leinwand.fillStyle = farbe; leinwand.fillRect(0, 0, 1, 1); return [...leinwand.getImageData(0, 0, 1, 1).data].slice(0, 3); };
  const lum = ([r, g, b]) => { const k = (c) => { c /= 255; return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); }; return 0.2126 * k(r) + 0.7152 * k(g) + 0.0722 * k(b); };
  const sonde = document.createElement('div');
  document.querySelector('.buehne').appendChild(sonde);
  const aufloesen = (token) => { sonde.style.color = 'var(' + token + ')'; return getComputedStyle(sonde).color; };
  const liste = paare.map(([vorne, hinten, soll, was]) => {
    const a = rgb(aufloesen(vorne)), b = rgb(aufloesen(hinten));
    const la = lum(a), lb = lum(b);
    const k = Math.round(((Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05)) * 100) / 100;
    return { was, vorne, hinten, kontrast: k, soll };
  });
  sonde.remove();
  return liste;
}, PAARE);
bericht.farbpaare.forEach((p) => {
  if (p.kontrast < p.soll) fehler('Farben', p.was + ': ' + p.kontrast + ' : 1 (Soll ' + p.soll + ' : 1; ' + p.vorne + ' auf ' + p.hinten + ')');
  else if (p.kontrast < 4.5) warnung('Farben', p.was + ': ' + p.kontrast + ' : 1 – reicht nur für Großtext (≥ 24 px)');
});

/* ---------- Folien ---------- */
let folien = await seite.evaluate(() => window.Deck.folien().map((f) => ({ id: f.id, nummer: f.nummer, titel: f.titel, schritte: f.schritteGesamt, backup: f.backup, optional: f.optional, zeit: f.zeit, feld: f.feld })));
if (opt.nur) {
  folien = folien.filter((f) => opt.nur.includes(f.id) || opt.nur.includes(f.nummer) || opt.nur.includes(String(Number(f.nummer))));
  if (!folien.length) fehler('Auswahl', '--nur ' + opt.nur.join(',') + ': keine passende Folie gefunden');
}

/* Prüfungen im Browser für die aktuell sichtbare Folie */
async function folieUntersuchen(id) {
  return seite.evaluate((folienId) => {
    const ergebnis = { ueberlauf: [], abgeschnitten: [], ueberlappung: [], klein: [], kontrast: [], woerter: 0, notizen: true, attribute: {} };
    const textFlaechen = [];   /* für die Überlappungsprüfung (Punkt 2b) */
    const folie = document.getElementById(folienId);
    const buehne = document.querySelector('.buehne');
    const bRect = buehne.getBoundingClientRect();
    const skala = bRect.width / 1920;
    const inBuehne = (r) => ({ l: (r.left - bRect.left) / skala, t: (r.top - bRect.top) / skala, r: (r.right - bRect.left) / skala, b: (r.bottom - bRect.top) / skala });
    const pfad = (el) => {
      const teile = [];
      let e = el;
      while (e && e !== folie && teile.length < 4) {
        let t = e.tagName.toLowerCase();
        if (e.id) t += '#' + e.id;
        else if (e.classList && e.classList.length) t += '.' + [...e.classList].slice(0, 2).join('.');
        teile.unshift(t);
        e = e.parentElement;
      }
      return teile.join(' > ');
    };
    const textVon = (el) => (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 50);
    const sichtbar = (el) => {
      if (el.closest('.notizen, script, template, [hidden], .nur-screenreader, .ww-messer')) return false;
      const s = getComputedStyle(el);
      if (s.display === 'none' || s.visibility !== 'visible') return false;
      let e = el;
      while (e && e !== folie.parentElement) {
        if (parseFloat(getComputedStyle(e).opacity) < 0.05) return false;
        e = e.parentElement;
      }
      const r = el.getBoundingClientRect();
      return r.width > 0.5 && r.height > 0.5;
    };
    const eigenerText = (el) => [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());

    /* Farben in sRGB umrechnen (Canvas versteht oklch(), color() …) */
    const leinwand = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
    const rgba = (farbe) => {
      leinwand.clearRect(0, 0, 1, 1);
      leinwand.fillStyle = 'rgba(0,0,0,0)';
      leinwand.fillStyle = farbe;
      leinwand.fillRect(0, 0, 1, 1);
      const d = leinwand.getImageData(0, 0, 1, 1).data;
      return [d[0], d[1], d[2], d[3] / 255];
    };
    const lum = ([r, g, b]) => {
      const k = (c) => { c /= 255; return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
      return 0.2126 * k(r) + 0.7152 * k(g) + 0.0722 * k(b);
    };
    const mischen = (oben, unten) => {
      const a = oben[3];
      return [oben[0] * a + unten[0] * (1 - a), oben[1] * a + unten[1] * (1 - a), oben[2] * a + unten[2] * (1 - a), 1];
    };
    const hintergrund = (el) => {
      const schichten = [];
      let e = el;
      while (e) {
        const s = getComputedStyle(e);
        const f = rgba(s.backgroundColor);
        if (f[3] > 0) schichten.push(f);
        if (f[3] >= 0.999) break;
        e = e.parentElement;
      }
      let farbe = [255, 255, 255, 1];
      for (let i = schichten.length - 1; i >= 0; i--) farbe = mischen(schichten[i], farbe);
      return farbe;
    };
    const kontrast = (a, b) => { const la = lum(a), lb = lum(b); return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05); };

    /* Metaangaben (dürfen 22–27 px haben) */
    const META = '.quelle, .meta, [data-meta], .kicker, .beispiel, .live, .chip:not(.chip--gross), .laufkopf, .karte-kicker, .angaben-titel, ' +
      '.sr-seite, .sr-ringtext, .sr-karte-folie, .sr-label-folie, .sr-karte-feld, .sr-quelle, .sr-label-klein, .umfrage-knopf, .umfrage-taste, .umfrage-marke, ' +
      '.legende, .zitat-quelle, .raetsel-fortschritt, .tabelle, .ww-eingabe, kbd, .taste, .qr-kurz, figcaption, .bild-platzhalter, [class*="legende"], [class*="skala"], [class*="-nr"]';

    const vollbild = folie.getAttribute('data-layout') === 'vollbild';
    const alleEl = [...folie.querySelectorAll('*')];
    for (const el of alleEl) {
      if (!sichtbar(el)) continue;
      if (el.closest('.raetsel-motiv, [data-ueberlauf-ok]')) continue;
      const r = inBuehne(el.getBoundingClientRect());
      /* 1. außerhalb der Bühne */
      if (r.l < -1 || r.t < -1 || r.r > 1921 || r.b > 1081) {
        if (!(vollbild && el.closest('.folie-inhalt') && el.closest('.raetsel'))) {
          ergebnis.ueberlauf.push({ el: pfad(el), text: textVon(el), rect: [Math.round(r.l), Math.round(r.t), Math.round(r.r), Math.round(r.b)] });
        }
      }
      const istSvgText = el instanceof SVGElement && /^(text|tspan|textPath)$/i.test(el.tagName);
      if (!(eigenerText(el) || istSvgText)) continue;
      if (el instanceof SVGElement && !istSvgText) continue;
      /* Textflächen sammeln: genaue Zeilenkästen der eigenen Textknoten */
      if (!istSvgText && !el.closest('[data-ueberlappung-ok]')) {
        const kaesten = [];
        for (const n of el.childNodes) {
          if (n.nodeType !== 3 || !n.textContent.trim()) continue;
          const bereich = document.createRange();
          bereich.selectNodeContents(n);
          /* Zeilenkasten = Schriftkegel (Ober- bis Unterlänge); bei engem
             Zeilenabstand überlappen sich Kegel benachbarter Zeilen, ohne dass
             sich Buchstaben berühren. Deshalb nur den Kern (mittlere 56 %) prüfen. */
          for (const q of bereich.getClientRects()) {
            if (q.width <= 1 || q.height <= 1) continue;
            const k = inBuehne(q), rand = (k.b - k.t) * 0.22;
            kaesten.push({ l: k.l, r: k.r, t: k.t + rand, b: k.b - rand });
          }
        }
        if (kaesten.length) textFlaechen.push({ el, kaesten });
      }
      const s = getComputedStyle(el);
      /* 2. abgeschnittener Text: im eigenen Kasten oder durch einen Vorfahren mit overflow */
      if (!istSvgText) {
        const ueber = (s.overflowX !== 'visible' && el.scrollWidth > el.clientWidth + 1) || (s.overflowY !== 'visible' && el.scrollHeight > el.clientHeight + 1);
        if (ueber || (s.textOverflow === 'ellipsis' && el.scrollWidth > el.clientWidth + 1)) {
          ergebnis.abgeschnitten.push({ el: pfad(el), text: textVon(el), grund: 'Text passt nicht in sein Element' });
        } else {
          /* ragt der Text aus einem sichtbaren Kasten (Rand oder Hintergrund)? */
          let k = el.parentElement;
          while (k && k !== folie) {
            const ks = getComputedStyle(k);
            const hatKasten = parseFloat(ks.borderLeftWidth) > 0 || parseFloat(ks.borderTopWidth) > 0 || rgba(ks.backgroundColor)[3] > 0.05;
            if (hatKasten) {
              const kr = inBuehne(k.getBoundingClientRect());
              /* Absichtlich außen platzierte Beschriftung (absolut positioniert,
                 ganz außerhalb des Kastens, z. B. Methodenbeschreibung unter der
                 Karte im Steuerrad) ist kein Überlauf */
              let aussen = false;
              for (let a = el; a && a !== k; a = a.parentElement) {
                if (/^(absolute|fixed)$/.test(getComputedStyle(a).position)) {
                  const ar = inBuehne(a.getBoundingClientRect());
                  if (ar.r <= kr.l + 2 || ar.l >= kr.r - 2 || ar.b <= kr.t + 2 || ar.t >= kr.b - 2) aussen = true;
                  break;
                }
              }
              if (!aussen && (r.l < kr.l - 2 || r.r > kr.r + 2 || r.t < kr.t - 2 || r.b > kr.b + 2)) {
                ergebnis.abgeschnitten.push({ el: pfad(el), text: textVon(el), grund: 'ragt aus dem Kasten ' + pfad(k) });
              }
              break;
            }
            k = k.parentElement;
          }
          let v = el.parentElement;
          while (v && v !== folie) {
            const vs = getComputedStyle(v);
            if (vs.overflowX !== 'visible' || vs.overflowY !== 'visible') {
              const vr = inBuehne(v.getBoundingClientRect());
              if (r.l < vr.l - 2 || r.r > vr.r + 2 || r.t < vr.t - 2 || r.b > vr.b + 2) {
                ergebnis.abgeschnitten.push({ el: pfad(el), text: textVon(el), grund: 'ragt aus ' + pfad(v) + ' heraus' });
              }
              break;
            }
            v = v.parentElement;
          }
        }
      }
      /* 3. Schriftgröße in Bühnen-Pixeln */
      let groesse = parseFloat(s.fontSize);
      if (el instanceof SVGElement && el.ownerSVGElement) {
        const ctm = el.getScreenCTM();
        if (ctm) groesse = groesse * Math.hypot(ctm.a, ctm.b) / skala;
      } else {
        /* zusätzliche CSS-Skalierung (z. B. Vorschau) berücksichtigen */
        const echt = el.getBoundingClientRect().height / skala;
        if (echt > 0 && el.offsetHeight > 0) groesse = groesse * Math.min(1, echt / el.offsetHeight);
      }
      groesse = Math.round(groesse * 10) / 10;
      const istMeta = !!el.closest(META);
      if (groesse < 21.5) ergebnis.klein.push({ el: pfad(el), text: textVon(el), px: groesse, art: 'fehler' });
      else if (groesse < 27.5 && !istMeta) ergebnis.klein.push({ el: pfad(el), text: textVon(el), px: groesse, art: 'warnung' });
      /* 4. Kontrast (Text auf Bild, SVG-Flächen und Beispiel-Platzhalter werden anders geprüft) */
      if (!istSvgText && !el.closest('.sr-label, .raetsel, .bild-platzhalter, .qr') && !(vollbild && el.closest('.folie-kopf, .folie-fuss, .laufkopf'))) {
        const vorne = rgba(s.color);
        if (vorne[3] > 0.05) {
          const hinten = hintergrund(el);
          const k = kontrast(mischen(vorne, hinten), hinten);
          const fett = parseInt(s.fontWeight, 10) >= 700;
          const gross = groesse >= 24 || (fett && groesse >= 18.66);
          const soll = gross ? 3 : 4.5;
          if (k < soll) ergebnis.kontrast.push({ el: pfad(el), text: textVon(el), kontrast: Math.round(k * 100) / 100, soll, px: groesse });
        }
      }
    }

    /* 2b. Überlappender Text: Zeilen zweier verschiedener Elemente liegen
       übereinander (z. B. eine Beschreibung rutscht in die Quellenzeile).
       Ausnahme: Elemente mit data-ueberlappung-ok (und ihr Inhalt). */
    const schnitt = (a, b) => Math.min(a.r, b.r) - Math.max(a.l, b.l) > 4 && Math.min(a.b, b.b) - Math.max(a.t, b.t) > 4;
    for (let i = 0; i < textFlaechen.length; i++) {
      for (let j = i + 1; j < textFlaechen.length; j++) {
        const A = textFlaechen[i], B = textFlaechen[j];
        if (A.el.contains(B.el) || B.el.contains(A.el)) continue;
        if (A.kaesten.some((a) => B.kaesten.some((b) => schnitt(a, b)))) {
          ergebnis.ueberlappung.push({ a: pfad(A.el), ta: textVon(A.el), b: pfad(B.el), tb: textVon(B.el) });
        }
      }
    }

    /* 5. Wortbudget: sichtbarer Text ohne Kopfzeile, Quelle, Kennzeichnungen, Bedienelemente */
    let text = '';
    const zaehlen = (el) => {
      if (el.nodeType !== 1) return;
      /* Kennzeichnungen, Bedien- und Sprunghinweise zählen nicht als Folientext */
      if (el.matches('.beispiel, .live, .umfrage-werkzeuge, .ww-eingabe, .umfrage-taste, .raetsel-fortschritt, .sr-karte-folie, .sr-label-folie, .sr-quelle, [data-meta], script, [aria-hidden="true"], .nur-screenreader')) return;
      const s = getComputedStyle(el);
      if (s.display === 'none' || parseFloat(s.opacity) < 0.05) return;
      for (const n of el.childNodes) {
        if (n.nodeType === 3 && s.visibility === 'visible') text += ' ' + n.textContent;
        else if (n.nodeType === 1 && n.tagName === 'BR') text += '\u0001';   /* Zeilenumbruch merken */
        else if (n.nodeType === 1) zaehlen(n);
      }
    };
    [...folie.children].filter((c) => !c.matches('.laufkopf, .folie-fuss, .notizen, script')).forEach(zaehlen);
    /* „Marken-<br>nutzen“ = ein Wort (Trennstrich am Zeilenende), sonst Umbruch = Leerraum */
    text = text.replace(/([\p{L}])-\s*\u0001\s*(?=\p{Ll})/gu, '$1').replace(/\u0001/g, ' ');
    ergebnis.woerter = (text.match(/[\p{L}\p{N}][\p{L}\p{N}'’.,–-]*/gu) || []).length;

    /* 6. Notizen und Attribute */
    const notiz = folie.querySelector(':scope > .notizen');
    ergebnis.notizen = !!(notiz && notiz.textContent.trim());
    ergebnis.attribute = {
      zeit: folie.getAttribute('data-zeit'), titel: folie.getAttribute('data-titel'),
      feld: folie.getAttribute('data-feld'), buendel: folie.getAttribute('data-buendel')
    };
    return ergebnis;
  }, id);
}

async function warteRahmen() {
  await seite.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
}

for (const f of folien) {
  const eintrag = { id: f.id, nummer: f.nummer, titel: f.titel, schritte: f.schritte, backup: f.backup, bilder: [] };
  const ort = 'Folie ' + f.nummer + ' (' + f.id + ')';
  const stufen = opt.schritte ? [...Array(f.schritte + 1).keys()] : [f.schritte];
  const zwischen = [];      /* Befunde der Zwischenschritte (nur mit --schritte) */
  for (const n of stufen) {
    await seite.evaluate(({ id, n }) => window.Deck.gehe(id, n, { sofort: true, still: true }), { id: f.id, n });
    await warteRahmen();
    if (!opt.ohneBilder) {
      const name = f.id + (opt.schritte ? '_s' + n : '') + '.png';
      await seite.screenshot({ path: path.join(ausgabe, name) });
      eintrag.bilder.push(name);
      bericht.screenshots.push(name);
    }
    if (opt.schritte && n !== f.schritte) zwischen.push({ n, u: await folieUntersuchen(f.id) });
  }
  /* Prüfungen im Endzustand (alle Schritte sichtbar) */
  if (stufen[stufen.length - 1] !== f.schritte) {
    await seite.evaluate(({ id, n }) => window.Deck.gehe(id, n, { sofort: true, still: true }), { id: f.id, n: f.schritte });
    await warteRahmen();
  }
  const u = await folieUntersuchen(f.id);
  eintrag.woerter = u.woerter;
  /* Befunde melden; jeder Befund nur einmal je Folie (Endzustand zuerst,
     danach Zwischenschritte mit Zusatz „nur in Schritt n“) */
  const gemeldet = new Set();
  const melden = (erg, zusatz) => {
    const einmal = (art, text, fn, extra) => { if (gemeldet.has(text)) return; gemeldet.add(text); fn(ort, text + (extra || '') + zusatz); };
    erg.ueberlauf.forEach((x) => einmal('u', 'außerhalb der Bühne: ' + x.el + ' „' + x.text + '“', fehler, ' [' + x.rect.join(', ') + ']'));
    erg.abgeschnitten.forEach((x) => einmal('a', 'abgeschnittener Text: ' + x.el + ' „' + x.text + '“ – ' + x.grund, fehler));
    erg.ueberlappung.forEach((x) => einmal('l', 'Text überlappt: ' + x.a + ' „' + x.ta + '“ ↔ ' + x.b + ' „' + x.tb + '“', fehler));
    erg.klein.forEach((x) => einmal('k', 'Schrift ' + x.px + ' px (' + (x.art === 'fehler' ? 'unter 22 px' : 'Inhaltstext unter 28 px') + '): ' + x.el + ' „' + x.text + '“', x.art === 'fehler' ? fehler : warnung));
    erg.kontrast.forEach((x) => einmal('c', 'Kontrast ' + x.kontrast + ' : 1 (Soll ' + x.soll + ' : 1, ' + x.px + ' px): ' + x.el + ' „' + x.text + '“', fehler));
  };
  melden(u, '');
  zwischen.forEach((z) => melden(z.u, ' (nur in Schritt ' + z.n + ')'));
  if (!f.backup && u.woerter > 40) warnung(ort, 'Wortbudget: ' + u.woerter + ' sichtbare Wörter (Hauptfolie höchstens ca. 40)');
  if (!u.notizen) warnung(ort, 'Sprechtext fehlt (<aside class="notizen">)');
  if (u.attribute.zeit === null) fehler(ort, 'data-zeit fehlt');
  if (!u.attribute.titel) warnung(ort, 'data-titel fehlt');
  bericht.folien.push(eintrag);
}

/* ---------- Druck / PDF ---------- */
if (opt.druck) {
  const pdfPfad = path.resolve(opt.druck);
  fs.mkdirSync(path.dirname(pdfPfad), { recursive: true });
  const druckSeite = await kontext.newPage();
  seiteBeobachten(druckSeite, 'Druck');
  await druckSeite.goto(adresse({ druck: '' }), { waitUntil: 'load' });
  await druckSeite.waitForFunction(() => window.Deck && window.Deck.istBereit, null, { timeout: 15000 });
  await druckSeite.evaluate(() => document.fonts.ready);
  await druckSeite.emulateMedia({ media: 'print' });
  await druckSeite.pdf({ path: pdfPfad, preferCSSPageSize: true, printBackground: true });
  const roh = fs.readFileSync(pdfPfad).toString('latin1');
  const seiten = (roh.match(/\/Type\s*\/Page[^s]/g) || []).length;
  const erwartet = await druckSeite.evaluate(() => window.Deck.folien().length);
  bericht.druck = { pdf: path.relative(process.cwd(), pdfPfad), seiten, erwartet };
  if (seiten !== erwartet) fehler('Druck', 'PDF hat ' + seiten + ' Seiten, erwartet ' + erwartet + ' (eine Seite je Folie)');
  await druckSeite.close();
}

await ende();

async function ende() {
  bericht.externeAnfragen = [...new Set(bericht.externeAnfragen)];
  bericht.externeAnfragen.forEach((u) => fehler('Netzwerk', 'externe Anfrage blockiert: ' + u));
  bericht.zusammenfassung = {
    folien: bericht.folien.length,
    screenshots: bericht.screenshots.length,
    fehler: bericht.fehler.length,
    warnungen: bericht.warnungen.length,
    ausgabe: path.relative(process.cwd(), ausgabe) || '.',
    ergebnis: bericht.fehler.length ? 'FEHLER – bitte beheben' : (bericht.warnungen.length ? 'ok mit Warnungen' : 'ok')
  };
  const json = JSON.stringify(bericht, null, 2);
  fs.writeFileSync(path.join(ausgabe, 'bericht.json'), json);
  console.log(json);
  await browser.close();
  process.exit(bericht.fehler.length ? 1 : 0);
}
