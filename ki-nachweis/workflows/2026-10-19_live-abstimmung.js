export const meta = {
  name: 'live-abstimmung',
  description: 'Eigene Live-Abstimmung für Folie 08: Abstimmseite fürs Handy, Google-Apps-Script mit Anleitung, Live-Anbindung der Folie, Test mit Attrappe, Prüfung',
  phases: [
    { title: 'Bauen', detail: 'Apps Script + Anleitung, Abstimmseite, Anbindung in Folie 08 (parallel, getrennte Dateien)' },
    { title: 'Testen', detail: 'lokale Attrappe des Servers, Ende-zu-Ende-Test mit Handy- und Beamer-Ansicht' },
    { title: 'Prüfen', detail: 'Funktion und Robustheit; Darstellung und Bedienung' },
    { title: 'Nacharbeit', detail: 'Befunde einarbeiten, Dokumentation, Exporte' },
  ],
}

const GEMEINSAM = `
Kontext: Web-Präsentation einer studentischen Gruppenarbeit (Fallstudie 1, Marke HOLY) in /home/user/Unternehmens-Kommunikation/fallstudie-1-brand-persona/praesentation (index.html, marke.js, js/deck.js, js/komponenten.js, css/, werkzeuge/pruefen.mjs, LIESMICH.md, AUTOREN.md). Veröffentlicht über GitHub Pages: https://yannickoderso.github.io/Unternehmens-Kommunikation/fallstudie-1-brand-persona/praesentation/ . Heute ist ${args.datum}. Präsentation Mo 26.10.2026 im Hörsaal (ca. 20–40 Personen, Handys mit mobilem Internet; der Präsentationsrechner hat Internet, Plan B ohne Internet muss bleiben).
Lies zuerst AUTOREN.md (Aufbau, Konventionen, Abschnitt zu Bausteinen und Prüfwerkzeug), LIESMICH.md Abschnitt 6 (Live-Umfrage), marke.js Abschnitt 5 (umfragen.tier) und in js/komponenten.js den Baustein „3. LIVE-UMFRAGE“ (umfrageBauen, umfrageLaden, umfrageSpeichern, umfrageZeichnen, umfrageAendern; Deck.kanal für das Referentenfenster).
ZIEL: Yannick hat sich für eine EIGENE Live-Abstimmung entschieden: Das Publikum scannt den QR-Code auf Folie 08, stimmt auf einer Abstimmseite im HOLY-Design ab („Wenn HOLY ein Tier wäre – welches?“), die Stimmen landen über ein Google-Apps-Script (Web-App in Yannicks Google-Konto) in einer Google-Tabelle, und Folie 08 holt die Zahlen alle 2 Sekunden und zeigt die Balken live im eigenen Design. Plan B (Werte eintippen, Zählmodus per Handzeichen) bleibt voll erhalten. Tiere (Entscheidung Yannick): Adler, Löwe, Waschbär, Fuchs, Schwan (in dieser Reihenfolge; „Waschbär“ = unsere Analyse, „Adler“ = Selbstbild/Maskottchen „Raptor“).
SCHNITTSTELLE (verbindlich für alle Teile):
- Basis: die Web-App-URL https://script.google.com/macros/s/<ID>/exec (in marke.js: umfragen.tier.liveQuelle; leer = Live-Abstimmung aus).
- Nur GET-Anfragen, Antwort als JSONP, wenn ein Parameter callback gesetzt ist (callback muss /^[A-Za-z_$][\\w$.]{0,63}$/ erfüllen, sonst Fehler), sonst als JSON. Grund: JSONP per <script> funktioniert unabhängig von CORS und den Weiterleitungen von Apps Script.
- Abstimmen: ?aktion=stimme&umfrage=tier&runde=<runde>&option=<0..anzahl-1>&anzahl=<Zahl der Optionen>&geraet=<zufällige ID>&callback=f → f({"ok":true}). Pro (runde, umfrage, geraet) zählt nur die LETZTE Stimme (Umentscheiden erlaubt, Doppelzählung nicht).
- Stand: ?aktion=stand&umfrage=tier&runde=<runde>&anzahl=<n>&callback=f → f({"ok":true,"werte":[…n Zahlen…],"n":<Summe>,"zeit":"<ISO>"}).
- Fehler: f({"ok":false,"fehler":"<kurzer deutscher Text>"}).
- Prüfung der Eingaben: umfrage und runde nur [A-Za-z0-9_-], höchstens 40 Zeichen; geraet nur [A-Za-z0-9_-], 8–64 Zeichen; option ganze Zahl 0 ≤ option < anzahl ≤ 9.
- Tabelle (Blatt „Stimmen“): Spalten Zeit | Runde | Umfrage | Option | Geraet. Keine personenbezogenen Daten (keine IP, kein Name, nur zufällige Geräte-ID aus dem Browser).
- runde: in marke.js umfragen.tier.runde (z. B. 'probe' für Tests und Generalprobe, 'vortrag-2026-10-26' für den Vortrag). So startet der Vortrag ohne Probestimmen, ohne dass ein geheimer Schlüssel im öffentlichen Repository stehen muss.
Feste Regeln: Keine externen Bibliotheken oder Dienste außer Google Apps Script. Keine Daten aus ki-nachweis/ ändern, kein git commit. Nichts an den sichtbaren INHALTEN der Folien ändern (Texte, Daten von Bündel A/B/C) außer dem Umfrage-Baustein und marke.js umfragen.tier. Deutsch, kurze Sätze, Stil der vorhandenen Dateien. Keine Modellbezeichnungen (Namen von KI-Modellen) in Dateien.
`
const BERICHT = {
  type: 'object',
  properties: {
    teil: { type: 'string' },
    dateien: { type: 'array', items: { type: 'object', properties: { datei: { type: 'string' }, was: { type: 'string' } }, required: ['datei', 'was'] } },
    getestet: { type: 'string' },
    offen: { type: 'array', items: { type: 'string' } },
  },
  required: ['teil', 'dateien', 'getestet', 'offen'],
}

