# LIESMICH – Web-Präsentation Fallstudie 2 (HOLY, „Customer Journey“)

Präsentation zur Fallstudie 2 „Customer Journey“ (Marke **HOLY**) im Modul Unternehmenskommunikation bei
Prof. Dr. Daniel Stenger, Hochschule Kaiserslautern. Gruppe: Yannick Heisler, Elias Knauber, Lukas Welker.
Vortrag: **Di, 10.11.2026**, 15 Minuten. Änderungsstopp Mo, 09.11., 20:00 (Gestaltungsplan 10.3).

**Stand 03.11.2026 – ENTWURF, Prüfung durch die Gruppe offen.** Gebaut KI-gestützt nach
[`../gestaltungsplan.md`](../gestaltungsplan.md) (Folienplan 5.1, Gestaltung „Pfad“ Abschnitt 3, Technik 11) mit
Fakten nur aus dem Dossier [`../recherche-customer-journey.md`](../recherche-customer-journey.md) (Befund-IDs mit
Status ✔ belegt · ✎ korrigiert · ~ unsicher · **H** Hypothese). Eigene Daten der Gruppe (Selbstversuch, Fotos,
Kurzinterviews, Codierung, Workshop) fehlen noch: Auf den Folien stehen dafür sichtbar gekennzeichnete Platzhalter
(„offen: …“, Bildkacheln mit `data-status="offen"`). Entstehung: [`AUTOREN.md`](AUTOREN.md), Abschnitt 8.

## 1. Starten

1. Den ganzen Ordner `praesentation/` kopieren (Unterordner gehören dazu; ZIP vorher ganz entpacken). Für die
   Live-Demo auf Folie 08 muss der Nachbarordner `../konzept-website/` mitkommen.
2. `index.html` per Doppelklick in **Chrome oder Edge** (aktuelle Version) öffnen. Läuft ohne Internet und ohne Server.
3. **F** = Vollbild. Die Bühne (1920 × 1080) passt sich jedem Bildschirm an.
4. Die **Videobotschaft** (Folie 09) liegt nur in `intern/gruender-video.mp4` (per `.gitignore` ausgeschlossen,
   nicht im Repository). Ohne die Datei zeigt Folie 09 den Rahmen „Videobotschaft des Gründers – nur im Vortrag“.
   Die Datei nicht verschieben und nicht umbenennen.

## 2. Tasten (Engine aus Fallstudie 1, unverändert)

| Taste | Wirkung |
|---|---|
| → ↓ Leertaste Bild↓ Enter | weiter (nächster Schritt bzw. nächste Folie) |
| ← ↑ Bild↑ Rücktaste | zurück |
| Ziffern + Enter (`5` `Enter`) | Folie 05 anspringen; Backup über **O** oder die Sprungliste auf Folie 09 |
| O | Übersicht aller Folien |
| P | Referentenansicht im zweiten Fenster (Sprechtext, Uhr, Sollzeiten) |
| F | Vollbild · **B** oder **.** Schwarzbild · **H** Hilfe |
| D | hell/dunkel – **hell ist Standard** (Plan 3.3); die gelben Bühnen 01, 08, 09 bleiben in beiden Modi gelb |
| T | Thema der Engine – ohne sichtbare Wirkung: Das Thema „Pfad“ (`css/folien/pfad.css`) gilt in allen drei Themen |

Weitere Adress-Schalter: `?buehne=schwarz` (Rückfall, wenn das Gelb am Beamer überstrahlt: schwarze Bühne, gelbe
Schrift; gilt bis zum Schließen des Tabs, zurück mit `?buehne=gelb`) · `?kacheln=rueckfall` (öffentliche Fassung: jede
Bildkachel mit `data-status="frei"` zeigt ihren Rückfall) · `?druck` (Druckansicht für das Notfall-PDF) ·
`?bewegung=reduziert`.

## 3. Ablauf, Klicks und Sollzeiten

Nachgezählt am 03.11.2026 aus `index.html` (Schritte je Folie wie `pruefen.mjs`, Klicks = Schritte + Weiterschalten;
auf 09 ist Klick 2 „Fragen?“). Sprechtext = Absätze mit `data-schritt` in den Notizen, ohne Regieanweisungen in
[ ]; Zeit bei 1,9 Wörtern/s (Planwert, **nicht gemessen** – Leseprobe Do 05.11.).

