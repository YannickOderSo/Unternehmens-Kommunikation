export const meta = {
  name: 'elias-ki-einarbeiten',
  description: 'Elias’ Prompt-Sammlung (KI-Nutzung) in Fragerunde, Ausarbeitungen, Präsentation und Skripte einarbeiten, dann prüfen',
  phases: [
    { title: 'Umsetzen', detail: '4 Agenten, getrennte Dateigruppen' },
    { title: 'Prüfen', detail: 'Faktentreue/Konsistenz und Technik' },
  ],
}

const SP = '/tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad'
const FS = '/home/user/Unternehmens-Kommunikation/fallstudie-1-brand-persona'
const FAKT = `${SP}/elias-ki/faktenblatt.md`

const GEMEINSAM = `Kontext: Studentische Gruppenarbeit (Fallstudie 1 zur Marke HOLY, Vortrag Di 27.10.2026). Neu seit heute (So, 25.10.2026): Elias Knauber hat eine Prompt-Sammlung geliefert, die belegt, dass er für seine Ausarbeitungen ein KI-Tool genutzt hat; Lukas Welker hat keine KI genutzt. Bisher steht in vielen Dateien, Elias' KI-Nutzung sei „offen“, seine Ausarbeitungen stammten ganz von ihm, oder P12 („Beiträge codieren“) sei eine geplante Beispielzeile.

LIES ZUERST das Faktenblatt ${FAKT} – es ist die einzige Quelle für die neuen Fakten und gibt die einheitlichen Wortlaute vor. Erfinde nichts darüber hinaus (kein Tool-Name, keine Daten, keine Prüfschritte von Elias).

Regeln: Alle Dateien auf Deutsch, Stil und Dichte der jeweiligen Datei beibehalten. Datierte Aufzeichnungen (KI-Nachweis, Workflow-Skripte, alte Prüfberichte, Nachträge mit früherem Datum) NICHT umschreiben – stattdessen bei Bedarf einen kurzen Hinweis „seit So, 25.10.2026: …“ ergänzen. Keine Modellnamen in Dateien. Nicht unter /root/.claude/uploads lesen. ki-nachweis/ki-nachweis.md NICHT ändern (macht Claude). Nichts committen oder pushen. Nur die dir zugewiesenen Dateien ändern. Gib am Ende jede Änderung mit Datei, Stelle und kurzem Vorher/Nachher an und nenne Stellen, die du bewusst nicht geändert hast.`

const AENDERUNGEN = {
  type: 'object',
  properties: {
    aenderungen: { type: 'array', items: { type: 'object', properties: {
      datei: { type: 'string' }, stelle: { type: 'string' }, vorher: { type: 'string' }, nachher: { type: 'string' } },
      required: ['datei', 'stelle', 'vorher', 'nachher'] } },
    nicht_geaendert: { type: 'array', items: { type: 'string' } },
    tests: { type: 'string', description: 'ausgeführte Prüfungen mit Ergebnis, sonst leer' },
    offene_punkte: { type: 'array', items: { type: 'string' } },
  },
  required: ['aenderungen', 'nicht_geaendert', 'tests', 'offene_punkte'],
}

const BEFUNDE = {
  type: 'object',
  properties: {
    befunde: { type: 'array', items: { type: 'object', properties: {
      id: { type: 'string' }, schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
      datei: { type: 'string' }, stelle: { type: 'string' }, problem: { type: 'string' },
      beleg: { type: 'string' }, korrektur: { type: 'string' } },
      required: ['id', 'schwere', 'datei', 'stelle', 'problem', 'beleg', 'korrektur'] } },
    geprueft: { type: 'string' },
  },
  required: ['befunde', 'geprueft'],
}

