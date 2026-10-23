#!/usr/bin/env python3
"""Repertory Grid, P8-Auswertung: Bewertungen mitteln, Auswahlregel anwenden → Markeneigenschaften.

Bündel B, Fallstudie 1 (HOLY). Alle Bewertungen sind KI-simuliert (Tool): T1–T8 der Hauptgruppe (mit Persona-Block),
jede Person in einem eigenen Agenten-Lauf. Keine echten Befragten. Das Skript mittelt und vergleicht nur. Es macht keine
Aussagen über Signifikanz oder Repräsentativität. KI-Personas ersetzen kein Kundengespräch (Stenger, S. 78).

Aufruf (aus einem beliebigen Ordner):
    python3 auswertung/repertory_grid.py

Eingaben (relativ zum Ordner buendel-b):
    rohdaten/bewertungen/T1.json … T8.json  P8-Bewertungen: je Konstrukt K01–K12 die Elemente M, W1–W5, I
                                            (Skala 1 = linker Pol … 7 = rechter Pol, prompts.md P8; null = Marke unbekannt)
    rohdaten/interviews/T1.json … T8.json   nur zur Gegenprobe: auswahlfragen.bekannte_marken (null ⇔ Marke unbekannt?)
    codierung/konstrukte-codebuch.csv       id;links;rechts;definition;beispiele;im_persona_block
    codierung/konstrukte-zuordnung.csv      gruppe;befragte;triade;elemente;paar;einzeln;pol_paar;pol_einzeln;code;holy_seite
    auswertung/konstrukte-nennungen.csv     nur zur Gegenprobe der Nennungen (Ausgabe von pruefe_konstrukte_codierung.py)

Ausgaben (Semikolon, UTF-8, Dezimalkomma, gerundet auf 2 Stellen kaufmännisch wie RUNDEN in Sheets; letzte Spalte
„quelle“ = Kennzeichnung „KI-simuliert“, damit sie beim Teilen der CSV erhalten bleibt):
    auswertung/repertory-grid-bewertungen-lang.csv  eine Zeile je Person × Konstrukt × Element (Rohwerte, zum Nachrechnen)
    auswertung/repertory-grid-ergebnis.csv          eine Zeile je Code (K01–K12 bewertet, X01–X03 nur Kontrollgruppe)
    Bildschirm: Vollständigkeit, Mittelwerte, stärkster Wettbewerber, Auswahl, Hinweise

Elemente (dossier-buendel-b.md §3): M = HOLY, W1 = Red Bull, W2 = Monster, W3 = Gönrgy, W4 = waterdrop,
W5 = Coca-Cola Zero, I = „mein idealer Drink für jeden Tag“.

AUSWAHLREGEL (vor dem Rechnen festgelegt am 22.10.2026 im Auftrag von Yannick; hier nur umgesetzt, nicht geändert):
    Relevanz          = Code von mindestens 3 der 8 Befragten der Hauptgruppe genannt (befragte_haupt ≥ 3).
                        Nennungen = Zahl der zugeordneten Triaden-Antworten (Zeilen in konstrukte-zuordnung.csv).
    Differenzierung   = |Ø M − Ø W|, Ø W = Mittel der fünf Wettbewerber-Mittel Ø W1 … Ø W5; erfüllt bei ≥ 1,0.
    Ideal-Distanz     = |Ø M − Ø I|; Nähe zum Ideal erfüllt bei ≤ 1,0.
    Attribut          = Relevanz UND Differenzierung UND Nähe zum Ideal erfüllt.
                        Wortlaut = der Pol, an dem HOLY liegt (Codebuch-Text, wortgleich für Folie 06, 07 und 10).
                        Höchstens 4 aufs Steuerrad, Rangfolge nach Differenzierung (absteigend); weitere ins Backup.
    Hürde             = Relevanz und Differenzierung erfüllt, Ideal-Distanz > 1,0 und HOLY liegt am vom Ideal
                        abgewandten Pol.
    Mittelwerte       = je Element nur über Befragte mit Wert (null = Marke unbekannt); n je Zelle wird mitgeführt.
    Stärkster Wettbewerber = Wettbewerber mit der kleinsten mittleren Ideal-Distanz über alle bewerteten Konstrukte:
                        Mittel über K01–K12 von |Ø Wk − Ø I|. Spalte staerkster_mittel = sein Ø je Konstrukt.
    Kontrollgruppe    = Nennungen je Code in der Kontrollgruppe stehen daneben (nur Information, keine Auswahlwirkung).
    Rückfall (Auftrag): Ergeben sich weniger als 2 Attribute, wird die Regel NICHT geändert. Startpunkte fürs Laddering
                        sind dann die Attribute plus die besten weiteren Konstrukte nach Differenzierung, gekennzeichnet
                        als „Startpunkt, kein Attribut“ (siehe unten, Umsetzung).

Umsetzung von Punkten, die die Regel offenlässt (technisch, im Ergebnis als Hinweis ausgegeben). Festgelegt hat sie
der auswertende Agent beim Schreiben dieses Skripts – nach Vorliegen der Nennungen und Bewertungen, aber vor dem ersten
Skriptlauf; im Auftrag waren sie nicht vorgegeben. Folgenreich ist der Vorrang für erfüllte Relevanz beim Rückfall:
ohne ihn wäre K12 zweiter Startpunkt (das Skript meldet es als Hinweis).
    Pol, an dem HOLY liegt = rechter Pol bei Ø M > 4 (Skalenmitte), linker Pol bei Ø M < 4, „Mitte“ bei Ø M = 4.
    Pol des Ideals         = genauso mit Ø I. „Vom Ideal abgewandt“ = HOLY und Ideal liegen auf verschiedenen Seiten
                             der Skalenmitte (keiner von beiden genau auf 4).
    Gleichstand in der Rangfolge nach Differenzierung: kleinere Ideal-Distanz, dann mehr Nennungen, dann Code-ID.
                             Das Skript meldet, ob ein solcher Gleichstand überhaupt auftritt.
    Rückfall: aufgefüllt wird bis 2 Startpunkte (die Schwelle aus dem Auftrag). Kandidaten der Reihe nach:
                             (a) Codes ohne Ergebnis („–“) mit erfüllter Relevanz, nach Differenzierung absteigend;
                             (b) falls das nicht reicht: übrige Codes ohne Ergebnis nach Differenzierung.
                             Hürden sind nie Startpunkt (HOLY liegt dort am vom Ideal abgewandten Pol). Codes mit Ø M = 4
                             haben keinen HOLY-Pol und sind nie Startpunkt. Die nächsten Kandidaten nennt das Skript.
    Gleichstand beim stärksten Wettbewerber: erster in der Reihenfolge W1 … W5 (Hinweis, falls er auftritt).
    Gerechnet wird mit exakten Brüchen (fractions.Fraction); alle Schwellen werden an den ungerundeten Werten geprüft.
    Liegt ein Wert so nah an einer Schwelle, dass die gerundete Anzeige täuschen könnte, meldet das Skript einen Hinweis.

SENSITIVITÄT (nur Information, Nacharbeit 23.10.2026; ändert keine Ausgabedatei): Die simulierten Bewertungen von
Gönrgy auf K01 widersprechen dem Recherche-Dossier (Gönrgy ist zuckerfrei, Kap. 5.2 ✔ [109, 115]). Das Skript rechnet
deshalb zusätzlich K01 mit Ø W3 = 7 (Pol „ohne Zucker“) statt des simulierten Mittels und meldet Ø W und
Differenzierung. Formel wie oben: Ø W = (Ø W1 + Ø W2 + 7 + Ø W4 + Ø W5) / 5, Differenzierung = |Ø M − Ø W|.

Formeln (methoden.md §2, Schritt 4; dossier-buendel-b.md §3 B1):
    Ø E (Konstrukt k, Element E) = Summe der Werte von E auf k über alle Befragten mit Wert / n(k, E)
    Ø W (k)                      = (Ø W1 + Ø W2 + Ø W3 + Ø W4 + Ø W5) / 5
    Differenzierung (k)          = |Ø M − Ø W|
    Ideal-Distanz (k)            = |Ø M − Ø I|
    Abstand zum Ideal Wk (k)     = |Ø Wk − Ø I|;  mittlere Ideal-Distanz Wk = Summe über K01–K12 / 12

Nachrechnen in Google Sheets
    1) repertory-grid-bewertungen-lang.csv als Blatt „lang“ importieren (Trennzeichen Semikolon). Spalten: A befragte,
       B konstrukt, C links, D rechts, E element, F marke, G wert (leer = Marke unbekannt).
       Im Ergebnisblatt Code-ID in A2, Element-Kürzel in Zeile 1 (z. B. B1 = "M"):
         Ø je Element:  =MITTELWERTWENNS(lang!$G:$G;lang!$B:$B;$A2;lang!$E:$E;B$1)   (leere Zellen zählen nicht)
         n je Element:  =ZÄHLENWENNS(lang!$B:$B;$A2;lang!$E:$E;B$1;lang!$G:$G;"<>")
       Alternativ wie im Dossier §3 B1: Pivot-Tabelle, Zeilen = konstrukt, Spalten = element, Werte = wert als MITTELWERT.
    2) Mit Spalte B Ø M, C–G Ø W1–W5, H Ø I (wie dossier-buendel-b.md §3 B1):
         Ø W:              =MITTELWERT(C2:G2)
         Differenzierung:  =ABS(B2-I2)          (I2 = Ø W)
         Ideal-Distanz:    =ABS(B2-H2)
         Abstand Ideal W1: =ABS(C2-$H2)  … bis W5 (G2); mittlere Ideal-Distanz W1 = MITTELWERT der Spalte über K01–K12
    3) Nennungen und Befragte (Blatt „zuordnung“ = konstrukte-zuordnung.csv; A gruppe, B befragte, I code):
         Nennungen haupt:  =ZÄHLENWENNS(zuordnung!A:A;"haupt";zuordnung!I:I;A2)
         Befragte haupt:   =ANZAHL2(EINDEUTIG(FILTER(zuordnung!B:B;zuordnung!A:A="haupt";zuordnung!I:I=A2)))
         (Kontrollgruppe: "haupt" durch "kontrolle" ersetzen)
    4) Auswahl (Spalten wie in repertory-grid-ergebnis.csv):
         Attribut:  =UND(Befragte>=3; Differenzierung>=1; IdealDistanz<=1)

HANDPRÜFUNG (zwei Werte, aus den Rohdateien abgeschrieben und schriftlich nachgerechnet; die Summen und Quotienten
habe ich zusätzlich unabhängig vom Skript mit awk gegengerechnet, 23.10.2026):
    (1) K03 („aufmachen, fertig“ – „selbst anrühren“), Ø M:
        Werte M aus rohdaten/bewertungen T1 … T8: 7, 3, 7, 7, 7, 7, 7, 7 → n = 8 (kein null)
        Summe = 7 + 3 + 7 + 7 + 7 + 7 + 7 + 7 = 52;  Ø M = 52 / 8 = 6,5
        Skript (repertory-grid-ergebnis.csv, K03, M_mittel): 6,50 → stimmt.
    (2) K01 („Zuckerbombe“ – „ohne Zucker“), Ø W3 (Gönrgy) mit null:
        Werte W3 aus T1 … T8: 3, null, 5, null, 5, 4, 4, 4 → T2 und T4 kennen Gönrgy nicht, also n = 6
        Summe = 3 + 5 + 5 + 4 + 4 + 4 = 25;  Ø W3 = 25 / 6 = 4,1666… → gerundet 4,17
        Skript (K01, W3_mittel; n_W3): 4,17; 6 → stimmt. Hätte man null als 0 gezählt, käme 25 / 8 = 3,125 heraus;
        das zeigt, dass leere Werte richtig ausgelassen werden.

STAND (Lauf vom 23.10.2026): Die Regel ergibt kein Attribut. Die Regel bleibt unverändert; es greift der Rückfall,
die Startpunkte stehen in repertory-grid-ergebnis.csv, Spalte verwendung = „Startpunkt, kein Attribut“. Die Zahlen
stehen nur in den Ausgabedateien und auf dem Bildschirm, nicht in diesem Kommentar (außer der Handprüfung oben).

Das Skript ist deterministisch: gleiche Eingaben ergeben gleiche Ausgaben (feste Sortierung, kein Zufall).
"""
import csv
import json
import sys
from decimal import ROUND_HALF_UP, Decimal
from fractions import Fraction
from pathlib import Path

