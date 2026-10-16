export const meta = {
  name: 'webseite-live-pruefung',
  description: 'Live-Webseite (GitHub Pages) der HOLY-Präsentation aus drei Blickwinkeln prüfen',
  phases: [
    { title: 'Prüfung', detail: '3 Prüfer: Technik & Bedienung, Geräte & Darstellung, Öffentlichkeit & Inhalte' },
  ],
}

const BASIS = 'https://yannickoderso.github.io/Unternehmens-Kommunikation/'
const T = '/tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad/pagestest'

const GEMEINSAM = `Kontext: Studentische Gruppenarbeit (Hochschule Kaiserslautern, Marke HOLY). Die Gruppe hat soeben GitHub Pages aktiviert. Live-Adresse: ${BASIS} (Startseite) und ${BASIS}fallstudie-1-brand-persona/praesentation/index.html (Web-Präsentation für den Vortrag am 26.10.2026, 15 Minuten). Quelle der Seite: Repository /home/user/Unternehmens-Kommunikation, Branch master; ".nojekyll" ist gesetzt, d. h. das GESAMTE Repository wird unverändert ausgeliefert. Bedienung der Präsentation steht in fallstudie-1-brand-persona/praesentation/LIESMICH.md (Tasten: Pfeile/Leertaste weiter, O Übersicht, P Referentenansicht, H Hilfe, T Thema, D hell/dunkel, B Schwarzbild, Ziffern+Enter springen, 1–9 Umfrage auf Folie 08). Auf den Folien stehen absichtlich noch gekennzeichnete Beispieldaten – das ist KEIN Befund.

Werkzeug (funktioniert, getestet): Node mit playwright-core liegt in ${T}/tools (node_modules). Eigene Skripte in einen EIGENEN neuen Unterordner von ${T} schreiben und mit "cd ${T}/tools && node <pfad/skript.mjs>" ausführen (Import: import { chromium } from 'playwright-core'; Skript muss in ${T}/tools liegen oder NODE_PATH=${T}/tools/node_modules setzen). Browser starten mit:
chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'], proxy: { server: process.env.HTTPS_PROXY } }) und Kontexte mit { ignoreHTTPSErrors: true } (ausgehender Verkehr läuft über einen Proxy). Kein "playwright install" ausführen.
Regeln: Teste die LIVE-Seite. Ändere KEINE Dateien im Repository, keine git-Befehle mit Schreibwirkung. Screenshots nur in deinen Unterordner unter ${T}. Melde nur echte Probleme mit Beleg (URL, Konsolenausgabe, Screenshot-Pfad, Messwert); Geschmacksfragen weglassen. Kennzeichne Einschätzungen aus Modellwissen. Wenn alles funktioniert, sag das klar.`

const SCHEMA = {
  type: 'object',
  properties: {
    getestet: { type: 'string', description: 'was genau getestet wurde (Liste)' },
    befunde: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
          ort: { type: 'string', description: 'URL bzw. Folie/Schritt bzw. Datei' },
          problem: { type: 'string' },
          beleg: { type: 'string', description: 'Konsolenausgabe, Messwert, Screenshot-Pfad, URL' },
          vorschlag: { type: 'string' },
          wer: { type: 'string', enum: ['Account 1 (Webseite/Startseite/Repo)', 'Account 2 (Präsentation)', 'Gruppe (Entscheidung)'] },
        },
        required: ['schwere', 'ort', 'problem', 'beleg', 'vorschlag', 'wer'],
      },
    },
    screenshots: { type: 'array', items: { type: 'string' } },
    fazit: { type: 'string' },
  },
  required: ['getestet', 'befunde', 'screenshots', 'fazit'],
}

