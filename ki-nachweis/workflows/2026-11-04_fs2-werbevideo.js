export const meta = {
  name: 'fs2-werbevideo',
  description: 'Kleines, realistisch wirkendes HOLY-Werbevideo im Stil des Konzepts (9:16, ElevenLabs-Stimme): 3 Drehbücher, Jury, Produktion, Abnahme, Nacharbeit',
  phases: [
    { title: 'Drehbücher', detail: '3 Richtungen mit Drehbuch und Storyboard-Standbildern' },
    { title: 'Jury', detail: '2 unabhängige Bewertungen' },
    { title: 'Produktion', detail: 'Stimme, Bild, Ton, Schnitt, Untertitel, Doku' },
    { title: 'Abnahme', detail: 'Wirkung/Realismus und Ehrlichkeit/Recht/Technik' },
    { title: 'Nacharbeit', detail: 'Befunde umsetzen, neu rendern, prüfen' },
  ],
}

const R = '/home/user/Unternehmens-Kommunikation'
const FS2 = R + '/fallstudie-2-customer-journey'
const WEB = FS2 + '/konzept-website'
const VID = FS2 + '/werbevideo'
const SP = '/tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad/d10'
const REF = FS2 + '/praesentation/intern/roh'

const AUFTRAG = `
AUSLÖSER (Yannick, 04.11.2026, wörtlich): „Ja das passt als nächstes müsste ich das du ein kleines Werbevideo machst für Holy aber im Style unserer Konzeptes. Für die Stimme habe ich ein API Key von Elevenlabs in der Cloudsitzung hinterlegt. Mache ein kleines Video welches realistisch aussieht und den Geist des Konzeptes wiedergibt“

KONTEXT: Studentische Fallstudie 2 (Customer Journey) zur Marke HOLY (HOLY Softdrinks GmbH, Pulver-Energy-Drinks). Persona „Marco“ (fiktiv) sieht ein Creator-Video, landet auf einer Landingpage, liest den Koffein-Check, kauft, tritt dem Squad (SQUAD Rewards) bei. Unser Konzept („Zahlen statt Versprechen“, Du-Ansprache, keine Sackgasse, Code ist schon drin, erst nachlesen dann entscheiden, Preis je Portion und Endpreis vorab, Squad in einem Schritt) steckt in der Konzept-Webseite ${WEB}/ (7 Seiten, Stand Commit 3521a2d, Gestaltung „Kampagne“: HOLY-Pink #F28DBA als Sortenfarbe Raspberry Raptor, Zitrone/Gelb, Schwarz #1D1D1B, Creme, Lila; Überschriften Bricolage Grotesque schmal und sehr fett, Fließtext Inter – Schriften lokal in ${WEB}/schriften/ mit Lizenz). Lies zuerst ${WEB}/README.md, ${WEB}/index.html, ${WEB}/produkt.html, ${WEB}/assets/konzept.css und die Bildschirmfotos in ${WEB}/_vorschau/ und ${WEB}/intern/vorschau/ (Read-Werkzeug). Ziel: ein kurzes Werbevideo (Spot) für HOLY Energy Raspberry Raptor, das so aussieht und klingt wie ein echter, professioneller Social-Media-Spot, und den Geist des Konzepts trägt.

FESTE VORGABEN (von der Hauptsitzung festgelegt):
- Format: Hochformat 9:16, 1080 × 1920, 30 fps, Länge 20–30 Sekunden. Deutsch.
- Stimme: ElevenLabs. Der API-Schlüssel wird vom Netzwerk-Proxy der Sitzung automatisch eingesetzt: einfach https://api.elevenlabs.io aufrufen OHNE eigenen Schlüssel-Header. Niemals nach dem Schlüssel suchen, ihn auslesen, ausgeben oder in Dateien schreiben. Erlaubte Stimmen: vorgefertigte („premade“) Stimmen mit dem Modell eleven_multilingual_v2 (oder eleven_v3, falls verfügbar) auf Deutsch, oder die synthetisch gestalteten Stimmen 7gDXY3ZXRHAmjR3Z7Guf („simpleact-design-a“) und 1ZBEaCGxeV794wdwBQr4 („simpleact-design-b“). VERBOTEN: die geklonte Stimme o3F1PJYpP2skP4ejJ6um und jede Stimmklonung; keine Nachahmung realer Personen. Verbrauch: Kontingent ca. 38.000 Zeichen; der ganze Workflow darf höchstens 8.000 Zeichen für Sprache verbrauchen – Hörproben kurz halten, Ergebnisse zwischenspeichern und wiederverwenden.
- Videobotschaft des Gründers (${FS2}/praesentation/video/) NICHT ansehen, NICHT anhören, NICHT verwenden, nichts daraus zitieren. Keine Zitate „No Bullshit“/„Zero Bullshit“, kein „mehr trinken“.
- Bildmaterial: nur vorhandene, veröffentlichte HOLY-Bilder aus ${WEB}/fremdbilder/ und ${FS2}/praesentation/fremdbilder/ (Register register.js mit Herkunft je Bild; Rechtestatus: Veröffentlichung von der Gruppe beschlossen, KI-Nachweis FS2 Nr. 17, keine Genehmigung der Rechteinhaber eingeholt; nicht kommerziell, für die Lehrveranstaltung), Ausschnitte daraus, Rohdateien in ${REF}/produkt/ (nur Produktbilder; keine Gesichter oder Namen von Privatpersonen), die HOLY-Wortmarke wie auf der Konzept-Webseite (mit Einverständnis, Nr. 12), echte Bildschirmaufnahmen der Konzept-Webseite (lokal per Playwright, Fassung mit Bildern) und eigene Grafik/Typo/Animation. Keine neuen Downloads aus dem Internet, keine Stock-Videos, keine KI-Bildgenerierung von Menschen.
- PFLICHT im Video (nicht verhandelbar, das Video ist öffentlich und trägt HOLYs Marke): (a) während des ganzen Videos lesbar eine dezente Zeile „Studentisches Konzept (HS Kaiserslautern) · keine Werbung der HOLY Softdrinks GmbH“ (darf klein sein, aber auf dem Handy lesbar: mind. 26 px Schrifthöhe bei 1080 px Breite, Kontrast ≥ 4,5:1); (b) Hinweis „Stimme KI-generiert“ sichtbar (mind. zu Beginn oder am Ende, besser dauerhaft in derselben Zeile); (c) Altershinweis wie auf der Webseite, mind. auf der Endkarte: „Nicht für unter 18, Schwangere und Stillende · eine Portion pro Tag“ (laut Etikett); (d) wenn ein Creator-Code gezeigt wird: „Werbung“ daneben, Code nur als Platzhalter „CREATOR10“; (e) Endkarte mit vollem Hinweis „Studentisches Konzept der Gruppe (HS Kaiserslautern) – keine Website und keine Werbung der HOLY Softdrinks GmbH · keine Bestellung möglich“ mind. 2 Sekunden.
- Fakten nur mit Beleg: Nur Aussagen, die schon auf der Konzept-Webseite stehen (dort mit Befund-ID im Code/Kommentar) oder im Dossier ${FS2}/recherche-customer-journey.md mit Befund-ID belegt sind. Beispiele, die auf der Seite stehen: 160 mg Koffein je Portion (7 g auf 500 ml, S92), 32 mg pro 100 ml, 0,1 g Zucker pro 100 ml zubereitet (R06/R14), 50 Portionen 39,99 € = 0,80 € je Portion (B09/T20), Mix & Match bis 20 % (T22), 4,87 von 5 aus 1.409 Bewertungen (T17), Versand ab 49 € frei (B12/T20), 10 Coins pro Euro im Squad. „30 Tage Zufriedenheitsgarantie – egal, wo du kaufst“ ist ein VORSCHLAG der Gruppe und darf nur mit sichtbarem „Vorschlag der Gruppe“ vorkommen (oder weglassen). Jede Zahl/Aussage im Drehbuch mit Befund-ID belegen und an der Quelle nachprüfen. KEINE gesundheits- oder leistungsbezogenen Versprechen (nicht „macht wach“, „mehr Fokus“, „mehr Leistung“, „gesund“, „Vitamine“, „NewCaff“ o. Ä.), keine Superlative ohne Beleg, nichts gegen Wettbewerber. Ton: selbstbewusst, locker, Du-Ansprache, ehrlich – „Zahlen statt Versprechen“.
- Realismus: Der Spot soll NICHT wie eine Diashow oder ein Erklärvideo wirken, sondern wie ein echter Marken-Spot: flüssige Bewegungen mit Easing (Parallax, Zoom, Masken, Wischer), Schnitte im Takt, kinetische Typografie in Bricolage Grotesque, Produktfotos groß und scharf (nicht über die Originalauflösung hinaus vergrößern, sonst unscharf), echte Bedienung der Konzept-Webseite auf einem Handy-Bildschirm, Tonmischung mit Musik/Beat unter der Stimme und kleinen Sounds (Wisch, Klick, Plopp). Ton: ElevenLabs kann auch Soundeffekte (POST /v1/sound-generation) und ggf. Musik (POST /v1/music) – ausprobieren; wenn nicht verfügbar, Musik weglassen oder mit Soundeffekten einen kurzen Beat bauen; keine Musik aus dem Internet.
- Ablage: Endprodukte in ${VID}/ (versioniert, wird auf GitHub Pages öffentlich), Zwischenstände in ${VID}/intern/ (per .gitignore ausgeschlossen) bzw. im Scratchpad ${SP}/. Nichts außerhalb von ${VID}/ und ${SP}/ ändern (Konzept-Webseite und Präsentation nur lesen). Nichts committen/pushen, kein git reset/checkout/stash. Keine Namen von KI-Modellen in Dateien (Werkzeugname „ElevenLabs“ ist erlaubt). Sprache aller Dateien Deutsch.
- Quellen: Gib für jede Aussage die Befund-ID bzw. Datei an, für jedes Bild den Registerschlüssel; kennzeichne, was aus Modellwissen stammt.
`

