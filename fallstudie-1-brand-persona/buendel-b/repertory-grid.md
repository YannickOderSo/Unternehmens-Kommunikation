# Repertory Grid → Markeneigenschaften (Bündel B, KI-simuliert)

> **KI-simuliert.** 8 fiktive Befragte T1–T8, je Person ein eigener Agent (Workflow D25, im Auftrag von Yannick
> Heisler, 22.10.2026). Keine echten Interviews, keine Kundenstimmen. Alle Ergebnisse sind Hypothesen, ohne
> Aussagen über Signifikanz oder Repräsentativität. KI-Personas ersetzen kein Kundengespräch (Stenger, S. 78).
> Codiert hat ein KI-Tool, gerechnet haben Python-Skripte; Prüfung durch die Gruppe: ☐ offen.
> Nacharbeit 23.10.2026 nach drei Prüfberichten: Kontrollgruppe enger gelesen, „für jeden Tag“ als Echo der Idealmarke,
> Abgleich mit dem Desk Research, Grenzfälle und zweite Ziehung (§2, §4, §7). Zahlen und Auswahl unverändert.

Vorlage: [`../methoden.md`](../methoden.md) §2 · Plan: [`../dossier-buendel-b.md`](../dossier-buendel-b.md) §3 (B1) ·
Ablauf und Prompts: [`simulation-protokoll.md`](simulation-protokoll.md) · Folien: [`folienvorschlag.md`](folienvorschlag.md)
Abschnitt 1 und 7. Methodenbegriffe nach Standardliteratur (Kelly 1955) – mit den Vorlesungsfolien abgleichen.

## Auf einen Blick

- **Kein Konstrukt erfüllt alle drei Kriterien** der vorab festgelegten Auswahlregel. Damit gibt es aus dem
  Repertory Grid **keine Markeneigenschaft**.
- **Vier Hürden:** „selbst anrühren“, „online bestellen“, „neu, Ausprobieren“ und „Influencer-Zeug“ heben HOLY stark
  vom Wettbewerb ab, aber das Ideal liegt jeweils am anderen Pol. „Online bestellen“ ist nur ein **Eindruck** der
  Simulation: HOLY ist seit 2024/2025 auch im Lebensmittelhandel (Recherche-Dossier 2.5 ✔ [6, 8, 9]; §7).
- **„Ohne Zucker“** ist relevant und hebt HOLY vom Durchschnitt der Wettbewerber ab (2,67),
  aber nicht von Coca-Cola Zero (6,88 zu HOLY 6,75); HOLY liegt über dem
  Ideal (5,13).
- **Startpunkte fürs Laddering** (Rückfallregel, kein Attribut): „ohne Zucker“ und „für jeden Tag“. „Für jeden Tag“
  ist zugleich der Name der Idealmarke; in allen Nennungen steht die Idealmarke auf diesem Pol – ein schwacher
  Startpunkt (§2).
- **Stärkster Wettbewerber:** Coca-Cola Zero (kleinste mittlere Ideal-Distanz, 0,98) – eine Folge der
  Idealmarke „mein idealer Drink für jeden Tag“.
- **Kontrollgruppe:** 11 der 12 Konstrukte entstehen auch ohne Persona-Block, alle vier Hürden eingeschlossen. Das
  zeigt nur, dass der Block sie nicht allein erzeugt – die Profile nennen Pulver, online, Zucker, YouTube, TikTok und
  Instagram selbst (§4).
- **Wackelig im Einzelnen:** Eine zweite Ziehung derselben Profile (T5, T6) ergab in 5 von 13 Triaden ein anderes
  Konstrukt; Grenzfälle der Codierung verschieben einzelne Zählungen, nicht die Auswahl (§4).

---

## 1. Vorlage methoden.md §2 – ausgefüllt

**Ziel:** Herausfinden, mit welchen Eigenschaften die (hier KI-simulierte) Zielgruppe Marken der Kategorie
unterscheidet und wo HOLY relevant und differenzierend ist.

**Elemente (7):** M = HOLY · W1 = Red Bull · W2 = Monster · W3 = Gönrgy · W4 = waterdrop · W5 = Coca-Cola Zero ·
I = „mein idealer Drink für jeden Tag“ (Wettbewerbsset und Idealmarke nach Dossier Bündel B §3 bzw. §10, Punkt 1 und 2
– von der Gruppe nicht beschlossen, Vorschlag übernommen).

**Triaden:** 1) M–W1–W2 · 2) M–W3–I · 3) W1–W4–I · 4) M–W5–W2 · 5) W2–W3–W4 · 6) M–W4–I · 7) W1–W3–W5 · 8) M–W5–I.
Kannte eine Person eine Marke der Triade nicht, wurde die Triade übersprungen (Dossier §5, Bekanntheit).

Gültige Triaden je Person (gezählt in `codierung/konstrukte-zuordnung.csv`):

