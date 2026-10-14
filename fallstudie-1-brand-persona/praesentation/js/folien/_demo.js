/* =============================================================================
   js/folien/_demo.js – Beispiel für ein Folien-Skript (gehört zu folien/_demo.html)
   -----------------------------------------------------------------------------
   Zeigt, wie eine Folie ihre Grafik aus Daten baut:
     1. Die Daten stehen in der Folie: <script type="application/json" class="daten">
     2. Deck.registriere('d06', { einrichten(ctx) { … } }) baut daraus ein SVG.
     3. Elemente bekommen data-schritt / data-animation – die Engine blendet sie
        dann Schritt für Schritt ein (vor und zurück), auch im Druck.
   zusammenbauen.py bindet diese Datei automatisch ein, weil sie genauso heißt
   wie die Folien-Datei (_demo.html → js/folien/_demo.js).
   Alle Werte sind BEISPIELDATEN.
   ============================================================================= */
(function () {
  'use strict';

  Deck.registriere('d06', {
    /* einrichten: einmal beim Start, bevor die Schritte gezählt werden */
    einrichten: function (ctx) {
      var daten = ctx.daten;                     // geparstes JSON aus <script class="daten">
      var ziel = ctx.folie.querySelector('.demo-profil-grafik');
      if (!daten || !ziel) return;
      var u = ctx.util;

      /* Maße der Grafik in Bühnen-Pixeln (1 SVG-Einheit = 1 px auf der Bühne) */
      var B = 1090;
      var zeilenH = 92;
      var oben = 96;                             // Platz für Legende und Skala
      var H = oben + daten.zeilen.length * zeilenH + 8;
      var x0 = 262, x1 = B - 262;                // Skala von 1 bis 7
      var min = daten.skala[0], max = daten.skala[1];
      var x = function (w) { return u.rund(x0 + (x1 - x0) * (w - min) / (max - min)); };
      var y = function (i) { return u.rund(oben + zeilenH * i + zeilenH / 2); };

      var s = u.svg('svg', {
        class: 'pp', viewBox: '0 0 ' + B + ' ' + H, width: B, height: H, role: 'img',
        'aria-label': 'Polaritätenprofil mit Beispieldaten: Marke, Wettbewerber und Ideal auf einer Skala von ' + min + ' bis ' + max
      }, ziel);

      /* Schritt 4: Band hinter den abgeleiteten Attributen (oben gruppiert, 01–03) */
      var attribute = [];
      daten.zeilen.forEach(function (z, i) { if (z.attribut) attribute.push(i); });
      if (attribute.length) {
        var band = u.svg('g', { 'data-schritt': '4', 'data-animation': 'einblenden' }, s);
        u.svg('rect', { class: 'pp-band', x: 0, y: y(attribute[0]) - zeilenH / 2 + 4, width: B, height: attribute.length * zeilenH - 8, rx: 6 }, band);
        attribute.forEach(function (i, n) {
          u.svg('text', { class: 'pp-nr', x: 14, y: y(i) + 8 }, band).textContent = '0' + (n + 1);
        });
      }

      /* Raster (ohne Schritt – erscheint mit der Folie) */
      var raster = u.svg('g', { class: 'pp-raster' }, s);
      for (var w = min; w <= max; w++) {
        u.svg('line', { x1: x(w), y1: oben - 8, x2: x(w), y2: H - 8 }, raster);
        u.svg('text', { class: 'pp-skala', x: x(w), y: oben - 20 }, raster).textContent = String(w);
      }
      daten.zeilen.forEach(function (z, i) {
        u.svg('text', { class: 'pp-pol pp-pol--links', x: x0 - 28, y: y(i) + 10 }, raster).textContent = z.links;
        u.svg('text', { class: 'pp-pol pp-pol--rechts', x: x1 + 28, y: y(i) + 10 }, raster).textContent = z.rechts;
      });

      /* Legende oben (Strichart + Marker unterscheiden die Reihen, nicht nur Farbe) */
      var legende = u.svg('g', { class: 'pp-legende' }, s);
      [['marke', 'Marke', 3], ['wettbewerb', 'Wettbewerber', 2], ['ideal', 'Ideal', 1]].forEach(function (r, i) {
        var lx = x0 + i * 230;
        var g = u.svg('g', { 'data-schritt': String(r[2]), 'data-animation': 'einblenden' }, legende);
        u.svg('line', { class: 'pp-' + r[0], x1: lx, y1: 22, x2: lx + 54, y2: 22 }, g);
        u.svg('text', { class: 'pp-legende-text', x: lx + 68, y: 30 }, g).textContent = r[1];
      });

      /* Linien: Schritt 1 Ideal, Schritt 2 Wettbewerber, Schritt 3 Marke */
      function reihe(schluessel, schritt, punktKlasse) {
        var punkte = daten.zeilen.map(function (z, i) { return x(z[schluessel]) + ',' + y(i); }).join(' ');
        var g = u.svg('g', { 'data-schritt': String(schritt), 'data-animation': 'zeichnen' }, s);
        u.svg('polyline', { class: 'pp-' + schluessel, points: punkte }, g);
        if (punktKlasse) {
          daten.zeilen.forEach(function (z, i) {
            /* Punkte federn einzeln herein (echte Federkurve, gestaffelt) */
            u.svg('circle', { class: punktKlasse, cx: x(z[schluessel]), cy: y(i), r: 11,
              'data-animation': 'feder', 'data-verzoegerung': String(200 + i * 70) }, g);
          });
        }
      }
      reihe('ideal', 1, null);
      reihe('wettbewerb', 2, 'pp-punkt-wettbewerb');
      reihe('marke', 3, 'pp-punkt-marke');
    }
  });
})();
