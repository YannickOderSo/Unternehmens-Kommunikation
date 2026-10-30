export const meta = {
  name: 'fs2-recherche-gestaltung-fortsetzung',
  description: 'Fortsetzung FS2 nach Nutzungslimit: 3 Gegenprüfungen, 2 Jurys, Dossier und Gestaltungsplan mit Schlussprüfung',
  phases: [
    { title: 'Gegenprüfung', detail: 'Recht, Persona, Bilder – je ein unabhängiger Prüfer' },
    { title: 'Jury', detail: '2 Jurys über die 3 Gestaltungsrichtungen' },
    { title: 'Ausarbeitung', detail: 'Dossier und Gestaltungsplan schreiben' },
    { title: 'Schlussprüfung', detail: 'Prüfung und Einarbeitung der Befunde' },
  ],
}

const REPO = '/home/user/yannickoderso/unternehmens-kommunikation'
const FS1 = REPO + '/fallstudie-1-brand-persona'
const OUT = '/home/user/unternehmens-kommunikation/fallstudie-2-customer-journey'
const SCR = '/tmp/claude-0/-home-user-Marketing/ae5e951b-61ec-53a3-ba4a-2e9029203ba1/scratchpad'
const STENGER = SCR + '/stenger/stenger-mit-seite.txt'
const STENGER_PNG = SCR + '/stenger/seite-NNN.png (NNN = 056–060 und 107–129)'
const KMU = '/home/user/yannickoderso/kmu-redesign/recap/2026-10-26-prozessmanagement-und-ki/praesentation'

