export const meta = {
  name: 'dossier-buendel-b',
  description: 'Dossier für Lukas (Bündel B): Persona-Ergebnisse für Repertory Grid, Laddering, Analogien und echte Interviews nutzbar machen',
  phases: [
    { title: 'Lesen', detail: '3 Leser: Methoden/Prompts/Aufgaben, HOLY-Inhalte/Persona, Regeln/Datenschutz/KI-Nachweis' },
    { title: 'Schreiben', detail: '1 Autor: Dossier als Markdown im Repo' },
    { title: 'Prüfen', detail: '3 Prüfer: Belege, Methodik und Brauchbarkeit, Regeln und Sprache' },
    { title: 'Überarbeiten', detail: '1 Bearbeiter: Befunde einarbeiten' },
  ],
}

const ZIEL = args.ziel
const DATUM = args.datum

const GEMEINSAM = `
Kontext: Studentische Gruppenarbeit (Modul Unternehmenskommunikation, HS Kaiserslautern), Fallstudie 1 „Brand Persona & Markenidentität“, Marke HOLY. Repository: /home/user/Unternehmens-Kommunikation. Heute ist der ${DATUM}.
Lukas Welker bearbeitet allein Bündel B (Repertory Grid → Markenattribute, Laddering → Markennutzen, Analogien + Live-Umfrage → Markentonalität; Folien 06, 07, 08, 08b) und plant 3–5 echte Kurzinterviews. Yannick (Bündel A) hat heute die Persona „Marco, 28“ fertiggestellt: fallstudie-1-brand-persona/persona-steckbrief.md und persona-daten.md.
Feste Regeln für dich:
- Arbeite nur mit Dateien im Repository. Öffne KEINE Dateien unter /root/.claude/uploads und KEINE Datei mit „NUR-Gruppenordner“ im Namen (Statista-Lizenz). Statista-Zahlen nur so verwenden, wie sie in persona-steckbrief.md oder persona-daten.md stehen.
- Bearbeite NICHT ki-nachweis/ki-nachweis.md, ki-nachweis/rohprotokoll.jsonl und keine anderen Dateien außer der, die dein Auftrag ausdrücklich nennt. Kein git commit, kein push.
- Keine Zahl, kein Zitat, keine Quelle erfinden. Jede inhaltliche Aussage mit Fundstelle (Datei:Zeile oder Dossier-Abschnitt bzw. Quellennummer [n] aus Anhang B des Dossiers).
- Keine Modellbezeichnungen (Namen von KI-Modellen) in Dateien schreiben.
`

const AUSZUG = {
  type: 'object',
  properties: {
    bereich: { type: 'string' },
    punkte: { type: 'array', items: { type: 'object', properties: {
      thema: { type: 'string' }, inhalt: { type: 'string' }, beleg: { type: 'string' } },
      required: ['thema', 'inhalt', 'beleg'] } },
    widersprueche: { type: 'array', items: { type: 'string' } },
    luecken: { type: 'array', items: { type: 'string' } },
  },
  required: ['bereich', 'punkte', 'widersprueche', 'luecken'],
}

