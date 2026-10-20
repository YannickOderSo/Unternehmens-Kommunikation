#!/usr/bin/env node
/* =============================================================================
   live-abstimmung-test.mjs – Server-Skript der Live-Abstimmung ohne Google prüfen
   -----------------------------------------------------------------------------
   Lädt live-abstimmung/apps-script.gs in Node (node:vm) – mit Attrappen für
   SpreadsheetApp (Tabelle im Speicher), LockService, PropertiesService,
   ContentService und Logger – und prüft:
     • Syntax: Das Skript lässt sich laden; nur doGet und einrichten sind im
       Editor ausführbar (Hilfsfunktionen enden auf _); @OnlyCurrentDoc
     • Zählen, Umentscheiden (nur die letzte Stimme je Gerät), Runden und
       Umfragen getrennt, Stand ohne Geräte-IDs
     • falsche Eingaben: jede wird abgelehnt, nichts wird geschrieben
     • JSONP (ausführbar) und JSON, ungültige callback-Namen
     • Text-Format: Die Attrappe wandelt wie Google Tabellen „2026-10-26“ in
       ein Datum, „true“ in einen Wahrheitswert und „12345678“ in eine Zahl
       um – außer in Zellen mit dem Format '@' (Text). Angefügte Zeilen haben
       kein Format.
     • Schneller Weg: Unter der Sperre steht nur der Zähler (Skript-
       Eigenschaften), kein Zugriff auf die Tabelle; {"ok":true} erst nach dem
       Schreiben (flush); besetzte Sperre → Fehlertext „Gerade kommen sehr
       viele Stimmen …“, keine Zeile
     • Nebenläufigkeit: Eine zweite (und dritte) Stimme startet an JEDER
       Stelle einer laufenden Stimme (verschachtelte Ausführungen) – dabei geht
       keine Stimme verloren, keine Zeile wird doppelt belegt, die neuere Wahl
       gewinnt. Auch mit einem appendRow, das NICHT atomar ist.
     • einrichten(): legt an, richtet ein altes Blatt nach (Formate der ganzen
       Spalten, 5000 vorgehaltene Zeilen, Zähler – nie zurück), Textschutz-Probe
     • Zähler passt nicht zum Blatt (Zeilen eingefügt, gelöscht), Reserve
       aufgebraucht, fehlende Tabelle, leeres oder sortiertes Blatt
     • Fassung: …/exec?aktion=fassung nennt FASSUNG aus dem Skript
   Die Attrappe puffert Schreibzugriffe je Ausführung wie Apps Script (bis
   flush, bis zum eigenen Lesen oder bis zum Ende) und prüft die Regeln der
   Google-Referenz (Lock): flush vor releaseLock; Skript-Eigenschaften nur
   unter der Sperre ändern; eine gelesene Skript-Eigenschaft nur in DERSELBEN
   Sperr-Phase zurückschreiben (sonst zwei Stimmen, eine Zeilennummer);
   Zeilen und Blätter nur unter der Sperre anfügen; Sperre am Ende frei.
   Pessimistisch: Ein mit setValues geschriebenes '' zählt für getLastRow als
   Inhalt (die Referenz sagt dazu nichts) – leeren nur mit clearContent.
   GRENZE DES MODELLS: Verschachtelt heißt, eine Stimme läuft ganz in einer
   Lücke der anderen. Wettläufe, bei denen zwei Ausführungen gleichzeitig
   mittendrin sind (beide lesen denselben Zähler, beide prüfen dieselbe leere
   Zeile), findet dieses Modell grundsätzlich nicht – die deckt nur die
   Regelprüfung oben ab. Bewusst nicht geprüft, weil im Modell unerreichbar:
   „Abgleich ohne Math.max“ (Zähler rückt zurück) und „nach drei belegten
   Zeilen {ok:true} statt Fehler“; der Code ist dort von Hand geprüft.
   Keine Abhängigkeiten, kein Internet.

   AUFRUF (im Ordner praesentation/)
     node werkzeuge/live-abstimmung-test.mjs
        → Prüfungen; Exit-Code 0 = alles bestanden, 1 = Fehler

     node werkzeuge/live-abstimmung-test.mjs --mutationen
        → MUTATIONSTEST: absichtlich kaputte Kopien des Skripts (z. B. Zeile
          per getLastRow ohne Sperre, ohne Textformat, erste statt letzte
          Stimme). Jede muss mindestens eine Prüfung scheitern lassen.
          Exit-Code 0 = alle erkannt.

     node werkzeuge/live-abstimmung-test.mjs --server 8787 [--verzoegerung 800]
          [--sperre 200] [--stoerung 0.2] [--abbruch 0.1] [--gleichzeitig 30]
        → lokaler Server mit dem ECHTEN Skript (Tabelle im Speicher) unter
          http://localhost:8787/exec – zum Ausprobieren von abstimmen.html und
          Folie 08 ohne Google-Konto. marke.js NICHT ändern, sondern die Adresse
          mit ?quelle= übergeben (gilt nur für file:// und localhost; eine
          liveQuelle auf localhost nimmt die Abstimmseite absichtlich nicht an):
            index.html?quelle=http://localhost:8787/exec#f08               (Folie)
            index.html?referent&quelle=http://localhost:8787/exec#f08      (Referentenfenster)
            abstimmen.html?u=tier&quelle=http://localhost:8787/exec        (Abstimmseite)
          Jeder weitere Browser bzw. jedes private Fenster zählt als eigenes Handy.
          --verzoegerung  künstliche Antwortzeit in ms (langsames Netz nachstellen)
          --sperre MS     BELASTBARKEIT: Jede Stimme hält die Sperre MS lang
                          (bei Google: Sperre holen, Zähler lesen und
                          schreiben, freigeben – nicht gemessen). Die Stimmen
                          stehen dafür in einer Schlange; wer länger als
                          SPERRE_WARTEN_MS (aus dem Skript) warten müsste,
                          bekommt nach dieser Zeit den Andrang-Text (nicht
                          gespeichert). Vereinfacht: Die Sperre wird beim
                          Eingang angefordert, --verzoegerung kommt dazu.
                          Ohne --sperre ist die Sperre der Attrappe nie besetzt
                          (die Stimmen laufen nacheinander in einem Rutsch):
                          Dann prüft der Lasttest nur die Wiederholung, nicht
                          die Belastbarkeit.
          --stoerung A    dieser Anteil (0–1) der Stimmen wird zufällig mit
                          „Gerade kommen sehr viele Stimmen auf einmal – …“
                          abgelehnt, ohne zu speichern (Sperre besetzt)
          --abbruch A     dieser Anteil (0–1) der Stimmen bekommt keine Antwort
                          des Skripts, zufällig eine von drei Arten: Fehlerseite
                          (HTML, HTTP 200, nicht gespeichert – wie ein Google-
                          Kontingent), Fehlerseite mit HTTP 500 (nicht
                          gespeichert), Verbindung geschlossen (gespeichert,
                          Antwort verloren)
          --gleichzeitig N  höchstens N Anfragen gleichzeitig in Arbeit (Google
                          nennt 30 gleichzeitige Ausführungen je Nutzer; ob
                          und wie das bei der Web-App greift, ist nicht
                          dokumentiert); weitere bekommen sofort die
                          Fehlerseite (nicht gespeichert). Wirkt nur mit
                          --verzoegerung oder --sperre.
          --stoerung und --abbruch prüfen die Wiederholung auf dem Handy, nicht
          die Belastbarkeit: Ein Handy scheitert dann rein zufällig mit A hoch 3
          (3 Versuche) – bei 0,2 etwa 1 von 125, bei 0,5 jedes achte. Einzelne
          „NICHT BESTANDEN“ sind dabei zu erwarten.
          Strg+C beendet ihn; die Stimmen sind dann weg.

     LIVE_SKRIPT=kopie.gs node werkzeuge/live-abstimmung-test.mjs
        → eine geänderte Kopie des Skripts prüfen, bevor sie in Apps Script kommt

     node werkzeuge/live-abstimmung-test.mjs --lasttest <Web-App-URL …/exec>
          [--anzahl 40] [--verteilt 10] [--ohne-folie]
        → LASTTEST (braucht Node 18 oder neuer): 40 Handys stimmen gleichzeitig
          (oder gleichmäßig verteilt über --verteilt Sekunden) in eine eigene
          Runde „lasttest-<Datum>-<Uhrzeit>“ ab – sie zählt weder in 'probe'
          noch im Vortrag. Vorher eine lesende Anfrage ?aktion=fassung: Welche
          Fassung des Skripts läuft? Jedes Handy verhält sich wie
          js/abstimmen.js: bis zu 3 Versuche, Zeitlimit je Versuch 15 s, vor
          jeder Wiederholung eine zufällige Pause von 1,5–4 s (die Werte liest
          der Test aus js/abstimmen.js). Dazu läuft eine „Folie“ mit (ohne
          --ohne-folie): Sie fragt den Stand wie js/komponenten.js ab (eine
          Anfrage zugleich, Takt 2 s, Fehlversuch nach 4 s und 8 s, aufgeben
          nach 15 s, „offline“ ab dem zweiten Fehlversuch in Folge) – nur
          lesend. Ausgabe: angenommen im 1. Versuch / nach Wiederholung /
          endgültig gescheitert, Zeit bis „Danke“ (Median, 90 %, längste),
          Gründe der Fehlversuche, Folie (Antwortzeiten, „offline“), Stand n.
          Urteil:
            BESTANDEN                 n = Anzahl, kein Handy gescheitert und
                                      jedes sah „Danke“ nach höchstens 15 s
                                      (ZIEL_MS) – Exit-Code 0
            GEZÄHLT, ABER ZU LANGSAM  alle gezählt, aber k Handys warteten
                                      länger als 15 s – Exit-Code 1
            NICHT BESTANDEN           Handys gescheitert oder n ≠ Anzahl –
                                      Exit-Code 1 (Abbruch des Tests: 2)
          Eine Messung ist nur eine Stichprobe: gegen die echte Web-App
          mindestens zweimal und einmal mit --anzahl 60.
          Gegen die ECHTE Web-App schreibt er in die Tabelle – die Zeilen der
          Runde „lasttest-…“ dürfen danach im Blatt „Stimmen“ gelöscht werden
          (wenn gerade niemand abstimmt). Gegen die Attrappe:
          --lasttest http://localhost:8787/exec (Belastbarkeit nur mit --sperre)

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
const ABSTIMMEN_JS = path.resolve(HIER, '..', 'js', 'abstimmen.js');

/* Textanfang, an dem das Handy „Server ausgelastet“ erkennt (js/abstimmen.js,
   AUSGELASTET) – das Skript muss bei Andrang so antworten */
const ANDRANG_ANFANG = 'Gerade kommen sehr viele Stimmen';
/* Ziel: Jedes Handy sieht spätestens nach so vielen ms „Danke“ (Lasttest) */
export const ZIEL_MS = 15000;

/* Fassung des Skripts aus der Antwort auf ?aktion=fassung
   („Unbekannte Aktion – … (Skript-Fassung 19.10.2026)“); ältere Fassungen: null */
export function fassungAusText(text) {
  const m = /Skript-Fassung (\d\d\.\d\d\.\d{4})/.exec(String(text || ''));
  return m ? m[1] : null;
}


/* =============================================================================
   0. REGELN DES HANDYS (js/abstimmen.js)
   Werte der automatischen Wiederholung aus js/abstimmen.js lesen, damit der
   Lasttest dieselbe Regel anwendet. Fehlt ein Wert dort, gilt die Vorgabe.
   ============================================================================= */
export function handyRegeln() {
  const vorgabe = {
    ZEITLIMIT: 15000, VERSUCHE: 3, PAUSE_MIN: 1500, PAUSE_MAX: 4000,
    AUSGELASTET: ANDRANG_ANFANG, SERVERFEHLER: 'Serverfehler:'
  };
  let text = '';
  try { text = fs.readFileSync(ABSTIMMEN_JS, 'utf8'); } catch (f) { /* Vorgaben */ }
  const regeln = { quelle: {} };
  for (const [name, wert] of Object.entries(vorgabe)) {
    const muster = typeof wert === 'number'
      ? new RegExp('var ' + name + ' = (\\d+);')
      : new RegExp('var ' + name + " = '([^']*)';");
    const m = muster.exec(text);
    regeln[name] = m ? (typeof wert === 'number' ? Number(m[1]) : m[1]) : wert;
    regeln.quelle[name] = m ? 'js/abstimmen.js' : 'Vorgabe';
  }
  return regeln;
}


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

const ALLGEMEIN = 'General';

/* Ein Tabellenblatt: Werte zeilenweise, Formate spaltenweise (schnell auch
   für 5000 Zeilen). Jede Methode meldet sich bei der Umgebung (u.aufruf):
   Protokoll, eingespielte Dienstfehler, verschachtelte Ausführungen.
   Schreiben wird gepuffert (u.puffern), Lesen schreibt zuerst den eigenen
   Puffer (wie Apps Script: eigene Änderungen sind beim Lesen sichtbar,
   fremde erst nach flush bzw. Ende der fremden Ausführung). */
