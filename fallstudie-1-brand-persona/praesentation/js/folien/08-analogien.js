/* =============================================================================
   js/folien/08-analogien.js – Skript für die Folien f08 und f08b
   -----------------------------------------------------------------------------
   f08  „Analogien & Live-Umfrage“
        • setzt die Frage der Umfrage (marke.js → umfragen.tier.frage) als Titel
        • ohne Abstimm-Link (nur Zählmodus): zeigt links „Abstimmung per
          Handzeichen“ statt des QR-Codes
        • baut aus den Daten der Folie die Karten „Als Tier“ (mit Selbstbild)
          und „Als Mensch“ (mit tatsächlicher Kundschaft) sowie die
          Kontrastzeile mit zwei Wettbewerbern
        • prüft, ob das Tier der Folie zu marke.js → umfragen.tier.unsereAntwort
          passt; wenn nicht, steht ein Hinweis in den Notizen (Referentenansicht)
   f08b „Markentonalität (Aaker)“
        • baut aus den Daten das Profil der fünf Dimensionen nach Aaker
          (Balken für die Marke, Kreis-Marker für die Wettbewerber) und hängt
          die Persönlichkeitsmerkmale an ihre Dimension
        • füllt die Ergebniskarte (Emotionen, Beziehung, Erlebnisse)
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
     („Waschbär“ → waschbaer). Klasse „voll“ = gefüllte Fläche (Augen, Nase).
     --------------------------------------------------------------------------- */
  var BILDER = {
    waschbaer:
      '<path d="M60 104 C50 104 42 98 36 92 L14 78 L24 70 C21 58 22 46 27 37 L24 15 L44 26 Q60 21 76 26 L96 15 L93 37 C98 46 99 58 96 70 L106 78 L84 92 C78 98 70 104 60 104 Z"/>' +
      '<path d="M31 24 L34 33 M89 24 L86 33"/>' +
      /* Maske mit zwei Augenlöchern (evenodd), darin die Pupillen */
      '<path class="voll" fill-rule="evenodd" d="M22 60 C30 48 46 46 55 56 Q60 61 65 56 C74 46 90 48 98 60 C94 71 80 75 70 69 Q60 63 50 69 C40 75 26 71 22 60 Z M44 54 a6 6 0 1 0 0.01 0 Z M76 54 a6 6 0 1 0 0.01 0 Z"/>' +
      '<circle class="voll" cx="44" cy="60" r="2.6"/><circle class="voll" cx="76" cy="60" r="2.6"/>' +
      '<path d="M60 30 V44"/>' +
      '<ellipse class="voll" cx="60" cy="86" rx="6.5" ry="4.5"/><path d="M60 90 V95 M60 95 Q55 99 51 96 M60 95 Q65 99 69 96"/>',
    adler:
      '<path d="M22 112 C22 90 27 70 37 56 C46 43 58 34 74 31 L91 30 C98 30 102 32 105 35 C113 37 118 44 118 54 C118 59 116 63 112 66 C111 61 109 58 104 57 L91 56"/>' +
      '<path d="M104 57 C101 61 97 63 91 63 C87 72 85 81 79 88 L86 94 L73 96 L78 104 L63 104 L66 112"/>' +
      '<circle class="voll" cx="85" cy="43" r="3.8"/><path d="M73 40 Q85 33 98 37"/>',
    schwan:
      '<path d="M38 86 C24 72 30 60 38 50 C45 41 45 31 38 26"/>' +
      '<path d="M48 82 C38 70 42 60 48 52 C56 41 54 25 44 19 C38 16 31 18 29 23 L17 30 L30 31 C33 31 36 29 38 26"/>' +
      '<circle class="voll" cx="38" cy="22.5" r="2.6"/>' +
      '<path d="M38 86 C46 98 66 102 84 98 C98 95 106 86 108 74 C108 68 106 62 102 58 C98 68 90 74 78 76 C66 78 56 80 48 82"/>' +
      '<path d="M60 88 C74 90 88 86 98 76"/>' +
      '<path d="M14 110 q8 -5 16 0 t16 0 t16 0 t16 0 t16 0 t16 0"/>',
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
    /* Mensch mit Headset (Gamer) */
    gamer:
      '<circle cx="60" cy="42" r="20"/><path d="M22 108 C22 82 40 70 60 70 C80 70 98 82 98 108"/>' +
      '<path d="M35 42 C35 24 46 15 60 15 C74 15 85 24 85 42"/>' +
      '<rect x="31" y="38" width="9" height="16" rx="4"/><rect x="80" y="38" width="9" height="16" rx="4"/>' +
      '<path d="M35.5 54 C36 61 41 63 48 61"/>',
    /* zwei Menschen (Kundschaft, Zielgruppe) */
    gruppe:
      '<circle cx="80" cy="36" r="14"/><path d="M74 64 C77 62 80 61 84 61 C96 61 106 71 106 92"/>' +
      '<circle cx="48" cy="48" r="17"/><path d="M14 108 C14 88 28 78 48 78 C68 78 82 88 82 108"/>',
    hand:
      '<path d="M44 62 V30 a7 7 0 0 1 14 0 V58"/><path d="M58 56 V20 a7 7 0 0 1 14 0 V58"/>' +
      '<path d="M72 58 V28 a7 7 0 0 1 14 0 V66"/>' +
      '<path d="M86 66 V44 a7 7 0 0 1 14 0 V78 C100 98 86 112 66 112 H62 C50 112 42 108 34 100 L18 82 a7 7 0 0 1 10 -10 L44 86 V62"/>'
  };

  /* Tiername → Schlüssel der Zeichnung („Waschbär“ → „waschbaer“) */
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
      if (i > 0) util.element('em', { 'data-marke': '' }, util.markeText('[Marke]'), eltern);
      if (teil) eltern.appendChild(document.createTextNode(teil));
    });
  }

  /* Konfiguration der Umfrage aus marke.js (kann fehlen) */
  function umfrageKonfig(ctx) {
    return (ctx.marke && ctx.marke.umfragen && ctx.marke.umfragen.tier) || {};
  }


  /* ===========================================================================
     f08 – Analogien & Live-Umfrage
     =========================================================================== */

  /* Titel (Schritt 0–1) = Frage aus marke.js, damit beides übereinstimmt */
  function frageSetzen(ctx) {
    var frage = umfrageKonfig(ctx).frage;
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

  /* Kopf einer Karte: Zeichnung, Kicker („Als Tier“), Name */
  function kartenKopf(ctx, karte, bildSchl, kicker, name) {
    var util = ctx.util;
    var kopf = util.element('div', { class: 'g4-karte-kopf' }, null, karte);
    bild(util, bildSchl, 'g4-bild', kopf);
    var titel = util.element('div', { class: 'g4-karte-titel' }, null, kopf);
    util.element('span', { class: 'karte-kicker', 'data-meta': '' }, kicker, titel);
    util.element('p', { class: 'g4-name' }, util.markeText(name || '…'), titel);
  }

  /* Karte „Als Tier“: Zeichnung, Tiername, drei Gründe (Eigenschaft + Beleg),
     darunter das Selbstbild der Marke (z. B. Maskottchen) */
  function tierKarte(ctx, karte, tier) {
    var util = ctx.util;
    var name = tier.name || umfrageKonfig(ctx).unsereAntwort || '…';
    kartenKopf(ctx, karte, bildFuer(name, tier.bild), 'Als Tier', name);

    var liste = util.element('dl', { class: 'g4-liste g4-liste--gruende' }, null, karte);
    (tier.gruende || []).slice(0, 3).forEach(function (grund) {
      /* erlaubt: { "stichwort": "frech", "beleg": "…" } oder ein einfacher Text */
      var g = typeof grund === 'string' ? { stichwort: grund, beleg: '' } : (grund || {});
      var zeile = util.element('div', { class: 'g4-zeile' }, null, liste);
      util.element('dt', { class: 'g4-stichwort' }, util.markeText(g.stichwort || ''), zeile);
      util.element('dd', null, util.markeText(g.beleg || ''), zeile);
    });

    gegenpol(ctx, karte, tier.selbstbild, 'Selbstbild');
  }

  /* Gegenpol unten in einer Karte: ein belegter Fakt, der der Analogie
     gegenübersteht (Tier: Selbstbild/Maskottchen, Mensch: tatsächliche
     Kundschaft). Daten: { "bezeichnung": "…", "text": "…", "bild": "…" } */
  function gegenpol(ctx, karte, eintrag, standardBezeichnung) {
    var util = ctx.util;
    var text = eintrag && (eintrag.text || eintrag.name);
    if (!text) return;
    karte.classList.add('hat-gegenpol');
    var reihe = util.element('div', { class: 'g4-gegenpol' }, null, karte);
    bild(util, bildFuer(text, eintrag.bild), 'g4-gegenpol-bild', reihe);
    var block = util.element('div', { class: 'g4-gegenpol-text' }, null, reihe);
    util.element('span', { class: 'g4-gegenpol-label', 'data-meta': '' }, eintrag.bezeichnung || standardBezeichnung, block);
    util.element('span', { class: 'g4-gegenpol-inhalt' }, util.markeText(text), block);
  }

  /* Karte „Als Mensch“: Zeichnung, Kurzbeschreibung, Kurzprofil (Merkmal → Wert).
     Erlaubt auch die alte Form: "mensch": [ { "merkmal": …, "wert": … } ] */
  function menschKarte(ctx, karte, mensch) {
    var util = ctx.util;
    var m = Array.isArray(mensch) ? { profil: mensch } : (mensch || {});
    kartenKopf(ctx, karte, bildFuer('mensch', m.bild), 'Als Mensch', m.titel || '');
    if (!m.titel) karte.querySelector('.g4-name').remove();
    var liste = util.element('dl', { class: 'g4-liste g4-liste--profil' }, null, karte);
    (m.profil || []).forEach(function (zeile) {
      var paar = util.element('div', { class: 'g4-zeile' }, null, liste);
      util.element('dt', { 'data-meta': '' }, zeile.merkmal || '', paar);
      util.element('dd', null, util.markeText(zeile.wert || ''), paar);
    });
    gegenpol(ctx, karte, m.kundschaft, 'Kundschaft');
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

  /* Abgleich: Das Tier unserer Analyse (Daten der Folie) muss dasselbe sein wie
     marke.js → umfragen.tier.unsereAntwort (das hebt die Umfrage hervor).
     Passt es nicht, erscheint ein Hinweis oben in den Notizen – nur in der
     Referentenansicht sichtbar, nicht auf der Folie. */
  function abgleich(ctx, tierName) {
    var antwort = umfrageKonfig(ctx).unsereAntwort;
    if (!antwort || !tierName) return;
    if (bildSchluessel(antwort) === bildSchluessel(tierName)) return;
    var notizen = ctx.folie.querySelector(':scope > .notizen');
    if (!notizen) return;
    var p = ctx.util.element('p', { class: 'g4-abgleich' });
    p.appendChild(ctx.util.element('b', null, 'Bitte abgleichen: '));
    p.appendChild(document.createTextNode('Die Umfrage hebt „' + antwort + '“ als unsere Analyse hervor ' +
      '(marke.js → umfragen.tier.unsereAntwort), die Folie zeigt „' + tierName + '“ ' +
      '(Daten in folien/08-analogien.html). Beides auf dasselbe Tier setzen.'));
    notizen.insertBefore(p, notizen.firstChild);
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
      var tierDaten = m.tier || {};
      frageSetzen(ctx);
      handzeichen(ctx);
      var tier = ctx.folie.querySelector('[data-g4="tier"]');
      var mensch = ctx.folie.querySelector('[data-g4="mensch"]');
      var wb = ctx.folie.querySelector('[data-g4="wettbewerber"]');
      if (tier) tierKarte(ctx, tier, tierDaten);
      if (mensch) menschKarte(ctx, mensch, m.mensch);
      if (wb) wettbewerberListe(ctx, wb, d.wettbewerber);
      abgleich(ctx, tierDaten.name);
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

      /* Spur mit Skalenstrichen, Balken + Punkt der Marke, Marker der Wettbewerber */
      var spur = util.element('div', { class: 'g4t-spur' }, null, zeile);
      ticks.forEach(function (wert) {
        util.element('span', { class: 'g4t-strich', 'aria-hidden': 'true', style: 'left:' + lage(wert, skala) + '%' }, null, spur);
      });
      var x = lage(dim.marke, skala);
      util.element('span', { class: 'g4t-balken', 'data-schritt': '1', 'data-animation': 'zeichnen', style: 'width:' + x + '%' }, null, spur);

      if (mitWettbewerb) {
        var werte = Array.isArray(dim.wettbewerber) ? dim.wettbewerber : [];
        /* liegen zwei Marker fast gleichauf, rücken sie leicht über/unter die Linie */
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

  /* Ergebniskarte: Markenemotionen, Markenbeziehung, Markenerlebnisse.
     Fehlt ein Eintrag in den Daten, entfällt sein Block. */
  function ergebnisFuellen(ctx) {
    var util = ctx.util;
    var d = ctx.daten || {};
    var felder = {
      emotionen: Array.isArray(d.emotionen) && d.emotionen.length,
      beziehung: !!d.beziehung,
      erlebnisse: !!d.erlebnisse
    };
    Object.keys(felder).forEach(function (name) {
      var el = ctx.folie.querySelector('[data-g4t="' + name + '"]');
      if (!el) return;
      if (!felder[name]) { el.closest('.g4t-block').remove(); return; }
      if (name === 'emotionen') {
        d.emotionen.forEach(function (e) { util.element('li', null, util.markeText(e), el); });
      } else {
        el.textContent = util.markeText(d[name]);
      }
    });
  }

  Deck.registriere('f08b', {
    einrichten: function (ctx) {
      profilBauen(ctx);
      ergebnisFuellen(ctx);
    }
  });
})();
