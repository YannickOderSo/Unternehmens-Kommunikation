<!-- Endgültiges Drehbuch des Werbespots (Fallstudie 2, Workflow D10, Schritte „Produktion“ und „Nacharbeit nach der
Abnahme“), 04.11.2026. KI-gestützt erstellt, Prüfung durch die Gruppe offen. Keine neue Websuche in diesen Schritten: Alle
Fakten stammen aus der Konzept-Webseite (Befund-ID im Code) bzw. aus dem Recherche-Dossier FS2 (recherche-customer-journey.md).
Bildideen, Schnitt, Ton und Texte sind Entwürfe aus Modellwissen über Werbefilm-Gestaltung (nicht belegt). Die Videobotschaft
des Gründers wurde nicht angesehen, nicht angehört und nicht verwendet. -->

# Drehbuch „Zahlen statt Versprechen“ – Spot HOLY Energy Raspberry Raptor

Fallstudie 2 (Customer Journey) · Stand 04.11.2026, **nach der Nacharbeit (Abschnitt 10)** · KI-gestützt erstellt, Prüfung
durch die Gruppe offen

> Studentisches Konzept der Gruppe (HS Kaiserslautern) – keine Website und keine Werbung der HOLY Softdrinks GmbH ·
> keine Bestellung möglich.

## 1 Leitidee

Der Spot ist der Block **„HOLY Energy in vier Zahlen“** der Konzept-Webseite als Bewegtbild (`konzept-website/index.html`
Z. 128–147): Er beginnt selbstironisch mit dem Werbeversprechen, das er *nicht* gibt („Wir könnten dir jetzt viel
~~versprechen~~ … Machen wir nicht.“), und zeigt stattdessen genau die vier Zahlen der Webseite – Menge, Koffein, Zucker,
Preis je Portion –, jede mit Quelle am Bild. Danach folgt er dem Weg der Konzept-Webseite auf einem echten Handy-Bildschirm:
Startseite mit dem Code aus dem Video („Werbung“ daneben), „Erst nachlesen, dann entscheiden.“, Koffein-Check mit „Eine
Portion pro Tag.“ und Tipp auf „7 Quellen“, nach dem Kauf der Squad mit einem Klick. Schluss: **„HOLY Energy. Zahlen statt
Versprechen.“**

## 2 Eckdaten

| | |
|---|---|
| Format | 9 : 16, 1080 × 1920, 30 fps, **26,8 s** (804 Bilder), Deutsch |
| Stimme | ElevenLabs, synthetisch gestaltete Stimme **„simpleact-design-b“** (`1ZBEaCGxeV794wdwBQr4`, männlich, Hochdeutsch, laut Stimmbeschreibung „direkt und energisch, aber nicht verkäuferisch“), mehrsprachige Sprachausgabe von ElevenLabs, stability 0,45 · similarity_boost 0,8 · style 0,25 · speaker boost an · **speed 0,95** (Jury-Auflage: Zahlen nicht zu schnell). Keine Klonstimme, keine Nachahmung einer realen Person. **Ein** Aufruf mit Zeitstempeln (`/with-timestamps`), an den Satzgrenzen geschnitten; in der Nacharbeit nur neu gelegt, nicht neu erzeugt |
| Sprechertext | 408 Zeichen, 13 Sätze, 20,4 s reine Sprechzeit; Zahlen als Wörter, „HOLY“ im Sprechertext als „Holi“ geschrieben (englische Aussprache), in Bild und Untertitel „HOLY“ und Ziffern |
| Musik | ElevenLabs Musik (`/v1/music`, 30 s, instrumental, 120 BPM). Im Spot ohne die Takte 15,00–16,00 s (zwei Schläge mit Break, Schnitt im Takt), Schnitte liegen auf den Schlägen (0,5 s), Schlussakzent auf dem Schnitt zur Endkarte bei 22,23 s |
| Schriften | Bricolage Grotesque (800, Breite 75 %) für Zahlen und Titel, Inter für Nebentext – lokal aus `konzept-website/schriften/` (OFL 1.1) |
| Farben | wie Konzept-Webseite (`assets/konzept.css`): Pink #F08EB8, Gelb #FFD007, Zitrone #FFF200, Lila #C09CE3, Schwarz #1D1D1B, Weiß |

## 3 Was gegenüber dem Siegerentwurf geändert wurde (Jury-Auflagen und übernommene Ideen)

