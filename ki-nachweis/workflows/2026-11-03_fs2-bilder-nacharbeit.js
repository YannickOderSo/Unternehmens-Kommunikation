export const meta = {
  name: 'fs2-bilder-nacharbeit',
  description: 'Restbefunde der D07-Abnahme umsetzen (Rechte-Formulierung, Personendaten, Doku-Reste, Zuschnitte, Video-Rückfall) und unabhängig abnehmen',
  phases: [
    { title: 'Nacharbeit', detail: 'je ein Bauer für Konzept-Webseite und Präsentation' },
    { title: 'Abnahme', detail: 'je ein adversarialer Prüfer' },
  ],
}

const R = '/home/user/Unternehmens-Kommunikation'
const FS2 = R + '/fallstudie-2-customer-journey'
const SP = '/tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad/d08'

const GEMEINSAM = `
STAND (03.11.2026, Commit 6288a1d auf master, gepusht): Präsentation (${FS2}/praesentation/) und Konzept-Webseite (${FS2}/konzept-website/) zeigen Fremdbilder aus fremdbilder/ (versioniert, auf GitHub Pages), Register fremdbilder/register.js (window.INTERN_BILDER; Bezeichner data-intern*, INTERN_BILDER, intern-bild, intern-bilder.js, data-nur-intern, data-nur-oeffentlich, --intern, --oeffentlich sind historische Namen und bleiben). Begriffe: „Fassung mit Bildern“ (Standard) und „Rückfall ohne Fremdbilder“. Gründer-Video: praesentation/video/gruender-video.mp4 (versioniert). intern/ ist per .gitignore ausgeschlossen (Rohmaterial).

RECHTESTATUS – so und nicht anders formulieren (ehrlich, keine Rechtsberatung):
- Fremdbilder (HOLY-Produktbilder, Screenshots, Fotos Dritter): Die Veröffentlichung hat die GRUPPE beschlossen (Yannick, KI-Nachweis FS2 Nr. 17: „Du darfst die Sachen online auf github posten für die online pages ich erlaube es dir“). Eine Genehmigung der Rechteinhaber (HOLY Softdrinks GmbH, Lebensmittel Zeitung, Apple, OTTO, zooplus, Philips, P&G, YouTube, Trustpilot, Urheber von Community-Fotos) wurde NICHT eingeholt. Nicht kommerziell, für die Lehrveranstaltung, mit Bildnachweis.
- HOLY-Logo: mit Einverständnis (Nr. 12, Gründer eingeweiht). Videobotschaft: mit Zustimmung des Gründers, auch öffentlich online (Nr. 18).
- „mit Freigabe“ allein ist missverständlich (klingt nach Erlaubnis der Rechteinhaber) und muss überall, wo es um Fremdbilder geht, so präzisiert werden.

FESTE REGELN: Nichts committen/pushen, kein git reset/checkout/stash. Keine Namen von KI-Modellen. Deutsch. Keine neuen Downloads; Ausschnitte nur aus vorhandenen Dateien (intern/roh/, fremdbilder/) mit Python/Pillow; Bilder mit dem Read-Werkzeug ansehen. Das Gründer-Video NICHT öffnen/ansehen/anhören/transkribieren. Keine personenbezogenen Daten Dritter (keine Namen von Privatpersonen). Keine Zahl ohne Quelle; für jede neue inhaltliche Aussage im Ergebnis die Quelle nennen (Datei/Befund-ID/URL aus register.js). Hilfsdateien nur nach ${SP}/. Playwright: PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core (der Test-Chromium kann kein H.264; Video auf 09 fällt dort auf den Rückfall – kein Fehler der Seite; zum Testen ein synthetisches WebM per Route ausliefern).
`

