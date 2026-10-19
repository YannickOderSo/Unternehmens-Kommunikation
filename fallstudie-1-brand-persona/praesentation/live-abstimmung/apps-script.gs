/**
 * @OnlyCurrentDoc  Das Skript darf nur auf die Tabelle zugreifen, in der es steckt.
 */
/* =============================================================================
   apps-script.gs – Server der Live-Abstimmung (Folie 08, „Wenn HOLY ein Tier
   wäre – welches?“)
   -----------------------------------------------------------------------------
   Google-Apps-Script (Laufzeit V8) als Web-App, gebunden an eine Google-Tabelle
   (in der Tabelle: Erweiterungen → Apps Script). Einrichtung Schritt für
   Schritt: ANLEITUNG.md im selben Ordner. Keine Bibliotheken.

   Was die Web-App kann – und nur das:
   • aktion=stimme  eine Stimme als neue Zeile ins Blatt „Stimmen“ schreiben
   • aktion=stand   die Stimmen einer Runde zählen und NUR die Zahlen herausgeben
   Sie gibt keine Zeilen, keine Geräte-IDs und keine Zeiten heraus und löscht
   nichts. Dank @OnlyCurrentDoc (oben) erreicht sie nur diese eine Tabelle.

   SCHNITTSTELLE (verbindlich, gleich in abstimmen.html und js/komponenten.js)
   Nur GET. Ist der Parameter callback gesetzt, kommt die Antwort als JSONP
   („f({…});“), sonst als JSON. JSONP per <script> funktioniert unabhängig von
   CORS und von den Weiterleitungen, über die Google Web-Apps ausliefert.
     ?aktion=stimme&umfrage=tier&runde=probe&option=2&anzahl=5&geraet=<ID>&callback=f
        → f({"ok":true});
     ?aktion=stand&umfrage=tier&runde=probe&anzahl=5&callback=f
        → f({"ok":true,"werte":[3,1,7,0,2],"n":13,"zeit":"2026-10-26T14:05:09.123Z"});
     Fehler
        → f({"ok":false,"fehler":"kurzer deutscher Text"});
   Weitere Parameter (z. B. _=Zeitstempel gegen den Browser-Zwischenspeicher)
   werden ignoriert.

   Prüfung der Eingaben
     umfrage, runde  nur A–Z a–z 0–9 _ -, 1 bis 40 Zeichen
     geraet          nur A–Z a–z 0–9 _ -, 8 bis 64 Zeichen (zufällige ID aus dem Browser)
     anzahl          ganze Zahl 1 bis 9 (Zahl der Antwortmöglichkeiten)
     option          ganze Zahl, 0 ≤ option < anzahl (Nummer der Antwort ab 0,
                     Reihenfolge wie in marke.js → umfragen.tier.optionen)
     callback        muss /^[A-Za-z_$][\w$.]{0,63}$/ erfüllen – sonst kommt der
                     Fehler als reines JSON (ein fremder Name wird nie ausgegeben)

   Zählregel
   Je Runde, Umfrage und Gerät zählt nur die LETZTE Stimme (Spalte Zeit):
   Umentscheiden ersetzt die alte Stimme, ein zweiter Klick zählt nicht doppelt.
   „runde“ trennt Probe und Vortrag (marke.js → umfragen.tier.runde, z. B.
   'probe' und 'vortrag-2026-10-26'). So beginnt der Vortrag ohne Probestimmen –
   ohne geheimen Schlüssel im öffentlichen Repository.

   Tabelle, Blatt „Stimmen“ (legt das Skript selbst an):
     Zeit | Runde | Umfrage | Option | Geraet
   Keine personenbezogenen Daten: kein Name, keine IP-Adresse, nur eine zufällige
   Geräte-ID. Zeilen löschen (z. B. Teststimmen) und Sortieren sind erlaubt;
   Blattname und Reihenfolge der Spalten bitte nicht ändern.

   Nach JEDER Änderung an diesem Skript: Bereitstellen → Bereitstellungen
   verwalten → Bearbeiten (Stift) → Version „Neue Version“ → Bereitstellen.
   Sonst läuft die alte Fassung weiter.
   Prüfen ohne Google-Konto: node werkzeuge/live-abstimmung-test.mjs
   ============================================================================= */

const BLATT = 'Stimmen';
const KOPF = ['Zeit', 'Runde', 'Umfrage', 'Option', 'Geraet'];
/* Zahlenformate je Spalte. '@' = Text: Sonst macht Google Tabellen aus einer
   Runde „2026-10-26“ ein Datum, aus „true“ einen Wahrheitswert und aus einer
   Geräte-ID wie „12345678“ eine Zahl – dann fände die Zählung sie nicht wieder. */
