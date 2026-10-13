export const meta = {
  name: 'holy-recherche',
  description: 'HOLY-Recherche für das Teammeeting: 6 Bereiche recherchieren, je zweifach gegenprüfen, Dossier (PDF) schreiben, prüfen, korrigieren',
  phases: [
    { title: 'Recherche', detail: 'sechs Bereiche, zugeschnitten auf die Fallstudien' },
    { title: 'Gegenprüfung', detail: 'je Bereich Primärquellen-Prüfung und Gegenrecherche' },
    { title: 'Dossier', detail: 'Meeting-Dossier schreiben (Markdown + PDF)' },
    { title: 'Schlussprüfung', detail: 'Dossier gegen Prüfurteile und Aufgabe prüfen' },
    { title: 'Korrektur', detail: 'Befunde umsetzen, PDF neu erzeugen' },
  ],
}

const REPO = '/home/user/Unternehmens-Kommunikation'
const FS = REPO + '/fallstudie-1-brand-persona'
const R = FS + '/recherche'
const CHROME_SHELL = '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell'
const HEUTE = '13.10.2026'
const MEETING = 'Mi, 14.10.2026'

const kurz = (o, n = 30000) => { const s = JSON.stringify(o); return s.length > n ? s.slice(0, n) + ' …[gekürzt]' : s }

const KONTEXT = `Kontext: Die Gruppe Yannick Heisler, Elias Knauber und Lukas Welker (Modul Unternehmenskommunikation, Prof. Dr. Daniel Stenger, Hochschule Kaiserslautern) hat die Marke HOLY gewählt (https://de.holy.com; Liste des Professors: „HOLY – Energy- und Hydration-Drinks“). Morgen (${MEETING}) ist das Team-Kickoff. Heute ist der ${HEUTE}.
Mit HOLY werden drei Fallstudien mit je 15-minütiger Präsentation bearbeitet:
1. Brand Persona & Markenidentität (26.10.2026): Brand Persona (Geografie, Soziodemografie, Kaufverhalten, Mediennutzung, Psychografie, Limbic Map) und Markenidentität nach dem Markensteuerrad von Esch – Markenkompetenz (Wer bin ich? Herkunft, Historie, Marktrolle), Markenattribute über ein Repertory Grid (braucht 5–6 klar vergleichbare Wettbewerber + Idealmarke), Markennutzen über Laddering (Attribut → funktionale/psychosoziale Konsequenz → Wert), Markentonalität über Analogien (Marke als Mensch/Tier), Markenbild über eine Kommunikationsanalyse (Instagram, Facebook, YouTube: Corporate Design, Schlüsselbilder, Bildwelten, Logo, Slogan). Methoden: Desk Research und KI-Tools. Bewertet u. a.: Anwendung der Modelle, Analyse & Argumentation, Qualität der Empfehlungen.
2. Customer Journey & Blog-Beitrag (09.11.2026).
3. Instagram-Post & Eye-Tracking (16.11.2026).
Markt: Deutschland (DACH).`

