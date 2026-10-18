export const meta = {
  name: 'praesentation-uebernahme',
  description: 'Web-Präsentation von Account 2 übernehmen: Grafiken prüfen, HOLY-Logos ergänzen, füllbare Platzhalter mit den Ergebnissen von Bündel A füllen, prüfen, Exporte erneuern',
  phases: [
    { title: 'Bestandsaufnahme', detail: 'Platzhalter-Inventar, Grafik-Prüfung, Logo-Konzept' },
    { title: 'Umsetzen', detail: 'nacheinander: Folie 03/10 (A1), Folien 04/05/10/11 (A2/A3), Logos und übrige Platzhalter' },
    { title: 'Prüfen', detail: 'Darstellung, Inhalte, Rechte und Kennzeichnung' },
    { title: 'Nacharbeit', detail: 'Befunde einarbeiten, Exporte erneuern, LIESMICH/AUTOREN' },
  ],
}

const P = 'fallstudie-1-brand-persona/praesentation'
const GEMEINSAM = `
Kontext: Studentische Gruppenarbeit (Modul Unternehmenskommunikation, HS Kaiserslautern), Fallstudie 1 „Brand Persona & Markenidentität“, Marke HOLY. Repository /home/user/Unternehmens-Kommunikation, Branch master. Heute ist ${args.datum}. Die Web-Präsentation liegt in ${P}/ (index.html = alle Folien; Daten je Folie in <script type="application/json" class="daten">, Sprechtext in <aside class="notizen">, Kästen „FOLIE xx“ als HTML-Kommentar; Gestaltung css/, Verhalten js/folien/*.js, Marke in marke.js; Bedienung und Regeln in LIESMICH.md und AUTOREN.md). Account 2 hat sie gebaut und als fertig gemeldet; Account 1 (diese Sitzung) übernimmt sie jetzt auf Wunsch von Yannick: „Grafiken nochmal prüfen, HOLY-Logos auf der ersten Folie und sonst wo einfügen, fehlende Platzhalter ausfüllen“.
Ergebnisse von Bündel A seit dem Bau (noch nicht in der Präsentation): fallstudie-1-brand-persona/markenkompetenz.md (A1, Folie 03), persona-steckbrief.md (A2, Folie 04), limbic-map.md (A3, Folie 05; Marco jetzt „Hedonisten“ statt „Abenteurer“, Gewichte B30/D30/S40, Marke B30/D20/S50, Lücke Dominanz −10), folienentwuerfe.md (Folien 3, 4, 5 inkl. fertiger JSON-Vorschläge für f03 und f05, Titel, Sprechtexte, Fußzeilen). Bündel B (Lukas: Folien 06–08b, B4, B5) und C (Elias: 09, 09b, 11, B6) haben noch keine Ergebnisse: deren Beispieldaten bleiben, gekennzeichnet.
Prüfwerkzeug: cd ${P} && PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core node werkzeuge/pruefen.mjs index.html --ausgabe _test/<name> --schritte [--nur f03,f05] [--optional] [--druck _test/x.pdf] [--thema bento|keynote] [--modus dunkel]. Testausgaben NUR unter ${P}/_test/ (in .gitignore). Screenshots kannst du mit dem Read-Werkzeug ansehen.
Feste Regeln:
- Keine Zahl, kein Zitat, keine Quelle erfinden. Fakten über HOLY nur mit Quelle und Faktenstatus (Recherche-Dossier recherche/holy-recherche.md, Anhang B; oder die genannten Ausarbeitungen). Statista-Werte nur, wie sie in persona-steckbrief.md oder persona-daten.md stehen.
- Öffne keine Dateien unter /root/.claude/uploads und keine Datei mit „NUR-Gruppenordner“ im Namen.
- Ändere nichts unter ki-nachweis/, kein git commit/push. Keine Modellbezeichnungen (Namen von KI-Modellen) in Dateien.
- Inhalte der Bündel B und C nicht erfinden oder „verbessern“; deren Beispieldaten bleiben gekennzeichnet.
- Design-System (Editorial, Tokens in css/tokens.css) einhalten; keine externen Ressourcen (alles offline).
`

