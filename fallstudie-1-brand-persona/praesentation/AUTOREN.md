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
| f04 | `04-persona.html` | Brand Persona | 80 | A | `persona` |
| f05 | `05-limbic-map.html` | Limbic Map | 55 | A | `persona` |
| f06 | `06-repertory-grid.html` | Repertory Grid → Markenattribute | 80 | B | `attribute` |
| f07 | `07-laddering.html` | Laddering → Markennutzen | 90 | B | `nutzen` |
| f08 + f08b | `08-analogien` | Analogien + Live-Umfrage (70) · Markentonalität nach Aaker (50) | 70 + 50 | B | `tonalitaet` |
| f09 + f09b | `09-kommunikationsanalyse` | Kanäle & Bildwelt (60) · Markenbild: Corporate Design & Fit (55) | 60 + 55 | C | `bild` |
| f10 | `10-markensteuerrad.html` | Markensteuerrad (Synthese) | 75 | C (Inhalt: A, Synthese C2) | `hub` |
| f11 | `11-fazit.html` | Fazit & Empfehlungen | 75 | C | – (`leer`) |
| f12 | `12-fragen.html` | Danke & Fragen (Steuerrad als Sprungmenü) | 0 | alle | – (`leer`) |
| b1–b8 | `13-backup.html` | Backup: Methodik, Prompt-Log, Datenquellen Persona, RG-Rohdaten, Laddering-Matrix, KA-Raster, Quellenverzeichnis, Belege der Folien | 0 | je nach Inhalt | passend oder `leer`, `data-backup` |

Summe Hauptfolien ohne optionale Folie: 840 s = 14:00 (60 s Puffer für die Live-Momente; seit 16.10.2026, Abschnitt 12 – vorher 885 s = 14:45); optionale Folie f01b 45 s, Backup 0 s.
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
| `<img data-marke-logo>` | Logo-Pfad aus marke.js (`logo`, Wortmarke, Folie 09b); das Logo der Titelfolie kommt aus `logoTitel` (setzt `js/folien/01-einstieg.js`) |
| `<img data-marke-logo="titel">` | Logo-Pfad aus marke.js → `logoTitel` (gelbes Oval, z. B. Folie 12 im Kopf neben dem Fazit); ohne Eintrag bleibt das Bild ausgeblendet (`hidden`). Logo-Quelle in die Fußzeile der Folie und in B7 |
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
  Prüfmaßstab“), `data-seiten="aus"` (Hard/Soft-Facts-Beschriftung; `data-seiten="kurz"` = nur
  „Hard Facts“/„Soft Facts“ ohne „rational“/„emotional“, so auf Folie 10), `data-breite`/`data-hoehe`
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
  `beispielwerte`, `liveQuelle`, `runde` (eigene Live-Abstimmung, unten). Einzelne Werte per JSON im Baustein
  überschreibbar (`<script type="application/json">`).
- Linke Spalte: QR-Code, Kurz-URL, „anonym · ohne Anmeldung“, Stimmenzähler (`data-stimmen="aus"`,
  `data-qr="aus"`, `data-qr-groesse="380"`; Folie 08 nutzt 440 – die Adresse der Abstimmseite ergibt 45 Module).
- Ergebnis: Pille LIVE (ruhig pulsierend), `n = …`, Pille Beispieldaten (solange Beispielwerte),
  Balken mit Prozent (aus den Stimmen berechnet) und Anzahl.
- **Beispielwerte werden nie mit echten Stimmen gemischt:** Die erste echte Stimme (Klick, Ziffer, eine
  Zahl > 0 über „Werte“ oder der erste Stand der Live-Abstimmung) setzt alle Beispielwerte auf 0; die Pille
  „Beispieldaten“ verschwindet.
  Solange Beispielwerte stehen, beginnen die Felder unter „Werte“ bei 0.
- `data-aufloesung="n"`: in Schritt n wird die Zeile „Unsere Analyse“ umrahmt (`aus` = nie).
- `data-aussage="n"`: in Schritt n weicht der QR-Block der großen Aussagezahl „27 % sehen HOLY wie
  wir: als Chamäleon“ (bis 20.10.2026: Waschbär, Abschnitt 18). Ohne Stimmen (n = 0) steht dort nur „Noch keine Stimmen“ (Text änderbar:
  `marke.js → umfragen.tier.aussageLeer`); die Zahl zählt dann nicht auf „0 %“ hoch.
- Bedienung im Vortrag: Klick auf Option = +1, Umschalt+Klick oder Rechtsklick = −1, Ziffern 1–9
  (Umschalt = −1, nur solange die Umfrage zu sehen ist), Doppelklick auf einen Wert = Zahl eintippen,
  Knopf „Werte“ = alle eintragen (z. B. aus Mentimeter/Particify; Tab = nächstes Feld, nach dem letzten
  bzw. mit erneutem Klick auf „Werte“ wird alles übernommen), „Zurücksetzen“ (zweimal innerhalb von 3 s
  klicken). Ergebnisse überstehen
  ein Neuladen (Browser-Speicher, gespeichert mit `runde`; mit `liveQuelle` gelten nur Werte derselben Runde)
  und erscheinen auch im Referentenfenster.
- Getrennt platzierbar (auch auf späteren Folien):
  `<div class="umfrage-aussage" data-umfrage="tier"></div>`, `<div class="umfrage-stimmen" data-umfrage="tier"></div>`.
- **Eigene Live-Abstimmung** (seit 19.10.2026; Bedienung `LIESMICH.md` Abschnitt 6, Einrichtung
  `live-abstimmung/ANLEITUNG.md`). Felder: `liveQuelle` = Web-App-URL `https://script.google.com/macros/s/<ID>/exec`
  (leer = aus – dann verhält sich der Baustein genau wie vorher), `runde` = `[A-Za-z0-9_-]{1,40}` (`'probe'`, im
  Vortrag `'vortrag-2026-10-26'`). Mit `liveQuelle` zeigt der QR-Code auf `link` (`abstimmen.html?u=tier`; ohne
  `liveQuelle` gibt es für diese Adresse keinen QR-Code, ohne `kurzLink` keine Zeile darunter).
  Schnittstelle (nur GET, JSONP per `<script>` – unabhängig von CORS; vollständig im Kopf von
  `live-abstimmung/apps-script.gs`): Folie `?aktion=stand&umfrage=tier&runde=…&anzahl=5&callback=f` →
  `f({"ok":true,"werte":[…],"n":…,"zeit":"<ISO>"})`; Abstimmseite `?aktion=stimme&…&option=0..4&geraet=<ID>`
  → `f({"ok":true})`; Fehler `f({"ok":false,"fehler":"…"})`.
  Verhalten: beim Betreten sofort, dann alle 2 s, solange die Folie aktiv ist; höchstens eine Anfrage
  gleichzeitig – auch beim Server, denn die nächste startet erst nach Antwort oder Aufgabe der vorigen.
  Zeitlimit weich: nach 4 s und nach 8 s ohne Antwort je ein Fehlversuch (`LIVE_ZEITLIMIT`), die Anfrage bleibt
  offen und eine späte, gültige Antwort wird übernommen; hart nach 15 s (`LIVE_ZEITLIMIT_HART`). Skript-Tag und
  Rückruf werden aufgeräumt. Braucht eine Antwort 2 s oder länger, folgt die nächste Abfrage sofort (Abstand =
  Antwortzeit). Neue Werte ersetzen Beispielwerte und werden wie Handstimmen gezeichnet. Die Pille ist dann ein
  Knopf mit Zustand (`.ist-verbinde`, `.ist-live`, `.ist-offline` – nach einer Verbindung erst beim zweiten
  Fehlversuch in Folge –, `.ist-pausiert`). Jede Hand-Eingabe (Klick, Ziffer, „Werte“, „Zurücksetzen“) pausiert
  die Abfrage; die Pause wird je Umfrage und Runde gespeichert (`umfrage-pause:<id>:<runde>`, übersteht F5).
  Klick auf die Pille setzt fort bzw. gibt bei „offline“ eine hängende Anfrage auf und fragt sofort neu.
  Gespeicherte Werte (`umfrage:<id>` = `{ werte, beispiel, runde }`) gelten mit `liveQuelle` nur in derselben
  Runde – sonst Beispielwerte (Probestimmen erscheinen im Vortrag nie, auch offline nicht). Der QR-Code zur
  eigenen Abstimmseite erscheint nur, wenn `liveQuelle` (auf `/exec`) und `runde` brauchbar sind
  (`liveFehlerVon`, sonst Warnung in der Konsole). Das Referentenfenster fragt nie selbst: Werte über
  Browser-Speicher und `Deck.kanal('umfrage')`, Pille über `Deck.kanal('umfrage-live')` (`{ id, zustand, zeit,
  meldung }`, zurück `{ id, aktion: 'pausieren' | 'fortsetzen' | 'melden' }`); dort steht der Zustand zusätzlich
  als Knopf `.r-live` unter der Kopfzeile „Aktuell“ (nur solange die Umfrage-Folie aktuell ist; Stil in
  `css/komponenten.css`). Mit `?druck`/`?aufnahme` wird nie abgefragt. `pruefen.mjs` lädt die Prüfseite bei
  gesetzter `liveQuelle` ohne `?aufnahme` (Klasse „aufnahme“ per Init-Skript) und beantwortet Anfragen an die
  `liveQuelle` (nur `aktion=stand`/`stimme`) mit einer eingebauten Attrappe – nichts geht ins Netz; Bericht
  „liveAnfragen“. Standard: Stand mit lauter Nullen (QR-Code, Pille „Live“, `n = 0`); `--live-offline`,
  `--live-werte 3,1,7,0,2`, `--live-aus` (Abschnitt 9). `aktion=stimme` aus der Präsentation ist ein Fehler.
  Lokal ohne Google: `node werkzeuge/live-abstimmung-test.mjs --server 8787`, dann
  `index.html?quelle=http://localhost:8787/exec#f08` (`?quelle` nur bei `file://`/`localhost`; Referentenfenster
  dafür direkt mit `index.html?referent&quelle=…` öffnen), Abstimmseite `abstimmen.html?u=tier&quelle=http://localhost:8787/exec`.
  Die Abstimmseite (`js/abstimmen.js`) nimmt als `liveQuelle` nur `https://script.google.com/…/exec` an (wie die
  Folie; localhost nur über `?quelle`) und lädt `marke.js` über http(s) immer frisch (`?v=…`), damit eine neue
  `runde` sofort gilt. Sie zeigt kein Logo (öffentliche Seite, `QUELLEN.md` §4), oben die Einordnung
  („Studentische Fallstudie · keine Verbindung zur …“); Geräte-ID je Umfrage und Runde.
  **Senden mit Wiederholung** (seit 19.10.2026, „Lastfest“ in Abschnitt 16): Zeitlimit 15 s je Versuch
  (`ZEITLIMIT`), insgesamt bis zu 3 Versuche (`VERSUCHE`) bei Andrang (Antwort `ok:false` mit `nochmal:true` oder
  Fehlertext beginnt mit „Gerade kommen sehr viele Stimmen“ bzw. „Serverfehler:“), bei Zeitüberschreitung und bei
  Netz-/Ladefehlern; nicht, wenn das Handy offline ist, nie bei Eingabefehlern. Pause vor jeder Wiederholung
  zufällig 1,5–4 s (`PAUSE_MIN`/`PAUSE_MAX`), dieselbe Geräte-ID. Hinweis „Gerade stimmen viele ab – Ihre Stimme
  wird gesendet …“ in der Zeile unter der Frage (`.anleitung.ist-wiederholung`, behält deren Höhe), Ansage
  einmal; erst nach dem 3. Fehlversuch die Fehlerkarte. Die anderen Tiere bleiben antippbar
  (`.auswahl.ist-unterwegs` statt `aria-busy`). Umentscheiden beendet die alte Sendung; höchstens eine Anfrage
  gleichzeitig. Späte `ok`-Antwort für ein anderes Tier → neueste Wahl wird still nachgesendet; für dasselbe
  Tier → gleich „Danke“. Format `var NAME = …;` der Konstanten beibehalten – der Lasttest liest sie aus.
  **Server** (`apps-script.gs`, Fassung `FASSUNG = '19.10.2026'`): Jede Stimme reserviert unter
  `LockService.getScriptLock()` nur eine Zeilennummer (Skript-Eigenschaft `naechsteZeile`: lesen und erhöhen in
  derselben Sperre, höchstens 8 s warten, `SPERRE_WARTEN_MS`) und schreibt danach ohne Sperre in ihre Zeile
  (nur wenn leer; `{"ok":true}` erst nach `flush`; Zeit beim Eingang). `einrichten()` hält 5000 formatierte
  Zeilen bereit und setzt den Zähler nie zurück. `?aktion=fassung` (unbekannte Aktion) nennt die Fassung.
  **Prüfen** (`werkzeuge/live-abstimmung-test.mjs`): 44 Prüfungen; `--mutationen` (16 kaputte Kopien);
  `--server PORT` mit `--verzoegerung MS`, `--stoerung A`, `--abbruch A`, `--gleichzeitig N` (prüfen die
  Wiederholung, nicht die Belastbarkeit – ein Handy scheitert dann zufällig mit A³) und `--sperre MS`
  (Belastbarkeit: jede Stimme hält die Sperre so lange, Warteschlange mit `SPERRE_WARTEN_MS`).
  Lasttest gegen die echte Web-App: `node werkzeuge/live-abstimmung-test.mjs --lasttest <URL>` (40 Handys
  gleichzeitig in eine eigene Runde; `--anzahl 20` für unsere Gruppe, `--verteilt 10`, `--ohne-folie`): Handy-Regel wie
  `js/abstimmen.js`, eine mitlesende „Folie“ wie Abschnitt 3a, vorher `?aktion=fassung`; Urteil BESTANDEN (alle
  gezählt, keiner gescheitert, „Danke“ ≤ 15 s), GEZÄHLT, ABER ZU LANGSAM oder NICHT BESTANDEN.

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
Folie 01 selbst (seit 20.10.2026, Abschnitt 19): Rätselbild mit Logo, `data-stufen="440/11,220/10,100/0"`,
`data-fokus="63.5% 59.8%"`, `data-fortschritt="aus"` – drei Klicks (Hinweis, Auflösung, Titel). `data-fokus` ist der **Fixpunkt** des
Zooms (bleibt beim Zoomen stehen), nicht unbedingt das Motiv: Soll ein Punkt L des Bildes bei Zoom Z an der
Bühnenstelle C stehen, gilt Fixpunkt = (Z·L − C) / (Z − 1) (L und C in Bühnen-Pixeln bei Zoom 1). Die Unschärfe
wird mitgezoomt (wirkt etwa Zoom × px); gemessen an der Schrift im Bild hängt die Lesbarkeit also nur an der
Unschärfe-Zahl, der Zoom ändert Größe und Ausschnitt. Verkleinert (Sicht aus der letzten Reihe) wirkt Unschärfe
schwächer – Stufen deshalb auch bei 960 × 540 und 480 × 270 beurteilen, nicht nur in Originalgröße. Ab drei Stufen
zeigt der Baustein „Hinweis x von n“ (die Auflösung zählt als Stufe mit); auf Folie 01 ist die Pille abgeschaltet
(`data-fortschritt="aus"`: sie lag auf dem Oval und lud zum Abwarten ein). Die Zeile „Logo © …“ der Fußzeile von
Folie 01 zeigt `js/folien/01-einstieg.js`, solange `logoTitel` gesetzt ist **oder** der Dateiname des Rätselbilds
„logo“ enthält.

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
    vorschau:   function (ctx, klon, schritt) { /* Miniatur (Übersicht/Referent) anpassen */ },
    schritteAktualisieren: function (ctx) { /* vor Deck.gehe(…, 'ende'): Schrittzahl neu ermitteln,
                 wenn sie von gespeicherten Daten abhängt (Folie 10: Abgleich mit der Wortwolke) */ }
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
- `Deck.weiter()`, `Deck.zurueck()` – ein Klick während eines laufenden Übergangs bzw. laufender
  Schritt-Animationen beendet diese sofort (kein Klickstau); ein neuer Folienwechsel während eines
  laufenden Übergangs erfolgt ohne Animation