const AUFTRAEGE = [
  {
    key: 'fragerunde',
    prompt: `${GEMEINSAM}

Deine Dateien: ${FS}/fragerunde.md (nur diese).
Aufgabe: F37 neu fassen (Antwort wörtlich nach Faktenblatt, Beleg: KI-Nachweis 175 und Abschnitt 3 E-EK-01 bis 03, Fallstricke nach Faktenblatt „Nicht behaupten“ und „Offen“, Belastbar TEILWEISE). Alle anderen Stellen nachziehen, die Elias' KI-Nutzung als offen behandeln oder auf F37 als offen verweisen (u. a. Kopf/Stand-Notizen, F17 „Ob für die Analyse KI genutzt wurde“, F23 – was KI gemacht hat, F30 Zirkel, Antwort mit „[ob Elias dafür KI genutzt hat, vorher klären, siehe F37 …]“, Liste „Ohne belastbare Antwort“, Aufgabentabelle F37/F23 „Elias sagt, ob …; danach P12 in B2 …“ → erledigt bzw. Rest offen: Tool, Prüfung, Facebook-Teil, Personen in Aufnahmen). Wo die Fragerunde nach Lukas' KI-Nutzung fragt, „keine KI (laut Yannick, 25.10.2026)“ ergänzen. Oben einen kurzen Stand-Hinweis „Stand So, 25.10.2026“ im Stil der vorhandenen Nachträge ergänzen.`,
  },
  {
    key: 'doku',
    prompt: `${GEMEINSAM}

Deine Dateien: ${FS}/analogien.md, ${FS}/kommunikationsanalyse.md, ${FS}/prompts.md, ${FS}/praesentation/QUELLEN.md, ${FS}/praesentation/LIESMICH.md, ${FS}/folienentwuerfe.md (nur diese).
Aufgaben: (1) Kopf und Abschnitt „So ist die Ausarbeitung zu lesen“ von analogien.md und kommunikationsanalyse.md: KI-Nutzung nach Faktenblatt ergänzen (E-EK-03 bzw. E-EK-01, E-EK-02 als Leitfaden), Sätze wie „Inhalte, Wertungen und Belege stammen von ihm“ / „Befunde, Wertungen und Zahlen stammen von ihm“ nach Faktenblatt präzisieren; in kommunikationsanalyse.md den Hinweis, dass Facebook im Prompt nicht vorkommt; offene Fragen an Elias (Tool, Prüfung, Facebook-Teil, Personen in den hochgeladenen Aufnahmen – HSKL-KI-Richtlinie Nr. 6) in deren Abschnitt „offene Fragen“ ergänzen. (2) prompts.md: P11/P12 – P12 nicht genutzt; Elias' tatsächliche Prompts stehen im KI-Nachweis (E-EK-01 bis 03), nicht als P-Nummer. (3) QUELLEN.md: wo Elias' Ausarbeitungen als Quelle stehen, „KI-gestützt (Prompt-Sammlung, KI-Nachweis E-EK-01 bis 03)“ ergänzen. (4) LIESMICH.md: Checklistenpunkte „B2 – P11/P12 nach Elias' Antwort“, „KI-Listen von Lukas und Elias einsammeln“ und Verweise auf F37 als erledigt markieren bzw. auf Restfragen (Tool, Prüfung, Facebook-Teil, Personen) reduzieren; im Text Stellen anpassen, die Elias' KI-Nutzung als offen nennen; Lukas: keine KI. (5) folienentwuerfe.md: Stellen zu B2 (P12-Zeile) und zu den Fußzeilen 08, 09, 09b, B6 an die einheitlichen Wortlaute des Faktenblatts angleichen. Präsentation (index.html) ändert ein anderer Agent – dort nichts ändern.`,
  },
  {
    key: 'folien',
    prompt: `${GEMEINSAM}

Deine Dateien: ${FS}/praesentation/index.html (nur diese; JS/CSS nur, wenn ein Test sonst scheitert – dann begründen).
Aufgaben: (1) Backup B2 (section id="b2"): Beispielzeile P12 im JSON-Block durch die B2-Zeile aus dem Faktenblatt ersetzen; Kommentar über der Pille, „hinweis“-Feld und Notiz-Absatz „Hinweise“ anpassen (P12 entfällt, E-EK-01 bis 03 belegt, Beispiel nur noch P13, P14). Den gesprochenen Kernsatz (data-schritt) NICHT umformulieren. (2) Fußzeilen (p.quelle) der Folien f08, f09, f09b und b6 genau nach den Wortlauten im Faktenblatt ergänzen – nur das Wort „KI-gestützt“ einfügen. (3) Kommentarkästen und Notizen (nicht data-schritt-Sprechtext), die Elias' KI-Nutzung als offen nennen (z. B. Kasten über f09 „ob Elias KI genutzt hat, ist offen“, Kasten über b1/b2 „OFFEN (Elias, Yannick): Hat Elias … KI genutzt?“, Rückfrage-Notizen zu F37 auf 08/09), nach Faktenblatt nachziehen. (4) B7 (Literatur/Daten: „Knauber, E. (2026): Analogien; Kommunikationsanalyse“) und B8 (Eintrag „eigen“) um „KI-gestützt“ ergänzen, wenn es ohne Überlauf passt. (5) Folie 02: Methodenkarten „Analogiemethoden“ und „Kommunikationsanalyse“ prüfen – haben andere KI-gestützte Methoden dort eine KI-Kennzeichnung (Attribut/Text)? Wenn ja, für diese beiden gleich behandeln; wenn nein, nichts ändern und begründen.
Danach prüfen (im Ordner ${FS}/praesentation): PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core node werkzeuge/pruefen.mjs index.html --ausgabe _test/d32 --schritte --optional (lies vorher den Kopf von werkzeuge/pruefen.mjs für Optionen wie --nur, --thema bento|keynote, --modus dunkel) – mindestens Editorial, Bento, Keynote und dunkel für die geänderten Folien; dazu node werkzeuge/referent-test.mjs (Aufruf siehe Kopf der Datei). Sieh dir die Bildschirmfotos von b2, f08, f09, f09b, b6 an (Read auf die PNG-Dateien): kein Überlauf, Tabelle B2 nicht breiter als die Folie. Exporte (export/) NICHT neu erzeugen.`,
  },
  {
    key: 'skripte',
    prompt: `${GEMEINSAM}

Deine Dateien: das Vortragsskript in Teilen ${SP}/skript/teil-0-grundlagen.md bis teil-6.md und der Generator des Redeskripts ${SP}/redeskript/bauen_redeskript.py (nur diese; NICHT bauen.py ausführen, nicht ins Repository schreiben).
Aufgaben: In allen Teilen die Stellen nachziehen, die Elias' KI-Nutzung als offen behandeln (z. B. Antwort F37 auf Folie 08 „Ob und wofür Elias selbst KI genutzt hat, sagt nur Elias“, Backup B2 „Hat Elias … KI genutzt? – Offen“, B2-Tabellen/Fallstricke zu P12, B6 „Habt ihr dafür KI genutzt? (F37) – Offen“, B7/B8, Folie 09/09b Hintergrund „Wie Elias vorging“, Grundlagen/Glossar, zehn wahrscheinlichste Fragen), F37-Antwort nach Faktenblatt; Beschreibungen der Fußzeilen 08, 09, 09b, B6 und der B2-Zeile an die Wortlaute im Faktenblatt angleichen; Lukas: keine KI. In bauen_redeskript.py nur BACKUP_ACHTUNG['b2'] anpassen („P12–P14 sind Beispielzeilen“ → P13, P14; Zusatz: Elias' KI-Nutzung belegt, E-EK-01 bis 03) und, falls ein ⚠ zu Folie 08/09 Elias' KI-Nutzung als offen nennt, diesen. Den Wortlaut der Sprechtexte (Abschnitte „Sprechtext (wörtlich aus den Notizen)“) nicht ändern.`,
  },
]

