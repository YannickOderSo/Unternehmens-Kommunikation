/* =============================================================================
   js/folien/12-fragen.js – Folie f12 · Danke & Fragen
   -----------------------------------------------------------------------------
   Baut die Sprunglisten „Methoden“ und „Backup“ aus dem JSON der Folie
   (<script class="daten"> in folien/12-fragen.html) und koppelt sie mit dem
   Steuerrad (Baustein der Engine, Modus „menue“):
     • Klick oder Tab + Enter auf einen Eintrag springt zur Folie.
     • Zeigen/Fokus auf eine Methode lässt ihr Feld im Rad leuchten,
       Zeigen auf ein Feld im Rad hebt die passenden Methoden hervor.
     • Die Foliennummern liest das Skript aus dem Deck. Fehlt eine Folie in
       dieser Ausgabe, steht „–“ und der Eintrag ist ohne Funktion.
   Texte und Ziele ändern: im JSON der Folie, nicht hier.
   ============================================================================= */
(function () {
  'use strict';

  function folieSuchen(id) {
    var treffer = null;
    Deck.folien().forEach(function (f) { if (f.id === id) treffer = f; });
    return treffer;
  }

  /* Einen Sprung-Knopf bauen: <li><button>Nummer Name</button></li> */
  function knopfBauen(u, liste, eintrag) {
    var li = u.element('li', {}, null, liste);
    var knopf = u.element('button', { type: 'button', class: 'g6d-sprung', 'data-ziel': eintrag.ziel || '' }, null, li);
    if (eintrag.feld) knopf.setAttribute('data-feld-paar', eintrag.feld);
    u.element('span', { class: 'g6d-sprung-nr' }, '–', knopf);
    u.element('span', { class: 'g6d-sprung-name' }, u.markeText(eintrag.name || eintrag.ziel || ''), knopf);
    knopf.addEventListener('click', function (e) {
      e.stopPropagation();
      if (knopf.getAttribute('aria-disabled') === 'true') return;
      var ziel = folieSuchen(knopf.getAttribute('data-ziel'));
      if (!ziel) return;
      knopf.blur();          // Fokus nicht auf der verlassenen Folie stehen lassen
      Deck.gehe(ziel.id, 0);
    });
    return knopf;
  }

  /* Nummern und Erreichbarkeit aus dem Deck übernehmen */
  function zieleAktualisieren(zustand) {
    zustand.knoepfe.forEach(function (knopf) {
      var ziel = folieSuchen(knopf.getAttribute('data-ziel'));
      var nr = knopf.querySelector('.g6d-sprung-nr');
      var name = knopf.querySelector('.g6d-sprung-name').textContent;
      if (ziel) {
        nr.textContent = ziel.nummer;
        knopf.removeAttribute('aria-disabled');
        knopf.setAttribute('aria-label', name + ' – zu Folie ' + ziel.nummer + ' (' + ziel.titel + ')');
        knopf.removeAttribute('title');
      } else {
        nr.textContent = '–';
        knopf.setAttribute('aria-disabled', 'true');
        knopf.setAttribute('aria-label', name + ' – Folie nicht in dieser Ausgabe');
        knopf.setAttribute('title', 'Folie ' + knopf.getAttribute('data-ziel') + ' ist in dieser Ausgabe nicht enthalten');
      }
    });
  }

  /* Methode zeigen → Feld im Rad leuchtet (gleiche Klassen wie der Baustein:
     .hat-fokus am Rad, .ist-fokus am Feld; Rest tritt auf 45 % zurück) */
  function radFokus(zustand, feld) {
    var rad = zustand.rad;
    if (!rad) return;
    rad.classList.toggle('hat-fokus', !!feld);
    Array.prototype.forEach.call(rad.querySelectorAll('[data-paar]'), function (k) {
      k.classList.toggle('ist-fokus', !!feld && k.getAttribute('data-paar') === feld);
    });
  }
  /* Feld zeigen → passende Methoden in der Liste hervorheben */
  function listenFokus(zustand, feld) {
    zustand.knoepfe.forEach(function (knopf) {
      knopf.classList.toggle('ist-gekoppelt', !!feld && knopf.getAttribute('data-feld-paar') === feld);
    });
  }

  Deck.registriere('f12', {
    einrichten: function (ctx) {
      var u = ctx.util;
      var daten = ctx.daten || {};
      var zustand = { knoepfe: [], rad: ctx.folie.querySelector('.steuerrad') };
      ctx.folie._g6d = zustand;

      var methodenListe = ctx.folie.querySelector('[data-g6d="methoden"]');
      var backupListe = ctx.folie.querySelector('[data-g6d="backup"]');
      (daten.methoden || []).forEach(function (m) { if (methodenListe) zustand.knoepfe.push(knopfBauen(u, methodenListe, m)); });
      (daten.backup || []).forEach(function (b) { if (backupListe) zustand.knoepfe.push(knopfBauen(u, backupListe, b)); });
      zieleAktualisieren(zustand);

      /* Kopplung Liste → Rad */
      zustand.knoepfe.forEach(function (knopf) {
        var feld = knopf.getAttribute('data-feld-paar');
        if (!feld) return;
        ['pointerenter', 'focus'].forEach(function (art) {
          knopf.addEventListener(art, function () { radFokus(zustand, feld); listenFokus(zustand, feld); });
        });
        ['pointerleave', 'blur'].forEach(function (art) {
          knopf.addEventListener(art, function () { radFokus(zustand, null); listenFokus(zustand, null); });
        });
      });

      /* Kopplung Rad → Liste */
      if (zustand.rad) {
        zustand.rad.addEventListener('pointerover', function (e) {
          var k = e.target.closest('[data-paar]');
          listenFokus(zustand, k && zustand.rad.contains(k) ? k.getAttribute('data-paar') : null);
        });
        zustand.rad.addEventListener('pointerleave', function () { listenFokus(zustand, null); });
        zustand.rad.addEventListener('focusin', function (e) {
          var k = e.target.closest('[data-paar]');
          listenFokus(zustand, k ? k.getAttribute('data-paar') : null);
        });
        zustand.rad.addEventListener('focusout', function () { listenFokus(zustand, null); });
      }

      if (Deck.bereit && Deck.bereit.then) Deck.bereit.then(function () { zieleAktualisieren(zustand); });
    },

    betreten: function (ctx) {
      var zustand = ctx.folie._g6d;
      if (!zustand) return;
      zieleAktualisieren(zustand);
      radFokus(zustand, null);
      listenFokus(zustand, null);
    },

    verlassen: function (ctx) {
      var zustand = ctx.folie._g6d;
      if (!zustand) return;
      radFokus(zustand, null);
      listenFokus(zustand, null);
    }
  });
})();
