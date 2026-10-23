# Simulationsprotokoll: KI-simulierte Befragung Bündel B (Workflow D25)

> **KI-simuliert** im Auftrag von Yannick Heisler, 22.10.2026, Workflow D25 (KI-Nachweis 120 ff.). Keine echten
> Befragten, keine personenbezogenen Daten, keine Websuche, kein Statista-Material als Eingabe. Ergebnisse sind
> Hypothesen, ohne Aussagen über Signifikanz oder Repräsentativität (Stenger, S. 78; Dossier Bündel B §7; prompts.md,
> Teil C). Dieses Protokoll beschreibt, **wie** simuliert, codiert und gerechnet wurde; die Ergebnisse stehen in
> `repertory-grid.md`, `laddering.md` und `analogien-befragung.md`.
>
> **Nacharbeit 23.10.2026** nach drei unabhängigen Prüfberichten (Methodik und Kennzeichnung, Nachrechnen,
> Plausibilität und Verzerrung): Design richtiggestellt (Persona-Block nur in Gespräch 1, §2.3, §6 Nr. 15–16),
> Laufhistorie und zweite Ziehung (§2.7), Abweichungen und Auffälligkeiten ergänzt (§6, §8), neue Prüfskripte (§5, §7).
> Rohdaten der simulierten Personen unverändert.

## 1. Anlass und Auftrag

- Bündel B (Repertory Grid, Laddering, Analogien/Aaker; Folien 06, 07, 08b, B4, B5) trug bis zum 22.10.2026 nur
  Beispieldaten der Folienvorlage. Echte Kurzinterviews und Kundenstimmen (Dossier §5, §6) wurden nicht erhoben.
- Yannick am 22.10.2026 (KI-Nachweis 120, wörtlich): „Info von Lukas kommen keine weiteren Materialen wenn du etwas KI
  Simulieren musst für ein richtiges Ergebnis dann mach das“.
- Umsetzung als Workflow D25 (Skript `ki-nachweis/workflows/2026-10-22_buendel-b-simulation.js`): Erhebung →
  Codierung → Bewertung → Laddering → Auswertung per Skript → Synthese → Prüfung → Nacharbeit. Geschrieben wird nur in
  `fallstudie-1-brand-persona/buendel-b/`; Folien, Ausarbeitungen außerhalb des Ordners und `ki-nachweis/` bleiben
  unverändert (Einbau ist ein eigener Schritt).

## 2. Design

### 2.1 Befragte

Acht fiktive Profile, alle über 18, alle „KI-simuliert“. T1–T5 unverändert aus dem Dossier Bündel B §2; T6–T8 am
22.10.2026 ergänzt nach den Auswahlkriterien für Interviews (Dossier §5: mindestens zwei Frauen, Alter etwa 20–40,
Viel- und Wenigtrinker:innen, Kund:innen und Nicht-Kund:innen, mindestens eine berufstätige Person), weil keine echten
Interviews stattfinden. Ergänzt wurden eine Stammkundin (T6), ein Einmal-Käufer aus dem Schichtdienst (T7) und ein
Nie-Käufer, der HOLY nur aus Videos kennt (T8).

| ID | Profil (fiktiv, wörtlich wie im Prompt) | Herkunft | kennt (Teil 1) | gültige Triaden haupt / Kontrolle | HOLY gekauft (Teil 5) |
|---|---|---|---|---|---|
| T1 | Mann, 28, Schichtdienst Logistik, Vieltrinker, HOLY-Kunde. | Dossier Bündel B §2 (unverändert) | Red Bull, Monster, HOLY, Gönrgy, waterdrop, Coca-Cola Zero | 8 / 8 | kauft regelmäßig |
| T2 | Frau, 29, Pflegefachkraft im Schichtdienst, trinkt etwa 1× pro Woche Energy, hat HOLY im Supermarkt entdeckt. | Dossier Bündel B §2 (unverändert) | Red Bull, Monster, HOLY, waterdrop, Coca-Cola Zero | 5 / 5 | einmal gekauft |
| T3 | Mann, 22, Student, zockt viel, trinkt Monster aus der Dose, kennt HOLY von YouTube. | Dossier Bündel B §2 (unverändert) | Red Bull, Monster, HOLY, Gönrgy, Coca-Cola Zero | 5 / 8 | nie gekauft |
| T4 | Frau, 35, Bürojob, trinkt selten Energy, eher Cola Zero, achtet auf Zucker. | Dossier Bündel B §2 (unverändert) | Red Bull, Monster, HOLY, waterdrop, Coca-Cola Zero | 5 / 5 | nie gekauft |
| T5 | Mann, 39, Lkw-Fahrer, trinkt täglich Red Bull, preisbewusst, skeptisch gegenüber Pulver. | Dossier Bündel B §2 (unverändert) | Red Bull, Monster, Coca-Cola Zero, Gönrgy, HOLY | 5 / 5 | nie gekauft |
| T6 | Frau, 24, Fitnesstrainerin in Teilzeit und Sportstudentin, trinkt fast täglich etwas Zuckerfreies, ist seit etwa einem Jahr HOLY-Kundin und bestellt online, folgt HOLY auf Instagram. | Ergänzung 22.10.2026 nach den Auswahlkriterien für Interviews (Dossier Bündel B §5), weil keine echten Interviews stattfinden | Red Bull, Monster, HOLY, Gönrgy, waterdrop, Coca-Cola Zero | 8 / 8 | kauft regelmäßig |
| T7 | Mann, 33, Rettungssanitäter im Schichtdienst, trinkt mehrmals pro Woche Energy aus der Dose (Monster, Red Bull), hat HOLY einmal probiert und nicht wieder gekauft. | Ergänzung 22.10.2026 nach Dossier Bündel B §5 | Red Bull, Monster, HOLY, Gönrgy, Coca-Cola Zero | 5 / 5 | einmal gekauft |
| T8 | Mann, 25, Auszubildender zum Kfz-Mechatroniker, trinkt gelegentlich Energy (meist Monster), kennt HOLY nur aus TikTok-Videos, hat es nie gekauft. | Ergänzung 22.10.2026 nach Dossier Bündel B §5 | Red Bull, Monster, HOLY, Gönrgy, Coca-Cola Zero | 5 / 5 | nie gekauft |

Bekannte Marken und Kaufstatus sind Antworten der Simulation (Teil 1 bzw. Teil 5 des ersten Gesprächs), keine
Vorgaben – außer wo das Profil sie festlegt. T3 kannte waterdrop in der Kontrollgruppe, in der Hauptgruppe nicht.

### 2.2 Elemente und Triaden

Elemente (Dossier §3, Vorschlag Recherche-Dossier 5.3; von der Gruppe nicht beschlossen): M = HOLY, W1 = Red Bull,
W2 = Monster, W3 = Gönrgy, W4 = waterdrop, W5 = Coca-Cola Zero, I = „mein idealer Drink für jeden Tag“ (Wortlaut nach
Dossier §10, Punkt 2). Triaden wie methoden.md §2: 1) M–W1–W2 2) M–W3–I 3) W1–W4–I 4) M–W5–W2 5) W2–W3–W4 6) M–W4–I
7) W1–W3–W5 8) M–W5–I. Unbekannte Marke → Triade übersprungen (Dossier §5).

### 2.3 Ablauf je Person (drei getrennte Gespräche)

| Gespräch | Inhalt | Prompt (§3) | Rohdaten |
|---|---|---|---|
| 1 Interview | Teil 1 Auswahlfragen · Teil 2 acht Triaden mit Nachfrage · Teil 3 Analogien (Tier, Mensch, drei Gefühle, Erlebnis; offen) · Teil 4 Aaker-Bogen HOLY, Red Bull, waterdrop · Teil 5 „Hast du HOLY schon gekauft?“ | Rahmen, P0, Befragten-Block, P7-Abwandlung mit Interviewteilen | `rohdaten/interviews/Tn.json` |
| 2 Bewertung | alle 7 Elemente auf den 12 konsolidierten Konstrukten, 1–7, null = unbekannt; Kommentar, was schwerfiel | Rahmen, P0, Befragten-Block, Rückblick (eigene Antworten aus Gespräch 1 mit Triaden), P8-Abwandlung – **ohne Persona-Block** | `rohdaten/bewertungen/Tn.json` |
| 3 Laddering | Startpunkte „ohne Zucker“, „für jeden Tag“; erst Wichtigkeit, dann „Warum ist dir das wichtig?“ bis zum Wert | Rahmen, P0, Befragten-Block, Rückblick (nur Vorstellung, Auswahlfragen, Kauf – keine Triaden, keine Bewertungen), P9-Abwandlung – **ohne Persona-Block** | `rohdaten/leitern/Tn.json` |

