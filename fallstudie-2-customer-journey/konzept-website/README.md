<!-- Erzeugt am 03.11.2026 im Workflow zu Fallstudie 2 (Bau der Konzept-Webseite nach gestaltungsplan.md Abschnitt 7).
KI-gestützt erstellt, Prüfung durch die Gruppe offen. Keine neue Websuche in diesem Schritt: Alle Fakten stammen aus dem
Recherche-Dossier FS2 (Befund-IDs), Gestaltung und Texte sind Entwürfe. Automatisch geprüft mit werkzeuge/pruefen.mjs. -->

Modul Unternehmenskommunikation · Prof. Dr. Daniel Stenger · Hochschule Kaiserslautern

# Konzept-Webseite HOLY – der zentrale Weg (SOLL) zum Durchklicken

HOLY · Persona Marco (FS1, fiktiv) · Fallstudie 2 „Customer Journey“, Aufgabe A7 (Mock-ups) · Stand Di, 03.11.2026 ·
**Entwurf, Prüfung durch die Gruppe offen**

> **Studentisches Konzept der Gruppe (HS Kaiserslautern) – keine Website der HOLY Softdrinks GmbH · keine Bestellung
> möglich.** Kein HOLY-Logo, keine HOLY-Fotos oder Screenshots, keine HOLY-Schriften. Nichts wird gesendet oder
> gespeichert. Rechtliche Einordnungen sind Einschätzungen von Studierenden und keine Rechtsberatung.

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
| [`index.html`](index.html) | Inspiration · AWARE | Creator-Kurzvideo mit Code und klarer Weiterleitung: Landingpage für Besucher aus dem Video | Ü1 trägt → bleibt angeschlossen | Code aus dem Video steht schon da (`?code=`), „Werbung“ neben Creator und Code, zwei klare Wege (Produkt, Koffein-Check), Kernfakten als Text | ✔ X01 · ✎ X02 · ✔ X03 | ✔ L34 · ✔ T02 · ✔ L95 · ✔ R25 · ~ B21 |
| [`koffein-check.html`](koffein-check.html) | Recherche · APPEAL | eigene Antwortseite „Koffein-Check“ | Ü2 bricht → schließen | Antwort zuerst („Kurz gesagt“), eine Frage je Abschnitt mit fester Adresse, nur Etikett- und EFSA-Werte mit Quelle, FAQ mit strukturierten Daten, Klartext-Fassung [`koffein-check.txt`](koffein-check.txt) für KI-Assistenten, Quellen und Stand | ✔ X04 · ✎ X05 · ✔ X06 | ✔ S92 · ✔ S27 · ✎ S31 · ✎ S28 · ✎ S30 · ✔ R17 · ✔ R19 · ✎ R20 · ✎ S22 |
| [`produkt.html`](produkt.html) | Entscheidung · ASSURE | Produktseite mit Preis je Portion, Bewertungen, einheitlicher Garantie | Ü2/Ü3 | Packungen in einer Liste mit Preis je Portion und Grundpreis ohne Code, Endpreis inklusive Versand, ein Lieferdatum, eine Garantie für alle Kaufwege, Koffein als Text, Bewertungen mit Herkunft (Texte nur Platzhalter) | ✎ X07 · ✔ X08 · ✔ X09 · ✔ X12 | ✔ B09 · ✔ B10 · ✔ T20 · ✔ R98 · ✔ B12 · ✔ B91 · ✎ T18 · ✔ T17 · ✎ R27 |
| [`warenkorb.html`](warenkorb.html) | Kauf · ACT | mobiler Warenkorb/Checkout mit klarer Lieferzeit | Ü3 wackelt → tragen | ein Lieferdatum mit Bestellschluss oben, Code sichtbar übernommen, Endpreis inklusive Versand, Express-Knöpfe vor dem Formular (ohne Logos), Gast ohne Konto, Coins im Warenkorb, Altershinweis ohne falsche Rechtsbehauptung; kein Formular, nichts wird abgeschickt | ✎ X10 · ~ X11 · ✔ X12 · ✔ X15 | ✔ B91 · ✔ B90 · ✔ B12 · ✔ T22 · ✔ T23 · ✔ T32 · ✎ R20 · ✔ R90 · ✎ B05 |
| [`danke.html`](danke.html) | Bindung · ADVOCATE | Willkommens- und Nachkauf-Strecke mit SQUAD Rewards (Danke-Seite) | Ü4 wackelt → tragen | Zustelltag und Tracking-Mail, drei funktionierende nächste Schritte (statt 404-Link), Squad-Einstieg in einem Schritt (ab 18 wie der Shop), Nachfüll-Erinnerung als Opt-in-Konzept mit Rechner (ohne Abo), Vorschau der Feedback-Mail „Wie schmeckt's?“, Zubereitung, Service | ✔ X12 · ✔ X13 · ✔ X14 · ✔ X15 | ✎ T31 · ✔ T30 · ✔ T34 · ✔ L96 · ✎ B05 · H B25 · ✔ T19 |
| [`squad.html`](squad.html) | Bindung · ADVOCATE | SQUAD Rewards: Stufen, Einlösen, Freunde werben (Platz 2), Nachkauf | Ü4 | Kontostand und Level oben, vier Level als eigene Grafik, Einlösen im Warenkorb, Freunde werben mit einer Regel, Nachkauf der 50er-Dose in einem Klick (Persona), Tipp aus dem Feedback; der Weg schließt sich zurück zum Kauf | ✔ X13 · ✔ X14 · ✔ X15 | ✔ T32 · ✔ T33 · ✔ B13 · ✔ T30 · ✔ T35 · ✔ B30 |
| [`haendler.html`](haendler.html) (optional) | Nebenweg Handel (gestrichelt) | Supermarktregal mit Händlerfinder (Platz 3 Kauf), Ziel des QR-Codes auf der Handelspackung | Nebenweg bricht → Brücke | in den Squad ohne Bon-Foto, IBAN und Pflichtfragen, dieselbe Garantie wie online, Händlerfinder nur mit Platzhaltern („Beispielmarkt“) | ✎ X16 · ✎ X17 | ✔ B01 · ✎ T28 · ✔ B03 · ✔ B96 · ✔ S90 · H D1 §7.2 |