const KONTEXT = `
PROJEKT: Studentische Gruppenarbeit im Modul Unternehmenskommunikation (Prof. Dr. Daniel Stenger, Hochschule Kaiserslautern). Gruppe: Yannick Heisler, Elias Knauber, Lukas Welker. Marke für alle drei Fallstudien: HOLY (HOLY Softdrinks GmbH, Berlin; Energy-, Iced-Tea-, Hydration- und Milkshake-Pulver zum Anrühren, Syrup; https://de.holy.com). Heute ist Freitag, 30.10.2026.
FALLSTUDIE 2: „Customer Journey & Blog Beitrag“, Präsentation Mo, 09.11.2026, 15 Minuten, Gruppe zu dritt. Eine eigene Aufgabenfolie zu FS2 gibt es NICHT; Stenger-Folie 57 nennt nur das Thema. Grundlage sind die Vorlesungsseiten zur Customer Journey (S. 107–129): Definition nach Bruhn 2016 (S. 107), fünf Phasen Problemerkennung/Inspiration – Recherche – Entscheidung – Kauf – Bindung nach Kroeber-Riel/Gröppel-Klein 2013 und Kortum 2017 (S. 108), „5 As“ AWARE–APPEAL–ASSURE–ACT–ADVOCATE und Momente der Wahrheit nach Kotler/Kartajaya/Setiawan 2017, Kreutzer 2018, Esch et al. 2016 (S. 109/110), systematischer Customer-Touchpoint-Managementprozess in 5 Schritten nach Esch et al. 2016 S. 333 (S. 111), Touchpoint-Analyse und Kategorisierung Paid/Owned/Earned (S. 112), Touchpoint-Liste Intersport (S. 113), Fallbeispiel Herren-Armbanduhr mit Touchpoint-Pfad über die Phasen (S. 116), Aktivitäten je Touchpoint und Phase (S. 117/118, Blog „Whole Story“ als Content-Marketing-Beispiel), Paid/Owned/Earned (S. 121), Mediennutzung (S. 122–126), Übung „Identifizieren Sie die Top 2 Touchpoints pro Phase und entwickeln Sie jeweils 2 Aktivitäten in der Customer Journey“ (S. 128/129). Volltext der Vorlesung mit Seitenmarken „=== Seite N“: ${STENGER}. Seitenbilder: ${STENGER_PNG} (mit dem Read-Werkzeug ansehen, falls eine Seite nur aus Bild besteht). Bewertungskriterien S. 58: Problemverständnis 15 %, Anwendung von Konzepten & Modellen 20 %, Analyse & Argumentation 20 %, Qualität der Lösung/Empfehlung 15 %, Präsentation 30 % (Vermittlung 7,5 %, Visualisierung 7,5 %).

BEWERTUNG FS1 DURCH PROF. STENGER (wörtlich):
- Problemverständnis (9/10): „Problem der Fallstudie gut verstanden und strukturiert angegangen.“
- Anwendung von Konzepten & Modellen (8/10): „Persona Modell gut angewendet. Detaillierte Analyse zur Mediennutzung, Markennutzung, etc. wäre hilfreich. Limbic Map - Match zwischen Marke und Holy muss passen, sonst ist die Persona nicht richtig. Repertory Grid nicht ganz korrekt angewendet. Laddering korrekt umgesetzt. Assoziationstechnik gut und interaktiv umgesetzt. Die geschlossene Befragung zu Assoziationen gibt wenig Mehrwert. Kommunikationsanalyse umfassend umgesetzt.“
- Analyse & Argumentation (9/10): „Interview mit Gründer super! Wie kommt ihr auf die Wettbewerber Monster und Coca Cola?“
- Qualität der Lösung / Empfehlung (7/10): „Markenidentität viel viel ausführlicher darstellen in allen Facetten. [...] Kommunikationsanalyse besser visualisieren und im Ergebnis in der Identität Farben/ Formen/ Produktabbildungen zeigen.“
- Vermittlung & Präsentationsstil (9/10): „Guter interaktiver Einstieg, freier Vortrag. Position im Raum nicht optimal. Bessere Mimik und Interaktion mit der Folie möglich wenn neben den Folien positioniert. Zeitmanagement schlecht 25 min statt 15.“
- Visualisierung & Foliengestaltung (9/10): „Folien strukturiert und ansprechend gestaltet. Aber oft sehr nüchtern, da KI gestützt umgesetzt.“

FESTGELEGTE REGELN FÜR FS2 (Plan vom 27.10.2026, KI-Nachweis FS2 Eintrag 01, aus Stengers Kritik abgeleitet):
R1 Sofort klären: Mail an Prof. Stenger (Aufgabe FS2, Bildrechte, Zählweise der 15 Minuten, Form des Blog-Beitrags); Bildfreigaben anfragen (HOLY-Presse pr@holy.com, Gründer).
R2 Echtes Material statt KI: Selbstversuch (Kauf online und im Handel, jede Station fotografiert), eigene Produktfotos, offene Kurzinterviews statt geschlossener Befragung, echte Bewertungen codieren. KI-Simuliertes nur gekennzeichnet und nur ergänzend.
R3 Gestaltung: HOLY-Farben (Gelb #FFD007, Schwarz #1D1D1B, Creme #F3EDE1 laut FS1-Dossier; in FS1 wurde das Gelb zu Ocker abgedunkelt – das war zu nüchtern), ein Bild je Folie, Customer-Journey-Map mit Bildern je Phase (Bildsprache wie Stenger S. 116), Moodboard, Blog-Beitrag als Mock-up, weniger Fußnoten auf der Folie (Quellen ins Backup).
R4 Inhalt nach Stengers Touchpoint-Managementprozess (S. 111) und der Übung S. 128/129 (Top 2 Touchpoints je Phase, je 2 Aktivitäten); Herleitungen sichtbar auf der Folie (Stenger fragte „Wie kommt ihr auf …?“).
R5 Zeit: höchstens 9 Hauptfolien, höchstens 25 Klicks, Sollzeit 12:30 Minuten, Zeitwächter, zwei Generalproben mit Stoppuhr, Änderungsstopp vor dem Vortrag; Position neben der Leinwand, auf die Folie zeigen.
BESTEHENDE GRUPPENREGELN: Fakten über HOLY nur mit Quelle und Faktenstatus; keine Zahlen ohne Quelle; Social-Media-Bilder und Screenshots von HOLY-Social-Media nur nach Zustimmung des Betreuers; keine Produktfotos von HOLY aus fremden Quellen ohne Freigabe; keine personenbezogenen Daten (z. B. Namen aus Bewertungen) übernehmen oder in KI-Tools geben (KI-Richtlinie der HSKL Nr. 6); KI-simulierte Befragungen als „KI-simuliert“ kennzeichnen; KI-Bilder kennzeichnen („Bild KI-generiert (Tool)“); jede KI-Nutzung wird dokumentiert; Statista-Werte nur, wie sie in ${FS1}/persona-daten.md stehen; Präsentation als selbst gebaute Web-Präsentation (HTML/CSS/JS, Engine aus FS1: ${FS1}/praesentation/, Doku LIESMICH.md, QUELLEN.md); Ansprache des Publikums mit „Sie“; das Repository ist öffentlich; keine Bezeichnungen von KI-Modellen in Dateien.
JÜNGSTE GESTALTUNGSPRINZIPIEN DER GRUPPE (Neugestaltung „Der rote Faden“ vom 29.10.2026 für ein anderes Modul, ${KMU}, Kopf von css/folien/recap.css und marke.js lesen) – als Vorschlag zu prüfen, nicht automatisch verbindlich: ein einziges durchgehendes gestalterisches Leitmotiv; je Folie genau EINE Schlüsselzahl oder -aussage in der Akzentfarbe; Magazin-Disziplin (Satz-Titel als Kernaussage, Weißraum, asymmetrisches 12er-Raster, keine Kästen, keine Pillen, keine Versalien); geprüfte Kontraste (Text ≥ 4,5 : 1, Grafik ≥ 3 : 1, hell und dunkel); Bühne 1920 × 1080; automatische Prüfung mit werkzeuge/pruefen.mjs (Überlauf, Schriftgrößen, Kontrast, Wortbudget rund 40 Wörter je Hauptfolie).

MATERIAL AUS FS1 IM REPOSITORY (nur lesen): ${FS1}/recherche/holy-recherche.md (Dossier, Stand 14.10.2026, Faktenstatus ✔/✎/~/✗/H, Quellen [n] in Anhang B; Kapitel 7 Customer Journey, 7.1 Touchpoints, 7.2 Brüche, 7.3 Blog-Ideen; Kapitel 6 Kommunikation; Kapitel 8 Spannungsfelder), ${FS1}/persona-steckbrief.md (Kern-Persona „Marco, 28“, Lagerlogistik im Schichtdienst, Dortmund), ${FS1}/persona-daten.md, ${FS1}/limbic-map.md, ${FS1}/kommunikationsanalyse.md, ${FS1}/gruenderbefragung.md, ${FS1}/praesentation/ (index.html, css/tokens.css, export/uebersicht.png, export/folien/*.png), ${FS1}/praesentation/QUELLEN.md §4 (Bildregeln), ${FS1}/praesentation/_entwuerfe/JURY.md.

ARBEITSREGELN FÜR DICH: Sprache Deutsch. Abrufdatum 30.10.2026. Jede Tatsachenaussage mit Quelle (URL bzw. Dateipfad/Abschnitt bzw. Vorlesungsseite). Kennzeichne, was aus Websuche, Repository, Vorlesung oder Modellwissen stammt; aus Modellwissen nur Einordnungen, keine Zahlen. Literaturangaben nur, wenn du sie geprüft hast (Verlag/Jahr/Seite oder DOI gefunden), sonst als ungeprüft markieren. Keine Namen von Privatpersonen aus Bewertungen, Foren oder Kommentaren übernehmen; Kundenstimmen nur sinngemäß oder als kurze anonyme Zitate. Keine Bezeichnungen von KI-Modellen schreiben. Rechtliche Einordnungen sind keine Rechtsberatung und so zu kennzeichnen. Nicht unter /root/.claude lesen. Schreibe NICHTS in ${REPO}, außer dir wird ausdrücklich eine Zieldatei genannt; Hilfsdateien nur unter ${SCR}/fs2-arbeit/.
WEB-HINWEISE: Die Werkzeuge WebSearch und WebFetch lädst du mit ToolSearch ("select:WebSearch,WebFetch"). WebSearch liefert US-lastige Ergebnisse; für deutsche Treffer zusätzlich per Bash z. B. curl -sL -A "Mozilla/5.0" "https://www.google.de/search?q=...&hl=de&gl=de" oder "https://html.duckduckgo.com/html/?q=...&kl=de-de" probieren und Methode sowie Abrufdatum nennen (Suchergebnisse sind standort- und personalisierungsabhängig). Manche Seiten (z. B. Trustpilot) blocken curl; dann WebFetch versuchen. Was du nicht prüfen kannst, nennst du als Lücke.
`

