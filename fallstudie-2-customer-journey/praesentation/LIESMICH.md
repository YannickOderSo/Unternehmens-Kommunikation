# LIESMICH – Web-Präsentation Fallstudie 2 (HOLY, „Customer Journey“)

Präsentation zur Fallstudie 2 „Customer Journey“ (Marke **HOLY**) im Modul Unternehmenskommunikation bei
Prof. Dr. Daniel Stenger, Hochschule Kaiserslautern. Gruppe: Yannick Heisler, Elias Knauber, Lukas Welker.
Vortrag: **Di, 10.11.2026**, 15 Minuten. Änderungsstopp Mo, 09.11., 20:00 (Gestaltungsplan 10.3).

**Stand 08.11.2026 – finale Fassung (KI-gestützt), Prüfung durch die Gruppe offen.** Gebaut KI-gestützt nach
[`../gestaltungsplan.md`](../gestaltungsplan.md) (Folienplan 5.1, Gestaltung „Pfad“ Abschnitt 3, Technik 11) mit
Fakten nur aus dem Dossier [`../recherche-customer-journey.md`](../recherche-customer-journey.md) (Befund-IDs mit
Status ✔ belegt · ✎ korrigiert · ~ unsicher · **H** Hypothese). **Keine eigene Erhebung** (Entscheidung Yannick
08.11.2026, KI-Nachweis FS2 Nr. 26): Es gab keinen Selbstversuch, keine Kurzinterviews, keine eigene Codierung, keinen
Workshop und keine eigenen Fotos. Die Folien sagen ehrlich, worauf sie beruhen – Dossier mit Befund-IDs, Abrufe von
Shop, Help-Center, Suche und Bewertungsportalen (30.10./03.11.2026), KI-gestützte Stichproben (~ B20–B24) –, und B1
zeigt Methode und Grenzen. Es gibt keine „offen“-Platzhalter und kein „(vorläufig)“ mehr. Neu auf Folie 08: Knopf
„Spot ansehen ▶“ für den Werbespot „Mein Moment.“ (§5). Entstehung: [`AUTOREN.md`](AUTOREN.md), Abschnitt 8 und 14.
**Fassung mit Bildern (Standard seit 03.11.2026):** Die Präsentation zeigt Screenshots, Werbe- und Community-Bilder von
HOLY und die Logos der Vorbilder aus `fremdbilder/` und spielt auf Folie 09 die Videobotschaft des Gründers aus `video/` –
im Repository, auf GitHub Pages und im Hörsaal gleich. **Rechtestatus:** Die Veröffentlichung der Fremdbilder hat die
Gruppe beschlossen (KI-Nachweis FS2 Nr. 17); eine Genehmigung der Rechteinhaber (HOLY Softdrinks GmbH, Lebensmittel
Zeitung, YouTube, Trustpilot, Apple, OTTO, zooplus, Philips, P&G, Urheber der Community-Fotos) wurde **nicht**
eingeholt. HOLY-Logo mit Einverständnis (Nr. 12), Videobotschaft mit Zustimmung des Gründers, auch öffentlich online
(Nr. 18). Nicht kommerziell, für die Lehrveranstaltung, mit Bildnachweis; keine eigenen Fotos der Gruppe; keine
Rechtsberatung (Gestaltungsplan 1.2, 4). Den
**Rückfall ohne Fremdbilder** (Platzhalter) gibt es nur noch, wenn `fremdbilder/register.js` fehlt oder per Schalter (§12).
Bis 03.11.2026 lagen Bilder und Video als „interne Fassung“ im ausgeschlossenen Ordner `intern/`.

## 1. Starten

1. Den ganzen Ordner `praesentation/` kopieren (Unterordner gehören dazu; ZIP vorher ganz entpacken). Für die
   Live-Demo auf Folie 08 muss der Nachbarordner `../konzept-website/` mitkommen, für den Werbespot auf Folie 08 der
   Nachbarordner `../werbevideo/` (mindestens `holy-werbespot.mp4`, `-poster.jpg`, `.de.vtt`) – am einfachsten den
   ganzen Ordner `fallstudie-2-customer-journey/` kopieren.
2. `index.html` per Doppelklick in **Chrome oder Edge** (aktuelle Version) öffnen. Läuft ohne Internet und ohne Server.
3. **F** = Vollbild. Die Bühne (1920 × 1080) passt sich jedem Bildschirm an.
4. Die **Videobotschaft** (Folie 09) liegt in `video/gruender-video.mp4` (versioniert; veröffentlicht mit Zustimmung
   des Gründers, KI-Nachweis FS2 Nr. 18). Kann der Browser sie nicht abspielen, zeigt Folie 09 im Rahmen
   „Videobotschaft des Gründers – lässt sich in diesem Browser nicht abspielen“ (§6). Die Datei nicht verschieben und
   nicht umbenennen.
5. Die **Fremdbilder** liegen in `fremdbilder/` (Liste `fremdbilder/register.js`) und gehören zum Ordner
   `praesentation/` – einfach mitkopieren. Fehlt `fremdbilder/register.js`, läuft die Präsentation trotzdem (Rückfall
   ohne Fremdbilder: Platzhalter). `intern/` wird für den Vortrag nicht gebraucht (nur Rohmaterial). §12

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
Schrift; gilt bis zum Schließen des Tabs, zurück mit `?buehne=gelb`) · `?kacheln=rueckfall` (Rückfall ohne Fremdbilder,
auch wenn `fremdbilder/` da ist; jede Bildkachel mit `data-status="frei"` zeigt ihren Rückfall) · `?druck`
(Druckansicht für das Notfall-PDF, mit Fremdbildern wie im Vortrag – §12) · `?bewegung=reduziert`.

