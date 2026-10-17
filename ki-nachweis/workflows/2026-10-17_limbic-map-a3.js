export const meta = {
  name: 'limbic-map-a3',
  description: 'A3 Limbic Map: Persona und HOLY nach Häusel verorten, Fit prüfen, Konsequenzen und Folienentwurf ableiten',
  phases: [
    { title: 'Grundlagen', detail: 'Modell (mit Websuche), Persona-Signale, Marken-Signale' },
    { title: 'Synthese', detail: 'Ausarbeitung limbic-map.md, Folienentwurf, Übergabe an Elias' },
    { title: 'Prüfen', detail: 'Modelltreue, Belege und Heuristik, Nutzen für Folie und Bündel C' },
    { title: 'Überarbeiten', detail: 'Befunde einarbeiten' },
  ],
}

const ZIEL = args.ziel
const GEMEINSAM = `
Kontext: Studentische Gruppenarbeit (Modul Unternehmenskommunikation, HS Kaiserslautern), Fallstudie 1 „Brand Persona & Markenidentität“, Marke HOLY. Repository /home/user/Unternehmens-Kommunikation. Heute ist Sa, ${args.datum}. Aufgabe A3 (Yannick, Bündel A): Limbic Map nach Häusel – Persona „Marco, 28“ und den Auftritt von HOLY verorten, Fit prüfen, 3 Konsequenzen (Bildwelt, Tonalität, Botschaften) ableiten; heute an Elias (Bündel C). Folie 05, 60 Sekunden.
Vorgaben aus fallstudie-1-brand-persona/aufgaben-im-detail.html (A3) und methoden.md §1 (Limbic Map): Gewichte Balance/Dominanz/Stimulanz in %, Summe 100 – das ist eine HEURISTIK des Teams, kein Bestandteil des Modells. Ein Limbic Type beschreibt Menschen, nicht Marken; die Marke verortet man über Emotionsfelder/Motive. Es gibt kein Vorlesungsmaterial: Modellbegriffe nach Standardliteratur verwenden und auf Abgleich mit der Vorlesung hinweisen.
Feste Regeln:
- Öffne KEINE Dateien unter /root/.claude/uploads und KEINE Datei mit „NUR-Gruppenordner“ im Namen. Statista-Zahlen nur so, wie sie in persona-steckbrief.md oder persona-daten.md stehen.
- Ändere keine Dateien außer der, die dein Auftrag ausdrücklich nennt; nicht ki-nachweis/*, nicht praesentation/*. Kein git commit.
- Keine Zahl, kein Zitat, keine Quelle erfinden. Jede Aussage mit Fundstelle (Datei + Abschnitt, Dossier-Abschnitt mit Quellennummer [n] aus Anhang B, oder URL + Seite). Modellwissen ohne geprüfte Quelle ausdrücklich so kennzeichnen.
- Keine Modellbezeichnungen (Namen von KI-Modellen) in Dateien schreiben.
`

const SIGNALE = {
  type: 'object',
  properties: {
    bereich: { type: 'string' },
    aussagen: { type: 'array', items: { type: 'object', properties: {
      aussage: { type: 'string' },
      system: { type: 'string', description: 'Balance, Dominanz, Stimulanz, Mischbereich oder Modell' },
      richtung: { type: 'string', description: 'stark dafür / leicht dafür / neutral / dagegen / Modellangabe' },
      status: { type: 'string', description: 'Daten mit Quelle / Annahme / Modellwissen / Quelle (Web)' },
      beleg: { type: 'string' } },
      required: ['aussage', 'system', 'richtung', 'status', 'beleg'] } },
    vorschlag: { type: 'string', description: 'Gewichte B/D/S mit Spanne und Begründung, bzw. Modellzusammenfassung' },
    unsicherheiten: { type: 'array', items: { type: 'string' } },
  },
  required: ['bereich', 'aussagen', 'vorschlag', 'unsicherheiten'],
}

