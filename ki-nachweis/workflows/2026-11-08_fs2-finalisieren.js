export const meta = {
  name: 'fs2-finalisieren',
  description: 'Präsentation Fallstudie 2 finalisieren: Platzhalter der eigenen Erhebung ehrlich ersetzen, Werbespot auf Folie 08, Redeskript als PDF, Abnahme, Nacharbeit',
  phases: [
    { title: 'Umbau', detail: 'Platzhalter, Titel, Sprechtexte, Backup, Spot-Knopf, Doku' },
    { title: 'Redeskript', detail: 'Redetext je Folie als Markdown und PDF' },
    { title: 'Abnahme', detail: 'Inhalt/Ehrlichkeit und Technik/Vortrag' },
    { title: 'Nacharbeit', detail: 'Befunde umsetzen, Redeskript neu erzeugen' },
  ],
}

const R = '/home/user/Unternehmens-Kommunikation'
const FS1 = R + '/fallstudie-1-brand-persona'
const FS2 = R + '/fallstudie-2-customer-journey'
const P = FS2 + '/praesentation'
const SP = '/tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad/d12'
const PW = 'PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core'

const AUFTRAG = `
AUSLÖSER (Yannick, 08.11.2026, wörtlich): „Finalisiere die Präsentation“
Rückfragen der Hauptsitzung und Antworten von Yannick:
1. Platzhalter der eigenen Erhebung (O-Töne auf 02, „Tipp unter Kollegen“ auf 03, „(vorläufig)“ auf 05, Workshop-Foto b12 auf 06, Handskizze b15 auf 07, Selbstversuch B1, Kurzinterviews B5) – im Repository liegen keine Ergebnisse → „Ohne Erhebung (Empfohlen): Alle ‚offen'-Platzhalter raus. Folien ehrlich umformulieren: Grundlage ist unsere Analyse von Dossier, Shop und Stichproben, keine eigene Befragung. Nichts wird erfunden.“
2. Werbespot „Mein Moment.“ (${FS2}/werbevideo/holy-werbespot.mp4, README dort) → „Auf Folie 08: ein kleiner Knopf ‚Spot ansehen' neben ‚Live-Demo', abspielbar in der Präsentation (ca. 25 s, kostet Redezeit).“
3. Zusätzlich → „Redeskript als PDF: Sprechtexte je Person und Folie zum Ausdrucken, wie in Fallstudie 1.“ (NICHT gewählt: Notfall-PDF/Übersicht, Wortkürzung – Wortbudget-Warnungen also nicht abarbeiten.)

PRÄSENTATION: ${P}/ (Web-Präsentation, 18 Folien 01–09 und B1–B9, Vortrag Di 10.11.2026, 15 Minuten). Lies zuerst ${P}/LIESMICH.md (v. a. §3, §8, §10, §12), ${P}/AUTOREN.md, ${P}/QUELLEN.md, ${P}/index.html (Folien mit Kästen „FOLIE xx“ als Kommentar und Sprechtexten in <aside class="notizen">), ${FS2}/gestaltungsplan.md (Abweichungen 7.3/13), ${FS2}/README.md und das Dossier ${FS2}/recherche-customer-journey.md (Befund-IDs; die „Agenten-Stichproben A–E“ ✎/~ B20–B24 sind KI-gestützte Stichproben, KEIN Selbstversuch der Gruppe). Prüfwerkzeug: cd ${P} && ${PW} node werkzeuge/pruefen.mjs index.html --ausgabe _test/<name> --schritte [--modus dunkel] [--oeffentlich --druck _test/<name>/p.pdf]. Ausgangsstand: 0 Fehler, 17 Warnungen (alle Wortbudget/Schriftgröße, bewusst), 38 Fremdbilder eingesetzt, 23 Klicks, Sollzeit 710 s. Die Videobotschaft auf 09 (video/gruender-video.mp4) ist H.264; das Test-Chromium kann kein H.264 – Abspiel-Logik mit einem synthetischen WebM per page.route(..., r => r.fulfill({path, contentType:'video/webm'})) testen (ffmpeg -f lavfi -i testsrc … -c:v libvpx).

REGELN:
- NICHTS ERFINDEN: keine O-Töne, keine Interviewzahlen, keine Workshop-Ergebnisse, keine Selbstversuchsdaten, keine Fotos der Gruppe. Wo die Folie bisher eine eigene Erhebung ankündigte, ehrlich sagen, worauf die Aussage stattdessen beruht (Dossier mit Befund-IDs, Abruf von Shop/Help-Center/Bewertungsportalen, KI-gestützte Stichproben) – und wo nötig, dass es keine eigene Befragung gab. Urteile, die nur Hypothese (H) sind, als solche stehen lassen. „(vorläufig)" und „offen"-Kacheln verschwinden aus der sichtbaren Präsentation; dafür KEINE neuen Fremdbilder herunterladen (vorhandene aus fremdbilder/register.js dürfen umgesetzt werden, mit Bildnachweis).
- Persona Marco bleibt fiktiv (FS1). Fakten nur mit Befund-ID. Zitate des Gründers nur „laut Gründer"; Gründer-Video nicht ansehen/anhören. Keine Namen von Privatpersonen.
- Folienstruktur, Klickzahl (außer dem Spot-Knopf) und Gestaltung („Pfad", gestaltungsplan) bleiben; Titel als Kernaussage. Keine Wortkürzungen über das Nötige hinaus.
- Rollen für Fallstudie 2 sind NICHT verteilt (CLAUDE.md). Im Redeskript daher „Spricht: Vorschlag …" klar als Vorschlag kennzeichnen (Vorschlag in Anlehnung an FS1-Bündel: 01–03 Yannick, 04–06 Lukas, 07–09 Elias) – die Gruppe entscheidet.
- Rechtestatus-Formulierungen beibehalten (Fremdbilder: Veröffentlichung von der Gruppe beschlossen, KI-Nachweis FS2 Nr. 17, keine Genehmigung der Rechteinhaber eingeholt; Logo mit Einverständnis Nr. 12; Videobotschaft mit Zustimmung des Gründers Nr. 18). Werbespot: studentisches Konzept, keine Werbung der HOLY Softdrinks GmbH, Stimme/Musik/Geräusche KI-generiert (ElevenLabs), KI-Nachweis FS2 Nr. 24/D11.
- Nur in ${P}/, ${FS2}/gestaltungsplan.md, ${FS2}/README.md und ${SP}/ ändern (Redeskript-Dateien nach ${FS2}/). Nichts committen/pushen, kein git reset/checkout/stash. Keine Namen von KI-Modellen in Dateien. Sprache Deutsch. Kennzeichnen, was aus Modellwissen stammt.
`

