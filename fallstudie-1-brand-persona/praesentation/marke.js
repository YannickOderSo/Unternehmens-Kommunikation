/* =============================================================================
   marke.js – ALLES, WAS SICH MIT DER MARKE ÄNDERT, STEHT HIER
   -----------------------------------------------------------------------------
   Gewählte Marke: HOLY (Gruppe, 13.10.2026). Alles, was sich mit der Marke
   ändert, steht in DIESER Datei – danach index.html neu laden (F5).
   Kein Zusammenbauen nötig.

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
  name: 'HOLY',                   // Markenname, wie er auf den Folien steht
  kurz: 'HOLY',                   // Kurzform (hier gleich)

  /* ---------------------------------------------------------------------------
     2. MARKENFARBEN (Hex-Werte aus dem Auftritt der Marke)
     Alle anderen Farben werden daraus berechnet; die Lesbarkeit (Kontrast)
     bleibt automatisch erhalten (geprüft mit werkzeuge/pruefen.mjs).
       primaer   → Akzent, „soft facts“ (rechte Steuerrad-Hälfte), Zentrum
       sekundaer → „hard facts“ (linke Steuerrad-Hälfte), Flächentöne
     Leer ('') = neutrale Farben des gewählten Themas.
     QUELLE: Recherche-Dossier (../recherche/holy-recherche.md), Kap. 6.3
     „Corporate Design“, Status ✔, Quelle [1] (de.holy.com, CSS der Website,
     abgerufen 13./14.10.2026): Gelb #FFD007 (häufigster Wert), Schwarz #1D1D1B.
     Achtung: Web-Werte, kein offizieller Styleguide (Dossier 6.3).
     Ausprobieren ohne diese Datei zu ändern: Farbwähler in der Bedienleiste
     unten rechts (Maus bewegen) – gilt nur bis zum Schließen des Tabs.
     --------------------------------------------------------------------------- */
  farben: {
    primaer: '#FFD007',           // HOLY-Gelb (Dossier 6.3 ✔ [1])
    sekundaer: '#1D1D1B'          // HOLY-Schwarz (Dossier 6.3 ✔ [1])
  },

  /* ---------------------------------------------------------------------------
     3. BILDER (Pfade relativ zum Ordner praesentation/)
     Eigene Bilder in den Ordner bilder/ legen. Nur Bilder verwenden, deren
     Nutzung erlaubt ist (Quelle in der Folienfußzeile angeben).
     --------------------------------------------------------------------------- */
  // Logo: Platzhalter. Ein echtes HOLY-Logo nur mit geklärten Rechten einsetzen
  // (Quelle in die Fußzeile der Folie). Wird zurzeit auf keiner Folie gezeigt.
  logo: 'bilder/platzhalter-logo.svg',
  // Einstiegsrätsel (Folie 01): Das Bild wird stark vergrößert und unscharf
  // gezeigt und dann aufgelöst. BIS 23.10. durch ein eigenes Foto ersetzen
  // (z. B. HOLY-Dose oder -Shaker, selbst fotografiert), z. B.
  //   raetselBild: 'bilder/raetsel-holy.jpg',   // eigenes Foto (Gruppe, Datum)
  // Danach in index.html bei Folie 01: data-fokus (Zoompunkt) prüfen und die
  // Bildquelle in der Fußzeile eintragen.
  raetselBild: 'bilder/platzhalter-raetsel.svg',

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
     aussage        Satz zur großen Aussagezahl (Baustein .umfrage-aussage);
                    {prozent} und {antwort} werden automatisch ersetzt
     beispielwerte  BEISPIELDATEN zum Ausprobieren (Pille „Beispieldaten“).
                    Vor dem Vortrag auf der Folie „Zurücksetzen“ klicken oder
                    die Zeile löschen. Prozente rechnet die Präsentation
                    selbst aus den Stimmen aus – nie von Hand eintragen.
     --------------------------------------------------------------------------- */
  umfragen: {
    tier: {
      frage: 'Wenn [Marke] ein Tier wäre – welches?',
      // Antwortoptionen (BEISPIEL – Gruppe legt fest). Folie 08 verlangt:
      // „Waschbär“ (unsere Analyse) und „Adler“ (Selbstbild, Maskottchen
      // „Raptor“) müssen dabei sein – sonst Hinweis in den Notizen von Folie 08.
      // Reihenfolge = Reihenfolge im Werkzeug (Mentimeter/Particify) und Ziffern 1–5.
      optionen: ['Adler', 'Löwe', 'Waschbär', 'Fuchs', 'Delfin'],
      link: '',                                                 // z. B. 'https://…' (Mentimeter/Particify)
      kurzLink: '',                                             // z. B. 'particify.de/p/12345678'
      ergebnisLink: '',                                         // Ergebnisseite des Werkzeugs
      unsereAntwort: 'Waschbär',                                // Ergebnis unserer Analyse (Folie 08, Titel)
      // Satz der großen Aussagezahl; {prozent} und {antwort} werden ersetzt
      aussage: '{prozent} sehen [Marke] wie wir: als {antwort}',
      beispielwerte: [15, 9, 17, 14, 9]                         // BEISPIELDATEN (64 Stimmen) – vor dem Vortrag „Zurücksetzen“
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
     Die Wahl gilt bis zum Schließen des Tabs; ?thema=bento&modus=dunkel in
     der Adresse erzwingt eine Kombination.
     --------------------------------------------------------------------------- */
  beispieldatenHinweis: true,
  standardThema: 'editorial',
  standardModus: 'hell'
};