phase('Grundlagen')
const grundlagen = await parallel([
  () => agent(`${GEMEINSAM}
Auftrag MODELL (nur lesen; Websuche erlaubt und erwünscht): Kläre die Limbic Map nach Hans-Georg Häusel (Gruppe Nymphenburg) so genau und belegt wie möglich:
1. Die drei Motiv- und Emotionssysteme (Balance, Dominanz, Stimulanz) und ihre typischen Motive/Werte.
2. Die Mischbereiche bzw. Emotionsfelder zwischen den Systemen (Abenteuer/Thrill, Disziplin/Kontrolle, Fantasie/Genuss) und ggf. weitere Feldbezeichnungen.
3. Die sieben Limbic Types, ihre Lage auf der Karte (zwischen welchen Systemen, ungefähre Reihenfolge im Kreis) und typische Motive je Typ.
4. Wie man eine Marke auf der Limbic Map verortet (Emotionsfelder/Motivprofil statt Typ).
5. Verteilung der Limbic Types nach Alter und Geschlecht in Deutschland: Öffne das PDF der GIK „Die Limbic Types in best for planning“ (2020) unter https://gik.media/wp-content/uploads/2020/09/b4p-2020_Limbic_Website.pdf (Dossier-Quelle [105]) und ziehe heraus, was es zu Männern bzw. Altersgruppen 20–29 / 30–39 sagt (mit Seitenangabe). Wenn es nicht abrufbar ist, sag das.
Vergleiche mit methoden.md §1 (Limbic Map) und recherche/holy-recherche.md Abschnitt 4.4 sowie den Winkeln in praesentation/index.html, Folie f05 (Daten „karte“): Stimmen Lage und Reihenfolge der Typen? Jede Aussage mit URL (+ Seite) und Status; Unsicheres als unsicher markieren. Häusel-Begriffe auf Deutsch.`,
    { label: 'grundlagen:modell', phase: 'Grundlagen', schema: SIGNALE }),
  () => agent(`${GEMEINSAM}
Auftrag PERSONA (nur lesen): Leite aus den Belegen ab, welche Motivsysteme Marco antreiben. Lies fallstudie-1-brand-persona/persona-steckbrief.md (ganz), persona-daten.md, recherche/holy-recherche.md Abschnitte 4.1–4.4 sowie persona-datenerhebung.md (Codebuch K8 „Limbic-Signal“).
Gehe jedes Merkmal durch (Alter/Geschlecht, Schichtdienst, Werte wie „erfolgreich sein“ 27 % vs. Ø 22 %, „Spaß haben“, Sicherheit und Beziehung wie im Ø, Hobbys Gaming/Geselligkeit/Laufen, Innovationsneigung, „gesünder leben, aber schnell“, Preisbewusstsein, Kaufmotive, Pains/Gains) und ordne es Balance, Dominanz oder Stimulanz zu – mit Status (Daten oder Annahme) und Stärke. Achte darauf, dass Kategoriedaten nicht HOLY-Daten sind und dass Annahmen der Persona nicht als Belege für sich selbst zählen dürfen (Zirkelschluss).
Schlage dann Gewichte B/D/S (Summe 100) mit plausibler Spanne vor, den Limbic Type (und den zweitwahrscheinlichsten) und relevante Mischbereiche. Prüfe ausdrücklich den Startwert aus Dossier 4.4 (B 20 / D 35 / S 45, Abenteurer mit Hedonisten-Anteil): Tragen die neuen Daten diesen Wert, oder ist z. B. Dominanz zu hoch oder Balance zu niedrig angesetzt?`,
    { label: 'grundlagen:persona', phase: 'Grundlagen', schema: SIGNALE }),
  () => agent(`${GEMEINSAM}
Auftrag MARKE (nur lesen): Leite aus dem Auftritt von HOLY ab, welche Motivsysteme und Emotionsfelder die Marke anspricht. Lies in recherche/holy-recherche.md die Abschnitte 1, 2.7 (Selbstverständnis), 2.8 (Repositionierung), 3.4 (Claims), 4.4, 6.1–6.7 (Kanäle, Tonalität, Corporate Design, Bildwelt, Claims, Kampagnen) und 8 (Spannungsfelder); dazu fallstudie-1-brand-persona/praesentation/index.html Folie f05 (aktuelle Daten und Notizen).
Sammle konkrete Signale (Farben, Comic-Tiere, Sortenvielfalt/Limited Drops, provokante Kampagne, „gutes Gewissen“, Squad/Community, Koffein/Leistung, Herausforderer-Gestus, Softdrink-Repositionierung 2026 „unabhängig von Alter, Lebensstil oder Anlass“, Sport/Hydration) und ordne jedes einem System bzw. Emotionsfeld zu – mit Beleg [n] und Status (✔/✎/~/H aus dem Dossier). Beachte die Entwicklung über die Zeit (Gaming-Booster 2021 → Softdrink 2026): Wohin bewegt sich der Auftritt?
Schlage Gewichte B/D/S für den Auftritt (Summe 100, Spanne) und die 2–3 wichtigsten Emotionsfelder vor. Prüfe den Startwert aus Dossier 4.4 (B 30 / D 15 / S 55).`,
    { label: 'grundlagen:marke', phase: 'Grundlagen', schema: SIGNALE }),
])
const ok = grundlagen.filter(Boolean)
log(`${ok.length} von 3 Grundlagen da`)

