<!-- Erzeugt am 03.11.2026 im Workflow zu Fallstudie 2 (Bau der Konzept-Webseite nach gestaltungsplan.md Abschnitt 7).
KI-gestützt erstellt, Prüfung durch die Gruppe offen. Keine neue Websuche in diesem Schritt: Alle Fakten stammen aus dem
Recherche-Dossier FS2 (Befund-IDs), Gestaltung und Texte sind Entwürfe. Automatisch geprüft mit werkzeuge/pruefen.mjs.
Ergänzt am 03.11.2026 im Workflow D06 (Einbau Bilder): Fassung mit HOLY-Produktbildern (Abschnitt 3a), Prüfung beider
Fassungen; keine neue Websuche in diesem Schritt (Bilder und Nachweise aus dem Beschaffungsschritt von D06).
Ergänzt am 03.11.2026 im Workflow D07: Veröffentlichung der Bilder abgebildet (Beschluss der Gruppe, KI-Nachweis FS2 Nr. 17),
Befunde der Abnahme D06 umgesetzt (Abschnitt 3a, 7, 9); keine neue Websuche, keine neuen Downloads (Zuschnitte aus vorhandenen
Dateien).
Ergänzt am 03.11.2026 im Workflow D08: Befunde der Abnahme D07 umgesetzt – Rechtestatus der Fremdbilder präzisiert (keine
Genehmigung der Rechteinhaber eingeholt), Symbolbild-Unterschriften, Logo-Regel, Startpackung aus ?packung=, Nachkauf ohne
Shaker, Prüfung der Versionierung (Abschnitt 3, 3a, 4, 7, 9); keine neue Websuche, keine neuen Downloads (ein Zuschnitt aus
einer vorhandenen Rohdatei).
Ergänzt am 03.11.2026 im Workflow D09: Gestaltung „Kampagnen-Look“ (Siegerentwurf) auf alle 7 Seiten übertragen – die Seite
soll wie ein echter Shop von HOLY aussehen, nicht wie ein Entwurf (Yannick, 03.11.2026); Kennzeichnung, Prüfung und
Bildplätze angepasst (Abschnitt 2, 3, 3a, 4, 5, 7, 9); keine neue Websuche, keine neuen Downloads, keine neuen Zuschnitte
(neue Register-Schlüssel nur für vorhandene Dateien). -->

Modul Unternehmenskommunikation · Prof. Dr. Daniel Stenger · Hochschule Kaiserslautern

# Konzept-Webseite HOLY – der zentrale Weg (SOLL) zum Durchklicken

HOLY · Persona Marco (FS1, fiktiv) · Fallstudie 2 „Customer Journey“, Aufgabe A7 (Mock-ups) · Stand Di, 03.11.2026 ·
**Entwurf, Prüfung durch die Gruppe offen**

> **Studentisches Konzept der Gruppe (HS Kaiserslautern) – keine Website der HOLY Softdrinks GmbH · keine Bestellung
> möglich.** Logo als Gestaltungselement nur als HOLY-Wortmarke im Kopf (mit Einverständnis des Gründers laut Yannick,
> KI-Nachweis FS2 Nr. 12); auf den Produktbildern der Fassung mit Bildern ist das Logo Teil der Packung (Nachweis im
> Fuß); kein gelbes Oval und kein Verpackungsdesign als eigene Gestaltung, keine HOLY-Schriften. **Fassung mit Bildern**
> (Standard: Repository, GitHub Pages, Hörsaal): Produktbilder und Grafiken der HOLY Softdrinks GmbH sowie Fotos Dritter
> aus `fremdbilder/`, jedes mit Bildnachweis (Abschnitt 3a) – Veröffentlichung von der Gruppe beschlossen (KI-Nachweis
> FS2 Nr. 17), keine Genehmigung der Rechteinhaber eingeholt; nicht kommerziell, für die Lehrveranstaltung; keine eigenen
> Fotos der Gruppe.
> **Rückfall ohne Fremdbilder** nur, wenn `fremdbilder/register.js` fehlt: eigene Zeichnungen und Platzhalter. Keine
> Screenshots. Nichts wird gesendet oder gespeichert. Rechtliche Einordnungen sind Einschätzungen von Studierenden und
> keine Rechtsberatung.
>
> **Gestaltung seit D09 („Kampagnen-Look“):** Die Seiten sehen bewusst wie ein echter Shop von HOLY aus (Sortenfarben als
> Fläche, Ankündigungsleiste, Kopf mit Menü, Wortmarke und Symbolen, weiße Kauf- und Infokarten). Damit sie trotzdem nicht
> als HOLY-Seite durchgehen, bleiben die Hinweisleiste oben (wörtlich, immer sichtbar), `noindex`, die Kennung im Fuß jeder
> Seite, „Werbung“ am Creator-Code, „Symbolbild“ am Bild, „Platzhalter“ an den Bewertungen und „Vorschlag der Gruppe“ an
> jeder Garantie; kein Knopf bestellt etwas (Abschnitt 3).

## 1 Zweck

Die Aufgabenfolie verlangt „Mockups der optimierten Touchpoints“ (A7, Wortlaut in [`../README.md`](../README.md)).
Prof. Stenger hat zusätzlich angeregt, eine eigene HOLY-Webseite zu bauen, wie die Gruppe sie sich besser vorstellt
(laut Yannick, 03.11.2026). Diese Webseite setzt die fünf Top-Touchpoints des **zentralen Wegs (SOLL)** aus
[`../gestaltungsplan.md`](../gestaltungsplan.md) Abschnitt 5.2 als zusammenhängende Strecke um. Wer von `index.html`
bis `squad.html` klickt, geht den gelben Pfad von Folie 06; jede Seite verlinkt die nächste Station. Was jede Seite
ändert, folgt aus einem Bruch im IST (Gestaltungsplan 6.7, Dossier 5.1) und einem Vorbild aus einer anderen Branche
(Dossier Kapitel 7a, Befunde X01–X17). Auf Folie 08 erscheinen die Seiten als Bildschirmfotos in Handyrahmen
(Gestaltungsplan 7.4), live zeigbar im Präsentationsmodus.

## 2 Seiten

| Datei | Phase (S. 108/109) | Top-Touchpoint (Gestaltungsplan 5.2) | Überleitung (6.7) | Was die Seite ändert | Vorbild | Befunde (Auswahl) |
|---|---|---|---|---|---|---|
| [`index.html`](index.html) | Inspiration · AWARE | Creator-Kurzvideo mit Code und klarer Weiterleitung: Landingpage für Besucher aus dem Video | Ü1 wackelt → trägt | Code aus dem Video steht schon da (`?code=`), „Werbung“ neben Creator und Code, zwei klare Wege (Produkt, Koffein-Check), Kernfakten als Text | ✔ X01 · ✎ X02 · ✔ X03 | ✔ L34 · ✔ T02 · ✔ L95 · ✔ R25 · ~ B21 |
| [`koffein-check.html`](koffein-check.html) | Recherche · APPEAL | eigene Antwortseite „Koffein-Check“ | Ü2 bricht → schließen | Antwort zuerst („Kurz gesagt“), eine Frage je Abschnitt mit fester Adresse, nur Etikett- und EFSA-Werte mit Quelle, FAQ mit strukturierten Daten, Klartext-Fassung [`koffein-check.txt`](koffein-check.txt) für KI-Assistenten, Quellen und Stand | ✔ X04 · ✎ X05 · ✔ X06 | ✔ S92 · ✔ S27 · ✎ S31 · ✎ S28 · ✎ S30 · ✔ R17 · ✔ R19 · ✎ R20 · ✎ S22 |
| [`produkt.html`](produkt.html) | Entscheidung · ASSURE | Produktseite mit Preis je Portion, Bewertungen, einheitlicher Garantie | Ü2/Ü3 | Packungen in einer Liste mit Preis je Portion und Grundpreis ohne Code, Endpreis inklusive Versand, ein Lieferdatum, eine Garantie für alle Kaufwege, Koffein als Text, Bewertungen mit Herkunft (Texte nur Platzhalter) | ✎ X07 · ✔ X08 · ✔ X09 · ✔ X12 | ✔ B09 · ✔ B10 · ✔ T20 · ✔ R98 · ✔ B12 · ✔ B91 · ✎ T18 · ✔ T17 · ✎ R27 |
| [`warenkorb.html`](warenkorb.html) | Kauf · ACT | mobiler Warenkorb/Checkout mit klarer Lieferzeit | Ü3 wackelt → tragen | ein Lieferdatum mit Bestellschluss oben, Code sichtbar übernommen, Endpreis inklusive Versand, Express-Knöpfe vor dem Formular (ohne Logos), Gast ohne Konto, Coins im Warenkorb, Altershinweis ohne falsche Rechtsbehauptung; kein Formular, nichts wird abgeschickt | ✎ X10 · ~ X11 · ✔ X12 · ✔ X15 | ✔ B91 · ✔ B90 · ✔ B12 · ✔ T22 · ✔ T23 · ✔ T32 · ✎ R20 · ✔ R90 · ✎ B05 |
| [`danke.html`](danke.html) | Bindung · ADVOCATE | Willkommens- und Nachkauf-Strecke mit SQUAD Rewards (Danke-Seite) | Ü4 wackelt → tragen | Zustelltag und Tracking-Mail, drei funktionierende nächste Schritte (statt 404-Link), Squad-Einstieg in einem Schritt (ab 18 wie der Shop), Nachfüll-Erinnerung als Opt-in-Konzept mit Rechner (ohne Abo), Vorschau der Feedback-Mail „Wie schmeckt's?“, Zubereitung, Service | ✔ X12 · ✔ X13 · ✔ X14 · ✔ X15 | ✎ T31 · ✔ T30 · ✔ T34 · ✔ L96 · ✎ B05 · H B25 · ✔ T19 |
| [`squad.html`](squad.html) | Bindung · ADVOCATE | SQUAD Rewards: Stufen, Einlösen, Freunde werben (Platz 2), Nachkauf | Ü4 | Kontostand und Level oben, vier Level als eigene Stufen-Grafik (mit HOLYs Level-Abzeichen), Einlösen im Warenkorb, Freunde werben mit einer Regel, Nachkauf der 50er-Dose in einem Klick (Persona), Tipp aus dem Feedback; der Weg schließt sich zurück zum Kauf | ✔ X13 · ✔ X14 · ✔ X15 | ✔ T32 · ✔ T33 · ✔ B13 · ✔ T30 · ✔ T35 · ✔ B30 |
| [`haendler.html`](haendler.html) (optional) | Nebenweg Handel (gestrichelt) | Supermarktregal mit Händlerfinder (Platz 3 Kauf), Ziel des QR-Codes auf der Handelspackung | Nebenweg bricht → Brücke | in den Squad ohne Bon-Foto, IBAN und Pflichtfragen, dieselbe Garantie wie online, Händlerfinder nur mit Platzhaltern („Beispielmarkt“) | ✎ X16 · ✎ X17 | ✔ B01 · ✎ T28 · ✔ B03 · ✔ B96 · ✔ S90 · H D1 §7.2 |

