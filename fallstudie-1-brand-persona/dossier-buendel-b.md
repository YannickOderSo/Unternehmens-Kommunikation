# Dossier für Lukas: Persona und Daten für Bündel B nutzen

**Fallstudie 1 · HOLY · Bündel B · Stand 16.10.2026** · erstellt von Yannick Heisler (Bündel A) mit KI-Unterstützung
(Claude Code, KI-Nachweis 48). Grundlage sind die Dateien im Repository (Fundstellen im Text). Vorschläge ohne
Fundstelle (Auswahlfragen, Interviewablauf, Einwilligungstext, Handgriffe in Sheets, „eigene Abwägung“) stammen aus
dem Modellwissen und sind von der Gruppe zu prüfen.

> **In 30 Sekunden**
>
> 1. **Die Persona „Marco, 28“ steht, ist aber ein Entwurf.** Die Gruppe muss die Richtung noch bestätigen
>    (Steckbrief:4, :17–18, :115; Arbeitsplan:98–99).
> 2. **Kopieren statt neu schreiben:** Jeder Chat beginnt mit P0, dann folgt der Befragten-Block (Abschnitt 3), dann
>    der fertige Prompt aus Anhang 1. Der Persona-Block (Abschnitt 1) steckt schon in P7. So bleiben die 5 Profile
>    gleich.
> 3. **Hypothesen aus dem Recherche-Dossier sind Prüflisten, keine Vorgaben:** nie vorgeben, nur zum Vergleich
>    (Aufgaben:343; Dossier 6.7). Dossier 10.3 nennt 3.6 als Rückfallebene. Empfehlung (eigene Abwägung): Anhang 2
>    erst nach deiner Auswertung öffnen.
> 4. **Rechnen nur in Sheets, „echt“ und „KI-simuliert“ getrennt zählen, simulierte Befragte immer als „KI-simuliert“
>    kennzeichnen** (Aufgaben:329–331, :563).
> 5. **Fristen:** Attribute an alle Mo 19.10., Tonalität an C Mi 21.10., KI-Liste: Zwischenstand Di 20.10., Abgabe
>    Fr 23.10. abends (Arbeitsplan:43–47). Das Wettbewerbsset ist nicht als beschlossen dokumentiert: vor P7 klären
>    (→ Offen 1).

> **Die nächsten 48 Stunden** (Vorschlag, eigene Abwägung; ganzer Tagesplan in Abschnitt 9)
>
> - **Heute, Fr 16.10.:** 3–5 Interviewpartner:innen für So 18.10. fest zusagen lassen: mindestens 2 Frauen, alle ab
>   18, mindestens eine berufstätige Person (Abschnitt 5). Im Gruppenchat die Punkte mit Frist aus „Noch offen“
>   stellen (1, 2, 4, 6, 7, 12, 17), jeweils mit der Standardwahl.
> - **Sa 17.10.:** Kommt bis 10 Uhr keine Antwort, gilt die Standardwahl; so festhalten. Dann Chat A mit P7
>   (Anhang 1), Chat sichern, KI-Liste ergänzen. Den Leitfaden (Abschnitt 5) einmal laut durchspielen.
> - **So 18.10.:** echte Kurzinterviews; Kundenstimmen nach K3/K4 codieren (Abschnitt 6).
> - **Mo 19.10.:** alle Konstrukte gemeinsam konsolidieren, P8, Sheets, Attribute an alle.

**So liest du dieses Dokument.** Fundstellen stehen als *Kurzname:Zeile* in Klammern, die Kurznamen erklärt
Abschnitt 11. Die Zeilennummern gelten für den Quelltext der Datei (im Editor oder auf GitHub öffnen), nicht für das
PDF. „Präsentation:Zeile“ meint den Stand auf master vom 16.10. Nach dem Zusammenführen mit dem Branch
`praesentation-account-2` verschieben sich die Zeilen; such dann im Quelltext nach der Folien-ID: `id="f06"` =
Folie 06, `id="b4"` = Backup B4 usw. „Dossier x.y“ = Abschnitt im Recherche-Dossier (`recherche/holy-recherche.md`),
nicht dieses Dokument; [n] = Quelle in dessen Anhang B. Status: ✔ gesichert, ✎ korrigiert, ~ unsicher, H Hypothese
(Dossier); D Daten, A Annahme (Steckbrief). „→ Offen n“ verweist auf den Abschnitt „Noch offen“. Alle Modellbegriffe
stammen aus der Standardliteratur: Gleiche sie mit den Vorlesungsfolien ab (Aufgaben:166).

---

## 1. Die Persona in einer Minute

Die Kurzfassung aus Steckbrief §1 (Steckbrief:24–35), Punkte 1–5 inhaltlich unverändert. Sie ist zugleich dein
**Persona-Block** (Abschnitt 2):

```text
Persona „Marco, 28“ – Kernzielgruppe von HOLY. Die Person ist fiktiv: Name, Beruf, Wohnort und Alltag sind Annahmen.
- Wer: 28, Fachkraft für Lagerlogistik im Drei-Schicht-Betrieb, Realschulabschluss + Ausbildung, mittleres
  Einkommen, wohnt mit seiner Freundin und einer Katze zur Miete in Dortmund.
- Alltag: Früh-, Spät- und Nachtschicht im Wechsel. In der Freizeit trifft er Freunde, zockt online und geht
  joggen. Er schaut viel YouTube, ist auf Instagram und TikTok und hört Podcasts.
- Kaufverhalten: Er trinkt mehrmals pro Woche Energy, vor allem vor Spät- und Nachtschichten. HOLY-Pulver bestellt
  er online in der 50er-Dose auf Vorrat (ca. 0,80 € pro Portion, Mix-&-Match-Rabatt). Vorher hat er Monster aus
  der Dose getrunken. Bevor er etwas Neues kauft, liest er Bewertungen.
- Motive: Er will wach durch die Schicht kommen: ohne Zucker, aber mit Geschmack. Er will gesünder leben, aber es
  muss schnell gehen. Er rechnet in Preis pro Portion und mag den Humor und das „Squad“-Gefühl der Marke.
- Nicht: kein Schüler-Gamer. HOLY trinkt er meist nicht beim Zocken (laut Gründer gilt das für die meisten
  Kund:innen).
```

Punkt 6 der Kurzfassung ist das **Zitat (fiktiv):** „Ohne Zucker durch die Nachtschicht – und es schmeckt.“ Punkt 7
(Variation der Befragten) steht in Abschnitt 3. Die Kurzfassung trennt Daten und Annahmen nicht. Das leistet diese
Tabelle:

| Merkmal | Was gilt | Status |
|---|---|---|
| Alter | HOLY-Kundschaft meist „zwischen 25 und 40“ (Gründer [24]); Kategorie: 20- bis 29-Jährige am stärksten überrepräsentiert (VuMA 2022, Daten 2021) | D (Gründer: Selbstauskunft [24]; VuMA: Kategorie) (Steckbrief:47) |
| Geschlecht | Männer unter Energy-Drink-Konsument:innen: 54 % (Statista Consumer Insights, kurz CI, 2025) bis 67,5 % (VuMA 2022, Daten 2021); HOLY laut Gründer etwa 2/3 [24] | D; Grund der Spanne unbelegt (Steckbrief:59–71) |
| Gaming | Hobby der Kategorie (41 %, Ø 29 %, Statista CI 2025), aber **kein Trinkanlass** bei HOLY [24] | D (Steckbrief:73–75) |
| Anlass, Preis | Schichtdienst, Ersatz für Red Bull oder Monster [24]; auch Sport [13]; online ab 0,80 € pro Portion [1] | D (Steckbrief:50) |
| Häufigkeit | 43,8 % der Energy-Drink-Konsument:innen trinken mind. zwei- bis dreimal pro Woche (Kantar TGI 2023) | D, Kategorie (Steckbrief:50) |
| Kriterien | Geschmack, kein Zucker, Wirkung, Preis | A, aus Kundenstimmen [88, 89], schwach (Steckbrief:50) |
| Pains, Gains | Müdigkeit, Zucker, Geldsorgen; Abwechslung, „Squad“ | A, aus Kundenstimmen [88, 89], Schichtalltag und Werten (Steckbrief:52) |
| „preisbewusst“ | rechnet in Preis pro Portion | A, aus HOLYs Preis- und Rabattmodell (Dossier 3.2), Statista CI nur schwach (Steckbrief:50, :81–82) |
| Name, Beruf, Wohnort, Zitat | Marco, Lagerlogistik, Dortmund | A, fiktiv (Steckbrief:13–16) |
| Mindestalter | ab 18: HOLY Energy wird im Shop nur ab 18 verkauft [12] | D (Steckbrief:84) |