const DREHBUCH_SCHEMA = {
  type: 'object',
  properties: {
    key: { type: 'string' },
    titel: { type: 'string' },
    idee: { type: 'string', description: 'Leitidee in 2–4 Sätzen, Bezug zum Konzept' },
    drehbuch_datei: { type: 'string' },
    storyboard_bilder: { type: 'array', items: { type: 'string' } },
    sprechertext: { type: 'string', description: 'kompletter Sprechertext wörtlich' },
    zeichen: { type: 'number' },
    laenge_s: { type: 'number' },
    belege: { type: 'string', description: 'jede Aussage mit Befund-ID/Datei' },
    hoerprobe: { type: 'string', description: 'Pfad zur kurzen Hörprobe der gewählten Stimme oder leer' },
    stimme: { type: 'string' },
    risiken: { type: 'string' },
  },
  required: ['key', 'titel', 'idee', 'drehbuch_datei', 'storyboard_bilder', 'sprechertext', 'zeichen', 'laenge_s', 'belege', 'stimme', 'risiken'],
}

const RICHTUNGEN = [
  { key: 'code-drin', titel: 'Der Weg aus dem Video', text: 'Richtung „Der Weg aus dem Video“: Der Spot erzählt Marcos Weg in Echtzeit als Creator-Short-Ästhetik – Daumen tippt auf den Link, die Landingpage „Dein Code ist schon drin.“ öffnet sich, Koffein-Check, Packung, Warenkorb mit Liefertermin, Squad in einem Klick. Echte Bildschirmaufnahmen der Konzept-Webseite in einem Handy, dazwischen große Produktmomente. Kernsatz sinngemäß: „Kein Suchen, kein Abtippen.“' },
  { key: 'zahlen', titel: 'Zahlen statt Versprechen', text: 'Richtung „Zahlen statt Versprechen“: Ein Produkt-Spot, der bewusst keine leeren Werbeversprechen macht, sondern nur belegte Zahlen groß und rhythmisch inszeniert (160 mg, 0,1 g Zucker, 0,80 € je Portion, 4,87 Sterne) – mit Raspberry-Raptor-Produktfotos in Bewegung, kinetischer Typo, Beat. Selbstironische Note: „Wir könnten dir jetzt viel versprechen …“ (ohne die verbotenen Zitate).' },
  { key: 'erst-lesen', titel: 'Erst nachlesen, dann entscheiden', text: 'Richtung „Erst nachlesen, dann entscheiden“: Ein ruhigerer, hochwertiger Spot mit Fokus auf Transparenz – Frage „Wie viel Koffein ist okay?“ im Bild, Antwort als Text, dann Produktinszenierung und Einladung in den Squad. Wirkt wie ein Premium-Markenspot (langsame Kamerafahrten über Produktfotos, Lichtkanten, edle Typo), trotzdem HOLY-laut in Farbe.' },
]

