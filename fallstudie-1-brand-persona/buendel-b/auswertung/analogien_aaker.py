#!/usr/bin/env python3
"""Analogien (Teil 3) und Aaker-Bogen (Teil 4): Codierung prüfen, Häufigkeiten zählen, Aaker-Dimensionen mitteln.

Bündel B, Fallstudie 1 (HOLY). Alle Antworten sind KI-simuliert (Tool), keine echten Befragten (T1–T8, Hauptgruppe
mit Persona-Block; die Kontrollgruppe hat keine Teile 3 und 4). Das Skript zählt und mittelt nur. Es macht keine
Aussagen über Signifikanz oder Repräsentativität. KI-Personas ersetzen kein Kundengespräch (Stenger, S. 78).

Aufruf (aus einem beliebigen Ordner):
    python3 auswertung/analogien_aaker.py

Eingaben (relativ zum Ordner buendel-b):
    rohdaten/interviews/T1.json … T8.json   Teile 3 (tier, mensch, gefuehle, erlebnis), 4 (aaker), 5 (holy_gekauft)
    codierung/analogien-codebuch.csv        id;kategorie;bezeichnung;obergruppe;definition;beispiele;verwandt;
                                            aaker_facette;aaker_dimension;im_persona_block
    codierung/analogien-codierung.csv       befragte;teil;originaltext;code  (eine Zeile je Zuordnung)

Ausgaben (Semikolon, UTF-8, Dezimalkomma, gerundet auf 2 Stellen kaufmännisch wie RUNDEN in Sheets; jede Datei hat als
letzte Spalte „quelle“ = Kennzeichnung „KI-simuliert“, damit sie beim Teilen erhalten bleibt):
    auswertung/analogien-haeufigkeiten.csv  je Code: Nennungen, Befragte (Anzahl und Liste)
    auswertung/analogien-obergruppen.csv    je Kategorie und Obergruppe: Nennungen, Befragte
    auswertung/analogien-kombiniert.csv     Code plus „verwandte“ Codes aus der anderen Analogie (Befragte, Vereinigung)
    auswertung/analogien-gefuehle-nach-kauf.csv  Gefühle (Obergruppe) je Kaufstatus
    auswertung/aaker-personen.csv           Dimensionswert je Person und Marke
    auswertung/aaker-dimensionen.csv        Mittel je Marke und Dimension mit n, Minimum, Maximum
    auswertung/aaker-facetten.csv           Mittel je Marke und Facette mit n, Minimum, Maximum, Spanne (max − min)
    auswertung/aaker-folie-08b.csv          Tabelle für Folie 08b: HOLY, Red Bull, waterdrop je Dimension, mit n
    auswertung/aaker-holy-nach-kauf.csv     HOLY je Dimension, getrennt nach Kaufstatus (nur Information)

Regeln für die Codierung (Prüfung, Verstoß = Fehler, Exit-Code 1):
    - befragte in T1–T8, teil aus TEILE, code im Codebuch, Kategorie des Codes passt zum Teil (ERLAUBT)
    - originaltext steht wörtlich im Rohdatenfeld des Teils (bei Listen in einem Element)
    - jedes Rohdatenfeld bzw. Listenelement der Teile 3 und 5 hat mindestens eine Zuordnung (Vollständigkeit)
    - je Person genau ein Code der Kategorien Tier, Geschlecht, Alter, Kauf
    - keine doppelte Zeile (gleiche Person, gleicher Teil, gleicher Text, gleicher Code)

Formeln Häufigkeiten (wie methoden.md §2, Schritt 2: „Häufigkeit zählen“):
    Nennungen  = Anzahl Zeilen in analogien-codierung.csv mit diesem Code
    Befragte   = Anzahl verschiedener Personen (T1–T8) mit mindestens einer Zeile dieses Codes
    Obergruppe = wie oben, aber über alle Codes mit dieser Obergruppe (Spalte obergruppe im Codebuch)
    Kombiniert = Befragte mit dem Zielcode ODER einem Code, dessen Spalte „verwandt“ auf den Zielcode zeigt
                 (Vereinigungsmenge, jede Person höchstens einmal). „verwandt“ verbindet nur Mensch- und
                 Tier-Analogie (Tiergrund → Eigenschaft, Stil oder Beziehung), keine Gefühle.

Formeln Aaker (Zuordnung Facette → Dimension nach Aaker 1997; deutsche Facettenwörter sind eine Übersetzung aus
dem Modellwissen, mit der Vorlesung abgleichen; Skala 1 = trifft gar nicht zu … 5 = trifft voll zu):
    Dimensionswert (Person p, Marke m, Dimension d) = Mittel der Facetten von d, die p für m bewertet hat
                                                      (null = keine Angabe, wird ausgelassen)
    Dimensionsmittel (m, d) = Mittel der Dimensionswerte über alle Personen, die m kennen (bekannt = true)
                              und mindestens eine Facette von d bewertet haben
    n (m, d)                = Anzahl dieser Personen
    Facettenmittel (m, f)   = Mittel der Werte von f über alle Personen mit Wert (n = Anzahl)
    Spanne (m, f)           = größter minus kleinster Wert von f bei m (0 = alle Personen geben denselben Wert)
    Differenz               = Dimensionsmittel HOLY − Dimensionsmittel Wettbewerber (aus den ungerundeten Werten)
    Gerechnet wird mit exakten Brüchen; gerundet wird erst bei der Ausgabe (2 Stellen, halbe Werte von null weg).

Nachrechnen in Google Sheets (Blatt „aaker“: eine Zeile je Person und Marke, Spalten A befragte, B marke,
C–F bodenständig, ehrlich, gesund, fröhlich, G–J gewagt, temperamentvoll, fantasievoll, zeitgemäß,
K–M zuverlässig, intelligent, erfolgreich, N–O vornehm, charmant, P–Q naturverbunden, robust; null = leere Zelle,
unbekannte Marken weglassen):
    Aufrichtigkeit je Person:  =WENNFEHLER(MITTELWERT(C2:F2);"")   (MITTELWERT überspringt leere Zellen)
    Spannung je Person:        =WENNFEHLER(MITTELWERT(G2:J2);"")
    Kompetenz je Person:       =WENNFEHLER(MITTELWERT(K2:M2);"")
    Kultiviertheit je Person:  =WENNFEHLER(MITTELWERT(N2:O2);"")
    Robustheit je Person:      =WENNFEHLER(MITTELWERT(P2:Q2);"")
    Mittel je Marke (Spalte R = Aufrichtigkeit je Person): =RUNDEN(MITTELWERTWENN(B:B;"HOLY";R:R);2)
    n je Marke:                =ZÄHLENWENNS(B:B;"HOLY";R:R;"<>")
Häufigkeiten (Blatt „codierung“, A befragte, B teil, C originaltext, D code; Code in A2 des Ergebnisblatts):
    Nennungen: =ZÄHLENWENN(codierung!D:D;A2)
    Befragte:  =ANZAHL2(EINDEUTIG(FILTER(codierung!A:A;codierung!D:D=A2)))

Das Skript ist deterministisch: gleiche Eingaben ergeben gleiche Ausgaben (feste Sortierung, kein Zufall).
"""
import csv
import json
import sys
from collections import defaultdict
from decimal import ROUND_HALF_UP, Decimal
from fractions import Fraction
from pathlib import Path

