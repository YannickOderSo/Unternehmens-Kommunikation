# AUTOREN.md – Schnittstelle für alle, die Folien ändern (Fallstudie 2, Thema „Pfad“)

Diese Datei beschreibt, wie die Folien der Web-Präsentation Fallstudie 2 „Customer Journey“ (Marke **HOLY**) aufgebaut
sind und wie man sie ändert. Die Engine ist die aus Fallstudie 1, **unverändert** (`js/deck.js`, `js/komponenten.js`,
`css/deck.css`, `css/komponenten.css`, `css/tokens.css`); ausführlich: FS1 `AUTOREN.md` Abschnitt 3–5 und 7–9.
Neu sind nur das Thema „Pfad“ und die Folien. Stand 03.11.2026, Entwurf.

## 1. Regeln (Pflicht)

| Regel | Wert (Gestaltungsplan) |
|---|---|
| Bühne | 1920 × 1080; Raster 12 Spalten à 109,33 px, Rinne 32 px, Rand 128 px; Spalte n beginnt bei x = 128 + (n − 1) · 141,33 (3.5) |
| Titel | Kernaussage als Satz, Bricolage 84 px (Backup 56 px), höchstens 2 Zeilen |
| Inhalt / Meta | Inhalt ≥ 28 px; Herleitung 24 px, Quelle und Fußhinweis 22 px, je **eine** Zeile, mit `data-meta` |
| Farben | nur Tokens aus `pfad.css` (`--p-…`); **Gelb nie als Schrift oder konturlose Linie auf Creme**; auf Gelb nur Schwarz und Schiefer (3.3) |
| Fakten | nur mit Befund-ID und Status aus dem Dossier; keine Zahl ohne Quelle; eigene Daten erst nach Erhebung, bis dahin „offen: …“ |
| Bilder | HOLY-Logo nur als gelbes Oval auf 01 und 09 (Freigabe 03.11.2026); sonst keine fremden Bilder im Repository; fremde und nicht freigegebene Bilder nur in `intern/` über `data-intern` (Abschnitt 10; 4, 11.5) |
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
| Bildkachel `data-status` | `offen` · `frei` · `rueckfall` · `aus` (nur interne Fassung) (LIESMICH §7) |
| `data-intern` | Schlüssel in `intern/bilder.js`; `data-intern-optional` = Fehlen erlaubt (Abschnitt 10) |
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
   Auswahl ist ein Vorschlag dieses Baus; alle 17 Fälle in B6.
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

## 10. Interne Fassung mit Bildern (03.11.2026, Delegation D06)

Auftrag von Yannick (03.11.2026, wörtlich): „Lade dir die Grafiken online runter die du brauchst von Holy die Webseite
und die Präsentation muss gut aussehen rechte sind nicht wichtig wir nutzen es weder kommerziell noch öffentlich nur
privat in der uni“. Umsetzung KI-gestützt im Workflow D06 (Schritt „Einbau Präsentation“), Bedienung: LIESMICH §12,
Herkunft: QUELLEN §4a. Nichts davon ist committet; die Bilder bleiben in `intern/` (per `.gitignore` ausgeschlossen).

**Technik**

| Baustein | Datei | Regel |
|---|---|---|
| Daten | `intern/bilder.js` (nicht im Repository) | `window.INTERN_BILDER = { schlüssel: { datei, alt, nachweis, motiv, platz, quelle, pixel } }`; Schlüssel `b01`, `b04`, `m03-…`, `k…-04/-05/-09`, `v07-…`, `konzept-0n` |
| Einsetzen | `js/folien/intern-bilder.js` (nach `intern/bilder.js`, vor `pfad.js` und dem Start der Engine) | `data-intern` an Kachel → `<img>` + `data-status="frei"`; an `<img>` → Quelle tauschen; sonst (Logo) → `<img class="p-intern-logo">` vor dem Text. Status in `data-intern-status` (`gesetzt` · `fehler` · `fehlt`); bei Ladefehler zurück zum öffentlichen Zustand |
| Beschriftung im Bild | `.p-bildlabel` (`pfad.css` 5.23) | schwarzes Band, Creme 22 px, `data-meta`; nur bei `data-status="frei"`; `--oben`, `--rechts` für die Ecke; nur wo das Bild sich nicht selbst erklärt und nichts Wichtiges verdeckt |
| Bildnachweis je Folie | `<p class="p-bildquelle" data-meta hidden>` (unter Quelle und Fuß, `bottom: 14px`) | höchstens 1.664 px (Satzspiegel), Stand und Urheber; das Skript zeigt sie nur bei eingesetztem Bild; Notizen bekommen den vollen Nachweis je Bild (`.p-intern-nachweis`) |
| Zusatzbild | `data-status="aus"` | öffentlich unsichtbar (Folie 07, Bild des Vorbilds) |
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

**Prüfwerkzeug:** `werkzeuge/pruefen.mjs` neu: `--oeffentlich` (sperrt `intern/` per Route), Abbruch bei Ausgabe nach
`export/`/`bilder/` ohne `--oeffentlich`, Warnung bei fehlender `intern/bilder.js`, Prüfung der Schlüssel, geladenen
Dateien, Verzerrung (Inhaltsfläche gegen Datei, ohne `object-fit`), Hochrechnung (Warnung „unscharf“),
Bildnachweis-Zeile (sichtbar, im Satzspiegel); im Bericht `interneBilder`.

**Prüfstand 03.11.2026:** intern hell und dunkel `--schritte` je 0 Fehler, 17 Warnungen (wie vor D06: Wortbudget,
24-/26-px-Notizen); öffentlich `--oeffentlich --schritte --druck` 0 Fehler, PDF 18 Seiten; Kopie ohne `intern/`
0 Fehler + Warnung „öffentliche Fassung ohne interne Bilder“; Gegenprobe gelöschte Datei → Platzhalter, Fehler gemeldet;
`?kacheln=rueckfall` lädt außer `intern/bilder.js` nichts aus `intern/`. Sichtprüfung der Endzustände 01–09 (intern)
und Stichproben 03, 04, 07 (öffentlich) und 07 (dunkel).

**Offen:** eigene Fotos (b01, b04, K1–K6) statt Werbe-/Community-Bildern; b12, b15, „Tipp unter Kollegen“ bleiben
Platzhalter; Sichtung der Bilder durch die Gruppe (Kontaktbogen `intern/kontaktbogen.png`).
