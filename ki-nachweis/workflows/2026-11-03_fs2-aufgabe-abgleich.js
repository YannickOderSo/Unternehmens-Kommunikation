export const meta = {
  name: 'fs2-aufgabe-abgleich',
  description: 'Neue Aufgabenfolie FS2 mit Gestaltungsplan und Recherche-Dossier abgleichen (Abdeckung, Lücken, Änderungen)',
  phases: [{ title: 'Abgleich', detail: 'zwei Prüfer parallel, nur lesend' }],
}
const AUFGABE = `Aufgabenfolie Fallstudie 2 (Prof. Stenger, gezeigt am 03.11.2026; Abschrift):
„FALLSTUDIE 2: Customer Journey – Präsentation am 10.11.
Analysieren und bewerten Sie die Customer Journey Ihres Unternehmens. Sie wollen die Customer Experience Ihrer Kunden auf ein neues Level heben. Optimieren Sie die Customer Journey Ihres Unternehmens.
A1 Führen Sie eine Analyse der Customer Journey (IST) Ihres Unternehmens durch. Bewerten Sie diese kritisch.
A2 Identifizieren Sie einen zentralen Weg in der Customer Journey (IST).
A3 Bewerten Sie kritisch die Überleitungen zwischen verschiedenen Phasen des zentralen Wegs der Customer Journey im IST.
A4 Leiten Sie aus Ihrer Persona pro Phase die Top 3 Touchpoints im SOLL ab. Priorisieren Sie den Top-Touchpoint pro Phase (zentraler Weg SOLL).
A5 Recherchieren Sie Best-Practices für Customer Experience an diesen Touchpoints (Branchenübergreifend).
A6 Konzipieren Sie konkrete Maßnahmen wie die Customer Experience Ihrer Marke entlang der zentralen Route gesteigert werden kann.
A7 Entwickeln Sie entsprechende „Mockups“ wie die optimierten Touchpoints ausgestaltet aussehen können.“
Ein Blog-Beitrag steht nicht mehr auf der Folie (vorher hieß das Thema „Customer Journey & Blog Beitrag“, Termin 09.11.).`
const KONTEXT = `Repository /home/user/Unternehmens-Kommunikation (Deutsch). Fallstudie 2 der Gruppe (Yannick Heisler, Elias Knauber, Lukas Welker; Marke HOLY) liegt in fallstudie-2-customer-journey/: README.md, gestaltungsplan.md (Regeln R1–R5, u. a. höchstens 9 Hauptfolien, höchstens 25 Klicks, 12:30 Sollzeit; Folienplan Abschnitt 5; Journey-Map Abschnitt 6; Blog-Mock-up Abschnitt 7; Moodboard 8; Zeit 10; Meilensteine 12; Videobotschaft des Gründers als Schluss auf Folie 09, Abschnitt 9.5), recherche-customer-journey.md (Recherche-Dossier mit Befund-IDs und Faktenstatus ✔/✎/H), _entwuerfe/ (Musterfolien). Vorlesungsfolien als Text: /tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad/stenger-mit-seite.txt (Präfix „Seitennummer:“, Customer Journey ca. S. 107–129). Persona aus FS1: fallstudie-1-brand-persona/persona-steckbrief.md.
Regeln: nur lesen, nichts schreiben, nichts committen; nicht unter /root/.claude/uploads lesen; keine Personen Aufgaben zuordnen (für FS2 ist nichts verteilt); jede Aussage mit Quelle (Datei + Abschnitt/Zeile, Vorlesungsseite oder URL); Deutsch, knapp.`
const SCHEMA = {
  type: 'object',
  properties: {
    aufgaben: { type: 'array', items: { type: 'object', properties: {
      aufgabe: { type: 'string', description: 'A1 bis A7' },
      abdeckung: { type: 'string', enum: ['voll', 'teilweise', 'fehlt'] },
      was_es_gibt: { type: 'string' },
      luecke: { type: 'string' },
      aenderung: { type: 'string', description: 'konkrete Änderung (Folie/Abschnitt/Recherche), ohne Personen' },
      aufwand: { type: 'string', enum: ['klein', 'mittel', 'groß'] },
      quelle: { type: 'string' },
    }, required: ['aufgabe', 'abdeckung', 'was_es_gibt', 'luecke', 'aenderung', 'aufwand', 'quelle'] } },
    weitere_befunde: { type: 'array', items: { type: 'string' }, description: 'z. B. Widersprüche, Termin, Blog, Regeln R1–R5, Folienzahl' },
    fazit: { type: 'string' },
  },
  required: ['aufgaben', 'weitere_befunde', 'fazit'],
}
phase('Abgleich')
const [plan, dossier] = await parallel([
  () => agent(`${AUFGABE}\n\n${KONTEXT}\n\nAUFTRAG PLAN-ABGLEICH: Prüfe für A1–A7, wie weit fallstudie-2-customer-journey/gestaltungsplan.md (vor allem Abschnitte 0, 1.1, 5, 6, 7, 9.5, 10, 12, 13) die Aufgabe schon abdeckt. Achte besonders auf: IST und SOLL getrennt und ausdrücklich benannt; ein „zentraler Weg“ im IST und im SOLL; Bewertung der Überleitungen zwischen den Phasen (nicht nur einzelner Touchpoints); Top 3 Touchpoints je Phase aus der Persona abgeleitet und ein priorisierter Top-Touchpoint je Phase (der Plan nutzt bisher Top 2 nach Vorlesung S. 128/129); branchenübergreifende Best Practices; konkrete Maßnahmen entlang der zentralen Route; Mockups der optimierten Touchpoints (bisher v. a. Blog-Mock-up und QR-Brücke). Schlage konkrete Änderungen am Folienplan vor, die R5 (≤ 9 Hauptfolien, ≤ 25 Klicks, 12:30) einhalten, und sage, was mit dem Blog-Mock-up (Folie 07) geschehen sollte, nachdem der Blog nicht mehr in der Aufgabe steht. Prüfe auch die Termine (Plan nennt Mo 09.11., Folie sagt 10.11.).`, { label: 'pruefer:plan', phase: 'Abgleich', schema: SCHEMA }),
  () => agent(`${AUFGABE}\n\n${KONTEXT}\n\nAUFTRAG DOSSIER-ABGLEICH: Prüfe für A1–A7, welche Befunde in fallstudie-2-customer-journey/recherche-customer-journey.md (mit Befund-IDs und Faktenstatus) die Aufgabe schon tragen und welche Recherche fehlt. Besonders: Belege für die IST-Journey je Phase und einen zentralen Weg; Belege für Überleitungen bzw. Brüche zwischen Phasen; Persona-Bezug für die Top 3 Touchpoints je Phase im SOLL (Mediennutzung der Persona); vorhandene Benchmarks und ob sie branchenübergreifende Best Practices für Customer Experience an genau diesen Touchpoints sind (z. B. Suche/Content, Social, Handel/POS, Webshop, Onboarding/Community, Nachkauf); Leitplanken für Maßnahmen und Mockups (z. B. Health Claims, Marken- und Bildrechte). Nenne für jede Lücke eine konkrete Rechercheaufgabe (was, welche Art Quelle, wie viele Beispiele) – recherchiere sie aber nicht selbst. Liste außerdem Befunde, die durch die neue Aufgabe weniger wichtig werden (z. B. Blog-spezifische Recherche).`, { label: 'pruefer:dossier', phase: 'Abgleich', schema: SCHEMA }),
])
return { plan, dossier }