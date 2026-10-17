/* =============================================================================
   js/folien/07-laddering.js – Skript für Folie f07 „Laddering“
   -----------------------------------------------------------------------------
   Baut aus den Daten der Folie (<script type="application/json" class="daten">
   in index.html, Folie 07) eine Hierarchical Value Map (HVM) als Leiter:
     • links die vier Ebenen der Means-End-Chain als Sprossen (unten
       Attribute, oben Werte), Beschriftung links neben der Leiter
     • eine helle „Geisterleiter“ zeigt von Anfang an das Ziel; die kräftige
       Leiter wächst Schritt für Schritt nach oben, ein Punkt klettert mit
     • Knoten sitzen auf ihren Sprossen; Verbindungen zeichnen sich von unten
       nach oben, Linienstärke = Anzahl Nennungen (Implikationsmatrix)
     • rechts: Leiterfrage (oben), Legende der Linienstärke (unten) und in
       Schritt 4 die zwei Nutzen-Kästen auf Höhe ihrer Ebene
     • Sprossen bleiben hell und dünn (sie sind keine Verbindungen zwischen
       den Knoten). In Schritt 4 färbt sich nur das Stück der Sprosse
       zwischen dem letzten Knoten und dem rechten Holm – daran schließt der
       Pfeil zum Nutzen-Kasten an.
   Inhalte ändern Sie NUR in den Daten der Folie – nicht hier.

   EINPASSEN DER KNOTEN (Probleme meldet die Konsole als Warnung –
   pruefen.mjs zeigt sie im Bericht):
     1. Jeder Knoten bekommt zuerst einen gleich breiten Platz auf seiner
        Sprosse (gleiche Spalten auf allen Ebenen). Passt ein einzelnes Wort
        nicht, wird erst der Innenabstand enger, dann die Schrift kleiner –
        nie unter 28 px.
     2. Hat ein Knoten dann mehr als 2 Zeilen oder berühren sich Knoten,
        verteilt das Skript die Breite dieser Ebene neu: Jeder Knoten bekommt
        so viel Platz, wie er braucht (kurze bleiben einzeilig, lange werden
        zweizeilig). Knoten mit eigenem "x" werden nicht verschoben.
     3. Mehr als 2 Zeilen, zu hoch für die Ebene oder Überlappung → Warnung.

   Zustände der Schritte steuert das CSS über unsichtbare Auslöser
   (.lad-z1 … .lad-z4) – so stimmen Vortrag, Vorschau und Druck überein.
   ============================================================================= */
