export const meta = {
  name: 'fs2-visualisierung-uebernahme',
  description: 'D13-Entwürfe sind in die Präsentation FS2 eingespielt: Doku nachziehen und unabhängig prüfen (parallel), danach Befunde abarbeiten',
  phases: [
    { title: 'Doku und Prüfung', detail: 'Doku-Agent und Prüf-Agent parallel' },
    { title: 'Nacharbeit', detail: 'Befunde der Prüfung umsetzen' },
  ],
}

const P = `/home/user/Unternehmens-Kommunikation/fallstudie-2-customer-journey`
const PR = `${P}/praesentation`
const S = `/tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad/d13`

const LAGE = `
LAGE (Stand 08.11.2026, Fallstudie 2 „Customer Journey“, Marke HOLY, Vortrag Di 10.11.2026):
- Yannick hat bemängelt, dass auf Folie 04 ein Kasten „Antwortseite fehlt“ wie ein fehlendes Bild aussieht, und wollte mehr Dinge optisch besser dargestellt haben.
- In Delegation D13 haben Agenten in vier Kopien Entwürfe gebaut, prüfen lassen und nachgebessert. Yannick hat ALLE übernommen (Antwort auf Rückfrage, KI-Nachweis FS2 Nr. 30) und die Linien-Symbole AUSDRÜCKLICH ERLAUBT, obwohl Gestaltungsplan 3.7 „keine Icon-Abzeichen“ sagt („Erlauben (Empfohlen)“: Symbole bleiben, Abweichung wird im Gestaltungsplan als Entscheidung vermerkt).
- Claude hat die vier Diffs bereits in ${PR} eingespielt (noch nicht committet). Die Diffs zum Nachlesen: ${S}/persona-ist.rel.diff (02/03), ${S}/journey-bruch.rel.diff (04/05, pfad.js-Option "luecke"), ${S}/soll-vorbilder.rel.diff (06/07), ${S}/fazit.rel.diff (09/01). Mit \`git -C /home/user/Unternehmens-Kommunikation diff\` siehst du den Gesamtunterschied zu HEAD.
- Kurzfassung der Änderungen:
  02: Steckbrief „Marco, 28“ mit Strich-Symbolen oben links, Symbolbild darunter; rechts die Verben des Titels (entdeckt, prüft, kauft) mit Symbolen und dünner Linie in Mittel warm; Balkenpaare (dick = Energy-Drink-Konsument:innen, dünn = Ø aller), ARD/ZDF-Gruppe getrennt; 61 % als Ring; kein „gelb = Marcos Kanal“.
  03: Kästchen je Kontaktpunkt (13 · 30 · 11, drei offene für fehlende Owned), Legende „■ = 1 Kontaktpunkt (Zählung H)“, Signalkreise statt „+/−“.
  04: Leerstelle als leere, durchgestrichene Browserseite (Inline-SVG, gestrichelter 3-px-Rahmen) mit Name „keine Antwortseite“; Zeichen „bricht“ am offenen Ende des Nebenwegs; Rückfrage-Zeile zum Help-Center in den Notizen; kein Warndreieck.
  05: Urteile als Zeichen + Wort (Dreieck „!“ = wackelt, Kreis mit Kreuz = bricht, Haken = trägt nur in der Legende); Maßstab als Zeichenlegende; Lücke mit Bruchstrichen „//“ an Ü2 (pfad.js-Option "luecke", Klassen .bruch und .bruch-grund in pfad.css).
  06: Platz 1 in Bricolage auf dem Pfad, Plätze 2/3 als Ring in Schiefer; Legende „Auswahl nach vier Kriterien“ mit vier Linien-Symbolen.
  07: Tabelle ersetzt durch Brücke je Phase: Vorbild (Logo, Branche, Mechanik) → Linien-Symbol → Station am durchgehenden „Zentraler Weg (SOLL)“ → unsere Maßnahme; Nebenweg Handel mit Pampers → QR-Brücke; verzögerte Einblendungen auf Klick 1.
  09: Kennzahlen als Messpunkte Ü1–Ü4 (Ring 64 px) direkt am Pfad, Bildleiste über den Satzspiegel verteilt, Kopf „Kennzahlen je Überleitung (Vorschlag, H)“, Ergebnis leiser gesetzt.
  01: Pfad auf y = 800 stößt ans Foto, Meta-Zeile ausgeglichen umbrochen.
- Sprechtext (Absätze mit data-schritt) ist auf allen Folien wörtlich unverändert; das Redeskript (${P}/redeskript.md, Generator ${P}/werkzeuge-redeskript/) ist davon abhängig.
- Prüfwerkzeug: \`cd ${PR} && PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core node werkzeuge/pruefen.mjs index.html --ausgabe _test/<name> --schritte [--modus dunkel] [--oeffentlich --druck _test/<name>/notfall.pdf]\`. Stand vor D13: 0 Fehler, 17 Warnungen (Wortbudget/Schrift, laut Plan erlaubt), 38 Fremdbilder, 23 Klicks, Sollzeit 735 s.

FESTE REGELN:
- Keine neuen Fakten, Zahlen oder Quellen-IDs erfinden; Fakten nur aus dem Dossier ${P}/recherche-customer-journey.md mit Befund-ID. Gib für jede inhaltliche Aussage die Quelle an (Datei + Abschnitt/ID); Gestaltungsurteile als „aus Modellwissen“ kennzeichnen.
- Keine Namen von KI-Modellen in Dateien schreiben.
- Nicht committen, nicht pushen, kein git reset/checkout/stash. Nur die Dateien ändern, die dein Auftrag nennt.
- Nichts unter /root/.claude/uploads lesen. Die Videobotschaft des Gründers (praesentation/video/) nicht ansehen/anhören, nicht transkribieren.
- werbevideo/ und konzept-website/ nicht ändern.
- Rechte-Wortlaut unverändert lassen (Fremdbilder: Veröffentlichung von der Gruppe beschlossen, Nr. 17, keine Genehmigung der Rechteinhaber eingeholt; Logo mit Einverständnis Nr. 12; Videobotschaft mit Zustimmung des Gründers Nr. 18).
- Deutsch, klare kurze Sätze.
`

