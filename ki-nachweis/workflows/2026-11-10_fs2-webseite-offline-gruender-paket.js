export const meta = {
  name: 'fs2-webseite-offline-gruender-paket',
  description: 'Konzept-Webseite FS2 von GitHub Pages nehmen und Verweise anpassen; ZIP der Konzept-Webseite für den HOLY-Gründer unabhängig prüfen (parallel)',
  phases: [
    { title: 'Offline und Paketprüfung', detail: 'Abschalt-Agent und Paket-Prüfer parallel' },
  ],
}

const R = `/home/user/Unternehmens-Kommunikation`
const P = `${R}/fallstudie-2-customer-journey`
const S = `/tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad`
const ZIP = `${S}/gruender/HOLY-Konzept-Webseite_Team-HOLY.zip`

const LAGE = `
LAGE (10.11.2026, Fallstudie 2 „Customer Journey“, Marke HOLY): Die Präsentation ist heute gehalten worden. Yannick (KI-Nachweis FS2 Nr. 37, wörtlich): „Nimm die Webseite runter die Präsentation ist fertig erstelle noch eine HTML Webseite zum runterladen für den holygründer“.
Auslegung (von Claude festgelegt): (1) Nur die öffentliche Konzept-Webseite ${P}/konzept-website/ (studentischer HOLY-Shop im Konzept, auf GitHub Pages unter https://yannickoderso.github.io/Unternehmens-Kommunikation/fallstudie-2-customer-journey/konzept-website/) geht offline. Die Präsentationen FS1 und FS2, die Startseite und der Werbespot bleiben online – der Link zur FS1-Präsentation ist schon mit der Abgabe verschickt. GitHub Pages veröffentlicht den ganzen Branch master ohne Build (.nojekyll), deshalb heißt „offline“: Ordner aus master entfernen. Letzter Commit mit der Webseite: cb4a89d (in der Git-Historie bleibt sie sichtbar). (2) Für den Gründer hat Claude ein ZIP gebaut: ${ZIP} (Ordner HOLY-Konzept-Webseite/ mit den 7 HTML-Seiten, koffein-check.txt, assets/, bilder/, fremdbilder/, schriften/ und LIESMICH.txt; ohne werkzeuge/, _vorschau/, intern/, README.md). Es geht als Datei an die Gruppe, nicht ins Repository.

FESTE REGELN: keine neuen Fakten erfinden; Quellen nennen (Datei/Abschnitt). Keine Namen von KI-Modellen in Dateien. Nicht committen, nicht pushen, kein git reset/checkout/stash/rebase. Nichts unter /root/.claude/uploads lesen. Die Videobotschaft des Gründers (praesentation/video/) nicht ansehen, anhören oder transkribieren. Deutsch, kurze klare Sätze.`

const AB = `${LAGE}

DEIN AUFTRAG (Abschalt-Agent, ändert das Repository ${R}, ohne Commit):
1. Entferne alle versionierten Dateien der Konzept-Webseite: \`git -C ${R} rm -r -q fallstudie-2-customer-journey/konzept-website\`. Den per .gitignore ausgeschlossenen Unterordner intern/ NICHT anfassen (er liegt nur lokal).
2. Kein öffentlich ausgelieferter Inhalt darf danach ins Leere verlinken. Passe an:
   - ${R}/index.html (Startseite): In der Karte „Fallstudie 2“ den Knopf zur Konzept-Webseite entfernen; einen kurzen Satz ergänzen, dass die Konzept-Webseite seit 10.11.2026 nach dem Vortrag nicht mehr online ist (Bildschirmfotos auf Folie 08). Die Karte „Unterlagen Fallstudie 2“ prüfen.
   - ${P}/praesentation/index.html Folie 08: Den Knopf „Live-Demo ↗“ (a.e8-live) entfernen; der Knopf „Spot ansehen ▶“ bleibt und muss weiter funktionieren und gut stehen (CSS .e8-knoepfe in css/folien/ prüfen). Absätze mit data-schritt (Sprechtext) NICHT ändern – das Redeskript zitiert sie wörtlich (Prüfung: \`python3 -I ${P}/werkzeuge-redeskript/wortlaut-pruefen.py\` muss 0 Abweichungen melden). In den nicht gesprochenen Notizen und im Kasten-Kommentar FOLIE 08 knapp vermerken: Live-Demo entfällt seit 10.11.2026, Konzept-Webseite offline (letzter Stand in der Git-Historie, Commit cb4a89d).
   - ${P}/praesentation/werkzeuge/pruefen.mjs: falls es den Live-Demo-Link oder ../konzept-website prüft, so anpassen, dass es den neuen Stand korrekt prüft (kein Link mehr in die gelöschte Webseite).
   - Doku knapp nachziehen (nur Ergänzungen mit Datum 10.11.2026, ältere Stände nicht umschreiben): ${P}/README.md (Zeile konzept-website), ${P}/praesentation/LIESMICH.md (§1 Starten u. a. „Für die Live-Demo …“, §5), ${P}/praesentation/AUTOREN.md (neuer kurzer Abschnitt am Ende), ${P}/gestaltungsplan.md (kurzer Vermerk bei den Abweichungen), ${P}/werbevideo/README.md (die Render-Werkzeuge brauchen die Konzept-Webseite aus der Git-Historie, falls der Spot neu gebaut werden soll), ${R}/README.md falls es die Webseite nennt. Die Workflows unter ${R}/ki-nachweis/workflows/ und den KI-Nachweis NICHT ändern (Geschichte; den Nachweis schreibt Claude).
3. Prüfe: \`grep -rn "konzept-website" ${R} --include=*.html --include=*.js --include=*.css --include=*.mjs\` ohne _test/, intern/, ki-nachweis/workflows/ – jeder verbleibende Treffer in ausgelieferten Dateien muss ein Kommentar oder Text ohne Link sein; liste alle. Prüfe alle href/src der Startseite ${R}/index.html auf existierende Ziele (Skript).
4. Prüfläufe Präsentation: \`cd ${P}/praesentation && PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core node werkzeuge/pruefen.mjs index.html --ausgabe _test/d15-hell --schritte\` und mit \`--oeffentlich --schritte --druck _test/d15-oeff/notfall.pdf --ausgabe _test/d15-oeff\`. Erwartung 0 Fehler (Stand vorher: 0 Fehler, 16 Warnungen). Sieh dir f08_s2 in beiden Läufen an (Read-Tool auf das PNG) – Spot-Knopf sitzt sauber, kein Live-Demo-Knopf.
5. Startseite im Browser ansehen (Playwright, 1280 und 390 px Breite, Bildschirmfoto nach ${S}/d15/) und selbst prüfen.
Gib zurück: geänderte_dateien (je Datei 1–2 Sätze), verbleibende_treffer, pruefstand (Zahlen), offene_punkte.`