const REGELN = `Regeln für dich als Unteragent:
- Recherchiere mit WebSearch (Modus standard; extended, wenn Ergebnisse dünn, widersprüchlich oder veraltet sind oder bei sehr aktuellen Angaben) und WebFetch. Bevorzuge Primärquellen und Daten der Firma: offizielle Website (de.holy.com, inkl. Über uns, FAQ, Produktseiten, Impressum, Presse, Karriere), Handelsregister-/Unternehmensdaten (z. B. Northdata, Unternehmensregister/Bundesanzeiger), offizielle Pressemitteilungen, Interviews und Podcasts mit den Gründern, LinkedIn, die offiziellen Social-Media-Profile selbst; danach seriöse Fachpresse (z. B. Gründerszene/Business Insider, deutsche-startups.de, OMR, Lebensmittel Zeitung, Horizont, W&V, t3n, Handelsblatt, Silicon Canals). Meide automatisch erzeugte SEO-Seiten und Content-Farmen oder kennzeichne sie als schwache Quelle.
- JEDE Aussage mit Quelle (URL, Titel, Datum bzw. Abrufdatum) belegen. Nichts erfinden. Was nicht auffindbar ist: „unbekannt“. Widersprüche offenlegen. Zahlen immer mit Stand/Jahr; Follower-Zahlen als ungefähre Angabe mit Abrufdatum.
- Unterscheide klar: belegte Fakten vs. eigene Einschätzung/Hypothese (Feld typ).
- Schreibe KEINE Dateien und ändere nichts im Repository, außer dein Auftrag erlaubt es ausdrücklich. Kein git. Die Hauptsitzung führt KI-Nachweis und Git. Ordner ${FS}/praesentation/ nicht anfassen (dort arbeitet ein anderer Workflow).
- Antworte auf Deutsch.`

const QUELLE = { type: 'object', properties: { url: { type: 'string' }, titel: { type: 'string' }, datum: { type: 'string' }, art: { type: 'string', enum: ['firma', 'register', 'presse', 'interview', 'social', 'statistik', 'sonstige'] } }, required: ['url', 'titel', 'art'] }
const RECHERCHE_SCHEMA = { type: 'object', properties: {
  bereich: { type: 'string' },
  befunde: { type: 'array', items: { type: 'object', properties: {
    id: { type: 'string', description: 'Kürzel des Bereichs + laufende Nummer, z. B. K01' },
    thema: { type: 'string' }, aussage: { type: 'string', description: 'eine prüfbare Aussage' }, details: { type: 'string' },
    typ: { type: 'string', enum: ['fakt', 'zahl', 'zitat', 'einschaetzung'] },
    sicherheit: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
    quellen: { type: 'array', items: QUELLE },
    nutzen_fuer: { type: 'string', description: 'wofür in der Aufgabe, z. B. „Folie 3 Markenkompetenz“, „Repertory Grid“, „Fallstudie 2“' } },
    required: ['id', 'thema', 'aussage', 'typ', 'sicherheit', 'quellen', 'nutzen_fuer'] } },
  luecken: { type: 'array', items: { type: 'string' } },
  hinweise_fuer_aufgabe: { type: 'string', description: 'Was bedeutet das für unsere Fallstudien? Hypothesen, Ideen, Spannungsfelder (als Einschätzung)' } },
  required: ['bereich', 'befunde', 'luecken', 'hinweise_fuer_aufgabe'] }
const PRUEF_SCHEMA = { type: 'object', properties: {
  pruefungen: { type: 'array', items: { type: 'object', properties: {
    id: { type: 'string' }, urteil: { type: 'string', enum: ['bestätigt', 'abweichend', 'unbelegt', 'veraltet', 'schwache Quelle'] },
    korrektur: { type: 'string', description: 'bei abweichend/veraltet: richtige bzw. aktuelle Angabe' },
    quellen: { type: 'array', items: QUELLE }, kommentar: { type: 'string' } }, required: ['id', 'urteil'] } },
  fehlende_befunde: { type: 'array', items: { type: 'object', properties: { aussage: { type: 'string' }, quellen: { type: 'array', items: QUELLE }, warum_wichtig: { type: 'string' } }, required: ['aussage', 'quellen'] } },
  gesamturteil: { type: 'string' } },
  required: ['pruefungen', 'fehlende_befunde', 'gesamturteil'] }
const DOSSIER_SCHEMA = { type: 'object', properties: {
  dateien: { type: 'array', items: { type: 'string' } }, pdf: { type: 'string' }, seiten: { type: 'number' },
  kernerkenntnisse: { type: 'array', items: { type: 'string' } },
  statistik: { type: 'object', properties: { befunde: { type: 'number' }, bestaetigt: { type: 'number' }, korrigiert: { type: 'number' }, unsicher: { type: 'number' }, verworfen: { type: 'number' } } },
  offene_punkte: { type: 'array', items: { type: 'string' } }, pruefbericht: { type: 'string' } },
  required: ['dateien', 'pdf', 'kernerkenntnisse', 'statistik', 'pruefbericht'] }
