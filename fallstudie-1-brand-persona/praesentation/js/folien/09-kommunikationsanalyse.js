/* =============================================================================
   js/folien/09-kommunikationsanalyse.js – Skript für die Folien f09 und f09b
   -----------------------------------------------------------------------------
   f09  „Kanäle & Bildwelt“
        • baut aus den Daten der Folie die drei Kanal-Spalten: Follower (zählt
          hoch) mit Reichweitenbalken (gemessen am größten Kanal), Beiträge pro
          Woche und Ø Engagement-Rate. Beispielwerte werden gestrichelt
          umrandet (Klasse .ist-annahme aus dem Designsystem).
        • baut die Bildwelt: Motivgruppen mit Anteil an der Stichprobe
          („17 von 50“) und Beitrags-Platzhaltern (eigenes Piktogramm oder –
          wenn eingetragen – der echte Screenshot mit durchgezogenem Rahmen).
          Der Beitrag mit "schluesselbild": true bekommt den Hinweis
          „Schlüsselbild?“ (Schritt 2). Das Hervorheben selbst regelt CSS.
   f09b „Corporate Design & Fit“
        • baut das Datenblatt (Logo · Claims & Schrift · Farben mit HEX ·
          Bildwelt) und die Fit-Bewertung (✓ / ~ / ✗, ein Schritt je Zeile),
          danach als letzten Schritt „Ins Steuerrad · Markenbild“.
        • merkt sich an jeder Datenblatt-Zeile, zu welcher Fit-Zeile sie ein
          Beleg ist (data-belege="1 3"). Ist Fit-Zeile n der aktuelle Schritt,
          leuchten die passenden Zeilen auf, der Rest tritt zurück (CSS).
          Auch eine einzelne Farbgruppe kann Beleg sein ("farben.akzent").
        • Markenfarben aus marke.js → farben erscheinen in der Palette, falls
          sie dort noch nicht stehen (insgesamt höchstens 5 Farben).
        • vergleicht die Steuerrad-Stichworte mit Folie 10 (Warnung, wenn
          sie voneinander abweichen).
   Inhalte ändern Sie NUR in den Daten der Folien
   (index.html, Folien 09/09b).

   Schritte entstehen über data-schritt-Attribute (im HTML bzw. hier beim
   Aufbau); die Engine blendet sie ein, zählt Zahlen hoch und zeigt im Druck
   den Endzustand. Dieses Skript muss deshalb nur einmal aufbauen.
   ============================================================================= */
