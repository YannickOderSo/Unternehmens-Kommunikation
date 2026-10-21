# Fragerunde – Vorbereitung (Fallstudie 1, HOLY)

**Stand:** 19.10.2026 · Präsentation Mo 26.10.2026 · Generalprobe So 25.10.2026

**Erstellt von:** Account 2 (Claude Code), KI-gestützt. Workflow „account-2-vortragsreife-fragerunde“ (Skript
`ki-nachweis/workflows/account-2_2026-10-19_vortragsreife-fragerunde.js`, Delegation A2-D04, ausgelöst durch Prompt
A2-39 nach Übergabe Ü04 von Account 1). Nachweis: `ki-nachweis/ki-nachweis-account-2.md`.

**Geprüft:** Zwei Fragensammler (Blick von Prof. Stenger, Blick des Publikums) und eine Vollständigkeitsprüfung
haben 53 Fragen gesammelt. Jede Antwort hat ein eigener Prüf-Agent an der Quelle (Datei und Zeile) gegengeprüft und
wo nötig korrigiert; Fragen mit dem Urteil „streichen“ sind entfernt. Für diese Datei sind die 35 wahrscheinlichsten
ausgewählt, Dubletten zusammengeführt und die Texte nur gekürzt und geglättet – keine neuen Inhalte. Dazu kommen die
geprüften Befunde des Blickwinkels „Rückfragen“ der Prüfung auf Vortragsreife (Kennungen FRAGE-…, VOLL-…).
**Prüfung durch die Gruppe: ☐ offen.**

**Herkunft:** Alle Antworten, Belege und Fallstricke stammen aus Dateien im Repository (Belege je Frage). Keine
Websuche. Wo etwas Modellwissen ist, steht es dabei.

**Lesehilfe**

- Pfade ohne Ordner beziehen sich auf `fallstudie-1-brand-persona/`. „Folie 06“ bzw. „f06“ = Hauptfolie, B1–B8 =
  Backup-Folien, Dossier = `recherche/holy-recherche.md` (Faktenstatus: ✔ gesichert, ✎ korrigiert, ~ unsicher,
  H Hypothese), GB = Gründerbefragung (`gruenderbefragung.md`, „Horsch 2026 (GB)“).
- Zeilenangaben zu `praesentation/index.html` gelten für den Stand von Commit 82670cb (19.10.2026). Nach den
  laufenden Änderungen von Account 1 (D15, D16) verschieben sich Zeilen – dann über den zitierten Text suchen.
  Screenshots unter `praesentation/_test/…` sind lokale Prüfausgaben und nicht eingecheckt.
- **[ … ]** = Platzhalter oder Regiehinweis: vor dem Vortrag mit dem echten Stand füllen, nicht vorlesen.
- **Belastbar:** „ja“ = heute vertretbar; **TEILWEISE** / **NEIN** = vor dem Vortrag klären (Liste am Ende).
- Nicht enthalten sind Fragen zur Live-Abstimmung auf Folie 08 und zu den Bildern auf Folie 01 und 04 (daran arbeitet
  Account 1).
- **Hinweis für Lukas:** Gründeraussagen zum Selbermischen und Abschnitt 4.5 von `gruenderbefragung.md` erst lesen,
  wenn deine Konstrukte und Leitern codiert sind und die Codeliste mit Datum feststeht (`gruenderbefragung.md` Kopf
  und K7). Diese Datei nennt deren Inhalt deshalb nicht.

---

## Spielregeln für die Fragerunde

1. **Wer antwortet – nach Bündel.** Folien 01–05, B1–B3, B7, B8, Synthese und KI-Nachweis: **Yannick**. Folien
   06–08b, B4, B5 und der Gründerkontakt: **Lukas**. Folien 09–11, B6: **Elias**; Folie 10 trägt Elias vor, die
   Herleitung ergänzt Yannick. Erst beantwortet die zuständige Person den Kern in einem Satz, dann ergänzt höchstens
   eine weitere Person – nicht drei Antworten auf eine Frage (FRAGE-P-18). Richtwert: höchstens etwa 30 s je Antwort.
   Wer moderiert (Frage aufnehmen, weitergeben, Folie anspringen), ist noch nicht festgelegt – das entscheidet die
   Gruppe in der Generalprobe (VOLL-08; laut LIESMICH Folie 12: „alle“).
2. **Gründeraussagen immer als Selbstauskunft:** „laut Gründer Mathias Horsch (Befragung 10/2026)“ – Innensicht,
   n = 1, nie als Kundendaten oder Fremdbild. Nicht von „Interview“ oder „Gespräch“ sprechen: Es waren zwei
   Sprachnachrichten, Rückfragen waren nicht möglich.
3. **„95 %“** nie von sich aus nennen und nur mit dem Zusatz „laut Gründer, Datengrundlage nicht offengelegt“
   (nur als Antwort auf F23).
4. **Statista-Werte nur so, wie sie in `persona-daten.md` stehen** – sie beschreiben die Kategorie Energy Drinks,
   nicht HOLY-Kund:innen. „Technik 34 % / +7“ und „85 % keine frühen Übernehmer“ stehen dort nicht (auch wenn die
   Notizen von Folie 05 sie noch nennen) und werden nicht gesagt.
5. **Beispieldaten offen als solche benennen.** Was am 26.10. noch „Beispieldaten“ trägt, nie als Ergebnis vorlesen;
   besser vorher durch echte Werte ersetzen (Liste am Ende).
6. **Faktenstatus richtig erklären:** ✔ heißt „von den KI-Prüfungen des Dossiers bestätigt“, nicht „von uns
   geprüft“ – solange die Prüfung durch die Gruppe offen ist. H heißt „unsere Einordnung / Hypothese“.
   Unternehmenszahlen sind „laut Unternehmen“. Jost-Zitate stammen aus einem automatischen Transkript: sinngemäß
   wiedergeben, nicht als geprüftes Zitat.
7. **Wortwahl:** Marco ist die **Kern-Persona (heutige Kernkundschaft)**, nicht die „Kernzielgruppe“ (seit
   19.10.2026, `persona-steckbrief.md` Z. 46–48). Nie „repräsentativ“, „signifikant“, „gemessen“, „validiert“.
8. **Bei Unsicherheit ehrlich sagen:** „Das haben wir nicht erhoben“, „Das ist unsere Einschätzung“, „Das prüfen wir
   nach“. Keine Zahl, keine Seitenzahl, kein Zitat aus dem Gedächtnis – Esch und Häusel haben wir laut B7 nicht selbst
   eingesehen, Kotler fehlt in B7, Kroeber-Riel ist Modellwissen. Der Abgleich mit den Vorlesungsfolien ist offen.
9. **Backup-Folie zeigen** (LIESMICH.md §2 und Notiz zu Folie 12):
   - **Backup nur über die Übersicht:** Taste **O** → mit Pfeilen + **Enter** oder per Klick die Backup-Folie wählen.
     Nach der letzten Hauptfolie geht es nicht automatisch ins Backup.
   - **Auf Folie 12:** Feld im Steuerrad anklicken (Rahmen = Brand Persona); rechts „Methoden“ bzw. „Ergebnisse“;
     links unter „Backup“ Methodik, Prompt-Log, Rohdaten, Quellen. Geht auch mit Tab + Enter.
   - **Hauptfolien direkt:** Ziffern + **Enter** (`6` `Enter` = Folie 06; `8` `B` `Enter` = 08b; `9` `B` `Enter` =
     09b). Achtung: **B** allein (oder **.**) schaltet Schwarzbild – Backup-Folien nicht über „B1“ tippen.
   - **Zurück:** `1` `2` `Enter` (oder **Ende**) = Folie 12. Nach einem Sprung aus einer Backup-Folie („Zu Folie …“)
     führt **Z** zurück ins Backup.

---

## Übersicht

Reihenfolge: erst Wahrscheinlichkeit „hoch“ (F01–F22), dann „mittel“ (F23–F35), jeweils in der Reihenfolge der Folien.

| Nr. | Frage | Thema | wer antwortet | Backup/Folie |
|---|---|---|---|---|
| F01 | Was ist HOLY – nicht einfach Energy-Pulver? | Ergebnisse | Yannick | 03 |
| F02 | Warum gerade HOLY? | Marke & Gründer | Yannick | 01, 03 |
| F03 | Was hat der Gründer gesagt – und was ist das wert? | Marke & Gründer | Yannick, ergänzt Lukas | 03, B1, B3, B7 |
| F04 | Wie seid ihr an den Gründer gekommen – arbeitet ihr mit HOLY zusammen? | Marke & Gründer | Lukas | 01/12 (Fußzeile), B7 |
| F05 | Stimmen die 170 Mio. €, woher stammen die Zahlen, wer hat geprüft? | Daten | Yannick | 03, B8, B7 |
| F06 | Identität ist Selbstbild – warum Befragungen der Zielgruppe? | Modelle | Yannick | 02 |
| F07 | Wo steht das Markensteuerrad bei Esch, gehört die Brand Persona dazu? | Modelle | Yannick | 02, 10, B7 |
| F08 | Gibt es Marco wirklich, sind die Zahlen über HOLY, warum ein Mann? | Daten | Yannick | 04, B3 |
| F09 | Kaufen nicht vor allem Gamer und Jugendliche HOLY? | Ergebnisse | Yannick | 04, B3 |
| F10 | Was heißt „Hedonisten“ – und warum ist Marco einer? | Modelle | Yannick | 05 |
| F11 | Woher kommen 40/30/30 und 30/20/50 – Messung nach Häusel? | Modelle | Yannick | 05 |
| F12 | Habt ihr echte Leute befragt – n = 8, davon fünf KI-Personas? | Methode | Lukas | 06, B1, B4, B5 |
| F13 | Ist die KI-Befragung nicht ein Zirkelschluss? | KI-Nutzung | Lukas, ergänzt Yannick | B1 |
| F14 | Wie kommt ihr auf drei Attribute – und warum „zuckerfrei“? | Methode | Lukas | 06, B4 |
| F15 | Ist „Genuss mit gutem Gewissen“ nicht einfach HOLYs Werbung? | Ergebnisse | Lukas, ergänzt Elias | 07, 10, B5 |
| F16 | Wie habt ihr Beiträge ausgewählt und codiert, was sagt knapp 1 % Engagement? | Methode | Elias | 09, B6 |
| F17 | Antwort auf die Leitfrage in einem Satz – Kern oder Kompetenz im Zentrum? | Ergebnisse | Elias, ergänzt Yannick | 10, 11 (02) |
| F18 | Lücke 1: Ist Koffein gegen „gutes Gewissen“ überhaupt ein Widerspruch? | Ergebnisse | Elias, ergänzt Yannick | 10, 11, B8 |
| F19 | Sind 160 mg viel, ist HOLY gesund, steht das nicht auf der Packung? | Empfehlungen | Elias, ergänzt Lukas | 11, 10 (07) |
| F20 | Was würdet ihr zuerst raten – und was kostet das? | Empfehlungen | Elias | 11 |
| F21 | Woran merkt HOLY, dass eure Empfehlungen wirken? | Empfehlungen | Elias | 11, B6 |
| F22 | Alles mit KI gemacht – was ist eure Leistung, wie nachvollziehbar? | KI-Nutzung | Yannick | B1, B2, 02 |
| F23 | Energy Drink oder Softdrink – ersetzt HOLY wirklich Cola und Red Bull? | Marke & Gründer | Yannick, ergänzt Lukas | 03, 04, 06, B4 |
| F24 | Warum „Herausforderer“ – und aus welcher Quelle? | Marke & Gründer | Yannick | 03, B7 |
| F25 | Was unterscheidet HOLY von waterdrop oder Red Bull? | Marke & Gründer | Yannick, ergänzt Lukas | 03, 06, 08b |
| F26 | Schichtdienst – mehr als eine Podcast-Aussage? | Daten | Yannick | 04, 05, B3 |
| F27 | Kann eine KI-Persona Werte haben, wo starteten die echten Leitern? | Methode | Lukas | 07, B5 |
| F28 | Ist „passt zur Tonalität“ auf 9b nicht vorprogrammiert? | Methode | Lukas, ergänzt Elias | 08b, 09b |
| F29 | Ist das eine Messung nach Aaker – wer hat bewertet? | Modelle | Lukas | 08b, B7 |
| F30 | Ist der Raptor ein Schlüsselbild – trotz „Bildwelt zu jung“? | Modelle | Elias | 09, 11, B7 |
| F31 | Warum „Bildwelt zu jung“, wenn HOLY damit 170 Mio. € umsetzt? | Ergebnisse | Elias, ergänzt Yannick | 09b, 10, 11 |
| F32 | Mehrere Claims sind normal – warum ein „Bruch“? | Ergebnisse | Elias (Folie 03: Yannick) | 09b, 11 |
| F33 | Warum kommt TikTok nicht vor? | Empfehlungen | Elias, ergänzt Yannick | 11, 04 |
| F34 | War die KI-Verarbeitung von Sprachnachrichten und Interviews datenschutzrechtlich in Ordnung? | KI-Nutzung | Lukas, ergänzt Yannick | B1, B7 |
| F35 | Wo seht ihr selbst die größten Schwächen, was würdet ihr anders machen? | Methode | Lukas, ergänzt Yannick und Elias | B1, 04 |

Verteilung: Yannick führt 15, Lukas 10, Elias 10 Fragen. Themen: Methode 6, Daten 3, Ergebnisse 7, Empfehlungen 4,
KI-Nutzung 3, Modelle 6, Marke & Gründer 6.

---

## Fragen und Antworten

### Wahrscheinlichkeit hoch

#### F01 – Was ist HOLY?

**„Was ist HOLY eigentlich – ist das nicht einfach Energy-Pulver?“**

- **Wer fragt wahrscheinlich:** Publikum (hoch) · aus Q-01
- **Wer antwortet:** Yannick (A)
- **Antwort:**
  > HOLY ist ein Berliner Unternehmen, 2020 von drei Freunden gegründet und seit 2021 auf dem Markt. Es verkauft
  > keine fertigen Getränke, sondern Softdrinks zum Selbermixen: Pulver für Energy, Iced Tea, Hydration und Milkshake,
  > seit 2026 auch Sirup – Koffein steckt in der Regel nur in Energy. Kern ist der eigene Onlineshop, seit 2024/25
  > gibt es HOLY auch bei Rewe und Globus. Gestartet ist HOLY als Gaming-Booster, heute sieht es sich als zuckerfreie
  > Softdrink-Marke; die Energy-Linie ist rechtlich aber ein Nahrungsergänzungsmittel.
- **Beleg:** Folie 03 (Zeitleiste, Titel „Softdrinks zum Selbermixen“, Notizen Schritt 0 und Rückfrage „Energy oder
  Softdrink?“, index.html Z. 613, 617); Dossier Kap. 1 Steckbrief ✔ [1–5], 2.2 drei Freunde ✔ [17, 44], 2.5
  ✔ [6, 8, 9], 3.1 Sortiment ✔ [1, 30, 54, 55] und Koffein je Linie ✔ [56–59] („Dose“ = Pappdose mit Pulver ✔ [54]),
  S1 (Energy rechtlich Nahrungsergänzungsmittel ✔ [56, 72]).
- **Fallstricke:**
  - Nicht sagen: „Energy Drink in Dosen“, „gibt’s in jedem Supermarkt“ (6.000–10.000+ Verkaufsstellen ~ unsicher;
    Edeka nur einzelne Märkte, Rossmann ~), „gesund“, „hat Pulverdrinks erfunden“ (kein Pionier, H).
  - Keinen Marktanteil nennen – dazu gibt es keine Daten.
  - Nicht sagen: „alles mit Wasser anrühren“ – Milkshake wird mit Milch gemischt, Syrup als Pod in der Flasche
    (Dossier 3.1).
  - „Nur Energy hat Koffein“ nicht absolut sagen: Einzelne Sorten (Matcha, Eiskaffee) enthalten etwas Koffein
    (Dossier 3.1).
- **Belastbar:** ja

#### F02 – Warum HOLY?

**„Warum habt ihr euch gerade für HOLY entschieden?“**

- **Wer fragt wahrscheinlich:** Publikum (hoch) · aus V-05
- **Wer antwortet:** Yannick (A)
- **Antwort:**
  > HOLY stand auf der Liste von Prof. Stenger, wir haben die Marke am 13.10. gewählt. [Den eigentlichen Grund der
  > Gruppe in einem Satz ergänzen – er ist im Material nicht dokumentiert.] Spannend ist der Fall, weil HOLY sich
  > gerade umbaut: 2021 als Gaming-Booster nur online gestartet, seit 2024 im Supermarkt und 2026 mit der ersten
  > großen TV-Kampagne. Genau da stellt sich die Frage, ob der Auftritt noch zur Identität passt.
- **Beleg:** README.md (Repository) Kopf „von der Gruppe ausgewählt am 13.10.2026“ und Abschnitt „Unternehmen zur
  Auswahl“ (Liste von Prof. Stenger); KI-Nachweis Nr. 10 und 13; Zeitleiste Folie 03 (index.html Daten Z. 663–667:
  Gaming Booster online ✔ [4, 22], erster Supermarkt ✔ [6], TV-Kampagne 01/2026 ✔ [25]); Leitfrage Folie 02 (Z. 452).
- **Fallstricke:**
  - Keinen Grund erfinden („wir trinken alle HOLY“, „HOLY hat uns angesprochen“) – im Repository ist keiner
    festgehalten. Den Umbau der Marke nicht als Auswahlgrund ausgeben, wenn er es nicht war.
  - Keine Verbindung zur HOLY Softdrinks GmbH andeuten (Folie 01/12: „keine Verbindung zur HOLY Softdrinks GmbH“,
    Z. 242 und 2747; siehe F04).
  - „Supermarkt“ nicht zu „überall im Handel“ ausweiten: Die Zahl der Verkaufsstellen ist ~ unsicher (Dossier 9.2).
  - „Ersten großen TV-Kampagne“ so lassen: Ein einzelner TV-Spot schon 09/2025 ist ~ unsicher [130] (f03-Notizen).
- **Belastbar:** **TEILWEISE** – der eigentliche Grund der Wahl fehlt im Material.

#### F03 – Was hat der Gründer gesagt?

**„Auf Folie 3 steht ‚laut Gründer Mathias Horsch‘ – was hat er euch gesagt? Und was ist das wert? Ein Gründer, der
per Sprachnachricht über seine eigene Marke spricht, sagt doch nur, was auf der Website steht.“**

