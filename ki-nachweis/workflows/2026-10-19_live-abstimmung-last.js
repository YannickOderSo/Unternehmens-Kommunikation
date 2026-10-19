export const meta = {
  name: 'live-abstimmung-last',
  description: 'Live-Abstimmung lastfest machen: Server ohne Wartesperre (appendRow), automatische Wiederholung auf dem Handy, Prüfwerkzeug mit eingetragener Web-App, Tests, Prüfung',
  phases: [
    { title: 'Bauen', detail: 'Server + Testwerkzeug + Anleitung; Abstimmseite; Prüfwerkzeug (parallel, getrennte Dateien)' },
    { title: 'Testen', detail: 'Attrappe mit Störungen, Lasttest lokal, Ende-zu-Ende, Gesamtprüfung' },
    { title: 'Prüfen', detail: 'Nebenläufigkeit und Apps-Script-Verhalten; Prüfwerkzeug, Exporte und Anleitung' },
    { title: 'Nacharbeit', detail: 'Befunde einarbeiten, LIESMICH/AUTOREN, Exporte' },
  ],
}

const GEMEINSAM = `
Kontext: Web-Präsentation einer studentischen Gruppenarbeit (Fallstudie 1, Marke HOLY) in /home/user/Unternehmens-Kommunikation/fallstudie-1-brand-persona/praesentation. Folie 08 hat eine EIGENE Live-Abstimmung („Wenn HOLY ein Tier wäre – welches?“, fünf Tiere): abstimmen.html + js/abstimmen.js (Handy), live-abstimmung/apps-script.gs (Google-Apps-Script-Web-App in Yannicks privatem Google-Konto, gebunden an eine Google-Tabelle, Blatt „Stimmen“), Anbindung in js/komponenten.js (Abschnitt 3a, Folie holt den Stand alle 2 s), Testwerkzeug werkzeuge/live-abstimmung-test.mjs (32 Prüfungen, --server PORT = lokale Attrappe mit dem echten Skript, --lasttest URL), Anleitung live-abstimmung/ANLEITUNG.md. Lies zuerst den Kopfkommentar von apps-script.gs (verbindliche SCHNITTSTELLE: nur GET, JSONP, aktion=stimme/stand, je Runde/Umfrage/Gerät zählt die letzte Stimme), AUTOREN.md Abschnitt 6c und 16 und LIESMICH.md Abschnitt 6.

STAND ${args.datum}: Yannick hat die Web-App eingerichtet; die Adresse steht in marke.js → umfragen.tier.liveQuelle (Runde 'probe'). Ein echter Ende-zu-Ende-Test über GitHub Pages und Google lief: Stimme bis „Danke“ 2,9 s, Folie zeigte n = 1. Antwortzeit der Stand-Abfrage von außen 1,4–3,0 s.
PROBLEM: Der Lasttest gegen die echte Web-App (werkzeuge/live-abstimmung-test.mjs --lasttest, 40 Stimmen gleichzeitig in einer eigenen Runde „lasttest-…“) ist NICHT bestanden: angenommen 19 von 40, abgelehnt 21 mit „Gerade kommen sehr viele Stimmen auf einmal – bitte gleich noch einmal tippen.“, Antwortzeit Median 11,2 s, längste 14,3 s. Ursache: stimmeSpeichern_ hält LockService.getScriptLock() (tryLock 10 s) über blattHolen_ (getActiveSpreadsheet, getSheetByName, getLastRow), getLastRow, getMaxRows, getRange, setNumberFormats, setValues und SpreadsheetApp.flush – rund 0,5 s je Stimme, alles nacheinander. Im Hörsaal (20–60 Personen, Aufforderung „jetzt abstimmen“) kommen Stimmen stoßweise.
ZIEL: 40 Stimmen, die praktisch gleichzeitig ankommen, werden ALLE gezählt; jedes Handy sieht spätestens nach ca. 15 s „Danke“ (die meisten nach wenigen Sekunden), ohne selbst nochmal tippen zu müssen. Schnittstelle, Zählregel, Datenschutz (keine Namen, keine IP, nur zufällige Geräte-ID) und das Verhalten der Folie bleiben gleich.

Feste Regeln: Die echte Web-App-Adresse aus marke.js NICHT für schreibende Anfragen (aktion=stimme, --lasttest) benutzen – sie schreibt in Yannicks Tabelle; lesende Stand-Abfragen höchstens vereinzelt. Alle Tests gegen die lokale Attrappe (node werkzeuge/live-abstimmung-test.mjs --server PORT, ggf. mit neuen Optionen) und Playwright (PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core, Chromium unter /opt/pw-browsers/chromium). Nichts in ki-nachweis/ ändern, kein git commit. Sichtbare Inhalte der Folien (Texte, Daten von Bündel A/B/C) nicht ändern. marke.js nicht ändern (liveQuelle und runde bleiben). Keine externen Bibliotheken. Deutsch, kurze Sätze, Stil der vorhandenen Dateien. Keine Modellbezeichnungen (Namen von KI-Modellen) in Dateien. Wissen über Google Apps Script (appendRow, LockService, Kontingente, Weiterleitungen) mit Quelle angeben: Websuche (URL, Abrufdatum) oder ausdrücklich „Modellwissen, nicht geprüft“. Testausgaben nur unter praesentation/_test/ (nicht eingecheckt), Hilfsskripte im Scratchpad.
`