| Gruppe | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | Summe |
|---|---|---|---|---|---|---|---|---|---|
| haupt | 8 | 5 | 5 | 5 | 5 | 8 | 5 | 5 | 46 |
| kontrolle | 8 | 5 | 8 | 5 | 5 | 8 | 5 | 5 | 49 |

**Vorgehen, wie es gelaufen ist:**
1. **Konstrukte erheben:** je Person ein Agent mit P0, Befragten-Block und der P7-Abwandlung für eine Person
   (Wortlaut: `simulation-protokoll.md` §3). Frage je Triade: „In welcher wichtigen Hinsicht sind sich zwei dieser
   Marken ähnlich und unterscheiden sich von der dritten?“, Nachfrage: „Und wie würdest du die dritte beschreiben?“
2. **Konsolidieren:** Ein KI-Tool hat die 46 Antworten der Hauptgruppe zu 12 Codes zusammengefasst (Regeln R0–R13,
   `codierung/konstrukte-protokoll.md`), Pole im Wortlaut der simulierten Befragten, Ausrichtung: rechts (7) = der
   Pol, den HOLY in den Nennungen häufiger bekommt („HOLY-typisch“, nicht „gut“). Gezählt per Skript
   (`auswertung/pruefe_konstrukte_codierung.py`).
3. **Raten:** Jede Person bewertet in einem neuen Agenten alle 7 Elemente auf allen 12 Konstrukten (1–7, null = Marke
   unbekannt), mit ihren eigenen Antworten aus Gespräch 1 als Rückblick (P8-Abwandlung).
4. **Auswerten:** per Skript `auswertung/repertory_grid.py` (exakte Brüche, gerundet erst in der Ausgabe, Formeln
   für Sheets im Kopfkommentar).
5. **Auswahlregel:** vor dem Rechnen festgelegt (22.10.2026, im Auftrag von Yannick) und unverändert angewandt
   (Abschnitt 2).

**Tabelle der Vorlage** (alle 12 Konstrukte; Werte aus `auswertung/repertory-grid-ergebnis.csv`, 2 Nachkommastellen):

| Code | Konstrukt (Pol 1 – Pol 7) | Nennungen (Befragte) | Ø M | Ø W | Ø I | Differenzierung | Ideal-Distanz | Markeneigenschaft? | im Persona-Block | Kontrolle: Nennungen (Befragte) |
|---|---|---|---|---|---|---|---|---|---|---|
| K01 | Zuckerbombe – ohne Zucker | 4 (4) | 6,75 | 4,08 | 5,13 | 2,67 | 1,63 | nein (verfehlt: Ideal) – **Startpunkt** | ja | 5 (5) |
| K02 | gibt's überall – online bestellen | 5 (5) | 6,50 | 2,53 | 1,38 | 3,97 | 5,13 | nein – **Hürde** | ja | 5 (5) |
| K03 | aufmachen, fertig – selbst anrühren | 9 (7) | 6,50 | 2,05 | 1,63 | 4,45 | 4,88 | nein – **Hürde** | ja | 8 (7) |
| K04 | knallt, macht wach – weniger Kick | 5 (4) | 4,38 | 3,70 | 2,88 | 0,68 | 1,50 | nein (verfehlt: Differenzierung, Ideal) | ja | 5 (4) |
| K05 | einfach, ohne Hype – Influencer-Zeug | 4 (4) | 6,25 | 3,63 | 1,13 | 2,63 | 5,13 | nein – **Hürde** | Grenzfall | 4 (4) |
| K06 | kennt jeder – neu, Ausprobieren | 6 (6) | 5,63 | 2,81 | 2,25 | 2,82 | 3,38 | nein – **Hürde** | nein | 8 (7) |
| K07 | laut, für Zocker – ruhig, ganz normal | 3 (3) | 3,38 | 4,08 | 6,13 | 0,70 | 2,75 | nein (verfehlt: Differenzierung, Ideal) | ja | 2 (2) |
| K08 | günstig – eher teuer | 1 (1) | 5,25 | 4,28 | 1,88 | 0,97 | 3,38 | nein (verfehlt: Relevanz, Differenzierung, Ideal) | ja | 1 (1) |
| K09 | Kick für Notfälle – für jeden Tag | 5 (4) | 5,13 | 4,14 | 6,63 | 0,98 | 1,50 | nein (verfehlt: Differenzierung, Ideal) – **Startpunkt** | ja | 4 (3) |
| K10 | schmeckt natürlich – schmeckt künstlich | 2 (2) | 4,88 | 4,89 | 2,25 | 0,02 | 2,63 | nein (verfehlt: Relevanz, Differenzierung, Ideal) | nein | 2 (2) |
| K11 | zu wässrig – schmeckt nach was | 1 (1) | 3,88 | 5,34 | 6,00 | 1,47 | 2,13 | nein (verfehlt: Relevanz, Ideal) | ja | 1 (1) |
| K12 | weiß, was ich zahle – keine Ahnung vom Preis | 1 (1) | 5,75 | 3,33 | 1,13 | 2,42 | 4,63 | nein (verfehlt: Relevanz, Ideal) | ja | 0 (0) |

