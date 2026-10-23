# Analogien und Aaker → Markentonalität (Bündel B, KI-simulierte Befragung)

> **KI-simuliert.** 8 fiktive Befragte T1–T8, je Person ein eigener Agent (Workflow D25, im Auftrag von Yannick
> Heisler, 22.10.2026). Keine echten Interviews, kein Aaker-Bogen von Menschen. Alle Ergebnisse sind Hypothesen, ohne
> Aussagen über Signifikanz oder Repräsentativität. KI-Personas ersetzen kein Kundengespräch (Stenger, S. 78).
> Codiert hat ein KI-Tool, gezählt und gemittelt hat ein Python-Skript; Prüfung durch die Gruppe: ☐ offen.
> „x/8“ = verschiedene simulierte Befragte mit diesem Code. **8 von 8 heißt hier: ein gemeinsames Bild des Modells,
> nicht starke Zustimmung** – Widersprüche verschwinden in der Simulation (Stenger, S. 78).
> Nacharbeit 23.10.2026 nach drei Prüfberichten: Geschlecht der Stichprobe richtiggestellt, Frageeffekt bei der
> Beziehung, Streuung im Aaker-Bogen, Erlebnisse genauer, Vorschlag für Folie 10 (§1, §4, §7, §10, §11).

Vorlage: [`../methoden.md`](../methoden.md) §4 · Plan: [`../dossier-buendel-b.md`](../dossier-buendel-b.md) §3 (B3) ·
Elias' Analyse: [`../analogien.md`](../analogien.md) · Ablauf und Prompts: [`simulation-protokoll.md`](simulation-protokoll.md) ·
Folien: [`folienvorschlag.md`](folienvorschlag.md) Abschnitt 3 und 4. Aaker (1997); deutsche Facettenwörter sind eine
Übersetzung aus dem Modellwissen – mit der Vorlesung abgleichen.

**Abgrenzung:** Diese Datei ist das **simulierte Fremdbild** (offene Fragen an simulierte Befragte). Elias' Ausarbeitung
(`../analogien.md`, Folie 08) ist eine Analyse von HOLYs **eigener Kommunikation**. Beides misst Verschiedenes und
steht gekennzeichnet nebeneinander; nichts wurde angeglichen.

## Auf einen Blick

- **Tier:** Papagei 5/8, dazu je einmal Fuchs, Delfin, Pfau. **Chamäleon 0/8, Adler 0/8.**
- **Mensch:** eine Fitness- und Social-Media-Person Mitte bis Ende 20 (Beruf Fitness 8/8, Social
  Media 8/8); gut gelaunt 7/8, jung 7/8, witzig
  6/8, locker 6/8 – aber auch Selbstdarstellung 6/8 und
  „auf Dauer anstrengend“ 5/8.
- **Beziehung:** Kumpel 8/8, der verkaufen will (Rabattcodes) 8/8 – fast wortgleich in acht unabhängigen Agenten,
  und die Frage legt die Verkaufsbeziehung nahe (§4).
- **Gefühle:** Neugier 6/8 und Skepsis 5/8 – beides nur bei Personen, die HOLY nicht
  regelmäßig kaufen; die zwei Stammkund:innen nennen nur positive Gefühle.
- **Aaker:** HOLY am höchsten bei Spannung (3,91), knapp unter Red Bull (4,13) – eine Differenz von 0,22, die man
  nicht deuten sollte; Red Bull liegt in 4 von 5 Dimensionen über HOLY, HOLY nur bei Aufrichtigkeit vorn (3,19 zu
  2,34, vor allem über „gesund“ und „fröhlich“). Keine Facette streut über mehr als 2 Skalenpunkte (§7).
- **Gegenüber der Hypothese:** gestützt sind Kumpel, Humor, Papagei, Spannung als höchste Dimension; nicht gestützt
  frech, rebellisch, selbstironisch, Anführer, Chamäleon, Stolz, Events.

---

## 1. Vorlage methoden.md §4 – ausgefüllt

**Vorgehen, wie es gelaufen ist:**
1. **Personifizierung und Tier:** offen gefragt im ersten Gespräch jeder simulierten Person (Teil 3 des Interviews,
   „nichts vorgeschlagen“): Tier mit drei Gründen, Mensch mit Alter, Beruf, Stil, Verhalten auf der Party, Beziehung zu
   den Kund:innen und drei Gründen, drei Gefühle, ein Erlebnis.
2. **Aaker-Bogen** (Teil 4): HOLY, Red Bull und waterdrop mit 15 Facetten von 1 bis 5; unbekannte Marke = null.
3. **Wettbewerber:** Mensch und Tier wurden in der Befragung nur für HOLY gefragt. Für Red Bull und waterdrop gibt es
   nur den Aaker-Bogen und P11 (KI-gestützt, ein Lauf, keine Befragten; Abschnitt 7).
4. **Codieren** (KI-Tool, Regeln A0–A12, `codierung/analogien-protokoll.md`): wörtliche Ausschnitte → Codes
   (`codierung/analogien-codierung.csv`, 333 Zuordnungen; Codebuch mit Definition, Beispielen, Aaker-Vorschlag und
   Spalte „im Persona-Block“). Erst danach P11, Anhang 2 und Elias' Ausarbeitung gelesen.
