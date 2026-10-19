/* =============================================================================
   js/folien/10-markensteuerrad.js – Folie f10 · Markensteuerrad (Synthese)
   -----------------------------------------------------------------------------
   Das Steuerrad selbst baut die Engine (Baustein „steuerrad“, Modus
   „synthese“). Dieses Skript ergänzt:

   1. MARKENKERN als Band über dem Rad (Text: „kern“ im Daten-JSON der Folie).
      Er erscheint mit dem Schlussschritt nach dem letzten Feld. Das Zentrum
      des Rads bleibt – wie auf Folie 2 und 12 – die Markenkompetenz.

   2. QUELLENKÜRZEL JE STICHWORT: Im Kartenkopf bleibt nur das häufigste
      Kürzel des Felds; ein abweichendes Kürzel steht klein direkt hinter dem
      Stichwort (z. B. „Hedonisten LM“, „Energy: 160 mg Koffein DR“).

   3. KONSISTENZPRÜFUNG (Schritt nach dem Markenkern):
      • Nummern (Lückenfarbe, Braun-Orange) an den Stichworten, die eine Lücke bilden
        (Daten: „luecken“ → „markieren“ im JSON der Folie),
      • je Lücke eine kurze Notiz in der freien Fläche zwischen den Karten
        (links: zwischen Nutzen und Attributen, rechts: zwischen Tonalität und Bild).
        Im Kopf der Notiz steht das Feldpaar („Lücke 2 · Bild ↔ Persona“) –
        automatisch aus „markieren“, oder fest über „paar“ im JSON.
      Das Rad wird bei einem Themenwechsel neu gebaut – dann setzt das Skript
      Kürzel, Nummern und Notizen automatisch neu.
      Steht ein Stichwort aus „markieren“ nicht (genau so) im Rad, meldet das
      Skript das in der Konsole (pruefen.mjs zeigt es dann an).

   4. OPTIONALER ABGLEICH MIT DER WORTWOLKE (letzter Schritt):
      Nur wenn Folie 1b gezeigt wird (marke.js → optionaleFolien.f01b: true)
      und in ihrer Wortwolke Wörter stehen, gibt es einen
      zusätzlichen Schritt: links „Unsere Analyse“ (Markenkern + wie viele Zurufe
      zu unserem Steuerrad passen), rechts die Zurufe (Treffer hervorgehoben).
      Gezählt werden Zurufe, nicht Begriffe: „Gaming“ viermal gerufen = 4.
      Im Druck/PDF bleibt stattdessen das fertige Steuerrad stehen.

   5. RUHE NACH DEM BETRETEN: Steht der Mauszeiger nach einem Sprung (z. B.
      über die Verweise auf Folie 11) zufällig über einer Karte, würde das Rad
      sofort alles andere abdunkeln, und ein zweiter Klick spränge ungewollt
      weiter. Deshalb reagiert das Rad erst auf die Maus, wenn sie sich
      wirklich bewegt (mehr als 10 px). Tastatur (Tab + Enter) geht sofort.

   Texte ändern: im HTML (index.html, Folie 10), nicht hier.
   ============================================================================= */
