export const meta = {
  name: 'buendel-b-einbau',
  description: 'KI-simulierte Ergebnisse (Bündel B) und Entscheidungen Yannick einbauen: 06/07/08b ehrlich, Folie 08 und Abstimmung nach Elias (Papagei + Chamäleon), Folie 10 als Selbstbild mit Abgleich, Querverweise, Doku, Prüfung, Exporte',
  phases: [
    { title: 'Bauen', detail: 'Folie 08/08b + Abstimmung und Folien 06/07/B4/B5 parallel' },
    { title: 'Synthese', detail: 'Folie 10 (Selbstbild + Abgleich), 11, 12, 02, 05, B1, B2, B7, B8; parallel Doku' },
    { title: 'Prüfen', detail: 'Treue zu Daten und Entscheidungen, Darstellung/Technik/Abstimmung, Konsistenz/Kennzeichnung' },
    { title: 'Nacharbeit', detail: 'Befunde Folien und Doku parallel' },
    { title: 'Abschluss', detail: 'alle Tests, Exporte, Bilder' },
  ],
}

const P = '/home/user/Unternehmens-Kommunikation/fallstudie-1-brand-persona'

const GEMEINSAM = `
Kontext: Studentische Gruppenarbeit (Fallstudie 1, Marke HOLY, Vortrag Mo 26.10.2026). Web-Präsentation ${P}/praesentation (index.html mit Kästen „FOLIE xx“, Kommentarblöcken, Notizen, Daten-JSON; js/folien/*.js, css/folien/*.css; marke.js; Live-Abstimmung: abstimmen.html, js/abstimmen.js, js/komponenten.js Baustein „umfrage“, live-abstimmung/; Prüfwerkzeuge: PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core node werkzeuge/pruefen.mjs index.html --ausgabe _test/<x> --schritte [--optional] [--nur f08] [--thema bento|keynote] [--modus dunkel] [--live-werte 3,1,7,0,2] [--live-offline] [--druck pdf]; werkzeuge/live-abstimmung-test.mjs (53 Prüfungen, --mutationen), werkzeuge/zeitfenster-e2e.mjs, werkzeuge/referent-test.mjs index.html --ausgabe _test/<x>; Exporte AUTOREN.md §15).
Lukas (Bündel B) liefert kein Material mehr. Statt seiner Beispieldaten gibt es jetzt eine KI-SIMULIERTE Befragung (Workflow D25, 8 simulierte Befragte T1–T8, Kontrollgruppe, Rechnung per Skript): ${P}/buendel-b/ – zuerst README.md, dann folienvorschlag.md (einsetzbare Daten-JSON, Titel, Fußzeilen, Sprechtexte, Rückfragen, Entscheidungen E1–E18), repertory-grid.md, laddering.md, analogien-befragung.md, simulation-protokoll.md; Zahlen nur aus auswertung/*.csv. Elias' Material (Kommunikationsanalyse, Analogien) ist seit D24 eingebaut: ${P}/analogien.md, ${P}/kommunikationsanalyse.md.

ENTSCHEIDUNGEN YANNICK (23.10.2026, wörtlich in Klammern) – verbindlich:
1. Folien 06, 07, 08b (und B4, B5): „Ehrlich einbauen“ – nach folienvorschlag.md (E1–E8, E14–E16 wie dort empfohlen): Titel als Kernaussage nach den Daten (nichts schönen), Pille „KI-simuliert“ statt „Beispieldaten“, Fußzeilen „KI-simulierte Befragung, n = 8 (T1–T8), keine echten Interviews“ o. ä., Sprechtexte und Rückfragen (u. a. „Warum KI-simulierte Befragte?“ mit Stenger S. 60 und S. 78). ABER wegen Entscheidung 2 zeigen diese Folien das (simulierte) FREMDBILD: Ergebnisbereiche heißen nicht mehr „Ins Steuerrad“, sondern führen zum Abgleich auf Folie 10 (z. B. „Fremdbild (KI-simuliert) → Abgleich Folie 10“).
2. Folie 10: „Rad = Selbstbild, Simulation als Abgleich“. Das Steuerrad zeigt die Markenidentität als SELBSTBILD – nur Stichworte aus Quellen über HOLYs eigene Aussagen und Auftritt: Desk Research/Dossier (DR, Faktenstatus ✔), Gründerbefragung (GB, Selbstauskunft Horsch 2026), Elias' Analogien (AN) und Kommunikationsanalyse (KA) aus HOLYs eigener Kommunikation. Vorschlag (prüfen, Quellen in den Notizen): Markenkern, Brand Persona, Markenbild, Positionierung „Genuss mit gutem Gewissen“ unverändert; Markeneigenschaften „zuckerfrei · Community-nah · Energy: 160 mg Koffein“ mit Selbstbild-Quellen (DR/KA statt RG); Markennutzen „Genuss ohne Zucker · gutes Gewissen · dazugehören“ aus HOLYs Versprechen/GB/AN (statt LA) – nur behalten, was eine Selbstbild-Quelle trägt; Markentonalität „frech · gesellig · wandelbar“ = Elias' drei Analogien (Comedian: Humor und Frechheit, Papagei: Auftreten und Gemeinschaft, Chamäleon: Wandelbarkeit) – diese drei Wörter stehen dann wortgleich auf Folie 08. Die zwei Lücken der Konsistenzprüfung (Koffein vs. gutes Gewissen; Bildwelt zu jung) und die Titel von 10/11 bleiben. NEU: ein kompakter Schritt nach der Konsistenzprüfung „Abgleich: Selbstbild ↔ Fremdbild (KI-simuliert)“ mit 3–4 Paaren aus den Folien 06/07/08/08b, je ≤ ca. 6 Wörter, mit Zeichen für Abweichung/Übereinstimmung – z. B. zuckerfrei ↔ Cola Zero gleichauf (06), Genuss mit gutem Gewissen ↔ verlässlich, kein Zuckerabsturz (07), frech ↔ witziger Kumpel, der verkaufen will (08b), Papagei & Chamäleon ↔ Papagei 5 von 8 (08, Übereinstimmung). Begriffe nach der Vorlesung: Identität = Selbstbild, Image = Fremdbild (Stenger S. 60, 87). Der optionale Wortwolken-Abgleich bleibt der letzte Schritt. Sprechtext Folie 10 war schon zu lang (ca. 186 Wörter ≈ 98 s, Soll 75 s): neuen Schritt knapp sprechen und an anderer Stelle kürzen; Wörter zählen und berichten.
3. Folie 08 und Live-Abstimmung: „So wie Elias das am wahrscheinlichsten wollte mit seinen Notizen“. Auslegung (Hauptagent, KI-Nachweis 135): Elias schreibt „Als Mensch ist HOLY ein Impro-Comedian, als Tier ein Papagei und ein Chamäleon. Die drei Analogien ergänzen sich“ (Papagei Tier 1, Chamäleon Tier 2). Also Papagei und Chamäleon GLEICHWERTIG als unsere Analyse: Titel nennt beide und den Adler als Maskottchen (z. B. „HOLY wäre Papagei und Chamäleon, kein Adler“ – einzeilig prüfen, sonst kürzer), Karten für beide Tiere mit Elias' Gründen/Belegen plus Comedian (Wortbudget ≤ ca. 41); in der Live-Abstimmung ersetzt der Papagei den FUCHS an derselben Position (marke.js optionen: Adler, Löwe, Chamäleon, Papagei, Schwan; das Google-Skript speichert nur die Nummer, dort nichts ändern), unsereAntwort = beide Tiere (Code im Baustein umfrage und in 08-analogien.js abwärtsverträglich für Text ODER Liste erweitern; Auflösung umrahmt beide Zeilen; Aussagezahl „x % sehen HOLY wie wir: als Papagei oder Chamäleon“ = Summe beider), Papagei-Zeichnung auch auf der Handy-Seite (js/abstimmen.js BILDER). Im Sprechtext: die KI-simulierten Befragten nennen offen meist den Papagei (5 von 8), das Chamäleon nie (Abgleich, Folie 10). Alle Tests der Abstimmung anpassen und bestehen lassen; runde/liveQuelle/gueltigMinuten NICHT ändern.
4. „selbst anrühren“ (stärkste Hürde, quer zum Markenkern „Softdrinks zum Selbermixen“): „Nur im Sprechtext“ – keine dritte Lücke, Titel 10/11 bleiben; nennen im Sprechtext (Folie 06 und Folie 10) und als Rückfrage „Warum fehlt ‚selbst anrühren‘?“.
5. Querverweise nachziehen (waren bisher gesperrt): Folie 02 (Methodenkarten: Befragungen „KI-simuliert, keine Interviews“; Kommunikationsanalyse vier Kanäle, Bildschirmaufnahmen; Rolle: Rad = Selbstbild, Befragungen = Fremdbild-Abgleich), Folie 05 (Notizen „Raptor bleibt Absender“, „Comic-Tiere, 31 Energy-Sorten“ → aktueller Stand), Folie 12 (Ergebnisse, Fazit), B1 (Methodik, Grenzen, keine Interviews), B2 (Prompt-Log: P7–P11 jetzt echte Läufe D25 statt Beispielzeilen), B7/B8 (Quellen).

FESTE REGELN: Zahlen nur aus ${P}/buendel-b/auswertung/*.csv bzw. Elias' Material/Dossier – nichts neu rechnen oder schätzen. Überall „KI-simuliert“, nie „Befragte sagen“ ohne Zusatz, keine Signifikanz/Repräsentativität. Folie 01, 03, 04 und 09/09b sichtbar nicht ändern; Folie 05 nur Notizen. Keine Namen von KI-Modellen in Dateien. Deutsch, Stil und Kommentardichte der Dateien; Änderungen in Kästen mit Datum 23.10.2026. index.html wird von MEHREREN Agenten parallel bearbeitet: NUR mit dem Edit-Werkzeug in deinen eigenen Folienabschnitten ändern (vor jeder Änderung frisch lesen), NIE die ganze Datei per Write oder Skript neu schreiben. Kein git commit; ki-nachweis/ nicht ändern; buendel-b/rohdaten nicht ändern. Testausgaben nur unter praesentation/_test/, Hilfsskripte im Scratchpad /tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad/d26/.
`

