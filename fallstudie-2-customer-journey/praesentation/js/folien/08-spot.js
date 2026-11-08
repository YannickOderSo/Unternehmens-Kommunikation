/* =============================================================================
   js/folien/08-spot.js – Folie 08 · Werbespot „Mein Moment.“ auf Knopfdruck
   -----------------------------------------------------------------------------
   Angelegt am 08.11.2026 (Finalisierung, KI-Nachweis FS2 Nr. 26 / Delegation
   D12, Entscheidung Yannick: „Auf Folie 08: ein kleiner Knopf ‚Spot ansehen'
   neben ‚Live-Demo', abspielbar in der Präsentation“), KI-gestützt; Prüfung
   durch die Gruppe offen. Gestaltung: css/folien/08-spot.css.

   DER SPOT
   ../werbevideo/holy-werbespot.mp4 (24,5 s, 1080 × 1920, H.264/AAC, mit Ton),
   Poster holy-werbespot-poster.jpg, Untertitel holy-werbespot.de.vtt – alles
   im Nachbarordner werbevideo/ (README dort). Studentisches Konzept der
   Gruppe, keine Werbung der HOLY Softdrinks GmbH; Stimme, Musik und Geräusche
   KI-generiert (ElevenLabs, KI-Nachweis FS2 Nr. 24 / D11). Pfade stehen am
   Knopf (data-spot-quelle, data-spot-poster, data-spot-untertitel).

   VERHALTEN
   • Knopf „Spot ansehen ▶“ (.e8-spot, erscheint mit Klick 2 neben „Live-Demo“)
     öffnet eine Bühne über der ganzen Präsentation (.spot-ebene, an <body>,
     also nicht in der Folie: nicht in Übersicht-Klonen, nicht im Druck) und
     startet den Spot mit Ton – der Klick ist die Nutzergeste. Erst jetzt
     werden Video, Poster und Untertitel angefragt (kein Vorladen, kein
     Autoplay beim Betreten der Folie).
   • Schließen: am Ende von selbst · Esc · jede Blättertaste (→ ← ↑ ↓, Bild↑,
     Bild↓, Enter, Rücktaste – also auch der Clicker) · Knopf „Schließen“ ·
     Klick neben das Video. Blättertasten schließen NUR die Bühne, die Folie
     bleibt auf Schritt 2 (die Tasten erreichen die Engine nicht). Danach
     blättern alle Tasten wieder normal.
   • Während die Bühne offen ist: Leertaste/K = Pause/weiter, U = Untertitel
     an/aus, F = Vollbild (wie sonst); alle übrigen Tasten (O, P, B, D, T,
     Ziffern …) sind gesperrt, damit nichts unter der Bühne passiert.
   • Im Vollbild (Taste F, Fullscreen-API) behält der Browser Esc vermutlich
     für sich: Der erste Esc beendet dann nur das Vollbild, der Spot läuft
     weiter (Modellwissen; im Headless-Test nicht prüfbar – Generalprobe). Im
     Vortrag deshalb Pfeiltaste/Clicker oder bis zum Ende.
   • Die Blättertasten schließen nur, solange das Präsentationsfenster den
     Fokus hat. Liegt er im Referentenfenster, schließt der Clicker die Bühne
     (Folienwechsel) und blättert zugleich auf 09.
   • Doppelklick auf den Knopf: Klicks auf die Fläche neben dem Video und ins
     Video zählen in den ersten 0,6 s nach dem Öffnen nicht (Nacharbeit D12) –
     sonst schlösse der zweite Klick die Bühne gleich wieder.
   • Fehler (Datei fehlt, Browser ohne H.264): Meldung in der Bühne, die
     Präsentation läuft weiter; schließen wie oben.
   • Verweigert der Browser den Start mit Ton (NotAllowedError), erscheinen
     die Bedienelemente des Videos: einmal „Abspielen“.
   • Verlassen der Folie 08 (z. B. Befehl aus dem Referentenfenster) schließt
     die Bühne.
   • Druck/PDF (?druck), Aufnahme des Prüfwerkzeugs (?aufnahme) und
     Referentenfenster (?referent): keine Bühne, der Knopf ist dort ohne
     Wirkung (im Druck und im Referentenfenster per CSS ausgeblendet).
   • Untertitel (<track>, standardmäßig aus; Knopf „Untertitel an“ oder U):
     über file:// (Doppelklick) verweigert Chromium das Laden einer
     Untertitel-Datei („unique security origin“, Konsolenfehler) – dort wird
     sie deshalb nicht angefragt und der Knopf ausgeblendet (Nacharbeit D12;
     vorher ausgegraut „Untertitel nur online“ – für das Publikum ohne Nutzen).
     Über GitHub Pages oder einen Server gehen sie. Scheitert das Laden
     trotzdem: „Untertitel nicht verfügbar“.
   ============================================================================= */