Ablauf des zentralen Wegs: `index.html` → `koffein-check.html` → `produkt.html` → `warenkorb.html` → `danke.html` →
`squad.html` → (Nachkauf) `warenkorb.html?packung=50&nachkauf=1`. Jede Seite hat unten eine Schlussfläche zur nächsten
Station (die Beschriftung „Nächste Station · …“ steht nur im Präsentationsmodus; im Warenkorb steht die ganze Fläche nur
dort, weil die Bezahlknöpfe weiterführen) und im Fuß die Liste aller Stationen.

**Gestaltung je Seite (D09, „Kampagnen-Look“, Siegerentwurf übertragen auf alle 7 Seiten):**

| Datei | Wirkt wie | Aufbau |
|---|---|---|
| `index.html` | Kampagnenseite, die in den Shop übergeht | pinke Bühne mit „Dein Code ist schon drin.“, Code als Gutschein (Etikett „aktiv“, „Werbung“), gelber Knopf mit Produkt-Tag, großes Produktfoto mit Plakette „Das Produkt aus dem Video“; schwarzes Bewertungs-Band (Sterne anteilig gefüllt); gelbe Fläche „HOLY Energy in vier Zahlen“; Packungs-Karten in vier Sortenfarben; schwarze Fläche zum Koffein-Check mit Zubereitungsfoto; die Skizze „So kommst du hierher“ nur im Präsentationsmodus |
| `koffein-check.html` | Ratgeber-Artikel im Shop | Rubrik „Ratgeber“, große Überschrift, Zeile „Ratgeber · Stand · 7 Quellen“ (Verfasser und Abrufdatum im Präsentationsmodus), „Kurz gesagt“ in Gelb; ab 900 px Inhaltsverzeichnis rechts (klebt); Balken, aufklappbare Fragen; schwarze Schlussfläche mit Produktbild |
| `produkt.html` | Produktseite wie HOLYs Raptor-Seite | Pink, große Bildkarte mit Galerie (ab 900 px darunter drei Kacheln: 0,1 g Zucker, 160 mg Koffein, 7 g auf 500 ml), weiße Kaufkarte (Packungen mit Packshot, Code-Zeile, Preisblock, Kaufknopf, Mix-&-Match-Zeile, Lieferdatum, Vorteile-Band mit Garantie-Siegel „Vorschlag der Gruppe“); 160-mg-Kachel auf Gelb, „Was drin ist“ mit Mix & Match, Bewertungskarten wie bei HOLY (Sorte und Packung, Sterne, „Verifizierter Kauf“, „Antwort von HOLY“) mit grauen Platzhalterzeilen statt Text und dem Etikett „Platzhalter“, Garantie auf Schwarz; Kaufleiste unten, sobald der Kaufknopf aus dem Bild ist |
| `warenkorb.html` | Shop-Warenkorb | Lieferdatum, Artikel mit Vorschaubild und Mengenanzeige „− 1 +“ (nur Anzeige, kein Eingabefeld), Anzahl „1“ am Warenkorb-Symbol; Zusammenfassung mit Endpreis, Versandkosten-Leiste (frei ab 49 €), Express-Knöpfen (nur Text, ohne fremde Logos: Apple Pay schwarz, Google Pay weiß, PayPal gelb) und Knopf „Zur Kasse“ mit Unterzeile „als Gast, ohne Konto“ (ab 900 px rechts, klebt); Mix & Match, Coins, Altershinweis als Karten |
| `danke.html` | Bestellbestätigung | Erfolgszeichen, Bestellnummer und Zustelltag auf Pink, direkt darunter der Squad-Einstieg (gelbe Karte mit „Squad beitreten“), Paket als Symbolbild; drei nächste Schritte als Karten; Bestellübersicht (dieselbe Rechnung wie im Warenkorb); Nachfüll-Erinnerung auf Gelb; Feedback-Mail, Zubereitung, Service-Kacheln |
| `squad.html` | Kundenkonto / Rewards-Dashboard | Pink wie HOLYs Rewards-Seite, Schriftzug, Bereiche als Reiter (Sprungmarken), Karten: Kontostand mit Level-Fortschritt, Einlösen, Freunde werben, Nachkauf, vier Level, Tipp, Community |
| `haendler.html` | QR-Landingpage | Bühne in Lila, Packungscode als Gutschein (Etikett „übernommen“), ein Hauptknopf, Regal als Symbolbild; drei Schritte als Kacheln; Garantie auf Schwarz; Händlerfinder als Filialliste (Marktkarten mit Pin, Packung und Entfernung; feste Beispiel-PLZ, keine Eingabe), ab 900 px daneben eine eigene Kartenskizze; Regalfoto ab 900 px im eigenen Format statt quadratisch |

Kopf auf allen 7 Seiten gleich: Menü-Knopf (mobil, `aria-expanded`, Escape schließt), Wortmarke, Navigation (Energy,
Starter Set, Koffein-Check, SQUAD Rewards, Im Supermarkt gekauft?), Symbole Konto (→ `squad.html`) und Warenkorb
(→ `warenkorb.html`) – beide führen nur zu Konzeptseiten; „Energy“ führt zur Produktseite mit der 50er-Dose
(`produkt.html?packung=50`), „Starter Set“ zur Produktseite mit dem Set. Fuß auf allen 7 Seiten gleich: zwei
Shop-Spalten (Shop, Hilfe & Fakten), darunter (ab 900 px rechts daneben) das Kleingedruckte: Kennung, Wortmarken-Hinweis,
Bildnachweise als Fließtext, Quellen und Stand (mit Link „Quellen und Stand“), Beispielwert-Satz, KI-Offenlegung.
Leitsatz „HOLY Energy – so könnte es gehen.“ und „Stationen des Konzepts“ nur im Präsentationsmodus (`.fuss-praes`).

**D09-Nacharbeit (04.11.2026, Abnahme Gestaltung und Technik):** Die Seite wirkte vor allem noch wegen ihrer Texte und
des Fußes wie ein Entwurf. Geändert: Bewertungskarten ohne Blindtext (graue Platzhalterzeilen, Etikett „Platzhalter“
bleibt); kein „Grundpreis offen …“ am Hauptpreis (Starter Set: nur „inkl. MwSt.“, der Satz steht im Präsentationsmodus;
Dosen: „Grundpreis 114,26 € / kg*“, Herkunft der Rechnung als Fußnote und im Fuß); Fuß von 1.650–2.089 px auf rund
830–1.180 px (390 px) gekürzt; Abrufstempel, Befund-IDs, „Studentischer Entwurf“ und Erklärsätze für die Jury in den
Präsentationsmodus (`.nur-anm-i`, `.anm`) bzw. in Shop-Ton umgeschrieben; Bestellnummer „Nr. 100248“ statt
„HOLY-KONZEPT-0001“; geschützte Leerzeichen zwischen Zahl und Einheit; Bilder für Pulver, Schütteln, Starter Set, Paket
und Regal in höherer Auflösung (Register: `pixel`, `platz`); Fokus nicht mehr von Kaufleiste oder Knopf „Anmerkungen
ansehen“ verdeckt (`scroll-padding-bottom`). Prüfungen dazu: `pruefen.mjs` Punkt 13.