const QUELLE_ITEM = {
  type: 'object',
  properties: {
    titel: { type: 'string' },
    url: { type: 'string', description: 'URL, Dateipfad mit Abschnitt oder „Stenger S. N“' },
    art: { type: 'string', description: 'Firmenquelle, Presse, Studie, Gesetz/Behörde, Literatur, Bewertungsportal, Suchergebnis, Repository, Vorlesung' },
    datum: { type: 'string', description: 'Veröffentlichungsdatum oder „o. D.“' },
  },
  required: ['titel', 'url', 'art'],
}
const BEFUND_ITEM = {
  type: 'object',
  properties: {
    id: { type: 'string', description: 'Kürzel des Bereichs + zweistellige Nummer, z. B. T01' },
    aussage: { type: 'string' },
    phase: { type: 'string', description: 'Phase nach Stenger S. 108 (Problemerkennung/Inspiration, Recherche, Entscheidung, Kauf, Bindung) oder „übergreifend“' },
    einordnung: { type: 'string', description: 'z. B. Paid/Owned/Earned, Modell, Rechtsgrundlage, Benchmark-Marke' },
    belegstelle: { type: 'string', description: 'kurzes wörtliches Zitat oder genaue Fundstelle' },
    quellen: { type: 'array', items: QUELLE_ITEM },
    herkunft: { type: 'string', enum: ['Websuche', 'Repository', 'Vorlesung', 'Modellwissen'] },
    status_vorschlag: { type: 'string', enum: ['✔', '~', 'H'] },
    relevanz_fs2: { type: 'string', description: 'wofür in FS2 (Journey-Map, Touchpoint-Tabelle, Bruch, Blog, Folie …)' },
  },
  required: ['id', 'aussage', 'phase', 'belegstelle', 'quellen', 'herkunft', 'status_vorschlag', 'relevanz_fs2'],
}
const BEFUND_SCHEMA = {
  type: 'object',
  properties: {
    bereich: { type: 'string' },
    befunde: { type: 'array', items: BEFUND_ITEM },
    luecken: { type: 'array', items: { type: 'string' } },
    offene_fragen: { type: 'array', items: { type: 'string' }, description: 'an die Gruppe oder an Prof. Stenger' },
    veraenderungen_seit_fs1: { type: 'array', items: { type: 'string' }, description: 'Abweichungen gegenüber dem FS1-Dossier (Stand 14.10.2026), mit ID des alten Befunds' },
  },
  required: ['bereich', 'befunde', 'luecken', 'offene_fragen', 'veraenderungen_seit_fs1'],
}
const PRUEF_SCHEMA = {
  type: 'object',
  properties: {
    pruefungen: { type: 'array', items: { type: 'object', properties: {
      id: { type: 'string' },
      status: { type: 'string', enum: ['✔', '✎', '~', '✗', 'H'] },
      korrigierte_aussage: { type: 'string', description: 'nur bei ✎: die belegte Fassung' },
      geprueft_an: { type: 'string', description: 'selbst geöffnete Quelle(n) mit URL' },
      begruendung: { type: 'string' },
    }, required: ['id', 'status', 'geprueft_an', 'begruendung'] } },
    zusatzbefunde: { type: 'array', items: BEFUND_ITEM },
    hinweise: { type: 'array', items: { type: 'string' } },
  },
  required: ['pruefungen', 'zusatzbefunde', 'hinweise'],
}

