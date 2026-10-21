# LIESMICH – Web-Präsentation Fallstudie 1 (HOLY)

Präsentation zur Fallstudie 1 „Brand Persona & Markenidentität“ (Marke **HOLY**) im Modul
Unternehmenskommunikation bei Prof. Dr. Daniel Stenger, Hochschule Kaiserslautern.
Gruppe: Yannick Heisler, Elias Knauber, Lukas Welker · Vortrag: **Mo, 26.10.2026**, 15 Minuten.

Stand: 20.10.2026 – alle Folien zusammengeführt, geprüft, nach der Abschlussprüfung, der Live-Prüfung und
der zweiten Abschlussprüfung überarbeitet. Seit Sa, 17.10. von Account 1 übernommen: Ergebnisse von Bündel A
eingebaut – Markenkompetenz A1 (Folie 03), Persona-Steckbrief A2 (Folie 04, B3) und Limbic Map A3 (Folie 05),
dazu die passenden Stichworte auf Folie 10 und die Verweise auf 11, B2, B7 und B8; offizielles HOLY-Logo auf
Folie 01, 09b und 12; Befunde der Prüfung (Darstellung, Inhalt, Rechte) nachgearbeitet; Exporte am 19.10.
neu erzeugt (Änderungen: `AUTOREN.md`, Abschnitte 11–15). Die Folien 03–05 sind **Entwurf** – Freigabe durch
Yannick offen (Checkliste, Abschnitt 12). Seit 19.10. ist für Folie 08 eine **eigene Live-Abstimmung** vorbereitet
(QR-Code → Abstimmseite → Google-Tabelle → Balken live), am 19.10. nach zwei Prüfungen nachgearbeitet;
eingerichtet wird sie in Yannicks Google-Konto (Abschnitt 6). Seit 19.10. sind das Rätselbild (Folie 01) und
das Persona-Bild (Folie 04) **eigene Illustrationen** (KI-gestützt, gekennzeichnet) statt Platzhalter, nach
der Prüfung am 19.10. nachgearbeitet (Rätselbild ohne Tier auf der Dose, volle Kennzeichnung auf Folie 04);
die Exporte in `export/` sind damit am 19.10. neu erzeugt (Abschnitt 11). Seit Di, 20.10. ist das Tier unserer
Analyse auf Folie 08 und in der Abstimmung das **Chamäleon** statt des Waschbärs (Einordnung Elias Knauber;
Begründung als Vorschlag gekennzeichnet, Elias prüft – Abschnitt 6 und 12, `AUTOREN.md` Abschnitt 18); nach zwei
Prüfungen nachgearbeitet und die Exporte am 20.10. neu erzeugt (Folie 08 mit Chamäleon).
Seit Di, 20.10. ist das **Rätsel auf Folie 01 lösbar**: Das Rätselbild zeigt das **Original-Logo** auf einer
erfundenen Dose (`bilder/raetsel-holy-logo.svg`, Entscheidung Yannick), Schritt 0 das Logo groß und unscharf, ein
Hinweis, dann die Auflösung – **drei Klicks** auf Folie 01 (Abschnitt 8 und 12, `AUTOREN.md` Abschnitt „Rätsel mit
Logo“); nach zwei Prüfungen nachgearbeitet und die Exporte am 20.10. neu erzeugt. Die Logo-Nutzung in der
Illustration klärt Yannick noch mit dem Betreuer (Checkliste, Abschnitt 12).
Seit Di, 20.10. zählen in der Live-Abstimmung nur **Stimmen der letzten 30 Minuten** (Zeitfenster, damit im Vortrag
keine alten Stimmen dastehen; Abschnitt 6); nach einer Prüfung am 21.10. nachgearbeitet (abgelaufene Zahlen auf
Folie 08 → Nullen statt Beispieldaten, Kurzprüfung der Uhrzeit in beiden Richtungen, neues Prüfwerkzeug
`werkzeuge/zeitfenster-e2e.mjs`). Es wirkt erst, wenn Yannick das Skript bei Google aktualisiert hat (Checkliste,
Abschnitt 12 – der Punkt ist damit wieder dran).
Auf vielen Folien stehen noch **Beispieldaten** (orange Pille
„Beispieldaten“). Was die Gruppe bis zum Vortrag ersetzen muss, steht in `index.html` in einem Kasten vor
jeder Folie (Strg+F „FOLIE 06“) und unten in der Checkliste (Abschnitt 12, mit Zuständigkeit und Frist).

Fertige Ausgaben (Stand 20.10.2026, mit dem Rätselbild mit Logo auf Folie 01, dem Chamäleon auf Folie 08, den Entwürfen 03–05 und den gekennzeichneten Beispieldaten – nach
den Freigaben und dem Eintragen echter Ergebnisse neu erzeugen, Abschnitt 11): `export/praesentation.pdf`
(alle Folien inkl. Backup, Plan B), `export/uebersicht.png` (alle Folien auf einen Blick),
`export/folien/<id>.png` (jede Folie einzeln im Endzustand, 1920 × 1080).

---

## 1. Starten

1. Den ganzen Ordner `praesentation/` auf den Präsentationsrechner kopieren (nicht nur `index.html` –
   die Unterordner gehören dazu).
2. `index.html` per **Doppelklick** öffnen. Empfohlen: **Google Chrome oder Microsoft Edge** (getestet mit
   Chromium 141). Firefox und Safari funktionieren mit einfacheren Übergängen (nicht getestet).
3. **F** = Vollbild (oder F11). Die Folie (1920 × 1080) passt sich jedem Bildschirm an; bei 16:10-Beamern
   entstehen oben/unten schmale Ränder, abgeschnitten wird nichts.

- Läuft **ohne Internet und ohne Server** (Schriften, Bilder und Programme liegen im Ordner). Einzige Ausnahme:
  die eigene Live-Abstimmung auf Folie 08 braucht Internet – ohne Internet zeigt die Folie „offline“, alles andere
  läuft wie gewohnt (Abschnitt 6).
- **F5** (Neuladen) bleibt auf derselben Folie und demselben Schritt (Adresse z. B. `index.html#f06.2`).
- **Tablet/Handy:** quer halten (im Hochformat erscheint ein Hinweis); wischen und antippen, siehe Abschnitt 2.
- Die Präsentation startet im Thema „Editorial“, hell, mit den HOLY-Farben (Gelb/Schwarz).

## 2. Tasten

| Taste | Wirkung |
|---|---|
| → ↓ Leertaste Bild↓ Enter | weiter (nächster Schritt bzw. nächste Folie) |
| ← ↑ Bild↑ Rücktaste | zurück |
| Pos1 / Ende | erste / letzte Hauptfolie |
| Ziffern + Enter (z. B. `6` `Enter`) | Folie 06 anspringen; `8` `B` `Enter` = Folie 08b, `9` `B` `Enter` = 09b |
| O | Übersicht aller Folien (mit Backup), Pfeile + Enter oder Klick |
| P | Referentenansicht im zweiten Fenster |
| F | Vollbild an/aus |
| B oder . | Schwarzbild; B, Punkt, Esc oder eine Blättertaste blendet wieder ein |
| T / D | Thema wechseln (Editorial, Bento, Keynote) / hell–dunkel |
| H oder ? | Hilfe mit allen Tasten |
| Esc | Fenster schließen, Eingabefeld verlassen |
| Z | nach einem Sprung aus einer Backup-Folie („Zu Folie …“) zurück ins Backup |
| 1–5 | nur auf Folie 08, solange die Umfrage zu sehen ist: Stimme zählen (Umschalt = −1). Zum Springen von dort erst weiterklicken oder **O** nutzen; „1“ „0“ Enter erkennt die Präsentation als Folie 10 (die „1“ zählt dann nicht). Mit der eigenen Live-Abstimmung pausiert eine Ziffer die Abfrage (Abschnitt 6) |

- **Nach der letzten Hauptfolie (12) geht es nicht automatisch ins Backup** – Backup nur über **O**.
- **Bedienleiste** unten rechts erscheint, wenn die Maus im **unteren Bildrand** bewegt wird (nicht bei
  jedem Klick – sonst verdeckte sie die Quellenzeile), und verschwindet nach 2,5 s (Pfeile, Nummer,
  Übersicht, Referentenansicht, Thema, hell/dunkel, Farbwähler, Vollbild, Hilfe). Auf Touch-Geräten:
  Antippen zeigt sie (Knöpfe 44 × 44 px); auf dem Handy im Hochformat nur die Grundknöpfe.
- **Mini-Steuerrad** oben rechts (Folien 03–09b): Klick öffnet das Sprungmenü, ein Feld anklicken springt
  zur passenden Folie. Auch die Steuerräder auf Folie 02, 10 und 12 sind klickbar (Maus oder Tab + Enter).
- **Ruhende Maus:** Liegt der Mauszeiger beim Weiterschalten zufällig auf dem Steuerrad, wird nichts
  hervorgehoben – erst wenn die Maus bewegt wird.
- **Touch:** nach links wischen = weiter, nach rechts = zurück; Antippen zeigt die Bedienleiste.

## 3. Ablauf und Zeitplan (Sollzeiten, Referentenuhr)

| Folie | Inhalt | Bündel / spricht | Sollzeit |
|---|---|---|---|
| 01 | Einstieg: Welche Marke steckt dahinter? → Titel | A · Yannick | 0:45 |
| 01b | (optional, ausgeblendet) Live-Wortwolke | A · Yannick | (0:45) |
| 02 | Ausgangslage & Vorgehen (Steuerrad als Agenda) | A · Yannick | 1:00 |
| 03 | Markenkompetenz | A · Yannick | 0:45 |
| 04 | Brand Persona | A · Yannick | 1:20 |
| 05 | Limbic Map | A · Yannick | 0:55 |
| 06 | Repertory Grid → Markenattribute | B · Lukas | 1:20 |
| 07 | Laddering → Markennutzen | B · Lukas | 1:30 |
| 08 / 08b | Analogien + Live-Umfrage / Markentonalität (Aaker) | B · Lukas | 1:10 + 0:50 |
| 09 / 09b | Kommunikationsanalyse / Markenbild | C · Elias | 1:00 + 0:55 |
| 10 | Markensteuerrad (Synthese) | Inhalt Yannick, spricht Elias | 1:15 |
| 11 | Fazit & Empfehlungen | C · Elias | 1:15 |
| 12 | Danke & Fragen (Steuerrad als Sprungmenü) | alle | – |
| B1–B8 | Backup (Methodik, Prompt-Log, Datenquellen, Rohdaten, Matrix, Raster, Quellen, Belege der Folien) | je Bündel | – |

