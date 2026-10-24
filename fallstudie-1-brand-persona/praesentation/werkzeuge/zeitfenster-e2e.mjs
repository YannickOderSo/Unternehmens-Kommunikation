#!/usr/bin/env node
/* =============================================================================
   zeitfenster-e2e.mjs – Zeitfenster der Live-Abstimmung im Browser prüfen
   -----------------------------------------------------------------------------
   Seit 21.10.2026 (Nacharbeit zum Zeitfenster vom 20.10.2026). Prüft die
   Seite der Handys (js/abstimmen.js) und Folie 08 (js/komponenten.js, 3a)
   Ende zu Ende in Chromium – das Server-Skript prüft schon
   live-abstimmung-test.mjs (Prüfungen und Mutanten); hier geht es um die
   Logik auf Handy und Folie: Abfrage mit minuten, Speicher der Folie mit
   Ablauf, Pause, Referentenfenster, Tooltip, Ablauf auf dem Handy.

   NUR LOKAL: Die Präsentation kommt von einem kleinen Server auf localhost,
   die Web-App ist eine Attrappe mit dem echten Skript (skriptLaden aus
   live-abstimmung-test.mjs) und VIRTUELLER UHR. Die Seiten bekommen sie über
   ?quelle=http://localhost:…/exec. Jede andere Anfrage (auch an die echte
   Web-App in marke.js) wird abgebrochen und ist ein Fehler. Die Uhren der
   Browser stellt Playwright vor (clock), die der Attrappe /uhr?vor=MINUTEN –
   kein Test wartet 30 Minuten.

   Szenarien
     folie        Folie verbunden: jede Stand-Abfrage trägt minuten=30
                  (marke.js → gueltigMinuten), Tooltip „zählt Stimmen der
                  letzten 30 Min.“
     handys       3 Handys, Umentscheiden; nach 31 Min. fallen alte Stimmen von
                  der Folie, die Handys zeigen wieder die Tiere (ohne „bisherige
                  Wahl“), neu abstimmen zählt einmal; Neuladen vor Ablauf →
                  „Danke“, nach Ablauf → sofort die Tiere
     speicher     Speicher der Folie: frisch → gespeicherte Werte; älter als
                  30 Min. → NULLEN (keine Beispielwerte); andere Runde →
                  Beispielwerte; ohne liveQuelle → alte Werte bleiben
     kontrolle    „30 Minuten vorher“ kontrolliert (n = 0 gespeichert), im
                  Vortrag Folie 08 betreten: vor der ersten (langsamen) Antwort
                  stehen Nullen, keine Beispieldaten
     pause        Pause übersteht F5; nach 31 Min. verfällt sie mit ihren
                  Handwerten – beim Neuladen und beim erneuten Betreten
     referent     Handwerte im Vortragsfenster, Referentenfenster 31 Min.
                  später geöffnet: zeigt dieselben Zahlen
     tooltip      Web-App antwortet nie: Tooltip sagt „angefragt (noch keine
                  Antwort …)“ statt „zählt …“
     altefassung  Skript ohne Zeitfenster (wie Fassung 19.10.2026): alte Stimme
                  zählt weiter, Tooltip „OHNE Zeitfenster“, Warnung genau einmal
     losschicken  Antwort kommt 6 s nach dem Eingang: Das Handy misst ab dem
                  Losschicken – 30 Min. + 1,5 s danach zeigt es die Tiere
     lasttest     der Lasttest (live-abstimmung-test.mjs) erkennt eine Zeit, die
                  in der Tabelle zu früh ODER zu spät steht (Gegenprobe)

   MUTATIONSTEST (--mutationen): absichtlich kaputte Kopien von
   js/komponenten.js und js/abstimmen.js (nur für den Browser, die Dateien
   bleiben unverändert), z. B. „minuten nicht angehängt“, „Speicher ohne
   Ablauf“, „Handy ohne Ablauf“, „Zeit der Bestätigung statt des
   Losschickens“. Jede Kopie läuft durch die Szenarien, die sie finden sollen;
   mindestens eine Prüfung muss scheitern. Nicht dabei: das stille Nachsenden
   (NACHZÜGLER in js/abstimmen.js) – dafür bräuchte es eine Antwort, die nach
   dem Zeitlimit des Handys doch noch kommt; das ist nur im Code geprüft. Und
   „Ablauf beim Öffnen nicht geprüft“: gleichwertig, weil pageshow gleich nach
   dem Laden noch einmal prüft (kein Test kann den Unterschied sehen).

   AUFRUF (im Ordner praesentation/)
     PLAYWRIGHT_CORE=/pfad/zu/node_modules/playwright-core \
     node werkzeuge/zeitfenster-e2e.mjs [--ausgabe _test/zeitfenster-e2e]
          [--nur handys,speicher] [--mutationen]   (mit --nur: nur deren Mutanten)
   Bilder und Protokoll landen in --ausgabe (Standard _test/zeitfenster-e2e;
   _test/ ist in .gitignore). Exit-Code 0 = alles bestanden bzw. alle
   Mutanten erkannt, 1 = Fehler, 2 = Abbruch. Dauer ca. 1 Minute, mit
   --mutationen ca. 2 Minuten (gemessen 21.10.2026). Browser: CHROME_PFAD oder
   /opt/pw-browsers/chromium-1194/chrome-linux/chrome.
   ============================================================================= */

import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { skriptLaden, lasttest } from './live-abstimmung-test.mjs';

const HIER = path.dirname(fileURLToPath(import.meta.url));
const PRAES = path.resolve(HIER, '..');
const MIN = 60000;