Fast alle Zahlen beschreiben **Energy-Drink-Konsument:innen in Deutschland**, nicht die HOLY-Kundschaft
(Steckbrief:8–10).

---

## 2. Den Persona-Block einsetzen

- Der Block gehört **nur** an die Stelle `[PERSONA]` in P7 (prompts:118), nicht als eigene Nachricht. Der fertige P7
  in Anhang 1 zeigt die Stelle. In P9 steht statt der Persona die jeweilige Zeile T1–T5 (Anhang 1, eigene
  Abwägung). P11 hat keinen Platzhalter (→ Offen 6).
- Das Zitat fehlt im Block absichtlich, damit die KI keine fertige Formulierung übernimmt (eigene Abwägung).
  „Ohne Zucker“ steht trotzdem in den Motiven (Punkt 4).
- **Achtung, der Block prägt Konstrukte vor.** Motive, Preis, Kanal, Humor, „Squad“ und Gaming im Block entsprechen
  mehreren Hypothesen aus Dossier 3.6 (Liste in Anhang 2). Was die KI dazu sagt, kann aus dem Block stammen.
  Zwei Wege:
  - **Standard:** den vollen Block verwenden, denn Aufgaben:342 verlangt „P7 mit der Persona-Kurzfassung“. In der
    Abgleich-Tabelle (Abschnitt 5) die Spalte „im Persona-Block angelegt“ ausfüllen. Solche Konstrukte zählen nur
    als Ergebnis, wenn sie auch in echten Interviews oder Kundenstimmen (K3/K4) vorkommen. Im Backup als Grenze der
    Methode nennen.
  - **Alternative, nur nach Absprache mit Yannick** (Persona = Bündel A): gekürzter Block mit „Wer“, „Alltag“ und dem
    ersten Satz von „Kaufverhalten“, ohne Motive, Preis, Kanal, Humor, „Squad“ und „Nicht“. In der KI-Liste als
    Abwandlung von P7 festhalten.
- **Achtung:** Der Block beschreibt einen zufriedenen HOLY-Kunden, und simulierte Befragte verstärken ohnehin bekannte
  Klischees (prompts:271–272). Deshalb gehören Nicht-Kund:innen und Wenigtrinker:innen in die Stichprobe.

---

## 3. Fünf simulierte Befragte festlegen

Vorschlag aus Steckbrief §4 (Steckbrief:89–99), **du entscheidest**. Die Kürzel T1–T5 entsprechen Backup B5
(Präsentation:2930).

| # | Profil (alle fiktiv) | Warum | Darauf achten |
|---|---|---|---|
| T1 | Mann, 28, Schichtdienst Logistik, Vieltrinker, HOLY-Kunde (= Marco) | Kern-Persona | spricht leicht HOLYs Werbesprache nach; P7 verlangt Alltagssprache (prompts:128) |
| T2 | Frau, 29, Pflegefachkraft im Schichtdienst, etwa 1× pro Woche, hat HOLY im Supermarkt entdeckt | Wachstums-Persona „Lena“; Frauenanteil: HOLY laut Gründer etwa 1/3 [24], Kategorie 46 % (Statista CI 2025) (Steckbrief:49, :96, :109) | kennt den Handelspreis (≈ 1,00–1,33 € pro Portion, Dossier 3.2 ✎), nicht 0,80 € |
| T3 | Mann, 22, Student, zockt viel, trinkt Monster aus der Dose, kennt HOLY von YouTube | Generation Z („32 %“, Quelle fehlt → Offen 13) | Gaming-Klischee: kein HOLY-Trinkanlass [24] |
| T4 | Frau, 35, Bürojob, trinkt selten Energy, eher Cola Zero, achtet auf Zucker | Wenigtrinkerin; Softdrink-Richtung [25] | prüft W5; „zuckerfrei“ trennt HOLY evtl. nicht von Cola Zero (Präsentation:1034) |
| T5 | Mann, 39, Lkw-Fahrer, täglich Red Bull, preisbewusst, skeptisch gegenüber Pulver | obere Altersgrenze laut Gründer; Nicht-Kunde | kritische Stimme: Hürden wie „selbst anrühren“ ernst nehmen (Präsentation:1098) |

Erfüllt: mindestens 2 Frauen, Alter etwa 20–40, auch Büro oder Studium, Wenig- und Vieltrinker:innen
(Steckbrief:36–37).

**So bleiben die Profile in jedem Chat gleich:**

1. **Nachricht 1:** neuen Chat mit **P0** beginnen (prompts:17–29). P0 hat nur zwei Platzhalter: `[MARKE]` = HOLY,
   `[BRANCHE]` = Energy- und Hydration-Drinks (Arbeitsplan:5).
2. **Nachricht 2:** der Befragten-Block unten.
3. **Nachricht 3:** der fertige Prompt aus Anhang 1. Wettbewerber und Idealmarke sind dort schon eingesetzt
   (→ Offen 1, 2, 7). P7 lässt die KI die Befragten eigentlich selbst variieren (prompts:119); in Anhang 1 ist diese
   Zeile ersetzt, damit sich die Anweisungen nicht widersprechen.
4. Chat als PDF sichern (Abschnitt 8) und sofort in die KI-Liste: Feld „Prompt-Vorlage“ = „P0, dann Befragten-Block,
   dann P7 (Abwandlung, Dossier für Lukas, Anhang 1)“. Befragten-Block und P7 trägst du trotzdem wörtlich ein, lange
   Prompts mit den ersten zwei Zeilen plus „…“ (Vorlage-KI:73–76).
5. Kennzeichnen (Vorlage-KI:90–91): Ergebnisse simulierter Befragter (P7–P9) als „KI-simuliert (Tool), n = 5“.
   KI-Ergebnisse ohne Befragte (P11-Analogien, Vorschläge aus P10, KI-Zusammenfassungen) als „KI-gestützt (Tool)“.

```text
Verwende in diesem Chat immer genau diese 5 Befragten (alle fiktiv) und nenne sie T1 bis T5:
T1: Mann, 28, Schichtdienst Logistik, Vieltrinker, HOLY-Kunde.
T2: Frau, 29, Pflegefachkraft im Schichtdienst, trinkt etwa 1× pro Woche Energy, hat HOLY im Supermarkt entdeckt.
T3: Mann, 22, Student, zockt viel, trinkt Monster aus der Dose, kennt HOLY von YouTube.
T4: Frau, 35, Bürojob, trinkt selten Energy, eher Cola Zero, achtet auf Zucker.
T5: Mann, 39, Lkw-Fahrer, trinkt täglich Red Bull, preisbewusst, skeptisch gegenüber Pulver.
Bestätige nur kurz; die Aufgabe folgt in der nächsten Nachricht.
```

---

## 4. Methode für Methode vorgehen

Die Kette ist fest: Repertory Grid → 3–5 Markenattribute → Startpunkte fürs Laddering → Markennutzen. Die Analogien
liefern die Markentonalität, den Soll-Maßstab für Bündel C (Aufgaben:324, :450; README:45). Du füllst drei Felder
des Markensteuerrads: Attribute (RG), Nutzen (LA), Tonalität (AN) (Aufgaben:494).

**Elemente** (Vorschlag Dossier 5.3, H; **Gruppe muss bestätigen**, → Offen 1, 2):

| M | W1 | W2 | W3 | W4 | W5 | I |
|---|---|---|---|---|---|---|
| HOLY | Red Bull | Monster | Gönrgy | waterdrop | Coca-Cola Zero | „mein idealer Drink für jeden Tag“ |

Optional W6 ESN oder LevlUp (verlängert die Interviews). Ob HOLY als Energy- oder Softdrink-Marke verglichen wird,
entscheidet über W5 und die Konstrukte (Dossier 5.3, 10.2) und damit auch über den Wortlaut von I (→ Offen 2).

### B1 Repertory Grid → Markenattribute (Folie 06 · Sollzeit 90 s · an alle Mo 19.10.)

**(a) Ziel und Folie.** Im Repertory Grid (Kelly 1955) vergleichen Befragte je drei Marken (Triade): Worin ähneln sich
zwei und unterscheiden sich von der dritten? Das ergibt ein **Konstrukt** mit zwei Polen, z. B. „innovativ –
traditionell“ (methoden:104–105). Triaden: 1 M–W1–W2 · 2 M–W3–I · 3 W1–W4–I · 4 M–W5–W2 · 5 W2–W3–W4 · 6 M–W4–I ·
7 W1–W3–W5 · 8 M–W5–I (methoden:89–106).

