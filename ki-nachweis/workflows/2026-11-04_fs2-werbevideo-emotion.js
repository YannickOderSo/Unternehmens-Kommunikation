export const meta = {
  name: 'fs2-werbevideo-emotion',
  description: 'HOLY-Werbespot neu: emotional und aufregend wie Kurzspots großer Marken – Recherche, 3 Konzepte, Jury, Produktion, Abnahme, Nacharbeit',
  phases: [
    { title: 'Recherche', detail: 'Kurzspots großer Marken und Zielgruppe, mit Websuche' },
    { title: 'Konzepte', detail: '3 emotionale Richtungen mit Storyboard und Hörprobe' },
    { title: 'Jury', detail: '2 unabhängige Bewertungen' },
    { title: 'Produktion', detail: 'Spot bauen' },
    { title: 'Abnahme', detail: 'Wirkung/Emotion und Ehrlichkeit/Recht/Technik' },
    { title: 'Nacharbeit', detail: 'Befunde umsetzen' },
  ],
}

const R = '/home/user/Unternehmens-Kommunikation'
const FS1 = R + '/fallstudie-1-brand-persona'
const FS2 = R + '/fallstudie-2-customer-journey'
const WEB = FS2 + '/konzept-website'
const VID = FS2 + '/werbevideo'
const SP = '/tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad/d11'
const ROH = FS2 + '/praesentation/intern/roh'