const BAUER_WEB = `Du bist der Bauer für die KONZEPT-WEBSEITE ${FS2}/konzept-website/. Arbeite NUR dort. Ausnahme: Wenn deine Änderungen die Folie-08-Bilder betreffen, erzeuge sie mit werkzeuge/folie08-bilder.mjs (ohne Schalter → praesentation/bilder/, mit --intern → praesentation/fremdbilder/) neu; sonst NICHTS unter praesentation/ anfassen (dort arbeitet parallel ein anderer Bauer; register.js der Präsentation ist tabu – nötige Textänderungen für konzept-01..05 ins Ergebnis schreiben).

${GEMEINSAM}

AUFGABEN (Befunde der Abnahme D07; jeden prüfen, dann umsetzen):
W1 (mittel) Fuß-Obersatz in allen 7 HTML, Konstante BILDER_FUSS in werkzeuge/pruefen.mjs und README (3a): wortgleich ersetzen durch „Bilder: Produktbilder und Grafiken der HOLY Softdrinks GmbH sowie Fotos Dritter (Herkunft je Bild unten), Abruf 03.11.2026 – Veröffentlichung von der Gruppe beschlossen (KI-Nachweis FS2 Nr. 17), keine Genehmigung der Rechteinhaber eingeholt; nicht kommerziell, für die Lehrveranstaltung; keine eigenen Fotos der Gruppe.“ README-Stellen mit „veröffentlicht mit Freigabe“ ebenso präzisieren.
W2 (mittel) Kurze Bildunterschriften: web-haendler-regal → „Symbolbild · Quelle: Lebensmittel Zeitung, 10.04.2026 (Urheber unbekannt)“; web-danke-paket → „Symbolbild · Quelle: de.holy.com/pages/our-story (Urheber nicht genannt), Abruf 03.11.2026“. README (Z. ~122 und ~233–234) anpassen: „Symbolbild“ heißt, das Bild zeigt nicht Marcos Paket bzw. keinen bestimmten Markt; Urheber unbekannt bzw. nicht genannt ist ein getrennter Punkt.
W3 (niedrig) haendler.html Kommentar „Ausschnitt, nur HOLY-Bereich“ ist falsch (am Rand Red-Bull-Dosen) → Kommentar korrigieren (oder enger zuschneiden aus praesentation/intern/roh/produkt/handel/regal-energy-neben-monster-redbull.jpg und pixel anpassen; begründen).
W4 (niedrig) Der Produkt-Tag im Knopf der Startseite zeigt die 50er-Dose, der Knopf führt aber zur Produktseite mit vorgewähltem Starter Set. Lösung: Die Produktseite übernimmt die Startpackung aus ?packung= (nur gültige Werte set/50/10/1; sonst wie bisher set), und der Knopf verlinkt auf produkt.html?packung=50 (Code-Parameter muss weiter mitreisen – ergaenzeLink prüfen). Danach pruefen.mjs (erster Bildschirm Produktseite) und folie08-bilder.mjs (beide Modi) laufen lassen und die Bilder ansehen.
W5 (niedrig) README Liste der historischen Namen um data-nur-oeffentlich ergänzen („heute: nur im Rückfall ohne Fremdbilder sichtbar“); Kommentar in assets/konzept.js an der Stelle.
W6 (niedrig) Logo-Regel klarstellen (README Z. ~17, ~58; index.html Kopfkommentar Z. ~18): Logo als Gestaltungselement nur als Wortmarke im Kopf; auf Produktbildern der Fassung mit Bildern ist das Logo Teil der Packung (Nachweis im Fuß); kein gelbes Oval und kein Verpackungsdesign als eigene Gestaltung.
W7 (niedrig) produkt.html Garantie-Kasten bei 320 px: „Zufriedenheitsgarantie“ läuft an den Rahmen → konzept.css .siegel grid-template-columns: 64px minmax(0,1fr) und hyphens: auto (lang="de" prüfen). Bei 320 px ansehen.
W8 (niedrig) werkzeuge/pruefen.mjs: nach dem Register-Abgleich je Datei per git ls-files --error-unmatch prüfen, ob sie versioniert bzw. vorgemerkt ist; sonst WARNUNG („nicht versioniert – fehlt nach dem Push auf GitHub Pages“).
W9 (niedrig) Nachkauf über squad.html führt zu danke.html?packung=50 mit „Shaker auspacken“ und pinkem Shaker, obwohl der Shaker laut ✔ T22 nur zur ersten Dose kommt. Einfache ehrliche Lösung: Nachkauf-Link mit einem Parameter (z. B. nachkauf=1), der auf Warenkorb/Danke den Shaker-Hinweis und das Shaker-Bild weglässt; Parameter muss über Warenkorb → Danke mitreisen. Wenn das unverhältnismäßig ist, begründen und nur dokumentieren.
W10 (niedrig, optional) haendler.html bei 1280 px: Hauptknopf „Coins holen und in den Squad (Konzept)“ bricht zweizeilig um → wenn mit kleiner CSS-Änderung lösbar, beheben.
PRÜFEN: node ${FS2}/konzept-website/werkzeuge/pruefen.mjs → 0 Fehler (Warnungen begründen); folie08-bilder.mjs beide Modi Exit 0; betroffene Seiten bei 390, 320 und 1280 px ansehen (Read). Volltextsuche in konzept-website/ (ohne intern/) nach „mit Freigabe“ – jede Stelle zu Fremdbildern präzisiert? git status am Ende.
ERGEBNIS: dateien, erledigt (je W-Nr.), pruefungen, offen, hinweise_hauptsitzung (inkl. Quellen neuer Aussagen und ggf. Textwünsche für praesentation/fremdbilder/register.js konzept-0n).`