- **Wer fragt wahrscheinlich:** Publikum (hoch), Prof. Stenger (mittel) · aus Q-05 und P-24
- **Wer antwortet:** Yannick (A), ergänzt von Lukas (B; an ihn gingen die Sprachnachrichten)
- **Antwort:**
  > Gründer Mathias Horsch hat unseren Fragenkatalog mit 14 Fragen in zwei Sprachnachrichten beantwortet. Laut
  > Gründer Mathias Horsch (Befragung 10/2026) ist HOLY eine bessere Alternative zu normalen Softdrinks, „geiler
  > Geschmack mit gutem Gewissen“, die Zielgruppe ist breit – 18 bis 55, Männer und Frauen, darunter Schichtberufe –,
  > und neu war für uns vor allem, dass er die großen Softdrinkmarken als Hauptkonkurrenz nennt. Das ist eine
  > Selbstauskunft (Innensicht, n = 1), und vieles wiederholt Website und Press Kit. Deshalb zählt ein
  > Gründer-Stichwort in unserem Markensteuerrad nur, wenn es ein Ergebnis unserer eigenen Methoden stützt; sonst
  > steht es als Selbstbild in der Konsistenzprüfung. [Den letzten Satz nur so sagen, wenn die Gruppe die Regel für GB
  > bestätigt hat.]
- **Beleg:** Folie 03 (Claim-Quelle, index.html Z. 596); B1 Spalte 03 (Z. 2920) und Notizen (Z. 2934); B3 Zeile
  „M. Horsch, Befragung (GB)“ (Z. 3097); B7 (Z. 3479); gruenderbefragung.md Kopf (14 Fragen, zwei Sprachnachrichten an
  Lukas, Freigabe), §1 Punkte 1–3, 5, 6, §2.1 („Geringer Eigenwert vieler Bestätigungen“, „Neu sind vor allem …“,
  keine Rückfragen), §2.2 (unsichere Stellen), §2.3 (Regeln), §3 Fragen 1–3 und 5; methoden.md §6 „Regel für GB“
  (Z. 240–242).
- **Fallstricke:**
  - „95 %“ nicht ohne „laut Gründer, Datengrundlage nicht offengelegt“, am besten gar nicht (siehe F23).
  - Nicht sagen: „Der Gründer hat unsere Persona bestätigt“ – er beschreibt die Zielgruppe, nicht die Kundschaft.
    Gründeraussagen nicht als Tatsachen über die Kundschaft darstellen.
  - Nicht sagen: „Wir hatten ein Interview“ – zwei Sprachnachrichten, Rückfragen waren nicht möglich (2.1).
  - Nicht sagen: „Koffein oder Provokation lehnt er ab“ – danach war nicht gefragt.
  - Die Antworten nicht als Repertory Grid oder Laddering zählen (andere Elemente, keine Nachfragen, Beispiel im
    Fragebogen vorgegeben, 2.1).
  - Die Rangfolge der Kaufgründe, die er nennt, stützt sich laut ihm auf Firmendaten, die er nicht vorlegt – nur so
    erwähnen.
  - Keine Stelle mit unsicherem Wortlaut zitieren, z. B. „No/Zero Bullshit“ (2.2).
  - Die Regel für GB ist ein Vorschlag vom 19.10.2026 (methoden.md §6) – erst nach Bestätigung durch die Gruppe als
    beschlossen darstellen.
  - Transkript und Audio liegen nur im Gruppenordner (2.3 Punkt 5) – nicht anbieten, sie zu zeigen.
- **Belastbar:** ja

#### F04 – Wie seid ihr an den Gründer gekommen?

**„Wie seid ihr denn an den Gründer rangekommen? Arbeitet ihr mit HOLY zusammen?“**

- **Wer fragt wahrscheinlich:** Publikum (hoch) · aus Q-06
- **Wer antwortet:** Lukas (B)
- **Antwort:**
  > Ich habe Mathias Horsch Mitte Oktober über LinkedIn angeschrieben und ihm unseren Fragenkatalog mit 14 Fragen
  > geschickt; er hat mit zwei Sprachnachrichten geantwortet. Er war einverstanden, dass wir die Antworten mit KI
  > abschreiben und auswerten und seinen Namen nennen. Mit HOLY als Firma arbeiten wir nicht zusammen: Die Marke haben
  > wir aus der Liste von Prof. Stenger gewählt, und weil das eine studentische Fallstudie ist, steht auf Folie 1 und
  > 12 ausdrücklich „keine Verbindung zur HOLY Softdrinks GmbH“.
- **Beleg:** KI-Nachweis Nr. 53 (17.10.2026), 59, 60 (Einwilligung zur KI-Abschrift), 67 (Name freigegeben);
  gruenderbefragung.md Kopf („Freigabe“) und §2.1; B1-Notizen (index.html Z. 2934); B7 (Z. 3479); Folie 01 (Z. 242)
  und Folie 12 (Fußzeile Z. 2747); QUELLEN.md §4 (Z. 87–88); README.md (Repository) Z. 23–28 (Markenliste).
- **Fallstricke:**
  - Kein genaues Datum nennen, bevor Lukas es bestätigt hat: KI-Nachweis 53 vom 17.10. widerspricht „18.10.2026“ in
    B1/B7 (Dateidatum der Audios; „Versanddatum bestätigt Lukas“). Bis dahin nur „Mitte Oktober“ (FRAGE-Q-13).
  - Nicht sagen: „Gespräch“, „Interview“, „HOLY hat unsere Präsentation gesehen oder freigegeben“ (nicht belegt).
  - Die HOLY-Logos sind unverändert nur zur Kennzeichnung der Marke eingebunden (QUELLEN.md) – nicht als Erlaubnis
    von HOLY darstellen.
  - Keine Audiodatei vorspielen.
- **Belastbar:** ja

#### F05 – Stimmen die 170 Millionen, und wer hat geprüft?

**„Auf Folie 3 stehen ‚über 170 Mio. € Umsatz‘ mit Haken und Quellennummern. Woher habt ihr eure Zahlen, stimmen die
überhaupt – und wer hat die Quellen geprüft, ihr oder die KI?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch), Publikum (mittel) · aus P-19 und Q-18
- **Wer antwortet:** Yannick (A)
- **Antwort:**
  > Die Unternehmenszahlen sind Selbstauskünfte, deshalb steht „laut Unternehmen“ darunter: „+170M“ für 2025 und über
  > zwei Millionen Kund:innen nennt das Press Kit, die WirtschaftsWoche schreibt „laut eigenen Angaben“, und für 2025
  > ist noch kein Jahresabschluss offengelegt. Beim Umsatz steht übrigens kein Haken, sondern das Schreibsymbol für
  > „korrigiert“: Eine Prüfung hat eine abweichende oder aktuellere Angabe belegt, auf der Folie steht die korrigierte
  > Fassung. Die Fakten über HOLY stammen aus unserem KI-gestützt erstellten Recherche-Dossier mit 160 nummerierten
  > Quellen, das KI-Agenten zweifach gegengeprüft haben, dazu aus der KI-gestützten Nachprüfung vom 17. Oktober und der
  > Gründerbefragung; die Kategoriedaten zur Persona kommen über die Statista-Campuslizenz (Statista Consumer Insights
  > 2025, Kantar TGI 2023). Die Nummern löst Backup B8 auf, die übrigen Quellen nennt B7, und ein Haken heißt: Die
  > Quelle sagt das, bei Kennzahlen sagt es das Unternehmen. [Stand der eigenen Prüfung nennen, also welche tragenden
  > Belege wir selbst geöffnet haben. Sonst ehrlich: „Unsere eigene Prüfung läuft noch.“]
- **Beleg:** f03-Kennzahlen mit Status (index.html Z. 670–672: Umsatz ✎ [13, 16], Kund:innen ✔ [13], Mitarbeitende
  ✎ [5, 17], jeweils „laut Unternehmen“), Fußzeile (Z. 608), Notiz (Z. 616: „✔ = … bei Kennzahlen: das Unternehmen
  sagt das“, KI-Nachprüfung 17.10.2026, Prüfung durch die Gruppe offen), Rückfrage „Wie belastbar sind die 170
  Millionen?“ (Z. 617); B2-Notiz (Z. 2986); B3-Daten (Z. 3100–3104: Kantar TGI 2023, n = 10.089; Statista CI 2025,
  n = 1.583); B7 „Daten & Dokumentation“ (Z. 3475–3478); B8 (ab Z. 3527); Dossier Kopf und Legende (Z. 13–23), 2.4
  ✎ [13, 16], 9.4, Anhang A.1 K14, Anhang B [1]–[160]; folienentwuerfe.md Folie 3, Rückfrage 1; persona-daten.md
  „Quellen“; ki-nachweis.md: alle 52 Prüffelder „☐ offen“ (FRAGE-P-01).
- **Fallstricke:**
  - Nicht sagen, beim Umsatz stehe ein Haken: Dort steht ✎ (korrigiert), ✔ steht nur bei den Kund:innen.
  - Den Haken nicht als „von uns geprüft“ erklären: Er ist der Faktenstatus aus den KI-Prüfungen des Dossiers
    (Legende: beide Prüfungen bestätigen, oder eine bestätigt an der Primärquelle und die andere widerspricht nicht).
    Nicht behaupten, die Gruppe habe alle Quellen selbst geprüft.
  - Nicht sagen: „HOLY macht 170 Mio. Umsatz“ ohne „laut Unternehmen“, „geprüfter Umsatz“ oder „HOLY ist
    profitabel“ – der Jahresabschluss 2024 ist nicht abgerufen (f03-Notiz Z. 617; FRAGE-P-17).
  - Horschs „€180m+“ auf LinkedIn [159] nur als weitere Selbstauskunft nennen.
  - Kund:innen-Zahlen haben verschiedene Definitionen („2M+ loyale“ im Press Kit, „>2.5M“ seit Gründung bei HV
    Capital).
  - Statista- und Kantar-Werte beschreiben die Kategorie Energy Drinks, nicht HOLY. Keine Zahl aus dem Kopf nennen,
    die nicht auf einer Folie oder in einer Notiz steht.
- **Belastbar:** **TEILWEISE** – die eigene Prüfung der Belege durch die Gruppe ist offen.

#### F06 – Identität oder Image?

**„Markenidentität ist das Selbstbild der Marke. Warum füllt ihr Attribute und Nutzen mit Befragungen der
Zielgruppe – ist das nicht das Image?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch) · aus P-15
- **Wer antwortet:** Yannick (A)
- **Antwort:**
  > Richtig, Repertory Grid und Laddering messen das Fremdbild. Deshalb tragen die beiden Methoden auf Folie 2 das
  > Etikett „Fremdbild“. Das Selbstbild nehmen wir aus Website, Press Kit, Gründer-Interviews, HOLYs Kommunikation und
  > einer eigenen Befragung von Gründer Mathias Horsch (Befragung 10/2026), die wir als Selbstauskunft schwach
  > gewichten. Wo Selbst- und Fremdbild auseinandergehen, setzen unsere Empfehlungen an.
- **Beleg:** f02, Etikett „Fremdbild“ auf den Karten Laddering und Repertory Grid (js/folien/02-vorgehen.js Z. 50 und
  85–89; Screenshot `praesentation/_test/account2-gegen-fr2/p2b/f02_s7.png`) und Notiz, Rückfrage (index.html Z. 499);
  folienentwuerfe.md Folie 2, Rückfrage 2 (Z. 83–87); README.md der Fallstudie „Identität vs. Image“ (Z. 50–52) und
  Arbeitspakete (Z. 14–15).
- **Fallstricke:**
  - Nicht sagen: „Unser Steuerrad zeigt nur die Identität.“
  - Die Gründerbefragung nicht als Fremdbild oder Kundenaussage ausgeben (Innensicht, n = 1).
  - Fragt er nach, welche Empfehlung auf dem Fremdbild beruht: Die heutigen Lücken auf Folie 10/11 stützen sich auf
    Außensicht (Verbraucherschützer, Presse) und Persona; Repertory Grid und Laddering zeigen noch Beispieldaten.
    Nicht behaupten, die Befragten hätten die Lücken bestätigt.
  - Falls er nachhakt, sachlich nennen, nicht als Rechtfertigung: Die Aufgabenstellung ordnet Repertory Grid und
    Laddering selbst der Markenidentität zu (README der Fallstudie, Arbeitspakete).
- **Belastbar:** ja

#### F07 – Markensteuerrad bei Esch und in der Vorlesung

**„Wo steht dieses Markensteuerrad bei Esch, und entspricht eure Darstellung der aus meiner Vorlesung? Gehört die
Brand Persona überhaupt dazu?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch) · aus P-16
- **Wer antwortet:** Yannick (A)
- **Antwort:**
  > Das Markensteuerrad stammt aus Eschs Lehrbuch „Strategie und Technik der Markenführung“. Im Zentrum steht die
  > Markenkompetenz („Wer bin ich?“), links stehen die hard facts Attribute und Nutzen, rechts die soft facts
  > Tonalität und Bild, jeweils mit ihrer Leitfrage. Die Brand Persona verlangt Ihre Aufgabenstellung, ein Feld bei
  > Esch ist sie nicht; deshalb zeigen wir sie mit der Limbic Map als Bezugsrahmen um das Rad, das ist unsere
  > Ergänzung. [Stand des Abgleichs mit Ihren Vorlesungsfolien nennen und Abweichungen offen sagen.]
- **Beleg:** f02, Fußzeile „nach Esch & Esch (2024), Persona-Rahmen nach Häusel (2019)“ (index.html Z. 486; Screenshot
  `praesentation/_test/account2-gegen-fr2/p2b/f02_s7.png`) und Notiz, Rückfrage (Z. 499: „Eschs Rad hat fünf Felder;
  Brand Persona und Limbic Map … unsere Ergänzung: ein Rahmen“); Aufgabenstellung „Brand Persona und Markenidentität
  … anhand des Markensteuerrads nach Esch“ (README.md der Fallstudie Z. 7–9, aufgabenuebersicht.html); Aufbau des
  Rads README Z. 35–37 und js/komponenten.js Z. 46–58; methoden.md §6 (Leitfragen); B7-Literatur (Z. 3459) und
  Notiz Z. 3502 („Beide Bücher haben wir nicht selbst eingesehen“).
- **Fallstricke:**
  - Keine Seitenzahlen oder Zitate aus Esch (2024) nennen – das Buch wurde laut B7-Notiz nicht eingesehen. Fragt er
    nach der Seite, das offen sagen.
  - Nicht behaupten, die Darstellung sei mit der Vorlesung abgeglichen, solange das nicht geschehen ist (FRAGE-P-02).
  - Die Brand Persona nicht als sechstes Feld bezeichnen.
  - Sich nicht auf die Auflage festlegen: B7 trägt die 10. Auflage (2024) laut DNB-Katalog ein. Nutzt die Vorlesung
    eine andere Ausgabe (z. B. 2018), B7 und die Fußzeile von Folie 02 anpassen.
- **Belastbar:** **TEILWEISE** – Vorlesungsabgleich offen, Esch nicht selbst eingesehen.

#### F08 – Gibt es Marco wirklich, und warum ein Mann?

**„Gibt es Marco wirklich? Eure Persona-Zahlen beschreiben doch Energy-Drink-Trinker allgemein – sind das überhaupt
Daten über HOLY-Kund:innen? Und warum ein Mann, wenn fast die Hälfte Frauen sind?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch), Publikum (hoch) · aus P-20 und Q-07
- **Wer antwortet:** Yannick (A)
- **Antwort:**
  > Marco ist fiktiv: Name, Beruf und Zitat haben wir erfunden; er steht für die heutige Kernkundschaft, wie
  > Mitgründer Jost sie im Podcast 2024 beschreibt – meist 25 bis 40, etwa zwei Drittel Männer, viele im
  > Schichtdienst. Fast alle Zahlen auf der Folie beschreiben die Kategorie Energy Drinks in Deutschland, nicht HOLY,
  > das steht auch in der Fußzeile; HOLY veröffentlicht keine Kundendaten. Männer sind in allen Quellen die Mehrheit,
  > von 54 % bei denen, die regelmäßig Energy Drinks trinken (Statista Consumer Insights 2025), bis 67,5 % bei denen,
  > die mindestens mehrmals im Monat trinken (VuMA, Daten 2021). Frauen trinken HOLY aber durchaus, laut Jost etwa ein
  > Drittel, anfangs waren es 20 % – für sie liegt im Backup B3 unsere Wachstums-Persona Lena, 29, Pflegefachkraft,
  > als Hypothese.
- **Beleg:** f04 (index.html Z. 811 „Kern-Persona · Hypothese · fiktiv“, Fußzeile Z. 831 „Kategorie Energy Drinks,
  nicht HOLY“, Rückfragen Z. 845, u. a. „Laut Statista …“ und „Ist das nicht ein Klischee?“); persona-daten.md
  Kernergebnisse (Statista CI 2025: 54 % Männer bei „regelmäßig“; VuMA: rund zwei Drittel) und „Was das für die
  Persona heißt“ (67,5 %, VuMA 2021); Dossier 4.1 ✔ [24] (anfangs 80:20, inzwischen etwa 2/3 zu 1/3) und „Lücke: HOLY
  veröffentlicht keine Kundendaten“, 4.3 (H); B3 (Z. 3062–3063, 3074, 3095–3097); persona-steckbrief.md §3 Punkte 1
  und 6, §5 (Lena); folienentwuerfe.md Folie 4, Rückfragen 1 und 3.
- **Fallstricke:**
  - Nicht sagen: „HOLY-Kund:innen sind zu 54 % Männer“ oder „Statista zeigt, dass HOLY-Kunden männlich sind“ – das
    ist die Kategorie Energy Drinks.
  - Statista-Werte nur wie in persona-daten.md: 54 % = „regelmäßig“, 18–64, online; 67,5 % = VuMA, ab 14, Daten 2021;
    nicht miteinander verrechnen.
  - Die Zielgruppe laut Gründer Mathias Horsch (Befragung 10/2026) – 18–55, Männer und Frauen – nicht mit der
    Kundschaft verwechseln; nicht sagen „Schichtarbeiter sind HOLYs Zielgruppe“.
  - Der Beruf (Lagerlogistik) ist eine Annahme; Lena ist eine Hypothese (H, Dossier 4.3) ohne eigene Folie.
  - Den Frauenanteil „etwa ein Drittel“ als Selbstauskunft von Jost nennen, nicht als Messung; die Jost-Angaben
    stammen aus einem automatischen Transkript (Dossier 9.4) – sinngemäß sagen, nicht als geprüftes Zitat.
  - Nicht sagen, wir hätten mit Bewertungen und Interviews abgeglichen, solange die Auswertung fehlt (Folienentwurf 4,
    Rückfrage 3).
  - Zum Zeigen auf Folie 04: gestrichelte Blöcke sind Annahmen, Flächen mit Datensymbol haben eine Quelle.