phase('Synthese')
const synthese = await agent(`${GEMEINSAM}
Auftrag: Schreibe die Ausarbeitung ${ZIEL} (neu anlegen; nur diese Datei schreiben) und gib zusätzlich den Folienentwurf und die Übergabe an Elias zurück.
Grundlagen (JSON aus drei Analysen):
${JSON.stringify(ok, null, 1)}

Inhalt von ${ZIEL} (Deutsch, kurze Sätze, wie persona-steckbrief.md aufgebaut; Kopf mit Stand ${args.datum}, „Entwurf, Prüfung durch Yannick offen“, Herkunft: erstellt mit Claude Code, KI-Nachweis 52 bzw. Delegation D10):
1. Kurzfassung für Elias (5–7 Zeilen, als Zitatblock): Gewichte Persona und Marke, Limbic Type + 3 Motive, Fit-Urteil, 3 Konsequenzen.
2. Das Modell in Kürze (Systeme, Mischbereiche, Typen, Marke über Emotionsfelder) mit Quellen und Hinweis auf Abgleich mit der Vorlesung; die Prozentgewichte als Team-Heuristik kennzeichnen.
3. Persona auf der Limbic Map: Tabelle Merkmal → System → Stärke → Status/Beleg; daraus Gewichte B/D/S (Summe 100) mit Spanne; Limbic Type + zweitwahrscheinlicher Typ; 3 typische Motive; relevante Mischbereiche. Vergleich mit dem Startwert aus Dossier 4.4 und Begründung jeder Änderung.
4. Marke (Auftritt) auf der Limbic Map: Tabelle Signal → System/Emotionsfeld → Beleg; Gewichte B/D/S mit Spanne; 2–3 Emotionsfelder; Entwicklung 2021 → 2026. Vergleich mit Dossier 4.4.
5. Fit: je System die Differenz (Marke − Persona) in Prozentpunkten; wo passt es, wo ist die größte Lücke; ein ehrliches Urteil (passt / passt teilweise / passt nicht) als Grundlage für den Folientitel. Hinweis, dass eine eigene Überschneidungs-Kennzahl keine Häusel-Kennzahl ist.
6. Drei Konsequenzen: Bildwelt, Tonalität, Botschaften – jeweils „Kurzform (4–6 Wörter)“ für die Folie + 2–3 Sätze Begründung mit Bezug auf Lücke/Fit und auf Belege. Konkret, nicht beliebig, kein Klischee (kein Teenie-Gamer).
7. Was die Einordnung nicht kann (Heuristik, keine Messung; Kategoriedaten; b4p-Daten nur als Kontext; Limbic® ist eine eingetragene Marke der Gruppe Nymphenburg, falls belegt).
8. Offene Punkte (Checkliste) und Quellen.

Gib außerdem zurück:
- folienentwurf: Markdown-Abschnitt „## Folie 5 – Limbic Map“ im Format der vorhandenen Abschnitte in fallstudie-1-brand-persona/folienentwuerfe.md (lies Folie 2 und Folie 4 dort als Muster): Bündel/Zeit/Backup-Bezug, Titel (Kernaussage = Fit-Urteil) + 2 Alternativen, Text auf der Folie, Visualisierung (Limbic-Map-Grafik mit zwei Punkten, Hinweis auf grafiken/folie-05-limbic-map.svg), Sprechtext ≤ 60 Sekunden (ca. 130 Wörter), 3 mögliche Rückfragen mit Antwort, „Zu prüfen“-Liste (u. a. Vorlesungsgrafik, Werte in praesentation/index.html f05 austauschen).
- uebergabe: Text für den Gruppenchat an Elias (max. 8 Zeilen).
- daten: die finalen Werte für die Grafik.`, {
  label: 'synthese:limbic-map', phase: 'Synthese',
  schema: { type: 'object', properties: {
    datei: { type: 'string' },
    persona: { type: 'object', properties: { balance: { type: 'number' }, dominanz: { type: 'number' }, stimulanz: { type: 'number' }, typ: { type: 'string' }, zweittyp: { type: 'string' }, motive: { type: 'array', items: { type: 'string' } } }, required: ['balance', 'dominanz', 'stimulanz', 'typ', 'zweittyp', 'motive'] },
    marke: { type: 'object', properties: { balance: { type: 'number' }, dominanz: { type: 'number' }, stimulanz: { type: 'number' }, emotionsfelder: { type: 'array', items: { type: 'string' } } }, required: ['balance', 'dominanz', 'stimulanz', 'emotionsfelder'] },
    fit: { type: 'string' },
    konsequenzen: { type: 'array', items: { type: 'object', properties: { bereich: { type: 'string' }, kurz: { type: 'string' }, begruendung: { type: 'string' } }, required: ['bereich', 'kurz', 'begruendung'] } },
    titel: { type: 'string' },
    folienentwurf: { type: 'string' },
    uebergabe: { type: 'string' },
    offene_fragen: { type: 'array', items: { type: 'string' } } },
    required: ['datei', 'persona', 'marke', 'fit', 'konsequenzen', 'titel', 'folienentwurf', 'uebergabe', 'offene_fragen'] },
})
log(synthese ? `Persona B${synthese.persona.balance}/D${synthese.persona.dominanz}/S${synthese.persona.stimulanz} (${synthese.persona.typ}), Marke B${synthese.marke.balance}/D${synthese.marke.dominanz}/S${synthese.marke.stimulanz}` : 'Synthese fehlgeschlagen')

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
const ENTWURF_TEXT = synthese ? `\nDer Folienentwurf (noch nicht in folienentwuerfe.md eingefügt) lautet:\n---\n${synthese.folienentwurf}\n---\nDie Übergabe an Elias lautet:\n---\n${synthese.uebergabe}\n---\n` : ''

