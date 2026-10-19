/* =============================================================================
   js/folien/04-persona.js – Skript für Folie f04 „Brand Persona“
   -----------------------------------------------------------------------------
   Baut den Persona-Steckbrief aus den Daten der Folie
   (<script type="application/json" class="daten"> in index.html, Folie 04):
     • Titel, Name, Zitat, Bild-Hinweis (und das Bild, falls ein Pfad eingetragen ist)
     • fünf Dimensionen als Blöcke mit Symbol:
         obere Reihe (Schritt 2): die ersten drei Einträge
         untere Reihe (Schritt 3): die übrigen (Mediennutzung mit Balken,
                                    Psychografie mit Werten, Pain und Gain)
     • Markierung „Daten“ / „Annahme“ je Block (sichtbar ab Schritt 4, siehe CSS);
       bei „Daten“ steht die Quelle klein unten im Block
   Danach misst es, ob alles über der Fußzeile bleibt, und setzt die Folie bei
   Bedarf dichter (Klasse .ist-dicht).
   Inhalte ändern Sie NUR in den Daten der Folie – nicht hier.
   „g2p“ = Präfix nur für diese Folie (Folien-Gruppe 2, Persona).
   ============================================================================= */
(function () {
  'use strict';

  /* Grenzen für große Werte-Chips (sonst normale Chips, damit nichts umbricht) */
  var CHIPS = { maxAnzahl: 3, maxZeichen: 30 };

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
    /* Blocktitel = Kategorie-Beschriftung (wie eine Tabellenüberschrift → data-meta) */
    u.element('span', { class: 'karte-kicker g2p-block-titel', 'data-meta': '' }, dim.titel, kopf);
    /* Status-Symbol rechts oben (erst ab Schritt 4 sichtbar):
       Daten = Datenbank-Symbol, Annahme = gestrichelter Kreis mit Fragezeichen */
    var marke = u.element('span', {
      class: 'g2p-status',
      role: 'img',
      'aria-label': status === 'daten' ? 'Daten mit Quelle' : 'Annahme'
    }, null, kopf);
    marke.appendChild(symbol(status === 'daten' ? 'daten' : 'annahme'));
    /* Einheit (z. B. bei der Mediennutzung) in eigener Zeile unter dem Titel */
    if (dim.einheit) u.element('span', { class: 'g2p-einheit', 'data-meta': '' }, dim.einheit, karte);
    return karte;
  }

  /* Quelle klein unten im Block – nur bei belegten Daten */
  function quelleZeile(u, dim, karte) {
    if (dim.status !== 'daten' || !dim.quelle) return;
    u.element('span', { class: 'g2p-quelle', 'data-meta': '' }, dim.quelle, karte);
  }

  /* Inhalt: Stichwort-Zeilen (erste Zeile größer) */
  function zeilenInhalt(u, dim, karte) {
    (dim.zeilen || []).slice(0, 3).forEach(function (z, i) {
      u.element('span', { class: i === 0 ? 'g2p-zeile g2p-zeile--haupt' : 'g2p-zeile' }, z, karte);
    });
  }

  /* Inhalt: Mini-Balken je Plattform.
     Länge: relativ zu „skala“ (z. B. 100 bei Prozentwerten), ohne „skala“
     relativ zum größten Wert. Optional „schnitt“ je Balken: Durchschnitt aller
     Befragten derselben Studie → dünner dunkler Strich im Balken, dazu eine
     kleine Legende hinter der Einheit („Strich = Ø aller Befragten“). */
  function balkenInhalt(u, dim, karte) {
    var liste = dim.balken || [];
    var skala = Number(dim.skala) || 0;
    var max = skala > 0 ? skala : Math.max.apply(null, liste.map(function (b) { return Number(b.wert) || 0; }).concat([1]));
    var mitSchnitt = liste.some(function (b) { return b.schnitt !== undefined && b.schnitt !== null && b.schnitt !== ''; });
    var tabelle = u.element('div', { class: 'g2p-balken', role: 'list' }, null, karte);
    liste.forEach(function (b) {
      var schnitt = Number(b.schnitt);
      var hatSchnitt = b.schnitt !== undefined && b.schnitt !== null && b.schnitt !== '' && !isNaN(schnitt);
      var zeile = u.element('div', {
        class: 'g2p-balken-zeile',
        role: 'listitem',
        'aria-label': b.name + ': ' + b.wert + ' ' + (dim.einheit || '') + (hatSchnitt ? ' (Durchschnitt aller Befragten: ' + schnitt + ')' : '')
      }, null, tabelle);
      u.element('span', { class: 'g2p-balken-name' }, b.name, zeile);
      var spur = u.element('span', { class: 'g2p-balken-spur', 'aria-hidden': 'true' }, null, zeile);
      var anteil = Math.max(4, Math.min(100, Math.round((Number(b.wert) || 0) / max * 100)));
      u.element('span', {
        class: 'g2p-balken-fuellung',
        style: 'width: ' + anteil + '%',
        'data-animation': 'zeichnen',
        'data-dauer': '900'
      }, null, spur);
      if (hatSchnitt) {
        var lage = Math.max(1, Math.min(99, schnitt / max * 100));
        u.element('span', { class: 'g2p-balken-schnitt', style: 'left: ' + lage.toFixed(1) + '%', title: 'Ø aller Befragten: ' + u.zahlFormat(schnitt, 0) }, null, spur);
      }
      u.element('span', { class: 'g2p-balken-wert', 'aria-hidden': 'true' }, u.zahlFormat(b.wert, 0), zeile);
    });
    /* Legende zum Strich hinter der Einheit (Metazeile) */
    var einheit = karte.querySelector('.g2p-einheit');
    if (mitSchnitt && einheit && dim.schnittText !== '') {
      var leg = u.element('span', { class: 'g2p-schnitt-legende' }, null, einheit);
      u.element('span', { class: 'g2p-schnitt-muster', 'aria-hidden': 'true' }, null, leg);
      leg.appendChild(document.createTextNode(dim.schnittText || 'Ø aller Befragten'));
    }
  }

  /* Inhalt: optional Stichwort-Zeilen („zeilen“, z. B. Einstellung zur Kategorie),
     Werte als Chips (Überschrift „werteLabel“, Standard „Werte“), darunter
     Pain (−) und Gain (+). Mit „zeilen“ stehen Überschrift und Chips in EINER
     Reihe (spart eine Zeile; die Überschrift bleibt dann auch in der dichtesten
     Stufe sichtbar, weil sie hier Teil der Aussage ist, z. B. „Wichtiger als im Ø“). */
  function psychoInhalt(u, dim, karte) {
    var gruppe = u.element('div', { class: 'g2p-psycho' }, null, karte);
    var mitZeilen = Array.isArray(dim.zeilen) && dim.zeilen.length > 0;
    if (mitZeilen) zeilenInhalt(u, dim, gruppe);
    var werte = dim.werte || [];
    if (werte.length) {
      var werteOrt = mitZeilen ? u.element('div', { class: 'g2p-werte-reihe' }, null, gruppe) : gruppe;
      u.element('span', { class: 'g2p-unterlabel', 'data-meta': '' }, dim.werteLabel || 'Werte', werteOrt);
      /* große Chips nur bei wenigen, kurzen Werten – sonst normale Chips */
      var zeichen = werte.join('').length;
      var gross = werte.length <= CHIPS.maxAnzahl && zeichen <= CHIPS.maxZeichen;
      var chips = u.element('div', { class: 'g2p-werte' + (gross ? '' : ' g2p-werte--klein') }, null, werteOrt);
      werte.forEach(function (w) {
        u.element('span', { class: 'chip chip--weich' + (gross ? ' chip--gross' : '') }, w, chips);
      });
    }
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

  /* Passt die rechte Seite über die Fußzeile? Sonst dichter setzen
     (zwei Stufen: .ist-dicht, dann .ist-sehr-dicht). */
  function dichteAnpassen(folie) {
    var rechts = folie.querySelector('.g2p-rechts');
    if (!rechts) return;
    folie.classList.remove('ist-dicht', 'ist-sehr-dicht');
    var skala = folie.getBoundingClientRect().height / (folie.offsetHeight || 1080) || 1;
    var passt = function () {
      var grenze = rechts.getBoundingClientRect().bottom;
      var ok = true;
      rechts.querySelectorAll('.g2p-block').forEach(function (b) {
        if ((b.getBoundingClientRect().bottom - grenze) / skala > 1) ok = false;
        if (b.scrollHeight > b.clientHeight + 1) ok = false;      // Inhalt größer als der Block
        /* letztes Kind des Blocks (Quelle, Pain/Gain …) muss im Block bleiben */
        var unten = b.getBoundingClientRect().bottom;
        b.querySelectorAll('.g2p-quelle, .g2p-pg-zeile, .g2p-balken-zeile, .g2p-zeile').forEach(function (k) {
          if ((k.getBoundingClientRect().bottom - unten) / skala > -4) ok = false;
        });
      });
      return ok;
    };
    if (!passt()) folie.classList.add('ist-dicht');
    if (!passt()) folie.classList.add('ist-sehr-dicht');
  }

  var zustand = null;

  Deck.registriere('f04', {
    einrichten: function (ctx) {
      var d = ctx.daten || {};
      var u = ctx.util;
      var folie = ctx.folie;
      zustand = { ctx: ctx, folie: folie };

      /* ---- 1. Texte: Titel und Profil ---- */
      var setzen = function (schluessel, wert) {
        if (!wert) return;
        folie.querySelectorAll('[data-g2p="' + schluessel + '"]').forEach(function (el) { el.textContent = wert; });
      };
      setzen('titel', d.titel);
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
        quelleZeile(u, dim, karte);
      });
      oben.style.setProperty('--g2p-spalten', String(Math.min(3, dims.length)));
      unten.style.setProperty('--g2p-spalten', String(Math.max(1, dims.length - 3)));

      u.messen(folie, function () { dichteAnpassen(folie); });
    }
  });

  /* Nach einem Themenwechsel (Taste T) neu messen – andere Schriften, andere Höhen */
  document.addEventListener('deck:thema', function () {
    if (!zustand) return;
    var neu = function () { zustand.ctx.util.messen(zustand.folie, function () { dichteAnpassen(zustand.folie); }); };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(neu, neu);
    else neu();
  });
})();
