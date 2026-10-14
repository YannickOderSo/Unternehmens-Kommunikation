/* =============================================================================
   folien.js – Verhalten der Folien (Richtung 1 „Editorial“)
   -----------------------------------------------------------------------------
   1. Markenname und Markenfarben aus marke.js einsetzen
   2. Folientitel in Wörter zerlegen (für die Wort-Animation)
   3. QR-Codes zeichnen (Bibliothek qrcode-generator, MIT-Lizenz)
   4. Animationen starten, sobald eine Folie sichtbar wird
   5. Rätsel auf der Einstiegsfolie: jeder Klick zeigt mehr vom Bild
   Funktioniert offline per Doppelklick, ohne Server und ohne Build-Schritt.
   ============================================================================= */
(function () {
  'use strict';

  var wurzel = document.documentElement;
  wurzel.classList.add('js');   // CSS weiß jetzt: Animationen sind möglich


  /* ---------------------------------------------------------------------------
     1. MARKE EINSETZEN
     marke.js (im Ordner praesentation/) kann z. B. so aussehen:
       window.MARKE = { name: 'Musterfirma', primaer: '#E30613', sekundaer: '#1D1D1B' };
     Fehlt die Datei oder ist noch keine Marke eingetragen, bleibt „[Marke]“ stehen.
     ------------------------------------------------------------------------- */
  function markeEinsetzen() {
    var m = window.MARKE;
    if (!m) return;
    var name = typeof m === 'string' ? m : m.name;
    if (name) {
      document.querySelectorAll('[data-marke]').forEach(function (el) {
        el.textContent = name;
      });
    }
    if (m.primaer) wurzel.style.setProperty('--marke-primaer', m.primaer);
    if (m.sekundaer) wurzel.style.setProperty('--marke-sekundaer', m.sekundaer);
  }


  /* ---------------------------------------------------------------------------
     2. TITEL IN WÖRTER ZERLEGEN
     Aus „Drei Eigenschaften …“ wird
       <span class="wort" style="--w:0"><span>Drei</span></span> …
     Kursive Teile (<em>) und der Markenname bleiben erhalten.
     ------------------------------------------------------------------------- */
  function woerterZerlegen(element) {
    var zaehler = 0;

    function wortHuelle(inhalt) {
      var aussen = document.createElement('span');
      var innen = document.createElement('span');
      aussen.className = 'wort';
      aussen.style.setProperty('--w', zaehler++);
      innen.appendChild(inhalt);
      aussen.appendChild(innen);
      return aussen;
    }

    function bearbeiten(knoten) {
      Array.prototype.slice.call(knoten.childNodes).forEach(function (kind) {
        if (kind.nodeType === 3) {                        // Textknoten
          var teile = kind.textContent.split(/(\s+)/);
          var frag = document.createDocumentFragment();
          teile.forEach(function (teil) {
            if (!teil) return;
            if (/^\s+$/.test(teil)) frag.appendChild(document.createTextNode(teil));
            else frag.appendChild(wortHuelle(document.createTextNode(teil)));
          });
          knoten.replaceChild(frag, kind);
        } else if (kind.nodeType === 1 && kind.tagName !== 'BR') {
          bearbeiten(kind);                                // z. B. <em> oder [data-marke]
        }
      });
    }

    bearbeiten(element);
  }


  /* ---------------------------------------------------------------------------
     3. QR-CODES
     <div data-qr="https://…"></div> wird zu einem gestochen scharfen SVG.
     Ruhezone 4 Module, Fehlerkorrektur „M“ (15 %).
     ------------------------------------------------------------------------- */
  function qrZeichnen(el) {
    if (typeof window.qrcode !== 'function') return;
    var qr = window.qrcode(0, 'M');                       // 0 = Größe automatisch
    qr.addData(el.getAttribute('data-qr'));
    qr.make();
    var n = qr.getModuleCount();
    var rand = 4;
    var pfad = '';
    for (var zeile = 0; zeile < n; zeile++) {
      for (var spalte = 0; spalte < n; spalte++) {
        if (qr.isDark(zeile, spalte)) {
          pfad += 'M' + (spalte + rand) + ' ' + (zeile + rand) + 'h1v1h-1z';
        }
      }
    }
    var groesse = n + 2 * rand;
    el.innerHTML =
      '<svg viewBox="0 0 ' + groesse + ' ' + groesse + '" shape-rendering="crispEdges" aria-hidden="true">' +
      '<path d="' + pfad + '" fill="#141414"/></svg>';
  }


  /* ---------------------------------------------------------------------------
     4. ANIMATIONEN BEIM SICHTBARWERDEN
     ------------------------------------------------------------------------- */
  function sichtbarkeitBeobachten() {
    var folien = document.querySelectorAll('.folie');
    if (!('IntersectionObserver' in window)) {
      folien.forEach(function (f) { f.classList.add('ist-sichtbar'); });
      return;
    }
    var beobachter = new IntersectionObserver(function (eintraege) {
      eintraege.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('ist-sichtbar');
          beobachter.unobserve(e.target);              // jede Folie animiert einmal
        }
      });
    }, { threshold: 0.35 });
    folien.forEach(function (f) { beobachter.observe(f); });
  }

  /* Alle Animationen einer Folie (oder aller Folien) noch einmal abspielen */
  function neuStarten(folie) {
    var ziele = folie ? [folie] : document.querySelectorAll('.folie');
    Array.prototype.forEach.call(ziele, function (f) {
      f.classList.add('ist-sichtbar');
      f.getAnimations({ subtree: true }).forEach(function (a) {
        if (a.effect && a.effect.getTiming().iterations === Infinity) return;
        a.cancel();
        a.play();
      });
    });
  }


  /* ---------------------------------------------------------------------------
     5. RÄTSEL: JEDER KLICK ZEIGT MEHR
     Stufen: stark vergrößert + unscharf  →  …  →  ganzes Bild, scharf.
     Werte hier anpassen (zoom = Vergrößerung, unschaerfe in Pixeln).
     ------------------------------------------------------------------------- */
  var RAETSEL_STUFEN = [
    { zoom: 3.0, unschaerfe: 40 },
    { zoom: 2.1, unschaerfe: 22 },
    { zoom: 1.45, unschaerfe: 9 },
    { zoom: 1.0, unschaerfe: 0 }
  ];

  function raetselEinrichten(knopf) {
    var stufe = 0;
    var folie = knopf.closest('.folie');
    var motiv = knopf.querySelector('.raetsel-motiv');
    var zoomAnzeige = knopf.querySelector('[data-zoom-anzeige]');
    var schritte = folie ? folie.querySelectorAll('.raetsel-schritte__balken span') : [];
    var schrittText = folie ? folie.querySelector('[data-schritt-anzeige]') : null;

    function anzeigen() {
      var s = RAETSEL_STUFEN[stufe];
      knopf.style.setProperty('--unschaerfe', s.unschaerfe + 'px');
      if (motiv) motiv.style.setProperty('--zoom', s.zoom);
      if (zoomAnzeige) zoomAnzeige.textContent = Math.round(s.zoom * 100) + ' %';
      Array.prototype.forEach.call(schritte, function (balken, i) {
        balken.classList.toggle('ist-aktiv', i <= stufe);
      });
      if (schrittText) schrittText.textContent = 'Hinweis ' + (stufe + 1) + ' von ' + RAETSEL_STUFEN.length;
    }

    knopf.addEventListener('click', function () {
      stufe = (stufe + 1) % RAETSEL_STUFEN.length;   // nach der Auflösung wieder von vorn
      anzeigen();
    });
    anzeigen();
  }


  /* ---------------------------------------------------------------------------
     START
     ------------------------------------------------------------------------- */
  function start() {
    markeEinsetzen();
    document.querySelectorAll('.titel, .raetsel-frage').forEach(woerterZerlegen);
    document.querySelectorAll('[data-qr]').forEach(qrZeichnen);
    document.querySelectorAll('.raetsel-bild').forEach(raetselEinrichten);
    sichtbarkeitBeobachten();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();

  window.Folien = { neuStarten: neuStarten };
})();
