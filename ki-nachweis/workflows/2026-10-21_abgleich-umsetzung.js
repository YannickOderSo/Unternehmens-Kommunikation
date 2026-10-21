export const meta = {
  name: 'abgleich-umsetzung',
  description: 'Befunde aus dem Vorlesungs-Abgleich umsetzen: Steuerrad-Begriffe nach Stenger (Markenkern, Wir-Form, Markeneigenschaften, Identität/Image) sowie Kennzeichnung und Rückfragen (KI-Personas S. 78, Limbic-Typen)',
  phases: [
    { title: 'Bauen', detail: 'Folien 02, 03, 05, 10, 11, 12, B1, Komponenten, Ausarbeitungen, Grafik Folie 02' },
    { title: 'Prüfen', detail: 'gegen die Vorlesungsseiten und auf Widerspruchsfreiheit; Darstellung' },
    { title: 'Nacharbeit', detail: 'Befunde einarbeiten, Doku, Exporte' },
  ],
}

const PFAD = '/home/user/Unternehmens-Kommunikation'
const SCRATCH = '/tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad'
const GEMEINSAM = `
Kontext: Studentische Gruppenarbeit, Fallstudie 1 „Brand Persona & Markenidentität“ (Marke HOLY, Vortrag Mo 26.10.2026, Prof. Dr. Daniel Stenger). Repository ${PFAD}; Web-Präsentation fallstudie-1-brand-persona/praesentation/ (index.html mit Daten-JSON, Notizen <aside class="notizen">, Kästen „FOLIE xx“; js/komponenten.js mit FELDER des Markensteuerrads, js/deck.js, js/folien/*.js; AUTOREN.md, LIESMICH.md, QUELLEN.md; Prüfwerkzeug werkzeuge/pruefen.mjs; Exporte nach AUTOREN §15). Ausarbeitungen in fallstudie-1-brand-persona/ (methoden.md, README.md, folienentwuerfe.md, markenkompetenz.md, limbic-map.md, persona-steckbrief.md, grafiken/folie-02-vorgehen.svg/.png).
GRUNDLAGE: Bericht fallstudie-1-brand-persona/abgleich-vorlesung.md (Abgleich mit unterlagen/Stenger Folien.pdf, 129 Seiten; seitenweiser Text in ${SCRATCH}/stenger-seiten.txt; Seiten als Bild: pdftoppm -f n -l n -r 80 -png "${PFAD}/unterlagen/Stenger Folien.pdf" ${SCRATCH}/vorlesung/s). Lies dort die Befunde #15, #22, #27, #28, #29, #30 vollständig und prüfe jede Aussage an der Vorlesungsseite selbst (maßgeblich ist, was auf der Folie sichtbar ist, nicht die unsichtbare Textebene).
HINWEIS ZUM NEUSTART: Ein erster Lauf brach am Nutzungslimit ab, bevor ein Agent fertig war. Der Bau hatte schon fast alles umgesetzt (git diff zeigt 28 geänderte Dateien: js/komponenten.js FELDER und deck.js; index.html Folien 02, 03, 05, 10, 11, 12, B1 und Kästen 06/08/08b; js/folien/* und css/folien/* zu 02, 03, 06, 08, 10, 11, 12; Ausarbeitungen methoden.md, README.md, folienentwuerfe.md, markenkompetenz.md, limbic-map.md, persona-steckbrief.md, QUELLEN.md; Grafiken folie-02 und folie-03 neu). Offen waren die Prüfläufe und die Sichtprüfung des Rads auf 10 und 12. Zuerst den Stand per git diff prüfen, Unfertiges vervollständigen, dann prüfen.
FREIGABE YANNICK (${args.datum}): umsetzen „Steuerrad-Begriffe“ (#27 Mitte des Rads heißt „Markenkern“ wie S. 90–91; das bisherige Band „Markenkern · Verdichtung aller Felder“ mit „Genuss mit gutem Gewissen“ bekommt einen Vorlesungsbegriff – Positionierung bzw. Positionierungssatz nach S. 87/94 oder „Kurzformel“, begründet wählen; #28 Leitfragen in Wir-Form wie S. 88–89; #29 Feldname „Markeneigenschaften“ statt „Markenattribute“ wie S. 60/90–91; #30 Rückfrage-Sätze zu Identität/Image nach S. 60/87) und „Kennzeichnung & Rückfragen“ (#15 Hinweis S. 78: KI-Personas ersetzen nicht das Gespräch mit echten Kunden – in B1-Grenzen und Notizen aufgreifen, ehrlich zu unseren simulierten Befragten; #22 Limbic-Typen und Gewichte auf Folie 05 als eigene Erweiterung kennzeichnen, nicht Teil der Vorlesungsgrafik S. 69–71/93, Rückfrage vorbereiten; ob der Typ Hauptaussage bleibt, entscheidet Yannick – nur als offene Frage vermerken).
ZUSÄTZLICHE ENTSCHEIDUNGEN YANNICK (${args.datum}, „Entscheidungen beide ja“): (1) Das Chamäleon kommt ins Feld Tonalität des Markensteuerrads auf Folie 10 (bisher „frecher Kumpel · Spaß · Zugehörigkeit“, wortgleich mit Folie 08b „Ins Steuerrad“) – z. B. „frecher Kumpel · wandelbar · Spaß“ oder ähnlich knapp; die Zeile „Ins Steuerrad“ auf 08b wortgleich nachziehen (das ist die Übergabe an das Rad, kein inhaltlicher Eingriff in Lukas' Analyse) und im Kasten 08b für Lukas vermerken; den bisherigen Entscheidungspunkt „ENTSCHEIDUNG YANNICK OFFEN“ (Kasten 10, LIESMICH 12, AUTOREN 18) als entschieden markieren; Sprechtext Folie 10 Schritt 5 anpassen; Wortbudget Folie 10 beachten (schon 49 Wörter – nicht wachsen lassen, ggf. an anderer Stelle kürzen). (2) Der Limbic-Typ bleibt die Hauptaussage auf Folie 05 – nur als eigene Erweiterung kennzeichnen (#22), keine offene Entscheidung mehr vermerken.
NICHT freigegeben: Literatur auf Vorlesungsausgaben umstellen, Fußzeilen mit „Stenger, S. n“ auf allen Folien, B7 (Gruppe „Quellen & Vorlesungsbezug“); Inhalte von Lukas (Folien 06–08b) und Elias (09–11) – dort nur Begriffe des Steuerrads angleichen, wo sie dessen Felder benennen (z. B. Feldname im Ergebnistitel), sonst nur Hinweis im Kasten der Folie. In Notizen und Kästen der geänderten Stellen darf „Stenger, S. n“ als Beleg stehen.
WICHTIG zur Widerspruchsfreiheit: Wenn „Markenkern“ jetzt die Mitte des Rads ist (Wer sind wir? – Historie, Herkunft, Rolle im Markt, Assets), müssen alle Stellen nachgezogen werden, die bisher „Markenkern = Genuss mit gutem Gewissen“ sagen – u. a. Folie 10 (Daten, Sprechtexte, Rückfragen, Kasten), Folie 11 (Titel „starker Kern“, Kern-Knopf), Folie 12, die Chamäleon-Notizen vom 20.10. auf 08/08b/10 („Der Markenkern steht: Genuss mit gutem Gewissen“), methoden.md §6, QUELLEN.md, js-Kommentare. Volltextsuche nach „Markenkern“, „Markenkompetenz“, „Markenattribut“, „Wer bin ich“, „Was biete ich“, „Wie bin ich“, „Wie trete ich auf“, „Fremdbild“, „Selbstbild“ (ohne _test, _entwuerfe, ki-nachweis, recherche, dossier-buendel-b, prompts.md – prompts.md und KI-Nachweis nicht rückwirkend ändern). Hinweis in Notizen: bei Esch selbst heißt die Mitte auch „Markenkompetenz“ (MW), die Vorlesung nennt sie „Markenkern“.
Feste Regeln: Live-Abstimmung (live-abstimmung/, js/abstimmen.js, Abschnitt 3a in js/komponenten.js, marke.js umfragen) nicht ändern. Nicht ändern: recherche/*, dossier-buendel-b.*, gruenderbefragung.md, prompts.md, ki-nachweis/*, unterlagen/*. Keine erfundenen Fakten; Gründeraussagen nur als „Horsch 2026 (GB)“. Wortbudget der Hauptfolien beachten (pruefen.mjs warnt ab ca. 40 Wörtern). Keine Modellbezeichnungen (Namen von KI-Modellen) in Dateien. Deutsch, Stil der Dateien. Kein git commit. Prüfwerkzeug: PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core node werkzeuge/pruefen.mjs index.html --ausgabe _test/<x> --schritte [--optional] [--nur f02,f03,f05,f10,f11,f12,b1] [--thema bento|keynote] [--modus dunkel]; Testausgaben nur unter praesentation/_test/.
`