Ablauf des zentralen Wegs: `index.html` → `koffein-check.html` → `produkt.html` → `warenkorb.html` → `danke.html` →
`squad.html` → (Nachkauf) `warenkorb.html?packung=50`. Jede Seite hat unten den Block „Nächste Station“ und im Fuß die
Liste aller Stationen.

## 3 Kennzeichnung und Regeln (Gestaltungsplan 7.3) – so umgesetzt

| Regel | Umsetzung | geprüft |
|---|---|---|
| Hinweisbalken fest und nicht ausblendbar | erstes Element jeder Seite, `position: sticky` oben, ohne Knopf, wörtlich „Studentisches Konzept der Gruppe (HS Kaiserslautern) – keine Website der HOLY Softdrinks GmbH · keine Bestellung möglich“; steht auf jedem Bildschirmfoto | `pruefen.mjs` (Text, oben, nach dem Scrollen) |
| `noindex,nofollow` | `<meta name="robots" content="noindex,nofollow">` auf jeder Seite | `pruefen.mjs` |
| kein Logo, keine HOLY-Schrift | „HOLY“ nur als schlichter Text in Bricolage Grotesque; kein gelbes Oval, kein Verpackungsdesign | Sichtprüfung |
| keine fremden Bilder | nur eigene Inline-SVG (Skizze „Video → Tag → Shop“, Dose ohne Aufdruck, Kalender, Garantie-Siegel, Dose mit Kalender, QR-Platzhalter, nicht scanbar) und die türkise Platzhalterfläche mit „Platzhalter: eigenes Produktfoto folgt“; keine `img`, `video`, `iframe` | `pruefen.mjs` |
| keine Datenübermittlung | kein `form`, kein `input`; Knöpfe führen nur zur nächsten Konzeptseite; Auswahlknöpfe (Packung, Trinkhäufigkeit, Opt-in) ändern nur die Anzeige; kein `localStorage`, keine Cookies | `pruefen.mjs` |
| keine externen Anfragen | Schriften lokal (`schriften/`), kein CDN, keine Analyse-Skripte; Quellen stehen als Text, nicht als Link | `pruefen.mjs` (Netz gesperrt, 0 Anfragen) |
| Daten nur mit Befund-ID | jede übernommene Zahl hat im Code einen Kommentar mit Befund-ID und im Präsentationsmodus eine Anmerkung; alles andere ist sichtbar als „Beispielwert“, „Beispiel“, „Platzhalter“ oder „Beispielrechnung“ markiert (Abschnitt 5) | Sichtprüfung |
| Leitplanken Dossier 8.3 | keine Fokus-, Wach-, Leistungs-, Gesundheits- oder Abnehmversprechen; Koffein nur Etikett- und EFSA-Werte mit Quelle; kein „erst ab 18 erlaubt“; Grundpreis bei jedem Preis (beim Starter Set offen, Abschnitt 7); „Werbung“ neben Creator-Code | Sichtprüfung; vor dem Änderungsstopp abhaken |
| KI-Offenlegung und Stand | Fuß jeder Seite: „Texte KI-gestützt entworfen · Prüfung durch die Gruppe offen · Gruppe Heisler, Knauber, Welker · Stand 03.11.2026“ | Sichtprüfung |
| Gestaltung (Abschnitt 3) | Creme #F3EDE1, Schwarz #1D1D1B, Gelb #FFD007 nur als Fläche (Knöpfe, Bühnen, Marker), nie als Schrift auf Creme; Nebentext #5C5547; Türkis nur Platzhalter | `pruefen.mjs` (Kontrast jedes sichtbaren Textes ≥ 4,5 : 1, groß ≥ 3 : 1) |
| Mobil zuerst | 390 px ohne waagerechtes Scrollen, ab 900 px Produktseite zweispaltig | `pruefen.mjs` (390 und 1280 px) |

