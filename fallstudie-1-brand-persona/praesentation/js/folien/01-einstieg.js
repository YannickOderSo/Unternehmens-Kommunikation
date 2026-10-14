/* =============================================================================
   js/folien/01-einstieg.js – Folien-Skript für folien/01-einstieg.html (f01)
   -----------------------------------------------------------------------------
   Das Aussehen der drei Zustände regelt css/folien/01-einstieg.css allein.
   Dieses Skript erledigt nur zwei Komfort-Aufgaben:

   1. Schritte an das Rätsel koppeln: Die Auflösung (Markenname) erscheint mit
      der letzten Rätselstufe, der Titel einen Klick später. Wer in
      data-stufen eine Hinweisstufe ergänzt (z. B. "300/40,170/14,100/0"),
      muss also keine data-schritt-Werte von Hand ändern.
   2. Markenname einpassen: Ist ein Name zu lang für die linke Spalte, wird
      die Schrift so weit verkleinert, dass er auf eine Zeile passt
      (z. B. bei einer anderen Marke oder dem Platzhalter „[Marke]“).
   ============================================================================= */
(function () {
  'use strict';

  var MIN_GROESSE = 96;          // kleinste Schriftgröße des Markennamens (px)

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

  Deck.registriere('f01', {
    einrichten: function (ctx) {
      schritteKoppeln(ctx.folie);
      markeEinpassen(ctx.folie);
      /* Nach einem Themenwechsel (andere Schrift) neu einpassen */
      document.addEventListener('deck:thema', function () { markeEinpassen(ctx.folie); });
      document.addEventListener('deck:groesse', function () { markeEinpassen(ctx.folie); });
    }
  });
})();
