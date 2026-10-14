/* =============================================================================
   js/folien/02-vorgehen.js – Folien-Skript für folien/02-vorgehen.html (f02)
   -----------------------------------------------------------------------------
   Das Markensteuerrad baut der Baustein „steuerrad“ (js/komponenten.js) im
   Modus „hub“ mit data-aufbau="schritte": je Klick eine Methode (Reihenfolge
   aus dem JSON im Baustein), danach ein Schlussschritt. Dieses Skript passt
   den Ablauf an die Erzählung der Folie an:

   1. Verkettung als eigener Schritt (= Schlussschritt des Bausteins):
      Die gestrichelten Pfeile „Attribute sind die Startpunkte“ und
      „Tonalität ist der Prüfmaßstab“ erscheinen erst nach allen Methoden.
      In diesem Schritt stehen die Pfeile in Akzentfarbe, die
      Markenkompetenz (Zentrum, Desk Research) tritt zurück.
   2. Persona-Rahmen als letzter Schritt: Pille „Brand Persona + Limbic Map“
      erscheint, der Ring zeichnet sich um das Rad – Gesamtbild (Agenda).
   3. Aufbau beim Betreten: erst das Zentrum, dann die vier Felder
      (im Uhrzeigersinn, ruhig gestaffelt). Bei „Bewegung reduzieren“, im
      Druck und beim Zurückblättern entfällt das.

   Baut der Baustein das Rad neu (anderes Thema, andere Schrift, andere
   Fenstergröße), werden die Anpassungen automatisch wieder angewendet.
   ============================================================================= */
