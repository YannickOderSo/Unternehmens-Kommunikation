# Codier-Protokoll: Konstrukte aus dem Repertory Grid (P7-Auswertung)

> **Kennzeichnung:** Alle Antworten sind **KI-simuliert (Tool)**: Hauptgruppe T1–T8 mit Persona-Block, Kontrollgruppe
> T1–T8 ohne Persona-Block (nur Triaden). Die Codierung ist **KI-gestützt (Tool)**: Unteragent im Workflow, 22.10.2026.
> Der erste Lauf brach am Nutzungslimit ab. Im Neustart habe ich seine Teilergebnisse Zeile für Zeile gegen die Rohdaten
> geprüft, übernommen und ergänzt. Prüfung durch die Gruppe: ☐ offen. Keine Websuche. Gezählt wird nur per Skript
> (`auswertung/pruefe_konstrukte_codierung.py`). Es gibt keine Aussagen über Signifikanz oder Repräsentativität.
> KI-Personas ersetzen kein Kundengespräch (Stenger, S. 78).
>
> **Nacharbeit 23.10.2026** (nach drei Prüfberichten): Rangfolge der Regeln R1–R4 ausdrücklich gemacht, K05/K08
> trennschärfer, K07 als Sammelcode, K09 als Echo der Idealmarke gekennzeichnet (Codebuch); Grenzfälle mit Wirkung
> (§6a), Vergleich mit der Kontrollgruppe je Triade und mit den verworfenen Erstläufen T5/T6 (§5, §6b). Keine Zuordnung
> der Haupt- oder Kontrollgruppe wurde geändert.

**Grundlagen:** `../dossier-buendel-b.md` §2, §3 (B1), §5, §7 · `../methoden.md` §2–§4 · `../prompts.md` P7–P11, Teil C.
Vor dem Codieren habe ich **nicht** gelesen: Anhang 2 des Dossiers (Hypothesen), `recherche/`, `index.html` und
`folienentwuerfe.md`. Die Codes sind also aus den Antworten entstanden. `rohdaten/p11-ki.md` (Analogien) wurde im ersten
Lauf beim Sichten des Ordners angelesen, aber nicht verwendet; im Neustart habe ich die Datei nicht geöffnet.
Die Begriffe „Ähnlichkeitspol“ (Paar-Pol) und „Kontrastpol“ (Einzel-Pol) stammen aus der Standardliteratur zu Kelly
(Modellwissen). Die Gruppe soll sie mit den Vorlesungsfolien abgleichen.

## 1. Datengrundlage

Alle 16 Dateien (8 × `rohdaten/interviews/`, 8 × `rohdaten/kontrolle/`) sind vorhanden und gültiges JSON (per Skript
geprüft). Gültige, also nicht übersprungene Triaden laut Skript:

| Gruppe | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | Summe |
|---|---|---|---|---|---|---|---|---|---|
| haupt | 8 | 5 | 5 | 5 | 5 | 8 | 5 | 5 | 46 |
| kontrolle | 8 | 5 | 8 | 5 | 5 | 8 | 5 | 5 | 49 |

Übersprungen wurde, wenn die Person eine Marke der Triade nicht kannte: Gönrgy (T2, T4: Triaden 2, 5, 7) oder
waterdrop (T3 nur in der Hauptgruppe, T5, T7, T8: Triaden 3, 5, 6). In der Kontrollgruppe kennt T3 waterdrop. Die beiden
Läufe haben dasselbe Profil also nicht identisch simuliert.

## 2. Codierregeln

