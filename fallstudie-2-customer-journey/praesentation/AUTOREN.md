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
| Bilder | kein HOLY-Logo, keine fremden Bilder im Repository; nicht freigegebene Fotos nur in `intern/` (4, 11.5) |
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
| Bildkachel `data-status` | `offen` · `frei` · `rueckfall` (LIESMICH §7) |

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
2. **Folie 04:** Kacheln 200 × 112 statt 240 × 135 (Plan 6.2 Nr. 1 lässt 200 px zu), Zeilen 80 px; Legende im Kopf der
   Zeilenspalte; Name von K2 über der Kachel. Platzhalter zeigen nur „Screenshot/Foto · offen“ – die Unterschrift als
   Protokoll kommt mit dem Foto.
3. **Folie 03:** Zählung 84 px statt 160 px, je Band ausgerichtet; Farbproben 40 px statt 96 px, Status ohne
   Farbnamen; Bildgrößen gleich, bis die Kurzinterviews vorliegen.
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