function blattAttrappe(name, u, maxZeilen) {
  const werte = [];                      /* werte[zeile-1][spalte-1] */
  const formate = [];                    /* formate[spalte-1][zeile-1] */
  /* Zellen, in die das Skript '' per setValues geschrieben hat: Sie liefern
     '' zurück, zählen für getLastRow aber pessimistisch als Inhalt (Zeile-1) */
  let leerGeschrieben = new Set();
  let fixiert = 0;
  let maxZ = maxZeilen || 1000;
  const maxS = 26;

  const wert = (z, s) => (werte[z] && werte[z][s] !== undefined ? werte[z][s] : '');
  const format = (z, s) => (formate[s] && formate[s][z] !== undefined ? formate[s][z] : ALLGEMEIN);
  function wertSetzen(z, s, w, vomSkript) {
    if (!werte[z]) werte[z] = [];
    werte[z][s] = wieTabelleUmwandeln(w, format(z, s));
    const schluessel = z + ',' + s;
    if (vomSkript && w === '') leerGeschrieben.add(schluessel);
    else leerGeschrieben.delete(schluessel);
  }
  function inhaltLoeschen(z, s) {
    if (werte[z]) werte[z][s] = '';
    leerGeschrieben.delete(z + ',' + s);
  }
  function formatSetzen(z, s, f) {
    if (!formate[s]) formate[s] = [];
    formate[s][z] = f;
  }
  function letzteZeile() {
    let leer = 0;
    leerGeschrieben.forEach((k) => { leer = Math.max(leer, Number(k.split(',')[0]) + 1); });
    for (let z = werte.length - 1; z >= 0; z--) {
      if (werte[z] && werte[z].some((w) => w !== '' && w !== null && w !== undefined)) return Math.max(z + 1, leer);
    }
    return leer;
  }
  /* Einfügen/Löschen: Zeilen ab „ab“ (0-basiert) um „um“ verschieben, die
     Zeile „weg“ (0-basiert, gelöscht) entfällt */
  function leerVerschieben(ab, um, weg) {
    const neu = new Set();
    leerGeschrieben.forEach((k) => {
      const [z, s] = k.split(',').map(Number);
      if (z === weg) return;
      neu.add((z >= ab ? z + um : z) + ',' + s);
    });
    leerGeschrieben = neu;
  }

  function bereich(zeile, spalte, zA, sA) {
    const r = {
      getValues() {
        u.aufruf('getValues', 'tabelle');
        u.eigenenPufferSchreiben();
        const aus = [];
        for (let i = 0; i < zA; i++) {
          const reihe = [];
          for (let j = 0; j < sA; j++) reihe.push(wert(zeile - 1 + i, spalte - 1 + j));
          aus.push(reihe);
        }
        return aus;
      },
      getNumberFormats() {
        u.aufruf('getNumberFormats', 'tabelle');
        u.eigenenPufferSchreiben();
        const aus = [];
        for (let i = 0; i < zA; i++) {
          const reihe = [];
          for (let j = 0; j < sA; j++) reihe.push(format(zeile - 1 + i, spalte - 1 + j));
          aus.push(reihe);
        }
        return aus;
      },
      setValues(neu) {
        u.aufruf('setValues', 'tabelle');
        assert.equal(neu.length, zA, 'setValues: Zeilenzahl passt nicht zum Bereich');
        neu.forEach(function (reihe) { assert.equal(reihe.length, sA, 'setValues: Spaltenzahl passt nicht'); });
        const kopie = neu.map((reihe) => reihe.slice());
        u.puffern(function () {
          kopie.forEach((reihe, i) => reihe.forEach((w, j) => wertSetzen(zeile - 1 + i, spalte - 1 + j, w, true)));
          u.ereignisse.push('schreiben');
        });
        return r;
      },
      clearContent() {
        u.aufruf('clearContent', 'tabelle');
        u.puffern(function () {
          for (let i = 0; i < zA; i++) for (let j = 0; j < sA; j++) inhaltLoeschen(zeile - 1 + i, spalte - 1 + j);
        });
        return r;
      },
      setNumberFormats(neu) {
        u.aufruf('setNumberFormats', 'tabelle');
        assert.equal(neu.length, zA, 'setNumberFormats: Zeilenzahl passt nicht');
        neu.forEach(function (reihe) { assert.equal(reihe.length, sA, 'setNumberFormats: Spaltenzahl passt nicht'); });
        const kopie = neu.map((reihe) => reihe.slice());
        u.puffern(() => kopie.forEach((reihe, i) => reihe.forEach((f, j) => formatSetzen(zeile - 1 + i, spalte - 1 + j, f))));
        return r;
      },
      setNumberFormat(f) {
        u.aufruf('setNumberFormat', 'tabelle');
        u.puffern(function () {
          for (let i = 0; i < zA; i++) for (let j = 0; j < sA; j++) formatSetzen(zeile - 1 + i, spalte - 1 + j, f);
        });
        return r;
      },
      setFontWeight() { u.aufruf('setFontWeight', 'tabelle'); return r; }
    };
    return r;
  }

  const blatt = {
    getName: () => name,
    getLastRow() {
      u.aufruf('getLastRow', 'tabelle');
      u.eigenenPufferSchreiben();
      return letzteZeile();
    },
    getMaxRows() { u.aufruf('getMaxRows', 'tabelle'); return maxZ; },
    insertRowsAfter(nach, anzahl) {
      u.aufruf('insertRowsAfter', 'tabelle');
      assert.ok(Number.isInteger(nach) && nach >= 1 && nach <= maxZ, 'insertRowsAfter: Zeile außerhalb des Blatts');
      assert.ok(Number.isInteger(anzahl) && anzahl >= 1, 'insertRowsAfter: Anzahl ungültig');
      if (u.aktuell() && !u.haeltSperre()) u.verstoesse.push('Zeilen ohne Sperre angefügt (insertRowsAfter)');
      u.eigenenPufferSchreiben();
      blatt._zeilenEinfuegen(nach, anzahl);
      return blatt;
    },
    setFrozenRows(n) { u.aufruf('setFrozenRows', 'tabelle'); fixiert = n; return blatt; },
    getFrozenRows: () => fixiert,
    getRange(zeile, spalte, zeilenAnz = 1, spaltenAnz = 1) {
      u.aufruf('getRange', 'tabelle');
      /* wie Google: Bereich muss mindestens 1 × 1 groß sein und im Blatt liegen */
      if (![zeile, spalte, zeilenAnz, spaltenAnz].every(Number.isInteger) || zeilenAnz < 1 || spaltenAnz < 1 || zeile < 1 || spalte < 1) {
        throw new Error('Ungültiger Bereich: ' + [zeile, spalte, zeilenAnz, spaltenAnz].join(', '));
      }
      if (zeile + zeilenAnz - 1 > maxZ || spalte + spaltenAnz - 1 > maxS) {
        throw new Error('Die Koordinaten des Bereichs liegen außerhalb der Abmessungen des Tabellenblatts.');
      }
      return bereich(zeile, spalte, zeilenAnz, spaltenAnz);
    },
    /* appendRow: hängt hinter die letzte Zeile mit Inhalt; eine Zeile hinter
       dem Blattende entsteht ohne Format. Atomar oder – Gegenprobe, die
       Referenz verspricht nichts – mit einer Lücke zwischen „letzte Zeile
       ermitteln“ und „schreiben“, in der andere Ausführungen laufen können. */
    appendRow(reihe) {
      u.aufruf('appendRow', 'tabelle');
      u.eigenenPufferSchreiben();
      const ziel = letzteZeile() + 1;
      if (!u.appendRowAtomar) u.aufruf('appendRow (schreiben)', 'tabelle');
      if (ziel > maxZ) maxZ = ziel;
      reihe.forEach((w, j) => wertSetzen(ziel - 1, j, w, true));
      u.ereignisse.push('schreiben');
      return blatt;
    },

    /* nur für die Prüfungen – wie eine Hand in der Tabelle, ohne Puffer */
    _wert: (z, s) => wert(z - 1, s - 1),
    _format: (z, s) => format(z - 1, s - 1),
    _setzen(z, reihe) { reihe.forEach((w, j) => wertSetzen(z - 1, j, w, false)); },
    _zeilenEinfuegen(nach, anzahl) {          /* neue Zeilen ohne Format */
      if (nach < werte.length) werte.splice(nach, 0, ...new Array(anzahl).fill(undefined));
      formate.forEach((spalte) => { if (spalte && nach < spalte.length) spalte.splice(nach, 0, ...new Array(anzahl).fill(undefined)); });
      leerVerschieben(nach, anzahl, -1);
      maxZ += anzahl;
    },
    _zeileLoeschen(z) {
      werte.splice(z - 1, 1);
      formate.forEach((spalte) => { if (spalte) spalte.splice(z - 1, 1); });
      leerVerschieben(z, -1, z - 1);
      maxZ -= 1;
    },
    _zeilenTauschen(a, b) {
      [werte[a - 1], werte[b - 1]] = [werte[b - 1], werte[a - 1]];
    },
    _letzteZeile: letzteZeile,
    _maxZeilen: () => maxZ
  };
  return blatt;
}

function umgebungBauen(optionen = {}) {
  const u = {
    blaetter: new Map(),
    eigenschaften: new Map(),          /* Skript-Eigenschaften */
    verstoesse: [], ereignisse: [], protokoll: [], aufrufe: [], wartezeiten: [],
    stapel: [],                        /* laufende Ausführungen, oben = aktuelle */
    nr: 0,
    sperreInhaber: null,               /* Nummer der Ausführung, 'fremd' (Prüfung) oder null */
    phasen: 0,                         /* jede neu geholte Sperre = eine neue Sperr-Phase */
    phase: null,                       /* Nummer der laufenden Sperr-Phase oder null */
    ohneTabelle: !!optionen.ohneTabelle,
    appendRowAtomar: optionen.appendRowAtomar !== false,
    dienstFehler: null,                /* Name eines Aufrufs, der einmal scheitern soll */
    uhr: Date.now()                    /* jede new Date() eine Millisekunde später */
  };
  u.aktuell = () => u.stapel[u.stapel.length - 1] || null;
  u.haeltSperre = () => { const a = u.aktuell(); return !!a && u.sperreInhaber === a.nr; };

  /* Jeder Dienstaufruf: protokollieren, ggf. Fehler einspielen, ggf. eine
     verschachtelte Ausführung starten (Nebenläufigkeit nachstellen: sie läuft
     komplett, bevor dieser Aufruf ausgeführt wird). */
  u.aufruf = function (name, art) {
    const a = u.aktuell();
    u.aufrufe.push({ name, art, ausfuehrung: a ? a.nr : 0, unterSperre: u.haeltSperre() });
    if (u.dienstFehler === name) {
      u.dienstFehler = null;
      throw new Error('Dienst gerade nicht erreichbar (' + name + ')');
    }
    if (a) {
      a.aufrufe++;
      if (a.kind && a.aufrufe >= a.kind.bei) {
        const kind = a.kind;
        a.kind = null;
        kind.verschachtelt = true;
        kind.starten();
      }
    }
  };
  u.puffern = function (schritt) {
    const a = u.aktuell();
    if (a) a.puffer.push(schritt); else schritt();
  };
  u.pufferSchreiben = function (a) { a.puffer.splice(0).forEach((schritt) => schritt()); };
  u.eigenenPufferSchreiben = function () { const a = u.aktuell(); if (a) u.pufferSchreiben(a); };

  /* Eine Ausführung (doGet oder einrichten): am Ende wird die Sperre frei
     und der Puffer geschrieben – wie bei Apps Script */
  u.ausfuehren = function (fn, kind) {
    const a = { nr: ++u.nr, puffer: [], aufrufe: 0, kind: kind || null, gelesen: new Map() };
    u.stapel.push(a);
    let ergebnis, fehler = null;
    try { ergebnis = fn(); } catch (f) { fehler = f; }
    u.stapel.pop();
    if (u.sperreInhaber === a.nr) {
      u.verstoesse.push('Sperre am Ende der Ausführung noch gehalten');
      u.sperreInhaber = null;
      u.phase = null;
    }
    return { a, ergebnis, fehler };
  };

  const tabelle = {
    getSheetByName(n) { u.aufruf('getSheetByName', 'tabelle'); return u.blaetter.get(n) || null; },
    insertSheet(n) {
      u.aufruf('insertSheet', 'tabelle');
      if (u.aktuell() && !u.haeltSperre()) u.verstoesse.push('Blatt ohne Sperre angelegt (insertSheet)');
      if (u.blaetter.has(n)) throw new Error('Ein Tabellenblatt mit dem Namen „' + n + '“ ist bereits vorhanden.');
      const b = blattAttrappe(n, u, optionen.maxZeilen);
      u.blaetter.set(n, b);
      return b;
    }
  };

  function sperreFuer(meine) {
    const sperre = {
      tryLock(ms) {
        u.aufruf('tryLock', 'sperre');
        u.wartezeiten.push(ms);
        /* Verschachtelt kann die äußere Ausführung nicht weiterlaufen, solange
           die innere wartet – besetzt heißt hier: Wartezeit abgelaufen. */
        if (u.sperreInhaber !== null && u.sperreInhaber !== meine) return false;
        if (u.sperreInhaber !== meine) u.phase = ++u.phasen;          /* neu geholt */
        u.sperreInhaber = meine;
        u.ereignisse.push('sperre');
        return true;
      },
      waitLock(ms) { if (!sperre.tryLock(ms)) throw new Error('Zeitüberschreitung beim Warten auf die Sperre.'); },
      releaseLock() {
        u.aufruf('releaseLock', 'sperre');
        if (u.sperreInhaber !== meine) return;
        /* Referenz Lock.releaseLock: vorher SpreadsheetApp.flush() */
        const a = u.aktuell();
        if (a && a.puffer.length) u.verstoesse.push('Sperre freigegeben, bevor die Änderungen geschrieben sind (flush fehlt)');
        u.sperreInhaber = null;
        u.phase = null;
        u.ereignisse.push('freigabe');
      },
      hasLock: () => u.sperreInhaber === meine
    };
    return sperre;
  }
  function sperreHolen() {
    u.aufruf('getScriptLock', 'sperre');
    const a = u.aktuell();
    return sperreFuer(a ? a.nr : 0);
  }

  /* Regeln (Referenz Lock, Beispiel Ticketnummer): ändern nur unter der
     Sperre; wer eine Eigenschaft gelesen hat, schreibt sie in DERSELBEN
     Sperr-Phase zurück – sonst kann eine andere Ausführung dazwischen denselben
     Wert lesen (zwei Stimmen, eine Zeile). */
  function eigenschaftAendern(text, schluessel) {
    if (!u.haeltSperre()) u.verstoesse.push('Skript-Eigenschaft ohne Sperre geändert: ' + text);
    const a = u.aktuell();
    if (!a) return;
    (schluessel || []).forEach(function (k) {
      if (!a.gelesen.has(k)) return;
      const phase = a.gelesen.get(k);
      if (phase === null || !u.haeltSperre() || phase !== u.phase) {
        u.verstoesse.push('Skript-Eigenschaft „' + k + '“ ' + (phase === null ? 'ohne Sperre' : 'in einer früheren Sperr-Phase') +
          ' gelesen und danach geschrieben – eine andere Stimme kann dazwischen denselben Wert bekommen');
      }
    });
  }
  const eigenschaften = {
    getProperty(k) {
      u.aufruf('getProperty', 'eigenschaften');
      const a = u.aktuell();
      if (a) a.gelesen.set(String(k), u.haeltSperre() ? u.phase : null);
      return u.eigenschaften.has(String(k)) ? u.eigenschaften.get(String(k)) : null;
    },
    getProperties() { u.aufruf('getProperties', 'eigenschaften'); return Object.fromEntries(u.eigenschaften); },
    getKeys() { u.aufruf('getKeys', 'eigenschaften'); return [...u.eigenschaften.keys()]; },
    setProperty(k, v) {
      u.aufruf('setProperty', 'eigenschaften');
      eigenschaftAendern(k, [String(k)]);
      u.eigenschaften.set(String(k), String(v));
      return eigenschaften;
    },
    setProperties(obj) {
      u.aufruf('setProperties', 'eigenschaften');
      eigenschaftAendern(Object.keys(obj).join(', '), Object.keys(obj));
      Object.keys(obj).forEach((k) => u.eigenschaften.set(k, String(obj[k])));
      return eigenschaften;
    },
    deleteProperty(k) {
      u.aufruf('deleteProperty', 'eigenschaften');
      eigenschaftAendern(k, [String(k)]);
      u.eigenschaften.delete(String(k));
      return eigenschaften;
    }
  };

  /* new Date() ohne Angaben: echte Zeit, aber jede Millisekunde nur einmal
     (eine spätere Stimme hat immer eine spätere Zeit – auch verschachtelt) */
  class UhrDatum extends Date {
    constructor(...angaben) {
      if (angaben.length) super(...angaben);
      else super(u.uhr = Math.max(Date.now(), u.uhr + 1));
    }
    static now() { return u.uhr; }
  }

  const MimeType = Object.freeze({ JSON: 'JSON', JAVASCRIPT: 'JAVASCRIPT', TEXT: 'TEXT' });
  const globale = {
    SpreadsheetApp: {
      getActiveSpreadsheet() { u.aufruf('getActiveSpreadsheet', 'tabelle'); return u.ohneTabelle ? null : tabelle; },
      flush() { u.aufruf('flush', 'tabelle'); u.eigenenPufferSchreiben(); u.ereignisse.push('flush'); }
    },
    LockService: { getScriptLock: sperreHolen, getDocumentLock: sperreHolen, getUserLock: sperreHolen },
    PropertiesService: {
      getScriptProperties() { u.aufruf('getScriptProperties', 'eigenschaften'); return eigenschaften; }
    },
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
    Logger: { log(...werte) { u.protokoll.push(werte); return globale.Logger; } },
    Date: UhrDatum,
    console
  };
  u.tabelle = tabelle;
  u.globale = globale;
  return u;
}

