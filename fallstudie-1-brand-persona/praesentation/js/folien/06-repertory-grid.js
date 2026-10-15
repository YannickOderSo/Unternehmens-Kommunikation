/* =============================================================================
   js/folien/06-repertory-grid.js – Skript für Folie f06 „Repertory Grid“
   -----------------------------------------------------------------------------
   Baut aus den Daten der Folie (<script type="application/json" class="daten">
   in folien/06-repertory-grid.html):
     • links ein Polaritätenprofil (SVG): Raster mit Skala, je Konstrukt eine
       Zeile mit beiden Polen und der Zahl der Nennungen, drei Linien
       (Idealmarke · stärkster Wettbewerber · [Marke]), die sich in Schritt 2
       nacheinander zeichnen
     • rechts die Triade (Schritt 0–2): Frage an die Befragten, drei Karten,
       in Schritt 1 rücken zwei zusammen und eine ab, darüber das Konstrukt
     • rechts das Ergebnis (Schritt 3): Markenattribute auf Höhe ihrer Zeilen,
       mit Vorsprung vor dem Wettbewerb und den drei Auswahlkriterien
   Inhalte ändern Sie NUR in den Daten der Folie – nicht hier.

   RECHENWEG (zum Erklären bei Rückfragen) – wie methoden.md, Abschnitt 2
     Vorsprung = |Mittelwert [Marke] − Ø Wettbewerber W1–W5| auf dem
     Konstrukt (eine Nachkommastelle). Den Ø trägt die Gruppe je Konstrukt als
     "wettbewerbMittel" ein (selbst gerechnet, Backup B4). Fehlt der Wert,
     rechnet das Skript ersatzweise gegen die Linie „Marke A“ ("wettbewerb")
     und meldet das in der Konsole. Liegt die Marke links (Wert kleiner),
     heißt das Attribut wie der linke Pol.

   EINPASSEN (meldet Probleme als Warnung in der Konsole – pruefen.mjs zeigt
   sie im Bericht):
     • Zu lange Pole brechen zweizeilig um, damit die Skala breit genug bleibt.
       Passt es auch dann nicht → Warnung „Pol … zu lang“.
     • Attributnamen rechts werden von 40 bis 28 px verkleinert; passt der
       Name auch dann nicht in eine Zeile → Warnung (Kurzname eintragen).

   Zustände der Schritte steuert das CSS über unsichtbare Auslöser
   (.rg-z1 … .rg-z3) – so stimmen Vortrag, Vorschau und Druck überein.
   ============================================================================= */