const FORMATE = ['dd.mm.yyyy hh:mm:ss', '@', '@', '0', '@'];

const MUSTER_NAME = /^[A-Za-z0-9_-]{1,40}$/;
const MUSTER_GERAET = /^[A-Za-z0-9_-]{8,64}$/;
const MUSTER_CALLBACK = /^[A-Za-z_$][\w$.]{0,63}$/;
const MUSTER_ZAHL = /^[0-9]{1,2}$/;
const HOECHSTENS_OPTIONEN = 9;
/* So lange wartet eine Stimme höchstens, bis die vorige geschrieben ist.
   Kürzer als das Zeitlimit des Handys (js/abstimmen.js: 30 s): Bei Andrang
   gibt der Server zuerst auf, und seine Meldung „bitte gleich noch einmal
   tippen“ kommt auf dem Handy noch an. */
const SPERRE_WARTEN_MS = 10000;


/* -----------------------------------------------------------------------------
   Einstieg: jede Anfrage an die Web-App-Adresse (…/exec?…) landet hier.
   ----------------------------------------------------------------------------- */
function doGet(e) {
  const p = (e && e.parameter) || {};
  const callback = p.callback;

  /* Ungültiger callback-Name: nicht verarbeiten, nicht zurückgeben (sonst
     könnte jemand eigenen Code in die Antwort schleusen). */
  if (callback !== undefined && !(typeof callback === 'string' && MUSTER_CALLBACK.test(callback))) {
    return ausgeben_({ ok: false, fehler: 'Ungültiger callback-Name.' }, null);
  }

  let antwort;
  try {
    if (p.aktion === 'stimme') antwort = stimmeSpeichern_(p);
    else if (p.aktion === 'stand') antwort = standZaehlen_(p);
    else antwort = { ok: false, fehler: 'Unbekannte Aktion – erlaubt sind aktion=stimme und aktion=stand.' };
  } catch (fehler) {
    antwort = { ok: false, fehler: 'Serverfehler: ' + kurz_(fehler) };
  }
  return ausgeben_(antwort, callback);
}


/* -----------------------------------------------------------------------------
   Einmal im Editor ausführen (oben Funktion „einrichten“ wählen → Ausführen):
   legt das Blatt „Stimmen“ mit Kopfzeile an und fragt die Berechtigung ab.
   Mehrfaches Ausführen schadet nicht.
   ----------------------------------------------------------------------------- */
function einrichten() {
  const blatt = blattHolen_(true);
  Logger.log('Blatt „%s“ ist bereit. Gespeicherte Stimmen: %s', BLATT, Math.max(0, blatt.getLastRow() - 1));
}


/* ---------- aktion=stimme ---------- */
function stimmeSpeichern_(p) {
  const fehler = eingabenPruefen_(p, true);
  if (fehler) return { ok: false, fehler: fehler };

  /* Sperre: Stimmen, die gleichzeitig ankommen, schreiben nacheinander –
     sonst könnten zwei Stimmen dieselbe Zeile überschreiben. */
  const sperre = LockService.getScriptLock();
  if (!sperre.tryLock(SPERRE_WARTEN_MS)) {
    return { ok: false, fehler: 'Gerade kommen sehr viele Stimmen auf einmal – bitte gleich noch einmal tippen.' };
  }
  try {
    const blatt = blattHolen_(true);
    const zeile = blatt.getLastRow() + 1;
    if (zeile > blatt.getMaxRows()) blatt.insertRowsAfter(blatt.getMaxRows(), 500);
    const bereich = blatt.getRange(zeile, 1, 1, KOPF.length);
    bereich.setNumberFormats([FORMATE]);
    bereich.setValues([[new Date(), p.runde, p.umfrage, ganzeZahl_(p.option), p.geraet]]);
    SpreadsheetApp.flush();             /* erst schreiben, dann die Sperre freigeben */
  } finally {
    sperre.releaseLock();
  }
  return { ok: true };
}