5. **Zählen und mitteln** per Skript `auswertung/analogien_aaker.py`: Häufigkeiten als verschiedene Befragte;
   Aaker-Dimension je Person = Mittel ihrer Facetten (null ausgelassen), dann Mittel über alle, die die Marke kennen.

**Analogien** (Vorlage, Spalten M, W1, W2):

| Analogie | Marke M: HOLY (KI-simuliert, x/8) | W1: Red Bull | W2: waterdrop |
|---|---|---|---|
| Mensch (Kurzprofil) | Fitness- und Social-Media-Person, Mitte 20 (6/8) bis Ende 20 (2/8), sportlich-lässig gekleidet (8/8); Mann 5, Frau 2 (T2, T4: zwei der drei Frauen der Stichprobe; die dritte, T6, lässt das Geschlecht offen), offen 1 – das Geschlecht der Markenperson folgt also dem der simulierten Person | in der Befragung nicht gefragt · P11 (KI-gestützt): Extremsportler und Medien-/Eventproduzent | nicht gefragt · P11: Sustainability-Managerin, nebenbei Yogalehrerin |
| Tier + Begründung | Papagei 5/8 – bunt, knallig (6/8), laut, überall präsent (6/8); Fuchs (T1), Delfin (T6), Pfau (T7) | nicht gefragt · P11: Wanderfalke | nicht gefragt · P11: Delfin |
| Beziehung zu Kund:innen | Kumpel 8/8, duzt 7/8 – will verkaufen 8/8; Nähe wirkt gespielt 3/8 | nicht gefragt · P11: Entertainer und Held | nicht gefragt · P11: Coach/Mentorin |

**Markentonalität** (Vorlage):

| Markentonalität M | KI-simuliert (x/8) |
|---|---|
| Persönlichkeit (4–5 Adjektive) | gut gelaunt 7 · jung 7 · witzig 6 · locker 6 · gesellig 5 (Alternative zu gesellig: gesundheitsbewusst 5, aber im Persona-Block angelegt) |
| Markenemotionen | Neugier 6 · Skepsis 5 (beide nur bei Personen, die HOLY nicht regelmäßig kaufen – Gefühle der simulierten Nicht-Kund:innen, keine Markenemotion im Sinne der Identität); dann Gleichstand mit je 2: wach & motiviert, gutes Gewissen, genervt, gleichgültig |
| Markenbeziehung | Kumpel, der verkaufen will (Kumpel 8, Verkaufsabsicht 8; fast wortgleich, Frageeffekt – §4) |
| Markenerlebnisse | Kolleg:innen oder Freund:innen spielen im Erlebnis mit (7) – nicht immer als Erstkontakt (T1 stellt HOLY selbst einem Kollegen vor, T8 kennt HOLY aus TikTok, T2 aus dem Supermarkt); oft bei der Arbeit oder in der Schicht (5); Bewertung überwiegend kritisch (Geschmack, Handhabung); Events 0 |

---

## 2. Tierfrage

| Tier | Befragte | wer | Nennungen | Aaker (Vorschlag) | im Persona-Block |
|---|---|---|---|---|---|
| Papagei | 5/8 | T2, T3, T4, T5, T8 | 5 | – | nein |
| Delfin | 1/8 | T6 | 1 | – | nein |
| Fuchs | 1/8 | T1 | 1 | – | nein |
| Pfau | 1/8 | T7 | 1 | – | nein |

Obergruppe „bunter Vogel“ (Papagei und Pfau): 6/8 – nur Zusatzzählung, der Pfau ist kein
Synonym (Regel A9).

**Gründe** (Tiergründe, x/8):

| Tiergrund | Befragte | wer | Nennungen | Aaker (Vorschlag) | im Persona-Block |
|---|---|---|---|---|---|
| laut, überall präsent | 6/8 | T2, T3, T4, T5, T7, T8 | 7 | Spannung (unsicher) | Grenzfall (YouTube, Instagram, TikTok stehen nur als Mediennutzung von Marco im Block) |
| bunt, knallig | 6/8 | T2, T3, T4, T5, T7, T8 | 6 | Spannung (unsicher) | nein |
| exotisch, nicht für mich | 2/8 | T4, T5 | 2 | – | nein |
| lustig, verspielt | 2/8 | T2, T6 | 2 | Spannung (unsicher) | ja („mag den Humor … der Marke“) |
| plappert nach | 2/8 | T3, T8 | 2 | – | nein |
| frech, mit Augenzwinkern | 1/8 | T1 | 1 | Spannung (unsicher) | ja („mag den Humor … der Marke“) |
| will gesehen werden | 1/8 | T7 | 1 | – | nein |
| in der Gruppe, Squad | 1/8 | T6 | 1 | – | ja („Squad“-Gefühl) |
| klein, flink, Herausforderer | 1/8 | T1 | 1 | Spannung (unsicher) | nein |
| nervt auf Dauer | 1/8 | T2 | 1 | – | nein |
| sieht gut aus, bringt wenig | 1/8 | T7 | 1 | – | nein |
| schlau, clevere Idee | 1/8 | T1 | 1 | Kompetenz | nein |
| sportlich, in Bewegung | 1/8 | T6 | 1 | – | ja („geht joggen“, Hobby von Marco) |