## 3. Ablauf, Klicks und Sollzeiten

Nachgezählt am 03.11.2026 aus `index.html` (Schritte je Folie wie `pruefen.mjs`, Klicks = Schritte + Weiterschalten;
auf 09 ist Klick 2 „Fragen?“). Sprechtext = Absätze mit `data-schritt` in den Notizen, ohne Regieanweisungen in
[ ]; Zeit bei 1,9 Wörtern/s (Planwert, **nicht gemessen**). Seit D07 hat Folie 04 ein Wort mehr
(„Der Blog ist leer (0 Beiträge).“ statt „Einen Blog gibt es nicht.“, ✔ M01, ✔ L39). **Seit D12 (08.11.2026):** 05 +7
Wörter (Satz zu den Urteilen: „unsere Bewertung … – einen eigenen Testkauf haben wir nicht gemacht“), 08 +25 Wörter
(optionale Überleitung zum Werbespot) und `data-zeit` 85 → 110 s (+25 s Spot); Klicks unverändert (der Knopf „Spot
ansehen ▶“ ist kein Schritt). Die Wortzahlen D12 sind als Unterschied zum Stand 03.11. nachgezählt (gleiche Regel).

| Folie | Inhalt (Aufgabe · Laufleiste S. 111) | Klicks (Plan) | Soll `data-zeit` (Plan) | Sprechtext Wörter (Plan) | ≈ s |
|---|---|--:|--:|--:|--:|
| 01 | Einstieg, Handzeichen-Trichter (gelbe Bühne) | 2 (2) | 50 (50) | 75 (95) | 39 + Handzeichen |
| 02 | Persona Marco und Mediennutzung · ohne Schritt | 2 (2) | 60 (60) | 113 (114) | 59 |
| 03 | A1 IST-Analyse und Bewertung · 1 | 3 (3) | 80 (80) | 156 (152) | 82 |
| 04 | A2 Journey-Map, „Zentraler Weg (IST)“ · 2 | 3 (3) | 80 (80) | 135 (152) | 71 |
| 05 | A3 Überleitungen wackelt · bricht · wackelt · wackelt · 2 | 3 (3) | 95 (95) | 169 (180) | 89 |
| 06 | A4 Top 3 je Phase, „Zentraler Weg (SOLL)“ · 3 | 3 (3) | 100 (100) | 175 (190) | 92 |
| 07 | A5 + A6 Vorbild → Maßnahme · 4 | 2 (2) | 90 (90) | 163 (171) | 86 |
| 08 | A7 Konzept-Webseite in Handyrahmen (gelbe Bühne) · 4 | 3 (3) | **110** (85) | 149 (162) | 78 + Spot 25 s oder Demo |
| 09 | Fazit, Kennzahlen, Videobotschaft, Fragen (gelbe Bühne) · 5 | 2 (2) | 70 (70) | 101 (103) | 53 + 16 s Video |
| **Summe** | | **23 (≤ 25)** | **735 s = 12:15** | **1.236** (rund 1.320) | ≈ 650 + Video + Spot |

Bis D12: 710 s + 0:40 Reserve (Handzeichen, Rückgriffe, höchstens 30 s Live-Demo) = **12:30**. Seit D12 enthält die
Sollzeit von 08 die 25 s Werbespot: 735 s = 12:15, Reserve bis 12:30 nur noch 0:15 – **Spot und Live-Demo nicht
beide**; ist der Kontrollpunkt nach 07 überschritten, entfällt der Spot (Notiz 08). Bis 15:00 bleiben 2:45 für Fragen und
Übergänge. Kontrollpunkte und Kürzungsplan: Gestaltungsplan 10.2 (stehen auch in den Notizen der Folien 02, 03, 06,
07, 08). Backup B1–B9: `data-zeit="0"`.

## 4. Referentenansicht

**P** öffnet das zweite Fenster mit Sprechtext (je Schritt hervorgehoben), Gesamt- und Folienuhr und Planzeile („im
Plan“, „0:20 hinter Plan“) – Bedienung wie FS1 (`../../fallstudie-1-brand-persona/praesentation/LIESMICH.md` §4).
Im Referentenfenster spielt Folie 09 das Video **nicht** ab (kein zweiter Ton); dort steht der Rahmen „Videobotschaft
des Gründers – läuft in der Web-Präsentation“.
Die Anzeige „Bündel A/B/C“ im Referentenfenster meint **Sprechblöcke** (01–03, 04–06, 07–09), keine Personen.

## 5. Folie 08: Live-Demo der Konzept-Webseite und Werbespot

**Werbespot „Mein Moment.“ (seit D12, 08.11.2026).** Mit Klick 2 erscheinen rechts unten zwei Knöpfe: „Spot ansehen ▶“
und „Live-Demo ↗“. „Spot ansehen ▶“ öffnet eine Bühne über der Präsentation und spielt `../werbevideo/holy-werbespot.mp4`
(24,5 s, mit Ton; Poster und Untertitel aus demselben Ordner, README dort). Die Datei wird erst beim Klick angefragt;
beim Betreten der Folie startet nichts. Bedienung, solange die Bühne offen ist:

| Taste / Aktion | Wirkung |
|---|---|
| Ende des Spots | Bühne schließt sich von selbst, die Folie bleibt auf Schritt 2 |
| → ↓ ← ↑ Bild↓ Bild↑ Enter Rücktaste (Clicker) | schließt die Bühne **ohne weiterzublättern**; erst der nächste Druck blättert |
| Esc · Knopf „Schließen ✕“ · Klick neben das Video | schließt die Bühne (Esc beendet im Vollbild zusätzlich das Vollbild – Browser; im Vortrag deshalb Pfeiltaste/Clicker) |
| Leertaste / K · Klick ins Video | Pause / weiter |
| U · Knopf „Untertitel an“ | Untertitel an/aus (nur online, z. B. GitHub Pages; per Doppelklick/`file://` verweigert Chrome die Untertitel-Datei, der Knopf heißt dann „Untertitel nur online“) |
| F | Vollbild wie sonst; alle anderen Tasten (O, P, B, Ziffern …) sind gesperrt |