/* ---------- Aufruf ---------- */
const argv = process.argv.slice(2);
const wert = (name) => { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : undefined; };
const AUS = path.resolve(PRAES, wert('--ausgabe') || '_test/zeitfenster-e2e');
const NUR = wert('--nur') ? wert('--nur').split(',').map((x) => x.trim()).filter(Boolean) : null;
const MUTATIONEN_AN = argv.includes('--mutationen');
fs.mkdirSync(AUS, { recursive: true });

const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require(process.env.PLAYWRIGHT_CORE || 'playwright-core'));
} catch (e) {
  console.error('playwright-core nicht gefunden. PLAYWRIGHT_CORE=/pfad/zu/node_modules/playwright-core setzen. (' + e.message + ')');
  process.exit(2);
}
const CHROME = process.env.CHROME_PFAD || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

/* Ports: Präsentation, Attrappe, Attrappe mit langsamer Antwort, alte
   Fassung, ein Port ohne Server (Web-App nicht erreichbar) */
const PORT = { statik: 8851, web: 8852, langsam: 8853, alt: 8854, tot: 8855 };
const quelle = (port) => 'http://localhost:' + port + '/exec';
const SEITE = 'http://localhost:' + PORT.statik + '/';
const folieUrl = (q, extra = '') => SEITE + 'index.html?' + (q ? 'quelle=' + encodeURIComponent(q) : '') + extra + '#f08';
const handyUrl = (q) => SEITE + 'abstimmen.html?u=tier&quelle=' + encodeURIComponent(q);

/* ---------- Protokoll ---------- */
let leise = false;
const zeilen = [];
const log = (text) => { zeilen.push(text); if (!leise) console.log(text); };
let ok = 0;
let fehler = 0;
function pruefe(bedingung, text) {
  if (bedingung) { ok++; log('  ok      ' + text); } else { fehler++; log('  FEHLER  ' + text); }
  return !!bedingung;
}
const warten = (ms) => new Promise((fertig) => setTimeout(fertig, ms));
async function bis(fn, ms = 10000, takt = 100) {
  const ende = Date.now() + ms;
  while (Date.now() < ende) {
    try { const r = await fn(); if (r) return r; } catch (e) { /* Seite lädt gerade */ }
    await warten(takt);
  }
  return null;
}
const gleich = (a, b) => JSON.stringify(a) === JSON.stringify(b);
/* Schlüssel im Browser-Speicher (js/deck.js: 'deck:' + Pfad + ':' + Name) */
const SPEICHER_UMFRAGE = 'deck:/index.html:umfrage:tier';

/* ---------- Präsentation über localhost (mit Ersetzungen für Mutanten) ---------- */
const TYPEN = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.json': 'application/json', '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8' };
const ersetzungen = {};          /* 'js/komponenten.js' → geänderter Text (nur Mutationstest) */
const statik = http.createServer((req, res) => {
  const u = new URL(req.url, 'http://localhost');
  const rel = decodeURIComponent(u.pathname).replace(/^\/+/, '') || 'index.html';
  const datei = path.resolve(PRAES, rel);
  if (!datei.startsWith(PRAES + path.sep)) { res.writeHead(404); res.end(); return; }
  const kopf = { 'Content-Type': TYPEN[path.extname(datei).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store' };
  if (ersetzungen[rel] !== undefined) { res.writeHead(200, kopf); res.end(ersetzungen[rel]); return; }
  if (!fs.existsSync(datei) || fs.statSync(datei).isDirectory()) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, kopf);
  fs.createReadStream(datei).pipe(res);
});

/* ---------- Attrappen der Web-App (echtes Skript, virtuelle Uhr) ----------
   verzoegerung: Die Stimme wird sofort gezählt (Zeit = Eingang), die Antwort
   kommt erst so viele ms später – wie eine langsame Verbindung zurück. */
function attrappe(port, { quelltext, verzoegerung = 0 } = {}) {
  const a = { s: null, neu() { a.s = quelltext ? skriptLaden({ quelltext }) : skriptLaden(); return a.s; } };
  a.neu();
  a.server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');
    if (url.pathname === '/uhr') {
      const vor = Number(url.searchParams.get('vor') || 0);
      if (vor > 0) a.s.uhr.vorstellen(Math.round(vor * MIN));
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
      res.end(JSON.stringify({ jetzt: new Date(a.s.uhr.jetzt()).toISOString() }));
      return;
    }
    if (url.pathname !== '/exec') { res.writeHead(404); res.end(); return; }
    const p = {};
    for (const [k, v] of url.searchParams) if (!(k in p)) p[k] = v;   /* wie Apps Script: der erste zählt */
    const r = a.s.anfrage(p);
    const senden = () => {
      res.writeHead(200, { 'Content-Type': (r.mime === 'JAVASCRIPT' ? 'application/javascript' : 'application/json') + '; charset=utf-8', 'Cache-Control': 'no-store' });
      res.end(r.text);
    };
    if (verzoegerung) setTimeout(senden, verzoegerung); else senden();
  });
  a.stimme = (geraet, option, runde = 'probe') => a.s.anfrage({ aktion: 'stimme', umfrage: 'tier', runde, option: String(option), anzahl: '5', geraet });
  a.stand = (extra = {}) => a.s.anfrage(Object.assign({ aktion: 'stand', umfrage: 'tier', runde: 'probe', anzahl: '5' }, extra)).daten;
  return a;
}
const SKRIPT = fs.readFileSync(path.join(PRAES, 'live-abstimmung/apps-script.gs'), 'utf8');
function skriptGeaendert(alt, neu) {
  if (SKRIPT.split(alt).length !== 2) throw new Error('Skript-Stelle nicht (genau einmal) gefunden: ' + alt);
  return SKRIPT.replace(alt, neu);
}
/* wie die Fassung vor dem Zeitfenster: minuten wird ignoriert, Antwort ohne "minuten" */
const SKRIPT_ALT = skriptGeaendert('const minuten = p.minuten === undefined ? 0 : minutenWert_(p.minuten);', 'const minuten = 0;')
  .replace("const FASSUNG = '20.10.2026';", "const FASSUNG = '19.10.2026';");