| Auflage / Idee | Umsetzung |
|---|---|
| Bewertung 4,87 ohne Hinweis zur Echtheitsprüfung (UWG § 5b Abs. 3, Hinweis aus Modellwissen), Zungenbrecher „vierzehnhundertneun“, Sterne voll gefüllt | **Bewertung als Heldenzahl gestrichen.** Die vier Zahlen sind genau die vier der Webseite (7 g + 500 ml, 160 mg, 0,1 g, 0,80 €). Das Bewertungs-Band der Webseite steht in der Handy-Aufnahme **nicht still**: Es läuft nur in 4 Bildern einer schnellen Scroll-Fahrt durch (141–267 CSS-Pixel je Bild, mit Bewegungsunschärfe; gemessen in `intern/handy/start/scroll.json`) und ist dabei nicht lesbar |
| Customer Journey fehlt (Code, Squad, „keine Sackgasse“) | Handy-Strecke E7–E8: Startseite mit „Dein Code ist schon drin.“ und **CREATOR10 mit „Werbung“** (echte Aufnahme), „Erst nachlesen, dann entscheiden.“, Tipp auf „Zum Koffein-Check“, Tipp auf „7 Quellen“, Danke-Seite mit Tipp auf „Squad beitreten“ → `squad.html`; Balken „Squad: / ein Klick.“, Level-Abzeichen; Etiketten „Konzept-Webseite der Gruppe · Code: Platzhalter · Rabatt: Beispielwert“ bzw. „Konzept der Gruppe · Bestellung und Coins: Beispielwerte“ |
| vier gleich gebaute Zahlenkarten | vier verschiedene Bauformen: Lila mit Kreismaske und gekipptem Balken (1/4), Gelb mit Zähler und einfliegender Dose (2/4), Pink mit Foto als schräger Oberkante (3/4), Schwarz mit Einschlag, Dose und Sachet im Parallax und Preiskarte (4/4) |
| Preis ohne „zzgl. Versand“ | Preiskarte: „114,26 €/kg · inkl. MwSt.“ / „zzgl. 4,99 € Versand, ab 49 € versandfrei“ + „Preise laut HOLY-Shop, abgerufen am 30.10.2026“; die Karte fährt **zugleich mit „0,80 €“** hoch (ab 12,62 s), der Preis steht nie ohne Grundpreis |
| 0,1 g nur mit Süßungsmitteln, kein „zuckerfrei“ | Bild: „zubereitet · gesüßt mit Sucralose und Acesulfam K“; das Wort „zuckerfrei“ kommt in unserem Text nicht vor. Die eigene Packungsaufschrift des Sachets („Sugar Free …“, Herstellerangabe) ist bei 480 px Bildbreite nicht lesbar und nicht Teil unserer Aussage. Abnicken durch die Gruppe offen (Abschnitt 9) |
| kein EFSA-400-mg-Satz | nicht gesprochen und nicht als Bildtext. In der Handy-Aufnahme des Koffein-Checks liegt der EFSA-Punkt in jedem Bild unterhalb des Bildrands; die Überschrift „… wie viel ist okay?“ verdeckt der Kasten „Für Erwachsene.“ in **jedem** Bild (er fährt schon vor dem Seitenwechsel ein und erst nach dem Sprung zur Quellenliste hinaus); der Sprung zu „7 Quellen“ ist ein harter Schnitt ohne Zwischenbilder (Nacharbeit, Bild für Bild geprüft) |
| Handy-Aufnahmen nicht hochskalieren | Aufnahmen mit `deviceScaleFactor: 3` (1170 × 2532 px), im Spot 0,6-fach × Kamerafahrt ≤ 1,05 = höchstens 0,63-fach; Lupe 0,6 × 1,5 × 1,05 ≤ 0,95-fach |
| Endkarte mit großem Packshot (aus „code-drin“) | Packshot 50er-Dose mit Raptor-Shaker (2048 px, gezeigt mit 780–858 px), Glanzstreifen nur als Licht über dem Motiv (Idee aus „erst-lesen“) |
| Pflichtzeile dezenter, nicht in der obersten App-Zone | dunkle Pille Weiß auf #1D1D1B, 31 px, oben bei y = 112–210 (statt Vollbreite Zitrone ab y = 0); im Hook (0–3 s) steht „Studentisches Konzept (HS Kaiserslautern)“ in Zitrone |
| „So steht's auf dem Etikett“ (aus „code-drin“) | gesprochen in E7b: „Für Erwachsene: eine Portion am Tag, so steht's auf dem Etikett.“ (Dossier 8.3 Do 3, wörtlich nah) |
| Zubereitungsfoto ohne Registerschlüssel | 1/4 nutzt `zubereitung-1-pulver-gelb.jpg` (= Motiv `web-produkt-galerie-3` / `web-start-portion`); 3/4 nutzt jetzt `zubereitung-3-schuetteln-gelb.jpg` (= Motiv `web-produkt-galerie-4` / `web-danke-zubereitung-3`). Das Eis-Foto ohne Schlüssel ist nicht mehr im Spot |

## 4 Pflichtkennzeichnung

| Pflicht | Umsetzung | Messwerte |
|---|---|---|
| (a) Zeile „Studentisches Konzept (HS Kaiserslautern) · keine Werbung der HOLY Softdrinks GmbH“ | dauerhaft 0,0–26,8 s, dunkle Pille oben (y 112–210), liegt über allem; im Hook 0–3 s erste Zeile fett in Zitrone | Bricolage 600 (fett 800), **Schriftgrad 31 px**; am Bild gemessen: Zeilenhöhe mit Ober- und Unterlängen 27 px, Versalhöhe 21 px, x-Höhe 17 px (Abnahme, Bild 279). Weiß auf #1D1D1B 16,9 : 1 (gemessen 16,4 : 1), Zitrone auf #1D1D1B 14,4 : 1. Größer geht nicht ohne dritte Zeile: bei 33 px ist Zeile 1 breiter als die Pille. Pille in allen 804 Bildern unverändert (mittlere Abweichung im Inneren ≤ 1,0) |
| (b) „Stimme KI-generiert“ | zweite Zeile derselben Pille, dauerhaft: „Stimme KI-generiert · Zahlen laut Etikett und HOLY-Shop“; auf der Endkarte zusätzlich „Stimme, Musik und Geräusche KI-generiert (ElevenLabs)“ | wie (a) |
| (c) Altershinweis | Endkarte 22,23–26,8 s: „Nicht für unter 18, Schwangere und Stillende · eine Portion pro Tag (laut Etikett)“; zusätzlich E7b gesprochen „Für Erwachsene: eine Portion am Tag, so steht's auf dem Etikett.“, im Bild Kasten „Für Erwachsene. So steht's auf dem Etikett.“, Titel „Eine Portion pro Tag.“ und Lupe auf „Laut Etikett: eine zubereitete Portion pro Tag.“ | 32 px Schwarz auf Pink 7,4 : 1 |
| (d) Creator-Code | nur in der echten Aufnahme der Startseite (E7a, 15,0–15,45 s, während das Handy aufsteigt; danach in der Scroll-Fahrt): „CREATOR10“ mit Etikett „Werbung“ direkt daneben, darüber „Werbung · Bezahlte Partnerschaft … @creator_platzhalter“; dazu im Spot oben „Konzept-Webseite der Gruppe · Code: Platzhalter · Rabatt: Beispielwert“ | Etikett der Webseite; Hinweis 30 px #5C5547 auf Weiß 7,4 : 1 |
| (e) voller Hinweis | Endkarte, schwarzer Kasten: „Studentisches Konzept der Gruppe (HS Kaiserslautern) – keine Website und keine Werbung der HOLY Softdrinks GmbH · keine Bestellung möglich“; blendet ab 22,23 s in 0,2 s ein, **voll lesbar ab 22,43 s (Bild 673) bis 26,8 s = 4,37 s** (Bildvergleich des Hinweisbereichs, durchgehend bis Bild 803) | 32 px, Weiß auf Schwarz 16,9 : 1 |
| Bildnachweis | Endkarte unten: „Stimme, Musik und Geräusche KI-generiert (ElevenLabs) · Bilder: HOLY Softdrinks GmbH (de.holy.com), Abruf 03.11.2026 – ohne Genehmigung, nicht kommerziell, für die Lehrveranstaltung“ | 26 px Schwarz auf Pink 7,4 : 1 |
| Quelle an jeder Zahl | Pille „laut Etikett Raspberry Raptor“ (1/4, 2/4, 3/4), Preiskarte „Preise laut HOLY-Shop, abgerufen am 30.10.2026“ (4/4) | 30 px Weiß auf Schwarz 16,9 : 1 |

