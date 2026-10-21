/* =============================================================================
   js/folien/11-fazit.js – Folie f11 · Fazit & Empfehlungen
   -----------------------------------------------------------------------------
   Die Folie ist reines HTML (Texte dort ändern). Dieses Skript
     • setzt den Satz der Positionierung aus Folie 10 ein (Daten-JSON
       „positionierung“ von f10, bis 21.10.2026 „kern“ – wird noch gelesen;
       eine Quelle für beide Folien; fehlt Folie 10, bleibt der Text im HTML),
     • und macht die Verweis-Pillen („Positionierung · Folie 10“,
       „Lücke 1 · Folie 10“)
       lebendig:
     • die Foliennummer wird aus dem Deck gelesen (stimmt also auch, wenn sich
       die Reihenfolge ändert),
     • Klick oder Tab + Enter springt zur Herleitung – auf den Schritt, der in
       data-ziel-schritt steht (Zahl, „ende“ oder CSS-Selektor eines Elements
       auf der Zielfolie, z. B. „.g6s-luecke“ = Konsistenzprüfung auf Folie 10).
     • Fehlt die Zielfolie (z. B. in einer Testausgabe nur mit dieser Folie),
       bleibt der Text stehen, der Knopf ist dann ohne Funktion.
   Bewegung und Hervorhebung macht das CSS (Klasse .schritt-aktuell der Engine).
   ============================================================================= */
(function () {
  'use strict';

  /* Ziel einer Verweis-Pille im Deck suchen → { id, nummer, element } oder null */
  function zielSuchen(id) {
    var treffer = null;
    Deck.folien().forEach(function (f) { if (f.id === id) treffer = f; });
    return treffer;
  }

  /* Schritt auf der Zielfolie bestimmen */
  function zielSchritt(ziel, angabe) {
    if (!angabe || angabe === 'ende') return 'ende';
    if (/^\d+$/.test(angabe)) return parseInt(angabe, 10);
    var el = null;
    try { el = ziel.element.querySelector(angabe); } catch (e) { el = null; }
    var n = el ? parseInt(el.getAttribute('data-schritt'), 10) : NaN;
    return isNaN(n) ? 'ende' : n;
  }

  /* Positionierung aus den Daten von Folie 10 lesen (<script class="daten"> →
     „positionierung“, alter Name „kern“). Platzhalter data-g6f="kern" ist ein
     technischer Name aus der Zeit, als der Satz „Markenkern“ hieß. */
  function kernEinsetzen(ctx) {
    var platz = ctx.folie.querySelector('[data-g6f="kern"]');
    var f10 = zielSuchen('f10');
    if (!platz || !f10 || !f10.element) return;
    var skript = f10.element.querySelector(':scope > script.daten');
    var daten = null;
    try { daten = skript ? JSON.parse(skript.textContent) : null; } catch (e) { daten = null; }
    var satz = daten && (daten.positionierung || daten.kern);
    if (satz) platz.textContent = ctx.util.markeText(satz);
  }

  function verweiseEinrichten(ctx) {
    ctx.util.alle('.g6f-verweis', ctx.folie).forEach(function (knopf) {
      var id = knopf.getAttribute('data-ziel');
      var ziel = id ? zielSuchen(id) : null;
      var folieText = knopf.querySelector('.g6f-verweis-folie');
      var art = knopf.querySelector('.g6f-verweis-art');
      if (!ziel) {
        knopf.setAttribute('aria-disabled', 'true');
        knopf.setAttribute('title', 'Zielfolie ' + id + ' ist in dieser Ausgabe nicht enthalten');
        return;
      }
      if (folieText) folieText.textContent = 'Folie ' + ziel.nummer;
      knopf.removeAttribute('aria-disabled');
      knopf.setAttribute('aria-label', (art ? art.textContent + ' – ' : '') + 'zur Herleitung auf Folie ' + ziel.nummer + ' (' + ziel.titel + ')');
      knopf.setAttribute('title', 'Zur Herleitung: Folie ' + ziel.nummer);
      if (knopf._g6fEingerichtet) return;
      knopf._g6fEingerichtet = true;
      knopf.addEventListener('click', function (e) {
        e.stopPropagation();
        var aktuellesZiel = zielSuchen(knopf.getAttribute('data-ziel'));
        if (!aktuellesZiel) return;
        var schritt = zielSchritt(aktuellesZiel, knopf.getAttribute('data-ziel-schritt'));
        knopf.blur();          // Fokus nicht auf der verlassenen Folie stehen lassen
        /* Deck.springe: wirkt auch im Referentenfenster auf den Beamer (wie A7) */
        if (Deck.springe) Deck.springe(aktuellesZiel.id, schritt); else Deck.gehe(aktuellesZiel.id, schritt);
      });
    });
  }

  Deck.registriere('f11', {
    einrichten: function (ctx) {
      kernEinsetzen(ctx);
      verweiseEinrichten(ctx);
      /* Optionale Folien können sich später ein-/ausblenden → beim Start nachziehen */
      if (Deck.bereit && Deck.bereit.then) Deck.bereit.then(function () { verweiseEinrichten(ctx); });
    },
    betreten: function (ctx) {
      verweiseEinrichten(ctx);
    }
  });
})();
