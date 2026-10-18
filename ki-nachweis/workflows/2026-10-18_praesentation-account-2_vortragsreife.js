export const meta = {
  name: 'praesentation-account-2-vortragsreife',
  description: 'Account 2: Präsentation Fallstudie 1 (HOLY) auf Vortragsreife prüfen – 8 Blickwinkel, Gegenprüfung je Blickwinkel, Vollständigkeitsprüfung, Prüfbericht VORTRAGSREIFE.md (nur lesen, keine Konflikte mit D12 von Account 1)',
  phases: [
    { title: 'Prüfen', detail: '8 Prüfer: Aufgabe & Bewertung, Storyline, Vortrag & Zeit, Rückfragen, Fakten, Technik, Live-Elemente, Visualisierung' },
    { title: 'Gegenprüfen', detail: 'je Blickwinkel ein Gegenprüfer, der die Befunde zu widerlegen versucht' },
    { title: 'Vollständigkeit', detail: 'Was fehlt? Fehlende Prüfungen selbst ausführen, dann gegenprüfen' },
    { title: 'Bericht', detail: 'VORTRAGSREIFE.md schreiben' },
  ],
}

// Account 2, 18.10.2026 – Paket P1 nach „Alle Kapazitäten auf die aktuelle Präsentation erstmal“ (A2-36).
// Nur lesen: Die Prüfer ändern nichts; einzige neue Datei ist der Bericht. Account 1 arbeitet parallel (D12).

const P = 'fallstudie-1-brand-persona/praesentation'
const datum = (args && args.datum) || '18.10.2026'