BASIS = Path(__file__).resolve().parent.parent  # Ordner buendel-b
INTERVIEWS = BASIS / "rohdaten" / "interviews"
CODEBUCH = BASIS / "codierung" / "analogien-codebuch.csv"
CODIERUNG = BASIS / "codierung" / "analogien-codierung.csv"
AUSGABE = BASIS / "auswertung"

BEFRAGTE = [f"T{i}" for i in range(1, 9)]
MARKEN = ["HOLY", "Red Bull", "waterdrop"]  # Bogen Teil 4: HOLY und die 2 Wettbewerber von Folie 08b

# Aaker (1997): 5 Dimensionen mit 15 Facetten. Reihenfolge wie im Bogen der Befragung.
DIMENSIONEN = {
    "Aufrichtigkeit": ["bodenständig", "ehrlich", "gesund", "fröhlich"],
    "Spannung": ["gewagt", "temperamentvoll", "fantasievoll", "zeitgemäß"],
    "Kompetenz": ["zuverlässig", "intelligent", "erfolgreich"],
    "Kultiviertheit": ["vornehm", "charmant"],
    "Robustheit": ["naturverbunden", "robust"],
}
FACETTEN = [f for liste in DIMENSIONEN.values() for f in liste]
DIMENSION_VON = {f: d for d, liste in DIMENSIONEN.items() for f in liste}

