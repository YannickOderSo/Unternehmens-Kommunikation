# AUTOREN.md – Schnittstelle für alle, die Folien ändern

Diese Datei beschreibt verbindlich, wie die Folien der Web-Präsentation (Fallstudie 1 „Brand Persona &
Markenidentität“, Marke **HOLY**) aufgebaut sind und wie man sie ändert. Die Engine (`js/deck.js`), die
Bausteine (`js/komponenten.js`, `css/komponenten.css`) und die Tokens (`css/tokens.css`) sind fertig –
Folien bestehen nur aus HTML mit den Klassen und Attributen unten, ergänzt um eine CSS- und eine
JS-Datei je Folien-Gruppe.

**Stand 16.10.2026 (Zusammenführung):** Alle Folien stehen direkt in **`index.html`** – das ist die
einzige Quelle für Folieninhalte. Den früheren Bauschritt (`folien/*.html` + `werkzeuge/zusammenbauen.py`)
gibt es nicht mehr. Ändern = `index.html` bearbeiten, speichern, im Browser **F5**.
Vor jeder Folie steht ein Kommentarkasten `FOLIE xx` (in `index.html` mit Strg+F „FOLIE 06“ suchen):
Bündel, Sollzeit, zugehörige CSS-/JS-Datei und was vor dem 26.10. noch zu ändern ist. Darunter folgt die
ausführliche Anleitung der Folie, dann die Folie selbst.

**Beispiele:** Die bisherige Demo-Datei ist entfernt; die echten Folien zeigen jeden Baustein in Benutzung
(Steuerrad: Folie 02, 10, 12 · Umfrage: 08 · Wortwolke: 01b, 10 · Rätsel: 01 · Kennzahlen/Zähler: 03, 09 ·
Tabellen: Backup B2–B6).

Alle Befehle unten werden im Ordner `fallstudie-1-brand-persona/praesentation/` ausgeführt.

---

## 1. Regeln (Pflicht)

| Regel | Wert |
|---|---|
| Bühne | fest 1920 × 1080 px, wird auf jedes Fenster skaliert (Letterbox). Alle Maße in Bühnen-Pixeln. |
| Titel | `.titel` = **Kernaussage als Satz** (nicht „Repertory Grid“, sondern „Drei Attribute heben HOLY ab“), 56–96 px (Token `--groesse-titel` = 72 px), höchstens 2 Zeilen, besser 1. |
| Fließtext | mindestens **28 px** (`--groesse-text` 30 px, `--groesse-text-min` 28 px). |
| Metaangaben | Quelle, Kicker, Seitenzahl, Badges, Achsen: 22–24 px (`--groesse-meta`). Tabellen im Backup mindestens 22 px (`--groesse-tabelle` 24 px). Nie für inhaltliche Aussagen. |
| Wortbudget | Hauptfolie höchstens ca. **40 sichtbare Wörter** (ohne Kopfzeile, Quelle, Kennzeichnungen). Mehr → schrittweise einblenden oder in die Notizen. |
| Kontrast | WCAG AA: 4,5 : 1, Großtext (ab 24 px) 3 : 1. Nur Farb-Tokens verwenden – dann stimmt es in allen Themen und mit allen Markenfarben (geprüft mit Gelb/Schwarz, Blau/Orange, Rot/Grau, Grün/Weiß). |
| Beispieldaten | Jede Folie mit erfundenen Werten trägt `<span class="beispiel">Beispieldaten</span>` (am besten im Kicker). Zahlen nie ohne Quelle. |
| Fakten über HOLY | nur aus `../recherche/holy-recherche.md`, mit Quelle und Faktenstatus aus dem Dossier. Solange es fehlt: Beispieldaten kennzeichnen, keine Logos, Zitate, Zahlen, Farben erfinden. |
| Markenname | immer per Platzhalter `<span data-marke></span>` (wird aus `marke.js` befüllt), nie fest eintippen. |
| Anrede | Sie-Form (`marke.js → anrede: 'Sie'`). Wo beides vorkommen kann: `data-anrede-sie="…" data-anrede-ihr="…"`. |
| Bedienhinweise | gehören in die Notizen, **nicht** auf die Folie („Felder sind klickbar“ o. Ä.). |
| Sprache | Texte, Kommentare, Dateinamen auf Deutsch, Umlaute korrekt (ä ö ü ß). |
| Offline | keine externen Schriften, Skripte, Bilder, CDNs. Bilder in `bilder/`, nur mit geklärten Rechten und Quelle in der Fußzeile. |
| Fachbegriffe | stammen aus Standardliteratur (Esch, Häusel, Kelly, Reynolds & Gutman, Aaker, Kroeber-Riel) – mit den Vorlesungsfolien abgleichen. |

---

## 2. Dateien und Ablaufplan

Alle Folien stehen in `index.html` in Vortragsreihenfolge (Reihenfolge im Dokument = Reihenfolge im Vortrag).
Zu jeder Folien-Gruppe gehören `css/folien/<name>.css` und `js/folien/<name>.js` (in `index.html` im
`<head>` bzw. am Ende eingebunden; neue Dateien dort selbst eintragen).

| ID | CSS/JS-Name | Inhalt | data-zeit | Bündel | data-feld |
|---|---|---|---|---|---|
| f01 | `01-einstieg.html` | Einstieg: Welche Marke steckt dahinter? + Titel | 45 | A | – (`leer`) |
| f01b | `01b-wortwolke.html` | (optional) Live-Wortwolke „Was verbinden Sie mit [Marke]?“ | 45 | A | `leer`, `data-optional` |
| f02 | `02-vorgehen.html` | Ausgangslage & Vorgehen (Steuerrad als interaktive Agenda) | 60 | A | `hub` |
| f03 | `03-markenkompetenz.html` | Markenkompetenz | 45 | A | `kompetenz` |
| f04 | `04-persona.html` | Brand Persona | 90 | A | `persona` |
| f05 | `05-limbic-map.html` | Limbic Map | 60 | A | `persona` |
| f06 | `06-repertory-grid.html` | Repertory Grid → Markenattribute | 90 | B | `attribute` |
| f07 | `07-laddering.html` | Laddering → Markennutzen | 90 | B | `nutzen` |
| f08 + f08b | `08-analogien` | Analogien + Live-Umfrage (70) · Markentonalität nach Aaker (50) | 70 + 50 | B | `tonalitaet` |
| f09 + f09b | `09-kommunikationsanalyse` | Kanäle & Bildwelt (65) · Markenbild: Corporate Design & Fit (55) | 65 + 55 | C | `bild` |
| f10 | `10-markensteuerrad.html` | Markensteuerrad (Synthese) | 75 | C | `hub` |
| f11 | `11-fazit.html` | Fazit & Empfehlungen | 90 | C | – (`leer`) |
| f12 | `12-fragen.html` | Danke & Fragen (Steuerrad als Sprungmenü) | 0 | alle | – (`leer`) |
| b1–b7 | `13-backup.html` | Backup: Methodik, Prompt-Log, Datenquellen Persona, RG-Rohdaten, Laddering-Matrix, KA-Raster, Quellenverzeichnis | 0 | je nach Inhalt | passend oder `leer`, `data-backup` |