const GEMEINSAM = `
Kontext: Studentische Gruppenarbeit (Modul Unternehmenskommunikation, Prof. Dr. Daniel Stenger, HS Kaiserslautern), Fallstudie 1 „Brand Persona & Markenidentität“, Marke HOLY. Gruppe: Yannick Heisler, Elias Knauber, Lukas Welker. Repository /home/user/Unternehmens-Kommunikation, Branch praesentation-account-2 (enthält den aktuellen master). Heute ist ${datum}; Präsentation Mo 26.10.2026 (15 Minuten laut README.md), Generalprobe So 25.10.2026 (fallstudie-1-brand-persona/arbeitsplan.md, Tagesplan).
Die Web-Präsentation: ${P}/index.html (alle Folien; Daten je Folie in <script type="application/json" class="daten">, Sprechtext in <aside class="notizen">, Kästen „FOLIE xx“ als HTML-Kommentar, Sollzeit je Folie in data-zeit [Sekunden], Bündel in data-buendel), Gestaltung ${P}/css/, Verhalten ${P}/js/ (deck.js, komponenten.js, folien/*.js), Marke ${P}/marke.js, Bedienung und Regeln ${P}/LIESMICH.md, Quellen ${P}/QUELLEN.md, Entstehung ${P}/AUTOREN.md, Exporte ${P}/export/. Hauptfolien: f01, f01b (optional), f02, f03, f04, f05, f06, f07, f08, f08b, f09, f09b, f10, f11, f12; Backup b1–b8. Summe data-zeit der Hauptfolien ohne f01b = 840 s (14:00).
Rollen (arbeitsplan.md): Bündel A (f01–f05, b1–b3, b7, b8) Yannick; Bündel B (f06–f08b, b4, b5) Lukas; Bündel C (f09–f11, b6) Elias; Folie 10 (Markensteuerrad) präsentiert Elias, die Synthese leitet Yannick.
Bewertung (README.md, Abschnitt „Bewertung“): Fallstudienbearbeitung 70 % (Problemverständnis & Fokussierung 15 %, Anwendung von Konzepten & Modellen 20 %, Analyse & Argumentation 20 %, Qualität der Lösung/Empfehlung 15 %), Präsentation 30 % (Inhaltliche Vermittlung & Präsentationsstil – verständlich, prägnant, adressatengerecht, souverän bei Rückfragen 7,5 %; Visualisierung & Foliengestaltung 7,5 %). Aufgabenstellung: fallstudie-1-brand-persona/aufgaben-im-detail.html und aufgabenuebersicht.html (Text der PDFs).
Ausarbeitungen (Stand master): fallstudie-1-brand-persona/markenkompetenz.md (A1), persona-steckbrief.md (A2, Entwurf), limbic-map.md (A3; Marco jetzt „Hedonisten“), persona-daten.md, persona-datenerhebung.md, dossier-buendel-b.md, folienentwuerfe.md, methoden.md, recherche/holy-recherche.md (Recherche-Dossier mit Faktenstatus, Anhang B).
WICHTIG – parallele Arbeit: Account 1 übernimmt gerade die Präsentation mit Workflow D12 (ki-nachweis/workflows/2026-10-17_praesentation-uebernahme.js; Änderungen noch nicht committet, hier also NICHT sichtbar). D12 ändert: f03 nach markenkompetenz.md, Kompetenz-Feld auf f10, f04 nach persona-steckbrief.md, f05 nach limbic-map.md (Hedonisten, Lücke −10), Persona-Pille f10, Sprechtexte f10/f11 (−20 → −10), b2 (echte Prompt-Log-Zeilen), b3, b7 (Jahr/Auflage Esch, Häusel), HOLY-Logos (f01, ggf. f03, f12, Startseite), alle „jetzt füllbaren“ Platzhalter, Mängel in fallstudie-1-brand-persona/grafiken/, Exporte, AUTOREN.md, LIESMICH.md (Stand, Abschnitt 12), Kästen „FOLIE xx“; dazu Prüfer für Darstellung, Inhalt (geänderte Folien) und Rechte. Account 1 wertet außerdem eine Gründerbefragung aus (D13, Ergebnis noch nicht im Repository). Befunde, die D12 sicher abdeckt, nur knapp nennen (zuständig „Account 1 (D12 deckt ab)“); wichtiger sind Befunde, die D12 NICHT abdeckt.
Zuständigkeiten: „Account 2 (sofort, ohne Konflikt)“ = technische oder gestalterische Korrekturen, die Account 2 auf seinem Branch machen kann, ohne mit D12 zu kollidieren (deck.js, komponenten.js, CSS-Komponenten, Werkzeuge, neue Dateien wie Checklisten; Tippfehler/Kennzeichnung auf Folien außerhalb von D12), aber KEINE inhaltlichen Änderungen an Bündel B/C (Lukas/Elias) und an den D12-Folien. „Account 1 (nach D12)“ = Inhalt der D12-Folien, den D12 laut Skript nicht abdeckt. „Yannick“/„Lukas“/„Elias“ = eigene Daten, Bilder, Freigaben, Inhalte ihres Bündels. „Gruppe“ = Generalprobe, Absprachen. „Prof. Stenger klären“ = offene Rahmenfragen.
Feste Regeln:
- NUR LESEN: Ändere keine Datei im Repository. Testausgaben, Hilfsskripte und Screenshots NUR unter ${P}/_test/account2-<dein Kürzel>/ (in .gitignore). Kein git commit/push/checkout/stash/reset.
- Öffne keine Dateien unter /root/.claude/uploads und keine Datei mit „NUR-Gruppenordner“ im Namen.
- Keine Zahl, kein Zitat, keine Quelle erfinden. Fakten über HOLY nur aus dem Dossier (mit Faktenstatus) oder den Ausarbeitungen. Gib bei jedem Befund die Herkunft an: Datei + Zeile/Datenfeld, Screenshot-Datei, Messung (Befehl), Websuche (URL, nur wenn ausdrücklich erlaubt) oder „Modellwissen“ (dann als solches kennzeichnen).
- Keine Modellbezeichnungen (Namen von KI-Modellen) in Dateien.
- Modellbegriffe nach Standardliteratur; es gibt kein Vorlesungsmaterial – der Abgleich mit den Vorlesungsfolien ist Sache der Gruppe.
Prüfwerkzeug: cd ${P} && PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core node werkzeuge/pruefen.mjs index.html --ausgabe _test/account2-<kürzel>/<name> --schritte [--nur f03,f05] [--optional] [--druck _test/account2-<kürzel>/x.pdf] [--thema bento|keynote] [--modus dunkel] [--skala 0.5] [--bewegung-reduziert] [--ohne-bilder]. Bericht: <ausgabe>/bericht.json. Screenshots (PNG) kannst du mit dem Read-Werkzeug ansehen. Für eigene Messungen (andere Fenstergrößen, Tastatur, zweites Fenster) darfst du kleine Node-Skripte mit playwright-core (require('/opt/node-tools/node_modules/playwright-core')) unter _test/account2-<kürzel>/ schreiben (Chromium: /opt/pw-browsers/chromium-1194/chrome-linux/chrome). Es laufen bis zu zwei Prüfungen gleichzeitig – verwende nur deinen eigenen Ausgabeordner.
Ergebnisform: Befunde mit ID (Kürzel-Nummer), Schwere (hoch = gefährdet Note oder Vortrag, mittel = sichtbarer Mangel, niedrig = Feinschliff), Folie, Stelle, Problem, Beleg, konkretem Vorschlag, Zuständigkeit und Herkunft. Erfinde keine Befunde; was gut ist, gehört in „staerken“. Dimensionsspezifisches Material (Tabellen, Kataloge) als Markdown in „zusatz“.
`