Die Handy-Aufnahmen tragen außerdem die Hinweisleiste der Konzept-Webseite („Studentisches Konzept der Gruppe (HS
Kaiserslautern) – keine Website der HOLY Softdrinks GmbH · keine Bestellung möglich“). Über der Seite zeichnet die Bühne bei
allen vier Seiten eine feste Statusleiste mit der Insel; die Seite liegt in einem eigenen Ausschnitt darunter, sodass kein
Seiteninhalt über der Hinweisleiste durchläuft (Nacharbeit).

## 5 Einstellungen (Zeitcodes in Sekunden, Bild = Sekunde × 30)

| # | Zeit | Bild und Bewegung | Bildschirmtext | Sprecher (Lage im Spot) | Ton |
|---|---|---|---|---|---|
| E1 | 0,00–3,00 | **Pink.** Schon Bild 0 zeigt „Wir“ und das Produktfoto (`web-start-video`, randlos 1080 px = 1 : 1, Oberkante mit Verlauf ins Pink). Punch-in in 0,25 s (Überschrift 1,06 → 1,00, Foto 40 px Hub), danach Parallax. Restliche Wörter aus der Maske (Ease-out-Expo). 1,72 s Marker (Gelb + Schwarz) zieht durch „versprechen“. 2,28 s Schild „Machen wir nicht.“ springt mit Überschwinger auf | „Wir könnten dir jetzt viel ~~versprechen~~ …“ · „Machen wir nicht.“ | 0,35–2,02 „Wir könnten dir jetzt viel versprechen.“ · 2,30–3,02 „Machen wir nicht.“ | 0,02 Plopp, Beat ab 0; 1,70 Marker-Wisch; **2,25–3,00 Musik setzt aus (Gag-Pause)**, 2,28 Plopp |
| E2 | 3,00–4,60 | **Harter Schnitt auf Schwarz** auf den Schlag, Musik zurück mit Einschlag. „Hier sind / Zahlen.“ in Zitrone, 250 px, aus der Maske, kurzes Kamerawackeln (deterministisch, 0,16 s); vier Zählerpunkte springen auf und füllen sich | „Hier sind Zahlen.“ | 3,10–3,97 „Hier sind Zahlen.“ | 3,00 Einschlag; 4,30 Whoosh |
| E3 | 4,38–7,62 | **Wischer schräg von rechts auf Lila.** „7 g“ federt hoch (400 px), „+ 500 ml Wasser“ schießt von links herein (5,38). Kreismaske mit schwarzem Rand öffnet sich (outBack) auf das Zubereitungsfoto „Pulver in den Shaker“ (Rohdatei 2400 px, im Kreis 900 px, Zoom 1,0 → 1,1). 6,48 s gekippter Balken „= eine Portion.“ (Gelb, −4°) | „1/4“ · „7 g“ · „+ 500 ml Wasser“ · „= eine Portion.“ · Pille „laut Etikett Raspberry Raptor“ | 4,60–7,29 „Sieben Gramm auf fünfhundert Milliliter: eine Portion.“ | 4,30 Whoosh, 4,78 Plopp (Kreis) |
| E4 | 7,38–10,00 | **Wischer schräg von unten auf Gelb.** „160“ zählt in 0,7 s hoch (Ease-out), „mg“ federt ein, Packshot 50er-Dose fliegt mit −22° → −7°, Bewegungsunschärfe und Federung von rechts unten herein, danach Parallax | „2/4“ · „160 mg“ · „Koffein je Portion“ · „also 32 mg pro 100 ml zubereitet“ · Pille „laut Etikett Raspberry Raptor“ | 7,62–9,24 „Hundertsechzig Milligramm Koffein.“ | 7,30 Whoosh, 7 Zähl-Ticks, 7,62 Whoosh der Dose |
| E5 | 10,00–12,50 | **Harter Schnitt auf Pink** mit Ruck (Skalierung 1,05 → 1). Zubereitungsfoto „Schütteln“ (Rohdatei 2400 px, gezeigt mit 1200 px, gewollte Bewegungsunschärfe des Fotos) fällt als Fläche mit schräger Unterkante von oben ins Bild; „0,1 g“ federt hoch, „Zucker pro 100 ml“ schießt von links | „3/4“ · „0,1 g“ · „Zucker pro 100 ml“ · „zubereitet · gesüßt mit Sucralose und Acesulfam K“ · Pille „laut Etikett Raspberry Raptor“ | 10,05–12,55 „Null Komma eins Gramm Zucker auf hundert Milliliter.“ | 10,00 Einschlag, 10,12 Eiswürfel im Shaker (leise) |
| E6 | 12,50–15,25 | **Harter Schnitt auf Schwarz.** „0,80 €“ in Gelb knallt rein (1,35 → 1,0 in 0,2 s, Unschärfe), **zugleich** fährt die weiße Preiskarte hoch (12,62 s, voll ab ca. 13,0 s); 50er-Dose von rechts, Sachet von links, beide mit Bewegungsunschärfe und gegenläufigem Parallax | „4/4“ · „0,80 € je Portion“ · Karte „Dose mit 50 Portionen: 39,99 €“ / „114,26 €/kg · inkl. MwSt.“ / „zzgl. 4,99 € Versand, ab 49 € versandfrei“ / „Preise laut HOLY-Shop, abgerufen am 30.10.2026“ | 12,62–13,88 „Achtzig Cent pro Portion.“ | 12,50 Einschlag, 12,62 Karten-Swipe |
| E7a | 14,92–17,00 | **Pinke Fläche wischt schräg von unten über das Schwarz** (Musik läuft durch). Handy (eigene Rahmenzeichnung, −3°) steigt auf; über die ganze Handy-Strecke langsame Kamerafahrt (Push-in 1,00 → 1,05, 0,8° Drehung), also kein Standbild. **Echte Bildschirmaufnahme** `index.html` (Playwright, 390 × 844 bei dreifacher Pixeldichte, 60 Bilder): 0–0,42 s „Dein Code ist schon drin.“ mit CREATOR10 + „Werbung“, dann **eine** schnelle Fahrt (0,42–1,25 s, gerichtete Bewegungsunschärfe) bis zur schwarzen Fläche „Erst nachlesen, dann entscheiden.“, dort Halt; 16,78 s Tipp auf „Zum Koffein-Check“ | „Erst nachlesen, dann entscheiden.“ (128 px, Wort für Wort) · oben „Konzept-Webseite der Gruppe · Code: Platzhalter · Rabatt: Beispielwert“ | 15,05–16,71 „Erst nachlesen, dann entscheiden.“ | 14,88 Whoosh, 15,42 leiser Whoosh (Fahrt), 16,72 Karten-Swipe, 16,76 Tipp |
| E7b | 17,00–20,42 | Kasten **„Für Erwachsene.“** fährt schon 16,70–16,98 s von links ein; er hängt im Koordinatensystem des Handys und liegt über der Überschrift der nächsten Seite. 17,00 s Seitenwechsel auf `koffein-check.html` (echte Aufnahme nach dem Tipp). 17,30 s **Lupe** springt auf: nur Punkt 2 aus „Kurz gesagt“, „Laut Etikett: eine zubereitete Portion pro Tag.“ (Ausschnitt derselben Aufnahme, im Bild ≤ 0,95-fach), 17,75/18,08 s pinker Marker unter „eine zubereitete Portion pro Tag.“; oben Titel „Eine Portion pro Tag.“ Wort für Wort im Takt der Stimme. 19,50 s Tipp auf „7 Quellen“ → **19,60 s harter Sprung** zur Quellenliste (echte Aufnahme nach dem Tipp, keine Zwischenbilder, 0,16 s Unschärfe beim Aufblitzen); erst danach fahren Kasten und Lupe hinaus; Titel „7 Quellen zum Nachlesen.“ | „Eine Portion pro Tag.“ · Kasten „Für Erwachsene. So steht's auf dem Etikett.“ · Lupe „Laut Etikett: eine zubereitete Portion pro Tag.“ · „7 Quellen zum Nachlesen.“ | 17,10–20,25 „Für Erwachsene: eine Portion am Tag, so steht's auf dem Etikett.“ | 17,30 Plopp (Lupe), 17,75 Marker-Wisch, 19,48 Tipp, 19,58 Whoosh |
| E8 | 20,13–22,23 | **Lila wischt schräg von links.** Handy (+4°) mit echter Aufnahme `danke.html` („Willkommen im Squad · 10 Coins pro Euro · Squad beitreten“), 21,05 s Tipp auf „Squad beitreten“ → `squad.html` schiebt sich wie im Browser herein; gekippte Balken „Squad:“ (20,6 s) und „ein Klick.“ (21,18 s); vier Level-Abzeichen springen nacheinander auf | „Squad: ein Klick.“ · oben „Konzept der Gruppe · Bestellung und Coins: Beispielwerte“ | 20,40–21,12 „Und der Squad?“ · 21,15–21,71 „Ein Klick.“ | 20,08 Whoosh, 21,03 Tipp, 21,13 Riser (letzte 1,1 s, erst nach „Squad?“), 21,55 Münze |
| E9 | 22,23–26,80 | **Endkarte Pink**, Schnitt auf den Schlussakzent der Musik mit Weißblitz (2 Bilder). Wortmarke fällt ein und federt (389 × 105, 1 : 1). Packshot 50er-Dose mit Shaker zoomt 1,10 → 1,00 und ohne Halt langsam weiter bis 1,04; 23,0–24,2 s Glanzstreifen über das Motiv. „Zahlen statt Versprechen.“ Wort für Wort. Pflichthinweise ab 22,23 s, voll lesbar ab 22,43 s | „Zahlen statt Versprechen.“ · „HOLY Energy Raspberry Raptor“ · Altershinweis · voller Hinweis · Bildnachweis | 22,50–23,41 „HOLY Energy.“ · 23,62–24,99 „Zahlen statt Versprechen.“ | 22,21 Einschlag; darunter Nachhall des Schlussschlags als leise Klangfläche bis 26,7 s; 25,15 leiser Plopp |

