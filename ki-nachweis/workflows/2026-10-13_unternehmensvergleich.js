export const meta = {
  name: 'unternehmensvergleich',
  description: 'Zehn Marken aus der Liste von Prof. Stenger recherchieren, Fakten gegenprüfen und für alle drei Fallstudien bewerten',
  phases: [
    { title: 'Recherche', detail: 'je Marke ein Agent mit Websuche und Quellen' },
    { title: 'Faktencheck', detail: 'je Marke unabhängige Gegenprüfung' },
    { title: 'Vergleich', detail: 'zwei Jury-Perspektiven' },
  ],
}

const HEUTE = '13.10.2026'
const MARKEN = [
  { name: 'HOLY', bereich: 'Energy- und Hydration-Drinks', web: 'https://de.holy.com' },
  { name: 'air up', bereich: 'Trinkflaschen mit Duft-Pods', web: 'https://shop.air-up.com/de/de' },
  { name: 'waterdrop', bereich: 'Microdrinks und Trinkflaschen', web: 'https://www.waterdrop.de' },
  { name: 'nucao', bereich: 'Schokolade und Schokosnacks', web: 'https://www.the-nu-company.com' },
  { name: 'SNOCKS', bereich: 'Socken und Unterwäsche', web: 'https://snocks.com' },
  { name: 'GOT BAG', bereich: 'Rucksäcke und Taschen', web: 'https://got-bag.com' },
  { name: 'Oatsome', bereich: 'Smoothie Bowls und Frühstücksprodukte', web: 'https://www.oatsome.de' },
  { name: '3Bears', bereich: 'Porridge und Overnight Oats', web: 'https://3bears.de' },
  { name: 'everdrop', bereich: 'Wasch- und Reinigungsprodukte', web: 'https://www.everdrop.de' },
  { name: 'koawach', bereich: 'Koffein-Kakao', web: 'https://www.koawach.de' },
]

const kurz = (o, n = 14000) => { const s = JSON.stringify(o); return s.length > n ? s.slice(0, n) + ' …[gekürzt]' : s }

const KONTEXT = `Kontext: Eine Dreiergruppe (Modul Unternehmenskommunikation, Prof. Dr. Daniel Stenger, Hochschule Kaiserslautern) muss aus einer Liste von zehn Marken EINE auswählen. Mit dieser Marke bearbeitet sie drei Fallstudien mit je 15-minütiger Präsentation:
1. Brand Persona & Markenidentität (26.10.2026): Brand Persona (Geografie, Soziodemografie, Kaufverhalten, Mediennutzung, Psychografie, Limbic Map) und Markenidentität nach dem Markensteuerrad von Esch – mit Desk Research und KI-Tools; Repertory Grid (braucht 5–6 klar vergleichbare Wettbewerber), Laddering, Analogien (Marke als Mensch/Tier), Kommunikationsanalyse auf Instagram, Facebook und YouTube (Corporate Design, Schlüsselbilder, Bildwelten, Logo, Slogan).
2. Customer Journey & Blog-Beitrag (09.11.2026).
3. Instagram-Post & Eye-Tracking (16.11.2026).
Bewertet werden u. a. Problemverständnis, Anwendung von Modellen, Analyse & Argumentation, Qualität der Empfehlungen. Gute Wahl = viel öffentlich belegbares Material, aktive und vielfältige Social-Media-Kanäle (v. a. Instagram, auch Facebook/YouTube), klares, spannendes Markenprofil mit Analysepotenzial (auch Lücken zwischen Anspruch und Auftritt, aus denen sich Empfehlungen ableiten lassen), klare Wettbewerber, eine Zielgruppe, die Studierende gut befragen können, und kein akutes Risiko (Insolvenz, Einstellung, Verkauf, Kontroversen), das die Analyse entwertet.
Heute ist der ${HEUTE}. Markt: Deutschland (DACH).`