const ZUSTAENDIG = ['Account 2 (sofort, ohne Konflikt)', 'Account 1 (D12 deckt ab)', 'Account 1 (nach D12)', 'Yannick', 'Lukas', 'Elias', 'Gruppe', 'Prof. Stenger klären']
const BEFUND = {
  type: 'object',
  properties: {
    id: { type: 'string', description: 'Kürzel des Blickwinkels + Nummer, z. B. ZEIT-03' },
    schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
    folie: { type: 'string' },
    stelle: { type: 'string' },
    problem: { type: 'string' },
    beleg: { type: 'string' },
    vorschlag: { type: 'string' },
    zustaendig: { type: 'string', enum: ZUSTAENDIG },
    herkunft: { type: 'string', description: 'Datei/Zeile, Screenshot, Messung, Websuche (URL) oder Modellwissen' },
  },
  required: ['id', 'schwere', 'folie', 'stelle', 'problem', 'beleg', 'vorschlag', 'zustaendig', 'herkunft'],
}
const BEFUNDE = {
  type: 'object',
  properties: {
    dimension: { type: 'string' },
    befunde: { type: 'array', items: BEFUND },
    staerken: { type: 'array', items: { type: 'string' } },
    gesamturteil: { type: 'string' },
    zusatz: { type: 'string', description: 'dimensionsspezifisches Material als Markdown (Tabellen, Kataloge)' },
  },
  required: ['dimension', 'befunde', 'staerken', 'gesamturteil', 'zusatz'],
}
const URTEILE = {
  type: 'object',
  properties: {
    urteile: { type: 'array', items: { type: 'object', properties: {
      id: { type: 'string' },
      urteil: { type: 'string', enum: ['bestätigt', 'teilweise', 'widerlegt'] },
      schwere_neu: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
      zustaendig_neu: { type: 'string', enum: ZUSTAENDIG },
      begruendung: { type: 'string' },
      vorschlag_korrigiert: { type: 'string', description: 'korrigierter Vorschlag oder der ursprüngliche, wenn er stimmt' },
    }, required: ['id', 'urteil', 'schwere_neu', 'zustaendig_neu', 'begruendung', 'vorschlag_korrigiert'] } },
    zusatz_pruefung: { type: 'string', description: 'Prüfung des Zusatzmaterials: falsche Angaben, fehlende Fundstellen, Korrekturen' },
  },
  required: ['urteile', 'zusatz_pruefung'],
}

