# QUELLEN – Schriften, Bibliotheken, Icons, Bilder und KI-Unterstützung

Alles, was die Web-Präsentation (`index.html`) verwendet, liegt im Ordner `praesentation/` – es wird
nichts aus dem Internet nachgeladen (keine CDNs, keine externen Schriften, Skripte oder Bilder).
Stand: 16.10.2026.

## 1. Schriften (Ordner `schriften/`)

Alle Schriften: Format woff2, variable Schriften, nur die Zeichensätze „latin“ und „latin-ext“ (Deutsch
inkl. ä, ö, ü, ß, „ “ – €). Lizenz: **SIL Open Font License 1.1** (Lizenztexte `schriften/LIZENZ-*-OFL.txt`).
Bezogen über die npm-Pakete von **Fontsource** (https://fontsource.org, Version 5.3.0), Originalquelle
Google Fonts. Einzelheiten: `schriften/HERKUNFT.txt`.

| Schrift | Verwendung | Paket | Original |
|---|---|---|---|
| Fraunces (normal + kursiv) | Titel, Zahlen – Thema „Editorial“ (Standard) | `@fontsource-variable/fraunces` | github.com/undercasetype/Fraunces |
| Inter | Fließtext, Kicker – Editorial und Keynote | `@fontsource-variable/inter` | github.com/rsms/inter |
| Inter Tight | Titel – Thema „Keynote“ | `@fontsource-variable/inter-tight` | github.com/rsms/inter |
| Space Grotesk | Zahlen/Kicker – Thema „Keynote“ | `@fontsource-variable/space-grotesk` | github.com/floriankarsten/space-grotesk |
| Bricolage Grotesque | Titel – Thema „Bento“; Ersatzschrift für die HOLY-Überschriften auf Folie 09b | `@fontsource-variable/bricolage-grotesque` | github.com/ateliertriay/bricolage |
| Plus Jakarta Sans | Fließtext – Thema „Bento“; Ersatzschrift für den HOLY-Fließtext auf Folie 09b | `@fontsource-variable/plus-jakarta-sans` | github.com/tokotype/PlusJakartaSans |

Die Originalschriften von HOLY („ObviouslyNarrow“, „PP Agrandir“, laut Recherche-Dossier Kap. 6.3) sind
kommerziell und werden **nicht** verwendet; Folie 09b deutet sie mit frei lizenzierten Ersatzschriften an
(gekennzeichnet mit *).

## 2. Bibliotheken

| Bibliothek | Datei | Lizenz | Herkunft |
|---|---|---|---|
| qrcode-generator 2.0.4 (Kazuhiko Arase) | `js/vendor/qrcode-generator.js` (unverändert, nur umbenannt) | MIT (`js/vendor/LIZENZ-qrcode-generator.txt`) | npm-Paket „qrcode-generator“, https://github.com/kazuhikoarase/qrcode-generator |

„QR Code“ ist eine eingetragene Marke der DENSO WAVE INCORPORATED.

Alle übrigen Programmteile (`js/deck.js`, `js/komponenten.js`, `js/folien/*.js`, `css/*.css`,
`css/folien/*.css`, `werkzeuge/pruefen.mjs`) sind für dieses Projekt geschrieben (mit KI-Unterstützung,
siehe Abschnitt 5) – keine fremden Frameworks.

**Nur zum Prüfen, nicht Teil der Präsentation:** `werkzeuge/pruefen.mjs` nutzt **playwright-core**
(Version 1.56.1, Lizenz Apache-2.0, https://github.com/microsoft/playwright) mit einem Chromium-Browser.
Beides wird nicht mitgeliefert und ist für den Vortrag nicht nötig.

## 3. Icons, Zeichnungen und Grafiken

- **Icon-Satz** (Linien-Icons 24 × 24, Strichstärke 2; Inline-SVG-Sprite am Anfang von `index.html`):
  eigene Gestaltung, keine fremden Icon-Bibliotheken, keine Plattform-Logos.
- **Zeichnungen auf den Folien** (z. B. Tier-Piktogramme Waschbär, Adler, Löwe, Schwan auf Folie 08,
  Motiv-Piktogramme auf Folie 09/09b, Persona-Platzhalter auf Folie 04, Markensteuerrad, Limbic Map,
  Diagramme): eigene SVG-Zeichnungen bzw. per Skript aus den Daten erzeugt – kein Nachbau von
  Markenzeichen. Das Maskottchen „Raptor“ von HOLY wird nur benannt, nicht abgebildet.
- **Markensteuerrad** nach Esch, **Limbic Map** nach Häusel: eigene, vereinfachte Darstellungen.
  Limbic® ist eine eingetragene Marke der Gruppe Nymphenburg.

## 4. Bilder (Ordner `bilder/`)

| Datei | Inhalt | Herkunft |
|---|---|---|
| `platzhalter-raetsel.svg` | abstraktes Platzhalter-Motiv für das Einstiegsrätsel (Folie 01) | eigene Gestaltung – **bis 23.10. durch eigenes Foto ersetzen** |
| `platzhalter-logo.svg` | neutraler Logo-Platzhalter (Folie 09b) | eigene Gestaltung |
| `platzhalter-persona.svg`, `platzhalter-post.svg` | weitere Platzhalter (zurzeit nicht verwendet) | eigene Gestaltung |

Es sind **keine** Logos, Produktfotos oder Social-Media-Bilder von HOLY eingebunden. Eigene Bilder nur mit
geklärten Rechten verwenden und die Quelle in der Fußzeile der Folie nennen.

## 5. Inhalte und Fakten

- **Fakten über HOLY** (Zahlen, Historie, Produkte, Zielgruppe, Kanäle, Farben, Claims): ausschließlich aus
  dem Recherche-Dossier `../recherche/holy-recherche.md` (Stand 13./14.10.2026), jeweils mit Quellennummer
  [n] und Faktenstatus (✔ gesichert, ✎ korrigiert, ~ unsicher, H Hypothese). Das vollständige
  Quellenverzeichnis steht im Dossier (Anhang B) und auf Backup-Folie B7.
- **Markenfarben** Gelb `#FFD007` und Schwarz `#1D1D1B`: Dossier Kap. 6.3 ✔ [1] (Werte aus dem CSS der
  Website de.holy.com, kein offizieller Styleguide).
- **Beispieldaten:** Werte auf den Folien 06–11 und B2, B4–B6 sind Beispieldaten (Pille „Beispieldaten“),
  bis die Gruppe eigene Erhebungen einträgt.
- **Modelle und Fachbegriffe** (Markensteuerrad nach Esch, Limbic Map nach Häusel, Repertory Grid nach
  Kelly, Laddering/Means-End-Chain nach Gutman sowie Reynolds & Gutman, Brand Personality nach Aaker,
  Schlüsselbild nach Kroeber-Riel): nach Standardliteratur aus dem Modellwissen der KI – **mit den
  Vorlesungsfolien von Prof. Stenger abgleichen**. Jahr und Auflage für Esch und Häusel sind noch zu ergänzen
  (Backup B7).
- **HOLY** ist eine Marke der HOLY Softdrinks GmbH; sie wird hier nur im Rahmen der Lehrveranstaltung
  analysiert. Erwähnte Wettbewerber (z. B. Red Bull, waterdrop) gehören ihren jeweiligen Inhabern.

## 6. KI-Unterstützung

Diese Präsentation wurde **mit KI-Unterstützung erstellt: Claude Code (Anthropic)** – Engine, Designsystem,
Folienaufbau, Diagramme, Sprechtext-Entwürfe, Prüfwerkzeug und diese Dokumentation. Die Gestaltung wurde in
drei Richtungen entworfen und per Jury-Bewertung ausgewählt (`_entwuerfe/JURY.md`). Alle Prompts,
Unteragenten und Prüfschritte sind im KI-Nachweis der Gruppe dokumentiert (`../../ki-nachweis/`). Inhalte
über HOLY stammen aus dem geprüften Recherche-Dossier, nicht aus dem Modellwissen; Beispieldaten sind
gekennzeichnet. Die Gruppe prüft und verantwortet alle Inhalte vor dem Vortrag.
