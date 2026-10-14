/* =====================================================================
   muster.js – Logik der Musterseite Richtung 3 „Bento hell“
   ---------------------------------------------------------------------
   1. PROFIL     Daten des Polaritätenprofils (Folie b) – hier Werte ändern
   2. Polaritätenprofil als SVG zeichnen
   3. QR-Code erzeugen (Bibliothek qrcode-generator, MIT-Lizenz)
   4. Folie c für den Farbtausch-Test kopieren (Folien e1, e2)
   5. Animationen starten, sobald eine Folie sichtbar ist + Zahlen hochzählen
   6. Rätselbild auflösen (Folie a)
   7. Werkzeugleiste der Musterseite (hell/dunkel, Farben, neu abspielen)
   8. Musterseite auf kleine Bildschirme verkleinern
   ===================================================================== */
(function () {
  "use strict";

  /* -------------------------------------------------------------------
     1. Daten des Polaritätenprofils – BEISPIELDATEN!
     Skala 1–7: 1 = linker Begriff trifft voll zu, 7 = rechter Begriff.
     "nr" > 0 markiert eine hervorgehobene Eigenschaft (1, 2, 3 …),
     die rechts als Markenattribut-Karte erscheint.
     ------------------------------------------------------------------- */
  var PROFIL = [
    { links: "innovativ",  rechts: "traditionell",  marke: 2.0, wettbewerb: 4.8, ideal: 1.9, nr: 1 },
    { links: "nahbar",     rechts: "distanziert",   marke: 2.3, wettbewerb: 4.6, ideal: 2.0, nr: 2 },
    { links: "hochwertig", rechts: "preiswert",     marke: 3.1, wettbewerb: 3.4, ideal: 2.5, nr: 0 },
    { links: "nachhaltig", rechts: "konventionell", marke: 2.6, wettbewerb: 4.5, ideal: 2.2, nr: 3 },
    { links: "verspielt",  rechts: "sachlich",      marke: 4.0, wettbewerb: 4.4, ideal: 3.5, nr: 0 },
    { links: "regional",   rechts: "global",        marke: 4.8, wettbewerb: 5.3, ideal: 4.1, nr: 0 }
  ];

  var SVG_NS = "http://www.w3.org/2000/svg";

  /* Hilfsfunktion: SVG-Element mit Attributen anlegen */
  function el(name, attrs, eltern) {
    var e = document.createElementNS(SVG_NS, name);
    Object.keys(attrs || {}).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    if (eltern) eltern.appendChild(e);
    return e;
  }

  /* -------------------------------------------------------------------
     2. Polaritätenprofil zeichnen (in jedes <svg data-profil>)
     Geometrie im viewBox-System 1040 × 640.
     ------------------------------------------------------------------- */
  function zeichneProfil(svg, daten) {
    svg.innerHTML = "";
    var X1 = 300, X7 = 790;            // x-Position von Skalenwert 1 und 7
    var Y0 = 112, ZEILE = 100;         // Mitte der ersten Zeile, Zeilenabstand
    var x = function (wert) { return X1 + (wert - 1) / 6 * (X7 - X1); };
    var y = function (i) { return Y0 + i * ZEILE; };

    // Skalenbeschriftung 1–7
    for (var s = 1; s <= 7; s++) {
      var t = el("text", { class: "skala", x: x(s), y: 34, "text-anchor": "middle" }, svg);
      t.textContent = s;
    }

    daten.forEach(function (d, i) {
      // Hervorhebungsband + Nummer
      if (d.nr) {
        el("rect", { class: "band anim-pop", style: "--i:" + i, x: 0, y: y(i) - 42, width: 1040, height: 84, rx: 24 }, svg);
        el("circle", { class: "band-nr", cx: 34, cy: y(i), r: 19 }, svg);
        var n = el("text", { class: "band-nr-text", x: 34, y: y(i) + 8, "text-anchor": "middle" }, svg);
        n.textContent = d.nr;
      }
      // Skalenspur mit sieben Strichen
      el("line", { class: "spur", x1: X1, x2: X7, y1: y(i), y2: y(i) }, svg);
      for (var k = 1; k <= 7; k++) {
        el("rect", { class: "strich", x: x(k) - 2, y: y(i) - 12, width: 4, height: 24, rx: 2 }, svg);
      }
      // Pole links und rechts
      var l = el("text", { class: "pol" + (d.nr ? " ist-stark" : ""), x: X1 - 30, y: y(i) + 10, "text-anchor": "end" }, svg);
      l.textContent = d.links;
      var r = el("text", { class: "pol", x: X7 + 30, y: y(i) + 10 }, svg);
      r.textContent = d.rechts;
    });

    // Linien (werden von oben nach unten aufgedeckt)
    function linie(schluessel, klasse, nr) {
      var pfad = daten.map(function (d, i) { return (i ? "L" : "M") + x(d[schluessel]).toFixed(1) + " " + y(i); }).join(" ");
      var g = el("g", { class: "anim-aufdecken", style: "--i:" + nr }, svg);
      el("path", { class: "linie " + klasse, d: pfad }, g);
      return g;
    }
    linie("ideal", "linie-ideal", 0);
    linie("wettbewerb", "linie-wettb", 1);
    linie("marke", "linie-marke", 2);

    // Punkte (ploppen nacheinander auf)
    daten.forEach(function (d, i) {
      var cx = x(d.ideal), cy = y(i);
      el("path", { class: "punkt-ideal anim-pop", style: "--i:" + (i + 4), d: "M" + cx + " " + (cy - 9) + "l9 9-9 9-9-9z" }, svg);
      el("circle", { class: "punkt-wettb anim-pop", style: "--i:" + (i + 6), cx: x(d.wettbewerb), cy: cy, r: 10 }, svg);
      el("circle", { class: "punkt-marke anim-pop", style: "--i:" + (i + 8), cx: x(d.marke), cy: cy, r: 13 }, svg);
    });
  }

  /* -------------------------------------------------------------------
     3. QR-Code als SVG (scharf in jeder Größe). Fehlerkorrektur „M“.
     Ruhezone: 3 Module im SVG + Innenabstand der weißen Platte.
     ------------------------------------------------------------------- */
  function zeichneQr(ziel) {
    if (typeof window.qrcode !== "function") return;
    var qr = window.qrcode(0, "M");
    qr.addData(ziel.getAttribute("data-qr"));
    qr.make();
    var n = qr.getModuleCount(), d = "";
    for (var zeile = 0; zeile < n; zeile++) {
      for (var spalte = 0; spalte < n; spalte++) {
        if (qr.isDark(zeile, spalte)) d += "M" + spalte + " " + zeile + "h1v1h-1z";
      }
    }
    var rand = 3;
    ziel.innerHTML =
      '<svg viewBox="' + (-rand) + " " + (-rand) + " " + (n + 2 * rand) + " " + (n + 2 * rand) +
      '" shape-rendering="crispEdges" aria-hidden="true"><path fill="currentColor" d="' + d + '"/></svg>';
  }

  /* -------------------------------------------------------------------
     4. Farbtausch-Test: Inhalt von Folie c in die Folien e1/e2 kopieren
     ------------------------------------------------------------------- */
  document.querySelectorAll("[data-kopie-von]").forEach(function (ziel) {
    var quelle = document.getElementById(ziel.getAttribute("data-kopie-von"));
    if (quelle) ziel.innerHTML = quelle.innerHTML;
  });

  document.querySelectorAll("[data-profil]").forEach(function (svg) { zeichneProfil(svg, PROFIL); });
  document.querySelectorAll("[data-qr]").forEach(zeichneQr);

  /* -------------------------------------------------------------------
     5. Animationen starten, wenn eine Folie ins Bild kommt
     (Klasse .ist-sichtbar). Verlässt die Folie den Bildschirm ganz,
     wird zurückgesetzt – beim nächsten Mal läuft alles erneut.
     ------------------------------------------------------------------- */
  var zahlFormat = function (wert, stellen) {
    return wert.toFixed(stellen).replace(".", ",");   // deutsches Komma
  };

  function zaehleHoch(folie) {
    folie.querySelectorAll("[data-zaehlen]").forEach(function (e, i) {
      var ziel = parseFloat(e.getAttribute("data-zaehlen"));
      var stellen = parseInt(e.getAttribute("data-stellen") || "0", 10);
      var vor = e.getAttribute("data-vorzeichen") || "";
      var nach = e.getAttribute("data-einheit") || "";
      var dauer = 1100, start = null, verzoegerung = 450 + i * 60;
      function schritt(zeit) {
        if (start === null) start = zeit + verzoegerung;
        var t = Math.min(1, Math.max(0, (zeit - start) / dauer));
        var weich = 1 - Math.pow(1 - t, 3);              // bremst zum Ende ab
        e.textContent = vor + zahlFormat(ziel * weich, stellen) + nach;
        if (t < 1) requestAnimationFrame(schritt);
      }
      e.textContent = vor + zahlFormat(0, stellen) + nach;
      requestAnimationFrame(schritt);
    });
  }

  // Sichtbarkeit selbst berechnen (statt IntersectionObserver), weil die
  // Musterseite per CSS-zoom verkleinert wird – so stimmt es in jedem Browser.
  var folien = Array.prototype.slice.call(document.querySelectorAll(".folie"));
  var geplant = false;

  function sichtbarkeitPruefen() {
    geplant = false;
    var hoehe = window.innerHeight;
    folien.forEach(function (folie) {
      var r = folie.getBoundingClientRect();
      var sichtbar = Math.max(0, Math.min(r.bottom, hoehe) - Math.max(r.top, 0));
      var anteil = r.height ? sichtbar / Math.min(r.height, hoehe) : 0;
      if (anteil >= 0.25 && !folie.classList.contains("ist-sichtbar")) {
        folie.classList.add("ist-sichtbar");
        zaehleHoch(folie);
      } else if (sichtbar === 0) {
        folie.classList.remove("ist-sichtbar");       // beim nächsten Mal erneut abspielen
      }
    });
  }
  function einplanen() {
    if (!geplant) { geplant = true; requestAnimationFrame(sichtbarkeitPruefen); }
  }
  window.addEventListener("scroll", einplanen, { passive: true });
  window.addEventListener("resize", einplanen);

  /* -------------------------------------------------------------------
     6. Rätselbild: Klick (oder Enter/Leertaste) löst die Unschärfe auf
     ------------------------------------------------------------------- */
  document.querySelectorAll("[data-aufloesen]").forEach(function (bild) {
    function umschalten() { bild.classList.toggle("ist-aufgeloest"); }
    bild.addEventListener("click", umschalten);
    bild.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); umschalten(); }
    });
  });

  /* -------------------------------------------------------------------
     7. Werkzeugleiste der Musterseite
     ------------------------------------------------------------------- */
  var wurzel = document.documentElement;

  document.querySelectorAll("[data-modus-knopf]").forEach(function (knopf) {
    knopf.addEventListener("click", function () {
      var modus = knopf.getAttribute("data-modus-knopf");
      wurzel.setAttribute("data-modus", modus);
      document.querySelectorAll(".folie[data-modus]").forEach(function (f) { f.setAttribute("data-modus", modus); });
      document.querySelectorAll("[data-modus-knopf]").forEach(function (k) {
        k.setAttribute("aria-pressed", String(k === knopf));
      });
    });
  });

  // Farbwähler setzen die Markenfarben am <html> (Folien e1/e2 behalten ihre eigenen)
  document.querySelectorAll("[data-farbe]").forEach(function (feld) {
    feld.addEventListener("input", function () {
      wurzel.style.setProperty(feld.getAttribute("data-farbe"), feld.value);
    });
  });
  var zuruecksetzen = document.querySelector("[data-farben-zuruecksetzen]");
  if (zuruecksetzen) {
    zuruecksetzen.addEventListener("click", function () {
      wurzel.style.removeProperty("--marke-primaer");
      wurzel.style.removeProperty("--marke-sekundaer");
      document.querySelector('[data-farbe="--marke-primaer"]').value = "#3A3F58";
      document.querySelector('[data-farbe="--marke-sekundaer"]').value = "#A8957C";
    });
  }

  var neu = document.querySelector("[data-animation-neu]");
  if (neu) {
    neu.addEventListener("click", function () {
      var sichtbar = document.querySelectorAll(".folie.ist-sichtbar");
      sichtbar.forEach(function (f) { f.classList.remove("ist-sichtbar"); });
      void document.body.offsetWidth;                 // Neustart erzwingen
      sichtbar.forEach(function (f) { f.classList.add("ist-sichtbar"); zaehleHoch(f); });
    });
  }

  /* -------------------------------------------------------------------
     8. Auf Bildschirmen schmaler als 1920 px die ganze Seite verkleinern
     ------------------------------------------------------------------- */
  function skalieren() {
    var breite = document.documentElement.clientWidth;
    document.body.style.zoom = breite < 1920 ? String(breite / 1920) : "";
  }
  window.addEventListener("resize", skalieren);
  skalieren();
  einplanen();   // erste Prüfung, nachdem die Seite skaliert ist
})();