phase('Umsetzen')
const umgesetzt = await parallel(AUFTRAEGE.map(a => () =>
  agent(a.prompt, { label: `umsetzen:${a.key}`, phase: 'Umsetzen', schema: AENDERUNGEN }).then(r => ({ key: a.key, ...(r || {}) }))))

phase('Prüfen')
const zusammenfassung = JSON.stringify(umgesetzt.filter(Boolean).map(u => ({ key: u.key, aenderungen: (u.aenderungen || []).length, nicht_geaendert: u.nicht_geaendert, offene_punkte: u.offene_punkte, tests: u.tests })), null, 1)
const PRUEFER = [
  { key: 'fakten', prompt: `${GEMEINSAM}

Du bist PRÜFER (nur lesen, nichts ändern). Vier Agenten haben eben Dateien angepasst (Übersicht unten). Prüfe adversarial gegen das Faktenblatt: (a) Behauptet irgendwo eine Datei mehr als das Faktenblatt (Tool-Name, Daten, dass die KI nur formuliert habe, dass Tiere/Comedian von der KI stammen, „ganz ohne KI“)? (b) Volltextsuche im Ordner ${FS} (ohne _test/, _entwuerfe/, recherche/, export/) und in ${SP}/skript/teil-*.md sowie ${SP}/redeskript/bauen_redeskript.py nach Resten: „ob Elias“, „Elias' eigene KI“, „KI genutzt hat, ist offen“, „OFFEN (Elias“, „P12“ als Beispiel, „stammen von ihm“, „Elias selbst“ im Zusammenhang mit KI, „F37“ mit „NEIN“. Datierte Aufzeichnungen (Nachträge mit früherem Datum, Prüfberichte, KI-Nachweis) sind kein Befund. (c) Sind die einheitlichen Wortlaute überall gleich (Fußzeilen, B2-Zeile, F37-Antwort)? (d) Widersprüche zwischen fragerunde.md, index.html-Notizen, Ausarbeitungen und Skripten?

Übersicht der Änderungen: ${zusammenfassung}` },
  { key: 'technik', prompt: `${GEMEINSAM}

Du bist PRÜFER (nur lesen und Tests ausführen, nichts ändern). Prüfe ${FS}/praesentation/index.html technisch nach den Änderungen: JSON-Block in B2 gültig (z. B. mit node/python parsen), B2-Tabelle passt auf die Folie, Fußzeilen f08, f09, f09b, b6 ohne Überlauf in Editorial, Bento, Keynote und dunkel; Sprechtexte (p[data-schritt]) unverändert gegenüber git HEAD (git -C /home/user/Unternehmens-Kommunikation diff -- fallstudie-1-brand-persona/praesentation/index.html lesen). Führe im Ordner ${FS}/praesentation aus: PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core node werkzeuge/pruefen.mjs index.html --ausgabe _test/d32-pruefung --schritte --optional (und mit --thema bento, --thema keynote, --modus dunkel; Optionen im Kopf der Datei), node werkzeuge/referent-test.mjs und node werkzeuge/live-abstimmung-test.mjs (ohne --lasttest; Aufruf siehe Dateikopf; KEINE Anfragen an die echte Web-App). Sieh dir die Bildschirmfotos b2 und f09 an. Melde nur echte Probleme.

Übersicht der Änderungen: ${zusammenfassung}` },
]
const pruefungen = await parallel(PRUEFER.map(p => () =>
  agent(p.prompt, { label: `pruefen:${p.key}`, phase: 'Prüfen', schema: BEFUNDE }).then(r => ({ key: p.key, ...(r || {}) }))))

return { umgesetzt: umgesetzt.filter(Boolean), pruefungen: pruefungen.filter(Boolean) }
