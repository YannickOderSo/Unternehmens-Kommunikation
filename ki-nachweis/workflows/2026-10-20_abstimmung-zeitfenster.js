export const meta = {
  name: 'abstimmung-zeitfenster',
  description: 'Live-Abstimmung: Stimmen zählen nur 30 Minuten (automatisches Zurücksetzen) – Server, Folie 08, Abstimmseite, Tests, Doku',
  phases: [
    { title: 'Bauen', detail: 'Server-Parameter, Folie, Abstimmseite, Testwerkzeug, Doku' },
    { title: 'Prüfen', detail: 'Korrektheit, Grenzfälle, Abwärtsverträglichkeit, Anleitung' },
    { title: 'Nacharbeit', detail: 'Befunde einarbeiten, Tests' },
  ],
}

const GEMEINSAM = `
Kontext: Web-Präsentation einer studentischen Gruppenarbeit (Fallstudie 1, Marke HOLY, Vortrag Mo 26.10.2026) in /home/user/Unternehmens-Kommunikation/fallstudie-1-brand-persona/praesentation. Folie 08 hat eine eigene Live-Abstimmung (Tiere Adler, Löwe, Chamäleon, Fuchs, Schwan): abstimmen.html + js/abstimmen.js (Handy), live-abstimmung/apps-script.gs (Google-Apps-Script-Web-App in Yannicks Konto; im Repository liegt die lastfeste Fassung FASSUNG '19.10.2026' mit Zeilen-Reservierung, bei Google läuft noch die ALTE Fassung – das Aktualisieren war zurückgestellt), Anbindung in js/komponenten.js (Abschnitt 3a: Stand alle 2 s, Browser-Speicher je Runde), marke.js → umfragen.tier (liveQuelle, runde 'probe'), Testwerkzeug werkzeuge/live-abstimmung-test.mjs (44 Prüfungen, --mutationen, --server PORT als Attrappe mit dem echten Skript, --lasttest), Prüfwerkzeug werkzeuge/pruefen.mjs (beantwortet Anfragen an die liveQuelle mit einer eingebauten Attrappe), Anleitung live-abstimmung/ANLEITUNG.md (Abschnitt „Skript aktualisieren“), LIESMICH.md Abschnitt 6 und 12, AUTOREN.md 6c/16/17/18. Lies zuerst den Kopfkommentar von apps-script.gs (Schnittstelle), Abschnitt 3a in js/komponenten.js und die Abschnitte in AUTOREN/LIESMICH.

AUFTRAG (Yannick, ${args.datum}): „Die Abstimmung sollte reseted werden nach einer gewissen Zeit damit bei der Präsentation keine alten Stimmen dastehen.“ Entscheidung: Stimmen zählen nur 30 MINUTEN. Umsetzung:
- marke.js → umfragen.tier.gueltigMinuten: 30 (Kommentar: Stimmen, die älter sind, zählen auf Folie 08 nicht mehr; 0 oder leer = ohne Zeitgrenze; zusätzlich trennt runde Probe und Vortrag).
- Schnittstelle abwärtsverträglich erweitern: aktion=stand bekommt den optionalen Parameter minuten (ganze Zahl 1–1440). Mit minuten zählt der Server je (runde, umfrage, geraet) die letzte Stimme NUR, wenn ihre Zeit innerhalb der letzten minuten Minuten liegt (Zählregel bleibt: zuerst letzte Stimme je Gerät bestimmen, dann prüfen, ob sie im Fenster liegt – begründen und testen, z. B. Umentscheiden kurz vor/ nach der Grenze). Ohne minuten wie bisher. Ungültige Werte → Fehler wie bei anderen Eingaben. FASSUNG auf '20.10.2026' erhöhen. Kopfkommentar und Schnittstellenbeschreibung ergänzen.
- js/komponenten.js: Folie 08 hängt minuten an jede Stand-Abfrage, wenn gueltigMinuten gesetzt ist. Browser-Speicher der Folie: gespeicherte Werte mit Zeitstempel; mit liveQuelle Werte, die älter als gueltigMinuten sind, beim Laden verwerfen (wie bei anderer Runde: Beispielwerte mit Pille). Ohne liveQuelle (Weg B/C) unverändert.
- js/abstimmen.js: Hat ein Handy in dieser Runde vor mehr als gueltigMinuten abgestimmt, gilt die gespeicherte Wahl als abgelaufen – die Auswahl erscheint wieder (Stimme zählt sonst nicht mehr, das Handy würde aber „Danke“ zeigen). marke.js wird dort schon geladen.
- Alte Server-Fassung bei Google ignoriert minuten: Dann gibt es noch kein Zeitfenster. Das klar dokumentieren: Das Zeitfenster wirkt erst nach „Skript aktualisieren“ (jetzt mit Fassung 20.10.2026); die Kurzprüfung ?aktion=fassung nennt dann „20.10.2026“. Lasttest erwartet die neue Fassung.
- Testwerkzeug: Prüfungen für das Zeitfenster (alte Stimme fällt raus, Grenze, Umentscheiden, ungültige minuten, ohne minuten unverändert, Mutant „Fenster vor statt nach der Letzte-Stimme-Regel“ bzw. „minuten ignoriert“). Attrappe/--server reicht minuten durch; die mitlesende „Folie“ im Lasttest sendet minuten wie die echte Folie; Uhr der Attrappe vorstellbar (virtuelle Zeit), damit Tests nicht 30 Minuten warten.
- pruefen.mjs: eingebaute Attrappe akzeptiert minuten (ändert nichts am Ergebnis).
- Doku: ANLEITUNG („Skript aktualisieren“: Grund jetzt auch Zeitfenster, Fassung 20.10.2026; Abschnitt Vortrag: Stimmen älter als 30 Min. zählen nicht; nach dem Vortrag), LIESMICH 6 und 12 (Punkt „Skript aktualisieren“ wieder aktiv, mit Grund Zeitfenster und Lastfestigkeit; der Rückstellungsvermerk vom 20.10. entfällt bzw. wird ersetzt), AUTOREN (Änderungstabelle, neuer Abschnitt mit Datum).
Feste Regeln: Keine schreibenden Anfragen an die echte Web-App (liveQuelle) – alle Tests lokal mit Attrappe. liveQuelle und runde in marke.js nicht ändern. Folie 01 und die Bilder nicht anfassen (dort lief ein anderer Umbau). Keine sichtbaren Folieninhalte ändern. Keine Modellbezeichnungen (Namen von KI-Modellen) in Dateien. Deutsch, Stil der Dateien. Kein git commit, ki-nachweis/ nicht ändern. Testausgaben nur unter praesentation/_test/, Hilfsskripte im Scratchpad. Prüfwerkzeug: PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core node werkzeuge/pruefen.mjs index.html --ausgabe _test/<x> --schritte [--optional] [--nur f08] [--live-werte …].
`