/* ---------- aktion=stand ---------- */
function standZaehlen_(p) {
  const fehler = eingabenPruefen_(p, false);
  if (fehler) return { ok: false, fehler: fehler };

  const anzahl = ganzeZahl_(p.anzahl);
  const werte = new Array(anzahl).fill(0);
  const blatt = blattHolen_(false);     /* nur lesen: kein Blatt = noch keine Stimmen */
  const letzteZeile = blatt ? blatt.getLastRow() : 0;

  if (letzteZeile >= 1) {
    /* ab Zeile 1 lesen: Die Kopfzeile zählt nie (Option „Option“ ist keine
       Zahl), und eine von Hand gelöschte Kopfzeile kostet keine Stimme. */
    const zeilen = blatt.getRange(1, 1, letzteZeile, KOPF.length).getValues();
    /* Gerät → letzte Stimme. Map statt Objekt: Geräte-IDs wie „__proto__“
       bleiben gewöhnliche Schlüssel. */
    const letzte = new Map();
    zeilen.forEach(function (z) {
      if (String(z[1]) !== p.runde || String(z[2]) !== p.umfrage) return;
      const geraet = String(z[4]);
      if (!geraet || z[3] === '' || z[3] === null) return;      /* unvollständige Zeile (von Hand) */
      const zeit = istDatum_(z[0]) ? z[0].getTime() : -Infinity;
      const bisher = letzte.get(geraet);
      /* spätere Zeit gewinnt; bei gleicher Zeit die weiter unten stehende Zeile */
      if (!bisher || zeit >= bisher.zeit) letzte.set(geraet, { zeit: zeit, option: Number(z[3]) });
    });
    letzte.forEach(function (stimme) {
      const o = stimme.option;
      if (Number.isInteger(o) && o >= 0 && o < anzahl) werte[o] += 1;
    });
  }

  const n = werte.reduce(function (summe, wert) { return summe + wert; }, 0);
  return { ok: true, werte: werte, n: n, zeit: new Date().toISOString() };
}


/* ---------- Eingaben prüfen: Fehlertext oder null ---------- */
function eingabenPruefen_(p, mitStimme) {
  if (!passt_(MUSTER_NAME, p.umfrage)) {
    return 'Ungültige Umfrage: nur Buchstaben, Ziffern, _ und -, höchstens 40 Zeichen.';
  }
  if (!passt_(MUSTER_NAME, p.runde)) {
    return 'Ungültige Runde: nur Buchstaben, Ziffern, _ und -, höchstens 40 Zeichen.';
  }
  const anzahl = ganzeZahl_(p.anzahl);
  if (!(anzahl >= 1 && anzahl <= HOECHSTENS_OPTIONEN)) {
    return 'Ungültige Anzahl: ganze Zahl von 1 bis ' + HOECHSTENS_OPTIONEN + '.';
  }
  if (!mitStimme) return null;

  const option = ganzeZahl_(p.option);
  if (!(option >= 0 && option < anzahl)) {
    return 'Ungültige Option: ganze Zahl von 0 bis ' + (anzahl - 1) + '.';
  }
  if (!passt_(MUSTER_GERAET, p.geraet)) {
    return 'Ungültige Geräte-ID: 8 bis 64 Zeichen, nur Buchstaben, Ziffern, _ und -.';
  }
  return null;
}


/* ---------- Hilfsfunktionen (Endung _ = privat, im Editor nicht auswählbar) ---------- */

/* Blatt „Stimmen“ holen; mit anlegen = true bei Bedarf anlegen und die
   Kopfzeile schreiben (auch wenn jemand ein leeres Blatt von Hand angelegt hat). */
function blattHolen_(anlegen) {
  const tabelle = SpreadsheetApp.getActiveSpreadsheet();
  if (!tabelle) {
    throw new Error('Skript ist an keine Tabelle gebunden – in der Tabelle über Erweiterungen → Apps Script anlegen.');
  }
  let blatt = tabelle.getSheetByName(BLATT);
  if (!anlegen) return blatt;
  if (!blatt) blatt = tabelle.insertSheet(BLATT);
  if (blatt.getLastRow() === 0) {
    blatt.getRange(1, 1, 1, KOPF.length).setValues([KOPF]).setFontWeight('bold');
    blatt.setFrozenRows(1);
  }
  return blatt;
}

/* Antwort als JSONP (mit geprüftem callback) oder als JSON */
function ausgeben_(antwort, callback) {
  const json = JSON.stringify(antwort);
  if (callback) {
    return ContentService.createTextOutput(callback + '(' + json + ');')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}

function passt_(muster, wert) {
  return typeof wert === 'string' && muster.test(wert);
}

/* „0“ … „99“ → Zahl; alles andere (leer, „-1“, „1.5“, „1e0“, „ 1“) → NaN */
function ganzeZahl_(wert) {
  return passt_(MUSTER_ZAHL, wert) ? Number(wert) : NaN;
}

function istDatum_(wert) {
  return Object.prototype.toString.call(wert) === '[object Date]' && !isNaN(wert.getTime());
}

function kurz_(fehler) {
  return String((fehler && fehler.message) || fehler).slice(0, 200);
}
