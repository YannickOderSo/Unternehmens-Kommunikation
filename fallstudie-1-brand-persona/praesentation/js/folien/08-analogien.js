/* =============================================================================
   js/folien/08-analogien.js – Skript für die Folien f08 und f08b
   -----------------------------------------------------------------------------
   f08  „Analogien & Live-Umfrage“
        • setzt die Frage der Umfrage (marke.js → umfragen.tier.frage) als Titel
        • ohne Abstimm-Link (nur Zählmodus): zeigt links „Abstimmung per
          Handzeichen“ statt des QR-Codes
        • baut aus den Daten der Folie die Karten „Als Tier“ und „Als Mensch“
          sowie die Kontrastzeile mit zwei Wettbewerbern
   f08b „Markentonalität (Aaker)“
        • baut aus den Daten das Profil der fünf Dimensionen nach Aaker
          (Balken für die Marke, Marker A/B für die Wettbewerber) und hängt die
          Persönlichkeitsmerkmale an ihre Dimension
        • füllt die Ergebniskarte (Markenemotionen, Markenbeziehung)
   Inhalte ändern Sie NUR in den Daten der Folien (folien/08-analogien.html).

   Schritte entstehen über data-schritt-Attribute (im HTML bzw. hier beim
   Aufbau); die Engine blendet sie ein, zählt Zahlen hoch und zeigt im Druck
   den Endzustand. Dieses Skript muss deshalb nur einmal aufbauen.
   ============================================================================= */
