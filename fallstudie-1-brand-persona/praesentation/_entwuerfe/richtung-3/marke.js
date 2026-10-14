/* =====================================================================
   marke.js – zentrale Stelle für Markenname und Markenfarben
   (Musterseite Richtung 3 „Bento hell“)
   ---------------------------------------------------------------------
   Solange "name" leer ist, zeigt jedes Element mit dem Attribut
   data-marke den Platzhalter „[Marke]“, der im HTML steht.

   Sobald Prof. Stenger die Marke vergeben hat, hier eintragen:
     name:      "Musterfirma"  → ersetzt überall „[Marke]“
     primaer:   "#E30613"      → Hauptfarbe aus dem Corporate Design
     sekundaer: "#1D1D1B"      → zweite Farbe aus dem Corporate Design
   Leere Farben ("") = neutrale Standardfarben aus tokens.css.
   ===================================================================== */
window.MARKE = {
  name: "",
  primaer: "",
  sekundaer: ""
};

/* Ab hier nichts ändern: trägt Name und Farben in die Seite ein. */
(function () {
  function markeEinsetzen() {
    var m = window.MARKE || {};
    var wurzel = document.documentElement;

    if (m.name) {
      document.querySelectorAll("[data-marke]").forEach(function (el) {
        el.textContent = m.name;
      });
    }
    // Farben am <html> setzen – alle Folien darunter rechnen damit neu.
    if (m.primaer) wurzel.style.setProperty("--marke-primaer", m.primaer);
    if (m.sekundaer) wurzel.style.setProperty("--marke-sekundaer", m.sekundaer);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", markeEinsetzen);
  } else {
    markeEinsetzen();
  }
})();
