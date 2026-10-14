/* =============================================================================
   marke.js – ALLES, WAS SICH MIT DER MARKE ÄNDERT, STEHT HIER
   -----------------------------------------------------------------------------
   Sobald Prof. Stenger die Marke bestätigt hat, muss die Gruppe nur in DIESER
   Datei etwas ändern – danach index.html neu laden (F5). Kein Zusammenbauen nötig.

   Regeln
   • Texte stehen in Anführungszeichen '…'. Ein Apostroph im Text: \' schreiben.
   • Nach jedem Eintrag ein Komma (außer vor einer schließenden Klammer ist es egal).
   • Leere Angabe '' = Standardwert bzw. Platzhalter „[Marke]“.
   • In Texten wird „[Marke]“ automatisch durch den Markennamen ersetzt.
   • Nach dem Ändern prüfen: Seite neu laden, Konsole (F12) muss leer sein.
   ============================================================================= */
window.MARKE = {

  /* ---------------------------------------------------------------------------
     1. MARKENNAME
     name → ersetzt überall <span data-marke></span> (Kopfzeile, Titel, Umfragen)
     kurz → Kurzform für enge Stellen (<span data-marke="kurz"></span>)
     --------------------------------------------------------------------------- */
  name: '',                       // z. B. 'Musterfirma'
  kurz: '',                       // z. B. 'Muster'

  /* ---------------------------------------------------------------------------
     2. MARKENFARBEN (Hex-Werte aus dem Corporate Design der Marke)
     Leer = neutrale Farben des gewählten Themas. Alle anderen Farben werden
     daraus berechnet; die Lesbarkeit (Kontrast) bleibt automatisch erhalten.
       primaer   → Akzent, „soft facts“ (rechte Steuerrad-Hälfte), Zentrum
       sekundaer → „hard facts“ (linke Steuerrad-Hälfte), Flächentöne
     --------------------------------------------------------------------------- */
  farben: {
    primaer: '',                  // z. B. '#E30613'
    sekundaer: ''                 // z. B. '#1D1D1B'
  },

  /* ---------------------------------------------------------------------------
     3. BILDER (Pfade relativ zum Ordner praesentation/)
     Eigene Bilder in den Ordner bilder/ legen. Nur Bilder verwenden, deren
     Nutzung erlaubt ist (Quelle in der Folienfußzeile angeben).
     --------------------------------------------------------------------------- */
  logo: 'bilder/platzhalter-logo.svg',
  raetselBild: 'bilder/platzhalter-raetsel.svg',   // Einstiegsrätsel (Ausschnitt wird stark vergrößert)

  /* ---------------------------------------------------------------------------
     4. ANGABEN ZUR PRÄSENTATION
     --------------------------------------------------------------------------- */
  titel: 'Brand Persona & Markenidentität',
  fallstudie: 'Fallstudie 1',
  veranstaltung: 'Unternehmenskommunikation',
  dozent: 'Prof. Dr. Daniel Stenger',
  hochschule: 'Hochschule Kaiserslautern',
  gruppe: ['Yannick Heisler', 'Elias Knauber', 'Lukas Welker'],
  datum: '2026-10-26',            // Jahr-Monat-Tag
  dauerMinuten: 15,               // Sollzeit für die Uhr in der Referentenansicht
  anrede: 'Sie',                  // 'Sie' oder 'ihr' – einheitlich für alle Folien festlegen

  /* ---------------------------------------------------------------------------
     5. LIVE-UMFRAGEN (Baustein <div class="umfrage" data-umfrage="tier">)
     frage          Text der Frage (für Folie und Referentenansicht)
     optionen       Antwortmöglichkeiten (höchstens 9, Ziffern 1–9 zählen)
     link           Abstimm-Adresse (z. B. Mentimeter, Particify). Leer = kein
                    QR-Code, nur Zählmodus für Handzeichen/Zurufe.
     kurzLink       optionale kürzere Anzeige unter dem QR-Code
     ergebnisLink   Ergebnisseite des Werkzeugs (Knopf „Ergebnisse öffnen“)
     unsereAntwort  wird im Auflösungsschritt als „Unsere Analyse“ hervorgehoben
     beispielwerte  BEISPIELDATEN zum Ausprobieren (Pille „Beispieldaten“).
                    Vor dem Vortrag auf der Folie „Zurücksetzen“ klicken oder
                    die Zeile löschen.
     --------------------------------------------------------------------------- */
  umfragen: {
    tier: {
      frage: 'Wenn [Marke] ein Tier wäre – welches?',
      optionen: ['Fuchs', 'Eule', 'Delfin', 'Löwe', 'Hund'],   // BEISPIEL – Gruppe legt fest
      link: '',
      kurzLink: '',
      ergebnisLink: '',
      unsereAntwort: 'Eule',                                    // BEISPIEL
      beispielwerte: [16, 13, 9, 6, 4]                          // BEISPIELDATEN
    }
  },

  /* ---------------------------------------------------------------------------
     6. LIVE-WORTWOLKEN (Baustein <div class="wortwolke" data-wortwolke="assoziationen">)
     platzhalter   Hinweis im Eingabefeld
     leerText      Text, solange noch kein Wort eingetragen ist
     startwoerter  Wörter, die von Anfang an in der Wolke stehen (meist leer)
     --------------------------------------------------------------------------- */
  wortwolken: {
    assoziationen: {
      platzhalter: 'Zuruf eintippen und Enter drücken',
      leerText: 'Was verbinden Sie mit [Marke]?',
      startwoerter: []
    }
  },

  /* ---------------------------------------------------------------------------
     7. OPTIONALE FOLIEN (Folien mit data-optional) – true = zeigen
     --------------------------------------------------------------------------- */
  optionaleFolien: {
    f01b: false                   // Live-Wortwolke zum Einstieg
  },

  /* ---------------------------------------------------------------------------
     8. DARSTELLUNG
     beispieldatenHinweis  true = Pillen „Beispieldaten“ anzeigen (Pflicht,
                           solange erfundene Werte auf Folien stehen!)
     standardThema         'editorial' (Standard), 'bento' oder 'keynote'
     standardModus         'hell' (Standard, für helle Hörsäle) oder 'dunkel'
     Während der Präsentation: Taste T wechselt das Thema, D hell/dunkel.
     --------------------------------------------------------------------------- */
  beispieldatenHinweis: true,
  standardThema: 'editorial',
  standardModus: 'hell'
};