**Summe Hauptfolien: 14:00 min** (60 s Puffer für die zwei Live-Momente: Zurufe auf Folie 01 und
Live-Umfrage auf Folie 08). Die Sollzeiten der Folien 04, 05, 06, 09, 09b und 11 wurden dafür am
16.10.2026 gekürzt (Sprechtexte angepasst). Der ursprüngliche Ablaufplan sah 14:45 vor – **die Gruppe
bestätigt den 14:00-Plan** und gleicht `../arbeitsplan.md` an (Checkliste, Abschnitt 12). Die optionale Folie 01b (+0:45, mit dem Abgleich auf Folie 10
ca. +0:55) nur einschalten, wenn dafür auf Folie 08 die Live-Umfrage entfällt (spart ca. 0:30). In der
Generalprobe die Umfrage mit Stoppuhr testen. Wer spricht, ist ein Vorschlag nach dem Arbeitsplan – die
Gruppe legt es fest.

## 4. Referentenansicht mit zweitem Bildschirm

1. Laptop mit dem Beamer verbinden und die Bildschirme **erweitern, nicht spiegeln**
   (Windows: **Win + P → „Erweitern“**; macOS: Systemeinstellungen → Displays → „Spiegeln“ aus).
2. `index.html` in Chrome/Edge öffnen und **P** drücken. Beim ersten Mal blockiert der Browser das
   Pop-up: in der Adressleiste auf das Pop-up-Symbol klicken → „Pop-ups immer zulassen“ → noch einmal **P**.
3. Das **Referentenfenster** auf dem Laptop lassen, das **Hauptfenster** auf den Beamer ziehen und dort **F**
   (Vollbild) drücken.
4. Geblättert wird in beiden Fenstern; beide bleiben synchron (auch Umfrage und Wortwolke).

Das Referentenfenster zeigt: aktuelle Folie, nächste Folie bzw. nächsten Schritt, Sprechtext groß
(A− / A+), Absätze zum aktuellen Schritt markiert (der Text rollt beim Weiterschalten automatisch zum
aktuellen Absatz; von Hand gescrollter Text – z. B. „Mögliche Rückfragen“ in der Fragerunde – bleibt stehen),
Vorschau des nächsten Schritts (mit den aktuellen Umfrage-Stimmen), Gesamtuhr gegen 15:00, Folienuhr gegen die Sollzeit
(ab 85 % gelb, darüber rot), Abgleich mit dem Plan („im Plan“, „0:20 hinter Plan“) und die Uhrzeit. Die Uhr
startet beim ersten Weiterschalten; Pause und „Zeit zurücksetzen“ per Knopf. Der Knopf „Schwarzbild“
schaltet nur den Saal schwarz. Direkt aufrufen geht auch: `index.html?referent`. Adressparameter wie
`?optional=alle` übernimmt **P** automatisch ins Referentenfenster (gleiche Folienliste).

## 5. Präsentations-Clicker

Gängige Clicker senden **Bild↑/Bild↓** (oder Pfeiltasten) – beides funktioniert, auch wenn gerade ein
Eingabefeld (Wortwolke, Umfragewerte) aktiv ist. Einfach in den USB-Anschluss stecken; vorher einmal
alle Folien damit durchklicken. Taste „Schwarz“/„Blank“ am Clicker sendet meist **B** oder **.** – geht.

## 6. Live-Umfrage (Folie 08)

Frage: „Wenn HOLY ein Tier wäre – welches?“ mit **Adler, Löwe, Chamäleon, Fuchs, Schwan**
(`marke.js → umfragen.tier.optionen`, festgelegt von Yannick am 19.10.2026; seit 20.10.2026 „Chamäleon“ statt
„Waschbär“ an derselben Stelle; „Chamäleon“ = unsere Analyse – Einordnung Elias Knauber, Begründung als Vorschlag
in den Notizen von Folie 08 –, „Adler“ = Selbstbild, Maskottchen „Raptor“). Die Tabelle speichert nur die Nummer
des Tiers: Probestimmen mit Option 2 aus der Zeit vor dem 20.10. zählen jetzt als Chamäleon – unkritisch, die
Runde wird vor dem Vortrag umgestellt (Abschnitt 12). Die Folie kann drei Wege – **Weg A ist der Plan**, B und C
sind die Rückfallebenen.

### Weg A – eigene Live-Abstimmung (Plan)

Das Publikum scannt den **QR-Code** auf Folie 08 und tippt auf unserer Abstimmseite (`abstimmen.html`,
HOLY-Design, anonym, ohne Anmeldung) ein Tier an. Die Stimme geht an eine kleine **Web-App** in Yannicks
Google-Konto (Google Apps Script) und landet als Zeile in einer Google-Tabelle. Folie 08 holt den Stand
**alle 2 Sekunden** und zeichnet die Balken live; die Prozente rechnet die Präsentation. Je Handy zählt nur
die letzte Stimme (umentscheiden geht, doppelt zählen nicht). **Präsentationsrechner und Handys brauchen
Internet** (Handys: mobile Daten genügen).

**Andrang:** Kommen viele Stimmen auf einmal, sendet das Handy selbst noch einmal – insgesamt höchstens drei
Versuche, dazwischen der ruhige Hinweis „Gerade stimmen viele ab – Ihre Stimme wird gesendet …“. Erst danach
erscheint „Das hat nicht geklappt“ mit „Nochmal versuchen“. Wer sich währenddessen umentscheidet, tippt einfach
ein anderes Tier an – es zählt die neueste Wahl. Seit der Fassung vom 19.10.2026 holt sich jede Stimme beim
Server nur kurz eine Zeilennummer und schreibt dann gleichzeitig mit den anderen (vorher nacheinander: beim
Lasttest am 19.10. nur 19 von 40). Diese Fassung – inzwischen die vom **20.10.2026** mit dem Zeitfenster (unten) –
muss Yannick einmal in Google einspielen (Anleitung, „Skript aktualisieren“; Checkliste, Abschnitt 12).

**Zeitfenster (seit 20.10.2026, Auftrag Yannick: „keine alten Stimmen“ im Vortrag):** Folie 08 zählt je Handy nur
die letzte Stimme der **letzten 30 Minuten** (`marke.js → umfragen.tier.gueltigMinuten: 30`). Ältere Stimmen
verschwinden von der Folie, bleiben aber in der Tabelle. Auch die auf dem Präsentationsrechner gespeicherten Zahlen
von Folie 08 gelten nur 30 Minuten (älter → beim Neuladen oder Betreten der Folie **Nullen**, bis die Web-App
antwortet – keine Beispielwerte, seit 21.10.), und ein Handy, das vor mehr als 30 Minuten abgestimmt hat, zeigt
wieder die Tiere. Für die Abstimmung im Vortrag selbst (rund eine Minute) ändert
sich nichts. **Wirkt erst nach „Skript aktualisieren“** (Fassung 20.10.2026) – vorher zählt die Web-App ohne
Zeitgrenze; Maus auf der Pille zeigt dann „OHNE Zeitfenster“, sonst „zählt Stimmen der letzten 30 Min.“. Die Runde
bleibt trotzdem nötig (sie trennt Probe und Vortrag ganz).

**Einrichten** (einmal, ca. 10 Minuten): `live-abstimmung/ANLEITUNG.md`, Schritt für Schritt. Danach in
`marke.js → umfragen.tier`:

| Eintrag | Wert |
|---|---|
| `liveQuelle` | Web-App-URL aus der Anleitung: `'https://script.google.com/macros/s/…/exec'`. Leer `''` = Weg A aus (dann kein QR-Code, links „Abstimmung per Handzeichen“) |
| `runde` | `'probe'` für Tests und Generalprobe. **Spätestens So, 25.10.:** `'vortrag-2026-10-26'` – dann beginnt Folie 08 bei 0, die Probestimmen bleiben in der Tabelle, zählen aber nicht |
| `gueltigMinuten` | `30` (seit 20.10.2026): Stimmen zählen auf Folie 08 nur so viele Minuten. `0` = ohne Zeitgrenze (z. B. falls die Kurzprüfung der Anleitung scheitert). Ändern wie `runde`: auf GitHub **und** auf dem Präsentationsrechner |
| `link` | Adresse der Abstimmseite (für den QR-Code) – steht schon drin, nicht ändern |

`liveQuelle` und `runde` müssen **auf GitHub** (die Abstimmseite liest `marke.js` von GitHub Pages) **und auf
dem Präsentationsrechner** gleich stehen. Nach dem Hochladen dauert es einige Minuten, bis GitHub Pages die
neue Fassung zeigt – deshalb früh umstellen. Wie man ohne Git auf GitHub ändert und beides kontrolliert:
Anleitung, Schritt 6 und „Vor dem Vortrag“. Kurzkontrolle auf dem Handy: `abstimmen.html?u=tier` auf GitHub
Pages zeigt die fünf Tiere (nicht „Die Abstimmung ist gerade nicht geöffnet“).

**Testen** (Generalprobe, möglichst im Hörsaal):
1. Präsentation öffnen, Folie 08: Die Pille im Kopf der Ergebnisse zeigt nach 1–2 s **„Live“** (grün,
   pulsierender Punkt). Die Beispielwerte verschwinden mit dem ersten Stand. Maus auf der Pille: „zählt Stimmen
   der letzten 30 Min.“ (steht dort „OHNE Zeitfenster“, ist das Skript noch nicht aktualisiert).
2. QR-Code mit mehreren Handys aus der **letzten Reihe** scannen (iPhone und Android, über mobile Daten),
   ein Tier antippen → nach wenigen Sekunden bewegt sich der Balken. Umentscheiden → der Balken wandert,
   `n` bleibt gleich.