Summe Hauptfolien ohne optionale Folie: 885 s = 14:45 (15 s Puffer); optionale Folie f01b 45 s, Backup 0 s.
Die Referentenansicht rechnet mit diesen Sollzeiten (`data-zeit`). Wer eine Sollzeit ändert, gleicht die
Summe wieder auf höchstens 900 s ab.

---

## 3. Folien-Format (verbindlich)

```html
<section class="folie" id="f06" data-titel="Repertory Grid" data-feld="attribute" data-zeit="90" data-buendel="B">
  <header class="folie-kopf">
    <p class="kicker">Repertory Grid <span class="beispiel">Beispieldaten</span></p>
    <h2 class="titel">Drei Attribute heben <em data-marke></em> vom Wettbewerb ab</h2>
  </header>
  <div class="folie-inhalt">
    … Elemente, gern mit data-schritt="1", data-schritt="2" … und data-animation="…" …
  </div>
  <footer class="folie-fuss">
    <p class="quelle">Quelle: eigene Erhebung (n = …) · Skala 1 = linker Pol, 7 = rechter Pol</p>
  </footer>
  <aside class="notizen">
    <p>Sprechtext für die Referentenansicht …</p>
    <p data-schritt="2">Absatz, der beim Erreichen von Schritt 2 hervorgehoben wird …</p>
  </aside>
  <script type="application/json" class="daten">{ "optional": "Daten für datengetriebene Grafiken" }</script>
</section>
```

### Attribute der `<section>`

| Attribut | Pflicht | Bedeutung |
|---|---|---|
| `class="folie"` | ja | sonst ignoriert |
| `id` | ja | `f01`…`f12`, `f01b`, `b1`…`b7` – bestimmt die angezeigte Nummer (f06 → „06“, b3 → „B3“) und die Adresse `#f06` |
| `data-titel` | ja | kurzer Name für Übersicht, Referentenansicht, Sprungmenü |
| `data-zeit` | ja | Sollzeit in Sekunden (Referentenuhr, Summe) |
| `data-buendel` | ja | `A`, `B`, `C` oder `alle` |
| `data-feld` | ja | `kompetenz`, `attribute`, `nutzen`, `tonalitaet`, `bild`, `persona`, `hub`, `leer` – steuert Mini-Steuerrad (oben rechts, aktuelles Feld markiert; `persona` = Rahmen markiert; bei `hub`/`leer` kein Mini-Rad), Rubrik in der Kopfzeile und die Sprungziele aller Steuerräder (erste Hauptfolie mit dem Feld) |
| `data-optional` | – | nur sichtbar, wenn `marke.js → optionaleFolien.<id>: true` (zum Testen: Adresse `?optional=alle`) |
| `data-backup` | – | liegt hinter der Schlussfolie; nur über Übersicht (O) erreichbar, eigene Rubrik |
| `data-layout` | – | siehe Abschnitt 4 |
| `data-rubrik="…"` | – | eigener Text rechts in der Kopfzeile (Standard: Feldname, bei Backup „Backup“) |
| `data-laufkopf="aus"` | – | keine Kopfzeile |
| `data-mini-rad="aus"` | – | kein Mini-Rad trotz Feld |
| `data-schritte="n"` | – | Mindestzahl Schritte (für Folien-Skripte ohne data-schritt-Elemente) |
| `data-modus="dunkel"` | – | diese eine Folie dunkel (z. B. Einstieg), Rest hell |
| `data-nummer="…"` | – | angezeigte Nummer überschreiben |

### Platzhalter (aus `marke.js`)

| Markup | Ergebnis |
|---|---|
| `<span data-marke></span>` / `<em data-marke></em>` | Markenname („HOLY“); `<em data-marke>` im Titel: auf hellen Folien schwarz mit gelbem Textmarker (`--f-kern`), auf dunklen in der Akzentfarbe (`css/komponenten.css`) |
| `<span data-marke="kurz"></span>` | Kurzname |
| `<span data-gruppe></span>` / `data-gruppe="zeilen"` | Namen mit „·“ bzw. untereinander |
| `<span data-datum></span>` / `data-datum="lang"` | 26.10.2026 bzw. „Montag, 26. Oktober 2026“ |
| `data-veranstaltung`, `data-dozent`, `data-hochschule`, `data-praesentation`, `data-fallstudie` | Angaben aus marke.js |
| `<span data-unternehmen></span>` | Firma hinter der Marke (`marke.js → unternehmen`, Einordnungszeile auf Folie 01 und 12) |
| `<img data-marke-logo>` | Logo-Pfad aus marke.js (`logo`, Folie 09b); das Logo der Titelfolie kommt aus `logoTitel` (setzt `js/folien/01-einstieg.js`) |
| `<h2 class="titel" data-umfrage-frage="tier"></h2>` | Frage der Umfrage aus marke.js |
| `data-anrede-sie="…" data-anrede-ihr="…"` | Text passend zur Anrede |
| `<span class="beispiel">Beispieldaten</span>` | Pille; per `marke.js → beispieldatenHinweis: false` ausblendbar (erst, wenn keine erfundenen Werte mehr da sind!) |

Pfade: `src="bilder/…"` in Folien relativ zum Ordner `praesentation/` schreiben (dort liegt `index.html`). In `data-*`-Attributen (z. B. `data-bild`) ebenfalls relativ
zu `praesentation/`; die Engine löst sie selbst auf.

---

## 4. Layouts (`data-layout`)

| Wert | Aufbau | Beispiel |
|---|---|---|
| (ohne) | Kopfzeile · Kopf · Inhalt (füllt den Rest) · Fuß | d04, d06 |
| `titel` | großer Titel im unteren Drittel, darunter `.angaben` | d01 |
| `geteilt` | Kopf links (5/12), Inhalt rechts (7/12) | d05 |
| `mitte` | alles zentriert (Zwischentitel) | d01b |
| `vollbild` | Inhalt randlos über die ganze Bühne; Kopf/Fuß in heller Schrift unten auf abgedunkeltem Verlauf (Kontrast gemessen ≥ 5 : 1 auch über weißem Bild). Text nur im unteren Drittel. | d02 |
| `backup` | kleinerer Titel (56 px), dichter | db1, db2 |
| `leer` | keine Kopfzeile, freie Fläche (Kopf/Inhalt/Fuß bleiben möglich) | – |