const KRITIK_SCHEMA = { type: 'object', properties: {
  befunde: { type: 'array', items: { type: 'object', properties: {
    schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] }, stelle: { type: 'string' },
    kategorie: { type: 'string', enum: ['faktenfehler', 'unbelegt', 'widerspruch', 'aufgabenbezug', 'luecke', 'verstaendlichkeit', 'layout', 'quellen'] },
    beschreibung: { type: 'string' }, vorschlag: { type: 'string' } }, required: ['schwere', 'stelle', 'kategorie', 'beschreibung', 'vorschlag'] } },
  gesamturteil: { type: 'string' } },
  required: ['befunde', 'gesamturteil'] }
const FIX_SCHEMA = { type: 'object', properties: {
  behoben: { type: 'array', items: { type: 'string' } },
  nicht_behoben: { type: 'array', items: { type: 'object', properties: { befund: { type: 'string' }, grund: { type: 'string' } }, required: ['befund', 'grund'] } },
  pdf: { type: 'string' }, seiten: { type: 'number' }, pruefbericht: { type: 'string' } },
  required: ['behoben', 'nicht_behoben', 'pdf', 'pruefbericht'] }

const BEREICHE = [
  { key: 'K', name: 'Unternehmen & Markenkompetenz', auftrag: `Steckbrief und Markenkompetenz („Wer bin ich?“): Firmierung und Rechtsform, Sitz, Gründung (Datum, Marktstart – Widersprüche 2020/2021 klären), Gründer und heutige Geschäftsführung, Historie mit den wichtigsten Meilensteinen (Produktstarts, Markteintritte, Handelslistungen, Kampagnen), Finanzierung (Runden, Investoren, Summen, Daten), Größe (Umsatz, Mitarbeitende, Kundenzahl, verkaufte Einheiten – mit Stand, Register-/Bilanzdaten wenn öffentlich), Länder und Vertriebskanäle (D2C-Shop, Abo, Amazon, Handel – welche Ketten, seit wann), Marktrolle (Pionier/Herausforderer/Spezialist?), Repositionierung (vom Energy Drink für Gamer zur „Marke für gesündere Softdrinks“? Belege mit Zitaten), Mission, Vision, Werte, Selbstbeschreibung auf der Website.` },
  { key: 'P', name: 'Produkte, Preise, Inhaltsstoffe & Markenattribute', auftrag: `Sortiment und Markenattribute: alle aktuellen Produktlinien (z. B. Energy, Iced Tea, Hydration, ggf. weitere) mit Format (Pulver, Sticks, Dosen?), Sorten, Portionsgröße und Preis pro Portion bzw. pro Packung (Shop und Handel), Abo-/Rabattmodelle; Inhaltsstoffe und Nährwerte je Linie (Zucker, Süßungsmittel, Koffein pro Portion, Vitamine, Elektrolyte, Kalorien), Werbeversprechen/Claims (z. B. „zuckerfrei“, „gesünder“) und ob es Kritik daran gibt (Verbraucherschutz, Stiftung Warentest, Öko-Test, Foodwatch, Lebensmittelklarheit, Tests in Medien); Nachhaltigkeitsaspekte (weniger Verpackung/Transport durch Pulver? belegte Aussagen der Firma); Produktbewertungen (Trustpilot, Amazon: Durchschnitt, Anzahl, häufige Lob- und Kritikpunkte). Leite daraus mögliche Markenattribute bzw. Repertory-Grid-Konstrukte und Laddering-Startpunkte ab (als Einschätzung).` },
  { key: 'Z', name: 'Zielgruppe & Datenbasis für die Brand Persona', auftrag: `Datenbasis für die Brand Persona: Wen spricht HOLY an – laut Firma, Gründerinterviews, Werbung (ursprünglich Gamer, heute?); Alters- und Geschlechtsstruktur der Kundschaft, falls öffentlich; Kategoriedaten Deutschland mit Quelle und Jahr: Konsum von Energy Drinks nach Alter/Geschlecht, Trends zu zuckerfreien Getränken, Hydration/Elektrolyt-Getränken, Gaming-Nutzung in Deutschland (z. B. game – Verband der deutschen Games-Branche), Mediennutzung der jungen Zielgruppe (z. B. ARD/ZDF-Medienstudie, JIM-Studie, Postbank Jugend-Digitalstudie, Statista-Angaben nur mit Original-Quelle); Werte und Lebensstil (Gesundheitsbewusstsein, Fitness, Produktivität, Nachhaltigkeit); Kundenstimmen (Bewertungen, Reddit, Kommentare – typische Motive). Liefere als Einschätzung 1–2 Persona-Hypothesen und eine Limbic-Map-Hypothese (Balance/Dominanz/Stimulanz) mit Begründung – klar als Hypothese markiert.` },
  { key: 'W', name: 'Wettbewerb & Marktumfeld', auftrag: `Wettbewerb und Markt: Größe und Entwicklung des Energy-Drink-Markts in Deutschland (Absatz/Umsatz, Marktführer, Anteile, mit Quelle und Jahr), Segment Pulver-/Gaming-Energy und Hydration-Pulver; relevante Wettbewerber in Deutschland mit Kurzprofil, Format, Preis pro Portion, Positionierung, Zielgruppe: klassische Energy Drinks (z. B. Red Bull, Monster), Pulver-/Gaming-Marken (z. B. G Fuel, GamerSupps, ESN, More Nutrition – nur wenn in DE relevant), Hydration (z. B. Liquid I.V., waterdrop), gesündere Softdrinks/Alternativen. Schlage ein Wettbewerbsset von 5–6 Marken für das Repertory Grid vor (Mischung aus direkten und indirekten Wettbewerbern), jeweils mit Begründung, und nenne 2–3 Alternativen. Wo steht HOLY im Vergleich (Preis, Gesundheit, Format, Zielgruppe)?` },
  { key: 'C', name: 'Kommunikation & Markenbild', auftrag: `Kommunikationsanalyse und Markenbild: offizielle Kanäle mit Handle/URL, Follower ca. (mit Abrufdatum), Aktivität (Beiträge pro Woche, letzter Beitrag), Formate und Themen: Instagram, Facebook, YouTube (Pflicht laut Aufgabe), außerdem TikTok, Twitch, Discord, LinkedIn, Newsletter; Tonalität (Ansprache du/Sie, Humor, Emojis, Sprache), Bildwelt und mögliche Schlüsselbilder (wiederkehrende Motive), Personen (Influencer, Athleten, Streamer, Community), Corporate Design: Logo (Wort-/Bildmarke, Beschreibung), Markenfarben (wenn möglich HEX-Werte, z. B. aus dem CSS der Website oder dem Pressebereich), Typografie, Verpackungsdesign; Claim/Slogan; Kampagnen und Kooperationen (z. B. Gaming-/E-Sport-Partner, Influencer, POS-Kampagne im Handel 2026) mit Datum; Hinweise auf aktuelle Anzeigen (Meta-Werbebibliothek, falls abrufbar). Liefere als Einschätzung erste Hypothesen zur Markentonalität und mögliche Lücken zwischen Anspruch und Auftritt (Basis für Empfehlungen).` },
  { key: 'J', name: 'Customer Journey, Touchpoints & Risiken', auftrag: `Customer Journey und Risiken: Touchpoints entlang der Journey (Aufmerksamkeit: Werbung, Influencer, Handel; Information: Website, FAQ, Bewertungen; Kauf: Shop, Abo, Bundles, Probierpakete, Gutscheine, Amazon, Handel; Nutzung: Shaker, Rezepte, Community; Bindung: Abo, Treueprogramm, Newsletter, Discord, Weiterempfehlung), Blog/Magazin der Firma (gibt es einen? Themen, Frequenz – relevant für Fallstudie 2 „Blog-Beitrag“), Service und Versand. Risiken und Kontroversen bis ${HEUTE}: Kritik an Werbung/Claims (Healthwashing?), Energy Drinks und Jugendschutz, Koffein-Regulierung, Rückrufe, Rechtsstreitigkeiten, Shitstorms, negative Presse, Wettbewerbsdruck, Finanzlage. Liefere als Einschätzung Ideen für Fallstudie 2 (Journey-Brüche, Blog-Themen) und Fallstudie 3 (typischer Instagram-Post-Stil).` },
]