- **Belastbar:** ja

#### F09 – Gamer und Jugendliche?

**„Wer kauft HOLY überhaupt – sind das nicht Gamer und Jugendliche?“**

- **Wer fragt wahrscheinlich:** Publikum (hoch) · aus Q-04
- **Wer antwortet:** Yannick (A)
- **Antwort:**
  > Laut HOLY überwiegend nicht: Nach Mitgründer Frederick Jost (Podcast 2024) ist die Kundschaft meist 25 bis 40,
  > etwa zu zwei Dritteln männlich, viele arbeiten im Schichtdienst, und getrunken wird HOLY in der Regel gar nicht
  > beim Zocken. Das ist eine Selbstauskunft, denn HOLY veröffentlicht keine Kundendaten. Gaming war der Start 2021 und
  > bleibt ein Kanal, etwa über Creator, ist laut Jost aber kein Trinkanlass. Energy verkauft HOLY online inzwischen
  > nur ab 18; Verbraucherschützer kritisieren aber, dass die Aufmachung Kinder und Jugendliche anspricht – das greifen
  > wir in der Konsistenzprüfung auf Folie 10 auf.
- **Beleg:** Folie 04 (Block Soziodemografie „Jost, Presse ✔ [7, 24]“, index.html Z. 890; Notizen Schritt 2); B3
  (Zeile Jost 2024, Z. 3096); Dossier Kap. 1 Kernerkenntnis 4 ✔ [7, 24], 4.1 ✔ [24] und „Lücke“ (keine
  Kundendaten), S3 (Gaming bleibt Kanal ✔ [5, 22, 133]), 3.4 (ab 18 ✔ [12], Kritik ✔ [27, 82]); f10 Sprechtext
  Schritt 8 (Z. 2353) und Belege Lücke 1/2 (Z. 2357).
- **Fallstricke:**
  - Nicht sagen: „Die Kunden sind 25–40“ als Messung.
  - Similarweb (63,5 % männlich, 18–24) nur als ~ unsicher – das sind modellierte Website-Besuche.
  - Nicht sagen: „Jugendliche trinken kein HOLY“ – das Treueprogramm gilt ab 16, Syrup ab 11 ✔ [60, 61, 71].
  - Die Zielgruppe laut Gründer Mathias Horsch (Befragung 10/2026), 18–55, nicht mit der Kundschaft verwechseln.
  - Keine Lückennummer nennen oder sie vorher mit Elias klären: Der Sprechtext von Folie 10 nennt die Ansprache
    Jugendlicher bei Lücke 1, die Belege bei Lücke 2 (S2/S3); bis zur Synthese (Do 22.10.) sind die Lücken Entwurf.
  - Jost-Zitate stammen aus einem automatischen Transkript (Dossier 9.4) – nicht wörtlich zitieren.
- **Belastbar:** ja

#### F10 – Was heißt „Hedonisten“, und warum Marco?

**„Was heißt ‚Hedonisten‘? Klingt eher negativ. Und warum ist Marco überhaupt einer – HOLYs Werbung wirkt eher nach
Abenteurer, und die Offenen liegen bei euch knapp dahinter.“**

- **Wer fragt wahrscheinlich:** Publikum (hoch), Prof. Stenger (mittel) · aus Q-08 und V-03
- **Wer antwortet:** Yannick (A)
- **Antwort:**
  > Der Begriff kommt aus der Limbic Map nach Häusel bzw. der Gruppe Nymphenburg: Hedonisten liegen dort bei
  > Stimulanz, mit den Stichworten Neugier, Abwechslung, Spaß und Kreativität; Genuss ordnet das Modell eher den
  > „Offenen“ zu, „Hedonist“ ist hier also ein Modellbegriff, nicht das Alltagswort. Für Marco ist das unsere
  > Hypothese aus Kategoriedaten: Unter Energy-Drink-Konsument:innen nennen 41 % Videospiele als Hobby, unter allen
  > Befragten 29 % (Statista Consumer Insights 2025). Für den Abenteurer finden wir in den Daten über die Zielgruppe
  > kein Signal für Risikofreude, Autonomie oder Rebellion – nur Alter und Geschlecht sprechen laut Modell leicht
  > dafür –, und die Abenteuer-Hinweise aus HOLYs eigener Werbung zu nehmen, wäre ein Zirkelschluss gewesen. Gegenüber
  > den Offenen ist es knapp, für sie sprechen Geschmack und gutes Gewissen, aber nur über einzelne Kundenstimmen;
  > deshalb steht „Hypothese“ auf der Folie, und entscheiden soll die Auswertung von 20–30 Kundenbewertungen
  > [Ergebnis nennen].
- **Beleg:** Folie 05 (index.html Z. 1012 Kicker „Limbic Type der Persona · Hypothese“, Z. 1013–1014 „Hedonisten“ /
  „Neugier · Unterhaltung“, Z. 1026 „Gewichte: Schätzung des Teams“), Notizen Z. 1056 und Rückfragen Z. 1062 („Warum
  nicht Offene?“, „Eine Marke hat doch keinen Limbic Type?“); limbic-map.md §2 (Z. 104–112 Stichworte nach [105]
  S. 5, Z. 111 Offene „Wohlfühlen · Genuss · Offenheit · Fantasie“, Z. 120–124 sieben Typen) und §3.2 (Typenprüfung
  Z. 202–204, „Hedonisten, knapp vor Offene“ Z. 208–211, Entscheidungsregel Z. 222–230); folienentwuerfe.md Folie 5,
  Rückfragen 2 und 3 (Z. 491–498); f10-Belege Z. 2357 (bis 17.10. nach Dossier 4.4 „Abenteurer“, H);
  persona-daten.md Z. 10 (Kategorie, nicht HOLY) und Z. 26 (Videospiele 41 %, Ø 29 %, Statista CI 2025).
- **Fallstricke:**
  - Nicht sagen: „Marco ist nachweislich Hedonist“, „gemessen“ oder „HOLY ist eine Hedonisten-Marke“ – Marken haben
    keinen Limbic Type, der HOLY-Punkt ist nur ein Mittelwert (limbic-map.md §2, f05-Notiz Z. 1062).
  - Nicht als Vorlesungsbegriff ausgeben, der Abgleich ist offen.
  - Nicht bestreiten, dass [105] Hedonisten auch „sehr konsumaffin“ und „Trendsetter“ nennt (limbic-map.md §3.2
    Z. 202); „Trendsetter“ ist für Marco gerade nicht belegt.
  - „Technik 34 % / +7“ und „85 % keine frühen Übernehmer“ nicht nennen: Sie stehen nicht in persona-daten.md, aber
    noch in den f05-Notizen (Z. 1061–1062) und in folienentwuerfe.md Folie 5 – dort nicht ablesen.
  - Die 41 % beschreiben die Kategorie, nicht die HOLY-Kundschaft. Gaming nicht als Trinkanlass darstellen: Laut
    Mitgründer Jost wird HOLY „in der Regel gar nicht beim Gaming“ getrunken (Dossier 4.1 ✔ [24]).
  - Das Ergebnis der Bewertungs-Auswertung erst nennen, wenn sie vorliegt.
- **Belastbar:** **TEILWEISE** – der Begriff ist belegt; die Zuordnung ist eine Hypothese, die Auswertung der
  Bewertungen steht aus.

#### F11 – Woher kommen die Prozentwerte?

**„Woher kommen 40/30/30 für Marco und 30/20/50 für HOLY – ist das eine Messung nach Häusel?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch) · aus P-22
- **Wer antwortet:** Yannick (A)
- **Antwort:**
  > Nein, das ist unsere Heuristik, keine Messung: In den Quellen der Gruppe Nymphenburg gibt es keine Prozentgewichte
  > für die drei Systeme einer Person, nur die Verteilung der Typen in der Bevölkerung. Für Marco haben wir Signale
  > gezählt (leicht = 1, mittel = 2 Punkte); das ergibt nur die Rangfolge Stimulanz vor Dominanz und Balance, daraus
  > schätzen wir 40/30/30, bewusst nah an der Mitte, weil die Signale schwach sind. Für HOLYs Auftritt sind wir vom
  > Startwert aus unserem Recherche-Dossier ausgegangen und haben ihn nach den Signalen aus Verpackung, Kampagnen und
  > Ton angepasst: Stimulanz 50, Dominanz 20, Balance 30. Beide Profile haben eine Spanne von plus/minus 5, deshalb ist
  > die Lücke von 10 Punkten nur eine Tendenz; unser Urteil „passt teilweise“ stützt sich auf die qualitativen Belege.
- **Beleg:** f05-Daten Gewichte (index.html Z. 1104–1105: Marco B 30 / D 30 / S 40, Marke B 30 / D 20 / S 50),
  Metazeile „Gewichte: Schätzung des Teams“ (Z. 1026), Rückfrage „Wie kommt ihr auf die Prozentwerte?“ (Z. 1062);
  limbic-map.md §2 „Unsere Heuristik“, §3.1 (Zählung 3/3/5), §3.2 Herleitung (Gesamturteil des Teams, direkt
  umgerechnet ≈ 45/27/27), §4.2 Herleitung (Startwert Dossier 4.4 B 30 / D 15 / S 55, H; +5 Dominanz, −5 Stimulanz),
  §5 „Grenze“, §7; folienentwuerfe.md Folie 5, Rückfrage 1; persona-daten.md (Videospiele 41 %, Ø 29 %).
- **Fallstricke:**
  - Nicht sagen: „gemessen“ oder „nach dem Limbic-Verfahren“. Die „Überschneidung 90 %“ nicht nennen
    (limbic-map.md §5).
  - Statista-Werte nur wie in persona-daten.md: Videospiele +12 (41 % gegen Ø 29 %) geht; „Technik +7“ steht dort
    nicht – weglassen.
  - Nicht behaupten, 40/30/30 sei aus den Punkten ausgerechnet: Direkt umgerechnet wären es etwa 45/27/27; die
    Prozente sind ein Gesamturteil des Teams (§3.2).
  - Zahlen immer mit dem System nennen, denn die Frage mischt die Reihenfolge (Marco: Stimulanz 40, Dominanz 30,
    Balance 30; HOLY: Stimulanz 50, Dominanz 20, Balance 30).
  - Das Patt zwischen Dominanz und Balance hängt an der Zählregel für den Schicht-Anlass (§3.2).
- **Belastbar:** ja

#### F12 – Echte Befragte oder KI?

**„Habt ihr echte Leute befragt – oder sind die Zahlen ausgedacht? Auf Folie 6 steht n = 8, davon fünf KI-Personas,
und überall ‚Beispieldaten‘. Warum mittelt ihr KI-Antworten mit echten?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch), Publikum (hoch) · aus P-01 und Q-02
- **Wer antwortet:** Lukas (B)
- **Antwort:**
  > Fünf unserer Befragten sind KI-simuliert, echte Kurzinterviews haben wir [tatsächliche Zahl] geführt; geplant
  > waren drei bis fünf. Simuliert haben wir, weil eine repräsentative Befragung im Zeitrahmen nicht machbar war, und
  > die simulierten Antworten sind für uns keine Daten, sondern Hypothesen. [Falls so umgesetzt:] Deshalb zählen wir KI
  > und echt getrennt: Auf der Folie steht die Summe, die Aufteilung in der Fußzeile und in Backup B4 [stammen die
  > Skalenwerte nur von den fünf simulierten Befragten, das hier ausdrücklich sagen]. Ob die Hypothesen tragen, zeigen
  > die echten Interviews und Kundenstimmen; repräsentativ ist das nicht, es zeigt Richtungen, und wo KI und echte
  > Befragte auseinandergehen, sagen wir das offen.
  >
  > [Nur falls am 26.10. doch noch Beispieldaten auf den Folien stehen, ehrlich: „Was mit ‚Beispieldaten‘ markiert
  > ist, sind im Moment Beispielwerte, keine Ergebnisse.“ Das ist dann ein Mangel, keine Antwort.]
- **Beleg:** Pillen „Beispieldaten“ auf f06, f07, f08b, f10, f11, f12; f06-Fußzeile „5 KI-Personas + 3
  Kurzinterviews, gemittelt“ (index.html Z. 1227) und Notiz, Rückfrage „Wie genau sind die Werte?“ (Z. 1235); B1 Pille
  „teils geplant“ (Z. 2860), Spalte 01 „Befragte simulieren – repräsentative Befragung zeitlich nicht machbar“
  (Z. 2874), Spalte 02 „Simulation mit 3 echten Kurzinterviews abgleichen“ (Z. 2892), Notiz „3 ist die geplante Zahl
  … (methoden.md: 3–5)“ (Z. 2934); B4/B5-Fußzeilen n = 8 (Z. 3146, 3238); dossier-buendel-b.md §5 Vergleichstabelle
  (Z. 322–328), §7 „Simulierte Befragte sind keine Daten“ (Z. 362–365), §10 Punkt 5 (Z. 426) und Punkt 12 (Z. 433);
  methoden.md §2 Vorgehen 1; FRAGE-Q-01, FRAGE-P-04.
- **Fallstricke:**
  - Nicht „8 Befragte“ sagen ohne „davon 5 KI-simuliert“; KI-Personas nie „Befragte“ nennen ohne „KI-simuliert“.
    Nicht „wir haben acht Personen befragt“, solange die Interviews nicht dokumentiert sind.
  - Nicht „drei Interviews“ sagen, wenn weniger geführt wurden – laut B1-Notiz ist „3“ nur die geplante Zahl.
  - „Gemittelt“ nicht als Stärke darstellen; nicht „repräsentativ“ oder „signifikant“.
  - Stammen die Skalenwerte (P8) nur von den fünf simulierten Befragten (Vorschlag dossier-buendel-b.md §10 Punkt 12),
    nicht sagen, die Mittelwerte kämen aus KI und echten Interviews – so steht es noch in der f06-Notiz (Z. 1235).
    Den Notizsatz „Ergebnisse mit drei echten Kurzinterviews geprüft“ nur verwenden, wenn die Interviews geführt und
    getrennt ausgewertet sind.
  - Stehen am 26.10. noch „Beispieldaten“ oder „teils geplant“ auf den Folien, ist das ein Mangel: vorher überall
    dieselbe tatsächliche Zahl eintragen (B1-Notiz Z. 2934). Die Beispielwerte (9 Nennungen, 6,6, +2/+3) nicht als
    Ergebnis nennen.
  - Den tatsächlichen Stand von P7 einsetzen (die fünf Profile liefen laut persona-steckbrief.md Z. 128 am 17.10.).
  - Die Gründerantworten nicht als Interviewdaten ausgeben – sie fließen nicht in Repertory Grid oder Laddering ein.
- **Belastbar:** **NEIN** (Stand 19.10.) – im Repository steht nirgends, wie viele echte Interviews es gab;
  belastbar erst mit der tatsächlichen Zahl und getrennter Auswertung.

#### F13 – Zirkelschluss mit KI-Personas?

**„Eine KI, die ihr mit eurer Persona füttert, gibt doch nur zurück, was ihr hineingebt und was sie über HOLYs
Werbung weiß. Ist das nicht ein Zirkelschluss?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch) · aus P-02
- **Wer antwortet:** Lukas (B), ergänzt von Yannick (A)
- **Antwort:**
  > Dieses Risiko sehen wir und nennen es in B1: Simulierte Befragte spiegeln Trainingsdaten, Klischees werden
  > verstärkt, Nischenwissen fehlt. Unser Persona-Block enthielt zum Beispiel „ohne Zucker“, den Preis pro Portion und
  > „Squad“. Was die KI dazu sagt, kann also aus dem Block stammen. Deshalb vermerken wir je Konstrukt, ob es im Block
  > angelegt war, und werten es nur als Ergebnis, wenn es auch bei echten Befragten oder in Kundenbewertungen
  > vorkommt. [Nur sagen, wenn Lukas so ausgewertet hat.]
- **Beleg:** B1, Spalte 01 (index.html Z. 2874) und Spalte 03 „Simulierte Befragte spiegeln Trainingsdaten …“
  (Z. 2912); dossier-buendel-b.md §2 „Achtung, der Persona-Block prägt die Antworten vor“ (Z. 98–106), §5 Spalte „im
  Persona-Block angelegt?“ (Z. 324–328), §7 (Z. 362–365), Anhang 2 „Im Persona-Block angelegt“ (Z. 537–541);
  prompts.md Teil C „Limitationen“.
- **Fallstricke:**
  - Nicht sagen: „Die KI-Personas haben bestätigt …“ oder „validiert“.
  - Die fünf Profile nicht als unabhängige Beobachtungen ausgeben: Sie entstehen in einer Antwort desselben Tools
    (dossier-buendel-b.md §7).
  - Den Satz zum Persona-Block nur so sagen, wenn der volle Block verwendet wurde (Standard laut §2); bei der
    gekürzten Variante die Beispiele anpassen.
  - Die Regel „zählt nur, wenn auch echt“ nur nennen, wenn sie tatsächlich angewandt wurde.
  - Verlangt er den Prompt: Der Wortlaut von P7–P12 steht in prompts.md und dossier-buendel-b.md Anhang 1; der
    Nachweis der tatsächlichen Nutzung (Tool, Datum, Verlauf) fehlt noch im KI-Nachweis, Abschnitt 3 (FRAGE-P-10).
- **Belastbar:** **TEILWEISE** – hängt daran, ob die Regel „zählt nur, wenn auch echt“ angewandt wurde.

#### F14 – Drei Attribute und „zuckerfrei“

**„Wie kommt ihr von den Konstrukten auf genau drei Markenattribute? Und warum soll ‚zuckerfrei‘ HOLY abheben, wenn
Gönrgy oder Coca-Cola Zero auch zuckerfrei sind?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch) · aus P-03
- **Wer antwortet:** Lukas (B)
- **Antwort:**
  > Ein Attribut muss drei Kriterien erfüllen: Es wird oft genannt, HOLY weicht deutlich vom Durchschnitt aller fünf
  > Wettbewerber ab, und HOLY liegt nah an der Idealmarke; vorgesehen sind drei bis fünf Attribute, die Schwellen
  > stehen in Backup B4. [Tatsächliche Schwellen und Zahl der Attribute nennen.] Gemessen wird, wie die Befragten die
  > ganze Marke sehen, nicht eine einzelne Variante; weil wir gegen den Durchschnitt aller Wettbewerber rechnen und
  > Gönrgy im Set zuckerfrei ist, drückt das den Vorsprung bei „zuckerfrei“. [Echten Vorsprung nennen; ist er klein,
  > offen sagen, dass „zuckerfrei“ allein HOLY kaum abhebt.]