Schnittrhythmus: 3,00 hart · 4,38 Wischer · 7,38 Wischer · 10,00 hart · 12,50 hart · 14,92 Wischer · 17,00 Seitenwechsel ·
19,60 Sprung · 20,13 Wischer · 22,23 hart mit Blitz. Alle Bewegungen mit Easing (Ease-out, Expo, Feder, Überschwinger), keine
linearen Fahrten außer der langsamen Kamerafahrt; die Bildstand-Erkennung (ffmpeg freezedetect, Schwelle 0,0005, ab 0,25 s)
findet kein Standbild.

## 6 Sprechertext (wörtlich, so an ElevenLabs gesendet, 408 Zeichen)

> Wir könnten dir jetzt viel versprechen. Machen wir nicht. Hier sind Zahlen. Sieben Gramm auf fünfhundert Milliliter:
> eine Portion. Hundertsechzig Milligramm Koffein. Null Komma eins Gramm Zucker auf hundert Milliliter. Achtzig Cent pro
> Portion. Erst nachlesen, dann entscheiden. Für Erwachsene: eine Portion am Tag, so steht's auf dem Etikett. Und der
> Squad? Ein Klick. Holi Energy. Zahlen statt Versprechen.

Die Untertitel zeigen die Zahlen als Ziffern wie im Bild („7 g auf 500 ml: eine Portion.“, „160 mg Koffein.“, „0,1 g Zucker
auf 100 ml.“, „80 Cent pro Portion.“), Zeiten aus den Zeitstempeln.