const recherchePrompt = b => `${KONTEXT}

${REGELN}

Aufgabe: Recherchiere für das Team-Kickoff den Bereich „${b.name}“ zur Marke HOLY gründlich.
${b.auftrag}
Liefere einzelne, prüfbare Befunde (IDs ${b.key}01, ${b.key}02, …), je mit Quellen, Typ, Sicherheit und Nutzen für die Aufgabe; dazu Lücken und Hinweise für die Fallstudien. Lieber 20 gut belegte Befunde als 40 dünne.`

const PRUEFER = [
  { key: 'primaer', name: 'Primärquellen', linse: `Primärquellen-Prüfung: Prüfe JEDEN Befund an Primärquellen bzw. den verlässlichsten verfügbaren Quellen nach (Website und Impressum von HOLY, Register-/Bilanzdaten, offizielle Pressemitteilungen, Originalinterviews, die Social-Media-Profile selbst, Originalstudien statt Zweitverwertung). Öffne die angegebenen Quellen: Steht dort wirklich, was behauptet wird? Stimmen Zahlen, Daten, Namen und Zitate exakt?` },
  { key: 'gegen', name: 'Gegenrecherche', linse: `Gegenrecherche & Aktualität: Suche AKTIV nach widersprechenden, neueren oder genaueren Angaben (Stand ${HEUTE}; 2025/2026 bevorzugt), nach veralteten Zahlen und nach schwachen Quellen (Content-Farmen, KI-generierte Seiten, falsche Zuordnungen). Bewerte Einschätzungen und Hypothesen auf Plausibilität. Ergänze wichtige Befunde, die fehlen.` },
]
const pruefPrompt = (b, rech, p) => `${KONTEXT}

${REGELN}

Aufgabe: Du bist unabhängige:r Faktenprüfer:in für den Bereich „${b.name}“ der HOLY-Recherche. Deine Linse: ${p.linse}
Recherche-Ergebnis: ${kurz(rech, 40000)}
Urteile je Befund-ID: bestätigt / abweichend (mit Korrektur) / unbelegt / veraltet (mit aktueller Angabe) / schwache Quelle – jeweils mit deinen Quellen. Recherchiere selbst neu, verlasse dich nicht auf die angegebenen Quellen. Ergänze fehlende, wichtige Befunde mit Quellen.`