- `Deck.vorschauAuffrischen()` – Referentenansicht: Vorschau „Als Nächstes“ neu bauen (Bausteine mit
  Live-Daten rufen das nach einer Änderung auf, z. B. Umfrage, Wortwolke)
- `Deck.folien()`, `Deck.feldZiel(feld)`, `Deck.feldZiele(feld)`,
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
#    Live-Abstimmung (Folie 08): --live-offline | --live-werte 3,1,7,0,2 | --live-aus
#    Bei Änderungen an Folie 08 zusätzlich mit Balken prüfen (der Standard zeigt n = 0):
#    node werkzeuge/pruefen.mjs index.html --nur f08 --schritte --live-werte 15,9,17,14,9
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
tragen „nur in Schritt n“); mit `--druck` zusätzlich PDF mit einer Seite je Folie. **Live-Abstimmung:**
Zustand der Pille und `n` auf Folie 08 (Anfragen an die `liveQuelle` beantwortet die eingebaute Attrappe;
`aktion=stimme` aus der Präsentation und jede andere externe Anfrage, auch WebSockets, sind Fehler). Der
Browser startet zusätzlich ohne Proxy und ohne Namensauflösung (`--no-proxy-server`,
`--host-resolver-rules`): Auch Chrome selbst baut keine Verbindungen zu Google-Diensten auf. In `bericht.json`
stehen dazu `zusammenfassung.externeAnfragen` (muss 0 sein) und `zusammenfassung.liveAnfragen` bzw. das
Objekt `liveAnfragen`.

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

## 13. Feinschliff nach der zweiten Abschlussprüfung (17.10.2026)

| Bereich | Änderung |
|---|---|
| Referentenansicht (`js/deck.js`) | Sprechtext rollt nur noch bei einem Folien- oder Schrittwechsel zum aktuellen Absatz – der Abgleich alle 3 s setzte von Hand gescrollten Text zurück. Vorschau „Als Nächstes“ wird bei neuen Umfrage-Stimmen/Zurufen sofort neu gebaut (`Deck.vorschauAuffrischen`). Taste P übernimmt die Adressparameter `optional`, `thema`, `modus`, `primaer`, `sekundaer`, `bewegung` (z. B. `?optional=alle` → gleiche Folienliste in beiden Fenstern). |
| Navigation (`js/deck.js`) | Klickstau: Ein Klick während eines Übergangs oder laufender Schritt-Animationen beendet diese sofort; ein Folienwechsel während eines laufenden Übergangs geschieht ohne Animation (kein Zwischenbild nach Clicker-Doppeldruck über den Morph 02 → 03 bzw. 09b → 10). `Deck.gehe(id, 'ende')` ruft vorher den Hook `schritteAktualisieren` (Folie 10 zählt den Abgleich-Schritt neu). |
| Umfrage-Aussage (`js/komponenten.js`, `css/komponenten.css`) | Ohne Stimmen kein „0 %“ mehr: Die Zahl hat dann keinen Zielwert (`data-ziel` fehlt), angezeigt wird „Noch keine Stimmen“. Im Klon (Vorschau, Übersicht) stehen die Prozente der Umfrage sofort auf dem Endwert. |
| Titel-Marker (`css/komponenten.css`) | Markenname im Titel: Marker immer hell (OKLCH: Helligkeit ≥ 0,86, Buntheit ≤ 0,18) – HOLY-Gelb unverändert, dunkle/satte Primärfarben wirken nicht mehr wie Durchstreichen. |
| Beschriftungen (`js/komponenten.js`, `index.html`) | Feldnamen im Steuerrad, Kartenköpfe, Ringtexte, „Hard/Soft Facts“, „Gruppe“/„Termin“ (Folie 01) tragen `data-meta` (zählen nicht zum Wortbudget). Kartenköpfe Folie 10, Chip „Hürde“ (06) und „Schlüsselbild?“ (09) 26 px. |
| Folie 02 (`js/folien/02-vorgehen.js`) | Etikett „Fremdbild“ an den Karten Repertory Grid und Laddering (Liste `SICHT_FREMDBILD`); Methodenkarten sagen „KI + Kurzinterviews“ (= Planung, Kasten „FOLIE 02“). |
| Folie 03 | nur noch die gewählten Rollen-Chips; Beleg „fordert … heraus“ [7] in der Metazeile; zweite Fußzeile mit Bezug und Absender der Red-Bull-Zahl (Circana MAT 08/2025, Lehrbrief mit Red Bull); „große TV-Kampagne“. |
| Folie 04 (`js/folien/04-persona.js`) | Inhalt nach Persona-Steckbrief A2 und Folienentwurf 4 (Entwurf, Freigabe offen): Mediennutzung Statista Consumer Insights 2025 (YouTube/Instagram/TikTok) mit Strich für den Ø aller Befragten (Daten `skala`, `schnitt`); Kaufverhalten als Annahme. |
| Folie 06 / B4 | Beispielwert W3 „zuckerfrei“ 6,0 (Gönrgy ist zuckerfrei), Ø Wettbewerb 4,78. |
| Folie 09 (`js/folien/09-kommunikationsanalyse.js`) | Motivgruppe „Team & Popkultur“ statt „Kurzvideos“ (Motiv ≠ Format); Zahl der codierten Beiträge gestrichelt als Beispielwert; Titel mit „?“ bis zur Codierung. |
| Folie 10 (`css/folien/10-markensteuerrad.css`, JS) | höchstens 3 Stichworte je Feld; „Energy: 160 mg Koffein“ (nur Energy-Linie, Quelle [56] in der Fußzeile); Nummern der Lücken hochgestellt direkt am Wort, der Trenner „·“ bleibt sichtbar. |
| Folie 11 / 12 | Kern-Zusatz gestrichen, Kanal-Chips ein Wort, „wie genau“ kürzer; Fazit auf Folie 12 mit Pille „Beispieldaten“. |
| Backup B1, B3, B8 (`js/folien/13-backup.js`, `css/folien/13-backup.css`) | B1 Formulierungen präzisiert; B3: Mediennutzung = Statista CI 2025 mit neuem Status `extern` (Quelle nicht im Dossier); B8: [56] und „extern“ ergänzt, [48] und [102] entfernt (nicht mehr sichtbar zitiert), [26] mit Absender. |

## 14. Einbau der Bündel-A-Ergebnisse, Logos und Grafikprüfung (17./18.10.2026)

Inhalte nach `../markenkompetenz.md` (A1), `../persona-steckbrief.md` (A2), `../limbic-map.md` (A3) und
`../folienentwuerfe.md` (Folien 3–5); alle drei sind **Entwurf**, Freigabe durch Yannick offen (Kästen „FOLIE 03–05“).
Die Beispieldaten der Bündel B und C sind unverändert.

| Bereich | Änderung |
|---|---|
| Folie 03 (`css/folien/03-markenkompetenz.css`) | Daten, Titel, Fußzeile (Nummern 3–6, 13, 16, 17, 22, 24, 25, 39; „→ Backup B8“), Sprechtext und Belege nach A1; vier Rollen-Chips nach Kotler, kein `rolleZusatz`; Label „Marktrolle“ gestrichen; Red-Bull-Wert nur noch in den Notizen. Die Stufe `.ist-sehr-dicht` verkleinert jetzt auch Präfix und Einheit der Kennzahlen (30 px) – „über 170 Mio. €“ ragte in Keynote/Bento aus der Spalte. |
| Folie 04 (`js/folien/04-persona.js`, CSS) | Psychografie ohne „Spaß“ (im Ø), mit Stichwort-Zeile; neue Datenfelder je Dimension: `zeilen` auch in der Psychografie und `werteLabel` (Überschrift der Werte-Chips, Standard „Werte“). Kaufverhalten als Daten (Kantar TGI 2023, Gründer [24]). |
| Folie 05 (`js/folien/05-limbic-map.js`, CSS) | Gewichte, Typ „Hedonisten“, Folgen, Typ-Winkel und Titel nach A3. Feste Texte als Datenfelder: `fitHinweis` (Metazeile, Ersatz „Gewichte: Hypothese des Teams“), `lueckeText` (Ersatz „größte Lücke“), `lueckeSystem` (System der Lücke vorgeben, z. B. bei Gleichstand), `punktZusatz` je Punkt (z. B. „(Mittelwert)“). Gewichtsbalken jetzt maßstäblich (Segmente ohne Innenabstand). Rechtevermerk nach [105] S. 7 statt „eingetragene Marke“ (auch B7, `QUELLEN.md`). |
| Folie 10 / 11 | Feld Markenkompetenz „Herausforderer · Softdrinks zum Selbermixen“, Persona „Hedonisten“; Sprechtexte: Dominanz-Lücke = Schichtanlass (A3), Verweise auf die neuen Folgen von Folie 05. |
| Logos (`js/deck.js`, `js/folien/12-fragen.js`, `css/folien/12-fragen.css`) | `<img data-marke-logo="titel">` nimmt `logoTitel`. Folie 12: gelbes Oval rechts neben den Gruppennamen (128 px, Klammer zu Folie 01), Kurzquelle in Fußzeile Zeile 2; ohne Logo verschwinden Bild und Quelle (`logoPruefen`). B7 nennt die Logos. Bewusst ohne Logo: Kopfzeilen, Folie 03, Zentrum des Steuerrads, Startseite. |
| Folie 09b (`css/folien/09-kommunikationsanalyse.css`) | Im Dunkelmodus liegt die Wortmarke auf einer hellen Unterlage (Kontrast war ca. 1,1 : 1); das Bild bleibt unverändert. |
| Folie 09 (dieselbe CSS) | Gestrichelte Beispielwert-Rahmen enger: Motivzahlen ohne Abstand nach außen (stießen aneinander), „4,0“ bündig mit dem Satzspiegel. |
| Titel (`css/komponenten.css`) | Kursivkorrektur im Thema Editorial: `em[data-marke]` rechts etwas mehr Raum – der Bogen des kursiven „Y“ lief aus dem Marker und stieß an „:“/„?“ (Folien 01b, 03, 06, 10, 11). |
| Folie 02 | Fußzeile „Esch & Esch (2024)“, „Häusel (2019)“ wie B7; Beleg Handelsstart nach A1 ([6], [8, 9]). |
| Backup B2 | Zeilen P1–P5 durch die belegten Einträge KI 55/56, 47, 52 ersetzt (`beispiel: false`), KI 07 mit A2-01; P7–P14 bleiben Beispiel. |
| Backup B3 (`css/folien/13-backup.css`) | Kantar TGI 2023 und Statista CI 2025 (Steckbrief A2) statt Markentrainer-Haushalte und forsa; Tabelle hielt den rechten Satzspiegel nicht ein (Status-Spalte 150 px). |
| Backup B7, B8 | B7: Esch & Esch (2024, 10. Aufl.), Häusel (2019, 6. Aufl.) laut DNB-Katalog, Nymphenburg [105] und nymphenburg.de, „Eigene Prüfung 17.10.2026“, Logos, Rechtevermerk Limbic®. B8: [6] und [39] neu, [2], [9], [14], [15], [26], [99] entfernt (nur noch im Sprechtext), „extern“ mit Kantar. |
| `../grafiken/*.py` (SVG/PNG neu erzeugt) | folie-05: Beschriftung „Hedonisten“ entlang des Sektors, Pfeilspitze 2021/22 → 2026, Beschriftung frei von der Linie, Quellenzeile wie im Folienentwurf; folie-03: Kennzahl 28 px, Verweis B8; folie-02: Folien 8/8b und 9/9b. |

## 15. Übernahme durch Account 1 (Sa, 17.10.2026)

Account 2 hat die Präsentation gebaut (Branch `praesentation-account-2`, Abschnitte 10–13). Seit Sa, 17.10.2026
führt Account 1 sie auf `master` weiter: Einbau der Bündel-A-Ergebnisse, Logos und Grafikprüfung (Abschnitt 14),
danach eine Prüfung in drei Blickrichtungen (Darstellung, Inhalt, Rechte) und deren Nacharbeit (18./19.10.2026,
Systemdatum). Die Beispieldaten der Bündel B und C sind unverändert; Hinweise an Lukas und Elias stehen nur in
den Kästen und Notizen. Die Folien 03–05 bleiben **Entwurf** (Freigabe durch Yannick offen, LIESMICH Abschnitt 12).

