#!/usr/bin/env node
/* =============================================================================
   live-abstimmung-test.mjs – Server-Skript der Live-Abstimmung ohne Google prüfen
   -----------------------------------------------------------------------------
   Lädt live-abstimmung/apps-script.gs in Node (node:vm) – mit Attrappen für
   SpreadsheetApp (Tabelle im Speicher), LockService, ContentService und
   Logger – und prüft:
     • Syntax: Das Skript lässt sich laden; nur doGet und einrichten sind im
       Editor ausführbar (Hilfsfunktionen enden auf _); @OnlyCurrentDoc
     • Zählen, Umentscheiden (nur die letzte Stimme je Gerät), Runden und
       Umfragen getrennt, Stand ohne Geräte-IDs
     • falsche Eingaben: jede wird abgelehnt, nichts wird geschrieben
     • JSONP (ausführbar) und JSON, ungültige callback-Namen
     • Text-Format der Spalten: Die Attrappe wandelt wie Google Tabellen
       „2026-10-26“ in ein Datum, „true“ in einen Wahrheitswert und „12345678“
       in eine Zahl um – außer in Zellen mit dem Format '@' (Text)
     • Sperre: geschrieben wird nur mit Sperre; besetzte Sperre → Fehler,
       keine Zeile; fehlende Tabelle, leeres oder sortiertes Blatt
   Keine Abhängigkeiten, kein Internet.

   AUFRUF (im Ordner praesentation/)
     node werkzeuge/live-abstimmung-test.mjs
        → Prüfungen; Exit-Code 0 = alles bestanden, 1 = Fehler
     node werkzeuge/live-abstimmung-test.mjs --server 8787 [--verzoegerung 800]
        → lokaler Server mit dem ECHTEN Skript (Tabelle im Speicher) unter
          http://localhost:8787/exec – zum Ausprobieren von abstimmen.html und
          Folie 08 ohne Google-Konto. marke.js NICHT ändern, sondern die Adresse
          mit ?quelle= übergeben (gilt nur für file:// und localhost; eine
          liveQuelle auf localhost nimmt die Abstimmseite absichtlich nicht an):
            index.html?quelle=http://localhost:8787/exec#f08               (Folie)
            index.html?referent&quelle=http://localhost:8787/exec#f08      (Referentenfenster)
            abstimmen.html?u=tier&quelle=http://localhost:8787/exec        (Abstimmseite)
          Jeder weitere Browser bzw. jedes private Fenster zählt als eigenes Handy.
          --verzoegerung = künstliche Antwortzeit in ms (langsames Netz nachstellen).
          Strg+C beendet ihn; die Stimmen sind dann weg.

     LIVE_SKRIPT=kopie.gs node werkzeuge/live-abstimmung-test.mjs
        → eine geänderte Kopie des Skripts prüfen, bevor sie in Apps Script kommt

     node werkzeuge/live-abstimmung-test.mjs --lasttest <Web-App-URL …/exec> [--anzahl 40]
        → LASTTEST gegen die ECHTE Web-App (braucht Internet, Node 18 oder neuer):
          40 Stimmen gleichzeitig (wie 40 Handys, die fast zugleich tippen) in
          eine eigene Runde „lasttest-<Datum>-<Uhrzeit>“ – sie zählt weder in
          'probe' noch im Vortrag. Danach muss der Stand n = 40 zeigen.
          Ausgabe: angenommene/abgelehnte Stimmen, Antwortzeiten, Stand.
          Exit-Code 0 = alle angenommen und gezählt. Die Zeilen der Runde
          „lasttest-…“ dürfen danach im Blatt „Stimmen“ gelöscht werden.
          Auch gegen die Attrappe: --lasttest http://localhost:8787/exec

   ALS MODUL (z. B. für einen Vergleich mit einer anderen Attrappe)
     import { skriptLaden } from './live-abstimmung-test.mjs';
     const s = skriptLaden();
     s.anfrage({ aktion: 'stand', umfrage: 'tier', runde: 'probe', anzahl: 5, callback: 'f' })
       → { mime: 'JAVASCRIPT' | 'JSON', text: '…', daten: { ok: true, … } }
   ============================================================================= */

import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HIER = path.dirname(fileURLToPath(import.meta.url));
/* Standard: live-abstimmung/apps-script.gs; eine geänderte Kopie prüfen:
   LIVE_SKRIPT=pfad/zur/kopie.gs node werkzeuge/live-abstimmung-test.mjs */
export const SKRIPT_PFAD = process.env.LIVE_SKRIPT
  ? path.resolve(process.env.LIVE_SKRIPT)
  : path.resolve(HIER, '..', 'live-abstimmung', 'apps-script.gs');


/* =============================================================================
   1. ATTRAPPEN
   ============================================================================= */

/* Google Tabellen wandelt eingegebene Texte um, wenn die Zelle kein Textformat
   hat. Nachgestellt (vereinfacht): Zahl, Datum JJJJ-MM-TT, true/false. */
function wieTabelleUmwandeln(wert, format) {
  if (typeof wert !== 'string' || format === '@') return wert;
  if (/^[+-]?(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?$/.test(wert)) return Number(wert);
  if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(wert)) return new Date(wert + 'T00:00:00');
  if (/^(true|false)$/i.test(wert)) return wert.toLowerCase() === 'true';
  return wert;
}

