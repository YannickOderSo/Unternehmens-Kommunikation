# Codier-Protokoll: Analogien (Teil 3) und Aaker-Bogen (Teil 4)

> **Kennzeichnung:** Alle Antworten sind **KI-simuliert (Tool)**: Hauptgruppe T1–T8 mit Persona-Block. Die
> Kontrollgruppe hat nur Triaden, also keine Analogien und keinen Aaker-Bogen. Die Codierung ist **KI-gestützt
> (Tool)**: ein Unteragent im Workflow, 22.10.2026. Prüfung durch die Gruppe: ☐ offen. Keine Websuche. Gezählt und
> gemittelt wird nur per Skript (`auswertung/analogien_aaker.py`). Es gibt keine Aussagen über Signifikanz oder
> Repräsentativität. KI-Personas ersetzen kein Kundengespräch (Stenger, S. 78).

## 1. Reihenfolge und was vorher bekannt war

**Vor dem Codieren gelesen:** Rohdaten `rohdaten/interviews/T1–T8.json` (Teile 3, 4 und 5), Dossier Bündel B §1
(Persona-Block), §2, §3 (B3 Methode), §5, §7, Anhang 1 (P11-Text) · `methoden.md` §2–§4 · `prompts.md` P11 und
Teil C · Interviewprompt im Workflow-Skript `ki-nachweis/workflows/2026-10-22_buendel-b-simulation.js` (Teile 3 und
4: offen gefragt, nichts vorgeschlagen, 15 Facetten) · die Dateien der Konstrukt-Codierung (Format).

**Erst nach Codierung und Skriptlauf gelesen:** `rohdaten/p11-ki.md`, Dossier Anhang 2 (B3), `../analogien.md`
(Elias Knauber), Daten und Notizen von Folie 08b in `praesentation/index.html` (nur gelesen).

**Ehrlich zu wissen:**
- Der Arbeitsauftrag selbst nannte schon die Vergleichsbegriffe (Impro-Comedian, Papagei, Chamäleon, Folientitel
  „spricht wie ein frecher Kumpel“, Feld Tonalität „frecher Kumpel · wandelbar · Spaß“). Die Codes sind trotzdem
  aus den Wörtern der Antworten gebildet. „frech“ hat einen eigenen Code nur, weil es in T1 wörtlich vorkommt.
- Bei einer Suche nach „Squad“ und „Persona-Block“ im Dossier erschienen drei Zeilen aus Anhang 2 in der Ausgabe
  (Zeilen 537, 540, 560: u. a. „Beziehung = Kumpel und Anführer des ‚Squad‘ · Tier = Selbstbild Adler“). Das war
  vor dem Codieren.

## 2. Codierregeln

| Nr. | Regel |
|---|---|
| A0 | Einheit: Eine Zeile in `analogien-codierung.csv` ordnet einen **wörtlichen** Ausschnitt einem Code zu. Ein Ausschnitt kann mehrere Codes bekommen (z. B. „Fitness-Influencer“ → BERUF_FITNESS und BERUF_SOCIAL). Das Skript prüft, dass jeder Ausschnitt wörtlich im Rohdatenfeld steht und dass jedes Feld bzw. Listenelement mindestens eine Zuordnung hat. |
| A1 | Alter (nur Feld `alter`): „Mitte zwanzig“ oder eine Spanne, die bei 24–26 beginnt → ALTER_MITTE20; „Ende zwanzig“ oder Beginn bei 27–29 → ALTER_ENDE20. Grenzfall T8 „so 26, 27“ → Mitte 20 (erste Zahl). |
| A2 | Geschlecht nur aus der Kurzbeschreibung („Typ“, „Frau“, „Jemand“). Es wurde nicht ausdrücklich gefragt. |
| A3 | Beruf nur aus dem Feld `beruf`. Milieu-Angaben in der Kurzbeschreibung („aus der Fitness- und Social-Media-Ecke“, „der was mit Social Media macht“) zählen nicht als Beruf; „Fitness“ dort → EIG_SPORTLICH. |
| A4 | Eigenschaften (EIG_) beschreiben die Markenperson aus der Mensch-Analogie (Kurzbeschreibung, Party, Beziehung, Gründe). Tiergründe haben eigene Codes (TG_). Die Spalte `verwandt` verbindet einen Tiergrund mit dem passenden Mensch-Code nur für die zusätzliche Zählung „kombiniert“. |
| A5 | Kritische Formen bekommen einen eigenen Code zusätzlich: „zu laut“ → EIG_LAUT und EIG_ANSTRENGEND · „tut so, als …“ → zusätzlich B_INSZENIERT · „nervt nach einer Stunde“ → EIG_ANSTRENGEND. So bleibt die Wertung sichtbar. |
| A6 | Gefühle: Jedes genannte Gefühl bekommt genau einen Code. Zusätze bleiben im Code („Leichtigkeit, kein schlechtes Gewissen wegen Zucker“ → GEF_GUTES_GEWISSEN). Die Obergruppen (positiv, neugierig-abwartend, ablehnend-distanziert) stehen im Codebuch. |
| A7 | Erlebnis: Kontext (wo), Zugang (über wen, erstes Probieren) und Bewertung (positiv, neutral, kritisch) werden getrennt codiert. Hörensagen ist keine eigene Bewertung (T8 „schmeckt wie Brausepulver“, „Weiß nicht, ob das stimmt“ → nur ERL_UMFELD). |
| A8 | Quelle (Q_): woraus die Person ihren Eindruck ableitet (Werbung und Social Media, Aufmachung, Online-Vertrieb, Umfeld). Codiert in den Gründen für Tier und Mensch. |
| A9 | Tiere: Nur echte Synonyme werden zusammengefasst (keine kamen vor). Pfau ist kein Papagei. Die Obergruppe „bunter Vogel“ (Papagei, Pfau) wird nur zusätzlich gezählt. |
| A10 | Zählung: maßgeblich ist **Befragte** (verschiedene Personen, höchstens 8). Nennungen sind nur Information, weil ein Gedanke in mehreren Feldern wiederkehren kann. |
| A11 | Aaker-Spalten im Codebuch (`aaker_facette`, `aaker_dimension`): Vorschlag aus dem Modellwissen nach den Facetten und Items von Aaker (1997), z. B. „young“ und „cool“ in der Facette „spirited“ (temperamentvoll). Unsichere Zuordnungen sind markiert. Humor und Sportlichkeit sind keine Items der Skala. Mit der Vorlesung abgleichen. |
| A12 | `im_persona_block`: „ja“, wenn der Inhalt im Persona-Block steht (Humor, „Squad“, joggen, gesünder leben, ohne Zucker, online bestellen, wach durch die Schicht), „Grenzfall“, wenn nur ein Teil oder nur Marcos Mediennutzung bzw. Kaufverhalten passt, sonst „nein“. Weil die Kontrollgruppe keine Analogien hat, lässt sich der Einfluss des Blocks hier **nicht** prüfen. |

