# AUTOREN.md – Schnittstelle für alle, die Folien ändern (Fallstudie 2, Thema „Pfad“)

Diese Datei beschreibt, wie die Folien der Web-Präsentation Fallstudie 2 „Customer Journey“ (Marke **HOLY**) aufgebaut
sind und wie man sie ändert. Die Engine ist die aus Fallstudie 1, **unverändert** (`js/deck.js`, `js/komponenten.js`,
`css/deck.css`, `css/komponenten.css`, `css/tokens.css`); ausführlich: FS1 `AUTOREN.md` Abschnitt 3–5 und 7–9.
Neu sind nur das Thema „Pfad“ und die Folien. Stand 08.11.2026 – finale Fassung (KI-gestützt, D12), Prüfung durch die
Gruppe offen. Keine eigene Erhebung (Entscheidung Yannick 08.11.2026, KI-Nachweis FS2 Nr. 26) – Abschnitt 14.

## 1. Regeln (Pflicht)

| Regel | Wert (Gestaltungsplan) |
|---|---|
| Bühne | 1920 × 1080; Raster 12 Spalten à 109,33 px, Rinne 32 px, Rand 128 px; Spalte n beginnt bei x = 128 + (n − 1) · 141,33 (3.5) |
| Titel | Kernaussage als Satz, Bricolage 84 px (Backup 56 px), höchstens 2 Zeilen |
| Inhalt / Meta | Inhalt ≥ 28 px; Herleitung 24 px, Quelle und Fußhinweis 22 px, je **eine** Zeile, mit `data-meta` |
| Farben | nur Tokens aus `pfad.css` (`--p-…`); **Gelb nie als Schrift oder konturlose Linie auf Creme**; auf Gelb nur Schwarz und Schiefer (3.3) |
| Fakten | nur mit Befund-ID und Status aus dem Dossier; keine Zahl ohne Quelle; **keine eigene Erhebung** (seit 08.11.2026): keine O-Töne, Interviewzahlen, Workshop-Ergebnisse, Selbstversuchsdaten oder eigenen Fotos erfinden; wo eine Aussage abgeleitet ist, Grundlage nennen (Dossier, Abruf, KI-gestützte Stichprobe) und Urteile als H kennzeichnen; keine „offen“-Platzhalter auf den Folien |
| Bilder | HOLY-Logo nur als gelbes Oval auf 01 und 09 (mit Einverständnis, KI-Nachweis FS2 Nr. 12, 03.11.2026); Fremdbilder (Screenshots, Werbe- und Community-Bilder von HOLY, Logos der Vorbilder) nur über `fremdbilder/register.js` und `data-intern`, je Folie mit Bildnachweis-Zeile – Veröffentlichung von der Gruppe beschlossen (KI-Nachweis FS2 Nr. 17), keine Genehmigung der Rechteinhaber eingeholt; nicht kommerziell, für die Lehrveranstaltung; keine eigenen Fotos der Gruppe. Fremdbilder ohne Verwendung auf einer Folie nicht veröffentlichen (nach `intern/`); keine Namen von Privatpersonen im Nachweis. Eigene Fotos zuerst nach `intern/` (ausgeschlossen), veröffentlichen erst nach Sichtung durch die Gruppe (Abschnitt 10; Plan 4, 11.5) |
| Video | nur `video/gruender-video.mp4` auf 09, per Pfad (`data-quelle`); veröffentlicht mit Zustimmung des Gründers (KI-Nachweis FS2 Nr. 18); keine KI-Transkription, keine Zitate aus dem Video |
| Was es nicht gibt | Karten, Pillen, Kicker, Mini-Steuerrad, Sticker, weiche Schatten, Live-Abstimmung, `iframe`, eigenes `data-modus` an einer Folie (3.7) |
| Sprache, Anrede | Deutsch, Publikum gesiezt; keine Modellbezeichnungen in Dateien |

## 2. Folien-Format

```html
<section class="folie p-folie" id="f05" data-titel="A3 Überleitungen im IST" data-zeit="95" data-buendel="B"
         data-feld="leer" data-layout="leer" data-laufkopf="aus" data-lauf="2">
  <header class="p-kopf">
    <h2 class="p-titel">Kernaussage als Satz</h2>
    <p class="p-herleitung" data-meta><b>So kommen wir darauf:</b> …</p>
  </header>
  … Inhalt, absolut auf dem Raster; Aufbau mit data-schritt="1", "2" …
  <p class="p-quelle" data-meta>Stenger S. … · ✔ … · ✎ … · ~ … · H …</p>
  <p class="p-fuss" data-meta>Studentische Fallstudie, keine Verbindung zu <span data-marke>HOLY</span></p>
  <aside class="notizen"><p data-schritt="0">Sprechtext …</p><p>Belege, Rückfragen …</p></aside>
</section>
```

| Attribut | Bedeutung |
|---|---|
| `data-lauf` | Laufleiste nach S. 111 (setzt `js/folien/pfad.js`): `""` ohne aktiven Schritt (02), `"1"`–`"5"`, `"zu"` = geschlossen (09) |
| `data-buehne="gelb"` | gelbe Bühne (01, 08, 09), feste Werte in beiden Modi; Rückfall `?buehne=schwarz` |
| `data-buendel` | Sprechblock A (01–03), B (04–06), C (07–09) nach Plan 9.3 – **keine Personen**; Backup `alle` |
| `data-zeit` | Sollzeit in s (Summe 710 s); Backup `0` |
| Bildkachel `data-status` | `leer` (beschrifteter Platzhalter im Rückfall ohne Fremdbilder; bis D12 `offen`) · `frei` · `rueckfall` · `aus` (Zusatzbild nur in der Fassung mit Bildern; seit D07 nicht verwendet) (LIESMICH §7) |
| `data-intern` | Schlüssel in `fremdbilder/register.js`; `data-intern-optional` = Fehlen erlaubt (Abschnitt 10). Name aus der Zeit vor der Veröffentlichung, bleibt |
| `data-dx` | waagerechte Verschiebung einer Kachel im Journey-Raster in px (Folie 04: K6 −20) |

`data-feld="leer"`, `data-layout="leer"` und `data-laufkopf="aus"` schalten Kopfzeile und Mini-Steuerrad der Engine
ab; alle Bausteine einer `p-folie` liegen absolut (`pfad.css` §4).

## 3. Journey-Raster und Pfad (Folie 04, 05, 06)

Im Container `<div class="p-karte" data-karte>` tragen Phasenköpfe `data-phase`, Zeilennamen `data-zeile`, Kacheln und
Knoten beides. `js/folien/pfad.js` liest die Maße aus dem JSON der Folie (`<script type="application/json"
class="daten">` → `karte`: `kopfY`, `regelY`, `zeilen` bzw. `zeilenOben`, `unten`, `kachel`), setzt alles aufs Raster,
zieht Regel, Zeilen- und Phasenlinien und zeichnet den Pfad:

- `wege[]` mit `art: "zentral"` und `stationen: ["k1", "k2", …]` → Linienplan aus den Kachelmitten (waagerecht in der
  Zeile, senkrecht in der Rinnenmitte, Eckradius 34 px), `ende: "spitze"` = Pfeilspitze an x = 1792;
  `art: "neben"` mit `punkte` (Zahl oder `mitte:k1`, `rinne:4` …) = gestrichelter Nebenweg; `art: "offen"` = offenes Ende.
