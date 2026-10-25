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
Bündel, Sollzeit, zugehörige CSS-/JS-Datei und was vor dem 27.10. noch zu ändern ist. Darunter folgt die
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
| f01 | `01-einstieg.html` | Einstieg: Welche Marke steckt dahinter? + Titel | 30 (bis 24.10.2026: 45) | A | – (`leer`) |
| f01b | `01b-wortwolke.html` | (optional) Live-Wortwolke „Was verbinden Sie mit [Marke]?“ | 45 | A | `leer`, `data-optional` |
| f02 | `02-vorgehen.html` | Ausgangslage & Vorgehen (Steuerrad als interaktive Agenda) | 45 (bis 24.10.2026: 60) | A | `hub` |
| f03 | `03-markenkompetenz.html` | Markenkern (bis 21.10.2026: Markenkompetenz; Dateiname bleibt) | 45 | A | `kompetenz` |
| f04 | `04-persona.html` | Brand Persona | 80 | A | `persona` |
| f05 | `05-limbic-map.html` | Limbic Map | 55 | A | `persona` |
| f05b | `05b-gruender` (nur CSS) | Gründerbefragung: Innensicht – der Gründer über HOLY (seit 24.10.2026, Abschnitt 25) | 35 | B (spricht Lukas; Auswertung A) | – (`leer`, `data-rubrik="Selbstbild"`) |
| f06 | `06-repertory-grid.html` | Repertory Grid → Markeneigenschaften (bis 21.10.2026: Markenattribute) | 80 | B | `attribute` |
| f07 | `07-laddering.html` | Laddering → Markennutzen | 90 | B | `nutzen` |
| f08 + f08b | `08-analogien` | Analogien + Live-Umfrage (70) · Markentonalität nach Aaker (50) | 70 + 50 | B | `tonalitaet` |
| f09 + f09b | `09-kommunikationsanalyse` | Kanäle & Bildwelt (60) · Markenbild: Corporate Design & Fit (55) | 60 + 55 | C | `bild` |
| f10 | `10-markensteuerrad.html` | Markensteuerrad (Synthese) | 75 | C (Inhalt: A, Synthese C2) | `hub` |
| f11 | `11-fazit.html` | Fazit & Empfehlungen | 75 | C | – (`leer`) |
| f12 | `12-fragen.html` | Danke & Fragen (Steuerrad als Sprungmenü) | 0 | alle | – (`leer`) |
| b1–b8 | `13-backup.html` | Backup: Methodik, Prompt-Log, Datenquellen Persona, RG-Rohdaten, Laddering-Matrix, KA-Raster, Quellenverzeichnis, Belege der Folien | 0 | je nach Inhalt | passend oder `leer`, `data-backup` |

Summe Hauptfolien ohne optionale Folie: 845 s = 14:05 (55 s Puffer bis 15:00 für die Live-Momente; seit 24.10.2026 mit f05b, dafür f01 und f02 gekürzt, Abschnitt 25 – vom 16.10. bis 24.10.2026 840 s = 14:00, Abschnitt 12; davor 885 s = 14:45); optionale Folie f01b 45 s, Backup 0 s.
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

**Absätze in `aside.notizen`** (seit 21.10.2026, VORTRAGSREIFE A11/A18): `data-schritt="n"` = Sprechtext dieses
Schritts (hervorgehoben, im Sprechzettel-Druck `?druck&notizen=sprechtext`); `class="gesprochen"` = gesprochen, aber
ohne Schritt (z. B. Folie 01b, Dank auf Folie 12); `class="sprechzettel"` = nicht gesprochen, aber auf dem
Sprechzettel nötig (Sprung-Bedienung auf Folie 12). Alle anderen Absätze (Stand, Belege, Rückfragen) zeigt das
Referentenfenster kleiner und grau, sobald die Folie Absätze mit `data-schritt` hat. Der Knopf „Rückfragen ↓“
springt zum ersten Absatz ohne `data-schritt`, der mit „Rückfragen“, „Mögliche Rückfragen“ oder „Wahrscheinliche
Rückfragen“ beginnt.

### Attribute der `<section>`

| Attribut | Pflicht | Bedeutung |
|---|---|---|
| `class="folie"` | ja | sonst ignoriert |
| `id` | ja | `f01`…`f12`, `f01b`, `f05b`, `f08b`, `f09b`, `b1`…`b8` – bestimmt die angezeigte Nummer (f06 → „06“, f05b → „05b“, b3 → „B3“) und die Adresse `#f06`; Sprung per Tastatur „5 b Enter“ |
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
| `<span data-datum></span>` / `data-datum="lang"` | 27.10.2026 bzw. „Dienstag, 27. Oktober 2026“ (aus `marke.js` → `datum`, Wochentag automatisch) |
| `data-veranstaltung`, `data-dozent`, `data-hochschule`, `data-praesentation`, `data-fallstudie` | Angaben aus marke.js |
| `<span data-unternehmen></span>` | Firma hinter der Marke (`marke.js → unternehmen`, Einordnungszeile auf Folie 01 und 12) |
| `<img data-marke-logo>` | Logo-Pfad aus marke.js (`logo`, Wortmarke, Folie 09b); das Logo der Titelfolie kommt aus `logoTitel` (setzt `js/folien/01-einstieg.js`) |
| `<img data-marke-logo="titel">` | Logo-Pfad aus marke.js → `logoTitel` (gelbes Oval, z. B. Folie 12 im Kopf neben dem Fazit); ohne Eintrag bleibt das Bild ausgeblendet (`hidden`). Logo-Quelle in die Fußzeile der Folie und in B7 |
| `<h2 class="titel" data-umfrage-frage="tier"></h2>` | Frage der Umfrage aus marke.js |
| `data-anrede-sie="…" data-anrede-ihr="…"` | Text passend zur Anrede |
| `<span class="beispiel">Beispieldaten</span>` | Pille; per `marke.js → beispieldatenHinweis: false` ausblendbar (erst, wenn keine erfundenen Werte mehr da sind!) |
| `<span class="beispiel kennzeichnung">KI-simuliert</span>` | Pflicht-Kennzeichnung in derselben Pillen-Optik („KI-simuliert“ auf 06, 07, 08b, 10, B4, B5; „Innensicht · Selbstauskunft (n = 1)“ auf 05b) – bleibt auch bei `beispieldatenHinweis: false` stehen (seit 24.10.2026, Abschnitt 25) |

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

### a) Markensteuerrad `.steuerrad` (Felder nach Esch, Namen und Leitfragen wie in der Vorlesung, Stenger, S. 88–91)

Felder: `kompetenz` (Zentrum, Name „Markenkern“), `nutzen` (oben links), `attribute` (unten links, Name
„Markeneigenschaften“), `tonalitaet` (oben rechts), `bild` (unten rechts), Rahmen `persona`. Die Schlüssel sind
technische Namen; Feldnamen und Leitfragen (Wir-Form) stehen seit 21.10.2026 wie in der Vorlesung in `FELDER`
(`js/komponenten.js`) – Abschnitt 21. Links hard facts (`--f-hart*`), rechts soft
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
- `data-logik="aus"` (gestrichelte Logikpfeile „Eigenschaften sind die Startpunkte“, „Tonalität ist der
  Prüfmaßstab“), `data-seiten="aus"` (Hard/Soft-Facts-Beschriftung; `data-seiten="kurz"` = nur
  „Hard Facts“/„Soft Facts“ ohne „rational“/„emotional“, so auf Folie 10), `data-breite`/`data-hoehe`
  (feste Größe), `data-kartenbreite`, `data-morph="aus"`.
- Methoden, Texte, Logik und Reihenfolge per JSON im Baustein überschreibbar:
```html
<div class="steuerrad" data-modus="hub" data-aufbau="schritte">
  <script type="application/json">{
    "methoden": [ { "feld": "kompetenz", "name": "Desk Research", "text": "Herkunft, Historie, Marktrolle" }, … ],
    "logik": [ { "von": "attribute", "nach": "nutzen", "text": "Eigenschaften sind die Startpunkte" } ],
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
  `beispielwerte`, `liveQuelle`, `runde`, `gueltigMinuten` (eigene Live-Abstimmung, unten). Einzelne Werte per
  JSON im Baustein überschreibbar (`<script type="application/json">`).
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
  Vortrag `'vortrag-2026-10-27'`). Mit `liveQuelle` zeigt der QR-Code auf `link` (`abstimmen.html?u=tier`; ohne
  `liveQuelle` gibt es für diese Adresse keinen QR-Code, ohne `kurzLink` keine Zeile darunter).
  Schnittstelle (nur GET, JSONP per `<script>` – unabhängig von CORS; vollständig im Kopf von
  `live-abstimmung/apps-script.gs`): Folie `?aktion=stand&umfrage=tier&runde=…&anzahl=5[&minuten=30]&callback=f` →
  `f({"ok":true,"werte":[…],"n":…,"zeit":"<ISO>"[,"minuten":30]})`; Abstimmseite `?aktion=stimme&…&option=0..4&geraet=<ID>`
  → `f({"ok":true})`; Fehler `f({"ok":false,"fehler":"…"})`.
  **Zeitfenster** (seit 20.10.2026, Abschnitt 20): `gueltigMinuten` = ganze Zahl 1–1440 (`30`; 0/leer = ohne,
  ungültig → Warnung in der Konsole und ohne). Die Folie hängt `minuten=<gueltigMinuten>` an jede Stand-Abfrage; der
  Server (ab `FASSUNG = '20.10.2026'`) bestimmt je Runde, Umfrage und Gerät zuerst die letzte Stimme und zählt sie
  nur, wenn sie höchstens `minuten` Minuten alt ist (Grenze einschließlich; Zeilen ohne gültige Zeit zählen dann
  nicht); ungültiges `minuten` → Fehler; ohne `minuten` wie bisher; in der Antwort `"minuten"` nur, wenn angewandt.
  Fehlt es (alte Fassung), merkt sich die Folie `fensterAn = false`: einmal Warnung in der Konsole, Tooltip der
  Pille „OHNE Zeitfenster …“ (auch im Referentenfenster, über `umfrage-live` → `fensterAn`); `true` → „zählt
  Stimmen der letzten 30 Min.“, `null` (noch keine Antwort) → „Zeitfenster 30 Min. angefragt (noch keine Antwort
  der Web-App)“. Gespeicherte Werte
  `umfrage:<id>` = `{ werte, beispiel, runde, zeit }` verfallen mit `liveQuelle` und `gueltigMinuten` beim Laden,
  wenn `Date.now() − zeit` größer als das Fenster ist (ohne `zeit`: verfallen) → **Nullen** (`u.beispiel = false`;
  seit der Nacharbeit 21.10.2026, Abschnitt 20 – vorher Beispielwerte); Beispielwerte nur bei anderer Runde, ohne
  Speicher oder wenn schon Beispielwerte gespeichert waren. `u.abgelaufen`
  verwirft dann auch eine gespeicherte Pause (`livePauseVerwerfen`, beim Aufbau und beim Betreten). Auf `melden`
  schickt das Vortragsfenster (wenn die Umfrage-Folie aktiv ist) zusätzlich `Deck.kanal('umfrage')` mit
  `{ id, werte, beispiel }`; das Referentenfenster übernimmt diese Werte direkt (`umfrageUebernehmen`) statt sie
  aus dem Speicher zu laden, wo sie verfallen sein können. Die
  Abstimmseite speichert `stimme:<id>:<runde>` = `{ option, name, zeit }` (`zeit` = Losschicken des Versuchs, der
  gezählt hat – vor dem Eingang beim Server); abgelaufen → Auswahl statt „Danke“ (beim Öffnen, per Zeitgeber, bei
  `visibilitychange`/`pageshow`), ohne „bisherige Wahl“.
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
  Gespeicherte Werte (`umfrage:<id>` = `{ werte, beispiel, runde, zeit }`) gelten mit `liveQuelle` nur in derselben
  Runde (und im Zeitfenster, oben: abgelaufen → Nullen) – sonst Beispielwerte (Probestimmen erscheinen im Vortrag nie, auch offline nicht). Der QR-Code zur
  eigenen Abstimmseite erscheint nur, wenn `liveQuelle` (auf `/exec`) und `runde` brauchbar sind
  (`liveFehlerVon`, sonst Warnung in der Konsole). Das Referentenfenster fragt nie selbst: Werte über
  Browser-Speicher und `Deck.kanal('umfrage')` (`{ id }`, als Antwort auf `melden` `{ id, werte, beispiel }`),
  Pille über `Deck.kanal('umfrage-live')` (`{ id, zustand, zeit, meldung, fensterAn }`, zurück `{ id, aktion:
  'pausieren' | 'fortsetzen' | 'melden' }`); dort steht der Zustand zusätzlich
  als Knopf `.r-live` unter der Kopfzeile „Aktuell“ (nur solange die Umfrage-Folie aktuell ist; Stil in
  `css/komponenten.css`). Mit `?druck`/`?aufnahme` wird nie abgefragt. `pruefen.mjs` lädt die Prüfseite bei
  gesetzter `liveQuelle` ohne `?aufnahme` (Klasse „aufnahme“ per Init-Skript) und beantwortet Anfragen an die
  `liveQuelle` (nur `aktion=stand`/`stimme`) mit einer eingebauten Attrappe – nichts geht ins Netz; Bericht
  „liveAnfragen“. Standard: Stand mit lauter Nullen (QR-Code, Pille „Live“, `n = 0`); `--live-offline`,
  `--live-werte 3,1,7,0,2`, `--live-aus` (Abschnitt 9). `aktion=stimme` aus der Präsentation ist ein Fehler,
  ebenso eine Stand-Abfrage ohne `minuten = gueltigMinuten` (seit 21.10.2026; Bericht „zeitfenster“,
  „standOhnePassendeMinuten“).
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
  **Server** (`apps-script.gs`, Fassung `FASSUNG = '20.10.2026'` – Zeitfenster; Schreibstelle seit 19.10.2026): Jede Stimme reserviert unter
  `LockService.getScriptLock()` nur eine Zeilennummer (Skript-Eigenschaft `naechsteZeile`: lesen und erhöhen in
  derselben Sperre, höchstens 8 s warten, `SPERRE_WARTEN_MS`) und schreibt danach ohne Sperre in ihre Zeile
  (nur wenn leer; `{"ok":true}` erst nach `flush`; Zeit beim Eingang). `einrichten()` hält 5000 formatierte
  Zeilen bereit und setzt den Zähler nie zurück. `?aktion=fassung` (unbekannte Aktion) nennt die Fassung.
  **Prüfen** (`werkzeuge/live-abstimmung-test.mjs`): 53 Prüfungen (davon 9 zum Zeitfenster, mit virtueller Uhr
  `s.uhr`); `--mutationen` (26 kaputte Kopien);
  `--server PORT` (virtuelle Uhr vorstellen: `GET /uhr?vor=MINUTEN`) mit `--verzoegerung MS`, `--stoerung A`, `--abbruch A`, `--gleichzeitig N` (prüfen die
  Wiederholung, nicht die Belastbarkeit – ein Handy scheitert dann zufällig mit A³) und `--sperre MS`
  (Belastbarkeit: jede Stimme hält die Sperre so lange, Warteschlange mit `SPERRE_WARTEN_MS`).
  Lasttest gegen die echte Web-App: `node werkzeuge/live-abstimmung-test.mjs --lasttest <URL>` (40 Handys
  gleichzeitig in eine eigene Runde; `--anzahl 20` für unsere Gruppe, `--verteilt 10`, `--ohne-folie`): Handy-Regel wie
  `js/abstimmen.js`, eine mitlesende „Folie“ wie Abschnitt 3a (mit `minuten` aus `marke.js`), vorher `?aktion=fassung`; Urteil BESTANDEN (alle
  gezählt, keiner gescheitert, „Danke“ ≤ 15 s), GEZÄHLT, ABER ZU LANGSAM oder NICHT BESTANDEN; Exit-Code 1 außerdem
  bei „FASSUNG VERALTET“ (nicht die `FASSUNG` aus `apps-script.gs`) und „ZEITFENSTER FEHLT/FALSCH/UNKLAR/UNGEPRÜFT“
  – dann beginnt die Urteilszeile mit „NICHT BESTANDEN wegen …“. Gegenprobe (seit 21.10.2026): mindestens 90 s
  (`GEGENPROBE_MS`) nach der letzten Stimme `minuten=1` → n muss 0 sein (sonst steht die Zeit in der Tabelle zu
  spät); gegen die Attrappe stellt `/uhr?vor=2` die Uhr vor, statt zu warten.
  **Zeitfenster im Browser** (`werkzeuge/zeitfenster-e2e.mjs`, seit 21.10.2026): Handy und Folie Ende zu Ende mit
  Attrappen auf localhost (echtes Skript, virtuelle Uhr) und Playwright-Uhr – 10 Szenarien (`--nur folie,handys,…`),
  `--mutationen` mit 12 kaputten Kopien von `js/komponenten.js` und `js/abstimmen.js` (nur im Browser ersetzt).
  Die Mutanten suchen ihre Stellen per Text – bei Änderungen an diesen Zeilen die Liste `MUTANTEN` anpassen.

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
- `Deck.springe(folie, schritt)` – Sprung, den eine Person auf der Folie auslöst (Sprungliste, Steuerrad-Felder,
  Verweise). Läuft wie Ziffern + Enter über das Vortragsfenster, wirkt also auch aus dem Referentenfenster auf den
  Beamer – dort aber erst, wenn Folie 12 oder eine Backup-Folie erreicht war (bis wieder Folie 01 kommt); vorher
  nur ein Hinweis, Rückgabe `false` (seit 21.10.2026, A7 und Nacharbeit). `Deck.gehe` wirkt nur im eigenen Fenster.
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

`pruefen.mjs` endet mit Exit-Code 0 (keine Fehler), 1 (Fehler) oder 2 (Abbruch). Seit 21.10.2026 zählt die
Zusammenfassung abgeblendete Zwischenschritte getrennt (`warnungenAbgeblendet`, gewollte Fokusführung) von den
übrigen Warnungen (`warnungenOhneAbgeblendet`; Kurzform `warnungenKurz`, z. B. „5 + 36 gewollt abgeblendet“) – neue
Wortbudget- oder Schriftwarnungen fallen so auf.

**Referentenansicht mit zwei Fenstern** (seit 21.10.2026; nach Änderungen an `js/deck.js`, `js/komponenten.js`,
`js/folien/11-fazit.js`, `js/folien/12-fragen.js`, `css/deck.css` und vor der Generalprobe):

```bash
node werkzeuge/referent-test.mjs index.html --ausgabe _test/referent
#    Folienfenster + Referentenfenster (file://, ohne Netz): Sprünge ab Folie 12 und Sperre davor,
#    Schwarzbild, Uhr nach Neuladen, Start-Knopf, Rückfragen-Knopf, niedrige Fenster, zweites
#    Folienfenster, Hinweise nur im Referentenfenster. Exit-Code 0 = alle Prüfungen bestanden.
```

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
| Gründerbefragung (19.10.2026; `../gruenderbefragung.md`, Workflow D14 und Nacharbeit nach zwei Prüfungen) | Antworten von Gründer Mathias Horsch, immer als Selbstauskunft „Horsch 2026 (GB)“. **Sichtbar im Backup** (und seit 19.10.2026 als Zusatz unter dem Claim auf 03, siehe unten; B7 seit 21.10.2026 „GB (03, B1, B3)“ – Nachtrag VORTRAGSREIFE A1): B1 Spalte 03 (Punkt „Gründerbefragung“, Listenabstand 12 px), B3 „Wer sagt was über wen“ (Horsch 2023 [4], Jost 2024 [24], Horsch 2026 GB; 13 Zeilen, Innenabstand 4 px), B7 Eintrag „GB“ (Spalten 6/6, Legende „extern … , GB“, feste Leerzeichen gegen Umbrüche). **Hauptfolien 02–05 und 10:** nur Notizen und Kästen; der Zusatz unter dem Claim auf 03 („auch laut Gründer Mathias Horsch (Befragung 10/2026)“) wurde nach einem Prüferbefund entfernt und auf Wunsch von Yannick am 19.10.2026 wieder eingesetzt (Daten: claim.stand; Bestätigung, kein unabhängiger Beleg). f04: Blockquellen „Jost …“ statt „Gründer …“ (sichtbar). f05: Selbstbild nur „Spaß und Zusammengehörigkeit“ („Individualität“ erst nach Lukas’ Codierung). „95 %“ nur in den Notizen von 03 mit Zusatz. Folien 06–09b und 11: Inhalte und Daten unverändert, nur Kasten 11. `QUELLEN.md` §5 (Ausnahme GB). Danach `pruefen.mjs --schritte --optional` in Editorial, Bento, Keynote und dunkel: 0 Fehler (4 Warnungen Wortbudget wie vorher); Exporte neu erzeugt (PDF 22 Seiten, 23 Bilder 1920 × 1080, Übersicht Stand 19.10.2026). Offen: Freigabe durch Yannick, Punkte für Lukas (LIESMICH 12). |

**Geprüft und bewusst nicht geändert:** Fußzeilen der Backup-Folien B2/B7 reichen etwas unter die Bedienleiste
(nur bei Mausbewegung im unteren Rand sichtbar; Backup wird in der Fragerunde gezeigt) – wie bisher. Die Wortmarke
auf 09b (389 px) reicht für 1080p; nur für Bildschirme mit doppelter Pixeldichte eine größere Datei einsetzen
(LIESMICH 12). Die Grafiken in `../grafiken/` bleiben unverändert (Entscheidung der Gruppe, LIESMICH 12).

### Exporte erzeugen (seit 19.10.2026)

Im Ordner `praesentation/`, mit `PLAYWRIGHT_CORE` (und ggf. `CHROME_PFAD`) wie in Abschnitt 9:

```bash
# 1. PDF für Plan B – ohne die optionale Folie 01b, eine Seite je Folie (erwartet: 23 seit 24.10.2026 mit f05b;
#    vorher 22 – pruefen.mjs rechnet die Erwartung selbst aus Deck.folien(), keine feste Zahl im Werkzeug)
node werkzeuge/pruefen.mjs index.html --ausgabe _test/export-druck --ohne-bilder --druck export/praesentation.pdf
#    bericht.json → "druck": { "seiten": 23, "erwartet": 23 }, "fehler": []