const BAUER_PRAES = `Du bist der Bauer für die PRÄSENTATION ${FS2}/praesentation/ sowie ${FS2}/gestaltungsplan.md und ${FS2}/README.md. konzept-website/ NICHT anfassen. praesentation/bilder/konzept-0n-*.png und praesentation/fremdbilder/konzept-0n-*.png NICHT anfassen (erzeugt ggf. parallel der Webseiten-Bauer); die Registereinträge konzept-01..05 (nur Text) darfst du ändern. praesentation/_test/abnahme-technik/ ignorieren.

${GEMEINSAM}

AUFGABEN (Befunde der Abnahme D07; jeden prüfen, dann umsetzen; Klicks 23 und Sollzeit 710 s nicht ändern):
P1 (mittel) gestaltungsplan.md: Regeln in 1.2 (Z. ~105 Social-Media-Bilder nur mit Zustimmung des Betreuers, „Abweichung: keine“; Z. ~106 HOLY-Produktfotos „öffentlich nur mit HOLY-Freigabe“), Abschnitt 4 Einleitung (Z. ~311–314 „bis zur Freigabe also nicht veröffentlichen“), Bildplan b05/b08: Abweichung ehrlich vermerken, z. B. „Stand 03.11.2026: in der Fassung mit Bildern veröffentlicht – Beschluss der Gruppe (KI-Nachweis FS2 Nr. 17); keine Genehmigung von HOLY bzw. der Rechteinhaber, keine Zustimmung des Betreuers eingeholt; bewusste Abweichung von der eigenen Einschätzung (✎ G21, H); keine Rechtsberatung“. Außerdem „ohne fremde Bilder“ zur Konzept-Webseite (Z. ~75, b14 Z. ~342, 13.1 Nr. 9 Z. ~1150, Frage an Stenger 13.2 Nr. 16 Z. ~1188) und 11.2 Zeile „Folie 08“ (Z. ~1044) auf den neuen Stand.
P2 (mittel) Backup B8 (index.html, sichtbarer Text und Kernsatz der Notiz): Rechtestatus genau wie oben (Fremdbilder: Beschluss der Gruppe Nr. 17, keine Genehmigung der Rechteinhaber eingeholt; Logo mit Einverständnis Nr. 12; Videobotschaft mit Zustimmung des Gründers Nr. 18; nicht kommerziell, für die Lehrveranstaltung; Bildnachweise). Muss auf die Folie passen (pruefen.mjs, Sichtprüfung).
P3 (mittel) fremdbilder/register.js Einträge konzept-01 bis konzept-05 und Kommentar davor: „interne Fassung“, „intern/bilder.js“, „öffentlichen Fassung“ ersetzen. Wortlaut (vom Webseiten-Bauer D07):
 - alt konzept-01: „Bildschirmfoto der Konzept-Webseite (Fassung mit Bildern): Landingpage mit Creator-Code, im Knopf „Zum Produkt aus dem Video“ ein kleiner Packshot der 50er-Dose Raspberry Raptor“
 - alt konzept-02: „Bildschirmfoto der Konzept-Webseite (Fassung mit Bildern): Antwortseite Koffein-Check mit „Kurz gesagt““; hinweis: „Im oberen Bildschirm steht kein HOLY-Bild (das Sachet-Bild folgt weiter unten); das Bild gleicht daher dem Rückfall ohne Fremdbilder.“
 - alt konzept-03: „Bildschirmfoto der Konzept-Webseite (Fassung mit Bildern): Produktseite ab „Packung wählen“, vier Packungen mit HOLY-Packshots, gewählt 50 Portionen mit Preis je Portion, Grundpreis und Endpreis inklusive Versand“
 - alt konzept-04: „Bildschirmfoto der Konzept-Webseite (Fassung mit Bildern): mobiler Warenkorb mit Liefertermin, Posten Raspberry Raptor 50 Portionen mit Packshot der Dose und Endpreis inklusive Versand“; motiv: „Konzept-Webseite warenkorb.html?packung=50, oberer Bildschirm; Packshot: HOLY Softdrinks GmbH (de.holy.com/products/raspberry-raptor, Shop-Variante „50 Portionen“)“
 - alt konzept-05: „Bildschirmfoto der Konzept-Webseite (Fassung mit Bildern): Danke-Seite „So geht's weiter“ mit drei Schritten, Packshot des pinken Raptor-Shakers und Squad-Einstieg“; motiv: „Konzept-Webseite danke.html?packung=50, Ausschnitt ab „So geht's weiter“; Shaker: HOLY Softdrinks GmbH (Ausschnitt aus dem Packshot der Shop-Variante „50 Portionen mit gratis Shaker“, de.holy.com/products/raspberry-raptor)“
 - nachweis (alle fünf): „Bildschirmfoto der Konzept-Webseite (Fassung mit Bildern, darin HOLY-Produktbilder; Veröffentlichung von der Gruppe beschlossen, KI-Nachweis FS2 Nr. 17), 03.11.2026“
 - quelle: „fallstudie-2-customer-journey/konzept-website/<seite>[?packung=50] (Fassung mit Bildern, konzept-website/fremdbilder/register.js), erzeugt mit konzept-website/werkzeuge/folie08-bilder.mjs --intern (Schaltername historisch)“
 Danach QUELLEN.md (Z. ~103) wörtlich nachziehen.
P4 (mittel, Datenschutz) Der Vorname eines Community-Mitglieds steht im Nachweis von b04-persona („Lokführer & Squad Member <Vorname>: …“) und in QUELLEN.md (Z. ~81). Ohne Namen wiedergeben, z. B. „Symbolbild – Community-Foto eines Lokführers aus dem HOLY-Squad (Bildunterschrift auf de.holy.com/pages/our-story, Name weggelassen), Abruf 03.11.2026 · nicht Marco (Persona fiktiv)“. Danach in praesentation/, gestaltungsplan.md, README.md (ohne intern/, _test/) nach weiteren Vornamen von Privatpersonen aus Bildunterschriften suchen (z. B. per grep auf „Squad Member“, „Member“) und ebenso entfernen. Melde jeden Fund.
P5 (niedrig) Kasten zu Folie 08 in index.html (Z. ~725–726: „bilder/konzept-0n = Kopien aus ../konzept-website/_vorschau/ … neu kopieren“) korrigieren: bilder/ (Rückfall) erzeugt folie08-bilder.mjs ohne Schalter, fremdbilder/ mit --intern; nicht aus _vorschau/ kopieren (dort Fassung mit Bildern).
P6 (niedrig) Video 09: zwei Rückfalltexte. Im HTML ein kurzer Standardtext für Druck/Aufnahme/Referentenfenster (Vorschlag „Videobotschaft des Gründers – läuft in der Web-Präsentation“; darf im Handyrahmen höchstens 3–4 Zeilen umbrechen, ansehen!). Bei einem echten Abspielfehler (error-Listener bzw. play()-Fehler außer NotAllowedError, nicht über nurRueckfall()) setzt 09-fazit.js den Text auf z. B. „Videobotschaft des Gründers – lässt sich in diesem Browser nicht abspielen“. Kasten 09, LIESMICH und gestaltungsplan v01/9.5 nachziehen. Testen: synthetisches WebM per Route → spielt, kein Rückfall; ohne Route (kein H.264) → Fehlertext; ?aufnahme/?druck → Standardtext, keine Anfrage an die Videodatei.
P7 (niedrig) Folie 03: das Label „eigene Suche“ verdeckt die zweite Zeile des Such-Snippets in m03-suche.png → aus der Rohdatei (intern/roh/touchpoints/…, siehe register.js quelle/Manifest) neu zuschneiden, sodass das Label auf freier Fläche liegt (wie k2-suche-05). pixel im Register anpassen. 03 hell und dunkel ansehen.
P8 (niedrig) m03-dose-shaker.nachweis: „Bild: HOLY Softdrinks GmbH (Packshot der Shop-Variante „50 Portionen mit gratis Shaker“, de.holy.com/products/raspberry-raptor), Abruf 03.11.2026 · Werbebild, kein eigenes Foto der Gruppe · freigestellt, oben rechts auf rosa Fläche gesetzt“; QUELLEN 4a nachziehen.
P9 (niedrig) js/folien/intern-bilder.js Kopfkommentar Z. ~32–33: „das Bild aus bilder/ (Rückfall ohne Fremdbilder) steht in data-oeffentlich-src (Name historisch) und kommt zurück, wenn die Datei in fremdbilder/ fehlt.“
P10 (niedrig) Die sechs Vorbild-Bilder v07-youtube, v07-apple, v07-zooplus, v07-otto, v07-philips, v07-pampers stehen auf keiner Folie, sind aber veröffentlicht. Fremdbilder ohne Verwendung nicht veröffentlichen: die sechs Dateien (NICHT die Logos v07-logo-*) nach praesentation/intern/vorbilder-zurueckgehalten/ verschieben (ausgeschlossen), ihre Registereinträge entfernen, pruefen.mjs darf danach nicht meckern; LIESMICH/QUELLEN 4a/AUTOREN/Kasten 07 auf „zurückgehalten, nicht veröffentlicht, liegen in intern/“ ändern (der OTTO-Textausschnitt kann so jederzeit zurückgeholt werden).
P11 (niedrig) In LIESMICH, QUELLEN, AUTOREN, README FS2, gestaltungsplan und index.html (Notizen/Kästen) jedes „veröffentlicht mit Freigabe“ bzw. „mit Freigabe“ zu Fremdbildern nach dem RECHTESTATUS oben präzisieren (Volltextsuche).
PRÜFEN: cd ${FS2}/praesentation && node werkzeuge/pruefen.mjs index.html --ausgabe _test/d08-hell --schritte; ebenso --modus dunkel (_test/d08-dunkel) und --oeffentlich --druck _test/d08-rueckfall.pdf (_test/d08-rueckfall). Ziel 0 Fehler, Warnungen ≤ 17. Klicks 23/Sollzeit 710 s gegen git HEAD vergleichen. Geänderte Folien (03, 08 Notiz, 09, B8) hell/dunkel ansehen. git status am Ende.
ERGEBNIS: dateien, erledigt (je P-Nr.), pruefungen, offen, hinweise_hauptsitzung (inkl. Quellen).`

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
    befunde: { type: 'array', items: { type: 'object', properties: {
      schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] }, datei: { type: 'string' }, stelle: { type: 'string' },
      problem: { type: 'string' }, vorschlag: { type: 'string' } }, required: ['schwere', 'datei', 'stelle', 'problem', 'vorschlag'] } },
    fazit: { type: 'string' },
  },
  required: ['befunde', 'fazit'],
}

