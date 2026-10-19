export const meta = {
  name: 'gruenderbefragung-einbau',
  description: 'Freigegebene Gründerbefragung (Mathias Horsch) in die Ausarbeitungen von Bündel A und die Web-Präsentation einbauen, prüfen, nacharbeiten',
  phases: [
    { title: 'Ausarbeitungen', detail: 'Persona, Limbic Map, Markenkompetenz/Methoden, Folienentwürfe (parallel, getrennte Dateien)' },
    { title: 'Präsentation', detail: 'index.html: Notizen, Backups B1/B3/B7, eine sichtbare Erwähnung' },
    { title: 'Prüfen', detail: 'Treue und Kennzeichnung; Darstellung und Konsistenz' },
    { title: 'Nacharbeit', detail: 'Befunde einarbeiten, Exporte erneuern' },
  ],
}

const D = args.datum
const T = args.transkript
const GEMEINSAM = `
Kontext: Studentische Gruppenarbeit (Modul Unternehmenskommunikation, HS Kaiserslautern), Fallstudie 1 „Brand Persona & Markenidentität“, Marke HOLY. Repository /home/user/Unternehmens-Kommunikation, Arbeitsordner fallstudie-1-brand-persona/. Heute ist ${D}. Präsentation Mo 26.10.2026. Bündel A (Yannick): Markenkompetenz (A1), Persona (A2), Limbic Map (A3), Leitung der Markensteuerrad-Synthese (C2). Bündel B (Lukas): Folien 06–08b. Bündel C (Elias): Folien 09–11.
Neu: Gründer Mathias Horsch hat den Fragenkatalog der Gruppe per Sprachnachricht beantwortet. Die Auswertung steht in fallstudie-1-brand-persona/gruenderbefragung.md (lies sie vollständig; sie enthält die geprüften Befunde P1–P13, K1–K14, B1–B14 mit Spalte „Wann“ und die Regeln in Abschnitt 2.3). Das bereinigte Transkript liegt in ${T}; nutze es nur, um Formulierungen gegenzuprüfen.
Freigabe (laut Yannick, 19.10.2026): Name, Paraphrasen und kurze Zitate von Mathias Horsch dürfen in die Präsentation und ins öffentliche Repository. Die Angabe „95 %“ nur mit dem Zusatz „laut Gründer, Datengrundlage nicht offengelegt“ und nur in Notizen oder Backup, nie als Kennzahl auf einer Hauptfolie. Das Transkript selbst und längere wörtliche Passagen kommen NICHT ins Repository.
Regeln für jede Übernahme (gruenderbefragung.md 2.3):
- Immer als Selbstauskunft kennzeichnen: „laut Gründer Mathias Horsch (Befragung 10/2026)“ oder kurz „Horsch 2026 (GB)“. Nie als Tatsache über die Kundschaft. Was er nicht nennt, heißt nur „nicht genannt“ (danach wurde oft nicht gefragt).
- Paraphrase vor Zitat; wörtlich höchstens ein Satz und nur bei sicherem Wortlaut. Nicht zitieren: „No/Zero Bullshit“, die unklare Erläuterung zu „Put the HOLY Squad first“, „mehr trinken“.
- Bestätigungen schwach gewichten: Viele Antworten wiederholen die Website [1] und das Press Kit [13].
- Bestehende Kennzeichnungen (✔ ✎ ~ H, D/A/M/MW) und Quellennummern [n] (= Anhang B des Recherche-Dossiers) beibehalten; Horsch 2026 bekommt keine Nummer, sondern „GB“.
Feste Regeln:
- Öffne KEINE Dateien unter /root/.claude/uploads, keine Audiodateien und keine Datei mit „NUR-Gruppenordner“ im Namen außer ${T}.
- Ändere nur die Dateien, die dein Auftrag nennt. Nicht ändern: ki-nachweis/*, dossier-buendel-b.md, gruenderbefragung.md, die Folien 06, 07, 08, 08b, 09, 09b, 11 (sichtbare Inhalte und Daten), Recherche-Dossier. Kein git commit.
- Kurze, klare deutsche Sätze im Stil der jeweiligen Datei. Keine Modellbezeichnungen (Namen von KI-Modellen) in Dateien.
- Melde am Ende jede Änderung mit Datei, Stelle und neuem Wortlaut (kurz) und was du bewusst nicht geändert hast.
`
const AENDERUNGEN = {
  type: 'object',
  properties: {
    bereich: { type: 'string' },
    geaendert: { type: 'array', items: { type: 'object', properties: {
      datei: { type: 'string' }, stelle: { type: 'string' }, was: { type: 'string' }, befund: { type: 'string', description: 'z. B. P1, K12' } },
      required: ['datei', 'stelle', 'was', 'befund'] } },
    nicht_geaendert: { type: 'array', items: { type: 'string' } },
    offen: { type: 'array', items: { type: 'string' } },
  },
  required: ['bereich', 'geaendert', 'nicht_geaendert', 'offen'],
}