3. Die Test-Adressen der Anleitung im **privaten Fenster** öffnen (sonst fällt eine falsche Freigabe nicht
   auf). **Nach dem Aktualisieren des Skripts** (Anleitung, „Skript aktualisieren“) den **Lasttest** laufen
   lassen – Anleitung, Schritt 7: 40 Handys gleichzeitig, mindestens zweimal, einmal mit 60. Er spielt die
   automatische Wiederholung der Handys nach und lässt eine „Folie“ mitlesen. **BESTANDEN** heißt: alle
   Stimmen gezählt, kein Handy musste selbst tippen, jedes sah „Danke“ nach höchstens 15 s.
4. Nach dem Umstellen auf `'vortrag-2026-10-26'`: Folie 08 zeigt `n = 0`, und `marke.js` auf GitHub Pages
   nennt dieselbe Runde (Anleitung, „Vor dem Vortrag“ – sonst zählen die Handys weiter in „probe“).

**Die Pille im Kopf der Ergebnisse** (Maus auf die Pille zeigt Runde, Zeitfenster, letzten Stand bzw. den Grund;
zum Zeitfenster: „zählt Stimmen der letzten 30 Min.“, „OHNE Zeitfenster …“ = alte Skript-Fassung, „… angefragt
(noch keine Antwort der Web-App)“ = noch unbekannt):

| Pille | Bedeutung | Was tun |
|---|---|---|
| **LIVE** grün, Punkt pulsiert | verbunden, neuer Stand alle 2 s | nichts |
| LIVE grau, ohne Puls | Verbindung wird aufgebaut (erste Sekunden) | kurz warten |
| **OFFLINE** grau, gestrichelt | keine Antwort von der Web-App (Internet? `liveQuelle`?) oder Antwort langsamer als ca. 8 s. Die Werte bleiben stehen; eine späte Antwort wird noch übernommen | Klick auf die Pille = sofort neu versuchen; sonst „Rückfall“ unten |
| **LIVE PAUSIERT** grau, Pausenzeichen | jemand hat von Hand gezählt (Klick, Ziffer, „Werte“, „Zurücksetzen“). Die Folie fragt nicht mehr – Hand und Abstimmung überschreiben sich nicht. Die Pause übersteht ein Neuladen (F5), solange die Handwerte jünger als 30 Minuten sind | Klick auf die Pille = fortsetzen; der Stand der Abstimmung ersetzt dann die Handwerte – vorher Zahlen notieren |

- **„Zurücksetzen“ ist bei Weg A nicht nötig** – die Runde sorgt für den Start bei 0. Wer es doch klickt,
  pausiert die Abfrage: dann die Pille anklicken.
- **Zahlen gehören zur Runde und verfallen nach 30 Minuten:** Was der Präsentationsrechner gespeichert hat
  (Stimmen, Handwerte), gilt nur in derselben Runde und nur 30 Minuten (`gueltigMinuten`). Stimmen und Handwerte
  der Generalprobe („probe“) erscheinen im Vortrag also nie – auch nicht, wenn die Web-App dann nicht erreichbar
  ist. Ganz ohne gespeicherten Stand (oder mit dem einer anderen Runde) zeigt Folie 08 die Beispielwerte mit Pille
  „Beispieldaten“; die erste Handstimme setzt alles auf 0. Sind die gespeicherten Zahlen derselben Runde älter als
  30 Minuten, stehen **Nullen** da (die alten Stimmen zählen nicht mehr), bis die Web-App antwortet. Eine
  gespeicherte Pause verfällt mit ihren Handwerten.
- **Neuladen (F5)** beendet eine Pause **nicht** – erst der Klick auf die Pille setzt fort. Das gilt innerhalb von
  30 Minuten (`gueltigMinuten`): Sind die Handwerte älter, verfallen sie beim Neuladen oder Betreten der Folie, die
  Pause mit ihnen – die Folie fragt dann wieder.
- **Referentenfenster:** zeigt dieselben Zahlen und dieselbe Pille, fragt aber nicht selbst. Unter der
  Kopfzeile „Aktuell“ steht der Zustand gut lesbar („Abstimmung: live“, „… offline – Klick: neu versuchen“,
  „… pausiert – Klick: fortsetzen“); Klick darauf wirkt wie Klick auf die Pille. Wer dort von Hand zählt,
  pausiert die Abfrage im Vortragsfenster. Beim Betreten von Folie 08 schickt ihm das Vortragsfenster die Zahlen,
  die es gerade zeigt – so stimmen beide auch dann überein, wenn dort noch Handwerte stehen, die älter als 30
  Minuten sind.
- **PDF und Exportbilder** zeigen Folie 08 im Endzustand (Analogien, Titel mit der Auflösung) – **ohne
  QR-Code und ohne Umfrage**; abgefragt wird dort nichts. Im PDF (Plan B) ist die Live-Abstimmung also nicht
  möglich (Abschnitt 11). Wer den QR-Code nach dem Vortrag scannt, liest „Die Abstimmung ist gerade nicht
  geöffnet“.
- **Prüfwerkzeug und Exporte** (`werkzeuge/pruefen.mjs`, `uebersicht.mjs`) fragen die Web-App nie ab: Anfragen
  an die `liveQuelle` beantwortet eine eingebaute Attrappe, alles andere ist gesperrt. Im Prüflauf erscheint
  Folie 08 wie zu Beginn des Vortrags (QR-Code, „Live“, `n = 0`). Fehlt in einer Stand-Abfrage `minuten=30`
  (`gueltigMinuten`), meldet `pruefen.mjs` einen Fehler. Das Zeitfenster auf Handy und Folie (Ablauf, Speicher,
  Pause, Referentenfenster, Tooltip) prüft `werkzeuge/zeitfenster-e2e.mjs` im Browser – nur mit Attrappen auf
  localhost, mit vorgestellten Uhren; `--mutationen` = absichtlich kaputte Kopien von `js/komponenten.js` und
  `js/abstimmen.js`, jede muss auffallen (Abschnitt 13, `AUTOREN.md` §20).
- **Rückfall im Vortrag:** Ist nur der Präsentationsrechner offline, die Handys aber nicht, kommen die Stimmen
  trotzdem an: Ein Teammitglied öffnet auf dem Handy die Stand-Adresse (vorher als Lesezeichen anlegen, mit
  Zeitfenster wie Folie 08: `<liveQuelle>?aktion=stand&umfrage=tier&runde=vortrag-2026-10-26&anzahl=5&minuten=30`)
  und trägt die Zahlen über „Werte“ ein (Reihenfolge Adler, Löwe, Chamäleon, Fuchs, Schwan). Geht gar nichts:
  Plan C.
- **Nach dem Vortrag:** Ergebnis **gleich** sichern – Foto von Folie 08 und die Stand-Adresse **mit**
  `&minuten=30` (maßgeblich: sie zählt genau, was die Folie zeigte). Nach 30 Minuten zeigt Folie 08 die Stimmen
  nicht mehr; die Stand-Adresse ohne `&minuten=30` zählt sie weiter, aber auch ältere Teststimmen derselben Runde.
  Dann Web-App archivieren, `liveQuelle: ''` (Anleitung, „Nach dem Vortrag“).

### Weg B – Werkzeug (Particify, Mentimeter) + Werte eintippen

Nur falls Weg A nicht eingerichtet werden kann (im Vortrag selbst ist der Wechsel zu spät – dann Plan C).
1. Im Werkzeug eine Einzelauswahl-Frage anlegen – Antworten **in derselben Reihenfolge** wie in
   `marke.js → umfragen.tier.optionen`.
2. In `marke.js → umfragen.tier`: `liveQuelle: ''`, `link` = Abstimm-Adresse des Werkzeugs (→ **QR-Code**),
   optional `kurzLink` (kurze Anzeige unter dem QR-Code, z. B. `particify.de/p/12345678`) und `ergebnisLink`
   (Ergebnisseite → Knopf „Ergebnisse öffnen“). Speichern, F5.
3. QR-Code mit mehreren Handys aus der **letzten Reihe** testen.
4. **Vor dem Vortrag:** auf Folie 08 die Maus über die Ergebnisse bewegen → **„Zurücksetzen“ zweimal**
   klicken – das löscht Beispielwerte **und** Probestimmen.
5. Im Vortrag: Knopf **„Werte“** → Zahl aus dem Werkzeug tippen → **Tab** → nächste Zahl … nach der letzten
   Zahl wird alles übernommen. Einzelwert: Doppelklick auf die Zahl.

### Plan C – Zählmodus (ohne Internet)

Tiere vorlesen, Hände zählen und eintragen, oder Klick auf ein Tier = +1 (Umschalt+Klick oder Rechtsklick
= −1), Ziffern 1–5 = +1. Solange die Umfrage zu sehen ist, gehören Ziffern der Umfrage – zum Springen erst
weiterklicken oder **O** nutzen. Mit Weg A pausiert das die Live-Abfrage (Pille „Live pausiert“) – gewollt.
Stehen vor dem Zählen andere Zahlen als 0 auf der Folie (und keine Pille „Beispieldaten“), zuerst
„Zurücksetzen“ zweimal klicken; Beispielwerte verschwinden mit der ersten Handstimme von selbst.

**Für alle Wege**
- Beispielwerte und echte Stimmen werden nie gemischt: Der erste Stand der Abstimmung bzw. die erste Stimme
  von Hand ersetzt die Beispielwerte (Pille „Beispieldaten“ verschwindet).
- Prozente rechnet die Präsentation selbst aus den Stimmen. Der nächste Klick (Schritt 1) zeigt
  „Unsere Analyse“ und die große Zahl („x % sehen HOLY wie wir: als Chamäleon“) – bei Weg A zählt sie mit,
  solange Stimmen kommen. Keine Stimmen? Dann steht dort „Noch keine Stimmen“ (keine „0 %“) – Analyse
  trotzdem erzählen oder Schritt 1 überspringen.
- Ergebnisse bleiben beim Neuladen erhalten (Browser-Speicher; mit eigener Live-Abstimmung nur in derselben
  Runde und nur 30 Minuten) und erscheinen auch im Referentenfenster.

## 7. Live-Wortwolke (Folie 01b, optional)