BASIS = Path(__file__).resolve().parent.parent  # Ordner buendel-b
BEWERTUNGEN = BASIS / "rohdaten" / "bewertungen"
INTERVIEWS = BASIS / "rohdaten" / "interviews"
CODEBUCH = BASIS / "codierung" / "konstrukte-codebuch.csv"
ZUORDNUNG = BASIS / "codierung" / "konstrukte-zuordnung.csv"
NENNUNGEN_ALT = BASIS / "auswertung" / "konstrukte-nennungen.csv"
AUS_LANG = BASIS / "auswertung" / "repertory-grid-bewertungen-lang.csv"
AUS_ERGEBNIS = BASIS / "auswertung" / "repertory-grid-ergebnis.csv"

BEFRAGTE = [f"T{i}" for i in range(1, 9)]
ELEMENTE = ["M", "W1", "W2", "W3", "W4", "W5", "I"]
WETTBEWERBER = ["W1", "W2", "W3", "W4", "W5"]
MARKEN = {"M": "HOLY", "W1": "Red Bull", "W2": "Monster", "W3": "Gönrgy", "W4": "waterdrop",
          "W5": "Coca-Cola Zero", "I": "mein idealer Drink für jeden Tag"}
SKALA_MIN, SKALA_MAX = 1, 7
MITTE = Fraction(4)  # Skalenmitte 1–7