Raster im Inhalt: `.raster-12` mit `.sp-1` … `.sp-12`, `.raster-2`, `.raster-3`, `.raster-4`,
`.stapel` (senkrecht), `.reihe` (waagerecht), `.fuellen` (flex: 1), `.unten` (an den unteren Rand),
`.mitte-v`, `.zentriert`, `.luecke-gross`. `.folie-inhalt` ist eine senkrechte Flexbox.

---

## 5. Schritte und Animationen

Elemente mit `data-schritt="n"` (n ≥ 1) erscheinen nacheinander (Platz bleibt reserviert – kein
Layoutsprung). Rückwärts werden Schritte zurückgenommen; kommt man rückwärts auf eine Folie, sind
alle Schritte sichtbar. Elemente **ohne** `data-schritt`, aber mit `data-animation`, erscheinen beim
Betreten der Folie. Animationen in einem Schritt-Container (z. B. ein Zähler in einer Karte mit
`data-schritt`) laufen mit, wenn der Schritt erscheint.

| `data-animation` | Wirkung |
|---|---|
| `einblenden` (Standard) | weiches Einblenden |
| `hoch`, `runter`, `links`, `rechts` | Einblenden mit Weg (höchstens 18 px, Token `--weg`) |
| `zoom` | leichtes Heranzoomen (94 → 100 %) |
| `feder` | Herauswachsen mit echter Federkurve – **nur für Punkte/Marker** |
| `zeichnen` | SVG-Linien zeichnen sich (stroke-dashoffset); gestrichelte Linien/Flächen blenden ein; HTML-Element wächst von links |
| `zaehlen` | Zahl zählt hoch: `data-ziel="2.8"` `data-dezimalen="1"` `data-einheit=" %"` `data-vorzeichen` `data-start="0"` (deutsches Format: „+2,8“) |
| `unschaerfe` | wird scharf |
| `hervorheben` | immer sichtbar, wird ab Schritt n betont (`.ist-hervor`); `data-hervor="aktuell"` = nur solange der Schritt aktuell ist; `data-hervor-stil="flaeche|rahmen|text"`; Elterncontainer mit `data-dimmen` lässt Geschwister zurücktreten (Deckkraft: Token `--dimmen`, 0.6) |
| `zustand` | unsichtbarer Auslöser für Folien-Skripte (Hook `schritt`) |
| `keine` | keine Animation |

Weitere Attribute: `data-verzoegerung="200"` (ms), `data-dauer="900"` (ms), Container
`data-staffel` (Kinder gestaffelt, Standard 70 ms; `data-staffel="120"` = 120 ms; die Kinder erben
`data-animation` des Containers).

```html
<div class="raster-3" data-staffel data-animation="hoch"> <article class="karte">…</article> … </div>
<span class="kennzahl-wert" data-schritt="2" data-animation="zaehlen" data-ziel="27" data-einheit=" %">27 %</span>
<ol data-dimmen>
  <li data-schritt="1" data-animation="hervorheben" data-hervor="aktuell">…</li>
</ol>
<svg … data-schritt="3" data-animation="zeichnen"><path d="…"/></svg>
```

Bewegungsgrundsätze (Jury): ruhig, Wege ≤ 18 px, Staffel 70 ms, Feder nur für Punkte/Marker, keine
Endlosanimationen, kein `backdrop-filter`, kein Blur in Übergängen. Bei „Bewegung reduzieren“
(Betriebssystem oder `?bewegung=reduziert`) gibt es nur Überblendungen – automatisch.

**Morph zwischen Folien:** gleiches `data-morph="name"` auf zwei Folien → das Element gleitet beim
Wechsel von der einen in die andere Position (View Transitions; ohne Unterstützung einfache
Überblendung). Pro Folie jeder Name nur einmal. Das Hub-Steuerrad morpht automatisch in das
Mini-Steuerrad der Zielfolie (Name `steuerrad`, nicht selbst vergeben). Zwischen großem Rad und Mini-Rad
setzt `deck.js` die Klasse `html.wechsel-rad-gross`: Das Rad ist unterwegs ausgeblendet (sonst flog es als
graue Scheibe über den neuen Titel). Wechselt hell ↔ dunkel (z. B. Folie 01 → 02), setzt `deck.js`
`html.wechsel-modus`: alte Folie erst aus-, dann die neue einblenden (kein graues Doppelbild). Aussehen:
`css/deck.css`, Abschnitt 7.

---

## 6. Bausteine (Beispiele: die Folien in `index.html`)

### a) Markensteuerrad `.steuerrad` (Felder und Leitfragen nach Esch – mit Vorlesung abgleichen)

Felder: `kompetenz` (Zentrum), `nutzen` (oben links), `attribute` (unten links), `tonalitaet`
(oben rechts), `bild` (unten rechts), Rahmen `persona`. Links hard facts (`--f-hart*`), rechts soft
facts (`--f-weich*`), Kern `--f-kern`. Felder, Methoden und Rahmen sind klickbar (Maus, Tab + Enter)
und springen zur ersten Hauptfolie mit dem passenden `data-feld`.

**Hub** (f02, interaktive Agenda) – füllt den freien Platz im Inhalt und baut sich nach Themenwechsel neu:
```html
<div class="steuerrad" data-modus="hub" data-aufbau="schritte"></div>
```
- `data-aufbau="schritte"`: Methode für Methode (Reihenfolge Desk Research, Persona, Repertory Grid,
  Laddering, Analogien, Kommunikationsanalyse) + Schlussschritt; das gezeigte Feld und seine Methode
  leuchten, der Rest tritt zurück (Token `--dimmen`; funktioniert mit Clicker, ohne Maus).
  `data-schritt-start="n"` (erster Schritt), `data-schluss="aus"`.
- `data-leitfragen="schrittweise"` (Standard: Leitfrage nur beim gezeigten Feld; passt sie nicht ins
  Feld, steht sie automatisch unter der Methodenkarte) | `an` | `aus`.
- `data-beschreibungen="schrittweise"` (Standard) | `an` | `aus` – Methodenbeschreibung.
- `data-logik="aus"` (gestrichelte Logikpfeile „Attribute sind die Startpunkte“, „Tonalität ist der
  Prüfmaßstab“), `data-seiten="aus"` (Hard/Soft-Facts-Beschriftung), `data-breite`/`data-hoehe`
  (feste Größe), `data-kartenbreite`, `data-morph="aus"`.
- Methoden, Texte, Logik und Reihenfolge per JSON im Baustein überschreibbar:
```html
<div class="steuerrad" data-modus="hub" data-aufbau="schritte">
  <script type="application/json">{
    "methoden": [ { "feld": "kompetenz", "name": "Desk Research", "text": "Herkunft, Historie, Marktrolle" }, … ],
    "logik": [ { "von": "attribute", "nach": "nutzen", "text": "Attribute sind die Startpunkte" } ],
    "reihenfolge": ["kompetenz", "persona", "attribute", "nutzen", "tonalitaet", "bild"]
  }</script>
</div>
```
Tipp für ein großes Rad: Titel einzeilig halten (dann ca. 690 px Höhe für das Rad).

