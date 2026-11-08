export const meta = {
  name: 'fs2-visualisierung',
  description: 'Präsentation FS2 optisch stärker: Entwürfe für bessere Visualisierungen in vier Kopien (02/03, 04/05 inkl. Leerstelle, 06/07, 09), Prüfung, Nachbesserung',
  phases: [
    { title: 'Entwürfe', detail: '4 Gestalter parallel, je eigene Kopie' },
    { title: 'Prüfung', detail: 'je Entwurf Ehrlichkeit, Lesbarkeit, Technik' },
    { title: 'Nachbesserung', detail: 'Befunde im Entwurf umsetzen' },
  ],
}

const R = '/home/user/Unternehmens-Kommunikation'
const FS2 = R + '/fallstudie-2-customer-journey'
const SP = '/tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad/d13'
const PW = 'PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core'

const AUFTRAG = `
AUSLÖSER (Yannick, 08.11.2026, wörtlich): „Da ist bei einem Bild "Antwort fehlt". Und ich überlege ob man noch ein paar mehr Sachen besser optisch darstellen kann“
KONTEXT: Web-Präsentation Fallstudie 2 (Customer Journey, Marke HOLY), Vortrag Di 10.11.2026, 15 Minuten, Generalprobe Mo 09.11. Stand: Commit d027c8b (finalisiert in D12: ohne eigene Erhebung, Werbespot-Knopf auf 08, Redeskript). Das Original im Repository (${FS2}/praesentation/) wird in diesem Workflow NICHT verändert. Du arbeitest in einer eigenen Kopie (siehe unten); Yannick wählt danach anhand von Vorher-nachher-Bildern aus, was übernommen wird.
Zum Bild „Antwort fehlt“: Auf Folie 04 steht der gestrichelte Kasten <div class="p-leerstelle" …>Antwortseite fehlt</div> (Stil .p-leerstelle in css/folien/pfad.css 5.7). Inhaltlich gewollt (HOLY hat keine Antwortseite auf die Koffein-Frage, Marco weicht auf die freie Suche aus, Bruch Ü2 auf 05), sieht aber wie ein fehlendes Bild aus.

LIES ZUERST in deiner Kopie: praesentation/LIESMICH.md (§2 Gestaltung, §3 Zeit/Klicks, §8 Prüfen), praesentation/AUTOREN.md (Regeln, Abschnitt 14), gestaltungsplan.md (Gestaltung „Pfad“: Farben, Schriften, Kontrastregeln 11.3: kein Gelb ohne schwarze Kontur auf Creme, kein Mittel warm auf Gelb, kein Ocker; Mindestschrift 28 px Inhalt), praesentation/index.html (Kästen „FOLIE xx“, Notizen), css/folien/pfad.css, css/folien/<nn>-*.css, js/folien/pfad.js. Sieh dir die aktuellen Folien an: ${R}/fallstudie-2-customer-journey/praesentation/_test/final1/f01.png … f09.png, b1.png … b9.png (Endzustand, 1920 × 1080).

REGELN:
- Ziel: Text durch Visualisierung ersetzen oder stützen, wo es die Aussage schneller verständlich macht (Diagramme, Icons, Ampel-/Signalfarben im Pfad-Stil, Symbole, Zahlen groß, Bild-Text-Kopplung, schrittweiser Aufbau). Weniger sichtbare Wörter ist ein Plus (Wortbudget ca. 40 je Hauptfolie). Eigene Icons/Diagramme als Inline-SVG oder CSS; keine externen Anfragen, keine Icon-Bibliotheken aus dem Netz, keine neuen Downloads, keine KI-Bilder.
- Inhalte und Belege bleiben: keine neuen Fakten oder Zahlen, keine erfundenen Daten (keine eigene Erhebung!), Befund-IDs/Quellzeilen bleiben, Statuszeichen (✔ ✎ ~ H) bleiben erkennbar. Persona fiktiv. Rechtestatus-Zeilen bleiben.
- Klicks (data-schritt) möglichst gleich lassen; wenn ein Schritt sinnvoll anders aufgebaut wird, Notizen/Sprechtext entsprechend (wörtlich anpassen, Wortzahl ±10 %) und im Ergebnis nennen. Sollzeiten (data-zeit) nicht erhöhen.
- Gestaltung „Pfad“ (Farben, Bricolage Grotesque/Inter, Laufleiste, Fuß) bleibt; hell und dunkel (--modus dunkel) und Rückfall ohne Fremdbilder (--oeffentlich) müssen funktionieren; Beamer-tauglich (Kontrast ≥ 4,5:1, Mindestschrift 28 px für Inhalt, Ausnahmen wie im Plan).
- Nur in deiner Kopie ändern; nichts im Repository, nichts committen. Keine Namen von KI-Modellen in Dateien. Sprache Deutsch. Kennzeichne, was aus Modellwissen stammt (Gestaltungsentscheidungen).
- Prüfen in der Kopie: cd <kopie>/praesentation && ${PW} node werkzeuge/pruefen.mjs index.html --ausgabe _test/<name> --schritte (0 Fehler; Warnungen nicht mehr als vorher für deine Folien) und je einmal --modus dunkel und --oeffentlich für deine Folien ansehen.
`

