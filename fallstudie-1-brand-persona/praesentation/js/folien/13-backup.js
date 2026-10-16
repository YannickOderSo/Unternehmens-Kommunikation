/* =============================================================================
   js/folien/13-backup.js – Skript zu folien/13-backup.html (Backup B1–B7)
   -----------------------------------------------------------------------------
   Baut die Tabellen der Backup-Folien aus den Daten in
   <script type="application/json" class="daten"> (je Folie):
     B2  Prompt-Log           → Tabelle mit Pillen „belegt“ / „Beispiel“
     B3  Datenquellen Persona → Tabelle, nach Persona-Dimension gruppiert
     B4  Repertory Grid       → Mittelwerte + berechnete Kennwerte + Attribut ja/nein
     B5  Laddering            → Leitern, Codierung, Implikationsmatrix, stärkste Leiter
     B6  Kommunikationsanalyse→ Codiertabelle
   Außerdem auf allen Backup-Folien: Knopf „Zu Folie …“ (data-bk-ziel) springt
   zur passenden Hauptfolie (Endzustand) – mit Maus, Tab + Enter oder Leertaste.
   Rückweg: Nach dem Sprung führt Taste Z zurück zur Backup-Folie (in den
   Schritt, in dem man sie verlassen hat). Ein kurzer Hinweis unten zeigt das
   nach jedem Sprung an.

   Hervorhebungen in den Schritten steuert das CSS (css/folien/13-backup.css)
   über unsichtbare Auslöser <span class="bk-zustand bk-z1" data-schritt="1">.
   Deshalb stimmen Druck (Endzustand), Vorschau und Rücksprung automatisch.

   Inhalte ändern: NUR in den Daten der Folie (folien/13-backup.html).
   ============================================================================= */
