/* =============================================================================
   js/folien/03-markenkompetenz.js – Skript für Folie f03 „Markenkompetenz“
   -----------------------------------------------------------------------------
   Baut aus den Daten der Folie (<script type="application/json" class="daten">
   in folien/03-markenkompetenz.html):
     • den Titel „[Marke]: <rolle> mit <kernkompetenz>“
     • die Zeitleiste (Gründung + Meilensteine; Abstände nach Jahren)
     • die drei Kennzahlen (zählen beim Klick hoch; mit Präfix „≈“/„über“,
       Suffix „+“ und Quellenzeile „quelle · status nr · stand“)
     • die Rollen-Chips (gewählte Rolle gefüllt, Zusatzrolle umrandet),
       die Begründung der Marktrolle und den Claim
     • die Quellennummern in der Fußzeile (aus allen „nr“-Angaben)
   Danach misst es, ob alles auf die Folie passt, und setzt sie bei Bedarf
   dichter (Klasse .ist-dicht: kleinere Kennzahlen, engere Abstände).
   Inhalte ändern Sie NUR in den Daten der Folie – nicht hier.
   „g2k“ = Präfix nur für diese Folie (Folien-Gruppe 2, Kompetenz).
   ============================================================================= */
(function () {
  'use strict';

  /* Maße in Bühnen-Pixeln (nur bei Bedarf ändern) */
  var MASS = {
    minSpalte: 170,     // schmalste Spalte der Zeitleiste, bevor gleichmäßig verteilt wird
    maxTextZeilen: 2    // so viele Zeilen darf ein Zeitleisten-Text haben
  };

  /* Text in alle Elemente mit data-g2k="<schluessel>" schreiben (falls Wert vorhanden) */
  function textSetzen(folie, schluessel, wert) {
    if (wert === undefined || wert === null || wert === '') return;
    folie.querySelectorAll('[data-g2k="' + schluessel + '"]').forEach(function (el) {
      el.textContent = wert;
    });
  }

  /* „laut Unternehmen“ + „✎ [13, 16]“ + „2025“ → „laut Unternehmen · ✎ [13, 16] · 2025“ */
  function quellenZeile(e) {
    var beleg = [e.status, e.nr].filter(Boolean).join(' ');
    return [e.quelle, beleg, e.stand].filter(Boolean).join(' · ');
  }

  /* Alle Quellennummern aus Texten wie „[13, 16]“ oder „[27–29]“ einsammeln */
  function nummernAus(text, liste) {
    String(text || '').replace(/\[([^\]]*)\]/g, function (_, innen) {
      innen.split(',').forEach(function (teil) {
        var t = teil.trim().split(/[–-]/);
        var von = parseInt(t[0], 10);
        var bis = parseInt(t[1] || t[0], 10);
        if (isNaN(von)) return;
        for (var n = von; n <= (isNaN(bis) ? von : bis); n++) liste.push(n);
      });
      return '';
    });
    return liste;
  }

  /* [2,3,4,5,8,9,13] → „2–5, 8, 9, 13“ (ab drei aufeinanderfolgenden Nummern als Spanne) */
  function nummernKurz(liste) {
    var n = liste.filter(function (x, i) { return liste.indexOf(x) === i; }).sort(function (a, b) { return a - b; });
    var teile = [];
    for (var i = 0; i < n.length; i++) {
      var j = i;
      while (j + 1 < n.length && n[j + 1] === n[j] + 1) j++;
      if (j - i >= 2) teile.push(n[i] + '–' + n[j]);
      else for (var k = i; k <= j; k++) teile.push(String(n[k]));
      i = j;
    }
    return teile.join(', ');
  }

  /* Zeitleiste: Spaltenbreiten nach den Jahresabständen (2023 → 2025 = doppelt so
     breit). Ist eine Spalte dann zu schmal oder bricht ein Text in mehr als zwei
     Zeilen um, stehen die Ereignisse gleichmäßig verteilt. */
  function zeitleisteVerteilen(z) {
    var reihe = z.reihe;
    if (!reihe) return;
    var jahre = z.ereignisse.map(function (e) { return parseInt(e.jahr, 10); });
    var steigend = jahre.every(function (j, i) { return !isNaN(j) && (i === 0 || j > jahre[i - 1]); });
    var gleich = 'repeat(' + jahre.length + ', minmax(0, 1fr))';
    if (z.proportional && steigend && jahre.length > 1) {
      var spalten = jahre.map(function (j, i) {
        return 'minmax(0, ' + (i < jahre.length - 1 ? jahre[i + 1] - j : 1) + 'fr)';
      });
      reihe.style.gridTemplateColumns = spalten.join(' ');
      if (!zeitleistePasst(reihe)) reihe.style.gridTemplateColumns = gleich;
    } else {
      reihe.style.gridTemplateColumns = gleich;
    }
  }
  function zeitleistePasst(reihe) {
    var ok = true;
    reihe.querySelectorAll('.g2k-ereignis').forEach(function (el) {
      if (el.clientWidth < MASS.minSpalte) ok = false;
      var text = el.querySelector('.g2k-text');
      if (text) {
        var zeile = parseFloat(getComputedStyle(text).lineHeight) || 38;
        if (text.offsetHeight > zeile * MASS.maxTextZeilen + 2) ok = false;
      }
    });
    return ok;
  }

  /* Passt der Inhalt über die Fußzeile? Sonst dichter setzen (zwei Stufen). */
  function dichteAnpassen(z) {
    var folie = z.folie;
    var inhalt = folie.querySelector('.g2k');
    var titel = folie.querySelector('.folie-kopf .titel');
    if (!inhalt) return;
    folie.classList.remove('ist-dicht', 'ist-sehr-dicht');
    zeitleisteVerteilen(z);

    var skala = folie.getBoundingClientRect().height / (folie.offsetHeight || 1080) || 1;
    /* Passt alles? Unterer Block nicht über den Inhaltsbereich (also nicht auf
       die Fußzeile) und jede Kennzahl-Zeile nicht breiter als ihre Spalte. */
    var passt = function () {
      var grenze = inhalt.getBoundingClientRect().bottom;
      var ok = true;
      inhalt.querySelectorAll('.g2k-kennzahlen, .g2k-rolle').forEach(function (el) {
        if ((el.getBoundingClientRect().bottom - grenze) / skala > 1) ok = false;
      });
      inhalt.querySelectorAll('.g2k-kennzahl').forEach(function (karte) {
        var zeile = karte.querySelector('.g2k-kennzahl-zeile');
        if (zeile && zeile.scrollWidth > karte.clientWidth + 1) ok = false;
      });
      return ok;
    };

    /* zweizeiliger Titel → von vornherein dichter */
    var zeilenhoehe = titel ? parseFloat(getComputedStyle(titel).lineHeight) || 80 : 80;
    if (titel && titel.offsetHeight > zeilenhoehe * 1.5) folie.classList.add('ist-dicht');
    if (!passt()) folie.classList.add('ist-dicht');
    if (!passt()) folie.classList.add('ist-sehr-dicht');
    zeitleisteVerteilen(z);
  }


  /* ---------------------------------------------------------------------------
     Aufbau (einmal beim Start)
     --------------------------------------------------------------------------- */
  function aufbauen(ctx) {
    var d = ctx.daten || {};
    var u = ctx.util;
    var folie = ctx.folie;
    var z = { ctx: ctx, folie: folie, ereignisse: [], proportional: d.proportional !== false, reihe: null };
    var nummern = [];

    /* ---- 1. Titel ---- */
    textSetzen(folie, 'rolle', d.rolle);
    textSetzen(folie, 'kernkompetenz', d.kernkompetenz);

    /* ---- 2. Zeitleiste ----
       Aufbau: Jahr oben, Punkt auf der Linie, Text darunter.
       Erscheint beim Betreten: Linie zeichnet sich von links, die Ereignisse
       folgen gestaffelt (alle 110 ms), die Punkte federn herein. */
    var leiste = folie.querySelector('.g2k-zeitleiste');
    var ereignisse = Array.isArray(d.zeitleiste) ? d.zeitleiste : [];   // empfohlen: höchstens 6
    z.ereignisse = ereignisse;
    if (leiste && ereignisse.length) {
      leiste.textContent = '';
      u.element('div', { class: 'g2k-linie', 'aria-hidden': 'true', 'data-animation': 'zeichnen', 'data-dauer': '900' }, null, leiste);
      z.reihe = u.element('div', { class: 'g2k-ereignisse', role: 'list', 'aria-label': 'Zeitleiste der Markenhistorie',
        'data-staffel': '110', 'data-animation': 'hoch', 'data-verzoegerung': '200' }, null, leiste);
      ereignisse.forEach(function (e, i) {
        var item = u.element('div', {
          class: 'g2k-ereignis' + (i === 0 ? ' g2k-ereignis--start' : ''),
          role: 'listitem',
          title: [e.detail, quellenZeile(e)].filter(Boolean).join(' · ')   // Details beim Überfahren mit der Maus
        }, null, z.reihe);
        /* Jahreszahlen sind die Achsenbeschriftung der Zeitleiste (data-meta) */
        u.element('span', { class: 'g2k-jahr', 'data-meta': '' }, e.jahr, item);
        u.element('span', { class: 'g2k-punkt', 'aria-hidden': 'true', 'data-animation': 'feder', 'data-verzoegerung': '120' }, null, item);
        u.element('span', { class: 'g2k-text' }, e.text, item);
        nummernAus(e.nr, nummern);
      });
    }

    /* ---- 3. Kennzahlen (Schritt 1) ----
       Die große Zahl zählt beim Erscheinen von 0 hoch (data-animation="zaehlen").
       Präfix („≈“, „über“), Suffix („+“) und Einheit stehen in eigenen Elementen,
       damit der Zähler sie nicht überschreibt. */
    var kz = folie.querySelector('.g2k-kennzahlen');
    var kennzahlen = Array.isArray(d.kennzahlen) ? d.kennzahlen.slice(0, 3) : [];
    if (kz && kennzahlen.length) {
      kz.textContent = '';
      kennzahlen.forEach(function (k) {
        var dez = parseInt(k.dezimalen, 10) || 0;
        var karte = u.element('div', { class: 'kennzahl karte karte--linie g2k-kennzahl' }, null, kz);
        var zeile = u.element('span', { class: 'g2k-kennzahl-zeile' }, null, karte);
        if (k.praefix) u.element('span', { class: 'g2k-praefix' }, k.praefix, zeile);
        var gruppe = u.element('span', { class: 'g2k-zahl' }, null, zeile);     // Zahl + Suffix ohne Abstand
        u.element('span', {
          class: 'kennzahl-wert',
          'data-animation': 'zaehlen',
          'data-ziel': String(k.wert),
          'data-dezimalen': String(dez),
          'data-dauer': '1300'
        }, u.zahlFormat(k.wert, dez), gruppe);
        if (k.suffix) u.element('span', { class: 'g2k-suffix' }, k.suffix, gruppe);
        if (k.einheit) u.element('span', { class: 'g2k-einheit' }, k.einheit, zeile);
        u.element('span', { class: 'kennzahl-text g2k-kennzahl-text' }, k.text, karte);
        /* Quellenzeile in zwei festen Zeilen: „laut Unternehmen“ / „✎ [13, 16] · 2025“ */
        var beleg = [[k.status, k.nr].filter(Boolean).join(' '), k.stand].filter(Boolean).join(' · ');
        if (k.quelle || beleg) {
          var q = u.element('span', { class: 'g2k-kennzahl-quelle', 'data-meta': '' }, null, karte);
          if (k.quelle) u.element('span', { class: 'g2k-quelle-zeile' }, k.quelle, q);
          if (beleg) u.element('span', { class: 'g2k-quelle-zeile' }, beleg, q);
        }
        nummernAus(k.nr, nummern);
      });
    }

    /* ---- 4. Rollen-Chips (Schritt 2) ----
       Alle Rollen als gleichwertige Chips (Kategorien, keine Skala):
       gewählte Rolle gefüllt, Zusatzrolle umrandet. */
    var rollenListe = folie.querySelector('.g2k-rollen');
    var rollen = Array.isArray(d.rollen) ? d.rollen : [];
    if (rollenListe && rollen.length) {
      rollenListe.textContent = '';
      rollen.forEach(function (r) {
        var gewaehlt = r === d.rolle;
        var zusatz = !gewaehlt && r === d.rolleZusatz;
        var li = u.element('li', {
          class: 'chip g2k-rolle-chip' + (gewaehlt ? ' chip--akzent ist-gewaehlt' : zusatz ? ' g2k-rolle-chip--zusatz' : ' chip--rahmen')
        }, r, rollenListe);
        if (gewaehlt) li.setAttribute('aria-current', 'true');
        if (zusatz) li.setAttribute('aria-label', r + ' (zusätzlich)');
      });
    }

    /* ---- 5. Begründung der Marktrolle und Claim ---- */
    var b = d.begruendung || {};
    textSetzen(folie, 'begruendung', b.text);
    textSetzen(folie, 'begruendungQuelle', b.quelle);
    nummernAus(b.quelle, nummern);

    var claim = d.claim || {};
    if (claim.text) textSetzen(folie, 'claim', '„' + claim.text + '“');
    textSetzen(folie, 'claimQuelle', quellenZeile(claim));
    nummernAus(claim.nr, nummern);
    var claimEl = folie.querySelector('.g2k-claim');
    if (claimEl) claimEl.classList.toggle('ist-platzhalter', claim.platzhalter === true);

    /* ---- 6. Quellennummern in der Fußzeile ---- */
    if (nummern.length) textSetzen(folie, 'quellen', nummernKurz(nummern));

    return z;
  }


  /* ---------------------------------------------------------------------------
     Anmeldung bei der Engine
     --------------------------------------------------------------------------- */
  var zustand = null;

  Deck.registriere('f03', {
    einrichten: function (ctx) {
      zustand = aufbauen(ctx);
      ctx.util.messen(ctx.folie, function () { dichteAnpassen(zustand); });
    }
  });

  /* Nach einem Themenwechsel (Taste T) neu messen – andere Schriften, andere Breiten */
  document.addEventListener('deck:thema', function () {
    if (!zustand) return;
    var neu = function () { zustand.ctx.util.messen(zustand.folie, function () { dichteAnpassen(zustand); }); };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(neu, neu);
    else neu();
  });
})();