Läuft der Spot nicht (Datei fehlt, Browser ohne H.264), steht in der Bühne „Der Werbespot lässt sich in diesem Browser
nicht abspielen …“; Pfeiltaste, ein Satz Überleitung, weiter. Ein Folienwechsel per Befehl (z. B. aus dem
Referentenfenster) schließt die Bühne. **Nicht** im Druck/Notfall-PDF (`?druck`), nicht im Referentenfenster (dort kein
zweiter Ton; Knopf ausgeblendet – den Spot im Präsentationsfenster per Maus starten) und ohne Wirkung in der Übersicht (O).
Kennzeichnung in der Bühne: „Studentisches Konzept · keine Werbung der HOLY Softdrinks GmbH · Stimme KI-generiert“
(der Spot trägt sie auch selbst); Stimme, Musik und Geräusche KI-generiert (ElevenLabs, KI-Nachweis FS2 Nr. 24 / D11),
HOLY-Bilder im Spot ohne Genehmigung der Rechteinhaber (Beschluss der Gruppe, Nr. 17). Zeit: +25 s (data-zeit 110), nur
wenn der Kontrollpunkt nach 07 eingehalten ist, nicht zusammen mit der Live-Demo. **Ton im Beamer-Test prüfen.**
Technik: `js/folien/08-spot.js`, `css/folien/08-spot.css`.

**Live-Demo.**

Der Link „Live-Demo ↗“ (erscheint mit Klick 2) öffnet `../konzept-website/index.html?anmerkungen=1` in einem neuen
Tab (kein `iframe`). Nur aus der Reserve, wenn der Kontrollpunkt nach 07 eingehalten ist, höchstens 30 s (Plan 7.4).
Tab vor Beginn öffnen, auf 150–200 % zoomen (Strg +; Hinweisbalken und Etiketten sind sonst aus dem Saal zu klein) und
den Wechsel einmal üben (Plan 11.4). Die Bildschirmfotos erzeugt `../konzept-website/werkzeuge/folie08-bilder.mjs`
(je Seite der Ausschnitt, den die Anmerkung nennt; Produktseite mit gewählter 50er-Dose, Warenkorb und Danke-Seite mit
`?packung=50`) – ändert sich die Webseite, beide Sätze neu erzeugen (im Wurzelordner des Repositorys):

```bash
export PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core
node fallstudie-2-customer-journey/konzept-website/werkzeuge/folie08-bilder.mjs           # → bilder/ (Rückfall ohne Fremdbilder)
node fallstudie-2-customer-journey/konzept-website/werkzeuge/folie08-bilder.mjs --intern  # → fremdbilder/ (Fassung mit Bildern; Schaltername historisch)
```

Nicht aus `../konzept-website/_vorschau/` kopieren: Dort liegt die Fassung mit Bildern (mit HOLY-Produktbildern), die
nicht nach `bilder/` gehört.

## 6. Folie 09: Videobotschaft des Gründers

Klick 1 startet `video/gruender-video.mp4` mit Ton im Handyrahmen; danach bleibt das letzte Bild stehen. Klick 2:
„Fragen?“ und Sprungliste B1–B9. Die Datei wird nur per Pfad eingebunden, nicht vorgeladen (erst beim Betreten der
Folie), nie in Druck, PDF, Aufnahme (`?aufnahme`, Prüfwerkzeug) oder Referentenfenster – dort wird die Datei nie
angefragt, und im Handyrahmen steht der Standardtext „Videobotschaft des Gründers – läuft in der Web-Präsentation“.
Scheitert das Abspielen wirklich (Datei fehlt, Browser ohne H.264), setzt `js/folien/09-fazit.js` den Text
„Videobotschaft des Gründers – lässt sich in diesem Browser nicht abspielen“ (dann ein Satz Überleitung, Notiz der
Folie). Startet der Browser das
Video nicht von selbst (Folie per F5 direkt auf Schritt 1 geöffnet), erscheinen die Bedienelemente: einmal „Abspielen“.
**Ton im Beamer-Test prüfen** (Plan 11.4). Versioniert und veröffentlicht mit Zustimmung des Gründers (KI-Nachweis FS2
Nr. 18; bis 03.11.2026 lag die Datei ausgeschlossen in `intern/`); keine KI-Transkription, keine Zitate (Plan 9.5).

## 7. Bilder tauschen (Bildplan, Gestaltungsplan 4)

**Seit D12 (08.11.2026) gibt es keine eigenen Fotos** – keine eigene Erhebung (KI-Nachweis FS2 Nr. 26); alle Bilder
sind Screenshots und Fremdbilder mit Bildnachweis. Der folgende Ablauf gilt nur, falls die Gruppe später doch eigene
Fotos einsetzt. Jede Bildkachel (`<figure class="p-kachel" data-status="leer" …>`) kennt die Zustände `leer`
(beschrifteter Platzhalter, nur im Rückfall ohne Fremdbilder; bis D12 hieß der Zustand `offen`), `frei` (Bild),
`rueckfall` (eigene Grafik, z. B. Blog auf 03) und – nur für Zusatzbilder der Fassung mit Bildern – `aus` (im Rückfall
unsichtbar; seit D07 nicht mehr verwendet). Bilder werden **nicht von Hand** in die Kachel
geschrieben, sondern über das Register (§12): Datei nach `fremdbilder/`, Eintrag mit `datei`, `alt`, `nachweis`,
`pixel` in `fremdbilder/register.js`, Schlüssel als `data-intern="…"` an der Kachel; das Skript setzt
`data-status="frei"` und das `<img>`. Ein eigenes Foto ersetzt ein HOLY-Bild, indem man im Eintrag `datei` und
`nachweis` ändert (und die Bildnachweis-Zeile der Folie anpasst). **Eigene Fotos und Screenshots zuerst nach `intern/`**
(per `.gitignore` ausgeschlossen) oder in den Gruppenordner; erst nach Sichtung durch die Gruppe (personenbezogene Daten
geschwärzt) nach `fremdbilder/` – alles dort ist über GitHub Pages öffentlich. Vor jedem Commit `git status` prüfen
(Plan 11.5).