const LISTE = {
  type: 'object',
  properties: {
    bereich: { type: 'string' },
    eintraege: { type: 'array', items: { type: 'object', properties: {
      folie: { type: 'string' }, stelle: { type: 'string' }, befund: { type: 'string' },
      jetzt_fuellbar: { type: 'string', description: 'ja (mit Quelle) / nein (wartet auf …) / Fehler beheben' },
      vorschlag: { type: 'string' }, quelle: { type: 'string' } },
      required: ['folie', 'stelle', 'befund', 'jetzt_fuellbar', 'vorschlag', 'quelle'] } },
    zusammenfassung: { type: 'string' },
  },
  required: ['bereich', 'eintraege', 'zusammenfassung'],
}

phase('Bestandsaufnahme')
const bestand = await parallel([
  () => agent(`${GEMEINSAM}
Auftrag PLATZHALTER-INVENTAR (nur lesen, nichts ändern): Finde jeden Platzhalter in der Präsentation: in ${P}/index.html (Daten, Titel, Notizen, Kästen „FOLIE xx“), ${P}/marke.js, js/folien/*.js (fest eingebaute Texte), bilder/platzhalter-*.svg, LIESMICH.md Abschnitt 12. Dazu gehören: Beispieldaten-Pillen, „Platzhalter“, „[Marke]“/„[Name]“/„[…]“, „folgt“, orange Markierungen, Werte aus dem Recherche-Dossier, die durch neuere Ausarbeitungen überholt sind (Folie 03 → markenkompetenz.md; 04 → persona-steckbrief.md/Folienentwurf 4; 05 und Persona-Pille auf 10 → limbic-map.md/Folienentwurf 5; Kompetenz-Feld auf 10 → markenkompetenz.md; Sprechtexte 10/11 mit „Dominanz-Lücke −20“), B2 Prompt-Log (welche Zeilen kann man mit echten Einträgen aus ki-nachweis/ki-nachweis.md belegen?), B3, B7 (Jahr/Auflage Esch und Häusel – darfst du per Websuche an Verlagsseite/DNB prüfen; nur übernehmen, was du selbst geöffnet hast).
Für jeden Eintrag: Folie, Stelle (Datei + Zeile oder Datenfeld), was dort steht, ob es JETZT mit vorhandenen Ergebnissen gefüllt werden kann (mit Quelle), oder worauf es wartet (Lukas, Elias, Yannick: eigenes Foto, KI-Bild, Freigabe, Interviews …), und einen konkreten Vorschlag.`,
    { label: 'bestand:platzhalter', phase: 'Bestandsaufnahme', schema: LISTE }),
  () => agent(`${GEMEINSAM}
Auftrag GRAFIK-PRÜFUNG (nur lesen; nur unter ${P}/_test/ schreiben): Prüfe alle Grafiken und Bilder.
1. Führe pruefen.mjs mit --schritte --optional aus (Ausgabe _test/bestand), zusätzlich einmal --modus dunkel --ohne-bilder und einmal --thema keynote --ohne-bilder. Lies bericht.json.
2. Sieh dir den Endzustand jeder Folie (f01–f12, b1–b8) als Screenshot selbst an. Prüfe: Diagramme und Werte stimmen mit Beschriftungen und Daten überein (nachrechnen), nichts überlappt oder ist abgeschnitten, Bilder laden in sinnvoller Auflösung (Logo nicht verpixelt oder verzerrt), Legenden und Quellenzeilen vollständig, Kennzeichnung „Beispieldaten“/„Platzhalter“ vorhanden, wo nötig.
3. Prüfe auch die Grafiken in fallstudie-1-brand-persona/grafiken/ (folie-02-vorgehen, folie-03-markenkompetenz, folie-05-limbic-map; PNG ansehen, SVG/PY lesen): stimmen sie mit den Folienentwürfen und den Ausarbeitungen überein? Abschneidungen, Überlappungen, falsche Werte?
4. Prüfe export/uebersicht.png und ob export/folien/*.png und export/praesentation.pdf zum aktuellen index.html passen (Seitenzahl, Stand).
Gib jeden Mangel mit Ort, Beleg (Screenshot-Datei, Rechnung) und Vorschlag zurück; was stimmt, in die Zusammenfassung.`,
    { label: 'bestand:grafiken', phase: 'Bestandsaufnahme', schema: LISTE }),
  () => agent(`${GEMEINSAM}
Auftrag LOGO-KONZEPT (nur lesen; nur unter ${P}/_test/ schreiben): Yannick möchte die HOLY-Logos „auf der ersten Folie und sonst wo“. Vorhanden: ${P}/bilder/holy-logo-wortmarke.png und holy-logo-oval.png (offizielle Dateien von de.holy.com, Abruf 16.10.2026; Quelle in marke.js, QUELLEN.md Abschnitt 4, Fußzeilen f01/f09b). Prüfe:
1. Wie das Logo auf f01 und f09b eingebunden ist (HTML, marke.js → logo, data-marke-logo, CSS) und wie es aussieht (Screenshot); Auflösung und Seitenverhältnis der PNGs (z. B. mit python/file).
2. Wo ein Logo zusätzlich sinnvoll ist, ohne das Editorial-Design zu überladen oder Inhalte zu verdrängen: Kandidaten Folie 03 (Markenkompetenz, „Wer bin ich?“), Folie 10 (Zentrum des Steuerrads), Folie 12 (Danke & Fragen), Kopfzeile aller Folien (eher nicht), Startseite der Webseite /home/user/Unternehmens-Kommunikation/index.html (bisher bewusst ohne Logo), Übersicht. Begründe je Kandidat (Nutzen, Platz, Rechte: Kennzeichnung der analysierten Marke, kein Eindruck einer Kooperation – die Startseite und f01/f12 haben den Hinweis „keine Verbindung zu HOLY“).
3. Konkreter Umsetzungsplan je gewähltem Ort: Datei, Stelle, Markup/CSS (vorhandene Mechanik wiederverwenden), Größe, alt-Text, Quellenzeile.
Gib den Plan als Einträge zurück (jetzt_fuellbar = „ja“ für empfohlene Orte, „nein“ mit Grund für verworfene).`,
    { label: 'bestand:logos', phase: 'Bestandsaufnahme', schema: LISTE }),
])
const ok = bestand.filter(Boolean)
log(`Bestandsaufnahme: ${ok.map(b => b.eintraege.length).join(' / ')} Einträge`)
const BESTAND = JSON.stringify(ok, null, 1)