const DIMENSIONEN = [
  { key: 'aufgabe', kuerzel: 'AUF', titel: 'Aufgabe & Bewertung', prompt: `Auftrag AUFGABE & BEWERTUNG (Kürzel AUF, Ausgabeordner _test/account2-auf/):
1. Lies die Aufgabenstellung (fallstudie-1-brand-persona/aufgaben-im-detail.html, aufgabenuebersicht.html) und zerlege sie in prüfbare Teilanforderungen (Pflichtinhalte, Methoden, Modelle, Formvorgaben wie Dauer, Backup, KI-Nachweis).
2. Ordne jeder Teilanforderung die Folie(n) und Fundstellen zu, die sie erfüllen, und bewerte: erfüllt / teilweise / fehlt / nur mit Beispieldaten. Berücksichtige, was D12 gerade nachzieht.
3. Schätze je Bewertungskriterium (README.md) eine Punktzahl 0–10 für den jetzigen Stand und für den Stand „nach D12 + echte Daten von Lukas und Elias“, jeweils mit Begründung, und nenne die konkreten Hebel zur nächsthöheren Stufe (Sehr gut 9–10). Achte besonders auf „Problemverständnis & Fokussierung“ (Wird eine Problemstellung von HOLY formuliert? Wird Wesentliches priorisiert?) und „Qualität der Lösung“ (Sind die Empfehlungen auf f11 konkret, begründet, realistisch und aus der Analyse abgeleitet?).
4. Befunde für jede Lücke. In „zusatz“: Tabelle Teilanforderung | Folie(n) | Status | Bemerkung, und Tabelle Kriterium | Gewicht | Punkte jetzt | Punkte nach D12+Daten | Hebel (Punkte ausdrücklich als Schätzung kennzeichnen).` },
  { key: 'storyline', kuerzel: 'STO', titel: 'Storyline & Argumentation', prompt: `Auftrag STORYLINE & ARGUMENTATION (Kürzel STO, Ausgabeordner _test/account2-sto/): Lies alle Hauptfolien (Titel, Daten-JSON, Notizen) in Reihenfolge und sieh dir ihre Endzustände an (pruefen.mjs ohne --schritte mit --optional --skala 0.5 genügt; danach die Screenshots ansehen).
1. Roter Faden: Gibt es am Anfang eine klare Leitfrage/Problemstellung, die am Ende beantwortet wird? Führt jede Folie logisch zur nächsten (Übergänge in den Notizen)? Sind die Titel Kernaussagen (nicht nur Themen)?
2. Argumentationskette Analyse → Synthese (f10 Markensteuerrad) → Empfehlungen (f11): Lässt sich jede Empfehlung auf einen konkreten Befund zurückführen? Gibt es Befunde ohne Konsequenz oder Empfehlungen ohne Befund? Widersprüche zwischen Folien (z. B. Persona-Werte, Tonalität, Fit)?
3. Fokussierung: Was ist verzichtbar oder doppelt (z. B. f01b optional, f08b, f09b)? Ist das Verhältnis Methodik zu Ergebnis für 15 Minuten angemessen?
4. Einstieg und Schluss: Bleibt eine Kernbotschaft hängen? Wird die Brücke zum Publikum geschlagen?
In „zusatz“: die Argumentationskette als Liste „Folie → Kernaussage → Beleg → führt zu“ und eine Liste der Lücken in der Kette.` },
  { key: 'zeit', kuerzel: 'ZEIT', titel: 'Vortrag & Zeit', prompt: `Auftrag VORTRAG & ZEIT (Kürzel ZEIT, Ausgabeordner _test/account2-zeit/):
1. Für jede Hauptfolie: Wortzahl der Notizen (nur der gesprochene Sprechtext; Belegabsätze/Quellenhinweise getrennt zählen – sieh dir an, wie die Notizen aufgebaut sind; zähle per Skript, nicht geschätzt), Sprechzeit bei 120 und 140 Wörtern/Minute, data-zeit, Anzahl der Animationsschritte (data-schritte bzw. Schritte laut pruefen.mjs), Live-Elemente (Umfrage, Wortwolke) mit realistischer Zusatzzeit, Sprecher laut Rollenverteilung. Rechne Summen und Puffer gegen 15:00.
2. Sprecherwechsel: Wie oft wechselt der Sprecher? Wo stehen Übergabesätze? Vorschlag für einen Sprecherplan mit Übergabesätzen (nur aus vorhandenen Inhalten, keine neuen Fakten).
3. Risiken: Folien, deren Sprechtext nicht in die Sollzeit passt; Folien mit zu vielen Klickschritten; Stellen, an denen Beispieldaten erklärt werden müssen; was zu tun ist, wenn die Live-Umfrage nicht funktioniert oder zu lange dauert; was gekürzt wird, wenn die Zeit knapp wird (Kürzungsplan).
4. Prüfe die Zeitanzeige der Referentenansicht (deck.js: Sollzeit, Timer) gegen die Summe.
Offene Fragen an den Prof (zählen Rückfragen zur Zeit?) aus arbeitsplan.md berücksichtigen.
In „zusatz“: Tabelle Folie | Sprecher | Wörter | Zeit bei 130 W/min | data-zeit | Schritte | Abweichung, Summen, Sprecherplan mit Übergabesätzen, Kürzungsplan.` },
  { key: 'rueckfragen', kuerzel: 'FRAGE', titel: 'Rückfragen & Verteidigung', prompt: `Auftrag RÜCKFRAGEN & VERTEIDIGUNG (Kürzel FRAGE, Ausgabeordner _test/account2-frage/): Versetze dich in Prof. Dr. Stenger und eine kritische Zuhörerschaft. „Souverän bei Rückfragen“ ist Teil der Note.
1. Erstelle 30–40 realistische, möglichst unbequeme Rückfragen, verteilt über alle Folien und Querschnittsthemen: Methodik (Stichprobe, simulierte Befragte, KI-Nutzung, Beispieldaten), Modelle (Markensteuerrad nach Esch, Brand Persona, Limbic Map – Rechte und Anwendung, Repertory Grid, Laddering/Means-End, Aaker-Tonalität), Zahlen und Quellen (Herkunft, Aktualität, Faktenstatus im Dossier), Persona-Validität, Fit-Bewertungen, Umsetzbarkeit und Priorisierung der Empfehlungen, Abgrenzung zu Wettbewerbern, „Was würdet ihr HOLY als Erstes raten?“.
2. Prüfe für jede Frage, ob die Gruppe sie mit vorhandenem Material beantworten kann: Fundstelle (Backup-Folie, Ausarbeitung + Abschnitt, Dossier + Faktenstatus). Formuliere eine knappe Antwortskizze (2–3 Sätze) NUR aus diesen Fundstellen; wo nichts vorhanden ist, schreibe „keine belastbare Antwort im Material“ und mache daraus einen Befund.
3. Prüfe, ob die Backup-Folien b1–b8 die wahrscheinlichsten Fragen abdecken und ob man sie im Vortrag schnell erreicht (LIESMICH.md: Sprung zu Backup).
In „zusatz“: den Fragenkatalog als Tabelle Nr. | Frage | Folie | Antwortskizze | Fundstelle | belastbar ja/teilweise/nein.` },
  { key: 'fakten', kuerzel: 'FAKT', titel: 'Fakten & Kennzeichnung außerhalb von D12', prompt: `Auftrag FAKTEN & KENNZEICHNUNG AUSSERHALB VON D12 (Kürzel FAKT, Ausgabeordner _test/account2-fakt/): Prüfe Satz für Satz und Wert für Wert die Folien f01, f01b, f02, f06, f07, f08, f08b, f09, f09b, f12 sowie b1, b4, b5, b6, b8 (Daten-JSON, sichtbare Texte, fest eingebaute Texte in js/folien/*.js, Notizen, Fußzeilen/Quellenzeilen) gegen recherche/holy-recherche.md (Faktenstatus), dossier-buendel-b.md, persona-daten.md und QUELLEN.md:
- Jede Zahl, jedes Zitat, jedes Datum: Quelle vorhanden, korrekt übernommen, Faktenstatus beachtet („laut Unternehmen“, „Schätzung“)?
- Beispieldaten von Bündel B und C: überall gekennzeichnet (Pille, Fußzeile, Notiz)? Werden Beispieldaten im Sprechtext wie echte Ergebnisse formuliert? (Gefahr für Note und Glaubwürdigkeit.)
- Quellennummern in Fußzeilen ↔ QUELLEN.md und b7/b8 konsistent?
- Rechnungen (Summen, Prozente, Differenzen) nachrechnen.
- Widersprüche zwischen diesen Folien und den neuen Ausarbeitungen (z. B. Persona „Abenteurer“ statt „Hedonisten“, Kompetenz-Angaben) auch AUSSERHALB der D12-Folien (f02, f06–f09b, f12, b1, b4–b6, b8)?
Für f03, f04, f05, f10, f11, b2, b3, b7 nur Widersprüche melden, die D12 laut Skript NICHT behebt.
In „zusatz“: Tabelle Folie | geprüfte Angaben (Anzahl) | davon mit Quelle | Abweichungen.` },
  { key: 'technik', kuerzel: 'TECH', titel: 'Technik im Hörsaal', prompt: `Auftrag TECHNIK IM HÖRSAAL (Kürzel TECH, Ausgabeordner _test/account2-tech/): Der Vortrag läuft vermutlich auf einem fremden Rechner (Hochschul-PC oder eigener Laptop) am Beamer, offline von USB-Stick oder Festplatte (file://). Prüfe mit eigenen kleinen playwright-core-Skripten:
1. Fenstergrößen/Beamer: 1024×768 (4:3), 1280×720, 1280×800, 1366×768, 1920×1080, 1920×1200, 2560×1440 und 3840×2160 (deviceScaleFactor 1, bei 1920×1080 zusätzlich 2): Wird die Bühne korrekt skaliert und zentriert, bleibt nichts abgeschnitten, sind Texte scharf? Screenshots einer Text- und einer Diagrammfolie je Größe ansehen.
2. Pfade: Kopiere die Präsentation (nur den Ordner ${P} ohne _test) nach _test/account2-tech/Ordner mit Leerzeichen und Umlauten äöü/ und öffne sie dort per file:// – lädt alles (Schriften, Bilder, Skripte)? Konsolenfehler?
3. Bedienung: Pfeiltasten, Leertaste, Bild auf/ab (Presenter-Fernbedienungen senden meist PageUp/PageDown, manche auch „b“ oder „.“ für Schwarzbild), Pos1/Ende, Sprünge (laut LIESMICH.md), Vollbild, Esc. Funktioniert alles wie in LIESMICH.md beschrieben?
4. Robustheit: zufällige Klickfolgen vor/zurück (z. B. 200 Schritte) ohne Fehler oder hängende Animationen? Neu laden mitten im Vortrag – bleibt die Position? Was passiert bei sehr schnellem Weiterklicken?
5. Notfall: Ist export/praesentation.pdf vollständig und aktuell (Seitenzahl, Stand vs. index.html)? Läuft das Deck weiter, wenn auf einer Folie ein JavaScript-Fehler auftritt? Ist dokumentiert, was im Notfall zu tun ist (LIESMICH.md)?
6. Weitere Browser: Nur Chromium ist installiert. Bewerte aus dem Code (Modellwissen, als solches kennzeichnen), welche verwendeten Funktionen in Firefox, Safari oder älterem Edge/Chrome fehlen könnten (View Transitions, OKLCH, :has(), Container Queries, BroadcastChannel usw.) und ob es Rückfallebenen gibt.
In „zusatz“: Tabelle Prüfung | Ergebnis | Beleg (Skript/Screenshot), und eine kurze Technik-Checkliste für den Hörsaal (vorher prüfen, mitnehmen, Notfallplan).` },
  { key: 'live', kuerzel: 'LIVE', titel: 'Live-Elemente & Referentenansicht', prompt: `Auftrag LIVE-ELEMENTE & REFERENTENANSICHT (Kürzel LIVE, Ausgabeordner _test/account2-live/): Prüfe alles, was im Hörsaal interaktiv passiert, mit eigenen playwright-core-Skripten und aus dem Code:
1. Live-Umfrage (f08) und Live-Wortwolke (f01b): Wie kommen Stimmen/Wörter ins Deck (Code lesen: js/folien/*, komponenten.js, marke.js-Einstellungen, LIESMICH.md)? Wohin führt der QR-Code genau (URL aus dem Code ableiten oder dekodieren)? Funktioniert das ohne Internet bzw. ohne eingerichteten Umfrage-Link? Welche Rückfallebene gibt es (Beispieldaten, manuelle Eingabe, Handzeichen)? Ist das auf der Folie ehrlich gekennzeichnet?
2. Referentenansicht: öffnen wie in LIESMICH.md beschrieben (zweites Fenster/Tab, postMessage/BroadcastChannel) – unter file:// in Chromium testen: Synchronisieren sich Folie und Schritt in beide Richtungen? Notizen, nächste Folie, Timer und Sollzeit korrekt? Was passiert, wenn die Referentenansicht neu geladen oder zuerst geöffnet wird? Bewerte aus dem Code (Modellwissen kennzeichnen), ob das in anderen Browsern unter file:// funktioniert (z. B. behandelt Firefox file://-Ursprünge anders).
3. Bildschirmaufbau im Hörsaal: erweiterter Desktop (Beamer = Folien, Laptop = Referentenansicht) – ist die Anleitung in LIESMICH.md ausreichend und richtig?
4. Wortwolke/Umfrage-Ergebnisse: Werden Eingaben gefiltert (unangemessene Wörter live am Beamer)? Datenschutz (Daten von Kommilitonen)?
In „zusatz“: Bedienablauf für den Vortrag (Schritt für Schritt, inkl. Aufbau, Live-Teile, Notfall) und Tabelle Prüfung | Ergebnis | Beleg.` },
  { key: 'gestaltung', kuerzel: 'VIS', titel: 'Visualisierung, Lesbarkeit & Beamer', prompt: `Auftrag VISUALISIERUNG, LESBARKEIT & BEAMER (Kürzel VIS, Ausgabeordner _test/account2-vis/): Kriterium „Visualisierung & Foliengestaltung – klar, lesbar, professionell, Visualisierungen stützen die Argumentation“.
1. Führe pruefen.mjs --schritte --optional aus (Ausgabe _test/account2-vis/hell) und --modus dunkel --skala 0.5 (…/dunkel); lies bericht.json (Schriftgrößen, Kontraste, Wortbudget-Warnungen: zuletzt f03 44, f04 44, f10 48, f11 55 Wörter).
2. Sieh dir die Endzustände aller Haupt- und Backupfolien selbst an. Je Folie: Stützt die Visualisierung die Kernaussage im Titel? Passt der Diagrammtyp? Sind Achsen, Skalen, Legenden, Einheiten, Quellen vorhanden und lesbar? Ist die Beispieldaten-Kennzeichnung sichtbar, aber nicht störend? Ist die Gestaltung über alle Folien konsistent (Raster, Abstände, Farben, Typografie)?
3. Beamer-Bedingungen simulieren (eigenes playwright-core-Skript): ausgewaschener Beamer (z. B. CSS-Filter contrast(0.6) brightness(1.2) auf html), Rot-Grün-Sehschwäche (Deuteranopie-/Protanopie-Matrix als SVG-Filter) und Betrachtung von hinten (Screenshot auf 25 % verkleinert). Welche Folien verlieren dann ihre Aussage (Farbe als einziger Unterschied, zu dünne Linien, zu kleine Beschriftungen)? Empfehlung hell oder dunkel für den Hörsaal mit Begründung.
4. Kleinste Schriftgrößen je Folie in Pixeln bei 1920×1080 (Faustregel aus dem Modellwissen, als solche kennzeichnen: etwa ≥ 24 px bei 1080p für Lesbarkeit von hinten).
D12 ändert f03, f04, f05, f10, f11, b2, b3, b7 und Logos – Befunde dort nur, wenn sie das Design-System/Komponenten betreffen (Ursache in css/ oder js/komponenten.js bzw. js/folien/*), nicht den Inhalt.
In „zusatz“: Tabelle Folie | Kernaussage gestützt? | kleinste Schrift (px) | Beamer/Sehschwäche robust? | Bemerkung, und die Empfehlung hell/dunkel.` },
]