const LESER = [
  { key: 'methoden', prompt: `${GEMEINSAM}
Dein Auftrag (nur lesen, nichts ändern): Ziehe alles heraus, was Lukas für die DURCHFÜHRUNG von Bündel B braucht.
Lies: fallstudie-1-brand-persona/methoden.md (§2 Repertory Grid, §3 Laddering, §4 Analogien, Literatur), fallstudie-1-brand-persona/prompts.md (P0, P7, P8, P9, P10, P11 und Teil B/C, falls vorhanden – Prompts möglichst wörtlich mit Platzhaltern), fallstudie-1-brand-persona/aufgaben-im-detail.html (Aufgaben B1–B4, ab ca. Zeile 320 bis 452: Schritte, „Das braucht die Folie“, Achtung-Hinweise, Termine), fallstudie-1-brand-persona/arbeitsplan.md (Übergaben, Tagesplan Spalte B, Rollen), fallstudie-1-brand-persona/README.md (Bewertungskriterien, Folienzeiten).
Außerdem in fallstudie-1-brand-persona/praesentation/index.html die Folien f06, f07, f08 und f08b: Welche Datenfelder (JSON im <script type="application/json" class="daten">) muss Bündel B am Ende liefern (z. B. Attribute, Leiter, Analogien, Umfrage)? Notiere Feldnamen und was dort jetzt als Platzhalter steht.
Gib jeden Punkt mit Fundstelle (Datei:Zeile) zurück. Notiere Widersprüche zwischen den Dateien (z. B. Termine, Anzahl Befragte, Triaden) und Lücken (was Lukas noch nicht erfährt).` },
  { key: 'inhalte', prompt: `${GEMEINSAM}
Dein Auftrag (nur lesen, nichts ändern): Ziehe alle INHALTE heraus, die Lukas für seine Methoden nutzen kann.
Lies: fallstudie-1-brand-persona/persona-steckbrief.md (ganz, besonders Kurzfassung, Steckbrief-Tabelle, Abschnitt 3 „Was die Daten tragen“, Abschnitt 4 „Vorschlag für die simulierten Befragten“, Abschnitt 5 Lena), fallstudie-1-brand-persona/persona-daten.md, fallstudie-1-brand-persona/persona-datenerhebung.md (vor allem Bewertungen/Kundenstimmen mit Codebuch K1–K8 und Zugangswege), und aus fallstudie-1-brand-persona/recherche/holy-recherche.md die Abschnitte 3.5 Bewertungen, 3.6 Repertory-Grid-Konstrukte, 3.7 Startpunkte Laddering, 5.3 Wettbewerbsset (genaue Marken W1–W5 und Idealmarke, Begründung), 6.2 Tonalität, 6.7 Tonalitäts-Hypothese für die Analogien, 8 Spannungsfelder (nur was B betrifft), 9.5 Grenzen der KI-Recherche, 10.2 Entscheidungen (was zu B gehört). Zu Quellennummern [n] die Kurzangabe aus Anhang B notieren.
Markiere bei jedem Punkt den Status, wie er im Dossier steht (✔ / ✎ / ~ / H). Notiere Widersprüche (z. B. Persona im Dossier 4.3 gegenüber persona-steckbrief.md) und Lücken.` },
  { key: 'regeln', prompt: `${GEMEINSAM}
Dein Auftrag (nur lesen, nichts ändern): Ziehe alle REGELN heraus, die Lukas bei Bündel B beachten muss.
Lies: CLAUDE.md, ki-nachweis/vorlage-ki-nutzung.md (persönliche KI-Liste: Ablauf, Termine, Felder, Datenschutz- und Urheberrechtsabschnitt, Beispiel), ki-nachweis/ki-nachweis.md Abschnitt 3 und 4 (wie KI-Nutzung außerhalb von Claude Code eingetragen wird, ID-Schema), fallstudie-1-brand-persona/arbeitsplan.md (Regeln zur KI-Nutzung, Datenschutz HSKL-Richtlinie Nr. 6, offene Punkte), fallstudie-1-brand-persona/aufgaben-im-detail.html (Hinweise zu Interviews, Datenschutz, Einwilligung, KI-Liste), fallstudie-1-brand-persona/persona-daten.md (Kopf: Statista-Lizenz, öffentliches Repository).
Interessant sind: Was darf in KI-Tools (Interviewdaten, Namen, Kommentare)? Was darf ins öffentliche Repository? Wie kennzeichnet man KI-simulierte Ergebnisse? Welche Fristen gelten für Lukas (KI-Liste, Zwischenstand, Übergaben)? Wie sichert man Chatverläufe? Gib jeden Punkt mit Fundstelle zurück; notiere Widersprüche und Lücken.` },
]

phase('Lesen')
const auszuege = await parallel(LESER.map(l => () =>
  agent(l.prompt, { label: `lesen:${l.key}`, phase: 'Lesen', schema: AUSZUG })))
const ok = auszuege.filter(Boolean)
log(`${ok.length} von 3 Auszügen da, ${ok.reduce((n, a) => n + a.punkte.length, 0)} Punkte`)