| Folie | Inhalt (Aufgabe · Laufleiste S. 111) | Klicks (Plan) | Soll `data-zeit` (Plan) | Sprechtext Wörter (Plan) | ≈ s |
|---|---|--:|--:|--:|--:|
| 01 | Einstieg, Handzeichen-Trichter (gelbe Bühne) | 2 (2) | 50 (50) | 75 (95) | 39 + Handzeichen |
| 02 | Persona Marco und Mediennutzung · ohne Schritt | 2 (2) | 60 (60) | 113 (114) | 59 |
| 03 | A1 IST-Analyse und Bewertung · 1 | 3 (3) | 80 (80) | 156 (152) | 82 |
| 04 | A2 Journey-Map, „Zentraler Weg (IST)“ · 2 | 3 (3) | 80 (80) | 134 (152) | 71 |
| 05 | A3 Überleitungen trägt · bricht · wackelt · wackelt · 2 | 3 (3) | 95 (95) | 162 (180) | 85 |
| 06 | A4 Top 3 je Phase, „Zentraler Weg (SOLL)“ · 3 | 3 (3) | 100 (100) | 175 (190) | 92 |
| 07 | A5 + A6 Vorbild → Maßnahme · 4 | 2 (2) | 90 (90) | 163 (171) | 86 |
| 08 | A7 Konzept-Webseite in Handyrahmen (gelbe Bühne) · 4 | 3 (3) | 85 (85) | 124 (162) | 65 + Demo |
| 09 | Fazit, Kennzahlen, Videobotschaft, Fragen (gelbe Bühne) · 5 | 2 (2) | 70 (70) | 101 (103) | 53 + 16 s Video |
| **Summe** | | **23 (≤ 25)** | **710 s = 11:50** | **1.203** (rund 1.320) | ≈ 633 + Video |

Dazu 0:40 Reserve (Handzeichen, Rückgriffe, höchstens 30 s Live-Demo) = **12:30**. Kontrollpunkte und Kürzungsplan:
Gestaltungsplan 10.2 (stehen auch in den Notizen der Folien 02, 03, 06, 07). Backup B1–B9: `data-zeit="0"`.

## 4. Referentenansicht

**P** öffnet das zweite Fenster mit Sprechtext (je Schritt hervorgehoben), Gesamt- und Folienuhr und Planzeile („im
Plan“, „0:20 hinter Plan“) – Bedienung wie FS1 (`../../fallstudie-1-brand-persona/praesentation/LIESMICH.md` §4).
Im Referentenfenster spielt Folie 09 das Video **nicht** ab (kein zweiter Ton); dort steht der Rückfall-Rahmen.

## 5. Folie 08: Live-Demo der Konzept-Webseite

Der Link „Live-Demo ↗“ (erscheint mit Klick 2) öffnet `../konzept-website/index.html?anmerkungen=1` in einem neuen
Tab (kein `iframe`). Nur aus der Reserve, wenn der Kontrollpunkt nach 07 eingehalten ist, höchstens 30 s (Plan 7.4).
Tab vor Beginn öffnen und den Wechsel einmal üben (Plan 11.4). Die Bildschirmfotos in `bilder/konzept-0n-….png`
sind Kopien aus `../konzept-website/_vorschau/` (Stand 03.11.2026) – ändert sich die Webseite, neu kopieren.

## 6. Folie 09: Videobotschaft des Gründers

Klick 1 startet `intern/gruender-video.mp4` mit Ton im Handyrahmen; danach bleibt das letzte Bild stehen. Klick 2:
„Fragen?“ und Sprungliste B1–B9. Die Datei wird nur per Pfad eingebunden, nicht vorgeladen (erst beim Betreten der
Folie), nie in Druck, PDF, Aufnahme (`?aufnahme`, Prüfwerkzeug) oder Referentenfenster. Startet der Browser das Video
nicht von selbst (Folie per F5 direkt auf Schritt 1 geöffnet), erscheinen die Bedienelemente: einmal „Abspielen“.
**Ton im Beamer-Test prüfen** (Plan 11.4). Nicht im Repository, keine KI-Transkription (Plan 9.5).

## 7. Eigene Fotos eintragen (Bildplan, Gestaltungsplan 4)

Jede Bildkachel (`<figure class="p-kachel" data-status="offen" …>`) kennt drei Zustände: `offen` (Platzhalter, jetzt
überall außer der Blog-Textgrafik auf 03), `frei` (Foto) und `rueckfall` (eigene Grafik). Foto einsetzen: in der
Kachel `data-status="frei"` setzen und `<img src="intern/….jpg" alt="…">` einfügen. **Nicht freigegebene Fotos und
Screenshots nur nach `intern/`** (per `.gitignore` ausgeschlossen), nie nach `bilder/` – das Repository ist über
GitHub Pages öffentlich. Vor jedem Commit `git status` prüfen (Plan 11.5). Die Unterschrift als Protokoll („was ·
Paid/Owned/Earned · Ort/Kanal, Datum“, bei Screenshots zweite Zeile mit Urheber und Fundstelle) gehört dann als
`data-meta` an die Kachel (Plan 3.6).

## 8. Texte ändern und prüfen

Texte, Titel und Sprechtexte direkt in `index.html` (Kasten „FOLIE xx“ vor jeder Folie nennt, was offen ist). Danach
prüfen (Voraussetzung Node.js und playwright-core mit Chromium):