const BERICHT = {
  type: 'object',
  properties: {
    dateien: { type: 'array', items: { type: 'object', properties: { datei: { type: 'string' }, was: { type: 'string' } }, required: ['datei', 'was'] } },
    abweichungen: { type: 'array', items: { type: 'string' } },
    offene_fragen: { type: 'array', items: { type: 'string' } },
    getestet: { type: 'string' },
  },
  required: ['dateien', 'abweichungen', 'offene_fragen', 'getestet'],
}

phase('Bauen')
const bau = (await parallel([
  () => agent(GEMEINSAM + `
Auftrag BAUEN A – FOLIE 08, 08b UND LIVE-ABSTIMMUNG (Entscheidungen 1 für 08b und 3): Dateien: index.html (NUR Abschnitte FOLIE 08 und FOLIE 08b samt Kästen/Kommentaren), js/folien/08-analogien.js, css/folien/08-analogien.css, marke.js (umfragen.tier: optionen, unsereAntwort + Kommentar), js/komponenten.js (nur Baustein umfrage), js/abstimmen.js, abstimmen.html/css falls nötig, werkzeuge/*.mjs (Erwartungen an Optionen/Antwort), live-abstimmung/ANLEITUNG.md (Optionen). Folie 08b nach folienvorschlag.md §4 (Daten, Titel, Pille, Fußzeile, Sprechtext, Rückfragen), Ergebnisbereich als Fremdbild → Abgleich Folie 10 statt „Ins Steuerrad“ (Konsolen-Abgleich 08b ↔ 10 entsprechend anpassen). Folie 08: beide Tiere gleichwertig, Comedian, Zeile mit dem simulierten Ergebnis höchstens in den Notizen. Tests: live-abstimmung-test.mjs (alle) und --mutationen, zeitfenster-e2e.mjs, referent-test.mjs, pruefen.mjs --nur f08,f08b --schritte in allen Themen und dunkel, auch --live-werte (Aussagezahl mit beiden Tieren) und --live-offline; Handy-Seite abstimmen.html im Browser mit Attrappe ansehen (Papagei-Zeichnung). Keine schreibenden Anfragen an die echte liveQuelle.`, { label: 'bau:08-abstimmung', phase: 'Bauen', schema: BERICHT }),
  () => agent(GEMEINSAM + `
Auftrag BAUEN B – FOLIEN 06, 07, B4, B5 (Entscheidung 1 und 4): Dateien: index.html (NUR Abschnitte FOLIE 06, FOLIE 07, B4, B5 samt Kästen/Kommentaren), js/folien/06-repertory-grid.js, js/folien/07-laddering.js, css/folien/06-*.css, css/folien/07-*.css, js/folien/13-backup.js und css/folien/13-backup.css NUR für B4/B5. Nach folienvorschlag.md §1, §2, §7, §8 (E1–E4, E14–E16): Daten-JSON einsetzen, Titel, Pille, Fußzeilen, Sprechtexte, Rückfragen; Skriptänderungen E4 (Laddering: Verbindungen innerhalb einer Ebene, stärkste Leiter mit fünf Gliedern) und E15 (B4 zeigt die fertigen Felder). Ergebnisbereiche als Fremdbild (KI-simuliert) → Abgleich Folie 10 statt „Markeneigenschaften fürs Steuerrad“; „selbst anrühren“ als stärkste Hürde im Sprechtext 06 und als Rückfrage. Prüfen: pruefen.mjs --nur f06,f07,b4,b5 --schritte in allen Themen und dunkel, Screenshots jedes Schritts SELBST ansehen; Konsolenwarnungen zu Abweichungen 06/07 ↔ 10 notieren (Folie 10 baut ein anderer Agent danach).`, { label: 'bau:06-07-b4-b5', phase: 'Bauen', schema: BERICHT }),
])).filter(Boolean)