const AUFTRAG = `
AUSLÖSER (Yannick, 04.11.2026, wörtlich): „Der Spot ist langweilig gestaltet, nur fakten keine Emotionen. Wie wird dadurch die Zielgruppe angesprochen. Es nicht aufregend. Orientiere dich an anderen größeren Firmen wie die solche Kurzen Spots machen“
Vorher (D10, ebenfalls Yannick): „… ein kleines Werbevideo … für Holy aber im Style unserer Konzeptes … Mache ein kleines Video welches realistisch aussieht und den Geist des Konzeptes wiedergibt“.

AUSGANGSLAGE: Der bisherige Spot ${VID}/holy-werbespot.mp4 („Zahlen statt Versprechen“, 26,8 s, Drehbuch ${VID}/drehbuch.md, README ${VID}/README.md, Bau-Werkzeuge ${VID}/werkzeuge/, Zwischenstände ${VID}/intern/) reiht belegte Zahlen aneinander – sauber, aber ohne Gefühl, ohne Geschichte, ohne Spannung. Der neue Spot soll die Zielgruppe emotional packen und aufregend sein, wie die Kurzspots großer Marken (z. B. Red Bull, Monster, Nike, Apple, Gymshark, Liquid Death, Celsius, Prime, Coca-Cola, McDonald's, Duolingo, Spotify Wrapped – und HOLYs eigene Social-Ads), und trotzdem den Geist unseres Konzepts tragen. Das Konzept (Konzept-Webseite ${WEB}/, README dort): Marco (Persona, fiktiv, 28; Steckbrief ${FS1}/persona-steckbrief.md und Persona-Teile in ${FS2}/README.md) sieht ein Creator-Video, kommt ohne Suchen zum Produkt („Dein Code ist schon drin“), liest erst nach („Erst nachlesen, dann entscheiden“), kauft ohne Überraschung und gehört dann zum Squad (SQUAD Rewards, Community). Marke HOLY: laut, jung, selbstironisch, Gaming/Creator-Szene, Community „Squad“, Raptor-Maskottchen, Sortenfarbe Pink (Raspberry Raptor). Markensteuerrad FS1: ${FS1}/ (Tonalität, Markenbild – suche die Ausarbeitung dort).

FESTE VORGABEN:
- Format 9:16, 1080 × 1920, 30 fps, 20–30 s (Ziel ca. 25 s), Deutsch. Muss stumm UND mit Ton funktionieren.
- Ton über ElevenLabs (Schlüssel setzt der Netzwerk-Proxy ein: https://api.elevenlabs.io OHNE eigenen Schlüssel-Header aufrufen; Schlüssel nie suchen, auslesen, ausgeben, speichern). Stimmen: vorgefertigte („premade“) Stimmen oder die synthetisch gestalteten 7gDXY3ZXRHAmjR3Z7Guf („simpleact-design-a“) und 1ZBEaCGxeV794wdwBQr4 („simpleact-design-b“). Ihr dürft mit Voice Design (POST /v1/text-to-voice/design bzw. /v1/text-to-voice/create-previews) eine neue synthetische Stimme gestalten, wenn das besser passt (keine Nachahmung realer Personen). VERBOTEN: die geklonte Stimme o3F1PJYpP2skP4ejJ6um und jede Stimmklonung. Für Emotion: Modell eleven_v3 mit Audio-Tags (z. B. [excited], [whispers], [laughs]) ausprobieren, falls verfügbar; sonst eleven_multilingual_v2 mit passenden Einstellungen. Musik: POST /v1/music (funktioniert; detaillierter Prompt oder composition_plan, instrumental oder mit Gesang ohne Nachahmung echter Künstler), Soundeffekte: POST /v1/sound-generation (ASMR: Dose öffnen, Pulver rieseln, Eiswürfel, Schütteln, Schluck, Bass-Drop, Riser). Zeichenbudget für Sprache im ganzen Workflow: höchstens 10.000 Zeichen; Musik/Soundeffekte sparsam (Ergebnisse zwischenspeichern, wiederverwenden).
- Gründer-Videobotschaft (${FS2}/praesentation/video/) NICHT ansehen/anhören/verwenden; keine Zitate „No Bullshit“/„Zero Bullshit“, kein „mehr trinken“.
- Bilder: vorhandene HOLY-Bilder aus ${WEB}/fremdbilder/ und ${FS2}/praesentation/fremdbilder/ (Register register.js) und Rohdateien in ${ROH}/produkt/ (Manifeste mit Quelle je Datei). NEU erlaubt (Entscheidung der Hauptsitzung): HOLYs eigene Lifestyle-Werbefotos mit Models aus ${ROH}/produkt/lifestyle/ (z. B. frau-trinkt-shaker-*.jpg/png, person-haelt-probierboxen-shaker.jpg, starter-set-*-hand-*, zubereitung-*) – NICHT gruender-trio.jpg, team-gruppenfoto.jpg, creator-mit-shaker-animiert.gif, phils-schuettelshow-vorschaubild.jpg, whatsapp-berater-joscha.png und nichts aus community/ (keine Gründer, Team, Creator, Community-Mitglieder, keine Namen von Privatpersonen). Dazu die HOLY-Wortmarke (Einverständnis, KI-Nachweis FS2 Nr. 12), echte Bildschirmaufnahmen der Konzept-Webseite (lokal per Playwright) und eigene Grafik/Animation/Typo (lokale Schriften ${WEB}/schriften/: Bricolage Grotesque, Inter). Erfundene Chat-Nachrichten, Spielszenen-Andeutungen, Uhrzeiten usw. sind als Gestaltung erlaubt (fiktiv, keine realen Personen/Marken Dritter, keine Spiele-Logos). Keine Downloads aus dem Internet, keine Stock-Videos. Bilder nicht über die Originalauflösung hinaus vergrößern (unscharf). Rechtestatus der HOLY-Bilder: Veröffentlichung von der Gruppe beschlossen (KI-Nachweis FS2 Nr. 17), keine Genehmigung der Rechteinhaber eingeholt; nicht kommerziell, für die Lehrveranstaltung.
- PFLICHT im Video (nicht verhandelbar; öffentlich auf GitHub Pages, trägt HOLYs Marke): (a) die ganze Zeit lesbar eine dezente Zeile „Studentisches Konzept (HS Kaiserslautern) · keine Werbung der HOLY Softdrinks GmbH“ mit (b) „Stimme KI-generiert“ (Schriftgrad ≥ 26 px bei 1080 px Breite, Kontrast ≥ 4,5:1; darf gestalterisch zurückhaltend sein, z. B. kleine Pille, aber immer lesbar); (c) Altershinweis mind. auf der Endkarte: „Nicht für unter 18, Schwangere und Stillende · eine Portion pro Tag“ (laut Etikett); (d) Creator-Code nur als Platzhalter „CREATOR10“ mit „Werbung“; (e) Endkarte mit vollem Hinweis „Studentisches Konzept der Gruppe (HS Kaiserslautern) – keine Website und keine Werbung der HOLY Softdrinks GmbH · keine Bestellung möglich“ mind. 2 s.
- EMOTION JA, VERSPRECHEN NEIN: Gefühle, Situationen, Humor, Gemeinschaft, Geschmack/Genuss, Spannung, Musik sind erwünscht. Aber keine gesundheits- oder leistungsbezogenen Wirkversprechen (nicht „macht wach“, „hält dich wach“, „mehr Fokus/Leistung/Energie“, „Konzentration“, „gesund“, „Vitamine“, „NewCaff“), keine Darstellung von übermäßigem Konsum, nicht an Minderjährige gerichtet (Figuren erkennbar erwachsen, kein Schulsetting), nichts gegen Wettbewerber, keine unbelegten Superlative. Zahlen/Fakten nur, wenn belegt (Befund-IDs aus ${FS2}/recherche-customer-journey.md bzw. aus der Konzept-Webseite, z. B. 160 mg Koffein je Portion S92, 4,87 von 5 aus 1.409 Bewertungen T17, 10 Coins pro Euro T32, Mix & Match bis 20 % T22, 0,80 € je Portion B09) – Fakten dürfen jetzt Nebensache sein.
- Ablage: Der neue Spot ersetzt ${VID}/holy-werbespot.mp4 (+ -poster.jpg, .de.vtt, drehbuch.md, README.md, werkzeuge/). Die bisherige Fassung D10 vorher NACH ${VID}/vorfassung-d10/ verschieben (mp4, poster, vtt, drehbuch.md, README.md, werkzeuge/) – das macht die PRODUKTION, nicht frühere Phasen. Zwischenstände in ${VID}/intern/ (ausgeschlossen) bzw. ${SP}/. Nichts außerhalb von ${VID}/ und ${SP}/ ändern. Nichts committen/pushen, kein git reset/checkout/stash. Keine Namen von KI-Modellen und keine Modellkennungen in versionierten Dateien (Werkzeug „ElevenLabs“ ist erlaubt). Sprache Deutsch.
- Quellen: Recherche mit URL und Abrufdatum; Aussagen mit Befund-ID; Bilder mit Registerschlüssel bzw. Rohdatei + Manifest-Quelle; kennzeichnen, was aus Modellwissen stammt.
`