Kontrolle per ElevenLabs Speech-to-Text (Deutsch) an der fertigen Mischung nach der Nacharbeit: „Wir könnten dir jetzt viel
versprechen. Machen wir nicht. Hier sind Zahlen: sieben Gramm auf fünfhundert Milliliter, eine Portion, hundertsechzig
Milligramm Koffein, null Komma eins Gramm Zucker auf hundert Milliliter, achtzig Cent pro Portion. Erst nachlesen, dann
entscheiden. Für Erwachsene eine Portion am Tag, so steht's auf dem Etikett. Und der Squad? Ein Klick. Holy Energy. Zahlen
statt Versprechen.“ – alle Wörter richtig erkannt, auch „Squad“ (vorher als „Squat“ erkannt; der Riser liegt jetzt erst
nach dem Wort). Die Sicherheit der Erkennung ist bei „Squad?“ am niedrigsten (log-Wahrscheinlichkeit −0,48), deshalb bleibt
„einmal anhören“ ein offener Punkt.

## 7 Belegliste (jede Aussage im Spot)

| Aussage im Spot | Wo | Beleg (Befund-ID, Stelle im Dossier) | auf der Konzept-Webseite |
|---|---|---|---|
| 7 g + 500 ml = eine Portion | E3 Bild + Sprache | ✔ **S92** [12, 13, 14] (Dossier Z. 912–914, 8.3 Do 1: „Eine Portion … (7 g auf 500 ml Wasser)“; Anhang Z. 1572) | index.html Z. 132 („7 g + 500 ml … ergeben eine Portion“), Kommentar Z. 124 |
| 160 mg Koffein je Portion | E4 Bild + Sprache | ✔ **S92** (8.3 Do 1: „enthält laut Etikett 160 mg Koffein“) | index.html Z. 136 |
| 32 mg pro 100 ml | E4 Bild | gerechnet aus ✔ **S92** (160 mg auf 500 ml; 8.3 Do 1 „32 mg/100 ml gerechnet“) | index.html Z. 136 |
| 0,1 g Zucker pro 100 ml zubereitet | E5 Bild + Sprache | ✔ **R06** [35, 229] · ✔ **R14** [132, 226, 227, 228] (8.3 Do 7, Z. 926; Anhang Z. 1636, 1644) | index.html Z. 140 |
| gesüßt mit Sucralose und Acesulfam K | E5 Bild | ✔ **R14** (8.3 Do 7; Don't 11 verbietet „ohne Süßstoff“) | index.html Z. 140 |
| „laut Etikett Raspberry Raptor“ | Pillen E3–E5 | ✔ **S92**, ✔ **R06** | index.html Z. 147 („Werte für Raspberry Raptor laut Etikett und HOLY-Shop.“) |
| 0,80 € je Portion | E6 Bild + Sprache | ✔ **B09** [18, 19] (Anhang Z. 1487: „39,99/50 ergibt 0,80 € je Portion“) · ✔ **T22** (Anhang Z. 1444: „NUR 0,80 € PRO PORTION“) | index.html Z. 144, 169 |
| Dose mit 50 Portionen 39,99 € | E6 Karte | ✔ **B09** | index.html Z. 144, 169 |
| 114,26 €/kg, inkl. MwSt. (zugleich mit 0,80 € im Bild) | E6 Karte | ✔ **R98** [222] (8.3 Do 14 „Preise nur mit Grundpreis“, Z. 939) mit ✔ **S92** gerechnet: 39,99 € : 0,35 kg | index.html Z. 144, 180 |
| zzgl. 4,99 € Versand, ab 49 € versandfrei | E6 Karte | ✔ **B12** [39] (Anhang Z. 1490: „4,99 € und versandkostenfrei ab 49 € für DE …“) | index.html Z. 180 |
| Preise abgerufen am 30.10.2026 | E6 Karte | Abrufdatum der Konzept-Webseite | index.html Z. 147 (Präsentationsmodus), Z. 294 (Fuß) |
| Für Erwachsene · eine Portion pro Tag, so steht's auf dem Etikett | E7b Sprache, Titel, Kasten | ✔ **R19** [216, 217] (8.3 Do 3: „Eine Portion pro Tag, so steht es auch auf dem Etikett.“, Z. 917) · ✔ **S92**; „für Erwachsene gedacht“ ✎ **R20** (8.3 Do 5, Z. 920–921). Bewusst **nicht** „erst ab 18 erlaubt“ (Don't 14) | index.html Z. 106; koffein-check.html Z. 107 |
| „Laut Etikett: eine zubereitete Portion pro Tag.“ (Lupe, Wortlaut der Webseite) | E7b Lupe | ✔ **S92**, ✔ **R19** | koffein-check.html Z. 107 (Kommentar Z. 101–102) |
| „160 mg Koffein … 32 mg pro 100 ml. Laut HOLY-Help-Center gilt die Menge für jede Energy-Portion.“ (im Handybild teilweise lesbar, nicht gesprochen) | E7b Handy | ✔ **S92**; „gilt für jede Energy-Portion“ ✔ **S27** [33] (Dossier Z. 107, 443) | koffein-check.html Z. 106 (Kommentar Z. 102: „Help-Center ✔ S27“) |
| Nicht für unter 18, Schwangere und Stillende · eine Portion pro Tag (laut Etikett) | Endkarte | ✔ **S92**, ✔ **R19** (8.3 Do 4, Z. 918) | index.html Z. 106 |
| „Dein Code ist schon drin.“, CREATOR10, „Werbung“, „−10 %“ | E7a (Aufnahme) | Konzept-Maßnahme I1/I2; Kennzeichnung ✔ **R25** [38, 81, 82] (8.3 Do 11); Code ist Platzhalter, „−10 %“ Beispielwert (im Spot so gekennzeichnet) | index.html Z. 83, 88, 90 |
| „Erst nachlesen, dann entscheiden.“ | E7a Sprache + Bild | Konzept-Formulierung (kein Fakt) | index.html Z. 233 |
| Startseite, Abschnitt „Erst nachlesen“: „Wie viel HOLY Energy ist okay? Koffein je Portion, Tagesmenge, Alter, Nachtschicht – alle Zahlen vom Etikett und von der EFSA, mit Quelle.“ (im Handybild ca. 15,9–16,9 s lesbar) | E7a Handy | Einladung zum Nachlesen, ohne Zahl und ohne Versprechen; die Antwort steht erst im Koffein-Check (dort nur Etikett-Werte im Bild) | index.html Abschnitt „Erst nachlesen, dann entscheiden.“ (Z. 233 ff.) |
| „7 Quellen“ | E7b | Fakt über die Konzept-Webseite (Quellenliste mit 7 Einträgen) | koffein-check.html Z. 97, 230 ff. |
| Squad: ein Klick · 10 Coins pro Euro (im Handybild) · „Mitmachen ab 18“ (im Handybild) · Bestellung Nr. 100248, „Do., 12.11.“, 225 Coins, „Level 1 · noch 1.775 Level Coins“ (im Handybild) | E8 | Konzept-Vorschlag der Gruppe (Squad-Einstieg in einem Schritt); 10 Coins pro Euro ✔ **T32** (Anhang Z. 1454); heute Rewards ab 16 ✎ **B05** – „ab 18“ ist ein Vorschlag; Bestellnummer, Liefertag und Coins sind Beispielwerte der Webseite (dort nur im Präsentationsmodus so markiert), im Spot gekennzeichnet „Konzept der Gruppe · Bestellung und Coins: Beispielwerte“ | danke.html Z. 76–79, 84–87 |
| „Zahlen statt Versprechen.“ | E9 Claim + Sprache | Leitsatz des Konzepts (kein Fakt) | praesentation/index.html Z. 793 (Sprechernotiz) |
| „Wir könnten dir jetzt viel versprechen … Machen wir nicht.“ | E1 | Selbstironischer Einstieg (Entwurf, Modellwissen über Werbesprache), verspricht nichts, nennt keine andere Marke | – |
| Bewertungs-Band „4,87 von 5 aus 1.409 Bewertungen …“ | E7a Handy | ✔ **T17** – **keine Aussage des Spots**: nur in 4 Bildern schneller Fahrt mit Bewegungsunschärfe, nicht lesbar, kein Halt | index.html Z. 117–120 |
| Packungsaufschrift des Sachets („Sugar Free · Natural Flavors · Vegan“) | E6 Packshot | Herstellerangabe auf dem Produktbild, im Spot nicht lesbar (wenige Pixel hoch), nicht Teil unserer Aussage | – |