Die Simulation liest den Papagei oft kritisch: „plappert nach“ (T3, T8), „exotisch, nicht für mich“ (T4, T5), „nervt
auf Dauer“ (T2). „Wandelbar“ kommt in keiner Antwort vor; am nächsten liegen „probiert Neues“ (Mensch,
2/8) und „plappert nach, was gerade Trend ist“ – das meint Nachmachen, nicht Wandelbarkeit.

## 3. HOLY als Mensch

| Beruf | Befragte | wer | Nennungen | Aaker (Vorschlag) | im Persona-Block |
|---|---|---|---|---|---|
| Fitness (Trainer:in, Fitness-Content) | 8/8 | T1, T2, T3, T4, T5, T6, T7, T8 | 8 | – | nein |
| Social Media, Influencer:in, Content | 8/8 | T1, T2, T3, T4, T5, T6, T7, T8 | 8 | – | nein |
| Start-up-Gründer:in, selbstständig | 4/8 | T1, T3, T6, T8 | 4 | – | nein |

| Alter | Befragte | wer | Nennungen | Aaker (Vorschlag) | im Persona-Block |
|---|---|---|---|---|---|
| Mitte 20 | 6/8 | T2, T3, T5, T6, T7, T8 | 6 | – | nein |
| Ende 20 | 2/8 | T1, T4 | 2 | – | Grenzfall (Marco ist 28) |

| Geschlecht | Befragte | wer | Nennungen | Aaker (Vorschlag) | im Persona-Block |
|---|---|---|---|---|---|
| männlich | 5/8 | T1, T3, T5, T7, T8 | 5 | – | Grenzfall (Marco ist ein Mann) |
| weiblich | 2/8 | T2, T4 | 2 | – | nein |
| offen | 1/8 | T6 | 1 | – | nein |

| Stil | Befragte | wer | Nennungen | Aaker (Vorschlag) | im Persona-Block |
|---|---|---|---|---|---|
| sportlich-lässige Kleidung | 8/8 | T1, T2, T3, T4, T5, T6, T7, T8 | 8 | – | nein |
| bunt | 5/8 | T1, T2, T4, T5, T6 | 6 | – | nein |
| gestylt, abgestimmt | 5/8 | T2, T3, T6, T7, T8 | 5 | – | nein |

**Eigenschaften** (Mensch-Analogie):

| Eigenschaft | Befragte | wer | Nennungen | Aaker (Vorschlag) | im Persona-Block |
|---|---|---|---|---|---|
| jung | 7/8 | T2, T3, T4, T5, T6, T7, T8 | 12 | Spannung | nein |
| sportlich | 7/8 | T1, T2, T4, T5, T6, T7, T8 | 12 | – | ja („geht joggen“, Hobby von Marco) |
| gut gelaunt | 7/8 | T1, T2, T3, T4, T5, T6, T7 | 8 | Aufrichtigkeit | nein |
| witzig, Spaß | 6/8 | T1, T3, T4, T6, T7, T8 | 12 | Spannung (unsicher) | ja („mag den Humor … der Marke“) |
| locker | 6/8 | T1, T3, T4, T6, T7, T8 | 10 | Spannung (unsicher) | nein |
| Selbstdarstellung, dauernd online | 6/8 | T2, T3, T4, T5, T7, T8 | 9 | – | nein |
| gesellig | 5/8 | T1, T2, T3, T6, T7 | 6 | Aufrichtigkeit (unsicher) | nein |
| auf Dauer anstrengend | 5/8 | T4, T5, T6, T7, T8 | 5 | – | nein |
| gesundheitsbewusst | 5/8 | T1, T2, T3, T6, T8 | 5 | Aufrichtigkeit | ja („will gesünder leben“, „ohne Zucker“) |
| erzählt und empfiehlt allen | 4/8 | T3, T4, T5, T8 | 5 | – | nein |
| laut | 4/8 | T1, T5, T6, T7 | 4 | Spannung (unsicher) | nein |
| maßvoll | 4/8 | T1, T2, T4, T6 | 4 | – | nein |
| probiert Neues | 2/8 | T4, T6 | 3 | Spannung | nein |
| energiegeladen | 1/8 | T2 | 1 | Spannung | nein |
| nicht spießig | 1/8 | T6 | 1 | Spannung (unsicher) | nein |

Zusammen mit den passenden Tiergründen (Spalte „verwandt“ im Codebuch; nur Zusatzzählung):

| Eigenschaft | nur Mensch | dazu Tiergrund | zusammen | wer |
|---|---|---|---|---|
| laut | 4/8 | TG_LAUT_PRAESENT | 8/8 | T1, T2, T3, T4, T5, T6, T7, T8 |
| bunt | 5/8 | TG_BUNT | 8/8 | T1, T2, T3, T4, T5, T6, T7, T8 |
| sportlich | 7/8 | TG_SPORTLICH | 7/8 | T1, T2, T4, T5, T6, T7, T8 |
| witzig, Spaß | 6/8 | TG_FRECH_HUMOR + TG_LUSTIG | 7/8 | T1, T2, T3, T4, T6, T7, T8 |
| auf Dauer anstrengend | 5/8 | TG_NERVT | 6/8 | T2, T4, T5, T6, T7, T8 |
| Selbstdarstellung, dauernd online | 6/8 | TG_GELTUNG | 6/8 | T2, T3, T4, T5, T7, T8 |
| Gemeinschaft (Squad, Clique, Club) | 3/8 | TG_GEMEINSCHAFT | 4/8 | T1, T2, T4, T6 |
| nicht meine Welt | 2/8 | TG_EXOTISCH | 3/8 | T4, T5, T7 |