**Synthese** (f10) – Stichworte je Feld mit Quellenkürzel, Markenkern im Zentrum:
```html
<div class="steuerrad" data-modus="synthese" data-aufbau="schritte">
  <script type="application/json">{
    "kern": "…",
    "felder": {
      "attribute":  { "stichworte": ["…", "…"], "quelle": "RG" },
      "nutzen":     { "stichworte": [ { "text": "…", "quelle": "LAD" } ] },
      "tonalitaet": { … }, "bild": { … }, "persona": { … }, "kompetenz": { … }
    }
  }</script>
</div>
```

**Sprungmenü** (f12, Fragerunde): `<div class="steuerrad" data-modus="menue" data-groesse="600"></div>`
– großes Rad mit „Folie x“ je Feld und Ringtexten.

**Mini-Rad**: kommt automatisch in die Kopfzeile jeder Folie mit Feld (60 px, aktuelles Feld in
Akzentfarbe). Klick öffnet das Sprungmenü (morpht aus dem Mini-Rad). Selbst nicht nötig.

### b) QR-Code
```html
<div class="qr" data-qr="https://…" data-kurz="kurz.de/xy" data-groesse="400"></div>
```
Scharfes SVG (Fehlerkorrektur M, Ruhezone 4 Module), immer dunkel auf weiß, Kurz-URL 40 px darunter
(ohne `data-kurz` automatisch aus der Adresse). Für hintere Reihen ≥ 360 px. Vorher mit mehreren
Handys testen.

### c) Live-Umfrage
```html
<div class="umfrage" data-umfrage="tier" data-aufloesung="1" data-aussage="2"></div>
```
- Daten aus `marke.js → umfragen.tier`: `frage`, `optionen` (≤ 9), `link` (QR; leer = kein QR, nur
  Zählmodus), `kurzLink`, `ergebnisLink` (Knopf „Ergebnisse öffnen“), `unsereAntwort`, `aussage`,
  `beispielwerte`. Einzelne Werte per JSON im Baustein überschreibbar (`<script type="application/json">`).
- Linke Spalte: QR-Code, Kurz-URL, „anonym · ohne Anmeldung“, Stimmenzähler (`data-stimmen="aus"`,
  `data-qr="aus"`, `data-qr-groesse="380"`).
- Ergebnis: Pille LIVE (ruhig pulsierend), `n = …`, Pille Beispieldaten (solange Beispielwerte),
  Balken mit Prozent (aus den Stimmen berechnet) und Anzahl.
- **Beispielwerte werden nie mit echten Stimmen gemischt:** Die erste echte Stimme (Klick, Ziffer oder
  eine Zahl > 0 über „Werte“) setzt alle Beispielwerte auf 0; die Pille „Beispieldaten“ verschwindet.
  Solange Beispielwerte stehen, beginnen die Felder unter „Werte“ bei 0.
- `data-aufloesung="n"`: in Schritt n wird die Zeile „Unsere Analyse“ umrahmt (`aus` = nie).
- `data-aussage="n"`: in Schritt n weicht der QR-Block der großen Aussagezahl „27 % sehen HOLY wie
  wir: als Waschbär“.
- Bedienung im Vortrag: Klick auf Option = +1, Umschalt+Klick oder Rechtsklick = −1, Ziffern 1–9
  (Umschalt = −1, nur solange die Umfrage zu sehen ist), Doppelklick auf einen Wert = Zahl eintippen,
  Knopf „Werte“ = alle eintragen (z. B. aus Mentimeter/Particify; Tab = nächstes Feld, nach dem letzten
  bzw. mit erneutem Klick auf „Werte“ wird alles übernommen), „Zurücksetzen“ (zweimal innerhalb von 3 s
  klicken). Ergebnisse überstehen
  ein Neuladen (Browser-Speicher) und erscheinen auch im Referentenfenster.
- Getrennt platzierbar (auch auf späteren Folien):
  `<div class="umfrage-aussage" data-umfrage="tier"></div>`, `<div class="umfrage-stimmen" data-umfrage="tier"></div>`.

### d) Live-Wortwolke
```html
<div class="wortwolke" data-wortwolke="assoziationen"></div>
<div class="wortwolke" data-wortwolke="assoziationen" data-nur-anzeige data-schrift="30"></div>
```
Teammitglied tippt Zurufe + Enter; Mehrfachnennungen werden größer, das häufigste Wort in
Akzentfarbe. Gespeichert im Browser; dieselbe Wolke erscheint mit `data-nur-anzeige` auf späteren
Folien. „Wolke leeren“ (zweimal klicken), Alt+Klick entfernt ein Wort. Im Eingabefeld sind alle
Tasten Texteingabe; Bild↑/Bild↓ (Clicker) und Esc verlassen das Feld. Texte aus
`marke.js → wortwolken.assoziationen` (`platzhalter`, `leerText`, `startwoerter`).

### e) Rätsel (Einstieg)
```html
<section class="folie" id="f01" … data-layout="vollbild">
  <header class="folie-kopf">
    <p class="kicker">Einstieg</p>
    <h2 class="titel">Welche Marke steckt dahinter?</h2>
    <p class="lead" data-anrede-sie="Ihr Tipp? Rufen Sie ihn einfach in den Raum."></p>
    <p class="raetsel-loesung" data-schritt="3" data-animation="hoch">Auflösung: <span data-marke></span></p>
  </header>
  <div class="folie-inhalt">
    <div class="raetsel" data-stufen="300/40,210/22,145/9,100/0" data-fokus="60% 40%" data-alt="…"></div>
  </div>
  …
</section>
```
Bild aus `marke.js → raetselBild` (oder `data-bild="bilder/…"`). Stufen „Zoom %/Unschärfe px“ – vier
Stufen = drei Klicks, Fortschritt „Hinweis x von 4“ oben rechts (`data-fortschritt="aus"`).
`data-fokus` = Bildausschnitt, auf den gezoomt wird. `data-schritt-start` verschiebt den Beginn.
Auf Folie 01 erscheint mit der Auflösung das Logo aus `marke.js → logoTitel` (gelbes Oval, unverändert,
nur verkleinert; Höhe in `css/folien/01-einstieg.css` → `--einstieg-logo-gross` / `--einstieg-logo-titel`)
anstelle des Markennamens in Schrift; der Name bleibt als alt-Text. Ohne `logoTitel` steht der Name da.