phase('Synthese')
const synthese = (await parallel([
  () => agent(GEMEINSAM + `
HINWEIS ZUM NEUSTART: Ein früherer Lauf dieses Auftrags brach am Nutzungslimit ab und hatte schon viel umgesetzt (git diff zeigt es). Zuerst den aktuellen Stand per git diff prüfen, Brauchbares übernehmen, nichts doppelt einfügen, Fehlendes vervollständigen, dann prüfen. Auftrag SYNTHESE FOLIEN (Entscheidungen 2, 4, 5): Dateien: index.html (Abschnitte FOLIE 10, 11, 12, 02, 05 nur Notizen/Kasten, B1, B2, B7, B8), js/folien/10-markensteuerrad.js, css/folien/10-markensteuerrad.css, js/folien/02-vorgehen.js, js/folien/11-fazit.js, js/folien/12-fragen.js, js/folien/13-backup.js (nur B1/B2/B7/B8), zugehörige CSS. Folie 10: Felder als Selbstbild mit Quellenkürzeln (Legende in Notizen und B1), Lücken unverändert, neuer Abgleich-Schritt Selbstbild ↔ Fremdbild (KI-simuliert) nach der Konsistenzprüfung (Schritte im Kommentarblock und Kasten aktualisieren), Wortgleichheits-Prüfungen im Skript an die neue Logik anpassen (Tonalität ↔ Folie 08, Bild ↔ 09b; 06/07/08b nicht mehr ins Rad, sondern in den Abgleich), Sprechtext mit Wortzahl. Folie 11/12: nur nachziehen, was die Entscheidungen verlangen (Notizen, Belege, Fazit-Zeile, Ergebnisliste). Folie 02/05/B1/B2/B7/B8 nach Entscheidung 5. Berichte der Bau-Agenten unten beachten (Titel, Wortlaute auf 06/07/08/08b). Prüfen: pruefen.mjs --nur f02,f10,f11,f12,b1,b2,b7,b8 --schritte in allen Themen und dunkel, Screenshots selbst ansehen (Rad, Abgleich-Schritt, keine Überläufe), danach pruefen.mjs index.html --schritte --optional (0 Fehler).
Berichte Bauen:
` + JSON.stringify(bau, null, 1), { label: 'synthese:folien', phase: 'Synthese', schema: BERICHT }),
  () => agent(GEMEINSAM + `
HINWEIS ZUM NEUSTART: Ein früherer Lauf dieses Auftrags brach am Nutzungslimit ab und hatte schon viel umgesetzt (git diff zeigt es). Zuerst den aktuellen Stand per git diff prüfen, Brauchbares übernehmen, nichts doppelt einfügen, Fehlendes vervollständigen, dann prüfen. Auftrag SYNTHESE DOKU (nur Markdown, NICHT index.html/js/css): ${P}/folienentwuerfe.md (Folien 2, 6, 7, 8, 8b, 10, 12, B4, B5 auf den neuen Stand), ${P}/fragerunde.md (Fragen zu KI-Simulation, Selbstbild/Fremdbild, Papagei/Chamäleon, Hürden, Positionierung; alte Antworten nicht stehen lassen), ${P}/methoden.md (§6 Synthese: Rad = Selbstbild, Befragungen als Fremdbild-Abgleich – als Entscheidung der Gruppe 23.10.2026 kennzeichnen), ${P}/analogien.md (§7/§10: Verweis auf die simulierte Befragung, Papagei 5/8), ${P}/limbic-map.md (Raptor/Comic-Tiere-Stellen auf aktuellen Stand), ${P}/arbeitsplan.md (Bündel B: kein Material von Lukas, KI-Simulation D25), ${P}/README.md (Fallstudie 1, falls Ausarbeitungen gelistet), ${P}/buendel-b/folienvorschlag.md (Kopfvermerk: umgesetzt am 23.10.2026 mit Abweichung „Rad = Selbstbild“ und Papagei-Entscheidung), praesentation/QUELLEN.md, praesentation/LIESMICH.md (§1 Stand, §6 Abstimmung: Papagei statt Fuchs, Auflösung mit zwei Tieren; §12 Checklisten je Person – Lukas-Punkte erledigt/entfallen, neue Prüfpunkte für Yannick und Elias), praesentation/AUTOREN.md (neuer Abschnitt mit Datum, Änderungstabelle), praesentation/VORTRAGSREIFE.md (kurzer Nachtrag). Lies die Berichte unten und den aktuellen Stand von index.html (nur lesen), damit die Doku zu den gebauten Folien passt; was Folie 10 betrifft, als „wird parallel gebaut“ formulieren und im Bericht vermerken.
Berichte Bauen:
` + JSON.stringify(bau, null, 1), { label: 'synthese:doku', phase: 'Synthese', schema: BERICHT }),
])).filter(Boolean)

