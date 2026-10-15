export const meta = {
  name: 'persona-datenquellen',
  description: 'Zugangswege und Inhalte der Datenquellen für die HOLY-Persona recherchieren und gegenprüfen',
  phases: [
    { title: 'Recherche', detail: '3 Agenten: Hochschulzugänge, freie Markt- und Mediadaten, Quellen zur HOLY-Kundschaft' },
    { title: 'Gegenprüfung', detail: 'je Recherche ein Prüfer: Links, Zugang, Inhalte' },
  ],
}

const HEUTE = args && args.heute ? args.heute : '15.10.2026'

const KONTEXT = `Kontext: Studentische Gruppenarbeit im Modul Unternehmenskommunikation an der Hochschule Kaiserslautern (HSKL), Fachbereich Betriebswirtschaft. Marke: HOLY (zuckerfreie Energy- und Softdrink-Pulver, D2C-Shop de.holy.com plus Handel, Deutschland). Yannick Heisler (Student der HSKL) erstellt diese Woche eine datengestützte Brand Persona. Dimensionen laut Aufgabe: Geografie, Soziodemografie, Kaufverhalten, Mediennutzung, Psychografie; dazu die Einordnung auf der Limbic Map (Häusel/Gruppe Nymphenburg).
Was schon bekannt ist, steht im Repository /home/user/Unternehmens-Kommunikation in fallstudie-1-brand-persona/recherche/holy-recherche.md, Kapitel 4.1–4.5 (Selbstauskünfte der Gründer, Kategoriedaten, Persona-Hypothesen, Datenlücken), und in fallstudie-1-brand-persona/methoden.md, Abschnitt 1 (Datenquellen-Liste). Lies diese Abschnitte zuerst, damit du nichts doppelt recherchierst, sondern die Lücken schließt.
Ziel: eine praktische Anleitung, WIE Yannick die Daten selbst erhebt – welche Quelle, wie er Zugang bekommt (kostenlos, Registrierung, Hochschullizenz, VPN/Shibboleth, kostenpflichtig), wo genau er klickt bzw. welche Suche/Filter er setzt, welche Kennzahlen er dort für welche Persona-Dimension findet, ob es Werte speziell zu Energy Drinks bzw. Getränkepulver gibt, wie lange das ungefähr dauert und wie man die Quelle zitiert.
Regeln: Nur belegte Angaben – jede Aussage mit URL und Abrufdatum (heute: ${HEUTE}). Was du nicht prüfen konntest (z. B. hinter Login), kennzeichne als "nicht geprüft" und sag, warum. Keine Zahlen erfinden; konkrete Kennzahlen nur, wenn du sie in der Quelle gesehen hast. Antworte auf Deutsch. Ändere keine Dateien im Repository und führe keine git-Befehle aus.`

const QUELLE = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    anbieter: { type: 'string' },
    url: { type: 'string' },
    zugang: { type: 'string', description: 'kostenlos / Registrierung / Hochschullizenz HSKL / kostenpflichtig / unklar – mit Erläuterung' },
    zugang_beleg: { type: 'string', description: 'URL + Abrufdatum, die den Zugang belegt' },
    persona_dimensionen: { type: 'array', items: { type: 'string' } },
    inhalte: { type: 'string', description: 'welche Kennzahlen/Merkmale konkret, inkl. Stand/Jahr und Stichprobe, soweit gesehen' },
    energy_drink_bezug: { type: 'string', description: 'ja / teilweise / nein – mit Beleg' },
    so_gehts: { type: 'string', description: 'konkrete Schritte: Startseite, Suchbegriffe, Filter, Export' },
    aufwand_minuten: { type: 'number' },
    zitierweise: { type: 'string' },
    status: { type: 'string', enum: ['geprüft', 'teilweise geprüft', 'nicht geprüft'] },
    hinweise: { type: 'string', description: 'Grenzen, Fallstricke, Datenschutz, Aktualität' },
  },
  required: ['name', 'anbieter', 'url', 'zugang', 'zugang_beleg', 'persona_dimensionen', 'inhalte', 'energy_drink_bezug', 'so_gehts', 'aufwand_minuten', 'zitierweise', 'status', 'hinweise'],
}