## 8. Texte ändern und prüfen

Texte, Titel und Sprechtexte direkt in `index.html` (Kasten „FOLIE xx“ vor jeder Folie nennt Aufbau, Herkunft der
Bilder und Bedienung). Danach
prüfen (Voraussetzung Node.js und playwright-core mit Chromium):

```bash
cd fallstudie-2-customer-journey/praesentation
PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core \
  node werkzeuge/pruefen.mjs index.html --ausgabe _test/pruefung --schritte
# dazu: --modus dunkel · --druck _test/pruefung/praesentation.pdf (Notfall-PDF, 18 Seiten)
# Rückfall ohne Fremdbilder (fremdbilder/ per Route gesperrt): --oeffentlich
```

Ergebnis am 03.11.2026 (nach der Überarbeitung D08): **0 Fehler** in der Fassung mit Bildern (hell und dunkel,
38 von 38 Fremdbildern eingesetzt, 38 Schlüssel im Register) und im Rückfall ohne Fremdbilder (`--oeffentlich`, mit
Notfall-PDF 18 Seiten), je 17 Warnungen wie vorher, 0 externe Anfragen; Einzelheiten §12.
**Erlaubte Warnungen** (bewusst, Gestaltungsplan 1.3, 3.4 und 3.6): Wortbudget über 40 auf 03–07 (Plan) sowie auf 02 (53),
08 (42) und 09 (53) – **nicht im Plan vorgesehen, Kürzung prüfen**; Notizen am Element in 24 px (03, 04, 05) und
Belegzeilen in 26 px (04, 05) laut Plan 3.6 (Ausnahme in 3.4). **Überlauf-Ausnahme:** nur der geschlossene Pfad auf
09 (`svg.e9-pfad`, `data-ueberlauf-ok`) läuft von Rand zu Rand; die Bildleiste darunter liegt im Satzspiegel. `_test/` ist per `.gitignore` ausgeschlossen.
Sichtprüfung zusätzlich (Plan 11.3): kein Gelb ohne schwarze Kontur auf Creme, kein Mittel warm auf Gelb, kein Ocker.

**Ergebnis am 08.11.2026 (D12, finale Fassung):** siehe §13 und AUTOREN §14.
`werkzeuge/pruefen.mjs` ist gegenüber FS1 um die Bildprüfungen und `--oeffentlich` erweitert (§12, Kopf der Datei).
`werkzeuge/referent-test.mjs` ist aus FS1 **unverändert** übernommen und prüft FS1-Folien (Rad auf f10/f12,
Sprungliste der FS1-Folie 12): Mit FS2 bestehen nur die allgemeinen Prüfungen (Fenster verbunden, Start-Knopf), die
übrigen schlagen fehl – **für FS2 anpassen (offen)**. `werkzeuge/uebersicht.mjs` braucht Folienbilder in
`export/folien/` (noch nicht erzeugt).

## 9. Plan B

Notfall-PDF über `index.html?druck` → Strg + P → „Als PDF speichern“ (alle Folien im Endzustand; Folie 09 zeigt dort
Fazit und Fragen, nicht die Videobühne). Das PDF enthält die Fremdbilder wie der Vortrag (Veröffentlichung von der
Gruppe beschlossen, KI-Nachweis FS2 Nr. 17, keine Genehmigung der Rechteinhaber eingeholt) und darf im Gruppenordner
oder im Repository liegen. Ohne Fremdbilder:
`index.html?druck&kacheln=rueckfall` bzw. `pruefen.mjs --oeffentlich --druck …` (§12). Bis 03.11.2026 durfte ein PDF
mit Bildern nur in `intern/` liegen.

## 10. Was die Gruppe bis zum Vortrag noch tun muss (Stand 08.11.2026; ohne Personen – für FS2 ist nichts verteilt)

Inhaltlich ist nichts mehr offen: keine eigene Erhebung (Entscheidung 08.11.2026), alle Platzhalter sind ersetzt.
Was bleibt, kann nur die Gruppe tun:

- [ ] **Rollen verteilen**: wer welche Folien spricht, wer Zeitwächter ist (Gestaltungsplan 13.1 Nr. 7). Das Redeskript
  nennt nur einen **Vorschlag** (01–03 Yannick, 04–06 Lukas, 07–09 Elias in Anlehnung an die FS1-Bündel).
- [ ] **Alles lesen und abnicken** (Folien, Notizen, B1–B9): Die finale Fassung ist KI-gestützt; Prüfung durch die Gruppe
  offen, auch der Vorschlag Plätze 2/3 (06), die Auswahl der Vorbilder (07) und die Urteile (05, Hypothese).
- [ ] **Generalprobe** Mo 09.11. (Änderungsstopp 20:00): Tempo messen (Planwert 1,9 Wörter/s ist nicht gemessen),
  Kontrollpunkte und Kürzungen üben, Entscheidung Spot **oder** Live-Demo.
