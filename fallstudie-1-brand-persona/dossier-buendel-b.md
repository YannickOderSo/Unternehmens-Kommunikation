# Dossier für Lukas: Persona und Daten für Bündel B nutzen

**Fallstudie 1 · HOLY · Bündel B · Stand 16.10.2026** · von Yannick Heisler (Bündel A), erstellt mit KI-Unterstützung
(Claude Code; KI-Nachweis 48, Delegationen D08 und D09). Alles stützt sich auf die Dateien im Repository; die Fundstellen stehen
in Klammern, die Kurznamen erklärt Anhang 3. Stellen mit **„Vorschlag“** sind Abwägungen aus dem Modellwissen und
nicht mit der Gruppe abgestimmt: Du entscheidest. Die Methodenbegriffe stammen aus der Standardliteratur; gleiche sie
mit den Vorlesungsfolien ab.

> **In 30 Sekunden**
>
> 1. **Die Persona „Marco, 28“ steht, ist aber noch ein Entwurf.** Die Gruppe muss die Richtung noch bestätigen
>    (Steckbrief, Kopf und Abschnitt 6).
> 2. **Kopieren statt neu schreiben:** Jeder KI-Chat beginnt mit P0, dann folgt der Befragten-Block (Abschnitt 2),
>    dann der fertige Prompt aus Anhang 1 (Ausnahme P11: nur P0, dann P11). So bleiben deine 5 simulierten Befragten
>    in jedem Chat gleich.
> 3. **Die Hypothesen aus dem Recherche-Dossier sind eine Prüfliste, keine Vorgabe.** Gib sie nie vor (Aufgaben B1).
>    Vorschlag: Lies Anhang 2 erst, wenn du ausgewertet hast.
> 4. **Rechne nur in Sheets. Zähle „echt“ und „KI-simuliert“ getrennt** und kennzeichne simulierte Befragte immer
>    als „KI-simuliert“ (Aufgaben B1 und Kopf Bündel B).
> 5. **Fristen:** Attribute an alle **Mo 19.10.**, Tonalität an Elias **Mi 21.10.**, KI-Liste: Zwischenstand
>    Di 20.10., Abgabe Fr 23.10. abends (Arbeitsplan, Übergaben; Vorlage-KI). Das Wettbewerbsset ist noch nicht beschlossen;
>    kläre es vor P7 (Abschnitt 10, Punkt 1).

**Die nächsten Tage (Vorschlag)**
- **Heute, Fr 16.10.:** 3–5 Personen für die Interviews am So 18.10. fest zusagen lassen (Abschnitt 5). Im
  Gruppenchat die offenen Punkte 1–3 und 10 aus Abschnitt 10 klären.
- **Sa 17.10.:** P7 im Chat A (Anhang 1), Chat sichern, KI-Liste ergänzen. Den Interviewablauf einmal laut
  durchspielen.
- **So 18.10.:** echte Kurzinterviews; Kundenstimmen codieren (Abschnitt 6).
- **Mo 19.10.:** alle Konstrukte zusammenführen, P8, Auswertung in Sheets, Attribute an alle.

---

## 1. Die Persona in einer Minute

Das ist die Kurzfassung aus dem Steckbrief (Abschnitt 1, Punkte 1–5). Du nutzt sie als **Persona-Block** in P7
(Anhang 1):

```text
Persona „Marco, 28“ – Kernzielgruppe von HOLY. Die Person ist fiktiv: Name, Beruf, Wohnort und Alltag sind Annahmen.
- Wer: 28, Fachkraft für Lagerlogistik im Drei-Schicht-Betrieb, Realschulabschluss + Ausbildung, mittleres Einkommen, wohnt mit seiner Freundin und einer Katze zur Miete in Dortmund.
- Alltag: Früh-, Spät- und Nachtschicht im Wechsel. In der Freizeit trifft er Freunde, zockt online und geht joggen. Er schaut viel YouTube, ist auf Instagram und TikTok und hört Podcasts.
- Kaufverhalten: Er trinkt mehrmals pro Woche Energy, vor allem vor Spät- und Nachtschichten. HOLY-Pulver bestellt er online in der 50er-Dose auf Vorrat (ca. 0,80 € pro Portion, Mix-&-Match-Rabatt). Vorher hat er Monster aus der Dose getrunken. Bevor er etwas Neues kauft, liest er Bewertungen.
- Motive: Er will wach durch die Schicht kommen: ohne Zucker, aber mit Geschmack. Er will gesünder leben, aber es muss schnell gehen. Er rechnet in Preis pro Portion und mag den Humor und das „Squad“-Gefühl der Marke.
- Nicht: kein Schüler-Gamer. HOLY trinkt er meist nicht beim Zocken (laut Gründer gilt das für die meisten Kund:innen).
```

Das fiktive Zitat („Ohne Zucker durch die Nachtschicht – und es schmeckt.“) fehlt im Block mit Absicht, damit die KI
keine fertige Formulierung übernimmt (Vorschlag). Was belegt ist und was nicht:

| Merkmal | Was gilt | Status |
|---|---|---|
| Alter | HOLY-Kundschaft meist „zwischen 25 und 40“ (Gründer [24]); in der Kategorie sind die 20- bis 29-Jährigen am stärksten überrepräsentiert (VuMA 2022, Daten 2021) | Daten |
| Geschlecht | Männer unter Energy-Drink-Konsument:innen: 54 % (Statista Consumer Insights, kurz CI, 2025) bis 67,5 % (VuMA 2021); bei HOLY laut Gründer etwa 2/3 [24] | Daten; warum die Werte abweichen, ist nicht belegt |
| Gaming | häufiges Hobby der Kategorie (41 %, Ø 29 %, Statista CI 2025), aber **kein Trinkanlass** bei HOLY [24] | Daten |
| Anlass, Preis | Schichtdienst, als Ersatz für Red Bull oder Monster [24]; online ab 0,80 € pro Portion [1] | Daten |
| Häufigkeit | 43,8 % der Energy-Drink-Konsument:innen trinken mindestens zwei- bis dreimal pro Woche (Kantar 2023) | Daten (Kategorie) |
| Kriterien, Pains, Gains | Geschmack, kein Zucker, Wirkung, Preis; Müdigkeit, Geldsorgen; Abwechslung, „Squad“ | Annahme aus Kundenstimmen [88, 89] (schwache Quelle) |
| „preisbewusst“ | rechnet in Preis pro Portion | Annahme aus HOLYs Preismodell (Recherche-Dossier 3.2) |
| Name, Beruf, Wohnort, Zitat | Marco, Lagerlogistik, Dortmund | Annahme, fiktiv |

Fast alle Zahlen beschreiben **Energy-Drink-Konsument:innen in Deutschland**, nicht die Kundschaft von HOLY.

---

## 2. Die fünf simulierten Befragten aufsetzen

**Vorschlag aus dem Steckbrief (Abschnitt 4), du entscheidest.** Die Spalte „Darauf achten“ ist ein Vorschlag.

