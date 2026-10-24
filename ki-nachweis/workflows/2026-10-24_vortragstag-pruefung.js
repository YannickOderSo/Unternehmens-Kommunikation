export const meta = {
  name: 'vortragstag-pruefung',
  description: 'Adversariale Pruefung der Umstellung des Vortragstags von Mo 26.10. auf Di 27.10.2026 (nur lesen)',
  phases: [{ title: 'Pruefung', detail: '1 Pruefer, nur lesen' }],
}
const BASIS = '/home/user/Unternehmens-Kommunikation'
const SCHEMA = {
  type: 'object',
  properties: {
    zusammenfassung: { type: 'string' },
    befunde: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
          datei: { type: 'string' },
          zeile: { type: 'string' },
          problem: { type: 'string' },
          beleg: { type: 'string' },
          vorschlag: { type: 'string' },
        },
        required: ['schwere', 'datei', 'zeile', 'problem', 'beleg', 'vorschlag'],
      },
    },
  },
  required: ['zusammenfassung', 'befunde'],
}
phase('Pruefung')
const r = await agent(`Kontext: Studentische Gruppenarbeit (Repository ${BASIS}, Sprache Deutsch). Der Vortrag der Fallstudie 1 war fuer Mo, 26.10.2026 geplant; laut Yannick (Gruppenmitglied) findet er am Di, 27.10.2026 statt. Die Hauptsitzung hat soeben alle aktuellen Termin-Angaben umgestellt (noch nicht committet; "git -C ${BASIS} diff" zeigt die Aenderungen). Regeln der Umstellung:
- Aktueller Vortragstag ueberall: Di, 27.10.2026. Mo, 26.10. ist Puffer. Generalprobe bleibt So, 25.10.
- Die Live-Abstimmung bekommt den Rundennamen 'vortrag-2026-10-27'. In fallstudie-1-brand-persona/praesentation/marke.js bleibt der Wert runde: 'probe' (wird erst nach der Generalprobe umgestellt) - nur Kommentare/Doku nennen den kuenftigen Namen.
- marke.js: datum '2026-10-27' (Titelfolie berechnet den Wochentag selbst).
- NICHT geaendert werden sollen datierte Aufzeichnungen: ki-nachweis/ (alles), Workflow-Skripte, das Recherche-Dossier fallstudie-1-brand-persona/recherche/ (Stand 13./14.10.), dossier-buendel-b.*, buendel-b/folienvorschlag.md, praesentation/_entwuerfe/, historische Tabellen in AUTOREN.md (Abschnitte vor 26), der Hauptteil von VORTRAGSREIFE.md (dort steht oben ein Nachtrag), Zitate aus den Vorlesungsfolien (Stenger S. 57 nennt "am 26.10.") in abgleich-vorlesung.md, sowie Testdaten in praesentation/werkzeuge/live-abstimmung-test.mjs und praesentation/live-abstimmung/apps-script.gs (z. B. die Textschutz-Probe "2026-10-26").

AUFTRAG (nur lesen, nichts aendern, nichts committen; Hilfsskripte nur unter /tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad/d29/):
1. Durchsuche das ganze Repository (ausser .git und praesentation/_test) nach allen Formen des alten Termins: "26.10", "26. Oktober", "2026-10-26", "Montag", "Mo, 26", "Mo 26", "vortrag-2026-10-26", sowie nach Formulierungen wie "am Vortag (So", "spaetestens So 25.10." im Zusammenhang mit der Runden-Umstellung. Entscheide fuer jeden Treffer: aktuelle Angabe, die falsch geblieben ist (Befund) - oder zulaessig (historisch/Zitat/Testdaten). Melde nur echte Befunde, aber vollstaendig.
2. Pruefe die neuen Formulierungen auf Widersprueche (z. B. Wochentag und Datum passen zusammen: 25.10.2026 = Sonntag, 26.10.2026 = Montag, 27.10.2026 = Dienstag - nachrechnen), doppelte oder falsche Tabellenzeilen in arbeitsplan.md und den HTML-Seiten aufgaben-im-detail.html / aufgabenuebersicht.html (gueltiges HTML, Spaltenzahl der Tabellen gleich), und ob die Live-Abstimmungs-Doku (praesentation/LIESMICH.md Abschnitt 6 und 12, praesentation/live-abstimmung/ANLEITUNG.md, abstimmen.html, marke.js-Kommentare, index.html Folie 08 Kasten/Notizen, fragerunde.md) ueberall denselben kuenftigen Rundennamen nennt.
3. Pruefe, ob der Wert runde in marke.js unveraendert 'probe' ist und datum '2026-10-27'.
4. Gib zu jedem Befund Datei, Zeile, Beleg (Zitat) und einen konkreten Vorschlag an. Antworte auf Deutsch.`, { label: 'pruefung:vortragstag', phase: 'Pruefung', schema: SCHEMA })
return r