| Bereich | Änderung |
|---|---|
| Folie 05 (`js/folien/05-limbic-map.js`, CSS) | Etikett „HOLY (Mittelwert)“ stand unter Marcos Punkt (wirkte wie dessen Beschriftung): `punktZusatz` jetzt als eigene, kleinere Zeile (`.g2l-punkt-zusatz`, Etikett `.g2l-punkt-text--zusatz` zweizeilig); `anordnen()` hat versetzte Kandidaten oben/unten und bestraft jede Lage, deren Mitte näher an einem fremden Punkt liegt als am eigenen. Fußzeile Zeile 2: Rechtevermerk mit „urheber- und patentrechtlich geschützt“ (gekürzt, wörtlich in B7/Notizen – Abweichung vom Folienentwurf 5 im Kasten vermerkt). Sprechtext ohne die Eingangsfrage (steht im Kicker): ca. 106 Wörter ≈ 56 s. |
| Folie 04 (Daten, Fußzeile, Notizen, Kasten) | Psychografie „bequem und schnell“ (Statista CI 2025: 30 % zu Ø 25 %) statt „gesünder, aber schnell“ (gesund ernähren 50 % zu Ø 53 % trägt „gesünder“ nicht); Block als `daten` mit Quelle „Statista CI 2025 · Pain/Gain: Annahme [88, 89]“; Fußzeile „Person und Zitat fiktiv“; Beruf im Sprechtext als Annahme genannt; Sprechtext um Doppelungen gekürzt (ca. 147 statt 172 Wörter ≈ 77 s). Abweichung von Steckbrief A2 §2 und Folienentwurf 4 im Kasten zur Entscheidung durch Yannick. Kasten: vollständige Schritte für das KI-Bild (Fußzeile, KI-Nachweis, B1, B2, `QUELLEN.md` §3/§4, B7 „Technik“). |
| Folie 03 (Fußzeile, Notizen, Kasten, Datenkommentar) | „KI-Nachprüfung 17.10.2026“ statt „eigene Prüfung“ (nachgelesen hat der bearbeitende KI-Agent, die Prüfung durch die Gruppe ist offen); ✔ = „gesichert“ wie im Dossier. Kasten: Punkt „[6] und [39] in B8 ergänzen“ als erledigt markiert. |
| Folie 02 (Fußzeile) | zwei Zeilen statt einer (endete bei x ≈ 1708 unter der Bedienleiste); Text unverändert. |
| Folie 10 / 11 (Kästen, Kommentare, Notizen) | Sprechtext-Längen nachgezählt (10: ca. 182 Wörter ≈ 96 s, Zeitangaben zusammen 77 s; 11: ca. 164 Wörter ≈ 86 s), Kürzungsvorschläge nur in den Kästen (Bündel C, mit Elias abstimmen); Folie 10 „ca. 49 Wörter“ statt „ca. 45“. Kasten 11: Hinweis aus A3 zu Empfehlung 3 („Humor aus der Schicht statt Doppeldeutigkeit“), Inhalt unverändert. |
| Folie 12 (`css/folien/12-fragen.css`, `js/folien/12-fragen.js`, Kasten, Notizen) | Oval aus dem Absender (neben den Gruppennamen, wirkte wie Co-Branding) in den Kopf rechts neben das Fazit über HOLY (dritte Spalte des Kopfrasters, 128 px, Rand der Datei ausgeglichen). Logo-Quelle mit ©: „(Logo ©, de.holy.com, Abruf 16.10.2026)“ direkt hinter dem Firmennamen. Konsolenhinweis bei fehlender Logodatei angepasst. |
| Folie 09 (Kasten) | Regel für den geplanten Raptor-Screenshot (nur nach Zustimmung des Betreuers, Quellenmuster, Folgeschritte B7/`QUELLEN.md`); Inhalt von Bündel C unverändert. |
| Backup B2 (Daten, Kicker, Titel, Notizen, Kasten) | Pille „teils Beispiel“ statt „Beispieldaten“ (wie B1 „teils geplant“); Titel „Jeder KI-Schritt ist dokumentiert – und wird geprüft“; Spalte „Prüfung“ trennt KI-Gegenprüfung (Unteragenten) von der Prüfung durch die Gruppe (KI 55/56: „KI-Gegenprüfung (3 Agenten), Kernbelege geöffnet“, KI 47: „Werte aus Report abgelesen; Gegenlesen offen“, KI 52: „KI-Gegenprüfung (3 Agenten); PDF-Zitate geprüft“). |
| Backup B3 (`css/folien/13-backup.css`) | Block unter der Tabelle ragte 16–32 px in den Abstand zur Fußzeile (Keynote: Berührung): Körperzeilen 7 px statt 9 px Innenabstand, Abstand im unteren Block 4 px. Nachgemessen: Persona-Zeile endet in allen Themen bei y = 957 (Unterkante Inhalt), 24 px über der Fußzeile. |
| Backup B7 (Liste, Notizen, Kasten) | „Nachprüfung 17.10.2026, KI-gestützt“ statt „Eigene Prüfung“; Dossier-Zeile nennt „extern (04, B3): Statista CI, Kantar TGI“ (volle Angaben in den Notizen); Häusel-Untertitel „Die Macht des Unbewussten …“ korrigiert, Auflage/ISBN mit hugendubel.de und ebook.de abgeglichen (6. Aufl., 26.08.2019, kartoniert 978-3-648-12719-3); DNB-Abruf als „vom bearbeitenden KI-Agenten“ gekennzeichnet. |
| `QUELLEN.md` | §3: Grafiken in `../grafiken/` als Ausarbeitungs-/PowerPoint-Variante eingeordnet (nicht für die Projektion), Rechtevermerk-Fassungen (wörtlich/gekürzt), Schritte für das KI-Persona-Bild; §4: Platz des Logos auf Folie 12, Regel „keine Social-Media-Bilder von HOLY“ mit der einen Ausnahme (Raptor-Screenshot nach Zustimmung des Betreuers); §5: Kategoriedaten vollständig (Statista CI für Mediennutzung, Psychografie und Gewichte; Kantar Media TGI 2023 für die Kaufhäufigkeit; VuMA nur in Notizen B3), „Nachprüfung, KI-gestützt“, DNB/Händlerabgleich als KI-gestützt; Stand-Zeile. |
| `LIESMICH.md` | Stand-Zeile; „Fertige Ausgaben“ mit Stand und Hinweis; Abschnitt 8 (Platz des Logos auf Folie 12); 11 (Exporte per Werkzeug); 12 (Checkliste: KI-Bild-Schritte, Freigabe 03/04/05 mit den Abweichungen, Sprechtexte 03–05 und 10/11, B2-Prüfung, Raptor-Regel, Logo/2×-Bildschirme, Grafiken, Exporte); 13 (`werkzeuge/uebersicht.mjs`, `export/`, `../grafiken/`). |
| `AUTOREN.md` | Abschnitt 2: Sollzeiten der Tabelle auf den 14:00-Plan (840 s) und B8 aktualisiert (stand noch auf 885 s); dieser Abschnitt. |
| `werkzeuge/uebersicht.mjs` (neu) | erzeugt `export/uebersicht.png` (Kontaktbogen, 2400 px breit, Gestaltung Editorial) aus den Folienbildern; Angaben aus `marke.js` und `index.html`. Nachbau der Übersicht von Account 2, deren Erzeugung nicht dokumentiert war (Aufbau wie bisher: Kopf, „Präsentation“ inkl. 01b, „Backup“, je 4 Kacheln, Fußnote). |
| `export/` | am 19.10.2026 neu erzeugt (Wege unten): `praesentation.pdf` 22 Seiten (ohne 01b), `folien/<id>.png` 23 Bilder im Endzustand – jetzt 1920 × 1080 (bisher 1600 × 900), `uebersicht.png`. |
| Gründerbefragung (19.10.2026; `../gruenderbefragung.md`, Workflow D14 und Nacharbeit nach zwei Prüfungen) | Antworten von Gründer Mathias Horsch, immer als Selbstauskunft „Horsch 2026 (GB)“. **Sichtbar nur im Backup:** B1 Spalte 03 (Punkt „Gründerbefragung“, Listenabstand 12 px), B3 „Wer sagt was über wen“ (Horsch 2023 [4], Jost 2024 [24], Horsch 2026 GB; 13 Zeilen, Innenabstand 4 px), B7 Eintrag „GB“ (Spalten 6/6, Legende „extern … , GB“, feste Leerzeichen gegen Umbrüche). **Hauptfolien 02–05 und 10:** nur Notizen und Kästen; der Zusatz unter dem Claim auf 03 („auch laut Gründer Mathias Horsch (Befragung 10/2026)“) wurde nach einem Prüferbefund entfernt und auf Wunsch von Yannick am 19.10.2026 wieder eingesetzt (Daten: claim.stand; Bestätigung, kein unabhängiger Beleg). f04: Blockquellen „Jost …“ statt „Gründer …“ (sichtbar). f05: Selbstbild nur „Spaß und Zusammengehörigkeit“ („Individualität“ erst nach Lukas’ Codierung). „95 %“ nur in den Notizen von 03 mit Zusatz. Folien 06–09b und 11: Inhalte und Daten unverändert, nur Kasten 11. `QUELLEN.md` §5 (Ausnahme GB). Danach `pruefen.mjs --schritte --optional` in Editorial, Bento, Keynote und dunkel: 0 Fehler (4 Warnungen Wortbudget wie vorher); Exporte neu erzeugt (PDF 22 Seiten, 23 Bilder 1920 × 1080, Übersicht Stand 19.10.2026). Offen: Freigabe durch Yannick, Punkte für Lukas (LIESMICH 12). |

**Geprüft und bewusst nicht geändert:** Fußzeilen der Backup-Folien B2/B7 reichen etwas unter die Bedienleiste
(nur bei Mausbewegung im unteren Rand sichtbar; Backup wird in der Fragerunde gezeigt) – wie bisher. Die Wortmarke
auf 09b (389 px) reicht für 1080p; nur für Bildschirme mit doppelter Pixeldichte eine größere Datei einsetzen
(LIESMICH 12). Die Grafiken in `../grafiken/` bleiben unverändert (Entscheidung der Gruppe, LIESMICH 12).

### Exporte erzeugen (seit 19.10.2026)

Im Ordner `praesentation/`, mit `PLAYWRIGHT_CORE` (und ggf. `CHROME_PFAD`) wie in Abschnitt 9:

```bash
# 1. PDF für Plan B – ohne die optionale Folie 01b, eine Seite je Folie (erwartet: 22)
node werkzeuge/pruefen.mjs index.html --ausgabe _test/export-druck --ohne-bilder --druck export/praesentation.pdf
#    bericht.json → "druck": { "seiten": 22, "erwartet": 22 }, "fehler": []

# 2. Folienbilder im Endzustand (1920 × 1080, inkl. 01b) – pruefen.mjs ohne --schritte
#    fotografiert jede Folie im letzten Schritt (Aufnahmemodus wie im Druck)
node werkzeuge/pruefen.mjs index.html --ausgabe _test/export-folien --optional
rm -f export/folien/*.png && cp _test/export-folien/*.png export/folien/

# 3. Übersicht aus den Folienbildern (Stand = Datum in der Fußnote)
node werkzeuge/uebersicht.mjs index.html --stand TT.MM.JJJJ
```

Danach `export/uebersicht.png` und einige Bilder in `export/folien/` ansehen. Testausgaben bleiben in `_test/`
(nicht einchecken).

PDF und Folienbilder zeigen Folie 08 im Endzustand (Analogien) – die Umfrage und der QR-Code sind dort nicht zu
sehen; der Live-Zustand ändert die Exporte nicht. Keiner der drei Schritte fragt die Web-App ab: Das PDF lädt
mit `?druck` (keine Abfrage), die Folienbilder beantwortet die eingebaute Attrappe von `pruefen.mjs`,
`uebersicht.mjs` bricht jede externe Anfrage ab und meldet `externeAnfragen`/`liveAnfragen` (erwartet 0). Beide
Werkzeuge starten den Browser ohne Netz (Abschnitt 9).

## 16. Eigene Live-Abstimmung für Folie 08 (19.10.2026)

Entscheidung Yannick: Live-Umfrage ohne fremdes Werkzeug. Publikum → QR-Code → `abstimmen.html` → Web-App
(Google Apps Script in Yannicks Konto) → Google-Tabelle; Folie 08 holt den Stand alle 2 s. Werte eintippen und
Zählmodus bleiben unverändert (Rückfall). Schnittstelle und Felder: Abschnitt 6c.

| Bereich | Änderung |
|---|---|
| `marke.js → umfragen.tier` | Tiere Adler, Löwe, Waschbär, Fuchs, Schwan (Schwan statt Delfin); neue Felder `liveQuelle` (leer = aus) und `runde` (`'probe'`); `link` = `abstimmen.html?u=tier` auf GitHub Pages, `kurzLink` leer (Adresse zu lang, der QR-Code reicht); Beispielwerte für fünf Tiere, weiter gekennzeichnet; Kommentar: Weg A eigene Abstimmung, Weg B Werkzeug, Plan C Zählmodus. |
| Umfrage (`js/komponenten.js`, Abschnitt 3a) | Abfrage per JSONP mit Takt, Zeitlimit, ohne Überlappung; Pille als Knopf mit Zustand; Pause bei Hand-Eingabe; Abgleich mit dem Referentenfenster über `Deck.kanal`; keine Abfrage im Druck/Aufnahmemodus; Prüfung von `liveQuelle` (muss auf `/exec` enden) und `runde` mit Warnung in der Konsole. Ohne `liveQuelle` unverändert. |
| Pille (`css/komponenten.css`) | Zustände „verbinde“, „offline“ (gestrichelt, hohler Punkt), „pausiert“ (Pausenzeichen) in Nebentextfarbe ohne Puls; „Live“ wie bisher. |
| Neu (eigene Teile) | `abstimmen.html`, `js/abstimmen.js`, `css/abstimmen.css` (Abstimmseite); `live-abstimmung/apps-script.gs`, `live-abstimmung/ANLEITUNG.md`; `werkzeuge/live-abstimmung-test.mjs` (Prüfung des Skripts, `--server PORT` = lokale Attrappe mit dem echten Skript). |
| `LIESMICH.md` | Abschnitt 6 neu (Weg A, B, Plan C, Pille, Rückfall), Checkliste 12 (Einrichten, Runde umstellen, Internet am Präsentationsrechner, 30 Minuten vorher, nach dem Vortrag), Abschnitte 1, 2, 8, 11, 13 ergänzt. |

Geprüft am 19.10.2026: `pruefen.mjs --nur f08 --schritte` ohne und mit `liveQuelle` 0 Fehler, 0 Warnungen, keine
externen Anfragen; Vortragsmodus ohne `liveQuelle` wie vorher (keine Anfrage, kein QR-Code, Zählmodus); mit der
lokalen Attrappe: Stimmen bewegen die Balken, Umentscheiden, Attrappe aus → „offline“ (Werte bleiben), langsame
Antwort (6 s) → Zeitüberschreitung (damals hart nach 4 s; die Prüfung zeigte, dass beim Server dann doch zwei
Anfragen gleichzeitig liefen – behoben in der Nacharbeit unten), Klick/Ziffer/„Werte“/„Zurücksetzen“ → „Live
pausiert“, Klick auf die Pille → fortgesetzt, Referentenfenster ohne eigene Anfragen und mit gleicher Pille.
Offen: Folie 08 (Kasten und Notizen in `index.html`) beschreibt noch den alten Weg – Bündel B (LIESMICH 12).