Lesehilfe: Nennungen = Triaden-Antworten der Hauptgruppe, in Klammern verschiedene Befragte (die Regel prüft die
Befragten). Ø W = Mittel der fünf Wettbewerber-Mittel. „im Persona-Block“ = Codebuch-Spalte (Regel R11: mindestens
ein Pol steht wörtlich oder sinngemäß im Persona-Block; Grenzfall = nur Marcos Mediennutzung). Kontrolle = dieselben
Profile ohne Persona-Block, nur Triaden.

**Hinweis für die Folie** (methoden.md §2: Polaritätenprofil mit M, stärkstem Wettbewerber und Ideal): Daten im Format
von Folie 06 und B4 in [`folienvorschlag.md`](folienvorschlag.md) Abschnitt 1 und 7.

---

## 2. Auswahlregel und Ergebnis

**Regel (vor dem Rechnen festgelegt, 22.10.2026):**
- Relevanz: von mindestens 3 der 8 Befragten der Hauptgruppe genannt.
- Differenzierung = |Ø M − Ø W| ≥ 1,0 (Ø W = Mittel der fünf Wettbewerber-Mittel; Schwelle aus den Aufgaben B1, nicht
  1,5 wie im Backup B4 der Präsentation – Dossier §10, Punkt 8).
- Nähe zum Ideal: Ideal-Distanz = |Ø M − Ø I| ≤ 1,0.
- Attribut = alle drei erfüllt; Wortlaut = Pol, an dem HOLY liegt; höchstens 4 aufs Steuerrad (Rang nach
  Differenzierung).
- Hürde = Relevanz und Differenzierung erfüllt, Ideal-Distanz > 1,0 und HOLY am vom Ideal abgewandten Pol.
- Mittelwerte nur über Befragte mit Wert (null = Marke unbekannt).
- Stärkster Wettbewerber = kleinste mittlere Ideal-Distanz |Ø Wk − Ø I| über K01–K12.
- Rückfall laut Auftrag bei weniger als 2 Attributen: Regel bleibt, als Startpunkte fürs Laddering die besten weiteren
  Konstrukte nach Differenzierung, gekennzeichnet „Startpunkt, kein Attribut“. Die Umsetzung (Pol nach Skalenmitte 4;
  aufgefüllt bis 2, zuerst aus Codes mit erfüllter Relevanz, Hürden nie) legte der auswertende Agent im Skript fest –
  nach Vorliegen der Nennungen und Bewertungen, aber vor dem ersten Skriptlauf; im Auftrag stand sie nicht. Folgenreich
  ist der Vorrang der Relevanz: Ohne ihn wäre K12 statt K09 zweiter Startpunkt (unten).