const TEILE = [
  { key: 'webseite', bauer: BAUER_WEB, pruef: `Prüfe adversarial die Nacharbeit an der Konzept-Webseite ${FS2}/konzept-website/ (Diff gegen git HEAD 6288a1d: git diff HEAD -- fallstudie-2-customer-journey/konzept-website). Ändere NICHTS im Repository; pruefen.mjs schreibt in das versionierte _vorschau/ – deshalb auf einer Kopie im Scratchpad (${SP}/abnahme-web/) laufen lassen und vergleichen. Prüfe jeden Auftrag W1–W10: wirklich umgesetzt, korrekt, ehrlich (Rechtestatus genau wie vorgegeben, keine Behauptung einer Genehmigung der Rechteinhaber), ohne neue Fehler (Knopf-Link mit ?packung=50 und Code, Produktseite liest ?packung= nur für gültige Werte, Nachkauf-Pfad, 320/390/1280 px Sichtprüfung, kein waagerechtes Scrollen, Hinweisbalken/noindex/keine externen Anfragen unverändert). Suche zusätzlich nach Resten von „mit Freigabe“ ohne Präzisierung, nach Namen von Privatpersonen und nach KI-Modellnamen. Melde nur echte Probleme mit Belegen (Datei:Zeile, Bildschirmfoto-Pfad).` },
  { key: 'praesentation', bauer: BAUER_PRAES, pruef: `Prüfe adversarial die Nacharbeit an der Präsentation ${FS2}/praesentation/ sowie gestaltungsplan.md und README.md (Diff gegen git HEAD 6288a1d). Ändere NICHTS im Repository (Prüfausgaben nach praesentation/_test/abnahme-d08/ oder ${SP}/abnahme-praes/). Prüfe jeden Auftrag P1–P11: umgesetzt, korrekt, ehrlich (Rechtestatus genau wie vorgegeben). Besonders: kein Vorname einer Privatperson mehr in praesentation/ (ohne intern/, _test/), gestaltungsplan.md, README.md (grep); die sechs Vorbild-Bilder nicht mehr in fremdbilder/ und nicht im Register, aber in intern/ (ausgeschlossen); pruefen.mjs hell, dunkel und --oeffentlich 0 Fehler, Warnungen ≤ 17; Klicks 23/Sollzeit 710 s unverändert; Folie 03 Label „eigene Suche“ verdeckt keinen Text mehr; B8 passt auf die Folie; Video 09: Standardtext und Fehlertext korrekt (synthetisches WebM per Route; Video NICHT öffnen). Melde nur echte Probleme mit Belegen (Datei:Zeile, Bildschirmfoto-Pfad).` },
]

phase('Nacharbeit')
return await pipeline(
  TEILE,
  (t) => agent(t.bauer, { label: 'nacharbeit:' + t.key, phase: 'Nacharbeit', schema: BAUER_SCHEMA }),
  (bau, t) => agent(t.pruef + `\n\nKontext – Ergebnis des Bauers (nicht ungeprüft übernehmen):\n` + JSON.stringify(bau).slice(0, 12000) + `\n\n` + GEMEINSAM, { label: 'abnahme:' + t.key, phase: 'Abnahme', schema: PRUEF_SCHEMA })
    .then((pr) => ({ teil: t.key, bau, pruefung: pr }))
)