const REGELN = `Regeln für dich als Unteragent:
- Recherchiere mit WebSearch (Modus standard; extended, wenn Ergebnisse dünn oder veraltet wirken) und WebFetch (offizielle Website, Impressum, Presse-/Über-uns-Seiten, Blog, Social-Media-Profile, Fachpresse wie Gründerszene/Business Insider, deutsche-startups.de, Lebensmittel Zeitung, W&V, Horizont, t3n, Handelsblatt).
- JEDE Faktenangabe mit Quelle (URL) belegen. Nichts erfinden. Wenn etwas nicht auffindbar ist: „unbekannt“. Widersprüchliche Angaben nennen. Follower-Zahlen immer mit Stand (Datum/Quelle) und als ungefähre Angabe.
- Schreibe KEINE Dateien und ändere nichts im Repository; du lieferst nur die strukturierte Rückgabe. Die Hauptsitzung kümmert sich um KI-Nachweis und Git.
- Antworte auf Deutsch.`

const QUELLE = { type: 'object', properties: { aussage: { type: 'string' }, url: { type: 'string' } }, required: ['aussage', 'url'] }
const NOTE = { type: 'object', properties: { note: { type: 'number', description: '1 (schlecht) bis 5 (sehr gut)' }, begruendung: { type: 'string' } }, required: ['note', 'begruendung'] }
const RECHERCHE_SCHEMA = { type: 'object', properties: {
  marke: { type: 'string' },
  steckbrief: { type: 'object', properties: {
    gruendung: { type: 'string' }, sitz: { type: 'string' }, gruender: { type: 'string' }, eigentuemer_finanzierung: { type: 'string' },
    groesse: { type: 'string', description: 'Umsatz, Mitarbeitende o. Ä., falls öffentlich, mit Jahr' },
    produkte_preis: { type: 'string' }, vertrieb: { type: 'string', description: 'D2C, Handel, Länder' }, aktueller_status: { type: 'string', description: 'aktiv? Insolvenz/Verkauf/Umbau? mit Datum' } },
    required: ['gruendung', 'sitz', 'gruender', 'aktueller_status'] },
  markenidentitaet: { type: 'object', properties: {
    claim: { type: 'string' }, mission_werte: { type: 'string' }, tonalitaet: { type: 'string' }, corporate_design: { type: 'string' }, kampagnen: { type: 'string' } } },
  social_media: { type: 'array', items: { type: 'object', properties: {
    kanal: { type: 'string' }, handle_url: { type: 'string' }, follower_ca: { type: 'string' }, aktivitaet: { type: 'string', description: 'Beiträge pro Woche ca., letzter Beitrag, Formate' }, stand: { type: 'string' } }, required: ['kanal', 'follower_ca', 'aktivitaet'] } },
  blog_customer_journey: { type: 'string', description: 'Blog/Magazin, Newsletter, Shop, Abo, Handel, Touchpoints – relevant für Fallstudie 2' },
  zielgruppe: { type: 'string' },
  wettbewerber: { type: 'array', items: { type: 'object', properties: { name: { type: 'string' }, warum: { type: 'string' } }, required: ['name', 'warum'] } },
  datenlage: { type: 'string', description: 'Presse, Interviews, Gründer-Podcasts, Studien zur Kategorie, Bundesanzeiger etc.' },
  analysepotenzial: { type: 'string', description: 'spannende Spannungen, z. B. Positionswechsel, Anspruch vs. Auftritt, Nachhaltigkeitsversprechen' },
  risiken: { type: 'array', items: { type: 'string' } },
  eignung: { type: 'object', properties: {
    desk_research: NOTE, social_media: NOTE, customer_journey_blog: NOTE, markenprofil: NOTE, wettbewerb: NOTE, zielgruppe_erreichbar: NOTE, gesamt: NOTE },
    required: ['desk_research', 'social_media', 'customer_journey_blog', 'markenprofil', 'wettbewerb', 'zielgruppe_erreichbar', 'gesamt'] },
  quellen: { type: 'array', items: QUELLE } },
  required: ['marke', 'steckbrief', 'social_media', 'blog_customer_journey', 'zielgruppe', 'wettbewerber', 'datenlage', 'risiken', 'eignung', 'quellen'] }