1. **Sa 17.10.:** Chat A: P0, Befragten-Block, P7 aus Anhang 1: 5 Befragte × 8 Triaden. Chat sichern.
2. **So 18.10.:** echte Interviews (Abschnitt 5).
3. **Mo 19.10. früh:** alle Konstrukte gemeinsam konsolidieren: Dubletten zusammenfassen, Nennungen **selbst** zählen,
   in zwei Spalten (KI, echt) → 8–12 Konstrukte. **Codierregel vorher festlegen:** Konstrukte im Wortlaut der
   Befragten benennen, nicht in Begriffen aus dem Recherche-Dossier.
4. P8 im selben Chat A (Anhang 1) → CSV → Google Sheets (Skala 1–7). Die Ratings kommen nur von den 5 simulierten
   Befragten (→ Offen 4).
5. In Sheets rechnen (unten). Die Auswahlregel **vorher** festlegen, z. B. viele Nennungen, Differenzierung
   ≥ 1 Skalenpunkt, kleine Ideal-Distanz → 3–5 Attribute (Aufgaben:341–347; → Offen 8). Empfehlung (eigene
   Abwägung): Ein Attribut muss zusätzlich in echten Interviews oder Kundenstimmen (K3/K4) vorkommen (Aufgaben:343).

Abweichung vom Arbeitsplan (Sa P7 und P8, Arbeitsplan:57): P8 erst am Mo, damit auch Konstrukte aus den echten
Interviews bewertet werden (eigene Abwägung).

**Rechnen in Sheets** (Handgriffe aus dem Modellwissen; Formeln wie methoden:110–114):

- Die CSV aus dem Chat in Zelle A1 einfügen, dann *Daten → Text in Spalten aufteilen*, Trennzeichen Semikolon. P8
  liefert eine Zeile je Person und Konstrukt (prompts:140).
- *Einfügen → Pivot-Tabelle:* Zeilen = Konstrukt, Werte = M, W1 bis W5 und I, jeweils zusammengefasst als Mittelwert
  (AVERAGE). Das ergibt je Konstrukt Ø M, Ø W1 … Ø W5 und Ø I.
- Rechnen: Ø W = Mittelwert der fünf Ø W1–W5 · Differenzierung = |Ø M − Ø W| · Ideal-Distanz = |Ø M − Ø I|
  (klein = gut) · Relevanz = Nennungen. Beispiel bei Spalte A Konstrukt, B Ø M, C–G Ø W1–W5, H Ø I: in I2
  `=MITTELWERT(C2:G2)` (englisch `=AVERAGE(C2:G2)`), in J2 `=ABS(B2-I2)`, in K2 `=ABS(B2-H2)`, dann nach unten
  ziehen. Spalten an deine Tabelle anpassen.

Folie 06 braucht (Aufgaben:353–356; Präsentation:1037–1111): 6–8 `konstrukte` mit `links`/`rechts` (bis ca. 18
Zeichen), `nennungen`, `marke`, `wettbewerb` (W1), `wettbewerbMittel` (Ø W1–W5), `ideal`, `attribut` oder `hinweis`
(„Hürde“); `wettbewerber`; ein `triade`-Beispiel; Stichprobe; Titel. `nennungen` = Summe aus KI und echt; die
Aufteilung steht in B4 und in der Fußzeile, z. B. „Konstrukte: 5 KI-simuliert (Tool) + n echte Kurzinterviews;
Ratings: 5 KI-simuliert (Tool)“ (eigene Abwägung; → Offen 5). Die Fußzeile sagt bisher „eigene Erhebung
(5 KI-Personas + 3 Kurzinterviews, gemittelt)“ (Präsentation:1026): „Erhebung“ und „gemittelt“ ersetzen. Übrige
Konstrukte ins Backup B4 (→ Offen 9).

Backup B4 braucht (Aufgaben:440; Präsentation:2785–2798): `befragte`, `elemente` (Namen W1–W5), `konstrukte` mit
`werte` je Element, `triaden` und `schwellen`. **`schwellen` = deine Auswahlregel**, sonst markiert B4 andere
Attribute als Folie 06 (Beispielwerte 6 / 1,5 / 1,0: Präsentation:2813).

**(b) Wie die Persona hilft.** Mehrere Profile kennen ein Element aus eigener Erfahrung: Marco und T3 Monster (W2),
T5 Red Bull (W1), T4 Cola Zero (W5) (Steckbrief:31, :95–99). Folie 06 zeigt bis jetzt nur Beispieldaten
(Präsentation:1077): nicht als Vorlage nutzen. Abgleich mit den Hypothesen: Anhang 2, erst nach der Auswertung.

**(c) Typische Fehler:** Konstrukte aus 3.6 vorgeben (Aufgaben:343) · Konstrukte in Begriffen aus dem
Recherche-Dossier statt im Wortlaut der Befragten benennen · Mittelwerte von der KI rechnen lassen (Aufgaben:361) ·
Grid ohne Wettbewerber oder Idealmarke (README:120) · mehrpolige Gegensätze nicht aufteilen (Dossier 3.6) · Titel
vor der Auswertung festlegen (Präsentation:1034) · Streuung oder Signifikanz der KI-Werte deuten (Abschnitt 7).

### B2 Laddering → Markennutzen (Folie 07 · Sollzeit 90 s · zur Synthese Do 22.10.)

**(a) Ziel und Folie.** Laddering (Means-End-Chain, Gutman 1982; Reynolds & Gutman 1988): Von einer Eigenschaft aus
fragst du wiederholt „Warum ist dir das wichtig?“, bis ein persönlicher Wert erreicht ist. Kette: Attribut →
funktionale Konsequenz → psychosoziale Konsequenz → Wert (methoden:124–132). Die **Hierarchical Value Map (HVM)**
zeigt alle Verbindungen ab dem Cut-off.

1. Startpunkte = deine B1-Attribute, **wortgleich**.
2. **Di 20.10.:** Chat B: P0, Befragten-Block, P9 aus Anhang 1 mit T1; danach im selben Chat dieselbe Anweisung für
   T2 bis T5. P9 hat 4 Attribut-Platzhalter (prompts:152). Die Abwandlung fragt zuerst, ob die Eigenschaft der
   Person wichtig ist; wenn nicht, gibt es keine Leiter. Abbrüche zählen und in B5 nennen.
3. Leitern in die Tabelle aus methoden §3, Begriffe codieren, Codeliste festhalten.
4. Implikationsmatrix (wie oft führt A direkt zu B) in Sheets **selbst** auszählen; P10 darf nur vorschlagen.
   Cut-off z. B. ≥ 2. Das ist die vereinfachte Form mit nur direkten Verbindungen (methoden:138); eine vollständige
   Implikationsmatrix zählt auch indirekte (Präsentation:2875). Auf Rückfrage so begründen, mit Vorlesung abgleichen.
5. Echte Leitern kommen nur in die Matrix, wenn ihr Startkonstrukt laut Codeliste einem gewählten Attribut
   entspricht; sonst nur ins Backup B5. Die Aufteilung KI/echt in der Fußzeile nennen (eigene Abwägung).
6. HVM ableiten; Nutzen sachlich-funktional und psychosozial formulieren; 1–2 echte Kundenzitate als Beleg
   (Aufgaben:376–381).

Folie 07 braucht (Aufgaben:387–391; Präsentation:1203–1267): `knoten` (1–3 Wörter, höchstens 3–4 je Ebene),
`verbindungen` (`von`, `nach`, `anzahl`), `cutoff`, 2 `nutzen`-Kästen, Stichprobe, Titel. Backup B5: `leitern`
(`person`, `simuliert`, `kette`) und `codes` (Präsentation:2842–2945).

**(b) Abgleich:** Ketten aus Dossier 3.7 und die Pains, Gains und Werte der Persona stehen in Anhang 2. Erst nach dem
Codieren lesen, nie als Frage verwenden.

**(c) Typische Fehler:**

- andere Wörter als auf Folie 06
- unter 3 Stufen abbrechen
- P10-Matrix ungeprüft übernehmen
- „Gesundheit“ als Produktaussage lesen: Sie ist ein Wert der Befragten (Präsentation:1200)
- „Mitreden“ ohne Begründung einer Ebene zuordnen (Präsentation:1200)

Verwende nur zugelassene Nutzenaussagen [81] und überzeichne Hydration nicht (Aufgaben:394). 160 mg Koffein und die
Kritik von Verbraucherschützern setzen das „gute Gewissen“ unter Druck (Dossier 3.7, Spannungsfeld S1).

### B3 Analogien und Live-Umfrage → Markentonalität (Folien 08 + 08b · Sollzeit 70 s + 50 s · an C Mi 21.10.)

