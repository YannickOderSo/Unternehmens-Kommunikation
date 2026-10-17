export const meta = {
  name: 'markenkompetenz-a1',
  description: 'A1 Markenkompetenz: Fakten aus dem Dossier sammeln, unsichere Angaben im Web prüfen, Vorlage §0 und Folienentwurf 03 erstellen',
  phases: [
    { title: 'Recherche', detail: 'Dossier-Auszug, Web-Prüfung Finanzen, Web-Prüfung Vertrieb und Meilensteine' },
    { title: 'Synthese', detail: 'markenkompetenz.md, Folienentwurf Folie 3' },
    { title: 'Prüfen', detail: 'Faktentreue, Methode und Folie, Konsistenz' },
    { title: 'Überarbeiten', detail: 'Befunde einarbeiten' },
  ],
}

const ZIEL = args.ziel
const GEMEINSAM = `
Kontext: Studentische Gruppenarbeit (Modul Unternehmenskommunikation, HS Kaiserslautern), Fallstudie 1 „Brand Persona & Markenidentität“, Marke HOLY (HOLY Softdrinks GmbH). Repository /home/user/Unternehmens-Kommunikation. Heute ist ${args.datum}. Aufgabe A1 (Yannick, Bündel A): Markenkompetenz – Zentrum des Markensteuerrads nach Esch („Wer bin ich?“): Herkunft, Entwicklung, Rolle im Markt, Kernkompetenz. Folie 03, 45 Sekunden, Entwurf bis Di 20.10.
Vorgaben: fallstudie-1-brand-persona/aufgaben-im-detail.html (Aufgabe A1, ab ca. Zeile 194), methoden.md §0 (Vorlage), Recherche-Dossier recherche/holy-recherche.md (Faktenstatus ✔ gesichert, ✎ korrigiert, ~ unsicher, H Hypothese; Quellen [n] in Anhang B). Für die Folie nur Angaben mit ✔ oder ✎; alle Umsätze sind Selbstauskünfte („laut Unternehmen, Stand …“, Dossier 9.4). Was sich nicht klären lässt, kommt nicht auf die Folie. Es gibt kein Vorlesungsmaterial: Modellbegriffe nach Standardliteratur (Esch; Wettbewerbsrollen nach Kotler) mit Hinweis auf Abgleich mit der Vorlesung.
Feste Regeln:
- Öffne KEINE Dateien unter /root/.claude/uploads und keine Datei mit „NUR-Gruppenordner“ im Namen.
- Ändere keine Dateien außer der, die dein Auftrag ausdrücklich nennt; nicht ki-nachweis/*, nicht praesentation/*. Kein git commit.
- Keine Zahl, kein Zitat, keine Quelle erfinden. Jede Aussage mit Fundstelle (Dossier-Abschnitt + [n], oder URL + Abrufdatum). Was du nicht selbst geöffnet hast, gilt als ungeprüft.
- Keine Modellbezeichnungen (Namen von KI-Modellen) in Dateien schreiben.
`
const FAKTEN = {
  type: 'object',
  properties: {
    bereich: { type: 'string' },
    fakten: { type: 'array', items: { type: 'object', properties: {
      thema: { type: 'string' }, aussage: { type: 'string' },
      status: { type: 'string', description: '✔ / ✎ / ~ / H / neu bestätigt / neu widerlegt / nicht prüfbar' },
      quelle: { type: 'string', description: 'Dossier-Abschnitt + [n] oder URL + Abrufdatum' },
      folientauglich: { type: 'boolean' } },
      required: ['thema', 'aussage', 'status', 'quelle', 'folientauglich'] } },
    hinweise: { type: 'array', items: { type: 'string' } },
  },
  required: ['bereich', 'fakten', 'hinweise'],
}