phase('Drehbücher')
const entwuerfe = await parallel(RICHTUNGEN.map((r) => () => agent(`${AUFTRAG}

DEINE AUFGABE (Drehbuch-Autor, Richtung „${r.key}“): ${r.text}
1. Schreibe ein Drehbuch nach ${SP}/${r.key}/drehbuch.md: Einstellungen mit Zeitcode (Sekundengenau), Bild (was genau, welche Datei/welcher Registerschlüssel, welche Bewegung), Bildschirmtext, Sprechertext, Ton/Musik/Soundeffekte, Pflichtkennzeichnungen (wo und wie), Belegliste mit Befund-IDs. Sprechertext höchstens 380 Zeichen (passt in 20–30 s).
2. Baue 4–6 Storyboard-Standbilder als HTML/CSS mit den lokalen Schriften und echten Bildern, gerendert per Playwright (require('playwright') bzw. PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core; chromium.launch() mit Netz nach außen gesperrt) als PNG 540 × 960 nach ${SP}/${r.key}/storyboard/. Sie sollen den echten Look zeigen (nicht skizzenhaft). Sieh sie dir selbst mit dem Read-Werkzeug an und verbessere sie.
3. Wähle eine passende Stimme (siehe erlaubte Stimmen; GET https://api.elevenlabs.io/v2/voices listet sie) und erzeuge EINE Hörprobe von höchstens 200 Zeichen mit deinem Sprechertext-Anfang (POST /v1/text-to-speech/{voice_id}, model_id eleven_multilingual_v2, Ausgabe mp3) nach ${SP}/${r.key}/hoerprobe.mp3. Prüfe mit ffprobe Länge und hochgerechnetes Tempo (passt der ganze Text in die Länge?).
Gib die Felder des Schemas zurück (key = „${r.key}“).`, { label: `drehbuch:${r.key}`, phase: 'Drehbücher', schema: DREHBUCH_SCHEMA })))

