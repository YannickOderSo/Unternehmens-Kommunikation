# QUELLEN – Schriften, Programme, Grafiken, Bilder, Inhalte und KI-Unterstützung (Präsentation Fallstudie 2)

Alles, was `index.html` verwendet, liegt im Ordner `praesentation/` – nichts wird aus dem Internet nachgeladen
(keine CDNs, keine externen Schriften, Skripte oder Bilder; geprüft mit `werkzeuge/pruefen.mjs`, 0 externe
Anfragen). Stand: 08.11.2026, finale Fassung (KI-gestützt, D12), Prüfung durch die Gruppe offen. **Keine eigene Erhebung**
(Entscheidung Yannick 08.11.2026, KI-Nachweis FS2 Nr. 26): keine eigenen Fotos, keine Interviews, kein Selbstversuch,
kein Workshop – alle Inhalte stammen aus den Abschnitten 4–5. Der Werbespot auf Folie 08 liegt in `../werbevideo/`
(Abschnitt 4b). Seit 03.11.2026 läuft überall die **Fassung mit
Bildern** (LIESMICH §12): eigene Bestandteile (Abschnitt 4) und Fremdbilder aus `fremdbilder/` (Abschnitt 4a) –
Veröffentlichung von der Gruppe beschlossen (KI-Nachweis FS2 Nr. 17), keine Genehmigung der Rechteinhaber eingeholt –,
dazu das HOLY-Logo mit Einverständnis (Nr. 12) und die Videobotschaft in `video/` mit Zustimmung des Gründers (Nr. 18);
nicht kommerziell, für die Lehrveranstaltung, mit Bildnachweis; keine eigenen Fotos der Gruppe. Den **Rückfall ohne Fremdbilder** gibt es nur, wenn
`fremdbilder/register.js` fehlt oder per Schalter. Bis 03.11.2026 lagen Bilder und Video als „interne Fassung“ im
ausgeschlossenen Ordner `intern/`; dort liegt heute nur noch Rohmaterial (`intern/roh/`).

## 1. Schriften (`schriften/`)

SIL Open Font License 1.1, über Fontsource 5.3.0 (Originalquelle Google Fonts), aus FS1 kopiert; Einzelheiten in
`schriften/HERKUNFT.txt`.

| Schrift | Verwendung |
|---|---|
| Bricolage Grotesque | Titel, Zahlen, Sätze der Momente, Foliennummer (Plan 3.4) |
| Inter | Text, Daten, Beschriftungen – Ersatz für Libre Franklin, die noch nicht im Repository liegt (M5) |
| Fraunces kursiv | nur für echte, anonyme O-Töne – **nicht verwendet** (keine eigene Befragung, D12) |

HOLYs eigene Schriften (kommerziell) werden nicht eingebunden (Dossier ✔ G01, ✎ G03, ✎ G04).

## 2. Programme

- **Engine** (`js/deck.js`, `js/komponenten.js`, `css/deck.css`, `css/komponenten.css`, `css/tokens.css`) und
  **Prüfwerkzeuge** (`werkzeuge/`): eigene Entwicklung der Gruppe aus Fallstudie 1 (KI-gestützt, siehe FS1
  `QUELLEN.md` und `AUTOREN.md`), unverändert kopiert am 03.11.2026.
- Thema „Pfad“ (`css/folien/pfad.css`, `js/folien/pfad.js`), Folien-CSS und `js/folien/09-fazit.js`: neu,
  KI-gestützt (Abschnitt 6). Die Rundung der Pfadecken folgt der Musterfolie `../_entwuerfe/faden/journey.html`.
- `js/folien/intern-bilder.js` (setzt die Fremdbilder ein; Name aus der Zeit vor der Veröffentlichung) und die Erweiterung von
  `werkzeuge/pruefen.mjs` (Option `--oeffentlich` = Rückfall ohne Fremdbilder, Bildprüfungen): neu am 03.11.2026,
  KI-gestützt (Delegation D06), Begriffe in D07 auf die Veröffentlichung umgestellt.