Der Persona-Block „Marco, 28“ steht also **nur in Gespräch 1** (Interview). In Gespräch 2 und 3 wirkt er nur mittelbar
über die eigenen Antworten aus Gespräch 1 im Rückblick.

Die Reihenfolge der Interviewteile folgt dem Leitfaden im Dossier §5 (Kauf erst am Ende, damit vor den Triaden nicht
klar ist, um welche Marke es geht – in der Simulation nur eingeschränkt wirksam, weil P0 HOLY nennt).

### 2.4 Kontrollgruppe

Dieselben acht Profile, je ein eigener Agent, **ohne Persona-Block**, nur Teil 1 und Teil 2 (Auswahlfragen, Triaden).
Zweck: sehen, welche Konstrukte auch ohne die Stichworte des Persona-Blocks entstehen (Dossier §2: „Der Persona-Block
prägt die Antworten vor“). Codiert mit demselben Codebuch (neue Codes X01–X03); die Kontrollgruppe geht nicht in die
Bewertung (P8) ein. Für Laddering und Analogien gibt es keine Kontrollgruppe.

**Was die Kontrollgruppe prüft – und was nicht:** Sie entfernt nur den Persona-Block. Gleich bleiben P0 (nennt HOLY und
das Markensteuerrad), die Triaden, das Modell und die Profile – und die Profile nennen selbst Pulver (T5), online (T6),
Zucker (T4, T6), YouTube (T3), Instagram (T6) und TikTok (T8). Sie zeigt also nur, ob der Block die Konstrukte allein
erzeugt, nicht, ob die Konstrukte unabhängig oder realistisch sind.

### 2.5 P11

Ein eigener Agent mit P0 und P11 (Dossier Anhang 1: Red Bull und waterdrop als Vergleich), ohne Befragten-Block.
Ergebnis als „KI-gestützt (Tool)“ gekennzeichnet, weil P11 keine Befragten simuliert (Dossier §2, Punkt 5).

### 2.6 Unabhängigkeit

- **Je Person und Gespräch ein eigener Agent** (Unteragent im Workflow), ohne Zugriff auf andere Agenten oder deren
  Antworten. Der Rahmen erlaubt **keine Werkzeuge außer einem einzigen Schreibvorgang** am Ende (die eigene
  JSON-Datei): keine Dateien lesen, nichts durchsuchen, keine Websuche, kein git.
- Gespräch 2 und 3 derselben Person bekommen nur deren **eigene** frühere Antworten als Rückblick (damit die Person
  dieselbe bleibt); Gespräch 2 zusätzlich die konsolidierte Konstruktliste aller Befragten (wie P8 es vorsieht).
- **Grenze der Unabhängigkeit:** Alle Agenten sind Instanzen desselben KI-Tools mit denselben Trainingsdaten. Technisch
  getrennt heißt nicht inhaltlich unabhängig: fast gleiche Formulierungen in verschiedenen Leitern, Aaker-Facetten mit
  demselben Wert bei allen Personen (`analogien-befragung.md` §7).
- Die Interview-Prompts (Gespräch 1, Kontrollgruppe) enthalten keine Hypothesen aus dem Recherche-Dossier (Anhang 2),
  keine vorgegebenen Konstrukte, Tiere oder Adjektive und keine Ergebnisse der Beispielfolien; P8 enthält die
  konsolidierten Konstrukte, P9 die Startpunkte – beides wie im Dossier vorgesehen. Die Hauptgruppe bekam in Gespräch 1
  aber den Persona-Block, der u. a. „ohne Zucker“, Online-Kauf, Pulver, Preis pro Portion, Humor, „Squad“ und Gaming
  nennt; P0 nennt HOLY und das Markensteuerrad; der Name der Idealmarke („mein idealer Drink für jeden Tag“) gibt einen
  Pol vor (K09). P9 nennt die Startpunkte – wie im Dossier – „Eigenschaften der Marke HOLY“; daraus macht der
  simulierte Interviewer bei „für jeden Tag“ in 8 von 8 Gesprächen „HOLY sagt …“ (`laddering.md` §2).

### 2.7 Zeitlicher Ablauf

Der Workflow brach mehrfach am Nutzungslimit ab und wurde jeweils fortgesetzt (KI-Nachweis 122–129 und folgende). Stand der
Rohdaten: Interviews T1–T4 und P11 vom 22.10.2026 vormittags (erster Lauf), T5–T8 und alle acht Kontrollinterviews vom
Nachmittag (T5 und T6 wurden neu erhoben, die Dateien des ersten Laufs überschrieben); Codierung der Konstrukte,
Bewertungen (P8) und Auswertung Analogien/Aaker am Abend; Repertory-Grid-Auswertung, Laddering-Interviews (P9) und
Laddering-Auswertung in der Nacht zum 23.10.2026; diese Synthese am 23.10.2026. Die Prompts stehen unverändert im
Workflow-Skript; die Hinweise zum Neustart betrafen nur die Codieraufträge.

**Laufhistorie im Einzelnen** (aus den Agenten-Protokollen des Workflows, Nacharbeit 23.10.2026):
- **Erstläufe T5 und T6** (22.10.2026, 09:42:40 und 09:43:23 UTC): Beide Agenten schrieben ihre Datei; danach brach der
  Workflow ab. Beim Neustart am Nachmittag liefen T5 und T6 mit **wortgleichem Auftrag** noch einmal (14:04 UTC) und
  überschrieben die Dateien. Die Erstläufe liegen jetzt unverändert in `rohdaten/verworfen-erstlauf/` und werden nicht
  ausgewertet; sie dienen nur dem Vergleich zweier Ziehungen.
- **Zweite Ziehung, Ergebnis** (`auswertung/konstrukte-erstlauf-vergleich.csv`, Codierung des Erstlaufs mit demselben
  Codebuch): In 13 gültigen Triaden wählte die zweite Ziehung 3-mal ein anderes Paar und landete 5-mal bei einem
  anderen Konstrukt (3-mal, wenn zwei Grenzfälle des Erstlaufs anders codiert werden). Etwa jede dritte Triade fällt bei
  erneuter Ziehung also anders aus; die einzige K12-Nennung (T5 Tr. 8) gibt es nur in der zweiten Ziehung. Auch bei den
  Analogien unterscheiden sich die Ziehungen: T6 beschreibt die Beziehung im Erstlauf als „gute Freundin“, im
  ausgewerteten Lauf als „Kumpel“; das „Community-Gefühl“ steht nur im ausgewerteten Lauf. Das Tier blieb gleich
  (Papagei bzw. Delfin). Lesart: Geprüft war bis zur Nacharbeit nur die Robustheit der **Codierung**, nicht die der
  **Ziehung**; Zählungen wie 4/8 oder 5/8 sind Richtungen.
- **Abgebrochene P9-Starts:** Am 22.10.2026 um 09:43, 14:31 und 19:31 UTC startete der Workflow das Laddering zu früh,
  mit dem Fallback-Startpunkt „zuckerfrei“ (Workflow-Skript: `['zuckerfrei']`, wenn noch kein Repertory-Grid-Ergebnis
  vorlag; 4, 8 und 8 Agenten). Alle brachen sofort ab, ohne Antwort und ohne Datei. Ausgewertet sind nur die Läufe vom
  23.10.2026 (00:11–00:16 UTC) mit den Startpunkten „ohne Zucker, für jeden Tag“.