| Nr. | Regel |
|---|---|
| R0 | Einheit: Jede gültige Triade ist genau eine Zeile in `konstrukte-zuordnung.csv` und damit eine Nennung. Übersprungene Triaden bekommen keine Zeile. |
| R1 | Ein Aspekt zählt als Gegensatz, wenn **beide** notierten Pole (pol_paar, pol_einzeln) etwas dazu sagen. Die Gegenüberstellung „Dose – Pulver anrühren“ ist ein solcher Gegensatz (K03). **Rangfolge (klargestellt 23.10.2026):** R1 legt nur fest, *was* als Gegensatz zählt. *Welcher* von mehreren Gegensätzen Hauptcode wird, entscheiden der Reihe nach R2, R3, R4 – „Dose – Pulver“ wird also nicht automatisch Hauptcode (so auch angewandt bei haupt T3 Tr. 1, T8 Tr. 1). |
| R2 | Enthält eine Antwort mehrere Gegensätze, bekommt die Zeile den Gegensatz als Hauptcode, den der Wortlaut ausführt oder begründet. |
| R3 | Ist kein Schwerpunkt erkennbar, gilt der zuerst genannte Aspekt im Paar-Pol (dem Ähnlichkeitspol, nach dem gefragt wurde). Offen bleibt, ob bei einer Wortgruppe das Beiwort oder das Hauptwort zählt („die klassischen Zuckerbomben“: K06 oder K01); solche Zeilen stehen in `konstrukte-grenzfaelle.csv`. |
| R4 | Beschreiben Paar- und Einzel-Pol verschiedene Dinge (kein gemeinsamer Gegensatz), entscheidet der Paar-Pol. |
| R5 | Die übrigen Aspekte aus den Polen stehen in `konstrukte-nebenaspekte.csv`. Sie **zählen nicht**, machen aber die Entscheidung nachprüfbar. |
| R6 | Konsolidieren: Inhaltlich gleiche Gegensätze werden ein Code. Gegensätze mit mehr als zwei Polen werden aufgeteilt: Bezug (K02) / Zubereitung (K03) · Zucker (K01) / Wirkung (K04) / Alltagstauglichkeit (K09) · Preisniveau (K08) / Preistransparenz (K12) · künstlich (K10) / wässrig (K11). |
| R7 | Pole: kurz (höchstens etwa drei Wörter), alltagssprachlich, aus dem Wortlaut der Hauptgruppe. |
| R8 | `holy_seite` gibt an, welchem Pol HOLY (M) in dieser Antwort zugeordnet ist. Ist M nicht in der Triade, steht dort „–“. |
| R9 | Ausrichtung: Rechts (7) steht der Pol, den HOLY in den Nennungen der Hauptgruppe häufiger bekommt (prüft das Skript). „Rechts“ heißt also „HOLY-typisch“, nicht „gut“. **Bei Gleichstand** entscheiden der Reihe nach (1) die Nebenaspekte der Hauptgruppe (`holy_seite` dort), (2) die Nennungen der Kontrollgruppe; erst wenn beides gleich ist, wird die Richtung hier begründet. Das Skript wendet die Stufen an und meldet einen Fehler, wenn die entscheidende Stufe für links spricht. |
| R10 | Die Kontrollgruppe wird mit demselben Codebuch codiert. Neue Codes (X01 …) gibt es nur, wenn kein K-Code zum Hauptaspekt passt. Sie gehen nicht in P8 ein. |
| R11 | `im_persona_block` = ja, wenn mindestens ein Pol im Persona-Block wörtlich oder sinngemäß vorkommt (Stichworte in §5); Grenzfall, wenn nur Marcos Mediennutzung passt (seit 23.10.2026: K05). Die Kontrollgruppe prüft nur diesen Block, nicht die Profile – die Profile nennen selbst Pulver, online, Zucker, YouTube, TikTok und Instagram (§5). |
| R12 | „sonstige“: Konstrukte, die zu keinem Code passen. Sie zählen nicht. |
| R13 | `holy_seite` in den Nebenaspekten folgt der Triaden-Logik nach Kelly: Wer im Paar steht, bekommt den Pol des Paars, wer allein steht, den Gegenpol, auch wenn nur eine Seite den Aspekt ausspricht (Beispiel T3 Tr. 4: Monster „knallt aber“ → HOLY im Paar steht auf „weniger Kick“). Bei „sonstige“ und Triaden ohne M steht „–“. |

## 3. Ergebnis der Zählung

