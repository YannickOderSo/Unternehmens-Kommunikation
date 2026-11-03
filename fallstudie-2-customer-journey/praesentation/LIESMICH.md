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
**Zwei Fassungen (seit 03.11.2026):** Im Hörsaal läuft die **interne Fassung** mit Screenshots, Werbe- und
Community-Bildern von HOLY und Bildern der Vorbilder aus dem Ordner `intern/` (nicht im Repository, §12); die
**öffentliche Fassung** (Repository, GitHub Pages) zeigt an diesen Stellen die Platzhalter.

## 1. Starten

1. Den ganzen Ordner `praesentation/` kopieren (Unterordner gehören dazu; ZIP vorher ganz entpacken). Für die
   Live-Demo auf Folie 08 muss der Nachbarordner `../konzept-website/` mitkommen.
2. `index.html` per Doppelklick in **Chrome oder Edge** (aktuelle Version) öffnen. Läuft ohne Internet und ohne Server.
3. **F** = Vollbild. Die Bühne (1920 × 1080) passt sich jedem Bildschirm an.
4. Die **Videobotschaft** (Folie 09) liegt nur in `intern/gruender-video.mp4` (per `.gitignore` ausgeschlossen,
   nicht im Repository). Ohne die Datei zeigt Folie 09 den Rahmen „Videobotschaft des Gründers – nur im Vortrag“.
   Die Datei nicht verschieben und nicht umbenennen.
5. Die **Bilder der internen Fassung** kommen ebenfalls aus `intern/` (`intern/bilder.js` und `intern/bilder/`).
   Für den Vortrag den Ordner `praesentation/` **mit** `intern/` auf den Vortragsrechner kopieren (USB-Stick,
   Gruppenordner) – nie hochladen, nie ins Repository. Fehlt `intern/`, läuft die Präsentation trotzdem (Platzhalter). §12

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
Schrift; gilt bis zum Schließen des Tabs, zurück mit `?buehne=gelb`) · `?kacheln=rueckfall` (öffentliche Ansicht: keine
internen Bilder, auch wenn `intern/` da ist; jede Bildkachel mit `data-status="frei"` zeigt ihren Rückfall) · `?druck`
(Druckansicht für das Notfall-PDF, **mit** internen Bildern, wenn `intern/` da ist – §12) · `?bewegung=reduziert`.

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
Die Anzeige „Bündel A/B/C“ im Referentenfenster meint **Sprechblöcke** (01–03, 04–06, 07–09), keine Personen.

## 5. Folie 08: Live-Demo der Konzept-Webseite

Der Link „Live-Demo ↗“ (erscheint mit Klick 2) öffnet `../konzept-website/index.html?anmerkungen=1` in einem neuen
Tab (kein `iframe`). Nur aus der Reserve, wenn der Kontrollpunkt nach 07 eingehalten ist, höchstens 30 s (Plan 7.4).
Tab vor Beginn öffnen, auf 150–200 % zoomen (Strg +; Hinweisbalken und Etiketten sind sonst aus dem Saal zu klein) und
den Wechsel einmal üben (Plan 11.4). Die Bildschirmfotos in `bilder/konzept-0n-….png` erzeugt
`../konzept-website/werkzeuge/folie08-bilder.mjs` (je Seite der Ausschnitt, den die Anmerkung nennt; Produktseite mit
gewählter 50er-Dose) – ändert sich die Webseite, neu erzeugen:
`PLAYWRIGHT_CORE=… node fallstudie-2-customer-journey/konzept-website/werkzeuge/folie08-bilder.mjs fallstudie-2-customer-journey/praesentation/bilder`

## 6. Folie 09: Videobotschaft des Gründers