const TEILE = [
  { key: 'skript', prompt: `TEIL A – SERVER (nur neue Dateien in praesentation/live-abstimmung/):
1. apps-script.gs: Google-Apps-Script (V8) für eine an eine Google-Tabelle gebundene Web-App, genau nach der SCHNITTSTELLE. doGet(e) mit aktion=stimme und aktion=stand; LockService beim Schreiben; Blatt „Stimmen“ anlegen, falls es fehlt (mit Kopfzeile). Stand: alle Zeilen der runde/umfrage lesen, je Gerät nur die letzte Stimme zählen. Kommentare auf Deutsch. Keine Bibliotheken.
2. Eine Prüfhilfe für den Quelltext: Prüfe apps-script.gs mit node (z. B. Kopie als .js mit Attrappen für SpreadsheetApp, LockService, ContentService) auf Syntax und Logik: Stimmen zählen, Umentscheiden, falsche Eingaben, JSONP-Ausgabe. Die Attrappen-Testdatei darf unter praesentation/_test/ liegen (nicht eingecheckt) oder als werkzeuge/live-abstimmung-test.mjs, wenn sie dauerhaft nützlich ist.
3. ANLEITUNG.md (Deutsch, Schritt für Schritt für Yannick, ohne Vorwissen, ca. 10 Minuten): neue Google-Tabelle anlegen (Name-Vorschlag „HOLY Live-Abstimmung“), Erweiterungen → Apps Script, Code einfügen, speichern, Bereitstellen → Neue Bereitstellung → Typ Web-App, „Ausführen als: Ich“, „Zugriff: Jeder“ (erklären, warum: das Publikum hat kein Google-Konto; die Web-App gibt nur Stimmenzahlen heraus), Berechtigungen bestätigen (Warnung „Google hat diese App nicht überprüft“ erklären), URL kopieren, in marke.js umfragen.tier.liveQuelle eintragen (oder Claude schicken), Test mit dem Handy, vor dem Vortrag runde auf 'vortrag-2026-10-26' setzen, nach dem Vortrag Bereitstellung archivieren und Tabelle löschen oder behalten (Datenschutz). Wichtige Hinweise: Bei Änderungen am Skript „Bereitstellungen verwalten → Neue Version“, sonst bleibt die alte aktiv. Kontingente von Apps Script für diese Größenordnung unkritisch (nur allgemein formulieren, keine erfundenen Zahlen).` },
  { key: 'seite', prompt: `TEIL B – ABSTIMMSEITE (neue Datei praesentation/abstimmen.html, eigene CSS/JS darin oder unter css/abstimmen.css und js/abstimmen.js):
- Wird über den QR-Code auf Folie 08 aufgerufen: https://yannickoderso.github.io/Unternehmens-Kommunikation/fallstudie-1-brand-persona/praesentation/abstimmen.html?u=tier . Liest marke.js (gleicher Ordner) für Markenname, Farben, Logo, umfragen[u].frage, optionen, liveQuelle, runde.
- Fürs Handy gebaut (ab 320 px Breite, große Tippflächen ≥ 56 px, eine Spalte), HOLY-Design aus marke.js (Gelb #FFD007, Schwarz #1D1D1B) und Schriften aus dem Ordner schriften/ der Präsentation; hell und dunkel (prefers-color-scheme). Oben kleines HOLY-Logo wie in der Präsentation (Quelle/Hinweis wie dort), Frage groß, darunter die fünf Tiere als Knöpfe. Wenn es in der Präsentation schon Tier-Icons gibt (z. B. in js/deck.js oder js/folien/08-analogien.js: Waschbär, Adler, Löwe, Schwan), dieselben verwenden; für fehlende (z. B. Fuchs) ein Icon im selben Linienstil zeichnen oder ohne Icon.
- Ablauf: Tippen → Stimme senden (JSONP, Schnittstelle oben; Geräte-ID zufällig in localStorage, Zugriff in try/catch) → Bestätigung „Danke! Deine Stimme: Waschbär“ mit Möglichkeit „Doch anders entscheiden“ (zählt laut Server nur die letzte Stimme). Bei Fehler/kein Netz: verständliche Meldung und „Nochmal versuchen“. Wenn liveQuelle in marke.js leer ist: freundlicher Hinweis „Die Abstimmung ist noch nicht freigeschaltet“ statt Knöpfen-Fehler.
- Unten: „anonym · ohne Anmeldung · keine Cookies“ und ein Satz, dass nur das gewählte Tier und eine zufällige Geräte-ID gespeichert werden; Hinweis „Studentische Fallstudie, keine Verbindung zur HOLY Softdrinks GmbH“.
- Barrierefreiheit: echte <button>, Fokus sichtbar, aria-live für Bestätigung, Kontrast ≥ 4,5:1.
- Teste mit Playwright (PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core, Chromium unter /opt/pw-browsers) in 390×844 und 320×640, hell und dunkel, mit einer lokalen Attrappe der Schnittstelle (einfacher node-http-Server auf localhost, der JSONP beantwortet; für den Test liveQuelle per URL-Parameter ?quelle=… überschreibbar machen, aber NUR wenn die Seite von localhost oder file:// läuft). Screenshots nach praesentation/_test/abstimmen/ und selbst ansehen.` },
  { key: 'folie', prompt: `Hinweis: Ein früherer, am Nutzungslimit abgebrochener Lauf dieses Teils hat js/komponenten.js, css/komponenten.css und marke.js schon teilweise geändert (git diff gegen HEAD). Prüfe diese Teiländerungen, übernimm, was stimmt, und vervollständige den Rest, ohne doppelt einzufügen. Teil A und B sind fertig (live-abstimmung/apps-script.gs, ANLEITUNG.md, werkzeuge/live-abstimmung-test.mjs mit --server PORT als lokale Attrappe mit dem echten Skript, abstimmen.html, js/abstimmen.js, css/abstimmen.css) – lies sie für Begriffe und Schnittstelle.
TEIL C – ANBINDUNG IN DER PRÄSENTATION (js/komponenten.js Baustein Live-Umfrage, marke.js umfragen.tier, css/komponenten.css falls nötig, LIESMICH.md Abschnitt 6, AUTOREN.md knapp):
- marke.js umfragen.tier: optionen ['Adler', 'Löwe', 'Waschbär', 'Fuchs', 'Schwan']; neue Felder liveQuelle: '' (Web-App-URL; leer = aus) und runde: 'probe' mit Erklärung im Kommentarblock; link: 'https://yannickoderso.github.io/Unternehmens-Kommunikation/fallstudie-1-brand-persona/praesentation/abstimmen.html?u=tier'; kurzLink sinnvoll (z. B. leer lassen, wenn zu lang; der QR-Code reicht – entscheide nach Platz). beispielwerte an fünf Optionen anpassen (Beispiel bleibt gekennzeichnet). Den Kommentar zu Mentimeter/Particify anpassen (eigene Abstimmung ist der Weg, Werkzeuge bleiben als Alternative).
- komponenten.js: Wenn liveQuelle gesetzt ist, holt der Baustein per JSONP (aktion=stand, runde, anzahl) alle 2 s den Stand, solange die Folie mit der Umfrage aktiv ist (und einmal sofort beim Betreten); im Referentenfenster nicht doppelt abfragen, sondern über den vorhandenen Deck.kanal synchronisieren (prüfe, wie umfrageSpeichern/Deck.kanal das heute machen). Neue Werte ersetzen Beispielwerte (beispiel=false) und werden mit der vorhandenen Animation gezeichnet; Prozente rechnet weiter die Präsentation. Zeitüberschreitung 4 s je Anfrage, keine überlappenden Anfragen, Skript-Tags aufräumen.
- Zustand sichtbar machen über die vorhandene Pille „Live“ im Kopf der Ergebnisse: ohne liveQuelle wie bisher; verbunden = Live (pulsierender Punkt); keine Verbindung = gedämpft „offline“ mit Tooltip „Werte eintippen oder Zählmodus“. Wird von Hand eingetragen (Werte, Klick, Ziffern) oder „Zurücksetzen“ geklickt, pausiert die Live-Abfrage (Pille „Live pausiert“, Klick auf die Pille setzt sie fort) – damit Hand und Server sich nicht überschreiben.
- Ohne liveQuelle darf sich NICHTS am bisherigen Verhalten ändern, und pruefen.mjs darf keine externen Anfragen sehen (es meldet externe Anfragen als Fehler). Mit liveQuelle zeigt der QR-Code auf link.
- LIESMICH.md Abschnitt 6 neu schreiben: Weg A eigene Live-Abstimmung (Einrichtung siehe live-abstimmung/ANLEITUNG.md, runde vor dem Vortrag umstellen, Test aus der letzten Reihe, Pille beobachten), Weg B Werkzeug (Particify/Mentimeter) + Werte eintippen, Plan C Zählmodus. Technik-Checkliste (Abschnitt 12) um die Punkte ergänzen. AUTOREN.md: Schnittstelle und neue Felder knapp dokumentieren.
- Teste ohne liveQuelle (pruefen.mjs --nur f08 --schritte, 0 Fehler) und mit einer lokalen JSONP-Attrappe (Werte ändern sich → Balken bewegen sich; Attrappe aus → Pille „offline“, Werte bleiben stehen; Handeingabe → „Live pausiert“).` },
]

