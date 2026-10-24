export const meta = {
  name: 'vortragsskript',
  description: 'Vortragsskript mit Hintergrundwissen zu jeder Folie schreiben (7 Autoren) und adversarial pruefen (2 Pruefer)',
  phases: [
    { title: 'Schreiben', detail: '7 Autoren, je ein Teil des Skripts' },
    { title: 'Pruefen', detail: '2 Pruefer: Quellentreue/Regeln, Vollstaendigkeit/Folientreue' },
  ],
}

const SP = '/tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad/skript'
const FS = '/home/user/Unternehmens-Kommunikation/fallstudie-1-brand-persona'
const PR = FS + '/praesentation'

const KONTEXT = `KONTEXT
Studentische Gruppenarbeit im Modul Unternehmenskommunikation (Prof. Dr. Daniel Stenger, Hochschule Kaiserslautern). Gruppe: Yannick Heisler (Buendel A: Folien 01-05, Synthese Folie 10, KI-Nachweis), Lukas Welker (Buendel B; spricht Folie 05b; liefert seit 22.10. kein Material mehr, deshalb sind 06-08b eine KI-simulierte Befragung; wer 06-08b vortraegt, ist offen), Elias Knauber (Buendel C: Folien 09-11, traegt auch Folie 10 vor). Fallstudie 1 "Brand Persona & Markenidentitaet", Marke HOLY (zuckerfreie Softdrinks zum Selbermixen, HOLY Softdrinks GmbH). Vortrag Di, 27.10.2026, 15 Minuten (Sollzeit der Hauptfolien 14:05) plus Fragerunde.

AUFTRAG DES NUTZERS (woertlich): "Schreibe ein Skript und zu jeder Folie und ausgeschriebene Informationen damit jeder zu jeder folie Fachmann ist"
Ziel: Jedes Gruppenmitglied soll JEDE Folie halten und Rueckfragen dazu souveraen beantworten koennen - auch die Folien der anderen. Das Skript wird von Studierenden gelesen, die die Methode vielleicht nicht kennen: klar, konkret, in einfachem Deutsch erklaeren, Fachbegriffe beim ersten Auftreten erklaeren, keine Floskeln.

MASSGEBLICHE QUELLEN (nur lesen!)
- Die Web-Praesentation: ${PR}/index.html. Jede Folie ist eine <section class="folie" id="fXX"> (Backup: id="b1"..."b8"). Darueber steht jeweils ein Kommentar-Kasten "FOLIE XX" (Stand, Entscheidungen, offene Punkte) und eine Anleitung; in der Section stehen der sichtbare Text, ggf. ein Daten-JSON (<script type="application/json">) und in <aside class="notizen"> der SPRECHTEXT (Absaetze <p data-schritt="n"> = gesprochen je Klick) sowie Stand, Belege und Rueckfragen. Platzhalter: <span data-marke></span> = "HOLY", <span data-gruppe></span> = "Yannick Heisler, Elias Knauber, Lukas Welker". Auf Folie 01 und 02 ist nur der Wortlaut in Anfuehrungszeichen „…“ gesprochen, der Rest ist Regie.
- Folienbilder im Endzustand zum Ansehen: ${PR}/export/folien/<id>.png (z. B. f05b.png); einzelne Klickschritte gibt es unter ${PR}/_test/d29n-gesamt-editorial/<id>_s<n>.png.
- Ausarbeitungen: ${FS}/methoden.md (Methoden und Vorlagen), ${FS}/abgleich-vorlesung.md (Abgleich mit den Vorlesungsfolien, Seitenangaben "Stenger, S. …"), ${FS}/fragerunde.md (vorbereitete Rueckfragen F01-F40 mit Antworten, Belegen, Fallstricken), ${FS}/folienentwuerfe.md, ${FS}/markenkompetenz.md, ${FS}/persona-steckbrief.md, ${FS}/persona-daten.md, ${FS}/limbic-map.md, ${FS}/gruenderbefragung.md, ${FS}/analogien.md, ${FS}/kommunikationsanalyse.md, ${FS}/buendel-b/ (README.md, simulation-protokoll.md, repertory-grid.md, laddering.md, analogien-befragung.md, folienvorschlag.md, auswertung/*.csv und hvm.md), ${FS}/recherche/holy-recherche.md (Recherche-Dossier mit Faktenstatus), ${PR}/QUELLEN.md, ${PR}/LIESMICH.md (Abschnitt 2 Tasten, 3 Zeitplan, 4 Aufbau, 6 Live-Abstimmung, 11 Plan B).
- NICHT oeffnen: Dateien unter /root/.claude/, PDFs von Statista (study_id32255), das Transkript der Gruenderbefragung (liegt nicht im Repository). Nichts im Repository aendern.

HARTE REGELN FUER DEN INHALT
1. Nur Inhalte aus diesen Dateien. Jede Zahl und jede Tatsache ueber HOLY mit Quelle (z. B. "Dossier ✔ [5]", "repertory-grid-ergebnis.csv, K03", "Stenger, S. 87", "Horsch 2026 (GB)") und mit dem Faktenstatus wie in den Quellen (✔ gesichert, ✎ korrigiert, ~ unsicher, H Hypothese der Gruppe). Erklaerungen aus allgemeinem Fachwissen (z. B. was ein Repertory Grid ist) als "(Standardliteratur/Modellwissen – mit den Vorlesungsfolien abgleichen)" kennzeichnen, ausser die Vorlesung oder methoden.md belegt es (dann Seite nennen).
2. Gruenderbefragung (Mathias Horsch, Mitgruender und Geschaeftsfuehrer): immer als Selbstauskunft kennzeichnen ("laut Gruender", "Horsch 2026 (GB)"), nie als Tatsache ueber die Kundschaft; Paraphrase vor Zitat, Zitate hoechstens ein Satz und nur aus gruenderbefragung.md Abschnitt 3; NICHT zitieren: "No/Zero Bullshit" als Gruenderzitat, die Stelle "Put the HOLY Squad first"-Erlaeuterung, "mehr trinken". "95 %" nur so: "laut Gruender, Datengrundlage nicht offengelegt" und nur als Antwort auf eine Rueckfrage.
3. KI-simulierte Befragung (Folien 06, 07, 08b, B4, B5, Tierfrage auf 08): immer "KI-simuliert, 8 fiktive Befragte, keine echten Interviews, Hypothesen" - nie als Kundenstimme. Steuerrad auf Folie 10 = Selbstbild (Identitaet), die Simulation = Fremdbild (Image) im Abgleich (Stenger, S. 60, 87).
4. Keine Namen von KI-Modellen oder -Versionen schreiben ("KI", "KI-gestuetzt", "Claude Code" als Werkzeugname ist erlaubt, wie in den Quellen).
5. Keine neuen Behauptungen erfinden. Wenn etwas in den Quellen offen ist (z. B. Sprecher von 06-08b, Versanddatum der Sprachnachrichten), so benennen.

VORLAGE JE FOLIE (Markdown, genau diese Unterueberschriften, H3 fuer die Folie, H4 fuer die Teile)
### Folie NN – <Kernaussage = sichtbarer Folientitel>
Kopfzeile in einer Zeile: **Spricht:** … · **Sollzeit:** … · **Klicks auf der Folie:** … · **Feld im Steuerrad:** …
#### Worum es geht
2-4 Saetze: Rolle der Folie im roten Faden (Leitfrage "Wofuer steht HOLY – und passt der Auftritt dazu?"), Kernaussage.
#### Was auf der Folie zu sehen ist
Je Klickschritt (Schritt 0, 1, …) knapp, was erscheint; sichtbare Zahlen und Woerter genau wie auf der Folie.
#### Sprechtext (woertlich aus den Notizen)
Als Zitatblock, je Schritt mit **[Schritt n]** markiert, Regieanweisungen in eckigen Klammern kursiv. Exakt der Wortlaut aus index.html (Platzhalter ersetzen), nichts umformulieren.
#### Hintergrund – damit du Fachmann bist
Das Herzstueck: ausfuehrlich, aber auf den Punkt (ca. 300-700 Woerter je Hauptfolie): Was ist das Modell/die Methode (Definition, Herkunft, Literatur wie in methoden.md/QUELLEN.md, Bezug zur Vorlesung mit Seitenzahl aus abgleich-vorlesung.md), wie genau sind WIR vorgegangen (Daten, Schritte, Werkzeuge, KI-Einsatz und wie geprueft), wie liest man die Grafik, was bedeuten die Ergebnisse, wo sind die Grenzen. Fachbegriffe erklaeren.
#### Zahlen und Fakten mit Quelle
Tabelle: Angabe | Wert | Quelle | Status.
#### Wahrscheinliche Rueckfragen – und gute Antworten
5-8 Fragen (aus den Notizen der Folie und fragerunde.md, F-Nummer nennen): **Frage** – Antwort in 1-3 Saetzen, Kern zuerst; ggf. "→ zeigen: Backup Bx / Folie yy".
#### Fallstricke – das nicht sagen
Stichpunkte (aus Notizen, Kaesten, fragerunde.md "Fallstricke").
#### Uebergang und Bedienung
Letzter Satz → naechste Folie; Tasten/Spruenge/Knoepfe auf der Folie (z. B. "5 b Enter", Knopf "Folie 05b →"), Besonderheiten (Live-Abstimmung, Rad als Sprungmenue).

AUSGABE
Schreibe deinen Teil als Markdown-Datei (UTF-8) an den unten genannten Pfad (Write-Tool; Ordner existiert). Keine H1/H2-Ueberschrift in deinem Teil ausser der unten vorgegebenen. Antworte danach mit dem Pfad, der Wortzahl und einer Liste offener Punkte/Unsicherheiten.`

