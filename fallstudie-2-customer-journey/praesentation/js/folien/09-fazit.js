/* =============================================================================
   js/folien/09-fazit.js – Folie 09 · Fazit, Videobotschaft, Fragen
   -----------------------------------------------------------------------------
   Gestaltungsplan 9.5 und 11.2 („Video-Schritt auf 09“). Angelegt am 03.11.2026
   im Workflow „fs2-bau“ (KI-Nachweis FS2, Eintrag 11 / Delegation D05),
   KI-gestützt; Prüfung durch die Gruppe offen.

   VIDEO (v01)
   • Quelle: video/gruender-video.mp4 (relativ, versioniert; veröffentlicht mit
     Zustimmung des Gründers, KI-Nachweis FS2 Nr. 18 – bis 03.11.2026 lag es
     ausgeschlossen in intern/). Das Skript bindet die Datei nur per Pfad ein
     (data-quelle): nicht vorladen (preload="none"), erst beim Betreten der
     Folie (Schritt davor) auf „auto“ und die Quelle setzen. Keine
     KI-Transkription, keine Zitate aus dem Video.
   • Klick 1 (Schritt 1, vorwärts) startet das Video mit Ton – der Klick zählt
     als Nutzergeste. Danach bleibt das letzte Bild stehen (Standard des Browsers).
     Rückwärts auf Schritt 1: kein Neustart, nur Standbild. Schritt 0, 2 und
     Verlassen der Folie: anhalten.
   • Rückfall (Klasse .ist-rueckfall am Bildschirm), zwei Texte (seit D08):
     – Standardtext aus index.html „Videobotschaft des Gründers – läuft in der
       Web-Präsentation“: IMMER in Aufnahme (?aufnahme, Prüfwerkzeug),
       Druck/PDF und Referentenfenster (dort darf kein zweiter Ton laufen;
       Exporte und Standbilder zeigen das Video nicht). Dort wird die Datei nie
       angefragt (nurRueckfall()).
     – Fehlertext „Videobotschaft des Gründers – lässt sich in diesem Browser
       nicht abspielen“: nur bei einem echten Abspielfehler – error-Ereignis des
       Videos (Datei fehlt, Browser ohne H.264) oder play() scheitert mit einem
       anderen Fehler als NotAllowedError (abspielfehler()).
   • Verweigert der Browser den Start mit Ton (Folie per F5 oder Adresse direkt
     auf Schritt 1 geöffnet, ohne Klick), erscheinen die Bedienelemente des
     Videos: einmal auf „Abspielen“ klicken.

   SPRUNGLISTE (Schritt 2): Knöpfe .p-sprung[data-ziel] springen per
   Deck.springe zur Backup-Folie (im Referentenfenster erst in der Fragerunde,
   wie in FS1).
   ============================================================================= */
(function () {
  'use strict';

  var folie = document.getElementById('f09');
  if (!folie || !window.Deck) return;
  var html = document.documentElement;
  var parameter = new URLSearchParams(location.search);
  var video = folie.querySelector('.e9-video');
  var schirm = folie.querySelector('.e9-schirm');
  var hinweis = folie.querySelector('.e9-rueckfall');
  var TEXT_FEHLER = 'Videobotschaft des Gründers – lässt sich in diesem Browser nicht abspielen';
  var gesetzt = false;
  var defekt = false;

  function nurRueckfall() {
    return parameter.has('aufnahme') || parameter.has('druck') || parameter.has('referent') ||
      html.classList.contains('aufnahme') || html.classList.contains('druckmodus') || html.classList.contains('referent');
  }
  /* Rückfall mit dem Standardtext aus index.html (Aufnahme, Druck, Referentenfenster) */
  function rueckfall() {
    defekt = true;
    if (schirm) schirm.classList.add('ist-rueckfall');
    try { if (video) video.pause(); } catch (e) { /* egal */ }
  }
  /* echter Abspielfehler: Rückfall mit Fehlertext (nie über nurRueckfall(), dort gibt es keine Quelle) */
  function abspielfehler() {
    if (hinweis) hinweis.textContent = TEXT_FEHLER;
    rueckfall();
  }
  function quelleSetzen() {
    if (!video || gesetzt || defekt || nurRueckfall()) return;
    gesetzt = true;
    video.addEventListener('error', abspielfehler);
    video.preload = 'auto';
    video.src = video.getAttribute('data-quelle');
  }
  function abspielen() {
    quelleSetzen();
    if (!video || defekt || nurRueckfall()) return;
    var versuch;
    try { versuch = video.play(); } catch (e) { abspielfehler(); return; }
    if (versuch && versuch.catch) {
      versuch.catch(function (fehler) {
        if (fehler && fehler.name === 'NotAllowedError') video.controls = true;   /* ohne Nutzergeste: von Hand starten */
        else if (fehler && fehler.name === 'AbortError') { /* Anhalten/Quellwechsel vor dem Start: kein Fehler */ }
        else abspielfehler();
      });
    }
  }
  function anhalten(zurueckspulen) {
    if (!video || !gesetzt) return;
    try {
      video.pause();
      if (zurueckspulen) video.currentTime = 0;
    } catch (e) { /* egal */ }
  }

  if (nurRueckfall()) rueckfall();

  Deck.registriere('f09', {
    betreten: function () { quelleSetzen(); },
    schritt: function (ctx, n, richtung) {
      if (ctx.druckmodus || ctx.referent) { rueckfall(); return; }
      if (n === 1 && richtung !== 'zurueck') abspielen();
      else if (n === 1) anhalten(false);
      else anhalten(n === 0);
    },
    verlassen: function () { anhalten(true); }
  });

  /* Sprungliste B1–B9 */
  Array.prototype.forEach.call(folie.querySelectorAll('.p-sprung[data-ziel]'), function (knopf) {
    knopf.addEventListener('click', function (e) {
      e.stopPropagation();
      knopf.blur();
      var ziel = knopf.getAttribute('data-ziel');
      if (Deck.springe) Deck.springe(ziel, 0); else Deck.gehe(ziel, 0);
    });
  });
})();
