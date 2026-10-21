export const meta = {
  name: 'chamaeleon',
  description: 'Analyse-Tier Waschbär → Chamäleon (Einordnung Elias): Folie 08, Folie 10, Live-Abstimmung, Zeichnungen, Ausarbeitungen und Doku anpassen, prüfen, Exporte',
  phases: [
    { title: 'Bauen', detail: 'Inhalte und Begründung; Zeichnungen (parallel, getrennte Dateien)' },
    { title: 'Prüfen', detail: 'Inhalt, Belege, Kennzeichnung, Konsistenz; Darstellung auf Folie und Handy' },
    { title: 'Nacharbeit', detail: 'Befunde einarbeiten, Doku, Exporte' },
  ],
}

const GEMEINSAM = `
Kontext: Web-Präsentation einer studentischen Gruppenarbeit (Fallstudie 1 „Brand Persona & Markenidentität“, Marke HOLY, Vortrag Mo 26.10.2026) in /home/user/Unternehmens-Kommunikation/fallstudie-1-brand-persona/praesentation (index.html, marke.js, js/, css/, werkzeuge/pruefen.mjs, LIESMICH.md, AUTOREN.md, QUELLEN.md). Ausarbeitungen liegen eine Ebene höher (../limbic-map.md, ../folienentwuerfe.md, ../markenkompetenz.md, ../persona-steckbrief.md), das Recherche-Dossier in ../recherche/ (holy-recherche.md; Faktenstatus ✔ belegt, H Hypothese usw. beachten). Lies zuerst AUTOREN.md (Aufbau, Konventionen) und die Folien 08, 08b und 10 in index.html samt Notizen (<aside class="notizen">), Kästen „FOLIE xx“ und Daten (<script type="application/json" class="daten">), dazu marke.js Abschnitt 5 (umfragen.tier).

ÄNDERUNG ${args.datum} (Entscheidung Yannick Heisler): Elias Knauber (Bündel C) ordnet HOLY in seiner Ausarbeitung eher als CHAMÄLEON ein. Das Tier „unserer Analyse“ wechselt deshalb überall von Waschbär zu Chamäleon: auf Folie 08 (Titel ab Schritt 2, Szene „Unsere Analogien“, Hervorhebung „Unsere Analyse“ in der Umfrage, Aussagezahl), in der Live-Abstimmung (marke.js → umfragen.tier.optionen = ['Adler', 'Löwe', 'Chamäleon', 'Fuchs', 'Schwan'] – Chamäleon ersetzt Waschbär an derselben Stelle; unsereAntwort = 'Chamäleon'), auf Folie 10 (Markensteuerrad, Feld Tonalität) und in den Ausarbeitungen. Nur diese inhaltliche Änderung – kein weiteres Redesign.
BEGRÜNDUNG: Elias' Text liegt nicht vor. Yannick hat entschieden: Claude schlägt eine Begründung aus dem Recherche-Dossier vor, deutlich gekennzeichnet als Vorschlag („Einordnung: Elias Knauber (Bündel C); Begründung: Vorschlag, KI-gestützt – von Elias zu prüfen“), Elias prüft. Das Chamäleon selbst ist eine Analogie = Hypothese (H). Fakten über HOLY NUR aus dem Recherche-Dossier mit Kapitel und Faktenstatus (z. B. 31 Energy-Sorten, Produktlinien, Kooperationen, Communitys, Verpackung – jeweils im Dossier nachsehen, nichts erfinden, keine Zahlen ohne Quelle). Die frühere Hypothese des Dossiers (Kap. 6.7: „Ton eher Waschbär oder Affe“) bleibt als dokumentierter Zwischenstand bestehen und wird nicht gelöscht, sondern in Notizen/Ausarbeitung als „frühere Hypothese, ersetzt durch …“ eingeordnet.
Feste Regeln: Live-Abstimmung technisch NICHT ändern (live-abstimmung/apps-script.gs, Schnittstelle, liveQuelle und runde in marke.js bleiben; die Aktualisierung des Skripts bei Google ist zurückgestellt). Nicht ändern: ../dossier-buendel-b.md/.html (Lukas), ../recherche/* (Recherche-Dossier), ki-nachweis/*, ../gruenderbefragung.md. Gründeraussagen nur als Selbstauskunft „Horsch 2026 (GB)“, „95 %“ nicht verwenden. Keine HOLY-Logos oder Netzbilder. Keine Modellbezeichnungen (Namen von KI-Modellen) in Dateien. Deutsch, kurze Sätze, Stil der vorhandenen Dateien. Kein git commit. Testausgaben nur unter praesentation/_test/, Hilfsskripte im Scratchpad. Prüfwerkzeug: PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core node werkzeuge/pruefen.mjs index.html --ausgabe _test/<x> --schritte [--optional] [--nur f08,f10] [--thema bento|keynote] [--modus dunkel] [--live-werte 3,1,7,0,2] (es beantwortet Anfragen an die Web-App selbst, nichts geht ins Netz). Abstimmseite lokal: node werkzeuge/live-abstimmung-test.mjs --server 8787 und abstimmen.html?u=tier&quelle=http://localhost:8787/exec über file://.
`

