export const meta = {
  name: 'reflexion-lukas-pruefung',
  description: 'Entwurf der Reflexion von Lukas auf Fakten, Fairness und Sprache prüfen',
  phases: [{ title: 'Prüfen', detail: 'zwei unabhängige Prüfer, nur lesen' }],
}
const DATEI = args.datei
const REGELN = `Regeln: Nur lesen, nichts schreiben oder committen. Nicht unter /root/.claude/uploads lesen. Das Transkript der Gründerbefragung NICHT öffnen (nur fallstudie-1-brand-persona/gruenderbefragung.md). Kein Statista-Dossier öffnen. Keine Websuche. Gib zu jedem Befund die Quelle an (Dateipfad, Abschnitt oder Zeile). Antworte auf Deutsch.`
const SCHEMA = {
  type: 'object',
  properties: {
    befunde: { type: 'array', items: { type: 'object', properties: {
      schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
      frage: { type: 'string', description: 'Kopf, 1-6, KI-Satz oder Prüfliste' },
      stelle: { type: 'string', description: 'wörtliche Stelle aus dem Entwurf' },
      problem: { type: 'string' },
      vorschlag: { type: 'string', description: 'konkrete Neufassung, ohne Gedankenstriche' },
      quelle: { type: 'string' },
    }, required: ['schwere', 'frage', 'stelle', 'problem', 'vorschlag', 'quelle'] } },
    fazit: { type: 'string' },
  },
  required: ['befunde', 'fazit'],
}
phase('Prüfen')
const [fakten, fairness] = await parallel([
  () => agent(`Du prüfst den Entwurf einer Selbstreflexion für den Studenten Lukas Welker: ${DATEI} (im Repository /home/user/Unternehmens-Kommunikation; Entwurf liegt außerhalb davon). Lukas hat selbst keine Antworten gegeben; der Entwurf soll Fakten nur aus den Unterlagen der Gruppe nehmen und alles andere als realistische Annahme in der Prüfliste am Ende markieren.
Auftrag FAKTENTREUE: Prüfe jede Tatsachenbehauptung in Kopfzeile und den sechs Antworten gegen das Repository, vor allem fallstudie-1-brand-persona/arbeitsplan.md, fallstudie-1-brand-persona/gruenderbefragung.md, fallstudie-1-brand-persona/buendel-b/README.md, ki-nachweis/ki-nachweis.md (Einträge 53, 59, 67, 120, 135, 175, 189), fallstudie-1-brand-persona/praesentation/index.html (Folie f05b). Melde: (a) Behauptungen, die falsch sind oder den Unterlagen widersprechen; (b) Behauptungen, die weder belegt noch in der Prüfliste als Annahme markiert sind; (c) Verstöße gegen die Gründer-Regeln: Aussagen des Gründers nur als Selbstauskunft, keine Zahl „95 %“, keine Zitate „No Bullshit“/„Zero Bullshit“ oder „mehr trinken“; (d) ob die Belegliste in der Prüfliste stimmt. Beispiele zum Prüfen: Ist Mathias Horsch Gründer bzw. Mitgründer? Waren es 14 Fragen? Kam der Kontakt über LinkedIn zustande und gingen die Sprachnachrichten an Lukas? Hat Lukas die eigene Gründer-Folie gewünscht und spricht er sie? Ist die Aufgabenzeile im Kopf durch den Arbeitsplan gedeckt? Stimmen die Aufgaben von Yannick und Elias in Frage 6?
${REGELN}`, { label: 'pruefer:fakten', phase: 'Prüfen', schema: SCHEMA }),
  () => agent(`Du prüfst den Entwurf einer Selbstreflexion für den Studenten Lukas Welker: ${DATEI}. Lukas hat selbst keine Antworten gegeben; der Entwurf trifft realistische Annahmen und markiert sie in der Prüfliste am Ende. Zum Vergleich gibt es die Reflexion seines Teamkollegen: /home/user/Unternehmens-Kommunikation/fallstudie-1-brand-persona/reflexion-yannick-heisler.md. Die offiziellen Fragen und Bewertungskriterien stehen in /home/user/Unternehmens-Kommunikation/reflexion-vorlage.md.
Auftrag FAIRNESS, SPRACHE, PLAUSIBILITÄT: Melde (a) Sätze, die Lukas oder andere unfair darstellen, Schuld zuweisen oder Gründe für ausgefallene Interviews behaupten, die nicht belegt sind (Kontext: Bündel B lieferte kein Material, siehe fallstudie-1-brand-persona/arbeitsplan.md; die Gruppe will Lukas nicht bloßstellen, seine eigene Selbstkritik soll ehrlich, aber milde sein); (b) Annahmen, die unrealistisch sind oder den Unterlagen widersprechen; (c) Sprache: Der Text soll wie von einem Studenten klingen, einfach und nicht wissenschaftlich; keine Gedankenstriche (– oder —), auch keine Bis-Striche; keine Folien- oder Seitenzitate; (d) zu große Ähnlichkeit mit Yannicks Reflexion (gleiche Aussagen oder Formulierungen, die beim Lesen beider Texte auffallen); (e) ob jede Antwort ihre Frage und das Kriterium aus der Vorlage bedient (Tiefe, kritische Selbstbewertung, Lerntransfer); (f) Wortzahl der sechs Antworten zusammen (Grenze 500). Schlage für jeden Befund eine konkrete Neufassung vor.
${REGELN}`, { label: 'pruefer:fairness-sprache', phase: 'Prüfen', schema: SCHEMA }),
])
return { fakten, fairness }