phase('Recherche')
const bereiche = await pipeline(
  BEREICHE,
  b => agent(recherchePrompt(b), { label: 'Recherche: ' + b.name, phase: 'Recherche', schema: RECHERCHE_SCHEMA }),
  (rech, b) => rech
    ? parallel(PRUEFER.map(p => () => agent(pruefPrompt(b, rech, p), { label: p.name + ': ' + b.name, phase: 'Gegenprüfung', schema: PRUEF_SCHEMA })
        .then(e => e ? { pruefer: p.name, ...e } : null)))
      .then(pruef => ({ key: b.key, name: b.name, recherche: rech, pruefungen: pruef.filter(Boolean) }))
    : { key: b.key, name: b.name, recherche: null, pruefungen: [] },
)
const ok = bereiche.filter(x => x && x.recherche)
const fehlend = BEREICHE.filter(b => !ok.find(x => x.key === b.key)).map(b => b.name)
if (fehlend.length) log('Ohne Ergebnis: ' + fehlend.join(', '))
let anzahl = 0, best = 0, abw = 0
for (const x of ok) {
  anzahl += x.recherche.befunde.length
  for (const pr of x.pruefungen) for (const u of pr.pruefungen) { if (u.urteil === 'bestätigt') best++; else abw++ }
}
log(`${ok.length}/${BEREICHE.length} Bereiche · ${anzahl} Befunde · ${best} Bestätigungen, ${abw} Abweichungen/Einwände`)