**Ende-zu-Ende-Test (19.10.2026, ohne Google):** Attrappe `live-abstimmung-test.mjs --server`; Präsentation und
Abstimmseite unter der GitHub-Pages-Adresse (Dateien von der Festplatte, `marke.js` nur im Test mit
`liveQuelle` `https://script.google.com/…/exec`, die Anfragen dorthin beantwortet die Attrappe). Drei Handys
(390 × 844) öffnen die Adresse aus dem QR-Code und stimmen ab, eines entscheidet sich um → Folie 08 zeigt Zahlen,
Prozente und Balken nach 1,3–1,9 s; Aussagezahl (Schritt 1) rechnet mit; Referentenfenster (Taste P) zeigt
dieselben Werte; Attrappe aus → „offline“, Werte bleiben, Handy meldet „Das hat nicht geklappt“; Hand-Eingabe →
„Live pausiert“. Dabei geändert: (1) Antwortet die Web-App in 2 s oder später, fragte die Folie nur alle 4 s – jetzt
folgt die nächste Abfrage sofort (gemessen: 2,5 s Antwortzeit → 2,5 s Abstand). (2) `ANLEITUNG.md` und
`live-abstimmung-test.mjs` empfahlen für den lokalen Test `liveQuelle = http://localhost…` – das nimmt die
Abstimmseite nicht an; jetzt `?quelle=` für Folie, Referentenfenster und Abstimmseite (siehe 6c).

### Nacharbeit nach zwei Prüfungen (19.10.2026)

Zwei Prüfer (Funktion/Robustheit/Datenschutz und Darstellung/Bedienung) fanden 1 hohen (von beiden), 6 mittlere
und 12 niedrige Befunde. Eingearbeitet:

| Bereich | Änderung |
|---|---|
| Umfrage (`js/komponenten.js`, 3a) – **hoch** | Gespeicherte Werte tragen die `runde`; mit `liveQuelle` gelten sie nur in derselben Runde. Vorher zeigte Folie 08 im Vortrag bei unerreichbarer Web-App die Stimmen der Generalprobe ohne Pille „Beispieldaten“, und Plan C zählte darauf weiter. Jetzt: Beispielwerte mit Pille, die erste Handstimme setzt auf 0. Alter Speicher ohne Runde gilt mit `liveQuelle` nicht. Ohne `liveQuelle` unverändert. |
| Zeitlimit (`js/komponenten.js`) | weich 4 s/8 s (Fehlversuch, Anfrage bleibt offen, späte Antwort zählt), hart 15 s; nächste Anfrage erst danach (auch beim Server keine Überlappung). Vorher: hart 4 s – eine Web-App mit 4,5 s Antwortzeit zeigte nie einen Stand. Klick auf „offline“ gibt eine hängende Anfrage auf. |
| Pause, Meldungen, QR (`js/komponenten.js`) | Pause je Umfrage und Runde gespeichert (übersteht F5); Grund „Bereitstellung „Jeder“?“ bei nicht erreichbarer Web-App; QR-Code zur Abstimmseite nur ohne Fehler in `liveQuelle`/`runde` (vorher auch bei …/dev). |
| Referentenfenster (`js/komponenten.js`, `css/komponenten.css`) | Zustand als Knopf `.r-live` in einer eigenen Zeile unter der Kopfzeile „Aktuell“ (15 px statt ca. 9 px in der verkleinerten Pille; die Kopfzeile selbst war schon voll), Klick = fortsetzen/neu versuchen; Vorschau „Als Nächstes“ wird bei jedem Zustandswechsel neu gebaut. |
| Folie 08 (`index.html`, nur Umfrage-Baustein) | `data-qr-groesse="440"` statt 380 (45 Module, 9,8 statt 7,2 Bühnen-Pixel je Modul); Kommentar ergänzt. Sonst keine Inhalte geändert. |
| Abstimmseite (`abstimmen.html`, `css/abstimmen.css`, `js/abstimmen.js`) | kein HOLY-Logo mehr im Kopf (Absenderposition, `QUELLEN.md` §4), stattdessen „Studentische Fallstudie · keine Verbindung zur …“ ohne Scrollen sichtbar; neutrales Tab-Symbol; Regel für niedrige Fenster (alle fünf Tiere sichtbar bei 375 × 548, 360 × 560, 390 × 664, 320 × 640) und für Handys quer (zwei Spalten); Datenschutztext nennt Google und alle gespeicherten Angaben; Geräte-ID je Umfrage und Runde (alte gemeinsame ID wird gelöscht); `liveQuelle` muss auf `/exec` enden (wie die Folie); neutraler Text bei Verbindungsfehlern, Konsolenhinweis auf „Jeder“; Hinweis „Die Abstimmung ist gerade nicht geöffnet – Sie läuft nur während der Präsentation im Hörsaal“ (stimmt auch nach dem Vortrag); Zeitlimit 30 s; Kommentar zur Ladereihenfolge berichtigt. |
| Server (`live-abstimmung/apps-script.gs`) | `SPERRE_WARTEN_MS` 10 s statt 20 s – der Server gibt vor dem Handy auf, seine Meldung „bitte gleich noch einmal tippen“ kommt an. |
| `werkzeuge/live-abstimmung-test.mjs` | Prüfung „Sperre kürzer als Zeitlimit des Handys“ (weiter 32 Prüfungen); neu `--lasttest <URL> [--anzahl 40]` gegen die echte Web-App. |
| `live-abstimmung/ANLEITUNG.md` | Tests im privaten Fenster, Handy ohne Google-Anmeldung; Lasttest; Ändern auf GitHub ohne Git und Kontrolle auf dem Handy; Kontrolle der Runde auf GitHub Pages (`marke.js?v=…`); „Kontingente unkritisch“ ersetzt durch „nicht geprüft – Lasttest“; Missbrauch genauer; Fehlertabelle (+4 Zeilen); kleine Wortlaute (Zeilennummer links, Umentscheiden). |
| `LIESMICH.md`, `QUELLEN.md` | Abschnitt 6 (Runde, F5, Referentenzeile, Plan C), Checkliste 12, Abschnitt 13; `QUELLEN.md` §4: Abstimmseite ohne Logo. |

**Nicht umgesetzt (mit Grund):** kürzere Adresse der Abstimmseite über eine Weiterleitungsseite (optional; neue Datei
außerhalb von `praesentation/` und ein zusätzlicher Sprung auf dem Handy – 440 px und der Scan-Test aus der letzten Reihe
reichen); schnellere Schreibstelle im Server (Textformat für ganze Spalten, `appendRow`) – ob Google das Format
übernimmt, ist ohne Google nicht prüfbar, der Lasttest bei der Generalprobe zeigt, ob es nötig ist. (Überholt:
Der Lasttest war nötig und nicht bestanden – neue Schreibstelle im Unterabschnitt „Lastfest“ unten.)

**Geprüft (19.10.2026, ohne Google):** `live-abstimmung-test.mjs` 32 von 32; Lasttest gegen die Attrappe bestanden;
Ende-zu-Ende-Test wie oben (Attrappe, GitHub-Pages-Adresse, drei Handys, Referentenfenster) 32 von 32; gezielte Tests
der Befunde 34 von 34 (u. a. Probewerte im Vortrag offline → Beispielwerte, Antwortzeit 4,5 s → Stand kommt, hängende
Verbindung → „offline“ nach ca. 4 s, eine Anfrage bis 15 s, Pause übersteht F5, Geräte-ID je Runde, …/dev auf beiden
Seiten abgelehnt, QR 440 px, Referentenzeile); Abstimmseite in 9 Fenstergrößen hell/dunkel (alle Tiere sichtbar, keine
waagrechte Scrollleiste, Tippflächen ≥ 58 px); `pruefen.mjs index.html --schritte --optional`: 23 Folien, 0 Fehler,
4 Warnungen Wortbudget wie bisher (f03, f04, f10, f11), keine externen Anfragen; `--nur f08 --schritte` mit
`liveQuelle` (Kopie) in Editorial hell/dunkel, Bento dunkel, Keynote hell je 0 Fehler, 0 Warnungen; QR-Code per
OpenCV gelesen bei 1920 und 960 px Bildbreite in allen vier, bei 640 px in drei von vier (vorher mit 380 px: eine von
sechs) – nur ein Ersatz für den Scan-Test. Exporte neu erzeugt (Abschnitt 15): PDF 22 Seiten ohne 01b, 23 Folienbilder,
Übersicht Stand 19.10.2026. Offen wie bisher: echtes Google Apps Script (Weiterleitung, Kaltstart, Kontingente),
echte Handys, Scan aus der letzten Reihe.

### Lastfest (19.10.2026)

**Anlass:** Lasttest gegen die echte Web-App am 19.10.2026 (40 Stimmen gleichzeitig, eigene Runde
„lasttest-…“): 19 von 40 angenommen, 21 nach rund 10 s mit „Gerade kommen sehr viele Stimmen …“ abgelehnt,
Antwortzeit Median 11,2 s, längste 14,3 s. Ursache: Jede Stimme hielt die Sperre (`LockService.getScriptLock()`)
für Blatt suchen, letzte Zeile, Format, Werte und `flush` – rund 0,5 s, alle nacheinander. **Ziel:** 40 fast
gleichzeitige Stimmen werden alle gezählt, jedes Handy sieht spätestens nach ca. 15 s „Danke“, ohne selbst zu
tippen. Schnittstelle, Zählregel, Datenschutz und Verhalten der Folie bleiben gleich. Ablauf: drei Bauteile
(Server, Abstimmseite, Prüfwerkzeug), Ende-zu-Ende-Test, zwei Prüfungen (Nebenläufigkeit und Apps Script;
Prüfwerkzeug, Exporte und Anleitung: zusammen 1 hoher, 8 mittlere, 11 niedrige Befunde), Nacharbeit. Quellen zu Apps
Script (Lock-Referenz, Quotas, `appendRow`, `clearContent`, abgerufen 19.10.2026) im Kopf von `apps-script.gs`.

| Bereich | Änderung |
|---|---|
| `live-abstimmung/apps-script.gs` (`FASSUNG = '19.10.2026'`) | **Zeile reservieren, dann ohne Sperre schreiben:** Unter der Sperre steht nur die Skript-Eigenschaft `naechsteZeile` – lesen und um 1 erhöhen in derselben Sperre (Muster der Lock-Referenz: fortlaufende Ticketnummer), höchstens 8 s warten (`SPERRE_WARTEN_MS`, vorher 10 s). Danach schreibt jede Stimme in ihre eigene Zeile, nur wenn sie leer ist (sonst Abgleich mit `getLastRow`, Zähler nie zurück, höchstens 3 Zeilen); `{"ok":true}` erst nach `flush`; Zeit beim Eingang (die neuere Wahl desselben Handys gewinnt). Seltene Wege mit Tabellenänderung (Blatt anlegen, Kopfzeile, 500 Zeilen nachschieben) unter der Sperre, `flush` vor `releaseLock`. **Warum nicht `appendRow` ohne Sperre:** Die Referenz sichert nicht zu, dass gleichzeitige Aufrufe nie dieselbe Zeile treffen. **`einrichten()`:** Kopfzeile, 5000 formatierte Reservezeilen, Formate der ganzen Spalten, Zähler hinter die letzte Zeile, aber nie zurück (Nacharbeit), Textschutz-Probe in der letzten Zeile (leeren mit `clearContent`, Nacharbeit), drei Protokollzeilen. Nacharbeit außerdem: `doGet` im Editor schreibt einen Hinweis auf `einrichten` ins Protokoll; `?aktion=fassung` (unbekannte Aktion) nennt die Fassung; Kopf: Löschen, Sortieren, Einfügen, `einrichten` und „Neue Version“ nur ohne laufende Abstimmung; Kontingente vorsichtig formuliert (30 gleichzeitige Ausführungen je Nutzer und ein unbeziffertes Limit für Starts pro Sekunde; wie beides bei „Ausführen als: Ich“ greift, ist nicht dokumentiert). |
| `js/abstimmen.js`, `css/abstimmen.css`, `abstimmen.html` (nur Kommentar) | Senden mit automatischer Wiederholung (Abschnitt 6c): bis zu 3 Versuche, 15 s je Versuch (vorher 30 s, ein Versuch), Pause 1,5–4 s, ruhiger Hinweis statt Fehlerkarte, Umentscheiden jederzeit, höchstens eine Anfrage unterwegs, Nachzügler. Nacharbeit: späte Zusage für dieselbe Wahl → gleich „Danke“ statt weiterer Versuche; Hinweiszeile behält die Höhe der Anleitung (Tablet 768 px: vorher 23 px Sprung); Kommentare zu Kontingent und PDF berichtigt. Abgeblendete Tiere Deckkraft 0,72 (Kontrast hell 6,8 : 1, dunkel 7,8 : 1). |
| `werkzeuge/live-abstimmung-test.mjs` | Neu geschrieben, **44 Prüfungen** (vorher 32). Attrappe mit Schreibpuffer je Ausführung, Skript-Eigenschaften, Sperre mit Besitzer und Sperr-Phasen, verschachtelten Ausführungen (2. und 3. Stimme vor jedem Dienstaufruf), `appendRow` atomar oder nicht. Regeln der Lock-Referenz: `flush` vor `releaseLock`; Eigenschaft nur unter der Sperre ändern und in derselben Sperr-Phase lesen und schreiben (Nacharbeit); Zeilen und Blätter nur unter der Sperre anfügen (Nacharbeit); Sperre am Ende frei; `''` per `setValues` zählt pessimistisch als Inhalt. Grenze des Modells im Kopf benannt. `--mutationen`: 16 kaputte Kopien (vorher 11). `--server`: `--stoerung`, `--abbruch`, `--gleichzeitig`, neu `--sperre MS` (Belastbarkeit). `--lasttest`: Handy-Regel aus `js/abstimmen.js`, `--anzahl`, `--verteilt`; Nacharbeit: Fassungsabfrage, mitlesende „Folie“ wie 3a (`--ohne-folie`), Urteil BESTANDEN / GEZÄHLT, ABER ZU LANGSAM / NICHT BESTANDEN mit Ziel 15 s (`ZIEL_MS`). |
| `werkzeuge/pruefen.mjs`, `werkzeuge/uebersicht.mjs` | Eingebaute Attrappe der Web-App (nur `liveQuelle`, nur `stand`/`stimme`); Prüfseite mit `liveQuelle` ohne `?aufnahme` – Folie 08 wie zu Beginn des Vortrags (QR, „Live“, `n = 0`) statt Beispieldaten; `--live-offline`, `--live-werte`, `--live-aus`; Bericht `liveAnfragen`. Nacharbeit: `aktion=stimme` aus der Präsentation ist ein Fehler; WebSockets werden abgefangen und als externe Anfrage gemeldet; Browser startet ohne Proxy und ohne Namensauflösung (`--no-proxy-server`, `--host-resolver-rules`) – mit `--disable-background-networking` allein baute Chrome in jedem Lauf eigene Verbindungen zu Google-Diensten auf (clients2.google.com, accounts.google.com u. a., nie `script.google.com`). |
| `live-abstimmung/ANLEITUNG.md` | Abschnitt „Skript aktualisieren“ (Raw-Link mit Strg+F-Kontrolle, Handgriffe für das Auswahlfeld, drei Protokollzeilen, „Neue Version“, Kurzprüfung mit `?aktion=fassung` und neuer Geräte-ID, wo das Blatt steht); Lasttest (20–60 Handys, mindestens zweimal, Ausgabe, drei Urteile); „Wichtig zu wissen“ (nur ohne laufende Abstimmung löschen/sortieren/einfügen, Lücke im Blatt, Kontingente); Fehlertabelle +7 Zeilen; „Für die Technik“ (`--sperre`, Wiederholung gegenüber Belastbarkeit). |
| `js/komponenten.js` (nur Kommentar), `LIESMICH.md`, `AUTOREN.md` | Kommentar zu `?aufnahme` und `pruefen.mjs`. LIESMICH 6 (Andrang, Testen, PDF ohne QR-Code, Prüfwerkzeug), 11 (im PDF keine Abstimmung), 12 (Punkt „Skript aktualisieren“), 13. AUTOREN 6c, 9, 15 und dieser Abschnitt. |

