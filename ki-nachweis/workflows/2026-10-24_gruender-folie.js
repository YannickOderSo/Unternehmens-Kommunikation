export const meta = {
  name: 'gruender-folie',
  description: 'Gründerbefragung präsenter: eigene Folie „Der Gründer über HOLY“ (Innensicht) vor Folie 06 und Gründer im Abgleich auf Folie 10; Einbindung, Zeitplan, Doku; adversariale Prüfung',
  phases: [
    { title: 'Bauen', detail: 'neue Folie, Folie 10, Einbindung ins Deck, Sprechzeit, Doku' },
    { title: 'Prüfen', detail: 'Treue zu den Gründeraussagen und Regeln; Darstellung und Technik' },
  ],
}

const P = '/home/user/Unternehmens-Kommunikation/fallstudie-1-brand-persona'

const GEMEINSAM = `
Kontext: Studentische Gruppenarbeit (Fallstudie 1, Marke HOLY, Vortrag Mo 26.10.2026, 15 Minuten). Web-Präsentation ${P}/praesentation (index.html mit Kästen „FOLIE xx“, Kommentarblöcken, Notizen <aside class="notizen">, Daten-JSON; js/folien/*.js, css/folien/*.css; Prüfwerkzeug: PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core node werkzeuge/pruefen.mjs index.html --ausgabe _test/<x> --schritte [--optional] [--nur f05b] [--thema bento|keynote] [--modus dunkel] [--druck pdf]; referent-test.mjs; Exporte AUTOREN.md §15). Lies zuerst AUTOREN.md (Aufbau, neue Folie anlegen, Sollzeiten, Prüfwerkzeug), LIESMICH.md (Folienplan, Zeitplan, §12), die Kästen der Folien 05, 06 und 10.
Quelle der Gründeraussagen NUR: ${P}/gruenderbefragung.md (Abschnitt 1, 2.1, 2.2, 2.3 Regeln, 3 Antworten je Frage, 4). Das Transkript liegt im Gruppenordner (Drive) und wird NICHT geöffnet. Das KI-simulierte Fremdbild: ${P}/buendel-b/ (README, auswertung/*.csv) und die Folien 06, 07, 08b, 10 (Abgleich-Schritt 9).

AUFTRAG (Yannick, 24.10.2026; Lukas wünscht, dass das Gründer-Interview „viel präsenter“ ist). Entscheidungen Yannick (wörtlich): „Eigene Folie + Folie 10 (Empfohlen)“ und „Ja, als Innensicht vs. Außensicht (Empfohlen)“. Das heißt:
1. NEUE FOLIE „Der Gründer über HOLY“ (Innensicht, Selbstbild aus erster Hand) zwischen Folie 05 und 06 – zu Beginn von Lukas' Teil (Lukas hat die Befragung geführt und spricht die Folie); ID und Nummer passend zum Deck (z. B. f05b/„05b“ – prüfe, wie IDs, Nummern, Bündel, data-feld und Sollzeit im Deck funktionieren, und wähle die stimmigste Lösung; Begründung im Bericht). Sollzeit ca. 35 s. Inhalt (Kernaussage als Titel, ≤ ca. 40 Wörter sichtbar): Was der Gründer über HOLY sagt – z. B. HOLY als bessere Alternative zu normalen Softdrinks, „geiler Geschmack mit gutem Gewissen“ (Frage 1); Zielgruppe 18–55, Männer und Frauen (Frage 2); Wettbewerb: die großen Softdrinkmarken (Frage 3, OHNE „95 %“); Kaufgründe in seiner Rangfolge: Geschmack („mit Abstand“), wenig Zucker und Kalorien, Preis (Frage 5); emotionaler Nutzen: Individualität (Selbermischen) und Zusammengehörigkeit (HOLY Squad) (Frage 8/11); Ziel „meistgeliebte Softdrink-Brand“ (Frage 14). Auswahl und Verdichtung so, dass die Folie lesbar bleibt. Deutlich gekennzeichnet: „Innensicht · Selbstauskunft (n = 1)“; ein Verweis „→ Außensicht (KI-simuliert): Folien 06–08b, Abgleich Folie 10“. Fußzeile mit Quelle „Horsch, M. (2026): Gründerbefragung, zwei Sprachnachrichten an L. Welker, 18.10.2026 – Selbstauskunft (Horsch 2026, GB)“. Kein Foto des Gründers, keine Logos außer den vorhandenen. Sprechtext für Lukas (ca. 35 s) und Rückfragen in den Notizen („Ist das nicht nur Werbung?“ – Innensicht, deckt sich mit Website/Press Kit; neu sind Rangfolge der Kaufgründe, Wettbewerb aus Firmensicht, emotionale Deutung; „Wie wurde befragt?“ – Fragenkatalog, zwei Sprachnachrichten, keine Rückfragen möglich, KI-Abschrift mit Einwilligung; „Und die 95 %?“ – nur hier in den Notizen mit „laut Gründer, Datengrundlage nicht offengelegt“). Gestaltung im Stil des Decks (Editorial, Bento, Keynote, hell/dunkel), mit vorhandenen Bausteinen/Icons; eigenes CSS nur wenn nötig (css/folien/…). Eintrag im Folienmenü/Sprunglisten (Folie 12, Übersicht), damit Navigation und Zählung stimmen.
2. FOLIE 10, Abgleich-Schritt 9: Spaltenkopf „Selbstbild · Website & Gründer“ (o. ä.), und wo der Gründer ein Selbstbild-Paar trägt, das sichtbar machen (z. B. Positionierung „Genuss mit gutem Gewissen“ – laut Website und Gründer; ggf. eine Gründer-Aussage als Selbstbild in einem Paar, etwa Kaufgrund Geschmack „mit Abstand“ ↔ KI-simuliert: Geschmack kein Unterscheidungsmerkmal / Genuss ungeprüft – nur wenn die Daten in buendel-b/auswertung das tragen). Sprechtext Schritt 9 kurz halten (ein Halbsatz „sagt auch der Gründer“ genügt). Folie 10 bleibt sonst unverändert.
3. ZEIT: Die neue Folie kostet ca. 35 s. Yannick hat zugestimmt, dafür Sprechtexte auf Folie 01 und 02 zu kürzen, damit der Vortrag bei ca. 15 Minuten bleibt. Zähle die gesprochenen Wörter (1,9 Wörter/s, Regel wie buendel-b/auswertung/pruefe_synthese.py) und kürze 01/02 gezielt (Moderation des Rätsels bzw. Wiederholungen), ohne Inhalt zu verlieren; Sollzeiten (data-zeit) und Zeitplan in LIESMICH/AUTOREN nachziehen; Summe der Hauptfolien berichten.
4. EINBINDUNG und DOKU: Folie 02 Methodenkarten/Notizen (Gründerbefragung als Quelle des Selbstbilds), B1 (Methodik), B2 falls nötig, B7 (Quelle steht schon), LIESMICH (Folienplan, Zeitplan, §12 Checkliste: Lukas spricht 05b), AUTOREN (neuer Abschnitt mit Datum), folienentwuerfe.md (neuer Eintrag), fragerunde.md (Fragen zum Gründer), gruenderbefragung.md §5 (Umsetzung), QUELLEN.md falls nötig. Exportzahlen (PDF dann 23 Seiten statt 22, Folienbilder 24) in AUTOREN §15 und LIESMICH anpassen, falls Werkzeuge die Zahl erwarten.
REGELN (gruenderbefragung.md 2.3, verbindlich): Jede Aussage als Selbstauskunft kennzeichnen („laut Mathias Horsch (Gründer, Befragung 10/2026)“ bzw. „Horsch 2026 (GB)“), nie als Tatsache über die Kundschaft. Paraphrase vor Zitat; kurze wörtliche Zitate (höchstens ein Satz) nur wo der Wortlaut sicher ist. NICHT zitieren: „No Bullshit“/„Zero Bullshit“, die Stelle zu „Put the HOLY Squad first“ (125–131 s), „mehr trinken“. „95 %“ nur in Notizen/Backup mit Zusatz, nie sichtbar auf einer Hauptfolie. Keine Namen von KI-Modellen in Dateien. Deutsch, Stil und Kommentardichte der Dateien; Änderungen in Kästen mit Datum 24.10.2026. Kein git commit; ki-nachweis/ nicht ändern; Testausgaben nur unter praesentation/_test/, Hilfsskripte im Scratchpad /tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad/d27/.
`