phase('Bauen')
const bau = await agent(GEMEINSAM + `
Auftrag BAUEN: alle freigegebenen Befunde umsetzen. Reihenfolge: (1) Begriffsentscheidung für das bisherige Band (mit Vorlesungsseite begründen); (2) js/komponenten.js FELDER (Namen und Leitfragen; Breite der Beschriftungen im Rad prüfen, ggf. Umbruch „Marken-/eigenschaften“), js/deck.js; (3) Folien 02, 03 (Kicker „Wer sind wir?“), 05 (Kennzeichnung Typen), 10, 11, 12, B1 und alle Notizen/Kästen/Kommentare; (4) methoden.md, README.md (FS1), folienentwuerfe.md, markenkompetenz.md, limbic-map.md, persona-steckbrief.md soweit betroffen (mit Datum ${args.datum} und Hinweis „Abgleich Vorlesung, Befund #…“); (5) grafiken/folie-02-vorgehen.svg/.png neu erzeugen, wenn Leitfragen/Feldnamen darin stehen (Werkzeug wie bisher; ggf. Kopfkommentar der SVG lesen); (6) Prüfläufe f02, f03, f05, f10, f11, f12, b1 in editorial/bento/keynote, hell/dunkel: 0 Fehler, keine neuen Wortbudget-Warnungen; Rad auf 10 und 12 ansehen (Beschriftungen passen, nichts abgeschnitten). LIESMICH.md/AUTOREN.md erst in der Nacharbeit.`, { label: 'bau', phase: 'Bauen', schema: {
  type: 'object',
  properties: {
    begriffsentscheidung: { type: 'string' },
    dateien: { type: 'array', items: { type: 'object', properties: { datei: { type: 'string' }, was: { type: 'string' } }, required: ['datei', 'was'] } },
    getestet: { type: 'string' },
    offen: { type: 'array', items: { type: 'string' } },
  },
  required: ['begriffsentscheidung', 'dateien', 'getestet', 'offen'],
} })