Stand: Skriptlauf vom 22.10.2026 nach dem Neustart. Maßgeblich ist `auswertung/konstrukte-nennungen.csv`. Die Nennungen
der Hauptgruppe sind die Relevanz nach methoden.md §2. In Klammern steht die Zahl verschiedener Befragter.

| Code | links (1) | rechts (7) | Nennungen haupt (Befragte) | HOLY r/l haupt | Nebenaspekte haupt: HOLY r/l | Nennungen Kontrolle (Befragte) | HOLY r/l Kontrolle | Nebenaspekte haupt/Kontrolle | im Persona-Block |
|---|---|---|---|---|---|---|---|---|---|
| K01 | Zuckerbombe | ohne Zucker | 4 (4) | 4/0 | 6/0 | 5 (5) | 5/0 | 6/7 | ja |
| K02 | gibt's überall | online bestellen | 5 (5) | 5/0 | 12/0 | 5 (5) | 5/0 | 13/8 | ja |
| K03 | aufmachen, fertig | selbst anrühren | 9 (7) | 9/0 | 4/0 | 8 (7) | 8/0 | 4/5 | ja |
| K04 | knallt, macht wach | weniger Kick | 5 (4) | 1/1 | 4/0 | 5 (4) | 1/0 | 8/3 | ja |
| K05 | einfach, ohne Hype | Influencer-Zeug | 4 (4) | 4/0 | 4/2 | 4 (4) | 4/0 | 9/12 | Grenzfall |
| K06 | kennt jeder | neu, Ausprobieren | 6 (6) | 2/0 | 1/0 | 8 (7) | 3/0 | 1/1 | nein |
| K07 | laut, für Zocker | ruhig, ganz normal | 3 (3) | 1/0 | 2/0 | 2 (2) | 0/0 | 3/2 | ja |
| K08 | günstig | eher teuer | 1 (1) | 1/0 | 2/1 | 1 (1) | 1/0 | 3/5 | ja |
| K09 | Kick für Notfälle | für jeden Tag | 5 (4) | 2/0 | 2/0 | 4 (3) | 1/0 | 2/3 | ja |
| K10 | schmeckt natürlich | schmeckt künstlich | 2 (2) | 2/0 | 0/0 | 2 (2) | 2/0 | 1/1 | nein |
| K11 | zu wässrig | schmeckt nach was | 1 (1) | 1/0 | 0/0 | 1 (1) | 1/0 | 1/2 | ja |
| K12 | weiß, was ich zahle | keine Ahnung vom Preis | 1 (1) | 1/0 | 0/0 | 0 (0) | 0/0 | 0/1 | ja |
| X01 | schnell leer | reicht ganze Schicht | 0 (0) | 0/0 | 0/0 | 1 (1) | 1/0 | 0/0 | nein |
| X02 | schmeckt immer gleich | Sorten zum Abwechseln | 0 (0) | 0/0 | 0/0 | 1 (1) | 1/0 | 0/0 | nein |
| X03 | normales Getränk | Fitness-Ding | 0 (0) | 0/0 | 3/0 | 2 (2) | 2/0 | 3/2 | ja |

**Ausrichtung:** Bei allen K-Codes außer K04 bekommt HOLY in den Nennungen der Hauptgruppe den rechten Pol häufiger
(Skriptspalte `ausrichtung`). Jeder K-Code enthält mindestens eine Zuordnung von HOLY, eine Richtung ohne HOLY muss also
nicht begründet werden.

**K04 ist in den Nennungen unentschieden:** T1 Tr. 8 stellt HOLY zu „bringt mich wach“, T7 Tr. 4 nennt HOLY „ein bisschen
lasch, weniger Kick“. Nach R9 entscheidet Stufe 1: In den Nebenaspekten der Hauptgruppe steht HOLY laut Skript 4-mal
rechts und 0-mal links (das Skript listet die Zeilen auf). In Triade 4 nennen T3, T5 und T8 „knallt“ bzw. „haut richtig
rein“ als Vorzug von Monster gegenüber HOLY und Cola Zero; dazu kommt T5 Tr. 2 („macht wach“ steht bei der Idealmarke). Die Kontrollgruppe zeigt dieselbe Richtung (HOLY 1-mal rechts, T7 Tr. 4
„da fehlt mir der Kick“). Deshalb steht „weniger Kick“ rechts. Nur zur Information: In beiden K04-Zeilen mit Idealmarke
(T1 Tr. 3 und Tr. 8) steht I bei „macht wach“, also links.