const ERG = {
  type: 'object',
  properties: {
    dateien: { type: 'array', items: { type: 'string' } },
    erledigt: { type: 'string' },
    pruefungen: { type: 'string' },
    offen: { type: 'array', items: { type: 'string' } },
    hinweise_hauptsitzung: { type: 'string' },
  },
  required: ['dateien', 'erledigt', 'pruefungen', 'offen', 'hinweise_hauptsitzung'],
}

phase('Umbau')
const umbau = await agent(`${AUFTRAG}

UMBAU (du allein änderst index.html, CSS, JS und Doku):
1. Inventur: Suche in index.html (sichtbar und Notizen, Kästen), CSS/JS, LIESMICH, QUELLEN nach allem, was eine eigene Erhebung voraussetzt oder als offen markiert ist: data-status="offen", „offen", „(vorläufig)", „vorläufig", „[erst nach", „Selbstversuch", „Kurzinterview", „Interview", „O-Ton", „Workshop", „b12", „b15", „Skizze", „Tipp unter Kollegen", „Nennungen", „n = …", „Datenschluss". Liste das vor dem Ändern nach ${SP}/inventur.md.
2. Umbau je Fundstelle nach den REGELN: sichtbare Folien 01–09 frei von „offen"/„vorläufig"/Platzhaltern; Titel von 05 als belegte Kernaussage ohne „(vorläufig)"; „So kommen wir darauf"-Zeilen ehrlich (Analyse von Dossier, Shop, Stichproben); 02 ohne O-Ton-Zeile; 03 ohne „Tipp unter Kollegen offen" (Owned/Earned-Zählung konsistent halten, Bildgrößen-Hinweis anpassen); 06 ohne Workshop-Kasten (Plätze 2 und 3 als Vorschlag der Gruppe, H); 07 ohne Skizze-b15-Kasten. Backup: B1 wird zu einer ehrlichen Methodenfolie (was wir geprüft haben – Quellen, Abrufdaten, KI-gestützte Stichproben – und was wir NICHT erhoben haben: kein Selbstversuch, keine Interviews, kein Workshop; Grenzen der Aussagekraft); B5 entsprechend (Bewertungen Dritter/Dossier statt eigener Interviews, oder in B1 zusammenführen, dann Sprungliste/Verweise anpassen); B9 KI-Tabelle ehrlich (Selbstversuch/Interviews: nicht durchgeführt). Alle Sprechtexte mit „[erst nach … so sprechen]" und Rückfrage-Antworten anpassen. Kästen „FOLIE xx" (Kommentare) aktualisieren. Kopfkommentar/Status: „Stand 08.11.2026 – finale Fassung (KI-gestützt), Prüfung durch die Gruppe offen" statt ENTWURF.
3. Werbespot auf Folie 08: kleiner Knopf „Spot ansehen ▶" neben „Live-Demo ↗" (gleiche Gestaltung). Klick öffnet eine Bühne über der Folie mit <video> (Quelle ../werbevideo/holy-werbespot.mp4, Poster ../werbevideo/holy-werbespot-poster.jpg, Untertitel-Spur ../werbevideo/holy-werbespot.de.vtt, playsinline, mit Ton), startet das Abspielen; Schließen per Knopf, Escape und automatisch am Ende; Tastatur der Präsentation (Pfeile/Leertaste/Clicker) darf währenddessen nicht weiterblättern bzw. muss sauber funktionieren – dokumentiere das Verhalten; kein Autoplay beim Betreten der Folie. Im Druck (?druck) und in der Übersicht nicht sichtbar bzw. ohne Wirkung. Fehlerfall (Datei fehlt/kein H.264): verständliche Meldung, Präsentation läuft weiter. Bildnachweis-/Kennzeichnung: neben dem Knopf oder in der Bühne „Studentisches Konzept · keine Werbung der HOLY Softdrinks GmbH · Stimme KI-generiert" (der Spot trägt die Kennzeichnung auch selbst). Sprechtext 08 um eine kurze Überleitung ergänzen („[optional, ca. 25 s] …") und data-zeit von 08 um 25 s erhöhen; Kasten 08 und LIESMICH (Bedienung) nachziehen. Keine externen Anfragen.
4. Doku: LIESMICH (Status, §10 Offen-Liste neu: nur noch, was die Gruppe tun muss, z. B. Generalprobe, Rollen verteilen, Rechtefragen; Bedienung Spot), QUELLEN (Werbespot, geänderte Belege), AUTOREN neuer Abschnitt „Finalisierung 08.11.2026 (D12)", gestaltungsplan.md Abweichung „keine eigene Erhebung (Entscheidung Yannick 08.11.2026, KI-Nachweis FS2 Nr. 26)", README FS2 Status.
5. Prüfen: pruefen.mjs hell --schritte, dunkel --schritte, Rückfall --oeffentlich --schritte: je 0 Fehler (Warnungen dürfen bleiben, neue Warnungen begründen); Klicks und Sollzeit melden. Spot-Knopf per Playwright mit synthetischem WebM (Route auf ../werbevideo/holy-werbespot.mp4) testen: öffnen, spielt, Escape schließt, Ende schließt, Blättern danach normal, ohne Route (H.264 im Test-Chromium) Fehlermeldung statt Absturz, ?druck ohne Knopf. Alle 18 Folien-Screenshots (Endzustand) mit dem Read-Werkzeug ansehen, dazu 08 mit geöffneter Spot-Bühne. Volltextsuche: kein sichtbares „offen"/„vorläufig"/„[erst nach" mehr (Notizen nur noch, wo inhaltlich nötig).
Rückgabe: geänderte Dateien, was erledigt ist (je Folie), Prüfergebnisse (Zahlen), offene Punkte, Hinweise für die Hauptsitzung (inkl. was aus Modellwissen stammt).`, { label: 'umbau', phase: 'Umbau', schema: ERG })