Folie 01b ist **ausgeblendet**. Einschalten: `marke.js → optionaleFolien.f01b: true` – nur, wenn dafür auf
Folie 08 die Live-Umfrage entfällt (Frage rhetorisch stellen, direkt zu den Analogie-Karten; siehe Notizen
der Folien 01b und 08), sonst reicht die Zeit nicht. Im Vortrag klickt ein Teammitglied ins Eingabefeld, tippt die Zurufe und drückt Enter;
Mehrfachnennungen werden größer, Alt+Klick entfernt ein Wort, „Wolke leeren“ (zweimal klicken) löscht alles.
Während das Feld aktiv ist, blättern nur Clicker (Bild↑/Bild↓); Esc verlässt das Feld. Folie 10 greift die
Zurufe im letzten Schritt wieder auf – mit eigenem Titel („Ihr Bild von HOLY trifft unseren Kern – teilweise“)
und „x von y Ihrer Zurufe stecken in unserem Steuerrad“. Vor dem Vortrag Probe-Zurufe löschen.

## 8. Marke und Bilder eintragen (`marke.js`)

Alles, was sich mit der Marke ändert, steht in **`marke.js`** (mit Editor öffnen, speichern, F5):

| Eintrag | Bedeutung |
|---|---|
| `name`, `kurz` | Markenname „HOLY“ – erscheint überall automatisch |
| `farben.primaer`, `farben.sekundaer` | HOLY-Gelb `#FFD007` und Schwarz `#1D1D1B` (Quelle: Recherche-Dossier Kap. 6.3 ✔ [1], Werte der Website, kein offizieller Styleguide). Alle anderen Farben werden daraus berechnet, Kontraste bleiben lesbar. Leer `''` = neutrale Farben. |
| `logo` | Logo auf Folie 09b (Zeile „Logo“): offizielle **HOLY-Wortmarke** `bilder/holy-logo-wortmarke.png` (von de.holy.com, Abruf 16.10.2026, unverändert); Quelle steht in der Fußzeile von 09b, in B7 und in `QUELLEN.md`. Im Dunkelmodus liegt die Wortmarke auf einer hellen Unterlage (sonst verschwände die schwarze Form), das Bild selbst bleibt unverändert. Steht hier wieder `bilder/platzhalter-logo.svg`, zeigt 09b nur die Beschreibung der Wortmarke. |
| `logoTitel` | Logo auf **Folie 01 und 12**: offizielles HOLY-Logo im gelben Oval `bilder/holy-logo-oval.png` (de.holy.com, Abruf 16.10.2026, unverändert, nur verkleinert). Auf Folie 01 erscheint es mit der Auflösung des Rätsels (seit 20.10.2026 Schritt 2; dieselbe Datei steht seit 20.10. auch auf der Dose im Rätselbild, siehe `raetselBild`) und bleibt auf der Titelfolie – anstelle des Namens in Schrift (Screenreader lesen den Namen). Auf Folie 12 steht es oben rechts neben dem Fazit über HOLY (Klammer Anfang–Ende, seit 17.10.2026; bis 18.10. neben den Gruppennamen – das wirkte wie Co-Branding). Quelle in den Fußzeilen von Folie 01 und 12 und in B7. Leer `''` = auf 01 der Name in Schrift wie früher, auf 12 nur die Gruppe. **Achtung:** Leer allein entfernt das Logo auf der Dose im Rätselbild nicht – die Zeile „Logo © …“ auf Folie 01 bleibt deshalb stehen, solange `raetselBild` ein Bild mit „logo“ im Dateinamen ist. Müssen die Logos ganz weg (Betreuer), `logoTitel` leeren **und** `raetselBild` auf `bilder/raetsel-holy.svg` umstellen (dann verschwindet die Zeile). |
| `raetselBild` | Bild für das Einstiegsrätsel (Folie 01). Seit Di, 20.10.2026 `bilder/raetsel-holy-logo.svg`: **eigene Illustration**, KI-gestützt (Claude Code), mit dem **Original-Logo** groß auf der Dose (`holy-logo-oval.png` unverändert als data-URI eingebettet; Entscheidung Yannick, `QUELLEN.md` §3/§4), darunter eine kleine Drachenfrucht (ohne Comic-Tier), Shaker, Drachenfrucht vor Gelb. Die Dose ist erfunden („· Dose fiktiv“ in der Einordnungszeile der Titelfolie). Dazu in `index.html` bei Folie 01 `data-stufen="440/11,220/10,100/0"` (Logo groß und unscharf → Hinweis → Auflösung, drei Klicks, ohne Pille „Hinweis x von n“) und `data-fokus="63.5% 59.8%"` (Fixpunkt des Zooms). **Rückfall ohne Logo:** `bilder/raetsel-holy.svg` (19.10.2026) mit `data-fokus="60.1% 60.7%"` und z. B. `data-stufen="300/40,170/14,100/0"`, Fußzeile auf 19.10.2026. Ein **eigenes Foto** bleibt möglich: Datei in `bilder/` legen, Pfad eintragen, in `index.html` bei Folie 01 `data-fokus` und `data-stufen` neu setzen und die Zeile „Illustration: …“ in der Fußzeile durch die Fotoquelle ersetzen, „· Dose fiktiv“ streichen. Enthält der Dateiname „platzhalter“, zeigt die Folie die Pille „Platzhalterbild“. |
| `titel`, `gruppe`, `datum`, `dozent` … | Angaben für Titelfolie, Kopfzeilen und Schlussfolie |
| `unternehmen` | Firma hinter der Marke („HOLY Softdrinks GmbH“, Dossier Kap. 1 ✔ [2, 3]) – für die Zeile „Studentische Fallstudie · keine Verbindung zur …“ auf Folie 01 und 12 |
| `anrede` | „Sie“ (einheitlich) |
| `umfragen.tier` | Live-Umfrage: Frage, Tiere, `liveQuelle` (Web-App der eigenen Abstimmung), `runde` (`'probe'` → `'vortrag-2026-10-26'`), `link` (siehe Abschnitt 6) |
| `wortwolken.assoziationen` | Texte der Wortwolke |
| `optionaleFolien` | `f01b: true/false` |
| `beispieldatenHinweis` | `true` = Pillen „Beispieldaten“ zeigen – erst auf `false`, wenn **keine** erfundenen Werte mehr auf den Folien stehen |
| `standardThema`, `standardModus` | `'editorial'`/`'bento'`/`'keynote'` und `'hell'`/`'dunkel'` |

Regeln: Texte in einfachen Anführungszeichen, nach jedem Eintrag ein Komma. Nach dem Ändern F5 – die
Konsole (F12) muss leer bleiben. Fakten über HOLY nur aus dem Recherche-Dossier (mit Quelle).

**Anderer Markenname?** Ein längerer Name als „HOLY“ macht einige Titel länger: Getestet mit „TESTMARKE“
bricht der Titel auf Folie 10 zweizeilig um, und die Beschriftung „Markenkompetenz“ im Rad wird kleiner
(25 px). Nach einem Markenwechsel `werkzeuge/pruefen.mjs` laufen lassen (Abschnitt 9) und Titel ggf. kürzen.
Der Textmarker hinter dem Markennamen im Titel wird aus der Primärfarbe immer hell berechnet.

## 9. Texte ändern (`index.html`)

Alle Folien stehen in **`index.html`** (mit einem Texteditor öffnen, z. B. VS Code oder Notepad++ –
nicht mit Word). Vor jeder Folie steht ein Kasten:

```
<!-- ══════════════════════════════════════════
     ║ FOLIE 06 · Repertory Grid
     ║ Bündel B – Lukas Welker · Sollzeit 80 s · Feld: Markenattribute
     ║ VOR DEM 26.10. ÄNDERN / PRÜFEN: …
```

- Mit **Strg+F** „FOLIE 06“ suchen. Darunter: ausführliche Anleitung der Folie, dann die Folie.
- **Titel** (Kernaussage): `<h2 class="titel">…</h2>` · **Kicker** (kleine Zeile darüber): `<p class="kicker">`
- **Sprechtext** für die Referentenansicht: `<aside class="notizen">` (Absätze mit `data-schritt="2"`
  werden beim Schritt 2 hervorgehoben).
- **Zahlen und Diagramme**: im Block `<script type="application/json" class="daten">` am Ende der Folie
  (JSON: Texte in doppelten Anführungszeichen, Kommas zwischen Einträgen, kein Komma nach dem letzten).
- **Quelle**: `<p class="quelle">Quelle: …</p>` in der Fußzeile.
- Markenname nie eintippen: `<span data-marke></span>` (bzw. „[Marke]“ in den Daten) verwenden.
- Höchstens ca. **40 Wörter** sichtbarer Text pro Folie; Schrift nicht kleiner machen (Beamer!).
- Nach dem Speichern **F5** und alle Schritte der Folie durchklicken. Bei weißer Folie oder fehlenden
  Elementen: Konsole (F12) lesen – meist ein fehlendes Komma oder Anführungszeichen im JSON.
- Gestaltung einer Folie: `css/folien/<name>.css`, Verhalten/Diagramm: `js/folien/<name>.js` (im Kasten
  genannt). Ausführlich für Fortgeschrittene: `AUTOREN.md`.
- Automatische Prüfung (optional, braucht Node.js): `node werkzeuge/pruefen.mjs index.html --ausgabe
  _test/pruefung --schritte` – Anleitung in `AUTOREN.md`, Abschnitt 9.

## 10. Thema wählen

- **T** wechselt das Thema (Editorial → Bento → Keynote), **D** hell/dunkel – gilt, bis der Tab
  geschlossen wird. Dauerhaft: `marke.js → standardThema`, `standardModus`.
- Empfehlung: **Editorial hell** (Jury-Entscheidung; am besten lesbar im hellen Hörsaal). Ist der Raum
  abgedunkelt, wirkt **Editorial dunkel** mit den HOLY-Farben sehr markennah – vorher im Raum testen.
- Zum Ausprobieren per Adresse: `index.html?thema=bento&modus=dunkel`, Farben testen:
  `index.html?primaer=FFD007&sekundaer=1D1D1B` oder Farbwähler in der Bedienleiste (nur in diesem Tab).

## 11. Plan B