- [ ] **Beamer-Test** Di 10.11.: Ton (Videobotschaft 09, Werbespot 08), `?buehne=schwarz`, Live-Demo-Tab vorab öffnen.
- [ ] **Werbespot anhören** (Handy und Kopfhörer) und abnicken – bisher nur maschinell geprüft (`../werbevideo/README.md` §8).
- [ ] **Rechtefragen** bewusst entscheiden: Fremdbilder und HOLY-Bilder im Spot veröffentlicht ohne Genehmigung der
  Rechteinhaber (Beschluss der Gruppe, KI-Nachweis FS2 Nr. 17); Fragen an Prof. Stenger (Plan 13.2 Nr. 6, 16) und HOLY
  (13.3); Logo-Freigabe des Gründers schriftlich mit Umfang ablegen (Empfehlung der Abnahme D05).
- [ ] **Fremdbilder sichten** (Kontaktbogen `intern/kontaktbogen.png`), v. a. die Symbolbilder 02/03/04/05/09.
- [ ] **Rückfrage „Habt ihr selbst getestet/befragt?“** üben: ehrlich „nein“ – B1 (Methode, Grenzen) und B5.
- [ ] **KI-Nachweis** FS2 Nr. 26 / D12 prüfen und den Prüfstatus eintragen; danach B9 „Prüfung“ nachziehen.
- [ ] Technik, optional: Libre Franklin (M5) statt Inter; `werkzeuge/referent-test.mjs` für FS2 anpassen.

## 11. Dateien

| Datei | Inhalt |
|---|---|
| `index.html` | alle Folien (01–09, B1–B9) mit Sprechtext in `<aside class="notizen">` |
| `marke.js` | Name, Farben, Titel „Customer Journey“, Datum 2026-11-10, Gruppe, Dozent; `logoTitel` = gelbes Oval (01, 09; mit Einverständnis, KI-Nachweis FS2 Nr. 12) |
| `css/tokens.css`, `css/deck.css`, `css/komponenten.css`, `js/deck.js`, `js/komponenten.js` | Engine aus FS1, unverändert |
| `css/folien/pfad.css` | Thema „Pfad“ (Farben fest, überschreibt die Ocker-Deckelung von `tokens.css`; Komponenten `p-…`) |
| `css/folien/01-einstieg.css` … `09-fazit.css`, `10-backup.css` | je Folie eine Datei |
| `js/folien/pfad.js` | Laufleiste S. 111, Journey-Raster (04–06), Pfad aus den Kachelmitten |
| `js/folien/08-spot.js`, `css/folien/08-spot.css` | Werbespot auf Folie 08: Knopf „Spot ansehen ▶“, Bühne über der Präsentation, Tasten, Fehlerfall (§5; D12) |
| `../werbevideo/holy-werbespot.mp4` (+ `-poster.jpg`, `.de.vtt`) | Werbespot „Mein Moment.“ (24,5 s), liegt außerhalb von `praesentation/`, per Pfad eingebunden; studentisches Konzept, keine Werbung der HOLY Softdrinks GmbH, Stimme KI-generiert (KI-Nachweis FS2 Nr. 24 / D11) |
| `js/folien/09-fazit.js` | Videobotschaft (Schritt 1) und Sprungliste |
| `js/folien/intern-bilder.js` | Fassung mit Bildern: setzt die Fremdbilder aus `fremdbilder/register.js` ein, Bildnachweis je Folie (§12; Name historisch) |
| `fremdbilder/` | Fremdbilder und Liste `register.js` (Screenshots, Werbe- und Community-Bilder von HOLY, Logos der Vorbilder, Bildschirmfotos der Konzept-Webseite mit Bildern); Veröffentlichung von der Gruppe beschlossen (KI-Nachweis FS2 Nr. 17), keine Genehmigung der Rechteinhaber eingeholt; Herkunft QUELLEN §4a |
| `video/gruender-video.mp4` | Videobotschaft des Gründers (Folie 09); veröffentlicht mit Zustimmung des Gründers (KI-Nachweis FS2 Nr. 18) |
| `bilder/konzept-0n-….png` | Bildschirmfotos der eigenen Konzept-Webseite ohne fremde Bilder (Folie 08 im Rückfall; erzeugt mit `folie08-bilder.mjs` ohne Schalter, §5) |
| `schriften/` | Bricolage Grotesque, Inter, Fraunces (OFL), `HERKUNFT.txt` |
| `werkzeuge/` | `pruefen.mjs`, `uebersicht.mjs`, `referent-test.mjs` aus FS1 |
| `intern/` | per `.gitignore` ausgeschlossen, nur Rohmaterial: `roh/` (Rohdownloads mit `manifest.json`), `kontaktbogen.png`, alte Kopie `alt-vor-veroeffentlichung/` (nicht verwenden, nicht löschen), zurückgehaltene Bilder `vorbilder-zurueckgehalten/` (sechs Bilder der Vorbilder mit `register-auszug.js`, D08) (§12) |
| `QUELLEN.md`, `AUTOREN.md` | Herkunft aller Bestandteile · Schnittstelle für Änderungen und Entstehung |

## 12. Fassung mit Bildern (seit 03.11.2026) und Rückfall ohne Fremdbilder