| # | Profil (alle fiktiv) | Warum | Darauf achten |
|---|---|---|---|
| T1 | Mann, 28, Schichtdienst Logistik, Vieltrinker, HOLY-Kunde (= Marco) | Kern-Persona | spricht leicht HOLYs Werbesprache nach; P7 verlangt Alltagssprache |
| T2 | Frau, 29, Pflegefachkraft im Schichtdienst, etwa 1× pro Woche, hat HOLY im Supermarkt entdeckt | Wachstums-Persona „Lena“; 46 % der Energy-Drink-Konsument:innen sind Frauen (Statista CI 2025) | kennt den Handelspreis (≈ 1,00–1,33 € pro Portion, Recherche-Dossier 3.2), nicht 0,80 € |
| T3 | Mann, 22, Student, zockt viel, trinkt Monster aus der Dose, kennt HOLY von YouTube | Generation Z: 32 % der Konsument:innen (Statista CI 2025) | Gaming-Klischee: bei HOLY kein Trinkanlass [24] |
| T4 | Frau, 35, Bürojob, trinkt selten Energy, eher Cola Zero, achtet auf Zucker | Wenigtrinkerin; HOLYs Softdrink-Richtung [25] | „zuckerfrei“ trennt HOLY vielleicht nicht von Cola Zero |
| T5 | Mann, 39, Lkw-Fahrer, trinkt täglich Red Bull, preisbewusst, skeptisch gegenüber Pulver | obere Altersgrenze laut Gründer; Nicht-Kunde | kritische Stimme: Hürden wie „selbst anrühren“ ernst nehmen |

**So bleiben die Profile in jedem Chat gleich:**
1. **Nachricht 1:** neuen Chat mit **P0** beginnen (prompts.md). `[MARKE]` = HOLY, `[BRANCHE]` = Energy- und
   Hydration-Drinks (Arbeitsplan, Kopf).
2. **Nachricht 2:** der Befragten-Block unten.
3. **Nachricht 3:** der fertige Prompt aus Anhang 1.
4. Chat als PDF sichern und sofort in deine KI-Liste eintragen (Abschnitt 8).
5. Ergebnisse von P7–P9 kennzeichnen als „KI-simuliert (Tool), n = 5“, Ergebnisse von P10 und P11 als
   „KI-gestützt (Tool)“ (Regel aus Vorlage-KI, „So füllst du einen Eintrag aus“, Punkt 6; die Zuordnung ist ein
   Vorschlag). Persona- und Befragten-Block änderst du zwischen den Chats nie.

```text
Verwende in diesem Chat immer genau diese 5 Befragten (alle fiktiv) und nenne sie T1 bis T5:
T1: Mann, 28, Schichtdienst Logistik, Vieltrinker, HOLY-Kunde.
T2: Frau, 29, Pflegefachkraft im Schichtdienst, trinkt etwa 1× pro Woche Energy, hat HOLY im Supermarkt entdeckt.
T3: Mann, 22, Student, zockt viel, trinkt Monster aus der Dose, kennt HOLY von YouTube.
T4: Frau, 35, Bürojob, trinkt selten Energy, eher Cola Zero, achtet auf Zucker.
T5: Mann, 39, Lkw-Fahrer, trinkt täglich Red Bull, preisbewusst, skeptisch gegenüber Pulver.
Bestätige nur kurz; die Aufgabe folgt in der nächsten Nachricht.
```

**Achtung, der Persona-Block prägt die Antworten vor.** Er nennt „ohne Zucker“, Preis pro Portion, Online-Kauf, Humor,
„Squad“ und Gaming. Das sind mehrere der Konstrukte, die das Recherche-Dossier als Hypothese führt (Anhang 2). Was die
KI dazu sagt, kann also aus dem Block stammen. Zwei Wege:
- **Standard:** den vollen Block verwenden, denn die Aufgaben verlangen „P7 mit der Persona-Kurzfassung“
  (Aufgaben B1). In der Abgleich-Tabelle (Abschnitt 5) die Spalte „im Persona-Block angelegt“ ausfüllen. Solche
  Konstrukte zählen nur, wenn sie auch in echten Interviews oder Kundenstimmen vorkommen. Im Backup als Grenze der
  Methode nennen.
- **Alternative (nur nach Absprache mit Yannick):** gekürzter Block nur mit „Wer“, „Alltag“ und dem ersten Satz von
  „Kaufverhalten“. In der KI-Liste als Abwandlung von P7 vermerken.

---

## 3. Methode für Methode

Die Kette ist fest: Repertory Grid → 3–5 Markenattribute → Startpunkte fürs Laddering → Markennutzen. Die Analogien
liefern die Markentonalität, also den Maßstab, an dem Elias den tatsächlichen Auftritt misst (Aufgaben, Kopf
Bündel B und C).

**Elemente** (Vorschlag Recherche-Dossier 5.3, Hypothese; **die Gruppe muss sie noch bestätigen**):

| M | W1 | W2 | W3 | W4 | W5 | I |
|---|---|---|---|---|---|---|
| HOLY | Red Bull | Monster | Gönrgy | waterdrop | Coca-Cola Zero | „mein idealer Drink für jeden Tag“ |

Ob HOLY als Energy- oder als Softdrink-Marke verglichen wird, entscheidet über W5 und die Konstrukte
(Recherche-Dossier 5.3, 10.2) und damit auch über den Wortlaut der Idealmarke (Vorschlag).

### B1 Repertory Grid → Markenattribute (Folie 06 · 90 s · an alle Mo 19.10.)

**Worum es geht.** Im Repertory Grid (nach Kelly) vergleichen Befragte je drei Marken (Triade): Worin ähneln sich
zwei und unterscheiden sich von der dritten? Daraus entsteht ein **Konstrukt** mit zwei Polen, z. B. „trinkfertig –
selbst anrühren“. Die 8 Triaden stehen in methoden.md §2 und in P7.

**So gehst du vor:**
1. **Sa 17.10.:** Chat A mit P0, Befragten-Block und P7 aus Anhang 1: 5 Befragte × 8 Triaden. Chat sichern.
2. **So 18.10.:** echte Interviews (Abschnitt 5).
3. **Mo 19.10. früh:** alle Konstrukte aus KI und Interviews zusammenführen. Dubletten zusammenfassen, Nennungen
   **selbst** zählen, in zwei Spalten (KI, echt) → 8–12 Konstrukte. Konstrukte im Wortlaut der Befragten benennen,
   nicht mit Begriffen aus dem Recherche-Dossier.
4. P8 im selben Chat A (Anhang 1) → CSV → Google Sheets, Skala 1–7. Vorschlag: Die Bewertungen kommen nur von den
   5 simulierten Befragten, weil für echte Befragte in 10–15 Minuten keine Zeit ist (Abschnitt 10, Punkt 12).
5. **Auswahlregel vorher festlegen** und notieren, z. B. viele Nennungen, Abstand zum Wettbewerb ≥ 1 Skalenpunkt,
   kleine Ideal-Distanz → 3–5 Attribute (Aufgaben B1). Vorschlag: Ein Attribut muss außerdem in echten Interviews oder
   Kundenstimmen vorkommen.

Laut Arbeitsplan laufen P7 und P8 beide am Sa 17.10. **Vorschlag:** P8 erst am Mo, damit auch die Konstrukte aus den
echten Interviews bewertet werden.

