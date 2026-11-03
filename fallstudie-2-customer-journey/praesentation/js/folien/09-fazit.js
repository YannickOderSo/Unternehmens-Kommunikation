/* =============================================================================
   js/folien/09-fazit.js – Folie 09 · Fazit, Videobotschaft, Fragen
   -----------------------------------------------------------------------------
   Gestaltungsplan 9.5 und 11.2 („Video-Schritt auf 09“). Angelegt am 03.11.2026
   im Workflow „fs2-bau“ (KI-Nachweis FS2, Eintrag 11 / Delegation D05),
   KI-gestützt; Prüfung durch die Gruppe offen.

   VIDEO (v01)
   • Quelle: intern/gruender-video.mp4 (relativ, per .gitignore ausgeschlossen,
     nur in der internen Fassung vorhanden). Das Skript bindet die Datei nur per
     Pfad ein: nicht vorladen (preload="none"), erst beim Betreten der Folie
     (Schritt davor) auf „auto“ und die Quelle setzen.
   • Klick 1 (Schritt 1, vorwärts) startet das Video mit Ton – der Klick zählt
     als Nutzergeste. Danach bleibt das letzte Bild stehen (Standard des Browsers).
     Rückwärts auf Schritt 1: kein Neustart, nur Standbild. Schritt 0, 2 und
     Verlassen der Folie: anhalten.
   • Rückfall „Videobotschaft des Gründers – nur im Vortrag“ (Klasse
     .ist-rueckfall am Bildschirm), wenn die Datei fehlt oder nicht abspielbar
     ist, und IMMER in Aufnahme, Druck/PDF und Referentenfenster (dort darf kein
     zweiter Ton laufen; Exporte zeigen den Gründer nicht).
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
  var gesetzt = false;
  var defekt = false;

  function nurRueckfall() {
    return parameter.has('aufnahme') || parameter.has('druck') || parameter.has('referent') ||
      html.classList.contains('aufnahme') || html.classList.contains('druckmodus') || html.classList.contains('referent');
  }
  function rueckfall() {
    defekt = true;
    if (schirm) schirm.classList.add('ist-rueckfall');
    try { if (video) video.pause(); } catch (e) { /* egal */ }
  }
  function quelleSetzen() {
    if (!video || gesetzt || defekt || nurRueckfall()) return;
    gesetzt = true;
    video.addEventListener('error', rueckfall);
    video.preload = 'auto';
    video.src = video.getAttribute('data-quelle');
  }
  function abspielen() {
    quelleSetzen();
    if (!video || defekt || nurRueckfall()) return;
    var versuch;
    try { versuch = video.play(); } catch (e) { rueckfall(); return; }
    if (versuch && versuch.catch) {
      versuch.catch(function (fehler) {
        if (fehler && fehler.name === 'NotAllowedError') video.controls = true;   /* ohne Nutzergeste: von Hand starten */
        else rueckfall();
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
