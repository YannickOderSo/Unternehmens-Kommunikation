<!-- Erzeugt am 04.11.2026 im Workflow D10 (Werbevideo, Schritte „Produktion“ und „Nacharbeit nach der Abnahme“), Auftrag
Yannick Heisler (KI-Nachweis FS2 Nr. 22). KI-gestützt erstellt, Prüfung durch die Gruppe offen. Keine neue Websuche in diesen
Schritten: Fakten aus der Konzept-Webseite und dem Recherche-Dossier FS2 (Befund-IDs); Gestaltung, Schnitt und Texte sind
Entwürfe (Modellwissen über Werbefilm, nicht belegt). -->

Modul Unternehmenskommunikation · Prof. Dr. Daniel Stenger · Hochschule Kaiserslautern

# Werbespot „Zahlen statt Versprechen“ (HOLY Energy Raspberry Raptor)

Fallstudie 2 „Customer Journey“ · Gruppe Heisler, Knauber, Welker · Stand 04.11.2026 (nach der Nacharbeit) · **Entwurf,
Prüfung durch die Gruppe offen**

> **Vorfassung, ersetzt am 04.11.2026 durch den Spot aus D11** („Mein Moment.“, [`../holy-werbespot.mp4`](../holy-werbespot.mp4),
> Beschreibung in [`../README.md`](../README.md)). Diese Fassung wurde mit Spot, Poster, Untertiteln, Drehbuch, README und
> Werkzeugen unverändert nach `werbevideo/vorfassung-d10/` verschoben. **Die Pfade in den Werkzeugen (`werkzeuge/`) sind
> dadurch veraltet:** Sie verweisen auf `../intern/` und `../holy-werbespot.mp4`; die Zwischenstände der Vorfassung liegen
> weiter (nicht versioniert) in `werbevideo/intern/` (ohne Unterordner `d11/`). Für einen Neubau der Vorfassung die
> Werkzeuge zurück nach `werbevideo/werkzeuge/` legen oder die Pfade anpassen. Links in diesem README auf Dateien dieses
> Ordners stimmen weiterhin.

> **Studentisches Konzept der Gruppe (HS Kaiserslautern) – keine Website und keine Werbung der HOLY Softdrinks GmbH · keine
> Bestellung möglich.** Stimme, Musik und Geräusche sind KI-generiert (ElevenLabs). Nicht kommerziell, für die
> Lehrveranstaltung.

## 1 Was

Ein kurzer Social-Media-Spot im Stil der Konzept-Webseite („Kampagnen-Look“): Er verspricht nichts, sondern zeigt die vier
Zahlen der Startseite (7 g + 500 ml, 160 mg Koffein, 0,1 g Zucker pro 100 ml, 0,80 € je Portion), jede mit Quelle am Bild,
und folgt dann dem Weg der Konzept-Webseite auf einem echten Handy-Bildschirm: Code aus dem Video schon drin („Werbung“
daneben) → „Erst nachlesen, dann entscheiden.“ → Koffein-Check („Eine Portion pro Tag.“, 7 Quellen) → Squad mit einem Klick →
„Zahlen statt Versprechen.“ Drehbuch mit Zeitcodes, Belegliste, Bildliste und Nacharbeit: [`drehbuch.md`](drehbuch.md).

| Datei | Inhalt |
|---|---|
| [`holy-werbespot.mp4`](holy-werbespot.mp4) | der Spot: **26,8 s**, 1080 × 1920 (9 : 16), 30 fps, H.264 High, yuv420p, AAC 48 kHz Stereo, +faststart |
| [`holy-werbespot-poster.jpg`](holy-werbespot-poster.jpg) | Standbild der Endkarte (bei 25,0 s, alle Pflichthinweise sichtbar) |
| [`holy-werbespot.de.vtt`](holy-werbespot.de.vtt) | deutsche Untertitel (14 Einträge, Zahlen als Ziffern), Zeiten aus den ElevenLabs-Zeitstempeln |
| [`drehbuch.md`](drehbuch.md) | Drehbuch: Einstellungen, Sprechertext, Belege, Bilder, offene Punkte, Nacharbeit |
| [`werkzeuge/`](werkzeuge/) | Bühne und Bau-Skripte (siehe Abschnitt 6) |
| `intern/` | Zwischenstände (Sprache, Musik, Geräusche, Rohbilder, Handy-Aufnahmen, Einzelbilder, Prüfbilder) – per `.gitignore` ausgeschlossen |