const ENT = {
  type: 'object',
  properties: {
    key: { type: 'string' },
    folien: { type: 'array', items: { type: 'object', properties: {
      folie: { type: 'string' }, vorher_problem: { type: 'string' }, nachher_loesung: { type: 'string' },
      vorher_bild: { type: 'string' }, nachher_bilder: { type: 'array', items: { type: 'string' } },
      woerter_vorher: { type: 'number' }, woerter_nachher: { type: 'number' },
      klicks_geaendert: { type: 'string' }, sprechtext_geaendert: { type: 'string' } },
      required: ['folie', 'vorher_problem', 'nachher_loesung', 'vorher_bild', 'nachher_bilder', 'woerter_vorher', 'woerter_nachher', 'klicks_geaendert', 'sprechtext_geaendert'] } },
    geaenderte_dateien: { type: 'array', items: { type: 'string' }, description: 'Pfade relativ zu praesentation/ in der Kopie' },
    pruefungen: { type: 'string' },
    risiken: { type: 'string' },
  },
  required: ['key', 'folien', 'geaenderte_dateien', 'pruefungen', 'risiken'],
}

const GRUPPEN = [
  { key: 'persona-ist', text: `Folien 02 (Persona Marco und Mediennutzung: Balken, Zahlenliste, Persona-Text) und 03 (IST-Inventur 13 Paid / 30 Owned / 11 Earned mit Bildleisten, Farbmuster, Tabelle „Bewertung je Phase“ mit +/−). Ideen: Persona als klare Karte mit wenigen Merkmalen und Symbolen; Mediennutzung als sauberes Balkendiagramm mit Marcos Kanälen hervorgehoben; IST-Bewertung je Phase als Signalleiste (z. B. Symbol + Kurzwort je Phase) statt Plus-/Minus-Text.` },
  { key: 'journey-bruch', text: `Folien 04 (Journey-Map IST mit zentralem Weg) und 05 (Übergänge Ü1–Ü4 mit Urteilen trägt/wackelt/bricht). PFLICHT: Die Leerstelle „Antwortseite fehlt“ auf 04 so gestalten, dass sie klar als bewusste Lücke/Bruchstelle erkennbar ist und nicht wie ein fehlendes Bild (z. B. leere Browser-Karte mit durchgestrichenem Seitensymbol oder „?“, Warnzeichen am Pfad, Beschriftung „keine Antwortseite von HOLY“ o. ä.; der Pfad weicht sichtbar auf die freie Suche aus). Auf 05: Urteile als Signale (Symbol + Farbe im Pfad-Stil, nicht nur Farbe – barrierearm), Bruch-Stelle visuell betont, Text-Belege knapper.` },
  { key: 'soll-vorbilder', text: `Folien 06 (SOLL-Matrix: je Phase drei Touchpoints, Platz 1 als neuer zentraler Weg) und 07 (Vorbilder aus anderen Branchen: Tabelle Phase – Vorbild – unsere Maßnahme, 91 sichtbare Wörter). Ideen: 06 Platz 1 je Phase deutlicher (Knoten, Icons je Touchpoint), Plätze 2/3 zurückgenommen; 07 als Karten- oder Brücken-Darstellung „Vorbild → unsere Maßnahme“ je Phase mit Logo, kurzer Mechanik und Pfeil, deutlich weniger Wörter.` },
  { key: 'fazit', text: `Folie 09 (Fazit: Pfad K1–K6, drei Kernsätze, Kennzahlen je Überleitung Ü1–Ü4, Ergebnis-Kennzahlen, Sprungliste zu Backup, „Fragen?“) und Folie 01 (Titel) nur Feinschliff. Ideen: Kennzahlen als Messpunkte direkt am Pfad (Ü1 … Ü4 an den Übergängen), Kernsätze knapper, klarer Abschluss; 01 nur, wenn ein echter Gewinn möglich ist. Die Videobotschaft auf 09 (Schritt 1, js/folien/09-fazit.js) und die Sprungliste müssen weiter funktionieren.` },
]

