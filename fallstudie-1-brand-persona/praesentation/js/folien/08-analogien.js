/* =============================================================================
   js/folien/08-analogien.js – Skript für die Folien f08 und f08b
   -----------------------------------------------------------------------------
   f08  „Analogien & Live-Umfrage“
        • setzt die Frage der Umfrage (marke.js → umfragen.tier.frage) als Titel
        • ohne Abstimm-Link (nur Zählmodus): zeigt links „Abstimmung per
          Handzeichen“ statt des QR-Codes
        • baut aus den Daten der Folie die Karten „Als Tier“ und „Als Mensch“
          (Kundschaft nur, wenn eingetragen) sowie die Kontrastzeile mit zwei
          Wettbewerbern. Seit Fr, 23.10.2026 (Entscheidung Yannick, Folie 08
          „So wie Elias das am wahrscheinlichsten wollte“) zeigt die Tier-Karte
          ZWEI Tiere gleichwertig nebeneinander (Daten „tiere“: Papagei und
          Chamäleon, je mit Gründen), darunter das Selbstbild (Maskottchen
          Adler); die Mensch-Karte (Impro-Comedian) steht rechts daneben. Die
          alte Form (ein Tier „tier“ mit Selbstbild und „weiteresTier“ in
          einer gestrichelten Zeile, 22.10.2026) wird weiter gelesen.
        • prüft, ob Tiere, Selbstbild und Titel der Folie zu marke.js →
          umfragen.tier (unsereAntwort – Text oder Liste –, optionen) passen,
          ob die Stichworte des Felds Tonalität auf Folie 10 wortgleich auf
          dieser Folie stehen (seit 23.10.2026: Rad = Selbstbild, Elias'
          Analogien) und ob die Karten überlaufen (dann enger setzen); bleibt
          ein Problem, steht ein Hinweis in den Notizen (Referentenansicht)
          und eine Warnung in der Konsole
        • (Werteingabe, Tab, „Werte“, „Zurücksetzen“ und die Ziffern 1–9
          regelt seit dem 16.10.2026 der Umfrage-Baustein in js/komponenten.js)
   f08b „Markentonalität (Aaker)“ – seit Fr, 23.10.2026 KI-simuliert (Fremdbild)
        • baut aus den Daten das Profil der fünf Dimensionen nach Aaker
          (Balken für die Marke, Kreis-Marker für die Wettbewerber) und hängt
          die Persönlichkeitsmerkmale an ihre Dimension
        • füllt die Ergebniskarte (Zeile „Fremdbild“ bzw. bis 22.10.2026
          „Ins Steuerrad“, Emotionen, Beziehung, Erlebnisse); ihr Platz ist
          reserviert, die Karte erscheint samt Überschriften und Inhalten erst
          im letzten Schritt (seit 16.10.2026)
        • prüft (seit 23.10.2026), ob das erste Stichwort des Fremdbilds im
          Titel und auf Folie 10 (Abgleich Selbstbild ↔ Fremdbild) steht –
          sonst Hinweis in den Notizen und Warnung in der Konsole
   Inhalte ändern Sie NUR in den Daten der Folien (index.html, Folien 08/08b).

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
     („Chamäleon“ → chamaeleon). Klasse „voll“ = gefüllte Fläche (Augen, Nase).
     Jede Zeichnung auch in js/abstimmen.js (BILDER) eintragen.
     --------------------------------------------------------------------------- */
  var BILDER = {
    /* Chamäleon (Tier unserer Analyse seit 20.10.2026): im Profil auf einem
       schrägen Ast, Blick nach rechts. Erkennungsmerkmale: hoher Helm
       (Kasque), großes rundes Auge mit Pupille, eingerollter Schwanz.
       Füße ohne Zehen: Zehen am Ast wirkten bei 42–52 px wie Striche auf
       dem Ast. Geprüft am 20.10.2026: Folie 96 px, Handy-Knopf 42/52 px,
       „Danke“-Karte 54/66 px (dort verdeckt der Haken das Astende). */
    chamaeleon:
      '<path d="M29.5 70 C29 57 38 45 49.5 40.5 C55.5 38.5 60.5 36.5 64.5 36.5 C62.5 27 61.5 18.5 63 10.5 C72.5 15.5 82.5 22 91.5 28.5 C98.5 31.5 104 35 103.5 40 C101.5 47 93 53.5 82.5 55 C81 63.5 72.5 70 60.5 74 C49 78.5 37.5 78 31 75 Z"/>' +
      '<path d="M66 37 C72 42.5 77.5 48 82.5 55"/>' +
      '<circle cx="82.5" cy="37.5" r="9"/><circle class="voll" cx="84" cy="37" r="3.5"/>' +
      '<path d="M102.5 40 Q95 47.5 85.5 48.5"/>' +
      '<path d="M31 71.5 C17.5 74.5 6 85 10.5 98 C15 109.5 30 108.5 34.5 99.5 C38 91.5 32 83.5 25 86 C19 88 21 96.5 26.5 96.5"/>' +
      '<path d="M75 65.5 L87 71 L87.5 87.5 M46.5 78 L42 90 L52.5 100.5"/>' +
      '<path d="M30 108.5 L114 78"/>',
    /* Papagei (seit 22.10.2026: Elias Knaubers anderes Tier in seiner
       Ausarbeitung „Analogien“ – bei ihm „Tier 1“, das Chamäleon „Tier 2“):
       auf einem Ast, Blick nach rechts. Erkennungsmerkmale:
       großer Hakenschnabel, Augenring, langer Schwanz. Geprüft am 22.10.2026
       bei 96, 72 und 56 px. Seit Fr, 23.10.2026 gleichwertig mit dem
       Chamäleon auf der Folie und Option der Live-Abstimmung (an der Stelle
       des Fuchses) – deshalb jetzt auch in js/abstimmen.js (BILDER). */
    papagei:
      '<path d="M54 46 C51 29 61 16 76 16 C86 16 92 21 94 28 C104 27 109 40 101 52 C99 45 95 42 91 43 C92 59 88 72 79 82 L72 115 C67 117 62 116 59 112 L63 84 C51 77 50 60 54 46 Z"/>' +
      '<circle cx="80" cy="29" r="6.5"/><circle class="voll" cx="80.5" cy="29" r="2.8"/>' +
      '<path d="M94 28 C93 34 92 39 91 43"/>' +
      '<path d="M62 50 C57 64 60 77 70 86"/>' +
      '<path d="M26 96 L112 87"/><path d="M72 83 L71 92 M80 81 L80 90"/>',
    /* Waschbär (Tier unserer Analyse bis 20.10.2026; bleibt für einen Rückgriff) */
    waschbaer:
      '<path d="M60 104 C50 104 42 98 36 92 L14 78 L24 70 C21 58 22 46 27 37 L24 15 L44 26 Q60 21 76 26 L96 15 L93 37 C98 46 99 58 96 70 L106 78 L84 92 C78 98 70 104 60 104 Z"/>' +
      '<path d="M31 24 L34 33 M89 24 L86 33"/>' +
      /* Maske mit zwei Augenlöchern (evenodd), darin die Pupillen */
      '<path class="voll" fill-rule="evenodd" d="M22 60 C30 48 46 46 55 56 Q60 61 65 56 C74 46 90 48 98 60 C94 71 80 75 70 69 Q60 63 50 69 C40 75 26 71 22 60 Z M44 54 a6 6 0 1 0 0.01 0 Z M76 54 a6 6 0 1 0 0.01 0 Z"/>' +
      '<circle class="voll" cx="44" cy="60" r="2.6"/><circle class="voll" cx="76" cy="60" r="2.6"/>' +
      '<path d="M60 30 V44"/>' +
      '<ellipse class="voll" cx="60" cy="86" rx="6.5" ry="4.5"/><path d="M60 90 V95 M60 95 Q55 99 51 96 M60 95 Q65 99 69 96"/>',
    /* Adlerkopf im Profil: geschlossene Kontur, nach vorn gerichteter
       Hakenschnabel, kantige Braue (wirkt auch bei 84 px eindeutig) */
    adler:
      '<path d="M18 112 C18 88 24 64 38 50 C48 40 62 35 78 35 C86 35 92 37 97 41 C106 41 114 45 117 53 C118 58 116 64 111 68 C111 63 108 60 103 60 L86 60 C84 68 81 76 76 82 C71 90 69 100 69 112 Z"/>' +
      '<path d="M97 41 C94 47 92 53 91 60"/>' +
      '<circle class="voll" cx="80" cy="49" r="3.6"/><path d="M64 47 L80 42 L93 46"/>',
    /* Affe (Dossier Kap. 6.7 nennt „Waschbär oder Affe“) */
    affe:
      '<path d="M27 48 A12 12 0 1 0 27 70 M93 48 A12 12 0 1 1 93 70"/>' +
      '<circle cx="60" cy="59" r="34"/>' +
      '<path d="M60 47 C54 38 39 38 39 53 C39 60 42 64 45 68 C41 76 45 89 60 91 C75 89 79 76 75 68 C78 64 81 60 81 53 C81 38 66 38 60 47 Z"/>' +
      '<circle class="voll" cx="51" cy="56" r="3.6"/><circle class="voll" cx="69" cy="56" r="3.6"/>' +
      '<circle class="voll" cx="56" cy="72" r="1.9"/><circle class="voll" cx="64" cy="72" r="1.9"/>' +
      '<path d="M51 80 Q60 86 69 80"/><path d="M53 26 Q57 18 61 25 Q65 18 69 26"/>',
    /* Pfotenabdruck: Ersatz für Tiere ohne eigene Zeichnung */
    pfote:
      '<path d="M60 62 C48 62 36 74 36 86 C36 96 46 100 54 97 C57 96 58 95 60 95 C62 95 63 96 66 97 C74 100 84 96 84 86 C84 74 72 62 60 62 Z"/>' +
      '<ellipse cx="31" cy="55" rx="8" ry="10.5" transform="rotate(-25 31 55)"/><ellipse cx="48" cy="36" rx="8" ry="11" transform="rotate(-8 48 36)"/>' +
      '<ellipse cx="72" cy="36" rx="8" ry="11" transform="rotate(8 72 36)"/><ellipse cx="89" cy="55" rx="8" ry="10.5" transform="rotate(25 89 55)"/>',
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
    /* Impro-Comedian (seit 22.10.2026, Analogie „Mensch“ nach Elias Knauber):
       Mensch vor einem Mikrofon am Ständer – das Zeichen der Bühne */
    comedian:
      '<circle cx="50" cy="40" r="19"/><path d="M14 108 C14 84 30 72 50 72 C64 72 75 78 81 88"/>' +
      '<rect x="78" y="30" width="12" height="20" rx="6" transform="rotate(28 84 40)"/>' +
      '<path d="M80 50 L96 110 M84 110 H108"/>',
    /* Mensch mit Headset (Gamer; Analogie „Mensch“ bis 22.10.2026) */
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
     sonst wird es über den Tiernamen gesucht. Mit ersatz (z. B. 'pfote')
     bekommt ein Tier ohne eigene Zeichnung dieses Ersatzbild. */
  function bildFuer(name, bildAngabe, ersatz) {
    if (bildAngabe !== undefined && bildAngabe !== null) return bildSchluessel(bildAngabe);
    var schluessel = bildSchluessel(name);
    if (BILDER[schluessel]) return schluessel;
    return ersatz || schluessel;
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

  /* Kopf einer Karte: Zeichnung, Kicker („Als Tier“), Name.
     Ohne Zeichnung (Klasse „ohne-bild“) nimmt der Text die ganze Breite ein. */
  function kartenKopf(ctx, karte, bildSchl, kicker, name) {
    var util = ctx.util;
    var kopf = util.element('div', { class: 'g4-karte-kopf' }, null, karte);
    if (!bild(util, bildSchl, 'g4-bild', kopf)) kopf.classList.add('ohne-bild');
    var titel = util.element('div', { class: 'g4-karte-titel' }, null, kopf);
    util.element('span', { class: 'karte-kicker', 'data-meta': '' }, kicker, titel);
    util.element('p', { class: 'g4-name' }, util.markeText(name || '…'), titel);
  }

  /* ALTE FORM (Daten „tier“, bis 22.10.2026 – weiter lesbar; seit 23.10.2026
     baut tiereKarte unten die Karte aus „tiere“):
     Karte „Als Tier“: Zeichnung, Tiername, drei Gründe (Eigenschaft + Beleg),
     darunter das Selbstbild der Marke (z. B. Maskottchen) und – seit
     22.10.2026 – ein weiteres Tier („weiteresTier“, Elias Knauber: Papagei;
     bis zur Nacharbeit am 22.10.2026 hieß der Schlüssel „zweitesTier“ und
     wird weiter gelesen). Die Standard-Beschriftung ist neutral („Weiteres
     Tier“): Bei Elias ist der Papagei „Tier 1“, das Chamäleon „Tier 2“.
     Stehen beide in den Daten, teilen sie sich EINE gestrichelte Zeile
     (nebeneinander), damit die Karte nicht höher wird.
     Tiere ohne eigene Zeichnung bekommen einen Pfotenabdruck. */
  function tierKarte(ctx, karte, tier) {
    var name = tier.name || antwortenAus(umfrageKonfig(ctx))[0] || '…';
    kartenKopf(ctx, karte, bildFuer(name, tier.bild, 'pfote'), 'Als Tier', name);
    gruendeListe(ctx, karte, tier.gruende);

    var weiteres = tier.weiteresTier || tier.zweitesTier;
    var pole = [[tier.selbstbild, 'Selbstbild'], [weiteres, 'Weiteres Tier']].filter(function (p) {
      return p[0] && (p[0].text || p[0].name);
    });
    if (!pole.length) return;
    karte.classList.add('hat-gegenpol');
    /* zwei Einträge: gemeinsame Zeile (CSS .g4-gegenpole, zwei Spalten) */
    var ziel = pole.length > 1 ? ctx.util.element('div', { class: 'g4-gegenpole' }, null, karte) : karte;
    pole.forEach(function (p) { gegenpol(ctx, ziel, p[0], p[1]); });
  }

  /* Liste der Gründe: Eigenschaft (Titelschrift) + Beleg, höchstens drei.
     erlaubt: { "stichwort": "wandelbar", "beleg": "…" } oder ein einfacher Text */
  function gruendeListe(ctx, eltern, gruende) {
    var util = ctx.util;
    var liste = util.element('dl', { class: 'g4-liste g4-liste--gruende' }, null, eltern);
    (gruende || []).slice(0, 3).forEach(function (grund) {
      var g = typeof grund === 'string' ? { stichwort: grund, beleg: '' } : (grund || {});
      var zeile = util.element('div', { class: 'g4-zeile' }, null, liste);
      util.element('dt', { class: 'g4-stichwort' }, util.markeText(g.stichwort || ''), zeile);
      util.element('dd', null, util.markeText(g.beleg || ''), zeile);
    });
    return liste;
  }

  /* Karte „Als Tier“ mit MEHREREN Tieren (seit Fr, 23.10.2026, Daten
     „tiere“): Elias Knaubers zwei Tiere stehen gleichwertig nebeneinander –
     je Spalte Zeichnung, Kicker „Als Tier“, Name und Gründe (Eigenschaft +
     Beleg). Darunter, über die ganze Kartenbreite, das Selbstbild der Marke
     (Maskottchen Adler) als gestrichelt abgesetzter Gegenpol. Die Klasse
     „g4-paar--tiere“ am Kartenpaar gibt der Tier-Karte zwei Drittel der
     Breite (CSS). Mit nur einem Eintrag in „tiere“ sieht die Karte aus wie
     früher (eine Spalte). */
  function tiereKarte(ctx, karte, tiere, selbstbild) {
    var util = ctx.util;
    var spalten = util.element('div', { class: 'g4-tiere' }, null, karte);
    tiere.forEach(function (tier) {
      var spalte = util.element('div', { class: 'g4-tier' }, null, spalten);
      var name = tier.name || '…';
      kartenKopf(ctx, spalte, bildFuer(name, tier.bild, 'pfote'), tier.kicker || 'Als Tier', name);
      gruendeListe(ctx, spalte, tier.gruende);
    });
    if (tiere.length > 1) {
      karte.classList.add('g4-karte--tiere');
      var paar = karte.closest('.g4-paar');
      if (paar) paar.classList.add('g4-paar--tiere');
    }
    if (selbstbild && (selbstbild.text || selbstbild.name)) gegenpol(ctx, karte, selbstbild, 'Selbstbild');
  }

  /* Tiere aus den Daten: neue Form „tiere“ (Liste) oder alte Form „tier“
     (ein Tier; das weitere Tier steht dann nur klein im Gegenpol) */
  function tiereAus(m) {
    if (Array.isArray(m.tiere) && m.tiere.length) return m.tiere.filter(function (t) { return t && t.name; });
    return m.tier && m.tier.name ? [m.tier] : [];
  }
  function selbstbildAus(m) {
    return m.selbstbild || (m.tier && m.tier.selbstbild) || null;
  }

  /* unsereAntwort aus marke.js als Liste (Text oder – seit 23.10.2026 –
     Liste, wie im Umfrage-Baustein, js/komponenten.js) */
  function antwortenAus(konfig) {
    var a = konfig && konfig.unsereAntwort;
    return (Array.isArray(a) ? a : [a]).map(function (x) { return String(x === undefined || x === null ? '' : x).trim(); })
      .filter(function (x) { return x; });
  }

  /* Gegenpol unten in einer Karte: ein belegter Fakt bzw. eine weitere
     Analogie neben der Hauptaussage (Tier: Selbstbild/Maskottchen und
     weiteres Tier, Mensch: tatsächliche Kundschaft).
     Daten: { "bezeichnung": "…", "text": "…", "zusatz": "…", "bild": "…" }
     „zusatz“ (optional) = dritte Zeile in Textgröße, z. B. Eigenschaften.
     eltern = Karte oder die gemeinsame Zeile .g4-gegenpole. */
  function gegenpol(ctx, eltern, eintrag, standardBezeichnung) {
    var util = ctx.util;
    var text = eintrag && (eintrag.text || eintrag.name);
    if (!text) return;
    var karte = eltern.closest('.g4-karte') || eltern;
    karte.classList.add('hat-gegenpol');
    var reihe = util.element('div', { class: 'g4-gegenpol' }, null, eltern);
    if (!bild(util, bildFuer(text, eintrag.bild), 'g4-gegenpol-bild', reihe)) reihe.classList.add('ohne-bild');
    var block = util.element('div', { class: 'g4-gegenpol-text' }, null, reihe);
    util.element('span', { class: 'g4-gegenpol-label', 'data-meta': '' }, eintrag.bezeichnung || standardBezeichnung, block);
    util.element('span', { class: 'g4-gegenpol-inhalt' }, util.markeText(text), block);
    if (eintrag.zusatz) util.element('span', { class: 'g4-gegenpol-zusatz' }, util.markeText(eintrag.zusatz), block);
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
      if (!bild(util, bildFuer(w.tier, w.bild, 'pfote'), 'g4-wb-bild', eintrag)) eintrag.classList.add('ohne-bild');
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

  /* Hinweis oben in den Notizen (nur in der Referentenansicht sichtbar, nicht
     auf der Folie) und zusätzlich als Warnung in der Konsole – so meldet auch
     werkzeuge/pruefen.mjs das Problem („Konsole (Warnung)“).
     art = Kennung, damit ein Hinweis beim erneuten Prüfen ersetzt wird. */
  function notizHinweis(ctx, art, titel, text) {
    var notizen = ctx.folie.querySelector(':scope > .notizen');
    var alt = notizen && notizen.querySelector(':scope > .g4-hinweis[data-art="' + art + '"]');
    if (alt) alt.remove();
    if (!text) return;
    /* Kennung der Folie (f08 bzw. seit 23.10.2026 auch f08b) vor der Meldung */
    console.warn((ctx.folie.id || 'f08') + ': ' + titel + ' – ' + text);
    if (!notizen) return;
    var p = ctx.util.element('p', { class: 'g4-hinweis g4-abgleich', 'data-art': art });
    /* „ACHTUNG“ in Versalien, damit der Hinweis in der Probe auffällt */
    p.appendChild(ctx.util.element('b', null, 'ACHTUNG – ' + titel + ': '));
    p.appendChild(document.createTextNode(text));
    notizen.insertBefore(p, notizen.firstChild);
  }

  /* Kommt ein Tier (als Schlüssel, z. B. „chamaeleon“) in einem Text vor? */
  function nenntTier(text, schluessel) {
    return String(text || '').split(/[\s,.;:!?–—\-„“"()]+/).some(function (wort) {
      return wort && bildSchluessel(wort) === schluessel;
    });
  }

  /* Abgleich zwischen Folie und marke.js. Geprüft wird:
     1. marke.js → umfragen.tier.unsereAntwort = Tier(e) unserer Analyse
        (das hebt die Umfrage in Schritt 1 als „Unsere Analyse“ hervor).
        Seit Fr, 23.10.2026 dürfen es mehrere sein (Liste, Papagei und
        Chamäleon): Dann müssen genau die Tiere der Karte dort stehen –
        Reihenfolge egal.
     2. marke.js → umfragen.tier.optionen enthält jedes Tier der Analyse und
        das Tier des Selbstbilds (sonst behauptet der Titel „…, kein Adler“
        über Tiere, die gar nicht zur Wahl standen),
     3. der Titel ab Schritt 2 nennt alle diese Tiere. */
  function abgleich(ctx, tiere, selbst) {
    var konfig = umfrageKonfig(ctx);
    var namen = tiere.map(function (t) { return t.name; });
    var schluessel = namen.map(bildSchluessel);
    /* Tier des Selbstbilds: über die Zeichnung („bild“: "adler") bzw. das erste Wort */
    var selbstSchl = selbst ? bildSchluessel(selbst.bild || String(selbst.text || '').split(/\s+/)[0]) : '';
    var selbstName = selbst ? (String(selbst.text || '').split(/\s+/)[0] || selbstSchl) : '';
    var probleme = [];

    var antworten = antwortenAus(konfig);
    var antwortSchl = antworten.map(bildSchluessel);
    var gleich = antwortSchl.length === schluessel.length &&
      schluessel.every(function (s) { return antwortSchl.indexOf(s) >= 0; });
    if (schluessel.length && antworten.length && !gleich) {
      probleme.push('Die Umfrage löst „' + antworten.join('“ und „') + '“ als unsere Analyse auf ' +
        '(marke.js → umfragen.tier.unsereAntwort), die Folie zeigt „' + namen.join('“ und „') + '“.');
    }
    var optionen = (Array.isArray(konfig.optionen) ? konfig.optionen : []).map(bildSchluessel);
    var fehlen = [];
    if (optionen.length) {
      schluessel.forEach(function (s, i) { if (s && optionen.indexOf(s) < 0) fehlen.push(namen[i]); });
      if (selbstSchl && optionen.indexOf(selbstSchl) < 0) fehlen.push(selbstName);
    }
    if (fehlen.length) {
      probleme.push('Die Umfrage bietet „' + fehlen.join('“ und „') + '“ nicht an ' +
        '(marke.js → umfragen.tier.optionen: ' + konfig.optionen.join(', ') + ').');
    }
    var titel = ctx.folie.querySelector('.g4-titel-antwort');
    var titelText = titel ? titel.textContent : '';
    var imTitelFehlt = [];
    if (titel) {
      schluessel.forEach(function (s, i) { if (s && !nenntTier(titelText, s)) imTitelFehlt.push(namen[i]); });
      if (selbstSchl && !nenntTier(titelText, selbstSchl)) imTitelFehlt.push(selbstName);
    }
    if (imTitelFehlt.length) {
      probleme.push('Der Titel ab Schritt 2 („' + titelText.trim() + '“) nennt „' + imTitelFehlt.join('“ und „') +
        '“ nicht (Titel in index.html, Folien 08/08b anpassen).');
    }
    notizHinweis(ctx, 'abgleich', 'Bitte abgleichen', probleme.length
      ? probleme.join(' ') + ' Alles auf dieselben Tiere setzen (Notizen „VOR DEM VORTRAG“).'
      : '');
  }

  /* ---------------------------------------------------------------------------
     ABGLEICH MIT FOLIE 10 (seit Fr, 23.10.2026, Entscheidung Yannick „Rad =
     Selbstbild, Simulation als Abgleich“): Das Feld Markentonalität im
     Steuerrad von Folie 10 trägt Elias' Analogien („frech · gesellig ·
     wandelbar“) – diese Wörter müssen wortgleich auf Folie 08 stehen.
     Folie 08b zeigt dagegen das KI-simulierte Fremdbild; sein erstes
     Stichwort muss im Abgleich auf Folie 10 vorkommen. Bis 22.10.2026 galt:
     Zeile „Ins Steuerrad“ auf 08b = Feld Tonalität (nur als Kommentar, ohne
     Prüfung im Skript).
     Gelesen wird Folie 10 so, wie sie in index.html steht: Text ohne
     Notizen und Kommentare, dazu die Daten-JSON (dort stehen Stichworte und
     Abgleich). Fehlt Folie 10, wird nichts geprüft.
     --------------------------------------------------------------------------- */
  /* Wortgleich enthalten? Groß-/Kleinschreibung und Satzzeichen egal,
     aber nur ganze Wörter („frech“ passt nicht in „frecher“). */
  function enthaeltWortgleich(text, wort) {
    var norm = function (s) {
      return ' ' + String(s || '').toLowerCase().replace(/[^0-9a-zäöüß]+/g, ' ').trim() + ' ';
    };
    var w = norm(wort);
    return w.trim() !== '' && norm(text).indexOf(w) >= 0;
  }
  /* Text eines Elements, Textknoten mit Leerzeichen verbunden (textContent
     klebte „wandelbar“ und „fünf Produktlinien“ aus zwei Zellen zu
     „wandelbarfünf …“ zusammen). Kommentare zählen nicht, <script>-Daten schon. */
  function textMitLuecken(el) {
    var teile = [];
    var gang = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    while (gang.nextNode()) teile.push(gang.currentNode.nodeValue);
    return teile.join(' ');
  }
  /* Text einer Folie ohne Notizen */
  function folienText(id) {
    var folie = document.getElementById(id);
    if (!folie) return null;
    return Array.prototype.filter.call(folie.children, function (c) { return !c.matches('.notizen'); })
      .map(textMitLuecken).join(' ');
  }
  /* Stichworte eines Felds im Steuerrad von Folie 10 (JSON im Baustein) */
  function radStichworte(feld) {
    var rad = document.querySelector('#f10 .steuerrad');
    var skript = rad && rad.querySelector(':scope > script[type="application/json"]');
    if (!skript) return null;
    try {
      var f = (JSON.parse(skript.textContent).felder || {})[feld];
      return f && Array.isArray(f.stichworte) ? f.stichworte.map(function (s) { return typeof s === 'string' ? s : s.text; }) : null;
    } catch (e) { return null; }
  }
  /* f08: Stichworte des Felds Tonalität (Folie 10) stehen auf dieser Folie */
  function tonalitaetAbgleich(ctx) {
    var woerter = radStichworte('tonalitaet');
    if (!woerter) return;
    var szene = ctx.folie.querySelector('.g4-szene--analogien');
    var text = szene ? textMitLuecken(szene) : '';
    var fehlen = woerter.filter(function (w) { return w && !enthaeltWortgleich(text, w); });
    notizHinweis(ctx, 'tonalitaet', 'Abgleich mit Folie 10', fehlen.length
      ? 'Das Feld Markentonalität auf Folie 10 nennt „' + fehlen.join('“, „') + '“ – auf dieser Folie (Analogien ' +
        'ab Schritt 2) steht das nicht wortgleich. Seit 23.10.2026 trägt das Rad Elias\' Analogien (Selbstbild): ' +
        'Karten hier oder Feld Tonalität auf Folie 10 angleichen.'
      : '');
  }

  /* Passform der Karten: Läuft eine Karte über (zu lange Belege, eine Zeile
     mehr …), werden beide Karten enger gesetzt (Klasse „ist-eng“, siehe CSS).
     Reicht auch das nicht, folgt ein Hinweis in den Notizen und der Konsole.
     Läuft beim Aufbau, nach jedem Themenwechsel und im Druck. */
  function passform(ctx) {
    var paar = ctx.folie.querySelector('.g4-paar');
    if (!paar) return;
    var karten = ctx.util.alle('.g4-karte', paar);
    var zuVoll = function () {
      return karten.filter(function (k) { return k.scrollHeight > k.clientHeight + 1; });
    };
    paar.classList.remove('ist-eng');
    var voll = ctx.util.messen(paar, zuVoll);
    if (voll.length) {
      paar.classList.add('ist-eng');
      voll = ctx.util.messen(paar, zuVoll);
    }
    notizHinweis(ctx, 'passform', 'Karte zu voll', voll.length
      ? 'Die Karte „' + voll.map(function (k) { return k.querySelector('.karte-kicker').textContent; }).join('“ und „') +
        '“ läuft über. Belege bzw. Profilzeilen in den Daten kürzen (einzeilig, höchstens 3 Zeilen).'
      : '');
  }

  Deck.registriere('f08', {
    einrichten: function (ctx) {
      var d = ctx.daten || {};
      var m = d.marke || {};
      /* seit 23.10.2026: „tiere“ (Liste, gleichwertig) – sonst alte Form „tier“ */
      var tiere = tiereAus(m);
      var selbstbild = selbstbildAus(m);
      frageSetzen(ctx);
      handzeichen(ctx);
      var tier = ctx.folie.querySelector('[data-g4="tier"]');
      var mensch = ctx.folie.querySelector('[data-g4="mensch"]');
      var wb = ctx.folie.querySelector('[data-g4="wettbewerber"]');
      if (tier) {
        if (Array.isArray(m.tiere) && m.tiere.length) tiereKarte(ctx, tier, tiere, selbstbild);
        else tierKarte(ctx, tier, m.tier || {});
      }
      if (mensch) menschKarte(ctx, mensch, m.mensch);
      if (wb) wettbewerberListe(ctx, wb, d.wettbewerber);
      abgleich(ctx, tiere, selbstbild);
      tonalitaetAbgleich(ctx);
      passform(ctx);
      /* nach einem Themenwechsel (andere Schrift, andere Abstände) neu prüfen */
      document.addEventListener('deck:groesse', function () { passform(ctx); });
    },
    /* Offene Eingabefelder der Umfrage schließt der Baustein selbst beim
       Weiterblättern; Ziffern zählt er nur, solange die Umfrage sichtbar ist
       (ab Schritt 2 gehen sie wieder an die Navigation). */
    druck: function (ctx) { passform(ctx); }
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
    /* Die Ergebniskarte (seit 23.10.2026 „Fremdbild“, bis dahin „Ins
       Steuerrad“) erscheint erst im letzten Schritt – mit ihren
       Überschriften und Inhalten (vorher stand der leere Rahmen da und las sich
       wie „hier fehlt etwas“, Abschlussprüfung 16.10.2026). Der Platz bleibt
       reserviert; die Inhalte gleiten gestaffelt nach. */
    ctx.util.alle('.g4t-karte, .g4t-inhalt', ctx.folie).forEach(function (el) {
      el.setAttribute('data-schritt', String(schrittMerkmale + 1));
    });

    /* Beschreibung für Screenreader. Kennzeichnung aus den Daten
       („kennzeichnung“, seit 23.10.2026 „KI-simuliert“); ohne Angabe wie
       bisher „Beispieldaten“. */
    ziel.setAttribute('role', 'group');
    ziel.setAttribute('aria-label', 'Markenpersönlichkeit nach Aaker, Skala ' + skala[0] + ' bis ' + skala[1] +
      ' (' + (d.kennzeichnung || 'Beispieldaten') + '): ' + dimensionen.map(function (dim) {
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
    /* eigener Hinweis am Ende der Legende (Daten „legendeHinweis“, seit
       23.10.2026, z. B. „KI-simuliert: n = 8, waterdrop n = 4“) – erscheint
       mit den Wettbewerbern (Schritt 2), ohne Wettbewerber mit der Marke */
    var legHinweis = d.legendeHinweis ? String(d.legendeHinweis) : '';
    /* Wettbewerber mit "beispiel": true (Standard, solange nichts erhoben ist):
       gestrichelter Marker wie alle Beispielwerte + Hinweis in der Legende */
    var istBeispielWb = function (w) { return !w || w.beispiel !== false; };
    if (mitWettbewerb) {
      wettbewerber.forEach(function (w) {
        var leg = util.element('span', { class: 'g4t-leg', 'data-schritt': '2' }, null, legende);
        util.element('span', { class: 'g4t-wb-marker g4t-wb-marker--legende' + (istBeispielWb(w) ? ' g4t-wb-marker--beispiel' : ''), 'aria-hidden': 'true' }, w.kuerzel || '', leg);
        util.element('span', null, util.markeText(w.name || ''), leg);
      });
      if (wettbewerber.some(istBeispielWb)) {
        util.element('span', { class: 'g4t-leg g4t-leg-hinweis', 'data-schritt': '2' }, 'gestrichelt: Beispielwert, nicht erhoben', legende);
      }
    }
    if (legHinweis) {
      util.element('span', { class: 'g4t-leg g4t-leg-hinweis', 'data-schritt': mitWettbewerb ? '2' : '1' }, util.markeText(legHinweis), legende);
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
        /* liegt ein Marker fast auf dem Punkt der Marke, verdeckt der Punkt seinen
           Buchstaben (seit 23.10.2026 mit den KI-simulierten Werten: waterdrop =
           HOLY bei Aufrichtigkeit 3,19 und Kompetenz 3,0, Red Bull 2,25 neben
           HOLY 2,19 bei Kultiviertheit) – dann weicht der Marker nach UNTEN aus
           (oben stehen die Merkmal-Chips der Zeile; Prüfung 23.10.2026: nach
           oben überdeckte „W“ den Chip „gesellig“); liegt auch der zweite dort,
           weicht er nach oben aus. Der Wert bleibt an seiner Stelle auf der Skala. */
        var amPunkt = werte.map(function (w) {
          return w !== null && w !== undefined && Math.abs(lage(w, skala) - x) < 4;
        });
        werte.forEach(function (w, i) {
          if (w === null || w === undefined || !wettbewerber[i]) return;
          var versatz = eng ? (i === 0 ? ' g4t-wb-marker--oben' : ' g4t-wb-marker--unten') : '';
          if (amPunkt[i]) versatz = (i === 1 && amPunkt[0]) ? ' g4t-wb-marker--weit-oben' : ' g4t-wb-marker--weit-unten';
          util.element('span', {
            class: 'g4t-wb-marker' + versatz + (istBeispielWb(wettbewerber[i]) ? ' g4t-wb-marker--beispiel' : ''), 'data-meta': '', 'aria-hidden': 'true',
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

  /* Ergebniskarte: oben die Zeile „Fremdbild (KI-simuliert) → Abgleich
     Folie 10“ (seit Fr, 23.10.2026, Daten „fremdbild“; Entscheidung Yannick:
     Das Rad zeigt das Selbstbild, die Simulation dient dem Abgleich) bzw.
     bis 22.10.2026 die Übergabezeile „Ins Steuerrad“ (Daten „steuerrad“ =
     Stichworte des Felds Tonalität auf Folie 10, wird weiter gelesen),
     darunter Markenemotionen, Markenbeziehung, Markenerlebnisse.
     Fehlt ein Eintrag in den Daten, entfällt sein Block bzw. die Zeile. */
  function ergebnisFuellen(ctx) {
    var util = ctx.util;
    var d = ctx.daten || {};
    var zeile = ctx.folie.querySelector('[data-g4t="fremdbild"], [data-g4t="steuerrad"]');
    var istFremdbild = Array.isArray(d.fremdbild) && d.fremdbild.length > 0;
    var woerter = istFremdbild ? d.fremdbild : d.steuerrad;
    if (zeile) {
      if (Array.isArray(woerter) && woerter.length) {
        woerter.forEach(function (w) { util.element('li', null, util.markeText(w), zeile); });
        zeile.setAttribute('aria-label', (istFremdbild
          ? 'Fremdbild, KI-simuliert, Abgleich auf Folie 10: '
          : 'Ins Steuerrad, Feld Markentonalität: ') + woerter.map(util.markeText).join(', '));
      } else {
        /* ohne Stichworte entfällt die ganze Kopfzeile (Beschriftung + Liste) */
        var kopf = zeile.closest('.g4t-uebergabe');
        (kopf || zeile).remove();
      }
    }
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

  /* f08b ↔ Titel und Folie 10 (seit Fr, 23.10.2026): Das erste Stichwort
     des Fremdbilds (Leitwort, z. B. „witziger Kumpel“) muss im Titel dieser
     Folie stehen und im Abgleich Selbstbild ↔ Fremdbild auf Folie 10 – sonst
     stimmen Kernaussage, Ergebnis und Abgleich nicht mehr überein (Titel
     prüfen nach jedem Daten-Update, VORTRAGSREIFE G10). Die übrigen
     Stichworte (z. B. „gut gelaunt“) braucht Folie 10 nicht. */
  function fremdbildAbgleich(ctx) {
    var d = ctx.daten || {};
    if (!Array.isArray(d.fremdbild) || !d.fremdbild.length) { notizHinweis(ctx, 'fremdbild', '', ''); return; }
    var leitwort = ctx.util.markeText(String(d.fremdbild[0] || ''));
    var titel = ctx.folie.querySelector('.folie-kopf .titel');
    var probleme = [];
    if (titel && !enthaeltWortgleich(textMitLuecken(titel), leitwort)) {
      probleme.push('Der Titel („' + titel.textContent.trim() + '“) nennt das Fremdbild „' + leitwort + '“ nicht (Titel oder Daten „fremdbild“ anpassen).');
    }
    var text10 = folienText('f10');
    if (text10 !== null && !enthaeltWortgleich(text10, leitwort)) {
      probleme.push('Auf Folie 10 steht „' + leitwort + '“ nicht – der Abgleich Selbstbild ↔ Fremdbild dort soll das Fremdbild dieser Folie wortgleich aufgreifen.');
    }
    notizHinweis(ctx, 'fremdbild', 'Abgleich mit Folie 10', probleme.join(' '));
  }

  Deck.registriere('f08b', {
    einrichten: function (ctx) {
      profilBauen(ctx);
      ergebnisFuellen(ctx);
      fremdbildAbgleich(ctx);
    }
  });
})();
