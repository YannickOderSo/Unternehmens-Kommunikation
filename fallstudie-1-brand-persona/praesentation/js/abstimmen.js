/* =============================================================================
   js/abstimmen.js – Verhalten der Abstimmseite (abstimmen.html)
   -----------------------------------------------------------------------------
   • liest marke.js (window.MARKE): Markenname, Farben, Firma und Hochschule
     (Einordnung), Anrede und die Umfrage umfragen[u] (u aus der Adresse, z. B.
     ?u=tier): frage, optionen, liveQuelle (Web-App-Adresse …/exec), runde.
     Kein Logo – die Seite ist öffentlich (QUELLEN.md, Abschnitt 4).
   • baut die Tiere als große Knöpfe (Zeichnungen wie auf Folie 08)
   • Tippen → Stimme an die Web-App senden, Bestätigung „Danke! Ihre Stimme: …“,
     „Doch anders entscheiden“ (die Web-App zählt je Handy nur die letzte Stimme)
   • Fehler oder kein Netz → verständliche Meldung und „Nochmal versuchen“
   • liveQuelle leer, nicht auf …/exec oder runde unbrauchbar → Hinweis „Die
     Abstimmung ist gerade nicht geöffnet“ (gilt vor und nach dem Vortrag)

   SCHNITTSTELLE (wie live-abstimmung/ und Folie 08; nur GET, Antwort als JSONP)
     ?aktion=stimme&umfrage=tier&runde=<runde>&option=<0..anzahl-1>&anzahl=<n>
      &geraet=<zufällige ID>&callback=f            → f({"ok":true})
     Fehler                                        → f({"ok":false,"fehler":"…"})
   JSONP per <script> funktioniert unabhängig von CORS und den Weiterleitungen
   von Google Apps Script.

   Geräte-ID: zufällig, 22 Zeichen [A-Za-z0-9_-], im Browser-Speicher
   (localStorage, Zugriff immer in try/catch – im privaten Modus gilt sie nur
   bis zum Schließen), je Umfrage und Runde eine eigene: Stimmen aus Probe und
   Vortrag oder aus verschiedenen Umfragen sind in der Tabelle nicht
   verknüpfbar. Keine Cookies, kein Name, keine IP.
   Test ohne Google: ?quelle=… gilt NUR auf localhost oder file:// (siehe
   Kommentar in abstimmen.html).
   ============================================================================= */
