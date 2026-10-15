/* =============================================================================
   js/folien/01-einstieg.js – Folien-Skript für folien/01-einstieg.html (f01)
   -----------------------------------------------------------------------------
   Das Aussehen der drei Zustände regelt css/folien/01-einstieg.css allein.
   Dieses Skript erledigt nur drei Komfort-Aufgaben:

   1. Schritte an das Rätsel koppeln: Die Auflösung (Markenname) erscheint mit
      der letzten Rätselstufe, der Titel einen Klick später. Wer in
      data-stufen eine Hinweisstufe ergänzt (z. B. "300/40,170/14,100/0"),
      muss also keine data-schritt-Werte von Hand ändern.
   2. Markenname einpassen: Ist ein Name zu lang für die linke Spalte, wird
      die Schrift so weit verkleinert, dass er auf eine Zeile passt
      (z. B. bei einer anderen Marke oder dem Platzhalter „[Marke]“).
   3. Bildtafel ausrichten: Im Schlussbild steht der Bildausschnitt aus
      data-fokus (waagerecht) mitten in der rechten Bildtafel.
   4. Platzhalter kennzeichnen: Solange in marke.js → raetselBild (bzw. in
      data-bild) noch das Platzhalter-Motiv steht, zeigt die Folie oben rechts
      die Pille „Platzhalterbild“ – so geht der Platzhalter nicht aus
      Versehen in den Vortrag. Mit eigenem Foto verschwindet sie von selbst.
   ============================================================================= */
(function () {
  'use strict';

  var MIN_GROESSE = 96;          // kleinste Schriftgröße des Markennamens (px)
  var BUEHNE_B = 1920;           // Bühnenbreite (px)
  var MOTIV_UEBERSTAND = 0.03;   // .raetsel-motiv ragt 3 % über jeden Rand (komponenten.css: inset: -3%)

  /* Anzahl der Rätselstufen aus data-stufen ("Zoom/Unschärfe, …") */
  function stufenAnzahl(raetsel) {
    var roh = raetsel.getAttribute('data-stufen') || '300/40,210/22,145/9,100/0';
    return roh.split(',').filter(function (teil) { return teil.trim(); }).length;
  }

  /* 1. Schritte der Auflösung und des Titels an die Rätselstufen anpassen */
  function schritteKoppeln(folie) {
    var raetsel = folie.querySelector('.raetsel');
    if (!raetsel) return;
    var stufen = Math.max(2, stufenAnzahl(raetsel));
    var start = parseInt(raetsel.getAttribute('data-schritt-start') || '1', 10) || 1;
    /* Der Rätsel-Baustein zeigt in Schritt n die Stufe n − start + 1 (gezählt ab 0).
       Die letzte Stufe (aufgelöst) ist also in Schritt start + stufen − 2 erreicht. */
    var aufloesung = start + stufen - 2;
    Deck.util.alle('[data-einstieg-schritt]', folie).forEach(function (el) {
      var art = el.getAttribute('data-einstieg-schritt');
      el.setAttribute('data-schritt', String(art === 'titel' ? aufloesung + 1 : aufloesung));
    });
    /* „Hinweis x von n“ lohnt sich erst ab drei Stufen (sonst nur ein Klick) */
    if (stufen <= 2) {
      var fortschritt = raetsel.querySelector('.raetsel-fortschritt');
      if (fortschritt) fortschritt.remove();
    }
  }

  /* 2. Markenname in die Spalte einpassen (gemessen auch bei verborgener Folie) */
  function markeEinpassen(folie) {
    var name = folie.querySelector('.einstieg-markenname');
    if (!name) return;
    name.style.removeProperty('font-size');
    Deck.util.messen(name, function () {
      var spalte = name.parentElement ? name.parentElement.clientWidth : 0;
      var breite = name.offsetWidth;
      if (!spalte || !breite || breite <= spalte) return;
      var groesse = parseFloat(getComputedStyle(name).fontSize) || 0;
      name.style.fontSize = Math.max(MIN_GROESSE, Math.floor(groesse * spalte / breite)) + 'px';
    });
  }

  /* 3. Versatz des Bildes im Schlussbild: Fokuspunkt (data-fokus, waagerecht)
        in die Mitte der Bildtafel rücken – ohne dass links oder rechts eine
        Lücke entsteht. Ergebnis als CSS-Variable --einstieg-tafel-versatz. */
  function tafelAusrichten(folie) {
    var raetsel = folie.querySelector('.raetsel');
    if (!raetsel) return;
    var fokus = (raetsel.getAttribute('data-fokus') || '50% 50%').trim().split(/\s+/)[0];
    var fx = parseFloat(fokus);
    fx = isNaN(fx) ? 0.5 : Math.max(0, Math.min(100, fx)) / 100;
    var teilung = Deck.util.messen(folie, function () {
      return parseFloat(getComputedStyle(folie).getPropertyValue('--einstieg-teilung')) || 1088;
    });
    var motivB = BUEHNE_B * (1 + 2 * MOTIV_UEBERSTAND);
    var motivLinks = -BUEHNE_B * MOTIV_UEBERSTAND;
    var fokusX = motivLinks + fx * motivB;                     // Fokus auf der Bühne (ohne Versatz)
    var tafelMitte = teilung + (BUEHNE_B - teilung) / 2;
    var versatz = tafelMitte - fokusX;
    /* Grenzen: Bild deckt die Tafel immer ganz ab */
    var minV = BUEHNE_B - (motivLinks + motivB);               // rechter Bildrand ≥ Bühnenrand
    var maxV = teilung - motivLinks;                           // linker Bildrand ≤ Tafelkante
    versatz = Math.max(minV, Math.min(maxV, versatz));
    folie.style.setProperty('--einstieg-tafel-versatz', Math.round(versatz) + 'px');
  }

  /* 4. Pille „Platzhalterbild“, solange das Platzhalter-Motiv eingetragen ist
        (Dateiname enthält „platzhalter“, z. B. bilder/platzhalter-raetsel.svg) */
  function platzhalterKennzeichnen(folie) {
    var raetsel = folie.querySelector('.raetsel');
    var pfad = (raetsel && raetsel.getAttribute('data-bild')) || (Deck.marke && Deck.marke.raetselBild) || '';
    var pille = folie.querySelector('.einstieg-platzhalter');
    if (!/platzhalter/i.test(pfad)) { if (pille) pille.remove(); return; }
    if (pille) return;
    Deck.util.element('span', {
      class: 'beispiel einstieg-platzhalter',
      title: 'Eigenes Foto in marke.js → raetselBild eintragen'
    }, 'Platzhalterbild', folie);
  }

  Deck.registriere('f01', {
    einrichten: function (ctx) {
      platzhalterKennzeichnen(ctx.folie);
      schritteKoppeln(ctx.folie);
      markeEinpassen(ctx.folie);
      tafelAusrichten(ctx.folie);
      /* Nach einem Themenwechsel (andere Schrift, andere Ränder) neu einpassen */
      document.addEventListener('deck:thema', function () { markeEinpassen(ctx.folie); });
      document.addEventListener('deck:groesse', function () { markeEinpassen(ctx.folie); });
    }
  });
})();