**(a) Ziel und Folie.** Analogien sind ein **projektives Verfahren**: Statt direkt nach Eigenschaften zu fragen,
beschreibt man die Marke als Mensch oder Tier (Dossier 6.7). Markentonalität umfasst nach Esch Persönlichkeit,
Beziehung und Erlebnisse; Aaker (1997) ordnet Markenpersönlichkeit in fünf Dimensionen: Aufrichtigkeit, Spannung,
Kompetenz, Kultiviertheit, Robustheit (methoden:160–172).

1. **Erst ohne KI:** Jede Person der Gruppe schreibt HOLY als Mensch und als Tier mit 3 Gründen auf (Aufgaben:409).
   Diese Antworten sind **nicht blind**: Die Gruppe kennt die Hypothese aus dem Recherche-Dossier und den
   Beispielfolien (Präsentation:1362, :1485). So kennzeichnen. Mehr Gewicht haben 3–5 Personen aus dem Umfeld, die
   die Folien nicht gesehen haben (2 Min., nichts vorgeben; kurz um Einverständnis bitten, ohne Namen notieren, nur
   z. B. „Umfeld 1, 24 J.“; wie in Abschnitt 5), und die offene Tierfrage in den echten Interviews (Abschnitt 5).
2. P11 aus Anhang 1 für HOLY und 2 Wettbewerber (Standard: Red Bull und waterdrop, → Offen 7). Kennzeichnen als
   „KI-gestützt (Tool)“, denn P11 simuliert keine Befragten (→ Offen 6).
3. Vergleichen: Gruppe ↔ KI ↔ Umfeld ↔ echte Interviews ↔ Dossier 6.7 (Anhang 2). Unterschiede fürs Backup; dort
   auch nennen, wer die Hypothese vorher kannte.
4. Tonalität ableiten: 4–5 Merkmale, Emotionen, Beziehung (Aufgaben:412).
5. **Aaker-Bogen** (eigene Abwägung): Es bewerten die 3 Gruppenmitglieder und ggf. Personen aus dem Umfeld, jede
   Person einzeln (Aufgaben:412), getrennt von der KI. Ein Bogen für HOLY und die 2 Wettbewerber, Skala 1–5, je
   Dimension die Erläuterungsadjektive aus den Notizen von Folie 08b (Präsentation:1531; Übersetzung aus dem
   Modellwissen, mit Vorlesung abgleichen): Aufrichtigkeit – bodenständig, ehrlich, gesund, fröhlich · Spannung –
   gewagt, temperamentvoll, fantasievoll, modern · Kompetenz – zuverlässig, intelligent, erfolgreich · Kultiviertheit
   – vornehm, charmant · Robustheit – naturverbunden, zäh. Mittelwert in Sheets. Auf 08b als n die Zahl der
   Bewertenden eintragen; die bisherige Fußzeile „Gruppe und Befragten (n = 8)“ (Präsentation:1519) passt dann nicht
   mehr.

| Folie | Datenfelder (jetzt alles Beispieldaten) |
|---|---|
| 08 | `marke.tier` (`name`, genau 3 `gruende` mit `stichwort` und `beleg`, `selbstbild` Adler „Raptor“); `marke.mensch` (`titel`, 3 Profilzeilen, `kundschaft` = belegte Kundschaft als Gegenpol, Präsentation:1418–1424); genau 2 `wettbewerber` (`name`, `tier`, `stichworte`). Tierbilder: Adler, Waschbär, Affe, Schwan, Löwe, Fuchs, Eule, Hund, Delfin (Präsentation:1410–1467) |
| 08b | 5 `dimensionen` (Wert HOLY 1–5, Wettbewerber falls erhoben), 4–5 `merkmale` mit exakt geschriebener Dimension, 2–3 `emotionen`, `beziehung`, `erlebnisse` (Präsentation:1534–1580) |
| Umfrage | marke.js: `optionen`, `link`, `kurzLink`, `ergebnisLink`, `unsereAntwort` (= Tier der Analyse) (marke.js:92–107) |

Beide Folien brauchen einen Titel als Kernaussage (Aufgaben:424) und das tatsächliche n in der Fußzeile
(Präsentation:1395, :1407). Drei Abweichungen zwischen Aufgaben und Präsentation: → Offen 16.

**(b) Wie die Persona hilft.** Die Analogie beschreibt die Marke als Person, **nicht** die Zielgruppe
(Präsentation:1406). Marco liefert den Kontrast: Kundschaft meist 25–40, oft im Schichtdienst ✔ [7, 24] (Dossier
4.1); auf Folie 08 steht das im Feld `kundschaft`. Abgleich mit der Tonalitäts- und der Limbic-Hypothese: Anhang 2,
erst nach der Auswertung.

**(c) Typische Fehler:** Tiere oder Adjektive im Interview vorgeben (Dossier 6.7) · Persona mit Markenpersönlichkeit
verwechseln · das Beispiel in `unsereAntwort` für ein Ergebnis halten (marke.js:103) · den Claim „Drink soft.
Go hard.“ verwenden: nicht belegt (Dossier 6.5).

**Live-Umfrage** (Aufgaben:413; Präsentation:1401–1405): in Mentimeter oder Particify „Wenn HOLY ein Tier wäre –
welches?“ mit 4–5 Tieren (das Ergebnis der Analyse, Adler als Selbstbild, plausible andere). Links weitergeben,
Gratis-Grenze prüfen, QR-Code mit mehreren Handys testen. Plan B: Handzeichen im Zählmodus. Vor dem Vortrag
„Zurücksetzen“ zweimal klicken. Die Umfrage ist ein **Stimmungsbild, keine Erhebung**: So steht es auf der Folie und
so sagst du es (Aufgaben:428).

### B4 Prüfen, Sprechtext, Backup (Fr 23.10.)

- „~“-Angaben prüfen: Regalpreise HOLY, Red Bull, Monster und Rossmann-Listung, mit datiertem Foto (Aufgaben:438;
  Dossier 10.3).
- Sprechtext 06–08b, je Folie zwei Rückfragen samt Antwort. Die Sollzeit steht im Attribut `data-zeit` jeder Folie:
  auf master 90 + 90 + 70 + 50 s = 5:00; auf dem Branch `praesentation-account-2` hat Folie 06 schon 80 s. Nach dem
  Zusammenführen neu addieren. Vorbereitet sind z. B. „Warum KI-simulierte Befragte?“ (Antwort: prompts Teil C) und
  „Sie haben die Tiere doch vorgegeben?“ (Präsentation:1034, :1406).
- Backup B4 (alle Ratings) und B5 (Leitern, Matrix) liefern (Aufgaben:440). Die Sprechernotizen sind öffentlich lesbar
  (Übergabe:28): nichts Personenbezogenes hinein.

---

## 5. Drei bis fünf echte Interviews führen

**Auswahl** (Vorschlag, übertragen von den simulierten Befragten, Steckbrief:36–37, :95–99): mindestens 2 Frauen,
Alter etwa 20–40, **ab 18** [12] (Steckbrief:84), Viel- und Wenigtrinker:innen, HOLY-Kund:innen und
Nicht-Kund:innen. Die Kernkundschaft ist 25–40 und oft im Schichtdienst [7, 24] (Dossier 4.1), methoden nennt
„Kommiliton:innen“ (methoden:105–106): Nimm wenn möglich eine berufstätige Person dazu (→ Offen 14). **Heute
anfragen:** Die Interviews sind So 18.10. (Arbeitsplan:58).

**Auswahlfragen** (Vorschlag, nicht abgestimmt): (1) Bist du 18 oder älter? (2) Wie oft trinkst du Energy Drinks?
(3) Schicht, Büro oder Studium? (4) Welche dieser Marken kennst du: Red Bull, Monster, HOLY, Gönrgy, waterdrop,
Coca-Cola Zero? Erst am Ende: (5) Hast du HOLY schon gekauft? So verrätst du die Fokusmarke nicht vor den Triaden
(eigene Abwägung).

**Bekanntheit** (Methodenregel aus dem Modellwissen, mit Vorlesung abgleichen): Im Repertory Grid müssen die
Befragten die Marken kennen. Dass alle Marken der Zielgruppe bekannt sind, ist nur eine Hypothese (Dossier 5.3, H).
Deshalb: Interview nur, wenn die Person HOLY und mindestens 3 der 5 Wettbewerber kennt. Eine Triade mit unbekannter
Marke überspringen und „unbekannt“ notieren. Die Marke nicht erklären, das wäre eine Vorgabe. In der Auswertung die
Zahl der gültigen Triaden je Person angeben.

**Ablauf ca. 12–15 Min.** (Vorschlag; geplant waren ca. 10 Min., Aufgaben:328. Fragen wortgleich mit P7/P9,
Aufgaben:329; prompts:126, :154):