Klick 1 startet `intern/gruender-video.mp4` mit Ton im Handyrahmen; danach bleibt das letzte Bild stehen. Klick 2:
„Fragen?“ und Sprungliste B1–B9. Die Datei wird nur per Pfad eingebunden, nicht vorgeladen (erst beim Betreten der
Folie), nie in Druck, PDF, Aufnahme (`?aufnahme`, Prüfwerkzeug) oder Referentenfenster. Startet der Browser das Video
nicht von selbst (Folie per F5 direkt auf Schritt 1 geöffnet), erscheinen die Bedienelemente: einmal „Abspielen“.
**Ton im Beamer-Test prüfen** (Plan 11.4). Nicht im Repository, keine KI-Transkription (Plan 9.5).

## 7. Eigene Fotos eintragen (Bildplan, Gestaltungsplan 4)

Jede Bildkachel (`<figure class="p-kachel" data-status="offen" …>`) kennt die Zustände `offen` (Platzhalter),
`frei` (Bild), `rueckfall` (eigene Grafik, z. B. Blog auf 03) und – nur für Zusatzbilder der internen Fassung –
`aus` (öffentlich unsichtbar, Folie 07). Bilder werden **nicht mehr von Hand** in die Kachel geschrieben, sondern
über die interne Fassung (§12): Datei nach `intern/bilder/`, Eintrag mit `datei`, `alt`, `nachweis`, `pixel` in
`intern/bilder.js`, Schlüssel als `data-intern="…"` an der Kachel; das Skript setzt `data-status="frei"` und das
`<img>`. Ein eigenes Foto ersetzt ein HOLY-Bild, indem man im Eintrag `datei` und `nachweis` ändert (und die
Bildnachweis-Zeile der Folie anpasst). **Nicht freigegebene Fotos und Screenshots nur nach `intern/`** (per
`.gitignore` ausgeschlossen), nie nach `bilder/` – das Repository ist über GitHub Pages öffentlich. Vor jedem Commit
`git status` prüfen (Plan 11.5).

## 8. Texte ändern und prüfen

Texte, Titel und Sprechtexte direkt in `index.html` (Kasten „FOLIE xx“ vor jeder Folie nennt, was offen ist). Danach
prüfen (Voraussetzung Node.js und playwright-core mit Chromium):

```bash
cd fallstudie-2-customer-journey/praesentation
PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core \
  node werkzeuge/pruefen.mjs index.html --ausgabe _test/pruefung --schritte
# dazu: --modus dunkel · --druck _test/pruefung/praesentation.pdf (Notfall-PDF, 18 Seiten)
# öffentliche Fassung (intern/ per Route gesperrt): --oeffentlich – Pflicht für Ausgaben nach export/ oder bilder/
```

Ergebnis am 03.11.2026 (nach dem Einbau der internen Bilder, D06): **0 Fehler** in der internen Fassung (hell und
dunkel, 44 von 44 Bildern eingesetzt) und in der öffentlichen (`--oeffentlich`, mit Notfall-PDF 18 Seiten),
0 externe Anfragen; Einzelheiten §12.
**Erlaubte Warnungen** (bewusst, Gestaltungsplan 1.3, 3.4 und 3.6): Wortbudget über 40 auf 03–07 (Plan) sowie auf 02 (53),
08 (42) und 09 (53) – **nicht im Plan vorgesehen, Kürzung prüfen**; Notizen am Element in 24 px (03, 04, 05) und
Belegzeilen in 26 px (04, 05) laut Plan 3.6 (Ausnahme in 3.4). **Überlauf-Ausnahme:** nur der geschlossene Pfad auf
09 (`svg.e9-pfad`, `data-ueberlauf-ok`) läuft von Rand zu Rand; die Bildleiste darunter liegt im Satzspiegel. `_test/` ist per `.gitignore` ausgeschlossen.
Sichtprüfung zusätzlich (Plan 11.3): kein Gelb ohne schwarze Kontur auf Creme, kein Mittel warm auf Gelb, kein Ocker.