phase('Recherche')
const recherche = await parallel([
  () => agent(`${GEMEINSAM}
Auftrag DOSSIER (nur lesen): Ziehe aus recherche/holy-recherche.md alle Fakten für die Markenkompetenz heraus: Kap. 1 (HOLY auf einen Blick), 2.1 Zeitleiste, 2.2 Gründer und Herkunft, 2.3 Finanzierung/Eigentümer, 2.4 Größe, 2.5 Vertrieb, 2.6 Marktrolle, 2.7 Selbstverständnis, 2.8 Repositionierung, 3.1–3.2 Portfolio/Preise, 5.1 Markt in Zahlen, 6.5 Claims, 9.2 unsichere Angaben, 9.3 zeitkritisch, 9.4 Quellenkritik, 10.3 Aufgaben Bündel A. Dazu die aktuellen Daten und Notizen der Web-Folie f03 in fallstudie-1-brand-persona/praesentation/index.html und die Vorlage methoden.md §0. Je Fakt Status und Quelle wie im Dossier; markiere, ob er laut Vorgabe folientauglich ist (nur ✔/✎). Notiere in „hinweise“, welche Angaben laut Dossier 9.2/10.3 noch zu prüfen sind und wo f03 vom Dossier abweicht.`,
    { label: 'recherche:dossier', phase: 'Recherche', schema: FAKTEN }),
  () => agent(`${GEMEINSAM}
Auftrag FINANZEN (Websuche und Abruf von Seiten erwünscht; nur lesen, keine Dateien ändern): Prüfe die Kennzahlen von HOLY im Web, ausgehend von recherche/holy-recherche.md Abschnitte 2.3, 2.4, 9.2:
1. Jahresabschluss 2024 (bzw. letzter verfügbarer) der Gesellschaft hinter HOLY (Firmenname laut Dossier prüfen; Umfirmierung 11/2025 beachten) im Unternehmensregister oder Bundesanzeiger: Umsatz (falls offengelegt), Ergebnis, Bilanzsumme, Mitarbeitende. Versuche unternehmensregister.de, bundesanzeiger.de und frei zugängliche Auszüge (z. B. North Data). Wenn ein Abruf technisch nicht geht (Formular, Captcha), sag genau, was Yannick selbst tun muss (Suchbegriff, Registernummer, Schritte).
2. Umsatzangaben 2024/2025 (≈ 170 Mio. € laut Press Kit/WiWo?), Zahl der Kund:innen, Mitarbeitende: aktuellste Selbstauskünfte und Presseberichte, jeweils mit Datum.
3. Finanzierung (Series A 2023, spätere Runden), Eigentümer/Investoren.
Je Angabe: Wert, Einheit, Stand, Quelle (URL, Abrufdatum), Art (Selbstauskunft / Register / Presse), ob sie die Dossier-Angabe bestätigt, korrigiert oder widerlegt.`,
    { label: 'recherche:finanzen', phase: 'Recherche', schema: FAKTEN }),
  () => agent(`${GEMEINSAM}
Auftrag VERTRIEB UND MEILENSTEINE (Websuche erwünscht; nur lesen, keine Dateien ändern): Prüfe die laut Dossier 9.2/10.3 unsicheren oder zeitkritischen Angaben und suche Neues seit 14.10.2026:
1. Zahl der Verkaufsstellen im Handel (Dossier nennt 6.000 / 8.500 / „10.000+“): Welche Zahl stimmt für welchen Stand, welche Quelle?
2. Verkaufte Portionen/Dosen (Selbstauskünfte), Länder/Märkte.
3. Syrup-Starttag (Dossier: 19.04.2026 nur laut Suchauszug).
4. Website-Demografie (Similarweb): nur festhalten, ob abrufbar; nicht als Fakt über die Kundschaft verwenden.
5. Meilensteine 2020–2026 für eine Zeitleiste mit 4–6 Einträgen: Gründung, Marktstart, Iced Tea, Series A, Handel, TV-Kampagne, Umfirmierung, ggf. Neues. Bestätige Datum und Inhalt an einer zweiten Quelle, wo möglich.
6. Claims: Dachclaim „Die Softdrink Revolution“, Markenversprechen „Geiler Geschmack mit gutem Gewissen“, Kampagnen-Claims 2026 – was steht aktuell auf de.holy.com?
Je Angabe: Inhalt, Datum, Quelle (URL, Abrufdatum), Bestätigung/Korrektur gegenüber dem Dossier.`,
    { label: 'recherche:vertrieb', phase: 'Recherche', schema: FAKTEN }),
])
const ok = recherche.filter(Boolean)
log(`${ok.length} von 3 Recherchen da, ${ok.reduce((n, r) => n + r.fakten.length, 0)} Fakten`)