const BEF = {
  type: 'object',
  properties: {
    pruefer: { type: 'string' },
    befunde: { type: 'array', items: { type: 'object', properties: { schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] }, datei: { type: 'string' }, stelle: { type: 'string' }, problem: { type: 'string' }, beleg: { type: 'string' }, vorschlag: { type: 'string' } }, required: ['schwere', 'datei', 'stelle', 'problem', 'beleg', 'vorschlag'] } },
  },
  required: ['pruefer', 'befunde'],
}
const PR = [
  { key: 'treue', p: `Prüfer TREUE ZU DATEN UND ENTSCHEIDUNGEN (adversarial, nichts ändern): Jede Zahl und Aussage auf 06, 07, 08, 08b, 10, B4, B5 (sichtbar, Notizen, Daten) gegen buendel-b/auswertung/*.csv, folienvorschlag.md, die Ausarbeitungen von Elias und das Dossier prüfen. Sind die Entscheidungen 1–5 exakt umgesetzt (z. B. Rad wirklich nur Selbstbild mit tragender Quelle je Stichwort; Abgleich-Paare korrekt; Papagei und Chamäleon gleichwertig; Anrühren nur im Sprechtext; Titel nicht geschönt)? Fehlen Vorbehalte der D25-Prüfer (online bestellen widerspricht dem Dossier, Laddering-Widerspruch bei 4 von 8, „kein Zuckerabsturz“ = Kategorie/kein Gesundheitsversprechen)? Steht überall „KI-simuliert“?` },
  { key: 'technik', p: `Prüfer DARSTELLUNG, TECHNIK, ABSTIMMUNG (adversarial, nur Testausgaben): pruefen.mjs index.html --schritte --optional in editorial, bento, keynote, dunkel; Screenshots aller Schritte von f06, f07, f08, f08b, f10 (inkl. Abgleich-Schritt), b4, b5 SELBST ansehen, auch verkleinert 960 × 540; Wortbudget; Konsolenwarnungen. Live-Abstimmung: live-abstimmung-test.mjs, --mutationen, zeitfenster-e2e.mjs, referent-test.mjs; f08 mit --live-werte (Aussagezahl mit zwei Tieren richtig?), --live-offline, Handy-Seite mit Attrappe (Papagei an Position 4, Zeichnung). Ist der Code abwärtsverträglich (unsereAntwort als Text)? Druck-PDF Seiten 06–10.` },
  { key: 'konsistenz', p: `Prüfer KONSISTENZ, KENNZEICHNUNG, DOKU (adversarial, nichts ändern): Volltextsuche in index.html und allen Markdown-Dateien nach veralteten Aussagen (Beispieldaten bei 06/07/08b/B4/B5, „3 Kurzinterviews“, „n = 8 … Beispieldaten“, „zuckerfrei · Community-nah“ als RG-Ergebnis, „frecher Kumpel“ als Rad-Wort, „Fuchs“ in der Abstimmung, „nur das Chamäleon“, „Ins Steuerrad“ auf 08b, „Raptor bleibt Absender“, Lukas-Aufgaben als offen). Wortgleichheit Rad ↔ Folie 08/09b; Legende der Quellenkürzel; KI-simuliert überall; keine Namen von KI-Modellen; keine personenbezogenen Daten; git diff --stat nur erlaubte Dateien (Folie 01, 03, 04, 09/09b sichtbar unverändert). Sprechzeiten: Summe des Vortrags gegen 15 Minuten (LIESMICH Zeitplan) – ist der Plan noch einzuhalten?` },
]
phase('Prüfen')
const pruefungen = (await parallel(PR.map(x => () => agent(GEMEINSAM + '\n' + x.p + '\nBerichte:\n' + JSON.stringify({ bau, synthese }, null, 1), { label: 'pruefen:' + x.key, phase: 'Prüfen', schema: BEF })))).filter(Boolean)