const BEREICHE = [
  { key: 'touchpoints', kuerzel: 'T', titel: 'Touchpoints von HOLY je Phase', auftrag: `Erfasse die AKTUELLEN Touchpoints von HOLY in Deutschland vollständig und ordne jeden einer Phase nach Stenger S. 108 (Problemerkennung/Inspiration, Recherche, Entscheidung, Kauf, Bindung), einem „A“ der 5 As (S. 109) und Paid/Owned/Earned (S. 112) zu. Prüfe selbst nach (Website, Shop, Footer, Help-Center, Rechtstexte, Pressemitteilungen, Handelsseiten): Website und Shop (Startseite, Produktseiten, Vergleichsgrafiken, Starter Sets, Probierboxen, Mix & Match, Garantie, Versand, Zahlung), Handel (welche Ketten, Drogerien, Tankstellen, Spätis – nur belegte), Amazon und Marktplätze, App (gibt es eine?), Treueprogramm SQUAD Rewards und Freunde werben, Newsletter/E-Mail, WhatsApp/Discord/Facebook-Gruppe, Social Media (Instagram, TikTok, YouTube, Facebook; Follower nur mit Abrufdatum), Creator-/Affiliate-Programm, Kampagne 2026 (TV, Streaming, DOOH), Sponsoring und Events, Sampling- und Kooperationsaktionen, Verpackung/Lieferung/Unboxing, Kundenservice, „agents.md“ bzw. Angebote für KI-Einkaufsassistenten. Gleiche jeden Befund aus FS1-Dossier 7.1 und Anhang A.6 (J01–J26) mit dem heutigen Stand ab und melde Änderungen. Ziel: Material für die Touchpoint-Tabelle (Stenger S. 112/113) und die Journey-Map (S. 116).` },
  { key: 'brueche', kuerzel: 'B', titel: 'Brüche, Pain Points und Kundenstimmen', auftrag: `Prüfe die fünf Brüche aus FS1-Dossier 7.2 am heutigen Stand nach (Store-Locator vorhanden?, Help-Center „hauptsächlich online“, Cashback-Ablauf mit Bon-Foto/IBAN/Dienstleister, Altersgrenzen Shop 18 / Rewards 16 / Creator 18 / Syrup, kein Blog, Suchtreffer mit Warnungen Dritter, Preiswahrnehmung über Rabatte, kein Abo, Versandkosten Banner vs. Richtlinie, Freunde-werben-Mindestbestellwert) und suche weitere Brüche entlang der fünf Phasen. Werte echte Kundenstimmen aus: Trustpilot, REVIEWS.io (Shop-Bewertungen), Amazon-Bewertungen, Reddit/Foren, App-Stores falls vorhanden. Ermittle Gesamtnote und Anzahl je Portal (mit Abrufdatum), bilde Themen-Kategorien je Phase (Geschmack, Preis, Versand, Löslichkeit/Zubereitung, Dosierlöffel, Kundenservice, Rabattcodes, Wirkung/Koffein, Verpackung …) und nenne, wie viele der gesichteten Bewertungen zu jeder Kategorie passen (Stichprobengröße und Auswahl offenlegen, z. B. die neuesten 50). KEINE Namen, keine Profilbilder, nur sinngemäße oder kurze anonyme Zitate. Ziel: Pain Points und Momente der Wahrheit je Phase, Grundlage für eine eigene Codierung durch die Gruppe (R2).` },
  { key: 'suche', kuerzel: 'S', titel: 'Informationsphase: Suche, Suchintention, Content-Lücken', auftrag: `Untersuche, was Menschen in Deutschland finden, wenn sie in der Recherche-Phase nach HOLY oder dem Bedarf suchen. Suchanfragen mindestens: „holy energy“, „holy energy gesund“, „holy energy koffein“, „holy energy erfahrungen“, „holy energy schädlich“, „holy iced tea“, „holy hydration“, „holy zucker süßstoff“, „energy drink pulver“, „energy drink ohne zucker“, „koffein wie viel am tag“, „energy drink nachtschicht“. Halte je Anfrage die ersten etwa zehn organischen Treffer fest (Titel, Domain, Art: HOLY, Händler, Presse, Verbraucherschutz, Test, SEO-Seite, Forum, Video), dazu Fragen-Boxen („Ähnliche Fragen“), sofern sichtbar, und ordne die Suchintention zu (informational, navigational, kommerziell, transaktional). Prüfe den Stand des HOLY-News-Blogs (https://de.holy.com/blogs/news), Help-Center und FAQ als Content sowie agents.md/llms.txt. Leite Content-Lücken ab, die ein HOLY-Blog-Beitrag füllen könnte, und kennzeichne sie als Hypothese. Hinweis: Suchvolumen-Daten (z. B. aus SEO-Tools) haben wir nicht – nicht schätzen, sondern als Lücke nennen; Google Trends nur, wenn du es wirklich abrufen kannst.` },
  { key: 'benchmark', kuerzel: 'M', titel: 'Benchmark: Blogs und Magazine vergleichbarer Marken', auftrag: `Untersuche Blogs bzw. Magazine vergleichbarer D2C- und Getränkemarken: mindestens waterdrop, air up, koawach, ESN, More Nutrition, Red Bull (Red Bulletin/redbull.com Stories), YFood, Rocka Nutrition, nucao/the nu company, 3Bears, Oatsome, everdrop, SNOCKS, GOT BAG (die letzten fünf stehen wie HOLY auf Stengers Markenliste). Je Marke: Gibt es einen Blog/Magazin (URL)? Datum des neuesten Beitrags, ungefähre Taktung, Themenfelder, Formate (Ratgeber, Rezepte, Wissen, Stories, Listen), typischer Aufbau eines Beitrags (Titel, Einleitung, Inhaltsverzeichnis, Zwischenüberschriften, Bilder, Infokästen, Quellen/Studien, Autor, Produktverlinkung, Call-to-Action, Newsletter-Anmeldung, FAQ), Tonalität, sichtbare SEO-Elemente (Meta-Titel/Beschreibung über den Seitenquelltext, strukturierte Daten), Umgang mit Gesundheits- und Koffeinaussagen. Wähle 3–5 Musterbeiträge als Best Practice mit URL und begründe die Wahl. Wichtig für FS2: Was macht einen Marken-Blogbeitrag gut, und was davon passt zum HOLY-Ton (Du-Ansprache, frech, „Gönn dir“)?` },
  { key: 'recht', kuerzel: 'R', titel: 'Leitplanken für Blog-Aussagen (Recht, Gesundheit, Koffein, Umwelt)', auftrag: `Stelle belegt zusammen, was ein HOLY-Blogbeitrag in Deutschland sagen darf und was nicht, jeweils mit Fundstelle (Artikel/Anhang) und URL (EUR-Lex, gesetze-im-internet.de, BfR, EFSA, Verbraucherzentrale/Lebensmittelklarheit): Health-Claims-Verordnung (EG) Nr. 1924/2006 (nährwertbezogene Angaben wie „zuckerfrei“, „ohne Zuckerzusatz“, „kalorienarm“; gesundheitsbezogene Angaben nur zugelassene aus VO (EU) Nr. 432/2012, Bedingungen wie signifikante Menge bei Vitaminen; Stand der Koffein-Claims), LMIV (EU) Nr. 1169/2011 Anhang III Nr. 4.1/4.2 (Hinweis „Erhöhter Koffeingehalt …“ ab 150 mg/l, gilt das für Pulver nach Zubereitung?), EFSA-Gutachten Koffein 2015 (400 mg/Tag Erwachsene, 200 mg Einzeldosis, Schwangere, Kinder 3 mg/kg), BfR-Hinweise zu Energy Drinks, Altersgrenzen (gibt es in Deutschland eine gesetzliche? Stand der Diskussion 2025/2026, z. B. Großbritannien), Süßungsmittel-Aussagen, „vegan“, Umweltaussagen nach UWG und EU-Richtlinie 2024/825 (EmpCo, ab 27.09.2026 anzuwenden – prüfe die Umsetzung im UWG), Kennzeichnung von Werbung und Creator-Kooperationen (§ 5a UWG, § 6 DDG), Lebensmittelklarheit-Fall HOLY 2025 (FS1-Dossier J20/J21). Ergebnis: eine Do/Don't-Liste für den Blogbeitrag mit Formulierungsbeispielen. Alles als „keine Rechtsberatung“ kennzeichnen.` },
  { key: 'modelle', kuerzel: 'L', titel: 'Modelle, Vorlesung und Literatur (Customer Journey und Blog)', auftrag: `Lies die Vorlesung vollständig auf alles, was FS2 betrifft (Customer Journey S. 107–129, aber auch Content Marketing, UGC S. 56, Paid/Owned/Earned, Mediennutzung, Blog, SEO, Kommunikationsinstrumente S. 127; such im Volltext nach „Blog“, „Content“, „SEO“, „Touchpoint“, „Journey“, „Persona“). Gib je Modell an: Seite, Inhalt, Quelle laut Folie, wie es in FS2 anzuwenden ist. Ergänze Standardliteratur und prüfe die bibliografischen Angaben per Websuche: Bruhn 2016; Kroeber-Riel/Gröppel-Klein 2013; Kortum 2017; Kotler/Kartajaya/Setiawan 2017 (Marketing 4.0, 5 A); Kreutzer 2018; Esch et al. 2016; Court et al. 2009 (The consumer decision journey, McKinsey Quarterly); Lemon & Verhoef 2016 (Journal of Marketing, Touchpoint-Arten brand-owned, partner-owned, customer-owned, social/external); Lecinski 2011 (ZMOT) und FMOT/SMOT; Customer Journey Mapping (z. B. Kalbach, Mapping Experiences; Stickdorn et al., This Is Service Design Doing); Content Marketing (Content Marketing Institute, Pulizzi); Suchintention (Broder 2002, A taxonomy of web search, SIGIR Forum); Google Search Central (hilfreiche Inhalte, E-E-A-T in den Quality Rater Guidelines, Title-Links, Meta-Beschreibung, Bild-SEO). Leite daraus ab: (a) welche Schritte Stenger für FS2 vermutlich erwartet (als Hypothese), (b) eine Ausfüllvorlage für die Journey-Map (Phasen × Touchpoints × Ziele/Gedanken/Gefühle/Pain Points/Chancen × Momente der Wahrheit), (c) eine Vorlage für den Blog-Beitrag (Suchintention, Fokus-Suchbegriff, Titel, Meta-Beschreibung, Gliederung, Bilder, interne Links, CTA, Quellen). Markiere Abweichungen zwischen Vorlesung und Literatur (z. B. Phasenzahl, Begriffe) – die Gruppe nutzt die Begriffe der Vorlesung.` },
  { key: 'persona', kuerzel: 'P', titel: 'Persona, Mediennutzung und Limbic-Passung', auftrag: `Stenger bemängelte, dass eine detaillierte Analyse der Mediennutzung und Markennutzung fehlte und dass der Limbic-Typ von Persona und Marke zusammenpassen muss. Lies ${FS1}/persona-steckbrief.md, persona-daten.md, limbic-map.md und Folien 04/05 (export/folien/f04.png, f05.png). Recherchiere AKTUELLE, belegte Daten zur Mediennutzung der Altersgruppe etwa 20–35 in Deutschland (z. B. ARD/ZDF-Medienstudie bzw. Onlinestudie 2025/2026, Digital News Report 2025/2026 des Hans-Bredow-Instituts, Bitkom-Studien zu Social Media, Postbank Digitalstudie, TikTok/Instagram-Nutzung nach Alter, Podcast- und Gaming-Nutzung, Nutzung von Suchmaschinen vs. Social Search, Nutzung von KI-Assistenten beim Einkaufen) und zum Einkaufsverhalten (online vs. stationär bei Getränken/Lebensmitteln, Bewertungen lesen). Statista NUR mit den Werten aus persona-daten.md. Leite ab, über welche Touchpoints „Marco, 28“ in welcher Phase vermutlich erreicht wird, inklusive Schichtdienst-Kontext (wann ist er online, wo kauft er), alles als Hypothese mit Datenbeleg. Prüfe die Limbic-Passung: Welcher Limbic-Typ wird HOLY in limbic-map.md zugeschrieben, welcher Marco, und wo sieht Stenger vermutlich das Problem? Schlage vor, wie FS2 die Persona schärft oder ergänzt (z. B. Wachstums-Persona „Lena“ aus dem Backup), damit Journey und Persona zusammenpassen.` },
  { key: 'bilder', kuerzel: 'G', titel: 'Bildquellen, Rechte und Corporate Design von HOLY', auftrag: `Liefere die Faktenbasis für die Gestaltung: (1) Corporate Design von HOLY heute: Farben (aus dem CSS der Website und der Verpackung; Hex-Werte mit Fundstelle), Schriften (aus dem CSS der Website: font-family, Dateinamen – ist die Schrift frei verfügbar oder kommerziell? freie Ersatzschrift mit ähnlicher Anmutung vorschlagen, die die Gruppe lokal einbinden darf, mit Lizenz), Bildwelt (Comic-Tiere, Produktstillleben, Community-Fotos), Formen. (2) Bildquellen und Rechte: Press Kit von HOLY (gibt es Nutzungsbedingungen?, Kontakt pr@holy.com laut Impressum), § 60a UrhG (Veranschaulichung im Unterricht an Hochschulen), § 51 UrhG (Zitat), § 22 KUG (Bildnisse), Panoramafreiheit irrelevant?, Screenshots von Websites, eigene Fotos gekaufter Produkte mit fremder Verpackung, Lizenzbedingungen von Unsplash und Pexels (URL), Kennzeichnungspflicht für KI-Bilder nach Art. 50 KI-Verordnung (EU) 2024/1689 (ab wann anwendbar, gilt sie für eine Hochschulpräsentation?), Unterschied Vortrag im Hörsaal vs. öffentliches Repository/GitHub Pages. (3) Wie Stenger selbst Journey-Maps visualisiert (Seitenbilder S. 116–118 ansehen) und welche Bildelemente dort vorkommen. Rechtliches als „keine Rechtsberatung“ kennzeichnen.` },
]