const ERGEBNIS = {
  type: 'object',
  properties: {
    geaendert: { type: 'array', items: { type: 'object', properties: { datei: { type: 'string' }, was: { type: 'string' } }, required: ['datei', 'was'] } },
    offen: { type: 'array', items: { type: 'string' } },
    pruefung: { type: 'string', description: 'Ergebnis von pruefen.mjs für die geänderten Folien (Fehler/Warnungen)' },
  },
  required: ['geaendert', 'offen', 'pruefung'],
}

phase('Umsetzen')
const u1 = await agent(`${GEMEINSAM}
Bestandsaufnahme (JSON):\n${BESTAND}\n
Auftrag UMSETZUNG 1 – Folie 03 und das Kompetenz-Feld auf Folie 10 (A1): Übernimm den Folienentwurf „Folie 3 – Markenkompetenz“ aus fallstudie-1-brand-persona/folienentwuerfe.md in f03: Daten-JSON (Vorschlag dort), Titel-Ersatztext, Fußzeile, Notizen (Sprechtext + Belegabsatz, Markenname als <span data-marke></span>), Kasten „FOLIE 03“ (Stand, was offen ist: Rollenbegriffe mit Vorlesung abgleichen, Jahresabschluss). Prüfe, ob js/folien/03-*.js mit leerem rolleZusatz und der neuen Rollenliste umgehen kann; passe das Skript nur an, wenn nötig. Auf Folie 10 das Feld Markenkompetenz (Daten, Notiz, Belegzeile) an markenkompetenz.md §6 angleichen (Herausforderer · Softdrinks zum Selbermixen). Danach pruefen.mjs --nur f03,f10 --schritte; Fehler beheben, Screenshots ansehen. Nur Folien 03 und 10 (und ggf. 03-Skript/CSS) ändern.`,
  { label: 'umsetzen:a1-folie03', phase: 'Umsetzen', schema: ERGEBNIS })