const ZEILE_ZEIT = 'const werte = [[new Date(), p.runde';
const web = attrappe(PORT.web);
const langsam = attrappe(PORT.langsam, { verzoegerung: 2000 });
const alt = attrappe(PORT.alt, { quelltext: SKRIPT_ALT });
const sehrLangsam = { port: 8856, a: attrappe(8856, { verzoegerung: 6000 }) };

/* ---------- Browser ---------- */
const NETZ_AUS = ['--disable-background-networking', '--no-proxy-server',
  '--host-resolver-rules=MAP * ~NOTFOUND , EXCLUDE localhost , EXCLUDE 127.0.0.1'];
let browser;
const extern = [];
const konsole = [];
const offen = [];
const ERLAUBT = new RegExp('^http://localhost:(' + Object.values(PORT).concat(sehrLangsam.port).join('|') + ')/');
async function kontext(name, viewport = { width: 1600, height: 900 }) {
  const k = await browser.newContext({ viewport, deviceScaleFactor: 1 });
  offen.push(k);
  await k.route('**/*', (route) => {
    const u = route.request().url();
    if (/^(data:|blob:)/.test(u) || ERLAUBT.test(u)) return route.continue();
    extern.push(name + ': ' + u);
    return route.abort();
  });
  await k.clock.install({ time: Date.now() });
  k.on('page', (p) => {
    p.on('console', (m) => { if (m.type() === 'warning' || m.type() === 'error') konsole.push(name + ' [' + m.type() + '] ' + m.text()); });
    p.on('pageerror', (e) => { fehler++; log('  FEHLER  Seitenfehler ' + name + ': ' + e.message); });
  });
  return k;
}
async function kontexteSchliessen() { while (offen.length) await offen.pop().close().catch(() => {}); }
const bild = async (seite, name) => { if (!leise) await seite.screenshot({ path: path.join(AUS, name) }).catch(() => {}); };

/* Zustand der Umfrage auf Folie 08 (im Referentenfenster: die echte, nicht die Vorschau) */
const folieStand = (seite) => seite.evaluate(() => {
  const u = Array.from(document.querySelectorAll('.umfrage[data-umfrage="tier"]')).map((h) => h._umfrage).filter(Boolean)[0];
  if (!u) return null;
  return { werte: u.werte.slice(), beispiel: u.beispiel, n: u.nEl.textContent, zustand: u.live && u.live.zustand,
    fensterAn: u.live && u.live.fensterAn, minuten: u.live && u.live.minuten, titel: u.live && u.live.pille.title };
});
async function folieErwarten(seite, werte, text, { zustand = 'live', ms = 10000 } = {}) {
  const r = await bis(async () => {
    const s = await folieStand(seite);
    return s && gleich(s.werte, werte) && !s.beispiel && (!zustand || s.zustand === zustand) ? s : null;
  }, ms);
  const s = r || await folieStand(seite).catch(() => null);
  pruefe(!!r, text + ' → ' + JSON.stringify(s && s.werte) + ' ' + (s && s.n) + (s && s.beispiel ? ' (Beispiel)' : '') + ' [' + (s && s.zustand) + ']');
  return s;
}
const handyZustand = (seite) => seite.evaluate(() => {
  const danke = document.querySelector('.karte--danke');
  const auswahl = document.getElementById('auswahl');
  return {
    danke: !!danke,
    wahl: danke ? (danke.querySelector('.danke-wahl strong') || {}).textContent : null,
    auswahl: !!auswahl && !auswahl.hidden,
    bisher: Array.from(document.querySelectorAll('.tier.ist-bisher')).map((b) => b.getAttribute('data-option'))
  };
});
const zustandText = (s) => (s.danke ? '„Danke“ (' + s.wahl + ')' : s.auswahl ? 'Tiere' + (s.bisher.length ? ' mit bisheriger Wahl ' + s.bisher : ' ohne bisherige Wahl') : '?');
async function abstimmen(seite, option, name) {
  const z = await handyZustand(seite);
  if (z.danke) await seite.click('.karte--danke .knopf');               /* „Doch anders entscheiden“ */
  await seite.click('.tier[data-option="' + option + '"]');
  const r = await bis(async () => { const s = await handyZustand(seite); return s.danke && s.wahl === name ? s : null; }, 15000);
  pruefe(!!r, 'Handy stimmt ab: ' + name);
}
async function handyErwarten(seite, erwartung, text, ms = 5000) {
  const r = await bis(async () => {
    const s = await handyZustand(seite);
    if (erwartung === 'auswahl') return !s.danke && s.auswahl && s.bisher.length === 0 ? s : null;
    return s.danke && s.wahl === erwartung ? s : null;
  }, ms);
  const s = r || await handyZustand(seite);
  pruefe(!!r, text + ' → ' + zustandText(s));
}
/* Gleich nach dem (Neu-)Laden: der ERSTE sichtbare Zustand („Danke“ oder Tiere) */
async function ersterZustand(seite) {
  return bis(async () => { const s = await handyZustand(seite); return s.danke || s.auswahl ? s : null; }, 5000, 20);
}
/* marke.js im Browser anpassen (nur dieser Kontext): z. B. andere Runde, ohne liveQuelle */
async function markeAnpassen(k, aenderung) {
  await k.addInitScript((a) => {
    let wert;
    Object.defineProperty(window, 'MARKE', {
      configurable: true,
      get() { return wert; },
      set(v) { if (v && v.umfragen && v.umfragen.tier) Object.assign(v.umfragen.tier, a); wert = v; }
    });
  }, aenderung);
}

/* =============================================================================
   SZENARIEN
   ============================================================================= */