const PK = `${LAGE}

DEIN AUFTRAG (Paket-Prüfer, NUR LESEN – du änderst nichts im Repository und nichts am ZIP; eigene Ausgaben nur in ${S}/d15-paket/): Prüfe das ZIP ${ZIP} so, wie der Gründer es bekommt.
1. Entpacke es in einen neuen, leeren Ordner ${S}/d15-paket/entpackt/. Liste den Inhalt; nichts Internes (werkzeuge, _vorschau, intern, README, _test, .git, absolute Pfade wie /home/ oder /tmp/ in Dateien).
2. Öffne mit Playwright (\`require('/opt/node-tools/node_modules/playwright-core')\` oder \`require('playwright')\`, Chromium startet ohne Optionen) jede der 7 Seiten über file:// bei 390 × 844 und 1280 × 800. Blockiere alle Anfragen außer file:// und data: und protokolliere jede blockierte Anfrage (Erwartung: keine). Prüfe: keine Konsolenfehler; jedes <img> geladen (naturalWidth > 0); Schriften geladen (document.fonts); der Hinweisbalken mit exakt „Studentisches Konzept der Gruppe (HS Kaiserslautern) – keine Website der HOLY Softdrinks GmbH · keine Bestellung möglich“ ist sichtbar; alle internen Links zeigen auf vorhandene Dateien; die Strecke index → produkt → warenkorb → danke → squad sowie koffein-check und haendler ist durchklickbar (echte Klicks); „Präsentationsmodus: Anmerkungen einblenden“ schaltet die Anmerkungen ein und wieder aus; koffein-check.txt öffnet.
3. Bildschirmfotos nach ${S}/d15-paket/fotos/ und mindestens Start, Produkt, Warenkorb, Squad (390 px) und Start (1280 px) mit dem Read-Tool selbst ansehen: alles sauber, keine fehlenden Bilder.
4. Prüfe LIESMICH.txt Satz für Satz gegen die Seiten: Dateinamen, Beschriftung des Anmerkungs-Links, „Platzhalter/Beispielwerte“ (Fuß der Seiten), Herkunft der Bilder (fremdbilder/register.js, Feld quelle: alles von de.holy.com bzw. dem HOLY-Shopify-CDN, nur web-haendler-regal von der Lebensmittel Zeitung?), Stand 30.10.2026. Ist die Öffnen-Anleitung für Windows und Mac richtig (Doppelklick auf index.html)? Ehrliche Einschätzung aus Modellwissen, ob es auf Safari/iOS-Dateivorschau Einschränkungen gibt.
5. Inhalt für den Empfänger (Gründer von HOLY): Gibt es Stellen, die gegenüber dem Gründer heikel oder unpassend wären (z. B. interne Prüfvermerke, Hinweise auf „keine Genehmigung der Rechteinhaber“, Namen privater Personen, Modellnamen)? Nur benennen, mit Fundstelle; nichts ändern.
Gib zurück: befunde (je id, schwere hoch/mittel/niedrig, beschreibung, beleg, vorschlag), pruefstand (was geprüft, Zahlen), fazit.`

phase('Offline und Paketprüfung')
const [ab, pk] = await parallel([
  () => agent(AB, { label: 'abschalten', phase: 'Offline und Paketprüfung', schema: {
    type: 'object',
    properties: {
      geaenderte_dateien: { type: 'array', items: { type: 'object', properties: { datei: { type: 'string' }, aenderung: { type: 'string' } }, required: ['datei', 'aenderung'] } },
      verbleibende_treffer: { type: 'string' }, pruefstand: { type: 'string' }, offene_punkte: { type: 'string' },
    },
    required: ['geaenderte_dateien', 'verbleibende_treffer', 'pruefstand', 'offene_punkte'],
  } }),
  () => agent(PK, { label: 'paket-pruefung', phase: 'Offline und Paketprüfung', schema: {
    type: 'object',
    properties: {
      befunde: { type: 'array', items: { type: 'object', properties: {
        id: { type: 'string' }, schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
        beschreibung: { type: 'string' }, beleg: { type: 'string' }, vorschlag: { type: 'string' } },
        required: ['id', 'schwere', 'beschreibung', 'beleg', 'vorschlag'] } },
      pruefstand: { type: 'string' }, fazit: { type: 'string' },
    },
    required: ['befunde', 'pruefstand', 'fazit'],
  } }),
])
return { abschalten: ab, paket: pk }
