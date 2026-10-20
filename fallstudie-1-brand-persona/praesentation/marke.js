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
  // Logo: offizielle HOLY-Wortmarke von de.holy.com (Seitenkopf, Datei HOLY_Logo_1.png,
  // 389 × 105 px), abgerufen 16.10.2026. Marke der HOLY Softdrinks GmbH – nur zur
  // Kennzeichnung der analysierten Marke; Quelle steht in der Fußzeile von Folie 09b
  // und in QUELLEN.md. Gezeigt auf Folie 09b (Corporate Design; im Dunkelmodus auf
  // heller Unterlage, das Bild selbst bleibt unverändert).
  // Zweite Variante (gelbes Oval) steht unten bei logoTitel (Folie 01 und 12).
  logo: 'bilder/holy-logo-wortmarke.png',
  // Logo für die Titelfolie (Folie 01): offizielles HOLY-Logo im gelben Oval
  // (Seitenfuß von de.holy.com, Datei HOLY_Logo_NewYellow.png, 692 × 400 px),
  // abgerufen 16.10.2026, unverändert (nur verkleinert angezeigt). Es erscheint
  // mit der Auflösung des Rätsels (Schritt 1, nicht vorher) und bleibt auf der
  // Titelfolie stehen – anstelle des gesetzten Markennamens; Screenreader lesen
  // weiter den Namen (name oben). Dasselbe Logo steht seit 17.10.2026 auf Folie 12
  // (<img data-marke-logo="titel">, Klammer Anfang–Ende), seit 18.10.2026 oben rechts
  // neben dem Fazit über HOLY – nicht neben den Gruppennamen (wirkte wie Co-Branding).
  // Quelle steht in den Fußzeilen von Folie 01 und 12, in B7 und in QUELLEN.md.
  // Leer ('') = Markenname in Schrift wie bisher; Folie 12 zeigt dann nur die Gruppe.
  logoTitel: 'bilder/holy-logo-oval.png',
  // Einstiegsrätsel (Folie 01): Das Bild wird stark vergrößert und unscharf
  // gezeigt und dann aufgelöst. Seit 19.10.2026 eine eigene Illustration
  // (KI-gestützt, Claude Code, 19.10.2026), kein Foto: Pappdose mit Drachenfrucht
  // auf dem Etikett (bewusst ohne Comic-Tier), Shaker, Drachenfrucht vor HOLY-Gelb –
  // ohne Logo und Schrift (Dossier 6.3/6.4).
  // Kann jederzeit durch ein eigenes Foto ersetzt werden, z. B.
  //   raetselBild: 'bilder/raetsel-foto.jpg',   // eigenes Foto (Gruppe, Datum)
  // Dann in index.html bei Folie 01 data-fokus (Zoompunkt) neu setzen – der Wert
  // "60.1% 60.7%" gilt nur für die Illustration – und die Bildquelle in der Fußzeile
  // ändern. Ein Dateiname mit „platzhalter“ zeigt die Pille „Platzhalterbild“.
  raetselBild: 'bilder/raetsel-holy.svg',

  /* ---------------------------------------------------------------------------
     4. ANGABEN ZUR PRÄSENTATION
     --------------------------------------------------------------------------- */
  titel: 'Brand Persona & Markenidentität',
  fallstudie: 'Fallstudie 1',
  veranstaltung: 'Unternehmenskommunikation',
  dozent: 'Prof. Dr. Daniel Stenger',
  hochschule: 'Hochschule Kaiserslautern',
  // Firma hinter der Marke – nur für die Einordnungszeile auf Folie 01 und 12
  // („Studentische Fallstudie · keine Verbindung zur …“). Quelle: Recherche-
  // Dossier Kap. 1, Impressum und Handelsregister ✔ [2, 3].
  unternehmen: 'HOLY Softdrinks GmbH',
  gruppe: ['Yannick Heisler', 'Elias Knauber', 'Lukas Welker'],
  datum: '2026-10-26',            // Jahr-Monat-Tag
  dauerMinuten: 15,               // Sollzeit für die Uhr in der Referentenansicht
  anrede: 'Sie',                  // 'Sie' oder 'ihr' – einheitlich für alle Folien festlegen

  /* ---------------------------------------------------------------------------
     5. LIVE-UMFRAGEN (Baustein <div class="umfrage" data-umfrage="tier">)
     Weg A (Entscheidung Yannick, 19.10.2026): EIGENE Live-Abstimmung. Das
     Publikum scannt den QR-Code, stimmt auf abstimmen.html ab, die Stimmen
     landen über eine Web-App (Google Apps Script) in einer Google-Tabelle,
     Folie 08 holt den Stand alle 2 s. Einrichtung: live-abstimmung/ANLEITUNG.md,
     Bedienung: LIESMICH.md, Abschnitt 6. Weg B (Werkzeug wie Particify oder
     Mentimeter + Werte eintippen) und Plan C (Zählmodus) bleiben möglich.

     frage          Text der Frage (für Folie, Referentenansicht, Abstimmseite)
     optionen       Antwortmöglichkeiten (höchstens 9, Ziffern 1–9 zählen)
     link           Abstimm-Adresse für den QR-Code. Weg A: unsere Abstimmseite
                    (abstimmen.html auf GitHub Pages) – der QR-Code dazu erscheint
                    nur, wenn liveQuelle gesetzt ist. Weg B: Adresse aus dem Werkzeug
                    eintragen und liveQuelle leer lassen. Ohne QR-Code (link
                    leer oder Abstimmseite ohne liveQuelle): Zählmodus für
                    Handzeichen/Zurufe.
     kurzLink       optionale kürzere Anzeige unter dem QR-Code (leer: bei unserer
                    Abstimmseite keine Zeile – die Adresse ist zu lang, der
                    QR-Code reicht; bei einem Werkzeug die Adresse ohne https://)
     ergebnisLink   Ergebnisseite des Werkzeugs (Knopf „Ergebnisse öffnen“, Weg B)
     liveQuelle     Adresse der Web-App (Weg A), beginnt mit
                    https://script.google.com/macros/s/ und endet auf /exec.
                    Leer = Live-Abstimmung aus (Folie wie bisher: Werte
                    eintippen oder Zählmodus, kein QR-Code zur Abstimmseite).
                    Muss auf GitHub UND auf dem Präsentationsrechner stehen.
     runde          trennt Probe und Vortrag (nur A–Z a–z 0–9 _ -, höchstens 40
                    Zeichen): 'probe' für Tests und Generalprobe, spätestens am
                    Vortag 'vortrag-2026-10-26' – dann beginnt Folie 08 bei 0,
                    die Probestimmen bleiben in der Tabelle, zählen aber nicht.
                    Auch die im Browser gespeicherten Zahlen (Stimmen, Handwerte)
                    gelten nur in ihrer Runde – Probezahlen erscheinen im Vortrag nie.
                    Ebenfalls auf GitHub UND auf dem Präsentationsrechner ändern.
     unsereAntwort  wird im Auflösungsschritt als „Unsere Analyse“ hervorgehoben
     aussage        Satz zur großen Aussagezahl (Baustein .umfrage-aussage);
                    {prozent} und {antwort} werden automatisch ersetzt
     beispielwerte  BEISPIELDATEN zum Ausprobieren (Pille „Beispieldaten“).
                    Sie verschwinden mit dem ersten Stand der Live-Abstimmung
                    oder der ersten Stimme von Hand (oder „Zurücksetzen“).
                    Prozente rechnet die Präsentation selbst aus den Stimmen
                    aus – nie von Hand eintragen.
     --------------------------------------------------------------------------- */
  umfragen: {
    tier: {
      frage: 'Wenn [Marke] ein Tier wäre – welches?',
      // Antwortoptionen (festgelegt von Yannick, 19.10.2026; seit 20.10.2026
      // „Chamäleon“ statt „Waschbär“ an derselben Stelle): „Chamäleon“ =
      // unsere Analyse (Einordnung Elias Knauber, Bündel C), „Adler“ =
      // Selbstbild (Maskottchen „Raptor“) – beide verlangt Folie 08, sonst
      // Hinweis in deren Notizen. Reihenfolge = Knöpfe auf der Abstimmseite,
      // Ziffern 1–5 und Nummern 0–4 in der Tabelle (Spalte „Option“; bei Weg B:
      // Reihenfolge im Werkzeug). Nach den ersten echten Stimmen Reihenfolge
      // nicht mehr ändern – sonst zählen sie fürs falsche Tier.
      // Hinweis zum Wechsel: Die Tabelle speichert nur die Nummer. Probestimmen
      // mit Option 2 (Runde 'probe', abgegeben für den Waschbär) zählen jetzt
      // als Chamäleon – unkritisch, die Runde wird vor dem Vortrag ohnehin
      // auf 'vortrag-2026-10-26' umgestellt.
      optionen: ['Adler', 'Löwe', 'Chamäleon', 'Fuchs', 'Schwan'],
      link: 'https://yannickoderso.github.io/Unternehmens-Kommunikation/fallstudie-1-brand-persona/praesentation/abstimmen.html?u=tier',
      kurzLink: '',                                             // leer = keine Zeile unter dem QR-Code (Weg B: z. B. 'particify.de/p/12345678')
      ergebnisLink: '',                                         // nur Weg B: Ergebnisseite des Werkzeugs
      liveQuelle: 'https://script.google.com/macros/s/AKfycbwnr4wXtKVNg9rlUtVv1u0xBAIf98oJdLkMvbmb7elTK7KR3fz1TnU5rqzYSQdISpuxxw/exec', // Web-App (eingerichtet von Yannick, 19.10.2026) – leer = aus
      runde: 'probe',                                           // 'probe' → vor dem Vortrag 'vortrag-2026-10-26'
      unsereAntwort: 'Chamäleon',                               // Ergebnis unserer Analyse (Folie 08, Titel; seit 20.10.2026)
      // Satz der großen Aussagezahl; {prozent} und {antwort} werden ersetzt
      aussage: '{prozent} sehen [Marke] wie wir: als {antwort}',
      beispielwerte: [15, 9, 17, 14, 9]                         // BEISPIELDATEN (64 Stimmen; Adler, Löwe, Chamäleon, Fuchs, Schwan)
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
    f01b: false                   // Live-Wortwolke zum Einstieg (+45 s – nur mit true, wenn dafür
                                  // auf Folie 08 die Live-Umfrage entfällt; siehe LIESMICH, Abschnitt 7)
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