# Auswahlregel (festgelegt 22.10.2026, nicht ändern)
RELEVANZ_MIN_BEFRAGTE = 3
DIFF_MIN = Fraction(1)        # Differenzierung ≥ 1,0
IDEAL_MAX = Fraction(1)       # Ideal-Distanz ≤ 1,0
STEUERRAD_MAX = 4             # höchstens 4 Attribute aufs Steuerrad
MIN_ATTRIBUTE = 2             # weniger als 2 Attribute → Rückfall (Startpunkte, Regel bleibt)
RUNDUNGSNAEHE = Fraction(1, 200)  # 0,005: so nah an einer Schwelle kann die 2-Stellen-Anzeige täuschen
QUELLE = "KI-simuliert (Tool) – 8 fiktive Befragte, Bündel B, Workflow D25"

KOPF_CODEBUCH = ["id", "links", "rechts", "definition", "beispiele", "im_persona_block"]
KOPF_ZUORDNUNG = ["gruppe", "befragte", "triade", "elemente", "paar", "einzeln",
                  "pol_paar", "pol_einzeln", "code", "holy_seite"]

fehler = []    # Datenfehler -> Exit-Code 1
hinweise = []  # zur Kenntnis


def lies_csv(pfad, kopf):
    with open(pfad, encoding="utf-8", newline="") as f:
        zeilen = list(csv.reader(f, delimiter=";"))
    if not zeilen or zeilen[0] != kopf:
        fehler.append(f"{pfad.name}: Kopfzeile ist {zeilen[0] if zeilen else '(leer)'}, erwartet {kopf}")
        return []
    out = []
    for n, z in enumerate(zeilen[1:], start=2):
        if len(z) != len(kopf):
            fehler.append(f"{pfad.name}, Zeile {n}: {len(z)} statt {len(kopf)} Spalten")
            continue
        out.append(dict(zip(kopf, z)))
    return out


