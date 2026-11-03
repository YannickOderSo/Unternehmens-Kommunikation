export const meta = {
  name: 'fs2-bilder-veroeffentlichen',
  description: 'Abnahme-Befunde aus D06 umsetzen und Präsentation/Konzept-Webseite auf veröffentlichte Fremdbilder und Video umstellen, danach unabhängig abnehmen',
  phases: [
    { title: 'Bauen', detail: 'je ein Bauer für Konzept-Webseite und Präsentation' },
    { title: 'Abnahme', detail: 'je ein Prüfer pro Bauer' },
  ],
}

const R = '/home/user/Unternehmens-Kommunikation'
const FS2 = R + '/fallstudie-2-customer-journey'
const SP = '/tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad/d07'

const GEMEINSAM = `
AUSGANGSLAGE (Stand 03.11.2026, Commit f86cb9a auf master, bereits gepusht):
- Workflow D06 hat HOLY-Bilder beschafft und in Präsentation (${FS2}/praesentation/) und Konzept-Webseite (${FS2}/konzept-website/) eingebaut, zunächst als „interne Fassung“ (Ordner intern/, per .gitignore ausgeschlossen).
- Danach hat Yannick die Veröffentlichung erlaubt („Du darfst die Sachen online auf github posten für die online pages ich erlaube es dir“, KI-Nachweis FS2 Nr. 17). Der Gründer hat (über Yannick) erlaubt, dass sein Video öffentlich online in der Präsentation läuft (KI-Nachweis FS2 Nr. 18).
- Die Hauptsitzung hat deshalb schon umgezogen: Bilder liegen jetzt VERSIONIERT in praesentation/fremdbilder/ und konzept-website/fremdbilder/, das Register heißt jeweils fremdbilder/register.js (setzt weiter window.INTERN_BILDER), die Felder „datei“ zeigen auf fremdbilder/<datei>. Das Gründer-Video liegt versioniert in praesentation/video/gruender-video.mp4 (data-quelle auf Folie 09 angepasst). Die HTML-Seiten laden fremdbilder/register.js; konzept.js, beide pruefen.mjs und folie08-bilder.mjs sind auf die neuen Pfade umgestellt; die Exportsperre in praesentation/werkzeuge/pruefen.mjs ist entfernt. Beide Prüfskripte laufen mit 0 Fehlern.
- intern/ bleibt ausgeschlossen und enthält nur noch Rohdownloads (intern/roh/), Kontaktbögen, Abnahmebilder, Vorschauen und die alte Kopie intern/alt-vor-veroeffentlichung/ (nicht verwenden, nicht löschen).
- Die Bezeichner data-intern*, window.INTERN_BILDER, Klasse intern-bild, Datei js/folien/intern-bilder.js, html[data-fassung="intern"] bleiben aus technischen Gründen bestehen (NICHT umbenennen). Sie stammen aus der Zeit vor der Freigabe; das soll einmal in der Doku stehen.

NEUE BEGRIFFE (überall in sichtbaren Texten, Kommentaren und Doku verwenden):
- „Fassung mit Bildern“ = Standard, so läuft es im Repository, auf GitHub Pages und im Hörsaal.
- „Rückfall ohne Fremdbilder“ = nur noch, wenn fremdbilder/register.js fehlt oder per Schalter (Präsentation ?kacheln=rueckfall, pruefen --oeffentlich; Webseite pruefen --fassung oeffentlich).
- Sätze wie „nur intern“, „nicht im Repository“, „nicht auf GitHub Pages“, „nie hochladen“, „nur im Hörsaal“, „nur privat“ in Bezug auf die ausgewählten Bilder oder das Video sind jetzt FALSCH und müssen ersetzt werden durch: „veröffentlicht mit Freigabe (KI-Nachweis FS2 Nr. 17 bzw. Nr. 18), nicht kommerziell, für die Lehrveranstaltung; keine eigenen Fotos der Gruppe“. Für intern/roh/ usw. bleibt „ausgeschlossen“ richtig.

FESTE REGELN:
- Nichts committen, nichts pushen, kein git reset/checkout/stash. Die Hauptsitzung committet.
- Keine Namen von KI-Modellen in Dateien. Sprache Deutsch.
- Keine neuen Downloads aus dem Internet; benötigte Ausschnitte nur aus vorhandenen Dateien in intern/roh/ bzw. fremdbilder/ erzeugen (Python/Pillow oder ffmpeg; Bilder mit dem Read-Werkzeug ansehen).
- Das Gründer-Video NICHT öffnen, ansehen, anhören, transkribieren oder inhaltlich beschreiben; nur Pfade und Kommentare ändern. Keine Aussagen aus dem Video zitieren.
- Keine personenbezogenen Daten Dritter neu einbringen (keine Namen von Privatpersonen, keine Gesichter neu hinzufügen).
- Fakten über HOLY nur mit Quelle (Dossier ${FS2}/recherche-customer-journey.md bzw. Befund-ID); keine Zahl ohne Quelle. Gib in deinem Ergebnis für jede neue inhaltliche Aussage die Quelle an (Datei/Befund-ID oder URL aus register.js).
- Hilfsskripte und Zwischenbilder nur nach ${SP}/ (Scratchpad), nicht ins Repository.
- Playwright: PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core. Der Test-Chromium kann kein H.264 abspielen; das Video auf 09 fällt dort immer auf den Rückfall – das ist KEIN Fehler der Seite.
`