## 4. Beziehung zu den Kund:innen

| Beziehung | Befragte | wer | Nennungen | Aaker (Vorschlag) | im Persona-Block |
|---|---|---|---|---|---|
| will verkaufen (Rabattcodes) | 8/8 | T1, T2, T3, T4, T5, T6, T7, T8 | 12 | – | Grenzfall („Mix-&-Match-Rabatt“ steht im Block als Kaufverhalten von Marco) |
| Kumpel, Freund:in | 8/8 | T1, T2, T3, T4, T5, T6, T7, T8 | 11 | – | Grenzfall („Squad“ steht im Block, „Kumpel“ nicht) |
| duzt, „Bro“ | 7/8 | T1, T2, T3, T4, T5, T7, T8 | 10 | – | nein |
| schreibt an, antwortet | 4/8 | T1, T6, T7, T8 | 4 | – | nein |
| Gemeinschaft (Squad, Clique, Club) | 3/8 | T1, T2, T4 | 4 | – | ja („Squad“-Gefühl) |
| Nähe wirkt gespielt | 3/8 | T2, T4, T7 | 3 | – | nein |
| nett | 3/8 | T2, T4, T8 | 3 | – | nein |
| wie ich, mein Alter | 2/8 | T1, T3 | 3 | – | nein |
| nicht meine Welt | 2/8 | T5, T7 | 2 | – | nein |

**Schablone und Frageeffekt (Nacharbeit 23.10.2026):** Die Verkaufsabsicht steht in acht unabhängigen Agenten fast
wortgleich da: „man merkt schon, dass er dir auch was verkaufen will“ (T1), „Ist nett, aber man merkt schon, dass sie
einem auch was verkaufen will“ (T2), „Ganz nett, aber man merkt schon, dass sie einem was verkaufen will“ (T4), „am Ende
will er dir halt was verkaufen“ (T5, T7), „er will halt auch was verkaufen“ (T8), „will dir aber auch ständig was
verkaufen“ (T6), „am Ende kommt immer ein Rabattcode“ (T3). Laut Skript steht „verkaufen“ in der Antwort auf die
Beziehungsfrage bei 7 von 8, „verkaufen“ oder „Rabatt“ bei 8 von 8 (`auswertung/rohdaten-muster.csv`). Die Frage
selbst („welche Beziehung hat sie zu ihren Kund:innen?“, `simulation-protokoll.md` §3.4) legt eine Verkaufsbeziehung
nahe. 8/8 ist hier also ein gemeinsames Bild des Modells und ein Frageeffekt – auch die beiden Stammkund:innen sagen
es. Wer „Kumpel“ übernimmt, sollte deshalb beide Hälften zeigen („Kumpel, der verkaufen will“) oder keine.

Woraus die simulierten Personen ihren Eindruck ableiten (Quelle, codiert in den Gründen):

| Quelle | Befragte | wer | Nennungen | Aaker (Vorschlag) | im Persona-Block |
|---|---|---|---|---|---|
| Werbung, Social Media | 8/8 | T1, T2, T3, T4, T5, T6, T7, T8 | 18 | – | Grenzfall (YouTube, Instagram, TikTok nur als Mediennutzung von Marco) |
| Verpackung, Farben | 5/8 | T2, T3, T4, T5, T7 | 6 | – | nein |
| nur online erhältlich | 2/8 | T7, T8 | 2 | – | ja („bestellt er online“) |
| Kolleg:in, Freund:in | 1/8 | T5 | 1 | – | nein |

## 5. Gefühle

| Gefühl | Befragte | wer | Nennungen | Aaker (Vorschlag) | im Persona-Block |
|---|---|---|---|---|---|
| Neugier | 6/8 | T2, T3, T4, T5, T7, T8 | 6 | – | nein |
| Skepsis, Misstrauen | 5/8 | T2, T3, T4, T5, T8 | 5 | – | nein |
| wach, motiviert | 2/8 | T1, T6 | 2 | – | ja („will wach durch die Schicht kommen“) |
| genervt | 2/8 | T3, T8 | 2 | – | nein |
| Gleichgültigkeit | 2/8 | T5, T7 | 2 | – | nein |
| Leichtigkeit, kein schlechtes Gewissen | 2/8 | T1, T2 | 2 | – | Grenzfall („ohne Zucker“, „will gesünder leben“) |
| Enttäuschung | 1/8 | T7 | 1 | – | nein |
| Frische, Sommergefühl | 1/8 | T4 | 1 | – | nein |
| gute Laune | 1/8 | T6 | 1 | – | nein |
| Vorfreude | 1/8 | T1 | 1 | – | nein |
| Zugehörigkeit | 1/8 | T6 | 1 | – | ja („Squad“-Gefühl) |