const ok = entwuerfe.filter(Boolean)
log(`Drehbücher fertig: ${ok.map((e) => e.key).join(', ')}`)

const URTEIL_SCHEMA = {
  type: 'object',
  properties: {
    bewertungen: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          key: { type: 'string' },
          realismus: { type: 'number' }, konzepttreue: { type: 'number' }, wirkung: { type: 'number' },
          ehrlichkeit: { type: 'number' }, machbarkeit: { type: 'number' }, stimme: { type: 'number' },
          summe: { type: 'number' }, staerken: { type: 'string' }, schwaechen: { type: 'string' },
        },
        required: ['key', 'realismus', 'konzepttreue', 'wirkung', 'ehrlichkeit', 'machbarkeit', 'stimme', 'summe', 'staerken', 'schwaechen'],
      },
    },
    empfehlung_uebernehmen: { type: 'string', description: 'gute Ideen aus den anderen Entwürfen für den Sieger' },
  },
  required: ['bewertungen', 'empfehlung_uebernehmen'],
}

phase('Jury')
const LINSEN = [
  { key: 'wirkung', text: 'Du bewertest als Kreativdirektor/in einer Social-Media-Agentur: Würde das wie ein echter, professioneller HOLY-Spot wirken? Stoppt es den Daumen in den ersten 2 Sekunden? Trägt es den Geist des Konzepts? Passt die Stimme (Hörprobe anhören ist nicht möglich – beurteile Stimmwahl, Tempo laut ffprobe-Länge und Text)?' },
  { key: 'ehrlichkeit', text: 'Du bewertest als Prüfer/in für Ehrlichkeit, Recht und Machbarkeit: Jede Aussage belegt (Stichproben im Dossier und auf der Webseite nachprüfen)? Pflichtkennzeichnungen vollständig und lesbar? Keine gesundheitsbezogenen Versprechen, keine verbotenen Zitate, keine geklonte Stimme? Mit vorhandenem Material und Werkzeugen (ffmpeg, Playwright, ElevenLabs) in hoher Qualität umsetzbar?' },
]
const urteile = await parallel(LINSEN.map((l) => () => agent(`${AUFTRAG}

JURY. ${l.text}
Bewerte diese drei Entwürfe (Drehbuch lesen, alle Storyboard-Bilder mit dem Read-Werkzeug ansehen):
${ok.map((e) => `- ${e.key}: Drehbuch ${e.drehbuch_datei}; Storyboard ${e.storyboard_bilder.join(', ')}; Sprechertext „${e.sprechertext}“ (${e.zeichen} Zeichen, ${e.laenge_s} s); Stimme ${e.stimme}; Hörprobe ${e.hoerprobe || '–'}; Belege: ${e.belege}`).join('\n')}
Vergib je Kriterium 1–10 (realismus, konzepttreue, wirkung, ehrlichkeit, machbarkeit, stimme), summe = Summe. Begründe mit konkreten Beobachtungen. Ändere keine Dateien.`, { label: `jury:${l.key}`, phase: 'Jury', schema: URTEIL_SCHEMA })))