const DOSSIER_REGELN = `Regeln für den Faktenstatus (verbindlich):
- ✔ gesichert: beide Prüfungen bestätigen oder eine Prüfung bestätigt an einer Primärquelle und die andere widerspricht nicht.
- ✎ korrigiert: eine Prüfung hat eine abweichende/aktuellere Angabe belegt – verwende die korrigierte Angabe (mit deren Quelle) und vermerke die Korrektur im Faktencheck-Anhang.
- ~ unsicher: widersprüchlich, nur schwache Quelle oder unbelegt, aber relevant – nur mit Kennzeichnung „~ unsicher“ und Erklärung verwenden.
- ✗ verworfen: widerlegt – nicht im Haupttext verwenden, nur im Anhang aufführen.
- Hypothesen/Einschätzungen immer als solche kennzeichnen (z. B. „Hypothese:“) und von Fakten trennen.
- Keine Aussage ohne Quelle; Quellen nummeriert [1], [2] … mit Quellenverzeichnis (URL, Titel, Datum/Abruf).`

const dossierPrompt = `${KONTEXT}

${REGELN}
Ausnahme: Du DARFST Dateien im Ordner ${R}/ anlegen (Ordner anlegen).

Aufgabe: Schreibe aus den gegengeprüften Rechercheergebnissen das Dossier für das Team-Kickoff morgen (${MEETING}). Leser:innen: Yannick, Elias, Lukas – sie sollen nach 20 Minuten Lektüre die Marke verstehen, wissen, welche Fakten belastbar sind, und im Meeting entscheiden können. Bezug zur Aufgabe in jedem Kapitel ausdrücklich herstellen („Für Folie …/Methode …“). Lies zur Einordnung ${FS}/README.md, ${FS}/methoden.md und ${FS}/arbeitsplan.md (Bündel A/B/C, Übergabetermine).
${DOSSIER_REGELN}

Ergebnisse (Recherche + je zwei Prüfungen pro Bereich): ${kurz(ok, 180000)}
${fehlend.length ? 'Diese Bereiche fehlen (im Dossier als Lücke ausweisen): ' + fehlend.join(', ') : ''}

Gliederung:
0. Titelseite: „HOLY – Recherche-Dossier für das Team-Kickoff“, Datum ${HEUTE}, Gruppe, Hinweis „Recherche mit KI-Unterstützung (Claude Code), mehrfach gegengeprüft – Faktenstatus beachten“, Legende ✔ ✎ ~ ✗.
1. HOLY auf einen Blick (eine Seite): Steckbrief, 4–6 Kennzahlen mit Stand, 5 Kernerkenntnisse, Positionierung in einem Satz (als Hypothese).
2. Markenkompetenz – „Wer bin ich?“ (→ Folie 3): Historie als Zeitleiste, Gründer, Finanzierung, Größe, Vertrieb, Marktrolle, Selbstverständnis/Mission, Repositionierung.
3. Produkte, Preise & Inhaltsstoffe (→ Repertory Grid, Laddering): Sortimentstabelle, Preis pro Portion, Inhaltsstoffe, Claims und Kritik, Bewertungen; Vorschläge für Repertory-Grid-Konstrukte und Laddering-Startpunkte (Hypothesen).
4. Zielgruppe & Persona-Grundlagen (→ Folien 4–5): belegte Daten, Persona-Hypothese(n), Limbic-Map-Hypothese, offene Datenlücken und welche Quellen die Gruppe noch nutzen sollte (z. B. Statista über die Hochschulbibliothek).
5. Wettbewerb (→ Repertory Grid): Marktüberblick, Wettbewerbertabelle, Vorschlag Wettbewerbsset mit Begründung und Alternativen.
6. Kommunikation & Markenbild (→ Folie 9): Kanaltabelle (Follower, Aktivität, Formate, Stand), Tonalität, Bildwelt/Schlüsselbilder, Corporate Design (Logo, Farben mit HEX falls belegt, Typografie), Claim, Kampagnen/Kooperationen; Tonalitäts-Hypothese (→ Analogien, Folie 8).
7. Customer Journey & Ausblick (→ Fallstudie 2 und 3): Touchpoint-Übersicht, Blog/Magazin, Ideen für Blog-Beitrag und Instagram-Post.
8. Spannungsfelder & mögliche Empfehlungsrichtungen (→ Folie 11): 3–5 Spannungsfelder zwischen Anspruch und Auftritt (Hypothesen mit Belegen) – Grundlage für die Empfehlungen.
9. Risiken, Lücken & offene Fragen.
10. Für das Meeting (${MEETING}): Vorschlag Tagesordnung (30–45 Min.), zu treffende Entscheidungen (Bündel A/B/C verteilen, Wettbewerbsset beschließen, Interviewpartner für Repertory Grid/Laddering, Persona-Richtung, Termine bestätigen, wer prüft welche ~-Angaben nach), erste Aufgaben je Bündel bis Fr 16.10.
Anhang A: Faktencheck-Übersicht – Tabelle aller Befunde (ID, Aussage kurz, Status ✔/✎/~/✗, Hinweis zur Prüfung).
Anhang B: Quellenverzeichnis (nummeriert).

Dateien:
- ${R}/holy-recherche.md – vollständiges Dossier als Markdown (die Gruppe arbeitet damit weiter).
- ${R}/holy-dossier.html – druckfertige Fassung (A4 hoch, Schrift Inter, gut lesbar, Tabellen sauber, Seitenzahlen und Fußzeile „HOLY-Recherche · Stand ${HEUTE}“ über @page-Randboxen, Status-Symbole farbig). Inhalt identisch mit der Markdown-Fassung.
- ${R}/HOLY_Recherche-Dossier_Teamkickoff.pdf – erzeugt mit: "${CHROME_SHELL}" --no-sandbox --disable-gpu --no-pdf-header-footer --print-to-pdf="<PDF-Pfad>" "file://<HTML-Pfad>"
Rendere danach die Seiten mit pdftoppm (-r 60 -png) in ${R}/_vorschau/ und sieh sie dir mit dem Read-Werkzeug an: kein abgeschnittener Inhalt, keine leeren Seiten, Tabellen nicht zerrissen (break-inside: avoid), Kapitel beginnen sinnvoll. Korrigiere, bis es sauber ist; lösche danach ${R}/_vorschau/.
Rückgabe: Dateien, PDF-Pfad, Seitenzahl, Kernerkenntnisse, Statistik (Befunde gesamt, bestätigt, korrigiert, unsicher, verworfen), offene Punkte, Prüfbericht.`