**Nach Kaufstatus** (`auswertung/analogien-gefuehle-nach-kauf.csv`; nur Information, n = 2/2/4):

| Kaufstatus | Befragte | Gefühle (Obergruppe) | Nennungen |
|---|---|---|---|
| kauft regelmäßig | T1, T6 | ablehnend-distanziert | 0 |
| kauft regelmäßig | T1, T6 | neugierig-abwartend | 0 |
| kauft regelmäßig | T1, T6 | positiv | 6 |
| einmal gekauft | T2, T7 | ablehnend-distanziert | 3 |
| einmal gekauft | T2, T7 | neugierig-abwartend | 2 |
| einmal gekauft | T2, T7 | positiv | 1 |
| nie gekauft | T3, T4, T5, T8 | ablehnend-distanziert | 7 |
| nie gekauft | T3, T4, T5, T8 | neugierig-abwartend | 4 |
| nie gekauft | T3, T4, T5, T8 | positiv | 1 |

Kaufstatus aus Teil 5 des Interviews: kauft regelmäßig T1, T6 · einmal gekauft T2, T7 · nie gekauft T3, T4, T5, T8.

## 6. Erlebnisse

| Erlebnis | Befragte | wer | Nennungen | Aaker (Vorschlag) | im Persona-Block |
|---|---|---|---|---|---|
| über Kolleg:in oder Freund:in | 7/8 | T1, T2, T3, T4, T5, T6, T8 | 7 | – | nein |
| Moment bei der Arbeit oder Schicht | 5/8 | T1, T2, T4, T5, T7 | 5 | – | Grenzfall (Schicht steht im Block und in den Profilen T1, T2, T5, T7) |
| erstes Probieren | 5/8 | T2, T3, T4, T5, T6 | 5 | – | nein |
| Video, Werbung, Instagram | 4/8 | T2, T3, T4, T8 | 4 | – | Grenzfall (Mediennutzung von Marco) |
| entscheidet sich dagegen | 3/8 | T5, T7, T8 | 3 | – | nein |
| Geschmack kritisch | 3/8 | T3, T5, T6 | 3 | – | nein |
| Handhabung kritisch | 2/8 | T1, T7 | 2 | – | nein |
| Geschmack „okay“ | 1/8 | T4 | 1 | – | nein |
| Geschmack positiv | 1/8 | T6 | 1 | – | nein |
| im Laden entdeckt | 1/8 | T2 | 1 | – | nein |
| Paket, Lieferung | 1/8 | T6 | 1 | – | Grenzfall (Online-Bestellung von Marco) |
| Moment beim Sport | 1/8 | T6 | 1 | – | nein |
| Wirkung positiv | 1/8 | T1 | 1 | – | ja („will wach durch die Schicht kommen“) |

## 7. Aaker-Profil

**Dimensionen** (`auswertung/aaker-dimensionen.csv`; Skala 1 = trifft gar nicht zu, 5 = trifft voll zu):

| Marke | Dimension | Mittel | n | Spanne der Personen |
|---|---|---|---|---|
| HOLY | Aufrichtigkeit | 3,19 | 8 | 2,50–4,00 |
| HOLY | Spannung | 3,91 | 8 | 3,75–4,00 |
| HOLY | Kompetenz | 3,00 | 8 | 2,33–4,00 |
| HOLY | Kultiviertheit | 2,19 | 8 | 1,50–3,00 |
| HOLY | Robustheit | 1,88 | 8 | 1,50–2,50 |
| Red Bull | Aufrichtigkeit | 2,34 | 8 | 2,00–2,75 |
| Red Bull | Spannung | 4,13 | 8 | 4,00–4,50 |
| Red Bull | Kompetenz | 4,21 | 8 | 3,67–4,67 |
| Red Bull | Kultiviertheit | 2,25 | 8 | 2,00–3,00 |
| Red Bull | Robustheit | 2,56 | 8 | 2,50–3,00 |
| waterdrop | Aufrichtigkeit | 3,19 | 4 | 3,00–3,25 |
| waterdrop | Spannung | 2,56 | 4 | 2,00–2,75 |
| waterdrop | Kompetenz | 3,00 | 4 | 3,00–3,00 |
| waterdrop | Kultiviertheit | 3,25 | 4 | 3,00–3,50 |
| waterdrop | Robustheit | 2,50 | 4 | 2,50–2,50 |

**Facetten** (`auswertung/aaker-facetten.csv`; Mittel, in Klammern Spanne min–max):