**Geprüft (19./20.10.2026, nur lokal – keine einzige Anfrage an die echte Web-App):**
- `live-abstimmung-test.mjs`: 44 von 44; `--mutationen`: 16 von 16 erkannt. Gegenprobe: das alte Skript bestand
  die neuen Prüfungen nur zu 33 von 42 (Stand Bau).
- Lasttest gegen die Attrappe, 40 Handys (Urteil, längste Zeit bis „Danke“): ohne Störung BESTANDEN (0,1 s);
  `--verzoegerung 800 --stoerung 0.2` BESTANDEN (5,0 s); `--abbruch 0.2` BESTANDEN (5,5 s); `--verzoegerung 1200
  --stoerung 0.2 --abbruch 0.1 --gleichzeitig 30 --sperre 100 --verteilt 10` BESTANDEN (11,5 s). **Belastbarkeit
  mit `--sperre`** (Haltezeit je Stimme, `--verzoegerung 800`): 200 ms → BESTANDEN (8,8 s), mit `--anzahl 60`
  GEZÄHLT, ABER ZU LANGSAM (1 Handy, 15,1 s); 300 ms → ZU LANGSAM (2 Handys, 15,5 s); 500 ms (etwa der alte
  Server) → ZU LANGSAM (16 Handys über 15 s, längste 26,2 s). Die „Folie“ war in keinem Lauf „offline“.
  Folgerung: Das Ziel hält, solange eine Stimme die Sperre bei Google höchstens ca. 0,2 s hält (bei 60
  Handys knapp). Wie lange das bei Google dauert, ist nicht gemessen.
- Abstimmseite im Browser (Playwright, `file://`, Attrappe; Anfragen an Google blockiert und gezählt: 0): 22 von 22
  Fällen – Erfolg im 1./2./3. Versuch (Andrang, `nochmal`, „Serverfehler:“, HTTP 503, Netz- und Ladefehler),
  Fehlerkarte erst nach 3 Versuchen, Zeitüberschreitung, Umentscheiden in der Pause und während einer Anfrage,
  Nachzügler, offline, Eingabefehler, Du-Form, Darstellung 390 × 664 und 375 × 548 hell/dunkel; neu: späte Zusage
  in der Pause → „Danke“ nach 16,1 s mit 1 Anfrage, späte Zusage während Versuch 2 (Andrang) → „Danke“ ohne
  Fehlerkarte, Tablet 768 × 1024 ohne Sprung (vorher 23 px). Ende-zu-Ende (3 Runden mit 3 Handys und Folie 08,
  `--stoerung 0.3`): 9 von 9 „Danke“ ohne Tippen, Folie stimmt in jeder Runde, Umentscheiden in zwei Varianten,
  Attrappe gestoppt → Fehlerkarte nach 3 Versuchen, Folie „offline“.
- `pruefen.mjs index.html --schritte --optional`: 23 Folien, 80 Bilder, 0 Fehler, 4 Warnungen Wortbudget wie bisher
  (f03, f04, f10, f11), `externeAnfragen` 0, `liveAnfragen` 1 (Attrappe), Folie 08 „Live“, `n = 0`; alle 80 Bilder
  byteweise gleich mit dem Lauf vor den neuen Startoptionen. `--nur f08 --schritte` mit `--live-offline` (dunkel),
  `--live-werte 15,9,17,14,9` und `--live-aus` (Keynote): je 0 Fehler. Gegenproben: `aktion=stimme` aus einer
  Präsentationskopie → Fehler; WebSocket → Fehler „externe Anfrage blockiert: wss://… (WebSocket)“. Chrome-NetLog
  (`pruefen.mjs --nur f08`, `uebersicht.mjs`): keine TCP-Verbindung, jede Namensauflösung `~NOTFOUND`.
- Exporte nach Abschnitt 15 neu erzeugt und nach `export/` kopiert: PDF 22 Seiten (0 Fehler, `ausDruckansicht` 0),
  23 Folienbilder, Übersicht Stand 19.10.2026 (`externeAnfragen` 0, `liveAnfragen` 0). Inhaltlich unverändert:
  Bilder und Übersicht byteweise gleich, alle 22 PDF-Seiten pixelgleich (40 dpi). Folie 08 in PDF und Bild
  angesehen: Endzustand mit den Analogien, ohne QR-Code.

**Nicht umgesetzt (mit Grund):** zusätzliche PDF-Seite „Folie 08, Schritt 0“ (Frage und QR-Code) für Plan B – braucht
eine Änderung der Druckansicht und ergäbe 23 statt 22 Seiten; Yannick hat am 20.10.2026 entschieden: nicht nötig, LIESMICH 11 (Frage auf
Folie 07 stellen, Hände zählen). Folie 08 im Prüflauf zweimal fotografieren (`n = 0` und mit Balken) – stattdessen
Hinweis in Abschnitt 9 (`--live-werte`). Prüfen der Skript-Eigenschaft in der Oberfläche als Kurzprüfung – ersetzt
durch `?aktion=fassung` (eindeutig, ohne Oberflächenwissen). Mutanten „Abgleich ohne `Math.max`“, „nach drei belegten
Zeilen `{ok:true}`“ und „bei gleicher Zeit gewinnt die obere Zeile“ – im Modell verschachtelter Ausführungen
unerreichbar bzw. nur bei gleicher Millisekunde desselben Handys; von Hand geprüft, im Kopf des Werkzeugs vermerkt.

**Offen:**
- **Yannick:** Skript aktualisieren (ANLEITUNG „Skript aktualisieren“: Code einfügen, „einrichten“, Neue Version,
  Kurzprüfung) – **am 20.10.2026 zurückgestellt** (Yannick: erst Folie 08 überarbeiten, Abschnitt 18). Vorher müssen die Änderungen auf GitHub sein (Commit und Push), sonst zeigt der Raw-Link die alte
  Fassung.
- **Danach Lasttest gegen die echte Web-App** (mindestens zweimal mit `--anzahl 20`; höchstens ca. 20 Personen im
  Raum, Yannick 20.10.2026; Messung 20.10. mit der alten Fassung: 20 von 20 gezählt, 6 Handys über 15 s). Erst er zeigt, wie lange
  der kurze Abschnitt unter der Sperre bei Google dauert (`tryLock`, `getProperty`, `setProperty`, `releaseLock` –
  Drittquelle justin.poehnelt.com, 16.03.2024: PropertiesService ca. 80 ms je Schreiben und Lesen; die Übergabe der
  Sperre ist nicht dokumentiert) und ob Kontingente greifen. Ist er zu langsam: nächste Stufe wäre `appendRow` ohne
  Sperre – schneller, aber ohne dokumentierte Garantie (Restrisiko stiller Verluste); erst nach der Messung entscheiden.
- Ob das Format `@` die Umwandlung verhindert (Modellwissen): prüft die Textschutz-Probe in `einrichten()`.
- Wie Google eine Ablehnung wegen Kontingent an ein JSONP-`<script>` ausliefert: nicht geprüft (die Abstimmseite
  wiederholt bei Ladefehlern und Antworten ohne Rückruf).
- Echte Handys (iPhone Safari, Android Chrome), Scan aus der letzten Reihe: Generalprobe.
- Restrisiken: Hält Google eine Anfrage über 15 s auf und geht auch die späte Antwort verloren, kann bei jemandem,
  der sich genau dann umentscheidet, die ältere Wahl zählen. Löschen oder Sortieren während einer Abstimmung kann
  eine Stimme überschreiben – in Skript und Anleitung beschrieben, technisch nicht verhindert.
- Grenze der Prüfung: Wettläufe, bei denen zwei Ausführungen gleichzeitig mittendrin sind, findet das Modell
  verschachtelter Ausführungen nicht; die Regelprüfung (Zähler in derselben Sperr-Phase lesen und schreiben) deckt
  den wichtigsten Fall ab.

## 17. Eigene Illustrationen statt Platzhalter: Folie 01 und 04 (19.10.2026)

Auftrag Yannick: Platzhalterbilder weitestgehend ersetzen und das Platzhalter-Schild entfernen. Entscheidung: kein
Bildgenerator und keine eigenen Fotos verfügbar, Fotos oder Bilder von HOLY aus dem Netz nicht erlaubt (Rechte,
öffentliches Repository) – deshalb **eigene Illustrationen** als reines SVG (von Claude Code als SVG-Code erzeugt,
teils per Skript; Motivvorgaben, Auswahl und Prüfung durch die Gruppe),
gekennzeichnet „Illustration: eigene Gestaltung, KI-gestützt (Claude Code), 19.10.2026“. Kein Logo, kein Schriftzug,
keine kopierte Verpackung, keine echten Personen, keine externen Ressourcen. JS und CSS unverändert.

| Bereich | Änderung |
|---|---|
| `bilder/raetsel-holy.svg` (neu) | Rätselbild Folie 01, 1920 × 1080, ohne Filter/Masken/Text (flüssiger Zoom auf 300 %): nachempfundene Pappdose (erste Fassung mit Comic-Tukan, in der Nacharbeit ersetzt durch eine Drachenfrucht ohne Tier – siehe unten), Shaker, Drachenfrucht, Eiswürfel vor HOLY-Gelb; Motiv nach Dossier Kap. 6.3 ✔ [1, 30] / 6.4 ✔ [1, 5, 73]. |
| `bilder/persona-marco.svg` (neu) | Persona-Bild Folie 04, 1 : 1: fiktive Person „Marco, 28“ mit Warnweste und Shaker vor der Nachtschicht im Lager (Steckbrief A2 §2); feste Nachtfarben, in allen Themen und Modi gleich; Klassen/IDs mit Präfix `pm-`. |
| `marke.js → raetselBild` | `bilder/raetsel-holy.svg` statt `bilder/platzhalter-raetsel.svg`; Kommentar: Illustration, eigenes Foto bleibt möglich (dann `data-fokus` neu). Die Pille „Platzhalterbild“ entfällt von selbst (Dateiname ohne „platzhalter“). `platzhalter-raetsel.svg` bleibt liegen (Rückfallwert in `js/komponenten.js`). |
| Folie 01 (`index.html`) | `data-fokus="59.5% 59%"` statt `66% 42%` (Tukan-Gesicht; seit der Nacharbeit `60.1% 60.7%`, Etikett-Frucht; in Schritt 2 steht die Gruppe mittig in der Bildtafel); Fußzeile „Illustration: eigene Gestaltung, KI-gestützt (Claude Code), 19.10.2026“ (Logo-Zeile unverändert; nicht verlängern – die Zeile bricht nicht um); Kasten „FOLIE 01“, Anleitung „RÄTSELBILD“, Kommentar über der Fußzeile und Notiz „Vor dem Vortrag“ auf den neuen Stand. |
| Folie 04 (`index.html`) | Daten `"bild": "bilder/persona-marco.svg"`, `"bildHinweis": "Illustration (KI-gestützt)"` (seit der Nacharbeit die volle Kennzeichnung, siehe unten; auch als Ersatztext im HTML, sonst blitzt „Platzhalter“ auf); `js/folien/04-persona.js` ersetzt die Inline-Zeichnung durch das Bild (die Zeichnung bleibt als Rückfall ohne `"bild"`). Fußzeile „Person, Bild, Zitat fiktiv (Illustration, KI-gestützt)“ – die längere Fassung „…; Illustration: eigene Gestaltung, KI-gestützt“ brach in allen Themen auf drei Zeilen um und drückte die Quellzeile des Psychografie-Blocks aus dem Kasten (Fehler in `pruefen.mjs`). Kasten „FOLIE 04“, Anleitung und Notizen nachgezogen. |
| B1, B2, B7 (`index.html`) | B1: Notiz „noch ein Platzhalter“ gestrichen, Kasten angepasst. B2: Kasten und Notiz – P6 optional, Persona-Bild als eigene Illustration statt Bildgenerator (keine neue Tabellenzeile). B7: „Icons, Grafiken, Illustrationen: eigene Gestaltung, KI-gestützt (Claude Code)“ mit festem Leerzeichen in „Claude Code“ – passt in allen Themen in eine Zeile (mit „(01, 04)“ brach sie um). |
| Folie 09 | **nicht geändert** (Bündel C): Schlüsselbild bleibt Piktogramm mit „Platzhalter – Screenshot folgt“, bis der Betreuer einem Screenshot zustimmt (`QUELLEN.md` §4). |
| `QUELLEN.md`, `LIESMICH.md`, `../prompts.md` | QUELLEN §3 (Illustrationen 01/04, Rückfall-Zeichnung) und §4 (zwei neue Bildzeilen, `platzhalter-raetsel.svg` als Rückfall); LIESMICH Stand, Abschnitt 8 (`raetselBild`), Checkliste 12 (beide Bilder erledigt, offene Freigaben, eigenes Foto/P6 mit ausgefüllter P6-Vorlage), Ordnertabelle; prompts.md: ein Satz unter P6 (in der Nacharbeit zurückgenommen – `../prompts.md` war für diesen Auftrag nicht zur Änderung freigegeben; der Hinweis steht in LIESMICH 12 und QUELLEN §3). |