**Rechnen in Sheets** (Formeln aus methoden.md §2, Handgriffe aus dem Modellwissen):
- CSV in A1 einfügen, dann *Daten → Text in Spalten aufteilen* (Trennzeichen Semikolon).
- *Einfügen → Pivot-Tabelle*: Zeilen = Konstrukt, Werte = M, W1–W5 und I als Mittelwert.
- Je Konstrukt: Ø W = Mittelwert von Ø W1–W5 · Differenzierung = |Ø M − Ø W| · Ideal-Distanz = |Ø M − Ø I|
  (klein ist gut) · Relevanz = Nennungen. Beispiel mit Spalte A Konstrukt, B Ø M, C–G Ø W1–W5, H Ø I: in I2
  `=MITTELWERT(C2:G2)` (Ø W), in J2 `=ABS(B2-I2)` (Differenzierung), in K2 `=ABS(B2-H2)` (Ideal-Distanz), dann nach
  unten ziehen.
- Mittelwerte nie von der KI rechnen lassen (Aufgaben B1).

**Das braucht Folie 06** (Aufgaben B1): je Konstrukt beide Pole, Nennungen, Ø HOLY, Ø stärkster Wettbewerber, Ø Ideal,
Attribut ja/nein; dazu Ø aller fünf Wettbewerber (Ø W1–W5 aus Sheets), denn daraus rechnet die Folie den Vorsprung
wie in methoden.md (Präsentation, Folie 06); Name des stärksten Wettbewerbers; ein Triaden-Beispiel; Stichprobe; Titel als Kernaussage. Die Folie
fasst 6–8 Konstrukte, der Rest kommt ins Backup B4 (alle Bewertungen und deine Auswahlregel). In der Fußzeile steht
bisher „5 KI-Personas + 3 Kurzinterviews, gemittelt“; ersetze das durch die echte Aufteilung, z. B. „Konstrukte:
5 KI-simuliert (Tool) + n echte Kurzinterviews; Bewertungen: 5 KI-simuliert (Tool)“. Die Folie zeigt bis jetzt nur
Beispieldaten: nicht als Vorlage nutzen.

**Typische Fehler:** Konstrukte aus dem Recherche-Dossier vorgeben · Mittelwerte von der KI rechnen lassen · Grid ohne
Wettbewerber oder Idealmarke (README) · Gegensätze mit mehr als zwei Polen nicht aufteilen · Titel vor der Auswertung
festlegen · bei KI-Werten von Streuung oder Signifikanz sprechen.

### B2 Laddering → Markennutzen (Folie 07 · 90 s · zur Synthese Do 22.10.)

**Worum es geht.** Beim Laddering (Means-End-Chain nach Gutman sowie Reynolds & Gutman) fragst du ausgehend von einer
Eigenschaft immer wieder „Warum ist dir das wichtig?“, bis ein persönlicher Wert erreicht ist. Die Kette lautet
Attribut → funktionale Konsequenz → psychosoziale Konsequenz → Wert. Die **Hierarchical Value Map (HVM)** zeigt alle
Verbindungen, die oft genug genannt wurden (Cut-off).

**So gehst du vor:**
1. Startpunkte sind deine Attribute aus B1, **mit genau denselben Wörtern**.
2. **Di 20.10.:** Chat B mit P0, Befragten-Block und P9 aus Anhang 1 für T1, dann im selben Chat für T2 bis T5. Die
   Abwandlung fragt zuerst, ob die Eigenschaft der Person überhaupt wichtig ist. Wenn nicht, gibt es keine Leiter;
   zähle diese Abbrüche und nenne sie im Backup B5.
3. Leitern in die Tabelle aus methoden.md §3 übertragen, gleichbedeutende Begriffe zusammenfassen, Codeliste festhalten.
4. Implikationsmatrix (wie oft führt A direkt zu B) in Sheets **selbst** auszählen; P10 darf nur einen Vorschlag
   machen. Cut-off z. B. ≥ 2 Nennungen. Gezählt werden nur direkte Verbindungen; das ist die vereinfachte Form, mit
   der Vorlesung abgleichen.
   Vorschlag für echte Leitern: Sie zählen in der Matrix nur mit, wenn ihr Startkonstrukt laut Codeliste einem
   deiner Attribute entspricht; die übrigen kommen nur ins Backup B5. In der Fußzeile von Folie 07 KI und echt
   getrennt angeben.
5. HVM ableiten, Nutzen sachlich-funktional und psychosozial formulieren, 1–2 echte Kundenzitate als Beleg suchen
   (Aufgaben B2).

**Das braucht Folie 07** (Aufgaben B2): Knoten je Ebene (je höchstens 3 Wörter; laut Präsentation passen höchstens
3–4 je Ebene), Verbindungen
mit Anzahl der Nennungen über dem Cut-off, 2 Nutzen-Kästen (je 1 Zeile), Stichprobe, Titel. Leitern und Matrix
kommen ins Backup B5.

**Typische Fehler:** andere Wörter als auf Folie 06 · unter 3 Stufen abbrechen · den Vorschlag aus P10 ungeprüft
übernehmen · „Gesundheit“ als Produktversprechen lesen (es ist ein Wert der Befragten) · nicht zugelassene
Nutzenaussagen verwenden oder Hydration überzeichnen (Aufgaben B2; Recherche-Dossier 3.7). Beim Nutzen „gutes
Gewissen“ an das Spannungsfeld denken: 160 mg Koffein und die Kritik von Verbraucherschützern [81].

### B3 Analogien und Live-Umfrage → Markentonalität (Folien 08 + 08b · 70 s + 50 s · an Elias Mi 21.10.)

**Worum es geht.** Analogien sind ein **projektives Verfahren**: Statt direkt nach Eigenschaften zu fragen, beschreibt
man die Marke als Mensch oder Tier. Markentonalität umfasst nach Esch Persönlichkeit, Beziehung und Erlebnisse. Aaker
ordnet die Markenpersönlichkeit in fünf Dimensionen: Aufrichtigkeit, Spannung, Kompetenz, Kultiviertheit, Robustheit
(methoden.md §4).

**Wichtig:** Die Analogie beschreibt die **Marke** als Person, nicht die Zielgruppe. Marco ist hier nur der Kontrast:
Die echte Kundschaft ist meist 25–40, oft im Schichtdienst [7, 24].

**So gehst du vor:**
1. **Erst ohne KI:** Jede Person der Gruppe schreibt HOLY als Mensch und als Tier mit 3 Gründen auf (Aufgaben B3).
   Die Gruppe kennt die Hypothese aus dem Recherche-Dossier und die Beispielfolien schon; ihre Antworten sind also
   nicht unvoreingenommen. Kennzeichne sie im Backup als „Hypothese vorher bekannt“. Aufgaben B3 nennt außerdem
   optional 3–5 Personen aus dem Umfeld (2 Minuten, nichts vorgeben). Vorschlag: Mach das, denn diese Personen kennen
   die Folien nicht. Bitte kurz um Einverständnis und notiere ohne Namen (z. B. „Umfeld 1, 24 J.“). Dazu kommt die
   Tierfrage in den echten Interviews.
2. P11 aus Anhang 1 für HOLY und 2 Wettbewerber (Vorschlag: Red Bull und waterdrop, wie auf den Folien). Ergebnis
   als „KI-gestützt (Tool)“ kennzeichnen, denn P11 simuliert keine Befragten.