- **Beleg:** f06-Notiz, Kriterien und Rückfrage „Zuckerfrei gibt es doch auch …“ (index.html Z. 1235); f06-Daten
  (Beispielwerte, Z. 1300–1302); B4-Notiz „Schwellen … eigene Festlegung – mit der Gruppe abstimmen“ (Z. 3153) und
  Daten schwellen (Z. 3184); methoden.md §2, Vorgehen 4–5 (3–5 Attribute); dossier-buendel-b.md §10 Punkt 8 (Z. 429,
  ≥ 1 gegen ≥ 1,5) und B1 Schritt 5 (Z. 139–141, Regel vorher festlegen); Dossier 5.2 (Gönrgy zuckerfrei,
  ✔ [109, 115]), 5.3 Set-Vorschlag (H), 3.6 (HOLY vergleicht sich nur mit gezuckerten Standardprodukten, H).
- **Fallstricke:**
  - Nicht sagen: „HOLY ist die einzige zuckerfreie Marke.“
  - Dass Coca-Cola Zero zuckerfrei ist, steht nicht im Dossier (laut f06-Notiz Modellwissen) – nur nach Prüfung nennen.
  - Den Notizsatz „Darum ist der Vorsprung bei zuckerfrei der kleinste der drei“ (Z. 1235) nur sagen, wenn die echten
    Daten das zeigen – heute beruht er auf Beispieldaten (+2 gegenüber +3).
  - Schwellen nicht als vorab festgelegt ausgeben, wenn sie erst nach den Daten gewählt wurden; B4 nennt ≥ 1,5
    Skalenpunkte, die Aufgaben ≥ 1 (dossier-buendel-b.md §10 Punkt 8) – nur die tatsächlich notierte Regel nennen
    (FRAGE-P-05).
  - Ist „zuckerfrei“ nach der echten Auswertung kein Attribut, Antwort und Folientitel anpassen (Titel erst nach der
    Auswertung festlegen, Kasten FOLIE 06).
- **Belastbar:** **TEILWEISE** – Schwelle nicht datiert festgelegt, Werte sind noch Beispieldaten.

#### F15 – Nur HOLYs Werbung nachgezeichnet?

**„‚Genuss mit gutem Gewissen‘ ist fast wörtlich HOLYs eigenes Versprechen. Habt ihr mit dem Laddering nicht einfach
die Werbung nachgezeichnet – was habt ihr da eigentlich analysiert?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch), Publikum (mittel) · aus P-05 und Q-12
- **Wer antwortet:** Lukas (B, Laddering), ergänzt von Elias (C, Konsistenzprüfung auf Folie 10); Yannick ergänzt
  bei Bedarf (Synthese)
- **Antwort:**
  > Der Einwand ist berechtigt, und genau das prüfen wir: Die Kette zum guten Gewissen steht schon als Hypothese in
  > unserem Recherche-Dossier, HOLY verspricht selbst „Geiler Geschmack mit gutem Gewissen“, und laut Gründer Mathias
  > Horsch (Befragung 10/2026) ist das auch sein Selbstbild – das zeigt zunächst nur eine einheitliche Botschaft.
  > Entscheidend ist deshalb, ob echte Befragte „gutes Gewissen“ von sich aus nennen; die KI-Leitern zählen wir dafür
  > nicht, weil unser Persona-Block das Motiv „ohne Zucker“ schon enthält. [Ergebnis nennen: wie viele echte Befragte,
  > getrennt von der KI.] Wenn ja, decken sich Selbst- und Fremdbild; wenn nein, setzt dort eine Empfehlung an.
  > Unsere eigentliche Analyse steckt in der Konsistenzprüfung auf Folie 10: wo Auftritt und Identität nicht
  > zusammenpassen – Koffein gegen gutes Gewissen, eine Bildwelt, die jünger wirkt als die Kundschaft, und mindestens
  > sechs Claims parallel.
- **Beleg:** f07, Kicker „Beispieldaten“, Titel und Notiz (index.html Z. 1376, 1377, 1405); Dossier 3.7 (Kette
  „zuckerfrei → … → gönnen ohne schlechtes Gewissen“, H), 2.7 ✔ [5] und 6.5 ✔ [5, 20] (Markenversprechen);
  dossier-buendel-b.md §1 Persona-Block „ohne Zucker, aber mit Geschmack“ (Z. 44), §2 (Z. 98–100), Anhang 2 B2
  (Z. 554–557); gruenderbefragung.md §1 Nr. 1 (Z. 31–34), 4.4 „Markenkern“ (Z. 188–189), 4.5 B8 (Z. 212) und B11,
  Tabelle 3 Frage 1; f10-Notizen Schritt 7 (Z. 2352), Schritt 8 (Z. 2353) und Z. 2355 („gilt er erst, wenn das
  Laddering dasselbe zeigt“); f11-Titel (Z. 2498) mit den Befunden Z. 2533, 2558, 2583; FRAGE-Q-02.
- **Fallstricke:**
  - Nicht sagen: „Die Befragten bestätigen den Claim“ oder „Das Laddering bestätigt den Kern“, solange Folie 07
    Beispieldaten zeigt. KI-Leitern nicht als Beleg zählen.
  - Die Gründerbefragung nicht als Fremdbild nutzen: Laut Gründer Mathias Horsch (Befragung 10/2026) verbindet HOLY
    Geschmack und gutes Gewissen – das ist Selbstbild (Innensicht, n = 1) und fast wörtlich die Website. Die
    Selbstbild-Leiter des Gründers gehört nicht in Implikationsmatrix und HVM (gruenderbefragung.md 4.5 B11).
  - Den Folientitel „HOLY steht für Genuss mit gutem Gewissen“ und den Sprechtextsatz „Das deckt sich mit dem eigenen
    Versprechen der Marke“ (f07, Schritt 4) erst nach der echten Auswertung so stehen lassen. Übereinstimmung nicht
    als „Beleg für die Stärke der Marke“ überhöhen.
  - Nicht so tun, als sei der Kern unsere Erfindung. Lücken und Bruch sind unsere Bewertung (H, Fußzeile f10), die
    Belege dafür sind gesichert (Dossier 8 S1–S3, S5). Der Bruch liegt nicht im Rad, sondern in der Umsetzung über die
    Kanäle (Folie 9b).
  - „Mindestens sechs“ Claims sagen, nicht „sechs“ (siehe F32).
- **Belastbar:** **TEILWEISE** – hängt an echten Leitern (Regel B8).

#### F16 – Auswahl, Codierung und Engagement-Rate

**„Wie habt ihr die Beiträge ausgewählt und codiert? Und was sagt eine Engagement-Rate von knapp einem Prozent – ist
das gut oder schlecht?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch) · aus P-08
- **Wer antwortet:** Elias (C)
- **Antwort:**
  > [Falls so erhoben:] Je Pflichtkanal haben wir die letzten 15 bis 20 Beiträge mit Screenshot und Datum erfasst und
  > alle nach demselben Raster codiert: Format, Motiv, Farbwelt, Ton, Markenpräsenz, Claim und Handlungsaufforderung
  > (Backup B6) [falls P12 genutzt: von der KI vorcodiert, von uns stichprobenartig geprüft]. Die Engagement-Rate
  > rechnen wir selbst in Sheets: (Likes + Kommentare) / Follower × 100, gemittelt über die erfassten Beiträge.
  > [Echte Werte nennen.] Einen externen Vergleichswert haben wir nicht erhoben, deshalb bewerten wir die Rate nicht
  > absolut, sondern vergleichen nur innerhalb unserer Stichprobe, etwa zwischen den Kanälen.
- **Beleg:** f09, Formel (index.html Z. 1912) und Notiz (Z. 1936); f09-Daten engagementRate/stichprobe/anteil mit
  „beispiel“: true (Z. 1970–2022); B6 Stichprobe und Kennzahl (Z. 3349–3354), Notiz Kernsatz (Z. 3366) und Hinweise
  „DIE ZEILEN SIND BEISPIELDATEN … Prompt P12 nur mit Screenshots, Ergebnis stichprobenartig prüfen“ (Z. 3368);
  methoden.md §5 Vorgehen 1–3; arbeitsplan.md Z. 91 (Raten in Excel/Sheets, nicht per KI); Follower: Dossier 6.1
  ✔ [19, 122–124], Stand 14.10.2026.
- **Fallstricke:**
  - Die Beispielwerte (0,9 %, 0,1 %, 1,6 %, „17 von 50“) nicht nennen – sie sind Platzhalter.
  - Die Erhebung nicht als geführt darstellen, solange B6 Beispielzeilen zeigt („keine echten Beiträge“, Z. 3368).
  - Wurde mit Prompt P12 codiert, das sagen (KI-gestützt, stichprobenartig geprüft).
  - Keinen Branchen-Richtwert aus dem Gedächtnis nennen – im Material gibt es keine Quelle dafür.
  - Bei YouTube führen die Daten Abos statt Follower (f09 Z. 2000) – die Formel dort als „Follower bzw. Abos“ lesen
    (FRAGE-P-08).
  - Die Facebook-Gruppe (≈ 40.000, Selbstangabe) nicht zu den Seiten-Followern zählen. Follower am 26.10. neu ablesen.
- **Belastbar:** **TEILWEISE** – die Stichprobe ist noch nicht erhoben.

#### F17 – Leitfrage in einem Satz, Kern oder Kompetenz?

**„Was ist in einem Satz eure Antwort auf die Leitfrage? Und ist euer Markenkern nicht einfach HOLYs Claim – bei Esch
steht im Zentrum doch die Markenkompetenz?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch) · aus P-10
- **Wer antwortet:** Elias (C, präsentiert Folie 10), ergänzt von Yannick (A, Synthese)
- **Antwort:**
  > Unsere Antwort: HOLY hat einen starken Kern, Genuss mit gutem Gewissen, aber der Auftritt hat zwei Lücken und einen
  > Bruch. Im Zentrum des Rads steht nach Esch die Markenkompetenz: Herausforderer mit Softdrinks zum Selbermixen. Den
  > Markenkern zeigen wir bewusst darüber, als unsere Verdichtung aller Felder, nicht als eigenes Feld. Dass er mit
  > HOLYs Versprechen „Geiler Geschmack mit gutem Gewissen“ übereinstimmt, werten wir erst dann als Ergebnis, wenn die
  > stärkste Leiter der Befragten dasselbe zeigt.
- **Beleg:** f10-Notizen Schritt 1 und 7, „Herkunft der Stichworte“ und Rückfragen (index.html Z. 2346, 2352, 2355,
  2358); f10-Belege Z. 2357 (Herausforderer = unsere Einordnung H; „Softdrinks zum Selbermixen“ Press Kit ✔ [13]);
  f11 Schritt 0 (Z. 2612); Versprechen: Dossier 2.7 ✔ [5] und 6.5 ✔ [5, 20], Press Kit [13] nur laut Nachprüfung vom
  17.10.2026 (markenkompetenz.md, „Claim – Entscheidung“); methoden.md §6; gruenderbefragung.md 4.4 (Markenkern).
- **Fallstricke:**
  - Nicht sagen: „Die Kundschaft bestätigt den Kern“, solange das Laddering Beispieldaten zeigt.
  - Den Markenkern nicht als Feld bei Esch bezeichnen.
  - Die Gründeraussage nur als Selbstbild nennen („laut Gründer Mathias Horsch (Befragung 10/2026)“), nicht als
    unabhängigen Beleg.
  - Claim und Versprechen auseinanderhalten: Der Dachclaim ist „Die Softdrink Revolution“ (Dossier 6.5 ✔ [1, 8]),
    „Geiler Geschmack mit gutem Gewissen“ ist das Markenversprechen (✔ [5, 20]). Wenn er „Claim“ sagt, das kurz
    klarstellen.
  - „Herausforderer“ ist unsere Einordnung nach Kotler (H, Kriterium Angriff); HOLY selbst nennt sich
    „Challenger-Brand“ (✔ [13]).
  - Kern-Satz zwischen Elias und Yannick vorher abstimmen, damit beide dasselbe sagen (FRAGE-P-18).
- **Belastbar:** **TEILWEISE** – der Kern gilt als Selbst- und Fremdbild erst mit echter Leiter.

#### F18 – Lücke 1: Koffein gegen gutes Gewissen

**„Lücke 1: Ist ‚gutes Gewissen gegen Koffein‘ überhaupt ein Widerspruch? HOLY meint mit gutem Gewissen doch wenig
Zucker, nicht wenig Koffein.“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch) · aus P-11
- **Wer antwortet:** Elias (C), ergänzt von Yannick (A)
- **Antwort:**
  > Im Selbstbild stimmt das: Laut Gründer Mathias Horsch (Befragung 10/2026) steht gutes Gewissen für wenig Zucker
  > und Kalorien, nach Koffein haben wir nicht gefragt. Die Lücke begründen wir deshalb nur mit der Außensicht: 160 mg
  > Koffein pro Portion HOLY Energy, die Warnung des VKI und Berichte von KONSUMENT und Stiftung Warentest über die
  > Koffeinvergiftung eines Zehnjährigen. Dazu warnt die Verbraucherzentrale Niedersachsen, das Pulver könne leicht
  > überdosiert werden. Wer gutes Gewissen verspricht, wird an dieser Kritik gemessen – das ist unsere Bewertung für
  > die Energy-Linie, keine Rechtsprüfung.
- **Beleg:** f10-Notizen Schritt 8 und Belege (index.html Z. 2353, 2357); f11-Belege (Z. 2617); Dossier 3.3 ✔ [55, 56]
  (160 mg), 3.4 ✔ [27] (VKI 12/2024), ✔ [28, 29] (KONSUMENT, Stiftung Warentest 2026), ✔ [72] (VZ Niedersachsen
  03/2026), ✔ [12] (Shop ab 18), S1 (H); gruenderbefragung.md 2.1 („Nicht genannt heißt nicht abgelehnt“) und 4.3 K11.
- **Fallstricke:**
  - Nicht sagen: „HOLY ist gesundheitsschädlich“ oder „rechtswidrig“.
  - Nicht sagen: „Alle HOLY-Produkte haben 160 mg.“ Iced Tea, Hydration, Milkshake und Syrup sind meist koffeinfrei
    (Dossier 3.1 ✔).
  - Den Gründer nicht als Gegner des Befunds darstellen – er wurde nicht danach gefragt.
  - Fragt er, ob HOLY reagiert hat: Energy gibt es im Shop seit 08–09/2026 nur ab 18 (Dossier 3.4 ✔ [12]). Die
    VKI-Kritik von 12/2024 nicht als heutigen Stand der Packung ausgeben.
  - Die Vergiftung nicht ausschmücken und HOLY keine Schuld zuweisen. Einzelheiten (4–7 Beutel „Apple Alligator“,
    Dossier 3.4 ✔ [28, 29]) nur auf Nachfrage nennen.
- **Belastbar:** ja

#### F19 – 160 mg, Gesundheit, Packung

**„Sind 160 mg Koffein viel – und ist HOLY jetzt gesund? Ihr sagt ja ‚gutes Gewissen‘. Und steht das Koffein nicht
sowieso auf der Packung?“**

- **Wer fragt wahrscheinlich:** Publikum (hoch bzw. mittel) · aus Q-09 und Q-15 (Packung auch in P-14)
- **Wer antwortet:** Elias (C), ergänzt von Lukas (B, nur bei der Nachfrage zu „Gesundheit“ auf Folie 07)
- **Antwort:**
  > Eine Portion HOLY Energy hat 160 mg Koffein, so viel wie zwei 250-ml-Dosen Red Bull; weil Energy rechtlich ein
  > Nahrungsergänzungsmittel ist, gilt die Koffein-Höchstmenge für Erfrischungsgetränke nicht. Ob HOLY gesund ist,
  > bewerten wir nicht, wir sind keine Ernährungsexperten: HOLY Energy hat laut Etikett kaum Zucker, ist aber mit
  > Süßstoffen gesüßt, und den hohen Koffeingehalt kritisieren Verbraucherschützer – genau diese Spannung zum „guten
  > Gewissen“ ist unsere Lücke 1 auf Folie 10. Der Gehalt steht auf dem Etikett, laut VKI standen die Warnhinweise
  > Ende 2024 aber nur hinten; wir meinen eine gut sichtbare Angabe vorn auf der Dose und in den Posts, nicht nur in den
  > Pflichtangaben. Das betrifft nur die Energy-Linie, die anderen Linien sind in der Regel koffeinfrei. [Vorher an
  > einer aktuellen Packung prüfen.]
- **Beleg:** Folie 11 Zeile 1 (index.html Z. 2533 „Koffein vs. gutes Gewissen“, Z. 2543 „Energy-Dose: 160 mg und
  „18+“ vorn“) und Rückfragen f11 (Z. 2618: „Steht der Koffeingehalt nicht schon auf der Packung?“, „Haben alle
  Produkte 160 mg Koffein?“); Folie 10 Lücke 1 (Daten Z. 2386–2395, Notiz Z. 2353); f07-Notiz Hinweise (Z. 1405:
  „Vorsicht bei Rückfragen zu ‚Gesundheit‘ … keine Gesundheitsaussage über das Produkt“) und B5-Notiz (Z. 3246);
  Dossier 3.1 Koffein je Linie ✔ [56–59] (Z. 283–291), 3.3 (Z. 324–328 Etikett Raspberry Raptor: 0,5 g Zucker,
  160 mg Koffein, Acesulfam K und Sucralose ✔ [55, 56]; Z. 332–334 zwei Dosen Red Bull ✔ [27], Nahrungsergänzungsmittel
  ohne Höchstmenge ✔ [72]), 3.4 (VKI 12/2024 „Warnhinweise nur hinten“ ✔ [27], VZ Niedersachsen ✔ [72],
  KONSUMENT/Stiftung Warentest ✔ [28, 29]), 8 S1.
