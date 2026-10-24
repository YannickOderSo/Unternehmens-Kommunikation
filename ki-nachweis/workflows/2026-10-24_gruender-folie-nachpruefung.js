export const meta = {
  name: 'gruender-folie-nachpruefung',
  description: 'Adversariale Nachpruefung der D27-Nacharbeit (Folie 05b, 10, 01, 02, deck.js, Doku): Befunde umgesetzt? Neue Fehler?',
  phases: [{ title: 'Nachpruefung', detail: '3 unabhaengige Pruefer, nur lesen' }],
}

const SP = '/tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad'
const BASIS = '/home/user/Unternehmens-Kommunikation/fallstudie-1-brand-persona'

const GEMEINSAM = `Kontext: Studentische Gruppenarbeit (Modul Unternehmenskommunikation, Marke HOLY), Web-Praesentation in ${BASIS}/praesentation/ (index.html, css/, js/, marke.js). Vortrag Mo 26.10.2026, 15 Minuten.
Am 24.10.2026 hat ein Workflow (D27) eine neue Folie 05b "Gruenderbefragung: Innensicht" gebaut und Folie 10 (Abgleich Selbstbild/Fremdbild, Schritt 9) angepasst sowie die Sprechtexte von Folie 01 und 02 gekuerzt. Zwei Pruefer haben danach 19 Befunde gemeldet; ihr vollstaendiger Bericht (JSON, deutsch) steht in ${SP}/d27-journal.txt (Abschnitte "befunde" der beiden Pruefer). Danach hat die Hauptsitzung die Befunde selbst eingearbeitet; die Umsetzung ist in ${BASIS}/praesentation/AUTOREN.md, Abschnitt 25, Unterabschnitt "Nacharbeit nach der Pruefung" tabellarisch beschrieben. Alle Aenderungen sind noch NICHT committet: "git -C ${BASIS} diff" zeigt D27 + Nacharbeit zusammen gegen den letzten Commit; der Stand VOR D27 liegt zusaetzlich als ${SP}/d27/index-vorher.html vor.

Harte Regeln des Projekts (aus ${BASIS}/gruenderbefragung.md Abschnitt 2.3 und den Projektregeln):
- Aussagen des Gruenders Mathias Horsch immer als Selbstauskunft kennzeichnen ("laut Gruender", "Horsch 2026 (GB)"), nie als Tatsache ueber die Kundschaft.
- Paraphrase vor Zitat; Zitate hoechstens ein Satz und nur bei sicherem Wortlaut.
- NICHT zitieren: "No/Zero Bullshit" als Gruenderzitat, die Stelle 125-131 s ("Put the HOLY Squad first"-Erlaeuterung), "mehr trinken".
- "95 %" nur mit "laut Gruender, Datengrundlage nicht offengelegt" in Notizen oder Backup, nie sichtbar auf einer Hauptfolie.
- Das Transkript/Audio liegt nicht im Repository; NICHT danach suchen. Grundlage ist ${BASIS}/gruenderbefragung.md.
- Zahlen der KI-simulierten Befragung nur aus ${BASIS}/buendel-b/auswertung/*.csv bzw. hvm.md.
- Keine Namen von KI-Modellen in Repository-Dateien.

Arbeitsweise:
- NUR LESEN UND PRUEFEN. Keine Datei im Repository aendern, nichts committen. Eigene Hilfsskripte nur unter ${SP}/d28/, Testausgaben nur unter ${BASIS}/praesentation/_test/d28-<dein-kuerzel>/.
- Playwright: require("/opt/node-tools/node_modules/playwright-core"), Browser executablePath "/opt/pw-browsers/chromium-1194/chrome-linux/chrome", args ["--no-sandbox","--allow-file-access-from-files","--no-proxy-server","--host-resolver-rules=MAP * ~NOTFOUND"]; alle Anfragen ausser file:/data:/blob:/about: im Kontext per route abbrechen (keine Netzzugriffe auf die echte Live-Abstimmung!). Pruefwerkzeug: "PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core node werkzeuge/pruefen.mjs index.html --ausgabe _test/d28-<kuerzel>/... --schritte --optional [--thema bento|keynote] [--modus dunkel] [--nur f05b,f10]" im Ordner praesentation.
- Sei adversarial: Suche aktiv nach Fehlern, Widerspruechen, Regelverstoessen und unvollstaendig umgesetzten Befunden. Melde nur, was du belegen kannst.
- Gib zu JEDEM Befund eine Quelle/einen Beleg an (Datei + Zeile oder Messwert oder Zitat aus der Quelle).
- Antworte auf Deutsch.`