**Verlauf.** Auftrag von Yannick (03.11.2026): Grafiken von HOLY herunterladen, damit Webseite und Präsentation gut
aussehen (KI-Nachweis FS2, D06). Bis 03.11.2026 lagen die ausgewählten Bilder und das Video deshalb als „interne
Fassung“ im ausgeschlossenen Ordner `intern/`. Danach hat Yannick die Veröffentlichung erlaubt („Du darfst die Sachen
online auf github posten für die online pages ich erlaube es dir“, KI-Nachweis FS2 Nr. 17), und der Gründer hat (über
Yannick) erlaubt, dass sein Video öffentlich online in der Präsentation läuft (Nr. 18). Seitdem liegen die Bilder
versioniert in `fremdbilder/` und das Video in `video/` – nicht kommerziell, für die Lehrveranstaltung, mit
Bildnachweis; keine eigenen Fotos der Gruppe. **Eine Genehmigung der Rechteinhaber wurde nicht eingeholt**; die
Veröffentlichung der Fremdbilder ist ein Beschluss der Gruppe und eine bewusste Abweichung von der eigenen
Einschätzung (Gestaltungsplan 1.2 und 4, ✎ G21; keine Rechtsberatung). Fremdbilder ohne Verwendung auf einer Folie
werden nicht veröffentlicht (seit D08: die sechs Bilder der Vorbilder liegen zurückgehalten in
`intern/vorbilder-zurueckgehalten/`).

| | Fassung mit Bildern (Standard) | Rückfall ohne Fremdbilder |
|---|---|---|
| wann | immer: Repository, GitHub Pages, Hörsaal | nur wenn `fremdbilder/register.js` fehlt, mit `?kacheln=rueckfall` oder im Prüflauf mit `--oeffentlich` |
| Bildkacheln 01–05, 09 | Screenshots, Werbe- und Community-Bilder von HOLY (Symbolbilder als solche beschriftet) | beschriftete Platzhalter (`data-status="leer"`, z. B. „Produktbild von HOLY · nur in der Fassung mit Bildern“; bis D12 „offen“) bzw. Rückfall-Grafik (Blog auf 03) |
| Folie 07 | Logos der Vorbilder statt der Namen (einfarbig dunkel, im Modus dunkel hell) | Namen fett |
| Folie 08 | Bildschirmfotos der Konzept-Webseite **mit** HOLY-Produktbildern (`fremdbilder/konzept-0n-….png`) | Bildschirmfotos aus `bilder/` (ohne fremde Bilder) |
| Folie 09 | Videobotschaft aus `video/gruender-video.mp4` (hängt nicht an `register.js`) | wie links |
| Bildnachweis | eine Zeile unten auf jeder Folie mit Bildern, voller Nachweis je Bild in den Notizen (Taste P) | keine Zeile |

**Namen aus der Zeit vor der Veröffentlichung.** `window.INTERN_BILDER`, die Attribute `data-intern`, `data-intern-optional`,
`data-intern-status` und `data-intern-bild`, die Klasse `p-intern-logo`, die Datei `js/folien/intern-bilder.js`,
`html[data-fassung="intern"]` (die Werte `oeffentlich` und `oeffentlich-ansicht` bedeuten Rückfall), die Prüfoption
`--oeffentlich` und der Berichtsteil `interneBilder` heißen noch wie vor der Veröffentlichung. Sie bleiben aus technischen
Gründen (Skripte, CSS, Prüfwerkzeug und Konzept-Webseite greifen darauf zu); gemeint ist immer die Fassung mit Bildern
bzw. der Rückfall ohne Fremdbilder.

**So funktioniert es:** `index.html` lädt `fremdbilder/register.js` (setzt `window.INTERN_BILDER`) und danach
`js/folien/intern-bilder.js`. Das Skript sucht jedes Element mit `data-intern="<schlüssel>"`: in einer Bildkachel
setzt es ein `<img>` (mit `alt`, `width`/`height`) ein und stellt `data-status="frei"`, auf Folie 08 tauscht es die
Quelle der Bildschirmfotos, auf Folie 07 ersetzt es den Firmennamen durch das Logo. Fehlt `fremdbilder/register.js`,
tut es nichts. Fehlt eine einzelne Datei, kommt der Zustand ohne Bild zurück (kein kaputtes Bild-Symbol). Die
Bildnachweis-Zeile (`<p class="p-bildquelle" hidden>`) erscheint nur, wenn auf der Folie ein Fremdbild steht.
Herkunft jedes Bildes: [`QUELLEN.md`](QUELLEN.md) Abschnitt 4a und `fremdbilder/register.js` (Feld `nachweis`). Keines
der Bilder ist ein eigenes Foto der Gruppe – im Vortrag nicht als „unser Foto“ ansprechen.

**`intern/`** (per `.gitignore` ausgeschlossen) enthält nur noch Rohmaterial: `roh/` (Rohdownloads, je Ordner
`manifest.json` mit Quelle und Abrufdatum), `kontaktbogen.png`, die alte Kopie `alt-vor-veroeffentlichung/` (nicht
verwenden, nicht löschen) und `vorbilder-zurueckgehalten/` (sechs Bilder der Vorbilder, nicht veröffentlicht; Einträge
zum Zurückholen in `register-auszug.js`). Neue Zuschnitte entstehen aus `intern/roh/` und kommen mit Eintrag in
`register.js` nach `fremdbilder/`.

**Kontrolle vor dem Vortrag:** Auf Folie 01 steht rechts das HOLY-Produktbild und unten die Zeile „Bild: HOLY
Softdrinks GmbH …“ – dann ist die Fassung mit Bildern aktiv. Auf Folie 09 startet Klick 1 das Video mit Ton.

**Schalter und Exporte:**
- `?kacheln=rueckfall` – Rückfall ohne Fremdbilder erzwingen (auch wenn `fremdbilder/` da ist).
- `?aufnahme` (Prüfwerkzeug, Bildschirmfotos) und `?druck` (Notfall-PDF) zeigen die Fremdbilder – das Notfall-PDF soll
  aussehen wie der Vortrag. Eine Exportsperre gibt es nicht mehr (bis 03.11.2026 brach `pruefen.mjs` bei Ausgaben nach
  `export/` oder `bilder/` ohne `--oeffentlich` ab).