- **Fallstricke:**
  - Nicht sagen: „gesund“ oder „ungesund“, „gefährlich“ oder „illegal“, „zuckerfrei = gesund“, „Süßstoffe sind
    schädlich“ (steht nicht im Dossier). Keine Rechtsprüfung: Dass keine Höchstmenge gilt, heißt nicht, dass etwas
    rechtswidrig ist.
  - Nicht sagen: „Auf der Packung steht es vorn nicht“, bevor eine aktuelle Packung geprüft ist (VKI-Stand 12/2024;
    FRAGE-Q-05).
  - Nicht sagen: „Alle HOLY-Produkte haben 160 mg.“ „In der Regel koffeinfrei“ nicht zu „koffeinfrei“ verkürzen:
    Iced Tea „Limette x Matcha x Minze“ ca. 35 mg, die Hydration-Matcha-Sorte ca. 14 mg, der Milkshake-Eiskaffee
    17 mg/100 ml (Dossier 3.1).
  - „HOLY ist zuckerfrei“ nicht pauschal für alle Linien sagen: Der Milkshake hat mit Milch laut HOLY 15 g Zucker
    (Dossier 3.3 ✔ [78, 79]).
  - HOLYs Werbeaussagen (Gewichtsverlust, Diabetiker, Dossier 3.4) nicht ohne Kontext zitieren; deren rechtliche
    Bewertung ist H.
  - Nachfrage zu „Gesundheit“ auf Folie 07 (Lukas): Das steht dort als Wert der Befragten – derzeit Beispieldaten –
    und ist keine Gesundheitsaussage über das Produkt. Nicht so tun, als hätten echte Befragte es schon genannt.
  - Nachfrage, ob 160 mg „viel“ sind: Laut VKI überschreiten sie bei Kindern unter 53 kg die EFSA-Einzeldosis
    (Dossier 3.4 ✔ [27]); eine eigene Bewertung für Erwachsene haben wir nicht.
- **Belastbar:** **TEILWEISE** – die aktuelle Packung ist ungeprüft.

#### F20 – Was zuerst, und was kostet das?

**„Was würdet ihr HOLY als Allererstes raten, wenn es nur eine eurer drei Empfehlungen umsetzen kann – und was kostet
das alles, lohnt sich das?“**

- **Wer fragt wahrscheinlich:** Publikum (hoch bzw. mittel), Prof. Stenger (mittel) · aus Q-10, Q-11 und P-14
- **Wer antwortet:** Elias (C)
- **Antwort:**
  > Wir würden mit Empfehlung 1 anfangen, Koffein offen zeigen: 160 mg und „18+“ gut sichtbar vorn auf die Energy-Dose
  > und in die Posts, dazu ein kurzes Erklärvideo. [Priorität in der Synthese am Do 22.10. bestätigen und mit
  > Begründung nennen.] Das Versprechen „gutes Gewissen“ ist nur glaubwürdig, wenn HOLY beim Koffein transparent ist,
  > und genau dort setzen Verbraucherschützer an – das ist unsere Bewertung, keine geprüfte Wirkung. Ein Budget haben
  > wir nicht berechnet, dafür fehlen uns die Daten; qualitativ eingeschätzt (unsere Hypothese) baut Empfehlung 2 auf
  > HOLYs offenem Creator-Partnerprogramm auf, Empfehlung 1 heißt Packung und Posts umgestalten, und Empfehlung 3 ist
  > vor allem eine Entscheidung über Claim und Profilnamen. Ob es sich lohnt, können wir nicht belegen; unser Argument
  > ist ein glaubwürdiger, einheitlicher Auftritt, nicht der Umsatz.
- **Beleg:** Folie 11 Empfehlungen (index.html Z. 2542–2543, 2567–2568, 2592–2593; Screenshot
  `praesentation/_test/account2-gegen-fr2/p2b/f11_s3.png`); f11-Notizen Schritt 1 (Z. 2613), Belege (Z. 2617: Kritik
  ✔ [27–29], Energy im Shop ab 18 ✔ [12]) und Rückfrage „Was kostet das?“ (Z. 2618: „Budget haben wir nicht bewertet;
  alle drei Empfehlungen nutzen vorhandene Kanäle“); Dossier 8 S1 (Z. 802–816, Empfehlungsrichtung H) und S5
  (Z. 866–867, H), 6.6 ✎ [90, 131] (offenes Creator-Partnerprogramm ab 18), 3.4 (VKI 12/2024 ✔ [27]; KONSUMENT und
  Stiftung Warentest 2026 ✔ [28, 29]), 3.1 (31 Energy-Sorten ✔).
- **Fallstricke:**
  - Keine Reihenfolge als beschlossen darstellen: Bisher ist keine festgelegt, Folie 11 nummeriert nur. Nicht drei
    verschiedene Prioritäten von drei Personen nennen (FRAGE-Q-06).
  - Nicht sagen: „Das senkt nachweislich die Kritik“ (H) oder „HOLY verschweigt das Koffein“ (das Etikett nennt es,
    Dossier 3.3 ✔ [55, 56]). Keine Rechtsbewertung.
  - Keine Eurobeträge, Prozentwerte, Kosten- oder Reichweitenschätzungen ohne Quelle; nicht „kostet nichts“, nicht
    „lohnt sich nachweislich“. Creator (Empfehlung 2) und eine neue Dosenvorderseite (Empfehlung 1) kosten Geld,
    beziffert haben wir das nicht; Empfehlung 1 betrifft die Dosen aller 31 Energy-Sorten (Dossier 3.1 ✔) und den
    Handel.
  - Den Notizsatz „alle drei nutzen vorhandene Kanäle“ nicht allein stehen lassen – für Dose und Creator greift er zu
    kurz (FRAGE-Q-04).
  - „18+“ ist keine neue Altersgrenze: Im Shop gibt es Energy seit 08–09/2026 nur ab 18 (Dossier 3.4 ✔ [12]); die
    Empfehlung macht das auf der Dose sichtbar.
  - Die Koffeinvergiftung nur auf Nachfrage und mit Quelle nennen (KONSUMENT/Stiftung Warentest 2026; Kontext: 4–7
    Beutel „Apple Alligator“, Dossier 3.4) – keine Schuldzuweisung an HOLY.
  - Die WiWo-Modellrechnung zu den 80 Cent pro Portion (Dossier 3.2 ✔ [16]) nicht als Marketingbudget umdeuten; nur
    als Modellrechnung und mit Quelle nennen.
- **Belastbar:** **TEILWEISE** (Priorität erst nach der Synthese) · Kosten und Nutzen: **NEIN** – nicht erhoben.

#### F21 – Woran merkt HOLY die Wirkung?

**„Woran würde HOLY in einem halben Jahr merken, dass eure Empfehlungen wirken?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch) · aus P-13
- **Wer antwortet:** Elias (C)
- **Antwort:**
  > Messgrößen haben wir noch nicht festgelegt [nach der Synthese die festgelegten Größen nennen]; naheliegend wären
  > Größen aus unseren eigenen Methoden. Für Empfehlung 1: ob Befragte in einer Wiederholung des Laddering „gutes
  > Gewissen“ von sich aus nennen. Für Empfehlung 2: der Anteil der Beiträge mit Alltags- oder Schichtanlass und deren
  > Engagement-Rate; dafür würden wir das Raster aus Backup B6 um eine Spalte „Anlass“ ergänzen. Für Empfehlung 3: die
  > Zahl paralleler Claims und Profilnamen, heute mindestens sechs Claims und drei Profilnamen auf den drei
  > Pflichtkanälen.
- **Beleg:** f11-Notizen (index.html Z. 2612–2618, keine Messgröße; Suche nach „Messgröße|KPI|Erfolgsmessung“ in
  index.html, folienentwuerfe.md, methoden.md, Dossier, dossier-buendel-b.md, arbeitsplan.md ohne Treffer);
  gruenderbefragung.md 4.5 B8 (Z. 212: „Zählen, ob Befragte ‚gutes Gewissen‘ von sich aus sagen“); B6-Raster (Z. 3366
  und Spalten in den Daten: Kanal, Format, Motiv, Farbwelt, Ton, Marke, Claim, Aufruf – keine Spalte Anlass); Formel
  der Engagement-Rate methoden.md §5 bzw. f09 Z. 1912; limbic-map.md §5 (Kurzvideos noch nicht auf Anlässe geprüft);
  f09b „Sechs Claims, zwei Farbwelten, drei Profilnamen“ (Z. 2139); Profilnamen f09-Daten (Z. 1983, 1991, 1999) =
  Dossier 6.1 ✔ [19, 122, 123]; Dossier 6.5 und S5 ✔ [1, 20, 31, 125]; FRAGE-P-07.
- **Fallstricke:**
  - Keine Zielwerte oder Prozentsteigerungen nennen, die nirgends belegt sind. Keine Umsatzwirkung versprechen.
  - Nicht so tun, als sei eine Erfolgsmessung schon geplant.
  - B6 hat heute keine Spalte „Anlass“, und Anlässe sind noch nicht codiert – es gibt also noch keinen Ausgangswert.
    Die Engagement-Raten auf Folie 9 sind Beispieldaten und taugen nicht als Ausgangswert.
  - Auch das Laddering zeigt noch Beispieldaten; deshalb nicht sagen, Befragte nennen „gutes Gewissen“ „weiterhin“.
  - „Mindestens sechs Claims“ ist unsere Zählung (Dossier 6.5, H), Stand 14.10.2026.
- **Belastbar:** **NEIN** – Messgrößen sind nicht festgelegt.

#### F22 – Was ist mit KI entstanden, was ist eure Leistung?

**„Habt ihr das alles mit KI gemacht – auch die Präsentation? Was ist eure eigene Leistung, und wie kann ich jeden
KI-Schritt nachvollziehen?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch), Publikum (hoch) · aus P-25 und Q-03
- **Wer antwortet:** Yannick (A)
- **Antwort:**
  > Ja, wir haben KI offen eingesetzt, vor allem Claude Code: für das Recherche-Dossier, für unsere Ausarbeitungen und
  > für den Bau dieser Web-Präsentation. Nachvollziehen lässt sich jeder Schritt im KI-Nachweis: Jeder Prompt an Claude
  > Code und jede Delegation an Unteragenten wird automatisch mit Zeitstempel protokolliert, die Aufträge der Workflows
  > liegen im Wortlaut bei, der Git-Verlauf zeigt, wann welche Datei entstand, und einen Auszug zeigt Backup B2
  > [KI-Nutzung in anderen Tools nur nennen, wenn sie aus den persönlichen Listen in Abschnitt 3 übertragen ist]. Das
  > Dossier haben weitere KI-Agenten gegengeprüft, dabei mussten 42 von 155 Befunden korrigiert werden. Unsere
  > Leistung sind die Entscheidungen [nur nennen, was bis dahin entschieden oder freigegeben ist, z. B. Marke,
  > Aufteilung, Persona-Richtung, Marktrolle, Markenkern, Empfehlungen], der Kontakt zum Gründer mit der
  > Gründerbefragung und die Statista-Daten über die Campuslizenz [echte Interviews, Social-Media-Stichprobe und
  > Rechnungen in Sheets nur nennen, wenn durchgeführt]. [Stand der eigenen Prüfung ehrlich nennen, zurzeit: „Unsere
  > eigene Prüfung der Belege läuft noch.“]
- **Beleg:** Folie 02 (KI-Kennzeichen je Methodenkarte, js/folien/02-vorgehen.js Z. 71–72; Fußzeile „KI =
  KI-gestützt, Ergebnisse geprüft“, index.html Z. 486); B1 (Z. 2861–2921, 155/42/32); B2 (Z. 2966–3016, Notiz „Unsere
  eigene Prüfung läuft noch“ Z. 2986); B7 „Technik“ (Z. 3487); Dossier 9.5 (KI-Unteragenten, jeder Bereich zweimal
  geprüft); ki-nachweis.md Abschnitt 4 „Wie dieser Nachweis entsteht“ (ab Z. 1910: Rohprotokoll per Hook,
  workflows/ mit Aufträgen im Wortlaut, Git-Verlauf), Abschnitt 3 (ab Z. 1880, „_noch keine Einträge_“), Abschnitt 1
  (52 × „☐ offen“, keiner abgehakt), Einträge 10/13 (Marke), 29 (Bündel verteilt), 43/44 (Statista-Dateien von
  Yannick), 53 (Kontakt Lukas), 64 (Workflow-Skript der Gründerbefragung im Repository geschwärzt);
  ki-nachweis-account-2.md (Bau der Web-Präsentation, Nummern A2-); arbeitsplan.md „Regeln für den KI-Nachweis“;
  aufgaben-im-detail.html Z. 124–129 („Prüfen, Entscheiden, Selbst erheben, Liefern“); FRAGE-P-01, FRAGE-Q-03,
  FRAGE-P-11.
- **Fallstricke:**
  - Nicht sagen: „KI nur für Tempo“ oder „nur zur Recherche“ – sie hat Dossier, Ausarbeitungen und Präsentation
    erstellt. Keinen Prozentanteil „von uns“ nennen (nicht erhoben). Nicht „die Präsentation haben wir selbst
    programmiert“. KI nicht als Faktenquelle darstellen.
  - Nicht behaupten, alle Einträge seien von der Gruppe geprüft: Stand 19.10. stehen alle 52 Einträge in
    ki-nachweis.md und alle 30 in ki-nachweis-account-2.md auf „☐ offen“.
  - „Gegengeprüft“ heißt beim Dossier: von KI-Agenten, nicht von uns – so auch die Fußzeile von Folie 02 („Ergebnisse
    geprüft“) und den B1-Titel („die Fakten prüfen wir selbst“) erklären, solange die eigene Prüfung offen ist.
  - „Jeder Prompt“ gilt für Claude Code; andere Tools stehen erst nach dem Übertrag der persönlichen Listen in
    Abschnitt 3 (derzeit leer) – nicht als vollständig ausgeben.
  - Freigaben wie Limbic Type oder Marktrolle nicht als entschieden darstellen, solange sie „Prüfung durch Yannick
    offen“ tragen. Echte Interviews und Social-Media-Stichprobe nicht als erledigt nennen, solange Folie 06–09
    Beispieldaten zeigen.
  - Den Bau der Präsentation dokumentiert ein zweiter Nachweis (ki-nachweis-account-2.md) – bei Nachfrage beide
    Dateien nennen.
  - Ein Workflow-Skript (Gründerbefragung) ist im Repository aus Datenschutzgründen teilweise geschwärzt
    (KI-Nachweis 64) – also nicht „alles öffentlich im Wortlaut“ sagen.
  - Ob Prof. Stenger besondere KI-Vorgaben macht, ist nicht geklärt (arbeitsplan.md, Offene Punkte) – nicht „mit dem
    Prof abgestimmt“ sagen.
- **Belastbar:** **TEILWEISE** – Prüfung durch die Gruppe und Abschnitt 3 des KI-Nachweises sind offen.

### Wahrscheinlichkeit mittel

#### F23 – Energy Drink oder Softdrink?

**„Ist HOLY für euch nun Energy Drink oder Softdrink? Auf Folie 3 greift HOLY den Softdrink-Markt an, eure Persona
trinkt Energy, und im Repertory Grid steht nur ‚Marke A‘. Ersetzt HOLY wirklich Cola und Red Bull?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (mittel), Publikum (mittel) · aus P-18 und Q-14
- **Wer antwortet:** Yannick (A), ergänzt von Lukas (B, Wettbewerbsset)
- **Antwort:**
  > Beides, aber bewusst getrennt: Im Selbstbild ist HOLY eine Softdrink-Marke („zuckerfreie Softdrinks zum
  > Selbermixen“), rechtlich ist HOLY Energy aber ein Nahrungsergänzungsmittel – eine Spannung, kein Fehler. Unsere
  > Persona steht für die heutige Kernkundschaft, und die ersetzt laut Mitgründer Jost (Podcast 2024) vor allem
  > Energy-Dosen wie Red Bull oder Monster; deshalb mischt unser Wettbewerbsset drei Energy-Marken, einen
  > Format-Zwilling und eine Softdrink-Referenz: Red Bull, Monster, Gönrgy, waterdrop und Coca-Cola Zero. [Nur so
  > sagen, wenn das Set so beschlossen und erhoben wurde; dann steht auf Folie 6 der echte Name statt „Marke A“. Sonst
  > ehrlich: „Folie 6 zeigt noch Beispieldaten, das Set ist ein Vorschlag aus unserem Dossier.“] [Nur auf die Frage
  > nach dem Ersatz:] Laut Gründer Mathias Horsch (Befragung 10/2026) nutzen 95 % der Kund:innen HOLY als vollen oder
  > teilweisen Ersatz für Red Bull, Monster, Coca-Cola oder Lipton Eistee – laut Gründer, Datengrundlage nicht
  > offengelegt. Unabhängige Daten haben wir nicht: In den Circana-Top-5 der Energy Drinks fehlt HOLY, vermutlich weil
  > Pulver dort nicht mitgezählt wird.
- **Beleg:** f03-Notiz, Rückfragen „Ist HOLY nun Energy Drink oder Softdrink?“ und „Woher kommt die Kundschaft – von
  Softdrinks oder von anderen Pulvern?“ (index.html Z. 617: Selbstbild ✔ [13, 15], Nahrungsergänzungsmittel
  ✔ [56, 72], Dossier S1); f04-Notiz, Rückfrage „Warum eine Energy-Persona …“ (Z. 845); persona-steckbrief.md §2
  Kaufverhalten („als Ersatz für Red Bull oder Monster“ [24, 00:09:32–00:10:07], Z. 59) und §3 Punkt 7 (Z. 110);
  Dossier 2.6 (Z. 223–225: Circana-Top-5 ✔ [26], „Pulver nicht gezählt“ = H), 3.1 (fünf Linien), 5.3 (Set-Vorschlag,
  H); f06-Daten „Marke A“ (Z. 1284); B4-Notiz Z. 3153 (Set laut Dossier 5.3, Vorschlag, H; Namen erst mit echten
  Bewertungen); dossier-buendel-b.md §10 Punkt 1 (Z. 422); gruenderbefragung.md §3 Frage 3 (Z. 117), §2.3 Regel 3
  (Z. 97) und K5 (Z. 167); folienentwuerfe.md Folie 3, Rückfragen 6 und 11, Folie 4, Rückfrage 5.
