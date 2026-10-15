/* =============================================================================
   js/folien/10-markensteuerrad.js – Folie f10 · Markensteuerrad (Synthese)
   -----------------------------------------------------------------------------
   Das Steuerrad selbst baut die Engine (Baustein „steuerrad“, Modus
   „synthese“). Dieses Skript ergänzt zwei Dinge:

   1. KONSISTENZPRÜFUNG (Schritt nach dem Markenkern):
      • rote Nummern an den Stichworten, die eine Lücke bilden
        (Daten: „luecken“ → „markieren“ im JSON der Folie),
      • je Lücke eine kurze Notiz in der freien Fläche zwischen den Karten
        (links: zwischen Nutzen und Attributen, rechts: zwischen Tonalität und Bild).
      Das Rad wird bei einem Themenwechsel neu gebaut – dann setzt das Skript
      Nummern und Notizen automatisch neu.

   2. OPTIONALER ABGLEICH MIT DER WORTWOLKE (letzter Schritt):
      Nur wenn Folie 1b gezeigt wird (marke.js → optionaleFolien.f01b: true)
      und in ihrer Wortwolke Wörter stehen, gibt es einen
      zusätzlichen Schritt: links „Unsere Analyse“ (Markenkern + wie viele Zurufe
      zu unserem Steuerrad passen), rechts die Zurufe (Treffer hervorgehoben).
      Im Druck/PDF bleibt stattdessen das fertige Steuerrad stehen.

   Texte ändern: im HTML (folien/10-markensteuerrad.html), nicht hier.
   ============================================================================= */