def zahl(wert):
    """Bruch -> Text mit 2 Nachkommastellen, Dezimalkomma, halbe Werte von null weg (wie RUNDEN in Sheets)."""
    if wert is None:
        return ""
    d = (Decimal(wert.numerator) / Decimal(wert.denominator)).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)
    return str(d).replace(".", ",")


def mittel(werte):
    """Mittel nur über vorhandene Werte (None = Marke unbekannt wird ausgelassen); exakter Bruch und n."""
    vorhanden = [w for w in werte if w is not None]
    return (Fraction(sum(vorhanden), len(vorhanden)) if vorhanden else None), len(vorhanden)


def pol(wert):
    """Seite der Skalenmitte: rechts (> 4), links (< 4), Mitte (= 4)."""
    if wert is None:
        return ""
    return "rechts" if wert > MITTE else ("links" if wert < MITTE else "Mitte")


def lies_bewertungen(k_codes):
    """Prüft Vollständigkeit und Wertebereich. Ergebnis: {(T, Konstrukt, Element): Wert oder None}."""
    werte = {}
    for b in BEFRAGTE:
        pfad = BEWERTUNGEN / f"{b}.json"
        if not pfad.exists():
            fehler.append(f"Bewertungsdatei fehlt: {pfad.relative_to(BASIS)}")
            continue
        try:
            d = json.loads(pfad.read_text(encoding="utf-8"))
        except json.JSONDecodeError as e:
            fehler.append(f"Kein gültiges JSON: {pfad.relative_to(BASIS)} ({e})")
            continue
        if not str(d.get("befragte", "")).startswith(b):
            fehler.append(f"{pfad.name}: Feld befragte beginnt nicht mit {b}")
        gesehen = []
        for eintrag in d.get("bewertungen", []):
            k = eintrag.get("konstrukt")
            if k not in k_codes:
                fehler.append(f"{pfad.name}: unbekanntes oder nicht zu bewertendes Konstrukt {k!r}")
                continue
            if k in gesehen:
                fehler.append(f"{pfad.name}: Konstrukt {k} doppelt")
                continue
            gesehen.append(k)
            schluessel = set(eintrag) - {"konstrukt"}
            if schluessel != set(ELEMENTE):
                fehler.append(f"{pfad.name}, {k}: Elemente {sorted(schluessel)} statt {ELEMENTE}")
            for e in ELEMENTE:
                w = eintrag.get(e)
                if w is None:
                    werte[(b, k, e)] = None
                elif isinstance(w, bool) or not isinstance(w, int):
                    fehler.append(f"{pfad.name}, {k}, {e}: kein ganzzahliger Wert ({w!r}), nicht gewertet")
                    werte[(b, k, e)] = None
                elif not SKALA_MIN <= w <= SKALA_MAX:
                    fehler.append(f"{pfad.name}, {k}, {e}: Wert {w} außerhalb {SKALA_MIN}–{SKALA_MAX}, nicht gewertet")
                    werte[(b, k, e)] = None
                else:
                    werte[(b, k, e)] = w
        fehlend = [k for k in k_codes if k not in gesehen]
        if fehlend:
            fehler.append(f"{pfad.name}: Konstrukte fehlen: {', '.join(fehlend)}")
    return werte