- `bruecken[]` (Folie 05) mit `urteil`: `traegt` (durchgehend), `wackelt` (zwei Stücke, 12 px versetzt), `bricht`
  (Ende vor der Rinne, zwei Reste).
- Folie 06: Touchpoints `.e6-tp` mit `data-platz` 1–3 und `data-reihe` (Reihenfolge in der Zelle); Platz 1 trägt
  `data-id` und liegt auf dem Pfad.

Eine Station verschieben = `data-phase`/`data-zeile` ändern; der Pfad folgt. Alle erzeugten Pfade tragen
`data-schritt` und `data-animation="zeichnen"` aus dem JSON.

## 4. Schritte (wie FS1)

Elemente mit `data-schritt="n"` erscheinen beim n-ten Klick; Ersetzungen über `:has()` (01: Titel ersetzt die Frage;
09: Videobühne ersetzt das Fazit, „Fragen?“ blendet beides zurück). Folie 09 nutzt die Hooks `betreten`, `schritt`,
`verlassen` (`js/folien/09-fazit.js`).

## 5. Ändern und prüfen

Nach jeder Änderung: `node werkzeuge/pruefen.mjs index.html --ausgabe _test/pruefung --schritte` (LIESMICH §8), Ziel
0 Fehler; Bildschirmfotos in `_test/pruefung/` ansehen (Überläufe, Gelb ohne Kontur, Ocker).

## 6. Abweichungen vom Gestaltungsplan (beim Bau am 03.11.2026, zur Prüfung durch die Gruppe)

1. **Titel zweizeilig:** Alle Titel aus Folienplan 5.1 brauchen bei 84 px zwei Zeilen (gemessen 1.945–2.546 px
   Satzbreite). Deshalb beginnt der Inhalt bei y ≈ 370 statt 296.
2. **Folie 04:** Kacheln seit 03.11.2026 (D06) 232 × 130 statt 240 × 135 (vorher 200 × 112), Zeilen 82 px; Legende im
   Kopf der Zeilenspalte; Namen von K2 und K4 über der Kachel; K6 um 20 px nach links (Pfeilspitze sichtbar). Platzhalter zeigen nur „Screenshot/Foto · offen“ – die Unterschrift als
   Protokoll kommt mit dem Foto.
3. **Folie 03:** Zählung 84 px statt 160 px, seit D06 vor jedem Band; Bänder über die volle Breite, Kacheln 258 × 122;
   Farbproben 36 px (5 × 2) im freien Teil des Bands Paid, Status ohne Farbnamen; Bildgrößen gleich, bis die
   Kurzinterviews vorliegen.
4. **Folie 05:** Urteile im Wechsel über (Ü1, Ü3) und unter (Ü2, Ü4) dem Pfad, damit die Belegzeilen Platz haben;
   Stationsnamen in den Kacheln als Bildunterschrift (`data-meta`).
5. **Folie 06:** Bezeichnungen gekürzt (volle Namen im Sprechtext und B2); Zeilenhöhen ungleich (Media-Werbung schmal,
   Webshop und E-Mail mit zwei Einträgen); Herleitungszeile = Kriterienzeile; Workshop-Kachel als Anschnitt rechts.
6. **Folie 07:** je Phase **ein** Vorbild aus Dossier 7a ausgewählt (X01, X04, X08, X12, X14; Nebenweg X16) – die
   Auswahl ist ein Vorschlag dieses Baus; alle 17 Fälle in B6. Seit D07 in der Fassung mit Bildern nur die Logos
   (Abschnitt 11).
7. **Folie 08:** Handyrahmen 220 px breit statt rund 300 px (Titel zweizeilig, Kennzeichnungszeile darunter).
8. **Folie 09:** Klick 1 = Videobühne mit Handyrahmen mittig (Fazit ausgeblendet), Klick 2 = Videobühne aus, Fazit
   wieder sichtbar, „Fragen?“ und Sprungliste – so steht im Druck/PDF der Endzustand ohne Video. Dritter Fazit-Satz
   („Je Überleitung messen, Mittel gezielt einsetzen.“) frei nach Schritt 5 (S. 111) formuliert.
9. **Quellzeilen** auf eine Zeile gekürzt (≤ 1.110 px); vollständige Belege in den Notizen.
10. **Schrift:** Inter statt Libre Franklin (liegt nicht im Repository, M5 offen).
11. **B7:** Illustration Marco aus FS1 nicht eingebunden (FS1-Bilder wurden bewusst nicht übernommen), als „offen“ vermerkt.
12. **Wortbudget** auch auf 02 (53), 08 (41) und 09 (53) über 40 (Plan: nur 03–07).

## 7. Prüfstand 03.11.2026

`pruefen.mjs --schritte`: 0 Fehler, 17 Warnungen (Wortbudget, 24-/26-px-Notizen und -Belegzeilen laut Plan 3.6),
0 externe Anfragen; hell mit Notfall-PDF (18 Seiten = 18 Folien), dunkel, Themen Bento und Keynote je 0 Fehler.
Satzspiegel-Prüfung (eigenes Skript im Arbeitsordner, kein Teil des Repositorys): kein Text außerhalb x 126–1794.
Funktionstest Folie 09 mit absichtlich fehlender Videodatei: Rückfall-Rahmen erscheint, in `?aufnahme` wird keine
Quelle gesetzt, keine Anfrage an die echte Datei, Sprungliste springt (B3). Klicks 23, Sollzeit 710 s (LIESMICH §3).

## 8. Entstehung

Entstanden **KI-gestützt mit Claude Code** im Workflow „fs2-bau“ am 03.11.2026 (KI-Nachweis FS2, Nr. 11, Delegation
D05; `../../ki-nachweis/ki-nachweis-fallstudie-2.md`), auf Wunsch von Yannick Heisler („Fang an mit dem Bau und ich
schaue es mir dann an“). Grundlage: `../gestaltungsplan.md` (Stand 03.11.2026), Dossier mit Kapitel 7a,
`../konzept-website/` (Bildschirmfotos), Persona FS1, Vorlesung S. 107–129. Keine neue Websuche. Die Videobotschaft
wurde nur per Pfad eingebunden, nicht angesehen und nicht transkribiert. Prüfung durch die Gruppe offen; nichts ist
committet.

## 9. Korrekturen nach der Abnahme (03.11.2026, Hauptsitzung)

Zwei Prüfer des Workflows (Inhalt/Recht, Technik) haben den Bau abgenommen; die Hauptsitzung hat die Befunde so
umgesetzt (KI-Nachweis FS2, Eintrag 11):

- **Logo:** gelbes Oval auf 01 (über dem Titel, mit Klick 1) und 09 (rechts neben dem Titel), je mit Quellenzeile;
  `marke.js → logoTitel`. Fußzeilen: „nicht im Auftrag von HOLY“ statt „keine Verbindung zu HOLY“ (Logo und
  Videobotschaft mit Einverständnis des Gründers).