**Nebenaspekte gegen die Richtung** (zählen nicht, ändern nichts an der Ausrichtung): K05 2-mal links (T1 Tr. 2 und T6
Tr. 2: Die beiden Profile, die HOLY schon kaufen, stellen HOLY zur Idealmarke und Gönrgy allein auf „Fan-Ding von einem
Streamer“) und K08 1-mal links (T6 Tr. 6: waterdrop „dafür ganz schön teuer“). Das Skript meldet einen Hinweis erst, wenn
die Nebenaspekte eines Codes öfter links als rechts stehen; das ist bei keinem K-Code der Fall.

## 4. Schwierige Fälle

| Zeile | Kandidaten | Entscheidung (Regel) |
|---|---|---|
| haupt T1 Tr. 1, T4 Tr. 1, T6 Tr. 1 | Dose ↔ selbst anrühren (K03) und Zucker ↔ ohne Zucker (K01) | **K03**. T1: R3. T4: R2, der Wortlaut beschreibt HOLY nur über das Anrühren und das Fitness-Bild. T6: R2, „so stark machen, wie ich will“ führt das Anrühren aus. Zucker steht als Nebenaspekt in der Datei (HOLY rechts). Deshalb wird K01 in Triade 1 nie Hauptcode; die Gruppe sieht das an der Spalte Nebenaspekte (K01: 6). |
| haupt T3 Tr. 1, T8 Tr. 1 | Dose ↔ Pulver (K03), Tanke ↔ online bzw. „nie im Laden“ (K02) | **K02** (R2): Die Aussagen betreffen den Bezug („bestellst du online“, „nur auf TikTok gesehen, nie im Laden“). Beide Profile kennen HOLY nur aus Videos. |
| haupt T5 Tr. 1, T7 Tr. 1 | K02 und K03 | **K03** (R2): „dafür hab ich im Lkw keinen Nerv“ bzw. „mit Shaker und Wasser, Aufwand“ meinen das Anrühren. |
| haupt T2 Tr. 1 | Klassiker ↔ neuer (K06), Zuckerbomben ↔ gesünder (K01) | **K06** (R3, Beiwort „klassisch“ zuerst). Mit dem Hauptwort „Zuckerbomben“ wäre es K01 – Grenzfall (§6a). |
| haupt T1 Tr. 2, T6 Tr. 2 | Paar-Pol „jeden Tag trinken“, Einzel-Pol „Hype-/Fan-Ding von einem Streamer“ | kein gemeinsamer Gegensatz, daher **K09** (R4). K05 steht als Nebenaspekt in der Datei. In Triade 2 stellen T1 und T6 (kaufen HOLY schon) HOLY zur Idealmarke, T3, T5, T7 und T8 stellen HOLY zu Gönrgy (K05). |
| haupt T4 Tr. 3 | Geschmack (schmeckt nach was ↔ süß und künstlich), Anlass (ohne schlechtes Gefühl ↔ für den Notfall) | **K09** (R2): „das trink ich nur, wenn ich nachts noch fahren muss“. Die Geschmackspole bilden keinen sauberen Gegensatz. |
| haupt T2 Tr. 6 | Instagram/schön gemacht ↔ ohne Schnickschnack (K05), teurer ↔ günstig (K08) | **K08** (R2): „man zahlt halt auch für das Hübsche … was Günstiges“. Genauso Kontrolle T4 Tr. 6. Die einzige K08-Nennung der Hauptgruppe besteht aus Merkmalen, die auch K05 nennt; seit 23.10.2026 grenzt das Codebuch ab (Design ohne Preisbezug → K05) – Grenzfall (§6a). |
| haupt T4 Tr. 6 | Aufwand (K03), Preis (K08), Instagram (K05) | **K03** (R2): „ohne Shaker und ohne dass ich extra was bestellen muss“. |
| haupt T7 Tr. 4 | ohne Zucker (K01), lasch ↔ knallt (K04) | **K04** (R2): „ein bisschen lasch. Monster knallt richtig“. Genauso Kontrolle T7 Tr. 4. In T3, T5 und T8 Tr. 4 fehlt „lasch“ im Paar-Pol, dort bleibt es bei K01 und „knallt“ ist Nebenaspekt. |
| haupt T5 Tr. 8 | Preis am Regal ↔ „keine Ahnung, was es am Ende kostet“ | eigener Code **K12**, nicht K08: Es geht darum, ob man den Preis einschätzen kann, nicht um seine Höhe. Regal ↔ online steht als Nebenaspekt in der Datei. |
| haupt T6 Tr. 6 | „schmeckt nach was“ ↔ „zu wässrig“ | **K11**. Von K10 („künstlich“) getrennt, weil das ein dritter Geschmackspol wäre. |
| haupt T8 Tr. 7 | „große alte Marke, kennt jeder“ ↔ „von einem Streamer, eher was für die Jüngeren“ | **K06** (R4, Paar-Pol). |
| K07 insgesamt | „laut und bunt, Gaming“ ↔ „ruhig, Wellness“ (T1 Tr. 5, T6 Tr. 5) und „ganz normal, nicht prollig“ ↔ „für Jungs, Zocker“ (T2 Tr. 4) | zu **einem** Code zusammengefasst: auffälliges Gamer- und Jungs-Image gegenüber unaufgeregt. **Sammelcode (Mischkonstrukt):** Er mischt Gaming, Geschlecht und Milieu – ein von der Simulation reproduziertes Klischee (Stenger, S. 78). Den Pol „ruhig“ bekommt HOLY in keiner Nennung; in den Bewertungen liegt HOLY links (Ø 3,38), die Richtung kippt. Die Gruppe kann das auch als zwei Codes führen; dann läge das Codebuch über der Obergrenze von 12 Codes und ein anderer Code müsste wegfallen. |
| Kontrolle T2 Tr. 1 / T4 Tr. 1 | Dose ↔ Pulver anrühren und viel Zucker ↔ „auf gesund gemacht“ | T2: **K03** (R3). T4: **K01** (R2), denn der Wortlaut beschreibt HOLY nur mit „tut eher so, als wär's was Gesundes“. Geprüft in der Nacharbeit: Der HOLY-Pol nennt kein „ohne Zucker“, und der Wortlaut beschreibt HOLY auch als „Pulver, das man bei Instagram sieht“. Die beiden Zeilen sind also uneinheitlich entschieden; T4 bleibt K01 und steht als Grenzfall in §6a (mit K03 hätte die Kontrollgruppe K01 4-mal und K03 9-mal). |
| Kontrolle T4 Tr. 4 | „gibt's überall gekühlt, aufmachen und trinken“ ↔ „erst bestellen und anrühren, umständlich“ | **K02** (R3, erster Aspekt „gibt's überall“). Anders als haupt T8 Tr. 8, wo der Paar-Pol mit „kalt aus dem Kühlschrank, aufmachen“ beginnt (K03). |
| Kontrolle T1 Tr. 5 | „richtige Energy-Dose mit Koffein“ ↔ „Wellness-Zeug“ | **K04**, nicht K07, denn der Paar-Pol nennt nichts Lautes. |
| Kontrolle T5 Tr. 8 | Raststätte ↔ nie im Laden, „kostet nicht die Welt“ ↔ „Preis weiß ich nicht“, kein Aufwand ↔ Shaker | **K02** (R3). Die Preispole bilden keinen gemeinsamen Gegensatz (Höhe gegen Kenntnis), deshalb stehen K12 und K08 nur als Nebenaspekte in der Datei. |
| Kontrolle T8 Tr. 1 | „richtige Energys“ ↔ „eher so Gym-Zeug“ (Fitness-Image), Dose ↔ Pulver anrühren (K03) | **X03** (R3, erster Aspekt; der Wortlaut endet mit „eher was für die Gym-Bros“). K03 steht als Nebenaspekt in der Datei. |
| Kontrolle: neue Codes | – | **X01** Menge (T1 Tr. 2), **X02** Sortenvielfalt (T1 Tr. 8), **X03** Fitness-Image (T4 Tr. 8, T8 Tr. 1). In der Hauptgruppe kommt Fitness nur als Nebenaspekt vor (T2 Tr. 1, T4 Tr. 1, T8 Tr. 4). |