phase('Redeskript')
const REDE_AUFTRAG = `${AUFTRAG}

REDESKRIPT nach dem Vorbild von Fallstudie 1: ${FS1}/redeskript.md (Aufbau, Zeichen ▶ Klick n, Regie kursiv in eckigen Klammern, ✂/⚠, Tabelle „Ablauf auf einen Blick" mit Folie, Spricht, Soll, Ende bei, Klicks, Wörter, gesprochen ≈ bei 1,9 Wörtern/s) und ${FS1}/Fallstudie-1_Redeskript.pdf, erzeugt mit ${R}/ki-nachweis/workflows/2026-10-25_redeskript-generator.py (lesen und für FS2 anpassen).
Erzeuge ${FS2}/redeskript.md und ${FS2}/Fallstudie-2_Redeskript.pdf aus den Notizen der FINALEN ${P}/index.html (Sprechtexte wörtlich übernehmen, Klicks aus data-schritt, Sollzeiten aus data-zeit, Folie 08 mit optionalem Spot ca. 25 s und Live-Demo nur aus der Reserve). Kopf: „Redeskript – Fallstudie 2: Customer Journey (HOLY)", Vortrag Di 10.11.2026, Stand 08.11.2026, KI-gestützt erstellt (KI-Nachweis FS2 Nr. 26, D12), Prüfung durch die Gruppe offen. Sprecherverteilung als VORSCHLAG (01–03 Yannick, 04–06 Lukas, 07–09 Elias) deutlich so gekennzeichnet; Übergabesätze zwischen Sprechern als Regie vorschlagen. Danach Backup-Folien kurz: je Folie „Wann zeigen" und 1–3 Antwortsätze aus den Notizen. Zeitrechnung: Summe Soll vs. 15:00, gesprochene Wörter, Kürzungsvorrat (✂) aus den Notizen. Den angepassten Generator nach ${FS2}/werkzeuge-redeskript/redeskript-generator.py legen (relative Pfade, reproduzierbar), PDF mit derselben Technik wie FS1 (falls weasyprint/Chromium-Druck: lokal, Schriften lokal). PDF-Seiten als PNG rendern und mit dem Read-Werkzeug ansehen (Lesbarkeit, Umbrüche, keine abgeschnittenen Tabellen). Wörtlichkeit prüfen: jeden Sprechtext im Skript gegen index.html vergleichen (Skript).
Rückgabe: Dateien, erledigt, Prüfungen (Seitenzahl, Wörter, Zeiten), offen, Hinweise.`
const rede = await agent(REDE_AUFTRAG + `\nErgebnis des Umbaus: ${JSON.stringify(umbau)}`, { label: 'redeskript', phase: 'Redeskript', schema: ERG })

