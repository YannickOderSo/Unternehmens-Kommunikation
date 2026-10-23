#!/usr/bin/env python3
"""Laddering, P10-Auswertung ohne KI-Rechnung: Implikationsmatrix, Hierarchical Value Map (HVM), Abbrüche.

Bündel B, Fallstudie 1 (HOLY). Alle Leitern sind KI-simuliert (Tool): T1–T8, jede Person in einem eigenen Agenten-Lauf
(P9-Abwandlung, Workflow D25). Keine echten Befragten. Das Skript zählt nur. Es macht keine Aussagen über Signifikanz
oder Repräsentativität. KI-Personas ersetzen kein Kundengespräch (Stenger, S. 78).

Aufruf (aus einem beliebigen Ordner):
    python3 auswertung/laddering.py

Eingaben (relativ zum Ordner buendel-b):
    rohdaten/leitern/T1.json … T8.json   P9-Interviews: je Startpunkt wichtig (ja/nein), Dialog, Stufen mit Ebene
    codierung/leitern-codebuch.csv       code;ebene;definition;beispiele
    codierung/leitern-zuordnung.csv      befragte;attribut;stufe_nr;ebene;originaltext;code   (eine Zeile je Stufe)
    codierung/leitern-nebencodes.csv     befragte;attribut;stufe_nr;art;ausschnitt;code;begruendung
                                         art = Nebenaspekt (zweiter Aspekt einer Stufe, nur Information),
                                               Alternative (anders vertretbarer Hauptcode, nur Robustheitsprüfung),
                                               Abbruchgrund (warum ein Startpunkt nicht wichtig ist),
                                               Abgleich (erst nach der Hauptcodierung und nach dem Lesen von Anhang 2
                                                        des Dossiers gezielt gesucht, nur Information)
    codierung/leitern-wichtigkeit.csv    befragte;attribut;antwort;eingeschraenkt;beleg_gespraech1_triade;
                                         beleg_gespraech1;begruendung   (Nacharbeit 23.10.2026: Antwort auf die Prüffrage
                                         „Ist dir das beim Kauf wichtig?“ und ein Beleg aus Gespräch 1, beides wörtlich)
    rohdaten/interviews/T*.json          nur für die Prüfung der Belege aus Gespräch 1
    rohdaten/bewertungen/T*.json         nur K01, Element I (Idealmarke) für die Stimmigkeitsprüfung

Ausgaben (Semikolon bzw. UTF-8):
    auswertung/implikationsmatrix.csv    Zeile = von, Spalte = nach, Zelle = Zahl der Leitern mit dieser direkten Verbindung
    auswertung/hvm.json                  Knoten (mit Ebene) und Kanten (mit Anzahl) über dem Cut-off, dazu Abbrüche,
                                         alle Codes, Kanten unter dem Cut-off, Pfade, stärkste Leiter, Robustheit, Hinweise
    auswertung/hvm.md                    Mermaid-Diagramm (graph BT) und Tabellen zum Lesen
    auswertung/leitern-wichtigkeit-pruefung.csv  je Person: Prüffrage „ohne Zucker“, Einschränkung, Ideal K01 aus P8,
                                         Beleg aus Gespräch 1, Spannung ja/nein (letzte Spalte „quelle“ = Kennzeichnung)
    Bildschirm: Prüfungen, Zahlen, Hinweise

SPALTE „ebene“ IN DER ZUORDNUNG: so, wie die Simulation die Stufe selbst eingeordnet hat (Rohdaten, unverändert).
Für die HVM zählt die Ebene des Codes im Codebuch. Weichen beide ab, meldet das Skript einen Hinweis.

CODIERREGELN (qualitative Arbeit, vor dem Zählen festgelegt am 23.10.2026; Anhang 2 des Dossiers war dabei ungelesen,
der Auftrag an den Codierer nannte aber schon die Beispielkette von Folie 07 – zuckerfrei → Genuss ohne Zucker → gutes
Gewissen → Gesundheit; blind war die Codierung also nicht):
    R1  Stufe 1 trägt immer den Startpunkt, wortgleich („ohne Zucker“, „für jeden Tag“). Zusätze in Klammern sind
        Nebenaspekte.
    R2  Jede Stufe bekommt genau einen Hauptcode. Gleichbedeutende Formulierungen erhalten denselben Code, auch über
        Befragte und Startpunkte hinweg; die Ebene des Codes legt das Codebuch fest.
    R3  Nennt eine Stufe (außer einer Wert-Stufe) zwei Aspekte, gilt der Aspekt, den die nächste Warum-Frage im Dialog
        aufgreift, denn über ihn läuft die Leiter weiter. Greift die Frage beide auf oder folgt keine Frage mehr, gilt
        der zuerst genannte Aspekt.
    R4  Wert-Stufe: Code = der Wert, den die Stufe als Oberbegriff nennt (vor dem Doppelpunkt oder in Klammern); nennt
        sie zwei Werte, der zuerst genannte.
    R5  Der jeweils andere Aspekt steht als Nebenaspekt in leitern-nebencodes.csv; er zählt nicht in der Matrix.
        Anders vertretbare Hauptcodes stehen dort als Alternative und gehen nur in die Robustheitsprüfung ein.
    R6  Bekommen zwei aufeinanderfolgende Stufen einer Leiter denselben Code, werden sie zu einem Knoten
        zusammengefasst (keine Verbindung eines Codes mit sich selbst).

ZÄHLREGELN (vor dem Rechnen festgelegt, Auftrag 23.10.2026; hier nur umgesetzt):
    Leiter            = ein Startpunkt bei einer Person, die ihn beim Kauf wichtig findet (wichtig = true, Stufen da).
    Abbruch           = Startpunkt, den die Person beim Kauf nicht wichtig findet (wichtig = false, keine Leiter).
    Direkte Verbindung von X nach Y = in einer Leiter folgt die Stufe mit Code Y unmittelbar auf eine Stufe mit Code X
                        (nach R6). Jede Verbindung zählt je Leiter höchstens einmal.
    Implikationsmatrix: Zelle (X, Y) = Zahl der Leitern mit der direkten Verbindung X → Y. Nur direkte Verbindungen;
                        indirekte werden nicht gezählt (vereinfachte Form, mit der Vorlesung abgleichen).
    Cut-off           = 2: Eine Verbindung kommt in die HVM, wenn sie in mindestens 2 Leitern vorkommt.
    HVM-Knoten        = alle Codes, die an mindestens einer Verbindung über dem Cut-off beteiligt sind.
    Nennungen je Code = Zahl der Leitern, in denen der Code mindestens einmal vorkommt.
    Stärkste Leiter   = unter allen Pfaden der HVM, die bei einem Attribut beginnen und bei einem Knoten ohne
                        weitere HVM-Verbindung enden, der Pfad mit der größten kleinsten Kantenzahl (Engpass);
                        bei Gleichstand die größere Summe der Kantenzahlen, dann der längere Pfad, dann die
                        alphabetische Codefolge. Dazu wird gezählt, wie viele Einzelleitern den Pfad vollständig und
                        zusammenhängend enthalten (eine HVM kann Teilstücke verschiedener Personen verbinden).
    Robustheit        = für jede Alternative einzeln und für alle Alternativen zugleich wird neu gezählt; gemeldet
                        wird, welche HVM-Verbindungen dazukommen, wegfallen oder ihre Anzahl ändern.

STIMMIGKEITSPRÜFUNG (Nacharbeit 23.10.2026, nur Information, ändert keine Zählung):
    Prüffrage bejaht  = wichtig = true in den Rohdaten (Gespräch 3)
    eingeschränkt     = codiert in leitern-wichtigkeit.csv (die Antwort relativiert sich selbst, z. B. „so halb“)
    Ideal K01 ≤ 4     = in Gespräch 2 (P8) setzt die Person ihre Idealmarke auf K01 („Zuckerbombe“ 1 – „ohne Zucker“ 7)
                        nicht auf die Seite „ohne Zucker“ (Skalenmitte 4 oder darunter)
    Beleg Gespräch 1  = codiert: wörtlicher Satz aus Gespräch 1, in dem die gezuckerte Dose als stärker beschrieben wird
    Spannung          = Prüffrage bejaht UND Ideal K01 ≤ 4 UND Beleg aus Gespräch 1 vorhanden
    Sheets: =ZÄHLENWENNS(D:D;"ja") usw. auf leitern-wichtigkeit-pruefung.csv.
    Zuschreibung      = beginnt die erste Frage des simulierten Interviewers mit einer Zuschreibung an die Marke
                        („HOLY sagt“, „HOLY wirbt“)? Gezählt je Startpunkt (Textsuche, Groß-/Kleinschreibung beachtet).

Nachrechnen in Google Sheets
    1) leitern-zuordnung.csv als Blatt „z“ importieren (Trennzeichen Semikolon), nach A befragte, B attribut,
       C stufe_nr sortiert lassen. Spalten: A befragte, B attribut, C stufe_nr, D ebene, E originaltext, F code.
       G2 (Leiter):    =A2&" · "&B2
       H2 (Folgecode): =WENN(UND(A3=A2;B3=B2);F3;"")
       I2 (Kante):     =WENN(ODER(H2="";H2=F2);"";F2&" → "&H2)      (leer = Leiterende oder Regel R6)
       Formeln bis zur letzten Zeile herunterziehen.
    2) Anzahl einer Kante (Leitern mit dieser Verbindung, je Leiter einmal), z. B. in K2 die Kante als Text:
       =ANZAHL2(EINDEUTIG(FILTER(z!G:G;z!I:I=K2)))
       Implikationsmatrix: Pivot-Tabelle mit Zeilen = F (von), Spalten = H (nach), Werte = G als ANZAHLEINDEUTIG,
       vorher Zeilen mit leerer Spalte I herausfiltern.
    3) Nennungen eines Codes (Leitern): =ANZAHL2(EINDEUTIG(FILTER(z!G:G;z!F:F=K2)))
    4) Leitern und Abbrüche je Startpunkt: in hvm.json unter „leitern_uebersicht“ (aus den Rohdaten, wichtig = true/false).

HANDPRÜFUNG (aus leitern-zuordnung.csv abgeschrieben und von Hand gezählt, 23.10.2026):
    Kante „konzentriert, keine Fehler“ → „verlässlich sein“: Stufe mit dem ersten Code, direkt danach der zweite:
        T1 „ohne Zucker“ Stufe 3 → 4 · T2 Stufe 4 → 5 · T3 Stufe 3 → 4 · T7 Stufe 3 → 4 · T8 Stufe 3 → 4
        T4, T5, T6 haben den ersten Code nicht; die Leitern zu „für jeden Tag“ auch nicht. → 5 Leitern.
        Skript (implikationsmatrix.csv, Zeile „konzentriert, keine Fehler“, Spalte „verlässlich sein“): 5 → stimmt.
    Regel R6 bei T2: Stufe 2 und 3 tragen beide „kein Zuckerabsturz“, Stufe 4 „konzentriert, keine Fehler“.
        Gezählt wird nur „kein Zuckerabsturz“ → „konzentriert, keine Fehler“ (einmal), keine Selbstverbindung.
        Skript: Hinweis „R6 … zusammengefasst“ für T2 erscheint, die Diagonale der Matrix ist 0 → stimmt.
    Gegenrechnung unabhängig vom Skript (awk über leitern-zuordnung.csv, gleiche Zählregeln): alle 7 Verbindungen über
        dem Cut-off mit denselben Anzahlen; Summe aller Matrixzellen 48 = 59 Stufen − 10 Leitern − 1 (R6 bei T2).

Das Skript ist deterministisch: gleiche Eingaben ergeben gleiche Ausgaben (feste Sortierung, kein Zufall, keine Uhrzeit).
"""
import csv
import json
import sys
from pathlib import Path