const gegenpruefen = (titel, key, ergebnis) => agent(`${GEMEINSAM}
Auftrag GEGENPRÜFUNG „${titel}“ (Ausgabeordner _test/account2-gegen-${key}/): Ein Prüfer hat die folgenden Befunde und dieses Zusatzmaterial geliefert. Versuche, jeden Befund zu WIDERLEGEN: Öffne die genannte Stelle selbst (Datei/Zeile, Daten-JSON, Screenshot; Messungen bei Bedarf selbst wiederholen). Urteil je Befund: „bestätigt“ (Problem besteht wie beschrieben), „teilweise“ (besteht, aber Beschreibung, Schwere, Zuständigkeit oder Vorschlag stimmen nicht – korrigieren) oder „widerlegt“ (besteht nicht, beruht auf Fehllesen oder einer nicht belegbaren Angabe). Kannst du die Stelle nicht belegen, urteile „widerlegt“. Prüfe auch: Stimmt die Zuständigkeit (deckt D12 das laut Skript ab? darf Account 2 das ohne Konflikt und ohne Eingriff in Inhalte von Bündel B/C ändern?), ist der Vorschlag umsetzbar, ohne Fakten zu erfinden? Gib für JEDEN Befund genau ein Urteil mit derselben ID zurück.
Prüfe außerdem das Zusatzmaterial gründlich (mindestens ein Drittel der Zeilen selbst nachprüfen; Zahlen nachrechnen; Fundstellen öffnen): falsche Angaben, fehlende Fundstellen, erfundene Inhalte → in „zusatz_pruefung“ mit konkreter Korrektur (Zeile, falsch, richtig).
Befunde und Zusatzmaterial (JSON):
${JSON.stringify(ergebnis, null, 1)}`,
  { label: `gegen:${key}`, phase: 'Gegenprüfen', schema: URTEILE })