phase('Bauen')
const bau = await agent(GEMEINSAM + `
Auftrag BAUEN: alles oben umsetzen und testen: node werkzeuge/live-abstimmung-test.mjs (alle Prüfungen), --mutationen (alle erkannt), Ende-zu-Ende im Browser mit der Attrappe (Folie über file:// mit ?quelle=, drei Handys; Attrappen-Uhr vorstellen: Stimmen verschwinden nach 30 Min. von der Folie, Handy zeigt wieder die Auswahl), pruefen.mjs index.html --schritte --optional (0 Fehler, 0 externe Anfragen).`, { label: 'bau', phase: 'Bauen', schema: {
  type: 'object',
  properties: {
    dateien: { type: 'array', items: { type: 'object', properties: { datei: { type: 'string' }, was: { type: 'string' } }, required: ['datei', 'was'] } },
    getestet: { type: 'string' },
    offen: { type: 'array', items: { type: 'string' } },
  },
  required: ['dateien', 'getestet', 'offen'],
} })

phase('Prüfen')
const pruefung = await agent(GEMEINSAM + `
Auftrag PRÜFEN (adversarial, nichts ändern): Ist das Zeitfenster korrekt (Reihenfolge Letzte-Stimme-Regel/Fenster, Grenzfälle, Zeitzonen – Zeit kommt als Date aus der Tabelle, Vergleich serverseitig mit new Date()), abwärtsverträglich (alte Server-Fassung, ohne minuten, Weg B/C ohne liveQuelle), konsistent zwischen Folie, Abstimmseite und Browser-Speicher (kann eine abgelaufene Stimme irgendwo noch als „gezählt“ erscheinen?), gut getestet (Mutanten scharf)? Ist die Anleitung für Yannick klar (Skript aktualisieren jetzt nötig, Fassung 20.10.2026, Kurzprüfung), widersprechen sich ANLEITUNG, LIESMICH, AUTOREN und Code? Eigene Tests mit der Attrappe erlaubt.
Bericht des Baus:
` + JSON.stringify(bau, null, 1), { label: 'pruefen', phase: 'Prüfen', schema: {
  type: 'object',
  properties: {
    befunde: { type: 'array', items: { type: 'object', properties: { schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] }, stelle: { type: 'string' }, problem: { type: 'string' }, beleg: { type: 'string' }, vorschlag: { type: 'string' } }, required: ['schwere', 'stelle', 'problem', 'beleg', 'vorschlag'] } },
  },
  required: ['befunde'],
} })

phase('Nacharbeit')
const nacharbeit = await agent(GEMEINSAM + `
Auftrag NACHARBEIT: Befunde „hoch“ und „mittel“ umsetzen, „niedrig“ wo sinnvoll, Rest begründen. Danach alle Tests erneut (live-abstimmung-test.mjs, --mutationen, pruefen.mjs --schritte --optional). Für Yannick: die genauen Schritte zum Aktualisieren des Skripts bei Google (kurz, mit Kontrolle ?aktion=fassung → 20.10.2026). Kein Commit, ki-nachweis/ nicht ändern.
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
