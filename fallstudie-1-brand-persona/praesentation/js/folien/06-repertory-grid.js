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
       mit Vorsprung vor dem Wettbewerber und den drei Auswahlkriterien
   Inhalte ändern Sie NUR in den Daten der Folie – nicht hier.

   RECHENWEG (zum Erklären bei Rückfragen)
     Vorsprung = Mittelwert [Marke] − Mittelwert Wettbewerber auf dem
     Konstrukt (Betrag, eine Nachkommastelle). Liegt die Marke links (Wert
     kleiner), heißt das Attribut wie der linke Pol.

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
    polAbstand: 30,          // Lücke zwischen Polbeschriftung und Skala
    polMinX: 132,            // linke Polbeschriftungen beginnen frühestens hier
    lueckeSeite: 48,         // Abstand zwischen Profil und rechter Spalte
    punktMarke: 11,          // Radius der Punkte [Marke]
    punktWettbewerb: 10,     // Radius der Punkte Wettbewerber
    rauteIdeal: 9,           // halbe Diagonale der Rauten (Idealmarke)
    ring: 21,                // Radius des Rings um Attribut-Punkte (Schritt 3)
    linienDauer: 1100,       // ms – so lange zeichnet sich eine Linie
    linienStart: [450, 1500, 2550], // ms – Start Ideal, Wettbewerber, [Marke]
    zeilenStaffel: 60,       // ms – Versatz der Zeilen in Schritt 2
    karteBreite: 136,        // Breite einer Triaden-Karte
    karteWeg: 18             // so weit rücken die Karten (Jury: Wege ≤ 18 px)
  };

  var SCHRIFT_KARTE = { start: 34, min: 28 };

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

  /* Daten lesen und Zeilen ordnen (Attribute auf Wunsch nach oben) */
  function zeilenAusDaten(d, u) {
    var min = zahl(d.skala && d.skala[0], 1);
    var max = zahl(d.skala && d.skala[1], 7);
    var mitte = (min + max) / 2;
    var liste = d.konstrukte.map(function (k, i) {
      var m = zahl(k.marke, mitte), w = zahl(k.wettbewerb, mitte), id = zahl(k.ideal, mitte);
      var markeRechts = m >= w;
      var name = typeof k.attribut === 'string' && k.attribut.trim()
        ? k.attribut.trim() : grossAnfang(markeRechts ? k.rechts : k.links);
      return {
        nr: i, links: u.markeText(k.links || ''), rechts: u.markeText(k.rechts || ''),
        nennungen: Math.max(0, zahl(k.nennungen, 0)),
        marke: begrenzen(m, min, max), wettbewerb: begrenzen(w, min, max), ideal: begrenzen(id, min, max),
        attribut: !!k.attribut, attributName: name, markeRechts: markeRechts,
        vorsprung: Math.round(Math.abs(m - w) * 10) / 10
      };
    });
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

    /* ---------- SVG-Grundgerüst ---------- */
    var svg = u.svg('svg', { class: 'rg-svg', width: B, height: H, viewBox: '0 0 ' + B + ' ' + H }, buehne);
    var defs = u.svg('defs', {}, svg);
    var ebeneBand = u.svg('g', { class: 'rg-baender' }, svg);
    var ebeneRaster = u.svg('g', { class: 'rg-raster' }, svg);
    var ebeneZeilen = u.svg('g', { class: 'rg-zeilen' }, svg);
    var ebeneReihen = u.svg('g', { class: 'rg-reihen' }, svg);

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
      r.polL = u.svg('text', { class: 'rg-pol rg-pol--links' + (!r.markeRechts ? ' ist-markenpol' : ''), y: y(i) + 10 }, g);
      r.polL.textContent = r.links;
      r.polR = u.svg('text', { class: 'rg-pol rg-pol--rechts' + (r.markeRechts ? ' ist-markenpol' : ''), y: y(i) + 10 }, g);
      r.polR.textContent = r.rechts;
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

    /* Breite der Polbeschriftungen messen → Skala dazwischen einpassen */
    /* gemessen in der fetten Schrift, die in Schritt 1 und 3 zum Einsatz kommt */
    var breiten = u.messen(buehne, function () {
      var l = 0, r = 0;
      buehne.classList.add('rg-messen');
      zeilen.forEach(function (zz) {
        l = Math.max(l, zz.polL.getComputedTextLength());
        r = Math.max(r, zz.polR.getComputedTextLength());
      });
      buehne.classList.remove('rg-messen');
      return { l: l, r: r };
    });
    var x0 = Math.round(Math.max(MASS.polMinX + breiten.l, 120) + MASS.polAbstand);
    var x1 = Math.round(profilB - breiten.r - MASS.polAbstand);
    if (x1 - x0 < 6 * 48) x1 = x0 + 6 * 48;            // Notbremse: Skala nie zu eng
    var x = function (w) { return Math.round(x0 + (x1 - x0) * (w - min) / (max - min)); };
    zeilen.forEach(function (r) {
      r.polL.setAttribute('x', x0 - MASS.polAbstand);
      r.polR.setAttribute('x', x1 + MASS.polAbstand);
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
    kopfN.textContent = 'Nennungen';

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

      var g = u.svg('g', { class: 'rg-reihe rg-reihe--' + def.art, 'data-schritt': '2', 'data-animation': 'keine' }, ebeneReihen);
      u.svg('polyline', { class: 'rg-linie rg-linie--' + def.art, points: punkteText, mask: 'url(#' + maskeId + ')' }, g);

      pkte.forEach(function (p, i) {
        var v = String(Math.round(start + MASS.linienDauer * zeitFuerFortschritt(kurve, bis[i] / laenge)));
        var r = zeilen[i];
        var titel = def.name + ': ' + u.zahlFormat(r[def.wert], 1) + ' (' + r.links + ' – ' + r.rechts + ')';
        var form;
        if (def.art === 'ideal') {
          var s = MASS.rauteIdeal;
          form = u.svg('path', { class: 'rg-punkt rg-punkt--ideal', d: 'M' + p[0] + ' ' + (p[1] - s) + 'l' + s + ' ' + s + 'l' + (-s) + ' ' + s + 'l' + (-s) + ' ' + (-s) + 'z', 'data-animation': 'feder', 'data-verzoegerung': v }, g);
        } else {
          form = u.svg('circle', {
            class: 'rg-punkt rg-punkt--' + def.art, cx: p[0], cy: p[1],
            r: def.art === 'marke' ? MASS.punktMarke : MASS.punktWettbewerb, 'data-animation': 'feder', 'data-verzoegerung': v
          }, g);
        }
        /* Tooltip mit dem genauen Wert (für Rückfragen); zählt nicht als Folientext */
        u.svg('title', { 'data-meta': '' }, form).textContent = titel;
      });
      z.reihen.push({ maskenLinie: maskenLinie, laenge: laenge, start: start });
    });

    /* Schritt 3: Ring um die Punkte der Marke in den Attribut-Zeilen */
    var ringe = u.svg('g', { class: 'rg-ringe', 'data-schritt': '3', 'data-animation': 'keine' }, ebeneReihen);
    zeilen.forEach(function (r, i) {
      if (r.attribut) u.svg('circle', { class: 'rg-ring', cx: x(r.marke), cy: y(i), r: MASS.ring, 'data-animation': 'feder', 'data-verzoegerung': String(260 + i * 90) }, ringe);
    });

    /* ---------- Legende (erscheint mit der jeweiligen Linie) ---------- */
    var legende = u.svg('g', { class: 'rg-legende', 'data-meta': '' }, svg);
    var lx = 0;
    var legendeTeile = [];
    reihenDef.slice().reverse().forEach(function (def) {
      var k = reihenDef.indexOf(def);
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
    });

    /* ---------- Rechte Spalte ---------- */
    var seite = u.element('div', { class: 'rg-seite', style: 'left:' + seiteX + 'px;width:' + seiteB + 'px' }, null, buehne);
    triadeBauen(z, seite, seiteB, d, u);
    ergebnisBauen(z, seite, d, u, { zeileH: zeileH, y: y, unten: unten });

    /* Beschreibung für Screenreader */
    var attrText = zeilen.filter(function (r) { return r.attribut; }).map(function (r) {
      return r.attributName + ' (Vorsprung ' + u.zahlFormat(r.vorsprung, 1) + ')';
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

    /* Lage der Karten: gleiche Abstände; in Schritt 1 rückt das Paar um
       „weg“ zusammen und die einzelne Karte um „wegEinzeln“ nach rechts */
    var w = MASS.karteBreite, rand = 12;
    var luecke = (S - 2 * rand - 3 * w) / 2;
    var weg = Math.max(0, Math.min(MASS.karteWeg, (luecke - 14) / 2));
    var wegEinzeln = Math.min(MASS.karteWeg, rand);
    var xs = [rand, rand + w + luecke, rand + 2 * (w + luecke)];
    var verschiebung = [weg, -weg, wegEinzeln];
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
    var mitEinzeln = Math.round(xs[2] + wegEinzeln + w / 2);
    var polPaar = u.element('span', { class: 'rg-triade-pol rg-triade-pol--paar', style: 'left:' + mitPaar + 'px', 'data-schritt': '1', 'data-animation': 'hoch', 'data-verzoegerung': '650' }, u.markeText(t.polPaar || ''), feld);
    var polEinzeln = u.element('span', { class: 'rg-triade-pol rg-triade-pol--einzeln', style: 'left:' + mitEinzeln + 'px', 'data-schritt': '1', 'data-animation': 'hoch', 'data-verzoegerung': '750' }, u.markeText(t.polEinzeln || ''), feld);

    /* Klammern über den Gruppen + Doppelpfeil zwischen den Polen */
    var kl = u.svg('svg', { class: 'rg-klammern', width: S, height: 120, viewBox: '0 0 ' + S + ' 120', 'aria-hidden': 'true', 'data-schritt': '1', 'data-animation': 'zeichnen', 'data-verzoegerung': '420', 'data-dauer': '700' }, feld);
    var ky = 66, kh = 10;
    var klammer = function (a, b, art) {
      u.svg('path', { class: 'rg-klammer rg-klammer--' + art, d: 'M' + a + ' ' + (ky + kh) + 'V' + ky + 'H' + b + 'V' + (ky + kh) }, kl);
    };
    klammer(Math.round(xs[0] + weg), Math.round(xs[1] - weg + w), 'paar');
    klammer(Math.round(xs[2] + wegEinzeln), Math.round(xs[2] + wegEinzeln + w), 'einzeln');
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

  /* Ergebnis: Markenattribute auf Höhe ihrer Zeilen + Auswahlkriterien */
  function ergebnisBauen(z, seite, d, u, g) {
    var box = u.element('div', { class: 'rg-ergebnis', 'data-schritt': '3', 'data-staffel': '110', 'data-animation': 'links' }, null, seite);
    var kopf = u.element('div', { class: 'rg-ergebnis-kopf', style: 'top:0' }, null, box);
    u.element('span', { class: 'karte-kicker rg-ergebnis-titel' }, u.markeText(d.ergebnisTitel || 'Markenattribute'), kopf);
    if (d.ergebnisErklaerung) u.element('span', { class: 'rg-ergebnis-erklaerung', 'data-meta': '' }, u.markeText(d.ergebnisErklaerung), kopf);

    var letzte = -1, nr = 0;
    z.zeilen.forEach(function (r, i) {
      if (!r.attribut) return;
      nr++;
      letzte = Math.max(letzte, i);
      var zeile = u.element('div', { class: 'rg-attribut', style: 'top:' + Math.round(g.y(i) - g.zeileH / 2) + 'px;height:' + g.zeileH + 'px' }, null, box);
      u.element('span', { class: 'rg-attribut-nr', 'data-meta': '' }, (nr < 10 ? '0' : '') + nr, zeile);
      u.element('span', { class: 'rg-attribut-name' }, r.attributName, zeile);
      u.element('span', {
        class: 'rg-attribut-wert', 'data-animation': 'zaehlen', 'data-ziel': String(r.vorsprung),
        'data-dezimalen': '1', 'data-vorzeichen': '', 'data-dauer': '900'
      }, u.zahlFormat(r.vorsprung, 1, { vorzeichen: true }), zeile);
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