**Ergebnis:**
- **Attribute: keine.**
- **Hürden** (Rang nach Differenzierung): K03 „selbst anrühren“ (Differenzierung 4,45; Ideal bei „aufmachen, fertig“), K02 „online bestellen“ (Differenzierung 3,97; Ideal bei „gibt's überall“), K06 „neu, Ausprobieren“ (Differenzierung 2,82; Ideal bei „kennt jeder“), K05 „Influencer-Zeug“ (Differenzierung 2,63; Ideal bei „einfach, ohne Hype“).
- **Startpunkte (kein Attribut):** K01 „ohne Zucker“ (Differenzierung 2,67, Ideal-Distanz 1,63, 4 Befragte), K09 „für jeden Tag“ (Differenzierung 0,98, Ideal-Distanz 1,50, 4 Befragte).
- **„ohne Zucker“ ist weder Attribut noch Hürde:** HOLY (6,75) und Ideal (5,13) liegen
  auf derselben Seite, HOLY geht über das Ideal hinaus (Ideal-Distanz 1,63). Die Idealwerte gehen
  auseinander: T1, T2, T4, T6 setzen ihr Ideal bei 6–7, T3, T5, T7, T8 bei 3–4 (`repertory-grid-bewertungen-lang.csv`).
- **„für jeden Tag“** verfehlt die Differenzierung knapp (0,98) und die Nähe zum Ideal
  (1,50); Coca-Cola Zero (6,25) liegt näher am Ideal
  (6,63) als HOLY (5,13).
- **„für jeden Tag“ ist ein schwacher Startpunkt:** Der Pol wiederholt den Namen der Idealmarke („mein idealer Drink
  für jeden Tag“). In allen 5 Nennungen der Hauptgruppe und allen 4 der Kontrollgruppe steht die Idealmarke auf diesem
  Pol (Belege: Bildschirmausgabe von `pruefe_konstrukte_codierung.py`); zwei der fünf (T1 Tr. 2, T6 Tr. 2) sind R4-Fälle,
  deren Einzel-Pol eigentlich „Influencer-Zeug“ meint (Grenzfälle, §4). Der hohe Idealwert (Ø I 6,63) folgt also zum
  Teil aus dem Elementnamen. Im Laddering brachen 6 von 8 bei diesem Startpunkt ab, 3 mit „klingt nach Werbung“
  (`laddering.md` §2).
- Ohne den Vorrang für erfüllte Relevanz wäre K12 „keine Ahnung vom Preis“ zweiter Startpunkt gewesen
  (Differenzierung 2,42, aber nur 1 Befragte:r, Kontrolle 0) – Bildschirmausgabe des Skripts.
- **Richtung gegen die Nennungen:** Bei K07 und K11 liegt HOLY in den Bewertungen am linken Pol („laut, für Zocker“
  3,38, „zu wässrig“ 3,88), obwohl in den Nennungen der rechte Pol HOLY-typisch ist.
  Auf die Auswahl hat das keinen Einfluss (K07 verfehlt die Differenzierung, K11 die Relevanz).

---

## 3. Mittelwerte aller Elemente (mit n)

| Code | Konstrukt | M HOLY | W1 Red Bull | W2 Monster | W3 Gönrgy | W4 waterdrop | W5 Coca-Cola Zero | I Ideal | HOLY-Pol | Ideal-Pol |
|---|---|---|---|---|---|---|---|---|---|---|
| K01 | Zuckerbombe – ohne Zucker | 6,75 | 1,75 | 1,13 | 4,17 (n = 6) | 6,50 (n = 4) | 6,88 | 5,13 | rechts | rechts |
| K02 | gibt's überall – online bestellen | 6,50 | 1,00 | 1,00 | 3,67 (n = 6) | 6,00 (n = 4) | 1,00 | 1,38 | rechts | links |
| K03 | aufmachen, fertig – selbst anrühren | 6,50 | 1,00 | 1,00 | 1,00 (n = 6) | 6,25 (n = 4) | 1,00 | 1,63 | rechts | links |
| K04 | knallt, macht wach – weniger Kick | 4,38 | 1,75 | 1,13 | 2,50 (n = 6) | 7,00 (n = 4) | 6,13 | 2,88 | rechts | links |
| K05 | einfach, ohne Hype – Influencer-Zeug | 6,25 | 2,25 | 2,63 | 7,00 (n = 6) | 5,25 (n = 4) | 1,00 | 1,13 | rechts | links |
| K06 | kennt jeder – neu, Ausprobieren | 5,63 | 1,00 | 1,38 | 5,67 (n = 6) | 5,00 (n = 4) | 1,00 | 2,25 | rechts | links |
| K07 | laut, für Zocker – ruhig, ganz normal | 3,38 | 3,75 | 1,75 | 1,50 (n = 6) | 6,50 (n = 4) | 6,88 | 6,13 | links | rechts |
| K08 | günstig – eher teuer | 5,25 | 5,13 | 3,50 | 4,17 (n = 6) | 6,50 (n = 4) | 2,13 | 1,88 | rechts | links |
| K09 | Kick für Notfälle – für jeden Tag | 5,13 | 2,50 | 2,63 | 3,33 (n = 6) | 6,00 (n = 4) | 6,25 | 6,63 | rechts | rechts |
| K10 | schmeckt natürlich – schmeckt künstlich | 4,88 | 5,88 | 5,63 | 5,33 (n = 6) | 3,00 (n = 4) | 4,63 | 2,25 | rechts | links |
| K11 | zu wässrig – schmeckt nach was | 3,88 | 6,50 | 7,00 | 5,33 (n = 6) | 2,25 (n = 4) | 5,63 | 6,00 | links | rechts |
| K12 | weiß, was ich zahle – keine Ahnung vom Preis | 5,75 | 1,88 | 2,00 | 5,17 (n = 6) | 6,25 (n = 4) | 1,38 | 1,13 | rechts | links |

n je Zelle: 8, außer Gönrgy (W3) n = 6 (T2 und T4 kennen die Marke nicht) und waterdrop (W4) n = 4 (T3, T5, T7, T8
kennen sie nicht). Die null-Werte decken sich mit den Auswahlfragen in `rohdaten/interviews/` (Skript prüft das).
HOLY-Pol und Ideal-Pol: Seite der Skalenmitte 4.

**Stärkster Wettbewerber** (mittlere Ideal-Distanz über K01–K12, Bildschirmausgabe von `repertory_grid.py`):

| Element | Marke | mittlere Ideal-Distanz über K01–K12 |
|---|---|---|
| W1 | Red Bull | 1,88 |
| W2 | Monster | 2,03 |
| W3 | Gönrgy | 2,63 |
| W4 | waterdrop | 3,07 |
| W5 | Coca-Cola Zero | 0,98 |

Dass Coca-Cola Zero vorn liegt, folgt aus dem Wortlaut der Idealmarke („für jeden Tag“). Mit einer reinen
Energy-Rahmung (Dossier §3) könnte ein anderer Wettbewerber herauskommen.

**Handprüfung** (im Kopfkommentar von `repertory_grid.py`): K03 Ø M = 52 / 8 = 6,50; K01 Ø W3 = 25 / 6 = 4,17 (null
ausgelassen) – beide stimmen mit der CSV. Ein zweiter Lauf erzeugt identische Dateien (auch bei der Synthese am
23.10.2026 nachgeprüft: alle vier Auswertungsskripte erneut ausgeführt, Ausgaben unverändert; in der Nacharbeit kamen
nur die Spalte „quelle“ und bei K05 „Grenzfall“ in der Persona-Spalte hinzu).

---

## 4. Die Konstrukte: Herkunft, Persona-Block und Kontrollgruppe

| Code | Konstrukt (Pol 1 – Pol 7) | Hauptgruppe: Nennungen (Befragte) | HOLY r/l | Nebenaspekte haupt | Kontrolle: Nennungen (Befragte) | HOLY r/l Kontrolle | im Persona-Block |
|---|---|---|---|---|---|---|---|
| K01 | Zuckerbombe – ohne Zucker | 4 (4) | 4/0 | 6 (HOLY r/l 6/0) | 5 (5) | 5/0 | ja |
| K02 | gibt's überall – online bestellen | 5 (5) | 5/0 | 13 (HOLY r/l 12/0) | 5 (5) | 5/0 | ja |
| K03 | aufmachen, fertig – selbst anrühren | 9 (7) | 9/0 | 4 (HOLY r/l 4/0) | 8 (7) | 8/0 | ja |
| K04 | knallt, macht wach – weniger Kick | 5 (4) | 1/1 | 8 (HOLY r/l 4/0) | 5 (4) | 1/0 | ja |
| K05 | einfach, ohne Hype – Influencer-Zeug | 4 (4) | 4/0 | 9 (HOLY r/l 4/2) | 4 (4) | 4/0 | Grenzfall |
| K06 | kennt jeder – neu, Ausprobieren | 6 (6) | 2/0 | 1 (HOLY r/l 1/0) | 8 (7) | 3/0 | nein |
| K07 | laut, für Zocker – ruhig, ganz normal | 3 (3) | 1/0 | 3 (HOLY r/l 2/0) | 2 (2) | 0/0 | ja |
| K08 | günstig – eher teuer | 1 (1) | 1/0 | 3 (HOLY r/l 2/1) | 1 (1) | 1/0 | ja |
| K09 | Kick für Notfälle – für jeden Tag | 5 (4) | 2/0 | 2 (HOLY r/l 2/0) | 4 (3) | 1/0 | ja |
| K10 | schmeckt natürlich – schmeckt künstlich | 2 (2) | 2/0 | 1 (HOLY r/l 0/0) | 2 (2) | 2/0 | nein |
| K11 | zu wässrig – schmeckt nach was | 1 (1) | 1/0 | 1 (HOLY r/l 0/0) | 1 (1) | 1/0 | ja |
| K12 | weiß, was ich zahle – keine Ahnung vom Preis | 1 (1) | 1/0 | 0 (HOLY r/l 0/0) | 0 (0) | 0/0 | ja |
| X01 | schnell leer – reicht ganze Schicht | 0 (0) | 0/0 | 0 (HOLY r/l 0/0) | 1 (1) | 1/0 | nein |
| X02 | schmeckt immer gleich – Sorten zum Abwechseln | 0 (0) | 0/0 | 0 (HOLY r/l 0/0) | 1 (1) | 1/0 | nein |
| X03 | normales Getränk – Fitness-Ding | 0 (0) | 0/0 | 3 (HOLY r/l 3/0) | 2 (2) | 2/0 | ja |

Lesehilfe: „HOLY r/l“ = wie oft HOLY in den Nennungen dem rechten bzw. linken Pol zugeordnet ist (R8); „Nebenaspekte“
= weitere Gegensätze in denselben Antworten, die nicht zählen (R5), aber nachprüfbar machen, warum ein Code
Hauptcode wurde. K04 ist in den Nennungen 1 : 1; die Richtung entscheidet Regel R9 über die Nebenaspekte (4 : 0) –
R9 wurde im Neustart der Codierung ergänzt, nachdem der Gleichstand sichtbar war; auf die Auswahl hat die Richtung
keinen Einfluss (Abstände bleiben beim Umdrehen gleich).

**Beispiele im Wortlaut der Simulation** (Rohdaten `rohdaten/interviews/`):
- K03, T7, Triade 1: „Red Bull und Monster holst du dir an der Tanke, kalt, aufmachen, fertig. HOLY musst du erst
  anrühren, mit Shaker und Wasser – dafür hab ich im Dienst keine Zeit.“
- K01, T5, Triade 4: „HOLY und Cola Zero sind beide ohne Zucker, das ist so die Gesund-Schiene. Monster ist das
  Gegenteil: riesen Dose, Zucker ohne Ende, das haut richtig rein.“
- K05, T8, Triade 2: „HOLY und Gönrgy, das ist beides so Influencer-Zeug, wird halt auf Insta und TikTok gepusht.“
- K06, T4, Triade 8: „Bei HOLY weiß ich gar nicht so genau, was da alles drin ist, das wär mir ein bisschen zu viel
  Experiment.“
- K12, T5, Triade 8: „HOLY musst du online in so großen Dosen bestellen, mit Rabattcodes und so – keine Ahnung, was
  das am Ende pro Getränk kostet.“

**Was die Kontrollgruppe zeigt:** Ohne Persona-Block entstehen 11 der 12 Codes als Hauptcode (nur K12 nicht), dazu drei
neue: X01 „schnell leer – reicht ganze Schicht“ (1), X02 „schmeckt immer gleich – Sorten zum Abwechseln“ (1), X03
„normales Getränk – Fitness-Ding“ (2). Die vier Hürden kommen auch ohne Block (K03 8,
K02 5, K06 8, K05 4
Nennungen). Je Person und Triade wählt die Kontrollgruppe in 42 von 46 Fällen dasselbe Paar, aber nur in 27 von 46
denselben Code (`auswertung/konstrukte-haupt-kontrolle.csv`). Humor, „Squad“ und Joggen stehen im Block, kommen aber in
keiner Triade vor.

**Was sie nicht zeigt:** Die Kontrollgruppe entfernt nur den Persona-Block. Gleich bleiben die Profile, P0 (nennt HOLY
und das Markensteuerrad), die Triaden und das Modell – und die Profile nennen die Stichworte der Hürden selbst:
„skeptisch gegenüber Pulver“ (T5), „bestellt online“ (T6), „achtet auf Zucker“ (T4), „kennt HOLY von YouTube“ (T3),
„folgt HOLY auf Instagram“ (T6), „kennt HOLY nur aus TikTok-Videos“ (T8). K05 ist deshalb ein **Grenzfall**
(Mediennutzung im Block, YouTube/TikTok/Instagram in den Profilen T3, T6, T8), K06 nur schwach angelegt. Die
Kontrollgruppe zeigt also: Der Persona-Block allein erzeugt die Konstrukte nicht. Profile, Fragedesign und
Modellwissen bleiben als Quelle; Unabhängigkeit oder Realitätsnähe belegt sie nicht (prompts.md, Teil C).

**Grenzfälle der Codierung** (`codierung/konstrukte-grenzfaelle.csv`, Wirkung in
`auswertung/konstrukte-grenzfaelle-wirkung.csv`): Acht Zuordnungen der Haupt- und Kontrollgruppe sind anders
vertretbar (u. a. „Dose ↔ Pulver“ als K03 statt K02 bei T3 und T8, K09 als K05 bei T1 und T6). Bei keiner Variante,
auch nicht bei allen zugleich, ändert sich die Relevanz eines K-Codes; die Auswahl bleibt gleich. Einzelne Zählungen
verschieben sich deutlich (alle zugleich: K02 5 (5) → 3 (3), K05 4 (4) → 7 (7), K09 5 (4) → 3 (3)).

**Zweite Ziehung:** T5 und T6 wurden zweimal simuliert (der erste Lauf ist verworfen, liegt aber unverändert in
`rohdaten/verworfen-erstlauf/`). In 13 gültigen Triaden ergab die zweite Ziehung 5-mal ein anderes Konstrukt (bei
anderer vertretbarer Codierung zweier Grenzfälle 3-mal) und 3-mal ein anderes Paar
(`auswertung/konstrukte-erstlauf-vergleich.csv`). Zählungen wie „5 von 8“ sind deshalb Richtungen.

**Lesart nach Dossier §5** („in beiden → tragfähig; nur KI und im Block angelegt → kein Ergebnis“): Echte Interviews
und Kundenstimmen fehlen. Streng genommen ist deshalb **kein** Konstrukt tragfähig; die mit „ja“ im Persona-Block
(9 von 12) wären es auch dann nicht, wenn nur die KI sie nennt. Die Kontrollgruppe mildert das nur für die Frage, ob
der Block die Konstrukte erzeugt – nicht für die Frage, ob echte Menschen so denken.

---

## 5. Abgleich mit Anhang 2 (Hypothesen B1, erst nach der Codierung gelesen)

| Hypothese (Dossier Anhang 2, B1) | im Block lt. Anhang 2 | Code der Simulation | Hauptgruppe: Nennungen (Befragte) | Kontrolle | Lesart |
|---|---|---|---|---|---|
| zuckerhaltig – zuckerfrei | ja | K01 Zuckerbombe – ohne Zucker | 4 (4) (dazu 6 Nebenaspekte) | 5 (5) | spontan, auch ohne Block; trennt HOLY nicht von Coca-Cola Zero |
| künstlich gesüßt – natürlich | nein | K10 schmeckt natürlich – schmeckt künstlich | 2 (2) | 2 (2) | spontan, aber selten; HOLY eher „künstlich“ (4,88, Ideal 2,25) |
| trinkfertig – selbst anrühren | ja | K03 aufmachen, fertig – selbst anrühren | 9 (7) | 8 (7) | häufigstes Konstrukt, **Hürde** |
| kurzer Kick – lang anhaltend | nein | teils K04, K09 | – | – | Dauer kommt nicht als eigener Gegensatz vor; Stärke (K04) und „man fällt in ein Loch“ (K09) schon |
| stark aufputschend – leicht | nein | K04 knallt, macht wach – weniger Kick | 5 (4) | 5 (4) | spontan; HOLY eher „weniger Kick“ |
| teuer – günstig pro Portion | ja | K08 günstig – eher teuer | 1 (1) | 1 (1) | kaum; **neu** dazu K12 „keine Ahnung vom Preis“, Nennungen (Befragte) 1 (1): nicht der Preis, sondern dass man ihn nicht einschätzen kann |
| wenige Klassiker – ständig neue Sorten | nein | – (Kontrolle X02) | 0 | X02: 1 (1) | in der Hauptgruppe nie |
| Konzernmarke – Community-Marke | ja („Squad“) | – | 0 | 0 | **nie**, obwohl „Squad“ im Block steht; Nachbarn sind Hürden: K06 „kennt jeder – neu, Ausprobieren“, K05 „Influencer-Zeug“ |
| seriös – frech | ja („Humor“) | – | 0 | 0 | **nie** |
| Einweg – verpackungsarm | nein | – | 0 | 0 | nie |
| überall im Handel – vor allem online | ja | K02 gibt's überall – online bestellen | 5 (5) | 5 (5) | spontan, **Hürde** – aber als Eindruck: HOLY ist seit 2025 im Lebensmittelhandel (§7) |
| Sport – Alltag | schwächer („joggen“) | X03 (nur Kontrolle), K09 | Fitness nur als Nebenaspekt (3) | X03: 2 (2) | ein Fitness-Bild entsteht auch ohne Block |
| Gaming-Szene – Mainstream | ja | K07 laut, für Zocker – ruhig, ganz normal | 3 (3) | 2 (2) | spontan, aber für Monster und Gönrgy; HOLY in den Bewertungen eher Richtung „für Zocker“ (3,38); K07 ist ein Sammelcode aus Gaming, Geschlecht und Milieu (Codebuch) |

**Was spontan kam:** Zucker, Zubereitung (Dose ↔ Pulver), Bezugsweg (Tanke ↔ online), Wirkung, Gaming-Image –
also vor allem Hypothesen, die auch im Persona-Block stehen; die Kontrollgruppe nennt sie aber ebenso.

**Was nie kam:** Community bzw. „Squad“, frech, Sortenvielfalt (nur einmal in der Kontrollgruppe), Verpackung.
Damit fehlen genau die Konstrukte, aus denen die Beispieldaten der Folie 06 ihre Attribute „viele Sorten“ und
„Community-nah“ hatten.

**Was neu ist:** K05 „Influencer-Zeug“ (Hürde, im Block nur als Grenzfall), K06 „neu, Ausprobieren“ (Hürde, nicht im Block),
K09 „Kick für Notfälle – für jeden Tag“ (Alltagstauglichkeit), K11 „zu wässrig – schmeckt nach was“, K12
Preistransparenz; in der Kontrollgruppe X01 (Menge je Schicht).

---

## 6. Was das für die Folien heißt

- Folie 06: Titel „HOLY hebt sich ab – aber vor allem durch Hürden“, keine Markeneigenschaft, Kicker-Pille
  „KI-simuliert“; „online bestellen“ nur als Eindruck mit dem Gegenfakt aus dem Desk Research (Daten in
  `folienvorschlag.md` Abschnitt 1).
- Folie 10: „zuckerfrei“ nur noch als Desk-Research-Fakt (DR), „Community-nah“ streichen; die Hürde „selbst anrühren“
  steht quer zum Markenkern „Softdrinks zum Selbermixen“ (Entscheidungsvorlage in `folienvorschlag.md` Abschnitt 5).
- Backup B4: alle 12 Konstrukte mit allen Mittelwerten (Abschnitt 7 dort).

## 7. Grenzen

- **KI-simuliert, keine echten Interviews** (Stenger, S. 78; Dossier §7): Die Antworten zeigen, was das Modell über
  die Marken „weiß“, nicht, was Kund:innen denken. Nischenwissen fehlt, Klischees werden verstärkt (prompts.md,
  Teil C). Alle Bewertungsbögen enthalten Hinweise aufs Raten oder Schätzen, vor allem bei HOLY, Gönrgy und beim Preis
  (Kommentare in `rohdaten/bewertungen/`; T8 hat HOLY nie getrunken).
- **Profile:** Vier der acht Profile arbeiten im Schicht- oder Fahrdienst; das kann Konstrukte wie „gibt's überall“
  (Tanke, Raststätte, Automat in der Pause) mitprägen. „Tanke“ steht in allen acht Interviews und allen acht
  Kontrollinterviews (`auswertung/rohdaten-muster.csv`), obwohl laut Recherche-Dossier 46,8 % des Absatzes über
  Discounter laufen und 74 % zu Hause getrunken werden (Kap. 5.1 ✔ [65]).
- **Kontrollgruppe:** prüft nur den Persona-Block, nicht die Profile, P0 und das Modell (§4).
- **Zweite Ziehung und Grenzfälle:** Eine erneute Simulation derselben Profile änderte 5 von 13 Triaden; anders
  vertretbare Codierungen verschieben einzelne Zählungen (§4). Die Auswahl bleibt in beiden Prüfungen gleich, die
  Zahlen sind aber Richtungen.
- **Abgleich mit dem Desk Research** (Recherche-Dossier, nur gelesen): Mehrere simulierte Bewertungen widersprechen
  den Fakten. Sie zeigen eher ein veraltetes oder allgemeines Bild im Modell als eine geprüfte Wahrnehmung:
  - K02 „online bestellen“ (HOLY 6,50): HOLY ist seit 05/2024 im ersten REWE-Markt, ab 01/2025 im Ausbau bei Rewe,
    Edeka (nur einzelne Märkte belegt) und Globus (Kap. 2.5 ✔ [6, 8, 9]); im Handel gibt es die 15er-Dose und die
    3er-Box (Kap. 3.2 ✎). P11 (KI-gestützt) beschreibt HOLY ebenfalls als „Vertrieb stark online/D2C“.
  - K04 „weniger Kick“ (HOLY 4,38, Red Bull 1,75, Monster 1,13; waterdrop 7,00): Eine Portion HOLY Energy hat 160 mg
    Koffein, so viel wie zwei 250-ml-Dosen Red Bull (Kap. 3.3 ✔ [27]); eine 500-ml-Dose Monster hat dieselbe Menge
    (Kap. 5.2 ✔); waterdrop Microenergy etwa 90 mg (Kap. 5.2 ✎ [66]).
  - K08 „eher teuer“ (HOLY 5,25 über Red Bull 5,13): online 0,80 € je 500-ml-Portion (Kap. 3.2 ✔ [1]), im Handel
    ≈ 1,00–1,33 € (✎), Red Bull ≈ 1,96 € für 500 ml (~, nur Beispielpreise).
  - K01 Gönrgy (4,17, n = 6): Gönrgy ist zuckerfrei (Kap. 5.2 ✔ [109, 115]). Mit Gönrgy = 7 sänke die
    Differenzierung von K01 von 2,67 auf 2,10 und bliebe über 1,0 (Sensitivität im Skript, Bildschirmausgabe).
  Die Werte für Gönrgy und waterdrop deshalb nicht als Markenbild der Wettbewerber zitieren; K02, K04 und K08 nur als
  „KI-simulierter Eindruck“, nie als Befund über HOLY.
- **Wettbewerbsset und Idealmarke** sind nicht von der Gruppe beschlossen; die Idealmarke entscheidet über den
  stärksten Wettbewerber.
- **Codierung** durch ein KI-Tool in zwei Durchgängen, ohne menschliche Zweitcodierung. Vorschlag: Die Gruppe codiert
  zehn Zeilen nach (`codierung/konstrukte-protokoll.md` §7).
- **Keine Statistik:** n = 8 simulierte Personen; Unterschiede in den Mittelwerten sind Richtungen, keine Befunde.

## Dateien

`rohdaten/interviews/T1–T8.json` (Triaden) · `rohdaten/kontrolle/T1–T8.json` · `rohdaten/bewertungen/T1–T8.json` ·
`codierung/konstrukte-codebuch.csv`, `konstrukte-zuordnung.csv`, `konstrukte-nebenaspekte.csv`,
`konstrukte-protokoll.md` · `auswertung/pruefe_konstrukte_codierung.py` → `konstrukte-nennungen.csv` ·
`auswertung/repertory_grid.py` → `repertory-grid-ergebnis.csv`, `repertory-grid-bewertungen-lang.csv`.