const BERICHT = {
  type: 'object',
  properties: {
    teil: { type: 'string' },
    dateien: { type: 'array', items: { type: 'object', properties: { datei: { type: 'string' }, was: { type: 'string' } }, required: ['datei', 'was'] } },
    getestet: { type: 'string' },
    quellen: { type: 'array', items: { type: 'string' }, description: 'Dossier-Stellen (Kapitel, Faktenstatus, Quellennummer) bzw. Websuche mit URL und Abrufdatum' },
    offen: { type: 'array', items: { type: 'string' } },
  },
  required: ['teil', 'dateien', 'getestet', 'quellen', 'offen'],
}

const TEILE = [
  { key: 'inhalt', prompt: `TEIL A – INHALT UND BEGRÜNDUNG (alle Dateien außer js/folien/08-analogien.js, js/abstimmen.js, css/ und live-abstimmung/apps-script.gs).
1. Begründung erarbeiten: Was am Markenauftritt von HOLY passt zum Chamäleon (z. B. Wandelbarkeit: viele Sorten und Farben, wechselnde Kooperationen/Editionen, Anpassung an verschiedene Communitys, Wechsel der Kanäle) – nur mit Dossier-Belegen; was spricht dagegen bzw. wo ist die Analogie ambivalent (Chamäleon kann auch „ohne festen Kern“ heißen – wie wird das eingeordnet?). Das Verhältnis zum frechen Ton (Aaker-Profil auf Folie 08b, Tonalität auf Folie 10) klären: Ersetzt das Chamäleon den „frechen“ Ton oder beschreibt es, WIE der freche Ton auftritt (passt Farbe/Ansprache an die Community an, bleibt im Kern frech)? Widerspruchsfrei zu 08b und zum Markenkern auf Folie 10 formulieren.
2. index.html Folie 08: Titel ab Schritt 2 (bisher „<Marke> wäre ein Waschbär, kein Adler“), Szene „Unsere Analogien“ (Daten-JSON: Tier der Analyse mit Name, Stichworten, ggf. Kurzbeschreibung; der Bild-Schlüssel ergibt sich aus dem Namen: „Chamäleon“ → chamaeleon – Teil B zeichnet ihn in js/folien/08-analogien.js und js/abstimmen.js), Notizen (Sprechtexte „Auflösung“, „Warum …?“, „Kontrast“; Zeiten beibehalten oder anpassen, mündlich sprechbar), Kasten „FOLIE 08“ und Kommentare. Die Kennzeichnung der Begründung als Vorschlag gehört in Notizen und Kasten, nicht als langer Text auf die Folie (Wortbudget: Hauptfolie ca. 40 Wörter). Folie 10 (Markensteuerrad): Feld Tonalität und zugehörige Notizen/Kasten. Alle anderen Stellen in index.html (z. B. 08b, Backups B1–B8, Rückfragen), die den Waschbär als unsere Analyse nennen.
3. marke.js → umfragen.tier: optionen und unsereAntwort wie oben, Kommentare anpassen (Reihenfolge = Ziffern 1–5 und Nummern 0–4 in der Tabelle; Hinweis: Probestimmen mit Option 2 zählen jetzt als Chamäleon, die Runde wird vor dem Vortrag ohnehin umgestellt). liveQuelle und runde NICHT ändern.
4. Ausarbeitungen: ../limbic-map.md (Zeile zum Maskottchen/Ton), ../folienentwuerfe.md (Folie 8 und Folie 10, falls Tier oder Tonalität genannt), ../markenkompetenz.md bzw. ../persona-steckbrief.md nur falls dort das Tier vorkommt. Jeweils mit Kennzeichnung (Einordnung Elias, Begründung Vorschlag, H).
5. Doku: QUELLEN.md, LIESMICH.md (Abschnitt 6, Checkliste 12: neuer Punkt „Elias prüft die Begründung Chamäleon“ (C · Elias) und „Lukas: Analogie-Befragung/Notizen Folie 08 abgleichen“ (B · Lukas)), live-abstimmung/ANLEITUNG.md (Beispiele mit Waschbär), AUTOREN.md (Änderungstabelle, neuer Abschnitt mit Datum ${args.datum}).
6. Prüfen: pruefen.mjs --nur f08,f08b,f10 --schritte (0 Fehler; der Abgleich in 08-analogien.js prüft Titel/unsereAntwort/optionen – solange Teil B die Zeichnung noch nicht hat, erscheint evtl. der Pfotenabdruck; das ist kein Fehler deines Teils), dann Volltextsuche nach „Waschbär“/„waschbaer“ im Repository (ohne _test, _entwuerfe, ki-nachweis, recherche, dossier-buendel-b) und jeden Rest begründen oder beheben.` },
  { key: 'zeichnung', prompt: `TEIL B – ZEICHNUNGEN (nur js/folien/08-analogien.js, js/abstimmen.js und bei Bedarf css/folien/08-analogien.css bzw. css/abstimmen.css).
Ein Chamäleon als Strichzeichnung im Stil der vorhandenen Tiere ergänzen – in BEIDEN Bildersammlungen (BILDER in js/folien/08-analogien.js und die Zeichnungen in js/abstimmen.js, die „wie auf Folie 08“ sein sollen), Schlüssel „chamaeleon“ (Name „Chamäleon“ → bildSchluessel). Zeichenfläche 120 × 120, Linien wie bei waschbaer/adler/affe, Klasse „voll“ für gefüllte Flächen. Erkennungsmerkmale: Profilkopf mit Helm/Kamm, großes rundes Auge mit Pupille (Augenkegel), eingerollter Schwanz, ggf. Zunge oder Zehen am Ast – auch bei 84 px (Folie) und auf dem Handy-Knopf (ca. 42–64 px) eindeutig, nicht wie Eidechse/Schnecke. Die Waschbär-Zeichnung bleibt in den Sammlungen (schadet nicht, für Rückgriff). Keine Vorlage aus dem Netz, eigene Gestaltung.
Prüfen: Folie 08 in allen Schritten in editorial, bento, keynote, hell und dunkel (pruefen.mjs --nur f08 --schritte, dazu --live-werte 3,1,7,0,2, damit die Umfrage Balken und Aussagezahl zeigt); Abstimmseite (lokal mit Attrappe) bei 390×664, 375×548, 320×640 hell/dunkel – Knöpfe und „Danke“-Karte mit Chamäleon. Teil A ändert parallel marke.js (optionen mit 'Chamäleon') und index.html; falls deren Stand noch fehlt, für deine Tests eine Kopie von marke.js im Scratchpad bzw. Playwright-Route nutzen, nicht die echten Dateien von Teil A ändern. Screenshots selbst ansehen (Kontaktbogen), Iterationen mit Begründung im Bericht.` },
]