| Min. | Schritt | Wortlaut |
|---|---|---|
| 0–1 | Einwilligung (Text unten), Auswahlfragen 1–4 | siehe oben |
| 1–2 | Übungstriade mit drei bekannten Automarken | wie unten; Ergebnis nicht werten |
| 2–8 | Triaden mit Namenskarten: zuerst die 5 mit M (1, 2, 4, 6, 8), dann 3, 5, 7 | „In welcher wichtigen Hinsicht sind sich zwei dieser Marken ähnlich und unterscheiden sich von der dritten?“ Nachfrage für den Gegenpol: „Und wie würdest du die dritte beschreiben?“ Pole wörtlich notieren |
| 8–12 | Laddering zu 2 Konstrukten, die die Person selbst wichtig findet | „Warum ist dir das wichtig?“ bis zum Wert |
| 12–14 | HOLY als Tier und als Mensch, je 3 Gründe (Pflicht) | offen fragen, nichts vorschlagen |
| 14–15 | Auswahlfrage 5, Dank | – |

Wird die Zeit knapp, nur die 5 Triaden mit M. Fällt der Person zu einer Triade nichts ein: weiter zur nächsten und
das notieren. Biete keine Konstrukte aus Dossier 3.6 an. Das Recherche-Dossier nennt sie zwar als Gesprächsstütze
bzw. Rückfallebene (Dossier 3.6, 10.3), Aufgaben:343 sagt aber „nie vorgeben“; dieses Dokument folgt den Aufgaben
(eigene Abwägung).

*Hinweis aus dem Modellwissen, ohne geprüfte Fundstelle (mit Vorlesung abgleichen; nachzulesen wäre bei Reynolds &
Gutman 1988, methoden:262):* Laddering startet klassisch bei Unterscheidungen, die die Person selbst genannt hat, etwa
aus Triaden. Das weicht von methoden:135 ab, wo die Attribute aus dem Repertory Grid der Startpunkt sind: Begründe die
Abweichung im Backup. Es löst ein Zeitproblem: Die Interviews sind So 18.10., die Attribute stehen erst Mo 19.10.
fest (Arbeitsplan:58–59). Im Interview kennt noch niemand die zusammengefassten Konstrukte (→ Offen 4).

**Einwilligung und Datenschutz:**

- Einwilligung **vor** dem Interview einholen (Aufgaben:330). Text zum Vorlesen (Entwurf; Zweck und Widerruf aus dem
  Modellwissen, vgl. Art. 7 Abs. 3 DSGVO, von der Gruppe abzugleichen; öffentlich: Persona-Daten:8, Übergabe:10):

  > „Ich mache für eine Studienarbeit an der Hochschule Kaiserslautern ein Kurzinterview zu Getränkemarken, etwa
  > 15 Minuten. Mitmachen ist freiwillig. Du kannst jederzeit abbrechen und deine Zustimmung auch später widerrufen,
  > dann lösche ich deine Notizen. Ich notiere nichts mit deinem Namen und nehme nur auf, wenn du ausdrücklich
  > zustimmst. Die anonymen Notizen werte ich auch mit KI-Tools aus. Anonyme Ergebnisse und kurze Zitate erscheinen
  > in einer Präsentation, die öffentlich im Internet steht. Die Notizen lösche ich bis [Datum]; Fragen an Lukas
  > Welker, [Kontakt]. Bist du einverstanden?“

- Die mündliche Zustimmung mit Datum im Gruppenordner vermerken, nicht im Repository.
- HSKL-KI-Richtlinie Nr. 6: personenbezogene Daten nur mit ausdrücklicher Einwilligung der Betroffenen in KI-Tools
  außerhalb der Hochschule bzw. der Rechenzentrumsallianz Rheinland-Pfalz (Vorlage-KI:49–51). Sicher ist beides:
  Einwilligung **und** anonymisieren („Befragte 1, 22 J., Studentin“, Vorlage-KI:56). KI-Transkription nur mit
  Einwilligung; sie zählt als KI-Nutzung (Vorlage-KI:34, :59).
- Repository und Webseite sind öffentlich (Persona-Daten:8; Übergabe:10). Einwilligungen, Notizen und Aufnahmen nur in
  den Gruppenordner.

**Abgleich echt ↔ KI-simuliert** (getrennt zählen, Aufgaben:329–330), Vorlage für Sheets und Backup:

| Befund | KI (T1–T5) | echt (T6 ff.) | Kundenstimmen | im Persona-Block angelegt? | Lesart |
|---|---|---|---|---|---|
| Konstrukt „…“ | Nennungen | Nennungen | K3/K4 ja/nein | ja/nein (Anhang 2) | in beiden → tragfähig; nur KI und im Block angelegt → kein Ergebnis |
| Leiter „…“ | Anzahl | Anzahl | Zitat | ja/nein | nur KI → Klischee-Verdacht |
| Tier / Mensch | … | … | K7 | – | nur echt → Lücke der Simulation |

---

## 6. Kundenstimmen als dritte Quelle nutzen

Bündel B soll mit 20–30 Bewertungen und Kommentaren abgleichen (Aufgaben:327–328). Im Steckbrief ist diese
Auswertung noch offen (Steckbrief:118); wer sie macht: → Offen 17. Ein Sheet reicht für A und B.

**Wo** (Datenerhebung:154–162): REVIEWS.io, das Bewertungssystem des Shops (reviews.io/company-reviews/store/holy) ·
Trustpilot-Profil **holyenergy.de**, nicht holy.com · Kommentare unter unabhängigen YouTube-Videos. Instagram nennt
Aufgaben:328 auch für B; laut Datenerhebung:223 erhebt aber Elias Instagram und TikTok für Folie 09 (→ Offen 15).

**Wie** (Datenerhebung:164–182): z. B. 20 Bewertungen der letzten 6 Monate (jede 5. auf den Seiten 1–5) plus 10
kritische (1–2 Sterne); Regel notieren. In Sheets eine Zeile je Bewertung, Codes K1–K8, Häufigkeiten mit
`ZÄHLENWENN`.

| Code | Nutzen für B |
|---|---|
| K3 Motiv, K4 Kritik | B1: Kommen deine Konstrukte auch bei echten Kund:innen vor? |
| K1 Anlass + K3 | B2: Leitern in Kundensprache, 1–2 Belegzitate (anonym, Portal, Datum) |
| K7 Tonalität | B3: Abgleich mit der abgeleiteten Tonalität |

Typisch laut Dossier 3.5 ✔ [88, 89]: Lob für Geschmack, Sorten, zuckerfrei, Service; Kritik an Preis ohne
Rabattcode, Süße, Shaker. Grenzen: Bewertende wählen sich selbst, HOLY lädt nach dem Kauf ein, Alter und Geschlecht
sind meist unbekannt. Keine Namen übernehmen, vor jedem KI-Upload entfernen (Datenerhebung:184–188).

---

## 7. Was die Persona-Daten nicht können

- **Kategorie ist nicht HOLY.** Die Statistiken beschreiben Energy-Drink-Konsument:innen; Pulver erfasst keine
  Statistik, HOLY veröffentlicht keine Kundendaten (Steckbrief:8–10, :77–79; Datenerhebung:20–21).
- **Keine Statista-Zahlen auf Folien 06–08b umdeuten.** „41 % Gaming-Hobby“ belegt weder ein Konstrukt noch eine
  Leiter. Statista nur so verwenden, wie es in Persona-Daten oder Steckbrief steht (Persona-Daten:5–8).
- **Die Persona ist annahmegestützt.** Statista-Werte sind nicht gegengelesen, Gründerzitate nicht im Audio geprüft
  (Steckbrief:115–117). Das Persona-Zitat ist fiktiv, nie ein Kunden- oder Laddering-Beleg (Steckbrief:47).
- **Simulierte Befragte sind keine Daten.** Nischenwissen fehlt, repräsentativ ist nichts (prompts:271–272). Die
  5 Profile entstehen in einer Antwort desselben Tools und sind keine unabhängigen Beobachtungen. Deshalb keine
  Aussagen über Streuung oder Signifikanz, und Persona- und Befragten-Block nie verändern (eigene Abwägung). Ehrlich
  formulieren: „Die KI-Simulation liefert Hypothesen. Die Relevanz stützt sich auf echte Interviews und
  Kundenstimmen.“ Nie „Befragte sagen“ ohne „KI-simuliert“.
- **Basen nicht mischen:** Die Quellen werden nicht verrechnet; VuMA-Daten sind von 2021 (Persona-Daten:48–49).

---

## 8. Deine KI-Nutzung belegen