# 2. Folienbilder im Endzustand (1920 × 1080, inkl. 01b; seit 24.10.2026 24 Bilder) – pruefen.mjs ohne --schritte
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
  Kurzprüfung) – am 20.10.2026 zurückgestellt (Yannick: erst Folie 08 überarbeiten, Abschnitt 18); **mit dem
  Zeitfenster (Abschnitt 20) wieder nötig, jetzt mit der Fassung 20.10.2026.** Vorher müssen die Änderungen auf GitHub sein (Commit und Push), sonst zeigt der Raw-Link die alte
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

> **Nachtrag 22.10.2026:** Die Begründung stammt seit Do, 22.10.2026 aus Elias Knaubers eigener Ausarbeitung
> „Analogien“ (Abschnitt 23, `../analogien.md`). Die unten beschriebene KI-gestützte Begründung (31 Energy-Sorten,
> „Wacken, CSD, Simpsons“, „Gefährlich geil!“, „im Ton immer frech“) und die Brücke „Raptor als fester Anker“ zu
> Empfehlung 3 sind überholt; sie stehen nur noch als gekennzeichnete Ergänzung in den Notizen von Folie 08.

Entscheidung Yannick (KI-Nachweis 94/95): Elias Knauber (Bündel C) ordnet HOLY in seiner Ausarbeitung eher als
**Chamäleon** ein. Das Tier unserer Analyse wechselt deshalb von Waschbär zu Chamäleon – auf Folie 08, in der
Live-Abstimmung und in den Ausarbeitungen. Nur diese inhaltliche Änderung, kein weiteres Redesign. Die
Aktualisierung des Apps Script bei Google ist zurückgestellt (seit Abschnitt 20 wieder nötig); die Live-Abstimmung bleibt technisch unverändert
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
(Nacharbeit unten). **Nachtrag 21.10.2026:** Seit dem Abgleich mit der Vorlesung heißt die Mitte des Rads
„Markenkern“ (Herausforderer mit Softdrinks zum Selbermixen) und „Genuss mit gutem Gewissen“ heißt Positionierung
(Band über dem Rad) – beide bleiben vom Chamäleon unberührt. **Entschieden (Yannick, 21.10.2026):** Das Chamäleon
steht als „wandelbar“ im Feld Tonalität („frecher Kumpel · wandelbar · Spaß“), wortgleich auf 08b (Abschnitt 21).

| Bereich | Änderung |
|---|---|
| Folie 08 (`index.html`) | Titel ab Schritt 2 „HOLY wäre ein Chamäleon, kein Adler“. Daten: `marke.tier.name` „Chamäleon“, Gründe wandelbar („31 Energy-Sorten“), vielseitig („Wacken, CSD, Simpsons“), frech („Gefährlich geil!“) – kurz wegen des Wortbudgets (39 Wörter; mit längeren Belegen waren es 47); Stichworte höchstens ca. 10 Zeichen (Spalte 176 px, „anpassungsfähig“ wäre zu breit); `hinweis` mit Kennzeichnung. Fußzeile „Tier: eigene Einordnung (H)“ – ohne Tiernamen, weil die Fußzeile schon während der Abstimmung zu sehen ist – und „Belege Kap. 3.1, 4.1, 6.2, 6.3, 6.6 ✔“. Notizen: Auflösung, „Warum Chamäleon?“, Kontrast, Bedienung, neue Rückfragen (ohne festen Kern? Tarnung? warum nicht mehr Waschbär?; nach der Nacharbeit dazu: Viele Sorten – schon Wandel? Trotzdem der Raptor? Aus eurer Befragung?), neuer Absatz „Chamäleon – Einordnung und Begründung“ (Belege, Gegenargumente, Verhältnis zu 8b/10, früherer Stand). Kasten „FOLIE 08“ und Kommentare (u. a. der falsche Verweis „Folie 10 → tonalitaet → Waschbär“: das Tier stand nie im Rad). |
| Folie 08b | Kasten und eine Rückfrage („Wo ist das Chamäleon im Profil?“). Profil, Merkmale, Titel und Daten unverändert. |
| Folie 09b, 11, 12 | Notizen: „gelebt wird das freche Chamäleon“ (09b), Brücke „Raptor als fester Anker“ zu Empfehlung 3 mit Kennzeichnung (11), Rückfrage „Warum ein Chamäleon?“ (12). |
| Folie 10 | Feld Tonalität geprüft und unverändert („frecher Kumpel · Spaß · Zugehörigkeit“, wortgleich mit 8b) – **Abweichung vom Auftrag, der „Feld Tonalität“ nannte; Entscheidung Yannick offen** (Kasten „FOLIE 10“, LIESMICH 12). **Entschieden (Yannick, 21.10.2026): Variante B – „frecher Kumpel · wandelbar · Spaß“, Abschnitt 21.** Sprechtext Schritt 5 „…, wandelbar wie ein Chamäleon – …“ (7 s; Schritt 0–8 jetzt ca. 186 Wörter ≈ 98 s, Zeitangaben zusammen 78 s); Belegabsatz und Kasten. |
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
| Wort „Kern“ dreifach (frech im Kern / ohne festen Kern / Markenkern) – Eigentor in der Fragerunde (mittel) | Antwort beginnt mit der Unterscheidung: „Nein. Der Markenkern steht: Genuss mit gutem Gewissen (Folie 10). Und der Ton bleibt frech … Was wechselt, ist der Auftritt.“ (Seit 21.10.2026: „Nein. Markenkern und Positionierung stehen (Folie 10): in der Mitte des Steuerrads der Herausforderer mit Softdrinks zum Selbermixen, darüber die Positionierung ‚Genuss mit gutem Gewissen‘ …“ – Abschnitt 21.) „frech im Kern“ ersetzt; Belegabsatz 10 ohne „ohne festen Kern“; Kasten 08: „Kern“ nur für den Markenkern. |
| Folie 10, Feld Tonalität: Auftrag nannte das Feld, es bleibt unverändert (mittel, zwei Prüfungen) | **Nicht geändert, Yannick entscheidet** (Kasten „FOLIE 10“, LIESMICH 12) – **entschieden am 21.10.2026: B, umgesetzt in Abschnitt 21**: A) so lassen, Chamäleon nur im Sprechtext Schritt 5 (bei knapper Zeit die 4 Wörter streichen); B) ins Rad, z. B. „frecher Kumpel · wandelbar · Spaß“, dann zuerst 8b „Ins Steuerrad“ wortgleich ändern (Bündel B). Gründe: Das Tier stand nie im Rad (es gab dort nichts zu ersetzen); die Regel „wortgleich mit 8b“ und Lukas’ Bündel wären betroffen; Folie 10 hat schon ca. 49 Wörter; Yannicks Wunsch nennt Abstimmung, Folie und Analyse. |
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
Folie 10 (A/B oben; **entschieden 21.10.2026: B**, Abschnitt 21); Lukas gleicht Analogie-Befragung und Notizen ab und prüft, ob das Aaker-Profil auf 08b passt;
Sprechtexte 08 (Schritt 2) und 10 in der Generalprobe stoppen; Zeichnung auf Beamer und Handy ansehen;
Skript-Aktualisierung (zurückgestellt; seit Abschnitt 20 wieder nötig); Runde umstellen wie geplant (LIESMICH 12). Nach Elias’ Prüfung bzw. einer
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

## 20. Zeitfenster der Live-Abstimmung: Stimmen zählen 30 Minuten (Di, 20.10.2026)

Auftrag Yannick (20.10.2026, wörtlich): „Die Abstimmung sollte reseted werden nach einer gewissen Zeit damit bei der
Präsentation keine alten Stimmen dastehen.“ **Entscheidung:** Stimmen zählen auf Folie 08 nur **30 Minuten**
(`marke.js → umfragen.tier.gueltigMinuten: 30`). Umgesetzt als abwärtsverträgliche Erweiterung der Schnittstelle:
Gelöscht wird nichts, die Zeilen bleiben in der Tabelle; die Runde (`'probe'` / `'vortrag-2026-10-27'`) trennt
Probe und Vortrag weiter ganz. `liveQuelle` und `runde` sind unverändert, ebenso Folie 01, die Bilder und alle
sichtbaren Folieninhalte. Das Zeitfenster wirkt erst, wenn bei Google die **Skript-Fassung 20.10.2026** läuft
(ANLEITUNG, „Skript aktualisieren“) – bis dahin zählt die Web-App ohne Zeitgrenze.

| Bereich | Änderung |
|---|---|
| `live-abstimmung/apps-script.gs` (`FASSUNG = '20.10.2026'`) | `aktion=stand` mit freiwilligem `minuten` (ganze Zahl 1–1440; `MUSTER_MINUTEN`, `HOECHSTENS_MINUTEN`, `minutenWert_`). Zählregel: je Runde, Umfrage und Gerät **zuerst die letzte Stimme**, **dann** das Fenster (`grenze = jetzt − minuten · 60 000`, Grenze eingeschlossen: genau `minuten` alt zählt, 1 ms älter nicht); Zeilen ohne gültige Zeit (von Hand) zählen mit `minuten` nicht. Antwort mit `"minuten"` nur, wenn das Fenster angewandt wurde. Ungültig (leer, 0, 1441, 30.5, „ 30“ …) → `{"ok":false,"fehler":"Ungültige Minuten (Zeitfenster): …"}`; ohne `minuten` wie bisher; bei `aktion=stimme` ignoriert. Kopfkommentar: Schnittstelle, Eingabeprüfung, neuer Abschnitt ZEITFENSTER (Regel, Begründung der Reihenfolge, Uhr und Zeitzone). Der Schreibweg der Fassung 19.10.2026 (Zeile reservieren) ist unverändert. |
| `marke.js` | `gueltigMinuten: 30` mit Kommentar (Bedeutung, 0/leer = ohne Zeitgrenze, Runde trennt weiter, wirkt erst mit der neuen Fassung). |
| `js/komponenten.js` (3a) | Folie 08 hängt `minuten=<gueltigMinuten>` an jede Stand-Abfrage (`umfrageGueltigMinuten`: ganze Zahl 1–1440, sonst einmal Warnung und ohne Grenze). Antwort ohne `"minuten"` → `fensterAn = false`: einmal Warnung in der Konsole, Tooltip der Pille „OHNE Zeitfenster …“ (sonst „zählt Stimmen der letzten 30 Min.“), auch im Referentenfenster (`umfrage-live` → `fensterAn`). Browser-Speicher `umfrage:<id>` mit `zeit`; mit `liveQuelle` verfallen Werte älter als `gueltigMinuten` (oder ohne `zeit`) beim Laden → Beispielwerte mit Pille, wie bei anderer Runde (in der Nacharbeit am 21.10. geändert: Nullen, unten); eine gespeicherte Pause verfällt mit ihren Handwerten (`u.abgelaufen`, `livePauseVerwerfen`). Ohne `liveQuelle` (Weg B/C) unverändert. |
| `js/abstimmen.js`, `abstimmen.html` (Kommentar) | Die Abstimmseite speichert mit der Wahl die Zeit, zu der der Versuch losgeschickt wurde, der gezählt hat (`stimme:<id>:<runde>` = `{ option, name, zeit }`). Älter als `gueltigMinuten` (oder ohne `zeit`) → abgelaufen: beim Öffnen gleich die Auswahl statt „Danke“, ohne „bisherige Wahl“; steht „Danke“ schon da, wechselt die Seite beim Ablauf zur Auswahl (Zeitgeber, dazu `visibilitychange` und `pageshow`). Eine laufende neue Wahl oder eine Fehlerkarte bleibt stehen. In der Prüfung ergänzt: Ein stilles Nachsenden (NACHZÜGLER) hält die Auswahl nicht auf, und ein erfolgreiches stilles Nachsenden derselben Wahl schiebt `zeit` nach – sonst hätte „Danke“ in diesem Randfall stehen bleiben können. |
| `werkzeuge/live-abstimmung-test.mjs` | Virtuelle Uhr der Attrappe (`s.uhr.anhalten/vorstellen`; kein Test wartet 30 Minuten), 9 neue Prüfungen (jetzt 53): alte Stimme fällt raus, Grenze (30 und 1 Minute, ± 1 ms), Umentscheiden kurz vor und nach Ablauf, ungültige `minuten`, ohne `minuten` unverändert, Zeilen ohne Zeit, Hörsaal mit Generalprobe in derselben Runde, Fassung ≥ 20.10.2026, Gegenprobe zur Reihenfolge (unten). 10 neue Mutanten (jetzt 26), u. a. „minuten ignoriert“, „Grenze nie angewandt“, „Sekunden statt Minuten“, „Grenze ausgeschlossen“, „Fenster auch ohne minuten“, „Zeit der ersten statt der letzten Stimme“, „Antwort ohne minuten“, „Fassung nicht erhöht“. `--server`: `GET /uhr?vor=MINUTEN` stellt die Uhr der Attrappe vor (`/uhr` zeigt sie). Lasttest: Die mitlesende „Folie“ und eine Schlussabfrage senden `minuten` aus `marke.js` (`folieMinuten`); Exit-Code 1 auch bei „FASSUNG VERALTET“ (nicht die `FASSUNG` aus `apps-script.gs`) und „ZEITFENSTER FEHLT/FALSCH“. |
| `werkzeuge/pruefen.mjs` | Die eingebaute Attrappe prüft `minuten` wie der Server und nennt es in der Antwort; am Ergebnis ändert es nichts (die Stimmen eines Prüflaufs sind nie so alt). |
| Doku | ANLEITUNG: Stand, Hinweis oben („jetzt nötig“), „Worum es geht“, Test-Adressen, Lasttest-Ausgabe, „Skript aktualisieren“ (zwei Gründe, Strg+F `ZEITFENSTER (Fassung vom 20.10.2026)`, Kurzprüfung → „(Skript-Fassung 20.10.2026)“, Stand mit `&minuten=30`, Teststimme mit Uhrzeit, freiwillig `&minuten=1`), „Vor dem Vortrag“ (Teststimme zählt noch 30 Minuten), „Im Vortrag“, „Nach dem Vortrag“ (gleich sichern; Stand ohne `minuten` zählt weiter), „Wichtig zu wissen“, Fehlerbehebung (vier Zeilen), lokal testen (`/uhr`). LIESMICH: Stand, Abschnitt 6 (Zeitfenster, Tabelle `gueltigMinuten`, Testen, Rückfall-Lesezeichen mit `&minuten=30`), Checkliste 12 (Skript aktualisieren wieder aktiv, Gründe Zeitfenster und Lastfestigkeit; Rückstellungsvermerk ersetzt; nach dem Vortrag gleich sichern), Tabelle 13. AUTOREN: 6c, Offen in 16, Verweise in 18, dieser Abschnitt. |

**Zählregel – warum zuerst die letzte Stimme:** Die Regel heißt „die aktuelle Stimme eines Handys zählt, solange
sie frisch ist“. Wer sich kurz vor Ablauf umentscheidet, zählt mit der neuen Wahl weiter; ist auch die letzte
Stimme zu alt, zählt das Handy gar nicht – eine ältere Stimme desselben Handys rückt nie nach. Die umgekehrte
Reihenfolge (erst alte Zeilen aussortieren, dann die letzte Stimme) ergibt dasselbe: Das Fenster enthält alle
späteren Zeiten, und die letzte Stimme hat die späteste Zeit. Liegt sie im Fenster, bleibt sie auch nach dem
Aussortieren die letzte; liegt sie davor, liegen alle Stimmen des Handys davor. Der vorgeschlagene Mutant „Fenster
vor statt nach der Letzte-Stimme-Regel“ ist deshalb gleichwertig – kein Test kann ihn finden. Statt in der
Mutantenliste steht er als Gegenprobe in den Prüfungen (`fensterVorDerRegel`, 150 zufällige Verläufe mit
festem Startwert: dieselben Zahlen; mindestens 50 Abfragen, in denen das Fenster wirklich Stimmen aussortiert).

**Uhr:** Der Server vergleicht die Spalte Zeit (beim Eingang `new Date()`) mit `new Date()` bei der Abfrage –
beides seine eigene Uhr; die Uhr der Handys und des Präsentationsrechners spielt dafür keine Rolle. Das Handy misst
nur den Abstand zwischen Losschicken und jetzt; da das Losschicken vor dem Eingang beim Server liegt, hält das
Handy eine Stimme nie länger für gültig als der Server. Dass ein Datum in der Tabelle unverändert zurückkommt
(Zeitzone der Tabelle), ist Modellwissen – Kurzprüfung und Lasttest prüfen es in der echten Tabelle, seit der
Nacharbeit (21.10.) in **beiden** Richtungen: Steht die Zeit zu früh, fällt eine frische Stimme bei `&minuten=30`
heraus („ZEITFENSTER FALSCH (Zeit zu früh)“); steht sie zu spät, zählt sie nach 2 Minuten (Kurzprüfung) bzw. 90
Sekunden (Lasttest, Gegenprobe) bei `&minuten=1` noch („… (Zeit zu spät)“). Vorher erkannte nur der freiwillige
Schritt mit `&minuten=1` die zweite Richtung – gerade die, in der alte Stimmen länger stehen bleiben.

**Grenzen:** Gespeicherte Werte der Folie tragen die Zeit ihrer letzten Änderung, nicht die Zeit jeder Stimme –
ohne Verbindung zeigt die Folie sie bis 30 Minuten nach der letzten Änderung, auch wenn einzelne Stimmen darin
älter sind (genau zählt nur der Server). Mit `liveQuelle` verfallen auch Handwerte (Plan C) nach 30 Minuten –
wer in der Fragerunde später als 30 Minuten zu Folie 08 zurückspringt, sieht dann Nullen bzw. den Stand der Web-App
(seit der Nacharbeit; ohne `liveQuelle` bleiben die Werte). Handys und Folie lesen `gueltigMinuten` aus
verschiedenen Kopien von `marke.js` (GitHub Pages bzw. Präsentationsrechner): Weichen sie ab (z. B. vor dem Push),
zeigt ein Handy „Danke“, obwohl Folie 08 die Stimme nicht mehr zählt, oder umgekehrt – deshalb steht
`gueltigMinuten` seit dem 21.10. in der Kontrolle „Vor dem Vortrag“ (ANLEITUNG) und im Kommentar in `marke.js`. Läuft bei Google noch die alte Fassung, rechnet das Handy trotzdem mit
30 Minuten und zeigt danach wieder die Tiere, obwohl die Stimme dort weiter zählt – eine erneute Stimme ersetzt
sie nur (dieselbe Geräte-ID), harmlos. Wird die Uhr eines Handys zwischen Abstimmen und Neuladen verstellt, stimmt
dort der Abstand nicht; in einem Hintergrund-Tab kann der Zeitgeber später auslösen (beim Zurückkehren prüft die
Seite neu).

