export const meta = {
  name: 'account-2-vortragsreife-fragerunde',
  description: 'Account 2 (Ü04): Präsentation Fallstudie 1 (HOLY) auf Vortragsreife prüfen (8 Blickwinkel mit Gegenprüfung, Vollständigkeit) und Fragerunde vorbereiten – nur lesen, zwei neue Dateien: praesentation/VORTRAGSREIFE.md und fragerunde.md',
  phases: [
    { title: 'Prüfen', detail: '8 Blickwinkel; Rückfragen mit zwei Fragensammlern (Prof. Stenger, Publikum)' },
    { title: 'Gegenprüfen', detail: 'je Blickwinkel ein Gegenprüfer; jede Antwort der Fragerunde an der Quelle' },
    { title: 'Vollständigkeit', detail: 'Was fehlt? Fehlende Prüfungen und Fragen ergänzen, gegenprüfen' },
    { title: 'Berichte', detail: 'VORTRAGSREIFE.md und fragerunde.md schreiben, dann Abnahme gegen die Anforderungen aus Ü04' },
  ],
}

// Account 2, 19.10.2026 – Übergabe Ü04 von Account 1 (KI-Nachweis Account 2: A2-39, Delegation A2-D04).
// Vorlage: 2026-10-18_praesentation-account-2_vortragsreife.js (A2-D03, abgebrochen, prüfte den Stand vor D12).
// Nur lesen: Die Prüfer ändern nichts; neu entstehen nur die zwei Dateien aus Ü04.

const P = 'fallstudie-1-brand-persona/praesentation'
const F = 'fallstudie-1-brand-persona'
const datum = (args && args.datum) || '19.10.2026'

const GEMEINSAM = `
Kontext: Studentische Gruppenarbeit (Modul Unternehmenskommunikation, Prof. Dr. Daniel Stenger, HS Kaiserslautern), Fallstudie 1 „Brand Persona & Markenidentität“, Marke HOLY. Gruppe: Yannick Heisler, Elias Knauber, Lukas Welker. Repository /home/user/Unternehmens-Kommunikation, Branch praesentation-account-2 (enthält den aktuellen master). Heute ist ${datum}; Präsentation Mo 26.10.2026 (15 Minuten laut README.md), Generalprobe So 25.10.2026. Termine und Übergaben: ${F}/arbeitsplan.md (Abschnitte „Übergaben (kritischer Pfad)“ und „Tagesplan“: Zwischenstand Di 20.10., Tonalität B→C Mi 21.10., Synthese Do 22.10., eigene Folien fertig Fr 23.10., Gesamtdeck Sa 24.10., Generalprobe So 25.10.).
Die Web-Präsentation: ${P}/index.html (alle Folien; Daten je Folie in <script type="application/json" class="daten">, Sprechtext in <aside class="notizen">, Kästen „FOLIE xx“ als HTML-Kommentar, Sollzeit je Folie in data-zeit [Sekunden], Bündel in data-buendel), Gestaltung ${P}/css/, Verhalten ${P}/js/ (deck.js, komponenten.js, folien/*.js), Marke ${P}/marke.js, Bedienung ${P}/LIESMICH.md, Quellen ${P}/QUELLEN.md, Entstehung ${P}/AUTOREN.md, Exporte ${P}/export/. Hauptfolien: f01, f01b (optional), f02, f03, f04, f05, f06, f07, f08, f08b, f09, f09b, f10, f11, f12; Backup b1–b8. Sollzeit: Summe data-zeit der Hauptfolien ohne f01b = 840 s (14:00).
Rollen (arbeitsplan.md): Bündel A (f01–f05, b1–b3, b7, b8) Yannick; Bündel B (f06–f08b, b4, b5) Lukas; Bündel C (f09–f11, b6) Elias; Folie 10 (Markensteuerrad) präsentiert Elias, die Synthese leitet Yannick.
Bewertung (README.md, Abschnitt „Bewertung“): Fallstudienbearbeitung 70 % (Problemverständnis & Fokussierung 15 %, Anwendung von Konzepten & Modellen 20 %, Analyse & Argumentation 20 %, Qualität der Lösung/Empfehlung 15 %), Präsentation 30 % (Inhaltliche Vermittlung & Präsentationsstil – verständlich, prägnant, adressatengerecht, souverän bei Rückfragen 7,5 %; Visualisierung & Foliengestaltung 7,5 %). Aufgabenstellung: ${F}/aufgaben-im-detail.html und aufgabenuebersicht.html.
Ausarbeitungen: ${F}/markenkompetenz.md (A1), persona-steckbrief.md (A2), limbic-map.md (A3; Marco „Hedonisten“), gruenderbefragung.md (Gründerbefragung, Kürzel GB = „Horsch 2026 (GB)“, Name freigegeben), persona-daten.md, persona-datenerhebung.md, dossier-buendel-b.md, folienentwuerfe.md (mit Abschnitten „Mögliche Rückfragen“), methoden.md, recherche/holy-recherche.md (Recherche-Dossier mit Faktenstatus, Anhang B). KI-Nachweis: ki-nachweis/ki-nachweis.md (Abschnitt 4 „Wie dieser Nachweis entsteht“) und ki-nachweis/ki-nachweis-account-2.md.
Stand: Account 1 hat die Präsentation übernommen (D12: Folien 03/05/10 mit A1/A3, Logos 01/09b/12, Backups) und die Gründerbefragung eingebaut (D14; Folie 03 Zusatz „auch laut Gründer Mathias Horsch (Befragung 10/2026)“, Folie 04 „Kern-Persona · Hypothese · fiktiv“). Die Beispieldaten von Bündel B und C (Folien 06–08b, 09–11, b4–b6) sind bekannt und gekennzeichnet – nicht jede Beispielzahl als eigenen Fehler melden, sondern bewerten, was davon bis 26.10. echt sein MUSS (siehe Auftrag Aufgabe & Bewertung).
AUSGENOMMEN – Account 1 arbeitet gerade daran (D15, D16); NICHT prüfen, NICHT bewerten, KEINE Befunde dazu: (1) die Live-Abstimmung auf Folie 08 (QR-Code, abstimmen.html, live-abstimmung/, die Umfrage-Anbindung in js/komponenten.js, LIESMICH.md Abschnitt 6) – der übrige Inhalt von f08 (Analogien) gehört dazu; (2) die Bilder auf Folie 01 (Rätselbild) und Folie 04 (Persona-Bild) samt ihren Platzhalter-Hinweisen.
Regeln für Inhalte: Gründeraussagen immer als Selbstauskunft („laut Gründer Mathias Horsch (Befragung 10/2026)“); „95 %“ nur mit dem Zusatz „laut Gründer, Datengrundlage nicht offengelegt“. Statista-Werte nur, wie sie in persona-daten.md stehen. Fakten über HOLY nur aus dem Dossier (Faktenstatus beachten) oder den Ausarbeitungen. Keine Zahl, kein Zitat, keine Quelle erfinden. Modellbegriffe nach Standardliteratur; es gibt kein Vorlesungsmaterial – der Abgleich mit den Vorlesungsfolien ist Sache der Gruppe.
Feste Regeln:
- NUR LESEN: Ändere keine Datei im Repository. Testausgaben, Hilfsskripte und Screenshots NUR unter ${P}/_test/account2-<dein Kürzel>/ (in .gitignore, wird nicht eingecheckt). Kein git commit/push/checkout/stash/reset/merge.
- Öffne keine Dateien unter /root/.claude/uploads, keine Datei mit „NUR-Gruppenordner“ im Namen und nicht den Google-Drive-Gruppenordner (keine Drive-Werkzeuge).
- Keine Modellbezeichnungen (Namen von KI-Modellen) in Dateien.
- Gib bei jedem Befund die Herkunft an: Datei + Zeile/Datenfeld, Screenshot-Datei, Messung (Befehl), Websuche (URL, nur wenn ausdrücklich erlaubt) oder „Modellwissen“ (dann als solches kennzeichnen).
Prüfwerkzeug: cd ${P} && PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core node werkzeuge/pruefen.mjs index.html --ausgabe _test/account2-<kürzel>/<name> --schritte [--nur f03,f05] [--optional] [--druck _test/account2-<kürzel>/x.pdf] [--thema bento|keynote] [--modus dunkel] [--skala 0.5] [--bewegung-reduziert] [--ohne-bilder]. Bericht: <ausgabe>/bericht.json. Screenshots (PNG) kannst du mit dem Read-Werkzeug ansehen. Für eigene Messungen (andere Fenstergrößen, Tastatur, zweites Fenster) darfst du kleine Node-Skripte mit playwright-core (require('/opt/node-tools/node_modules/playwright-core')) unter _test/account2-<kürzel>/ schreiben (Chromium: /opt/pw-browsers/chromium-1194/chrome-linux/chrome). Es laufen bis zu zwei Prüfungen gleichzeitig – verwende nur deinen eigenen Ausgabeordner.
Ergebnisform: Befunde mit ID (Kürzel-Nummer), Schwere (hoch = gefährdet Note oder Vortrag, mittel = sichtbarer Mangel, niedrig = Feinschliff), Dringlichkeit bis 26.10. (spätester sinnvoller Termin nach Tagesplan), Folie, Stelle (Datei + Datenfeld/Zeile), Problem, Beleg (bei allem Sichtbaren ein Screenshot unter ${P}/_test/account2-<kürzel>/… mit Pfad; sonst Datei + Zeile oder Rechnung), konkretem Vorschlag, Zuständigkeit und Herkunft. Zuständig: „Yannick“ (Bündel A, Synthese, KI-Nachweis), „Lukas“ (Bündel B), „Elias“ (Bündel C, Folie 10 vortragen), „Account 1 (technisch)“ (Änderungen an index.html, js/, css/, Exporten, LIESMICH/QUELLEN/AUTOREN), „Gruppe (alle)“ (Generalprobe, Absprachen), „Prof. Stenger klären“ (offene Rahmenfragen). Erfinde keine Befunde; was gut ist, gehört in „staerken“. Dimensionsspezifisches Material (Tabellen, Kataloge) als Markdown in „zusatz“.
`