(function () {
  'use strict';

  var MUSTER_NAME = /^[A-Za-z0-9_-]{1,40}$/;     /* umfrage, runde */
  var MUSTER_GERAET = /^[A-Za-z0-9_-]{8,64}$/;
  var MAX_OPTIONEN = 9;
  /* ms ohne Antwort → Fehlermeldung. Länger als die Wartezeit der Sperre im
     Server (apps-script.gs, SPERRE_WARTEN_MS = 10 s): Bei Andrang gibt der
     Server zuerst auf und seine Meldung („bitte gleich noch einmal tippen“)
     kommt noch an; eine gezählte Stimme wird nicht als Fehler gemeldet. */
  var ZEITLIMIT = 30000;
  var LANGSAM = 5000;             /* ms → „Dauert etwas länger …“ */
  var SPEICHER = 'abstimmen:';    /* Präfix im Browser-Speicher */

  /* ---------------------------------------------------------------------------
     STRICHZEICHNUNGEN – Kopie aus js/folien/08-analogien.js (BILDER), damit
     Folie und Abstimmseite dieselben Tiere zeigen. Zeichenfläche 120 × 120,
     Klasse „voll“ = gefüllte Fläche. Schlüssel = Tiername klein, ä/ö/ü/ß als
     ae/oe/ue/ss. Ändert sich dort eine Zeichnung, hier mitändern.
     Tiere ohne eigene Zeichnung bekommen den Pfotenabdruck.
     --------------------------------------------------------------------------- */
  var BILDER = {
    waschbaer:
      '<path d="M60 104 C50 104 42 98 36 92 L14 78 L24 70 C21 58 22 46 27 37 L24 15 L44 26 Q60 21 76 26 L96 15 L93 37 C98 46 99 58 96 70 L106 78 L84 92 C78 98 70 104 60 104 Z"/>' +
      '<path d="M31 24 L34 33 M89 24 L86 33"/>' +
      /* Maske mit zwei Augenlöchern (evenodd), darin die Pupillen */
      '<path class="voll" fill-rule="evenodd" d="M22 60 C30 48 46 46 55 56 Q60 61 65 56 C74 46 90 48 98 60 C94 71 80 75 70 69 Q60 63 50 69 C40 75 26 71 22 60 Z M44 54 a6 6 0 1 0 0.01 0 Z M76 54 a6 6 0 1 0 0.01 0 Z"/>' +
      '<circle class="voll" cx="44" cy="60" r="2.6"/><circle class="voll" cx="76" cy="60" r="2.6"/>' +
      '<path d="M60 30 V44"/>' +
      '<ellipse class="voll" cx="60" cy="86" rx="6.5" ry="4.5"/><path d="M60 90 V95 M60 95 Q55 99 51 96 M60 95 Q65 99 69 96"/>',
    adler:
      '<path d="M18 112 C18 88 24 64 38 50 C48 40 62 35 78 35 C86 35 92 37 97 41 C106 41 114 45 117 53 C118 58 116 64 111 68 C111 63 108 60 103 60 L86 60 C84 68 81 76 76 82 C71 90 69 100 69 112 Z"/>' +
      '<path d="M97 41 C94 47 92 53 91 60"/>' +
      '<circle class="voll" cx="80" cy="49" r="3.6"/><path d="M64 47 L80 42 L93 46"/>',
    affe:
      '<path d="M27 48 A12 12 0 1 0 27 70 M93 48 A12 12 0 1 1 93 70"/>' +
      '<circle cx="60" cy="59" r="34"/>' +
      '<path d="M60 47 C54 38 39 38 39 53 C39 60 42 64 45 68 C41 76 45 89 60 91 C75 89 79 76 75 68 C78 64 81 60 81 53 C81 38 66 38 60 47 Z"/>' +
      '<circle class="voll" cx="51" cy="56" r="3.6"/><circle class="voll" cx="69" cy="56" r="3.6"/>' +
      '<circle class="voll" cx="56" cy="72" r="1.9"/><circle class="voll" cx="64" cy="72" r="1.9"/>' +
      '<path d="M51 80 Q60 86 69 80"/><path d="M53 26 Q57 18 61 25 Q65 18 69 26"/>',
    pfote:
      '<path d="M60 62 C48 62 36 74 36 86 C36 96 46 100 54 97 C57 96 58 95 60 95 C62 95 63 96 66 97 C74 100 84 96 84 86 C84 74 72 62 60 62 Z"/>' +
      '<ellipse cx="31" cy="55" rx="8" ry="10.5" transform="rotate(-25 31 55)"/><ellipse cx="48" cy="36" rx="8" ry="11" transform="rotate(-8 48 36)"/>' +
      '<ellipse cx="72" cy="36" rx="8" ry="11" transform="rotate(8 72 36)"/><ellipse cx="89" cy="55" rx="8" ry="10.5" transform="rotate(25 89 55)"/>',
    schwan:
      '<path d="M38 86 C24 72 30 60 38 50 C45 41 45 31 38 26"/>' +
      '<path d="M48 82 C38 70 42 60 48 52 C56 41 54 25 44 19 C38 16 31 18 29 23 L17 30 L30 31 C33 31 36 29 38 26"/>' +
      '<circle class="voll" cx="38" cy="22.5" r="2.6"/>' +
      '<path d="M38 86 C46 98 66 102 84 98 C98 95 106 86 108 74 C108 68 106 62 102 58 C98 68 90 74 78 76 C66 78 56 80 48 82"/>' +
      '<path d="M60 88 C74 90 88 86 98 76"/>' +
      '<path d="M14 110 q8 -5 16 0 t16 0 t16 0 t16 0 t16 0 t16 0"/>',
    eule:
      '<path d="M30 14 L45 29 Q60 24 75 29 L90 14 C97 42 99 72 88 91 C80 104 70 110 60 110 C50 110 40 104 32 91 C21 72 23 42 30 14 Z"/>' +
      '<circle cx="46" cy="52" r="13"/><circle cx="74" cy="52" r="13"/>' +
      '<circle class="voll" cx="47.5" cy="53" r="4.5"/><circle class="voll" cx="72.5" cy="53" r="4.5"/>' +
      '<path d="M55 66 L60 74 L65 66 Z"/>' +
      '<path d="M46 86 q4.5 5 9 0 M55 86 q4.5 5 9 0 M64 86 q4.5 5 9 0 M50.5 95 q4.5 5 9 0 M59.5 95 q4.5 5 9 0"/>' +
      '<path d="M22 114 H98 M50 108 v6 M70 108 v6"/>',
    fuchs:
      '<path d="M18 16 L44 40 Q60 35 76 40 L102 16 L96 58 Q92 72 80 80 L60 102 L40 80 Q28 72 24 58 Z"/>' +
      '<path d="M28 28 L40 46 M92 28 L80 46"/>' +
      '<path d="M24 58 Q40 62 48 74 L60 102 L72 74 Q80 62 96 58"/>' +
      '<circle class="voll" cx="46" cy="60" r="4"/><circle class="voll" cx="74" cy="60" r="4"/>' +
      '<circle class="voll" cx="60" cy="98" r="5"/>',
    loewe:
      '<path d="M60 12 L70 20 L83 16 L87 29 L100 33 L97 46 L107 56 L98 66 L103 79 L90 84 L88 98 L75 96 L66 106 L60 104 L54 106 L45 96 L32 98 L30 84 L17 79 L22 66 L13 56 L23 46 L20 33 L33 29 L37 16 L50 20 Z"/>' +
      '<circle cx="60" cy="60" r="27"/>' +
      '<circle class="voll" cx="50" cy="55" r="3.6"/><circle class="voll" cx="70" cy="55" r="3.6"/>' +
      '<path d="M54 67 L66 67 L60 74 Z"/><path d="M60 74 V79 M60 79 Q55 84 50 81 M60 79 Q65 84 70 81"/>',
    hund:
      '<path d="M42 28 Q60 20 78 28 Q86 34 86 50 L86 74 Q86 98 60 100 Q34 98 34 74 L34 50 Q34 34 42 28 Z"/>' +
      '<path d="M42 28 C26 30 18 50 22 74 C32 74 38 64 38 52 M78 28 C94 30 102 50 98 74 C88 74 82 64 82 52"/>' +
      '<circle class="voll" cx="49" cy="58" r="4"/><circle class="voll" cx="71" cy="58" r="4"/>' +
      '<ellipse class="voll" cx="60" cy="76" rx="8" ry="5.5"/>' +
      '<path d="M60 81 V87 M60 87 Q54 92 49 89 M60 87 Q66 92 71 89"/>',
    delfin:
      '<path d="M24 90 C30 56 62 34 92 40 C100 42 106 46 110 52 L99 56 C80 54 56 66 38 96"/>' +
      '<path d="M24 90 L8 86 Q20 96 22 108 L30 98 L38 96"/>' +
      '<path d="M60 38 Q60 22 74 16 Q70 26 76 39"/>' +
      '<circle class="voll" cx="93" cy="47" r="3.4"/>'
  };

  /* kleine Linien-Icons (24 × 24, wie das Sprite der Präsentation) */
  var ICON = {
    haken: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    nochmal: '<path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4v4.5h4.5"/>',
    zurueck: '<path d="M19 12H5"/><path d="M11 6l-6 6 6 6"/>'
  };

  /* ---------------------------------------------------------------------------
     TEXTE – Sie-Form (marke.js → anrede: 'Sie') oder Du-Form ('ihr' bzw.
     umfragen.<u>.anrede: 'du')
     --------------------------------------------------------------------------- */
  var TEXTE = {
    sie: {
      anleitung: 'Tippen Sie auf ein Tier. Das Ergebnis erscheint live auf der Leinwand.',
      deine: 'Ihre Stimme',
      leinwand: 'Das Ergebnis sehen Sie gleich auf der Leinwand.',
      umentscheiden: 'Sie können sich umentscheiden – es zählt nur Ihre letzte Stimme.',
      netz: 'Die Abstimmung ist gerade nicht erreichbar. Bitte in ein paar Sekunden nochmal versuchen.',
      offline: 'Ihr Handy ist gerade offline. Bitte mobiles Internet oder WLAN einschalten und nochmal versuchen.',
      geschlossen: 'Sie läuft nur während der Präsentation im Hörsaal.',
      handzeichen: 'Sie können auch per Handzeichen im Hörsaal mitmachen.'
    },
    du: {
      anleitung: 'Tipp auf ein Tier. Das Ergebnis erscheint live auf der Leinwand.',
      deine: 'Deine Stimme',
      leinwand: 'Das Ergebnis siehst du gleich auf der Leinwand.',
      umentscheiden: 'Du kannst dich umentscheiden – es zählt nur deine letzte Stimme.',
      netz: 'Die Abstimmung ist gerade nicht erreichbar. Bitte in ein paar Sekunden nochmal versuchen.',
      offline: 'Dein Handy ist gerade offline. Bitte mobiles Internet oder WLAN einschalten und nochmal versuchen.',
      geschlossen: 'Sie läuft nur während der Präsentation im Hörsaal.',
      handzeichen: 'Du kannst auch per Handzeichen im Hörsaal mitmachen.'
    }
  };

  var m = null;                   /* window.MARKE, sobald marke.js geladen ist */
  var T = TEXTE.sie;
  var zustand = {
    id: '',             /* Name der Umfrage (u) */
    konfig: null,       /* marke.js → umfragen[u] */
    optionen: [],
    quelle: '',         /* Web-App-Adresse */
    runde: '',
    bisher: -1,         /* bestätigte Stimme (nach „Doch anders entscheiden“) */
    unterwegs: false,
    knoepfe: []
  };

  var $ = function (id) { return document.getElementById(id); };

  /* ---------------------------------------------------------------------------
     HILFEN
     --------------------------------------------------------------------------- */
  function element(tag, attribute, text, eltern) {
    var e = document.createElement(tag);
    if (attribute) Object.keys(attribute).forEach(function (k) { e.setAttribute(k, attribute[k]); });
    if (text !== undefined && text !== null) e.textContent = text;
    if (eltern) eltern.appendChild(e);
    return e;
  }
  function svg(viewBox, inhalt, klasse) {
    var s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('viewBox', viewBox);
    s.setAttribute('aria-hidden', 'true');
    s.setAttribute('focusable', 'false');
    if (klasse) s.setAttribute('class', klasse);
    s.innerHTML = inhalt;          /* nur feste Zeichnungen aus dieser Datei */
    return s;
  }
  function icon(name) { return svg('0 0 24 24', ICON[name] || ''); }

  /* Tiername → Schlüssel der Zeichnung („Waschbär“ → „waschbaer“) */
  function bildSchluessel(name) {
    return String(name || '').trim().toLowerCase()
      .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
      .replace(/[^a-z]/g, '');
  }
  function tierBild(name) {
    var k = bildSchluessel(name);
    return svg('0 0 120 120', BILDER[k] || BILDER.pfote);
  }

  function markeText(text) {
    return String(text || '')
      .replace(/\[Marke kurz\]/g, m.kurz || m.name || '[Marke]')
      .replace(/\[Marke\]/g, m.name || '[Marke]');
  }

  /* Browser-Speicher: kann fehlen oder gesperrt sein → nie abstürzen */
  function laden(schluessel) {
    try {
      var roh = window.localStorage.getItem(SPEICHER + schluessel);
      return roh ? JSON.parse(roh) : null;
    } catch (e) { return null; }
  }
  function speichern(schluessel, wert) {
    try { window.localStorage.setItem(SPEICHER + schluessel, JSON.stringify(wert)); } catch (e) { /* egal */ }
  }

  /* zufällige Geräte-ID (nur Zeichen A–Z a–z 0–9 _ -), je Browser, Umfrage
     und Runde eine eigene – Umentscheiden innerhalb einer Runde funktioniert,
     Probe und Vortrag sind in der Tabelle nicht verknüpfbar (Datensparsamkeit).
     Der Zwischenspeicher hilft, wenn der Browser-Speicher gesperrt ist. */
  var geraetImSpeicher = {};
  function geraetId() {
    var schluessel = 'geraet:' + zustand.id + ':' + zustand.runde;
    if (geraetImSpeicher[schluessel]) return geraetImSpeicher[schluessel];
    var gespeichert = laden(schluessel);
    if (typeof gespeichert === 'string' && MUSTER_GERAET.test(gespeichert)) {
      geraetImSpeicher[schluessel] = gespeichert;
      return gespeichert;
    }
    var zeichen = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-';
    var zufall = new Uint8Array(22);
    try { window.crypto.getRandomValues(zufall); }
    catch (e) { for (var j = 0; j < zufall.length; j++) zufall[j] = Math.floor(Math.random() * 256); }
    var id = '';
    for (var i = 0; i < zufall.length; i++) id += zeichen.charAt(zufall[i] & 63);
    geraetImSpeicher[schluessel] = id;
    speichern(schluessel, id);
    return id;
  }
  /* frühere Fassung: eine Geräte-ID für alle Runden – nicht mehr nötig */
  function alteGeraetIdEntfernen() {
    try { window.localStorage.removeItem(SPEICHER + 'geraet'); } catch (e) { /* egal */ }
  }

  /* Farben (WCAG): relative Leuchtdichte und Kontrast zweier Hex-Farben */
  function hexZuRgb(hex) {
    var t = /^#?([0-9a-f]{6})$/i.exec(String(hex || '').trim());
    if (!t) return null;
    var n = parseInt(t[1], 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function leuchtdichte(rgb) {
    var k = rgb.map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * k[0] + 0.7152 * k[1] + 0.0722 * k[2];
  }
  function kontrast(a, b) {
    var la = leuchtdichte(hexZuRgb(a)), lb = leuchtdichte(hexZuRgb(b));
    return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
  }

  /* Markenfarben aus marke.js übernehmen; Schrift auf Gelb nach Kontrast */
  function farbenSetzen() {
    var f = m.farben || {};
    var root = document.documentElement.style;
    var gelb = hexZuRgb(f.primaer) ? String(f.primaer).trim() : '#FFD007';
    var schwarz = hexZuRgb(f.sekundaer) ? String(f.sekundaer).trim() : '#1D1D1B';
    /* Kopfzeile, Konturen und Schatten brauchen ein dunkles Schwarz */
    if (leuchtdichte(hexZuRgb(schwarz)) > 0.08) schwarz = '#1D1D1B';
    var aufGelb = [schwarz, '#000000', '#FFFFFF'].filter(function (c) { return kontrast(c, gelb) >= 4.5; })[0] ||
      (kontrast('#000000', gelb) >= kontrast('#FFFFFF', gelb) ? '#000000' : '#FFFFFF');
    root.setProperty('--gelb', gelb);
    root.setProperty('--schwarz', schwarz);
    root.setProperty('--auf-gelb', aufGelb);
  }

  /* Platzhalter wie in der Präsentation: data-marke, data-unternehmen … */
  function platzhalterSetzen() {
    var felder = { 'data-marke': m.name, 'data-unternehmen': m.unternehmen, 'data-hochschule': m.hochschule };
    Object.keys(felder).forEach(function (attr) {
      if (!felder[attr]) return;
      Array.prototype.forEach.call(document.querySelectorAll('[' + attr + ']'), function (e) {
        e.textContent = felder[attr];
      });
    });
  }

  /* Frage mit hervorgehobenem Markennamen setzen */
  function frageSetzen(text) {
    var ziel = $('frage');
    ziel.textContent = '';
    var roh = String(text || '').replace(/\[Marke kurz\]/g, '[Marke]');
    roh.split('[Marke]').forEach(function (teil, i) {
      if (i > 0) element('span', { class: 'frage-marke' }, m.name || 'Marke', ziel);
      if (teil) ziel.appendChild(document.createTextNode(teil));
    });
    document.title = (m.name ? m.name + ' – ' : '') + 'Live-Abstimmung';
  }

  /* Adresse der Web-App: marke.js → liveQuelle; Test-Überschreibung ?quelle=
     nur auf localhost bzw. file:// */
  function istLokal() {
    return location.protocol === 'file:' ||
      /^(localhost|127\.0\.0\.1|\[::1\]|::1)$/.test(location.hostname);
  }
  function quelleBestimmen(konfig, parameter) {
    var test = parameter.get('quelle');
    if (test && istLokal() && /^https?:\/\/(localhost|127\.0\.0\.1|\[::1\]|script\.google\.com)(:\d+)?\//.test(test)) {
      return test.trim();
    }
    var q = String(konfig.liveQuelle || '').trim();
    if (!q) return '';
    /* dieselbe Prüfung wie auf Folie 08 (js/komponenten.js): …/dev ist die
       Test-Adresse des Editors und funktioniert nur für den Autor */
    if (!/^https:\/\/script\.google\.com\/\S+\/exec$/.test(q)) {
      console.warn('abstimmen.html: marke.js → umfragen.' + zustand.id + '.liveQuelle ist keine Web-App-Adresse von Google Apps Script, die auf /exec endet (https://script.google.com/macros/s/…/exec) – Abstimmung bleibt aus.');
      return '';
    }
    return q;
  }

  /* ---------------------------------------------------------------------------
     ANFRAGE AN DIE WEB-APP (JSONP)
     fertig(fehler, daten): fehler = { art: 'netz' | 'zeit' | 'antwort' }
     --------------------------------------------------------------------------- */
  var zaehler = 0;
  function anfrage(parameter, fertig) {
    var name = 'abstimmenAntwort' + (++zaehler) + '_' + Math.random().toString(36).slice(2, 8);
    var skript = document.createElement('script');
    var erledigt = false;
    var uhr = null;
    function ende(fehler, daten) {
      if (erledigt) return;
      erledigt = true;
      clearTimeout(uhr);
      /* späte Antwort (nach Zeitlimit) läuft ins Leere statt in einen Fehler */
      window[name] = function () {};
      if (skript.parentNode) skript.parentNode.removeChild(skript);
      fertig(fehler, daten);
    }
    window[name] = function (daten) { ende(null, daten); };
    parameter.callback = name;
    var abfrage = Object.keys(parameter).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(parameter[k]);
    }).join('&');
    skript.src = zustand.quelle + (zustand.quelle.indexOf('?') >= 0 ? '&' : '?') + abfrage;
    skript.async = true;
    skript.referrerPolicy = 'no-referrer';
    skript.onerror = function () { ende({ art: 'netz' }); };
    /* Skript geladen, aber kein Rückruf (z. B. Google-Anmeldeseite statt
       Web-App, weil die Bereitstellung nicht für „Jeder“ freigegeben ist) */
    skript.onload = function () { ende({ art: 'antwort' }); };
    uhr = setTimeout(function () { ende({ art: 'zeit' }); }, ZEITLIMIT);
    document.head.appendChild(skript);
  }

  /* ---------------------------------------------------------------------------
     ANZEIGE
     --------------------------------------------------------------------------- */
  function ansagen(text) {
    var a = $('ansage');
    a.textContent = '';
    /* kurz leeren, damit Screenreader auch denselben Text erneut ansagen */
    setTimeout(function () { a.textContent = text; }, 60);
  }
  function meldungLeeren() { $('meldung').textContent = ''; }

  function auswahlBauen() {
    var liste = $('auswahl');
    liste.textContent = '';
    zustand.knoepfe = zustand.optionen.map(function (name, i) {
      var li = element('li', null, null, liste);
      var knopf = element('button', { type: 'button', class: 'tier', 'data-option': String(i) }, null, li);
      var bild = element('span', { class: 'tier-bild' }, null, knopf);
      bild.appendChild(tierBild(name));
      var text = element('span', { class: 'tier-text' }, null, knopf);
      element('span', { class: 'tier-name' }, name, text);
      var zusatz = element('span', { class: 'tier-zusatz' }, null, text);
      zusatz.hidden = true;
      element('span', { class: 'tier-zeichen', 'aria-hidden': 'true' }, null, knopf);
      knopf.addEventListener('click', function () { stimmeSenden(i); });
      return { knopf: knopf, zusatz: zusatz };
    });
  }

  function auswahlZeigen(fokusAuf) {
    meldungLeeren();
    $('anleitung').hidden = false;
    var liste = $('auswahl');
    liste.hidden = false;
    liste.removeAttribute('aria-busy');
    zustand.knoepfe.forEach(function (k, i) {
      k.knopf.classList.remove('ist-gewaehlt', 'ist-sendet');
      k.knopf.removeAttribute('aria-disabled');
      var bisher = i === zustand.bisher;
      k.knopf.classList.toggle('ist-bisher', bisher);
      k.zusatz.hidden = !bisher;
      k.zusatz.textContent = bisher ? 'bisherige Wahl' : '';
    });
    if (typeof fokusAuf === 'number' && zustand.knoepfe[fokusAuf]) zustand.knoepfe[fokusAuf].knopf.focus();
  }

  function sendetZeigen(i) {
    var liste = $('auswahl');
    liste.setAttribute('aria-busy', 'true');
    zustand.knoepfe.forEach(function (k, j) {
      k.knopf.setAttribute('aria-disabled', 'true');
      k.knopf.classList.toggle('ist-gewaehlt', j === i);
      k.knopf.classList.toggle('ist-sendet', j === i);
      k.knopf.classList.remove('ist-bisher');
      if (j === i) {
        k.zusatz.hidden = false;
        k.zusatz.textContent = 'wird gesendet …';
      } else {
        k.zusatz.hidden = true;
      }
    });
    ansagen('Stimme für ' + zustand.optionen[i] + ' wird gesendet.');
  }

  function dankZeigen(i, neu) {
    $('auswahl').hidden = true;
    $('anleitung').hidden = true;
    var ziel = $('meldung');
    ziel.textContent = '';
    var name = zustand.optionen[i];
    var karte = element('div', { class: 'karte karte--danke' + (neu ? ' ist-neu' : '') }, null, ziel);
    var kopf = element('div', { class: 'danke-kopf' }, null, karte);
    var bild = element('div', { class: 'danke-bild' }, null, kopf);
    bild.appendChild(tierBild(name));
    var haken = element('span', { class: 'danke-haken' }, null, bild);
    haken.appendChild(icon('haken'));
    var texte = element('div', null, null, kopf);
    element('p', { class: 'karte-titel' }, 'Danke!', texte);
    var wahl = element('p', { class: 'danke-wahl' }, T.deine + ': ', texte);
    element('strong', null, name, wahl);
    element('p', { class: 'karte-text' }, T.leinwand, karte);
    var knoepfe = element('div', { class: 'karte-knoepfe' }, null, karte);
    var anders = element('button', { type: 'button', class: 'knopf' }, null, knoepfe);
    anders.appendChild(icon('zurueck'));
    element('span', null, 'Doch anders entscheiden', anders);
    anders.addEventListener('click', function () { auswahlZeigen(zustand.bisher); });
    element('p', { class: 'karte-klein' }, T.umentscheiden, karte);
    if (neu) {
      ansagen('Danke! ' + T.deine + ': ' + name + '.');
      anders.focus();
    }
  }

  function fehlerZeigen(i, text) {
    $('auswahl').hidden = true;
    var ziel = $('meldung');
    ziel.textContent = '';
    var karte = element('div', { class: 'karte karte--fehler' }, null, ziel);
    element('p', { class: 'karte-titel' }, 'Das hat nicht geklappt', karte);
    element('p', { class: 'karte-text' }, text, karte);
    var knoepfe = element('div', { class: 'karte-knoepfe' }, null, karte);
    var nochmal = element('button', { type: 'button', class: 'knopf knopf--haupt' }, null, knoepfe);
    nochmal.appendChild(icon('nochmal'));
    element('span', null, 'Nochmal versuchen', nochmal);
    nochmal.addEventListener('click', function () { stimmeSenden(i); });
    var anders = element('button', { type: 'button', class: 'knopf' }, null, knoepfe);
    anders.appendChild(icon('zurueck'));
    element('span', null, 'Anderes Tier wählen', anders);
    anders.addEventListener('click', function () { auswahlZeigen(i); });
    element('p', { class: 'karte-klein' }, T.handzeichen, karte);
    ansagen('Das hat nicht geklappt. ' + text);
    nochmal.focus();
  }

  /* ruhiger Hinweis statt Knöpfen (Abstimmung aus oder falsch eingerichtet) */
  function hinweisZeigen(titel, text) {
    $('auswahl').hidden = true;
    $('anleitung').hidden = true;
    document.documentElement.classList.remove('ist-offen');
    var ziel = $('meldung');
    ziel.textContent = '';
    var karte = element('div', { class: 'karte karte--hinweis' }, null, ziel);
    element('p', { class: 'karte-titel' }, titel, karte);
    if (text) element('p', { class: 'karte-text' }, text, karte);
    var knoepfe = element('div', { class: 'karte-knoepfe' }, null, karte);
    var neu = element('button', { type: 'button', class: 'knopf knopf--haupt' }, null, knoepfe);
    neu.appendChild(icon('nochmal'));
    element('span', null, 'Seite neu laden', neu);
    neu.addEventListener('click', function () { location.reload(); });
    element('p', { class: 'karte-klein' }, T.handzeichen, karte);
  }

  /* ---------------------------------------------------------------------------
     STIMME SENDEN
     --------------------------------------------------------------------------- */
  function stimmeSenden(i) {
    if (zustand.unterwegs) return;
    if (!(i >= 0 && i < zustand.optionen.length)) return;
    if (navigator.onLine === false) { fehlerZeigen(i, T.offline); return; }
    zustand.unterwegs = true;
    $('auswahl').hidden = false;
    meldungLeeren();
    sendetZeigen(i);
    var langsam = setTimeout(function () {
      var k = zustand.knoepfe[i];
      if (zustand.unterwegs && k) k.zusatz.textContent = 'Dauert etwas länger …';
    }, LANGSAM);
    anfrage({
      aktion: 'stimme',
      umfrage: zustand.id,
      runde: zustand.runde,
      option: i,
      anzahl: zustand.optionen.length,
      geraet: geraetId()
    }, function (fehler, daten) {
      clearTimeout(langsam);
      zustand.unterwegs = false;
      if (!fehler && daten && daten.ok === true) {
        zustand.bisher = i;
        speichern('stimme:' + zustand.id + ':' + zustand.runde, { option: i, name: zustand.optionen[i] });
        dankZeigen(i, true);
        return;
      }
      var text;
      if (!fehler && daten && daten.ok === false) {
        text = 'Der Server meldet: ' + String(daten.fehler || 'unbekannter Fehler').slice(0, 200);
      } else if (fehler && fehler.art === 'zeit') {
        text = 'Der Server antwortet gerade nicht. Bitte nochmal versuchen.';
      } else if (fehler && fehler.art === 'netz' && navigator.onLine === false) {
        text = T.offline;
      } else {
        /* 'netz' bei bestehender Verbindung oder 'antwort': Häufigste Ursache ist
           eine Web-App, die nicht für „Jeder“ bereitgestellt ist – Google liefert
           dann eine Anmeldeseite, die der Browser als Skript ablehnt (onerror)
           oder ohne Rückruf lädt (onload). Für das Publikum neutral bleiben. */
        text = T.netz;
        console.warn('abstimmen.html: Die Web-App hat nicht mit JSONP geantwortet (' + (fehler ? fehler.art : '–') + ') – ist sie für „Jeder“ bereitgestellt, nicht archiviert, und endet liveQuelle auf /exec? Sonst Internet prüfen.');
      }
      fehlerZeigen(i, text);
    });
  }

  /* ---------------------------------------------------------------------------
     START
     --------------------------------------------------------------------------- */
  function start() {
    if (!m) {
      T = TEXTE.sie;
      hinweisZeigen('Seite nicht vollständig geladen', 'Bitte laden Sie die Seite neu.');
      return;
    }
    farbenSetzen();
    platzhalterSetzen();
    alteGeraetIdEntfernen();

    var parameter = new URLSearchParams(location.search);
    var umfragen = m.umfragen || {};
    var id = parameter.get('u') || Object.keys(umfragen)[0] || '';
    var konfig = MUSTER_NAME.test(id) && Object.prototype.hasOwnProperty.call(umfragen, id) ? umfragen[id] : null;
    var anrede = String((konfig && konfig.anrede) || m.anrede || 'Sie').toLowerCase();
    T = (anrede === 'du' || anrede === 'ihr') ? TEXTE.du : TEXTE.sie;

    if (!konfig || !Array.isArray(konfig.optionen) || !konfig.optionen.length) {
      frageSetzen('Live-Abstimmung');
      hinweisZeigen('Diese Abstimmung gibt es nicht', 'Bitte den QR-Code auf der Folie nochmal scannen.');
      console.warn('abstimmen.html: Umfrage „' + id + '“ fehlt in marke.js → umfragen.');
      return;
    }
    zustand.id = id;
    zustand.konfig = konfig;
    if (konfig.optionen.length > MAX_OPTIONEN) {
      console.warn('abstimmen.html: Höchstens ' + MAX_OPTIONEN + ' Optionen – die übrigen werden nicht gezeigt.');
    }
    zustand.optionen = konfig.optionen.slice(0, MAX_OPTIONEN).map(function (o) { return markeText(o); });
    zustand.runde = String(konfig.runde || '').trim();
    zustand.quelle = quelleBestimmen(konfig, parameter);
    frageSetzen(konfig.frage || 'Live-Abstimmung');
    $('anleitung').textContent = T.anleitung;

    /* Neutraler Hinweis – stimmt vor und nach dem Vortrag (dann ist liveQuelle
       wieder leer); auch PDF und Exportbilder können den QR-Code noch zeigen */
    if (!zustand.quelle) {
      hinweisZeigen('Die Abstimmung ist gerade nicht geöffnet', T.geschlossen);
      return;
    }
    if (!MUSTER_NAME.test(zustand.runde)) {
      console.warn('abstimmen.html: marke.js → umfragen.' + id + '.runde fehlt oder enthält andere Zeichen als A–Z a–z 0–9 _ - (höchstens 40).');
      hinweisZeigen('Die Abstimmung ist gerade nicht geöffnet', T.geschlossen);
      return;
    }

    document.documentElement.classList.add('ist-offen');
    auswahlBauen();
    /* schon abgestimmt (z. B. QR-Code nochmal gescannt)? Dann gleich den Dank */
    var frueher = laden('stimme:' + id + ':' + zustand.runde);
    if (frueher && typeof frueher.option === 'number' && zustand.optionen[frueher.option] === frueher.name) {
      zustand.bisher = frueher.option;
      dankZeigen(frueher.option, false);
    } else {
      auswahlZeigen();
    }
  }

  /* marke.js laden: über http(s) mit ?v=<Zeit>, damit Handys nicht eine ältere
     Fassung aus dem Zwischenspeicher nehmen (GitHub Pages: bis zu 10 Minuten).
     Als Datei (file://) ohne Zusatz. */
  function markeLaden(fertig) {
    if (window.MARKE) { fertig(); return; }
    var skript = document.createElement('script');
    var frisch = /^https?:$/.test(location.protocol) ? '?v=' + Date.now().toString(36) : '';
    skript.src = 'marke.js' + frisch;
    skript.onload = fertig;
    skript.onerror = fertig;
    document.head.appendChild(skript);
  }

  markeLaden(function () {
    m = window.MARKE || null;
    start();
  });
})();