1. **PDF:** `export/praesentation.pdf` (22 Seiten: alle Hauptfolien im Endzustand + Backup B1–B8, ohne die
   ausgeblendete Folie 01b) auf einen **USB-Stick** und zusätzlich per Mail/Cloud bereithalten. Öffnet in
   jedem PDF-Programm; keine Animationen, keine Live-Funktionen.
2. **Ganzer Ordner** `praesentation/` ebenfalls auf den USB-Stick – läuft auf jedem Rechner mit Chrome/Edge
   ohne Installation und ohne Internet.
3. **Umfrage ohne Internet:** Handzeichen und Zählmodus (Abschnitt 6, Plan C). Präsentationsrechner offline, Handys
   online: Stand-Adresse auf dem Handy öffnen und die Zahlen über „Werte“ eintragen (Abschnitt 6, Weg A, „Rückfall“).
   **Im PDF** gibt es keine Abstimmung: Folie 08 zeigt dort den Endzustand ohne QR-Code, und der Titel nennt schon
   die Auflösung („… Chamäleon, kein Adler“; Export vom 20.10.2026). Die Frage deshalb noch auf Folie 07 stellen, Hände zählen (Plan C, Ergebnis mündlich nennen),
   dann weiterblättern. Eine zusätzliche PDF-Seite mit Frage und QR-Code ist nicht
   nötig (Entscheidung Yannick, 20.10.2026).
4. **Kein zweiter Bildschirm:** ohne Referentenansicht präsentieren; Sprechtext als Handout drucken:
   `index.html?druck&notizen` öffnen → Strg+P (Ränder „Keine“, „Hintergrundgrafiken“ an). Oben die Folie,
   darunter der vollständige Sprechtext; lange Sprechtexte laufen auf eine Folgeseite weiter (ca. 43 Seiten).
   Wer nur den gesprochenen Text braucht: die Absätze mit Zeitangabe „(ca. … s)“ lesen.
5. **PDF neu erzeugen** (nach Änderungen): `index.html?druck` in Chrome öffnen → Strg+P → „Als PDF
   speichern“, Ränder „Keine“, „Hintergrundgrafiken“ an. Jede Folie wird eine Seite, alle Schritte sichtbar.
   Mit Node.js geht alles auf einmal (PDF, Folienbilder, Übersicht): Befehle in `AUTOREN.md`, Abschnitt 15.

## 12. Technik-Checkliste für den Präsentationstag

**Bis Fr, 23.10.** (zuständig nach Bündel: A = Yannick Heisler, B = Lukas Welker, C = Elias Knauber –
Vorschlag nach dem Arbeitsplan, die Gruppe bestätigt; Kasten „FOLIE xx“ in `index.html` nennt Details)
- [x] **Folie 01 – Rätselbild eingebaut** (19.10.2026): eigene Illustration `bilder/raetsel-holy.svg`
      (KI-gestützt, Claude Code; ohne Logo und Schrift) statt des Platzhalters, Zoompunkt `data-fokus="60.1% 60.7%"`,
      Fußzeile „Illustration: eigene Gestaltung, KI-gestützt (Claude Code), 19.10.2026“, Pille
      „Platzhalterbild“ weg. Nach der Prüfung (19.10.) Etikett **ohne Tier**: Drachenfrucht mit Heiligenschein
      statt Tukan – HOLY führt selbst eine Sorte mit Tukan („Thai Lime Toucan“, Websuche 19.10.2026; `QUELLEN.md` §3)
- [x] **Folie 01 – Rätsel mit Logo** (Di, 20.10.2026; Entscheidung Yannick: „Groß das Logo und daneben bei
      der Auflösung dann die illustration mit logo“): Rätselbild `bilder/raetsel-holy-logo.svg` – die Illustration
      mit dem Original-Logo groß auf der Dose (Datei `holy-logo-oval.png` unverändert eingebettet), kleine
      Drachenfrucht darunter. `data-stufen="440/11,220/10,100/0"`, `data-fokus="63.5% 59.8%"`: **drei Klicks** –
      Schritt 0 Logo groß und unscharf (gelbes Oval, heller Schriftzug), Klick 1 Hinweis (Schrift fast lesbar),
      Klick 2 Auflösung (Logo groß links, daneben die Illustration mit Logo), Klick 3 Titelfolie. Fußzeile
      „Illustration: …, 20.10.2026“; Kasten, Notizen (Moderation je Stufe) und `QUELLEN.md` §3/§4 nachgezogen.
      Nach zwei Prüfungen (20.10.): Hinweis unschärfer (220/10 statt 220/8 – von hinten war „HOLY“ schon
      lesbar), keine Pille „Hinweis x von n“ mehr, „· Dose fiktiv“ auf der Titelfolie, Logo-Zeile bleibt auch
      ohne `logoTitel`. Die Fassung ohne Logo (`raetsel-holy.svg`) bleibt als Rückfall liegen
- [ ] **Folie 01 – Rätsel mit zwei Personen testen** (A · Yannick): zwei Personen, die das Bild nicht kennen,
      am Beamer raten lassen, **eine davon aus der letzten Reihe** (verkleinert wirkt Unschärfe schwächer).
      Erraten sie die Marke schon in Schritt 0: erste Stufe unschärfer (`data-stufen="440/13,220/10,100/0"`);
      lesen sie beim Hinweis „HOLY“ sofort ab: zweite Stufe unschärfer (`220/12`); erraten sie sie auch beim
      Hinweis nicht: zweite Stufe schärfer (`220/8`). Dabei den Zoom-Übergang 0 → 1 → 2 auf dem Vortragsrechner
      ansehen (Chrome: F12 → ⋮ → Weitere Tools → Rendering → „Frame Rendering Stats“ zeigt die Bildrate; ruckelt er sichtbar, Startstufe auf etwa
      `380/12` senken und `data-fokus` neu rechnen, `AUTOREN.md` 6e). Motiv freigeben (Logo auf der Dose, kleine
      Drachenfrucht, bewusst kein Tier) und den Zusatz „· Dose fiktiv“ auf der Titelfolie
      **Eigenes Foto statt Illustration (optional):** Datei nach `bilder/`, `marke.js → raetselBild`,
      `data-fokus` und `data-stufen` neu setzen (die Werte gelten nur für die Illustration), Fußzeile z. B. „Foto: eigene
      Aufnahme · Verpackung © HOLY Softdrinks GmbH“ (nicht länger als die jetzige Zeile – sie bricht nicht
      um), `QUELLEN.md` §4. Keine Fotos von HOLY aus dem Netz (Rechte, öffentliches Repository)
- [x] **Folie 04 – Persona-Bild eingebaut** (19.10.2026): eigene Illustration `bilder/persona-marco.svg`
      (KI-gestützt, Claude Code; fiktive Person, kein Foto, ohne Logo und Verpackung) unter `"bild"`,
      `"bildHinweis"` seit der Nacharbeit vollständig „Illustration: eigene Gestaltung, KI‑gestützt (Claude
      Code), 19.10.2026“ (zweizeilig, geschützter Bindestrich), Fußzeile „Person, Bild, Zitat fiktiv
      (Illustration, KI-gestützt)“, B1/B2/B7 und `QUELLEN.md` §3/§4 nachgezogen
- [ ] **Folie 04 – Darstellung freigeben** (A · Yannick): respektvoll, passend zur Persona; Warnweste, Bart,
      Haare und Hautfarbe sind Gestaltung, nicht aus dem Steckbrief.
      **Eigenes Foto oder KI-Bild nach P6 (optional):** Datei nach `bilder/`, `"bild"` darauf setzen,
      `"bildHinweis"` z. B. „Bild KI-generiert (Werkzeug, TT.MM.2026; P6)“ (eine Zeile, kurz halten), Fußzeile
      von 04 kurz halten (sonst dritte Zeile und Überlauf), in B2 eine Zeile P6, B7 „Technik“, `QUELLEN.md` §3/§4
      (Werkzeug, Datum, Prompt P6, keine reale oder erkennbare Person) und KI-Nachweis; `persona-marco.svg` kann
      als Rückfall liegen bleiben. Vorlage P6 (`../prompts.md`), ausgefüllt nach Steckbrief A2 §2:
      „Fotorealistisches Porträt, natürliches Tageslicht, 28-jährige Person, männliche Fachkraft für
      Lagerlogistik im Drei-Schicht-Betrieb, in einem Logistikzentrum in einer deutschen Großstadt kurz vor
      Beginn der Spätschicht, steht im Gang zwischen Hochregalen mit Kartons und hält einen durchsichtigen
      Shaker mit einem pinkfarbenen, zuckerfreien Getränk ohne Logo und ohne Aufschrift in der Hand,
      Kleidungsstil dunkle Arbeitsjacke mit gelber Warnweste und Reflexstreifen, authentischer
      Gesichtsausdruck, freundlich und wach, keine Stockfoto-Ästhetik, Querformat.“ Optionaler Zusatz (nicht
      Teil der Vorlage): „Keine Logos, keine Markennamen, keine Schrift im Bild; keine reale oder erkennbare
      Person; Person mittig, Gesicht im oberen Drittel (die Folie schneidet quadratisch zu).“ Nacht-Variante
      (weicht von „Tageslicht“ ab): „natürliches Tageslicht“ → „Hallenbeleuchtung, durch ein Hallenfenster
      Nachthimmel mit Mond“, „Spätschicht“ → „Nachtschicht“ (Steckbrief §2: vor Spät- und Nachtschichten)
- [ ] **Folie 03 – Markenkompetenz freigeben** (A · Yannick): Folie 03 zeigt seit 17.10. den Entwurf aus
      `../markenkompetenz.md` (A1) und Folienentwurf 3 (Titel, Rolle „Herausforderer“, Kernkompetenz
      „Softdrinks zum Selbermixen“, Zeitleiste 2020–2026, Kennzahlen „über …“). Offen: Rollenbegriffe mit der
      Vorlesung abgleichen (sonst Variante B „Spezialist“, dann Folie 10 mitändern); Kund:innen- und
      Mitarbeiterzahl kurz vor dem 26.10. auf Website und Karriereseite neu ablesen; Jahresabschluss 2024
      (Unternehmensregister) nur in die Rückfrage-Notiz; Überschrift „Laut Unternehmen“ über den Kennzahlen
      ja/nein (Kasten „FOLIE 03“). Fußzeile und B7 sagen seit 18.10. „KI-Nachprüfung 17.10.2026“: Die Belege
      hat der bearbeitende KI-Agent nachgelesen. Liest Yannick die tragenden Belege selbst nach ([13] Claim
      und Selbstbeschreibung, [16], [159], Jost-Wortlaut [24]), darf es wieder „eigene Prüfung“ heißen