`werkzeuge/pruefen.mjs` ist gegenüber FS1 um die Bildprüfungen und `--oeffentlich` erweitert (§12, Kopf der Datei).
`werkzeuge/referent-test.mjs` ist aus FS1 **unverändert** übernommen und prüft FS1-Folien (Rad auf f10/f12,
Sprungliste der FS1-Folie 12): Mit FS2 bestehen nur die allgemeinen Prüfungen (Fenster verbunden, Start-Knopf), die
übrigen schlagen fehl – **für FS2 anpassen (offen)**. `werkzeuge/uebersicht.mjs` braucht Folienbilder in
`export/folien/` (noch nicht erzeugt).

## 9. Plan B

Notfall-PDF über `index.html?druck` → Strg + P → „Als PDF speichern“ (alle Folien im Endzustand; Folie 09 zeigt dort
Fazit und Fragen, nicht die Videobühne). Liegt `intern/` daneben, enthält das PDF die internen Bilder – dann nur in
`intern/` oder im Gruppenordner ablegen. Öffentliche Fassung nur mit Rückfällen und Freigegebenem (Plan 11.5):
`index.html?druck&kacheln=rueckfall` bzw. `pruefen.mjs --oeffentlich --druck …` (§12).

## 10. Offen bis zum Vortrag (ohne Personen – für FS2 ist nichts verteilt)

- [ ] Selbstversuch mit Übergangsprotokoll (Ü1–Ü4), Fotos b01–b11, b20 → Kacheln 01–05, 09, B1; Datum in der Herleitung von 04
- [ ] Eigene Fotos statt der HOLY-Werbe- und Community-Bilder der internen Fassung (b01 Titel, b04 Persona, Unboxing K5 …):
  Einträge in `intern/bilder.js` umstellen, Bildnachweis-Zeilen anpassen (§12)
- [ ] Interne Bilder durch die Gruppe sichten (Kontaktbogen `intern/kontaktbogen.png`), v. a. Symbolbilder 02/03/04 und
  das OTTO-Bild auf 07 (zeigt nur das Werbefoto der Serviceseite, nicht die Lieferzeit am Artikel)
- [ ] Urteile auf 05 und Titel von 03, 05, 09 nach den Daten prüfen (Datenschluss Fr 06.11., Plan 12)
- [ ] Kurzinterviews (O-Töne auf 02, Bildgrößen im Moodboard 03, B5), Codierung der Bewertungen
- [ ] Workshop Mi 04.11.: Plätze 2 und 3 auf 06 bestätigen, Foto b12; Handskizze b15 (07)
- [ ] Auswahl der Vorbilder auf 07 bestätigen (je Phase eines aus Dossier 7a; Vorschlag dieses Baus)
- [ ] Libre Franklin (M5) statt Inter; `referent-test.mjs` für FS2 anpassen
- [ ] Leseprobe (Tempo messen), Generalproben Sa 07.11. und Mo 09.11., Beamer-Test mit Ton und `?buehne=schwarz`
- [ ] Konzept-Webseite ist seit 03.11. über GitHub Pages erreichbar; Frage an Prof. Stenger bleibt (Plan 7.3, 13.2 Nr. 16)
- [ ] Logo-Freigabe des Gründers schriftlich mit Umfang ablegen (Empfehlung der Abnahme D05)
- [ ] Ü1 steht jetzt auf „wackelt“ (Umweg über die Suche, Plan 6.7.1) – im Selbstversuch bestätigen oder ändern
- [ ] Sprechtexte mit „[erst nach … so sprechen]“ (B1, B2, B5, B9) nach den Erhebungen anpassen

## 11. Dateien