const BAUER_WEB = `Du bist der Bauer für die KONZEPT-WEBSEITE (${FS2}/konzept-website/). Arbeite NUR in diesem Ordner. Ausnahme: werkzeuge/folie08-bilder.mjs schreibt (wie bisher) praesentation/bilder/konzept-0n-*.png (Modus ohne Schalter) und praesentation/fremdbilder/konzept-0n-*.png (Modus --intern). praesentation/fremdbilder/register.js und alles andere unter praesentation/ NICHT anfassen – dort arbeitet parallel ein anderer Bauer. Wenn sich Alt-Text/Nachweis der Schlüssel konzept-01 bis konzept-05 ändern müssen, schreibe den neuen Wortlaut in dein Ergebnis (Feld hinweise_hauptsitzung); die Hauptsitzung trägt ihn ein.

${GEMEINSAM}

AUFGABEN
A) Veröffentlichung abbilden
 1. Fuß aller 7 Seiten: Den Obersatz „Produktbilder und Screenshots: HOLY Softdrinks GmbH (de.holy.com), Abruf 03.11.2026 – nur intern für die Lehrveranstaltung.“ ersetzen. Er ist doppelt falsch (keine Screenshots auf der Webseite; haendler/danke zeigen Fotos Dritter; „nur intern“ stimmt nicht mehr). Neuer Wortlaut, sinngemäß: „Bilder: Produktbilder und Grafiken der HOLY Softdrinks GmbH sowie Fotos Dritter (Herkunft je Bild unten), Abruf 03.11.2026 – veröffentlicht mit Freigabe, nicht kommerziell, für die Lehrveranstaltung; keine eigenen Fotos der Gruppe.“ Gleich in allen 7 HTML-Dateien, in INTERN_FUSS (werkzeuge/pruefen.mjs) und in README.md.
 2. werkzeuge/pruefen.mjs: Die Fassung mit Bildern ist jetzt der veröffentlichte Standard. _vorschau/ (versioniert) soll künftig die Fassung MIT Bildern zeigen (so sieht es auf GitHub Pages aus); die Fassung ohne Bilder bleibt als Prüfung „Rückfall ohne Fremdbilder“ erhalten, ihre Bildschirmfotos gehen nur noch in einen ausgeschlossenen Ordner (z. B. intern/vorschau-rueckfall/) oder entfallen. Hilfe-Texte, Meldungen und Abschlusszeile auf die neuen Begriffe umstellen. Die Regel „keine Links nach intern/“ bleibt. Prüfen, dass auf GitHub-Pages-Bedingungen (fremdbilder/ vorhanden) keine Konsolenfehler entstehen.
 3. werkzeuge/folie08-bilder.mjs: Kopf- und Abbruchtexte auf den neuen Stand (fremdbilder/ ist versioniert; Schalter --intern = „mit Bildern“, Name bleibt). Prüfung „öffentliche Fassung nicht nach intern/“ darf bleiben.
 4. Kommentare in den 7 HTML-Dateien, assets/konzept.js, assets/konzept.css und README.md (Kopf, Abschnitt 3a, Kennzeichnung, Abschnitt 6 Quellen, 7 Offen, 8 Öffnen, 9 Prüfen) auf „veröffentlicht mit Freigabe (KI-Nachweis FS2 Nr. 17)“ umstellen. Der feste Hinweisbalken („Studentisches Konzept der Gruppe (HS Kaiserslautern) – keine Website der HOLY Softdrinks GmbH · keine Bestellung möglich“), noindex, keine Formulare, keine externen Anfragen bleiben unverändert.
B) Abnahme-Befunde aus D06 umsetzen (Prüfer-Befunde, jeweils prüfen und umsetzen):
 5. (mittel) folie08-bilder.mjs: Rahmen 4 und 5 zeigen das Starter Set, obwohl Rahmen 3 Marcos 50er-Dose wählt. warenkorb.html und danke.html mit ?packung=50 laden (Query an die Datei-URL hängen). Beide Modi neu erzeugen (ohne Schalter und mit --intern). Danach prüfen und ansehen: Rahmen 4 zeigt die 50er-Dose mit dem Preis, den die Seite selbst berechnet; Rahmen 5 passt dazu. Die Anmerkungen auf Folie 08 lauten: „Code steht schon da, zwei klare Wege“, „Koffein als Text statt Etikettbild“, „Preis je Portion und Grundpreis“, „ein Liefertermin, Endpreis vorab“, „Squad in einem Schritt statt Sackgasse“ – melde, falls ein Rahmen dazu nicht mehr passt.
 6. (mittel) web-danke-paket und web-haendler-regal sind Symbolbilder: Nachweis mit „Symbolbild · “ beginnen; Bildunterschrift am Bild kurz („Symbolbild · Foto: de.holy.com/pages/our-story, Abruf 03.11.2026“ bzw. „Symbolbild · Foto: Lebensmittel Zeitung, 10.04.2026“), voller Nachweis im Fuß. web-danke-paket: Nachweis „Symbolbild · Foto von der Fotowand auf de.holy.com/pages/our-story (Unterschrift „Unsere Kartons sind auch nach der Lieferung noch multifunktional einsetzbar“, Urheber nicht genannt), Abruf 03.11.2026 · Ausschnitt“; „Community-Foto“ nicht mehr behaupten (Alt-Text, README).
 7. (mittel) haendler.html: Bei 390 × 844 muss die Code-Box und der Hauptknopf „Coins holen und in den Squad“ im ersten Bildschirm stehen. Regalfoto hinter die Knopfreihe/Meta setzen oder mobil als schmalen Streifen. Mit Bildschirmfoto belegen.
 8. (niedrig) web-danke-shaker: Alt-Text ohne „aus dem Starter Set“. Bildplatz nach Packung schlüsseln ({packung}): set → schwarzer Logo-Shaker; 50 und 10 → pinker Raptor-Shaker, aber NUR wenn die Seite selbst (Texte in konzept.js/produkt.html) sagt, dass diese Packung einen Shaker enthält – sonst Platz ausblenden; 1 → ausblenden. Den pinken Shaker als freigestellten Ausschnitt aus vorhandenem Material erzeugen (z. B. aus fremdbilder/web-galerie-dose-shaker.webp oder intern/roh/produkt/packshots/…), neue Datei in fremdbilder/ mit Registereintrag (datei, alt, nachweis, motiv, platz, quelle, pixel).
 9. (niedrig) Fußliste „Bildnachweise auf dieser Seite“: vor jeden Eintrag das Motiv setzen; gleiche Nachweise zusammenfassen und Motive sammeln (z. B. „Packshots 50 / 10 / 1 Portionen: …“). pruefen.mjs anpassen.
 10. (niedrig) produkt.html: Solange niemand in der Galerie geklickt hat, folgt das große Bild der gewählten Packung (set → web-start-teaser-set, 50 → web-galerie-dose, 10/1 → Packshots) inkl. Nachweis. Mobil (< 900 px) das große Bild niedriger (z. B. aspect-ratio 4/3, object-fit contain), damit Titel/Bewertung/Preis bei 390 × 844 im ersten Bildschirm beginnen.
 11. (niedrig) index.html Knopf „Zum Produkt aus dem Video“: eigener Schlüssel (z. B. web-start-tag) mit dem freigestellten 50er-Packshot (web-packung-50.webp) auf heller Fläche, ohne transform: scale; ab 900 px kein Umbruch im Knopftext.
 12. (niedrig) squad.html Anmerkung „… als eigene Grafik“ → „… als eigene Stufen-Grafik (mit HOLYs Level-Abzeichen, Nachweis im Fuß)“; index.html Skizzen-Unterschrift so, dass „keine Screenshots, kein Logo“ eindeutig nur die eigene Skizze meint.
 13. (niedrig) web-squad-coins: neu zuschneiden, sodass keine Münze angeschnitten ist (Quelle in intern/roh/produkt/squad-rewards/ oder grafik/ suchen), oder den Platz weglassen, wenn es ohne ruhiger wirkt. Entscheidung begründen.
C) Prüfen und ansehen
 - node ${FS2}/konzept-website/werkzeuge/pruefen.mjs (alle Fassungen) muss mit 0 Fehlern enden; folie08-bilder.mjs in beiden Modi Exit 0.
 - Alle 7 Seiten bei 390 px (ganze Seite) und 1280 px in der Fassung mit Bildern ansehen (Read-Werkzeug), zusätzlich 320 px ohne waagerechtes Scrollen. Die 5 neuen Folie-08-Bilder (praesentation/fremdbilder/konzept-0n-*.png) ansehen.
 - git status am Ende: Welche Dateien sind geändert/neu? Nichts unter intern/ darf versioniert werden.

ERGEBNIS: dateien (Liste), erledigt (was, je Befund-Nr.), pruefungen (Läufe, Ergebnisse, angesehene Bilder), offen (Liste), hinweise_hauptsitzung (u. a. neuer Wortlaut alt/nachweis für konzept-01..05, Quellen neuer Aussagen).`

