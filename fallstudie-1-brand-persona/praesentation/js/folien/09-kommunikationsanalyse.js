/* =============================================================================
   js/folien/09-kommunikationsanalyse.js – Skript für die Folien f09 und f09b
   -----------------------------------------------------------------------------
   f09  „Kanäle & Bildwelt“
        • baut aus den Daten der Folie die Kanal-Spalten (seit 22.10.2026 so
          viele, wie in den Daten stehen – zurzeit vier; mehr als vier sind
          nicht geprüft → Warnung in der Konsole): Profilname, Follower
          (zählt hoch; mit "tausend": true als „383 Tsd.“ wie auf der
          Plattform – „Tsd.“ seit der Nacharbeit 22.10.2026 in der großen
          Zahl) mit Reichweitenbalken (gemessen am größten Kanal), eine
          Zusatzkennzahl und die Rolle im Kanalmix. Fehlt der Follower-Wert,
          steht „–“ ohne Balken (keine Schein-Null). Beiträge pro Woche und
          Ø Engagement-Rate nur, wenn sie in den Daten stehen (seit 22.10.2026
          nicht mehr). Beispielwerte werden gestrichelt umrandet (.ist-annahme).
        • baut die Bildwelt – zwei Formen:
            ohne "anteil" (seit 22.10.2026): Liste der Bildwelten mit Kurz-
              beschreibung und – nur wo die Analyse sie nennt – dem Kanal,
              auf dem die Bildwelt vor allem vorkommt („schwerpunkt“, seit der
              Nacharbeit 22.10.2026 in Textgröße mit dem Icon des Kanals)
              bzw. einer Gewichtung als Text („gewichtung“, Metaangabe);
            mit "anteil": je Motivgruppe ein waagerechter Balken mit der Zahl
              der Beiträge (Stand bis 22.10.2026, Beispieldaten).
          Rechts daneben in Schritt 2 EIN Schlüsselbild-Feld: aus "schluessel-
          bild" (Kandidat mit Piktogramm, kein Screenshot; seit der Nacharbeit
          22.10.2026 mit durchgezogenem Rahmen ohne Schraffur – nicht mehr in
          der Bildsprache „Platzhalter/Beispiel“) oder – alte Form – der
          Beitrag mit "schluesselbild": true. Das Hervorheben regelt CSS.
   f09b „Corporate Design & Fit“
        • baut das Datenblatt (Logo · Claims & Schrift · Farben mit HEX ·
          Bildwelt) und die Fit-Bewertung (✓ / ~ / ✗, ein Schritt je Zeile),
          danach als letzten Schritt „Ins Steuerrad · Markenbild“.
        • merkt sich an jeder Datenblatt-Zeile, zu welcher Fit-Zeile sie ein
          Beleg ist (data-belege="1 3"). Ist Fit-Zeile n der aktuelle Schritt,
          leuchten die passenden Zeilen auf, der Rest tritt zurück (CSS).
          Auch eine einzelne Farbgruppe kann Beleg sein ("farben.akzent").
        • Markenfarben aus marke.js → farben erscheinen in der Palette, falls
          sie dort noch nicht stehen und noch Platz ist (insgesamt höchstens
          5 Farben; Vorrang haben die Farben aus den Daten).
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
    /* Mensch hält einen Shaker hoch – „Produkt in der Hand“ (seit
       22.10.2026, Schlüsselbild-Kandidat nach Elias Knauber; eigenes
       Piktogramm, kein Screenshot) */
    'produkt-hand':
      '<circle cx="8.5" cy="8.2" r="3.2"/><path d="M2.8 21.2c0-3.7 2.5-6.1 5.7-6.1 1.6 0 3 .6 4 1.7"/>' +
      '<path d="M12.6 16.6l3.9-4.4"/><circle cx="17.2" cy="11.3" r="1.5"/>' +
      '<path d="M15.4 3.2h4.6l-.6 6.6h-3.4z"/><path d="M15.5 5h4.4"/>',
    /* Schachbrett – Streetwear-Code (Versandbox, Laden, Messestand; seit
       22.10.2026 auf f09b, Zeile Bildwelt) */
    schachbrett:
      '<rect x="3.5" y="3.5" width="17" height="17" rx="1.5"/>' +
      '<path class="voll" d="M3.5 3.5h4.25v4.25H3.5zM12 3.5h4.25v4.25H12zM7.75 7.75H12V12H7.75zM16.25 7.75h4.25V12h-4.25zM3.5 12h4.25v4.25H3.5zM12 12h4.25v4.25H12zM7.75 16.25H12v4.25H7.75zM16.25 16.25h4.25v4.25h-4.25z"/>',
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
  /* Steht überhaupt ein Wert in den Daten? (fehlt / leer / kein Zahlwert →
     false; dann zeigt die Folie „–“ statt einer scheinbar echten 0) */
  function hatWert(eintrag) {
    var w = eintrag && typeof eintrag === 'object' ? eintrag.wert : eintrag;
    return w !== undefined && w !== null && w !== '' && !isNaN(Number(w));
  }
  function istBeispiel(eintrag) {
    return !!(eintrag && typeof eintrag === 'object' && eintrag.beispiel);
  }

  /* Zähler-Element: zählt beim Erscheinen hoch (Engine: data-animation="zaehlen").
     Beispielwerte bekommen die gestrichelte Umrandung (.ist-annahme).
     optionen.teiler (seit 22.10.2026): angezeigter Wert = Wert / Teiler
     (1000 bei "tausend": true – die Plattform zeigt nur „383 Tsd.“). */
  function zaehler(eltern, eintrag, optionen, u) {
    var w = wertVon(eintrag) / (optionen.teiler || 1);
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

  /* Kanal-Spalten (seit 22.10.2026 beliebig viele – Spaltenzahl als
     CSS-Variable --g5-spalten; vorher fest drei). Geprüft sind drei und
     vier Spalten; bei fünf laufen die Profilnamen in die Nachbarspalte
     (Prüfung 22.10.2026) – dann warnt die Konsole (pruefen.mjs meldet es). */
  function kanaeleBauen(ziel, kanaele, u) {
    ziel.innerHTML = '';
    ziel.style.setProperty('--g5-spalten', String(Math.max(1, kanaele.length)));
    ziel.classList.toggle('g5-kanaele--viele', kanaele.length > 3);
    if (kanaele.length > 4) {
      console.warn('f09: ' + kanaele.length + ' Kanäle in den Daten – geprüft sind höchstens vier Spalten ' +
        '(Profilnamen und Rollen werden zu eng). Bitte einen Kanal herausnehmen oder die Folie neu prüfen.');
    }
    var groesste = Math.max.apply(null, kanaele.map(function (k) { return wertVon(k.follower); }).concat([1]));

    kanaele.forEach(function (k) {
      var spalte = u.element('article', { class: 'g5-kanal' }, null, ziel);

      /* Kopf: neutrales Icon + Kanalname, rechts der Profilname.
         Kanalname seit 22.10.2026 als Beschriftung (data-meta) wie die
         Zeilennamen auf f09b – zählt nicht ins Wortbudget. */
      var kopf = u.element('div', { class: 'g5-kanal-kopf' }, null, spalte);
      var name = u.element('h3', { class: 'karte-kicker g5-kanal-name', 'data-meta': '' }, null, kopf);
      name.innerHTML = u.icon(k.icon || 'bild') + '<span>' + u.escape(k.name || '') + '</span>';
      if (k.profilname) u.element('span', { class: 'g5-kanal-profil', 'data-meta': '' }, k.profilname, kopf);

      /* Reichweite: große Zahl + Bezeichnung. "tausend": true → Anzeige in
         Tausend wie auf der Plattform („383 Tsd.“) – keine Scheingenauigkeit
         („383.000“). Seit der Nacharbeit 22.10.2026 steht „Tsd.“ IN der großen
         Zahl (vorher klein in der Bezeichnung: „383“ neben „126.651“ wirkte
         wie der kleinste Kanal). Der Balken nutzt den vollen Wert.
         Fehlt der Wert in den Daten: „–“ und kein Balken (keine Schein-Null). */
      var follower = k.follower || {};
      var tausend = !!follower.tausend;
      var vorhanden = hatWert(follower);
      var reichweite = u.element('div', { class: 'g5-reichweite' }, null, spalte);
      if (vorhanden) {
        zaehler(reichweite, follower, { klasse: 'kennzahl-wert kennzahl-wert--mittel g5-follower', teiler: tausend ? 1000 : 1 }, u);
        /* „Tsd.“ in Größe und Schrift der Zahl, aber als Einheit gekennzeichnet
           (data-meta wie „Follower“ – Einheiten zählen nicht ins Wortbudget) */
        if (tausend) u.element('span', { class: 'kennzahl-wert kennzahl-wert--mittel g5-follower g5-tausend', 'data-meta': '' }, 'Tsd.', reichweite);
      } else {
        u.element('span', { class: 'kennzahl-wert kennzahl-wert--mittel g5-follower g5-follower--fehlt', title: 'nicht erhoben' }, '–', reichweite);
      }
      u.element('span', { class: 'g5-einheit', 'data-meta': '' }, follower.bezeichnung || 'Follower', reichweite);

      /* Reichweitenbalken: Anteil am größten Kanal (wächst von links); ohne Wert nur die leere Spur */
      var spur = u.element('div', { class: 'g5-spur', 'aria-hidden': 'true' }, null, spalte);
      if (vorhanden) {
        var balken = u.element('div', { class: 'g5-balken', 'data-animation': 'zeichnen', 'data-verzoegerung': '200' }, null, spur);
        balken.style.width = Math.max(1.2, wertVon(follower) / groesste * 100).toFixed(2) + '%';
        if (istBeispiel(follower)) balken.classList.add('g5-balken--beispiel');
      }

      /* Zusatzkennzahl (seit 22.10.2026, z. B. „1.184 Beiträge“) – Text aus
         den Daten, nichts gerechnet */
      if (k.zusatz) u.element('p', { class: 'g5-zusatz', 'data-meta': '' }, k.zusatz, spalte);

      /* Zwei kleinere Kennzahlen – nur, wenn sie in den Daten stehen */
      var kennzahlen = [
        { eintrag: k.beitraegeProWoche, text: 'Beiträge pro Woche', dezimalen: 1, einheit: '' },
        { eintrag: k.engagementRate,    text: 'Ø Engagement-Rate',  dezimalen: 1, einheit: ' %' }
      ].filter(function (w) { return w.eintrag !== undefined && w.eintrag !== null; });
      if (kennzahlen.length) {
        var werte = u.element('div', { class: 'g5-werte' }, null, spalte);
        kennzahlen.forEach(function (w) {
          var box = u.element('div', { class: 'g5-wert' }, null, werte);
          zaehler(box, w.eintrag, { klasse: 'g5-wert-zahl', dezimalen: w.dezimalen, einheit: w.einheit, verzoegerung: '150' }, u);
          u.element('span', { class: 'g5-wert-text', 'data-meta': '' }, w.text, box);
        });
      }

      /* Rolle im Kanalmix (seit 22.10.2026, z. B. „Schaufenster & Verkauf“) */
      if (k.rolle) u.element('p', { class: 'g5-rolle' }, k.rolle, spalte);
    });
  }

  /* Bildwelt (Schritt 1) + EIN Schlüsselbild-Feld (Schritt 2).
     Zwei Formen, je nach Daten:
     A) Liste (seit 22.10.2026): keine Gruppe hat „anteil“.
          d.bildweltKopf      = Überschrift (Metaangabe)
          d.schwerpunktKopf   = Überschrift der rechten Spalte (Metaangabe,
                                z. B. „vor allem auf“)
          g.gruppe            = Name der Bildwelt
          g.beschreibung      = Kurzbeschreibung (Metaangabe, eine Zeile)
          g.schwerpunkt       = (optional) Kanal, auf dem die Bildwelt laut
                                Analyse vor allem vorkommt – NUR, wo die
                                Analyse das nennt. Textgröße (Inhalt, zählt
                                ins Wortbudget), mit dem Icon des Kanals aus
                                d.kanaele (seit der Nacharbeit 22.10.2026)
          g.gewichtung        = (optional) Gewichtung als Text in der
                                Metazeile (Akzentfarbe) – ältere Form
        Keine Balken, keine Zahlen: Die Kommunikationsanalyse hat keine
        Beiträge ausgezählt.
     B) Balken (Stand bis 22.10.2026): je Gruppe „anteil“ ({ "wert": 17 }) →
          waagerechter Balken + Zahl, d.stichprobe = Zahl der codierten Beiträge.
     Schlüsselbild-Feld: d.schluesselbild = { "status": "Kandidat", "motiv": …,
       "symbol": …, "hinweis": … } (Piktogramm, kein Screenshot) – oder alte
       Form: der Beitrag mit "schluesselbild": true unter g.beitraege
       (Platzhalter bzw. Screenshot unter "bild"); d.schluesselbildText = Chip. */
  function bildweltBauen(ziel, d, u) {
    ziel.innerHTML = '';
    var gruppen = d.bildwelt || [];
    var mitAnteil = gruppen.some(function (g) { return g.anteil !== undefined && g.anteil !== null; });
    var schluessel = mitAnteil ? motivBalken(ziel, d, gruppen, u) : weltenListe(ziel, d, gruppen, u);
    if (d.schluesselbild && (d.schluesselbild.motiv || d.schluesselbild.symbol)) schluessel = d.schluesselbild;
    if (schluessel) schluesselFeld(ziel, d, schluessel, u);
  }

  /* Form A: Liste der Bildwelten (Name · Beschreibung · ggf. Schwerpunkt-Kanal
     bzw. Gewichtung). Mit „schwerpunkt“ an mindestens einer Gruppe bekommt die
     Liste eine dritte Spalte (Klasse .mit-schwerpunkt) und der Kopf rechts
     die Spaltenüberschrift d.schwerpunktKopf. */
  function weltenListe(ziel, d, gruppen, u) {
    var block = u.element('div', { class: 'g5-motive g5-welten' }, null, ziel);
    var mitSchwerpunkt = gruppen.some(function (g) { return g.schwerpunkt; });
    var kopf = u.element('p', { class: 'g5-motive-kopf' + (mitSchwerpunkt ? ' g5-welten-kopf' : ''), 'data-meta': '' }, null, block);
    u.element('span', null, d.bildweltKopf || 'Bildwelten', kopf);
    if (mitSchwerpunkt) u.element('span', { class: 'g5-welten-kopf-kanal' }, d.schwerpunktKopf || 'vor allem auf', kopf);
    var liste = u.element('ol', { class: 'g5-welten-liste' + (mitSchwerpunkt ? ' mit-schwerpunkt' : ''), 'data-staffel': '110', 'data-animation': 'hoch' }, null, block);
    /* Icon je Kanal aus den Kanal-Spalten oben (gleiche Zeichen wie dort) */
    var icons = {};
    (d.kanaele || []).forEach(function (k) { if (k.name) icons[String(k.name).toLowerCase()] = k.icon || 'bild'; });
    var schluessel = null;
    gruppen.forEach(function (g) {
      var hat = (g.beitraege || []).filter(function (b) { return b.schluesselbild; })[0];
      if (hat && !schluessel) schluessel = hat;
      var zeile = u.element('li', { class: 'g5-welt' + (hat ? ' hat-schluesselbild' : '') + (g.gewichtung ? ' hat-gewichtung' : '') }, null, liste);
      u.element('span', { class: 'g5-welt-name' }, g.gruppe || '', zeile);
      var text = u.element('span', { class: 'g5-welt-text', 'data-meta': '' }, null, zeile);
      if (g.beschreibung) u.element('span', { class: 'g5-welt-beschreibung' }, g.beschreibung, text);
      if (g.gewichtung) u.element('span', { class: 'g5-welt-gewicht' }, g.gewichtung, text);
      if (mitSchwerpunkt) {
        var kanal = u.element('span', { class: 'g5-welt-kanal' }, null, zeile);
        if (g.schwerpunkt) {
          var icon = icons[String(g.schwerpunkt).toLowerCase()];
          kanal.innerHTML = (icon ? u.icon(icon) : '') + '<span class="nur-screenreader">' + u.escape(d.schwerpunktKopf || 'vor allem auf') + ' </span>' + u.escape(g.schwerpunkt);
        }
      }
    });
    return schluessel;
  }

  /* Form B: waagerechte Balken je Motivgruppe (Stand bis 22.10.2026).
     d.stichprobe = Zahl der codierten Beiträge ({ "wert": 50, "beispiel": true });
     g.anteil = wie viele davon diese Gruppe als Hauptmotiv haben → Balken + Zahl.
     Die Balkenlänge ist proportional zum Anteil (längster Balken = größte Gruppe). */
  function motivBalken(ziel, d, gruppen, u) {
    var stichprobe = d.stichprobe || null;
    var groesste = Math.max.apply(null, gruppen.map(function (g) { return wertVon(g.anteil); }).concat([1]));
    var schluessel = null;

    var diagramm = u.element('div', { class: 'g5-motive' }, null, ziel);
    var kopf = u.element('p', { class: 'g5-motive-kopf', 'data-meta': '' }, null, diagramm);
    var n = stichprobe ? u.zahlFormat(wertVon(stichprobe), 0) : '';
    if (n) {
      /* Die Zahl der codierten Beiträge ist (noch) ein Beispielwert → gestrichelt wie die übrigen */
      kopf.appendChild(document.createTextNode('Hauptmotiv in '));
      u.element('span', {
        class: 'g5-motive-n' + (istBeispiel(stichprobe) ? ' ist-annahme g5-beispielwert' : ''),
        title: istBeispiel(stichprobe) ? 'Beispielwert – noch selbst zu erheben' : null
      }, n, kopf);
      kopf.appendChild(document.createTextNode(' codierten Beiträgen'));
    } else {
      kopf.textContent = 'Hauptmotive der Beiträge';
    }
    var liste = u.element('ol', { class: 'g5-motiv-liste', 'data-staffel': '110', 'data-animation': 'hoch' }, null, diagramm);

    gruppen.forEach(function (g) {
      var hatSchluessel = (g.beitraege || []).filter(function (b) { return b.schluesselbild; })[0];
      if (hatSchluessel && !schluessel) schluessel = hatSchluessel;
      var zeile = u.element('li', { class: 'g5-motiv' + (hatSchluessel ? ' hat-schluesselbild' : '') }, null, liste);
      u.element('span', { class: 'g5-motiv-name' }, g.gruppe || '', zeile);
      var spur = u.element('span', { class: 'g5-motiv-spur', 'aria-hidden': 'true' }, null, zeile);
      var balken = u.element('span', { class: 'g5-motiv-balken', 'data-animation': 'zeichnen', 'data-verzoegerung': '150' }, null, spur);
      balken.style.width = Math.max(2, wertVon(g.anteil) / groesste * 100).toFixed(2) + '%';
      /* Beispielwert, wenn der Anteil ODER die Stichprobe noch Beispiel ist */
      var beispiel = istBeispiel(g.anteil) || istBeispiel(stichprobe);
      if (beispiel) balken.classList.add('g5-motiv-balken--beispiel');
      zaehler(zeile, g.anteil, { klasse: 'g5-motiv-zahl', verzoegerung: '150' }, u);
      if (beispiel && !istBeispiel(g.anteil)) zeile.lastChild.classList.add('ist-annahme', 'g5-beispielwert');
      /* Beispiele der Gruppe für Screenreader (auf der Folie nennt sie der Sprechtext) */
      var beispiele = (g.beitraege || []).map(function (b) { return b.motiv; }).filter(Boolean).join(', ');
      if (beispiele) u.element('span', { class: 'nur-screenreader' }, ' (' + beispiele + ')', zeile);
    });
    return schluessel;
  }

  /* Rechts: genau ein Schlüsselbild-Feld (erscheint in Schritt 2).
     Neue Form (d.schluesselbild, seit 22.10.2026): Piktogramm + Hinweis, Chip
     = „status“ (z. B. „Kandidat“) – bewusst kein Screenshot (Bilder von HOLY
     nur nach Zustimmung des Betreuers). Alte Form: Beitrag mit „bild“
     (Screenshot) oder Platzhalter „Screenshot folgt“. */
  function schluesselFeld(ziel, d, schluessel, u) {
    var neu = schluessel === d.schluesselbild;
    var chipText = (neu && schluessel.status) || d.schluesselbildText || 'Schlüsselbild?';
    var fig = u.element('figure', { class: 'g5-schluessel' + (neu ? ' g5-schluessel--kandidat' : ''), 'data-schritt': '2', 'data-animation': 'hoch' }, null, ziel);
    /* Kandidat (neue Form): eigene Fläche .g5-schluessel-feld – NICHT die
       Platzhalter-Klasse (gestrichelt + Schraffur heißt im Deck „Platzhalter/
       Beispielwert“, Prüfung 22.10.2026). Alte Form: Platzhalter bzw. Screenshot. */
    var flaeche = u.element('div', { class: (neu ? 'g5-schluessel-feld' : 'bild-platzhalter') + ' g5-schluessel-bild' }, null, fig);
    if (!neu && schluessel.bild) {
      /* echter Screenshot (Pfad relativ zu praesentation/): durchgezogener Rahmen = belegt.
         Mit "beispiel": true (nachgestelltes oder KI-erzeugtes Motiv) bleibt er gestrichelt. */
      u.element('img', { src: u.pfad(schluessel.bild), alt: 'Beitrag: ' + (schluessel.motiv || '') }, null, flaeche);
      flaeche.classList.add(schluessel.beispiel ? 'g5-schluessel-bild--beispiel' : 'g5-schluessel-bild--beleg');
    } else {
      flaeche.setAttribute('role', 'img');
      flaeche.setAttribute('aria-label', (neu ? 'Piktogramm: ' : 'Platzhalter für den Screenshot: ') + (schluessel.motiv || ''));
      flaeche.insertAdjacentHTML('beforeend', symbolSvg(schluessel.symbol, 'g5-symbol'));
      var hinweis = neu ? (schluessel.hinweis || '') : 'Platzhalter – Screenshot folgt';
      if (hinweis) u.element('span', { class: 'g5-schluessel-hinweis', 'data-meta': '' }, hinweis, flaeche);
    }
    /* Chip = Status-Kennzeichen des Felds (wie das Urteilswort auf f09b): data-meta,
       zählt deshalb nicht ins Wortbudget (seit der Nacharbeit 22.10.2026) */
    u.element('span', { class: 'chip chip--akzent g5-schluessel-chip', 'data-meta': '' }, chipText, flaeche);
    u.element('figcaption', { class: 'g5-schluessel-text' }, schluessel.motiv || '', fig);
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
     Vorrang haben die Farben aus den Daten (das Ergebnis der Analyse):
     • Stehen dort mehr als MAX_FARBEN Farben, fallen die letzten weg
       (Warnung in der Konsole – pruefen.mjs meldet sie). Abhilfe: in den
       Daten eine Farbe herausnehmen.
     • Markenfarben aus marke.js, die in den Daten noch fehlen, kommen nach
       vorn in die erste Gruppe – aber nur, solange Platz ist (keine Warnung:
       Wer in marke.js andere Farben testet, soll keine Fehlermeldung sehen). */
  function paletteSammeln(gruppen, marke) {
    var ergebnis = (gruppen || []).map(function (g) {
      return {
        gruppe: g.gruppe || '',
        schluessel: g.schluessel || '',
        liste: (g.liste || []).filter(function (f) { return hexNormal(f.hex); })
      };
    });

    /* 1. Farben aus den Daten: Dubletten entfernen, auf MAX_FARBEN begrenzen */
    var vorhanden = {};
    var platz = MAX_FARBEN;
    var weg = [];
    ergebnis.forEach(function (g) {
      g.liste = g.liste.filter(function (f) {
        var hex = hexNormal(f.hex);
        if (vorhanden[hex]) return false;            // doppelt eingetragen
        vorhanden[hex] = true;
        if (platz <= 0) { weg.push(hex); return false; }
        platz -= 1;
        return true;
      });
    });
    if (weg.length) {
      console.warn('f09b: mehr als ' + MAX_FARBEN + ' Farben in den Daten – ' + weg.join(', ') +
        ' ausgeblendet. Bitte in index.html, Folien 09/09b (Daten von f09b → farben) eine Farbe herausnehmen.');
    }

    /* 2. Markenfarben aus marke.js ergänzen, falls neu und noch Platz ist */
    var ausMarke = [];
    var farben = (marke && marke.farben) || {};
    [['primaer', 'Primärfarbe'], ['sekundaer', 'Sekundärfarbe']].forEach(function (p) {
      var hex = hexNormal(farben[p[0]]);
      if (hex && !vorhanden[hex] && platz > 0) {
        ausMarke.push({ name: p[1] + ' (marke.js)', hex: hex });
        vorhanden[hex] = true;
        platz -= 1;
      }
    });
    if (ausMarke.length) {
      if (ergebnis.length) ergebnis[0].liste = ausMarke.concat(ergebnis[0].liste);
      else ergebnis.push({ gruppe: 'Markenfarben', schluessel: '', liste: ausMarke });
    }
    return ergebnis.filter(function (g) { return g.liste.length; });
  }

  function datenblattBauen(ziel, d, belege, ctx) {
    var u = ctx.util;
    ziel.innerHTML = '';

    /* 1. Logo: Bild aus marke.js → logo. Solange dort nur der Platzhalter steht
          (Dateiname enthält „platzhalter“ oder leer), zeigt die Zeile KEIN Bild,
          sondern nur die Beschreibung der Wortmarke in Textgröße – ein leerer
          Platzhalter-Kasten würde die Analyse schwächen. Seit 16.10.2026 steht
          dort die offizielle Wortmarke (bilder/holy-logo-wortmarke.png, Quelle
          in der Fußzeile von 09b und in QUELLEN.md). */
    var logo = datenblattZeile(ziel, 'logo', 'Logo', belege, u);
    var logoPfad = (Deck.marke && Deck.marke.logo) || '';
    var ohneBild = !logoPfad || /platzhalter/i.test(logoPfad);
    var fig = u.element('figure', { class: 'g5b-logo' + (ohneBild ? ' g5b-logo--ohne-bild' : '') }, null, logo.inhalt);
    if (!ohneBild) {
      u.element('img', { class: 'g5b-logo-bild', 'data-marke-logo': '', alt: 'Logo der Marke' }, null, fig);
    }
    /* Beschreibung, seit 22.10.2026 optional mit zweiter Zeile „zusatz“
       (z. B. „Profilbild „Holy Squad“ in drei Farben“ – Beleg für die
       Fit-Zeile „über die Kanäle“) */
    if (d.logo && (d.logo.beschreibung || d.logo.zusatz)) {
      var cap = u.element('figcaption', ohneBild ? { class: 'g5b-logo-text' } : { class: 'g5b-logo-text', 'data-meta': '' }, null, fig);
      if (d.logo.beschreibung) u.element('span', { class: 'g5b-logo-zeile' }, d.logo.beschreibung, cap);
      if (d.logo.zusatz) u.element('span', { class: 'g5b-logo-zeile g5b-logo-zusatz' }, d.logo.zusatz, cap);
    }

    /* 2. Claims & Schrift: Dachclaim im Stil der Überschriften-Schrift,
          Versprechen im Stil der Fließtext-Schrift (Ersatzschriften, *) */
    var c = d.claims || {};
    var schriften = c.schriften || {};
    var claims = datenblattZeile(ziel, 'claims', 'Claims & Schrift', belege, u);
    if (c.weitere) {
      /* Badge „weitere Claims“: Zahl → „+4 weitere“ (bis 22.10.2026: „mindestens
         sechs Claims“, Dossier); Text → genau dieser Text (seit 22.10.2026
         „+ viele weitere“ – Elias zählt die Sprüche nicht, keine erfundene Zahl) */
      u.element('span', { class: 'chip chip--rahmen g5b-weitere', 'data-meta': '', title: c.weitereTitel || 'weitere Claims laufen parallel (siehe Notizen)' },
        typeof c.weitere === 'number' ? '+' + c.weitere + ' weitere' : String(c.weitere), claims.kopf);
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