const NACH = {
  type: 'object',
  properties: {
    umgesetzt: { type: 'array', items: { type: 'string' } },
    nicht_umgesetzt: { type: 'array', items: { type: 'string' } },
    tests: { type: 'string' },
  },
  required: ['umgesetzt', 'nicht_umgesetzt', 'tests'],
}
phase('Nacharbeit')
const nacharbeit = (await parallel([
  () => agent(GEMEINSAM + `
Auftrag NACHARBEIT FOLIEN: Befunde „hoch“ und „mittel“ umsetzen, die index.html, js/, css/, marke.js oder werkzeuge/ betreffen; „niedrig“ wo sinnvoll; Rest begründen. Kein Markdown (paralleler Agent). Danach betroffene Folien prüfen (pruefen.mjs in allen Themen, Screenshots), Abstimmungstests erneut.
Berichte:
` + JSON.stringify({ bau, synthese, pruefungen }, null, 1), { label: 'nacharbeit:folien', phase: 'Nacharbeit', schema: NACH }),
  () => agent(GEMEINSAM + `
Auftrag NACHARBEIT DOKU: Befunde umsetzen, die Markdown-Dateien betreffen; Doku an den endgültigen Stand der Folien angleichen (index.html nur lesen). Kein index.html/js/css.
Berichte:
` + JSON.stringify({ bau, synthese, pruefungen }, null, 1), { label: 'nacharbeit:doku', phase: 'Nacharbeit', schema: NACH }),
])).filter(Boolean)