**Geprüft (19.10.2026):** `pruefen.mjs index.html --schritte --optional` (Editorial hell): 23 Folien, 0 Fehler,
4 Warnungen Wortbudget wie vorher (f03, f04, f10, f11), keine externen Anfragen. `--nur f01,f04,b1,b2,b7 --schritte`
in Bento, Keynote und Editorial dunkel: je 0 Fehler, nur die bekannte Warnung f04 (46 Wörter, wie vorher).
`--druck`: 22 von 22 Seiten, Seite 1 (Titelfolie mit Bildtafel) und Seite 4 (Persona) angesehen. Screenshots
angesehen: f01 Schritt 0–2 in Editorial und Bento, Schritt 1–2 in Keynote, Schritt 0 dunkel; f04 Schritt 0–4 in
Editorial, Schritt 4 in Bento, Keynote und dunkel; B7 in allen drei Themen. (Laufen mehrere Prüfungen gleichzeitig,
fehlt in Schritt 1 auf dem Screenshot manchmal noch das Logo – Zeitfrage der Animation; einzeln wiederholt: Logo da.) Sichtbarer Text aller Folien (jede Folie, jeder
Schritt; zusätzlich Druckmodus mit alt/aria-label/title) nach „Platzhalter“ durchsucht: einziger Rest Folie 09
(„Platzhalter – Screenshot folgt“, Bündel C, bewusst). **Offen:** Exporte (`export/`) zeigen noch die alten
Platzhalter – nach den Freigaben neu erzeugen (Abschnitt 15; erledigt in der Nacharbeit, siehe unten); Motiv und
Darstellung durch die Gruppe freigeben; Rätsel mit zwei Personen testen; Übergang 0→1→2 auf dem Vortragsrechner
ausprobieren.

### Nacharbeit der Illustrationen nach zwei Prüfungen (19.10.2026)

Zwei prüfende KI-Agenten (Darstellung; Inhalt, Kennzeichnung, Rechte) haben die Illustrationen geprüft. Eingearbeitet:

| Befund | Änderung |
|---|---|
| **Tukan = echte HOLY-Sorte** (hoch): HOLY führt eine Energy-Sorte „Thai Lime Toucan“ in einer Pappdose mit Tukan (Websuche 19.10.2026: de.holy.com/products/thai-lime-toucan; change.org/topic/holy-de-de – nicht im Dossier) | `raetsel-holy.svg` neu erzeugt: Etikett **ohne Tier** – Drachenfrucht im Comic-Aufkleber-Stil mit Heiligenschein, Strahlen, Funkelsternen und Saftspritzern. Begründung: HOLY gibt jeder Energy-Sorte ein Comic-Tier (Dossier 6.3 ✔ [30]), jedes Tier könnte eine echte Sorte nachbilden. `data-fokus` auf `60.1% 60.7%` (Fruchtfleisch). Kasten und Anleitung „FOLIE 01“, Notiz f01 (Rückfragen „Ist das eine echte Dose?“ und „Warum kein Tier?“), `marke.js`, QUELLEN §3/§4, LIESMICH 8/12 angepasst. |
| Urheberschaft (mittel): „von Hand“ bzw. „selbst gestaltet“ | QUELLEN §3/§4, dieser Abschnitt, Notiz f01 und die Kopfkommentare der SVGs sagen jetzt: von Claude Code als SVG-Code erzeugt (teils per Skript), Motivvorgaben, Auswahl und Prüfung durch die Gruppe. Die Kennzeichnung auf den Folien bleibt wie vorgegeben. |
| Kennzeichnung Folie 04 (mittel) | `"bildHinweis"` und Ersatztext: „Illustration: eigene Gestaltung, KI‑gestützt (Claude Code), 19.10.2026“ mit geschütztem Bindestrich (U+2011), zweizeilig; Fußzeile bleibt kurz. |
| Exporte (mittel) | PDF, Folienbilder und Übersicht neu erzeugt (Abschnitt 15, `--stand 19.10.2026`). |
| Spiegelung im Tisch (niedrig) | Spiegelung des Shakers wird jetzt vor der Dose gezeichnet (liegt dahinter); beide Spiegelungen als elliptischer Verlauf ohne harte Kanten (keine Filter, keine Masken). |
| Bläschen am Tukan-Flügel, Tukan-Gesicht (niedrig) | entfallen mit dem Tukan. |
| Hand am Shaker, Folie 04 (niedrig) | Daumen liegt hinter dem Becher, nur die Spitze ohne Nagel schaut links hervor; Finger unterschiedlich lang, kleiner Finger kürzer und schmaler, Nägel verkürzt. |
| Bodenlinie, Folie 04 (niedrig) | entfernt (las sich wie ein Stab in der Hand). |
| LIESMICH-Checkliste (niedrig) | „eingebaut“ und „freigeben“ getrennt: eigene offene Punkte „Folie 01 – Motiv freigeben und Rätsel testen“ und „Folie 04 – Darstellung freigeben“ (A · Yannick); Punkt „Exporte mit den Illustrationen neu erzeugt“. |
| Weste dem Steckbrief zugeschrieben (niedrig) | Notiz f04, Kasten „FOLIE 04“, QUELLEN §3: Lager und Nachtschicht nach Steckbrief A2 §2; Warnweste, Haare, Bart, Hautfarbe sind Gestaltung. |
| `../prompts.md` geändert (niedrig) | Änderung zurückgenommen (Datei war nicht freigegeben). |
| P6 im Kommentar „04-persona.html“ (niedrig) | „Prompts P3/P4; P6 optional, Bild seit 19.10.2026 eigene Illustration, KI-gestützt“. |

Folie 09 bleibt unverändert (Piktogramm, „Platzhalter – Screenshot folgt“; Zustimmung des Betreuers nötig, QUELLEN §4).
Das Generator-Skript des Rätselbilds liegt nicht im Repository; die SVG-Datei ist die bearbeitbare Quelle.

**Geprüft (Nacharbeit, 19.10.2026):** `pruefen.mjs index.html --schritte --optional` (Editorial hell): 23 Folien,
80 Screenshots, 0 Fehler, 4 Warnungen Wortbudget wie vorher (f03 48, f04 46, f10 49, f11 55), keine externen
Anfragen. `--nur f01,f04,b1,b2,b7 --schritte` in Editorial, Bento und Keynote, je hell und dunkel: je 0 Fehler, nur
die bekannte Warnung f04 (46). Kennzeichnung auf f04 in allen Themen zweizeilig, „KI‑gestützt“ ungetrennt.
Exporte nach Abschnitt 15: PDF 22 von 22 Seiten (ohne 01b), 23 Folienbilder (geändert: f01, f04, b7), Übersicht
`--stand 19.10.2026`; PDF-Seiten 1 und 4 und die Übersicht angesehen – kein Platzhalter-Schild auf 01 und 04.

## 18. Chamäleon statt Waschbär (Di, 20.10.2026)

Entscheidung Yannick (KI-Nachweis 94/95): Elias Knauber (Bündel C) ordnet HOLY in seiner Ausarbeitung eher als
**Chamäleon** ein. Das Tier unserer Analyse wechselt deshalb von Waschbär zu Chamäleon – auf Folie 08, in der
Live-Abstimmung und in den Ausarbeitungen. Nur diese inhaltliche Änderung, kein weiteres Redesign. Die
Aktualisierung des Apps Script bei Google ist zurückgestellt; die Live-Abstimmung bleibt technisch unverändert
(`apps-script.gs`, Schnittstelle, `liveQuelle`, `runde`). Das Skript speichert nur die Nummer des Tiers.

**Kennzeichnung:** Einordnung: Elias Knauber (Bündel C). Begründung: **Vorschlag, KI-gestützt** aus dem
Recherche-Dossier – **von Elias zu prüfen** (seine Ausarbeitung liegt nicht im Repository). Die Analogie ist eine
Hypothese (H). Die frühere Hypothese des Dossiers (Kap. 6.7: „Ton eher Waschbär oder Affe“) bleibt als
Zwischenstand dokumentiert. Ohne Websuche; die Alltagsbedeutung von „Chamäleon“ ist Modellwissen.

**Begründung in Kürze (Vorschlag; vollständig mit Quellennummern in den Notizen von Folie 08, Stand nach der
Nacharbeit):** Das Chamäleon ersetzt den frechen Ton nicht, es beschreibt, wie er auftritt: wandelbar in Farbe,
Sorte und Szene – im Ton immer frech. Dafür: 31 Energy-Sorten mit je eigenem Comic-Tier (Dossier 3.1 ✔, 6.3 ✔),
Auftritte von Wacken bis CSD, Kooperationen mit Vereinen und Lizenzen – eigene Produkte mit dem 1. FC Köln und den
Simpsons (6.6 ✔) –, Wandel vom „Gaming Booster“ zum Softdrink für alle (2.8 ✔, Etappen H), Look 2022 „bunter“
(2.1 ✔), Limited Drops (7.1 ✔). Was bleibt: Du-Ton, „Gefährlich geil!“, „Zero Zucker oder Bullsh*t.“ (6.2 ✔);
laut Jost massenmarkttauglicher, ohne „dieses edgy … zu verlieren“ (2.8 ✔). Ambivalent: eigene Fassungen je Markt
und Kanal (6.1 ✔, S4 ✔) – sie zählen nicht als Stärke, sondern gehören zu S4 und S5; im Alltag heißt „Chamäleon“
auch „ohne festen Kern“ – Anzeichen in S5 (sechs Claims, Profilnamen; Befund ✔, Deutung H). Das ist der Bruch über
die Kanäle (Folie 09b) und der Ansatz von Empfehlung 3. Der Markenkern („Genuss mit gutem Gewissen“) ist nicht
betroffen; das Wort „Kern“ steht deshalb nur noch für den Markenkern (nicht „frech im Kern“). Folie 08b (Profil,
Merkmale, Titel) und das Feld Tonalität auf Folie 10 bleiben unverändert – Folie 10: Entscheidung Yannick offen
(Nacharbeit unten).

| Bereich | Änderung |
|---|---|
| Folie 08 (`index.html`) | Titel ab Schritt 2 „HOLY wäre ein Chamäleon, kein Adler“. Daten: `marke.tier.name` „Chamäleon“, Gründe wandelbar („31 Energy-Sorten“), vielseitig („Wacken, CSD, Simpsons“), frech („Gefährlich geil!“) – kurz wegen des Wortbudgets (39 Wörter; mit längeren Belegen waren es 47); Stichworte höchstens ca. 10 Zeichen (Spalte 176 px, „anpassungsfähig“ wäre zu breit); `hinweis` mit Kennzeichnung. Fußzeile „Tier: eigene Einordnung (H)“ – ohne Tiernamen, weil die Fußzeile schon während der Abstimmung zu sehen ist – und „Belege Kap. 3.1, 4.1, 6.2, 6.3, 6.6 ✔“. Notizen: Auflösung, „Warum Chamäleon?“, Kontrast, Bedienung, neue Rückfragen (ohne festen Kern? Tarnung? warum nicht mehr Waschbär?; nach der Nacharbeit dazu: Viele Sorten – schon Wandel? Trotzdem der Raptor? Aus eurer Befragung?), neuer Absatz „Chamäleon – Einordnung und Begründung“ (Belege, Gegenargumente, Verhältnis zu 8b/10, früherer Stand). Kasten „FOLIE 08“ und Kommentare (u. a. der falsche Verweis „Folie 10 → tonalitaet → Waschbär“: das Tier stand nie im Rad). |
| Folie 08b | Kasten und eine Rückfrage („Wo ist das Chamäleon im Profil?“). Profil, Merkmale, Titel und Daten unverändert. |
| Folie 09b, 11, 12 | Notizen: „gelebt wird das freche Chamäleon“ (09b), Brücke „Raptor als fester Anker“ zu Empfehlung 3 mit Kennzeichnung (11), Rückfrage „Warum ein Chamäleon?“ (12). |
| Folie 10 | Feld Tonalität geprüft und unverändert („frecher Kumpel · Spaß · Zugehörigkeit“, wortgleich mit 8b) – **Abweichung vom Auftrag, der „Feld Tonalität“ nannte; Entscheidung Yannick offen** (Kasten „FOLIE 10“, LIESMICH 12). Sprechtext Schritt 5 „…, wandelbar wie ein Chamäleon – …“ (7 s; Schritt 0–8 jetzt ca. 186 Wörter ≈ 98 s, Zeitangaben zusammen 78 s); Belegabsatz und Kasten. |
| `marke.js → umfragen.tier` | `optionen` `['Adler', 'Löwe', 'Chamäleon', 'Fuchs', 'Schwan']` (Chamäleon an der Stelle des Waschbärs, Nummer 2), `unsereAntwort` `'Chamäleon'`; Kommentare (Probestimmen mit Option 2 zählen jetzt als Chamäleon – die Runde wird vor dem Vortrag ohnehin umgestellt). `liveQuelle`, `runde`, `link` und Beispielwerte unverändert. |
| `werkzeuge/live-abstimmung-test.mjs` | nur die Liste `OPT` (das Werkzeug nutzt nur ihre Länge). |
| Zeichnung `chamaeleon` | eigener Arbeitsschritt: Strichzeichnung (Helm, Auge mit Pupille, eingerollter Schwanz, Ast; Zeichenfläche 120 × 120, gefüllt nur die Pupille) in `BILDER` von `js/folien/08-analogien.js` und – zeichengleich – `js/abstimmen.js`; `bildSchluessel('Chamäleon')` ergibt `chamaeleon`, der Waschbär bleibt als Rückgriff. `css/folien/08-analogien.css`: nur Kommentare. Eigene Gestaltung ohne Vorlage; Merkmale des Tiers aus dem Modellwissen. |
| `../limbic-map.md` | Zeile „Maskottchen“ in 4.1, Nachtrag 20.10. in 4.1, Kopf (Stand, Herkunft) und §8. Gewichte, Typ und Fit unverändert. |
| `../folienentwuerfe.md`, `../markenkompetenz.md`, `../persona-steckbrief.md` | geprüft: nennen kein Analogie-Tier (Folienentwürfe gibt es nur für die Folien 2–5) – unverändert. |
| `QUELLEN.md`, `LIESMICH.md`, `live-abstimmung/ANLEITUNG.md` | QUELLEN: Stand, §3 (Piktogramme), §5 (Kennzeichnung der Begründung). LIESMICH: Stand, Abschnitt 6, 11, Checkliste 12 (neu: „Elias prüft die Begründung Chamäleon“, C · Elias; „Lukas: Analogie-Befragung/Notizen Folie 08 abgleichen“, B · Lukas; Skript-Aktualisierung zurückgestellt; Sprechtext 10; Exporte). ANLEITUNG: Beispiele (Teststimme, Nummern 0–4), Hinweis zur Nummer 2 und zur Zurückstellung. AUTOREN: 6c, Offen in 16, dieser Abschnitt. |

**Bewusst nicht geändert:** `../dossier-buendel-b.md/.html` (Lukas), `../recherche/*` (Recherche-Dossier),
`../gruenderbefragung.md`, `ki-nachweis/*`, `live-abstimmung/apps-script.gs`. Die Abschnitte 10 und 16 dieser Datei
nennen den Waschbär als damaligen Stand (Änderungsprotokoll).