const punkte = {}
for (const u of urteile.filter(Boolean)) for (const b of u.bewertungen) punkte[b.key] = (punkte[b.key] || 0) + b.summe
const sieger = ok.map((e) => e.key).sort((a, b) => (punkte[b] || 0) - (punkte[a] || 0))[0]
const siegerE = ok.find((e) => e.key === sieger)
log(`Jury: ${Object.entries(punkte).map(([k, v]) => `${k} ${v}`).join(' · ')} → Sieger ${sieger}`)

const PROD_SCHEMA = {
  type: 'object',
  properties: {
    dateien: { type: 'array', items: { type: 'string' } },
    video: { type: 'string' },
    technik: { type: 'string', description: 'ffprobe-Werte, Lautheit, Größe' },
    erledigt: { type: 'string' },
    pruefungen: { type: 'string' },
    zeichen_verbraucht: { type: 'number' },
    offen: { type: 'array', items: { type: 'string' } },
    hinweise_hauptsitzung: { type: 'string' },
  },
  required: ['dateien', 'video', 'technik', 'erledigt', 'pruefungen', 'zeichen_verbraucht', 'offen', 'hinweise_hauptsitzung'],
}

phase('Produktion')
const prod = await agent(`${AUFTRAG}

PRODUKTION. Sieger der Jury ist „${sieger}“ (Punkte: ${JSON.stringify(punkte)}). Drehbuch: ${siegerE.drehbuch_datei}, Storyboard: ${siegerE.storyboard_bilder.join(', ')}, Stimme: ${siegerE.stimme}, Hörprobe: ${siegerE.hoerprobe || '–'}.
Jury-Urteile (Auflagen ernst nehmen, gute Ideen der anderen Entwürfe übernehmen):
${JSON.stringify(urteile.filter(Boolean), null, 1)}
Andere Entwürfe zum Übernehmen von Ideen: ${ok.filter((e) => e.key !== sieger).map((e) => `${e.key}: ${e.drehbuch_datei}`).join('; ')}

Produziere den fertigen Spot:
1. Endgültiges Drehbuch nach ${VID}/drehbuch.md (mit Belegliste je Aussage, Bildliste mit Registerschlüsseln, Zeitcodes).
2. Sprache mit ElevenLabs (bevorzugt POST /v1/text-to-speech/{voice_id}/with-timestamps für wortgenaue Untertitel). Höchstens 3 vollständige Durchläufe; Ergebnisse in ${VID}/intern/ zwischenspeichern. Stimmeinstellungen bewusst wählen (stability, similarity_boost, style), Aussprache prüfen (z. B. „HOLY“ englisch „Holi“, Zahlen und Einheiten „Milligramm“, „Euro“ ausgeschrieben wenn nötig). Zur Kontrolle der Aussprache darfst du die eigene erzeugte Sprachdatei mit ElevenLabs Speech-to-Text (POST /v1/speech-to-text, model_id scribe_v1) zurückschreiben lassen und mit dem Text vergleichen.
3. Bild: Empfohlen ist eine deterministisch animierte HTML-Bühne 1080 × 1920 (CSS/JS mit einer Funktion window.__setTime(t), keine Zufallswerte), die per Playwright Bild für Bild (30 fps) gerendert und mit ffmpeg zusammengesetzt wird; Bildschirmaufnahmen der Konzept-Webseite als Bildfolgen (gleiches Prinzip: scrollen/klicken zeitgesteuert) oder als Playwright-Videoaufnahme. Bewegungen mit Easing, Bewegungsunschärfe oder Überblendungen wo nötig, keine Ruckler. Pflichtkennzeichnungen wie vorgegeben.
4. Ton: Stimme + Musik/Beat (ElevenLabs Musik oder Soundeffekte, s. o.) + Soundeffekte; Stimme klar vorne (Musik ca. 12–18 dB darunter, unter der Stimme abgesenkt), Gesamtlautheit ca. −14 LUFS integriert, Spitzen ≤ −1 dBTP (ffmpeg loudnorm, Messung mit ebur128).
5. Ausgabe: ${VID}/holy-werbespot.mp4 (H.264 High, yuv420p, 1080 × 1920, 30 fps, AAC 48 kHz Stereo, +faststart, ≤ 15 MB, 20–30 s), ${VID}/holy-werbespot-poster.jpg (aussagekräftiges Standbild), ${VID}/holy-werbespot.de.vtt (Untertitel, Zeiten aus den Zeitstempeln), ${VID}/werkzeuge/ (Bühne und Bau-Skript, das den Spot aus den Zwischenständen in ${VID}/intern/ reproduzierbar baut; keine Schlüssel im Code), ${VID}/README.md (Was, Länge, Format, Herkunft jedes Bildes mit Registerschlüssel und Rechtestatus, Stimme: ElevenLabs, Name der vorgefertigten/gestalteten Stimme, „KI-generiert“, Musik/Sounds: Herkunft, Belege der Aussagen, Pflichtkennzeichnungen, wie man neu baut, Prüfstand, offene Punkte für die Gruppe). Eine Abspielseite ist NICHT nötig.
6. Prüfe selbst: ffprobe-Werte; Lautheit; Standbilder je Sekunde mit ffmpeg nach ${VID}/intern/pruefbilder/ und einen Kontaktbogen; alle mit dem Read-Werkzeug ansehen (Lesbarkeit der Pflichtzeile, Schärfe der Produktbilder, Ränder, Tippfehler); Untertitel gegen Sprechertext; Aussprache per Speech-to-Text. Verbessere, bis es wie ein echter Spot aussieht.
Gib außerdem in hinweise_hauptsitzung an: Stimme (Name, ID), verbrauchte Zeichen, alle Befund-IDs, was aus Modellwissen stammt.`, { label: 'produktion', phase: 'Produktion', schema: PROD_SCHEMA })

