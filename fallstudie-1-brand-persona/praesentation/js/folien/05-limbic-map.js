/* =============================================================================
   js/folien/05-limbic-map.js – Skript für Folie f05 „Limbic Map“
   -----------------------------------------------------------------------------
   Baut aus den Daten der Folie (<script type="application/json" class="daten">
   in index.html, Folie 05) eine EIGENE, VEREINFACHTE Darstellung in
   Anlehnung an die Limbic® Map nach Häusel (Gruppe Nymphenburg):
     • Kreis mit drei Motivsystemen (Balance, Dominanz, Stimulanz) als farbige
       Sektoren mit weichen Übergängen = Mischbereiche
     • außen: Namen der Systeme und der Mischbereiche
     • innen am Rand: die sieben Limbic Types (Typ der Persona wird markiert)
     • zwei Punkte (Persona, Marke), berechnet aus den Gewichten in %;
       sie fliegen beim Klick aus der Mitte an ihren Platz
     • Verbindungslinie und Kennzahl „größte Lücke“ (oder wahlweise
       „Motiv-Überschneidung“), die Lücke ist in den Gewichtsbalken markiert
     • rechts: Limbic Type, Motive und drei Folgen für die Kommunikation
   „g2l“ = Präfix nur für diese Folie (Folien-Gruppe 2, Limbic Map).
   Inhalte ändern Sie NUR in den Daten der Folie – nicht hier.

   RECHENWEG (zum Erklären bei Rückfragen)
     Jedes System hat eine Richtung (Winkel, 0° = oben, im Uhrzeigersinn).
     Lage eines Profils = gewichteter Mittelwert dieser Richtungen
     („Dreieckskoordinaten“). 33/33/33 % liegt genau in der Mitte. Der Abstand
     von der Mitte wird mit „verstaerkung“ (Standard 2) vergrößert, damit
     Unterschiede sichtbar werden – das ist rein grafisch.
     Größte Lücke = System mit dem größten Unterschied der Gewichte
     (Marke − Persona, in Prozentpunkten).
     Motiv-Überschneidung = Summe der jeweils kleineren Gewichte (eigene
     Vereinfachung, keine Kennzahl von Häusel).
     Die Gewichte selbst sind eine Hypothese des Teams (Dossier 4.4), keine Messung.

   HINWEIS: Lage der Systeme, Mischbereiche und Typen ist nach unserem
   Kenntnisstand aus der Standardliteratur gewählt – mit der Vorlesungsfolie
   abgleichen und bei Bedarf die Winkel in den Daten ändern.
   ============================================================================= */