3. Vergleichen: Gruppe ↔ KI ↔ Umfeld ↔ echte Interviews ↔ Hypothese (Anhang 2). Unterschiede ins Backup.
4. Tonalität ableiten: 4–5 Persönlichkeitsmerkmale, Markenemotionen, Beziehung zu den Kund:innen (Aufgaben B3).
5. Aaker-Profil: Jede Person bewertet HOLY und die 2 Wettbewerber einzeln auf einer Skala von 1 bis 5 (Aufgaben B3).
   Vorschlag: Den Bogen füllen nur Menschen aus (Gruppe, ggf. Umfeld). Die Aaker-Zuordnung aus P11 bleibt getrennt
   und wird als „KI-gestützt (Tool)“ gekennzeichnet, auch wenn die Notiz auf Folie 08b etwas anderes nahelegt.
   Mittelwert in Sheets. In der Fußzeile von 08b die tatsächliche Zahl der Bewertenden eintragen.

**Das brauchen Folie 08 und 08b** (Aufgaben B3): HOLY als Tier mit 3 Gründen und als Mensch mit 4 Merkmalen (z. B.
Alter, Beruf, Stil, auf der Party); 2 Wettbewerber mit Tier, 2 Stichworten und dem Menschen in einer Zeile;
Aaker-Profil mit 5 Dimensionen für HOLY und die 2 Wettbewerber; 4–5 Merkmale, jedes mit seiner Aaker-Dimension;
3 Emotionen; Beziehung; für die Umfrage die Tier-Optionen, „unsere Antwort“ und den Link; zwei Titel als
Kernaussage. Laut Präsentation außerdem ein kurzer Satz zu den Markenerlebnissen (Folie 08b) und das tatsächliche n
in beiden Fußzeilen. Wo die Präsentation weniger Platz hat als die Aufgaben verlangen (z. B. 3 statt 4 Zeilen für
den Menschen), gilt die Präsentation (Abschnitt 10, Punkt 13).

**Live-Umfrage** (Aufgaben B3): In Mentimeter oder Particify „Wenn HOLY ein Tier wäre – welches?“ mit 4–5 Tieren
anlegen (euer Ergebnis plus plausible andere). Unter den Optionen müssen euer Analyse-Tier und der Adler (Selbstbild
der Marke) sein, darauf baut der Sprechtext auf. Link und Ergebnis-Link weitergeben, die Teilnehmergrenze des
Gratis-Tarifs prüfen, den QR-Code mit mehreren Handys testen. Plan B: Handzeichen im Zählmodus der Folie. Vor dem
Vortrag auf Folie 08 zweimal „Zurücksetzen“ klicken, sonst zählen Beispiel- und Probestimmen mit (Präsentation,
Folie 08). Die Umfrage ist ein **Stimmungsbild, keine Erhebung**: So
steht es auf der Folie und so sagst du es.

**Typische Fehler:** Tiere oder Adjektive vorgeben · Persona und Markenpersönlichkeit verwechseln · das Beispiel auf
der Folie für ein Ergebnis halten · den Claim „Drink soft. Go hard.“ verwenden: Er ist nicht belegt
(Recherche-Dossier 6.5).

### B4 Prüfen, Sprechtext, Backup (Fr 23.10.)

- Unsichere Angaben prüfen: Regalpreise von HOLY, Red Bull und Monster sowie die Rossmann-Listung, mit datiertem Foto
  aus dem Laden (Aufgaben B4). Vorschlag: keine Personen aufs Foto.
- Sprechtext für 06–08b, je Folie zwei Rückfragen samt Antwort, z. B. „Warum KI-simulierte Befragte?“ (Antwort:
  prompts.md, Teil C).
- Backup B4 (alle Bewertungen) und B5 (Leitern, Matrix) liefern. Die Sprechernotizen der Webseite sind öffentlich
  lesbar: nichts Personenbezogenes hineinschreiben.

---

## 4. Wofür die Persona-Daten in deinen Methoden gut sind

| Methode | So hilft die Persona |
|---|---|
| Befragte | Die 5 Profile streuen so, wie die Daten es nahelegen: Männer in der Mehrheit, aber 2 Frauen; Alter 22–39; Viel- und Wenigtrinker:innen; Kund:innen und Nicht-Kund:innen. |
| Repertory Grid | Mehrere Profile kennen ein Element aus eigener Erfahrung: T1 und T3 Monster, T5 Red Bull, T4 Cola Zero. Das macht die Triaden glaubwürdiger. |
| Laddering | Pains, Gains und Werte der Persona sind Kandidaten für die oberen Ebenen der Leiter. Sie dienen aber nur dem Abgleich danach (Anhang 2), nie als Frage. |
| Analogien | Die Persona liefert den Gegenpol zur Markenpersönlichkeit: Wie die Marke auftritt und wer sie tatsächlich kauft, kann auseinandergehen. |
| Echte Interviews | Die Persona bestimmt, wen du fragst (Abschnitt 5). |

---

## 5. Drei bis fünf echte Interviews führen

**Wen du fragst** (Vorschlag, abgeleitet aus dem Steckbrief): mindestens 2 Frauen, Alter etwa 20–40, **alle ab 18**,
Viel- und Wenigtrinker:innen, HOLY-Kund:innen und Nicht-Kund:innen. Weil die Kernkundschaft oft im Schichtdienst
arbeitet [7, 24], nimm wenn möglich mindestens eine berufstätige Person dazu, nicht nur Kommiliton:innen.

**Auswahlfragen** (Vorschlag): (1) Bist du 18 oder älter? (2) Wie oft trinkst du Energy Drinks? (3) Schicht, Büro
oder Studium? (4) Welche dieser Marken kennst du: Red Bull, Monster, HOLY, Gönrgy, waterdrop, Coca-Cola Zero? Erst am
Ende: (5) Hast du HOLY schon gekauft? So verrätst du vor den Triaden nicht, um welche Marke es geht.

**Bekanntheit** (Methodenregel aus dem Modellwissen): Im Repertory Grid müssen die Befragten die Marken kennen. Führe
das Interview nur, wenn die Person HOLY und mindestens 3 der 5 Wettbewerber kennt. Eine Triade mit unbekannter Marke
überspringst du und notierst das. Erkläre keine Marke, das wäre eine Vorgabe.

**Ablauf, ca. 12–15 Minuten** (Vorschlag; geplant waren ca. 10 Minuten, Aufgaben Kopf Bündel B):

| Min. | Schritt | Wortlaut |
|---|---|---|
| 0–1 | Einwilligung (unten), Auswahlfragen 1–4 | siehe oben |
| 1–2 | Übungstriade mit drei Automarken | wie unten; nicht werten |
| 2–8 | Triaden mit Namenskarten: zuerst die 5 mit HOLY (1, 2, 4, 6, 8), dann 3, 5, 7 | „In welcher wichtigen Hinsicht sind sich zwei dieser Marken ähnlich und unterscheiden sich von der dritten?“ Nachfrage: „Und wie würdest du die dritte beschreiben?“ Pole wörtlich notieren |
| 8–12 | Laddering zu 2 Konstrukten, die die Person selbst wichtig findet | „Warum ist dir das wichtig?“ bis zum Wert |
| 12–14 | HOLY als Tier und als Mensch, je 3 Gründe | offen fragen, nichts vorschlagen |
| 14–15 | Auswahlfrage 5, Dank | – |