phase('Abschluss')
const abschluss = await agent(GEMEINSAM + `
Auftrag ABSCHLUSS: (1) Volltextsuche wie beim Konsistenz-Prüfer, Reste beheben. (2) Alle Tests: pruefen.mjs index.html --schritte --optional in editorial, bento, keynote, dunkel (0 Fehler; Warnungen auflisten), live-abstimmung-test.mjs (+ --mutationen), zeitfenster-e2e.mjs, referent-test.mjs. (3) Exporte nach AUTOREN.md §15 neu (PDF 22 Seiten ohne 01b, 23 Folienbilder, Übersicht --stand 23.10.2026) und nach export/ kopieren. (4) Für Yannick: absolute Pfade der Folienbilder f02, f06, f07, f08, f08b, f10, b4, b5 und eines Bildes vom Abgleich-Schritt auf Folie 10 (Zwischenschritt, aus _test); Sprechzeit des Vortrags (Summe) gegen 15 Minuten; Entscheidungen für Yannick und Elias (kurz). Kein Commit.
Berichte:
` + JSON.stringify({ bau, synthese, pruefungen, nacharbeit }, null, 1), { label: 'abschluss', phase: 'Abschluss', schema: {
  type: 'object',
  properties: {
    korrekturen: { type: 'array', items: { type: 'string' } },
    tests: { type: 'string' },
    exporte: { type: 'string' },
    sprechzeit: { type: 'string' },
    bilder: { type: 'array', items: { type: 'string' } },
    fuer_yannick: { type: 'array', items: { type: 'string' } },
    fuer_elias: { type: 'array', items: { type: 'string' } },
  },
  required: ['korrekturen', 'tests', 'exporte', 'sprechzeit', 'bilder', 'fuer_yannick', 'fuer_elias'],
} })

return { bau, synthese, pruefungen, nacharbeit, abschluss }