## 3. Prompts als Vorlage (wörtlich aus dem Workflow-Skript)

Platzhalter: `<<ID>>` = T1 … T8, `<<PROFIL>>` = Profil aus §2.1, `<<RÜCKBLICK …>>` = die eigenen Antworten der Person
aus Gespräch 1 als JSON. Pfade sind die Ablageorte der Rohdaten. Der Text ist sonst unverändert (Tippfehler
eingeschlossen) aus `ki-nachweis/workflows/2026-10-22_buendel-b-simulation.js` übernommen.

### 3.1 P0 (Nachricht 1 jedes Gesprächs)

Abwandlung von prompts.md P0: `[MARKE]` = HOLY, `[BRANCHE]` = Energy- und Hydration-Drinks; der Schlusssatz
„Bestätige in einem Satz …“ entfällt, weil alles in einer Nachricht an den Agenten geht.

```text
Du unterstützt eine studentische Gruppe im Modul Unternehmenskommunikation bei einer Fallstudie zur
Markenidentität der Marke HOLY (Branche: Energy- und Hydration-Drinks, Markt: Deutschland).
Theoretischer Rahmen ist das Markensteuerrad nach Esch mit den Feldern Markenkompetenz, Markenattribute,
Markennutzen, Markentonalität und Markenbild.

Regeln:
- Trenne klar zwischen belegten Fakten (immer mit Quelle und Jahr) und Annahmen (kennzeichne sie als [ANNAHME]).
- Erfinde keine Zahlen, Studien, Quellen oder Zitate. Wenn du etwas nicht weißt, schreib "unbekannt".
- Antworte auf Deutsch, strukturiert und knapp.
```

### 3.2 Befragten-Block (Nachricht 2)

Abwandlung von Dossier §2: nur diese eine Person statt T1–T5 in einem Chat.

```text
Verwende in diesem Chat immer genau diese befragte Person (fiktiv) und nenne sie <<ID>>:
<<ID>>: <<PROFIL>>
```

### 3.3 Rahmen für den Agenten (nicht Teil des Gesprächs)

```text
RAHMEN FÜR DICH ALS AGENT (nicht Teil des Gesprächs):
- Du bist ein Unteragent, der genau EINE KI-simulierte befragte Person für eine studentische Fallstudie spielt (alles fiktiv, wird überall als „KI-simuliert“ gekennzeichnet).
- Benutze KEINE Werkzeuge – mit einer Ausnahme: Schreibe am Ende genau die Daten, die du als Ergebnis zurückgibst, als JSON (UTF-8, eingerückt) mit dem Write-Werkzeug nach <<PFAD>>. Lies keine Dateien, durchsuche nichts, keine Websuche, kein git, ki-nachweis/ nicht anfassen.
- Die Projektregel „Fakten über HOLY nur mit Quelle aus dem Dossier“ gilt hier NICHT für deine Rollenantworten: Die Person äußert Eindrücke und Meinungen aus ihrem Alltag (Supermarkt, Werbung, Social Media, Freunde). Sie nennt keine genauen Zahlen, die sie nicht sicher weiß (Preise, mg, Kalorien); Unsicheres sagt sie vage oder mit „weiß nicht“. Die P0-Kennzeichnung [ANNAHME] brauchst du in den Antworten der Person nicht: Alles, was sie sagt, ist ihre Meinung.
- Bleib konsequent in der Rolle: Alltagssprache, kurze Sätze, keine Marketing- oder Theoriebegriffe. Die Person muss HOLY nicht mögen; Kritik, Gleichgültigkeit und Unwissen sind genauso gültig wie Begeisterung.

```

### 3.4 Gespräch 1: P7-Abwandlung mit Interviewteilen (Hauptgruppe, vollständig)

Abwandlung von Dossier Anhang 1 (P7): eine Person statt fünf; Nachfrage „Und wie würdest du die dritte beschreiben?“;
Teile 1, 3, 4, 5 aus dem Interviewleitfaden (Dossier §5, B3); Ausgabe als JSON; keine Zusammenfassung der Konstrukte
durch die KI („Zum Schluss: Liste alle Konstrukte …“ entfällt – gezählt wird per Skript).

```text
RAHMEN FÜR DICH ALS AGENT (nicht Teil des Gesprächs):
- Du bist ein Unteragent, der genau EINE KI-simulierte befragte Person für eine studentische Fallstudie spielt (alles fiktiv, wird überall als „KI-simuliert“ gekennzeichnet).
- Benutze KEINE Werkzeuge – mit einer Ausnahme: Schreibe am Ende genau die Daten, die du als Ergebnis zurückgibst, als JSON (UTF-8, eingerückt) mit dem Write-Werkzeug nach /home/user/Unternehmens-Kommunikation/fallstudie-1-brand-persona/buendel-b/rohdaten/interviews/<<ID>>.json. Lies keine Dateien, durchsuche nichts, keine Websuche, kein git, ki-nachweis/ nicht anfassen.
- Die Projektregel „Fakten über HOLY nur mit Quelle aus dem Dossier“ gilt hier NICHT für deine Rollenantworten: Die Person äußert Eindrücke und Meinungen aus ihrem Alltag (Supermarkt, Werbung, Social Media, Freunde). Sie nennt keine genauen Zahlen, die sie nicht sicher weiß (Preise, mg, Kalorien); Unsicheres sagt sie vage oder mit „weiß nicht“. Die P0-Kennzeichnung [ANNAHME] brauchst du in den Antworten der Person nicht: Alles, was sie sagt, ist ihre Meinung.
- Bleib konsequent in der Rolle: Alltagssprache, kurze Sätze, keine Marketing- oder Theoriebegriffe. Die Person muss HOLY nicht mögen; Kritik, Gleichgültigkeit und Unwissen sind genauso gültig wie Begeisterung.

Nachricht 1 (P0):
Du unterstützt eine studentische Gruppe im Modul Unternehmenskommunikation bei einer Fallstudie zur
Markenidentität der Marke HOLY (Branche: Energy- und Hydration-Drinks, Markt: Deutschland).
Theoretischer Rahmen ist das Markensteuerrad nach Esch mit den Feldern Markenkompetenz, Markenattribute,
Markennutzen, Markentonalität und Markenbild.

Regeln:
- Trenne klar zwischen belegten Fakten (immer mit Quelle und Jahr) und Annahmen (kennzeichne sie als [ANNAHME]).
- Erfinde keine Zahlen, Studien, Quellen oder Zitate. Wenn du etwas nicht weißt, schreib "unbekannt".
- Antworte auf Deutsch, strukturiert und knapp.

Nachricht 2 (Befragten-Block, Abwandlung: nur diese eine Person):
Verwende in diesem Chat immer genau diese befragte Person (fiktiv) und nenne sie <<ID>>:
<<ID>>: <<PROFIL>>

Nachricht 3 (P7-Abwandlung für eine Person, ergänzt um die Interviewteile aus dem Leitfaden, Dossier Bündel B §5):
Simuliere die befragte Person <<ID>> aus der Zielgruppe von HOLY. Grundlage ist diese Persona:
Persona „Marco, 28“ – Kernzielgruppe von HOLY. Die Person ist fiktiv: Name, Beruf, Wohnort und Alltag sind Annahmen.
- Wer: 28, Fachkraft für Lagerlogistik im Drei-Schicht-Betrieb, Realschulabschluss + Ausbildung, mittleres Einkommen, wohnt mit seiner Freundin und einer Katze zur Miete in Dortmund.
- Alltag: Früh-, Spät- und Nachtschicht im Wechsel. In der Freizeit trifft er Freunde, zockt online und geht joggen. Er schaut viel YouTube, ist auf Instagram und TikTok und hört Podcasts.
- Kaufverhalten: Er trinkt mehrmals pro Woche Energy, vor allem vor Spät- und Nachtschichten. HOLY-Pulver bestellt er online in der 50er-Dose auf Vorrat (ca. 0,80 € pro Portion, Mix-&-Match-Rabatt). Vorher hat er Monster aus der Dose getrunken. Bevor er etwas Neues kauft, liest er Bewertungen.
- Motive: Er will wach durch die Schicht kommen: ohne Zucker, aber mit Geschmack. Er will gesünder leben, aber es muss schnell gehen. Er rechnet in Preis pro Portion und mag den Humor und das „Squad“-Gefühl der Marke.
- Nicht: kein Schüler-Gamer. HOLY trinkt er meist nicht beim Zocken (laut Gründer gilt das für die meisten Kund:innen).
Die Persona beschreibt die Zielgruppe der Studie; <<ID>> ist eine eigene Person mit dem Profil aus Nachricht 2 und weiß nur, was diese Person wissen kann. Stelle <<ID>> zuerst in einer Zeile vor.

Teil 1 – Auswahlfragen: „Wie oft trinkst du Energy Drinks?“ „Arbeitest du im Schichtdienst, im Büro oder studierst du?“ „Welche dieser Marken kennst du: Red Bull, Monster, HOLY, Gönrgy, waterdrop, Coca-Cola Zero?“ (nur Marken, die diese Person realistisch kennt)

Teil 2 – Triaden. Elemente: M = HOLY, W1 = Red Bull, W2 = Monster, W3 = Gönrgy, W4 = waterdrop, W5 = Coca-Cola Zero, I = "mein idealer Drink für jeden Tag".
Führe mit <<ID>> diese 8 Triadenvergleiche durch:
1) M–W1–W2  2) M–W3–I  3) W1–W4–I  4) M–W5–W2  5) W2–W3–W4  6) M–W4–I  7) W1–W3–W5  8) M–W5–I
Frage jeweils: "In welcher wichtigen Hinsicht sind sich zwei dieser Marken ähnlich und unterscheiden sich von der dritten?" Nachfrage: "Und wie würdest du die dritte beschreiben?"
Notiere pro Triade das bipolare Konstrukt (Pol – Gegenpol) im Wortlaut der befragten Person: pol_paar = was die zwei ähnlichen gemeinsam haben, pol_einzeln = wie die dritte ist; paar/einzeln als Kürzel (M, W1 … W5, I); wortlaut = ein bis zwei Sätze Originalton. Kennt die Person eine Marke der Triade nicht, wird die Triade übersprungen (uebersprungen = true, grund nennen, Pole leer). Antworte so, wie echte Konsument:innen sprechen würden, nicht in Marketing-Fachsprache.

Teil 3 – Analogien (offen gefragt, nichts vorgeschlagen): „Wenn HOLY ein Tier wäre – welches, und warum? Nenn drei Gründe.“ „Wenn HOLY ein Mensch wäre – wie wäre die Person? Alter, Beruf, Stil, wie verhält sie sich auf einer Party, welche Beziehung hat sie zu ihren Kund:innen? Drei Gründe.“ „Welche drei Gefühle verbindest du mit HOLY?“ „Gibt es ein Erlebnis oder einen Moment, an den du bei HOLY denkst?“ Kennt die Person HOLY kaum, antwortet sie nach ihrem Eindruck oder sagt „weiß nicht“.

Teil 4 – Markenpersönlichkeit (Bogen nach Aaker; 1 = trifft gar nicht zu, 5 = trifft voll zu): Bewerte HOLY, Red Bull und waterdrop je mit diesen 15 Eigenschaften: bodenständig, ehrlich, gesund, fröhlich, gewagt, temperamentvoll, fantasievoll, zeitgemäß, zuverlässig, intelligent, erfolgreich, vornehm, charmant, naturverbunden, robust. Schlüssel in „werte“ genau so schreiben (mit Umlauten). Kennt die Person eine Marke nicht: bekannt = false, alle Werte null.

Teil 5 – zum Schluss: „Hast du HOLY schon gekauft?“
```