## 3 Kennzeichnung und Regeln (Gestaltungsplan 7.3) – so umgesetzt

| Regel | Umsetzung | geprüft |
|---|---|---|
| Hinweisbalken fest und nicht ausblendbar | erstes Element jeder Seite, `position: sticky` oben, ohne Knopf, wörtlich „Studentisches Konzept der Gruppe (HS Kaiserslautern) – keine Website der HOLY Softdrinks GmbH · keine Bestellung möglich“; steht auf jedem Bildschirmfoto. Seit D09 gestaltet wie HOLYs Ankündigungsleiste: Zitronengelb #FFF200, schwarze Schrift (14,4 : 1), Bricolage 13,5 px, Laufweite 82 %, Gruppenteil fett; bei 390 px zwei Zeilen (50 px), bei 320 px drei. Sie fällt weniger auf als der frühere schwarze Balken – ob das reicht, entscheidet die Gruppe (Abschnitt 7) | `pruefen.mjs` (Text, oben, nach dem Scrollen, Kontrast) |
| `noindex,nofollow` | `<meta name="robots" content="noindex,nofollow">` auf jeder Seite | `pruefen.mjs` |
| Logo als Gestaltungselement nur als Wortmarke im Kopf, keine HOLY-Schrift | `bilder/holy-logo-wortmarke.png` (unverändert aus FS1, © HOLY Softdrinks GmbH, mit Einverständnis des Gründers laut Yannick, KI-Nachweis FS2 Nr. 12); seit D09 ohne „Konzept“ darunter (die Hinweisleiste trägt die Kennzeichnung); Quelle im Fuß jeder Seite. Auf den Produktbildern der Fassung mit Bildern (Packshots, Shaker, Fotos) ist das Logo Teil der Packung, Nachweis im Fuß. Kein gelbes Oval und kein Verpackungsdesign als eigene Gestaltung (auch nicht in den eigenen Zeichnungen) | `pruefen.mjs` (im Rückfall nur dieses eine Bild erlaubt; kein Element mit „Logo“ in `alt`/`aria-label` außerhalb von `fremdbilder/`), Sichtprüfung |
| Fremdbilder nur mit Nachweis | Fassung mit Bildern: `img` nur aus `fremdbilder/` (Abschnitt 3a), jedes mit `alt`, `width`/`height` und Bildnachweis im Fuß („Motiv: Nachweis“); seit D09 keine Unterschrift mehr unter jedem Bild, Symbolbilder tragen dafür das Etikett „Symbolbild“ direkt am Bild; kein `video`, `iframe`, keine Screenshots. Eigene Inline-SVG (Skizze „Video → Tag → Shop“, Kalender, Garantie-Siegel, Dose mit Kalender, QR-Platzhalter, nicht scanbar) bleiben in beiden Fassungen. Rückfall ohne Fremdbilder: außer der Wortmarke keine `img`, dazu die Platzhalterfläche „Platzhalter: eigenes Produktfoto folgt“ | `pruefen.mjs` (beide Fassungen; Etikett „Symbolbild“ sichtbar) |
| keine Datenübermittlung | kein `form`, kein `input`; Knöpfe führen nur zur nächsten Konzeptseite; Auswahlknöpfe (Packung, Trinkhäufigkeit, Opt-in, Galerie der Produktseite) ändern nur die Anzeige; kein `localStorage`, keine Cookies | `pruefen.mjs` |
| keine externen Anfragen | Schriften lokal (`schriften/`), kein CDN, keine Analyse-Skripte; Quellen stehen als Text, nicht als Link | `pruefen.mjs` (Netz gesperrt, 0 Anfragen) |
| Daten nur mit Befund-ID | jede übernommene Zahl hat im Code einen Kommentar mit Befund-ID und im Präsentationsmodus eine Anmerkung. Seit D09: In der normalen Ansicht nennt der Fuß jeder Seite die Beispielwerte („Creator, Creator-Code und Rabatt sind Platzhalter. Liefertermine, Bestellnummer, Coins und Kontostände sind Beispielwerte.“, auf der Händlerseite zusätzlich „Packungscode, Postleitzahl und Märkte sind Platzhalter.“); die Etiketten „Beispielwert“, „Beispiel“, „Beispielrechnung“, „Rechenbeispiel“, „Beispieltext“ stehen nur im Präsentationsmodus (`.nur-anm-i`). Immer sichtbar bleiben „Platzhalter“ an den Bewertungskarten, „Beispielmarkt“ und der Platzhalter-Satz im Händlerfinder, „Vorschlag der Gruppe“ an jeder Garantie (seit der D09-Nacharbeit trägt die Bestellnummer kein „KONZEPT“ mehr: „Nr. 100248“, Beispielwert laut Satz im Fuß, im Präsentationsmodus mit Etikett „Beispiel“; Abschnitt 5) | `pruefen.mjs` (Satz im Fuß, „Platzhalter“, „Vorschlag der Gruppe“, Etiketten nur im Präsentationsmodus), Sichtprüfung |
| Leitplanken Dossier 8.3 | keine Fokus-, Wach-, Leistungs-, Gesundheits- oder Abnehmversprechen; Koffein nur Etikett- und EFSA-Werte mit Quelle; kein „erst ab 18 erlaubt“; Grundpreis bei jedem Preis (beim Starter Set offen, Abschnitt 7); „Werbung“ neben jedem sichtbaren Creator-Code (Startseite zweimal, Produktseite, Warenkorb, Danke-Seite); keine neuen Werbeaussagen in der Shop-Gestaltung (kein „Zuckerfrei“-Symbol, keine Vitamine, kein NewCaff als Kachel – nur Werte, die schon auf der Seite standen) | `pruefen.mjs` („Werbung“ am Code); Sichtprüfung; vor dem Änderungsstopp abhaken |
| KI-Offenlegung und Stand | Fuß jeder Seite (Kleingedrucktes): „Texte KI-gestützt entworfen · Prüfung durch die Gruppe offen · Gruppe Heisler, Knauber, Welker · Stand 04.11.2026“ | Sichtprüfung |
| Gestaltung | Seit D09 („Kampagnen-Look“, **Abweichung vom Gestaltungsplan 3.2–3.4 und 3.7**, dokumentiert in Gestaltungsplan 7.3): Zitrone #FFF200 (Leiste), Gelb #FFD007 (Knöpfe, Flächen), Raptor-Pink #F08EB8 (Start-, Produkt-, Danke-, Squad-Seite) und Hellpink #F7BDC7 (Bildkarten), Lila #C09CE3 (Händlerseite, Karte), Orange #F9C168, Limette #DCE168, Schwarz #1D1D1B, Weiß, Creme #FCF8F0, Beige #EFE6D6, Grau #F3F0EA; auf Pink, Lila und Orange nur schwarze Schrift, Schiefer #5C5547 nur auf Weiß, Creme und Gelb. Schriften: Bricolage Grotesque (Überschriften, Preise, 75 %, 800) und Inter (Fließtext, Knöpfe in Großbuchstaben) lokal statt Libre Franklin; Kontraste im Kopf von `assets/konzept.css` | `pruefen.mjs` (Kontrast jedes sichtbaren Textes ≥ 4,5 : 1, groß ≥ 3 : 1; beide Schriften geladen) |
| Mobil zuerst | 390 px ohne waagerechtes Scrollen (auch 320 px), ab 900 px Desktop-Raster (Produktseite und Warenkorb zweispaltig mit klebender Karte, Ratgeber mit Inhaltsverzeichnis rechts, Squad dreispaltig); bei 390 × 844 im ersten Bildschirm: Code-Box und Knöpfe (Start- und Händlerseite), Titel, Bewertung und erster Preis (Produktseite), Lieferdatum und Endpreis (Warenkorb, jede Packung), erster Punkt von „Kurz gesagt“ (Koffein-Check), Titel mit Zustelltag (Danke-Seite), Kontostand (Squad); Fokusrahmen 3 px sichtbar | `pruefen.mjs` (320, 390 und 1280 px) |
| Ehrlich trotz Shop-Anmutung | „(Konzept)“ steht seit D09 nicht mehr in Knopftexten, „KONZEPT“ nicht mehr unter der Wortmarke – dafür Hinweisleiste, Kennung im Fuß jeder Seite, Beispielwert-Satz und „keine Bestellung möglich“; alle Knöpfe (auch Apple Pay, Google Pay, PayPal, Konto, Warenkorb) führen nur zur nächsten Konzeptseite; Sätze wie „Konzept: Der Knopf führt nur zur nächsten Konzeptseite“ stehen im Präsentationsmodus | `pruefen.mjs` (Kennung, Satz und Quellen-Link im Fuß; keine Formulare) |

## 3a Fassung mit Bildern (Standard) und Rückfall ohne Fremdbilder