| Datei | Inhalt |
|---|---|
| `index.html` | alle Folien (01–09, B1–B9) mit Sprechtext in `<aside class="notizen">` |
| `marke.js` | Name, Farben, Titel „Customer Journey“, Datum 2026-11-10, Gruppe, Dozent; `logoTitel` = gelbes Oval (01, 09; Freigabe 03.11.) |
| `css/tokens.css`, `css/deck.css`, `css/komponenten.css`, `js/deck.js`, `js/komponenten.js` | Engine aus FS1, unverändert |
| `css/folien/pfad.css` | Thema „Pfad“ (Farben fest, überschreibt die Ocker-Deckelung von `tokens.css`; Komponenten `p-…`) |
| `css/folien/01-einstieg.css` … `09-fazit.css`, `10-backup.css` | je Folie eine Datei |
| `js/folien/pfad.js` | Laufleiste S. 111, Journey-Raster (04–06), Pfad aus den Kachelmitten |
| `js/folien/09-fazit.js` | Videobotschaft (Schritt 1) und Sprungliste |
| `js/folien/intern-bilder.js` | interne Fassung: setzt die Bilder aus `intern/bilder.js` ein, Bildnachweis je Folie (§12) |
| `bilder/konzept-0n-….png` | Bildschirmfotos der eigenen Konzept-Webseite (Folie 08) |
| `schriften/` | Bricolage Grotesque, Inter, Fraunces (OFL), `HERKUNFT.txt` |
| `werkzeuge/` | `pruefen.mjs`, `uebersicht.mjs`, `referent-test.mjs` aus FS1 |
| `intern/` | nicht freigegebene Dateien, per `.gitignore` ausgeschlossen: Videobotschaft, `bilder.js` und `bilder/` (interne Bilder), `kontaktbogen.png`, `roh/` (§12) |
| `QUELLEN.md`, `AUTOREN.md` | Herkunft aller Bestandteile · Schnittstelle für Änderungen und Entstehung |

## 12. Interne Fassung mit Bildern (seit 03.11.2026)

Auftrag von Yannick (03.11.2026): Grafiken von HOLY herunterladen, damit Webseite und Präsentation gut aussehen; Nutzung
nur privat in der Uni (KI-Nachweis FS2, D06). Damit das so bleibt, gibt es zwei Fassungen aus **einer** `index.html`:

| | interne Fassung (Hörsaal) | öffentliche Fassung (Repository, GitHub Pages) |
|---|---|---|
| Ordner `intern/` neben `index.html` | da: `bilder.js`, `bilder/` (39 Bilder + 5 Bildschirmfotos der Konzept-Webseite), Video | fehlt (per `.gitignore` ausgeschlossen) |
| Bildkacheln 01–05, 07, 09 | Screenshots, Werbe- und Community-Bilder von HOLY, Bilder der Vorbilder | Platzhalter „offen“ bzw. Rückfall |
| Folie 08 | Bildschirmfotos der Konzept-Webseite **mit** HOLY-Produktbildern (`intern/bilder/konzept-0n-….png`) | Bildschirmfotos aus `bilder/` (ohne fremde Bilder) |
| Bildnachweis | eine Zeile unten auf jeder Folie mit Bildern, voller Nachweis je Bild in den Notizen (Taste P) | keine Zeile |

**So funktioniert es:** `index.html` lädt `intern/bilder.js` (setzt `window.INTERN_BILDER`) und danach
`js/folien/intern-bilder.js`. Das Skript sucht jedes Element mit `data-intern="<schlüssel>"`: in einer Bildkachel
setzt es ein `<img>` (mit `alt`, `width`/`height`) ein und stellt `data-status="frei"`, auf Folie 08 tauscht es die
Quelle der Bildschirmfotos, auf Folie 07 ersetzt es den Firmennamen durch das Logo. Fehlt `intern/bilder.js`, tut es
nichts. Fehlt eine einzelne Datei, kommt der öffentliche Zustand zurück (kein kaputtes Bild-Symbol). Die
Bildnachweis-Zeile (`<p class="p-bildquelle" hidden>`) erscheint nur, wenn auf der Folie ein internes Bild steht.
Herkunft jedes Bildes: [`QUELLEN.md`](QUELLEN.md) Abschnitt 4a und `intern/bilder.js` (Feld `nachweis`). Keines der
Bilder ist ein eigenes Foto der Gruppe – im Vortrag nicht als „unser Foto“ ansprechen.

