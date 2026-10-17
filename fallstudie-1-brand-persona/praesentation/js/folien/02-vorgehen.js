/* =============================================================================
   js/folien/02-vorgehen.js – Folien-Skript für index.html, Folie 02
   -----------------------------------------------------------------------------
   Das Markensteuerrad baut der Baustein „steuerrad“ (js/komponenten.js) im
   Modus „hub“ mit data-aufbau="schritte": je Klick eine Methode (Reihenfolge
   aus dem JSON im Baustein), danach ein Schlussschritt. Dieses Skript passt
   den Ablauf an die Erzählung der Folie an:

   1. Verkettung als eigener Schritt (= Schlussschritt des Bausteins):
      Die gestrichelten Pfeile „Attribute als Startpunkte“ und „Tonalität als
      Prüfmaßstab“ erscheinen erst nach allen Methoden. In diesem Schritt
      stehen die Pfeile in Akzentfarbe, die Markenkompetenz tritt zurück.
   2. Persona-Rahmen als letzter Schritt: Die Pille „Brand Persona + Limbic
      Map“ erscheint sofort (mit ihrer Kurzbeschreibung), danach zeichnet sich
      der Ring. Der Ring besteht aus zwei Bögen, die hinter den beiden Pillen
      enden – er kreuzt nie deren Text, weder beim Zeichnen noch im Morph.
   3. Aufbau beim Betreten: erst das Zentrum, dann die vier Felder
      (im Uhrzeigersinn, ruhig gestaffelt). Bei „Bewegung reduzieren“, im
      Druck und beim Zurückblättern entfällt das.
   4. Kennzeichen „KI“ auf jeder Methodenkarte (KI-Tools als Methode,
      Aufgabenstellung); Tab springt nur über die sechs Karten, in der
      Reihenfolge des Vortrags; „Folien 08–08b“ wird zu „Folie 08 f.“;
      Seitenbeschriftung nur „Hard Facts“ / „Soft Facts“ (Wortbudget).
   5. Mausregel (liegen gebliebene Maus hebt nichts hervor): jetzt zentral
      im Baustein, siehe js/komponenten.js.
   6. Folienwechsel mit Morph ins Mini-Rad: Die beiden Pillen bekommen kurz
      einen eigenen View-Transition-Namen (liegen dann über dem gleitenden
      Rad), die Verbinderpunkte sind kurz unsichtbar.

   Baut der Baustein das Rad neu (anderes Thema, andere Schrift, andere
   Fenstergröße), werden die Anpassungen automatisch wieder angewendet.

   ACHTUNG (für spätere Änderungen): Dieses Skript nutzt interne Felder des
   Bausteins „steuerrad“ (huelle._stufen, _stufenStart, _innen, _teile,
   _schrittFokus) und dessen Klassen (.sr-karte, .sr-pille, .sr-ring …),
   Stand js/komponenten.js vom 14.10.2026. Nach Änderungen am Baustein die
   Folie mit werkzeuge/pruefen.mjs --schritte prüfen (Schritte 6 und 7!).
   ============================================================================= */