const AUSARBEITUNGEN = [
  { key: 'persona', prompt: `Dateien: fallstudie-1-brand-persona/persona-steckbrief.md und persona-datenerhebung.md.
Setze die Befunde P1–P7 und P12 aus gruenderbefragung.md 4.1/4.2 um, soweit „Wann“ = „jetzt“:
- P1: Marco als „Kern-Persona (heutige Kernkundschaft)“ statt „Kernzielgruppe“ (Begründung Dossier 4.3).
- P2: im Abschnitt 3 (Was die Daten tragen) die drei Gründerangaben mit Bezugsgröße: Horsch 2023 Community „16 bis 55“ [4], Jost 2024 Kundschaft meist 25–40, etwa 2/3 männlich [24], Horsch 2026 Zielgruppe 18–55, Männer und Frauen (GB); alle drei Selbstauskünfte, keine Kundendaten; Marco (28) liegt in allen Spannen.
- P3: Profil 5 (39 Jahre): „obere Grenze der Kundschaft laut Podcast 2024 [24]“; Profile nicht ändern (P7 lief am 17.10.).
- P4, P5, P6: Belegspalte des Steckbriefs knapp ergänzen (Schichtberufe auch laut Horsch 2026; Kaufgründe laut Horsch: Geschmack > wenig Zucker/Kalorien/funktionale Inhaltsstoffe > Preis, Wirkung nicht ausdrücklich genannt; Gains decken sich mit dem Selbstbild, Kundensicht offen). Status A/D nicht hochstufen.
- P7: Antwort auf „Warum eine Energy-Persona?“ in die offenen Punkte oder an passender Stelle.
- Abschnitt „Lena“ (Backup B3): Horsch nennt Männer und Frauen als Zielgruppe (GB) als zusätzliche Begründung, Lena bleibt H.
- P12 in persona-datenerhebung.md: beim Code K3 nur einen Hinweis ergänzen („Vorschlag: K3 in ‚Geschmack (lecker)‘ und ‚Sorten/Abwechslung‘ trennen, weil ‚Geschmack‘ Genuss und Abwechslung mischt; mit Lukas abstimmen, Datum der Änderung vermerken“). Nicht umcodieren.
- Quellenliste des Steckbriefs um „Horsch, M. (2026) …“ wie im Kopf von gruenderbefragung.md ergänzen; Stand-Zeile auf ${D}.` },
  { key: 'limbic', prompt: `Datei: fallstudie-1-brand-persona/limbic-map.md.
Setze P8–P11 aus gruenderbefragung.md 4.2 um:
- P8: kurzer Abgleich „Selbstbild laut Gründerbefragung (GB)“ in §4 (Marke): Individualität, Spaß, Kreativität → Stimulanz; Zusammengehörigkeit → Bindung/Balance (nach unserer Map-Lesung §2, mit Vorlesung abgleichen). Gewichte NICHT ändern.
- P9: In §4.1 das Signal „Challenge the status quo“ [17] nicht mehr als Beleg für Rebellion/Abenteuer werten (interner Firmenwert; Horsch erklärt ihn als Innovation). Das Feld Abenteuer/Risiko bleibt, weil TV-Spot und Dachclaim es tragen. Provokation: im Auftritt belegt, im Selbstbild nicht genannt (nicht gefragt) → Hypothese für Soll/Umsetzung, keine Lücke zwischen Selbst- und Fremdbild.
- P10: In §5/§6 Dominanz-Lücke: Horsch nennt Wirkung/Wachbleiben/Koffein nicht ausdrücklich, nur „funktionale Inhaltsstoffe je nach Use Case“ (danach war nicht gefragt); dass die Positionierung die Lücke verursacht, nur als Vermutung (n = 1).
- P11: Widerspruch klären: Das Markenversprechen hat in §4.1 Präsenz „hoch“, das Feld Offenheit/Genuss in §4.2 „im Kommen“. Formuliere klar: Das gute Gewissen (Balance) ist im Auftritt hoch präsent, schwach ist nur das Feld Genuss.
- P12: Persona-Typ bleibt Hedonisten (Hypothese); die Gründeraussage entscheidet den Typ nicht; Hinweis auf die vorgeschlagene Trennung von K3.
- §8 offene Punkte und Quellen aktualisieren (Horsch 2026, GB); Stand-Zeile auf ${D}.
Prüfe, ob folienentwuerfe.md (Folie 5) oder die Web-Folie f05 dadurch inhaltlich falsch werden, und melde das unter „offen“ (nicht selbst ändern).` },
  { key: 'kompetenz', prompt: `Dateien: fallstudie-1-brand-persona/markenkompetenz.md und methoden.md.
Setze K1–K12 aus gruenderbefragung.md 4.3 und 4.4 um, soweit „Wann“ = „jetzt“ oder „Synthese“ (dann als Vermerk für die Synthese):
- K1, K3, K8, K9: knappe Vermerke mit „laut Gründer Mathias Horsch (Befragung 10/2026, GB)“: beschreibt HOLY mit der Website-Formel samt Markenversprechen (kein unabhängiger Beleg); große Softdrinkmarken als Hauptkonkurrenz, „Challenger“ als Haltung; Purpose „meistgeliebte Softdrink-Marke“ = Vision 2026 [17, 31] (Begriff Purpose mit Vorlesung abgleichen); fünf Firmenwerte sinngemäß mit Erläuterung genannt (Schreibweise nach [17] bereinigt, [17] vor dem 26.10. neu abrufen).
- K2, K7: in §4 vermerken, dass das Selbermischen bei Horsch als Teil des Attributs Geschmack und als emotionaler Nutzen (Individualität) erscheint; mögliche Spannung zur Hürde „selbst anrühren“ erst nach Lukas' echten RG-Daten bewerten.
- K4: in der Zeile Wettbewerbsset: Horsch nennt Red Bull, Monster, Coca-Cola (nicht ausdrücklich Zero), Lipton Eistee; Sirup-/Pulveranbieter laut ihm nur kleine Quelle (unbelegt); W4 waterdrop prüft bewusst, ob das Format unterscheidet; Gönrgy ist eine Dose; Set nicht ändern; Rahmen „Softdrink-Marke“ als Gruppenentscheidung.
- K5: „95 %“ höchstens als Rückfrage-Antwort mit Zusatz „laut Gründer, Datengrundlage nicht offengelegt“, nicht als Kennzahl.
- K6: Spannung „Premium“ (Triade) ↔ „günstiger“, „faire Preis-Leistung“ als Hinweis für die Synthese.
- K11, K12: Lücke „gutes Gewissen ↔ Koffein“ bleibt mit Außensicht (Dossier S1 [27, 28, 29]); Selbstbild „Softdrink-Marke“ ↔ Energy rechtlich Nahrungsergänzungsmittel ✔ [56, 72] als Spannung.
- methoden.md §6: Quellenkürzel **GB** (Gründerbefragung, Selbstauskunft) ergänzen, mit Regel: GB nur stützend, sonst Selbstbild in der Konsistenzprüfung (Vorschlag, die Gruppe bestätigt).
- Quellen in markenkompetenz.md um „Horsch, M. (2026) …“ ergänzen; Stand-Zeile auf ${D}.` },
  { key: 'entwuerfe', prompt: `Datei: fallstudie-1-brand-persona/folienentwuerfe.md (nur die Abschnitte zu Folie 2, 3, 4 und 5).
- Folie 2, Rückfrage 2 (K14): als Quelle des Selbstbilds „eine eigene Befragung von Gründer Mathias Horsch per Sprachnachricht“ ergänzen; Grafik nicht ändern.
- Folie 3, Rückfragen (K3, K5, K12): Rückfrage 2 Halbsatz „Auch Mathias Horsch nennt die großen Softdrinkmarken als Hauptkonkurrenz (Selbstauskunft).“; Rückfrage 6 um Selbstbild „Softdrink-Marke“ (Horsch) und die rechtliche Einordnung der Energy-Linie als Nahrungsergänzungsmittel ✔ [56, 72] ergänzen; optional eine Rückfrage „Woher kommt eure Kundschaft?“ mit der 95-%-Angabe NUR mit Zusatz „laut Gründer, Datengrundlage nicht offengelegt“.
- Folie 4: Titel „Unsere Kernzielgruppe …“ → „Unsere Kern-Persona …“ (P1); Rückfrage 1 (Lena, Männer und Frauen laut Horsch), Rückfrage 4 (Schichtberufe auch laut Horsch 2026), neue Rückfrage „Warum eine Energy-Persona, wenn HOLY sich als Softdrink-Marke sieht?“ mit der Antwort aus gruenderbefragung.md P7; Quellenzeile um „Horsch 2026 (GB)“, wo genutzt.
- Folie 5: Rückfrage 4 Halbsatz zum Selbstbild (Individualität, Spaß, Zusammengehörigkeit laut Horsch), Rückfrage 5 Satz aus P10 („Auch Gründer Mathias Horsch nennt Wirkung in unserer Befragung nicht ausdrücklich unter den Kaufgründen (Selbstauskunft; danach war nicht gefragt).“).
- Statustabelle/„Zu prüfen“-Listen der Folien aktualisieren, Stand ${D}.` },
]