const ABN_SCHEMA = {
  type: 'object',
  properties: {
    befunde: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
          stelle: { type: 'string', description: 'Zeitcode oder Datei' },
          problem: { type: 'string' },
          beleg: { type: 'string' },
          vorschlag: { type: 'string' },
        },
        required: ['schwere', 'stelle', 'problem', 'beleg', 'vorschlag'],
      },
    },
    fazit: { type: 'string' },
  },
  required: ['befunde', 'fazit'],
}

phase('Abnahme')
const PRUEFER = [
  { key: 'wirkung', text: 'ABNAHME Wirkung/Realismus: Sieht und klingt der Spot wie ein echter professioneller Marken-Spot für Social Media? Prüfe Einstieg (erste 2 s), Tempo, Schnitt im Takt, Flüssigkeit (Bild für Bild um die Übergänge herum: ffmpeg -ss … -frames), Schärfe der Produktbilder, Typo, Farben (Kampagnen-Look der Konzept-Webseite), Lesbarkeit auf dem Handy, Stimme (Tempo, Betonung; Aussprache per ElevenLabs Speech-to-Text der Tonspur prüfen, nur unsere eigene Datei), Musik/Mischung (ebur128, Abstand Stimme–Musik), Untertitel. Trägt er den Geist des Konzepts?' },
  { key: 'ehrlichkeit', text: 'ABNAHME Ehrlichkeit/Recht/Technik: Jede Aussage in Bild und Ton gegen Befund-ID im Dossier bzw. auf der Konzept-Webseite prüfen; keine gesundheits-/leistungsbezogenen Versprechen; Pflichtkennzeichnungen (a)–(e) vorhanden, lesbar (Schrifthöhe messen, Kontrast rechnen) und über die volle Dauer; keine geklonte Stimme (README und Bau-Skript prüfen), keine verbotenen Zitate, nichts aus der Gründer-Videobotschaft; Bildherkunft je Bild belegt (Register), keine Gesichter/Namen von Privatpersonen; keine Schlüssel in Dateien (grep nach „xi-api-key“, „sk_“); technische Werte (ffprobe: Codec, Profil, yuv420p, faststart, Größe, Länge, Audio 48 kHz), Reproduzierbarkeit des Bau-Skripts (Trockenlauf/Lesen), README vollständig, keine Modellnamen in Dateien, .gitignore greift für intern/.' },
]
const abnahmen = await parallel(PRUEFER.map((p) => () => agent(`${AUFTRAG}

${p.text}
Ergebnis der Produktion: ${JSON.stringify(prod)}
Arbeite auf dem fertigen Spot ${VID}/holy-werbespot.mp4 und den Dateien in ${VID}/. Eigene Prüfbilder nach ${SP}/abnahme-${p.key}/. Ändere keine Dateien in ${VID}/. Sieh dir Standbilder mit dem Read-Werkzeug an. Gib Befunde mit Schwere (hoch/mittel/niedrig), Zeitcode, Beleg und konkretem Vorschlag zurück.`, { label: `abnahme:${p.key}`, phase: 'Abnahme', schema: ABN_SCHEMA })))

