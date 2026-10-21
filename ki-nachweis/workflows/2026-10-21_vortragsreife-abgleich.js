export const meta = {
  name: 'vortragsreife-abgleich',
  description: 'Ergebnisse von Account 2 (VORTRAGSREIFE.md, fragerunde.md) mit dem aktuellen Stand abgleichen, offene technische Punkte umsetzen, Fragerunde aktualisieren, Folie 08 nachprüfen',
  phases: [
    { title: 'Abgleichen', detail: 'Befunde gegen den Stand; Fragerunde aktualisieren; Folie 08/08b nachprüfen (parallel)' },
    { title: 'Umsetzen', detail: 'offene technische Punkte, Nachtrag in VORTRAGSREIFE.md' },
    { title: 'Prüfen', detail: 'adversarial: Umsetzung, Fragerunde, Widerspruchsfreiheit' },
    { title: 'Nacharbeit', detail: 'Befunde, Doku, Exporte' },
  ],
}

const PFAD = '/home/user/Unternehmens-Kommunikation'
const GEMEINSAM = `
Kontext: Studentische Gruppenarbeit, Fallstudie 1 „Brand Persona & Markenidentität“ (Marke HOLY, Vortrag Mo 26.10.2026, Prof. Dr. Daniel Stenger). Gruppe: Yannick Heisler (Bündel A, Synthese Markensteuerrad), Lukas Welker (Bündel B, Folien 06–08b), Elias Knauber (Bündel C, Folien 09–11, trägt Folie 10 vor). Repository ${PFAD}; Web-Präsentation fallstudie-1-brand-persona/praesentation/ (index.html mit Notizen, Kästen „FOLIE xx“, Daten-JSON; js/, css/, marke.js; LIESMICH.md, AUTOREN.md, QUELLEN.md; Prüfwerkzeug werkzeuge/pruefen.mjs; Exporte nach AUTOREN §15).
AUSGANGSLAGE (${args.datum}): Account 2 (zweite Claude-Code-Sitzung) hat Übergabe Ü04 abgeschlossen und ist nach master zusammengeführt: fallstudie-1-brand-persona/praesentation/VORTRAGSREIFE.md (Prüfbericht Vortragsreife: Top 10, Beispieldaten-Lieferpläne, Maßnahmen je Person inkl. „6.4 Account 1 (technisch)“, Zeit- und Sprecherplan, Rückfragen, Hörsaal-Checkliste) und fallstudie-1-brand-persona/fragerunde.md (25–35 Fragen mit Antwort, wer, Beleg, Fallstricke). Übergabe: ki-nachweis/uebergaben/2026-10-21_von-account-2_an-account-1.md. WICHTIG: Beide Dateien prüften den Stand master a929391 (19.10.2026) – seitdem hat Account 1 viel geändert (siehe AUTOREN.md ab Abschnitt 16 und ki-nachweis/ki-nachweis.md Abschnitt 2, D15–D22): Live-Abstimmung auf Folie 08 (eigene Abstimmseite, Google Apps Script, lastfest, Stimmen zählen nur 30 Minuten; Skript-Update bei Google steht noch aus), Illustrationen Folie 01/04, Logo-Rätsel Folie 01 (Original-Logo, 3 Klicks), Chamäleon statt Waschbär als Analyse-Tier (Einordnung Elias, Begründung als Vorschlag; Tonalität „frecher Kumpel · wandelbar · Spaß“ auf 10 und 08b), Abgleich mit den Vorlesungsfolien (abgleich-vorlesung.md; Mitte des Rads „Markenkern“, Band „Positionierung“, Wir-Form, „Markeneigenschaften“, Limbic-Typen als Erweiterung gekennzeichnet, Hinweis Stenger S. 78). Fristen mit „sofort (Di 20.10.)“ sind überfällig.
Feste Regeln: Fakten über HOLY nur mit Quelle/Faktenstatus aus dem Recherche-Dossier; Gründeraussagen nur als Selbstauskunft „Horsch 2026 (GB)“; „95 %“ nur mit „laut Gründer, Datengrundlage nicht offengelegt“, nie auf Hauptfolien; nicht zitieren: „No/Zero Bullshit“; Statista nur wie in persona-daten.md. Inhalte von Lukas und Elias nicht inhaltlich umschreiben (nur Hinweise in Kästen/Listen). Nicht ändern: recherche/*, dossier-buendel-b.*, gruenderbefragung.md, prompts.md, ki-nachweis/*, unterlagen/*, live-abstimmung/apps-script.gs (Server). Keine Modellbezeichnungen (Namen von KI-Modellen) in Dateien. Deutsch, Stil der Dateien. Kein git commit. Prüfwerkzeug: PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core node werkzeuge/pruefen.mjs index.html --ausgabe _test/<x> --schritte [--optional] [--nur …]; Testausgaben nur unter praesentation/_test/.
`