const DOKU = `${LAGE}
DEIN AUFTRAG (Doku-Agent): Ziehe die Dokumentation und die Kommentare auf den neuen Stand nach. Du änderst NUR Text in Doku-Dateien und in Kommentaren (HTML-Kommentare, CSS-Kommentare) – nichts, was auf der Folie sichtbar ist oder gerendert wird, und keine Notizen/Sprechtexte. Parallel prüft ein anderer Agent die Folien; ändere deshalb keine sichtbaren Inhalte, auch wenn du etwas findest – melde es stattdessen in "hinweise_fuer_pruefung".

1. ${P}/gestaltungsplan.md:
   - 3.6 (Komponenten): Leerstelle neu beschreiben (leere, durchgestrichene Browserseite, Name „keine Antwortseite“, gestrichelter 3-px-Rahmen bleibt); neue Komponenten Urteilszeichen (05, 04 am Nebenweg, 03 Signalkreise), „bricht“ mit Lücke und Bruchstrichen (Option "luecke"), Messpunkt-Ring Ü1–Ü4 (09), Rang-Ring für Plätze 2/3 (06), Kästchen je Kontaktpunkt (03), Ring-Kennzahl (02).
   - 3.7: Ausnahme ergänzen: schlichte Linien-Symbole ohne Fläche/Rahmen sind seit 08.11.2026 erlaubt (Entscheidung Yannick, KI-Nachweis FS2 Nr. 30; Herkunft: KI-gestützt als Inline-SVG erstellt, keine Fremdbilder, keine KI-Bilder). Die ursprüngliche Regel nicht löschen, sondern die Abweichung kenntlich machen.
   - 5.1 Folienplan: Zeilen 02, 03, 04, 05, 06, 07, 09 (und 01, falls dort Pfadlage beschrieben) an die neue Darstellung anpassen.
   - Alle übrigen Stellen mit „Antwortseite fehlt“ bzw. der alten Leerstelle (z. B. Bildliste b07, Tabelle L1, Abschnitte 6.x, Schritt-Tabelle 6.x) auf den neuen Stand bringen; wo es um die historische Planung geht, „seit D13: …“ ergänzen statt Geschichte umzuschreiben.
   - Am passenden Ort (es gibt bereits Abschnitte zu Abweichungen, z. B. zu Fremdbildern/Konzept-Webseite/keine eigene Erhebung) einen kurzen Abschnitt „Abweichung D13 (08.11.2026): Visualisierungen“ ergänzen.
2. ${PR}/AUTOREN.md: neuen Abschnitt (fortlaufend nach dem letzten, z. B. §15) „D13 (08.11.2026): bessere Visualisierungen“ – was je Folie geändert ist, neue Klassen/Komponenten, pfad.js-Option "luecke" (prüfe §3, dort ist sie evtl. schon nachgetragen – nicht doppeln), Hinweis Linien-Symbole erlaubt (Nr. 30). Den Prüfstand NICHT mit Zahlen füllen, sondern als Zeile „**Prüfstand D13:** folgt nach der Schlussprüfung“ (Claude füllt ihn). §1 („Was es nicht gibt“ o. ä.) und §6 anpassen, wo sie Symbole ausschließen. Ältere Prüfstände (D06–D12) NICHT ändern – das ist Geschichte.
3. ${PR}/LIESMICH.md: Kopf-Absatz „Stand 08.11.2026“ um einen Satz zu D13 ergänzen; §8 (Entstehung) und den Abschnitt zu Wortbudgets/Warnungen (alte Zahlen 02: 53, 05: 72, 07: 91, 09: 53 → neu 02: 50, 05: 68, 07: 72, 09: 50; f03-Schriftwarnung entfällt) – ältere „Stand …“-Absätze nicht umschreiben; einen neuen Abschnitt „15. Visualisierungen (08.11.2026, D13)“ mit: was sich je Folie ändert, worauf die Vortragenden achten müssen (07: „die Werbung ist gekennzeichnet“ steht nicht mehr sichtbar auf der Folie, muss gesagt werden; 09: Bilder zeigen den IST-Weg, Kennzahlen messen den neuen Weg; Dunkelmodus auf 05: wackelt/bricht beide gelb, nur über Form unterscheidbar; Beamer-Test: 22–24-px-Meta auf 06/07/09 aus der letzten Reihe prüfen), Anzahl der Warnungen nur als „folgt nach der Schlussprüfung“.
4. ${PR}/fremdbilder/register.js: Felder „platz“ der Vorbild-Logos (07) und ggf. anderer Bilder, deren Lage sich geändert hat (02 b04 ist schon angepasst; prüfe 09 Bildleiste K1–K6 und 04/05), auf die neue Lage bringen. NUR das Feld platz/Kommentare, keine Pfade, alt-Texte nur, falls sie die Lage beschreiben.
5. Kommentare in ${PR}/index.html (Kasten-Kommentare „FOLIE 0x“, Element-Kommentare) und in css/folien/*.css: „Entscheidung der Gruppe offen“ → „erlaubt von Yannick am 08.11.2026 (KI-Nachweis FS2 Nr. 30)“; Kommentare, die „keine Icon-Abzeichen (Plan 3.7)“ als Begründung nennen, sinnvoll anpassen. Achtung: NUR innerhalb von <!-- --> bzw. /* */ ändern.
6. ${P}/README.md und ${PR}/QUELLEN.md: per grep prüfen, ob dort die alte Darstellung (Leerstelle „Antwortseite fehlt“, Tabelle auf 07, Kennzahl-Liste auf 09) beschrieben ist; wenn ja, knapp nachziehen. QUELLEN: keine neuen Quellen; ggf. Satz „Linien-Symbole KI-gestützt erstellt (Inline-SVG), keine Fremdbilder“.
7. Danach: \`grep -rn "Antwortseite fehlt\\|Entscheidung der Gruppe offen" ${P} --include=*.md --include=*.html --include=*.css --include=*.js\` (ohne _test/, intern/, recherche-Dossier) – jeder verbleibende Treffer muss bewusst historisch sein; liste sie.
Prüfe am Ende, dass index.html und CSS sich NUR in Kommentaren gegenüber dem Stand vor deiner Arbeit geändert haben (z. B. vorher Kopie nach ${S}/doku-vorher/ anlegen und mit einem kleinen Skript vergleichen, das Kommentare entfernt).
Gib zurück: geänderte Dateien mit je 1–3 Sätzen, was geändert ist; Liste der bewusst verbliebenen historischen Treffer; hinweise_fuer_pruefung (Dinge, die dir an sichtbaren Inhalten aufgefallen sind).`