## 4 Präsentationsmodus und Parameter

| Adresse | Wirkung |
|---|---|
| `index.html?anmerkungen=1` | **Präsentationsmodus:** Unter dem Kopf erscheint die Laufleiste „Zentraler Weg (SOLL)“, an jeder Maßnahme ein nummerierter Punkt (schwarz mit gelber Ziffer). Klick auf einen Punkt oder auf „Anmerkungen (n) ansehen“ öffnet unten ein Blatt „Was wir ändern … Warum …“ mit Befund-IDs; „Weiter ›“, Pfeiltasten oder Bild-ab gehen zur nächsten Anmerkung, Esc schließt. Der Modus bleibt beim Durchklicken erhalten. Ausschalten: Link „Anmerkungen ausblenden“ im Fuß |
| `index.html?code=MARCO10` | Creator-Code aus dem Video (nur A–Z, 0–9, Bindestrich, höchstens 20 Zeichen); wird an alle Seiten weitergereicht und im Warenkorb angezeigt. Ohne Parameter erscheint der Beispielcode `CREATOR10` |
| `warenkorb.html?packung=50` | Posten im Warenkorb: `set` (Standard, Starter Set), `1`, `10`, `50`; die Produktseite setzt den Wert über die Packungswahl, die Danke-Seite rechnet damit die Nachfüll-Erinnerung |

Anmerkungen je Seite: index 5, koffein-check 12, produkt 9, warenkorb 5, danke 7, squad 6, haendler 3 (zusammen 47).
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

**Beispielwerte (ausgedacht, auf der Seite gekennzeichnet):** Creator-Code `CREATOR10` und sein Rabatt von 10 %;
Creator `@creator_platzhalter`; Lieferdatum Do., 12.11. mit Bestellschluss 14:00 Uhr; Bestellnummer; Coins-Stand 225 und
Level-Fortschritt; Coins je Bestellung (10 Coins pro Euro auf den Endpreis gerechnet, Bezugsgröße angenommen);
Nachfüll-Rechnung ab Liefertag; Beispielschicht 22–6 Uhr; Code aus der Handelspackung; Händler, Packungen und
Entfernungen im Händlerfinder; alle Bewertungstexte; Mischtipp und Mailtext. Die Formulierungen der Garantie, der
Zubereitung und des Altershinweises sind Vorschläge der Gruppe (**H**).

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
- Schriften: [`schriften/HERKUNFT.txt`](schriften/HERKUNFT.txt) (Bricolage Grotesque, OFL 1.1, aus FS1 kopiert).