- [ ] **Folie 04 + B3 – Persona-Steckbrief freigeben** (A · Yannick): Folie 04 zeigt seit 17.10. den Entwurf
      aus `../persona-steckbrief.md` (A2) und Folienentwurf 4 (Titel, Großstadt als Annahme, Kaufverhalten
      „mehrmals pro Woche, vor der Schicht“ nach Kantar TGI 2023 und Gründer [24], Psychografie ohne „Spaß“,
      Mediennutzung Statista Consumer Insights 2025 – Kategoriedaten, nicht im Recherche-Dossier). Nach der
      Freigabe Werte, Titel und Beruf bestätigen oder in den Daten von Folie 04 und B3 anpassen; die
      Soziodemografie ist kürzer als im Folienentwurf (ohne Beruf/Abschluss) – entscheiden. Statista-Werte
      laut Steckbrief noch stichprobenartig im Report gegenlesen. **Seit 18.10. abweichend von A2 §2 und
      Folienentwurf 4 (entscheiden):** Psychografie „bequem und schnell“ (30 % zu Ø 25 %) statt „gesünder,
      aber schnell“ – „gesund ernähren“ liegt mit 50 % unter dem Ø (53 %), die Daten tragen „gesünder“
      nicht; Block als Daten markiert (Pain/Gain als Annahme in der Quellenzeile), Fußzeile „Person und Zitat
      fiktiv“, Beruf im Sprechtext als Annahme. Entweder Steckbrief und Folienentwurf angleichen oder hier
      zurückändern (Kasten „FOLIE 04“)
- [ ] **Folie 05 und 10 – Limbic Map freigeben** (A · Yannick): seit 17.10. nach `../limbic-map.md` (A3)
      und Folienentwurf 5 eingebaut – Marco als **Hedonisten** (Gewichte B 30 / D 30 / S 40, HOLY
      B 30 / D 20 / S 50, Lücke Dominanz −10, neue „Folgen“ und neuer Titel), ebenso die Persona-Pille auf
      Folie 10 und die Verweise in den Sprechtexten 10/11. Seit 18.10.: Etikett „HOLY (Mittelwert)“ steht
      zweizeilig an der Raute; Fußzeile mit gekürztem Rechtevermerk („urheber- und patentrechtlich
      geschützt“, wörtlich in B7 und den Notizen) – Abweichung vom Folienentwurf 5 („derselbe Wortlaut“),
      mit freigeben. Nach der Freigabe die Kennzeichnung „Entwurf“ in den Kästen „FOLIE 04/05“ streichen;
      kippt der Typ nach der Auswertung (limbic-map.md 3.2), Folie 05, 10 und die Sprechtexte mitändern
- [ ] **Gründerbefragung freigeben** (A · Yannick; `../gruenderbefragung.md`, eingebaut am 19.10.): Horsch 2026
      (GB) steht sichtbar nur in B1, B3 und B7, sonst in Notizen und Kästen 02–05, 10, 11. Bestätigen: kein
      GB-Zusatz unter dem Claim auf 03 (nach der Prüfung entfernt); Blockquellen auf 04 „Jost …“ statt
      „Gründer …“; Titel „Kern-Persona“ nur im Folienentwurf 4 (f04 ohne Präfix). Offen für **Lukas** (B):
      Versanddatum, Zuordnung der Fragen und unklare Stellen bestätigen, ggf. nach der Grundlage der „95 %“
      fragen; erst nach seiner datierten Codeliste „Individualität“ (K7), Rangfolge der Kaufgründe (P5) und
      Trennung von Code K3. Offen für die **Gruppe**: Kürzel GB für Folie 10, Rahmen „Softdrink-Marke“ (K4).
      Yannick: Transkript in den Gruppenordner legen, Karriereseite [17] neu abrufen
- [ ] **Sprechtexte 03–05 stoppen** (A · Yannick): 03 ca. 82 Wörter (Ziel ≤ 45 s), 04 seit 18.10. ca. 147
      Wörter (≈ 77 s bei 1,9 Wörtern/s, Sollzeit 80 s; vorher 172), 05 seit 18.10. ca. 106 Wörter (≈ 56 s,
      Sollzeit 55 s; Folienentwurf plant 1:00) – gekürzt wurden nur Doppelungen; laut lesen und stoppen
- [ ] **Sprechtexte 10 und 11 stoppen** (Inhalt 10: Yannick, spricht Elias; 11: C · Elias): 10 ca. 186 Wörter
      ≈ 98 s (Sollzeit 75 s, Schritt 8 allein ca. 71 Wörter; seit 20.10. +4 Wörter in Schritt 5: „wandelbar wie ein
      Chamäleon“), 11 ca. 164 Wörter ≈ 86 s (Sollzeit 75 s) – Kürzungsvorschläge in den Kästen „FOLIE 10/11“, dann
      die Zeitangaben „(ca. … s)“ angleichen
- [ ] **B2 – Prüfung durch die Gruppe** (A · Yannick): Die Einträge KI 13, 47, 52, 55/56 und 07 stehen im
      KI-Nachweis noch auf „☐ offen“; deshalb heißt der Titel von B2 „dokumentiert – und wird geprüft“ und die
      Spalte „Prüfung“ nennt nur die KI-Gegenprüfung. Nach dem Abhaken Titel und Spalte anpassen (Kasten „B2“)
- [ ] **Zeitplan** (alle): 14:00-Plan der Präsentation (Abschnitt 3) bestätigen und `../arbeitsplan.md`
      angleichen (ursprünglich 14:45)
- [ ] **Beispieldaten** durch echte Ergebnisse ersetzen (dann Pillen „Beispieldaten“ entfernen):
      06, 07, 08, 08b (inkl. Wettbewerberwerte), B4, B5 (B · Lukas) · 09, 11, B6 (C · Elias) ·
      10 (Synthese), 12 (Pille am Fazit, erst löschen, wenn 10 und 11 keine Beispieldaten mehr tragen) und
      B2 (Prompt-Log: Bündel A seit 17.10. belegt – KI 47, 52, 55/56; offen sind P7–P14; P6 ist seit 19.10.
      optional, das Persona-Bild ist eine eigene Illustration statt Bildgenerator) (A · Yannick). Folie 09b hat keine Beispielwerte, nur die Fit-Bewertung als
      Hypothese. Für Elias (Folie 11): Empfehlung 3 „frecher inszenieren“ mit A3 abgleichen („Humor aus der
      Schicht statt Doppeldeutigkeit“, Hinweis in den Notizen von Folie 11)
- [ ] **Folie 08b – Fußzeile „n = 8“** (B · Lukas): an die tatsächlich Bewertenden anpassen (Dossier
      Bündel B: Aaker-Bogen nur von Menschen ausfüllen lassen, z. B. „Gruppe + 3 Befragte, n = 6“)
- [ ] **Folie 09 – Schlüsselbild** (C · Elias): Screenshot des Raptor-Beitrags mit Datum – laut Regel in
      `QUELLEN.md` §4 (seit 18.10.) die einzige Ausnahme von „keine Social-Media-Bilder von HOLY“ und **nur nach
      Zustimmung des Betreuers**; dann Quelle nach dem Muster „Screenshot © HOLY Softdrinks GmbH, Plattform
      Konto, Beitrag vom TT.MM.JJJJ, Abruf TT.MM.2026“ in die Fußzeile, B7 „Logos und Screenshot (Folie 09)“,
      `QUELLEN.md` §3/§4 ergänzen; ohne Zustimmung bleibt das Piktogramm (Kasten „FOLIE 09“). **Titel** endet
      mit „?“, bis die Codierung den Raptor kanalübergreifend zeigt – dann „?“ streichen
- [ ] **HOLY-Logos auf Folie 01, 09b und 12** (offizielle Dateien von de.holy.com, unverändert, Quelle in
      den Fußzeilen und in B7): kurz mit dem Betreuer abstimmen, dass die Logos zur Kennzeichnung der
      analysierten Marke genutzt werden dürfen (A · Yannick) – **seit 20.10. auch das Logo auf der Dose im
      Rätselbild von Folie 01.** Dafür konkret fragen: Dürfen wir das Original-Logo auf einer **erfundenen,
      nachempfundenen Verpackung** zeigen, im Rätsel **vergrößert und unscharf** (Quelle erst ab der Auflösung),
      und so auch **öffentlich** im Repository und in den Exporten (PDF und Übersicht sind auf der Startseite
      verlinkt)? Lehnt der Betreuer das ab: `marke.js → raetselBild` auf `bilder/raetsel-holy.svg` und bei
      Folie 01 die Rückfallwerte (Kasten „FOLIE 01“); lehnt er Logos ganz ab, zusätzlich `logoTitel` leeren –
      **beides zusammen**, `logoTitel` allein entfernt das Logo auf der Dose nicht. Danach die Exporte neu
      erzeugen. Auf Folie 12 steht das Oval seit 18.10. oben
      rechts beim Fazit über die Marke, nicht neben den Gruppennamen (wirkte dort wie Co-Branding). Bewusst
      ohne Logo: Kopfzeilen, Folie 03, das Zentrum des Steuerrads, die öffentliche Startseite und die
      Abstimmseite `abstimmen.html` (seit 19.10.; Begründung in `QUELLEN.md`, Abschnitt 4). Nur falls auf einem Bildschirm mit doppelter Pixeldichte (Retina-Laptop,
      4K-Beamer) präsentiert wird: Die Wortmarke auf 09b (389 px breit) wirkt dort leicht weich – dann eine
      Datei mit mindestens ca. 780 px Breite aus einer Firmenquelle einsetzen (Quelle wie bisher); für einen
      1080p-Beamer ist nichts zu tun