const BERICHT = {
  type: 'object',
  properties: {
    teil: { type: 'string' },
    dateien: { type: 'array', items: { type: 'object', properties: { datei: { type: 'string' }, was: { type: 'string' } }, required: ['datei', 'was'] } },
    getestet: { type: 'string' },
    quellen: { type: 'array', items: { type: 'string' } },
    doku: { type: 'string', description: 'was in LIESMICH.md/AUTOREN.md nachzutragen ist (nicht selbst eintragen)' },
    offen: { type: 'array', items: { type: 'string' } },
  },
  required: ['teil', 'dateien', 'getestet', 'quellen', 'doku', 'offen'],
}

const TEILE = [
  { key: 'server', prompt: `TEIL A – SERVER, TESTWERKZEUG, ANLEITUNG (nur diese Dateien: live-abstimmung/apps-script.gs, werkzeuge/live-abstimmung-test.mjs, live-abstimmung/ANLEITUNG.md).
1. apps-script.gs: Stimmen ohne lange Wartesperre speichern. Vorgesehen: Sheet.appendRow([Zeit, Runde, Umfrage, Option, Geraet]) OHNE LockService – laut Google-Dokumentation ist appendRow atomar (bitte per Websuche in der offiziellen Apps-Script-Referenz nachprüfen und mit URL zitieren; falls nicht belegbar: bessere, belegbare Lösung wählen und begründen). Schneller Weg: nur getActiveSpreadsheet + getSheetByName + appendRow; das Blatt nur dann anlegen (kurz unter Sperre), wenn es fehlt. Schutz gegen Umwandlung (Runde „2026-10-26“ → Datum, Geräte-ID „12345678“ → Zahl): Spalten Runde, Umfrage und Geraet einmalig als Text '@' formatieren (in einrichten() und beim Anlegen des Blatts, ganze Spalten), dazu genug leere Zeilen vorhalten (z. B. 5000), damit appendRow keine neuen, unformatierten Zeilen erzeugen muss. Ob appendRow das vorhandene Spaltenformat übernimmt, per Websuche klären; was offen bleibt, ehrlich im Kommentar und in der Anleitung nennen und einen Prüfschritt für Yannick vorsehen (z. B. einrichten() meldet die Formate; Test-Stimme mit Runde 'probe' und Kontrolle im Blatt). einrichten() bleibt mehrfach ausführbar und richtet auch ein schon vorhandenes Blatt nach (Formate, Zeilen). Kein flush nötig, wenn keine Sperre mehr; begründen. Stand-Abfrage bleibt, wie sie ist (liest alle Zeilen), es sei denn, du findest einen belegten Grund.
2. werkzeuge/live-abstimmung-test.mjs: Attrappe an das neue Verhalten anpassen – appendRow atomar; Umwandlung wie Google Sheets, außer die Zelle/Spalte hat Format '@'; Zeilen außerhalb der vorgehaltenen ohne Format. Die bisherigen 32 Prüfungen sinngemäß erhalten oder ersetzen (Sperren-Reihenfolge entfällt; dafür: kein LockService im schnellen Weg, Nebenläufigkeit: verschachtelte Ausführungen verlieren keine Stimme, einrichten() formatiert ein altes Blatt nach, Textschutz in vorgehaltenen Zeilen). Mutationstest wie bisher (mind. 5 absichtlich kaputte Kopien, z. B. getLastRow+setValues ohne Sperre, ohne Textformat, erste statt letzte Stimme) – jede muss erkannt werden. --server: neue Optionen für Störungen, damit Teil B die automatische Wiederholung testen kann: --stoerung <Anteil 0–1> (dieser Anteil der Stimmen wird zufällig mit dem bisherigen Fehlertext „Gerade kommen sehr viele Stimmen auf einmal …“ abgelehnt, ohne zu speichern) und --abbruch <Anteil> (Verbindung ohne Antwort schließen bzw. HTML-Fehlerseite wie bei einem Google-Kontingent). --lasttest: zusätzlich realistisches Verhalten des Handys nachbilden (dieselbe Wiederholungsregel wie js/abstimmen.js nach Teil B: bis zu 3 Versuche mit zufälliger Wartezeit; stimme dich über die Konstanten ab, indem du sie im Bericht nennst: Teil B nimmt 3 Versuche, Wartezeit 1,5–4 s zufällig, Zeitlimit je Versuch 15 s) und berichten: angenommen im 1. Versuch, nach Wiederholung, endgültig gescheitert; Zeit bis „Danke“ (Median, 90 %, Maximum); Stand n. BESTANDEN nur, wenn n = anzahl und kein Handy endgültig scheitert. Option --verteilt <Sekunden> (Stimmen gleichmäßig über diese Zeit verteilt statt gleichzeitig). Gegen die Attrappe testen (auch mit --verzoegerung und --stoerung).
3. ANLEITUNG.md: neuer Abschnitt „Skript aktualisieren (neue Fassung)“ in Laiensprache: Code neu einfügen (Raw-Link https://raw.githubusercontent.com/YannickOderSo/Unternehmens-Kommunikation/master/fallstudie-1-brand-persona/praesentation/live-abstimmung/apps-script.gs, Strg+A/Strg+C, im Editor Strg+A, Entf, Strg+V, Strg+S), im Auswahlfeld „einrichten“ wählen und ausführen (Protokollzeile nennen), dann Bereitstellen → Bereitstellungen verwalten → Bearbeiten (Stift) → Version „Neue Version“ → Bereitstellen; die URL bleibt gleich. Hinweis: Im Auswahlfeld steht anfangs die erste Funktion (doGet) – die nicht löschen, nur die Auswahl ändern. Lasttest-Abschnitt an das neue Ergebnisformat anpassen. Bisherige Abschnitte nur anpassen, wo das neue Verhalten es verlangt (z. B. Kontingente, Sperre).` },
  { key: 'handy', prompt: `TEIL B – ABSTIMMSEITE (nur js/abstimmen.js, bei Bedarf css/abstimmen.css und abstimmen.html):
Automatische Wiederholung, damit Handys bei Andrang nicht selbst nochmal tippen müssen. Regel: bis zu 3 Versuche insgesamt; wiederholt wird bei „Server ausgelastet“ (Antwort ok:false mit dem Text „Gerade kommen sehr viele Stimmen auf einmal …“ – besser: einen stabilen Erkennungsweg vorsehen, ohne die Schnittstelle zu brechen, z. B. Textanfang; im Bericht nennen, damit Teil A dazu passt), bei Zeitüberschreitung und bei Netz-/Ladefehlern, solange navigator.onLine nicht false ist; NICHT bei Eingabefehlern (ungültige Runde/Option usw.). Wartezeit vor jedem neuen Versuch zufällig 1,5–4 s (verteilt den Andrang), Zeitlimit je Versuch 15 s (ZEITLIMIT bisher 30 s – abwägen und begründen; der Server wartet nicht mehr auf eine Sperre). Eine Wiederholung ist unschädlich, weil je Gerät nur die letzte Stimme zählt; dieselbe Geräte-ID verwenden. Während der Wiederholung ruhige Anzeige statt Fehler, z. B. „Gerade stimmen viele ab – Ihre Stimme wird gesendet …“ (Sie-Form wie die übrige Seite, Du-Form, falls die Seite die Du-Variante hat); erst nach dem letzten Fehlversuch die bisherige Fehlermeldung mit „Nochmal versuchen“. Umentscheiden während einer laufenden Wiederholung: alte Wiederholung abbrechen, nur die neueste Wahl senden (keine veraltete Stimme darf die neuere überholen – Reihenfolge prüfen!). Barrierefreiheit (aria-live) wie bisher. Testen mit der lokalen Attrappe: abstimmen.html?u=tier&quelle=http://localhost:PORT/exec über file:// (siehe ANLEITUNG „Für die Technik“); Teil A baut parallel die Optionen --stoerung und --abbruch in werkzeuge/live-abstimmung-test.mjs – falls sie noch nicht da sind, eigene kleine Attrappe im Scratchpad (gleiche JSONP-Schnittstelle), nicht die echte Web-App. Prüfen: Erfolg im 1., 2., 3. Versuch; endgültiges Scheitern; Umentscheiden mitten in der Wiederholung; offline; Eingabefehler ohne Wiederholung; Konsole sauber; Darstellung 390×664 und 375×548 hell/dunkel.` },
  { key: 'pruefwerkzeug', prompt: `TEIL C – PRÜFWERKZEUG UND EXPORTE (nur werkzeuge/pruefen.mjs, werkzeuge/uebersicht.mjs; nichts anderes).
Seit liveQuelle in marke.js gesetzt ist, fragt Folie 08 bei jedem Prüflauf und Export die echte Web-App ab. pruefen.mjs blockiert externe Anfragen und meldet sie als Fehler („externe Anfrage blockiert“) – damit würden alle Prüfläufe und die Exporte (AUTOREN.md §15) scheitern bzw. Yannicks Web-App bei jedem Lauf belasten. Lösung: Anfragen an die in marke.js eingetragene liveQuelle (nur diese Adresse, nur aktion=stand/stimme) im Prüfwerkzeug abfangen und NICHT ins Netz lassen, sondern mit einer eingebauten JSONP-Antwort beantworten; nicht als Fehler zählen, aber im Bericht getrennt ausweisen (z. B. „liveAnfragen“: Anzahl, beantwortet von der eingebauten Attrappe). Standard: Stand mit lauter Nullen (so sieht Folie 08 zu Beginn des Vortrags aus: QR-Code, Pille „Live“, n = 0). Optionen: --live-offline (Anfragen scheitern → Pille „offline“, zum Testen), --live-werte 3,1,7,0,2 (fester Stand für Screenshots), --live-aus (marke.js-liveQuelle für den Lauf ausblenden, Folie wie ohne Live-Abstimmung). Jede andere externe Anfrage bleibt ein Fehler. Für Exporte entscheiden und begründen, welcher Zustand ins Plan-B-PDF und in die Folienbilder gehört (Vorschlag: Standard n = 0 mit QR-Code, weil das die Folie im Vortrag ist; im Bericht nennen). uebersicht.mjs entsprechend (ohne Netz). Prüfen: pruefen.mjs index.html --schritte --optional → 0 Fehler, liveAnfragen ausgewiesen, 0 externe Anfragen; --nur f08 --schritte in editorial/bento/keynote hell/dunkel; --live-offline und --live-werte; Druck-PDF (22 Seiten ohne 01b, Befehl in AUTOREN §15) und Folienbilder in _test/ erzeugen und f08 ansehen. Exporte NICHT nach export/ kopieren (macht die Nacharbeit).` },
]