### 3.5 Kontrollgruppe: P7-Abwandlung ohne Persona-Block (vollständig)

```text
RAHMEN FÜR DICH ALS AGENT (nicht Teil des Gesprächs):
- Du bist ein Unteragent, der genau EINE KI-simulierte befragte Person für eine studentische Fallstudie spielt (alles fiktiv, wird überall als „KI-simuliert“ gekennzeichnet).
- Benutze KEINE Werkzeuge – mit einer Ausnahme: Schreibe am Ende genau die Daten, die du als Ergebnis zurückgibst, als JSON (UTF-8, eingerückt) mit dem Write-Werkzeug nach /home/user/Unternehmens-Kommunikation/fallstudie-1-brand-persona/buendel-b/rohdaten/kontrolle/<<ID>>.json. Lies keine Dateien, durchsuche nichts, keine Websuche, kein git, ki-nachweis/ nicht anfassen.
- Die Projektregel „Fakten über HOLY nur mit Quelle aus dem Dossier“ gilt hier NICHT für deine Rollenantworten: Die Person äußert Eindrücke und Meinungen aus ihrem Alltag (Supermarkt, Werbung, Social Media, Freunde). Sie nennt keine genauen Zahlen, die sie nicht sicher weiß (Preise, mg, Kalorien); Unsicheres sagt sie vage oder mit „weiß nicht“. Die P0-Kennzeichnung [ANNAHME] brauchst du in den Antworten der Person nicht: Alles, was sie sagt, ist ihre Meinung.
- Bleib konsequent in der Rolle: Alltagssprache, kurze Sätze, keine Marketing- oder Theoriebegriffe. Die Person muss HOLY nicht mögen; Kritik, Gleichgültigkeit und Unwissen sind genauso gültig wie Begeisterung.

Nachricht 1 (P0):
Du unterstützt eine studentische Gruppe im Modul Unternehmenskommunikation bei einer Fallstudie zur
Markenidentität der Marke HOLY (Branche: Energy- und Hydration-Drinks, Markt: Deutschland).
Theoretischer Rahmen ist das Markensteuerrad nach Esch mit den Feldern Markenkompetenz, Markenattribute,
Markennutzen, Markentonalität und Markenbild.

Regeln:
- Trenne klar zwischen belegten Fakten (immer mit Quelle und Jahr) und Annahmen (kennzeichne sie als [ANNAHME]).
- Erfinde keine Zahlen, Studien, Quellen oder Zitate. Wenn du etwas nicht weißt, schreib "unbekannt".
- Antworte auf Deutsch, strukturiert und knapp.

Nachricht 2 (Befragten-Block, Abwandlung: nur diese eine Person):
Verwende in diesem Chat immer genau diese befragte Person (fiktiv) und nenne sie <<ID>>:
<<ID>>: <<PROFIL>>

Nachricht 3 (P7-Abwandlung für eine Person, KONTROLLGRUPPE: ohne Persona-Block):
Simuliere die befragte Person <<ID>>. Stelle <<ID>> zuerst in einer Zeile vor.

Teil 1 – Auswahlfragen: „Wie oft trinkst du Energy Drinks?“ „Arbeitest du im Schichtdienst, im Büro oder studierst du?“ „Welche dieser Marken kennst du: Red Bull, Monster, HOLY, Gönrgy, waterdrop, Coca-Cola Zero?“ (nur Marken, die diese Person realistisch kennt)

Teil 2 – Triaden. Elemente: M = HOLY, W1 = Red Bull, W2 = Monster, W3 = Gönrgy, W4 = waterdrop, W5 = Coca-Cola Zero, I = "mein idealer Drink für jeden Tag".
Führe mit <<ID>> diese 8 Triadenvergleiche durch:
1) M–W1–W2  2) M–W3–I  3) W1–W4–I  4) M–W5–W2  5) W2–W3–W4  6) M–W4–I  7) W1–W3–W5  8) M–W5–I
Frage jeweils: "In welcher wichtigen Hinsicht sind sich zwei dieser Marken ähnlich und unterscheiden sich von der dritten?" Nachfrage: "Und wie würdest du die dritte beschreiben?"
Notiere pro Triade das bipolare Konstrukt (Pol – Gegenpol) im Wortlaut der befragten Person: pol_paar, pol_einzeln, paar/einzeln als Kürzel, wortlaut = ein bis zwei Sätze Originalton. Unbekannte Marke in der Triade → überspringen mit Grund. Antworte so, wie echte Konsument:innen sprechen würden, nicht in Marketing-Fachsprache.
```