- **Fallstricke:**
  - „95 %“ nie ohne den Zusatz „laut Gründer, Datengrundlage nicht offengelegt“, nie als Ergebnis und nicht von sich
    aus nennen – nur als Antwort auf die Frage nach dem Ersatz (gruenderbefragung.md §2.3 Regel 3, K5).
  - Das Wettbewerbsset nicht als beschlossen darstellen, solange das nicht dokumentiert ist (dossier-buendel-b.md §10
    Punkt 1; FRAGE-P-09). „Marke A“ erst durch den echten Namen ersetzen, wenn echte Bewertungen vorliegen (B4-Notiz
    Z. 3153).
  - „Ersetzt vor allem Energy-Dosen“ stammt aus dem automatischen Transkript des Jost-Podcasts (persona-steckbrief.md
    §2, Zeitmarke 00:09:32–00:10:07) – sinngemäß sagen, nicht als geprüftes Zitat (Dossier 9.4).
  - Energy ist nur eine von fünf Linien (Dossier 3.1) – nicht so tun, als sei HOLY nur Energy. Horschs
    „Softdrink-Marke wie Red Bull“ nur als Selbstauskunft nennen („laut Gründer Mathias Horsch (Befragung
    10/2026)“).
  - Nicht sagen: „HOLY nimmt Red Bull Marktanteile ab“ (Red Bull ≈ 58 % ✔ [26], keine HOLY-Daten). „Circana zählt
    Pulver nicht“ ist eine Vermutung (H).
  - Jost (2024) und Horsch (2026) sind zwei Selbstauskünfte aus verschiedenen Jahren: keinen Widerspruch konstruieren
    und keine davon als Kundendaten ausgeben.
  - Nachfrage „Kommen die Kund:innen von anderen Pulvern?“: Laut Gründer Mathias Horsch (Befragung 10/2026) nur ein
    kleiner Teil aus dem Sirup- und Pulverbereich – nach Firmendaten, die er nicht vorlegt.
- **Belastbar:** **TEILWEISE** – Wettbewerbsset nicht als Beschluss dokumentiert, Ersatzangaben nur Selbstauskünfte.

#### F24 – Warum „Herausforderer“?

**„HOLY taucht in keiner Marktanteilsliste auf. Warum ‚Herausforderer‘ und nicht Nischenanbieter – und aus welcher
Quelle stammen die Rollen?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (mittel) · aus P-17
- **Wer antwortet:** Yannick (A)
- **Antwort:**
  > Nach Marktanteil im Energy-Drink-Handel wäre HOLY klein, also eher Spezialist, bei Kotler Nischenanbieter: In den
  > Circana-Top-5 fehlt die Marke, wobei Circana Pulver vermutlich gar nicht mitzählt. Wir ordnen aber nach dem
  > Verhalten ein, so unterscheidet Kotler die Rollen hinter dem Marktführer: HOLY greift laut Mitgründer Jost den
  > ganzen Softdrink-Markt an und nennt sich selbst „Challenger-Brand“, dazu kommen Handel und die erste große
  > TV-Kampagne. Die vier Rollen sind Kotlers Wettbewerbsrollen aus der Standardliteratur, „Herausforderer“ ist unsere
  > Einordnung, also eine Hypothese. [Stand des Abgleichs mit der Vorlesung nennen. Ordnet die Vorlesung nach
  > Marktanteil, gilt Variante B: „Spezialist“.]
- **Beleg:** f03: Rollen-Chips, Begründung und Metazeile (index.html Z. 587–592; Daten Z. 653–659), Notizen Z. 616,
  Rückfrage „… warum Herausforderer?“ Z. 617; Dossier 2.6 (✔ [13] „Challenger-Brands im europäischen
  Softdrink-Markt“, ✔ [26] Circana-Top-5 ohne HOLY, H: Pulver nicht in der Kategorie), 2.1 (✔ [6] erster Supermarkt,
  ✔ [18, 25] TV-Kampagne 01/2026), 4.1 (✔ [24] Jost); markenkompetenz.md §3 (Modellbegriffe MW, „Warum
  Herausforderer?“, „Was dagegen spricht“, Variante B) und §7 Offene Punkte (Rollendefinition nachlesen);
  folienentwuerfe.md Folie 3, Rückfrage 2; B7-Kasten Z. 3422 (Kotler fehlt noch); FRAGE-P-12.
- **Fallstricke:**
  - Keine Kotler-Auflage oder Seite nennen: Kotler fehlt in B7 (Kasten Z. 3422), die Rollendefinition ist
    Modellwissen (markenkompetenz.md §3). methoden.md nennt eine andere Rollenliste (mit „Pionier“) – nicht mischen.
  - Nicht sagen, HOLY sei „zu klein“ für die Top 5: Dass Circana Pulver nicht mitzählt, ist eine Hypothese
    (Dossier 2.6, H).
  - Keine Softdrink-Marktanteile nennen und keinen eigenen Anteil ausrechnen (170 Mio. € gegen das Circana-Volumen wären
    verschiedene Abgrenzungen, markenkompetenz.md §3).
  - „Challenger“ meint beim Gründer die Haltung („auch über Social Media“), nicht Kotlers Kriterium (Selbstauskunft,
    Horsch 2026, GB).
  - Red Bulls ≈ 58 % nur mit Abgrenzung und Quelle nennen (Energy Drinks DE, Circana MAT 08/2025, aus einem
    Schulungsheft, das mit Red Bull entstand).
  - Folgefrage zu Gönrgys „Platz 3“: Das ist eine Eigenangabe auf NielsenIQ-Basis ✔ [109], und Herausforderer kann es
    nach Kotler mehrere geben (Folienentwurf 3, Rückfrage 3).
- **Belastbar:** **TEILWEISE** – Kotler nicht im Quellenverzeichnis, Vorlesungsabgleich offen.

#### F25 – Unterschied zu waterdrop und Red Bull

**„Was unterscheidet HOLY eigentlich von waterdrop oder Red Bull?“**

- **Wer fragt wahrscheinlich:** Publikum (mittel) · aus Q-13
- **Wer antwortet:** Yannick (A), ergänzt von Lukas (B, Folie 06 und 08b)
- **Antwort:**
  > Red Bull ist trinkfertig aus der Dose und laut Circana mit rund 58 % des Umsatzes Marktführer im deutschen
  > Energy-Drink-Handel (Stand 08/2025); HOLY ist Pulver zum Selbermixen. Beim Koffein hat eine 250-ml-Dose Red Bull
  > 80 mg, eine Portion HOLY Energy 160 mg. waterdrop ist am ähnlichsten, ebenfalls ein Konzentrat für Wasser, aber als
  > Würfel, mit rund 90 mg Koffein beim Microenergy und mit Abo, das HOLY nicht hat; der Preis pro Portion ist online
  > fast gleich. Wie Befragte die Marken sehen, sollen Folie 6 und 8b zeigen – dort stehen derzeit Beispielwerte, für
  > Red Bull und waterdrop ist noch nichts erhoben.
- **Beleg:** Dossier 5.1 (Z. 537: Red Bull ≈ 58 %, Circana MAT 08/2025 ✔ [26]; Z. 557–559 Quellenkritik), 5.2 (Z. 565
  Red Bull 80 mg ✔ [26, 27, 68]; Z. 568 waterdrop Brausewürfel, ≈ 90 mg, Abo ✎ [7, 66, 116]), 5.3 (Z. 591 „gleiches
  Prinzip (Wasser + Konzentrat)“), 3.2 (Z. 301 HOLY 0,80 € ✔ [1]; Z. 308 waterdrop ≈ 0,83 € ✔ [66]), 2.5 (Z. 201 kein
  Abo ✔ [30, 48]); folienentwuerfe.md Folie 3, Rückfrage 8 (Z. 195); Fußzeile f08b „Wettbewerber: Beispielwerte,
  noch nicht erhoben“ (index.html Z. 1732); Notizen f06 („Marke A“ = W1, Vorschlag Red Bull, Z. 1235); README.md
  (Repository) Z. 30 (waterdrop auf der Markenliste); FRAGE-Q-07, FRAGE-Q-12.
- **Fallstricke:**
  - Nicht sagen, Aaker- oder Grid-Werte für Red Bull oder waterdrop seien Ergebnisse.
  - Nicht sagen: „HOLY ist viel günstiger als waterdrop“ – 0,80 € gelten nur für die 50er-Dose online, waterdrop
    liegt bei ≈ 0,83 €, im Handel kostet HOLY ≈ 1,00–1,33 € ✎.
  - Den Red-Bull-Anteil nur mit Quelle und Abgrenzung nennen (Circana MAT 08/2025; Schulungsheft, das mit Red Bull
    entstand; Dossier 5.1).
  - „waterdrop wirkt ruhiger“ ist H bzw. Modellwissen (Dossier 5.2).
  - Nicht sagen: „Laut Gründer kommt keine Kundschaft von waterdrop“ – das ist unbelegt (gruenderbefragung.md K4).
  - waterdrop steht auf Prof. Stengers Markenliste (README.md) – keine Aussagen über waterdrop, die nicht im Dossier
    stehen.
- **Belastbar:** **TEILWEISE** – die Sicht der Befragten auf Red Bull und waterdrop ist nicht erhoben.

#### F26 – Schichtdienst: mehr als eine Podcast-Aussage?

**„Euer zentrales Motiv ‚Schichtdienst‘ – stützt sich das auf mehr als eine Podcast-Aussage eines Mitgründers?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (mittel) · aus P-21
- **Wer antwortet:** Yannick (A)
- **Antwort:**
  > Für den Trinkanlass Schicht ist Mitgründer Jost im Podcast 2024 tatsächlich unser einziger direkter Beleg: HOLY
  > werde „in der Regel gar nicht beim Gaming“ getrunken, sondern zum Beispiel im Schichtdienst. Dass Schichtberufe zur
  > Kundschaft gehören, sagen mehrere Quellen: Mathias Horsch schon 2023 im Interview und ein Bericht von Trending
  > Topics 2024; auch laut Gründer Mathias Horsch (Befragung 10/2026) gehören sie dazu, dort aber nicht als
  > Trinkanlass.
  > Eine Randgruppe ist das nicht: Laut Eurostat arbeiten 17 Prozent der Männer zwischen 25 und 49 in Deutschland in
  > Schichten. Marcos Beruf ist eine Annahme; ob der Anlass trägt, zeigen erst die Bewertungen und Lukas’ Interviews.
  > [Ergebnis nennen, sobald es vorliegt.]
- **Beleg:** f04-Notizen (index.html Z. 841, 844), Rückfrage „Warum Schichtdienst …“ (Z. 845), f04-Daten „vor der
  Schicht“ (Z. 892); Dossier 4.1 (Horsch 2023 ✎ [4] „LKW-Fahrer, Nachtschichtarbeiter, Krankenpfleger,
  Büroarbeiter“; Jost ✔ [24]; Trending Topics ✔ [7]; HV Capital ✔ [14]), 9.4 (Jost-Zitat aus einem automatischen
  Transkript); persona-steckbrief.md §2 Soziodemografie (Eurostat lfsa_ewpshi, 2025: 17,0 %; Horsch 2026 GB „nicht
  als Trinkanlass“) und Quellen; limbic-map.md §5 („Marcos Motiv ist eine Hypothese“), §8; folienentwuerfe.md
  Folie 4, Rückfrage 4; FRAGE-P-13, FRAGE-P-14.
- **Fallstricke:**
  - Nicht sagen: „Die meisten Kund:innen arbeiten Schicht.“
  - „Vor der Schicht“ (Kaufverhalten auf Folie 4, Daten Z. 892) ist unsere Zuspitzung; Jost sagt „z. B. im
    Schichtdienst“.
  - Das Jost-Zitat nicht als wörtlich geprüft ausgeben, solange niemand das Audio gehört hat (Dossier 9.4).
  - Eurostat zeigt nur, dass Schichtarbeit verbreitet ist, nicht, dass HOLY-Kund:innen Schicht arbeiten.
  - Horsch 2023, HV Capital und die Befragung sind Selbstauskünfte und nennen Berufe, keinen Trinkanlass.
  - Folgefrage zu Folie 5: Dass der Auftritt die Schicht kaum zeigt, ist die Lücke (limbic-map.md §5), kein
    Widerspruch zur Persona.
- **Belastbar:** **TEILWEISE** – der Trinkanlass hängt an einer Quelle; Audio und Bewertungen sind noch nicht geprüft.

#### F27 – Werte von KI-Personas, Startpunkt der echten Leitern

**„Laddering soll persönliche Werte freilegen. Kann eine KI-Persona überhaupt Werte haben? Und mit welchem Attribut
habt ihr die echten Interviews begonnen, wenn die Attribute erst am 19.10. feststanden?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (mittel) · aus P-04
- **Wer antwortet:** Lukas (B)
- **Antwort:**
  > Als Daten zählen die Leitern der KI-Personas für uns nicht: Simulierte Befragte geben wieder, was in den
  > Trainingsdaten steht, deshalb behandeln wir ihre Leitern als Hypothesen und kennzeichnen sie in Backup B5 getrennt
  > von den echten Interviews. [Falls so durchgeführt:] Die echten Interviews lagen vor der Attribut-Auswertung,
  > deshalb haben wir dort bei zwei Unterscheidungen begonnen, die die Person selbst genannt und wichtig gefunden hat.
  > In die Value Map gehen diese Leitern nur ein, wenn ihr Startpunkt einem unserer Attribute entspricht, und auch dann
  > nur direkte Verbindungen mit mindestens zwei Nennungen; die übrigen stehen im Backup. [Echte Zahl der Leitern und
  > Abbrüche nennen.]
- **Beleg:** f07-Notiz, Rückfrage „Wie belastbar ist das mit 5 KI-Personas?“ und Cut-off ≥ 2 (index.html Z. 1405);
  B5, Legende KI-simuliert/Interview (Z. 3228), Notiz Schritt 1 Cut-off (Z. 3244) und Hinweise (Z. 3246); B1
  Spalte 03 (Z. 2912); dossier-buendel-b.md §5 Ablauf, Zeile 8–12 Min. „Laddering zu 2 Konstrukten, die die Person
  selbst wichtig findet“ (Z. 289) und „Warum das Laddering hier bei den eigenen Konstrukten startet“ (Z. 299–302), §3
  B2 Schritt 2 (Abbrüche zählen, Z. 176–178) und Schritt 4 (nur direkte Verbindungen, Cut-off z. B. ≥ 2, echte Leitern
  nur bei passendem Startkonstrukt, Z. 180–185), §7 (Z. 362–365); FRAGE-P-06.
- **Fallstricke:**
  - „Gesundheit“ nicht als Produktaussage darstellen: Es ist ein Wert der Befragten, keine Gesundheitsaussage über
    HOLY (Dossier S1).
  - Nicht sagen: „Nach Reynolds & Gutman beginnt man immer …“ – das ist Modellwissen ohne geprüfte Fundstelle
    (dossier-buendel-b.md Z. 300–302).
  - Nicht behaupten, die Abweichung von der Vorlage sei im Backup begründet, solange B5 dazu nichts enthält (heute
    steht dort kein solcher Satz) – vorher in B5 ergänzen. Auch f02 („Attribute als Startpunkte“) und f07 Schritt 0
    gelten für echte Leitern nur eingeschränkt.
  - Den Satz zur Value Map nur sagen, wenn die echten Leitern tatsächlich so gezählt wurden (Vorschlag in B2
    Schritt 4).
  - Beispielzahlen (7 Nennungen, T1–T8) nicht als Ergebnis nennen.
- **Belastbar:** **TEILWEISE** – Abweichung im Backup noch nicht begründet, echte Leitern nicht dokumentiert.

#### F28 – Ist „passt zur Tonalität“ vorprogrammiert?

**„Eure Tonalität ‚frech, rebellisch, verspielt‘ leitet ihr aus HOLYs Sprüchen und Doppeldeutigkeiten ab. Auf Folie 9b
prüft ihr dann, ob HOLYs Auftritt zu dieser Tonalität passt. Ist ‚passt‘ da nicht vorprogrammiert?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (mittel) · aus P-06
- **Wer antwortet:** Lukas (B), ergänzt von Elias (C)
- **Antwort:**
  > Für den jetzigen Stand stimmt der Einwand: Die Merkmale auf Folie 8b sind noch unsere Tonalitäts-Hypothese aus dem
  > Dossier, abgeleitet aus HOLYs eigener Kommunikation, und auch die Fit-Bewertung auf 9b ist als Hypothese markiert.
  > Als Prüfmaßstab taugt die Tonalität erst, wenn sie von Menschen kommt, die unsere Hypothese nicht kennen, also aus
  > dem Umfeld und den echten Interviews; die Analogien der Gruppe zählen nur eingeschränkt, weil wir die Hypothese
  > vorher kannten. [Ergebnis nennen: Wo sehen die Befragten HOLY anders als die Werbung?] Zum Vergleich dient das
  > Selbstbild: Laut Gründer Mathias Horsch (Befragung 10/2026) ist HOLY kundennah, spaßorientiert und innovativ;
  > „frech“ nannte er nicht, danach war aber auch nicht gefragt.
- **Beleg:** f08b, Fußzeile „Dossier Kap. 6.7 H“ (index.html Z. 1732) und Notiz „Merkmale und Beziehung stammen aus
  der Tonalitäts-Hypothese …“ (Z. 1745); f09b, Kicker „Fit des Markenbilds · Hypothese“ (Z. 2064), Fußzeile
  „Bewertung: eigene (H)“ (Z. 2072), Fit-Zeile „zur Tonalität – passt“ (Z. 2137); Dossier 6.7 (Persönlichkeit H,
  Ableitung „6.2–6.6“), Belege 6.2 ✔; dossier-buendel-b.md B3 Schritt 1 „Hypothese vorher bekannt“, Umfeld, Tierfrage
  in echten Interviews (Z. 210–215), §5 Ablauf 12–14 Min. (Z. 290); gruenderbefragung.md 2.1 („Nicht genannt heißt
  nicht abgelehnt“), 4.5 B13, 4.6; FRAGE-P-03.
- **Fallstricke:**
  - Nicht sagen: „Die Zielgruppe empfindet HOLY als frech“, solange nur die Dossier-Hypothese steht.
  - Den 09b-Sprechtext „Zum frechen Kumpel passt das“ (Schritt 1, Z. 2077) nicht als Befund vortragen, solange die
    Tonalität eine Hypothese ist.
  - Die Gründeraussage nicht als Lücke zwischen Selbst- und Fremdbild deuten („nicht genannt“ heißt nicht abgelehnt,
    gruenderbefragung.md 2.1) und nicht als unabhängigen Maßstab ausgeben – sie ist Innensicht (n = 1).
  - Die Analogien der Gruppe nicht als unvoreingenommen darstellen (dossier-buendel-b.md B3 Schritt 1).
  - Keine Ergebnisse von Folie 08 vorwegnehmen.
  - Bleibt es bei der Dossier-Hypothese, besser „plausibel (Hypothese)“ statt „passt“ sagen (FRAGE-P-03).