const BAUER_PRAES = `Du bist der Bauer für die PRÄSENTATION (${FS2}/praesentation/) und die FS2-Doku außerhalb der Konzept-Webseite (${FS2}/README.md, ${FS2}/gestaltungsplan.md). konzept-website/ NICHT anfassen. In praesentation/fremdbilder/register.js darfst du alle Einträge ändern AUSSER konzept-01 bis konzept-05 (die Dateien praesentation/fremdbilder/konzept-0n-*.png und praesentation/bilder/konzept-0n-*.png erzeugt parallel der Webseiten-Bauer neu – nicht anfassen). Ignoriere praesentation/_test/abnahme-technik/ (Testkopien).

${GEMEINSAM}

AUFGABEN
A) Veröffentlichung abbilden
 1. Kommentare und Texte in index.html (Kopfkommentar, Folienkommentare, Kommentar am <script src="fremdbilder/register.js">, VIDEO-Kommentar an Folie 09, B-Folie mit „Fotos und Screenshots nur in intern/…“), js/folien/intern-bilder.js (Kopf; Notizabsatz „Bildnachweis der internen Fassung (Dateien nur in intern/, nicht im Repository; …)“ → z. B. „Bildnachweis (Fremdbilder, veröffentlicht mit Freigabe; keine eigenen Fotos der Gruppe): “), css/folien/pfad.css, js/folien/09-fazit.js (Kopf: Quelle jetzt video/gruender-video.mp4, versioniert, veröffentlicht mit Zustimmung des Gründers, KI-Nachweis FS2 Nr. 18) und werkzeuge/pruefen.mjs (Hilfe-Texte, Kommentare und Meldungen; Exportsperre ist bereits entfernt – Hilfe-Text dazu streichen; Warnung „öffentliche Fassung ohne interne Bilder“ → „Rückfall ohne Fremdbilder (fremdbilder/register.js fehlt)“) auf die neuen Begriffe umstellen.
 2. Rückfall-Text des Videos auf 09: „Videobotschaft des Gründers – nur im Vortrag“ stimmt nicht mehr. Ersetzen durch einen kurzen, wahren Text (z. B. „Videobotschaft des Gründers – in der Web-Präsentation auf Folie 09“). Das Verhalten (Rückfall immer in ?aufnahme, ?druck, Referentenfenster; Quelle erst beim Betreten setzen) bleibt.
 3. LIESMICH.md (§1, §2, §7–§12), QUELLEN.md (4a, Video-Zeile), AUTOREN.md (§10 und Regeln), ${FS2}/README.md und ${FS2}/gestaltungsplan.md (Stellen zu intern/, Video, 7.3, 11.x) auf den neuen Stand: Pfade fremdbilder/ und video/, veröffentlicht mit Freigabe (Nr. 17 Bilder, Nr. 18 Video), intern/ nur noch Rohmaterial. Bezeichner data-intern* usw. einmal als historisch erklären. Verlauf (was vorher galt) darf als kurzer Hinweis „bis 03.11.2026: …“ stehen bleiben.
B) Abnahme-Befunde aus D06 umsetzen (prüfen, dann umsetzen; ändere Klickzahl 23 und Sollzeit 710 s nicht, außer ein Befund verlangt es):
 4. (mittel) Folie 07: Die sechs Vorschaubilder (136 × 73 px) sind unlesbar und machen die Folie unruhig. Umsetzen: auf 07 nur die Logos (data-intern an figure.e7-bild entfernen bzw. Bilder ausblenden). Prüfe, ob es eine Backup-Folie zu den Vorbildern gibt (B6 o. ä.); wenn ja und Platz da ist, die sechs Bilder dort groß (mind. 360 × 203) mit Unterschrift zeigen, sonst nur dokumentieren. Bildnachweis-Zeile auf 07 entsprechend anpassen.
 5. (mittel) v07-otto belegt die Aussage „Lieferzeit schon am Artikel“ nicht (Werbefoto Hermes-Zusteller). Neu zuschneiden aus ${FS2}/praesentation/intern/roh/vorbilder/x12-otto-lieferzeit/x12-otto-lieferung-desktop-zuschnitt-lieferzeit-am-artikel.png (zeigt den Satz „Die Lieferzeit zeigen wir dir vor deiner Bestellung direkt am jeweiligen Artikel an.“). Datei, alt, nachweis („Screenshot otto.de/shoppages/lieferung, Textausschnitt, 03.11.2026“), QUELLEN 4a, LIESMICH und Notizen 07 anpassen. Gilt auch, wenn das Bild nur noch auf einer Backup-Folie erscheint.
 6. (mittel) Folie 03 Blog-Kachel: p-bildlabel „Blog: 0 Beiträge“ ergänzen (wie bei anderen Kacheln). Sprechtext Folie 04 („Einen Blog gibt es nicht“ o. ä.) und Notiz 03 einheitlich auf „Der Blog ist leer (0 Beiträge)“ – die Wortzahl soll etwa gleich bleiben. Quelle für „0 Beiträge“: Dossier-Befund suchen und nennen.
 7. (niedrig) Folie 02: Bildlabel „Symbolbild Schichtarbeit (Lokführer aus der HOLY-Community) – nicht Marco“; in den Notizen 02 kurze Antwort auf die Rückfrage „Ist Marco Lokführer?“ (Nein, Persona fiktiv, Lager-Schichtarbeit; Symbolbild ohne Gesicht).
 8. (niedrig) Label-Überdeckungen: Folie 05 Kachel k6 „Squad“ verdeckt die Bildüberschrift → Label weglassen oder object-position; Folie 03 „Dose & Shaker“ liegt über der Dose → Zuschnitt m03-dose-shaker so ändern, dass das Label auf freier Fläche liegt (Quelle intern/roh/produkt/packshots/).
 9. (niedrig) Logos auf 07 optisch angleichen (z. B. Philips ~24 px, YouTube ~28 px; zooplus ohne grünen Kasten, falls in intern/roh/vorbilder/logos/ vorhanden; oder einheitlich einfarbig dunkel, im Dunkelmodus auf heller Fläche). Ruhige Spalte ist das Ziel.
 10. (niedrig) Bildquell-Zeilen: 04, 05, 09 „… · Community-Foto HOLY (Symbolbild, nicht Marco)“; 07 je Art korrekt benennen (Screenshots Apple/zooplus/OTTO, Standbild YouTube, Grafik Philips, App-Store-Bild Pampers Club, Logos · Abruf 03.11.2026) bzw. passend zu Aufgabe 4.
 11. (niedrig) Folie 03 Platzhalter „Tipp unter Kollegen“: in der Fassung mit Bildern ruhiger darstellen (z. B. wie „Antwortseite fehlt“ auf 04: cremefarben, gestrichelter Rand), Text „offen“ bleibt.
C) Prüfen und ansehen
 - cd ${FS2}/praesentation && PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core node werkzeuge/pruefen.mjs index.html --ausgabe _test/d07-hell --schritte ; ebenso --modus dunkel (_test/d07-dunkel) und --oeffentlich --druck _test/d07-rueckfall.pdf (_test/d07-rueckfall). Ziel: 0 Fehler; Warnungen nicht mehr als vorher (17, Wortbudget/Notizen).
 - Klicks (23) und Sollzeit (710 s) mit dem letzten Commit vergleichen; Sprechtexte nur bei Aufgabe 6 geändert.
 - Endzustände der geänderten Folien (02, 03, 04, 05, 07, 09 und ggf. Backup) hell und dunkel ansehen (Read-Werkzeug).
 - Folie 09: per Playwright prüfen, dass nach dem Betreten src = video/gruender-video.mp4 gesetzt wird; mit einer Route, die die Anfrage mit einem synthetischen WebM beantwortet (z. B. ffmpeg -f lavfi testsrc … nach ${SP}/), prüfen, dass das Video startet und kein Rückfall erscheint; ohne Route im Test-Chromium erscheint der neue Rückfall-Text (H.264 fehlt dort).
 - git status am Ende.

ERGEBNIS: dateien, erledigt (je Aufgabe), pruefungen, offen, hinweise_hauptsitzung (inkl. Quellen neuer Aussagen).`