### 3.6 Gespräch 2: P8-Abwandlung (vollständig)

Abwandlung von prompts.md P8: eine Person; Rückblick auf die eigenen Antworten; Ausgabe als JSON statt CSV; null für
unbekannte Marken; Kommentar. Eingesetzte Konstruktliste (aus dem Codebuch, Format des Skripts):

```text
K01: Zuckerbombe (1) – ohne Zucker (7)
K02: gibt's überall (1) – online bestellen (7)
K03: aufmachen, fertig (1) – selbst anrühren (7)
K04: knallt, macht wach (1) – weniger Kick (7)
K05: einfach, ohne Hype (1) – Influencer-Zeug (7)
K06: kennt jeder (1) – neu, Ausprobieren (7)
K07: laut, für Zocker (1) – ruhig, ganz normal (7)
K08: günstig (1) – eher teuer (7)
K09: Kick für Notfälle (1) – für jeden Tag (7)
K10: schmeckt natürlich (1) – schmeckt künstlich (7)
K11: zu wässrig (1) – schmeckt nach was (7)
K12: weiß, was ich zahle (1) – keine Ahnung vom Preis (7)
```

```text
RAHMEN FÜR DICH ALS AGENT (nicht Teil des Gesprächs):
- Du bist ein Unteragent, der genau EINE KI-simulierte befragte Person für eine studentische Fallstudie spielt (alles fiktiv, wird überall als „KI-simuliert“ gekennzeichnet).
- Benutze KEINE Werkzeuge – mit einer Ausnahme: Schreibe am Ende genau die Daten, die du als Ergebnis zurückgibst, als JSON (UTF-8, eingerückt) mit dem Write-Werkzeug nach /home/user/Unternehmens-Kommunikation/fallstudie-1-brand-persona/buendel-b/rohdaten/bewertungen/<<ID>>.json. Lies keine Dateien, durchsuche nichts, keine Websuche, kein git, ki-nachweis/ nicht anfassen.
- Die Projektregel „Fakten über HOLY nur mit Quelle aus dem Dossier“ gilt hier NICHT für deine Rollenantworten: Die Person äußert Eindrücke und Meinungen aus ihrem Alltag (Supermarkt, Werbung, Social Media, Freunde). Sie nennt keine genauen Zahlen, die sie nicht sicher weiß (Preise, mg, Kalorien); Unsicheres sagt sie vage oder mit „weiß nicht“. Die P0-Kennzeichnung [ANNAHME] brauchst du in den Antworten der Person nicht: Alles, was sie sagt, ist ihre Meinung.
- Bleib konsequent in der Rolle: Alltagssprache, kurze Sätze, keine Marketing- oder Theoriebegriffe. Die Person muss HOLY nicht mögen; Kritik, Gleichgültigkeit und Unwissen sind genauso gültig wie Begeisterung.

Nachricht 1 (P0):
Du unterstützt eine studentische Gruppe im Modul Unternehmenskommunikation bei einer Fallstudie zur
Markenidentität der Marke HOLY (Branche: Energy- und Hydration-Drinks, Markt: Deutschland).
Theoretischer Rahmen ist das Markensteuerrad nach Esch mit den Feldern Markenkompetenz, Markenattribute,
Markennutzen, Markentonalität und Markenbild.

Regeln:
- Trenne klar zwischen belegten Fakten (immer mit Quelle und Jahr) und Annahmen (kennzeichne sie als [ANNAHME]).
- Erfinde keine Zahlen, Studien, Quellen oder Zitate. Wenn du etwas nicht weißt, schreib "unbekannt".
- Antworte auf Deutsch, strukturiert und knapp.

Nachricht 2 (Befragten-Block):
Verwende in diesem Chat immer genau diese befragte Person (fiktiv) und nenne sie <<ID>>:
<<ID>>: <<PROFIL>>

Rückblick – das hat <<ID>> im ersten Gespräch selbst gesagt (deine eigenen Antworten; bleib dabei, auch bei den Marken, die die Person nicht kennt):
<<RÜCKBLICK als JSON: vorstellung, auswahlfragen, triaden, holy_gekauft aus dem ersten Gespräch>>

Nachricht 3 (P8 aus prompts.md, für diese eine Person; Ausgabe als JSON statt CSV):
Hier sind die konsolidierten Konstrukte (aus den Antworten aller Befragten zusammengefasst):
<<KONSTRUKTLISTE: je Zeile „Kxx: linker Pol (1) – rechter Pol (7)“>>

Elemente: M = HOLY, W1 = Red Bull, W2 = Monster, W3 = Gönrgy, W4 = waterdrop, W5 = Coca-Cola Zero, I = "mein idealer Drink für jeden Tag".
Bewerte als <<ID>> alle Elemente (M, W1–W5, I) auf jedem Konstrukt mit 1 (linker Pol) bis 7 (rechter Pol). Eine Marke, die <<ID>> nicht kennt, bekommt null. „konstrukt“ = die Kennung (K01 …). Keine Mittelwerte berechnen. In „kommentar“ ein, zwei Sätze, was der Person beim Bewerten schwerfiel.
```

### 3.7 Gespräch 3: P9-Abwandlung (vollständig)

Abwandlung aus Dossier Anhang 1 (P9 mit Prüffrage vor jeder Leiter): eine Person; Rückblick; Startpunkte aus dem
Repertory Grid (Rückfall, „Startpunkt, kein Attribut“); Zusatz zur Ausgabe (Stufen mit Ebene, mehrere Stufen derselben
Ebene erlaubt).

```text
RAHMEN FÜR DICH ALS AGENT (nicht Teil des Gesprächs):
- Du bist ein Unteragent, der genau EINE KI-simulierte befragte Person für eine studentische Fallstudie spielt (alles fiktiv, wird überall als „KI-simuliert“ gekennzeichnet).
- Benutze KEINE Werkzeuge – mit einer Ausnahme: Schreibe am Ende genau die Daten, die du als Ergebnis zurückgibst, als JSON (UTF-8, eingerückt) mit dem Write-Werkzeug nach /home/user/Unternehmens-Kommunikation/fallstudie-1-brand-persona/buendel-b/rohdaten/leitern/<<ID>>.json. Lies keine Dateien, durchsuche nichts, keine Websuche, kein git, ki-nachweis/ nicht anfassen.
- Die Projektregel „Fakten über HOLY nur mit Quelle aus dem Dossier“ gilt hier NICHT für deine Rollenantworten: Die Person äußert Eindrücke und Meinungen aus ihrem Alltag (Supermarkt, Werbung, Social Media, Freunde). Sie nennt keine genauen Zahlen, die sie nicht sicher weiß (Preise, mg, Kalorien); Unsicheres sagt sie vage oder mit „weiß nicht“. Die P0-Kennzeichnung [ANNAHME] brauchst du in den Antworten der Person nicht: Alles, was sie sagt, ist ihre Meinung.
- Bleib konsequent in der Rolle: Alltagssprache, kurze Sätze, keine Marketing- oder Theoriebegriffe. Die Person muss HOLY nicht mögen; Kritik, Gleichgültigkeit und Unwissen sind genauso gültig wie Begeisterung.

Nachricht 1 (P0):
Du unterstützt eine studentische Gruppe im Modul Unternehmenskommunikation bei einer Fallstudie zur
Markenidentität der Marke HOLY (Branche: Energy- und Hydration-Drinks, Markt: Deutschland).
Theoretischer Rahmen ist das Markensteuerrad nach Esch mit den Feldern Markenkompetenz, Markenattribute,
Markennutzen, Markentonalität und Markenbild.

Regeln:
- Trenne klar zwischen belegten Fakten (immer mit Quelle und Jahr) und Annahmen (kennzeichne sie als [ANNAHME]).
- Erfinde keine Zahlen, Studien, Quellen oder Zitate. Wenn du etwas nicht weißt, schreib "unbekannt".
- Antworte auf Deutsch, strukturiert und knapp.

Nachricht 2 (Befragten-Block):
Verwende in diesem Chat immer genau diese befragte Person (fiktiv) und nenne sie <<ID>>:
<<ID>>: <<PROFIL>>

Rückblick – so hat sich <<ID>> vorgestellt und das weiß die Person über die Marken (eigene Antworten aus dem ersten Gespräch):
<<RÜCKBLICK als JSON: vorstellung, auswahlfragen, holy_gekauft aus dem ersten Gespräch>>

Nachricht 3 (P9-Abwandlung aus dem Dossier Bündel B, Anhang 1):
Führe ein Laddering-Interview nach der Means-End-Chain-Theorie (Gutman; Reynolds & Gutman) mit <<ID>> aus meiner vorigen Nachricht.

Startpunkte sind diese Eigenschaften der Marke HOLY: ohne Zucker, für jeden Tag.

Frage zuerst, ob die Eigenschaft der Person beim Kauf wichtig ist. Wenn nicht, keine Leiter, sondern kurz begründen.
Frage sonst pro Eigenschaft wiederholt "Warum ist dir das wichtig?", bis ein persönlicher Wert erreicht ist (mindestens 3 Stufen). Gib das Interview als Dialog wieder.
Fasse danach jede Leiter als Kette zusammen:
Attribut → funktionale Konsequenz → psychosoziale Konsequenz → Wert
(Im Ergebnis: „stufen“ in der Reihenfolge der Leiter, jede Stufe mit ihrer Ebene; mehrere Stufen derselben Ebene sind erlaubt. Ist eine Eigenschaft unwichtig: wichtig = false, stufen leer.)
```