Auftrag Yannick, 03.11.2026 (KI-Nachweis FS2 Nr. 15): Bilder von HOLY herunterladen, Webseite und Präsentation sollen gut
aussehen. Die Bilder lagen zuerst nur in einer ausgeschlossenen „internen Fassung“. Die Veröffentlichung hat die Gruppe
beschlossen (Yannick, KI-Nachweis FS2 Nr. 17: „Du darfst die Sachen online auf github posten für die online pages ich
erlaube es dir“). Seitdem sind die ausgewählten Bilder veröffentlicht – **Veröffentlichung von der Gruppe beschlossen
(KI-Nachweis FS2 Nr. 17), keine Genehmigung der Rechteinhaber eingeholt** (HOLY Softdrinks GmbH; beim Regalfoto die
Lebensmittel Zeitung bzw. der unbekannte Urheber; beim Kartonfoto der nicht genannte Urheber, Herkunft je Bild in
`fremdbilder/register.js`); **nicht kommerziell, für die Lehrveranstaltung; keine eigenen Fotos der Gruppe.** Das ist
eine Entscheidung der Gruppe, keine Erlaubnis der Rechteinhaber und keine Rechtsberatung. Sie liegen versioniert in
`fremdbilder/`. Ausgeschlossen
(`.gitignore`) bleiben nur Rohdownloads (`../praesentation/intern/roh/`), Kontaktbogen, Abnahme- und Vorschaubilder in
`intern/` sowie die alte Kopie `intern/alt-vor-veroeffentlichung/`.

| | Fassung mit Bildern | Rückfall ohne Fremdbilder |
|---|---|---|
| Wann | Standard: Repository, GitHub Pages, Hörsaal | nur, wenn `fremdbilder/register.js` fehlt; Prüfung mit `pruefen.mjs --fassung rueckfall` |
| Bilder | Wortmarke, eigene Zeichnungen und 22 Bilddateien aus `fremdbilder/` (38 Schlüssel im Register, davon 5 neu in D09 für vorhandene Dateien): Produktbild Raspberry Raptor, Galerie, Packshots, Versandkarton (Symbolbild), Shaker, Zubereitung, SQUAD-Grafiken, Regal im Handel (Symbolbild) | Wortmarke, eigene Zeichnungen, Platzhalter |
| Fuß | „Bilder: Produktbilder und Grafiken der HOLY Softdrinks GmbH sowie Fotos Dritter (Herkunft je Bild unten), Abruf 03.11.2026 – Veröffentlichung von der Gruppe beschlossen (KI-Nachweis FS2 Nr. 17), keine Genehmigung der Rechteinhaber eingeholt; nicht kommerziell, für die Lehrveranstaltung; keine eigenen Fotos der Gruppe.“ und die Liste „Bildnachweise auf dieser Seite“ (je Eintrag „Motiv: Nachweis“, gleiche Nachweise zusammengefasst) | „Keine HOLY-Fotos: Zeichnungen und Platzhalter sind eigene Entwürfe.“ |
| Bildschirmfotos | `_vorschau/` (versioniert, oberer Bildschirm – so sieht es auf GitHub Pages aus); ganze Seiten in `intern/vorschau/` (ausgeschlossen) | `intern/vorschau-rueckfall/` (ausgeschlossen) |

**So funktioniert es:** Jede Seite lädt `<script src="fremdbilder/register.js">` vor `assets/konzept.js`. Die Datei setzt
`window.INTERN_BILDER` (je Schlüssel: `datei`, `alt`, `nachweis`, optional `unterschrift`, `motiv`, `platz`, `quelle`,
`pixel`). `konzept.js` setzt in jedes Element mit `data-intern="schlüssel"` ein `<img>` mit `width`/`height` und `alt`
(`alt=""` nur in Knöpfen und Links, deren Text die Packung schon nennt: `data-intern-deko`); Bilder unter dem ersten
Bildschirm mit `loading="lazy"`. `{packung}` im Schlüssel wird durch die Packung aus der Adresse ersetzt; gibt es den
Schlüssel für diese Packung nicht, bleibt der Platz leer (Shaker auf der Danke-Seite bei 10 und 1 Portion). Die kurze
`unterschrift` (sonst der `nachweis`) steht weiter im Element `[data-intern-nachweis]` am Bild, wird aber seit D09 nicht
mehr angezeigt (CSS; `pruefen.mjs` vergleicht sie weiter); sichtbar ist der volle Nachweis mit Motiv davor im Fuß. Beginnt
der `nachweis` mit „Symbolbild · “, setzt `konzept.js` das Etikett „Symbolbild“ an das Bild. Fehlt `register.js` oder lädt
ein Bild nicht, bleibt bzw. kommt die Platzhalterfläche zurück – ohne kaputtes Bild-Symbol; neue Bildplätze bleiben dann
ausgeblendet (`hidden`). Angenommen werden nur Dateien aus `fremdbilder/`. Hinweisbalken, `noindex`, keine Formulare,
keine externen Anfragen und alle Rechnungen sind in beiden Fassungen gleich.

**Namen aus der Zeit vor dem Veröffentlichungsbeschluss:** `window.INTERN_BILDER`, die Attribute `data-intern`,
`data-intern-*`, `data-nur-intern`, die Klassen `intern-bild`, `intern-bilder` und `hat-intern-bild` sowie der Schalter
`--intern` von `werkzeuge/folie08-bilder.mjs` heißen noch „intern“; sie bedeuten heute „Fassung mit Bildern“. Das
Gegenstück `data-nur-oeffentlich` (damals hieß die Fassung ohne Fremdbilder „öffentlich“) heißt heute: nur im Rückfall
ohne Fremdbilder sichtbar (Satz „Keine HOLY-Fotos …“ im Fuß). Alle diese Namen bleiben aus technischen Gründen
(Präsentation und Prüfskripte greifen darauf zu). In der Präsentation gilt dasselbe für `js/folien/intern-bilder.js` und
`html[data-fassung="intern"]`.

**Bildplätze** (Schlüssel aus `fremdbilder/register.js`; Herkunft je Bild steht im Fuß der Seite und im Register, Abruf
jeweils 03.11.2026):

| Seite | Platz | Schlüssel | Herkunft |
|---|---|---|---|
| `index.html` | Produkt-Tag im Knopf „Zum Produkt aus dem Video“: freigestellter Packshot der 50er-Dose auf heller Fläche; der Knopf führt zu `produkt.html?packung=50` (50er-Dose vorgewählt, passend zum Tag) | `web-start-tag` | HOLY-Shop, Shop-Variante „50 Portionen“ |
| `index.html` | großes Bild „Das Produkt aus dem Video“ in der Bühne (D09; vorher Produktkarte neben der Skizze) | `web-start-video` | HOLY-Produktseite Raspberry Raptor |
| `index.html` | Packungs-Karten „Starter Set Energy“, „50 Portionen“, „10 Portionen“, „1 Portion“ (D09; `alt=""`, weil der Kartentext die Packung nennt) | `web-start-teaser-set`, `web-start-karte-50`, `-10`, `-1` | HOLY-Shop, freigestellt (dieselben Dateien wie Galerie bzw. Packungswahl) |
| `index.html` | schwarze Fläche zum Koffein-Check: Zubereitung (Pulver) (D09) | `web-start-portion` | HOLY-Produktseite (dieselbe Datei wie `web-produkt-galerie-3`) |
| `koffein-check.html` | ein ruhiges Bild unter „Wie viel Koffein steckt in einer Portion?“: ein Sachet = eine Portion, kein Etikettbild | `web-koffein-portion` | HOLY-Shop, Shop-Variante „1 Portion“ |
| `koffein-check.html` | schwarze Schlussfläche „Alles klar? Dann zum Produkt.“ (D09) | `web-koffein-produkt` | HOLY-Produktseite Raspberry Raptor (dieselbe Datei wie `web-produkt-hero`) |
| `produkt.html` | großes Bild: folgt der gewählten Packung (Starter Set, 50er-Dose, Sachet-Box, Sachet), bis jemand in der Galerie klickt; mobil 4 : 3, ab 900 px quadratisch | `web-produkt-gross-{packung}` | HOLY-Shop |
| `produkt.html` | Galerie mit 5 Bildern (Klick zeigt das Bild groß) | `web-produkt-hero`, `web-produkt-galerie-1` … `-4` | HOLY-Produktseite (Produktbild, Packshots, Zubereitung) |
| `produkt.html` | Packshot je Packung in „Packung wählen“ | `web-packung-set`, `-50`, `-10`, `-1` | HOLY-Shop, freigestellt |
| `warenkorb.html`, `danke.html` | Vorschaubild am Posten bzw. in der Bestellübersicht (je nach `?packung=`; Danke-Seite seit D09) | `web-warenkorb-{packung}` | wie Packungswahl |
| `danke.html` | Versandkarton in der Bühne (Symbolbild, Etikett am Bild; ab 900 px rechts, mobil darunter) | `web-danke-paket` | Foto von der Fotowand auf de.holy.com/pages/our-story, Urheber nicht genannt |
| `danke.html` | Shaker bei Schritt 2, nur wenn die Packung laut Seite einen enthält: Starter Set schwarzer Logo-Shaker, 50er-Dose pinker Raptor-Shaker (Ausschnitt aus dem Packshot „50 Portionen mit gratis Shaker“), bei 10 und 1 Portion sowie beim Nachkauf der 50er-Dose (`?nachkauf=1`, Shaker nur zur ersten Dose, ✔ T22) kein Bild und Überschrift „Auspacken, loslegen“ | `web-danke-shaker-{packung}` | HOLY-Shop |
| `danke.html` | Fotos zu Zubereitungsschritt 2 und 3 | `web-danke-zubereitung-2`, `-3` | HOLY-Produktseite |
| `squad.html` | Schriftzug SQUAD Rewards · eine Pixel-Münze im Kontostand · Abzeichen in den vier Level · Packshot beim Nachkauf | `web-squad-logo`, `web-squad-coins`, `web-squad-level-1` … `-4`, `web-warenkorb-50` | Grafiken von de.holy.com (Rewards-Seite, Menübild) · HOLY-Shop |
| `haendler.html` | Regal im Handel (Symbolbild, Etikett am Bild), in der Bühne ab 900 px rechts, mobil unter Code-Box und Knopf | `web-haendler-regal` | Foto aus der Lebensmittel Zeitung vom 10.04.2026 (Urheber unbekannt; enger Ausschnitt nur mit dem HOLY-Regalbereich, Markt nicht benannt) – kein HOLY-Bild |