| Dimension | Facette | HOLY (n = 8) | Red Bull (n = 8) | waterdrop (n = 4) |
|---|---|---|---|---|
| Aufrichtigkeit | bodenständig | 2,13 (1–3) | 2,63 (2–3) | 2,75 (2–3) |
| Aufrichtigkeit | ehrlich | 2,88 (2–4) | 2,63 (2–3) | 3,25 (3–4) |
| Aufrichtigkeit | gesund | 3,38 (3–4) | 1,00 (1–1) | 4,00 (4–4) |
| Aufrichtigkeit | fröhlich | 4,38 (4–5) | 3,13 (3–4) | 2,75 (2–3) |
| Spannung | gewagt | 3,00 (3–3) | 5,00 (5–5) | 1,75 (1–2) |
| Spannung | temperamentvoll | 3,63 (3–4) | 4,75 (4–5) | 1,75 (1–2) |
| Spannung | fantasievoll | 4,00 (4–4) | 3,25 (3–4) | 2,75 (2–3) |
| Spannung | zeitgemäß | 5,00 (5–5) | 3,50 (3–4) | 4,00 (4–4) |
| Kompetenz | zuverlässig | 2,63 (2–4) | 4,63 (4–5) | 3,00 (3–3) |
| Kompetenz | intelligent | 3,00 (2–4) | 3,00 (2–4) | 3,00 (3–3), n = 3 |
| Kompetenz | erfolgreich | 3,38 (3–4) | 5,00 (5–5) | 3,00 (3–3), n = 3 |
| Kultiviertheit | vornehm | 1,25 (1–2) | 2,38 (2–3) | 3,50 (3–4) |
| Kultiviertheit | charmant | 3,13 (2–4) | 2,13 (2–3) | 3,00 (3–3) |
| Robustheit | naturverbunden | 2,00 (2–2) | 1,00 (1–1) | 4,00 (4–4) |
| Robustheit | robust | 1,75 (1–3) | 4,13 (4–5) | 1,00 (1–1) |

Facetten mit demselben Wert bei allen Befragten, die die Marke kennen: 4 von 15 bei HOLY,
4 bei Red Bull, 8 bei waterdrop (n = 4); keine Facette streut über mehr als 2 Skalenpunkte, bei waterdrop über
höchstens 1 (Spalte `spanne` in `aaker-facetten.csv`, Bildschirmausgabe des Skripts). Das spricht für gemeinsame
Bilder des Modells, nicht für unabhängige Urteile. Gerade die Facetten ohne jede Streuung tragen den Befund „Spannung
= höchste Dimension“ (HOLY: zeitgemäß 5,00, fantasievoll 4,00 und gewagt 3,00 bei allen acht gleich). Spannung kommt
bei HOLY aus „zeitgemäß“ und „fantasievoll“, nicht aus „gewagt“ – der Facette, die „frech“ am nächsten liegt.
**Lesehilfe (keine Statistik):** Kleine Differenzen zwischen Marken nicht deuten, z. B. Spannung HOLY − Red Bull
−0,22 (`aaker-folie-08b.csv`). „Aufrichtigkeit“ hebt HOLY von Red Bull vor allem über „gesund“ (3,38 zu 1,00) und
„fröhlich“ (4,38 zu 3,13) ab; „gesund“ ist eher eine Produkteigenschaft als ein Charakterzug. Auch Stammkund:innen
und Nie-Käufer:innen unterscheiden sich kaum (Tabelle unten).

**HOLY nach Kaufstatus** (`auswertung/aaker-holy-nach-kauf.csv`; nur Information):

| Kaufstatus | Befragte | Dimension | Mittel | n |
|---|---|---|---|---|
| kauft regelmäßig | T1, T6 | Aufrichtigkeit | 3,88 | 2 |
| kauft regelmäßig | T1, T6 | Spannung | 4,00 | 2 |
| kauft regelmäßig | T1, T6 | Kompetenz | 3,83 | 2 |
| kauft regelmäßig | T1, T6 | Kultiviertheit | 2,25 | 2 |
| kauft regelmäßig | T1, T6 | Robustheit | 2,25 | 2 |
| einmal gekauft | T2, T7 | Aufrichtigkeit | 3,25 | 2 |
| einmal gekauft | T2, T7 | Spannung | 3,88 | 2 |
| einmal gekauft | T2, T7 | Kompetenz | 2,83 | 2 |
| einmal gekauft | T2, T7 | Kultiviertheit | 2,75 | 2 |
| einmal gekauft | T2, T7 | Robustheit | 1,75 | 2 |
| nie gekauft | T3, T4, T5, T8 | Aufrichtigkeit | 2,81 | 4 |
| nie gekauft | T3, T4, T5, T8 | Spannung | 3,88 | 4 |
| nie gekauft | T3, T4, T5, T8 | Kompetenz | 2,67 | 4 |
| nie gekauft | T3, T4, T5, T8 | Kultiviertheit | 1,88 | 4 |
| nie gekauft | T3, T4, T5, T8 | Robustheit | 1,75 | 4 |

**Abweichung vom Dossier:** Laut Dossier Bündel B (B3, Punkt 5) sollten nur Menschen den Bogen ausfüllen. Hier haben
KI-simulierte Personen bewertet; deshalb „KI-simuliert“ auf Folie 08b. Gemessen wurde mit einem Wort je Facette, nicht
mit den 42 Items der Skala; „gesund“ (für „wholesome“) kann als Produkteigenschaft statt als Persönlichkeit gelesen
werden. Die deutschen Wörter auf Folie 08b („modern“, „zäh“) an die Wörter des Bogens („zeitgemäß“, „robust“)
angleichen.

## 8. P11 (KI-gestützt, keine Befragten)