(function () {
  'use strict';

  /* ---------------------------------------------------------------------------
     STRICHZEICHNUNGEN (eigene Gestaltung, Zeichenfläche 120 × 120)
     Farbe und Strichstärke kommen aus css/folien/08-analogien.css.
     Neues Tier ergänzen: Schlüssel = Tiername klein, ä/ö/ü/ß als ae/oe/ue/ss
     („Löwe“ → loewe). Klasse „voll“ = gefüllte Fläche (Augen, Nase).
     --------------------------------------------------------------------------- */
  var BILDER = {
    eule:
      '<path d="M30 14 L45 29 Q60 24 75 29 L90 14 C97 42 99 72 88 91 C80 104 70 110 60 110 C50 110 40 104 32 91 C21 72 23 42 30 14 Z"/>' +
      '<circle cx="46" cy="52" r="13"/><circle cx="74" cy="52" r="13"/>' +
      '<circle class="voll" cx="47.5" cy="53" r="4.5"/><circle class="voll" cx="72.5" cy="53" r="4.5"/>' +
      '<path d="M55 66 L60 74 L65 66 Z"/>' +
      '<path d="M46 86 q4.5 5 9 0 M55 86 q4.5 5 9 0 M64 86 q4.5 5 9 0 M50.5 95 q4.5 5 9 0 M59.5 95 q4.5 5 9 0"/>' +
      '<path d="M22 114 H98 M50 108 v6 M70 108 v6"/>',
    fuchs:
      '<path d="M18 16 L44 40 Q60 35 76 40 L102 16 L96 58 Q92 72 80 80 L60 102 L40 80 Q28 72 24 58 Z"/>' +
      '<path d="M28 28 L40 46 M92 28 L80 46"/>' +
      '<path d="M24 58 Q40 62 48 74 L60 102 L72 74 Q80 62 96 58"/>' +
      '<circle class="voll" cx="46" cy="60" r="4"/><circle class="voll" cx="74" cy="60" r="4"/>' +
      '<circle class="voll" cx="60" cy="98" r="5"/>',
    loewe:
      '<path d="M60 12 L70 20 L83 16 L87 29 L100 33 L97 46 L107 56 L98 66 L103 79 L90 84 L88 98 L75 96 L66 106 L60 104 L54 106 L45 96 L32 98 L30 84 L17 79 L22 66 L13 56 L23 46 L20 33 L33 29 L37 16 L50 20 Z"/>' +
      '<circle cx="60" cy="60" r="27"/>' +
      '<circle class="voll" cx="50" cy="55" r="3.6"/><circle class="voll" cx="70" cy="55" r="3.6"/>' +
      '<path d="M54 67 L66 67 L60 74 Z"/><path d="M60 74 V79 M60 79 Q55 84 50 81 M60 79 Q65 84 70 81"/>',
    hund:
      '<path d="M42 28 Q60 20 78 28 Q86 34 86 50 L86 74 Q86 98 60 100 Q34 98 34 74 L34 50 Q34 34 42 28 Z"/>' +
      '<path d="M42 28 C26 30 18 50 22 74 C32 74 38 64 38 52 M78 28 C94 30 102 50 98 74 C88 74 82 64 82 52"/>' +
      '<circle class="voll" cx="49" cy="58" r="4"/><circle class="voll" cx="71" cy="58" r="4"/>' +
      '<ellipse class="voll" cx="60" cy="76" rx="8" ry="5.5"/>' +
      '<path d="M60 81 V87 M60 87 Q54 92 49 89 M60 87 Q66 92 71 89"/>',
    delfin:
      '<path d="M24 90 C30 56 62 34 92 40 C100 42 106 46 110 52 L99 56 C80 54 56 66 38 96"/>' +
      '<path d="M24 90 L8 86 Q20 96 22 108 L30 98 L38 96"/>' +
      '<path d="M60 38 Q60 22 74 16 Q70 26 76 39"/>' +
      '<circle class="voll" cx="93" cy="47" r="3.4"/>',
    mensch:
      '<circle cx="60" cy="40" r="20"/><path d="M22 108 C22 82 40 70 60 70 C80 70 98 82 98 108"/>',
    hand:
      '<path d="M44 62 V30 a7 7 0 0 1 14 0 V58"/><path d="M58 56 V20 a7 7 0 0 1 14 0 V58"/>' +
      '<path d="M72 58 V28 a7 7 0 0 1 14 0 V66"/>' +
      '<path d="M86 66 V44 a7 7 0 0 1 14 0 V78 C100 98 86 112 66 112 H62 C50 112 42 108 34 100 L18 82 a7 7 0 0 1 10 -10 L44 86 V62"/>'
  };

  /* Tiername → Schlüssel der Zeichnung („Löwe“ → „loewe“) */
  function bildSchluessel(name) {
    return String(name || '').trim().toLowerCase()
      .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
      .replace(/[^a-z]/g, '');
  }

  /* Zeichnung als <svg> einsetzen; liefert null, wenn es keine gibt */
  function bild(util, schluessel, klasse, eltern) {
    if (!schluessel || !BILDER[schluessel]) return null;
    var svg = util.svg('svg', { class: klasse, viewBox: '0 0 120 120', 'aria-hidden': 'true', focusable: 'false' }, eltern);
    svg.innerHTML = BILDER[schluessel];
    return svg;
  }

  /* Bild für einen Eintrag: "bild" in den Daten hat Vorrang ("" = kein Bild),
     sonst wird es über den Tiernamen gesucht */
  function bildFuer(name, bildAngabe) {
    if (bildAngabe !== undefined && bildAngabe !== null) return bildSchluessel(bildAngabe);
    return bildSchluessel(name);
  }

  /* Text mit „[Marke]“ als Knoten einsetzen; der Markenname wird zu
     <em data-marke> (Akzentfarbe im Titel, Name aus marke.js) */
  function textMitMarke(util, text, eltern) {
    eltern.textContent = '';
    String(text).split('[Marke]').forEach(function (teil, i) {
      if (i > 0) util.element('em', { 'data-marke': '' }, null, eltern);
      if (teil) eltern.appendChild(document.createTextNode(teil));
    });
  }


  /* ===========================================================================
     f08 – Analogien & Live-Umfrage
     =========================================================================== */

  /* Titel (Schritt 0–1) = Frage aus marke.js, damit beides übereinstimmt */
  function frageSetzen(ctx) {
    var frage = ctx.marke && ctx.marke.umfragen && ctx.marke.umfragen.tier && ctx.marke.umfragen.tier.frage;
    var ziel = ctx.folie.querySelector('.g4-titel-frage');
    if (frage && ziel) textMitMarke(ctx.util, frage, ziel);
  }

  /* Ohne Abstimm-Link gibt es keinen QR-Code: dann links einen ruhigen
     Aufruf „Abstimmung per Handzeichen“ über dem Stimmenzähler zeigen. */
  function handzeichen(ctx) {
    var util = ctx.util;
    var spalte = ctx.folie.querySelector('.umfrage-qr');
    if (!spalte || spalte.querySelector('.qr')) return;
    var block = util.element('div', { class: 'g4-handzeichen' });
    bild(util, 'hand', 'g4-hand', block);
    util.element('p', { class: 'g4-handzeichen-text' }, 'Abstimmung per Handzeichen', block);
    spalte.insertBefore(block, spalte.firstChild);
    spalte.classList.add('g4-ohne-qr');
  }

  /* Karte „Als Tier“: Zeichnung, Tiername, drei Gründe */
  function tierKarte(ctx, karte, tier) {
    var util = ctx.util;
    var name = tier.name || (ctx.marke.umfragen && ctx.marke.umfragen.tier && ctx.marke.umfragen.tier.unsereAntwort) || '…';
    bild(util, bildFuer(name, tier.bild), 'g4-bild', karte);
    var inhalt = util.element('div', { class: 'g4-karte-inhalt' }, null, karte);
    util.element('span', { class: 'karte-kicker', 'data-meta': '' }, 'Als Tier', inhalt);
    util.element('p', { class: 'g4-tiername' }, name, inhalt);
    var liste = util.element('ol', { class: 'g4-gruende' }, null, inhalt);
    (tier.gruende || []).slice(0, 3).forEach(function (grund, i) {
      var li = util.element('li', null, null, liste);
      util.element('span', { class: 'g4-nr', 'data-meta': '', 'aria-hidden': 'true' }, String(i + 1).padStart(2, '0'), li);
      util.element('span', { class: 'g4-grund' }, util.markeText(grund), li);
    });
  }

  /* Karte „Als Mensch“: Zeichnung + Kurzprofil (Merkmal → Wert) */
  function menschKarte(ctx, karte, mensch) {
    var util = ctx.util;
    bild(util, 'mensch', 'g4-bild', karte);
    var inhalt = util.element('div', { class: 'g4-karte-inhalt' }, null, karte);
    util.element('span', { class: 'karte-kicker', 'data-meta': '' }, 'Als Mensch', inhalt);
    var dl = util.element('dl', { class: 'g4-steckbrief' }, null, inhalt);
    (mensch || []).forEach(function (zeile) {
      var paar = util.element('div', { class: 'g4-steckbrief-zeile' }, null, dl);
      util.element('dt', { 'data-meta': '' }, zeile.merkmal || '', paar);
      util.element('dd', null, util.markeText(zeile.wert || ''), paar);
    });
  }

  /* Kontrastzeile: zwei Wettbewerber, klein und zurückgenommen */
  function wettbewerberListe(ctx, liste, wettbewerber) {
    var util = ctx.util;
    (wettbewerber || []).slice(0, 2).forEach(function (w) {
      var eintrag = util.element('article', { class: 'g4-wb' }, null, liste);
      bild(util, bildFuer(w.tier, w.bild), 'g4-wb-bild', eintrag);
      var text = util.element('div', { class: 'g4-wb-text' }, null, eintrag);
      util.element('span', { class: 'g4-wb-name', 'data-meta': '' }, util.markeText(w.name || ''), text);
      var tier = util.element('p', { class: 'g4-wb-tier' }, null, text);
      util.element('span', { class: 'g4-wb-tiername' }, w.tier || '', tier);
      if (w.stichworte) util.element('span', { class: 'g4-wb-stichworte' }, ' – ' + w.stichworte, tier);
      if (w.mensch) {
        var mensch = util.element('p', { class: 'g4-wb-mensch' }, null, text);
        mensch.innerHTML = util.icon('person');
        mensch.appendChild(document.createTextNode(w.mensch));
      }
    });
  }

  /* Ab Schritt 2 ist die Umfrage ausgeblendet. Der Baustein würde Ziffern 1–9
     aber weiter als Stimmen zählen (unsichtbar). Deshalb fangen wir Ziffern auf
     f08 ab Schritt 2 ab, bevor sie die Engine erreichen. (Das Anspringen von
     Folien per Ziffer + Enter geht auf dieser Folie ohnehin nicht, weil die
     Umfrage die Ziffern übernimmt – es geht also nichts verloren.) */
  window.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    if (!/^(Digit|Numpad)[1-9]$/.test(e.code || '')) return;
    var ziel = e.target;
    if (ziel && (ziel.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(ziel.tagName || ''))) return;
    var z = Deck.zustand ? Deck.zustand() : null;
    if (!z || z.folie !== 'f08' || z.schritt < 2) return;
    e.stopImmediatePropagation();
    e.preventDefault();
  }, true);

  Deck.registriere('f08', {
    einrichten: function (ctx) {
      var d = ctx.daten || {};
      var m = d.marke || {};
      frageSetzen(ctx);
      handzeichen(ctx);
      var tier = ctx.folie.querySelector('[data-g4="tier"]');
      var mensch = ctx.folie.querySelector('[data-g4="mensch"]');
      var wb = ctx.folie.querySelector('[data-g4="wettbewerber"]');
      if (tier) tierKarte(ctx, tier, m.tier || {});
      if (mensch) menschKarte(ctx, mensch, m.mensch);
      if (wb) wettbewerberListe(ctx, wb, d.wettbewerber);
    }
  });


  /* ===========================================================================
     f08b – Markentonalität: Profil nach Aaker
     =========================================================================== */

  /* Wert → Lage auf der Skala in Prozent (1 → 0 %, 5 → 100 %) */
  function lage(wert, skala) {
    var min = skala[0];
    var max = skala[1];
    var v = Math.max(min, Math.min(max, Number(wert)));
    return (v - min) / (max - min) * 100;
  }

  function profilBauen(ctx) {
    var util = ctx.util;
    var d = ctx.daten || {};
    var ziel = ctx.folie.querySelector('[data-g4t="profil"]');
    if (!ziel || !Array.isArray(d.dimensionen)) return;
    var skala = Array.isArray(d.skala) && d.skala.length === 2 ? d.skala.map(Number) : [1, 5];
    var wettbewerber = Array.isArray(d.wettbewerber) ? d.wettbewerber : [];
    var merkmale = Array.isArray(d.merkmale) ? d.merkmale : [];
    var markeName = util.markeText('[Marke]');

    var dimensionen = d.dimensionen.slice();
    if (d.sortierung !== 'aaker') {
      dimensionen.sort(function (a, b) { return (Number(b.marke) || 0) - (Number(a.marke) || 0); });
    }
    var mitWettbewerb = wettbewerber.length > 0 && dimensionen.some(function (dim) {
      return Array.isArray(dim.wettbewerber) && dim.wettbewerber.length;
    });
    /* Schritte: 1 Marke · 2 Wettbewerber · 3 Merkmale · 4 Ergebnis.
       Ohne Wettbewerberwerte rücken Merkmale und Ergebnis einen Schritt vor. */
    var schrittMerkmale = mitWettbewerb ? 3 : 2;
    var ergebnis = ctx.folie.querySelector('.g4t-ergebnis');
    if (ergebnis) ergebnis.setAttribute('data-schritt', String(schrittMerkmale + 1));

    /* Beschreibung für Screenreader */
    ziel.setAttribute('role', 'group');
    ziel.setAttribute('aria-label', 'Markenpersönlichkeit nach Aaker, Skala ' + skala[0] + ' bis ' + skala[1] +
      ' (Beispieldaten): ' + dimensionen.map(function (dim) {
        var teile = [markeName + ' ' + util.zahlFormat(dim.marke, 1)];
        (dim.wettbewerber || []).forEach(function (w, i) {
          if (wettbewerber[i]) teile.push(wettbewerber[i].name + ' ' + util.zahlFormat(w, 1));
        });
        return dim.name + ': ' + teile.join(', ');
      }).join('; '));

    /* Legende: Marke ab Schritt 1, Wettbewerber ab Schritt 2 */
    var legende = util.element('div', { class: 'g4t-legende', 'data-meta': '' }, null, ziel);
    var legMarke = util.element('span', { class: 'g4t-leg', 'data-schritt': '1' }, null, legende);
    util.element('span', { class: 'g4t-leg-punkt', 'aria-hidden': 'true' }, null, legMarke);
    util.element('span', null, markeName, legMarke);
    if (mitWettbewerb) {
      wettbewerber.forEach(function (w) {
        var leg = util.element('span', { class: 'g4t-leg', 'data-schritt': '2' }, null, legende);
        util.element('span', { class: 'g4t-wb-marker g4t-wb-marker--legende', 'aria-hidden': 'true' }, w.kuerzel || '', leg);
        util.element('span', null, util.markeText(w.name || ''), leg);
      });
    }

    var diagramm = util.element('div', { class: 'g4t-diagramm' }, null, ziel);
    var ticks = [];
    for (var t = skala[0]; t <= skala[1]; t++) ticks.push(t);

    dimensionen.forEach(function (dim) {
      var eigene = merkmale.filter(function (mm) { return String(mm.dimension).trim() === String(dim.name).trim(); });
      var zeile = util.element('div', { class: 'g4t-zeile' + (eigene.length ? ' hat-merkmale' : '') }, null, diagramm);

      /* Kopfzeile: Name der Dimension + zugeordnete Merkmale (Schritt 3) */
      var kopf = util.element('div', { class: 'g4t-kopf' }, null, zeile);
      util.element('span', { class: 'g4t-name' }, dim.name, kopf);
      if (eigene.length) {
        var chips = util.element('span', { class: 'g4t-merkmale', 'data-schritt': String(schrittMerkmale), 'data-staffel': '90', 'data-animation': 'hoch' }, null, kopf);
        eigene.forEach(function (mm) {
          util.element('span', { class: 'chip chip--gross chip--weich' }, util.markeText(mm.merkmal), chips);
        });
      }

      /* Spur mit Skalenstrichen, Balken + Punkt der Marke, Marker A/B */
      var spur = util.element('div', { class: 'g4t-spur' }, null, zeile);
      ticks.forEach(function (wert) {
        util.element('span', { class: 'g4t-strich', 'aria-hidden': 'true', style: 'left:' + lage(wert, skala) + '%' }, null, spur);
      });
      var x = lage(dim.marke, skala);
      util.element('span', { class: 'g4t-balken', 'data-schritt': '1', 'data-animation': 'zeichnen', style: 'width:' + x + '%' }, null, spur);

      if (mitWettbewerb) {
        var werte = Array.isArray(dim.wettbewerber) ? dim.wettbewerber : [];
        /* liegen A und B fast gleichauf, rücken sie leicht über/unter die Linie */
        var eng = werte.length > 1 && Math.abs(lage(werte[0], skala) - lage(werte[1], skala)) < 4;
        werte.forEach(function (w, i) {
          if (w === null || w === undefined || !wettbewerber[i]) return;
          var versatz = eng ? (i === 0 ? ' g4t-wb-marker--oben' : ' g4t-wb-marker--unten') : '';
          util.element('span', {
            class: 'g4t-wb-marker' + versatz, 'data-meta': '', 'aria-hidden': 'true',
            'data-schritt': '2', 'data-animation': 'feder', 'data-verzoegerung': String(i * 120),
            style: 'left:' + lage(w, skala) + '%'
          }, wettbewerber[i].kuerzel || '', spur);
        });
      }
      util.element('span', { class: 'g4t-punkt', 'aria-hidden': 'true', 'data-schritt': '1', 'data-animation': 'feder', 'data-verzoegerung': '650', style: 'left:' + x + '%' }, null, spur);

      /* Zahl rechts – zählt in Schritt 1 hoch, im Druck steht der Endwert */
      util.element('span', {
        class: 'g4t-wert', 'data-schritt': '1', 'data-animation': 'zaehlen',
        'data-ziel': String(dim.marke), 'data-dezimalen': '1'
      }, util.zahlFormat(Number(dim.marke), 1), zeile);
    });

    /* Achse mit den Skalenwerten unter dem Profil */
    var achse = util.element('div', { class: 'g4t-skala', 'aria-hidden': 'true' }, null, diagramm);
    var achseSpur = util.element('div', { class: 'g4t-skala-spur' }, null, achse);
    ticks.forEach(function (wert) {
      util.element('span', { style: 'left:' + lage(wert, skala) + '%' }, String(wert), achseSpur);
    });
  }

  /* Ergebniskarte: Markenemotionen und Markenbeziehung */
  function ergebnisFuellen(ctx) {
    var util = ctx.util;
    var d = ctx.daten || {};
    var emotionen = ctx.folie.querySelector('[data-g4t="emotionen"]');
    var beziehung = ctx.folie.querySelector('[data-g4t="beziehung"]');
    if (emotionen) {
      (d.emotionen || []).forEach(function (e) { util.element('li', null, util.markeText(e), emotionen); });
    }
    if (beziehung) beziehung.textContent = util.markeText(d.beziehung || '');
  }

  Deck.registriere('f08b', {
    einrichten: function (ctx) {
      profilBauen(ctx);
      ergebnisFuellen(ctx);
    }
  });
})();