### f) Zähler, Kennzahl, Hantel
```html
<div class="kennzahl">
  <span class="kennzahl-wert" data-animation="zaehlen" data-ziel="2.8" data-dezimalen="1" data-vorzeichen>+2,8</span>
  <span class="kennzahl-text">Vorsprung „innovativ“</span>
  <span class="hantel" data-wert-marke="5.9" data-wert-wettbewerb="3.1" data-min="1" data-max="7" data-breite="280"></span>
</div>
```
`.kennzahl-wert--mittel` (72 px), `.kennzahl-einheit`, `.kennzahl-reihe`. Hantel: ● Marke ↔ ○ Wettbewerber
auf der Skala – zeigt, woher die Zahl kommt.

### g) Gestaltungsbausteine
```html
<p class="kicker">Rubrik <span class="beispiel">Beispieldaten</span></p>
<span class="live"><span class="live-punkt"></span>Live</span>
<p class="lead">Unterzeile (34 px, gedeckt)</p>
<article class="karte">  <!-- Varianten: karte--flaeche, karte--akzent, karte--hart, karte--weich, karte--hervor, karte--linie -->
  <span class="karte-kicker">Kicker</span><span class="karte-titel">Titel</span><span class="karte-text">Text ≥ 28 px</span>
</article>
<span class="chip">Tag</span>  <!-- chip--akzent, chip--rahmen, chip--hart, chip--weich, chip--gross (28 px) -->
<div class="legende"><span class="legende-daten">Daten (Quelle)</span><span class="legende-annahme">Annahme</span></div>
<article class="karte ist-annahme">… gestrichelt = Annahme …</article>   <!-- .ist-daten = Akzentstrich links -->
<figure class="bild-platzhalter" data-beschriftung="Foto: Persona"></figure>   <!-- mit <img> darin = Bild -->
<img class="bild" src="bilder/…" alt="…">
<blockquote class="zitat"><p class="zitat-text">„…“</p><cite class="zitat-quelle">Quelle</cite></blockquote>
<ul class="liste"><li>…</li></ul>   <ol class="liste liste--nummern"><li>…</li></ol>
<table class="tabelle"> … <tr class="ist-markiert"> … <td class="zahl">6,2</td> … </table>
<div class="angaben"><div><span class="angaben-titel">Marke</span><span class="angaben-wert angaben-wert--marke" data-marke></span></div>…</div>
<svg class="icon"><use href="#i-video"/></svg>
```
Weitere Textklassen: `.text`, `.gross`, `.untertitel`, `.text-2` (gedeckt), `.akzent`, `.zahl`,
`.fett`, `.titel--gross`, `.titel--klein`, `<em>` im Titel (Akzent), `.quelle`, `.meta`.

**Icons** (eigene, schlichte Linien-Icons 24 × 24, Strich 2, Inline-SVG-Sprite am Anfang
von `index.html`, keine Plattform-Logos): `pfeil-rechts pfeil-links pfeil-hoch pfeil-runter
raster referent palette mond sonne vollbild hilfe steuerrad schliessen start pause zuruecksetzen
schwarz extern stift plus minus loeschen haken info lupe person gruppe leiter tabelle vergleich
sprechblase megafon video bild daten diagramm ziel kompass herz stern zitat uhr qr link lampe blatt
dokument annahme` → `<svg class="icon"><use href="#i-NAME"/></svg>` (Größe = Schriftgröße).

---

## 7. Tokens (`css/tokens.css`) – nur diese Variablen verwenden

- **Farben**: `--f-hintergrund`, `--f-flaeche`, `--f-flaeche-2`, `--f-text`, `--f-text-2`, `--f-linie`,
  `--f-linie-stark`, `--f-akzent`, `--f-akzent-flaeche`, `--f-auf-akzent`, `--f-hart`, `--f-hart-flaeche`,
  `--f-weich`, `--f-weich-flaeche`, `--f-kern`, `--f-auf-kern`, `--f-rahmen`, `--f-erfolg`, `--f-warnung`,
  `--f-fehler`, `--f-fokus`, `--f-diagramm-marke`, `--f-diagramm-wettbewerb`, `--f-diagramm-ideal`,
  `--f-balken`, `--f-karte`, `--f-karte-rand`, `--f-auf-bild`, `--f-bild-schleier`, `--f-qr-grund`,
  `--f-qr-punkt`, `--f-letterbox`, `--f-hintergrund-bild`; Marke: `--marke-primaer`, `--marke-sekundaer`
  (nie direkt verwenden – immer die abgeleiteten Tokens).
- **Schrift**: `--schrift-display`, `--schrift-text`, `--schrift-zahl`, `--schrift-kicker`,
  `--gewicht-titel`, `--gewicht-display`, `--gewicht-zahl`, `--gewicht-text`, `--gewicht-fett`,
  `--opsz-titel`, `--laufweite-titel`, `--stil-hervor`, `--stil-marke`, `--kicker-versalien`,
  `--kicker-laufweite`, `--kicker-gewicht`, `--achsen-ruhig` (`"WONK" 0` – ruhige Formen der kursiven
  Fraunces; wer `font-variation-settings` setzt, schreibt es mit: `"opsz" 36, var(--achsen-ruhig)`).
- **Größen**: `--groesse-titel-gross` 96, `--groesse-titel` 72, `--groesse-titel-klein` 56,
  `--groesse-untertitel` 40, `--groesse-gross` 34, `--groesse-text` 30, `--groesse-text-min` 28,
  `--groesse-tabelle` 24, `--groesse-meta` 22, `--groesse-kennzahl` 120; `--zeilenhoehe-titel`,
  `--zeilenhoehe-text`.
- **Abstände/Raster**: `--abstand-1` … `--abstand-8` (8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 px),
  `--rand-x`, `--rand-oben`, `--rand-unten`, `--rinne`.
- **Form**: `--radius-s`, `--radius-m`, `--radius-l`, `--radius-pille`, `--karte-rand`, `--karte-polster`,
  `--linie-fein` (2 px), `--linie-stark` (3 px), `--schatten-1`, `--schatten-2`, `--mini-rad`.
- **Bewegung**: `--dauer-kurz` 240 ms, `--dauer-mittel` 560 ms, `--dauer-lang` 1100 ms,
  `--dauer-folie`, `--staffel` 70 ms, `--weg` 18 px, `--dimmen` 0.6 (Deckkraft zurücktretender Elemente), `--kurve`, `--kurve-feder` (echte Feder per
  `linear()`, Ersatz cubic-bezier), `--kurve-wechsel`.

Themen: `editorial` (Standard, Jury-Wahl), `bento`, `keynote`, je `hell`/`dunkel` – Taste T / D.
Alle Farben werden aus den zwei Markenfarben berechnet (feste OKLCH-Helligkeit, nur der Farbton kommt
aus der Marke; Schrift auf Akzent/Kern automatisch schwarz oder weiß).

---

## 8. Folien-Skripte (`js/folien/<datei>.js`)