const SZENARIEN = {
  async folie() {
    log('Folie verbunden (Stand-Abfragen mit minuten)');
    web.neu();
    const k = await kontext('folie');
    const seite = await k.newPage();
    const anfragen = [];
    seite.on('request', (r) => { if (r.url().indexOf(quelle(PORT.web)) === 0) anfragen.push(r.url()); });
    await seite.goto(folieUrl(quelle(PORT.web)));
    const s = await folieErwarten(seite, [0, 0, 0, 0, 0], 'Folie verbunden, n = 0');
    await warten(2500);                                                   /* mindestens eine weitere Abfrage */
    pruefe(s && s.minuten === 30 && s.fensterAn === true, 'Folie: minuten 30, die Web-App wendet das Fenster an (fensterAn ' + (s && s.fensterAn) + ')');
    pruefe(s && /zählt Stimmen der letzten 30 Min\./.test(s.titel), 'Tooltip der Pille: „' + (s && s.titel) + '“');
    pruefe(anfragen.length >= 2 && anfragen.every((u) => /[?&]aktion=stand(&|$)/.test(u) && /[?&]minuten=30(&|$)/.test(u)),
      'jede Stand-Abfrage trägt minuten=30 (' + anfragen.length + ' Abfragen)');
  },

  async handys() {
    log('Handys und Folie: Ablauf nach 30 Minuten');
    web.neu();
    const F = await kontext('folie');
    const folie = await F.newPage();
    await folie.goto(folieUrl(quelle(PORT.web)));
    await folieErwarten(folie, [0, 0, 0, 0, 0], 'Folie verbunden');
    const H = [];
    for (let i = 0; i < 3; i++) {
      const k = await kontext('handy' + (i + 1), { width: 390, height: 844 });
      const p = await k.newPage();
      await p.goto(handyUrl(quelle(PORT.web)));
      await p.waitForSelector('.tier[data-option="0"]');
      H.push({ k, p });
    }
    /* Uhr der Attrappe (im selben Prozess) und der Handys vorstellen */
    const vor = async (minuten) => {
      web.s.uhr.vorstellen(minuten * MIN);
      for (const h of H) await h.k.clock.fastForward(minuten * MIN);
    };
    await abstimmen(H[0].p, 0, 'Adler');
    await abstimmen(H[1].p, 2, 'Chamäleon');
    await abstimmen(H[2].p, 2, 'Chamäleon');
    await folieErwarten(folie, [1, 0, 2, 0, 0], 'drei Stimmen');
    await abstimmen(H[0].p, 3, 'Papagei');          /* Option 3: seit 23.10.2026 Papagei (bis 22.10.2026 Fuchs) */
    await folieErwarten(folie, [0, 0, 2, 1, 0], 'Handy 1 entscheidet sich um (Adler → Papagei), n bleibt 3');
    await bild(folie, 'handys-1-t0.png');

    log('  T+20');
    await vor(20);
    await folieErwarten(folie, [0, 0, 2, 1, 0], 'nach 20 Min.: alle drei zählen noch');
    await handyErwarten(H[0].p, 'Papagei', 'Handy 1 nach 20 Min.');
    await abstimmen(H[2].p, 4, 'Schwan');
    await folieErwarten(folie, [0, 0, 1, 1, 1], 'Handy 3 entscheidet sich bei T+20 um (Chamäleon → Schwan)');

    log('  T+31');
    await vor(11);
    await folieErwarten(folie, [0, 0, 0, 0, 1], 'nach 31 Min.: Handy 1 und 2 fallen raus, Handy 3 (umentschieden bei T+20) zählt mit der neuen Wahl');
    await bild(folie, 'handys-2-t31.png');
    await handyErwarten(H[0].p, 'auswahl', 'Handy 1 (T+0) zeigt wieder die Tiere');
    await handyErwarten(H[1].p, 'auswahl', 'Handy 2 (T+0) zeigt wieder die Tiere');
    await handyErwarten(H[2].p, 'Schwan', 'Handy 3 (T+20) zeigt weiter „Danke“');
    await bild(H[0].p, 'handys-3-handy1-abgelaufen.png');
    pruefe(await H[0].p.evaluate(() => !Object.keys(localStorage).some((x) => /^abstimmen:stimme:/.test(x))), 'Handy 1: abgelaufene Wahl aus dem Browser-Speicher entfernt');
    await abstimmen(H[1].p, 1, 'Löwe');
    await folieErwarten(folie, [0, 1, 0, 0, 1], 'Handy 2 stimmt nach Ablauf neu ab (Löwe) – zählt einmal');

    log('  T+56');
    await vor(25);
    await folieErwarten(folie, [0, 1, 0, 0, 0], 'nach 56 Min.: Handy 3 (T+20) fällt raus, Handy 2 (T+31) zählt');
    await handyErwarten(H[2].p, 'auswahl', 'Handy 3 (T+20) zeigt wieder die Tiere');
    await H[1].p.reload();
    const s1 = await ersterZustand(H[1].p);
    pruefe(s1 && s1.danke && s1.wahl === 'Löwe', 'Handy 2 neu geladen (Stimme 25 Min. alt): gleich „Danke“ → ' + (s1 ? zustandText(s1) : '?'));
    const vorher = await H[1].p.evaluate(() => Date.now());
    await H[1].k.clock.setSystemTime(vorher + 6 * MIN);
    await H[1].p.reload();
    const s2 = await ersterZustand(H[1].p);
    pruefe(s2 && !s2.danke && s2.auswahl && !s2.bisher.length, 'Handy 2 neu geladen nach 31 Min.: gleich die Tiere, nie „Danke“ → ' + (s2 ? zustandText(s2) : '?'));
    web.s.uhr.vorstellen(6 * MIN);
    await folieErwarten(folie, [0, 0, 0, 0, 0], 'nach 62 Min.: keine Stimme mehr auf der Folie (n = 0)');
    const ohne = web.stand();
    pruefe(ohne.n === 3 && !('minuten' in ohne), 'Stand OHNE minuten zählt weiter alle 3 Handys: ' + JSON.stringify(ohne.werte));
  },

  async speicher() {
    log('Browser-Speicher der Folie');
    web.neu();
    web.stimme('geraet-speicher-1', 1);
    web.stimme('geraet-speicher-2', 4);
    const F = await kontext('folie-speicher');
    const p1 = await F.newPage();
    await p1.goto(folieUrl(quelle(PORT.web)));
    await folieErwarten(p1, [0, 1, 0, 0, 1], 'Folie live, Werte gespeichert');
    await p1.close();
    const nichtErreichbar = async (seite) => (await bis(async () => { const x = await folieStand(seite); return x && x.zustand === 'offline' ? x : null; }, 10000)) || await folieStand(seite);
    const p2 = await F.newPage();
    await p2.goto(folieUrl(quelle(PORT.tot)));
    let s = await nichtErreichbar(p2);
    pruefe(s && gleich(s.werte, [0, 1, 0, 0, 1]) && !s.beispiel, 'Web-App nicht erreichbar, Speicher frisch: gespeicherte Werte → ' + JSON.stringify(s && s.werte) + (s && s.beispiel ? ' (Beispiel)' : ''));
    const jetzt = await p2.evaluate(() => Date.now());
    await F.clock.setSystemTime(jetzt + 31 * MIN);
    await p2.reload();
    s = await nichtErreichbar(p2);
    pruefe(s && gleich(s.werte, [0, 0, 0, 0, 0]) && s.beispiel === false,
      'Speicher 31 Min. alt (nicht erreichbar): Nullen, KEINE Beispielwerte → ' + JSON.stringify(s && s.werte) + ' beispiel=' + (s && s.beispiel));
    pruefe(await p2.evaluate(() => document.querySelector('.umfrage[data-umfrage="tier"]')._umfrage.beispielEl.hidden), 'Pille „Beispieldaten“ unsichtbar');
    await bild(p2, 'speicher-verfallen.png');
    /* Weg B/C (ohne liveQuelle) und andere Runde: Speicher direkt setzen */
    const mitSpeicher = async (name, eintrag, marke) => {
      const k = await kontext(name);
      if (marke) await markeAnpassen(k, marke);
      await k.addInitScript(([schluessel, w]) => {
        /* nur auf der Seite selbst (about:blank vor dem Laden hat keinen Speicher) */
        try { if (location.protocol === 'http:') localStorage.setItem(schluessel, JSON.stringify(w)); } catch (e) { /* egal */ }
      }, [SPEICHER_UMFRAGE, eintrag]);
      return k.newPage();
    };
    const po = await mitSpeicher('folie-ohne-live', { werte: [2, 0, 1, 0, 0], beispiel: false, runde: 'probe', zeit: Date.now() - 31 * MIN }, { liveQuelle: '' });
    await po.goto(SEITE + 'index.html#f08');
    const so = await bis(() => folieStand(po), 5000);
    pruefe(so && gleich(so.werte, [2, 0, 1, 0, 0]) && !so.beispiel && !so.zustand, 'ohne liveQuelle (Weg B/C): 31 Min. alte gespeicherte Werte gelten weiter → ' + JSON.stringify(so && so.werte));
    const pa = await mitSpeicher('folie-andere-runde', { werte: [2, 0, 1, 0, 0], beispiel: false, runde: 'andere-runde', zeit: Date.now() });
    await pa.goto(folieUrl(quelle(PORT.tot)));
    const sa = await nichtErreichbar(pa);
    pruefe(sa && sa.beispiel === true, 'frische Werte einer anderen Runde: Beispielwerte mit Pille (wie bisher) → beispiel=' + (sa && sa.beispiel));
  },

  async kontrolle() {
    log('Kontrolle „30 Minuten vorher“, dann Folie 08 im Vortrag (Antwort braucht 2 s)');
    langsam.neu();
    const K = await kontext('folie-kontrolle');
    const p = await K.newPage();
    await p.goto(folieUrl(quelle(PORT.langsam)));
    await folieErwarten(p, [0, 0, 0, 0, 0], 'Kontrolle: Folie 08 live, n = 0 (gespeichert)');
    await p.evaluate(() => { location.hash = '#f01'; });
    /* die letzte Abfrage (Antwort nach 2 s) erst ankommen lassen – sonst könnte
       ihre Antwort genau beim Wiederbetreten eintreffen und die Nullen setzen */
    await warten(2800);
    await K.clock.fastForward(31 * MIN);
    /* Betreten erkennen an der ersten neuen Stand-Abfrage (startet beim Betreten,
       nach umfrageLaden); ihre Antwort kommt erst 2 s später – dazwischen prüfen */
    const neueAbfrage = p.waitForRequest((r) => r.url().indexOf(quelle(PORT.langsam)) === 0, { timeout: 8000 });
    await p.evaluate(() => { location.hash = '#f08'; });
    await neueAbfrage;
    await warten(300);
    const s = await folieStand(p);
    pruefe(s && gleich(s.werte, [0, 0, 0, 0, 0]) && s.beispiel === false,
      '31 Min. später Folie 08 betreten, vor der ersten Antwort: Nullen, keine Beispieldaten → ' + JSON.stringify(s && s.werte) + ' beispiel=' + (s && s.beispiel) + ' [' + (s && s.zustand) + ']');
    await bild(p, 'kontrolle-vor-antwort.png');
    await folieErwarten(p, [0, 0, 0, 0, 0], 'danach live, n = 0');
  },

  async pause() {
    log('Pause und Zeitfenster');
    web.neu();
    const P = await kontext('folie-pause');
    const p = await P.newPage();
    await p.goto(folieUrl(quelle(PORT.web)));
    await folieErwarten(p, [0, 0, 0, 0, 0], 'Folie live');
    const klick = () => p.evaluate(() => document.querySelector('.umfrage[data-umfrage="tier"]')._umfrage.zeilen[2].knopf.click());
    const pausiert = async (text) => {
      const s = await bis(async () => { const x = await folieStand(p); return x && x.zustand === 'pausiert' && gleich(x.werte, [0, 0, 1, 0, 0]) ? x : null; }, 5000);
      pruefe(!!s, text);
    };
    await klick();
    await pausiert('Hand-Klick: pausiert, Handwert [0,0,1,0,0]');
    await p.reload();
    await warten(1500);
    await pausiert('F5 sofort: Pause und Handwerte bleiben (wie bisher)');
    /* ohne Neuladen: Folie verlassen, 31 Min., wieder betreten */
    await p.evaluate(() => { location.hash = '#f01'; });
    await warten(600);
    await P.clock.fastForward(31 * MIN);
    await p.evaluate(() => { location.hash = '#f08'; });
    await folieErwarten(p, [0, 0, 0, 0, 0], 'nach 31 Min. wieder betreten (ohne F5): Handwerte verfallen, Pause verworfen, Folie fragt wieder');
    /* mit Neuladen */
    await klick();
    await pausiert('erneut Hand-Klick: pausiert');
    await P.clock.fastForward(31 * MIN);
    await p.reload();
    await folieErwarten(p, [0, 0, 0, 0, 0], 'F5 nach 31 Min.: Handwerte verfallen, Pause verworfen, live');
    pruefe(await p.evaluate(() => !Object.keys(localStorage).some((x) => /umfrage-pause:tier:probe$/.test(x) && localStorage.getItem(x) === 'true')), 'gespeicherte Pause entfernt');
  },

  async referent() {
    log('Referentenfenster 31 Min. nach den Handwerten');
    const R = await kontext('referent');
    const v = await R.newPage();
    await v.goto(folieUrl(quelle(PORT.tot)));
    await bis(async () => { const x = await folieStand(v); return x && x.zustand === 'offline' ? x : null; }, 10000);
    await v.keyboard.press('3'); await v.keyboard.press('3'); await v.keyboard.press('1');
    const sv = await bis(async () => { const x = await folieStand(v); return x && x.zustand === 'pausiert' && gleich(x.werte, [1, 0, 2, 0, 0]) ? x : null; }, 5000);
    pruefe(!!sv, 'Vortragsfenster: Handwerte per Ziffer, pausiert [1,0,2,0,0]');
    await warten(800);
    await R.clock.fastForward(31 * MIN);
    const r = await R.newPage();
    await r.goto(SEITE + 'index.html?referent&quelle=' + encodeURIComponent(quelle(PORT.tot)) + '#f08');
    const sr = await bis(async () => { const x = await folieStand(r); return x && gleich(x.werte, [1, 0, 2, 0, 0]) && !x.beispiel ? x : null; }, 6000);
    const letzte = sr || await folieStand(r);
    pruefe(!!sr, 'Referentenfenster (31 Min. später geöffnet) zeigt dieselben Zahlen wie die Leinwand → ' + JSON.stringify(letzte && letzte.werte) + (letzte && letzte.beispiel ? ' (Beispiel)' : ''));
    const sv2 = await folieStand(v);
    pruefe(sv2 && gleich(sv2.werte, [1, 0, 2, 0, 0]) && sv2.zustand === 'pausiert', 'Vortragsfenster unverändert pausiert [1,0,2,0,0]');
    await warten(800);                         /* Zähl-Animation und Vorschau „Als Nächstes“ (60 ms verzögert) */
    const vorschau = await r.evaluate(() => Array.from(document.querySelectorAll('.umfrage-n')).map((e) => e.textContent));
    pruefe(vorschau.length >= 2 && vorschau.every((t) => /n\s*=\s*3/.test(t)), 'Referentenfenster: Folie und Vorschau „Als Nächstes“ zeigen n = 3 → ' + JSON.stringify(vorschau));
    await bild(r, 'referent-nach-31-min.png');
  },

  async tooltip() {
    log('Tooltip, solange die Web-App nie geantwortet hat');
    const T = await kontext('tooltip');
    const p = await T.newPage();
    await p.goto(folieUrl(quelle(PORT.tot)));
    const s0 = await bis(() => folieStand(p), 5000);
    pruefe(s0 && /angefragt \(noch keine Antwort/.test(s0.titel) && !/zählt Stimmen/.test(s0.titel), 'gleich nach dem Laden: „' + (s0 && s0.titel) + '“');
    const s1 = await bis(async () => { const x = await folieStand(p); return x && x.zustand === 'offline' ? x : null; }, 10000);
    pruefe(s1 && /angefragt \(noch keine Antwort/.test(s1.titel) && !/zählt Stimmen/.test(s1.titel), '„offline“ ohne je eine Antwort: „' + (s1 && s1.titel) + '“');
  },

  async altefassung() {
    log('Web-App mit Skript ohne Zeitfenster (wie Fassung 19.10.2026)');
    alt.neu();
    alt.stimme('alt-handy-1', 2);
    alt.s.uhr.vorstellen(31 * MIN);
    const O = await kontext('folie-alt');
    const p = await O.newPage();
    const vorher = konsole.length;
    await p.goto(folieUrl(quelle(PORT.alt)));
    const s = await folieErwarten(p, [0, 0, 1, 0, 0], 'alte Fassung: 31 Min. alte Stimme zählt weiter (kein Zeitfenster)');
    pruefe(s && s.fensterAn === false && /OHNE Zeitfenster/.test(s.titel), 'Tooltip: „' + (s && s.titel) + '“');
    await warten(4500);
    const warnungen = konsole.slice(vorher).filter((x) => /folie-alt \[warning\].*Zeitfenster/.test(x)).length;
    pruefe(warnungen === 1, 'Warnung in der Konsole genau einmal, auch nach weiteren Abfragen (' + warnungen + '×)');
  },

  async losschicken() {
    log('Handy misst ab dem Losschicken (Antwort kommt 6 s nach dem Eingang)');
    sehrLangsam.a.neu();
    const H = await kontext('handy-langsam', { width: 390, height: 844 });
    const p = await H.newPage();
    await p.goto(handyUrl(quelle(sehrLangsam.port)));
    await p.waitForSelector('.tier[data-option="2"]');
    const t0 = await p.evaluate(() => Date.now());
    await p.click('.tier[data-option="2"]');
    await handyErwarten(p, 'Chamäleon', 'Stimme angekommen (nach ca. 6 s)', 15000);
    const jetzt = await p.evaluate(() => Date.now());
    await H.clock.fastForward(t0 + 30 * MIN + 1500 - jetzt);
    await handyErwarten(p, 'auswahl', '30 Min. + 1,5 s nach dem Losschicken (Bestätigung erst 6 s später): die Tiere', 2500);
  },

  async lasttest() {
    log('Lasttest erkennt eine falsche Zeit in der Tabelle (beide Richtungen)');
    const faelle = [
      { name: 'richtige Zeit', quelltext: SKRIPT, erwartet: (r) => r.bestanden === true && r.fensterOk === true },
      { name: 'Zeit 1 Std. zu spät', quelltext: skriptGeaendert(ZEILE_ZEIT, 'const werte = [[new Date(Date.now() + 3600000), p.runde'),
        erwartet: (r, text) => r.fensterOk === false && r.bestanden === false && /ZEITFENSTER FALSCH \(Zeit zu spät\)/.test(text) },
      { name: 'Zeit 1 Std. zu früh', quelltext: skriptGeaendert(ZEILE_ZEIT, 'const werte = [[new Date(Date.now() - 3600000), p.runde'),
        erwartet: (r, text) => r.fensterOk === false && r.bestanden === false && /ZEITFENSTER FALSCH \(Zeit zu früh\)/.test(text) }
    ];
    for (const [i, f] of faelle.entries()) {
      const a = attrappe(8860 + i, { quelltext: f.quelltext });
      await new Promise((fertig) => a.server.listen(8860 + i, fertig));
      const ausgabe = [];
      const log0 = console.log;
      console.log = (...x) => ausgabe.push(x.join(' '));
      let r = null;
      try { r = await lasttest(quelle(8860 + i), { anzahl: 5, folie: false, minuten: 30 }); } finally { console.log = log0; a.server.close(); }
      const text = ausgabe.join('\n');
      fs.writeFileSync(path.join(AUS, 'lasttest-' + (i + 1) + '.log'), text + '\n');
      pruefe(r && f.erwartet(r, text), 'Lasttest, ' + f.name + ': ' + (text.split('\n').find((z) => /^ZEITFENSTER|^NICHT BESTANDEN wegen|^BESTANDEN/.test(z.trim())) || '?').slice(0, 110));
    }
  }
};

/* =============================================================================
   MUTANTEN (nur im Browser, die Dateien bleiben unverändert)
   ============================================================================= */
const MUTANTEN = [
  { name: 'Folie: minuten nicht an die Stand-Abfrage angehängt', datei: 'js/komponenten.js', szenarien: ['folie'],
    alt: '    if (l.minuten) parameter.minuten = l.minuten;           /* Zeitfenster (gueltigMinuten) */\n', neu: '' },
  { name: 'Folie: gespeicherte Werte ohne Ablauf', datei: 'js/komponenten.js', szenarien: ['speicher'],
    alt: "var frisch = !fenster || (gleicheRunde && typeof gespeichert.zeit === 'number' && Date.now() - gespeichert.zeit <= fenster);", neu: 'var frisch = true;' },
  { name: 'Folie: abgelaufener Speicher → Beispielwerte (Stand vor der Nacharbeit)', datei: 'js/komponenten.js', szenarien: ['kontrolle', 'speicher'],
    alt: '    } else if (u.abgelaufen && !gespeichert.beispiel) {', neu: '    } else if (false) {' },
  { name: 'Folie: gespeicherte Werte ohne Zeitstempel', datei: 'js/komponenten.js', szenarien: ['speicher'],
    alt: 'runde: umfrageRunde(u.konfig), zeit: Date.now() });', neu: 'runde: umfrageRunde(u.konfig) });' },
  { name: 'Folie: Pause verfällt beim Betreten nicht (livePauseVerwerfen fehlt)', datei: 'js/komponenten.js', szenarien: ['pause'],
    alt: '      if (u.abgelaufen) livePauseVerwerfen(u);   /* Zeitfenster: verfallene Handwerte → keine Pause mehr */', neu: '' },
  { name: 'Folie: Referentenfenster bekommt die gezeigten Werte nicht', datei: 'js/komponenten.js', szenarien: ['referent'],
    alt: "        if (util.istAktiv(u.huelle)) Deck.kanal.senden('umfrage', { id: u.id, werte: u.werte.slice(), beispiel: u.beispiel });", neu: '' },
  { name: 'Folie: Tooltip ohne den Fall „noch keine Antwort“', datei: 'js/komponenten.js', szenarien: ['tooltip'],
    alt: "      else titel += ' · Zeitfenster ' + l.minuten + ' Min. angefragt (noch keine Antwort der Web-App)';",
    neu: "      else titel += ' · zählt Stimmen der letzten ' + l.minuten + ' Min.';" },
  { name: 'Folie: Warnung zur alten Fassung bei jeder Antwort', datei: 'js/komponenten.js', szenarien: ['altefassung'],
    alt: 'if (!fensterAn && l.fensterAn !== false) {', neu: 'if (!fensterAn) {' },
  { name: 'Handy: gespeicherte Wahl läuft nie ab', datei: 'js/abstimmen.js', szenarien: ['handys'],
    alt: 'return !(typeof zeit === \'number\' && zeit > 0 && Date.now() - zeit <= zustand.fenster);', neu: 'return false;' },
  /* Nicht dabei: „Ablauf beim Öffnen nicht geprüft“ (if (bekannt) statt
     if (bekannt && !istAbgelaufen(…))) – gleichwertig, weil pageshow gleich
     nach dem Laden ablaufPruefen aufruft („Danke“ stünde nur Millisekunden). */
  { name: 'Handy: kein Ablauf-Zeitgeber (nur beim Öffnen und Zurückkehren geprüft)', datei: 'js/abstimmen.js', szenarien: ['handys'],
    alt: '    ablaufUhr = setTimeout(ablaufPruefen, Math.max(0, rest) + 1000);', neu: '    ablaufUhr = null;' },
  { name: 'Handy: Wahl ohne Zeit gespeichert', datei: 'js/abstimmen.js', szenarien: ['handys'],
    alt: '{ option: i, name: zustand.optionen[i], zeit: zustand.stimmeZeit }', neu: '{ option: i, name: zustand.optionen[i] }' },
  { name: 'Handy: Zeit der Bestätigung statt des Losschickens', datei: 'js/abstimmen.js', szenarien: ['losschicken'],
    alt: '        zustand.stimmeZeit = s.zeit || Date.now();', neu: '        zustand.stimmeZeit = Date.now();' }
];

/* =============================================================================
   ABLAUF
   ============================================================================= */
async function lauf(namen) {
  for (const name of namen) {
    try {
      await SZENARIEN[name]();
    } catch (e) {
      fehler++;
      log('  FEHLER  Abbruch im Szenario „' + name + '“: ' + (e && e.message || e));
    } finally {
      await kontexteSchliessen();
    }
  }
}

let exitCode = 0;
try {
  await new Promise((fertig) => statik.listen(PORT.statik, fertig));
  for (const a of [web, langsam, alt]) await new Promise((fertig) => a.server.listen(a === web ? PORT.web : a === langsam ? PORT.langsam : PORT.alt, fertig));
  await new Promise((fertig) => sehrLangsam.a.server.listen(sehrLangsam.port, fertig));
  browser = await chromium.launch({ executablePath: CHROME, args: ['--no-sandbox', ...NETZ_AUS] });

  if (!MUTATIONEN_AN) {
    const namen = NUR || Object.keys(SZENARIEN);
    const unbekannt = namen.filter((n) => !SZENARIEN[n]);
    if (unbekannt.length) { console.error('Unbekanntes Szenario: ' + unbekannt.join(', ') + ' (bekannt: ' + Object.keys(SZENARIEN).join(', ') + ')'); process.exit(2); }
    log('Zeitfenster Ende zu Ende (gueltigMinuten 30, Attrappen auf localhost) – ' + namen.join(', '));
    await lauf(namen);
    log('\nKonsole (Warnungen/Fehler):');
    konsole.forEach((x) => log('  ' + x));
    log('Externe Anfragen (abgebrochen): ' + extern.length);
    extern.forEach((x) => log('  ' + x));
    log('\n' + ok + ' bestanden, ' + fehler + ' Fehler, ' + extern.length + ' externe Anfragen. Ausgabe: ' + path.relative(process.cwd(), AUS));
    exitCode = fehler || extern.length ? 1 : 0;
  } else {
    /* mit --nur: nur die Mutanten, die eines dieser Szenarien finden soll */
    const liste = NUR ? MUTANTEN.filter((m) => m.szenarien.some((x) => NUR.includes(x))) : MUTANTEN;
    log('MUTATIONSTEST (Client): ' + liste.length + ' kaputte Kopien von js/komponenten.js und js/abstimmen.js');
    let erkannt = 0;
    for (const m of liste) {
      const original = fs.readFileSync(path.join(PRAES, m.datei), 'utf8');
      if (original.split(m.alt).length !== 2) {
        log('  ABBRUCH  „' + m.name + '“: Stelle in ' + m.datei + ' nicht (genau einmal) gefunden – Mutant an den Code anpassen');
        exitCode = 2;
        continue;
      }
      ersetzungen[m.datei] = original.replace(m.alt, m.neu);
      const vorher = fehler;
      leise = true;
      await lauf(m.szenarien);
      leise = false;
      delete ersetzungen[m.datei];
      const gefunden = fehler > vorher;
      if (gefunden) erkannt++;
      log('  ' + (gefunden ? 'erkannt      ' : 'NICHT erkannt') + '  ' + m.name + '  (' + m.szenarien.join(', ') + ': ' + (fehler - vorher) + ' Prüfung(en) gescheitert)');
    }
    log('\n' + erkannt + ' von ' + liste.length + ' Mutanten erkannt. Externe Anfragen: ' + extern.length);
    if (!exitCode) exitCode = erkannt === liste.length && !extern.length ? 0 : 1;
  }
} catch (e) {
  console.error('Abbruch: ' + (e && e.stack || e));
  exitCode = 2;
} finally {
  if (browser) await browser.close().catch(() => {});
  for (const s of [statik, web.server, langsam.server, alt.server, sehrLangsam.a.server]) s.close();
  fs.writeFileSync(path.join(AUS, MUTATIONEN_AN ? 'mutationen.log' : 'protokoll.log'), zeilen.join('\n') + '\n');
}
process.exit(exitCode);