Wird die Zeit knapp, mach nur die 5 Triaden mit HOLY. Fällt einer Person zu einer Triade nichts ein, geh zur nächsten
und notiere das; gib in der Auswertung die Zahl der gültigen Triaden je Person an. Biete nie Konstrukte aus dem
Recherche-Dossier an, auch wenn es sie in 10.3 als „Rückfallebene“ nennt: Es gelten die Aufgaben („nie vorgeben“).
Die Frageformulierungen sind wortgleich mit P7 und P9, damit du echte und simulierte Antworten vergleichen kannst
(Aufgaben, Kopf Bündel B). Vorschlag: Für die Laddering-Frage die Du-Form wie in methoden.md und prompts.md.

**Warum das Laddering hier bei den eigenen Konstrukten startet:** Die Interviews sind am So 18.10., deine Attribute
stehen aber erst am Mo 19.10. fest. Klassisch startet Laddering ohnehin bei Unterscheidungen, die die Person selbst
genannt hat. Das ist ein Hinweis aus dem Modellwissen ohne geprüfte Fundstelle (nachzulesen bei Reynolds & Gutman
1988; mit der Vorlesung abgleichen). Begründe die Abweichung von methoden.md §3 im Backup.

**Einwilligung und Datenschutz**
- Einwilligung **vor** dem Interview einholen (Aufgaben, Kopf Bündel B). Vorschlag für einen Text zum Vorlesen
  (Entwurf aus dem Modellwissen, von der Gruppe zu prüfen):

  > „Ich mache für eine Studienarbeit an der Hochschule Kaiserslautern ein Kurzinterview zu Getränkemarken, etwa
  > 15 Minuten. Mitmachen ist freiwillig. Du kannst jederzeit abbrechen und deine Zustimmung auch später widerrufen,
  > dann lösche ich deine Notizen. Ich notiere nichts mit deinem Namen. Ich nehme nur auf, wenn du ausdrücklich
  > zustimmst; eine Aufnahme würde ich mit einem KI-Tool abschreiben lassen. Die anonymen Notizen werte ich auch mit
  > KI-Tools aus. Anonyme Ergebnisse und kurze Zitate erscheinen in einer Präsentation, die öffentlich im Internet
  > steht. Notizen und Aufnahme lösche ich bis [Datum]; Fragen an Lukas Welker, [Kontakt]. Bist du einverstanden?“

- Löschtermin vor So 18.10. festlegen (Abschnitt 10, Punkt 11). Ohne ausdrückliches Ja keine Aufnahme.
- Die Zustimmung mit Datum im Gruppenordner vermerken, nicht im Repository.
- KI-Richtlinie der HSKL, Nr. 6: personenbezogene Daten nur mit ausdrücklicher Genehmigung der Betroffenen in
  KI-Tools außerhalb der Hochschule bzw. der Rechenzentrumsallianz Rheinland-Pfalz (Vorlage-KI, Datenschutz). Deshalb: Einwilligung **und** anonymisieren
  („Befragte 1, 22 J., Studentin“). Interviews nur mit ausdrücklicher Einwilligung per KI transkribieren.
- Repository und Webseite sind öffentlich. Notizen und Aufnahmen gehören nur in den Gruppenordner.

**Echt und KI-simuliert vergleichen** (Vorlage für Sheets und Backup):

| Befund | KI (T1–T5) | echt | Kundenstimmen | im Persona-Block angelegt? | Lesart |
|---|---|---|---|---|---|
| Konstrukt „…“ | Nennungen | Nennungen | ja/nein | ja/nein (Anhang 2) | in beiden → tragfähig; nur KI und im Block angelegt → kein Ergebnis |
| Leiter „…“ | Anzahl | Anzahl | Zitat | ja/nein | nur KI → Verdacht auf Klischee |
| Tier / Mensch | … | … | Tonalität | – | nur echt → Lücke der Simulation |

---

## 6. Kundenstimmen als dritte Quelle

Bündel B soll mit 20–30 echten Bewertungen und Kommentaren abgleichen (Aufgaben, Kopf Bündel B). Ausgewertet sind sie
noch nicht (Steckbrief, Abschnitt 6). Ein gemeinsames Sheet reicht für A und B.

- **Wo** (Datenerhebung, Bewertungen): REVIEWS.io (das Bewertungssystem des Shops), Trustpilot-Profil
  **holyenergy.de**, Kommentare unter unabhängigen YouTube-Videos. Instagram- und TikTok-Kommentare erhebt laut
  Datenerhebung Elias für Folie 09; stimm dich mit ihm ab, damit ihr nichts doppelt macht.
- **Wie:** z. B. 20 Bewertungen der letzten 6 Monate plus 10 kritische (1–2 Sterne); die Auswahlregel notieren. Eine
  Zeile je Bewertung, Codes nach dem Codebuch K1–K8 (Datenerhebung), Häufigkeiten mit `ZÄHLENWENN`.
- **Wofür:** K3 Motiv und K4 Kritik → Kommen deine Konstrukte auch bei echten Kund:innen vor? · K1 Anlass + K3 →
  Leitern in Kundensprache, 1–2 Belegzitate (anonym, mit Portal und Datum) · K7 Tonalität → Abgleich mit deiner
  Tonalität.
- **Wer und wann** (Vorschlag): Ist bis Sa 17.10. nichts anderes abgesprochen, codierst du K1, K3, K4 und K7 bis
  So 18.10. selbst, weil deine Auswahlregel am Mo 19.10. die Codes K3 und K4 braucht.
- **Typisch** laut Recherche-Dossier 3.5 [88, 89]: Lob für Geschmack, Sorten, zuckerfrei, Service; Kritik am Preis ohne
  Rabattcode, an Süße und am Shaker.
- **Grenzen:** Bewertende wählen sich selbst aus, HOLY lädt nach dem Kauf zur Bewertung ein, Alter und Geschlecht sind
  meist unbekannt. Keine Namen übernehmen und vor jedem KI-Upload entfernen.

---

## 7. Was die Persona-Daten nicht können

- **Kategorie ist nicht HOLY.** Die Statistiken beschreiben Energy-Drink-Konsument:innen. Getränkepulver erfasst keine
  Statistik, und HOLY veröffentlicht keine Kundendaten.
- **Statista-Zahlen gehören nicht auf die Folien 06–08b.** „41 % Gaming-Hobby“ belegt weder ein Konstrukt noch eine
  Leiter. Statista-Werte nur so verwenden, wie sie im Steckbrief oder in persona-daten.md stehen (Lizenz).
- **Die Persona ist annahmegestützt.** Die Statista-Werte sind noch nicht gegengelesen, die Gründerzitate noch nicht
  im Audio geprüft. Das Persona-Zitat ist erfunden und nie ein Beleg.
- **Simulierte Befragte sind keine Daten.** Die 5 Profile entstehen in einer Antwort desselben Tools und sind keine
  unabhängigen Beobachtungen; bekannte Klischees werden verstärkt, Nischenwissen fehlt (prompts.md, Teil C). Formuliere ehrlich: „Die KI-Simulation
  liefert Hypothesen; ob sie tragen, zeigen die echten Interviews und Kundenstimmen.“ Schreib nie „Befragte sagen“
  ohne „KI-simuliert“.

---

## 8. Deine KI-Nutzung belegen

- **Liste:** Du führst deine eigene Liste nach `ki-nachweis/vorlage-ki-nutzung.md` und trägst **nicht** selbst in
  `ki-nachweis.md` ein; Yannick überträgt. Nummeriere 01, 02 …; Yannick ergänzt beim Übertragen deine Initialen.