**Kennzeichnung:** Die Bilder sind Werbe- und Produktbilder der HOLY Softdrinks GmbH bzw. Fotos Dritter, keine eigenen
Fotos der Gruppe. Alle Nachweise stehen vollständig im Fuß der Seite, je Eintrag mit dem Motiv davor (gleiche Nachweise
zusammengefasst). Seit D09 steht keine Unterschrift mehr unter jedem Bild; Symbolbilder tragen stattdessen das Etikett
„Symbolbild“ direkt am Bild (oben links), der Nachweis im Fuß beginnt mit „Symbolbild · “. Die kurze Unterschrift bleibt
unsichtbar im Dokument: „Symbolbild · Quelle: Lebensmittel Zeitung, 10.04.2026
(Urheber unbekannt)“ (Händlerseite) und „Symbolbild · Quelle: de.holy.com/pages/our-story (Urheber nicht genannt), Abruf
03.11.2026“ (Danke-Seite). Zwei getrennte Punkte: **„Symbolbild“** heißt, das Bild zeigt nicht Marcos Paket bzw. keinen
bestimmten Markt; **„Urheber unbekannt“ bzw. „nicht genannt“** heißt, wer das Foto gemacht hat, ist offen (Bildnachweis
der Zeitung hinter der Bezahlschranke, auf HOLYs Fotowand kein Name). Eigene Zeichnungen (Skizze, Kalender, Siegel,
QR-Platzhalter) bleiben, wo sie etwas erklären.

**Zuschnitte im Workflow D07** (aus vorhandenen Dateien, keine neuen Downloads): `web-danke-shaker-raptor.webp`
(pinker Shaker aus `../praesentation/intern/roh/produkt/packshots/raptor-50er-dose-mit-gratis-shaker.png`, freigestellt),
`web-galerie-sachet-box.webp` (600 × 600 aus `…/packshots/raptor-10er-sachet-box.png`), `web-squad-coins.webp` neu: nur
die mittlere, vollständige Münze aus `…/squad-rewards/rewards-menuebild-coins.png`, freigestellt. Begründung: Im
Menübild sind die obere und die rechte Münze schon vom Bildrand der Quelle angeschnitten; ein Ausschnitt mit Adler müsste
die rechte Münze mitnehmen (der Umhang reicht bis an sie heran). Eine ganze Münze wirkt ruhiger, und der Adler steht schon
im Schriftzug SQUAD Rewards direkt darüber.

**Zuschnitt im Workflow D08** (aus einer vorhandenen Rohdatei, kein neuer Download): `web-haendler-regal.jpg` enger aus
`../praesentation/intern/roh/produkt/handel/regal-energy-neben-monster-redbull.jpg` (Bereich x 528–1405, y 236–728 von
1536 × 864, auf 780 × 438 px verkleinert; `pixel` im Register angepasst). Begründung: Der alte Ausschnitt (780 × 585) zeigte
am unteren und rechten Rand Dosen anderer Marken (u. a. Red Bull), der Kommentar in `haendler.html` behauptete aber „nur
HOLY-Bereich“. Jetzt stimmt beides: Zu sehen sind nur HOLY-Handelsware, HOLY-Regalleiste und das Schild „7,5 Liter in einer
Dose!“; seit D09 zeigt die Bühne das Bild im eigenen Seitenverhältnis 780 : 438 (kein weiterer Anschnitt).

**Prüfen vor dem Commit:** `git status` – unter `intern/` darf nichts auftauchen
(`git check-ignore -v fallstudie-2-customer-journey/konzept-website/intern/vorschau/01-index.png`).

## 4 Präsentationsmodus und Parameter

| Adresse | Wirkung |
|---|---|
| `index.html?anmerkungen=1` | **Präsentationsmodus:** Unter dem Kopf erscheint die Laufleiste „Zentraler Weg (SOLL)“, an jeder Maßnahme ein nummerierter Punkt (schwarz mit gelber Ziffer). Klick auf einen Punkt oder auf „Anmerkungen (n) ansehen“ öffnet unten ein Blatt „Was wir ändern … Warum …“ mit Befund-IDs; „Weiter ›“, Pfeiltasten oder Bild-ab gehen zur nächsten Anmerkung, Esc schließt. Der Modus bleibt beim Durchklicken erhalten. Ausschalten: Link „Anmerkungen ausblenden“ im Fuß |
| `index.html?code=MARCO10` | Creator-Code aus dem Video; übernommen werden nur die Beispielcodes `CREATOR10` und `MARCO10` (öffentliche Seite: niemand soll beliebige „Codes“ hineinschreiben können), alles andere wird ignoriert. Wird an alle Seiten weitergereicht und im Warenkorb angezeigt. Ohne Parameter erscheint `CREATOR10` |
| `warenkorb.html?packung=50` | Posten im Warenkorb: `set` (Standard, Starter Set), `1`, `10`, `50`; die Produktseite setzt den Wert über die Packungswahl, die Danke-Seite rechnet damit die Nachfüll-Erinnerung |
| `produkt.html?packung=50` | Startpackung der Produktseite (nur `set`, `50`, `10`, `1`; alles andere → Starter Set wie bisher). Der Knopf „Zum Produkt aus dem Video“ der Startseite führt hierher, weil sein Produkt-Tag die 50er-Dose zeigt; der Code aus der Adresse reist mit |
| `warenkorb.html?packung=50&nachkauf=1` | Nachkauf von `squad.html`: Der Posten heißt „Vorratsdose, Nachkauf“ (ohne „Shaker gratis zur ersten Dose“), `nachkauf=1` reist mit `packung` zur Danke-Seite, dort weder „Shaker auspacken“ noch Shaker-Bild – der Gratis-Shaker kommt laut ✔ T22 nur zur ersten Dose. Beim Starter Set gehört der Shaker zum Set und bleibt |

Anmerkungen je Seite: index 6, koffein-check 12, produkt 9, warenkorb 5, danke 7, squad 6, haendler 3 (zusammen 48). Seit
D09: Startseite 1 Werbung, 2 Code, 3 Zwei Wege, 4 vier Zahlen, 5 Packungs-Karten (neu, „Such dir deinen Einstieg aus.“),
6 Skizze (vorher 5); auf der Produktseite steht Nr. 1 jetzt an „Packung wählen“ und Nr. 2 an der Code-Zeile (vorher
umgekehrt; die Code-Zeile steht jetzt unter den Packungen), Nr. 3–9 unverändert. Seit der D09-Nacharbeit (04.11.2026)
auf der Danke-Seite: 1 Zustelltag, 2 Squad-Einstieg (steht jetzt direkt unter „Danke!“, vorher Nr. 3), 3 „So geht's
weiter“ (vorher Nr. 2), 4–7 unverändert; die Zahl der Anmerkungen je Seite ist gleich geblieben. Wer auf Folie 08
oder im Vortragsskript Nummern nennt, gleicht sie ab. Im Präsentationsmodus erscheinen zusätzlich die Erklärsätze, die
Skizze und die Etiketten „Beispielwert“ usw. (`.nur-anm`, `.nur-anm-i`).
Live-Demo auf Folie 08: `../konzept-website/index.html?anmerkungen=1` in einem neuen Tab (kein `iframe`), vor Beginn
geöffnet (Gestaltungsplan 7.4, 11.4).

## 5 Daten: was belegt ist und was Beispielwert ist

**Aus dem Dossier (mit Befund-ID und Status):**