Einbinden (z. B. auf GitHub Pages): `<video src="holy-werbespot.mp4" poster="holy-werbespot-poster.jpg" controls playsinline>`
mit `<track kind="captions" srclang="de" src="holy-werbespot.de.vtt" default>`. Beim Hochladen auf eine Plattform in der
Beschreibung immer zuerst: „Studentisches Konzept (HS Kaiserslautern), keine Werbung der HOLY Softdrinks GmbH“.

## 2 Pflichtkennzeichnung

| Pflicht | Umsetzung |
|---|---|
| (a) „Studentisches Konzept (HS Kaiserslautern) · keine Werbung der HOLY Softdrinks GmbH“ | dauerhaft (0–26,8 s, in allen 804 Bildern unverändert), dunkle Pille oben (y 112–210), Bricolage Schriftgrad 31 px (gemessen: Zeilenhöhe über alles 27 px, Versalhöhe 21 px), Weiß auf #1D1D1B 16,9 : 1; im Hook (0–3 s) „Studentisches Konzept (HS Kaiserslautern)“ in Zitrone (14,4 : 1) |
| (b) „Stimme KI-generiert“ | zweite Zeile derselben Pille, dauerhaft; auf der Endkarte zusätzlich „Stimme, Musik und Geräusche KI-generiert (ElevenLabs)“ |
| (c) Altershinweis | Endkarte: „Nicht für unter 18, Schwangere und Stillende · eine Portion pro Tag (laut Etikett)“; dazu im Koffein-Check gesprochen und im Bild („Für Erwachsene.“, „Eine Portion pro Tag.“) |
| (d) Creator-Code | nur in der echten Aufnahme der Startseite: „CREATOR10“ mit Etikett „Werbung“, dazu im Spot „Konzept-Webseite der Gruppe · Code: Platzhalter · Rabatt: Beispielwert“ |
| (e) voller Hinweis | Endkarte, voll lesbar ab 22,43 s bis Ende = **4,37 s** (≥ 2 s, Bildvergleich gemessen), Weiß auf Schwarz 32 px |
| Bildnachweis | Endkarte: „Bilder: HOLY Softdrinks GmbH (de.holy.com), Abruf 03.11.2026 – ohne Genehmigung, nicht kommerziell, für die Lehrveranstaltung“ |
| Beispielwerte im Handybild | „Konzept-Webseite der Gruppe · Code: Platzhalter · Rabatt: Beispielwert“ (Startseite), „Konzept der Gruppe · Bestellung und Coins: Beispielwerte“ (Danke-Seite, Squad) |

## 3 Bilder: Herkunft und Rechtestatus

Alle Produktbilder: **HOLY Softdrinks GmbH**, abgerufen am 03.11.2026 von de.holy.com. Rechtestatus: Veröffentlichung von der
Gruppe beschlossen (KI-Nachweis FS2 Nr. 17), **keine Genehmigung der Rechteinhaber eingeholt**; nicht kommerziell, für die
Lehrveranstaltung. Keine neuen Downloads, keine Stock-Bilder, keine KI-Bilder, keine Gesichter. Jedes Bild im Spot hat einen
Registerschlüssel (bzw. ist eine eigene Aufnahme oder die Wortmarke).