const BAUER_SCHEMA = {
  type: 'object',
  properties: {
    dateien: { type: 'array', items: { type: 'string' } },
    erledigt: { type: 'string' },
    pruefungen: { type: 'string' },
    offen: { type: 'array', items: { type: 'string' } },
    hinweise_hauptsitzung: { type: 'string' },
  },
  required: ['dateien', 'erledigt', 'pruefungen', 'offen', 'hinweise_hauptsitzung'],
}

const PRUEF_SCHEMA = {
  type: 'object',
  properties: {
    befunde: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
          datei: { type: 'string' },
          stelle: { type: 'string' },
          problem: { type: 'string' },
          vorschlag: { type: 'string' },
        },
        required: ['schwere', 'datei', 'stelle', 'problem', 'vorschlag'],
      },
    },
    fazit: { type: 'string' },
  },
  required: ['befunde', 'fazit'],
}

const TEILE = [
  { key: 'webseite', bauer: BAUER_WEB, ordner: FS2 + '/konzept-website/',
    pruefauftrag: `Prüfe die Konzept-Webseite ${FS2}/konzept-website/ nach dem Umbau. Ändere NICHTS im Repository (nur lesen, Prüfläufe, Bildschirmfotos nach ${SP}/abnahme-web/). Prüfe: (1) Stimmen alle sichtbaren Texte, Kommentare und README mit dem neuen Stand überein (fremdbilder/ veröffentlicht mit Freigabe Nr. 17; keine Reste von „nur intern“, „nicht im Repository“, „nicht auf GitHub Pages“ für die ausgewählten Bilder)? (2) Ist jeder Bildnachweis korrekt und ehrlich (Symbolbilder gekennzeichnet; Urheber nicht falsch zugeschrieben)? Vergleiche Stichproben mit den quelle-URLs im Register (lokale Rohdateien in intern/roh/ als Vergleich, keine neuen Downloads nötig). (3) Läuft node werkzeuge/pruefen.mjs mit 0 Fehlern? Liefert folie08-bilder.mjs in beiden Modi passende Bilder (Rahmen 3–5 durchgehend 50er-Dose)? (4) Sichtprüfung 390 px und 1280 px aller 7 Seiten (Read-Werkzeug): Code-Box und Hauptknopf auf haendler.html im ersten Bildschirm, Produktseite Titel im ersten Bildschirm, keine angeschnittenen/unruhigen Bilder, kein waagerechtes Scrollen bei 320 px. (5) Fester Hinweisbalken, noindex, keine externen Anfragen, keine Formulare unverändert? (6) Keine personenbezogenen Daten Dritter, keine KI-Modellnamen. Melde nur echte Probleme mit Schwere, Datei, Stelle, Problem, konkretem Vorschlag; nenne Belege (Datei:Zeile, Bildschirmfoto-Pfad).` },
  { key: 'praesentation', bauer: BAUER_PRAES, ordner: FS2 + '/praesentation/',
    pruefauftrag: `Prüfe die Präsentation ${FS2}/praesentation/ (und ${FS2}/README.md, ${FS2}/gestaltungsplan.md) nach dem Umbau. Ändere NICHTS im Repository (nur lesen, Prüfläufe mit Ausgabe nach praesentation/_test/abnahme-d07/ oder ${SP}/abnahme-praes/). Prüfe: (1) Doku, Kommentare und sichtbare Texte stimmen mit dem neuen Stand überein (fremdbilder/ und video/ veröffentlicht mit Freigabe Nr. 17/18; keine Reste „nur intern“, „nicht im Repository“, „nur im Vortrag“ für Bilder/Video; intern/ nur Rohmaterial). (2) pruefen.mjs hell, dunkel und --oeffentlich: 0 Fehler, Warnungen nicht mehr als 17; Klicks 23 und Sollzeit 710 s unverändert gegenüber git HEAD (per Skript vergleichen). (3) Sichtprüfung der Endzustände 01–09 (+ geänderte Backup-Folien) hell und dunkel: Folie 07 ruhig und lesbar, Logos ausgewogen; Blog-Kachel mit Label; keine Label-Überdeckungen auf 03/05; Bildquell-Zeilen korrekt und innerhalb des Satzspiegels. (4) OTTO-Bild zeigt jetzt den belegenden Satz; jeder Nachweis in register.js ehrlich (Symbolbild/Werbebild gekennzeichnet). (5) Folie 09: Quelle video/gruender-video.mp4 wird beim Betreten gesetzt, Rückfall-Text wahr; Video NICHT öffnen oder ansehen (im Test nur Pfade/Attribute prüfen, ggf. mit synthetischem WebM per Route). (6) Keine KI-Modellnamen, keine personenbezogenen Daten Dritter. Melde nur echte Probleme mit Schwere, Datei, Stelle, Problem, konkretem Vorschlag; nenne Belege (Datei:Zeile, Bildschirmfoto-Pfad).` },
]

phase('Bauen')
const ergebnisse = await pipeline(
  TEILE,
  (t) => agent(t.bauer, { label: 'bauen:' + t.key, phase: 'Bauen', schema: BAUER_SCHEMA }),
  (bau, t) => agent(t.pruefauftrag + `\n\nKontext – Ergebnis des Bauers (zur Orientierung, nicht ungeprüft übernehmen):\n` + JSON.stringify(bau).slice(0, 12000) + `\n\n` + GEMEINSAM, { label: 'abnahme:' + t.key, phase: 'Abnahme', schema: PRUEF_SCHEMA })
    .then((pr) => ({ teil: t.key, bau, pruefung: pr }))
)
return ergebnisse