phase('Synthese')
const synthese = await agent(`${GEMEINSAM}
Auftrag: Schreibe die Ausarbeitung ${ZIEL} (neu anlegen; nur diese Datei schreiben) und gib den Folienentwurf zurück.
Recherche (JSON):
${JSON.stringify(ok, null, 1)}

Aufbau von ${ZIEL} (Deutsch, kurze Sätze; Stil wie fallstudie-1-brand-persona/persona-steckbrief.md und limbic-map.md; Kopf mit Stand ${args.datum}, „Entwurf, Prüfung durch Yannick offen“; Herkunft: erstellt mit Claude Code, KI-Nachweis 55, Delegation D11; Kennzeichnung ✔/✎/~/H wie im Dossier, neu Geprüftes mit URL und Abrufdatum):
1. Auf einen Blick (für die Folie): Titel-Vorschlag aus Marktrolle + Kernkompetenz, Zeitleiste (4–6 Einträge, Jahr + höchstens 5 Wörter), 3 Kennzahlen (Wert, Einheit, Bezeichnung, Quelle, Stand), Claim (Entscheidung Dachclaim oder Markenversprechen, mit Begründung).
2. Die Vorlage aus methoden.md §0 vollständig ausgefüllt (Tabelle Merkmal | Inhalt | Quelle): Gründung/Herkunft, Meilensteine, Eigentümer, Kennzahlen, Portfolio & Preisniveau, Rolle im Markt, Selbstverständnis, Wettbewerbsset (Vorschlag Dossier 5.3, als „noch nicht beschlossen“ kennzeichnen).
3. Marktrolle begründen: Herausforderer/Spezialist/Pionier/Marktführer nach Kotler (Modellbegriffe, mit Vorlesung abgleichen) – ein Satz für die Folie, ausführlicher hier; warum kein Pionier, warum kein Marktanteil auf der Folie.
4. Kernkompetenz (2–4 Wörter) und wie sie zu Persona (Hedonisten, Geschmack ohne Zucker; persona-steckbrief.md, limbic-map.md) und zum Feld Markenkompetenz im Steuerrad passt.
5. Geprüfte und offene Angaben: Tabelle der unsicheren Angaben aus Dossier 9.2/10.3 mit Ergebnis der Web-Prüfung (bestätigt/korrigiert/offen) und was Yannick noch selbst tun muss (z. B. Jahresabschluss abrufen).
6. Abgleich mit der Web-Folie f03: was bleibt, was sich ändert (konkrete Werte).
7. Offene Punkte (Checkliste) und Quellen.

Gib außerdem zurück:
- folienentwurf: Markdown-Abschnitt „## Folie 3 – Markenkompetenz“ im Format der vorhandenen Abschnitte in fallstudie-1-brand-persona/folienentwuerfe.md (Folie 2, 4, 5 als Muster): Bündel/Zeit/Backup-Bezug, Titel (Kernaussage) + 2 Alternativen, Text auf der Folie, Visualisierung (Zeitleiste + 3 Kennzahlen + Rolle; Hinweis auf grafiken/folie-03-markenkompetenz.svg), Sprechtext ≤ 45 Sekunden (ca. 100 Wörter), 3 mögliche Rückfragen mit Antwort, „Zu prüfen“-Liste, ggf. JSON-Vorschlag für die Daten von f03.
- grafik: die finalen Werte für eine Zeitleisten-Grafik (Einträge mit Jahr, Text, Status, Quelle; Kennzahlen; Rolle; Kernkompetenz; Claim).`, {
  label: 'synthese:markenkompetenz', phase: 'Synthese',
  schema: { type: 'object', properties: {
    datei: { type: 'string' },
    titel: { type: 'string' },
    rolle: { type: 'string' }, kernkompetenz: { type: 'string' },
    zeitleiste: { type: 'array', items: { type: 'object', properties: { jahr: { type: 'string' }, text: { type: 'string' }, status: { type: 'string' }, quelle: { type: 'string' } }, required: ['jahr', 'text', 'status', 'quelle'] } },
    kennzahlen: { type: 'array', items: { type: 'object', properties: { wert: { type: 'string' }, bezeichnung: { type: 'string' }, quelle: { type: 'string' }, stand: { type: 'string' } }, required: ['wert', 'bezeichnung', 'quelle', 'stand'] } },
    claim: { type: 'string' },
    folienentwurf: { type: 'string' },
    offene_fragen: { type: 'array', items: { type: 'string' } } },
    required: ['datei', 'titel', 'rolle', 'kernkompetenz', 'zeitleiste', 'kennzahlen', 'claim', 'folienentwurf', 'offene_fragen'] },
})
log(synthese ? `Titel: ${synthese.titel}` : 'Synthese fehlgeschlagen')