- [ ] **Grafiken in `../grafiken/`** (folie-02, -03, -05 als SVG/PNG; Bündel C entscheidet): Das ist die
      Ausarbeitungs- bzw. PowerPoint-Variante (Segoe UI, Rot/Blaugrau, Text 12–17 px bei 1400 px Breite, auf
      einer 1920er Folie ca. 16–23 px) – **nicht für die Projektion** und nicht in die Web-Präsentation
      (auch nicht in B1). Sie sieht anders aus als „Editorial“, und in folie-05 ist die Kodierung umgekehrt
      (Persona schwarzer Punkt, HOLY gelb; auf Folie 05: Marco brauner Kreis, HOLY schwarze Raute) – nicht
      neben den Folien zeigen. Sollen sie doch projiziert werden: in den `.py`-Skripten Schrift auf mindestens
      ca. 21 px (Inhalt) bzw. 16 px (Quellen) bei 1400 px Breite, Farben aus `css/tokens.css`, Persona = Kreis,
      Marke = Raute
- [ ] **Live-Abstimmung einrichten** (Weg A, Abschnitt 6; A · Yannick: Google-Konto und Web-App nach
      `live-abstimmung/ANLEITUNG.md`, Test mit Lukas): Web-App „Jeder“ bereitgestellt, Test-Adressen der Anleitung
      **im privaten Fenster** geprüft, `liveQuelle` in `marke.js` **auf GitHub und auf dem Präsentationsrechner**
      eingetragen (Handy: `abstimmen.html?u=tier` zeigt die Tiere), Folie 08 zeigt „Live“, QR-Code mit iPhone und
      Android über mobile Daten aus der letzten Reihe getestet (abstimmen, umentscheiden; mindestens ein Handy
      ohne Google-Anmeldung), **Lasttest** „BESTANDEN“ (Anleitung, Schritt 7). Klappt Weg A nicht: Weg B
      (Werkzeug, `link`) oder nur Plan C
- [ ] **Live-Abstimmung: Skript aktualisieren – jetzt nötig** (A · Yannick; die Zurückstellung vom 20.10.2026 ist
      mit dem Zeitfenster aufgehoben). Zwei Gründe: (1) **Zeitfenster** – erst die Fassung vom **20.10.2026** zählt
      auf Folie 08 nur Stimmen der letzten 30 Minuten (Auftrag Yannick, 20.10.: keine alten Stimmen im Vortrag);
      die alte Fassung bei Google ignoriert das, dann gibt es keine Zeitgrenze. (2) **Lastfestigkeit** – die Web-App
      läuft noch mit der Fassung von vor dem 19.10. (Lasttest 19.10.: nur 19 von 40; Messung 20.10. mit 20 Handys:
      alle gezählt, aber 6 über 15 s). Für das Chamäleon muss am Skript nichts geändert werden, es speichert nur
      Nummern. Vorher die Änderungen auf GitHub bringen (Commit und Push), dann nach `live-abstimmung/ANLEITUNG.md`,
      Abschnitt „Skript aktualisieren“: neue Fassung einfügen (Raw-Link, Strg+F `ZEITFENSTER (Fassung vom
      20.10.2026)`), **„einrichten“** ausführen (drei Zeilen im Protokoll), **Neue Version** bereitstellen (URL bleibt
      gleich), Kurzprüfung (Anleitung, Punkt 5, in der eigenen Runde `kurzpruefung-2010`): `<URL>?aktion=fassung`
      → „(Skript-Fassung 20.10.2026)“; Stand mit `&minuten=30` → `"minuten":30`; Teststimme → `"n":1`; nach
      **2 Minuten** mit `&minuten=1` → `"n":0` (prüft die Uhrzeit der Tabelle in beiden Richtungen; schlägt eine
      Probe fehl: `gueltigMinuten: 0` bis zur Klärung). Danach **Lasttest** (Claude oder selbst, Anleitung,
      Schritt 7, mit Gegenprobe ca. 90 s länger): Die Urteilszeile beginnt mit „BESTANDEN“ (nicht „NICHT BESTANDEN
      wegen …“), mindestens zweimal mit `--anzahl 20` (höchstens ca. 20 Personen im Raum, Yannick 20.10.2026).
      Nicht während einer Abstimmung
- [ ] **Folie 08 – Kasten und Notizen** (B · Lukas): beschreiben noch den alten Weg („Abstimm-Link eintragen,
      dann erscheint der QR-Code“, „Zurücksetzen zweimal“); an Weg A anpassen (QR-Code erscheint mit
      `liveQuelle`, Pille „Live“ beobachten, bei Weg A kein „Zurücksetzen“)
- [ ] **Folie 08 – Elias prüft die Begründung Chamäleon** (C · Elias): seit 20.10.2026 zeigt Folie 08
      „HOLY wäre ein Chamäleon, kein Adler“ mit den Gründen wandelbar („31 Energy-Sorten“), vielseitig
      („Wacken, CSD, Simpsons“) und frech („Gefährlich geil!“). Die Begründung ist ein
      Vorschlag, KI-gestützt aus dem Recherche-Dossier (Notizen Folie 08, Absatz „Chamäleon – Einordnung und
      Begründung“, mit Gegenargumenten). Prüfen: trifft das deine Einordnung? Gründe, Sprechtext „Warum
      Chamäleon?“ (seit der Nacharbeit 20.10.: „ständig neue Farben, Sorten, Szenen – im Ton immer frech“),
      Rückfragen (u. a. „ohne festen Kern?“, „Viele Sorten – schon Wandel?“, „trotzdem der Raptor?“, „aus eurer
      Befragung?“) und Satz auf Folie 10 (Schritt 5, „wandelbar wie ein Chamäleon“) bestätigen oder ändern.
      „wandelbar“ füllt die Stichwort-Spalte der Karte fast ganz – ein kürzeres Wort wäre ruhiger, ist aber
      deine Entscheidung. Danach „Vorschlag“ in Kasten und Notizen durch „Begründung: Elias Knauber“ ersetzen
- [ ] **Folie 10 – Chamäleon im Rad? Entscheidung** (A · Yannick, mit Elias und Lukas): Das Feld Tonalität
      ist unverändert („frecher Kumpel · Spaß · Zugehörigkeit“, wortgleich mit 8b), das Chamäleon steht nur im
      Sprechtext Schritt 5. A) so lassen (bei knapper Zeit die 4 Wörter in Schritt 5 streichen) oder B) ins Rad,
      z. B. „frecher Kumpel · wandelbar · Spaß“ – dann zuerst 8b „Ins Steuerrad“ wortgleich ändern (B · Lukas);
      Folie 10 liegt schon bei ca. 49 Wörtern (Kasten „FOLIE 10“, `AUTOREN.md` Abschnitt 18)
- [ ] **Lukas: Analogie-Befragung/Notizen Folie 08 abgleichen** (B · Lukas): Tier unserer Analyse ist jetzt das
      Chamäleon (vorher Waschbär nach Dossier 6.7). Mit den Antworten aus Prompt P11 und den Interviews
      abgleichen (offen gefragt, Tiere nicht vorgeben), Sprechtext „Auflösung“ und „Kontrast“ prüfen, Aaker-Profil
      auf 08b bleibt (Rückfrage in den Notizen von 08b); nennen die Befragten überwiegend ein anderes Tier, mit
      Elias und Yannick klären
- [ ] **Runde umstellen** (A · Yannick, **spätestens So, 25.10.**, nach der Generalprobe): `runde: 'vortrag-2026-10-26'`
      in `marke.js` auf GitHub **und** auf dem Präsentationsrechner; Kontrolle beider Stellen (Anleitung, „Vor dem
      Vortrag“): `marke.js?v=…` auf GitHub Pages nennt die neue Runde und `gueltigMinuten: 30` (wie auf dem
      Präsentationsrechner), Folie 08 zeigt `n = 0`; die Stand-Adresse für den Rückfall als Lesezeichen auf einem
      Handy anlegen (Abschnitt 6)
- [ ] **Zahl der echten Kurzinterviews** – zurzeit steht überall die geplante Zahl „3“ (Folie 06–08, B1, B2,
      B4, B5) und auf **Folie 02** in den Methodenkarten „KI + Kurzinterviews“; nach den Interviews überall
      dieselbe tatsächliche Zahl eintragen, auf B1 die Pille „teils geplant“ löschen; gibt es keine echten
      Interviews, auf Folie 02 „+ Kurzinterviews“ streichen (Kasten „FOLIE 02“) (A · Yannick, Zahl von Lukas)
- [x] **B7: Jahr und Auflage bei Esch und Häusel** ergänzt (17.10.: neueste Ausgaben laut Katalog der
      Deutschen Nationalbibliothek – Esch & Esch 2024, 10. Aufl.; Häusel 2019, *Think Limbic!*, 6. Aufl.;
      orange Markierung gelöscht, Fußzeile Folie 02 gleich; 18./19.10.: Häusel-Untertitel „Die Macht des
      Unbewussten …“ korrigiert, Auflage und ISBN mit hugendubel.de/ebook.de abgeglichen – KI-gestützt)
- [ ] **B7: genutzte Ausgabe bestätigen** (A · Yannick): Arbeitet die Gruppe mit einer anderen Ausgabe
      (z. B. Bibliothek: Esch 2018, 9. Aufl.), Jahr, Auflage und Autoren in B7 **und** in der Fußzeile von
      Folie 02 ändern; Kotler (Rollen auf Folie 03) mit geprüfter Auflage ergänzen
- [ ] Fachbegriffe und Modelle mit den Vorlesungsfolien abgeglichen (Steuerrad nach Esch, Limbic Map nach
      Häusel, Repertory Grid nach Kelly, Laddering nach Reynolds & Gutman, Brand Personality nach Aaker)
      (alle, je eigene Folien)
- [ ] Generalprobe mit Referentenuhr: Ziel ≤ 15:00 (Plan 14:00), jede Person kennt ihre Folien und
      Übergaben; die Live-Umfrage auf Folie 08 mit Stoppuhr testen (Sollzeit der Folie 1:10) – mit `runde: 'probe'`
      und echten Handys, einmal auch mit abgeschaltetem WLAN am Laptop (Pille „offline“, weiter mit Plan C; diese
      Probezahlen erscheinen nach dem Umstellen der Runde nicht mehr), dazu der Lasttest (Anleitung, Schritt 7). Gekürzt
      wurden die Folien 04, 05, 06, 09, 09b und 11 – Zeiten prüfen