**Zeigen:** Ordner `praesentation/` samt `intern/` (und `../konzept-website/` für die Live-Demo) auf den
Vortragsrechner kopieren, `index.html` öffnen (§1). Kontrolle vor dem Vortrag: Auf Folie 01 steht rechts das
HOLY-Produktbild und unten die Zeile „Bild: HOLY Softdrinks GmbH …“ – dann ist die interne Fassung aktiv.

**Schalter und Exporte (Entscheidung 03.11.2026):**
- `?kacheln=rueckfall` – öffentliche Ansicht erzwingen (keine internen Bilder, auch wenn `intern/` da ist).
- `?aufnahme` (Prüfwerkzeug, Bildschirmfotos) und `?druck` (Notfall-PDF) zeigen die internen Bilder, wenn `intern/`
  da ist – das Notfall-PDF für den Vortrag soll aussehen wie der Vortrag. Ein solches PDF gehört **nur** nach
  `intern/` oder in den Gruppenordner.
- **Exporte nach `export/` oder `bilder/` dürfen nie interne Bilder enthalten.** `pruefen.mjs` bricht ab, wenn
  `--ausgabe` oder `--druck` dorthin zeigt und `intern/bilder.js` vorliegt – außer mit `--oeffentlich`. Ein
  öffentliches PDF entsteht mit `--oeffentlich --druck …` oder über `index.html?druck&kacheln=rueckfall`.

**Prüfen** (im Ordner `praesentation/`, Ausgaben nur nach `_test/`):

```bash
export PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core
node werkzeuge/pruefen.mjs index.html --ausgabe _test/intern --schritte                  # interne Fassung, hell
node werkzeuge/pruefen.mjs index.html --ausgabe _test/intern-dunkel --schritte --modus dunkel
node werkzeuge/pruefen.mjs index.html --ausgabe _test/oeffentlich --schritte --oeffentlich # intern/ gesperrt
```

Die interne Prüfung meldet als Fehler: `data-intern` ohne Schlüssel in `intern/bilder.js` (mit `data-intern-optional`
nur Warnung, Folie 08), nicht geladene Dateien, verzerrte Bilder, sichtbares internes Bild ohne sichtbare
Bildnachweis-Zeile, Bildnachweis-Zeile über den Satzspiegel hinaus; als Warnung: hochgerechnete (unscharfe) Bilder.
Die öffentliche Prüfung meldet als Fehler: jedes eingesetzte interne Bild, jedes Bild aus `intern/`, jede sichtbare
Bildnachweis-Zeile. Fehlt `intern/bilder.js` ohne `--oeffentlich`, ist das nur eine Warnung („öffentliche Fassung
ohne interne Bilder“). Bericht: `bericht.json` → `interneBilder`.

**Stand 03.11.2026:** intern hell und dunkel je 0 Fehler, 44 von 44 Bildern eingesetzt (inkl. `konzept-01` … `-05`
vom Website-Bau); öffentlich (`--oeffentlich`, mit Notfall-PDF 18 Seiten) 0 Fehler; Kopie ohne `intern/`: 0 Fehler,
1 Warnung „öffentliche Fassung ohne interne Bilder“; Gegenprobe mit einer gelöschten Bilddatei: Kachel zeigt wieder
den Platzhalter, die Prüfung meldet den Fehler. Klicks (23), Sollzeiten (710 s) und Sprechtexte unverändert (§3).
**Bewusst offen:** Workshop-Foto b12 (06), Handskizze b15 (07), „Tipp unter Kollegen“ (03) – kein Fremdbild zeigt das
ehrlich; eigene Fotos aus dem Selbstversuch (§10).