phase('Bauen')
const bau = (await parallel(TEILE.map(t => () =>
  agent(GEMEINSAM + '\n' + t.prompt, { label: 'bau:' + t.key, phase: 'Bauen', schema: BERICHT })))).filter(Boolean)
log(bau.length + ' von 3 Bauteilen fertig')

phase('Testen')
const test = await agent(GEMEINSAM + `
Auftrag ENDE-ZU-ENDE-TEST der drei Bauteile (Berichte unten). Nur testen und kleine, eindeutige Fehler beheben (im Bericht nennen); größere Probleme nur melden.
1. node werkzeuge/live-abstimmung-test.mjs (alle Prüfungen) und den Mutationstest laut Teil A.
2. Lasttest gegen die lokale Attrappe: --lasttest http://localhost:PORT/exec --anzahl 40, einmal ohne Störung, einmal mit --verzoegerung 800 und --stoerung 0.5, einmal mit --abbruch 0.2, einmal --verteilt 10. Erwartung: BESTANDEN in allen Fällen; Zeiten berichten.
3. Echter Browser: drei Handy-Kontexte (390×664) über file:// mit ?quelle= an die Attrappe mit --stoerung 0.6: alle drei sehen „Danke“ ohne Tippen auf „Nochmal versuchen“; Folie 08 (index.html?quelle=…#f08) zeigt n = 3 mit richtigen Werten; Umentscheiden mitten in einer Wiederholung zählt die neueste Wahl. Attrappe stoppen → Handy zeigt nach dem letzten Versuch die Fehlermeldung, Folie „offline“.
4. pruefen.mjs index.html --schritte --optional (Standard) → 0 Fehler, keine externen Anfragen; dazu --nur f08 mit --live-offline und --live-werte.
5. Netz-Mitschnitt: Bei keinem Lauf darf eine Anfrage an script.google.com hinausgehen.
Berichte Ergebnisse mit Zahlen, Screenshots unter _test/last-e2e/.
Berichte der Bauteile:
` + JSON.stringify(bau, null, 1), { label: 'test:ende-zu-ende', phase: 'Testen', schema: BERICHT })