| Bild im Spot | Datei | Registerschlüssel (`konzept-website/fremdbilder/register.js`) |
|---|---|---|
| Hook: Dose, Shaker, Himbeeren auf Fliesen | `konzept-website/fremdbilder/web-raptor-dose-shaker.jpg` | `web-start-video` (= `web-produkt-hero`) |
| 1/4: Pulver in den Shaker | Rohdatei `zubereitung-1-pulver-gelb.jpg` (2400 px) | Motiv von `web-produkt-galerie-3` / `web-start-portion` |
| 2/4, 4/4: 50er-Dose | Rohdatei `raptor-50er-dose.png` (2048 px) | Motiv von `web-produkt-gross-50` / `web-produkt-galerie-1` |
| 3/4: Shaker schütteln | Rohdatei `zubereitung-3-schuetteln-gelb.jpg` (2400 px) | Motiv von `web-produkt-galerie-4` / `web-danke-zubereitung-3` (ersetzt in der Nacharbeit das Eis-Foto ohne Schlüssel) |
| 4/4: Sachet | Rohdatei `raptor-sachet-1-portion.png` (2048 px) | Motiv von `web-produkt-gross-1` / `web-koffein-portion` |
| Squad: Level-Abzeichen 1–4 | Rohdateien `level-1-raptor-egg.png` … `level-4-og-raptor.png` (1251 px) | Motive von `web-squad-level-1` … `web-squad-level-4` |
| Endkarte: Dose mit Shaker | Rohdatei `raptor-50er-dose-mit-gratis-shaker.png` (2048 px) | Motiv von `web-produkt-galerie-2` |
| Endkarte: Wortmarke | `konzept-website/bilder/holy-logo-wortmarke.png` (389 × 105, 1 : 1) | Wortmarke, Einverständnis laut KI-Nachweis FS2 Nr. 12 |
| Handy: Konzept-Webseite | eigene Bildschirmaufnahmen von `index.html`, `koffein-check.html`, `danke.html`, `squad.html` (Fassung mit Bildern) | die darin sichtbaren Bilder haben ihre Schlüssel im Register |

Rohdateien liegen in `praesentation/intern/roh/produkt/` (Herkunft je Datei in `manifest.json`, nicht veröffentlicht) und
werden von `werkzeuge/vorbereiten.sh` unverändert nach `intern/bilder/` kopiert. Kein Bild läuft über seine
Originalauflösung hinaus (Hook-Foto 1 : 1, Handy-Aufnahmen 1170 px breit, gezeigt höchstens 0,63-fach, Lupe höchstens
0,95-fach). Der Glanzstreifen auf der Endkarte ist nur eine Lichtebene über dem Motiv. Auf dem Sachet steht HOLYs eigene
Aufschrift „Sugar Free …“; sie ist im Spot nicht lesbar und nicht Teil unserer Aussage.

## 4 Ton: Stimme, Musik, Geräusche (alle KI-generiert mit ElevenLabs)

| | Herkunft |
|---|---|
| Stimme | ElevenLabs Text-to-Speech, **ausschließlich** die synthetisch gestaltete Stimme **„simpleact-design-b“** (ID `1ZBEaCGxeV794wdwBQr4`, männlich, Hochdeutsch; niemals eine Klonstimme, keine Nachahmung einer realen Person), mehrsprachige Sprachausgabe von ElevenLabs, stability 0,45 · similarity_boost 0,8 · style 0,25 · speaker boost an · speed 0,95. **Ein** Aufruf mit Zeitstempeln (408 Zeichen), an den Satzgrenzen geschnitten und auf die Bildzeiten gelegt. **KI-generiert.** |
| Musik | ElevenLabs Musik (`/v1/music`), 30 s, instrumental, 120 BPM, eigene Beschreibung (verspielter Elektro-Pop-Beat, Platz für Sprache); im Spot: Gag-Pause 2,25–3,00 s, die Takte 15,00–16,00 s (zwei Schläge mit Break) herausgeschnitten, sonst ungeschnitten; unter der Endkarte der Nachhall des Schlussschlags als leise Klangfläche (eigene Faltung mit künstlichem Raum, fester Startwert). **KI-generiert**, keine Musik aus dem Internet |
| Geräusche | ElevenLabs Soundeffekte (`/v1/sound-generation`): Plopp, Marker-Wisch, Whoosh, Zähl-Tick, Tipp, Münze, Eiswürfel, Karten-Swipe, Einschlag, Riser. **KI-generiert** |
| Mischung | Stimme vorn; Musik 8 dB darunter, unter der Stimme weitere 4 dB abgesenkt (60 ms Anstieg, 150 ms Rückkehr); gesamt **−14,0 LUFS** integriert, True Peak **−1,4 dBTP** in der AAC-Datei (WAV vor der Kodierung −1,5), LRA 2,5 LU (ffmpeg loudnorm, zwei Durchgänge, gemessen mit ebur128) |

Aussprache: Im Sprechertext steht „Holi“ statt „HOLY“ (englische Aussprache der Marke), Zahlen und Einheiten ausgeschrieben;
die Untertitel zeigen „HOLY“ und Ziffern. Kontrolle mit ElevenLabs Speech-to-Text an der fertigen Mischung: alle Wörter
erkannt, auch „Squad“ (Abschnitt 7).