- **05:** Ü1 „wackelt“ statt „trägt“ (eigener Maßstab 6.7.1: Umweg über die Suche); „Produkt&shy;seite“ bricht in der Kachel um.
- **06:** Herleitung nennt das Entscheidungskriterium für Platz 1 (schließt den Bruch aus 05, von HOLY voll gestaltbar);
  Rückfrage „Warum nicht die Suchmaschine?“ in den Notizen und in B2.
- **07:** „öffentlich belegt“ präzisiert: Mechanik belegt, Wirkung meist nur Firmenangabe (B6).
- **08:** neue Bildschirmfotos (Produktseite mit 50er-Dose ab „Packung wählen“, Danke-Seite ab „So geht's weiter“),
  Anmerkungen passend zum Bild; Herleitung mit Bezug zum Markensteuerrad aus FS1; Sprechtext ohne Zuschreibung, wer die
  Konzept-Webseite angeregt hat.
- **04, B1, B2, B5, B6, B9:** Selbstversuch, Workshop, Interviews und Gegenprüfung nicht mehr als erledigt dargestellt
  (Vermerk „[erst nach … so sprechen]“; B6: KI-gestützt gegengeprüft, Prüfung durch die Gruppe offen).
- **04:** Belegzeile am Nebenweg als Inhalt in 26 px statt Meta in 22 px. **09:** `data-ueberlauf-ok` nur noch am Pfad,
  die Bildleiste liegt im Satzspiegel.
- Nicht umgesetzt (offen, LIESMICH §10): Rückfall-Grafiken für die Bildkacheln, Wortbudget 02/07/09,
  `referent-test.mjs` für FS2, Video-Test im Repository.

## 10. Fassung mit Bildern (03.11.2026, Delegation D06; seit D07 veröffentlicht)

Auftrag von Yannick (03.11.2026, wörtlich): „Lade dir die Grafiken online runter die du brauchst von Holy die Webseite
und die Präsentation muss gut aussehen rechte sind nicht wichtig wir nutzen es weder kommerziell noch öffentlich nur
privat in der uni“. Umsetzung KI-gestützt im Workflow D06 (Schritt „Einbau Präsentation“), Bedienung: LIESMICH §12,
Herkunft: QUELLEN §4a. **Verlauf:** bis 03.11.2026 lagen die Bilder als „interne Fassung“ im ausgeschlossenen Ordner
`intern/`. Danach hat Yannick die Veröffentlichung erlaubt (KI-Nachweis FS2 Nr. 17; Video: Zustimmung des Gründers über
Yannick, Nr. 18). Eine Genehmigung der Rechteinhaber für die Fremdbilder wurde nicht eingeholt (Gestaltungsplan 1.2, 4). Seitdem liegen die Bilder versioniert in `fremdbilder/` (Liste `fremdbilder/register.js`), das Video
in `video/gruender-video.mp4` – nicht kommerziell, für die Lehrveranstaltung; `intern/` enthält nur noch Rohmaterial.
**Begriffe:** „Fassung mit Bildern“ = Standard (Repository, GitHub Pages, Hörsaal); „Rückfall ohne Fremdbilder“ = nur,
wenn `fremdbilder/register.js` fehlt oder per Schalter (`?kacheln=rueckfall`, `pruefen.mjs --oeffentlich`).
**Namen aus der Zeit vor der Veröffentlichung** bleiben aus technischen Gründen: `window.INTERN_BILDER`, `data-intern*`,
`.p-intern-logo`, `js/folien/intern-bilder.js`, `html[data-fassung="intern"]` (Werte `oeffentlich`,
`oeffentlich-ansicht` = Rückfall), `--oeffentlich`, Berichtsteil `interneBilder`. Die Tabellen unten beschreiben den
Stand von D06; Änderungen aus D07 stehen in Abschnitt 11.

**Technik**

| Baustein | Datei | Regel |
|---|---|---|
| Daten | `fremdbilder/register.js` (versioniert; bis 03.11.2026 `intern/bilder.js`) | `window.INTERN_BILDER = { schlüssel: { datei, alt, nachweis, motiv, platz, quelle, pixel } }`; Schlüssel `b01`, `b04`, `m03-…`, `k…-04/-05/-09`, `v07-…`, `konzept-0n` |
| Einsetzen | `js/folien/intern-bilder.js` (nach `fremdbilder/register.js`, vor `pfad.js` und dem Start der Engine) | `data-intern` an Kachel → `<img>` + `data-status="frei"`; an `<img>` → Quelle tauschen; sonst (Logo) → `<img class="p-intern-logo">` vor dem Text. Status in `data-intern-status` (`gesetzt` · `fehler` · `fehlt`); bei Ladefehler zurück zum Zustand ohne Bild |
| Beschriftung im Bild | `.p-bildlabel` (`pfad.css` 5.23) | schwarzes Band, Creme 22 px, `data-meta`; nur bei `data-status="frei"`; `--oben`, `--rechts` für die Ecke; nur wo das Bild sich nicht selbst erklärt und nichts Wichtiges verdeckt |
| Bildnachweis je Folie | `<p class="p-bildquelle" data-meta hidden>` (unter Quelle und Fuß, `bottom: 14px`) | höchstens 1.664 px (Satzspiegel), Stand und Urheber; das Skript zeigt sie nur bei eingesetztem Bild; Notizen bekommen den vollen Nachweis je Bild (`.p-intern-nachweis`) |
| Zusatzbild | `data-status="aus"` | im Rückfall unsichtbar (bis D07 Folie 07, Bild des Vorbilds; derzeit nicht verwendet) |
| Zustände | `pfad.css` 5.6 | Ausblendregeln mit `!important`, damit Folien-CSS mit ID (z. B. `#f01 .e1-foto .p-platzhalter`) den Platzhalter nicht über das Bild legt |

**Umbau der Folien für die Bilder** (Klicks, Sollzeiten und Sprechtexte unverändert; geprüft gegen den Stand vor D06)

| Folie | Änderung |
|---|---|
| 01 | Titelbild b01 = HOLY-Produktbild Raspberry Raptor, Beschriftung „Produktbild von HOLY (Werbebild)“ |
| 02 | Persona-Bild b04 = Community-Foto als Symbolbild, Beschriftung „Symbolbild: Nachtschicht mit Shaker – nicht Marco“ |
| 03 | Moodboard neu gesetzt: Bänder über die volle Breite, Kacheln 258 × 122 (vorher 190 × 90), Zählung vor jedem Band (Klick 1), Farb- und Formproben 5 × 2 im freien Teil des Bands Paid, Hinweise rechts neben Earned; „Codierung der Bewertungen: offen“ in der Legende; Bewertungen-Kachel `data-art="screenshot"` |
| 04 | Kacheln 232 × 130 (vorher 200 × 112), Zeilen 82 px (JSON `karte`), Name K4 über der Kachel, Hinweis „Vom Regal kein Weg …“ in der Spalte Bindung, K6 mit `data-dx="-20"` (neu in `pfad.js`) |
| 05 | Kacheln 200 × 112 (vorher 160 × 90), Zeile 676, untere Urteile 10 px tiefer; Stationsname als Beschriftung im Bild |
| 07 | je Zeile ein Bild des Vorbilds (144 × 81) links in der Spalte „Vorbild“, Logo (32 px hoch, dunkel auf heller Platte) statt des fett gesetzten Namens (`.e7-marke`), Zeilen 95 px |
| 08 | `data-intern="konzept-01"` … `"konzept-05"` mit `data-intern-optional` an den fünf Bildschirmfotos |
| 09 | Bildleiste 192 × 108 (vorher 132 × 74), Pfad y = 762, „Fragen?“ 10 px tiefer; Bildnachweis während der Videobühne ausgeblendet |
| B8 | Bildnachweis-Absatz auf beide Fassungen umgeschrieben |

**Prüfwerkzeug:** `werkzeuge/pruefen.mjs` neu: `--oeffentlich` (sperrt heute `fremdbilder/` per Route = Rückfall ohne
Fremdbilder), Warnung bei fehlender `fremdbilder/register.js`, Prüfung der Schlüssel, geladenen Dateien, Verzerrung
(Inhaltsfläche gegen Datei, ohne `object-fit`), Hochrechnung (Warnung „unscharf“), Bildnachweis-Zeile (sichtbar, im
Satzspiegel); im Bericht `interneBilder`. Die Exportsperre (Abbruch bei Ausgabe nach `export/`/`bilder/` ohne
`--oeffentlich`) ist seit der Veröffentlichung entfernt.

**Prüfstand D06 (03.11.2026, damals noch aus `intern/`):** intern hell und dunkel `--schritte` je 0 Fehler,
17 Warnungen (wie vor D06: Wortbudget, 24-/26-px-Notizen); öffentlich `--oeffentlich --schritte --druck` 0 Fehler, PDF
18 Seiten; Kopie ohne `intern/` 0 Fehler + Warnung; Gegenprobe gelöschte Datei → Platzhalter, Fehler gemeldet.
Sichtprüfung der Endzustände 01–09 und Stichproben 03, 04, 07 (ohne Bilder) und 07 (dunkel).

**Offen:** eigene Fotos (b01, b04, K1–K6) statt Werbe-/Community-Bildern; b12, b15, „Tipp unter Kollegen“ bleiben
ohne Bild; Sichtung der Bilder durch die Gruppe (Kontaktbogen `intern/kontaktbogen.png`).

## 11. Veröffentlichung und Abnahme-Befunde (03.11.2026, D07)

Auftrag aus dem Workflow nach den Entscheidungen Nr. 17 (Bilder, Beschluss der Gruppe) und Nr. 18 (Video, Zustimmung des Gründers): Begriffe in Kommentaren, Texten und
Doku umstellen („Fassung mit Bildern“, „Rückfall ohne Fremdbilder“, „veröffentlicht mit Freigabe … nicht kommerziell,
für die Lehrveranstaltung; keine eigenen Fotos der Gruppe“ – seit D08 präzisiert, Abschnitt 12) und die Befunde der Abnahme D06 umsetzen. KI-gestützt;
Klicks (23), Sollzeiten (710 s) unverändert, Sprechtext nur auf 04 geändert.

| Folie | Änderung (Befund) |
|---|---|
| 02 | Beschriftung „Symbolbild Schichtarbeit – nicht Marco“ / „(Lokführer aus der HOLY-Community)“ (zweizeilig; in einer Zeile reicht die Breite ab x = 128 nicht); Notiz: Antwort auf „Ist Marco Lokführer?“ |
| 03 | Blog-Kachel: Beschriftung „Blog: 0 Beiträge“ (✔ M01, ✔ L39), neuer Ausschnitt `m03-blog` (Desktop), damit die Beschriftung über dem Knopf statt über dem Satz liegt; `m03-dose-shaker` neu gesetzt (Produkt oben rechts); „Tipp unter Kollegen“ (Klasse `e3-k--tipp`) in der Fassung mit Bildern Creme mit gestricheltem 3-px-Rand wie die Leerstelle auf 04; Notiz „Der Blog ist leer (0 Beiträge …)“ |
| 04 | Sprechtext Klick 1: „Der Blog ist leer (0 Beiträge).“ statt „Einen Blog gibt es nicht.“ (+1 Wort); Bildquellzeile „Community-Foto HOLY (Symbolbild, nicht Marco)“ |
| 05 | K6 ohne Beschriftung „Squad“ (verdeckte die Überschrift des Bildes); Bildquellzeile wie 04 |
| 07 | nur noch Logos: die sechs `figure.e7-bild` (144 × 81) entfernt, CSS dazu entfernt; Logos einfarbig #1D1D1B in doppelter Anzeigehöhe, Höhe je Logo im CSS (YouTube 26, Apple 30, zooplus 28, OTTO 24, Philips 22, Pampers 34 px), im Modus dunkel `filter: invert(1)` statt heller Platte; zooplus aus der weißen Fassung ohne grünen Kasten. B6 geprüft: neben der Tabelle kein Platz für sechs Bilder ≥ 360 × 203 → nicht eingebaut (seit D08 zurückgehalten, nicht veröffentlicht, Abschnitt 12). `v07-otto` neu als Textausschnitt (`v07-otto.png`, `v07-otto.jpg` gelöscht). Bildquellzeile „Logos: … · einfarbig, nur zur Kennzeichnung der Vorbilder · Abruf 03.11.2026“ |
| 08 | Kasten, Bildquellzeile und Notiz auf `fremdbilder/` und die Veröffentlichung umgestellt (Notiz: Konzept-Webseite seit 03.11. über GitHub Pages erreichbar, Wortmarke mit Einverständnis, Produktbilder veröffentlicht – seit D08 präzisiert: Beschluss der Gruppe, keine Genehmigung von HOLY eingeholt) |
| 09 | Rückfall-Text „Videobotschaft des Gründers – in der Web-Präsentation auf Folie 09“ (seit D08 zwei Texte, Abschnitt 12); Kasten und `09-fazit.js`: Quelle `video/gruender-video.mp4`, veröffentlicht (Nr. 18); Bildquellzeile wie 04 |
| B1, B8 | B1-Notiz: eigene Fotos zuerst nach `intern/`, veröffentlichen nach Sichtung; B8: Bilder und Video veröffentlicht (Nr. 17, 18), Kernsatz der Notiz entsprechend (Backup, ohne Sollzeit; seit D08 Rechtestatus genau, Abschnitt 12) |

**Prüfstand D07:** Fassung mit Bildern hell und dunkel `--schritte` je 0 Fehler, 17 Warnungen, 38 Fremdbilder
eingesetzt; Rückfall `--oeffentlich --schritte --druck` 0 Fehler, 17 Warnungen, PDF 18 Seiten. Funktionstest 09 mit
synthetischem WebM (Route): Video startet mit Klick 1 mit Ton, kein Rahmen; ohne Route (Test-Chromium ohne H.264) und
mit `?aufnahme` der Rahmen mit neuem Text. Sichtprüfung der Endzustände 02, 03, 04, 05, 07, 09 und B8 hell sowie 02, 03,
07, 09 dunkel und 03 im Rückfall.

## 12. Befunde der Abnahme D07 (03.11.2026, D08)

Auftrag aus dem Workflow: Befunde P1–P11 der Abnahme D07 prüfen und umsetzen, KI-gestützt; Klicks (23), Sollzeiten
(710 s) und Sprechtexte 01–09 unverändert. **Rechtestatus** (so überall formuliert, keine Rechtsberatung): Fremdbilder –
Veröffentlichung von der Gruppe beschlossen (KI-Nachweis FS2 Nr. 17), keine Genehmigung der Rechteinhaber eingeholt;
HOLY-Logo mit Einverständnis (Nr. 12); Videobotschaft mit Zustimmung des Gründers, auch öffentlich online (Nr. 18);
nicht kommerziell, für die Lehrveranstaltung, mit Bildnachweis. „Mit Freigabe“ allein steht nicht mehr bei Fremdbildern.

| Folie / Datei | Änderung (Befund) |
|---|---|
| `../gestaltungsplan.md` | Abweichung ehrlich vermerkt: 1.2 (Social-Media-Bilder, HOLY-Produktfotos, Repository), 4 (Einleitung, Ablage, b05, b08, b14, b21, v01), 0 Nr. 4, R3, 7.3, 7.4, 9.5, 11.2 (Folie 08, Video), 11.5, M8, 13.1 Nr. 9/11, 13.2 Nr. 16, 13.3 (P1) |
| B8 | sichtbarer Text „Bilder“ in zwei Absätzen mit dem Rechtestatus, Kernsatz der Notiz und ein Absatz „Rechtestatus genau“ (P2) |
| `fremdbilder/register.js` | Kopf ohne „mit Freigabe“; `konzept-01` … `-05` im Wortlaut des Website-Baus (P3); `b04-persona` ohne Vornamen (P4); `m03-dose-shaker` „Packshot … · Werbebild“ (P8); `m03-suche` mit `hinweis` zum neuen Zuschnitt (P7); Einträge `v07-youtube` … `v07-pampers` entfernt (P10) |
| 03 | `m03-suche` neu zugeschnitten (volle Breite der Rohdatei ab y = 64, 380 × 180): Beschriftung „eigene Suche“ auf freier Fläche (P7) |
| 07 | Kasten und Notiz: Bilder der Vorbilder zurückgehalten, nicht veröffentlicht, in `intern/vorbilder-zurueckgehalten/` (mit `register-auszug.js` zum Zurückholen) (P10) |
| 08 | Kasten: `bilder/` erzeugt `folie08-bilder.mjs` ohne Schalter, `fremdbilder/` mit `--intern`; nicht aus `_vorschau/` kopieren (P5); Notiz: Produktbilder ohne Genehmigung von HOLY (P11) |
| 09 | `.e9-rueckfall` Standardtext „Videobotschaft des Gründers – läuft in der Web-Präsentation“; `09-fazit.js` setzt bei echtem Abspielfehler (error-Ereignis, `play()`-Fehler außer `NotAllowedError` und `AbortError`) „… – lässt sich in diesem Browser nicht abspielen“; Kasten (P6) |
| `js/folien/intern-bilder.js` | Kopfkommentar zu `data-oeffentlich-src` (P9); Bildnachweis-Absatz in den Notizen mit Rechtestatus (P11) |
| Kommentare | `index.html`, `css/folien/pfad.css`, `werkzeuge/pruefen.mjs`: „veröffentlicht mit Freigabe“ → Rechtestatus; „vor der Freigabe“ → „vor der Veröffentlichung“ (P11) |
| Doku | LIESMICH §1, §4–§6, §9–§12; QUELLEN Kopf, §2, §4, §4a, §6; README FS2 (P10, P11) |

Datenschutz (P4): Gesucht wurde in `praesentation/` (ohne `intern/`, `_test/`), `../gestaltungsplan.md` und
`../README.md` nach Vornamen aus den Bildunterschriften der Community-Fotos (alle Bildunterschriften in
`intern/roh/…/manifest.json` als Liste der Kandidaten, dazu „Squad Member“, „Member“). Einziger Fund: der Vorname im
Nachweis von `b04-persona` (`fremdbilder/register.js` und QUELLEN §4a) – entfernt. Er bleibt in ausgeschlossenen Dateien
(`intern/alt-vor-veroeffentlichung/bilder.js`, `intern/roh/produkt/community/manifest.json`, `_test/abnahme-d06/…`) und
in der Git-Historie.

**Prüfstand D08:** Fassung mit Bildern hell und dunkel `--schritte` je 0 Fehler, 17 Warnungen, 38 Fremdbilder
eingesetzt (Register 38 Schlüssel); Rückfall `--oeffentlich --schritte --druck` 0 Fehler, 17 Warnungen, PDF 18 Seiten.
Funktionstest 09 (synthetisches WebM per Route; ohne Route; fehlende Datei; `?aufnahme`; `?druck`): alle Prüfungen
bestanden. Sichtprüfung 03, 09 (Videobühne) und B8 hell und dunkel, 09 mit Fehlertext.

## 13. Konzept-Webseite im Shop-Look (04.11.2026, D09)

Auftrag (Yannick, KI-Nachweis FS2 Nr. 19): Die Konzept-Webseite soll wie eine richtige Webseite aussehen, nicht wie ein
Konzept. Umbau der Webseite KI-gestützt im Workflow D09 (Details: `../konzept-website/README.md`); in der Präsentation
ändert sich nur Folie 08. Klicks (23), Sollzeiten (710 s) und Sprechtexte 01–09 sind unverändert.

| Folie / Datei | Änderung |
|---|---|
| 08 Bilder | `bilder/konzept-0n-….png` und `fremdbilder/konzept-0n-….png` neu erzeugt mit `../konzept-website/werkzeuge/folie08-bilder.mjs` (ohne Schalter bzw. `--intern`); Danke-Seite jetzt von oben mit Squad-Karte statt ab „So geht's weiter“ |
| 08 CSS | `css/folien/08-mockups.css`: 12 px schwarzer Streifen über dem Bildschirmfoto, damit die Eckrundung des Handyrahmens die Hinweisleiste nicht anschneidet; Abstand der Beschriftung angepasst |
| 08 Notizen | Schritt 1: „Express-Bezahlen steht direkt unter dem Endpreis“ (statt „Express-Knöpfe stehen oben“); Absatz Identität: Sortenfarben wie im HOLY-Shop (Pink, Lila) mit Gelb und Schwarz |
| 08 Bildquelle | Datum der Bildschirmfotos 04.11.2026 |
| `fremdbilder/register.js` | `konzept-01` … `-05`: alt-Texte nach dem neuen Bildinhalt, `nachweis` mit Datum 04.11.2026, `motiv` bei 01, 03, 05 nachgezogen (05: am unteren Rand das Symbolbild Versandkarton von de.holy.com/pages/our-story) |
| QUELLEN | §4 und §4a: Datum und Ausschnitt der Bildschirmfotos |

**Prüfstand D09:** `werkzeuge/pruefen.mjs index.html --schritte` 0 Fehler, 17 Warnungen (wie vorher, keine auf 08),
38 Fremdbilder eingesetzt; Folie 08 bei 1920 × 1080 angesehen.

## 14. Finalisierung 08.11.2026 (D12): keine eigene Erhebung, Werbespot

Auftrag (Yannick, 08.11.2026, wörtlich): „Finalisiere die Präsentation“. Antworten auf die Rückfragen der Hauptsitzung:
(1) „Ohne Erhebung (Empfohlen): Alle ‚offen'-Platzhalter raus. Folien ehrlich umformulieren: Grundlage ist unsere
Analyse von Dossier, Shop und Stichproben, keine eigene Befragung. Nichts wird erfunden.“ (2) „Auf Folie 08: ein
kleiner Knopf ‚Spot ansehen' neben ‚Live-Demo', abspielbar in der Präsentation (ca. 25 s, kostet Redezeit).“ (3) Redeskript
als PDF (eigener Schritt, nicht Teil dieses Abschnitts). KI-Nachweis FS2 Nr. 26 / Delegation D12; umgesetzt KI-gestützt,
Prüfung durch die Gruppe offen. Keine Websuche, keine neuen Downloads oder Fremdbilder, Fakten nur aus dem Dossier.
Vorgehen: zuerst Inventur aller Fundstellen (offen, vorläufig, [erst nach, Selbstversuch, Interview, O-Ton, Workshop,
b12, b15, Skizze, Tipp unter Kollegen, Nennungen, n = …, Datenschluss) in index.html, CSS, JS und Doku, dann Umbau je
Fundstelle.

| Folie / Datei | Änderung |
|---|---|
| Kopf `index.html` | „Stand 08.11.2026 – finale Fassung (KI-gestützt), Prüfung durch die Gruppe offen“ statt ENTWURF; Absatz „keine eigene Erhebung“; Kästen beschreiben Aufbau, Herkunft, Bedienung statt „was noch offen ist“ |
| 01 | Platzhalter b01 (nur Rückfall) „Produktbild von HOLY · Raspberry Raptor, Dose und Shaker (Werbebild) · nur in der Fassung mit Bildern“ statt „eigenes Produktfoto … offen: Foto aus dem Selbstversuch“; Regie „HOLY-Dose als Requisit, falls vorhanden“; Satz ohne Hände neu („Dann schauen wir uns gemeinsam an, wie der Weg vom Sehen zum Kaufen aussieht.“ statt „gekauft erst im Selbstversuch“); Notiz Bild ehrlich |
| 02 | Zeile „offen: zwei anonyme O-Töne aus unseren Kurzinterviews (n = …)“ entfernt (CSS `.e2-oton` entfernt); Platzhalter b04 „Symbolbild Schichtarbeit · nur in der Fassung mit Bildern“; Notiz und Rückfrage „Habt ihr Leute befragt?“ → nein, B1/B5 |
| 03 | Kachel „Tipp unter Kollegen · offen“ entfernt (Empfehlung bleibt in der Earned-Zählung 11 und in B3; Zählung 13/30/11 unverändert); Legende „Bilder: Beispiele je Band, alle gleich groß – keine Gewichtung“ statt Interview-Nennungen/Codierung offen; Hinweise ab x = 984; Herleitung „Inventur im Dossier … (Abruf 30.10.2026)“; Notiz: keine eigene Codierung, ~ B20/B21 KI-gestützt |
| 04 | Herleitung „Weg aus Dossier und Abruf von Shop und Suche, ohne eigene Testbestellung“ statt „Selbstversuch … folgt“; Platzhalter ohne „offen“; Notiz ehrlich |
| 05 | Titel ohne „(vorläufig)“: „Am Übergang vom Nachlesen zum Entscheiden bricht Marcos Weg“ (Urteil nach Maßstab, Belege je Brücke); Herleitung „geprüft an den Belegen im Dossier (Abruf 30.10.2026), ohne eigenen Testkauf“; Quellzeile „Urteile: H“; Sprechtext Schritt 0 „Die Urteile sind unsere Bewertung auf Grundlage der recherchierten Belege – einen eigenen Testkauf haben wir nicht gemacht.“ (+7 Wörter); Notiz „was ein Urteil ändern würde“ ohne Selbstversuch; „(ob noch im Ablauf, nicht geprüft)“ |
| 06 | Kachel b12 (Workshop) entfernt (CSS `.e6-workshop` entfernt); Herleitung „Platz 1 passt zu Marco, schließt den Bruch aus 05 und ist von HOLY gestaltbar · Plätze 2–3: unser Vorschlag (H)“; Notiz ohne Workshop. Kopf bleibt schmal (Titel bricht wie vorher) |
| 07 | Platzhalter „Skizze b15“ entfernt (CSS `.e7-skizze` und Abstand rechts entfernt); QR-Brücke steht als Maßnahme und auf B4 |
| 08 | Knopf „Spot ansehen ▶“ links neben „Live-Demo ↗“ (Gruppe `.e8-knoepfe`, Klick 2, gleiche Gestaltung `.e8-knopf`); `data-zeit` 85 → 110; Sprechtext Schritt 2 mit optionaler Überleitung (+25 Wörter, Regie in [ ]); Notiz „Bedienung Werbespot“ und Kürzungsregel; Kasten. Technik: `js/folien/08-spot.js`, `css/folien/08-spot.css` (Bühne an `<body>`, Tasten in der Erfassungsphase vor der Engine, Fehlerfall, kein Druck/Referentenfenster, Untertitel nur online) |
| 09 | Platzhalter „K1“ … „K6“ ohne „offen“; Sprungliste „B1 Methode“, „B5 Stimmen“; Rückfragen-Notiz |
| B1 | neu als Methodenfolie „Recherche und Abrufe statt eigener Erhebung“: Grundlagen mit Abrufdatum und Status (Dossier, Shop/Help-Center/Rewards/Blog, Suche, Bewertungsportale, Persona/Mediendaten), „Nicht erhoben“ mit Folge für die Folien (Selbstversuch/Testkauf, Kurzinterviews, eigene Codierung, Workshop, eigene Fotos), Grenzen; Kernsatz ehrlich |
| B2 | „Plätze 2 und 3: Vorschlag der Gruppe (H), nicht in einem Workshop geprüft“; Kernsatz ohne „[danach …]“; keine Punktwertung |
| B3, B4, B7 | Inventur „Recherche, kein Selbstversuch“; B4 ohne „offen: Handskizze b15 …“; B7 Hinweis „Mediennutzung je Phase abgeleitet (H) – nicht erfragt“ |
| B5 | neu „Kundenstimmen aus Portalen, keine Interviews“: Trustpilot ✔ B14, REVIEWS.io ✔ B15, Amazon ~ B17, Stichproben A–E ~ B20–B24 (Dossier 5.3), Hinweis „KI-gestützt codiert, nicht von der Gruppe“ |
| B8 | „keine eigenen Fotos (keine eigene Erhebung, B1)“; Werbespot mit Rechtestatus (sichtbar und Notiz) |
| B9 | Tabelle: Werbespot, Bewertungs-Stichproben, „Selbstversuch, Interviews, Codierung, Workshop, eigene Fotos – nicht durchgeführt“; Prüfung „steht aus“ statt „offen“; Kernsatz neu |
| CSS/JS | Zustand `data-status="offen"` → `"leer"` (index.html, `pfad.css`, `03`/`05`/`07`/`09`-CSS, `pfad.js`, `intern-bilder.js`), Klasse `p-kachel-offen` → `p-kachel-text`, `p-offen` → `p-hinweis`; `marke.js` Kommentar; `.p-oton` als unbenutzt markiert |
| Doku | LIESMICH Kopf, §1, §3, §5 (Bedienung Spot), §7, §8, §10 (neu: nur noch Aufgaben der Gruppe), §11, §12, §13; QUELLEN Kopf, §1, §4, §4a, neu §4b (Werbespot), §5, §6; `../gestaltungsplan.md` (Änderungsvermerk, R2, 7.4, 10.1, 10.2, 12, 13.1 Nr. 7/12/13); `../README.md` |

**Werbespot – Verhalten** (LIESMICH §5): Klick öffnet die Bühne und spielt mit Ton; Ende schließt automatisch; Esc,
Blättertasten (→ ← ↑ ↓ Bild↑ Bild↓ Enter Rücktaste), „Schließen“ und Klick neben das Video schließen **ohne
weiterzublättern**; Leertaste/K pausiert, U Untertitel, F Vollbild; übrige Tasten gesperrt. Nach dem Schließen wird der
Fokus vom Knopf genommen, damit die nächste Leertaste blättert. Verlassen der Folie schließt. Im Druck (`?druck`) und im
Referentenfenster ist der Knopf ausgeblendet, in der Übersicht (inerter Klon) ohne Wirkung; die Datei wird erst beim
Klick angefragt. Über `file://` lädt Chrome die Untertitel-Datei nicht (eigene Herkunft je Datei) – der Knopf hieß dann
„Untertitel nur online“ (seit der Nacharbeit unten: ausgeblendet), es wird nichts angefragt.

**Prüfstand D12 (08.11.2026):**
- `pruefen.mjs index.html --schritte` (Fassung mit Bildern, hell): **0 Fehler, 17 Warnungen**, 38 von 38 Fremdbildern
  eingesetzt, 0 externe Anfragen. Dunkel (`--modus dunkel`): 0 Fehler, 17 Warnungen, 38 Fremdbilder. Rückfall
  (`--oeffentlich --schritte --druck`): 0 Fehler, 17 Warnungen, 0 Fremdbilder, PDF 18 von 18 Seiten. Die Warnungen sind
  dieselben wie vorher (Wortbudget 02–07 und 09, 24-/26-px-Notizen); einzige Änderung: Wortbudget 05 jetzt 71 statt 72
  Wörter (Titel ohne „(vorläufig)“), im Rückfall 03 51 und 07 97 Wörter (beschriftete Platzhalter). Keine neue Warnung.
  Zwischenlauf: Überlappung der Quellzeile 05 („Urteile nach unserem Maßstab (H)“ zu lang) → „Urteile: H“.
- **Klicks 23** (unverändert, Schritte je Folie wie vorher), **Sollzeit 735 s = 12:15** (vorher 710 s; +25 s auf 08).
- Funktionstest Werbespot (eigenes Skript mit Playwright, nicht im Repository; Route auf `../werbevideo/holy-werbespot.mp4`
  mit synthetischem WebM, Chromium ohne Datei-Flag wie bei Doppelklick): **42 von 42 Prüfungen bestanden** – kein Abruf
  beim Betreten und nach Klick 2; Klick öffnet und spielt (nicht stumm); Leertaste pausiert ohne zu blättern; O gesperrt;
  Pfeil rechts, Bild↓, Escape und Klick daneben schließen ohne zu blättern; danach blättern Pfeile und Leertaste normal;
  Ende schließt automatisch; Folienwechsel per Befehl schließt; Übersicht: Knopf nur im inerten Klon, keine Wirkung; ohne
  Route (Test-Chromium ohne H.264): Fehlermeldung in der Bühne, Pfeil schließt, danach normal weiter; `?druck` und
  `?referent`: Knopf ausgeblendet, keine Anfrage an `werbevideo/`, keine Bühne; keine Seitenfehler, keine Konsolenfehler.
  Zusatz über einen lokalen Server (http): Untertitel-Spur lädt (12 Einträge), Knopf „Untertitel aus/an“.
- Sichtprüfung: alle 18 Folien im Endzustand (hell), 08 mit offener Bühne und mit Fehlermeldung, 01 und 03 im Rückfall,
  08 dunkel. Volltextsuche im sichtbaren Text (ohne Notizen, Kommentare, Skripte): kein „offen“, „vorläufig“,
  „[erst nach“, „O-Ton“, „Skizze“, „Tipp unter Kollegen“, „Datenschluss“; „Selbstversuch“, „Interview“, „Workshop“ nur
  noch in der Aussage „nicht erhoben/durchgeführt“ (B1, B2, B5, B9). In den Notizen kein „[erst nach“/„[danach“, kein
  „vorläufig“.

### 14a. Nacharbeit nach der Abnahme (08.11.2026, D12)

Vier Prüfer (Inhalt Hauptfolien, Inhalt Rest/Doku, Technik, Vortrag) haben den Stand oben abgenommen: keine Befunde
„hoch“, sieben „mittel“, die übrigen „niedrig“. Jeden Befund am Dossier, an `index.html` und an den Screenshots
nachgeprüft; alle „mittel“ und die meisten „niedrig“ umgesetzt. KI-gestützt, keine Websuche, keine neuen Fremdbilder,
Fakten nur aus dem Dossier; Prüfung durch die Gruppe offen.

| Folie / Datei | Änderung (Befund) |
|---|---|
| 01 | Titel „Wir haben Marcos Weg zu HOLY nachgezeichnet und neu gebaut“ (vorher „nachgegangen“ – im Plan an den Selbstversuch gebunden); Sprechtext „Wir haben ihn für unsere Persona Marco nachgezeichnet – und am Ende neu gebaut.“ (auch der Dativfehler „ihn … nachgegangen“ ist weg); Notiz „Ablauf“: Ausweichsatz aus Schritt 0 statt „eigene Antwort nennen“, keine eigene Kauferfahrung behaupten |
| 03 | Sprechtext: „Aus der Recherche haben wir HOLYs Kontaktpunkte gesammelt …“ (statt „alle … erfasst“); „in Bewertungen heißt die Werbung teils aufdringlich“; „In Bewertungen wird der Service oft gelobt; die meiste Kritik dort betrifft die Zeit nach dem Kauf.“ (statt „genau dort ballt sich die Kritik“, H B25, Effekt der Quelle); „3 Owned fehlen: Blog-Beiträge, Filialenfinder, App“; Kachel „freie Suche“; Quellzeile „Stenger S. 109, 112 f. · Zählung H · ✔ T02 T17 T22 B10 S27 B91 L39 M01 · ✎ L14 S31 · ~ B20 B21 (KI) · H B25“ (G06/G10 stehen an den Proben, S10/S91 in der Notiz – sonst Überlappung mit der Fußzeile) |
| 04 | „freie Suche“ (K2); Sprechtext „Der Blog ist leer – null Beiträge.“ |
| 05 | Ü4 sichtbar „alte Danke-Seiten mit totem Link · kein Abo · Kritik nach dem Kauf“; Sprechtext Schritt 0 „Die Urteile sind unsere Bewertung der recherchierten Belege, ohne eigenen Testkauf.“, Schritt 2 „… alte Danke-Seiten mit totem Link – ob noch im Ablauf, ist ungeprüft –, kein Abo, und in Bewertungen betrifft die meiste Kritik die Zeit nach dem Kauf.“; Quellzeile „… · ~ S91 B21 · Hypothese (H): B25, Urteile“; Notiz-Belege mit T31/T30/B25-Erläuterung; „freie Suche“ (K2) |
| 06 | Herleitung „Platz 1 passt zu Marco und zur Zielfrage (S. 109), schließt den Bruch aus 05, ist von HOLY gestaltbar · Plätze 2–3: Vorschlag (H)“ (Zielfrage wieder sichtbar; endet vor dem rechten Rand) |
| 07 | Notiz Kürzung 3: „dann weder Live-Demo noch Werbespot“ |
| 08 | Sprechtext „… Stimme, Musik und Geräusche sind KI-generiert.“; Zeitregel „Spot ODER Live-Demo, nur wenn nach 07 höchstens 9:30“ in Regie, Notiz und Kasten; Notiz „Bedienung Werbespot“: Esc im Vollbild (vermutlich nur Vollbild beendet), Fokus/Referentenfenster, einmal klicken, wer an der Maus steht; Knöpfe mit 12 px Innenabstand und Lücke (Luft zur Kennzeichnung jetzt ≈ 38 px statt 19 px) |
| `08-spot.js` | Klicks neben das Video und ins Video in den ersten 0,6 s nach dem Öffnen ignoriert (Doppelklick schloss die Bühne sofort); per `file://` Untertitel-Knopf ausgeblendet statt ausgegraut; Bedienhilfe aus der Bühne entfernt (steht in LIESMICH §5 und Notiz 08); Kopfkommentar zu Esc im Vollbild und Fokus |
| `08-spot.css` | Bühne voll deckend (#1D1D1B statt 95 %); Dauer und Nachweis `max(16px, 2.2vh)` (23,8 px bei 1080 px Höhe), Kennzeichnung `max(18px, 2.6vh)` (28 px); hochkant: Ebene scrollt, Video 50vh |
| B1 | Spaltenkopf „Was geprüft wurde (KI-gestützt, Unteragenten)“; „✔ ✎ ~ H je Befund“ ohne Umbruch; Grenzen mit „(~ S91)“ und „Abrufe und Screenshots KI-gestützt, Prüfung durch die Gruppe steht aus (B9)“; beide Tabellen mit gleicher erster Spalte (`10-backup.css`) |
| B5 | „ein einziger Codierdurchgang“ statt „eine Person“ (Kasten und Notiz); Kasten direkt unter der Tabelle (`.b5-block`) |
| B8 | sichtbar: Bilder im Werbespot in der Fremdbild-Aufzählung; „Stimme, Musik, Geräusche KI-generiert (ElevenLabs, Nr. 24); HOLY-Bilder darin ohne Genehmigung (Nr. 17)“ |
| B9 | neue Zeile „Screenshots, Fremdbilder – KI-gestützt abgerufen und aufgenommen (Unteragenten), keine KI-Bilder – Sichtung: steht aus“; Konzept-Webseite „Fassung mit Bildern zeigt HOLY-Produktbilder“; Stichproben „von der Gruppe nicht geprüft“ |
| Doku | LIESMICH §3 (Wortzahlen neu gezählt, Zeitregel), §5 (Esc/Fokus/Doppelklick/Untertitel/Maus), §10, §13; QUELLEN §4b, §6; `../gestaltungsplan.md` (R2, R5, 5.1, 6.2, 6.7, 7.4, 9.1, 10.1, 10.2); `../README.md` (Zeiten) |

**Nicht umgesetzt (mit Grund):** eigene Starttaste für den Spot (Gruppe entscheidet, Notiz 08/LIESMICH §5); Knöpfe auf 08
eine Zeile höher (rechts unter dem letzten Handy ist kein Platz – die Anmerkung „Squad in einem Schritt statt Sackgasse“
reicht bis y ≈ 930; stattdessen mehr Luft durch kleineren Innenabstand); Wortkürzung (nicht gewählt).

**Prüfstand Nacharbeit (08.11.2026):** `pruefen.mjs --schritte` hell 0 Fehler, 17 Warnungen, 38 von 38 Fremdbildern,
0 externe Anfragen; dunkel 0/17, 38; Rückfall `--oeffentlich --schritte --druck` 0/17, 0 Fremdbilder, PDF 18 von 18
Seiten (kein „Spot ansehen“ im PDF). Warnungen wie vorher (Wortbudget 02–07, 09; 24-/26-px-Notizen), Wortbudget 05 jetzt
72. Zwischenläufe: Quellzeilen 03 und 05 überlappten bzw. berührten die Fußzeile → gekürzt (siehe oben); Herleitung 06
lief über den rechten Rand, der Grenzen-Kasten auf B1 berührte die Tabelle → gekürzt. Klicks 23, Sollzeit 735 s = 12:15
(unverändert). Sprechtext neu gezählt: 1.250 Wörter (LIESMICH §3). Funktionstest Werbespot (Abnahme-Skript, angepasst;
nicht im Repository): **70 von 70** bestanden, u. a. Doppelklick lässt die Bühne offen, Klick daneben schließt nach
0,6 s weiter, Untertitel-Knopf per `file://` ausgeblendet, Bühne deckend und Schrift ≥ 22 px bei 1080 px, Handy hochkant
scrollbar ohne Querscrollen, Fehlerfälle (404, H.264 ohne Decoder), `?druck`/`?referent`, Referentenfenster,
Untertitel über lokalen Server (12 Einträge), Videobotschaft 09 unverändert. Bühne bei 1024 × 768, 1280 × 800 und
1920 × 1080 ohne Überlauf. Sichtprüfung: 01, 03, 05, 06, 08 (Fuß und Bühne), B1, B5, B8, B9.

**Redeskript final (08.11.2026, D12, nach Prüfung des Redeskripts):** Generator `../werkzeuge-redeskript/redeskript-generator.py`
nachgearbeitet und `../redeskript.md` / `../Fallstudie-2_Redeskript.pdf` (12 Seiten) aus der finalen `index.html` neu
erzeugt; Wortlaut geprüft (`wortlaut-pruefen.py`: 33 Absätze, 0 Abweichungen; Regex für den neuen Backup-Kasten
angepasst). Umgesetzt: Spot erst nach Anhören durch die Gruppe und Ton im Beamer-Test (mittel); Handzeichen als Spanne
statt doppelt gezählt, „Ende bei“ ohne Handzeichen erklärt, Reserve-Satz; Übergabesätze aus Gestaltungsplan 9.3 statt
eigener Formulierung, Regie „erst Übergabesatz und Clicker, dann Klick“; „unsere Lesart“ → „KI-gestützte Ableitung, von
der Gruppe zu prüfen“; Rechtestatus B8 mit Nr. 17 und „keine Werbung der HOLY Softdrinks GmbH“; Kontrollpunkte,
Spot-Grenze 9:30, Reserve und Kürzungssumme aus `data-zeit` gerechnet und per `assert` gegen Gestaltungsplan 10.1/10.2,
Notizen 01/02/03/06/07/08 und die Übergabe-Vorlagen geprüft; Backup-Warnhinweise als abgesetzter Kasten. In
`index.html` nur Notiz 08 Schritt 2: „drei“ vor „funktionierenden nächsten Schritten“ gestrichen (der Satz nennt zwei;
`konzept-website/danke.html` hat drei Schritt-Karten, die Nachfüll-Erinnerung ist eine eigene Fläche) – 08 jetzt 147
Wörter, Summe 1.249 (LIESMICH §3).
