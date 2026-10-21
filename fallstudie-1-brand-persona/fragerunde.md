# Fragerunde – Vorbereitung (Fallstudie 1, HOLY)

**Stand:** Mi, 21.10.2026 (Account 1, Nachtrag unten) · erstellt 19.10.2026 · Präsentation Mo 26.10.2026 ·
Generalprobe So 25.10.2026

**Erstellt von:** Account 2 (Claude Code), KI-gestützt. Workflow „account-2-vortragsreife-fragerunde“ (Skript
`ki-nachweis/workflows/account-2_2026-10-19_vortragsreife-fragerunde.js`, Delegation A2-D04, ausgelöst durch Prompt
A2-39 nach Übergabe Ü04 von Account 1). Nachweis: `ki-nachweis/ki-nachweis-account-2.md`.
**Überarbeitet von:** Account 1 (Claude Code), KI-gestützt, am 21.10.2026 im Workflow D23 (Skript
`ki-nachweis/workflows/2026-10-21_vortragsreife-abgleich.js`, Auftrag „Fragerunde aktualisieren“). Nachweis:
`ki-nachweis/ki-nachweis.md`, Abschnitt 2, D23.

**Geprüft:** Zwei Fragensammler (Blick von Prof. Stenger, Blick des Publikums) und eine Vollständigkeitsprüfung
haben am 19.10. 53 Fragen gesammelt; jede Antwort hat ein Prüf-Agent an der Quelle gegengeprüft. Am 21.10. hat
Account 1 jede Frage gegen den neuen Stand geprüft (Notizen und Rückfragen in `praesentation/index.html`,
`abgleich-vorlesung.md`, Ausarbeitungen A1–A3, Gründerbefragung, Recherche-Dossier) und die Vorlesungsseiten, auf die
sich Antworten stützen, an der Vorlesungs-PDF gegengelesen (Liste im Nachtrag).
**Prüfung durch die Gruppe: ☐ offen.**

**Herkunft:** Alle Antworten, Belege und Fallstricke stammen aus Dateien im Repository (Belege je Frage) und aus der
Vorlesungs-PDF `unterlagen/Stenger Folien.pdf`. Keine Websuche. Wo etwas Modellwissen ist, steht es dabei.

---

> **Nachtrag Account 1 – Stand Mi, 21.10.2026**
>
> Grundlage: `master` mit `praesentation/index.html` aus Commit 05b15f4 (D22, 21.10.2026). Seit dem von Account 2
> geprüften Stand a929391 (19.10.) hat Account 1 geändert: Live-Abstimmung auf Folie 08 (eigene Abstimmseite, Google
> Apps Script, Stimmen zählen 30 Minuten; Skript-Update bei Google steht aus), Illustrationen auf Folie 01 und 04,
> Logo-Rätsel auf Folie 01, Chamäleon statt Waschbär (Folie 08, 08b, 10), Abgleich mit der Vorlesung
> (`abgleich-vorlesung.md`) und dessen Umsetzung (Markenkern, Positionierung, Wir-Form, Markeneigenschaften,
> Kennzeichnung der Limbic Types, Hinweis Stenger S. 78).
>
> **Geänderte Antworten, Belege und Fallstricke**
>
> - **Markenkern und Positionierung (F18, neu gefasst; bisher F17):** Die alte Antwort („im Zentrum die
>   Markenkompetenz, der Markenkern als Verdichtung darüber“) widerspricht Stenger S. 90–91 und ist gestrichen. Neu:
>   Mitte = Markenkern („Wer sind wir?“, S. 88–91), Satz darüber = Positionierung (S. 87, 94). Folgen in F03, F15,
>   F16, F27, F31, F33.
> - **Chamäleon statt Waschbär (F16, neu):** Einordnung Elias (H), Begründung als KI-gestützter Vorschlag, Elias
>   prüft; Rückfragen aus den Notizen von Folie 08 („aus der Befragung?“, „ohne festen Kern?“, „Tarnung?“, „warum
>   nicht mehr Waschbär?“). Nachgezogen in F30 („wandelbar“ im Feld Tonalität) und F31 (Chamäleon gegen Raptor).
> - **Vorlesungsbezug (F03, neu gefasst; bisher F07):** Aufbau nach S. 60, Begriffe des Rads nach S. 88–91, Persona
>   S. 76, Limbic Map S. 93; Ergänzungen aus der Literatur benannt; offen: Fußzeilen mit Vorlesungsseiten, Esch-Ausgabe,
>   Kotler, hard/soft facts.
> - **Identität und Image (F04; bisher F06):** Antwort nach S. 60 und S. 87, wie in den Notizen 02 und 10; IST-Identität
>   (S. 91) als Nachfrage.
> - **KI-Personas (F13; bisher F13):** Warnung der Vorlesung S. 78 eingearbeitet, wie B1 und Notiz 04.
> - **Limbic Types und Gewichte (F11; bisher F11):** als eigene Erweiterung, Begründung mit S. 93 (wie Fußzeile und
>   Notiz 05).
> - **Markeneigenschaften (F14):** Vorlesungsbegriff, „Attribute“ nur noch im Titel von Folie 06.
> - **Logo-Rätsel und Logo-Nutzung (F24, neu)** und **Live-Abstimmung: anonym, Geräte-ID, 30 Minuten, vorgegebene
>   Tiere (F29, neu).** Die Lesehilfe schloss beide Themen bisher aus.
> - **Integrierte Kommunikation (F33; bisher F32)** und **Schlüsselbild/Präsenzsignal (F31; bisher F30)** mit S. 95–97;
>   **Abgrenzung der Positionierung (F27; bisher F25)** mit S. 92; **Wettbewerbsrollen (F26; bisher F24):** Die
>   Vorlesung vergibt keine Rollen, Variante B entfällt.
> - **Zusammengelegt:** bisher F04 (Gründerkontakt) und F34 (Datenschutz der KI-Auswertung) → F06; bisher F28
>   (Tonalität vorprogrammiert) und F29 (Aaker) → F30.
> - **Ins Reservefach verschoben:** bisher F27 (Werte einer KI-Persona, Startpunkt der echten Leitern) – geringere
>   Wahrscheinlichkeit; Verweise unten.
> - **Überall:** Zeilen in `index.html` auf Commit 05b15f4 umgestellt; alle Antworten auf 2–4 Sätze gekürzt; Fristen
>   „Di 20.10.“ als überfällig („sofort“) gekennzeichnet; Spielregeln um die Begriffe der Vorlesung ergänzt;
>   Übersicht mit Spalte „bisher“ (alte Nummer). Herkunftskennungen („aus P-…/Q-…/V-…“) bleiben, damit die Verweise in
>   `praesentation/VORTRAGSREIFE.md` §8 weiter passen.
> - **An der Vorlesungs-PDF gegengelesen (21.10.2026, Text der Seiten):** S. 3, 58, 60, 69, 71, 76, 78, 82, 87, 88,
>   90–97. Was nur als Bild auf einer Seite steht, stützt sich auf `abgleich-vorlesung.md`.
> - **Weiter offen** (Liste „bis zur Generalprobe klären“ am Ende): echte Kurzinterviews und Analogie-Antworten,
>   Social-Media-Stichprobe, Prüfung der Chamäleon-Begründung durch Elias, Skript-Update der Abstimmung, Klärung der
>   Logo-Nutzung mit dem Betreuer, Fußzeilen mit Vorlesungsseiten, Esch (2018), Kotler.
> - **Nacharbeit nach der Prüfung (Mi, 21.10.2026 abends):** F29 – Fallstrick zur Bedienung berichtigt (bei Weg A
>   **nicht** „Zurücksetzen“, sonst pausiert die Live-Abfrage; wie Notiz 08 und LIESMICH §6/§12), Satz „in den
>   Interviews fragen wir offen“ nur noch bedingt (Interviews nicht belegt, VORTRAGSREIFE F08-2). F12 – Zahl der
>   KI-simulierten Befragten als Platzhalter (ob P8/P9/P11 liefen, meldet Lukas). F30 – Zahlen zum Aufbau der
>   Aaker-Skala gestrichen (ohne Quelle im Repository).

> **Nachtrag Account 2 (21.10.2026, 08:05 UTC)**
>
> - **Abnahme:** Der Abnahme-Agent des Workflows ist am Nutzungslimit gescheitert. Claude (Account 2) hat die Datei
>   selbst gegen Ü04 geprüft: 35 Fragen; jede mit Antwort (2–5 Sätze), wer antwortet, Beleg und Fallstricken;
>   „95 %“ nur mit „laut Gründer, Datengrundlage nicht offengelegt“; Gründeraussagen als Selbstauskunft; Statista nur
>   wie in persona-daten.md; Stichproben an der Quelle (F04 ↔ gruenderbefragung.md Kopf; F12 ↔ Fußzeilen f06/f07).
>   Keine Abweichung gefunden.
> - **Seit dem geprüften Stand (a929391) hat Account 1 weitergearbeitet:** D18 „Chamäleon statt Waschbär“ (Folie 08,
>   Notizen 08b–12, limbic-map.md), D21 Abgleich mit den Vorlesungsfolien (`abgleich-vorlesung.md`) und D22 dessen
>   Umsetzung. Die Antworten zu F07, F10, F24, F29 und F30 (Modelle, Vorlesung, Tonalität) vor der Generalprobe gegen
>   den neuen Stand prüfen; Fristen „Di 20.10.“ sind überfällig. *(Erledigt im Nachtrag vom 21.10.2026, Account 1;
>   die Nummern hier sind die alten.)*

---

**Lesehilfe**

- Pfade ohne Ordner beziehen sich auf `fallstudie-1-brand-persona/`. „Folie 06“ bzw. „f06“ = Hauptfolie, B1–B8 =
  Backup-Folien, Dossier = `recherche/holy-recherche.md` (Faktenstatus: ✔ gesichert, ✎ korrigiert, ~ unsicher,
  H Hypothese), GB = Gründerbefragung (`gruenderbefragung.md`, „Horsch 2026 (GB)“).