- **Was:** jede KI-Nutzung, auch Rechtschreibung, Übersetzung und Transkription. Im Zweifel eintragen.
- **Wie:** sofort und alle Prompts wörtlich, mit Tippfehlern. Nur P0 schreibst du nicht ab, sondern vermerkst ihn bei
  „Prompt-Vorlage“ (z. B. „P0, dann Befragten-Block, dann P7-Abwandlung aus dem Dossier für Lukas“). Befragten-Block
  und Abwandlung kommen wörtlich in die Liste; sehr lange Prompts mit den ersten zwei Zeilen plus „…“. Fülle auch
  „Woher stammt der Inhalt?“ aus. Das wichtigste Feld ist „Prüfung“: Was hast du kontrolliert, übernommen,
  verworfen? „Prüfung durch die Gruppe“ lässt du offen.
- **Zahlen aus einer KI** nur, wenn du die Originalquelle geöffnet hast. Ins Quellenverzeichnis kommt die
  Originalquelle, nie das Tool. Was P11 über Red Bull und waterdrop sagt, ist Modellwissen.
- **Chatverläufe:** als PDF in den Gruppenordner, Unterordner „KI-Chats“, Dateiname `JJJJ-MM-TT_LW_Nr_Tool.pdf`. Ein
  Teilen-Link allein reicht nicht. **Nie ins Repository.**
- **Urheberrecht:** keine kompletten Statista- oder VuMA-Berichte, Buchkapitel oder Vorlesungsfolien in externe
  KI-Tools; der Persona-Block ist eine eigene Zusammenfassung. Wo es geht, das Training mit deinen Chats ausschalten.
- **Fristen:** Di 20.10. Zwischenstand mitbringen · **Fr 23.10. abends** an Yannick · bis So 25.10. Nachträge ·
  mit der Einzelreflexion ein Nachtrag (Termin folgt). Vor dem Abschicken das Beispiel Nr. 00 löschen und die
  Erklärung am Ende ausfüllen (Vorlage-KI).

---

## 9. Termine und Übergaben

| Was (Arbeitsplan, Übergaben) | Von → an | Bis | Was du konkret lieferst |
|---|---|---|---|
| Wettbewerbsset W1–W5 | alle | war Mi 14.10. | noch nicht beschlossen: vor P7 klären (Abschnitt 10) |
| Persona-Kurzfassung | A → B | Fr 16.10. | liegt vor (dieses Dossier) |
| 3–5 Markenattribute | B → alle | **Mo 19.10.** | Attribute wortgleich für 06 und 07, Auswahlregel, Stichprobe |
| Markentonalität | B → C | **Mi 21.10.** | Merkmale, Emotionen, Beziehung, Tier und Mensch |
| Ergebnisse je Feld des Markensteuerrads | alle → Yannick | Do 22.10. vor dem Termin | je Feld (Attribute, Nutzen, Tonalität) 3–5 Stichworte mit Herkunftskürzel (RG, LA, AN); Yannick wählt daraus 2–4 für Folie 10 (Aufgaben C2) |
| Eigene Folien fertig | alle → C | Fr 23.10. | Inhalte der Folien 06–08b, Sprechtext, Rückfragen, B4/B5 |
| Persönliche KI-Liste | alle → Yannick | Di 20.10. / Fr 23.10. | Zwischenstand / Abgabe (Nachträge bis So 25.10.) |

**Tagesplan B** (Arbeitsplan, angepasst): Sa 17.10. P7 · So 18.10. echte Interviews, Kundenstimmen · Mo 19.10.
Konstrukte zusammenführen, P8, Sheets → Attribute an alle · Di 20.10. Laddering (P9), HVM (P10), Zwischenstand der
Gruppe (dort Mensch/Tier ohne KI und Aaker-Bogen) · Mi 21.10. Analogien (P11) → Tonalität an Elias · Do 22.10.
Synthese (2 Std.) · Fr 23.10. Folien 06–08b final, Backup B4/B5 fertig (Aufgaben B4) · Sa 24.10. Puffer, laut
Arbeitsplan Rohdaten ins Backup · So 25.10. Generalprobe ·
Mo 26.10. Präsentation. Am Wochenende ist die Einteilung flexibel, die Übergaben nicht.

Folie 10 (Markensteuerrad) übernimmt deine Stichworte, und die Folien 09b und 11 bauen auf der Tonalität auf. Weichen
deine Ergebnisse von den Beispieldaten ab, sag es Yannick und Elias sofort.

---

## 10. Noch offen: was die Gruppe klären muss

Vorschlag zum Verfahren: Beschließt die Gruppe bis zur Frist nichts anderes, gilt der Vorschlag; halte das im
Gruppenchat fest. Für die Punkte 1 und 2 ist die Frist Sa 17.10. vormittags, danach startest du P7 mit dem Vorschlag.

| # | Punkt | Vorschlag |
|---|---|---|
| 1 | **Wettbewerbsset und Rahmen** (Energy- oder Softdrink-Marke) sind nirgends als beschlossen dokumentiert. | Vorschlag Recherche-Dossier 5.3 unverändert; bis Sa 17.10. vor P7 im Gruppenchat bestätigen lassen und festhalten |
| 2 | **Idealmarke:** „meine Idealmarke“ (methoden.md, prompts.md) gegen „mein idealer Drink für jeden Tag“ (Aufgaben, Recherche-Dossier 5.3) | Wortlaut aus Dossier 5.3, überall gleich; bei einem reinen Energy-Rahmen ändern sich W5 und I zusammen |
| 3 | **Wer baut die Daten in die Web-Präsentation ein?** Laut Aufgaben „legt die Gruppe fest“. | du lieferst Inhalte, Sprechtext und Rückfragen; wer einbaut, beim Zwischenstand Di 20.10. klären |
| 4 | Laddering-Frage: Du-Form (methoden.md, prompts.md) gegen Sie-Form (Aufgaben B2) | Du-Form |
| 5 | Folie 06: „gemittelt“ aus KI und echt gegen „getrennt zählen“ (Aufgaben) | getrennt zählen; auf der Folie die Summe, die Aufteilung in Fußzeile und Backup |
| 6 | P11 simuliert keine Befragten, die Fußzeile von 08 nennt aber „5 KI-Personas (Prompt P11)“. | P11 einmal laufen lassen, als „KI-gestützt (Tool)“ kennzeichnen, Fußzeile anpassen |
| 7 | Analogie-Wettbewerber: W1 + W2 (methoden.md, P11) gegen Red Bull + waterdrop (Folien 08/08b) | Red Bull und waterdrop wie auf den Folien, auch im Aaker-Bogen |
| 8 | Auswahlschwelle: ≥ 1 Skalenpunkt (Aufgaben) gegen ≥ 1,5 im Backup B4 der Präsentation | vor dem Rechnen festlegen und im Backup eintragen |
| 9 | Anzahl Attribute: 3–5 (Aufgaben) gegen 3–4 Knoten auf Folie 07 und 2–4 Stichworte auf Folie 10 | 3–4 Attribute, der Rest ins Backup |
| 10 | Wer wertet die Kundenstimmen aus, und wer erhebt Instagram (B laut Aufgaben, C laut Datenerhebung)? | ein gemeinsames Sheet; Instagram mit Elias abstimmen |
| 11 | Wo liegen Einwilligungen und Interviewnotizen, und wann werden sie gelöscht? | im Gruppenordner; Löschtermin vor So 18.10. festlegen |
| 12 | Bewerten echte Befragte die Konstrukte (P8) mit? In 10–15 Minuten ist dafür keine Zeit; Präsentation und Aufgaben gehen bisher von gemeinsamen Daten aus („5 KI-simuliert + 3 echt“). | nein: Bewertungen nur von den 5 simulierten Befragten, so in Fußzeile und Backup B4; Frist Mo 19.10. früh |
| 13 | Folie 08/08b: Die Aufgaben verlangen mehr, als die Präsentation fasst (Mensch mit 4 Merkmalen gegen 3 Zeilen; Wettbewerber-Mensch ohne eigenes Feld). | die Präsentation gilt; den Aufgaben-Text anpassen |