phase('Schreiben')
const entwurf = await agent(`${GEMEINSAM}
Dein Auftrag: Schreibe das „Dossier für Lukas“ als Markdown-Datei ${ZIEL} (neu anlegen; nur diese Datei schreiben).
Zweck: Lukas soll die Ergebnisse von Bündel A (Persona „Marco, 28“ und die Datenlage dahinter) sofort für Bündel B nutzen können – Schritt für Schritt, allein, ohne Rückfragen. Er bekommt das Dossier als PDF.

Grundlage sind diese geprüften Auszüge (JSON). Verwende NUR Inhalte, die dort oder in den genannten Repository-Dateien stehen; lies bei Bedarf selbst nach (Fundstellen stehen dabei):
${JSON.stringify(ok, null, 1)}

Form und Stil:
- Deutsch, Anrede „du“, kurze Sätze, aktive Formulierungen, keine Füllwörter. Fachbegriffe beim ersten Auftreten kurz erklären.
- Überschriften als Aussagen oder klare Arbeitsschritte; Tabellen und nummerierte Schritte statt Fließtext, wo es hilft.
- Umfang: ca. 6–8 PDF-Seiten (etwa 2.500–3.500 Wörter). Lieber knapp und vollständig als lang.
- Kopf: Titel „Dossier für Lukas: Persona und Daten für Bündel B nutzen“, darunter Fallstudie 1 · HOLY · Bündel B · Stand ${DATUM} · erstellt von Yannick Heisler (Bündel A) mit KI-Unterstützung (Claude Code; KI-Nachweis). Ein Kasten „In 30 Sekunden“ mit den 5 wichtigsten Punkten.
- Jede Zahl mit Quelle in Kurzform (z. B. „Statista CI 2025“, „VuMA 2021“, „Gründer [24]“). Kategoriedaten immer als Kategorie (Energy-Drink-Konsument:innen), nicht als HOLY-Daten bezeichnen.
- Modellbegriffe (Repertory Grid nach Kelly, Laddering/Means-End-Chain nach Reynolds & Gutman, Analogien) nach Standardliteratur; ein Hinweis, dass Lukas sie mit den Vorlesungsfolien abgleichen soll. Wo du methodisches Wissen ohne Fundstelle im Repository einbringst, kennzeichne es knapp als „Hinweis aus der Methodenliteratur (mit Vorlesung abgleichen)“.

Inhalt (Reihenfolge darfst du verbessern, nichts davon weglassen):
1. Die Persona in einer Minute: Kurzfassung (aus persona-steckbrief.md Abschnitt 1, inhaltlich unverändert) und eine kleine Tabelle „belegt / Annahme“ mit den für B wichtigsten Merkmalen (inkl. Männeranteil 54–67,5 % und Gaming = Hobby, kein Trinkanlass).
2. Persona-Block zum Einfügen: ein fertiger Textblock (Codeblock), den Lukas in P7/P9/P11 für [PERSONA] einsetzt – nur Inhalte aus dem Steckbrief, mit Hinweis, dass Name, Beruf usw. fiktiv sind.
3. Die fünf simulierten Befragten: Tabelle aus persona-steckbrief.md Abschnitt 4 (als Vorschlag, Lukas entscheidet), ergänzt um je 1 Zeile, worauf bei dieser Person zu achten ist; Anleitung, wie er die 5 Profile in jeder neuen Chat-Session gleich hält (P0 + Profilblock), Ergebnisse als „KI-simuliert“ kennzeichnet und Chatverläufe sichert.
4. Methode für Methode (B1 Repertory Grid, B2 Laddering, B3 Analogien + Live-Umfrage, B4 Prüfen): jeweils (a) Ziel und was die Folie am Ende braucht (inkl. der Datenfelder der Web-Präsentation, falls ermittelt), (b) wie die Persona hilft (konkret: welche Persona-Merkmale welche Elemente, Triaden, Startattribute, Analogie-Kategorien betreffen), (c) die Hypothesen aus dem Dossier (3.6, 3.7, 6.7, Wettbewerbsset 5.3) als NACHHER-Prüfliste – ausdrücklich nicht den Befragten vorgeben, (d) typische Fehler. Elemente W1–W5 und Idealmarke genau wie im Dossier 5.3; wenn die Gruppe das Wettbewerbsset noch bestätigen muss, das sagen.
5. Echte Interviews (3–5): Auswahl nach Persona-Kriterien (Screening-Fragen, Mischung: mind. 2 Frauen, Alter ca. 20–40, ab 18, Viel- und Wenigtrinker:innen, HOLY-Kund:innen und Nicht-Kund:innen), Ablauf ca. 10 Min. mit denselben Triaden und Laddering-Fragen, Einwilligung und Datenschutz (HSKL-Richtlinie Nr. 6: personenbezogene Daten nur mit Einwilligung bzw. anonymisiert in KI-Tools; nichts Personenbezogenes ins öffentliche Repository), Abgleich echt vs. KI-simuliert als Tabelle (was übereinstimmt, was nur die KI sagt).
6. Kundenstimmen als dritte Quelle: 20–30 Bewertungen nach Codebuch (persona-datenerhebung.md) – wie Lukas sie für Konstrukte, Leitern und Tonalität nutzt.
7. Was die Persona-Daten NICHT können: Kategorie ≠ HOLY, Statista-Zahlen nicht auf Folien 06–08 umdeuten, Persona ist Annahme-gestützt, KI-Befragte sind keine Daten.
8. Deine KI-Nutzung belegen: persönliche KI-Liste nach ki-nachweis/vorlage-ki-nutzung.md, Fristen (Zwischenstand, Abgabe, Nachträge – genau wie dort), Chatverläufe in den Gruppenordner, nicht ins Repo.
9. Termine und Übergaben für B (genau wie in arbeitsplan.md), plus was er wann an wen gibt.
10. Checkliste zum Abhaken (10–15 Punkte).
11. Dateien und Quellen: Liste der Repository-Dateien mit Zweck; Quellen in Kurzform.

Wenn die Auszüge sich widersprechen, nimm die neuere bzw. spezifischere Datei und vermerke den Widerspruch in einer Fußnote oder im Abschnitt „Noch offen“ am Ende. Schreibe die Datei, dann gib das Ergebnis zurück.`, {
  label: 'schreiben:dossier', phase: 'Schreiben',
  schema: { type: 'object', properties: {
    datei: { type: 'string' }, woerter: { type: 'number' },
    gliederung: { type: 'array', items: { type: 'string' } },
    offene_fragen: { type: 'array', items: { type: 'string' } } },
    required: ['datei', 'woerter', 'gliederung', 'offene_fragen'] },
})
log(`Entwurf: ${entwurf ? entwurf.woerter + ' Wörter' : 'fehlgeschlagen'}`)