phase('Bauen')
const bau = (await parallel(TEILE.map(t => () =>
  agent(`${GEMEINSAM}\n${t.prompt}\nDie anderen beiden Teile entstehen gleichzeitig (Server-Skript in live-abstimmung/, Abstimmseite abstimmen.html, Anbindung in komponenten.js/marke.js); halte dich exakt an die SCHNITTSTELLE und ändere keine Dateien der anderen Teile.`,
    { label: `bau:${t.key}`, phase: 'Bauen', schema: BERICHT })))).filter(Boolean)
log(`${bau.length} von 3 Teilen gebaut`)

phase('Testen')
const test = await agent(`${GEMEINSAM}
Auftrag ENDE-ZU-ENDE-TEST. Bericht der drei Bauteile (JSON):
${JSON.stringify(bau, null, 1)}
1. Nutze als lokale Attrappe „node werkzeuge/live-abstimmung-test.mjs --server PORT“ (läuft mit dem echten apps-script.gs). Baue nur dann eine eigene praesentation/werkzeuge/live-abstimmung-attrappe.mjs, wenn dort etwas Wichtiges fehlt; sonst keine zweite Attrappe (node, ohne Abhängigkeiten): gleiche Parameter, JSONP, letzte Stimme je Gerät, Stand im Speicher, Port per Argument; mit kurzer Anleitung im Kopfkommentar (für die Generalprobe ohne Google-Konto).
2. Ende-zu-Ende mit Playwright: Attrappe starten, Präsentation (index.html#f08) mit liveQuelle auf die Attrappe (z. B. per Kopie von marke.js in _test/ oder URL-Parameter, ohne die echte marke.js dauerhaft zu ändern), drei Handy-Seiten (abstimmen.html, 390×844) stimmen nacheinander ab, eine entscheidet sich um → Folie zeigt nach ≤ 3 s die richtigen Zahlen und Prozente; Attrappe stoppen → Pille „offline“, Werte bleiben; Handeingabe → „Live pausiert“; Referentenfenster (index.html?referent, falls vorhanden) zeigt dieselben Werte. Screenshots unter praesentation/_test/live/ ansehen.
3. Prüfe apps-script.gs gegen die Attrappe: gleiche Antworten auf dieselben Anfragen (Attrappen-Harness aus Teil A nutzen).
4. pruefen.mjs index.html --schritte --optional (ohne liveQuelle): 0 Fehler, keine externen Anfragen.
Behebe kleine Fehler selbst (nur in den Dateien der drei Teile), große melde unter „offen“.`, { label: 'test:ende-zu-ende', phase: 'Testen', schema: BERICHT })