- **„Stenger, S. n“** = Seite der Vorlesungs-PDF `unterlagen/Stenger Folien.pdf` (Fundstellen laut
  `abgleich-vorlesung.md`, Befundnummern „#n“ beziehen sich auf diesen Bericht).
- Zeilenangaben zu `praesentation/index.html` gelten für Commit 05b15f4 (21.10.2026). Verschieben sich Zeilen durch
  spätere Änderungen, über den zitierten Text suchen. Screenshots unter `praesentation/_test/…` sind lokale
  Prüfausgaben und nicht eingecheckt.
- **[ … ]** = Platzhalter oder Regiehinweis: vor dem Vortrag mit dem echten Stand füllen, nicht vorlesen.
- **Belastbar:** „ja“ = heute vertretbar; **TEILWEISE** / **NEIN** = vor dem Vortrag klären (Liste am Ende).
- **Hinweis für Lukas:** Gründeraussagen zum Selbermischen und Abschnitt 4.5 von `gruenderbefragung.md` erst lesen,
  wenn deine Konstrukte und Leitern codiert sind und die Codeliste mit Datum feststeht (`gruenderbefragung.md` Kopf
  und K7). Diese Datei nennt deren Inhalt deshalb nicht.

## Spielregeln für die Fragerunde

1. **Wer antwortet – nach Bündel.** Folien 01–05, B1–B3, B7, B8, Synthese und KI-Nachweis: **Yannick**. Folien
   06–08b, B4, B5 und der Gründerkontakt: **Lukas**. Folien 09–11, B6: **Elias**; Folie 10 trägt Elias vor, die
   Herleitung ergänzt Yannick. Das Chamäleon auf Folie 08 hat Elias eingeordnet – Lukas antwortet, Elias ergänzt die
   Begründung. Erst beantwortet die zuständige Person den Kern in einem Satz, dann ergänzt höchstens eine weitere
   Person – nicht drei Antworten auf eine Frage (FRAGE-P-18). Richtwert: höchstens etwa 30 s je Antwort. Wer
   moderiert (Frage aufnehmen, weitergeben, Folie anspringen), entscheidet die Gruppe in der Generalprobe (VOLL-08;
   laut LIESMICH Folie 12: „alle“).
2. **Gründeraussagen immer als Selbstauskunft:** „laut Gründer Mathias Horsch (Befragung 10/2026)“, im Beleg
   „Horsch 2026 (GB)“ – Innensicht, n = 1, nie als Kundendaten oder Image. Nicht von „Interview“ oder „Gespräch“
   sprechen: Es waren zwei Sprachnachrichten, Rückfragen waren nicht möglich. Nicht zitieren: die unsichere Stelle
   „No/Zero Bullshit“ (`gruenderbefragung.md` 2.2).
3. **„95 %“** nie von sich aus nennen, nie auf einer Hauptfolie und nur mit dem Zusatz „laut Gründer, Datengrundlage
   nicht offengelegt“ (nur als Antwort auf F25).
4. **Statista-Werte nur so, wie sie in `persona-daten.md` stehen** – sie beschreiben die Kategorie Energy Drinks,
   nicht HOLY-Kund:innen. „Technik 34 % / +7“ und „85 % keine frühen Übernehmer“ stehen dort nicht (auch wenn die
   Notizen von Folie 05 sie noch nennen, Z. 1185–1186) und werden nicht gesagt.
5. **Beispieldaten offen als solche benennen.** Was am 26.10. noch „Beispieldaten“ trägt, nie als Ergebnis vorlesen;
   besser vorher durch echte Werte ersetzen (Liste am Ende).
6. **Faktenstatus richtig erklären:** ✔ heißt „von den KI-Prüfungen des Dossiers bestätigt“, nicht „von uns
   geprüft“ – solange die Prüfung durch die Gruppe offen ist. H heißt „unsere Einordnung / Hypothese“.
   Unternehmenszahlen sind „laut Unternehmen“. Jost-Zitate stammen aus einem automatischen Transkript: sinngemäß
   wiedergeben, nicht als geprüftes Zitat.
7. **Begriffe wie in der Vorlesung** (seit 21.10.2026, `abgleich-vorlesung.md` #27–#30): Die Mitte des Rads heißt
   **Markenkern** („Wer sind wir?“, Stenger S. 88–91), der Satz darüber auf Folie 10 **Positionierung**
   (S. 87, 94) – „Genuss mit gutem Gewissen“ ist nicht der Markenkern. Leitfragen in der Wir-Form, Feld
   **Markeneigenschaften** („in der Literatur auch Markenattribute“). Zuerst **Identität** (Innensicht) und
   **Image** („was wahrgenommen wird“, S. 87) sagen, „Selbstbild/Fremdbild“ höchstens danach. Das Wort „Kern“ nur
   für den Markenkern (nicht „frech im Kern“). Persona = „typischer Kunde aus der Zielgruppe“ (S. 76).
8. **Ergänzungen als solche benennen:** Limbic Types und Gewichte (S. 69–71, 93 zeigen sie nicht), Aakers Skala,
   Wettbewerbsrollen nach Kotler, „hard/soft facts“, die Abläufe von Repertory Grid und Laddering (die Vorlesung gibt
   die Methoden nur als Aufgabe vor, S. 60). Das Chamäleon ist unsere Einordnung (H), keine Antwort der Befragten.
9. **Wortwahl:** Marco ist die **Kern-Persona (heutige Kernkundschaft)**, nicht die „Kernzielgruppe“
   (`persona-steckbrief.md` Z. 29, 53). Nie „repräsentativ“, „signifikant“, „gemessen“, „validiert“.
10. **Bei Unsicherheit ehrlich sagen:** „Das haben wir nicht erhoben“, „Das ist unsere Einschätzung“, „Das prüfen wir
    nach“. Keine Zahl, keine Seitenzahl, kein Zitat aus dem Gedächtnis – Vorlesungsseiten nur, wie sie in dieser
    Datei stehen; Esch und Häusel haben wir laut B7 nicht selbst eingesehen, Kotler fehlt in B7, Kroeber-Riel ist
    Modellwissen.
11. **Backup-Folie zeigen** (LIESMICH.md §2 und Notiz zu Folie 12):
    - **Backup nur über die Übersicht:** Taste **O** → mit Pfeilen + **Enter** oder per Klick die Backup-Folie
      wählen. Nach der letzten Hauptfolie geht es nicht automatisch ins Backup.
    - **Auf Folie 12:** Feld im Steuerrad anklicken (Rahmen = Brand Persona); rechts „Methoden“ bzw. „Ergebnisse“;
      links unter „Backup“ Methodik, Prompt-Log, Rohdaten, Quellen. Geht auch mit Tab + Enter.
    - **Hauptfolien direkt:** Ziffern + **Enter** (`6` `Enter` = Folie 06; `8` `B` `Enter` = 08b; `9` `B` `Enter` =
      09b). Achtung: **B** allein (oder **.**) schaltet Schwarzbild – Backup-Folien nicht über „B1“ tippen.
    - **Zurück:** `1` `2` `Enter` (oder **Ende**) = Folie 12. Nach einem Sprung aus einer Backup-Folie („Zu Folie …“)
      führt **Z** zurück ins Backup.
    - **Folie 08 in der Fragerunde:** Die Stimmen stehen noch da, solange sie jünger als 30 Minuten sind
      (`live-abstimmung/ANLEITUNG.md`, „Wichtig zu wissen“).

---

## Übersicht

Reihenfolge: erst Wahrscheinlichkeit „hoch“ (F01–F23), dann „mittel“ (F24–F35), jeweils in der Reihenfolge der
Folien. Spalte „bisher“ = Nummer im Stand vom 19.10.2026.

| Nr. | Frage | Thema | wer antwortet | Backup/Folie | bisher |
|---|---|---|---|---|---|
| F01 | Was ist HOLY – nicht einfach Energy-Pulver? | Ergebnisse | Yannick | 03 | F01 |
| F02 | Warum gerade HOLY? | Marke & Gründer | Yannick | 01, 03 | F02 |
| F03 | Was ist aus der Vorlesung – entspricht euer Steuerrad ihr, gehört die Persona dazu? | Modelle | Yannick | 02, 10, 05, B7 | F07 + neu |
| F04 | Identität ist Innensicht – warum Befragungen der Zielgruppe? | Modelle | Yannick | 02, 10 | F06 |
| F05 | Was hat der Gründer gesagt – und was ist das wert? | Marke & Gründer | Yannick, ergänzt Lukas | 03, B1, B3, B7 | F03 |
| F06 | Wie seid ihr an den Gründer gekommen – und durftet ihr seine Antworten mit KI auswerten? | Marke & Gründer | Lukas, ergänzt Yannick | 01/12, B1, B7 | F04 + F34 |
| F07 | Stimmen die 170 Mio. €, woher stammen die Zahlen, wer hat geprüft? | Daten | Yannick | 03, B8, B7 | F05 |
| F08 | Gibt es Marco wirklich, sind die Zahlen über HOLY, warum ein Mann? | Daten | Yannick | 04, B3 | F08 |
| F09 | Kaufen nicht vor allem Gamer und Jugendliche HOLY? | Ergebnisse | Yannick | 04, B3 | F09 |
| F10 | Was heißt „Hedonisten“ – und warum ist Marco einer? | Modelle | Yannick | 05 | F10 |
| F11 | Limbic Types und Prozente stehen nicht in der Vorlesung – woher kommen sie? | Modelle | Yannick | 05 | F11 + neu |
| F12 | Habt ihr echte Leute befragt – n = 8, davon fünf KI-Personas? | Methode | Lukas | 06, B1, B4, B5 | F12 |
| F13 | KI ersetzt kein Kundengespräch (S. 78) – ist die KI-Befragung nicht ein Zirkelschluss? | KI-Nutzung | Lukas, ergänzt Yannick | B1 | F13 |
| F14 | Wie kommt ihr auf drei Markeneigenschaften – und warum „zuckerfrei“? | Methode | Lukas | 06, B4 | F14 |
| F15 | Ist „Genuss mit gutem Gewissen“ nicht einfach HOLYs Werbung? | Ergebnisse | Lukas, ergänzt Elias | 07, 10, B5 | F15 |
| F16 | Warum ein Chamäleon – kommt das aus eurer Befragung? | Ergebnisse | Lukas, ergänzt Elias | 08, 08b, 10 | neu |
| F17 | Wie habt ihr Beiträge ausgewählt und codiert, was sagt knapp 1 % Engagement? | Methode | Elias | 09, B6 | F16 |
| F18 | Antwort auf die Leitfrage – ist „Genuss mit gutem Gewissen“ euer Markenkern? | Ergebnisse | Elias, ergänzt Yannick | 10, 11, 03 | F17 |
| F19 | Lücke 1: Ist Koffein gegen „gutes Gewissen“ überhaupt ein Widerspruch? | Ergebnisse | Elias, ergänzt Yannick | 10, 11, B8 | F18 |
| F20 | Sind 160 mg viel, ist HOLY gesund, steht das nicht auf der Packung? | Empfehlungen | Elias, ergänzt Lukas | 11, 10 (07) | F19 |
| F21 | Was würdet ihr zuerst raten – und was kostet das? | Empfehlungen | Elias | 11 | F20 |
| F22 | Woran merkt HOLY, dass eure Empfehlungen wirken? | Empfehlungen | Elias | 11, B6 | F21 |
| F23 | Alles mit KI gemacht – was ist eure Leistung, wie nachvollziehbar? | KI-Nutzung | Yannick | B1, B2, 02 | F22 |
| F24 | Ist das eine echte Dose – dürft ihr das Logo verwenden? | Präsentation | Yannick | 01, 09b, 12, B7 | neu |
| F25 | Energy Drink oder Softdrink – ersetzt HOLY wirklich Cola und Red Bull? | Marke & Gründer | Yannick, ergänzt Lukas | 03, 04, 06, B4 | F23 |
| F26 | Warum „Herausforderer“ – und aus welcher Quelle? | Marke & Gründer | Yannick | 03, B7 | F24 |
| F27 | Was unterscheidet HOLY von waterdrop oder Red Bull – wodurch grenzt sich die Positionierung ab? | Marke & Gründer | Yannick, ergänzt Lukas | 03, 06, 08b, 10 | F25 |
| F28 | Schichtdienst – mehr als eine Podcast-Aussage? | Daten | Yannick | 04, 05, B3 | F26 |
| F29 | Was passiert mit meiner Stimme – und lenken die vorgegebenen Tiere nicht? | Präsentation | Lukas, ergänzt Yannick | 08 | neu |
| F30 | Ist „passt zur Tonalität“ vorprogrammiert – und ist das eine Messung nach Aaker? | Methode | Lukas, ergänzt Elias | 08b, 09b, B7 | F28 + F29 |
| F31 | Ist der Raptor ein Schlüsselbild – trotz Chamäleon und „Bildwelt zu jung“? | Modelle | Elias | 09, 11, B6, B7 | F30 |
| F32 | Warum „Bildwelt zu jung“, wenn HOLY damit 170 Mio. € umsetzt? | Ergebnisse | Elias, ergänzt Yannick | 09b, 10, 11 | F31 |
| F33 | Mehrere Claims sind normal – warum ein „Bruch“? | Ergebnisse | Elias (Folie 03: Yannick) | 09b, 11 | F32 |
| F34 | Warum kommt TikTok nicht vor? | Empfehlungen | Elias, ergänzt Yannick | 11, 04 | F33 |
| F35 | Wo seht ihr selbst die größten Schwächen, was würdet ihr anders machen? | Methode | Lukas, ergänzt Yannick und Elias | B1, 04 | F35 |

Verteilung: Yannick führt 16, Lukas 9, Elias 10 Fragen. Themen: Methode 5, Daten 3, Ergebnisse 8, Empfehlungen 4,
KI-Nutzung 2, Modelle 5, Marke & Gründer 6, Präsentation 2 (Logo, Abstimmung). Reserve (bisher F27 und weitere):
Abschnitt am Ende.

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
- **Beleg:** Folie 03 (Titel „Herausforderer mit Softdrinks zum Selbermixen“ Z. 670, Zeitleiste Daten Z. 762–767,
  Sprechtext Schritt 0 Z. 713, Rückfrage „Ist HOLY nun Energy Drink oder Softdrink?“ Z. 717); Folie 02 Sprechtext
  Schritt 0 (Z. 585: erster Supermarkt 2024 ✔ [6], Rewe und Globus ab 01/2025 ✔ [8, 9]); Dossier Kap. 1 Steckbrief
  ✔ [1–5], 2.2 drei Freunde ✔ [17, 44], 2.5 ✔ [6, 8, 9], 3.1 Sortiment ✔ [1, 30, 54, 55] und Koffein je Linie
  ✔ [56–59] („Dose“ = Pappdose mit Pulver ✔ [54]), S1 (Energy rechtlich Nahrungsergänzungsmittel ✔ [56, 72]).
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
  > großen TV-Kampagne – genau da stellt sich unsere Leitfrage, ob der Auftritt noch zur Identität passt.
- **Beleg:** README.md (Repository) Kopf „von der Gruppe ausgewählt am 13.10.2026“ und Abschnitt „Unternehmen zur
  Auswahl“ (Liste von Prof. Stenger); KI-Nachweis Nr. 10 und 13; Folie 03 Zeitleiste (Daten Z. 762–767: Gaming
  Booster online ✔ [4, 22], erster Supermarkt ✔ [6], TV-Kampagne und Syrup ✎ [5, 25, 39]); Leitfrage Folie 02
  (Sprechtext Schritt 0, Z. 585).
- **Fallstricke:**
  - Keinen Grund erfinden („wir trinken alle HOLY“, „HOLY hat uns angesprochen“) – im Repository ist keiner
    festgehalten. Den Umbau der Marke nicht als Auswahlgrund ausgeben, wenn er es nicht war.
  - Keine Verbindung zur HOLY Softdrinks GmbH andeuten (Folie 01 Z. 320 und Folie 12 Fußzeile Z. 3061: „keine
    Verbindung zur HOLY Softdrinks GmbH“; siehe F06).
  - „Supermarkt“ nicht zu „überall im Handel“ ausweiten: Die Zahl der Verkaufsstellen ist ~ unsicher (Dossier 9.2).
  - „Ersten großen TV-Kampagne“ so lassen: Ein einzelner TV-Spot schon 09/2025 ist ~ unsicher [130] (Notiz 03,
    Z. 716).
- **Belastbar:** **TEILWEISE** – der eigentliche Grund der Wahl fehlt im Material.

#### F03 – Vorlesungsbezug und Markensteuerrad

**„Was davon ist eigentlich aus meiner Vorlesung? Entspricht euer Markensteuerrad dem aus der Vorlesung – und gehört
die Brand Persona überhaupt dazu?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch; „Inhalte aus der Vorlesung“ zählen 20 %, S. 58) · aus P-16,
  ergänzt nach `abgleich-vorlesung.md`
- **Wer antwortet:** Yannick (A, Synthese C2)
- **Antwort:**
  > Der Aufbau folgt Ihrer Aufgabe auf S. 60: Persona mit Limbic Map, Repertory Grid, Laddering, Analogien,
  > Kommunikationsanalyse und die Zusammenführung im Steuerrad. Das Rad haben wir an Ihre Folien angeglichen –
  > Markenkern in der Mitte, Leitfragen in der Wir-Form, Feld „Markeneigenschaften“ (S. 88–91) –, und den Satz darüber
  > nennen wir wie auf S. 87 und 94 Positionierung. Die Persona ist kein Feld im Rad, sondern der typische Kunde aus
  > der Zielgruppe (S. 76), und die Limbic Map dient der Analyse von Zielgruppe und Positionierung (S. 93) – deshalb
  > zeigen wir beide als Rahmen um das Rad, das ist unsere Darstellung. Was nicht aus der Vorlesung stammt,
  > kennzeichnen wir als Ergänzung aus der Literatur: Limbic Types und Gewichte, Aakers Skala, Kotlers
  > Wettbewerbsrollen und die Abläufe von Repertory Grid und Laddering.
- **Beleg:** Stenger S. 58, 60, 76, 87, 88–91, 93, 94 (an der PDF gegengelesen; `abgleich-vorlesung.md` §2, #10,
  #19, #27–#29, #37, Abschnitte 5 und 6); `praesentation/js/komponenten.js` Z. 67–72 (Felder: „Markenkern“, „Wer sind
  wir?“, „Markeneigenschaften“, Persona = „Bezugsrahmen“); Folie 02 Rückfrage „Gehört die Persona zum Steuerrad?“
  (Z. 593); Folie 10 Rückfragen, letzter Satz „am 21.10.2026 mit der Vorlesung abgeglichen“ (Z. 2645); Folie 05
  Fußzeile „Typen (nymphenburg.de) und Gewichte: Erweiterung, nicht in der Vorlesung“ (Z. 1171); Folie 12 Notiz
  (Z. 3068); `LIESMICH.md` Kopf (Z. 32–39); B7 „Stenger, D. (2026)“ (Z. 3803).
- **Fallstricke:**
  - Nicht sagen, die Fußzeilen nennen die Vorlesungsseiten: Bisher steht „vgl. Stenger, S. 78“ nur sichtbar auf B1,
    dazu „Stenger (2026)“ ohne Seiten in B7; die Fußzeilen der Hauptfolien sind noch nicht umgestellt (#4 offen).
  - Seiten nur so nennen, wie sie hier stehen (Seite der PDF); keine weiteren aus dem Gedächtnis.
  - „Hard Facts / Soft Facts“ (Rad auf Folie 02 und 10, Rückfrage auf Folie 02) steht nicht in der Vorlesung (#32,
    offen) – nicht als Vorlesungsinhalt ausgeben; dass Esch so teilt, ist Modellwissen, das Buch haben wir nicht
    eingesehen.
  - Esch-Ausgabe: Die Vorlesung zitiert Esch (2018), 9. Aufl. (S. 3, 87); B7 und die Fußzeile von Folie 02 nennen
    Esch & Esch (2024), nicht eingesehen (#11 offen). Keine Seiten aus Esch nennen; fragt er nach, offen sagen.
  - „Bei Esch heißt die Mitte Markenkompetenz“ nur auf Nachfrage und als Modellwissen (Notiz 03 Z. 716, Notiz 10
    Z. 2645).
  - Die Brand Persona nicht als sechstes Feld bezeichnen – auf S. 88 hat das Rad keine Persona (#37).
  - Kotler: Die Vorlesung vergibt keine Wettbewerbsrollen (#31) – siehe F26.
  - Nachfrage „In der Vorlesung heißt es individueller und sozialer Nutzen“ (S. 88): Das stimmt; die Begriffe auf
    Folie 07 („sachlich-funktional“, „psychosozial“) stammen aus der Laddering-Literatur – Angleichung offen (#39,
    Lukas).
  - Nachfrage zum Ablauf der Methoden: „Die Vorlesung gibt die Methoden als Aufgabe vor (S. 60), nicht ihren
    Ablauf; den haben wir aus der Originalliteratur“ (#41).
- **Belastbar:** **TEILWEISE** – Begriffe angeglichen; Fußzeilen mit Vorlesungsseiten, Esch-Ausgabe und Kotler offen.

#### F04 – Identität oder Image?

**„Markenidentität ist die Innensicht. Warum füllt ihr Eigenschaften und Nutzen mit Befragungen der Zielgruppe – ist
das nicht das Image?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch) · aus P-15
- **Wer antwortet:** Yannick (A)
- **Antwort:**
  > Ihre Aufgabe ordnet Repertory Grid, Laddering, Analogien und Kommunikationsanalyse selbst der Markenidentität zu
  > (S. 60). Identität ist die Innensicht, „wer und was man sein möchte“, das Image ist, „was wahrgenommen wird“
  > (S. 87) – weil Repertory Grid und Laddering die Zielgruppe fragen, bisher vor allem simuliert, prüfen sie
  > zugleich, ob die Identität ankommt; auf Folie 2 tragen sie deshalb das Etikett „Fremdbild“. Die Innensicht nehmen
  > wir aus Website, Press Kit, Gründer-Interviews und einer eigenen Befragung von Gründer Mathias Horsch, die wir als
  > Selbstauskunft schwach gewichten. Wo Identität und Image auseinandergehen, setzen unsere Empfehlungen an.
- **Beleg:** Stenger S. 60, 87 (an der PDF gegengelesen; `abgleich-vorlesung.md` #30); Folie 02 Etikett „Fremdbild“
  (`praesentation/js/folien/02-vorgehen.js` Z. 49, 91–96), Sprechtext Schritt 1 und 3 (Z. 586, 588), Rückfrage „Das
  Steuerrad erfasst doch die Identität – warum fragt ihr die Zielgruppe?“ (Z. 593); Folie 10 gleiche Rückfrage
  (Z. 2645); `folienentwuerfe.md` Folie 2 (Z. 94); README.md der Fallstudie „Identität vs. Image“.
- **Fallstricke:**
  - „Selbstbild/Fremdbild“ und „Soll-Identität“ sind keine Vorlesungsbegriffe (#30): zuerst Identität und Image
    sagen. Das Etikett „Fremdbild“ und der Sprechtext von Folie 02 („das Selbstbild der Marke“, Z. 586) sind noch
    nicht umgestellt (nicht freigegeben).
  - Nachfrage „Ist euer Rad Soll- oder Ist-Identität?“: Die Vorlesung zeigt das zusammengeführte Rad als
    „IST-Identität – Erster Entwurf zur Abstimmung“ (S. 91); „Soll-Identität“ nur mit Esch-Quelle (Modellwissen,
    `markenkompetenz.md` §4).
  - „bisher vor allem simuliert“ nicht weglassen (Notiz 02 Z. 593).
  - Nicht sagen: „Unser Steuerrad zeigt nur die Identität.“ Nicht behaupten, die Befragten hätten die Lücken
    bestätigt: Die Lücken auf Folie 10/11 stützen sich auf Außensicht (Verbraucherschützer, Presse) und die Persona;
    Repertory Grid und Laddering zeigen noch Beispieldaten.
  - Die Gründerbefragung nicht als Image oder Kundenaussage ausgeben – sie gehört zur Innensicht (n = 1; S. 87,
    #36).
- **Belastbar:** ja (Begriffe belegt); die Befunde selbst hängen an Beispieldaten.

#### F05 – Was hat der Gründer gesagt?

**„Auf Folie 3 steht ‚laut Gründer Mathias Horsch‘ – was hat er euch gesagt? Und was ist das wert? Ein Gründer, der
per Sprachnachricht über seine eigene Marke spricht, sagt doch nur, was auf der Website steht.“**

- **Wer fragt wahrscheinlich:** Publikum (hoch), Prof. Stenger (mittel) · aus Q-05 und P-24
- **Wer antwortet:** Yannick (A), ergänzt von Lukas (B; an ihn gingen die Sprachnachrichten)
- **Antwort:**
  > Gründer Mathias Horsch hat unseren Fragenkatalog mit 14 Fragen in zwei Sprachnachrichten beantwortet. Laut Gründer
  > Mathias Horsch (Befragung 10/2026) ist HOLY eine bessere Alternative zu normalen Softdrinks, „geiler Geschmack mit
  > gutem Gewissen“, die Zielgruppe ist breit – 18 bis 55, Männer und Frauen –, und als Hauptkonkurrenz nennt er die
  > großen Softdrinkmarken. Das ist eine Selbstauskunft, Innensicht mit n = 1, und vieles wiederholt Website und Press
  > Kit. Deshalb steht ein Gründer-Stichwort in unserem Steuerrad nur, wenn es ein Ergebnis unserer eigenen Methoden
  > stützt – zurzeit steht keines darin. [Den letzten Satz nur so sagen, wenn die Gruppe die Regel für GB bestätigt
  > hat.]
- **Beleg:** Folie 03 Claim (Daten Z. 774: „auch laut Gründer Mathias Horsch“) und Belege (Z. 716); B1 Spalte 03
  (Z. 3249) und Notizen (Z. 3264); B3 Zeile „M. Horsch, Befragung (GB)“ (Daten Z. 3431); B7 GB-Eintrag (Horsch 2026
  (GB)); Folie 10 Notiz „Herkunft der Stichworte“ (Z. 2642: „Zurzeit steht kein Stichwort mit GB im Rad“);
  `gruenderbefragung.md` Kopf (14 Fragen, zwei Sprachnachrichten an Lukas, Freigabe), §1 Punkte 1–3, §2.1
  („Geringer Eigenwert vieler Bestätigungen“, „Neu sind vor allem …“, keine Rückfragen), §2.2 (unsichere Stellen),
  §2.3 (Regeln), §3 Fragen 1–3; `methoden.md` §6 „Regel für GB“ (Z. 263); Stenger S. 87 (Identität = intern, #36).
- **Fallstricke:**
  - „95 %“ nicht ohne „laut Gründer, Datengrundlage nicht offengelegt“, am besten gar nicht (siehe F25).
  - Nicht sagen: „Der Gründer hat unsere Persona bestätigt“ – er beschreibt die Zielgruppe, nicht die Kundschaft.
    Gründeraussagen nicht als Tatsachen über die Kundschaft darstellen.
  - Nicht sagen: „Wir hatten ein Interview“ – zwei Sprachnachrichten, Rückfragen waren nicht möglich (2.1).
  - Nicht sagen: „Koffein oder Provokation lehnt er ab“ – danach war nicht gefragt („Nicht genannt heißt nicht
    abgelehnt“, 2.1).
  - Die Antworten nicht als Repertory Grid oder Laddering zählen (andere Elemente, keine Nachfragen, Beispiel im
    Fragebogen vorgegeben, 2.1).
  - Die Rangfolge der Kaufgründe stützt sich laut ihm auf Firmendaten, die er nicht vorlegt – nur so erwähnen.
  - Keine Stelle mit unsicherem Wortlaut zitieren (2.2).
  - Die Regel für GB ist ein Vorschlag vom 19.10.2026 (`methoden.md` §6) – erst nach Bestätigung durch die Gruppe als
    beschlossen darstellen.
  - Transkript und Audio liegen nicht im Repository (2.3 Punkt 5) – nicht anbieten, sie zu zeigen.
- **Belastbar:** ja

#### F06 – Gründerkontakt und KI-Auswertung

**„Wie seid ihr denn an den Gründer rangekommen – arbeitet ihr mit HOLY zusammen? Und durftet ihr seine
Sprachnachrichten überhaupt mit KI-Tools auswerten?“**

- **Wer fragt wahrscheinlich:** Publikum (hoch), Prof. Stenger (mittel, Datenschutz) · aus Q-06 und V-04
- **Wer antwortet:** Lukas (B; an ihn gingen die Sprachnachrichten), ergänzt von Yannick (A, KI-Nachweis)
- **Antwort:**
  > Ich habe Mathias Horsch Mitte Oktober über LinkedIn angeschrieben und ihm unseren Fragenkatalog mit 14 Fragen
  > geschickt; er hat mit zwei Sprachnachrichten geantwortet. Er hat zugestimmt, dass wir die Antworten mit KI
  > abschreiben und auswerten und seinen Namen, Paraphrasen und kurze Zitate verwenden; das Transkript liegt nur in
  > unserem Gruppenordner, nicht im öffentlichen Repository. Mit HOLY als Firma arbeiten wir nicht zusammen: Die Marke
  > stand auf der Liste von Prof. Stenger, und auf Folie 1 und 12 steht „keine Verbindung zur HOLY Softdrinks GmbH“.
- **Beleg:** KI-Nachweis Nr. 53 (17.10.2026, Kontakt), 59, 60 (Einwilligung zur KI-Abschrift; Spracherkennung „läuft
  lokal im Container“), 67 (Freigabe „Präsentation + Repository“); `gruenderbefragung.md` Kopf („Quelle“,
  „Freigabe“, „Herkunft“) und §2.3 Nr. 5 „Aufbewahrung“; B1 Spalte 03 (Z. 3249) und Notizen (Z. 3264); B7 GB-Eintrag;
  Folie 01 (Z. 320) und Folie 12 (Fußzeile Z. 3061); README.md (Repository) Markenliste; `arbeitsplan.md` „Regeln
  für den KI-Nachweis“ (Z. 89–90, KI-Richtlinie der HSKL, Nr. 6); `dossier-buendel-b.md` §5 „Einwilligung und
  Datenschutz“ (Z. 304–320).
- **Fallstricke:**
  - Kein genaues Datum nennen, bevor Lukas es bestätigt hat: KI-Nachweis 53 vom 17.10. gegen „18.10.2026“ in
    B1-Notiz, B7 und Notiz 03 (Dateidatum der Audios; „Versanddatum bestätigt Lukas“). Bis dahin „Mitte Oktober“
    (FRAGE-Q-13).
  - Nicht sagen: „Gespräch“, „Interview“, „HOLY hat unsere Präsentation gesehen oder freigegeben“ (nicht belegt).
    Die HOLY-Logos nicht als Erlaubnis von HOLY darstellen (siehe F24).
  - Nicht „ausdrücklich zugestimmt“ sagen: Zustimmung und Freigabe sind im Repository nur als Angabe von Yannick
    vermerkt (KI-Nachweis 60, 67) – wer antwortet, muss wissen, wie Horsch zugestimmt hat.
  - Nicht sagen: „Alles lief lokal“ – die Spracherkennung lief in der Arbeitsumgebung des KI-Werkzeugs, Bereinigung,
    Zuordnung und Auswertung mit Claude Code (mit Zustimmung). Keine Rechtsprüfung, kein „DSGVO-konform“.
  - Ablage der Audios vorher klären: Kopf von `gruenderbefragung.md` „Audiodateien bleiben im Gruppenordner“, §2.3
    „Original-Audiodateien hat Lukas“ (Kopien in der KI-Sitzung gelöscht). Keine Audiodatei anbieten.
  - Kurzinterviews: die Regel nach der KI-Richtlinie der HSKL, Nr. 6 (Einwilligung vorher, Notizen ohne Namen) nur
    nennen, wenn die Interviews so geführt wurden; die Checkliste in `dossier-buendel-b.md` (Z. 445) ist offen.
  - Ob der Prof besondere KI-Vorgaben hat, ist offen – die Vorlesung regelt nur Prompt-Dokumentation und Begründung im
    Backup (S. 60; `arbeitsplan.md` Offene Punkte; #7). Nicht „mit dem Prof abgestimmt“ sagen.
- **Belastbar:** **TEILWEISE** – Versanddatum und Ablage der Audios klären.

#### F07 – Stimmen die 170 Millionen, und wer hat geprüft?

**„Auf Folie 3 stehen ‚über 170 Mio. € Umsatz‘ mit Haken und Quellennummern. Woher habt ihr eure Zahlen, stimmen die
überhaupt – und wer hat die Quellen geprüft, ihr oder die KI?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch), Publikum (mittel) · aus P-19 und Q-18
- **Wer antwortet:** Yannick (A)
- **Antwort:**
  > Die Unternehmenszahlen sind Selbstauskünfte, deshalb steht „laut Unternehmen“ darunter: „+170M“ für 2025 nennt das
  > Press Kit, die WirtschaftsWoche schreibt „laut eigenen Angaben“, und für 2025 ist noch kein Jahresabschluss
  > offengelegt. Beim Umsatz steht kein Haken, sondern das Schreibsymbol für „korrigiert“: Eine Prüfung hat eine
  > abweichende oder aktuellere Angabe belegt, auf der Folie steht die korrigierte Fassung. Die Fakten über HOLY stammen
  > aus unserem KI-gestützt erstellten Recherche-Dossier mit 160 nummerierten Quellen, das KI-Agenten zweifach
  > gegengeprüft haben, die Kategoriedaten zur Persona über die Statista-Campuslizenz; die Nummern löst Backup B8 auf.
  > [Stand der eigenen Prüfung nennen, also welche tragenden Belege wir selbst geöffnet haben. Sonst ehrlich: „Unsere
  > eigene Prüfung der Belege läuft noch.“]
- **Beleg:** Folie 03 Kennzahlen mit Status (Daten Z. 769–773: Umsatz ✎ [13, 16], Kund:innen ✔ [13], Mitarbeitende
  ✎ [5, 17], jeweils „laut Unternehmen“), Fußzeile (Z. 708), Sprechtext Schritt 1 (Z. 714: „Geprüfte
  Bilanzzahlen liegen uns nicht vor“), Belege (Z. 716: „✔ = … bei Kennzahlen: das Unternehmen sagt das“,
  KI-Nachprüfung 17.10.2026, Prüfung durch die Gruppe offen), Rückfrage „Wie belastbar sind die 170 Millionen?“
  (Z. 717); B2-Notizen (Z. 3319–3321); B3 Fußzeile (Z. 3402: Statista CI, Kantar TGI via Statista); B7 „Daten &
  Dokumentation“; B8 (ab Z. 3864); Dossier Kopf und Legende, 2.4 ✎ [13, 16], 9.4, Anhang A.1 K14, Anhang B [1]–[160];
  `persona-daten.md` „Quellen“; KI-Nachweis: Stand 21.10. kein Prüffeld abgehakt (FRAGE-P-01).
- **Fallstricke:**
  - Nicht sagen, beim Umsatz stehe ein Haken: Dort steht ✎ (korrigiert), ✔ steht nur bei den Kund:innen.
  - Den Haken nicht als „von uns geprüft“ erklären: Er ist der Faktenstatus aus den KI-Prüfungen des Dossiers.
    Nicht behaupten, die Gruppe habe alle Quellen selbst geprüft.
  - Nicht sagen: „HOLY macht 170 Mio. Umsatz“ ohne „laut Unternehmen“, „geprüfter Umsatz“ oder „HOLY ist
    profitabel“ – der Jahresabschluss 2024 ist nicht abgerufen (Rückfrage Z. 717; FRAGE-P-17).
  - Horschs „€180m+“ auf LinkedIn [159] nur als weitere Selbstauskunft nennen.
  - Kund:innen-Zahlen haben verschiedene Definitionen („2M+ loyale“ im Press Kit, „>2.5M“ seit Gründung bei HV
    Capital).
  - Statista- und Kantar-Werte beschreiben die Kategorie Energy Drinks, nicht HOLY. Keine Zahl aus dem Kopf nennen,
    die nicht auf einer Folie oder in einer Notiz steht.
- **Belastbar:** **TEILWEISE** – die eigene Prüfung der Belege durch die Gruppe ist offen.

#### F08 – Gibt es Marco wirklich, und warum ein Mann?

**„Gibt es Marco wirklich? Eure Persona-Zahlen beschreiben doch Energy-Drink-Trinker allgemein – sind das überhaupt
Daten über HOLY-Kund:innen? Und warum ein Mann, wenn fast die Hälfte Frauen sind?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch), Publikum (hoch) · aus P-20 und Q-07
- **Wer antwortet:** Yannick (A)
- **Antwort:**
  > Marco ist fiktiv – Name, Beruf, Wohnort und Zitat sind als Annahmen gekennzeichnet; er steht für die heutige
  > Kernkundschaft, wie Mitgründer Jost sie im Podcast 2024 beschreibt: meist 25 bis 40, etwa zwei Drittel Männer,
  > viele im Schichtdienst. Fast alle Zahlen auf der Folie beschreiben die Kategorie Energy Drinks in Deutschland,
  > nicht HOLY, das steht auch in der Fußzeile; HOLY veröffentlicht keine Kundendaten. Männer sind in allen Quellen die
  > Mehrheit – von 54 % bei denen, die regelmäßig Energy Drinks trinken (Statista Consumer Insights 2025), bis 67,5 %
  > bei denen, die mindestens mehrmals im Monat trinken (VuMA, Daten 2021). Frauen trinken HOLY durchaus, laut Jost
  > etwa ein Drittel – für sie liegt im Backup B3 unsere Wachstums-Persona Lena, 29, Pflegefachkraft, als Hypothese.
- **Beleg:** Folie 04 („Kern-Persona · Hypothese · fiktiv“ Z. 920, Fußzeile Z. 940 „Kategorie Energy Drinks, nicht
  HOLY“ und „Person, Bild, Zitat fiktiv“, Notiz „KI und echte Kundenstimmen“ Z. 954, Rückfragen Z. 955 „Laut Statista
  sind fast die Hälfte Frauen – warum ein Mann?“ und „Ist das nicht ein Klischee?“); `persona-daten.md`
  Kernergebnisse (Statista CI 2025: 54 % Männer bei „regelmäßig“; VuMA: rund zwei Drittel) und „Was das für die
  Persona heißt“ (67,5 %, VuMA 2021); Dossier 4.1 ✔ [24] (anfangs 80:20, inzwischen etwa 2/3 zu 1/3) und „Lücke: HOLY
  veröffentlicht keine Kundendaten“, 4.3 (H); B3 (Daten Z. 3429–3431, Notizen Z. 3407–3410);
  `persona-steckbrief.md` Kopf (Z. 17–27) und §5 (Lena); Stenger S. 76 (Persona = Musterkunde), S. 78, S. 82.
- **Fallstricke:**
  - Nicht sagen: „HOLY-Kund:innen sind zu 54 % Männer“ oder „Statista zeigt, dass HOLY-Kunden männlich sind“ – das
    ist die Kategorie Energy Drinks.
  - Statista-Werte nur wie in `persona-daten.md`: 54 % = „regelmäßig“, 18–64, online; 67,5 % = VuMA, ab 14, Daten
    2021; nicht miteinander verrechnen.
  - Name, Wohnort, Beruf, Alltag und Zitat sind KI-Vorschläge auf Basis der Daten (Notiz Z. 954) – genau die
    „plausibel klingenden Details“, vor denen S. 78 warnt; deshalb als Annahme gekennzeichnet. Nicht verschweigen,
    wenn er nachfragt.
  - Nachfrage „Habt ihr mit echten Kund:innen gesprochen?“: ehrlich „noch nicht“ bzw. [Zahl] Kurzinterviews (Notiz
    Z. 954); die Auswertung von 20–30 Bewertungen steht aus.
  - Nachfrage „Warum Marco und nicht Lena?“: Die Vorlesung nennt für die Auswahl u. a. die „Glaubwürdigkeit der
    eigenen Marke“ und fragt, welche Segmente man bewusst nicht bearbeitet (S. 82) – Marco ist die heutige
    Kernkundschaft, bewusst nicht der Schüler-Gamer (#21; Steckbrief „Nicht: kein Schüler-Gamer“).
  - Die Zielgruppe laut Gründer Mathias Horsch (Befragung 10/2026) – 18–55, Männer und Frauen – nicht mit der
    Kundschaft verwechseln; nicht sagen „Schichtarbeiter sind HOLYs Zielgruppe“.
  - Der Beruf (Lagerlogistik) ist eine Annahme; Lena ist eine Hypothese (H, Dossier 4.3) ohne eigene Folie.
  - Den Frauenanteil „etwa ein Drittel“ als Selbstauskunft von Jost nennen, nicht als Messung; die Jost-Angaben
    stammen aus einem automatischen Transkript (Dossier 9.4).
  - Zum Zeigen auf Folie 04: gestrichelte Blöcke sind Annahmen, Flächen mit Datensymbol haben eine Quelle.
- **Belastbar:** ja

#### F09 – Gamer und Jugendliche?

**„Wer kauft HOLY überhaupt – sind das nicht Gamer und Jugendliche?“**

- **Wer fragt wahrscheinlich:** Publikum (hoch) · aus Q-04
- **Wer antwortet:** Yannick (A)
- **Antwort:**
  > Laut HOLY überwiegend nicht: Nach Mitgründer Frederick Jost (Podcast 2024) ist die Kundschaft meist 25 bis 40,
  > etwa zu zwei Dritteln männlich, viele arbeiten im Schichtdienst, und getrunken wird HOLY in der Regel gar nicht
  > beim Zocken – eine Selbstauskunft, denn HOLY veröffentlicht keine Kundendaten. Gaming war der Start 2021 und bleibt
  > ein Kanal, etwa über Creator, ist laut Jost aber kein Trinkanlass. Energy verkauft HOLY online inzwischen nur ab 18;
  > Verbraucherschützer kritisieren aber, dass die Aufmachung Kinder und Jugendliche anspricht – das greifen wir in der
  > Konsistenzprüfung auf Folie 10 auf.
- **Beleg:** Folie 04 (Block Soziodemografie „Jost, Presse ✔ [7, 24]“, Daten Z. 1000; Sprechtext Schritt 2 Z. 950);
  B3 (Zeile Jost 2024, Daten Z. 3430; Notiz Z. 3408); Dossier Kap. 1 Kernerkenntnis 4 ✔ [7, 24], 4.1 ✔ [24] und
  „Lücke“ (keine Kundendaten), S3 (Gaming bleibt Kanal ✔ [5, 22, 133]), 3.4 (ab 18 ✔ [12], Kritik ✔ [27, 82]);
  Folie 10 Sprechtext Schritt 8 (Z. 2640) und Belege Lücke 1/2 (Z. 2644); Folie 11 Rückfrage „Und Gaming?“ (Z. 2926).
- **Fallstricke:**
  - Nicht sagen: „Die Kunden sind 25–40“ als Messung.
  - Similarweb (63,5 % männlich, 18–24) nur als ~ unsicher – das sind modellierte Website-Besuche.
  - Nicht sagen: „Jugendliche trinken kein HOLY“ – das Treueprogramm gilt ab 16, Syrup ab 11 ✔ [60, 61, 71].
  - Die Zielgruppe laut Gründer Mathias Horsch (Befragung 10/2026), 18–55, nicht mit der Kundschaft verwechseln.
  - Keine Lückennummer nennen oder sie vorher mit Elias klären: Der Sprechtext von Folie 10 nennt die Ansprache
    Jugendlicher bei Lücke 1 (Z. 2640), die Belege ordnen sie Lücke 2 zu (S2/S3, Z. 2644); bis zur Synthese
    (Do 22.10.) sind die Lücken Entwurf.
  - Jost-Zitate stammen aus einem automatischen Transkript (Dossier 9.4) – nicht wörtlich zitieren.
- **Belastbar:** ja

#### F10 – Was heißt „Hedonisten“, und warum Marco?

**„Was heißt ‚Hedonisten‘? Klingt eher negativ. Und warum ist Marco überhaupt einer – HOLYs Werbung wirkt eher nach
Abenteurer, und die Offenen liegen bei euch knapp dahinter.“**

- **Wer fragt wahrscheinlich:** Publikum (hoch), Prof. Stenger (mittel) · aus Q-08 und V-03
- **Wer antwortet:** Yannick (A)
- **Antwort:**
  > „Hedonisten“ ist einer der Limbic Types der Gruppe Nymphenburg, kein Alltagswort: Sie liegen bei Stimulanz, mit den
  > Stichworten Neugier, Abwechslung, Spaß und Kreativität – Genuss ordnet das Modell eher den „Offenen“ zu. Für Marco
  > ist das unsere Hypothese aus Kategoriedaten: Unter Energy-Drink-Konsument:innen nennen 41 % Videospiele als Hobby,
  > unter allen Befragten 29 % (Statista Consumer Insights 2025). Für den Abenteurer finden wir in den Daten kein
  > Signal für Risikofreude oder Rebellion, und die Abenteuer-Hinweise aus HOLYs eigener Werbung zu nehmen, wäre ein
  > Zirkelschluss gewesen. Gegenüber den Offenen ist es knapp, deshalb steht „Hypothese“ auf der Folie; entscheiden
  > soll die Auswertung von 20–30 Kundenbewertungen [Ergebnis nennen].
- **Beleg:** Folie 05 (Typ „Hedonisten“ / „Neugier · Unterhaltung“ Z. 1133–1134, Hinweis „Gewichte: Schätzung des
  Teams“ Z. 1146, Sprechtext Schritt 1 Z. 1181, Belege Z. 1185 „Hedonisten: ‚Neugier · Abwechslung · Spaß ·
  Kreativität‘ ([105] S. 5)“, Rückfragen Z. 1186 „Warum Hedonisten und nicht Abenteurer?“, „Warum nicht Offene?“);
  `limbic-map.md` §2 (Stichworte nach [105] S. 5, Offene „Wohlfühlen · Genuss · Offenheit · Fantasie“, sieben Typen)
  und §3.2 (Typenprüfung, „Hedonisten, knapp vor Offene“, Entscheidungsregel); `folienentwuerfe.md` Folie 5,
  Rückfragen 2 und 3; `persona-daten.md` (Kategorie, nicht HOLY; Videospiele 41 %, Ø 29 %); Stenger S. 69
  (Stimulanz mit Spiel, Spaß, Humor, Neugier, Kreativität, Abwechslung; `abgleich-vorlesung.md` #25).
- **Fallstricke:**
  - Limbic Types stehen nicht in der Vorlesung (S. 69–71, 93) – nicht als Vorlesungsbegriff ausgeben; siehe F11.
  - Nicht sagen: „Marco ist nachweislich Hedonist“, „gemessen“ oder „HOLY ist eine Hedonisten-Marke“ – Marken haben
    keinen Limbic Type, der HOLY-Punkt ist nur ein Mittelwert (Rückfrage „Eine Marke hat doch keinen Limbic Type?“,
    Z. 1186).
  - „Technik 34 % / +7“ und „85 % keine frühen Übernehmer“ nicht nennen: Sie stehen nicht in `persona-daten.md`,
    aber noch in den Notizen 05 (Z. 1185–1186) – dort nicht ablesen.
  - Nachfrage zu S. 70 (dort stehen „Hightech“ und „innovativ“ oben, bei Exploration): Wir zählen Technik als
    Neugier (Stimulanz); diese Zuordnung ist noch nicht ausgearbeitet (#26) – offen sagen, dass es eine
    Zuordnungsfrage ist.
  - „Unterhaltung“ (Motiv auf der Folie) steht weder auf S. 69 noch auf S. 70 (#25) – nicht als Vorlesungswort
    ausgeben; die Vorlesung nennt bei Stimulanz u. a. „Spiel“ und „Spaß“.
  - Nicht bestreiten, dass [105] Hedonisten auch „sehr konsumaffin“ und „Trendsetter“ nennt (`limbic-map.md` §3.2);
    „Trendsetter“ ist für Marco gerade nicht belegt.
  - Die 41 % beschreiben die Kategorie, nicht die HOLY-Kundschaft. Gaming nicht als Trinkanlass darstellen: Laut
    Mitgründer Jost wird HOLY „in der Regel gar nicht beim Gaming“ getrunken (Dossier 4.1 ✔ [24]).
- **Belastbar:** **TEILWEISE** – der Begriff ist belegt; die Zuordnung ist eine Hypothese, die Auswertung der
  Bewertungen steht aus.

#### F11 – Limbic Types und Prozente: nicht in der Vorlesung

**„In meiner Vorlesung gibt es keine Limbic Types und keine Prozente. Woher kommen ‚Hedonisten‘ und die Werte
40/30/30 für Marco und 30/20/50 für HOLY – ist das eine Messung nach Häusel?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch) · aus P-22, ergänzt nach `abgleich-vorlesung.md` #22
- **Wer antwortet:** Yannick (A)
- **Antwort:**
  > Nein, keine Messung: Typen und Gewichte sind unsere Erweiterung nach der Gruppe Nymphenburg, so steht es in der
  > Fußzeile; die Karte folgt Ihrer Folie 69, und die Vorlesung verlangt, die Zielgruppe zu analysieren und die Marke
  > im Limbic-Raum zu positionieren (S. 93) – genau das tun die Gewichte. Für Marco haben wir Signale aus
  > Kategoriedaten gezählt; das ergibt nur die Rangfolge Stimulanz vor Dominanz und Balance, daraus schätzen wir
  > Stimulanz 40, Dominanz und Balance je 30, bewusst nah an der Mitte. HOLYs Auftritt haben wir vom Startwert aus
  > unserem Dossier nach Verpackung, Kampagnen und Ton angepasst: Stimulanz 50, Dominanz 20, Balance 30. Bei
  > plus/minus 5 je Wert ist die Lücke von 10 Punkten bei Dominanz nur eine Tendenz – das Urteil „passt teilweise“
  > tragen die qualitativen Belege, vor allem, dass die Schicht im Auftritt kaum vorkommt.
- **Beleg:** Folie 05 Fußzeile „Typen (nymphenburg.de) und Gewichte: Erweiterung, nicht in der Vorlesung“ (Z. 1171),
  Hinweis „Gewichte: Schätzung des Teams“ (Z. 1146), Daten (Z. 1228–1229: Marco B 30 / D 30 / S 40, Marke B 30 /
  D 20 / S 50), Sprechtext Schritt 0 (Z. 1180), Belege (Z. 1185: „Zählung des Teams: Stimulanz 5, Dominanz 3,
  Balance 3 Punkte → 40/30/30 (je ±5)“; Startwert Dossier 4.4 B 30 / D 15 / S 55, H), Rückfragen (Z. 1186: „In der
  Vorlesung gibt es keine Typen – warum nutzt ihr sie?“, „Wie kommt ihr auf die Prozentwerte?“); Stenger S. 69, 71,
  93 (an der PDF gegengelesen; `abgleich-vorlesung.md` #22–#24); `limbic-map.md` Kopf (Z. 35–40), §2 „Unsere
  Heuristik“, §3.1, §3.2 (Gesamturteil des Teams, direkt umgerechnet ≈ 45/27/27), §4.2, §5, §7; `methoden.md` §1
  (Z. 85); `folienentwuerfe.md` Folie 5 (Z. 549–558).
- **Fallstricke:**
  - Nicht sagen: „gemessen“ oder „nach dem Limbic-Verfahren“. Die „Überschneidung 90 %“ nicht nennen
    (`limbic-map.md` §5).
  - Nicht behaupten, 40/30/30 sei aus den Punkten ausgerechnet: Direkt umgerechnet wären es etwa 45/27/27; die
    Prozente sind ein Gesamturteil des Teams (§3.2).
  - Statista-Werte nur wie in `persona-daten.md`: Videospiele +12 (41 % gegen Ø 29 %) geht; „Technik +7“ nennt die
    Rückfrage-Notiz (Z. 1186), es steht aber nicht in `persona-daten.md` – weglassen.
  - „Die Karte folgt der Vorlesung“ heißt: gleiche Anordnung wie S. 69 (#23). Wir zeigen eine eigene, vereinfachte
    Darstellung, keine Vorlesungsgrafik (Rechtevermerk Nymphenburg in der Fußzeile); die Abgleich-Vermerke in Kasten
    und Kommentaren sind noch nicht geschlossen.
  - Der Typ bleibt die Hauptaussage der Folie (Entscheidung Yannick, 21.10.2026) – trotzdem nicht als Teil der
    Vorlesung darstellen. Die Lücke rechnen wir aus den Gewichten, nicht aus dem Typ (Notiz Z. 1186).
  - Nachfrage zum HOLY-Punkt: Er ist ein Mittelwert, kein Typ der Marke. Die Vorlesung zeigt Marken mit ihrem
    „Territorium“ (S. 71, 93) – auf Nachfrage: „HOLY besetzt vor allem Spaß und Kreativität“ (#24, im Sprechtext
    noch nicht umgesetzt).
  - Zahlen immer mit dem System nennen (Marco: Stimulanz 40, Dominanz 30, Balance 30; HOLY: Stimulanz 50,
    Dominanz 20, Balance 30). Das Patt zwischen Dominanz und Balance hängt an der Zählregel für den Schicht-Anlass
    (§3.2).
- **Belastbar:** ja

#### F12 – Echte Befragte oder KI?

**„Habt ihr echte Leute befragt – oder sind die Zahlen ausgedacht? Auf Folie 6 steht n = 8, davon fünf KI-Personas,
und überall ‚Beispieldaten‘. Warum mittelt ihr KI-Antworten mit echten?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch), Publikum (hoch) · aus P-01 und Q-02
- **Wer antwortet:** Lukas (B)
- **Antwort:**
  > [Zahl] unserer Befragten sind KI-simuliert [Prompt P8/P9 – nur sagen, wenn die Läufe stattgefunden haben; Stand
  > von Lukas], echte Kurzinterviews haben wir [tatsächliche Zahl] geführt; geplant waren drei bis fünf. Simuliert haben wir, weil eine repräsentative Befragung im Zeitrahmen nicht machbar war – die
  > simulierten Antworten sind für uns Hypothesen, keine Daten, und wir zählen KI und echt getrennt [nur so sagen, wenn
  > umgesetzt; die Aufteilung steht dann in der Fußzeile und in Backup B4]. Repräsentativ ist das nicht; es zeigt
  > Richtungen, und wo KI und echte Befragte auseinandergehen, sagen wir das offen.
  >
  > [Nur falls am 26.10. doch noch Beispieldaten auf den Folien stehen, ehrlich: „Was mit ‚Beispieldaten‘ markiert
  > ist, sind im Moment Beispielwerte, keine Ergebnisse.“ Das ist dann ein Mangel, keine Antwort.]
- **Beleg:** Pillen „Beispieldaten“ auf f06–f12 und B4–B6; Folie 06 Fußzeile „5 KI-Personas + 3 Kurzinterviews,
  gemittelt“ (Z. 1367) und Hinweise mit Rückfrage „Wie genau sind die Werte?“ (Z. 1375); Fußzeilen 07 (Z. 1545), 08
  (Z. 1802), 08b (Z. 1967), B4 (Z. 3480), B5 (Z. 3572); B1 Pille „teils geplant“ (Z. 3186), Spalte 01 „Befragte
  simulieren – repräsentative Befragung zeitlich nicht machbar“ (Z. 3200), Spalte 02 „Simulation mit 3 echten
  Kurzinterviews abgleichen“ (Z. 3218), Notizen (Z. 3261, 3264: „‚3‘ ist die geplante Zahl“);
  `dossier-buendel-b.md` §5 Vergleichstabelle (Z. 324), §7 „Simulierte Befragte sind keine Daten“ (Z. 362), §10
  Punkte 5 und 12; `methoden.md` §2; `abgleich-vorlesung.md` #2, #15; FRAGE-Q-01, FRAGE-P-04.
- **Fallstricke:**
  - Nicht „8 Befragte“ sagen ohne „davon 5 KI-simuliert“; KI-Personas nie „Befragte“ nennen ohne „KI-simuliert“.
    Nicht „wir haben acht Personen befragt“, solange die Interviews nicht dokumentiert sind.
  - Nicht „drei Interviews“ sagen, wenn weniger geführt wurden – laut B1-Notiz ist „3“ nur die geplante Zahl; ebenso
    „+ Kurzinterviews“ auf Folie 02 und in den Fußzeilen (Planung). Ohne Interviews dort streichen – Entscheidung der
    Gruppe (#15).
  - „Gemittelt“ nicht als Stärke darstellen; nicht „repräsentativ“ oder „signifikant“.
  - Stammen die Skalenwerte nur von den fünf simulierten Befragten (Vorschlag `dossier-buendel-b.md` §10 Punkt 12),
    nicht sagen, die Mittelwerte kämen aus KI und echten Interviews – so steht es noch in der Notiz 06 (Z. 1375).
    Den Notizsatz „Ergebnisse mit drei echten Kurzinterviews geprüft“ nur verwenden, wenn die Interviews geführt und
    getrennt ausgewertet sind (Hinweis im Kasten 06).
  - Stehen am 26.10. noch „Beispieldaten“ oder „teils geplant“ auf den Folien, ist das ein Mangel: vorher überall
    dieselbe tatsächliche Zahl eintragen. Die Beispielwerte (9 Nennungen, 6,6, +2/+3) nicht als Ergebnis nennen.
  - Die Gründerantworten nicht als Interviewdaten ausgeben – sie fließen nicht in Repertory Grid oder Laddering ein.
- **Belastbar:** **NEIN** (Stand 21.10.) – im Repository steht nirgends, wie viele echte Interviews es gab; belastbar
  erst mit der tatsächlichen Zahl und getrennter Auswertung.

#### F13 – KI ersetzt kein Kundengespräch: Zirkelschluss?

**„Ihr habt Befragte mit KI simuliert. In meiner Vorlesung steht: KI ersetzt nicht das Gespräch mit echten Kunden.
Gibt euch die KI nicht einfach zurück, was ihr hineingebt – ist das nicht ein Zirkelschluss?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch) · aus P-02, ergänzt nach `abgleich-vorlesung.md` #15
- **Wer antwortet:** Lukas (B), ergänzt von Yannick (A, B1)
- **Antwort:**
  > Ja, das Risiko sehen wir, und genau davor warnt Ihre Folie 78: Eine generierte Persona beschreibt
  > Trainingsdaten, nicht die eigenen Kunden, und plausible Details ersetzen keine Empirie. Deshalb sind die
  > simulierten Antworten für uns nur Hypothesen für Interviews – das nennt S. 78 als sinnvolle Hilfe; dass wir daraus
  > simulierte Befragte machen, ist unsere eigene Übertragung, und so steht es in Backup B1. Unser Persona-Block
  > enthielt zum Beispiel „ohne Zucker“, was die KI dazu sagt, kann also aus dem Block stammen – als Ergebnis zählen
  > wir es nur, wenn echte Befragte oder Kundenbewertungen es auch nennen [nur sagen, wenn so ausgewertet]. Solange die
  > echten Kurzinterviews fehlen, ist das eine Grenze unserer Folien 6 bis 8b, und das sagen wir offen.
- **Beleg:** Stenger S. 78 „KI und Persona: Chancen und Trugschlüsse“ (an der PDF gegengelesen;
  `abgleich-vorlesung.md` #15); B1 Grenze „Simulierte Befragte spiegeln Trainingsdaten, ersetzen kein
  Kundengespräch (vgl. Stenger, S. 78)“ (Z. 3241) und Notizen (Z. 3262–3263: Zuordnung unserer KI-Nutzung zu S. 78,
  „Diese Übertragung der Persona auf simulierte Befragte ist unsere eigene, S. 78 nennt sie nicht“); Folie 02
  Rückfrage „Wie belastbar sind KI-Ergebnisse?“ (Z. 593); Folie 04 Notiz (Z. 954); Folie 12 Notiz (Z. 3068);
  `dossier-buendel-b.md` §2 „Achtung, der Persona-Block prägt die Antworten vor“ (Z. 98–106), §5 Spalte „im
  Persona-Block angelegt?“ (Z. 324), §7 (Z. 362), Anhang 2; `prompts.md` Teil C „Limitationen“;
  `persona-steckbrief.md` Kopf (Z. 17–27).
- **Fallstricke:**
  - Nicht sagen: „Die KI-Personas haben bestätigt …“ oder „validiert“.
  - Nicht behaupten, die Vorlesung erlaube oder empfehle simulierte Befragte – S. 78 nennt „erste Hypothesen für
    Interviews formulieren“, nicht die Simulation (B1-Notiz).
  - Die fünf Profile nicht als unabhängige Beobachtungen ausgeben: Sie entstehen in einer Antwort desselben Tools
    (`dossier-buendel-b.md` §7).
  - Den Satz zum Persona-Block nur so sagen, wenn der volle Block verwendet wurde (Standard laut §2); bei der
    gekürzten Variante die Beispiele anpassen. Die Regel „zählt nur, wenn auch echt“ nur nennen, wenn sie angewandt
    wurde.
  - Beim Zeigen von B1 die Grenze „Sprachmodelle erfinden Fakten – nichts ungeprüft übernommen“ (Z. 3243) nicht
    vorlesen, solange die eigene Prüfung der Gruppe offen ist (siehe F23).
  - Verlangt er den Prompt: Der Wortlaut von P7–P12 steht in `prompts.md` und `dossier-buendel-b.md` Anhang 1; der
    Nachweis der tatsächlichen Nutzung (Tool, Datum, Verlauf) fehlt noch im KI-Nachweis, Abschnitt 3 (FRAGE-P-10).
- **Belastbar:** **TEILWEISE** – hängt daran, ob die echten Interviews stattfinden und die Regel „zählt nur, wenn
  auch echt“ angewandt wird.

#### F14 – Drei Markeneigenschaften und „zuckerfrei“

**„Wie kommt ihr auf genau drei Markeneigenschaften – auf der Folie steht ‚Attribute‘? Und warum soll ‚zuckerfrei‘
HOLY abheben, wenn Gönrgy oder Coca-Cola Zero auch zuckerfrei sind?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch) · aus P-03
- **Wer antwortet:** Lukas (B)
- **Antwort:**
  > Eine Markeneigenschaft – so heißt das Feld in Ihrer Vorlesung, in der Literatur auch Markenattribut – muss bei uns
  > drei Kriterien erfüllen: Sie wird oft genannt, HOLY weicht deutlich vom Durchschnitt der fünf Wettbewerber ab, und
  > HOLY liegt nah an der Idealmarke; die Schwellen stehen in Backup B4 [tatsächliche Schwellen und Zahl der
  > Eigenschaften nennen]. Gemessen wird, wie die Befragten die ganze Marke sehen, nicht eine einzelne Variante. Weil
  > wir gegen den Durchschnitt aller Wettbewerber rechnen und Gönrgy im Set zuckerfrei ist, drückt das den Vorsprung
  > bei „zuckerfrei“ [echten Vorsprung nennen; ist er klein, offen sagen, dass „zuckerfrei“ allein HOLY kaum abhebt].
- **Beleg:** Folie 06 Titel „Drei Attribute heben HOLY vom Wettbewerb ab“ (Z. 1347), Sprechtext Schritt 3
  „Markeneigenschaften erfüllen drei Bedingungen“ (Z. 1374), Hinweise mit Kriterien und Rückfrage „Zuckerfrei gibt es
  doch auch bei anderen“ (Z. 1375); B4 Daten „schwellen“ (Z. 3518: Abstand ≥ 1,5) und Notizen (Z. 3485–3487);
  `methoden.md` §2 (3–5 Eigenschaften); `dossier-buendel-b.md` §10 Punkt 8 (≥ 1 gegen ≥ 1,5) und B1 Schritt 5 (Regel
  vorher festlegen); Dossier 5.2 (Gönrgy zuckerfrei ✔ [109, 115]), 5.3 Set-Vorschlag (H), 3.6 (HOLY vergleicht sich
  nur mit gezuckerten Standardprodukten, H); Stenger S. 60, 88, 90–91 („Markeneigenschaften“; #29).
- **Fallstricke:**
  - Titel und Sprechtext von Folie 06 sagen noch „Attribute“ (#29, offen, Lukas) – den Begriff kurz einordnen,
    nicht verteidigen.
  - Die drei Kriterien sind unsere Festlegung; zur Auswahl sagt die Vorlesung nichts. Eine Anlehnung an die Ziele der
    Positionierung (S. 92: attraktiv, abgegrenzt, vorgezogen) wäre eine eigene Übertragung (#43, nicht umgesetzt) –
    nur so nennen.
  - Persönlichkeitsartige Konstrukte wie „seriös – frech“ gehören nach S. 88 eher zur Tonalität (#44) – nicht als
    Markeneigenschaft verteidigen.
  - Nicht sagen: „HOLY ist die einzige zuckerfreie Marke.“ Dass Coca-Cola Zero zuckerfrei ist, steht nicht im
    Dossier (laut Notiz 06 Modellwissen) – nur nach Prüfung nennen.
  - Den Notizsatz „Darum ist der Vorsprung bei zuckerfrei der kleinste der drei“ (Z. 1375) nur sagen, wenn die echten
    Daten das zeigen – heute beruht er auf Beispieldaten (+2 gegenüber +3).
  - Schwellen nicht als vorab festgelegt ausgeben, wenn sie erst nach den Daten gewählt wurden; B4 nennt ≥ 1,5
    Skalenpunkte, die Aufgaben ≥ 1 – nur die tatsächlich notierte Regel nennen (FRAGE-P-05).
  - Ist „zuckerfrei“ nach der echten Auswertung keine Markeneigenschaft, Antwort und Folientitel anpassen.
- **Belastbar:** **TEILWEISE** – Schwelle nicht datiert festgelegt, Werte sind noch Beispieldaten.

#### F15 – Nur HOLYs Werbung nachgezeichnet?

**„‚Genuss mit gutem Gewissen‘ ist fast wörtlich HOLYs eigenes Versprechen. Habt ihr mit dem Laddering nicht einfach
die Werbung nachgezeichnet – was habt ihr da eigentlich analysiert?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch), Publikum (mittel) · aus P-05 und Q-12
- **Wer antwortet:** Lukas (B, Laddering), ergänzt von Elias (C, Konsistenzprüfung auf Folie 10)
- **Antwort:**
  > Der Einwand ist berechtigt, und genau das prüfen wir: Die Kette zum guten Gewissen steht schon als Hypothese in
  > unserem Dossier, HOLY verspricht selbst „Geiler Geschmack mit gutem Gewissen“, und laut Gründer Mathias Horsch
  > (Befragung 10/2026) ist das auch sein Selbstbild – das zeigt zunächst nur eine einheitliche Botschaft.
  > Entscheidend ist, ob echte Befragte „gutes Gewissen“ von sich aus nennen; die KI-Leitern zählen wir dafür nicht,
  > weil unser Persona-Block „ohne Zucker“ schon enthält [Ergebnis nennen: wie viele echte Befragte, getrennt von der
  > KI]. Unsere eigentliche Analyse steckt in der Konsistenzprüfung auf Folie 10: Wo passt der Auftritt nicht zur
  > Identität – Koffein gegen gutes Gewissen, eine Bildwelt, die jünger wirkt als die Kundschaft, und mindestens sechs
  > Claims parallel.
- **Beleg:** Folie 07 Kicker „Beispieldaten“, Titel (Z. 1526), Sprechtext Schritt 3 „aus ihr leiten wir später die
  Positionierung ab“ (Z. 1552) und Schritt 4 „Das deckt sich mit dem eigenen Versprechen der Marke“ (Z. 1553),
  Hinweise (Z. 1554); Dossier 3.7 (Kette „zuckerfrei → … → gönnen ohne schlechtes Gewissen“, H), 2.7 ✔ [5] und 6.5
  ✔ [5, 20] (Markenversprechen); `dossier-buendel-b.md` §1 Persona-Block „ohne Zucker, aber mit Geschmack“, §2
  (Z. 98–100); `gruenderbefragung.md` §1 Nr. 1, §3 Frage 1; Folie 10 Sprechtext Schritt 7–8 (Z. 2639–2640) und
  „Herkunft der Stichworte“ (Z. 2642: „als Selbst- und Fremdbild gilt sie erst, wenn das Laddering dasselbe zeigt“);
  Folie 11 Titel (Z. 2804) und Befunde (Z. 2841, 2866, 2891); FRAGE-Q-02.
- **Fallstricke:**
  - Nicht sagen: „Die Befragten bestätigen den Claim“ oder „Das Laddering bestätigt die Positionierung“, solange
    Folie 07 Beispieldaten zeigt. KI-Leitern nicht als Beleg zählen.
  - „Genuss mit gutem Gewissen“ ist die **Positionierung** (Band über dem Rad), nicht der Markenkern (siehe F18).
  - Die Gründerbefragung nicht als Image nutzen: Das ist Selbstbild (Innensicht, n = 1) und fast wörtlich die
    Website.
  - Den Folientitel „HOLY steht für Genuss mit gutem Gewissen“ und den Sprechtextsatz „Das deckt sich mit dem eigenen
    Versprechen der Marke“ erst nach der echten Auswertung so stehen lassen. Übereinstimmung nicht als „Beleg für die
    Stärke der Marke“ überhöhen.
  - Lücken und Bruch sind unsere Bewertung (H, Fußzeile f10), die Belege dafür sind gesichert (Dossier 8 S1–S3, S5).
    Der Bruch liegt nicht im Rad, sondern in der Umsetzung über die Kanäle (Folie 9b).
  - „Mindestens sechs“ Claims sagen, nicht „sechs“ (siehe F33).
- **Belastbar:** **TEILWEISE** – hängt an echten Leitern (Regel B8).

#### F16 – Warum ein Chamäleon?

**„Warum ein Chamäleon – kommt das aus eurer Befragung? Und heißt ‚Chamäleon‘ nicht: ohne festen Kern, passt sich
jedem an?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch), Publikum (mittel) · neu (21.10.2026; Rückfragen in den
  Notizen von Folie 08, `abgleich-vorlesung.md` #38)
- **Wer antwortet:** Lukas (B, trägt Folie 08 vor), ergänzt von Elias (C) – die Einordnung stammt von ihm
- **Antwort:**
  > Nein, das Chamäleon ist unsere Einordnung, also eine Hypothese – Elias hat HOLY so eingeordnet, deshalb steht in
  > der Fußzeile „Tier: eigene Einordnung“; die Analogie-Befragung soll sie prüfen, offen gefragt [Ergebnis nennen,
  > KI-simuliert und echt getrennt]. Gemeint ist der ständige Wechsel bei festem Ton: 31 Energy-Sorten mit je eigenem
  > Comic-Tier, wechselnde Szenen von Wacken bis zum CSD und über die Zeit der Weg vom Gaming-Booster zum Softdrink für
  > alle – frech bleibt HOLY dabei immer, und das Maskottchen, der Adler „Raptor“, ist das Selbstbild. „Ohne festen
  > Kern“ heißt es nicht: Markenkern und Positionierung bleiben (Folie 10). Die Kehrseite, den zersplitterten Auftritt,
  > zeigen wir als Bruch auf Folie 9b.
- **Beleg:** Folie 08 Titel „… wäre ein Chamäleon, kein Adler“ (Z. 1765), Fußzeile „Tier: eigene Einordnung (H)“
  (Z. 1802), Tier-Karte (Daten Z. 1855–1863: wandelbar „31 Energy-Sorten“, vielseitig „Wacken, CSD, Simpsons“, frech
  „Gefährlich geil!“, Selbstbild „Adler ‚Raptor‘“), Sprechtext Schritt 1–3 (Z. 1809–1811), Rückfragen (Z. 1814:
  „Kommt das Chamäleon aus eurer Befragung?“, „Ein Chamäleon – heißt das nicht: ohne festen Kern?“, „Viele Sorten –
  ist das schon Wandel?“, „Tarnt sich ein Chamäleon nicht?“, „Warum nicht mehr der Waschbär?“), Absatz „Chamäleon –
  Einordnung und Begründung“ (Z. 1816); Kasten FOLIE 08 (Z. 1631–1650); Folie 08b Rückfrage „Wo ist das Chamäleon
  von Folie 8 im Profil?“ (Z. 1978) und Zeile „Ins Steuerrad“ (Daten Z. 2030); Folie 10 Feld Tonalität „frecher
  Kumpel · wandelbar · Spaß“ (Daten Z. 2580–2584, Sprechtext Schritt 5 Z. 2637); `marke.js` umfragen.tier (Z. 172–191);
  `limbic-map.md` §4.1, Nachtrag 20.10.2026; Dossier 3.1 ✔ [1, 30, 54], 6.3 ✔ [8, 30], 6.6 ✔ [5, 30, 31, 136], 2.8
  ✔ [15, 22–25], 6.2 ✔ [1, 30], 6.7 (Waschbär, H), 8 S5; Stenger S. 60 („Analogiemethoden (Marke wäre Mensch/
  Tier)“, Markenemotionen „herleiten“).
- **Fallstricke:**
  - Die Begründung ist ein KI-gestützter Vorschlag aus dem Dossier, Elias prüft sie noch (Kasten 08; `limbic-map.md`
    §8 offener Punkt). Bis dahin nicht als „Elias’ Begründung“ ausgeben; Elias liest die drei Gründe und die
    Rückfragen vorher und bestätigt oder ändert sie.
  - Nicht sagen: „Die Befragten sehen HOLY als Chamäleon“ – die Analogie-Befragung (P11, Interviews) ist nicht
    ausgewertet, Folie 08 zeigt Beispieldaten. Die Live-Prozentzahl ist ein Stimmungsbild, kein Beleg (siehe F29).
  - Fragt der Prof, warum das Ergebnis vor der Befragung feststeht (S. 60 verlangt, die Tonalität aus Analogien
    herzuleiten): offen sagen, dass es unsere Hypothese ist; nennen die Befragten überwiegend ein anderes Tier, zeigt
    die Folie das (Kasten 08; #38).
  - Das Wort „Kern“ nur für den Markenkern – nicht „frech im Kern“ (Kasten 08).
  - „Tarnt sich ein Chamäleon nicht?“ – gemeint ist der Farbwechsel, nicht das Verschwinden; die Lebensmittel Zeitung
    bescheinigt ein „auffälliges und knalliges Design“ ✔ [8].
  - „Warum nicht mehr der Waschbär?“ – frühere Hypothese aus Dossier 6.7 (H: frech, clever, verspielt); das Chamäleon
    erklärt zusätzlich den Wechsel, „frech“ und „verspielt“ bleiben als Merkmale auf Folie 08b.
  - Eigene Fassungen je Markt und Kanal (Accounts für Frankreich und Großbritannien, LinkedIn auf Englisch, deutsche
    Sortennamen im Handel) nicht als Stärke darstellen – sie gehören zur Kehrseite (S4, S5).
  - Beim Ton „Gefährlich geil!“ als Beleg nehmen; den Navigations-Claim der Website, den die Notizen zitieren
    (Z. 1814, Dossier 6.2), nicht vorlesen und nicht mit der unsicheren Stelle der Gründerbefragung verwechseln (2.2).
  - Löwe (Red Bull) und Schwan (waterdrop) sind Beispieldaten; deren Persönlichkeit ist laut Dossier 5.2 Modellwissen
    (H).
  - Nachfrage „Ist der Gründer Ende 20 eure Persona?“ – Nein: Die Persona ist der typische Kunde (S. 76), die Analogie
    beschreibt die Marke als Person (Notiz Z. 1814; #46).
- **Belastbar:** **TEILWEISE** – die Einordnung ist als Hypothese belegt; Elias’ Prüfung und die Analogie-Befragung
  stehen aus.

#### F17 – Auswahl, Codierung und Engagement-Rate

**„Wie habt ihr die Beiträge ausgewählt und codiert? Und was sagt eine Engagement-Rate von knapp einem Prozent – ist
das gut oder schlecht?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch) · aus P-08
- **Wer antwortet:** Elias (C)
- **Antwort:**
  > [Falls so erhoben:] Je Pflichtkanal haben wir die letzten 15 bis 20 Beiträge mit Screenshot und Datum erfasst und
  > alle nach demselben Raster codiert: Format, Motiv, Farbwelt, Ton, Markenpräsenz, Claim und Handlungsaufforderung
  > (Backup B6) [falls P12 genutzt: von der KI vorcodiert, von uns stichprobenartig geprüft]. Die Engagement-Rate
  > rechnen wir selbst in Sheets: (Likes + Kommentare) / Follower × 100, gemittelt über die erfassten Beiträge [echte
  > Werte nennen]. Einen externen Vergleichswert haben wir nicht erhoben, deshalb bewerten wir die Rate nicht absolut,
  > sondern vergleichen nur innerhalb unserer Stichprobe, etwa zwischen den Kanälen.
- **Beleg:** Folie 09 Formel (Z. 2151) und Legende „Beispielwert – noch selbst zu erheben“ (Z. 2152), Hintergrund
  (Z. 2175: „selbst erheben … Rechnung in Excel/Sheets, nicht per KI“); Daten engagementRate/stichprobe mit
  „beispiel“: true (Z. 2225–2244); B6 Info (Z. 3681–3689), Fußzeile (Z. 3695), Notizen (Z. 3700–3702: „DIE ZEILEN
  SIND BEISPIELDATEN (keine echten Beiträge)“); `methoden.md` §5; `arbeitsplan.md` (Raten in Excel/Sheets, nicht
  per KI); Follower: Dossier 6.1 ✔ [19, 122–124], Stand 14.10.2026; Stenger S. 60 („insbesondere Instagram/
  Facebook, YouTube“).
- **Fallstricke:**
  - Die Beispielwerte (0,9 %, 0,1 %, 1,6 %, „17 von 50“) nicht nennen – sie sind Platzhalter.
  - Die Erhebung nicht als geführt darstellen, solange B6 Beispielzeilen zeigt.
  - Wurde mit Prompt P12 codiert, das sagen (KI-gestützt, stichprobenartig geprüft).
  - Keinen Branchen-Richtwert aus dem Gedächtnis nennen – im Material gibt es keine Quelle dafür.
  - Bei YouTube führen die Daten Abos statt Follower – die Formel dort als „Follower bzw. Abos“ lesen (FRAGE-P-08).
  - Die Facebook-Gruppe (≈ 40.000, Selbstangabe) nicht zu den Seiten-Followern zählen. Follower am 26.10. neu
    ablesen.
- **Belastbar:** **TEILWEISE** – die Stichprobe ist noch nicht erhoben (Lieferung laut Arbeitsplan war Mi 21.10.).

#### F18 – Antwort auf die Leitfrage: Markenkern oder Positionierung?

**„Was ist in einem Satz eure Antwort auf die Leitfrage? Und ist ‚Genuss mit gutem Gewissen‘ euer Markenkern – das ist
doch nur HOLYs Werbeversprechen?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch) · aus P-10, neu gefasst nach `abgleich-vorlesung.md` #27
- **Wer antwortet:** Elias (C, präsentiert Folie 10), ergänzt von Yannick (A, Synthese C2)
- **Antwort:**
  > Unsere Antwort: HOLY hat eine klare Positionierung – Genuss mit gutem Gewissen –, aber der Auftritt hat zwei Lücken
  > und einen Bruch. Der Markenkern ist wie in Ihrer Vorlesung die Mitte des Rads, „Wer sind wir?“ mit Historie,
  > Herkunft, Rolle und Assets: bei uns 2020 in Berlin gegründet, Herausforderer mit Softdrinks zum Selbermixen
  > (S. 88–91). „Genuss mit gutem Gewissen“ ist die Positionierung, die aus der Identität folgt – kurz wie „Wir machen
  > Helden des Handwerks“ auf Ihrer Folie 94 (S. 87, 94). Dass sie sich mit HOLYs Versprechen „Geiler Geschmack mit
  > gutem Gewissen“ deckt, werten wir erst als Ergebnis, wenn die stärkste Leiter der echten Befragten dasselbe zeigt.
- **Beleg:** Folie 10 Band „Positionierung · aus der Identität“ (Z. 2541–2550), Daten „positionierung“ (Z. 2674),
  Sprechtext Schritt 1 und 7 (Z. 2633, 2639), „Herkunft der Stichworte“ (Z. 2642), Belege (Z. 2644), Rückfragen
  „Ist ‚Genuss mit gutem Gewissen‘ euer Markenkern?“, „Woher kommt die Positionierung?“, „Wodurch grenzt sich die
  Positionierung ab?“ (Z. 2645); Folie 11 Titel „klare Positionierung, zwei Lücken, ein Bruch“ (Z. 2804), Sprechtext
  Schritt 0 (Z. 2920), Belege (Z. 2925); Folie 12 Notizen (Z. 3066, 3068); Folie 03 Titel (Z. 670), Kicker „Wer sind
  wir?“ (Z. 666); Stenger S. 87, 88, 90–91, 94 (an der PDF gegengelesen; `abgleich-vorlesung.md` #27, #34, #40);
  `markenkompetenz.md` Kopf (Z. 29–35) und §4 (Teilaspekte des Markenkerns); `methoden.md` §6; Versprechen:
  Dossier 2.7 ✔ [5], 6.5 ✔ [5, 20]; Dachclaim 6.5 ✔ [1, 8].
- **Fallstricke:**
  - Die alte Antwort nicht mehr verwenden („im Zentrum die Markenkompetenz, darüber der Markenkern als Verdichtung
    aller Felder“) – sie widerspricht S. 90–91 (#27). „Bei Esch heißt die Mitte auch Markenkompetenz“ nur auf
    Nachfrage (Modellwissen).
  - „Klar“ ist unsere Wertung (H); ob der Titel von Folie 11 „klare“ oder „starke“ Positionierung sagt, entscheidet
    Elias (bis 21.10. „starker Kern“).
  - Die Positionierung ist von uns abgeleitet (H) und deckt sich mit dem Versprechen ✔ [5] – nicht als offizielle
    Positionierung von HOLY ausgeben. Einen ausformulierten Positionierungssatz nach S. 94 („Wir unterstützen …, so
    dass …“) gibt es nicht (#34, nicht freigegeben) – keinen erfinden.
  - Nicht sagen: „Die Kundschaft bestätigt die Positionierung“, solange das Laddering Beispieldaten zeigt.
  - Das Asset „HOLY Squad“ nicht als festgelegten Teil des Markenkerns nennen (#35, nicht freigegeben); die Rückfrage
    auf Folie 10 nennt nur „zentrale Markenassets“.
  - Claim und Versprechen auseinanderhalten: Der Dachclaim ist „Die Softdrink Revolution“, „Geiler Geschmack mit gutem
    Gewissen“ das Markenversprechen; die Vorlesung sagt „Slogan“ (S. 60, 95), „Claim“ kommt dort nicht vor (#52).
  - Die Gründeraussage nur als Selbstbild nennen („laut Gründer Mathias Horsch (Befragung 10/2026)“), nicht als
    unabhängigen Beleg; zurzeit steht kein GB-Stichwort im Rad (Z. 2642).
  - Nachfragen: „Woher kommt die Positionierung?“ – aus der stärksten Leiter (zuckerfrei → Genuss ohne Zucker →
    gutes Gewissen) und HOLYs Versprechen (Z. 2645); „Wodurch grenzt sie sich ab?“ – siehe F27.
  - Kern-Satz zwischen Elias und Yannick vorher abstimmen; Elias liest Sprechtext 10 und 11 laut (#27 offen;
    FRAGE-P-18).
- **Belastbar:** **TEILWEISE** – Begriffe nach der Vorlesung belegt; die Positionierung gilt als Identität und Image
  erst mit echter Leiter.

#### F19 – Lücke 1: Koffein gegen gutes Gewissen

**„Lücke 1: Ist ‚gutes Gewissen gegen Koffein‘ überhaupt ein Widerspruch? HOLY meint mit gutem Gewissen doch wenig
Zucker, nicht wenig Koffein.“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch) · aus P-11
- **Wer antwortet:** Elias (C), ergänzt von Yannick (A)
- **Antwort:**
  > Im Selbstbild stimmt das: Laut Gründer Mathias Horsch (Befragung 10/2026) steht gutes Gewissen für wenig Zucker
  > und Kalorien, nach Koffein haben wir nicht gefragt. Die Lücke begründen wir deshalb nur mit der Außensicht: 160 mg
  > Koffein pro Portion HOLY Energy, die Warnung des VKI und Berichte von KONSUMENT und Stiftung Warentest über die
  > Koffeinvergiftung eines Zehnjährigen; dazu warnt die Verbraucherzentrale Niedersachsen, das Pulver könne leicht
  > überdosiert werden. Wer gutes Gewissen verspricht, wird an dieser Kritik gemessen – das ist unsere Bewertung für
  > die Energy-Linie, keine Rechtsprüfung.
- **Beleg:** Folie 10 Sprechtext Schritt 8 (Z. 2640), Belege (Z. 2644), Daten Lücke 1 (Z. 2676–2684: „Koffein vs.
  gutes Gewissen“, markiert „gutes Gewissen“ und „Energy: 160 mg Koffein“); Folie 11 Zeile 1 (Z. 2841) und Belege
  (Z. 2925); Dossier 3.3 ✔ [55, 56] (160 mg), 3.4 ✔ [27] (VKI 12/2024), ✔ [28, 29] (KONSUMENT, Stiftung Warentest
  2026), ✔ [72] (VZ Niedersachsen 03/2026), ✔ [12] (Shop ab 18), S1 (H); `gruenderbefragung.md` 2.1 („Nicht genannt
  heißt nicht abgelehnt“) und 4.3 K11.
- **Fallstricke:**
  - Nicht sagen: „HOLY ist gesundheitsschädlich“ oder „rechtswidrig“.
  - Nicht sagen: „Alle HOLY-Produkte haben 160 mg.“ Iced Tea, Hydration, Milkshake und Syrup sind meist koffeinfrei
    (Dossier 3.1 ✔).
  - Den Gründer nicht als Gegner des Befunds darstellen – er wurde nicht danach gefragt.
  - Fragt er, ob HOLY reagiert hat: Energy gibt es im Shop seit 08–09/2026 nur ab 18 (Dossier 3.4 ✔ [12]). Die
    VKI-Kritik von 12/2024 nicht als heutigen Stand der Packung ausgeben.
  - Die Vergiftung nicht ausschmücken und HOLY keine Schuld zuweisen. Einzelheiten (4–7 Beutel „Apple Alligator“,
    Dossier 3.4 ✔ [28, 29]) nur auf Nachfrage nennen.
  - Nachfrage „Wo steht so eine Konsistenzprüfung in der Vorlesung?“: als eigener Schritt nirgends. Begründen lässt
    sie sich mit den Pfeilen im Rad (S. 88: Eigenschaften „stützt“ Nutzen) – die Eigenschaft „160 mg Koffein“ stützt
    den Nutzen „gutes Gewissen“ nicht. Das ist unsere Lesart (#33, nicht auf der Folie).
- **Belastbar:** ja

#### F20 – 160 mg, Gesundheit, Packung

**„Sind 160 mg Koffein viel – und ist HOLY jetzt gesund? Ihr sagt ja ‚gutes Gewissen‘. Und steht das Koffein nicht
sowieso auf der Packung?“**

- **Wer fragt wahrscheinlich:** Publikum (hoch bzw. mittel) · aus Q-09 und Q-15 (Packung auch in P-14)
- **Wer antwortet:** Elias (C), ergänzt von Lukas (B, nur bei der Nachfrage zu „Gesundheit“ auf Folie 07)
- **Antwort:**
  > Eine Portion HOLY Energy hat 160 mg Koffein, so viel wie zwei 250-ml-Dosen Red Bull; weil Energy rechtlich ein
  > Nahrungsergänzungsmittel ist, gilt die Koffein-Höchstmenge für Erfrischungsgetränke nicht. Ob HOLY gesund ist,
  > bewerten wir nicht: HOLY Energy hat laut Etikett kaum Zucker, ist aber mit Süßstoffen gesüßt, und den hohen
  > Koffeingehalt kritisieren Verbraucherschützer – genau diese Spannung zum „guten Gewissen“ ist unsere Lücke 1. Der
  > Gehalt steht auf dem Etikett, laut VKI standen die Warnhinweise Ende 2024 aber nur hinten; wir meinen eine gut
  > sichtbare Angabe vorn auf der Dose und in den Posts [vorher an einer aktuellen Packung prüfen]. Das betrifft nur
  > die Energy-Linie, die anderen Linien sind in der Regel koffeinfrei.
- **Beleg:** Folie 11 Zeile 1 (Z. 2841 „Koffein vs. gutes Gewissen“, Z. 2851 „Energy-Dose: 160 mg und ‚18+‘ vorn,
  Erklärvideo“), Rückfragen (Z. 2926: „Steht der Koffeingehalt nicht schon auf der Packung?“, „Haben alle Produkte
  160 mg Koffein?“); Folie 10 Lücke 1 (Daten Z. 2676–2684, Sprechtext Z. 2640); Folie 07 Hinweise (Z. 1554: „Vorsicht
  bei Rückfragen zu ‚Gesundheit‘ … keine Gesundheitsaussage über das Produkt“) und B5-Notizen (Z. 3580); Dossier 3.1
  Koffein je Linie ✔ [56–59], 3.3 (Etikett Raspberry Raptor: 0,5 g Zucker, 160 mg Koffein, Acesulfam K und Sucralose
  ✔ [55, 56]; zwei Dosen Red Bull ✔ [27]; Nahrungsergänzungsmittel ohne Höchstmenge ✔ [72]), 3.4 (VKI 12/2024
  „Warnhinweise nur hinten“ ✔ [27], VZ Niedersachsen ✔ [72], KONSUMENT/Stiftung Warentest ✔ [28, 29]), 8 S1.
- **Fallstricke:**
  - Nicht sagen: „gesund“ oder „ungesund“, „gefährlich“ oder „illegal“, „zuckerfrei = gesund“, „Süßstoffe sind
    schädlich“ (steht nicht im Dossier). Keine Rechtsprüfung: Dass keine Höchstmenge gilt, heißt nicht, dass etwas
    rechtswidrig ist.
  - Nicht sagen: „Auf der Packung steht es vorn nicht“, bevor eine aktuelle Packung geprüft ist (VKI-Stand 12/2024;
    FRAGE-Q-05).
  - „In der Regel koffeinfrei“ nicht zu „koffeinfrei“ verkürzen: Iced Tea „Limette x Matcha x Minze“ ca. 35 mg, die
    Hydration-Matcha-Sorte ca. 14 mg, der Milkshake-Eiskaffee 17 mg/100 ml (Dossier 3.1).
  - „HOLY ist zuckerfrei“ nicht pauschal für alle Linien sagen: Der Milkshake hat mit Milch laut HOLY 15 g Zucker
    (Dossier 3.3 ✔ [78, 79]).
  - HOLYs Werbeaussagen (Gewichtsverlust, Diabetiker, Dossier 3.4) nicht ohne Kontext zitieren; deren rechtliche
    Bewertung ist H.
  - Nachfrage zu „Gesundheit“ auf Folie 07 (Lukas): Das ist ein Wert der Befragten – derzeit Beispieldaten – und keine
    Gesundheitsaussage über das Produkt.
  - Nachfrage, ob 160 mg „viel“ sind: Laut VKI überschreiten sie bei Kindern unter 53 kg die EFSA-Einzeldosis
    (Dossier 3.4 ✔ [27]); eine eigene Bewertung für Erwachsene haben wir nicht.
- **Belastbar:** **TEILWEISE** – die aktuelle Packung ist ungeprüft.

#### F21 – Was zuerst, und was kostet das?

**„Was würdet ihr HOLY als Allererstes raten, wenn es nur eine eurer drei Empfehlungen umsetzen kann – und was kostet
das alles, lohnt sich das?“**

- **Wer fragt wahrscheinlich:** Publikum (hoch bzw. mittel), Prof. Stenger (mittel) · aus Q-10, Q-11 und P-14
- **Wer antwortet:** Elias (C)
- **Antwort:**
  > Wir würden mit Empfehlung 1 anfangen, Koffein offen zeigen: 160 mg und „18+“ gut sichtbar vorn auf die Energy-Dose
  > und in die Posts, dazu ein kurzes Erklärvideo [Priorität in der Synthese am Do 22.10. bestätigen und mit
  > Begründung nennen]. Das Versprechen „gutes Gewissen“ ist nur glaubwürdig, wenn HOLY beim Koffein transparent ist,
  > und genau dort setzen Verbraucherschützer an – das ist unsere Bewertung, keine geprüfte Wirkung. Ein Budget haben
  > wir nicht berechnet; qualitativ eingeschätzt (unsere Hypothese) heißt Empfehlung 1 Packung und Posts umgestalten,
  > Empfehlung 2 baut auf HOLYs offenem Creator-Partnerprogramm auf, und Empfehlung 3 ist vor allem eine Entscheidung
  > über Claim und Profilnamen. Ob es sich lohnt, können wir nicht belegen; unser Argument ist ein glaubwürdiger,
  > einheitlicher Auftritt, nicht der Umsatz.
- **Beleg:** Folie 11 Empfehlungen (Z. 2851, 2876, 2901), Sprechtext Schritt 1–3 (Z. 2921–2923), Belege (Z. 2925:
  Kritik ✔ [27–29], Energy im Shop ab 18 ✔ [12]; Empfehlungen = H, „mit der Gruppe abstimmen“) und Rückfrage „Was
  kostet das?“ (Z. 2926: „Budget haben wir nicht bewertet; alle drei Empfehlungen nutzen vorhandene Kanäle“);
  Dossier 8 S1 (Empfehlungsrichtung H) und S5 (H), 6.6 ✎ [90, 131] (offenes Creator-Partnerprogramm ab 18), 3.4
  (VKI 12/2024 ✔ [27]; KONSUMENT und Stiftung Warentest 2026 ✔ [28, 29]), 3.1 (31 Energy-Sorten ✔); Stenger S. 94,
  127 (`abgleich-vorlesung.md` #51).
- **Fallstricke:**
  - Keine Reihenfolge als beschlossen darstellen: Bisher ist keine festgelegt, Folie 11 nummeriert nur. Nicht drei
    verschiedene Prioritäten von drei Personen nennen (FRAGE-Q-06).
  - Nicht sagen: „Das senkt nachweislich die Kritik“ (H) oder „HOLY verschweigt das Koffein“ (das Etikett nennt es,
    Dossier 3.3 ✔ [55, 56]). Keine Rechtsbewertung.
  - Keine Eurobeträge, Prozentwerte, Kosten- oder Reichweitenschätzungen ohne Quelle; nicht „kostet nichts“, nicht
    „lohnt sich nachweislich“. Creator (Empfehlung 2) und eine neue Dosenvorderseite (Empfehlung 1) kosten Geld,
    beziffert haben wir das nicht; Empfehlung 1 betrifft die Dosen aller 31 Energy-Sorten und den Handel.
  - Den Notizsatz „alle drei nutzen vorhandene Kanäle“ nicht allein stehen lassen – für Dose und Creator greift er zu
    kurz (FRAGE-Q-04).
  - Wer die Antwort nach der Vorlesung ordnen will: S. 127 bewertet Instrumente nach Ziel, Wirkung und Kosten; und
    Dose und Shop sind Kundenkontaktpunkte (S. 94), keine Medienkanäle – Spaltenkopf „Kanal“ auf Folie 11 (#51,
    Hinweis für Elias).
  - „18+“ ist keine neue Altersgrenze: Im Shop gibt es Energy seit 08–09/2026 nur ab 18 (Dossier 3.4 ✔ [12]); die
    Empfehlung macht das auf der Dose sichtbar.
  - Die Koffeinvergiftung nur auf Nachfrage und mit Quelle nennen – keine Schuldzuweisung an HOLY.
  - Die WiWo-Modellrechnung zu den 80 Cent pro Portion (Dossier 3.2 ✔ [16]) nicht als Marketingbudget umdeuten.
- **Belastbar:** **TEILWEISE** (Priorität erst nach der Synthese) · Kosten und Nutzen: **NEIN** – nicht erhoben.

#### F22 – Woran merkt HOLY die Wirkung?

**„Woran würde HOLY in einem halben Jahr merken, dass eure Empfehlungen wirken?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch) · aus P-13
- **Wer antwortet:** Elias (C)
- **Antwort:**
  > Messgrößen haben wir noch nicht festgelegt [nach der Synthese die festgelegten Größen nennen]; naheliegend wären
  > Größen aus unseren eigenen Methoden. Für Empfehlung 1: ob Befragte in einer Wiederholung des Laddering „gutes
  > Gewissen“ von sich aus nennen; für Empfehlung 2: der Anteil der Beiträge mit Alltags- oder Schichtanlass und deren
  > Engagement-Rate, wofür wir das Raster aus Backup B6 um eine Spalte „Anlass“ ergänzen würden. Für Empfehlung 3: die
  > Zahl paralleler Claims und Profilnamen – heute mindestens sechs Claims und drei Profilnamen auf den drei
  > Pflichtkanälen.
- **Beleg:** Folie 11 Notizen (Z. 2920–2926, keine Messgröße); Folie 10 „Herkunft der Stichworte“ (Z. 2642: die
  Positionierung gilt als Selbst- und Fremdbild erst, wenn das Laddering dasselbe zeigt); B6-Raster (Daten
  „spalten“ ab Z. 3721: Kanal, Format, Motiv, Farbwelt, Ton, Marke, Claim, Aufruf – keine Spalte Anlass); Formel `methoden.md` §5 bzw. Folie 09 (Z. 2151); `limbic-map.md` §5 (Kurzvideos noch nicht auf Anlässe
  geprüft); Folie 09b Fit „Sechs Claims, zwei Farbwelten, drei Profilnamen“ (Daten Z. 2378); Dossier 6.1 ✔ [19, 122,
  123], 6.5 und S5 ✔ [1, 20, 31, 125]; FRAGE-P-07.
- **Fallstricke:**
  - Keine Zielwerte oder Prozentsteigerungen nennen, die nirgends belegt sind. Keine Umsatzwirkung versprechen.
  - Nicht so tun, als sei eine Erfolgsmessung schon geplant.
  - B6 hat heute keine Spalte „Anlass“, und Anlässe sind noch nicht codiert – es gibt also noch keinen Ausgangswert.
    Die Engagement-Raten auf Folie 9 sind Beispieldaten und taugen nicht als Ausgangswert.
  - Auch das Laddering zeigt noch Beispieldaten; deshalb nicht sagen, Befragte nennen „gutes Gewissen“ „weiterhin“.
  - „Mindestens sechs Claims“ ist unsere Zählung (Dossier 6.5, H), Stand 14.10.2026.
- **Belastbar:** **NEIN** – Messgrößen sind nicht festgelegt.

#### F23 – Was ist mit KI entstanden, was ist eure Leistung?

**„Habt ihr das alles mit KI gemacht – auch die Präsentation? Was ist eure eigene Leistung, und wie kann ich jeden
KI-Schritt nachvollziehen?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (hoch), Publikum (hoch) · aus P-25 und Q-03
- **Wer antwortet:** Yannick (A)
- **Antwort:**
  > Ja, offen – Ihre Aufgabe nennt Desk Research und KI-Tools ausdrücklich als Methoden (S. 60): vor allem Claude Code
  > für das Recherche-Dossier, unsere Ausarbeitungen und den Bau dieser Web-Präsentation. Jeder Prompt an Claude Code
  > und jede Delegation an Unteragenten steht mit Datum im KI-Nachweis, die Aufträge der Workflows im Wortlaut, und
  > einen Auszug zeigt Backup B2 [andere Tools nur nennen, wenn sie aus den persönlichen Listen in Abschnitt 3
  > übertragen sind]. Unsere Leistung sind die Entscheidungen [nur nennen, was entschieden ist, z. B. Marke,
  > Aufteilung, Persona-Richtung, Begriffe nach der Vorlesung, Limbic-Typ als Hauptaussage], der Kontakt zum Gründer
  > und die Statista-Daten über die Campuslizenz [echte Interviews, Social-Media-Stichprobe und Rechnungen in Sheets
  > nur nennen, wenn durchgeführt]. Das Dossier haben weitere KI-Agenten gegengeprüft, 42 von 155 Befunden mussten
  > korrigiert werden [Stand der eigenen Prüfung ehrlich nennen, zurzeit: „Unsere eigene Prüfung der Belege läuft
  > noch.“].
- **Beleg:** Stenger S. 60 (an der PDF gegengelesen); Folie 02 (KI-Kennzeichen je Methodenkarte; Fußzeile „KI =
  KI-gestützt, Ergebnisse geprüft“, Z. 580); B1 (Titel Z. 3187, Zahlen 155/42/32 Z. 3227 ff., Notizen Z. 3261–3264);
  B2 (Titel „Jeder KI-Schritt ist dokumentiert – und wird geprüft“ Z. 3300, Notizen Z. 3319–3321); B7 „Technik“;
  Dossier 9.5 (KI-Unteragenten, jeder Bereich zweimal geprüft); `ki-nachweis/ki-nachweis.md` Abschnitt 4 „Wie dieser
  Nachweis entsteht“, Abschnitt 3 („_noch keine Einträge_“), Abschnitt 1 (kein Prüffeld abgehakt, Stand 21.10.),
  Einträge 10/13 (Marke), 29 (Bündel), 43/44 (Statista-Dateien), 53 (Kontakt Lukas), 64 (Workflow-Skript der
  Gründerbefragung im Repository geschwärzt), 104 und 109 (Entscheidungen Yannick zu Begriffen, Chamäleon, Limbic-Typ);
  `ki-nachweis/ki-nachweis-account-2.md`; `arbeitsplan.md` „Regeln für den KI-Nachweis“; FRAGE-P-01, FRAGE-Q-03,
  FRAGE-P-11.
- **Fallstricke:**
  - Nicht sagen: „KI nur für Tempo“ oder „nur zur Recherche“ – sie hat Dossier, Ausarbeitungen und Präsentation
    erstellt, dazu die Begründung des Chamäleons (Vorschlag), Name und Beruf der Persona (Vorschläge) und die
    Illustrationen. Keinen Prozentanteil „von uns“ nennen (nicht erhoben). Nicht „die Präsentation haben wir selbst
    programmiert“. KI nicht als Faktenquelle darstellen.
  - Nicht behaupten, die Einträge seien von der Gruppe geprüft: Stand 21.10. ist in `ki-nachweis.md` und
    `ki-nachweis-account-2.md` kein Prüffeld abgehakt. Solange das so ist, B1-Titel „die Fakten prüfen wir selbst“,
    die B1-Grenze „nichts ungeprüft übernommen“ (Z. 3243) und die Fußzeile 02 „Ergebnisse geprüft“ (#5) nicht
    wörtlich vertreten – „gegengeprüft“ heißt beim Dossier: von KI-Agenten.
  - „Jeder Prompt“ gilt für Claude Code; andere Tools stehen erst nach dem Übertrag der persönlichen Listen in
    Abschnitt 3 (derzeit leer) – nicht als vollständig ausgeben.
  - Freigaben, die noch „Prüfung durch Yannick offen“ tragen (z. B. Marktrolle), nicht als entschieden darstellen.
    Echte Interviews und Social-Media-Stichprobe nicht als erledigt nennen, solange Folie 06–09 Beispieldaten zeigen.
  - Den Bau der Präsentation dokumentiert auch ein zweiter Nachweis (`ki-nachweis-account-2.md`) – bei Nachfrage
    beide Dateien nennen.
  - Ein Workflow-Skript (Gründerbefragung) ist im Repository aus Datenschutzgründen teilweise geschwärzt
    (KI-Nachweis 64) – also nicht „alles öffentlich im Wortlaut“ sagen.
  - Ob Prof. Stenger besondere KI-Vorgaben macht, ist nicht geklärt; die Vorlesung verlangt nur, die Prompts zu
    dokumentieren und das Vorgehen im Backup zu begründen (S. 60). Nicht „mit dem Prof abgestimmt“ sagen.
- **Belastbar:** **TEILWEISE** – Prüfung durch die Gruppe und Abschnitt 3 des KI-Nachweises sind offen.

### Wahrscheinlichkeit mittel

#### F24 – Echte Dose? Logo verwenden?

**„Ist das auf Folie 1 eine echte HOLY-Dose? Und dürft ihr das Logo überhaupt verwenden?“**

- **Wer fragt wahrscheinlich:** Publikum (mittel), Prof. Stenger (mittel) · neu (21.10.2026; Rückfragen in den
  Notizen von Folie 01)
- **Wer antwortet:** Yannick (A, Folie 01)
- **Antwort:**
  > Nein, die Dose ist erfunden: eine Illustration, die die KI (Claude Code) nach unseren Vorgaben als Vektorgrafik
  > gezeichnet hat – deshalb steht auf der Titelfolie „Dose fiktiv“. Nur das Logo ist das Original von der Website der
  > Marke, unverändert eingesetzt und ab der Auflösung mit Quelle in der Fußzeile; auf Folie 9b und 12 kennzeichnet es
  > die analysierte Marke. Ob das Original-Logo auf einer erfundenen Dose so in Ordnung ist, haben wir mit unserem
  > Betreuer geklärt: [Ergebnis nennen; solange offen: „Das klären wir gerade mit dem Betreuer.“]
- **Beleg:** Folie 01 Einordnungszeile „Studentische Fallstudie · keine Verbindung zur HOLY Softdrinks GmbH · Dose
  fiktiv“ (Z. 320), Fußzeile „Logo © HOLY Softdrinks GmbH, de.holy.com (Abruf 16.10.2026)“ und „Illustration:
  eigene Gestaltung, KI-gestützt (Claude Code), 20.10.2026“ (Z. 346), Notiz „Vor dem Vortrag“ mit den Rückfragen „Ist
  das eine echte Dose?“, „Dürft ihr das Logo verwenden?“, „Warum kein Tier auf der Dose?“ (Z. 356); `marke.js`
  (Z. 49–93: logo, logoTitel, raetselBild, Rückfall ohne Logo); `QUELLEN.md` §3 (Z. 62–98, „Art der Nutzung (ehrlich
  eingeordnet)“) und §4; `LIESMICH.md` Kopf (Z. 22–26) und Checkliste §12 (Z. 511–519); B7 „Logos (Folien 01, 09b,
  12)“ (Z. 3825); Folie 09b Fußzeile (Z. 2311); Folie 12 Fußzeile (Z. 3061) und Notiz (Z. 3066); Dossier 6.3 ✔ [30]
  (je Energy-Sorte ein eigenes Comic-Tier).
- **Fallstricke:**
  - Nicht behaupten, HOLY habe die Nutzung erlaubt oder sie sei rechtlich geprüft – die Klärung mit dem Betreuer ist
    offen (LIESMICH §12; QUELLEN.md §3). Keine Rechtsberatung.
  - Für Folie 01 nicht „nur zur Kennzeichnung“ sagen: Im Rätsel ist das Logo Teil der Illustration, in Schritt 0 und 1
    stark vergrößert, unscharf und noch ohne Quelle (QUELLEN.md „Art der Nutzung“). „Nur zur Kennzeichnung der Marke“
    (B7) passt zu Folie 09b und 12.
  - Lehnt der Betreuer ab: Folie 01 zeigt den Rückfall ohne Logo (`bilder/raetsel-holy.svg`), dann die Antwort
    anpassen und die Exporte neu erzeugen (LIESMICH §12).
  - „Warum kein Tier auf der Dose?“ – HOLY gibt jeder Energy-Sorte ein eigenes Comic-Tier (Dossier 6.3 ✔ [30]); jedes
    gezeichnete Tier könnte eine echte Sorte nachbilden. Den Tukan der ersten Fassung („Thai Lime Toucan“) nur auf
    Nachfrage – Websuche 19.10.2026, nicht im Dossier.
  - Nicht „KI-Bild“ im Sinne eines Bildgenerators sagen: Die Illustrationen sind als SVG-Code erzeugt, ohne
    Bildgenerator und ohne Fotos (QUELLEN.md §3). Auch das Persona-Bild auf Folie 04 ist eine KI-gestützte
    Illustration, kein Foto, keine echte Person, ohne Logo und Verpackung (Notiz Z. 953, Fußzeile Z. 940).
  - Keine Screenshots von HOLY-Beiträgen zeigen, solange der Betreuer nicht zugestimmt hat (Folie 09, LIESMICH §12).
- **Belastbar:** **TEILWEISE** – die Klärung mit dem Betreuer ist offen.

#### F25 – Energy Drink oder Softdrink?

**„Ist HOLY für euch nun Energy Drink oder Softdrink? Auf Folie 3 greift HOLY den Softdrink-Markt an, eure Persona
trinkt Energy, und im Repertory Grid steht nur ‚Marke A‘. Ersetzt HOLY wirklich Cola und Red Bull?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (mittel), Publikum (mittel) · aus P-18 und Q-14
- **Wer antwortet:** Yannick (A), ergänzt von Lukas (B, Wettbewerbsset)
- **Antwort:**
  > Beides, aber bewusst getrennt: Im Selbstbild ist HOLY eine Softdrink-Marke („zuckerfreie Softdrinks zum
  > Selbermixen“), rechtlich ist HOLY Energy aber ein Nahrungsergänzungsmittel – eine Spannung, kein Fehler. Unsere
  > Persona steht für die heutige Kernkundschaft, und die ersetzt laut Mitgründer Jost (Podcast 2024) vor allem
  > Energy-Dosen wie Red Bull oder Monster; deshalb mischt das vorgeschlagene Wettbewerbsset Energy-Marken, einen
  > Format-Zwilling und eine Softdrink-Referenz: Red Bull, Monster, Gönrgy, waterdrop und Coca-Cola Zero [nur so sagen,
  > wenn das Set so beschlossen und erhoben wurde; sonst: „Folie 6 zeigt noch Beispieldaten, das Set ist ein Vorschlag
  > aus unserem Dossier“]. [Nur auf die Frage nach dem Ersatz:] Laut Gründer Mathias Horsch (Befragung 10/2026) nutzen
  > 95 % der Kund:innen HOLY als vollen oder teilweisen Ersatz für Red Bull, Monster, Coca-Cola oder Lipton Eistee –
  > laut Gründer, Datengrundlage nicht offengelegt. Unabhängige Daten haben wir nicht: In den Circana-Top-5 der Energy
  > Drinks fehlt HOLY, vermutlich weil Pulver dort nicht mitgezählt wird.
- **Beleg:** Folie 03 Rückfragen „Ist HOLY nun Energy Drink oder Softdrink?“ und „Woher kommt die Kundschaft – von
  Softdrinks oder von anderen Pulvern?“ (Z. 717: Selbstbild ✔ [13, 15], Nahrungsergänzungsmittel ✔ [56, 72], Dossier
  S1, 95 % mit Zusatz); Folie 04 Rückfrage „Warum eine Energy-Persona …“ (Z. 955); `persona-steckbrief.md` §2
  Kaufverhalten („als Ersatz für Red Bull oder Monster“ [24]) und Z. 118; Dossier 2.6 (Circana-Top-5 ✔ [26], „Pulver
  nicht gezählt“ = H), 3.1 (fünf Linien), 5.3 (Set-Vorschlag, H); Folie 06 Daten „Marke A“ (Z. 1424); B4 Daten W1
  (Z. 3511); `dossier-buendel-b.md` §10 Punkt 1; `gruenderbefragung.md` §3 Frage 3, §2.3 Regel 3 und K5;
  `folienentwuerfe.md` Folie 3, Rückfragen 6 und 11, Folie 4, Rückfrage 5.
- **Fallstricke:**
  - „95 %“ nie ohne den Zusatz „laut Gründer, Datengrundlage nicht offengelegt“, nie als Ergebnis und nicht von sich
    aus nennen – nur als Antwort auf die Frage nach dem Ersatz (`gruenderbefragung.md` §2.3 Regel 3, K5).
  - Das Wettbewerbsset nicht als beschlossen darstellen, solange das nicht dokumentiert ist (FRAGE-P-09). „Marke A“
    erst durch den echten Namen ersetzen, wenn echte Bewertungen vorliegen.
  - „Ersetzt vor allem Energy-Dosen“ stammt aus dem automatischen Transkript des Jost-Podcasts – sinngemäß sagen, nicht
    als geprüftes Zitat (Dossier 9.4).
  - Energy ist nur eine von fünf Linien (Dossier 3.1). Horschs „Softdrink-Marke wie Red Bull“ nur als Selbstauskunft
    nennen.
  - Nicht sagen: „HOLY nimmt Red Bull Marktanteile ab“ (Red Bull ≈ 58 % ✔ [26], keine HOLY-Daten). „Circana zählt
    Pulver nicht“ ist eine Vermutung (H).
  - Jost (2024) und Horsch (2026) sind zwei Selbstauskünfte aus verschiedenen Jahren: keinen Widerspruch konstruieren
    und keine davon als Kundendaten ausgeben.
  - Nachfrage „Kommen die Kund:innen von anderen Pulvern?“: Laut Gründer Mathias Horsch (Befragung 10/2026) nur ein
    kleiner Teil aus dem Sirup- und Pulverbereich – nach Firmendaten, die er nicht vorlegt.
- **Belastbar:** **TEILWEISE** – Wettbewerbsset nicht als Beschluss dokumentiert, Ersatzangaben nur Selbstauskünfte.

#### F26 – Warum „Herausforderer“?

**„HOLY taucht in keiner Marktanteilsliste auf. Warum ‚Herausforderer‘ und nicht Nischenanbieter – und aus welcher
Quelle stammen die Rollen? In meiner Vorlesung kommen sie so nicht vor.“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (mittel) · aus P-17
- **Wer antwortet:** Yannick (A)
- **Antwort:**
  > Nach Marktanteil im Energy-Drink-Handel wäre HOLY klein, eher Spezialist, bei Kotler Nischenanbieter – in den
  > Circana-Top-5 fehlt die Marke, wobei Circana Pulver vermutlich gar nicht mitzählt. Wir ordnen nach dem Verhalten
  > ein: HOLY greift laut Mitgründer Jost den ganzen Softdrink-Markt an und nennt sich selbst „Challenger-Brand“, dazu
  > kommen Handel und die erste große TV-Kampagne. Ihre Vorlesung fragt im Markenkern nach der „Rolle der Marke im
  > Markt“ (S. 88), vergibt aber keine Wettbewerbsrollen; die vier Rollen stammen aus Kotlers Standardliteratur, und
  > „Herausforderer“ ist unsere Einordnung, also eine Hypothese.
- **Beleg:** Folie 03 Titel (Z. 670), Daten (Z. 753–760: Rolle, Rollen „Marktführer, Herausforderer, Mitläufer,
  Spezialist“, Begründung „Jost ✔ [24] · ‚Challenger-Brand‘ ✔ [13] · Rolle nach Kotler, Kriterium Angriff (H)“),
  Fußzeile „Rolle nach Kotler“ (Z. 708), Sprechtext Schritt 2 (Z. 715), Belege (Z. 716), Rückfrage „HOLY fehlt im
  Marktanteil – warum Herausforderer?“ (Z. 717); Dossier 2.6 (✔ [13], ✔ [26] Circana-Top-5 ohne HOLY, H: Pulver nicht
  in der Kategorie), 2.1 (✔ [6], ✔ [18, 25]), 4.1 (✔ [24] Jost); `markenkompetenz.md` §3 (Modellbegriffe MW, „Warum
  Herausforderer?“, „Was dagegen spricht“) und §7 Offene Punkte; Stenger S. 88 („Rolle der Marke im Markt“), Kotler
  dort nur S. 16 und 109–110 zu anderen Themen (`abgleich-vorlesung.md` #31); B7-Notiz (Z. 3839: „Kotler (Rollen auf
  Folie 03) fehlt noch“); FRAGE-P-12.
- **Fallstricke:**
  - Keine Kotler-Auflage oder Seite nennen: Kotler fehlt in B7, die Rollendefinition ist Modellwissen
    (`markenkompetenz.md` §3). Ob Kotler belegt oder gestrichen wird, entscheidet Yannick (#31, offen).
  - Kotler nicht als Vorlesungsinhalt ausgeben. Die frühere „Variante B“ (Rollen nach Marktanteil, falls die Vorlesung
    so ordnet) entfällt – die Vorlesung vergibt keine Rollen.
  - `methoden.md` nennt eine andere Rollenliste (mit „Pionier“) – nicht mischen; „kein Pionier“ ist H.
  - Nicht sagen, HOLY sei „zu klein“ für die Top 5: Dass Circana Pulver nicht mitzählt, ist eine Hypothese
    (Dossier 2.6, H).
  - Keine Softdrink-Marktanteile nennen und keinen eigenen Anteil ausrechnen (170 Mio. € gegen das Circana-Volumen
    wären verschiedene Abgrenzungen).
  - „Challenger“ meint beim Gründer die Haltung („auch über Social Media“), nicht Kotlers Kriterium (Selbstauskunft,
    Horsch 2026 (GB)).
  - Red Bulls ≈ 58 % nur mit Abgrenzung und Quelle nennen (Energy Drinks DE, Circana MAT 08/2025, aus einem
    Schulungsheft, das mit Red Bull entstand).
  - Folgefrage zu Gönrgys „Platz 3“: Das ist eine Eigenangabe auf NielsenIQ-Basis ✔ [109], und Herausforderer kann es
    nach Kotler mehrere geben.
- **Belastbar:** **TEILWEISE** – Kotler nicht im Quellenverzeichnis.

#### F27 – Unterschied zu waterdrop und Red Bull, Abgrenzung

**„Was unterscheidet HOLY eigentlich von waterdrop oder Red Bull – wodurch grenzt sich eure Positionierung ab?“**

- **Wer fragt wahrscheinlich:** Publikum (mittel), Prof. Stenger (mittel, Abgrenzung nach S. 92) · aus Q-13,
  ergänzt nach `abgleich-vorlesung.md` #34
- **Wer antwortet:** Yannick (A), ergänzt von Lukas (B, Folie 06 und 08b)
- **Antwort:**
  > Red Bull ist trinkfertig aus der Dose und laut Circana mit rund 58 % des Umsatzes Marktführer im deutschen
  > Energy-Drink-Handel (Stand 08/2025); HOLY ist Pulver und Sirup zum Selbermixen, mit 160 mg Koffein pro Portion
  > Energy gegenüber 80 mg in einer 250-ml-Dose Red Bull. waterdrop ist am ähnlichsten, ein Format-Zwilling – aber als
  > Würfel, mit rund 90 mg Koffein beim Microenergy und mit Abo, das HOLY nicht hat. Abgrenzen soll laut Ihrer
  > Vorlesung die Positionierung (S. 92): Gegenüber Dosen-Energy und Cola tut das vor allem das Format; „zuckerfrei“
  > allein grenzt ehrlich gesagt kaum ab, abgrenzend ist nach unserer Einordnung die Verbindung aus Format,
  > Sortenvielfalt und frechem Ton. Wie Befragte die Marken sehen, sollen Folie 6 und 8b zeigen – für Red Bull und
  > waterdrop stehen dort bisher nur Beispielwerte.
- **Beleg:** Folie 10 Rückfrage „Wodurch grenzt sich die Positionierung ab?“ (Z. 2645); Stenger S. 92 (an der PDF
  gegengelesen); `markenkompetenz.md` §4 (Z. 235–251); Dossier 5.1 (Red Bull ≈ 58 %, Circana MAT 08/2025 ✔ [26];
  Quellenkritik), 5.2 (Red Bull 80 mg ✔ [26, 27, 68]; waterdrop Brausewürfel, ≈ 90 mg, Abo ✎ [7, 66, 116]), 5.3
  („gleiches Prinzip (Wasser + Konzentrat)“), 3.2 (HOLY 0,80 € ✔ [1]; waterdrop ≈ 0,83 € ✔ [66]), 2.5 (kein Abo
  ✔ [30, 48]); Folie 08b Fußzeile „Wettbewerber: Beispielwerte, noch nicht erhoben“ (Z. 1967); Folie 06 Hinweise
  („Marke A“ = W1, Vorschlag Red Bull, Z. 1375); README.md (Repository) Markenliste (waterdrop); FRAGE-Q-07,
  FRAGE-Q-12.
- **Fallstricke:**
  - Nicht sagen, Aaker- oder Grid-Werte für Red Bull oder waterdrop seien Ergebnisse.
  - Die Abgrenzung durch „Format, Sortenvielfalt und frechen Ton“ ist unsere Einordnung (H); die Repertory-Grid-Werte
    dazu sind Beispieldaten.
  - Nicht sagen: „HOLY ist viel günstiger als waterdrop“ – 0,80 € gelten nur für die 50er-Dose online, waterdrop
    liegt bei ≈ 0,83 €, im Handel kostet HOLY ≈ 1,00–1,33 € ✎.
  - Den Red-Bull-Anteil nur mit Quelle und Abgrenzung nennen (Circana MAT 08/2025; Schulungsheft, das mit Red Bull
    entstand; Dossier 5.1).
  - „waterdrop wirkt ruhiger“ ist H bzw. Modellwissen (Dossier 5.2).
  - Nicht sagen: „Laut Gründer kommt keine Kundschaft von waterdrop“ – das ist unbelegt (`gruenderbefragung.md` K4).
  - waterdrop steht auf Prof. Stengers Markenliste – keine Aussagen über waterdrop, die nicht im Dossier stehen.
- **Belastbar:** **TEILWEISE** – die Sicht der Befragten auf Red Bull und waterdrop ist nicht erhoben.

#### F28 – Schichtdienst: mehr als eine Podcast-Aussage?

**„Euer zentrales Motiv ‚Schichtdienst‘ – stützt sich das auf mehr als eine Podcast-Aussage eines Mitgründers?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (mittel) · aus P-21
- **Wer antwortet:** Yannick (A)
- **Antwort:**
  > Für den Trinkanlass Schicht ist Mitgründer Jost im Podcast 2024 tatsächlich unser einziger direkter Beleg: HOLY
  > werde „in der Regel gar nicht beim Gaming“ getrunken, sondern zum Beispiel im Schichtdienst. Dass Schichtberufe zur
  > Kundschaft gehören, sagen mehrere Quellen – Mathias Horsch 2023 im Interview, ein Bericht von Trending Topics 2024
  > und laut Gründer Mathias Horsch (Befragung 10/2026) auch die Zielgruppe, dort aber nicht als Trinkanlass. Eine
  > Randgruppe ist das nicht: Laut Eurostat arbeiten 17 Prozent der Männer zwischen 25 und 49 in Deutschland in
  > Schichten. Marcos Beruf ist eine Annahme; ob der Anlass trägt, zeigen erst Kundenbewertungen und Lukas’
  > Interviews [Ergebnis nennen, sobald es vorliegt].
- **Beleg:** Folie 04 Sprechtext Schritt 2 (Z. 950), Belege (Z. 953), Rückfrage „Warum Schichtdienst – ist das nicht
  eine Randgruppe?“ (Z. 955), Daten „vor der Schicht“ (Z. 1002); Dossier 4.1 (Horsch 2023 ✎ [4]; Jost ✔ [24];
  Trending Topics ✔ [7]; HV Capital ✔ [14]), 9.4 (Jost-Zitat aus einem automatischen Transkript);
  `persona-steckbrief.md` §2 Soziodemografie (Eurostat lfsa_ewpshi, 2025: 17,0 %; Horsch 2026 (GB) „nicht als
  Trinkanlass“) und Quellen; `limbic-map.md` §5 („Marcos Motiv ist eine Hypothese“), §8; Folie 05 Rückfrage
  „Stimulanz weicht doch genauso ab?“ (Z. 1186: Anlass Schicht in den Bildmotiven nicht belegt); FRAGE-P-13,
  FRAGE-P-14.
- **Fallstricke:**
  - Nicht sagen: „Die meisten Kund:innen arbeiten Schicht.“
  - „Vor der Schicht“ (Kaufverhalten auf Folie 4) ist unsere Zuspitzung; Jost sagt „z. B. im Schichtdienst“.
  - Das Jost-Zitat nicht als wörtlich geprüft ausgeben, solange niemand das Audio gehört hat (Dossier 9.4).
  - Eurostat zeigt nur, dass Schichtarbeit verbreitet ist, nicht, dass HOLY-Kund:innen Schicht arbeiten.
  - Horsch 2023, HV Capital und die Befragung sind Selbstauskünfte und nennen Berufe, keinen Trinkanlass.
  - Folgefrage zu Folie 5: Dass der Auftritt die Schicht kaum zeigt, ist die Lücke (`limbic-map.md` §5), kein
    Widerspruch zur Persona.
- **Belastbar:** **TEILWEISE** – der Trinkanlass hängt an einer Quelle; Audio und Bewertungen sind noch nicht geprüft.

#### F29 – Live-Abstimmung: Daten und vorgegebene Tiere

**„Was passiert eigentlich mit meiner Stimme – ist das anonym? Und ihr gebt die Tiere doch vor, lenkt das nicht das
Ergebnis?“**

- **Wer fragt wahrscheinlich:** Publikum (mittel), Prof. Stenger (mittel, Methode) · neu (21.10.2026; Folie 08,
  `abstimmen.html`)
- **Wer antwortet:** Lukas (B, Folie 08); zu Daten und Technik ergänzt Yannick (A) – die Abstimmung läuft über eine
  Web-App in seinem Google-Konto
- **Antwort:**
  > Die Abstimmung ist anonym und ohne Anmeldung: Gespeichert werden nur Tier, Uhrzeit, Abstimmungsrunde und eine
  > zufällige Geräte-ID, damit jedes Handy nur einmal zählt – kein Name, keine IP-Adresse, in einer privaten Tabelle
  > der Gruppe; so steht es auch unten auf der Abstimmseite. Auf der Folie zählen nur Stimmen der letzten 30 Minuten,
  > damit keine Probestimmen dastehen. Und ja, die Tiere geben wir hier vor, damit es schnell geht – deshalb ist das
  > Ergebnis nur ein Stimmungsbild im Raum, keine Herleitung; [nur wenn Interviews geführt:] in den Interviews haben
  > wir offen gefragt, weil Vorgaben das Ergebnis lenken [sonst: „die Befragung soll offen fragen, weil Vorgaben das
  > Ergebnis lenken“].
- **Beleg:** `praesentation/abstimmen.html` Fuß (Z. 99–100: „anonym · ohne Anmeldung · diese Seite setzt keine
  Cookies“; „Tier, Uhrzeit, Abstimmungsrunde und eine zufällige Geräte-ID (nur in diesem Browser gespeichert, damit
  jedes Handy nur einmal zählt) – kein Name, keine IP-Adresse“) und Kopfkommentar „DATENSCHUTZ“ (Z. 40–45);
  `live-abstimmung/ANLEITUNG.md` „Was gespeichert wird“ (Z. 31–36) und „Datenschutz“ (Z. 439–441); `LIESMICH.md` §6
  Weg A und Zeitfenster (Z. 158–188); `marke.js` umfragen.tier (Z. 184–191: optionen, runde, gueltigMinuten 30,
  unsereAntwort); Folie 08 Fußzeile „Umfrage: Stimmungsbild“ (Z. 1802), Sprechtext Schritt 0–1 (Z. 1808–1809),
  Bedienung (Z. 1813), Rückfrage „Sie haben die Tiere doch vorgegeben?“ (Z. 1814: „In den Interviews fragen wir
  offen, weil Vorgaben das Ergebnis lenken“); Dossier 6.7 (Antworten nicht vorgeben).
- **Fallstricke:**
  - Das 30-Minuten-Fenster wirkt erst, wenn Yannick das Skript bei Google aktualisiert hat (Fassung 20.10.2026;
    LIESMICH Z. 181 und Checkliste Z. 542) – bis dahin diesen Satz weglassen. Kontrolle: Maus auf der Pille zeigt
    „zählt Stimmen der letzten 30 Min.“, nicht „OHNE Zeitfenster“.
  - Nicht sagen: „Es wird nichts gespeichert“ oder „keine Daten“: Die Geräte-ID liegt im Browser-Speicher des Handys,
    die Stimme als Zeile in der Tabelle; ältere Stimmen bleiben dort, sie zählen nur auf der Folie nicht mehr
    (LIESMICH Z. 177). Google und GitHub sehen beim Aufruf technisch die Verbindung (ANLEITUNG Z. 439–441). Kein
    „DSGVO-konform“ – geprüft hat das niemand.
  - „Anonym“ heißt hier: ohne Namen, ohne Anmeldung, keine IP-Adresse in der Tabelle – nicht „technisch spurlos“.
  - Die Prozentzahl nicht als Beleg für das Chamäleon verwenden (Fußzeile „Stimmungsbild“; siehe F16). Löwe und
    Schwan stehen zur Wahl, weil sie im Kontrast für Red Bull und waterdrop stehen – auch das sind Beispieldaten.
  - Vor dem Vortrag die Runde auf `vortrag-2026-10-26` stellen (auf GitHub und auf dem Präsentationsrechner;
    `marke.js` Z. 189; LIESMICH §6) – dann beginnt Folie 08 bei `n = 0`. Bei Weg A **nicht** „Zurücksetzen“ klicken:
    Das pausiert die Live-Abfrage, die Stimmen der Handys erscheinen dann nicht (Pille „Live pausiert“ – anklicken, um
    fortzusetzen). „Zurücksetzen“ nur bei Plan C oder Weg B (Notiz „Bedienung“ von Folie 08, LIESMICH §6 und §12;
    berichtigt in der Nacharbeit am 21.10.2026 – vorher stand hier der alte Weg B).
  - „In den Interviews fragen wir offen“ (Rückfrage Z. 1814) nur sagen, wenn die Interviews stattgefunden haben – sie
    sind im Repository nicht belegt (VORTRAGSREIFE N4, F08-2).
  - Fällt das Netz aus: Handzeichen (LIESMICH §6) – vorher festlegen, wer zählt (Sprechtext Z. 1808 „[Name] zählt“).
  - Umentscheiden geht: Je Handy zählt die letzte Stimme.
- **Belastbar:** **TEILWEISE** – das Skript-Update bei Google steht aus; danach ja.

#### F30 – Tonalität: vorprogrammiert, und Messung nach Aaker?

**„Eure Tonalität ‚frecher Kumpel‘ leitet ihr aus HOLYs eigener Werbung ab, und auf Folie 9b ‚passt‘ der Auftritt
dazu – ist das nicht vorprogrammiert? Und ist das auf Folie 8b eine Messung nach Aaker – wer hat die Werte vergeben?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (mittel) · aus P-06 und P-07
- **Wer antwortet:** Lukas (B), ergänzt von Elias (C, Fit-Bewertung auf 9b)
- **Antwort:**
  > Für den jetzigen Stand stimmt der Einwand: Die Merkmale auf Folie 8b sind noch unsere Tonalitäts-Hypothese aus dem
  > Dossier, abgeleitet aus HOLYs Kommunikation und mit Beispielwerten, und auch die Fit-Bewertung auf 9b ist als
  > Hypothese markiert. Als Prüfmaßstab taugt die Tonalität erst, wenn sie von Menschen kommt, die unsere Hypothese
  > nicht kennen – aus den echten Interviews [Ergebnis nennen: Wo sehen die Befragten HOLY anders als die Werbung?].
  > Aakers Skala nutzen wir nur vereinfacht als ergänzendes Raster: Unter den fünf Dimensionen hat sie weitere Ebenen,
  > wir schätzen direkt je Dimension; in Ihrer Vorlesung ist die Tonalität „Wie sind wir?“ mit
  > Persönlichkeitsmerkmalen, Markenerlebnissen und Markenbeziehungen (S. 88). Bewertet haben [tatsächliche
  > Bewertende nennen, z. B. „die Gruppe und drei Befragte, nur Menschen“].
- **Beleg:** Folie 08b Titel (Z. 1926), Fußzeile „Einschätzung von Gruppe und Befragten (n = 8) – Beispieldaten,
  vereinfacht je Dimension … Wettbewerber: Beispielwerte, noch nicht erhoben · Aaker (1997) · Dossier Kap. 6.7 H“
  (Z. 1967), Notizen (Z. 1973–1980: Rückfrage „Ist das eine Messung nach Aaker?“, Begriffe, Hintergrund „Merkmale und
  Beziehung stammen aus der Tonalitäts-Hypothese …“, „Einschätzung der Gruppe und der Befragten aus Prompt P11“),
  Zeile „Ins Steuerrad“ (Daten Z. 2030); Folie 09b Kicker „Fit des Markenbilds · Hypothese“ (Z. 2303), Fußzeile
  „Bewertung: eigene (H)“ (Z. 2311), Sprechtext Schritt 1 „Zum frechen Kumpel passt das“ (Z. 2316), Fit-Daten „zur
  Tonalität – passt“ (Z. 2376); Dossier 6.7 (Persönlichkeit H), Belege 6.2 ✔; `dossier-buendel-b.md` B3 (Schritt 1
  „Hypothese vorher bekannt“, Umfeld, Tierfrage in echten Interviews; Schritt 5 Aaker-Zuordnung getrennt);
  `gruenderbefragung.md` 2.1 („Nicht genannt heißt nicht abgelehnt“) und 4.4; Stenger S. 88, 90–91
  (`abgleich-vorlesung.md` #42, #45); B7 Aaker (1997); FRAGE-P-03, FRAGE-Q-07.
- **Fallstricke:**
  - Nicht sagen: „Die Zielgruppe empfindet HOLY als frech“ oder „gemessen nach Aaker“, solange nur die
    Dossier-Hypothese steht.
  - Den 09b-Sprechtext „Zum frechen Kumpel passt das“ (Z. 2316) nicht als Befund vortragen; bleibt es bei der
    Dossier-Hypothese, besser „plausibel (Hypothese)“ statt „passt“ sagen (FRAGE-P-03).
  - „Wandelbar“ im Feld Tonalität (Folie 10, Zeile „Ins Steuerrad“ auf 08b) ist das Chamäleon – Elias’ Einordnung (H),
    ebenfalls nicht aus der Befragung (siehe F16).
  - Aaker steht nicht in der Vorlesung (#42): als Ergänzung aus der Literatur bezeichnen. Die Vorlesungsbeispiele
    zeigen die Tonalität als kurze Stichworte ohne Skala (S. 90–91, z. B. „Locker, frech“).
  - Die deutschen Übertragungen (Hieronimus 2003, Mäder 2005) nicht zitieren – laut Notiz Modellwissen und ungeprüft.
  - Die Werte für Red Bull und waterdrop sind nicht erhoben – nicht als Ergebnis nennen.
  - Widerspruch klären, bevor jemand „nur Menschen“ sagt: Die 08b-Notiz (Z. 1980) spricht von der „Einschätzung der
    Gruppe und der Befragten aus Prompt P11“, das Dossier Bündel B (B3 Schritt 5) hält die Aaker-Zuordnung aus P11
    getrennt. Sind P11-Werte eingeflossen, das offen sagen.
  - Die Gruppe kannte die Hypothese vorher (`dossier-buendel-b.md` B3 Schritt 1) – ihre Analogien zählen nur
    eingeschränkt.
  - Zum Vergleich das Selbstbild: Laut Gründer Mathias Horsch (Befragung 10/2026) ist HOLY kundennah, spaßorientiert
    und innovativ; „frech“ nannte er nicht, danach war aber nicht gefragt – nicht als Lücke zwischen Identität und
    Image deuten (2.1).
  - Keine Ergebnisse von Folie 08 vorwegnehmen.
- **Belastbar:** **NEIN** – die Tonalität ist bisher nur die Dossier-Hypothese; wer bewertet hat, ist offen.

#### F31 – Ist der Raptor ein Schlüsselbild?

**„Ist ein Maskottchen schon ein Schlüsselbild? Ihr sagt, HOLY ist ein Chamäleon und die Bildwelt zu jung – und dann
soll der Comic-Raptor durchgängiges Schlüsselbild werden?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (mittel) · aus P-09 und V-06, ergänzt nach `abgleich-vorlesung.md` #48
- **Wer antwortet:** Elias (C)
- **Antwort:**
  > Nicht automatisch: In Ihrer Vorlesung gehören Präsenzsignale zur formalen Integration und stützen die Bekanntheit,
  > Schlüsselbilder zur inhaltlichen Integration und stützen das Image (S. 97). Ein Maskottchen ist zunächst ein
  > Präsenzsignal; zum Schlüsselbild wird der Raptor erst, wenn er immer dieselbe Aussage vermittelt, bei uns den
  > lauten Herausforderer – deshalb steht auf Folie 9 noch ein Fragezeichen, das klärt unsere Stichprobe [Ergebnis
  > nennen]. Gerade weil HOLY als Chamäleon Farben, Sorten und Szenen wechselt, soll der Raptor als fester Absender den
  > Auftritt zusammenhalten – erwachsener inszeniert, kein Kinder-Comic, für die Energy-Linie keine kindlichen
  > Frucht-Comics.
- **Beleg:** Stenger S. 97 („Präsenzsignale“ – „Stützt die Markenbekanntheit“; „Schlüsselbilder“ – „Werden immer die
  gleichen Assoziationen vermittelt?“, „Stützt das Markenimage“; an der PDF gegengelesen), S. 60 („ggf.
  Schlüsselbilder“), S. 3 (Kroeber-Riel/Esch 2018); `abgleich-vorlesung.md` #14, #48; Folie 09 Titel mit „?“
  (Z. 2139), Fußzeile „Schlüsselbild nach Kroeber-Riel (1993)“ (Z. 2168), Sprechtext Schritt 2 und Hintergrund
  (Z. 2174–2175); Folie 08 Rückfrage „Chamäleon, kein Adler – und trotzdem soll der Raptor bleiben?“ (Z. 1814:
  „fester Absender“); Folie 09b Sprechtext Schritt 1 (Z. 2316: „der Adler ist das Selbstbild, gelebt wird das freche
  Chamäleon“); Folie 11 Sprechtext Schritt 3 (Z. 2923), Belege (Z. 2925), Rückfrage „Verstärkt der Raptor nicht die
  zu junge Bildwelt?“ (Z. 2926); Folie 10 Lücke 2 (Daten Z. 2685–2693, Belege Z. 2644: Design „für eine jüngere
  Zielgruppe gedacht“ ✔ [7], Kundschaft 25–40 ✔ [24]); B6 Notiz Schlüsselbild (Z. 3701); Dossier 6.3 ✔ [54, 71], 6.4
  H, 8 S2 und S5 (H); `limbic-map.md` §6 Konsequenz 1.
- **Fallstricke:**
  - Folie 09 nennt „Kroeber-Riel (1993)“; die Vorlesung führt Kroeber-Riel/Esch (2018) (S. 3) und erklärt
    Schlüsselbilder auf S. 97 ohne Urheber (#14). Keine Seitenzahl aus Kroeber-Riel, nicht wörtlich zitieren.
  - Die Notiz 09 nennt die Trennung Präsenzsignal/Schlüsselbild „Unsicher (Modellwissen)“ – sie steht aber auf S. 97
    (#48, Hinweis für Elias). In der Antwort mit der Vorlesung begründen, nicht mit Esch.
  - „Maskottchen“ kommt in der Vorlesung nicht vor (#48) – nicht als Vorlesungsbegriff ausgeben.
  - Widerspruch im eigenen Sprechtext: Folie 11, Schritt 3 (Z. 2923) sagt „Der Raptor bleibt durchgängiges
    Schlüsselbild“. Bis zum Ergebnis der Stichprobe „soll … werden“ sagen und den Sprechtext mit Elias abstimmen
    (#48).
  - Nicht sagen: „Der Raptor ist das Schlüsselbild“, solange die Stichprobe fehlt. Dass er für den Herausforderer
    steht, ist unsere Deutung (H).
  - Chamäleon und Raptor nicht als Widerspruch stehen lassen: Das Chamäleon beschreibt den Auftritt heute (H), der
    Raptor soll der feste Absender werden (Empfehlung 3, Dossier S5, H). Trägt der Raptor in der Stichprobe nicht,
    bleiben von Empfehlung 3 die Claim-Hierarchie und ein Profilname – den Raptor dann nicht verteidigen.
  - Nicht behaupten, HOLY richte sich an Kinder: Das ist die Sicht der Verbraucherschützer [27, 28, 82].
  - Fragt er nach Alternativen: Der zweite Kandidat ist das Dose-Shaker-Stillleben, es zeigt eher das „gute
    Gewissen“ (Dossier 6.4, H; Notiz 09).
  - Die Angabe 25–40 stammt aus einem automatischen Transkript ([24]) und ist keine Kundendatenauswertung.
- **Belastbar:** **TEILWEISE** – die Stichprobe zum Raptor fehlt.

#### F32 – Warum „Bildwelt zu jung“?

**„Lücke 2, ‚Bildwelt zu jung‘: HOLY macht laut eigenen Angaben über 170 Millionen Euro Umsatz – mit genau dieser
Bildwelt. Woher wisst ihr, dass das ein Problem ist? Mir gefallen die Comic-Tiere.“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (mittel), Publikum (mittel) · aus P-12 und Q-16
- **Wer antwortet:** Elias (C), ergänzt von Yannick (A; Persona und Limbic Map)
- **Antwort:**
  > Gefallen ist nicht unser Maßstab, sondern ob die Bildwelt zur Kundschaft passt; „zu jung“ ist unsere Bewertung,
  > und dass die Bildwelt Kund:innen kostet, behaupten wir nicht. Die Kernkundschaft ist laut Mitgründer Jost meist 25
  > bis 40, viele im Schichtdienst, das Design ist laut Presse „für eine jüngere Zielgruppe gedacht“, und in den
  > belegten Bildmotiven kommt der Schichtalltag nicht vor – die Stichprobe der Kurzvideos steht noch aus. Das Risiko
  > liegt bei der Glaubwürdigkeit: Verbraucherschützer sehen eine Ansprache von Kindern und Jugendlichen, und über
  > Altersgrenzen für Energy Drinks wird politisch diskutiert. Den Comic-Look wollen wir deshalb nicht abschaffen: Der
  > Raptor soll erwachsener inszeniert werden, für Energy ohne kindliche Frucht-Comics, und daneben sollen Creator aus
  > Pflege, Schicht und Sport die echte Kundschaft zeigen.
- **Beleg:** Folie 09b Fit „zur Persona: teilweise – Stimulanz passt, Bildwelt zu jung.“ (Daten Z. 2377) und
  Sprechtext Schritt 2 (Z. 2317); Folie 10 Lücke 2 (Daten Z. 2685–2693), Sprechtext Schritt 8 (Z. 2640) und Belege
  (Z. 2644: „Lücke 2 – Spannungsfeld S2/S3 … ✔ [7] … ✔ [82]. Die Lücken selbst sind unsere Bewertung (H)“); Folie 11
  Sprechtext Schritt 2/3 (Z. 2922–2923), Belege (Z. 2925) und Rückfrage „Verstärkt der Raptor nicht die zu junge
  Bildwelt?“ (Z. 2926); Dossier Kap. 1 Kernerkenntnis 4 ✔ [7, 24], 4.1 (Jost [24], Trending Topics [7]), 6.3 ✔ [8]
  („auffälliges und knalliges Design“, „vor allem junge Kunden“), 3.4 ✔ [27, 82], 8 S2 ✔ [27, 28, 82] und
  Altersgrenzen ✔ [152–154], S3 ✔ [24], S5 (H); Umsatz: Dossier 2.4 ✎ [13, 16] (Selbstauskunft); `limbic-map.md` §5
  (Urteil, Lücke beim Anlass).
- **Fallstricke:**
  - Nicht sagen: „Die Kundschaft fühlt sich nicht angesprochen“ – das ist nicht erhoben.
  - Den Umsatz nicht bestätigen: „+170M (2025)“ ist eine Angabe des Unternehmens; ein unabhängiger Beleg fehlt
    (Dossier 2.4).
  - „25–40“ ist eine Aussage des Mitgründers (Podcast 2024, automatisches Transkript [24]), keine Auswertung von
    Kundendaten. Laut Gründer Mathias Horsch (Befragung 10/2026) ist die Zielgruppe 18 bis 55, Männer und Frauen –
    das ist das Ziel, 25–40 die heutige Kundschaft, also kein Widerspruch.
  - „Zu jung“ ist unsere Bewertung (H), die Limbic Map eine Hypothese. „Kommt nicht vor“ gilt nur für die vier
    belegten Motive (Dossier 6.4); die Kurzvideos sind noch nicht auf Anlässe geprüft (`limbic-map.md` §5).
  - Nicht sagen: „HOLY richtet sich an Kinder“ oder „HOLY zielt auf Kinder“ – das ist die Kritik der
    Verbraucherschützer (VKI [27, 28], VZ Sachsen-Anhalt [82]), und Energy gibt es im Shop nur ab 18 (✔ [12]).
  - Die Politik nur allgemein nennen: Die Bundesrats-Initiative für eine Altersgrenze 16 hat keinen Beschluss, der
    Bundestagsausschuss empfahl die Ablehnung eines Antrags (Dossier S2 ✔ [152–154]). Nicht sagen: „Ein Verbot kommt.“
  - „Für eine jüngere Zielgruppe gedacht“ stammt aus dem Presseartikel von Trending Topics vom 21.08.2024 [7], nicht
    aus der Trending-Topics-Anzeige vom 20.08.2024 [160].
  - Die Motivanteile auf Folie 09 („17 von 50“, „am häufigsten die Comic-Tiere“) sind Beispieldaten – nicht als Befund
    nennen.
  - Nachfrage mit Vorlesungsbezug: Die Positionierung soll die Marke „in den Augen der Ziel[gruppe] so attraktiv“
    machen (S. 92) – Lücke 2 lässt sich daran knüpfen; das ist unsere Einordnung (#34, nicht auf der Folie).
  - Weder „Comic ist schlecht“ noch „alle Comic-Tiere bleiben“ sagen; „Der Raptor bleibt Schlüsselbild“ erst nach der
    Stichprobe (siehe F31).
- **Belastbar:** **TEILWEISE** – die Abweichung ist belegt, die Stichprobe der Kurzvideos fehlt.

#### F33 – Warum ein „Bruch“?

**„Mehrere Claims und Kampagnen sind doch normal. Warum nennt ihr das einen ‚Bruch‘?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (mittel) · aus V-09, ergänzt nach `abgleich-vorlesung.md` #47
- **Wer antwortet:** Elias (C); Nachfrage zur Claim-Wahl auf Folie 03: Yannick (A)
- **Antwort:**
  > Es geht nicht um einzelne Kampagnen, sondern um fehlende integrierte Kommunikation im Sinne Ihrer Vorlesung
  > (S. 96–97): Formal fehlt ein einheitliches Gesicht – die Profilnamen unterscheiden sich je Kanal, und der ruhige
  > Creme-Pastell-Shop steht neben lauten Comic-Verpackungen –, inhaltlich laufen mindestens sechs Slogans parallel.
  > Dazu kommt die zeitliche Seite: Der Dachclaim hieß 2025 noch „Energy Drink Revolution“, 2026 kamen neue Claims für
  > TV, Handel und Syrup dazu – das erinnert eher an Citroën als an Audi (S. 95). Die einzelnen Befunde sind im Dossier
  > belegt, „Bruch“ und die Zuordnung zu formal, inhaltlich und zeitlich sind unsere Bewertung. Deshalb schlagen wir eine
  > Hierarchie vor: Dachclaim „Die Softdrink Revolution“, darunter das Versprechen „Geiler Geschmack mit gutem
  > Gewissen“, dazu ein Profilname auf allen Kanälen.
- **Beleg:** Stenger S. 95 (Slogans Audi und Citroën), 96 (Definition integrierte Kommunikation), 97 (formal,
  inhaltlich, zeitlich) – an der PDF gegengelesen; `abgleich-vorlesung.md` #47, #52; Dossier Kap. 8 S5 (Befund
  ✔ [1, 20, 31, 125]; Empfehlung Claim-Hierarchie, Namen vereinheitlichen: H), Kap. 6.5 (sechs Claims, jeder ✔,
  Dachclaim „2025 noch ‚Energy Drink Revolution‘“ ✔ [1, 8]; „Mindestens sechs Claims laufen parallel“ trägt H), Kap.
  6.1 (Profilnamen je Kanal ✔); Folie 09b Fit „über die Kanäle: bruch – Sechs Claims, zwei Farbwelten, drei
  Profilnamen“ (Daten Z. 2378), Sprechtext Schritt 3 (Z. 2318), Fußzeile „Bewertung: eigene (H)“ (Z. 2311); Folie 11
  Zeile 3 „Sechs Claims parallel“ (Z. 2891, 2901), Sprechtext Schritt 3 (Z. 2923), Belege (Z. 2925);
  `markenkompetenz.md` „Claim – Entscheidung“ (Z. 103–118).
- **Fallstricke:**
  - „Mindestens sechs“ sagen: Auf 09b und 11 steht nur „Sechs Claims“, der Sprechtext sagt „mindestens sechs“
    (Z. 2318). Dass alle sechs gleichzeitig laufen, ist im Dossier 6.5 als Hypothese (H) markiert.
  - Die Vorlesung sagt „Slogan“; „Claim“ kommt dort nicht vor (#52) – im Gespräch „Slogans (Claims)“ sagen.
  - Den Vergleich mit Citroën und Audi und die Einteilung formal/inhaltlich/zeitlich als unsere Einordnung kennzeichnen;
    auf Folie 09b und 11 steht die Vorlesung dazu noch nicht (#47, Hinweis für Elias).
  - Keine Zahl der Profilnamen ohne Bezug nennen: 09b sagt „drei“ (die drei Pflichtkanäle, siehe F22), Dossier S5 nennt
    vier („HOLY Squad“, „HOLY Softdrinks“, „HOLY®“, „HOLY“; „HOLY Softdrinks“ ist TikTok, Dossier 6.1).
  - Nachfrage „Warum nicht das Versprechen als Dachclaim? Auf Folie 03 ist es doch euer Claim“ (Yannick): Auf
    Folie 03 steht das Versprechen, weil es die Kompetenz nennt und am durchgängigsten genutzt wird
    (`markenkompetenz.md` Z. 103–110). „Die Softdrink Revolution“ führt HOLY selbst auf der obersten Ebene:
    Seitentitel, Footer, TikTok, YouTube (Dossier 6.5 ✔ [1, 8]). Ehrlich einräumen: Der Dachclaim hieß 2025 noch
    „Energy Drink Revolution“ und wird uneinheitlich geschrieben.
  - Die Reihenfolge Dachclaim → Versprechen ist unser Vorschlag (S5, H), keine Lehrbuchregel.
  - Keine Aussage über die Reichweite der TV-Kampagne machen: Die YouTube-Aufrufe sind nur ein Indiz (S5, H).
- **Belastbar:** ja

#### F34 – Warum kein TikTok?

**„Warum kommt TikTok bei euch nicht vor – laut Persona-Folie sind die Leute doch genau da?“**

- **Wer fragt wahrscheinlich:** Publikum (mittel) · aus Q-17
- **Wer antwortet:** Elias (C), ergänzt von Yannick (A, Folie 04)
- **Antwort:**
  > Die Aufgabe gibt für die Kommunikationsanalyse insbesondere Instagram, Facebook und YouTube vor (S. 60); deshalb
  > haben wir TikTok nicht eigens ausgewertet und setzen unsere Empfehlungen auf diesen Kanälen an. TikTok wäre die
  > naheliegende Erweiterung: HOLY hat dort rund 270.000 Follower (Stand 14. Oktober). Die Balken auf Folie 4 sind
  > allerdings Kategoriedaten über Energy-Drink-Konsument:innen allgemein, nicht über HOLY-Kund:innen; dort liegt TikTok
  > mit 58 gegenüber 41 Prozent am weitesten über dem Schnitt aller Befragten.
- **Beleg:** Stenger S. 60 („insbesondere Instagram/ Facebook, YouTube“; an der PDF gegengelesen); Folie 11
  Rückfrage „Warum nicht TikTok?“ (Z. 2926: „TikTok (≈ 270.000 Follower, Dossier Kap. 1 ✔ [20]) wäre die
  naheliegende Erweiterung“); Folie 04 Sprechtext Schritt 3 (Z. 951: „TikTok liegt am weitesten über dem Schnitt …
  Kategoriedaten, nicht HOLY“) und Daten „Mediennutzung“ (Z. 1010: TikTok 58, Schnitt 41); `persona-daten.md`
  Kernergebnisse „Social Media“ und Quellen (Statista CI 2025, 18–64 J., n = 1.583); Dossier Kap. 1 und 6.1 ✔ [20]
  (≈ 270.400, Stand 14.10.2026), 9.3 (neu ablesen).
- **Fallstricke:**
  - Nicht sagen: „TikTok ist unwichtig.“
  - Die Statista-Werte (CI 2025, Energy-Drink-Konsument:innen 18–64 J., n = 1.583) beschreiben die Kategorie, nicht
    HOLY-Kund:innen oder HOLY-Follower.
  - Nicht mit den ARD/ZDF-Werten mischen: die Medienstudie 2025 in den Notizen (14–29 J., TikTok 50 % [102]) und die
    Vorlesungsfolie S. 44 (ARD/ZDF 2024, 14–29 J., TikTok 52 %) sind andere Jahre und Altersgruppen – Jahr immer
    nennen (#18).
  - Die Follower-Zahl hat den Stand 14.10.2026 (≈ 270.400 [20]) und ist am 26.10. neu abzulesen (Dossier 9.3).
  - Nicht behaupten, wir hätten TikTok-Beiträge ausgewertet – wir haben nur die Profildaten (Dossier 6.1).
  - Falls nachgefragt: Profilname „HOLY Softdrinks“ und eine TikTok-Bio ohne Syrup sind im Dossier Belege für den
    zersplitterten Auftritt (S5 ✔ [20]).
- **Belastbar:** ja

#### F35 – Größte Schwächen

**„Wo seht ihr selbst die größten Schwächen eurer Analyse, und was würdet ihr beim nächsten Mal anders machen?“**

- **Wer fragt wahrscheinlich:** Prof. Stenger (mittel) · aus V-07
- **Wer antwortet:** Lukas (B), ergänzt von Yannick und Elias mit je einem Satz
- **Antwort:**
  > Unsere Grenzen stehen in Backup B1: Simulierte Befragte spiegeln Trainingsdaten und ersetzen kein Kundengespräch –
  > davor warnt auch Ihre Vorlesung (S. 78) –, die Stichprobe ist klein und nicht repräsentativ, und die
  > Gründerbefragung ist eine Selbstauskunft mit n = 1. Dazu beschreiben die Persona-Zahlen Energy-Drink-Konsument:innen
  > allgemein, nicht HOLY-Kund:innen, weil HOLY keine Kundendaten veröffentlicht. [Je Person ein Satz, was sie beim
  > nächsten Mal anders macht – aus eigener Erfahrung, nicht vorformuliert.]
- **Beleg:** B1 Spalte 03 „Grenzen“ (Z. 3241–3249), Notizen (Z. 3261–3264: „Solange die echten Kurzinterviews fehlen,
  beruhen die Folien 06–08b auf simulierten Befragten“); Stenger S. 78; Folie 04 Fußzeile „Kategorie Energy Drinks,
  nicht HOLY“ (Z. 940); `persona-daten.md` Kopf; Dossier 4.1 „Lücke: HOLY veröffentlicht keine Kundendaten“;
  `gruenderbefragung.md` 2.1 (keine Rückfragen möglich); `../reflexion-vorlage.md` Frage 5.
- **Fallstricke:**
  - Nicht sagen: „nichts ungeprüft übernommen“, solange die Prüfung durch die Gruppe offen ist. Genau diese Zeile
    steht sichtbar in B1 (Z. 3243) – beim Zeigen von B1 nicht vorlesen (FRAGE-P-01).
  - Die Zahl der echten Interviews nur nennen, wenn sie stattgefunden haben: Laut B1-Notizen ist „3“ nur die geplante
    Zahl.
  - Keine Schuld an Teammitglieder verteilen. Die Antwort sollte zur eigenen Einzelreflexion passen (VOLL-10).
  - Nicht „repräsentativ“ oder „signifikant“ sagen.
- **Belastbar:** **TEILWEISE** – der persönliche Satz je Person fehlt noch.

---

## Fragen ohne belastbare Antwort – bis zur Generalprobe klären

Ohne belastbare Antwort sind heute **F12** (echte Befragte), **F22** (Messgrößen), **F30** (Tonalität als
Prüfmaßstab, Aaker-Bewertende) und bei **F21** der Teil Kosten/Nutzen. Die übrigen Punkte machen „teilweise“
belastbare Antworten fest. Termine nach dem Tagesplan in `arbeitsplan.md` (Synthese Do 22.10., Folien final
Fr 23.10., Generalprobe So 25.10.); Fristen, die am Di 20.10. lagen, sind überfällig und stehen als „sofort“.
Kennungen = Befunde der Prüfung auf Vortragsreife (Blickwinkel „Rückfragen“) und `abgleich-vorlesung.md` (#n).

| Frage | Was fehlt / was die Gruppe klären sollte | Wer | Bis | Grundlage |
|---|---|---|---|---|
| F12, F13, F14, F30 | Zahl echter Kurzinterviews (mit Datum und Einwilligung) melden; ob P8, P9 und P11 gelaufen sind; KI-simuliert und echt getrennt auswerten; tatsächliche Aufteilung in die Fußzeilen von f06, f07, f08, f08b, B4, B5 und in B1/B2. Gibt es keine Interviews: überall „nur KI-simuliert (n = 5)“, „+ Kurzinterviews“ auf Folie 02 streichen und das offen sagen. | Lukas (Einbau: Account 1) | Meldung sofort (war Di 20.10.), echte Werte Fr 23.10. | FRAGE-Q-01, FRAGE-P-04, VOLL-01; #2, #15 |
| F14 | Schwelle für die Differenzierung (≥ 1 oder ≥ 1,5 Skalenpunkte) mit Datum festlegen und in B4 vermerken; Titel von Folie 06 („Drei Attribute …“) und „Attribut(e)“ im Sprechtext an „Markeneigenschaften“ angleichen oder einmal „in der Literatur auch Markenattribute“ sagen. | Lukas | Schwelle sofort (war Di 20.10.), Titel Fr 23.10. | FRAGE-P-05; #29 |
| F16 | Chamäleon: Elias prüft die Begründung (drei Gründe auf der Karte, Sprechtext „Warum Chamäleon?“, Rückfragen in den Notizen) und bestätigt sie oder legt seine eigene ab; Lukas gleicht die Analogie-Befragung ab (P11, Interviews, offen gefragt). Nennen die Befragten überwiegend ein anderes Tier, mit Yannick klären, was Folie 08 zeigt. | Elias, Lukas; Entscheidung Yannick | Synthese Do 22.10. | Kasten FOLIE 08; #3, #38 |
| F30 | Tonalität aus Befragtenaussagen ableiten (Gruppe ohne KI, Umfeld, Tierfrage der Interviews), P11 getrennt; bleibt es bei der Dossier-Hypothese, auf 9b „plausibel (Hypothese)“ statt „passt“. Klären, wer die Aaker-Werte vergeben hat (nur Menschen oder auch P11); Werte für Red Bull und waterdrop erheben oder löschen; „(Aaker)“ im Titel von 08b und auf Folie 12 kürzen. | Lukas, dann Elias | Tonalität Mi 21.10. (heute), Fit-Zeile Synthese Do 22.10., Aaker Fr 23.10. | FRAGE-P-03, FRAGE-Q-07; #42 |
| F29 | Skript der Live-Abstimmung bei Google aktualisieren (Fassung 20.10.2026), Kurzprüfung und Lasttest; Runde auf `vortrag-2026-10-26` (GitHub und Präsentationsrechner); Probe mit mehreren Handys; festlegen, wer bei Handzeichen zählt. | Yannick | Skript sofort, Runde spätestens So 25.10. | LIESMICH §6 und §12; `live-abstimmung/ANLEITUNG.md` |
| F24 | Logo-Nutzung mit dem Betreuer klären (Original-Logo auf erfundener Dose, im Rätsel unscharf, öffentlich; Logos auf 09b und 12); bei Ablehnung Rückfall ohne Logo und Exporte neu. Ergebnis in die Notiz von Folie 01 und hier eintragen. | Yannick | vor Fr 23.10. (Folien final) | LIESMICH §12; `QUELLEN.md` §3 |
| F03, F26, F31 | Fußzeilen der Hauptfolien mit Vorlesungsseiten (#4); Esch (2018), 9. Aufl. statt Esch & Esch (2024) in B7 und Fußzeile 02 (#11); Kotler mit selbst geprüfter Ausgabe in B7 aufnehmen oder „nach Kotler“ streichen (#31); Kroeber-Riel/Esch (2018) in B7 und Fußzeile 09 (#14); „hard/soft facts“ belegen oder weglassen (#32). | Yannick, Elias (Fußzeile 09) (Einbau: Account 1) | Fr 23.10. | FRAGE-P-02, FRAGE-P-12; #4, #11, #14, #31, #32 |
| F04 | Entscheiden, ob das Etikett „Fremdbild“ auf Folie 02 und der Sprechtext 02/10 auf „Markenimage“ umgestellt werden (nicht freigegeben). | Yannick | Fr 23.10. | #30 |
| F15, F18 | Regel B8 anwenden: Die Positionierung gilt als Identität und Image nur, wenn echte Befragte „gutes Gewissen“ von sich aus nennen; sonst als Selbstbild kennzeichnen. Kern- und Positionierungssatz zwischen Elias und Yannick abstimmen; Elias liest Sprechtext 10 und 11 laut und entscheidet „klare“ oder „starke“ Positionierung im Titel von Folie 11. | Yannick, Elias | Synthese Do 22.10. | FRAGE-Q-02, FRAGE-P-18; #27, #40 |
| F21, F22 | Je Empfehlung eine Messgröße aus den eigenen Methoden; Priorität der Empfehlungen mit Begründung; qualitative Einordnung des Aufwands (ohne Zahlen, als H) in die Notizen von Folie 11 (Gliederung Ziel – Wirkung – Kosten nach S. 127 möglich). | Elias (Gruppenentscheidung) | Synthese Do 22.10. | FRAGE-P-07, FRAGE-Q-06, FRAGE-Q-04; #51 |
| F20, F21 | Aktuelle HOLY-Energy-Packung prüfen (Vorder- und Rückseite, mit Datum); Ergebnis mit [27] in die Notiz von Folie 11; zeigt die Packung Koffein schon vorn, Empfehlung 1 auf Posts und Creator-Videos zuspitzen. | Elias | Fr 23.10. | FRAGE-P-16, FRAGE-Q-05 |
| F17 | Stichprobe erheben (15–20 Beiträge je Pflichtkanal), sagen ob P12 genutzt wurde; Formel „Follower bzw. Abos“; Follower am 26.10. neu ablesen. | Elias | Fr 23.10. (Lieferung war Mi 21.10.) | FRAGE-P-08; #2 |
| F31, F32, F33 | Ergebnis der Stichprobe zum Raptor; bis dahin Sprechtext 11 Schritt 3 „soll durchgängiges Schlüsselbild werden“; Notiz 09: Präsenzsignal/Schlüsselbild mit S. 97 statt „Modellwissen“; Bruch mit „integrierte Kommunikation (S. 96–97)“ benennen. Gemeinsamen Wortlaut „frecher“ (Folie 11) gegen „Humor aus der Schicht statt Doppeldeutigkeit“ (Folie 05) festlegen. | Elias, Yannick | Synthese Do 22.10. | FRAGE-P-15; #47, #48 |
| F07, F13, F23, F35 | Tragende Belege selbst öffnen und im KI-Nachweis abhaken – sonst B1-Titel, B1-Grenze „nichts ungeprüft übernommen“ und Fußzeile 02 „Ergebnisse geprüft“ umformulieren; Abschnitt 3 des KI-Nachweises aus den persönlichen KI-Listen füllen (Lukas und Elias geben ab). | Yannick (Einbau: Account 1) | Sa 24.10. (Listen Fr 23.10.) | FRAGE-P-01, FRAGE-Q-03, FRAGE-P-10; #3, #5 |
| F10, F11, F28 | Die Jost-Stellen an den Zeitmarken im Audio anhören; 20–30 Kundenbewertungen auswerten (Anlass Schicht; Hedonisten oder Offene); in den Notizen 05 „Technik +7“ und „85 % keine frühen Übernehmer“ streichen (stehen nicht in `persona-daten.md`). | Yannick | Do 22.10. | FRAGE-P-13; Spielregel 4 |
| F25 | Rahmen (Softdrink-Anspruch, Energy-Kernkundschaft) und Wettbewerbsset W1–W5 als Gruppenbeschluss mit Datum festhalten. | Gruppe (alle) | sofort (war Di 20.10.) | FRAGE-P-09 |
| F06 | Versanddatum der Sprachnachrichten (17. oder 18.10.) bestätigen; Ablage der Audiodateien einheitlich festhalten; Einwilligungen der Interviewten. | Lukas | Do 22.10. | FRAGE-Q-13; Gegenprüfung zu V-04 |
| F06, F23 | Bei Prof. Stenger nachfragen, ob besondere KI-Vorgaben gelten (Tools, Form der Dokumentation, Eigenständigkeitserklärung) – die Vorlesung regelt nur Prompts und Begründung im Backup (S. 60). | Yannick (Mail) | sofort | FRAGE-P-11; #7 |
| F05 | Regel für GB (Vorschlag vom 19.10.2026, `methoden.md` §6) bestätigen oder ändern. | Gruppe (alle) | Synthese Do 22.10. | Gegenprüfung zu P-24; #36 |
| F07 | Nachfrage „Ist HOLY profitabel?“: Jahresabschluss 2024 abrufen – gelingt das nicht, offen „Profitabilität nicht geprüft“. | Yannick | Fr 23.10. | FRAGE-P-17 |
| F02 | Den eigentlichen Grund der Markenwahl in einem Satz festhalten. | Gruppe (alle) | Generalprobe So 25.10. | Gegenprüfung zu V-05 |
| F35 | Je Person ein Satz, was sie beim nächsten Mal anders machen würde (passend zur Einzelreflexion). | alle | Generalprobe So 25.10. | VOLL-10 |

---

## Übung in der Generalprobe (So 25.10.)

Laut Tagesplan: Generalprobe 1 Std., „zweimal mit Stoppuhr, Rückfragen üben“ (`arbeitsplan.md`). Die Fragerunde zählt
nicht zur Sollzeit der Folien; ob Rückfragen zu den 15 Minuten zählen, sagt die Vorlesung nicht (S. 57–58) – offene
Frage an Prof. Stenger (`arbeitsplan.md`, Offene Punkte; #8).

1. **Vorher:** alle Platzhalter [ … ] mit dem echten Stand füllen (Synthese Do 22.10., Folien final Fr 23.10.) und den
   Status „belastbar“ hier nachtragen.
2. **Rollen festlegen:** wer moderiert; in der Probe spielt eine Person Prof. Stenger, eine das Publikum (VOLL-08).
3. **Reihenfolge:** zuerst die wahrscheinlichen, noch nicht voll belastbaren Fragen (höchstens 15): F02, F03, F07,
   F10, F12, F13, F14, F15, F16, F17, F18, F20, F21, F22, F23. Danach so viele weitere wie die Zeit erlaubt, zuerst
   F24 und F29 (neu: Logo, Abstimmung).
4. **Stoppuhr:** höchstens etwa 30 s je Antwort; Kern in einem Satz, höchstens eine Ergänzung (FRAGE-P-18).
5. **Springen üben** – am Vortragslaptop mit zweitem Bildschirm und Clicker (VOLL-04): **O** → Backup-Folie →
   `1` `2` `Enter` zurück; auf Folie 12 die Liste „Methoden / Ergebnisse / Backup“; **Z** nach einem Sprung aus dem
   Backup; einmal zu Folie 08 zurückspringen (Stimmen stehen noch, solange sie jünger als 30 Minuten sind).
6. **Formeln wörtlich üben:** „laut Gründer Mathias Horsch (Befragung 10/2026)“, „laut Gründer, Datengrundlage nicht
   offengelegt“, „KI-simuliert“, „laut Unternehmen“, „unsere Einordnung / Hypothese“, „Das haben wir nicht erhoben“,
   „Unsere eigene Prüfung läuft noch“ (nur solange das stimmt); neu: „Markenkern ist die Mitte, der Satz darüber die
   Positionierung“, „Identität ist die Innensicht, das Image, was wahrgenommen wird (S. 87)“, „Typen und Gewichte
   sind unsere Erweiterung“, „Das Chamäleon ist unsere Einordnung“, „ein Stimmungsbild im Raum“.
7. **Abgestimmte Stellen gemeinsam sagen:** Positionierungssatz und Leitfrage (F18), Chamäleon-Begründung (F16, Elias
   und Lukas), Priorität der Empfehlungen (F21), Wettbewerbsset (F25), Raptor „soll … werden“ (F31), „frech“ gegen
   „Humor aus der Schicht“ (F30–F32) – damit nicht drei Personen drei Antworten geben.

**Reserve (geprüft, nicht ausgearbeitet; geringere Wahrscheinlichkeit) – vorbereitete Antworten stehen an der Quelle:**

- „Kann eine KI-Persona überhaupt Werte haben – und mit welchem Attribut habt ihr die echten Interviews begonnen, wenn
  die Attribute erst am 19.10. feststanden?“ (P-04; Lukas; bisher F27) → Leitern der KI-Personas sind Hypothesen
  (Notiz 07, Z. 1554; B5 Z. 3572–3580); echte Interviews starten bei zwei eigenen Konstrukten der Person
  (`dossier-buendel-b.md` §5, Z. 289 und „Warum das Laddering hier bei den eigenen Konstrukten startet“), in die Value
  Map nur bei passendem Startpunkt und mindestens zwei Nennungen (§3 B2 Schritt 4). Nicht sagen „Nach Reynolds &
  Gutman beginnt man immer …“ (Modellwissen); die Abweichung ist in B5 noch nicht begründet (FRAGE-P-06). „Gesundheit“
  ist ein Wert der Befragten, keine Produktaussage.
- „Auf Folie 6 ist ‚selbst anrühren‘ eine Hürde, auf Folie 3 ist ‚Softdrinks zum Selbermixen‘ der Markenkern –
  Widerspruch?“ (V-01; Lukas, ergänzt Yannick) → Rückfragen in den Notizen 03 (Z. 717), 10 (Z. 2645, „Warum fehlt
  ‚selbst anrühren‘?“) und 11 (Z. 2926): Markenkern laut HOLY = Selbstbild, Hürde laut Befragten (Beispieldaten). Nicht
  sagen, die Lücke werde auf Folie 10/11 als eigene Lücke aufgegriffen.
- „Folie 5 will ‚Humor aus der Schicht statt Doppeldeutigkeit‘, auf 9b ‚passt‘ die Tonalität – was gilt?“ (V-02;
  Yannick, ergänzt Elias) → Sprechtext 05 Schritt 3 (Z. 1183), Hinweis in den Belegen von Folie 11 (Z. 2925);
  Wortlaut in der Synthese abstimmen.
- „Warum dreht sich keine Empfehlung um den Handel?“ (V-08; Elias, ergänzt Yannick) → Eine eigene
  Handelsempfehlung gibt es nicht; Dossier 8 S4 (H). „Shop“ auf Folie 11 meint den Onlineshop, nicht den Handel.
- „Was ist eine Brand Persona – nicht die Marke als Mensch?“ (V-10; Yannick) → In der Vorlesung ist die Persona der
  typische Kunde aus der Zielgruppe, der „Musterkunde“ (S. 76); `persona-steckbrief.md` Z. 29, 36, 53. Die Marke als
  Mensch steckt bei uns in den Analogien („Start-up-Gründer“, Folie 08) und in der Tonalität (Folie 08b).
- „Warum Marco und nicht Lena?“ (Yannick) → Auswahl nach S. 82: Glaubwürdigkeit der eigenen Marke, und „welche
  Segmente bewusst nicht“ bearbeitet werden (#21); Lena ist Wachstums-Persona im Backup B3 (H).
- „Dürft ihr die Limbic Map nachbauen?“ (P-23; Yannick) → Fußzeile 05 (Z. 1171, Rechtevermerk Gruppe Nymphenburg),
  Belege (Z. 1184), `limbic-map.md` §2 und §7: eigene, vereinfachte Darstellung, keine Vorlesungsgrafik übernommen,
  keine Lizenz, keine Rechtsprüfung.
- „Ist das Persona-Bild ein KI-Bild?“ (Yannick) → Notiz 04 (Z. 953): KI-gestützt gezeichnete Illustration, kein Foto,
  keine echte Person, gekennzeichnet auf dem Bild und in der Fußzeile (siehe auch F24).
- „Warum steht Koffein bei den Markeneigenschaften, wenn die Befragten es kaum nennen?“ (Elias, ergänzt Yannick) →
  Rückfrage in den Notizen 10 (Z. 2645): belegte Produkteigenschaft der Energy-Linie aus dem Desk Research
  (Dossier 3.1 ✔ [56]), deshalb „Energy:“ davor.
- „Wo steht ‚hard facts / soft facts‘ in der Vorlesung?“ (Yannick) → nirgends (S. 88–91; #32). Ehrlich: Modellwissen
  nach Esch, nicht eingesehen; die Vorlesung beschreibt das Feld oben rechts als „Emotionen und Gefühle“ (S. 88).
- „Warum heißen die Nutzen auf Folie 7 nicht individuell und sozial wie in der Vorlesung?“ (Lukas) → S. 88 nennt
  „individueller Nutzen“ und „sozialer Nutzen“; Folie 07 nutzt die Ebenen der Laddering-Literatur (Reynolds & Gutman,
  Modellwissen). Zuordnung im Rad: Genuss ohne Zucker und gutes Gewissen eher individuell, dazugehören sozial – unsere
  Lesart (#39, offen).
