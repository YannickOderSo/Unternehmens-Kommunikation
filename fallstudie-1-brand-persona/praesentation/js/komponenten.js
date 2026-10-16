/* =============================================================================
   komponenten.js – Bausteine für die Folien
   -----------------------------------------------------------------------------
   Jeder Baustein wird über eine CSS-Klasse im Folien-HTML aktiviert und
   von deck.js beim Start aufgebaut (Beispiele für alles: AUTOREN.md und
   folien/_demo.html).

     .steuerrad   Markensteuerrad (SVG) – data-modus="hub|synthese|menue|mini"
     .qr          QR-Code als scharfes SVG – data-qr="https://…"
     .umfrage     Live-Umfrage mit QR-Code, Zählmodus und Balken
     .wortwolke   Live-Wortwolke (Zurufe eintippen)
     .raetsel     Bild-Rätsel: stark vergrößert und unscharf, wird schrittweise klar
     .hantel      Mini-Hantel: Punkt Marke ↔ Punkt Wettbewerber auf einer Skala

   Modellbegriffe (Markensteuerrad, Leitfragen) nach Esch, Strategie und
   Technik der Markenführung – bitte mit den Vorlesungsfolien abgleichen.
   ============================================================================= */
(function () {
  'use strict';

  var Deck = window.Deck;
  if (!Deck || !Deck.util) {
    console.error('komponenten.js: deck.js muss vorher geladen werden.');
    return;
  }
  var util = Deck.util;
  var el = util.element;
  var svg = util.svg;
  var rund = util.rund;
  var marke = Deck.marke;
  var zaehler = 0;
  function eindeutig(praefix) { zaehler++; return praefix + '-' + zaehler; }

  function datenAus(element) {
    /* Konfiguration als <script type="application/json"> direkt im Baustein */
    var skript = element.querySelector(':scope > script[type="application/json"]');
    if (!skript) return null;
    try { return JSON.parse(skript.textContent); }
    catch (e) { console.error('Baustein: JSON ist fehlerhaft – ' + e.message); return null; }
  }


  /* ===========================================================================
     1. MARKENSTEUERRAD
     ---------------------------------------------------------------------------
     Felder (nach Esch):  kompetenz (Zentrum) · nutzen (oben links) ·
     attribute (unten links) · tonalitaet (oben rechts) · bild (unten rechts)
     + Rahmen „persona“ (Brand Persona / Limbic Map als Bezugsrahmen).
     Linke Hälfte = hard facts (rational), rechte Hälfte = soft facts (emotional).
     Klick auf ein Feld springt zur ersten Folie mit passendem data-feld.
     =========================================================================== */
  var FELDER = {
    kompetenz:  { name: 'Markenkompetenz', zeilen: ['Marken-', 'kompetenz'], frage: 'Wer bin ich?', seite: 'kern' },
    nutzen:     { name: 'Markennutzen', zeilen: ['Marken-', 'nutzen'], frage: 'Was biete ich an?', seite: 'hart', sx: -1, sy: -1 },
    attribute:  { name: 'Markenattribute', zeilen: ['Marken-', 'attribute'], frage: 'Über welche Eigenschaften verfüge ich?', seite: 'hart', sx: -1, sy: 1 },
    tonalitaet: { name: 'Markentonalität', zeilen: ['Marken-', 'tonalität'], frage: 'Wie bin ich?', seite: 'weich', sx: 1, sy: -1 },
    bild:       { name: 'Markenbild', zeilen: ['Marken-', 'bild'], frage: 'Wie trete ich auf?', seite: 'weich', sx: 1, sy: 1 },
    persona:    { name: 'Brand Persona', frage: 'Bezugsrahmen', seite: 'rahmen' }
  };
  var VIERTEL = ['nutzen', 'tonalitaet', 'bild', 'attribute'];

  /* Methoden auf der Vorgehen-Folie (Modus „hub“). Überschreibbar per JSON. */
  var STANDARD_METHODEN = [
    { feld: 'kompetenz',  name: 'Desk Research',             text: 'Herkunft, Historie, Marktrolle' },
    { feld: 'persona',    name: 'Brand Persona + Limbic Map', text: 'Zielgruppe als Bezugsrahmen' },
    { feld: 'attribute',  name: 'Repertory Grid',            text: 'Vergleich mit Wettbewerbern' },
    { feld: 'nutzen',     name: 'Laddering',                 text: 'Means-End-Kette bis zum Wert' },
    { feld: 'tonalitaet', name: 'Analogien',                 text: 'Marke als Mensch und als Tier' },
    { feld: 'bild',       name: 'Kommunikationsanalyse',     text: 'Auftritt in den sozialen Medien' }
  ];
  /* Logikpfeile zwischen Methoden (gestrichelt) */
  var STANDARD_LOGIK = [
    { von: 'attribute', nach: 'nutzen', text: 'Attribute sind die Startpunkte' },
    { von: 'tonalitaet', nach: 'bild', text: 'Tonalität ist der Prüfmaßstab' }
  ];
  /* Position der Karten im Hub-/Synthese-Layout */
  var PLATZ = { kompetenz: 'oben', persona: 'unten', nutzen: 'lo', attribute: 'lu', tonalitaet: 'ro', bild: 'ru' };

  function zielFuer(feld) { return Deck.feldZiel(feld); }

  function springen(feld, quelle) {
    var ziel = zielFuer(feld);
    if (!ziel) { Deck.hinweis('Zu „' + (FELDER[feld] ? FELDER[feld].name : feld) + '“ gibt es noch keine Folie'); return; }
    if (quelle && quelle.closest('.sprungmenue')) Deck._menueZiel(ziel.id);
    else Deck.gehe(ziel.id, 0);
  }

  /* Geometrie eines Rads mit Außendurchmesser d */
  function radMasse(d, mitRingtext) {
    var R = d / 2;
    var Rf = mitRingtext ? R - 40 : R - 24;      // Feld außen
    var ring = Rf + 14;                           // Ringlinie (Persona-Rahmen)
    var ri = Rf * 0.37;                           // Feld innen
    var spalt = Math.max(2.5, d * 0.019);         // Spalt zwischen den Feldern
    var rk = ri - spalt;                          // Zentrum
    if (d < 120) {                                // Mini-Rad: eigene Proportionen
      ring = R - 1.5;
      Rf = R - 5.5;
      ri = Rf * 0.4;
      spalt = 2.6;
      rk = ri - spalt;
    }
    return { d: d, R: R, Rf: Rf, ring: ring, ri: ri, rk: rk, spalt: spalt, cx: R, cy: R };
  }

  /* Viertel-Pfad mit Spalt (sx, sy = Richtung des Viertels) */
  function viertelPfad(m, sx, sy) {
    var g = m.spalt / 2;
    var a = Math.sqrt(m.Rf * m.Rf - g * g);
    var b = Math.sqrt(m.ri * m.ri - g * g);
    var A = [m.cx + sx * a, m.cy + sy * g];
    var B = [m.cx + sx * g, m.cy + sy * a];
    var C = [m.cx + sx * g, m.cy + sy * b];
    var D = [m.cx + sx * b, m.cy + sy * g];
    var aussen = sx * sy > 0 ? 1 : 0;
    var innen = 1 - aussen;
    return 'M' + rund(A[0]) + ' ' + rund(A[1]) +
      ' A' + rund(m.Rf) + ' ' + rund(m.Rf) + ' 0 0 ' + aussen + ' ' + rund(B[0]) + ' ' + rund(B[1]) +
      ' L' + rund(C[0]) + ' ' + rund(C[1]) +
      ' A' + rund(m.ri) + ' ' + rund(m.ri) + ' 0 0 ' + innen + ' ' + rund(D[0]) + ' ' + rund(D[1]) + ' Z';
  }

  /* Ein Feld anklickbar und per Tastatur bedienbar machen */
  function feldBedienbar(knoten, feld, quelleEl) {
    var ziel = zielFuer(feld);
    var name = FELDER[feld] ? FELDER[feld].name : feld;
    knoten.setAttribute('data-feld', feld);
    knoten.setAttribute('data-paar', feld);
    knoten.classList.add('sr-feld');
    if (!ziel) { knoten.classList.add('ist-ohne-ziel'); return; }
    knoten.setAttribute('tabindex', '0');
    knoten.setAttribute('role', 'link');
    knoten.setAttribute('aria-label', name + ' – zu Folie ' + ziel.nummer + ' (' + ziel.titel + ')');
    knoten.addEventListener('click', function (e) { e.stopPropagation(); springen(feld, quelleEl); });
    knoten.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); springen(feld, quelleEl); }
    });
  }

  /* Rad zeichnen. optionen: { beschriftung: 'frage'|'folie'|'name'|'keine',
     ringtext: true/false, rahmentext: '…', klickbar: true/false } */
  function radBauen(huelle, d, optionen) {
    optionen = optionen || {};
    var m = radMasse(d, optionen.ringtext);
    var rad = el('div', { class: 'sr-rad' }, null, huelle);
    rad.style.width = d + 'px';
    rad.style.height = d + 'px';
    var s = svg('svg', { class: 'sr-svg', viewBox: '0 0 ' + d + ' ' + d, width: d, height: d, 'aria-hidden': optionen.klickbar ? null : 'true' }, rad);
    var teile = { rad: rad, svg: s, m: m, felder: {} };

    /* Persona-Rahmen (Ring). Breiter, unsichtbarer Strich = Klickfläche */
    var rahmen = svg('g', { class: 'sr-rahmen-gruppe' }, s);
    svg('circle', { class: 'sr-ring', cx: m.cx, cy: m.cy, r: rund(m.ring) }, rahmen);
    if (optionen.klickbar) {
      svg('circle', { class: 'sr-ring-klick', cx: m.cx, cy: m.cy, r: rund((m.Rf + m.R) / 2), 'stroke-width': rund(m.R - m.Rf - 2) }, rahmen);
      feldBedienbar(rahmen, 'persona', huelle);
    } else {
      rahmen.setAttribute('data-feld', 'persona');
      rahmen.setAttribute('data-paar', 'persona');
    }
    teile.felder.persona = { g: rahmen };

    /* Vier Felder */
    VIERTEL.forEach(function (feld) {
      var f = FELDER[feld];
      var g = svg('g', { class: 'sr-viertel sr-' + f.seite }, s);
      svg('path', { class: 'sr-flaeche', d: viertelPfad(m, f.sx, f.sy) }, g);
      if (optionen.klickbar) feldBedienbar(g, feld, huelle);
      else { g.setAttribute('data-feld', feld); g.setAttribute('data-paar', feld); }
      teile.felder[feld] = { g: g };
    });

    /* Zentrum */
    var kern = svg('g', { class: 'sr-kern-gruppe' }, s);
    svg('circle', { class: 'sr-kern', cx: m.cx, cy: m.cy, r: rund(m.rk) }, kern);
    if (optionen.klickbar) feldBedienbar(kern, 'kompetenz', huelle);
    else { kern.setAttribute('data-feld', 'kompetenz'); kern.setAttribute('data-paar', 'kompetenz'); }
    teile.felder.kompetenz = { g: kern };

    /* Ringtexte: oben hard/soft facts, unten Persona-Rahmen */
    if (optionen.ringtext) {
      var id = eindeutig('sr-bogen');
      var defs = svg('defs', {}, s);
      var rOben = m.ring + 9;
      var rUnten = m.ring + 25;
      svg('path', { id: id + '-o', d: 'M' + rund(m.cx - rOben) + ' ' + m.cy + ' A' + rund(rOben) + ' ' + rund(rOben) + ' 0 0 1 ' + rund(m.cx + rOben) + ' ' + m.cy }, defs);
      svg('path', { id: id + '-u', d: 'M' + rund(m.cx - rUnten) + ' ' + m.cy + ' A' + rund(rUnten) + ' ' + rund(rUnten) + ' 0 0 0 ' + rund(m.cx + rUnten) + ' ' + m.cy }, defs);
      var halbe = Math.PI * rOben / 2;
      var t1 = svg('text', { class: 'sr-ringtext sr-ringtext--hart', 'text-anchor': 'end' }, s);
      svg('textPath', { href: '#' + id + '-o', startOffset: rund(halbe - 16) }, t1).textContent = 'HARD FACTS · RATIONAL';
      var t2 = svg('text', { class: 'sr-ringtext sr-ringtext--weich', 'text-anchor': 'start' }, s);
      svg('textPath', { href: '#' + id + '-o', startOffset: rund(halbe + 16) }, t2).textContent = 'SOFT FACTS · EMOTIONAL';
      svg('line', { class: 'sr-ringstrich', x1: m.cx, y1: rund(m.cy - m.ring - 6), x2: m.cx, y2: rund(m.cy - m.ring - 26) }, s);
      if (optionen.rahmentext) {
        var t3 = svg('text', { class: 'sr-ringtext sr-ringtext--rahmen', 'text-anchor': 'middle', 'data-paar': 'persona' }, s);
        svg('textPath', { href: '#' + id + '-u', startOffset: '50%' }, t3).textContent = optionen.rahmentext.toUpperCase();
        teile.rahmentext = t3;
      }
    }

    /* Beschriftungen als HTML über dem SVG (Klicks gehen durch auf die Felder).
       Der Feldname sitzt auf der Zeile optionen.zeile (Anteil des Radius, dort
       enden im Hub die Verbinder); die Leitfrage steht jeweils zur Radmitte hin.
       Die Schriftgröße der Feldnamen wird gemessen, damit der längste Name in
       sein Feld passt (höchstens 32 px, mindestens 24 px). */
    if (optionen.beschriftung && optionen.beschriftung !== 'keine') {
      var zeileY = m.Rf * (optionen.zeile || 0.5);
      var halbBreite = Math.sqrt(m.Rf * m.Rf - zeileY * zeileY);
      var innenX = m.spalt / 2 + 12;
      var aussenX = halbBreite - (optionen.randabstand || 30);
      var verfuegbar = Math.max(120, aussenX - innenX);
      /* einzeilig, wenn der längste Name mit mindestens 30 px passt –
         sonst zweizeilig („Marken-“ / „attribute“), dann bis 36 px */
      var breitester = Math.max.apply(null, VIERTEL.map(function (feld) { return textBreite(FELDER[feld].name, 32, 'display'); }));
      var groesse = Math.floor(32 * (verfuegbar - 4) / (breitester || 1));
      var zweizeilig = groesse < 30;
      if (zweizeilig) {
        var breitesteZeile = Math.max.apply(null, VIERTEL.map(function (feld) {
          return Math.max.apply(null, FELDER[feld].zeilen.map(function (z) { return textBreite(z, 32, 'display'); }));
        }));
        groesse = Math.floor(32 * (verfuegbar - 4) / (breitesteZeile || 1));
      }
      groesse = Math.max(24, Math.min(zweizeilig ? 36 : 34, groesse));
      rad.style.setProperty('--sr-label-groesse', groesse + 'px');
      rad.style.setProperty('--sr-name-hoehe', Math.round((zweizeilig ? 2 : 1) * groesse * 1.08) + 'px');
      VIERTEL.forEach(function (feld) {
        var f = FELDER[feld];
        var label = el('div', { class: 'sr-label sr-label--' + f.seite + ' sr-label--' + (f.sy < 0 ? 'oben' : 'unten'), 'data-paar': feld }, null, rad);
        label.style.left = rund(m.cx + f.sx * (innenX + aussenX) / 2) + 'px';
        label.style.top = rund(m.cy + f.sy * zeileY) + 'px';
        label.style.width = rund(verfuegbar) + 'px';
        var name = el('span', { class: 'sr-label-name' }, null, label);
        if (zweizeilig) name.innerHTML = f.zeilen.map(util.escape).join('<br>');
        else name.textContent = f.name;
        zusatzBeschriftung(label, feld, optionen.beschriftung);
        teile.felder[feld].label = label;
      });
      var kl = el('div', { class: 'sr-label sr-label--kern', 'data-paar': 'kompetenz' }, null, rad);
      kl.style.left = m.cx + 'px';
      kl.style.top = m.cy + 'px';
      kl.style.width = rund(m.rk * 1.9) + 'px';
      var kn = el('span', { class: 'sr-label-name' }, null, kl);
      kn.innerHTML = FELDER.kompetenz.zeilen.map(util.escape).join('<br>');
      kl.style.setProperty('--sr-kern-groesse', Math.max(m.rk >= 80 ? 28 : 22, Math.min(30, Math.floor(30 * (m.rk * 1.75) / (textBreite('kompetenz', 30, 'display') || 1)))) + 'px');
      zusatzBeschriftung(kl, 'kompetenz', optionen.beschriftung);
      teile.felder.kompetenz.label = kl;
      if (optionen.beschriftung === 'frage') teile.leitfragenPassen = leitfragenPassen(rad, m, d);
    }
    return teile;
  }

  /* Passen die Leitfragen in ihre Felder? (Sie dürfen weder in den Kern noch
     über den Feldrand ragen.) Gemessen wird im fertigen Layout. */
  function leitfragenPassen(rad, m, d) {
    return util.messen(rad, function () {
      var rr = rad.getBoundingClientRect();
      if (!rr.width) return true;
      var sk = rr.width / d;
      return !util.alle('.sr-label:not(.sr-label--kern) .sr-label-frage', rad).some(function (fr) {
        var q = fr.getBoundingClientRect();
        if (!q.width) return false;
        var x1 = (q.left - rr.left) / sk - m.cx, x2 = (q.right - rr.left) / sk - m.cx;
        var y1 = (q.top - rr.top) / sk - m.cy, y2 = (q.bottom - rr.top) / sk - m.cy;
        var nx = Math.max(x1, Math.min(0, x2)), ny = Math.max(y1, Math.min(0, y2));
        return Math.hypot(nx, ny) < m.ri + 4;
      });
    });
  }

  /* Textbreite messen (Canvas) – mit der Display- bzw. Textschrift des Themas */
  var messLeinwand = null;
  function textBreite(text, px, rolle) {
    try {
      messLeinwand = messLeinwand || document.createElement('canvas').getContext('2d');
      var st = getComputedStyle(document.documentElement);
      var fam = st.getPropertyValue(rolle === 'text' ? '--schrift-text' : '--schrift-display').trim() || 'serif';
      var gew = st.getPropertyValue(rolle === 'text' ? '--gewicht-text' : '--gewicht-display').trim() || '400';
      messLeinwand.font = gew + ' ' + px + 'px ' + fam;
      return messLeinwand.measureText(text).width * 1.03;
    } catch (e) { return text.length * px * 0.55; }
  }

  function zusatzBeschriftung(label, feld, art) {
    if (art === 'frage') {
      el('span', { class: 'sr-label-frage' }, FELDER[feld].frage, label);
    } else if (art === 'folie') {
      var z = zielFuer(feld);
      el('span', { class: 'sr-label-folie' }, z ? 'Folie ' + z.nummer : '–', label);
    }
  }

  /* Aktives Feld markieren (Mini-Rad, Sprungmenü) */
  function aktivSetzen(huelle) {
    var aktiv = huelle.getAttribute('data-aktiv') || '';
    util.alle('[data-feld]', huelle).forEach(function (k) {
      k.classList.toggle('ist-aktiv', k.getAttribute('data-feld') === aktiv);
    });
    huelle.classList.toggle('rahmen-aktiv', aktiv === 'persona');
  }

  /* Zeigen = Feld und zugehörige Methode leuchten, Rest tritt zurück (45 %) */
  function fokusSetzen(huelle, feld) {
    huelle.classList.toggle('hat-fokus', !!feld);
    util.alle('[data-paar]', huelle).forEach(function (k) {
      k.classList.toggle('ist-fokus', !!feld && k.getAttribute('data-paar') === feld);
    });
  }
  /* ---------- Mausregel (alle Steuerräder) ----------
     Eine liegen gebliebene Maus (z. B. noch über einem Feld, während mit dem
     Clicker weitergeschaltet wird) soll nichts hervorheben. Nach jedem
     Folien- oder Schrittwechsel ist der Zeiger „gesperrt“ (Klasse
     html.zeiger-gesperrt, schaltet auch die CSS-Hover-Effekte ab), bis die
     Maus mindestens MAUS_SCHWELLE px bewegt wurde. Danach wird das Zeigen
     für das Element unter der Maus nachgeholt. Tastaturfokus bleibt frei. */
  var MAUS_SCHWELLE = 6;
  var zeiger = { x: null, y: null, bezug: null, frei: true };
  function zeigerSperren() {
    zeiger.frei = false;
    zeiger.bezug = zeiger.x === null ? null : { x: zeiger.x, y: zeiger.y };
    document.documentElement.classList.add('zeiger-gesperrt');
  }
  document.addEventListener('deck:folie', zeigerSperren);
  document.addEventListener('deck:schritt', zeigerSperren);
  document.addEventListener('pointermove', function (e) {
    zeiger.x = e.clientX;
    zeiger.y = e.clientY;
    if (zeiger.frei) return;
    if (!zeiger.bezug) { zeiger.bezug = { x: e.clientX, y: e.clientY }; return; }
    if (Math.abs(e.clientX - zeiger.bezug.x) + Math.abs(e.clientY - zeiger.bezug.y) < MAUS_SCHWELLE) return;
    zeiger.frei = true;
    document.documentElement.classList.remove('zeiger-gesperrt');
    /* Zeigen nachholen: liegt die Maus über einem Feld oder einer Karte? */
    var unter = document.elementFromPoint(e.clientX, e.clientY);
    var k = unter && unter.closest && unter.closest('.steuerrad [data-paar]');
    var huelle = k && k.closest('.steuerrad');
    if (huelle && util.istAktiv(huelle) && !huelle._schrittFokus) fokusSetzen(huelle, k.getAttribute('data-paar'));
  }, { passive: true, capture: true });

  function zeigenKoppeln(huelle) {
    huelle.addEventListener('pointerover', function (e) {
      if (!zeiger.frei) return;          /* Mausregel: ruhende Maus zeigt nichts */
      var k = e.target.closest('[data-paar]');
      if (k && huelle.contains(k) && !huelle._schrittFokus) fokusSetzen(huelle, k.getAttribute('data-paar'));
    });
    huelle.addEventListener('pointerleave', function () { if (!huelle._schrittFokus) fokusSetzen(huelle, null); });
    huelle.addEventListener('focusin', function (e) {
      var k = e.target.closest('[data-paar]');
      if (k && !huelle._schrittFokus) fokusSetzen(huelle, k.getAttribute('data-paar'));
    });
    huelle.addEventListener('focusout', function () { if (!huelle._schrittFokus) fokusSetzen(huelle, null); });
  }

  /* ---------- Hub- und Synthese-Layout: Rad in der Mitte, Karten außen ----------
     Größe: Das Rad füllt den freien Platz im Folieninhalt (oder fest per
     data-breite/data-hoehe). Beim Betreten und nach einem Themenwechsel wird
     nachgemessen und bei Bedarf neu gebaut – so wird nie etwas abgeschnitten. */
  function hubMasse(huelle) {
    var B = parseFloat(huelle.getAttribute('data-breite'));
    var H = parseFloat(huelle.getAttribute('data-hoehe'));
    if (B && H) return { B: B, H: H };
    var gemessen = util.messen(huelle, function () {
      return { B: huelle.clientWidth, H: huelle.clientHeight };
    });
    /* Kein messbarer Platz (z. B. Rad in einem Element ohne Höhe)? Dann
       Standardgröße 1664 × 672 und die Hülle selbst so hoch machen. */
    if (!H && !(gemessen.H >= 360)) huelle.style.minHeight = '672px';
    return {
      B: B || (gemessen.B >= 900 ? Math.round(gemessen.B) : 1664),
      H: H || (gemessen.H >= 360 ? Math.round(gemessen.H) : 672)
    };
  }

  function folienText(ziel) {
    if (!ziel) return '';
    var b = ziel.bereich || ziel.nummer;
    return (b.indexOf('–') >= 0 ? 'Folien ' : 'Folie ') + b;
  }

  function hubBauen(huelle, ctx, modus) {
    var synthese = modus === 'synthese';
    if (huelle._konfig === undefined) huelle._konfig = datenAus(huelle) || {};
    if (huelle._morph === undefined) huelle._morph = huelle.getAttribute('data-morph') || 'steuerrad';
    huelle.removeAttribute('data-morph');
    /* Voreinstellungen: Leitfragen und Methodenbeschreibungen erscheinen nur
       für das gerade gezeigte Feld (Wortbudget ≤ 40 Wörter, Hinweis der Jury) */
    if (!synthese && !huelle.hasAttribute('data-leitfragen')) huelle.setAttribute('data-leitfragen', 'schrittweise');
    if (!synthese && !huelle.hasAttribute('data-beschreibungen')) huelle.setAttribute('data-beschreibungen', 'schrittweise');
    var konfig = huelle._konfig;

    var masse = hubMasse(huelle);
    var B = masse.B, H = masse.H;
    var kartenB = parseFloat(huelle.getAttribute('data-kartenbreite')) || Math.round(Math.min(480, B * 0.29));
    if (huelle._innen) huelle._innen.remove();
    var innen = el('div', { class: 'sr-hub' }, null, huelle);
    innen.style.width = B + 'px';
    innen.style.height = H + 'px';
    huelle._innen = innen;
    huelle._hub = { B: B, H: H, modus: modus };

    /* Radgröße: so groß wie die Höhe erlaubt (oben und unten bleibt Platz für
       die Pillen „Markenkompetenz“ und „Brand Persona“) und die Breite neben
       den Karten zulässt */
    var pilleH = 64;
    var ringMax = H / 2 - pilleH / 2 + 2;          /* Pillen sitzen mittig auf dem Ring */
    var RfAusBreite = (B / 2 - kartenB - 72) / 0.854;
    var Rf = Math.max(160, Math.min(ringMax - 14, RfAusBreite));
    var d = Math.round((Rf + 24) * 2);
    var zeile = 0.54;                             /* Höhe der Kartenreihen als Anteil von Rf */
    var cx = B / 2;
    var cy = H / 2;

    var radHuelle = el('div', { class: 'sr-rad-platz' }, null, innen);
    /* Verbinder liegen über dem Rad, damit die Punkte auf dem Feldrand ganz sichtbar sind */
    var linien = svg('svg', { class: 'sr-verbinder', viewBox: '0 0 ' + B + ' ' + H, width: B, height: H, 'aria-hidden': 'true' }, innen);
    radHuelle.style.left = rund(cx - d / 2) + 'px';
    radHuelle.style.top = rund(cy - d / 2) + 'px';
    var leitfragen = huelle.getAttribute('data-leitfragen');
    var teile = radBauen(radHuelle, d, {
      beschriftung: leitfragen === 'aus' || synthese ? 'name' : 'frage',
      klickbar: true,
      zeile: zeile
    });
    huelle._teile = teile;
    /* Leitfragen passen bei dieser Radgröße nicht in die Felder? Dann stehen
       sie in der Beschreibung unter der Methodenkarte (nur beim gezeigten Feld). */
    var frageInKarte = !synthese && leitfragen !== 'aus' && teile.leitfragenPassen === false;
    teile.rad.classList.toggle('sr-ohne-leitfragen', frageInKarte);
    if (huelle._morph !== 'aus') teile.rad.setAttribute('data-morph', huelle._morph);
    var m = teile.m;
    var RfAbs = m.Rf;
    var dy = Math.round(RfAbs * zeile);

    /* Seitenbeschriftung hard / soft facts */
    if (huelle.getAttribute('data-seiten') !== 'aus') {
      var sl = el('p', { class: 'sr-seite sr-seite--hart' }, null, innen);
      sl.innerHTML = '<b>Hard Facts</b> rational';
      var sr = el('p', { class: 'sr-seite sr-seite--weich' }, null, innen);
      sr.innerHTML = 'emotional <b>Soft Facts</b>';
    }

    /* Inhalte der Karten: Methoden (hub) oder Ergebnisse (synthese) */
    var eintraege;
    if (synthese) {
      var felder = konfig.felder || {};
      eintraege = ['kompetenz', 'persona', 'attribute', 'nutzen', 'tonalitaet', 'bild'].map(function (feld) {
        var e = felder[feld] || {};
        var worte = (e.stichworte || []).map(function (w) { return typeof w === 'string' ? { text: w, quelle: e.quelle || '' } : w; });
        return { feld: feld, name: FELDER[feld].name, stichworte: worte, quelle: e.quelle || '', text: e.text || '' };
      });
      if (konfig.rahmen && !eintraege[1].text) eintraege[1].text = konfig.rahmen;
    } else {
      eintraege = (konfig.methoden || STANDARD_METHODEN).map(function (x) { return Object.assign({}, x); });
    }
    var reihenfolge = konfig.reihenfolge || (synthese
      ? ['attribute', 'nutzen', 'tonalitaet', 'bild', 'persona', 'kompetenz']
      : ['kompetenz', 'persona', 'attribute', 'nutzen', 'tonalitaet', 'bild']);

    var mitBeschreibung = huelle.getAttribute('data-beschreibungen') !== 'aus';
    var karten = {};
    eintraege.forEach(function (e) {
      var platz = PLATZ[e.feld];
      if (!platz) return;
      var ziel = zielFuer(e.feld);
      var istPille = platz === 'oben' || platz === 'unten';
      var karte = el('button', {
        type: 'button',
        class: 'sr-karte sr-karte--' + platz + (istPille ? ' sr-pille' : '') + ' sr-karte--' + (FELDER[e.feld].seite),
        'data-paar': e.feld
      }, null, innen);
      if (!ziel) karte.classList.add('ist-ohne-ziel');
      var kopf = el('span', { class: 'sr-karte-kopf' }, null, karte);
      if (synthese) {
        el('span', { class: 'sr-karte-feld' }, e.name, kopf);
        var quellen = [];
        e.stichworte.forEach(function (w) { if (w.quelle && quellen.indexOf(w.quelle) < 0) quellen.push(w.quelle); });
        if (!quellen.length && e.quelle) quellen.push(e.quelle);
        quellen.forEach(function (q) { el('span', { class: 'sr-quelle' }, q, kopf); });
        var inhalt = el('span', { class: 'sr-karte-stichworte' }, null, karte);
        if (e.text) el('span', { class: 'sr-stichwort' }, util.markeText(e.text), inhalt);
        e.stichworte.forEach(function (w, i) {
          if (i > 0 || e.text) el('span', { class: 'sr-trenner', 'aria-hidden': 'true' }, '·', inhalt);
          el('span', { class: 'sr-stichwort' }, util.markeText(w.text), inhalt);
        });
        if (!e.stichworte.length && !e.text) el('span', { class: 'sr-stichwort sr-leer' }, '…', inhalt);
        karte.setAttribute('aria-label', e.name + ': ' + inhalt.textContent + (ziel ? ' – zu ' + folienText(ziel) : ''));
      } else {
        el('span', { class: 'sr-karte-name' }, util.markeText(e.name), kopf);
        /* eindeutiger Klick-Hinweis „Folie x →“ (Pfeil per CSS) */
        el('span', { class: 'sr-karte-folie' }, folienText(ziel), kopf);
        var frage = frageInKarte && e.feld !== 'kompetenz' && e.feld !== 'persona' ? FELDER[e.feld].frage : '';
        if ((mitBeschreibung && e.text) || frage) {
          var beschreibung = el('span', { class: 'sr-karte-text' }, null, karte);
          if (frage) el('em', { class: 'sr-karte-frage' }, frage, beschreibung);
          if (mitBeschreibung && e.text) beschreibung.appendChild(document.createTextNode(util.markeText(e.text)));
        }
        karte.setAttribute('aria-label', e.name + ' – füllt ' + FELDER[e.feld].name + (ziel ? ', zu ' + folienText(ziel) : ''));
      }
      karte.addEventListener('click', function (ev) { ev.stopPropagation(); springen(e.feld, huelle); });
      karten[e.feld] = karte;
    });
    huelle._karten = karten;

    /* Positionen der Karten und Verbinder */
    var yo = cy - dy;
    var yu = cy + dy;
    var xRand = Math.sqrt(RfAbs * RfAbs - dy * dy);
    var plaetze = {
      lo: { x: 0, y: yo, seite: -1 }, lu: { x: 0, y: yu, seite: -1 },
      ro: { x: B - kartenB, y: yo, seite: 1 }, ru: { x: B - kartenB, y: yu, seite: 1 }
    };
    var verbinder = {};
    Object.keys(karten).forEach(function (feld) {
      var karte = karten[feld];
      var platz = PLATZ[feld];
      if (plaetze[platz]) {
        var p = plaetze[platz];
        karte.style.left = p.x + 'px';
        karte.style.top = rund(p.y) + 'px';
        karte.style.width = kartenB + 'px';
        var x1 = p.seite < 0 ? kartenB + 12 : B - kartenB - 12;
        var x2 = p.seite < 0 ? cx - xRand : cx + xRand;        /* Punkt sitzt auf dem Feldrand */
        var g = svg('g', { class: 'sr-linie', 'data-paar': feld }, linien);
        svg('path', { d: 'M' + rund(x1) + ' ' + rund(p.y) + ' H' + rund(x2), class: 'sr-linie-strich' }, g);
        svg('circle', { cx: rund(x2), cy: rund(p.y), r: 7, class: 'sr-linie-punkt', 'data-animation': 'feder' }, g);
        verbinder[feld] = g;
      } else if (platz === 'oben') {
        /* Pille mittig auf dem oberen Ringrand, Linie durch den Spalt zum Kern */
        var obenY = cy - m.ring;
        karte.style.left = cx + 'px';
        karte.style.top = rund(obenY) + 'px';
        var g2 = svg('g', { class: 'sr-linie', 'data-paar': feld }, linien);
        svg('path', { d: 'M' + cx + ' ' + rund(obenY + pilleH / 2) + ' V' + rund(cy - m.rk - 8), class: 'sr-linie-strich' }, g2);
        svg('circle', { cx: cx, cy: rund(cy - m.rk - 8), r: 7, class: 'sr-linie-punkt', 'data-animation': 'feder' }, g2);
        verbinder[feld] = g2;
      } else if (platz === 'unten') {
        /* Pille mittig auf dem unteren Ringrand (der Rahmen = Persona) */
        karte.style.left = cx + 'px';
        karte.style.top = rund(cy + m.ring) + 'px';
      }
    });

    /* Logikpfeile (nur Vorgehen): Attribute → Nutzen, Tonalität → Bild */
    var logik = {};
    if (!synthese && huelle.getAttribute('data-logik') !== 'aus') {
      var defsId = eindeutig('sr-pfeil');
      var defs = svg('defs', {}, linien);
      var marker = svg('marker', { id: defsId, viewBox: '0 0 12 12', refX: 10, refY: 6, markerWidth: 14, markerHeight: 14, orient: 'auto-start-reverse', markerUnits: 'userSpaceOnUse' }, defs);
      svg('path', { d: 'M1 1 L11 6 L1 11', class: 'sr-pfeilspitze' }, marker);
      (konfig.logik || STANDARD_LOGIK).forEach(function (l) {
        var a = karten[l.von], b = karten[l.nach];
        if (!a || !b || !PLATZ[l.von] || PLATZ[l.von].length !== 2) return;
        var links = PLATZ[l.von].charAt(0) === 'l';
        var x = links ? 30 : B - 30;
        /* senkrechter Pfeil zwischen den beiden Karten einer Seite */
        var y1 = PLATZ[l.von].charAt(1) === 'u' ? yu - 74 : yo + 74;
        var y2 = PLATZ[l.nach].charAt(1) === 'u' ? yu - 74 : yo + 74;
        var g = svg('g', { class: 'sr-logik', 'data-paar': l.nach }, linien);
        svg('path', { d: 'M' + x + ' ' + rund(y1) + ' V' + rund(y2), class: 'sr-logik-strich', 'marker-end': 'url(#' + defsId + ')' }, g);
        var text = el('p', { class: 'sr-logik-text sr-logik-text--' + (links ? 'links' : 'rechts'), 'data-paar': l.nach }, util.markeText(l.text), innen);
        text.style.top = rund(cy) + 'px';
        text.style.width = Math.max(240, kartenB - 70) + 'px';
        logik[l.nach] = [g, text];
      });
    }

    /* Schrittweiser Aufbau: data-aufbau="schritte" */
    huelle._stufen = null;
    if (huelle.getAttribute('data-aufbau') === 'schritte') {
      var start = parseInt(huelle.getAttribute('data-schritt-start') || '1', 10);
      var stufen = [];
      reihenfolge.forEach(function (feld) {
        if (!karten[feld]) return;
        var n = start + stufen.length;
        var animation = PLATZ[feld] === 'oben' ? 'runter' : PLATZ[feld] === 'unten' ? 'hoch'
          : PLATZ[feld].charAt(0) === 'l' ? 'rechts' : 'links';
        karten[feld].setAttribute('data-schritt', n);
        karten[feld].setAttribute('data-animation', animation);
        if (verbinder[feld]) { verbinder[feld].setAttribute('data-schritt', n); verbinder[feld].setAttribute('data-animation', 'zeichnen'); verbinder[feld].setAttribute('data-verzoegerung', '120'); }
        if (logik[feld]) logik[feld].forEach(function (x) { x.setAttribute('data-schritt', n); x.setAttribute('data-animation', 'einblenden'); x.setAttribute('data-verzoegerung', '260'); });
        stufen.push(feld);
      });
      huelle._stufen = stufen;
      huelle._stufenStart = start;
      var schlussSchritt = huelle.getAttribute('data-schluss') === 'aus' ? 0 : 1;
      huelle._schluss = schlussSchritt;
      util.mindestSchritte(huelle, start + stufen.length - 1 + schlussSchritt);
    }

    /* Synthese: Markenkern im Zentrum */
    if (synthese && konfig.kern) {
      var kernLabel = teile.felder.kompetenz.label;
      if (kernLabel) {
        kernLabel.innerHTML = '';
        kernLabel.classList.add('sr-label--kerntext');
        el('span', { class: 'sr-label-klein' }, 'Markenkern', kernLabel);
        var kt = el('span', { class: 'sr-label-kern' }, util.markeText(konfig.kern), kernLabel);
        if (huelle._stufen) {
          /* Markenkern erscheint mit dem Schlussschritt (bzw. mit dem letzten Feld) */
          kernLabel.setAttribute('data-schritt', huelle._stufenStart + huelle._stufen.length - 1 + (huelle._schluss ? 1 : 0));
          kernLabel.setAttribute('data-animation', 'zoom');
        }
        teile.kernText = kt;
      }
    }

    if (!huelle._gekoppelt) { zeigenKoppeln(huelle); huelle._gekoppelt = true; }
    Deck.platzhalterFuellen(innen);
  }

  /* Neu bauen, wenn sich der verfügbare Platz geändert hat (Thema, Schrift) */
  function hubPruefen(huelle) {
    if (!huelle._hub || huelle.closest('.ist-klon')) return;
    var m = hubMasse(huelle);
    if (Math.abs(m.B - huelle._hub.B) <= 4 && Math.abs(m.H - huelle._hub.H) <= 4) return;
    hubBauen(huelle, null, huelle._hub.modus);
    Deck.schritteNeu(huelle);
    var z = Deck.zustand();
    var f = util.folieFuerElement(huelle);
    if (f && f.id === z.folie) hubSchritt(huelle, z.schritt);
  }

  function hubSchritt(huelle, n) {
    if (!huelle._stufen) return;
    var i = n - huelle._stufenStart;
    var feld = i >= 0 && i < huelle._stufen.length ? huelle._stufen[i] : null;
    huelle._schrittFokus = !!feld;
    fokusSetzen(huelle, feld);
    huelle.classList.toggle('ist-im-aufbau', !!feld);
  }

  Deck.baustein('steuerrad', {
    selektor: '.steuerrad',
    aufbauen: function (huelle, ctx) {
      var modus = huelle.getAttribute('data-modus') || 'hub';
      huelle.classList.add('sr-modus-' + modus);
      if (modus === 'mini') {
        var d = parseFloat(huelle.getAttribute('data-groesse')) || util.token('--mini-rad') || 60;
        radBauen(huelle, d, { beschriftung: 'keine', klickbar: false });
        aktivSetzen(huelle);
        return;
      }
      if (modus === 'menue') {
        var dm = parseFloat(huelle.getAttribute('data-groesse')) || 760;
        var ziel = zielFuer('persona');
        var t = radBauen(huelle, dm, {
          beschriftung: 'folie',
          ringtext: true,
          rahmentext: 'Brand Persona' + (ziel ? ' · ' + folienText(ziel) : ''),
          klickbar: true
        });
        huelle.style.width = dm + 'px';
        huelle.style.height = dm + 'px';
        var morph = huelle.getAttribute('data-morph');
        if (morph === null && !huelle.closest('.sprungmenue')) morph = 'steuerrad';
        if (morph && morph !== 'aus') t.rad.setAttribute('data-morph', morph);
        huelle.removeAttribute('data-morph');
        aktivSetzen(huelle);
        zeigenKoppeln(huelle);
        return;
      }
      hubBauen(huelle, ctx, modus === 'synthese' ? 'synthese' : 'hub');
    },
    aktualisieren: function (huelle) { aktivSetzen(huelle); },
    betreten: function (huelle, ctx) {
      hubPruefen(huelle);
      if (!huelle._stufen) fokusSetzen(huelle, null);
    },
    schritt: function (huelle, ctx, n) { hubSchritt(huelle, n); },
    druck: function (huelle) { hubPruefen(huelle); huelle._schrittFokus = false; fokusSetzen(huelle, null); },
    klon: function (kopie, n, original) {
      if (!original || !original._stufen) return;
      kopie._stufen = original._stufen;
      kopie._stufenStart = original._stufenStart;
      hubSchritt(kopie, n);
    }
  });

  /* Nach einem Themenwechsel (andere Schrift, andere Ränder) nachmessen */
  document.addEventListener('deck:groesse', function () {
    util.alle('.steuerrad.sr-modus-hub, .steuerrad.sr-modus-synthese').forEach(function (huelle) {
      if (util.istAktiv(huelle)) hubPruefen(huelle);
    });
  });


  /* ===========================================================================
     2. QR-CODE  <div class="qr" data-qr="https://…" data-kurz="…" data-groesse="420">
     Scharfes SVG (ein Pfad, crispEdges), Fehlerkorrektur M, Ruhezone 4 Module.
     Darunter die Kurz-URL (data-kurz oder automatisch ohne https://www.).
     =========================================================================== */
  function qrBauen(huelle) {
    var adresse = huelle.getAttribute('data-qr');
    if (!adresse) return;
    if (typeof window.qrcode !== 'function') {
      console.error('QR-Code: js/vendor/qrcode-generator.js ist nicht geladen.');
      return;
    }
    var qr = window.qrcode(0, 'M');
    qr.addData(adresse, 'Byte');
    qr.make();
    var n = qr.getModuleCount();
    var rand = 4;
    var pfad = '';
    for (var z = 0; z < n; z++) {
      for (var sp = 0; sp < n; sp++) {
        if (qr.isDark(z, sp)) pfad += 'M' + (sp + rand) + ' ' + (z + rand) + 'h1v1h-1z';
      }
    }
    var g = n + 2 * rand;
    var groesse = parseFloat(huelle.getAttribute('data-groesse')) || 420;
    huelle.style.setProperty('--qr-groesse', groesse + 'px');
    huelle.innerHTML = '';
    var bild = el('div', { class: 'qr-bild', role: 'img', 'aria-label': 'QR-Code zu ' + adresse }, null, huelle);
    bild.innerHTML = '<svg viewBox="0 0 ' + g + ' ' + g + '" shape-rendering="crispEdges" aria-hidden="true">' +
      '<rect width="' + g + '" height="' + g + '" fill="#FFFFFF"/><path d="' + pfad + '" fill="#111111"/></svg>';
    var kurz = huelle.getAttribute('data-kurz');
    if (kurz === null) kurz = adresse.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '');
    if (kurz) el('p', { class: 'qr-kurz' }, kurz, huelle);
  }
  Deck.baustein('qr', { selektor: '.qr[data-qr]', aufbauen: qrBauen });
  util.qrBauen = qrBauen;


  /* ===========================================================================
     3. LIVE-UMFRAGE  <div class="umfrage" data-umfrage="tier" data-aufloesung="1">
     Daten aus marke.js → umfragen.tier = { frage, optionen, link, kurzLink,
     ergebnisLink, unsereAntwort, beispielwerte }.
     Zählen: Klick = +1 · Umschalt+Klick oder Rechtsklick = −1 ·
             Ziffern 1–9 auf der Folie (Umschalt = −1) ·
             Doppelklick auf den Wert = Zahl eintippen · Knopf „Werte“ = alle eintragen.
     Ergebnisse bleiben nach dem Neuladen erhalten (Browser-Speicher).
     =========================================================================== */
  var umfragen = [];
  var umfrageAnzeigen = [];      /* Aussagezahl und Stimmenzähler (siehe unten) */

  function umfrageLaden(u) {
    var gespeichert = util.laden('umfrage:' + u.id, null);
    var anzahl = u.konfig.optionen.length;
    if (gespeichert && Array.isArray(gespeichert.werte)) {
      u.werte = u.konfig.optionen.map(function (x, i) { return Math.max(0, Number(gespeichert.werte[i]) || 0); });
      u.beispiel = !!gespeichert.beispiel;
    } else if (Array.isArray(u.konfig.beispielwerte) && u.konfig.beispielwerte.length) {
      u.werte = u.konfig.optionen.map(function (x, i) { return Math.max(0, Number(u.konfig.beispielwerte[i]) || 0); });
      u.beispiel = true;
    } else {
      u.werte = new Array(anzahl).fill(0);
      u.beispiel = false;
    }
  }
  function umfrageSpeichern(u) {
    util.speichern('umfrage:' + u.id, { werte: u.werte, beispiel: u.beispiel });
    Deck.kanal.senden('umfrage', { id: u.id });
  }

  function umfrageBauen(huelle) {
    var id = huelle.getAttribute('data-umfrage');
    /* Konfiguration aus marke.js, ergänzt um optionales JSON im Baustein */
    var konfig = Object.assign({}, (marke.umfragen || {})[id] || {}, datenAus(huelle) || {});
    if (!konfig || !Array.isArray(konfig.optionen) || !konfig.optionen.length) {
      console.error('Umfrage „' + id + '“: in marke.js unter umfragen.' + id + ' fehlen Frage/Optionen.');
      el('p', { class: 'umfrage-fehler' }, 'Umfrage „' + id + '“ ist in marke.js nicht eingerichtet.', huelle);
      return;
    }
    var u = { id: id, huelle: huelle, konfig: konfig, werte: [], beispiel: false, zeilen: [] };
    huelle._umfrage = u;
    umfragen.push(u);
    umfrageLaden(u);

    var mitQr = !!konfig.link && huelle.getAttribute('data-qr') !== 'aus';
    var aussageSchritt = huelle.getAttribute('data-aussage');          /* z. B. "2" */
    var mitStimmen = huelle.getAttribute('data-stimmen') !== 'aus';
    var linkeSpalte = mitQr || !!aussageSchritt;
    huelle.classList.toggle('umfrage--ohne-qr', !linkeSpalte);

    if (linkeSpalte) {
      /* Linke Spalte: QR-Code, Kurz-URL, Hinweis, Stimmenzähler.
         Mit data-aussage="n" weicht sie in Schritt n der großen Aussagezahl. */
      var links = el('div', { class: 'umfrage-links' }, null, huelle);
      var qrSpalte = el('div', { class: 'umfrage-qr' }, null, links);
      if (mitQr) {
        var qr = el('div', { class: 'qr', 'data-qr': konfig.link, 'data-groesse': huelle.getAttribute('data-qr-groesse') || '380' }, null, qrSpalte);
        if (konfig.kurzLink) qr.setAttribute('data-kurz', konfig.kurzLink);
        qrBauen(qr);
        if (konfig.aufruf) el('p', { class: 'umfrage-aufruf' }, util.markeText(konfig.aufruf), qrSpalte);
        el('p', { class: 'umfrage-hinweis' }, konfig.hinweis || 'anonym · ohne Anmeldung', qrSpalte);
      }
      if (mitStimmen) el('div', { class: 'umfrage-stimmen', 'data-umfrage': id }, null, qrSpalte);
      if (aussageSchritt) {
        el('div', { class: 'umfrage-aussage', 'data-umfrage': id, 'data-schritt': aussageSchritt, 'data-animation': 'hoch' }, null, links);
      }
    }

    var rechts = el('div', { class: 'umfrage-ergebnis' }, null, huelle);
    var kopf = el('div', { class: 'umfrage-kopf' }, null, rechts);
    var live = el('span', { class: 'live' }, null, kopf);
    el('span', { class: 'live-punkt', 'aria-hidden': 'true' }, null, live);
    el('span', {}, 'Live', live);
    u.nEl = el('span', { class: 'umfrage-n' }, 'n = 0', kopf);
    u.beispielEl = el('span', { class: 'beispiel' }, 'Beispieldaten', kopf);
    var werkzeuge = el('span', { class: 'umfrage-werkzeuge' }, null, kopf);
    if (konfig.ergebnisLink) {
      var oeffnen = el('button', { type: 'button', class: 'umfrage-knopf', title: 'Ergebnisse im Umfrage-Werkzeug öffnen (neuer Tab)' }, null, werkzeuge);
      oeffnen.innerHTML = util.icon('extern') + '<span>Ergebnisse öffnen</span>';
      oeffnen.addEventListener('click', function (e) {
        e.stopPropagation();
        window.open(konfig.ergebnisLink, '_blank', 'noopener');
      });
    }
    var bearbeiten = el('button', { type: 'button', class: 'umfrage-knopf', title: 'Werte direkt eintragen (z. B. aus Mentimeter oder Particify)' }, null, werkzeuge);
    bearbeiten.innerHTML = util.icon('stift') + '<span>Werte</span>';
    bearbeiten.addEventListener('click', function (e) { e.stopPropagation(); umfrageAlleBearbeiten(u, bearbeiten); });
    var zurueck = el('button', { type: 'button', class: 'umfrage-knopf', title: 'Alle Stimmen auf 0 setzen' }, null, werkzeuge);
    zurueck.innerHTML = util.icon('zuruecksetzen') + '<span>Zurücksetzen</span>';
    var bestaetigt = 0;
    zurueck.addEventListener('click', function (e) {
      e.stopPropagation();
      if (Date.now() - bestaetigt > 3000) {
        bestaetigt = Date.now();
        zurueck.querySelector('span').textContent = 'Wirklich?';
        setTimeout(function () { zurueck.querySelector('span').textContent = 'Zurücksetzen'; }, 3000);
        return;
      }
      bestaetigt = 0;
      zurueck.querySelector('span').textContent = 'Zurücksetzen';
      umfrageFelderSchliessen(u, false);     /* offene Eingabefelder verwerfen */
      u.werte = u.werte.map(function () { return 0; });
      u.beispiel = false;
      umfrageSpeichern(u);
      umfrageZeichnen(u, true);
    });

    var liste = el('ol', { class: 'umfrage-liste', 'aria-label': util.markeText(konfig.frage || 'Ergebnisse der Umfrage') }, null, rechts);
    var antwort = String(konfig.unsereAntwort || '').toLowerCase();
    var aufloesung = huelle.getAttribute('data-aufloesung');
    konfig.optionen.forEach(function (name, i) {
      var zeile = el('li', { class: 'umfrage-zeile', 'data-option': i }, null, liste);
      var istAnalyse = antwort && String(name).toLowerCase() === antwort;
      if (istAnalyse) {
        zeile.classList.add('ist-analyse');
        if (aufloesung !== 'aus' && aufloesung !== '0') {
          zeile.setAttribute('data-schritt', aufloesung || '1');
          zeile.setAttribute('data-animation', 'hervorheben');
          zeile.setAttribute('data-hervor-stil', 'rahmen');
        }
      }
      var knopf = el('button', { type: 'button', class: 'umfrage-option', title: 'Klick: +1 · Umschalt+Klick oder Rechtsklick: −1' }, null, zeile);
      if (i < 9) el('span', { class: 'umfrage-taste', 'aria-hidden': 'true' }, String(i + 1), knopf);
      el('span', { class: 'umfrage-name' }, util.markeText(name), knopf);
      if (istAnalyse) el('span', { class: 'umfrage-marke' }, 'Unsere Analyse', knopf);
      var wert = el('span', { class: 'umfrage-wert', title: 'Doppelklick: Wert eintragen' }, null, zeile);
      var prozent = el('span', { class: 'umfrage-prozent' }, '0 %', wert);
      var anzahl = el('span', { class: 'umfrage-anzahl' }, '0', wert);
      var spur = el('span', { class: 'umfrage-spur', 'aria-hidden': 'true' }, null, zeile);
      var balken = el('span', { class: 'umfrage-balken' }, null, spur);
      u.zeilen.push({ zeile: zeile, prozent: prozent, anzahl: anzahl, balken: balken, wert: wert, knopf: knopf, alterProzent: 0 });

      knopf.addEventListener('click', function (e) {
        e.stopPropagation();
        umfrageAendern(u, i, e.shiftKey ? -1 : 1);
      });
      knopf.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        umfrageAendern(u, i, -1);
      });
      wert.addEventListener('dblclick', function (e) {
        e.stopPropagation();
        umfrageWertEingeben(u, i);
      });
    });
    umfrageZeichnen(u, false);
  }

  function umfrageAendern(u, i, delta) {
    u.werte[i] = Math.max(0, (u.werte[i] || 0) + delta);
    umfrageSpeichern(u);
    umfrageZeichnen(u, true);
  }

  function umfrageWertEingeben(u, i, ohneFokus) {
    var z = u.zeilen[i];
    if (z.eingabe) return z.eingabe;
    var eingabe = el('input', { type: 'number', min: '0', step: '1', class: 'umfrage-eingabe', value: String(u.werte[i]), 'aria-label': 'Anzahl für ' + u.konfig.optionen[i] });
    z.wert.appendChild(eingabe);
    z.eingabe = eingabe;
    var fertig = function (uebernehmen, ohneZeichnen) {
      if (!z.eingabe) return;
      var wert = parseInt(eingabe.value, 10);
      z.eingabe = null;
      z.fertig = null;
      eingabe.remove();
      if (uebernehmen && !isNaN(wert) && wert >= 0 && wert !== u.werte[i]) {
        u.werte[i] = wert;
        umfrageSpeichern(u);
      }
      if (!ohneZeichnen) umfrageZeichnen(u, true);
    };
    z.fertig = fertig;
    eingabe.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); fertig(true); }
      else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); fertig(false); }
      else if (e.key === 'Tab') {
        /* Tab / Umschalt+Tab: Wert übernehmen und ins nächste bzw. vorige Feld
           (wird bei Bedarf geöffnet). Nach dem letzten bzw. vor dem ersten Feld
           werden alle Werte übernommen und die Felder geschlossen – so landet
           eine getippte Ziffer nie unsichtbar als Stimme auf einem Knopf. */
        e.preventDefault();
        e.stopPropagation();
        var ziel = i + (e.shiftKey ? -1 : 1);
        if (ziel < 0 || ziel >= u.zeilen.length) { umfrageFelderSchliessen(u, true); return; }
        var naechstes = umfrageWertEingeben(u, ziel, true);
        naechstes.focus();
        naechstes.select();
      }
    });
    eingabe.addEventListener('blur', function () { fertig(true); });
    eingabe.addEventListener('click', function (e) { e.stopPropagation(); });
    if (!ohneFokus) { eingabe.focus(); eingabe.select(); }
    return eingabe;
  }
  /* Alle offenen Eingabefelder schließen (uebernehmen = Werte speichern) */
  function umfrageFelderSchliessen(u, uebernehmen) {
    var offen = u.zeilen.filter(function (z) { return z.fertig; });
    if (!offen.length) return false;
    offen.forEach(function (z) { z.fertig(uebernehmen, true); });
    umfrageZeichnen(u, true);
    return true;
  }
  function umfrageAlleBearbeiten(u, knopf) {
    /* zweiter Klick auf „Werte“: alle offenen Felder übernehmen und schließen */
    if (umfrageFelderSchliessen(u, true)) return;
    u.zeilen.forEach(function (z, i) { umfrageWertEingeben(u, i, true); });
    if (u.zeilen[0] && u.zeilen[0].eingabe) { u.zeilen[0].eingabe.focus(); u.zeilen[0].eingabe.select(); }
  }

  function umfrageZeichnen(u, animiert) {
    var summe = u.werte.reduce(function (a, b) { return a + b; }, 0);
    var max = Math.max.apply(null, u.werte.concat([0]));
    u.nEl.textContent = 'n = ' + summe;
    u.beispielEl.hidden = !u.beispiel;
    u.huelle.classList.toggle('ist-beispiel', u.beispiel);
    u.zeilen.forEach(function (z, i) {
      if (z.eingabe) return;
      var anteil = summe ? u.werte[i] / summe : 0;
      var neuProzent = Math.round(anteil * 100);
      z.anzahl.textContent = String(u.werte[i]);
      z.balken.style.transform = 'scaleX(' + (max ? (u.werte[i] / max).toFixed(4) : 0) + ')';
      if (animiert && !util.bewegungReduziert() && z.alterProzent !== neuProzent) {
        util.zaehle(z.prozent, z.alterProzent, neuProzent, { einheit: ' %', dauer: 450 });
      } else {
        z.prozent.textContent = neuProzent + ' %';
      }
      z.alterProzent = neuProzent;
      z.zeile.classList.toggle('ist-fuehrend', max > 0 && u.werte[i] === max);
    });
    anzeigenAktualisieren(u.id, u.werte, u.konfig, u.beispiel, animiert);
  }

  /* Ist die Umfrage gerade zu sehen? (Folie aktiv und nicht von einem
     Folienschritt ausgeblendet, z. B. Folie 08 ab Schritt 2) */
  function umfrageSichtbar(u) {
    if (!util.istAktiv(u.huelle)) return false;
    var folie = u.huelle.closest('.folie');
    for (var e = u.huelle; e && e !== folie; e = e.parentElement) {
      var st = getComputedStyle(e);
      if (st.display === 'none' || st.visibility === 'hidden' || parseFloat(st.opacity) < 0.05) return false;
    }
    return true;
  }

  /* Ziffern 1–9 zählen nur, solange die Umfrage sichtbar ist – sonst gehen
     sie an die Navigation (Ziffer + Enter springt zu einer Folie) */
  Deck.taste(function (e) {
    if (!/^(Digit|Numpad)[1-9]$/.test(e.code || '')) return false;
    var aktiv = umfragen.filter(umfrageSichtbar)[0];
    if (!aktiv) return false;
    var i = parseInt(e.code.replace(/\D/g, ''), 10) - 1;
    if (i >= aktiv.werte.length) return false;
    umfrageAendern(aktiv, i, e.shiftKey ? -1 : 1);
    var z = aktiv.zeilen[i];
    z.zeile.classList.remove('ist-gezaehlt');
    void z.zeile.offsetWidth;
    z.zeile.classList.add('ist-gezaehlt');
    return true;
  });

  /* Abgleich mit dem anderen Fenster (Referentenansicht) */
  function umfrageNeuLaden(id) {
    umfragen.forEach(function (u) {
      if (id && u.id !== id) return;
      umfrageLaden(u);
      umfrageZeichnen(u, true);
    });
  }
  Deck.kanal.bei('umfrage', function (d) { umfrageNeuLaden(d && d.id); });
  window.addEventListener('storage', function (e) {
    if (e.key && e.key.indexOf(util.speicherSchluessel('umfrage:')) === 0) umfrageNeuLaden(e.key.slice(util.speicherSchluessel('umfrage:').length));
    if (e.key && e.key.indexOf(util.speicherSchluessel('wortwolke:')) === 0) wolkeNeuLaden(e.key.slice(util.speicherSchluessel('wortwolke:').length));
  });

  Deck.baustein('umfrage', {
    selektor: '.umfrage[data-umfrage]',
    aufbauen: umfrageBauen,
    betreten: function (huelle) {
      var u = huelle._umfrage;
      if (!u) return;
      umfrageLaden(u);
      umfrageZeichnen(u, false);
    },
    /* Weiterblättern (z. B. Clicker), während Eingabefelder offen sind:
       Werte übernehmen und Felder schließen */
    schritt: function (huelle) { if (huelle._umfrage) umfrageFelderSchliessen(huelle._umfrage, true); },
    verlassen: function (huelle) { if (huelle._umfrage) umfrageFelderSchliessen(huelle._umfrage, true); },
    klon: function (kopie, n, original) {
      util.alle('.umfrage-werkzeuge', kopie).forEach(function (w) { w.remove(); });
    }
  });


  /* ---------------------------------------------------------------------------
     3b. AUSSAGEZAHL UND STIMMENZÄHLER zu einer Umfrage
     <div class="umfrage-aussage" data-umfrage="tier" data-schritt="1"></div>
        → große Zahl „27 %“ + Satz aus marke.js (umfragen.tier.aussage), z. B.
          „sehen HOLY wie wir: als Eule“. Prozent = Anteil von unsereAntwort,
          immer aus den Stimmen berechnet (nie von Hand).
     <div class="umfrage-stimmen" data-umfrage="tier"></div>
        → hochzählende Zahl der Stimmen („64 Stimmen“)
     Beide dürfen auf derselben oder einer späteren Folie stehen.
     --------------------------------------------------------------------------- */
  function umfrageKonfig(id, huelle) {
    return Object.assign({}, (marke.umfragen || {})[id] || {}, datenAus(huelle) || {});
  }
  function werteFuer(id, konfig) {
    var u = { id: id, konfig: konfig };
    if (!Array.isArray(konfig.optionen)) return { werte: [], beispiel: false };
    umfrageLaden(u);
    return { werte: u.werte, beispiel: u.beispiel };
  }
  function anteilAntwort(werte, konfig) {
    var summe = werte.reduce(function (a, b) { return a + b; }, 0);
    var antwort = String(konfig.unsereAntwort || '').toLowerCase();
    var i = (konfig.optionen || []).map(function (o) { return String(o).toLowerCase(); }).indexOf(antwort);
    if (i < 0 || !summe) return { prozent: 0, summe: summe, gueltig: false };
    return { prozent: Math.round(werte[i] / summe * 100), summe: summe, gueltig: true };
  }
  function anzeigenAktualisieren(id, werte, konfig, beispiel, animiert) {
    umfrageAnzeigen.forEach(function (a) {
      if (a.id !== id) return;
      /* nur sichtbar Angezeigtes animieren (aktive Folie, Schritt erreicht) */
      var sichtbar = util.istAktiv(a.el) && !a.el.closest('[data-schritt]:not(.schritt-an)');
      a.aktualisieren(werte, beispiel, animiert && sichtbar);
    });
  }

  function aussageBauen(huelle) {
    var id = huelle.getAttribute('data-umfrage');
    var konfig = umfrageKonfig(id, huelle);
    var vorlage = util.markeText(konfig.aussage || '{prozent} sehen [Marke] wie wir: als {antwort}');
    var antwort = konfig.unsereAntwort || '…';
    huelle.innerHTML = '';
    var zahl = el('span', { class: 'ua-zahl zahl', 'data-animation': 'zaehlen', 'data-ziel': '0', 'data-einheit': ' %' }, '0 %', huelle);
    var satz = el('span', { class: 'ua-text' }, null, huelle);
    var rest = vorlage.replace('{prozent}', '').replace(/^\s+/, '');
    var teile = rest.split('{antwort}');
    teile.forEach(function (t, i) {
      if (t) satz.appendChild(document.createTextNode(t));
      if (i < teile.length - 1) el('em', { class: 'ua-antwort' }, antwort, satz);
    });
    var anzeige = {
      id: id, el: huelle,
      aktualisieren: function (werte, beispiel, animiert) {
        var a = anteilAntwort(werte, konfig);
        var alt = parseFloat(zahl.getAttribute('data-ziel')) || 0;
        zahl.setAttribute('data-ziel', String(a.prozent));
        huelle.classList.toggle('ist-leer', !a.gueltig);
        if (!a.gueltig) { zahl.textContent = '– %'; return; }
        if (animiert && alt !== a.prozent) util.zaehle(zahl, alt, a.prozent, { einheit: ' %', dauer: 600 });
        else zahl.textContent = util.zahlFormat(a.prozent, 0) + ' %';
      }
    };
    huelle._anzeige = anzeige;
    umfrageAnzeigen.push(anzeige);
    var stand = werteFuer(id, konfig);
    anzeige.aktualisieren(stand.werte, stand.beispiel, false);
  }

  function stimmenBauen(huelle) {
    var id = huelle.getAttribute('data-umfrage');
    var konfig = umfrageKonfig(id, huelle);
    huelle.innerHTML = '';
    var zahl = el('span', { class: 'us-zahl zahl', 'data-animation': 'zaehlen', 'data-ziel': '0' }, '0', huelle);
    var text = el('span', { class: 'us-text' }, 'Stimmen', huelle);
    var anzeige = {
      id: id, el: huelle,
      aktualisieren: function (werte, beispiel, animiert) {
        var summe = werte.reduce(function (a, b) { return a + b; }, 0);
        var alt = parseFloat(zahl.getAttribute('data-ziel')) || 0;
        zahl.setAttribute('data-ziel', String(summe));
        text.textContent = summe === 1 ? 'Stimme' : 'Stimmen';
        if (animiert && alt !== summe) util.zaehle(zahl, alt, summe, { dauer: 600 });
        else zahl.textContent = util.zahlFormat(summe, 0);
      }
    };
    huelle._anzeige = anzeige;
    umfrageAnzeigen.push(anzeige);
    var stand = werteFuer(id, konfig);
    anzeige.aktualisieren(stand.werte, stand.beispiel, false);
  }

  function anzeigeAuffrischen(huelle) {
    var a = huelle._anzeige;
    if (!a) return;
    var konfig = umfrageKonfig(a.id, huelle);
    var stand = werteFuer(a.id, konfig);
    a.aktualisieren(stand.werte, stand.beispiel, false);
  }
  Deck.baustein('umfrage-aussage', {
    selektor: '.umfrage-aussage[data-umfrage]',
    aufbauen: aussageBauen,
    betreten: anzeigeAuffrischen,
    druck: anzeigeAuffrischen
  });
  Deck.baustein('umfrage-stimmen', {
    selektor: '.umfrage-stimmen[data-umfrage]',
    aufbauen: stimmenBauen,
    betreten: anzeigeAuffrischen,
    druck: anzeigeAuffrischen
  });


  /* ===========================================================================
     4. LIVE-WORTWOLKE  <div class="wortwolke" data-wortwolke="assoziationen" [data-nur-anzeige]>
     Ein Teammitglied tippt Zurufe ins Feld (Enter). Mehrfachnennungen werden
     größer. Die Wolke wird gespeichert und erscheint auf späteren Folien mit
     data-nur-anzeige wieder. Alt+Klick auf ein Wort entfernt es.
     =========================================================================== */
  var wolken = [];

  function wolkeLaden(w) {
    var gespeichert = util.laden('wortwolke:' + w.id, null);
    if (gespeichert && Array.isArray(gespeichert.woerter)) {
      w.woerter = gespeichert.woerter.filter(function (x) { return x && x.text; });
    } else {
      w.woerter = (w.konfig.startwoerter || []).map(function (t, i) {
        return typeof t === 'string' ? { text: t, anzahl: 1, nr: i } : { text: t.text, anzahl: t.anzahl || 1, nr: i };
      });
    }
  }
  function wolkeSpeichern(w) {
    util.speichern('wortwolke:' + w.id, { woerter: w.woerter });
    Deck.kanal.senden('wortwolke', { id: w.id });
  }

  function wolkeBauen(huelle) {
    var id = huelle.getAttribute('data-wortwolke') || 'wolke';
    var konfig = Object.assign({}, (marke.wortwolken || {})[id] || {}, datenAus(huelle) || {});
    var w = { id: id, huelle: huelle, konfig: konfig, woerter: [], spans: {}, anzeige: huelle.hasAttribute('data-nur-anzeige') };
    huelle._wolke = w;
    wolken.push(w);
    wolkeLaden(w);
    w.flaeche = el('div', { class: 'ww-flaeche', role: 'list', 'aria-label': 'Wortwolke' }, null, huelle);
    w.leer = el('p', { class: 'ww-leer' }, util.markeText(konfig.leerText) || 'Noch keine Zurufe – was fällt Ihnen ein?', w.flaeche);
    if (!w.anzeige) {
      var form = el('form', { class: 'ww-eingabe', autocomplete: 'off' }, null, huelle);
      var feld = el('input', { type: 'text', class: 'ww-feld', maxlength: '40', placeholder: util.markeText(konfig.platzhalter || 'Zuruf eintippen und Enter drücken'), 'aria-label': 'Wort für die Wortwolke' }, null, form);
      var plus = el('button', { type: 'submit', class: 'umfrage-knopf', title: 'Wort hinzufügen (Enter)' }, null, form);
      plus.innerHTML = util.icon('plus') + '<span>Hinzufügen</span>';
      var leeren = el('button', { type: 'button', class: 'umfrage-knopf', title: 'Alle Wörter löschen' }, null, form);
      leeren.innerHTML = util.icon('loeschen') + '<span>Wolke leeren</span>';
      w.feld = feld;
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var text = feld.value.replace(/\s+/g, ' ').trim();
        feld.value = '';
        if (text) wortHinzufuegen(w, text);
      });
      var bestaetigt = 0;
      leeren.addEventListener('click', function () {
        if (Date.now() - bestaetigt > 3000) {
          bestaetigt = Date.now();
          leeren.querySelector('span').textContent = 'Wirklich leeren?';
          setTimeout(function () { leeren.querySelector('span').textContent = 'Wolke leeren'; }, 3000);
          return;
        }
        bestaetigt = 0;
        leeren.querySelector('span').textContent = 'Wolke leeren';
        w.woerter = [];
        wolkeSpeichern(w);
        wolkeZeichnen(w, true);
      });
    }
    w.flaeche.addEventListener('click', function (e) {
      if (!e.altKey) return;
      var span = e.target.closest('.ww-wort');
      if (!span) return;
      e.preventDefault();
      var schluessel = span.getAttribute('data-schluessel');
      w.woerter = w.woerter.filter(function (x) { return x.text.toLowerCase() !== schluessel; });
      wolkeSpeichern(w);
      wolkeZeichnen(w, true);
    });
  }

  function wortHinzufuegen(w, text) {
    var schluessel = text.toLowerCase();
    var vorhanden = w.woerter.filter(function (x) { return x.text.toLowerCase() === schluessel; })[0];
    if (vorhanden) vorhanden.anzahl++;
    else w.woerter.push({ text: text, anzahl: 1, nr: Date.now() });
    w.neu = schluessel;
    wolkeSpeichern(w);
    wolkeZeichnen(w, true);
  }

  /* Platzierung: nach Häufigkeit sortiert, spiralförmig von der Mitte aus,
     ohne Überlappung. Passt es nicht, wird alles etwas kleiner. */
  function wolkeZeichnen(w, animiert) {
    var flaeche = w.flaeche;
    var B = flaeche.clientWidth;
    var H = flaeche.clientHeight;
    w.leer.hidden = w.woerter.length > 0;
    if (!B || !H) return;                         // Folie gerade nicht sichtbar
    var sortiert = w.woerter.slice().sort(function (a, b) { return b.anzahl - a.anzahl || a.nr - b.nr; });
    var maxAnzahl = sortiert.length ? sortiert[0].anzahl : 1;
    var basis = parseFloat(w.huelle.getAttribute('data-schrift')) || 36;
    var faktor = 1;
    var platziert;
    var messer = w.messer || (w.messer = el('span', { class: 'ww-wort ww-messer', 'aria-hidden': 'true' }, null, flaeche));
    for (var versuch = 0; versuch < 8; versuch++) {
      platziert = [];
      var alleDrin = true;
      for (var i = 0; i < sortiert.length; i++) {
        var wort = sortiert[i];
        var groesse = Math.max(28, basis * faktor * (1 + 0.42 * Math.min(4, wort.anzahl - 1)));
        if (wort.anzahl === maxAnzahl && maxAnzahl > 1) groesse = Math.max(groesse, basis * faktor * 1.6);
        messer.style.fontSize = groesse + 'px';
        messer.textContent = wort.text;
        var bw = messer.offsetWidth + 18;
        var bh = messer.offsetHeight + 4;
        var pos = spiralPlatz(platziert, bw, bh, B, H);
        if (!pos) { alleDrin = false; break; }
        platziert.push({ wort: wort, x: pos.x, y: pos.y, b: bw, h: bh, groesse: groesse });
      }
      if (alleDrin) break;
      faktor *= 0.88;
    }
    messer.textContent = '';
    var noch = {};
    platziert.forEach(function (p, rang) {
      var schluessel = p.wort.text.toLowerCase();
      noch[schluessel] = true;
      var span = w.spans[schluessel];
      var istNeu = !span;
      if (!span) {
        span = el('span', { class: 'ww-wort', role: 'listitem', 'data-schluessel': schluessel }, null, flaeche);
        w.spans[schluessel] = span;
      }
      span.textContent = p.wort.text;
      span.title = p.wort.anzahl + '× genannt – Alt+Klick entfernt das Wort';
      span.setAttribute('data-anzahl', p.wort.anzahl);
      span.classList.toggle('ist-spitze', rang === 0 && p.wort.anzahl > 1);
      span.classList.toggle('ist-mehrfach', p.wort.anzahl > 1);
      span.style.fontSize = p.groesse + 'px';
      var ziel = 'translate(' + Math.round(p.x + 9) + 'px, ' + Math.round(p.y + 2) + 'px)';
      if (istNeu && animiert && !util.bewegungReduziert()) {
        /* neues Wort fliegt vom Eingabefeld (unten Mitte) an seinen Platz */
        span.style.transition = 'none';
        span.style.transform = 'translate(' + Math.round(B / 2 - p.b / 2) + 'px, ' + Math.round(H - p.h) + 'px) scale(0.6)';
        span.style.opacity = '0';
        void span.offsetWidth;
        span.style.transition = '';
        span.style.opacity = '';
        span.style.transform = ziel;
      } else {
        if (!animiert) span.style.transition = 'none';
        span.style.transform = ziel;
        if (!animiert) { void span.offsetWidth; span.style.transition = ''; }
      }
      if (w.neu === schluessel && animiert && !istNeu && !util.bewegungReduziert()) {
        util.animiere(span, [{ scale: '1' }, { scale: '1.12' }, { scale: '1' }], { duration: 520, easing: 'ease-out', fill: 'none' });
      }
    });
    Object.keys(w.spans).forEach(function (s) {
      if (!noch[s]) { w.spans[s].remove(); delete w.spans[s]; }
    });
    w.neu = null;
  }

  function spiralPlatz(platziert, bw, bh, B, H) {
    var cx = B / 2, cy = H / 2;
    var verhaeltnis = B / H;
    for (var t = 0; t < 1400; t++) {
      var winkel = t * 0.32;
      var radius = 5 * winkel;
      var x = cx + radius * Math.cos(winkel) * Math.min(verhaeltnis, 2.4) * 0.6 - bw / 2;
      var y = cy + radius * Math.sin(winkel) * 0.6 - bh / 2;
      if (x < 0 || y < 0 || x + bw > B || y + bh > H) continue;
      var frei = true;
      for (var i = 0; i < platziert.length; i++) {
        var p = platziert[i];
        if (x < p.x + p.b && x + bw > p.x && y < p.y + p.h && y + bh > p.y) { frei = false; break; }
      }
      if (frei) return { x: x, y: y };
    }
    return null;
  }

  function wolkeNeuLaden(id) {
    wolken.forEach(function (w) {
      if (id && w.id !== id) return;
      wolkeLaden(w);
      wolkeZeichnen(w, true);
    });
  }
  Deck.kanal.bei('wortwolke', function (d) { wolkeNeuLaden(d && d.id); });

  Deck.baustein('wortwolke', {
    selektor: '.wortwolke',
    aufbauen: wolkeBauen,
    betreten: function (huelle) {
      var w = huelle._wolke;
      if (!w) return;
      wolkeLaden(w);
      var zeichnen = function () { wolkeZeichnen(w, false); };
      requestAnimationFrame(zeichnen);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(zeichnen);
    },
    druck: function (huelle) {
      var w = huelle._wolke;
      if (w) { wolkeLaden(w); wolkeZeichnen(w, false); }
    },
    klon: function (kopie) {
      util.alle('.ww-eingabe, .ww-messer', kopie).forEach(function (x) { x.remove(); });
    }
  });


  /* ===========================================================================
     5. RÄTSEL  <div class="raetsel" data-bild="…" data-stufen="300/40,210/22,145/9,100/0"
                     data-fokus="56% 44%" data-schritt-start="1">
     Stufe 1 = stark vergrößert und unscharf; jeder Schritt zeigt mehr.
     Fortschritt „Hinweis x von 4“ wird automatisch eingeblendet
     (data-fortschritt="aus" schaltet ihn ab).
     =========================================================================== */
  function raetselStufen(huelle) {
    var roh = huelle.getAttribute('data-stufen') || '300/40,210/22,145/9,100/0';
    return roh.split(',').map(function (teil) {
      var x = teil.split('/');
      return { zoom: (parseFloat(x[0]) || 100) / 100, unschaerfe: parseFloat(x[1]) || 0 };
    });
  }
  function raetselZeigen(huelle, stufe, sofort) {
    var stufen = huelle._stufen;
    if (!stufen) return;
    stufe = Math.max(0, Math.min(stufen.length - 1, stufe));
    var s = stufen[stufe];
    var motiv = huelle.querySelector('.raetsel-motiv');
    if (sofort) {
      motiv.style.transition = 'none';
    }
    huelle.style.setProperty('--raetsel-zoom', s.zoom);
    huelle.style.setProperty('--raetsel-unschaerfe', s.unschaerfe + 'px');
    huelle.setAttribute('data-stufe', stufe + 1);
    huelle.classList.toggle('ist-geloest', stufe === stufen.length - 1);
    if (sofort) { void motiv.offsetWidth; motiv.style.transition = ''; }
    var text = huelle.querySelector('.raetsel-stand');
    if (text) text.textContent = stufe === stufen.length - 1 ? 'Aufgelöst' : 'Hinweis ' + (stufe + 1) + ' von ' + stufen.length;
    util.alle('.raetsel-balken > span', huelle).forEach(function (b, i) { b.classList.toggle('ist-an', i <= stufe); });
  }
  Deck.baustein('raetsel', {
    selektor: '.raetsel',
    aufbauen: function (huelle) {
      var quelle = huelle.getAttribute('data-bild') || marke.raetselBild || 'bilder/platzhalter-raetsel.svg';
      huelle._stufen = raetselStufen(huelle);
      huelle._start = parseInt(huelle.getAttribute('data-schritt-start') || '1', 10);
      var motiv = el('div', { class: 'raetsel-motiv' }, null, huelle);
      var bild = el('img', { src: util.pfad(quelle), alt: huelle.getAttribute('data-alt') || 'Rätselbild', draggable: 'false' }, null, motiv);
      if (huelle.getAttribute('data-fokus')) motiv.style.transformOrigin = huelle.getAttribute('data-fokus');
      if (huelle.getAttribute('data-fortschritt') !== 'aus') {
        var stand = el('div', { class: 'raetsel-fortschritt', 'aria-live': 'polite' }, null, huelle);
        var balken = el('span', { class: 'raetsel-balken', 'aria-hidden': 'true' }, null, stand);
        huelle._stufen.forEach(function () { el('span', {}, null, balken); });
        el('span', { class: 'raetsel-stand' }, '', stand);
      }
      util.mindestSchritte(huelle, huelle._start + huelle._stufen.length - 2);
      raetselZeigen(huelle, 0, true);
    },
    betreten: function (huelle, ctx, n) { raetselZeigen(huelle, n - huelle._start + 1, true); },
    schritt: function (huelle, ctx, n, richtung) {
      raetselZeigen(huelle, n - huelle._start + 1, richtung === 'start');
    },
    druck: function (huelle) { raetselZeigen(huelle, huelle._stufen.length - 1, true); },
    klon: function (kopie, n, original) {
      if (!original) return;
      kopie._stufen = original._stufen;
      raetselZeigen(kopie, n - original._start + 1, true);
    }
  });


  /* ===========================================================================
     6. HANTEL  <span class="hantel" data-wert-marke="2.1" data-wert-wettbewerb="4.9"
                     data-min="1" data-max="7"></span>
     Zeigt, woher eine Differenz kommt: ● Marke ↔ ○ Wettbewerber auf der Skala.
     =========================================================================== */
  Deck.baustein('hantel', {
    selektor: '.hantel',
    aufbauen: function (huelle) {
      var a = parseFloat(huelle.getAttribute('data-wert-marke'));
      var b = parseFloat(huelle.getAttribute('data-wert-wettbewerb'));
      var min = parseFloat(huelle.getAttribute('data-min') || '1');
      var max = parseFloat(huelle.getAttribute('data-max') || '7');
      var breite = parseFloat(huelle.getAttribute('data-breite')) || 200;
      var hoehe = 40;
      var rand = 12;
      var x = function (w) { return rand + (breite - 2 * rand) * (w - min) / (max - min || 1); };
      var s = svg('svg', { viewBox: '0 0 ' + breite + ' ' + hoehe, width: breite, height: hoehe, role: 'img',
        'aria-label': 'Skala ' + min + ' bis ' + max + ': Marke ' + util.zahlFormat(a, 1) + ', Wettbewerber ' + util.zahlFormat(b, 1) }, null);
      huelle.innerHTML = '';
      huelle.appendChild(s);
      svg('line', { class: 'hantel-skala', x1: rand, y1: hoehe / 2, x2: breite - rand, y2: hoehe / 2 }, s);
      for (var t = min; t <= max; t++) svg('line', { class: 'hantel-strich', x1: rund(x(t)), y1: hoehe / 2 - 5, x2: rund(x(t)), y2: hoehe / 2 + 5 }, s);
      if (!isNaN(a) && !isNaN(b)) {
        svg('line', { class: 'hantel-abstand', x1: rund(x(a)), y1: hoehe / 2, x2: rund(x(b)), y2: hoehe / 2 }, s);
        svg('circle', { class: 'hantel-wettbewerb', cx: rund(x(b)), cy: hoehe / 2, r: 8 }, s);
        svg('circle', { class: 'hantel-marke', cx: rund(x(a)), cy: hoehe / 2, r: 9 }, s);
      }
    }
  });
})();