## 5. Persona-Block und Kontrollgruppe

| Code | im Block? | Stichwort im Persona-Block |
|---|---|---|
| K01 | ja | „ohne Zucker“ |
| K02 | ja | „HOLY-Pulver bestellt er online“ |
| K03 | ja | „HOLY-Pulver“, „es muss schnell gehen“ |
| K04 | ja | „Er will wach durch die Schicht kommen“ |
| K05 | Grenzfall (seit 23.10.2026 auch im Codebuch) | YouTube, Instagram und TikTok stehen nur als Mediennutzung von Marco im Block, nicht als Werbung der Marke. Die Profile nennen sie als Kontaktweg zu HOLY: T3 „kennt HOLY von YouTube“, T6 „folgt HOLY auf Instagram“, T8 „kennt HOLY nur aus TikTok-Videos“ – auch in der Kontrollgruppe |
| K06 | nein (Grenzfall) | nur allgemein: „Bevor er etwas Neues kauft, liest er Bewertungen“ |
| K07 | ja | „zockt online“, „kein Schüler-Gamer“, „HOLY trinkt er meist nicht beim Zocken“ |
| K08 | ja | „rechnet in Preis pro Portion“, „ca. 0,80 € pro Portion“ |
| K09 | ja | „will gesünder leben“, „mehrmals pro Woche“ |
| K10 | nein | – |
| K11 | ja | „ohne Zucker, aber mit Geschmack“ |
| K12 | ja | „Preis pro Portion“, „Mix-&-Match-Rabatt“ |
| X01 / X02 / X03 | nein / nein / ja | X01: „50er-Dose auf Vorrat“ meint den Vorratskauf, nicht die Menge je Schicht · X02: Mix-&-Match steht nur als Rabatt im Block · X03: „geht joggen“, „will gesünder leben“ |