- [x] **Exporte mit den Illustrationen neu erzeugt** (19.10.2026, Nacharbeit): PDF, Folienbilder und
      Übersicht zeigen auf 01 und 04 keine Platzhalter-Schilder mehr (bewusst bleibt nur „Platzhalter –
      Screenshot folgt“ auf Folie 09). Nach der Freigabe der Motive oder mit einem eigenen Foto erneut erzeugen
- [x] **Exporte mit dem Chamäleon neu erzeugt** (20.10.2026): PDF 22 Seiten, 23 Folienbilder (geändert nur
      f08), Übersicht mit Stand 20.10.2026
- [x] **Exporte mit dem Rätsel mit Logo neu erzeugt** (Di, 20.10.2026, nach der Nacharbeit): PDF 22 Seiten
      (Seite 1: Titelfolie mit Logo auf der Dose und „Dose fiktiv“), 23 Folienbilder, Übersicht mit Stand
      20.10.2026. Bewusst **vor** der Antwort des Betreuers erzeugt (Logo-Klärung offen, siehe oben) – lehnt er
      ab, nach dem Rückfall neu erzeugen (Befehle: `AUTOREN.md`, Abschnitt 15)
- [ ] `export/praesentation.pdf` neu erzeugt (Abschnitt 11) und auf USB-Stick (C · Elias) – die Dateien in
      `export/` sind am 20.10. neu erzeugt (Stand mit A1–A3 als Entwurf und Gründerbefragung, Logo auf
      Folie 12, Illustrationen auf 01 (mit Logo auf der Dose) und 04, Chamäleon auf 08, Beispieldaten gekennzeichnet); nach den Freigaben und dem Eintragen der echten Ergebnisse PDF, `uebersicht.png` und
      `export/folien/` noch einmal erzeugen (Befehle: `AUTOREN.md`, Abschnitt 15)

**Am Präsentationsrechner (vorher testen, möglichst im Hörsaal)**
- [ ] Ordner kopiert, `index.html` öffnet in Chrome/Edge, Übergänge laufen flüssig
- [ ] Bildschirm **erweitern**, Referentenansicht (P, Pop-ups erlaubt), Hauptfenster auf Beamer, Vollbild (F)
- [ ] Clicker: vor, zurück, Schwarzbild
- [ ] Mit Licht von der letzten Reihe: Lesbarkeit, Farben, QR-Code
- [ ] Internet am Präsentationsrechner (Hörsaal-WLAN oder Handy-Hotspot); Folie 08 zeigt **„Live“**; eine Teststimme
      aus der letzten Reihe über mobile Daten kommt auf der Folie an (danach Testzeile im Blatt „Stimmen“ löschen,
      falls die Runde schon `vortrag-2026-10-26` ist – das Zeitfenster allein reicht nicht, die Teststimme zählt noch
      30 Minuten)
- [ ] Ton aus, Benachrichtigungen aus (Fokus-/Nicht-stören-Modus), Netzteil angeschlossen, Bildschirmsperre aus

**30 Minuten vorher**
- [ ] **Weg A:** Folie 08 zeigt „Live“ und `n = 0` (Runde `vortrag-2026-10-26`, Maus auf der Pille) – **nicht**
      „Zurücksetzen“ klicken (pausiert die Abfrage; falls doch: Pille anklicken). Steht „Live pausiert“ oder
      „offline“: Pille anklicken. Ein Handy öffnet den QR-Code und sieht die Tiere. Bleibt die Pille „offline“:
      Internet prüfen, sonst Plan C – steht dann nicht `n = 0` (und keine Pille „Beispieldaten“), vor dem Zählen
      „Zurücksetzen“ zweimal. Maus auf der Pille: „zählt Stimmen der letzten 30 Min.“ (nicht „OHNE Zeitfenster“).
      Diese Kontrolle ist im Vortrag älter als 30 Minuten – Folie 08 zeigt dann bis zur ersten Antwort Nullen
- [ ] **Nur Weg B:** Umfrage im Werkzeug zurückgesetzt/geöffnet; **auf Folie 08 „Zurücksetzen“ (zweimal)** –
      sonst stehen Probestimmen da
- [ ] Falls Folie 01b genutzt wird: „Wolke leeren“ (zweimal)
- [ ] Präsentation auf Folie 01 (Pos1), Referentenuhr „Zeit zurücksetzen“
- [ ] Handy-Hotspot als Reserve für die Umfrage, USB-Stick mit PDF griffbereit

**Nach dem Vortrag** (A · Yannick, Anleitung „Nach dem Vortrag“)
- [ ] Ergebnis von Folie 08 **gleich** sichern (Foto oder Zahlen und die Stand-Adresse mit `&minuten=30`, Quelle
      „eigene Live-Umfrage im Hörsaal, 26.10.2026, n = …“) – nach 30 Minuten zeigt die Folie die Stimmen nicht mehr
      (Zeitfenster). Die Stand-Adresse ohne `&minuten=30` zählt sie weiter, aber auch ältere Teststimmen der Runde;
      maßgeblich ist der Stand gleich nach dem Vortrag (Anleitung, „Nach dem Vortrag“)
- [ ] Web-App archivieren, `liveQuelle: ''` in `marke.js`; Tabelle löschen oder Spalte „Geraet“ entfernen

## 13. Dateien

| Datei/Ordner | Inhalt |
|---|---|
| `index.html` | **die Präsentation** – alle Folien, Sprechtexte und Daten (hier Texte ändern) |
| `marke.js` | alles, was sich mit der Marke ändert (Name, Farben, Bilder, Umfrage, Wortwolke) |
| `css/` | `tokens.css` (Farben, Schriften, Größen), `deck.css` (Bühne, Bedienung), `komponenten.css` (Bausteine), `folien/` (je Folien-Gruppe) |
| `js/` | `deck.js` (Steuerung, Referentenansicht, Druck), `komponenten.js` (Steuerrad, Umfrage, Wortwolke, QR, Rätsel), `folien/` (je Folien-Gruppe), `vendor/` (QR-Code-Bibliothek) |
| `bilder/` | offizielle HOLY-Logos (Folie 01, 09b und 12, Quelle in `QUELLEN.md`), eigene Illustrationen (Rätselbild 01 `raetsel-holy-logo.svg` mit eingebettetem Original-Logo seit 20.10.2026, Rückfall ohne Logo `raetsel-holy.svg`; Persona-Bild 04 `persona-marco.svg`; KI-gestützt, seit 19.10.2026) und ältere Platzhalterbilder (eigene Gestaltung, zurzeit nicht eingetragen) – eigene Bilder hier ablegen |
| `schriften/` | Schriftdateien (woff2) mit Lizenzen |
| `werkzeuge/pruefen.mjs` | automatische Prüfung, Screenshots und PDF (optional, braucht Node.js); fragt die Web-App nie ab (eingebaute Attrappe, `--live-offline`, `--live-werte 3,1,7,0,2`, `--live-aus`; `AUTOREN.md` 9) |
| `werkzeuge/uebersicht.mjs` | erzeugt `export/uebersicht.png` aus den Folienbildern (Befehle: `AUTOREN.md`, Abschnitt 15) |
| `abstimmen.html` | Abstimmseite fürs Publikum (QR-Code auf Folie 08, läuft auf GitHub Pages); dazu `js/abstimmen.js`, `css/abstimmen.css` |
| `live-abstimmung/` | Web-App der Live-Abstimmung (`apps-script.gs`, Google Apps Script) und `ANLEITUNG.md` zum Einrichten |
| `werkzeuge/live-abstimmung-test.mjs` | prüft `apps-script.gs` ohne Google-Konto (53 Prüfungen, auch das Zeitfenster mit vorgestellter Uhr); `--mutationen` = absichtlich kaputte Kopien, jede muss auffallen; `--server 8787` = lokale Web-App zum Ausprobieren (Uhr vorstellen: `http://localhost:8787/uhr?vor=31`), mit Störungen `--stoerung`, `--abbruch`, `--gleichzeitig` und Belastung `--sperre`; `--lasttest <URL>` = 40 Handys gleichzeitig (`--anzahl 60`, `--verteilt 10`) mit Wiederholung wie auf dem Handy, mitlesender „Folie“ und Gegenprobe des Zeitfensters (Abschnitt 6, `AUTOREN.md` 6c) |
| `werkzeuge/zeitfenster-e2e.mjs` | prüft das Zeitfenster auf Handy und Folie 08 im Browser (Chromium über playwright-core), nur mit Attrappen auf localhost und vorgestellten Uhren: Ablauf auf dem Handy, Speicher und Pause der Folie, Referentenfenster, Tooltip, alte Skript-Fassung, Lasttest-Gegenprobe; `--mutationen` = kaputte Kopien von `js/komponenten.js` und `js/abstimmen.js`; Ausgabe nach `_test/` (`AUTOREN.md` §20) |
| `export/` | PDF (22 Seiten, ohne 01b), Übersicht, Einzelbilder der Folien im Endzustand (1920 × 1080, inkl. 01b) – Stand 20.10.2026 mit A1–A3 als Entwurf, den Illustrationen auf 01 (mit Logo auf der Dose) und 04 und dem Chamäleon auf 08; nach den Freigaben neu erzeugen (Abschnitt 11) |
| `../grafiken/` | (außerhalb dieses Ordners) Grafiken zu den Folienentwürfen 2, 3, 5 – Ausarbeitungs-/PowerPoint-Variante, nicht für die Projektion (Checkliste, Abschnitt 12) |
| `AUTOREN.md` | technische Schnittstelle für Änderungen an Folien und Bausteinen |
| `QUELLEN.md` | Schriften, Bibliotheken, Icons, Bilder mit Lizenz und Herkunft; Hinweis zur KI-Unterstützung |
| `_entwuerfe/` | die drei Gestaltungsrichtungen und die Jury-Entscheidung (Dokumentation; die Musterseiten zeigen die Ersatzschrift, weil doppelte Schriftdateien entfernt wurden) |

Die Präsentation wurde mit KI-Unterstützung (Claude Code) erstellt – Details in `QUELLEN.md` und im
KI-Nachweis der Gruppe (`../../ki-nachweis/`).