def pruefe_null_muster(werte, k_codes):
    """null soll heißen: Marke unbekannt. Also je Person und Element entweder überall null oder nirgends,
    und genau dann, wenn die Marke in den Interviews (auswahlfragen.bekannte_marken) fehlt."""
    for b in BEFRAGTE:
        bekannt = None
        pfad = INTERVIEWS / f"{b}.json"
        if pfad.exists():
            try:
                bekannt = json.loads(pfad.read_text(encoding="utf-8"))["auswahlfragen"]["bekannte_marken"]
            except (json.JSONDecodeError, KeyError, TypeError):
                hinweise.append(f"{b}: bekannte_marken in den Interviews nicht lesbar, Gegenprobe entfällt")
        for e in ELEMENTE:
            nulls = [k for k in k_codes if (b, k, e) in werte and werte[(b, k, e)] is None]
            if e in ("M", "I") and nulls:
                hinweise.append(f"{b}: {e} ({MARKEN[e]}) ist null bei {', '.join(nulls)}")
            if nulls and len(nulls) != len(k_codes):
                hinweise.append(f"{b}: {e} ({MARKEN[e]}) nur teilweise null ({', '.join(nulls)})")
            if bekannt is not None and e != "I":
                unbekannt = MARKEN[e] not in bekannt
                if unbekannt != (len(nulls) == len(k_codes)):
                    hinweise.append(f"{b}: {e} ({MARKEN[e]}) null-Muster passt nicht zu bekannte_marken im Interview")