(function () {
  'use strict';

  /* Kurznamen der Felder – für den Kopf der Lücken-Notizen („Bild ↔ Persona“) */
  var FELDNAMEN = {
    kompetenz: 'Kompetenz', persona: 'Persona', attribute: 'Attribute',
    nutzen: 'Nutzen', tonalitaet: 'Tonalität', bild: 'Bild'
  };

  /* Füllwörter, die beim Abgleich mit der Wortwolke NICHT als Treffer zählen
     (sonst passte z. B. der Zuruf „gute Laune“ über „gutes“ zu „gutes Gewissen“) */
  var STOPPWOERTER = ['ohne', 'seit', 'viele', 'vielen', 'gute', 'guter', 'gutes', 'gutem', 'guten',
    'jahre', 'jahren', 'mit', 'und', 'oder', 'aber', 'sehr', 'mehr', 'eine', 'einer', 'nicht'];

  /* Text vergleichbar machen: klein, ohne Anführungszeichen und Satzzeichen */
  function normal(text) {
    return String(text || '').toLowerCase()
      .replace(/[„“”"'’‚‘»«()[\].,!?:;]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /* JSON direkt im Steuerrad-Baustein lesen (Felder und Stichworte) */
  function radKonfig(rad) {
    var skript = rad ? rad.querySelector(':scope > script[type="application/json"]') : null;
    if (!skript) return {};
    try { return JSON.parse(skript.textContent) || {}; } catch (e) { return {}; }
  }

  /* Stichworte eines Felds als Liste { text, quelle } (Text oder Objekt erlaubt) */
  function stichworteVon(konfig, feld) {
    var e = (konfig.felder || {})[feld] || {};
    return (e.stichworte || []).map(function (w) {
      return typeof w === 'string' ? { text: w, quelle: e.quelle || '' } : { text: (w && w.text) || '', quelle: (w && w.quelle) || e.quelle || '' };
    });
  }

  /* Nur der eigentliche Text eines Stichworts – ohne die Nummer und das
     Quellenkürzel, die dieses Skript selbst anhängt */
  function wortText(sw) {
    var text = '';
    Array.prototype.forEach.call(sw.childNodes, function (k) {
      if (k.nodeType === 3) text += k.textContent;
      else if (k.nodeType === 1 && !k.classList.contains('g6s-wortmarke') && !k.classList.contains('g6s-quelle')) text += k.textContent;
    });
    return text;
  }

  /* Alle Stichworte (und den Kern) als Liste von Wortteilen – für den Abgleich */
  function wortteileAus(konfig, kern, weitere) {
    var texte = [kern || ''];
    Object.keys(konfig.felder || {}).forEach(function (feld) {
      stichworteVon(konfig, feld).forEach(function (w) { texte.push(w.text); });
    });
    (weitere || []).forEach(function (w) { texte.push(w); });
    var teile = [];
    texte.forEach(function (t) {
      normal(t).split(/[\s\-–&]+/).forEach(function (teil) {
        if (teil.length >= 4 && teile.indexOf(teil) < 0 && STOPPWOERTER.indexOf(teil) < 0) teile.push(teil);
      });
    });
    return teile;
  }

  /* Passt ein Zuruf zu einem Wortteil? (gleicher Wortanfang, mind. 4 Zeichen,
     Füllwörter zählen nicht) */
  function istTreffer(zuruf, teile) {
    return normal(zuruf).split(/[\s\-–&]+/).some(function (t) {
      if (t.length < 4 || STOPPWOERTER.indexOf(t) >= 0) return false;
      return teile.some(function (s) {
        return s.indexOf(t) === 0 || t.indexOf(s) === 0 || (t.length >= 5 && s.length >= 5 && t.slice(0, 5) === s.slice(0, 5));
      });
    });
  }

  /* höchster Schritt, den das Steuerrad selbst belegt (= letztes Feld) */
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
      var zustand = {
        rad: rad,
        konfig: radKonfig(rad),
        kern: daten.kern || '',
        luecken: daten.luecken || [],
        abgleich: daten.abgleich || {}
      };
      folie._g6s = zustand;

      /* Schritte: nach dem letzten Feld der Markenkern (= Schlussschritt der
         Engine), danach die Konsistenzprüfung */
      zustand.schrittKern = letzterRadSchritt(rad) + 1;
      zustand.schrittLuecken = zustand.schrittKern + 1;

      /* ---- Markenkern-Band über dem Rad */
      kernEinrichten(folie, zustand);

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
        /* „Lücke 1“ + Feldpaar in EINEM Block: Rechts dreht das CSS nur
           Nummer und Block um, die Lesereihenfolge bleibt „Lücke 2 · Bild ↔ Persona“ */
        var titel = u.element('span', { class: 'g6s-luecke-titel' }, 'Lücke ' + l.nummer, kopf);
        var paar = paarText(l);
        if (paar) u.element('span', { class: 'g6s-luecke-paar' }, ' · ' + paar, titel);
        u.element('span', { class: 'g6s-luecke-text' }, u.markeText(l.text || ''), notiz);
        return { luecke: l, el: notiz, seite: seite };
      });

      /* ---- Rad neu gebaut (Themenwechsel)? Dann Kürzel, Nummern und Lage erneuern */
      var beobachter = new MutationObserver(function (aenderungen) {
        var neu = aenderungen.some(function (a) {
          return Array.prototype.some.call(a.addedNodes, function (k) { return k.classList && k.classList.contains('sr-hub'); });
        });
        if (!neu) return;
        radErgaenzen(zustand);
        Deck.schritteNeu(folie);
        requestAnimationFrame(function () { platzieren(zustand); });
      });
      beobachter.observe(rad, { childList: true });

      radErgaenzen(zustand);
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
      if (!ctx.druckmodus) ruheStarten(zustand);
    },

    verlassen: function (ctx) {
      var zustand = ctx.folie._g6s;
      if (zustand) ruheBeenden(zustand);
    },

    /* Vor Deck.gehe('f10', 'ende') (deck.js): Gibt es inzwischen Zurufe in
       der Wortwolke (oder keine mehr), ändert sich die Zahl der Schritte –
       hier neu zählen, damit „ende“ den richtigen letzten Schritt trifft. */
    schritteAktualisieren: function (ctx) {
      var zustand = ctx.folie._g6s;
      if (zustand) abgleichPruefen(ctx, zustand);
    },

    /* Konsistenzprüfung an/aus: Hinter den markierten Stichworten wächst der
       Abstand zum Trenner (CSS, Abschnitt 2) – danach Zeilenenden und Lage
       der Notizen neu messen (nach dem Übergang) */
    schritt: function (ctx, n) {
      var zustand = ctx.folie._g6s;
      if (!zustand) return;
      if (n !== zustand.schrittLuecken && n !== zustand.schrittLuecken - 1) return;
      clearTimeout(zustand.messTimer);
      var sofort = document.documentElement.classList.contains('testmodus') || ctx.bewegungReduziert || ctx.druckmodus;
      zustand.messTimer = setTimeout(function () { platzieren(zustand); }, sofort ? 0 : 450);
    },

    druck: function (ctx) {
      var zustand = ctx.folie._g6s;
      if (!zustand) return;
      ruheBeenden(zustand);
      ctx.util.messen(zustand.rad, function () { platzieren(zustand); });
    }
  });

  /* Feldpaar einer Lücke: fest aus „paar“ im JSON oder aus den Feldern unter
     „markieren“ (in deren Reihenfolge, jedes Feld nur einmal) */
  function paarText(l) {
    if (l.paar) return Deck.util.markeText(l.paar);
    var namen = [];
    (l.markieren || []).forEach(function (m) {
      var name = FELDNAMEN[m.feld] || m.feld;
      if (name && namen.indexOf(name) < 0) namen.push(name);
    });
    return namen.length > 1 ? namen.join(' ↔ ') : '';
  }


  /* ===========================================================================
     RUHE NACH DEM BETRETEN (siehe Kopfkommentar, Punkt 5)
     Klasse g6s-ruhe am Rad = Felder, Karten und Pillen nehmen keine
     Mausereignisse an (CSS). Sie fällt weg, sobald sich die Maus mehr als
     10 px bewegt hat (gemessen ab der ersten Bewegung nach dem Betreten).
     =========================================================================== */
  function ruheStarten(zustand) {
    var rad = zustand.rad;
    ruheBeenden(zustand);
    rad.classList.add('g6s-ruhe');
    /* Hat die Maus schon während des Übergangs eine Karte „berührt“, steht
       die Abdunkelung noch – zurücknehmen, außer das Rad hebt gerade selbst
       das Feld des aktuellen Schritts hervor (Schritte 1–6) */
    if (!rad._schrittFokus) {
      rad.classList.remove('hat-fokus');
      Array.prototype.forEach.call(rad.querySelectorAll('.ist-fokus'), function (k) { k.classList.remove('ist-fokus'); });
    }
    var start = null;
    zustand.ruheBewegung = function (e) {
      if (!start) { start = { x: e.clientX, y: e.clientY }; return; }
      if (Math.abs(e.clientX - start.x) + Math.abs(e.clientY - start.y) > 10) ruheBeenden(zustand);
    };
    document.addEventListener('pointermove', zustand.ruheBewegung, true);
  }
  function ruheBeenden(zustand) {
    zustand.rad.classList.remove('g6s-ruhe');
    if (zustand.ruheBewegung) document.removeEventListener('pointermove', zustand.ruheBewegung, true);
    zustand.ruheBewegung = null;
  }

  /* Alles, was dieses Skript in den (neu) gebauten Rad-Inhalt einfügt */
  function radErgaenzen(zustand) {
    markieren(zustand);
    quellenJeWort(zustand);
    trennerGruppieren(zustand.rad);
  }


  /* ===========================================================================
     MARKENKERN (Band über dem Rad)
     =========================================================================== */
  function kernEinrichten(folie, zustand) {
    var band = folie.querySelector('.g6s-kern');
    if (!band) return;
    var text = band.querySelector('[data-g6s="kern-text"]');
    if (!zustand.kern) { band.hidden = true; return; }        // kein Kern eingetragen → kein Band
    if (text) {
      text.textContent = Deck.util.markeText(zustand.kern);
      text.setAttribute('data-schritt', String(zustand.schrittKern));
    }
  }


  /* ===========================================================================
     QUELLENKÜRZEL JE STICHWORT
     =========================================================================== */
  function quellenJeWort(zustand) {
    var rad = zustand.rad;
    Object.keys(zustand.konfig.felder || {}).forEach(function (feld) {
      var karte = rad.querySelector('.sr-karte[data-paar="' + feld + '"]');
      if (!karte) return;
      var worte = stichworteVon(zustand.konfig, feld);

      /* Hauptquelle = häufigstes Kürzel (bei Gleichstand das erste) */
      var anzahl = {};
      var haupt = '';
      worte.forEach(function (w) {
        if (!w.quelle) return;
        anzahl[w.quelle] = (anzahl[w.quelle] || 0) + 1;
        if (!haupt || anzahl[w.quelle] > anzahl[haupt]) haupt = w.quelle;
      });
      if (!haupt) return;

      /* Kopf: nur noch die Hauptquelle */
      Array.prototype.forEach.call(karte.querySelectorAll('.sr-karte-kopf .sr-quelle'), function (q) {
        if (q.textContent.trim() !== haupt) q.remove();
      });

      /* Stichworte mit abweichender Quelle: Kürzel direkt hinter das Wort */
      var abweichend = {};
      worte.forEach(function (w) { if (w.quelle && w.quelle !== haupt) abweichend[normal(Deck.util.markeText(w.text))] = w.quelle; });
      Array.prototype.forEach.call(karte.querySelectorAll('.sr-stichwort'), function (sw) {
        if (sw.querySelector('.g6s-quelle')) return;               // schon ergänzt
        var q = abweichend[normal(wortText(sw))];
        if (!q) return;
        /* data-meta: Metaangabe (22 px wie die Kopf-Kürzel), kein Folientext */
        Deck.util.element('span', { class: 'g6s-quelle', 'data-meta': '', title: 'Quelle: ' + q }, q, sw);
      });
    });
  }


  /* ===========================================================================
     KONSISTENZPRÜFUNG
     =========================================================================== */

  /* Nummer an jedes Stichwort hängen, das eine Lücke bildet.
     Die Nummer ist ein eigener Schritt (erscheint mit den Notizen). */
  function markieren(zustand) {
    var rad = zustand.rad;
    if (!rad.querySelector('.sr-karte')) return;                  // Rad noch nicht gebaut
    zustand.gewarnt = zustand.gewarnt || {};
    zustand.luecken.forEach(function (l) {
      (l.markieren || []).forEach(function (m) {
        var karte = rad.querySelector('.sr-karte[data-paar="' + m.feld + '"]');
        var gesucht = normal(Deck.util.markeText(m.stichwort));
        var gefunden = false;
        if (karte) {
          Array.prototype.forEach.call(karte.querySelectorAll('.sr-stichwort'), function (sw) {
            if (normal(wortText(sw)) === gesucht) gefunden = true;
          });
        }
        /* Tippfehler-Hilfe für Studierende: Stichwort aus „markieren“ fehlt im Rad
           (je Stichwort nur einmal melden, auch wenn das Rad neu gebaut wird) */
        if (!gefunden) {
          var schluessel = l.nummer + '|' + m.feld + '|' + gesucht;
          if (!zustand.gewarnt[schluessel]) {
            zustand.gewarnt[schluessel] = true;
            console.warn('f10: Stichwort „' + m.stichwort + '“ (Lücke ' + l.nummer + ') steht nicht im Feld „' + m.feld +
              '“ des Steuerrads – in index.html, Folie 10 unter „markieren“ genau wie im Rad schreiben.');
          }
          return;
        }
        Array.prototype.forEach.call(karte.querySelectorAll('.sr-stichwort'), function (sw) {
          if (sw.querySelector('.g6s-wortmarke')) return;          // schon markiert
          if (normal(wortText(sw)) !== gesucht) return;
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
    kartenVerdichten(hub);
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

    pillenAbstand(hub);

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


  /* Stichworte einer Seitenkarte brauchen mehr als zwei Zeilen (z. B. im
     Thema Bento mit breiterer Schrift)? Dann setzt die Karte sie in 28 px
     (kleinste erlaubte Inhaltsgröße, Klasse g6s-eng im CSS). */
  function kartenVerdichten(hub) {
    Array.prototype.forEach.call(hub.querySelectorAll('.sr-karte:not(.sr-pille)'), function (karte) {
      var liste = karte.querySelector('.sr-karte-stichworte');
      if (!liste) return;
      karte.classList.remove('g6s-eng');
      if (zeilenVon(liste) > 2) karte.classList.add('g6s-eng');
    });
  }
  function zeilenVon(liste) {
    var oben = [];
    Array.prototype.forEach.call(liste.children, function (k) {
      if (!k.offsetHeight) return;
      if (!oben.some(function (t) { return Math.abs(t - k.offsetTop) < 6; })) oben.push(k.offsetTop);
    });
    return oben.length;
  }

  /* Sicherheitsnetz: Wird eine Karte höher als geplant (z. B. eine Zeile mehr
     in einem Thema mit breiterer Schrift), darf sie die Pille „Brand Persona“
     (unten) bzw. „Markenkompetenz“ (oben) nicht berühren. Dann rückt sie um
     genau so viel zur Radmitte, dass 12 px Luft bleiben. Pillen und Karten
     sind per transform zentriert: offsetLeft/offsetTop = Mittelpunkt
     (Pille) bzw. linker Rand und senkrechte Mitte (Karte). */
  function pillenAbstand(hub) {
    var luft = 12;
    ['lo', 'ro', 'lu', 'ru'].forEach(function (platz) {
      var karte = hub.querySelector('.sr-karte--' + platz);
      var unten = platz.charAt(1) === 'u';
      var pille = hub.querySelector(unten ? '.sr-karte--unten' : '.sr-karte--oben');
      if (!karte || !pille) return;
      karte.style.marginTop = '';
      var pilleLinks = pille.offsetLeft - pille.offsetWidth / 2;
      var pilleRechts = pilleLinks + pille.offsetWidth;
      if (karte.offsetLeft + karte.offsetWidth < pilleLinks || karte.offsetLeft > pilleRechts) return;
      var zuviel = unten
        ? (karte.offsetTop + karte.offsetHeight / 2) - (pille.offsetTop - pille.offsetHeight / 2 - luft)
        : (pille.offsetTop + pille.offsetHeight / 2 + luft) - (karte.offsetTop - karte.offsetHeight / 2);
      if (zuviel > 0) karte.style.marginTop = (unten ? -zuviel : zuviel) + 'px';
    });
  }


  /* Stichworte und ihr folgender Trenner „·“ bilden eine Gruppe, die nicht
     umbrochen wird. So steht ein Trenner nie am Anfang einer Zeile; steht er
     am Zeilenende, blendet trennerAmZeilenende() ihn aus. Hinter markierten
     Stichworten blendet das CSS den Trenner aus, sobald die Nummer
     erscheint (sie steht dann an seiner Stelle). */
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
    zustand.titelEl = ctx.folie.querySelector('.g6s-titel-abgleich');
    zustand.wolkeId = zustand.abgleich.wortwolke ||
      (el.querySelector('.wortwolke') && el.querySelector('.wortwolke').getAttribute('data-wortwolke')) || 'assoziationen';

    /* Kern aus den Daten der Folie übernehmen (eine Quelle für alle Stellen) */
    var kernEl = el.querySelector('[data-g6s="kern"]');
    if (kernEl) kernEl.textContent = ctx.util.markeText(zustand.kern);
    zustand.teile = wortteileAus(zustand.konfig, zustand.kern, zustand.abgleich.weitereTreffer);

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
      /* Zurufe zählen, nicht Begriffe: Ein Wort, das viermal gerufen wurde,
         zählt viermal (anzahl aus der Wortwolke) */
      var zurufe = function (w) { return Math.max(1, parseInt(w.anzahl, 10) || 1); };
      var treffer = 0, alle = 0;
      woerter.forEach(function (w) {
        alle += zurufe(w);
        if (istTreffer(w.text, zustand.teile)) treffer += zurufe(w);
      });
      var zahl = el.querySelector('[data-g6s="treffer"]');
      if (zahl) { zahl.setAttribute('data-ziel', String(treffer)); zahl.textContent = String(treffer); }
      var gesamt = el.querySelector('[data-g6s="gesamt"]');
      if (gesamt) gesamt.textContent = 'von ' + alle;
      el.hidden = false;
      el.setAttribute('data-schritt', schritt);
      el.setAttribute('data-animation', 'einblenden');
      abgleichTitel(zustand, schritt, treffer, alle);
    } else {
      el.hidden = true;
      el.removeAttribute('data-schritt');
      abgleichTitel(zustand, null);
    }
    if (vorher !== el.getAttribute('data-schritt')) Deck.schritteNeu(ctx.folie);
    trefferMarkieren(zustand);
  }

  /* Eigener Titel im Abgleich-Schritt (statt „stimmige Identität …“, der sich
     auf das Rad bezieht). Das Ende („ – teilweise“ …) steht im HTML in
     data-text-teil / data-text-keiner / data-text-alle. */
  function abgleichTitel(zustand, schritt, treffer, alle) {
    var t = zustand.titelEl;
    if (!t) return;
    if (!schritt) {
      t.hidden = true;
      t.removeAttribute('data-schritt');
      return;
    }
    t.hidden = false;
    t.setAttribute('data-schritt', schritt);
    t.setAttribute('data-animation', 'hoch');
    var ende = t.querySelector('[data-g6s="titel-ergebnis"]');
    if (ende) {
      var art = treffer === 0 ? 'keiner' : (treffer >= alle ? 'alle' : 'teil');
      var text = ende.getAttribute('data-text-' + art);
      if (text !== null) ende.textContent = text;
    }
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