```bash
cd fallstudie-2-customer-journey/praesentation
PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core \
  node werkzeuge/pruefen.mjs index.html --ausgabe _test/pruefung --schritte
# dazu: --modus dunkel · --druck _test/pruefung/praesentation.pdf (Notfall-PDF, 18 Seiten)
```

Ergebnis am 03.11.2026: **0 Fehler** (hell mit PDF, dunkel, Themen Bento und Keynote), 0 externe Anfragen.
**Erlaubte Warnungen** (bewusst, Gestaltungsplan 1.3 und 3.6): Wortbudget über 40 auf 03–07 (Plan) sowie auf 02 (53),
08 (41) und 09 (53) – **nicht im Plan vorgesehen, Kürzung prüfen**; Notizen am Element in 24 px (03, 04, 05) und
Belegzeilen in 26 px (05) laut Plan 3.6. `_test/` ist per `.gitignore` ausgeschlossen.
Sichtprüfung zusätzlich (Plan 11.3): kein Gelb ohne schwarze Kontur auf Creme, kein Mittel warm auf Gelb, kein Ocker.

`werkzeuge/referent-test.mjs` ist aus FS1 **unverändert** übernommen und prüft FS1-Folien (Rad auf f10/f12,
Sprungliste der FS1-Folie 12): Mit FS2 bestehen nur die allgemeinen Prüfungen (Fenster verbunden, Start-Knopf), die
übrigen schlagen fehl – **für FS2 anpassen (offen)**. `werkzeuge/uebersicht.mjs` braucht Folienbilder in
`export/folien/` (noch nicht erzeugt).

## 9. Plan B

Notfall-PDF über `index.html?druck` → Strg + P → „Als PDF speichern“ (alle Folien im Endzustand; Folie 09 zeigt dort
Fazit und Fragen, nicht die Videobühne). Öffentliche Fassung nur mit Rückfällen und Freigegebenem (Plan 11.5).

## 10. Offen bis zum Vortrag (ohne Personen – für FS2 ist nichts verteilt)

- [ ] Selbstversuch mit Übergangsprotokoll (Ü1–Ü4), Fotos b01–b11, b20 → Kacheln 01–05, 09, B1; Datum in der Herleitung von 04
- [ ] Urteile auf 05 und Titel von 03, 05, 09 nach den Daten prüfen (Datenschluss Fr 06.11., Plan 12)
- [ ] Kurzinterviews (O-Töne auf 02, Bildgrößen im Moodboard 03, B5), Codierung der Bewertungen
- [ ] Workshop Mi 04.11.: Plätze 2 und 3 auf 06 bestätigen, Foto b12; Handskizze b15 (07)
- [ ] Auswahl der Vorbilder auf 07 bestätigen (je Phase eines aus Dossier 7a; Vorschlag dieses Baus)
- [ ] Libre Franklin (M5) statt Inter; `referent-test.mjs` für FS2 anpassen
- [ ] Leseprobe (Tempo messen), Generalproben Sa 07.11. und Mo 09.11., Beamer-Test mit Ton und `?buehne=schwarz`
- [ ] Veröffentlichung der Konzept-Webseite erst nach Stengers Antwort (Plan 13.1 Nr. 9)

## 11. Dateien

| Datei | Inhalt |
|---|---|
| `index.html` | alle Folien (01–09, B1–B9) mit Sprechtext in `<aside class="notizen">` |
| `marke.js` | Name, Farben, Titel „Customer Journey“, Datum 2026-11-10, Gruppe, Dozent; kein Logo |
| `css/tokens.css`, `css/deck.css`, `css/komponenten.css`, `js/deck.js`, `js/komponenten.js` | Engine aus FS1, unverändert |
| `css/folien/pfad.css` | Thema „Pfad“ (Farben fest, überschreibt die Ocker-Deckelung von `tokens.css`; Komponenten `p-…`) |
| `css/folien/01-einstieg.css` … `09-fazit.css`, `10-backup.css` | je Folie eine Datei |
| `js/folien/pfad.js` | Laufleiste S. 111, Journey-Raster (04–06), Pfad aus den Kachelmitten |
| `js/folien/09-fazit.js` | Videobotschaft (Schritt 1) und Sprungliste |
| `bilder/konzept-0n-….png` | Bildschirmfotos der eigenen Konzept-Webseite (Folie 08) |
| `schriften/` | Bricolage Grotesque, Inter, Fraunces (OFL), `HERKUNFT.txt` |
| `werkzeuge/` | `pruefen.mjs`, `uebersicht.mjs`, `referent-test.mjs` aus FS1 |
| `intern/` | nicht freigegebene Dateien (Videobotschaft), per `.gitignore` ausgeschlossen |
| `QUELLEN.md`, `AUTOREN.md` | Herkunft aller Bestandteile · Schnittstelle für Änderungen und Entstehung |