BASIS = Path(__file__).resolve().parent.parent  # Ordner buendel-b
LEITERN = BASIS / "rohdaten" / "leitern"
CODEBUCH = BASIS / "codierung" / "leitern-codebuch.csv"
ZUORDNUNG = BASIS / "codierung" / "leitern-zuordnung.csv"
NEBENCODES = BASIS / "codierung" / "leitern-nebencodes.csv"
AUS_MATRIX = BASIS / "auswertung" / "implikationsmatrix.csv"
AUS_JSON = BASIS / "auswertung" / "hvm.json"
AUS_MD = BASIS / "auswertung" / "hvm.md"
WICHTIGKEIT = BASIS / "codierung" / "leitern-wichtigkeit.csv"
INTERVIEWS = BASIS / "rohdaten" / "interviews"
BEWERTUNGEN = BASIS / "rohdaten" / "bewertungen"
AUS_WICHTIG = BASIS / "auswertung" / "leitern-wichtigkeit-pruefung.csv"
QUELLE = "KI-simuliert (Tool), codiert KI-gestützt – Bündel B, Workflow D25"
ZUSCHREIBUNG = ["HOLY sagt", "HOLY wirbt"]
KOPF_WICHTIG = ["befragte", "attribut", "antwort", "eingeschraenkt", "beleg_gespraech1_triade", "beleg_gespraech1",
                "begruendung"]

STAND = "Codierung und Auswertung vom 23.10.2026"
KENNZEICHNUNG = ("KI-simuliert (Tool): 8 fiktive Befragte T1–T8, jede Person in einem eigenen Agenten-Lauf; "
                 "keine echten Befragten, keine Aussagen über Signifikanz oder Repräsentativität. "
                 "Hypothesen, keine Daten (Stenger, S. 78; dossier-buendel-b.md §7).")