const BEFUNDE = {
  type: 'object',
  properties: {
    befunde: { type: 'array', items: { type: 'object', properties: {
      schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
      stelle: { type: 'string' }, problem: { type: 'string' },
      beleg: { type: 'string' }, vorschlag: { type: 'string' } },
      required: ['schwere', 'stelle', 'problem', 'beleg', 'vorschlag'] } },
    gesamturteil: { type: 'string' },
  },
  required: ['befunde', 'gesamturteil'],
}

const PRUEFER = [
  { key: 'belege', prompt: `${GEMEINSAM}
Prüfe ${ZIEL} (nur lesen, nichts ändern) auf FAKTENTREUE. Gehe Satz für Satz durch: Jede Zahl, jedes Zitat, jede Marke, jeder Termin, jede Frist, jeder Dateiname und jede Quellennummer muss in der genannten Repository-Datei genau so stehen (persona-steckbrief.md, persona-daten.md, recherche/holy-recherche.md, arbeitsplan.md, aufgaben-im-detail.html, prompts.md, methoden.md, ki-nachweis/vorlage-ki-nutzung.md). Suche aktiv nach: erfundenen oder gerundeten Zahlen, Kategoriedaten, die als HOLY-Daten erscheinen, falschen Wochentagen/Daten, Statista-Werten, die NICHT in persona-steckbrief.md oder persona-daten.md stehen (Lizenz!), falsch zugeordneten Quellennummern, Annahmen, die als belegt dargestellt sind. Jeder Befund mit Beleg (Datei:Zeile) und konkretem Korrekturvorschlag. Wenn du nichts findest, sag das – erfinde keine Befunde.` },
  { key: 'methodik', prompt: `${GEMEINSAM}
Prüfe ${ZIEL} (nur lesen, nichts ändern) auf METHODIK und BRAUCHBARKEIT aus Sicht von Lukas, der Bündel B allein und ohne Vorwissen umsetzt.
(1) Methodik: Sind Repertory Grid (Kelly; Triaden, bipolare Konstrukte, Rating), Laddering (Means-End-Chain nach Reynolds & Gutman; Attribut → Konsequenz → Wert; Hierarchical Value Map) und Analogien/Markentonalität fachlich korrekt beschrieben und konsistent mit methoden.md und prompts.md (P7–P11)? Werden Suggestivfragen und Bestätigungsfehler vermieden (Dossier-Hypothesen nur als Nachher-Prüfliste)? Ist der Umgang mit KI-simulierten Befragten methodisch ehrlich? Du darfst Websuche nutzen, um Methodenaussagen zu prüfen; dann Quelle mit URL angeben.
(2) Brauchbarkeit: Kann Lukas jeden Schritt ohne Rückfrage ausführen? Fehlen Eingaben (z. B. welche Marken, wie viele Triaden, welche Datei, welcher Prompt)? Ist der Persona-Block wirklich direkt einsetzbar? Passen die Datenfelder der Folien? Ist der Umfang angemessen (nichts Überflüssiges)?
Jeder Befund mit Beleg und konkretem Vorschlag. Erfinde keine Befunde.` },
  { key: 'regeln', prompt: `${GEMEINSAM}
Prüfe ${ZIEL} (nur lesen, nichts ändern) auf REGELN, DATENSCHUTZ und SPRACHE.
(1) Regeln: Stimmen die Vorgaben zur persönlichen KI-Liste, zu Fristen und Ablage mit ki-nachweis/vorlage-ki-nutzung.md, arbeitsplan.md und CLAUDE.md überein? Wird die HSKL-KI-Richtlinie Nr. 6 (Datenschutz) richtig wiedergegeben (nicht überzeichnet)? Einwilligung bei Interviews? Nichts Personenbezogenes und keine Statista-Rohdaten ins öffentliche Repository? Werden KI-Inhalte korrekt gekennzeichnet (Quelle vs. Modellwissen)? Keine Modellbezeichnungen in der Datei?
(2) Sprache: deutsch, du-Form durchgehend, kurze klare Sätze, einheitliche Begriffe (z. B. immer „Konsument:innen“, „simulierte Befragte“), keine Anglizismen ohne Not, Tippfehler, Markdown-Fehler (Tabellen, Codeblöcke, Listen), Überschriften sinnvoll.
Jeder Befund mit Beleg und konkretem Vorschlag. Erfinde keine Befunde.` },
]