log(`U1: ${u1 ? u1.geaendert.length + ' Änderungen' : 'fehlgeschlagen'}`)

const u2 = await agent(`${GEMEINSAM}
Bestandsaufnahme (JSON):\n${BESTAND}\n
Vorherige Umsetzung (Folie 03/10-Kompetenz) ist erledigt: ${JSON.stringify(u1)}
Auftrag UMSETZUNG 2 – Folien 04, 05, Persona-Pille auf 10, Sprechtexte 10/11 (A2/A3):
- f05: Folienentwurf „Folie 5 – Limbic Map“ aus folienentwuerfe.md übernehmen (Daten-JSON inkl. typen-Winkel, Titel, Sprechtext als Notizen mit Belegabsatz, Fußzeile/Quellenzeile mit Rechtevermerk). Die in limbic-map.md §8 genannten fest eingebauten Texte in js/folien/05-limbic-map.js („fitHinweis“ „Gewichte: Hypothese (Dossier 4.4)“, „– größte Lücke“) zu Datenfeldern machen bzw. passend ändern; den Markenpunkt als „Mittelwert“ beschriftbar machen, wenn das ohne großen Umbau geht.
- f04: mit persona-steckbrief.md und Folienentwurf 4 abgleichen (Psychografie: „Erfolg etwas wichtiger als im Ø“, „Spaß“ nicht als überdurchschnittlich; Sprechtext „in der Regel nicht beim Zocken, sondern zum Beispiel im Schichtdienst“). Das Persona-Bild bleibt Platzhalter (Yannick erzeugt es selbst); Hinweis im Kasten.
- f10: Persona-Pille/Limbic-Angabe „Abenteurer“ → „Hedonisten“; Sprechtext und Belegzeile anpassen.
- f10/f11 Sprechtexte und Notizen: „Dominanz-Lücke −20“ → −10 bzw. passend zu limbic-map.md; f11-Empfehlungen nur sprachlich angleichen, wenn sie sich auf die Limbic-Lücke berufen (Inhalt von Elias nicht umbauen).
- B3 (Datenquellen Persona) mit persona-steckbrief.md abgleichen (Statista CI 2025 nur wie dort).
Danach pruefen.mjs --nur f04,f05,f10,f11,b3 --schritte; Fehler beheben; Screenshots ansehen.`,
  { label: 'umsetzen:a2a3-folien04-05', phase: 'Umsetzen', schema: ERGEBNIS })
log(`U2: ${u2 ? u2.geaendert.length + ' Änderungen' : 'fehlgeschlagen'}`)