# Teil der Codierung -> (Weg ins JSON, Liste ja/nein)
TEILE = {
    "tier": (("tier", "tier"), False),
    "tier_grund": (("tier", "gruende"), True),
    "mensch_kurz": (("mensch", "kurzbeschreibung"), False),
    "mensch_alter": (("mensch", "alter"), False),
    "mensch_beruf": (("mensch", "beruf"), False),
    "mensch_stil": (("mensch", "stil"), False),
    "mensch_party": (("mensch", "auf_der_party"), False),
    "mensch_beziehung": (("mensch", "beziehung_zu_kunden"), False),
    "mensch_grund": (("mensch", "gruende"), True),
    "gefuehl": (("gefuehle",), True),
    "erlebnis": (("erlebnis",), False),
    "kauf": (("holy_gekauft",), False),
}
# Welche Kategorien des Codebuchs in welchem Teil vorkommen dürfen
ERLAUBT = {
    "tier": {"Tier"},
    "tier_grund": {"Tiergrund", "Quelle", "Beziehung"},
    "mensch_kurz": {"Geschlecht", "Eigenschaft", "Beziehung", "Quelle"},
    "mensch_alter": {"Alter", "Beziehung"},
    "mensch_beruf": {"Beruf"},
    "mensch_stil": {"Stil"},
    "mensch_party": {"Eigenschaft"},
    "mensch_beziehung": {"Beziehung", "Eigenschaft"},
    "mensch_grund": {"Eigenschaft", "Beziehung", "Quelle", "Stil"},
    "gefuehl": {"Gefühl"},
    "erlebnis": {"Erlebnis"},
    "kauf": {"Kauf"},
}
GENAU_EINMAL = ["Tier", "Geschlecht", "Alter", "Kauf"]  # je Person genau ein Code dieser Kategorien
KATEGORIE_REIHENFOLGE = ["Tier", "Tiergrund", "Geschlecht", "Alter", "Beruf", "Stil", "Eigenschaft", "Beziehung",
                         "Quelle", "Gefühl", "Erlebnis", "Kauf"]
KOPF_CODEBUCH = ["id", "kategorie", "bezeichnung", "obergruppe", "definition", "beispiele", "verwandt",
                 "aaker_facette", "aaker_dimension", "im_persona_block"]
KOPF_CODIERUNG = ["befragte", "teil", "originaltext", "code"]

fehler = []    # Verstöße -> Exit-Code 1
hinweise = []  # zur Kenntnis


def lies_csv(pfad, kopf):
    with open(pfad, encoding="utf-8", newline="") as f:
        leser = csv.DictReader(f, delimiter=";")
        if leser.fieldnames != kopf:
            fehler.append(f"{pfad.name}: Kopfzeile {leser.fieldnames} statt {kopf}")
        return list(leser)


QUELLE = "KI-simuliert (Tool) – 8 fiktive Befragte, codiert KI-gestützt, Bündel B, Workflow D25"


def schreib_csv(name, kopf, zeilen):
    """Schreibt eine Ausgabe-CSV; hängt an jede Zeile die Kennzeichnung (Spalte „quelle“) an."""
    with open(AUSGABE / name, "w", encoding="utf-8", newline="") as f:
        schreiber = csv.writer(f, delimiter=";", lineterminator="\n")
        schreiber.writerow(list(kopf) + ["quelle"])
        schreiber.writerows([list(z) + [QUELLE] for z in zeilen])


def zahl(wert):
    """Bruch -> Text mit 2 Nachkommastellen, Dezimalkomma, halbe Werte von null weg (wie RUNDEN in Sheets)."""
    if wert is None:
        return ""
    d = (Decimal(wert.numerator) / Decimal(wert.denominator)).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)
    return str(d).replace(".", ",")