phase('Recherche')
const REC_SCHEMA = {
  type: 'object',
  properties: {
    erkenntnisse: { type: 'string', description: 'Muster mit Beispielen und Quellen (URL, Abrufdatum)' },
    regeln_fuer_unseren_spot: { type: 'array', items: { type: 'string' } },
    quellen: { type: 'array', items: { type: 'string' } },
  },
  required: ['erkenntnisse', 'regeln_fuer_unseren_spot', 'quellen'],
}
const RECHERCHE = [
  { key: 'marken', text: `Recherchiere mit Websuche (WebSearch/WebFetch), wie große Marken kurze Spots (6–30 s, Social, Hochformat) bauen: Red Bull, Monster, Nike, Apple, Gymshark, Liquid Death, Celsius, Prime, Coca-Cola, Duolingo, Spotify, und HOLY selbst (Instagram/TikTok/YouTube Shorts, soweit öffentlich beschreibbar). Dazu Leitfäden von TikTok (Creative Center, „Top Ads“), Meta (Reels-Ads-Best-Practices), YouTube (ABCD-Framework), Fachartikel (z. B. Werben & Verkaufen, Horizont, Adweek, The Drum). Fokus: Aufhänger in den ersten 1–2 s, Erzählmuster (Mini-Story, POV, Vorher/Nachher, Ritual, Insider-Humor), Emotion über Musik und Schnitt (Beat-Drops, Match-Cuts, Speed-Ramps), Sound-Design/ASMR, Text-Overlays, Markenauftritt (wann Logo/Produkt), Länge, Schluss/Call-to-Action. Beschreibe konkrete Beispielspots mit Quelle.` },
  { key: 'zielgruppe', text: `Recherchiere die Zielgruppe und was sie emotional anspricht: Lies zuerst Persona Marco (${FS1}/persona-steckbrief.md und weitere Persona-Dateien in ${FS1}/), das Markensteuerrad/Tonalität in ${FS1}/, die Zielgruppen- und Kanalbefunde im Dossier ${FS2}/recherche-customer-journey.md (Befund-IDs nennen) und die Konzept-Webseite ${WEB}/. Ergänze mit Websuche (Quellen mit URL/Abrufdatum): Was spricht 18–30-Jährige in Short-Form-Werbung an (Authentizität, Humor, Community, Selbstironie, Gaming-/Creator-Kultur, „Main Character“-Momente, Rituale), was nervt sie; Regeln für Energy-Drink-Werbung in DE (Health-Claims-Verordnung, keine Ansprache Minderjähriger, Koffeinhinweis, Werberat/Verhaltensregeln). Leite ab: welche Momente aus Marcos Alltag und unserer Journey sich emotional erzählen lassen.` },
]
const recherche = await parallel(RECHERCHE.map((r) => () => agent(`${AUFTRAG}\n\nRECHERCHE „${r.key}“: ${r.text}\nÄndere keine Dateien im Repository; Notizen nach ${SP}/recherche-${r.key}.md.`, { label: `recherche:${r.key}`, phase: 'Recherche', schema: REC_SCHEMA })))
const rec = recherche.filter(Boolean)