(function () {
  'use strict';

  /* ---------------------------------------------------------------------------
     PIKTOGRAMME (eigene Gestaltung, Zeichenfläche 24 × 24, Linien wie der
     Icon-Satz der Präsentation). Keine Plattform- oder Markenlogos.
     Alle anderen Namen werden aus dem Icon-Satz (#i-…) genommen, z. B.
     tabelle, herz, gruppe, video, stern, bild, megafon, person, sprechblase.
     --------------------------------------------------------------------------- */
  var SYMBOLE = {
    /* Dose (links) und Shaker mit Deckel (rechts) */
    dose:
      '<rect x="2.5" y="8.5" width="8" height="12" rx="1.6"/>' +
      '<path d="M2.5 11.5h8M2.5 17.5h8"/>' +
      '<path d="M13.5 7h7.5l-1.3 13.5h-4.9z"/>' +
      '<path d="M13.8 10.2h6.9"/>' +
      '<path d="M15.4 7V4.2h3.7V7"/>',
    /* Adlerkopf im Profil: flache Stirn, Brauenwulst, Hakenschnabel
       (allgemeines Motiv, kein Nachbau des Maskottchens) */
    adler:
      '<path d="M3.5 21.5c.2-5 1.2-9 3.6-11.6C9 7.8 11.6 7 14.4 7.1h3.2c2.3 0 4 1.7 4.2 4 .1.9-.2 1.7-.8 2.3-.3-.8-.9-1.3-1.8-1.3h-3.4c-1 2.3-2.6 3.9-4.6 4.9l1.8 1-2.3.5 1.1 1.5-2.3.3.4 1.2"/>' +
      '<path d="M9.8 9.2l5.4.5"/>' +
      '<path d="M16.2 7.1c-.6 1.6-.5 3.4.3 4.9"/>' +
      '<circle class="voll" cx="12.6" cy="11.3" r="0.95"/>',
    /* Pfotenabdruck – „ein Tier je Sorte“ */
    pfote:
      '<path d="M12 12.5c-2.8 0-5.2 2.4-5.2 4.9 0 1.7 1.3 2.7 2.9 2.7 1 0 1.5-.5 2.3-.5s1.3.5 2.3.5c1.6 0 2.9-1 2.9-2.7 0-2.5-2.4-4.9-5.2-4.9z"/>' +
      '<ellipse cx="5.2" cy="10.3" rx="1.7" ry="2.1"/>' +
      '<ellipse cx="9.2" cy="6.3" rx="1.7" ry="2.2"/>' +
      '<ellipse cx="14.8" cy="6.3" rx="1.7" ry="2.2"/>' +
      '<ellipse cx="18.8" cy="10.3" rx="1.7" ry="2.1"/>'
  };

  /* Urteile der Fit-Bewertung: Zeichen (24 × 24) und Wort.
     Form UND Wort unterscheiden die Urteile – nicht nur die Farbe. */
  var URTEILE = {
    passt:     { wort: 'passt',     pfad: 'M5 12.5l4.5 4.5L19 7' },
    teilweise: { wort: 'teilweise', pfad: 'M4.5 13.6c2.3-3.3 4.7-3.3 7.5 0s5.2 3.3 7.5 0' },
    bruch:     { wort: 'Bruch',     pfad: 'M6.5 6.5l11 11M17.5 6.5l-11 11' }
  };

  /* SVG-Markup für ein Piktogramm (eigenes oder aus dem Icon-Satz) */
  function symbolSvg(name, klasse) {
    var k = 'icon ' + (klasse || '');
    if (SYMBOLE[name]) {
      return '<svg class="' + k + '" viewBox="0 0 24 24" aria-hidden="true">' + SYMBOLE[name] + '</svg>';
    }
    return '<svg class="' + k + '" aria-hidden="true"><use href="#i-' + (name || 'bild') + '"></use></svg>';
  }

  /* Zahl aus einem Dateneintrag lesen ({ "wert": 2.3 } oder einfach 2.3) */
  function wertVon(eintrag) {
    var w = eintrag && typeof eintrag === 'object' ? eintrag.wert : eintrag;
    w = Number(w);
    return isNaN(w) ? 0 : w;
  }
  function istBeispiel(eintrag) {
    return !!(eintrag && typeof eintrag === 'object' && eintrag.beispiel);
  }

  /* Zähler-Element: zählt beim Erscheinen hoch (Engine: data-animation="zaehlen").
     Beispielwerte bekommen die gestrichelte Umrandung (.ist-annahme). */
  function zaehler(eltern, eintrag, optionen, u) {
    var w = wertVon(eintrag);
    var dezimalen = optionen.dezimalen || 0;
    var einheit = optionen.einheit || '';
    var beispiel = istBeispiel(eintrag);
    return u.element('span', {
      class: optionen.klasse + (beispiel ? ' ist-annahme g5-beispielwert' : ''),
      'data-animation': 'zaehlen',
      'data-ziel': String(w),
      'data-dezimalen': String(dezimalen),
      'data-einheit': einheit || null,
      'data-verzoegerung': optionen.verzoegerung || null,
      title: beispiel ? 'Beispielwert – noch selbst zu erheben' : null
    }, u.zahlFormat(w, dezimalen) + einheit.replace(/^ /, ' '), eltern);
  }


  /* ===========================================================================
     f09 · Kanäle & Bildwelt
     =========================================================================== */

  /* Drei Kanal-Spalten */
  function kanaeleBauen(ziel, kanaele, u) {
    ziel.innerHTML = '';
    var groesste = Math.max.apply(null, kanaele.map(function (k) { return wertVon(k.follower); }).concat([1]));

    kanaele.forEach(function (k) {
      var spalte = u.element('article', { class: 'g5-kanal' }, null, ziel);

      /* Kopf: neutrales Icon + Kanalname, rechts der Profilname */
      var kopf = u.element('div', { class: 'g5-kanal-kopf' }, null, spalte);
      var name = u.element('h3', { class: 'karte-kicker g5-kanal-name' }, null, kopf);
      name.innerHTML = u.icon(k.icon || 'bild') + '<span>' + u.escape(k.name || '') + '</span>';
      if (k.profilname) u.element('span', { class: 'g5-kanal-profil', 'data-meta': '' }, k.profilname, kopf);

      /* Reichweite: große Zahl + Bezeichnung */
      var follower = k.follower || {};
      var reichweite = u.element('div', { class: 'g5-reichweite' }, null, spalte);
      zaehler(reichweite, follower, { klasse: 'kennzahl-wert kennzahl-wert--mittel g5-follower' }, u);
      u.element('span', { class: 'g5-einheit', 'data-meta': '' }, follower.bezeichnung || 'Follower', reichweite);

      /* Reichweitenbalken: Anteil am größten Kanal (wächst von links) */
      var spur = u.element('div', { class: 'g5-spur', 'aria-hidden': 'true' }, null, spalte);
      var balken = u.element('div', { class: 'g5-balken', 'data-animation': 'zeichnen', 'data-verzoegerung': '200' }, null, spur);
      balken.style.width = Math.max(1.2, wertVon(follower) / groesste * 100).toFixed(2) + '%';
      if (istBeispiel(follower)) balken.classList.add('g5-balken--beispiel');

      /* Zwei kleinere Kennzahlen */
      var werte = u.element('div', { class: 'g5-werte' }, null, spalte);
      [
        { eintrag: k.beitraegeProWoche, text: 'Beiträge pro Woche', dezimalen: 1, einheit: '' },
        { eintrag: k.engagementRate,    text: 'Ø Engagement-Rate',  dezimalen: 1, einheit: ' %' }
      ].forEach(function (w) {
        var box = u.element('div', { class: 'g5-wert' }, null, werte);
        zaehler(box, w.eintrag, { klasse: 'g5-wert-zahl', dezimalen: w.dezimalen, einheit: w.einheit, verzoegerung: '150' }, u);
        u.element('span', { class: 'g5-wert-text', 'data-meta': '' }, w.text, box);
      });
    });
  }

  /* Bildwelt: Motivgruppen mit Beitrags-Platzhaltern.
     d.stichprobe     = Zahl der codierten Beiträge ({ "wert": 50, "beispiel": true })
     g.anteil         = wie viele davon zu dieser Gruppe gehören → „17 von 50“
     d.schluesselbildText = Text des Hinweises in Schritt 2 (Standard „Schlüsselbild?“) */
  function bildweltBauen(ziel, d, u) {
    ziel.innerHTML = '';
    var gruppen = d.bildwelt || [];
    var stichprobe = d.stichprobe || null;
    var chipText = d.schluesselbildText || 'Schlüsselbild?';

    gruppen.forEach(function (g) {
      var gruppe = u.element('div', { class: 'g5-gruppe' }, null, ziel);
      if ((g.beitraege || []).some(function (b) { return b.schluesselbild; })) gruppe.classList.add('hat-schluesselbild');

      /* Kopf: Gruppenname links, Anteil an der Stichprobe rechts */
      var kopf = u.element('div', { class: 'g5-gruppe-kopf' }, null, gruppe);
      u.element('h3', { class: 'karte-kicker g5-gruppe-name', 'data-meta': '' }, g.gruppe || '', kopf);
      if (g.anteil !== undefined && g.anteil !== null && stichprobe) {
        /* Beispielwert, wenn der Anteil ODER die Stichprobe noch Beispiel ist */
        var beispiel = istBeispiel(g.anteil) || istBeispiel(stichprobe);
        var text = u.zahlFormat(wertVon(g.anteil), 0) + ' von ' + u.zahlFormat(wertVon(stichprobe), 0);
        u.element('span', {
          class: 'g5-anteil' + (beispiel ? ' ist-annahme g5-beispielwert' : ''),
          'data-meta': '',
          title: beispiel ? 'Beispielwert – noch selbst zu erheben' : 'Anteil an den codierten Beiträgen'
        }, text, kopf);
      }
      var liste = u.element('div', { class: 'g5-beitraege' }, null, gruppe);

      (g.beitraege || []).forEach(function (b) {
        var fig = u.element('figure', { class: 'g5-beitrag' + (b.schluesselbild ? ' ist-schluesselbild' : '') }, null, liste);
        var flaeche = u.element('div', { class: 'bild-platzhalter g5-beitrag-bild' }, null, fig);
        if (b.bild) {
          /* echter Screenshot (Pfad relativ zu praesentation/): durchgezogener
             Rahmen = belegt. Mit "beispiel": true (z. B. nachgestelltes oder
             KI-erzeugtes Motiv) bleibt der Rahmen gestrichelt. */
          u.element('img', { src: u.pfad(b.bild), alt: 'Beitrag: ' + (b.motiv || '') }, null, flaeche);
          flaeche.classList.add(b.beispiel ? 'g5-beitrag-bild--beispiel' : 'g5-beitrag-bild--beleg');
          if (b.beispiel) flaeche.title = 'Beispielbild – kein echter Beitrag';
        } else {
          flaeche.setAttribute('role', 'img');
          flaeche.setAttribute('aria-label', 'Platzhalter für einen Beitrag: ' + (b.motiv || ''));
          flaeche.insertAdjacentHTML('beforeend', symbolSvg(b.symbol, 'g5-symbol'));
        }
        if (b.schluesselbild) {
          /* Hinweis „Schlüsselbild?“ – erscheint in Schritt 2. Zentriert per
             left/right/margin (NICHT per translate: die Engine-Animation „hoch“
             verschiebt selbst über translate und würde die Zentrierung stören). */
          u.element('span', { class: 'chip chip--akzent g5-schluessel-chip', 'data-schritt': '2', 'data-animation': 'hoch' },
            chipText, flaeche);
        }
        u.element('figcaption', { class: 'g5-beitrag-text' }, b.motiv || '', fig);
      });
    });
  }

  Deck.registriere('f09', {
    einrichten: function (ctx) {
      var d = ctx.daten || {};
      var kanaeleZiel = ctx.folie.querySelector('[data-g5="kanaele"]');
      var bildweltZiel = ctx.folie.querySelector('[data-g5="bildwelt"]');
      if (kanaeleZiel) kanaeleBauen(kanaeleZiel, d.kanaele || [], ctx.util);
      if (bildweltZiel) bildweltBauen(bildweltZiel, d, ctx.util);
    }
  });


  /* ===========================================================================
     f09b · Corporate Design & Fit
     =========================================================================== */

  /* Eine Zeile des Datenblatts: Bezeichnung links, Inhalt rechts.
     data-belege      = Nummern der Fit-Zeilen, für die diese Zeile ein Beleg ist
     data-belege-teil = Nummern der Fit-Zeilen, für die nur ein TEIL der Zeile
                        Beleg ist (z. B. nur die Farbgruppe „Logo & Akzent“);
                        die übrigen Teile treten dann zurück. */
  function datenblattZeile(eltern, schluessel, bezeichnung, belege, u) {
    var zeile = u.element('section', {
      class: 'g5b-zeile g5b-zeile--' + schluessel,
      'data-zeile': schluessel,
      'data-belege': (belege.zeilen[schluessel] || []).join(' ') || null,
      'data-belege-teil': (belege.teilZeilen[schluessel] || []).join(' ') || null
    }, null, eltern);
    var kopf = u.element('div', { class: 'g5b-zeile-kopf' }, null, zeile);
    u.element('h3', { class: 'karte-kicker g5b-zeile-name', 'data-meta': '' }, bezeichnung, kopf);
    var inhalt = u.element('div', { class: 'g5b-zeile-inhalt' }, null, zeile);
    return { zeile: zeile, kopf: kopf, inhalt: inhalt };
  }

  /* HEX-Wert vereinheitlichen (#ffd007 → #FFD007) */
  function hexNormal(wert) {
    var w = String(wert || '').trim();
    if (/^[0-9a-f]{6}$/i.test(w) || /^[0-9a-f]{3}$/i.test(w)) w = '#' + w;
    return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(w) ? w.toUpperCase() : '';
  }

  /* Höchstens so viele Farbfelder passen in eine Zeile des Datenblatts */
  var MAX_FARBEN = 5;

  /* Palette: Gruppen aus den Daten + Markenfarben aus marke.js (falls neu).
     Markenfarben kommen nach vorn in die erste Gruppe; sind es dann mehr als
     MAX_FARBEN, fallen die letzten Farben der Liste weg (Warnung in der
     Konsole – pruefen.mjs meldet sie). Abhilfe: in den Daten eine Farbe
     herausnehmen. */
  function paletteSammeln(gruppen, marke) {
    var ergebnis = (gruppen || []).map(function (g) {
      return {
        gruppe: g.gruppe || '',
        schluessel: g.schluessel || '',
        liste: (g.liste || []).filter(function (f) { return hexNormal(f.hex); })
      };
    });
    var vorhanden = {};
    ergebnis.forEach(function (g) { g.liste.forEach(function (f) { vorhanden[hexNormal(f.hex)] = true; }); });
    var ausMarke = [];
    var farben = (marke && marke.farben) || {};
    [['primaer', 'Primärfarbe'], ['sekundaer', 'Sekundärfarbe']].forEach(function (p) {
      var hex = hexNormal(farben[p[0]]);
      if (hex && !vorhanden[hex]) { ausMarke.push({ name: p[1] + ' (marke.js)', hex: hex }); vorhanden[hex] = true; }
    });
    if (ausMarke.length) {
      if (ergebnis.length) ergebnis[0].liste = ausMarke.concat(ergebnis[0].liste);
      else ergebnis.push({ gruppe: 'Markenfarben', schluessel: '', liste: ausMarke });
    }

    /* auf MAX_FARBEN begrenzen: von vorn zählen, Überzählige hinten abschneiden */
    var platz = MAX_FARBEN;
    var weg = [];
    ergebnis.forEach(function (g) {
      var behalten = g.liste.slice(0, Math.max(0, platz));
      g.liste.slice(behalten.length).forEach(function (f) { weg.push(hexNormal(f.hex)); });
      g.liste = behalten;
      platz -= behalten.length;
    });
    if (weg.length) {
      console.warn('f09b: mehr als ' + MAX_FARBEN + ' Farben – ' + weg.join(', ') +
        ' ausgeblendet. Bitte in index.html, Folien 09/09b (Daten von f09b → farben) eine Farbe herausnehmen.');
    }
    return ergebnis.filter(function (g) { return g.liste.length; });
  }

  function datenblattBauen(ziel, d, belege, ctx) {
    var u = ctx.util;
    ziel.innerHTML = '';

    /* 1. Logo (Bild aus marke.js → logo, bis dahin neutraler Platzhalter) */
    var logo = datenblattZeile(ziel, 'logo', 'Logo', belege, u);
    var fig = u.element('figure', { class: 'g5b-logo' }, null, logo.inhalt);
    u.element('img', { class: 'g5b-logo-bild', 'data-marke-logo': '', alt: 'Logo der Marke (Platzhalter, bis das Logo in marke.js eingetragen ist)' }, null, fig);
    if (d.logo && d.logo.beschreibung) {
      u.element('figcaption', { class: 'g5b-logo-text', 'data-meta': '' }, d.logo.beschreibung, fig);
    }

    /* 2. Claims & Schrift: Dachclaim im Stil der Überschriften-Schrift,
          Versprechen im Stil der Fließtext-Schrift (Ersatzschriften, *) */
    var c = d.claims || {};
    var schriften = c.schriften || {};
    var claims = datenblattZeile(ziel, 'claims', 'Claims & Schrift', belege, u);
    if (c.weitere) {
      /* Zähl-Badge: belegt „mindestens sechs Claims“ (Fit-Zeile „über die Kanäle“) */
      u.element('span', { class: 'chip chip--rahmen g5b-weitere', 'data-meta': '', title: 'weitere Claims laufen parallel (siehe Notizen)' },
        '+' + c.weitere + ' weitere', claims.kopf);
    }
    [
      { eintrag: c.dach, klasse: 'g5b-probe--ueberschrift', schrift: schriften.ueberschrift },
      { eintrag: c.versprechen, klasse: 'g5b-probe--text', schrift: schriften.fliesstext }
    ].forEach(function (p) {
      if (!p.eintrag || !p.eintrag.text) return;
      var block = u.element('div', { class: 'g5b-probe ' + p.klasse }, null, claims.inhalt);
      u.element('p', { class: 'g5b-probe-text' }, p.eintrag.text, block);
      var meta = (p.eintrag.bezeichnung || '') + (p.schrift ? ' · ' + p.schrift + '*' : '');
      u.element('p', { class: 'g5b-probe-meta', 'data-meta': '' }, meta, block);
    });

    /* 3. Farben mit HEX-Werten (Farbfelder = Inhalt, darum feste Werte) */
    var farben = datenblattZeile(ziel, 'farben', 'Farben (Web)', belege, u);
    var gruppenEl = u.element('div', { class: 'g5b-farbgruppen' }, null, farben.inhalt);
    paletteSammeln(d.farben, ctx.marke).forEach(function (g) {
      /* data-teil + data-belege: diese Farbgruppe allein kann Beleg sein
         ("belege": ["farben.akzent"] in den Fit-Zeilen) */
      var teilBelege = g.schluessel ? (belege.teile['farben.' + g.schluessel] || []) : [];
      var gruppe = u.element('div', {
        class: 'g5b-farbgruppe',
        'data-teil': g.schluessel || '',
        'data-belege': teilBelege.join(' ') || null
      }, null, gruppenEl);
      u.element('span', { class: 'g5b-farbgruppe-name', 'data-meta': '' }, g.gruppe, gruppe);
      var liste = u.element('ul', { class: 'g5b-farben' }, null, gruppe);
      g.liste.forEach(function (f) {
        var hex = hexNormal(f.hex);
        var li = u.element('li', { class: 'g5b-farbe', title: (f.name ? f.name + ' ' : '') + hex }, null, liste);
        var feld = u.element('span', { class: 'g5b-farbfeld', role: 'img', 'aria-label': (f.name || 'Farbe') + ', ' + hex }, null, li);
        feld.style.backgroundColor = hex;
        var wert = u.element('span', { class: 'g5b-hex', 'data-meta': '', 'aria-hidden': 'true' }, hex, feld);
        wert.style.color = schriftAuf(hex);
      });
    });

    /* 4. Bildwelt (Verweis auf Folie 09): kleine Piktogramm-Kacheln wie auf
          f09 + Beschreibung. Beleg für „Comic-Look“ (Tonalität) und „wirkt
          jünger“ (Persona). */
    var bw = d.bildwelt || null;
    if (bw) {
      var bildwelt = datenblattZeile(ziel, 'bildwelt', 'Bildwelt', belege, u);
      var bfig = u.element('figure', { class: 'g5b-bildwelt' }, null, bildwelt.inhalt);
      var kacheln = u.element('div', { class: 'g5b-bildwelt-kacheln' }, null, bfig);
      (bw.symbole || []).forEach(function (s) {
        var k = u.element('span', { class: 'g5b-bildwelt-kachel', 'aria-hidden': 'true' }, null, kacheln);
        k.innerHTML = symbolSvg(s, 'g5b-bildwelt-symbol');
      });
      if (bw.beschreibung || bw.verweis) {
        var cap = u.element('figcaption', { class: 'g5b-bildwelt-text', 'data-meta': '' }, null, bfig);
        if (bw.beschreibung) u.element('span', { class: 'g5b-bildwelt-zeile' }, bw.beschreibung, cap);
        if (bw.verweis) u.element('span', { class: 'g5b-bildwelt-zeile g5b-bildwelt-verweis' }, bw.verweis, cap);
      }
    }
  }

  /* Schriftfarbe auf einem Farbfeld: schwarz oder weiß – je nachdem, was den
     höheren Kontrast hat (WCAG-Formel). Eine der beiden erreicht immer > 4,5 : 1. */
  function schriftAuf(hex) {
    var h = hex.replace('#', '');
    if (h.length === 3) h = h.replace(/(.)/g, '$1$1');
    var kanal = function (i) {
      var c = parseInt(h.substr(i, 2), 16) / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    };
    var L = 0.2126 * kanal(0) + 0.7152 * kanal(2) + 0.0722 * kanal(4);
    var DUNKEL = '#141414', HELL = '#FFFFFF';     /* Inhaltsfarben, kein Thema */
    var mitWeiss = 1.05 / (L + 0.05);
    var mitDunkel = (L + 0.05) / (0.0070 + 0.05);   /* Luminanz von #141414 ≈ 0,007 */
    return mitDunkel >= mitWeiss ? DUNKEL : HELL;
  }

  /* Fit-Bewertung: eine Zeile je Prüfung, Zeile n erscheint in Schritt n */
  function fitBauen(ziel, zeilen, u) {
    ziel.innerHTML = '';
    zeilen.forEach(function (z, i) {
      var n = String(i + 1);
      var urteil = URTEILE[z.urteil] ? z.urteil : 'teilweise';
      var li = u.element('li', { class: 'g5b-fit-zeile', 'data-urteil': urteil }, null, ziel);

      /* Kreis: gestrichelt leer, bis das Urteil erscheint (Feder = Marker) */
      var platz = u.element('span', { class: 'g5b-urteil-platz' }, null, li);
      var marke = u.element('span', {
        class: 'g5b-urteil', 'data-schritt': n, 'data-animation': 'feder', 'data-fit-schritt': n
      }, null, platz);
      marke.innerHTML = '<svg class="g5b-urteil-zeichen" viewBox="0 0 24 24" aria-hidden="true"><path d="' + URTEILE[urteil].pfad + '"/></svg>';

      var text = u.element('div', { class: 'g5b-fit-text' }, null, li);
      var kopf = u.element('div', { class: 'g5b-fit-kopf' }, null, text);
      u.element('span', { class: 'g5b-fit-pruefung', 'data-meta': '' }, z.pruefung || '', kopf);
      /* Urteilswort in 28 px (Kernaussage der Zeile). data-meta nur, weil es
         wie ein Badge zusammen mit Zeichen und Farbe das Urteil kennzeichnet –
         es zählt deshalb nicht ins Wortbudget. */
      u.element('span', { class: 'g5b-urteil-wort', 'data-meta': '', 'data-schritt': n, 'data-animation': 'einblenden' },
        URTEILE[urteil].wort, kopf);
      u.element('p', { class: 'g5b-fit-grund', 'data-schritt': n, 'data-animation': 'hoch', 'data-verzoegerung': '120' },
        z.begruendung || '', text);
    });
  }

  /* Ergebnis für das Steuerradfeld „Markenbild“ (wie „Ins Steuerrad“ auf f08b):
     erscheint im Schritt nach der letzten Fit-Zeile. */
  function steuerradBauen(ziel, stichworte, schritt, u) {
    if (!stichworte || !stichworte.length) return;
    var block = u.element('div', {
      class: 'g5b-steuerrad', 'data-schritt': String(schritt), 'data-animation': 'hoch'
    }, null, ziel);
    var kicker = u.element('span', { class: 'karte-kicker g5b-steuerrad-kicker', 'data-meta': '' }, null, block);
    kicker.innerHTML = u.icon('steuerrad') + '<span>Ins Steuerrad · Markenbild</span>';
    var liste = u.element('ul', { class: 'g5b-steuerrad-liste' }, null, block);
    stichworte.forEach(function (s) { u.element('li', null, String(s), liste); });
  }

  /* Abgleich mit Folie 10: stehen dort im Feld „bild“ andere Stichworte, gibt
     es eine Warnung in der Konsole (pruefen.mjs meldet sie). Beide Listen
     müssen gleich gepflegt werden: hier "steuerrad", in
     index.html, Folie 10 → felder → bild → stichworte. */
  function steuerradAbgleichen(stichworte) {
    var skript = document.querySelector('#f10 .steuerrad > script[type="application/json"]');
    if (!skript || !stichworte || !stichworte.length) return;
    var dort;
    try {
      var j = JSON.parse(skript.textContent);
      dort = ((((j || {}).felder || {}).bild || {}).stichworte || []).map(function (s) {
        return typeof s === 'string' ? s : (s && s.text) || '';
      });
    } catch (e) { return; }
    var hier = stichworte.map(String);
    if (dort.join('|') !== hier.join('|')) {
      console.warn('f09b: Stichworte „Markenbild“ weichen von Folie 10 ab (hier: ' + hier.join(', ') +
        ' · Folie 10: ' + dort.join(', ') + '). Beide Listen gleich pflegen.');
    }
  }

  Deck.registriere('f09b', {
    einrichten: function (ctx) {
      var d = ctx.daten || {};
      var cd = ctx.folie.querySelector('[data-g5b="cd"]');
      var fit = ctx.folie.querySelector('[data-g5b="fit"]');
      var karte = ctx.folie.querySelector('.g5b-fit');

      /* Belege je Datenblatt-Zeile, z. B.
           "belege": ["claims", "bildwelt"]        → ganze Zeilen
           "belege": ["bildwelt", "farben.akzent"] → Zeile Bildwelt + nur die
                                                      Farbgruppe mit "schluessel": "akzent"
         Ergebnis: zeilen { claims: [1, 3], farben: [2, 3] … },
                   teilZeilen { farben: [2] }, teile { 'farben.akzent': [2] } */
      var belege = { zeilen: {}, teilZeilen: {}, teile: {} };
      var dazu = function (tabelle, schluessel, n) {
        var liste = tabelle[schluessel] = tabelle[schluessel] || [];
        if (liste.indexOf(n) < 0) liste.push(n);
      };
      (d.fit || []).forEach(function (z, i) {
        (z.belege || []).forEach(function (b) {
          var teile = String(b).split('.');
          dazu(belege.zeilen, teile[0], i + 1);
          if (teile[1]) {
            dazu(belege.teilZeilen, teile[0], i + 1);
            dazu(belege.teile, b, i + 1);
          }
        });
      });

      if (cd) datenblattBauen(cd, d, belege, ctx);
      if (fit) fitBauen(fit, d.fit || [], ctx.util);
      if (karte) steuerradBauen(karte, d.steuerrad, (d.fit || []).length + 1, ctx.util);
      steuerradAbgleichen(d.steuerrad);
    }
  });
})();