(function () {
  'use strict';

  /* ---------------------------------------------------------------------------
     Maße in Bühnen-Pixeln (nur bei Bedarf ändern)
     --------------------------------------------------------------------------- */
  var MASS = {
    seiteAnteil: 0.3,        // rechte Spalte = 30 % der Breite …
    seiteMin: 460,           // … aber mindestens 460 px …
    seiteMax: 520,           // … und höchstens 520 px breit
    lueckeSeite: 48,         // Abstand zwischen Leiter und rechter Spalte
    labelAbstand: 30,        // Lücke zwischen Ebenen-Beschriftung und linkem Holm
    knotenRand: 16,          // Knoten bleiben so weit von den Holmen weg
    knotenLuecke: 20,        // Mindestabstand zwischen zwei Knoten einer Ebene
    schriftMin: 28,          // Knoten-Schrift wird höchstens bis hierhin verkleinert
    zeilenMax: 2,            // so viele Zeilen darf ein Knoten haben (sonst Warnung)
    knotenJeEbene: 4,        // mehr Knoten auf einer Ebene → Warnung
    ebeneLuft: 24,           // ein Knoten bleibt so viel niedriger als eine Ebene
    ueberstand: 0.4,         // Holme ragen so weit (Anteil einer Ebene) über die Sprossen
    linieMin: 3,             // Linienstärke bei „cutoff“ Nennungen
    linieMax: 12,            // Linienstärke bei den meisten Nennungen
    andockAbstand: 22,       // Abstand der Andockpunkte mehrerer Linien an einem Knoten
    kantenStart: 200,        // ms – Verbindungen beginnen nach …
    kantenStaffel: 110,      // ms – Versatz zwischen Verbindungen
    knotenStart: 650,        // ms – Knoten erscheinen nach …
    knotenStaffel: 90        // ms – Versatz zwischen Knoten
  };
  var FARBEN = ['neutral', 'hart', 'weich', 'kern'];

  function zahl(w, standard) {
    var n = parseFloat(w);
    return isNaN(n) ? standard : n;
  }


  /* ---------------------------------------------------------------------------
     Aufbau
     --------------------------------------------------------------------------- */
  function aufbauen(ctx) {
    var folie = ctx.folie, d = ctx.daten, u = ctx.util;
    var buehne = folie.querySelector('.lad-buehne');
    if (!buehne || !d || !Array.isArray(d.ebenen) || !Array.isArray(d.knoten)) return null;
    buehne.textContent = '';

    var masse = u.messen(buehne, function () { return { B: buehne.clientWidth, H: buehne.clientHeight }; });
    var B = Math.round(masse.B), H = Math.round(masse.H);
    if (B < 400 || H < 300) return null;

    var ebenen = d.ebenen.slice(0, 4);
    var E = ebenen.length;
    var ebeneIndex = {};
    ebenen.forEach(function (e, i) { ebeneIndex[e.schluessel] = i; });
    var farbeVon = function (i) {
      var f = ebenen[i] && ebenen[i].farbe;
      return FARBEN.indexOf(f) >= 0 ? f : 'neutral';
    };

    /* Spalten: rechts Frage und Nutzen-Kästen, links die Leiter (bekommt den Rest) */
    var seiteB = Math.round(Math.max(MASS.seiteMin, Math.min(MASS.seiteMax, B * MASS.seiteAnteil)));
    var seiteX = B - seiteB;
    var leiterB = seiteX - MASS.lueckeSeite;

    var ebeneH = H / E;
    var sprosseY = function (k) { return Math.round(H - ebeneH * (k + 0.5)); };

    var z = { B: B, H: H };
    var svg = u.svg('svg', { class: 'lad-svg', width: B, height: H, viewBox: '0 0 ' + B + ' ' + H }, buehne);
    var ebeneGeist = u.svg('g', { class: 'lad-geist' }, svg);
    var ebeneLeiter = u.svg('g', { class: 'lad-leiter' }, svg);
    var ebeneKanten = u.svg('g', { class: 'lad-kanten' }, svg);
    var ebeneOben = u.svg('g', { class: 'lad-oben' }, svg);

    /* ---------- Ebenen-Beschriftung (links) – erst anlegen, dann messen ---------- */
    var labels = ebenen.map(function (e, k) {
      var teile = String(e.name || e.schluessel).split(/\s+/);
      var el = u.element('span', {
        class: 'lad-ebene lad-ebene--' + k + ' lad-ebene--' + farbeVon(k), 'data-meta': '',
        style: 'top:' + sprosseY(k) + 'px'
      }, null, buehne);
      teile.forEach(function (t, i) {
        if (i) el.appendChild(document.createElement('br'));
        el.appendChild(document.createTextNode(t));
      });
      return el;
    });
    var labelB = u.messen(buehne, function () {
      return Math.ceil(Math.max.apply(null, labels.map(function (l) { return l.offsetWidth; }).concat([60])));
    });
    labels.forEach(function (l) { l.style.width = labelB + 'px'; });

    var holmL = labelB + MASS.labelAbstand;
    var holmR = leiterB;
    var oben = Math.max(4, Math.round(sprosseY(E - 1) - ebeneH * MASS.ueberstand));
    var unten = Math.min(H - 4, Math.round(sprosseY(0) + ebeneH * MASS.ueberstand));

    /* ---------- Geisterleiter (ab Schritt 0, hell) ---------- */
    [holmL, holmR].forEach(function (hx) {
      u.svg('line', { class: 'lad-holm-geist', x1: hx, y1: unten, x2: hx, y2: oben }, ebeneGeist);
    });
    for (var k = 0; k < E; k++) {
      u.svg('line', { class: 'lad-sprosse-geist', x1: holmL, y1: sprosseY(k), x2: holmR, y2: sprosseY(k) }, ebeneGeist);
    }

    /* ---------- Kräftige Leiter: wächst je Schritt eine Ebene nach oben ----------
       (Holme kräftig, Sprossen hell – siehe CSS, Abschnitt 1) */
    for (var s = 0; s < E; s++) {
      var von = s === 0 ? unten : sprosseY(s - 1);
      var bis = s === E - 1 ? oben : sprosseY(s);
      var attrHolm = { class: 'lad-holm', d: 'M' + holmL + ' ' + von + 'V' + bis + 'M' + holmR + ' ' + von + 'V' + bis };
      var attrSprosse = { class: 'lad-sprosse lad-sprosse--' + s + ' lad-sprosse--' + farbeVon(s), d: 'M' + holmL + ' ' + sprosseY(s) + 'H' + holmR };
      if (s > 0) {
        attrHolm['data-schritt'] = String(s); attrHolm['data-animation'] = 'zeichnen'; attrHolm['data-dauer'] = '700';
        attrSprosse['data-schritt'] = String(s); attrSprosse['data-animation'] = 'zeichnen'; attrSprosse['data-verzoegerung'] = '150'; attrSprosse['data-dauer'] = '800';
      }
      u.svg('path', attrHolm, ebeneLeiter);
      u.svg('path', attrSprosse, ebeneLeiter);
    }

    /* Kletterpunkt am linken Holm: springt per CSS von Sprosse zu Sprosse */
    for (var j = 0; j < E; j++) buehne.style.setProperty('--lad-y' + j, sprosseY(j) + 'px');
    u.svg('circle', { class: 'lad-kletterer', cx: holmL, cy: 0, r: 10 }, ebeneOben);

    /* ---------- Knoten (HTML, sitzen auf ihren Sprossen) ---------- */
    var links = holmL + MASS.knotenRand, rechts = holmR - MASS.knotenRand;
    var knotenNachId = {};
    var proEbene = ebenen.map(function () { return []; });
    var knotenJeEbene = ebenen.map(function () { return []; });
    d.knoten.forEach(function (kn) {
      var e = ebeneIndex[kn.ebene];
      if (e === undefined || !kn.id) return;
      proEbene[e].push(kn);
    });
    proEbene.forEach(function (liste, e) {
      var slot = (rechts - links) / Math.max(1, liste.length);
      liste.forEach(function (kn, i) {
        var anteil = kn.x !== undefined ? begrenzt(zahl(kn.x, 0.5)) : (i + 0.5) / liste.length;
        var x = Math.round(links + (rechts - links) * anteil);
        var attr = {
          class: 'lad-knoten lad-knoten--' + farbeVon(e) + (e === 0 ? ' lad-knoten--start' : ''),
          style: 'left:' + x + 'px;top:' + sprosseY(e) + 'px;max-width:' + Math.floor(slot - MASS.knotenLuecke) + 'px'
        };
        if (e > 0) {
          attr['data-schritt'] = String(e);
          attr['data-animation'] = 'hoch';
          attr['data-verzoegerung'] = String(MASS.knotenStart + i * MASS.knotenStaffel);
        }
        var el = u.element('span', attr, u.markeText(kn.text || kn.id), buehne);
        var k = { el: el, x: x, y: sprosseY(e), ebene: e, rein: [], raus: [], slot: slot - MASS.knotenLuecke, eigeneLage: kn.x !== undefined };
        knotenNachId[kn.id] = k;
        knotenJeEbene[e].push(k);
      });
      if (liste.length > MASS.knotenJeEbene) {
        console.warn('[f07] Ebene „' + (ebenen[e].name || ebenen[e].schluessel) + '“ hat ' + liste.length +
          ' Knoten – höchstens ' + MASS.knotenJeEbene + ' je Ebene, sonst wird es unlesbar.');
      }
    });
    /* Knoten einpassen (siehe Kopf der Datei: 1. Rasterplatz, 2. bei Bedarf
       Ebene neu verteilen, 3. prüfen und warnen) */
    u.messen(buehne, function () {
      var W = rechts - links;
      Object.keys(knotenNachId).forEach(function (id) {
        var k = knotenNachId[id];
        einpassen(k.el, k.slot);
      });
      knotenJeEbene.forEach(function (liste) { platzNutzen(liste, links, rechts); });
      knotenJeEbene.forEach(function (liste) {
        if (!liste.length || !hatProblem(liste)) return;
        if (liste.some(function (k) { return k.eigeneLage; })) return;   // eigene x-Werte bleiben, wie sie sind
        neuVerteilen(liste, W, links, ebeneH - MASS.ebeneLuft);
      });
      Object.keys(knotenNachId).forEach(function (id) {
        var k = knotenNachId[id], el = k.el;
        k.w = el.offsetWidth;
        k.h = el.offsetHeight;
        var text = '„' + el.textContent + '“';
        if (zuBreit(el)) console.warn('[f07] Knoten ' + text + ' ist zu lang für seine Spalte – kürzeren Text wählen.');
        var z = zeilenZahl(el);
        if (z > MASS.zeilenMax) {
          console.warn('[f07] Knoten ' + text + ' hat ' + z + ' Zeilen – höchstens ' + MASS.zeilenMax +
            ' Zeilen bzw. ca. 20 Zeichen (Kundensprache gehört in die Notizen).');
        }
        if (k.h > ebeneH - MASS.ebeneLuft) console.warn('[f07] Knoten ' + text + ' ist zu hoch für seine Ebene und stößt an die Nachbarebene – Text kürzen.');
      });
      knotenJeEbene.forEach(function (liste) {
        ueberlappungen(liste).forEach(function (paar) {
          console.warn('[f07] Knoten „' + paar[0].el.textContent + '“ und „' + paar[1].el.textContent +
            '“ berühren sich – weniger Knoten je Ebene oder kürzere Texte.');
        });
      });
    });

    /* ---------- Verbindungen (nur ab Cut-off) ---------- */
    var cutoff = zahl(d.cutoff, 1);
    var kanten = (d.verbindungen || []).filter(function (v) {
      var a = knotenNachId[v.von], b = knotenNachId[v.nach];
      return a && b && b.ebene > a.ebene && zahl(v.anzahl, 0) >= cutoff;
    }).map(function (v) {
      return { von: knotenNachId[v.von], nach: knotenNachId[v.nach], anzahl: zahl(v.anzahl, 0), roh: v };
    });
    var maxAnzahl = Math.max.apply(null, kanten.map(function (k) { return k.anzahl; }).concat([cutoff + 1]));
    var staerke = function (n) {
      return Math.round((MASS.linieMin + (MASS.linieMax - MASS.linieMin) * (n - cutoff) / Math.max(1, maxAnzahl - cutoff)) * 10) / 10;
    };

    /* Andockpunkte: mehrere Linien an einem Knoten nebeneinander, nach Richtung sortiert */
    kanten.forEach(function (k) { k.von.raus.push(k); k.nach.rein.push(k); });
    Object.keys(knotenNachId).forEach(function (id) {
      var kn = knotenNachId[id];
      verteilen(kn.raus.sort(function (a, b) { return a.nach.x - b.nach.x; }), kn, 'ax');
      verteilen(kn.rein.sort(function (a, b) { return a.von.x - b.von.x; }), kn, 'bx');
    });
    function verteilen(liste, kn, feld) {
      var n = liste.length;
      var abstand = Math.min(MASS.andockAbstand, (kn.w - 24) / Math.max(1, n));
      liste.forEach(function (k, i) { k[feld] = Math.round(kn.x + (i - (n - 1) / 2) * abstand); });
    }

    /* Zeichnen: Linie beginnt unten (Quelle) und läuft nach oben (Ziel) */
    var reihenfolge = ebenen.map(function () { return 0; });
    kanten.sort(function (a, b) { return a.nach.ebene - b.nach.ebene || a.von.x - b.von.x; });
    kanten.forEach(function (k) {
      var ay = Math.round(k.von.y - k.von.h / 2);
      var by = Math.round(k.nach.y + k.nach.h / 2);
      var mitte = (ay - by) / 2;
      var pfad = 'M' + k.ax + ' ' + ay + 'C' + k.ax + ' ' + Math.round(ay - mitte) + ' ' + k.bx + ' ' + Math.round(by + mitte) + ' ' + k.bx + ' ' + by;
      var e = k.nach.ebene;
      /* "kern": true in den Daten = tragende Leiter (Titel der Folie);
         sie färbt sich im letzten Schritt in der Akzentfarbe (CSS) */
      var p = u.svg('path', {
        class: 'lad-kante' + (k.roh.kern ? ' lad-kante--kern' : ''), d: pfad, 'stroke-width': staerke(k.anzahl),
        'data-schritt': String(e), 'data-animation': 'zeichnen', 'data-dauer': '850',
        'data-verzoegerung': String(MASS.kantenStart + reihenfolge[e]++ * MASS.kantenStaffel)
      }, ebeneKanten);
      u.svg('title', { 'data-meta': '' }, p).textContent =
        k.von.el.textContent + ' → ' + k.nach.el.textContent + ': ' + u.zahlFormat(k.anzahl, 0) + ' Nennungen';
    });

    /* ---------- Rechte Spalte ---------- */
    var seite = u.element('div', { class: 'lad-seite', style: 'left:' + seiteX + 'px;width:' + seiteB + 'px' }, null, buehne);

    /* oben: Leiterfrage */
    if (d.frage) {
      var frage = u.element('div', { class: 'lad-frage-block', style: 'top:' + sprosseY(E - 1) + 'px' }, null, seite);
      u.element('p', { class: 'lad-frage' }, '„' + u.markeText(d.frage) + '“', frage);
      if (d.frageNotiz) u.element('p', { class: 'lad-frage-notiz', 'data-meta': '' }, u.markeText(d.frageNotiz), frage);
    }

    /* unten: (optional) Startpunkte + Legende der Linienstärke */
    var start = u.element('div', { class: 'lad-start', 'data-meta': '', style: 'top:' + sprosseY(0) + 'px' }, null, seite);
    if (d.startNotiz) {
      var sn = u.element('p', { class: 'lad-start-notiz' }, null, start);
      sn.innerHTML = u.icon('pfeil-links');
      sn.appendChild(document.createTextNode(' ' + u.markeText(d.startNotiz)));
    }
    if (kanten.length) {
      var leg = u.element('p', { class: 'lad-legende' }, null, start);
      var muster = function (n) {
        var w = staerke(n);
        var s2 = u.svg('svg', { class: 'lad-legende-linie', width: 48, height: 16, viewBox: '0 0 48 16', 'aria-hidden': 'true' }, leg);
        u.svg('line', { x1: 0, y1: 8, x2: 48, y2: 8, 'stroke-width': w }, s2);
        u.element('span', { class: 'lad-legende-zahl' }, u.zahlFormat(n, 0), leg);
      };
      muster(cutoff);
      muster(maxAnzahl);
      u.element('span', { class: 'lad-legende-text' }, u.markeText(d.legende || 'Nennungen'), leg);
    }

    /* Schritt 4: Nutzen-Kästen auf Höhe ihrer Ebene + Pfeile aus der Leiter */
    var nutzen = Array.isArray(d.nutzen) ? d.nutzen : [];
    nutzen.forEach(function (n, i) {
      var e = ebeneIndex[n.ebene];
      if (e === undefined) return;
      var farbe = farbeVon(e);
      var kasten = u.element('article', {
        class: 'lad-nutzen lad-nutzen--' + farbe, style: 'top:' + sprosseY(e) + 'px',
        'data-schritt': String(E), 'data-animation': 'links', 'data-verzoegerung': String(250 + i * 160)
      }, null, seite);
      /* Titel als Kicker (Metaangabe wie .karte-kicker und die Ebenen-Beschriftung
         links), die eigentliche Aussage steht darunter groß */
      u.element('span', { class: 'karte-kicker lad-nutzen-titel', 'data-meta': '' }, u.markeText(n.titel || ''), kasten);
      u.element('span', { class: 'lad-nutzen-text' }, u.markeText(n.text || ''), kasten);
      var py = sprosseY(e);
      /* farbiges Sprossen-Stück vom letzten Knoten der Ebene bis zum rechten
         Holm, daran anschließend der Pfeil zum Kasten */
      var rechtsKante = knotenJeEbene[e].reduce(function (m, k) { return Math.max(m, k.x + (k.w || 0) / 2); }, holmL);
      if (holmR - rechtsKante > 20) {
        u.svg('path', {
          class: 'lad-stummel lad-stummel--' + farbe, d: 'M' + Math.round(rechtsKante + 8) + ' ' + py + 'H' + holmR,
          'data-schritt': String(E), 'data-animation': 'zeichnen', 'data-dauer': '300', 'data-verzoegerung': String(i * 160)
        }, ebeneLeiter);
      }
      var x1 = holmR + 12, x2 = seiteX - 14;
      u.svg('path', {
        class: 'lad-pfeil lad-pfeil--' + farbe,
        d: 'M' + x1 + ' ' + py + 'H' + x2 + 'M' + (x2 - 10) + ' ' + (py - 9) + 'L' + x2 + ' ' + py + 'L' + (x2 - 10) + ' ' + (py + 9),
        'data-schritt': String(E), 'data-animation': 'zeichnen', 'data-dauer': '500', 'data-verzoegerung': String(200 + i * 160)
      }, ebeneOben);
      labels[e].classList.add('ist-nutzen');
    });

    /* Nutzen-Titel einzeilig halten (24 → 22 px), sonst umbrechen lassen;
       danach prüfen, ob sich Bausteine der rechten Spalte überdecken */
    u.messen(seite, function () {
      Array.prototype.forEach.call(seite.querySelectorAll('.lad-nutzen-titel'), function (titel) {
        titel.style.whiteSpace = 'nowrap';
        var groesse = parseFloat(getComputedStyle(titel).fontSize) || 24;
        while (titel.scrollWidth > titel.clientWidth + 1 && groesse > 22) {
          groesse -= 1;
          titel.style.fontSize = groesse + 'px';
        }
        if (titel.scrollWidth > titel.clientWidth + 1) titel.style.whiteSpace = '';
      });
      var teile = Array.prototype.slice.call(seite.children).map(function (el) {
        var r = el.getBoundingClientRect();
        return { el: el, oben: r.top, unten: r.bottom };
      }).sort(function (a, b) { return a.oben - b.oben; });
      for (var i = 1; i < teile.length; i++) {
        if (teile[i].oben < teile[i - 1].unten - 1) {
          console.warn('[f07] Rechte Spalte: „' + teile[i - 1].el.textContent.slice(0, 40) + '“ und „' +
            teile[i].el.textContent.slice(0, 40) + '“ überdecken sich – Texte kürzen.');
        }
      }
    });

    /* Beschreibung für Screenreader */
    var text = 'Hierarchical Value Map als Leiter (Beispieldaten). ' + ebenen.map(function (e, k) {
      return e.name + ': ' + proEbene[k].map(function (kn) { return u.markeText(kn.text); }).join(', ');
    }).join('. ') + '. Stärkste Verbindungen: ' + kanten.slice().sort(function (a, b) { return b.anzahl - a.anzahl; }).slice(0, 3).map(function (k) {
      return k.von.el.textContent + ' → ' + k.nach.el.textContent + ' (' + k.anzahl + ')';
    }).join(', ') + '. ' + nutzen.map(function (n) { return u.markeText(n.titel) + ': ' + u.markeText(n.text); }).join('. ') + '.';
    buehne.setAttribute('aria-label', text);

    Deck.platzhalterFuellen(buehne);
    return z;
  }

  function begrenzt(w) { return Math.max(0, Math.min(1, w)); }


  /* ---------------------------------------------------------------------------
     Einpassen der Knoten (Hilfen; nur innerhalb von util.messen aufrufen)
     --------------------------------------------------------------------------- */
  /* Ragt der Text über die Innenfläche hinaus? scrollWidth allein reicht
     nicht: Ein zu langes Wort läuft zuerst in den Innenabstand (padding),
     das zählt der Browser nicht als Überlauf. Deshalb zusätzlich die echte
     Textbreite messen (Range) – umgerechnet, falls die Bühne skaliert ist. */
  function zuBreit(el) {
    if (el.scrollWidth > el.clientWidth + 1) return true;
    var cs = getComputedStyle(el);
    var innen = el.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0);
    var aussen = el.getBoundingClientRect();
    if (!aussen.width || !el.offsetWidth) return false;
    var r = document.createRange();
    r.selectNodeContents(el);
    var text = r.getBoundingClientRect().width * el.offsetWidth / aussen.width;
    return text > innen + 1;
  }

  /* Zahl der Textzeilen eines Knotens (aus Höhe und Zeilenhöhe) */
  function zeilenZahl(el) {
    var cs = getComputedStyle(el);
    var groesse = parseFloat(cs.fontSize) || 28;
    var lh = parseFloat(cs.lineHeight) || groesse * 1.15;
    var innen = el.clientHeight - (parseFloat(cs.paddingTop) || 0) - (parseFloat(cs.paddingBottom) || 0);
    return Math.max(1, Math.round(innen / lh));
  }

  /* Knoten in eine Breite einpassen: Mehrwortige Texte brechen (ausgewogen)
     um. Passt ein einzelnes langes Wort nicht, wird erst der Innenabstand
     enger, dann die Schrift kleiner. Hat der Knoten zu viele Zeilen, wird
     die Schrift ebenfalls verkleinert (z. B. Werte mit 30 px). Nie unter
     MASS.schriftMin (28 px). */
  function einpassen(el, breite) {
    el.classList.remove('ist-eng');
    el.style.fontSize = '';
    el.style.maxWidth = Math.floor(breite) + 'px';
    if (zuBreit(el)) el.classList.add('ist-eng');
    var groesse = parseFloat(getComputedStyle(el).fontSize) || 30;
    while ((zuBreit(el) || zeilenZahl(el) > MASS.zeilenMax) && groesse > MASS.schriftMin) {
      groesse -= 1;
      el.style.fontSize = groesse + 'px';
    }
  }

  /* kleinste Breite, bei der ein Knoten höchstens „zeilen“ Zeilen hat */
  function kleinsteBreite(el, zeilen, obergrenze) {
    var lo = 24, hi = Math.ceil(obergrenze);
    while (hi - lo > 2) {
      var mitte = Math.floor((lo + hi) / 2);
      el.style.maxWidth = mitte + 'px';
      if (zeilenZahl(el) <= zeilen && !zuBreit(el)) hi = mitte; else lo = mitte;
    }
    return hi;
  }

  /* Freien Platz neben den Nachbarn nutzen: Ein Knoten, der in seinem
     Rasterplatz umbricht, darf breiter werden, solange er an seiner Stelle
     bleibt und den Nachbarn nicht näher kommt als MASS.knotenLuecke. So
     bleibt z. B. „Community-nah“ einzeilig, die Spalten bleiben gleich. */
  function platzNutzen(liste, links, rechts) {
    var sortiert = liste.slice().sort(function (a, b) { return a.x - b.x; });
    sortiert.forEach(function (k, i) {
      var el = k.el;
      if (zeilenZahl(el) < 2 && !zuBreit(el)) return;
      var vor = sortiert[i - 1], nach = sortiert[i + 1];
      var grenzeL = vor ? vor.x + vor.el.offsetWidth / 2 + MASS.knotenLuecke : links;
      var grenzeR = nach ? nach.x - nach.el.offsetWidth / 2 - MASS.knotenLuecke : rechts;
      var erlaubt = Math.floor(2 * Math.min(k.x - grenzeL, grenzeR - k.x));
      if (erlaubt <= el.offsetWidth) return;
      var vorher = { max: el.style.maxWidth, groesse: el.style.fontSize, eng: el.classList.contains('ist-eng') };
      el.classList.remove('ist-eng');
      el.style.fontSize = '';
      el.style.maxWidth = 'none';
      var einzeilig = el.offsetWidth;
      if (einzeilig <= erlaubt) { einpassen(el, einzeilig + 1); return; }
      /* sonst nur übernehmen, wenn es weniger Zeilen ergibt */
      var zeilenVorher = (function () {
        el.style.maxWidth = vorher.max; el.style.fontSize = vorher.groesse; el.classList.toggle('ist-eng', vorher.eng);
        return zeilenZahl(el);
      })();
      einpassen(el, erlaubt);
      if (zeilenZahl(el) >= zeilenVorher) {
        el.style.maxWidth = vorher.max; el.style.fontSize = vorher.groesse; el.classList.toggle('ist-eng', vorher.eng);
      }
    });
  }

  /* Paare von Knoten einer Ebene, die sich berühren (Abstand < 8 px) */
  function ueberlappungen(liste) {
    var sortiert = liste.slice().sort(function (a, b) { return a.x - b.x; });
    var paare = [];
    for (var i = 1; i < sortiert.length; i++) {
      var a = sortiert[i - 1], b = sortiert[i];
      if (a.x + a.el.offsetWidth / 2 + 8 > b.x - b.el.offsetWidth / 2) paare.push([a, b]);
    }
    return paare;
  }

  function hatProblem(liste) {
    return ueberlappungen(liste).length > 0 || liste.some(function (k) {
      return zuBreit(k.el) || zeilenZahl(k.el) > MASS.zeilenMax;
    });
  }

  /* Ebene neu verteilen: Alle Knoten starten einzeilig. Solange die Summe der
     Breiten nicht passt, wird der breiteste Knoten auf 2 Zeilen verschmälert
     (danach – wenn die Höhe reicht – auf 3). Passt es dann noch nicht, werden
     erst die umbrechbaren Knoten schmaler (nie schmaler als ihr längstes
     Wort), zuletzt alle anteilig (die Prüfung danach warnt). Übrig
     gebliebener Platz wird gleichmäßig um die Knoten verteilt. */
  function neuVerteilen(liste, W, links, maxHoehe) {
    var luecke = MASS.knotenLuecke;
    var platz = W - (liste.length - 1) * luecke;
    liste.forEach(function (k) {
      var el = k.el;
      el.classList.remove('ist-eng');
      el.style.fontSize = '';
      el.style.maxWidth = 'none';
      var einzeilig = Math.min(el.offsetWidth, W);
      k.breiten = { 1: einzeilig };
      k.breiten[2] = kleinsteBreite(el, 2, einzeilig);
      k.breiten[3] = kleinsteBreite(el, 3, einzeilig);
      el.style.maxWidth = 'min-content';            // schmalste Breite = längstes Wort
      k.minB = Math.min(einzeilig, el.offsetWidth);
      el.style.maxWidth = einzeilig + 'px';
      var cs = getComputedStyle(el);
      k.hoehe3 = 3 * (parseFloat(cs.lineHeight) || 32) + (parseFloat(cs.paddingTop) || 0) + (parseFloat(cs.paddingBottom) || 0);
      k.b = einzeilig;
    });
    var summe = function () { return liste.reduce(function (s, k) { return s + k.b; }, 0); };
    [2, 3].forEach(function (z) {
      while (summe() > platz) {
        var kandidat = null;
        liste.forEach(function (k) {
          if (z === 3 && k.hoehe3 > maxHoehe) return;
          if (k.breiten[z] < k.b - 1 && (!kandidat || k.b > kandidat.b)) kandidat = k;
        });
        if (!kandidat) break;
        kandidat.b = kandidat.breiten[z];
      }
    });
    /* Reicht das nicht: zuerst nur Knoten schmaler machen, die noch weiter
       umbrechen können – nie schmaler als ihr längstes Wort (sonst ragt z. B.
       „Abwechslung“ aus dem Kasten). Erst danach alle anteilig kürzen. */
    if (summe() > platz) {
      var zuViel = summe() - platz;
      var spiel = liste.reduce(function (s, k) { return s + Math.max(0, k.b - k.minB); }, 0);
      if (spiel > 0) {
        var anteil = Math.min(1, zuViel / spiel);
        liste.forEach(function (k) { k.b = Math.floor(k.b - Math.max(0, k.b - k.minB) * anteil); });
      }
    }
    if (summe() > platz) {
      var faktor = platz / summe();
      liste.forEach(function (k) { k.b = Math.floor(k.b * faktor); });
    }
    var frei = Math.max(0, platz - summe());
    var cursor = links + frei / (2 * liste.length);
    liste.forEach(function (k) {
      k.x = Math.round(cursor + k.b / 2);
      k.el.style.left = k.x + 'px';
      einpassen(k.el, k.b + 1);
      cursor += k.b + luecke + frei / liste.length;
    });
  }


  /* ---------------------------------------------------------------------------
     Anmeldung bei der Engine
     --------------------------------------------------------------------------- */
  var zustand = null;
  var letzterCtx = null;

  /* Neu bauen, wenn sich der Platz geändert hat (anderes Thema = andere Ränder/Schrift) */
  function groessePruefen(ctx) {
    ctx = ctx || letzterCtx;
    if (!ctx) return;
    var b = ctx.folie.querySelector('.lad-buehne');
    if (!b) return;
    var m = ctx.util.messen(b, function () { return { B: b.clientWidth, H: b.clientHeight }; });
    if (zustand && Math.abs(m.B - zustand.B) <= 2 && Math.abs(m.H - zustand.H) <= 2) return;
    zustand = aufbauen(ctx);
    Deck.schritteNeu(ctx.folie);
  }

  Deck.registriere('f07', {
    einrichten: function (ctx) {
      letzterCtx = ctx;
      zustand = aufbauen(ctx);
    },
    betreten: function (ctx) {
      letzterCtx = ctx;
      groessePruefen(ctx);
    },
    druck: function (ctx) { groessePruefen(ctx); }
  });

  /* Nach einem Themenwechsel (Taste T) neu einpassen, sobald die Schriften da sind */
  document.addEventListener('deck:groesse', function () {
    if (letzterCtx) groessePruefen(letzterCtx);
  });
})();