(function () {
  'use strict';

  var util = Deck.util;

  /* Reihenfolge der Felder beim Aufbau (im Uhrzeigersinn ab oben links) */
  var AUFBAU = ['nutzen', 'tonalitaet', 'bild', 'attribute'];

  function huelleVon(wurzel) {
    return wurzel.querySelector('.steuerrad.sr-modus-hub');
  }

  /* Schrittnummern aus dem Baustein ableiten:
     Methoden = start … start + n − 1, dann Verkettung, dann Rahmen */
  function schrittNummern(huelle) {
    var stufen = (huelle && huelle._stufen) || [];
    var start = (huelle && huelle._stufenStart) || 1;
    var kette = start + stufen.length;
    return { kette: kette, rahmen: kette + 1 };
  }

  /* 1 + 2: data-schritt der Pfeile, der Persona-Pille und des Rings setzen.
     Gibt true zurück, wenn etwas geändert wurde. */
  function anpassen(folie) {
    var huelle = huelleVon(folie);
    if (!huelle || !huelle._innen || huelle._innen._vorgehenAngepasst) return false;
    var s = schrittNummern(huelle);

    util.alle('.sr-logik, .sr-logik-text', huelle).forEach(function (el) {
      el.setAttribute('data-schritt', String(s.kette));
      el.setAttribute('data-animation', 'einblenden');
      el.setAttribute('data-verzoegerung', '180');
    });

    var pille = huelle.querySelector('.sr-karte--unten');
    if (pille) {
      pille.setAttribute('data-schritt', String(s.rahmen));
      pille.setAttribute('data-animation', 'hoch');
      pille.setAttribute('data-verzoegerung', '420');
    }
    var ring = huelle.querySelector('.sr-ring');
    if (ring) {
      ring.setAttribute('data-schritt', String(s.rahmen));
      ring.setAttribute('data-animation', 'zeichnen');
      ring.setAttribute('data-dauer', '1300');
    }

    /* Mindestzahl der Schritte der Folie anpassen (falls sich die Zahl der
       Methoden im JSON ändert) */
    folie.setAttribute('data-schritte', String(s.rahmen));
    huelle._innen._vorgehenAngepasst = true;
    Deck.schritteNeu(folie);
    return true;
  }

  /* Schritt „Verkettung“ (läuft nach dem Baustein, der für diesen Schritt
     keinen Fokus setzt): Klasse .vorgehen-kette – das Aussehen (Pfeile in
     Akzentfarbe, Markenkompetenz tritt zurück) regelt css/folien/02-vorgehen.css */
  function ketteZeigen(huelle, an) {
    if (!huelle) return;
    huelle.classList.toggle('vorgehen-kette', an);
    if (!an) return;
    huelle._schrittFokus = true;          // Maus über dem Rad ändert die Betonung jetzt nicht
    huelle.classList.remove('hat-fokus');
    util.alle('.ist-fokus', huelle).forEach(function (k) { k.classList.remove('ist-fokus'); });
  }

  /* Zustand für Schritt n herstellen (nach Neuaufbau oder Schrittwechsel) */
  function zustand(folie, n) {
    var huelle = huelleVon(folie);
    if (!huelle) return;
    var s = schrittNummern(huelle);
    if (n === s.kette) ketteZeigen(huelle, true);
    else huelle.classList.remove('vorgehen-kette');
  }

  /* 3. Aufbau beim Betreten: Zentrum, dann Felder (mit Beschriftung) */
  function radAufbauen(huelle) {
    var teile = huelle._teile;
    if (!teile || !teile.m) return;
    var m = teile.m;
    var mitte = Math.round(m.cx) + 'px ' + Math.round(m.cy) + 'px';
    var mittel = util.token('--dauer-mittel') || 560;
    var staffel = (util.token('--staffel') || 70) + 30;

    var kern = teile.felder.kompetenz;
    if (kern && kern.g) {
      kern.g.style.transformOrigin = mitte;
      util.animiere(kern.g, [{ opacity: 0, scale: '0.55' }, { opacity: 1, scale: '1' }], { duration: mittel });
      if (kern.label) util.animiere(kern.label, [{ opacity: 0 }, { opacity: 1 }], { duration: mittel, delay: 160 });
    }
    AUFBAU.forEach(function (feld, i) {
      var f = teile.felder[feld];
      if (!f || !f.g) return;
      var verz = 240 + i * staffel;
      f.g.style.transformOrigin = mitte;
      util.animiere(f.g, [{ opacity: 0, scale: '0.82' }, { opacity: 1, scale: '1' }], { duration: mittel, delay: verz });
      if (f.label) util.animiere(f.label, [{ opacity: 0 }, { opacity: 1 }], { duration: mittel, delay: verz + 160 });
    });
    util.alle('.sr-seite', huelle).forEach(function (el, i) {
      util.animiere(el, [{ opacity: 0 }, { opacity: 1 }], { duration: mittel, delay: 700 + i * staffel });
    });
  }

  Deck.registriere('f02', {
    einrichten: function (ctx) {
      anpassen(ctx.folie);
      /* Der Baustein baut nach Themen-/Größenwechsel neu – danach anpassen */
      var nachpruefen = function () {
        if (anpassen(ctx.folie) && util.istAktiv(ctx.folie)) zustand(ctx.folie, Deck.zustand().schritt);
      };
      document.addEventListener('deck:groesse', nachpruefen);
      document.addEventListener('deck:thema', nachpruefen);
    },
    betreten: function (ctx, schritt) {
      anpassen(ctx.folie);
      if (schritt === 0 && ctx.richtung !== 'zurueck' && !ctx.druckmodus && !ctx.bewegungReduziert) {
        var huelle = huelleVon(ctx.folie);
        if (huelle) radAufbauen(huelle);
      }
    },
    schritt: function (ctx, n) {
      anpassen(ctx.folie);
      zustand(ctx.folie, n);
    },
    druck: function (ctx) {
      anpassen(ctx.folie);
      var huelle = huelleVon(ctx.folie);
      if (huelle) huelle.classList.remove('vorgehen-kette');
    },
    /* Miniatur (Übersicht, Referentenansicht): Schritt „Verkettung“ wie im Vortrag */
    vorschau: function (ctx, klon, schritt) {
      var original = huelleVon(ctx.folie);
      var kopie = huelleVon(klon);
      if (!original || !kopie) return;
      var s = schrittNummern(original);
      ketteZeigen(kopie, schritt === s.kette);
    }
  });
})();