## 3. Schwierige Fälle

| Stelle | Kandidaten | Entscheidung |
|---|---|---|
| T7 Tier „Pfau“ | Papagei (bunt, laut) | eigener Code TIER_PFAU (A9); Gründe „will gesehen werden“, „sieht gut aus, bringt wenig“ sind andere als beim Papagei |
| T1 „Frech, die Werbung ist immer so mit nem Augenzwinkern“ | frech, Humor | TG_FRECH_HUMOR (eigener Code, damit „frech“ zählbar bleibt), verwandt EIG_WITZIG |
| T3, T8 „Plappert nach“ | Humor, Trend, wandelbar | TG_NACHPLAPPERN, kritisch gemeint („Die ganzen Influencer sagen alle ungefähr dasselbe“). Nicht als „wandelbar“ gewertet |
| T6 „dauernd Codes und neue Sorten, da merkt man schon, dass die verkaufen wollen“ | probiert Neues, Verkaufsabsicht | beides: B_VERKAUFSABSICHT (ganzer Satz) und EIG_TRENDIG („dauernd Codes und neue Sorten“) |
| T5 „ständig am Handy hängt“ | Beruf Social Media, Selbstdarstellung | EIG_SELBSTDARSTELLUNG (Definition „dauernd online“); A3 |
| T6 „manchmal ein bisschen zu laut“ | laut | EIG_LAUT und EIG_ANSTRENGEND (A5) |
| T1 „schreibt dich locker an“, T7 „schreibt locker“ | Beziehung, Eigenschaft | beides: B_SCHREIBT_AN und EIG_LOCKER |
| T2 Erlebnis „nach einer Frühschicht … vor dem nächsten Spätdienst mit meiner Kollegin probiert“ | Handel, Arbeit, Umfeld | ERL_ARBEIT, ERL_HANDEL (Aufsteller), ERL_ERSTKONTAKT und ERL_UMFELD (Kollegin), ERL_SOCIAL („kannte das schon von Instagram“) |
| T4 „War okay, für ohne Zucker ziemlich süß“ | Geschmack positiv oder kritisch | ERL_GESCHMACK_NEUTRAL (keine klare Wertung) |
| T6 „im Studio vor meinem Kurs“ | Sport, Arbeit (T6 ist Trainerin) | nur ERL_SPORT; ob „mein Kurs“ ihr eigener Kurs ist, bleibt offen |
| T2 „Die Werbung ist jung und bunt“ | Stil bunt, Tiergrund bunt | STIL_BUNT (Auftritt der Person), EIG_JUNG, keine TG-Zuordnung (Teil Mensch) |
| T3, T5, T8 Kauf „Nein … probiert“ | nie gekauft, einmal | KAUF_NIE: probiert, aber nie selbst gekauft |