phase('Ausarbeitungen')
const ausarbeitungen = (await parallel(AUSARBEITUNGEN.map(a => () =>
  agent(`${GEMEINSAM}\nAuftrag (${a.key}): ${a.prompt}`, { label: `ausarbeitung:${a.key}`, phase: 'Ausarbeitungen', schema: AENDERUNGEN })))).filter(Boolean)
log(`${ausarbeitungen.length} von 4 Ausarbeitungen, ${ausarbeitungen.reduce((n, r) => n + r.geaendert.length, 0)} Änderungen`)

phase('Präsentation')
const praesentation = await agent(`${GEMEINSAM}
Hinweis: Ein früherer, am Nutzungslimit abgebrochener Lauf dieses Auftrags hat index.html, QUELLEN.md und css/folien/13-backup.css schon teilweise geändert (siehe git diff gegen HEAD). Prüfe diese Teiländerungen, übernimm, was stimmt, und vervollständige den Rest, ohne doppelt einzufügen.
Auftrag PRÄSENTATION: Datei fallstudie-1-brand-persona/praesentation/index.html (dazu, nur falls nötig, css/folien/*.css der genannten Folien und QUELLEN.md). Lies zuerst praesentation/AUTOREN.md und LIESMICH.md (Aufbau: Daten in <script type="application/json" class="daten">, Notizen in <aside class="notizen">, Kästen „FOLIE xx“) und die geänderten Ausarbeitungen (Bericht unten).
Änderungen:
1. Notizen bzw. Rückfragen-Absätze von f02, f03, f04, f05 an die neuen Rückfragen aus folienentwuerfe.md anpassen (Gründeraussagen mit Kennzeichnung „laut Gründer Mathias Horsch (Befragung 10/2026)“). f04: falls „Kernzielgruppe“ irgendwo steht, durch „Kern-Persona“ ersetzen.
2. Genau EINE sichtbare Erwähnung auf einer Hauptfolie von Bündel A: Vorschlag Folie 03, Quellzeile unter dem Claim „Geiler Geschmack mit gutem Gewissen“: „Markenversprechen laut Website und Press Kit ✔ [5, 13] · so beschreibt es auch Gründer Mathias Horsch (Befragung 10/2026)“ – oder eine gleichwertige kürzere Fassung. Höchstens 8 zusätzliche sichtbare Wörter; prüfe mit pruefen.mjs, dass nichts überläuft (alle Themen: editorial, bento, keynote; hell und dunkel).
3. Backup B3 (Datenquellen Persona): Zeile(n) so ergänzen, dass „Wer sagt was über wen“ sichtbar wird: Horsch 2023 Community „16 bis 55“ [4], Jost 2024 Kundschaft meist 25–40 [24], Horsch 2026 Zielgruppe 18–55, Männer und Frauen (GB). Tabelle darf nicht überlaufen (vorher war sie knapp; nachmessen).
4. Backup B1 (Methodik): die Gründerbefragung kurz als Quelle des Selbstbilds (Fragenkatalog, Sprachnachrichten, KI-gestützte Abschrift mit Einwilligung, Selbstauskunft n = 1).
5. Backup B7 (Quellen): Eintrag „Horsch, M. (2026): Antworten auf den Fragenkatalog der Gruppe, zwei Sprachnachrichten an L. Welker, LinkedIn, 18.10.2026 (Selbstauskunft; Transkript im Gruppenordner)“.
6. f10: nur Notizen und Kasten „FOLIE 10“: Kürzel GB in der Legende der Notizen erklären, Hinweis „Markenkern ‚Genuss mit gutem Gewissen‘ deckt sich mit dem Selbstbild laut Horsch (GB); gilt als Selbst- und Fremdbild erst, wenn das Laddering dasselbe zeigt“. Sichtbare Daten von f10 NICHT ändern (Beispieldaten, Synthese am 22.10.).
7. Kasten „FOLIE 11“ (nur der Kommentar-Kasten für Autoren): Hinweis an Elias auf die Spannungen aus gruenderbefragung.md 4.4/4.6 (Altersgrenzen, Soll-Ist Tonalität, „Durchhalten ohne Zucker“ als Ergänzung für Energy).
Danach: PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core node werkzeuge/pruefen.mjs index.html --ausgabe _test/d14 --schritte --optional (im Ordner praesentation) und für f03/b1/b3/b7 zusätzlich --thema bento, --thema keynote, --modus dunkel. Screenshots der geänderten Folien ansehen. Exporte noch NICHT erneuern.
Bericht der Ausarbeitungen (JSON):
${JSON.stringify(ausarbeitungen, null, 1)}`, { label: 'praesentation', phase: 'Präsentation', schema: AENDERUNGEN })

