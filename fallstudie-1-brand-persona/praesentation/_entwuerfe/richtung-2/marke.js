/* =====================================================================
   marke.js – zentrale Stelle für den Markennamen (Musterseite Richtung 2)
   ---------------------------------------------------------------------
   Solange "name" leer ist, zeigt jede Stelle mit dem Attribut
   data-marke den Platzhalter „[Marke]“.
   Sobald Prof. Stenger die Marke vergeben hat, hier eintragen:
     name:      "Musterfirma"   → ersetzt überall „[Marke]“
     primaer:   "#E30613"       → Hauptfarbe aus dem Corporate Design
     sekundaer: "#1D1D1B"       → zweite Farbe aus dem Corporate Design
   Leere Farben ("") = neutrale Standardfarben aus tokens.css.
   ===================================================================== */
window.MARKE = {
  name: "",
  primaer: "",
  sekundaer: ""
};