const STATUS = {
  type: 'object',
  properties: {
    befunde: { type: 'array', items: { type: 'object', properties: {
      id: { type: 'string' }, status: { type: 'string', enum: ['erledigt', 'offen', 'überholt', 'teilweise'] },
      beleg: { type: 'string', description: 'Datei/Stelle bzw. Commit, warum dieser Status' },
      zustaendig: { type: 'string' }, technisch_umsetzbar: { type: 'boolean', description: 'kann Claude ohne inhaltliche Entscheidung umsetzen' },
      was_tun: { type: 'string' },
    }, required: ['id', 'status', 'beleg', 'zustaendig', 'technisch_umsetzbar', 'was_tun'] } },
    neue_befunde: { type: 'array', items: { type: 'string' } },
  },
  required: ['befunde', 'neue_befunde'],
}
const AENDERUNG = {
  type: 'object',
  properties: {
    dateien: { type: 'array', items: { type: 'object', properties: { datei: { type: 'string' }, was: { type: 'string' } }, required: ['datei', 'was'] } },
    getestet: { type: 'string' },
    offen: { type: 'array', items: { type: 'string' } },
  },
  required: ['dateien', 'getestet', 'offen'],
}

phase('Abgleichen')
const [abgleich, fragerunde, folie08] = await parallel([
  () => agent(GEMEINSAM + `
Auftrag BEFUNDE ABGLEICHEN (nur lesen): Gehe JEDEN Befund in VORTRAGSREIFE.md durch (Top 10, Abschnitt 4, 6.1–6.6, 7, 8, 9; IDs wie Y13, G4, A…, T…) und bestimme seinen Status gegen den aktuellen Stand von master (Dateien selbst lesen, git log/diff seit a929391 nutzen): erledigt / teilweise / offen / überholt (z. B. durch Chamäleon, Logo-Rätsel, Vorlesungsabgleich, Live-Abstimmung). Kennzeichne, was Claude ohne inhaltliche Entscheidung technisch umsetzen kann (Darstellung, Technik, Kennzeichnung, Notizen-Verweise, Zeitangaben-Kommentare, Checklisten) und was Personen entscheiden/liefern müssen. Neue Befunde, die durch die Änderungen seit a929391 entstanden sind (z. B. Zeitplan nach Logo-Rätsel mit 3 Klicks, Sprechtexte länger/kürzer), unter neue_befunde.`, { label: 'abgleich:befunde', phase: 'Abgleichen', schema: STATUS }),
  () => agent(GEMEINSAM + `
Auftrag FRAGERUNDE AKTUALISIEREN (nur fragerunde.md ändern): Prüfe jede Frage und Antwort gegen den aktuellen Stand (index.html-Notizen und Rückfragen der Folien, abgleich-vorlesung.md, gruenderbefragung.md, markenkompetenz.md, persona-steckbrief.md, limbic-map.md, Recherche-Dossier). Aktualisiere Antworten, Belege (Folie/Backup/Abschnitt) und Fallstricke: v. a. Chamäleon statt Waschbär (Begründung als Vorschlag, Elias prüft; Rückfragen aus den Notizen 08), Markenkern vs. Positionierung, Wir-Form, Markeneigenschaften, Identität/Image (Stenger S. 60/87), KI-Personas (Stenger S. 78), Limbic-Typen als Erweiterung (S. 93), Logo-Rätsel und Logo-Nutzung, Live-Abstimmung (anonym, Geräte-ID, 30 Minuten), Vorlesungsbezug. Ergänze fehlende wahrscheinliche Fragen (Ziel weiterhin 25–35 insgesamt, nach Wahrscheinlichkeit sortiert), streiche Überholtes. Jede Antwort mündlich 2–4 Sätze, wer antwortet (nach Bündel), Beleg, „nicht sagen: …“. Antworten an der Quelle gegenprüfen. Kopf der Datei: Nachtrag „Stand ${args.datum} (Account 1)“ mit Liste der Änderungen.`, { label: 'abgleich:fragerunde', phase: 'Abgleichen', schema: AENDERUNG }),
  () => agent(GEMEINSAM + `
Auftrag FOLIE 08/08b NACHPRÜFEN (nur lesen; Account 2 hatte den Analogien-Inhalt ausgelassen): Prüfe Folie 08 (Live-Abstimmung, Titel, Karte „Als Tier: Chamäleon“, „Als Mensch“, Kontrast, Fußzeile, Notizen, Rückfragen) und 08b (Aaker-Profil, „Ins Steuerrad“) auf Vortragsreife nach den Blickwinkeln aus Ü04 (Aufgabe/Bewertung, Storyline, Zeit, Rückfragen, Fakten, Technik, Referentenansicht, Visualisierung/Beamer). Screenshots aller Schritte mit pruefen.mjs --nur f08,f08b --schritte (auch --live-werte 3,1,7,0,2) ansehen. Jeder Befund: Folie, Stelle, Problem, Beleg, Vorschlag, zuständig (Yannick/Lukas/Elias/Account 1 technisch), Dringlichkeit bis 26.10.`, { label: 'abgleich:folie08', phase: 'Abgleichen', schema: {
    type: 'object',
    properties: { befunde: { type: 'array', items: { type: 'object', properties: { folie: { type: 'string' }, stelle: { type: 'string' }, problem: { type: 'string' }, beleg: { type: 'string' }, vorschlag: { type: 'string' }, zustaendig: { type: 'string' }, dringlichkeit: { type: 'string' } }, required: ['folie', 'stelle', 'problem', 'beleg', 'vorschlag', 'zustaendig', 'dringlichkeit'] } } },
    required: ['befunde'],
  } }),
])