const BEFUNDE = {
  type: 'object',
  properties: {
    befunde: { type: 'array', items: { type: 'object', properties: {
      schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
      stelle: { type: 'string' }, problem: { type: 'string' }, beleg: { type: 'string' }, vorschlag: { type: 'string' } },
      required: ['schwere', 'stelle', 'problem', 'beleg', 'vorschlag'] } },
    gesamturteil: { type: 'string' },
  },
  required: ['befunde', 'gesamturteil'],
}
const ENTWURF = synthese ? `\nDer Folienentwurf (noch nicht in folienentwuerfe.md eingefügt):\n---\n${synthese.folienentwurf}\n---\n` : ''
const PRUEFER = [
  { key: 'fakten', prompt: `Prüfe ${ZIEL} und den Folienentwurf auf FAKTENTREUE (Websuche erlaubt): Jede Zahl, jedes Datum, jeder Name, jede Quellennummer muss im Dossier bzw. an der angegebenen URL genau so stehen. Sind Selbstauskünfte als solche gekennzeichnet („laut Unternehmen, Stand …“)? Stehen auf der Folie nur ✔/✎-Angaben oder neu bestätigte? Öffne die neu zitierten URLs selbst und prüfe die Aussage.` },
  { key: 'methode', prompt: `Prüfe ${ZIEL} und den Folienentwurf auf METHODE und FOLIE: Ist das Feld Markenkompetenz nach Esch richtig verstanden (Zentrum des Steuerrads, „Wer bin ich?“)? Sind die Wettbewerbsrollen nach Kotler korrekt verwendet (Marktführer, Herausforderer, Mitläufer, Nischenanbieter; „Pionier“ als Markteintrittsstrategie)? Websuche für Modellbegriffe erlaubt, mit Quelle. Ist der Titel eine Kernaussage, sind Text und Sprechtext in 45 Sekunden machbar (Wörter zählen), sind Zeitleiste (höchstens 5 Wörter je Eintrag) und 3 Kennzahlen folientauglich? Sind die Rückfragen realistisch?` },
  { key: 'konsistenz', prompt: `Prüfe ${ZIEL} und den Folienentwurf auf KONSISTENZ mit dem Rest der Arbeit: fallstudie-1-brand-persona/folienentwuerfe.md (Folie 2, 4, 5), persona-steckbrief.md, limbic-map.md (Persona jetzt Hedonisten; Fit „passt teilweise“), dossier-buendel-b.md (Wettbewerbsset), praesentation/index.html (f03, f10 Feld Kompetenz). Widersprechen sich Zahlen, Rollen, Kernkompetenz, Claim oder Wettbewerbsset zwischen den Dateien? Passt die Überleitung zu Folie 04? Sprache: Deutsch, kurze Sätze, einheitliche Begriffe.` },
]
phase('Prüfen')
const pruefungen = await parallel(PRUEFER.map(p => () =>
  agent(`${GEMEINSAM}\nNur lesen, nichts ändern.\n${ENTWURF}\n${p.prompt}\nJeder Befund mit Beleg und konkretem Vorschlag. Erfinde keine Befunde; was stimmt, nenne im Gesamturteil.`,
    { label: `pruefen:${p.key}`, phase: 'Prüfen', schema: BEFUNDE })
    .then(r => r ? { pruefer: p.key, ...r } : null)))