const BERICHT = {
  type: 'object',
  properties: {
    folie: { type: 'string', description: 'ID, Nummer, Titel, sichtbarer Inhalt, Sollzeit, Begründung der Platzierung' },
    dateien: { type: 'array', items: { type: 'object', properties: { datei: { type: 'string' }, was: { type: 'string' } }, required: ['datei', 'was'] } },
    sprechzeit: { type: 'string', description: 'Wörter/Sekunden je Hauptfolie vorher/nachher, Summe' },
    abweichungen: { type: 'array', items: { type: 'string' } },
    getestet: { type: 'string' },
    bilder: { type: 'array', items: { type: 'string' }, description: 'absolute Pfade: neue Folie (Endzustand, hell und dunkel), Folie 10 Schritt 9' },
  },
  required: ['folie', 'dateien', 'sprechzeit', 'abweichungen', 'getestet', 'bilder'],
}

phase('Bauen')
const bau = await agent(GEMEINSAM + `
Auftrag BAUEN: Punkte 1–4 umsetzen. Iterativ prüfen: pruefen.mjs --nur <neue ID>,f10,f02,f12 --schritte in editorial, bento, keynote, dunkel; Screenshots SELBST ansehen (Lesbarkeit, Überlauf, Wortbudget, Kennzeichnung); danach pruefen.mjs index.html --schritte --optional (0 Fehler), referent-test.mjs, Druck-PDF-Probe (Seitenzahl). Exporte NICHT neu erzeugen (macht der Hauptagent).`, { label: 'bau', phase: 'Bauen', schema: BERICHT })

