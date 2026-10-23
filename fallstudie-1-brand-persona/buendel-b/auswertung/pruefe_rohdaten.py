#!/usr/bin/env python3
"""Rohdaten-Prüfung: Kennzeichnung „KI-simuliert“ und wiederkehrende Wörter (Schablonen, Klischees).

Bündel B, Fallstudie 1 (HOLY). Alle Rohdaten sind KI-simuliert (Tool): 8 fiktive Befragte T1–T8, jede Person und jedes
Gespräch in einem eigenen Agenten-Lauf (Workflow D25). Das Skript zählt nur, rechnet nichts aus Bewertungen und ändert
keine Rohdaten. Keine Aussagen über Signifikanz oder Repräsentativität. KI-Personas ersetzen kein Kundengespräch;
Stereotype wirken objektiv, Widersprüche verschwinden (Stenger, S. 78). Angelegt in der Nacharbeit am 23.10.2026
(Prüfbefunde „Kennzeichnung in den Rohdaten uneinheitlich“ und „Klischees werden reproduziert“).

Aufruf (aus einem beliebigen Ordner):
    python3 auswertung/pruefe_rohdaten.py

Eingaben (relativ zum Ordner buendel-b; die verworfenen Erstläufe in rohdaten/verworfen-erstlauf/ zählen nicht mit):
    rohdaten/interviews/T1–T8.json   Gespräch 1 der Hauptgruppe (mit Persona-Block)
    rohdaten/kontrolle/T1–T8.json    Kontrollgruppe (ohne Persona-Block, nur Auswahlfragen und Triaden)
    rohdaten/bewertungen/T1–T8.json  Gespräch 2 (P8)
    rohdaten/leitern/T1–T8.json      Gespräch 3 (P9)

Ausgaben (Semikolon, UTF-8; letzte Spalte „quelle“ = Kennzeichnung):
    auswertung/rohdaten-kennzeichnung.csv  je Datei und Feld (befragte, vorstellung): steht „KI-simuliert“ darin?
    auswertung/rohdaten-muster.csv         je Suchwort: Zahl verschiedener Personen (x von 8) in Interviews,
                                           Kontrollgruppe und Laddering, dazu die Personen
    Bildschirm: beides als Übersicht

Regeln und Formeln:
    Kennzeichnung  = Feld enthält die Zeichenfolge „KI-simuliert“ (Groß-/Kleinschreibung beachtet). Fehlt sie, ist das
                     keine Datenänderung wert (Rohdaten bleiben unverändert); es gilt die Kennzeichnung über Ordner und
                     README („alles in rohdaten/ ist KI-simuliert“).
    Suchwort       = regulärer Ausdruck (Spalte suchmuster) über alle Textwerte einer Datei (alle Felder, auch Dialoge)
                     oder nur über ein Feld (z. B. mensch.beziehung_zu_kunden, steht dann im Suchmuster dabei).
                     Personen = Zahl der Dateien T1–T8 einer Gruppe mit mindestens einem Treffer (höchstens 8).
                     Die Begriffe stammen aus den Prüfberichten (Plausibilität und Verzerrung, 23.10.2026). Nach einem
                     ersten Lauf wurden die Suchmuster an Schreibvarianten angepasst („nicht der … sein, wegen/bei dem“
                     statt nur „nicht derjenige“; „verkaufen“ nur im Feld Beziehung) und „Typ“ herausgenommen, weil es
                     die Markenperson beschreibt, nicht die Trinkenden. Ergebnisse sind Häufigkeiten, keine Statistik.
    Google Sheets (Text einer Person in A2, z. B. aus einem JSON-Export): =WENN(REGEXMATCH(A2;"Tanke");1;0), dann
                     =SUMME(B2:B9) über die 8 Personen.

Das Skript ist deterministisch: gleiche Eingaben ergeben gleiche Ausgaben (feste Reihenfolge, kein Zufall).
"""
import csv
import json
import re
import sys
from pathlib import Path

BASIS = Path(__file__).resolve().parent.parent  # Ordner buendel-b
ROH = BASIS / "rohdaten"
GRUPPEN = {"interviews": "Gespräch 1 (haupt)", "kontrolle": "Kontrollgruppe", "bewertungen": "Gespräch 2 (P8)",
           "leitern": "Gespräch 3 (P9)"}
BEFRAGTE = [f"T{i}" for i in range(1, 9)]
AUS_KENNZ = BASIS / "auswertung" / "rohdaten-kennzeichnung.csv"
AUS_MUSTER = BASIS / "auswertung" / "rohdaten-muster.csv"
QUELLE = "KI-simuliert (Tool) – 8 fiktive Befragte, Bündel B, Workflow D25"