`rohdaten/p11-ki.md`, ein Lauf; die Antwort ist unverändert, aus der Kennzeichnungszeile wurde am 23.10.2026 nur die
Modellbezeichnung entfernt (Projektregel). Kein Ergebnis der Befragung, sondern eine projektive Analyse desselben
Tool-Typs – also keine unabhängige Bestätigung. Aussagen über Red Bull und waterdrop sind Modellwissen.

- HOLY als Mensch: Anfang/Mitte 20, Informatik-Student und Streamer bzw. Content Creator, WG in einer Großstadt; Party:
  mixt allen etwas, startet ein Spiele-Turnier; Beziehung „Kumpel/Freund auf Augenhöhe“ mit Entertainer-Anteil.
- HOLY als Tier: **Otter** (verspielt, lebt in der Gruppe, clever und im Wasser zu Hause).
- Merkmale: verspielt-humorvoll, nahbar und community-orientiert, energiegeladen, clever und bewusst,
  selbstbewusst-frech. Emotionen: Spaß, Zugehörigkeit, Energie, gutes Gewissen, Neugier/Vorfreude.
- Aaker qualitativ: Spannung hoch (primär), Aufrichtigkeit mittel bis hoch, Kompetenz mittel, Robustheit niedrig bis
  mittel, Kultiviertheit niedrig – HOLY zwischen Red Bull („Held“) und waterdrop („Coachin“).

Gegenüber der simulierten Befragung: Kumpel und Spannung vor Aufrichtigkeit stimmen überein; das Gaming- und
Streamer-Bild von P11 zeigt die Befragung nicht (Fitness 8/8, Gamer 0/8), den Otter nennt niemand.

## 9. Abgleich: Hypothese (Anhang 2, B3), Elias, Folie 08b und Feld Tonalität

Anhang 2 und Elias' Ausarbeitung wurden erst nach Codierung und Skriptlauf gelesen. Der Arbeitsauftrag nannte die
Vergleichsbegriffe (Comedian, Papagei, Chamäleon, „frecher Kumpel“) allerdings schon vorher, und bei einer Suche im
Dossier erschienen drei Zeilen aus Anhang 2 (`codierung/analogien-protokoll.md` §1).

| Begriff | Quelle | KI-simuliert (x/8) | im Persona-Block? | Lesart |
|---|---|---|---|---|
| lauter, witziger Gründer Ende 20 | Anhang 2 B3 | witzig 6, laut 4, Gründer 4, Ende 20 2 (Mitte 20 6) | Humor ja; Alter Grenzfall | teilweise |
| Gamer, Festivalgänger | Anhang 2 B3 | Gamer 0, Festival 0 (Gaming nur im Erlebnis von T3) | Gaming ja („zockt online“) | nicht gestützt – obwohl im Block |
| duzt alle | Anhang 2 B3 | 7 | nein | gestützt |
| Kumpel | Anhang 2 B3, Folie 08b, Feld Tonalität, P11 | 8 | Grenzfall („Squad“ ja, „Kumpel“ nein) | gestützt – zugleich Verkaufsabsicht 8 |
| Anführer des „Squad“ | Anhang 2 B3, Folie 08b | Anführer 0; Squad, Clique, Club 3 (mit Tiergrund 4) | „Squad“ ja | nicht gestützt |
| Tier Adler (Selbstbild, Maskottchen) | Anhang 2 B3, Folie 08 | 0 | nein | nie |
| Waschbär oder Affe | Anhang 2 B3 | 0 | nein | nie |
| Chamäleon (wandelbar) | Elias, Folie 08, Feld Tonalität | 0; „wandelbar“ 0 | nein | nicht gestützt |
| Papagei | Elias („Tier 1“) | 5 | nein | gestützt; Gründe bunt und laut, nicht „lebt im Schwarm“ |
| Impro-Comedian | Elias, Folie 08 | 0 (Beruf Fitness 8, Social Media 8) | – | nicht gestützt; Überschneidung nur beim Humor |
| frech (frech-provokant) | Anhang 2, Folie 08b, Feld Tonalität | 1 (T1, als Tiergrund „frech, mit Augenzwinkern“); Facette „gewagt“ 3,00 | Humor ja | kaum gestützt |
| selbstironisch | Anhang 2, Folie 08b, Elias | 0 | Humor ja | nie |
| rebellisch | Anhang 2, Folie 08b, Elias | 0 | nein | nie |
| verspielt | Anhang 2, Folie 08b, Elias, P11 | 1 wörtlich (T6); Tiergrund „lustig, verspielt“ 2 | Humor ja | kaum |
| kumpelhaft-nahbar | Anhang 2, Folie 08b („nahbar“) | Kumpel 8, duzt 7, schreibt an 4 | Grenzfall | gestützt |
| humorvoll | Elias, P11 | witzig 6 (mit Tiergründen 7) | ja („mag den Humor“) | gestützt, aber im Block angelegt |
| gesellig | Elias | 5 | nein | gestützt |
| Spannung als stärkste Dimension | Anhang 2, Folie 08b, P11 | HOLY Spannung 3,91 = höchste Dimension | – | gestützt; Red Bull etwa gleichauf (4,13; Differenz 0,22 nicht deuten) |
| Emotionen Spaß, Zugehörigkeit, Stolz | Folie 08b | Spaß als Gefühl 1 („gute Laune“), Zugehörigkeit 1, Stolz 0 | Zugehörigkeit ja | nicht gestützt |
| Emotionen Lachen/Unterhaltung, Überraschung, Zugehörigkeit | Elias | Überraschung nur im Erlebnis von T6; Zugehörigkeit 1 | – | kaum |
| Erlebnis „Kult-Events wie der Beichtstuhl auf Wacken“ | Folie 08b | Events 0 | nein | nicht gestützt |