phase('Bauen')
const bau = (await parallel(TEILE.map(t => () =>
  agent(GEMEINSAM + '\n' + t.prompt, { label: 'bau:' + t.key, phase: 'Bauen', schema: BERICHT })))).filter(Boolean)
log(bau.length + ' von 2 Bauteilen fertig')

const BEFUNDE = {
  type: 'object',
  properties: {
    pruefer: { type: 'string' },
    befunde: { type: 'array', items: { type: 'object', properties: { schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] }, stelle: { type: 'string' }, problem: { type: 'string' }, beleg: { type: 'string' }, vorschlag: { type: 'string' } }, required: ['schwere', 'stelle', 'problem', 'beleg', 'vorschlag'] } },
  },
  required: ['pruefer', 'befunde'],
}
const PRUEFER = [
  { key: 'inhalt', prompt: `Prüfer INHALT, BELEGE, KENNZEICHNUNG, KONSISTENZ (adversarial, nichts ändern): Ist jede Aussage über HOLY in der Chamäleon-Begründung im Recherche-Dossier mit dem genannten Kapitel und Faktenstatus belegt (selbst nachschlagen)? Ist die Begründung überall als Vorschlag (KI-gestützt, von Elias zu prüfen) und die Einordnung als Elias' Einordnung gekennzeichnet, ohne Elias Aussagen in den Mund zu legen? Ist die Analogie schlüssig und widerspruchsfrei zu Folie 08b (Aaker), Folie 10 (Markenkern, Tonalität) und den Sprechtexten – und ist die Ambivalenz des Chamäleons (anpassungsfähig vs. ohne festen Kern) für die Fragerunde bedacht? Stehen irgendwo noch „Waschbär“ als unsere Analyse, alte Prozentbeispiele oder Titel (Volltextsuche in index.html, marke.js, js/, LIESMICH, AUTOREN, QUELLEN, ANLEITUNG, ../*.md außer recherche und dossier-buendel-b)? Passen Optionen, unsereAntwort, Titel und Aussagezahl zusammen (Abgleich in 08-analogien.js)? Wurden verbotene Dateien geändert (git diff --name-only)? Keine Modellbezeichnungen.` },
  { key: 'darstellung', prompt: `Prüfer DARSTELLUNG (adversarial, nichts ändern): Folie 08 in allen Schritten, editorial/bento/keynote, hell/dunkel, mit --live-werte und ohne: Ist das Chamäleon auf Folie und Handy eindeutig erkennbar (nicht Eidechse/Schnecke/Drache), im Stil der anderen Tiere (Strichstärke, Größe, Füllflächen)? Passt der neue Titel in die Zeile, ohne Umbruchfehler? Folie 10 (Feld Tonalität) und 08b ansehen. Abstimmseite lokal mit Attrappe bei 390×664, 375×548, 320×640, 844×390 hell/dunkel: Knöpfe, Danke-Karte, Wiederholungs-Hinweis. Live-Weg mit Attrappe: drei Handys stimmen (u. a. Chamäleon), Folie zeigt Balken, „Unsere Analyse“ beim Chamäleon und Aussagezahl „… als Chamäleon“. pruefen.mjs --schritte --optional: 0 Fehler, keine neuen Warnungen. Screenshots unter _test/pruef-chamaeleon/ und selbst ansehen.` },
]
phase('Prüfen')
const pruefungen = (await parallel(PRUEFER.map(p => () =>
  agent(GEMEINSAM + '\n' + p.prompt + '\nBerichte der Bauteile:\n' + JSON.stringify(bau, null, 1),
    { label: 'pruefen:' + p.key, phase: 'Prüfen', schema: BEFUNDE })))).filter(Boolean)