/* übersetzte Skripte merken (der Mutationstest lädt dieselbe Kopie oft) */
const UEBERSETZT = new Map();
function uebersetzen(quelltext) {
  if (!UEBERSETZT.has(quelltext)) UEBERSETZT.set(quelltext, new vm.Script(quelltext, { filename: 'apps-script.gs' }));
  return UEBERSETZT.get(quelltext);
}

/* Skript laden und eine bequeme Anfrage-Funktion zurückgeben.
   optionen: pfad | quelltext, maxZeilen, ohneTabelle, appendRowAtomar */
export function skriptLaden(optionen = {}) {
  const quelltext = optionen.quelltext !== undefined ? optionen.quelltext : fs.readFileSync(optionen.pfad || SKRIPT_PFAD, 'utf8');
  const u = umgebungBauen(optionen);
  const kontext = vm.createContext(u.globale);
  uebersetzen(quelltext).runInContext(kontext);

  /* Anfrage wie über die Adresse …/exec?a=b: alle Werte kommen als Text an.
     kind: Ausführung, die mitten in dieser startet (verschachtelt) */
  function anfrageIntern(parameter, kind) {
    const e = parameter === undefined ? undefined : ereignisBauen(parameter);
    const lauf = u.ausfuehren(() => kontext.doGet(e), kind);
    if (lauf.fehler) {
      u.pufferSchreiben(lauf.a);
      throw lauf.fehler;
    }
    const ausgabe = lauf.ergebnis;
    const mime = ausgabe.getMimeType();
    const text = ausgabe.getContent();
    let daten = null;
    if (mime === 'JAVASCRIPT') {
      const m = /^([A-Za-z_$][\w$.]*)\(([\s\S]*)\);$/.exec(text);
      if (m) daten = JSON.parse(m[2]);
    } else {
      try { daten = JSON.parse(text); } catch (f) { daten = null; }
    }
    if (lauf.a.puffer.length && daten && daten.ok === true) u.verstoesse.push('{"ok":true} vor dem Schreiben (flush fehlt)');
    u.pufferSchreiben(lauf.a);
    return { mime, text, daten };
  }

  /* Ausführungen verschachteln: liste[0] startet; liste[i] startet mitten in
     liste[i-1], unmittelbar vor deren Dienstaufruf Nummer liste[i].bei.
     Hat liste[i-1] weniger Aufrufe, startet liste[i] danach. */
  function verschachtelt(liste) {
    const knoten = liste.map((eintrag) => ({ parameter: eintrag.parameter, bei: eintrag.bei || 1, verschachtelt: false, antwort: undefined }));
    knoten.forEach(function (k, i) {
      k.starten = function () {
        k.gestartet = true;
        k.antwort = anfrageIntern(k.parameter, knoten[i + 1] || null);
      };
    });
    knoten.forEach(function (k) { if (!k.gestartet) k.starten(); });
    return knoten;
  }

  const blatt = () => u.blaetter.get('Stimmen') || null;
  return {
    anfrage: (parameter) => anfrageIntern(parameter, null),
    verschachtelt,
    kontext,
    umgebung: u,
    einrichten() {
      const lauf = u.ausfuehren(() => kontext.einrichten());
      u.pufferSchreiben(lauf.a);
      if (lauf.fehler) throw lauf.fehler;
    },
    blatt,
    /* Datenzeilen als Werte (ohne Kopfzeile und ohne leere Zeilen) */
    zeilen() {
      const b = blatt();
      if (!b) return [];
      const aus = [];
      for (let z = 2; z <= b._letzteZeile(); z++) {
        const reihe = [1, 2, 3, 4, 5].map((s) => b._wert(z, s));
        if (reihe.some((w) => w !== '' && w !== null)) aus.push(reihe);
      }
      return aus;
    },
    /* Protokoll von einrichten() als Text (Logger.log mit %s) */
    protokollText() {
      return u.protokoll.map(function (eintrag) {
        let i = 1;
        return String(eintrag[0]).replace(/%s/g, () => String(eintrag[i++]));
      });
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
const KOPF = ['Zeit', 'Runde', 'Umfrage', 'Option', 'Geraet'];
const FORMATE = ['dd.mm.yyyy hh:mm:ss', '@', '@', '0', '@'];

function stimmeParameter(geraet, option, extra = {}) {
  return Object.assign({ aktion: 'stimme', umfrage: 'tier', runde: 'probe', option, anzahl: N, geraet, callback: 'f' }, extra);
}
function stimme(s, geraet, option, extra = {}) {
  return s.anfrage(stimmeParameter(geraet, option, extra));
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
function istAndrang(r, hinweis) {
  istFehler(r, hinweis);
  assert.ok(r.daten.fehler.startsWith(ANDRANG_ANFANG), hinweis + ': nicht der Andrang-Text: ' + r.daten.fehler);
}
function istTyp(wert) { return Object.prototype.toString.call(wert).slice(8, -1); }
function zaehlerName(quelltext) {
  const m = /const ZAEHLER = '([^']+)';/.exec(quelltext);
  return m ? m[1] : 'naechsteZeile';
}

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

/* Blatt wie von der Fassung bis 19.10.2026: 1000 Zeilen, Formate nur in den
   beschriebenen Zeilen, kein Zähler */
function altesBlatt(s, stimmen) {
  const b = s.umgebung.tabelle.insertSheet('Stimmen');
  b._setzen(1, KOPF);
  stimmen.forEach(function (st, i) {
    const z = i + 2;
    FORMATE.forEach((f, j) => { b.getRange(z, j + 1).setNumberFormat(f); });
    b._setzen(z, [new Date(Date.UTC(2026, 9, 19, 10, 0, i)), st[0], 'tier', st[1], st[2]]);
  });
  s.umgebung.aufrufe.length = 0;
  return b;
}

/* Ausgangslagen für die Nebenläufigkeit */
const LAGEN = {
  'ohne Blatt': function () { return skriptLaden(this.optionen); },
  'eingerichtet': function () { const s = skriptLaden(this.optionen); s.einrichten(); return s; },
  'Zähler fehlt (altes Blatt)': function () {
    const s = skriptLaden(this.optionen);
    altesBlatt(s, [['probe', 1, 'alt-geraet-1'], ['probe', 2, 'alt-geraet-2']]);
    return s;
  },
  'Zähler zu klein': function () {
    const s = skriptLaden(this.optionen);
    s.einrichten();
    stimme(s, 'vorher-aaaa', 0); stimme(s, 'vorher-bbbb', 1); stimme(s, 'vorher-cccc', 2);
    s.umgebung.eigenschaften.set(this.zaehler, '2');
    return s;
  },
  'Reserve aufgebraucht': function () {
    const s = skriptLaden(Object.assign({}, this.optionen, { maxZeilen: 4 }));
    altesBlatt(s, [['probe', 1, 'alt-geraet-1'], ['probe', 2, 'alt-geraet-2']]);
    s.umgebung.eigenschaften.set(this.zaehler, '4');
    return s;
  }
};

/* Alle Zeilen (auch Kopf und leere) als Liste von Texten – zum Vergleich */
function blattAbbild(s) {
  const b = s.blatt();
  if (!b) return [];
  const aus = [];
  for (let z = 1; z <= b._letzteZeile(); z++) {
    const reihe = [1, 2, 3, 4, 5].map((sp) => b._wert(z, sp));
    if (reihe.some((w) => w !== '' && w !== null)) aus.push(JSON.stringify(reihe.map((w) => (w instanceof Date ? w.getTime() : w))));
  }
  return aus;
}

/* Nach verschachtelten Stimmen: keine Stimme verloren, keine doppelt, keine
   alte Zeile überschrieben, Stand passt, keine Regel verletzt. */
function nebenlaeufigPruefen(s, vorher, knoten, hinweis) {
  assert.deepEqual(s.umgebung.verstoesse, [], hinweis + ': ' + s.umgebung.verstoesse.join('; '));
  const erwartet = new Map();                         /* Gerät → Option der letzten angenommenen Stimme */
  knoten.forEach(function (k, i) {
    const r = k.antwort;
    assert.ok(r && r.daten, hinweis + ': Stimme ' + i + ' ohne Antwort');
    if (r.daten.ok === true) erwartet.set(k.parameter.geraet, Number(k.parameter.option));
    else istAndrang(r, hinweis + ': Stimme ' + i);
  });
  const nachher = blattAbbild(s);
  vorher.forEach((zeile) => assert.ok(nachher.includes(zeile), hinweis + ': alte Zeile überschrieben: ' + zeile));
  const neu = s.zeilen().filter((z) => knoten.some((k) => k.parameter.geraet === z[4]));
  const angenommen = knoten.filter((k) => k.antwort.daten.ok === true);
  assert.equal(neu.length, angenommen.length, hinweis + ': ' + angenommen.length + ' angenommen, aber ' + neu.length + ' Zeilen');
  angenommen.forEach(function (k) {
    assert.ok(neu.some((z) => z[4] === k.parameter.geraet && z[3] === Number(k.parameter.option) && z[1] === 'probe' && z[2] === 'tier'),
      hinweis + ': Stimme von ' + k.parameter.geraet + ' fehlt oder ist vermischt');
  });
  const r = stand(s);
  const werte = new Array(5).fill(0);
  s.zeilen().filter((z) => !knoten.some((k) => k.parameter.geraet === z[4]) && z[1] === 'probe').forEach((z) => { werte[z[3]] += 1; });
  erwartet.forEach((option) => { werte[option] += 1; });
  assert.deepEqual(r.daten.werte, werte, hinweis + ': Stand stimmt nicht');
}

/* Alle Stellen durchgehen: liste[1] startet vor Aufruf 1, 2, 3 … von liste[0]
   (bei drei Stimmen auch liste[2] an jeder Stelle von liste[1]), bis die
   zweite Stimme nicht mehr mitten hinein passt. */
function allePositionen(lage, parameterListe, pruefen) {
  let laeufe = 0;
  for (let k = 1; k < 200; k++) {
    let ende = true;
    for (let j = 1; j < 200; j++) {
      const s = lage();
      const vorher = blattAbbild(s);
      const liste = parameterListe.map((p, i) => ({ parameter: p, bei: i === 1 ? k : j }));
      const knoten = s.verschachtelt(liste);
      laeufe++;
      pruefen(s, vorher, knoten, 'Stelle ' + k + (liste.length > 2 ? '/' + j : ''));
      if (knoten[1].verschachtelt) ende = false;
      if (liste.length < 3 || !knoten[2].verschachtelt) break;
    }
    if (ende) break;
  }
  return laeufe;
}

export function pruefungen(quelltextVorgabe) {
  const liste = [];
  const pruefe = (name, fn) => liste.push({ name, fn });
  const quelltext = quelltextVorgabe !== undefined ? quelltextVorgabe : fs.readFileSync(SKRIPT_PFAD, 'utf8');
  const laden = (optionen = {}) => skriptLaden(Object.assign({}, optionen, { quelltext }));
  const ZAEHLER = zaehlerName(quelltext);
  const regeln = handyRegeln();

  pruefe('Syntax: Skript lässt sich übersetzen und laden', () => {
    new vm.Script(quelltext, { filename: 'apps-script.gs' });
    const s = laden();
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

  pruefe('Keine Bibliotheken, keine fremden Dienste (nur Tabelle, Sperre, Skript-Eigenschaften)', () => {
    assert.doesNotMatch(quelltext, /UrlFetchApp|MailApp|GmailApp|DriveApp|CacheService|Session\.|getUserProperties|getDocumentProperties|require\(|import /);
  });

  pruefe('Stand ohne Blatt: Nullen, legt nichts an, Felder genau ok/werte/n/zeit', () => {
    const s = laden();
    const r = stand(s);
    assert.equal(r.mime, 'JAVASCRIPT');
    assert.deepEqual(r.daten.werte, [0, 0, 0, 0, 0]);
    assert.equal(r.daten.n, 0);
    assert.equal(r.daten.ok, true);
    assert.deepEqual(Object.keys(r.daten), ['ok', 'werte', 'n', 'zeit']);
    assert.ok(!isNaN(Date.parse(r.daten.zeit)) && /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d\.\d{3}Z$/.test(r.daten.zeit), 'zeit ist kein ISO-Datum');
    assert.equal(s.blatt(), null, 'Stand darf kein Blatt anlegen');
    assert.equal(s.umgebung.eigenschaften.size, 0, 'Stand darf nichts speichern');
  });

  pruefe('Erste Stimme ohne einrichten(): Blatt mit Kopfzeile, Formaten und Reserve, Zeile 2, Antwort genau {ok:true}', () => {
    const s = laden();
    const r = stimme(s, 'geraet-0001', 2);
    assert.equal(r.text, 'f({"ok":true});');
    const b = s.blatt();
    assert.ok(b, 'Blatt fehlt');
    assert.deepEqual([1, 2, 3, 4, 5].map((sp) => b._wert(1, sp)), KOPF);
    assert.equal(b.getFrozenRows(), 1);
    assert.deepEqual([1, 2, 3, 4, 5].map((sp) => b._wert(2, sp)).slice(1), ['probe', 'tier', 2, 'geraet-0001']);
    assert.equal(istTyp(b._wert(2, 1)), 'Date');
    assert.ok(b._maxZeilen() >= 5001, 'zu wenig vorgehaltene Zeilen: ' + b._maxZeilen());
    assert.deepEqual([1, 2, 3, 4, 5].map((sp) => b._format(b._maxZeilen(), sp)), FORMATE, 'letzte vorgehaltene Zeile ohne Format');
    assert.deepEqual(s.umgebung.verstoesse, []);
  });

  pruefe('Zählen: drei Geräte', () => {
    const s = laden();
    stimme(s, 'geraet-aaaa', 2); stimme(s, 'geraet-bbbb', 2); stimme(s, 'geraet-cccc', 0);
    const r = stand(s);
    assert.deepEqual(r.daten.werte, [1, 0, 2, 0, 0]);
    assert.equal(r.daten.n, 3);
  });

  pruefe('Umentscheiden und Wiederholen: nur die letzte Stimme je Gerät zählt', () => {
    const s = laden();
    stimme(s, 'geraet-aaaa', 2); stimme(s, 'geraet-bbbb', 1);
    stimme(s, 'geraet-aaaa', 4);                 /* umentschieden */
    stimme(s, 'geraet-bbbb', 1); stimme(s, 'geraet-bbbb', 1);   /* doppelt gesendet */
    const r = stand(s);
    assert.deepEqual(r.daten.werte, [0, 1, 0, 0, 1]);
    assert.equal(r.daten.n, 2);
    assert.equal(s.zeilen().length, 5, 'jede Stimme wird protokolliert, gezählt wird nur die letzte');
  });

  pruefe('Runden und Umfragen getrennt (Probe zählt nicht im Vortrag)', () => {
    const s = laden();
    stimme(s, 'geraet-aaaa', 0); stimme(s, 'geraet-bbbb', 1);
    stimme(s, 'geraet-aaaa', 3, { runde: 'vortrag-2026-10-26' });
    stimme(s, 'geraet-cccc', 4, { umfrage: 'andere' });
    assert.deepEqual(stand(s).daten.werte, [1, 1, 0, 0, 0]);
    assert.deepEqual(stand(s, { runde: 'vortrag-2026-10-26' }).daten.werte, [0, 0, 0, 1, 0]);
    assert.deepEqual(stand(s, { umfrage: 'andere' }).daten.werte, [0, 0, 0, 0, 1]);
    assert.equal(stand(s, { runde: 'leer' }).daten.n, 0);
  });

  pruefe('Stand mit kleinerer Anzahl: Stimmen außerhalb werden nicht gezählt', () => {
    const s = laden();
    stimme(s, 'geraet-aaaa', 4); stimme(s, 'geraet-bbbb', 1);
    const r = stand(s, { anzahl: '3' });
    assert.deepEqual(r.daten.werte, [0, 1, 0]);
    assert.equal(r.daten.n, 1);
  });

  pruefe('Grenzwerte gültig: Option 0 und anzahl−1, anzahl 1 und 9, Namen 40, Geräte-ID 8 und 64 Zeichen', () => {
    const s = laden();
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
    const s = laden();
    const r1 = stimme(s, 'geraet-aaaa', 1, { callback: undefined });
    assert.equal(r1.mime, 'JSON');
    assert.equal(r1.text, '{"ok":true}');
    const r2 = stand(s, { callback: undefined });
    assert.equal(r2.mime, 'JSON');
    assert.deepEqual(JSON.parse(r2.text).werte, [0, 1, 0, 0, 0]);
  });

  pruefe('JSONP ist ausführbar (auch mit Punkt im Namen, $ und _)', () => {
    const s = laden();
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
    const s = laden();
    const boese = ['', 'alert(1)//', '1abc', 'a b', 'a-b', 'f();alert(1)', 'x'.repeat(65), 'f\n', '<script>', 'f(', 'a[0]', 'ä', 'f;g'];
    for (const cb of boese) {
      for (const r of [stimme(s, 'geraet-aaaa', 1, { callback: cb }), stand(s, { callback: cb })]) {
        assert.equal(r.mime, 'JSON', JSON.stringify(cb));
        istFehler(r, 'callback ' + JSON.stringify(cb));
        if (cb) assert.ok(!r.text.includes(cb), 'callback taucht in der Antwort auf: ' + JSON.stringify(cb));
      }
    }
    assert.equal(s.blatt(), null, 'mit ungültigem callback wurde trotzdem geschrieben');
    assert.equal(s.umgebung.eigenschaften.size, 0, 'mit ungültigem callback wurde der Zähler verändert');
  });

  pruefe('Falsche Eingaben bei aktion=stimme: alle abgelehnt, keine Zeile, Zähler unverändert', () => {
    const s = laden();
    s.einrichten();
    const zaehlerVorher = s.umgebung.eigenschaften.get(ZAEHLER);
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
    assert.equal(s.umgebung.eigenschaften.get(ZAEHLER), zaehlerVorher, 'falsche Eingabe hat eine Zeile reserviert');
    assert.equal(s.umgebung.sperreInhaber, null);
  });

  pruefe('Falsche Eingaben bei aktion=stand: abgelehnt', () => {
    const s = laden();
    for (const v of [{ anzahl: undefined }, { anzahl: '0' }, { anzahl: '10' }, { anzahl: 'x' }, { runde: '' }, { runde: 'a b' },
      { umfrage: undefined }, { umfrage: 'x'.repeat(41) }]) {
      istFehler(stand(s, v), 'stand ' + JSON.stringify(v));
    }
  });

  pruefe('Ohne Parameter / ohne Ereignis: Fehler statt Absturz; doGet im Editor gibt einen Hinweis auf einrichten', () => {
    const s = laden();
    istFehler(s.anfrage(undefined), 'doGet()');
    const hinweis = s.protokollText();
    assert.equal(hinweis.length, 1, 'doGet im Editor (ohne Ereignis): genau ein Hinweis im Protokoll erwartet');
    assert.match(hinweis[0], /doGet[\s\S]*„einrichten“/, 'Hinweis nennt doGet und einrichten');
    istFehler(s.anfrage({}), 'doGet({})');
    assert.equal(s.protokollText().length, 1, 'bei echten Anfragen nichts ins Protokoll');
  });

  pruefe('Fassung: …/exec?aktion=fassung nennt FASSUNG aus dem Skript (Prüfung nach „Neue Version“), Antwort genau {ok:false, fehler}', () => {
    const m = /const FASSUNG = '(\d\d\.\d\d\.\d{4})';/.exec(quelltext);
    assert.ok(m, 'const FASSUNG = \'TT.MM.JJJJ\'; fehlt im Skript');
    const s = laden();
    for (const r of [s.anfrage({ aktion: 'fassung' }), s.anfrage({ aktion: 'fassung', callback: 'f' }), s.anfrage({})]) {
      istFehler(r, 'aktion=fassung');
      assert.ok(r.daten.fehler.includes('Skript-Fassung ' + m[1]), 'Fassung fehlt in der Antwort: ' + r.daten.fehler);
      assert.deepEqual(fassungAusText(r.text), m[1], 'Lasttest erkennt die Fassung nicht');
    }
    assert.equal(s.blatt(), null, 'aktion=fassung darf nichts anlegen');
    assert.equal(s.umgebung.eigenschaften.size, 0, 'aktion=fassung darf nichts speichern');
  });

  pruefe('Text-Format: Runde „2026-10-26“, „true“, Geräte-IDs aus Ziffern bleiben Text und zählen richtig', () => {
    for (const mitEinrichten of [false, true]) {
      const s = laden();
      if (mitEinrichten) s.einrichten();
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
    }
  });

  pruefe('Gegenprobe: Die Attrappe wandelt ohne Text-Format wirklich um, auch in angefügten Zeilen', () => {
    assert.equal(istTyp(wieTabelleUmwandeln('2026-10-26', ALLGEMEIN)), 'Date');
    assert.equal(wieTabelleUmwandeln('12345678', ALLGEMEIN), 12345678);
    assert.equal(wieTabelleUmwandeln('true', ALLGEMEIN), true);
    assert.equal(wieTabelleUmwandeln('12345678', '@'), '12345678');
    const s = laden({ maxZeilen: 3 });
    const b = s.umgebung.tabelle.insertSheet('Probe');
    b._setzen(1, ['Kopf']);
    b.getRange(2, 1, 2, 1).setNumberFormat('@');
    b.appendRow(['12345678']);                        /* Zeile 2: vorgehalten, Text */
    assert.equal(b._wert(2, 1), '12345678', 'appendRow in vorgehaltener Zeile mit Textformat');
    b._setzen(3, ['x']);
    b.appendRow(['12345678']);                        /* Zeile 4: hinter dem Blattende, ohne Format */
    assert.equal(b._wert(4, 1), 12345678, 'angefügte Zeile hinter dem Blattende sollte kein Format haben');
    b.insertRowsAfter(4, 2);
    b._setzen(5, ['2026-10-26']);
    assert.equal(istTyp(b._wert(5, 1)), 'Date', 'eingefügte Zeile sollte kein Format haben');
  });

  pruefe('Schneller Weg: unter der Sperre nur der Zähler (kein Tabellen-Zugriff), {"ok":true} erst nach dem Schreiben', () => {
    const s = laden();
    s.einrichten();
    s.umgebung.aufrufe.length = 0;
    s.umgebung.wartezeiten.length = 0;
    for (let i = 0; i < 5; i++) assert.equal(stimme(s, 'geraet-' + 'abcde'[i].repeat(6), i).daten.ok, true);
    assert.deepEqual(s.umgebung.verstoesse, []);
    assert.equal(s.umgebung.sperreInhaber, null);
    const unterSperre = s.umgebung.aufrufe.filter((a) => a.unterSperre && a.art === 'tabelle').map((a) => a.name);
    assert.deepEqual(unterSperre, [], 'Tabellen-Zugriffe unter der Sperre: ' + unterSperre.join(', '));
    const zaehler = s.umgebung.aufrufe.filter((a) => a.name === 'setProperty');
    assert.equal(zaehler.length, 5, 'je Stimme genau ein neuer Zählerstand');
    assert.ok(zaehler.every((a) => a.unterSperre), 'Zähler ohne Sperre geändert');
    const tabelleJeStimme = s.umgebung.aufrufe.filter((a) => a.art === 'tabelle').length / 5;
    assert.ok(tabelleJeStimme <= 8, 'zu viele Tabellen-Zugriffe je Stimme: ' + tabelleJeStimme);
    assert.equal(s.zeilen().length, 5);
    /* Wartezeit der Sperre: genug für eine Schlange, kürzer als das Zeitlimit des Handys minus 5 s */
    assert.ok(s.umgebung.wartezeiten.length > 0 && s.umgebung.wartezeiten.every((ms) => ms >= 2000), 'Wartezeit der Sperre zu kurz');
    assert.ok(s.umgebung.wartezeiten.every((ms) => ms <= regeln.ZEITLIMIT - 5000),
      'Wartezeit der Sperre zu lang für das Zeitlimit je Versuch des Handys (' + regeln.ZEITLIMIT + ' ms, ' + regeln.quelle.ZEITLIMIT + ')');
  });

  pruefe('Sperre besetzt: Andrang-Text (Handy wiederholt), keine Zeile, Zähler unverändert; Stand geht trotzdem', () => {
    const s = laden();
    s.einrichten();
    stimme(s, 'geraet-aaaa', 1);
    const zaehlerVorher = s.umgebung.eigenschaften.get(ZAEHLER);
    s.umgebung.sperreInhaber = 'fremd';
    const r = stimme(s, 'geraet-bbbb', 2);
    istAndrang(r, 'Sperre besetzt');
    assert.ok(r.daten.fehler.startsWith(regeln.AUSGELASTET), 'Handy erkennt den Text nicht (js/abstimmen.js: AUSGELASTET = „' + regeln.AUSGELASTET + '“)');
    assert.equal(s.zeilen().length, 1);
    assert.equal(s.umgebung.eigenschaften.get(ZAEHLER), zaehlerVorher);
    assert.deepEqual(stand(s).daten.werte, [0, 1, 0, 0, 0]);
    /* auch beim ersten Anlegen des Blatts */
    const s2 = laden();
    s2.umgebung.sperreInhaber = 'fremd';
    istAndrang(stimme(s2, 'geraet-cccc', 0), 'Sperre besetzt beim Anlegen');
    assert.equal(s2.blatt(), null);
  });

  pruefe('Dienstfehler (Zähler oder Tabelle): „Serverfehler: …“ (Handy wiederholt), Sperre frei, keine halbe Zeile', () => {
    for (const ausfall of ['getProperty', 'setProperty', 'getValues', 'setValues', 'flush']) {
      const s = laden();
      s.einrichten();
      s.umgebung.dienstFehler = ausfall;
      const r = stimme(s, 'geraet-aaaa', 1);
      istFehler(r, ausfall);
      assert.ok(r.daten.fehler.startsWith(regeln.SERVERFEHLER), ausfall + ': ' + r.daten.fehler);
      assert.equal(s.umgebung.sperreInhaber, null, ausfall + ': Sperre nicht frei');
      assert.ok(s.zeilen().every((z) => z.every((w) => w !== '')), ausfall + ': halbe Zeile');
      /* nächster Versuch klappt und zählt einmal */
      assert.equal(stimme(s, 'geraet-aaaa', 1).daten.ok, true, ausfall + ': zweiter Versuch');
      assert.deepEqual(stand(s).daten.werte, [0, 1, 0, 0, 0], ausfall);
    }
  });

  pruefe('Fehlende Tabelle: Serverfehler als Antwort, kein Absturz, Sperre wieder frei', () => {
    const s = laden({ ohneTabelle: true });
    const r1 = stimme(s, 'geraet-aaaa', 1);
    istFehler(r1, 'ohne Tabelle (stimme)');
    assert.match(r1.daten.fehler, /^Serverfehler: /);
    assert.equal(s.umgebung.sperreInhaber, null);
    istFehler(stand(s), 'ohne Tabelle (stand)');
  });

  pruefe('Blatt „Stimmen“ von Hand leer angelegt: Kopfzeile wird ergänzt, erste Stimme zählt', () => {
    const s = laden();
    s.umgebung.tabelle.insertSheet('Stimmen');
    s.umgebung.aufrufe.length = 0;
    stimme(s, 'geraet-aaaa', 3);
    assert.deepEqual([1, 2, 3, 4, 5].map((sp) => s.blatt()._wert(1, sp)), KOPF);
    assert.deepEqual(stand(s).daten.werte, [0, 0, 0, 1, 0]);
    assert.deepEqual(s.umgebung.verstoesse, []);
  });

  pruefe('Kopfzeile von Hand gelöscht: keine Stimme geht verloren', () => {
    const s = laden();
    stimme(s, 'geraet-aaaa', 1); stimme(s, 'geraet-bbbb', 2);
    s.blatt()._zeileLoeschen(1);
    assert.deepEqual(stand(s).daten.werte, [0, 1, 1, 0, 0]);
    stimme(s, 'geraet-cccc', 3);
    assert.deepEqual(stand(s).daten.werte, [0, 1, 1, 1, 0]);
  });

  pruefe('Reserve aufgebraucht (kleines Blatt): Zeilen werden angefügt und formatiert, Text bleibt Text', () => {
    const s = laden({ maxZeilen: 4 });
    altesBlatt(s, [['probe', 1, 'alt-geraet-1'], ['probe', 2, 'alt-geraet-2']]);
    s.umgebung.eigenschaften.set(ZAEHLER, '4');
    for (let i = 0; i < 7; i++) assert.equal(stimme(s, String(10000000 + i), i % 5).daten.ok, true, 'Stimme ' + i);
    assert.ok(s.zeilen().every((z) => typeof z[4] === 'string'), 'Geräte-ID in angefügter Zeile umgewandelt');
    assert.equal(stand(s).daten.n, 9);
    assert.deepEqual(s.umgebung.verstoesse, []);
    const b = s.blatt();
    assert.equal(b._format(b._maxZeilen(), 5), '@', 'angefügte Zeilen ohne Textformat');
  });

  pruefe('Tabelle sortiert oder Zeilen vertauscht: es zählt die spätere Zeit', () => {
    const s = laden();
    stimme(s, 'geraet-aaaa', 1);
    stimme(s, 'geraet-aaaa', 3);
    const b = s.blatt();
    b._setzen(2, [new Date('2026-10-26T14:00:00Z')]);
    b._setzen(3, [new Date('2026-10-26T14:00:05Z')]);
    b._zeilenTauschen(2, 3);                          /* neuere Stimme steht jetzt oben */
    assert.deepEqual(stand(s).daten.werte, [0, 0, 0, 1, 0]);
  });

  pruefe('Unvollständige und leere Zeilen (von Hand, reserviert) werden übersprungen', () => {
    const s = laden();
    stimme(s, 'geraet-aaaa', 1);
    const b = s.blatt();
    b._setzen(4, ['', 'probe', 'tier', '', 'geraet-bbbb']);
    b._setzen(5, [new Date(), 'probe', 'tier', 2, '']);
    b._setzen(8, [new Date(), 'probe', 'tier', 4, 'geraet-dddd']);   /* Lücke 6–7 */
    assert.deepEqual(stand(s).daten.werte, [0, 1, 0, 0, 1]);
  });

  pruefe('Geräte-IDs wie __proto__ und constructor: normale Schlüssel', () => {
    const s = laden();
    stimme(s, '__proto__', 0); stimme(s, 'constructor', 1); stimme(s, 'hasOwnProperty', 2); stimme(s, '__proto__', 4);
    assert.deepEqual(stand(s).daten.werte, [0, 1, 1, 0, 1]);
  });

  pruefe('Zusätzliche Parameter (z. B. _=Zeitstempel) werden ignoriert', () => {
    const s = laden();
    assert.equal(stimme(s, 'geraet-aaaa', 0, { _: '1729950000000', extra: 'x y' }).daten.ok, true);
    assert.deepEqual(stand(s, { _: '1729950000001' }).daten.werte, [1, 0, 0, 0, 0]);
  });

  pruefe('Datenschutz: Stand ohne Geräte-IDs; Skript-Eigenschaften enthalten nur die Zeilennummer', () => {
    const s = laden();
    stimme(s, 'geheime-id-123', 2);
    const r = stand(s);
    assert.ok(!r.text.includes('geheime-id-123'));
    assert.deepEqual(Object.keys(r.daten), ['ok', 'werte', 'n', 'zeit']);
    assert.deepEqual([...s.umgebung.eigenschaften.keys()], [ZAEHLER]);
    assert.match(s.umgebung.eigenschaften.get(ZAEHLER), /^\d+$/);
  });

  pruefe('Hörsaal: 40 Handys, 10 entscheiden sich um, 5 senden doppelt → n = 40', () => {
    const s = laden();
    s.einrichten();
    const ids = Array.from({ length: 40 }, (_, i) => 'handy-' + String(i).padStart(4, '0'));
    ids.forEach((id, i) => stimme(s, id, i % 5));
    ids.slice(0, 10).forEach((id) => stimme(s, id, 2));
    ids.slice(30, 35).forEach((id, i) => stimme(s, id, (30 + i) % 5));
    const r = stand(s);
    assert.equal(r.daten.n, 40);
    /* erwartet: i%5 für i=10..39 (je 6) + 10 × Option 2 */
    assert.deepEqual(r.daten.werte, [6, 6, 16, 6, 6]);
  });

  pruefe('einrichten(): legt Blatt an, mehrfach ausführbar, Protokoll mit Formaten und Textschutz-Probe, löscht nichts', () => {
    const s = laden();
    s.einrichten(); s.einrichten();
    const b = s.blatt();
    assert.equal(b._letzteZeile(), 1, 'Probe-Zeile gilt noch als Inhalt (mit clearContent leeren, nicht mit setValues(\'\'))');
    assert.ok(b._maxZeilen() - 1 >= 5000, 'Reserve fehlt');
    const text = s.protokollText();
    assert.equal(text.length, 6, 'je Lauf drei Zeilen im Protokoll');
    assert.match(text[0], /^Blatt „Stimmen“ ist bereit\. Gespeicherte Stimmen: 0\. Nächste Stimme in Zeile 2, \d+ leere Zeilen/);
    assert.equal(text[1], 'Formate (Zeit | Runde | Umfrage | Option | Geraet): ' + FORMATE.join(' | '));
    assert.match(text[2], /^Textschutz-Probe bestanden/);
    assert.equal(s.umgebung.eigenschaften.get(ZAEHLER), '2');
    stimme(s, 'geraet-aaaa', 0);
    s.einrichten();
    assert.equal(b._letzteZeile(), 2, 'einrichten darf keine Stimmen löschen');
    assert.equal(s.umgebung.eigenschaften.get(ZAEHLER), '3');
    assert.equal([1, 2, 3, 4, 5].map((sp) => b._wert(b._maxZeilen(), sp)).join(''), '', 'Probe nicht weggeräumt');
    assert.deepEqual(s.umgebung.verstoesse, []);
    assert.equal(s.umgebung.sperreInhaber, null);
  });

  pruefe('einrichten() richtet ein altes Blatt nach: ganze Spalten formatiert, Reserve, Zähler; Textschutz in vorgehaltenen Zeilen', () => {
    const s = laden();
    const b = altesBlatt(s, [['probe', 1, 'alt-geraet-1'], ['probe', 3, 'alt-geraet-2'], ['vortrag-x', 0, 'alt-geraet-3']]);
    assert.equal(b._format(500, 2), ALLGEMEIN, 'Ausgangslage: altes Blatt ohne Spaltenformat');
    s.einrichten();
    for (const z of [2, 5, 500, 1000, b._maxZeilen()]) {
      assert.deepEqual([1, 2, 3, 4, 5].map((sp) => b._format(z, sp)), FORMATE, 'Zeile ' + z + ' nicht formatiert');
    }
    assert.ok(b._maxZeilen() - 4 >= 5000, 'zu wenig vorgehaltene Zeilen: ' + b._maxZeilen());
    assert.equal(s.umgebung.eigenschaften.get(ZAEHLER), '5');
    assert.match(s.protokollText()[0], /Gespeicherte Stimmen: 3\. Nächste Stimme in Zeile 5/);
    assert.match(s.protokollText()[2], /^Textschutz-Probe bestanden/);
    /* vorgehaltene Zeile: auch ohne eigenes Format bleibt Text Text */
    b._setzen(800, ['', '2026-10-26', 'true', 1, '12345678']);
    assert.deepEqual([2, 3, 5].map((sp) => b._wert(800, sp)), ['2026-10-26', 'true', '12345678']);
    assert.deepEqual(stand(s).daten.werte, [0, 1, 0, 1, 0]);
    assert.equal(stimme(s, 'geraet-neu1', 4).daten.ok, true);
    assert.deepEqual([1, 2, 3, 4, 5].map((sp) => b._wert(5, sp)).slice(1), ['probe', 'tier', 4, 'geraet-neu1']);
  });

  pruefe('Neue Fassung ohne einrichten() (Zähler fehlt): erste Stimme hinter der letzten Zeile, nichts überschrieben', () => {
    const s = laden();
    altesBlatt(s, [['probe', 1, 'alt-geraet-1'], ['probe', 3, 'alt-geraet-2']]);
    const vorher = blattAbbild(s);
    assert.equal(stimme(s, 'geraet-neu1', 4).daten.ok, true);
    assert.equal(s.blatt()._wert(4, 5), 'geraet-neu1');
    vorher.forEach((z) => assert.ok(blattAbbild(s).includes(z), 'überschrieben: ' + z));
    assert.deepEqual(stand(s).daten.werte, [0, 1, 0, 1, 1]);
    assert.deepEqual(s.umgebung.verstoesse, []);
  });

  pruefe('Zähler hinter dem Tabellenende (Zeilen von Hand eingefügt, Löschen rückgängig): nichts überschrieben', () => {
    const s = laden();
    s.einrichten();
    stimme(s, 'geraet-aaaa', 0); stimme(s, 'geraet-bbbb', 1); stimme(s, 'geraet-cccc', 2);
    s.blatt()._zeilenEinfuegen(1, 3);                /* drei Zeilen oben eingefügt: alles rutscht nach unten */
    s.blatt()._setzen(2, [new Date(), 'probe', 'tier', 3, 'geraet-hand']);
    const vorher = blattAbbild(s);
    for (let i = 0; i < 4; i++) assert.equal(stimme(s, 'geraet-neu' + i, 4).daten.ok, true, 'Stimme ' + i);
    vorher.forEach((z) => assert.ok(blattAbbild(s).includes(z), 'überschrieben: ' + z));
    assert.deepEqual(stand(s).daten.werte, [1, 1, 1, 1, 4]);
    assert.deepEqual(s.umgebung.verstoesse, []);
  });

  pruefe('Zeilen gelöscht: Lücke stört nicht; einrichten() setzt den Zähler nie zurück (Lücke harmlos, doppelte Zeile nicht)', () => {
    const s = laden();
    s.einrichten();
    for (let i = 0; i < 6; i++) stimme(s, 'lasttest-' + i + '-xyz', i % 5, { runde: 'lasttest-1' });
    for (let i = 0; i < 6; i++) s.blatt()._zeileLoeschen(2);
    stimme(s, 'geraet-aaaa', 1);                      /* landet hinter der Lücke (Zeile 8) */
    assert.equal(s.blatt()._wert(8, 5), 'geraet-aaaa');
    assert.deepEqual(stand(s).daten.werte, [0, 1, 0, 0, 0]);
    s.blatt()._zeileLoeschen(8);
    s.einrichten();
    assert.equal(s.umgebung.eigenschaften.get(ZAEHLER), '9', 'einrichten() hat den Zähler zurückgesetzt');
    assert.match(s.protokollText().slice(-3)[0], /Nächste Stimme in Zeile 9, \d+ leere Zeilen/);
    assert.ok(s.blatt()._maxZeilen() - 9 + 1 >= 5000, 'Reserve ab dem Zähler zu klein');
    stimme(s, 'geraet-bbbb', 2);
    assert.equal(s.blatt()._wert(9, 5), 'geraet-bbbb', 'Stimme nicht in der Zeile des Zählers');
    assert.deepEqual(stand(s).daten.werte, [0, 0, 1, 0, 0]);
    /* Ein neu angelegtes Blatt beginnt trotzdem in Zeile 2 (alter Zähler gilt nicht) */
    const s2 = laden();
    s2.umgebung.eigenschaften.set(ZAEHLER, '500');
    s2.einrichten();
    assert.equal(s2.umgebung.eigenschaften.get(ZAEHLER), '2', 'neues Blatt: Zähler 2');
    assert.deepEqual(s2.umgebung.verstoesse, []);
  });

  pruefe('Gegenprobe: Die Regeln der Attrappe melden Zähler-Lesen vor der Sperre, Freigabe zwischen Lesen und Schreiben, Anfügen ohne Sperre', () => {
    const kopf = 'function einrichten() {}\nfunction doGet(e) {\n  const sp = LockService.getScriptLock();\n  const ei = PropertiesService.getScriptProperties();\n';
    const fuss = '  return ContentService.createTextOutput("{}").setMimeType(ContentService.MimeType.JSON);\n}\n';
    const faelle = {
      'gelesen vor der Sperre': '  const z = Number(ei.getProperty("n"));\n  sp.tryLock(1000);\n  ei.setProperty("n", String(z + 1));\n  sp.releaseLock();\n',
      'Sperre zwischendurch frei': '  sp.tryLock(1000);\n  const z = Number(ei.getProperty("n"));\n  sp.releaseLock();\n  sp.tryLock(1000);\n  ei.setProperty("n", String(z + 1));\n  sp.releaseLock();\n',
      'Zeilen ohne Sperre': '  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Stimmen").insertRowsAfter(1, 5);\n'
    };
    for (const [name, mitte] of Object.entries(faelle)) {
      const s = skriptLaden({ quelltext: kopf + mitte + fuss });
      s.umgebung.tabelle.insertSheet('Stimmen')._setzen(1, KOPF);
      s.anfrage({ aktion: 'x' });
      assert.ok(s.umgebung.verstoesse.length > 0, 'Regel greift nicht: ' + name);
    }
    /* richtig: Lesen und Schreiben in derselben Sperr-Phase */
    const s = skriptLaden({ quelltext: kopf + '  sp.tryLock(1000);\n  const z = Number(ei.getProperty("n"));\n  ei.setProperty("n", String(z + 1));\n  sp.releaseLock();\n' + fuss });
    s.anfrage({ aktion: 'x' });
    assert.deepEqual(s.umgebung.verstoesse, []);
  });

  pruefe('Nebenläufigkeit: zweite Stimme an jeder Stelle der ersten (5 Ausgangslagen, appendRow atomar und nicht) – nichts verloren', () => {
    let laeufe = 0;
    for (const atomar of [true, false]) {
      for (const [name, lage] of Object.entries(LAGEN)) {
        const kontext = { optionen: { quelltext, appendRowAtomar: atomar }, zaehler: ZAEHLER };
        laeufe += allePositionen(() => lage.call(kontext), [stimmeParameter('handy-aaaa', 1), stimmeParameter('handy-bbbb', 3)],
          (s, vorher, knoten, hinweis) => nebenlaeufigPruefen(s, vorher, knoten, name + (atomar ? '' : ' (appendRow nicht atomar)') + ', ' + hinweis));
      }
    }
    assert.ok(laeufe > 40, 'zu wenige Stellen geprüft: ' + laeufe);
  });

  pruefe('Nebenläufigkeit: drei verschachtelte Stimmen an allen Stellen – nichts verloren, nichts doppelt', () => {
    let laeufe = 0;
    for (const name of ['ohne Blatt', 'eingerichtet', 'Zähler zu klein']) {
      const kontext = { optionen: { quelltext, appendRowAtomar: false }, zaehler: ZAEHLER };
      laeufe += allePositionen(() => LAGEN[name].call(kontext),
        [stimmeParameter('handy-aaaa', 0), stimmeParameter('handy-bbbb', 2), stimmeParameter('handy-cccc', 4)],
        (s, vorher, knoten, hinweis) => nebenlaeufigPruefen(s, vorher, knoten, name + ', ' + hinweis));
    }
    assert.ok(laeufe > 100, 'zu wenige Stellen geprüft: ' + laeufe);
  });

  pruefe('Nebenläufigkeit: dasselbe Handy entscheidet sich während der laufenden Stimme um – die neuere Wahl gewinnt', () => {
    const kontext = { optionen: { quelltext }, zaehler: ZAEHLER };
    allePositionen(() => LAGEN.eingerichtet.call(kontext), [stimmeParameter('handy-aaaa', 1), stimmeParameter('handy-aaaa', 3)],
      function (s, vorher, knoten, hinweis) {
        assert.deepEqual(s.umgebung.verstoesse, [], hinweis);
        const [a, b] = knoten.map((k) => k.antwort.daten);
        assert.equal(a.ok, true, hinweis + ': erste Stimme');
        const r = stand(s);
        assert.equal(r.daten.n, 1, hinweis + ': doppelt gezählt');
        assert.deepEqual(r.daten.werte, b.ok ? [0, 0, 0, 1, 0] : [0, 1, 0, 0, 0], hinweis + ': ältere Wahl gewinnt');
      });
  });

  pruefe('Stand während einer Stimme: nie eine halbe Zeile, n = vorher oder vorher + 1', () => {
    const kontext = { optionen: { quelltext }, zaehler: ZAEHLER };
    for (const name of ['ohne Blatt', 'eingerichtet', 'Zähler fehlt (altes Blatt)']) {
      allePositionen(() => LAGEN[name].call(kontext),
        [stimmeParameter('handy-aaaa', 4), { aktion: 'stand', umfrage: 'tier', runde: 'probe', anzahl: N, callback: 'f' }],
        function (s, vorher, knoten, hinweis) {
          const r = knoten[1].antwort.daten;
          assert.equal(r.ok, true, name + ', ' + hinweis + ': ' + JSON.stringify(r));
          const basis = vorher.length ? vorher.length - 1 : 0;
          assert.ok(r.n === basis || r.n === basis + 1, name + ', ' + hinweis + ': n = ' + r.n);
          assert.ok(r.werte[4] <= 1, name + ', ' + hinweis);
        });
    }
  });

  pruefe('Gegenprobe: Verschachtelte Ausführungen finden den Wettlauf von getLastRow + setValues ohne Sperre', () => {
    const kaputt = 'function doGet(e) {\n' +
      '  const blatt = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Stimmen");\n' +
      '  const zeile = blatt.getLastRow() + 1;\n' +
      '  blatt.getRange(zeile, 1, 1, 5).setValues([[new Date(), e.parameter.runde, e.parameter.umfrage, Number(e.parameter.option), e.parameter.geraet]]);\n' +
      '  return ContentService.createTextOutput(e.parameter.callback + \'({"ok":true});\').setMimeType(ContentService.MimeType.JAVASCRIPT);\n' +
      '}\nfunction einrichten() {}\n';
    let verloren = 0;
    for (let k = 1; k <= 4; k++) {
      const s = skriptLaden({ quelltext: kaputt });
      s.umgebung.tabelle.insertSheet('Stimmen')._setzen(1, KOPF);
      s.verschachtelt([{ parameter: stimmeParameter('handy-aaaa', 1) }, { parameter: stimmeParameter('handy-bbbb', 3), bei: k }]);
      if (s.zeilen().length < 2) verloren++;
    }
    assert.ok(verloren > 0, 'Die Attrappe findet den Wettlauf nicht');
  });

  return liste;
}

/* ersterFehler: beim ersten Fehlschlag aufhören (Mutationstest – erkannt ist
   erkannt; manche kaputte Kopie macht die übrigen Prüfungen sehr langsam) */
function pruefungenAusfuehren(quelltext, still, ersterFehler) {
  const liste = pruefungen(quelltext);
  const fehlgeschlagen = [];
  for (const { name, fn } of liste) {
    try {
      fn();
      if (!still) console.log('  ok      ' + name);
    } catch (f) {
      fehlgeschlagen.push({ name, meldung: String(f && f.message || f) });
      if (!still) console.log('  FEHLER  ' + name + '\n          ' + String(f && f.message || f).split('\n').join('\n          '));
      if (ersterFehler) break;
    }
  }
  return { anzahl: liste.length, fehlgeschlagen };
}


/* =============================================================================
   3. MUTATIONSTEST (--mutationen)
   Absichtlich kaputte Kopien des Skripts. Jede muss mindestens eine Prüfung
   scheitern lassen – sonst sind die Prüfungen nicht scharf genug.
   alt: Text (muss genau einmal vorkommen) oder regulärer Ausdruck.
   ============================================================================= */
export const MUTATIONEN = [
  { name: 'Zeile per getLastRow ohne Sperre (alte Schreibstelle ohne LockService)',
    alt: 'const zeile = zeileReservieren_(blatt, versuch > 1);', neu: 'const zeile = blatt.getLastRow() + 1;' },
  { name: 'appendRow ohne Sperre statt Zeile reservieren',
    alt: /for \(let versuch = 1;[\s\S]*?throw new Error\('Keine freie Zeile[^\n]*\n/, neu: 'blatt.appendRow(werte[0]);\n  return { ok: true };\n' },
  { name: 'ohne Textformat',
    alt: "const FORMATE = ['dd.mm.yyyy hh:mm:ss', '@', '@', '0', '@'];", neu: "const FORMATE = ['dd.mm.yyyy hh:mm:ss', 'General', 'General', '0', 'General'];" },
  { name: 'erste statt letzte Stimme',
    alt: 'if (!bisher || zeit >= bisher.zeit)', neu: 'if (!bisher)' },
  { name: 'Zähler ohne Sperre',
    alt: 'if (!sperre.tryLock(SPERRE_WARTEN_MS)) return 0;', neu: '' },
  { name: 'Sperre nach dem Reservieren nicht freigegeben',
    alt: /(speicher\.setProperty\(ZAEHLER, String\(zeile \+ 1\)\);\n\s*return zeile;\n\s*\} finally \{\n)\s*sperre\.releaseLock\(\);\n/, neu: '$1' },
  { name: 'reservierte Zeile nicht auf „leer“ geprüft',
    alt: 'if (!istLeer_(ziel.werte)) continue;', neu: '' },
  { name: 'Zeit beim Schreiben statt beim Eingang',
    alt: /const werte = \[\[new Date\(\), ([^\n]*)\n([\s\S]*?)ziel\.bereich\.setNumberFormats\(\[FORMATE\]\)\.setValues\(werte\);/,
    neu: 'const werte = [[null, $1\n$2werte[0][0] = new Date();\n    ziel.bereich.setNumberFormats([FORMATE]).setValues(werte);' },
  { name: 'kein flush vor {"ok":true}',
    alt: /SpreadsheetApp\.flush\(\);\n(\s*)return \{ ok: true \};/, neu: 'return { ok: true };' },
  { name: 'kein flush vor der Freigabe beim Anlegen des Blatts',
    alt: /(PropertiesService\.getScriptProperties\(\)\.setProperty\(ZAEHLER, String\(naechste\)\);\n)\s*SpreadsheetApp\.flush\(\);[^\n]*\n/, neu: '$1' },
  { name: 'einrichten() formatiert die Spalten nicht',
    alt: /(const zeilen = blatt\.getMaxRows\(\) - 1;\n)\s*FORMATE\.forEach[\s\S]*?\}\);\n/, neu: '$1' },
  /* seit der Nacharbeit (19.10.2026, zweite Prüfung) */
  { name: 'Zähler vor der Sperre gelesen, unter der Sperre nur geschrieben (Wettlauf wie im Lock-Beispiel)',
    alt: /(if \(!sperre\.tryLock\(SPERRE_WARTEN_MS\)\) return 0;\n  try \{\n[\s\S]*?)    const speicher = PropertiesService\.getScriptProperties\(\);\n    let zeile = zaehlerWert_\(speicher\.getProperty\(ZAEHLER\)\);\n/,
    neu: 'const speicher = PropertiesService.getScriptProperties();\n  let zeile = zaehlerWert_(speicher.getProperty(ZAEHLER));\n  $1' },
  { name: 'Sperre zwischen Lesen und Schreiben des Zählers kurz frei',
    alt: '    speicher.setProperty(ZAEHLER, String(zeile + 1));',
    neu: '    sperre.releaseLock();\n    if (!sperre.tryLock(SPERRE_WARTEN_MS)) return 0;\n    speicher.setProperty(ZAEHLER, String(zeile + 1));' },
  { name: 'Zeilen ohne Sperre angefügt (reserveAuffuellen_ ohne waitLock)',
    alt: '  sperre.waitLock(SPERRE_WARTEN_MS);\n', neu: '' },
  { name: 'einrichten() setzt den Zähler zurück (hinter die letzte Zeile statt nie zurück)',
    alt: 'const naechste = blattVorbereiten_(blatt, bisher);', neu: 'const naechste = blattVorbereiten_(blatt, 0);' },
  { name: 'Probe-Zeile mit setValues(\'\') statt clearContent geleert',
    alt: '  bereich.clearContent();', neu: "  bereich.setValues([['', '', '', '', '']]);" }
];

export function mutationstest(quelltext = fs.readFileSync(SKRIPT_PFAD, 'utf8')) {
  const original = pruefungenAusfuehren(quelltext, true);
  console.log('Original: ' + (original.anzahl - original.fehlgeschlagen.length) + ' von ' + original.anzahl + ' Prüfungen bestanden.');
  let gut = original.fehlgeschlagen.length === 0;
  if (!gut) original.fehlgeschlagen.forEach((f) => console.log('  FEHLER  ' + f.name));
  for (const m of MUTATIONEN) {
    let kopie;
    if (typeof m.alt === 'string') {
      const vorkommen = quelltext.split(m.alt).length - 1;
      if (vorkommen !== 1) {
        console.log('  PASST NICHT  ' + m.name + ' (Text ' + vorkommen + '× gefunden)');
        gut = false;
        continue;
      }
      kopie = quelltext.replace(m.alt, () => m.neu);
    } else {
      if (!m.alt.test(quelltext)) {
        console.log('  PASST NICHT  ' + m.name + ' (Muster nicht gefunden)');
        gut = false;
        continue;
      }
      kopie = quelltext.replace(m.alt, m.neu);
    }
    const r = pruefungenAusfuehren(kopie, true, true);
    if (r.fehlgeschlagen.length) {
      console.log('  erkannt      ' + m.name + ' – zuerst von „' + r.fehlgeschlagen[0].name + '“');
    } else {
      console.log('  NICHT ERKANNT  ' + m.name);
      gut = false;
    }
  }
  console.log('\n' + (gut ? 'Mutationstest bestanden: alle ' + MUTATIONEN.length + ' kaputten Kopien erkannt.' : 'Mutationstest NICHT bestanden.'));
  return gut;
}


/* =============================================================================
   4. LOKALER SERVER (--server PORT)
   ============================================================================= */

const FEHLERSEITE = '<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><title>Fehler</title></head>' +
  '<body><div>There are too many scripts running simultaneously for this Google user account.</div>' +
  '<div>(Attrappe: so ungefähr sieht eine Fehlerseite von Google aus)</div></body></html>';

export function serverStarten(port = 8787, einstellungen = {}) {
  if (typeof einstellungen === 'number') einstellungen = { verzoegerung: einstellungen };
  const verzoegerung = Math.max(0, Number(einstellungen.verzoegerung) || 0);
  const stoerung = Math.min(1, Math.max(0, Number(einstellungen.stoerung) || 0));
  const abbruch = Math.min(1, Math.max(0, Number(einstellungen.abbruch) || 0));
  const gleichzeitig = Math.max(0, Math.floor(Number(einstellungen.gleichzeitig) || 0));
  const sperre = Math.max(0, Number(einstellungen.sperre) || 0);
  const s = skriptLaden();
  const quelltext = fs.readFileSync(SKRIPT_PFAD, 'utf8');
  const andrang = (/const ANDRANG = '([^']+)';/.exec(quelltext) || [])[1] ||
    'Gerade kommen sehr viele Stimmen auf einmal – bitte gleich noch einmal tippen.';
  const sperreWarten = Number((/const SPERRE_WARTEN_MS = (\d+);/.exec(quelltext) || [])[1]) || 8000;
  let inArbeit = 0;

  /* --sperre: Schlange vor einer Sperre, die jede Stimme „sperre“ ms hält.
     Rückgabe: Warte- plus Haltezeit in ms, oder null (müsste länger als
     SPERRE_WARTEN_MS warten – wie tryLock, das aufgibt). */
  let sperreFrei = 0;
  function sperreAnfordern() {
    const jetzt = Date.now();
    const beginn = Math.max(jetzt, sperreFrei);
    if (beginn - jetzt > sperreWarten) return null;
    sperreFrei = beginn + sperre;
    return beginn - jetzt + sperre;
  }

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
    const zeit = () => new Date().toLocaleTimeString('de-DE');
    const kurz = () => (parameter.aktion || '–') + '  runde=' + (parameter.runde || '–') +
      (parameter.option !== undefined ? '  option=' + parameter.option : '');
    function fehlerseite(status, grund) {
      res.writeHead(status, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
      res.end(FEHLERSEITE);
      console.log(zeit() + '  ' + kurz() + '  → Fehlerseite HTTP ' + status + ' (' + grund + ', nicht gespeichert)');
    }

    if (gleichzeitig && inArbeit >= gleichzeitig) { fehlerseite(200, 'mehr als ' + gleichzeitig + ' gleichzeitig'); return; }

    /* Störungen nur für Stimmen (zum Testen der Wiederholung auf dem Handy) */
    let art = 'normal';
    if (parameter.aktion === 'stimme') {
      if (Math.random() < stoerung) art = 'stoerung';
      else if (Math.random() < abbruch) art = ['html', 'html500', 'zu'][Math.floor(Math.random() * 3)];
    }
    /* --sperre: Stimmen, die das Skript erreichen, stellen sich an */
    let dauer = verzoegerung;
    if (sperre && parameter.aktion === 'stimme' && (art === 'normal' || art === 'zu')) {
      const d = sperreAnfordern();
      if (d === null) { art = 'besetzt'; dauer += sperreWarten; } else dauer += d;
    }

    inArbeit++;
    setTimeout(function () {
      inArbeit--;
      if (art === 'html') { fehlerseite(200, '--abbruch'); return; }
      if (art === 'html500') { fehlerseite(500, '--abbruch'); return; }
      let r;
      if (art === 'stoerung' || art === 'besetzt') {
        const json = JSON.stringify({ ok: false, fehler: andrang });
        const cb = parameter.callback;
        r = /^[A-Za-z_$][\w$.]{0,63}$/.test(cb || '')
          ? { mime: 'JAVASCRIPT', text: cb + '(' + json + ');' }
          : { mime: 'JSON', text: json };
      } else {
        r = s.anfrage(parameter);
      }
      if (art === 'zu') {
        req.socket.destroy();
        console.log(zeit() + '  ' + kurz() + '  → Verbindung ohne Antwort geschlossen (--abbruch, Stimme gespeichert: ' + r.text + ')');
        return;
      }
      res.writeHead(200, {
        'Content-Type': (r.mime === 'JAVASCRIPT' ? 'application/javascript' : 'application/json') + '; charset=utf-8',
        'Cache-Control': 'no-store'
      });
      res.end(r.text);
      if (parameter.aktion === 'stimme' || !(r.daten && r.daten.ok)) {
        console.log(zeit() + '  ' + kurz() + '  → ' + r.text + (art === 'stoerung' ? '  (--stoerung, nicht gespeichert)'
          : art === 'besetzt' ? '  (--sperre: länger als ' + sperreWarten + ' ms gewartet, nicht gespeichert)' : ''));
      }
    }, dauer);
  });
  server.listen(port, '127.0.0.1', function () {
    console.log('Live-Abstimmung (Attrappe mit dem echten apps-script.gs) läuft:');
    console.log('  http://localhost:' + port + '/exec   ← mit ?quelle= übergeben (marke.js nicht ändern):');
    console.log('    Folie:        index.html?quelle=http://localhost:' + port + '/exec#f08');
    console.log('    Abstimmseite: abstimmen.html?u=tier&quelle=http://localhost:' + port + '/exec');
    console.log('  Test: http://localhost:' + port + '/exec?aktion=stand&umfrage=tier&runde=probe&anzahl=5');
    if (verzoegerung) console.log('  Antwortzeit: ' + verzoegerung + ' ms');
    if (sperre) console.log('  Sperre: je Stimme ' + sperre + ' ms, Wartezeit höchstens ' + sperreWarten + ' ms (SPERRE_WARTEN_MS), sonst „' + andrang + '“');
    else console.log('  Ohne --sperre ist die Sperre nie besetzt: Ein Lasttest prüft dann die Wiederholung, nicht die Belastbarkeit.');
    if (stoerung) console.log('  Störung: ' + Math.round(stoerung * 100) + ' % der Stimmen „' + andrang + '“ (nicht gespeichert)');
    if (abbruch) console.log('  Abbruch: ' + Math.round(abbruch * 100) + ' % der übrigen Stimmen ohne Antwort des Skripts (Fehlerseite 200/500 oder Verbindung zu)');
    if (gleichzeitig) console.log('  Höchstens ' + gleichzeitig + ' Anfragen gleichzeitig, sonst Fehlerseite');
    console.log('  Strg+C beendet den Server (Stimmen sind dann weg).');
  });
  return server;
}


/* =============================================================================
   5. LASTTEST (--lasttest URL)
   Ob Google 20–60 fast gleichzeitige Stimmen annimmt (Sperre, Kontingente),
   zeigt nur ein Test mit der echten Web-App. fetch folgt der Weiterleitung
   von Google (script.google.com → script.googleusercontent.com) von selbst.
   Jedes Handy verhält sich wie js/abstimmen.js (handyRegeln oben), die
   „Folie“ wie js/komponenten.js, Abschnitt 3a (FOLIE unten).
   ============================================================================= */

const warten = (ms) => new Promise((fertig) => setTimeout(fertig, ms));
const sek = (ms) => (ms / 1000).toFixed(1).replace('.', ',') + ' s';
/* Regel der Folie (js/komponenten.js: LIVE_TAKT, LIVE_ZEITLIMIT, LIVE_ZEITLIMIT_HART) */
const FOLIE = { TAKT: 2000, ZEITLIMIT: 4000, ZEITLIMIT_HART: 15000 };

export async function lasttest(url, einstellungen = {}) {
  if (typeof einstellungen === 'number') einstellungen = { anzahl: einstellungen };
  const echt = /^https:\/\/script\.google\.com\/\S+\/exec$/.test(url);
  if (!echt && !/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/exec$/.test(url)) {
    throw new Error('Adresse muss die Web-App-URL sein (https://script.google.com/macros/s/…/exec) oder die Attrappe (http://localhost:8787/exec).');
  }
  const anzahl = einstellungen.anzahl || 40;
  const verteiltMs = Math.max(0, Number(einstellungen.verteilt) || 0) * 1000;
  const mitFolie = einstellungen.folie !== false;
  const regeln = handyRegeln();
  const jetzt = new Date();
  const zwei = (x) => String(x).padStart(2, '0');
  const runde = 'lasttest-' + jetzt.getFullYear() + zwei(jetzt.getMonth() + 1) + zwei(jetzt.getDate()) + '-' + zwei(jetzt.getHours()) + zwei(jetzt.getMinutes()) + zwei(jetzt.getSeconds());
  const zufall = Math.random().toString(36).slice(2, 8);
  let anfragen = 0;

  /* ein Versuch; art: ok | antwort (Fehler des Skripts) | seite (keine
     Antwort des Skripts, z. B. Fehlerseite) | netz | zeit.
     zaehlen: nur die Anfragen der Handys zählen in „Anfragen insgesamt“ */
  async function holen(parameter, zeitlimit, zaehlen = true) {
    const start = Date.now();
    if (zaehlen) anfragen++;
    const adresse = url + '?' + new URLSearchParams(parameter).toString();
    try {
      const antwort = await fetch(adresse, { redirect: 'follow', signal: AbortSignal.timeout(zeitlimit) });
      const text = await antwort.text();
      let daten = null;
      try { daten = JSON.parse(text); } catch (f) { /* z. B. Fehler- oder Anmeldeseite (HTML) */ }
      const art = daten && daten.ok === true ? 'ok' : daten && daten.ok === false ? 'antwort' : 'seite';
      /* Fehler- oder Anmeldeseite: nur den lesbaren Text zeigen */
      const lesbar = text.replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      return { ms: Date.now() - start, status: antwort.status, daten, art, text: lesbar.slice(0, 90) };
    } catch (f) {
      const zeit = f && (f.name === 'TimeoutError' || f.name === 'AbortError');
      return { ms: Date.now() - start, status: 0, daten: null, art: zeit ? 'zeit' : 'netz', text: String(f && f.message || f) };
    }
  }
  /* wie js/abstimmen.js (nochmalSinnvoll): wiederholen bei Netz, Zeitlimit,
     unlesbarer Antwort, nochmal:true, „Gerade kommen sehr viele Stimmen …“
     und „Serverfehler: …“ – nie bei Eingabefehlern */
  function nochmal(r) {
    if (r.art === 'netz' || r.art === 'zeit' || r.art === 'seite') return true;
    if (r.daten.nochmal === true) return true;
    const text = String(r.daten.fehler || '');
    return text.indexOf(regeln.AUSGELASTET) === 0 || text.indexOf(regeln.SERVERFEHLER) === 0;
  }
  function grund(r, zeitlimit = regeln.ZEITLIMIT) {
    if (r.art === 'zeit') return 'keine Antwort nach ' + sek(zeitlimit);
    if (r.art === 'netz') return 'Netzfehler: ' + r.text;
    if (r.art === 'seite') return 'keine Antwort des Skripts (HTTP ' + r.status + '): ' + r.text;
    return 'Server: ' + r.daten.fehler;
  }
  async function handy(i) {
    if (verteiltMs) await warten(Math.round(i * verteiltMs / anzahl));
    const parameter = {
      aktion: 'stimme', umfrage: 'tier', runde, option: String(i % 5), anzahl: '5',
      geraet: 'lasttest-' + zufall + '-' + String(i).padStart(3, '0')
    };
    const start = Date.now();
    const versuche = [];
    for (let v = 1; v <= regeln.VERSUCHE; v++) {
      const r = await holen(parameter, regeln.ZEITLIMIT);
      versuche.push(r);
      if (r.art === 'ok') return { ok: true, versuch: v, ms: Date.now() - start, versuche };
      if (v === regeln.VERSUCHE || !nochmal(r)) break;
      await warten(regeln.PAUSE_MIN + Math.random() * (regeln.PAUSE_MAX - regeln.PAUSE_MIN));
    }
    return { ok: false, versuch: versuche.length, ms: Date.now() - start, versuche };
  }

  /* FOLIE: fragt den Stand der Lasttest-Runde ab wie Folie 08 – eine Anfrage
     zugleich; nach 4 s und 8 s ohne Antwort je ein Fehlversuch, aufgeben nach
     15 s; „offline“ ab dem zweiten Fehlversuch in Folge (vor der ersten
     Antwort schon beim ersten); dauert eine Antwort 2 s oder länger, folgt die
     nächste sofort, sonst nach 2 s. Nur lesende Anfragen. */
  const folie = { abfragen: 0, zeiten: [], fehlversuche: 0, offline: 0, offlineMs: 0, offlineSeit: null,
    zustand: 'verbinde', inFolge: 0, gruende: new Map() };
  let handysFertig = false;
  function folieFehlversuch(meldung) {
    folie.fehlversuche++;
    folie.gruende.set(meldung, (folie.gruende.get(meldung) || 0) + 1);
    folie.inFolge++;
    if (folie.zustand === 'live' && folie.inFolge < 2) return;
    if (folie.zustand !== 'offline') { folie.offline++; folie.offlineSeit = Date.now(); }
    folie.zustand = 'offline';
  }
  async function folieLaufen() {
    while (!handysFertig) {
      const start = Date.now();
      const uhren = [1, 2].map((stufe) => setTimeout(() => folieFehlversuch('Antwort dauert länger als ' + sek(stufe * FOLIE.ZEITLIMIT)), stufe * FOLIE.ZEITLIMIT));
      const r = await holen({ aktion: 'stand', umfrage: 'tier', runde, anzahl: '5' }, FOLIE.ZEITLIMIT_HART, false);
      uhren.forEach(clearTimeout);
      folie.abfragen++;
      folie.zeiten.push(r.ms);
      if (r.art === 'ok' && Array.isArray(r.daten.werte) && r.daten.werte.length === 5) {
        folie.inFolge = 0;
        if (folie.offlineSeit) folie.offlineMs += Date.now() - folie.offlineSeit;
        folie.offlineSeit = null;
        folie.zustand = 'live';
      } else {
        folieFehlversuch(grund(r, FOLIE.ZEITLIMIT_HART));
      }
      const dauer = Date.now() - start;
      if (dauer < FOLIE.TAKT && !handysFertig) await warten(FOLIE.TAKT - dauer);
    }
    if (folie.offlineSeit) folie.offlineMs += Date.now() - folie.offlineSeit;
  }

  console.log('Lasttest: ' + anzahl + ' Handys ' + (verteiltMs ? 'gleichmäßig verteilt über ' + sek(verteiltMs) : 'gleichzeitig') + ' an ' + url);
  console.log('Handy-Regel wie js/abstimmen.js: ' + regeln.VERSUCHE + ' Versuche, Zeitlimit je Versuch ' + sek(regeln.ZEITLIMIT) +
    ', Pause vor einer Wiederholung ' + sek(regeln.PAUSE_MIN) + '–' + sek(regeln.PAUSE_MAX) + ' zufällig' +
    (Object.values(regeln.quelle).every((q) => q === 'js/abstimmen.js') ? '' : ' (teils Vorgabe – in js/abstimmen.js nicht gefunden)'));
  console.log('Ziel: jedes Handy sieht „Danke“ nach höchstens ' + sek(ZIEL_MS) + (mitFolie ? '; dazu fragt eine „Folie“ den Stand ab wie Folie 08' : ''));

  /* Welche Fassung des Skripts läuft? (eine lesende Anfrage) */
  let lokal = null;
  try { lokal = (/const FASSUNG = '([^']+)';/.exec(fs.readFileSync(SKRIPT_PFAD, 'utf8')) || [])[1] || null; } catch (f) { /* ohne Vergleich */ }
  const fr = await holen({ aktion: 'fassung' }, 20000, false);
  const fassung = fr.art === 'antwort' ? fassungAusText(fr.daten.fehler) : null;
  if (fassung) {
    console.log('Skript-Fassung der Web-App: ' + fassung + (lokal && lokal !== fassung ? '  ACHTUNG: apps-script.gs hier ist Fassung ' + lokal + ' – erst „Skript aktualisieren“ (ANLEITUNG.md)' : ''));
  } else if (fr.art === 'antwort') {
    console.log('Skript-Fassung der Web-App: keine Angabe – es läuft eine Fassung VOR dem 19.10.2026. Erst „Skript aktualisieren“ (ANLEITUNG.md), dann diesen Test.');
  } else {
    console.log('Skript-Fassung der Web-App: nicht lesbar (' + grund(fr, 20000) + ')');
  }
  console.log('Runde „' + runde + '“ (zählt weder in „probe“ noch im Vortrag)\n');

  const t0 = Date.now();
  const folieLauf = mitFolie ? folieLaufen() : Promise.resolve();
  const handys = await Promise.all(Array.from({ length: anzahl }, (_, i) => handy(i)));
  const gesamt = Date.now() - t0;
  handysFertig = true;
  await folieLauf;

  const ersterVersuch = handys.filter((h) => h.ok && h.versuch === 1).length;
  const wiederholt = handys.filter((h) => h.ok && h.versuch > 1);
  const gescheitert = handys.filter((h) => !h.ok);
  const jeVersuch = [];
  wiederholt.forEach((h) => { jeVersuch[h.versuch] = (jeVersuch[h.versuch] || 0) + 1; });
  console.log('angenommen im 1. Versuch: ' + ersterVersuch + ' · nach Wiederholung: ' + wiederholt.length +
    (wiederholt.length ? ' (' + jeVersuch.map((n, v) => (n ? v + '. Versuch ' + n : '')).filter(Boolean).join(', ') + ')' : '') +
    ' · endgültig gescheitert: ' + gescheitert.length + ' (von ' + anzahl + ')');
  const zeiten = handys.filter((h) => h.ok).map((h) => h.ms).sort((a, b) => a - b);
  const quantil = (liste, q) => liste[Math.min(liste.length - 1, Math.ceil(q * liste.length) - 1)];
  const ueberZiel = zeiten.filter((ms) => ms > ZIEL_MS).length;
  if (zeiten.length) {
    console.log('Zeit bis „Danke“: Median ' + sek(quantil(zeiten, 0.5)) + ' · 90 % ' + sek(quantil(zeiten, 0.9)) +
      ' · längste ' + sek(zeiten[zeiten.length - 1]) + ' · über ' + sek(ZIEL_MS) + ': ' + ueberZiel);
  }
  const gruende = new Map();
  handys.forEach((h) => h.versuche.filter((r) => r.art !== 'ok').forEach((r) => {
    const g = grund(r);
    gruende.set(g, (gruende.get(g) || 0) + 1);
  }));
  if (gruende.size) {
    console.log('Fehlversuche (wiederholt oder endgültig):');
    gruende.forEach((n, g) => console.log('  ' + String(n).padStart(3) + ' ×  ' + g));
  }
  console.log('Anfragen insgesamt: ' + anfragen + ' · alle Handys fertig nach ' + sek(gesamt));
  if (mitFolie) {
    const fz = folie.zeiten.slice().sort((a, b) => a - b);
    console.log('Folie (Stand alle 2 s wie Folie 08): ' + folie.abfragen + (folie.abfragen === 1 ? ' Abfrage' : ' Abfragen') + ', Antwortzeit Median ' + sek(quantil(fz, 0.5)) +
      ' · längste ' + sek(fz[fz.length - 1]) + ' · „offline“: ' +
      (folie.offline ? folie.offline + '-mal, zusammen ' + sek(folie.offlineMs) : 'nie'));
    folie.gruende.forEach((n, g) => console.log('  ' + String(n).padStart(3) + ' ×  Folie: ' + g));
  }

  const stand = await holen({ aktion: 'stand', umfrage: 'tier', runde, anzahl: '5' }, 60000, false);
  const n = stand.art === 'ok' ? stand.daten.n : null;
  console.log('Stand der Runde: ' + (n === null ? 'nicht lesbar (' + grund(stand, 60000) + ')' : 'n = ' + n + ', werte ' + JSON.stringify(stand.daten.werte)) + ' (Stand-Abfrage ' + sek(stand.ms) + ')');

  /* Urteil in drei Stufen */
  const g = gescheitert.length;
  const urteil = n === anzahl && g === 0 ? (ueberZiel ? 'zu langsam' : 'bestanden') : 'nicht bestanden';
  const hand = (k) => k + (k === 1 ? ' Handy' : ' Handys');
  let text;
  if (urteil === 'bestanden') {
    text = 'BESTANDEN: alle ' + anzahl + ' Stimmen gezählt, jedes Handy sah „Danke“ nach höchstens ' + sek(ZIEL_MS) +
      ' (längste ' + sek(zeiten[zeiten.length - 1]) + '), keines musste selbst noch einmal tippen.';
  } else if (urteil === 'zu langsam') {
    text = 'GEZÄHLT, ABER ZU LANGSAM: alle ' + anzahl + ' Stimmen gezählt, aber ' + hand(ueberZiel) + (ueberZiel === 1 ? ' wartete' : ' warteten') + ' länger als ' +
      sek(ZIEL_MS) + ' auf „Danke“ (längste ' + sek(zeiten[zeiten.length - 1]) + '). Ziel verfehlt.';
  } else {
    text = 'NICHT BESTANDEN: ' + hand(g) + ' endgültig gescheitert, gezählt ' + n + ' von ' + anzahl + '.' +
      (g ? (g === 1 ? ' Dieses Handy sähe' : ' Diese Handys sähen') + ' „Das hat nicht geklappt“ und ' + (g === 1 ? 'müsste' : 'müssten') + ' selbst noch einmal tippen.' : '') +
      (g && n === anzahl ? ' (Gezählt wurden die Stimmen trotzdem – sie kamen verspätet an.)' : '') +
      (ueberZiel ? ' Außerdem ' + hand(ueberZiel) + ' über ' + sek(ZIEL_MS) + '.' : '');
  }
  console.log('\n' + text);
  if (mitFolie && folie.offline) console.log('Achtung: Die Folie hätte zwischendurch „offline“ gezeigt (' + folie.offline + '-mal, zusammen ' + sek(folie.offlineMs) + ').');
  if (echt) console.log('Eine Messung ist eine Stichprobe: mindestens zweimal laufen lassen, einmal mit --anzahl 60.');
  else console.log('Attrappe: Belastbarkeit zeigt das nur, wenn der Server mit --sperre läuft (sonst nur die Wiederholung).');
  return {
    bestanden: urteil === 'bestanden', urteil, n, ersterVersuch, wiederholt: wiederholt.length, gescheitert: g,
    ueberZiel, zeiten, anfragen, fassung,
    folie: mitFolie ? { abfragen: folie.abfragen, offline: folie.offline, offlineMs: folie.offlineMs, laengste: Math.max(0, ...folie.zeiten) } : null
  };
}


/* =============================================================================
   6. AUFRUF
   ============================================================================= */

function hauptprogramm() {
  const argv = process.argv.slice(2);
  const zahl = (name, vorgabe) => { const i = argv.indexOf(name); return i >= 0 ? Number(argv[i + 1]) : vorgabe; };
  const iLast = argv.indexOf('--lasttest');
  if (iLast >= 0) {
    const anzahl = Math.min(100, Math.max(1, zahl('--anzahl', 40) || 40));
    const verteilt = Math.min(120, Math.max(0, zahl('--verteilt', 0) || 0));
    lasttest(String(argv[iLast + 1] || '').trim(), { anzahl, verteilt, folie: !argv.includes('--ohne-folie') })
      .then((r) => { process.exitCode = r.bestanden ? 0 : 1; })
      .catch((f) => { console.error('Lasttest abgebrochen: ' + (f && f.message || f)); process.exitCode = 2; });
    return;
  }
  const iServer = argv.indexOf('--server');
  if (iServer >= 0) {
    serverStarten(Number(argv[iServer + 1]) || 8787, {
      verzoegerung: zahl('--verzoegerung', 0),
      sperre: zahl('--sperre', 0),
      stoerung: zahl('--stoerung', 0),
      abbruch: zahl('--abbruch', 0),
      gleichzeitig: zahl('--gleichzeitig', 0)
    });
    return;
  }
  if (argv.includes('--mutationen')) {
    process.exitCode = mutationstest() ? 0 : 1;
    return;
  }
  const r = pruefungenAusfuehren(undefined, false);
  const anzeige = path.relative(process.cwd(), SKRIPT_PFAD);
  console.log('\n' + (r.anzahl - r.fehlgeschlagen.length) + ' von ' + r.anzahl + ' Prüfungen bestanden (' +
    (anzeige.startsWith('..') ? SKRIPT_PFAD : anzeige) + ').');
  process.exitCode = r.fehlgeschlagen.length ? 1 : 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) hauptprogramm();