phase('Umsetzen')
const umsetzung = await agent(GEMEINSAM + `
Auftrag UMSETZEN: (1) Alle Befunde mit status offen/teilweise UND technisch_umsetzbar = true umsetzen (aus Abgleich und Folie-08-Prüfung), soweit sie keine inhaltliche Entscheidung brauchen; im Zweifel nicht umsetzen, sondern als Entscheidung für Yannick listen. fragerunde.md NICHT ändern (das hat ein anderer Agent getan). (2) VORTRAGSREIFE.md: oben einen Abschnitt „Nachtrag ${args.datum} (Account 1): Stand der Befunde“ einfügen – Tabelle ID | Status | Beleg | was noch zu tun ist | zuständig | Frist (Fristen „sofort (Di 20.10.)“ als „sofort“), dazu die Folie-08-Befunde und die neuen Befunde; die Top 10 nach heutigem Stand neu bilden. Den ursprünglichen Bericht darunter unverändert lassen. (3) Prüflauf pruefen.mjs index.html --schritte --optional: 0 Fehler. LIESMICH/AUTOREN erst in der Nacharbeit.
Ergebnisse:
` + JSON.stringify({ abgleich, folie08 }, null, 1), { label: 'umsetzen', phase: 'Umsetzen', schema: AENDERUNG })

phase('Prüfen')
const pruefung = await agent(GEMEINSAM + `
Auftrag PRÜFEN (adversarial, nichts ändern): (a) Stimmen die Status im Nachtrag von VORTRAGSREIFE.md (Stichproben an den Dateien, mindestens 15 Befunde, alle „erledigt“ der Top 10)? (b) Wurde etwas umgesetzt, das eine inhaltliche Entscheidung gebraucht hätte oder Inhalte von Lukas/Elias umschreibt? (c) fragerunde.md: Jede geänderte Antwort an der Quelle prüfen (Folie/Notiz/Dossier/Vorlesungsseite); Regeln (Gründer, 95 %, Statista, Chamäleon als Vorschlag) eingehalten? Widersprüche zu den Rückfragen in den Folien-Notizen? Anzahl 25–35? (d) Prüflauf ohne Fehler, keine neuen Wortbudget-Warnungen; nur erlaubte Dateien geändert; keine Modellbezeichnungen.
Berichte:
` + JSON.stringify({ abgleich, fragerunde, folie08, umsetzung }, null, 1), { label: 'pruefen', phase: 'Prüfen', schema: {
  type: 'object',
  properties: { befunde: { type: 'array', items: { type: 'object', properties: { schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] }, stelle: { type: 'string' }, problem: { type: 'string' }, beleg: { type: 'string' }, vorschlag: { type: 'string' } }, required: ['schwere', 'stelle', 'problem', 'beleg', 'vorschlag'] } } },
  required: ['befunde'],
} })

phase('Nacharbeit')
const nacharbeit = await agent(GEMEINSAM + `
Auftrag NACHARBEIT: Befunde „hoch“ und „mittel“ umsetzen, „niedrig“ wo sinnvoll, Rest begründen. LIESMICH.md (Checkliste 12 mit den offenen Punkten je Person nach heutigem Stand, ohne Doppelungen) und AUTOREN.md (neuer Abschnitt mit Datum, Änderungstabelle, Prüfergebnis). pruefen.mjs index.html --schritte --optional (0 Fehler). Exporte nach AUTOREN §15 neu erzeugen und nach export/ kopieren, falls Folien sichtbar geändert wurden (PDF 22 Seiten ohne 01b, 23 Folienbilder, Übersicht --stand 21.10.2026). Für Yannick: kurze Liste der wichtigsten offenen Punkte je Person bis 26.10. und welche Entscheidungen er treffen muss. Kein Commit, ki-nachweis/ nicht ändern.
Berichte:
` + JSON.stringify({ abgleich, fragerunde, folie08, umsetzung, pruefung }, null, 1), { label: 'nacharbeit', phase: 'Nacharbeit', schema: {
  type: 'object',
  properties: {
    umgesetzt: { type: 'array', items: { type: 'string' } },
    nicht_umgesetzt: { type: 'array', items: { type: 'string' } },
    tests: { type: 'string' },
    fuer_yannick: { type: 'array', items: { type: 'string' } },
  },
  required: ['umgesetzt', 'nicht_umgesetzt', 'tests', 'fuer_yannick'],
} })

return { abgleich, fragerunde, folie08, umsetzung, pruefung, nacharbeit }