---

## 11. Checkliste

- [ ] Wettbewerbsset, Rahmen und Idealmarke mit der Gruppe bestätigt
- [ ] Interviewpartner:innen für So 18.10. bestätigt (mind. 2 Frauen, ab 18, mind. eine berufstätige Person)
- [ ] Jeder Chat: P0 → Befragten-Block → Prompt aus Anhang 1 (P11 ohne Befragten-Block); Chat als PDF gesichert, KI-Liste ergänzt
- [ ] P7 gelaufen; Konstrukte aus KI und Interviews zusammengeführt, Nennungen selbst gezählt
- [ ] 3–5 echte Interviews mit Einwilligung und anonymen Notizen
- [ ] „Echt“ und „KI-simuliert“ getrennt gezählt, Spalte „im Persona-Block angelegt“ ausgefüllt
- [ ] Auswahlregel notiert, P8 in Sheets ausgewertet, Attribute Mo 19.10. an alle
- [ ] Leitern codiert, Matrix selbst ausgezählt, HVM und zwei Nutzen formuliert
- [ ] 20–30 Kundenstimmen codiert, 1–2 anonyme Belegzitate mit Portal und Datum
- [ ] Analogien erst ohne KI, dann P11; Aaker-Bogen gemittelt; Tonalität Mi 21.10. an Elias
- [ ] Anhang 2 erst nach der Auswertung gelesen, Unterschiede im Backup
- [ ] Live-Umfrage angelegt (mit Analyse-Tier und Adler), mit mehreren Handys getestet, Plan B Handzeichen geklärt
- [ ] Folien 06–08b: Titel, tatsächliches n, Kennzeichnung „KI-simuliert (Tool)“ bzw. „KI-gestützt (Tool)“, Kennzeichen „Beispieldaten“ entfernt
- [ ] Sprechtext in der Sollzeit, je Folie 2 Rückfragen, Backup B4/B5, Regalpreise fotografiert
- [ ] KI-Liste: Zwischenstand Di 20.10., Abgabe Fr 23.10. abends

---

## Anhang 1: Kopierfertige Prompts

Reihenfolge in jedem Chat: Nachricht 1 = P0, Nachricht 2 = Befragten-Block (Abschnitt 2), Nachricht 3 = Prompt von
hier. Ausnahme: P11 ohne Befragten-Block. Die Texte sind **Abwandlungen** der Prompts aus prompts.md; was geändert
ist, steht über jedem Prompt. Trag sie wörtlich in die KI-Liste ein und nenne die Abwandlung im Feld
„Prompt-Vorlage“. Ändert die Gruppe Wettbewerber oder Idealmarke, änderst du nur diese Wörter.

**P7, Chat A, Sa 17.10.** Abwandlung: Platzhalter eingesetzt; „Variiere Alter, Geschlecht und Nutzungsintensität der
Kategorie“ ersetzt durch den Verweis auf T1–T5; Idealmarke „mein idealer Drink für jeden Tag“ statt „meine
Idealmarke“ (Abschnitt 10, Punkt 2).

```text
Simuliere 5 unterschiedliche Befragte aus der Zielgruppe von HOLY. Grundlage ist diese Persona:
<<PERSONA-BLOCK aus Abschnitt 1 hier einfügen>>
Verwende als Befragte genau T1 bis T5 aus meiner vorigen Nachricht; stelle die 5 Befragten zuerst in je einer Zeile vor.

Elemente: M = HOLY, W1 = Red Bull, W2 = Monster, W3 = Gönrgy, W4 = waterdrop, W5 = Coca-Cola Zero, I = "mein idealer Drink für jeden Tag".

Führe mit jeder befragten Person diese 8 Triadenvergleiche durch:
1) M–W1–W2  2) M–W3–I  3) W1–W4–I  4) M–W5–W2  5) W2–W3–W4  6) M–W4–I  7) W1–W3–W5  8) M–W5–I

Frage jeweils: "In welcher wichtigen Hinsicht sind sich zwei dieser Marken ähnlich und unterscheiden sich von der dritten?"
Notiere pro Triade das bipolare Konstrukt (Pol – Gegenpol) im Wortlaut der befragten Person.
Antworte so, wie echte Konsument:innen sprechen würden, nicht in Marketing-Fachsprache.

Zum Schluss: Liste alle Konstrukte, fasse inhaltlich gleiche zusammen und gib an, wie oft jedes genannt wurde.
```

**P8, Chat A, Mo 19.10.** Unverändert aus prompts.md; du setzt nur deine 8–12 zusammengeführten Konstrukte ein, je
„Pol 1 – Pol 7“. Die Zählung der KI aus P7 ersetzt deine eigene Zählung nicht.

**P9, Chat B, Di 20.10.** Abwandlung: `[PERSONA]` ersetzt durch die jeweilige Person T1–T5; Prüffrage vor jeder Leiter
ergänzt. Zuerst für T1:

```text
Führe ein Laddering-Interview nach der Means-End-Chain-Theorie (Gutman; Reynolds & Gutman) mit T1 aus meiner vorigen Nachricht.

Startpunkte sind diese Eigenschaften der Marke HOLY: <<ATTRIBUT 1>>, <<ATTRIBUT 2>>, <<ATTRIBUT 3>>, <<ATTRIBUT 4>>.

Frage zuerst, ob die Eigenschaft der Person beim Kauf wichtig ist. Wenn nicht, keine Leiter, sondern kurz begründen.
Frage sonst pro Eigenschaft wiederholt "Warum ist dir das wichtig?", bis ein persönlicher Wert erreicht ist (mindestens 3 Stufen). Gib das Interview als Dialog wieder.
Fasse danach jede Leiter als Kette zusammen:
Attribut → funktionale Konsequenz → psychosoziale Konsequenz → Wert
```

Danach im selben Chat viermal, für T2, T3, T4 und T5:

```text
Führe jetzt dasselbe Interview mit T2 aus der Liste T1 bis T5 oben durch: gleiche Startpunkte, gleiche Regeln.
```

**P11, Chat C, Mi 21.10.** Nur P0, dann dieser Text. Abwandlung: `[W1]` und `[W2]` ersetzt durch Red Bull (W1) und
waterdrop (W4) (Abschnitt 10, Punkt 7).