BEFRAGTE = [f"T{i}" for i in range(1, 9)]
STARTPUNKTE = ["ohne Zucker", "für jeden Tag"]   # Reihenfolge wie im Auftrag; wortgleich mit repertory-grid-ergebnis.csv
CUTOFF = 2                                       # festgelegt vor dem Rechnen
EBENEN = ["Attribut", "funktional", "psychosozial", "Wert"]
EBENEN_ALLE = EBENEN + ["Abbruchgrund"]
ARTEN = ["Nebenaspekt", "Alternative", "Abbruchgrund", "Abgleich"]
MAX_WOERTER = 3
KOPF_CODEBUCH = ["code", "ebene", "definition", "beispiele"]
KOPF_ZUORDNUNG = ["befragte", "attribut", "stufe_nr", "ebene", "originaltext", "code"]
KOPF_NEBEN = ["befragte", "attribut", "stufe_nr", "art", "ausschnitt", "code", "begruendung"]
MERMAID_PRAEFIX = {"Attribut": "A", "funktional": "F", "psychosozial": "P", "Wert": "V"}

fehler = []    # Datenfehler -> Exit-Code 1
hinweise = []  # Auffälligkeiten, kein Fehler


def lies_csv(pfad, kopf):
    with open(pfad, encoding="utf-8", newline="") as f:
        r = csv.reader(f, delimiter=";")
        zeilen = list(r)
    if not zeilen or zeilen[0] != kopf:
        fehler.append(f"{pfad.name}: Kopfzeile {zeilen[0] if zeilen else '(leer)'} statt {kopf}")
        return []
    return [dict(zip(kopf, z)) for z in zeilen[1:] if any(z)]


def leiter_id(befragte, attribut):
    return f"{befragte} · {attribut}"


def woerter(code):
    return len(code.replace(",", " ").split())