```js
(function () {
  'use strict';
  Deck.registriere('f06', {
    einrichten: function (ctx) { /* einmal beim Start: Grafik aus ctx.daten bauen, data-schritt setzen */ },
    betreten:   function (ctx, schritt) { /* Folie wird gezeigt (läuft im Übergang – kurz halten) */ },
    verlassen:  function (ctx) { /* Folie wird verlassen */ },
    schritt:    function (ctx, n, richtung) { /* richtung: 'vor' | 'zurueck' | 'start' */ },
    druck:      function (ctx) { /* Endzustand für PDF herstellen */ },
    vorschau:   function (ctx, klon, schritt) { /* Miniatur (Übersicht/Referent) anpassen */ }
  });
})();
```
`ctx`: `folie` (das `<section>`-Element), `id`, `daten` (geparstes JSON aus `script.daten`), `schritt`,
`schritteGesamt`, `richtung`, `bewegungReduziert`, `druckmodus`, `referent`, `marke`, `util`, `deck`.
Elemente, die in `einrichten` mit `data-schritt` entstehen, zählen automatisch als Schritte. Baut ein
Skript später neu: `Deck.schritteNeu(ctx.folie)`. Beispiele: `js/folien/*.js`.

Seit 16.10.2026 zusätzlich: `ctx.sofort` (true = Folie ohne Übergang erreicht – Start, Sprung aus der
Übersicht, per Adresse, Prüfwerkzeug; Auftrittsanimationen können dann entfallen). Während eines
animierten Folienwechsels trägt `<html>` die Klasse `wechsel-laeuft`; an seinem Ende kommt das Ereignis
`deck:wechsel-ende` (`detail: { folie }`) – statt eigener Timer verwenden.

**Deck-Schnittstelle**
- `Deck.zustand()` → `{ folie, folienIndex, schritt, schritteGesamt, anzahlFolien, anzahlHauptfolien, titel, feld, nummer, backup, thema, modus }`
- `Deck.gehe(folie, schritt, optionen)` – Folie als ID, Index, Nummer („6“, „B2“) oder Element; Schritt
  Zahl oder `'ende'`; optionen `{ sofort: true }` (ohne Übergang)
- `Deck.weiter()`, `Deck.zurueck()`, `Deck.folien()`, `Deck.feldZiel(feld)`, `Deck.feldZiele(feld)`,
  `Deck.marke` (Konfiguration aus marke.js), `Deck.hinweis(text)`, `Deck.thema(name, modus)`,
  `Deck.farbe('primaer', '#…')`, `Deck.bereit` (Promise), `Deck.taste(fn)`, `Deck.baustein(name, def)`
- Ereignisse auf `document`: `deck:bereit`, `deck:folie`, `deck:schritt`
  (`detail: { folie, folienIndex, schritt, schritteGesamt, richtung }`), `deck:thema`, `deck:groesse`
- `Deck.util`: `zahlFormat(2.8, 1, { vorzeichen: true })` → „+2,8“, `prozentFormat(0.27)` → „27 %“,
  `zeitFormat(95)` → „1:35“, `warte(ms)` (Promise), `animiere(el, keyframes, optionen)` (beachtet
  „Bewegung reduzieren“, gibt immer ein Objekt mit `.finished`), `zaehle(el, von, bis, optionen)`,
  `svg(tag, attr, eltern)`, `element(tag, attr, text, eltern)`, `polar(cx, cy, r, grad)`,
  `bogen(cx, cy, r, start, ende)`, `rund(x)`, `escape(text)`, `markeText('… [Marke] …')`,
  `pfad('bilder/x.svg')`, `laden(schluessel, standard)` / `speichern(schluessel, wert)` (Browser-Speicher
  mit try/catch), `token('--dauer-mittel')`, `kurve('feder')`, `messen(el, fn)`, `istAktiv(el)`,
  `bewegungReduziert()`, `anrede(sie, ihr)`, `icon(name)`, `alle(selektor, wurzel)`.

Regeln: keine globalen Variablen (IIFE), keine Bibliotheken von außen, Fehler werden mit Foliennamen
in der Konsole gemeldet – die Konsole muss leer bleiben. Folien-CSS in `css/folien/<datei>.css` immer mit
eigener Klasse oder `#f06` beginnen.

---

## 9. Arbeitsablauf: Folie ändern und prüfen

1. `index.html` im Editor öffnen, mit Strg+F den Kasten `FOLIE 06` suchen, Text in der `<section>` ändern
   (Titel `h2.titel`, Sprechtext `aside.notizen`, Daten `script.daten` – JSON: Anführungszeichen und Kommas
   beachten). Gestaltung in `css/folien/<name>.css`, Verhalten in `js/folien/<name>.js`.
2. Speichern, im Browser **F5**, Folie ansehen (alle Schritte durchklicken). Konsole (F12) muss leer sein.
3. Automatisch prüfen (braucht Node.js und playwright-core mit Chromium – nur für die Prüfung):

```bash
cd fallstudie-1-brand-persona/praesentation
export PLAYWRIGHT_CORE=/pfad/zu/node_modules/playwright-core
export CHROME_PFAD=/pfad/zu/chrome            # Standard: /opt/pw-browsers/chromium-1194/chrome-linux/chrome

node werkzeuge/pruefen.mjs index.html --ausgabe _test/pruefung --schritte
#    nur einzelne Folien: --nur f06,f07 · weitere Optionen: --thema bento|keynote --modus dunkel
#    --skala 0.5 --druck _test/probe.pdf --optional --primaer FFD007 --sekundaer 1D1D1B
#    --bewegung-reduziert --ohne-bilder
```
4. Screenshots in `_test/pruefung/` ansehen (`f06_s0.png`, `f06_s1.png` …), `bericht.json` lesen:
   „fehler“ müssen leer sein; „warnungen“ (Wortbudget, Schrift < 28 px) begründen oder beheben.
5. Mindestens einmal auch dunkel und in einem anderen Thema prüfen. `_test/` ist in `.gitignore`.

`pruefen.mjs` endet mit Exit-Code 0 (keine Fehler), 1 (Fehler) oder 2 (Abbruch).

Was `pruefen.mjs` prüft: Konsolen- und Seitenfehler, fehlende Dateien, externe Anfragen (blockiert),
geladene Schriften, Farbpaare aus den Tokens (auch Text auf Steuerrad-Feldern), Elemente außerhalb der
Bühne, abgeschnittener bzw. aus einem Kasten ragender Text, **überlappender Text**, Schriftgrößen (< 22 px
Fehler, < 28 px Warnung außer Metaangaben), Kontrast jedes Textes zu seinem Hintergrund, Wortbudget
(„Marken-<br>nutzen“ zählt als ein Wort), fehlende Notizen, fehlendes `data-zeit`/`data-titel`; mit
`--schritte` die Text- und Kontrastprüfungen in **jedem** Schritt (Befunde nur in Zwischenschritten
tragen „nur in Schritt n“); mit `--druck` zusätzlich PDF mit einer Seite je Folie.