(function () {
  'use strict';

  var util = Deck.util;

  /* Reihenfolge der Felder beim Aufbau (im Uhrzeigersinn ab oben links) */
  var AUFBAU = ['nutzen', 'tonalitaet', 'bild', 'attribute'];
  /* Der Ring endet so viele px innerhalb der Pillenkante (läuft unter den Rand) */
  var RING_UNTER_RAND = 2;

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


  /* ---------- 4. Kennzeichen, Tab-Reihenfolge, Texte ---------- */

  /* „KI“ auf jeder Methodenkarte (data-meta: Kennzeichnung, kein Folientext) */
  function kiKennzeichnen(huelle) {
    util.alle('.sr-karte', huelle).forEach(function (karte) {
      if (karte.querySelector('.vorgehen-ki')) return;
      var chip = util.element('span', { class: 'vorgehen-ki', 'data-meta': '', 'aria-hidden': 'true' }, 'KI');
      var kopf = karte.querySelector('.sr-karte-kopf');
      if (!kopf) return;
      var verweis = kopf.querySelector('.sr-karte-folie');
      if (karte.classList.contains('sr-pille')) {
        /* Pille: in der Zeile nach dem Methodennamen, vor „Folie x →“ */
        kopf.insertBefore(chip, verweis || null);
      } else {
        /* Seitenkarte: zweite Zeile „KI  Folie x →“ unter dem Methodennamen */
        var zeile = util.element('span', { class: 'vorgehen-verweiszeile' });
        zeile.appendChild(chip);
        kopf.insertBefore(zeile, verweis || null);
        if (verweis) zeile.appendChild(verweis);
      }
      var label = karte.getAttribute('aria-label');
      if (label) karte.setAttribute('aria-label', label + ' (KI-gestützt)');
    });
  }

  /* Nur die sechs Karten sind Tab-Stopps (Felder führen zu denselben Zielen),
     in der Reihenfolge des Vortrags: Methoden wie im JSON, Persona zuletzt */
  function tabReihenfolge(huelle) {
    util.alle('.sr-feld[tabindex]', huelle).forEach(function (feld) { feld.setAttribute('tabindex', '-1'); });
    var innen = huelle._innen;
    var folge = ((huelle._stufen || []).slice()).concat(['persona']);
    folge.forEach(function (feld) {
      var karte = innen.querySelector('.sr-karte[data-paar="' + feld + '"]');
      if (karte) innen.appendChild(karte);    /* Karten sind absolut platziert – nur die Reihenfolge ändert sich */
    });
  }

  /* „Folien 08–08b“ liest sich holprig → „Folie 08 f.“ (der Klick springt
     ohnehin zur ersten Folie) */
  function verweiseGlaetten(huelle) {
    util.alle('.sr-karte-folie', huelle).forEach(function (el) {
      var m = /^Folien (\d+)–(\d+)[a-z]$/.exec(el.textContent.trim());
      if (m && m[1] === m[2]) el.textContent = 'Folie ' + m[1] + ' f.';
    });
  }

  /* Seitenbeschriftung: nur „Hard Facts“ / „Soft Facts“ (ohne „rational“ /
     „emotional“ – spart Wörter, die Begriffe stehen in den Notizen). Sie ist
     eine Achsenbeschriftung in Metagröße (22 px) → data-meta. */
  function seitenKuerzen(huelle) {
    util.alle('.sr-seite', huelle).forEach(function (p) {
      p.setAttribute('data-meta', '');
      Array.prototype.slice.call(p.childNodes).forEach(function (n) {
        if (n.nodeType === 3) n.remove();
      });
    });
  }


  /* ---------- 2. Ring in zwei Bögen mit Lücken hinter den Pillen ---------- */

  /* Halber Lückenwinkel (Grad) für eine Pille der Breite b und Höhe h, die
     mittig auf dem Ring (Radius r) sitzt: so weit läuft der Ring innerhalb
     der Pillenform (Rechteck mit runden Enden). */
  function lueckeGrad(r, b, h) {
    if (!b || !h) return 0;
    var gerade = Math.max(0, b / 2 - h / 2);       /* halbe Länge des geraden Stücks */
    var radius = h / 2 - RING_UNTER_RAND;
    for (var g = 0; g < 90; g += 0.25) {
      var w = g * Math.PI / 180;
      var x = r * Math.sin(w);                     /* waagerechter Abstand von der Pillenmitte */
      var y = r - r * Math.cos(w);                 /* senkrechter Abstand von der Pillenmitte */
      var dx = Math.max(0, x - gerade);
      if (dx * dx + y * y > radius * radius) return g;
    }
    return 90;
  }

  function ringTeilen(huelle) {
    var kreis = huelle.querySelector('circle.sr-ring');
    if (!kreis) return;
    var cx = parseFloat(kreis.getAttribute('cx'));
    var cy = parseFloat(kreis.getAttribute('cy'));
    var r = parseFloat(kreis.getAttribute('r'));
    var oben = huelle.querySelector('.sr-karte--oben');
    var unten = huelle.querySelector('.sr-karte--unten');

    /* Pillen messen – die Persona-Pille so breit wie in Schritt 7 (mit Beschreibung) */
    var masse = util.messen(huelle, function () {
      var hatte = huelle.classList.contains('vorgehen-rahmen');
      huelle.classList.add('vorgehen-rahmen');
      var m = {
        ob: oben ? oben.offsetWidth : 0, oh: oben ? oben.offsetHeight : 0,
        ub: unten ? unten.offsetWidth : 0, uh: unten ? unten.offsetHeight : 0
      };
      if (!hatte) huelle.classList.remove('vorgehen-rahmen');
      return m;
    });
    var gO = lueckeGrad(r, masse.ob, masse.oh);
    var gU = lueckeGrad(r, masse.ub, masse.uh);

    /* Punkt auf dem Ring; Winkel in Grad, 0° = rechts, 90° = unten, −90° = oben */
    function punkt(grad) {
      var p = util.polar(cx, cy, r, grad);
      return util.rund(p.x) + ' ' + util.rund(p.y);
    }
    /* Beide Bögen beginnen unten an der Persona-Pille und enden oben an der
       Pille „Desk Research“ (so zeichnen sie sich von unten nach oben) */
    var links = 'M' + punkt(90 + gU) + ' A' + r + ' ' + r + ' 0 0 1 ' + punkt(270 - gO);
    var rechts = 'M' + punkt(90 - gU) + ' A' + r + ' ' + r + ' 0 0 0 ' + punkt(-90 + gO);
    [links, rechts].forEach(function (d) {
      var bogen = util.svg('path', { class: 'sr-ring vorgehen-bogen', d: d });
      kreis.parentNode.insertBefore(bogen, kreis);
    });
    kreis.remove();
  }


  /* Leitfrage der Markenkompetenz („Wer bin ich?“): Im gelben Zentrum stieß
     sie an den Kernring (Abschlussprüfung 16.10.2026). Sie steht deshalb vorn
     in der Pille „Desk Research“ und erscheint mit deren Beschreibung in
     Schritt 1 – wie bei den anderen Methoden die Leitfrage an der Karte. Das
     Zentrum zeigt nur den Feldnamen (css/folien/02-vorgehen.css → „Kernfrage“). */
  function kernFrageInPille(huelle) {
    var frage = huelle.querySelector('.sr-label--kern .sr-label-frage');
    var text = huelle.querySelector('.sr-pille[data-paar="kompetenz"] .sr-karte-text');
    if (!frage || !text || text.querySelector('.vorgehen-kernfrage')) return;
    var em = util.element('em', { class: 'sr-karte-frage vorgehen-kernfrage' }, frage.textContent);
    text.insertBefore(em, text.firstChild);
  }


  /* ---------- 1 + 2: Schritte der Pfeile, der Persona-Pille und des Rings ----------
     Gibt true zurück, wenn etwas geändert wurde (= Rad wurde neu gebaut). */
  function anpassen(folie) {
    var huelle = huelleVon(folie);
    if (!huelle || !huelle._innen || huelle._innen._vorgehenAngepasst) return false;
    var s = schrittNummern(huelle);

    kiKennzeichnen(huelle);
    kernFrageInPille(huelle);
    tabReihenfolge(huelle);
    verweiseGlaetten(huelle);
    seitenKuerzen(huelle);
    ringTeilen(huelle);

    util.alle('.sr-logik, .sr-logik-text', huelle).forEach(function (el) {
      el.setAttribute('data-schritt', String(s.kette));
      el.setAttribute('data-animation', 'einblenden');
      el.setAttribute('data-verzoegerung', '180');
    });

    /* Pille sofort (ohne Verzögerung), der Ring zeichnet sich danach von ihr aus */
    var pille = huelle.querySelector('.sr-karte--unten');
    if (pille) {
      pille.setAttribute('data-schritt', String(s.rahmen));
      pille.setAttribute('data-animation', 'hoch');
      pille.setAttribute('data-verzoegerung', '0');
    }
    util.alle('.vorgehen-bogen', huelle).forEach(function (bogen) {
      bogen.setAttribute('data-schritt', String(s.rahmen));
      bogen.setAttribute('data-animation', 'zeichnen');
      bogen.setAttribute('data-verzoegerung', '280');
      bogen.setAttribute('data-dauer', '1100');
    });

    /* Mindestzahl der Schritte der Folie anpassen (falls sich die Zahl der
       Methoden im JSON ändert) */
    folie.setAttribute('data-schritte', String(s.rahmen));
    huelle._innen._vorgehenAngepasst = true;
    Deck.schritteNeu(folie);
    return true;
  }


  /* ---------- 5. Mausregel ----------
     Seit 16.10.2026 zentral im Baustein (js/komponenten.js, „Mausregel“):
     gilt für alle Steuerräder (auch Folie 10 und 12). */


  /* ---------- Zustände der Schritte 6 und 7 ---------- */

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

  /* Schritt „Rahmen“: Persona-Pille mit Kurzbeschreibung (Klasse .vorgehen-rahmen) */
  function rahmenZeigen(huelle, an) {
    if (huelle) huelle.classList.toggle('vorgehen-rahmen', an);
  }

  /* Zustand für Schritt n herstellen (nach Neuaufbau oder Schrittwechsel) */
  function zustand(folie, n) {
    var huelle = huelleVon(folie);
    if (!huelle) return;
    var s = schrittNummern(huelle);
    ketteZeigen(huelle, n === s.kette);
    rahmenZeigen(huelle, n >= s.rahmen);
  }


  /* ---------- 3. Aufbau beim Betreten: Zentrum, dann Felder ---------- */
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


  /* ---------- 6. Folienwechsel (Morph ins Mini-Rad und zurück) ----------
     Pillen bekommen kurz eigene View-Transition-Namen → sie liegen über dem
     gleitenden Rad; die Verbinderpunkte sind so lange unsichtbar
     (Klassen .vorgehen-geht / .vorgehen-kommt, Aussehen in der CSS-Datei). */
  var wechselNr = 0;
  function pillenNamen(huelle, an) {
    var oben = huelle.querySelector('.sr-karte--oben');
    var unten = huelle.querySelector('.sr-karte--unten');
    if (oben) oben.style.viewTransitionName = an ? 'vorgehen-pille-oben' : '';
    if (unten) unten.style.viewTransitionName = an ? 'vorgehen-pille-unten' : '';
  }
  /* Pillen und Punkte gelten als „im Folienwechsel“, bis die Engine das Ende
     des Übergangs meldet (Ereignis deck:wechsel-ende, seit 16.10.2026 –
     vorher ein eigener Timer von 900 ms) */
  function wechselBeginnen(huelle, klasse) {
    var nr = ++wechselNr;
    huelle.classList.remove('vorgehen-geht', 'vorgehen-kommt');
    huelle.classList.add(klasse);
    pillenNamen(huelle, true);
    var ende = function () {
      document.removeEventListener('deck:wechsel-ende', ende);
      if (nr !== wechselNr) return;
      huelle.classList.remove(klasse);
      pillenNamen(huelle, false);
    };
    document.addEventListener('deck:wechsel-ende', ende);
  }
  function wechselBeenden(huelle) {
    wechselNr++;
    huelle.classList.remove('vorgehen-geht', 'vorgehen-kommt');
    pillenNamen(huelle, false);
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
      var huelle = huelleVon(ctx.folie);
      if (!huelle) return;
      var animiert = !ctx.druckmodus && !ctx.bewegungReduziert;
      if (animiert && ctx.richtung === 'zurueck') wechselBeginnen(huelle, 'vorgehen-kommt');
      else wechselBeenden(huelle);
      /* Aufbau nur beim normalen Weiterblättern – nicht bei Sprüngen ohne
         Übergang (Übersicht, Adresse, Start), dort steht das Rad sofort */
      if (schritt === 0 && ctx.richtung !== 'zurueck' && animiert && !ctx.sofort) radAufbauen(huelle);
    },
    verlassen: function (ctx) {
      var huelle = huelleVon(ctx.folie);
      if (huelle && !ctx.druckmodus && !ctx.bewegungReduziert) wechselBeginnen(huelle, 'vorgehen-geht');
    },
    schritt: function (ctx, n) {
      anpassen(ctx.folie);
      zustand(ctx.folie, n);
    },
    druck: function (ctx) {
      anpassen(ctx.folie);
      var huelle = huelleVon(ctx.folie);
      if (!huelle) return;
      huelle.classList.remove('vorgehen-kette');
      rahmenZeigen(huelle, true);
      wechselBeenden(huelle);
    },
    /* Miniatur (Übersicht, Referentenansicht): Schritte 6 und 7 wie im Vortrag */
    vorschau: function (ctx, klon, schritt) {
      var original = huelleVon(ctx.folie);
      var kopie = huelleVon(klon);
      if (!original || !kopie) return;
      var s = schrittNummern(original);
      ketteZeigen(kopie, schritt === s.kette);
      rahmenZeigen(kopie, schritt >= s.rahmen);
      kopie.classList.remove('vorgehen-geht', 'vorgehen-kommt');
    }
  });
})();