function zusammenfuehren (ergebnis, gegen) {
  const urteile = new Map(gegen.urteile.map(u => [u.id, u]))
  return ergebnis.befunde.map(b => {
    const u = urteile.get(b.id)
    if (!u) return { ...b, urteil: 'ungeprüft', gegenpruefung: 'kein Urteil des Gegenprüfers' }
    return { ...b, urteil: u.urteil, schwere: u.schwere_neu, zustaendig: u.zustaendig_neu,
      vorschlag: u.vorschlag_korrigiert || b.vorschlag, gegenpruefung: u.begruendung }
  })
}

phase('Prüfen')
const ergebnisse = await pipeline(
  DIMENSIONEN,
  d => agent(`${GEMEINSAM}\n${d.prompt}`, { label: `pruefen:${d.key}`, phase: 'Prüfen', schema: BEFUNDE })
    .then(r => { if (!r) throw new Error('Prüfer ' + d.key + ' gescheitert'); return r }),
  (r, d) => gegenpruefen(d.titel, d.key, r)
    .then(g => {
      if (!g) throw new Error('Gegenprüfer ' + d.key + ' gescheitert')
      const befunde = zusammenfuehren(r, g)
      log(`${d.titel}: ${befunde.length} Befunde, ${befunde.filter(b => b.urteil === 'widerlegt').length} widerlegt`)
      return { key: d.key, titel: d.titel, befunde, staerken: r.staerken, gesamturteil: r.gesamturteil, zusatz: r.zusatz, zusatz_pruefung: g.zusatz_pruefung }
    }),
)
const fehlend = DIMENSIONEN.filter((d, i) => !ergebnisse[i]).map(d => d.key)
if (fehlend.length) throw new Error('Nicht abgeschlossen: ' + fehlend.join(', ') + ' – Workflow mit resume fortsetzen')