## 7 Offen (für die Gruppe)

1. **Inhalt prüfen** – alle Seiten gegen Dossier 8.3 (Do/Don't) abhaken, vor dem Änderungsstopp Mo 09.11., 20:00;
   danach im Fuß „Prüfung durch die Gruppe offen“ durch „von der Gruppe geprüft“ ersetzen.
2. **Libre Franklin** fehlt im Repository (Meilenstein M5); bis dahin Systemschrift für den Fließtext.
3. **Grundpreis Starter Set:** Füllmenge nicht im Dossier → „Grundpreis folgt“. Die Grundpreise der Dosen sind aus
   7 g je Portion gerechnet; Nettofüllmenge am Etikett gegenprüfen.
4. **Beispielwerte** (Abschnitt 5) bleiben gekennzeichnet; ein echter Creator-Code, ein echtes Lieferdatum oder echte
   Bewertungstexte gehören nicht hinein.
5. **Freunde werben:** Gewählt ist beispielhaft der 14-€-Wert; welcher gilt, entscheidet HOLY (Frage an pr@holy.com,
   Gestaltungsplan 13.3).
6. **Veröffentlichung:** ob die Seiten über GitHub Pages öffentlich erreichbar sein sollen, entscheidet die Gruppe nach
   Stengers Antwort (Gestaltungsplan 13.1 Nr. 9, 13.2 Nr. 16); bis dahin keine Verlinkung von außen und kein QR-Code darauf.
7. **Folie 08:** fünf Rahmen aus `_vorschau/01` bis `05`; Anmerkungszeilen je Rahmen nach Gestaltungsplan 7.4.

## 8 Lokal öffnen

- **Doppelklick** auf `index.html` (oder im Browser „Datei öffnen“). Es wird keine Internetverbindung gebraucht.
- Präsentationsmodus: an die Adresse `?anmerkungen=1` anhängen, z. B. `…/konzept-website/index.html?anmerkungen=1`.
- Handyansicht am Laptop: Entwicklerwerkzeuge (F12) → Geräteansicht, Breite 390 px.
- Alternativ mit kleinem Server im Ordner `konzept-website/`: `python3 -m http.server 8000`, dann
  `http://localhost:8000/index.html?anmerkungen=1`.

## 9 Prüfen und Bildschirmfotos

```bash
node fallstudie-2-customer-journey/konzept-website/werkzeuge/pruefen.mjs            # alle Prüfungen + Bildschirmfotos
node fallstudie-2-customer-journey/konzept-website/werkzeuge/pruefen.mjs --ohne-bilder
```

Playwright wird mit `require(process.env.PLAYWRIGHT_CORE || 'playwright')` geladen, Chromium über `CHROME_PFAD`
wählbar. Das Skript prüft (Kopf von `werkzeuge/pruefen.mjs`): Konsolen- und Skriptfehler, externe Anfragen (Netz
gesperrt), interne Links und Sprungziele, Hinweisbalken (Text, oben, nach dem Scrollen), `noindex`, Formulare,
Bilder, Schrift geladen, Kontrast jedes sichtbaren Textes, waagerechtes Scrollen bei 390 und 1280 px, Präsentationsmodus
(Marker, Rundgang, Weitergabe von `?anmerkungen=1`) und die Rechnungen (Packungswahl, Warenkorb je Packung, Code aus
der Adresse, Nachfüll-Rechner).

**Ergebnis am 03.11.2026:** alle Prüfungen bestanden, 0 externe Anfragen, keine Konsolenfehler.

Bildschirmfotos 390 × 844 (Normalmodus, oberer Bildschirm) in [`_vorschau/`](_vorschau/): `01-index.png`,
`02-koffein-check.png`, `03-produkt.png`, `04-warenkorb.png`, `05-danke.png`, `06-squad.png`, `07-haendler.png`.
Sie werden bei jedem Prüflauf neu geschrieben.