(function () {
  'use strict';

  /* Text vergleichbar machen: klein, ohne Anführungszeichen und Satzzeichen */
  function normal(text) {
    return String(text || '').toLowerCase()
      .replace(/[„“”"'’‚‘»«()[\].,!?:;]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /* JSON direkt im Steuerrad-Baustein lesen (Kern und Stichworte) */
  function radKonfig(rad) {
    var skript = rad ? rad.querySelector(':scope > script[type="application/json"]') : null;
    if (!skript) return {};
    try { return JSON.parse(skript.textContent) || {}; } catch (e) { return {}; }
  }

  /* Alle Stichworte (und den Kern) als Liste von Wortteilen – für den Abgleich */
  function wortteileAus(konfig, weitere) {
    var texte = [konfig.kern || ''];
    var felder = konfig.felder || {};
    Object.keys(felder).forEach(function (feld) {
      (felder[feld].stichworte || []).forEach(function (w) {
        texte.push(typeof w === 'string' ? w : (w && w.text) || '');
      });
    });
    (weitere || []).forEach(function (w) { texte.push(w); });
    var teile = [];
    texte.forEach(function (t) {
      normal(t).split(/[\s\-–&]+/).forEach(function (teil) {
        if (teil.length >= 4 && teile.indexOf(teil) < 0) teile.push(teil);
      });
    });
    return teile;
  }

  /* Passt ein Zuruf zu einem Wortteil? (gleicher Wortanfang, mind. 4 Zeichen) */
  function istTreffer(zuruf, teile) {
    return normal(zuruf).split(/[\s\-–&]+/).some(function (t) {
      if (t.length < 4) return false;
      return teile.some(function (s) {
        return s.indexOf(t) === 0 || t.indexOf(s) === 0 || (t.length >= 5 && s.length >= 5 && t.slice(0, 5) === s.slice(0, 5));
      });
    });
  }

  /* höchster Schritt, den das Steuerrad selbst belegt (Markenkern = Schluss) */
  function letzterRadSchritt(rad) {
    var max = 0;
    Array.prototype.forEach.call(rad.querySelectorAll('[data-schritt]'), function (el) {
      if (el.closest('.g6s-ebene') || el.classList.contains('g6s-wortmarke')) return;
      var n = parseInt(el.getAttribute('data-schritt'), 10) || 0;
      if (n > max) max = n;
    });
    return max;
  }

  Deck.registriere('f10', {

    einrichten: function (ctx) {
      var folie = ctx.folie;
      var u = ctx.util;
      var daten = ctx.daten || {};
      var rad = folie.querySelector('.steuerrad');
      if (!rad) return;
      var zustand = { rad: rad, luecken: daten.luecken || [], abgleich: daten.abgleich || {} };
      folie._g6s = zustand;

      /* Schritt der Konsistenzprüfung = direkt nach dem Markenkern */
      zustand.schrittLuecken = letzterRadSchritt(rad) + 1;

      /* ---- Ebene für die Lücken-Notizen: liegt deckungsgleich über dem Rad,
              aber AUSSERHALB des Rad-Inhalts (der wird bei Themenwechseln neu
              gebaut, die Notizen bleiben erhalten und werden nur neu platziert) */
      var ebene = u.element('div', { class: 'g6s-ebene' }, null, rad);
      zustand.ebene = ebene;
      zustand.notizen = zustand.luecken.map(function (l) {
        var seite = l.seite === 'rechts' ? 'rechts' : 'links';
        var notiz = u.element('div', {
          class: 'g6s-luecke g6s-luecke--' + seite,
          'data-schritt': String(zustand.schrittLuecken),
          'data-animation': seite === 'links' ? 'rechts' : 'links',
          'data-verzoegerung': '200'
        }, null, ebene);
        var kopf = u.element('span', { class: 'g6s-luecke-kopf', 'data-meta': '' }, null, notiz);
        u.element('span', { class: 'g6s-nummer', 'aria-hidden': 'true' }, String(l.nummer), kopf);
        u.element('span', { class: 'g6s-luecke-titel' }, 'Lücke ' + l.nummer, kopf);
        u.element('span', { class: 'g6s-luecke-text' }, u.markeText(l.text || ''), notiz);
        return { luecke: l, el: notiz, seite: seite };
      });

      /* ---- Rad neu gebaut (Themenwechsel)? Dann Nummern und Lage erneuern */
      var beobachter = new MutationObserver(function (aenderungen) {
        var neu = aenderungen.some(function (a) {
          return Array.prototype.some.call(a.addedNodes, function (k) { return k.classList && k.classList.contains('sr-hub'); });
        });
        if (!neu) return;
        markieren(zustand);
        trennerGruppieren(rad);
        Deck.schritteNeu(folie);
        requestAnimationFrame(function () { platzieren(zustand); });
      });
      beobachter.observe(rad, { childList: true });

      markieren(zustand);
      trennerGruppieren(rad);
      u.messen(rad, function () { platzieren(zustand); });

      ['deck:groesse', 'deck:thema'].forEach(function (name) {
        document.addEventListener(name, function () {
          requestAnimationFrame(function () { u.messen(rad, function () { platzieren(zustand); }); });
        });
      });
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(function () { u.messen(rad, function () { platzieren(zustand); }); });
      }

      /* ---- Optionaler Abgleich mit der Wortwolke */
      abgleichEinrichten(ctx, zustand);
    },

    betreten: function (ctx) {
      var zustand = ctx.folie._g6s;
      if (!zustand) return;
      platzieren(zustand);
      abgleichPruefen(ctx, zustand);
    },

    druck: function (ctx) {
      var zustand = ctx.folie._g6s;
      if (!zustand) return;
      ctx.util.messen(zustand.rad, function () { platzieren(zustand); });
    }
  });


  /* ===========================================================================
     KONSISTENZPRÜFUNG
     =========================================================================== */

  /* Rote Nummer an jedes Stichwort hängen, das eine Lücke bildet.
     Die Nummer ist ein eigener Schritt (erscheint mit den Notizen). */
  function markieren(zustand) {
    var rad = zustand.rad;
    zustand.luecken.forEach(function (l) {
      (l.markieren || []).forEach(function (m) {
        var karte = rad.querySelector('.sr-karte[data-paar="' + m.feld + '"]');
        if (!karte) return;
        var gesucht = normal(Deck.util.markeText(m.stichwort));
        Array.prototype.forEach.call(karte.querySelectorAll('.sr-stichwort'), function (sw) {
          if (sw.querySelector('.g6s-wortmarke')) return;          // schon markiert
          if (normal(sw.textContent) !== gesucht) return;
          sw.classList.add('g6s-markiert');
          Deck.util.element('span', {
            class: 'g6s-wortmarke',
            'data-schritt': String(zustand.schrittLuecken),
            'data-animation': 'feder',
            'data-verzoegerung': '120',
            'data-meta': '',
            'aria-label': 'Lücke ' + l.nummer
          }, String(l.nummer), sw);
        });
      });
    });
  }

  /* Notizen in die freie Fläche zwischen zwei Karten derselben Seite setzen.
     Gemessen wird in unskalierten CSS-Pixeln (offsetTop/offsetHeight) – so
     stimmt die Lage unabhängig vom Zoom der Bühne. */
  function platzieren(zustand) {
    var rad = zustand.rad;
    var hub = rad.querySelector(':scope > .sr-hub');
    if (!hub || !hub.offsetWidth) return;
    trennerAmZeilenende(rad);
    var ebene = zustand.ebene;
    ebene.style.left = hub.offsetLeft + 'px';
    ebene.style.top = hub.offsetTop + 'px';
    ebene.style.width = hub.offsetWidth + 'px';
    ebene.style.height = hub.offsetHeight + 'px';

    /* Ring des Rads (SVG-Kreis): Die Notiz darf über die Kartenbreite hinaus
       bis kurz vor den Ring reichen – dann bleibt der Text auch in Themen mit
       breiterer Schrift einzeilig */
    var platz = hub.querySelector('.sr-rad-platz');
    var ring = hub.querySelector('.sr-ring');
    var ringLinks = null, ringRechts = null;
    if (platz && ring && ring.cx && ring.r) {
      ringLinks = platz.offsetLeft + ring.cx.baseVal.value - ring.r.baseVal.value;
      ringRechts = platz.offsetLeft + ring.cx.baseVal.value + ring.r.baseVal.value;
    }

    zustand.notizen.forEach(function (n) {
      var oben = hub.querySelector('.sr-karte--' + (n.seite === 'links' ? 'lo' : 'ro'));
      var unten = hub.querySelector('.sr-karte--' + (n.seite === 'links' ? 'lu' : 'ru'));
      if (!oben || !unten) return;
      /* Karten sind per translateY(-50%) zentriert: Kante = Mitte ± halbe Höhe */
      var obenUnterkante = oben.offsetTop + oben.offsetHeight / 2;
      var untenOberkante = unten.offsetTop - unten.offsetHeight / 2;
      var breite = oben.offsetWidth;
      if (n.seite === 'links' && ringLinks !== null) breite = Math.max(breite, Math.round(ringLinks - 24 - oben.offsetLeft));
      if (n.seite === 'rechts' && ringRechts !== null) breite = Math.max(breite, Math.round(oben.offsetLeft + oben.offsetWidth - ringRechts - 24));
      n.el.style.width = breite + 'px';
      n.el.style.top = Math.round((obenUnterkante + untenOberkante) / 2) + 'px';
      n.el.style.left = n.seite === 'links' ? oben.offsetLeft + 'px' : '';
      n.el.style.right = n.seite === 'rechts' ? (hub.offsetWidth - oben.offsetLeft - oben.offsetWidth) + 'px' : '';
      /* Platz zwischen den Karten als Variable – das CSS zeichnet die
         gestrichelte Klammer genau so hoch */
      n.el.style.setProperty('--g6s-luecke-hoehe', Math.max(0, Math.round(untenOberkante - obenUnterkante - 24)) + 'px');
    });

    /* Beschriftung „Hard Facts / Soft Facts“: Wird eine obere Karte dreizeilig,
       stößt sie an die Beschriftung. Dann rückt die Beschriftung nach oben in
       die Zeile der Pille „Markenkompetenz“ (dort ist links und rechts frei). */
    var pille = hub.querySelector('.sr-karte--oben');
    ['lo', 'ro'].forEach(function (platz) {
      var karte = hub.querySelector('.sr-karte--' + platz);
      var seite = hub.querySelector(platz === 'lo' ? '.sr-seite--hart' : '.sr-seite--weich');
      if (!karte || !seite) return;
      seite.style.top = '';
      var kartenOberkante = karte.offsetTop - karte.offsetHeight / 2;
      if (seite.offsetTop + seite.offsetHeight > kartenOberkante - 10 && pille) {
        seite.style.top = Math.max(0, Math.round(pille.offsetTop - seite.offsetHeight / 2)) + 'px';
      }
    });
  }


  /* Stichworte und ihr folgender Trenner „·“ bilden eine Gruppe, die nicht
     umbrochen wird. So steht ein Trenner nie am Anfang einer Zeile; steht er
     am Zeilenende, blendet trennerAmZeilenende() ihn aus. */
  function trennerGruppieren(rad) {
    Array.prototype.forEach.call(rad.querySelectorAll('.sr-karte-stichworte'), function (liste) {
      Array.prototype.slice.call(liste.querySelectorAll(':scope > .sr-trenner')).forEach(function (trenner) {
        var vorher = trenner.previousElementSibling;
        if (!vorher || !vorher.classList.contains('sr-stichwort')) return;
        var gruppe = document.createElement('span');
        gruppe.className = 'g6s-gruppe';
        liste.insertBefore(gruppe, vorher);
        gruppe.appendChild(vorher);
        gruppe.appendChild(trenner);
      });
    });
  }
  function trennerAmZeilenende(rad) {
    Array.prototype.forEach.call(rad.querySelectorAll('.g6s-gruppe'), function (gruppe) {
      var trenner = gruppe.querySelector('.sr-trenner');
      var naechstes = gruppe.nextElementSibling;
      if (!trenner) return;
      trenner.classList.remove('g6s-trenner-aus');
      if (naechstes && naechstes.offsetTop > gruppe.offsetTop + 4) trenner.classList.add('g6s-trenner-aus');
    });
  }


  /* ===========================================================================
     OPTIONALER ABGLEICH MIT DER WORTWOLKE
     =========================================================================== */
  function abgleichEinrichten(ctx, zustand) {
    var el = ctx.folie.querySelector('.g6s-abgleich');
    if (!el) return;
    zustand.abgleichEl = el;
    zustand.wolkeId = zustand.abgleich.wortwolke ||
      (el.querySelector('.wortwolke') && el.querySelector('.wortwolke').getAttribute('data-wortwolke')) || 'assoziationen';

    /* Kern aus dem Steuerrad übernehmen (eine Quelle für beide Stellen) */
    var konfig = radKonfig(zustand.rad);
    var kernEl = el.querySelector('[data-g6s="kern"]');
    if (kernEl && konfig.kern) kernEl.textContent = ctx.util.markeText(konfig.kern);
    zustand.teile = wortteileAus(konfig, zustand.abgleich.weitereTreffer);

    /* Treffer in der Wolke hervorheben – auch nach jedem Neuzeichnen */
    var flaeche = el.querySelector('.ww-flaeche');
    if (flaeche) {
      new MutationObserver(function () { trefferMarkieren(zustand); })
        .observe(flaeche, { childList: true });
    }
    abgleichPruefen(ctx, zustand);
  }

  function gespeicherteWoerter(ctx, zustand) {
    var gespeichert = ctx.util.laden('wortwolke:' + zustand.wolkeId, null);
    if (gespeichert && Array.isArray(gespeichert.woerter)) {
      return gespeichert.woerter.filter(function (w) { return w && w.text; });
    }
    var start = ((ctx.marke.wortwolken || {})[zustand.wolkeId] || {}).startwoerter || [];
    return start.map(function (t) { return { text: typeof t === 'string' ? t : t.text }; }).filter(function (w) { return w.text; });
  }

  /* Ist die Eingabe-Wortwolke (Folie 1b) Teil dieses Vortrags? Ausgeblendete
     optionale Folien fehlen in Deck.folien(). So erscheinen alte Zurufe aus
     einer Probe nicht, wenn Folie 1b gar nicht gezeigt wird. */
  function wolkeImDeck(id) {
    return Deck.folien().some(function (f) {
      return !!(f.element && f.element.querySelector('.wortwolke[data-wortwolke="' + id + '"]:not([data-nur-anzeige])'));
    });
  }

  /* Gibt es Zurufe? Dann wird der Abgleich ein eigener (letzter) Schritt. */
  function abgleichPruefen(ctx, zustand) {
    var el = zustand.abgleichEl;
    if (!el) return;
    var woerter = wolkeImDeck(zustand.wolkeId) ? gespeicherteWoerter(ctx, zustand) : [];
    var an = woerter.length > 0;
    var schritt = String(zustand.schrittLuecken + 1);
    var vorher = el.getAttribute('data-schritt');
    if (an) {
      var treffer = woerter.filter(function (w) { return istTreffer(w.text, zustand.teile); }).length;
      var zahl = el.querySelector('[data-g6s="treffer"]');
      if (zahl) { zahl.setAttribute('data-ziel', String(treffer)); zahl.textContent = String(treffer); }
      var gesamt = el.querySelector('[data-g6s="gesamt"]');
      if (gesamt) gesamt.textContent = 'von ' + woerter.length;
      el.hidden = false;
      el.setAttribute('data-schritt', schritt);
      el.setAttribute('data-animation', 'einblenden');
    } else {
      el.hidden = true;
      el.removeAttribute('data-schritt');
    }
    if (vorher !== el.getAttribute('data-schritt')) Deck.schritteNeu(ctx.folie);
    trefferMarkieren(zustand);
  }

  function trefferMarkieren(zustand) {
    var el = zustand.abgleichEl;
    if (!el || el.hidden) return;
    Array.prototype.forEach.call(el.querySelectorAll('.ww-wort:not(.ww-messer)'), function (span) {
      var soll = istTreffer(span.textContent, zustand.teile);
      if (span.classList.contains('g6s-treffer') !== soll) span.classList.toggle('g6s-treffer', soll);
    });
  }
})();