const u3 = await agent(`${GEMEINSAM}
Bestandsaufnahme (JSON):\n${BESTAND}\n
Bisherige Umsetzungen: U1 ${JSON.stringify(u1)} · U2 ${JSON.stringify(u2)}
Auftrag UMSETZUNG 3 – Logos, übrige füllbare Platzhalter, Grafik-Mängel:
1. Logos nach dem Logo-Konzept aus der Bestandsaufnahme einbauen (f01 prüfen/verbessern; zusätzliche empfohlene Orte, z. B. f03, f12; Startseite /home/user/Unternehmens-Kommunikation/index.html nur, wenn empfohlen – dann mit Hinweis „keine Verbindung zu HOLY“ und Quelle). Vorhandene Mechanik nutzen (marke.js, data-marke-logo), Quellenzeilen ergänzen, QUELLEN.md Abschnitt 4 aktualisieren.
2. Alle übrigen Platzhalter, die laut Inventar JETZT füllbar sind (z. B. B2 Prompt-Log: Zeilen von Bündel A mit echten Einträgen aus ki-nachweis/ki-nachweis.md statt Beispiel – Pille je Zeile korrekt setzen; B7 Jahr/Auflage Esch und Häusel nur, wenn im Inventar mit selbst geöffneter Quelle belegt, sonst Websuche an Verlagsseite/DNB selbst prüfen; weitere „ja“-Einträge). Was nicht füllbar ist, bleibt gekennzeichnet; Kästen „FOLIE xx“ und LIESMICH.md Abschnitt 12 (Checkliste) auf den neuen Stand bringen.
3. Die Mängel aus der Grafik-Prüfung beheben, soweit sie in der Präsentation oder in fallstudie-1-brand-persona/grafiken/*.py liegen (PNG/SVG mit dem Skript neu erzeugen: python3 -I <skript>.py <ausgabe>.svg und PNG per /opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell --no-sandbox --disable-gpu --hide-scrollbars --window-size=1400,800 --screenshot=<png> file://<svg>).
Danach pruefen.mjs --schritte --optional über alles; Fehler beheben.`,
  { label: 'umsetzen:logos-platzhalter', phase: 'Umsetzen', schema: ERGEBNIS })
log(`U3: ${u3 ? u3.geaendert.length + ' Änderungen' : 'fehlgeschlagen'}`)

const BEFUNDE = {
  type: 'object',
  properties: {
    befunde: { type: 'array', items: { type: 'object', properties: {
      schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
      stelle: { type: 'string' }, problem: { type: 'string' }, beleg: { type: 'string' }, vorschlag: { type: 'string' } },
      required: ['schwere', 'stelle', 'problem', 'beleg', 'vorschlag'] } },
    gesamturteil: { type: 'string' },
  },
  required: ['befunde', 'gesamturteil'],
}
const UMSETZUNG = JSON.stringify({ u1, u2, u3 })
const PRUEFER = [
  { key: 'darstellung', prompt: `DARSTELLUNG: pruefen.mjs --schritte --optional (Ausgabe _test/pruef-darstellung) und zusätzlich --modus dunkel sowie --thema bento und --thema keynote (je --ohne-bilder). Sieh dir die Endzustände aller Folien und die Zwischenschritte der geänderten Folien (f01, f03, f04, f05, f10, f11, f12, b2, b3, b7 und Logo-Orte) selbst an. Überlappungen, Abschneidungen, verpixelte/verzerrte Logos, Lesbarkeit von hinten (Schriftgrößen), Kontraste, Konsistenz der Gestaltung mit den übrigen Folien. Auch die Grafiken in fallstudie-1-brand-persona/grafiken/*.png ansehen.` },
  { key: 'inhalt', prompt: `INHALT: Vergleiche die geänderten Folien Satz für Satz mit den Quellen: f03 ↔ markenkompetenz.md und Folienentwurf 3; f04 ↔ persona-steckbrief.md und Folienentwurf 4; f05 ↔ limbic-map.md und Folienentwurf 5; f10/f11 ↔ beide; B2 ↔ ki-nachweis/ki-nachweis.md; B3 ↔ persona-steckbrief.md/persona-daten.md; B7 ↔ geprüfte Literaturangaben. Zahlen, Status (✔/✎/H), Quellennummern, Kennzeichnung „Heuristik/Schätzung des Teams“, „laut Unternehmen“. Gibt es noch Reste der alten Werte (Abenteurer, −20, B20/D35/S45, 2023 Series A in der Zeitleiste, „≈ 170“)? Sind die Notizen (Sprechtexte) in sich stimmig und in der Sollzeit (data-zeit) sprechbar?` },
  { key: 'rechte', prompt: `RECHTE UND KENNZEICHNUNG: Logos (Quelle © HOLY Softdrinks GmbH, de.holy.com, Abruf 16.10.2026 an jeder Stelle; kein Eindruck einer Kooperation; Hinweis „keine Verbindung zu HOLY“ wo nötig), Limbic-Rechtevermerk (Gruppe Nymphenburg) auf f05, Beispieldaten-Pillen genau dort, wo noch Beispieldaten stehen (nicht entfernt, wo B/C noch fehlen; entfernt, wo jetzt echte Daten stehen), Platzhalterbilder gekennzeichnet, KI-Kennzeichnung, keine personenbezogenen Daten Dritter, keine Statista-Rohdaten, keine externen Ressourcen. QUELLEN.md, LIESMICH.md Abschnitt 12 und die Kästen „FOLIE xx“ auf dem neuen Stand?` },
]
phase('Prüfen')
const pruefungen = await parallel(PRUEFER.map(p => () =>
  agent(`${GEMEINSAM}\nNur lesen (Testausgaben nur unter ${P}/_test/).\nUmsetzungen: ${UMSETZUNG}\nAuftrag ${p.prompt}\nJeder Befund mit Beleg und konkretem Vorschlag; erfinde keine Befunde, nenne was stimmt im Gesamturteil.`,
    { label: `pruefen:${p.key}`, phase: 'Prüfen', schema: BEFUNDE })
    .then(r => r ? { pruefer: p.key, ...r } : null)))