(function () {
  'use strict';

  /* ---------------------------------------------------------------------------
     Maße der Zeichnung in Bühnen-Pixeln (nur bei Bedarf ändern)
     --------------------------------------------------------------------------- */
  var MASS = {
    legendeY: 16,            // Mitte der Legendenzeile ganz oben
    skalaY: 70,              // Grundlinie der Skalenzahlen 1–7
    zeilenOben: 92,          // Oberkante der ersten Zeile
    zeileMin: 60,            // kleinste Zeilenhöhe
    zeileMax: 92,            // größte Zeilenhöhe
    nennungZahlX: 34,        // rechte Kante der Nennungszahl
    balkenX: 46,             // Beginn des Nennungsbalkens
    balkenMax: 62,           // Länge des Balkens bei den meisten Nennungen
    balkenHoehe: 8,
    polAbstand: 24,          // Lücke zwischen Polbeschriftung und Skala
    polMinX: 132,            // linke Polbeschriftungen beginnen frühestens hier
    polZeile: 30,            // Zeilenabstand, wenn ein Pol zweizeilig umbricht
    zweizeiligAb: 60,        // Pole brechen nur um, wenn die Zeile so hoch ist
    skalaWunsch: 6 * 60,     // ab dieser Skalenbreite brechen lange Pole um …
    skalaMin: 6 * 48,        // … und schmaler wird die Skala nie (Notbremse + Warnung)
    lueckeSeite: 48,         // Abstand zwischen Profil und rechter Spalte
    punktMarke: 11,          // Radius der Punkte [Marke]
    punktWettbewerb: 10,     // Radius der Punkte Wettbewerber
    rauteIdeal: 9,           // halbe Diagonale der Rauten (Idealmarke)
    ring: 18,                // Radius des Rings um Attribut-Punkte (Schritt 3)
    mittelStrich: 15,        // halbe Höhe des Strichs „Ø Wettbewerb“ (Schritt 3)
    linienDauer: 1100,       // ms – so lange zeichnet sich eine Linie
    linienStart: [450, 1500, 2550], // ms – Start Ideal, Wettbewerber, [Marke]
    zeilenStaffel: 60,       // ms – Versatz der Zeilen in Schritt 2
    karteBreite: 136,        // Breite einer Triaden-Karte
    karteWeg: 18,            // so weit rücken die Karten höchstens (Jury: Wege ≤ 18 px)
    karteLueckeMin: 14       // kleinste Lücke zwischen den zusammengerückten Karten
  };

  var SCHRIFT_KARTE = { start: 34, min: 28 };
  var SCHRIFT_ATTRIBUT = { start: 40, min: 28 };

  /* ---------------------------------------------------------------------------
     Hilfen
     --------------------------------------------------------------------------- */
  function zahl(w, standard) {
    var n = parseFloat(w);
    return isNaN(n) ? standard : n;
  }
  function begrenzen(w, a, b) { return Math.max(a, Math.min(b, w)); }
  function grossAnfang(text) {
    text = String(text || '');
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  /* Zeitpunkt (0…1), zu dem eine Bewegung mit der Kurve cubic-bezier(a,b,c,d)
     den Fortschritt p erreicht – damit die Punkte genau dann erscheinen,
     wenn die Linie bei ihnen ankommt. Ohne lesbare Kurve: linear. */
  function zeitFuerFortschritt(kurve, p) {
    var m = /cubic-bezier\(\s*([\d.]+)\s*,\s*([\d.-]+)\s*,\s*([\d.]+)\s*,\s*([\d.-]+)\s*\)/.exec(kurve || '');
    if (!m) return p;
    var x1 = +m[1], y1 = +m[2], x2 = +m[3], y2 = +m[4];
    var bez = function (s, a, b) { var t = 1 - s; return 3 * t * t * s * a + 3 * t * s * s * b + s * s * s; };
    var lo = 0, hi = 1;
    for (var i = 0; i < 30; i++) {
      var mitte = (lo + hi) / 2;
      if (bez(mitte, y1, y2) < p) lo = mitte; else hi = mitte;
    }
    return bez((lo + hi) / 2, x1, x2);
  }

  /* Text in zwei möglichst gleich lange Zeilen teilen – an einem Leerzeichen
     oder nach „/“ bzw. „-“ (z. B. „Community-/Startup-Marke“).
     Gibt null zurück, wenn es keine Trennstelle gibt. */
  function zweiZeilen(text) {
    var beste = null;
    for (var i = 1; i < text.length - 1; i++) {
      var c = text.charAt(i), a, b;
      if (c === ' ') { a = text.slice(0, i); b = text.slice(i + 1); }
      else if ((c === '/' || c === '-') && text.charAt(i + 1) !== ' ') { a = text.slice(0, i + 1); b = text.slice(i + 1); }
      else continue;
      if (!a.trim() || !b.trim()) continue;
      var laenge = Math.max(a.length, b.length);
      if (!beste || laenge < beste.laenge) beste = { laenge: laenge, zeilen: [a.trim(), b.trim()] };
    }
    return beste ? beste.zeilen : null;
  }

  /* Daten lesen und Zeilen ordnen (Attribute auf Wunsch nach oben) */
  function zeilenAusDaten(d, u) {
    var min = zahl(d.skala && d.skala[0], 1);
    var max = zahl(d.skala && d.skala[1], 7);
    var mitte = (min + max) / 2;
    var ohneMittel = [];
    var liste = d.konstrukte.map(function (k, i) {
      var m = zahl(k.marke, mitte), w = zahl(k.wettbewerb, mitte), id = zahl(k.ideal, mitte);
      /* Bezugswert für den Vorsprung: Ø aller Wettbewerber (methoden.md),
         ersatzweise der stärkste Wettbewerber (Linie „Marke A“) */
      var hatMittel = k.wettbewerbMittel !== undefined && k.wettbewerbMittel !== null && k.wettbewerbMittel !== '';
      var bezug = hatMittel ? zahl(k.wettbewerbMittel, w) : w;
      if (!hatMittel) ohneMittel.push(k.links + ' – ' + k.rechts);
      var markeRechts = m >= bezug;
      var name = typeof k.attribut === 'string' && k.attribut.trim()
        ? k.attribut.trim() : grossAnfang(markeRechts ? k.rechts : k.links);
      return {
        nr: i, links: u.markeText(k.links || ''), rechts: u.markeText(k.rechts || ''),
        nennungen: Math.max(0, zahl(k.nennungen, 0)),
        marke: begrenzen(m, min, max), wettbewerb: begrenzen(w, min, max), ideal: begrenzen(id, min, max),
        mittel: hatMittel ? begrenzen(bezug, min, max) : null,
        attribut: !!k.attribut, attributName: name, markeRechts: markeRechts,
        vorsprung: Math.round(Math.abs(m - bezug) * 10) / 10
      };
    });
    if (ohneMittel.length) {
      console.warn('[f06] Ohne "wettbewerbMittel" (Ø W1–W5) wird gegen „Marke A“ gerechnet: ' + ohneMittel.join(' · ') +
        '. Bitte den Ø aller Wettbewerber eintragen (methoden.md, Abschnitt 2).');
    }
    if (d.attributeOben !== false) {
      liste = liste.filter(function (z) { return z.attribut; }).concat(liste.filter(function (z) { return !z.attribut; }));
    }
    /* Zeile der Triade (gleiche Pole, egal in welcher Reihenfolge) */
    var t = d.triade || {};
    var a = String(t.polPaar || '').toLowerCase(), b = String(t.polEinzeln || '').toLowerCase();
    liste.forEach(function (z) {
      var l = z.links.toLowerCase(), r = z.rechts.toLowerCase();
      z.triade = !!a && !!b && ((l === a && r === b) || (l === b && r === a));
    });
    return { liste: liste, min: min, max: max };
  }


  /* ---------------------------------------------------------------------------
     Pole: Text setzen (ein- oder zweizeilig), Breite messen, Lage setzen
     --------------------------------------------------------------------------- */
  function polSchreiben(r, seite, zeilen, u) {
    var el = seite === 'l' ? r.polL : r.polR;
    el.textContent = '';
    if (zeilen.length === 1) {
      el.setAttribute('y', r.yMitte + 10);                 // optisch mittig in der Zeile
      el.textContent = zeilen[0];
    } else {
      el.setAttribute('y', r.yMitte + 10 - MASS.polZeile / 2);
      zeilen.forEach(function (t, k) {
        u.svg('tspan', { dy: k ? MASS.polZeile : null }, el).textContent = t;
      });
    }
    r[seite === 'l' ? 'zeilenL' : 'zeilenR'] = zeilen.length;
  }
  function polBreite(el) {
    var teile = el.querySelectorAll('tspan');
    if (!teile.length) return el.getComputedTextLength();
    var b = 0;
    for (var i = 0; i < teile.length; i++) b = Math.max(b, teile[i].getComputedTextLength());
    return b;
  }
  function polX(el, x) {
    el.setAttribute('x', x);
    var teile = el.querySelectorAll('tspan');
    for (var i = 0; i < teile.length; i++) teile[i].setAttribute('x', x);
  }


  /* ---------------------------------------------------------------------------
     Aufbau
     --------------------------------------------------------------------------- */
  function aufbauen(ctx) {
    var folie = ctx.folie, d = ctx.daten, u = ctx.util;
    var buehne = folie.querySelector('.rg-buehne');
    if (!buehne || !d || !Array.isArray(d.konstrukte) || !d.konstrukte.length) return null;
    buehne.textContent = '';

    var masse = u.messen(buehne, function () { return { B: buehne.clientWidth, H: buehne.clientHeight }; });
    var B = Math.round(masse.B), H = Math.round(masse.H);
    if (B < 400 || H < 300) return null;

    var daten = zeilenAusDaten(d, u);
    var zeilen = daten.liste, min = daten.min, max = daten.max;
    var N = zeilen.length;
    var dezimalen = d.vorsprungDezimalen === 0 ? 0 : 1;

    /* Spalten: rechte Spalte = 4 von 12 Rasterspalten (wie .sp-4) */
    var rinne = u.token('--rinne') || 32;
    var spalte = (B - 11 * rinne) / 12;
    var seiteB = Math.round(4 * spalte + 3 * rinne);
    var seiteX = B - seiteB;
    var profilB = seiteX - MASS.lueckeSeite;

    var zeileH = begrenzen(Math.floor((H - MASS.zeilenOben - 4) / N), MASS.zeileMin, MASS.zeileMax);
    var unten = MASS.zeilenOben + zeileH * N;
    var y = function (i) { return Math.round(MASS.zeilenOben + zeileH * (i + 0.5)); };

    var z = { folie: folie, buehne: buehne, B: B, H: H, zeilen: zeilen, reihen: [], laufend: [] };

    /* ---------- SVG-Grundgerüst (Reihenfolge = Stapelung, unten zuerst) ---------- */
    var svg = u.svg('svg', { class: 'rg-svg', width: B, height: H, viewBox: '0 0 ' + B + ' ' + H }, buehne);
    var defs = u.svg('defs', {}, svg);
    var ebeneBand = u.svg('g', { class: 'rg-baender' }, svg);
    var ebeneRaster = u.svg('g', { class: 'rg-raster' }, svg);
    var ebeneZeilen = u.svg('g', { class: 'rg-zeilen' }, svg);
    var ebeneLinien = u.svg('g', { class: 'rg-linien' }, svg);    // Linien der drei Reihen
    var ebeneMarker = u.svg('g', { class: 'rg-marker' }, svg);    // Schritt 3: Ringe + Ø-Striche (unter den Punkten)
    var ebenePunkte = u.svg('g', { class: 'rg-punkte' }, svg);    // Punkte; Rauten der Idealmarke liegen oben

    /* Zeilen mit Polen und Nennungen (erst anlegen, dann messen, dann setzen) */
    var maxNennung = Math.max.apply(null, zeilen.map(function (r) { return r.nennungen; }).concat([1]));
    zeilen.forEach(function (r, i) {
      var schritt = r.triade ? 1 : 2;
      var g = u.svg('g', {
        class: 'rg-zeile' + (r.attribut ? ' ist-attribut' : '') + (r.triade ? ' ist-triade' : ''),
        'data-schritt': String(schritt), 'data-animation': 'einblenden',
        'data-verzoegerung': String(schritt === 1 ? 900 : i * MASS.zeilenStaffel)
      }, ebeneZeilen);
      r.el = g;
      r.yMitte = y(i);
      r.polL = u.svg('text', { class: 'rg-pol rg-pol--links' + (!r.markeRechts ? ' ist-markenpol' : '') }, g);
      r.polR = u.svg('text', { class: 'rg-pol rg-pol--rechts' + (r.markeRechts ? ' ist-markenpol' : '') }, g);
      polSchreiben(r, 'l', [r.links], u);
      polSchreiben(r, 'r', [r.rechts], u);
      /* Nennungen = Relevanz (Metaangabe: Zahl + kleiner Balken); erscheinen
         erst in Schritt 2 zusammen mit der Spaltenüberschrift */
      var nAttr = { class: 'rg-nennung', 'data-meta': '' };
      if (schritt === 1) { nAttr['data-schritt'] = '2'; nAttr['data-animation'] = 'einblenden'; }
      var n = u.svg('g', nAttr, g);
      u.svg('text', { class: 'rg-nennung-zahl', x: MASS.nennungZahlX, y: y(i) + 8 }, n).textContent = u.zahlFormat(r.nennungen, 0);
      u.svg('rect', {
        class: 'rg-balken', x: MASS.balkenX, y: y(i) - MASS.balkenHoehe / 2,
        width: Math.max(2, Math.round(MASS.balkenMax * r.nennungen / maxNennung)), height: MASS.balkenHoehe, rx: MASS.balkenHoehe / 2
      }, n);
    });

    /* Breite der Polbeschriftungen messen → Skala dazwischen einpassen.
       Gemessen in der fetten Schrift, die in Schritt 1 und 3 zum Einsatz kommt.
       Bleibt für die Skala zu wenig Platz, brechen die breitesten Pole
       zweizeilig um (nur bei ausreichender Zeilenhöhe). */
    var breiten = u.messen(buehne, function () {
      buehne.classList.add('rg-messen');
      var messen = function () {
        var l = 0, r = 0;
        zeilen.forEach(function (zz) {
          zz.breiteL = polBreite(zz.polL);
          zz.breiteR = polBreite(zz.polR);
          l = Math.max(l, zz.breiteL);
          r = Math.max(r, zz.breiteR);
        });
        return { l: l, r: r };
      };
      var b = messen();
      var platz = function (skala) { return profilB - Math.max(MASS.polMinX, 120) - 2 * MASS.polAbstand - skala; };
      if (zeileH >= MASS.zweizeiligAb) {
        while (b.l + b.r > platz(MASS.skalaWunsch)) {
          /* der Pol, der eine Seite am breitesten macht – zuerst die breitere Seite */
          var kandidat = null;
          [b.r >= b.l ? 'r' : 'l', b.r >= b.l ? 'l' : 'r'].some(function (s) {
            var breitester = null;
            zeilen.forEach(function (zz) {
              var w = s === 'l' ? zz.breiteL : zz.breiteR;
              if (!breitester || w > breitester.w) breitester = { r: zz, w: w };
            });
            var r = breitester && breitester.r;
            var bereits = r && (s === 'l' ? r.zeilenL : r.zeilenR) > 1;
            var teile = r && !bereits ? zweiZeilen(s === 'l' ? r.links : r.rechts) : null;
            if (teile) kandidat = { r: r, s: s, teile: teile };
            return !!kandidat;
          });
          if (!kandidat) break;
          polSchreiben(kandidat.r, kandidat.s, kandidat.teile, u);
          b = messen();
        }
      }
      buehne.classList.remove('rg-messen');
      if (b.l + b.r > platz(MASS.skalaMin)) {
        var zuLang = [];
        zeilen.forEach(function (zz) {
          if (zz.breiteL === b.l || zz.breiteL > 260) zuLang.push(zz.links);
          if (zz.breiteR === b.r || zz.breiteR > 260) zuLang.push(zz.rechts);
        });
        console.warn('[f06] Pol zu lang für das Profil: „' + zuLang.join('“, „') +
          '“ – höchstens ca. 18 Zeichen je Pol (Langform in die Notizen bzw. ins Backup B4).');
      }
      return b;
    });
    var x0 = Math.round(Math.max(MASS.polMinX + breiten.l, 120) + MASS.polAbstand);
    var x1 = Math.round(profilB - breiten.r - MASS.polAbstand);
    if (x1 - x0 < MASS.skalaMin) x1 = x0 + MASS.skalaMin;            // Notbremse: Skala nie zu eng (Warnung oben)
    var x = function (w) { return Math.round(x0 + (x1 - x0) * (w - min) / (max - min)); };
    zeilen.forEach(function (r) {
      polX(r.polL, x0 - MASS.polAbstand);
      polX(r.polR, x1 + MASS.polAbstand);
    });

    /* ---------- Raster (ab Schritt 0 sichtbar) ---------- */
    for (var w = min; w <= max; w++) {
      var istMitte = Math.abs(w - (min + max) / 2) < 0.01;
      u.svg('line', { class: 'rg-gitter' + (istMitte ? ' rg-gitter--mitte' : ''), x1: x(w), y1: MASS.zeilenOben, x2: x(w), y2: unten }, ebeneRaster);
      u.svg('text', { class: 'rg-skala', 'data-meta': '', x: x(w), y: MASS.skalaY }, ebeneRaster).textContent = String(w);
    }
    for (var t = 0; t <= N; t++) {
      var ty = MASS.zeilenOben + zeileH * t;
      u.svg('line', { class: 'rg-trenner' + (t === 0 || t === N ? ' rg-trenner--rand' : ''), x1: 0, y1: ty, x2: profilB, y2: ty }, ebeneRaster);
    }
    /* Überschrift der Nennungs-Spalte (mit Schritt 2) */
    var kopfN = u.svg('text', { class: 'rg-kopf-text', 'data-meta': '', x: 0, y: MASS.skalaY, 'data-schritt': '2', 'data-animation': 'einblenden' }, ebeneRaster);
    kopfN.textContent = u.markeText(d.nennungenTitel || 'Nennungen');
    u.messen(buehne, function () {
      if (kopfN.getComputedTextLength() > x(min) - 24) {
        console.warn('[f06] Spaltenüberschrift „' + kopfN.textContent + '“ ist zu lang und stößt an die Skala – kürzer formulieren.');
      }
    });

    /* ---------- Bänder ---------- */
    /* Schritt 1 (nur solange aktuell): Zeile der Triade leuchtet */
    zeilen.forEach(function (r, i) {
      if (r.triade) u.svg('rect', { class: 'rg-band-triade', x: 0, y: MASS.zeilenOben + zeileH * i + 3, width: profilB, height: zeileH - 6, rx: 4 }, ebeneBand);
    });
    /* Schritt 3: Attribut-Zeilen über die ganze Breite hinterlegt */
    var baender = u.svg('g', { 'data-schritt': '3', 'data-animation': 'einblenden' }, ebeneBand);
    zeilen.forEach(function (r, i) {
      if (r.attribut) u.svg('rect', { class: 'rg-band', x: 0, y: MASS.zeilenOben + zeileH * i + 3, width: B, height: zeileH - 6, rx: 4 }, baender);
    });

    /* ---------- Linien: Ideal → Wettbewerber → [Marke] ---------- */
    var kurve = u.kurve();
    var reihenDef = [
      { art: 'ideal', wert: 'ideal', name: u.markeText(d.ideal || 'Idealmarke') },
      { art: 'wettbewerb', wert: 'wettbewerb', name: u.markeText(d.wettbewerber || 'Wettbewerber') },
      { art: 'marke', wert: 'marke', name: u.markeText(d.marke || '[Marke]') }
    ];
    var punktGruppen = {};
    reihenDef.forEach(function (def, k) {
      var start = MASS.linienStart[k];
      var pkte = zeilen.map(function (r, i) { return [x(r[def.wert]), y(i)]; });
      var punkteText = pkte.map(function (p) { return p[0] + ',' + p[1]; }).join(' ');
      /* Länge bis zu jedem Punkt (für den Zeitpunkt, an dem der Punkt erscheint) */
      var bis = [0];
      for (var i = 1; i < pkte.length; i++) {
        bis.push(bis[i - 1] + Math.hypot(pkte[i][0] - pkte[i - 1][0], pkte[i][1] - pkte[i - 1][1]));
      }
      var laenge = bis[bis.length - 1] || 1;

      /* Maske: eine breite, unsichtbare Kopie der Linie wird „gezeichnet“ und
         gibt dabei die echte Linie frei – so zeichnen sich auch gestrichelte
         und gepunktete Linien. (mask-type: alpha, siehe CSS) */
      var maskeId = 'rg-maske-' + def.art + '-' + ctx.id;
      var maske = u.svg('mask', { id: maskeId, maskUnits: 'userSpaceOnUse', x: -40, y: -40, width: B + 80, height: H + 80 }, defs);
      var maskenLinie = u.svg('polyline', { class: 'rg-maskenlinie', points: punkteText }, maske);

      var gLinie = u.svg('g', { class: 'rg-reihe rg-reihe--' + def.art, 'data-schritt': '2', 'data-animation': 'keine' }, ebeneLinien);
      u.svg('polyline', { class: 'rg-linie rg-linie--' + def.art, points: punkteText, mask: 'url(#' + maskeId + ')' }, gLinie);

      /* Punkte in eigener Ebene über allen Linien; federn auf, sobald die Linie sie erreicht */
      var gPunkte = u.svg('g', { class: 'rg-reihe-punkte rg-reihe-punkte--' + def.art, 'data-schritt': '2', 'data-animation': 'keine' });
      punktGruppen[def.art] = gPunkte;
      pkte.forEach(function (p, i) {
        var v = String(Math.round(start + MASS.linienDauer * zeitFuerFortschritt(kurve, bis[i] / laenge)));
        var r = zeilen[i];
        var titel = def.name + ': ' + u.zahlFormat(r[def.wert], 1) + ' (' + r.links + ' – ' + r.rechts + ')';
        var form;
        if (def.art === 'ideal') {
          var s = MASS.rauteIdeal;
          form = u.svg('path', { class: 'rg-punkt rg-punkt--ideal', d: 'M' + p[0] + ' ' + (p[1] - s) + 'l' + s + ' ' + s + 'l' + (-s) + ' ' + s + 'l' + (-s) + ' ' + (-s) + 'z', 'data-animation': 'feder', 'data-verzoegerung': v }, gPunkte);
        } else {
          form = u.svg('circle', {
            class: 'rg-punkt rg-punkt--' + def.art, cx: p[0], cy: p[1],
            r: def.art === 'marke' ? MASS.punktMarke : MASS.punktWettbewerb, 'data-animation': 'feder', 'data-verzoegerung': v
          }, gPunkte);
        }
        /* Tooltip mit dem genauen Wert (für Rückfragen); zählt nicht als Folientext */
        u.svg('title', { 'data-meta': '' }, form).textContent = titel;
      });
      z.reihen.push({ maskenLinie: maskenLinie, laenge: laenge, start: start });
    });
    /* Stapelung der Punkte: Wettbewerber unten, [Marke] darüber, Rauten der
       Idealmarke ganz oben (sonst verdeckt ein naher Kreis die kleine Raute) */
    ['wettbewerb', 'marke', 'ideal'].forEach(function (art) { ebenePunkte.appendChild(punktGruppen[art]); });

    /* Schritt 3: Ring um die Punkte der Marke in den Attribut-Zeilen und – wenn
       der Ø aller Wettbewerber in den Daten steht – ein Strich an dessen
       Stelle plus Abstandslinie bis zur Marke (= der Vorsprung rechts) */
    var marker = u.svg('g', { class: 'rg-schritt3', 'data-schritt': '3', 'data-animation': 'keine' }, ebeneMarker);
    zeilen.forEach(function (r, i) {
      if (!r.attribut) return;
      if (r.mittel !== null) {
        var xm = x(r.mittel), xMarke = x(r.marke);
        var richtung = xMarke >= xm ? 1 : -1;
        var ende = xMarke - richtung * (MASS.ring + 2);
        if ((ende - xm) * richtung > 8) {
          u.svg('path', { class: 'rg-abstand', d: 'M' + xm + ' ' + y(i) + 'H' + ende, 'data-animation': 'zeichnen', 'data-dauer': '700', 'data-verzoegerung': String(380 + i * 90) }, marker);
        }
        var strich = u.svg('path', { class: 'rg-mittel', d: 'M' + xm + ' ' + (y(i) - MASS.mittelStrich) + 'V' + (y(i) + MASS.mittelStrich), 'data-animation': 'einblenden', 'data-verzoegerung': String(200 + i * 90) }, marker);
        u.svg('title', { 'data-meta': '' }, strich).textContent = 'Ø Wettbewerb: ' + u.zahlFormat(r.mittel, 1) + ' (' + r.links + ' – ' + r.rechts + ')';
      }
      u.svg('circle', { class: 'rg-ring', cx: x(r.marke), cy: y(i), r: MASS.ring, 'data-animation': 'feder', 'data-verzoegerung': String(260 + i * 90) }, marker);
    });

    /* ---------- Legende (erscheint mit der jeweiligen Linie) ----------
       Reihenfolge = Zeichenreihenfolge: Idealmarke · Wettbewerber · [Marke];
       so wächst die Legende mit den Linien von links nach rechts. */
    var legende = u.svg('g', { class: 'rg-legende', 'data-meta': '' }, svg);
    var lx = 0;
    var legendeTeile = [];
    reihenDef.forEach(function (def, k) {
      var g = u.svg('g', { 'data-schritt': '2', 'data-animation': 'einblenden', 'data-verzoegerung': String(MASS.linienStart[k]) }, legende);
      u.svg('line', { class: 'rg-linie rg-linie--' + def.art, x1: 0, y1: MASS.legendeY, x2: 52, y2: MASS.legendeY }, g);
      if (def.art === 'ideal') {
        var s = MASS.rauteIdeal - 2;
        u.svg('path', { class: 'rg-punkt rg-punkt--ideal', d: 'M26 ' + (MASS.legendeY - s) + 'l' + s + ' ' + s + 'l' + (-s) + ' ' + s + 'l' + (-s) + ' ' + (-s) + 'z' }, g);
      } else {
        u.svg('circle', { class: 'rg-punkt rg-punkt--' + def.art, cx: 26, cy: MASS.legendeY, r: def.art === 'marke' ? 9 : 8 }, g);
      }
      var text = u.svg('text', { class: 'rg-legende-text' + (def.art === 'marke' ? ' rg-legende-text--marke' : ''), x: 66, y: MASS.legendeY + 8 }, g);
      text.textContent = def.name;
      if (def.art === 'wettbewerb' && d.wettbewerberZusatz) {
        var zusatz = u.svg('tspan', { class: 'rg-legende-zusatz' }, text);
        zusatz.textContent = ' (' + u.markeText(d.wettbewerberZusatz) + ')';
      }
      legendeTeile.push({ g: g, text: text });
    });
    u.messen(buehne, function () {
      legendeTeile.forEach(function (teil) {
        teil.g.setAttribute('transform', 'translate(' + Math.round(lx) + ' 0)');
        lx += 66 + teil.text.getComputedTextLength() + 40;
      });
      if (lx - 40 > profilB) console.warn('[f06] Legende ist breiter als das Profil – Namen bzw. "wettbewerberZusatz" kürzen.');
    });

    /* ---------- Rechte Spalte ---------- */
    var seite = u.element('div', { class: 'rg-seite', style: 'left:' + seiteX + 'px;width:' + seiteB + 'px' }, null, buehne);
    triadeBauen(z, seite, seiteB, d, u);
    ergebnisBauen(z, seite, d, u, { zeileH: zeileH, y: y, unten: unten, dezimalen: dezimalen, mitMittel: zeilen.some(function (r) { return r.attribut && r.mittel !== null; }) });

    /* Beschreibung für Screenreader */
    var bezugText = zeilen.some(function (r) { return r.mittel !== null; }) ? 'Ø Wettbewerb' : reihenDef[1].name;
    var attrText = zeilen.filter(function (r) { return r.attribut; }).map(function (r) {
      return r.attributName + ' (Vorsprung vor ' + bezugText + ' ' + u.zahlFormat(r.vorsprung, dezimalen) + ')';
    }).join(', ');
    buehne.setAttribute('aria-label', 'Repertory Grid, Beispieldaten. Polaritätenprofil auf einer Skala von ' + min + ' bis ' + max +
      ' mit ' + N + ' Konstrukten für ' + reihenDef[2].name + ', ' + reihenDef[1].name + ' und ' + reihenDef[0].name +
      '. Markenattribute: ' + attrText + '.');

    Deck.platzhalterFuellen(buehne);
    return z;
  }

  /* Triade: Frage, drei Karten, Konstrukt darüber */
  function triadeBauen(z, seite, S, d, u) {
    var t = d.triade || {};
    var paar = Array.isArray(t.paar) && t.paar.length >= 2 ? t.paar.slice(0, 2) : ['Marke A', 'Marke B'];
    var einzeln = t.einzeln || '[Marke]';

    var block = u.element('div', { class: 'rg-triade' }, null, seite);
    if (t.frage) u.element('p', { class: 'rg-frage' }, '„' + u.markeText(t.frage) + '“', block);
    var feld = u.element('div', { class: 'rg-triade-feld' }, null, block);
    if (t.notiz) u.element('p', { class: 'rg-triade-notiz', 'data-meta': '' }, u.markeText(t.notiz), block);

    /* Lage der Karten. Vorher: drei Karten mit gleichen Abständen. In
       Schritt 1 rückt das Paar um „weg“ zusammen und die einzelne Karte um
       „weg“ nach rechts. Die Startlage ist so gewählt, dass das Bild NACH dem
       Rücken mittig in der Spalte steht (gleicher Rand links und rechts). */
    var w = MASS.karteBreite;
    var rest = S - 3 * w;                                       // Platz für Lücken und Ränder
    var weg = Math.max(0, Math.min(MASS.karteWeg, Math.floor((rest - 2 * MASS.karteLueckeMin) / 6)));
    var lueckeMin = MASS.karteLueckeMin + 2 * weg;              // Paar braucht nach dem Rücken noch eine Lücke
    var lueckeMax = Math.max(lueckeMin, (rest - 2 * weg) / 2);  // Startlage darf nicht links herausragen
    var luecke = (lueckeMin + lueckeMax) / 2;
    var start = Math.max(0, (rest - 2 * luecke) / 2 - weg);
    var xs = [start, start + w + luecke, start + 2 * (w + luecke)];
    var verschiebung = [weg, -weg, weg];
    var namen = [paar[0], paar[1], einzeln];
    var karten = namen.map(function (name, i) {
      var k = u.element('div', {
        class: 'rg-karte' + (i === 2 ? ' rg-karte--einzeln' : ' rg-karte--paar') + (/\[Marke/.test(name) ? ' rg-karte--marke' : ''),
        style: 'left:' + Math.round(xs[i]) + 'px;width:' + w + 'px;--rg-weg:' + Math.round(verschiebung[i]) + 'px'
      }, null, feld);
      u.element('span', { class: 'rg-karte-name' }, u.markeText(name), k);
      return k;
    });

    /* Konstrukt über den Gruppen (nach dem Rücken) */
    var mitPaar = Math.round((xs[0] + weg + xs[1] - weg + w) / 2);
    var mitEinzeln = Math.round(xs[2] + weg + w / 2);
    var polPaar = u.element('span', { class: 'rg-triade-pol rg-triade-pol--paar', style: 'left:' + mitPaar + 'px', 'data-schritt': '1', 'data-animation': 'hoch', 'data-verzoegerung': '650' }, u.markeText(t.polPaar || ''), feld);
    var polEinzeln = u.element('span', { class: 'rg-triade-pol rg-triade-pol--einzeln', style: 'left:' + mitEinzeln + 'px', 'data-schritt': '1', 'data-animation': 'hoch', 'data-verzoegerung': '750' }, u.markeText(t.polEinzeln || ''), feld);

    /* Klammern über den Gruppen + Doppelpfeil zwischen den Polen */
    var kl = u.svg('svg', { class: 'rg-klammern', width: S, height: 120, viewBox: '0 0 ' + S + ' 120', 'aria-hidden': 'true', 'data-schritt': '1', 'data-animation': 'zeichnen', 'data-verzoegerung': '420', 'data-dauer': '700' }, feld);
    var ky = 66, kh = 10;
    var klammer = function (a, b, art) {
      u.svg('path', { class: 'rg-klammer rg-klammer--' + art, d: 'M' + a + ' ' + (ky + kh) + 'V' + ky + 'H' + b + 'V' + (ky + kh) }, kl);
    };
    klammer(Math.round(xs[0] + weg), Math.round(xs[1] - weg + w), 'paar');
    klammer(Math.round(xs[2] + weg), Math.round(xs[2] + weg + w), 'einzeln');
    u.messen(seite, function () {
      var a = mitPaar + polPaar.offsetWidth / 2 + 16;
      var b = mitEinzeln - polEinzeln.offsetWidth / 2 - 16;
      if (b - a >= 36) {
        var py = 26;
        u.svg('path', { class: 'rg-doppelpfeil', d: 'M' + Math.round(a) + ' ' + py + 'H' + Math.round(b) + 'M' + Math.round(a + 9) + ' ' + (py - 7) + 'L' + Math.round(a) + ' ' + py + 'L' + Math.round(a + 9) + ' ' + (py + 7) + 'M' + Math.round(b - 9) + ' ' + (py - 7) + 'L' + Math.round(b) + ' ' + py + 'L' + Math.round(b - 9) + ' ' + (py + 7) }, kl);
      }
      /* Kartennamen einpassen: möglichst einzeilig (Schrift bis 28 px
         verkleinern); passt es auch dann nicht, darf er umbrechen */
      karten.forEach(function (k) {
        var n = k.firstChild;
        var platz = k.clientWidth - 20;
        var groesse = SCHRIFT_KARTE.start;
        n.style.whiteSpace = 'nowrap';
        n.style.fontSize = groesse + 'px';
        while (groesse > SCHRIFT_KARTE.min && n.scrollWidth > platz) {
          groesse -= 1;
          n.style.fontSize = groesse + 'px';
        }
        if (n.scrollWidth > platz) {
          n.style.whiteSpace = '';
          n.style.fontSize = SCHRIFT_KARTE.start + 'px';
        }
      });
    });
    z.triade = block;
  }

  /* Ergebnis: Markenattribute auf Höhe ihrer Zeilen + Auswahlkriterien.
     Keine Nummern vor den Attributen – sie sähen wie eine Rangfolge aus. */
  function ergebnisBauen(z, seite, d, u, g) {
    var box = u.element('div', { class: 'rg-ergebnis', 'data-schritt': '3', 'data-staffel': '110', 'data-animation': 'links' }, null, seite);
    var kopf = u.element('div', { class: 'rg-ergebnis-kopf', style: 'top:0' }, null, box);
    u.element('span', { class: 'karte-kicker rg-ergebnis-titel' }, u.markeText(d.ergebnisTitel || 'Markenattribute'), kopf);
    if (d.ergebnisErklaerung) {
      var erkl = u.element('span', { class: 'rg-ergebnis-erklaerung', 'data-meta': '' }, null, kopf);
      /* kleines Zeichen wie im Profil: Strich = Ø Wettbewerb, Linie = Abstand */
      if (g.mitMittel) {
        erkl.innerHTML = '<svg class="rg-zeichen" width="34" height="22" viewBox="0 0 34 22" aria-hidden="true">' +
          '<path class="rg-abstand" d="M3 11H31"/><path class="rg-mittel" d="M3 3V19"/></svg>';
      }
      erkl.appendChild(document.createTextNode(u.markeText(d.ergebnisErklaerung)));
    }

    var letzte = -1;
    var namen = [];
    z.zeilen.forEach(function (r, i) {
      if (!r.attribut) return;
      letzte = Math.max(letzte, i);
      var zeile = u.element('div', { class: 'rg-attribut', style: 'top:' + Math.round(g.y(i) - g.zeileH / 2) + 'px;height:' + g.zeileH + 'px' }, null, box);
      namen.push(u.element('span', { class: 'rg-attribut-name' }, r.attributName, zeile));
      u.element('span', {
        class: 'rg-attribut-wert', 'data-animation': 'zaehlen', 'data-ziel': String(r.vorsprung),
        'data-dezimalen': String(g.dezimalen), 'data-vorzeichen': '', 'data-dauer': '900'
      }, u.zahlFormat(r.vorsprung, g.dezimalen, { vorzeichen: true }), zeile);
    });

    /* Attributnamen einpassen: einzeilig, Schrift von 40 bis 28 px. Passt
       der Name auch dann nicht, darf er umbrechen – und die Konsole meldet,
       dass ein Kurzname ("attribut": "Kurzname") besser wäre. */
    u.messen(seite, function () {
      namen.forEach(function (n) {
        var groesse = SCHRIFT_ATTRIBUT.start;
        n.style.whiteSpace = 'nowrap';
        n.style.fontSize = groesse + 'px';
        while (groesse > SCHRIFT_ATTRIBUT.min && n.scrollWidth > n.clientWidth + 1) {
          groesse -= 1;
          n.style.fontSize = groesse + 'px';
        }
        if (n.scrollWidth > n.clientWidth + 1) {
          n.style.whiteSpace = 'normal';
          console.warn('[f06] Attributname „' + n.textContent + '“ ist zu lang für eine Zeile – Kurzname eintragen ("attribut": "Kurzname", höchstens ca. 16 Zeichen).');
          if (n.scrollHeight > g.zeileH - 4) console.warn('[f06] Attributname „' + n.textContent + '“ ragt über seine Zeile hinaus.');
        }
      });
    });

    /* Auswahlkriterien unter der letzten Attribut-Zeile */
    var kriterien = Array.isArray(d.kriterien) ? d.kriterien.slice(0, 3) : [];
    if (kriterien.length) {
      var oben = Math.round(g.y(Math.max(0, letzte)) + g.zeileH / 2 + 28);
      var platz = g.unten - oben;
      var liste = u.element('div', { class: 'rg-kriterien' + (platz < 150 ? ' ist-eng' : ''), style: 'top:' + oben + 'px' }, null, box);
      if (d.kriterienTitel) u.element('span', { class: 'karte-kicker rg-kriterien-titel', 'data-meta': '' }, u.markeText(d.kriterienTitel), liste);
      kriterien.forEach(function (k) {
        var p = u.element('p', { class: 'rg-kriterium' }, null, liste);
        p.innerHTML = u.icon('haken');
        u.element('span', { class: 'rg-kriterium-text' }, u.markeText(k.text || ''), p);
        if (k.erklaerung) u.element('span', { class: 'rg-kriterium-erklaerung', 'data-meta': '' }, u.markeText(k.erklaerung), p);
      });
      u.messen(seite, function () {
        if (liste.offsetTop + liste.offsetHeight > g.unten + 40) console.warn('[f06] Auswahlkriterien ragen unter das Profil – weniger Attribute oder kürzere Kriterien.');
      });
    }
  }


  /* ---------------------------------------------------------------------------
     Linien zeichnen (Schritt 2) – Masken-Kopie wird per Strichversatz
     aufgedeckt. util.animiere beachtet „Bewegung reduzieren“ und Testmodus.
     --------------------------------------------------------------------------- */
  function linienZeichnen(z, u) {
    linienStoppen(z);
    z.reihen.forEach(function (r) {
      var L = Math.ceil(r.laenge) + 60;
      var a = u.animiere(r.maskenLinie, [
        { strokeDasharray: L + ' ' + L, strokeDashoffset: L },
        { strokeDasharray: L + ' ' + L, strokeDashoffset: 0 }
      ], { duration: MASS.linienDauer, delay: r.start, easing: u.kurve(), fill: 'backwards' });
      z.laufend.push(a);
    });
  }
  function linienStoppen(z) {
    z.laufend.forEach(function (a) { try { a.cancel(); } catch (e) { /* egal */ } });
    z.laufend = [];
  }


  /* ---------------------------------------------------------------------------
     Anmeldung bei der Engine
     --------------------------------------------------------------------------- */
  var zustand = null;
  var letzterCtx = null;

  /* Neu bauen, wenn sich der Platz geändert hat (anderes Thema = andere Ränder) */
  function groessePruefen(ctx) {
    ctx = ctx || letzterCtx;
    if (!ctx) return;
    var b = ctx.folie.querySelector('.rg-buehne');
    if (!b) return;
    var m = ctx.util.messen(b, function () { return { B: b.clientWidth, H: b.clientHeight }; });
    if (zustand && Math.abs(m.B - zustand.B) <= 2 && Math.abs(m.H - zustand.H) <= 2) return;
    zustand = aufbauen(ctx);
    Deck.schritteNeu(ctx.folie);
  }

  Deck.registriere('f06', {
    einrichten: function (ctx) {
      letzterCtx = ctx;
      zustand = aufbauen(ctx);
    },
    betreten: function (ctx) {
      letzterCtx = ctx;
      groessePruefen(ctx);
    },
    schritt: function (ctx, n, richtung) {
      if (!zustand) return;
      if (richtung === 'vor' && n === 2) linienZeichnen(zustand, ctx.util);
      else if (richtung !== 'vor') linienStoppen(zustand);
    },
    verlassen: function () {
      if (zustand) linienStoppen(zustand);
    },
    druck: function (ctx) {
      groessePruefen(ctx);
      if (zustand) linienStoppen(zustand);
    }
  });

  /* Nach einem Themenwechsel (Taste T): neu einpassen, sobald die Schriften da sind */
  document.addEventListener('deck:groesse', function () {
    if (!letzterCtx) return;
    groessePruefen(letzterCtx);
  });
})();