phase('Dossier')
const dossier = await agent(dossierPrompt, { label: 'Dossier schreiben', phase: 'Dossier', schema: DOSSIER_SCHEMA })
if (!dossier) throw new Error('Dossier nicht fertig geworden')

const kritikPrompt = `${KONTEXT}

${REGELN}

Aufgabe: Prüfe das Dossier ${R}/holy-recherche.md (und die PDF-Fassung ${dossier.pdf}; Seiten bei Bedarf mit pdftoppm in ${R}/_kritik/ rendern und ansehen, Ordner danach löschen) streng. Ändere keine Dateien.
Prüfe gegen die Prüfurteile: Wird irgendwo eine unbelegte, widerlegte oder nur schwach belegte Aussage als gesichert dargestellt? Stimmen Zahlen, Daten und Namen mit den (korrigierten) Prüfergebnissen überein? Fehlen Quellen? Sind Hypothesen als solche gekennzeichnet? Widersprechen sich Kapitel? Ist der Bezug zur Aufgabe (Markensteuerrad nach Esch, Repertory Grid, Laddering, Analogien, Kommunikationsanalyse, Persona/Limbic Map, Fallstudien 2 und 3) klar und fachlich korrekt? Ist der Meeting-Teil konkret und brauchbar? Ist das PDF gut lesbar und sauber gesetzt?
Stichprobe: Prüfe selbst 8–10 der wichtigsten Zahlen/Fakten (Gründung, Gründer, Finanzierung, Kundenzahl, Handelslistung, Follower, Preise, Koffeingehalt, Claim) per Websuche nach.
Grundlage (Recherche + Prüfungen): ${kurz(ok, 120000)}
Rückgabe: Befunde mit Schwere, Stelle, Kategorie, Beschreibung, Vorschlag; Gesamturteil.`