phase('Prüfen')
const pruefungen = await parallel(PRUEFER.map(p => () =>
  agent(p.prompt, { label: `pruefen:${p.key}`, phase: 'Prüfen', schema: BEFUNDE })
    .then(r => r ? { pruefer: p.key, ...r } : null)))
const alle = pruefungen.filter(Boolean)
const befunde = alle.flatMap(p => p.befunde.map(b => ({ pruefer: p.pruefer, ...b })))
log(`${befunde.length} Befunde: ${befunde.filter(b => b.schwere === 'hoch').length} hoch, ${befunde.filter(b => b.schwere === 'mittel').length} mittel, ${befunde.filter(b => b.schwere === 'niedrig').length} niedrig`)

phase('Überarbeiten')
const ueberarbeitung = await agent(`${GEMEINSAM}
Dein Auftrag: Arbeite die Prüfbefunde in ${ZIEL} ein (nur diese Datei ändern).
Befunde (JSON):
${JSON.stringify(befunde, null, 1)}
Vorgehen: Prüfe jeden Befund zuerst selbst an der genannten Fundstelle. Ist er berechtigt, setze ihn um (alle „hoch“ und „mittel“, „niedrig“ wenn sinnvoll). Ist er nicht berechtigt oder widerspricht er einem anderen Befund, setze ihn nicht um und begründe das. Halte Umfang und Stil (du-Form, kurze Sätze); füge nichts ohne Fundstelle hinzu. Prüfe am Ende, dass das Markdown sauber ist (Tabellen, Codeblöcke). Gib zurück, was du geändert hast und was nicht.`, {
  label: 'ueberarbeiten:dossier', phase: 'Überarbeiten',
  schema: { type: 'object', properties: {
    umgesetzt: { type: 'array', items: { type: 'object', properties: { befund: { type: 'string' }, aenderung: { type: 'string' } }, required: ['befund', 'aenderung'] } },
    nicht_umgesetzt: { type: 'array', items: { type: 'object', properties: { befund: { type: 'string' }, grund: { type: 'string' } }, required: ['befund', 'grund'] } },
    woerter: { type: 'number' } },
    required: ['umgesetzt', 'nicht_umgesetzt', 'woerter'] },
})

return {
  auszuege: ok.map(a => ({ bereich: a.bereich, punkte: a.punkte.length, widersprueche: a.widersprueche, luecken: a.luecken })),
  entwurf,
  pruefungen: alle.map(p => ({ pruefer: p.pruefer, gesamturteil: p.gesamturteil, anzahl: p.befunde.length })),
  befunde,
  ueberarbeitung,
}