const BEF = {
  type: 'object',
  properties: {
    pruefer: { type: 'string' },
    befunde: { type: 'array', items: { type: 'object', properties: { schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] }, datei: { type: 'string' }, stelle: { type: 'string' }, problem: { type: 'string' }, beleg: { type: 'string' }, vorschlag: { type: 'string' } }, required: ['schwere', 'datei', 'stelle', 'problem', 'beleg', 'vorschlag'] } },
  },
  required: ['pruefer', 'befunde'],
}
phase('Prüfen')
const pruefungen = (await parallel([
  () => agent(GEMEINSAM + `
Prüfer TREUE UND REGELN (adversarial, nichts ändern): Jede Gründeraussage auf der neuen Folie, auf Folie 10 und in Notizen/Doku gegen gruenderbefragung.md §3 prüfen (richtig zugeordnet, nicht zugespitzt, Rangfolge korrekt, „stellvertretend für Kund:innen“ bei Fragen 6–11 beachtet?). Regeln 2.3 eingehalten (Kennzeichnung, keine verbotenen Zitate, 95 % nur in Notizen mit Zusatz)? Ist die Gegenüberstellung Innensicht ↔ KI-simulierte Außensicht fair und mit den Zahlen aus buendel-b/auswertung belegt? Wurden beim Kürzen von 01/02 Inhalte verfälscht? Doku konsistent (Folienplan, Zeitplan, Exportzahlen)?
Bericht des Baus:
` + JSON.stringify(bau, null, 1), { label: 'pruefen:treue', phase: 'Prüfen', schema: BEF }),
  () => agent(GEMEINSAM + `
Prüfer DARSTELLUNG UND TECHNIK (adversarial, nur Testausgaben): pruefen.mjs index.html --schritte --optional in editorial, bento, keynote, dunkel; neue Folie und Folie 10 Schritt 9 SELBST ansehen, auch verkleinert 960 × 540; Navigation (Nummern, Sprünge von Folie 12, Übersicht O, Referentenansicht: referent-test.mjs), Druck-PDF (Seitenzahl, neue Folie enthalten), uebersicht.mjs-Probe nach _test/. Wortbudget, Kontrast, Überlauf, Konsolenwarnungen.
Bericht des Baus:
` + JSON.stringify(bau, null, 1), { label: 'pruefen:technik', phase: 'Prüfen', schema: BEF }),
])).filter(Boolean)

return { bau, pruefungen }