const PRUEFER = [
  {
    key: 'technik',
    auftrag: `Blickwinkel TECHNIK & BEDIENUNG der Präsentation (Viewport 1920×1080):
1) Lade die Präsentation; erfasse alle Antworten ≥ 400, Konsolenfehler und pageerrors; miss Ladezeit und übertragene Gesamtgröße.
2) Gehe mit der Pfeiltaste durch ALLE Hauptfolien und alle Schritte bis zur letzten Hauptfolie (Folie 12). Mache je Folie einen Screenshot im Endzustand (alle Schritte sichtbar) und prüfe per JavaScript, ob sichtbare Elemente über den Rand der Bühne (1920×1080) hinausragen oder sich überlappen (z. B. getBoundingClientRect außerhalb der Bühne).
3) Teste: Rückwärts (Pfeil links) über Folien- und Schrittgrenzen; Direktsprung per Adresse (#f06.2) und per Ziffern+Enter; Neuladen bleibt auf Folie/Schritt; Übersicht (O) mit Backup-Folien, eine Backup-Folie öffnen, Z zurück; Hilfe (H); Thema (T) und hell/dunkel (D); Schwarzbild (B).
4) Referentenansicht (P): öffnet sich ein zweites Fenster (Popup), zeigt es aktuelle/nächste Folie, Notizen und Uhr, und bleibt es beim Weiterschalten im Hauptfenster synchron (und umgekehrt)? Auf der https-Live-Seite testen.
5) Folie 08 (Live-Umfrage): Zählmodus mit Tasten 1–9; erscheint ein QR-Code oder ist er bei leerem Link korrekt ausgeblendet?
6) Links auf der Startseite ${BASIS}: alle anklicken bzw. per fetch prüfen (Status).`,
  },
  {
    key: 'geraete',
    auftrag: `Blickwinkel GERÄTE & DARSTELLUNG:
1) Präsentation in mehreren Fenstergrößen: 1920×1080, 1280×800 (16:10-Beamer), 1024×768 (4:3), 1366×768. Prüfe Letterboxing (nichts abgeschnitten, Bühne vollständig sichtbar) mit Screenshots von Folie 01, 04, 06 und 10 (jeweils Endzustand).
2) Handy: 390×844 hochkant und 844×390 quer, mit isMobile/hasTouch. Startseite: kein waagerechtes Scrollen (scrollWidth ≤ Fensterbreite), Knöpfe tippbar (mind. ca. 44 px hoch), Text lesbar. Präsentation: Wischgeste nach links = weiter (per Touch-Events simulieren), Darstellung.
3) Barrierearm: Startseite – Kontrast der Texte und Knöpfe (berechne Kontrastverhältnisse der wichtigsten Paare, WCAG AA 4,5:1 bzw. 3:1 für Großtext), Tastaturbedienung (Tab-Reihenfolge, sichtbarer Fokus), lang="de", Überschriftenstruktur. Präsentation: prefers-reduced-motion emulieren (keine Bewegungsanimationen), Dunkelmodus (Taste D) Kontrast auf 2–3 Folien stichprobenartig.
4) Druck/PDF-Link der Startseite: Lädt export/praesentation.pdf vollständig (Größe, Seitenzahl per pdfinfo, falls verfügbar)?`,
  },
  {
    key: 'oeffentlichkeit',
    auftrag: `Blickwinkel ÖFFENTLICHKEIT & INHALTE: Durch ".nojekyll" und Veröffentlichung von master ist jede Datei des Repositorys unter ${BASIS}<pfad> öffentlich abrufbar (das Repository selbst ist laut GitHub-API ebenfalls öffentlich).
1) Liste die Verzeichnisse/Dateiarten im Repository (git ls-files) und prüfe stichprobenartig live, dass sie wirklich abrufbar sind (z. B. ki-nachweis/rohprotokoll.jsonl, unterlagen/*.pdf, fallstudie-1-brand-persona/recherche/*.pdf, .claude/settings.json).
2) Suche im Repository nach Inhalten, die man nicht öffentlich ins Netz stellen sollte: E-Mail-Adressen und Telefonnummern (grep), personenbezogene Daten Dritter, Zugangsdaten/Tokens/Schlüssel, interne Sitzungs-IDs, Material Dritter mit Urheberrecht (z. B. Vorlesungsunterlagen des Professors in unterlagen/, Bilder in praesentation/bilder/, Schriften – Lizenzen vorhanden?), Inhalte, die als echte HOLY-Aussagen missverstanden werden könnten. Bewerte je Fund nüchtern (Modellwissen kennzeichnen; keine Rechtsberatung, aber Risiko benennen).
3) Prüfe, ob Suchmaschinen die Seite indexieren würden (robots-Meta-Tags auf Startseite und Präsentation; hinweis: robots.txt einer Projektseite unter /Unternehmens-Kommunikation/ wird von Suchmaschinen nicht ausgewertet – das bitte selbst verifizieren, Quelle angeben).
4) Schlage konkret vor, wie die Gruppe die Veröffentlichung auf das Nötige beschränken kann (z. B. noindex-Meta-Tag, Veröffentlichung nur eines Unterordners über GitHub Actions statt ganzer Branch, Dateien aus dem öffentlichen Repo entfernen bzw. Repo privat – mit Folgen für GitHub Pages im kostenlosen Tarif, mit Quelle). Prüfe dabei die Fakten zu GitHub Pages per Websuche bzw. in der GitHub-Dokumentation (URL + Abrufdatum 16.10.2026).`,
  },
]

phase('Prüfung')
const ergebnisse = await parallel(PRUEFER.map(p => () =>
  agent(`${GEMEINSAM}\n\n${p.auftrag}`, { label: `pruefer:${p.key}`, phase: 'Prüfung', schema: SCHEMA })
    .then(r => r ? { pruefer: p.key, ...r } : null)
))
return ergebnisse.filter(Boolean)
