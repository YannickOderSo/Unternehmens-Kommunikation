/* =============================================================================
   js/folien/07-laddering.js – Skript für Folie f07 „Laddering“
   -----------------------------------------------------------------------------
   Baut aus den Daten der Folie (<script type="application/json" class="daten">
   in folien/07-laddering.html) eine Hierarchical Value Map (HVM) als Leiter:
     • links die vier Ebenen der Means-End-Chain als Sprossen (unten
       Attribute, oben Werte), Beschriftung links neben der Leiter
     • eine helle „Geisterleiter“ zeigt von Anfang an das Ziel; die kräftige
       Leiter wächst Schritt für Schritt nach oben, ein Punkt klettert mit
     • Knoten sitzen auf ihren Sprossen; Verbindungen zeichnen sich von unten
       nach oben, Linienstärke = Anzahl Nennungen (Implikationsmatrix)
     • rechts: Leiterfrage (oben), Startpunkte + Legende (unten) und in
       Schritt 4 die zwei Nutzen-Kästen auf Höhe ihrer Ebene
   Inhalte ändern Sie NUR in den Daten der Folie – nicht hier.

   Zustände der Schritte steuert das CSS über unsichtbare Auslöser
   (.lad-z1 … .lad-z4) – so stimmen Vortrag, Vorschau und Druck überein.
   ============================================================================= */