const PRUEF = `${LAGE}
DEIN AUFTRAG (Prüf-Agent, NUR LESEN – du änderst KEINE Datei in ${P}; eigene Ausgaben nur in ${PR}/_test/d14-* und ${S}/d14-pruefung/): Prüfe die zusammengeführte Präsentation adversarial. Die vier Entwürfe wurden einzeln geprüft, aber nie zusammen. Parallel ändert ein Doku-Agent NUR Kommentare und Doku-Dateien – ignoriere Kommentartexte.
1. Prüfläufe: hell (--schritte), --modus dunkel (--schritte), --oeffentlich --schritte --druck (PDF). Erwartung: 0 Fehler; Warnungen höchstens wie vorher (17) oder weniger; 38 Fremdbilder (Rückfall 0); 0 externe Anfragen; Klicks 23 und Sollzeit 735 s unverändert. Abweichungen genau benennen.
2. Sieh dir JEDES Bildschirmfoto der Folien 01–07 und 09 in allen Schritten in hell, dunkel und Rückfall selbst an (Read-Tool auf die PNGs). Suche: Überlappungen, abgeschnittener Text, Text < 28 px bei Inhalt (Meta/Notizen ausgenommen), Elemente, die vor dem Pfad erscheinen, falsche Einblendreihenfolge, Gelb ohne Kontur auf Creme, Mittel warm auf Gelb, Farbe als einziges Signal, Widersprüche zwischen Folien (z. B. Zeichen „bricht“ auf 04 vs. Legende 05; Ring auf 06 vs. Messpunkt-Ring 09 vs. Ring-Kennzahl 02 – drei Ringbedeutungen?; Kästchen 03).
3. Prüfe, ob die Zusammenführung Nebenwirkungen hat: pfad.js/pfad.css (Option "luecke") darf nur 05 betreffen; vergleiche Folien 08 und B1–B9 mit dem Stand HEAD (dazu eine Kopie von HEAD in ${S}/d14-pruefung/head/ erzeugen: \`git -C /home/user/Unternehmens-Kommunikation archive HEAD fallstudie-2-customer-journey/praesentation | tar -x -C ${S}/d14-pruefung/head\`; fremdbilder/ und video/ ggf. per Symlink ergänzen, falls nicht im Archiv) – pixelgleich erwartet.
4. Ehrlichkeit: Sind alle Zahlen auf 02, 03, 05, 07, 09 identisch mit HEAD? (Skript: sichtbaren Text beider Stände extrahieren und Zahlen vergleichen.) Steht „Vorschlag“/„H“ weiter an Kennzahlen (09) und SOLL-Weg (07)? Ist irgendwo eine eigene Erhebung angedeutet? Sprechtext (data-schritt-Absätze) wörtlich gleich mit HEAD (maschinell)? Läuft \`python3 -I ${P}/werkzeuge-redeskript/wortlaut-pruefen.py\` (Aufruf im Skriptkopf nachlesen) mit 0 Abweichungen?
5. Bedienung: Folie 07 Klick 1 mit den verzögerten Einblendungen – was passiert bei schnellem Weiterklicken und beim Zurückblättern (Pfeil links), beim Springen per Sprungliste/Übersicht direkt auf 07 und bei prefers-reduced-motion? Folie 05 Lücke bei Zurückblättern? (Mit einem kleinen Playwright-Skript prüfen, \`require('/opt/node-tools/node_modules/playwright-core')\`, Chromium unter /opt/pw-browsers/chromium bzw. wie pruefen.mjs es startet.)
6. Druck-PDF: Seiten 01–07, 09 ansehen (pdftoppm), Endzustände vollständig?
Gib zurück: befunde (je: id, folie, schwere hoch/mittel/niedrig, beschreibung, beleg (Datei/Bild/Messwert), vorschlag), pruefstand (Zahlen der drei Läufe), und ein kurzes fazit. Nur echte, belegte Befunde; Geschmacksfragen als niedrig.`