| Angabe | Wert | Befund |
|---|---|---|
| Koffein je Portion Raspberry Raptor | 160 mg (80 mg NewCaff, 80 mg natürlich) je 7 g auf 500 ml; 32 mg/100 ml gerechnet | ✔ S92 |
| Tagesportion, Ausschlüsse | eine zubereitete Portion pro Tag; nicht für unter 18, Schwangere, Stillende; nicht nüchtern; nicht am selben Tag wie andere Lebensmittel mit grünem Tee | ✔ S92 · ✔ R19 |
| EFSA | 200 mg auf einmal, 400 mg am Tag (gesunde Erwachsene, alle Quellen), 200 mg/Tag Schwangere und Stillende, 100 mg vor dem Schlafen, 3 mg/kg (→ etwa 53 kg gerechnet), Vergleichskategorien | ✔ R17 · ✔ S23 · ✔ M91 · ✎ M06 |
| Altersgrenze | keine gesetzliche (Stand 30.10.2026); HOLY-Angaben 18 bzw. 16 | ✎ R20 · ✔ R90 · ✎ B05 |
| Nachtschicht | DGUV: im letzten Drittel der Schicht und ab drei Stunden vor dem Schlafen kein Koffein | ✎ S22 · ✔ S97 |
| Zucker, Süßungsmittel, Energie | 0,1 g Zucker/100 ml zubereitet; Sucralose und Acesulfam K; 18,7 kcal/500 ml | ✔ R06 · ✔ R14 |
| Preise Raspberry Raptor | 1 Portion 1,99 €, 10 Portionen 12,49 €, 50 Portionen 39,99 € (0,80 € je Portion) | ✔ B09 · ✔ T22 |
| Starter Set | 24,99 €, 14 Drinks, mit Shaker und Gratisversand (je Drink 1,79 € gerechnet) | ✔ T20 |
| Grundpreis | Pflicht bei Preisangaben; hier gerechnet aus 7 g je Portion: 284,29 / 178,43 / 114,26 €/kg | ✔ R98 · ✔ S92 |
| Versand DE | 4,99 €, versandkostenfrei ab 49 € | ✔ B12 |
| Mix & Match | 2 Dosen = 10 %, bis 20 % bei 4 Dosen, automatisch ab der zweiten Dose; Shaker zur ersten Dose | ✔ T22 |
| Zahlungsarten | Apple Pay, Google Pay, PayPal (Footer) | ✔ T23 |
| Bewertungen | Raspberry Raptor 4,87 bei 1.409; Trustpilot 4,7 bei 17.046; REVIEWS.io 4,59 bei 65.645 | ✔ T17 · ✔ B14 |
| Garantie | 30 Tage Zufriedenheitsgarantie, AGB § 12 widersprüchlich | ✎ T18 · ✎ B29 |
| SQUAD Rewards | 10 Coins pro Euro; Level ab 1 / 2.000 / 10.000 / 30.000 Level Coins; 10 € für 900 Coins; 15 % für 1.200 Coins ab Level 2; Level-Shaker für 1 Coin ab Level 2; doppelte Coins fürs Weiterempfehlen ab Level 3; Xmas-Geschenk in Level 4 | ✔ T32 |
| Freunde werben | 5 € ab 14 € Mindestbestellwert; 900 bzw. 1.800 Punkte (zweiter Artikel: 9 €) | ✔ T33 · ✔ B13 |
| Service | WhatsApp, E-Mail, Instagram; unter der Woche 9:00–20:00 Uhr | ✔ T19 |
| Discord | rund 72.000 Mitglieder (30.10.2026) | ✔ T35 |

**Aus dem Bildregister (nicht im Dossier):** „10 Portionen“ ist eine Sachet-Box (Packshot der Shop-Variante „10 Portionen“,
Quelle `web-packung-10` in `fremdbilder/register.js`); im Warenkorb steht deshalb „Sachet-Box“ statt bisher „kleine
Dose“. „Shaker gratis zur ersten Dose“ beim Posten 50 Portionen folgt aus ✔ T22 und der Shop-Variante „50 Portionen mit
gratis Shaker“ (`web-produkt-galerie-2`).

**Beispielwerte (ausgedacht; in der normalen Ansicht nennt sie der Satz im Fuß, im Präsentationsmodus tragen sie
zusätzlich ein Etikett):** Creator-Code `CREATOR10` und sein Rabatt von 10 %;
Creator `@creator_platzhalter`; Lieferdatum Do., 12.11. mit Bestellschluss 14:00 Uhr; Bestellnummer; Coins-Stand 225 und
Level-Fortschritt; Coins je Bestellung (10 Coins pro Euro auf den Endpreis gerechnet, Bezugsgröße angenommen);
Nachfüll-Rechnung ab Liefertag; Beispielschicht 22–6 Uhr; Code aus der Handelspackung; Händler, Packungen und
Entfernungen im Händlerfinder; alle Bewertungstexte; Mischtipp und Mailtext. Die Formulierungen der Garantie, der
Zubereitung und des Altershinweises sind Vorschläge der Gruppe (**H**). Die Versandkosten-Leiste im Warenkorb („Noch
… € bis zum Gratisversand“) ist aus ✔ B12 gerechnet, mit derselben Zwischensumme nach Code wie die Zeile „Versand“.

## 6 Quellen

- Recherche-Dossier FS2 [`../recherche-customer-journey.md`](../recherche-customer-journey.md): Befunde und Status in
  Anhang A, Quellen in Anhang B. Für die Koffein-Seite: Etikett und Produktseite Raspberry Raptor [12, 13, 14],
  Help-Center Koffein [33], EFSA [42, 43], VO (EU) 2022/2340 und NemV § 4 [216, 217], HOLY-AGB [31], BT-Drs. 21/4591
  (D1 [154]), DGUV Information 206-027 [48], BfR-Mitteilung 039/2024 [172]; alle abgerufen am 30.10.2026 (D1: 14.10.2026).
- Best Practices X01–X17: Dossier Kapitel 7a und Anhang A.10, Quellen [275]–[321], alle Websuche der Recherche-Agenten,
  abgerufen am 03.11.2026; Bildrechte nach Dossier 7a.7 (deshalb eigene Zeichnungen statt Screenshots).
- Gestaltung: [`../gestaltungsplan.md`](../gestaltungsplan.md) Abschnitte 3 (Farben, Kontraste, Typografie), 5.2
  (Top 3 je Phase), 6.7 (Überleitungen), 7 (Konzept-Webseite). Persona:
  [`../../fallstudie-1-brand-persona/persona-steckbrief.md`](../../fallstudie-1-brand-persona/persona-steckbrief.md).
- **Herkunft der Inhalte:** In diesem Schritt gab es **keine neue Websuche**. Alle Fakten über HOLY, Koffein und die
  Vorbilder kommen aus dem Dossier (Websuche früherer Schritte, mit Befund-ID). Aufbau, Gestaltung, Texte und
  Programmierung sind KI-gestützte Entwürfe (Modellwissen über Webgestaltung), nicht belegt und von der Gruppe zu prüfen.
- Schriften: [`schriften/HERKUNFT.txt`](schriften/HERKUNFT.txt) (Bricolage Grotesque, OFL 1.1, aus FS1 kopiert; seit D09
  Inter, OFL 1.1, aus `../praesentation/schriften/` kopiert, Lizenz `schriften/LIZENZ-inter-OFL.txt`).
- Formensprache des Shops (D09): angesehen, nicht übernommen – Bildschirmfotos von HOLYs Shop aus
  `../praesentation/intern/roh/touchpoints/` (Produktseite Raspberry Raptor, Starter Set, Mix & Match, Warenkorb,
  SQUAD Rewards, Creator-Landingpages, Bewertungen; ausgeschlossen, nicht veröffentlicht). Keine Bilder, Schriften oder
  Texte daraus; Farben als Proben aus diesen Bildern (Kopf von `assets/konzept.css`).
- Fremdbilder: Herkunft (Seite und Bildadresse), Abrufdatum 03.11.2026, Bearbeitung (freigestellt, Ausschnitt) und
  Beschreibung je Bild in [`fremdbilder/register.js`](fremdbilder/register.js); sichtbar im Fuß jeder Seite (Fassung mit
  Bildern). Beschafft im Workflow D06 per Websuche bzw. Download von de.holy.com und lebensmittelzeitung.net;
  Veröffentlichung von der Gruppe beschlossen (KI-Nachweis FS2 Nr. 17), keine Genehmigung der Rechteinhaber eingeholt;
  nicht kommerziell, für die Lehrveranstaltung; keine eigenen Fotos der Gruppe. Drei Zuschnitte aus vorhandenen
  Rohdateien im Workflow D07, ein Zuschnitt im Workflow D08 (Abschnitt 3a).

## 7 Offen (für die Gruppe)