**Lesart (ohne Statistik):** Laut Skript kommen 11 der 12 K-Codes auch in der Kontrollgruppe als Hauptcode vor, also
ohne Persona-Block; nur K12 fehlt dort (es steht nur als Nebenaspekt in der Datei). 9 der 12 K-Codes sind im Block
angelegt, K05 ist ein Grenzfall (Skript). Je Person und Triade wählt die Kontrollgruppe in 42 von 46 Fällen dasselbe
Paar, aber nur in 27 von 46 denselben Code (`auswertung/konstrukte-haupt-kontrolle.csv`).

**Was die Kontrollgruppe zeigt – und was nicht:** Sie entfernt nur den Persona-Block. Gleich bleiben die Profile, P0
(nennt HOLY und das Markensteuerrad), die Triaden und das Modell. Die Profile enthalten selbst die Stichworte der
Hürden: „skeptisch gegenüber Pulver“ (T5), „bestellt online“ (T6), „achtet auf Zucker“ (T4), „trinkt fast täglich etwas
Zuckerfreies“ (T6), YouTube (T3), Instagram (T6), TikTok (T8). Die Kontrollgruppe zeigt also nur: **Der Persona-Block
allein erzeugt die Konstrukte nicht.** Profile, Fragedesign und Modellwissen bleiben als Quelle; Unabhängigkeit oder
Realitätsnähe belegt sie nicht. Beide Läufe können dasselbe Modellwissen über die Marken wiedergeben (Klischees,
prompts.md Teil C). Nach Dossier §2 und §5 zählen Codes mit „ja“ nur, wenn sie auch in echten Interviews oder
Kundenstimmen vorkommen. **Humor**, **„Squad“** und
**Joggen** stehen im Block, kommen aber in keiner Triade vor, weder als Haupt- noch als Nebenaspekt. „Vorm Training“
(T6) stammt aus dem Profil von T6 (Sportstudentin), nicht aus dem Block.