- **Belastbar:** **NEIN** – die Tonalität ist bisher nur die Dossier-Hypothese.

#### F29 – Messung nach Aaker?

**„Ist das eine Messung nach Aaker? Aakers Skala hat doch weit mehr Items. Und wer hat die Werte vergeben?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (mittel) · aus P-07
- **Wer antwortet:** Lukas (B)
- **Antwort:**
  > Nein, das ist eine vereinfachte Anwendung. Aakers Brand Personality Scale von 1997 verdichtet 42 Eigenschaften zu
  > 15 Facetten und fünf Dimensionen, wir schätzen direkt je Dimension auf einer Skala von 1 bis 5. Bewertet haben
  > [tatsächliche Bewertende nennen, z. B. „die Gruppe und drei Befragte, nur Menschen“]. Die Zuordnung der Merkmale
  > ist unsere Einordnung: „Selbstironisch“ unter Aufrichtigkeit ließe sich auch als Spannung lesen.
- **Beleg:** f08b-Notiz, Rückfragen (index.html Z. 1743) und Hintergrund „Zuordnung … eigene Einordnung“ sowie
  „Einschätzung der Gruppe und der Befragten aus Prompt P11“ (Z. 1745); Daten-Hinweis (Z. 1771); Kasten FOLIE 08b
  (Z. 1686–1689); Fußzeile „n = 8 – Beispieldaten, vereinfacht je Dimension“ (Z. 1732); dossier-buendel-b.md B3
  Schritt 1 (Z. 210–212) und Schritt 5 (Z. 220–223); B7 Aaker (1997) (Z. 3458); FRAGE-Q-07.
- **Fallstricke:**
  - Nicht sagen: „gemessen nach Aaker“.
  - Die deutschen Übertragungen (Hieronimus 2003, Mäder 2005) nicht zitieren – laut Notiz Modellwissen und ungeprüft.
  - Die Werte für Red Bull und waterdrop sind bisher nicht erhoben – nicht als Ergebnis nennen.
  - Die Gruppe kannte die Hypothese vorher (dossier-buendel-b.md B3).
  - Widerspruch klären, bevor jemand „nur Menschen“ sagt: f08b-Notiz (Z. 1745) und Daten-Hinweis (Z. 1771) sprechen
    noch von der „Einschätzung der Gruppe aus Prompt P11“, das Dossier Bündel B (B3 Schritt 5) hält die
    Aaker-Zuordnung aus P11 getrennt („KI-gestützt (Tool)“). Sind P11-Werte eingeflossen, das offen sagen.
- **Belastbar:** **TEILWEISE** – wer bewertet hat, ist offen.

#### F30 – Ist der Raptor ein Schlüsselbild?

**„Ist ein Maskottchen schon ein Schlüsselbild im Sinne von Kroeber-Riel? Ihr kritisiert die Bildwelt als zu jung
und empfehlt dann den Comic-Raptor als durchgängiges Schlüsselbild – wie passt das zusammen?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (mittel) · aus P-09 und V-06
- **Wer antwortet:** Elias (C)
- **Antwort:**
  > Nicht automatisch: Ein Schlüsselbild ist ein wiederkehrendes Motiv, das die Positionierung bildlich trägt; ein
  > Maskottchen sorgt zunächst für Wiedererkennung und wird erst zum Schlüsselbild, wenn es für einen
  > Positionierungsinhalt steht, bei uns für den lauten Herausforderer. Deshalb steht auf Folie 9 noch ein
  > Fragezeichen: Ob der Raptor über alle drei Kanäle trägt, entscheidet unsere Stichprobe. [Ergebnis nennen.]
  > Kritisch ist nicht der Comic an sich, sondern eine Bildwelt, die laut Presse für eine jüngere Zielgruppe gedacht
  > ist, während die Kundschaft laut Mitgründer Jost meist 25 bis 40 ist. Deshalb soll der Raptor erwachsener
  > inszeniert werden: kein Kinder-Comic, für die Energy-Linie keine kindlichen Frucht-Comics.
- **Beleg:** f09: Titel mit „?“ (index.html Z. 1900; Screenshot
  `praesentation/_test/account2-gegen-fr2/p2b/f09_s2.png`, Kasten „Schlüsselbild?“), Notizen Schritt 2 und
  Hintergrund (Z. 1935–1936), Kasten f09 Z. 1814–1815 (Titel erst nach der Codierung); f11-Rückfrage „Verstärkt der
  Raptor nicht die zu junge Bildwelt?“ (Z. 2618) und Schritt 3 (Z. 2615); f10 Lücke 2 (Daten Z. 2396–2404) mit Belegen
  Z. 2357 (Design „für eine jüngere Zielgruppe gedacht“ ✔ [7], Kundschaft 25–40 ✔ [24]); methoden.md §5 Punkt 4;
  Dossier 6.3 ✔ [54, 71] (Maskottchen Raptor, Treue-Level), 6.4 H (Kandidaten Raptor und Dose-Shaker-Stillleben),
  8 S2 und S5 (Empfehlungsrichtungen H), Anhang B [24] (automatisches Transkript); limbic-map.md §6 Konsequenz 1
  (Z. 435); B7 Kroeber-Riel (1993) (Z. 3464).
- **Fallstricke:**
  - Nicht sagen: „Esch unterscheidet Präsenzsignale und Schlüsselbilder“, als wäre das eine geprüfte Literaturstelle –
    laut f09-Notiz unsicheres Modellwissen; das gilt auch für den Satz zur Wiedererkennung.
  - Kroeber-Riel nicht wörtlich zitieren und keine Seitenzahl nennen: Der Begriff stammt laut f09-Notiz aus dem
    Modellwissen und ist mit der Vorlesung abzugleichen.
  - Nicht sagen: „Der Raptor ist das Schlüsselbild“, solange die Stichprobe fehlt. Dass der Raptor für den
    Herausforderer steht, ist unsere Deutung (H).
  - Achtung, Widerspruch im eigenen Sprechtext: Folie 11, Schritt 3 (Z. 2615) sagt „Der Raptor bleibt durchgängiges
    Schlüsselbild“. Bis zum Ergebnis der Stichprobe dort mit Elias „soll durchgängiges Schlüsselbild werden“
    abstimmen, sonst widerspricht die Antwort der eigenen Folie.
  - Empfehlung 3 ist eine Hypothese (Dossier S5, H). Trägt der Raptor in der Stichprobe nicht, bleiben von
    Empfehlung 3 die Claim-Hierarchie und das Vereinheitlichen der Namen (Dossier S5, H) – den Raptor dann nicht
    verteidigen und die Umformulierung in der Synthese (Do 22.10.) festlegen.
  - Nicht behaupten, HOLY richte sich an Kinder: Das ist die Sicht der Verbraucherschützer [27, 28, 82].
  - Fragt er nach Alternativen: Der zweite Kandidat ist das Dose-Shaker-Stillleben, es zeigt eher das „gute
    Gewissen“ (Dossier 6.4, H; f09-Notiz).
  - Die Angabe 25–40 stammt aus einem automatischen Transkript ([24]) und ist keine Kundendatenauswertung.
- **Belastbar:** **TEILWEISE** – die Stichprobe zum Raptor fehlt.

#### F31 – Warum „Bildwelt zu jung“?

**„Lücke 2, ‚Bildwelt zu jung‘: HOLY macht laut eigenen Angaben über 170 Millionen Euro Umsatz – mit genau dieser
Bildwelt. Woher wisst ihr, dass das ein Problem ist? Mir gefallen die Comic-Tiere.“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (mittel), Publikum (mittel) · aus P-12 und Q-16
- **Wer antwortet:** Elias (C), ergänzt von Yannick (A; Persona und Limbic Map)
- **Antwort:**
  > Gefallen ist nicht unser Maßstab, sondern ob die Bildwelt zur Kundschaft passt, und „zu jung“ ist dabei unsere
  > Bewertung; dass die Bildwelt Kund:innen kostet, haben wir nicht erhoben und behaupten wir auch nicht. Die Lücke ist
  > eine Abweichung: Die Kernkundschaft ist laut Mitgründer Jost meist 25 bis 40, viele im Schichtdienst, das Design
  > ist laut Presse „für eine jüngere Zielgruppe gedacht“, und in den belegten Bildmotiven kommt der Schichtalltag
  > laut unserer Limbic Map nicht vor; die Stichprobe der Kurzvideos steht noch aus. Das Risiko liegt bei der
  > Glaubwürdigkeit: Verbraucherschützer sehen eine Ansprache von Kindern und Jugendlichen, und über Altersgrenzen für
  > Energy Drinks wird politisch diskutiert. Den Comic-Look wollen wir deshalb nicht abschaffen: Der Raptor soll
  > erwachsener inszeniert werden, für Energy ohne kindliche Frucht-Comics, und daneben zeigen Creator aus Pflege,
  > Schicht und Sport die echte Kundschaft.
- **Beleg:** f09b-Daten „fit“ → „zur Persona: teilweise – Stimulanz passt, Bildwelt zu jung.“ (index.html Z. 2138)
  und Notiz Schritt 2 (Z. 2078); f10 Lücke 2 „Bildwelt zu jung“ (Daten Z. 2399), Notiz Schritt 8 (Z. 2353) und Belege
  (Z. 2357: „Lücke 2 – S2/S3 … ✔ [7] … ✔ [82]. Die Lücken selbst sind unsere Bewertung (H)“); f11-Notizen Schritt 2/3
  (Z. 2614–2615), Belege (Z. 2617) und Rückfrage „Verstärkt der Raptor nicht die zu junge Bildwelt?“ (Z. 2618);
  Dossier Kap. 1 Kernerkenntnis 4 ✔ [7, 24], 4.1 (Jost [24], Trending Topics [7]), 6.3 ✔ [8] („auffälliges und
  knalliges Design“, „vor allem junge Kunden“), 3.4 ✔ [27, 82], 8 S2 ✔ [27, 28, 82] und Altersgrenzen ✔ [152–154],
  S3 ✔ [24], S5 (H); Umsatz: Dossier 2.4 ✎ [13, 16] (Selbstauskunft); limbic-map.md §5 (Urteil, Lücke beim Anlass,
  Z. 394–400).
- **Fallstricke:**
  - Nicht sagen: „Die Kundschaft fühlt sich nicht angesprochen“ – das ist nicht erhoben.
  - Den Umsatz nicht bestätigen: „+170M (2025)“ ist eine Angabe des Unternehmens (Press Kit, WiWo „laut eigenen
    Angaben“); ein unabhängiger Beleg fehlt (Dossier 2.4).
  - „25–40“ ist eine Aussage des Mitgründers (Podcast 2024, automatisches Transkript [24]), keine Auswertung von
    Kundendaten. Laut Gründer Mathias Horsch (Befragung 10/2026) ist die Zielgruppe 18 bis 55, Männer und Frauen
    (Selbstauskunft) – das ist das Ziel, 25–40 die heutige Kundschaft, also kein Widerspruch.
  - „Zu jung“ ist unsere Bewertung (H), die Limbic Map eine Hypothese. „Kommt nicht vor“ gilt nur für die vier
    belegten Motive (Dossier 6.4); die Kurzvideos sind noch nicht auf Anlässe geprüft (limbic-map.md §5).
  - Nicht sagen: „HOLY richtet sich an Kinder“ oder „HOLY zielt auf Kinder“ – das ist die Kritik der
    Verbraucherschützer (VKI [27, 28], VZ Sachsen-Anhalt [82]), und Energy gibt es im Shop nur ab 18 (✔ [12]).
  - Die Politik nur allgemein nennen: Die Bundesrats-Initiative für eine Altersgrenze 16 hat keinen Beschluss, der
    Bundestagsausschuss empfahl die Ablehnung eines Antrags (Dossier S2 ✔ [152–154]). Nicht sagen: „Ein Verbot kommt.“
  - „Für eine jüngere Zielgruppe gedacht“ stammt aus dem Presseartikel von Trending Topics vom 21.08.2024 [7], nicht
    aus der Trending-Topics-Anzeige vom 20.08.2024 [160].
  - Die Motivanteile auf Folie 09 („17 von 50“, „am häufigsten die Comic-Tiere“) sind Beispieldaten – nicht als Befund
    nennen.
  - Weder „Comic ist schlecht“ noch „alle Comic-Tiere bleiben“ sagen; „Der Raptor bleibt Schlüsselbild“ erst nach der
    Stichprobe (siehe F30).
- **Belastbar:** **TEILWEISE** – die Abweichung ist belegt, die Stichprobe der Kurzvideos fehlt.

#### F32 – Warum ein „Bruch“?

**„Mehrere Claims und Kampagnen sind doch normal. Warum nennt ihr das einen ‚Bruch‘?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (mittel) · aus V-09
- **Wer antwortet:** Elias (C); Nachfrage zur Claim-Wahl auf Folie 03: Yannick (A)
- **Antwort:**
  > Es geht nicht um einzelne Kampagnen, sondern um fehlende Ordnung: Mindestens sechs Claims laufen parallel, die
  > Profilnamen unterscheiden sich je Kanal, und der ruhige Creme-Pastell-Shop steht neben lauten Comic-Verpackungen.
  > Wer HOLY auf Instagram, YouTube und im Shop sieht, bekommt kein einheitliches Bild. Die einzelnen Befunde sind im
  > Dossier belegt, „Bruch“ ist unsere Bewertung. Deshalb schlagen wir eine Hierarchie vor: Dachclaim „Die Softdrink
  > Revolution“, darunter das Versprechen „Geiler Geschmack mit gutem Gewissen“, dazu ein Profilname auf allen Kanälen.
- **Beleg:** Dossier Kap. 8 S5 Z. 858–867 (Befund ✔ [1, 20, 31, 125]; Empfehlung Claim-Hierarchie, Namen
  vereinheitlichen: H), Kap. 6.5 Z. 677–688 (sechs Claims, jeder ✔; der Satz „Mindestens sechs Claims laufen parallel
  …“ trägt H), Kap. 6.1 Z. 613–622 (Profilnamen je Kanal ✔); index.html f09b: Fit „über die Kanäle: bruch“ Z. 2139,
  Sprechtext Schritt 3 Z. 2079, Fußzeile „Bewertung: eigene (H)“ Z. 2072; f11: Zeile 3 „Bruch · Folie 09b“
  Z. 2578–2599, Sprechtext Schritt 3 Z. 2615, Belege Z. 2617; markenkompetenz.md Z. 96–111 (Claim-Entscheidung
  Folie 03; Dachclaim → Versprechen).
- **Fallstricke:**
  - „Mindestens sechs“ sagen: Auf f09b (Z. 2139) und f11 (Z. 2583) steht nur „Sechs Claims“, der Sprechtext sagt
    „mindestens sechs“ (Z. 2079). Dass alle sechs gleichzeitig laufen, ist in Dossier 6.5 Z. 688 und in
    markenkompetenz.md Z. 131 als Hypothese (H) markiert.
  - Keine Zahl der Profilnamen ohne Bezug nennen: f09b sagt „drei“ (die drei Pflichtkanäle, siehe F21), Dossier S5
    Z. 860–861 nennt vier („HOLY Squad“, „HOLY Softdrinks“, „HOLY®“, „HOLY“; „HOLY Softdrinks“ ist TikTok, Dossier
    6.1).
  - Nachfrage „Warum nicht das Versprechen als Dachclaim? Auf Folie 03 ist es doch euer Claim“ (Yannick): Auf
    Folie 03 steht das Versprechen, weil es die Kompetenz nennt und am durchgängigsten genutzt wird
    (markenkompetenz.md Z. 96–103). „Die Softdrink Revolution“ ist der Claim, den HOLY selbst auf der obersten Ebene
    führt: Seitentitel, Footer, TikTok, YouTube (Dossier 6.5 ✔ [1, 8]). Ehrlich einräumen: Der Dachclaim hieß 2025
    noch „Energy Drink Revolution“ und wird uneinheitlich geschrieben (markenkompetenz.md Z. 108–110).
  - Die Reihenfolge Dachclaim → Versprechen ist unser Vorschlag (S5, H), keine Lehrbuchregel.
  - Keine Aussage über die Reichweite der TV-Kampagne machen: Die YouTube-Aufrufe sind nur ein Indiz (S5 Z. 863–865,
    H).
- **Belastbar:** ja

#### F33 – Warum kein TikTok?

**„Warum kommt TikTok bei euch nicht vor – laut Persona-Folie sind die Leute doch genau da?“**

- **Wer fragt wahrscheinlich:** Publikum (mittel) · aus Q-17
- **Wer antwortet:** Elias (C), ergänzt von Yannick (A, Folie 04)
- **Antwort:**
  > Die Aufgabe gibt für die Kommunikationsanalyse Instagram, Facebook und YouTube vor. Deshalb haben wir TikTok nicht
  > eigens ausgewertet und setzen unsere Empfehlungen auf diesen Kanälen an. TikTok wäre die naheliegende Erweiterung:
  > HOLY hat dort rund 270.000 Follower (Stand 14. Oktober). Die Balken auf Folie 4 sind allerdings Kategoriedaten
  > über Energy-Drink-Konsument:innen allgemein, nicht über HOLY-Kund:innen; dort liegt TikTok mit 58 gegenüber
  > 41 Prozent am weitesten über dem Schnitt aller Befragten.
- **Beleg:** f11-Notizen, Rückfrage „Warum nicht TikTok?“ (index.html Z. 2618: „Die Aufgabe nennt Instagram,
  Facebook und YouTube; TikTok (≈ 270.000 Follower, Dossier Kap. 1 ✔ [20]) wäre die naheliegende Erweiterung“),
  Kanal-Chips f11 (Z. 2540–2590); f04-Notiz Schritt 3 (Z. 842: „TikTok liegt am weitesten über dem Schnitt …
  Kategoriedaten, nicht HOLY“) und Daten „Mediennutzung“ (Z. 900: TikTok 58, Schnitt 41; Quelle „Kategorie Energy
  Drinks · Statista CI 2025“); B3-Daten (Z. 3103); persona-daten.md Kernergebnisse „Social Media“ (Z. 25) und Quellen
  (Statista CI 2025, 18–64 J., n = 1.583); Dossier Kap. 1 und 6.1 ✔ [20] (≈ 270.400, Stand 14.10.2026), Einleitung
  Kap. 6 (Pflichtkanäle), 9.3 (neu ablesen); README.md der Fallstudie Z. 17 („Kommunikationsanalyse zum Markenbild
  (Instagram, Facebook, YouTube)“); aufgaben-im-detail.html Z. 459.