(function () {
  'use strict';

  /* ---------------------------------------------------------------------------
     Maße in Bühnen-Pixeln (nur bei Bedarf ändern)
     --------------------------------------------------------------------------- */
  var MASS = {
    seiteAnteil: 0.3,        // rechte Spalte = 30 % der Breite …
    seiteMin: 460,           // … aber mindestens 460 px …
    seiteMax: 520,           // … und höchstens 520 px breit
    lueckeSeite: 48,         // Abstand zwischen Leiter und rechter Spalte
    labelAbstand: 30,        // Lücke zwischen Ebenen-Beschriftung und linkem Holm
    knotenRand: 16,          // Knoten bleiben so weit von den Holmen weg
    knotenLuecke: 20,        // Mindestabstand zwischen zwei Knoten einer Ebene
    schriftMin: 28,          // Knoten-Schrift wird höchstens bis hierhin verkleinert
    ueberstand: 0.4,         // Holme ragen so weit (Anteil einer Ebene) über die Sprossen
    linieMin: 3,             // Linienstärke bei „cutoff“ Nennungen
    linieMax: 12,            // Linienstärke bei den meisten Nennungen
    andockAbstand: 22,       // Abstand der Andockpunkte mehrerer Linien an einem Knoten
    kantenStart: 200,        // ms – Verbindungen beginnen nach …
    kantenStaffel: 110,      // ms – Versatz zwischen Verbindungen
    knotenStart: 650,        // ms – Knoten erscheinen nach …
    knotenStaffel: 90        // ms – Versatz zwischen Knoten
  };
  var FARBEN = ['neutral', 'hart', 'weich', 'kern'];

  function zahl(w, standard) {
    var n = parseFloat(w);
    return isNaN(n) ? standard : n;
  }


  /* ---------------------------------------------------------------------------
     Aufbau
     --------------------------------------------------------------------------- */
  function aufbauen(ctx) {
    var folie = ctx.folie, d = ctx.daten, u = ctx.util;
    var buehne = folie.querySelector('.lad-buehne');
    if (!buehne || !d || !Array.isArray(d.ebenen) || !Array.isArray(d.knoten)) return null;
    buehne.textContent = '';

    var masse = u.messen(buehne, function () { return { B: buehne.clientWidth, H: buehne.clientHeight }; });
    var B = Math.round(masse.B), H = Math.round(masse.H);
    if (B < 400 || H < 300) return null;

    var ebenen = d.ebenen.slice(0, 4);
    var E = ebenen.length;
    var ebeneIndex = {};
    ebenen.forEach(function (e, i) { ebeneIndex[e.schluessel] = i; });
    var farbeVon = function (i) {
      var f = ebenen[i] && ebenen[i].farbe;
      return FARBEN.indexOf(f) >= 0 ? f : 'neutral';
    };

    /* Spalten: rechts Frage und Nutzen-Kästen, links die Leiter (bekommt den Rest) */
    var seiteB = Math.round(Math.max(MASS.seiteMin, Math.min(MASS.seiteMax, B * MASS.seiteAnteil)));
    var seiteX = B - seiteB;
    var leiterB = seiteX - MASS.lueckeSeite;

    var ebeneH = H / E;
    var sprosseY = function (k) { return Math.round(H - ebeneH * (k + 0.5)); };

    var z = { B: B, H: H };
    var svg = u.svg('svg', { class: 'lad-svg', width: B, height: H, viewBox: '0 0 ' + B + ' ' + H }, buehne);
    var ebeneGeist = u.svg('g', { class: 'lad-geist' }, svg);
    var ebeneLeiter = u.svg('g', { class: 'lad-leiter' }, svg);
    var ebeneKanten = u.svg('g', { class: 'lad-kanten' }, svg);
    var ebeneOben = u.svg('g', { class: 'lad-oben' }, svg);

    /* ---------- Ebenen-Beschriftung (links) – erst anlegen, dann messen ---------- */
    var labels = ebenen.map(function (e, k) {
      var teile = String(e.name || e.schluessel).split(/\s+/);
      var el = u.element('span', {
        class: 'lad-ebene lad-ebene--' + k + ' lad-ebene--' + farbeVon(k), 'data-meta': '',
        style: 'top:' + sprosseY(k) + 'px'
      }, null, buehne);
      teile.forEach(function (t, i) {
        if (i) el.appendChild(document.createElement('br'));
        el.appendChild(document.createTextNode(t));
      });
      return el;
    });
    var labelB = u.messen(buehne, function () {
      return Math.ceil(Math.max.apply(null, labels.map(function (l) { return l.offsetWidth; }).concat([60])));
    });
    labels.forEach(function (l) { l.style.width = labelB + 'px'; });

    var holmL = labelB + MASS.labelAbstand;
    var holmR = leiterB;
    var oben = Math.max(4, Math.round(sprosseY(E - 1) - ebeneH * MASS.ueberstand));
    var unten = Math.min(H - 4, Math.round(sprosseY(0) + ebeneH * MASS.ueberstand));

    /* ---------- Geisterleiter (ab Schritt 0, hell) ---------- */
    [holmL, holmR].forEach(function (hx) {
      u.svg('line', { class: 'lad-holm-geist', x1: hx, y1: unten, x2: hx, y2: oben }, ebeneGeist);
    });
    for (var k = 0; k < E; k++) {
      u.svg('line', { class: 'lad-sprosse-geist', x1: holmL, y1: sprosseY(k), x2: holmR, y2: sprosseY(k) }, ebeneGeist);
    }

    /* ---------- Kräftige Leiter: wächst je Schritt eine Ebene nach oben ---------- */
    for (var s = 0; s < E; s++) {
      var von = s === 0 ? unten : sprosseY(s - 1);
      var bis = s === E - 1 ? oben : sprosseY(s);
      var attrHolm = { class: 'lad-holm', d: 'M' + holmL + ' ' + von + 'V' + bis + 'M' + holmR + ' ' + von + 'V' + bis };
      var attrSprosse = { class: 'lad-sprosse lad-sprosse--' + s + ' lad-sprosse--' + farbeVon(s), d: 'M' + holmL + ' ' + sprosseY(s) + 'H' + holmR };
      if (s > 0) {
        attrHolm['data-schritt'] = String(s); attrHolm['data-animation'] = 'zeichnen'; attrHolm['data-dauer'] = '700';
        attrSprosse['data-schritt'] = String(s); attrSprosse['data-animation'] = 'zeichnen'; attrSprosse['data-verzoegerung'] = '150'; attrSprosse['data-dauer'] = '800';
      }
      u.svg('path', attrHolm, ebeneLeiter);
      u.svg('path', attrSprosse, ebeneLeiter);
    }

    /* Kletterpunkt am linken Holm: springt per CSS von Sprosse zu Sprosse */
    for (var j = 0; j < E; j++) buehne.style.setProperty('--lad-y' + j, sprosseY(j) + 'px');
    u.svg('circle', { class: 'lad-kletterer', cx: holmL, cy: 0, r: 10 }, ebeneOben);

    /* ---------- Knoten (HTML, sitzen auf ihren Sprossen) ---------- */
    var links = holmL + MASS.knotenRand, rechts = holmR - MASS.knotenRand;
    var knotenNachId = {};
    var proEbene = ebenen.map(function () { return []; });
    d.knoten.forEach(function (kn) {
      var e = ebeneIndex[kn.ebene];
      if (e === undefined || !kn.id) return;
      proEbene[e].push(kn);
    });
    proEbene.forEach(function (liste, e) {
      var slot = (rechts - links) / Math.max(1, liste.length);
      liste.forEach(function (kn, i) {
        var anteil = kn.x !== undefined ? begrenzt(zahl(kn.x, 0.5)) : (i + 0.5) / liste.length;
        var x = Math.round(links + (rechts - links) * anteil);
        var attr = {
          class: 'lad-knoten lad-knoten--' + farbeVon(e) + (e === 0 ? ' lad-knoten--start' : ''),
          style: 'left:' + x + 'px;top:' + sprosseY(e) + 'px;max-width:' + Math.floor(slot - MASS.knotenLuecke) + 'px'
        };
        if (e > 0) {
          attr['data-schritt'] = String(e);
          attr['data-animation'] = 'hoch';
          attr['data-verzoegerung'] = String(MASS.knotenStart + i * MASS.knotenStaffel);
        }
        var el = u.element('span', attr, u.markeText(kn.text || kn.id), buehne);
        knotenNachId[kn.id] = { el: el, x: x, y: sprosseY(e), ebene: e, rein: [], raus: [] };
      });
    });
    /* Knoten einpassen: Mehrwortige Texte brechen (ausgewogen) um. Passt ein
       einzelnes langes Wort nicht, wird erst der Innenabstand enger, dann die
       Schrift kleiner – nie unter MASS.schriftMin (28 px). */
    u.messen(buehne, function () {
      Object.keys(knotenNachId).forEach(function (id) {
        var k = knotenNachId[id], el = k.el;
        var zuBreit = function () { return el.scrollWidth > el.clientWidth + 1; };
        if (zuBreit()) el.classList.add('ist-eng');
        var groesse = parseFloat(getComputedStyle(el).fontSize) || 30;
        while (zuBreit() && groesse > MASS.schriftMin) {
          groesse -= 1;
          el.style.fontSize = groesse + 'px';
        }
        if (zuBreit()) console.warn('[f07] Knoten „' + el.textContent + '“ ist zu lang für seine Spalte – kürzeren Text wählen.');
        k.w = el.offsetWidth;
        k.h = el.offsetHeight;
      });
    });

    /* ---------- Verbindungen (nur ab Cut-off) ---------- */
    var cutoff = zahl(d.cutoff, 1);
    var kanten = (d.verbindungen || []).filter(function (v) {
      var a = knotenNachId[v.von], b = knotenNachId[v.nach];
      return a && b && b.ebene > a.ebene && zahl(v.anzahl, 0) >= cutoff;
    }).map(function (v) {
      return { von: knotenNachId[v.von], nach: knotenNachId[v.nach], anzahl: zahl(v.anzahl, 0), roh: v };
    });
    var maxAnzahl = Math.max.apply(null, kanten.map(function (k) { return k.anzahl; }).concat([cutoff + 1]));
    var staerke = function (n) {
      return Math.round((MASS.linieMin + (MASS.linieMax - MASS.linieMin) * (n - cutoff) / Math.max(1, maxAnzahl - cutoff)) * 10) / 10;
    };

    /* Andockpunkte: mehrere Linien an einem Knoten nebeneinander, nach Richtung sortiert */
    kanten.forEach(function (k) { k.von.raus.push(k); k.nach.rein.push(k); });
    Object.keys(knotenNachId).forEach(function (id) {
      var kn = knotenNachId[id];
      verteilen(kn.raus.sort(function (a, b) { return a.nach.x - b.nach.x; }), kn, 'ax');
      verteilen(kn.rein.sort(function (a, b) { return a.von.x - b.von.x; }), kn, 'bx');
    });
    function verteilen(liste, kn, feld) {
      var n = liste.length;
      var abstand = Math.min(MASS.andockAbstand, (kn.w - 24) / Math.max(1, n));
      liste.forEach(function (k, i) { k[feld] = Math.round(kn.x + (i - (n - 1) / 2) * abstand); });
    }

    /* Zeichnen: Linie beginnt unten (Quelle) und läuft nach oben (Ziel) */
    var reihenfolge = ebenen.map(function () { return 0; });
    kanten.sort(function (a, b) { return a.nach.ebene - b.nach.ebene || a.von.x - b.von.x; });
    kanten.forEach(function (k) {
      var ay = Math.round(k.von.y - k.von.h / 2);
      var by = Math.round(k.nach.y + k.nach.h / 2);
      var mitte = (ay - by) / 2;
      var pfad = 'M' + k.ax + ' ' + ay + 'C' + k.ax + ' ' + Math.round(ay - mitte) + ' ' + k.bx + ' ' + Math.round(by + mitte) + ' ' + k.bx + ' ' + by;
      var e = k.nach.ebene;
      var p = u.svg('path', {
        class: 'lad-kante', d: pfad, 'stroke-width': staerke(k.anzahl),
        'data-schritt': String(e), 'data-animation': 'zeichnen', 'data-dauer': '850',
        'data-verzoegerung': String(MASS.kantenStart + reihenfolge[e]++ * MASS.kantenStaffel)
      }, ebeneKanten);
      u.svg('title', { 'data-meta': '' }, p).textContent =
        k.von.el.textContent + ' → ' + k.nach.el.textContent + ': ' + u.zahlFormat(k.anzahl, 0) + ' Nennungen';
    });

    /* ---------- Rechte Spalte ---------- */
    var seite = u.element('div', { class: 'lad-seite', style: 'left:' + seiteX + 'px;width:' + seiteB + 'px' }, null, buehne);

    /* oben: Leiterfrage */
    if (d.frage) {
      var frage = u.element('div', { class: 'lad-frage-block', style: 'top:' + sprosseY(E - 1) + 'px' }, null, seite);
      u.element('p', { class: 'lad-frage' }, '„' + u.markeText(d.frage) + '“', frage);
      if (d.frageNotiz) u.element('p', { class: 'lad-frage-notiz', 'data-meta': '' }, u.markeText(d.frageNotiz), frage);
    }

    /* unten: Startpunkte + Legende der Linienstärke */
    var start = u.element('div', { class: 'lad-start', 'data-meta': '', style: 'top:' + sprosseY(0) + 'px' }, null, seite);
    if (d.startNotiz) {
      var sn = u.element('p', { class: 'lad-start-notiz' }, null, start);
      sn.innerHTML = u.icon('pfeil-links');
      sn.appendChild(document.createTextNode(' ' + u.markeText(d.startNotiz)));
    }
    if (kanten.length) {
      var leg = u.element('p', { class: 'lad-legende' }, null, start);
      var muster = function (n) {
        var w = staerke(n);
        var s2 = u.svg('svg', { class: 'lad-legende-linie', width: 48, height: 16, viewBox: '0 0 48 16', 'aria-hidden': 'true' }, leg);
        u.svg('line', { x1: 0, y1: 8, x2: 48, y2: 8, 'stroke-width': w }, s2);
        u.element('span', { class: 'lad-legende-zahl' }, u.zahlFormat(n, 0), leg);
      };
      muster(cutoff);
      muster(maxAnzahl);
      u.element('span', { class: 'lad-legende-text' }, u.markeText(d.legende || 'Nennungen'), leg);
    }

    /* Schritt 4: Nutzen-Kästen auf Höhe ihrer Ebene + Pfeile aus der Leiter */
    var nutzen = Array.isArray(d.nutzen) ? d.nutzen : [];
    nutzen.forEach(function (n, i) {
      var e = ebeneIndex[n.ebene];
      if (e === undefined) return;
      var farbe = farbeVon(e);
      var kasten = u.element('article', {
        class: 'lad-nutzen lad-nutzen--' + farbe, style: 'top:' + sprosseY(e) + 'px',
        'data-schritt': String(E), 'data-animation': 'links', 'data-verzoegerung': String(250 + i * 160)
      }, null, seite);
      /* Titel als Kicker (Metaangabe wie .karte-kicker und die Ebenen-Beschriftung
         links), die eigentliche Aussage steht darunter groß */
      u.element('span', { class: 'karte-kicker lad-nutzen-titel', 'data-meta': '' }, u.markeText(n.titel || ''), kasten);
      u.element('span', { class: 'lad-nutzen-text' }, u.markeText(n.text || ''), kasten);
      var py = sprosseY(e);
      var x1 = holmR + 12, x2 = seiteX - 14;
      u.svg('path', {
        class: 'lad-pfeil lad-pfeil--' + farbe,
        d: 'M' + x1 + ' ' + py + 'H' + x2 + 'M' + (x2 - 10) + ' ' + (py - 9) + 'L' + x2 + ' ' + py + 'L' + (x2 - 10) + ' ' + (py + 9),
        'data-schritt': String(E), 'data-animation': 'zeichnen', 'data-dauer': '500', 'data-verzoegerung': String(i * 160)
      }, ebeneOben);
      labels[e].classList.add('ist-nutzen');
    });

    /* Beschreibung für Screenreader */
    var text = 'Hierarchical Value Map als Leiter (Beispieldaten). ' + ebenen.map(function (e, k) {
      return e.name + ': ' + proEbene[k].map(function (kn) { return u.markeText(kn.text); }).join(', ');
    }).join('. ') + '. Stärkste Verbindungen: ' + kanten.slice().sort(function (a, b) { return b.anzahl - a.anzahl; }).slice(0, 3).map(function (k) {
      return k.von.el.textContent + ' → ' + k.nach.el.textContent + ' (' + k.anzahl + ')';
    }).join(', ') + '. ' + nutzen.map(function (n) { return u.markeText(n.titel) + ': ' + u.markeText(n.text); }).join('. ') + '.';
    buehne.setAttribute('aria-label', text);

    Deck.platzhalterFuellen(buehne);
    return z;
  }

  function begrenzt(w) { return Math.max(0, Math.min(1, w)); }


  /* ---------------------------------------------------------------------------
     Anmeldung bei der Engine
     --------------------------------------------------------------------------- */
  var zustand = null;
  var letzterCtx = null;

  /* Neu bauen, wenn sich der Platz geändert hat (anderes Thema = andere Ränder/Schrift) */
  function groessePruefen(ctx) {
    ctx = ctx || letzterCtx;
    if (!ctx) return;
    var b = ctx.folie.querySelector('.lad-buehne');
    if (!b) return;
    var m = ctx.util.messen(b, function () { return { B: b.clientWidth, H: b.clientHeight }; });
    if (zustand && Math.abs(m.B - zustand.B) <= 2 && Math.abs(m.H - zustand.H) <= 2) return;
    zustand = aufbauen(ctx);
    Deck.schritteNeu(ctx.folie);
  }

  Deck.registriere('f07', {
    einrichten: function (ctx) {
      letzterCtx = ctx;
      zustand = aufbauen(ctx);
    },
    betreten: function (ctx) {
      letzterCtx = ctx;
      groessePruefen(ctx);
    },
    druck: function (ctx) { groessePruefen(ctx); }
  });

  /* Nach einem Themenwechsel (Taste T) neu einpassen, sobald die Schriften da sind */
  document.addEventListener('deck:groesse', function () {
    if (letzterCtx) groessePruefen(letzterCtx);
  });
})();