const RECHERCHE_SCHEMA = {
  type: 'object',
  properties: {
    quellen: { type: 'array', items: QUELLE },
    nicht_gefunden: { type: 'string', description: 'was du gesucht, aber nicht belegt gefunden hast' },
  },
  required: ['quellen', 'nicht_gefunden'],
}

const PRUEF_SCHEMA = {
  type: 'object',
  properties: {
    quellen: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          urteil: { type: 'string', enum: ['bestätigt', 'korrigiert', 'nicht bestätigt', 'verwerfen'] },
          korrekturen: { type: 'string', description: 'was falsch oder ungenau war und wie es richtig ist, mit URL + Abrufdatum' },
          quelle_korrigiert: QUELLE,
        },
        required: ['name', 'urteil', 'korrekturen', 'quelle_korrigiert'],
      },
    },
    ergaenzungen: { type: 'array', items: QUELLE, description: 'wichtige Quellen, die gefehlt haben (nur geprüft)' },
  },
  required: ['quellen', 'ergaenzungen'],
}

const BEREICHE = [
  {
    key: 'hochschulzugaenge',
    auftrag: `Bereich: ZUGÄNGE ÜBER DIE HOCHSCHULE KAISERSLAUTERN.
Finde heraus, welche Datenbanken die Hochschulbibliothek der HSKL (Standorte Kaiserslautern, Pirmasens, Zweibrücken) Studierenden anbietet, die für eine Konsumenten-Persona nützlich sind – insbesondere: Ist Statista lizenziert (Campuslizenz? Zugang im Hochschulnetz, per VPN oder Shibboleth/Login)? Gibt es weitere Markt- oder Konsumdatenbanken (z. B. WISO/GENIOS, Euromonitor Passport, Mintel, IBISWorld, Nexis, GfK, IfD Allensbach/AWA, Marktforschungsstudien), E-Books zur Limbic Map (Häusel), Fernleihe? Suche dazu die Seiten der Bibliothek (Datenbank-Liste, DBIS-Eintrag der HSKL, Anleitungen zu VPN/Fernzugriff).
Wenn Statista lizenziert ist: Welche Statistiken bzw. Dossiers zu Energy Drinks in Deutschland (Konsum nach Alter, Geschlecht, Einkommen, Region; Kaufort; Markenbekanntheit; AWA/VuMA-Auswertungen; Consumer Insights/Global Consumer Survey) gibt es öffentlich sichtbar – nenne Titel und URL der Statistikseiten, auch wenn die Werte hinter dem Login liegen (dann "nicht geprüft").`,
  },
  {
    key: 'freie_daten',
    auftrag: `Bereich: FREI ODER NACH REGISTRIERUNG ZUGÄNGLICHE MARKT- UND MEDIADATEN.
Prüfe für jede dieser Quellen Zugang, Inhalte und den Bezug zu Energy Drinks: VuMA (VuMA Touchpoints, Online-Zählung/Berichtsband – gibt es Merkmale zu Energydrinks bzw. Erfrischungsgetränken?), best for planning (b4p – Zugang für Studierende? Enthält b4p die Limbic Types der Gruppe Nymphenburg? Konsum Energydrinks?), AWA (Allensbacher Markt- und Werbeträgeranalyse – frei zugängliche Teile), ARD/ZDF-Medienstudie bzw. ARD/ZDF-Onlinestudie (Mediennutzung nach Alter), AGOF daily digital facts, JIM/Shell-Jugendstudie nur am Rand (Persona ist ab 18), Sinus-Milieus (frei verfügbare Milieubeschreibungen), Destatis (Haushaltsnettoeinkommen, Erwerbstätige in Schichtarbeit nach Alter/Geschlecht – Mikrozensus; die Persona arbeitet im Schichtdienst), Google Trends (regionales Interesse für "HOLY Energy"/"Holy Drink" nach Bundesland als Hinweis für die Geografie – wie genau vorgehen, was taugt die Aussage?), Meta-Werbeanzeigenmanager/Zielgruppen-Schätzung (lässt sich die Zielgruppengröße für Interessen wie Energydrinks nach Alter/Geschlecht ohne Ausgaben anzeigen? Bedingungen?).
Nenne pro Quelle die konkreten Schritte und welche Persona-Dimension sie füllt.`,
  },
  {
    key: 'holy_kundschaft',
    auftrag: `Bereich: QUELLEN, DIE DIREKT ETWAS ÜBER DIE KUNDSCHAFT VON HOLY ZEIGEN (qualitativ, ohne Login soweit möglich).
Prüfe: Kundenbewertungen (Trustpilot-Profil von HOLY bzw. holy.com, Bewertungen im HOLY-Shop, Amazon-Bewertungen zu HOLY-Produkten, ggf. Google-Bewertungen) – wo genau, wie viele ungefähr, nach Datum sortierbar? Social-Media-Kommentare (Instagram @holysquad.official, TikTok, YouTube @HOLYSquadOfficial), Reddit (z. B. r/de, r/Fitness-ähnliche deutsche Subreddits, Erwähnungen von HOLY Energy), Discord-Server von HOLY (öffentliche Kanäle?), Podcasts/Interviews der Gründer mit Aussagen zur Kundschaft (z. B. Unicorn Bakery mit Horsch, Interview mit Jost – genaue Folgen-URLs und Zeitmarken, falls auffindbar), HOLY-Pressematerial/Press Kit zur Zielgruppe, Similarweb (modellierte Demografie der Website-Besucher – was ist frei sichtbar?).
Beschreibe zusätzlich eine kurze, praktikable Methode, wie Yannick 20–30 Bewertungen/Kommentare systematisch auswertet (Stichprobe ziehen, Kategorien wie Kaufanlass, Beruf/Alltag, Motive, Kritik, Mediennutzung; Häufigkeiten zählen; Zitate anonymisiert), und welche Datenschutzregeln gelten (keine Namen/Profile übernehmen; KI-Richtlinie der HSKL Nr. 6: personenbezogene Daten nur mit Einwilligung in externe KI-Tools – Quelle: https://www.hs-kl.de/fileadmin/hochschule/aktuelles/hochschulanzeiger/Hochschulanzeiger_Nr._4_2025_01.pdf).`,
  },
]

