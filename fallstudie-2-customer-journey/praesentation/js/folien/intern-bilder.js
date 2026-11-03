/* =============================================================================
   js/folien/intern-bilder.js – Fassung mit Bildern: Fremdbilder einsetzen
   -----------------------------------------------------------------------------
   Angelegt am 03.11.2026 (KI-Nachweis FS2, Delegation D06, Schritt „Einbau
   Präsentation“), KI-gestützt; Prüfung durch die Gruppe offen. Umgestellt in
   D07 (03.11.2026) auf die veröffentlichten Fremdbilder.

   NAMEN AUS DER ZEIT VOR DER VERÖFFENTLICHUNG
   Dateiname intern-bilder.js, window.INTERN_BILDER, data-intern*, Klasse
   p-intern-logo und html[data-fassung="intern"] stammen aus der Zeit vor der
   Veröffentlichung (bis 03.11.2026 lagen die Bilder als „interne Fassung“ im
   ausgeschlossenen Ordner intern/). Sie bleiben aus technischen Gründen
   (Prüfwerkzeug, CSS, Konzept-Webseite); gemeint ist die Fassung mit Bildern.

   ZWEI ZUSTÄNDE AUS EINER index.html
   • Fassung mit Bildern (Standard: Repository, GitHub Pages, Hörsaal): Neben
     index.html liegt fremdbilder/register.js (setzt window.INTERN_BILDER =
     { schlüssel: { datei, alt, nachweis, pixel, … } }) mit den Dateien in
     fremdbilder/. Veröffentlichung von der Gruppe beschlossen (KI-Nachweis
     FS2 Nr. 17), keine Genehmigung der Rechteinhaber eingeholt; nicht
     kommerziell, für die Lehrveranstaltung; keine eigenen Fotos der Gruppe.
   • Rückfall ohne Fremdbilder: fremdbilder/register.js fehlt (oder Schalter
     ?kacheln=rueckfall). Dann tut dieses Skript nichts: Platzhalter und
     Rückfälle bleiben, wie sie sind, es entsteht kein <img> und damit kein
     kaputtes Bild-Symbol. intern/ enthält nur noch Rohmaterial (intern/roh/,
     ausgeschlossen) und wird von der Präsentation nicht geladen.

   WAS DAS SKRIPT TUT (vor dem Start der Engine, also vor DOMContentLoaded)
   Jedes Element mit data-intern="<schlüssel>":
     • Bildkachel (.p-kachel): <img> mit alt, width/height (Dateigröße) als
       erstes Kind einsetzen, data-status → "frei"; der alte Zustand steht in
       data-status-oeffentlich. Nachweis als data-nachweis an der Kachel.
     • <img> (Folie 08): src und alt tauschen; das Bild aus bilder/ (Rückfall
       ohne Fremdbilder) steht in data-oeffentlich-src (Name historisch) und
       kommt zurück, wenn die Datei in fremdbilder/ fehlt.
     • sonst (Logo-Platz, z. B. .e7-marke auf Folie 07): <img> als erstes Kind
       einsetzen; CSS blendet den Text daneben aus (data-intern-status).
   Jedes Element erhält data-intern-status: "gesetzt" (eingesetzt), "fehler"
   (Datei fehlt → Zustand ohne Bild zurück, kein kaputtes Bild) oder "fehlt"
   (Schlüssel nicht in register.js). data-intern-optional: Fehlen ist erlaubt
   (Folie 08: dann bleiben die Bildschirmfotos ohne fremde Bilder aus bilder/).
   Je Folie: die Bildnachweis-Zeile <p class="p-bildquelle" hidden> wird nur
   sichtbar, solange mindestens ein Fremdbild dieser Folie eingesetzt ist;
   in den Notizen (Referentenansicht) steht dann der volle Nachweis je Bild.

   SCHALTER
   • ?kacheln=rueckfall – Rückfall ohne Fremdbilder erzwingen, auch wenn
     fremdbilder/register.js da ist (pfad.js, Abschnitt 4).
   • ?aufnahme (Prüfwerkzeug) und ?druck (Notfall-PDF) zeigen die Fremdbilder
     wie der Vortrag. Den Rückfall prüft pruefen.mjs --oeffentlich (sperrt
     fremdbilder/ per Route) – LIESMICH §12.
   ============================================================================= */