**Namen:** In zwei Polen der Kontrollgruppe (T1 Tr. 2, T8 Tr. 7) steht im Wortlaut der Rohdaten der Künstlername des
öffentlich bekannten Gründers von W3. Das ist keine Angabe über Befragte. In eigenen Texten (Nebenaspekte, Protokoll)
steht dafür „[Streamer]“.

## 6. Was unter „sonstige“ fiel

- **Als Hauptcode:** keine Triade, weder in der Haupt- noch in der Kontrollgruppe (Skript).
- **Als Nebenaspekt** (zählt nicht; Skript: 5 Zeilen haupt, 7 Zeilen Kontrolle): Altersgruppe allein („eher für die
  Jüngeren“, „für die Jungen“), Dosierung („so stark wie ich will“), Geschmack ohne Gegenpol („schmeckt halt“),
  Kohlensäure („ohne Blubber“) und Arbeit gegen Büro („zum Arbeiten“ ↔ „für Büroleute“).
- Codes mit nur einer Nennung in der Hauptgruppe sind K08, K11 und K12. Sie stehen im Codebuch, weil sie zu keinem
  anderen Code passen (R6). Ob sie in P8 bewertet werden, entscheidet die Auswahlregel der Gruppe.

## 6a. Grenzfälle und ihre Wirkung (Nacharbeit 23.10.2026)

Ein Prüfbericht fand bei rund 160 nachgeprüften Zuordnungen keine verdrehten Pole und keine falsche HOLY-Seite, aber
uneinheitliche Regelanwendungen. Statt einzelne Zeilen nachträglich umzucodieren, stehen alle anders vertretbaren
Hauptcodes in `konstrukte-grenzfaelle.csv` (mit Regel und Begründung); das Skript zählt jede Variante einzeln und alle
zugleich neu (`auswertung/konstrukte-grenzfaelle-wirkung.csv`).

**Ergebnis laut Skript:** Bei keiner Variante ändert sich, ob ein K-Code die Relevanz der Auswahlregel erfüllt
(mindestens 3 von 8 Befragten); auch alle zugleich nicht. Die Bewertungen (P8) sind davon nicht berührt, das
Auswahlergebnis bleibt also gleich. Die Zählungen einzelner Codes ändern sich dagegen, z. B. mit allen Grenzfällen
zugleich: K02 5 (5) → 3 (3), K03 9 (7) → 11 (7), K05 4 (4) → 7 (7), K09 5 (4) → 3 (3), Kontrolle K03 8 (7) → 10 (8).
Zählungen wie „5 von 8“ sind deshalb Richtungen, keine festen Werte.

## 6b. Zweite Ziehung derselben Profile: verworfene Erstläufe T5 und T6

T5 und T6 wurden am 22.10.2026 zweimal mit wortgleichem Auftrag simuliert; ausgewertet ist nur der zweite Lauf (der
erste Lauf liegt jetzt unverändert in `rohdaten/verworfen-erstlauf/`). Die gültigen Erstlauf-Triaden sind mit demselben
Codebuch codiert (`konstrukte-erstlauf-zuordnung.csv`, Gruppe „erstlauf“). Schwierige Fälle dort: T5 Tr. 8 „kostet nicht
viel“ ↔ „Haufen Geld auf einmal, ob sich das rechnet, weiß ich nicht“ → K08 (R3; Alternative K12); T6 Tr. 6 „macht mich
wach und schmeckt richtig nach was“ ↔ „nur ein bisschen Geschmack im Wasser, kein Kick“ → K04 (R3; Alternative K11);
T6 Tr. 4 Paar-Pol „kein Zucker“, Einzel-Pol „Riesendose, laut und krass, eher ein Männer-Ding“ → K01 (R4); T6 Tr. 8
„hat was Gutes drin, Vitamine und so“ ↔ „Cola ohne Zucker, … nicht gesund“ → sonstige (kein passender Code).