const BEFUNDE = {
  type: 'object',
  properties: {
    pruefer: { type: 'string' },
    befunde: { type: 'array', items: { type: 'object', properties: {
      schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] }, stelle: { type: 'string' }, problem: { type: 'string' }, beleg: { type: 'string' }, vorschlag: { type: 'string' } },
      required: ['schwere', 'stelle', 'problem', 'beleg', 'vorschlag'] } },
    gesamturteil: { type: 'string' },
  },
  required: ['pruefer', 'befunde', 'gesamturteil'],
}
const STAND = JSON.stringify({ bau, test }, null, 1)
const PRUEFER = [
  { key: 'funktion', prompt: `Prüfer FUNKTION, ROBUSTHEIT, DATENSCHUTZ (adversarial): Lies apps-script.gs, abstimmen.html (+ JS/CSS), die Änderungen in komponenten.js und marke.js, ANLEITUNG.md und die Attrappe. Suche echte Fehler: Schnittstelle uneinheitlich, JSONP-Callback-Injektion, fehlende Eingabeprüfung, Doppelzählung, Wettlauf beim Schreiben, überlappende oder hängende Anfragen, Speicherlecks durch Skript-Tags, Verhalten bei langsamem Netz, Seite neu geladen, zwei Tabs, Referentenfenster, Rückkehr zur Folie, Umschalten von runde, leere liveQuelle, Plan B (Zählmodus) noch voll funktionsfähig. Datenschutz: keine personenbezogenen Daten, Hinweise korrekt, „Zugriff: Jeder“ verständlich begründet. Führe selbst Tests mit der Attrappe aus (Playwright wie in AUTOREN.md), schreibe nur unter praesentation/_test/.` },
  { key: 'darstellung', prompt: `Prüfer DARSTELLUNG UND BEDIENUNG (adversarial): Abstimmseite in 320×640, 390×844, 430×932, hell und dunkel; Folie 08 in den Themen editorial, bento, keynote, hell und dunkel, mit Beispielwerten, mit Live-Werten (Attrappe), offline und pausiert; QR-Code lesbar groß, Kontrast, Lesbarkeit vom Hörsaal aus, keine Überläufe, Fokus, Tastatur. pruefen.mjs --schritte --optional muss 0 Fehler haben. Sieh dir die Screenshots selbst an; schreibe nur unter praesentation/_test/. Prüfe auch, ob LIESMICH Abschnitt 6 und ANLEITUNG.md für Laien ohne Rückfragen umsetzbar sind (Schritt für Schritt nachvollziehen, so weit ohne Google-Konto möglich).` },
]