const ergebnisse = await pipeline(
  GRUPPEN,
  (g) => agent(`${AUFTRAG}

DEINE KOPIE: ${SP}/${g.key}/fs2/ (praesentation/, gestaltungsplan.md, recherche-customer-journey.md, README.md; werbevideo/ und konzept-website/ sind Verweise auf das Original – NICHT ändern).
DEIN AUFTRAG (Gestalter/in „${g.key}“): ${g.text}
1. Vorher-Bilder: Prüflauf in deiner Kopie vor jeder Änderung (--ausgabe _test/vorher --schritte), Bilder deiner Folien (Endzustand und Schritte) notieren.
2. Entwirf für jede deiner Folien die stärkste Verbesserung (überlege 2 Varianten, setze die bessere um) und baue sie in deiner Kopie (index.html nur in deinen Folien-Sektionen und deren Kasten-Kommentar/Notizen; css/folien/<nn>-*.css; pfad.css/pfad.js nur, wenn nötig und ohne andere Folien zu verändern – dann im Ergebnis nennen).
3. Nachher: Prüflauf --schritte (0 Fehler) und Bilder deiner Folien hell, dunkel und Rückfall; jedes Bild mit dem Read-Werkzeug ansehen und verbessern, bis es auf einem Beamer klar und professionell wirkt. Lege eine Vorher-nachher-Montage je Folie (links vorher, rechts nachher, je 960 px breit, Python/PIL) nach ${SP}/${g.key}/vergleich-<folie>.png.
4. Liste alle geänderten Dateien (relativ zu praesentation/) und die Diff-Datei: cd ${SP}/${g.key}/fs2 && diff -ruN ${FS2}/praesentation praesentation -x _test -x intern > ${SP}/${g.key}/aenderungen.diff.
Rückgabe gemäß Schema (key = „${g.key}“; vorher_bild/nachher_bilder = Pfade zu Vergleichsmontagen bzw. Einzelbildern).`, { label: `entwurf:${g.key}`, phase: 'Entwürfe', schema: ENT }),
  (e, g) => agent(`${AUFTRAG}

PRÜFUNG des Entwurfs „${g.key}“ (nur lesen, nichts ändern). Kopie: ${SP}/${g.key}/fs2/, Diff: ${SP}/${g.key}/aenderungen.diff, Ergebnis des Gestalters: ${JSON.stringify(e)}.
Prüfe: (1) Ehrlichkeit – keine neuen Fakten/Zahlen, nichts suggeriert eine eigene Erhebung, Belege/Statuszeichen erhalten, Persona fiktiv; (2) Wirkung und Lesbarkeit – ist es wirklich klarer als vorher (Vergleichsbilder ansehen), Beamer-tauglich (Schriftgrößen ≥ 28 px Inhalt, Kontrast, keine Farbe als einziges Signal), Pfad-Stil eingehalten, hell/dunkel/Rückfall ok (selbst einen Prüflauf mit --ausgabe _test/pruefung --schritte und --modus dunkel und --oeffentlich in der Kopie laufen lassen und Bilder ansehen); (3) Technik – 0 Fehler, keine neuen Warnungen über Wortbudget/Schrift hinaus, Klicks/Sollzeit, Sprechtext passt zum Bild, andere Folien unverändert (Diff prüfen), keine externen Anfragen. Befunde mit Schwere, Stelle, Beleg, Vorschlag.`, { label: `pruefung:${g.key}`, phase: 'Prüfung', schema: {
    type: 'object', properties: { befunde: { type: 'array', items: { type: 'object', properties: {
      schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] }, stelle: { type: 'string' }, problem: { type: 'string' }, beleg: { type: 'string' }, vorschlag: { type: 'string' } },
      required: ['schwere', 'stelle', 'problem', 'beleg', 'vorschlag'] } }, fazit: { type: 'string' }, empfehlung: { type: 'string', description: 'übernehmen / mit Änderungen / nicht übernehmen, je Folie' } },
    required: ['befunde', 'fazit', 'empfehlung'] } }).then((p) => ({ entwurf: e, pruefung: p })),
  (x, g) => agent(`${AUFTRAG}

NACHBESSERUNG des Entwurfs „${g.key}“ in deiner Kopie ${SP}/${g.key}/fs2/. Entwurf: ${JSON.stringify(x.entwurf)}. Prüfung: ${JSON.stringify(x.pruefung)}.
Setze alle hohen und mittleren Befunde um, niedrige wenn günstig. Danach Prüflauf --schritte (0 Fehler) hell, --modus dunkel, --oeffentlich; Bilder ansehen; Vergleichsmontagen ${SP}/${g.key}/vergleich-<folie>.png neu erzeugen; Diff neu: cd ${SP}/${g.key}/fs2 && diff -ruN ${FS2}/praesentation praesentation -x _test -x intern > ${SP}/${g.key}/aenderungen.diff. Rückgabe gemäß Schema (aktualisiert; in pruefungen auch, welche Befunde umgesetzt/nicht umgesetzt).`, { label: `nachbesserung:${g.key}`, phase: 'Nachbesserung', schema: ENT }).then((n) => ({ ...x, final: n })),
)

return { ergebnisse }