- Keine fremden Bibliotheken (die QR-Bibliothek aus FS1 wird nicht gebraucht und ist nicht kopiert).

## 3. Grafiken

Alle Grafiken sind eigene Gestaltung aus CSS und Inline-SVG, KI-gestützt erstellt: Laufleiste, Pfad, Knoten,
Brücken, Handyrahmen, Strichskalen, Farb- und Formproben, Platzhalterflächen. **Keine HOLY-Schrift,
kein nachgezeichnetes Verpackungsdesign, keine KI-Bilder** (Plan 3.7); das HOLY-Logo nur als unveränderte Datei (Abschnitt 4). Die Farben sind HOLYs Webfarben aus dem
Dossier (Gelb #FFD007 ✎ G06, Schwarz #1D1D1B ✔ G07, Creme #F3EDE1 ✎ G06; Farbproben auf 03 mit Status).

## 4. Eigene Bilder, Logo und Video (`bilder/`, `video/`)

| Datei | Folie | Herkunft | Rechte |
|---|---|---|---|
| `bilder/holy-logo-oval.png` | 01, 09 | offizielles HOLY-Logo im gelben Oval, 692 × 400 px, unverändert aus FS1 (`../../fallstudie-1-brand-persona/praesentation/bilder/`; dort: de.holy.com, Abruf 16.10.2026) | © HOLY Softdrinks GmbH; Nutzung für dieses Studienprojekt freigegeben durch Yannick am 03.11.2026 („der Gründer ist eingeweiht“, KI-Nachweis FS2 Nr. 12); Quelle auf der Folie |
| `bilder/konzept-01-landingpage.png` … `konzept-05-danke.png` | 08 | Bildschirmfotos der eigenen Konzept-Webseite (390 × 844, 04.11.2026 nach dem Umbau im Shop-Look, D09; erzeugt mit `../konzept-website/werkzeuge/folie08-bilder.mjs` ohne Schalter = Rückfall ohne Fremdbilder; Produktseite als Ausschnitt, Danke-Seite seit D09 von oben) | eigene Gestaltung ohne fremde Bilder; jede Seite trägt den Hinweis „Studentisches Konzept … keine Website der HOLY Softdrinks GmbH · keine Bestellung möglich“ |
| `video/gruender-video.mp4` | 09 | Videobotschaft des Gründers Mathias Horsch, 02.11.2026 | Zustimmung für Video und Stimme in der Präsentation (laut Yannick, KI-Nachweis FS2 Nr. 09) und seit 03.11.2026 für die Veröffentlichung online in der Präsentation (Gründer über Yannick, KI-Nachweis FS2 Nr. 18) → versioniert, nur per Pfad eingebunden; nicht kommerziell, für die Lehrveranstaltung; keine KI-Transkription. Bis 03.11.2026 per `.gitignore` ausgeschlossen in `intern/` |
| Bildkacheln b01, b04–b11, b16 | 01–05, 09 | **keine eigenen Fotos** (keine eigene Erhebung, Entscheidung 08.11.2026): Fremdbilder aus Abschnitt 4a; die Kacheln b12 (Workshop, 06), b15 (Skizze, 07) und „Tipp unter Kollegen“ (03) sind seit D12 entfernt | im Rückfall ohne Fremdbilder beschriftete Platzhalter (`data-status="leer"`, z. B. „Produktbild von HOLY · nur in der Fassung mit Bildern“), eigene Gestaltung |
| Textgrafik „0 Beiträge · Blog /blogs/news“ | 03 | Rückfall b19 (nur im Rückfall ohne Fremdbilder), eigene Gestaltung | Beleg ✔ M01, ✔ L39 (Abruf 30.10.2026) |

Rechtliche Einordnungen sind Einschätzungen von Studierenden und keine Rechtsberatung (Dossier 10.6).

## 4a. Fremdbilder (`fremdbilder/`, Veröffentlichung von der Gruppe beschlossen, ohne Genehmigung der Rechteinhaber)

Auftrag von Yannick am 03.11.2026 (wörtlich): „Lade dir die Grafiken online runter die du brauchst von Holy die
Webseite und die Präsentation muss gut aussehen rechte sind nicht wichtig wir nutzen es weder kommerziell noch
öffentlich nur privat in der uni“ (KI-Nachweis FS2, Delegation D06). Bis 03.11.2026 lagen die Dateien deshalb nur im
ausgeschlossenen Ordner `intern/` („interne Fassung“). Danach hat Yannick die Veröffentlichung erlaubt (wörtlich: „Du
darfst die Sachen online auf github posten für die online pages ich erlaube es dir“, KI-Nachweis FS2 Nr. 17). Seitdem
liegen die ausgewählten Bilder **versioniert in `fremdbilder/`**, die Angaben in `fremdbilder/register.js` –
veröffentlicht (Repository, GitHub Pages) durch Beschluss der Gruppe, nicht kommerziell, für die Lehrveranstaltung.
**Eine Genehmigung der Rechteinhaber** (HOLY Softdrinks GmbH, Lebensmittel Zeitung, YouTube, Trustpilot, Apple, OTTO,
zooplus, Philips, P&G, Urheber der Community-Fotos) **wurde nicht eingeholt**; das ist eine bewusste Abweichung von
der eigenen Einschätzung (Gestaltungsplan 1.2 und 4, ✎ G21) – keine Rechtsberatung. Die Rohdownloads
bleiben ausgeschlossen in `intern/roh/` (je Ordner `manifest.json` mit Quelle und Abrufdatum). Beschafft (Download bzw.
Bildschirmfoto, Einzelheiten je Bild im Nachweis), ausgewählt und zugeschnitten am 03.11.2026 im Workflow D06,
überarbeitet in D07 (nur aus vorhandenen Rohdateien, keine neuen Downloads); Einbau in die Folien:
`js/folien/intern-bilder.js`. Auf jeder Folie mit Fremdbildern steht unten eine Bildnachweis-Zeile; der volle Nachweis
je Bild steht in der Referentenansicht (Notizen). **Keines der Bilder ist ein eigenes Foto der Gruppe**: Werbebilder
und Community-Fotos von HOLY sind als Werbe- bzw. Symbolbild gekennzeichnet, Screenshots zeigen echte Seiten ohne
Änderung (nur Ausschnitt). Folie 08 zeigt Bildschirmfotos der Konzept-Webseite mit HOLY-Produktbildern (erzeugt vom
Website-Bau, Nachweise der Produktbilder in `../konzept-website/fremdbilder/register.js`).

Schlüssel → Folie: `b01` = 01, `b04` = 02, `m03-…` = 03, `k…-04` / `-05` / `-09` = 04 / 05 / 09, `v07-logo-…` = 07,
`konzept-0n` = 08. Die sechs Bilder der Vorbilder `v07-youtube` … `v07-pampers` stehen seit D07 auf keiner Folie (07
zeigt nur die Logos; auf B6 kein Platz) und sind seit D08 **zurückgehalten, nicht veröffentlicht**: Dateien und
Einträge liegen in `intern/vorbilder-zurueckgehalten/` (ausgeschlossen; Anleitung zum Zurückholen in
`register-auszug.js`). Nachweis wörtlich aus `fremdbilder/register.js` (die sechs zurückgehaltenen aus
`intern/vorbilder-zurueckgehalten/register-auszug.js`). Namen von Privatpersonen aus Bildunterschriften werden nicht
wiedergegeben (D08).

| Schlüssel | Herkunft (Nachweis) | Fundstelle |
|---|---|---|
| `b01-titel` | Bild: HOLY Softdrinks GmbH (erstes Produktbild auf de.holy.com/products/raspberry-raptor), Abruf 03.11.2026 · Werbebild, kein eigenes Foto der Gruppe | https://cdn.shopify.com/s/files/1/0473/2885/4173/files/ProductPic_Energy_RaspberryRaptor1_991d56dd-ae0f-4f72-bf26-b528144dfd70.jpg (Seite https://de.holy.com/products/raspberry-raptor) |
| `b04-persona` | Symbolbild – Community-Foto eines Lokführers aus dem HOLY-Squad (Bildunterschrift auf de.holy.com/pages/our-story, Name weggelassen), Abruf 03.11.2026 · nicht Marco (Persona fiktiv) | https://de.holy.com/cdn/shop/files/89.jpg?v=1788511578&width=2400 (Seite https://de.holy.com/pages/our-story) |
| `m03-creator`, `k1-creator-04`, `k1-creator-05`, `k1-creator-09` | Vorschaubild YouTube-Short „Werbung … Rabatt-Code: NONSTOP“, Kanal nonstopniels (youtube.com/shorts/ns0t9saP9D4), i.ytimg.com, Abruf 03.11.2026 · Ausschnitt | https://i.ytimg.com/vi/ns0t9saP9D4/oardefault.jpg (Short https://www.youtube.com/shorts/ns0t9saP9D4) |
| `m03-regal`, `k4-regal-04` | Foto aus dem Artikel der Lebensmittel Zeitung vom 10.04.2026 (Bildnachweis hinter Bezahlschranke nicht einsehbar, Markt nicht benannt), Abruf 03.11.2026 · Ausschnitt | https://www.lebensmittelzeitung.net/news/media/33/Pla-verscha-Vertriebsc-Bened-Pes-l.-und-Mitgrn-Hor-321340.jpeg (Artikel https://www.lebensmittelzeitung.net/industrie/nachrichten/getraenke-holy-macht-dampf-bei-der-internationalisierung-190382) |
| `m03-starterset`, `k3-produktseite-04`, `k3-produktseite-05`, `k3-produktseite-09` | Screenshot de.holy.com/products/starter-set-energy (Desktop, Cookies abgelehnt), 03.11.2026 | https://de.holy.com/products/starter-set-energy |
| `m03-blog` | Screenshot de.holy.com/blogs/news (Desktop, Cookies abgelehnt), 03.11.2026 · Ausschnitt | https://de.holy.com/blogs/news |
| `m03-unboxing`, `k5-unboxing-04`, `k5-unboxing-05`, `k5-unboxing-09` | Community-Foto „Live Unboxing mit dem Squad“, von HOLY gezeigt auf de.holy.com/pages/our-story, Abruf 03.11.2026 · Ausschnitt ohne Gesichter · Symbolbild, nicht Marco | https://de.holy.com/cdn/shop/files/63.jpg?v=1788511761&width=2400 (Seite https://de.holy.com/pages/our-story) |
| `m03-dose-shaker` | Bild: HOLY Softdrinks GmbH (Packshot der Shop-Variante „50 Portionen mit gratis Shaker“, de.holy.com/products/raspberry-raptor), Abruf 03.11.2026 · Werbebild, kein eigenes Foto der Gruppe · freigestellt, oben rechts auf rosa Fläche gesetzt | https://cdn.shopify.com/s/files/1/0473/2885/4173/files/NE-0001-03_eylki7_8e249021-3da6-4797-8529-ccf830f838fd.png (Seite https://de.holy.com/products/raspberry-raptor) |
| `m03-squad`, `k6-squad-04`, `k6-squad-05`, `k6-squad-09` | Screenshot de.holy.com/pages/account-login (SQUAD Rewards, nicht angemeldet, Desktop), 03.11.2026 | https://de.holy.com/pages/account-login |
| `m03-suche`, `k2-suche-04`, `k2-suche-05`, `k2-suche-09` | Screenshot Startpage-Suche „holy energy koffein“ (Google-Ergebnisse, Region Deutschland, mobil), 03.11.2026 | https://www.startpage.com/do/search?q=holy+energy+koffein&language=deutsch (Region Deutschland) |
| `m03-bewertungen` | Screenshot de.trustpilot.com/review/holyenergy.de (mobil, Cookies abgelehnt), 03.11.2026 | https://de.trustpilot.com/review/holyenergy.de |
| `v07-youtube` (zurückgehalten, nicht veröffentlicht; liegt in `intern/`) | Standbild aus dem Erklärvideo „YouTube Shopping-Affiliate-Programm“ (Kanal YouTube Creators DE, youtube.com/watch?v=iUZj5LiPDkI), i.ytimg.com, Abruf 03.11.2026 · Erklärgrafik mit Stockfoto, kein echter Kanal | https://i.ytimg.com/vi/iUZj5LiPDkI/maxres2.jpg (Video https://www.youtube.com/watch?v=iUZj5LiPDkI, eingebettet in https://blog.youtube/intl/de-de/news-and-events/youtube-affiliate-shopping-startet-in-deutschland/) |
| `v07-apple` (zurückgehalten, nicht veröffentlicht; liegt in `intern/`) | Screenshot support.apple.com/de-de/101575 (im Artikel eingebundenes Bildschirmfoto von Apple), 03.11.2026 | https://support.apple.com/de-de/101575 |
| `v07-zooplus` (zurückgehalten, nicht veröffentlicht; liegt in `intern/`) | Screenshot zooplus.de, Produktseite Biokat’s Micro Classic (Variantenauswahl geöffnet), 03.11.2026 · Preise Stand 03.11.2026 | https://www.zooplus.de/shop/katzen/katzenstreu/biokats/alleskoenner_streu/59413 |
| `v07-otto` (zurückgehalten, nicht veröffentlicht; liegt in `intern/`) | Screenshot otto.de/shoppages/lieferung, Textausschnitt, 03.11.2026 (Satz „Die Lieferzeit zeigen wir dir vor deiner Bestellung direkt am jeweiligen Artikel an.“; seit D07, vorher das Werbefoto derselben Seite) | https://www.otto.de/shoppages/lieferung |
| `v07-philips` (zurückgehalten, nicht veröffentlicht; liegt in `intern/`) | Grafik: Philips („Keep brushing your best with BrushSync“, philips.de/c-m-pe/buerstenkoepfe), Abruf 03.11.2026 | https://eu-images.contentstack.com/v3/assets/blte23630023bb36e19/bltf120cb0c7ba4e5ff/68dc968a8ff550412a3e6017/bed8075166804c6fa880b34f0133a251.png (Seite https://www.philips.de/c-m-pe/buerstenkoepfe) |
| `v07-pampers` (zurückgehalten, nicht veröffentlicht; liegt in `intern/`) | App-Store-Werbebild „Pampers Club – Treueprogramm“ (Procter & Gamble, apps.apple.com/DE/app/id1172171196), Abruf 03.11.2026 · Beispielcode des Herstellers | https://apps.apple.com/DE/app/id1172171196 (Bild is1-ssl.mzstatic.com …_03.jpg) |
| `v07-logo-youtube` | Logo: YouTube (gstatic.com, offizielle SVG, als PNG gerendert; einfarbig dunkel gesetzt, Dreieck ausgespart), Abruf 03.11.2026 | https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg |
| `v07-logo-apple` | Logo: Apple (Navigationsleiste support.apple.com; einfarbig dunkel gesetzt), Abruf 03.11.2026 | https://support.apple.com/de-de/101575 |
| `v07-logo-zooplus` | Logo: zooplus (Kopfzeilen-Logo zooplus.de, weiße Fassung ohne grünen Kasten; einfarbig dunkel gesetzt), Abruf 03.11.2026 | https://cdn.public.zooplus.net/media/shop-header/images/prod/zooplus/logo/zooplus@2x.png (Seite https://www.zooplus.de/) |
| `v07-logo-otto` | Logo: OTTO (Kopfzeile otto.de; einfarbig dunkel gesetzt), Abruf 03.11.2026 | https://www.otto.de/assets-static/icons/pl_logo_otto.svg |
| `v07-logo-philips` | Logo: Philips (Kopfzeile philips.de; einfarbig dunkel gesetzt), Abruf 03.11.2026 | https://www.philips.de/c-f/XC000019732/woher-weiß-ich-wann-ich-die-bürstenköpfe-austauschen-sollte |
| `v07-logo-pampers` | Logo: Pampers (Kopfzeile pampers.de; einfarbig dunkel gesetzt), Abruf 03.11.2026 | https://images.ctfassets.net/ym05119t78e1/13XfMwh1bwO6NUepeNDs30/cbd64687086a8474b8af1fef76ee8b34/Pampers_Logo_Revamp__1_.svg |
| `konzept-01`, `konzept-02`, `konzept-03`, `konzept-04`, `konzept-05` | Bildschirmfoto der Konzept-Webseite (Fassung mit Bildern, darin HOLY-Produktbilder; Veröffentlichung von der Gruppe beschlossen, KI-Nachweis FS2 Nr. 17), 04.11.2026 (D09) | fallstudie-2-customer-journey/konzept-website/&lt;seite&gt; (Fassung mit Bildern, konzept-website/fremdbilder/register.js), erzeugt mit konzept-website/werkzeuge/folie08-bilder.mjs --intern (Schaltername historisch); Seiten: `index.html` (01), `koffein-check.html` (02), `produkt.html?packung=50` (03), `warenkorb.html?packung=50` (04), `danke.html?packung=50` (05) |

Bewusst **ohne** Fremdbild blieben bis D12: b12 Workshop-Foto (06), b15 Handskizze QR-Brücke (07; das Pampers-Bild ist
nur das Vorbild), Kachel „Tipp unter Kollegen“ (03, kein Bild zeigt Mundpropaganda unter Kollegen ehrlich). Seit D12
(08.11.2026) sind die drei Kacheln entfernt – keine eigene Erhebung, keine neuen Fremdbilder. X12 OTTO: seit
D07 der Textausschnitt der Serviceseite „Lieferung“ mit dem Satz „Die Lieferzeit zeigen wir dir vor deiner Bestellung
direkt am jeweiligen Artikel an.“ (bis D07 das Werbefoto derselben Seite, das die Aussage nicht belegte), seit D08 wie
die übrigen Bilder der Vorbilder zurückgehalten (nicht veröffentlicht, jederzeit zurückholbar); eine Produktseite mit
Lieferzeit am Artikel wurde nicht aufgenommen (Bot-Schutz nicht umgangen). Eigene Fotos gibt es nicht (keine eigene
Erhebung, D12); die Werbe- und Community-Bilder bleiben, als Werbe- bzw. Symbolbild gekennzeichnet.

## 4b. Werbespot (Folie 08, Knopf „Spot ansehen ▶“; seit D12)

| Datei | Herkunft | Rechte und Kennzeichnung |
|---|---|---|
| `../werbevideo/holy-werbespot.mp4` (24,5 s, H.264/AAC), `holy-werbespot-poster.jpg`, `holy-werbespot.de.vtt` | Werbespot „Mein Moment.“, gebaut KI-gestützt im Workflow D11 am 04.11.2026 (KI-Nachweis FS2 Nr. 24 / D11); Herkunft jedes Bildes, Drehbuch und Prüfstand in `../werbevideo/README.md` und `drehbuch.md` | **studentisches Konzept der Gruppe, keine Werbung der HOLY Softdrinks GmbH**; Stimme, Musik und Geräusche **KI-generiert (ElevenLabs)**; Produkt- und Lifestyle-Bilder von HOLY (de.holy.com, Abruf 03.11.2026) ohne Genehmigung der Rechteinhaber (Beschluss der Gruppe, KI-Nachweis FS2 Nr. 17), HOLY-Wortmarke mit Einverständnis (Nr. 12); nicht kommerziell, für die Lehrveranstaltung. Kennzeichnung im Spot selbst (Pflichtzeile in jedem Bild, Endkarte), in der Bühne der Präsentation („Studentisches Konzept · keine Werbung der HOLY Softdrinks GmbH · Stimme KI-generiert“, darunter Nachweis mit ElevenLabs und Bildrechten) und seit der Nacharbeit D12 sichtbar auf B8 (ElevenLabs, Nr. 24; HOLY-Bilder ohne Genehmigung, Nr. 17). Fakten im Spot nur mit Befund-ID (✔ S92, ✔ R19, ✔ R25) |

Eingebunden per Pfad aus `js/folien/08-spot.js` (erst beim Klick angefragt, nie in Druck, Aufnahme, Referentenfenster).
Die Präsentation hat den Spot nicht verändert; geprüft wurde nur das Abspielen in der Präsentation (synthetisches
Testvideo, AUTOREN §14), nicht der Inhalt des Spots (der ist im README des Spots dokumentiert).

## 5. Inhalte und Fakten

- **Recherche-Dossier FS2** `../recherche-customer-journey.md`: jede Zahl und jede Aussage über HOLY mit Befund-ID
  und Status (✔ belegt · ✎ korrigiert · ~ unsicher · **H** Hypothese); Faktencheck Anhang A, Quellenverzeichnis
  Anhang B. Best Practices: Kapitel 7a (X01–X17, Websuche durch Unteragenten, Abruf 03.11.2026, gegengeprüft).
  Je Folie eine Quellzeile mit IDs; ausführliche Belege in den Notizen und in Backup B8.
- **Gestaltungsplan** `../gestaltungsplan.md` (Folienplan, Urteile zu den Überleitungen, Top 3 je Phase,
  Kennzahlen-Vorschlag): Entwurf, Vorschläge als **H** gekennzeichnet.
- **Vorlesung** Prof. Stenger, S. 107–129 (Definition S. 107, Phasen S. 108, 5 As S. 109, Prozess S. 111,
  Paid/Owned/Earned S. 112, Intersport S. 113, Armbanduhr S. 116, Aktivitäten S. 117–119, Raster S. 129);
  Literatur dahinter nur „zit. n. Stenger“.
- **Persona Marco** `../../fallstudie-1-brand-persona/persona-steckbrief.md` (fiktiv); Statista-Werte nur wie in
  `persona-daten.md` (✔ P94).
- **Konzept-Webseite** `../konzept-website/` (README mit Befunden je Seite).
- **Eigene Erhebungen** (Selbstversuch, Kurzinterviews, Codierung, Workshop): **nicht durchgeführt** (Entscheidung
  Yannick 08.11.2026, KI-Nachweis FS2 Nr. 26). Seit D12 sagen die Folien das ehrlich: B1 nennt Grundlage (Dossier,
  Abrufe 30.10./03.11.2026, KI-gestützte Stichproben ~ B20–B24) und Grenzen; B5 zeigt Kundenstimmen aus
  Bewertungsportalen (Dossier 5.3: ✔ B14, ✔ B15, ~ B17, ~ B20–B24). Neue Belege in D12: keine – nur Zahlen, die schon im
  Dossier stehen (B1: 353 Befunde und 17 X laut Dossier-Kopf; 193 Bewertungen = Summe der Stichproben A–E).

## 6. KI-Unterstützung

Die Präsentation ist KI-gestützt entstanden: Folien, Sprechtexte, Gestaltung (CSS/SVG) und Skripte mit Claude Code
im Workflow „fs2-bau“ (KI-Nachweis FS2, Eintrag 11, Delegation D05; `../../ki-nachweis/ki-nachweis-fallstudie-2.md`).
Beschaffung, Auswahl und Einbau der Fremdbilder (Abschnitt 4a) ebenfalls KI-gestützt im Workflow D06 am
03.11.2026 (Unteragenten, Quelle je Bild in Abschnitt 4a); keine Bilder erzeugt. Bearbeitet nur wie im Nachweis je
Bild angegeben: Zuschnitt und Verkleinerung, Packshot `m03-dose-shaker` freigestellt auf rosa Fläche, Logo-SVGs als
PNG gerendert. Überarbeitung D07 (03.11.2026, nur aus vorhandenen Dateien in `intern/roh/`, keine neuen Downloads):
`m03-blog` neuer Ausschnitt (Desktop), `m03-dose-shaker` Produkt oben rechts, `v07-otto` als Textausschnitt, Logos
einfarbig dunkel (#1D1D1B; YouTube mit ausgespartem Dreieck, zooplus aus der weißen Fassung ohne grünen Kasten).
Überarbeitung D08 (03.11.2026, nur aus vorhandenen Dateien, keine neuen Downloads): `m03-suche` neu zugeschnitten aus
`intern/roh/touchpoints/k2-suche/k2-startpage-holy-energy-koffein-treffer-mobil.png` (Beschriftung auf freier Fläche),
die sechs Bilder der Vorbilder zurückgehalten, Nachweise ohne Namen von Privatpersonen.
Grundlage waren nur Gestaltungsplan, Dossier, Persona und Vorlesung; keine neue Websuche in diesem Schritt. Keine
KI-Bilder, keine KI-simulierte Befragung. Die Prüfung durch die Gruppe ist offen. Die Videobotschaft wurde von der KI
weder angesehen noch transkribiert.
Finalisierung D12 (08.11.2026, KI-Nachweis FS2 Nr. 26): Texte, Backup B1/B5/B9 und die Bühne für den Werbespot
(`js/folien/08-spot.js`, `css/folien/08-spot.css`) KI-gestützt; keine Websuche, keine neuen Downloads, keine neuen
Fremdbilder; Fakten nur aus dem Dossier. Aus Modellwissen (nicht belegt) stammen technische Annahmen zum Browser
(im Vollbild behält der Browser Esc vermutlich für sich – im Headless-Test nicht prüfbar, Generalprobe; Chrome lädt
Untertitel per `file://` nicht – im Test bestätigt) sowie der Grenzen-Satz auf B1 „Suchtreffer hängen von Ort, Gerät und
Zeitpunkt ab“ (allgemeines Wissen; sinngemäß Gestaltungsplan 12; im Dossier als Momentaufnahme ~ S91, deshalb auf B1
„(~ S91)“).
Nacharbeit nach der Abnahme D12 (08.11.2026, KI-Nachweis FS2 Nr. 26): Formulierungen an den Befunden geschärft, ohne
neue Belege – 05 Ü4 „alte Danke-Seiten mit totem Link“ (✎ T31: ob sie noch im Bestellablauf stehen, ist offen) und
„kein Abo“ (✔ T30; eine Nachfüll-Erinnerung steht im Dossier nur als Vorschlag, Kap. 9 / X14); „Kritik nach dem Kauf“
nur „in Bewertungen“ (**H** B25, laut Dossier 5.2 teils Effekt der Quelle); Quellzeilen 03 und 05 um B10, S27 und H B25
ergänzt, „(KI)“ bei ~ B20/B21 (Stichproben eines Recherche-Agenten); B1 nennt Abrufe und Screenshots „KI-gestützt
(Unteragenten)“, B8 den Rechtestatus der HOLY-Bilder im Werbespot (Nr. 17) und ElevenLabs (Nr. 24), B9 eine Zeile
„Screenshots, Fremdbilder – KI-gestützt abgerufen, keine KI-Bilder“.