phase('Konzepte')
const KONZ_SCHEMA = {
  type: 'object',
  properties: {
    key: { type: 'string' }, titel: { type: 'string' },
    idee: { type: 'string', description: 'Geschichte und Gefühl in 3–5 Sätzen, Vorbild-Spots mit Quelle' },
    drehbuch_datei: { type: 'string' },
    storyboard_bilder: { type: 'array', items: { type: 'string' } },
    animatik: { type: 'string', description: 'Pfad zu einem kurzen stummen Bewegungstest (mp4, 3–6 s) des Aufhängers oder leer' },
    sprechertext: { type: 'string' }, stimme: { type: 'string' }, hoerprobe: { type: 'string' },
    musik_idee: { type: 'string' }, belege: { type: 'string' }, risiken: { type: 'string' },
  },
  required: ['key', 'titel', 'idee', 'drehbuch_datei', 'storyboard_bilder', 'animatik', 'sprechertext', 'stimme', 'hoerprobe', 'musik_idee', 'belege', 'risiken'],
}
const RICHTUNGEN = [
  { key: 'ritual', text: `Richtung „Ritual / Main-Character-Moment“: Marcos Moment, wenn der Abend beginnt (z. B. nach der Schicht, Squad-Abend) – sinnliches Zubereitungs-Ritual als ASMR-Sequenz (Pulver, Eis, Schütteln, erster Schluck), Match-Cuts im Takt, Musik baut sich auf und droppt, wenn der Shaker fertig ist. Emotion: Vorfreude, Belohnung, „das ist meins“.` },
  { key: 'squad', text: `Richtung „Squad / Zugehörigkeit“: Hype-Edit über Gemeinschaft – Chat-Nachrichten poppen auf („Squad heute 22 Uhr?“), Countdown, schnelle Schnitte zwischen Lifestyle-Momenten, Produkt und unserer Journey (Code drin → in den Squad mit einem Klick). Emotion: dazugehören, gemeinsam, Insider. Mit Musik mit Energie, evtl. kurzer Gesangs-Hook.` },
  { key: 'humor', text: `Richtung „Selbstironie / Humor“ (wie Liquid Death, Duolingo, HOLYs laute Art): eine überdrehte Mini-Story mit Pointe, die mit Erwartungen spielt (z. B. epischer Trailer-Ton für etwas Alltägliches, oder der Raptor als Erzähler), ehrlich statt Hochglanz-Versprechen – „Wir versprechen nichts, wir zeigen es dir“ als Twist. Emotion: lachen, teilen wollen.` },
]
const entwuerfe = (await parallel(RICHTUNGEN.map((r) => () => agent(`${AUFTRAG}

RECHERCHE-ERGEBNISSE (verbindlich berücksichtigen):
${JSON.stringify(rec, null, 1)}

KONZEPT „${r.key}“: ${r.text}
Passe die Richtung an die Recherche an; wähle die stärkste Idee. Der Spot muss in den ersten 1,5 s packen, eine kleine Geschichte mit Gefühl erzählen und HOLY/Raspberry Raptor klar machen; unser Konzept (Code ist schon drin, erst nachlesen, Squad) soll spürbar, aber nicht belehrend sein.
1. Drehbuch nach ${SP}/${r.key}/drehbuch.md: Einstellungen mit Zeitcode, Bild (Dateien/Registerschlüssel/Rohdatei, Bewegung, Schnittart), Bildschirmtext, Sprechertext/Tags, Musik (Aufbau, Drop-Zeitpunkt), Soundeffekte, Pflichtkennzeichnung, Belege, Vorbild-Spots mit Quelle.
2. 5–7 Storyboard-Standbilder in echtem Look (HTML/CSS mit lokalen Schriften und echten Bildern, Playwright, Netz nach außen gesperrt) als PNG 540 × 960 nach ${SP}/${r.key}/storyboard/; selbst ansehen und verbessern.
3. Einen stummen Bewegungstest des Aufhängers (3–6 s, 540 × 960, mp4) nach ${SP}/${r.key}/animatik.mp4 (deterministische HTML-Bühne mit window.__setTime(t), Bild für Bild per Playwright, ffmpeg).
4. Eine Hörprobe (≤ 250 Zeichen) der gewählten Stimme mit Emotion (eleven_v3-Tags probieren) nach ${SP}/${r.key}/hoerprobe.mp3; Länge per ffprobe.
Gib die Schemafelder zurück (key = „${r.key}“).`, { label: `konzept:${r.key}`, phase: 'Konzepte', schema: KONZ_SCHEMA })))).filter(Boolean)
log(`Konzepte: ${entwuerfe.map((e) => e.key).join(', ')}`)