**Geprüft (20.10.2026, vor der Nacharbeit):** `pruefen.mjs index.html --nur f08,f08b,f10 --schritte`: Editorial hell
0 Fehler, 1 Warnung (f10 Wortbudget 49, wie bisher), f08 39 Wörter, keine externen Anfragen, kein Abgleich-Hinweis
(Titel, `unsereAntwort` und `optionen` passen); mit `--live-werte 15,9,17,14,9` (nur f08): 0 Fehler, 0 Warnungen,
Schritt 1 „27 % sehen HOLY wie wir: als Chamäleon“, Zeile „Chamäleon“ als „Unsere Analyse“ umrahmt; Bento dunkel und
Keynote dunkel mit denselben Werten je 0 Fehler, nur die Warnung f10. `live-abstimmung-test.mjs`: 44 von 44.
Abstimmseite lokal (`--server 8787`, `abstimmen.html?u=tier&quelle=…` über `file://`, 390 × 844): Knöpfe Adler, Löwe,
Chamäleon, Fuchs, Schwan; Stimme „Chamäleon“ → „Danke! Ihre Stimme: Chamäleon“, Stand `[0,0,1,0,0]`; Konsole leer.
Zwei Prüfungen (Inhalt/Belege/Kennzeichnung und Darstellung, ohne Änderungen): Belege und Status stimmen mit dem
Dossier überein, keine verbotene Datei geändert, kein Darstellungsfehler; Befunde siehe Nacharbeit.

### Nacharbeit nach zwei Prüfungen (Di, 20.10.2026)

| Befund (Schwere) | Umsetzung |
|---|---|
| Begründung widerspricht sich: „Kanal“ in der Formel und Punkt (4) „je Markt und Kanal eine eigene Fassung“ unter „Dafür“, obwohl der Bruch über die Kanäle das Risiko ist (mittel) | Formel überall „wandelbar in Farbe, Sorte und Szene – im Ton immer frech“ (Kasten 08, 08b, 10, Notizen 08/08b, Belegabsatz 10, dieser Abschnitt, `../limbic-map.md`); Punkt (4) unter „Dagegen bzw. ambivalent“: zählt nicht als Stärke, gehört zu S4 und S5. |
| Rückfrage „ohne festen Kern?“: „überall Du, ‚geil‘ …“ ohne Beleg (mittel) | Belegt und ohne „überall“: Du und „geil“ in den Shop-Texten, „Zero Zucker oder Bullsh*t.“ auf der Website (6.2 ✔ [1, 30]), englische LinkedIn-Posts enden mit „BURR“ und Adler-Emoji (6.1, 6.2 ✔ [31]). |
| Wort „Kern“ dreifach (frech im Kern / ohne festen Kern / Markenkern) – Eigentor in der Fragerunde (mittel) | Antwort beginnt mit der Unterscheidung: „Nein. Der Markenkern steht: Genuss mit gutem Gewissen (Folie 10). Und der Ton bleibt frech … Was wechselt, ist der Auftritt.“ „frech im Kern“ ersetzt; Belegabsatz 10 ohne „ohne festen Kern“; Kasten 08: „Kern“ nur für den Markenkern. |
| Folie 10, Feld Tonalität: Auftrag nannte das Feld, es bleibt unverändert (mittel, zwei Prüfungen) | **Nicht geändert, Yannick entscheidet** (Kasten „FOLIE 10“, LIESMICH 12): A) so lassen, Chamäleon nur im Sprechtext Schritt 5 (bei knapper Zeit die 4 Wörter streichen); B) ins Rad, z. B. „frecher Kumpel · wandelbar · Spaß“, dann zuerst 8b „Ins Steuerrad“ wortgleich ändern (Bündel B). Gründe: Das Tier stand nie im Rad (es gab dort nichts zu ersetzen); die Regel „wortgleich mit 8b“ und Lukas’ Bündel wären betroffen; Folie 10 hat schon ca. 49 Wörter; Yannicks Wunsch nennt Abstimmung, Folie und Analyse. |
| Exporte zeigen auf Folie 08 noch den Waschbär (mittel) | Neu erzeugt nach Abschnitt 15 (Ergebnisse unten). |
| 09b Schritt 1: Gegensatz „stolz als frech“ trägt beim Chamäleon nicht (niedrig) | „… gelebt wird das freche Chamäleon“ (+1 Wort; „wandelbar“ nicht nötig, der Gegensatz ist stolz/frech). |
| Zitat „auffällig und knallig“ verändert (niedrig) | Wörtlich: „auffälliges und knalliges Design“ (6.3 ✔ [8]). |
| „Editionen“ mit allen Vereinen (niedrig) | „Kooperationen 2026 mit Vereinen und Lizenzen – eigene Produkte mit dem 1. FC Köln und den Simpsons“ (Notizen 08, dieser Abschnitt, `../limbic-map.md`). |
| Zeit Folie 08: Schritt 2 „ca. 22 s“, Summe 72 s (niedrig) | Satz gekürzt: „Gelebt wird aber ein Chamäleon: ständig neue Farben, Sorten, Szenen – im Ton immer frech.“ Schritt 2 jetzt 43 Wörter (Waschbär-Fassung 44) in „ca. 20 s“, Summe 70 s; Hinweis im Kasten (bei 1,9 Wörtern/s ≈ 23 s – stoppen). |
| „wandelbar“ und „vielseitig“ fast gleich; Wandel auf der Folie nicht belegt (niedrig) | Folie unverändert (Wortbudget); Rückfrage „Viele Sorten – ist das schon Wandel?“ mit 2.8, 2.1, 7.1; Elias prüft die Gründe (LIESMICH 12). |
| Keine Antwort auf „trotzdem der Raptor?“ und „aus eurer Befragung?“ (niedrig) | Zwei Rückfragen in den Notizen von 08 (Raptor als fester Absender, Empfehlung 3; Tier = unsere Einordnung H, Befragung prüft offen – Ergebnis nach P11/Interviews eintragen). |
| Folie 11 ohne Kennzeichnung (niedrig) | Belegabsatz 11: „Chamäleon: Einordnung Elias Knauber, Begründung Vorschlag, KI-gestützt, H – Notizen Folie 8“. |
| `../limbic-map.md` Kopf: zwei Zeilen ohne „>“ (niedrig) | „>“ ergänzt. |
| „wandelbar“ füllt die Stichwort-Spalte fast (Lücke 21–28 px, kein Überlauf) (niedrig) | Nicht geändert: kein Redesign; ein kürzeres Wort ist eine Inhaltsfrage für Elias (LIESMICH 12). |
| Haken der „Danke“-Karte verdeckt Fuß und Astende; Zeichnung bei 42 px eng (niedrig) | Nicht geändert: betrifft alle Tiere (auch Adler, Schwan), kein Redesign gewünscht; Chamäleon bleibt erkennbar. In der Generalprobe auf Beamer und Handy prüfen. |
| Abstimmseite quer (844 × 390): „Danke“-Karte unten abgeschnitten (niedrig) | Nicht geändert: war mit dem Waschbär genauso, nicht durch diese Änderung verursacht. |

Sprechtexte nachgezählt (ohne Überschriften, Zeitangaben und [Regie]; Teil A hatte anders gezählt):
f08 Schritt 0–3 107 Wörter (Waschbär-Fassung 105), Zeitangaben 70 s; f09b 99 Wörter (vorher 98); f10 186 Wörter
≈ 98 s (vorher 182), Zeitangaben 78 s.

**Geprüft nach der Nacharbeit (20.10.2026):** `pruefen.mjs index.html --schritte --optional` (Editorial hell):
23 Folien, 80 Screenshots, 0 Fehler, 4 Warnungen Wortbudget wie vorher (f03 48, f04 46, f10 49, f11 55), keine
externen Anfragen. `--nur f08 --schritte --live-werte 3,1,7,0,2` in Editorial, Bento und Keynote, je hell und
dunkel: je 0 Fehler, 0 Warnungen, f08 39 Wörter, Attrappe beantwortet `[3,1,7,0,2]`; Schritt 1 „54 % sehen HOLY wie
wir: als Chamäleon“ mit umrahmter Zeile, Schritt 3 (Keynote dunkel) angesehen. `live-abstimmung-test.mjs`: 44 von 44.
Exporte nach Abschnitt 15: PDF 22 von 22 Seiten (ohne 01b; Seite 8 „HOLY wäre ein Chamäleon, kein Adler“, im
Text kein „Waschbär“), 23 Folienbilder 1920 × 1080 – gegenüber dem Stand vorher geändert nur `f08.png`; Übersicht
`--stand 20.10.2026` (0 externe Anfragen). `export/folien/f08.png`, `f10.png`, PDF-Seite 8 und die Übersicht
angesehen. Ausgaben: `_test/d18n-*`, `_test/export-druck`, `_test/export-folien`.

**Offen:** Elias prüft die Begründung, die Gründe auf der Karte (auch „wandelbar“ als Stichwort) und die neuen
Rückfragen (danach „Vorschlag“ in Kasten und Notizen ersetzen); Yannick entscheidet über das Feld Tonalität auf
Folie 10 (A/B oben); Lukas gleicht Analogie-Befragung und Notizen ab und prüft, ob das Aaker-Profil auf 08b passt;
Sprechtexte 08 (Schritt 2) und 10 in der Generalprobe stoppen; Zeichnung auf Beamer und Handy ansehen;
Skript-Aktualisierung (zurückgestellt); Runde umstellen wie geplant (LIESMICH 12). Nach Elias’ Prüfung bzw. einer
Änderung an Folie 08 oder 10 die Exporte erneut erzeugen.

## 19. Rätsel mit Logo: Folie 01 (Di, 20.10.2026)

Problem (Yannick, 20.10.2026): Auf Folie 01 hatte das Publikum keine Chance, die Marke zu erraten – Schritt 0
zeigte die Illustration ohne Logo 300 % vergrößert und 40 px unscharf (die Unschärfe wird mitgezoomt, wirkte also
etwa 120 px: nur Farbflecken), Schritt 1 löste sofort auf. **Entscheidung Yannick (wörtlich, KI-Nachweis Nr. 98):** „Groß das
Logo und daneben bei der Auflösung dann die illustration mit logo“. Die Regel „Illustrationen ohne Logo“ (Abschnitt 17) ist
damit für Folie 01 aufgehoben; für Folie 04 gilt sie weiter. Die Klärung der Logo-Nutzung mit dem Betreuer ist offen.

| Bereich | Änderung |
|---|---|
| `bilder/raetsel-holy-logo.svg` (neu, 128 KB) | Szene von `raetsel-holy.svg` (Generator-Skript vom 19.10., Etikett neu): auf dem Etikett groß und frontal das **Original-Logo** `holy-logo-oval.png` – **unverändert als base64-PNG (data-URI) eingebettet**, nur skaliert (330 × 190,8 Einheiten; Oval 299,5 × 158,3, Mitte x 1160 / y 592), über der Schattierung der Dose (nichts liegt darüber). Gelbes Leuchten und Strahlen hinter dem Oval, Funkelsterne daneben, darunter eine kleine Drachenfrucht im Aufkleber-Stil (ohne Heiligenschein, ohne Tier). Keine Filter, keine Masken, keine externen Verweise; data-URI byteweise gleich der PNG-Datei (geprüft). Warum eingebettet: Eine SVG, die als `<img>` oder CSS-Hintergrund geladen wird, lädt keine externen Dateien nach – ein Verweis auf die PNG-Datei bliebe leer. Kopfkommentar mit Herkunft, Entscheidung, Lage und Zoomwerten. Das Generator-Skript liegt nicht im Repository; die SVG-Datei ist die bearbeitbare Quelle. |
| `bilder/raetsel-holy.svg` | unverändert – Rückfall ohne Logo (dann `data-fokus="60.1% 60.7%"`, Stufen z. B. `300/40,170/14,100/0`). |
| `marke.js` | `raetselBild: 'bilder/raetsel-holy-logo.svg'`; Kommentar (Logo eingebettet, Zoomwerte, Rückfall, eigenes Foto); Kommentar zu `logoTitel` (Auflösung jetzt Schritt 2, dieselbe Datei auch im Rätselbild). |
| Folie 01 (`index.html`) | `data-stufen="440/11,220/8,100/0"` (in der Nacharbeit `220/10`) statt `"300/40,100/0"`, `data-fokus="63.5% 59.8%"` statt `"60.1% 60.7%"` (Begründung unten). **Drei Klicks:** Schritt 0 Rätsel, 1 Hinweis, 2 Auflösung, 3 Titel – Auflösung und Titel rückt `js/folien/01-einstieg.js` selbst nach. Kasten „FOLIE 01“, Kommentarblock (Ablauf, RÄTSELBILD, LOGO, SO ÄNDERN), Fußzeile „Illustration: eigene Gestaltung, KI-gestützt (Claude Code), 20.10.2026“ (zweizeilig wie bisher, gleich lang), Kommentar über der Fußzeile. Notizen: Moderation „Was sehen Sie?“ je Stufe und Auflösung (10 s + 7 s + 8 s + 20 s = 45 s, Sollzeit unverändert), `data-schritt` 0–3, Technik (drei Klicks, der vierte führt zu 02), Rückfragen („Ist das eine echte Dose?“, „Dürft ihr das Logo verwenden?“ – Klärung offen), Testhinweis. `data-alt` unverändert (verrät die Marke nicht). |
| `css/folien/01-einstieg.css` | (in der Nacharbeit wieder entfernt – Pille ganz aus, siehe unten) Pille „Hinweis x von n“ mit der Auflösung ausblenden (`.raetsel.ist-geloest`). Sie erscheint erst ab drei Stufen (bei zwei Stufen entfernte das Skript sie) und stand sonst in der Auflösung über dem Bild und im Schlussbild angeschnitten am rechten Rand der Bildtafel (sie wandert mit dem Bild). Kopfkommentar (Zustände). |
| `js/folien/01-einstieg.js` | Logo der Auflösung mit `decoding: 'sync'` statt `'async'`: Mit dem stark vergrößerten Rätselbild malte Chrome das erste Bild der Auflösung ohne Logo (in `pruefen.mjs` dreimal hintereinander; 400 ms später war es da) – betraf Screenshots und Folienbilder, die direkt einen Schritt zeigen. Die Datei hat 17 KB. Die übrigen Funktionen (Schritte koppeln, Bildtafel ausrichten) sind unverändert. |
| `QUELLEN.md` | Stand; §3: Ausnahme „Rätselbild Folie 01 mit Original-Logo“ (Entscheidung Yannick 20.10.2026, Regel „ohne Logo“ für Folie 01 aufgehoben, Klärung mit dem Betreuer offen, Kennzeichnung); §4: Zeile `raetsel-holy-logo.svg`, `raetsel-holy.svg` als Rückfall, `holy-logo-oval.png` auch eingebettet, Absatz zur Logo-Nutzung. |
| `LIESMICH.md` | Stand-Absatz, Abschnitt 8 (`logoTitel`, `raetselBild`), Checkliste 12 (erledigt: Rätsel mit Logo; offen: mit zwei Personen testen, Logo-Klärung jetzt auch für das Rätselbild, Exporte), Ordnertabelle. |
| `AUTOREN.md` | 6e (Fixpunkt-Formel, Pille), dieser Abschnitt. |