const TEILE = [
  {
    key: 'teil-0-grundlagen', label: 'schreiben:grundlagen',
    auftrag: `DEIN TEIL: Grundlagen (Datei ${SP}/teil-0-grundlagen.md). Beginne mit "## Teil 0 – Grundlagen für alle". Inhalt (keine Folien-Vorlage, sondern diese Abschnitte als H3):
(1) "### So benutzt ihr dieses Skript" (kurz: Aufbau je Folie, Kennzeichnungen ✔ ✎ ~ H, GB, KI-simuliert).
(2) "### Der rote Faden in 60 Sekunden": Leitfrage, Vorgehen (Markensteuerrad nach Esch als Gliederung, Persona als Rahmen), Logik Selbstbild (Identitaet, Rad) vs. Fremdbild (Image, KI-simuliert, Abgleich auf Folie 10), Innensicht des Gruenders (05b), Ergebnis "stimmige Identitaet – bis auf zwei Luecken" und der Bruch ueber die Kanaele (Folie 11). Belege aus den Notizen von Folie 02, 10, 11.
(3) "### Ablauf und Rollen": Tabelle Folie | Titel | Spricht | Sollzeit | Klicks auf der Folie. Werte aus LIESMICH.md Abschnitt 3 und diesen Klickzahlen (gezaehlt 24.10.2026): 01 3, 02 7, 03 2, 04 4, 05 3, 05b 2, 06 3, 07 4, 08 3, 08b 4, 09 2, 09b 4, 10 9, 11 3, 12 0; insgesamt 67 Klicks bis Folie 12 (53 Schritte + 14 Folienwechsel). Sollzeit 14:05; gesprochen ca. 14:09; Risiko ca. 14:19 (LIESMICH 3).
(4) "### Fachbegriffe von A bis Z": Glossar mit je 2-5 Saetzen und Quelle: Markensteuerrad nach Esch (fuenf Felder: Markenkern, Markeneigenschaften, Markennutzen, Markentonalitaet, Markenbild; hard facts/soft facts), Markenkern, Positionierung, Markenidentitaet vs. Markenimage (Selbstbild/Fremdbild, Stenger S. 60, 87), Brand Persona, Kern-Persona, Limbic Map/Limbic Types (Haeusel), Repertory Grid (Kelly; Triaden, bipolare Konstrukte, Polaritaetenprofil, Relevanz/Differenzierung/Idealnaehe), Laddering/Means-End-Chain (Attribut-Konsequenz-Wert, Hierarchical Value Map, Implikationsmatrix), Analogiemethoden (Marke als Mensch/Tier), Brand Personality nach Aaker (5 Dimensionen, 15 Facetten), Kommunikationsanalyse (Kanaele, Corporate Design, Schluesselbild, Fit), KI-simulierte Befragung (8 Agenten, Kontrollgruppe, Rechnen per Skript), Gruenderbefragung (GB), Faktenstatus des Dossiers, Herausforderer (Kotler), Plan B/C. Begriffe nach Vorlesung (abgleich-vorlesung.md) verwenden und Abweichungen zur Standardliteratur nennen.
(5) "### Regeln fuer die Fragerunde": die wichtigsten Kennzeichnungs- und Formulierungsregeln (KI-simuliert, Selbstauskunft, Hypothesen, "nicht genannt heisst nicht abgelehnt", 95 %), Umgang mit Fragen, die man nicht beantworten kann; dazu die 10 wahrscheinlichsten Fragen der ganzen Praesentation mit Kurzantwort und F-Nummer (aus fragerunde.md, Abschnitt mit Wahrscheinlichkeit "hoch").
(6) "### Bedienung in Kurzform": Tasten (weiter/zurueck, Ziffern + Enter inkl. "5 b Enter", O Uebersicht, B Schwarzbild, H Hilfe, Z zurueck ins Backup, Ende), Referentenfenster, Folie 12 als Sprungmenue, Plan B (PDF, Seite 6 = 05b, 13 = Folie 10) - aus LIESMICH Abschnitt 2, 4, 11.`,
  },
  { key: 'teil-1', label: 'schreiben:01-03', auftrag: `DEIN TEIL: Folien 01, 01b (optional – kurz, nur wenn eingeschaltet), 02, 03 (Datei ${SP}/teil-1.md). Beginne mit "## Teil 1 – Einstieg, Vorgehen, Markenkern (Buendel A)". Folie 01 = Raetsel mit unscharfem Logo, Aufloesung, Titel; Folie 02 = Ausgangslage, Leitfrage und Markensteuerrad als Agenda mit Methodenkarten; Folie 03 = Markenkern (Herausforderer, Softdrinks zum Selbermixen, Zeitleiste). Wichtige Quellen: Notizen und Kaesten in index.html (f01, f01b, f02, f03), markenkompetenz.md, recherche/holy-recherche.md, abgleich-vorlesung.md, methoden.md, fragerunde.md.` },
  { key: 'teil-2', label: 'schreiben:04-05b', auftrag: `DEIN TEIL: Folien 04, 05, 05b (Datei ${SP}/teil-2.md). Beginne mit "## Teil 2 – Persona, Limbic Map, Innensicht des Gruenders". Folie 04 = Brand Persona "Marco, 28" (Kern-Persona; Statista CI 2025, Kantar TGI 2023 als externe Kategoriedaten; KI-gestuetztes, gekennzeichnetes Bild); Folie 05 = Limbic Map (Haeusel; Persona Hedonisten, Marke, Fit "passt teilweise"); Folie 05b = Gruenderbefragung als Innensicht (Selbstauskunft n = 1; spricht Lukas). Quellen: Notizen/Kaesten f04, f05, f05b, persona-steckbrief.md, persona-daten.md, limbic-map.md, gruenderbefragung.md, fragerunde.md, QUELLEN.md. Beachte besonders die Regeln zur Gruenderbefragung und zu den Statista-Daten (nur die Werte, die auf Folie/Notizen stehen; keine vollstaendigen Tabellen).` },
  { key: 'teil-3', label: 'schreiben:06-07', auftrag: `DEIN TEIL: Folien 06 und 07 (Datei ${SP}/teil-3.md). Beginne mit "## Teil 3 – Repertory Grid und Laddering (Buendel B, KI-simuliert)". Folie 06 = Repertory Grid (KI-simuliert; kein Konstrukt erfuellt alle drei Kriterien; vier Huerden; Coca-Cola Zero als staerkster Wettbewerber); Folie 07 = Laddering (staerkste Leiter ohne Zucker → kein Zuckerabsturz → konzentriert → verlaesslich sein → Verantwortung). Erklaere die Simulation genau (8 fiktive Befragte T1-T8, je ein eigener Agent, Kontrollgruppe ohne Persona-Text, Codierung KI-gestuetzt, Rechnen per Skript, vorab festgelegte Auswahlregel), wie man Polaritaetenprofil und HVM liest und warum das Fremdbild ist. Quellen: Notizen/Kaesten f06, f07, buendel-b/ (README, simulation-protokoll, repertory-grid.md, laddering.md, auswertung/*.csv, hvm.md), methoden.md, fragerunde.md (F12-F18, F39).` },
  { key: 'teil-4', label: 'schreiben:08-08b', auftrag: `DEIN TEIL: Folien 08 und 08b (Datei ${SP}/teil-4.md). Beginne mit "## Teil 4 – Analogien und Markentonalitaet". Folie 08 = Analogien von Elias (Papagei und Chamaeleon, kein Adler; Mensch: Impro-Comedian) als Selbstbild aus HOLYs eigener Kommunikation, dazu die Live-Abstimmung im Saal (eigene Web-App, QR-Code, 30-Minuten-Zeitfenster, Runde, Plan C) und die KI-simulierte offene Tierfrage nur im Sprechtext; Folie 08b = Markentonalitaet nach Aaker (KI-simuliert, Fremdbild "witziger Kumpel – der verkaufen will"). Erklaere die Live-Abstimmung so, dass jede Person sie bedienen kann (LIESMICH Abschnitt 6, live-abstimmung/ANLEITUNG.md). Quellen: Notizen/Kaesten f08, f08b, analogien.md, buendel-b/analogien-befragung.md, buendel-b/auswertung/aaker-*.csv und analogien-haeufigkeiten.csv, methoden.md, fragerunde.md.` },
  { key: 'teil-5', label: 'schreiben:09-10', auftrag: `DEIN TEIL: Folien 09, 09b, 10 (Datei ${SP}/teil-5.md). Beginne mit "## Teil 5 – Kommunikationsanalyse, Markenbild, Markensteuerrad". Folie 09 = Kommunikationsanalyse von Elias (vier Kanaele, Bildwelten, Schluesselbild; eigene Bildschirmaufnahmen); Folie 09b = Markenbild, Corporate Design und Fit; Folie 10 = Markensteuerrad als Synthese (Selbstbild, Herkunftskuerzel DR/LM/AN/KA/GB, Positionierung "Genuss mit gutem Gewissen", zwei Luecken, Schritt 9 Abgleich Selbstbild ↔ Fremdbild mit vier Zeilen, Knopf zur Folie 05b). Folie 10 ist die wichtigste Folie – besonders gruendlich: jedes Stichwort im Rad mit Herkunft erklaeren, die zwei Luecken, jede Abgleich-Zeile mit Zahlen. Quellen: Notizen/Kaesten f09, f09b, f10 (inkl. Daten-JSON), kommunikationsanalyse.md, analogien.md, methoden.md §6, abgleich-vorlesung.md, buendel-b/auswertung, fragerunde.md.` },
  { key: 'teil-6', label: 'schreiben:11-12-backup', auftrag: `DEIN TEIL: Folien 11 und 12 sowie Backup B1-B8 (Datei ${SP}/teil-6.md). Beginne mit "## Teil 6 – Fazit, Fragerunde und Backup". Folie 11 = Fazit & Empfehlungen ("zwei Luecken, ein Bruch", Empfehlungen); Folie 12 = Danke & Fragen mit Steuerrad als Sprungmenue und Sprunglisten. Fuer B1-B8 eine verkuerzte Vorlage je Backup-Folie (H3 "### Backup Bn – Titel", dann "Wann zeigen", "Was drauf ist", "So erklaerst du es" (100-250 Woerter), "Rueckfragen", "Wie hinkommen"). Quellen: Notizen/Kaesten f11, f12, b1-b8, fragerunde.md, QUELLEN.md, LIESMICH Abschnitt 2 (Fragerunde: Sprungwege).` },
]