phase('Jury')
const URT_SCHEMA = {
  type: 'object',
  properties: {
    bewertungen: { type: 'array', items: { type: 'object', properties: {
      key: { type: 'string' }, aufhaenger: { type: 'number' }, emotion: { type: 'number' }, zielgruppe: { type: 'number' },
      markenwirkung: { type: 'number' }, konzeptgeist: { type: 'number' }, ehrlichkeit: { type: 'number' }, machbarkeit: { type: 'number' },
      summe: { type: 'number' }, staerken: { type: 'string' }, schwaechen: { type: 'string' } },
      required: ['key', 'aufhaenger', 'emotion', 'zielgruppe', 'markenwirkung', 'konzeptgeist', 'ehrlichkeit', 'machbarkeit', 'summe', 'staerken', 'schwaechen'] } },
    empfehlung_uebernehmen: { type: 'string' },
  },
  required: ['bewertungen', 'empfehlung_uebernehmen'],
}
const LINSEN = [
  { key: 'kreativ', text: `Du bist Kreativdirektor/in einer Social-Agentur, die für große Getränkemarken Kurzspots macht. Würde der Spot in einem echten Feed den Daumen stoppen, Gefühle auslösen, geteilt werden? Ist er aufregend? Spricht er Marco (28) und HOLYs Community an?` },
  { key: 'pruefung', text: `Du prüfst Ehrlichkeit, Recht und Machbarkeit: keine Wirkversprechen, keine Ansprache Minderjähriger, kein übermäßiger Konsum, Pflichtkennzeichnung vollständig, Bildrechte/Herkunft (erlaubte Bilder), keine Klonstimme; mit vorhandenem Material und Werkzeugen (HTML-Bühne, Playwright, ffmpeg, ElevenLabs) in hoher Qualität baubar?` },
]
const urteile = (await parallel(LINSEN.map((l) => () => agent(`${AUFTRAG}

JURY. ${l.text}
Recherche-Regeln: ${JSON.stringify(rec.map((x) => x.regeln_fuer_unseren_spot))}
Bewerte (Drehbuch lesen, Storyboard-Bilder ansehen, Bewegungstest per ffmpeg in Einzelbilder zerlegen und ansehen):
${entwuerfe.map((e) => `- ${e.key} „${e.titel}“: ${e.idee}\n  Drehbuch ${e.drehbuch_datei}; Storyboard ${e.storyboard_bilder.join(', ')}; Animatik ${e.animatik || '–'}; Sprechertext „${e.sprechertext}“; Stimme ${e.stimme}; Hörprobe ${e.hoerprobe}; Musik ${e.musik_idee}; Risiken ${e.risiken}`).join('\n')}
Je Kriterium 1–10 (aufhaenger, emotion, zielgruppe, markenwirkung, konzeptgeist, ehrlichkeit, machbarkeit), summe = Summe. Ändere keine Dateien.`, { label: `jury:${l.key}`, phase: 'Jury', schema: URT_SCHEMA })))).filter(Boolean)
const punkte = {}
for (const u of urteile) for (const b of u.bewertungen) punkte[b.key] = (punkte[b.key] || 0) + b.summe
const sieger = entwuerfe.map((e) => e.key).sort((a, b) => (punkte[b] || 0) - (punkte[a] || 0))[0]
const siegerE = entwuerfe.find((e) => e.key === sieger)
log(`Jury: ${Object.entries(punkte).map(([k, v]) => `${k} ${v}`).join(' · ')} → Sieger ${sieger}`)