```text
Stell dir vor, die Marke HOLY wäre ein Mensch. Beschreibe: Alter, Geschlecht, Beruf, Wohnort, Kleidungsstil, Hobbys, wie die Person spricht, welches Auto sie fährt, wie sie sich auf einer Party verhält und welche Beziehung sie zu ihren Kund:innen hat (z. B. Freund, Mentor, Entertainer, Dienstleister).
Stell dir dann vor, HOLY wäre ein Tier: Welches und warum (3 Gründe)?

Mache dasselbe für Red Bull und waterdrop zum Vergleich.

Leite anschließend für HOLY ab:
- 4–5 Persönlichkeitsmerkmale
- die dominanten Markenemotionen
- die Zuordnung zu den Dimensionen der Brand Personality Scale nach Aaker (Aufrichtigkeit, Spannung, Kompetenz, Kultiviertheit, Robustheit)
```

---

## Anhang 2: Erst nach der Auswertung lesen

Das sind Hypothesen aus dem Recherche-Dossier, keine Ergebnisse. Öffne diesen Anhang erst, wenn deine Konstrukte,
Leitern und Analogien codiert sind. Frag dann: Was kam spontan, was nie, was ist neu?

**B1 – Konstrukte** (Recherche-Dossier 3.6): zuckerhaltig – zuckerfrei · künstlich gesüßt – natürlich · trinkfertig –
selbst anrühren · kurzer Kick – lang anhaltend · stark aufputschend – leicht · teuer – günstig pro Portion · wenige
Klassiker – ständig neue Sorten · Konzernmarke – Community-Marke · seriös – frech · Einweg – verpackungsarm · überall
im Handel – vor allem online · Sport – Alltag · Gaming-Szene – Mainstream. Die Konstrukte auf der jetzigen Folie 06
sind genau solche Hypothesen mit erfundenen Zahlen.

**Im Persona-Block angelegt** (für die Spalte in Abschnitt 5; Zuordnung als Vorschlag): zuckerhaltig – zuckerfrei
(„ohne Zucker“) · trinkfertig – selbst anrühren („HOLY-Pulver“, „Monster aus der Dose“) · teuer – günstig pro Portion
(„0,80 € pro Portion“) · überall im Handel – vor allem online („bestellt er online“) · seriös – frech („mag den
Humor“) · Konzernmarke – Community-Marke („Squad“) · Gaming-Szene – Mainstream („zockt online“, „kein Schüler-Gamer“);
schwächer Sport – Alltag („geht joggen“).

**B2 – Ketten** (Recherche-Dossier 3.7; die Attribute sind belegt, die Ketten Hypothesen):

| Attribut | funktional | psychosozial | Wert |
|---|---|---|---|
| zuckerfrei, ≈ 19 kcal | Softdrink ohne Zucker und Kalorien | gönnen ohne schlechtes Gewissen | Gesundheit, Selbstbestimmung |
| 160 mg Koffein | wach im Dienst, beim Lernen, Zocken | mithalten, Leistung zeigen | Erfolg, Anerkennung |
| Pulver, 50 Portionen, 0,80 € | günstig, nichts schleppen | „smart“ einkaufen | Unabhängigkeit, Verantwortung |
| 31+ Sorten, Limited Drops | Abwechslung, Sammeln, Mitreden | Teil einer Szene sein | Zugehörigkeit, Spaß |
| Syrup, 5 Stufen | Geschmack selbst dosieren | Kontrolle über „meinen“ Drink | Individualität |
| Hydration | Durst stillen nach dem Sport | sich fit fühlen | Gesundheit |

Aus der Persona (Annahmen): Müdigkeit → „wach bleiben“, Zucker → „ohne schlechtes Gewissen“, Geldsorgen → „günstig“.
Kandidaten für die Wert-Ebene: „erfolgreich sein“ ist Energy-Drink-Konsument:innen wichtiger als dem Durchschnitt
(27 %, Ø 22 %), „Spaß haben“ ebenso (38 %, Ø 36 %; Statista CI 2025). Taucht HOLYs Versprechen „Geiler Geschmack mit
gutem Gewissen“ (Recherche-Dossier 6.5) spontan auf?

**B3 – Tonalität** (Recherche-Dossier 6.7, Hypothese): Mensch = lauter, witziger Berliner WG-Gründer Ende 20, Gamer
und Festivalgänger, duzt alle · Beziehung = Kumpel und Anführer des „Squad“ · Tier = Selbstbild Adler („Raptor“),
gelebter Ton eher Waschbär oder Affe · Persönlichkeit = frech-provokant, selbstironisch, kumpelhaft-nahbar,
rebellisch, verspielt-popkulturell · bei Aaker vermutlich stark bei Spannung. Belegter Ton (Recherche-Dossier 6.2):
Du-Form, viel „geil“ in den Produkttexten [30], „Zero Zucker oder Bullsh*t.“ [1], Doppeldeutigkeit im TV-Spot [25].
Die Persönlichkeiten von Red Bull und waterdrop sind Modellwissen.

---

## Anhang 3: Dateien und Quellen

| Kurzname | Datei (im Repository) | Wozu |
|---|---|---|
| Steckbrief | `fallstudie-1-brand-persona/persona-steckbrief.md` | Persona, Belege, Befragten-Vorschlag |
| persona-daten.md | `fallstudie-1-brand-persona/persona-daten.md` | öffentliche Kennzahlen (Kategorie) |
| Datenerhebung | `fallstudie-1-brand-persona/persona-datenerhebung.md` | Codebuch K1–K8, Bewertungsportale |
| methoden.md | `fallstudie-1-brand-persona/methoden.md` | Vorlagen §2–4, Literatur |
| prompts.md | `fallstudie-1-brand-persona/prompts.md` | P0, P7–P11, Teil C (Begründung) |
| Aufgaben | `fallstudie-1-brand-persona/Fallstudie-1_Aufgaben-im-Detail.pdf` | Aufgaben B1–B4, Termine |
| Arbeitsplan | `fallstudie-1-brand-persona/arbeitsplan.md` | Übergaben, Tagesplan |
| README | `fallstudie-1-brand-persona/README.md` | Folienplan, typische Fehler |
| Recherche-Dossier | `fallstudie-1-brand-persona/recherche/holy-recherche.md` (PDF daneben) | Hypothesen, Belege, Quellen [n] in Anhang B |
| Präsentation | `fallstudie-1-brand-persona/praesentation/index.html` | Folien 06–08b, Backup B4/B5 |
| Vorlage-KI | `ki-nachweis/vorlage-ki-nutzung.md` | deine KI-Liste |

- **Statistiken (Kategorie, zitiert nach Steckbrief und persona-daten.md):** VuMA 2022 (Daten 2021) · Kantar Media TGI
  2023 · Statista Consumer Insights 2025.
- **HOLY (Recherche-Dossier, Anhang B):** [1] de.holy.com · [7] Trending Topics, 08/2024 · [24] Podcast „Digitale
  Vorreiter:innen“ #281 mit Frederick Jost, 08/2024 · [25] HORIZONT, 01/2026 · [30] Shop-Produktdaten ·
  [81] Lebensmittelklarheit, 03/2025 · [88] Trustpilot · [89] REVIEWS.io.
- **Literatur** (methoden.md): Kelly (1955) · Gutman (1982) · Reynolds & Gutman (1988) · Aaker (1997) · Esch,
  *Strategie und Technik der Markenführung*. Dazu die Vorlesungsfolien.