## 5 Belege der Aussagen (Kurzfassung, vollständig in `drehbuch.md` Abschnitt 7)

| Aussage | Beleg |
|---|---|
| 7 g auf 500 ml = eine Portion · 160 mg Koffein je Portion · 32 mg pro 100 ml (gerechnet) | ✔ S92 (Dossier 8.3 Do 1) · index.html Z. 132, 136 |
| 0,1 g Zucker pro 100 ml zubereitet, gesüßt mit Sucralose und Acesulfam K | ✔ R06, ✔ R14 (Do 7) · index.html Z. 140 |
| 0,80 € je Portion · Dose mit 50 Portionen 39,99 € | ✔ B09, ✔ T22 · index.html Z. 144 |
| 114,26 €/kg · inkl. MwSt. (zugleich mit 0,80 € im Bild) | ✔ R98 (Do 14), gerechnet mit ✔ S92 · index.html Z. 144, 180 |
| zzgl. 4,99 € Versand, ab 49 € versandfrei | ✔ B12 · index.html Z. 180 |
| Für Erwachsene · eine Portion pro Tag, so steht's auf dem Etikett · nicht für unter 18, Schwangere und Stillende | ✔ R19 (Do 3, 4), ✔ S92, ✎ R20 (Do 5) · index.html Z. 106 · koffein-check.html Z. 107 |
| „Laut HOLY-Help-Center gilt die Menge für jede Energy-Portion“ (im Handybild teilweise lesbar) | ✔ S27 · koffein-check.html Z. 102, 106 |
| CREATOR10 mit „Werbung“, „−10 %“ | Platzhalter bzw. Beispielwert; Kennzeichnung ✔ R25 (Do 11) · index.html Z. 88, 90 |
| 10 Coins pro Euro (im Handybild), Squad ab 18 / ein Klick, Bestellnummer, Liefertag, Coins | ✔ T32; „ab 18“ und „ein Klick“ sind Vorschläge der Gruppe (heute ab 16, ✎ B05); Bestellnummer, Liefertag, Coins sind Beispielwerte (im Spot gekennzeichnet) · danke.html Z. 76–87 |
| Bewertungs-Band (4,87 / 1.409, ✔ T17) | keine Aussage des Spots: nur in 4 Bildern schneller Fahrt, nicht lesbar |
| „Erst nachlesen, dann entscheiden.“ · „Zahlen statt Versprechen.“ · Hook „Wir könnten dir jetzt viel versprechen … Machen wir nicht.“ | Konzept-Formulierungen bzw. Entwurf (kein Fakt) |

Aus Modellwissen (nicht belegt): Gestaltung, Schnitt, Taktung, Tonmischung, der Zielwert −14 LUFS für Social Media und der
Hinweis, dass Bewertungen in der Werbung nach UWG § 5b Abs. 3 einen Hinweis zur Echtheitsprüfung brauchen (deshalb keine
Bewertung als Heldenzahl).

## 6 Neu bauen

Voraussetzungen: Node 22 mit Playwright (`/opt/node-tools/node_modules/playwright-core`, anderer Pfad über
`PLAYWRIGHT_CORE=…`), ffmpeg 6, Python 3 mit NumPy. Keine Netzanfragen, kein Schlüssel im Code.

```sh
cd fallstudie-2-customer-journey/werbevideo/werkzeuge
sh vorbereiten.sh            # Rohbilder unverändert nach ../intern/bilder/ kopieren
node aufnahme-handy.cjs      # Handy-Aufnahmen der Konzept-Webseite (390 × 844 bei 3-facher Pixeldichte) + scroll.json
sh bau.sh                    # Ton mischen, 804 Bilder rendern, normalisieren, kodieren, Poster, Untertitel, Prüfbilder
```

| Werkzeug | Aufgabe |
|---|---|
| `buehne.html` | Bühne 1080 × 1920; `window.__setTime(t)` setzt jedes Element deterministisch (keine Zufallswerte, keine CSS-Animationen) |
| `render.cjs` | lokaler Server (127.0.0.1) + Playwright, rendert Bild für Bild nach `intern/bilder-folge/`; `--standbild t …` für einzelne Standbilder |
| `ton.py` | schneidet die Sätze aus der einen Sprachaufnahme (Zeitstempel), legt sie auf die Bildzeiten, schneidet die Musik im Takt, mischt Musik (Gag-Pause, Ducking, Nachhall-Fläche) und Geräusche |
| `untertitel.py` | WebVTT aus den Zeitstempeln, Zahlen als Ziffern |
| `aufnahme-handy.cjs` | Bildschirmaufnahmen der Konzept-Webseite (Netz gesperrt); misst die Lage des Bewertungs-Bands und schreibt die Scroll-Bewegung je Bild nach `intern/handy/start/scroll.json` |
| `bau.sh` | ganzer Bau; `--ohne-bilder` nutzt vorhandene Einzelbilder |