const JURY_SCHEMA = {
  type: 'object',
  properties: {
    bewertungen: { type: 'array', items: { type: 'object', properties: {
      richtung: { type: 'string' },
      punkte: { type: 'object', additionalProperties: { type: 'number' }, description: 'je Kriterium 1–10' },
      gesamt: { type: 'number' },
      staerken: { type: 'array', items: { type: 'string' } },
      schwaechen: { type: 'array', items: { type: 'string' } },
    }, required: ['richtung', 'punkte', 'gesamt', 'staerken', 'schwaechen'] } },
    empfehlung: { type: 'string', description: 'welche Richtung als Grundlage und warum' },
    uebernahmen: { type: 'array', items: { type: 'string' }, description: 'was aus den anderen Richtungen übernommen werden sollte' },
    warnungen: { type: 'array', items: { type: 'string' } },
  },
  required: ['bewertungen', 'empfehlung', 'uebernahmen', 'warnungen'],
}

const DATEI_SCHEMA = {
  type: 'object',
  properties: {
    dateien: { type: 'array', items: { type: 'string' } },
    zusammenfassung: { type: 'string' },
    kennzahlen: { type: 'string', description: 'z. B. Befunde je Status, Folienzahl, Klicks, Sollzeit' },
    offene_fragen: { type: 'array', items: { type: 'string' } },
  },
  required: ['dateien', 'zusammenfassung', 'kennzahlen', 'offene_fragen'],
}
const CHECK_SCHEMA = {
  type: 'object',
  properties: {
    befunde: { type: 'array', items: { type: 'object', properties: {
      stelle: { type: 'string', description: 'Abschnitt/Zeile' },
      problem: { type: 'string' },
      schwere: { type: 'string', enum: ['muss', 'sollte'] },
      korrektur: { type: 'string' },
      beleg: { type: 'string' },
    }, required: ['stelle', 'problem', 'schwere', 'korrektur', 'beleg'] } },
    stichproben: { type: 'array', items: { type: 'object', properties: { aussage: { type: 'string' }, ergebnis: { type: 'string' }, url: { type: 'string' } }, required: ['aussage', 'ergebnis', 'url'] } },
    gesamturteil: { type: 'string' },
  },
  required: ['befunde', 'stichproben', 'gesamturteil'],
}
const FIX_SCHEMA = {
  type: 'object',
  properties: {
    geaendert: { type: 'array', items: { type: 'string' } },
    nicht_geaendert: { type: 'array', items: { type: 'object', properties: { punkt: { type: 'string' }, grund: { type: 'string' } }, required: ['punkt', 'grund'] } },
  },
  required: ['geaendert', 'nicht_geaendert'],
}