**Ergebnis laut Skript** (`auswertung/konstrukte-erstlauf-vergleich.csv`): In 13 gültigen Triaden wählte die zweite
Ziehung 3-mal ein anderes Paar und landete 5-mal bei einem anderen Konstrukt (mit den beiden Alternativen oben 3-mal):
T5 Tr. 7 K06 → K04, T5 Tr. 8 K08 → K12, T6 Tr. 4 K01 → K02, T6 Tr. 6 K04 → K11, T6 Tr. 8 sonstige → K10. Etwa jede
dritte Triade fällt bei erneuter Ziehung also anders aus; einzelne Nennungen (z. B. die einzige K12-Nennung) hängen an
einer Ziehung.

## 7. Grenzen und Prüfauftrag an die Gruppe

- Codiert hat ein KI-Tool in zwei Durchgängen (erster Lauf, Prüfung im Neustart), eine unabhängige zweite Codierung durch
  Menschen gibt es nicht. **Vorschlag:** Die Gruppe codiert zehn Zeilen selbst nach und notiert die Abweichungen –
  gezielt die acht Grenzfälle der Haupt- und Kontrollgruppe aus `konstrukte-grenzfaelle.csv` und dazu haupt T7 Tr. 4
  (K04) und haupt T5 Tr. 8 (K12). Bei R2 entscheidet ein Urteil; die Alternativen stehen in
  `konstrukte-nebenaspekte.csv` und `konstrukte-grenzfaelle.csv`. Wer anders entscheidet, ändert
  `code` und `holy_seite` in der Zuordnung und startet das Skript neu.
- Die Nennungen zählen simulierte Antworten aus voneinander unabhängigen Agenten-Läufen. Daraus folgt weder Signifikanz
  noch Repräsentativität. Jede Aussage dazu lautet „KI-simuliert (Tool)“, nie „Befragte sagen“.

## 8. Dateien und Nachrechnen

- `codierung/konstrukte-codebuch.csv`: id;links;rechts;definition;beispiele;im_persona_block (K01–K12, X01–X03)
- `codierung/konstrukte-zuordnung.csv`: eine Zeile je gültiger Triade (95 Zeilen: 46 haupt, 49 Kontrolle)
- `codierung/konstrukte-nebenaspekte.csv`: gruppe;befragte;triade;hauptcode;nebencode;beleg;holy_seite
  (aufgeteilte Zusatzaspekte, zählen nicht; `holy_seite` nach R13)
- `auswertung/pruefe_konstrukte_codierung.py`: prüft die Codierung gegen die Rohdaten, zählt und wendet R9 an. Aufruf:
  `python3 auswertung/pruefe_konstrukte_codierung.py`. Die Formeln für Google Sheets stehen im Kopfkommentar, z. B.
  `=ZÄHLENWENNS(zuordnung!A:A;"haupt";zuordnung!I:I;A2)`.
- `auswertung/konstrukte-nennungen.csv`: Ausgabe des Skripts (Tabelle §3)
- `codierung/konstrukte-grenzfaelle.csv`: anders vertretbare Hauptcodes (§6a); Wirkung in
  `auswertung/konstrukte-grenzfaelle-wirkung.csv`
- `codierung/konstrukte-erstlauf-zuordnung.csv`: Codierung der verworfenen Erstläufe T5/T6 (§6b); Vergleich in
  `auswertung/konstrukte-erstlauf-vergleich.csv`
- `auswertung/konstrukte-haupt-kontrolle.csv`: Haupt- gegen Kontrollgruppe je Person und Triade (§5)