- **Liste:** persönlich nach `ki-nachweis/vorlage-ki-nutzung.md`, nicht selbst in `ki-nachweis.md` eintragen; Yannick
  überträgt (Vorlage-KI:14–15). Nummern 01, 02 …, daraus wird E-LW-01 (KI-Nachweis:1067).
- **Was:** jede KI-Nutzung, die du selbst machst (automatisch erfasst wird nur Yannicks Claude-Code-Sitzung), auch
  Rechtschreibung, Übersetzung und Transkription. Im Zweifel eintragen, auch Verworfenes (Vorlage-KI:24–36).
- **Wie:** sofort; Prompts wörtlich mit Tippfehlern. Nur P0 darfst du abkürzen („Prompt-Vorlage: P0, dann P7“), alle
  anderen Prompts wörtlich, lange mit den ersten zwei Zeilen plus „…“ (Vorlage-KI:72–76). Bei jedem Eintrag „Warum
  KI“ und „Woher stammt der Inhalt?“ ausfüllen: Websuche mit Quellen, Modellwissen oder nur eingefügtes Material
  (Vorlage-KI:107, :117). „Prüfung / Anpassung“ ist das wichtigste Feld; „Prüfung durch die Gruppe“ nicht
  ausfüllen, es bleibt „☐ offen“ (Vorlage-KI:86, :122).
- **Zahlen aus der KI:** Zahlen, Zitate oder Studien aus einer KI übernimmst du nur, wenn du die Originalquelle
  geöffnet hast. Ins Quellenverzeichnis (Backup B7) kommt die Originalquelle, nie das Tool (Vorlage-KI:87–89). Das
  betrifft z. B. P11: Was die KI über Red Bull und waterdrop sagt, ist Modellwissen (Dossier 5.2, H).
- **Chatverläufe:** als PDF in den Gruppenordner, Unterordner „KI-Chats“, Name `JJJJ-MM-TT_LW_Nr_Tool.pdf`. Ein
  Teilen-Link reicht nicht. **Nie ins Repository** (Vorlage-KI:66, :82–85).
- **Urheberrecht:** keine kompletten Statista- oder VuMA-Berichte, Buchkapitel oder Vorlesungsfolien in externe
  KI-Tools; der Persona-Block ist eine eigene Zusammenfassung. Training im Tool ausschalten (Vorlage-KI:60–65).
- **Fristen** (Vorlage-KI:7–12): Di 20.10. Zwischenstand mitbringen · **Fr 23.10. abends** an Yannick · bis So 25.10.
  Nachträge mit den nächsten Nummern · Nachtrag mit der Einzelreflexion (Termin folgt), dazu ein Satz unter der
  Reflexion: Tool, wofür (Vorlage-KI:38–39). Vor dem Abschicken: Checkliste, Beispiel Nr. 00 löschen, Erklärung mit
  Name und Stand (Vorlage-KI:158–170).

---

## 9. Termine und Übergaben einhalten

| Was (Arbeitsplan:37–47) | Von → an | Bis | Was du konkret lieferst |
|---|---|---|---|
| Marke + Wettbewerbsset W1–W5 | alle | Mi 14.10. | überfällig: bis Sa 17.10., 10 Uhr bestätigen lassen, sonst Standardwahl (→ Offen 1) |
| Persona-Kurzfassung | A → B | Fr 16.10. | liegt vor |
| Folienmaster | C → alle | Mo 19.10. | – |
| 3–5 Markenattribute | B → alle | **Mo 19.10.** | Attribute wortgleich für 06 und 07, Auswahlregel, Stichprobe |
| Markentonalität | B → C | **Mi 21.10.** | Merkmale, Emotionen, Beziehung, Erlebnisse, Tier und Mensch |
| Ergebnisse je Feld des Markensteuerrads | alle → Yannick | Do 22.10. vor dem Termin | je Feld 3–5 Stichworte mit RG, LA, AN (Aufgaben:494; → Offen 9) |
| Eigene Folien fertig im Master | alle → C | Fr 23.10. | Datenfelder der Folien 06–08b, Sprechtext, Rückfragen, B4/B5 (→ Offen 11, 12) |
| Persönliche KI-Liste | alle → Yannick | Di 20.10. / Fr 23.10. | Zwischenstand / Abgabe (Nachträge bis So 25.10.) |

**Tagesplan B ab heute** (nach Arbeitsplan:56–66, angepasst; eigene Abwägung): Fr 16.10. Interviewpartner:innen
bestätigen, Fragen an die Gruppe, Leitfaden aus Abschnitt 5 fertig machen (war bis Do 15.10. fällig, Aufgaben:329) ·
Sa 17.10. P7 (Chat A) · So 18.10. echte Kurzinterviews, Kundenstimmen K3/K4 · Mo 19.10. alle Konstrukte
konsolidieren, P8, Sheets → Attribute an alle · Di 20.10. Laddering (P9), HVM (P10); beim Zwischenstand (45 Min.)
Gruppenrunde Mensch/Tier ohne KI und Aaker-Bogen · Mi 21.10. Analogien (P11) → Tonalität an C · Do 22.10. Synthese
2 Std. · Fr 23.10. Folien 06–08b final, B4/B5 · Sa 24.10. Rohdaten ins Backup · So 25.10. Generalprobe · Mo 26.10.
Präsentation. Am Wochenende ist die Einteilung flexibel, die Übergaben nicht (Arbeitsplan:68).

Folie 10 übernimmt deine Stichworte, die Folien 09b und 11 bauen auf dem „frechen Kumpel“ auf
(Präsentation:2012–2026, :1839, :2319). Weichen deine Ergebnisse ab, sag es Yannick und Elias sofort.

---

## 10. Checkliste zum Abhaken

- [ ] Wettbewerbsset, Rahmen und Wortlaut der Idealmarke zusammen mit der Gruppe bestätigt (sonst Standardwahl)
- [ ] Interviewpartner:innen für So 18.10. bestätigt (mind. 2 Frauen, ab 18, eine berufstätige Person)
- [ ] Jeder Chat: P0 → Befragten-Block → fertiger Prompt aus Anhang 1; Chat als PDF gesichert, KI-Liste ergänzt
- [ ] P7 gelaufen; Konstrukte aus KI und echten Interviews gemeinsam konsolidiert, Nennungen selbst gezählt
- [ ] 3–5 echte Interviews mit Auswahlfragen, Einwilligung und anonymen Notizen
- [ ] „Echt“ und „KI-simuliert“ getrennt gezählt und verglichen, Spalte „im Persona-Block angelegt“ ausgefüllt
- [ ] Auswahlregel notiert und als `schwellen` in B4, dann P8-CSV in Sheets ausgewertet; Attribute Mo 19.10. an alle
- [ ] Leitern codiert, Matrix selbst ausgezählt, HVM und zwei Nutzen formuliert
- [ ] 20–30 Kundenstimmen codiert; 1–2 anonyme Belegzitate mit Portal und Datum
- [ ] Analogien erst ohne KI, dann P11; Aaker-Bogen in Sheets gemittelt; Tonalität Mi 21.10. an C
- [ ] Hypothesen aus dem Recherche-Dossier (Anhang 2) erst nach der Auswertung abgeglichen, Unterschiede im Backup
- [ ] Live-Umfrage angelegt, mit mehreren Handys getestet, Plan B geklärt
- [ ] Folien 06–08b: Datenfelder, Titel, tatsächliches n, „KI-simuliert (Tool)“ bzw. „KI-gestützt (Tool)“,
      Kennzeichen „Beispieldaten“ oben auf der Folie (im Code „Pille“) entfernt
- [ ] Sprechtext in der Sollzeit (`data-zeit`, nach dem Zusammenführen prüfen), je Folie 2 Rückfragen, B4/B5
      geliefert, Regalpreise fotografiert
- [ ] KI-Liste: Zwischenstand Di 20.10., Abgabe Fr 23.10. abends

---

## 11. Dateien und Quellen

Pfade relativ zum Repository; `fs1/` = `fallstudie-1-brand-persona/`. Zeilennummern = Quelltext der Datei.