def main():
    codebuch = lies_csv(CODEBUCH, KOPF_CODEBUCH)
    zuordnung = lies_csv(ZUORDNUNG, KOPF_ZUORDNUNG)
    k_codes = [z["id"] for z in codebuch if z["id"].startswith("K")]  # nur K-Codes gehen in P8
    alle_codes = [z["id"] for z in codebuch]
    cb = {z["id"]: z for z in codebuch}

    werte = lies_bewertungen(k_codes)
    pruefe_null_muster(werte, k_codes)

    # --- Nennungen je Code (Relevanz) aus der Zuordnung -------------------------------------------------------
    nennungen = {(g, c): 0 for g in ("haupt", "kontrolle") for c in alle_codes}
    befragte = {(g, c): set() for g in ("haupt", "kontrolle") for c in alle_codes}
    for z in zuordnung:
        schluessel = (z["gruppe"], z["code"])
        if schluessel not in nennungen:
            fehler.append(f"Zuordnung: unbekannte Gruppe/Code {schluessel}")
            continue
        nennungen[schluessel] += 1
        befragte[schluessel].add(z["befragte"])
    # Gegenprobe mit der Ausgabe des Codier-Skripts
    if NENNUNGEN_ALT.exists():
        with open(NENNUNGEN_ALT, encoding="utf-8", newline="") as f:
            for z in csv.DictReader(f, delimiter=";"):
                c = z["id"]
                for g in ("haupt", "kontrolle"):
                    if c in alle_codes and (str(nennungen[(g, c)]) != z[f"nennungen_{g}"]
                                            or str(len(befragte[(g, c)])) != z[f"befragte_{g}"]):
                        hinweise.append(f"{c} {g}: Nennungen/Befragte weichen von konstrukte-nennungen.csv ab")

    # --- Mittelwerte je Konstrukt und Element ------------------------------------------------------------------
    mw, n = {}, {}
    for k in k_codes:
        for e in ELEMENTE:
            mw[(k, e)], n[(k, e)] = mittel([werte.get((b, k, e)) for b in BEFRAGTE])
            if mw[(k, e)] is None:
                hinweise.append(f"{k}: kein einziger Wert für {e} ({MARKEN[e]})")

    erg = {}
    for k in k_codes:
        w_mittel = [mw[(k, w)] for w in WETTBEWERBER if mw[(k, w)] is not None]
        if len(w_mittel) != 5:
            hinweise.append(f"{k}: Ø W nur über {len(w_mittel)} Wettbewerber")
        ø_w = sum(w_mittel) / len(w_mittel)
        ø_m, ø_i = mw[(k, "M")], mw[(k, "I")]
        erg[k] = {"W": ø_w, "diff": abs(ø_m - ø_w), "ideal": abs(ø_m - ø_i),
                  "abstand": {w: abs(mw[(k, w)] - ø_i) for w in WETTBEWERBER}}

    # --- Stärkster Wettbewerber: kleinste mittlere Ideal-Distanz über alle K-Codes ---------------------------
    mittlere_distanz = {w: sum(erg[k]["abstand"][w] for k in k_codes) / len(k_codes) for w in WETTBEWERBER}
    kleinste = min(mittlere_distanz.values())
    kandidaten = [w for w in WETTBEWERBER if mittlere_distanz[w] == kleinste]
    if len(kandidaten) > 1:
        hinweise.append(f"Gleichstand beim stärksten Wettbewerber: {kandidaten}; gewählt {kandidaten[0]} (Reihenfolge)")
    staerkster = kandidaten[0]

    # --- Auswahlregel je Konstrukt -----------------------------------------------------------------------------
    for k in k_codes:
        r = erg[k]
        r["rel_ok"] = len(befragte[("haupt", k)]) >= RELEVANZ_MIN_BEFRAGTE
        r["diff_ok"] = r["diff"] >= DIFF_MIN
        r["ideal_ok"] = r["ideal"] <= IDEAL_MAX
        r["holy_pol"] = pol(mw[(k, "M")])
        r["ideal_pol"] = pol(mw[(k, "I")])
        r["wortlaut"] = cb[k][r["holy_pol"]] if r["holy_pol"] in ("links", "rechts") else ""
        abgewandt = (r["holy_pol"] in ("links", "rechts") and r["ideal_pol"] in ("links", "rechts")
                     and r["holy_pol"] != r["ideal_pol"])
        if r["rel_ok"] and r["diff_ok"] and r["ideal_ok"] and r["holy_pol"] != "Mitte":
            r["ergebnis"] = "Attribut"
        elif r["rel_ok"] and r["diff_ok"] and r["ideal"] > IDEAL_MAX and abgewandt:
            r["ergebnis"] = "Hürde"
        else:
            r["ergebnis"] = "–"
            if r["rel_ok"] and r["diff_ok"] and r["ideal"] > IDEAL_MAX:
                hinweise.append(f"{k}: Relevanz und Differenzierung erfüllt, Ideal-Distanz > 1,0, aber HOLY "
                                f"({r['holy_pol']}) nicht am vom Ideal ({r['ideal_pol']}) abgewandten Pol → weder "
                                f"Attribut noch Hürde")
        if r["rel_ok"] and r["diff_ok"] and r["ideal_ok"] and r["holy_pol"] == "Mitte":
            hinweise.append(f"{k}: alle drei Kriterien erfüllt, aber Ø M = 4 (kein Pol) → nicht als Attribut gezählt")
        # Anzeige kann täuschen, wenn ein Wert sehr nah an einer Schwelle liegt
        for name, wert, schwelle in (("Differenzierung", r["diff"], DIFF_MIN), ("Ideal-Distanz", r["ideal"], IDEAL_MAX)):
            if wert != schwelle and abs(wert - schwelle) < RUNDUNGSNAEHE:
                hinweise.append(f"{k}: {name} {float(wert):.4f} liegt sehr nah an der Schwelle {zahl(schwelle)}")
        # Pol nach Skalenmitte und Richtung gegenüber den Wettbewerbern sollten übereinstimmen
        richtung_w = "rechts" if mw[(k, "M")] > r["W"] else ("links" if mw[(k, "M")] < r["W"] else "gleich")
        r["richtung_w"] = richtung_w
        if r["diff_ok"] and r["holy_pol"] in ("links", "rechts") and richtung_w != r["holy_pol"]:
            hinweise.append(f"{k}: HOLY liegt am {r['holy_pol']}en Pol (Skalenmitte), ist aber gegenüber Ø W "
                            f"weiter {richtung_w} → Wortlaut mit Vorsicht")

    def sortierschluessel(k):
        # Rangfolge nach Differenzierung absteigend; Gleichstand: kleinere Ideal-Distanz, mehr Nennungen, Code-ID
        return (-erg[k]["diff"], erg[k]["ideal"], -nennungen[("haupt", k)], k)

    rangfolge = sorted(k_codes, key=sortierschluessel)
    for i, k in enumerate(rangfolge, start=1):
        erg[k]["rang"] = i
    for a, b in zip(rangfolge, rangfolge[1:]):
        if erg[a]["diff"] == erg[b]["diff"]:
            hinweise.append(f"Gleichstand Differenzierung {a}/{b} ({zahl(erg[a]['diff'])}), technisch aufgelöst")

    attribute = [k for k in rangfolge if erg[k]["ergebnis"] == "Attribut"]
    for i, k in enumerate(attribute, start=1):
        erg[k]["verwendung"] = f"Steuerrad (Attribut {i})" if i <= STEUERRAD_MAX else f"Backup (Attribut {i})"
    startpunkte = list(attribute[:STEUERRAD_MAX])
    naechste = []
    if len(attribute) < MIN_ATTRIBUTE:
        hinweise.append(f"Die Regel ergibt {len(attribute)} Attribut(e) (< {MIN_ATTRIBUTE}). Regel unverändert; "
                        f"Rückfall: Startpunkte fürs Laddering nach Differenzierung, gekennzeichnet "
                        f"„Startpunkt, kein Attribut“.")
        pool_a = [k for k in rangfolge if erg[k]["ergebnis"] == "–" and erg[k]["rel_ok"] and erg[k]["wortlaut"]]
        pool_b = [k for k in rangfolge if erg[k]["ergebnis"] == "–" and not erg[k]["rel_ok"] and erg[k]["wortlaut"]]
        pool = pool_a + pool_b
        for k in pool:
            if len(startpunkte) >= MIN_ATTRIBUTE:
                naechste.append(k)
                continue
            startpunkte.append(k)
            erg[k]["verwendung"] = "Startpunkt, kein Attribut"
    for k in k_codes:
        erg[k].setdefault("verwendung", "–")
        # Codebuch-Ausrichtung (Protokoll R9): rechts = Pol, den HOLY in den Nennungen häufiger bekommt.
        if erg[k]["holy_pol"] == "links":
            hinweise.append(f"{k}: In den Bewertungen liegt HOLY am linken Pol „{cb[k]['links']}“ (Ø M "
                            f"{zahl(mw[(k, 'M')])}), in den Nennungen ist rechts „{cb[k]['rechts']}“ HOLY-typisch (R9)")
    if len(attribute) < MIN_ATTRIBUTE:
        ohne_filter = [k for k in rangfolge if erg[k]["ergebnis"] == "–" and erg[k]["wortlaut"]][:MIN_ATTRIBUTE]
        if ohne_filter != startpunkte[len(attribute):]:
            hinweise.append("Rückfall ohne den Vorrang für erfüllte Relevanz ergäbe: " + ", ".join(
                f"{k} „{erg[k]['wortlaut']}“ (Differenzierung {zahl(erg[k]['diff'])}, Befragte "
                f"{len(befragte[('haupt', k)])})" for k in ohne_filter))
    # Sensitivität (nur Information): K01 mit Gönrgy = 7, wie es das Recherche-Dossier nahelegt (zuckerfrei)
    if "K01" in k_codes:
        w_sens = [Fraction(7) if w == "W3" else mw[("K01", w)] for w in WETTBEWERBER]
        ø_w_sens = sum(w_sens) / len(w_sens)
        diff_sens = abs(mw[("K01", "M")] - ø_w_sens)
        hinweise.append(f"Sensitivität K01: mit Ø Gönrgy = 7 statt {zahl(mw[('K01', 'W3')])} wäre Ø W "
                        f"{zahl(ø_w_sens)} und die Differenzierung {zahl(diff_sens)} statt {zahl(erg['K01']['diff'])} "
                        f"(Schwelle 1,0 {'weiter erfüllt' if diff_sens >= DIFF_MIN else 'dann verfehlt'}); "
                        f"Ergebnisdateien unverändert")
    for k in startpunkte:
        hinweise.append(f"{k} „{erg[k]['wortlaut']}“: Ø HOLY {zahl(mw[(k, 'M')])}, Ø {MARKEN[staerkster]} "
                        f"(stärkster) {zahl(mw[(k, staerkster)])}, Ø Ideal {zahl(mw[(k, 'I')])}, Ø W "
                        f"{zahl(erg[k]['W'])}")

    # --- Ausgabe: lange Tabelle ---------------------------------------------------------------------------------
    with open(AUS_LANG, "w", encoding="utf-8", newline="") as f:
        s = csv.writer(f, delimiter=";", lineterminator="\n")
        s.writerow(["befragte", "konstrukt", "links", "rechts", "element", "marke", "wert", "quelle"])
        for b in BEFRAGTE:
            for k in k_codes:
                for e in ELEMENTE:
                    w = werte.get((b, k, e))
                    s.writerow([b, k, cb[k]["links"], cb[k]["rechts"], e, MARKEN[e], "" if w is None else w, QUELLE])

    # --- Ausgabe: Ergebnis je Code ------------------------------------------------------------------------------
    kopf = (["id", "links", "rechts", "im_persona_block", "nennungen_haupt", "befragte_haupt",
             "nennungen_kontrolle", "befragte_kontrolle"]
            + [x for e in ELEMENTE for x in (f"{e}_mittel", f"n_{e}")]
            + ["W_mittel", "staerkster_wettbewerber", "staerkster_mittel",
               "differenzierung", "ideal_distanz"]
            + [f"abstand_ideal_{w}" for w in WETTBEWERBER]
            + ["relevanz_erfuellt", "differenzierung_erfuellt", "ideal_naehe_erfuellt",
               "holy_pol", "ideal_pol", "holy_pol_wortlaut", "ergebnis", "rang_differenzierung", "verwendung",
               "quelle"])
    ja = lambda x: "ja" if x else "nein"
    with open(AUS_ERGEBNIS, "w", encoding="utf-8", newline="") as f:
        s = csv.writer(f, delimiter=";", lineterminator="\n")
        s.writerow(kopf)
        for c in alle_codes:
            basis = [c, cb[c]["links"], cb[c]["rechts"], cb[c]["im_persona_block"],
                     nennungen[("haupt", c)], len(befragte[("haupt", c)]),
                     nennungen[("kontrolle", c)], len(befragte[("kontrolle", c)])]
            if c not in k_codes:  # X-Codes: nur Kontrollgruppe, nicht bewertet (Codebuch R10)
                s.writerow(basis + [""] * (len(kopf) - len(basis) - 2) + ["nicht in P8 (nur Kontrollgruppe)", QUELLE])
                continue
            r = erg[c]
            zeile = basis + [x for e in ELEMENTE for x in (zahl(mw[(c, e)]), n[(c, e)])]
            zeile += [zahl(r["W"]), MARKEN[staerkster], zahl(mw[(c, staerkster)]), zahl(r["diff"]), zahl(r["ideal"])]
            zeile += [zahl(r["abstand"][w]) for w in WETTBEWERBER]
            zeile += [ja(r["rel_ok"]), ja(r["diff_ok"]), ja(r["ideal_ok"]), r["holy_pol"], r["ideal_pol"],
                      r["wortlaut"], r["ergebnis"], r["rang"], r["verwendung"], QUELLE]
            s.writerow(zeile)

    # --- Bildschirm ----------------------------------------------------------------------------------------------
    print("Repertory Grid P8 – Auswertung (alle Werte KI-simuliert, Tool; keine Aussagen über Signifikanz)")
    print(f"Bewertungsdateien: {len(BEFRAGTE)} erwartet; Konstrukte je Datei: {len(k_codes)} ({k_codes[0]}–{k_codes[-1]})")
    werte_ausserhalb = [x for x in fehler if "außerhalb" in x]
    print(f"Werte außerhalb {SKALA_MIN}–{SKALA_MAX}: {len(werte_ausserhalb)}")
    print("null je Element (Marke unbekannt), Befragte:")
    for e in ELEMENTE:
        leer = [b for b in BEFRAGTE if all(werte.get((b, k, e)) is None for k in k_codes)]
        print(f"  {e:2} {MARKEN[e]:<32} {', '.join(leer) if leer else '–'}")
    print("\nMittlere Ideal-Distanz je Wettbewerber (über K01–K12):")
    for w in WETTBEWERBER:
        print(f"  {w} {MARKEN[w]:<16} {zahl(mittlere_distanz[w])}{'  ← stärkster' if w == staerkster else ''}")
    print(f"\n{'Code':5} {'links':<20} {'rechts':<22} Nenn Bef Ktr  ØM   ØW   ØI   {MARKEN[staerkster][:8]:8} "
          f"Diff Ideal Rel Dif Nah Pol     Ergebnis  Rang Verwendung")
    for k in k_codes:
        r = erg[k]
        print(f"{k:5} {cb[k]['links']:<20} {cb[k]['rechts']:<22} {nennungen[('haupt', k)]:4} "
              f"{len(befragte[('haupt', k)]):3} {nennungen[('kontrolle', k)]:3} {zahl(mw[(k, 'M')]):>4} "
              f"{zahl(r['W']):>4} {zahl(mw[(k, 'I')]):>4} {zahl(mw[(k, staerkster)]):>8} {zahl(r['diff']):>4} "
              f"{zahl(r['ideal']):>5} {ja(r['rel_ok']):3} {ja(r['diff_ok']):3} {ja(r['ideal_ok']):3} "
              f"{r['holy_pol']:<7} {r['ergebnis']:<9} {r['rang']:4} {r['verwendung']}")
    def liste(codes):
        return ", ".join(f"{k} „{erg[k]['wortlaut']}“" for k in codes) or "keine"

    print(f"\nAttribute laut Regel: {liste(attribute)}")
    print("Startpunkte fürs Laddering (Wortlaut für Folie 06, 07, 10):")
    for k in startpunkte:
        art = "Attribut" if erg[k]["ergebnis"] == "Attribut" else "Startpunkt, kein Attribut"
        print(f"  {k}: „{erg[k]['wortlaut']}“ – {art} (Differenzierung {zahl(erg[k]['diff'])}, "
              f"Ideal-Distanz {zahl(erg[k]['ideal'])}, Befragte {len(befragte[('haupt', k)])})")
    if naechste:
        print("Nächste Kandidaten nach Differenzierung (nicht gewählt): "
              + ", ".join(f"{k} „{erg[k]['wortlaut']}“ ({zahl(erg[k]['diff'])})" for k in naechste[:3]))
    huerden = [k for k in rangfolge if erg[k]["ergebnis"] == "Hürde"]
    print(f"Hürden: {liste(huerden)}")
    print(f"\nGeschrieben: {AUS_LANG.relative_to(BASIS)}, {AUS_ERGEBNIS.relative_to(BASIS)}")
    if hinweise:
        print("\nHinweise:")
        for h in hinweise:
            print(f"  - {h}")
    if fehler:
        print("\nFEHLER:")
        for x in fehler:
            print(f"  - {x}")
        sys.exit(1)
    print("\nKeine Datenfehler.")


if __name__ == "__main__":
    main()