const BEFUNDE = {
  type: 'object',
  properties: {
    pruefer: { type: 'string' },
    befunde: { type: 'array', items: { type: 'object', properties: { schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] }, stelle: { type: 'string' }, problem: { type: 'string' }, beleg: { type: 'string' }, vorschlag: { type: 'string' } }, required: ['schwere', 'stelle', 'problem', 'beleg', 'vorschlag'] } },
    quellen: { type: 'array', items: { type: 'string' } },
  },
  required: ['pruefer', 'befunde', 'quellen'],
}
const PRUEFER = [
  { key: 'nebenlaeufigkeit', prompt: `Prüfer NEBENLÄUFIGKEIT UND APPS-SCRIPT-VERHALTEN (adversarial, nichts ändern): Geht unter gleichzeitigen Ausführungen eine Stimme verloren oder wird eine doppelt gezählt (appendRow ohne Sperre, Anlegen des Blatts unter Sperre, Stand-Abfrage während Schreibvorgängen)? Stimmen die Aussagen über appendRow (Atomarität, Übernahme des Spaltenformats, Verhalten bei vollen Zeilen) mit der offiziellen Google-Dokumentation überein – selbst per Websuche nachprüfen und zitieren. Kontingente für Web-Apps (gleichzeitige Ausführungen je Nutzer bei „Ausführen als: Ich“, Tabellen-Aufrufe): Was passiert bei 40–60 Handys, und fängt die Wiederholung auf dem Handy das ab? Wiederholungslogik in js/abstimmen.js: kann eine ältere Wahl eine neuere überholen (z. B. späte Antwort des 1. Versuchs nach dem Umentscheiden)? Werden Eingabefehler fälschlich wiederholt? Ist der Lasttest aussagekräftig (gleiche Regel wie das Handy)? Datenschutz unverändert? Mutationstest wirklich scharf? Eigene Tests mit der Attrappe erlaubt, keine Schreibzugriffe auf die echte Web-App.` },
  { key: 'werkzeug-doku', prompt: `Prüfer PRÜFWERKZEUG, EXPORTE UND ANLEITUNG (adversarial, nichts ändern): Lässt pruefen.mjs wirklich nur die eingetragene liveQuelle durch die eingebaute Attrappe laufen und meldet jede andere externe Anfrage weiter als Fehler (selbst testen, z. B. mit einer Kopie von index.html, die ein externes Bild lädt)? Geht bei Prüflauf, Druck, Folienbildern und Übersicht keine Anfrage ins Netz (Mitschnitt)? Ist der gewählte Zustand von Folie 08 im Plan-B-PDF und in den Folienbildern sinnvoll (QR-Code im PDF?) – Screenshots ansehen. Ist der neue Abschnitt „Skript aktualisieren“ in ANLEITUNG.md für einen Laien ohne Rückfrage umsetzbar (Yannick hat beim ersten Einrichten doGet im Auswahlfeld stehen lassen und fragte, wo das Blatt zu sehen ist)? Widersprechen sich ANLEITUNG, LIESMICH Abschnitt 6/12, AUTOREN 6c/15/16 und die Kommentare im Code nach den Änderungen (z. B. „Sperre“, „Wartezeit 10 s“, „30 s“)? Abstimmseite: Anzeige während der Wiederholung verständlich, keine Layoutsprünge, hell/dunkel, 375×548.` },
]
phase('Prüfen')
const pruefungen = (await parallel(PRUEFER.map(p => () =>
  agent(GEMEINSAM + '\n' + p.prompt + '\nBerichte der Bauteile und des Tests:\n' + JSON.stringify({ bau, test }, null, 1),
    { label: 'pruefen:' + p.key, phase: 'Prüfen', schema: BEFUNDE })))).filter(Boolean)