const CHECK_SCHEMA = { type: 'object', properties: {
  marke: { type: 'string' },
  pruefungen: { type: 'array', items: { type: 'object', properties: {
    aussage: { type: 'string' }, urteil: { type: 'string', enum: ['bestätigt', 'abweichend', 'unbelegt'] },
    korrektur: { type: 'string' }, url: { type: 'string' } }, required: ['aussage', 'urteil'] } },
  uebersehene_risiken: { type: 'array', items: { type: 'object', properties: { risiko: { type: 'string' }, url: { type: 'string' } }, required: ['risiko'] } },
  eignung_angepasst: { type: 'string', description: 'Ändert die Gegenprüfung die Gesamteignung? Wie und warum?' } },
  required: ['marke', 'pruefungen', 'uebersehene_risiken', 'eignung_angepasst'] }

const JURY_SCHEMA = { type: 'object', properties: {
  rangfolge: { type: 'array', items: { type: 'object', properties: {
    marke: { type: 'string' }, punkte: { type: 'number', description: '0–100' }, staerken: { type: 'string' }, schwaechen: { type: 'string' } }, required: ['marke', 'punkte', 'staerken', 'schwaechen'] } },
  empfehlung_top3: { type: 'array', items: { type: 'object', properties: { marke: { type: 'string' }, begruendung: { type: 'string' } }, required: ['marke', 'begruendung'] } },
  abraten: { type: 'array', items: { type: 'object', properties: { marke: { type: 'string' }, grund: { type: 'string' } }, required: ['marke', 'grund'] } } },
  required: ['rangfolge', 'empfehlung_top3', 'abraten'] }

const recherchePrompt = m => `${KONTEXT}

${REGELN}

Aufgabe: Recherchiere die Marke „${m.name}“ (${m.bereich}; Website laut Liste: ${m.web}) gründlich und bewerte ihre Eignung für die drei Fallstudien.
Erfasse: Steckbrief (Gründung, Sitz, Gründer:innen, Eigentümer/Finanzierung inkl. Übernahmen, Größe, Produkte und Preisniveau, Vertrieb, aktueller Status – ausdrücklich prüfen, ob es Insolvenz, Verkauf, Einstellung, Rebranding oder Kontroversen gab), Markenidentität (Claim/Slogan, Mission/Werte, Tonalität, Corporate Design, bekannte Kampagnen), Social Media (Instagram, Facebook, YouTube, zusätzlich TikTok/LinkedIn: Follower ca., Aktivität, Formate, Stand), Blog/Magazin und Customer-Journey-Touchpoints, Zielgruppe, 5–6 Wettbewerber für ein Repertory Grid (direkt und indirekt, in Deutschland bekannt), Datenlage für Desk Research, Analysepotenzial, Risiken.
Vergib Noten 1–5 je Kriterium (desk_research, social_media, customer_journey_blog, markenprofil, wettbewerb, zielgruppe_erreichbar, gesamt) mit Begründung. Liste alle Quellen mit URL.`

const checkPrompt = (m, r) => `${KONTEXT}

${REGELN}

Aufgabe: Du bist Faktenprüfer:in. Prüfe die Recherche zur Marke „${m.name}“ unabhängig nach – suche selbst neu, verlasse dich nicht auf die angegebenen Quellen.
Recherche: ${kurz(r, 12000)}
Prüfe mindestens diese entscheidungsrelevanten Aussagen: Gründungsjahr und Sitz, Gründer:innen, aktueller Status (aktiv? Insolvenz, Verkauf, Übernahme, Einstellung, Rebranding – mit Datum), Eigentümer/Finanzierung, Größenordnung der Follower und Aktivität auf Instagram, Facebook und YouTube (aktuell), Existenz eines Blogs/Magazins, Claim/Slogan, die genannten Wettbewerber (existieren sie, sind sie in Deutschland relevant?). Suche zusätzlich gezielt nach Risiken, die übersehen wurden (Insolvenz, Rückruf, Shitstorm, Rechtsstreit, Werbeverbot, Abmahnung, Geschäftsaufgabe, Verkauf an Konzern) bis ${HEUTE}.
Urteil je Aussage: bestätigt / abweichend (mit Korrektur) / unbelegt – jeweils mit URL. Sag am Ende, ob sich die Gesamteignung dadurch ändert.`