### 3.8 P11 (vollständig)

```text
RAHMEN: Du bist ein Unteragent und führst genau diesen einen Chat aus (Prompt P11 der Gruppe, „KI-gestützt (Tool)“, simuliert KEINE Befragten). Benutze keine Werkzeuge außer einmal Write am Ende: Schreibe deine vollständige Antwort als Markdown nach /home/user/Unternehmens-Kommunikation/fallstudie-1-brand-persona/buendel-b/rohdaten/p11-ki.md (Kopf: „P11 – KI-gestützt (Tool), Lauf vom 22.10.2026 im Workflow D25; Antwort unverändert“). Lies keine Dateien, keine Websuche, kein git, ki-nachweis/ nicht anfassen. Was du über Red Bull und waterdrop sagst, ist Modellwissen – kennzeichne es.

Nachricht 1 (P0):
Du unterstützt eine studentische Gruppe im Modul Unternehmenskommunikation bei einer Fallstudie zur
Markenidentität der Marke HOLY (Branche: Energy- und Hydration-Drinks, Markt: Deutschland).
Theoretischer Rahmen ist das Markensteuerrad nach Esch mit den Feldern Markenkompetenz, Markenattribute,
Markennutzen, Markentonalität und Markenbild.

Regeln:
- Trenne klar zwischen belegten Fakten (immer mit Quelle und Jahr) und Annahmen (kennzeichne sie als [ANNAHME]).
- Erfinde keine Zahlen, Studien, Quellen oder Zitate. Wenn du etwas nicht weißt, schreib "unbekannt".
- Antworte auf Deutsch, strukturiert und knapp.

Nachricht 2 (P11, Abwandlung Dossier Bündel B Anhang 1: [W1]/[W2] = Red Bull/waterdrop):
Stell dir vor, die Marke HOLY wäre ein Mensch. Beschreibe: Alter, Geschlecht, Beruf, Wohnort, Kleidungsstil, Hobbys, wie die Person spricht, welches Auto sie fährt, wie sie sich auf einer Party verhält und welche Beziehung sie zu ihren Kund:innen hat (z. B. Freund, Mentor, Entertainer, Dienstleister).
Stell dir dann vor, HOLY wäre ein Tier: Welches und warum (3 Gründe)?

Mache dasselbe für Red Bull und waterdrop zum Vergleich.

Leite anschließend für HOLY ab:
- 4–5 Persönlichkeitsmerkmale
- die dominanten Markenemotionen
- die Zuordnung zu den Dimensionen der Brand Personality Scale nach Aaker (Aufrichtigkeit, Spannung, Kompetenz, Kultiviertheit, Robustheit)

Gib als Ergebnis den vollständigen Antworttext zurück.
```

Die Aufträge an die auswertenden Agenten (Codieren, Repertory Grid, Laddering, Analogien, Synthese, Prüfung) stehen im
selben Skript (Konstante `ANALYSE` und die Aufträge danach). Sie enthalten die festen Regeln: Rechnen nur per Skript,
Codebücher mit Definition und Beispielen, jede Zuordnung als CSV-Zeile, Anhang 2 erst nach der eigenen Codierung
lesen, Kennzeichnung „KI-simuliert“. **Blind gegenüber der Hypothese waren die Codierer trotzdem nicht:** Die Aufträge
nannten Vergleichsbegriffe schon vor dem Codieren – beim Laddering die Kette der Beispielfolie 07 („zuckerfrei → Genuss
ohne Zucker → gutes Gewissen → Gesundheit“), bei den Analogien Comedian, Papagei, Chamäleon und „frecher Kumpel“
(`codierung/analogien-protokoll.md` §1). Bei beiden widerspricht das Ergebnis der genannten Hypothese.

## 4. Auswahl- und Zählregeln mit Zeitpunkt

| Regel | Inhalt | festgelegt |
|---|---|---|
| Codierregeln Konstrukte R0–R12 | Einheit = gültige Triade; Hauptcode nach Wortlaut; Nebenaspekte zählen nicht; Ausrichtung rechts = HOLY-typisch | 22.10.2026 im ersten Codierlauf, im Neustart Zeile für Zeile geprüft (`konstrukte-protokoll.md`) |
| R13 | HOLY-Seite in den Nebenaspekten nach Triaden-Logik | 22.10.2026 im Neustart der Codierung |
| R9 Gleichstand | Bei Gleichstand der HOLY-Seite entscheiden Nebenaspekte, dann Kontrollgruppe | 22.10.2026 im Neustart, **nachdem** der Gleichstand bei K04 sichtbar war; ändert nur die Richtung von K04, nicht die Auswahl (Abstände sind richtungsunabhängig) |
| Auswahlregel Repertory Grid | Relevanz ≥ 3 von 8 Befragten · Differenzierung ≥ 1,0 · Ideal-Distanz ≤ 1,0 · Hürde · stärkster Wettbewerber · Rückfall bei < 2 Attributen | 22.10.2026 im Auftrag an den Agenten, **vor** der ersten Antwort (laut Prüfbericht Methodik: der Commit mit der Regel liegt vor dem ersten Interview); Umsetzungsdetails (Skalenmitte 4, Auffüllen bis 2, Vorrang Relevanz) legte der auswertende Agent im Skript fest – **nach** Vorliegen der Nennungen und Bewertungen, aber vor dem ersten Skriptlauf; im Auftrag waren sie nicht vorgegeben. Ohne den Vorrang der Relevanz wäre K12 statt K09 zweiter Startpunkt |
| Laddering | nur direkte Verbindungen, je Leiter einmal; Cut-off ≥ 2 Leitern; stärkste Leiter = größte kleinste Kantenzahl, dann Summe, dann Länge | Cut-off 22.10.2026 im Auftrag, vor dem Rechnen; Regel der stärksten Leiter im Skript vor dem Lauf |
| Analogien | Zählung als verschiedene Befragte (höchstens 8); Synonyme nur bei echten Synonymen; Obergruppen nur zusätzlich | 22.10.2026 beim Codieren, vor dem Skriptlauf (Regeln A0–A12) |
| Aaker | Facetten → Dimensionen nach Aaker (1997); Dimension je Person = Mittel ihrer Facetten (null ausgelassen), dann Mittel über alle, die die Marke kennen | 22.10.2026 im Auftrag, vor dem Rechnen |

Die Auswahlregel ergab **kein** Attribut. Sie wurde nicht geändert; die Startpunkte bestimmte die vorher festgelegte
Rückfallregel.

