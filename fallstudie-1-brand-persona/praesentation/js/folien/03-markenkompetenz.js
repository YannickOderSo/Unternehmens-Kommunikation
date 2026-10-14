/* =============================================================================
   js/folien/03-markenkompetenz.js – Skript für Folie f03 „Markenkompetenz“
   -----------------------------------------------------------------------------
   Baut aus den Daten der Folie (<script type="application/json" class="daten">
   in folien/03-markenkompetenz.html):
     • den Titel „[Marke]: <rolle> mit <kernkompetenz>“
     • die Zeitleiste (Gründung + Meilensteine)
     • die drei Kennzahlen (zählen beim Klick hoch)
     • die Rollen-Leiste (Marktrolle markiert) und den Claim
   Inhalte ändern Sie NUR in den Daten der Folie – nicht hier.
   Alle Werte dort sind BEISPIELDATEN, bis das Recherche-Dossier vorliegt.
   ============================================================================= */
(function () {
  'use strict';

  /* Text in alle Elemente mit data-g2k="<schluessel>" schreiben (falls Wert vorhanden) */
  function textSetzen(folie, schluessel, wert) {
    if (wert === undefined || wert === null || wert === '') return;
    folie.querySelectorAll('[data-g2k="' + schluessel + '"]').forEach(function (el) {
      el.textContent = wert;
    });
  }

  Deck.registriere('f03', {
    einrichten: function (ctx) {
      var d = ctx.daten || {};
      var u = ctx.util;
      var folie = ctx.folie;

      /* ---- 1. Titel und Marktrolle ---- */
      textSetzen(folie, 'rolle', d.rolle);
      textSetzen(folie, 'kernkompetenz', d.kernkompetenz);

      /* ---- 2. Zeitleiste ----
         Aufbau: Jahr oben, Punkt auf der Linie, Text darunter.
         Erscheint beim Betreten: Linie zeichnet sich von links, die Ereignisse
         folgen gestaffelt (alle 110 ms), die Punkte federn herein. */
      var leiste = folie.querySelector('.g2k-zeitleiste');
      var ereignisse = Array.isArray(d.zeitleiste) ? d.zeitleiste : [];
      if (leiste && ereignisse.length) {
        leiste.textContent = '';
        leiste.style.setProperty('--g2k-anzahl', String(ereignisse.length));
        u.element('div', { class: 'g2k-linie', 'aria-hidden': 'true', 'data-animation': 'zeichnen', 'data-dauer': '900' }, null, leiste);
        var reihe = u.element('div', { class: 'g2k-ereignisse', role: 'list', 'aria-label': 'Zeitleiste der Markenhistorie',
          'data-staffel': '110', 'data-animation': 'hoch', 'data-verzoegerung': '200' }, null, leiste);
        ereignisse.forEach(function (e, i) {
          var item = u.element('div', { class: 'g2k-ereignis' + (i === 0 ? ' g2k-ereignis--start' : ''), role: 'listitem' }, null, reihe);
          u.element('span', { class: 'g2k-jahr' }, e.jahr, item);
          u.element('span', { class: 'g2k-punkt', 'aria-hidden': 'true', 'data-animation': 'feder', 'data-verzoegerung': '120' }, null, item);
          u.element('span', { class: 'g2k-text' }, e.text, item);
        });
      }

      /* ---- 3. Kennzahlen (Schritt 1) ----
         Die große Zahl zählt beim Erscheinen von 0 hoch (data-animation="zaehlen").
         Die Einheit steht daneben in einem eigenen Element, damit der Zähler sie
         nicht überschreibt. */
      var kz = folie.querySelector('.g2k-kennzahlen');
      var kennzahlen = Array.isArray(d.kennzahlen) ? d.kennzahlen.slice(0, 3) : [];
      if (kz && kennzahlen.length) {
        kz.textContent = '';
        kennzahlen.forEach(function (k) {
          var dez = parseInt(k.dezimalen, 10) || 0;
          var karte = u.element('div', { class: 'kennzahl karte karte--linie g2k-kennzahl' }, null, kz);
          var zeile = u.element('span', { class: 'g2k-kennzahl-zeile' }, null, karte);
          u.element('span', {
            class: 'kennzahl-wert',
            'data-animation': 'zaehlen',
            'data-ziel': String(k.wert),
            'data-dezimalen': String(dez),
            'data-dauer': '1300'
          }, u.zahlFormat(k.wert, dez), zeile);
          if (k.einheit) u.element('span', { class: 'g2k-einheit' }, k.einheit, zeile);
          u.element('span', { class: 'kennzahl-text g2k-kennzahl-text' }, k.text, karte);
          if (k.quelle) u.element('span', { class: 'g2k-kennzahl-quelle', 'data-meta': '' }, k.quelle, karte);
        });
      }

      /* ---- 4. Rollen-Leiste (Schritt 2) ----
         Alle Rollen als Punkte auf einer Linie, die gewählte Rolle ist gefüllt. */
      var rollenListe = folie.querySelector('.g2k-rollen');
      var rollen = Array.isArray(d.rollen) ? d.rollen : [];
      if (rollenListe && rollen.length) {
        rollenListe.textContent = '';
        rollenListe.style.setProperty('--g2k-rollen', String(rollen.length));
        rollen.forEach(function (r) {
          var gewaehlt = r === d.rolle;
          var li = u.element('li', { class: 'g2k-rolle-stufe' + (gewaehlt ? ' ist-gewaehlt' : '') }, null, rollenListe);
          u.element('span', { class: 'g2k-rolle-punkt', 'aria-hidden': 'true' }, null, li);
          u.element('span', { class: 'g2k-rolle-name' }, r, li);
          if (gewaehlt) li.setAttribute('aria-current', 'true');
        });
      }

      /* ---- 5. Claim / Selbstverständnis ---- */
      var claim = d.claim || {};
      if (claim.text) textSetzen(folie, 'claim', '„' + claim.text + '“');
      textSetzen(folie, 'claimQuelle', claim.quelle);
      var claimEl = folie.querySelector('.g2k-claim');
      if (claimEl) claimEl.classList.toggle('ist-platzhalter', claim.platzhalter !== false);
    }
  });
})();