phase('Doku und Prüfung')
const [doku, pruef] = await parallel([
  () => agent(DOKU, { label: 'doku', phase: 'Doku und Prüfung', schema: {
    type: 'object',
    properties: {
      dateien: { type: 'array', items: { type: 'object', properties: { datei: { type: 'string' }, aenderung: { type: 'string' } }, required: ['datei', 'aenderung'] } },
      historische_treffer: { type: 'string' },
      nur_kommentare_geprueft: { type: 'string' },
      hinweise_fuer_pruefung: { type: 'string' },
    },
    required: ['dateien', 'historische_treffer', 'nur_kommentare_geprueft', 'hinweise_fuer_pruefung'],
  } }),
  () => agent(PRUEF, { label: 'pruefung', phase: 'Doku und Prüfung', schema: {
    type: 'object',
    properties: {
      befunde: { type: 'array', items: { type: 'object', properties: {
        id: { type: 'string' }, folie: { type: 'string' }, schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
        beschreibung: { type: 'string' }, beleg: { type: 'string' }, vorschlag: { type: 'string' } },
        required: ['id', 'folie', 'schwere', 'beschreibung', 'beleg', 'vorschlag'] } },
      pruefstand: { type: 'string' },
      fazit: { type: 'string' },
    },
    required: ['befunde', 'pruefstand', 'fazit'],
  } }),
])