## 5. Rechenwege

Alle Zahlen kommen aus deterministischen Python-3-Skripten in `auswertung/`; jedes Skript enthält im Kopfkommentar
die Formeln und die Entsprechung in Google Sheets. Die Formeln folgen methoden.md §2 und §3.

| Skript | rechnet | Formeln (Auszug) |
|---|---|---|
| `pruefe_konstrukte_codierung.py` | prüft Codierung gegen Rohdaten, zählt Nennungen und Befragte je Code (Haupt- und Kontrollgruppe), wendet R9 an; seit der Nacharbeit: Idealmarke bei K09, Haupt ↔ Kontrolle je Triade, Erstlauf ↔ ausgewerteter Lauf, Wirkung der Grenzfälle | `=ZÄHLENWENNS(zuordnung!A:A;"haupt";zuordnung!I:I;A2)` |
| `repertory_grid.py` | Mittelwerte je Element (null ausgelassen, n je Zelle), Ø W, Differenzierung, Ideal-Distanz, stärkster Wettbewerber, Auswahl | Ø W = (Ø W1 + … + Ø W5) / 5 · Differenzierung = \|Ø M − Ø W\| · Ideal-Distanz = \|Ø M − Ø I\| · in Sheets `=MITTELWERTWENNS(…)`, `=ABS(B2-I2)` |
| `laddering.py` | Implikationsmatrix (direkte Verbindungen, je Leiter einmal), HVM über dem Cut-off, Abbrüche, stärkste Leiter, Robustheit; seit der Nacharbeit: Stimmigkeit der Prüffrage „ohne Zucker“ mit Gespräch 1 und 2, Zuschreibung an HOLY in der ersten Frage | Zelle (A, B) = Zahl der Leitern, in denen B direkt auf A folgt |
| `analogien_aaker.py` | Häufigkeiten (verschiedene Befragte), Obergruppen, Aaker-Mittel je Person und Marke; seit der Nacharbeit: Spanne je Facette | Dimension = Mittel der Facetten; `=WENNFEHLER(MITTELWERT(C2:F2);"")` |
| `pruefe_rohdaten.py` (neu, Nacharbeit) | Kennzeichnung „KI-simuliert“ je Rohdatei und Feld; wiederkehrende Wörter (Schablonen, Klischees) als Zahl verschiedener Personen | Treffer je Person 0/1, Summe über 8 |
| `pruefe_synthese.py` | prüft die Zahlen in `folienvorschlag.md` gegen die CSV-Dateien, zählt die Wörter der Sprechtexte, spielt die Anzeige der Folienskripte nach; seit der Nacharbeit: Wortbudget Folie 10, Wortgleichheit 07/08b ↔ 10, „simuliert“ bei Zahlen über die Personen | Wörter / 1,9 = Sekunden |

Rundung: Gerechnet wird ungerundet (Repertory Grid mit exakten Brüchen), gerundet erst in der Ausgabe auf zwei
Nachkommastellen (kaufmännisch, wie RUNDEN in Sheets), Dezimalkomma. Alle Schwellen werden an ungerundeten Werten
geprüft. Handprüfungen stehen in den Kopfkommentaren; ein erneuter Lauf aller vier Auswertungsskripte am 23.10.2026
ergab identische Ausgabedateien. In der Nacharbeit bekam jede Ausgabe-CSV eine letzte Spalte „quelle“ (Kennzeichnung
„KI-simuliert“); alle übrigen Werte sind gleich geblieben (Vergleich mit dem Stand vor der Nacharbeit), außer der
Persona-Spalte von K05 („Grenzfall“ statt „nein“).

## 6. Abweichungen vom Dossier Bündel B – mit Begründung

| Nr. | Dossier | Hier | Begründung |
|---|---|---|---|
| 1 | 5 simulierte Befragte T1–T5 | 8 (T6–T8 ergänzt) | Keine echten Interviews; die Kriterien aus §5 (Kundin, Einmal-Käufer, Nie-Käufer aus Videos) sollten wenigstens simuliert abgedeckt sein |
| 2 | 3–5 echte Kurzinterviews, Kundenstimmen als dritte Quelle (§5, §6) | keine | Lukas liefert kein Material; Auftrag Yannick 22.10.2026. Folge: Die Lesart „in beiden → tragfähig“ (§5) ist nicht anwendbar; alles bleibt Hypothese |
| 3 | ein Chat für alle fünf Befragten (Chat A, B, C) | je Person und Gespräch ein eigener Agent | Unabhängigkeit: Keine Person sieht die Antworten der anderen |
| 4 | Persona-Block voll (Standard) oder gekürzt (Alternative, nur nach Absprache) | voll in der Hauptgruppe, zusätzlich Kontrollgruppe ganz ohne Block | Prüfen, welche Konstrukte der Block vorprägt, ohne den Standard zu verlassen |
| 5 | P7 mit KI-Zusammenfassung der Konstrukte am Ende | ohne; Konstrukte vom auswertenden Agenten codiert, per Skript gezählt | Dossier B1: Nennungen selbst zählen; KI-Zählung ersetzt die eigene nicht |
| 6 | Konsolidieren und Rechnen durch Lukas in Sheets | Codierung durch ein KI-Tool, Rechnen per Python-Skript (Formeln für Sheets im Skript) | Kein Bearbeiter in Bündel B; Rechnen nie durch das Sprachmodell. Prüfung durch die Gruppe offen |
| 7 | Auswahlregel „z. B. viele Nennungen, Abstand ≥ 1, kleine Ideal-Distanz“; B4 der Präsentation mit ≥ 6 Nennungen und Abstand ≥ 1,5 | Relevanz ≥ 3 von 8 Befragten, Abstand ≥ 1,0, Ideal-Distanz ≤ 1,0 | Schwelle wie Aufgaben B1 (§10, Punkt 8); Relevanz in Befragten, damit eine gesprächige Person nicht allein zählt |
| 8 | 3–5 Attribute als Startpunkte fürs Laddering | keine Attribute; zwei Startpunkte nach der Rückfallregel | Regel ergab 0 Attribute; Regel nicht nachträglich geändert |
| 9 | Laddering mit P9, Startpunkte = Attribute | Startpunkte sind keine Markeneigenschaften; Leitern nur KI-simuliert | wie 8; echte Leitern fehlen |
| 10 | Aaker-Bogen nur von Menschen (B3, Punkt 5) | von den 8 simulierten Personen | Keine Menschen verfügbar; als „KI-simuliert“ gekennzeichnet, Grenzen in `analogien-befragung.md` §7 |
| 11 | Analogien erst ohne KI in der Gruppe, Umfeld, dann P11, dann Vergleich | Tierfrage offen in den simulierten Interviews, P11 einmal; Gruppe und Umfeld nicht befragt | Keine Gruppenergebnisse in Bündel B vorhanden; Elias' Ausarbeitung (Folie 08) als zweite Quelle verglichen |
| 12 | Mensch und Tier auch für zwei Wettbewerber | in der Befragung nur für HOLY; Wettbewerber nur im Aaker-Bogen und in P11 | Interviewlänge; P11 deckt den Vergleich ab (KI-gestützt) |
| 13 | Wettbewerbsset und Idealmarke von der Gruppe bestätigen (§10, Punkt 1, 2) | Vorschlag des Dossiers übernommen | Keine Bestätigung dokumentiert; die Idealmarke „für jeden Tag“ macht Coca-Cola Zero zum stärksten Wettbewerber |
| 14 | Chats als PDF sichern, KI-Liste von Lukas | Rohdaten als JSON in `rohdaten/`, Nachweis im KI-Nachweis (Workflow D25) | Ablauf über Unteragenten; Dateien sind die Belege |
| 15 | P8 „im selben Chat A“ (§3 B1, Schritt 4), also mit dem Persona-Block aus P7 im Verlauf | P8 in einem neuen Agenten **ohne** Persona-Block; Rückblick auf die eigenen Antworten aus Gespräch 1 (Vorstellung, Auswahlfragen, Triaden, Kauf) | Je Gespräch ein eigener Agent (Unabhängigkeit, Nr. 3); der Rückblick hält die Person gleich. Folge: Der Block wirkt auf die Bewertungen nur mittelbar. Bis zur Nacharbeit nicht dokumentiert (README nannte den Block „in allen drei Gesprächen“) |
| 16 | P9 im Chat B für T1, dann im selben Chat für T2–T5 (Befragten-Block, kein Rückblick) | je Person ein neuer Agent ohne Persona-Block, mit Rückblick nur auf Vorstellung, Auswahlfragen und Kauf | Unabhängigkeit; die Person soll dieselbe bleiben. Folge: Triaden und Bewertungen fehlten im Rückblick – 4 von 8 bejahen „ohne Zucker“ gegen ihre eigenen früheren Antworten (`laddering.md` §2). Für einen späteren Lauf Triaden und K01-Bewertung aufnehmen |