**Geprüft beim Bau (Mi, 21.10.2026, alles lokal – keine Anfrage an die echte Web-App; Stand vor der Nacharbeit unten):**
`node werkzeuge/live-abstimmung-test.mjs`: 53 von 53 Prüfungen bestanden. `--mutationen`: alle 26 kaputten Kopien
erkannt. **Ende-zu-Ende** im Browser (Chromium, Playwright; Hilfsskript außerhalb des Repositorys): Folie 08 über
`file://` mit `?quelle=` an der Attrappe (`--server`, echtes Skript), drei Handys als eigene Browser-Kontexte mit
vorstellbarer Browser-Uhr, Attrappen-Uhr über `/uhr?vor=`. Ergebnis 43 von 43, keine externe Anfrage: jede
Stand-Abfrage trägt `minuten=30`; drei Stimmen, Umentscheiden (n bleibt 3); nach 20 Minuten zählen alle, Handy 3
entscheidet sich um; nach 31 Minuten verschwinden die Stimmen von Handy 1 und 2 von der Folie, Handy 3 zählt mit der
neuen Wahl, Handy 1 und 2 zeigen wieder die Tiere (ohne „bisherige Wahl“, Speicher geleert), Handy 3 weiter
„Danke“; neu abstimmen zählt einmal; nach 56 und 62 Minuten fallen auch diese heraus (n = 0), der Stand ohne
`minuten` zählt weiter alle drei Handys; Neuladen des Handys vor Ablauf → „Danke“, nach Ablauf → gleich die Tiere.
Browser-Speicher der Folie: frisch und Web-App nicht erreichbar → gespeicherte Werte; 31 Minuten später →
Beispielwerte mit Pille (seit der Nacharbeit: Nullen); ohne `liveQuelle` → die alten Werte bleiben. Pause: übersteht F5 wie bisher, nach 31
Minuten verfällt sie mit den Handwerten, die Folie fragt wieder. Alte Fassung (19.10.2026, aus Git) als zweite
Attrappe: 31 Minuten alte Stimme zählt weiter, Tooltip „OHNE Zeitfenster …“, Warnung genau einmal. Bilder:
`_test/d20-e2e/`. `pruefen.mjs index.html --schritte --optional`: 23 Folien, 81 Screenshots, 0 Fehler, 4
Warnungen Wortbudget wie vorher (f03, f04, f10, f11), 0 externe Anfragen, 1 Live-Anfrage (Attrappe, mit
`minuten=30`, Pille „Live“) – `_test/d20-pruefen/`; dazu `--nur f08 --schritte --live-werte 3,1,7,0,2`: 0 Fehler,
0 Warnungen, n = 13 (`_test/d20-pruefen-f08/`). Lasttest gegen die Attrappe (`--server 8795 --sperre 100`,
`--lasttest … --anzahl 20`): Fassung 20.10.2026 erkannt, „Folie“ mit `minuten=30`, BESTANDEN, Stand ohne und mit
`minuten=30` je n = 20 (`_test/d20-lasttest-attrappe.log`). Exporte nicht neu erzeugt (sichtbar ändert sich nichts).

### Nacharbeit nach der Prüfung (Mi, 21.10.2026)

Eine Prüfung des Baus fand drei Befunde „mittel“ und sieben „niedrig“ (keinen „hoch“). Umgesetzt:

| Befund | Änderung |
|---|---|
| mittel: Abgelaufener Speicher derselben Runde zeigte **Beispielwerte** (z. B. n = 64, „Beispieldaten“). Die Kontrolle „30 Minuten vorher“ (LIESMICH 12) speichert n = 0 – im Vortrag ist das älter als 30 Minuten, das Publikum hätte bis zur ersten Antwort Beispieldaten gesehen (offline dauerhaft). | `js/komponenten.js` (`umfrageLaden`): abgelaufen → **Nullen** (`u.beispiel = false`); Beispielwerte nur noch ohne Speicher, bei anderer Runde oder wenn schon Beispielwerte gespeichert waren. Gilt auch für verfallene Handwerte (Plan C) und für die Aussagezahl. Abweichung von der Vorgabe („wie bei anderer Runde: Beispielwerte“) – begründet mit Yannicks Auftrag „keine alten Stimmen“: 0 ist der ehrliche Stand. Zurück ginge es mit dem Löschen des neuen `else if`-Zweigs. |
| mittel: Lasttest und Kurzprüfung erkannten nur eine Richtung der Zeit in der Tabelle (zu früh). Zu spät (z. B. eine Stunde) hieße: Stimmen zählen 90 statt 30 Minuten – trotzdem BESTANDEN. | Lasttest: **Gegenprobe** – mindestens 90 s (`GEGENPROBE_MS`) nach der letzten Stimme `minuten=1` in der eigenen Lasttest-Runde, n muss 0 sein („ZEITFENSTER FALSCH (Zeit zu spät)“; alle zählen → sicher zu spät, einzelne → „UNKLAR“, wiederholen). Gegen die Attrappe `/uhr?vor=2` statt zu warten. ANLEITUNG „Skript aktualisieren“, Punkt 5: eigene Runde `kurzpruefung-2010`, Pflichtschritt nach 2 Minuten mit `&minuten=1` → `"n":0`, Fehlerbehebung (zwei Zeilen + UNKLAR), Checkliste 12. Kopfkommentar von `apps-script.gs` und Absatz „Uhr“ oben: „beide Richtungen“. |
| mittel: Die Logik auf Handy und Folie hatte keine wiederholbare Prüfung im Repository (Ende-zu-Ende-Skript nur im Scratchpad). | Neu: **`werkzeuge/zeitfenster-e2e.mjs`** (10 Szenarien, Attrappen auf localhost, Playwright-Uhr, nichts geht ins Netz) mit `--mutationen` (12 kaputte Kopien der Client-Dateien, nur im Browser ersetzt). Dazu `pruefen.mjs`: Eine Stand-Abfrage ohne `minuten = gueltigMinuten` ist ein **Fehler** (Bericht „zeitfenster“, „standOhnePassendeMinuten“). Ob das Werkzeug im Repository bleibt, entscheidet Yannick. |
| niedrig: `gueltigMinuten` kann auf GitHub und dem Präsentationsrechner verschieden sein (Handy „Danke“, Folie zählt nicht). | ANLEITUNG „Vor dem Vortrag“, Kontrolle 1: Strg+F `gueltigMinuten` → `30`; Kommentar in `marke.js` wie bei `runde` („Ebenfalls auf GitHub UND auf dem Präsentationsrechner ändern“); LIESMICH 12; Grenzen oben. |
| niedrig: Tooltip behauptete „zählt Stimmen der letzten 30 Min.“, solange unbekannt war, ob die Web-App das kann. | Drei Fälle: `true` → „zählt …“, `false` → „OHNE Zeitfenster …“, `null` → „Zeitfenster 30 Min. angefragt (noch keine Antwort der Web-App)“. |
| niedrig: Referentenfenster, nach mehr als 30 Minuten geöffnet, zeigte andere Zahlen als die Leinwand (pausierte Handwerte). | Auf `melden` schickt das Vortragsfenster (Umfrage-Folie aktiv) `Deck.kanal('umfrage')` mit `{ id, werte, beispiel }`; das Referentenfenster übernimmt sie (`umfrageUebernehmen`). Die Zeit im Speicher bleibt dabei unverändert (kein Verlängern). |
| niedrig: Kurzprüfung in `runde=probe` konnte Fehlalarm geben (andere Probestimmen, ältere fallen gerade heraus). | Eigene Runde `kurzpruefung-2010` (oben). |
| niedrig: „Nach dem Vortrag“ nannte den Stand ohne `minuten` – zählt auch ältere Teststimmen der Vortragsrunde. | ANLEITUNG und LIESMICH: maßgeblich Foto und Stand **mit** `&minuten=30` gleich nach dem Vortrag; später Tabelle herunterladen und nach Zeit filtern. |
| niedrig: kleine Unstimmigkeiten. | (a) 6c: `umfrage-live` mit `fensterAn`; (b) LIESMICH 6: Pause übersteht F5 nur innerhalb von 30 Minuten, verfällt „beim Neuladen oder Betreten“; (c) Lasttest: Bei „FASSUNG VERALTET“ oder „ZEITFENSTER …“ beginnt die Urteilszeile mit „NICHT BESTANDEN wegen …“, ANLEITUNG erklärt es; (d) Zeile „Folie“ nennt Antworten ohne Zeitfenster. |

**Nicht umgesetzt (begründet):** Die Nennungen „Claude“ in der ANLEITUNG bleiben – „Claude“ ist der Name des
Assistenten, keine Modell- oder Versionsbezeichnung, und die Datei nutzte ihn schon vorher zehnmal; die neuen
Meldungen im Testwerkzeug verweisen dagegen neutral auf die ANLEITUNG. Im Mutationstest der Client-Dateien fehlen
zwei Fälle: das stille Nachsenden (NACHZÜGLER) braucht eine Antwort, die nach dem Zeitlimit des Handys doch noch
kommt – nur im Code geprüft; „Ablauf beim Öffnen nicht geprüft“ ist gleichwertig, weil `pageshow` gleich nach dem
Laden noch einmal prüft. Kasten und Notizen von Folie 08 in `index.html` bleiben unverändert (keine sichtbaren
Inhalte, Auftrag ohne `index.html`).

**Geprüft nach der Nacharbeit (Mi, 21.10.2026, alles lokal – keine Anfrage an die echte Web-App):**
`node werkzeuge/live-abstimmung-test.mjs`: 53 von 53; `--mutationen`: 26 von 26 erkannt.
`node werkzeuge/zeitfenster-e2e.mjs`: 58 von 58 Prüfungen, 0 externe Anfragen (`_test/zeitfenster-e2e/`); `--mutationen`: 12 von 12 erkannt (mehrfach
wiederholt; ein Szenario wartet seitdem auf die erste neue Abfrage nach dem Betreten, vorher schlug ein Mutant
gelegentlich nicht an). `pruefen.mjs index.html --schritte --optional`: 23 Folien, 81 Screenshots, 0 Fehler, 4
Warnungen Wortbudget wie vorher (f03, f04, f10, f11), 0 externe Anfragen, 1 Live-Anfrage mit `minuten=30`, Pille
„Live“ (`_test/d20n-pruefen/`); `--nur f08 --schritte --live-werte 3,1,7,0,2`: 0 Fehler, 0 Warnungen, n = 13;
`--nur f08 --live-offline`: 0 Fehler, Pille „offline“. Gegenprobe zu `pruefen.mjs`: Kopie der Präsentation ohne
`minuten` in der Abfrage → 1 Fehler („Stand-Abfrage ohne minuten, erwartet minuten=30 …“). Lasttest gegen die
Attrappe (`--server --sperre 100`, `--anzahl 20`): Fassung 20.10.2026, BESTANDEN, Stand ohne und mit `minuten=30`
je n = 20, Gegenprobe `minuten=1` → n = 0 (`_test/d20n-lasttest-attrappe.log`); gegen eine Attrappe mit Zeit +1 Std.
→ „ZEITFENSTER FALSCH (Zeit zu spät)“, −1 Std. → „(Zeit zu früh)“, alte Fassung → „NICHT BESTANDEN wegen Fassung
und Zeitfenster“, jeweils Exit-Code 1. Bilder und Protokolle: `_test/zeitfenster-e2e/`.

**Offen:** Änderungen committen und pushen (Gruppe); danach **Yannick: Skript aktualisieren** (ANLEITUNG, Fassung
20.10.2026, Kurzprüfung in der Runde `kurzpruefung-2010`: Fassung, `&minuten=30` → `"n":1`, nach 2 Minuten
`&minuten=1` → `"n":0`) und **Lasttest** gegen die echte Web-App (mindestens zweimal `--anzahl 20`; die Urteilszeile
beginnt mit „BESTANDEN“, nicht mit „NICHT BESTANDEN wegen …“). Erst das prüft die Zeit in der echten Tabelle. Kasten
und Notizen von Folie 08 (`index.html`) nennen das Zeitfenster nicht – bewusst nicht geändert; beim Abgleich der
Notizen (Checkliste 12, B · Lukas) ggf. einen Satz ergänzen. Yannick entscheidet, ob `werkzeuge/zeitfenster-e2e.mjs`
im Repository bleibt, und bestätigt „Nullen statt Beispielwerte“ (Abweichung von der ursprünglichen Vorgabe).

## 21. Begriffe wie in der Vorlesung: Markenkern, Positionierung, Markeneigenschaften (Mi, 21.10.2026)