# ---------------------------------------------------------------- Rohdaten
roh = {}            # (befragte, attribut) -> Leiter-Objekt aus der JSON-Datei
for b in BEFRAGTE:
    pfad = LEITERN / f"{b}.json"
    try:
        daten = json.loads(pfad.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as e:
        fehler.append(f"{pfad.name}: nicht lesbar ({e})")
        continue
    attribute = [l.get("attribut") for l in daten.get("leitern", [])]
    if sorted(attribute) != sorted(STARTPUNKTE):
        fehler.append(f"{pfad.name}: Startpunkte {attribute} statt {STARTPUNKTE}")
    for l in daten.get("leitern", []):
        roh[(b, l["attribut"])] = l
        if l.get("wichtig") is True and len(l.get("stufen", [])) == 0:
            fehler.append(f"{b} „{l['attribut']}“: wichtig = true, aber keine Stufen")
        if l.get("wichtig") is False and len(l.get("stufen", [])) > 0:
            fehler.append(f"{b} „{l['attribut']}“: wichtig = false, aber Stufen vorhanden")
        if l.get("wichtig") not in (True, False):
            fehler.append(f"{b} „{l['attribut']}“: wichtig fehlt")

leitern_ids = [(b, a) for b in BEFRAGTE for a in STARTPUNKTE if (b, a) in roh and roh[(b, a)].get("wichtig") is True]
abbruch_ids = [(b, a) for b in BEFRAGTE for a in STARTPUNKTE if (b, a) in roh and roh[(b, a)].get("wichtig") is False]

# ---------------------------------------------------------------- Codebuch
codebuch = {}
for z in lies_csv(CODEBUCH, KOPF_CODEBUCH):
    c = z["code"]
    if c in codebuch:
        fehler.append(f"Codebuch: Code „{c}“ doppelt")
    if z["ebene"] not in EBENEN_ALLE:
        fehler.append(f"Codebuch: „{c}“ hat Ebene „{z['ebene']}“ (erlaubt: {', '.join(EBENEN_ALLE)})")
    if woerter(c) > MAX_WOERTER:
        fehler.append(f"Codebuch: „{c}“ hat mehr als {MAX_WOERTER} Wörter")
    if not z["definition"].strip():
        fehler.append(f"Codebuch: „{c}“ ohne Definition")
    codebuch[c] = z
for s in STARTPUNKTE:
    if codebuch.get(s, {}).get("ebene") != "Attribut":
        fehler.append(f"Codebuch: Startpunkt „{s}“ fehlt oder ist nicht als Attribut geführt")


def ebene(code):
    return codebuch.get(code, {}).get("ebene", "?")


# ---------------------------------------------------------------- Zuordnung prüfen
zuordnung = lies_csv(ZUORDNUNG, KOPF_ZUORDNUNG)
codes_je_leiter = {}   # (befragte, attribut) -> Liste der Codes in Stufenfolge
gesehen = set()
for z in zuordnung:
    schluessel = (z["befragte"], z["attribut"])
    try:
        nr = int(z["stufe_nr"])
    except ValueError:
        fehler.append(f"Zuordnung: stufe_nr „{z['stufe_nr']}“ keine Zahl ({schluessel})")
        continue
    if schluessel not in roh or roh[schluessel].get("wichtig") is not True:
        fehler.append(f"Zuordnung: {schluessel} ist keine Leiter in den Rohdaten")
        continue
    stufen = roh[schluessel]["stufen"]
    if not 1 <= nr <= len(stufen):
        fehler.append(f"Zuordnung: {schluessel} Stufe {nr} gibt es nicht")
        continue
    if (schluessel, nr) in gesehen:
        fehler.append(f"Zuordnung: {schluessel} Stufe {nr} doppelt")
    gesehen.add((schluessel, nr))
    s = stufen[nr - 1]
    if z["originaltext"] != s["text"]:
        fehler.append(f"Zuordnung: {schluessel} Stufe {nr}: Originaltext weicht von den Rohdaten ab")
    if z["ebene"] != s["ebene"]:
        fehler.append(f"Zuordnung: {schluessel} Stufe {nr}: Ebene „{z['ebene']}“, Rohdaten „{s['ebene']}“")
    if z["code"] not in codebuch:
        fehler.append(f"Zuordnung: Code „{z['code']}“ fehlt im Codebuch")
    elif ebene(z["code"]) not in EBENEN:
        fehler.append(f"Zuordnung: Code „{z['code']}“ hat die Ebene „{ebene(z['code'])}“ (kein Leiter-Code)")
    if nr == 1 and z["code"] != z["attribut"]:
        fehler.append(f"Zuordnung: {schluessel} Stufe 1 trägt „{z['code']}“ statt des Startpunkts (R1)")
    if nr > 1 and ebene(z["code"]) == "Attribut":
        fehler.append(f"Zuordnung: {schluessel} Stufe {nr} trägt einen Attribut-Code")
    if z["code"] in codebuch and ebene(z["code"]) != z["ebene"]:
        hinweise.append(f"Ebene: {leiter_id(*schluessel)}, Stufe {nr}: Simulation „{z['ebene']}“, Code „{z['code']}“ "
                        f"steht im Codebuch als „{ebene(z['code'])}“.")
    codes_je_leiter.setdefault(schluessel, {})[nr] = z["code"]

for schluessel in leitern_ids:
    n = len(roh[schluessel]["stufen"])
    vorhanden = codes_je_leiter.get(schluessel, {})
    fehlend = [i for i in range(1, n + 1) if i not in vorhanden]
    if fehlend:
        fehler.append(f"Zuordnung: {schluessel} ohne Code für Stufe(n) {fehlend}")
codes_je_leiter = {k: [v[i] for i in sorted(v)] for k, v in codes_je_leiter.items()}

# ---------------------------------------------------------------- Nebencodes prüfen
nebencodes = lies_csv(NEBENCODES, KOPF_NEBEN)
alternativen = {}      # (befragte, attribut, stufe_nr) -> Alternativcode
for z in nebencodes:
    schluessel = (z["befragte"], z["attribut"])
    ort = f"Nebencodes: {schluessel} {z['art']} „{z['code']}“"
    if z["art"] not in ARTEN:
        fehler.append(f"{ort}: unbekannte Art (erlaubt: {', '.join(ARTEN)})")
        continue
    if z["code"] not in codebuch:
        fehler.append(f"{ort}: Code fehlt im Codebuch")
    if schluessel not in roh:
        fehler.append(f"{ort}: keine solche Leiter in den Rohdaten")
        continue
    l = roh[schluessel]
    if z["art"] == "Abbruchgrund":
        if l.get("wichtig") is not False:
            fehler.append(f"{ort}: Abbruchgrund bei einem Startpunkt, der wichtig ist")
        if ebene(z["code"]) != "Abbruchgrund":
            fehler.append(f"{ort}: Code ist kein Abbruchgrund")
    elif z["art"] in ("Nebenaspekt", "Alternative") and ebene(z["code"]) not in EBENEN:
        fehler.append(f"{ort}: Code ist kein Leiter-Code")
    if z["stufe_nr"] == "–":
        if z["art"] in ("Nebenaspekt", "Alternative"):
            fehler.append(f"{ort}: braucht eine Stufennummer")
        quelle = l.get("dialog", "") + "\n" + l.get("begruendung_wenn_nicht", "")
    else:
        try:
            nr = int(z["stufe_nr"])
            quelle = l["stufen"][nr - 1]["text"]
        except (ValueError, IndexError):
            fehler.append(f"{ort}: Stufe „{z['stufe_nr']}“ gibt es nicht")
            continue
        if z["art"] == "Alternative":
            k = (z["befragte"], z["attribut"], nr)
            if k in alternativen:
                fehler.append(f"{ort}: mehr als eine Alternative für dieselbe Stufe")
            if codes_je_leiter.get(schluessel, [None] * nr)[nr - 1] == z["code"]:
                fehler.append(f"{ort}: Alternative gleich dem Hauptcode")
            alternativen[k] = z["code"]
    if z["ausschnitt"] not in quelle:
        fehler.append(f"{ort}: Ausschnitt „{z['ausschnitt']}“ steht nicht wörtlich in der Quelle")

if fehler:
    print("FEHLER in den Eingaben – nichts geschrieben:")
    for f in fehler:
        print("  -", f)
    sys.exit(1)


# ---------------------------------------------------------------- Zählen
def zusammenfassen(codes):
    """Regel R6: aufeinanderfolgende gleiche Codes zu einem Knoten zusammenfassen."""
    folge = []
    for c in codes:
        if not folge or folge[-1] != c:
            folge.append(c)
    return folge


def zaehle(codes_je):
    """Gibt (kanten, nennungen) zurück: kanten[(x, y)] = sortierte Liste der Leiter-IDs mit direkter Verbindung x → y
    (je Leiter einmal); nennungen[c] = sortierte Liste der Leiter-IDs, in denen c vorkommt."""
    kanten, nennungen = {}, {}
    for (b, a), codes in sorted(codes_je.items(), key=lambda kv: (BEFRAGTE.index(kv[0][0]), STARTPUNKTE.index(kv[0][1]))):
        lid = leiter_id(b, a)
        folge = zusammenfassen(codes)
        for c in set(folge):
            nennungen.setdefault(c, []).append(lid)
        for x, y in set(zip(folge, folge[1:])):
            kanten.setdefault((x, y), []).append(lid)
    return kanten, nennungen


def hvm_kanten(kanten):
    return {k: v for k, v in kanten.items() if len(v) >= CUTOFF}


def ordnung(code, nennungen):
    """Sortierschlüssel: Ebene, dann mehr Nennungen zuerst, dann Code."""
    return (EBENEN.index(ebene(code)), -len(nennungen.get(code, [])), code.casefold())


def pfade(hvm):
    """Alle Pfade von einem Attribut-Knoten bis zu einem Knoten ohne ausgehende HVM-Kante (ohne Kreise)."""
    aus = {}
    for (x, y) in hvm:
        aus.setdefault(x, []).append(y)
    for x in aus:
        aus[x].sort()
    knoten = {c for k in hvm for c in k}
    ergebnis = []

    def weiter(pfad):
        nachfolger = [y for y in aus.get(pfad[-1], []) if y not in pfad]
        if not nachfolger:
            if len(pfad) > 1:
                ergebnis.append(list(pfad))
            return
        for y in nachfolger:
            weiter(pfad + [y])

    for start in sorted(c for c in knoten if ebene(c) == "Attribut"):
        weiter([start])
    return ergebnis


def pfad_kennzahlen(pfad, kanten, codes_je):
    zahlen = [len(kanten[(x, y)]) for x, y in zip(pfad, pfad[1:])]
    voll = []
    for (b, a), codes in codes_je.items():
        folge = zusammenfassen(codes)
        if any(folge[i:i + len(pfad)] == pfad for i in range(len(folge) - len(pfad) + 1)):
            voll.append(leiter_id(b, a))
    return {"pfad": pfad, "kantenzahlen": zahlen, "engpass": min(zahlen), "summe": sum(zahlen),
            "endet_bei_wert": ebene(pfad[-1]) == "Wert",
            "einzelleitern_vollstaendig": sorted(voll, key=lambda s: (BEFRAGTE.index(s.split(" · ")[0]), s))}


def staerkste(pfadliste):
    if not pfadliste:
        return None
    return sorted(pfadliste, key=lambda p: (-p["engpass"], -p["summe"], -len(p["pfad"]),
                                            [c.casefold() for c in p["pfad"]]))[0]


kanten, nennungen = zaehle(codes_je_leiter)
hvm = hvm_kanten(kanten)
hvm_knoten = sorted({c for k in hvm for c in k}, key=lambda c: ordnung(c, nennungen))
alle_codes = sorted(nennungen, key=lambda c: ordnung(c, nennungen))
pfad_liste = [pfad_kennzahlen(p, kanten, codes_je_leiter) for p in pfade(hvm)]
pfad_liste.sort(key=lambda p: (-p["engpass"], -p["summe"], -len(p["pfad"]), [c.casefold() for c in p["pfad"]]))
beste = staerkste(pfad_liste)

# Regel R6 und Ebenenfolge als Hinweise
for (b, a), codes in sorted(codes_je_leiter.items(), key=lambda kv: (BEFRAGTE.index(kv[0][0]), kv[0][1])):
    folge = zusammenfassen(codes)
    if len(folge) < len(codes):
        hinweise.append(f"R6: {leiter_id(b, a)}: {len(codes)} Stufen, nach dem Zusammenfassen gleicher Folgecodes "
                        f"{len(folge)} Knoten.")
    if len(folge) < 3:
        hinweise.append(f"Leiter mit weniger als 3 Knoten: {leiter_id(b, a)}.")
    if ebene(folge[-1]) != "Wert":
        hinweise.append(f"Leiter endet nicht bei einem Wert: {leiter_id(b, a)} (letzter Code „{folge[-1]}“).")
    for x, y in zip(folge, folge[1:]):
        if EBENEN.index(ebene(y)) < EBENEN.index(ebene(x)):
            hinweise.append(f"Rückschritt der Ebene: {leiter_id(b, a)}: „{x}“ ({ebene(x)}) → „{y}“ ({ebene(y)}).")

# Codebuch-Codes, die in der Hauptcodierung nicht vorkommen
neben_codes = {z["code"] for z in nebencodes}
for c in sorted(codebuch, key=str.casefold):
    if c not in nennungen and codebuch[c]["ebene"] in EBENEN and c not in neben_codes:
        hinweise.append(f"Codebuch: „{c}“ wird nirgends verwendet.")

# Abbrüche und Gründe
leitern_je_start = {a: [leiter_id(b, a) for (b, x) in leitern_ids if x == a] for a in STARTPUNKTE}
abbrueche_je_start = {a: [b for (b, x) in abbruch_ids if x == a] for a in STARTPUNKTE}
gruende = {a: {} for a in STARTPUNKTE}
for z in nebencodes:
    if z["art"] == "Abbruchgrund":
        liste = gruende[z["attribut"]].setdefault(z["code"], [])
        if z["befragte"] not in liste:
            liste.append(z["befragte"])
for a in STARTPUNKTE:
    ohne = [b for b in abbrueche_je_start[a] if not any(b in v for v in gruende[a].values())]
    if ohne:
        hinweise.append(f"Abbruch ohne codierten Grund: {a}: {', '.join(ohne)}.")
    gruende[a] = {g: sorted(v, key=BEFRAGTE.index)
                  for g, v in sorted(gruende[a].items(), key=lambda kv: (-len(kv[1]), kv[0].casefold()))}

# Nebenaspekte und Abgleich (nur Information): Befragte je Code
def befragte_je_code(art):
    erg = {}
    for z in nebencodes:
        if z["art"] == art:
            erg.setdefault(z["code"], set()).add(z["befragte"])
    return {c: sorted(v, key=BEFRAGTE.index) for c, v in sorted(erg.items(), key=lambda kv: (-len(kv[1]), kv[0].casefold()))}


nebenaspekte = befragte_je_code("Nebenaspekt")
abgleich = befragte_je_code("Abgleich")


# ---------------------------------------------------------------- Robustheit
def vergleiche(kanten_neu):
    hvm_neu = hvm_kanten(kanten_neu)
    dazu = sorted(((x, y, len(v)) for (x, y), v in hvm_neu.items() if (x, y) not in hvm), key=lambda t: (-t[2], t[0], t[1]))
    weg = sorted(((x, y, len(v)) for (x, y), v in hvm.items() if (x, y) not in hvm_neu), key=lambda t: (-t[2], t[0], t[1]))
    anders = sorted(((x, y, len(hvm[(x, y)]), len(hvm_neu[(x, y)])) for (x, y) in hvm
                     if (x, y) in hvm_neu and len(hvm[(x, y)]) != len(hvm_neu[(x, y)])), key=lambda t: (t[0], t[1]))
    return hvm_neu, dazu, weg, anders


def mit_alternativen(auswahl):
    neu = {k: list(v) for k, v in codes_je_leiter.items()}
    for (b, a, nr), code in auswahl.items():
        neu[(b, a)][nr - 1] = code
    return neu


robustheit = []
varianten = [((b, a, nr), {(b, a, nr): code}) for (b, a, nr), code in sorted(
    alternativen.items(), key=lambda kv: (BEFRAGTE.index(kv[0][0]), STARTPUNKTE.index(kv[0][1]), kv[0][2]))]
varianten.append((None, dict(alternativen)))
for stelle, auswahl in varianten:
    codes_neu = mit_alternativen(auswahl)
    kanten_neu, _ = zaehle(codes_neu)
    hvm_neu, dazu, weg, anders = vergleiche(kanten_neu)
    pf = [pfad_kennzahlen(p, kanten_neu, codes_neu) for p in pfade(hvm_neu)]
    b_neu = staerkste(pf)
    eintrag = {
        "variante": "alle Alternativen zugleich" if stelle is None else
                    f"{leiter_id(stelle[0], stelle[1])}, Stufe {stelle[2]}: „{codes_je_leiter[(stelle[0], stelle[1])][stelle[2] - 1]}“ → „{auswahl[stelle]}“",
        "hvm_kanten_dazu": [{"von": x, "nach": y, "anzahl": n} for x, y, n in dazu],
        "hvm_kanten_weg": [{"von": x, "nach": y, "anzahl_vorher": n} for x, y, n in weg],
        "hvm_kanten_anzahl_geaendert": [{"von": x, "nach": y, "vorher": n0, "nachher": n1} for x, y, n0, n1 in anders],
        "staerkste_leiter": b_neu["pfad"] if b_neu else None,
        "staerkste_leiter_gleich": bool(b_neu and beste and b_neu["pfad"] == beste["pfad"]),
    }
    eintrag["hvm_unveraendert"] = not (dazu or weg or anders)
    robustheit.append(eintrag)

# ---------------------------------------------------------------- Stimmigkeit (nur Information)
wichtigkeit = []
for z in lies_csv(WICHTIGKEIT, KOPF_WICHTIG) if WICHTIGKEIT.exists() else []:
    b, a = z["befragte"], z["attribut"]
    ort = f"leitern-wichtigkeit.csv {b} „{a}“"
    l = roh.get((b, a))
    if l is None:
        fehler.append(f"{ort}: keine solche Leiter")
        continue
    if z["antwort"] not in l.get("dialog", ""):
        fehler.append(f"{ort}: Antwort steht nicht wörtlich im Dialog")
    if z["eingeschraenkt"] not in ("ja", "nein"):
        fehler.append(f"{ort}: eingeschraenkt muss ja oder nein sein")
    beleg_ok = z["beleg_gespraech1"] != "–"
    if beleg_ok:
        i1 = json.loads((INTERVIEWS / f"{b}.json").read_text(encoding="utf-8"))
        tri = [t for t in i1["triaden"] if str(t["nr"]) == z["beleg_gespraech1_triade"]]
        if not tri or z["beleg_gespraech1"] not in tri[0].get("wortlaut", ""):
            fehler.append(f"{ort}: Beleg steht nicht wörtlich in Gespräch 1, Triade {z['beleg_gespraech1_triade']}")
    bw = json.loads((BEWERTUNGEN / f"{b}.json").read_text(encoding="utf-8"))
    ideal = [e["I"] for e in bw["bewertungen"] if e["konstrukt"] == "K01"][0]
    spannung = l.get("wichtig") is True and ideal is not None and ideal <= 4 and beleg_ok
    wichtigkeit.append({"befragte": b, "attribut": a, "wichtig": l.get("wichtig"), "antwort": z["antwort"],
                        "eingeschraenkt": z["eingeschraenkt"], "ideal_k01": ideal, "beleg": z["beleg_gespraech1"],
                        "spannung": spannung})
if fehler:
    print("FEHLER in leitern-wichtigkeit.csv – nichts geschrieben:")
    for f in fehler:
        print("  -", f)
    sys.exit(1)

zuschreibung = {a: [] for a in STARTPUNKTE}
for (b, a), l in sorted(roh.items(), key=lambda kv: (BEFRAGTE.index(kv[0][0]), STARTPUNKTE.index(kv[0][1]))):
    erste = next((zeile for zeile in l.get("dialog", "").splitlines() if zeile.startswith("Interviewer:")), "")
    if any(w in erste for w in ZUSCHREIBUNG):
        zuschreibung[a].append(b)

# ---------------------------------------------------------------- Ausgaben
# 0) Stimmigkeitsprüfung
with open(AUS_WICHTIG, "w", encoding="utf-8", newline="") as f:
    w = csv.writer(f, delimiter=";", lineterminator="\n")
    w.writerow(["befragte", "attribut", "pruefrage_bejaht", "antwort", "eingeschraenkt", "ideal_k01_p8",
                "ideal_k01_hoechstens_4", "beleg_gespraech1", "spannung", "quelle"])
    for x in wichtigkeit:
        w.writerow([x["befragte"], x["attribut"], "ja" if x["wichtig"] else "nein", x["antwort"], x["eingeschraenkt"],
                    x["ideal_k01"], "ja" if x["ideal_k01"] is not None and x["ideal_k01"] <= 4 else "nein",
                    x["beleg"], "ja" if x["spannung"] else "nein", QUELLE])
pruef = {
    "startpunkt": "ohne Zucker",
    "befragte": len(wichtigkeit),
    "pruefrage_bejaht": [x["befragte"] for x in wichtigkeit if x["wichtig"]],
    "eingeschraenkt": [x["befragte"] for x in wichtigkeit if x["eingeschraenkt"] == "ja"],
    "ideal_k01_hoechstens_4": [x["befragte"] for x in wichtigkeit if x["ideal_k01"] is not None and x["ideal_k01"] <= 4],
    "beleg_gespraech1": [x["befragte"] for x in wichtigkeit if x["beleg"] != "–"],
    "spannung": [x["befragte"] for x in wichtigkeit if x["spannung"]],
}

# 1) Implikationsmatrix
with open(AUS_MATRIX, "w", encoding="utf-8", newline="") as f:
    w = csv.writer(f, delimiter=";", lineterminator="\n")
    w.writerow(["von \\ nach (Zelle = Zahl der Leitern mit direkter Verbindung; KI-simuliert)"] + alle_codes + ["summe_aus"])
    for x in alle_codes:
        zeile = [len(kanten.get((x, y), [])) for y in alle_codes]
        w.writerow([x] + zeile + [sum(zeile)])
    spalten = [sum(len(kanten.get((x, y), [])) for x in alle_codes) for y in alle_codes]
    w.writerow(["summe_ein"] + spalten + [sum(spalten)])
    w.writerow(["ebene"] + [ebene(c) for c in alle_codes] + [""])

# 2) hvm.json
mermaid_id = {}
zaehler = {}
for c in hvm_knoten:
    p = MERMAID_PRAEFIX[ebene(c)]
    zaehler[p] = zaehler.get(p, 0) + 1
    mermaid_id[c] = f"{p}{zaehler[p]}"
hvm_liste = sorted(hvm.items(), key=lambda kv: (-len(kv[1]), EBENEN.index(ebene(kv[0][0])), kv[0][0].casefold(), kv[0][1].casefold()))
unter = sorted(((k, v) for k, v in kanten.items() if k not in hvm),
               key=lambda kv: (EBENEN.index(ebene(kv[0][0])), kv[0][0].casefold(), kv[0][1].casefold()))
ergebnis = {
    "kennzeichnung": KENNZEICHNUNG,
    "stand": STAND,
    "cutoff": CUTOFF,
    "cutoff_regel": "Verbindung in mindestens 2 Leitern (direkte Verbindungen, je Leiter einmal); festgelegt vor dem Rechnen",
    "startpunkte": STARTPUNKTE,
    "zahl_leitern": len(leitern_ids),
    "zahl_leitern_je_startpunkt": {a: len(v) for a, v in leitern_je_start.items()},
    "zahl_abbrueche_je_startpunkt": {a: len(v) for a, v in abbrueche_je_start.items()},
    "abbrueche_je_startpunkt": abbrueche_je_start,
    "abbruchgruende_befragte": gruende,
    "leitern_uebersicht": [
        {"leiter": leiter_id(b, a), "wichtig": roh[(b, a)]["wichtig"], "stufen": len(roh[(b, a)]["stufen"]),
         "codefolge": zusammenfassen(codes_je_leiter[(b, a)]) if (b, a) in codes_je_leiter else []}
        for b in BEFRAGTE for a in STARTPUNKTE if (b, a) in roh],
    "knoten": [{"id": mermaid_id[c], "code": c, "ebene": ebene(c), "nennungen_leitern": len(nennungen[c]),
                "leitern": nennungen[c]} for c in hvm_knoten],
    "kanten": [{"von": x, "nach": y, "anzahl": len(v), "knapp_am_cutoff": len(v) == CUTOFF, "leitern": v}
               for (x, y), v in hvm_liste],
    "alle_codes": [{"code": c, "ebene": ebene(c), "nennungen_leitern": len(nennungen[c]), "in_hvm": c in hvm_knoten}
                   for c in alle_codes],
    "kanten_unter_cutoff": [{"von": x, "nach": y, "anzahl": len(v), "leitern": v} for (x, y), v in unter],
    "pfade": pfad_liste,
    "staerkste_leiter": beste,
    "nebenaspekte_befragte": nebenaspekte,
    "abgleich_befragte": abgleich,
    "robustheit": robustheit,
    "stimmigkeit_ohne_zucker": pruef,
    "zuschreibung_an_holy_erste_frage": zuschreibung,
    "hinweise": hinweise,
}
AUS_JSON.write_text(json.dumps(ergebnis, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


# 3) hvm.md
def form(c):
    i, e = mermaid_id[c], ebene(c)
    if e == "Attribut":
        return f'{i}["{c}"]'
    if e == "funktional":
        return f'{i}("{c}")'
    if e == "psychosozial":
        return f'{i}(["{c}"])'
    return f'{i}(("{c}"))'


md = []
md.append("# Laddering: Hierarchical Value Map (HVM) – HOLY")
md.append("")
md.append(f"> **{KENNZEICHNUNG}**  ")
md.append(f"> {STAND}. Erzeugt von `auswertung/laddering.py` (nicht von Hand ändern; Skript erneut ausführen). "
          f"Codierung: `codierung/leitern-codebuch.csv`, `leitern-zuordnung.csv`, `leitern-nebencodes.csv`.")
md.append("")
md.append(f"**Cut-off:** Eine Verbindung steht in der HVM, wenn sie in mindestens {CUTOFF} Leitern direkt vorkommt "
          f"(je Leiter einmal, vor dem Rechnen festgelegt). Gezählt werden nur direkte Verbindungen; das ist die "
          f"vereinfachte Form, mit der Vorlesung abgleichen. Pfeile zeigen von der Eigenschaft zum Wert, die Zahl am "
          f"Pfeil ist die Zahl der Leitern.")
md.append("")
md.append(f"**Stichprobe:** {len(leitern_ids)} Leitern von 8 KI-simulierten Personen; "
          + " · ".join(f"„{a}“: {len(leitern_je_start[a])} Leitern, {len(abbrueche_je_start[a])} Abbrüche"
                       for a in STARTPUNKTE) + ".")
md.append("")
md.append("```mermaid")
md.append("graph BT")
for c in hvm_knoten:
    md.append(f"  {form(c)}")
for (x, y), v in hvm_liste:
    md.append(f"  {mermaid_id[x]} -->|{len(v)}| {mermaid_id[y]}")
md.append("```")
md.append("")
md.append("Formen: Rechteck = Attribut (Eigenschaft) · abgerundet = funktionale Konsequenz · Kapsel = psychosoziale "
          "Konsequenz · Kreis = Wert.")
md.append("")
md.append("## Knoten je Ebene (über dem Cut-off)")
md.append("")
md.append("| Ebene | Knoten (Nennungen in Leitern) |")
md.append("|---|---|")
for e in EBENEN:
    teil = [f"{c} ({len(nennungen[c])})" for c in hvm_knoten if ebene(c) == e]
    md.append(f"| {e} | {' · '.join(teil) if teil else '–'} |")
md.append("")
md.append("## Verbindungen über dem Cut-off")
md.append("")
md.append("| von | nach | Leitern | knapp am Cut-off | Leitern (Befragte · Startpunkt) |")
md.append("|---|---|---|---|---|")
for (x, y), v in hvm_liste:
    md.append(f"| {x} | {y} | {len(v)} | {'ja' if len(v) == CUTOFF else 'nein'} | {', '.join(v)} |")
md.append("")
md.append(f"Verbindungen unter dem Cut-off (je 1 Leiter): {len(unter)}; alle stehen in `implikationsmatrix.csv` "
          f"und in `hvm.json` unter „kanten_unter_cutoff“.")
md.append("")
md.append("## Stärkste Leiter")
md.append("")
if beste:
    md.append(f"**{' → '.join(beste['pfad'])}**  ")
    md.append(f"Kantenzahlen {' · '.join(str(n) for n in beste['kantenzahlen'])} (Engpass {beste['engpass']}, Summe "
              f"{beste['summe']}); endet bei einem Wert: {'ja' if beste['endet_bei_wert'] else 'nein'}. Vollständig "
              f"und zusammenhängend in {len(beste['einzelleitern_vollstaendig'])} Einzelleitern: "
              f"{', '.join(beste['einzelleitern_vollstaendig']) or '–'}.")
    md.append("")
    md.append("Regel: größte kleinste Kantenzahl, dann größere Summe, dann längerer Pfad (vor dem Rechnen festgelegt). "
              "Alle Pfade: `hvm.json`, „pfade“.")
else:
    md.append("Keine Verbindung über dem Cut-off.")
md.append("")
md.append("## Abbrüche („beim Kauf nicht wichtig“, keine Leiter)")
md.append("")
md.append("| Startpunkt | Leitern | Abbrüche | Befragte mit Abbruch | Gründe (Befragte) |")
md.append("|---|---|---|---|---|")
for a in STARTPUNKTE:
    g = " · ".join(f"{k}: {', '.join(v)}" for k, v in gruende[a].items()) or "–"
    md.append(f"| {a} | {len(leitern_je_start[a])} | {len(abbrueche_je_start[a])} | "
              f"{', '.join(abbrueche_je_start[a]) or '–'} | {g} |")
md.append("")
md.append("## Häufige Codes außerhalb der HVM")
md.append("")
md.append(f"Codes, die in mindestens {CUTOFF} Leitern vorkommen, aber an keiner Verbindung über dem Cut-off beteiligt "
          f"sind (die Vorgänger wechseln von Leiter zu Leiter; gezählt werden nur direkte Verbindungen):")
md.append("")
aussen = [c for c in alle_codes if c not in hvm_knoten and len(nennungen[c]) >= CUTOFF]
if aussen:
    for c in aussen:
        vor = sorted({x for (x, y) in kanten if y == c}, key=str.casefold)
        md.append(f"- {c} ({ebene(c)}, {len(nennungen[c])} Leitern: {', '.join(nennungen[c])}); direkte Vorgänger: "
                  f"{', '.join(vor) or '–'}")
else:
    md.append("- keine")
md.append("")
md.append("## Nebenaspekte und Abgleich (nur Information, zählen nicht in der Matrix)")
md.append("")
md.append("| Code | Nebenaspekt in einer Stufe (Befragte) | Abgleich im Dialog (Befragte) |")
md.append("|---|---|---|")
for c in sorted(set(nebenaspekte) | set(abgleich), key=lambda c: (-len(abgleich.get(c, [])), -len(nebenaspekte.get(c, [])), c.casefold())):
    md.append(f"| {c} | {', '.join(nebenaspekte.get(c, [])) or '–'} | {', '.join(abgleich.get(c, [])) or '–'} |")
md.append("")
md.append("Abgleich = erst nach der Hauptcodierung und nach dem Lesen von Anhang 2 des Dossiers gezielt in allen Dialogen "
          "gesucht (Folie-07-Knoten Genuss, Gewissen, Gesundheit; dazu Gewicht, Zweifel, „ohne Zucker“ auch bei "
          "anderen Marken). Fundstellen wörtlich in `codierung/leitern-nebencodes.csv`.")
md.append("")
md.append("## Robustheit der Codierung")
md.append("")
md.append("Für jede anders vertretbare Codierung (Alternative in `leitern-nebencodes.csv`) wurde neu gezählt.")
md.append("")
md.append("| Variante | HVM | stärkste Leiter |")
md.append("|---|---|---|")
for r in robustheit:
    teile = []
    teile += [f"+ {k['von']} → {k['nach']} ({k['anzahl']})" for k in r["hvm_kanten_dazu"]]
    teile += [f"− {k['von']} → {k['nach']} (vorher {k['anzahl_vorher']})" for k in r["hvm_kanten_weg"]]
    teile += [f"{k['von']} → {k['nach']}: {k['vorher']} → {k['nachher']}" for k in r["hvm_kanten_anzahl_geaendert"]]
    md.append(f"| {r['variante']} | {'unverändert' if r['hvm_unveraendert'] else '; '.join(teile)} | "
              f"{'gleich' if r['staerkste_leiter_gleich'] else ' → '.join(r['staerkste_leiter'] or ['–'])} |")
md.append("")
if hinweise:
    md.append("## Hinweise des Skripts")
    md.append("")
    for h in hinweise:
        md.append(f"- {h}")
    md.append("")
md.append("## Stimmigkeit der Prüffrage „ohne Zucker“ (nur Information)")
md.append("")
md.append(f"Prüffrage „Ist dir das beim Kauf wichtig?“ bejaht: {len(pruef['pruefrage_bejaht'])} von {pruef['befragte']} "
          f"({', '.join(pruef['pruefrage_bejaht'])}); davon eingeschränkt: {len(pruef['eingeschraenkt'])} "
          f"({', '.join(pruef['eingeschraenkt']) or '–'}). Ideal auf K01 in Gespräch 2 höchstens 4: "
          f"{len(pruef['ideal_k01_hoechstens_4'])} ({', '.join(pruef['ideal_k01_hoechstens_4']) or '–'}). "
          f"Spannung (bejaht, Ideal ≤ 4 und Beleg aus Gespräch 1, in dem die gezuckerte Dose stärker ist): "
          f"{len(pruef['spannung'])} ({', '.join(pruef['spannung']) or '–'}). Einzelheiten: "
          f"`leitern-wichtigkeit-pruefung.csv`; Codierung: `codierung/leitern-wichtigkeit.csv`.")
md.append("")
md.append("Erste Frage des simulierten Interviewers schreibt die Eigenschaft HOLY zu („HOLY sagt“, „HOLY wirbt“): "
          + " · ".join(f"„{a}“: {len(v)} von {sum(1 for (b, x) in roh if x == a)} ({', '.join(v) or '–'})"
                       for a, v in zuschreibung.items()) + ".")
md.append("")
md.append("## Grenzen")
md.append("")
md.append("- Alle Leitern stammen von KI-simulierten Personen: Hypothesen, keine Befunde über Kund:innen. "
          "KI-Personas ersetzen kein Kundengespräch (Stenger, S. 78).")
md.append("- Die Ebenen (funktional, psychosozial, Wert) gibt die Leitfrage von P9 vor; die Simulation füllt sie "
          "erwartungsgemäß aus.")
md.append("- Bei wenigen Leitern entscheidet oft eine einzelne Codierentscheidung, ob eine Verbindung den Cut-off "
          "erreicht (siehe Robustheit).")
md.append("")
AUS_MD.write_text("\n".join(md), encoding="utf-8")

# ---------------------------------------------------------------- Bildschirm
print(f"Laddering-Auswertung ({STAND}) – {KENNZEICHNUNG}")
print(f"Leitern: {len(leitern_ids)}  ·  " + "  ·  ".join(
    f"{a}: {len(leitern_je_start[a])} Leitern, {len(abbrueche_je_start[a])} Abbrüche ({', '.join(abbrueche_je_start[a]) or '–'})"
    for a in STARTPUNKTE))
print(f"Codes in Leitern: {len(alle_codes)}  ·  direkte Verbindungen: {len(kanten)}  ·  über dem Cut-off ≥ {CUTOFF}: {len(hvm)}")
print("HVM-Knoten je Ebene:")
for e in EBENEN:
    print(f"  {e}: " + (" · ".join(f"{c} ({len(nennungen[c])})" for c in hvm_knoten if ebene(c) == e) or "–"))
print("HVM-Kanten:")
for (x, y), v in hvm_liste:
    print(f"  {x} → {y}: {len(v)}{'  (knapp)' if len(v) == CUTOFF else ''}")
if beste:
    print(f"Stärkste Leiter: {' → '.join(beste['pfad'])}  (Kanten {beste['kantenzahlen']}, "
          f"vollständig in {len(beste['einzelleitern_vollstaendig'])} Einzelleitern)")
print("Abbruchgründe:", json.dumps(gruende, ensure_ascii=False))
print("Codes außerhalb der HVM mit ≥ Cut-off Nennungen:",
      ", ".join(f"{c} ({len(nennungen[c])})" for c in alle_codes if c not in hvm_knoten and len(nennungen[c]) >= CUTOFF) or "–")
print("Nebenaspekte (Befragte):", json.dumps(nebenaspekte, ensure_ascii=False))
print("Abgleich (Befragte):", json.dumps(abgleich, ensure_ascii=False))
print("Robustheit:")
for r in robustheit:
    print(f"  {r['variante']}: {'HVM unverändert' if r['hvm_unveraendert'] else 'HVM ändert sich'}"
          f"{'' if r['staerkste_leiter_gleich'] else ' · stärkste Leiter anders: ' + ' → '.join(r['staerkste_leiter'] or ['–'])}")
print("Stimmigkeit „ohne Zucker“:", json.dumps(pruef, ensure_ascii=False))
print("Zuschreibung an HOLY in der ersten Frage:", json.dumps(zuschreibung, ensure_ascii=False))
print("Hinweise:")
for h in hinweise:
    print("  -", h)
print(f"Geschrieben: {AUS_MATRIX.name}, {AUS_JSON.name}, {AUS_MD.name}, {AUS_WICHTIG.name}")