Ausnahmen: `data-ueberlauf-ok` an einem Element (z. B. absichtlich angeschnittenes Bild) nimmt es samt
Inhalt von der Überlauf- und Abschneideprüfung aus, `data-ueberlappung-ok` von der Überlappungsprüfung.
Absolut positionierte Beschriftungen, die ganz außerhalb ihres Kastens stehen (z. B. Methodenbeschreibung
unter einer Steuerrad-Karte), gelten nicht als „aus dem Kasten ragend“. Ausnahmen sparsam verwenden und im
HTML-Kommentar begründen.

---

## 10. Änderungen an der Engine bei der Zusammenführung (16.10.2026)

| Bereich | Änderung |
|---|---|
| `marke.js` | Markenfarben Gelb `#FFD007` / Schwarz `#1D1D1B` (Dossier 6.3 ✔ [1], Web-Werte); Umfrage-Optionen passend zu Folie 08 (Adler, Löwe, Waschbär, Fuchs, Delfin; unsere Antwort: Waschbär); Hinweise zu Logo und Rätselbild. |
| Umfrage (`js/komponenten.js`) | Ziffern 1–9 zählen nur, solange die Umfrage sichtbar ist (sonst Navigation, z. B. „7 Enter“); Tab/Umschalt+Tab springt durch die Eingabefelder („Werte“), nach dem letzten werden alle übernommen; zweiter Klick auf „Werte“ übernimmt und schließt; „Zurücksetzen“ verwirft offene Felder; Weiterblättern übernimmt offene Felder. Die Übergangslösung in `js/folien/08-analogien.js` ist entfernt. |
| Steuerrad (`js/komponenten.js`, `css/komponenten.css`) | „Mausregel“ zentral für alle Steuerräder: Nach jedem Folien-/Schrittwechsel hebt eine ruhende Maus nichts hervor (`html.zeiger-gesperrt`), erst nach ≥ 6 px Bewegung; CSS-Hover-Effekte ebenso. Lokale Lösung in `02-vorgehen.js/.css` entfernt. Alle Methodenkarten linksbündig (tote Regel für rechtsbündige Karten entfernt). |
| Token `--dimmen` (`css/tokens.css`) | Deckkraft zurücktretender Elemente zentral 0.6 (vorher 0.45 bzw. je Folie verschieden): Steuerrad-Fokus, `data-dimmen`, Hervorhebungen auf 06, 08b, 09, 09b. Kernbeschriftung bleibt deckend. |
| Kopfbereich (`css/deck.css`, `css/komponenten.css`) | Kopfzeile auf allen Folien gleich hoch (Mini-Rad ragt in den Rand statt die Zeile zu vergrößern); Pillen „Beispieldaten“/„Live“ machen die Kickerzeile nicht höher → Kicker und Titel stehen auf allen Hauptfolien auf derselben Höhe. |
| `js/deck.js` | `ctx.sofort`, Klasse `html.wechsel-laeuft`, Ereignis `deck:wechsel-ende`; Hilfe-Text ergänzt (Ziffern, Taste Z). `02-vorgehen.js` nutzt beides (kein eigener Timer, kein Radaufbau bei Direktsprüngen). |
| `werkzeuge/pruefen.mjs` | Prüfung in jedem Schritt, Überlappungsprüfung, Wortzählung mit Silbentrennung, Ausnahmen dokumentiert, Aufruf für `index.html`. |
| Fußzeilen | Einheitlich „Quelle: …“ (Bildnachweis auf Folie 01: „Bild: …“, B7: „Hinweis: …“). |
| `bilder/platzhalter-raetsel.svg` | eingebauter Hinweistext entfernt (wurde in der Bildtafel von Folie 01 abgeschnitten). |


## 11. Änderungen nach der Abschlussprüfung (16.10.2026)

| Bereich | Änderung |
|---|---|
| Ebenen (`js/deck.js`) | Nach dem Schließen von Übersicht/Hilfe geht der Fokus **nicht** zurück an einen Knopf der Bedienleiste (sonst öffnete die nächste Leertaste/Enter die Ebene erneut, statt weiterzuschalten). |
| Bedienleiste (`js/deck.js`) | zeigt die Foliennummer wie Kopfzeile und Übersicht („08b / 12“, „12 / 12“), nicht mehr die Position. |
| Ziffernsprung (`js/deck.js`) | Nach einer Ziffer gehört „b“ zur Nummer: `8` `B` `Enter` → Folie 08b. Jede andere Taste (Pfeil, Leertaste, Schwarzbild …) verwirft eine angefangene Nummer; Schwarzbild leert den Puffer. Hilfe ergänzt. |
| Umfrage (`js/komponenten.js`) | Erste echte Stimme löscht die Beispielwerte (siehe 6c). |
| Steuerrad (`js/komponenten.js`, `css/komponenten.css`) | Ringbeschriftung „Brand Persona · Folien 04–05“ gehört bei klickbaren Rädern zum Persona-Knopf (Klick auf die Schrift springt zu Folie 04); „Hard/Soft Facts“ und der Trennstrich lassen Klicks durch (`pointer-events: none`). |
| Druck mit Notizen (`css/deck.css`) | `?druck&notizen`: Sprechtext wird nicht mehr abgeschnitten, sondern läuft auf Folgeseiten weiter (Seite 1920 × 1620 px, nächste Folie immer auf neuer Seite). |
| Bewegung reduzieren (`css/deck.css`) | Bedienleiste und Hinweis blenden nur über die Deckkraft ein/aus (kein Weg). |
| Folie 01 | neues gezeichnetes Rätselmotiv (Dose + Shaker vor Gelb, ohne Logo), `data-fokus="66% 42%"` – das Motiv bleibt im Schlussbild ganz in der Bildtafel. |
| Folie 02 | Zeile „Ausgangslage 2021 → 2026“ nur noch im Sprechtext (Zeitleiste steht auf Folie 03); Sprechtext nennt Identität = Selbstbild, Repertory Grid/Laddering = Fremdbild. |
| Folie 03 | „Spezialist“ in der Quellzeile als eigene Einordnung (H) gekennzeichnet. |
| Folie 04 | Persona-Platzhalter als gezeichnete Szene „Marco in der Nachtschicht“ (feste Nachtfarben, Reflexstreifen in der Markenfarbe). |
| Folie 05 (`js/folien/05-limbic-map.js`) | Bricht der Titel um (z. B. längerer Markenname), wird er automatisch auf 56 px gesetzt – sonst rückte die Liste „Folgen“ in die Quellzeile. |
| Folie 07 | Verbindungen gedeckter; die tragende Leiter (`"kern": true` in den Daten) färbt sich im letzten Schritt in der Akzentfarbe. |
| Folie 08b | Wettbewerber mit `"beispiel": true`: Marker gestrichelt, Legende „gestrichelt: Beispielwert, nicht erhoben“; Fußzeile entsprechend. |
| Folie 09 | Bildwelt als waagerechte Balken je Motivgruppe (Zahl in 44 px, Comic-Tiere in Akzentfarbe) plus **ein** Schlüsselbild rechts (Schritt 2) statt acht Platzhalter-Kacheln. Daten: `bildwelt[].anteil`, Schlüsselbild = Beitrag mit `"schluesselbild": true`. |
| Folie 09b | Logo-Zeile ohne Bild, solange `marke.js → logo` nur der Platzhalter ist (Beschreibung in Textgröße). Palette: Farben aus den Daten haben Vorrang (Dubletten werden entfernt, Warnung nur bei mehr als 5 eigenen Farben); Farben aus `marke.js` kommen nur dazu, solange Platz ist – andere Testfarben erzeugen keine Konsolenwarnung mehr. |
| Folie 10 | Methodenkürzel und Legende auf der Folie ausgeblendet (Legende in den Notizen); Lücken größer (Kopf 28 px, Text 32 px, Nummern 40 px), kürzer („Koffein vs. gutes Gewissen“, „Bildwelt zu jung“) und ohne Feldpaar; Feldnamen 24 px; Persona-Leiste „Marco, 28 · Abenteurer“. |
| Folie 11 | Befunde gekürzt (wortgleich mit Folie 10); Sprechtexte der Folien 09, 09b und 11 um ca. 20–25 % gekürzt (≈ 1,5–1,8 Wörter/s). |
| Backup B8 (neu) | „Belege der Folien“: alle sichtbar zitierten Quellennummern mit Kurzangaben aus Dossier Anhang B; B7 verweist darauf. |