phase('Nacharbeit')
const nacharbeit = await agent(GEMEINSAM + `
Auftrag NACHARBEIT: Alle Befunde „hoch“ und „mittel“ umsetzen, „niedrig“ wo sinnvoll; was nicht umgesetzt wird, begründen. Danach: pruefen.mjs index.html --schritte --optional (0 Fehler), --nur f08 --schritte --live-werte 3,1,7,0,2 in editorial/bento/keynote; node werkzeuge/live-abstimmung-test.mjs (alle Prüfungen bestehen). Exporte nach AUTOREN.md §15 neu erzeugen und nach export/ kopieren (PDF 22 Seiten ohne 01b, 23 Folienbilder, Übersicht mit --stand 20.10.2026); f08 und f10 als Bild ansehen. AUTOREN.md-Abschnitt zur Änderung vervollständigen (Prüfergebnisse, offen). Für Yannick eine kurze Liste: was Elias und Lukas prüfen bzw. liefern müssen, was sich im Sprechtext geändert hat. Kein Commit, ki-nachweis/ nicht ändern.
Berichte:
` + JSON.stringify({ bau, pruefungen }, null, 1), { label: 'nacharbeit', phase: 'Nacharbeit', schema: {
  type: 'object',
  properties: {
    umgesetzt: { type: 'array', items: { type: 'string' } },
    nicht_umgesetzt: { type: 'array', items: { type: 'string' } },
    tests: { type: 'string' },
    fuer_yannick: { type: 'array', items: { type: 'string' } },
  },
  required: ['umgesetzt', 'nicht_umgesetzt', 'tests', 'fuer_yannick'],
} })

return { bau, pruefungen, nacharbeit }
