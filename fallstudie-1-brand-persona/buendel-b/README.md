# Bündel B – KI-simulierte Befragung zu HOLY (Fallstudie 1)

> **KI-simuliert im Auftrag von Yannick Heisler, 22.10.2026, Workflow D25** (KI-Nachweis 120 ff.). Alles in diesem
> Ordner beruht auf **acht fiktiven, KI-simulierten Befragten** (T1–T8) und einer Kontrollgruppe ohne Persona-Block.
> Es gab **keine echten Interviews und keine Kundenstimmen**. Die Ergebnisse sind Hypothesen – keine Aussagen über
> Kund:innen, keine Signifikanz, keine Repräsentativität. KI beschleunigt, ersetzt aber nicht das Gespräch mit echten
> Kunden (Stenger, S. 78). Prüfung durch die Gruppe: ☐ offen. Drei unabhängige KI-Prüfungen und eine Nacharbeit
> (23.10.2026) sind eingearbeitet.

## Was, warum, wer

- **Was:** Die drei Methoden von Bündel B – Repertory Grid (→ Markeneigenschaften, Folie 06, B4), Laddering
  (→ Markennutzen, Folie 07, B5), Analogien und Aaker-Bogen (→ Markentonalität, Folie 08b) – einmal vollständig
  durchgeführt, mit simulierten Befragten statt echten. Dazu ein Lauf von P11 (KI-gestützt).
- **Warum:** Bündel B trug bis zum 22.10.2026 nur Beispieldaten der Folienvorlage; Lukas Welker liefert kein Material
  mehr. Yannick (22.10.2026): „wenn du etwas KI Simulieren musst für ein richtiges Ergebnis dann mach das“.
- **Wer:** KI-Unteragenten im Workflow D25 (je simulierte Person ein eigener Agent; Codierung, Auswertung und Synthese
  durch weitere Agenten; Rechnen nur per Python-Skript). Auftraggeber und Entscheider: Yannick Heisler. Folie 10
  (Synthese) gehört Yannick, präsentiert wird sie von Elias Knauber; Folie 08 trägt Elias' Ausarbeitung.
- **Vorgaben:** [`../dossier-buendel-b.md`](../dossier-buendel-b.md) (§3, §5, §7; Anhang 2 erst nach der Codierung
  gelesen), [`../methoden.md`](../methoden.md) §2–§4, [`../prompts.md`](../prompts.md) P7–P11 und Teil C.

## Die wichtigsten Ergebnisse in fünf Sätzen (alle KI-simuliert)

1. Nach der vorab festgelegten Auswahlregel erfüllt **kein Konstrukt** alle drei Kriterien: HOLY hebt sich vor allem
   durch **Hürden** ab – selbst anrühren, neu/Ausprobieren, Influencer-Zeug und der Eindruck „online bestellen“, obwohl
   HOLY seit 2024/2025 auch im Supermarkt steht (Recherche-Dossier 2.5 ✔ [6, 8, 9]); bei „ohne Zucker“ liegt Coca-Cola
   Zero sogar knapp vor HOLY (6,88 zu 6,75).
2. Im Laddering führt „ohne Zucker“ über „kein Zuckerabsturz“ und „konzentriert, keine Fehler“ zu **„verlässlich
   sein“** (6 · 5 · 5 Leitern) – aber als schwache Hypothese: 4 der 8 simulierten Personen widersprechen mit ihrem
   „wichtig“ ihren eigenen früheren Antworten. „Genuss ohne Zucker“, „gutes Gewissen“ und „Gesundheit“ tragen nicht
   (Geschmack war kein Startpunkt); „für jeden Tag“ – der Name der Idealmarke – war sechs von acht nicht wichtig.
3. Auf die offene Tierfrage nennen fünf von acht einen **Papagei**, niemand ein Chamäleon oder einen Adler; als Mensch
   ist HOLY eine Fitness- und Social-Media-Person und ein **Kumpel** (8/8), **der verkaufen will** (8/8) – fast
   wortgleich in allen acht Agenten, also ein gemeinsames Bild des Modells, keine starke Zustimmung.
4. Im Aaker-Bogen liegt HOLY bei **Spannung** am höchsten (3,91), etwa gleichauf mit Red Bull
   (4,13), und hebt sich von Red Bull nur durch Aufrichtigkeit ab (3,19
   zu 2,34); „frech“ nennt nur eine simulierte Person. Keine Facette streut über mehr als 2 Skalenpunkte.