- Das Video erscheint nie in Druck, PDF, Aufnahme und Referentenfenster; dort steht der Rahmen (§6).

**Prüfen** (im Ordner `praesentation/`, Ausgaben nur nach `_test/`):

```bash
export PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core
node werkzeuge/pruefen.mjs index.html --ausgabe _test/hell --schritte                     # Fassung mit Bildern, hell
node werkzeuge/pruefen.mjs index.html --ausgabe _test/dunkel --schritte --modus dunkel
node werkzeuge/pruefen.mjs index.html --ausgabe _test/rueckfall --schritte --oeffentlich --druck _test/rueckfall.pdf
```

Die Prüfung der Fassung mit Bildern meldet als Fehler: `data-intern` ohne Schlüssel in `fremdbilder/register.js` (mit
`data-intern-optional` nur Warnung, Folie 08), nicht geladene Dateien, verzerrte Bilder, sichtbares Fremdbild ohne
sichtbare Bildnachweis-Zeile, Bildnachweis-Zeile über den Satzspiegel hinaus; als Warnung: hochgerechnete (unscharfe)
Bilder. Die Prüfung des Rückfalls (`--oeffentlich`, `fremdbilder/` per Route gesperrt) meldet als Fehler: jedes
eingesetzte Fremdbild, jedes Bild aus `fremdbilder/`, jede sichtbare Bildnachweis-Zeile. Fehlt `fremdbilder/register.js`
ohne `--oeffentlich`, ist das nur eine Warnung („Rückfall ohne Fremdbilder (fremdbilder/register.js fehlt)“). Bericht:
`bericht.json` → `interneBilder` (Name historisch). Das Chromium des Prüfwerkzeugs spielt kein H.264 ab: Ohne
`?aufnahme` fällt das Video auf 09 dort auf den Fehlertext zurück – kein Fehler der Seite; `pruefen.mjs` lädt mit
Aufnahme-Klasse, dort steht der Standardtext.

**Überarbeitung D07 (03.11.2026, Befunde der Abnahme D06):**
- 07: nur noch die Logos (einfarbig dunkel, je Logo eigene Höhe: YouTube 26, Apple 30, zooplus 28 ohne grünen Kasten,
  OTTO 24, Philips 22, Pampers 34 px). Die sechs kleinen Bilder der Vorbilder (144 × 81, unlesbar) sind entfernt; sie
  blieben in `fremdbilder/` (`v07-…`), standen aber auf keiner Folie – auf B6 ist neben der Tabelle kein Platz für sechs
  Bilder in mindestens 360 × 203 (seit D08 zurückgehalten, siehe unten). `v07-otto` ist jetzt der Textausschnitt der OTTO-Serviceseite mit dem Satz „Die
  Lieferzeit zeigen wir dir vor deiner Bestellung direkt am jeweiligen Artikel an.“
- 03: Blog-Kachel mit Beschriftung „Blog: 0 Beiträge“ (✔ M01, ✔ L39) und neuem Ausschnitt, damit die Beschriftung nicht
  über dem Satz „Dieser Blog hat noch keine Beiträge“ liegt; Dose & Shaker neu gesetzt (Produkt oben rechts,
  Beschriftung auf freier Fläche); „Tipp unter Kollegen“ in der Fassung mit Bildern ruhig wie die Leerstelle auf 04
  (Creme, gestrichelter Rand, Text „offen“).
- 02: Beschriftung „Symbolbild Schichtarbeit – nicht Marco / (Lokführer aus der HOLY-Community)“; Notiz zur Rückfrage
  „Ist Marco Lokführer?“. 05: K6 ohne Beschriftung (das Bild zeigt selbst „SQUAD REWARDS“).
- Bildquellzeilen 04, 05, 09 mit „Community-Foto HOLY (Symbolbild, nicht Marco)“, 07 „Logos … · einfarbig, nur zur
  Kennzeichnung der Vorbilder · Abruf 03.11.2026“.
- Sprechtext 04: „Der Blog ist leer (0 Beiträge).“ statt „Einen Blog gibt es nicht.“ (+1 Wort, §3); Notiz 03
  „Der Blog ist leer (0 Beiträge; ✔ M01, ✔ L39)“. Rückfall-Text des Videos: „Videobotschaft des Gründers – in der
  Web-Präsentation auf Folie 09“ (vorher „– nur im Vortrag“).

**Stand 03.11.2026 (D07):** Fassung mit Bildern hell und dunkel `--schritte` je 0 Fehler, 17 Warnungen (wie vorher:
Wortbudget, 24-/26-px-Notizen), 38 von 38 Fremdbildern eingesetzt (vorher 44: die sechs Bilder der Vorbilder auf 07
entfallen); Rückfall `--oeffentlich --schritte --druck` 0 Fehler, 17 Warnungen, PDF 18 Seiten, 0 Fremdbilder. Klicks
(23) und Sollzeiten (710 s) unverändert (§3). Funktionstest Folie 09 (eigenes Skript, nicht im Repository): nach dem
Betreten steht `src = video/gruender-video.mp4`; mit einer Route, die die Anfrage mit einem synthetischen WebM
beantwortet, startet das Video mit Klick 1 mit Ton, kein Rahmen; ohne Route erscheint im Test-Chromium (ohne H.264) der
Rahmen mit dem neuen Text; mit `?aufnahme` keine Quelle, keine Anfrage, Rahmen.
**Bewusst offen (Stand D07; seit D12 erledigt):** Workshop-Foto b12 (06), Handskizze b15 (07), „Tipp unter Kollegen“
(03) – kein Fremdbild zeigt das ehrlich; seit D12 sind die drei Kacheln entfernt (keine eigene Erhebung, §13).