// ---------- Fortsetzung nach Abbruch durch das Nutzungslimit (30.10.2026) ----------
// Fertig aus dem ersten Lauf (wörtliche Aufträge im Skript 2026-10-30_fs2-recherche-gestaltung.js):
// 8 Recherchen, 5 Gegenprüfungen (zusammengeführt in DATEN/befunde-<bereich>.json), 3 Gestaltungsrichtungen
// (DATEN/konzept-<richtung>.json). Neu laufen: 3 Gegenprüfungen, 2 Jurys, Dossier, Gestaltungsplan, Schlussprüfung.
const DATEN = '/tmp/claude-0/-home-user/ae5e951b-61ec-53a3-ba4a-2e9029203ba1/scratchpad/fs2-daten'
const LESEN = `Die Daten liegen als JSON-Dateien vor. Lies sie vollständig; das Read-Werkzeug kürzt sehr lange Zeilen – lies dann per Bash (z. B. python3 -c "import json; …") nach.`
const OFFEN = BEREICHE.filter(b => ['recht', 'persona', 'bilder'].includes(b.key))
const FERTIG = ['touchpoints', 'brueche', 'suche', 'benchmark', 'modelle']

const pruefP = parallel(OFFEN.map(b => () =>
  agent(`Du bist unabhängiger Prüfer für den Bereich „${b.titel}“. Ein anderer Agent hat dazu recherchiert; sein Auftrag war: ${b.auftrag}\n\nSeine Befunde stehen in ${DATEN}/recherche-${b.key}.json. ${LESEN}\nPrüfe JEDEN Befund selbst an der Quelle (öffnen, nicht nur Suchsnippets) und per Gegenrecherche. Versuche aktiv, Fehler zu finden: veraltete Zahlen, falsche Zuordnung, Quelle sagt etwas anderes, Selbstauskunft als Fakt, fehlendes Datum, ungeprüfte Literatur- oder Gesetzesangabe, personenbezogene Daten. Vergib je ID einen Status: ✔ an der Quelle bestätigt · ✎ korrigiert (korrigierte_aussage angeben) · ~ unsicher · ✗ widerlegt · H Hypothese/Deutung. Ergänze wichtige fehlende Befunde als zusatzbefunde (IDs ${b.kuerzel}90, ${b.kuerzel}91, …). Nur lesen.\n${KONTEXT}`,
    { label: `pruefung:${b.key}`, phase: 'Gegenprüfung', schema: PRUEF_SCHEMA })
    .then(p => p ? { key: b.key, kuerzel: b.kuerzel, bereich: b.titel, ...p } : null)))

const JURYS = [
  { key: 'stenger', text: `Du bist Jury „Bewertung nach Prof. Stenger“. Bewerte jede Richtung so, wie Stenger sie nach seinen Kriterien (S. 58) und seinen Kommentaren zu FS1 bewerten würde. Kriterien je 1–10: Visualisierung & Foliengestaltung (klar, lesbar, professionell, stützt die Argumentation, NICHT nüchtern), Antwort auf die FS1-Kritik (Bilder, Farben/Formen/Produktabbildungen, nicht nach KI wirken), Anwendung der Modelle aus der Vorlesung (Phasen S. 108, 5 As S. 109, Touchpoint-Prozess S. 111, Paid/Owned/Earned S. 112, Übung S. 128/129), Vermittlung (Storytelling, Interaktion, Position neben der Folie), Markenpassung HOLY.` },
  { key: 'machbarkeit', text: `Du bist Jury „Machbarkeit und Zeit“. Bewerte jede Richtung danach, ob drei Studierende sie bis Mo, 09.11.2026 (heute Fr, 30.10.) sicher umsetzen können. Kriterien je 1–10: Aufwand und Wiederverwendung der FS1-Engine, Zeitbudget (höchstens 9 Hauptfolien, 25 Klicks, 12:30 Minuten – rechne die Angaben nach), Bildbeschaffung und Rechterisiko (fällt eine Folie um, wenn eine Freigabe nicht kommt? gibt es einen Rückfall?), Beamer-Tauglichkeit (Kontraste selbst nachrechnen, Schriftgrößen, Gelb auf Weiß), Robustheit im Vortrag (Technik, Offline, Plan B).` },
]
const KONZEPT_DATEIEN = `${DATEN}/konzept-reise.json („Die Reise von Marco – Fotostrecke“), ${DATEN}/konzept-markenwelt.json („HOLY-Markenwelt – laut und markennah“), ${DATEN}/konzept-faden.json („Der Journey-Pfad – Editorial mit Bildern“); Musterfolien jeweils im Feld muster_png bzw. muster_html`
const juryP = parallel(JURYS.map(j => () =>
  agent(`${j.text}\n\nDie drei Richtungen stehen in ${KONZEPT_DATEIEN}. ${LESEN} Sieh dir die Musterfolien (PNG) mit dem Read-Werkzeug selbst an, öffne die HTML-Dateien bei Bedarf per Playwright, und prüfe Angaben nach (Kontraste per WCAG-Formel nachrechnen, Klicks und Sollzeiten summieren). Empfiehl eine Richtung als Grundlage und nenne konkrete Übernahmen aus den anderen. Nur lesen.\n${KONTEXT}`,
    { label: `jury:${j.key}`, phase: 'Jury', schema: JURY_SCHEMA })))