5. Die **Kontrollgruppe** ohne Persona-Block bringt 11 der 12 Konstrukte ebenfalls hervor – das zeigt nur, dass der
   Block sie nicht allein erzeugt; die Profile nennen Pulver, online, Zucker, YouTube, TikTok und Instagram selbst. Eine
   zweite Ziehung derselben Profile änderte 5 von 13 Triaden. Alle Antworten stammen aus demselben KI-Tool – es bleiben
   Hypothesen für echte Interviews.

**Für die Folien:** Entscheidungsvorlage mit einsetzbaren Daten, Titeln, Fußzeilen, Sprechtexten und Rückfragen in
[`folienvorschlag.md`](folienvorschlag.md). Keine Folie wurde geändert.

## Lesehilfe

1. **Zuerst** [`folienvorschlag.md`](folienvorschlag.md) – was sich auf 06, 07, 08, 08b, 10, B1, B4, B5 ändern soll
   und welche Entscheidungen Yannick treffen muss (Abschnitt 9).
2. **Dann die Ausarbeitungen** (ausgefüllte Vorlagen aus methoden.md, mit Abgleich gegen Anhang 2, Spalte „im
   Persona-Block angelegt“ und Kontrollgruppe): [`repertory-grid.md`](repertory-grid.md),
   [`laddering.md`](laddering.md), [`analogien-befragung.md`](analogien-befragung.md).
3. **Wie es gemacht wurde:** [`simulation-protokoll.md`](simulation-protokoll.md) – Befragte, Ablauf, alle Prompts
   wörtlich, Regeln mit Zeitpunkt, Rechenwege, Abweichungen vom Dossier.
4. **Nachprüfen:** Codierung in `codierung/` (je Zuordnung eine CSV-Zeile, Codebücher mit Definition und Beispielen,
   Protokolle), Zahlen in `auswertung/` (Skripte und ihre Ausgaben), Rohantworten in `rohdaten/`.

**Begriffe und Schreibweisen:**
- **KI-simuliert (Tool)** = Antwort einer simulierten Person; **KI-gestützt (Tool)** = KI-Analyse ohne Befragte (P11,
  Codierung). Nie „Befragte sagen“ ohne diesen Zusatz.
- **Hauptgruppe** = T1–T8; Persona-Block nur in Gespräch 1 (Interview), in Gespräch 2 (Bewertung) und 3 (Laddering)
  Profil und eigene Antworten aus Gespräch 1 als Rückblick; **Kontrollgruppe** = dieselben Profile ohne Persona-Block,
  nur Auswahlfragen und Triaden.
- **x/8** = Zahl verschiedener simulierter Personen; **Nennungen** = Zahl der Triaden-Antworten (kann über 8 liegen).
- **Startpunkt, kein Attribut** = Konstrukt, mit dem das Laddering beginnt, ohne die Auswahlregel zu erfüllen.
- CSV-Dateien: Semikolon, UTF-8, Dezimalkomma (direkt in Google Sheets importierbar). Jede Ausgabe-CSV in
  `auswertung/` hat als letzte Spalte „quelle“ = „KI-simuliert (Tool) …“, damit die Kennzeichnung beim Teilen erhalten
  bleibt; Codier-Dateien in `codierung/` sind KI-gestützte Codierungen KI-simulierter Antworten.

**Nachrechnen:** Python 3, ohne Zusatzpakete, aus dem Ordner `buendel-b` oder von überall:
`python3 auswertung/pruefe_konstrukte_codierung.py`, `python3 auswertung/repertory_grid.py`,
`python3 auswertung/laddering.py`, `python3 auswertung/analogien_aaker.py`, `python3 auswertung/pruefe_rohdaten.py`,
`python3 auswertung/pruefe_synthese.py` (in dieser Reihenfolge).
Die Skripte sind deterministisch; die Sheets-Formeln stehen jeweils im Kopfkommentar.

## Dateien