const PRUEFER = [
  { key: 'modell', prompt: `Prüfe ${ZIEL} und den Folienentwurf auf MODELLTREUE (Websuche erlaubt): Sind Systeme, Mischbereiche, Limbic Types, ihre Lage und Motive nach Häusel/Gruppe Nymphenburg korrekt wiedergegeben? Wird die Marke korrekt über Emotionsfelder statt über einen Typ verortet? Sind Aussagen zu b4p/[105] richtig zitiert? Ist klar, dass die Prozentgewichte eine Team-Heuristik sind? Jede Korrektur mit Quelle (URL + Seite).` },
  { key: 'belege', prompt: `Prüfe ${ZIEL} und den Folienentwurf auf BELEGE und LOGIK: Ist jede Zuordnung zu Balance/Dominanz/Stimulanz durch eine Fundstelle gedeckt und richtig als Daten/Annahme/Modellwissen gekennzeichnet? Gibt es Zirkelschlüsse (Annahmen der Persona als Beleg für sich selbst)? Sind die Gewichte aus den Signalen nachvollziehbar (Stärken, Spannen), rechnen die Differenzen richtig, summieren sich alle Gewichte auf 100? Stimmen alle Zahlen und Quellennummern mit persona-steckbrief.md, persona-daten.md und recherche/holy-recherche.md überein? Statista-Werte nur aus diesen Dateien?` },
  { key: 'nutzen', prompt: `Prüfe ${ZIEL}, den Folienentwurf und die Übergabe auf NUTZEN und KLARHEIT: Kann Elias (Bündel C, Kommunikationsanalyse und Empfehlungen) mit der Übergabe sofort arbeiten? Sind die 3 Konsequenzen konkret, überprüfbar und aus der Lücke abgeleitet (nicht beliebig, kein Klischee)? Passt der Folientitel zum Fit-Urteil? Ist der Sprechtext in 60 Sekunden sprechbar (Wörter zählen) und ohne Fachchinesisch? Sind Folie 04 (Persona) und Folie 06 (Repertory Grid) als Nachbarn stimmig angebunden? Sprache: Deutsch, kurze Sätze, einheitliche Begriffe.` },
]
phase('Prüfen')
const pruefungen = await parallel(PRUEFER.map(p => () =>
  agent(`${GEMEINSAM}\nNur lesen, nichts ändern.\n${ENTWURF_TEXT}\n${p.prompt}\nJeder Befund mit Beleg und konkretem Vorschlag. Erfinde keine Befunde; wenn etwas stimmt, sag das im Gesamturteil.`,
    { label: `pruefen:${p.key}`, phase: 'Prüfen', schema: BEFUNDE })
    .then(r => r ? { pruefer: p.key, ...r } : null)))