phase('Schreiben')
const geschrieben = await parallel(TEILE.map((t) => () => agent(`${KONTEXT}\n\n${t.auftrag}`, {
  label: t.label, phase: 'Schreiben',
  schema: { type: 'object', properties: { datei: { type: 'string' }, woerter: { type: 'number' }, offene_punkte: { type: 'array', items: { type: 'string' } } }, required: ['datei', 'woerter', 'offene_punkte'] },
})))
log(`Geschrieben: ${geschrieben.filter(Boolean).length} von ${TEILE.length} Teilen`)

const DATEIEN = TEILE.map((t) => `${SP}/${t.key}.md`).join('\n')
const PRUEF_SCHEMA = {
  type: 'object',
  properties: {
    zusammenfassung: { type: 'string' },
    befunde: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
          datei: { type: 'string' }, stelle: { type: 'string' }, problem: { type: 'string' },
          beleg: { type: 'string' }, korrektur: { type: 'string' },
        },
        required: ['schwere', 'datei', 'stelle', 'problem', 'beleg', 'korrektur'],
      },
    },
  },
  required: ['zusammenfassung', 'befunde'],
}

phase('Pruefen')
const pruefungen = await parallel([
  () => agent(`${KONTEXT}\n\nDU BIST PRUEFER (adversarial, nur lesen, nichts aendern). Gepruefte Dateien (das Vortragsskript in sieben Teilen):\n${DATEIEN}\n\nPRUEFE QUELLENTREUE UND REGELN: Stimmt jede Zahl, jedes Zitat, jede Tatsache mit der genannten Quelle ueberein (Stichproben reichen nicht – pruefe alle Zahlen gegen index.html, die CSV-Dateien, das Dossier und die Ausarbeitungen)? Sind Faktenstatus und Kennzeichnungen richtig (✔/✎/~/H, KI-simuliert, Selbstauskunft GB, Modellwissen)? Gibt es Verstoesse gegen die harten Regeln 1-5 (erfundene Fakten, Gruenderzitate aus der Sperrliste, "95 %" sichtbar oder ohne Zusatz, KI-Ergebnis als Kundenstimme, Modellnamen)? Ist der Sprechtext jeder Hauptfolie WOERTLICH gleich den Notizen in index.html (Platzhalter ersetzt)? Melde jeden Fehler mit Beleg und der korrigierten Fassung.`, { label: 'pruefen:quellen-regeln', phase: 'Pruefen', schema: PRUEF_SCHEMA }),
  () => agent(`${KONTEXT}\n\nDU BIST PRUEFER (adversarial, nur lesen, nichts aendern). Gepruefte Dateien (das Vortragsskript in sieben Teilen):\n${DATEIEN}\n\nPRUEFE VOLLSTAENDIGKEIT, VERSTAENDLICHKEIT UND FOLIENTREUE: Fehlt eine Folie (01, 01b, 02, 03, 04, 05, 05b, 06, 07, 08, 08b, 09, 09b, 10, 11, 12, B1-B8) oder ein Vorlagenteil? Stimmt "Was auf der Folie zu sehen ist" mit den Folienbildern (${PR}/export/folien/<id>.png ansehen) und den Klickschritten (index.html, _test/d29n-gesamt-editorial/<id>_s<n>.png) ueberein? Wuerde eine Person, die die Folie nicht gebaut hat, danach jede Rueckfrage aus den Notizen und aus fragerunde.md beantworten koennen – welche wichtigen Rueckfragen fehlen? Widersprechen sich Teile untereinander (Begriffe, Zahlen, Sprecher, Zeiten, Klickzahlen)? Sind Erklaerungen fachlich richtig und fuer Studierende verstaendlich (Fachbegriffe erklaert, keine Floskeln)? Melde jeden Mangel mit Beleg und konkretem Ergaenzungs- oder Korrekturtext.`, { label: 'pruefen:vollstaendigkeit', phase: 'Pruefen', schema: PRUEF_SCHEMA }),
])
return { geschrieben, pruefungen }
