/* =============================================================================
   js/folien/04-persona.js – Skript für Folie f04 „Brand Persona“
   -----------------------------------------------------------------------------
   Baut den Persona-Steckbrief aus den Daten der Folie
   (<script type="application/json" class="daten"> in folien/04-persona.html):
     • Name, Zitat, Bild-Hinweis (und das Bild, falls ein Pfad eingetragen ist)
     • fünf Dimensionen als Blöcke mit Symbol:
         obere Reihe (Schritt 2): die ersten drei Einträge
         untere Reihe (Schritt 3): die übrigen (Mediennutzung mit Balken,
                                    Psychografie mit Werten, Pain und Gain)
     • Markierung „Daten“ / „Annahme“ je Block (sichtbar ab Schritt 4, siehe CSS)
   Inhalte ändern Sie NUR in den Daten der Folie – nicht hier.
   ============================================================================= */
(function () {
  'use strict';

  /* Eigene Symbole dieser Folie (Linien-Icons 24 × 24, Stil wie der Icon-Satz).
     Alle anderen Namen kommen aus dem Icon-Satz der Präsentation (#i-NAME). */
  var EIGENE_ICONS = {
    tasche: '<path d="M5 8h14l-1.2 12H6.2z"/><path d="M9 10V7a3 3 0 0 1 6 0v3"/>'
  };

  /* Symbol als Inline-SVG erzeugen */
  function symbol(name) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'icon');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');
    if (EIGENE_ICONS[name]) {
      svg.innerHTML = EIGENE_ICONS[name];
    } else {
      var use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      use.setAttribute('href', '#i-' + name);
      svg.appendChild(use);
    }
    return svg;
  }

  /* Ein Block (Dimension) mit Kopfzeile: Symbol + Titel + Status-Symbol */
  function block(u, dim, eltern) {
    var status = dim.status === 'daten' ? 'daten' : 'annahme';
    var karte = u.element('article', { class: 'karte g2p-block', 'data-status': status }, null, eltern);
    var kopf = u.element('div', { class: 'g2p-block-kopf' }, null, karte);
    var sym = symbol(dim.icon || 'info');
    sym.classList.add('g2p-block-icon');
    kopf.appendChild(sym);
    u.element('span', { class: 'karte-kicker g2p-block-titel' }, dim.titel, kopf);
    /* Status-Symbol rechts oben (erst ab Schritt 4 sichtbar):
       Daten = Datenbank-Symbol, Annahme = gestrichelter Kreis mit Fragezeichen */
    var marke = u.element('span', {
      class: 'g2p-status',
      role: 'img',
      'aria-label': status === 'daten' ? 'Daten mit Quelle' : 'Annahme'
    }, null, kopf);
    marke.appendChild(symbol(status === 'daten' ? 'daten' : 'annahme'));
    return karte;
  }

  /* Inhalt: Stichwort-Zeilen (erste Zeile größer) */
  function zeilenInhalt(u, dim, karte) {
    (dim.zeilen || []).slice(0, 3).forEach(function (z, i) {
      u.element('span', { class: i === 0 ? 'g2p-zeile g2p-zeile--haupt' : 'g2p-zeile' }, z, karte);
    });
  }

  /* Inhalt: Mini-Balken je Plattform (Länge relativ zum größten Wert) */
  function balkenInhalt(u, dim, karte) {
    var liste = dim.balken || [];
    var max = Math.max.apply(null, liste.map(function (b) { return Number(b.wert) || 0; }).concat([1]));
    if (dim.einheit) {
      u.element('span', { class: 'g2p-einheit', 'data-meta': '' }, dim.einheit, karte.querySelector('.g2p-block-kopf'));
    }
    var tabelle = u.element('div', { class: 'g2p-balken', role: 'list' }, null, karte);
    liste.forEach(function (b) {
      var zeile = u.element('div', {
        class: 'g2p-balken-zeile',
        role: 'listitem',
        'aria-label': b.name + ': ' + b.wert + ' ' + (dim.einheit || '')
      }, null, tabelle);
      u.element('span', { class: 'g2p-balken-name' }, b.name, zeile);
      var spur = u.element('span', { class: 'g2p-balken-spur', 'aria-hidden': 'true' }, null, zeile);
      var anteil = Math.max(4, Math.round((Number(b.wert) || 0) / max * 100));
      u.element('span', {
        class: 'g2p-balken-fuellung',
        style: 'width: ' + anteil + '%',
        'data-animation': 'zeichnen',
        'data-dauer': '900'
      }, null, spur);
      u.element('span', { class: 'g2p-balken-wert', 'data-meta': '', 'aria-hidden': 'true' }, u.zahlFormat(b.wert, 0), zeile);
    });
  }

  /* Inhalt: Werte als Chips, darunter Pain (−) und Gain (+) */
  function psychoInhalt(u, dim, karte) {
    var gruppe = u.element('div', { class: 'g2p-psycho' }, null, karte);
    u.element('span', { class: 'g2p-unterlabel', 'data-meta': '' }, 'Werte', gruppe);
    var chips = u.element('div', { class: 'g2p-werte' }, null, gruppe);
    (dim.werte || []).forEach(function (w) {
      u.element('span', { class: 'chip chip--gross chip--weich' }, w, chips);
    });
    var pg = u.element('div', { class: 'g2p-pg' }, null, gruppe);
    [['pain', 'minus', 'Pain'], ['gain', 'plus', 'Gain']].forEach(function (p) {
      if (!dim[p[0]]) return;
      var zeile = u.element('div', { class: 'g2p-pg-zeile g2p-pg-zeile--' + p[0] }, null, pg);
      var marke = u.element('span', { class: 'g2p-pg-marke', 'data-meta': '' }, null, zeile);
      marke.appendChild(symbol(p[1]));
      u.element('span', {}, p[2], marke);
      u.element('span', { class: 'g2p-pg-text' }, dim[p[0]], zeile);
    });
  }

  Deck.registriere('f04', {
    einrichten: function (ctx) {
      var d = ctx.daten || {};
      var u = ctx.util;
      var folie = ctx.folie;

      /* ---- 1. Texte im Profil ---- */
      var setzen = function (schluessel, wert) {
        if (!wert) return;
        folie.querySelectorAll('[data-g2p="' + schluessel + '"]').forEach(function (el) { el.textContent = wert; });
      };
      setzen('name', d.name);
      if (d.zitat) setzen('zitat', '„' + d.zitat + '“');
      setzen('bildHinweis', d.bildHinweis);

      /* ---- 2. Bild: ist ein Pfad eingetragen, ersetzt es den Platzhalter ---- */
      var figur = folie.querySelector('.g2p-bild');
      if (figur && d.bild) {
        var sil = figur.querySelector('.g2p-silhouette');
        if (sil) sil.remove();
        var img = u.element('img', { class: 'g2p-foto', src: u.pfad(d.bild), alt: 'Persona ' + (d.name || '') + (d.bildHinweis ? ' (' + d.bildHinweis + ')' : '') });
        figur.insertBefore(img, figur.firstChild);
      }

      /* ---- 3. Dimensionen: erste drei oben (Schritt 2), Rest unten (Schritt 3) ---- */
      var oben = folie.querySelector('.g2p-reihe--oben');
      var unten = folie.querySelector('.g2p-reihe--unten');
      var dims = Array.isArray(d.dimensionen) ? d.dimensionen : [];
      if (!oben || !unten || !dims.length) return;
      oben.textContent = '';
      unten.textContent = '';
      dims.forEach(function (dim, i) {
        var karte = block(u, dim, i < 3 ? oben : unten);
        if (dim.balken) balkenInhalt(u, dim, karte);
        else if (dim.werte || dim.pain || dim.gain) psychoInhalt(u, dim, karte);
        else zeilenInhalt(u, dim, karte);
      });
      oben.style.setProperty('--g2p-spalten', String(Math.min(3, dims.length)));
      unten.style.setProperty('--g2p-spalten', String(Math.max(1, dims.length - 3)));
    }
  });
})();