const juryPrompt = (linse, daten) => `${KONTEXT}

${REGELN}

Aufgabe: Du bist Jurymitglied und vergleichst alle zehn Marken auf Basis der Recherchen UND der Faktenchecks (bei Widersprüchen gilt der Faktencheck). Recherchiere nur nach, wenn für dein Urteil etwas Entscheidendes fehlt.
Deine Perspektive: ${linse}
Daten: ${kurz(daten, 60000)}
Rückgabe: Rangfolge aller zehn Marken mit Punkten (0–100), Stärken und Schwächen; Top 3 mit Begründung; Marken, von denen du abrätst, mit Grund.`

phase('Recherche')
const ergebnisse = await pipeline(
  MARKEN,
  m => agent(recherchePrompt(m), { label: 'Recherche: ' + m.name, phase: 'Recherche', schema: RECHERCHE_SCHEMA }),
  (r, m) => r ? agent(checkPrompt(m, r), { label: 'Faktencheck: ' + m.name, phase: 'Faktencheck', schema: CHECK_SCHEMA }).then(c => ({ marke: m.name, bereich: m.bereich, web: m.web, recherche: r, check: c })) : ({ marke: m.name, bereich: m.bereich, web: m.web, recherche: null, check: null }),
)
const fehlend = ergebnisse.filter(e => !e || !e.recherche).map(e => e ? e.marke : '?')
if (fehlend.length) log('Ohne Recherche: ' + fehlend.join(', '))

const juryDaten = ergebnisse.filter(Boolean).map(e => ({
  marke: e.marke, bereich: e.bereich,
  steckbrief: e.recherche && e.recherche.steckbrief, markenidentitaet: e.recherche && e.recherche.markenidentitaet,
  social_media: e.recherche && e.recherche.social_media, blog_customer_journey: e.recherche && e.recherche.blog_customer_journey,
  zielgruppe: e.recherche && e.recherche.zielgruppe, wettbewerber: e.recherche && e.recherche.wettbewerber,
  analysepotenzial: e.recherche && e.recherche.analysepotenzial, risiken: e.recherche && e.recherche.risiken,
  eignung: e.recherche && e.recherche.eignung, faktencheck: e.check,
}))

phase('Vergleich')
const LINSEN = [
  { name: 'Fallstudien-Eignung', linse: 'Fallstudien-Eignung über alle drei Fallstudien: Datenlage für Desk Research, Material für die Kommunikationsanalyse und einen Instagram-Post samt Eye-Tracking, Customer Journey und Blog-Anknüpfung, Analysepotenzial für das Markensteuerrad (klare Identität, aber auch Spannungen, aus denen sich gute Empfehlungen ableiten lassen), Qualität der Wettbewerber für das Repertory Grid. Ziel: die bestmögliche Note.' },
  { name: 'Gruppenpraxis', linse: 'Gruppenpraxis in knapp zwei Wochen: Machbarkeit, Risiko (unsichere Lage, wenig Material, inaktive Kanäle), Zielgruppe, die Studierende selbst sind oder leicht befragen können (echte Kurzinterviews, Live-Umfrage im Hörsaal), Wiedererkennung im Hörsaal (Einstiegsrätsel „Welche Marke steckt dahinter?“ funktioniert nur, wenn die Marke einigen bekannt ist), Spaß und Motivation, Differenzierung gegenüber anderen Gruppen.' },
]
const jury = (await parallel(LINSEN.map(l => () => agent(juryPrompt(l.linse, juryDaten), { label: 'Jury: ' + l.name, phase: 'Vergleich', schema: JURY_SCHEMA }).then(j => j ? { ...j, perspektive: l.name } : null)))).filter(Boolean)

const summe = {}
for (const j of jury) for (const r of j.rangfolge) summe[r.marke] = (summe[r.marke] || 0) + (Number(r.punkte) || 0)
const gesamt = Object.entries(summe).sort((a, b) => b[1] - a[1]).map(([marke, punkte]) => ({ marke, punkte }))
log('Gesamt: ' + gesamt.map(g => g.marke + ' ' + g.punkte).join(' · '))

return { ergebnisse, jury, gesamt, fehlend }
