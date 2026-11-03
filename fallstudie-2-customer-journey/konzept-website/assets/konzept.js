/* ==========================================================================
   Konzept-Webseite HOLY (studentisches Konzept, Fallstudie 2) – gemeinsames Skript
   - sendet nichts, speichert nichts (kein localStorage, keine Cookies, keine Anfragen)
   - liest nur Parameter aus der Adresse:
       ?code=…          Creator-Code aus dem Video; nur Beispielcodes aus BEISPIELCODES, alles andere wird ignoriert
                        (öffentliche Seite: niemand soll beliebige „Codes“ in die Seite schreiben können, Abnahme D05)
       ?packung=…       set | 1 | 10 | 50 (Produktseite → Warenkorb → Danke-Seite)
       ?anmerkungen=1   Präsentationsmodus: nummerierte Anmerkungs-Marker „was wir ändern und warum“
   - reicht code und anmerkungen an alle internen Links weiter, damit die Strecke im Vortrag durchklickbar bleibt
   - Fassung mit Bildern (Standard: Repository, GitHub Pages, Hörsaal): fremdbilder/register.js setzt
     window.INTERN_BILDER; Elemente mit data-intern="schlüssel" bekommen ein Bild aus fremdbilder/ samt Bildnachweis.
     Die Bilder sind veröffentlicht mit Freigabe (KI-Nachweis FS2 Nr. 17), nicht kommerziell, für die Lehrveranstaltung;
     keine eigenen Fotos der Gruppe. Fehlt register.js, bleibt der Rückfall ohne Fremdbilder: Platzhalter und eigene
     Zeichnungen (Abschnitt „Fremdbilder“). Die Namen INTERN_BILDER, data-intern*, intern-bild stammen aus der Zeit vor
     der Freigabe und bleiben aus technischen Gründen.
   Daten: Preise und Mengen aus dem Recherche-Dossier FS2 (Befund-IDs in den Kommentaren), alles andere Beispielwert.
   ========================================================================== */