phase('Abnahme')
const ABN = {
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
  { key: 'inhalt', text: `ABNAHME Inhalt/Ehrlichkeit: Ist irgendwo (Folien, Notizen, Backup, Redeskript, Doku) eine eigene Erhebung behauptet oder angedeutet, die es nicht gab (Selbstversuch, Interviews, O-Töne, Workshop, Fotos der Gruppe)? Sind KI-gestützte Stichproben als solche gekennzeichnet? Stimmen Titel und Aussagen mit den Belegen (Befund-IDs im Dossier – Stichproben nachprüfen)? Sind Urteile ohne eigene Erhebung noch haltbar formuliert? Ist die Geschichte der Präsentation nach dem Entfernen der Platzhalter schlüssig (Leitfaden Stenger S. 107 ff., Aufgaben A1–A7 laut README/Plan)? Sprechtexte natürlich und vortragbar? Redeskript wörtlich gleich den Notizen? Sprecherverteilung klar als Vorschlag? Rechtestatus- und KI-Kennzeichnungen korrekt?` },
  { key: 'technik', text: `ABNAHME Technik/Vortrag: pruefen.mjs selbst laufen lassen (hell und dunkel --schritte, --oeffentlich --schritte, mit --druck), Zahlen melden; Spot-Knopf auf 08 selbst testen (synthetisches WebM per Route, Escape, Ende, Tastatur, Referentenansicht P, Übersicht O, ?druck, fehlende Datei); Folie 09 Videobotschaft unverändert funktionsfähig; alle 18 Folien ansehen (Layout, Überlauf, angeschnittene Elemente, Lesbarkeit hell/dunkel); Zeit: Summe data-zeit vs. 15 min und gesprochene Wörter (1,9 W/s); Redeskript-PDF als PNG rendern und ansehen (Lesbarkeit beim Ausdrucken, Tabellen, Umbrüche), Generator reproduzierbar; keine externen Anfragen; keine Modellnamen in Dateien; LIESMICH-Bedienung stimmt mit dem Verhalten überein.` },
]
const abnahmen = (await parallel(PRUEFER.map((p) => () => agent(`${AUFTRAG}\n\n${p.text}\nUmbau: ${JSON.stringify(umbau)}\nRedeskript: ${JSON.stringify(rede)}\nEigene Ausgaben nach ${SP}/abnahme-${p.key}/ bzw. ${P}/_test/abnahme-${p.key}/. Ändere keine Dateien im Repository. Befunde mit Schwere, Stelle, Beleg, Vorschlag.`, { label: `abnahme:${p.key}`, phase: 'Abnahme', schema: ABN })))).filter(Boolean)
const befunde = abnahmen.flatMap((a, i) => a.befunde.map((b) => ({ pruefer: PRUEFER[i].key, ...b })))
log(`Abnahme: ${befunde.length} Befunde (hoch ${befunde.filter((b) => b.schwere === 'hoch').length}, mittel ${befunde.filter((b) => b.schwere === 'mittel').length})`)

phase('Nacharbeit')
const nacharbeit = await agent(`${AUFTRAG}\n\nNACHARBEIT. Umbau: ${JSON.stringify(umbau)}\nRedeskript: ${JSON.stringify(rede)}\nBefunde: ${JSON.stringify(befunde, null, 1)}\nFazits: ${JSON.stringify(abnahmen.map((a) => a.fazit))}\nJeden Befund selbst prüfen; hohe und mittlere umsetzen, niedrige wenn günstig. Danach: Redeskript mit dem Generator ${FS2}/werkzeuge-redeskript/redeskript-generator.py neu erzeugen (MD + PDF), Wörtlichkeit erneut prüfen; pruefen.mjs hell/dunkel/--oeffentlich je --schritte (0 Fehler), Spot-Test, betroffene Folien ansehen; Doku (LIESMICH, AUTOREN, QUELLEN) nachziehen. Rückgabe: umgesetzt/nicht (Grund), Prüfergebnisse mit Zahlen (Fehler, Warnungen, Klicks, Sollzeit, Seiten des PDF), offene Punkte für die Gruppe, Hinweise.`, { label: 'nacharbeit', phase: 'Nacharbeit', schema: ERG })

return { umbau, rede, abnahmen, nacharbeit }