| Kurzname | Datei | Wozu |
|---|---|---|
| Steckbrief | `fs1/persona-steckbrief.md` | Persona, Belege, Befragten-Vorschlag |
| Persona-Daten | `fs1/persona-daten.md` | öffentliche Kennzahlen (Kategorie) |
| Datenerhebung | `fs1/persona-datenerhebung.md` | Codebuch K1–K8, Bewertungsportale |
| methoden | `fs1/methoden.md` | Vorlagen §2–4, Literatur |
| prompts | `fs1/prompts.md` | P0, P7–P11, Teil C (Begründung) |
| Aufgaben | `fs1/aufgaben-im-detail.html` (das PDF `Fallstudie-1_Aufgaben-im-Detail.pdf` hat keine Zeilennummern; dort unter B1–B4 suchen) | B1–B4, Termine, Spielregeln |
| Arbeitsplan | `fs1/arbeitsplan.md` | Übergaben, Tagesplan |
| README | `fs1/README.md` | Folienplan, typische Fehler |
| Dossier | `fs1/recherche/holy-recherche.md` (Recherche-Dossier) | Hypothesen, Belege, Quellen (Anhang B) |
| Präsentation | `fs1/praesentation/index.html` | Datenfelder der Folien 06–08b, B4, B5 |
| marke.js | `fs1/praesentation/marke.js` | Live-Umfrage |
| Vorlage-KI | `ki-nachweis/vorlage-ki-nutzung.md` | deine KI-Liste |
| KI-Nachweis | `ki-nachweis/ki-nachweis.md` | nur lesen |
| Übergabe | `ki-nachweis/uebergaben/2026-10-16_account-2_befunde-live-pruefung.md` | Webseite ist öffentlich |

- **Statistiken (Kategorie, zitiert nach Steckbrief und Persona-Daten):** VuMA 2022 (Daten 2021) · Kantar Media TGI
  2023 · Statista Consumer Insights 2025 (Studien-ID 120400).
- **HOLY (Dossier, Anhang B):** [1] de.holy.com, Preise · [5] Die HOLY Story · [7] Trending Topics, 08/2024 ·
  [12] AGB HOLY Softdrinks GmbH, § 4 · [13] Press Kit 02/2026 · [20] TikTok-Profil · [24] Podcast „Digitale
  Vorreiter:innen“ #281, F. Jost, 08/2024 · [25] HORIZONT 01/2026 · [30] Shop-Produktdaten · [81] Lebensmittelklarheit
  03/2025 · [88] Trustpilot · [89] REVIEWS.io.
- **Literatur** (methoden:256–266): Kelly (1955) *The Psychology of Personal Constructs* · Gutman (1982) *Journal of
  Marketing* 46(2) · Reynolds & Gutman (1988) *Journal of Advertising Research* 28(1) · Aaker (1997) *Journal of
  Marketing Research* 34(3) · Esch, *Strategie und Technik der Markenführung*. Dazu die Vorlesungsfolien; die
  Fußzeilen der Folien 06 und 07 sollen „Vorlesung Unternehmenskommunikation (Stenger)“ nennen.

---

## Noch offen: Widersprüche und Lücken

Die Standardwahl gilt, wenn die Gruppe bis zur Frist nichts anderes beschließt (eigene Abwägung). Halte die
Entscheidung im Gruppenchat fest.

| # | Punkt | Standardwahl und Frist |
|---|---|---|
| 1 | Wettbewerbsset: laut Arbeitsplan:39 fix zum Kickoff, aber nirgends beschlossen (methoden:25 leer; Präsentation:1304) | Vorschlag 5.3 unverändert, zusammen mit Offen 2; Frist Sa 17.10., 10 Uhr (vor P7) |
| 2 | Idealmarke: „meine Idealmarke“ (methoden:92; prompts:121) gegen „mein idealer Drink für jeden Tag“ (Aufgaben:341; Dossier 5.3). Der zweite Wortlaut übernimmt HOLYs Softdrink-Rahmung („Die Softdrink Revolution“, Dossier 6.5) und verschiebt die Ideal-Distanz | Dossier 5.3 (Aufgaben:341); überall gleich, Abweichung von P7 loggen (Anhang 1). Wählt die Gruppe einen reinen Energy-Rahmen, ändern sich W5 und I zusammen, z. B. „mein idealer Energy Drink“ (eigene Abwägung). Wahl im Backup begründen. Frist wie Offen 1 |
| 3 | Laddering-Frage: Du-Form (methoden:136; prompts:154; Präsentation:1218–1219) gegen Sie-Form (Aufgaben:377) | Du-Form |
| 4 | Interviews So 18.10., Attribute erst Mo 19.10.; Rating durch echte Befragte in 10 Min. nicht machbar | kein Nach-Rating: Ratings nur von den 5 simulierten Befragten, so in Fußzeile und B4; Frist Mo 19.10. früh |
| 5 | Folie 06 „gemittelt“ aus 5 + 3 (Präsentation:1026) gegen getrennt zählen (Aufgaben:329–330) | getrennt zählen; `nennungen` = Summe, Aufteilung KI/echt in B4 und Fußzeile; „gemittelt“ streichen |
| 6 | P11 simuliert keine Befragten, Fußzeile 08 nennt „5 KI-Personas (Prompt P11)“ (Präsentation:1395) | P11 einmal laufen lassen, als „KI-gestützt (Tool)“ kennzeichnen, Fußzeile 08 anpassen; Frist Di 20.10. |
| 7 | Analogie-Wettbewerber: W1 + W2 (methoden:174; prompts:186) gegen Red Bull + waterdrop (Folien 08/08b); Aaker-Werte der Wettbewerber verlangt (Aufgaben:421), laut Fußzeile „nicht erhoben“ (Präsentation:1519) | Red Bull und waterdrop (wie auf den Folien, beide im Set; Aufgaben:410 verlangt nur „aus dem Set“); auf 08 und 08b dieselben zwei, im Aaker-Bogen mitbewerten; Frist Di 20.10. |
| 8 | Schwelle ≥ 1 Skalenpunkt (Aufgaben:347) gegen B4: ≥ 1,5, Nennungen ≥ 6, Ideal-Distanz ≤ 1,0 („eigene Festlegung“, Präsentation:2813) | vor dem Rechnen festlegen (Mo 19.10.) und als `schwellen` in B4 eintragen |
| 9 | 8–12 Konstrukte gegen 6–8 Zeilen auf Folie 06; 3–5 Attribute gegen 3–4 Knoten (Folie 07), 4 Platzhalter (P9), 2–4 Stichworte auf Folie 10 (Aufgaben:505; Präsentation:1927: 3–4) | 3–4 Attribute, Rest ins Backup |
| 10 | Zeiten README:63–65 (2:00 / 1:45 / 1:15) gegen Präsentation (`data-zeit` 90 / 90 / 70 / 50 s; Branch von Account 2: Folie 06 mit 80 s); Matrix „stichprobenartig“ (prompts:176) gegen „selbst“ (Aufgaben:379) | Präsentation nach dem Zusammenführen; selbst auszählen |
| 11 | B4/B5 bis Fr 23.10. (Aufgaben:440) gegen Sa 24.10. (Arbeitsplan:64) | Fr 23.10. |
| 12 | „Eigene Folien fertig im Master“ (Arbeitsplan:46) gegen „ersetzt werden nur die Daten … Wer den Einbau ins Repository übernimmt, legt die Gruppe fest“ (Aufgaben:157) | du lieferst Datenfelder, Sprechtext und Rückfragen; wer einbaut, beim Zwischenstand Di 20.10. klären |
| 13 | Lücken: keine Sheets-Vorlage im Repository; Speicherung der Interviewdaten; Umfrage-Konto; Quelle „32 %“ (Steckbrief:97); Cola Zero zuckerfrei = Modellwissen (Präsentation:1034); zentrale KI-Systeme der HSKL; keine Vorlesungsfolien | Leitfaden und Einwilligungstext als Entwurf aus Abschnitt 5 nutzen; Rest im Gruppenchat klären; „32 %“ bei Yannick erfragen |
| 14 | „Kommiliton:innen“ (methoden:105) gegen Kernkundschaft 25–40, oft im Schichtdienst [7, 24] | eine berufstätige Person dazu |
| 15 | Instagram-Kommentare: Aufgaben:328 (B) gegen Datenerhebung:223 (Elias, Folie 09) | nicht doppelt erheben, mit Elias abstimmen; bis dahin nur Shop, Trustpilot, YouTube |
| 16 | Folie 08: Mensch mit 4 Merkmalen (Aufgaben:419) gegen 3 Profilzeilen (Präsentation:1425–1426); Wettbewerber „Mensch in einer Zeile“ (Aufgaben:420) ohne Datenfeld (Präsentation:1462–1465); 3 Emotionen (Aufgaben:422) gegen 2–3 (Präsentation:1550) | Präsentation gilt; der Aufgaben-Text wird angepasst |
| 17 | Wer wertet die Kundenstimmen aus? B soll abgleichen (Aufgaben:327–328), im Steckbrief offen (Steckbrief:118) | ein gemeinsames Sheet; ohne andere Absprache bis Sa 17.10. codierst du K1, K3, K4, K7 bis So 18.10., weil die Auswahlregel K3/K4 braucht |