**Überarbeitung D08 (03.11.2026, Befunde der Abnahme D07):**
- Rechtestatus überall genau statt „veröffentlicht mit Freigabe“: Fremdbilder – Veröffentlichung von der Gruppe
  beschlossen (KI-Nachweis FS2 Nr. 17), keine Genehmigung der Rechteinhaber eingeholt; Logo mit Einverständnis (Nr. 12);
  Videobotschaft mit Zustimmung des Gründers (Nr. 18). So auch auf B8 (sichtbarer Text und Kernsatz der Notiz), in der
  Bildnachweis-Notiz, die `intern-bilder.js` je Folie schreibt, und in den Kommentaren.
- Die sechs Bilder der Vorbilder (`v07-youtube` … `v07-pampers`, auf keiner Folie) sind **zurückgehalten, nicht
  veröffentlicht**: Dateien und Registereinträge in `intern/vorbilder-zurueckgehalten/` (ausgeschlossen); Kasten und
  Notiz 07 entsprechend. Im Repository bleiben sie in der Git-Historie (Commit vom 03.11.2026).
- 03: `m03-suche` neu zugeschnitten aus `intern/roh/touchpoints/k2-suche/k2-startpage-holy-energy-koffein-treffer-mobil.png`
  – die Beschriftung „eigene Suche“ liegt jetzt unter dem Treffertext statt auf dessen zweiter Zeile (380 × 180 wie
  vorher).
- 02: Nachweis des Symbolbilds ohne den Vornamen aus der Bildunterschrift („Community-Foto eines Lokführers aus dem
  HOLY-Squad … Name weggelassen“); `m03-dose-shaker` mit „Packshot … · Werbebild, kein eigenes Foto der Gruppe“;
  `konzept-01` … `-05` mit dem Wortlaut des Website-Baus (Fassung mit Bildern statt „interne Fassung“).
- 08: Kasten nennt beide Sätze von `folie08-bilder.mjs` (ohne Schalter → `bilder/`, mit `--intern` → `fremdbilder/`;
  nicht aus `_vorschau/` kopieren, §5).
- 09: zwei Rückfalltexte (§6) – Standardtext im HTML „Videobotschaft des Gründers – läuft in der Web-Präsentation“
  (Druck, PDF, Aufnahme, Referentenfenster; im Handyrahmen 4 Zeilen), Fehlertext „… – lässt sich in diesem Browser
  nicht abspielen“ nur bei einem echten Abspielfehler (5 Zeilen). Ein `AbortError` von `play()` (Anhalten vor dem
  Start, z. B. schnelles Weiterklicken) gilt nicht mehr als Fehler.

**Stand 03.11.2026 (D08):** Fassung mit Bildern hell und dunkel `--schritte` je 0 Fehler, 17 Warnungen, 38 von 38
Fremdbildern eingesetzt (Register 38 Schlüssel, vorher 44); Rückfall `--oeffentlich --schritte --druck` 0 Fehler,
17 Warnungen, PDF 18 Seiten, 0 Fremdbilder. Klicks (23) und Sollzeiten (710 s) gegen den Stand vor D08 (Git-Commit
6288a1d) nachgezählt: unverändert; Sprechtext 01–09 unverändert (nur die Backup-Notiz B8 ist länger). Funktionstest
Folie 09 (eigenes Skript, nicht im Repository): mit synthetischem WebM per Route startet das Video mit Klick 1 mit Ton,
kein Rahmen; ohne Route (Test-Chromium ohne H.264) und bei fehlender Datei der Fehlertext; mit `?aufnahme` und `?druck`
keine Quelle, keine Anfrage an die Videodatei, Standardtext.

## 13. Finalisierung D12 (08.11.2026): keine eigene Erhebung, Werbespot

Auftrag (Yannick, 08.11.2026): „Finalisiere die Präsentation“; Antworten auf die Rückfragen: ohne Erhebung – alle
„offen“-Platzhalter raus, Folien ehrlich umformulieren, nichts erfinden; Knopf „Spot ansehen“ auf 08; Redeskript als PDF
(KI-Nachweis FS2 Nr. 26 / D12). Umbau KI-gestützt, Einzelheiten je Folie: AUTOREN §14; Inventur aller Fundstellen vor
dem Umbau im Arbeitsordner der Sitzung (nicht im Repository).

- **Sichtbar entfernt:** O-Ton-Zeile (02), Kachel „Tipp unter Kollegen“ und Interview-Legende (03), „(vorläufig)“ im
  Titel und „Selbstversuch offen/folgt“ in den Herleitungen (04, 05), Workshop-Kachel b12 (06), Skizze b15 (07), alle
  „offen“-Texte in Platzhaltern und Backup-Tabellen. Neu: B1 Methode (geprüft · nicht erhoben · Grenzen), B5 Kundenstimmen
  aus Bewertungsportalen (✔ B14 B15, ~ B17 B20–B24), B9 ehrlich (nicht durchgeführt; Werbespot ergänzt); Sprungliste
  „B1 Methode“, „B5 Stimmen“.
- **Technik:** Zustand der Platzhalter `data-status="offen"` → `"leer"`, Klasse `p-kachel-offen` → `p-kachel-text`,
  `p-offen` → `p-hinweis` (CSS, `pfad.js`, `intern-bilder.js`); Werbespot `js/folien/08-spot.js`, `css/folien/08-spot.css`.
- **Prüfstand:** AUTOREN §14 (pruefen.mjs hell/dunkel/Rückfall, Funktionstest Werbespot).