phase('Nacharbeit')
const offen = (pruef && pruef.befunde) ? pruef.befunde : []
log(`Prüfung: ${offen.length} Befunde (${offen.filter(b => b.schwere === 'hoch').length} hoch, ${offen.filter(b => b.schwere === 'mittel').length} mittel)`)
const NACH = `${LAGE}
DEIN AUFTRAG (Nacharbeit): Ein Doku-Agent hat Doku und Kommentare nachgezogen, ein Prüf-Agent hat die zusammengeführte Präsentation geprüft. Setze die Befunde der Prüfung um: alle hohen und mittleren; niedrige, wenn sie klar richtig und klein sind. Begründe jeden nicht umgesetzten Befund. Halte Sprechtext (data-schritt-Absätze) wörtlich unverändert, ändere keine Zahlen, keine Klickzahl, keine data-zeit – außer ein Befund verlangt es zwingend (dann begründen). Wenn ein Befund der Doku widerspricht, ziehe die Doku mit nach (gestaltungsplan.md, AUTOREN.md §D13, LIESMICH §15).

ERGEBNIS DOKU-AGENT:
${JSON.stringify(doku, null, 1)}

ERGEBNIS PRÜF-AGENT:
${JSON.stringify(pruef, null, 1)}

Danach selbst prüfen: pruefen.mjs hell --schritte, --modus dunkel --schritte, --oeffentlich --schritte --druck (Ausgaben nach _test/d14-final, _test/d14-final-dunkel, _test/d14-final-oeff); die Bilder der geänderten Folien ansehen; wortlaut-pruefen.py 0 Abweichungen. Lege eine Vorher-nachher-Montage je geänderter Folie nur an, wenn du sichtbare Änderungen gemacht hast (${S}/d14-nacharbeit/).
Gib zurück: umgesetzt (Liste mit Befund-ID und Änderung, Dateien), nicht_umgesetzt (mit Begründung), pruefstand (Zahlen der drei Läufe: Fehler, Warnungen, Fremdbilder, Klicks, Sollzeit, PDF-Seiten), restrisiken.`
const nach = await agent(NACH, { label: 'nacharbeit', phase: 'Nacharbeit', schema: {
  type: 'object',
  properties: {
    umgesetzt: { type: 'string' }, nicht_umgesetzt: { type: 'string' }, pruefstand: { type: 'string' }, restrisiken: { type: 'string' },
  },
  required: ['umgesetzt', 'nicht_umgesetzt', 'pruefstand', 'restrisiken'],
} })

return { doku, pruef, nach }