# Suchwörter: (Bezeichnung, regulärer Ausdruck, Gruppen, in denen gezählt wird, Feld oder None = ganze Datei)
FELD_BEZIEHUNG = ("mensch", "beziehung_zu_kunden")
MUSTER = [
    ("Tanke", r"Tanke", ["interviews", "kontrolle", "leitern"], None),
    ("Sneaker", r"Sneaker", ["interviews"], None),
    ("Cap", r"\bCaps?\b", ["interviews"], None),
    ("Hoodie", r"Hoodie", ["interviews"], None),
    ("Beziehung zu den Kund:innen: „verkaufen“", r"verkaufen", ["interviews"], FELD_BEZIEHUNG),
    ("Beziehung zu den Kund:innen: „verkaufen“ oder „Rabatt“", r"verkaufen|Rabatt", ["interviews"], FELD_BEZIEHUNG),
    ("Jungs / Kerle (Trinkende als junge Männer)", r"Jungs|Kerl", ["interviews", "kontrolle"], None),
    ("zocken / Zocker / Gaming", r"[Zz]ock|Gaming|Gamer", ["interviews", "kontrolle"], None),
    ("Gym / Fitness", r"Gym|Fitness", ["interviews", "kontrolle"], None),
    ("„nicht der … sein, wegen/bei dem …“", r"nicht der\w* (\w+ )?sein( will)?, (wegen|bei) dem", ["leitern"], None),
    ("Oma / Opa", r"\bOma\b|\bOpa\b", ["interviews", "kontrolle"], None),
    ("Absturz / Loch / Crash / Hänger", r"Absturz|\bLoch\b|Crash|Hänger", ["interviews", "leitern"], None),
]

fehler = []


def texte(wert):
    """Alle Zeichenketten in einem JSON-Wert (rekursiv), in fester Reihenfolge."""
    if isinstance(wert, str):
        return [wert]
    if isinstance(wert, list):
        return [t for x in wert for t in texte(x)]
    if isinstance(wert, dict):
        return [t for k in wert for t in texte(wert[k])]
    return []


def feldwert(daten, feld):
    """Ganze Datei (feld = None) oder ein Feld wie ("mensch", "beziehung_zu_kunden")."""
    if feld is None:
        return daten
    for schluessel in feld:
        daten = daten.get(schluessel, {}) if isinstance(daten, dict) else {}
    return daten


def lies(gruppe, person):
    pfad = ROH / gruppe / f"{person}.json"
    try:
        return json.loads(pfad.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as e:
        fehler.append(f"{pfad.relative_to(BASIS)}: nicht lesbar ({e})")
        return None


def main():
    daten = {(g, p): lies(g, p) for g in GRUPPEN for p in BEFRAGTE}

    # 1) Kennzeichnung
    kennz = []
    for (g, p), d in daten.items():
        if d is None:
            continue
        for feld in ("befragte", "vorstellung"):
            if feld in d:
                wert = str(d[feld])
                kennz.append([f"rohdaten/{g}/{p}.json", feld, wert[:60], "ja" if "KI-simuliert" in wert else "nein",
                              QUELLE])
    with open(AUS_KENNZ, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, delimiter=";", lineterminator="\n")
        w.writerow(["datei", "feld", "wert_anfang", "ki_simuliert_im_feld", "quelle"])
        w.writerows(kennz)
    ohne = [z for z in kennz if z[3] == "nein"]
    print("KI-simuliert (Tool) – Rohdaten-Prüfung (zählt nur, ändert nichts)")
    print(f"\nKennzeichnung: {len(kennz)} Felder geprüft, ohne „KI-simuliert“: {len(ohne)}")
    for z in ohne:
        print(f"  {z[0]} · {z[1]}: „{z[2]}“")

    # 2) Suchwörter
    zeilen = []
    print("\nWiederkehrende Wörter (Personen mit mindestens einem Treffer, x von 8):")
    for name, muster, gruppen, feld in MUSTER:
        rx = re.compile(muster)
        werte = []
        for g in GRUPPEN:
            if g not in gruppen:
                werte += ["", ""]
                continue
            treffer = [p for p in BEFRAGTE if daten[(g, p)] is not None
                       and any(rx.search(t) for t in texte(feldwert(daten[(g, p)], feld)))]
            werte += [f"{len(treffer)}/8", ", ".join(treffer)]
        zeilen.append([name, muster + (f"  (nur Feld {'.'.join(feld)})" if feld else "")] + werte + [QUELLE])
        teile = [f"{GRUPPEN[g]} {werte[2 * i]}" for i, g in enumerate(GRUPPEN) if g in gruppen]
        print(f"  {name:<44} " + " · ".join(teile))
    kopf = ["begriff", "suchmuster"]
    for g in GRUPPEN:
        kopf += [f"{g}_personen", f"{g}_wer"]
    with open(AUS_MUSTER, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, delimiter=";", lineterminator="\n")
        w.writerow(kopf + ["quelle"])
        w.writerows(zeilen)
    print(f"\nGeschrieben: {AUS_KENNZ.relative_to(BASIS)}, {AUS_MUSTER.relative_to(BASIS)}")
    for x in fehler:
        print("FEHLER:", x)
    print("Ergebnis:", "OK" if not fehler else f"{len(fehler)} Fehler")
    return 1 if fehler else 0


if __name__ == "__main__":
    sys.exit(main())