const BEFUNDE = {
  type: 'object',
  properties: {
    pruefer: { type: 'string' },
    befunde: { type: 'array', items: { type: 'object', properties: {
      schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
      stelle: { type: 'string' }, problem: { type: 'string' }, beleg: { type: 'string' }, vorschlag: { type: 'string' } },
      required: ['schwere', 'stelle', 'problem', 'beleg', 'vorschlag'] } },
    gesamturteil: { type: 'string' },
  },
  required: ['pruefer', 'befunde', 'gesamturteil'],
}
const BERICHT = JSON.stringify({ ausarbeitungen, praesentation }, null, 1)
const PRUEFER = [
  { key: 'treue', prompt: `Prüfer TREUE UND KENNZEICHNUNG (adversarial). Prüfe JEDE neue oder geänderte Stelle (git diff gegen HEAD in fallstudie-1-brand-persona/, ohne gruenderbefragung.md): (1) Stimmt jede Gründeraussage mit dem Transkript ${T} und mit gruenderbefragung.md überein, ohne Zuspitzung? (2) Ist sie als Selbstauskunft gekennzeichnet und nie als Tatsache über die Kundschaft verwendet? (3) „95 %“ nur mit Zusatz und nicht als Kennzahl auf einer Hauptfolie? Keine Zitate der unsicheren Stellen, keine längeren wörtlichen Passagen? (4) Wurden bestehende Belege, Statusangaben (✔ ✎ ~ H, D/A) oder Quellennummern beschädigt oder hochgestuft? (5) Wurden verbotene Dateien oder Folien geändert (dossier-buendel-b.md, ki-nachweis/*, Folien 06–09b, 11 sichtbar)? (6) Widersprechen sich Ausarbeitungen, Folienentwürfe und index.html nach den Änderungen?` },
  { key: 'darstellung', prompt: `Prüfer DARSTELLUNG UND KONSISTENZ (adversarial). Im Ordner fallstudie-1-brand-persona/praesentation: PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core node werkzeuge/pruefen.mjs index.html --ausgabe _test/d14-pruef --schritte --optional, dazu --thema bento, --thema keynote und --modus dunkel (eigene Ausgabeordner unter _test/). Sieh dir die Screenshots von f02, f03, f04, f05, f10, b1, b3, b7 selbst an: Überläufe, Abstände zur Fußzeile (mind. ca. 20 px), Wortbudget, Lesbarkeit, Kennzeichnungen. Prüfe außerdem die Markdown-Dateien auf kaputte Tabellen oder Listen (git diff). Schreibe nur unter praesentation/_test/.` },
]