function blattAttrappe(name, umgebung, maxZeilen) {
  const zellen = [];                     /* zellen[zeile-1][spalte-1] = { wert, format } */
  let fixiert = 0;
  let maxZ = maxZeilen || 1000;
  const maxS = 26;

  function zelle(z, s) {
    if (!zellen[z]) zellen[z] = [];
    if (!zellen[z][s]) zellen[z][s] = { wert: '', format: 'General' };
    return zellen[z][s];
  }
  function bereich(zeile, spalte, zeilenAnz, spaltenAnz) {
    const r = {
      setValues(werte) {
        assert.equal(werte.length, zeilenAnz, 'setValues: Zeilenzahl passt nicht zum Bereich');
        werte.forEach(function (reihe) { assert.equal(reihe.length, spaltenAnz, 'setValues: Spaltenzahl passt nicht'); });
        /* Datenzeilen im Blatt „Stimmen“ nur mit Sperre schreiben */
        if (name === 'Stimmen' && zeile > 1 && !umgebung.sperre.gehalten) umgebung.verstoesse.push('ohne Sperre geschrieben: Zeile ' + zeile);
        umgebung.ereignisse.push('setValues');
        werte.forEach(function (reihe, i) {
          reihe.forEach(function (w, j) {
            const z = zelle(zeile - 1 + i, spalte - 1 + j);
            z.wert = wieTabelleUmwandeln(w, z.format);
          });
        });
        return r;
      },
      getValues() {
        const aus = [];
        for (let i = 0; i < zeilenAnz; i++) {
          const reihe = [];
          for (let j = 0; j < spaltenAnz; j++) {
            const z = zellen[zeile - 1 + i] && zellen[zeile - 1 + i][spalte - 1 + j];
            reihe.push(z ? z.wert : '');
          }
          aus.push(reihe);
        }
        return aus;
      },
      setNumberFormats(formate) {
        assert.equal(formate.length, zeilenAnz, 'setNumberFormats: Zeilenzahl passt nicht');
        formate.forEach(function (reihe, i) {
          assert.equal(reihe.length, spaltenAnz, 'setNumberFormats: Spaltenzahl passt nicht');
          reihe.forEach(function (f, j) { zelle(zeile - 1 + i, spalte - 1 + j).format = f; });
        });
        return r;
      },
      setNumberFormat(f) {
        for (let i = 0; i < zeilenAnz; i++) for (let j = 0; j < spaltenAnz; j++) zelle(zeile - 1 + i, spalte - 1 + j).format = f;
        return r;
      },
      setFontWeight() { return r; }
    };
    return r;
  }

  const blatt = {
    getName: () => name,
    getLastRow() {
      for (let z = zellen.length - 1; z >= 0; z--) {
        if (zellen[z] && zellen[z].some((c) => c && c.wert !== '' && c.wert !== null && c.wert !== undefined)) return z + 1;
      }
      return 0;
    },
    getMaxRows: () => maxZ,
    insertRowsAfter(nach, anzahl) {
      assert.ok(nach >= 1 && nach <= maxZ, 'insertRowsAfter: Zeile außerhalb des Blatts');
      maxZ += anzahl;
      return blatt;
    },
    setFrozenRows(n) { fixiert = n; return blatt; },
    getFrozenRows: () => fixiert,
    getRange(zeile, spalte, zeilenAnz = 1, spaltenAnz = 1) {
      /* wie Google: Bereich muss mindestens 1 × 1 groß sein und im Blatt liegen */
      if (![zeile, spalte, zeilenAnz, spaltenAnz].every(Number.isInteger) || zeilenAnz < 1 || spaltenAnz < 1 || zeile < 1 || spalte < 1) {
        throw new Error('Ungültiger Bereich: ' + [zeile, spalte, zeilenAnz, spaltenAnz].join(', '));
      }
      if (zeile + zeilenAnz - 1 > maxZ || spalte + spaltenAnz - 1 > maxS) {
        throw new Error('Die Koordinaten des Bereichs liegen außerhalb der Abmessungen des Tabellenblatts.');
      }
      return bereich(zeile, spalte, zeilenAnz, spaltenAnz);
    },
    _zellen: zellen                      /* nur für die Prüfungen */
  };
  return blatt;
}

function umgebungBauen(optionen = {}) {
  const umgebung = { blaetter: new Map(), verstoesse: [], ereignisse: [], protokoll: [], ohneTabelle: !!optionen.ohneTabelle };

  const tabelle = {
    getSheetByName: (n) => umgebung.blaetter.get(n) || null,
    insertSheet(n) {
      if (umgebung.blaetter.has(n)) throw new Error('Ein Tabellenblatt mit dem Namen „' + n + '“ ist bereits vorhanden.');
      const b = blattAttrappe(n, umgebung, optionen.maxZeilen);
      umgebung.blaetter.set(n, b);
      return b;
    }
  };

  const sperre = {
    frei: true, gehalten: false, wartezeiten: [],
    tryLock(ms) {
      sperre.wartezeiten.push(ms);
      if (!sperre.frei) return false;
      sperre.gehalten = true;
      umgebung.ereignisse.push('sperre');
      return true;
    },
    waitLock(ms) { if (!sperre.tryLock(ms)) throw new Error('Zeitüberschreitung beim Warten auf die Sperre.'); },
    releaseLock() { sperre.gehalten = false; umgebung.ereignisse.push('freigabe'); },
    hasLock: () => sperre.gehalten
  };
  umgebung.sperre = sperre;

  const MimeType = Object.freeze({ JSON: 'JSON', JAVASCRIPT: 'JAVASCRIPT', TEXT: 'TEXT' });
  const globale = {
    SpreadsheetApp: {
      getActiveSpreadsheet: () => (umgebung.ohneTabelle ? null : tabelle),
      flush() { umgebung.ereignisse.push('flush'); }
    },
    LockService: { getScriptLock: () => sperre, getDocumentLock: () => sperre, getUserLock: () => sperre },
    ContentService: {
      MimeType,
      createTextOutput(text = '') {
        let mime = MimeType.TEXT;
        const aus = {
          getContent: () => text,
          setContent(t) { text = t; return aus; },
          setMimeType(m) { mime = m; return aus; },
          getMimeType: () => mime
        };
        return aus;
      }
    },
    Logger: { log(...werte) { umgebung.protokoll.push(werte); return globale.Logger; } },
    console
  };
  umgebung.tabelle = tabelle;
  umgebung.globale = globale;
  return umgebung;
}