const dossierP = pruefP.then(pr => {
  const pruefungen = pr.filter(Boolean)
  return agent(`Schreibe das Recherche-Dossier für Fallstudie 2 als Markdown-Datei ${OUT}/recherche-customer-journey.md (Ordner anlegen). Aufbau wie das FS1-Dossier ${FS1}/recherche/holy-recherche.md (lies dessen Kopf, Legende, Kapitel 7 und Anhänge A/B als Vorbild): Kopfkommentar zur Entstehung, Kopf mit Modul, Titel „HOLY – Recherche-Dossier Customer Journey & Blog-Beitrag“, Stand 30.10.2026, Präsentation Mo 09.11.2026, Gruppe; Hinweis „Recherche mit KI-Unterstützung (Claude Code), gegengeprüft – Faktenstatus beachten“ mit ehrlicher Beschreibung des Verfahrens (8 Recherche-Unteragenten mit Websuche, je Bereich eine unabhängige Gegenprüfung an den Quellen, anschließend Schlussprüfung; der Lauf wurde durch ein Nutzungslimit unterbrochen und fortgesetzt); Legende ✔/✎/~/✗/H (✔ = die Gegenprüfung hat die Aussage an der Quelle bestätigt; ✎ = korrigierte Fassung steht im Text; ✗ nur in Anhang A).\nKapitel: 1 Auf einen Blick (eine Seite: die wichtigsten Befunde je Phase, die Top-Brüche, die stärkste Blog-Chance) · 2 Aufgabe und Modelle (was die Vorlesung für FS2 vorgibt, mit Seiten; Literatur; Annahmen zur Aufgabenstellung klar als „mit Prof. Stenger klären“ markiert) · 3 Persona und Mediennutzung (Marco, Limbic-Passung, Touchpoints der Persona je Phase) · 4 Touchpoints von HOLY je Phase (große Tabelle Phase × Touchpoint × 5 A × Paid/Owned/Earned × Status × Quelle, plus Touchpoint-Liste nach dem Muster Intersport S. 113) · 5 Brüche, Pain Points und Kundenstimmen (Momente der Wahrheit je Phase) · 6 Informationsphase: Suche und Content-Lücken · 7 Benchmark: Blogs vergleichbarer Marken (Tabelle + Best Practices) · 8 Blog-Beitrag für HOLY (3 bis 5 Themenvorschläge mit Beleg der Lücke, Suchintention, Fokus-Suchbegriff, Arbeitstitel, Meta-Beschreibung, Gliederung, Bildideen, CTA; Leitplanken als Do/Don't-Liste; eine begründete Empfehlung – alles H) · 9 Vorschlag für die Übung Stenger S. 128/129: Top 2 Touchpoints je Phase mit je 2 Aktivitäten (H, mit Herleitung aus den Befunden) · 10 Bilder, Rechte und Corporate Design (Faktenbasis für den Gestaltungsplan) · 11 Was sich seit FS1 geändert hat · 12 Lücken, offene Fragen (an Prof. Stenger / an die Gruppe), Grenzen der KI-gestützten Recherche · Anhang A Faktencheck (je Bereich eine Tabelle ID | Aussage kurz | Status | Hinweis zur Prüfung, inkl. ✗) · Anhang B Quellenverzeichnis ([n] in Reihenfolge der ersten Nennung, Art der Quelle, Datum, Abrufdatum, URL; Quellen aus dem FS1-Dossier als „D1 [n]“ zitieren, wenn sie dort schon stehen).\n\nDATEN: (a) Fünf Bereiche sind fertig gegengeprüft und zusammengeführt: ${FERTIG.map(k => `${DATEN}/befunde-${k}.json`).join(', ')} – je Befund gilt das Feld status, der Text in aussage_final (bei ✎ die korrigierte Fassung), pruefung erklärt die Prüfung; dazu luecken, offene_fragen, veraenderungen_seit_fs1, hinweise_pruefer. (b) Drei Bereiche: Recherche in ${OFFEN.map(b => `${DATEN}/recherche-${b.key}.json`).join(', ')}, die Gegenprüfung dazu steht unten als JSON (Feld key = Bereich). Führe sie selbst zusammen: Status aus pruefungen je ID; bei ✎ korrigierte_aussage verwenden; IDs ohne Prüfung gelten als ~ „nicht gegengeprüft“; zusatzbefunde übernehmen (Status = status_vorschlag, „eine Prüfung“). Fehlt für einen Bereich die Gegenprüfung ganz, gelten alle seine Befunde als ~ und das steht im Kopf. ${LESEN}\nREGELN: Nur Befunde mit Status ✔, ✎, ~ oder H im Text verwenden, jeweils mit Status-Symbol und Quellennummer; ~ nur mit Kennzeichnung und Grund; H als Hypothese. Keine neuen Fakten erfinden; wenn du etwas ergänzt, dann nur aus dem Repository mit Fundstelle. Keine Namen von Privatpersonen, keine Bezeichnungen von KI-Modellen. Statista nur wie in persona-daten.md. Gut lesbar, kurze Sätze, Tabellen wo sinnvoll; so ausführlich wie nötig. Am Ende Befunde je Status per Skript nachzählen und im Kopf nennen.\n\nGEGENPRÜFUNG DER DREI BEREICHE (JSON):\n${JSON.stringify(pruefungen)}\n${KONTEXT}`,
    { label: 'ausarbeitung:dossier', phase: 'Ausarbeitung', schema: DATEI_SCHEMA })
})

const planP = Promise.all([dossierP, juryP]).then(([dossier, jury]) =>
  agent(`Schreibe den Gestaltungsplan für die Präsentation von Fallstudie 2 als Markdown-Datei ${OUT}/gestaltungsplan.md. Grundlage: die drei Richtungen in ${KONZEPT_DATEIEN}, die Urteile beider Jurys (JSON unten) sowie das Dossier ${OUT}/recherche-customer-journey.md (lies es; Inhalte auf den Folien müssen zu den Befunden dort passen und deren Status tragen). ${LESEN} Wähle die Richtung, die die Jurys empfehlen (bei Uneinigkeit begründet entscheiden), und übernimm die genannten Stärken der anderen.\nKopiere die drei Musterfolien (HTML + PNG, Pfade in den Konzeptdateien) nach ${OUT}/_entwuerfe/<richtung>/ (reise, markenwelt, faden; nur eigene Gestaltung, keine fremden Bilder – vorher prüfen; absolute file://-Pfade in den HTML-Dateien auf relative Pfade umstellen oder im Plan vermerken, dass die HTML-Dateien nur lokal laufen) und binde die PNGs im Plan ein.\nAufbau: 0 Kurzfassung (Entscheidung in 5 Sätzen) · 1 Die Regeln für FS2 (R1–R5, Gruppenregeln, „Der rote Faden“-Prinzipien – je Regel: woher sie stammt und wie der Plan sie umsetzt; Abweichungen begründen) · 2 Antwort auf jeden Kommentar von Prof. Stenger (Tabelle Kommentar → Maßnahme → Folie) · 3 Leitidee und Gestaltungssystem (Farben mit Hex und nachgerechneten Kontrasten hell/dunkel, Typografie, Raster, Komponenten, was es NICHT gibt) · 4 Bildplan (Tabelle: Bild | Folie | Art | Rechtestatus | Rückfall, falls Freigabe fehlt | was zu tun ist bis wann – OHNE Personen zuzuordnen, „Für Fallstudie 2 ist noch nichts verteilt“) · 5 Folienplan (höchstens 9 Hauptfolien: Nr., Titel als Kernaussage, 3–5 Stichpunkte, Visualisierung, Bild, Modell + Vorlesungsseite, Befund-IDs aus dem Dossier, Klicks, Sollzeit; Summenzeile Klicks ≤ 25, Zeit ≤ 12:30 nachgerechnet; Backup-Folien) · 6 Herzstück Journey-Map (genaue Spezifikation, Aufbau in Klicks, Musterfolie) · 7 Blog-Beitrag als Mock-up (wie gezeigt, welche Teile, Rückfall) · 8 Moodboard · 9 Interaktion und Vortrag (Einstieg, Position neben der Leinwand, Zeigen, Sprecherwechsel) · 10 Zeitkonzept und Generalproben · 11 Technik und Prüfung (Engine aus FS1 wiederverwenden: was übernommen, was neu; pruefen.mjs; Beamer-Test; Notfall-PDF) · 12 Meilensteine bis Mo 09.11.2026 (ohne Personen; Änderungsstopp) · 13 Offene Entscheidungen der Gruppe und Fragen an Prof. Stenger · 14 Herkunft (KI-gestützt erstellt, Workflow, Jury-Punkte).\nREGELN: Keine Bezeichnungen von KI-Modellen, keine Personenzuordnung, Fakten nur aus dem Dossier mit Status, Rechtliches als „keine Rechtsberatung“. Rechne Klicks, Zeiten und Kontraste per Skript nach.\n\nJURY (JSON):\n${JSON.stringify(jury.filter(Boolean))}\n\nDOSSIER-RÜCKMELDUNG:\n${JSON.stringify(dossier)}\n${KONTEXT}`,
    { label: 'ausarbeitung:gestaltungsplan', phase: 'Ausarbeitung', schema: DATEI_SCHEMA }))