(function () {
  'use strict';

  var html = document.documentElement;
  var BILDER = window.INTERN_BILDER;
  var parameter = new URLSearchParams(location.search);

  /* data-fassung (Werte historisch): "intern" = Fassung mit Bildern · "oeffentlich" = Rückfall ohne Fremdbilder
     (register.js fehlt) · "oeffentlich-ansicht" = Rückfall per Schalter ?kacheln=rueckfall */
  if (!BILDER || typeof BILDER !== 'object') { html.setAttribute('data-fassung', 'oeffentlich'); return; }
  if (parameter.get('kacheln') === 'rueckfall') { html.setAttribute('data-fassung', 'oeffentlich-ansicht'); return; }
  html.setAttribute('data-fassung', 'intern');

  function alle(sel, wurzel) { return Array.prototype.slice.call((wurzel || document).querySelectorAll(sel)); }
  /* „1080 × 1049“ → [1080, 1049] */
  function masse(pixel) {
    var m = /(\d+)\s*[×x]\s*(\d+)/.exec(String(pixel || ''));
    return m ? [+m[1], +m[2]] : null;
  }
  function bildErzeugen(eintrag, schluessel) {
    var img = document.createElement('img');
    img.alt = eintrag.alt || '';
    var m = masse(eintrag.pixel);
    if (m) { img.width = m[0]; img.height = m[1]; }
    img.setAttribute('data-intern-bild', schluessel);
    return img;
  }

  /* Bildnachweis je Folie: Zeile auf der Folie ein/aus, Notizabsatz neu schreiben */
  function folieAktualisieren(folie) {
    if (!folie) return;
    var gesetzt = alle('[data-intern-status="gesetzt"]', folie);
    var zeile = folie.querySelector(':scope > .p-bildquelle');
    if (zeile) zeile.hidden = !gesetzt.length;
    var notizen = folie.querySelector(':scope > .notizen');
    if (!notizen) return;
    var absatz = notizen.querySelector(':scope > .p-intern-nachweis');
    if (!gesetzt.length) { if (absatz) absatz.remove(); return; }
    var liste = [];
    gesetzt.forEach(function (el) {
      var e = BILDER[el.getAttribute('data-intern')] || {};
      if (e.nachweis && liste.indexOf(e.nachweis) < 0) liste.push(e.nachweis);
    });
    if (!absatz) {
      absatz = document.createElement('p');
      absatz.className = 'p-intern-nachweis';
      notizen.appendChild(absatz);
    }
    absatz.textContent = 'Bildnachweis (Fremdbilder; Veröffentlichung von der Gruppe beschlossen, KI-Nachweis FS2 Nr. 17, ' +
      'keine Genehmigung der Rechteinhaber eingeholt; keine eigenen Fotos der Gruppe): ' +
      liste.join(' | ');
  }

  var folien = [];
  alle('[data-intern]').forEach(function (el) {
    var schluessel = el.getAttribute('data-intern');
    var eintrag = BILDER[schluessel];
    var folie = el.closest('section.folie');
    if (folie && folien.indexOf(folie) < 0) folien.push(folie);
    if (!eintrag || !eintrag.datei) { el.setAttribute('data-intern-status', 'fehlt'); return; }

    function fehlgeschlagen() {
      el.setAttribute('data-intern-status', 'fehler');
      folieAktualisieren(folie);
    }

    if (el.tagName === 'IMG') {
      /* Folie 08: Bild aus bilder/ tauschen, bei Fehler zurück */
      var src0 = el.getAttribute('src') || '', alt0 = el.getAttribute('alt') || '';
      var w0 = el.getAttribute('width'), h0 = el.getAttribute('height');
      el.setAttribute('data-oeffentlich-src', src0);
      el.addEventListener('error', function zurueck() {
        el.removeEventListener('error', zurueck);
        el.setAttribute('src', src0);
        el.setAttribute('alt', alt0);
        if (w0) el.setAttribute('width', w0); else el.removeAttribute('width');
        if (h0) el.setAttribute('height', h0); else el.removeAttribute('height');
        el.removeAttribute('data-nachweis');
        fehlgeschlagen();
      });
      var m = masse(eintrag.pixel);
      if (m) { el.setAttribute('width', m[0]); el.setAttribute('height', m[1]); }
      el.setAttribute('alt', eintrag.alt || alt0);
      el.setAttribute('data-nachweis', eintrag.nachweis || '');
      el.setAttribute('data-intern-status', 'gesetzt');
      el.setAttribute('src', eintrag.datei);
      return;
    }

    var img = bildErzeugen(eintrag, schluessel);
    if (el.classList.contains('p-kachel')) {
      var vorher = el.getAttribute('data-status') || 'offen';
      el.setAttribute('data-status-oeffentlich', vorher);
      img.addEventListener('error', function () {
        img.remove();
        el.setAttribute('data-status', vorher);
        el.removeAttribute('data-nachweis');
        fehlgeschlagen();
      });
      el.insertBefore(img, el.firstChild);
      el.setAttribute('data-status', 'frei');
    } else {
      img.className = 'p-intern-logo';
      img.addEventListener('error', function () { img.remove(); fehlgeschlagen(); });
      el.insertBefore(img, el.firstChild);
    }
    el.setAttribute('data-nachweis', eintrag.nachweis || '');
    el.setAttribute('data-intern-status', 'gesetzt');
    img.src = eintrag.datei;
  });
  folien.forEach(folieAktualisieren);
})();