## 7. Prüfungen

- **In den Skripten:** gültiges JSON, Vollständigkeit (8 Bewertungsdateien × 12 Konstrukte × 7 Elemente), Werte nur
  1–7 bzw. 1–5, null nur bei unbekannten Marken (gegen die Auswahlfragen), jeder codierte Ausschnitt steht wörtlich in
  den Rohdaten, jede gültige Triade genau eine Zeile.
- **Handprüfungen** im Kopf von `repertory_grid.py` und `laddering.py`; Robustheit der Laddering-Codierung (12
  Alternativen); deterministische Wiederholung.
- **Synthese:** `auswertung/pruefe_synthese.py` prüft jeden JSON-Block im Folienvorschlag gegen die CSV-Dateien und
  zählt die Sprechtexte.
- **Drei unabhängige Prüfer** (23.10.2026; Methodik und Kennzeichnung, Nachrechnen mit eigenen Skripten, Plausibilität
  und Verzerrung): keine Rechenfehler; Befunde zu Rahmung, Kennzeichnung, Design und Verzerrung. Umgesetzt in der
  Nacharbeit am 23.10.2026: Folie 10 (Kennzeichnung, Nutzen, Tonalität), Kontrollgruppe enger gelesen, K09 als Echo der
  Idealmarke, Modellbezeichnung aus `rohdaten/p11-ki.md` entfernt, Design richtiggestellt, Laufhistorie und zweite
  Ziehung, Stimmigkeit des Laddering, Abgleich mit dem Desk Research, Klischees, Grenzfälle der Codierung, Spalte
  „quelle“ in allen Ausgabe-CSV, Rundungsvorschlag B4.
- **Neue Prüfungen in den Skripten:** Grenzfälle der Konstrukt-Codierung (Relevanz bleibt bei jeder Variante gleich),
  Haupt ↔ Kontrolle je Triade, zweite Ziehung T5/T6, Stimmigkeit der Laddering-Prüffrage, Spanne der Aaker-Facetten,
  Kennzeichnung und Schablonen in den Rohdaten (`pruefe_rohdaten.py`), Wortbudget und Wortgleichheit Folie 10.
- **Prüfung durch die Gruppe: ☐ offen** (Vorschlag: zehn Konstrukt-Zeilen nachcodieren, gezielt die Grenzfälle aus
  `codierung/konstrukte-grenzfaelle.csv`; dazu die Gefühle und die Tiergründe).

## 8. Auffälligkeiten (Rohdaten der simulierten Personen nicht geändert)

- **`rohdaten/p11-ki.md`** nannte in der Kennzeichnungszeile eine Modellbezeichnung – entgegen der Projektregel. In der
  Nacharbeit am 23.10.2026 wurde nur diese Kennzeichnungszeile geändert (Modellbezeichnung entfernt, Änderung in der
  Zeile vermerkt); die Antwort selbst ist unverändert. P11 simuliert keine Befragten.
- **Kennzeichnung in den Rohdaten uneinheitlich:** Von 48 geprüften Feldern `befragte` bzw. `vorstellung` tragen 16 kein
  „KI-simuliert“ (`auswertung/rohdaten-kennzeichnung.csv`): `befragte` in interviews/T1, T2, T3, T5, T6, T7, T8,
  kontrolle/T2, T3, T4, T7, bewertungen/T6, T8; `vorstellung` in kontrolle/T1, T6, T8. Umgekehrt steht in
  `interviews/T4.json` im Feld `befragte` „T4 (fiktiv, KI-simuliert)“ statt „T4“. Die Skripte nutzen die Dateinamen
  T1–T8; es gilt die Kennzeichnung über Ordner und README: **alles in `rohdaten/` ist KI-simuliert.**
- In mehreren Polen und Wortlauten steht der Künstlername des öffentlich bekannten Gründers von Gönrgy (Rohdaten
  unverändert, weil die Skripte die Pole wörtlich vergleichen); in eigenen Texten steht „[Streamer]“. Die Gruppe
  entscheidet, ob das so bleibt.
- **T1 ist fast ein Echo der Persona:** Das Profil (Mann, 28, Schichtdienst Logistik) deckt sich mit „Marco, 28“, und
  T1 übernimmt dessen Details – Umstieg von Monster, Vorrat online, zwei Sorten wegen Rabatt, die Freundin. Eine der nur
  zwei Stammkund:innen-Stimmen ist damit im Kern die Persona; Aussagen über „die Stammkund:innen (2/8)“ entsprechend
  vorsichtig lesen.
- **Reproduzierte Klischees** (Stenger, S. 78: Stereotype wirken objektiv): (a) Profile – die drei Frauen arbeiten in
  Pflege, Büro und Fitness, zwei Profile nennen ausdrücklich Zucker (T4, T6); alle, die viel aus der Dose trinken,
  sind Männer (T3, T5, T7; T1 früher). (b) Antworten –
  Gaming wird männlich-jung gezeichnet, Frauen als Gegenpol („kann man als Frau ganz normal trinken, wirkt nicht
  prollig“ ↔ „Jungs, Zocker und Autotuner“, T2); als K07 codiert, das damit Gaming, Geschlecht und Milieu mischt.
  (c) Die Markenperson hat das Geschlecht der simulierten Person (`analogien-befragung.md` §11). (d) Die Spitzen der
  Leitern folgen Rollenbildern: bei den Frauen Körper und Gesundheit (T4), Verantwortung für Patient:innen (T2), Vorbild
  sein (T6); bei den Männern das Team (T1, T3), Job und Familie versorgen (T5), Stolz auf die eigene Arbeit (T8). (e) Szenen aus dem
  Schichtalltag: „Tanke“ in 8 von 8 Interviews und 8 von 8 Kontrollinterviews, dagegen laut Recherche-Dossier 46,8 %
  des Absatzes über Discounter und 74 % Konsum zu Hause (Kap. 5.1 ✔ [65]). Kleidung der Markenperson: Sneaker 7/8, Cap
  6/8, Hoodie 5/8. Zählungen: `auswertung/rohdaten-muster.csv`.
- **Schablonen statt Streuung:** Die Profile prägen die Antworten stark; Formulierungen wie „nicht der … sein, wegen dem
  / bei dem …“ kehren in 4 von 8 Laddering-Gesprächen fast wörtlich wieder, „verkaufen“ in 7 von 8 Antworten auf die
  Beziehungsfrage. Die Sprache klingt alltagsnah, die Struktur ist idealisiert: jede Triade sauber zweipolig, jede
  Leiter erreicht in 5 bis 7 Stufen einen Wert (`auswertung/hvm.json`), auch Nie-Käufer:innen füllen alle 15
  Aaker-Facetten aus.
- **Widersprüche verschwinden** (Stenger, S. 78): 8 von 8 nennen „ohne Zucker“ beim Kauf wichtig; 4 von 8 widersprechen
  damit ihren eigenen Antworten aus Gespräch 1 und 2 (`laddering.md` §2).
- **Abgleich mit dem Desk Research:** „nur online“, „weniger Kick“, „eher teuer“, Gönrgy nicht zuckerfrei – mehrere
  simulierte Eindrücke widersprechen den Fakten im Recherche-Dossier (`repertory-grid.md` §7).