phase('Prüfen')
const pruefungen = (await parallel(PRUEFER.map(p => () =>
  agent(`${GEMEINSAM}\nNur prüfen. Stand (JSON):\n${STAND}\n\n${p.prompt}\nJeder Befund mit Beleg und konkretem Vorschlag. Erfinde keine Befunde.`,
    { label: `pruefen:${p.key}`, phase: 'Prüfen', schema: BEFUNDE })))).filter(Boolean)
const alle = pruefungen.flatMap(p => p.befunde)
log(`${alle.length} Befunde: ${alle.filter(b => b.schwere === 'hoch').length} hoch, ${alle.filter(b => b.schwere === 'mittel').length} mittel`)

phase('Nacharbeit')
const nacharbeit = await agent(`${GEMEINSAM}
Auftrag NACHARBEIT: Arbeite alle hohen und mittleren Befunde ein, niedrige, wenn sie klar und klein sind. Danach: Ende-zu-Ende-Test mit der Attrappe wiederholen, pruefen.mjs index.html --schritte --optional (0 Fehler), Exporte nach AUTOREN.md Abschnitt „Exporte erzeugen“ erneuern (PDF ohne 01b, Folienbilder, Übersicht mit --stand 19.10.2026). AUTOREN.md (Änderungstabelle) und LIESMICH.md knapp aktualisieren. Melde, was du umgesetzt hast, was nicht (mit Grund), Testergebnisse und was Yannick jetzt tun muss (Einrichtung laut ANLEITUNG.md, URL eintragen bzw. schicken).
Befunde (JSON):
${JSON.stringify(pruefungen, null, 1)}`, { label: 'nacharbeit', phase: 'Nacharbeit', schema: {
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