/* Skript laden und eine bequeme Anfrage-Funktion zurückgeben */
export function skriptLaden(optionen = {}) {
  const quelltext = fs.readFileSync(optionen.pfad || SKRIPT_PFAD, 'utf8');
  const umgebung = umgebungBauen(optionen);
  const kontext = vm.createContext(umgebung.globale);
  vm.runInContext(quelltext, kontext, { filename: 'apps-script.gs' });

  /* Anfrage wie über die Adresse …/exec?a=b: alle Werte kommen als Text an */
  function anfrage(parameter) {
    const e = parameter === undefined ? undefined : ereignisBauen(parameter);
    const ausgabe = kontext.doGet(e);
    const mime = ausgabe.getMimeType();
    const text = ausgabe.getContent();
    let daten = null;
    if (mime === 'JAVASCRIPT') {
      const m = /^([A-Za-z_$][\w$.]*)\(([\s\S]*)\);$/.exec(text);
      if (m) daten = JSON.parse(m[2]);
    } else {
      try { daten = JSON.parse(text); } catch (f) { daten = null; }
    }
    return { mime, text, daten };
  }

  return {
    anfrage,
    kontext,
    umgebung,
    sperre: umgebung.sperre,
    einrichten: () => kontext.einrichten(),
    blatt: () => umgebung.tabelle.getSheetByName('Stimmen'),
    /* Datenzeilen als Werte (ohne Kopfzeile) */
    zeilen() {
      const b = umgebung.tabelle.getSheetByName('Stimmen');
      if (!b || b.getLastRow() < 2) return [];
      return b.getRange(2, 1, b.getLastRow() - 1, 5).getValues();
    }
  };
}

function ereignisBauen(parameter) {
  const p = {};
  const ps = {};
  Object.keys(parameter).forEach(function (k) {
    if (parameter[k] === undefined) return;
    p[k] = String(parameter[k]);
    ps[k] = [String(parameter[k])];
  });
  return { parameter: p, parameters: ps, queryString: new URLSearchParams(p).toString(), contentLength: -1, contextPath: '' };
}


/* =============================================================================
   2. PRÜFUNGEN
   ============================================================================= */

const OPT = ['Adler', 'Löwe', 'Waschbär', 'Fuchs', 'Schwan'];
const N = String(OPT.length);

function stimme(s, geraet, option, extra = {}) {
  return s.anfrage(Object.assign({ aktion: 'stimme', umfrage: 'tier', runde: 'probe', option, anzahl: N, geraet, callback: 'f' }, extra));
}
function stand(s, extra = {}) {
  return s.anfrage(Object.assign({ aktion: 'stand', umfrage: 'tier', runde: 'probe', anzahl: N, callback: 'f' }, extra));
}
function istFehler(r, hinweis) {
  assert.ok(r.daten, hinweis + ': Antwort nicht lesbar: ' + r.text);
  assert.equal(r.daten.ok, false, hinweis + ': sollte abgelehnt werden: ' + r.text);
  assert.equal(typeof r.daten.fehler, 'string', hinweis + ': fehler fehlt');
  assert.ok(r.daten.fehler.length > 5 && r.daten.fehler.length < 160, hinweis + ': fehler zu kurz/lang');
  assert.deepEqual(Object.keys(r.daten).sort(), ['fehler', 'ok'], hinweis + ': Fehlerantwort mit fremden Feldern');
}
function istTyp(wert) { return Object.prototype.toString.call(wert).slice(8, -1); }

/* JSONP wirklich ausführen (wie ein <script>-Tag im Browser) */
function jsonpAusfuehren(text, callback) {
  let erhalten;
  const kontext = vm.createContext({});
  const teile = callback.split('.');
  let ziel = kontext;
  teile.slice(0, -1).forEach(function (t) { ziel[t] = ziel[t] || {}; ziel = ziel[t]; });
  ziel[teile[teile.length - 1]] = function (d) { erhalten = d; };
  vm.runInContext(text, kontext);
  /* Objekt aus dem fremden Kontext in ein gewöhnliches Objekt übertragen */
  return erhalten === undefined ? undefined : JSON.parse(JSON.stringify(erhalten));
}

