/* =============================================================================
   js/folien/pfad.js – Thema „Pfad“: Laufleiste, Journey-Raster und Pfad
   -----------------------------------------------------------------------------
   Fallstudie 2 „Customer Journey“ (gestaltungsplan.md 3.5, 3.6, 6, 11.2).
   Angelegt am 03.11.2026 im Workflow „fs2-bau“ (KI-Nachweis FS2, Eintrag 11 /
   Delegation D05), KI-gestützt; Prüfung durch die Gruppe offen.

   Läuft direkt beim Laden (nach deck.js, VOR dem Start der Engine), damit die
   Engine alle erzeugten Elemente mit data-schritt als Aufbauschritte erkennt.

   1. Laufleiste (S. 111) und Foliennummer für jede Folie mit data-lauf:
        data-lauf=""   keine aktive Stufe (Folie 02, Persona = Blickwinkel)
        data-lauf="1"…"5" aktive Stufe · data-lauf="zu" geschlossen (Folie 09)
      Backup-Folien (data-backup) bekommen „Backup“ und die Nummer B1 …
   2. Journey-Raster (Folie 04, 05, 06): Elemente im Container .p-karte tragen
      data-phase (1–5) und data-zeile; dieses Skript setzt sie auf das Raster
      (12 Spalten à 109,33 px, Rinne 32 px, Rand 128 px; Phasen ab Spalte 3,
      je 2 Spalten) und zieht die Linien. Die Maße stehen im JSON der Folie
      (<script class="daten"> → "karte").
   3. Pfad: aus den Kachelmitten berechnet, Linienplan-Stil (waagerecht in der
      Zeile, senkrecht in der Rinnenmitte, Eckradius 34 px), endet spätestens an
      der Satzspiegelkante x = 1792 (Plan 6.2 Nr. 9). JSON → "wege" (zentral,
      neben, offen) bzw. "bruecken" (Folie 05: trägt · wackelt · bricht).
      Verschiebt man eine Kachel (data-phase/data-zeile), folgt der Pfad.
   4. Anzeige-Schalter ?kacheln=rueckfall (öffentlicher Export): jede Kachel
      mit data-status="frei" zeigt ihren Rückfall bzw. den Platzhalter. Der
      Schalter ändert NUR die Anzeige – nicht freigegebene Bilder gehören gar
      nicht ins Repository (Plan 11.2, 11.5).
   ============================================================================= */