(function () {
  'use strict';

  var folie = document.getElementById('f08');
  var knopf = folie && folie.querySelector('.e8-spot');
  if (!folie || !knopf) return;
  var html = document.documentElement;
  var parameter = new URLSearchParams(location.search);

  var TEXT_FEHLER = 'Der Werbespot lässt sich in diesem Browser nicht abspielen (Datei fehlt oder Videoformat wird ' +
    'nicht unterstützt). Esc oder Pfeiltaste: zurück zur Präsentation.';
  var BLAETTERN = ['Escape', 'ArrowRight', 'ArrowDown', 'PageDown', 'ArrowLeft', 'ArrowUp', 'PageUp', 'Enter', 'Backspace'];

  function ohneSpot() {
    return parameter.has('druck') || parameter.has('aufnahme') || parameter.has('referent') ||
      html.classList.contains('druckmodus') || html.classList.contains('aufnahme') || html.classList.contains('referent');
  }
  if (ohneSpot()) {
    knopf.setAttribute('tabindex', '-1');
    knopf.setAttribute('aria-hidden', 'true');
    return;
  }

  var ebene = null, video = null, spur = null, meldung = null, zu = null, utKnopf = null;
  var offen = false, defekt = false, quelleGesetzt = false, untertitelDa = true;
  var geoeffnetUm = 0;
  var SPERRE_MS = 600;            /* Doppelklick auf den Knopf schließt die Bühne nicht gleich wieder */
  function frischGeoeffnet() { return Date.now() - geoeffnetUm < SPERRE_MS; }

  function element(tag, klasse, text, eltern) {
    var el = document.createElement(tag);
    if (klasse) el.className = klasse;
    if (text) el.textContent = text;
    if (eltern) eltern.appendChild(el);
    return el;
  }

  function bauen() {
    if (ebene) return;
    ebene = element('div', 'spot-ebene', null, document.body);
    ebene.hidden = true;
    ebene.setAttribute('role', 'dialog');
    ebene.setAttribute('aria-modal', 'true');
    ebene.setAttribute('aria-label', 'Werbespot „Mein Moment.“');
    var inhalt = element('div', 'spot-inhalt', null, ebene);
    var rahmen = element('div', 'spot-rahmen', null, inhalt);
    video = element('video', 'spot-video', null, rahmen);
    video.setAttribute('playsinline', '');
    video.preload = 'none';
    video.setAttribute('aria-label', 'Werbespot „Mein Moment.“, 24,5 Sekunden, mit Ton');
    meldung = element('p', 'spot-meldung', null, rahmen);
    meldung.hidden = true;
    meldung.setAttribute('role', 'alert');

    var text = element('div', 'spot-text', null, inhalt);
    element('p', 'spot-titel', 'Werbespot „Mein Moment.“', text);
    element('p', 'spot-dauer', '24,5 Sekunden · mit Ton', text);
    var kennz = element('p', 'spot-kennzeichnung', null, text);
    kennz.appendChild(document.createTextNode('Studentisches Konzept · keine Werbung der HOLY Softdrinks GmbH · '));
    element('span', 'spot-nobr', 'Stimme KI-generiert', kennz);   /* Wortlaut der Pflichtkennzeichnung (D12) */
    element('p', 'spot-nachweis', 'Konzept der Gruppe (HS Kaiserslautern) · Stimme, Musik und Geräusche KI-generiert ' +
      '(ElevenLabs) · Bilder: HOLY Softdrinks GmbH, ohne Genehmigung, nicht kommerziell', text);
    var knoepfe = element('div', 'spot-knoepfe', null, text);
    zu = element('button', 'spot-knopf spot-zu', 'Schließen ✕', knoepfe);
    zu.type = 'button';
    utKnopf = element('button', 'spot-knopf spot-ut', 'Untertitel an', knoepfe);
    utKnopf.type = 'button';
    /* Bedienhilfe nicht in der Bühne (richtet sich an die Vortragenden, nicht ans Publikum): LIESMICH §5, Notiz 08 */

    zu.addEventListener('click', function (e) { e.stopPropagation(); schliessen(); });
    utKnopf.addEventListener('click', function (e) { e.stopPropagation(); untertitelUmschalten(); });
    ebene.addEventListener('click', function (e) {
      if (frischGeoeffnet()) return;
      if (e.target === ebene || e.target === inhalt) schliessen();
    });
    video.addEventListener('click', function (e) {
      e.stopPropagation();
      if (frischGeoeffnet()) return;
      if (!video.controls) pauseUmschalten();
    });
    video.addEventListener('ended', function () { schliessen(); });
    video.addEventListener('error', function () { if (offen) fehler(); });
  }

  function quelleSetzen() {
    if (quelleGesetzt && !defekt) return;
    defekt = false;
    meldung.hidden = true;
    ebene.classList.remove('ist-fehler');
    video.controls = false;
    if (!quelleGesetzt) {
      video.poster = knopf.getAttribute('data-spot-poster') || '';
      var ut = knopf.getAttribute('data-spot-untertitel');
      if (ut && location.protocol === 'file:') {
        /* per Doppelklick (file://) verweigert Chromium die Untertitel-Datei („unique security origin“) und
           meldet einen Konsolenfehler – deshalb dort gar nicht erst anfragen */
        untertitelDa = false;
        utKnopf.hidden = true;      /* Hinweis „Untertitel nur online“ steht in LIESMICH §5 und in der Notiz 08 */
      } else if (ut) {
        spur = document.createElement('track');
        spur.kind = 'subtitles';
        spur.srclang = 'de';
        spur.label = 'Deutsch';
        spur.addEventListener('error', function () {
          untertitelDa = false;
          utKnopf.textContent = 'Untertitel nicht verfügbar';
          utKnopf.disabled = true;
        });
        spur.src = ut;
        video.appendChild(spur);
      } else {
        untertitelDa = false;
        utKnopf.hidden = true;
      }
    }
    quelleGesetzt = true;
    video.preload = 'auto';
    video.src = knopf.getAttribute('data-spot-quelle');
    video.load();
    untertitelAnzeigen(false);
  }

  function untertitelAnzeigen(an) {
    if (!video || !video.textTracks || !video.textTracks.length) return;
    video.textTracks[0].mode = an ? 'showing' : 'hidden';
    if (untertitelDa) utKnopf.textContent = an ? 'Untertitel aus' : 'Untertitel an';
  }
  function untertitelUmschalten() {
    if (!untertitelDa || !video.textTracks || !video.textTracks.length) return;
    untertitelAnzeigen(video.textTracks[0].mode !== 'showing');
  }

  function fehler() {
    defekt = true;
    try { video.pause(); } catch (e) { /* egal */ }
    meldung.textContent = TEXT_FEHLER;
    meldung.hidden = false;
    ebene.classList.add('ist-fehler');
    ebene.setAttribute('data-spot-zustand', 'fehler');
  }

  function abspielen() {
    var versuch;
    try { versuch = video.play(); } catch (e) { fehler(); return; }
    if (versuch && versuch.catch) {
      versuch.catch(function (f) {
        if (!offen) return;
        if (f && f.name === 'NotAllowedError') video.controls = true;     /* ohne Nutzergeste: von Hand starten */
        else if (f && f.name === 'AbortError') { /* Schließen vor dem Start: kein Fehler */ }
        else fehler();
      });
    }
  }
  function pauseUmschalten() {
    if (defekt) return;
    if (video.paused) abspielen(); else video.pause();
  }

  function oeffnen() {
    if (offen || ohneSpot()) return;
    bauen();
    offen = true;
    geoeffnetUm = Date.now();
    ebene.hidden = false;
    ebene.setAttribute('data-spot-zustand', 'offen');
    html.classList.add('spot-offen');
    quelleSetzen();
    try { video.currentTime = 0; } catch (e) { /* egal */ }
    abspielen();
    knopf.blur();
    try { zu.focus({ preventScroll: true }); } catch (e) { zu.focus(); }
  }

  function schliessen() {
    if (!offen) return;
    offen = false;
    try { video.pause(); video.currentTime = 0; } catch (e) { /* egal */ }
    video.controls = false;
    ebene.hidden = true;
    ebene.setAttribute('data-spot-zustand', 'zu');
    html.classList.remove('spot-offen');
    /* Fokus nicht auf dem Knopf lassen: sonst löste die nächste Leertaste den Spot erneut aus, statt zu blättern */
    if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
  }

  /* Tasten, solange die Bühne offen ist – vor der Engine (Erfassungsphase am window) */
  window.addEventListener('keydown', function (e) {
    if (!offen) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;            /* Browser-Kürzel nicht stören */
    var t = e.key;
    if (t === 'f' || t === 'F') return;                         /* Vollbild wie sonst (Engine) */
    e.preventDefault();
    e.stopImmediatePropagation();
    if (BLAETTERN.indexOf(t) >= 0) schliessen();
    else if (t === ' ' || t === 'k' || t === 'K') pauseUmschalten();
    else if (t === 'u' || t === 'U') untertitelUmschalten();
  }, true);

  knopf.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    oeffnen();
  });

  if (window.Deck && Deck.registriere) {
    Deck.registriere('f08', {
      verlassen: function () { schliessen(); },
      schritt: function (ctx, n) { if (n < 2) schliessen(); }
    });
  }

  /* für Prüfskripte und die Referentin, nicht für den Vortrag nötig */
  window.Spot = { oeffnen: oeffnen, schliessen: schliessen, istOffen: function () { return offen; } };
})();