| Datei | Inhalt |
|---|---|
| `README.md` | dieser Überblick |
| `folienvorschlag.md` | Entscheidungsvorlage für die Folien 06, 07, 08, 08b, 10, B1, B4, B5 (Daten-JSON, Titel, Fußzeilen, Sprechtext, Rückfragen) |
| `simulation-protokoll.md` | Design, Prompts wörtlich, Regeln mit Zeitpunkt, Rechenwege, Abweichungen vom Dossier, Auffälligkeiten |
| `repertory-grid.md` | Vorlage methoden.md §2 ausgefüllt: Konstrukte, Mittelwerte, Auswahl, Kontrollgruppe, Abgleich Anhang 2 |
| `laddering.md` | Vorlage methoden.md §3 ausgefüllt: Leitern, Abbrüche, Implikationsmatrix, HVM, Markennutzen, Abgleich |
| `analogien-befragung.md` | Vorlage methoden.md §4 ausgefüllt: Tier, Mensch, Beziehung, Gefühle, Erlebnisse, Aaker, P11, Abgleich mit Hypothese und Elias |
| `rohdaten/interviews/T1–T8.json` | Gespräch 1 der Hauptgruppe (Auswahlfragen, Triaden, Analogien, Aaker-Bogen, Kauf) |
| `rohdaten/kontrolle/T1–T8.json` | Kontrollgruppe ohne Persona-Block (Auswahlfragen, Triaden) |
| `rohdaten/bewertungen/T1–T8.json` | Gespräch 2: Bewertungen 1–7 (P8) mit Kommentar |
| `rohdaten/leitern/T1–T8.json` | Gespräch 3: Laddering-Dialoge und Ketten (P9) |
| `rohdaten/p11-ki.md` | P11, ein Lauf, KI-gestützt (keine Befragten); Antwort unverändert, Modellbezeichnung aus der Kennzeichnungszeile entfernt (23.10.2026) |
| `rohdaten/verworfen-erstlauf/` | verworfene Erstläufe T5, T6 (gleicher Prompt, erste Ziehung) – nicht ausgewertet, nur Vergleich der Ziehungen |
| `codierung/konstrukte-codebuch.csv`, `konstrukte-zuordnung.csv`, `konstrukte-nebenaspekte.csv`, `konstrukte-protokoll.md` | Codierung der Triaden (12 K-Codes, X01–X03 nur Kontrolle), Regeln R0–R13 |
| `codierung/konstrukte-grenzfaelle.csv`, `konstrukte-erstlauf-zuordnung.csv` | anders vertretbare Hauptcodes (Robustheit); Codierung der verworfenen Erstläufe |
| `codierung/leitern-codebuch.csv`, `leitern-zuordnung.csv`, `leitern-nebencodes.csv` | Codierung der Leitern (41 Codes), Nebenaspekte, Alternativen, Abbruchgründe, Abgleich |
| `codierung/leitern-wichtigkeit.csv` | Antworten auf die Prüffrage „ohne Zucker“ und Belege aus Gespräch 1 (Stimmigkeit) |
| `codierung/analogien-codebuch.csv`, `analogien-codierung.csv`, `analogien-protokoll.md` | Codierung von Analogien und Aaker-Bogen, Regeln A0–A12 |
| `auswertung/pruefe_konstrukte_codierung.py` → `konstrukte-nennungen.csv`, `konstrukte-haupt-kontrolle.csv`, `konstrukte-erstlauf-vergleich.csv`, `konstrukte-grenzfaelle-wirkung.csv` | Nennungen und Befragte je Code, Ausrichtung; Haupt ↔ Kontrolle je Triade; zweite Ziehung; Wirkung der Grenzfälle |
| `auswertung/repertory_grid.py` → `repertory-grid-ergebnis.csv`, `repertory-grid-bewertungen-lang.csv` | Mittelwerte, Differenzierung, Ideal-Distanz, Auswahl |
| `auswertung/laddering.py` → `implikationsmatrix.csv`, `hvm.json`, `hvm.md`, `leitern-wichtigkeit-pruefung.csv` | Implikationsmatrix, HVM, Abbrüche, Robustheit, Stimmigkeit der Prüffrage |
| `auswertung/analogien_aaker.py` → `analogien-*.csv`, `aaker-*.csv` | Häufigkeiten, Aaker-Dimensionen und -Facetten |
| `auswertung/pruefe_rohdaten.py` → `rohdaten-kennzeichnung.csv`, `rohdaten-muster.csv` | Kennzeichnung je Rohdatei; wiederkehrende Wörter (Schablonen, Klischees) |
| `auswertung/pruefe_synthese.py` | prüft folienvorschlag.md gegen die CSV-Dateien, zählt Sprechtexte und das Wortbudget von Folie 10 (schreibt keine Datei) |

## Grenzen

- **Kein Kundengespräch:** Eine generierte Persona beschreibt Trainingsdaten, nicht die eigenen Kunden; plausible
  Details ersetzen keine Empirie; Stereotype wirken objektiv; Widersprüche verschwinden (Stenger, S. 78). Das gilt hier
  für jede simulierte Antwort – „8 von 8“ heißt: ein gemeinsames Bild des Modells, nicht starke Zustimmung.