(function () {
  'use strict';

  var NS = 'http://www.w3.org/2000/svg';
  var RAND = 128;
  var RINNE = 32;
  var SP = (1664 - 11 * RINNE) / 12;          /* 109,33 px */
  var SCHRITT = SP + RINNE;                   /* 141,33 px */
  var PHASE_B = 2 * SP + RINNE;               /* 250,67 px */
  var SATZKANTE = RAND + 12 * SP + 11 * RINNE; /* 1792 px */
  var RADIUS = 34;
  var SPITZE = 22;

  function spalteX(n) { return RAND + (n - 1) * SCHRITT; }
  function phaseX(k) { return spalteX(3 + (k - 1) * 2); }
  function phaseMitte(k) { return phaseX(k) + PHASE_B / 2; }
  function rinneVor(k) { return phaseX(k) - RINNE / 2; }
  function runde(w) { return Math.round(w * 100) / 100; }
  function alle(sel, wurzel) { return Array.prototype.slice.call((wurzel || document).querySelectorAll(sel)); }
  function setze(el, werte) {
    Object.keys(werte).forEach(function (k) { el.style[k] = runde(werte[k]) + 'px'; });
  }
  function neu(tag, attr, text) {
    var el = document.createElement(tag);
    Object.keys(attr || {}).forEach(function (k) { el.setAttribute(k, attr[k]); });
    if (text !== undefined) el.textContent = text;
    return el;
  }
  function datenVon(folie) {
    var s = folie.querySelector(':scope > script.daten');
    if (!s) return null;
    try { return JSON.parse(s.textContent); } catch (e) {
      console.error('pfad.js: JSON der Folie „' + folie.id + '“ ist fehlerhaft – ' + e.message);
      return null;
    }
  }


  /* ---------------------------------------------------------------------------
     1. LAUFLEISTE UND NUMMER
     --------------------------------------------------------------------------- */
  var SCHRITTE = ['1 Transparenz schaffen', '2 Kundenperspektive verstehen', '3 Kundenerlebnis entwickeln',
    '4 Kundenerlebnis verbessern', '5 Mittel zielorientiert einsetzen'];

  function nummerVon(folie) {
    var m = /^b(\d+)$/.exec(folie.id);
    if (m) return 'B' + m[1];
    m = /^f(\d+)([a-z]*)$/.exec(folie.id);
    return m ? (m[1].length < 2 ? '0' : '') + m[1] + m[2] : '';
  }

  alle('section.folie.p-folie').forEach(function (folie) {
    var hatLauf = folie.hasAttribute('data-lauf');
    var backup = folie.hasAttribute('data-backup');
    if (!hatLauf && !backup) return;
    var vorn = folie.firstChild;
    if (hatLauf) {
      var wert = folie.getAttribute('data-lauf');
      var zu = wert === 'zu';
      var aktiv = zu ? 5 : (parseInt(wert, 10) || 0);
      var lauf = neu('div', {
        class: 'p-lauf' + (zu ? ' ist-geschlossen' : ''),
        'data-meta': '',
        role: 'img',
        'aria-label': 'Touchpoint-Managementprozess (Stenger S. 111)' + (aktiv ? ': Schritt ' + aktiv + ' von 5' : '')
      });
      SCHRITTE.forEach(function (name, i) {
        var n = i + 1;
        var zustand = zu ? (n < 5 ? ' ist-erledigt' : ' ist-aktuell') : (n < aktiv ? ' ist-erledigt' : (n === aktiv ? ' ist-aktuell' : ''));
        var teil = neu('div', { class: 'p-lauf-teil' + zustand });
        teil.appendChild(neu('div', { class: 'p-lauf-name' }, name));
        teil.appendChild(neu('div', { class: 'p-lauf-strich', 'aria-hidden': 'true' }));
        lauf.appendChild(teil);
      });
      folie.insertBefore(lauf, vorn);
    } else {
      folie.insertBefore(neu('p', { class: 'p-backup-marke', 'data-meta': '' }, 'Backup · für Rückfragen'), vorn);
    }
    folie.insertBefore(neu('p', { class: 'p-nummer', 'data-meta': '' }, nummerVon(folie)), vorn);
  });


  /* ---------------------------------------------------------------------------
     2. JOURNEY-RASTER
     --------------------------------------------------------------------------- */
  /* Polylinie aus waagerechten/senkrechten Stücken → SVG-Pfad mit runden Ecken
     (wie die Musterfolie ../_entwuerfe/faden/journey.html) */
  function linie(punkte) {
    var d = 'M ' + runde(punkte[0][0]) + ' ' + runde(punkte[0][1]);
    for (var i = 1; i < punkte.length - 1; i++) {
      var a = punkte[i - 1], b = punkte[i], c = punkte[i + 1];
      var l1 = Math.hypot(b[0] - a[0], b[1] - a[1]), l2 = Math.hypot(c[0] - b[0], c[1] - b[1]);
      if (l1 < 0.5 || l2 < 0.5) continue;
      var r = Math.min(RADIUS, l1 / 2, l2 / 2);
      var p1 = [b[0] - (b[0] - a[0]) / l1 * r, b[1] - (b[1] - a[1]) / l1 * r];
      var p2 = [b[0] + (c[0] - b[0]) / l2 * r, b[1] + (c[1] - b[1]) / l2 * r];
      d += ' L ' + runde(p1[0]) + ' ' + runde(p1[1]) + ' Q ' + runde(b[0]) + ' ' + runde(b[1]) + ' ' + runde(p2[0]) + ' ' + runde(p2[1]);
    }
    var z = punkte[punkte.length - 1];
    return d + ' L ' + runde(z[0]) + ' ' + runde(z[1]);
  }

  function pfadElement(svg, d, klasse, schritt, animation) {
    var p = document.createElementNS(NS, 'path');
    p.setAttribute('d', d);
    p.setAttribute('class', klasse);
    if (schritt) p.setAttribute('data-schritt', String(schritt));
    if (animation) p.setAttribute('data-animation', animation);
    svg.appendChild(p);
    return p;
  }
  /* zentraler Weg: Kontur und Gelb übereinander */
  function wegZeichnen(svg, d, schritt) {
    pfadElement(svg, d, 'kontur', schritt, 'zeichnen');
    pfadElement(svg, d, 'gelb', schritt, 'zeichnen');
  }
  function spitzeZeichnen(svg, x, y, schritt) {
    ['spitze-k', 'spitze-g'].forEach(function (k) {
      var p = document.createElementNS(NS, 'polygon');
      p.setAttribute('points', runde(x - SPITZE) + ',' + runde(y - 17) + ' ' + runde(x) + ',' + runde(y) + ' ' + runde(x - SPITZE) + ',' + runde(y + 17));
      p.setAttribute('class', k);
      if (schritt) p.setAttribute('data-schritt', String(schritt));
      p.setAttribute('data-animation', 'einblenden');
      svg.appendChild(p);
    });
  }

  function linieDiv(karte, klasse, werte, schritt) {
    var el = neu('div', { class: klasse, 'aria-hidden': 'true' });
    setze(el, werte);
    if (schritt) el.setAttribute('data-schritt', String(schritt));
    karte.insertBefore(el, karte.firstChild);
    return el;
  }

  function karteAufbauen(folie) {
    var karte = folie.querySelector('.p-karte[data-karte]');
    if (!karte) return;
    var daten = datenVon(folie) || {};
    var k = daten.karte;
    if (!k) return;
    var orte = {};                                    /* id → Geometrie */

    /* Zeilen: entweder Mitten mit fester Höhe (04, 05) oder Oberkanten (06) */
    var mitten = [], oben = [], unten = k.unten || 0;
    if (k.zeilenOben) {
      oben = k.zeilenOben.slice();
      for (var i = 0; i < oben.length; i++) {
        var naechste = i + 1 < oben.length ? oben[i + 1] : unten;
        mitten.push((oben[i] + naechste) / 2);
      }
    } else {
      mitten = (k.zeilen || []).slice();
      var h = k.zeilenhoehe || 0;
      oben = mitten.map(function (m) { return m - h / 2; });
    }
    function zeilenMitte(r) { return mitten[r - 1]; }
    function zeilenOben(r) { return oben[r - 1]; }
    function zeilenHoehe(r) { return (r < oben.length ? oben[r] : unten) - oben[r - 1]; }

    /* Phasenköpfe */
    alle('.p-phase[data-phase]', karte).forEach(function (el) {
      var p = +el.getAttribute('data-phase');
      setze(el, { left: phaseX(p), top: k.kopfY });
    });
    /* Linien: Regel unter dem Kopf, Zeilengrenzen, Phasentrenner */
    linieDiv(karte, 'p-regel', { left: RAND, top: k.regelY, width: SATZKANTE - RAND });
    if (!k.ohneRaster) {
      var grenzen = k.gruppenGrenzen || [];
      for (var z = 1; z < mitten.length; z++) {
        var y = k.zeilenOben ? oben[z] : (mitten[z - 1] + mitten[z]) / 2;
        linieDiv(karte, 'p-linie' + (grenzen.indexOf(z) >= 0 ? ' p-linie--gruppe' : ''), { left: RAND, top: y - 1, width: SATZKANTE - RAND });
      }
      linieDiv(karte, 'p-linie', { left: RAND, top: unten - 1, width: SATZKANTE - RAND });
      for (var t = 2; t <= 5; t++) {
        linieDiv(karte, 'p-trenner', { left: rinneVor(t) - 1, top: k.regelY + 2, height: unten - k.regelY - 2 });
      }
    }
    /* Zeilennamen (senkrecht mittig in ihrer Zeile) */
    alle('.p-zeile[data-zeile]', karte).forEach(function (el) {
      var r = +el.getAttribute('data-zeile');
      setze(el, { left: RAND, top: zeilenMitte(r) });
      el.style.transform = 'translateY(-50%)';
    });

    /* Kacheln und Leerstellen: mittig in Phase und Zeile */
    var kw = (k.kachel || [200, 112])[0], kh = (k.kachel || [200, 112])[1];
    alle('.p-kachel[data-phase], .p-leerstelle[data-phase]', karte).forEach(function (el) {
      var p = +el.getAttribute('data-phase'), r = +el.getAttribute('data-zeile') || 1;
      var x = phaseMitte(p) - kw / 2, y = zeilenMitte(r) - kh / 2;
      setze(el, { left: x, top: y, width: kw, height: kh });
      var id = el.getAttribute('data-id');
      if (id) orte[id] = { x: x + kw / 2, y: y + kh / 2, l: x, r: x + kw, t: y, b: y + kh, phase: p };
    });
    /* Stationsnamen unter (oder mit data-lage="oben" über) ihrer Kachel */
    alle('.p-kachel-name[data-zu]', karte).forEach(function (el) {
      var o = orte[el.getAttribute('data-zu')];
      if (!o) return;
      if (el.getAttribute('data-lage') === 'oben') {
        setze(el, { left: o.l, top: o.t - 6 });
        el.style.transform = 'translateY(-100%)';
      } else {
        setze(el, { left: o.l, top: o.b + 6 });
      }
    });

    /* Touchpoints im SOLL-Raster (Folie 06): Knoten + Name, gestapelt je Zelle */
    var zellen = {};
    alle('.e6-tp[data-phase]', karte).forEach(function (el) {
      var schluessel = el.getAttribute('data-phase') + '/' + el.getAttribute('data-zeile');
      (zellen[schluessel] = zellen[schluessel] || []).push(el);
    });
    Object.keys(zellen).forEach(function (schluessel) {
      var liste = zellen[schluessel].sort(function (a, b) { return (+a.getAttribute('data-reihe') || 1) - (+b.getAttribute('data-reihe') || 1); });
      var p = +liste[0].getAttribute('data-phase'), r = +liste[0].getAttribute('data-zeile');
      var hoehen = liste.map(function (el) {
        var zeilen = el.querySelectorAll('br').length + 1;
        var knoten = el.getAttribute('data-platz') === '1' ? 52 : 36;
        return Math.max(knoten, zeilen * 31);
      });
      var gesamt = hoehen.reduce(function (s, h2) { return s + h2; }, 0) + 6 * (liste.length - 1);
      var y = zeilenOben(r) + (zeilenHoehe(r) - gesamt) / 2;
      liste.forEach(function (el, i) {
        var hoehe = hoehen[i];
        setze(el, { left: phaseX(p), top: y, height: hoehe });
        var id = el.getAttribute('data-id');
        var nx = phaseX(p) + 26, ny = y + hoehe / 2;
        if (id) orte[id] = { x: nx, y: ny, l: nx - 26, r: nx + 26, t: ny - 26, b: ny + 26, phase: p };
        y += hoehe + 6;
      });
    });

    /* ---------- Pfad ---------- */
    var wege = daten.wege || [];
    var bruecken = daten.bruecken || [];
    if (!wege.length && !bruecken.length) return;
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('class', 'p-pfad');
    svg.setAttribute('viewBox', '0 0 1920 1080');
    svg.setAttribute('aria-hidden', 'true');
    karte.insertBefore(svg, karte.firstChild);

    function ort(id) {
      if (!orte[id]) console.error('pfad.js: Station „' + id + '“ fehlt auf Folie ' + folie.id);
      return orte[id] || { x: 0, y: 0, l: 0, r: 0, t: 0, b: 0, phase: 1 };
    }
    /* Koordinate aus dem JSON: Zahl oder „mitte:k1“, „rechts:k4“, „links:k4“, „rinne:4“, „phase:2“ */
    function wertX(w) {
      if (typeof w === 'number') return w;
      var teile = String(w).split(':');
      if (teile[0] === 'rinne') return rinneVor(+teile[1]);
      if (teile[0] === 'phase') return phaseMitte(+teile[1]);
      var o = ort(teile[1]);
      return teile[0] === 'rechts' ? o.r : teile[0] === 'links' ? o.l : o.x;
    }
    function wertY(w) {
      if (typeof w === 'number') return w;
      var teile = String(w).split(':');
      var o = ort(teile[1]);
      return teile[0] === 'oben' ? o.t : teile[0] === 'unten' ? o.b : o.y;
    }

    wege.forEach(function (weg) {
      var schritt = weg.schritt || 0;
      if (weg.art === 'zentral' && weg.stationen) {
        var punkte = [];
        weg.stationen.forEach(function (id, i) {
          var b = ort(id);
          if (i === 0) { punkte.push([b.x, b.y]); return; }
          var a = punkte[punkte.length - 1];
          if (Math.abs(a[1] - b.y) > 0.5) {
            var xr = rinneVor(b.phase);
            punkte.push([xr, a[1]], [xr, b.y]);
          }
          punkte.push([b.x, b.y]);
        });
        if (weg.ende === 'spitze') {
          var letzter = punkte[punkte.length - 1];
          var ende = SATZKANTE - 4;
          punkte.push([ende - SPITZE + 2, letzter[1]]);
          wegZeichnen(svg, linie(punkte), schritt);
          spitzeZeichnen(svg, ende, letzter[1], schritt);
        } else {
          wegZeichnen(svg, linie(punkte), schritt);
        }
      } else if (weg.art === 'neben' && weg.punkte) {
        var pp = weg.punkte.map(function (q) { return [wertX(q[0]), wertY(q[1])]; });
        pfadElement(svg, linie(pp), 'neben', schritt, 'zeichnen');
      } else if (weg.art === 'offen' && weg.von) {
        /* offenes Ende des Nebenwegs: endet vor der Rinne, zwei kurze Reste (3.6) */
        var o = ort(weg.von);
        var xr2 = rinneVor(o.phase + 1);
        pfadElement(svg, 'M ' + runde(o.r) + ' ' + runde(o.y) + ' L ' + runde(xr2 - 10) + ' ' + runde(o.y), 'neben', schritt, 'zeichnen');
        pfadElement(svg, 'M ' + runde(xr2 + 6) + ' ' + runde(o.y) + ' L ' + runde(xr2 + 18) + ' ' + runde(o.y) +
          ' M ' + runde(xr2 + 32) + ' ' + runde(o.y) + ' L ' + runde(xr2 + 36) + ' ' + runde(o.y), 'neben neben-rest', schritt, 'einblenden');
      }
    });

    /* Folie 05: Grundlinie (Haarlinie, nur Deko) und die vier Brücken */
    if (bruecken.length) {
      var erste = ort(bruecken[0].von), letzte = ort(bruecken[bruecken.length - 1].nach);
      pfadElement(svg, 'M ' + runde(erste.x) + ' ' + runde(erste.y) + ' L ' + runde(letzte.x) + ' ' + runde(letzte.y), 'haar', 0, null);
      bruecken.forEach(function (br) {
        var a = ort(br.von), b = ort(br.nach), y = a.y, xr = rinneVor(b.phase), s = br.schritt || 0;
        if (br.urteil === 'traegt') {
          wegZeichnen(svg, 'M ' + runde(a.x) + ' ' + y + ' L ' + runde(b.x) + ' ' + y, s);
        } else if (br.urteil === 'bricht') {
          wegZeichnen(svg, 'M ' + runde(a.x) + ' ' + y + ' L ' + runde(xr - 18) + ' ' + y, s);
          wegZeichnen(svg, 'M ' + runde(xr - 2) + ' ' + y + ' L ' + runde(xr + 8) + ' ' + y, s);
          wegZeichnen(svg, 'M ' + runde(xr + 22) + ' ' + y + ' L ' + runde(xr + 24) + ' ' + y, s);
        } else if (br.urteil === 'wackelt') {
          /* zwei Stücke, 12 px gegeneinander versetzt */
          wegZeichnen(svg, 'M ' + runde(a.x) + ' ' + y + ' L ' + runde(xr + 6) + ' ' + y, s);
          wegZeichnen(svg, 'M ' + runde(xr - 6) + ' ' + (y + 12) + ' L ' + runde(b.x) + ' ' + (y + 12), s);
        }
      });
    }
  }

  alle('section.folie.p-folie').forEach(karteAufbauen);


  /* ---------------------------------------------------------------------------
     4. ANZEIGE-SCHALTER ?kacheln=rueckfall (öffentliche Fassung, Export)
     --------------------------------------------------------------------------- */
  if (new URLSearchParams(location.search).get('kacheln') === 'rueckfall') {
    alle('.p-kachel[data-status="frei"]').forEach(function (el) {
      el.setAttribute('data-status', el.querySelector('.p-rueckfall') ? 'rueckfall' : 'offen');
    });
  }
})();