(function () {
  'use strict';

  var u = Deck.util;

  /* ---------------------------------------------------------------------------
     Kleine Helfer
     --------------------------------------------------------------------------- */

  /* Text mit „[Marke]“ → Markenname aus marke.js */
  function text(wert) {
    return u.markeText(wert === undefined || wert === null ? '' : String(wert));
  }

  /* Zahl im deutschen Format: 6.6 → „6,6“ */
  function zahl(wert, dezimalen, vorzeichen) {
    return u.zahlFormat(wert, dezimalen === undefined ? 1 : dezimalen, { vorzeichen: !!vorzeichen });
  }

  /* Tabellenzelle anlegen. inhalt: Text oder fertiges Element */
  function zelle(zeile, tag, klasse, inhalt) {
    var z = u.element(tag, { class: klasse || null }, null, zeile);
    if (inhalt instanceof Node) z.appendChild(inhalt);
    else if (inhalt !== undefined && inhalt !== null) z.textContent = text(inhalt);
    return z;
  }

  /* Leere Tabelle mit Klassen der Engine (.tabelle) + Backup-Stil (.bk-tabelle) */
  function neueTabelle(klasse, beschriftung) {
    var t = u.element('table', { class: 'tabelle bk-tabelle ' + (klasse || '') });
    if (beschriftung) u.element('caption', { class: 'nur-screenreader' }, beschriftung, t);
    return t;
  }

  /* Kopfzeile aus einer Liste von [Text, Klasse] */
  function kopf(tabelle, spalten) {
    var thead = u.element('thead', null, null, tabelle);
    var tr = u.element('tr', null, null, thead);
    spalten.forEach(function (s) {
      var th = zelle(tr, 'th', s[1] || '', s[0]);
      th.setAttribute('scope', 'col');
    });
    return thead;
  }

  /* Körper der Tabelle: Zeilen erscheinen beim Betreten ruhig gestaffelt */
  function koerper(tabelle) {
    return u.element('tbody', { 'data-staffel': '40', 'data-animation': 'einblenden' }, null, tabelle);
  }

  /* Pille „belegt“ / „Beispiel“ (Beispiel = gestrichelt) */
  function standPille(istBeispiel) {
    return u.element('span', { class: 'bk-stand ' + (istBeispiel ? 'bk-stand--beispiel' : 'bk-stand--belegt') },
      istBeispiel ? 'Beispiel' : 'belegt');
  }

  /* Folie zu einer ID suchen (null, wenn sie im Deck fehlt) */
  function folieMitId(id) {
    if (!id) return null;
    var treffer = Deck.folien().filter(function (f) { return f.id === id; });
    return treffer.length ? treffer[0] : null;
  }

  /* ---------------------------------------------------------------------------
     Sprung zur Hauptfolie und Rückweg (Taste Z)
     --------------------------------------------------------------------------- */

  /* Gemerkter Rückweg nach einem Sprung (null = keiner):
     { backup: 'b4', nummer: 'B4', schritt: 1 } */
  var rueckweg = null;
  var RUECK_TASTE = 'z';                        // Taste für den Rückweg (klein geschrieben)

  /* Sprung zur Zielfolie – im Endzustand, damit man dort weiterreden kann.
     vonId = Backup-Folie, von der aus gesprungen wird (für den Rückweg). */
  function springe(id, vonId) {
    var von = folieMitId(vonId);
    var stand = Deck.zustand();
    rueckweg = von ? { backup: von.id, nummer: von.nummer, schritt: stand.folie === von.id ? stand.schritt : 'ende' } : null;
    Deck.gehe(id, 'ende');
    if (rueckweg && Deck.hinweis) Deck.hinweis('Zurück zu ' + rueckweg.nummer + ': Taste Z');
  }

  /* Taste Z: zurück zur gemerkten Backup-Folie. Gibt true zurück, wenn die
     Taste verbraucht wurde (sonst arbeitet die Präsentation normal weiter). */
  if (Deck.taste) {
    Deck.taste(function (e) {
      if (!rueckweg || String(e.key).toLowerCase() !== RUECK_TASTE) return false;
      if (document.documentElement.classList.contains('ebene-offen')) return false;   // Übersicht/Hilfe offen
      var jetzt = Deck.zustand();
      var ziel = rueckweg;
      rueckweg = null;                          // Rückweg gilt genau einmal
      if (jetzt.folie === ziel.backup) return false;
      Deck.gehe(ziel.backup, ziel.schritt);
      return true;
    });
  }

  /* Knöpfe „Zu Folie …“ einrichten: <button class="bk-sprung" data-bk-ziel="f06"> */
  function spruengeEinrichten(folie) {
    u.alle('[data-bk-ziel]', folie).forEach(function (knopf) {
      var ziel = folieMitId(knopf.getAttribute('data-bk-ziel'));
      if (!ziel || ziel.backup) {
        knopf.hidden = true;                      // Zielfolie fehlt → Knopf ausblenden
        return;
      }
      var beschriftung = knopf.querySelector('.bk-sprung-text');
      if (beschriftung) beschriftung.textContent = 'Zu Folie ' + ziel.nummer;
      knopf.setAttribute('aria-label', 'Zur Folie ' + ziel.nummer + ': ' + ziel.titel + ' (zurück mit Taste Z)');
      knopf.setAttribute('title', 'Zur Folie ' + ziel.nummer + ' (' + ziel.titel + ') – zurück mit Taste Z');
      if (!knopf._bkSprung) {
        knopf._bkSprung = true;
        knopf.addEventListener('click', function () { springe(ziel.id, folie.id); });
      }
    });
  }

  /* Folien-Nummer in einer Tabellenzelle klickbar machen (B2, Spalte „Folie“) */
  function folienVerweis(beschriftung, id, vonId) {
    var ziel = folieMitId(id);
    if (!ziel || ziel.backup) return u.element('span', { class: 'bk-folie-text' }, beschriftung);
    var knopf = u.element('button', {
      type: 'button',
      class: 'bk-folienlink',
      title: 'Zur Folie ' + ziel.nummer + ' (' + ziel.titel + ') – zurück mit Taste Z',
      'aria-label': 'Zur Folie ' + ziel.nummer + ': ' + ziel.titel + ' (zurück mit Taste Z)'
    }, beschriftung);
    knopf.addEventListener('click', function () { springe(ziel.id, vonId); });
    return knopf;
  }

  /* Platz für eine Tabelle: <div class="bk-tabellenplatz" data-bk="name"> */
  function platz(folie, name) {
    return folie.querySelector('[data-bk="' + name + '"]');
  }

  /* Status-Symbol (B3) – gezeichnet mit den Icons der Präsentation statt
     Sonderzeichen, damit es auf jedem Rechner gleich aussieht */
  var STATUS = {
    gesichert:  { icon: 'haken',   text: 'gesichert' },
    korrigiert: { icon: 'stift',   text: 'korrigiert' },
    unsicher:   { icon: 'annahme', text: 'unsicher' }
  };
  function statusMarke(status) {
    var s = STATUS[status] || { icon: 'info', text: status || '–' };
    var el = u.element('span', { class: 'bk-status bk-status--' + (status || 'leer') });
    el.innerHTML = u.icon(s.icon);
    u.element('span', null, s.text, el);
    return el;
  }


  /* ---------------------------------------------------------------------------
     B2 · Prompt-Log
     --------------------------------------------------------------------------- */
  function promptLogBauen(ctx) {
    var d = ctx.daten, ziel = platz(ctx.folie, 'promptlog');
    if (!d || !ziel || !d.zeilen) return;
    var sp = d.spalten || {};
    var t = neueTabelle('bk2-tabelle', 'Prompt-Log (Auszug): ID, Tool, Ziel, Prüfung, Folie, Stand');
    kopf(t, [
      [sp.id || 'ID', 'bk2-id'], [sp.tool || 'Tool', 'bk2-tool'], [sp.ziel || 'Ziel', 'bk2-ziel'],
      [sp.pruefung || 'Prüfung', 'bk2-pruefung'], [sp.folie || 'Folie', 'bk2-folie'], [sp.stand || 'Stand', 'bk2-stand']
    ]);
    var tb = koerper(t);
    d.zeilen.forEach(function (z) {
      var tr = u.element('tr', { class: z.beispiel ? 'ist-beispiel' : 'ist-belegt' }, null, tb);
      zelle(tr, 'th', 'bk2-id', z.id).setAttribute('scope', 'row');
      zelle(tr, 'td', 'bk2-tool', z.tool);
      zelle(tr, 'td', 'bk2-ziel', z.ziel);
      zelle(tr, 'td', 'bk2-pruefung', z.pruefung);
      zelle(tr, 'td', 'bk2-folie', folienVerweis(text(z.folie), z.sprung, ctx.folie.id));
      zelle(tr, 'td', 'bk2-stand', standPille(!!z.beispiel));
    });
    ziel.appendChild(t);
  }


  /* ---------------------------------------------------------------------------
     B3 · Datenquellen Persona (gruppiert nach Dimension)
     --------------------------------------------------------------------------- */
  function quellenBauen(ctx) {
    var d = ctx.daten, ziel = platz(ctx.folie, 'quellen');
    if (!d || !ziel || !d.zeilen) return;
    var sp = d.spalten || {};
    var t = neueTabelle('bk3-tabelle', 'Datenquellen der Persona nach Dimension');
    kopf(t, [
      [sp.dimension || 'Dimension', 'bk3-dim'], [sp.quelle || 'Quelle', 'bk3-quelle'], [sp.jahr || 'Jahr', 'bk3-jahr'],
      [sp.basis || 'Basis', 'bk3-basis'], [sp.befund || 'Befund', 'bk3-befund'], [sp.status || 'Status', 'bk3-status']
    ]);
    var tb = koerper(t);
    var vorher = null, gruppe = -1;
    d.zeilen.forEach(function (z) {
      var neu = z.dimension !== vorher;
      if (neu) gruppe++;
      var klassen = ['bk3-gruppe-' + (gruppe % 2 ? 'b' : 'a')];
      if (neu) klassen.push('ist-gruppenanfang');
      if (z.kern) klassen.push('ist-kern');
      if (z.vorsicht) klassen.push('ist-vorsicht');
      var tr = u.element('tr', { class: klassen.join(' ') }, null, tb);
      /* Dimension nur in der ersten Zeile der Gruppe ausschreiben */
      var dim = zelle(tr, 'th', 'bk3-dim', neu ? z.dimension : '');
      dim.setAttribute('scope', 'row');
      if (!neu) dim.setAttribute('aria-label', text(z.dimension));
      var q = zelle(tr, 'td', 'bk3-quelle', null);
      u.element('span', null, text(z.quelle), q);
      if (z.nr) u.element('span', { class: 'bk3-nr' }, '[' + z.nr + ']', q);
      zelle(tr, 'td', 'bk3-jahr zahl', z.jahr);
      zelle(tr, 'td', 'bk3-basis', z.basis);
      zelle(tr, 'td', 'bk3-befund', z.befund);
      zelle(tr, 'td', 'bk3-status', statusMarke(z.status));
      vorher = z.dimension;
    });
    ziel.appendChild(t);
  }


  /* ---------------------------------------------------------------------------
     B4 · Repertory-Grid-Rohdaten
     Rechnet je Konstrukt: Ø der Wettbewerber (Ø W), |M − Ø W|
     (Differenzierung laut methoden.md = „Vorsprung vor Ø Wettbewerb“ auf
     Folie 06) und |M − I| (Ideal-Distanz) und prüft die drei Kriterien.
     Attribut = alle drei erfüllt. Funktioniert mit 1 bis beliebig vielen
     Wettbewerbern.
     --------------------------------------------------------------------------- */
  function gridBauen(ctx) {
    var d = ctx.daten, f = ctx.folie, ziel = platz(f, 'grid');
    if (!d || !ziel || !d.konstrukte || !d.elemente) return;

    var marke = d.elemente.filter(function (e) { return e.rolle === 'marke'; })[0];
    var ideal = d.elemente.filter(function (e) { return e.rolle === 'ideal'; })[0];
    var wettbewerber = d.elemente.filter(function (e) { return e.rolle === 'wettbewerber'; });
    if (!marke || !ideal || !wettbewerber.length) return;
    var s = d.schwellen || {};
    var nMin = s.nennungenMin !== undefined ? s.nennungenMin : 6;
    var abstandMin = s.abstandWettbewerbMin !== undefined ? s.abstandWettbewerbMin : 1.5;
    var idealMax = s.idealDistanzMax !== undefined ? s.idealDistanzMax : 1.0;

    var t = neueTabelle('bk4-tabelle', 'Repertory Grid: Mittelwerte je Konstrukt und Element, Kennwerte und Ergebnis');

    /* zweizeiliger Kopf: Gruppen „Mittelwerte“ und „Auswertung“ */
    var thead = u.element('thead', null, null, t);
    var r1 = u.element('tr', { class: 'bk4-gruppenkopf' }, null, thead);
    zelle(r1, 'th', 'bk4-leer', '');
    zelle(r1, 'th', 'bk4-leer', '');
    var g1 = zelle(r1, 'th', 'bk4-gruppe', 'Mittelwerte (Skala ' + (d.skala ? d.skala.join('–') : '1–7') + ')');
    g1.setAttribute('colspan', String(d.elemente.length + 1));
    g1.setAttribute('scope', 'colgroup');
    var g2 = zelle(r1, 'th', 'bk4-gruppe bk4-gruppe--auswertung', 'Auswertung');
    g2.setAttribute('colspan', '3');
    g2.setAttribute('scope', 'colgroup');

    var r2 = u.element('tr', null, null, thead);
    zelle(r2, 'th', 'bk4-konstrukt', 'Konstrukt (Pol 1 – Pol 7)');
    /* „Nenn.“ = Nennungen über alle Triaden (nicht n = Zahl der Befragten) */
    var kn = zelle(r2, 'th', 'bk4-n rechts', 'Nenn.');
    kn.setAttribute('title', 'Nennungen des Konstrukts über alle Triaden aller Befragten');
    kn.setAttribute('aria-label', 'Nennungen');
    d.elemente.forEach(function (e) {
      var k = 'bk4-el rechts' + (e.rolle === 'marke' ? ' bk4-el--marke' : '') + (e.rolle === 'ideal' ? ' bk4-el--ideal' : '');
      if (e.rolle === 'ideal') zelle(r2, 'th', 'bk4-el rechts bk4-schnitt', 'Ø W');   // Ø W vor der Idealmarke
      zelle(r2, 'th', k, e.kuerzel);
    });
    zelle(r2, 'th', 'bk4-wert bk4-wert--erst rechts', '|' + marke.kuerzel + ' − Ø W|');
    zelle(r2, 'th', 'bk4-wert rechts', '|' + marke.kuerzel + ' − ' + ideal.kuerzel + '|');
    zelle(r2, 'th', 'bk4-ergebnis', 'Ergebnis');
    u.alle('th', thead).forEach(function (th) { if (!th.hasAttribute('scope')) th.setAttribute('scope', 'col'); });

    var tb = koerper(t);
    d.konstrukte.forEach(function (k) {
      var w = k.werte || {};
      var m = Number(w[marke.kuerzel]);
      var i = Number(w[ideal.kuerzel]);
      var summe = 0, anzahl = 0;
      wettbewerber.forEach(function (e) {
        if (w[e.kuerzel] !== undefined) { summe += Number(w[e.kuerzel]); anzahl++; }
      });
      var schnitt = anzahl ? summe / anzahl : NaN;
      var abstand = Math.abs(m - schnitt);
      var idealDistanz = Math.abs(m - i);
      /* gerundet vergleichen – so, wie die Werte auf der Folie stehen */
      var r = function (x) { return Math.round(x * 10) / 10; };
      var okN = k.nennungen >= nMin;
      var okAbstand = r(abstand) >= abstandMin;
      var okIdeal = r(idealDistanz) <= idealMax;
      var istAttribut = okN && okAbstand && okIdeal;

      var tr = u.element('tr', { class: istAttribut ? 'ist-attribut' : '' }, null, tb);
      var kz = zelle(tr, 'th', 'bk4-konstrukt', null);
      kz.setAttribute('scope', 'row');
      u.element('span', { class: 'bk4-pol' }, text(k.links), kz);
      u.element('span', { class: 'bk4-strich', 'aria-hidden': 'true' }, ' – ', kz);
      u.element('span', { class: 'bk4-pol bk4-pol--rechts' }, text(k.rechts), kz);
      zelle(tr, 'td', 'bk4-n zahl' + (okN ? '' : ' ist-verfehlt'), String(k.nennungen));
      d.elemente.forEach(function (e) {
        if (e.rolle === 'ideal') zelle(tr, 'td', 'bk4-el zahl bk4-schnitt', zahl(schnitt));
        var kl = 'bk4-el zahl' + (e.rolle === 'marke' ? ' bk4-el--marke' : '') + (e.rolle === 'ideal' ? ' bk4-el--ideal' : '');
        zelle(tr, 'td', kl, w[e.kuerzel] === undefined ? '–' : zahl(w[e.kuerzel]));
      });
      zelle(tr, 'td', 'bk4-wert bk4-wert--erst zahl' + (okAbstand ? '' : ' ist-verfehlt'), zahl(abstand));
      zelle(tr, 'td', 'bk4-wert zahl' + (okIdeal ? '' : ' ist-verfehlt'), zahl(idealDistanz));
      var erg = zelle(tr, 'td', 'bk4-ergebnis', null);
      if (istAttribut) u.element('span', { class: 'bk4-pille bk4-pille--attribut' }, 'Attribut', erg);
      else if (k.hinweis) u.element('span', { class: 'bk4-pille bk4-pille--hinweis' }, text(k.hinweis), erg);
      else u.element('span', { class: 'bk4-pille bk4-pille--nein' }, '–', erg);
    });
    ziel.appendChild(t);

    /* Legenden unter der Tabelle */
    var el = platz(f, 'elemente');
    if (el) {
      el.innerHTML = '';
      u.element('b', null, 'Elemente: ', el);
      /* Wettbewerber je nach Anzahl: 1 → nur W1, 2 → W1 und W2 mit Namen,
         ab 3 → W1 mit Namen, dann „W2–Wn = weitere Wettbewerber“ */
      var teile = [marke.kuerzel + ' = ' + text(marke.name)];
      var w1 = wettbewerber[0];
      var wn = wettbewerber[wettbewerber.length - 1];
      teile.push(w1.kuerzel + ' = ' + text(w1.name));
      if (wettbewerber.length === 2) teile.push(wn.kuerzel + ' = ' + text(wn.name));
      else if (wettbewerber.length > 2) teile.push(wettbewerber[1].kuerzel + '–' + wn.kuerzel + ' = weitere Wettbewerber');
      teile.push('Ø W = ' + (wettbewerber.length > 1 ? 'Mittel ' + w1.kuerzel + '–' + wn.kuerzel : w1.kuerzel));
      teile.push(ideal.kuerzel + ' = ' + text(ideal.name));
      el.appendChild(document.createTextNode(teile.join(' · ')));
    }
    var kr = platz(f, 'kriterien');
    if (kr) {
      kr.innerHTML = '';
      u.element('b', null, 'Attribut, wenn alle drei erfüllt: ', kr);
      /* Nennungen stammen aus allen Triaden aller Befragten (z. B. 8 × 8 = 64) */
      var triadenGesamt = (Number(d.befragte) > 0 && d.triaden) ? Number(d.befragte) * d.triaden.length : 0;
      kr.appendChild(document.createTextNode(
        'relevant (≥ ' + nMin + ' Nennungen' + (triadenGesamt ? ' aus ' + triadenGesamt + ' Triaden' : '') + ') · ' +
        'differenzierend (|M − Ø W| ≥ ' + zahl(abstandMin) + ') · nah am Ideal (|M − I| ≤ ' + zahl(idealMax) + ')'));
      u.element('span', { class: 'bk4-verfehlt-muster' }, 'verfehlt', kr);
    }
    var tr8 = platz(f, 'triaden');
    if (tr8 && d.triaden) {
      tr8.innerHTML = '';
      u.element('b', null, 'Triaden je Person (' + d.triaden.length + '): ', tr8);
      tr8.appendChild(document.createTextNode(d.triaden.join('  |  ')));
    }
  }


  /* ---------------------------------------------------------------------------
     B5 · Laddering: Leitern, Codierung, Implikationsmatrix, stärkste Leiter
     --------------------------------------------------------------------------- */
  function ladderingBauen(ctx) {
    var d = ctx.daten, f = ctx.folie;
    if (!d || !d.knoten || !d.verbindungen) return;
    var cutoff = d.cutoff || 2;

    /* Knoten nachschlagen */
    var knoten = {};
    d.knoten.forEach(function (k) { knoten[k.id] = k; });
    var ebenenReihe = (d.ebenen || []).map(function (e) { return e.schluessel; });
    var ebeneIndex = function (id) { return knoten[id] ? ebenenReihe.indexOf(knoten[id].ebene) : -1; };

    /* Anzahl je Verbindung („von>nach“) */
    var anzahl = {};
    d.verbindungen.forEach(function (v) { anzahl[v.von + '>' + v.nach] = Number(v.anzahl) || 0; });

    /* Stärkste Leiter: Kette über alle Ebenen, deren schwächste Verbindung am
       häufigsten genannt wurde (bei Gleichstand zählt die Summe). */
    var staerkste = null;
    function suchen(kette, minimum, summe) {
      var letzter = kette[kette.length - 1];
      var weiter = d.verbindungen.filter(function (v) { return v.von === letzter && v.anzahl >= cutoff; });
      if (!weiter.length) {
        if (kette.length === ebenenReihe.length &&
            (!staerkste || minimum > staerkste.minimum || (minimum === staerkste.minimum && summe > staerkste.summe))) {
          staerkste = { kette: kette.slice(), minimum: minimum, summe: summe };
        }
        return;
      }
      weiter.forEach(function (v) {
        suchen(kette.concat(v.nach), Math.min(minimum, v.anzahl), summe + v.anzahl);
      });
    }
    d.knoten.filter(function (k) { return k.ebene === ebenenReihe[0]; })
      .forEach(function (k) { suchen([k.id], Infinity, 0); });
    var staerksteKanten = {};
    if (staerkste) {
      for (var s = 0; s < staerkste.kette.length - 1; s++) staerksteKanten[staerkste.kette[s] + '>' + staerkste.kette[s + 1]] = true;
    }
    var gleicheKette = function (kette) {
      return staerkste && kette.length === staerkste.kette.length &&
        kette.every(function (id, i) { return id === staerkste.kette[i]; });
    };

    /* --- Leitern (Auszug) --- */
    var zl = platz(f, 'leitern');
    if (zl && d.leitern) {
      var t = neueTabelle('bk5-leitern', 'Leitern je befragter Person: Attribut, funktionale Konsequenz, psychosoziale Konsequenz, Wert');
      var kopfzeile = kopf(t, [['Pers.', 'bk5-person'], ['', 'bk5-kette']]);
      /* Spaltenkopf der Kette = Legende der Ebenen in ihren Farben */
      var kk = kopfzeile.querySelector('th.bk5-kette');
      (d.ebenen || []).forEach(function (eb, i) {
        if (i) u.element('span', { class: 'bk5-pfeil', 'aria-hidden': 'true' }, '→', kk);
        u.element('span', { class: 'bk5-glied--' + i }, eb.kurz || eb.name, kk);
      });
      var tb = koerper(t);
      d.leitern.forEach(function (l) {
        var tr = u.element('tr', { class: gleicheKette(l.kette) ? 'ist-staerkste' : '' }, null, tb);
        var p = zelle(tr, 'th', 'bk5-person', null);
        p.setAttribute('scope', 'row');
        u.element('span', null, l.person, p);
        /* Markierung: hohler Punkt = KI-simuliert, voller Punkt = echtes Interview (Legende im Kopf) */
        u.element('span', {
          class: 'bk5-art' + (l.simuliert ? '' : ' bk5-art--echt'),
          role: 'img',
          'aria-label': l.simuliert ? 'KI-simuliert' : 'Interview'
        }, null, p);
        var kz = zelle(tr, 'td', 'bk5-kette', null);
        l.kette.forEach(function (id, i) {
          if (i) u.element('span', { class: 'bk5-pfeil', 'aria-hidden': 'true' }, '→', kz);
          var e = ebeneIndex(id);
          u.element('span', { class: 'bk5-glied bk5-glied--' + (e < 0 ? 'x' : e) }, knoten[id] ? text(knoten[id].text) : id, kz);
        });
      });
      zl.appendChild(t);
    }

    /* --- Codierung (Auszug) --- */
    var zc = platz(f, 'codes');
    if (zc && d.codes) {
      var tc = neueTabelle('bk5-codes', 'Codierung: Original-Formulierungen und Code');
      kopf(tc, [['Formulierung der Befragten', 'bk5-original'], ['Code', 'bk5-code']]);
      var tbc = koerper(tc);
      d.codes.forEach(function (c) {
        var tr = u.element('tr', null, null, tbc);
        zelle(tr, 'td', 'bk5-original', c.original);
        zelle(tr, 'td', 'bk5-code', c.code);
      });
      zc.appendChild(tc);
    }

    /* --- Implikationsmatrix: je Ebenenpaar ein Block (Zeilen = von, Spalten = nach) --- */
    var zm = platz(f, 'matrix');
    if (zm) {
      var tm = neueTabelle('bk5-matrix', 'Implikationsmatrix: Zahl der direkten Verbindungen zwischen benachbarten Ebenen');
      for (var e = 0; e < ebenenReihe.length - 1; e++) {
        var von = d.knoten.filter(function (k) { return k.ebene === ebenenReihe[e]; });
        var nach = d.knoten.filter(function (k) { return k.ebene === ebenenReihe[e + 1]; });
        var block = u.element('tbody', { class: 'bk5-block', 'data-animation': 'einblenden', 'data-verzoegerung': String(120 * e) }, null, tm);
        /* Kopfzeile des Blocks: Ebene links oben, Ziel-Knoten als Spalten */
        var kz2 = u.element('tr', { class: 'bk5-blockkopf' }, null, block);
        /* Ecke: „von → nach“ in Kurzform (Daten: ebenen[].kurz), voller Name für Screenreader */
        var ecke = zelle(kz2, 'th', 'bk5-ecke', null);
        ecke.setAttribute('scope', 'col');
        ecke.setAttribute('aria-label', d.ebenen[e].name + ' zu ' + d.ebenen[e + 1].name);
        u.element('span', { class: 'bk5-ecke-von bk5-glied--' + e }, (d.ebenen[e].kurz || d.ebenen[e].name) + ' →', ecke);
        nach.forEach(function (k) {
          var th = zelle(kz2, 'th', 'bk5-ziel bk5-glied--' + (e + 1), k.text);
          th.setAttribute('scope', 'col');
        });
        von.forEach(function (k) {
          var tr = u.element('tr', null, null, block);
          var th = zelle(tr, 'th', 'bk5-von bk5-glied--' + e, k.text);
          th.setAttribute('scope', 'row');
          nach.forEach(function (z) {
            var n = anzahl[k.id + '>' + z.id] || 0;
            var kl = 'bk5-wert zahl';
            if (!n) kl += ' ist-null';
            else if (n >= cutoff) kl += ' ist-ueber';
            else kl += ' ist-unter';
            if (staerksteKanten[k.id + '>' + z.id]) kl += ' ist-staerkste';
            var c = zelle(tr, 'td', kl, n ? String(n) : '·');
            if (!n) c.setAttribute('aria-label', 'keine Verbindung');
          });
        });
      }
      zm.appendChild(tm);
    }
    var co = platz(f, 'cutoff');
    if (co) co.textContent = 'ab ' + cutoff + ' Nennungen → in die HVM (Folie 07)';
  }


  /* ---------------------------------------------------------------------------
     B6 · Codiertabelle der Kommunikationsanalyse
     --------------------------------------------------------------------------- */
  function rasterBauen(ctx) {
    var d = ctx.daten, ziel = platz(ctx.folie, 'raster');
    if (!d || !ziel || !d.zeilen || !d.spalten) return;
    var t = neueTabelle('bk6-tabelle', 'Codiertabelle der Kommunikationsanalyse (Auszug)');
    kopf(t, d.spalten.map(function (s) { return [s.titel, 'bk6-' + s.schluessel]; }));
    var tb = koerper(t);
    d.zeilen.forEach(function (z) {
      var tr = u.element('tr', { class: z.schluesselbild ? 'ist-schluesselbild' : '' }, null, tb);
      d.spalten.forEach(function (s, i) {
        var c = zelle(tr, i ? 'td' : 'th', 'bk6-' + s.schluessel, z[s.schluessel] === undefined ? '–' : z[s.schluessel]);
        if (!i) c.setAttribute('scope', 'row');
      });
    });
    ziel.appendChild(t);
  }


  /* ---------------------------------------------------------------------------
     Registrierung der sieben Backup-Folien
     --------------------------------------------------------------------------- */
  var BAUER = {
    b1: null,
    b2: promptLogBauen,
    b3: quellenBauen,
    b4: gridBauen,
    b5: ladderingBauen,
    b6: rasterBauen,
    b7: null
  };

  Object.keys(BAUER).forEach(function (id) {
    Deck.registriere(id, {
      einrichten: function (ctx) {
        /* nur einmal bauen (Schutz, falls einrichten erneut aufgerufen wird) */
        if (!ctx.folie._bkGebaut && BAUER[id]) {
          ctx.folie._bkGebaut = true;
          BAUER[id](ctx);
        }
        spruengeEinrichten(ctx.folie);
      }
    });
  });
})();
