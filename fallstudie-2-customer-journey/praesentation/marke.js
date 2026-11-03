/* =============================================================================
   marke.js – ALLES, WAS SICH MIT DER MARKE ÄNDERT, STEHT HIER
   -----------------------------------------------------------------------------
   Fallstudie 2 „Customer Journey“ · Marke HOLY (Gruppe, 13.10.2026) · Thema „Pfad“
   (gestaltungsplan.md, Abschnitt 3 und 11.2). Angelegt am 03.11.2026 im Workflow
   „fs2-bau“ (KI-Nachweis FS2, Eintrag 11 / Delegation D05), KI-gestützt;
   Prüfung durch die Gruppe offen. Nach jeder Änderung index.html neu laden (F5).

   Regeln
   • Texte stehen in Anführungszeichen '…'. Ein Apostroph im Text: \' schreiben.
   • Leere Angabe '' = kein Wert (z. B. kein Logo).
   • Nach dem Ändern prüfen: Seite neu laden, Konsole (F12) muss leer sein.
   ============================================================================= */
window.MARKE = {
  /* 1. MARKENNAME – ersetzt <span data-marke></span> */
  name: 'HOLY',
  kurz: 'HOLY',

  /* 2. MARKENFARBEN (Gestaltungsplan 3.2, R3): Gelb #FFD007 = HOLY „CTA yellow“
     (Dossier FS2 ✎ G06), Schwarz #1D1D1B = Logo- und Druck-Schwarz (✔ G07).
     Hinweis: Das Thema „Pfad“ (css/folien/pfad.css) setzt alle Farben fest und
     überschreibt die Berechnung aus tokens.css – sonst würde das Gelb wieder zu
     Ocker gedeckelt (✔ G13). Die Werte hier sind deshalb nur noch die Angabe
     für den Farbwähler der Bedienleiste. */
  farben: {
    primaer: '#FFD007',
    sekundaer: '#1D1D1B'
  },

  /* 3. BILDER – kein HOLY-Logo (Gestaltungsplan 3.7 und 11.2: „logo leer“) */
  logo: '',
  logoTitel: '',
  raetselBild: '',

  /* 4. ANGABEN ZUR PRÄSENTATION */
  titel: 'Customer Journey',
  fallstudie: 'Fallstudie 2',
  veranstaltung: 'Unternehmenskommunikation',
  dozent: 'Prof. Dr. Daniel Stenger',
  hochschule: 'Hochschule Kaiserslautern',
  unternehmen: 'HOLY Softdrinks GmbH',
  gruppe: ['Yannick Heisler', 'Elias Knauber', 'Lukas Welker'],
  datum: '2026-11-10',            // Jahr-Monat-Tag (Vortrag Di, 10.11.2026 laut Aufgabenfolie)
  dauerMinuten: 15,               // Rahmen laut Aufgabe; Sollzeit der Folien 11:50 + 0:40 Reserve (data-zeit)
  anrede: 'Sie',                  // Publikum wird gesiezt (Gestaltungsplan 1.2)

  /* 5. KEINE Live-Umfrage, keine Wortwolke (Gestaltungsplan 3.7: keine Abstimmung per QR,
     keine Stimmenzählung über Tasten) */
  umfragen: {},
  wortwolken: {},
  optionaleFolien: {},

  /* 6. KENNZEICHNUNG – keine Beispieldaten-Pillen (3.7: keine Pillen). Offene eigene
     Daten stehen auf den Folien als „offen: …“ mit data-status="offen". */
  beispieldatenHinweis: false,

  /* 7. START – Thema der Engine bleibt „editorial“; das Aussehen kommt in allen
     Themen aus css/folien/pfad.css. Hell ist Standard (3.3: Streulicht am Beamer). */
  standardThema: 'editorial',
  standardModus: 'hell'
};