**Stufen und Fixpunkt (Begründung):** Bühne 1920 × 1080; das Motiv ragt 3 % über jeden Rand (2035,2 × 1144,8 px,
Bild mit Faktor 1,06). Die Oval-Mitte liegt bei Zoom 1 auf der Bühne bei x 1172 / y 595, das Oval misst 317 × 168 px.

- **440/11** (Schritt 0): Oval etwa 1400 × 740 px, Mitte bei x 960 / y 400 – füllt den größten Teil der Bühne über
  der Frage (Kicker ab y ≈ 745). Unschärfe mitgezoomt ≈ 48 px: gelbes Oval und heller Schriftzug klar, die Buchstaben
  nicht lesbar. Verglichen: 440/8 (Buchstabenformen zu deutlich), 440/10, 440/11, 440/12, 440/14 (Schriftzug nur
  noch heller Balken, die dunklen Lücken verschwinden).
- **220/8** (Schritt 1, Hinweis): Oval etwa 700 × 370 px, Mitte bei x 1100 / y 530; Dose, Deckel mit Löffel und
  Shaker erkennbar, Schrift fast lesbar (≈ 18 px). Verglichen: 220/4 (klar lesbar, kein Rätsel mehr), 220/5–8.
  **In der Nacharbeit 220/10** (von hinten war „HOLY“ bei 220/8 schon lesbar, siehe unten).
- **100/0**: ganzes Bild (Auflösung, groß das Logo links), danach Bildtafel.
- **Fixpunkt** = (Z · L − C) / (Z − 1) mit Z = 4,4, L = Oval-Mitte bei Zoom 1, C = Zielort: ((4,4 · 1172 − 960) / 3,4 |
  (4,4 · 595 − 400) / 3,4) = (1234 | 652) → `63.5% 59.8%` des Motivs. In der Bildtafel (Schritt 3) rückt
  `01-einstieg.js` den Fixpunkt waagerecht in die Tafelmitte: Oval-Mitte bei x ≈ 1441 (Tafelmitte 1504), Dose links,
  Shaker rechts – die Gruppe steht mittig.

**Geprüft (20.10.2026):** `pruefen.mjs index.html --nur f01 --schritte` in Editorial, Bento und Keynote, je hell
und dunkel: je 0 Fehler, 0 Warnungen, 3 Schritte, 20 Wörter, keine externen Anfragen. Kontaktbögen angesehen (s0–s3
in Editorial, Bento und Keynote hell; dunkel stichprobenweise je Thema), Bildtafel in Originalgröße: Logo auf der
Dose klar lesbar. Erkennbarkeit: Schritt 0 Form und Farben (gelbes Oval, heller Schriftzug mit dunklen Lücken),
Schrift nicht lesbar; Schritt 1 „HOLY“ fast lesbar; Auflösung klar. Druck (`--ohne-bilder --druck`, ganzes Deck): 22
von 22 Seiten, 0 Fehler, 4 Warnungen Wortbudget wie vorher (f03, f04, f10, f11); PDF-Seite 1 bei 72 und 200 dpi
angesehen – Logo in der Illustration scharf (der data-URI wirkt auch im PDF). Bildrate (grob wie in Abschnitt 17:
headless Chromium mit Software-Rendering, 2,3 s je Übergang, zwei Läufe): Median in allen Übergängen 16,7 ms je
Bild, 95. Perzentil 67–100 ms, längstes Bild 83–167 ms; die alte Fassung (`raetsel-holy.svg`, 300/40 → 100/0) im
selben Lauf: Median 16,7 ms, 95. Perzentil 67–83 ms, längstes Bild 233–250 ms – nicht schlechter als vorher. Auf dem
Vortragsrechner trotzdem ansehen. Ganzes Deck `--schritte --optional` (Editorial hell): 23 Folien, 81 Screenshots
(einer mehr als vorher – der Hinweis), 0 Fehler, 4 Warnungen Wortbudget wie vorher, keine externen Anfragen. Ohne
`--schritte` (so entstehen die Folienbilder des Exports, direkt im Endzustand) zeigt `f01.png` das Logo links und
das Logo auf der Dose. Ausgaben: `_test/d19-bau-*` (zuerst `d20-*` genannt; umbenannt, weil D20 ein anderer
Workflow ist – Zeitfenster der Abstimmung).

**Bewusst nicht geändert:** Folie 08/10 und die Live-Abstimmung (dort lief am 20.10. ein anderer Umbau),
`js/komponenten.js` und `css/komponenten.css` (Rätsel-Baustein), B7 (Zeile „Logos (Folien 01, 09b, 12) …
unverändert“ stimmt weiter), `../prompts.md`, `ki-nachweis/`. Exporte in `export/` nicht neu erzeugt (Folie 08 war
gleichzeitig in Arbeit) – `f01.png`, PDF-Seite 1 und die Übersicht zeigten noch das Bild ohne Logo; in der
Nacharbeit neu erzeugt (unten).

**Offen (Stand nach der Nacharbeit unten):** Rätsel mit zwei Personen testen und den Übergang auf dem
Vortragsrechner ansehen; Logo-Nutzung (jetzt auch in der Illustration) mit dem Betreuer klären, sonst Rückfall
`raetsel-holy.svg`; Motiv freigeben (Yannick).

### Nacharbeit nach zwei Prüfungen (Di, 20.10.2026)

Zwei prüfende KI-Agenten (Rätsel und Darstellung; Rechte, Kennzeichnung und Doku) haben den Bau geprüft, ohne etwas
zu ändern. Eingearbeitet:

| Befund | Änderung |
|---|---|
| **Hinweis zu leicht** (mittel): Bei 220/8 stand „HOLY“ verkleinert (960 × 540, 320 × 180 – Sicht aus der letzten Reihe) schon lesbar da; der Hinweis wurde faktisch zur Auflösung | `data-stufen="440/11,220/10,100/0"`. Verglichen: 220/8, 9, 10, 11, 12 in Originalgröße und verkleinert auf 960, 480 und 320 px Breite – 220/9 von hinten noch lesbar, 220/10 fast lesbar (nur mit Mühe), 220/11 kaum, 220/12 kaum noch Buchstabenformen. Gemessen an der Schrift im Bild hängt die Lesbarkeit nur an der Unschärfe-Zahl (sie wird mitgezoomt). Testanleitung (Kasten, Kommentarblock, Notizen, LIESMICH 12) um „Hinweis von hinten sofort lesbar → 220/12“ ergänzt; Test ausdrücklich am Beamer mit einer Person in der letzten Reihe. Abschnitt 6e: Stufen auch verkleinert beurteilen. |
| **Logo-Zeile hing nur an `logoTitel`** (mittel): Wäre `logoTitel` geleert worden (Rückfall bei Ablehnung des Titel-Logos), hätte das Logo auf der Dose ohne Quelle gestanden | `js/folien/01-einstieg.js`: Die Zeile „Logo © …“ bleibt sichtbar, solange der Dateiname des Rätselbilds „logo“ enthält (neue Funktion `raetselMitLogo`, dieselbe Regel wie bei „platzhalter“) – auch wenn `logoTitel` leer ist oder die Datei fehlt. Auf einer Kopie in vier Fällen geprüft: Standard (Zeile sichtbar), `logoTitel` leer (sichtbar), `logoTitel` leer und Rückfall-Rätselbild (verborgen), Logo-Datei fehlt (sichtbar, Konsolenhinweis wie bisher). Warnung in `marke.js` (logoTitel), LIESMICH 8 und im Kasten: Logos ganz weg = `logoTitel` **und** `raetselBild` umstellen. |
| **Rechte-Begründung passte nicht mehr** (mittel): „nur zur Kennzeichnung“, „kein nachgebautes Verpackungsdesign“, „ohne Bilder aus dem Netz“, Dose nicht als fiktiv gekennzeichnet | `QUELLEN.md` §3: Ausnahme für Folie 01 ausdrücklich auch für „Bild aus dem Netz“ (Logo-PNG), „Schriftzug“ und „Verpackung mit Markenzeichen“; Rätselbild als fiktive Dose beschrieben; Art der Nutzung offen benannt (Teil von Illustration und Rätsel, im Rätsel vergrößert, unscharf und bis zur Auflösung ohne Quelle). §4: Tabellenzeile und Absatz („als Dateien unverändert … auf Folie 01 außerdem als Teil einer Illustration“), Exporte seit 20.10. mit Logo. SVG-Kopfkommentar: Absatz „RECHTE UND EINORDNUNG“ statt „kein nachgebautes Verpackungsdesign“. Notiz-Antwort auf „Dürft ihr das Logo verwenden?“ ohne „nur zur Kennzeichnung“. LIESMICH 12: konkrete Frage an den Betreuer (Original-Logo auf erfundener Verpackung, im Rätsel unscharf, öffentlich in Repository und Exporten). **Titelfolie:** „· Dose fiktiv“ in der Einordnungszeile – in der Fußzeile ist kein Platz (mit „(Dose fiktiv)“ wäre die Bildzeile 820–858 px lang, Platz 672–712 px, und sie bricht nicht um); die Einordnung bleibt in allen Themen einzeilig (827–848 von 896–936 px, gemessen). |
| Pille „Hinweis 1 von 3“ (niedrig): lag in Schritt 0 auf dem Oval, zählte die Auflösung als dritten Hinweis mit und lud zum Abwarten ein | `data-fortschritt="aus"` am Rätsel (nur `index.html`, Folie 01). Die CSS-Regel aus dem Bau, die die Pille mit der Auflösung ausblendete, ist wieder entfernt. Notizen ohne Verweis auf die Pille. |
| Funkelstern in der Bildtafel halb angeschnitten (niedrig) | Stern nach links (Generator x 1650 → 1606). Dabei selbst gefunden: Im Druck (PDF; das Motiv hat dort keinen Überstand von 3 %) war ein zweiter Stern am rechten Rand halb angeschnitten (x 1690 → 1630). Beide jetzt am Bildschirm und im Druck ganz zu sehen. Die Drachenfrucht links in der Tafel bleibt angeschnitten (wie vorgeschlagen). |
| Logo doppelt eingebettet (niedrig) | nur noch `href` (kein `xlink:href`, kein `xmlns:xlink`); Datei 106 statt 128 KB. Der data-URI ist weiter byteweise gleich `holy-logo-oval.png`. |
| Kommentare (niedrig): alte Schrittnummern, „300 %“, nicht ausführbare Generator-Anleitung | `index.html` (Folie 01), `css/folien/01-einstieg.css`, `js/folien/01-einstieg.js`: Zustände (Rätsel, Auflösung, Titel) statt Nummern; `data-schritt` fest auf 2 und 3 (so setzt sie das Skript bei drei Stufen) mit Hinweis, dass das Skript sie setzt. SVG: „bis zu 440 %“; Logo austauschen nur noch von Hand (data-URI im Attribut `href`), das Generator-Skript liegt nicht im Repository. |
| Testordner `d20-*` (niedrig): Verwechslung mit Workflow D20 | umbenannt in `_test/d19-bau-*`, Nacharbeit unter `_test/d19-nach-*`; LIESMICH ohne Verweis auf Testordner. Die Abschnittsnummer 19 bleibt (bis jetzt kein weiterer Abschnitt 19; beim Zusammenführen fortlaufend nummerieren). |
| Verweis auf den KI-Nachweis (niedrig) | „KI-Nachweis Nr. 98“ in `QUELLEN.md` §3/§4, in diesem Abschnitt und im Kommentarblock von Folie 01. |
| Exporte veraltet (niedrig) | neu erzeugt (unten). |
| Bildrate (niedrig) | nichts geändert; erneut gemessen (unten). Auf dem Vortragsrechner prüfen (LIESMICH 12, mit Weg zur Bildratenanzeige in Chrome). |

**Bewusst nicht geändert:** B7 („Logos (Folien 01, 09b, 12): … unverändert, nur zur Kennzeichnung der Marke“) – für
Folie 01 nicht mehr ganz zutreffend, B7 lag aber außerhalb dieses Auftrags (nur Folie 01); beim Zusammenführen
anpassen, z. B. „… unverändert; auf 01 auch in der Illustration (fiktive Dose)“. Ebenso Folie 08/10, die
Live-Abstimmung, `js/komponenten.js`, `css/komponenten.css`, `../prompts.md` und `ki-nachweis/`.

**Geprüft (Nacharbeit, 20.10.2026):** `pruefen.mjs index.html --nur f01 --schritte` in Editorial, Bento und Keynote,
je hell und dunkel: je 0 Fehler, 0 Warnungen, 3 Schritte, 20 Wörter, keine externen Anfragen; Schlussbild aller sechs
Läufe angesehen (Einordnung einzeilig, Fußzeile zweizeilig, beide Sterne ganz). Ganzes Deck `--schritte --optional`:
23 Folien, 81 Screenshots, 0 Fehler, 4 Warnungen Wortbudget wie vorher (f03, f04, f10, f11). SVG: gültiges XML, ein
data-URI gleich der PNG-Datei (17 418 Bytes), keine Filter, Masken oder externen Verweise. Bildrate (headless
Chromium, Software-Rendering, zwei Läufe, wie oben): neu 0 → 1 Median 16,7 ms, 95. Perzentil 117 ms, längstes Bild
150–200 ms; 1 → 2 95. Perzentil 83 ms, längstes Bild 100–117 ms; alte Fassung 0 → 1 95. Perzentil 100–133 ms,
längstes Bild 267 ms – nicht schlechter. Exporte nach Abschnitt 15: PDF 22 von 22 Seiten (0 Fehler), 23 Folienbilder
(geändert nur `f01.png`, per Pixelvergleich), Übersicht `--stand 20.10.2026`; `f01.png` und PDF-Seite 1 (72 und
200 dpi) angesehen – Logo links und auf der Dose scharf, „Dose fiktiv“, Fußzeile zweizeilig. Stufenbilder:
`_test/d19-nach-stufen.png`, verkleinert `_test/d19-nach-stufen-verkleinert.png`.

**Offen:** Rätsel mit zwei Personen am Beamer testen (eine in der letzten Reihe; Stellschrauben 440/13, 220/12,
220/8) – verkleinert auf 320 px Breite zeigt auch Schritt 0 schon Buchstabenformen, wer HOLY kennt, kann also früh
raten (gewollt: das Publikum soll eine Chance haben); Übergang auf dem Vortragsrechner ansehen; Logo-Nutzung mit dem
Betreuer klären (konkrete Frage in LIESMICH 12); Motiv und „Dose fiktiv“ freigeben (Yannick); B7 beim
Zusammenführen.