phase('Prüfen')
const pruefung = await agent(GEMEINSAM + `
Auftrag PRÜFEN (adversarial, nichts ändern): (a) Stimmt jede neue Bezeichnung mit der sichtbaren Vorlesungsfolie überein (S. 60, 69–71, 78, 87–94 als Bild ansehen)? (b) Widerspruchsfreiheit: Gibt es noch Stellen, die „Markenkern“ im alten Sinn („Genuss mit gutem Gewissen“) benutzen, Ich-Form-Leitfragen, „Markenattribute“ als Feldname, „Markenkompetenz“ als Name der Mitte ohne Einordnung? Passen Sprechtexte, Rückfragen und Titel (Folie 11 „starker Kern“) zur neuen Lesart, und bleibt die Argumentation schlüssig (was trägt jetzt die Kernaussage „Genuss mit gutem Gewissen“)? (c) Kennzeichnung #15/#22 ehrlich und knapp, keine neuen Behauptungen. (d) Darstellung: Rad auf 10 und 12 und Folie 02/05 in allen Themen ansehen; Wortbudget. (e) Nur erlaubte Dateien geändert (git diff --name-only), keine Modellbezeichnungen.
Bericht des Baus:
` + JSON.stringify(bau, null, 1), { label: 'pruefen', phase: 'Prüfen', schema: {
  type: 'object',
  properties: { befunde: { type: 'array', items: { type: 'object', properties: { schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] }, stelle: { type: 'string' }, problem: { type: 'string' }, beleg: { type: 'string' }, vorschlag: { type: 'string' } }, required: ['schwere', 'stelle', 'problem', 'beleg', 'vorschlag'] } } },
  required: ['befunde'],
} })

phase('Nacharbeit')
const nacharbeit = await agent(GEMEINSAM + `
Auftrag NACHARBEIT: Befunde „hoch“ und „mittel“ umsetzen, „niedrig“ wo sinnvoll, Rest begründen. Dann: abgleich-vorlesung.md – bei #15, #22, #27–#30 einen Vermerk „umgesetzt am ${args.datum} (Commit folgt)“ bzw. was offen bleibt; LIESMICH.md (Checkliste 12: Entscheidungen Yannick 21.10. (Chamäleon im Feld Tonalität, Limbic-Typ bleibt Hauptaussage) als erledigt; ggf. Hinweis an Lukas zu Folie 06 „Markeneigenschaften“ und 08b „Ins Steuerrad“) und AUTOREN.md (neuer Abschnitt mit Datum, Änderungstabelle, Prüfergebnis); pruefen.mjs index.html --schritte --optional (0 Fehler); Exporte nach AUTOREN §15 neu erzeugen und nach export/ kopieren (PDF 22 Seiten ohne 01b, 23 Folienbilder, Übersicht --stand 21.10.2026); f10 und f02 als Bild ansehen. Für Yannick: kurze Liste, was sich in seinen Sprechtexten (Folie 02–05) und in Elias' Folie 10 geändert hat und welche Entscheidung offen ist. Kein Commit, ki-nachweis/ nicht ändern.
Berichte:
` + JSON.stringify({ bau, pruefung }, null, 1), { label: 'nacharbeit', phase: 'Nacharbeit', schema: {
  type: 'object',
  properties: {
    umgesetzt: { type: 'array', items: { type: 'string' } },
    nicht_umgesetzt: { type: 'array', items: { type: 'string' } },
    tests: { type: 'string' },
    fuer_yannick: { type: 'array', items: { type: 'string' } },
  },
  required: ['umgesetzt', 'nicht_umgesetzt', 'tests', 'fuer_yannick'],
} })

return { bau, pruefung, nacharbeit }