phase('Vollständigkeit')
const kritik = await agent(`${GEMEINSAM}
Auftrag VOLLSTÄNDIGKEIT (Kürzel VOLL, Ausgabeordner _test/account2-voll/): Acht Prüfer haben die Präsentation unter je einem Blickwinkel geprüft, je ein Gegenprüfer hat ihre Befunde bestätigt oder widerlegt (Feld „urteil“). Ergebnisse (JSON):
${JSON.stringify(ergebnisse, null, 1)}

Frage: Was fehlt? – Folien, die keiner angesehen hat; Bewertungskriterien ohne Prüfung; Behauptungen der Prüfer, die nicht belegt sind; Prüfungen, die angekündigt, aber nicht ausgeführt wurden; Widersprüche zwischen den Prüfern (z. B. Zeitangaben, Zuständigkeiten, Empfehlung hell/dunkel); naheliegende Risiken für den 26.10. (Organisation: Wer bringt welchen Rechner mit, Adapter HDMI/USB-C, Generalprobe, Freigaben, Rechte an Bildern, Abgabe der Datei, Einzelreflexion).
Führe die wichtigsten fehlenden Prüfungen selbst aus (nur lesen) und gib NEUE Befunde zurück (keine Wiederholungen vorhandener Befunde). In „zusatz“: Liste der Widersprüche zwischen Prüfern mit deiner Auflösung (Beleg).`,
  { label: 'vollstaendigkeit', phase: 'Vollständigkeit', schema: BEFUNDE })