const alle = pruefungen.filter(Boolean)
const befunde = alle.flatMap(p => p.befunde.map(b => ({ pruefer: p.pruefer, ...b })))
log(`${befunde.length} Befunde: ${befunde.filter(b => b.schwere === 'hoch').length} hoch, ${befunde.filter(b => b.schwere === 'mittel').length} mittel`)

phase('Nacharbeit')
const nacharbeit = await agent(`${GEMEINSAM}
Umsetzungen: ${UMSETZUNG}
Prüfbefunde (JSON):\n${JSON.stringify(befunde, null, 1)}\n
Auftrag NACHARBEIT:
1. Jeden Befund an der Stelle selbst prüfen; berechtigte umsetzen (alle hoch und mittel, niedrig wenn sinnvoll), unberechtigte begründet ablehnen.
2. AUTOREN.md um einen Abschnitt „Übernahme durch Account 1 (${args.datum})“ ergänzen (Tabelle Bereich | Änderung), LIESMICH.md Stand-Zeile und Abschnitt 12 aktualisieren.
3. Exporte erneuern: export/praesentation.pdf (pruefen.mjs --druck, ohne optionale Folie 01b wie bisher; Seitenzahl prüfen), export/folien/<id>.png (Endzustand jeder Folie, 1920×1080 wie bisher), export/uebersicht.png (so erzeugen, wie es Account 2 getan hat – Hinweise in AUTOREN.md/LIESMICH.md bzw. im Code; wenn kein Weg dokumentiert ist, die vorhandene Übersicht nachbauen und den Weg in AUTOREN.md festhalten).
4. Abschließend pruefen.mjs --schritte --optional --druck _test/final.pdf: 0 Fehler. Testordner bleiben unter _test/.`,
  { label: 'nacharbeit', phase: 'Nacharbeit', schema: {
    type: 'object', properties: {
      umgesetzt: { type: 'array', items: { type: 'string' } },
      nicht_umgesetzt: { type: 'array', items: { type: 'object', properties: { befund: { type: 'string' }, grund: { type: 'string' } }, required: ['befund', 'grund'] } },
      exporte: { type: 'string' }, endpruefung: { type: 'string' },
      fuer_yannick: { type: 'array', items: { type: 'string' } } },
    required: ['umgesetzt', 'nicht_umgesetzt', 'exporte', 'endpruefung', 'fuer_yannick'] } })

return {
  bestand: ok.map(b => ({ bereich: b.bereich, n: b.eintraege.length, zusammenfassung: b.zusammenfassung })),
  umsetzung: { u1, u2, u3 },
  pruefungen: alle.map(p => ({ pruefer: p.pruefer, gesamturteil: p.gesamturteil, anzahl: p.befunde.length })),
  befunde,
  nacharbeit,
}