phase('Schlussprüfung')
const kritik = await agent(kritikPrompt, { label: 'Schlussprüfung', phase: 'Schlussprüfung', schema: KRITIK_SCHEMA })

let korrektur = null
const befunde = (kritik && kritik.befunde) || []
if (befunde.length) {
  phase('Korrektur')
  korrektur = await agent(`${KONTEXT}

${REGELN}
Ausnahme: Du DARFST die Dateien in ${R}/ ändern.

Aufgabe: Setze die Befunde der Schlussprüfung im HOLY-Dossier um: ${R}/holy-recherche.md und ${R}/holy-dossier.html (Inhalt identisch halten), danach das PDF ${dossier.pdf} neu erzeugen ("${CHROME_SHELL}" --no-sandbox --disable-gpu --no-pdf-header-footer --print-to-pdf=…) und die Seiten mit pdftoppm prüfen (Vorschau in ${R}/_vorschau/, danach löschen). Bei Faktenfragen im Zweifel selbst per Websuche nachprüfen.
${DOSSIER_REGELN}
Befunde: ${kurz(befunde, 30000)}
Priorität: hoch → mittel → niedrig (niedrige nur, wenn eindeutig).
Rückgabe: behoben, nicht behoben (mit Grund), PDF-Pfad, Seitenzahl, Prüfbericht.`, { label: 'Korrektur', phase: 'Korrektur', schema: FIX_SCHEMA })
}

return {
  bereiche: ok.map(x => ({ name: x.name, befunde: x.recherche.befunde.length, pruefer: x.pruefungen.map(p => p.pruefer + ': ' + p.gesamturteil.slice(0, 300)) })),
  fehlend,
  dossier: { dateien: dossier.dateien, pdf: dossier.pdf, seiten: dossier.seiten, kernerkenntnisse: dossier.kernerkenntnisse, statistik: dossier.statistik, offene_punkte: dossier.offene_punkte },
  kritik: kritik ? { gesamturteil: kritik.gesamturteil, anzahl: befunde.length, hoch: befunde.filter(b => b.schwere === 'hoch').length } : null,
  korrektur: korrektur ? { behoben: korrektur.behoben.length, nicht_behoben: korrektur.nicht_behoben, pdf: korrektur.pdf, seiten: korrektur.seiten, pruefbericht: korrektur.pruefbericht } : null,
}