(function () {
  'use strict';

  /* ---------------------------------------------------------------------------
     Maße der Zeichnung in Bühnen-Pixeln (nur bei Bedarf ändern)
     --------------------------------------------------------------------------- */
  var MASS = {
    radiusMax: 300,          // größter Kreisradius
    aussenAbstand: 16,       // Lücke zwischen Kreisrand und äußeren Beschriftungen
    ring: 50,                // Breite des Rings am Rand, in dem die Limbic Types stehen
    typSchrift: 25,          // Schriftgröße der Typ-Namen im Ring in px (Modellbeschriftung, wie eine Achse)
    bogenSpanne: 48,         // halbe Länge der Schreibbögen für die Typ-Namen in Grad
    punktRand: 30,           // Punkte bleiben so weit vom Ring entfernt
    punktHalb: 18,           // halbe Größe eines Punktes (für die Beschriftung)
    beschriftungLuecke: 10,  // Lücke zwischen Punkt und seiner Beschriftung
    linienKuerzung: 24,      // Verbindungslinie endet so weit vor den Punkten
    uebergang: 22            // halbe Breite der Farbübergänge (Mischbereiche) in Grad
  };

  /* ---------------------------------------------------------------------------
     Geometrie
     --------------------------------------------------------------------------- */

  /* Winkel (Grad, 0 = oben, im Uhrzeigersinn) → Einheitsvektor (x rechts, y unten) */
  function richtung(winkel) {
    var rad = (Number(winkel) || 0) * Math.PI / 180;
    return { x: Math.sin(rad), y: -Math.cos(rad) };
  }

  /* Gewichte in Anteile 0…1 umrechnen (Summe 1); null, wenn nichts eingetragen ist */
  function anteile(eintrag, systeme) {
    if (!eintrag) return null;
    var summe = 0;
    var a = {};
    systeme.forEach(function (s) {
      var w = Math.max(0, Number(eintrag[s.schluessel]) || 0);
      a[s.schluessel] = w;
      summe += w;
    });
    if (!summe) return null;
    systeme.forEach(function (s) { a[s.schluessel] /= summe; });
    return a;
  }

  /* Lage eines Profils: gewichteter Mittelwert der Systemrichtungen (Länge 0…1) */
  function lage(a, systeme) {
    var x = 0;
    var y = 0;
    systeme.forEach(function (s) {
      var r = richtung(s.winkel);
      x += a[s.schluessel] * r.x;
      y += a[s.schluessel] * r.y;
    });
    return { x: x, y: y };
  }

  /* Größte Lücke: System mit dem größten Unterschied (Marke − Persona, −1…1) */
  function groessteLuecke(persona, marke, systeme) {
    var beste = null;
    systeme.forEach(function (s) {
      var diff = marke[s.schluessel] - persona[s.schluessel];
      if (!beste || Math.abs(diff) > Math.abs(beste.diff) + 1e-9) beste = { system: s, diff: diff };
    });
    return beste;
  }

  /* Motiv-Überschneidung: Summe der jeweils kleineren Anteile (0…1) */
  function ueberschneidung(a, b, systeme) {
    return systeme.reduce(function (summe, s) {
      return summe + Math.min(a[s.schluessel], b[s.schluessel]);
    }, 0);
  }

  /* Rechteck um einen Mittelpunkt (Koordinaten relativ zur Kreismitte) */
  function kasten(mx, my, breite, hoehe) {
    return { links: mx - breite / 2, rechts: mx + breite / 2, oben: my - hoehe / 2, unten: my + hoehe / 2 };
  }
  function verschieben(k, dx, dy) {
    return { links: k.links + dx, rechts: k.rechts + dx, oben: k.oben + dy, unten: k.unten + dy };
  }
  /* Abstand der Kreismitte zum nächsten bzw. fernsten Punkt eines Rechtecks */
  function naechsterAbstand(k) {
    return Math.hypot(Math.max(k.links, -k.rechts, 0), Math.max(k.oben, -k.unten, 0));
  }
  function fernsterAbstand(k) {
    return Math.hypot(Math.max(Math.abs(k.links), Math.abs(k.rechts)), Math.max(Math.abs(k.oben), Math.abs(k.unten)));
  }
  function ueberlappung(a, b) {
    var x = Math.min(a.rechts, b.rechts) - Math.max(a.links, b.links);
    var y = Math.min(a.unten, b.unten) - Math.max(a.oben, b.oben);
    return x > 0 && y > 0 ? x * y : 0;
  }

  /* Beschriftung AUSSEN: auf dem Strahl so nah wie möglich an den Kreis,
     ohne ihn zu berühren (Rand = grenze) */
  function aussenLage(dir, breite, hoehe, grenze) {
    var lo = grenze;
    var hi = grenze + breite + hoehe;
    for (var i = 0; i < 32; i++) {
      var m = (lo + hi) / 2;
      if (naechsterAbstand(kasten(dir.x * m, dir.y * m, breite, hoehe)) >= grenze) hi = m;
      else lo = m;
    }
    return kasten(dir.x * hi, dir.y * hi, breite, hoehe);
  }

  /* Farbverlauf der Sektoren (conic-gradient) aus den Winkeln der Systeme.
     Zwischen zwei Systemen liegt die Grenze genau in der Mitte; dort gehen
     die Farben ineinander über (= Mischbereich). */
  function sektorVerlauf(systeme, mitOklab) {
    var s = systeme.slice().sort(function (a, b) { return norm(a.winkel) - norm(b.winkel); });
    var n = s.length;
    if (n < 2) return '';
    var farbe = function (sys) { return 'var(--g2l-farbe-' + sys.schluessel + ', var(--f-flaeche-2))'; };
    var grenzen = s.map(function (sys, i) {
      var naechste = s[(i + 1) % n];
      return norm(sys.winkel + norm(naechste.winkel - sys.winkel) / 2);
    });
    var von = grenzen[n - 1];                       // Grenze zwischen letztem und erstem System
    var rel = function (w) { return norm(w - von); };
    var ue = MASS.uebergang;
    var mischfarbe = 'color-mix(in oklab, ' + farbe(s[n - 1]) + ' 50%, ' + farbe(s[0]) + ')';
    var stopps = [mischfarbe + ' 0deg'];
    s.forEach(function (sys, i) {
      var start = i === 0 ? 0 : rel(grenzen[i - 1]);
      var ende = i === n - 1 ? 360 : rel(grenzen[i]);
      stopps.push(farbe(sys) + ' ' + (start + ue).toFixed(1) + 'deg');
      stopps.push(farbe(sys) + ' ' + (ende - ue).toFixed(1) + 'deg');
    });
    stopps.push(mischfarbe + ' 360deg');
    return 'conic-gradient(' + (mitOklab ? 'in oklab ' : '') + 'from ' + von.toFixed(1) + 'deg, ' + stopps.join(', ') + ')';
  }
  function norm(w) { return ((Number(w) || 0) % 360 + 360) % 360; }

  /* Ein Wort mit „/“ für seitliche Beschriftungen zweizeilig setzen */
  function zweizeilig(el, text) {
    el.textContent = '';
    var teile = String(text).split('/');
    teile.forEach(function (t, i) {
      var zeile = document.createElement('span');
      zeile.className = 'g2l-zeile';
      zeile.textContent = t + (i < teile.length - 1 ? '/' : '');
      el.appendChild(zeile);
    });
  }


  /* ---------------------------------------------------------------------------
     Aufbau (einmal beim Start)
     --------------------------------------------------------------------------- */
  function aufbauen(ctx) {
    var u = ctx.util;
    var d = ctx.daten || {};
    var k = d.karte || {};
    var folie = ctx.folie;
    var karte = folie.querySelector('.g2l-karte');
    if (!karte) return null;

    var z = {
      ctx: ctx,
      karte: karte,
      platz: folie.querySelector('.g2l-platz'),
      systeme: Array.isArray(k.systeme) ? k.systeme : [],
      misch: Array.isArray(k.mischbereiche) ? k.mischbereiche : [],
      typen: Array.isArray(k.typen) ? k.typen : [],
      verstaerkung: Number(k.verstaerkung) > 0 ? Number(k.verstaerkung) : 2,
      aussen: [],      // äußere Beschriftungen: { el, winkel }
      typText: [],     // Typ-Namen im Ring: { text, pfad, bogen (nur Persona-Typ), winkel, oben }
      punkte: []       // Persona und Marke: { el, text, anteile, schritt, schluessel, x, y }
    };
    karte.textContent = '';

    /* --- Scheibe (Sektoren) mit Mittelpunkt --- */
    z.scheibe = u.element('div', { class: 'g2l-scheibe', 'aria-hidden': 'true', 'data-animation': 'zoom', 'data-dauer': '700' }, null, karte);
    /* Über dem Farbverlauf liegt ein heller „Glanz“ zur Mitte hin (--g2l-glanz im
       CSS): außen sind die Farben satt, innen bleiben Punkte und Linie gut lesbar */
    var glanz = 'radial-gradient(circle closest-side, var(--g2l-glanz) 0%, transparent 78%), ';
    z.scheibe.style.backgroundImage = glanz + sektorVerlauf(z.systeme, false);
    z.scheibe.style.backgroundImage = glanz + sektorVerlauf(z.systeme, true);   // genauer, falls der Browser es kann
    u.element('span', { class: 'g2l-mitte', 'data-animation': 'einblenden', 'data-verzoegerung': '300' }, null, z.scheibe);

    /* --- Ring am Rand mit den Limbic Types (Schrift folgt dem Kreis) ---
       Obere Hälfte: Bogen im Uhrzeigersinn, untere Hälfte: gegen den
       Uhrzeigersinn – so steht keine Schrift auf dem Kopf. */
    z.ring = u.svg('svg', { class: 'g2l-ring', 'data-meta': '' }, z.scheibe);
    z.ring.style.fontSize = MASS.typSchrift + 'px';
    var defs = u.svg('defs', {}, z.ring);
    z.ringFlaeche = u.svg('circle', { class: 'g2l-ring-flaeche', cx: 0, cy: 0 }, z.ring);
    z.ringKante = u.svg('circle', { class: 'g2l-ring-kante', cx: 0, cy: 0 }, z.ring);
    var personaTyp = String(d.limbicType || '').trim().toLowerCase();
    z.typen.forEach(function (t, i) {
      var w = norm(t.winkel);
      /* Leserichtung: oben im Uhrzeigersinn (Köpfe außen), unten gegen den
         Uhrzeigersinn (Köpfe innen); an den Seiten immer von unten nach oben */
      var cos = Math.cos(w * Math.PI / 180);
      var oben = cos > 0.25 || (Math.abs(cos) <= 0.25 && w > 180);
      var pfad = u.svg('path', { id: 'g2l-bogen-' + i }, defs);
      var istPersona = !!personaTyp && String(t.name).trim().toLowerCase() === personaTyp;
      /* Markierung des Persona-Typs: kräftiger Bogen auf dem Rand (ab Schritt 1 sichtbar) */
      var bogen = istPersona ? u.svg('path', { class: 'g2l-typbogen' }, z.ring) : null;
      var text = u.svg('text', {
        class: 'g2l-typtext' + (istPersona ? ' ist-persona-typ' : ''),
        'data-animation': 'einblenden',
        'data-verzoegerung': String(380 + i * 60)
      }, z.ring);
      var tp = u.svg('textPath', { href: '#g2l-bogen-' + i, startOffset: '50%', 'text-anchor': 'middle' }, text);
      tp.textContent = t.name;
      z.typText.push({ text: text, pfad: pfad, bogen: bogen, winkel: w, oben: oben });
    });

    /* --- äußere Beschriftungen: Systeme (groß) und Mischbereiche (kursiv) ---
       Reihenfolge der Einblendung: im Uhrzeigersinn ab oben */
    var aussen = z.systeme.map(function (s) { return { art: 'system', name: s.name, winkel: s.winkel, schluessel: s.schluessel }; })
      .concat(z.misch.map(function (m) { return { art: 'misch', name: m.name, winkel: m.winkel }; }))
      .sort(function (a, b) { return norm(a.winkel) - norm(b.winkel); });
    aussen.forEach(function (a, i) {
      var dir = richtung(a.winkel);
      var seitlich = Math.abs(dir.x) > 0.35;
      var el = u.element('span', {
        class: 'g2l-aussen g2l-aussen--' + a.art + (seitlich ? (dir.x > 0 ? ' ist-rechts' : ' ist-links') : ' ist-mitte'),
        'data-animation': 'einblenden',
        'data-verzoegerung': String(200 + i * 80)
      }, null, karte);
      if (a.art === 'misch') {
        el.setAttribute('data-meta', '');      // Modellbeschriftung wie eine Achse (zählt nicht zum Wortbudget)
        if (seitlich) zweizeilig(el, a.name);
        else el.textContent = a.name;
      } else {
        u.element('span', { class: 'g2l-farbpunkt', 'aria-hidden': 'true', style: 'background: var(--g2l-stark-' + a.schluessel + ', var(--f-text-2))' }, null, el);
        u.element('span', {}, a.name, el);
      }
      z.aussen.push({ el: el, winkel: a.winkel });
    });

    /* --- Verbindungslinie (Schritt 2), liegt unter den Punkten --- */
    z.svg = u.svg('svg', { class: 'g2l-linien', 'aria-hidden': 'true' }, karte);
    var gruppe = u.svg('g', { 'data-schritt': '2', 'data-animation': 'zeichnen', 'data-verzoegerung': '850', 'data-dauer': '700' }, z.svg);
    z.linie = u.svg('line', { class: 'g2l-verbindung' }, gruppe);

    /* --- Punkte: Persona (Schritt 1, Kreis) und Marke (Schritt 2, Raute) --- */
    [
      { schluessel: 'persona', schritt: 1, daten: d.persona, standard: 'Persona' },
      { schluessel: 'marke', schritt: 2, daten: d.marke, standard: '[Marke]' }
    ].forEach(function (p) {
      var a = anteile(p.daten, z.systeme);
      if (!a) return;
      var el = u.element('div', {
        class: 'g2l-punkt g2l-punkt--' + p.schluessel,
        'data-schritt': String(p.schritt),
        'data-animation': 'keine'          // die Bewegung übernimmt dieses Skript (Flug aus der Mitte)
      }, null, karte);
      u.element('span', { class: 'g2l-punkt-form', 'aria-hidden': 'true' }, null, el);
      var text = u.element('span', { class: 'g2l-punkt-text', 'data-animation': 'einblenden', 'data-verzoegerung': '650' },
        u.markeText((p.daten && p.daten.beschriftung) || p.standard), el);
      z.punkte.push({ el: el, text: text, anteile: a, schritt: p.schritt, schluessel: p.schluessel });
    });

    return z;
  }


  /* ---------------------------------------------------------------------------
     Anordnen (beim Start und nach jedem Themenwechsel, weil sich dann die
     Schriftbreiten ändern). Alle Maße in Bühnen-Pixeln.
     --------------------------------------------------------------------------- */
  function anordnen(z) {
    var u = z.ctx.util;
    u.messen(z.karte, function () {
      var W = z.platz.clientWidth;
      var H = z.platz.clientHeight;
      if (!W || !H) return;

      /* Größen der Beschriftungen messen */
      var aussenMasse = z.aussen.map(function (a) { return { b: a.el.offsetWidth, h: a.el.offsetHeight }; });
      var textMasse = z.punkte.map(function (p) { return { b: p.text.offsetWidth, h: p.text.offsetHeight }; });

      /* Größter Radius, bei dem Kreis + äußere Beschriftungen in den Platz passen */
      var R = Math.min(MASS.radiusMax, W / 2, H / 2);
      var aussenKaesten = [];
      var huelle = null;
      for (var versuch = 0; versuch < 80; versuch++) {
        aussenKaesten = z.aussen.map(function (a, i) {
          return aussenLage(richtung(a.winkel), aussenMasse[i].b, aussenMasse[i].h, R + MASS.aussenAbstand);
        });
        huelle = { links: -R, rechts: R, oben: -R, unten: R };
        aussenKaesten.forEach(function (k) {
          huelle.links = Math.min(huelle.links, k.links);
          huelle.rechts = Math.max(huelle.rechts, k.rechts);
          huelle.oben = Math.min(huelle.oben, k.oben);
          huelle.unten = Math.max(huelle.unten, k.unten);
        });
        var zuBreit = (huelle.rechts - huelle.links) - W;
        var zuHoch = (huelle.unten - huelle.oben) - H;
        if (zuBreit <= 0 && zuHoch <= 0) break;
        R -= Math.max(2, Math.max(zuBreit, zuHoch) / 2);
      }
      R = Math.floor(R);
      z.R = R;

      /* Kreismitte: Hülle waagerecht und senkrecht im Platz zentrieren */
      var cx = Math.round((W - (huelle.rechts - huelle.links)) / 2 - huelle.links);
      var cy = Math.round((H - (huelle.unten - huelle.oben)) / 2 - huelle.oben);
      z.cx = cx;
      z.cy = cy;
      z.karte.style.width = W + 'px';
      z.karte.style.height = H + 'px';

      /* Scheibe */
      setze(z.scheibe, cx - R, cy - R);
      z.scheibe.style.width = z.scheibe.style.height = (2 * R) + 'px';

      /* Äußere Beschriftungen */
      z.aussen.forEach(function (a, i) {
        var k = aussenKaesten[i];
        setze(a.el, cx + k.links, cy + k.oben);
      });

      /* Ring mit den Limbic Types (SVG mit Ursprung in der Kreismitte) */
      ringAnordnen(z, R);
      var innen = R - MASS.ring;                     // innerer Rand des Rings

      /* Mittelpunkt ist ein Hindernis für die Beschriftungen der Punkte */
      var hindernisse = [kasten(0, 0, 20, 20)];

      /* Punkte aus den Gewichten (bleiben innerhalb des Rings) */
      var rMax = innen - MASS.punktRand;
      z.punkte.forEach(function (p) {
        var l = lage(p.anteile, z.systeme);
        var x = l.x * z.verstaerkung * R;
        var y = l.y * z.verstaerkung * R;
        var abstand = Math.hypot(x, y);
        if (abstand > rMax) { x *= rMax / abstand; y *= rMax / abstand; }   // Begrenzung, damit Beschriftungen lesbar bleiben
        p.x = x;
        p.y = y;
        setze(p.el, cx + x, cy + y);
        hindernisse.push(kasten(x, y, 2 * MASS.punktHalb, 2 * MASS.punktHalb));
      });

      /* Verbindungslinie (gekürzt, damit sie die Punkte nicht überdeckt) */
      z.svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      z.svg.setAttribute('width', W);
      z.svg.setAttribute('height', H);
      var p1 = z.punkte[0];
      var p2 = z.punkte[1];
      if (p1 && p2) {
        var dx = p2.x - p1.x;
        var dy = p2.y - p1.y;
        var len = Math.hypot(dx, dy) || 1;
        var kuerz = Math.min(MASS.linienKuerzung, len / 3);
        z.linie.setAttribute('x1', u.rund(cx + p1.x + dx / len * kuerz));
        z.linie.setAttribute('y1', u.rund(cy + p1.y + dy / len * kuerz));
        z.linie.setAttribute('x2', u.rund(cx + p2.x - dx / len * kuerz));
        z.linie.setAttribute('y2', u.rund(cy + p2.y - dy / len * kuerz));
        /* Linie als Hindernis (Stützpunkte alle 14 px) */
        for (var s = 0; s <= len; s += 14) {
          hindernisse.push(kasten(p1.x + dx / len * s, p1.y + dy / len * s, 8, 8));
        }
      } else {
        z.linie.parentNode.style.display = 'none';
      }

      /* Beschriftungen der Punkte: erste Lage ohne Überschneidung wählen */
      z.punkte.forEach(function (p, i) {
        var b = textMasse[i].b;
        var h = textMasse[i].h;
        var a = MASS.punktHalb + MASS.beschriftungLuecke;
        var kandidaten = [
          { dx: a, dy: -h / 2 },                 // rechts
          { dx: -a - b, dy: -h / 2 },            // links
          { dx: -b / 2, dy: a - 4 },             // unten
          { dx: -b / 2, dy: -a - h + 4 },        // oben
          { dx: a - 6, dy: a - 10 },             // rechts unten
          { dx: -a - b + 6, dy: a - 10 },        // links unten
          { dx: a - 6, dy: -a - h + 10 },        // rechts oben
          { dx: -a - b + 6, dy: -a - h + 10 }    // links oben
        ];
        /* Die Seite, die von der Kartenmitte weg zeigt, zuerst probieren */
        if (p.x < 0) kandidaten.unshift(kandidaten.splice(1, 1)[0]);
        var beste = null;
        kandidaten.forEach(function (c, nr) {
          var k = { links: p.x + c.dx, rechts: p.x + c.dx + b, oben: p.y + c.dy, unten: p.y + c.dy + h };
          var strafe = 0;
          hindernisse.forEach(function (o) { strafe += ueberlappung(k, o); });
          var drueber = fernsterAbstand(k) - (innen - 6);
          if (drueber > 0) strafe += drueber * 400;
          strafe += nr * 0.5;                    // bei Gleichstand: Reihenfolge der Kandidaten
          if (!beste || strafe < beste.strafe) beste = { strafe: strafe, c: c, k: k };
        });
        setze(p.text, beste.c.dx, beste.c.dy);
        hindernisse.push(beste.k);
      });
    });
  }

  /* Ring: Fläche, Kante, Schreibbögen und Markierung des Persona-Typs */
  function ringAnordnen(z, R) {
    var u = z.ctx.util;
    var B = MASS.ring;
    var mitteRing = R - B / 2;
    var versal = MASS.typSchrift * 0.72;            // ungefähre Höhe der Großbuchstaben
    z.ring.setAttribute('viewBox', (-R) + ' ' + (-R) + ' ' + (2 * R) + ' ' + (2 * R));
    z.ring.setAttribute('width', 2 * R);
    z.ring.setAttribute('height', 2 * R);
    z.ringFlaeche.setAttribute('r', u.rund(mitteRing));
    z.ringFlaeche.setAttribute('stroke-width', B);
    z.ringKante.setAttribute('r', R - B);
    var punkt = function (r, w) { var d = richtung(w); return u.rund(d.x * r) + ' ' + u.rund(d.y * r); };
    z.typText.forEach(function (t) {
      var sp = MASS.bogenSpanne;
      /* Grundlinie so legen, dass die Schrift mittig im Ring steht */
      var r = t.oben ? mitteRing - versal / 2 : mitteRing + versal / 2;
      var d = t.oben
        ? 'M ' + punkt(r, t.winkel - sp) + ' A ' + u.rund(r) + ' ' + u.rund(r) + ' 0 0 1 ' + punkt(r, t.winkel + sp)
        : 'M ' + punkt(r, t.winkel + sp) + ' A ' + u.rund(r) + ' ' + u.rund(r) + ' 0 0 0 ' + punkt(r, t.winkel - sp);
      t.pfad.setAttribute('d', d);
      if (t.bogen) {
        /* Markierung: Bogen auf dem äußeren Rand, so lang wie der Name (+ Luft) */
        var laenge = 0;
        try { laenge = t.text.getComputedTextLength(); } catch (e) { laenge = 0; }
        var halb = (laenge / 2 + 18) / r * 180 / Math.PI;
        var rb = R - 4;
        t.bogen.setAttribute('d', 'M ' + punkt(rb, t.winkel - halb) + ' A ' + rb + ' ' + rb + ' 0 0 1 ' + punkt(rb, t.winkel + halb));
      }
    });
  }

  function setze(el, links, oben) {
    el.style.left = Math.round(links) + 'px';
    el.style.top = Math.round(oben) + 'px';
  }

  /* Flug eines Punktes aus der Kartenmitte an seinen Platz (Federkurve, nur Marker) */
  function fliegen(z, p) {
    var u = z.ctx.util;
    u.animiere(p.el, [{ opacity: 0 }, { opacity: 1 }], { duration: 220, easing: 'linear' });
    u.animiere(p.el, [
      { translate: u.rund(-p.x) + 'px ' + u.rund(-p.y) + 'px', scale: '0.55' },
      { translate: '0px 0px', scale: '1' }
    ], { duration: 1000, easing: u.kurve('feder') });
  }


  /* ---------------------------------------------------------------------------
     Rechte Seite: Texte, Kennzahl, Konsequenzen
     --------------------------------------------------------------------------- */
  function rechteSeite(ctx, z) {
    var u = ctx.util;
    var d = ctx.daten || {};
    var folie = ctx.folie;
    var setzen = function (schluessel, wert) {
      if (wert === undefined || wert === null || wert === '') return;
      folie.querySelectorAll('[data-g2l="' + schluessel + '"]').forEach(function (el) { el.textContent = wert; });
    };
    setzen('limbicType', d.limbicType);
    if (Array.isArray(d.typMotive)) setzen('typMotive', d.typMotive.join(' · '));
    setzen('personaName', d.persona && d.persona.beschriftung);
    var markeName = u.markeText((d.marke && d.marke.beschriftung) || '[Marke]');

    /* Kennzahl: größte Lücke (Standard) oder Motiv-Überschneidung */
    var art = d.kennzahl || (d.ueberschneidungZeigen === false ? 'keine' : 'luecke');
    var fit = folie.querySelector('.g2l-fit');
    var p = z && z.punkte.filter(function (x) { return x.schluessel === 'persona'; })[0];
    var m = z && z.punkte.filter(function (x) { return x.schluessel === 'marke'; })[0];
    var luecke = null;
    if (fit && (!p || !m)) {
      fit.remove();
      fit = null;
    } else if (fit) {
      var zahl = fit.querySelector('.kennzahl-wert');
      var text = fit.querySelector('.g2l-fit-text');
      z.fitWert = Math.round(ueberschneidung(p.anteile, m.anteile, z.systeme) * 100);
      luecke = groessteLuecke(p.anteile, m.anteile, z.systeme);
      var hinweis = 'Gewichte: Hypothese (Dossier 4.4)';
      if (art === 'ueberschneidung') {
        zahl.setAttribute('data-ziel', String(z.fitWert));
        zahl.setAttribute('data-einheit', ' %');
        zahl.textContent = u.zahlFormat(z.fitWert, 0) + ' %';
        text.textContent = 'Motiv-Überschneidung mit ' + markeName;
        hinweis = 'Eigene Kennzahl (Σ min) · ' + hinweis;   // Summe der kleineren Gewichte, nicht von Häusel
        luecke = null;
      } else if (art === 'luecke' && luecke) {
        var pp = Math.round(luecke.diff * 100);
        zahl.setAttribute('data-ziel', String(pp));
        zahl.setAttribute('data-einheit', ' Pp.');
        if (pp > 0) zahl.setAttribute('data-vorzeichen', '');
        zahl.textContent = u.zahlFormat(pp, 0, { vorzeichen: true }) + ' Pp.';
        text.textContent = '';
        u.element('b', {}, luecke.system.name, text);
        text.appendChild(document.createTextNode(' – größte Lücke'));
        hinweis = 'Pp. = Prozentpunkte · ' + hinweis;
      } else {
        zahl.remove();
        text.remove();
        luecke = null;
      }
      setzen('fitHinweis', hinweis);
    }

    /* Gewichte als zwei gestapelte Balken (zeigen, woher die Kennzahl kommt).
       Segmentfarben = Farben der Sektoren auf der Karte; Kürzel = Anfangsbuchstabe. */
    var profile = folie.querySelector('.g2l-profile');
    if (profile && z && p && m) {
      profile.textContent = '';
      [[p, d.persona, 'Persona'], [m, d.marke, '[Marke]']].forEach(function (eintrag) {
        var zeile = u.element('div', { class: 'g2l-profil' }, null, profile);
        u.element('span', { class: 'g2l-profil-name' }, u.markeText((eintrag[1] && eintrag[1].beschriftung) || eintrag[2]), zeile);
        var balken = u.element('span', { class: 'g2l-profil-balken', 'data-animation': 'zeichnen', 'data-dauer': '800' }, null, zeile);
        z.systeme.forEach(function (s) {
          var prozent = Math.round(eintrag[0].anteile[s.schluessel] * 100);
          if (!prozent) return;
          var istLuecke = luecke && luecke.system.schluessel === s.schluessel;   // Lücke markieren
          u.element('span', {
            class: 'g2l-segment' + (istLuecke ? ' ist-luecke' : ''),
            style: 'flex: ' + prozent + ' 1 0; background: var(--g2l-satt-' + s.schluessel + ', var(--f-flaeche-2))',
            title: s.name + ' ' + prozent + ' %'
          }, String(s.name).charAt(0) + '\u202f' + prozent, balken);
        });
      });
    } else if (profile) {
      profile.remove();
    }

    /* Konsequenzen */
    var liste = folie.querySelector('.g2l-folgen-liste');
    var folgen = Array.isArray(d.folgen) ? d.folgen.slice(0, 3) : [];
    if (liste && folgen.length) {
      liste.textContent = '';
      folgen.forEach(function (f, i) {
        var li = u.element('li', { class: 'g2l-folge' }, null, liste);
        u.element('span', { class: 'g2l-folge-nr', 'aria-hidden': 'true' }, String(i + 1), li);
        u.element('span', { class: 'g2l-folge-bereich', 'data-meta': '' }, f.bereich, li);
        u.element('span', { class: 'g2l-folge-text' }, f.text, li);
      });
    }

    /* Beschreibung der Karte für Screenreader */
    if (z && p) {
      var profil = function (x) {
        return z.systeme.map(function (s) { return s.name + ' ' + Math.round(x.anteile[s.schluessel] * 100) + ' %'; }).join(', ');
      };
      var beschreibung = 'Vereinfachte Limbic Map (Hypothese). Persona: ' + profil(p) + (d.limbicType ? ', Limbic Type ' + d.limbicType : '') + '.';
      if (m) beschreibung += ' ' + markeName + ': ' + profil(m) + '.';
      if (luecke) beschreibung += ' Größte Lücke: ' + luecke.system.name + ' ' + u.zahlFormat(Math.round(luecke.diff * 100), 0, { vorzeichen: true }) + ' Prozentpunkte.';
      if (z.fitWert !== undefined) beschreibung += ' Motiv-Überschneidung ' + z.fitWert + ' %.';
      z.karte.setAttribute('aria-label', beschreibung);
    }
  }


  /* ---------------------------------------------------------------------------
     Anmeldung bei der Engine
     --------------------------------------------------------------------------- */
  var zustand = null;

  /* Titel einzeilig halten: Bricht er um (z. B. bei einem längeren
     Markennamen in marke.js), wird er auf --groesse-titel-klein (56 px)
     gesetzt – sonst rückt die Liste „Folgen“ unten in die Quellzeile.
     offsetHeight misst ohne die Skalierung der Bühne. */
  function titelEinpassen(folie) {
    var titel = folie.querySelector('.folie-kopf .titel');
    if (!titel) return;
    titel.classList.remove('titel--klein');
    Deck.util.messen(folie, function () {
      var stil = getComputedStyle(titel);
      var zeile = parseFloat(stil.lineHeight) || parseFloat(stil.fontSize) * 1.2;
      if (titel.offsetHeight > zeile * 1.5) titel.classList.add('titel--klein');
    });
  }

  Deck.registriere('f05', {
    einrichten: function (ctx) {
      titelEinpassen(ctx.folie);
      zustand = aufbauen(ctx);
      rechteSeite(ctx, zustand);
      if (zustand) anordnen(zustand);
    },
    schritt: function (ctx, n, richtungWechsel) {
      if (!zustand || richtungWechsel !== 'vor') return;
      zustand.punkte.forEach(function (p) {
        if (p.schritt === n) fliegen(zustand, p);
      });
    }
  });

  /* Nach einem Themenwechsel (Taste T) neu anordnen – andere Schriften, andere Breiten */
  document.addEventListener('deck:thema', function () {
    if (!zustand) return;
    var neu = function () {
      var folie = document.getElementById('f05');
      if (folie) titelEinpassen(folie);
      anordnen(zustand);
    };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(neu, neu);
    else neu();
  });
})();