**Testen mit anderem Markennamen/anderen Farben** (z. B. für eine andere Marke): Ordner kopieren, in der
Kopie `marke.js` ändern und `node werkzeuge/pruefen.mjs index.html --schritte` laufen lassen. Geprüft am
16.10.2026 mit „Testmarke“ und `#2A6FDB`/`#3B2A1A`: keine Fehler, Konsole leer.

## 12. Nacharbeit nach Abschluss- und Live-Prüfung (16.10.2026)

| Bereich | Änderung |
|---|---|
| Folie 01 | Offizielles HOLY-Logo (gelbes Oval, `marke.js → logoTitel`, `bilder/holy-logo-oval.png`) erscheint mit der Auflösung (Schritt 1) und bleibt auf der Titelfolie – anstelle des Markennamens in Schrift; im Rätsel (Schritt 0) nicht zu sehen. Quelle in der Fußzeile („Logo © HOLY Softdrinks GmbH, de.holy.com (Abruf 16.10.2026)“, erscheint wie die Bildquelle erst mit der Auflösung). Einordnungszeile „Studentische Fallstudie · keine Verbindung zur …“ unter den Angaben. |
| Folie 02 | Titel in 72 px wie die übrigen Inhaltsfolien; die Leitfrage „Wer bin ich?“ steht in Schritt 1 vorn in der Pille „Desk Research“ statt im gelben Zentrum (stieß dort an den Kernring). |
| Folie 06 | Kopfzeile getrennt: „Nennungen“ über der linken Spalte, „Skala“ direkt vor den Zahlen 1–7 (Daten: `nennungenTitel`, `skalaTitel`). |
| Folie 08b | Karte „Ins Steuerrad“ erscheint samt Überschriften erst im letzten Schritt (vorher leerer Rahmen). |
| Folie 10 | Band „Markenkern“ erscheint erst in seinem Schritt (kein gestrichelter Leerkasten mehr); Lücken in Braun-Orange (`--f-warnung`), Rot nur für „Bruch“; eigener Titel im optionalen Abgleich-Schritt („Ihr Bild von HOLY trifft unseren Kern – teilweise“), im Druck bleibt die Kernaussage. |
| Folie 11 | Verweis-Pillen „Lücke 1/2“ in Braun-Orange, „Bruch“ rot; Unterzeilen der Empfehlungen im Druck und in Aufnahmen (`?aufnahme`, Exportbilder) immer offen. |
| Folie 12 | zweite Fußzeile mit der Einordnung (studentische Fallstudie). |
| Folie 05 | Dominanz-Punkt gedecktes Rosé statt Signalrot. |
| B1 | „[N]“ durch die geplante Zahl „3“ ersetzt (wie auf Folie 06–08, B2, B4, B5); Pille „teils geplant“ bleibt bis zu den Interviews. |
| Titel aller Folien | Markenname schwarz mit gelbem Textmarker (helle Folien), dunkel: Akzentgelb. |
| Schriften | Kursive Fraunces aus der Datei mit allen Achsen (`fraunces-latin(-ext)-full-italic.woff2`) und `"WONK" 0` (keine „wonky“-Formen b, h, k, l); echte kursive Inter (`inter-latin(-ext)-opsz-italic.woff2`). |
| Dunkelmodus Editorial | Akzent- und Soft-Facts-Flächen gedeckter (weniger Olivbraun); weiche Karten mit feiner Kante in Markenfarbe. |
| Übergänge (`js/deck.js`, `css/deck.css`) | `html.wechsel-modus` (hell ↔ dunkel nacheinander überblenden) und `html.wechsel-rad-gross` (großes Rad ↔ Mini-Rad ohne „fliegende Scheibe“), siehe Abschnitt 5. |
| Bedienleiste (`js/deck.js`, `css/deck.css`) | erscheint nur bei Mausbewegung im unteren Bildrand (160 px), bei Tastaturfokus oder Antippen – nicht mehr bei jedem Klick; Touch: Knöpfe 44 × 44 px; Handy hochkant: nur Grundknöpfe, Hinweis „Gerät quer halten“. |
| Referentenansicht (`js/deck.js`) | Sprechtext rollt zum Absatz des aktuellen Schritts (auch nach A− / A+). |
| Umfrage-Ziffern (`js/deck.js`, `js/komponenten.js`) | Folgt auf eine gezählte „1“ sofort eine weitere Ziffer (z. B. „1“ „0“ Enter → Folie 10), wird die Stimme zurückgenommen; läuft schon eine Foliennummer, zählen Ziffern keine Stimme. Hilfe (H) ergänzt. |
| Übersicht (O) | beginnt oben (Überschrift sichtbar), solange die aktuelle Folie dabei ganz zu sehen ist; sonst steht die Kachel mittig. |
| Zeitplan | Sollzeiten 04: 80 s, 05: 55 s, 06: 80 s, 09: 60 s, 11: 75 s → Hauptfolien 14:00 (60 s Puffer). |