## 4. Aaker-Bogen: Hinweise zu den Rohdaten

- Bewertet haben die simulierten Personen, nicht Menschen. Das weicht vom Vorschlag im Dossier Bündel B (B3, Punkt 5:
  „Den Bogen füllen nur Menschen aus“) ab. Kennzeichnung auf der Folie deshalb: „KI-simuliert (Tool)“.
- Gemessen wird je Facette mit **einem** Wort (15 Facetten), nicht mit den 42 Items der Skala. Die deutschen Wörter
  sind eine Übersetzung aus dem Modellwissen. „gesund“ für „wholesome“ ist unscharf und kann als Produkteigenschaft
  statt als Persönlichkeit gelesen werden. Auf Folie 08b stehen in den Notizen „modern“ und „zäh“, im Bogen
  „zeitgemäß“ und „robust“: Wortwahl angleichen.
- waterdrop kennen nur T1, T2, T4 und T6 (n = 4). T2 hat bei waterdrop „intelligent“ und „erfolgreich“ offen gelassen
  (null), Kompetenz von T2 ist dort also nur „zuverlässig“.
- Viele Facetten haben bei allen 8 Personen denselben Wert (Skript `aaker-facetten.csv`, min = max). Das spricht für
  gemeinsame Bilder im Modell, nicht für unabhängige Urteile.
- Rohdaten-Auffälligkeiten (nicht geändert): In `T4.json` steht im Feld `befragte` „T4 (fiktiv, KI-simuliert)“ statt
  „T4“; welche Felder „KI-simuliert“ enthalten und welche nicht, listet `auswertung/rohdaten-kennzeichnung.csv`
  (Skript `pruefe_rohdaten.py`, Nacharbeit 23.10.2026). In `rohdaten/p11-ki.md` stand in der Kennzeichnungszeile eine
  Modellbezeichnung (Projektregel: keine Modellbezeichnungen in Dateien); in der Nacharbeit am 23.10.2026 wurde nur
  diese Kennzeichnungszeile geändert, die Antwort selbst nicht.
- Fast gleiche Wortlaute in unabhängigen Agenten (Nacharbeit 23.10.2026): Die Beziehung zu den Kund:innen enthält bei
  allen acht „verkaufen“ oder „Rabatt“, bei sieben das Wort „verkaufen“ (`auswertung/rohdaten-muster.csv`). Die Frage
  selbst („welche Beziehung hat sie zu ihren Kund:innen?“) legt eine Verkaufsbeziehung nahe. B_VERKAUFSABSICHT 8/8 ist
  deshalb ein gemeinsames Bild des Modells und ein Frageeffekt, keine starke Zustimmung.

## 5. Grenzen und Prüfauftrag an die Gruppe

- Der Codier-Auftrag nannte die Vergleichsbegriffe schon vor dem Codieren (§1); blind gegenüber der Hypothese war die
  Codierung also nicht.
- Codiert hat ein KI-Tool in einem Durchgang. Eine unabhängige zweite Codierung durch Menschen gibt es nicht.
  **Vorschlag:** Die Gruppe codiert die Gefühle (24 Zeilen) und die Tiergründe selbst nach und notiert Abweichungen.
  Wer anders entscheidet, ändert `code` in `analogien-codierung.csv` und startet das Skript neu; es prüft die Zeilen
  gegen die Rohdaten.
- Alle 8 Agenten bekamen den Persona-Block. Für Teil 3 und 4 gibt es keine Kontrollgruppe. Codes mit
  `im_persona_block` = ja oder Grenzfall gelten erst als tragfähig, wenn echte Interviews oder Kundenstimmen sie
  zeigen (Dossier Bündel B §2, §5).

## 6. Dateien und Nachrechnen

- `codierung/analogien-codebuch.csv`: id;kategorie;bezeichnung;obergruppe;definition;beispiele;verwandt;
  aaker_facette;aaker_dimension;im_persona_block
- `codierung/analogien-codierung.csv`: befragte;teil;originaltext;code (eine Zeile je Zuordnung)
- `auswertung/analogien_aaker.py`: prüft, zählt und mittelt; Formeln für Google Sheets im Kopfkommentar, z. B.
  `=ZÄHLENWENN(codierung!D:D;A2)` und `=WENNFEHLER(MITTELWERT(C2:F2);"")`. Aufruf:
  `python3 auswertung/analogien_aaker.py`
- Ausgaben in `auswertung/`: `analogien-haeufigkeiten.csv`, `analogien-obergruppen.csv`, `analogien-kombiniert.csv`,
  `analogien-gefuehle-nach-kauf.csv`, `aaker-personen.csv`, `aaker-dimensionen.csv`, `aaker-facetten.csv`,
  `aaker-folie-08b.csv`, `aaker-holy-nach-kauf.csv` (Semikolon, Dezimalkomma)