phase('Nacharbeit')
const nacharbeit = await agent(GEMEINSAM + `
Auftrag NACHARBEIT: Alle Befunde „hoch“ und „mittel“ umsetzen, „niedrig“ wo sinnvoll; was nicht umgesetzt wird, begründen. Danach:
1. Dokumentation: LIESMICH.md (Abschnitt 6 Live-Abstimmung, Checkliste 12 – neuer Punkt „Skript aktualisieren: neue Fassung einfügen, einrichten, neue Version bereitstellen, Lasttest“ für Yannick, Abschnitt 13 Dateien) und AUTOREN.md (6c, 15 Prüfwerkzeug/Exporte mit den neuen Optionen, 16 neuer Unterabschnitt „Lastfest (19.10.2026)“ mit Änderungstabelle, Testergebnissen und offenen Punkten) – knapp, Stil der Dateien. Hinweise der Bauteile im Feld „doku“ berücksichtigen.
2. Alle Tests erneut: live-abstimmung-test.mjs, Lasttest gegen die Attrappe (ohne und mit Störung), pruefen.mjs --schritte --optional (0 Fehler, 0 externe Anfragen).
3. Exporte nach AUTOREN §15 neu erzeugen und nach export/ kopieren (PDF 22 Seiten ohne 01b, 23 Folienbilder, Übersicht --stand 19.10.2026); f08 im PDF und als Bild ansehen.
4. Für Yannick eine kurze Liste: was er jetzt in Google tun muss (neue Fassung einfügen, einrichten, neue Version), und was Claude danach prüft (Lasttest gegen die echte Web-App).
Kein Commit, ki-nachweis/ nicht ändern.
Berichte:
` + JSON.stringify({ bau, test, pruefungen }, null, 1), { label: 'nacharbeit', phase: 'Nacharbeit', schema: {
  type: 'object',
  properties: {
    umgesetzt: { type: 'array', items: { type: 'string' } },
    nicht_umgesetzt: { type: 'array', items: { type: 'string' } },
    tests: { type: 'string' },
    fuer_yannick: { type: 'array', items: { type: 'string' } },
  },
  required: ['umgesetzt', 'nicht_umgesetzt', 'tests', 'fuer_yannick'],
} })

return { bau, test, pruefungen, nacharbeit }