const dossierFertigP = dossierP.then(d =>
  agent(`Schlussprüfung des Dossiers ${OUT}/recherche-customer-journey.md. Prüfe: (1) jede Zahl und jede Tatsachenaussage hat Status und Quellennummer, die Nummer existiert in Anhang B; (2) Stichprobe: öffne mindestens 12 Quellen selbst (verschiedene Kapitel, bevorzugt Zahlen, Rechtliches und Literaturangaben) und prüfe die Aussage; (3) keine Namen von Privatpersonen, keine Bezeichnungen von KI-Modellen, Statista nur wie in ${FS1}/persona-daten.md; (4) Vorlesungsseiten stimmen mit ${STENGER}; (5) Hypothesen sind als H markiert und nicht als Fakt formuliert; (6) Widersprüche zwischen Kapiteln; (7) Zählung der Befunde je Status im Kopf stimmt mit Anhang A; (8) Status im Text stimmt mit den Daten in ${DATEN}/ überein (Stichprobe). Nur lesen.\n${KONTEXT}`,
    { label: 'schlusspruefung:dossier', phase: 'Schlussprüfung', schema: CHECK_SCHEMA })
    .then(c => c && c.befunde.length
      ? agent(`Arbeite die Befunde der Schlussprüfung in ${OUT}/recherche-customer-journey.md ein. Prüfe jeden Befund zuerst selbst (Quelle öffnen, wenn nötig); übernimm nur, was stimmt. „muss“-Befunde immer bearbeiten (korrigieren, abschwächen oder Aussage streichen). Ergänze am Ende von Anhang A einen Abschnitt „Korrekturen aus der Schlussprüfung (30.10.2026)“ mit jeder Änderung. Ändere keine anderen Dateien.\n\nBEFUNDE (JSON):\n${JSON.stringify(c)}\n${KONTEXT}`,
        { label: 'einarbeitung:dossier', phase: 'Schlussprüfung', schema: FIX_SCHEMA }).then(f => ({ pruefung: c, einarbeitung: f }))
      : { pruefung: c, einarbeitung: null }))

const planFertigP = Promise.all([planP, dossierFertigP]).then(() =>
  agent(`Schlussprüfung des Gestaltungsplans ${OUT}/gestaltungsplan.md gegen die Regeln und das Dossier ${OUT}/recherche-customer-journey.md. Prüfe: (1) jede Regel R1–R5 und jede Gruppenregel ist umgesetzt oder die Abweichung begründet; (2) jeder Stenger-Kommentar hat eine Maßnahme; (3) höchstens 9 Hauptfolien, Klicks ≤ 25 und Sollzeit ≤ 12:30 – selbst nachzählen und -rechnen; (4) Kontraste der genannten Farbpaare per WCAG-Formel nachrechnen (Text ≥ 4,5 : 1, große Schrift/Grafik ≥ 3 : 1); (5) jeder Folieninhalt passt zu einem Befund im Dossier (ID und Status) oder ist als Platzhalter/H markiert; (6) Bildplan: jedes Bild hat einen Rechtestatus und einen Rückfall; nichts verlangt Social-Media-Bilder ohne Zustimmung des Betreuers; (7) keine Personenzuordnung, keine Bezeichnungen von KI-Modellen; (8) die Meilensteine passen in die Tage bis Mo 09.11.2026; (9) die eingebundenen Bilddateien existieren (${OUT}/_entwuerfe/). Nur lesen.\n${KONTEXT}`,
    { label: 'schlusspruefung:gestaltungsplan', phase: 'Schlussprüfung', schema: CHECK_SCHEMA })
    .then(c => c && c.befunde.length
      ? agent(`Arbeite die Befunde der Schlussprüfung in ${OUT}/gestaltungsplan.md ein. Prüfe jeden Befund zuerst selbst; übernimm nur, was stimmt; „muss“-Befunde immer bearbeiten. Ergänze am Ende einen kurzen Abschnitt „Korrekturen aus der Schlussprüfung (30.10.2026)“. Ändere keine anderen Dateien außer ${OUT}/_entwuerfe/, falls ein Bildpfad fehlt.\n\nBEFUNDE (JSON):\n${JSON.stringify(c)}\n${KONTEXT}`,
        { label: 'einarbeitung:gestaltungsplan', phase: 'Schlussprüfung', schema: FIX_SCHEMA }).then(f => ({ pruefung: c, einarbeitung: f }))
      : { pruefung: c, einarbeitung: null }))

const [pruef, jury, dossier, plan, dossierCheck, planCheck] = await Promise.all([pruefP, juryP, dossierP, planP, dossierFertigP, planFertigP])

const statistik = {}
for (const p of pruef.filter(Boolean)) {
  const s = {}
  for (const x of p.pruefungen) s[x.status] = (s[x.status] || 0) + 1
  s.zusatz = p.zusatzbefunde.length
  statistik[p.kuerzel + ' ' + p.bereich] = s
}
return {
  statistik_neu_geprueft: statistik,
  dossier,
  plan,
  jury: jury.filter(Boolean).map(j => ({ empfehlung: j.empfehlung, bewertungen: j.bewertungen.map(x => ({ richtung: x.richtung, gesamt: x.gesamt })), uebernahmen: j.uebernahmen, warnungen: j.warnungen })),
  dossierCheck: dossierCheck && { urteil: dossierCheck.pruefung && dossierCheck.pruefung.gesamturteil, befunde: dossierCheck.pruefung && dossierCheck.pruefung.befunde.length, nicht_geaendert: dossierCheck.einarbeitung && dossierCheck.einarbeitung.nicht_geaendert },
  planCheck: planCheck && { urteil: planCheck.pruefung && planCheck.pruefung.gesamturteil, befunde: planCheck.pruefung && planCheck.pruefung.befunde.length, nicht_geaendert: planCheck.einarbeitung && planCheck.einarbeitung.nicht_geaendert },
}