- **Simulierte Befragte sind keine Daten** (Dossier §7): Sie entstehen im selben Tool, bekannte Klischees werden
  verstärkt, Nischenwissen fehlt, es gibt keine Repräsentativität (prompts.md, Teil C). Formulierung für Folien und
  Vortrag: „Die KI-Simulation liefert Hypothesen; ob sie tragen, müssten echte Interviews und Kundenstimmen zeigen.“
- **Technisch getrennt, inhaltlich verwandt:** Jede Person lief in einem eigenen Agenten ohne Dateizugriff; trotzdem
  zeigen fast gleiche Formulierungen („verkaufen“ in 7 von 8 Antworten auf die Beziehungsfrage) und Aaker-Facetten mit
  identischen Werten gemeinsame Bilder des Modells.
- **Persona-Block nur in Gespräch 1:** Er prägt das Interview vor (Zucker, Online-Kauf, Pulver, Preis, Humor, „Squad“,
  Gaming); Bewertung und Laddering liefen ohne ihn, mit dem Rückblick auf Gespräch 1 (`simulation-protokoll.md` §2.3,
  §6 Nr. 15–16).
- **Kontrollgruppe:** prüft nur den Persona-Block, und nur für die Triaden. Profile, P0, Triaden und Modell bleiben
  gleich; die Profile nennen Pulver, online, Zucker, YouTube, TikTok und Instagram selbst. Sie belegt weder
  Unabhängigkeit noch Realitätsnähe.
- **Zweite Ziehung:** T5 und T6 wurden zweimal simuliert; die zweite Ziehung änderte 5 von 13 Triaden
  (`simulation-protokoll.md` §2.7). Zählungen wie 4/8 sind Richtungen.
- **Widersprüche im Laddering:** 8 von 8 nennen „ohne Zucker“ wichtig, 4 davon gegen ihre eigenen früheren Antworten;
  der P9-Rückblick enthielt weder Triaden noch Bewertungen (`laddering.md` §2).
- **Idealmarke:** „für jeden Tag“ ist der Name der Idealmarke; als Konstrukt (K09) und Startpunkt ist es zum Teil ein
  Echo davon, und der simulierte Interviewer schreibt es HOLY zu.
- **Abgleich mit dem Desk Research:** „nur online“, „weniger Kick“, „eher teuer“ und Gönrgy „nicht zuckerfrei“
  widersprechen den Fakten im Recherche-Dossier (`repertory-grid.md` §7) – eher veraltetes Modellwissen als Wahrnehmung.
- **Reproduzierte Klischees:** Profile und Antworten folgen Geschlechter- und Milieubildern (Gaming = junge Männer,
  „Tanke“ in 8 von 8 Interviews, Markenperson mit dem Geschlecht der Befragten, Leiter-Spitzen nach Beruf und Rolle);
  „verlässlich sein“ folgt vor allem aus den Schicht- und Werkstattprofilen (`simulation-protokoll.md` §8).
- **Profile:** Vier der acht arbeiten im Schicht- oder Fahrdienst (T1, T2, T5, T7), dazu Werkstatt (T8); T1 ist fast
  ein Echo der Persona „Marco, 28“.
- **Codierung** durch ein KI-Tool ohne menschliche Zweitcodierung, und nicht blind: Die Aufträge nannten
  Vergleichsbegriffe schon vorher. Grenzfälle verschieben einzelne Zählungen, nicht die Auswahl. **Aaker-Bogen** von
  simulierten Personen statt von Menschen; **Wettbewerbsset und Idealmarke** nicht von der Gruppe beschlossen.
- **Kategorie, nicht HOLY:** Den Nutzen „ohne Zucker“ verbinden die simulierten Personen ausdrücklich auch mit anderen
  Marken.

## Offene Punkte

- Entscheidungen E1–E18 in `folienvorschlag.md` §9 (u. a. Feld Nutzen und Tonalität auf Folie 10, Quellenkürzel,
  Positionierung, Technikänderungen für Folie 07, B4 und B5).
- Prüfung durch die Gruppe (Vorschlag: Grenzfälle aus `codierung/konstrukte-grenzfaelle.csv` nachcodieren).
- Auffälligkeiten in den Rohdaten (`simulation-protokoll.md` §8): Kennzeichnung uneinheitlich, Künstlername in
  einzelnen Polen. Die Modellbezeichnung in `rohdaten/p11-ki.md` ist am 23.10.2026 aus der Kennzeichnungszeile
  entfernt worden.
