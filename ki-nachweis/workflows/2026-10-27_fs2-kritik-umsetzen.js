export const meta = {
  name: 'fs2-kritik-umsetzen',
  description: 'Vorschläge, wie die Gruppe Stengers Kritik an Fallstudie 1 in Fallstudie 2 umsetzt (4 Blickwinkel)',
  phases: [{ title: 'Vorschläge', detail: 'vier Planer parallel, nur lesend' }],
}
const KONTEXT = `
Projekt: Studentische Gruppenarbeit „Unternehmenskommunikation“ (Prof. Dr. Daniel Stenger, HS Kaiserslautern), Marke HOLY (Energy-/Hydration-Pulver). Repository: /home/user/Unternehmens-Kommunikation (Sprache Deutsch). Fallstudie 1 (Brand Persona & Markenidentität) ist abgeschlossen, Material in fallstudie-1-brand-persona/ (Web-Präsentation in fallstudie-1-brand-persona/praesentation/, Doku LIESMICH.md, QUELLEN.md, AUTOREN.md; Ausarbeitungen *.md; Recherche-Dossier recherche/holy-recherche.md). Nächste Fallstudie 2: „Customer Journey & Blog Beitrag“, Präsentation Mo, 09.11.2026, wieder 15 Minuten in der Gruppe (3 Personen: Yannick Heisler, Elias Knauber, Lukas Welker). Eine genaue Aufgabenfolie zu FS2 liegt nicht vor; die Vorlesungsfolien zur Customer Journey stehen als Text in /tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad/stenger-mit-seite.txt (Präfix „Seitennummer:“ je Zeile; Customer Journey etwa Seiten 107–129, u. a. Phasen, Touchpoints, Aktivitäten, Fallbeispiel Herren-Armbanduhr, Übung S. 128/129 „entwickeln Sie jeweils 2 Aktivitäten in der Customer Journey“; Bewertungskriterien S. 58/59).

Bewertung Fallstudie 1 durch Prof. Stenger (wörtliche Kommentare aus dem Bewertungsbogen):
- Problemverständnis (9/10): „Problem der Fallstudie gut verstanden und strukturiert angegangen.“
- Anwendung von Konzepten & Modellen (8/10): „Persona Modell gut angewendet. Detaillierte Analyse zur Mediennutzung, Markennutzung, etc. wäre hilfreich. Limbic Map - Match zwischen Marke und Holy muss passen, sonst ist die Persona nicht richtig. Repertory Grid nicht ganz korrekt angewendet. Laddering korrekt umgesetzt. Assoziationstechnik gut und interaktiv umgesetzt. Die geschlossene Befragung zu Assoziationen gibt wenig Mehrwert. Kommunikationsanalyse umfassend umgesetzt.“
- Analyse & Argumentation (9/10): „Interview mit Gründer super! Wie kommt ihr auf die Wettbewerber Monster und Coca Cola?“
- Qualität der Lösung / Empfehlung (7/10): „Markenidentität viel viel ausführlicher darstellen in allen Facetten. Für die Positionierung müssen wir priorisieren, aber in der Identität beschreiben wir die wesensprägenden Merkmale umfassend und detailliert. Kommunikationsanalyse besser visualisieren und im Ergebnis in der Identität Farben/ Formen/ Produktabbildungen zeigen.“
- Inhaltliche Vermittlung & Präsentationsstil (9/10): „Guter interaktiver Einstieg, freier Vortrag. Position im Raum nicht optimal. Bessere Mimik und Interaktion mit der Folie möglich wenn neben den Folien positioniert. Zeitmanagement schlecht 25 min statt 15.“
- Visualisierung & Foliengestaltung (9/10): „Folien strukturiert und ansprechend gestaltet. Aber oft sehr nüchtern, da KI gestützt umgesetzt.“

Feste Regeln der Gruppe: Fakten über HOLY nur mit Quelle; Social-Media-Bilder von HOLY nur nach Zustimmung des Betreuers; keine personenbezogenen Daten ohne Einwilligung in KI-Tools (HSKL-KI-Richtlinie Nr. 6); KI-simulierte Befragungen immer als „KI-simuliert“ kennzeichnen; KI-Bilder kennzeichnen („Bild KI-generiert (Tool)“); jede KI-Nutzung wird dokumentiert. Die Präsentation ist eine selbst gebaute Web-Präsentation (HTML/CSS/JS).

Arbeitsweise: Nur lesen, nichts schreiben, nichts committen. Nicht unter /root/.claude/uploads lesen. Jeder Vorschlag konkret und umsetzbar (wer, was, bis wann relativ zum 09.11.), mit Begründung, welcher Kommentar von Stenger damit beantwortet wird, und Quelle (Dateipfad/Abschnitt, Vorlesungsseite oder URL). Antwort auf Deutsch, knapp.`
const SCHEMA = {
  type: 'object',
  properties: {
    vorschlaege: { type: 'array', items: { type: 'object', properties: {
      titel: { type: 'string' },
      kritikpunkt: { type: 'string', description: 'welcher Stenger-Kommentar' },
      massnahme: { type: 'string' },
      aufwand: { type: 'string', enum: ['klein', 'mittel', 'groß'] },
      wirkung: { type: 'string', enum: ['niedrig', 'mittel', 'hoch'] },
      risiken: { type: 'string' },
      quelle: { type: 'string' },
    }, required: ['titel', 'kritikpunkt', 'massnahme', 'aufwand', 'wirkung', 'risiken', 'quelle'] } },
    offene_fragen_an_stenger: { type: 'array', items: { type: 'string' } },
    fazit: { type: 'string' },
  },
  required: ['vorschlaege', 'offene_fragen_an_stenger', 'fazit'],
}
const LINSEN = [
  { key: 'bilder', text: 'BLICKWINKEL BILDER UND VISUALISIERUNG: Wie bekommt die Präsentation zu FS2 deutlich mehr und bessere Bilder (Produktabbildungen, Farben, Formen, Bildwelten von HOLY, Customer-Journey-Visualisierung mit echten Touchpoint-Screenshots), ohne Rechte zu verletzen? Prüfe, welche Bildquellen in Frage kommen: eigene Fotos gekaufter HOLY-Produkte, eigene Bildschirmfotos von Website/Shop/Social Media (mit Quelle; Regel: Social-Media-Bilder nur nach Zustimmung des Betreuers), Press Kit von HOLY (im Dossier als Quelle [13] geführt – prüfe in recherche/holy-recherche.md und praesentation/QUELLEN.md, was über Nutzungsbedingungen bekannt ist), freie Bilddatenbanken, KI-generierte Bilder (Kennzeichnung). Du darfst Websuche nutzen, um Nutzungsbedingungen (z. B. Press Kit, Unsplash/Pexels-Lizenz) mit URL zu belegen. Schau dir an, welche Folien in FS1 nüchtern waren (praesentation/export/uebersicht.png ansehen, praesentation/index.html) und mach konkrete Layout-Vorschläge für die Web-Präsentation (z. B. randlose Bilder, Moodboard, Customer-Journey-Map mit Bildern je Phase).' },
  { key: 'inhalt', text: 'BLICKWINKEL INHALT UND MODELLE: Wie setzt die Gruppe in FS2 die inhaltliche Kritik um? Lies die Vorlesungsseiten zur Customer Journey (Textdatei, Seiten 107–129) und leite ab, welche Modelle/Schritte Stenger für FS2 vermutlich erwartet (Phasen, Touchpoints, Aktivitäten je Phase, Persona als Ausgangspunkt, Blog-Beitrag). Übertrage die Kritik: Mediennutzung/Markennutzung der Persona detaillieren (FS2 baut darauf auf), Limbic-Map-Passung Persona ↔ Marke klären, Herleitungen (z. B. Wettbewerber) auf der Folie sichtbar machen, keine geschlossenen Befragungen ohne Mehrwert (lieber offene, echte Kurzinterviews), Identität in allen Facetten (als Grundlage, nicht wieder verkürzen). Prüfe in fallstudie-1-brand-persona/ (persona-steckbrief.md, limbic-map.md, gruenderbefragung.md, methoden.md, recherche/), was für FS2 wiederverwendbar ist und wo Lücken sind. Nenne, wie echte Kundendaten beschafft werden können (z. B. 5 echte Kurzinterviews, Bewertungen auswerten).' },
  { key: 'zeit', text: 'BLICKWINKEL ZEIT UND VORTRAG: In FS1 dauerte der Vortrag 25 statt 15 Minuten, Position im Raum war ungünstig (nicht neben den Folien), Mimik/Interaktion mit der Folie ausbaufähig; positiv: interaktiver Einstieg, freier Vortrag. Lies praesentation/LIESMICH.md (Zeitplanung, Sollzeit 14:05, Checklisten), fallstudie-1-brand-persona/redeskript.md und vortragsskript.md (Wortzahlen je Folie), praesentation/index.html (data-zeit je Folie, Anzahl Hauptfolien und Schritte). Finde heraus, warum es vermutlich 25 Minuten wurden (z. B. zu viele Folien/Schritte, Live-Abstimmung, Sprecherwechsel, Rückfragen während des Vortrags), und schlage ein verbindliches Zeitkonzept für FS2 vor: Folienbudget, Wortbudget je Minute, harte Zeitmarken, Timer im Referentenfenster, Generalprobe mit Stoppuhr und Kürzungsregel, Rollen (Zeitwächter), Umgang mit Interaktion, Stand- und Laufwege im Raum, Zeigen auf die Folie.' },
  { key: 'menschlich', text: 'BLICKWINKEL „WENIGER NÜCHTERN, WENIGER NACH KI“: Stenger schreibt „Folien oft sehr nüchtern, da KI gestützt umgesetzt“. Untersuche die FS1-Präsentation (praesentation/index.html, css/, export/uebersicht.png, export/folien/*.png ansehen) und benenne konkret, was nüchtern bzw. nach KI aussieht (z. B. viele Kästen, Text-Tabellen, gleichförmige Diagramme, Fußnoten, Pillen, wenig Bild, wenig Markenfarbe). Schlage vor, wie die Gruppe KI weiter nutzen kann (erlaubt und gefordert), aber die Folien persönlicher und markennäher macht: HOLY-Markenfarben und -Formen als Gestaltungssystem, eigene Fotos und Handskizzen, echte Zitate aus echten Gesprächen, Storytelling entlang einer Persona-Geschichte, ein „Hero“-Bild pro Folie, weniger Fußnoten auf der Folie (Quellen ins Backup), Folienmaster-Regeln. Berücksichtige die Regeln zur Kennzeichnung und Dokumentation.' },
]
phase('Vorschläge')
const ergebnisse = await parallel(LINSEN.map(l => () =>
  agent(`${l.text}\n\n${KONTEXT}`, { label: `planer:${l.key}`, phase: 'Vorschläge', schema: SCHEMA })
    .then(r => r ? { linse: l.key, ...r } : null)))
return ergebnisse.filter(Boolean)