def zahl_float(wert):
    return float(zahl(wert).replace(",", ".")) if wert is not None else None


def mittel(werte):
    werte = [w for w in werte if w is not None]
    return Fraction(sum(werte), len(werte)) if werte else None


def feld(daten, weg):
    for schluessel in weg:
        daten = daten[schluessel]
    return daten


# ---------------------------------------------------------------- Rohdaten
roh = {}
for t in BEFRAGTE:
    pfad = INTERVIEWS / f"{t}.json"
    try:
        roh[t] = json.loads(pfad.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as e:
        fehler.append(f"{pfad.name}: nicht lesbar ({e})")
if fehler:
    print("\n".join("FEHLER: " + f for f in fehler))
    sys.exit(1)

# ---------------------------------------------------------------- Codebuch und Codierung
codebuch = {z["id"]: z for z in lies_csv(CODEBUCH, KOPF_CODEBUCH)}
codierung = lies_csv(CODIERUNG, KOPF_CODIERUNG)

for cid, z in codebuch.items():
    if z["kategorie"] not in KATEGORIE_REIHENFOLGE:
        fehler.append(f"Codebuch {cid}: unbekannte Kategorie {z['kategorie']}")
    if z["verwandt"] != "–" and z["verwandt"] not in codebuch:
        fehler.append(f"Codebuch {cid}: verwandt = {z['verwandt']} steht nicht im Codebuch")

gesehen = set()
for nr, z in enumerate(codierung, start=2):  # Zeile 1 = Kopf
    ort = f"analogien-codierung.csv Zeile {nr}"
    t, teil, text, code = z["befragte"], z["teil"], z["originaltext"], z["code"]
    if t not in BEFRAGTE:
        fehler.append(f"{ort}: befragte {t!r} unbekannt")
        continue
    if teil not in TEILE:
        fehler.append(f"{ort}: teil {teil!r} unbekannt")
        continue
    if code not in codebuch:
        fehler.append(f"{ort}: code {code!r} fehlt im Codebuch")
        continue
    if codebuch[code]["kategorie"] not in ERLAUBT[teil]:
        fehler.append(f"{ort}: {code} ({codebuch[code]['kategorie']}) passt nicht zu Teil {teil}")
    weg, ist_liste = TEILE[teil]
    quelle = feld(roh[t], weg)
    elemente = quelle if ist_liste else [quelle]
    if not text or not any(text in e for e in elemente):
        fehler.append(f"{ort}: originaltext steht nicht wörtlich in {t} {'/'.join(weg)}: {text!r}")
    schluessel = (t, teil, text, code)
    if schluessel in gesehen:
        fehler.append(f"{ort}: doppelte Zeile {schluessel}")
    gesehen.add(schluessel)

# Vollständigkeit: jedes Feld bzw. Listenelement hat mindestens eine Zuordnung
for t in BEFRAGTE:
    for teil, (weg, ist_liste) in TEILE.items():
        quelle = feld(roh[t], weg)
        elemente = quelle if ist_liste else [quelle]
        texte = [z["originaltext"] for z in codierung if z["befragte"] == t and z["teil"] == teil]
        for e in elemente:
            if not any(x and x in e for x in texte):
                fehler.append(f"Vollständigkeit: {t} {teil} ohne Zuordnung: {e!r}")

# Genau ein Code je Person in den Kategorien Tier, Geschlecht, Alter, Kauf
for t in BEFRAGTE:
    for kat in GENAU_EINMAL:
        codes = {z["code"] for z in codierung if z["befragte"] == t and codebuch.get(z["code"], {}).get("kategorie") == kat}
        if len(codes) != 1:
            fehler.append(f"{t}: Kategorie {kat} hat {len(codes)} Codes {sorted(codes)} statt genau 1")

# ---------------------------------------------------------------- Aaker-Rohdaten prüfen
aaker = {}  # (befragte, marke) -> dict facette -> Wert oder None; nur bekannte Marken
for t in BEFRAGTE:
    eintraege = roh[t].get("aaker", [])
    marken = [e.get("marke") for e in eintraege]
    if sorted(marken) != sorted(MARKEN):
        fehler.append(f"{t} aaker: Marken {marken} statt {MARKEN}")
    bekannte_auswahl = set(roh[t]["auswahlfragen"]["bekannte_marken"])
    for e in eintraege:
        m, bekannt, werte = e.get("marke"), e.get("bekannt"), e.get("werte", {})
        if set(werte) != set(FACETTEN):
            fehler.append(f"{t} aaker {m}: Facetten {sorted(werte)} weichen vom Bogen ab")
            continue
        if bekannt is not True and bekannt is not False:
            fehler.append(f"{t} aaker {m}: bekannt = {bekannt!r}")
            continue
        if bekannt != (m in bekannte_auswahl):
            hinweise.append(f"{t} aaker {m}: bekannt = {bekannt}, Auswahlfrage nennt die Marke {'' if m in bekannte_auswahl else 'nicht '}")
        if not bekannt:
            if any(v is not None for v in werte.values()):
                fehler.append(f"{t} aaker {m}: Marke unbekannt, aber Werte angegeben")
            continue
        for f, v in werte.items():
            if v is not None and (not isinstance(v, int) or isinstance(v, bool) or not 1 <= v <= 5):
                fehler.append(f"{t} aaker {m} {f}: Wert {v!r} nicht in 1–5")
        nulls = [f for f, v in werte.items() if v is None]
        if nulls:
            hinweise.append(f"{t} aaker {m}: keine Angabe (null) bei {', '.join(nulls)}")
        aaker[(t, m)] = werte

if fehler:
    print("Prüfung: FEHLER")
    print("\n".join("FEHLER: " + f for f in fehler))
    sys.exit(1)

# ---------------------------------------------------------------- Häufigkeiten
personen_je_code = defaultdict(set)
nennungen_je_code = defaultdict(int)
for z in codierung:
    personen_je_code[z["code"]].add(z["befragte"])
    nennungen_je_code[z["code"]] += 1


def befragte_text(menge):
    return ", ".join(sorted(menge, key=lambda x: int(x[1:])))


def sortierschluessel(cid):
    z = codebuch[cid]
    return (KATEGORIE_REIHENFOLGE.index(z["kategorie"]), -len(personen_je_code[cid]), -nennungen_je_code[cid], cid)


zeilen = []
for cid in sorted(codebuch, key=sortierschluessel):
    z = codebuch[cid]
    zeilen.append([z["kategorie"], cid, z["bezeichnung"], z["obergruppe"], nennungen_je_code[cid],
                   len(personen_je_code[cid]), befragte_text(personen_je_code[cid]), z["aaker_dimension"],
                   z["im_persona_block"]])
schreib_csv("analogien-haeufigkeiten.csv",
            ["kategorie", "code", "bezeichnung", "obergruppe", "nennungen", "befragte_n", "befragte",
             "aaker_dimension", "im_persona_block"], zeilen)

# Obergruppen
ober_personen = defaultdict(set)
ober_nennungen = defaultdict(int)
for z in codierung:
    cb = codebuch[z["code"]]
    if cb["obergruppe"] != "–":
        ober_personen[(cb["kategorie"], cb["obergruppe"])].add(z["befragte"])
        ober_nennungen[(cb["kategorie"], cb["obergruppe"])] += 1
ober_zeilen = [[k, o, ober_nennungen[(k, o)], len(p), befragte_text(p)]
               for (k, o), p in sorted(ober_personen.items(),
                                       key=lambda x: (KATEGORIE_REIHENFOLGE.index(x[0][0]), -len(x[1]), x[0][1]))]
schreib_csv("analogien-obergruppen.csv", ["kategorie", "obergruppe", "nennungen", "befragte_n", "befragte"],
            ober_zeilen)

# Kombiniert: Zielcode plus verwandte Codes (Vereinigung der Befragten)
ziele = defaultdict(list)
for cid, z in codebuch.items():
    if z["verwandt"] != "–":
        ziele[z["verwandt"]].append(cid)
komb_zeilen = []
for ziel in sorted(ziele, key=lambda c: (-len(personen_je_code[c].union(*[personen_je_code[x] for x in ziele[c]])), c)):
    menge = set(personen_je_code[ziel])
    for x in ziele[ziel]:
        menge |= personen_je_code[x]
    komb_zeilen.append([ziel, codebuch[ziel]["bezeichnung"], len(personen_je_code[ziel]),
                        " + ".join(sorted(ziele[ziel])), len(menge), befragte_text(menge)])
schreib_csv("analogien-kombiniert.csv",
            ["zielcode", "bezeichnung", "befragte_n_zielcode", "verwandte_codes", "befragte_n_kombiniert",
             "befragte_kombiniert"], komb_zeilen)

# Kaufstatus je Person und Gefühle nach Kaufstatus
kauf_von = {z["befragte"]: z["code"] for z in codierung if codebuch[z["code"]]["kategorie"] == "Kauf"}
kauf_reihenfolge = ["KAUF_REGELMAESSIG", "KAUF_EINMAL", "KAUF_NIE"]
gef_gruppen = sorted({codebuch[c]["obergruppe"] for c in codebuch if codebuch[c]["kategorie"] == "Gefühl"})
gef_zeilen = []
for k in kauf_reihenfolge:
    personen = [t for t in BEFRAGTE if kauf_von[t] == k]
    for g in gef_gruppen:
        n = sum(1 for z in codierung if z["befragte"] in personen and codebuch[z["code"]]["kategorie"] == "Gefühl"
                and codebuch[z["code"]]["obergruppe"] == g)
        gef_zeilen.append([codebuch[k]["bezeichnung"], ", ".join(personen), g, n])
schreib_csv("analogien-gefuehle-nach-kauf.csv", ["kaufstatus", "befragte", "gefuehl_obergruppe", "nennungen"],
            gef_zeilen)

# ---------------------------------------------------------------- Aaker
dimwert = {}  # (befragte, marke, dimension) -> Bruch oder None
pers_zeilen = []
for t in BEFRAGTE:
    for m in MARKEN:
        if (t, m) not in aaker:
            continue
        werte = aaker[(t, m)]
        for d, facetten in DIMENSIONEN.items():
            vorhanden = [werte[f] for f in facetten if werte[f] is not None]
            dimwert[(t, m, d)] = mittel(vorhanden)
            pers_zeilen.append([t, m, d, zahl(dimwert[(t, m, d)]), len(vorhanden), len(facetten) - len(vorhanden)])
schreib_csv("aaker-personen.csv", ["befragte", "marke", "dimension", "wert", "facetten_bewertet", "facetten_null"],
            pers_zeilen)

ergebnis = {}  # (marke, dimension) -> (mittel, n, min, max, personen)
dim_zeilen = []
for m in MARKEN:
    for d in DIMENSIONEN:
        personen = [t for t in BEFRAGTE if dimwert.get((t, m, d)) is not None]
        werte = [dimwert[(t, m, d)] for t in personen]
        mw = mittel(werte)
        ergebnis[(m, d)] = (mw, len(werte), min(werte) if werte else None, max(werte) if werte else None, personen)
        dim_zeilen.append([m, d, zahl(mw), len(werte), zahl(ergebnis[(m, d)][2]), zahl(ergebnis[(m, d)][3]),
                           ", ".join(personen)])
schreib_csv("aaker-dimensionen.csv", ["marke", "dimension", "mittel", "n", "min", "max", "befragte"], dim_zeilen)

fac_zeilen = []
for m in MARKEN:
    for f in FACETTEN:
        werte = [aaker[(t, m)][f] for t in BEFRAGTE if (t, m) in aaker and aaker[(t, m)][f] is not None]
        fac_zeilen.append([m, DIMENSION_VON[f], f, zahl(mittel(werte)), len(werte),
                           min(werte) if werte else "", max(werte) if werte else "",
                           (max(werte) - min(werte)) if werte else ""])
schreib_csv("aaker-facetten.csv", ["marke", "dimension", "facette", "mittel", "n", "min", "max", "spanne"], fac_zeilen)

f08_zeilen = []
for d in DIMENSIONEN:
    h, r, w = ergebnis[("HOLY", d)][0], ergebnis[("Red Bull", d)][0], ergebnis[("waterdrop", d)][0]
    f08_zeilen.append([d, zahl(h), zahl(r), zahl(w), ergebnis[("HOLY", d)][1], ergebnis[("Red Bull", d)][1],
                       ergebnis[("waterdrop", d)][1], zahl(h - r) if None not in (h, r) else "",
                       zahl(h - w) if None not in (h, w) else ""])
schreib_csv("aaker-folie-08b.csv",
            ["dimension", "HOLY", "Red Bull", "waterdrop", "n_HOLY", "n_Red_Bull", "n_waterdrop",
             "HOLY_minus_Red_Bull", "HOLY_minus_waterdrop"], f08_zeilen)

kauf_zeilen = []
for k in kauf_reihenfolge:
    personen = [t for t in BEFRAGTE if kauf_von[t] == k and ("HOLY" in [m for (tt, m) in aaker if tt == t])]
    for d in DIMENSIONEN:
        werte = [dimwert[(t, "HOLY", d)] for t in personen if dimwert.get((t, "HOLY", d)) is not None]
        kauf_zeilen.append([codebuch[k]["bezeichnung"], d, zahl(mittel(werte)), len(werte), ", ".join(personen)])
schreib_csv("aaker-holy-nach-kauf.csv", ["kaufstatus", "dimension", "mittel", "n", "befragte"], kauf_zeilen)

# ---------------------------------------------------------------- Bildschirm
print("Prüfung: OK (Codierung gegen Rohdaten, Vollständigkeit, Codebuch, Aaker-Bogen)")
print(f"Zuordnungen: {len(codierung)} Zeilen, {len(codebuch)} Codes im Codebuch, "
      f"{sum(1 for c in codebuch if nennungen_je_code[c] == 0)} davon ohne Zuordnung")
for h in hinweise:
    print("Hinweis:", h)
for kat in KATEGORIE_REIHENFOLGE:
    print(f"\n{kat} (Befragte von 8 · Nennungen)")
    for cid in sorted((c for c in codebuch if codebuch[c]["kategorie"] == kat), key=sortierschluessel):
        print(f"  {cid:<24} {codebuch[cid]['bezeichnung']:<40} {len(personen_je_code[cid])} · "
              f"{nennungen_je_code[cid]:>2}  {befragte_text(personen_je_code[cid])}")
print("\nObergruppen (Befragte · Nennungen)")
for k, o, n, b, liste in ober_zeilen:
    print(f"  {k:<12} {o:<24} {b} · {n:>2}  {liste}")
print("\nKombiniert (Zielcode + verwandte Codes, Befragte)")
for ziel, bez, n_ziel, verw, n_komb, liste in komb_zeilen:
    print(f"  {ziel:<24} {n_ziel} -> {n_komb}  ({verw})  {liste}")
print("\nGefühle nach Kaufstatus (Nennungen)")
for k, p, g, n in gef_zeilen:
    print(f"  {k:<18} [{p}] {g:<24} {n}")
print("\nAaker: Dimensionsmittel (Skala 1–5), n = Personen, die die Marke kennen und bewertet haben")
print(f"  {'Dimension':<16}" + "".join(f"{m:>20}" for m in MARKEN))
for d in DIMENSIONEN:
    print(f"  {d:<16}" + "".join(f"{zahl(ergebnis[(m, d)][0]):>12} (n={ergebnis[(m, d)][1]})" for m in MARKEN))
print("\nAaker: Streuung der Facetten (Spanne = max − min je Marke und Facette)")
for m in MARKEN:
    sp = [z[7] for z in fac_zeilen if z[0] == m and z[7] != ""]
    print(f"  {m:<10} Facetten ohne Streuung (alle gleich): {sum(1 for x in sp if x == 0)} von {len(sp)}; "
          f"größte Spanne: {max(sp)}")
print("\nAaker: HOLY nach Kaufstatus (nur Information, sehr kleine n)")
for k, d, mw, n, p in kauf_zeilen:
    print(f"  {k:<18} {d:<16} {mw:>6} (n={n})")
print(f"\nCSV geschrieben nach {AUSGABE}")