phase('Prüfen')
const pruefungen = (await parallel(PRUEFER.map(p => () =>
  agent(`${GEMEINSAM}\nNur prüfen, nichts außerhalb von praesentation/_test/ ändern.\nBericht der Umsetzung (JSON):\n${BERICHT}\n\n${p.prompt}\nJeder Befund mit Beleg und konkretem Vorschlag. Erfinde keine Befunde; was stimmt, nenne im Gesamturteil.`,
    { label: `pruefen:${p.key}`, phase: 'Prüfen', schema: BEFUNDE })))).filter(Boolean)
const alle = pruefungen.flatMap(p => p.befunde)
log(`${alle.length} Befunde: ${alle.filter(b => b.schwere === 'hoch').length} hoch, ${alle.filter(b => b.schwere === 'mittel').length} mittel`)

phase('Nacharbeit')
const nacharbeit = await agent(`${GEMEINSAM}
Auftrag NACHARBEIT: Arbeite die Befunde der Prüfer ein (alle hohen und mittleren; niedrige, wenn sie klar und klein sind). Du darfst dafür die Dateien ändern, die die Umsetzung geändert hat. Danach:
1. Im Ordner praesentation: pruefen.mjs mit --schritte --optional laufen lassen (0 Fehler nötig).
2. Exporte erneuern, wie in praesentation/AUTOREN.md §15 „Exporte erzeugen“ beschrieben (PDF ohne optionale Folie 01b, Folienbilder 1920 × 1080, Übersicht mit werkzeuge/uebersicht.mjs --stand 19.10.2026). Seitenzahl des PDF prüfen.
3. praesentation/AUTOREN.md §15 (Tabelle) und LIESMICH.md (Checkliste) knapp um diesen Schritt ergänzen (Gründerbefragung eingebaut, was offen ist).
Melde, was du umgesetzt hast, was nicht (mit Grund) und das Ergebnis von pruefen.mjs und Export.
Befunde (JSON):
${JSON.stringify(pruefungen, null, 1)}`, { label: 'nacharbeit', phase: 'Nacharbeit', schema: {
  type: 'object',
  properties: {
    umgesetzt: { type: 'array', items: { type: 'string' } },
    nicht_umgesetzt: { type: 'array', items: { type: 'string' } },
    pruefung: { type: 'string' },
    exporte: { type: 'string' },
    fuer_yannick: { type: 'array', items: { type: 'string' } },
  },
  required: ['umgesetzt', 'nicht_umgesetzt', 'pruefung', 'exporte', 'fuer_yannick'],
} })

return { ausarbeitungen, praesentation, pruefungen, nacharbeit }