const PROD_SCHEMA = {
  type: 'object',
  properties: {
    dateien: { type: 'array', items: { type: 'string' } }, video: { type: 'string' }, technik: { type: 'string' },
    erledigt: { type: 'string' }, pruefungen: { type: 'string' }, zeichen_verbraucht: { type: 'number' },
    offen: { type: 'array', items: { type: 'string' } }, hinweise_hauptsitzung: { type: 'string' },
  },
  required: ['dateien', 'video', 'technik', 'erledigt', 'pruefungen', 'zeichen_verbraucht', 'offen', 'hinweise_hauptsitzung'],
}

phase('Produktion')
const prod = await agent(`${AUFTRAG}

PRODUKTION. Sieger: „${sieger}“ (Punkte ${JSON.stringify(punkte)}). Konzept: ${JSON.stringify(siegerE)}
Jury: ${JSON.stringify(urteile)}
Andere Konzepte (gute Ideen übernehmen): ${entwuerfe.filter((e) => e.key !== sieger).map((e) => `${e.key}: ${e.drehbuch_datei}`).join('; ')}
Recherche-Regeln: ${JSON.stringify(rec.map((x) => x.regeln_fuer_unseren_spot))}

1. Verschiebe zuerst die Fassung D10 nach ${VID}/vorfassung-d10/ (siehe Ablage; README dort um einen Satz „Vorfassung, ersetzt am 04.11.2026 durch den Spot aus D11“ ergänzen; Pfade in den D10-Werkzeugen dürfen veralten, das im README vermerken).
2. Baue den neuen Spot in hoher Qualität: deterministische HTML-Bühne 1080 × 1920 (window.__setTime), Bild für Bild per Playwright (30 fps), ffmpeg. Realistisch und aufregend: Kamerabewegung mit Easing, Speed-Ramps, Match-Cuts, Bewegungsunschärfe, Lichteffekte/Glows, Schnitt exakt im Takt der Musik (Beat-Raster aus der Musik messen, z. B. mit ffmpeg/Python-Onset-Erkennung), Drop sitzt auf der Hauptpointe. Ton: Musik (ElevenLabs /v1/music), Stimme (ElevenLabs, Emotion), ASMR-/Soundeffekte (ElevenLabs /v1/sound-generation), Mischung: Stimme klar vorne, Musik laut genug für Energie, Gesamt ca. −14 LUFS, Spitze ≤ −1 dBTP.
3. Ausgaben: ${VID}/holy-werbespot.mp4 (H.264 High, yuv420p, 1080 × 1920, 30 fps, AAC 48 kHz Stereo, +faststart, ≤ 15 MB), holy-werbespot-poster.jpg, holy-werbespot.de.vtt, drehbuch.md (mit Belegen, Bildliste mit Herkunft, Vorbild-Spots mit Quelle), README.md (Was, Herkunft jedes Bildes, Rechtestatus, Stimme/Musik/Sounds mit ElevenLabs und „KI-generiert“, Belege, Pflichtkennzeichnung, Neubau, Prüfstand, offene Punkte für die Gruppe, Unterschied zur Vorfassung), werkzeuge/ (reproduzierbares Bau-Skript, relative Pfade, keine Schlüssel).
4. Selbst prüfen: ffprobe, Lautheit (ebur128), Standbilder je 0,5 s und Kontaktbogen ansehen, Übergänge Bild für Bild, Pflichtzeile in jedem Bild, Untertitel, Aussprache per ElevenLabs Speech-to-Text der eigenen Tonspur, Volltextsuche nach Schlüsseln/Klonstimmen-ID/Modellkennungen. Verbessern, bis es wie ein echter, aufregender Marken-Spot wirkt.
In hinweise_hauptsitzung: Stimme (Name, ID, ggf. neu gestaltet), Zeichen verbraucht, Befund-IDs, Bildquellen, was aus Modellwissen stammt, Recherche-Quellen.`, { label: 'produktion', phase: 'Produktion', schema: PROD_SCHEMA })