1. **Inhalt prüfen** – alle Seiten gegen Dossier 8.3 (Do/Don't) abhaken, vor dem Änderungsstopp Mo 09.11., 20:00;
   danach im Fuß „Prüfung durch die Gruppe offen“ durch „von der Gruppe geprüft“ ersetzen.
2. **Schrift:** Libre Franklin fehlt im Repository (Meilenstein M5); seit D09 steht Inter (lokal, OFL) für den
   Fließtext. Die Gruppe entscheidet, ob Inter bleibt (Abweichung vom Gestaltungsplan 3.4).
3. **Grundpreis Starter Set:** Füllmenge nicht im Dossier. Seit der D09-Nacharbeit steht in der normalen Ansicht beim
   Set nur „inkl. MwSt.“ (kein Grundpreis), „Grundpreis offen: Füllmenge des Sets noch nicht belegt“ nur im
   Präsentationsmodus. Die Grundpreise der Dosen sind aus 7 g je Portion gerechnet (Sternchen mit Fußnote auf Start- und
   Produktseite, Satz im Fuß jeder Seite); Nettofüllmenge am Etikett gegenprüfen.
4. **Beispielwerte** (Abschnitt 5) bleiben gekennzeichnet (Satz im Fuß jeder Seite, im Präsentationsmodus zusätzlich
   Etiketten); ein echter Creator-Code, ein echtes Lieferdatum oder echte
   Bewertungstexte gehören nicht hinein.
5. **Freunde werben:** Gewählt ist beispielhaft der 14-€-Wert; welcher gilt, entscheidet HOLY (Frage an pr@holy.com,
   Gestaltungsplan 13.3).
6. **Veröffentlichung:** Seit dem Push vom 03.11.2026 über GitHub Pages erreichbar (Hinweisbalken, `noindex`, keine
   Bestellung), seit dem Beschluss der Gruppe (KI-Nachweis FS2 Nr. 17) mit den Bildern aus `fremdbilder/` – eine
   Genehmigung der Rechteinhaber wurde nicht eingeholt. Die Frage an Prof. Stenger bleibt (Gestaltungsplan 7.3, 13.2
   Nr. 16); widerspricht er, HOLY oder ein anderer Rechteinhaber, kommt der Ordner aus `master` (für die Bilder allein
   reicht es, `fremdbilder/` zu entfernen – dann zeigt die Seite den Rückfall ohne Fremdbilder). Keine Verlinkung
   von außen, kein QR-Code darauf. Einverständnis des Gründers für die Wortmarke schriftlich mit Umfang ablegen
   (Empfehlung der Abnahme).
7. **Folie 08:** fünf Rahmen; die Bildschirmfotos erzeugt `werkzeuge/folie08-bilder.mjs`. Rahmen 3–5 zeigen
   durchgehend Marcos 50er-Dose: Produktseite mit `?packung=50` (vorgewählte 50er-Dose) ab „Packung wählen“, Warenkorb
   und Danke-Seite mit `?packung=50` (Danke-Seite seit der D09-Nacharbeit von oben: Kopf, „Danke!“ und Squad-Karte mit
   „Squad beitreten“), damit Bild und Anmerkungszeile zusammenpassen. Auf Folie 08 liegt über jedem Bildschirmfoto ein
   12 px hoher schwarzer Streifen (`../praesentation/css/folien/08-mockups.css`), damit die Rahmenecke die Hinweisleiste
   nicht anschneidet; das Skript prüft das (Konstante `RAHMEN`).
   Mit `--intern`
   Fassung mit Bildern nach `../praesentation/fremdbilder/` (Schlüssel `konzept-01` … `konzept-05` in
   `../praesentation/fremdbilder/register.js`); ohne Schalter Rückfall ohne Fremdbilder (`fremdbilder/` gesperrt) nach
   `../praesentation/bilder/`. Das Skript bricht ab, wenn der Rückfall in einen ausgeschlossenen Ordner oder unter
   `intern/` gehen würde. Im oberen Bildschirm von `konzept-02` steht kein HOLY-Bild (das Sachet folgt weiter unten).
8. **Fremdbilder prüfen:** Auswahl, Zuschnitt und Nachweise in `fremdbilder/register.js` gegen die Quellen abgleichen
   (Kontaktbogen `intern/kontaktbogen.png`). Regalfoto und Kartonfoto sind als **Symbolbild** gekennzeichnet, weil sie
   keinen bestimmten Markt bzw. nicht Marcos Paket zeigen. Getrennt davon ist der **Urheber** offen: Das Regalfoto stammt
   aus der Lebensmittel Zeitung (Bildnachweis hinter der Bezahlschranke nicht einsehbar → „Urheber unbekannt“), das
   Kartonfoto von der Fotowand auf „Our Story“ („Urheber nicht genannt“). „10 Portionen = Sachet-Box“ und „Shaker gratis
   zur ersten Dose“ (Abschnitt 5) im Shop gegenprüfen.
9. **Gestaltung D09 bewusst freigeben** (Empfehlung der Jury):
   - Die Hinweisleiste sieht jetzt aus wie HOLYs Promo-Leiste (Zitronengelb). Wortlaut und Kontrast erfüllen die Regel,
     sie fällt aber weniger auf als der frühere schwarze Balken – reicht das?
   - Die Seiten ähneln HOLYs Shop deutlich (Sortenfarben, Ankündigungsleiste, Kopf mit Symbolen, Packungszeilen). Schutz:
     Hinweisleiste, `noindex`, Kennung und Beispielwert-Satz im Fuß, „keine Bestellung möglich“.
   - Die Platzhalter-Bewertungen sehen wie echte Karten aus; das Etikett „Platzhalter“ muss bleiben. Die Jury wollte auch
     die Sätze „Hier steht eine echte Bewertung …“ behalten; die Abnahme Gestaltung (D09-Nacharbeit) hat sie als Blindtext
     bemängelt. Seit 04.11.2026 stehen statt der Sätze graue Platzhalterzeilen (für Screenreader „Bewertungstext folgt“),
     keine erfundenen Stimmen, keine Namen – die Gruppe entscheidet, ob das so bleibt.
   - Abweichung vom Gestaltungsplan (Creme-Grundfläche, „Gelb nur als Fläche“, Libre Franklin, „Beispielwert“ immer
     sichtbar) ist in Gestaltungsplan 7.3 vermerkt; die Gruppe bestätigt oder verwirft sie.
   - Folie 08 und Vortragsskript auf die neuen Anmerkungsnummern prüfen (Abschnitt 4); die Bildschirmfotos für Folie 08
     sind neu erzeugt.

## 8 Lokal öffnen

- **Doppelklick** auf `index.html` (oder im Browser „Datei öffnen“). Es wird keine Internetverbindung gebraucht.
  Es öffnet sich die Fassung mit Bildern (Abschnitt 3a), genau wie auf GitHub Pages. Fehlt `fremdbilder/register.js`
  (z. B. in einer Kopie ohne den Ordner), zeigt die Seite den Rückfall ohne Fremdbilder; dann steht im
  Browser-Fehlerprotokoll eine Meldung zu `fremdbilder/register.js` (Datei fehlt) – gewollt.
- Präsentationsmodus: an die Adresse `?anmerkungen=1` anhängen, z. B. `…/konzept-website/index.html?anmerkungen=1`.
- Handyansicht am Laptop: Entwicklerwerkzeuge (F12) → Geräteansicht, Breite 390 px.
- Alternativ mit kleinem Server im Ordner `konzept-website/`: `python3 -m http.server 8000`, dann
  `http://localhost:8000/index.html?anmerkungen=1`.

## 9 Prüfen und Bildschirmfotos

```bash
export PLAYWRIGHT_CORE=/opt/node-tools/node_modules/playwright-core       # Pfad je nach Rechner
node fallstudie-2-customer-journey/konzept-website/werkzeuge/pruefen.mjs                        # beide Fassungen + Bildschirmfotos
node fallstudie-2-customer-journey/konzept-website/werkzeuge/pruefen.mjs --fassung bilder       # nur Fassung mit Bildern (Standard, wie GitHub Pages)
node fallstudie-2-customer-journey/konzept-website/werkzeuge/pruefen.mjs --fassung rueckfall    # nur Rückfall ohne Fremdbilder (alter Name: oeffentlich)
node fallstudie-2-customer-journey/konzept-website/werkzeuge/pruefen.mjs --ohne-fotos           # ohne Bildschirmfotos (alter Name: --ohne-bilder)
node fallstudie-2-customer-journey/konzept-website/werkzeuge/folie08-bilder.mjs --intern        # Folie 08, mit Bildern
node fallstudie-2-customer-journey/konzept-website/werkzeuge/folie08-bilder.mjs                 # Folie 08, Rückfall ohne Fremdbilder
```

Playwright wird mit `require(process.env.PLAYWRIGHT_CORE || 'playwright')` geladen, Chromium über `CHROME_PFAD`
wählbar. Das Skript prüft (Kopf von `werkzeuge/pruefen.mjs`): Konsolen- und Skriptfehler, externe Anfragen (Netz
gesperrt), interne Links und Sprungziele (keine Links nach `intern/`), Hinweisbalken (Text, oben, nach dem Scrollen),
`noindex`, Formulare, Bilder, Schrift geladen, Kontrast jedes sichtbaren Textes, waagerechtes Scrollen bei 320, 390 und
1280 px, Präsentationsmodus (Marker, Rundgang, Weitergabe von `?anmerkungen=1`), die Rechnungen (Packungswahl, Warenkorb
je Packung, Code aus der Adresse, Nachfüll-Rechner, Startpackung der Produktseite aus `?packung=`, Nachkauf mit
`?nachkauf=1` bis zur Danke-Seite ohne Shaker-Hinweis und Shaker-Bild) und den ersten Bildschirm bei 390 × 844
(Händlerseite: Code-Box und Hauptknopf; Produktseite: Titel, Bewertung, erster Preis, auch mit `?packung=50`) sowie die
Hauptknöpfe oben auf Start- und Händlerseite bei 1280 px in einer Zeile. Seit D09 zusätzlich: Kennung, Beispielwert-Satz
und Link „Quellen und Stand“ sichtbar im Fuß jeder Seite (beide Modi); „Werbung“ sichtbar neben jedem sichtbaren
Creator-Code; „Vorschlag der Gruppe“ sichtbar an jeder Garantie; „Platzhalter“ an jeder Bewertungskarte; Etikett
„Symbolbild“ an jedem Symbolbild; Beispiel-Etiketten nur im Präsentationsmodus (dort sichtbar), Beispielcode-Hinweis im
Präsentationsmodus; „Inter Konzept“ geladen; Menü-Knopf (auf, zu mit Escape, Fokus zurück) auf allen 7 Seiten; Kaufleiste
der Produktseite erst nach dem Kaufknopf, mit dem Preis der gewählten Packung; erster Bildschirm von Warenkorb (jede
Packung), Koffein-Check, Danke- und Squad-Seite. `folie08-bilder.mjs` prüft seit D09, dass der Inhalt, den die
Anmerkungszeile auf Folie 08 nennt, ganz im Bild steht. Seit D08 zusätzlich: `fremdbilder/register.js`
und jede Bilddatei des Registers im Git-Index (`git ls-files --error-unmatch`); sonst WARNUNG „nicht versioniert – fehlt
nach dem Push auf GitHub Pages“. Seit der D09-Nacharbeit (04.11.2026, Punkt 13 im Kopf von `pruefen.mjs`): „wirklich sichtbar“ statt nur
„gerendert“ für Hinweisleiste, „Werbung“, „Symbolbild“ (innerhalb des Bildes), „Vorschlag der Gruppe“, „Platzhalter“,
Kennung und Beispielwert-Satz (Deckkraft über alle Vorfahren, Schriftfarbe ohne Alpha, Schrift ≥ 11 px, in der Mitte
nicht verdeckt); Kontrastmessung mit Deckkraft; Tab-Rundgang ohne verdeckten Fokus (Kaufleiste, Knopf „Anmerkungen
ansehen“); keine Recherche- oder Entwurfssprache im Hauptteil der normalen Ansicht; Versionsprüfung auch für Schriften,
Lizenztexte, `assets/`, `bilder/` und die Seiten. Gegenprobe: Mutationskopien mit unsichtbarer Hinweisleiste, „Werbung“
mit `opacity: 0`, verschobenem Symbolbild-Etikett und ohne `scroll-padding-bottom` werden alle gemeldet.
`folie08-bilder.mjs` prüft zusätzlich, dass die Eckrundung des Handyrahmens auf Folie 08 keine Zeile der Hinweisleiste
anschneidet (Konstante `RAHMEN`, passend zu `../praesentation/css/folien/08-mockups.css`).

Je Fassung zusätzlich (seit D06, angepasst in D07): **Fassung mit Bildern** – jeder Eintrag in `fremdbilder/register.js`
mit Datei in `fremdbilder/`, `alt`, `nachweis`, `motiv` und `pixel` (= echte Bildgröße), Symbolbilder in `alt` und
`nachweis` gekennzeichnet; jedes Bild geladen, mit `alt`, `width`, `height`; kein Bild im ersten Bildschirm mit
`loading="lazy"`; jeder Bildplatz mit vorhandenem Schlüssel gefüllt (bei `{packung}` ohne Schlüssel ausgeblendet);
Unterschrift am Bild passt zum Register; Fuß mit dem Obersatz und je Nachweis genau einem Eintrag „Motiv: Nachweis“;
großes Bild der Produktseite folgt der Packung, bis in der Galerie geklickt wird; Vorschaubild im Warenkorb und Shaker auf
der Danke-Seite passen zu `?packung=`. Dazu die **GitHub-Pages-Probe**: alle Seiten über einen lokalen HTTP-Server (wie
GitHub Pages, mit `fremdbilder/`) – keine Konsolenfehler, keine 404, alle Bilder geladen. Fehlt `register.js`, ist das ein
Fehler (die Datei ist versioniert). **Rückfall ohne Fremdbilder** – Anfragen nach `fremdbilder/` gesperrt (die erwartete
Fehlermeldung zu `register.js` zählt nicht), kein `window.INTERN_BILDER`, außer der Wortmarke kein Bild, Satz „Keine
HOLY-Fotos …“ sichtbar, keine Bildnachweise.

**Ergebnis am 03.11.2026 (Einbau der Bilder, D06):** beide Fassungen „Alle Prüfungen bestanden“, 0 externe Anfragen,
keine Konsolenfehler. Gegenproben: ohne Register → Rückfall bestanden; eine fehlende Bilddatei → Fehler gemeldet und
Platzhalter statt kaputtem Bild.

**Ergebnis am 03.11.2026 (Veröffentlichung und Abnahme-Befunde, D07):** „Alle Prüfungen bestanden (Fassung mit Bildern
inkl. GitHub-Pages-Probe und Rückfall ohne Fremdbilder)“, 0 externe Anfragen, keine Konsolenfehler; `folie08-bilder.mjs`
in beiden Modi ohne Fehler. Angesehen: alle 7 Seiten mit Bildern bei 390 px (ganze Seite) und 1280 px, Kopf bei 320 px,
die fünf Folie-08-Bilder.

**Ergebnis am 03.11.2026 (Abnahme-Befunde D07, Workflow D08):** „Alle Prüfungen bestanden (Fassung mit Bildern inkl.
GitHub-Pages-Probe und Rückfall ohne Fremdbilder)“, 0 Fehler, 0 Warnungen, 0 externe Anfragen; `folie08-bilder.mjs` in
beiden Modi ohne Fehler. Gegenprobe mit absichtlich eingebauten Fehlern (Knopf ohne `packung=50`, Startpackung ignoriert,
Shaker-Bild beim Nachkauf, Händlerknopf zweizeilig, Registereintrag mit unversionierter Datei): alle gemeldet, danach
zurückgesetzt. Angesehen: Händlerseite bei 390, 320 und 1280 px (Bild, Unterschrift, Fuß, Knopf in einer Zeile),
Danke-Seite mit Kartonbild, Garantie-Kasten der Produktseite bei 320 px, Produktseite mit `?packung=50` bei 390 und
1280 px, Warenkorb und Danke-Seite mit `?packung=50&nachkauf=1` bei 390 (Danke auch 320) px, die Folie-08-Bilder.

**Ergebnis am 03.11.2026 (Gestaltung „Kampagnen-Look“ auf alle Seiten, D09):** „Alle Prüfungen bestanden (Fassung mit
Bildern inkl. GitHub-Pages-Probe und Rückfall ohne Fremdbilder)“, 0 Fehler, 0 Warnungen, 0 externe Anfragen, keine
Konsolenfehler; `folie08-bilder.mjs` in beiden Modi ohne Fehler (Inhalt der Anmerkungszeile je Bild ganz im Bild).
Gegenprobe mit sieben absichtlich eingebauten Fehlern (Warenkorb-Code ohne „Werbung“, Kurz-Garantie ohne sichtbares
„Vorschlag der Gruppe“, Squad-Fuß ohne Beispielwert-Satz, Symbolbild-Etikett ausgeblendet, Bewertungskarte ohne
„Platzhalter“, Beispiel-Etikett in der normalen Ansicht sichtbar, Inter-Datei fehlt): alle gemeldet. Angesehen: alle 7
Seiten bei 390 px (erster Bildschirm und ganz), 1280 px und 320 px, Start- und Produktseite mit `?anmerkungen=1` bei
390 px, geöffnetes Menü, Warenkorb mit `?packung=50`, die zehn Bilder für Folie 08. Nicht geprüft: Safari und Firefox,
echtes Touch-Gerät, Druckansicht.

Bildschirmfotos 390 × 844 (Normalmodus, oberer Bildschirm) in [`_vorschau/`](_vorschau/): `01-index.png`,
`02-koffein-check.png`, `03-produkt.png`, `04-warenkorb.png`, `05-danke.png`, `06-squad.png`, `07-haendler.png`.
Sie werden bei jedem Prüflauf neu geschrieben – **aus der Fassung mit Bildern**, so wie die Seiten auf GitHub Pages
aussehen (Veröffentlichung von der Gruppe beschlossen, KI-Nachweis FS2 Nr. 17; keine Genehmigung der Rechteinhaber
eingeholt). Ganze Seiten zum Ansehen gehen nach `intern/vorschau/`
(`0n-…-ganz.png` bei 390 px, `0n-…-1280.png`, `0n-…-320.png`), der Rückfall ohne Fremdbilder nach
`intern/vorschau-rueckfall/` – beide Ordner sind ausgeschlossen.