if (!kritik) throw new Error('Vollständigkeitsprüfung gescheitert – Workflow mit resume fortsetzen')
const kritikGegen = await gegenpruefen('Vollständigkeit', 'voll', kritik)
if (!kritikGegen) throw new Error('Gegenprüfung Vollständigkeit gescheitert – Workflow mit resume fortsetzen')
const kritikBefunde = zusammenfuehren(kritik, kritikGegen)
log(`Vollständigkeit: ${kritikBefunde.length} neue Befunde, ${kritikBefunde.filter(b => b.urteil === 'widerlegt').length} widerlegt`)
const alle = [...ergebnisse, { key: 'voll', titel: 'Vollständigkeit', befunde: kritikBefunde, staerken: kritik.staerken, gesamturteil: kritik.gesamturteil, zusatz: kritik.zusatz, zusatz_pruefung: kritikGegen.zusatz_pruefung }]
const gueltig = alle.flatMap(e => e.befunde).filter(b => b.urteil !== 'widerlegt')
log(`Gesamt: ${gueltig.length} gültige Befunde (${gueltig.filter(b => b.schwere === 'hoch').length} hoch, ${gueltig.filter(b => b.schwere === 'mittel').length} mittel, ${gueltig.filter(b => b.schwere === 'niedrig').length} niedrig)`)

phase('Bericht')
const bericht = await agent(`${GEMEINSAM}
Auftrag BERICHT: Schreibe den Prüfbericht ${P}/VORTRAGSREIFE.md (Deutsch, Markdown). Das ist die EINZIGE Datei, die du anlegen oder ändern darfst. Grundlage: alle Ergebnisse unten. Verwende nur bestätigte und teilweise bestätigte Befunde (Feld „urteil“; bei „teilweise“ gelten die korrigierten Felder schwere/zustaendig/vorschlag und die Begründung „gegenpruefung“); widerlegte nur im Anhang (eine Zeile je Befund mit Grund). Zusatzmaterial nur in der Fassung nach Gegenprüfung: Was „zusatz_pruefung“ beanstandet, korrigieren oder weglassen.
Aufbau:
1. Kopf: Titel „Prüfbericht Vortragsreife – Fallstudie 1 (HOLY)“, Stand ${datum}, erstellt von Account 2 (KI-gestützt; Workflow ki-nachweis/workflows/2026-10-18_praesentation-account-2_vortragsreife.js, Nachweis ki-nachweis/ki-nachweis-account-2.md), Hinweis: geprüft wurde der Stand auf master vor Abschluss von D12 (Account 1) – Befunde zu D12-Folien vor Umsetzung gegen den neuen Stand prüfen.
2. Kurzfazit (höchstens 10 Zeilen): Ist die Präsentation vortragsreif? Die fünf wichtigsten Maßnahmen.
3. Einschätzung je Bewertungskriterium (Tabelle, als Schätzung gekennzeichnet).
4. Maßnahmenliste, gruppiert nach Zuständigkeit (Account 2 sofort · Account 1 nach D12 · Account 1 (D12 deckt ab, nur zur Kontrolle) · Yannick · Lukas · Elias · Gruppe · beim Prof klären), je Zeile: ID, Schwere, Folie, Problem, Maßnahme, Beleg. Innerhalb der Gruppen nach Schwere sortiert. Dubletten zwischen Prüfern zusammenführen (alle IDs nennen).
5. Zeit- und Sprecherplan (Tabelle, Summen, Übergabesätze, Kürzungsplan).
6. Rückfragen-Katalog mit Antwortskizzen und Fundstellen; Fragen ohne belastbare Antwort hervorheben.
7. Technik- und Ablauf-Checkliste für den Hörsaal (Aufbau, Live-Teile, Notfall).
8. Stärken (was so bleiben soll).
9. Anhang: Methode (8 Prüfer, je ein Gegenprüfer, Vollständigkeitsprüfung mit Gegenprüfung), widerlegte Befunde, Grenzen (nur Chromium; Beispieldaten B/C; D12 nicht sichtbar; Angaben aus Modellwissen gekennzeichnet).
Keine neuen Fakten, keine Modellbezeichnungen. Prüfe die Datei danach selbst auf Vollständigkeit (alle gültigen Befunde enthalten? Tabellen korrekt?).
Ergebnisse (JSON):
${JSON.stringify(alle, null, 1)}`,
  { label: 'bericht', phase: 'Bericht', schema: {
    type: 'object',
    properties: {
      datei: { type: 'string' },
      kurzfazit: { type: 'string' },
      top5: { type: 'array', items: { type: 'string' } },
      anzahl_nach_zustaendigkeit: { type: 'string' },
      anzahl_widerlegt: { type: 'number' },
    },
    required: ['datei', 'kurzfazit', 'top5', 'anzahl_nach_zustaendigkeit', 'anzahl_widerlegt'],
  } })
if (!bericht) throw new Error('Bericht gescheitert – Workflow mit resume fortsetzen')

return {
  bericht,
  dimensionen: alle.map(e => ({ key: e.key, titel: e.titel, gesamturteil: e.gesamturteil,
    befunde: e.befunde.length, widerlegt: e.befunde.filter(b => b.urteil === 'widerlegt').length })),
  befunde: gueltig,
}
