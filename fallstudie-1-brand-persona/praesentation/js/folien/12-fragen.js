/* =============================================================================
   js/folien/12-fragen.js – Folie f12 · Danke & Fragen
   -----------------------------------------------------------------------------
   Baut die Sprunglisten „Methoden“, „Ergebnisse“ und „Backup“ aus dem JSON
   der Folie (<script class="daten"> in index.html, Folie 12), setzt den
   Satz der Positionierung von Folie 10 (Daten „positionierung“, bis
   21.10.2026 „kern“) in die Fazit-Zeile oben rechts (eine Quelle für
   Folie 10, 11 und 12; fehlt Folie 10, bleibt der Text im HTML) und koppelt
   die Listen mit dem Steuerrad (Baustein der Engine, Modus „menue“):
     • Klick oder Tab + Enter auf einen Eintrag springt zur Folie – seit
       21.10.2026 über Deck.springe, also auch aus dem Referentenfenster
       (vorher bewegte sich dort nur die Vorschau, nicht der Beamer).
     • Zeigen/Fokus auf eine Methode lässt ihr Feld im Rad leuchten,
       Zeigen auf ein Feld im Rad hebt die passenden Methoden hervor.
     • Die Foliennummern liest das Skript aus dem Deck. Fehlt eine Folie in
       dieser Ausgabe, steht „–“ und der Eintrag ist ohne Funktion.
   Außerdem prüft es das Logo (marke.js → logoTitel, seit 17.10.2026; seit
   18.10.2026 im Kopf neben dem Fazit): ohne Logo keine Logo-Quelle in der Fußzeile.
   Texte und Ziele ändern: im JSON der Folie, nicht hier.
   ============================================================================= */
(function () {
  'use strict';

  function folieSuchen(id) {
    var treffer = null;
    Deck.folien().forEach(function (f) { if (f.id === id) treffer = f; });
    return treffer;
  }

  /* Positionierung aus den Daten von Folie 10 lesen (<script class="daten"> →
     „positionierung“, alter Name „kern“; data-g6d="kern" ist ein technischer Name) */
  function kernEinsetzen(ctx) {
    var platz = ctx.folie.querySelector('[data-g6d="kern"]');
    var f10 = folieSuchen('f10');
    if (!platz || !f10 || !f10.element) return;
    var skript = f10.element.querySelector(':scope > script.daten');
    var daten = null;
    try { daten = skript ? JSON.parse(skript.textContent) : null; } catch (e) { daten = null; }
    var satz = daten && (daten.positionierung || daten.kern);
    if (satz) platz.textContent = ctx.util.markeText(satz);
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
      /* Deck.springe: wirkt auch im Referentenfenster auf den Beamer (A7, 21.10.2026) */
      if (Deck.springe) Deck.springe(ziel.id, 0); else Deck.gehe(ziel.id, 0);
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

  /* Logo im Kopf neben dem Fazit (marke.js → logoTitel, Bildpfad setzt die Engine
     über data-marke-logo="titel"). Ohne Logo – kein Eintrag oder Datei fehlt –
     verschwinden Bild und Logo-Quelle in der Fußzeile; das Fazit bleibt. */
  function logoPruefen(ctx) {
    var bild = ctx.folie.querySelector('.g6d-logo');
    var quelle = ctx.folie.querySelector('.g6d-quelle-logo');
    var pfad = (Deck.marke && Deck.marke.logoTitel) || '';
    var ohneLogo = function () {
      if (bild) bild.hidden = true;
      if (quelle) quelle.hidden = true;
    };
    if (!bild || !pfad) { ohneLogo(); return; }
    bild.addEventListener('error', function () {
      console.warn('Folie 12: Logo „' + pfad + '“ nicht gefunden (marke.js → logoTitel) – Folie 12 bleibt ohne Logo und ohne Logo-Quelle.');
      ohneLogo();
    });
    if (bild.complete && bild.getAttribute('src') && !bild.naturalWidth) ohneLogo();
  }

  Deck.registriere('f12', {
    einrichten: function (ctx) {
      var u = ctx.util;
      var daten = ctx.daten || {};
      var zustand = { knoepfe: [], rad: ctx.folie.querySelector('.steuerrad') };
      ctx.folie._g6d = zustand;

      kernEinsetzen(ctx);
      logoPruefen(ctx);

      /* Listen füllen: Schlüssel im JSON → Liste mit data-g6d="…" im HTML */
      ['methoden', 'ergebnisse', 'backup'].forEach(function (schluessel) {
        var liste = ctx.folie.querySelector('[data-g6d="' + schluessel + '"]');
        (daten[schluessel] || []).forEach(function (eintrag) {
          if (liste) zustand.knoepfe.push(knopfBauen(u, liste, eintrag));
        });
      });
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