---

## Anhang 1: Kopierfertige Prompts

Feste Reihenfolge in jedem Chat: Nachricht 1 = P0 (prompts:17–29, mit HOLY und Energy- und Hydration-Drinks),
Nachricht 2 = Befragten-Block (Abschnitt 3), Nachricht 3 = Prompt von hier. Ausnahme: P11 ohne Befragten-Block. Die
Texte sind **Abwandlungen** von prompts.md (eigene Abwägung); trag sie so wörtlich in die KI-Liste ein und nenne die
Abwandlung im Feld „Prompt-Vorlage“. Ändert die Gruppe Wettbewerber oder Idealmarke (→ Offen 1, 2, 7), änderst du
nur diese Wörter.

**P7, Chat A, Sa 17.10.** Abwandlung: Platzhalter eingesetzt; Persona-Block auf eigenen Zeilen; „Variiere Alter,
Geschlecht und Nutzungsintensität der Kategorie“ ersetzt durch den Verweis auf T1–T5; I nach Offen 2.

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

**P8, Chat A, Mo 19.10.** Unverändert (prompts:136–141); nur die Liste deiner 8–12 konsolidierten Konstrukte
einsetzen, je „Pol 1 – Pol 7“. Die Zusammenfassung der KI aus P7 ersetzt deine eigene Zählung nicht.

**P9, Chat B, Di 20.10.** Abwandlung: `[PERSONA]` = die jeweilige Zeile T1–T5 aus dem Befragten-Block; eine Prüffrage
vor jeder Leiter ergänzt. Zuerst für T1:

```text
Führe ein Laddering-Interview nach der Means-End-Chain-Theorie (Gutman; Reynolds & Gutman) mit T1 aus meiner vorigen Nachricht.

Startpunkte sind diese Eigenschaften der Marke HOLY: <<ATTRIBUT 1>>, <<ATTRIBUT 2>>, <<ATTRIBUT 3>>, <<ATTRIBUT 4>>.

Frage zuerst, ob die Eigenschaft der Person beim Kauf wichtig ist. Wenn nicht, keine Leiter, sondern kurz begründen.
Frage sonst pro Eigenschaft wiederholt "Warum ist dir das wichtig?", bis ein persönlicher Wert erreicht ist
(mindestens 3 Stufen). Gib das Interview als Dialog wieder.
Fasse danach jede Leiter als Kette zusammen:
Attribut → funktionale Konsequenz → psychosoziale Konsequenz → Wert
```

Dann im selben Chat viermal, mit T2, T3, T4 und T5 (prompts:160):

```text
Führe jetzt dasselbe Interview mit T2 aus der Liste T1 bis T5 oben durch: gleiche Startpunkte, gleiche Regeln.
```

**P11, Chat C, Mi 21.10.** Nur P0, dann dieser Text. Abwandlung: `[W1]`/`[W2]` = Red Bull und waterdrop (W1 und W4,
→ Offen 7). Ergebnis als „KI-gestützt (Tool)“ kennzeichnen.

```text
Stell dir vor, die Marke HOLY wäre ein Mensch. Beschreibe: Alter, Geschlecht, Beruf, Wohnort, Kleidungsstil,
Hobbys, wie die Person spricht, welches Auto sie fährt, wie sie sich auf einer Party verhält und welche Beziehung
sie zu ihren Kund:innen hat (z. B. Freund, Mentor, Entertainer, Dienstleister).
Stell dir dann vor, HOLY wäre ein Tier: Welches und warum (3 Gründe)?

Mache dasselbe für Red Bull und waterdrop zum Vergleich.

Leite anschließend für HOLY ab:
- 4–5 Persönlichkeitsmerkmale
- die dominanten Markenemotionen
- die Zuordnung zu den Dimensionen der Brand Personality Scale nach Aaker
  (Aufrichtigkeit, Spannung, Kompetenz, Kultiviertheit, Robustheit)
```

---

## Anhang 2: Erst nach der Auswertung lesen

Hypothesen (H) aus dem Recherche-Dossier sind keine Ergebnisse (Aufgaben:566). Öffne diesen Anhang erst, wenn deine
Konstrukte, Leitern und Analogien codiert sind (eigene Abwägung; Aufgaben:343). Frag dann: Was kam spontan, was nie,
was ist neu?

**B1 – Konstrukte** (Dossier 3.6, H): zuckerhaltig – zuckerfrei · künstlich gesüßt – natürlich · trinkfertig – selbst
anrühren · kurzer Kick – lang anhaltend · stark aufputschend – leicht · teuer – günstig pro Portion · wenige Klassiker
– ständig neue Sorten · Konzernmarke – Community-Marke · seriös – frech · Einweg – verpackungsarm · überall im Handel –
vor allem online · Sport – Alltag · Gaming-Szene – Mainstream. Die sechs Konstrukte auf Folie 06 sind genau diese
Hypothesen mit erfundenen Zahlen (Präsentation:1077). Marcos Motive (Steckbrief:32–33) sind eine Hypothese dafür, wo
die Idealmarke liegt.

**Im Persona-Block angelegt** (für die Spalte in Abschnitt 5; Zuordnung = eigene Abwägung): zuckerhaltig – zuckerfrei
(„ohne Zucker“) · trinkfertig – selbst anrühren („HOLY-Pulver“, „Monster aus der Dose“) · teuer – günstig pro Portion
(„ca. 0,80 € pro Portion“, „rechnet in Preis pro Portion“) · überall im Handel – vor allem online („bestellt er
online“) · seriös – frech („mag den Humor“) · Konzernmarke – Community-Marke („Squad“-Gefühl) · Gaming-Szene –
Mainstream („zockt online“, „kein Schüler-Gamer“). Schwächer auch Sport – Alltag („geht joggen“).

**B2 – Ketten** (Dossier 3.7: Attribute ✔, Ketten H):

| Attribut | funktional | psychosozial | Wert |
|---|---|---|---|
| zuckerfrei, ≈ 19 kcal | Softdrink ohne Zucker und Kalorien | gönnen ohne schlechtes Gewissen | Gesundheit, Selbstbestimmung |
| 160 mg Koffein, „~4 h“ | wach im Dienst, beim Lernen, Zocken | mithalten, Leistung zeigen | Erfolg, Anerkennung |
| Pulver, 50 Portionen, 0,80 € | günstig, nichts schleppen | „smart“ einkaufen | Unabhängigkeit, Verantwortung |
| 31+ Sorten, Limited Drops | Abwechslung, Sammeln, Mitreden | Teil einer Szene sein | Zugehörigkeit, Spaß |
| Syrup, 5 Stufen | Geschmack selbst dosieren | Kontrolle über „meinen“ Drink | Individualität |
| Hydration | Durst stillen nach dem Sport | sich fit fühlen | Gesundheit |

Dazu das Markenversprechen „Geiler Geschmack mit gutem Gewissen“ ✔ [5, 20] (Dossier 6.5): Taucht „gutes Gewissen“
spontan auf? Aus der Persona (A): Pains und Gains sind erwartbare Konsequenzen, z. B. Müdigkeit → „wach bleiben“,
Zucker → „ohne schlechtes Gewissen“, Geldsorgen → „günstig“. Ziele und Werte sind Kandidaten für die Wert-Ebene:
Schicht gesund durchhalten, fit bleiben; „erfolgreich sein“ 27 % (Ø 22 %), „Spaß haben“ 38 % (Ø 36 %), Kategorie,
Statista CI 2025 (Steckbrief:52).

**B3 – Tonalität** (Dossier 6.7, H): Mensch = lauter, witziger Berliner WG-Gründer Ende 20, Gamer und Festivalgänger,
duzt alle · Beziehung = Kumpel und Anführer des „Squad“ · Tier = Selbstbild Adler („Raptor“), gelebter Ton eher
Waschbär oder Affe · Persönlichkeit = frech-provokant, selbstironisch, kumpelhaft-nahbar, rebellisch,
verspielt-popkulturell · Aaker vermutlich stark bei Spannung. Belegter Ton (Dossier 6.2 ✔): Du-Form, 36-mal „geil“ in
167 Produkttexten [30], „Zero Zucker oder Bullsh*t.“ [1], Doppeldeutigkeit im TV-Spot [25]. Die Persönlichkeiten von
Red Bull und waterdrop sind Modellwissen (H, Dossier 5.2). Zum Abgleich der Markenemotionen dient die
Limbic-Hypothese (H, Dossier 4.4; Steckbrief:53): Marco ist Abenteurer mit Hedonisten-Anteil, HOLY steht für Spaß,
Abenteuer und Zugehörigkeit.