const alle = pruefungen.filter(Boolean)
const befunde = alle.flatMap(p => p.befunde.map(b => ({ pruefer: p.pruefer, ...b })))
log(`${befunde.length} Befunde: ${befunde.filter(b => b.schwere === 'hoch').length} hoch, ${befunde.filter(b => b.schwere === 'mittel').length} mittel`)

phase('Überarbeiten')
const ueberarbeitung = await agent(`${GEMEINSAM}
Auftrag: Arbeite die Prüfbefunde ein. Ändere nur ${ZIEL}; den Folienentwurf gibst du überarbeitet zurück.
${ENTWURF}
Befunde (JSON):
${JSON.stringify(befunde, null, 1)}
Prüfe jeden Befund selbst an der Fundstelle. Berechtigte umsetzen (alle hoch und mittel, niedrig wenn sinnvoll), unberechtigte begründet ablehnen. Datei und Folienentwurf müssen übereinstimmen (Titel, Zeitleiste, Kennzahlen, Rolle, Claim). Externe Quellen nur übernehmen, wenn du sie selbst geöffnet und die Aussage gefunden hast.`, {
  label: 'ueberarbeiten:markenkompetenz', phase: 'Überarbeiten',
  schema: { type: 'object', properties: {
    titel: { type: 'string' }, rolle: { type: 'string' }, kernkompetenz: { type: 'string' },
    zeitleiste: { type: 'array', items: { type: 'object', properties: { jahr: { type: 'string' }, text: { type: 'string' }, status: { type: 'string' }, quelle: { type: 'string' } }, required: ['jahr', 'text', 'status', 'quelle'] } },
    kennzahlen: { type: 'array', items: { type: 'object', properties: { wert: { type: 'string' }, bezeichnung: { type: 'string' }, quelle: { type: 'string' }, stand: { type: 'string' } }, required: ['wert', 'bezeichnung', 'quelle', 'stand'] } },
    claim: { type: 'string' },
    folienentwurf: { type: 'string' },
    umgesetzt: { type: 'array', items: { type: 'string' } },
    nicht_umgesetzt: { type: 'array', items: { type: 'object', properties: { befund: { type: 'string' }, grund: { type: 'string' } }, required: ['befund', 'grund'] } },
    fuer_yannick: { type: 'array', items: { type: 'string' } } },
    required: ['titel', 'rolle', 'kernkompetenz', 'zeitleiste', 'kennzahlen', 'claim', 'folienentwurf', 'umgesetzt', 'nicht_umgesetzt', 'fuer_yannick'] },
})

return {
  recherche: ok.map(r => ({ bereich: r.bereich, n: r.fakten.length, hinweise: r.hinweise })),
  synthese: synthese ? { titel: synthese.titel, rolle: synthese.rolle, kernkompetenz: synthese.kernkompetenz, offene_fragen: synthese.offene_fragen } : null,
  pruefungen: alle.map(p => ({ pruefer: p.pruefer, gesamturteil: p.gesamturteil, anzahl: p.befunde.length })),
  befunde,
  ueberarbeitung,
}