**Bewusst weggelassen:** Fokus, Wachheit, Leistung, Gesundheit, Vitamine, NewCaff, „zuckerfrei“, Superlative, Vergleiche mit
anderen Marken, EFSA-Werte, Bewertungszahlen als Heldenzahl, Garantie (wäre nur als „Vorschlag der Gruppe“ erlaubt), „mehr
trinken“, Zitate aus der Videobotschaft des Gründers (Dossier 8.3 Don't 1–15).

## 8 Bildliste (alle Bilder im Spot)

Rechtestatus aller HOLY-Bilder: Veröffentlichung von der Gruppe beschlossen (KI-Nachweis FS2 Nr. 17), **keine Genehmigung
der Rechteinhaber eingeholt**; nicht kommerziell, für die Lehrveranstaltung. Keine Stock-Bilder, keine neuen Downloads,
keine KI-Bilder, keine Gesichter.

| Einstellung | Datei (gezeigt mit) | Registerschlüssel (`konzept-website/fremdbilder/register.js`) bzw. Herkunft |
|---|---|---|
| E1 | `konzept-website/fremdbilder/web-raptor-dose-shaker.jpg` (1080 × 1080, gezeigt 1080 px = 1 : 1) | **`web-start-video`**, `web-produkt-hero`, `web-koffein-produkt` – HOLY Softdrinks GmbH, erstes Produktbild auf de.holy.com/products/raspberry-raptor, Abruf 03.11.2026 |
| E3 | Rohdatei `praesentation/intern/roh/produkt/lifestyle/zubereitung-1-pulver-gelb.jpg` (2400 × 2400, gezeigt 900 px) | gleiches Motiv wie **`web-produkt-galerie-3`** / `web-start-portion` (fremdbilder/web-galerie-pulver.jpg, 1200 px); Quelle Energy_Instruction_1x1_-00002.jpg, de.holy.com/products/raspberry-raptor |
| E4, E6 | Rohdatei `packshots/raptor-50er-dose.png` (2048 × 2048, gezeigt 800–900 px) | gleiches Motiv wie **`web-produkt-gross-50`** / `web-produkt-galerie-1` (fremdbilder/web-galerie-dose.webp) |
| E5 | Rohdatei `lifestyle/zubereitung-3-schuetteln-gelb.jpg` (2400 × 2400, gezeigt 1200 px) | gleiches Motiv wie **`web-produkt-galerie-4`** / `web-danke-zubereitung-3` (fremdbilder/web-galerie-schuetteln.jpg, 1200 px); Quelle Energy_Instruction_1x1_-00005.jpg, de.holy.com/products/raspberry-raptor (Hand und Shaker, kein Gesicht) |
| E6 | Rohdatei `packshots/raptor-sachet-1-portion.png` (2048 × 2048, gezeigt 480 px) | gleiches Motiv wie **`web-produkt-gross-1`** / `web-koffein-portion` |
| E7, E8 | eigene Bildschirmaufnahmen der Konzept-Webseite (`index.html`, `koffein-check.html`, `danke.html`, `squad.html`; Fassung mit Bildern; Playwright, Netz gesperrt; 1170 × 2532 px, gezeigt ≤ 0,63-fach, Lupe ≤ 0,95-fach) | eigene Aufnahme; die darin sichtbaren Bilder haben ihre Schlüssel im Register (u. a. `web-start-tag`, `web-start-video`, `web-start-portion`, `web-squad-logo`, `web-squad-coins`, `web-danke-paket`) |
| E8 | Rohdateien `squad-rewards/level-1-raptor-egg.png` … `level-4-og-raptor.png` (1251 px, gezeigt 230 px) | gleiche Motive wie **`web-squad-level-1`** … **`web-squad-level-4`** |
| E9 | Rohdatei `packshots/raptor-50er-dose-mit-gratis-shaker.png` (2048 × 2048, gezeigt 780–858 px) | gleiches Motiv wie **`web-produkt-galerie-2`** (fremdbilder/web-galerie-dose-shaker.webp); Glanzstreifen nur als Lichtebene darüber, Motiv unverändert |
| E9 | `konzept-website/bilder/holy-logo-wortmarke.png` (389 × 105, 1 : 1) | HOLY-Wortmarke, unverändert, Einverständnis laut KI-Nachweis FS2 Nr. 12 |
| E7, E8 | Handy-Rahmen, Statusleiste, Tipp-Kreise, Balken, Marker, Pillen, Wischer | eigene Grafik (CSS) |

## 9 Offene Punkte für die Gruppe

1. **„0,1 g Zucker“ als eigene Zahl** liegt nah an einer Nährwertaussage; im Spot nur mit „zubereitet · gesüßt mit Sucralose
   und Acesulfam K“ und ohne „zuckerfrei“. Bitte bewusst abnicken.
2. **Wir-Stimme:** „Machen wir nicht.“ spricht, als wäre der Absender HOLY. Die dauerhafte Pflicht-Pille (im Hook mit
   „Studentisches Konzept“ in Zitrone hervorgehoben) und die Endkarte fangen das auf; ob das reicht, entscheidet die Gruppe.
   Beim Hochladen in der Beschreibung immer „Studentisches Konzept, keine Werbung der HOLY Softdrinks GmbH“ voranstellen.
3. **Squad „ein Klick“, „ab 18“, Code „ist schon drin“** sind Konzept-Vorschläge (heute Rewards ab 16, ✎ B05); im Bild als
   „Konzept der Gruppe“ gekennzeichnet, gesprochen aber als Tatsache.
4. **„Squad“ einmal mit Kopfhörern anhören:** Die Erkennung schreibt es jetzt richtig, aber mit der geringsten Sicherheit
   aller Wörter. Klingt es nach „Squat“, nur diesen Satz neu erzeugen (etwa 15 Zeichen).
5. **Stand der Zahlen:** Preise am 30.10.2026 abgerufen; sie können sich ändern.
6. **Plattform-Zonen:** Pflichtzeile bei y = 112–210; auf Reels/TikTok liegt dort teils die App-Oberfläche.
7. **Lesart „26 px Schrifthöhe“:** Schriftgrad 31 px, gemessene Zeilenhöhe über alles 27 px, Versalhöhe 21 px. Wenn die
   Gruppe die Versalhöhe meint, müsste die Pille dreizeilig werden (Schriftgrad ≥ 38 px).
8. **Startseite im Handy:** Der Abschnitt „Erst nachlesen“ der Konzept-Webseite fragt „Wie viel HOLY Energy ist okay?“ (ohne
   Zahl, Einladung zum Koffein-Check); er ist ca. 1 s lesbar. Inhaltlich unbedenklich, aber nah an der Überschrift, die im
   Koffein-Check verdeckt wird – bitte mit abnicken.

## 10 Nacharbeit nach der Abnahme (04.11.2026)

Zwei Prüfer (Wirkung; Ehrlichkeit/Recht/Technik) haben den Spot abgenommen. Jeder Befund wurde zuerst selbst nachgeprüft.

| Befund (Schwere) | geprüft | umgesetzt |
|---|---|---|
| EFSA-Satz und Überschrift „… wie viel ist okay?“ beim Sprung zu „7 Quellen“ sichtbar; Seiteninhalt läuft über der Hinweisleiste unter der Insel durch (hoch) | bestätigt: Die Seiten glitten über 0,3 s durch die Aufnahme, und die Aufnahme lag ohne Ausschnitt im Bildschirm | Sprung jetzt hart (19,60 s, keine Zwischenbilder); Kasten „Für Erwachsene.“ hängt am Handy und deckt die Überschrift ab dem ersten Bild der Seite bis nach dem Sprung; EFSA-Punkt liegt in jedem Bild unter dem Bildrand; Seite in eigenem Ausschnitt unter der Statusleiste (alle Handy-Szenen). Bilder 508–512 und 586–592 einzeln angesehen |
| Musik zu leise (mittel) | bestätigt (13 + 5 dB unter der Stimme) | Grundpegel −8 dB, Ducking −4 dB, 60 ms / 150 ms; Musik integriert jetzt −26,9 LUFS bei Stimme −16 LUFS (vor der Normalisierung); Sprechpausen in der Mischung um −25 LUFS momentan statt −31 bis −34 |
| Loch 14,1–16,05 s (mittel) | bestätigt (Musik-Break plus 1,9 s ohne Stimme) | zwei Schläge mit dem Break aus der Musik geschnitten, alles danach 1,0 s früher; Lücke ohne Stimme jetzt 1,17 s mit durchlaufendem Beat und Whoosh auf dem Wischer |
| Handy-Strecke wirkt wie Erklärvideo, Standbilder (mittel) | bestätigt (freezedetect: 3 Standbilder) | Lupe nur noch ein Satz mit Marker, Titel „Eine Portion pro Tag.“ im Takt, Kamerafahrt über die ganze Strecke, eine schnelle Scroll-Fahrt statt Halt am Band, Strecke 0,5 s kürzer; freezedetect findet kein Standbild mehr |
| Einstieg mit leerer Fläche und harter Fotokante (niedrig) | bestätigt | Bild 0 zeigt „Wir“ und das Foto, Punch-in, Verlauf über der Fotokante, Foto randlos 1 : 1 |
| Ende in Stille (niedrig) | bestätigt | Nachhall des Schlussschlags als Klangfläche, Spot 26,8 s |
| Eis-Foto: Ausschnitt unlesbar und ohne Registerschlüssel (niedrig/mittel) | bestätigt | ersetzt durch Schüttel-Foto (`web-produkt-galerie-4`) |
| „7g“, „160mg“ ohne sichtbaren Abstand (niedrig) | bestätigt (schmales Leerzeichen in Bricolage 75 % kaum sichtbar) | sichtbarer Abstand 0,15 em |
| Hinweis-Pille über dem Knopf (niedrig) | bestätigt | Pille oben unter der Pflicht-Pille, wie in E8 |
| Zahlen in den Untertiteln ausgeschrieben (niedrig) | bestätigt | Ziffern wie im Bild, 14 Einträge |
| „Squad“ als „Squat“ erkannt (niedrig) | bestätigt | Riser erst nach dem Wort; Erkennung jetzt „Squad?“; keine neue Sprachaufnahme |
| Bewertungs-Band steht lesbar (mittel) | bestätigt (Haltepunkt 1250 px, Band nach Messung bei 1200–1293 px) | kein Halt mehr; Band nur in 4 Bildern schneller Fahrt, Messung in `scroll.json` |
| Modellkennungen in README/Drehbuch (mittel) | bestätigt | durch Beschreibungen ersetzt; Kennungen nur in `intern/` |
| Beispielwerte im Handybild ohne Kennzeichnung (niedrig) | bestätigt | Etiketten erweitert (Rabatt; Bestellung und Coins) |
| S27 fehlt in der Belegliste; Überschrift 18,0–18,9 s lesbar (niedrig) | bestätigt | S27 ergänzt; Überschrift jetzt in keinem Bild lesbar |
| Hinweis (e) erst später voll lesbar (niedrig) | bestätigt | Einblendung 0,2 s, voll lesbar ab 22,43 s, 4,37 s (gemessen) |
| „31 px“ nur Schriftgrad (niedrig) | bestätigt | Messwerte eingetragen; 34 px passt nicht in zwei Zeilen (Abschnitt 4, offen Punkt 7) |
| Preis ca. 1 s ohne Grundpreis (niedrig) | bestätigt | Preiskarte zugleich mit „0,80 €“ |
| Packungsaufschrift „Sugar Free“ (niedrig) | bestätigt, im Spot nicht lesbar | in Abschnitt 3 und 7 vermerkt |
| Stimmen-ID fehlt in den Anfragedateien (niedrig) | bestätigt | `voice_id` und `output_format` ergänzt (Probe: speed Standard 1,0 laut ElevenLabs-Historie) |
| Wir-Stimme (niedrig) | Einschätzung geteilt | „Studentisches Konzept“ im Hook in Zitrone; Entscheidung bleibt bei der Gruppe |