const ZUSTAENDIG = ['Yannick', 'Lukas', 'Elias', 'Account 1 (technisch)', 'Gruppe (alle)', 'Prof. Stenger klären']
const DRINGLICHKEIT = ['sofort (bis Di 20.10., Zwischenstand)', 'bis Do 22.10. (Synthese)', 'bis Fr 23.10. (Folien final)', 'bis Sa 24.10. (Gesamtdeck)', 'bis So 25.10. (Generalprobe)', 'am 26.10. (Vortragstag)', 'nach Möglichkeit']
const BEFUND = {
  type: 'object',
  properties: {
    id: { type: 'string', description: 'Kürzel des Blickwinkels + Nummer, z. B. ZEIT-03' },
    schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
    dringlichkeit: { type: 'string', enum: DRINGLICHKEIT },
    folie: { type: 'string' },
    stelle: { type: 'string', description: 'Datei + Datenfeld/Zeile' },
    problem: { type: 'string' },
    beleg: { type: 'string', description: 'Screenshot-Pfad unter praesentation/_test/account2-…, Datei + Zeile oder Rechnung' },
    vorschlag: { type: 'string' },
    zustaendig: { type: 'string', enum: ZUSTAENDIG },
    herkunft: { type: 'string', description: 'Datei/Zeile, Screenshot, Messung, Websuche (URL) oder Modellwissen' },
  },
  required: ['id', 'schwere', 'dringlichkeit', 'folie', 'stelle', 'problem', 'beleg', 'vorschlag', 'zustaendig', 'herkunft'],
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
const FRAGE = {
  type: 'object',
  properties: {
    nr: { type: 'string', description: 'eindeutige Kennung, z. B. P-07 (Prof. Stenger) oder Q-03 (Publikum) oder V-02 (Vollständigkeit)' },
    frage: { type: 'string' },
    fragesteller: { type: 'string', enum: ['Prof. Stenger', 'Publikum'] },
    thema: { type: 'string', enum: ['Methode', 'Daten', 'Ergebnisse', 'Empfehlungen', 'KI-Nutzung', 'Modelle', 'Marke & Gründer'] },
    wahrscheinlichkeit: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
    folie: { type: 'string', description: 'Folie(n), auf die sich die Frage bezieht' },
    antwortet: { type: 'string', description: 'wer antwortet, nach Bündel: Yannick (A) / Lukas (B) / Elias (C), ggf. „Yannick, ergänzt von Elias“' },
    antwort: { type: 'string', description: '2–4 Sätze, mündlich formuliert, nur aus den Belegen' },
    beleg: { type: 'string', description: 'Folie/Backup/Ausarbeitung mit Abschnitt (und Faktenstatus bei Dossier-Fakten)' },
    fallstricke: { type: 'string', description: '„nicht sagen: …“ – was falsch, übertrieben oder unbelegt wäre' },
    belastbar: { type: 'string', enum: ['ja', 'teilweise', 'nein'] },
  },
  required: ['nr', 'frage', 'fragesteller', 'thema', 'wahrscheinlichkeit', 'folie', 'antwortet', 'antwort', 'beleg', 'fallstricke', 'belastbar'],
}
const FRAGEN = {
  type: 'object',
  properties: {
    dimension: { type: 'string' },
    fragen: { type: 'array', items: FRAGE },
    befunde: { type: 'array', items: BEFUND, description: 'Schwachstellen: Fragen ohne belastbare Antwort, fehlende Backups, riskante Formulierungen auf Folien' },
    staerken: { type: 'array', items: { type: 'string' } },
    gesamturteil: { type: 'string' },
    zusatz: { type: 'string' },
  },
  required: ['dimension', 'fragen', 'befunde', 'staerken', 'gesamturteil', 'zusatz'],
}
const URTEILE = {
  type: 'object',
  properties: {
    urteile: { type: 'array', items: { type: 'object', properties: {
      id: { type: 'string' },
      urteil: { type: 'string', enum: ['bestätigt', 'teilweise', 'widerlegt'] },
      schwere_neu: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
      dringlichkeit_neu: { type: 'string', enum: DRINGLICHKEIT },
      zustaendig_neu: { type: 'string', enum: ZUSTAENDIG },
      begruendung: { type: 'string' },
      vorschlag_korrigiert: { type: 'string', description: 'korrigierter Vorschlag oder der ursprüngliche, wenn er stimmt' },
    }, required: ['id', 'urteil', 'schwere_neu', 'dringlichkeit_neu', 'zustaendig_neu', 'begruendung', 'vorschlag_korrigiert'] } },
    zusatz_pruefung: { type: 'string', description: 'Prüfung des Zusatzmaterials: falsche Angaben, fehlende Fundstellen, Korrekturen' },
  },
  required: ['urteile', 'zusatz_pruefung'],
}
const FRAGEN_URTEILE = {
  type: 'object',
  properties: {
    urteile: { type: 'array', items: { type: 'object', properties: {
      nr: { type: 'string' },
      urteil: { type: 'string', enum: ['korrekt', 'korrigiert', 'streichen'] },
      antwort_neu: { type: 'string', description: 'geprüfte Antwort (unverändert, wenn korrekt)' },
      beleg_neu: { type: 'string' },
      fallstricke_neu: { type: 'string' },
      antwortet_neu: { type: 'string' },
      belastbar_neu: { type: 'string', enum: ['ja', 'teilweise', 'nein'] },
      begruendung: { type: 'string', description: 'was an der Quelle geprüft wurde (Datei, Abschnitt/Zeile) und was korrigiert wurde' },
    }, required: ['nr', 'urteil', 'antwort_neu', 'beleg_neu', 'fallstricke_neu', 'antwortet_neu', 'belastbar_neu', 'begruendung'] } },
  },
  required: ['urteile'],
}

const FRAGEN_GRUNDLAGE = `Grundlage (alles lesen, was du für Antworten brauchst): ${P}/index.html (Folien, Daten, Notizen, Rückfragen-Hinweise in den Notizen und Kästen), ${F}/folienentwuerfe.md (Abschnitte „Mögliche Rückfragen“), markenkompetenz.md, persona-steckbrief.md, limbic-map.md, gruenderbefragung.md, persona-daten.md, dossier-buendel-b.md, methoden.md, recherche/holy-recherche.md (Faktenstatus!), README.md (Bewertung), ki-nachweis/ki-nachweis.md Abschnitt 4 „Wie dieser Nachweis entsteht“, Backup-Folien b1–b8.
Je Frage: kurze Antwort (2–4 Sätze, mündlich, in der Ich-/Wir-Form der Gruppe), wer antwortet (nach Bündel), Beleg (Folie/Backup/Ausarbeitung mit Abschnitt; bei Dossier-Fakten den Faktenstatus), Fallstricke („nicht sagen: …“ – z. B. Beispieldaten nicht als echte Ergebnisse ausgeben, Gründeraussagen nicht als Tatsachen, Hypothesen nicht als Befunde, keine Zahlen ohne Quelle). Antworten NUR aus den Belegen; gibt das Material keine belastbare Antwort, ehrlich formulieren („Das haben wir nicht erhoben; …“), belastbar = „nein“ und daraus zusätzlich einen Befund machen (z. B. Backup-Folie oder Satz im Sprechtext fehlt). Gründeraussagen immer als Selbstauskunft („laut Gründer Mathias Horsch (Befragung 10/2026)“); „95 %“ nur mit „laut Gründer, Datengrundlage nicht offengelegt“. Beispieldaten von Bündel B/C offen als solche benennen. Die Live-Abstimmung auf Folie 08 und die Bilder auf Folie 01/04 sind ausgenommen (Account 1 baut sie gerade um) – dazu keine Fragen.`

const FRAGENSAMMLER = [
  { key: 'prof', kuerzel: 'P', prompt: `Auftrag FRAGERUNDE – SICHT PROF. STENGER (Kürzel FRAGE-P, Fragen-Nr. P-01 …, Ausgabeordner _test/account2-frage-p/): Versetze dich in Prof. Dr. Stenger, der nach dem Bewertungsraster bewertet und „souverän bei Rückfragen“ prüft. Sammle die 20–25 wahrscheinlichsten und unbequemsten Fragen zu Methode (Vorgehen, Stichprobe, simulierte Befragte, Repertory Grid, Laddering/Means-End, Analogien, Kommunikationsanalyse, Gründerbefragung), Modellen (Markensteuerrad nach Esch, Brand Persona, Limbic Map – Rechte und Anwendung, Aaker-Markenpersönlichkeit/Tonalität), Daten (Herkunft, Aktualität, Faktenstatus, Beispieldaten, Statista), Ergebnissen (Markenkern, Fit, Lücken), Empfehlungen (Begründung, Priorität, Umsetzbarkeit, Messbarkeit) und KI-Nutzung (wofür, wie geprüft, wie dokumentiert). Gewichte nach Wahrscheinlichkeit.
${FRAGEN_GRUNDLAGE}
In „zusatz“: kurze Übersicht, welche Bewertungskriterien die Fragen abdecken.` },
  { key: 'publikum', kuerzel: 'Q', prompt: `Auftrag FRAGERUNDE – SICHT PUBLIKUM (Kürzel FRAGE-Q, Fragen-Nr. Q-01 …, Ausgabeordner _test/account2-frage-q/): Versetze dich in Kommilitoninnen und Kommilitonen, die HOLY kennen oder nicht kennen und die Präsentation zum ersten Mal sehen. Sammle die 12–18 wahrscheinlichsten Fragen zu Ergebnissen (Was ist HOLY eigentlich? Wer kauft das? Warum diese Persona? Was heißt „Hedonisten“?), Marke & Gründer (Was hat der Gründer gesagt? Wie seid ihr an ihn gekommen?), Empfehlungen (Was würdet ihr HOLY als Erstes raten? Was kostet das?), Daten (Woher stammen die Zahlen? Sind das echte Befragte?), Wettbewerb (Abgrenzung zu anderen Marken aus dem Dossier) und KI-Nutzung (Habt ihr das mit KI gemacht? Wie viel davon ist von euch?). Gewichte nach Wahrscheinlichkeit; keine Dubletten zu typischen Fachfragen des Profs, eher die Laienperspektive.
${FRAGEN_GRUNDLAGE}
In „zusatz“: kurze Übersicht, welche Folien die meisten Fragen auslösen dürften.` },
]

const DIMENSIONEN = [
  { key: 'aufgabe', kuerzel: 'AUF', titel: 'Aufgabe & Bewertungsraster', prompt: `Auftrag AUFGABE & BEWERTUNGSRASTER (Kürzel AUF, Ausgabeordner _test/account2-auf/):
1. Zerlege die Aufgabenstellung (aufgaben-im-detail.html, aufgabenuebersicht.html) in prüfbare Teilanforderungen (Pflichtinhalte, Methoden, Modelle, Formvorgaben wie Dauer, Backup, KI-Nachweis) und ordne jeder die Folie(n) und Fundstellen zu: erfüllt / teilweise / fehlt / nur mit Beispieldaten.
2. Schätze je Bewertungskriterium (README.md) eine Punktzahl 0–10 für den jetzigen Stand und für den Stand „mit echten Daten von Lukas und Elias“, jeweils mit Begründung, und nenne die konkreten Hebel zur nächsthöheren Stufe (Sehr gut 9–10). Achte besonders auf „Problemverständnis & Fokussierung“ (Wird eine Problemstellung von HOLY formuliert? Wird Wesentliches priorisiert?) und „Qualität der Lösung“ (Sind die Empfehlungen auf f11 konkret, begründet, realistisch und aus der Analyse abgeleitet?). Punkte ausdrücklich als Schätzung kennzeichnen.
3. BEISPIELDATEN: Liste jedes Element mit Beispieldaten (Folien 06, 07, 08 ohne Live-Abstimmung, 08b, 09, 09b, 10, 11, Backups b4–b6; Daten-JSON, Pillen, Notizen) und bewerte: Muss es bis 26.10. echt sein (ja / teilweise / nein – Kennzeichnung reicht), mit Begründung (Bewertungskriterium, Glaubwürdigkeit, Abhängigkeit für Synthese f10 und Empfehlungen f11), spätester Termin nach arbeitsplan.md (Übergaben/Tagesplan), wer liefert, und eine Minimalvariante, falls die Zeit nicht reicht (z. B. ehrlich als „Pilot mit n = …“ kennzeichnen). Prüfe, welche Folien von welchen Lieferungen abhängen (kritischer Pfad bis zur Generalprobe).
4. Befunde für jede Lücke. In „zusatz“: Tabelle Teilanforderung | Folie(n) | Status | Bemerkung; Tabelle Kriterium | Gewicht | Punkte jetzt | Punkte mit echten Daten | Hebel; Tabelle Beispieldaten: Folie | Element | muss echt sein? | Begründung | spätestens | wer | Minimalvariante.` },
  { key: 'storyline', kuerzel: 'STO', titel: 'Storyline & Argumentation', prompt: `Auftrag STORYLINE & ARGUMENTATION (Kürzel STO, Ausgabeordner _test/account2-sto/): Lies alle Hauptfolien (Titel, Daten-JSON, Notizen) in Reihenfolge und sieh dir ihre Endzustände an (pruefen.mjs mit --optional --skala 0.5 ohne --schritte genügt; danach die Screenshots ansehen).
1. Roter Faden: Gibt es am Anfang eine klare Leitfrage/Problemstellung, die am Ende beantwortet wird? Führt jede Folie logisch zur nächsten (Übergänge in den Notizen)? Sind die Titel Kernaussagen (nicht nur Themen)?
2. Argumentationskette Analyse → Synthese (f10 Markensteuerrad) → Empfehlungen (f11): Lässt sich jede Empfehlung auf einen konkreten Befund zurückführen? Gibt es Befunde ohne Konsequenz oder Empfehlungen ohne Befund? Widersprüche zwischen Folien (Persona-Werte, Limbic-Typ, Tonalität, Fit, Kompetenz)? Wie ist die Gründerbefragung eingebunden – stützt sie die Argumentation, ohne als Beweis missverstanden zu werden?
3. Fokussierung: Was ist verzichtbar oder doppelt (z. B. f01b optional, f08b, f09b)? Ist das Verhältnis Methodik zu Ergebnis für 15 Minuten angemessen?
4. Einstieg und Schluss: Bleibt eine Kernbotschaft hängen? Wird die Brücke zum Publikum geschlagen?
In „zusatz“: die Argumentationskette als Liste „Folie → Kernaussage → Beleg → führt zu“ und eine Liste der Lücken in der Kette.` },
  { key: 'zeit', kuerzel: 'ZEIT', titel: 'Vortrag & Zeit', prompt: `Auftrag VORTRAG & ZEIT (Kürzel ZEIT, Ausgabeordner _test/account2-zeit/): Sollzeit 14:00 (840 s), Vortrag 15:00.
1. Zähle per Skript (nicht schätzen) für jede Hauptfolie die Wörter der Notizen – nur den gesprochenen Sprechtext; Belegabsätze/Quellenhinweise getrennt zählen (sieh dir an, wie die Notizen aufgebaut sind, und lege die Zählregel offen). Dazu: Sprechzeit bei 120, 130 und 140 Wörtern/Minute, data-zeit, Anzahl der Animationsschritte (data-schritte bzw. laut pruefen.mjs), Sprecher laut Rollenverteilung. Für f08 die Zeit der Live-Abstimmung nur als Pauschale aus LIESMICH.md übernehmen (die Abstimmung selbst ist ausgenommen). Summen und Puffer gegen 14:00 und 15:00.
2. Sprecherwechsel: Wie oft wechselt der Sprecher, wo stehen Übergabesätze? Vorschlag für einen Sprecherplan mit Übergabesätzen (nur aus vorhandenen Inhalten, keine neuen Fakten).
3. Risiken: Folien, deren Sprechtext nicht in die Sollzeit passt; Folien mit vielen Klickschritten; Stellen, an denen Beispieldaten erklärt werden müssen; Kürzungsplan (was fällt weg, wenn die Zeit knapp wird, mit eingesparten Sekunden).
4. Prüfe die Zeitanzeigen der Referentenansicht (deck.js: Gesamtuhr, Folienuhr, Sollzeit) gegen die Summe.
Offene Frage aus arbeitsplan.md (zählen Rückfragen zu den 15 Minuten?) berücksichtigen.
In „zusatz“: Tabelle Folie | Sprecher | Wörter | Zeit bei 130 W/min | data-zeit | Schritte | Abweichung, Summen, Sprecherplan mit Übergabesätzen, Kürzungsplan.` },
  { key: 'rueckfragen', kuerzel: 'FRAGE', titel: 'Rückfragen', prompt: null },
  { key: 'fakten', kuerzel: 'FAKT', titel: 'Fakten & Kennzeichnung', prompt: `Auftrag FAKTEN & KENNZEICHNUNG (Kürzel FAKT, Ausgabeordner _test/account2-fakt/): Prüfe Satz für Satz und Wert für Wert alle Folien f01–f12 und b1–b8 (Daten-JSON, sichtbare Texte, fest eingebaute Texte in js/folien/*.js, Notizen, Fußzeilen/Quellenzeilen; ausgenommen Live-Abstimmung f08 und die Bilder f01/f04) gegen recherche/holy-recherche.md (Faktenstatus), markenkompetenz.md, persona-steckbrief.md, limbic-map.md, gruenderbefragung.md, persona-daten.md, dossier-buendel-b.md und QUELLEN.md:
- Jede Zahl, jedes Zitat, jedes Datum: Quelle vorhanden, korrekt übernommen, Faktenstatus beachtet („laut Unternehmen“, „Schätzung“, „Selbstauskunft“)?
- Gründerbefragung: Steht jede Gründeraussage als Selbstauskunft („laut Gründer Mathias Horsch (Befragung 10/2026)“ bzw. „Horsch 2026 (GB)“)? Steht „95 %“ nirgends ohne „laut Gründer, Datengrundlage nicht offengelegt“? Stimmen die Aussagen mit gruenderbefragung.md überein?
- Statista-Werte nur wie in persona-daten.md?
- Beispieldaten von Bündel B und C: überall gekennzeichnet (Pille, Fußzeile, Notiz)? Werden Beispieldaten im Sprechtext wie echte Ergebnisse formuliert?
- Quellennummern in Fußzeilen ↔ QUELLEN.md und b7/b8 konsistent? Rechnungen (Summen, Prozente, Differenzen) nachrechnen.
- Widersprüche zwischen Folien und Ausarbeitungen (Limbic-Typ „Hedonisten“, Lücke, Kompetenz-Angaben, Persona-Werte) – auch in Notizen, Backups und LIESMICH.md.
In „zusatz“: Tabelle Folie | geprüfte Angaben (Anzahl) | davon mit Quelle | Abweichungen.` },
  { key: 'technik', kuerzel: 'TECH', titel: 'Technik im Hörsaal', prompt: `Auftrag TECHNIK IM HÖRSAAL (Kürzel TECH, Ausgabeordner _test/account2-tech/): Der Vortrag läuft vermutlich auf einem fremden Rechner (Hochschul-PC oder eigener Laptop) am Beamer, offline von USB-Stick oder Festplatte (file://). Prüfe mit eigenen kleinen playwright-core-Skripten (die Live-Abstimmung f08 und die Bilder f01/f04 sind ausgenommen):
1. Fenstergrößen/Beamer: 1024×768 (4:3), 1280×720, 1280×800, 1366×768, 1920×1080, 1920×1200, 2560×1440 und 3840×2160 (deviceScaleFactor 1, bei 1920×1080 zusätzlich 2): Wird die Bühne korrekt skaliert und zentriert, bleibt nichts abgeschnitten, sind Texte scharf? Screenshots einer Text- und einer Diagrammfolie je Größe ansehen.
2. Pfade: Kopiere die Präsentation (den Ordner ${P} ohne _test) nach _test/account2-tech/Ordner mit Leerzeichen und Umlauten äöü/ und öffne sie dort per file:// – lädt alles (Schriften, Bilder, Skripte)? Konsolenfehler?
3. Robustheit: zufällige Klickfolgen vor/zurück (z. B. 200 Schritte) ohne Fehler oder hängende Animationen? Neu laden mitten im Vortrag – bleibt die Position? Sehr schnelles Weiterklicken?
4. Notfall: Ist export/praesentation.pdf vollständig und aktuell (Seitenzahl, Stand vs. index.html, export/folien/*.png)? Läuft das Deck weiter, wenn auf einer Folie ein JavaScript-Fehler auftritt? Ist dokumentiert, was im Notfall zu tun ist (LIESMICH.md)?
5. Weitere Browser: Nur Chromium ist installiert. Bewerte aus dem Code (Modellwissen, als solches kennzeichnen), welche verwendeten Funktionen in Firefox, Safari oder älterem Edge/Chrome fehlen könnten (View Transitions, OKLCH, :has(), Container Queries usw.) und ob es Rückfallebenen gibt.
In „zusatz“: Tabelle Prüfung | Ergebnis | Beleg (Skript/Screenshot), und eine Technik-Checkliste für den Hörsaal (vorher prüfen, mitnehmen, Notfallplan).` },
  { key: 'referentenansicht', kuerzel: 'REF', titel: 'Referentenansicht & Bedienung', prompt: `Auftrag REFERENTENANSICHT & BEDIENUNG (Kürzel REF, Ausgabeordner _test/account2-ref/): Prüfe mit eigenen playwright-core-Skripten unter file:// in Chromium und aus dem Code (deck.js, LIESMICH.md); die Live-Abstimmung auf f08 ist ausgenommen.
1. Referentenansicht öffnen wie in LIESMICH.md beschrieben (zweites Fenster/Tab): Synchronisieren sich Folie und Schritt in beide Richtungen? Notizen, nächste Folie/nächster Schritt, Gesamtuhr und Folienuhr, Sollzeit korrekt? Was passiert, wenn die Referentenansicht neu geladen oder zuerst geöffnet wird, oder wenn das Folienfenster neu lädt? Sind die Notizen in der Referentenansicht lesbar (Schriftgröße, Scrollen bei langen Notizen)? Bewerte aus dem Code (Modellwissen kennzeichnen), ob das in anderen Browsern unter file:// funktioniert.
2. Bedienung: Pfeiltasten, Leertaste, Bild auf/ab (Presenter-Fernbedienungen senden meist PageUp/PageDown, manche „b“ oder „.“ für Schwarzbild), Pos1/Ende, Sprünge (laut LIESMICH.md, inkl. Backup-Sprung für Rückfragen und zurück), Vollbild, Esc. Funktioniert alles wie beschrieben? Wie schnell kommt man in der Fragerunde zu einer bestimmten Backup-Folie und zurück?
3. Live-Wortwolke f01b (optional): Bedienung in Folienfenster und Referentenansicht, Synchronisation, Löschen/Korrigieren eines Wortes, Verhalten bei unangemessenen Eingaben.
4. Bildschirmaufbau im Hörsaal: erweiterter Desktop (Beamer = Folien, Laptop = Referentenansicht) – ist die Anleitung in LIESMICH.md ausreichend und richtig (Windows und macOS)?
In „zusatz“: Bedienablauf für den Vortrag (Aufbau, Start, Sprecherwechsel, Fragerunde mit Backup-Sprüngen, Notfall) und Tabelle Prüfung | Ergebnis | Beleg.` },
  { key: 'gestaltung', kuerzel: 'VIS', titel: 'Visualisierung & Beamer', prompt: `Auftrag VISUALISIERUNG, LESBARKEIT & BEAMER (Kürzel VIS, Ausgabeordner _test/account2-vis/): Kriterium „Visualisierung & Foliengestaltung – klar, lesbar, professionell, Visualisierungen stützen die Argumentation“. Die Bilder auf f01/f04 und die Live-Abstimmung f08 sind ausgenommen.
1. Führe pruefen.mjs --schritte --optional aus (Ausgabe _test/account2-vis/hell) und --modus dunkel --skala 0.5 (…/dunkel); lies bericht.json (Schriftgrößen, Kontraste, Wortbudget-Warnungen).
2. Sieh dir die Endzustände aller Haupt- und Backupfolien selbst an. Je Folie: Stützt die Visualisierung die Kernaussage im Titel? Passt der Diagrammtyp? Sind Achsen, Skalen, Legenden, Einheiten, Quellen vorhanden und lesbar? Ist die Beispieldaten-Kennzeichnung sichtbar, aber nicht störend? Ist die Gestaltung über alle Folien konsistent (Raster, Abstände, Farben, Typografie, Logos auf 01/09b/12)? Auch die Grafiken in ${F}/grafiken/*.png ansehen.
3. Beamer-Bedingungen simulieren (eigenes playwright-core-Skript): ausgewaschener Beamer (z. B. CSS-Filter contrast(0.6) brightness(1.2) auf html), Rot-Grün-Sehschwäche (Deuteranopie-/Protanopie-Matrix als SVG-Filter) und Betrachtung von hinten (Screenshot auf 25 % verkleinert). Welche Folien verlieren dann ihre Aussage (Farbe als einziger Unterschied, zu dünne Linien, zu kleine Beschriftungen)? Empfehlung hell oder dunkel für den Hörsaal mit Begründung.
4. Kleinste Schriftgrößen je Folie in Pixeln bei 1920×1080 (Faustregel aus dem Modellwissen, als solche kennzeichnen: etwa ≥ 24 px bei 1080p für Lesbarkeit von hinten).
In „zusatz“: Tabelle Folie | Kernaussage gestützt? | kleinste Schrift (px) | Beamer/Sehschwäche robust? | Bemerkung, und die Empfehlung hell/dunkel.` },
]

const gegenpruefen = (titel, key, ergebnis) => agent(`${GEMEINSAM}
Auftrag GEGENPRÜFUNG „${titel}“ (Ausgabeordner _test/account2-gegen-${key}/): Ein Prüfer hat die folgenden Befunde und dieses Zusatzmaterial geliefert. Versuche, jeden Befund zu WIDERLEGEN: Öffne die genannte Stelle selbst (Datei/Zeile, Daten-JSON, Screenshot; Messungen bei Bedarf selbst wiederholen). Urteil je Befund: „bestätigt“ (Problem besteht wie beschrieben), „teilweise“ (besteht, aber Beschreibung, Schwere, Dringlichkeit, Zuständigkeit oder Vorschlag stimmen nicht – korrigieren) oder „widerlegt“ (besteht nicht, beruht auf Fehllesen oder einer nicht belegbaren Angabe, oder betrifft die ausgenommenen Bereiche Live-Abstimmung f08 bzw. Bilder f01/f04). Kannst du die Stelle nicht belegen, urteile „widerlegt“. Prüfe auch: Stimmt die Zuständigkeit, ist die Dringlichkeit nach dem Tagesplan plausibel, ist der Vorschlag umsetzbar, ohne Fakten zu erfinden? Gib für JEDEN Befund genau ein Urteil mit derselben ID zurück.
Prüfe außerdem das Zusatzmaterial gründlich (mindestens ein Drittel der Zeilen selbst nachprüfen; Zahlen nachrechnen; Fundstellen öffnen): falsche Angaben, fehlende Fundstellen, erfundene Inhalte → in „zusatz_pruefung“ mit konkreter Korrektur (Zeile, falsch, richtig).
Befunde und Zusatzmaterial (JSON):
${JSON.stringify(ergebnis, null, 1)}`,
  { label: `gegen:${key}`, phase: 'Gegenprüfen', schema: URTEILE })

const fragenPruefen = (fragen, key) => agent(`${GEMEINSAM}
Auftrag GEGENPRÜFUNG FRAGERUNDE (${key}): Prüfe JEDE der folgenden Antworten an ihrer Quelle. Öffne den genannten Beleg (Folie in index.html, Backup, Ausarbeitung + Abschnitt, Dossier + Faktenstatus) und vergleiche Satz für Satz:
- Steht jede Aussage der Antwort wirklich so in der Quelle (Zahlen, Namen, Begriffe, Faktenstatus)? Nichts hinzuerfunden, nichts übertrieben?
- Gründeraussagen als Selbstauskunft („laut Gründer Mathias Horsch (Befragung 10/2026)“)? „95 %“ nur mit „laut Gründer, Datengrundlage nicht offengelegt“? Statista nur wie in persona-daten.md? Beispieldaten als solche benannt?
- Ist der Beleg präzise (Datei + Abschnitt/Folie) und richtig? Passt „antwortet“ zur Rollenverteilung (A Yannick, B Lukas, C Elias)? Ist die Antwort 2–4 Sätze lang und mündlich sprechbar? Sind die Fallstricke sinnvoll und vollständig?
- Betrifft die Frage die ausgenommenen Bereiche (Live-Abstimmung f08, Bilder f01/f04) → „streichen“.
Urteil je Frage: „korrekt“ (unverändert übernehmen), „korrigiert“ (Antwort/Beleg/Fallstricke/antwortet/belastbar korrigiert zurückgeben – nur mit Inhalten aus der Quelle) oder „streichen“ (nicht belegbar und nicht sinnvoll ehrlich zu beantworten, oder ausgenommen). In „begruendung“ nennen, was du an welcher Stelle geprüft hast. Gib für JEDE Frage genau ein Urteil mit derselben Nr. zurück.
Fragen (JSON):
${JSON.stringify(fragen, null, 1)}`,
  { label: `gegen:fragen-${key}`, phase: 'Gegenprüfen', schema: FRAGEN_URTEILE })

function zusammenfuehren (befunde, gegen) {
  const urteile = new Map(gegen.urteile.map(u => [u.id, u]))
  return befunde.map(b => {
    const u = urteile.get(b.id)
    if (!u) return { ...b, urteil: 'ungeprüft', gegenpruefung: 'kein Urteil des Gegenprüfers' }
    return { ...b, urteil: u.urteil, schwere: u.schwere_neu, dringlichkeit: u.dringlichkeit_neu, zustaendig: u.zustaendig_neu,
      vorschlag: u.vorschlag_korrigiert || b.vorschlag, gegenpruefung: u.begruendung }
  })
}
function fragenZusammenfuehren (fragen, urteilsListen) {
  const urteile = new Map(urteilsListen.flatMap(g => g.urteile).map(u => [u.nr, u]))
  return fragen.map(f => {
    const u = urteile.get(f.nr)
    if (!u) return { ...f, urteil: 'ungeprüft', gegenpruefung: 'kein Urteil des Gegenprüfers' }
    return { ...f, urteil: u.urteil, antwort: u.antwort_neu, beleg: u.beleg_neu, fallstricke: u.fallstricke_neu,
      antwortet: u.antwortet_neu, belastbar: u.belastbar_neu, gegenpruefung: u.begruendung }
  })
}
const pakete = (liste, n) => Array.from({ length: Math.ceil(liste.length / n) }, (_, i) => liste.slice(i * n, i * n + n))

// Stufe 1: Prüfer bzw. (für „Rückfragen“) zwei Fragensammler
function pruefen (d) {
  if (d.key !== 'rueckfragen') {
    return agent(`${GEMEINSAM}\n${d.prompt}`, { label: `pruefen:${d.key}`, phase: 'Prüfen', schema: BEFUNDE })
      .then(r => { if (!r) throw new Error('Prüfer ' + d.key + ' gescheitert'); return r })
  }
  return parallel(FRAGENSAMMLER.map(g => () =>
    agent(`${GEMEINSAM}\n${g.prompt}`, { label: `pruefen:fragen-${g.key}`, phase: 'Prüfen', schema: FRAGEN })))
    .then(rs => {
      if (rs.some(r => !r)) throw new Error('Fragensammler gescheitert')
      return { dimension: d.titel, fragen: rs.flatMap(r => r.fragen), befunde: rs.flatMap(r => r.befunde),
        staerken: rs.flatMap(r => r.staerken), gesamturteil: rs.map(r => r.gesamturteil).join(' | '),
        zusatz: rs.map(r => r.zusatz).join('\n\n') }
    })
}
// Stufe 2: Gegenprüfung; für „Rückfragen“ zusätzlich jede Antwort an der Quelle (Pakete zu 8 Fragen)
function gegen (r, d) {
  if (d.key !== 'rueckfragen') {
    return gegenpruefen(d.titel, d.key, r).then(g => {
      if (!g) throw new Error('Gegenprüfer ' + d.key + ' gescheitert')
      const befunde = zusammenfuehren(r.befunde, g)
      log(`${d.titel}: ${befunde.length} Befunde, ${befunde.filter(b => b.urteil === 'widerlegt').length} widerlegt`)
      return { key: d.key, titel: d.titel, befunde, staerken: r.staerken, gesamturteil: r.gesamturteil, zusatz: r.zusatz, zusatz_pruefung: g.zusatz_pruefung }
    })
  }
  const fp = pakete(r.fragen, 8)
  return parallel([
    () => gegenpruefen(d.titel, d.key, { befunde: r.befunde, zusatz: r.zusatz }),
    ...fp.map((p, i) => () => fragenPruefen(p, 'paket-' + (i + 1))),
  ]).then(([g, ...fu]) => {
    if (!g || fu.some(x => !x)) throw new Error('Gegenprüfung Rückfragen unvollständig')
    const befunde = zusammenfuehren(r.befunde, g)
    const fragen = fragenZusammenfuehren(r.fragen, fu)
    log(`Rückfragen: ${fragen.length} Fragen (${fragen.filter(f => f.urteil === 'streichen').length} gestrichen, ${fragen.filter(f => f.urteil === 'korrigiert').length} korrigiert), ${befunde.length} Befunde`)
    return { key: d.key, titel: d.titel, befunde, fragen, staerken: r.staerken, gesamturteil: r.gesamturteil, zusatz: r.zusatz, zusatz_pruefung: g.zusatz_pruefung }
  })
}

phase('Prüfen')
const ergebnisse = await pipeline(DIMENSIONEN, d => pruefen(d), (r, d) => gegen(r, d))
const fehlend = DIMENSIONEN.filter((d, i) => !ergebnisse[i]).map(d => d.key)
if (fehlend.length) throw new Error('Nicht abgeschlossen: ' + fehlend.join(', ') + ' – Workflow mit resume fortsetzen')

phase('Vollständigkeit')
const kritik = await agent(`${GEMEINSAM}
Auftrag VOLLSTÄNDIGKEIT (Kürzel VOLL, Fragen-Nr. V-01 …, Ausgabeordner _test/account2-voll/): Acht Blickwinkel wurden geprüft, je ein Gegenprüfer hat die Befunde bestätigt oder widerlegt (Feld „urteil“) und jede Antwort der Fragerunde an der Quelle geprüft. Ergebnisse (JSON):
${JSON.stringify(ergebnisse, null, 1)}

Frage: Was fehlt? – Folien, die keiner angesehen hat; Bewertungskriterien ohne Prüfung; Behauptungen, die nicht belegt sind; angekündigte, aber nicht ausgeführte Prüfungen; Widersprüche zwischen den Prüfern (Zeitangaben, Zuständigkeiten, Dringlichkeiten, Empfehlung hell/dunkel); Befunde zu den ausgenommenen Bereichen (Live-Abstimmung f08, Bilder f01/f04 – nennen, damit sie herausfallen); naheliegende Risiken für den 26.10. (Organisation: wer bringt welchen Rechner mit, Adapter HDMI/USB-C, Generalprobe, Freigaben, Abgabe der Datei, Einzelreflexion). Fragerunde: Sind Methode, Daten, Ergebnisse, Empfehlungen und KI-Nutzung ausreichend abgedeckt, sind die Antworten auf die drei Personen sinnvoll verteilt, fehlen naheliegende Fragen (z. B. aus folienentwuerfe.md „Mögliche Rückfragen“ oder den Notizen)?
Führe die wichtigsten fehlenden Prüfungen selbst aus (nur lesen) und gib NEUE Befunde und NEUE Fragen (mit Antwort nach denselben Regeln) zurück – keine Wiederholungen. In „zusatz“: Liste der Widersprüche zwischen Prüfern mit deiner Auflösung (Beleg) und Liste der Befunde, die ausgenommene Bereiche betreffen (IDs).`,
  { label: 'vollstaendigkeit', phase: 'Vollständigkeit', schema: FRAGEN })
if (!kritik) throw new Error('Vollständigkeitsprüfung gescheitert – Workflow mit resume fortsetzen')
const kritikPruefungen = await parallel([
  () => gegenpruefen('Vollständigkeit', 'voll', { befunde: kritik.befunde, zusatz: kritik.zusatz }),
  ...pakete(kritik.fragen, 8).map((p, i) => () => fragenPruefen(p, 'voll-' + (i + 1))),
])
if (kritikPruefungen.some(x => !x)) throw new Error('Gegenprüfung Vollständigkeit gescheitert – Workflow mit resume fortsetzen')
const [kritikGegen, ...kritikFragenGegen] = kritikPruefungen
const kritikBefunde = zusammenfuehren(kritik.befunde, kritikGegen)
const kritikFragen = fragenZusammenfuehren(kritik.fragen, kritikFragenGegen)
log(`Vollständigkeit: ${kritikBefunde.length} neue Befunde (${kritikBefunde.filter(b => b.urteil === 'widerlegt').length} widerlegt), ${kritikFragen.length} neue Fragen`)

const alle = [...ergebnisse, { key: 'voll', titel: 'Vollständigkeit', befunde: kritikBefunde, fragen: kritikFragen, staerken: kritik.staerken, gesamturteil: kritik.gesamturteil, zusatz: kritik.zusatz, zusatz_pruefung: kritikGegen.zusatz_pruefung }]
const gueltig = alle.flatMap(e => e.befunde).filter(b => b.urteil !== 'widerlegt')
const fragen = alle.flatMap(e => e.fragen || []).filter(f => f.urteil !== 'streichen')
log(`Gesamt: ${gueltig.length} gültige Befunde (${gueltig.filter(b => b.schwere === 'hoch').length} hoch), ${fragen.length} geprüfte Fragen`)

phase('Berichte')
const ohneFragen = alle.map(e => ({ ...e, fragen: undefined }))
const [bericht, fragerunde] = await parallel([
  () => agent(`${GEMEINSAM}
Auftrag BERICHT VORTRAGSREIFE: Schreibe ${P}/VORTRAGSREIFE.md (Deutsch, Markdown, neue Datei). Das ist die EINZIGE Datei, die du anlegen darfst. Verwende nur bestätigte und teilweise bestätigte Befunde (Feld „urteil“; bei „teilweise“ gelten die korrigierten Felder schwere/dringlichkeit/zustaendig/vorschlag und die Begründung „gegenpruefung“); widerlegte nur im Anhang (eine Zeile je Befund mit Grund). Befunde zu den ausgenommenen Bereichen (Live-Abstimmung f08, Bilder f01/f04) weglassen. Zusatzmaterial nur in der Fassung nach Gegenprüfung: Was „zusatz_pruefung“ beanstandet, korrigieren oder weglassen.
Aufbau:
1. Kopf: Titel „Prüfbericht Vortragsreife – Fallstudie 1 (HOLY)“, Stand ${datum}, erstellt von Account 2 (KI-gestützt; Workflow ki-nachweis/workflows/account-2_2026-10-19_vortragsreife-fragerunde.js, Nachweis ki-nachweis/ki-nachweis-account-2.md, Übergabe Ü04), geprüfter Stand (master nach D12–D14), ausdrücklich ausgenommen: Live-Abstimmung Folie 08 (D15) und Bilder Folie 01/04 (D16). Hinweis: Screenshots liegen nur lokal unter praesentation/_test/account2-… (nicht eingecheckt) und lassen sich mit dem jeweils genannten Befehl neu erzeugen.
2. Kurzfazit (höchstens 10 Zeilen): Ist die Präsentation vortragsreif? Was fehlt bis 26.10.?
3. Top 10 nach Dringlichkeit (dann Schwere): Tabelle ID | Dringlichkeit | Folie | Problem | Maßnahme | zuständig.
4. Beispieldaten: Was bis 26.10. echt sein MUSS und bis wann (Tabelle Folie | Element | muss echt sein? | Begründung | spätestens | wer | Minimalvariante) und daraus der Lieferplan für Lukas und Elias (Datum → Lieferung → hängt davon ab).
5. Einschätzung je Bewertungskriterium (Tabelle, als Schätzung gekennzeichnet).
6. Maßnahmenliste, gruppiert nach Zuständigkeit (Yannick · Lukas · Elias · Account 1 (technisch) · Gruppe (alle) · Prof. Stenger klären), je Zeile: ID, Dringlichkeit, Schwere, Folie, Stelle, Problem, Beleg, Vorschlag; innerhalb der Gruppen nach Dringlichkeit, dann Schwere. Dubletten zwischen Prüfern zusammenführen (alle IDs nennen).
7. Zeit- und Sprecherplan (Tabelle, Summen gegen 14:00 und 15:00, Übergabesätze, Kürzungsplan).
8. Rückfragen: Verweis auf ${F}/fragerunde.md; hier nur die Schwachstellen (Fragen ohne belastbare Antwort und die zugehörigen Befunde).
9. Technik- und Ablauf-Checkliste für den Hörsaal (Aufbau, Referentenansicht, Fragerunde mit Backup-Sprüngen, Notfall).
10. Stärken (was so bleiben soll).
11. Anhang: Methode (8 Blickwinkel, je ein Gegenprüfer, Vollständigkeitsprüfung mit Gegenprüfung; Zahl der Befunde je Blickwinkel, davon widerlegt), widerlegte Befunde, Grenzen (nur Chromium; Beispieldaten B/C; Angaben aus Modellwissen gekennzeichnet).
Keine neuen Fakten, keine Modellbezeichnungen. Prüfe die Datei danach selbst (alle gültigen Befunde enthalten? Tabellen korrekt? keine ausgenommenen Bereiche bewertet?).
Ergebnisse (JSON, ohne Fragenkatalog):
${JSON.stringify(ohneFragen, null, 1)}`,
    { label: 'bericht:vortragsreife', phase: 'Berichte', schema: {
      type: 'object',
      properties: {
        datei: { type: 'string' },
        kurzfazit: { type: 'string' },
        top10: { type: 'array', items: { type: 'object', properties: {
          ids: { type: 'string' }, dringlichkeit: { type: 'string' }, folie: { type: 'string' }, massnahme: { type: 'string' }, zustaendig: { type: 'string' } },
          required: ['ids', 'dringlichkeit', 'folie', 'massnahme', 'zustaendig'] } },
        lieferplan_lukas: { type: 'array', items: { type: 'string' } },
        lieferplan_elias: { type: 'array', items: { type: 'string' } },
        anzahl_befunde: { type: 'number' },
        anzahl_widerlegt: { type: 'number' },
      },
      required: ['datei', 'kurzfazit', 'top10', 'lieferplan_lukas', 'lieferplan_elias', 'anzahl_befunde', 'anzahl_widerlegt'],
    } }),
  () => agent(`${GEMEINSAM}
Auftrag FRAGERUNDE: Schreibe ${F}/fragerunde.md (Deutsch, Markdown, neue Datei). Das ist die EINZIGE Datei, die du anlegen darfst. Grundlage: die geprüften Fragen unten (Felder nach Gegenprüfung; „streichen“ ist schon entfernt) und die Befunde des Blickwinkels „Rückfragen“.
1. Wähle die 25–35 wahrscheinlichsten Fragen (Dubletten zusammenführen, Wahrscheinlichkeit „hoch“ zuerst; Methode, Daten, Ergebnisse, Empfehlungen und KI-Nutzung müssen alle vorkommen; Fragen von Prof. Stenger und vom Publikum). Formuliere nichts inhaltlich neu – Antworten, Belege und Fallstricke stammen aus den geprüften Feldern; nur kürzen, glätten und zusammenführen ist erlaubt.
2. Aufbau: Kopf (Titel „Fragerunde – Vorbereitung (Fallstudie 1, HOLY)“, Stand ${datum}, erstellt von Account 2, KI-gestützt; Workflow und Nachweis wie oben; geprüft: jede Antwort an der Quelle gegengeprüft). Kurze Spielregeln für die Fragerunde (wer antwortet nach Bündel; Gründeraussagen immer „laut Gründer Mathias Horsch (Befragung 10/2026)“; „95 %“ nur „laut Gründer, Datengrundlage nicht offengelegt“; Beispieldaten offen als solche benennen; bei Unsicherheit ehrlich sagen; Backup-Folie zeigen – wie man hinspringt, laut LIESMICH.md). Übersicht: Tabelle Nr. | Frage | Thema | wer antwortet | Backup/Folie. Danach je Frage ein Abschnitt: Frage (fett), wer fragt wahrscheinlich, wer antwortet, Antwort (2–4 Sätze, mündlich), Beleg, Fallstricke („Nicht sagen: …“), belastbar (bei „teilweise“/„nein“ markieren). Zum Schluss: Fragen ohne belastbare Antwort (was die Gruppe bis zur Generalprobe klären sollte) und Hinweis zur Übung in der Generalprobe (So 25.10.).
Keine neuen Fakten, keine Modellbezeichnungen, keine Fragen zu den ausgenommenen Bereichen (Live-Abstimmung f08, Bilder f01/f04). Prüfe die Datei danach selbst (25–35 Fragen? jede mit Antwort, wer, Beleg, Fallstricken? Regeln zu Gründer, 95 %, Statista eingehalten?).
Geprüfte Fragen (JSON):
${JSON.stringify(fragen, null, 1)}
Befunde Rückfragen (JSON):
${JSON.stringify(alle.filter(e => e.key === 'rueckfragen' || e.key === 'voll').map(e => e.befunde.filter(b => b.urteil !== 'widerlegt')), null, 1)}`,
    { label: 'bericht:fragerunde', phase: 'Berichte', schema: {
      type: 'object',
      properties: {
        datei: { type: 'string' },
        anzahl_fragen: { type: 'number' },
        nach_thema: { type: 'string' },
        nach_person: { type: 'string' },
        ohne_belastbare_antwort: { type: 'array', items: { type: 'string' } },
      },
      required: ['datei', 'anzahl_fragen', 'nach_thema', 'nach_person', 'ohne_belastbare_antwort'],
    } }),
])
if (!bericht || !fragerunde) throw new Error('Bericht oder Fragerunde gescheitert – Workflow mit resume fortsetzen')

const abnahme = await agent(`${GEMEINSAM}
Auftrag ABNAHME: Prüfe die zwei neuen Dateien ${P}/VORTRAGSREIFE.md und ${F}/fragerunde.md gegen die Anforderungen aus der Übergabe Ü04 (ki-nachweis/uebergaben/2026-10-19_account-2_vortragsreife-fragerunde.md, Text im Codeblock) und korrigiere Mängel DIREKT in diesen zwei Dateien (keine anderen Dateien ändern):
- VORTRAGSREIFE.md: alle 8 Blickwinkel mit Gegenprüfung und Vollständigkeitsprüfung erkennbar; jeder Befund mit Folie, Stelle (Datei + Datenfeld/Zeile), Problem, Beleg (Screenshot-Pfad unter praesentation/_test/account2-… bei Sichtbarem), Vorschlag, zuständig, Dringlichkeit bis 26.10.; Bewertung der Beispieldaten (was bis wann echt sein MUSS); keine Bewertung der ausgenommenen Bereiche (Live-Abstimmung f08, Bilder f01/f04).
- fragerunde.md: 25–35 Fragen von Prof. Stenger und Publikum zu Methode, Daten, Ergebnissen, Empfehlungen und KI-Nutzung; je Frage kurze Antwort (2–4 Sätze, mündlich), wer antwortet (nach Bündel), Beleg (Folie/Backup/Ausarbeitung mit Abschnitt), Fallstricke („nicht sagen: …“); Gründeraussagen als Selbstauskunft; „95 %“ nur mit „laut Gründer, Datengrundlage nicht offengelegt“; Statista nur wie in persona-daten.md.
- Beide: Stichprobe von mindestens 8 Belegen je Datei an der Quelle selbst öffnen und prüfen; keine Modellbezeichnungen; Markdown-Tabellen gültig; Links/Pfade stimmen; Umlaute korrekt.
Gib zurück, was du geändert hast und was offen bleibt.`,
  { label: 'abnahme', phase: 'Berichte', schema: {
    type: 'object',
    properties: {
      geaendert: { type: 'array', items: { type: 'string' } },
      offen: { type: 'array', items: { type: 'string' } },
      stichprobe: { type: 'string', description: 'welche Belege geprüft wurden, mit Ergebnis' },
    },
    required: ['geaendert', 'offen', 'stichprobe'],
  } })
if (!abnahme) throw new Error('Abnahme gescheitert – Workflow mit resume fortsetzen')

return {
  bericht, fragerunde, abnahme,
  dimensionen: alle.map(e => ({ key: e.key, titel: e.titel, gesamturteil: e.gesamturteil,
    befunde: e.befunde.length, widerlegt: e.befunde.filter(b => b.urteil === 'widerlegt').length,
    fragen: (e.fragen || []).length })),
  befunde: gueltig,
  fragen,
}