export function pruefungen() {
  const liste = [];
  const pruefe = (name, fn) => liste.push({ name, fn });
  const quelltext = fs.readFileSync(SKRIPT_PFAD, 'utf8');

  pruefe('Syntax: Skript lässt sich übersetzen und laden', () => {
    new vm.Script(quelltext, { filename: 'apps-script.gs' });
    const s = skriptLaden();
    assert.equal(typeof s.kontext.doGet, 'function');
    assert.equal(typeof s.kontext.einrichten, 'function');
  });

  pruefe('Editor: nur doGet und einrichten ohne _ (Hilfsfunktionen versteckt)', () => {
    const namen = [...quelltext.matchAll(/^function\s+([A-Za-z0-9_$]+)/gm)].map((m) => m[1]);
    const sichtbar = namen.filter((n) => !n.endsWith('_')).sort();
    assert.deepEqual(sichtbar, ['doGet', 'einrichten']);
  });

  pruefe('@OnlyCurrentDoc steht im Skript (Zugriff nur auf diese Tabelle)', () => {
    assert.match(quelltext, /\/\*\*[\s\S]*?@OnlyCurrentDoc[\s\S]*?\*\//);
  });

  pruefe('Keine Bibliotheken, keine fremden Dienste', () => {
    assert.doesNotMatch(quelltext, /UrlFetchApp|MailApp|GmailApp|DriveApp|PropertiesService|Session\.|require\(|import /);
  });

  pruefe('Stand ohne Blatt: Nullen, legt nichts an, Felder genau ok/werte/n/zeit', () => {
    const s = skriptLaden();
    const r = stand(s);
    assert.equal(r.mime, 'JAVASCRIPT');
    assert.deepEqual(r.daten.werte, [0, 0, 0, 0, 0]);
    assert.equal(r.daten.n, 0);
    assert.equal(r.daten.ok, true);
    assert.deepEqual(Object.keys(r.daten), ['ok', 'werte', 'n', 'zeit']);
    assert.ok(!isNaN(Date.parse(r.daten.zeit)) && /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d\.\d{3}Z$/.test(r.daten.zeit), 'zeit ist kein ISO-Datum');
    assert.equal(s.blatt(), null, 'Stand darf kein Blatt anlegen');
  });

  pruefe('Erste Stimme: Blatt „Stimmen“ mit Kopfzeile, Zeile mit 5 Spalten, Antwort genau {ok:true}', () => {
    const s = skriptLaden();
    const r = stimme(s, 'geraet-0001', 2);
    assert.equal(r.text, 'f({"ok":true});');
    const b = s.blatt();
    assert.ok(b, 'Blatt fehlt');
    assert.deepEqual(b.getRange(1, 1, 1, 5).getValues()[0], ['Zeit', 'Runde', 'Umfrage', 'Option', 'Geraet']);
    assert.equal(b.getFrozenRows(), 1);
    const z = s.zeilen();
    assert.equal(z.length, 1);
    assert.equal(istTyp(z[0][0]), 'Date');
    assert.deepEqual(z[0].slice(1), ['probe', 'tier', 2, 'geraet-0001']);
  });

  pruefe('Zählen: drei Geräte', () => {
    const s = skriptLaden();
    stimme(s, 'geraet-aaaa', 2); stimme(s, 'geraet-bbbb', 2); stimme(s, 'geraet-cccc', 0);
    const r = stand(s);
    assert.deepEqual(r.daten.werte, [1, 0, 2, 0, 0]);
    assert.equal(r.daten.n, 3);
  });

  pruefe('Umentscheiden und Wiederholen: nur die letzte Stimme je Gerät zählt', () => {
    const s = skriptLaden();
    stimme(s, 'geraet-aaaa', 2); stimme(s, 'geraet-bbbb', 1);
    stimme(s, 'geraet-aaaa', 4);                 /* umentschieden */
    stimme(s, 'geraet-bbbb', 1); stimme(s, 'geraet-bbbb', 1);   /* doppelt gesendet */
    const r = stand(s);
    assert.deepEqual(r.daten.werte, [0, 1, 0, 0, 1]);
    assert.equal(r.daten.n, 2);
    assert.equal(s.zeilen().length, 5, 'jede Stimme wird protokolliert, gezählt wird nur die letzte');
  });

  pruefe('Runden und Umfragen getrennt (Probe zählt nicht im Vortrag)', () => {
    const s = skriptLaden();
    stimme(s, 'geraet-aaaa', 0); stimme(s, 'geraet-bbbb', 1);
    stimme(s, 'geraet-aaaa', 3, { runde: 'vortrag-2026-10-26' });
    stimme(s, 'geraet-cccc', 4, { umfrage: 'andere' });
    assert.deepEqual(stand(s).daten.werte, [1, 1, 0, 0, 0]);
    assert.deepEqual(stand(s, { runde: 'vortrag-2026-10-26' }).daten.werte, [0, 0, 0, 1, 0]);
    assert.deepEqual(stand(s, { umfrage: 'andere' }).daten.werte, [0, 0, 0, 0, 1]);
    assert.equal(stand(s, { runde: 'leer' }).daten.n, 0);
  });

  pruefe('Stand mit kleinerer Anzahl: Stimmen außerhalb werden nicht gezählt', () => {
    const s = skriptLaden();
    stimme(s, 'geraet-aaaa', 4); stimme(s, 'geraet-bbbb', 1);
    const r = stand(s, { anzahl: '3' });
    assert.deepEqual(r.daten.werte, [0, 1, 0]);
    assert.equal(r.daten.n, 1);
  });

  pruefe('Grenzwerte gültig: Option 0 und anzahl−1, anzahl 1 und 9, Namen 40, Geräte-ID 8 und 64 Zeichen', () => {
    const s = skriptLaden();
    assert.equal(stimme(s, 'a'.repeat(8), 0).daten.ok, true);
    assert.equal(stimme(s, 'b'.repeat(64), 4).daten.ok, true);
    assert.equal(stimme(s, 'geraet-neun', 8, { anzahl: '9' }).daten.ok, true);
    assert.equal(stimme(s, 'geraet-eins', 0, { anzahl: '1' }).daten.ok, true);
    assert.equal(stimme(s, 'geraet-lang', 1, { umfrage: 'u'.repeat(40), runde: 'R_-9'.repeat(10) }).daten.ok, true);
    /* „geraet-eins“ (Option 0) zählt auch bei anzahl 5 mit, „geraet-neun“ (Option 8) nicht */
    assert.deepEqual(stand(s).daten.werte, [2, 0, 0, 0, 1]);
    assert.equal(stand(s, { anzahl: '9' }).daten.werte[8], 1);
    assert.equal(stand(s, { umfrage: 'u'.repeat(40), runde: 'R_-9'.repeat(10) }).daten.n, 1);
  });

  pruefe('Ohne callback: JSON (MimeType JSON), lesbar', () => {
    const s = skriptLaden();
    const r1 = stimme(s, 'geraet-aaaa', 1, { callback: undefined });
    assert.equal(r1.mime, 'JSON');
    assert.equal(r1.text, '{"ok":true}');
    const r2 = stand(s, { callback: undefined });
    assert.equal(r2.mime, 'JSON');
    assert.deepEqual(JSON.parse(r2.text).werte, [0, 1, 0, 0, 0]);
  });

  pruefe('JSONP ist ausführbar (auch mit Punkt im Namen, $ und _)', () => {
    const s = skriptLaden();
    stimme(s, 'geraet-aaaa', 3);
    for (const cb of ['f', '$', '_', '__live_cb_17', 'Deck.live.antwort3', 'a$.b_c', 'x'.repeat(64)]) {
      const r = stand(s, { callback: cb });
      assert.equal(r.mime, 'JAVASCRIPT', cb);
      assert.ok(r.text.startsWith(cb + '('), cb);
      const d = jsonpAusfuehren(r.text, cb);
      assert.equal(d.ok, true, cb);
      assert.deepEqual(d.werte, [0, 0, 0, 1, 0], cb);
    }
  });

  pruefe('Ungültiger callback: Fehler als JSON, Name nicht ausgegeben, Stimme NICHT gespeichert', () => {
    const s = skriptLaden();
    const boese = ['', 'alert(1)//', '1abc', 'a b', 'a-b', 'f();alert(1)', 'x'.repeat(65), 'f\n', '<script>', 'f(', 'a[0]', 'ä', 'f;g'];
    for (const cb of boese) {
      for (const r of [stimme(s, 'geraet-aaaa', 1, { callback: cb }), stand(s, { callback: cb })]) {
        assert.equal(r.mime, 'JSON', JSON.stringify(cb));
        istFehler(r, 'callback ' + JSON.stringify(cb));
        if (cb) assert.ok(!r.text.includes(cb), 'callback taucht in der Antwort auf: ' + JSON.stringify(cb));
      }
    }
    assert.equal(s.blatt(), null, 'mit ungültigem callback wurde trotzdem geschrieben');
  });

  pruefe('Falsche Eingaben bei aktion=stimme: alle abgelehnt, keine Zeile geschrieben', () => {
    const s = skriptLaden();
    const gut = { aktion: 'stimme', umfrage: 'tier', runde: 'probe', option: '2', anzahl: '5', geraet: 'geraet-0001', callback: 'f' };
    const varianten = [
      { aktion: undefined }, { aktion: '' }, { aktion: 'Stimme' }, { aktion: 'loeschen' }, { aktion: 'stimme ' },
      { umfrage: undefined }, { umfrage: '' }, { umfrage: 'ti er' }, { umfrage: 'tier!' }, { umfrage: 'tär' }, { umfrage: 'x'.repeat(41) }, { umfrage: 'tier\n' },
      { runde: undefined }, { runde: '' }, { runde: 'probe/1' }, { runde: '../x' }, { runde: 'x'.repeat(41) }, { runde: 'probe.1' },
      { geraet: undefined }, { geraet: '' }, { geraet: 'kurz7ch' }, { geraet: 'x'.repeat(65) }, { geraet: 'geraet 0001' },
      { geraet: 'geraet.0001' }, { geraet: 'ÄÖÜäöüß12' }, { geraet: '<script>alert(1)</script>' },
      { option: undefined }, { option: '' }, { option: '-1' }, { option: '5' }, { option: '9' }, { option: '1.5' }, { option: '1e0' },
      { option: ' 1' }, { option: '0x1' }, { option: 'zwei' }, { option: '100' }, { option: 'NaN' }, { option: 'Infinity' },
      { anzahl: undefined }, { anzahl: '' }, { anzahl: '0' }, { anzahl: '10' }, { anzahl: '-5' }, { anzahl: 'fünf' }, { anzahl: '5.0' },
      { anzahl: '2', option: '2' }
    ];
    for (const v of varianten) {
      const r = s.anfrage(Object.assign({}, gut, v));
      assert.equal(r.mime, 'JAVASCRIPT');
      istFehler(r, 'stimme ' + JSON.stringify(v));
    }
    assert.equal(s.zeilen().length, 0, 'falsche Eingabe wurde geschrieben');
    assert.equal(s.sperre.gehalten, false);
  });

  pruefe('Falsche Eingaben bei aktion=stand: abgelehnt', () => {
    const s = skriptLaden();
    for (const v of [{ anzahl: undefined }, { anzahl: '0' }, { anzahl: '10' }, { anzahl: 'x' }, { runde: '' }, { runde: 'a b' },
      { umfrage: undefined }, { umfrage: 'x'.repeat(41) }]) {
      istFehler(stand(s, v), 'stand ' + JSON.stringify(v));
    }
  });

  pruefe('Ohne Parameter / ohne Ereignis: Fehler statt Absturz', () => {
    const s = skriptLaden();
    istFehler(s.anfrage(undefined), 'doGet()');
    istFehler(s.anfrage({}), 'doGet({})');
  });

  pruefe('Text-Format: Runde „2026-10-26“, „true“, Geräte-IDs aus Ziffern bleiben Text und zählen richtig', () => {
    const s = skriptLaden();
    const ids = ['12345678', '000012345678', '1e123456', '00000001', '000000001', '2026-10-26'];
    ids.forEach((id, i) => stimme(s, id, i % 5, { runde: '2026-10-26' }));
    stimme(s, 'geraet-wahr', 4, { runde: 'true', umfrage: 'false' });
    for (const z of s.zeilen()) {
      assert.equal(typeof z[1], 'string', 'Runde wurde umgewandelt: ' + istTyp(z[1]));
      assert.equal(typeof z[2], 'string', 'Umfrage wurde umgewandelt');
      assert.equal(typeof z[4], 'string', 'Geräte-ID wurde umgewandelt: ' + z[4]);
      assert.equal(typeof z[3], 'number', 'Option sollte eine Zahl sein');
    }
    const r = stand(s, { runde: '2026-10-26' });
    assert.deepEqual(r.daten.werte, [2, 1, 1, 1, 1]);
    assert.equal(r.daten.n, 6);
    assert.deepEqual(stand(s, { runde: 'true', umfrage: 'false' }).daten.werte, [0, 0, 0, 0, 1]);
  });

  pruefe('Gegenprobe: Die Attrappe wandelt ohne Text-Format wirklich um', () => {
    assert.equal(istTyp(wieTabelleUmwandeln('2026-10-26', 'General')), 'Date');
    assert.equal(wieTabelleUmwandeln('12345678', 'General'), 12345678);
    assert.equal(wieTabelleUmwandeln('true', 'General'), true);
    assert.equal(wieTabelleUmwandeln('12345678', '@'), '12345678');
  });

  pruefe('Sperre: Datenzeilen nur mit Sperre, flush vor der Freigabe, danach frei', () => {
    const s = skriptLaden();
    for (let i = 0; i < 5; i++) stimme(s, 'geraet-' + 'abcde'[i].repeat(6), i);
    assert.deepEqual(s.umgebung.verstoesse, []);
    assert.equal(s.sperre.gehalten, false);
    assert.ok(s.sperre.wartezeiten.every((ms) => ms >= 5000), 'Wartezeit der Sperre zu kurz');
    /* Server gibt vor dem Handy auf (js/abstimmen.js: ZEITLIMIT 30 s) – mit Luft für Schreiben und Weiterleitung */
    const handyLimit = Number((/var ZEITLIMIT = (\d+);/.exec(fs.readFileSync(path.resolve(HIER, '..', 'js', 'abstimmen.js'), 'utf8')) || [])[1]);
    assert.ok(handyLimit > 0, 'ZEITLIMIT in js/abstimmen.js nicht gefunden');
    assert.ok(s.sperre.wartezeiten.every((ms) => ms <= handyLimit - 15000), 'Wartezeit der Sperre zu lang für das Zeitlimit des Handys (' + handyLimit + ' ms)');
    const e = s.umgebung.ereignisse;
    /* Reihenfolge je Stimme: sperre … setValues … flush … freigabe */
    let offen = false, geflusht = false;
    for (const x of e) {
      if (x === 'sperre') { assert.equal(offen, false, 'Sperre doppelt'); offen = true; geflusht = false; }
      if (x === 'flush') { assert.equal(offen, true, 'flush ohne Sperre'); geflusht = true; }
      if (x === 'freigabe') { assert.equal(geflusht, true, 'Freigabe vor flush'); offen = false; }
    }
  });

  pruefe('Sperre besetzt: Stimme abgelehnt („noch einmal“), keine Zeile; Stand geht trotzdem', () => {
    const s = skriptLaden();
    stimme(s, 'geraet-aaaa', 1);
    s.sperre.frei = false;
    const r = stimme(s, 'geraet-bbbb', 2);
    istFehler(r, 'Sperre besetzt');
    assert.match(r.daten.fehler, /noch einmal/);
    assert.equal(s.zeilen().length, 1);
    assert.deepEqual(stand(s).daten.werte, [0, 1, 0, 0, 0]);
  });

  pruefe('Fehlende Tabelle: Serverfehler als Antwort, kein Absturz, Sperre wieder frei', () => {
    const s = skriptLaden({ ohneTabelle: true });
    const r1 = stimme(s, 'geraet-aaaa', 1);
    istFehler(r1, 'ohne Tabelle (stimme)');
    assert.match(r1.daten.fehler, /^Serverfehler: /);
    assert.equal(s.sperre.gehalten, false);
    istFehler(stand(s), 'ohne Tabelle (stand)');
  });

  pruefe('Blatt „Stimmen“ von Hand leer angelegt: Kopfzeile wird ergänzt, erste Stimme zählt', () => {
    const s = skriptLaden();
    s.umgebung.tabelle.insertSheet('Stimmen');
    stimme(s, 'geraet-aaaa', 3);
    assert.deepEqual(s.blatt().getRange(1, 1, 1, 5).getValues()[0], ['Zeit', 'Runde', 'Umfrage', 'Option', 'Geraet']);
    assert.deepEqual(stand(s).daten.werte, [0, 0, 0, 1, 0]);
  });

  pruefe('Kopfzeile von Hand gelöscht: keine Stimme geht verloren', () => {
    const s = skriptLaden();
    stimme(s, 'geraet-aaaa', 1); stimme(s, 'geraet-bbbb', 2);
    const zellen = s.blatt()._zellen;
    zellen.shift();                                   /* Zeile 1 löschen */
    assert.deepEqual(stand(s).daten.werte, [0, 1, 1, 0, 0]);
  });

  pruefe('Blatt voll (wenige Zeilen): neue Zeilen werden angefügt', () => {
    const s = skriptLaden({ maxZeilen: 3 });
    for (let i = 0; i < 7; i++) assert.equal(stimme(s, 'geraet-' + String(i).repeat(6), i % 5).daten.ok, true);
    assert.equal(stand(s).daten.n, 7);
  });

  pruefe('Tabelle sortiert oder Zeilen vertauscht: es zählt die spätere Zeit', () => {
    const s = skriptLaden();
    stimme(s, 'geraet-aaaa', 1);
    stimme(s, 'geraet-aaaa', 3);
    const z = s.blatt()._zellen;
    z[1][0].wert = new Date('2026-10-26T14:00:00Z');
    z[2][0].wert = new Date('2026-10-26T14:00:05Z');
    [z[1], z[2]] = [z[2], z[1]];                     /* neuere Stimme steht jetzt oben */
    assert.deepEqual(stand(s).daten.werte, [0, 0, 0, 1, 0]);
  });

  pruefe('Unvollständige Zeilen (von Hand) werden übersprungen', () => {
    const s = skriptLaden();
    stimme(s, 'geraet-aaaa', 1);
    const b = s.blatt();
    b.getRange(3, 1, 1, 5).setValues([['', 'probe', 'tier', '', 'geraet-bbbb']]);
    b.getRange(4, 1, 1, 5).setValues([[new Date(), 'probe', 'tier', 2, '']]);
    assert.deepEqual(stand(s).daten.werte, [0, 1, 0, 0, 0]);
  });

  pruefe('Geräte-IDs wie __proto__ und constructor: normale Schlüssel', () => {
    const s = skriptLaden();
    stimme(s, '__proto__', 0); stimme(s, 'constructor', 1); stimme(s, 'hasOwnProperty', 2); stimme(s, '__proto__', 4);
    assert.deepEqual(stand(s).daten.werte, [0, 1, 1, 0, 1]);
  });

  pruefe('Zusätzliche Parameter (z. B. _=Zeitstempel) werden ignoriert', () => {
    const s = skriptLaden();
    assert.equal(stimme(s, 'geraet-aaaa', 0, { _: '1729950000000', extra: 'x y' }).daten.ok, true);
    assert.deepEqual(stand(s, { _: '1729950000001' }).daten.werte, [1, 0, 0, 0, 0]);
  });

  pruefe('Datenschutz: Stand enthält keine Geräte-IDs, Runden oder Zeitstempel der Stimmen', () => {
    const s = skriptLaden();
    stimme(s, 'geheime-id-123', 2);
    const r = stand(s);
    assert.ok(!r.text.includes('geheime-id-123'));
    assert.deepEqual(Object.keys(r.daten), ['ok', 'werte', 'n', 'zeit']);
  });

  pruefe('Hörsaal: 40 Handys, 10 entscheiden sich um, 5 senden doppelt → n = 40', () => {
    const s = skriptLaden();
    const ids = Array.from({ length: 40 }, (_, i) => 'handy-' + String(i).padStart(4, '0'));
    ids.forEach((id, i) => stimme(s, id, i % 5));
    ids.slice(0, 10).forEach((id) => stimme(s, id, 2));
    ids.slice(30, 35).forEach((id, i) => stimme(s, id, (30 + i) % 5));
    const r = stand(s);
    assert.equal(r.daten.n, 40);
    /* erwartet: i%5 für i=10..39 (je 6) + 10 × Option 2 */
    assert.deepEqual(r.daten.werte, [6, 6, 16, 6, 6]);
  });

  pruefe('einrichten(): legt Blatt an, mehrfach ausführbar, protokolliert', () => {
    const s = skriptLaden();
    s.einrichten(); s.einrichten();
    assert.equal(s.blatt().getLastRow(), 1);
    assert.equal(s.umgebung.protokoll.length, 2);
    stimme(s, 'geraet-aaaa', 0);
    s.einrichten();
    assert.equal(s.blatt().getLastRow(), 2, 'einrichten darf keine Stimmen löschen');
  });

  return liste;
}


/* =============================================================================
   3. LOKALER SERVER (--server PORT)
   ============================================================================= */

export function serverStarten(port = 8787, verzoegerung = 0) {
  const s = skriptLaden();
  const server = http.createServer(function (req, res) {
    const url = new URL(req.url, 'http://localhost');
    if (req.method !== 'GET' || url.pathname !== '/exec') {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Nur GET /exec?… (wie die Web-App von Google)');
      return;
    }
    /* wie Apps Script: bei doppelten Parametern zählt der erste */
    const parameter = {};
    for (const [k, v] of url.searchParams) if (!(k in parameter)) parameter[k] = v;
    setTimeout(function () {
      const r = s.anfrage(parameter);
      res.writeHead(200, {
        'Content-Type': (r.mime === 'JAVASCRIPT' ? 'application/javascript' : 'application/json') + '; charset=utf-8',
        'Cache-Control': 'no-store'
      });
      res.end(r.text);
      const zeit = new Date().toLocaleTimeString('de-DE');
      if (parameter.aktion === 'stimme' || !(r.daten && r.daten.ok)) {
        console.log(zeit + '  ' + (parameter.aktion || '–') + '  runde=' + (parameter.runde || '–') +
          (parameter.option !== undefined ? '  option=' + parameter.option : '') + '  → ' + r.text);
      }
    }, verzoegerung);
  });
  server.listen(port, '127.0.0.1', function () {
    console.log('Live-Abstimmung (Attrappe mit dem echten apps-script.gs) läuft:');
    console.log('  http://localhost:' + port + '/exec   ← mit ?quelle= übergeben (marke.js nicht ändern):');
    console.log('    Folie:        index.html?quelle=http://localhost:' + port + '/exec#f08');
    console.log('    Abstimmseite: abstimmen.html?u=tier&quelle=http://localhost:' + port + '/exec');
    console.log('  Test: http://localhost:' + port + '/exec?aktion=stand&umfrage=tier&runde=probe&anzahl=5');
    if (verzoegerung) console.log('  Antwortzeit: ' + verzoegerung + ' ms');
    console.log('  Strg+C beendet den Server (Stimmen sind dann weg).');
  });
  return server;
}


/* =============================================================================
   4. LASTTEST GEGEN DIE ECHTE WEB-APP (--lasttest URL)
   Die Attrappe ist einfädig – ob Google 20–40 fast gleichzeitige Stimmen
   annimmt (Skriptsperre, gleichzeitige Ausführungen je Konto), zeigt nur ein
   Test mit der echten Web-App. fetch folgt der Weiterleitung von Google
   (script.google.com → script.googleusercontent.com) von selbst.
   ============================================================================= */

export async function lasttest(url, anzahl = 40) {
  if (!/^https:\/\/script\.google\.com\/\S+\/exec$/.test(url) && !/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/exec$/.test(url)) {
    throw new Error('Adresse muss die Web-App-URL sein (https://script.google.com/macros/s/…/exec) oder die Attrappe (http://localhost:8787/exec).');
  }
  const jetzt = new Date();
  const zwei = (x) => String(x).padStart(2, '0');
  const runde = 'lasttest-' + jetzt.getFullYear() + zwei(jetzt.getMonth() + 1) + zwei(jetzt.getDate()) + '-' + zwei(jetzt.getHours()) + zwei(jetzt.getMinutes()) + zwei(jetzt.getSeconds());
  const zufall = Math.random().toString(36).slice(2, 8);
  async function holen(parameter) {
    const start = Date.now();
    const adresse = url + '?' + new URLSearchParams(parameter).toString();
    try {
      const antwort = await fetch(adresse, { redirect: 'follow', signal: AbortSignal.timeout(60000) });
      const text = await antwort.text();
      let daten = null;
      try { daten = JSON.parse(text); } catch (f) { /* z. B. Anmeldeseite (HTML) */ }
      return { ms: Date.now() - start, status: antwort.status, daten, text: text.slice(0, 160).replace(/\s+/g, ' ') };
    } catch (f) {
      return { ms: Date.now() - start, status: 0, daten: null, text: String(f && f.message || f) };
    }
  }
  console.log('Lasttest: ' + anzahl + ' Stimmen gleichzeitig an ' + url);
  console.log('Runde „' + runde + '“ (zählt weder in „probe“ noch im Vortrag)\n');
  const t0 = Date.now();
  const ergebnisse = await Promise.all(Array.from({ length: anzahl }, (_, i) => holen({
    aktion: 'stimme', umfrage: 'tier', runde, option: String(i % 5), anzahl: '5', geraet: 'lasttest-' + zufall + '-' + String(i).padStart(3, '0')
  })));
  const gesamt = Date.now() - t0;
  const ok = ergebnisse.filter((r) => r.daten && r.daten.ok === true);
  const zeiten = ergebnisse.map((r) => r.ms).sort((a, b) => a - b);
  const median = zeiten[Math.floor(zeiten.length / 2)];
  console.log('angenommen: ' + ok.length + ' von ' + anzahl + ' · Antwortzeit Median ' + (median / 1000).toFixed(1) + ' s, längste ' + (zeiten[zeiten.length - 1] / 1000).toFixed(1) + ' s · alle fertig nach ' + (gesamt / 1000).toFixed(1) + ' s');
  const abgelehnt = ergebnisse.filter((r) => !(r.daten && r.daten.ok === true));
  const gruende = new Map();
  abgelehnt.forEach((r) => {
    const g = r.daten && r.daten.fehler ? 'Server: ' + r.daten.fehler : 'HTTP ' + r.status + ': ' + r.text;
    gruende.set(g, (gruende.get(g) || 0) + 1);
  });
  gruende.forEach((n, g) => console.log('  abgelehnt ' + n + ' ×  ' + g));
  const stand = await holen({ aktion: 'stand', umfrage: 'tier', runde, anzahl: '5' });
  const n = stand.daten && stand.daten.ok ? stand.daten.n : null;
  console.log('Stand der Runde: ' + (n === null ? 'nicht lesbar (' + stand.text + ')' : 'n = ' + n + ', werte ' + JSON.stringify(stand.daten.werte)) + ' (Stand-Abfrage ' + (stand.ms / 1000).toFixed(1) + ' s)');
  const bestanden = ok.length === anzahl && n === anzahl;
  console.log('\n' + (bestanden
    ? 'BESTANDEN: alle ' + anzahl + ' Stimmen angenommen und gezählt.'
    : 'NICHT BESTANDEN: ' + (anzahl - ok.length) + ' abgelehnt, gezählt ' + n + '. Abgelehnte Handys sähen „Das hat nicht geklappt“ und müssten nochmal tippen.'));
  return bestanden;
}


/* =============================================================================
   5. AUFRUF
   ============================================================================= */

function hauptprogramm() {
  const argv = process.argv.slice(2);
  const iLast = argv.indexOf('--lasttest');
  if (iLast >= 0) {
    const iA = argv.indexOf('--anzahl');
    const anzahl = iA >= 0 ? Math.min(100, Math.max(1, Number(argv[iA + 1]) || 40)) : 40;
    lasttest(String(argv[iLast + 1] || '').trim(), anzahl)
      .then((ok) => { process.exitCode = ok ? 0 : 1; })
      .catch((f) => { console.error('Lasttest abgebrochen: ' + (f && f.message || f)); process.exitCode = 2; });
    return;
  }
  const iServer = argv.indexOf('--server');
  if (iServer >= 0) {
    const port = Number(argv[iServer + 1]) || 8787;
    const iV = argv.indexOf('--verzoegerung');
    const verzoegerung = iV >= 0 ? Math.max(0, Number(argv[iV + 1]) || 0) : 0;
    serverStarten(port, verzoegerung);
    return;
  }
  let fehler = 0;
  const liste = pruefungen();
  for (const { name, fn } of liste) {
    try {
      fn();
      console.log('  ok      ' + name);
    } catch (f) {
      fehler++;
      console.log('  FEHLER  ' + name + '\n          ' + String(f && f.message || f).split('\n').join('\n          '));
    }
  }
  const anzeige = path.relative(process.cwd(), SKRIPT_PFAD);
  console.log('\n' + (liste.length - fehler) + ' von ' + liste.length + ' Prüfungen bestanden (' +
    (anzeige.startsWith('..') ? SKRIPT_PFAD : anzeige) + ').');
  process.exitCode = fehler ? 1 : 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) hauptprogramm();