const SCHEMA = {
  type: 'object',
  properties: {
    zusammenfassung: { type: 'string' },
    pruefung_alter_befunde: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          befund: { type: 'string' },
          status: { type: 'string', enum: ['behoben', 'teilweise', 'nicht behoben', 'nicht geprueft'] },
          beleg: { type: 'string' },
        },
        required: ['befund', 'status', 'beleg'],
      },
    },
    neue_befunde: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
          datei: { type: 'string' },
          stelle: { type: 'string' },
          problem: { type: 'string' },
          beleg: { type: 'string' },
          vorschlag: { type: 'string' },
        },
        required: ['schwere', 'datei', 'stelle', 'problem', 'beleg', 'vorschlag'],
      },
    },
  },
  required: ['zusammenfassung', 'pruefung_alter_befunde', 'neue_befunde'],
}

phase('Nachpruefung')
const auftraege = [
  {
    label: 'nachpruefung:inhalt',
    prompt: `${GEMEINSAM}

DEIN AUFTRAG (Kuerzel "inh"): Inhaltliche Treue und Regeln.
1. Gehe alle 11 Befunde des Pruefers "Treue und Regeln" aus ${SP}/d27-journal.txt einzeln durch und pruefe am aktuellen Stand (index.html, fragerunde.md, gruenderbefragung.md, QUELLEN.md, folienentwuerfe.md), ob sie richtig umgesetzt sind. Status je Befund mit Beleg.
2. Pruefe Folie 05b (Section id="f05b" in index.html, sichtbarer Text, Notizen, Rueckfragen) Satz fuer Satz gegen ${BASIS}/gruenderbefragung.md (Abschnitte 2.1, 2.2, 2.3, 3): Stimmt jede Paraphrase? Ist alles als Selbstauskunft gekennzeichnet? Ist "stellvertretend fuer die Kund:innen" (Fragen 6-11) richtig behandelt? Kommt etwas aus den unsicheren Stellen (2.2) vor? "95 %" nur in Notizen mit Zusatz?
3. Pruefe alle Zahlen, die in den neuen oder geaenderten Notizen von 05b und Folie 10 stehen (K03, K10, Geschmack kritisch/positiv/neutral, gutes Gewissen 2 von 8, T-Kennungen) gegen ${BASIS}/buendel-b/auswertung/repertory-grid-ergebnis.csv, analogien-haeufigkeiten.csv und hvm.md.
4. Pruefe Folie 02 und 01: Ist die Logik "Rad = Selbstbild, KI-simulierte Befragung = Fremdbild zum Abgleich" im Sprechtext jetzt eindeutig? Stimmen die Wortzaehlungen in den Kommentaren (zaehle selbst mit dem Skript ${SP}/d27/sprechzeit.py: "python3 ${SP}/d27/sprechzeit.py ${BASIS}/praesentation/index.html f01,f02,f05b,f10 -v" und fuer die Gesamtsumme ohne Folienliste)? Stimmen data-zeit und die Summen in LIESMICH.md Abschnitt 3 und AUTOREN.md Abschnitt 2 noch (Soll 845 s = 14:05)?
5. Suche nach neuen Widerspruechen, die die Nacharbeit erzeugt haben koennte (z. B. alte Bezeichnungen "Positionierung · Website & Gruender", "Herkunft, Marktrolle + Gruenderbefragung", "18.10.2026" als Datum der Befragung, "Emotionaler Nutzen" als Kartenkicker, "61 Woerter", "86 Woerter", "ca. 19 s") in index.html und allen .md-Dateien unter ${BASIS} (ausser ki-nachweis). Unterscheide: historische Angaben ("bis 24.10.2026 ...") sind in Ordnung, aktuelle Beschreibungen muessen stimmen.`,
  },
  {
    label: 'nachpruefung:technik',
    prompt: `${GEMEINSAM}

DEIN AUFTRAG (Kuerzel "tec"): Darstellung und Technik.
1. Gehe alle 8 Befunde des Pruefers "Darstellung und Technik" aus ${SP}/d27-journal.txt einzeln durch und pruefe am aktuellen Stand, ob sie richtig umgesetzt sind. Status je Befund mit Beleg (Messwert, Screenshot-Pfad, Testergebnis). Die Mess- und Probeskripte des damaligen Pruefers liegen unter ${SP}/d27/pdt/ (ueberlauf.cjs, abstand.cjs, probe.cjs) und duerfen nach ${SP}/d28/ kopiert und angepasst werden.
2. Folie 05b: Ueberlauf und Abstaende in Editorial, Bento, Keynote, dunkel und ?druck bei 1920x1080 und 960x540 messen; Endzustand-Screenshots selbst ansehen (Lesbarkeit, Umbrueche, Linien auf gleicher Hoehe, Kennzeichnungs-Pille).
3. Folie 10 Schritt 9: der neue Knopf links in Zeile 2 ("Positionierung · wie Gruender · Folie 05b ->", Datenfeld "folieSelbst", Funktion verweisKnopf in js/folien/10-markensteuerrad.js). Pruefe Code-Review-artig: Verhalten ohne Zielfolie (z. B. pruefen.mjs --nur f10), Tastatur (Tab + Enter), aria-label, Referentenfenster, Druckansicht (?druck), dunkel, alle drei Themen; kein Zeilenumbruch der Beschriftung; Rueckweg. Stimmen die uebrigen Wortgleich-Pruefungen der Folie (Konsole) weiterhin?
4. js/deck.js, neuer Zweig fuer "b" nach vorlaeufig gezaehlter Ziffer (Abschnitt "5. Ziffern + Enter"): Code lesen und Randfaelle im Browser testen: Folie 08 mit sichtbarer Umfrage "5 b Enter" (Sprung, Stimme zurueckgenommen), "3 b" (keine Folie 3b: Stimme bleibt, Schwarzbild), "5" dann nach >1,5 s "b" (Schwarzbild, Stimme bleibt), grosses "B", "5 b Escape", Referentenfenster (?referent bzw. wie in LIESMICH beschrieben) und Synchronisierung mit dem Publikumsfenster, wenn dort moeglich. Fuehre ausserdem die Testwerkzeuge aus: "node werkzeuge/live-abstimmung-test.mjs" (falls es Parameter braucht, im Kopf der Datei nachlesen; KEINE echte Web-App ansprechen, kein Lasttest), "node werkzeuge/referent-test.mjs index.html --ausgabe _test/d28-tec/referent" und "node werkzeuge/zeitfenster-e2e.mjs" (Parameter im Dateikopf), jeweils mit PLAYWRIGHT_CORE gesetzt.
5. css/komponenten.css: Regel ".beispiel:not(.kennzeichnung)" und marke.js beispieldatenHinweis: Teste per Playwright mit einer Kopie von marke.js NUR unter ${SP}/d28/ (z. B. per route-Umleitung der Anfrage auf marke.js), dass bei false die Pillen "KI-simuliert"/"Innensicht" sichtbar bleiben und echte "Beispieldaten"-Pillen (z. B. B2 "teils Beispiel", Umfrage auf Folie 08) verschwinden. Fehlt irgendwo eine Kennzeichnungs-Pille die Klasse .kennzeichnung?
6. Gesamtlauf: pruefen.mjs index.html --schritte --optional in Editorial (hell) und Keynote dunkel: Fehler, Konsolenmeldungen, neue Warnungen gegenueber dem Bericht in AUTOREN.md Abschnitt 25 ("Warnungen nur Wortbudget 03, 04, 06, 08b, 11")?`,
  },
  {
    label: 'nachpruefung:vollstaendigkeit',
    prompt: `${GEMEINSAM}

DEIN AUFTRAG (Kuerzel "vol"): Vollstaendigkeit und Konsistenz ueber alle Dateien (Completeness-Critic).
1. Lies "git -C ${BASIS} diff --stat" und dann den vollstaendigen Diff aller geaenderten Dateien (auch neue, ungetrackte: css/folien/05b-gruender.css). Pruefe jede geaenderte Aussage auf Konsistenz mit den anderen Dateien: index.html (Kaesten, Notizen, Daten), LIESMICH.md, AUTOREN.md, QUELLEN.md, ../folienentwuerfe.md, ../fragerunde.md, ../gruenderbefragung.md, ../arbeitsplan.md, marke.js, werkzeuge/uebersicht.mjs.
2. Was fehlt? Gibt es Stellen, die 05b noch nicht kennen, obwohl sie es muessten (z. B. Foliennummern-Zaehlungen "15 Hauptfolien", "22 Seiten", Klickzahlen "62 Klicks", Seitenzuordnungen PDF <-> Folie, Sprungmenue-Beschreibungen, Zeitplaene je Person in LIESMICH 3 und 12, Uebergaben/Sprechtexte am Uebergang 05 -> 05b -> 06, die Rueckfrage-Verweise "Folie 5b")? Zaehle die tatsaechlichen Klicks/Schritte der Hauptfolien aus index.html bzw. per Playwright (Deck.zustand().schritteGesamt je Hauptfolie) und vergleiche mit LIESMICH.
3. Sind die Regeln eingehalten: kein Modellname (z. B. Bezeichnungen von KI-Modellen oder -Versionen) in geaenderten Zeilen; keine personenbezogenen Daten ausser den freigegebenen (Name des Gruenders, Namen der Gruppenmitglieder); "95 %" nirgends sichtbar auf einer Hauptfolie (sichtbarer Text = ausserhalb von aside.notizen und Kommentaren).
4. Passt die Darstellung im KI-Nachweis? (${BASIS}/../ki-nachweis/ki-nachweis.md, Eintraege 150-153 und D27: nur lesen, Abweichungen melden.)
5. Liste konkret jede Stelle mit Datei und Zeile, die aktualisiert werden muss, mit vorgeschlagenem Wortlaut.`,
  },
]

const ergebnisse = await parallel(auftraege.map((a) => () => agent(a.prompt, { label: a.label, phase: 'Nachpruefung', schema: SCHEMA })))
return ergebnisse.map((r, i) => ({ pruefer: auftraege[i].label, ergebnis: r }))