**Auftrag (Freigabe Yannick, Mi, 21.10.2026):** Befunde aus `../abgleich-vorlesung.md` umsetzen – „Steuerrad-Begriffe“
(#27 Mitte des Rads „Markenkern“ wie Stenger, S. 90–91, das bisherige Band bekommt einen Vorlesungsbegriff; #28
Leitfragen in der Wir-Form, S. 88–89; #29 „Markeneigenschaften“ statt „Markenattribute“, S. 60, 90–91; #30 nur die
Rückfrage-Sätze zu Identität/Image, S. 60, 87) und „Kennzeichnung & Rückfragen“ (#15 KI-Personas ersetzen nicht das
Gespräch mit echten Kunden, S. 78; #22 Limbic Types und Gewichte als eigene Erweiterung, S. 69–71, 93). Dazu zwei
Entscheidungen („Entscheidungen beide ja“): (1) Das **Chamäleon** kommt ins Feld Tonalität auf Folie 10, die Zeile
„Ins Steuerrad“ auf 08b wortgleich; (2) der **Limbic-Typ** bleibt Hauptaussage auf Folie 05. **Nicht freigegeben:**
Literatur auf Vorlesungsausgaben (#11–#14), Fußzeilen „Stenger, S. n“ (#4), B7; Inhalte von Lukas (06–08b) und Elias
(09–11) – dort nur Feldbegriffe angeglichen, sonst Hinweise im Kasten. Alle Vorlesungsbelege an den Folienbildern
geprüft, nicht an der unsichtbaren Textebene der PDF.

**Begriffsentscheidung für das Band über dem Rad:** „Positionierung · aus der Identität“ (bis dahin „Markenkern ·
Verdichtung aller Felder“, gleiche Wortzahl). S. 87 zeigt Markenidentität → Pfeil „Zielvorgabe“ → **Positionierung**
→ Umsetzung in Maßnahmen → Markenimage; S. 94 zeigt eine Positionierung als Satz und als Kurzsatz („Wir machen Helden
des Handwerks.“) – „Genuss mit gutem Gewissen“ ist so ein Kurzsatz. „Kurzformel“ und „Positionierungssatz“ stehen auf
keiner Vorlesungsfolie. **Lesart** (nach der Prüfung festgelegt, damit 10, 11 und 12 dasselbe sagen): Es ist HOLYs
Positionierung, wie sie aus der von uns erfassten Identität folgt (unsere Ableitung, H) und wie sie sich mit HOLYs
Versprechen „Geiler Geschmack mit gutem Gewissen“ deckt ✔ [5] – keine Positionierung, die wir vorschlagen. Folie 11
bewertet sie („klare Positionierung“), die Lücken und der Bruch liegen in Identität und Umsetzung; Folie 12: „jetzt
muss der Auftritt nachziehen“. „Zielvorgabe“ ist auf S. 87 die Pfeilbeschriftung und steht deshalb nicht im Band.
Bei Esch selbst heißt die Mitte auch „Markenkompetenz“ (Modellwissen) – so steht es in den Notizen.

| Bereich | Änderung |
|---|---|
| `js/komponenten.js`, `js/deck.js` | FELDER: Mitte „Markenkern“ (Zeilen „Marken-/kern“), Feld „Markeneigenschaften“ (Zeilen „Marken-/eigenschaften“), Leitfragen in der Wir-Form; Pfeiltext „Eigenschaften sind die Startpunkte“; Schrift im Zentrum nach der längsten Zeile; Kopfzeile und Sprungmenü. Abschnitt 3a (Live-Abstimmung) unberührt. |
| Folie 02 | Pfeiltext „Eigenschaften als Startpunkte“; Sprechtext Klick 1, 2, 6 (gleiche Wortzahl); Rückfragen Identität/Image (S. 60, 87) und KI-Befragte (S. 78); Kasten. Etikett „Fremdbild“ bleibt (#30 nicht freigegeben). |
| Folie 03 | `data-titel` „Markenkern“, Kicker „Desk Research · Wer sind wir?“, Belege, Rückfrage, Kasten. Titel, Daten, Sprechtext unverändert. |
| Folie 04 | Notiz „KI und echte Kundenstimmen“ (vgl. S. 78; Name, Beruf, Wohnort = plausible Details als Annahme). |
| Folie 05 | Fußzeile „Typen (nymphenburg.de) und Gewichte: Erweiterung, nicht in der Vorlesung“, Text für Bildschirmleser, Rückfrage „In der Vorlesung gibt es keine Typen …“ (S. 93), Kasten: ENTSCHIEDEN, Typ bleibt Hauptaussage. |
| Folie 06, 07 (Lukas) | 06: `ergebnisTitel` „Markeneigenschaften“, Feldname im Sprechtext Schritt 3, Rückfallwert und Bildschirmlesertext in `js/folien/06-repertory-grid.js`. 07: Sprechtext Schritt 3 „… die Positionierung ab“. Hinweise in den Kästen (Titel „Drei Attribute …“, Sätze zu den Interviews). |
| Folie 08, 08b (Lukas) | 08: Notiz „Markenkern (Mitte …) und Positionierung (Band …)“. 08b: neue Übergabezeile „Ins Steuerrad: frecher Kumpel · wandelbar · Spaß“ (Daten `steuerrad`, `js/folien/08-analogien.js`, `css/folien/08-analogien.css`; Beschriftung als `data-meta`); Rückfrage „kein eigenes Aaker-Merkmal“; Kasten für Lukas. |
| Folie 10 | Mitte „Markenkern“; Band „Positionierung · aus der Identität“; Daten `positionierung` (alter Schlüssel `kern` wird noch gelesen); Feld Tonalität **„frecher Kumpel · wandelbar · Spaß“** (bis dahin „… · Spaß · Zugehörigkeit“; Wortbudget unverändert 49); Sprechtext Schritt 1, 3, 5, 7 (gleiche Wortzahl, Schritt 0–8 weiter ca. 186 Wörter); Herkunft, Belege, Rückfragen (Markenkern/Positionierung, Abgrenzung nach S. 92, Identität/Image); Abgleich „… trifft unsere Identität“, Kicker „Positionierung · aus der Identität“; Kasten mit Begründung, Lesart und ENTSCHIEDEN. |
| Folie 11 (Elias) | Titel „klare Positionierung, zwei Lücken, ein Bruch“ (bis dahin „starker Kern …“), Knopf „Positionierung · Folie 10“, Sprechtext Schritt 0, Belege, Kasten (Wahl „klar“/„stark“ bei Elias). |
| Folie 12, B1, B2, B4 | 12: Notizen und Rückfragen (Markenkern, Positionierung, Identität/Image, Limbic Types, KI-Befragte). B1: Grenze „Simulierte Befragte spiegeln Trainingsdaten, ersetzen kein Kundengespräch (vgl. Stenger, S. 78)“, Sprechtext Schritt 0 „sollen … kommen (geplant)“, Notizen mit Zuordnung zu S. 78. B2: Spalte „Ziel“ der Zeile KI 55, 56 „Markenkern“. B4: Kasten. |
| JS/CSS-Kommentare | `js/folien/02, 03, 06, 08, 10, 11, 12`, `css/folien/02, 06, 08, 10, 12`. |
| Ausarbeitungen | `../methoden.md` (Begriffskasten, §0, §1, §2/§3, §6 mit Positionierung und Abgrenzung nach S. 92), `../README.md`, `../folienentwuerfe.md`, `../markenkompetenz.md` (Dateiname bleibt), `../limbic-map.md`, `../persona-steckbrief.md`; Planungsdokumente nur in den Synthese-Zeilen. Grafiken `../grafiken/folie-02-vorgehen` und `folie-03-markenkompetenz` (SVG, PNG) neu erzeugt. |
| Doku | `QUELLEN.md` §5 (Abgleich mit der Vorlesung), `LIESMICH.md` (Einleitung, Ablauftabelle, Abschnitt 8, 9, Checkliste 12), dieser Abschnitt, Nachträge in Abschnitt 18, Tabelle in Abschnitt 2 und 6a; `../abgleich-vorlesung.md` (Vermerke bei #15, #22, #27–#30, Aufgabenliste). |

### Nacharbeit nach der Prüfung (Mi, 21.10.2026)

| Befund (Schwere) | Umsetzung |
|---|---|
| LIESMICH 12 und Abschnitt 18 standen noch auf „Entscheidung Yannick offen“, aktuelle Tabellen nannten alte Feldnamen (hoch) | LIESMICH 12: beide Entscheidungen abgehakt, neue Punkte für Lukas und Elias; Ablauftabelle, Abschnitt 8 und 9; hier Abschnitt 2, 6a und Nachträge in 18 (historische Logzeilen mit Datum bleiben). |
| Positionierung widersprüchlich eingeordnet („unsere Zielvorgabe“ auf 10, „klare Positionierung“ als Befund auf 11), keine Antwort auf die Abgrenzung (S. 92) (mittel) | Lesart festgelegt (oben); Band „Positionierung · aus der Identität“; Sprechtext 10 Schritt 7 „Daraus folgt die Positionierung: … – die Zielvorgabe aus der Identität, kein Feld im Rad, deckungsgleich …“ (26 Wörter wie vorher); Rückfragen 10 und 12 und Belege 11 nachgezogen; neue Rückfrage „Wodurch grenzt sich die Positionierung ab?“ (S. 92: Format gegenüber Dosen-Energy und Cola, Repertory Grid – Beispieldaten –, waterdrop als Format-Zwilling mit belegten Unterschieden; „zuckerfrei“ allein grenzt kaum ab); `../methoden.md` §6, Kommentare in JS/CSS. Titel 11: „starke Positionierung“ (Elias’ Wertung) bricht in Editorial zweizeilig um – deshalb „klare“, Entscheidung bei Elias (Kasten 11, LIESMICH 12). |
| Rückfrage #30: „alle Methoden“ und „weil wir Kund:innen fragen“ ungenau (mittel) | An allen fünf Stellen (Notizen 02 und 10, `../folienentwuerfe.md`, `../README.md`, Kommentar `js/folien/02-vorgehen.js`): „Die Aufgabe ordnet Repertory Grid, Laddering, Analogien und Kommunikationsanalyse der Markenidentität zu (S. 60). Weil Repertory Grid und Laddering die Zielgruppe fragen – bisher vor allem simuliert, echte Kurzinterviews geplant –, prüfen sie zugleich, ob die Identität ankommt …“ |
| B1 Schritt 0 sagte im Präsens, echte Interviews kämen dazu; Notizen 06 klingen, als gäbe es sie schon (mittel) | B1: „dazu sollen wenige echte Kurzinterviews zum Abgleich kommen (geplant, Spalte 02)“. Kasten 06 und 07 nennen die zwei bzw. einen Satz für Lukas (Notizen sind seine Texte). |
| Folie 04: „KI nutzen wir nur für die Hilfen, die S. 78 nennt“ zu stark (mittel) | „vor allem“, dazu Recherche (nur mit Quelle) und der Satz zu den plausiblen Details (S. 78). |
| Exporte veraltet (mittel) | Neu erzeugt (unten). |
| 08b: Beziehung für das Wortbudget gekürzt – Eingriff in Lukas’ Analyse; Rückfrage „kein eigenes Merkmal“ widerspricht „ins Steuerrad als wandelbar“ (niedrig) | „Kumpel und Anführer des „Squad““ zurück; f08b hat damit 41 Wörter (neue Warnung, kein Fehler). Rückfrage „kein eigenes Aaker-Merkmal“. Kasten 08b: doppeltes „Spaß“, Vorschlag für Schritt 4, Wortbudget. |
| Folie 10 Schritt 9 „Markenimage hier im Raum“ – #30 nur für Rückfragen freigegeben (niedrig) | Zurück auf „Fremdbild hier im Raum“. |
| „Soll-Identität“ an S. 87 gebunden, obwohl S. 91 „IST-Identität“ zeigt (niedrig) | `../folienentwuerfe.md` (Rückfrage 8 zu Folie 3) und `../markenkompetenz.md`: Esch-Quelle („Soll-Markensteuerrad“, W+), dazu S. 91 „IST-Identität – Erster Entwurf zur Abstimmung“; Abgrenzung ist Sache der Positionierung (S. 92). |
| Folie 05: Rückfrage sagt „Karte folgt der Vorlesung“ und „Karte noch abgleichen“ (niedrig) | „… die Anordnung der Karte ist laut Abgleich deckungsgleich mit Stenger, S. 69 (#23); die Vermerke dazu … sind noch nicht geschlossen.“ |
| B1: Seitenangabe sichtbar, liest sich wie ein Zitat (niedrig) | „(vgl. Stenger, S. 78)“ – so im Vorschlag zu #15, freigegeben „in B1-Grenzen aufgreifen“; Klammer mit `&nbsp;` zusammengehalten (Bento: vierte Zeile statt „78)“ allein). Soll die Seitenangabe nur in die Notizen, die Klammer löschen (Kasten B1). |
| Folie 06 zeigt „Markeneigenschaften“ und „Attribute“ nebeneinander (niedrig) | Nicht geändert (Lukas’ Titel); Kasten 06 und LIESMICH 12 nennen den Vorschlag „Drei Eigenschaften …“. |
| Notiz 08 „Markenkern und Positionierung („Genuss …“)“ mehrdeutig (niedrig) | „Markenkern (Mitte des Rads: Herausforderer mit Softdrinks zum Selbermixen) und Positionierung („Genuss mit gutem Gewissen“, Band über dem Rad, Folie 10) …“ |

**Geprüft (Mi, 21.10.2026, nach der Nacharbeit):** `node --check` für `js/komponenten.js`, `js/deck.js` und alle
`js/folien/*.js`: ohne Fehler; alle Daten-JSONs in `index.html` lesbar. `pruefen.mjs index.html --schritte
--optional` (Editorial hell): 23 Folien, 81 Screenshots, **0 Fehler**, 5 Warnungen Wortbudget (f03 48, f04 46,
f08b 41, f10 49, f11 55 – neu nur f08b, durch die Übergabezeile), 0 externe Anfragen (`_test/d22nach-voll/`).
`--schritte --nur f02,f03,f04,f05,f06,f07,f08,f08b,f10,f11,f12,b1,b2` in Editorial, Bento und Keynote, je hell und
dunkel: je 0 Fehler, dieselben 5 Warnungen (`_test/d22nach-<thema>-<modus>/`). Angesehen: Rad auf 02 und 10
(„Marken-/kern“, „Marken-/eigenschaften“, Band einzeilig, Feld Tonalität „frecher Kumpel · wandelbar / Spaß“),
f11 (Titel „klare Positionierung …“ einzeilig in Editorial, Bento und Keynote; „starke …“ brach in Editorial um), f08b in Keynote (Karte über der Fußzeile, Beziehung zweizeilig),
B1 in Editorial, Bento und Keynote (Grenze 1 drei bzw. in Bento vier Zeilen, nichts abgeschnitten). Exporte nach
Abschnitt 15: PDF 22 von 22 Seiten (ohne 01b; im Text kein „Markenkompetenz“, „Markenattribute“, „starker Kern“,
„Wer bin ich“), 23 Folienbilder 1920 × 1080 – geändert gegenüber 20.10.: f02, f03, f05, f06, f08b, f10, f11, f12,
b1, b2; Übersicht `--stand 21.10.2026` (0 externe Anfragen). `export/folien/f02.png`, `f10.png`, `f11.png`,
PDF-Seite 12 und die Übersicht angesehen. Unverändert: `live-abstimmung/`, `js/abstimmen.js`, `marke.js`,
Abschnitt 3a in `js/komponenten.js`, `../recherche/`, `../dossier-buendel-b.*`, `../gruenderbefragung.md`,
`../prompts.md`, `../../ki-nachweis/`, `../../unterlagen/`.

**Offen:** Lukas – Titel 06 und „Attribut(e)“ im Sprechtext 06, zwei Sätze in Notiz 06 und einer in Notiz 07
(Interviews geplant), Übergabezeile 08b bestätigen, Sprechtext 08b Schritt 4 (Kästen 06–08b, LIESMICH 12). Elias –
Sprechtext 10 Schritt 1, 3, 5, 7 und 11 Schritt 0 laut lesen, „klare“ oder „starke Positionierung“ entscheiden,
Rückfragen zu Positionierung und Abgrenzung kennen. Yannick – Seitenangabe auf B1 sichtbar lassen oder nur in die
Notizen. `../gruenderbefragung.md` Z. 182–188 nennt noch „Markenkompetenz“, „Markenattribute“ und „Markenkern:
Genuss mit gutem Gewissen“ (geschützte Datei, unverändert). Nicht freigegeben und offen: #30 (Etikett „Fremdbild“,
Folie 01b, Kicker 10), #31–#35, #39, #40, #4, #11–#14, #23–#26. #15: echte Kurzinterviews und 20–30 Bewertungen;
ohne Interviews bis 26.10. entscheidet die Gruppe, ob „+ Kurzinterviews“ gestrichen wird. KI-Nachweis eintragen,
dann committen und pushen (Hauptsitzung).

## 22. Vortragsreife: Referentenansicht, Folie 08 und Nacharbeit (Mi, 21.10.2026)

**Auftrag:** Workflow D23 „Vortragsreife und Fragerunde abgleichen“ (Account 1). Grundlage ist der Prüfbericht
`VORTRAGSREIFE.md` von Account 2 (Stand a929391, 19.10.2026). Jeder Befund wurde gegen den Stand von heute geprüft
(Nachtrag N1–N8 oben in `VORTRAGSREIFE.md`). Folie 08 und 08b, im Bericht ausgenommen, wurden nachgeprüft (N4).
`../fragerunde.md` wurde auf den Stand D18–D22 gebracht. Umgesetzt sind nur **Technik und Kennzeichnung**; Inhalte von
Lukas (06–08b) und Elias (09–11) sind nicht umgeschrieben, Hinweise stehen in den Kästen. Danach kam eine Prüfung der
Umsetzung (14 Befunde: 1 hoch, 4 mittel, 9 niedrig) und am Abend die **Nacharbeit**: Befunde umgesetzt,
`LIESMICH.md` und dieser Abschnitt nachgezogen, Exporte neu erzeugt.

### Umsetzung (D23, tagsüber)

| Bereich | Änderung (Befund im Bericht) |
|---|---|
| `js/deck.js` – Referentenansicht | Neue Schnittstelle **`Deck.springe(folie, schritt)`** über `befehl('gehe')`: Sprungliste (12), Steuerrad-Felder (02, 10, 12) und Verweise (11) bewegen auch aus dem Referentenfenster den Beamer (A7). Schwarzbild: Blättern blendet nur ein, Esc auch im Referentenfenster, Knopf „Saal einblenden“ (A8). Uhrzustand in `localStorage` (`referent-uhr`, 3 h) – übersteht Neuladen (A9). Partnerkennung: Nur das eigene Folienfenster schaltet (A12). Start-Knopf leuchtet, bis die Uhr läuft; Planzeile „mit dem ersten Satz auf ‚Start‘ klicken“ (A14). Kein Sprung mehr nach Listenplatz („Folie 13 gibt es nicht“, A24). Bedienhinweise bei verbundener Referentenansicht nur dort (A25). Keine Überblendung im Referentenfenster (`sofort: true`, A26). Absätze ohne `data-schritt` kleiner und grau, Knopf „Rückfragen ↓ / Zum Schritt ↑“ (A11). Druckvariante `?druck&notizen=sprechtext` (A18). Kommentar „Mausklick und Mausrad blättern nicht“ (A21). |
| `js/komponenten.js`, `js/folien/11-fazit.js`, `js/folien/12-fragen.js` | Sprünge über `Deck.springe` (A7). Folie 08: keine Aussagezahl bei Beispielwerten („Beispielwerte – keine Aussage“) oder bei Stimmen ohne eine für das Chamäleon („Chamäleon: keine Stimme“) (F08-8, F08-17). |
| `css/deck.css` | `.nur-ohne-css` (Hinweis, wenn nur `index.html` geöffnet ist, A15); `.buehne { forced-color-adjust: none }` (A29); graue Notizen und Rückfragen-Knopf (A11); Start- und Schwarzbild-Knopf (A8, A14); `@media (max-height: 820px)` für Laptop-Fenster bis 1280 × 606 (A10). |
| Folien-CSS/JS | 08b und 09: Endzustand Deckkraft 0,8 statt 0,6 (A5). 08b: Übergabezeile „Ins Steuerrad“ als Band in der Feldfarbe Tonalität (F08-9). 10: Lücken (Klammer, Unterstreichung) durchgezogen statt gestrichelt (A31). 06: Legende „Ø Wettbewerb“ (`06-repertory-grid.js`), Hürde in `--f-fehler` (A32). 04: Ø-Strich ragt über den Balken (A33). Kommentar zum Ablauf von 08b (`08-analogien.js`, F08-24). |
| `index.html` | Hinweis ohne CSS (A15); f03 waterdrop-Abgrenzung in den Rückfragen (Y26); f04 „Dortmund nur im Sprechtext“ gestrichen (Y20, teilweise); f05 „direkt umgerechnet etwa 45/27/27“ (Y16) und Gründerzitat nach Frage 5 und 11 getrennt (Y23); Folie 08: Kasten und Notiz „Bedienung“ auf Weg A (F08-6), Pille „Beispieldaten“ erst ab Schritt 2 (F08-20), Rückfragen je Frage ein Absatz (F08-19), Hinweise auf die Inhaltsbefunde im Kasten; „Titel prüfen“ in den Kästen 08b, 10, 11 (G10); f12 Bedienung und Laien-Sprungziele (A7); B3 „Selbstauskunft: Zielgruppe“ (A6); B7 Dossier-Zeile „· GB (03, B1, B3)“ und B7-Notiz (A1); [9] in B8 (A19). |
| `werkzeuge/pruefen.mjs` | Kontrast mit der Deckkraft aller Vorfahren; abgeblendet in einem Zwischenschritt = Warnung, im Endzustand = Fehler (A30). |
| Ausarbeitungen | `QUELLEN.md` §5 VuMA (IDs, Notizen 04 und B3) und Eurostat (A20); `../folienentwuerfe.md`: Vermerk „Arbeitsentwurf“ bei den Grafiken 02, 03, 05 (Y31), zwei Behauptungen als „geplant“ (Y14); `../fragerunde.md` überarbeitet (eigener Schritt); `VORTRAGSREIFE.md` Nachtrag N1–N7. |

### Nacharbeit nach der Prüfung (Mi, 21.10.2026 abends)

| Befund (Schwere) | Umsetzung |
|---|---|
| `../fragerunde.md` F29 riet „auf Folie 08 zweimal Zurücksetzen“ – bei Weg A pausiert das die Live-Abfrage (hoch) | Fallstrick berichtigt: Runde umstellen, bei Weg A **nicht** „Zurücksetzen“, bei „Live pausiert“ Pille anklicken, „Zurücksetzen“ nur bei Plan C/Weg B. `grep „Zurücksetzen“` in fragerunde.md: nur noch diese Stelle und der Kopf-Nachtrag, gleichlautend mit Notiz 08 und LIESMICH §6/§12. |
| Seit A7 sprang ein versehentlicher Klick in die Folie im Feld „Aktuell“ mitten im Vortrag den Beamer um (mittel) | `Deck.springe` im Referentenfenster gesperrt, bis Folie 12 oder eine Backup-Folie erreicht war; danach frei (auch 10 → 06 in der Fragerunde), bis wieder Folie 01 kommt. Vorher Hinweis „Klick-Sprünge hier erst ab Folie 12 – sonst Ziffern + Enter oder O“. Ziffern, O und das Sprungmenü des Mini-Rads wirken immer; im Folienfenster keine Sperre. LIESMICH §2/§4, f12-Notiz, Abschnitt 8 (Schnittstelle). |
| fragerunde.md F12 „Fünf unserer Befragten sind KI-simuliert“ ohne Beleg (mittel) | „[Zahl] unserer Befragten sind KI-simuliert [Prompt P8/P9 – nur sagen, wenn die Läufe stattgefunden haben]“. |
| fragerunde.md F29 „in den Interviews fragen wir offen“ – Interviews nicht belegt (mittel) | Bedingt formuliert („[nur wenn Interviews geführt:] … haben wir offen gefragt“ / „die Befragung soll offen fragen“), dazu Fallstrick mit Verweis auf F08-2. |
| f12-Sprungziel „Sind das echte Befragte? → B1, B4, B5“ zeigt Beispiel-Interviews als vorhanden (mittel) | „→ B1 (Grenzen, Interviews „geplant“). B4 und B5 erst nennen, wenn dort die tatsächliche Zahl steht“. |
| Y16/Y20 „erledigt“ ohne dokumentierte Freigabe (niedrig) | VORTRAGSREIFE N3: Y16 „erledigt (Einbau), Freigabe Yannick offen“, Y20 mit Hinweis; N7 Nr. 11. |
| N1 Nr. 1: „77 Commits von Claude“, „430 von 840 s“ (niedrig) | „77 Commits, davon 76 von Claude“; „≈ 460 von 840 s (… dazu die Analogien auf 08 ab Schritt 2 ≈ 30 s)“. |
| Sprechzettel zeigte für Folie 12 „Kein Sprechtext hinterlegt“ (niedrig) | Dank als `class="gesprochen"`, Sprung-Bedienung als neue Klasse `class="sprechzettel"` (Abschnitt 3; `js/deck.js` nimmt beide in den Sprechzettel). Gemessen: Sprechzettel 33 Seiten, volles Handout 53 Seiten (`_test/d23n-handout/`). |
| A31: Kommentar „die Lücken sind ein Befund“ – auf der Folie sind sie Bewertung (H); Gestaltung ohne Yannicks Freigabe (niedrig) | Kommentar in `css/folien/10-markensteuerrad.css` sachlich („gestrichelt ist für Annahme/Beispielwert reserviert … Lücken bleiben Bewertung (H)“), Bestätigung durch Yannick (LIESMICH 12.1, VORTRAGSREIFE N7 Nr. 12). Gestaltung nicht zurückgenommen. |
| B7-Logo-Zeile „nur zur Kennzeichnung … auf 01 auch in der Illustration“ widersprüchlich (niedrig) | „(Folien 09b, 12): … unverändert, zur Kennzeichnung der Marke; auf 01 in eigener Illustration (Dose fiktiv)“ – gleiche Länge wie vorher (drei Zeilen; längere Fassungen ergaben in Bento vier Zeilen, die in die Fußnote ragten). Nachgemessen in Editorial, Bento, Keynote je hell und dunkel: unterste Zeile bei y = 1000, Fußnote ab y = 1010. Kasten B7 angepasst. |
| QUELLEN §5 „Alle über die Campuslizenz“ schloss Eurostat ein (niedrig) | Satz getrennt: Statista CI, Kantar TGI, VuMA über die Campuslizenz; Eurostat frei abrufbar; sichtbar nur Statista CI und Kantar TGI. |
| fragerunde.md F30 „42 Eigenschaften … 15 Facetten“ ohne Quelle (niedrig) | Zahlen gestrichen („Unter den fünf Dimensionen hat sie weitere Ebenen“). |
| f08-Bedienung erklärte „OHNE Zeitfenster“ nicht (niedrig) | Notiz Punkt (3) und Kasten: „steht dort „OHNE Zeitfenster“, ist das Skript bei Google noch nicht aktualisiert … Yannick Bescheid geben, Plan C bereithalten“. |
| 36 gewollte Kontrast-Warnungen verdecken echte Warnungen; Zwei-Fenster-Test nur im Scratchpad (niedrig) | `pruefen.mjs`: `warnungenAbgeblendet`, `warnungenOhneAbgeblendet`, `warnungenKurz` („5 + 36 gewollt abgeblendet“), Ergebnis „ok (nur gewollt abgeblendete Zwischenschritte)“, wenn sonst nichts ist. Neu **`werkzeuge/referent-test.mjs`** (Abschnitt 9): 43 Prüfungen, darunter die neue Sperre (vor Folie 12 und wieder nach Folie 01). |
| Offene Doku-Punkte aus dem Nachtrag (A1, A8, A9, A12–A18, A21–A23, A27, A34, E12, E13, G15, 9.2, 9.4–9.8, F08-6) | `LIESMICH.md`: §1 (ZIP, Browserversion ≥ ca. 119 als Modellwissen, Vollbild), §2 (Schwarzbild nur mit B/„.“ einblenden, Esc auf dem Beamer meiden, T/D, Ziffern nur Hauptfolien, Maus blättert nicht, Tabelle „Fragerunde: Sprungwege“), §4 neu (Aufbau in 9 Schritten, Während des Vortrags, Anzeige, Sicherungen), §5 (Eingabefeld: nur Bild↑/Bild↓), §6 (keine Prozentzahl aus Beispielwerten, Pille ab Schritt 2), §9 (`referent-test.mjs`), §11 (PDF-Zuordnung, Sprechzettel/Handout, `?bewegung=reduziert`, Notfalltabelle mit Live-Abstimmung), **§12 neu je Person** (12.1 Yannick, 12.2 Lukas, 12.3 Elias, 12.4 Gruppe mit Synthese und Generalprobe, 12.5 Account 1, 12.6 am Tag, 12.7 optional, 12.8 erledigt; jeder Punkt einmal, Kennungen aus VORTRAGSREIFE), §13. Hier: Abschnitt 3 (Absatzklassen der Notizen), 8 (`Deck.springe`), 9 (Zusammenfassung, `referent-test.mjs`), 15 (A1-Nachtrag), dieser Abschnitt. `VORTRAGSREIFE.md`: N3–N5 Status nachgezogen, N7 Nr. 11–13, N8. |

**Geprüft (Mi, 21.10.2026 abends, Endstand):** `node --check` für `js/deck.js`, `js/komponenten.js` und alle
`js/folien/*.js`: ohne Fehler. `pruefen.mjs index.html --schritte --optional` (Editorial hell): 23 Folien,
81 Screenshots, **0 Fehler**, Warnungen „5 + 36 gewollt abgeblendet“ (Wortbudget wie vorher: f03 48, f04 46,
f08b 41, f10 49, f11 55), 0 externe Anfragen (`_test/d23n-final/`). `--schritte --nur b7,f08,f12` in Editorial,
Bento, Keynote je hell und dunkel: je 0 Fehler (`_test/d23n-<thema>-<modus>/`). **`referent-test.mjs`: 43 von 43**
(`_test/d23n-referent-final/`). `zeitfenster-e2e.mjs`: 58 von 58, 0 externe Anfragen (`_test/d23n-zeitfenster/`).
Handout: `?druck&notizen` 53 Seiten, `?druck&notizen=sprechtext` 33 Seiten, Folie 12 mit Dank und Bedienung.
**Exporte** nach Abschnitt 15: PDF 22 von 22 Seiten (ohne 01b; Seite 1 mit „Dose fiktiv“), 23 Folienbilder
1920 × 1080 – gegenüber dem Export vom Morgen geändert: f04, f06, f08b, f09, f10, b3, b7, b8 (Bildvergleich), sonst
gleich; Übersicht `--stand 21.10.2026` (0 externe Anfragen). `export/folien/f08b.png` und die Übersicht angesehen.
Nicht geändert: `marke.js`, `live-abstimmung/` (auch `apps-script.gs`), `js/abstimmen.js`, `../recherche/`,
`../dossier-buendel-b.*`, `../gruenderbefragung.md`, `../prompts.md`, `../../ki-nachweis/`, `../../unterlagen/`.

**Beobachtung:** Die Überlappungsprüfung von `pruefen.mjs` vergleicht nur den Kern der Zeilen (mittlere 56 %). Eine
Zeile, die nur wenige Pixel in die Fußnote ragt, meldet sie nicht (beim Kürzen der B7-Zeile in Bento gesehen). Bei
knappen Backup-Folien (B3, B7) deshalb nach Textänderungen den Abstand zur Fußnote ansehen.

**Offen:** alles, was Lieferung oder Freigabe braucht – LIESMICH 12.1–12.4 (u. a. Skript-Update und Lasttest,
Mail an Prof. Stenger, Interviewstand und Daten von Lukas, KA-Werte und Chamäleon-Prüfung von Elias, Synthese
Do 22.10., Stoppuhr-Probe), danach Einbau, Pillen und endgültiger Export durch Account 1 (12.5). KI-Nachweis
eintragen, dann committen und pushen (Hauptsitzung).

## 23. Material von Elias Knauber: Analogien und Kommunikationsanalyse (Do, 22.10.2026)

**Auftrag:** Yannick, KI-Nachweis 119 („Elias hat sein Material hochgeladen das kann jetzt als content eingesetzt
werden“). Workflow D24 (Account 1, Skript `ki-nachweis/workflows/2026-10-22_elias-material.js`): Bau der
Ausarbeitungen und der Folien nach Vorgaben des Hauptagenten, drei Prüfungen (Treue zum Material und Fakten;
Darstellung und Technik; Konsistenz, Rechte, Doku), danach parallel eine Nacharbeit der Folien und eine Nacharbeit der
Doku. Der Lauf ist mehrfach am Nutzungslimit abgebrochen und fortgesetzt worden (KI-Nachweis 122–127); jeder
Neustart hat zuerst den Stand per `git diff` geprüft.

**Grundlage:** zwei PDFs von Elias Knauber (Bündel C), nur im Gruppenordner, **nicht** im Repository und nicht in
den Exporten: „Kommunikationsanalyse zum Markenbild von HOLY – Instagram, Facebook, TikTok und YouTube im Vergleich“
(12 S., eigene Bildschirmaufnahmen vom 20. und 21.10.2026, Desk Research vom 16.10.2026) und „HOLY – Analogien:
Mensch und Tier“ (2 S., Stand 16.10.2026). Übertragen nach `../kommunikationsanalyse.md` und `../analogien.md`.

**Warum:** Elias' Ausarbeitungen ersetzen auf Folie 08 und 09 die Beispieldaten und die KI-gestützte
Chamäleon-Begründung (Abschnitt 18). Daraus folgen ein neues Stichwort im Feld Markenbild (Folie 09b und 10), eine
neue Markierung von Lücke 2 und eine neue Empfehlung 3 (Folie 11).

**Regeln des Einbaus:** Fakten nur aus Elias' Material (auf den Folien „Ausarbeitung E. Knauber“ bzw.
„Kommunikationsanalyse E. Knauber“, im Steuerrad Kürzel **AN** und **KA**), aus dem Recherche-Dossier mit
Faktenstatus oder als Modellwissen gekennzeichnet. Keine Zahl neu gerechnet oder geschätzt – nur Elias' eigene Werte.
Keine Bilder aus den PDFs (Bildschirmaufnahmen mit Personen; Social-Media-Bilder von HOLY nur nach Zustimmung des
Betreuers), keine Namen privater Personen, Kooperationspartner nur, wo nötig. Widersprüche zum Dossier oder zum
bisherigen Stand nicht still aufgelöst, sondern als offene Frage in Kasten, Notizen und Ausarbeitung (`../analogien.md`
§10, `../kommunikationsanalyse.md` §13). **Gesperrt:** Folie 01–07 (auch 02 und 05), `marke.js`, die Live-Abstimmung
(`abstimmen.html`, `js/abstimmen.js`, `live-abstimmung/`, `js/komponenten.js` Abschnitt 3a), die sichtbaren Inhalte
von Lukas (06, 07, 08b), `../../ki-nachweis/`.

### Bau (D24, „bau:folien“ und „bau:ausarbeitung“)

| Bereich | Änderung |
|---|---|
| Folie 08 (`index.html`) | Titel und Live-Umfrage **unverändert** („HOLY wäre ein Chamäleon, kein Adler“; `marke.js`). Tier-Karte nach Elias: wandelbar – „fünf Produktlinien“, kreativ – „laufend neue Sorten“, anpassungsfähig – „eigene Claims je Land“ (Eigenschaften und Belege von Elias, die Paare je Zeile hat die Übertragung gebildet). Eine gestrichelte Zeile mit zwei Einträgen: „Maskottchen · Adler“ und der **Papagei** („gesellig, bunt“, eigene Zeichnung; bei Elias „Tier 1“, nicht in der Abstimmung). Mensch-Karte **„Impro-Comedian“** (Zeichnung `comedian` statt `gamer`) mit drei Profilzeilen aus Elias' Tabelle (Auftreten, Umgang, Humor); die Zeile „Echte Kundschaft“ entfällt (Wortbudget, steht in den Notizen). Pille „Beispieldaten“ entfernt, Kontrast Wettbewerber bleibt „(Beispiel)“. Fußzeile „Analogien: Ausarbeitung E. Knauber, Stand 16.10.2026 (Belege aus HOLY-Website, -Kanälen, TV-Spot 2026) – Hypothesen (H)“, **ohne** Tiernamen (sie steht schon während der Abstimmung). Notizen: Schritt 2 „Warum Chamäleon?“ neu (ca. 20 s), Absatz „Chamäleon – Einordnung und Begründung“ mit „Begründung: Elias Knauber“ und den früheren Dossier-Belegen als gekennzeichnete Ergänzung, Zuordnungstabelle kurz; Rückfragen neu bzw. angepasst („Kommt das Chamäleon aus eurer Befragung?“, Tarnung/Einzelgänger, Adler, „Was ist an einem Chamäleon frech?“, „Warum zwei Tiere?“, „Ist der Comedian eure Persona?“). Wortbudget 40 (Warnung ab 41). |
| Folie 08b | Sichtbar nichts. Kasten und Notizen: Hinweis, dass Elias' Zuordnungstabelle vorliegt und Lukas sein Profil damit abgleicht (`../analogien.md` §7.2). |
| Folie 09 | Kicker „Kommunikationsanalyse · Instagram, Facebook, TikTok, YouTube“ ohne Pille. Titel als Kernaussage „Vier Kanäle, vier Rollen – kein … Schlüsselbild“ (Wortlaut: Nacharbeit unten). Vier Spalten in Elias' Reihenfolge: Profilname, Follower bzw. Abos mit Reichweitenbalken (Instagram „383 Tsd.“ wie auf der Plattform), eine Zusatzkennzahl (1.184 Beiträge · Gruppe ≈ 40.000 Mitglieder · 2 Mio. Likes · 360 Videos) und die Rolle (Schaufenster & Verkauf · Zweitverwertung & Anzeigen · Reichweite & Community · Archiv & Zweitverwertung). Beiträge pro Woche, Ø Engagement-Rate und Formel entfallen (keine vergleichbaren Daten), darunter ein Satz „Follower … als Indiz …, Insights-Daten lagen nicht vor“. Schritt 1: fünf Bildwelten als Liste **ohne Anteile**. Schritt 2: Kandidat „Produkt in der Hand“ als eigenes Piktogramm (kein Screenshot, der Raptor ist Maskottchen). Fußzeile: eigene Bildschirmaufnahmen 20./21.10.2026 · Facebook-Gruppe Desk Research 16.10.2026 · Schlüsselbild nach Kroeber-Riel (1993). Notizen neu (Schritt 0 ca. 20 s, 1 ca. 15 s, 2 ca. 25 s; Hintergrund mit Interaktionswerten als Indiz und dem älteren Dossier-Stand vom 14.10.; Rückfragen „Warum TikTok?“, „Wo sind die Engagement-Raten?“, „Ist der Raptor kein Schlüsselbild?“, „Warum hat Instagram kein genaues Komma?“). Wortbudget 37. |
| Folie 09b | Titel bleibt („… trifft den Ton, wirkt aber zersplittert“). Datenblatt: Logo „Wortmarke · extrafette, kursive Versalien“ mit Zusatz „Profilbild in drei Farben“; Claims: Dachclaim „Die Softdrink Revolution“ (einziger Claim auf allen vier Kanälen), Versprechen, Badge „+ viele weitere“ **ohne Zahl** (bis 22.10. „+4 weitere“ nach Dossier 6.5 H); Schriften und HEX aus dem Dossier unverändert (Elias nennt keine); Bildwelt „Streetwear-Look, Produkt in der Hand“ mit Piktogrammen `produkt-hand` und `schachbrett`, „→ Folie 09“. Fit: Tonalität **passt** („Überall frech, schnell, nah dran.“), Persona **teilweise** („Stimulanz passt, Auftritt zu jung.“ – Folie 10 und 11 sagen „Bildwelt zu jung“, offen), Kanäle **Bruch** (Wortlaut siehe Nacharbeit). „Ins Steuerrad · Markenbild“: **Streetwear-Look · Gelb & Schwarz · knallig** (bis 22.10. „Comic-Tiere“). Fußzeile um Elias' Analyse ergänzt, Notizen neu. Wortbudget 37. |
| Folie 10 | **Nur** Feld Markenbild (wortgleich mit 09b) und Lücke 2 „Bildwelt zu jung“, die jetzt „Streetwear-Look“ ↔ „Marco, 28“ markiert; Sprechtext Schritt 6 und 8 mit gleicher Wortzahl; Belege, Kasten. Feld Tonalität („frecher Kumpel · wandelbar · Spaß“) bleibt, Pille „Beispieldaten“ bleibt (06, 07, 08b). |
| Folie 11 | Zeile 3 nach Elias: Befund „Uneinheitlicher Absender“ (Knopf „Bruch · Folie 09b“) → Empfehlung „Ein Absender, ein Schlüsselbild“ – „Ein Name, eine Profilfarbe, Produkt in der Hand“, Chip „überall“ (bis 22.10. „Sechs Claims parallel“ → „Ein Dachclaim, ein Raptor“, Chips „überall“ + „Shop“). Empfehlung 1 und 2 unverändert. Sprechtext Schritt 3 (ca. 20 s), Rückfragen (Raptor, TikTok, welcher Name und welche Farbe), Belege, Kasten. Wortbudget 57 (Warnung wie vorher). |
| Folie 12, B1, B7, B8 | Notizen und Kästen: Querverweise nachgezogen (Raptor als Schlüsselbild, „Comic-Tiere“, „Start-up-Gründer“, „Sechs Claims parallel“, Beispieldaten-Hinweise zu 09 und B6, „31 Energy-Sorten“ als Chamäleon-Beleg). B1: „Folie 06, 07, 08b“ statt „06–08“ (sichtbar nichts). B7: Eintrag „Knauber“ mit beiden Ausarbeitungen; B8: Status „eigen“. |
| B6 | Elias' Tabelle 1, gekürzt (Zeilen = vier Kanäle; Spalten Kanal, Anzeigename, Kennzahlen, Profilbild, Inhaltlicher Schwerpunkt, Rolle im Kanalmix) statt der Beispiel-Codiertabelle; Titel als Kernaussage; drei Infokästen (Datengrundlage, Kennzahlen als Indizien, Ergebnis → Folie 09); Pille entfernt; Schritt 1 markiert Anzeigename und Profilbild. Notizen ehrlich: Einzelne Beiträge wurden **nicht** nach Raster P12 codiert. Navigationsname „KA-Raster“ (Folie 12) und `data-titel` „Backup: Raster Kommunikationsanalyse“ bleiben vorerst (LIESMICH 12.1). |
| `js/folien/08-analogien.js` | Zeichnungen `papagei` und `comedian` (eigene Gestaltung; der Papagei nur auf der Folie, deshalb nicht in `js/abstimmen.js`). Weiteres Tier als zweiter Gegenpol in **einer** gestrichelten Zeile (CSS `.g4-gegenpole`); optionale dritte Zeile `zusatz`; die Kundschaft nur, wenn sie in den Daten steht. Datenschlüssel: beim Bau `zweitesTier`, seit der Nacharbeit `weiteresTier` (der alte Schlüssel wird weiter gelesen). |
| `css/folien/08-analogien.css` | Stichwortspalte `minmax(176px, max-content)` mit Subgrid (vorher fest 176 px – „anpassungsfähig“ passt so ungekürzt); `.g4-gegenpole` (zwei Spalten, gemeinsame gestrichelte Linie); `.g4-gegenpol-zusatz`. |
| `js/folien/09-kommunikationsanalyse.js` | f09: so viele Kanal-Spalten wie in den Daten (`.g5-kanaele--viele` ab vier), `follower.tausend` („383 Tsd.“), `zusatz`, `rolle`; Bildwelt ohne `anteil` als Liste (`beschreibung`, `gewichtung`); Feld `schluesselbild` (Kandidat mit `symbol` `produkt-hand` bzw. `schachbrett`, `hinweis`). f09b: `logo.zusatz`, `claims.weitere` als Text, `bildwelt.symbole`. Die alte Datenform (Balken mit Anteilen, Raptor-Platzhalter) läuft weiter. |
| `css/folien/09-kommunikationsanalyse.css` | vier Spalten (`--g5-spalten`), Zusatzkennzahl, Rolle, Liste der Bildwelten, Kandidat-Feld; Kommentare zur alten Form. |
| `js/folien/13-backup.js`, `css/folien/13-backup.css` | B6: `spalten[].markieren` (Klasse `.bk6-markiert`, hervorgehoben in Schritt 1) und `beschriftung` (Screenreader); feste Spaltenbreiten, Umbruch erlaubt. |
| Ausarbeitungen (neu) | `../analogien.md` (Vorlage `methoden.md` §4) und `../kommunikationsanalyse.md` (Vorlage §5): je Herkunft und Lesehilfe (EK, CC, Dossier-Status), ausgefüllte Vorlage, Dossier-Abgleich, „Was auf die Folien geht“, Abweichungen zum bisherigen Stand, offene Fragen, Quellen. |
| `../folienentwuerfe.md`, `QUELLEN.md` | Entwürfe zu Folie 8, 9, 9b, 10 (nur Markenbild und Lücke 2), 11 (nur Zeile 3) und B6 mit Statustabelle. QUELLEN §3 (Zeichnungen Papagei, Comedian, „Produkt in der Hand“, Schachbrett), §4 (keine Bilder aus Elias' PDFs; Raptor-Screenshot entfällt), §5 (neue Ausnahme „Ausarbeitungen von Elias Knauber“, Absatz Beispieldaten). |

**Abweichungen von den Vorgaben (begründet im Bau):** „kreativ“ statt „experimentierfreudig“ auf der Tier-Karte
(beides Elias' Wörter); Maskottchen-Zeile nur „Maskottchen · Adler“ (Wortbudget, „Raptor“ in den Notizen);
Humor-Zeile „selbstironisch, frech“ (Elias' Spalte Tonalität) statt „über Mächtige und sich selbst“; Pille auf 08
ganz entfernt statt erst ab Schritt 2; Titel 09 kürzer als die Vorgabe („Jeder Kanal hat seine Rolle – ein
Schlüsselbild fehlt“), einzeilig in allen Themen; zusätzlich je Spalte eine Kennzahl aus Tabelle 1; Logo-Zusatz
auf 09b ohne den Namen „Holy Squad“; die Farbgruppe „Shop-Flächen“ (Dossier) bleibt als offene Frage; Folie 11
„Ein Name, eine Profilfarbe, Produkt in der Hand“ mit 8 Wörtern (Richtwert 7), einzeilig. Exporte beim Bau nicht
neu erzeugt (erst beim Abschluss, unten).

**Geprüft (Bau, 22.10.2026):** `node --check` für `08-analogien.js`, `09-kommunikationsanalyse.js`, `13-backup.js`
ohne Fehler. `pruefen.mjs --schritte --nur f08,f08b,f09,f09b,f10,f11,f12,b1,b6,b7,b8` in Editorial, Bento, Keynote und
dunkel: je 0 Fehler (Warnungen nur für abgeblendete Zwischenschritte und das Wortbudget 08b 41, 10 49, 11 57).
Abschlusslauf `--schritte --optional`: 0 Fehler, 40 Warnungen, 0 externe Anfragen. Per Skript: Folie 01–07, `marke.js`,
Abstimmseite, `komponenten.js` und `deck.js` unverändert; 08b nur in den Notizen geändert; jede sichtbare Quellennummer
in B8; keine KI-Modellnamen, keine neuen Bilddateien, keine Namen privater Personen.

### Prüfung (drei Prüfer, 22.10.2026)

Treue zum Material und Fakten: 14 Befunde (4 mittel, 10 niedrig) – u. a. Papagei auf der Folie als „Zweites Tier“,
obwohl er bei Elias „Tier 1“ ist; Titel 09 „kein Schlüsselbild“ schärfer als Elias („kein festes“); Datengrundlage der
Interaktionswerte in den Notizen zu eng beschrieben; Elias' Kritik am Versprechen und die Fyl-Anzeige fehlten in den
Notizen. Darstellung und Technik: 14 Befunde (4 mittel, 9 niedrig, 1 nur zur Information) – u. a. „383“ ohne
sichtbares „Tsd.“, Gewichtungen der Bildwelten nur in Metagröße, Kandidat-Feld in der Bildsprache „Platzhalter“,
Leerraum in der Mensch-Karte, Robustheit von `kanaeleBauen`. Konsistenz, Rechte, Doku: 14 Befunde (2 hoch, 4 mittel,
8 niedrig) – `../fragerunde.md` und Folie 02 widersprachen den neuen Folien, LIESMICH und AUTOREN fehlten, Folie 05
nennt noch „Raptor bleibt Absender“. Die Befunde zu Markdown-Dateien setzt die Doku-Nacharbeit um, die zu
`index.html`, JS und CSS die Folien-Nacharbeit; was gesperrte Folien betrifft (02, 05), steht als Entscheidung bei
Yannick (LIESMICH 12.1).

### Nacharbeit Doku (22.10.2026, abends)

| Befund (Schwere) | Umsetzung |
|---|---|
| `../fragerunde.md` widersprach den neuen Folien (hoch) | Nachtrag „Stand Do, 22.10.2026“ im Kopf; **neu gefasst** (alte Antworten gestrichen): F16 (Elias' Begründung, Papagei, Comedian), F17 (qualitativ, keine Stichprobe, keine Engagement-Raten), F30 (Zirkel bei derselben Person), F31 („Ist der Raptor kein Schlüsselbild?“ – Maskottchen, Kandidat Produkt in der Hand, S. 97), F32 (Streetwear-Look ↔ Marco, 28), F33 (uneinheitlicher Absender statt „sechs Claims“), F34 („Warum TikTok?“). **Nachgezogen:** F09, F12, F13, F15, F21–F24, F27 (Fyl), F29, Spielregeln 1 und 8, Übersicht und Verteilung, Aufgabenliste (erledigt bzw. gegenstandslos markiert, neue Zeilen), Übung, Reserve. **Neu:** F36 (Comedian, zwei Tiere, Papagei nicht in der Umfrage), F37 (KI in Analogien und Kommunikationsanalyse?), F38 (Woher 0,4–0,6 %?) – am Ende von „mittel“, damit die Nummern gleich bleiben. |
| LIESMICH auf dem Stand 21.10. (mittel) | Kopf: Stand 22.10., Absatz „Seit Do, 22.10.“, Warnung „Exporte zeigen 08–11 und B6 noch alt“; §6 (Chamäleon-Begründung von Elias, Papagei nicht in der Abstimmung, Adler = Maskottchen); §12 Nachtrag; 12.1 neu „Neu seit 22.10.“ (Freigabe Markenbild und Lücke 2, ein Wort für die Persona-Lücke, Vorgaben 08/09/09b/11/B6, Folie 02 und 05, B2 P11/P12, Navigation B6, Exporte, getrennter Commit von `../buendel-b/`), Raptor-Screenshot, Post-Zählung und Formel als überholt; 12.2 (Analogien jetzt von Elias, Abgleich Aaker-Profil mit Elias' Zuordnungstabelle, Stand der Befragung: kein Material von Lukas, KI-Simulation D25), 12.3 („Kommunikationsanalyse liefern“ und „Chamäleon-Begründung prüfen“ als geliefert mit Rest; neu „Einbau prüfen und freigeben“ und „Offene Fragen beantworten“; Raptor-Screenshot, „Sechs Claims“, Claim-Hierarchie, Codierzeilen B6 überholt), 12.4, 12.5, 12.8, §13. |
| Kein Abschnitt in AUTOREN (mittel) | dieser Abschnitt; Nachtrag am Anfang von Abschnitt 18. |
| Papagei als „zweites Tier“ in QUELLEN, Ausarbeitungen und Folienentwurf (mittel) | „anderes Tier – bei Elias ‚Tier 1‘“ in `QUELLEN.md` §3 und §5, `../analogien.md` §1 und §5, `../folienentwuerfe.md` Folie 8. |
| „HOLY hat keins“ (Schlüsselbild) und Rückfrage 3 zu Folie 9 schrieben Elias Aussagen zu, die er nicht macht (mittel, niedrig) | `../folienentwuerfe.md` Folie 9: Sprechtext „Ein festes Schlüsselbild hat HOLY nicht – eine Gruppe von Motiven übernimmt die Aufgabe“; Rückfrage 3 mit Elias' Wortlaut und „Unsere Folgerung (H)“; Schritt 1 mit der TikTok-Gewichtung (Abb. 3). |
| Elias' Kritik am Versprechen, „Haltung und Tempo“ und die Fyl-Anzeige fehlten (mittel) | `../folienentwuerfe.md` Folie 10 (Rückfrage Abgrenzung) und Folie 11 (Lücke 1, Konjunktiv „müsste … bewusster und einheitlicher“); `../fragerunde.md` F15, F27. In `../kommunikationsanalyse.md` standen sie schon (§5, §7, §10). |
| Zuordnung Eigenschaft–Beleg als „nach Elias“ ausgegeben (niedrig) | `../analogien.md` §10 Frage 7 und `QUELLEN.md` §5: Paare je Zeile von der Übertragung gebildet, von Elias zu bestätigen. |
| Begründung „kreativ, weil die Spalte schmal ist“ stimmt nicht mehr (niedrig) | `../analogien.md` §10 Frage 7: Wortwahl, nicht Platz („experimentierfreudig“ passt seit der wachsenden Spalte). |
| Zitat „Maskottchen der gesamten Marke“ ohne „so etwas wie“ (niedrig) | Wortlaut vollständig in `../analogien.md` §1, `../kommunikationsanalyse.md` §4, `../folienentwuerfe.md` Folie 9, `../fragerunde.md` F16, F31. |
| Logo „kein Widerspruch“ in `../kommunikationsanalyse.md` §4 (niedrig) | „Beide Fassungen kommen vor“, neue offene Frage 8 an Elias (Yannick-Fragen jetzt 9–11; Verweis in `../folienentwuerfe.md` angepasst). |
| „Am 26.10. neu ablesen“ gegen den Kasten FOLIE 09 (niedrig) | `../kommunikationsanalyse.md` §3.1: „neu ablesen **oder** Stand 20./21.10. in der Fußzeile – Entscheidung Elias“, wie in `../folienentwuerfe.md` und LIESMICH 12.3. |
| Dossier-Hypothese „kein durchgängiger Slogan“ (6.5 H) gegen Elias' Dachclaim auf allen Kanälen (niedrig) | `../kommunikationsanalyse.md` §12 Nr. 7: Status H ausdrücklich, Elias' jüngere Aufnahme gilt für die Folien. |
| README FS1 „IG / FB / YT“, „B6 Raster Kommunikationsanalyse“ (niedrig) | `../README.md`: Tabelle mit TikTok und eigenen Bildschirmaufnahmen, Absatz „Stand 22.10.2026“ zu Elias' Ausarbeitungen, B6 als „Profilmerkmale der Kanäle“ (Navigationsname im Deck vorerst unverändert). |
| VORTRAGSREIFE und `../abgleich-vorlesung.md` #48 mit erledigten Punkten (niedrig) | je ein Nachtrag mit Status „erledigt bzw. gegenstandslos seit 22.10.2026“. |
| Folie 05 und `../limbic-map.md` („Raptor bleibt Absender“) (mittel) | nicht geändert (Folie 05 gesperrt, Freigabe Yannick): offener Punkt in LIESMICH 12.1, `../folienentwuerfe.md` Folie 5 („Zu prüfen“) und `../fragerunde.md` (Aufgabenliste). |
| Folie 02 (Methodenkarten) und B2 (P11/P12) (hoch bzw. niedrig) | nicht geändert (gesperrt bzw. Folien-Datei): offene Punkte in LIESMICH 12.1 und `../fragerunde.md` F37. |
| `../buendel-b/` ungetrackt (niedrig) | nicht angefasst; LIESMICH 12.1: getrennt committen. |

**Geprüft (Doku-Nacharbeit):** Jede neue Zahl in den geänderten Markdown-Dateien per Skript gegen Elias' Texte,
das Dossier und die bestehenden Dateien abgeglichen (keine neue Rechnung); Spaltenzahl aller geänderten Tabellen,
relative Links und Verweise auf Abschnittsnummern geprüft; Volltextsuche nach Namen privater Personen, KI-Modellnamen
und neuem Statista-Material ohne Treffer; die Beschreibungen des Folienstands gegen `index.html` beim Abschluss
abgeglichen (unten). `index.html`, JS und CSS hat diese Nacharbeit nicht geändert; `../../ki-nachweis/` unverändert.

### Nacharbeit Folien (22.10.2026, abends; paralleler Agent – hier nach den Kästen in `index.html` zusammengefasst)

| Befund (Schwere) | Umsetzung |
|---|---|
| Papagei als „Zweites Tier“ beschriftet – bei Elias „Tier 1“ (mittel) | Beschriftung „Weiteres Tier · Papagei“, Datenschlüssel `weiteresTier` (`08-analogien.js` liest `zweitesTier` weiter); Kommentare und Kasten. |
| Titel 09 und Fit-Zeile 09b „kein Schlüsselbild“ schärfer als Elias (mittel) | „Vier Kanäle, vier Rollen – kein festes Schlüsselbild“ (einzeilig in allen Themen); 09b „Vier Namen, drei Profilfarben, kein festes Schlüsselbild.“ mit festen Leerzeichen (kein einzelnes „Schlüsselbild.“ in Zeile 2); Sprechtext 09 Schritt 2 „Ein festes hat HOLY nicht – eine Gruppe von Motiven übernimmt das“. |
| „383“ wirkte ohne sichtbares „Tsd.“ wie der kleinste Kanal (mittel) | „383 Tsd.“ in der großen Zahl (`.g5-tausend`), „Tsd.“ als Einheit gekennzeichnet. |
| Gewichtung der Bildwelten nur in 22-px-Metagröße und nur für Instagram (mittel, niedrig) | rechte Spalte „vor allem auf“ in Textgröße mit Kanal-Icon (Daten `schwerpunkt`, `schwerpunktKopf`): Produkt-Pop und geliehene Welten Instagram, Szene & Event TikTok (Elias, Kap. 5.2 und Abb. 3); Sprechtext Schritt 1 nennt TikTok. |
| Kandidat-Feld in der Bildsprache „Platzhalter/Beispielwert“ (mittel) | durchgezogener Rahmen ohne Schraffur, Chip „Kandidat“ als Status. |
| Datengrundlage der Interaktionswerte in den Notizen 09 und B6 zu eng (mittel) | Notizen nach Grundlage getrennt: vier Einzelbeiträge · Facebook-Suchansicht · Aufrufe aus den Profilen; Rückfrage „Wo sind die Engagement-Raten?“ entsprechend. |
| Elias' Kritik am Versprechen, „Haltung und Tempo“ und die Fyl-Anzeige fehlten in den Notizen (mittel) | Notizen 09b (dazu Dossier 6.5 H ↔ Dachclaim auf allen Kanälen), 10 (Rückfrage „Wodurch grenzt sich die Positionierung ab?“ mit Fyl) und 11 (Belege Lücke 1). |
| Mensch-Karte: Merkmalsspalte fest, vierte Zeile überlappte; Leerraum (mittel) | Merkmalsspalte wächst wie die Tier-Spalte (`minmax(176px, max-content)`, Subgrid); Leerraum bleibt bis zur Freigabe, Vorschlag vierte Zeile „Rollen – schlüpft in jede Rolle“ (Folie dann ca. 44 Wörter) im Kasten. |
| Auftreten ohne Elias' „aber nie planlos“ (niedrig) | „überdreht, nie planlos“ (gleiche Wortzahl). |
| Sprechtext 08 Schritt 1 und Rückfrage „im Interview offen gefragt“ (niedrig) | Schritt 1 „Hier vorgegeben – abgeleitet aus HOLYs eigener Kommunikation.“; Rückfrage mit Elias' Ableitung, der Interview-Satz nur noch als Regie, falls Bündel B Interviews führt. |
| Notizen 08: „Das zählen wir nicht als Stärke“ gegen Elias' „anpassungsfähig – eigene Claims je Land“; Kasten in der Gegenwart (mittel, niedrig) | Absatz „Dagegen bzw. ambivalent“ neutral (Elias' Wertung ↔ frühere KI-gestützte Einordnung, offen); veraltete Spiegelstriche im Kasten als „Stand bis 22.10.2026“ gekennzeichnet; Zuordnung Eigenschaft–Beleg als Vorschlag des KI-Agenten vermerkt; Begründung „kreativ“ als Wortwahl (nicht „zu breit“). |
| f11 Sprechtext „muss es nur bewusst und einheitlich“ (niedrig) | „müsste es nur bewusster und einheitlicher einsetzen“ (Elias' Wortlaut, gleiche Wortzahl). |
| Zitat „Maskottchen der gesamten Marke“ ohne „so etwas wie“ (niedrig) | vollständig in Daten-„hinweis“ und Notizen 08, 09, 11. |
| Gemeinsame gestrichelte Zeile 08 vertikal versetzt (niedrig) | `.g4-gegenpole` oben bündig. |
| Gleiches Icon für TikTok und YouTube (niedrig) | TikTok `gruppe`, YouTube `video`. |
| Robustheit `kanaeleBauen` (niedrig) | fehlt ein Follower-Wert: „–“ ohne Balken statt „0“; mehr als vier Kanäle: Warnung in der Konsole; Klasse `.g5-kanaele--viele` per Umschalter. |
| B6-Titel „Dieselben Kernbotschaften …“ von der Tabelle nicht belegt; alte Codiertabelle passt nicht mehr (niedrig) | Titel „Vier Namen, drei Profilfarben, vier Rollen“; Kommentar in `13-backup.css`/`13-backup.js`, was ein Rückgriff auf die alte Tabelle bräuchte. Navigationsnamen „KA-Raster“ und `data-titel` bleiben bis zur Freigabe. |
| Kasten 12 „08, 09, 09b und B6 ohne Beispieldaten“ ungenau; Kasten 10 „06–08“ (niedrig) | „08 bis auf die Wettbewerber-Tiere, 09 und B6 ohne Beispieldaten; 09b ohne Beispielwerte“; Kasten 10 „06, 07 und 08b“, Daten-„hinweis“ Lücke 2 auch nach Elias. |
| Neu ablesen der Follower: Kasten 09 widersprach der Ausarbeitung (niedrig) | Kasten: „vor dem 26.10. neu ablesen ODER Stand in der Fußzeile lassen – Entscheidung Elias“. |
| Folie 02, 05, B2 (gesperrt bzw. außerhalb der Vorgaben) | nicht geändert; Hinweise in den Kästen 08, 09, 11 und LIESMICH 12.1. |

**Bewusst nicht geändert:** Folie 01–07 (auch 02 mit den Methodenkarten und 05 mit „Raptor bleibt Absender“),
`marke.js` (Umfrage ohne Papagei), Live-Abstimmung, `js/komponenten.js`, `js/deck.js`, Lukas' sichtbare Inhalte
(06, 07, 08b), `../recherche/*`, `../limbic-map.md` (Abgleich mit Elias erst nach Yannicks Freigabe),
`../dossier-buendel-b.*`, `../gruenderbefragung.md`, `../prompts.md`, `../../ki-nachweis/`, `../buendel-b/` (D25),
`export/` (beim Abschluss am 22.10. neu erzeugt, unten).

**Geprüft (Abschluss der Doku-Nacharbeit, 22.10.2026, nach der Folien-Nacharbeit):** Die Beschreibungen des
Folienstands in `../analogien.md` §8, `../kommunikationsanalyse.md` §11, `../folienentwuerfe.md` (8, 9, 9b, 11, B6),
`../fragerunde.md`, `LIESMICH.md` und diesem Abschnitt gegen `index.html` abgeglichen (Titel, Daten von f08, f09,
f09b, B6, Sprechtexte 08, 09, 09b, 11). `pruefen.mjs index.html --schritte --nur f08,f09,f09b,f10,f11,b6`
(Editorial hell): **0 Fehler**, 19 Warnungen – 17 abgeblendete Zwischenschritte (09b, 10) und das Wortbudget von
10 (49) und 11 (57) wie vorher; 0 externe Anfragen (`_test/doku-abgleich/`).

**Offen:** Freigabe durch Yannick und Elias (LIESMICH 12.1, 12.3), Elias' offene Fragen (`../analogien.md` §10,
`../kommunikationsanalyse.md` §13), ein Wort für die Persona-Lücke (09b „Auftritt zu jung“ ↔ 10/11 „Bildwelt zu
jung“), Folie 02, 05 und B2 (Yannick), Abgleich mit Bündel B (D25), danach Exporte erneut (12.5). KI-Nachweis
eintragen, dann committen und pushen (Hauptsitzung) – `../buendel-b/` getrennt.

### Abschluss (22.10.2026; nach dem Nutzungslimit fortgesetzt, Systemdatum 23.10.)

| Schritt | Ergebnis |
|---|---|
| Volltextsuche wie der Konsistenz-Prüfer (Raptor, Comic-Tiere, Start-up-Gründer, Sechs Claims, 31 Energy-Sorten, „zweites Tier“, Beispieldaten, Codierung, Engagement, „06–08“), in `index.html` je Folienabschnitt, in JS/CSS und in den Markdown-Dateien; dazu der sichtbare Text aller Folien im Endzustand | Treffer außerhalb von Folie 01–07 sind als früherer Stand gekennzeichnet oder offene Entscheidungen. Nachgezogen: Kasten B1 (zwei Punkte „06–08“ → „06, 07, 08b“), Datenkommentar B2 (dasselbe), CSS-Kommentar 09 (Akzentbalken der alten Balkenform), Kästen 08 und 09 (Hinweis auf `export/`). Sichtbar nichts geändert. |
| `pruefen.mjs index.html --schritte --optional` | Editorial 0 Fehler / 40 Warnungen, Bento 0 / 32, Keynote 0 / 35, dunkel 0 / 17; je 5 Wortbudget-Warnungen (03: 48, 04: 46, 08b: 41, 10: 49, 11: 57), der Rest abgeblendete Zwischenschritte (Deckkraft 0,6) auf 02, 06, 08b, 09b, 10; 0 externe Anfragen (`_test/ab-<thema>/`). |
| `live-abstimmung-test.mjs`, `referent-test.mjs` | 53 von 53 bzw. 43 von 43 bestanden (`_test/ab-live.log`, `_test/ab-referent/`). |
| Exporte (Abschnitt 15) | **neu erzeugt mit Elias' Material** (Freigabe Yannick/Elias offen): `praesentation.pdf` 22 Seiten (ohne 01b, Zuordnung PDF-Seite ↔ Folie unverändert, LIESMICH 11), `folien/<id>.png` 23 Bilder 1920 × 1080, `uebersicht.png` mit Stand 22.10.2026; je 0 Fehler, 0 externe Anfragen. Sichtbar anders als am 21.10.: 08, 09, 09b, 10, 11, B6, B7, B8. Folie 02 zeigt die Methodenkarten („KI + Kurzinterviews“, „KI hilft codieren“) nur in Zwischenschritten – im Export nicht zu sehen, im Vortrag schon (gesperrt, Yannick). |


## 24. KI-simulierte Befragung, Rad = Selbstbild, Papagei und Chamäleon (Fr, 23.10.2026)

**Auftrag:** Yannick, KI-Nachweis 135 – Antworten auf vier Rückfragen, nachdem Lukas Welker (Bündel B) kein Material
mehr liefert und Workflow D25 eine **KI-simulierte Befragung** erstellt hat (`../buendel-b/`: acht fiktive Befragte
T1–T8, je ein eigener Agent, Kontrollgruppe, Codierung KI-gestützt, Rechnung per Skript; keine echten Interviews).
Wörtlich: (1) Folien 06, 07, 08b: „Ehrlich einbauen“; (2) Folie 10: „Rad = Selbstbild, Simulation als Abgleich“;
(3) Folie 08 und Live-Abstimmung: „So wie Elias das am wahrscheinlichsten wollte mit seinen Notizen“; (4) „selbst
anrühren“: „Nur im Sprechtext“. Dazu (5) Querverweise nachziehen (bis 22.10. gesperrt). Workflow D26 (Account 1):
zwei Bau-Agenten (Folie 08 und Abstimmung; 06, 07, B4, B5), ein Synthese-Agent für Folie 10, 11, 12, 02, 05 (Notizen),
B1, B2, B7, B8 und ein Doku-Agent, danach Prüfung und Nacharbeit. Der Lauf ist mehrfach am Nutzungslimit abgebrochen
und fortgesetzt worden (KI-Nachweis 136–142); laut Hinweis in den Aufträgen prüft ein neu gestarteter Agent zuerst
den Stand per `git diff` und übernimmt, was schon umgesetzt ist, statt es doppelt einzufügen.

**Regeln des Einbaus:** Zahlen nur aus `../buendel-b/auswertung/*.csv` (bzw. `hvm.json`) und Elias' Material bzw. dem
Dossier – nichts neu gerechnet oder geschätzt. Überall „KI-simuliert“, nie „Befragte sagen“ ohne Zusatz, keine
Signifikanz, keine Repräsentativität. Folie 01, 03, 04, 09, 09b sichtbar unverändert, Folie 05 nur Notizen. Keine
Namen von KI-Modellen in Dateien. `index.html` wurde von mehreren Agenten **parallel** bearbeitet – jeder nur in
seinen Folienabschnitten und nur mit dem Edit-Werkzeug (kein Neuschreiben der Datei). `marke.js`: nur `optionen` und
`unsereAntwort` der Umfrage; `runde`, `liveQuelle`, `gueltigMinuten` unverändert. Das Google-Skript speichert nur die
Nummer – dort nichts geändert. Kein Commit durch die Agenten; `../../ki-nachweis/` und `../buendel-b/rohdaten/`
unverändert. Vorlage: `../buendel-b/folienvorschlag.md` (Kopfvermerk „umgesetzt am 23.10.2026“ mit den
Abweichungen).

### Bau (D26)

| Bereich | Änderung |
|---|---|
| Folie 06 (`index.html`) | Pille „KI-simuliert“, Titel „HOLY hebt sich ab – aber vor allem durch Hürden“ (E1), acht Konstrukte mit erfüllter Relevanz, stärkster Wettbewerber Coca-Cola Zero, Triade 4 (HOLY, Coca-Cola Zero ↔ Monster). Ergebnisbereich „Fremdbild (KI-simuliert)“ mit „keine Markeneigenschaft – kein Konstrukt erfüllt alle drei Kriterien“ und Übergabezeile „Abgleich Folie 10“ (Daten `ergebnisTitel`, `uebergabe`, `fremdbild` [„Cola Zero“]). Chips „Hürde“ bei vier Konstrukten, Startpunkte ohne Chip (E2, E16). Fußzeile „KI-simulierte Befragung, n = 8 (T1–T8), keine echten Interviews · Mittelwerte per Skript · nach Kelly (1955)“. Sprechtext 149 Wörter ≈ 78 s (Soll 80 s) mit „selbst anrühren“ als stärkster Hürde quer zum Markenkern und Verweis auf Folie 10; Rückfragen u. a. „Warum KI-simulierte Befragte?“ (Stenger, S. 60, 78), „Warum fehlt ‚selbst anrühren‘?“. Wortbudget 60 (Warnung, bewusst). |
| Folie 07 | Pille, Titel „Ohne Zucker → kein Absturz → verlässlich sein“ (E3), HVM aus `hvm.json` (stärkste Leiter 6 · 5 · 5 · 2), Nutzen-Kästen mit „Fremdbild (KI-simuliert) → Abgleich Folie 10“ (`uebergabe`, `fremdbild` [„verlässlich“], `einheit` „Leitern“). Fußzeile „KI-simulierte Laddering-Interviews, n = 8 (T1–T8), 10 Leitern, keine echten Interviews …“. Sprechtext 165 Wörter ≈ 87 s (Soll 90 s); Schritt 4 „Markennutzen als Fremdbild“. |
| `js/folien/06-repertory-grid.js`, `07-laddering.js` und CSS | 06: Übergabezeile, Bildschirmleser „KI-simuliert“, Triaden-Karten 150 px (Bento brach „Monster“ um), Konsolenprüfung „Abgleich mit Folie 10“ (Stichworte mit Quelle RG im Rad, fehlende `fremdbild`-Wörter auf 10). 07 (E4): Verbindungen innerhalb einer Ebene als flacher Bogen **unter** den Knoten mit Pfeilspitze; volle Ebenen stufenweise enger; unbekannte Verbindungen meldet die Konsole; Felder `einheit`, `uebergabe`; Prüfung wie 06 für Quelle LA. |
| B4, B5 (`index.html`, `js/folien/13-backup.js`, CSS) | B4: Titel „Kein Konstrukt erfüllt alle drei Kriterien“, zwölf Konstrukte; E15 Variante a – die fertigen Werte `differenzierung` und `idealDistanz` aus der CSV mit zwei Stellen, ungerundet verglichen (ohne sie rechnet das Skript wie bisher); Pille „Startpunkt“ neutral; Fußzeile ohne Skriptnamen. B5: Titel nach §8, Legende „alle KI-simuliert“, eigener Matrix-Block für Verbindungen innerhalb einer Ebene, stärkste Leiter mit beliebig vielen Gliedern (markiert T2, T7), `matrixKompakt`, Cut-off „ab 2 Leitern“. |
| Folie 08 (`index.html`) | Titel ab Schritt 2 „HOLY wäre Papagei und Chamäleon, kein Adler“ (einzeilig in allen Themen). Neue Daten `marke.tiere`: Papagei (gesellig – Account „[Marke] Squad®“, bunt – Tier-Illustrationen), Chamäleon (wandelbar – fünf Produktlinien, kreativ – laufend neue Sorten), `selbstbild` Adler; Comedian mit Humor zuerst („selbstironisch, frech“). Sprechtext 114 Wörter ≈ 60 s (Zeitangaben 76 s gegen 70 s Soll; Kürzungsvorrat im Kommentar) – nur Schritt 2 nennt den KI-simulierten Befund (Papagei 5 von 8, Chamäleon nie); neue Rückfragen (Papagei statt Fuchs, zwei Tiere); Hintergrund mit Abgleich. Fußzeile unverändert. |
| Folie 08b | Pille „KI-simuliert“, Titel „HOLY wirkt wie ein witziger Kumpel – der verkaufen will“ (E7, zweizeilig), Daten aus `aaker-folie-08b.csv` und `analogien-haeufigkeiten.csv`; neue Felder `kennzeichnung`, `legendeHinweis`, `fremdbild` statt `steuerrad`. Ergebnisbereich „Fremdbild (KI-simuliert)“ mit „→ Abgleich mit dem Selbstbild: Folie 10“ (Symbol „Vergleich“). Fußzeile „KI-simulierte Befragung, n = 8 (T1–T8; waterdrop n = 4) …“. Sprechtext 99 Wörter ≈ 52 s. Wortbudget 41 (wie vorher). |
| `js/folien/08-analogien.js`, CSS | f08: `tiereKarte` (mehrere Tiere gleichwertig, Selbstbild darunter); `abgleich()` prüft mehrere Tiere (`unsereAntwort` als Text oder Liste, Reihenfolge egal); neu `tonalitaetAbgleich` (Wörter im Feld Tonalität auf Folie 10 müssen auf 08 stehen). f08b: Fremdbild-Zeile, `fremdbildAbgleich` (Leitwort im Titel von 08b und auf Folie 10); Wettbewerber-Marker, die fast auf dem HOLY-Punkt liegen, rücken unter oder über die Linie. Die alten Datenformen (`tier`, `weiteresTier`, `steuerrad`) werden weiter gelesen. CSS: Tier-Karte zwei Drittel, Comedian ein Drittel. |
| Live-Abstimmung | `marke.js`: `optionen` Adler, Löwe, Chamäleon, **Papagei**, Schwan (Papagei an der Stelle des Fuchses, Nummer 3), `unsereAntwort: ['Papagei', 'Chamäleon']`. `js/komponenten.js` (Baustein `umfrage`): `unsereAntwort` als Text **oder** Liste, jede Antwort umrahmt und als „Unsere Analyse“ markiert, die Aussagezahl zählt alle Antworten zusammen und rundet erst die Summe („x % … als Papagei oder Chamäleon“; Nullfall „Papagei oder Chamäleon: keine Stimme“). `js/abstimmen.js`: Papagei-Zeichnung in `BILDER`. Tests `werkzeuge/live-abstimmung-test.mjs` (Optionen) und `zeitfenster-e2e.mjs` (Handys stimmen für den Papagei) angepasst; `live-abstimmung/ANLEITUNG.md` Stand 23.10.2026. |
| Folie 10 | **Parallel gebaut** (Synthese-Schritt; Stand beim Abgleich der Doku am 23.10.2026, Prüfung durch den Synthese-Schritt und die Gruppe offen): Rad = Selbstbild – Markeneigenschaften „zuckerfrei“ DR, „Community-nah“ KA, „Energy: 160 mg Koffein“ DR; Nutzen „Genuss ohne Zucker“, „gutes Gewissen“ DR, „dazugehören“ KA (GB stützt); Tonalität „frech · gesellig · wandelbar“ AN; keine Quelle RG oder LA mehr. Neuer Schritt 9 „Abgleich · Selbstbild ↔ Fremdbild“ (Daten `vergleich`, Methodenknöpfe zu 06, 07, 08b, 08): „zuckerfrei ≠ Cola Zero knapp vorn“, „Genuss mit gutem Gewissen ≠ kein Absturz → verlässlich sein“, „frech ≠ witziger Kumpel, der verkaufen will“, „Papagei & Chamäleon ≈ Papagei 5 von 8, Chamäleon nie“; der Wortwolken-Abgleich ist jetzt Schritt 10. Pille „teils KI-simuliert“, Fußzeile zweizeilig (Selbstbild / Abgleich). Lücken und Titel unverändert. Sprechtext 146 Wörter ≈ 77 s (Soll 75 s; vorher ≈ 186 Wörter ≈ 98 s), davon Abgleich 40 Wörter; „selbst anrühren“ nur dort und in der Rückfrage. Wortlaut und offene Entscheidungen („≈ teils“ statt „=“, „knapp vorn“ statt „gleichauf“) im Kasten „FOLIE 10“. |
| Folie 11, 12, 02, 05 (Notizen), B1, B2, B7, B8 | **Parallel gebaut** (Synthese-Schritt, Entscheidung 5). Beim Abgleich der Doku eingebaut: **02** – Methodenkarten „Triaden: KI-simuliert, keine Interviews“, „Means-End-Chain: KI-simuliert, keine Interviews“, „Mensch, Tier: Selbstbild · Aaker: KI-simuliert“, „Vier Kanäle, eigene Bildschirmaufnahmen“, Sprechtext Klick 3 und Rückfragen (Titel offen); **11** – Pille „Beispieldaten“ gelöscht, Belege und Rückfragen (Titel, Befunde, Empfehlungen unverändert); **12** – Pille gelöscht, Sprungliste „Fremdbild (Aaker)“, Notizen mit Sprungzielen. Noch in Arbeit: Notizen **05** („Raptor bleibt Absender“, „Comic-Tiere, 31 Energy-Sorten“ → aktueller Stand), **B1** (ohne „teils geplant“, keine Interviews), **B2** (P7–P11 als echte Läufe D25), **B7/B8** (Quellen). Einzelheiten in den Kästen. |
| Doku (Doku-Agent) | `../folienentwuerfe.md` (Status; Folie 2, neue Einträge 6, 7, 8b, 12, B4, B5; Folie 8 und 10 neu gefasst), `../fragerunde.md` (Nachtrag 23.10.; F04, F12–F16, F18, F29, F30, F35, F36 neu gefasst, F39 neu), `../methoden.md` §6 (Entscheidung der Gruppe „Rad = Selbstbild, Befragungen als Fremdbild-Abgleich“), `../analogien.md` (§1, §7.2, neu §7.3, §8, §10), `../limbic-map.md` (Raptor- und Tier-Stellen), `../arbeitsplan.md` (Bündel B), `../README.md`, `../buendel-b/folienvorschlag.md` (Kopfvermerk), QUELLEN §3 und §5, LIESMICH (Stand, §6, §12), dieser Abschnitt, VORTRAGSREIFE (Nachtrag). Nach dem Neustart am Wortlaut der gebauten Folien 02, 06–08b, 10, 11, 12, B4, B5 abgeglichen (Folie 2, 5, 11, 12 in `../folienentwuerfe.md` nachgetragen) und alle Zahlen gegen `../buendel-b/auswertung/*.csv` geprüft. |

**Abweichungen von der Vorlage (`folienvorschlag.md`):** Folie 10 übernimmt die Simulation **nicht** ins Rad (E9,
E10, E17 entfallen; Entscheidung 2); 06/07/08b-Ergebnisbereiche heißen „Fremdbild (KI-simuliert)“ statt
„Markeneigenschaften“/„Ins Steuerrad“; Folie 08 zeigt beide Tiere gleichwertig und der Papagei steht in der
Abstimmung (statt nur Notizen, E5/E6); 08b-Fremdbild nur „witziger Kumpel“, Erlebnisse gekürzt, Fußzeile ohne
„‚wandelbar‘: Ausarbeitung E. Knauber“; 07-Bogen unter statt über den Knoten; B4-Fußzeile ohne Skriptnamen; 06 mit
60 Wörtern. Zusätzlich, nicht beauftragt: Konsolenprüfungen „Abgleich mit Folie 10“ in 06, 07, 08, 08b; Marker auf
08b, die vom HOLY-Punkt verdeckt wurden, rücken unter oder über die Linie.

**Geprüft (Bau, 23.10.2026; Ausgaben unter `_test/d26a-*`, `_test/d26b-*`):** `live-abstimmung-test.mjs` 53 von 53,
mit `--mutationen` 26 von 26 kaputten Kopien erkannt; `zeitfenster-e2e.mjs` 58 Prüfungen ohne Fehler, keine externen
Anfragen, `--mutationen` 12 von 12; `referent-test.mjs` 43 von 43. `pruefen.mjs --nur f06,f07,f08,f08b,b4,b5
--schritte` in Editorial, Bento, Keynote, je hell und dunkel, dazu `--live-werte 3,1,7,2,2` (Aussage 60 % = (7+2)/15,
beide Zeilen umrahmt), `--live-werte 3,1,0,0,2` („Papagei oder Chamäleon: keine Stimme“), `--live-offline`,
`--druck`: überall 0 Fehler. Gesamtlauf über alle 23 Folien (`--optional --schritte`): 0 Fehler. Verbleibende
Warnungen: gewollt abgeblendete Zwischenschritte, Wortbudget 06 (60) und 08b (41) sowie die Hinweise „Abgleich mit
Folie 10“, solange Folie 10 im Bau war. Handy-Seite mit lokaler Attrappe (390 × 844, hell und dunkel): Papagei in
Liste und „Danke“-Karte, Stimme kam als Option 3 an. Daten per Skript gegen `repertory-grid-ergebnis.csv`, `hvm.json`,
`aaker-folie-08b.csv`, `aaker-facetten.csv`, `analogien-haeufigkeiten.csv` und `rohdaten-muster.csv` abgeglichen:
0 Abweichungen; `pruefe_synthese.py` ohne Fehler. Sprechtexte per Skript gezählt (1,9 Wörter/s, [Regie] zählt nicht).

**Offen:** Prüfläufe des Synthese-Schritts für Folie 10, 11, 12 und die Querverweise (nicht Teil der Zeilen oben);
Prüfung durch Yannick und Elias (LIESMICH 12.1, 12.3) – besonders Folie 10 (parallel gebaut), Elias'
Bestätigung zu Folie 08 (`../analogien.md` §10), zweizeiliger Titel 08b, wer 06–08b vorträgt (12.4). **Vor dem
Vortrag `marke.js` und `js/abstimmen.js` auf GitHub**, sonst zeigen die Handys den Fuchs. Notizen von Folie 03
(„Folie 6 zeigt derzeit Beispieldaten“) nachziehen. **Exporte** (Abschnitt 15) erst nach Abschluss aller
D26-Bauaufträge neu erzeugen – `export/` zeigt noch den Stand vom 22.10. KI-Nachweis eintragen, dann committen und
pushen (Hauptsitzung).


## 25. Gründerbefragung als eigene Folie 05b, Gründer im Abgleich auf Folie 10 (Sa, 24.10.2026)

**Auftrag:** Lukas Welker wünscht, dass das Gründer-Interview „viel präsenter“ eingebaut ist. Entscheidungen Yannick
(wörtlich): „Eigene Folie + Folie 10 (Empfohlen)“ und „Ja, als Innensicht vs. Außensicht (Empfohlen)“; dazu Zustimmung,
die Sprechtexte von Folie 01 und 02 zu kürzen, damit der Vortrag bei ca. 15 Minuten bleibt. Workflow D27 (Account 1),
Bau durch einen KI-Agenten; Prüfung durch Yannick und Lukas: ☐ offen.

**Regeln des Einbaus:** Gründeraussagen nur aus `../gruenderbefragung.md` (Abschnitt 1, 2.1–2.3, 3, 4); das Transkript im
Gruppenordner wurde nicht geöffnet. Nach 2.3: jede Aussage als Selbstauskunft („Laut Gründer …“, „Horsch 2026, GB“),
nie als Tatsache über die Kundschaft; Paraphrase vor Zitat, wörtlich nur kurze Schlüsselbegriffe der Auswertung
(„mit Abstand“, „meistgeliebte Softdrink-Brand“); die unsicheren Stellen aus 2.2 nicht verwendet; „95 %“ nur in den
Notizen (Rückfrage) mit „laut Gründer, Datengrundlage nicht offengelegt“. Kein Foto des Gründers, kein weiteres Logo.
Das KI-simulierte Fremdbild nur aus `../buendel-b/auswertung/*.csv`. Keine Namen von KI-Modellen in Dateien. Kein Commit
durch den Agenten; `../../ki-nachweis/` unverändert; Exporte erzeugt die Hauptsitzung.

### Bau (D27)

| Bereich | Änderung |
|---|---|
| Folie 05b (neu; `index.html`, `css/folien/05b-gruender.css`) | ID `f05b` → Nummer „05b“ (`js/deck.js` liest Ziffern + Buchstaben aus der ID, wie 01b/08b/09b), Sprung „5 b Enter“; zwischen 05 und 06, damit Lukas' Teil mit der Innensicht beginnt und die KI-simulierte Außensicht (06–08b) folgt. `data-feld="leer"` + `data-rubrik="Selbstbild"`: kein Mini-Rad und kein Sprungziel eines Rad-Felds (mit `persona` hieße der Rahmen auf 02/10/12 „Folien 04–05b“, mit `hub` stünde die Folie im Sprungmenü neben dem Steuerrad). `data-buendel="B"` (Bündel des Sprechers, wie Folie 10), `data-zeit="35"`. Kicker „Gründerbefragung · Mathias Horsch“ mit Pille „Innensicht · Selbstauskunft (n = 1)“; Titel „Laut Gründer verbindet HOLY Geschmack mit gutem Gewissen“ (Frage 1, 9/10). Links (Schritt 0) Steckbrief: Anspruch „bessere Alternative zu normalen Softdrinks“, Zielgruppe „18–55 Jahre, Männer und Frauen“, Wettbewerb „die großen Softdrinkmarken“ (ohne „95 %“), Metazeile zur Art der Befragung. Rechts (Schritt 1) „Kaufgründe · seine Rangfolge“: 1 Geschmack „mit Abstand“, 2 wenig Zucker und Kalorien (ohne den unsicheren Wortlaut und ohne „funktionale Inhaltsstoffe“, 4.3 K11), 3 Preis; Metazeile „nach Firmendaten – nicht vorgelegt“. Rechts unten (Schritt 2) Karten „Emotionaler Nutzen“ (Individualität durchs Selbermischen, Zusammengehörigkeit im HOLY Squad) und „Ziel“ („meistgeliebte Softdrink-Brand“), Verweis „→ Außensicht (KI-simuliert): Folien 06–08b · Abgleich Folie 10“. Fußzeile „Quelle: Horsch, M. (2026): Gründerbefragung, zwei Sprachnachrichten an L. Welker, 18.10.2026 – Selbstauskunft (Horsch 2026, GB)“. Wortbudget 39. Sprechtext für Lukas 23 · 17 · 21 = 61 Wörter ≈ 32 s (+ drei Klicks ≈ 35 s); Notizen mit Stand, Belegen je Zeile und Rückfragen („Ist das nicht nur Werbung?“, „Wie wurde befragt?“, „Und die 95 %?“, „Kaufen die Leute HOLY wirklich wegen des Geschmacks?“ mit K10 aus `repertory-grid-ergebnis.csv`, „Warum kein Koffein?“, „Warum nicht im Steuerrad?“). Kasten „FOLIE 05b“ und Anleitung über der Folie. Kein Skript. |
| Folie 10 (nur Schritt 9) | Spaltenkopf „Selbstbild · Auftritt & Gründer“ (bis dahin „· Identität, unsere Analyse“; „Identität, Auftritt & Gründer“ brach in Editorial zweizeilig um); Zeile 2 Daten `"wo": "Positionierung · Website & Gründer"`; Sprechtext Schritt 9 „– nicht gutes Gewissen wie beim Gründer“ (+3 Wörter: 39 Wörter ≈ 21 s, Folie 146 Wörter ≈ 77 s, Soll 75 s unverändert); Fußzeile „Folien 03–05b“; Notizen (Abgleich Zeile 2 mit GB, Rückfrage Positionierung), Kasten. **Keine fünfte Zeile** „Geschmack ‚mit Abstand‘ ↔ …“: Die Daten tragen sie nur schwach („schmeckt natürlich – künstlich“ 2 von 8, Relevanz nicht erfüllt, HOLY 4,88 zu Ø 4,89, K10; Geschmack war kein Startpunkt im Laddering), und der Abgleich hat höchstens 4 Zeilen – steht als Rückfrage auf 05b und 10. Rad, Lücken, Titel, Urteile unverändert. |
| Folie 01 (Sprechtext, `data-zeit`, Kasten) | 45 → 30 s. Nur Moderation des Rätsels und Wiederholungen gekürzt: Schritt 0 „Ein kurzes Rätsel zum Start: Welche Marke steckt dahinter? Rufen Sie einfach rein.“, Schritt 1 „Etwas schärfer – und jetzt?“, Schritt 2 „Es ist HOLY.“ (Gründung und Marktstart erzählen 02 und die Zeitleiste auf 03), Schritt 3 ohne „mit dem Markensteuerrad nach Esch, mit Desk Research und KI-Tools“ (sagt 02). Gezählt nur der Wortlaut in „…“: 88 → 46 Wörter (≈ 24 s + ca. 6 s Wartezeit). |
| Folie 02 (Sprechtext, `data-zeit`, Methodenkarte, Rückfrage, Kasten) | 60 → 45 s, Sprechtext 124 → 86 Wörter ≈ 45 s (nur Wiederholungen und Füllwörter; die Leitfrage lautet jetzt wie auf der Folie, ohne „heutige“). Klick 1 „Desk Research und Gründerbefragung für den Markenkern“; Methodenkarte Desk Research „Herkunft, Marktrolle + Gründerbefragung“ (bis dahin „Herkunft, Historie, Marktrolle“); Rückfrage „Das Steuerrad erfasst doch die Identität …“ mit Verweis auf 5b. |
| Folie 05 | nur die Regie-Klammer am Ende von Schritt 3 („→ Folie 05b …“) und ein Punkt im Kasten; Sprechtext unverändert (Lukas übernimmt mit „Vorher die Innensicht“). |
| Folie 12 | Sprungliste „Ergebnisse“ + „Innensicht (Gründer)“ → 05b (ohne Feld), Notizen (Sprungziel für Rückfragen zum Gründer), Kasten. Übersicht (O), Referentenansicht und Druck nehmen 05b ohne Änderung auf. |
| B1, B2, B7 | B1: Notizen (Hinweise, Rolle im Steuerrad) und Kasten – Spalte 03 unverändert. B2: Notizen (Gründerbefragung, KI-Nachweis 59–67, nicht in der Tabelle mit 10 Zeilen) und Kasten. B7: Dossier-Zeile „GB (03, 05b, 10, B1, B3)“ (gleiche Zeilenzahl in allen Themen), Kasten; GB-Eintrag unverändert. |
| Doku | `LIESMICH.md` (Stand, Tasten, Abschnitt 3 Zeitplan 14:05, 11 PDF 23 Seiten mit neuer Zuordnung, 12 Nachtrag und Punkte für Yannick und Lukas, 12.5, 12.8, 13), dieser Abschnitt, Abschnitt 2 und 3 (Tabelle, Summe, IDs), 15 (erwartete Exportzahlen), `QUELLEN.md` §5, `../folienentwuerfe.md` (Status, neuer Eintrag Folie 5b, Folie 2 und 10), `../fragerunde.md` (F05, F06 nachgezogen, F40 neu), `../gruenderbefragung.md` §5. |

### Sprechzeit (gezählt per Skript wie `../buendel-b/auswertung/pruefe_synthese.py`, 1,9 Wörter/s; Folie 01/02 nur der Wortlaut in „…“; Folie 10 ohne den optionalen Schritt 10)

| Folie | vorher Wörter ≈ s (Soll) | nachher Wörter ≈ s (Soll) |
|---|---|---|
| 01 | 88 ≈ 46 s + Wartezeit (45) | 46 ≈ 24 s + ca. 6 s Wartezeit (30); nach der Prüfung 50 ≈ 26 s + 3–5 s Ratezeit |
| 02 | 124 ≈ 65 s (60) | 86 ≈ 45 s (45); nach der Prüfung 87 ≈ 46 s, sieben Klicks |
| 05b | – | 61 ≈ 32 s + Klicks (35); nach der Prüfung 64 ≈ 34 s + zwei Klicks |
| 10 | 143 ≈ 75 s (75) | 146 ≈ 77 s (75) |
| alle Hauptfolien | 1.622 Wörter ≈ 14:14 · Soll 840 s = 14:00 | 1.606 Wörter ≈ 14:05 · Soll 845 s = 14:05; nach der Prüfung 1.614 Wörter ≈ 14:09 (mit Zurufen auf 01 und Klicks auf 02 eher ≈ 14:19, LIESMICH 3) |

Die Summen schließen den Dank auf Folie 12 (15 Wörter) ein, nicht aber Wartezeiten auf 01 und die Abstimmung auf 08.
Übrige Folien unverändert (03 82, 04 147, 05 108, 06 149, 07 165, 08 115, 08b 99, 09 113, 09b 106, 11 168 Wörter).

**Geprüft (24.10.2026; Ausgaben unter `_test/d27-*`):** `pruefen.mjs --nur f05b,f10,f02,f12 --schritte` (und f01, f05,
f06, B1, B2, B7) in Editorial, Bento, Keynote und dunkel: 0 Fehler, auf 05b keine Warnung. Screenshots selbst
angesehen (Lesbarkeit, Überlauf, Wortbudget, Kennzeichnung): 05b alle Schritte (Editorial) und Endzustand in Bento,
Keynote, Editorial dunkel und Keynote dunkel; 10 Schritt 9 in Editorial, Bento, Keynote und dunkel (Spaltenkopf
zuerst zweizeilig – gekürzt, siehe oben); 12 (Editorial, Bento); 02 Schritt 1 (Editorial, Keynote); B7 (Bento,
unverändert gegenüber D26); Druckseite 6. Gesamtlauf `pruefen.mjs index.html --schritte --optional` in Editorial,
Bento, Keynote, je hell und dunkel: 24 Folien, 0 Fehler, 0 externe Anfragen, keine Konsolenmeldung (auch die
Abgleich-Prüfungen von 06, 07, 08, 08b und 10); Warnungen nur Wortbudget 03 (48), 04 (46), 06 (60), 08b (41), 11 (57)
wie vorher und gewollt abgeblendete Zwischenschritte. `referent-test.mjs` 43 von 43. Druckprobe
(`--ohne-bilder --druck`): 23 von 23 Seiten, Seite 6 = Folie 05b (per `pdftotext` geprüft, Zuordnung in LIESMICH 11).

**Offen:** Freigabe durch Yannick (Folie 05b, Kürzung 01/02, Schritt 9 auf Folie 10) und Lukas (Sprechtext 05b laut
lesen und stoppen, Inhalt mit dem Transkript abgleichen; LIESMICH 12.1, 12.2). **Exporte** (Abschnitt 15) neu erzeugen –
`export/` (24.10.2026, 09:33) enthält 05b noch nicht. `../arbeitsplan.md` (Ablaufplan, wer spricht) nennt 05b seit der Nacharbeit.
KI-Nachweis eintragen, dann committen und pushen (Hauptsitzung).

### Nacharbeit nach der Prüfung (Sa, 24.10.2026; zwei Prüfer im Workflow D27, umgesetzt von Claude, KI-Nachweis 153)

| Befund (Schwere) | Umsetzung |
|---|---|
| Folie 02: Kürzung verschob den Sinn – das Rad (Selbstbild) klang aus Fremdbild-Methoden gefüllt (mittel) | Klick 1 „… das Selbstbild. Feld für Feld: Desk Research für den Markenkern – dazu die Gründerbefragung als Innensicht,“; Klick 3 „beide KI-simuliert: ein Fremdbild zum Abgleich,“; Ausgleich: „KI hilft überall – geprüft, Prompts im Backup“ gestrichen (sagt die Fußzeile). 87 Wörter ≈ 46 s (Soll 45, sieben Klicks – Generalprobe). Kommentar und Kasten berichtigt („nur Füllwörter“ stimmte nicht). |
| Folie 02: Gründerbefragung unter „Desk Research“ ist methodisch falsch (Primärerhebung) (mittel) | Methodenkarte wieder „Herkunft, Historie, Marktrolle“; GB auf 02 nur im Sprechtext. B7-Notizen, QUELLEN §5, `../gruenderbefragung.md` §5 nachgezogen. |
| Folie 05b: emotionaler Nutzen (Frage 8/11) ohne Zuschreibung (mittel) | Karte „Emotional · seine Sicht“ („Emotionaler Nutzen · seine Sicht“ brach in Editorial um und ließ die rechte Spalte überlaufen); Sprechtext „Emotional sieht er bei seinen Kund:innen …“, „Alles Selbstauskunft“; Belege zu Frage 8/11 und 9/10: stellvertretend beantwortet, Bild des Unternehmens von seiner Kundschaft. 22 · 17 · 25 = 64 Wörter ≈ 34 s. |
| Folie 05b: rechte Spalte lief 10 px aus der Inhaltsfläche, Verweis 14 px über der Quellzeile (mittel) | `05b-gruender.css`: Platz 1 `padding-bottom` 26 → 18 px, `margin-bottom` abstand-3 → abstand-2; `.gb-unten` `padding-top` abstand-5 → abstand-3. Nachgemessen (1920 × 1080): `.gb-rechts` scrollHeight = clientHeight in Editorial, Bento, Keynote und `?druck`; Verweis endet bei y = 986, Quellzeile beginnt bei 1010. |
| Folie 05b: Linien links/rechts auf verschiedener Höhe, Gedankenstrich am Zeilenanfang (niedrig) | Etikett „Steckbrief · laut Gründer“ über dem Steckbrief (gleiche Klasse wie rechts, Metaangabe); Metazeile mit Semikolon statt Gedankenstrich. |
| Folie 05b: Paraphrasen zugespitzt, unsicherer Wortlaut zitiert (niedrig) | „eine bessere Alternative“ (wie Frage 1); Rückfrage „vor allem die großen Softdrinkmarken – Sirup- und Pulveranbieter spielen laut ihm kaum eine Rolle“; „wenn wir in die Daten gucken“ nicht mehr zitiert. |
| Folie 05b/B7: Datum 18.10.2026 nur Dateidatum (niedrig) | Fußzeile und B7 „10/2026“ (KI-Nachweis 53 meldet die Antworten schon am 17.10.); genaues Datum nach Lukas' Bestätigung. |
| Folie 05b: Selbermischen = Individualität ↔ Hürde „selbst anrühren“ nicht verbunden (niedrig) | Neue Rückfrage auf 05b mit K03 (7 von 8, 9 Nennungen, Kontrollgruppe 7 von 8, Differenzierung 4,45, Ideal-Distanz 4,88), Verweis auf `../fragerunde.md` F39; Beleg auf Folie 10 bei „Stärkste Hürde“. |
| Folie 10: Beschriftung machte die Herkunft stärker, als die Quellen tragen (niedrig) | Zeile 2 `"wo": "Positionierung · wie Gründer"` („Genuss mit gutem Gewissen“ = unsere Verdichtung; „wie Website & Gründer“ brach mit dem Knopf zweizeilig um); Notizen: Zeilen 3 und 4 links = Elias' Deutung (H). |
| Folie 10: Gründer nicht anklickbar (niedrig, Verbesserung) | Neues optionales Datenfeld `"folieSelbst": "f05b"` – `js/folien/10-markensteuerrad.js` baut die linke Beschriftung dann wie rechts als Knopf „· Folie 05b →“ (gemeinsame Funktion `verweisKnopf`). Geprüft: Klick springt auf 05b (Endzustand), `aria-label` „… – zur Folie 05b (Gründerbefragung: Innensicht)“, keine Konsolenmeldung. |
| Folie 10: Belege einseitig, Absatzkopf „ca. 19 s“ (niedrig) | Belege: gutes Gewissen in der Simulation 2 von 8 als Gefühl (T1, T2; das Thema steht im Persona-Text – Spalte „im Persona-Block: Grenzfall“, nicht als Grenzfall codiert), ein Leiter-Knoten (T1); Geschmack kritisch 3, positiv 1, „okay“ 1; Absatzkopf „ca. 21 s“. |
| Folie 01: Ratezeit verkürzt, Hinweis „gelbes Oval“ gestrichen (niedrig) | „3 bis 5 Sekunden warten“ und „Vier Buchstaben auf einem gelben Oval – auf einer Dose.“ wieder da; 50 Wörter ≈ 26 s + Ratezeit ≈ 30 s; Ziel-Absatz und Kasten berichtigt (mit Zurufen eher 35 s – Generalprobe). |
| `../fragerunde.md` F05: veralteter Beleg, Rangfolge ohne Vorbehalt, GB-Regel verkürzt (niedrig) | Beleg ersetzt (Notizen Folie 10: Horsch stützt vier Stichworte), „nach Firmendaten, die er nicht vorlegt“, Regel „DR, AN, KA oder LM“ (auch in den 05b-Belegen); F40 „unsere Verdichtung dessen, was Website und Gründer sagen“. |
| `js/deck.js`: „5 b Enter“ auf Folie 08 zählte eine Stimme und schaltete das Schwarzbild ein (niedrig) | Folgt „b“ binnen 1,5 s auf eine vorläufig gezählte Ziffer und gibt es die Folie „<Ziffer>b“, wird die Stimme zurückgenommen und „5b“ in den Puffer gelegt (wie bei „1 0“). Geprüft: 5 b Enter → 05b, gespeicherter Stand wie vorher; 3 b Enter (keine Folie 3b) → Stimme + Schwarzbild wie bisher; 8 b, 1 0 unverändert. |
| Pflicht-Kennzeichnung hing am Schalter `beispieldatenHinweis` (niedrig) | Pillen „KI-simuliert“ (06, 07, 08b, 10, B4, B5) und „Innensicht · Selbstauskunft (n = 1)“ (05b) tragen zusätzlich `.kennzeichnung`; `css/komponenten.css` blendet bei `false` nur noch `.beispiel:not(.kennzeichnung)` aus; Kommentar in `marke.js`. |
| B7-Notizen, Laienfrage Folie 12, LIESMICH (Klicks, Seitenzahlen, export-Stand) (niedrig) | B7-Notizen und Laienfrage („→ Folie 5b“) nachgezogen; LIESMICH-Zahlen nach dem Export (Abschnitt 15) neu gezählt. |
| `werkzeuge/uebersicht.mjs`: Fußnote „Folien 03–05“ (niedrig) | „Folien 03–05b: Entwurf, Freigabe offen“. |
| `../arbeitsplan.md` nannte 05b nicht | Hinweis und Aufgabe für Lukas ergänzt. |

### Nachprüfung D28 (Sa, 24.10.2026; drei Prüfer, nur lesend; umgesetzt von Claude)

Die D27-Nacharbeit war in `index.html` richtig, in den Begleitdateien teils nicht nachgezogen. Umgesetzt:

| Befund (Schwere) | Umsetzung |
|---|---|
| `js/deck.js`: reiner Druck auf die Umschalttaste verwarf die angefangene Nummer – „5 B Enter“ (großes B) sprang nicht, B schaltete das Schwarzbild ein (mittel; älter, betraf auch 08b/09b) | Modifikatortasten (Shift, CapsLock, Control, Alt, AltGraph, Meta) werden gleich nach der Strg/Alt-Prüfung ignoriert. Geprüft (`tasten.cjs`): „5 Shift+B Enter“ und „8 Shift+B Enter“ springen, auch Referent ↔ Publikum; Umschalt+Ziffer auf 08 (−1) unverändert. Hilfe (H) und LIESMICH 2 nennen „5 b Enter“ auf Folie 08. |
| `../folienentwuerfe.md` Folie 5b und 2 auf dem verworfenen Stand (mittel) | Folie 5b: Etikett, Karte „Emotional · seine Sicht“ mit Zuschreibung, Metazeile, Quellzeile 10/2026, Sprechtext (64 Wörter, zwei Klicks), Rückfragen 5–7; Folie 2: Eintrag mit dem Wortlaut nach der Prüfung, Methodenkarte unverändert. |
| LIESMICH 12.1/12.2 beschrieben verworfene Texte; §3 Zeitbilanz veraltet (mittel/niedrig) | 12.1 (01/02, 05b, Folie 10) und 12.2 (Überschrift, 64 Wörter, zwei Klicks, alle Rückfragen, Versanddatum → Fußzeile 05b und B7) nachgezogen; §3: 1.614 Wörter ≈ 14:09, Risiko ≈ 14:19 (Zurufe 01, Klicks 02), Kürzungskandidat Folie 11; 06–08b „B · offen“. |
| Datum 18.10.2026 in Notizen 03, B1, B7, QUELLEN, fragerunde F06 (niedrig) | überall „Dateien vom 18.10.2026; Versanddatum bestätigt Lukas“ bzw. „10/2026“. |
| Folie 05b: Verweis „Folien 06–08b“ zählte Folie 08 (Analogien = Selbstbild) zur Außensicht (niedrig) | „Folien 06, 07, 08b“ (Folie, Kasten, Kommentar, B1-Notiz, Folienentwurf). |
| „als Grenzfall codiert“ las die CSV falsch (niedrig) | „Grenzfall“ steht in der Spalte „im Persona-Block“: Thema im Persona-Text angelegt, womöglich davon angestoßen – Notizen 10, Kasten 10, hier, Folienentwurf. |
| `../gruenderbefragung.md` 2.3 Punkt 4 noch mit RG/LA; Kopf ohne Nachtrag (niedrig) | „DR, AN, KA oder LM (seit 23.10.2026; bis 22.10.2026 auch RG und LA)“; Kopfzeile mit Nachtrag 24.10. |
| 05b: „meist“ fehlte (Frage 9/10); Rückfrage „Warum nicht im Steuerrad?“ unvollständig (niedrig) | „Sonst müsse man meist …“; Rückfrage „Warum steht der Gründer nicht im Steuerrad?“ mit Positionierung, Nutzen und „Community-nah“ als gestützte Stichworte. |
| Folie 10: verdeckte Rad-Karten im Abgleich weiter Tab-Stopps (niedrig) | `10-markensteuerrad.js`: Rad `inert`, solange der Abgleich steht (nicht im Druck). Geprüft: Tab ab Schritt 9 → RG-Knopf, 05b-Knopf, LA, 08b, 08; zurück auf 8 wieder frei. |
| Folie 10: Tippfehler in `folie`/`folieSelbst` fiel nicht auf (niedrig) | Konsolenmeldung „Ziel … gibt es nicht“ (Prüfung gegen das DOM). |
| Rückweg von 05b zum Abgleich (niedrig) | Notizen Folie 10: „1 1 Enter, dann ←“ (1 0 Enter landet in Schritt 0). |
| 05b: „Softdrinks“/„Einwilligung“ allein in der letzten Zeile (niedrig) | `text-wrap: pretty` für Steckbrief-Werte und Metazeile. |
| Klickzahl, Seitenzahlen, export-Stand in LIESMICH; Folie 12 Sprechzettel ohne Innensicht; fragerunde F40 nicht in der Übung; Bausteintabelle ohne `.kennzeichnung`; README FS1 Folienplan; arbeitsplan Zeiten; VORTRAGSREIFE ohne Nachtrag (niedrig) | 67 Klicks (gezählt), Seiten nach dem Export (Abschnitt 15); Sprechzettel-Absatz Folie 12; F40 in der Übungsreihenfolge, Themenzählung; Bausteintabelle oben; Hinweis unter dem Folienplan; Plan-Zeiten 4:15 / 0:35 + 4:50 / 4:25; Nachtrag 24.10. |
| Folie 10: Wortsumme „um eins zu hoch“ (niedrig) | **Nicht übernommen:** Das Zählskript ergibt 12 + 11 + 9 + 13 + 8 + 8 + 7 + 7 + 32 + 39 = 146 Wörter; die Angabe stimmt. |

## 26. Vortragstag Di, 27.10.2026 (Sa, 24.10.2026)

Laut Yannick (KI-Nachweis 159) ist der Vortrag am **Dienstag, 27.10.2026** (bis dahin geplant Mo, 26.10.; die
Vorlesungsfolien, Stenger S. 57, nennen „am 26.10.“ – in `../abgleich-vorlesung.md` vermerkt). Umgestellt:

| Bereich | Änderung |
|---|---|
| `marke.js` | `datum: '2026-10-27'` – Titelfolie zeigt „Dienstag, 27. Oktober 2026“ (Wochentag aus `js/deck.js`); Kommentare nennen den künftigen Rundennamen `'vortrag-2026-10-27'`. **`runde` bleibt `'probe'`** bis zur Umstellung nach der Generalprobe (spätestens Mo, 26.10.). |
| `index.html` | Kästen „VOR DEM 27.10. ÄNDERN / PRÜFEN“, Kopfkommentar, Folie 08 (Rundenname in Kasten und Notizen), 03/09 (Ablesen vor dem 27.10.). |
| Live-Abstimmung | `live-abstimmung/ANLEITUNG.md` (Rundenname, „spätestens am Vortag Mo, 26.10.“, Quellenzeile 27.10.2026), `abstimmen.html` und `apps-script.gs` (nur Kommentare). Testdaten „2026-10-26“ in `live-abstimmung-test.mjs` und die Textschutz-Probe im Skript bleiben (beliebige Werte). |
| Doku | `LIESMICH.md` (Kopf, Abschnitt 6, Termine in 12, „Puffer Mo 26.10.“), Abschnitt 2 hier (Platzhalter `data-datum`), `VORTRAGSREIFE.md` (Nachtrag), `../arbeitsplan.md`, `../README.md`, `../../README.md`, Startseite `../../index.html`, `../aufgaben-im-detail.html`, `../aufgabenuebersicht.html`, `../fragerunde.md`, `../folienentwuerfe.md`, `../gruenderbefragung.md`, `../kommunikationsanalyse.md`, `../markenkompetenz.md`, `../abgleich-vorlesung.md` (Vermerk). |
| Unverändert (datierte Aufzeichnungen) | KI-Nachweis und Workflow-Skripte, Recherche-Dossier (13./14.10.), `../dossier-buendel-b.*`, `../buendel-b/folienvorschlag.md`, `_entwuerfe/`, ältere Tabellen in diesem Dokument und der Hauptteil von `VORTRAGSREIFE.md`. |

Danach Prüfung durch einen Unteragenten (D29, nur lesend; 0 hoch, 3 mittel, 7 niedrig), umgesetzt: Folienbilder
`export/folien/*.png` und `export/uebersicht.png` neu (zeigten noch den alten Termin), die beiden Aufgaben-PDFs
`../Fallstudie-1_Aufgaben-im-Detail.pdf` und `../Fallstudie-1_Aufgaben-und-Aufteilung.pdf` aus den HTML-Seiten neu
gedruckt (A4, Kopfzeile „Vortragstermin aktualisiert 24.10.2026“; 8 bzw. 6 Seiten), Frist der Runde in
`../fragerunde.md` F29 und LIESMICH 12 („spätestens Mo 26.10.“), eigener Nachtrag in `VORTRAGSREIFE.md`,
`../abgleich-vorlesung.md` (Status Termin ◐, Befund #15 erledigt), `../aufgaben-im-detail.html` (am Vortragstag bei der
eigenen Live-Abstimmung nicht „Zurücksetzen“). Geprüft: `pruefen.mjs --schritte --optional` in Editorial, Bento,
Keynote, dunkel je 0 Fehler; `referent-test.mjs` 43/43; `live-abstimmung-test.mjs` 53/53; `zeitfenster-e2e.mjs` 58/58;
`pruefe_synthese.py` ohne Fehler; PDF 23 Seiten, Seite 1 und 15 „Dienstag, 27. Oktober 2026“; f01.png angesehen.


## 27. Skript der Live-Abstimmung bei Google aktualisiert (So, 25.10.2026)

Yannick hat die Fassung 20.10.2026 von `live-abstimmung/apps-script.gs` nach `live-abstimmung/ANLEITUNG.md`
(„Skript aktualisieren“) bei Google eingespielt (KI-Nachweis 173–174). Claude hat nur lesend geprüft
(`?aktion=fassung` → „(Skript-Fassung 20.10.2026)“; Stand mit `minuten=30` → `"minuten":30`) und den Lasttest
zweimal mit `--anzahl 20` laufen lassen (eigene Runden `lasttest-20261025-210108` und `…-210251`): je 20 von 20 im
ersten Versuch, „Danke“ nach höchstens 5,5 bzw. 5,0 s, Folie nie „offline“, Gegenprobe Zeitfenster richtig –
BESTANDEN. Nachgezogen: Hinweis oben in der ANLEITUNG, LIESMICH (Abschnitt 1, 6 und Checkliste 12), `VORTRAGSREIFE.md`
(Nachtrag), `../fragerunde.md` (Kopf, F29, Aufgabentabelle), `../vortragsskript.md` und PDF (Folie 08). Keine
Änderung am Code. Offen: Runde `vortrag-2026-10-27` (spätestens Mo, 26.10.), Internet im Hörsaal.