- **Fallstricke:**
  - Nicht sagen: „TikTok ist unwichtig.“
  - Die Statista-Werte (CI 2025, Energy-Drink-Konsument:innen 18–64 J., n = 1.583) beschreiben die Kategorie, nicht
    HOLY-Kund:innen oder HOLY-Follower.
  - Nicht mit den älteren ARD/ZDF-Werten (14–29 J., TikTok 50 % [102]) vermischen, die nicht mehr auf Folie 4 stehen.
  - Die Follower-Zahl hat den Stand 14.10.2026 (≈ 270.400 [20]) und ist am 26.10. neu abzulesen (Dossier 9.3).
  - Nicht behaupten, wir hätten TikTok-Beiträge ausgewertet – wir haben nur die Profildaten (Dossier 6.1).
  - Falls nachgefragt: Profilname „HOLY Softdrinks“ und eine TikTok-Bio ohne Syrup sind im Dossier Belege für den
    zersplitterten Auftritt (S5 ✔ [20]).
- **Belastbar:** ja

#### F34 – Datenschutz bei der KI-Verarbeitung

**„Ihr habt Sprachnachrichten des Gründers und Interviews mit KI-Tools verarbeitet. War das datenschutzrechtlich in
Ordnung?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (mittel) · aus V-04
- **Wer antwortet:** Lukas (B, Kontakt und Interviews), ergänzt von Yannick (A, KI-Nachweis)
- **Antwort:**
  > Gründer Mathias Horsch hat der Abschrift und Auswertung seiner Sprachnachrichten mit KI zugestimmt und Namen,
  > Paraphrasen und kurze Zitate für Präsentation und Repository freigegeben. Die Spracherkennung lief lokal in der
  > Arbeitsumgebung unseres KI-Werkzeugs, ohne weiteren Dienst. Das Transkript liegt nur in unserem Gruppenordner, die
  > Original-Audiodateien hat Lukas, und die Kopien in der KI-Sitzung sind gelöscht. Für die Kurzinterviews gilt
  > unsere Regel nach der KI-Richtlinie der HSKL, Nr. 6: Einwilligung vorher, Notizen ohne Namen, personenbezogene
  > Daten nur mit Einwilligung in externe KI-Tools. [Nur sagen, wenn die Interviews so geführt wurden.]
- **Beleg:** gruenderbefragung.md Kopf („Freigabe“, „Herkunft“, Z. 10–20) und §2.3 Nr. 5 „Aufbewahrung“
  (Z. 101–103); KI-Nachweis Nr. 59/60 (Rückfrage zur Zustimmung, Antwort „Ja, er hat zugestimmt“; Spracherkennung
  „läuft lokal im Container. Die Audiodaten gehen an keinen weiteren Dienst“) und Nr. 67 (Freigabe „Präsentation +
  Repository“); arbeitsplan.md „Regeln für den KI-Nachweis“ (Z. 89–90, KI-Richtlinie der HSKL, Nr. 6);
  dossier-buendel-b.md §5 „Einwilligung und Datenschutz“ (Z. 304–320); B1 Spalte 03 „KI-Abschrift mit Einwilligung“
  (index.html Z. 2920).
- **Fallstricke:**
  - Die Einwilligungen der Interviewpartner gehören laut dossier-buendel-b.md §5 in den Gruppenordner, nicht ins
    Repository. Die Checkliste (Z. 444) ist offen – vor dem Vortrag klären, ob Interviews stattfanden und
    Einwilligungen vorliegen; nicht als erledigt darstellen.
  - Zustimmung und Freigabe des Gründers sind im Repository nur als Angabe von Yannick vermerkt (KI-Nachweis 60, 67) –
    wer antwortet, muss wissen, wie Horsch zugestimmt hat. Nicht „ausdrücklich zugestimmt“ sagen, das steht so nicht
    in den Unterlagen.
  - Nicht sagen: „Alles lief lokal“ – Bereinigung, Zuordnung und Auswertung der Abschrift liefen mit einem KI-Werkzeug
    (mit Zustimmung), und auch die Spracherkennung lief nicht auf einem eigenen Rechner, sondern in dessen
    Arbeitsumgebung (KI-Nachweis 60).
  - Keine Rechtsprüfung und kein „DSGVO-konform“ behaupten – das Repository dokumentiert keine.
  - Ob der Prof besondere KI-Vorgaben hat, ist offen (arbeitsplan.md Z. 103–107; FRAGE-P-11) – nicht „mit dem Prof
    abgestimmt“ sagen.
  - Keine Audiodatei anbieten. Ablage vorher klären: Der Kopf von gruenderbefragung.md sagt „Audiodateien bleiben im
    Gruppenordner“, §2.3 sagt „Original-Audiodateien hat Lukas“.
- **Belastbar:** **TEILWEISE** – Interviews und Einwilligungen nicht dokumentiert, Ablage der Audios uneinheitlich.

#### F35 – Größte Schwächen

**„Wo seht ihr selbst die größten Schwächen eurer Analyse, und was würdet ihr beim nächsten Mal anders machen?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (mittel) · aus V-07
- **Wer antwortet:** Lukas (B), ergänzt von Yannick und Elias mit je einem Satz
- **Antwort:**
  > Unsere Grenzen stehen in Backup B1: Simulierte Befragte spiegeln Trainingsdaten, die Stichprobe ist klein und
  > nicht repräsentativ, und die Gründerbefragung ist eine Selbstauskunft mit n = 1. Dazu beschreiben die
  > Persona-Zahlen Energy-Drink-Konsument:innen allgemein, nicht HOLY-Kund:innen, weil HOLY keine Kundendaten
  > veröffentlicht. [Je Person ein Satz, was sie beim nächsten Mal anders macht – aus eigener Erfahrung, nicht
  > vorformuliert.]
- **Beleg:** B1 Spalte 03 „Grenzen“ (index.html Z. 2908–2921); B1-Notizen („Die echten Kurzinterviews stehen noch
  aus“, Z. 2934); Fußzeile Folie 04 „Kategorie Energy Drinks, nicht HOLY“ (Z. 831); persona-daten.md Z. 10; Dossier
  4.1 „Lücke: HOLY veröffentlicht keine Kundendaten“ (holy-recherche.md Z. 449); gruenderbefragung.md 2.1 (keine
  Rückfragen möglich); reflexion-vorlage.md Frage 5 (Z. 17 und Z. 36).
- **Fallstricke:**
  - Nicht sagen: „nichts ungeprüft übernommen“, solange die Prüfung durch die Gruppe offen ist. Genau diese Zeile
    steht sichtbar in B1 (Z. 2914) – beim Zeigen von B1 also nicht vorlesen (FRAGE-P-01).
  - Die Zahl der echten Interviews nur nennen, wenn sie stattgefunden haben: Laut B1-Notizen ist „3“ nur die geplante
    Zahl.
  - Keine Schuld an Teammitglieder verteilen. Die Antwort sollte zur eigenen Einzelreflexion passen (VOLL-10).
  - Nicht „repräsentativ“ oder „signifikant“ sagen.
- **Belastbar:** **TEILWEISE** – der persönliche Satz je Person fehlt noch.

---

## Fragen ohne belastbare Antwort – bis zur Generalprobe klären

Ohne belastbare Antwort sind heute **F12** (echte Befragte), **F21** (Messgrößen), **F28** (Tonalität als
Prüfmaßstab) und bei **F20** der Teil Kosten/Nutzen. Die übrigen Punkte machen „teilweise“ belastbare Antworten fest.
Termine nach dem Tagesplan in `arbeitsplan.md`; Kennungen = Befunde der Prüfung auf Vortragsreife (Blickwinkel
„Rückfragen“).

| Frage | Was fehlt / was die Gruppe klären sollte | Wer | Bis | Grundlage |
|---|---|---|---|---|
| F12, F14, F27, F29 | Zahl echter Kurzinterviews (mit Datum und Einwilligung) melden; ob P8, P9 und P11 gelaufen sind; KI-simuliert und echt getrennt auswerten; tatsächliche Aufteilung in die Fußzeilen von f06, f07, f08b, B4, B5 und in B1/B2. Gibt es keine Interviews: überall „nur KI-simuliert (n = 5)“ und das offen sagen. | Lukas (Einbau: Account 1) | Meldung Di 20.10., echte Werte Fr 23.10. | FRAGE-Q-01, FRAGE-P-04, VOLL-01 |
| F14 | Schwelle für die Differenzierung (≥ 1 oder ≥ 1,5 Skalenpunkte) mit Datum festlegen und in B4 vermerken; zeigen, ob die Auswahl auch mit der anderen Schwelle hält. | Lukas | Di 20.10. | FRAGE-P-05 |
| F27 | In B5 und f07 begründen, dass die echten Leitern bei den eigenen Konstrukten der Befragten starteten; Nennungen von „gutes Gewissen“ in echten Leitern getrennt von den KI-Leitern zählen. | Lukas (Einbau: Account 1) | Fr 23.10. | FRAGE-P-06 |
| F28 | Tonalität aus Befragtenaussagen ableiten (Gruppe ohne KI, Umfeld, Tierfrage der Interviews), P11 getrennt; bleibt es bei der Dossier-Hypothese, auf 9b „plausibel (Hypothese)“ statt „passt“. | Lukas, dann Elias | Tonalität Mi 21.10., Fit-Zeile Synthese Do 22.10. | FRAGE-P-03 |
| F29 | Klären, wer die Aaker-Werte vergeben hat (nur Menschen oder auch P11); Werte für Red Bull und waterdrop erheben oder die Einträge löschen. | Lukas | Fr 23.10. | FRAGE-Q-07 |
| F20, F21 | Je Empfehlung eine Messgröße aus den eigenen Methoden; Priorität der Empfehlungen mit Begründung; qualitative Einordnung des Aufwands (ohne Zahlen, als H) in die f11-Notizen. | Elias (Gruppenentscheidung) | Synthese Do 22.10. | FRAGE-P-07, FRAGE-Q-06, FRAGE-Q-04 |
| F19, F20 | Aktuelle HOLY-Energy-Packung prüfen (Vorder- und Rückseite, mit Datum); Ergebnis mit [27] in die f11-Notiz; zeigt die Packung Koffein schon vorn, Empfehlung 1 auf Posts und Creator-Videos zuspitzen. | Elias | Fr 23.10. | FRAGE-P-16, FRAGE-Q-05 |
| F16 | Stichprobe erheben (15–20 Beiträge je Pflichtkanal), sagen ob P12 genutzt wurde; Formel „Follower bzw. Abos“; Follower am 26.10. neu ablesen. | Elias | Fr 23.10. | FRAGE-P-08 |
| F30, F31 | Ergebnis der Stichprobe zum Raptor; bis dahin den f11-Sprechtext Schritt 3 („bleibt durchgängiges Schlüsselbild“) abstimmen. Gemeinsamen Wortlaut „frecher“ (f11) gegen „Humor aus der Schicht statt Doppeldeutigkeit“ (f05) festlegen. | Elias, Yannick | Synthese Do 22.10. | FRAGE-P-15 |
| F15, F17 | Regel B8 anwenden: Der Kern gilt als Selbst- und Fremdbild nur, wenn echte Befragte „gutes Gewissen“ von sich aus nennen; sonst als Selbstbild kennzeichnen. Kern-Satz zwischen Elias und Yannick abstimmen. | Yannick, Elias | Synthese Do 22.10. | FRAGE-Q-02, FRAGE-P-18 |
| F07, F10, F24, F30 | Vorlesungsfolien besorgen und abgleichen (Markensteuerrad, Limbic Map, Repertory Grid, Laddering, Tonalität, Schlüsselbild, Wettbewerbsrollen); Kotler in B7 aufnehmen; Esch nach Möglichkeit in der Bibliothek einsehen. | Gruppe (Kotler: Yannick) | festlegen Di 20.10., Abgleich Do 22.10., B7 Fr 23.10. | FRAGE-P-02, FRAGE-P-12 |
| F05, F22, F35 | Tragende Belege selbst öffnen und im KI-Nachweis abhaken – sonst B1-Titel und f02-Fußzeile umformulieren; Abschnitt 3 des KI-Nachweises aus den persönlichen KI-Listen füllen. | Yannick (Einbau: Account 1) | Sa 24.10. | FRAGE-P-01, FRAGE-Q-03, FRAGE-P-10 |
| F10, F26 | Die Jost-Stellen an den Zeitmarken im Audio anhören; 20–30 Kundenbewertungen auswerten (Anlass Schicht; Hedonisten oder Offene). | Yannick | Do 22.10. | FRAGE-P-13 |
| F23 | Rahmen (Softdrink-Anspruch, Energy-Kernkundschaft) und Wettbewerbsset W1–W5 als Gruppenbeschluss mit Datum festhalten. | Gruppe (alle) | Di 20.10. | FRAGE-P-09 |
| F04, F34 | Versanddatum der Sprachnachrichten (17. oder 18.10.) bestätigen; Ablage der Audiodateien einheitlich festhalten; Einwilligungen der Interviewten. | Lukas | Do 22.10. | FRAGE-Q-13; Gegenprüfung zu V-04 |
| F22, F34 | Bei Prof. Stenger nachfragen, ob besondere KI-Vorgaben gelten (Tools, Form der Dokumentation, Eigenständigkeitserklärung). | Prof. Stenger klären | sofort (Mail) | FRAGE-P-11 |
| F03 | Regel für GB (Vorschlag vom 19.10.2026, methoden.md §6) bestätigen oder ändern. | Gruppe (alle) | Synthese Do 22.10. | Gegenprüfung zu P-24 |
| F05 | Nachfrage „Ist HOLY profitabel?“: Jahresabschluss 2024 abrufen – gelingt das nicht, offen „Profitabilität nicht geprüft“. | Yannick | Fr 23.10. | FRAGE-P-17 |
| F02 | Den eigentlichen Grund der Markenwahl in einem Satz festhalten. | Gruppe (alle) | Generalprobe So 25.10. | Gegenprüfung zu V-05 |
| F35 | Je Person ein Satz, was sie beim nächsten Mal anders machen würde (passend zur Einzelreflexion). | alle | Generalprobe So 25.10. | VOLL-10 |

---

## Übung in der Generalprobe (So 25.10.)

Laut Tagesplan: Generalprobe 1 Std., „zweimal mit Stoppuhr, Rückfragen üben“ (`arbeitsplan.md`). Die Fragerunde zählt
nicht zur Sollzeit der Folien; ob Rückfragen zu den 15 Minuten zählen, ist eine offene Frage an Prof. Stenger
(`arbeitsplan.md`, Offene Punkte).

1. **Vorher:** alle Platzhalter [ … ] mit dem echten Stand füllen (Synthese Do 22.10., Folien final Fr 23.10.) und den
   Status „belastbar“ hier nachtragen.
2. **Rollen festlegen:** wer moderiert; in der Probe spielt eine Person Prof. Stenger, eine das Publikum (VOLL-08).
3. **Reihenfolge:** zuerst die wahrscheinlichen, noch nicht voll belastbaren Fragen (höchstens 15): F02, F05, F07,
   F10, F12, F13, F14, F15, F16, F17, F19, F20, F21, F22. Danach so viele weitere wie die Zeit erlaubt.
4. **Stoppuhr:** höchstens etwa 30 s je Antwort; Kern in einem Satz, höchstens eine Ergänzung (FRAGE-P-18).
5. **Springen üben** – am Vortragslaptop mit zweitem Bildschirm und Clicker (VOLL-04): **O** → Backup-Folie →
   `1` `2` `Enter` zurück; auf Folie 12 die Liste „Methoden / Ergebnisse / Backup“; **Z** nach einem Sprung aus dem
   Backup.
6. **Formeln wörtlich üben:** „laut Gründer Mathias Horsch (Befragung 10/2026)“, „laut Gründer, Datengrundlage nicht
   offengelegt“, „KI-simuliert“, „laut Unternehmen“, „unsere Einordnung / Hypothese“, „Das haben wir nicht erhoben“,
   „Unsere eigene Prüfung läuft noch“ (nur solange das stimmt).
7. **Abgestimmte Stellen gemeinsam sagen:** Kern-Satz (F17), Priorität der Empfehlungen (F20), Wettbewerbsset (F23),
   „frech“ gegen „Humor aus der Schicht“ (F30/F31) – damit nicht drei Personen drei Antworten geben.

**Reserve (geprüft, nicht ausgearbeitet; geringere Wahrscheinlichkeit) – vorbereitete Antworten stehen an der Quelle:**

- „Auf Folie 6 ist ‚selbst anrühren‘ eine Hürde, auf Folie 3 ist ‚Softdrinks zum Selbermixen‘ die Kompetenz –
  Widerspruch?“ (V-01; Lukas, ergänzt Yannick) → Rückfragen in index.html Z. 617 (f03), Z. 2358 (f10), Z. 2618 (f11):
  Kompetenz = Selbstbild, Hürde = Fremdbild. Nicht sagen, die Lücke werde auf Folie 10/11 aufgegriffen.
- „Folie 5 will ‚Humor aus der Schicht statt Doppeldeutigkeit‘, auf 9b ‚passt‘ die Tonalität – was gilt?“ (V-02;
  Yannick, ergänzt Elias) → folienentwuerfe.md Folie 5, Rückfrage 6 (Z. 512–515); Wortlaut in der Synthese abstimmen.
- „Warum dreht sich keine Empfehlung um den Handel?“ (V-08; Elias, ergänzt Yannick) → Eine eigene
  Handelsempfehlung gibt es nicht; Dossier 8 S4 (H). „Shop“ auf Folie 11 meint den Onlineshop, nicht den Handel.
- „Was ist eine Brand Persona – nicht die Marke als Mensch?“ (V-10; Yannick) → persona-steckbrief.md Z. 46–48,
  README.md der Fallstudie Z. 13 und 16; die Marke als Mensch steckt bei uns in der Tonalität (Folie 08b).
- „Dürft ihr die Limbic Map nachbauen?“ (P-23; Yannick) → f05-Fußzeile Z. 1047, Notizen Z. 1060–1062, limbic-map.md
  §2 und §7: eigene, vereinfachte Darstellung mit Schutzvermerk, keine Lizenz, keine Rechtsprüfung.