Die ElevenLabs-Ergebnisse (Sprache mit Zeitstempeln, Musik, Geräusche) liegen in `intern/stimme/`, `intern/musik/`,
`intern/sfx/` und werden nicht neu erzeugt. Wer sie neu erzeugen muss: Anfragen stehen in `intern/stimme/durchlauf1.json`
(mit Stimmen-ID und Ausgabeformat), `intern/probe/probe.json`, `intern/musik/anfrage.json`, `intern/sfx/liste.json`; der
Schlüssel kommt aus der Umgebung, nie aus einer Datei. **Stimme ausschließlich `1ZBEaCGxeV794wdwBQr4` (synthetisch
gestaltet), niemals eine Klonstimme.**

## 7 Prüfstand (04.11.2026, nach der Nacharbeit)

| Prüfung | Ergebnis |
|---|---|
| ffprobe | H.264 High, yuv420p, BT.709, 1080 × 1920, 30/1 fps, 804 Bilder; AAC LC 48 kHz Stereo; Dauer 26,800 s; 10,4 MB (10.445.796 Byte), Gesamtbitrate 3,1 Mbit/s; `moov` vor `mdat` (+faststart) |
| Lautheit (ebur128) | −14,0 LUFS integriert, True Peak −1,4 dBTP, LRA 2,5 LU; Sprechpausen um −25 LUFS momentan (Beat hörbar) |
| Standbilder je Sekunde + Kontaktbogen (`intern/pruefbilder/`) | 27 Standbilder und Kontaktbogen angesehen, dazu Einzelbilder 508–512 (Seitenwechsel) und 586–592 (Sprung zu „7 Quellen“): Pflichtzeile auf jedem Bild lesbar, Überschrift „… wie viel ist okay?“ und EFSA-Satz in keinem Bild sichtbar, Produktbilder scharf, keine Tippfehler gefunden |
| Bildstand | ffmpeg freezedetect (0,0005, ab 0,25 s): kein Standbild |
| Pflicht-Pille | Bildvergleich: in allen 804 Bildern unverändert (Hook mit Zitrone, sonst Weiß) |
| Untertitel gegen Sprechertext | 14 Einträge, Wortlaut gleich dem Sprechertext (Zahlen als Ziffern, „Holi“ → „HOLY“), keine Überlappung |
| Aussprache (ElevenLabs Speech-to-Text) | fertige Mischung: alle Wörter erkannt, „Squad“ mit der geringsten Sicherheit (bitte einmal anhören) |
| Netz beim Rendern | 0 externe Anfragen (Konzept-Webseite und Bühne) |

## 8 Offene Punkte für die Gruppe

1. „0,1 g Zucker“ als eigene Zahl (nah an einer Nährwertaussage; nur mit Süßungsmitteln, ohne „zuckerfrei“) bewusst abnicken.
2. Wir-Stimme („Machen wir nicht.“) klingt nach HOLY als Absender – reicht die Kennzeichnung?
3. „Code ist schon drin“, „Squad mit einem Klick, ab 18“ sind Konzept-Vorschläge; im Bild als „Konzept der Gruppe“ markiert,
   gesprochen als Tatsache.
4. „Squad“ einmal mit Kopfhörern anhören.
5. Preise vom 30.10.2026 können sich ändern.
6. Lage der Pflichtzeile (y 112–210) liegt auf Reels/TikTok teils unter der App-Oberfläche; „26 px Schrifthöhe“ ist als
   Schriftgrad erfüllt (31 px), als Versalhöhe nicht (21 px).
7. Startseite im Handy: „Wie viel HOLY Energy ist okay?“ (Abschnitt „Erst nachlesen“, ohne Zahl) ist ca. 1 s lesbar.
8. Rechtliche Einordnungen sind Einschätzungen von Studierenden, keine Rechtsberatung.