const ergebnisse = await pipeline(
  BEREICHE,
  b => agent(`${KONTEXT}\n\n${b.auftrag}`, { label: `recherche:${b.key}`, phase: 'Recherche', schema: RECHERCHE_SCHEMA }),
  (rech, b) => rech ? agent(`${KONTEXT}

Du bist Prüfer. Eine andere Recherche hat zum Bereich "${b.key}" die folgenden Quellen geliefert (JSON):
${JSON.stringify(rech, null, 1)}

Prüfe JEDE Quelle selbst nach: Funktioniert die URL? Stimmt die Angabe zum Zugang (für Studierende der HSKL)? Stehen die genannten Inhalte wirklich dort, mit dem genannten Stand? Stimmt der Energy-Drink-Bezug? Sind die Schritte nachvollziehbar? Gehe davon aus, dass Fehler drin sind, und suche sie aktiv. Korrigiere mit eigener Quelle (URL + Abrufdatum). Verwerfen, was sich nicht belegen lässt. Ergänze höchstens 3 wichtige Quellen, die gefehlt haben, nur wenn du sie selbst geprüft hast.
Ursprünglicher Auftrag der Recherche zur Orientierung:
${b.auftrag}`, { label: `pruefung:${b.key}`, phase: 'Gegenprüfung', schema: PRUEF_SCHEMA }).then(p => ({ bereich: b.key, recherche: rech, pruefung: p })) : null,
)
return ergebnisse.filter(Boolean)