phase('Nacharbeit')
const befunde = abnahmen.filter(Boolean).flatMap((a, i) => a.befunde.map((b) => ({ pruefer: PRUEFER[i].key, ...b })))
log(`Abnahme: ${befunde.length} Befunde (hoch ${befunde.filter((b) => b.schwere === 'hoch').length}, mittel ${befunde.filter((b) => b.schwere === 'mittel').length})`)
const nacharbeit = await agent(`${AUFTRAG}

NACHARBEIT am Spot. Ergebnis der Produktion: ${JSON.stringify(prod)}
Befunde der Abnahme:
${JSON.stringify(befunde, null, 1)}
Fazits: ${JSON.stringify(abnahmen.filter(Boolean).map((a) => a.fazit))}
Prüfe jeden Befund zuerst selbst. Setze alle zutreffenden hohen und mittleren Befunde um, niedrige, wenn sie günstig sind. Neue Sprachaufnahmen nur, wenn nötig (Zeichenbudget beachten). Baue den Spot mit dem Bau-Skript neu, prüfe erneut (ffprobe, Lautheit, Standbilder je Sekunde ansehen, Untertitel, Speech-to-Text) und ziehe README und Drehbuch nach. Gib zurück, was umgesetzt ist, was nicht (mit Grund), Prüfergebnisse, verbrauchte Zeichen gesamt, offene Punkte für die Gruppe.`, { label: 'nacharbeit', phase: 'Nacharbeit', schema: PROD_SCHEMA })

return { entwuerfe: ok, urteile, punkte, sieger, prod, abnahmen, nacharbeit }