(function () {
  'use strict';

  var params = new URLSearchParams(window.location.search);
  var ANMERKUNGEN = params.get('anmerkungen') === '1';
  /* Nur diese Beispielcodes werden aus der Adresse übernommen (keine echten HOLY-Codes) */
  var BEISPIELCODES = ['CREATOR10', 'MARCO10'];
  var codeAusAdresse = bereinigeCode(params.get('code'));
  if (BEISPIELCODES.indexOf(codeAusAdresse) < 0) codeAusAdresse = '';
  /* Beispielcode, wenn niemand über einen Creator-Link kommt (Beispielwert, kein echter Code) */
  var CODE = codeAusAdresse || 'CREATOR10';
  /* Rabatt des Creator-Codes: Beispielwert (die Höhe echter Creator-Codes steht nicht im Dossier) */
  var CODE_RABATT = 0.10;

  /* Lieferdatum: Beispielwert für den Vortrag am Di 10.11.2026 (ein Datum statt „1–3“ oder „3–6 Werktage“,
     Befund ✔ B91; Vorbild ~ X11, ✔ X12). 12.11.2026 ist ein Donnerstag. */
  var LIEFERTAG = new Date(2026, 10, 12);

  /* Packungen. Preise: HOLY-Shop, abgerufen 30.10.2026 – ✔ B09 (1, 10, 50 Portionen Raspberry Raptor),
     ✔ T20 (Starter Set: 24,99 €, 14 Drinks, mit Shaker und Gratisversand). Portion = 7 g (Etikett, ✔ S92).
     Grundpreis (✔ R98) gerechnet aus 7 g je Portion; Nettofüllmenge vor Veröffentlichung am Etikett prüfen.
     shaker: ob die Seite für diese Packung einen Shaker nennt – Starter Set „14 Drinks + Shaker“ (✔ T20), 50er-Dose
     „Shaker gratis zur ersten Dose“ (✔ T22: „Einen kostenlosen Shaker beim Kauf deiner ersten Dose“; Shop-Variante
     „50 Portionen mit gratis Shaker“, Quelle in fremdbilder/register.js). 10 Portionen sind eine Sachet-Box (Packshot der
     Shop-Variante „10 Portionen“, Quelle web-packung-10 in fremdbilder/register.js), für sie und 1 Portion nennt die Seite
     keinen Shaker. Danach richten sich Bild und Überschrift „Shaker auspacken“ auf der Danke-Seite. */
  var PACKUNGEN = {
    set: { name: 'Starter Set Energy', zusatz: '14 Drinks + Shaker, Gratisversand', preis: 24.99, portionen: 14, gramm: null, versandfrei: true, einheit: 'Drink', shaker: true },
    '1': { name: 'Raspberry Raptor · 1 Portion', zusatz: 'zum Probieren', preis: 1.99, portionen: 1, gramm: 7, versandfrei: false, einheit: 'Portion', shaker: false },
    '10': { name: 'Raspberry Raptor · 10 Portionen', zusatz: 'Sachet-Box', preis: 12.49, portionen: 10, gramm: 70, versandfrei: false, einheit: 'Portion', shaker: false },
    '50': { name: 'Raspberry Raptor · 50 Portionen', zusatz: 'Vorratsdose, Shaker gratis zur ersten Dose', preis: 39.99, portionen: 50, gramm: 350, versandfrei: false, einheit: 'Portion', shaker: true }
  };
  /* Versand DE: 4,99 €, versandkostenfrei ab 49 € (✔ B12) */
  var VERSAND = 4.99;
  var VERSANDFREI_AB = 49;

  var TAGE = ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'];

  function bereinigeCode(s) {
    if (!s) return '';
    return String(s).toUpperCase().replace(/[^A-Z0-9-]/g, '').slice(0, 20);
  }
  function euro(n) { return n.toFixed(2).replace('.', ',') + ' €'; }
  /* kaufmännisch auf Cent runden; der Zwischenschritt fängt Gleitkomma-Reste ab (24,99 € / 14 = 1,785 → 1,79 €) */
  function runde(n) { return Math.round(Math.round(n * 1e6) / 1e4) / 100; }
  function datum(d) {
    return TAGE[d.getDay()] + ', ' + String(d.getDate()).padStart(2, '0') + '.' + String(d.getMonth() + 1).padStart(2, '0') + '.';
  }
  function plusTage(d, n) { var x = new Date(d.getTime()); x.setDate(x.getDate() + n); return x; }
  function setzeText(sel, text, wurzel) {
    (wurzel || document).querySelectorAll(sel).forEach(function (el) { el.textContent = text; });
  }
  function packungAusAdresse() {
    var p = params.get('packung');
    return Object.prototype.hasOwnProperty.call(PACKUNGEN, p) ? p : 'set';
  }
  function grundText(d) {
    return d.gramm ? 'Grundpreis ' + euro(runde(d.preis / (d.gramm / 1000))) + ' / kg (aus 7 g je Portion gerechnet)' : 'Grundpreis offen: Füllmenge des Sets noch nicht belegt';
  }
  function versandFuer(p, zwischensumme) {
    if (PACKUNGEN[p].versandfrei) return 0;
    return zwischensumme >= VERSANDFREI_AB ? 0 : VERSAND;
  }

  /* ---------- Code anzeigen (alle Seiten) ---------- */
  setzeText('[data-code]', CODE);
  document.querySelectorAll('[data-nur-beispielcode]').forEach(function (el) { el.hidden = !!codeAusAdresse; });
  document.querySelectorAll('[data-nur-creatorcode]').forEach(function (el) { el.hidden = !codeAusAdresse; });

  /* ---------- Interne Links: code, anmerkungen (und wo markiert: packung) weiterreichen ---------- */
  function ergaenzeLink(a, extra) {
    var href = a.getAttribute('href');
    if (!href || /^(https?:|mailto:|tel:|data:|javascript:)/i.test(href)) return;
    if (href.charAt(0) === '#') return;
    var hashPos = href.indexOf('#');
    var hash = hashPos >= 0 ? href.slice(hashPos) : '';
    var ohneHash = hashPos >= 0 ? href.slice(0, hashPos) : href;
    var qPos = ohneHash.indexOf('?');
    var pfad = qPos >= 0 ? ohneHash.slice(0, qPos) : ohneHash;
    var q = new URLSearchParams(qPos >= 0 ? ohneHash.slice(qPos + 1) : '');
    if (codeAusAdresse && !q.has('code')) q.set('code', codeAusAdresse);
    if (ANMERKUNGEN && !q.has('anmerkungen') && !a.hasAttribute('data-ohne-anmerkungen')) q.set('anmerkungen', '1');
    Object.keys(extra || {}).forEach(function (k) { if (!q.has(k)) q.set(k, extra[k]); });
    var qs = q.toString();
    /* leerer Pfad (z. B. href="?") meint die aktuelle Seite; ohne Dateinamen bliebe die alte Adresse samt Parametern */
    if (!pfad) pfad = window.location.pathname.split('/').pop() || 'index.html';
    a.setAttribute('href', pfad + (qs ? '?' + qs : '') + hash);
  }
  document.querySelectorAll('a[href]').forEach(function (a) {
    ergaenzeLink(a, a.hasAttribute('data-mit-packung') ? { packung: packungAusAdresse() } : null);
  });

  /* ---------- Fremdbilder (Fassung mit Bildern, veröffentlicht mit Freigabe, KI-Nachweis FS2 Nr. 17) ----------
     fremdbilder/register.js setzt window.INTERN_BILDER = { schlüssel: { datei, alt, nachweis, unterschrift, motiv, pixel, … } }.
     Bildplatz = Element mit data-intern="schlüssel" („{packung}“ wird durch die Packung aus der Adresse ersetzt; gibt es
     den Schlüssel für diese Packung nicht, bleibt der Platz ausgeblendet).
     Das Bild kommt in das Kind .bildplatz (sonst in den Bildplatz selbst); Bildplatz, .bildplatz und Vorfahren mit
     data-intern-gruppe verlieren dabei ihr hidden, der Bildplatz bekommt .mit-bild (CSS blendet .nur-ohne-bild aus).
     data-intern-deko: alt="" (Bild in einem Knopf oder Link, dessen Text dasselbe sagt).
     [data-intern-nachweis] im Bildplatz zeigt die kurze Bildunterschrift (unterschrift, sonst nachweis); im Fuß stehen
     alle Nachweise der Seite mit Motiv davor, gleiche Nachweise zusammengefasst ([data-nur-intern], [data-intern-liste]).
     Lädt ein Bild nicht, wird alles zurückgesetzt: Platzhalter statt kaputtem Bild-Symbol. Ohne fremdbilder/register.js
     passiert nichts (Rückfall ohne Fremdbilder). Nur Dateien aus fremdbilder/ werden angenommen. */
  var BILDER = (window.INTERN_BILDER && typeof window.INTERN_BILDER === 'object') ? window.INTERN_BILDER : null;
  function bildEintrag(schluessel) {
    if (!BILDER || !schluessel || !Object.prototype.hasOwnProperty.call(BILDER, schluessel)) return null;
    var e = BILDER[schluessel];
    return (e && typeof e.datei === 'string' && /^fremdbilder\/[\w.-]+\.(jpe?g|png|webp)$/i.test(e.datei)) ? e : null;
  }
  function setzeBild(img, e, deko) {
    var m = /(\d+)\s*[×x]\s*(\d+)/.exec(String(e.pixel || ''));
    if (m) { img.width = Number(m[1]); img.height = Number(m[2]); }
    img.alt = deko ? '' : String(e.alt || '');
    img.src = e.datei;
  }
  function unterschrift(e) { return String(e.unterschrift || e.nachweis || ''); }
  /* Motive mit gleichem Nachweis sammeln: gemeinsamer Wortanfang einmal, Rest mit „ / “
     („Packshot 50 Portionen“, „Packshot 10 Portionen“ → „Packshot 50 Portionen / 10 Portionen“) */
  function motivText(motive) {
    if (motive.length < 2) return motive[0] || '';
    var woerter = motive.map(function (m) { return m.split(' '); });
    var n = 0;
    while (woerter.every(function (w) { return w.length > n + 1 && w[n] === woerter[0][n]; })) n++;
    if (!n) return motive.join(' / ');
    return woerter[0].slice(0, n).join(' ') + ' ' + woerter.map(function (w) { return w.slice(n).join(' '); }).join(' / ');
  }
  function zeigeBildnachweise() {
    var gruppen = [];
    document.querySelectorAll('[data-intern].mit-bild').forEach(function (platz) {
      var e = bildEintrag(platz.getAttribute('data-intern-aktiv'));
      if (!e || !e.nachweis) return;
      var g = gruppen.filter(function (x) { return x.nachweis === String(e.nachweis); })[0];
      if (!g) { g = { nachweis: String(e.nachweis), motive: [] }; gruppen.push(g); }
      var motiv = String(e.motiv || '').trim();
      if (motiv && g.motive.indexOf(motiv) < 0) g.motive.push(motiv);
    });
    var an = gruppen.length > 0;
    document.documentElement.classList.toggle('intern-bilder', an);
    document.querySelectorAll('[data-nur-intern]').forEach(function (el) { el.hidden = !an; });
    document.querySelectorAll('[data-nur-oeffentlich]').forEach(function (el) { el.hidden = an; });
    document.querySelectorAll('[data-intern-liste]').forEach(function (ul) {
      ul.textContent = '';
      gruppen.forEach(function (g) {
        var li = document.createElement('li');
        var m = motivText(g.motive);
        if (m) { var b = document.createElement('b'); b.textContent = m + ': '; li.appendChild(b); }
        li.appendChild(document.createTextNode(g.nachweis));
        ul.appendChild(li);
      });
    });
  }
  function bauBildEin(platz) {
    var schluessel = platz.getAttribute('data-intern').replace('{packung}', packungAusAdresse());
    var e = bildEintrag(schluessel);
    if (!e) return;
    var ziel = platz.querySelector('.bildplatz') || platz;
    var vorher = { platz: platz.hidden, ziel: ziel.hidden };
    var gruppen = [];
    for (var g = platz.parentElement; g; g = g.parentElement) {
      if (g.hasAttribute('data-intern-gruppe')) gruppen.push({ el: g, hidden: g.hidden });
    }
    platz.hidden = false;
    ziel.hidden = false;
    gruppen.forEach(function (x) { x.el.hidden = false; x.el.classList.add('hat-intern-bild'); });
    platz.classList.add('mit-bild');
    platz.setAttribute('data-intern-aktiv', schluessel);
    var nachweis = platz.querySelector('[data-intern-nachweis]');
    var nachweisVorher = nachweis ? nachweis.textContent : '';
    if (nachweis) nachweis.textContent = unterschrift(e);

    var img = document.createElement('img');
    img.className = 'intern-bild';
    img.decoding = 'async';
    /* erster Bildschirm sofort laden, alles darunter erst beim Scrollen */
    if (ziel.getBoundingClientRect().top > window.innerHeight) img.loading = 'lazy';
    img.addEventListener('error', function () {
      if (img.parentNode) img.parentNode.removeChild(img);
      platz.classList.remove('mit-bild');
      platz.removeAttribute('data-intern-aktiv');
      platz.hidden = vorher.platz;
      ziel.hidden = vorher.ziel;
      if (nachweis) nachweis.textContent = nachweisVorher;
      gruppen.forEach(function (x) {
        if (!x.el.querySelector('.mit-bild')) { x.el.hidden = x.hidden; x.el.classList.remove('hat-intern-bild'); }
      });
      /* ohne großes Produktbild hat die Galerie nichts zu tauschen: mit ausblenden (Platzhalter wie im Rückfall) */
      if (platz.hasAttribute('data-intern-held')) {
        document.querySelectorAll('[data-intern-galerie]').forEach(function (gal) {
          gal.hidden = true;
          gal.querySelectorAll('[data-intern].mit-bild').forEach(function (x) { x.classList.remove('mit-bild'); });
        });
      }
      zeigeBildnachweise();
    });
    setzeBild(img, e, platz.hasAttribute('data-intern-deko'));
    ziel.appendChild(img);
  }
  if (BILDER) document.querySelectorAll('[data-intern]').forEach(bauBildEin);
  zeigeBildnachweise();

  /* Produktseite: großes Bild und kleine Galerie (ändert nur die Anzeige).
     Solange niemand in der Galerie geklickt hat, folgt das große Bild der gewählten Packung
     (web-produkt-gross-set / -50 / -10 / -1, Abnahme D06); danach zeigt es das angeklickte Galeriebild. */
  var held = document.querySelector('[data-intern-held].mit-bild');
  var heldBild = held && held.querySelector('img');
  var heldFolgtPackung = null;
  if (heldBild) {
    var daumen = Array.prototype.slice.call(document.querySelectorAll('[data-intern-galerie] button[data-intern].mit-bild'));
    var galerieGeklickt = false;
    var zeigeGross = function (schluessel, knopf) {
      var e = bildEintrag(schluessel);
      if (!e || !heldBild.parentNode) return;
      heldBild.loading = 'eager';
      setzeBild(heldBild, e, false);
      held.setAttribute('data-intern-aktiv', schluessel);
      var n = held.querySelector('[data-intern-nachweis]');
      if (n) n.textContent = unterschrift(e);
      /* gedrückt ist das Galeriebild mit derselben Datei (z. B. 50er-Dose), sonst keines */
      daumen.forEach(function (x) {
        var xe = bildEintrag(x.getAttribute('data-intern-aktiv'));
        var an = knopf ? x === knopf : !!(xe && xe.datei === e.datei);
        x.setAttribute('aria-pressed', an ? 'true' : 'false');
      });
      zeigeBildnachweise();
    };
    daumen.forEach(function (b) {
      b.addEventListener('click', function () {
        galerieGeklickt = true;
        zeigeGross(b.getAttribute('data-intern-aktiv'), b);
      });
    });
    heldFolgtPackung = function (wahl) {
      if (!galerieGeklickt) zeigeGross('web-produkt-gross-' + wahl, null);
    };
  }

  /* ---------- Produktseite: Packung wählen (ändert nur die Anzeige) ---------- */
  var optionen = document.querySelectorAll('.option[data-packung]');
  if (optionen.length) {
    var warenkorbLinks = document.querySelectorAll('[data-warenkorb-link]');
    var waehle = function (wahl) {
      var w = PACKUNGEN[wahl];
      optionen.forEach(function (o) { o.setAttribute('aria-checked', o.getAttribute('data-packung') === wahl ? 'true' : 'false'); });
      var vs = versandFuer(wahl, w.preis);
      setzeText('[data-p-name]', w.name);
      setzeText('[data-p-preis]', euro(w.preis));
      setzeText('[data-p-je]', euro(runde(w.preis / w.portionen)) + ' je ' + w.einheit);
      setzeText('[data-p-grund]', grundText(w));
      setzeText('[data-p-versand]', vs === 0 ? (w.versandfrei ? 'Gratisversand' : 'versandkostenfrei') : '+ ' + euro(vs) + ' Versand (ab 49 € frei)');
      setzeText('[data-p-ende]', euro(runde(w.preis + vs)));
      if (heldFolgtPackung) heldFolgtPackung(wahl);
      warenkorbLinks.forEach(function (a) {
        a.setAttribute('href', 'warenkorb.html?packung=' + wahl);
        ergaenzeLink(a, null);
      });
    };
    optionen.forEach(function (o) {
      o.addEventListener('click', function () { waehle(o.getAttribute('data-packung')); });
      o.addEventListener('keydown', function (e) {
        var liste = Array.prototype.slice.call(optionen);
        var i = liste.indexOf(o);
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); var n = liste[(i + 1) % liste.length]; n.focus(); n.click(); }
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); var v = liste[(i - 1 + liste.length) % liste.length]; v.focus(); v.click(); }
      });
    });
    var start = document.querySelector('.option[aria-checked="true"]');
    waehle(start ? start.getAttribute('data-packung') : 'set');
  }

  /* ---------- Bestellung aus ?packung= (Standard: Starter Set) – Warenkorb, Danke-Seite ---------- */
  var p = packungAusAdresse();
  var d = PACKUNGEN[p];
  var rabatt = runde(d.preis * CODE_RABATT);
  var zwischen = runde(d.preis - rabatt);
  var versand = versandFuer(p, zwischen);
  var gesamt = runde(zwischen + versand);
  /* 10 Coins pro Euro (✔ T32); Bezug auf den Endpreis ist eine Annahme → im HTML „Beispielrechnung“ */
  setzeText('[data-k-coins]', String(Math.round(gesamt * 10)));

  var korb = document.querySelector('[data-warenkorb]');
  if (korb) {
    setzeText('[data-k-name]', d.name);
    setzeText('[data-k-zusatz]', d.zusatz + ' · ' + euro(runde(d.preis / d.portionen)) + ' je ' + d.einheit);
    setzeText('[data-k-preis]', euro(d.preis));
    setzeText('[data-k-grund]', grundText(d));
    setzeText('[data-k-rabatt]', '− ' + euro(rabatt));
    setzeText('[data-k-versand]', versand === 0 ? '0,00 €' : euro(versand));
    setzeText('[data-k-versandtext]', d.versandfrei ? 'Gratisversand beim Starter Set' : (versand === 0 ? 'versandkostenfrei ab 49 €' : 'Standardversand DE · ab 49 € frei'));
    setzeText('[data-k-gesamt]', euro(gesamt));
    document.querySelectorAll('[data-k-nur-dose]').forEach(function (el) { el.hidden = (p === 'set'); });
  }
  setzeText('[data-liefertag]', datum(LIEFERTAG));
  /* Danke-Seite: „Shaker auspacken“ nur, wenn die Packung laut dieser Seite einen Shaker enthält (PACKUNGEN.shaker);
     das Shaker-Bild hängt am Schlüssel web-danke-shaker-{packung} und fehlt für 10 und 1 Portion(en) */
  setzeText('[data-k-shaker-titel]', d.shaker ? 'Shaker auspacken, loslegen' : 'Auspacken, loslegen');

  /* ---------- Danke-Seite: Nachfüll-Erinnerung (Opt-in-Konzept, rechnet nur im Browser) ---------- */
  var erinnerung = document.querySelector('[data-erinnerung]');
  if (erinnerung) {
    var pk = d;
    var knoepfe = erinnerung.querySelectorAll('button[data-pro-woche]');
    var rechne = function (proWoche) {
      knoepfe.forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-pro-woche') === String(proWoche) ? 'true' : 'false'); });
      var tage = Math.floor(pk.portionen / proWoche * 7);
      var leer = plusTage(LIEFERTAG, tage);
      setzeText('[data-e-portionen]', pk.portionen + ' ' + (pk.einheit === 'Drink' ? 'Drinks' : 'Portionen'));
      setzeText('[data-e-leer]', datum(leer) + leer.getFullYear());
      setzeText('[data-e-erinnern]', datum(plusTage(leer, -5)) + plusTage(leer, -5).getFullYear());
    };
    knoepfe.forEach(function (b) { b.addEventListener('click', function () { rechne(Number(b.getAttribute('data-pro-woche'))); }); });
    var an = erinnerung.querySelector('button[aria-pressed="true"]');
    rechne(an ? Number(an.getAttribute('data-pro-woche')) : 3);

    var opt = document.querySelector('[data-optin]');
    var optText = document.querySelector('[data-optin-text]');
    if (opt && optText) {
      opt.addEventListener('click', function () {
        var neu = opt.getAttribute('aria-pressed') !== 'true';
        opt.setAttribute('aria-pressed', neu ? 'true' : 'false');
        opt.textContent = neu ? 'Erinnerung ist an (Konzept)' : 'Ja, erinnere mich (Konzept)';
        optText.hidden = !neu;
      });
    }
  }

  /* ---------- Präsentationsmodus: Anmerkungs-Marker ---------- */
  if (!ANMERKUNGEN) return;
  document.documentElement.classList.add('anmerkungen');

  var anm = Array.prototype.slice.call(document.querySelectorAll('.anm'));
  if (!anm.length) return;

  var blatt = document.createElement('div');
  blatt.className = 'anm-blatt';
  blatt.setAttribute('role', 'region');
  blatt.setAttribute('aria-label', 'Anmerkung: was wir ändern und warum');
  blatt.setAttribute('aria-live', 'polite');
  blatt.hidden = true;
  blatt.innerHTML =
    '<div class="kopfzeile"><span class="nummer"></span><button type="button" class="zu">Schließen</button></div>' +
    '<div class="text"></div><span class="ids"></span>' +
    '<div class="steuer"><button type="button" class="zurueck">‹ Zurück</button><button type="button" class="vor">Weiter ›</button></div>';
  document.body.appendChild(blatt);

  var startKnopf = document.createElement('button');
  startKnopf.type = 'button';
  startKnopf.className = 'anm-start';
  startKnopf.textContent = 'Anmerkungen (' + anm.length + ') ansehen';
  document.body.appendChild(startKnopf);

  var punkte = [];
  var aktiv = -1;

  anm.forEach(function (el, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'anm-punkt';
    b.textContent = String(i + 1);
    b.setAttribute('aria-label', 'Anmerkung ' + (i + 1) + ' öffnen');
    b.setAttribute('aria-expanded', 'false');
    b.addEventListener('click', function () { zeige(i === aktiv ? -1 : i); });
    el.parentNode.insertBefore(b, el);
    punkte.push(b);
  });

  function ziel(i) {
    var sel = anm[i].getAttribute('data-ziel');
    return (sel && document.querySelector(sel)) || anm[i].parentElement;
  }
  function zeige(i) {
    document.querySelectorAll('.anm-ziel-aktiv').forEach(function (x) { x.classList.remove('anm-ziel-aktiv'); });
    punkte.forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
    aktiv = i;
    if (i < 0) { blatt.hidden = true; startKnopf.hidden = false; return; }
    var el = anm[i];
    blatt.querySelector('.nummer').textContent = 'Anmerkung ' + (i + 1) + ' von ' + anm.length;
    blatt.querySelector('.text').textContent = el.textContent.trim();
    blatt.querySelector('.ids').textContent = el.getAttribute('data-ids') ? 'Befunde: ' + el.getAttribute('data-ids') : '';
    blatt.hidden = false;
    startKnopf.hidden = true;
    punkte[i].setAttribute('aria-expanded', 'true');
    var z = ziel(i);
    z.classList.add('anm-ziel-aktiv');
    /* Ziel in den oberen Teil des Bildschirms holen: unten liegt das Anmerkungsblatt, oben der Hinweisbalken */
    var balken = document.querySelector('.hinweisbalken');
    var oben = (balken ? balken.getBoundingClientRect().height : 0) + 20;
    var reduziert = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: Math.max(0, z.getBoundingClientRect().top + window.scrollY - oben), behavior: reduziert ? 'auto' : 'smooth' });
  }
  blatt.querySelector('.zu').addEventListener('click', function () { zeige(-1); });
  blatt.querySelector('.vor').addEventListener('click', function () { zeige((aktiv + 1) % anm.length); });
  blatt.querySelector('.zurueck').addEventListener('click', function () { zeige((aktiv - 1 + anm.length) % anm.length); });
  startKnopf.addEventListener('click', function () { zeige(0); });
  document.addEventListener('keydown', function (e) {
    if (blatt.hidden) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); zeige((aktiv + 1) % anm.length); }
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); zeige((aktiv - 1 + anm.length) % anm.length); }
    if (e.key === 'Escape') { zeige(-1); }
  });
})();