const alle = pruefungen.filter(Boolean)
const befunde = alle.flatMap(p => p.befunde.map(b => ({ pruefer: p.pruefer, ...b })))
log(`${befunde.length} Befunde: ${befunde.filter(b => b.schwere === 'hoch').length} hoch, ${befunde.filter(b => b.schwere === 'mittel').length} mittel`)

phase('Überarbeiten')
const ueberarbeitung = await agent(`${GEMEINSAM}
Auftrag: Arbeite die Prüfbefunde ein. Ändere nur ${ZIEL}; den Folienentwurf und die Übergabe gibst du überarbeitet zurück (nicht in andere Dateien schreiben).
${ENTWURF_TEXT}
Befunde (JSON):
${JSON.stringify(befunde, null, 1)}
Prüfe jeden Befund selbst an der Fundstelle. Berechtigte Befunde umsetzen (alle hoch und mittel, niedrig wenn sinnvoll), unberechtigte begründet ablehnen. Halte Datei, Folienentwurf und Übergabe untereinander konsistent (gleiche Gewichte, gleicher Typ, gleiche Konsequenzen, gleicher Titel). Externe Quellen nur übernehmen, wenn du sie selbst geöffnet und die Aussage dort gefunden hast.`, {
  label: 'ueberarbeiten:limbic-map', phase: 'Überarbeiten',
  schema: { type: 'object', properties: {
    persona: { type: 'object', properties: { balance: { type: 'number' }, dominanz: { type: 'number' }, stimulanz: { type: 'number' }, typ: { type: 'string' }, motive: { type: 'array', items: { type: 'string' } } }, required: ['balance', 'dominanz', 'stimulanz', 'typ', 'motive'] },
    marke: { type: 'object', properties: { balance: { type: 'number' }, dominanz: { type: 'number' }, stimulanz: { type: 'number' }, emotionsfelder: { type: 'array', items: { type: 'string' } } }, required: ['balance', 'dominanz', 'stimulanz', 'emotionsfelder'] },
    konsequenzen: { type: 'array', items: { type: 'object', properties: { bereich: { type: 'string' }, kurz: { type: 'string' } }, required: ['bereich', 'kurz'] } },
    titel: { type: 'string' },
    folienentwurf: { type: 'string' },
    uebergabe: { type: 'string' },
    umgesetzt: { type: 'array', items: { type: 'string' } },
    nicht_umgesetzt: { type: 'array', items: { type: 'object', properties: { befund: { type: 'string' }, grund: { type: 'string' } }, required: ['befund', 'grund'] } } },
    required: ['persona', 'marke', 'konsequenzen', 'titel', 'folienentwurf', 'uebergabe', 'umgesetzt', 'nicht_umgesetzt'] },
})

return {
  grundlagen: ok.map(g => ({ bereich: g.bereich, vorschlag: g.vorschlag, unsicherheiten: g.unsicherheiten, n: g.aussagen.length })),
  synthese: synthese ? { persona: synthese.persona, marke: synthese.marke, fit: synthese.fit, titel: synthese.titel, offene_fragen: synthese.offene_fragen } : null,
  pruefungen: alle.map(p => ({ pruefer: p.pruefer, gesamturteil: p.gesamturteil, anzahl: p.befunde.length })),
  befunde,
  ueberarbeitung,
}