**Was spontan kam:** Kumpel, Humor, bunt und laut (Papagei), Social Media, Rabattcodes. **Was nie kam:** Chamäleon,
Adler, Gamer, Festival, Anführer, rebellisch, selbstironisch, Stolz, Events. **Was neu ist:** Fitness als Beruf
(8/8), die Verkaufsabsicht (8/8), „auf Dauer anstrengend“ und Selbstdarstellung, Skepsis als häufiges Gefühl.

**Persona-Block:** Er nennt „zockt online“, aber kein Agent beschreibt die Markenperson als Gamer – die Agenten haben
den Block also nicht einfach nachgesprochen. Humor, „Squad“, gesund und joggen stehen aber im Block, und für Teil 3
und 4 gab es keine Kontrollgruppe. Codes mit „ja“ oder „Grenzfall“ gelten deshalb erst als tragfähig, wenn echte
Interviews oder Kundenstimmen sie zeigen (Dossier §2, §5).

## 10. Vorschlag für die Tonalität

Folie 08b und Feld Tonalität auf Folie 10: Daten, Titel und Varianten in [`folienvorschlag.md`](folienvorschlag.md)
Abschnitt 4 und 5 (Entscheidung E7–E9). Kurz: Merkmale gut gelaunt, jung, witzig, locker, gesellig; Emotionen Neugier
und Skepsis (Gefühle der simulierten Nicht-Kund:innen); Beziehung „Kumpel, der verkaufen will“; ins Steuerrad
(Vorschlag) „witziger Kumpel · gut gelaunt · wandelbar“ mit getrennten Quellenkürzeln: „witziger Kumpel“ und „gut
gelaunt“ = AN-KI (KI-simulierte Befragung, Folie 08b), „wandelbar“ = AN (Elias' Analyse von HOLYs eigener
Kommunikation, Folie 08; in der Simulation 0/8). Der Sprechtext nennt die zweite Hälfte („der verkaufen will“) und
sagt, dass „wandelbar“ von Elias stammt.

## 11. Grenzen

- KI-simuliert, keine echten Befragten (Stenger, S. 78; Dossier §7; prompts.md Teil C). Analogien sind projektiv und
  liefern Deutungen, keine Messung.
- Für Teil 3 und 4 keine Kontrollgruppe; der Einfluss des Persona-Blocks ist nicht prüfbar.
- Gleiche Bilder statt Streuung: Kumpel 8/8, Verkaufsabsicht 8/8, Beruf Fitness 8/8 und Social Media 8/8; 4 von 15
  HOLY-Facetten bei allen gleich, bei waterdrop 8 von 15. Widersprüche verschwinden (Stenger, S. 78) – 8/8 ist ein
  gemeinsames Bild des Modells, keine starke Zustimmung.
- Klischees (Stenger, S. 78): Die Markenperson hat das Geschlecht der simulierten Person (alle fünf Männer beschreiben
  einen Mann, zwei der drei Frauen eine Frau, T6 lässt es offen); T2 und T4 beschreiben eine „junge, sportliche Frau“
  mit Leggings und Selfies, die Männer einen „Typ“, meist aus der Fitness- und Social-Media-Ecke (Rohdaten, Feld
  `mensch`).
- Zweite Ziehung: Bei T6 lautete die Beziehung im verworfenen Erstlauf „wie eine gute Freundin“, im ausgewerteten Lauf
  „wie ein Kumpel“; „dazugehören, so ein Community-Gefühl“ steht nur im ausgewerteten Lauf
  (`rohdaten/verworfen-erstlauf/`). Einzelne Codes hängen an einer Ziehung.
- Aaker-Bogen von simulierten Personen statt von Menschen, ein Wort je Facette, Übersetzung aus dem Modellwissen;
  waterdrop nur n = 4.
- Codierung durch ein KI-Tool in einem Durchgang; Vorschlag: Die Gruppe codiert Gefühle und Tiergründe nach
  (`codierung/analogien-protokoll.md` §5).

## Dateien

`rohdaten/interviews/T1–T8.json` (Teile 3–5) · `rohdaten/p11-ki.md` · `codierung/analogien-codebuch.csv`,
`analogien-codierung.csv`, `analogien-protokoll.md` · `auswertung/analogien_aaker.py` → `analogien-haeufigkeiten.csv`,
`analogien-obergruppen.csv`, `analogien-kombiniert.csv`, `analogien-gefuehle-nach-kauf.csv`, `aaker-personen.csv`,
`aaker-dimensionen.csv`, `aaker-facetten.csv`, `aaker-folie-08b.csv`, `aaker-holy-nach-kauf.csv`.