phase('Abnahme')
const ABN_SCHEMA = {
  type: 'object',
  properties: {
    befunde: { type: 'array', items: { type: 'object', properties: {
      schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] }, stelle: { type: 'string' }, problem: { type: 'string' }, beleg: { type: 'string' }, vorschlag: { type: 'string' } },
      required: ['schwere', 'stelle', 'problem', 'beleg', 'vorschlag'] } },
    fazit: { type: 'string' },
  },
  required: ['befunde', 'fazit'],
}
const PRUEFER = [
  { key: 'emotion', text: `ABNAHME Wirkung/Emotion: Vergleiche mit den Mustern aus der Recherche. Packt der Aufhänger in 1,5 s? Gibt es eine Geschichte und ein Gefühl? Ist es aufregend (Tempo, Schnitt im Takt, Drop, Sounddesign)? Wirkt es wie ein echter Spot einer großen Marke oder wie selbstgebaut? Spricht es Marco/HOLYs Community an? Ist es im Vergleich zur Vorfassung ${VID}/vorfassung-d10/ deutlich besser? Prüfe Bild für Bild um die Schnitte, Schärfe, Typo, Mischung (ebur128, Stimme gegen Musik), Aussprache (Speech-to-Text der eigenen Tonspur).` },
  { key: 'ehrlichkeit', text: `ABNAHME Ehrlichkeit/Recht/Technik: keine Wirkversprechen in Bild/Ton/Musiktext, keine Ansprache Minderjähriger, kein übermäßiger Konsum; Aussagen mit Befund-ID; Pflichtkennzeichnung (a)–(e) in jedem Bild lesbar (messen); nur erlaubte Bilder (Herkunft je Bild prüfen, keine Gründer/Team/Creator/Community, keine Namen); keine Klonstimme; Gesangstext prüfen; keine Schlüssel/Modellkennungen in versionierten Dateien; technische Werte; Reproduzierbarkeit; README/Drehbuch vollständig; Vorfassung ordentlich abgelegt; .gitignore greift.` },
]
const abnahmen = (await parallel(PRUEFER.map((p) => () => agent(`${AUFTRAG}\n\n${p.text}\nProduktion: ${JSON.stringify(prod)}\nRecherche-Regeln: ${JSON.stringify(rec.map((x) => x.regeln_fuer_unseren_spot))}\nPrüfbilder nach ${SP}/abnahme-${p.key}/. Ändere keine Dateien in ${VID}/. Befunde mit Schwere, Zeitcode, Beleg, Vorschlag.`, { label: `abnahme:${p.key}`, phase: 'Abnahme', schema: ABN_SCHEMA })))).filter(Boolean)
const befunde = abnahmen.flatMap((a, i) => a.befunde.map((b) => ({ pruefer: PRUEFER[i].key, ...b })))
log(`Abnahme: ${befunde.length} Befunde (hoch ${befunde.filter((b) => b.schwere === 'hoch').length}, mittel ${befunde.filter((b) => b.schwere === 'mittel').length})`)

phase('Nacharbeit')
const nacharbeit = await agent(`${AUFTRAG}\n\nNACHARBEIT. Produktion: ${JSON.stringify(prod)}\nBefunde: ${JSON.stringify(befunde, null, 1)}\nFazits: ${JSON.stringify(abnahmen.map((a) => a.fazit))}\nJeden Befund selbst prüfen; hohe und mittlere umsetzen, niedrige wenn günstig. Neu bauen, erneut prüfen (ffprobe, Lautheit, Standbilder ansehen, Untertitel, Speech-to-Text), README und Drehbuch nachziehen. Rückgabe: umgesetzt/nicht (Grund), Prüfergebnisse, Zeichen gesamt, offene Punkte.`, { label: 'nacharbeit', phase: 'Nacharbeit', schema: PROD_SCHEMA })

return { recherche: rec, entwuerfe, urteile, punkte, sieger, prod, abnahmen, nacharbeit }
