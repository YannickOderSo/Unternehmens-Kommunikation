# QUELLEN – Schriften, Programme, Grafiken, Bilder, Inhalte und KI-Unterstützung (Präsentation Fallstudie 2)

Alles, was `index.html` verwendet, liegt im Ordner `praesentation/` – nichts wird aus dem Internet nachgeladen
(keine CDNs, keine externen Schriften, Skripte oder Bilder; geprüft mit `werkzeuge/pruefen.mjs`, 0 externe
Anfragen). Stand: 03.11.2026, Entwurf, Prüfung durch die Gruppe offen.

## 1. Schriften (`schriften/`)

SIL Open Font License 1.1, über Fontsource 5.3.0 (Originalquelle Google Fonts), aus FS1 kopiert; Einzelheiten in
`schriften/HERKUNFT.txt`.

| Schrift | Verwendung |
|---|---|
| Bricolage Grotesque | Titel, Zahlen, Sätze der Momente, Foliennummer (Plan 3.4) |
| Inter | Text, Daten, Beschriftungen – Ersatz für Libre Franklin, die noch nicht im Repository liegt (M5) |
| Fraunces kursiv | nur für echte, anonyme O-Töne – bisher keine |

HOLYs eigene Schriften (kommerziell) werden nicht eingebunden (Dossier ✔ G01, ✎ G03, ✎ G04).

## 2. Programme

- **Engine** (`js/deck.js`, `js/komponenten.js`, `css/deck.css`, `css/komponenten.css`, `css/tokens.css`) und
  **Prüfwerkzeuge** (`werkzeuge/`): eigene Entwicklung der Gruppe aus Fallstudie 1 (KI-gestützt, siehe FS1
  `QUELLEN.md` und `AUTOREN.md`), unverändert kopiert am 03.11.2026.
- Thema „Pfad“ (`css/folien/pfad.css`, `js/folien/pfad.js`), Folien-CSS und `js/folien/09-fazit.js`: neu,
  KI-gestützt (Abschnitt 6). Die Rundung der Pfadecken folgt der Musterfolie `../_entwuerfe/faden/journey.html`.
- Keine fremden Bibliotheken (die QR-Bibliothek aus FS1 wird nicht gebraucht und ist nicht kopiert).

## 3. Grafiken

Alle Grafiken sind eigene Gestaltung aus CSS und Inline-SVG, KI-gestützt erstellt: Laufleiste, Pfad, Knoten,
Brücken, Handyrahmen, Strichskalen, Farb- und Formproben, Platzhalterflächen. **Keine HOLY-Schrift,
kein nachgezeichnetes Verpackungsdesign, keine KI-Bilder** (Plan 3.7); das HOLY-Logo nur als unveränderte Datei (Abschnitt 4). Die Farben sind HOLYs Webfarben aus dem
Dossier (Gelb #FFD007 ✎ G06, Schwarz #1D1D1B ✔ G07, Creme #F3EDE1 ✎ G06; Farbproben auf 03 mit Status).

## 4. Bilder (`bilder/`, `intern/`)

| Datei | Folie | Herkunft | Rechte |
|---|---|---|---|
| `bilder/holy-logo-oval.png` | 01, 09 | offizielles HOLY-Logo im gelben Oval, 692 × 400 px, unverändert aus FS1 (`../../fallstudie-1-brand-persona/praesentation/bilder/`; dort: de.holy.com, Abruf 16.10.2026) | © HOLY Softdrinks GmbH; Nutzung für dieses Studienprojekt freigegeben durch Yannick am 03.11.2026 („der Gründer ist eingeweiht“, KI-Nachweis FS2 Nr. 12); Quelle auf der Folie |
| `bilder/konzept-01-landingpage.png` … `konzept-05-danke.png` | 08 | Bildschirmfotos der eigenen Konzept-Webseite (390 × 844, 03.11.2026, erzeugt mit `../konzept-website/werkzeuge/folie08-bilder.mjs`; Produktseite und Danke-Seite als Ausschnitt) | eigene Gestaltung ohne fremde Bilder; jede Seite trägt den Hinweis „Studentisches Konzept … keine Website der HOLY Softdrinks GmbH · keine Bestellung möglich“ |
| `intern/gruender-video.mp4` | 09 | Videobotschaft des Gründers Mathias Horsch, 02.11.2026 | Zustimmung für Video und Stimme **in der Präsentation** (laut Yannick, KI-Nachweis FS2 Nr. 09); **nicht** für Repository/GitHub Pages und KI-Transkription → per `.gitignore` ausgeschlossen, nur per Pfad eingebunden |
| Bildkacheln b01, b04–b12, b15, b16 | 01–07, 09 | **offen** – eigene Fotos und Screenshots aus dem Selbstversuch und dem Workshop | bis dahin Platzhalter (`data-status="offen"`); nicht freigegebene Dateien nur in `intern/` (Plan 4, 11.5) |
| Textgrafik „0 Beiträge · Blog /blogs/news“ | 03 | Rückfall b19, eigene Gestaltung | Beleg ✔ M01, ✔ L39 (Abruf 30.10.2026) |

Rechtliche Einordnungen sind Einschätzungen von Studierenden und keine Rechtsberatung (Dossier 10.6).

## 5. Inhalte und Fakten

- **Recherche-Dossier FS2** `../recherche-customer-journey.md`: jede Zahl und jede Aussage über HOLY mit Befund-ID
  und Status (✔ belegt · ✎ korrigiert · ~ unsicher · **H** Hypothese); Faktencheck Anhang A, Quellenverzeichnis
  Anhang B. Best Practices: Kapitel 7a (X01–X17, Websuche durch Unteragenten, Abruf 03.11.2026, gegengeprüft).
  Je Folie eine Quellzeile mit IDs; ausführliche Belege in den Notizen und in Backup B8.
- **Gestaltungsplan** `../gestaltungsplan.md` (Folienplan, Urteile zu den Überleitungen, Top 3 je Phase,
  Kennzahlen-Vorschlag): Entwurf, Vorschläge als **H** gekennzeichnet.
- **Vorlesung** Prof. Stenger, S. 107–129 (Definition S. 107, Phasen S. 108, 5 As S. 109, Prozess S. 111,
  Paid/Owned/Earned S. 112, Intersport S. 113, Armbanduhr S. 116, Aktivitäten S. 117–119, Raster S. 129);
  Literatur dahinter nur „zit. n. Stenger“.
- **Persona Marco** `../../fallstudie-1-brand-persona/persona-steckbrief.md` (fiktiv); Statista-Werte nur wie in
  `persona-daten.md` (✔ P94).
- **Konzept-Webseite** `../konzept-website/` (README mit Befunden je Seite).
- Eigene Erhebungen (Selbstversuch, Kurzinterviews, Codierung, Workshop): **offen**, auf den Folien als „offen: …“.

## 6. KI-Unterstützung

Die Präsentation ist KI-gestützt entstanden: Folien, Sprechtexte, Gestaltung (CSS/SVG) und Skripte mit Claude Code
im Workflow „fs2-bau“ (KI-Nachweis FS2, Eintrag 11, Delegation D05; `../../ki-nachweis/ki-nachweis-fallstudie-2.md`).
Grundlage waren nur Gestaltungsplan, Dossier, Persona und Vorlesung; keine neue Websuche in diesem Schritt. Keine
KI-Bilder, keine KI-simulierte Befragung. Die Prüfung durch die Gruppe ist offen. Die Videobotschaft wurde von der KI
weder angesehen noch transkribiert.
