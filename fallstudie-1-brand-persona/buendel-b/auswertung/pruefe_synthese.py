#!/usr/bin/env python3
"""Prüft die Synthese von Bündel B (folienvorschlag.md und Ausarbeitungen) gegen die Auswertungsdateien.

Bündel B, Fallstudie 1 (HOLY). Alle Daten sind KI-simuliert (Tool): 8 fiktive Befragte T1–T8, je Person ein eigener
Agent (Workflow D25, 22./23.10.2026). Dieses Skript rechnet nichts Neues aus den Rohdaten. Es prüft nur, ob die Zahlen
in den Synthese-Dateien mit den CSV-/JSON-Ausgaben der Auswertungsskripte übereinstimmen, zählt die Wörter der
vorgeschlagenen Sprechtexte und spielt nach, was die Folienskripte der Web-Präsentation aus den vorgeschlagenen Daten
anzeigen würden. Keine Aussagen über Signifikanz oder Repräsentativität. KI-Personas ersetzen kein Kundengespräch
(Stenger, S. 78).

Aufruf (aus einem beliebigen Ordner):
    python3 auswertung/pruefe_synthese.py

Eingaben (relativ zum Ordner buendel-b):
    folienvorschlag.md                         JSON-Blöcke (Markierung <!-- json:ID -->) und Sprechtexte
                                               (Markierung <!-- sprech:ID --> … <!-- /sprech -->)
    auswertung/repertory-grid-ergebnis.csv     Mittelwerte, Differenzierung, Ideal-Distanz, Ergebnis je Code
    auswertung/aaker-folie-08b.csv             Aaker-Dimensionen HOLY, Red Bull, waterdrop
    auswertung/hvm.json                        HVM-Knoten und -Kanten (Cut-off ≥ 2)
    ../praesentation/index.html                nur gelesen: heutige Stichworte im Steuerrad (Folie 10) für das
                                               Wortbudget „bisher“

Was geprüft wird (Formeln und Regeln):
    1. Jeder JSON-Block ist gültiges JSON.
    2. Folie 06 / B4: Ø M, Ø stärkster Wettbewerber, Ø W (Mittel W1–W5), Ø I, Ø W1 … Ø W5 und Nennungen je Konstrukt
       stimmen mit repertory-grid-ergebnis.csv überein (CSV-Wert mit 2 Nachkommastellen, Dezimalkomma → Punkt).
       Kein Konstrukt ist als Markeneigenschaft markiert ("attribut"), weil die Auswahlregel keine ergibt.
       "hinweis": "Hürde" genau bei den Codes mit ergebnis = Hürde.
    3. B4-Nachbau: Das Folienskript praesentation/js/folien/13-backup.js (Funktion gridBauen) rechnet
           Ø W = Mittel der eingetragenen W-Werte,  Abstand = |M − Ø W|,  Ideal-Distanz = |M − I|
       und vergleicht die auf EINE Nachkommastelle gerundeten Werte (Math.round(x · 10) / 10) mit den Schwellen.
       Dieses Skript macht dasselbe und meldet, wo die Folie anders markieren würde als die Auswahlregel
       (Regel: ungerundet, repertory_grid.py). JavaScript Math.round rundet .5 auf; hier nachgebaut mit floor(x + 0,5).
    4. Folie 07 / B5: Knoten und Verbindungen stimmen mit hvm.json überein (Text = Code, Anzahl = Zahl der Leitern).
       Gemeldet wird, welche Verbindungen innerhalb derselben Ebene liegen: Das Folienskript 07-laddering.js zeichnet
       nur Verbindungen nach oben (Bedingung b.ebene > a.ebene), 13-backup.js zeigt in der Matrix nur Blöcke zwischen
       benachbarten Ebenen und sucht die stärkste Leiter nur unter Ketten mit genau vier Gliedern.
    5. Folie 08b: Dimensionswerte stimmen mit aaker-folie-08b.csv überein.
    6. Sprechtexte: Wörter = Tokens zwischen Leerzeichen, die mindestens einen Buchstaben oder eine Ziffer enthalten;
       Text in [eckigen Klammern] (Regie) zählt nicht. Sekunden = Wörter / 1,9 (Sprechtempo wie in den Notizen der
       Präsentation), kaufmännisch gerundet. Die Angabe „… · N Wörter ≈ S s“ über jedem Sprechtext muss stimmen.
       Kennzeichnung (Nacharbeit 23.10.2026): Ein neuer Sprechtext (nicht „…alt-…“), der Zahlen über die simulierten
       Personen nennt („von acht“, „alle acht“), muss im selben Schritt „simuliert“ enthalten. Die Summen je Folie im
       Kopf des Sprechtexts („Summe N Wörter ≈ S s“, Folie 10: „Bisher zusammen … , neu …“) müssen stimmen.
    7. B4, Felder „differenzierung“ und „idealDistanz“ (falls vorhanden): gleich den CSV-Werten (2 Nachkommastellen).
    8. Folie 10 (Nacharbeit 23.10.2026): Wortbudget der drei Felder = Summe der Wörter aller Stichworte (Zählweise wie 6);
       „bisher“ aus dem Steuerrad-JSON in index.html, „neu“ aus json:f10-felder; die Angabe in der Zeile „Wortbudget“
       muss stimmen. Stichworte der Simulation (Quelle LA-KI bzw. AN-KI) müssen wortgleich auf Folie 07 bzw. 08b
       stehen („Ins Steuerrad“ von 08b = Feld Tonalität von Folie 10, Reihenfolge egal).

Nachrechnen in Google Sheets (Wortzahl eines Textes in A1):
    =ANZAHL2(FILTER(SPLIT(A1;" ");REGEXMATCH(SPLIT(A1;" ");"[0-9A-Za-zÄÖÜäöüß]")))   und Sekunden =RUNDEN(B1/1,9;0)

Das Skript ist deterministisch und schreibt keine Dateien; es gibt nur einen Bericht aus. Rückgabewert 1 bei Fehlern.
"""
import csv
import json
import math
import re
import sys
from pathlib import Path

BASIS = Path(__file__).resolve().parent.parent  # Ordner buendel-b
VORSCHLAG = BASIS / "folienvorschlag.md"
RG = BASIS / "auswertung" / "repertory-grid-ergebnis.csv"
AAKER = BASIS / "auswertung" / "aaker-folie-08b.csv"
HVM = BASIS / "auswertung" / "hvm.json"
INDEX = BASIS.parent / "praesentation" / "index.html"   # nur gelesen
FELDER_10 = ["attribute", "nutzen", "tonalitaet"]
NAMEN_10 = {"attribute": "Markeneigenschaften", "nutzen": "Markennutzen", "tonalitaet": "Markentonalität"}

TEMPO = 1.9  # Wörter je Sekunde (wie in den Notizen der Präsentation, z. B. Kasten „FOLIE 08“)


# ---------------------------------------------------------------------------------------------------------------
# Hilfsfunktionen
# ---------------------------------------------------------------------------------------------------------------
def zahl(text):
    """CSV-Zahl mit Dezimalkomma → float (leer → None)."""
    text = (text or "").strip()
    return float(text.replace(",", ".")) if text else None


def runden_js(x, stellen=1):
    """Nachbau von Math.round(x · 10^stellen) / 10^stellen in JavaScript (.5 wird aufgerundet)."""
    f = 10 ** stellen
    return math.floor(x * f + 0.5) / f


def woerter(text):
    """Wortzahl eines Sprechtexts: [Regie] entfernen, dann Tokens mit Buchstabe oder Ziffer zählen."""
    ohne_regie = re.sub(r"\[[^\]]*\]", " ", text)
    return sum(1 for t in ohne_regie.split() if re.search(r"[0-9A-Za-zÄÖÜäöüß]", t))


def sekunden(wz):
    return int(math.floor(wz / TEMPO + 0.5))


def lies_csv(pfad):
    with open(pfad, encoding="utf-8", newline="") as f:
        return list(csv.DictReader(f, delimiter=";"))


def json_bloecke(md):
    """Alle Blöcke der Form <!-- json:ID --> ```json … ``` → {ID: Objekt}."""
    bloecke = {}
    for m in re.finditer(r"<!-- json:([\w-]+) -->\s*```json\n(.*?)\n```", md, flags=re.S):
        bloecke[m.group(1)] = m.group(2)
    return bloecke


def sprechtexte(md):
    """Alle Sprechtexte <!-- sprech:ID --> … <!-- /sprech --> mit der Angabe davor (Zeile mit „Wörter ≈“)."""
    ergebnis = []
    for m in re.finditer(r"<!-- sprech:([\w-]+) -->(.*?)<!-- /sprech -->", md, flags=re.S):
        text = re.sub(r"^\s*>\s?", "", m.group(2), flags=re.M).strip()
        davor = md[: m.start()].rstrip().splitlines()[-1] if md[: m.start()].strip() else ""
        angabe = re.search(r"(\d+) Wörter ≈ (\d+) s", davor)
        ergebnis.append((m.group(1), text, angabe))
    return ergebnis


# ---------------------------------------------------------------------------------------------------------------
# Prüfungen
# ---------------------------------------------------------------------------------------------------------------
def main():
    fehler, hinweise = [], []
    md = VORSCHLAG.read_text(encoding="utf-8")
    rg = {(r["links"], r["rechts"]): r for r in lies_csv(RG) if r["id"].startswith("K")}
    aaker = {r["dimension"]: r for r in lies_csv(AAKER)}
    hvm = json.loads(HVM.read_text(encoding="utf-8"))

    # 1. JSON gültig
    roh = json_bloecke(md)
    daten = {}
    for k, text in roh.items():
        try:
            daten[k] = json.loads(text)
        except json.JSONDecodeError as e:
            fehler.append(f"JSON-Block {k}: ungültig ({e})")
    print(f"JSON-Blöcke gefunden: {len(roh)} ({', '.join(sorted(roh))}); gültig: {len(daten)}")

    # 2. Folie 06
    if "f06" in daten:
        for z in daten["f06"]["konstrukte"]:
            r = rg.get((z["links"], z["rechts"]))
            if not r:
                fehler.append(f"f06: Konstrukt {z['links']} – {z['rechts']} nicht in repertory-grid-ergebnis.csv")
                continue
            paare = [("nennungen", int(r["nennungen_haupt"])), ("marke", zahl(r["M_mittel"])),
                     ("wettbewerb", zahl(r["staerkster_mittel"])), ("wettbewerbMittel", zahl(r["W_mittel"])),
                     ("ideal", zahl(r["I_mittel"]))]
            for feld, soll in paare:
                if z.get(feld) != soll:
                    fehler.append(f"f06 {r['id']}: {feld} = {z.get(feld)}, CSV = {soll}")
            if z.get("attribut"):
                fehler.append(f"f06 {r['id']}: als Markeneigenschaft markiert, die Regel ergibt keine")
            if (z.get("hinweis") == "Hürde") != (r["ergebnis"] == "Hürde"):
                fehler.append(f"f06 {r['id']}: hinweis „{z.get('hinweis')}“, Ergebnis laut CSV „{r['ergebnis']}“")
        print(f"f06: {len(daten['f06']['konstrukte'])} Konstrukte gegen CSV geprüft")

    # 3. B4 (Werte und Nachbau der Anzeige)
    if "b4" in daten:
        d = daten["b4"]
        s = d["schwellen"]
        kuerzel = {"M": "M_mittel", "W1": "W1_mittel", "W2": "W2_mittel", "W3": "W3_mittel", "W4": "W4_mittel",
                   "W5": "W5_mittel", "I": "I_mittel"}
        print("B4-Nachbau (so zeigt 13-backup.js die Zeilen; Vergleich auf 1 Nachkommastelle gerundet):")
        print("  Code  Nenn  |M−ØW| Folie  Regel   |M−I| Folie  Regel   Ergebnis Folie / Regel")
        for z in d["konstrukte"]:
            r = rg.get((z["links"], z["rechts"]))
            if not r:
                fehler.append(f"B4: Konstrukt {z['links']} – {z['rechts']} nicht in der CSV")
                continue
            for k, spalte in kuerzel.items():
                if z["werte"].get(k) != zahl(r[spalte]):
                    fehler.append(f"B4 {r['id']}: {k} = {z['werte'].get(k)}, CSV = {zahl(r[spalte])}")
            if z["nennungen"] != int(r["nennungen_haupt"]):
                fehler.append(f"B4 {r['id']}: nennungen = {z['nennungen']}, CSV = {r['nennungen_haupt']}")
            for feld, spalte in (("differenzierung", "differenzierung"), ("idealDistanz", "ideal_distanz")):
                if feld in z and z[feld] != zahl(r[spalte]):
                    fehler.append(f"B4 {r['id']}: {feld} = {z[feld]}, CSV = {zahl(r[spalte])}")
            w = [z["werte"][k] for k in ("W1", "W2", "W3", "W4", "W5")]
            mittel = sum(w) / len(w)
            abstand = abs(z["werte"]["M"] - mittel)
            ideal = abs(z["werte"]["M"] - z["werte"]["I"])
            ok_n = z["nennungen"] >= s["nennungenMin"]
            ok_a = runden_js(abstand) >= s["abstandWettbewerbMin"]
            ok_i = runden_js(ideal) <= s["idealDistanzMax"]
            folie_attr = ok_n and ok_a and ok_i
            regel_n = r["relevanz_erfuellt"] == "ja"
            regel_a = r["differenzierung_erfuellt"] == "ja"
            regel_i = r["ideal_naehe_erfuellt"] == "ja"
            folie_erg = "Attribut" if folie_attr else (z.get("hinweis") or "–")
            print(f"  {r['id']}  {z['nennungen']:>4}  {runden_js(abstand):>5}  {'ja ' if ok_a else 'nein'}   "
                  f"{'ja ' if regel_a else 'nein'}    {runden_js(ideal):>4}  {'ja ' if ok_i else 'nein'}   "
                  f"{'ja ' if regel_i else 'nein'}    {folie_erg} / {r['ergebnis']}")
            if (ok_n, ok_a, ok_i) != (regel_n, regel_a, regel_i):
                hinweise.append(f"B4 {r['id']}: Folie markiert (Relevanz, Differenzierung, Ideal) = "
                                f"{(ok_n, ok_a, ok_i)}, Regel = {(regel_n, regel_a, regel_i)} – Rundung auf "
                                f"1 Nachkommastelle (Folie {runden_js(abstand)}, CSV {r['differenzierung']})")
            if folie_attr != (r["ergebnis"] == "Attribut"):
                fehler.append(f"B4 {r['id']}: Folie würde „Attribut“ anders setzen als die Regel")

    # 4. Folie 07 / B5
    ebene_hvm = {k["code"]: k["ebene"] for k in hvm["knoten"]}
    kanten_hvm = {(k["von"], k["nach"]): k["anzahl"] for k in hvm["kanten"]}
    ebenen_folie = {"attribute": "Attribut", "funktional": "funktional", "psychosozial": "psychosozial",
                    "werte": "Wert"}
    reihe = ["attribute", "funktional", "psychosozial", "werte"]
    for key in ("f07", "b5"):
        if key not in daten:
            continue
        d = daten[key]
        text = {k["id"]: k["text"] for k in d["knoten"]}
        ebene = {k["id"]: k["ebene"] for k in d["knoten"]}
        for k in d["knoten"]:
            if ebene_hvm.get(k["text"]) != ebenen_folie[k["ebene"]]:
                fehler.append(f"{key}: Knoten „{k['text']}“ Ebene {k['ebene']}, HVM {ebene_hvm.get(k['text'])}")
        if set(text.values()) != set(ebene_hvm):
            fehler.append(f"{key}: Knoten weichen von hvm.json ab")
        gefunden = {}
        for v in d["verbindungen"]:
            paar = (text[v["von"]], text[v["nach"]])
            gefunden[paar] = v["anzahl"]
            if kanten_hvm.get(paar) != v["anzahl"]:
                fehler.append(f"{key}: Verbindung {paar} = {v['anzahl']}, HVM = {kanten_hvm.get(paar)}")
        if set(gefunden) != set(kanten_hvm):
            fehler.append(f"{key}: Verbindungen weichen von hvm.json ab")
        gleich = [f"{text[v['von']]} → {text[v['nach']]} ({v['anzahl']})" for v in d["verbindungen"]
                  if reihe.index(ebene[v["nach"]]) <= reihe.index(ebene[v["von"]])]
        if gleich:
            hinweise.append(f"{key}: {len(gleich)} von {len(d['verbindungen'])} Verbindungen liegen innerhalb einer "
                            f"Ebene und fehlen ohne Skriptänderung: " + "; ".join(gleich))
        print(f"{key}: {len(d['knoten'])} Knoten, {len(d['verbindungen'])} Verbindungen gegen hvm.json geprüft")
    if "b5" in daten:
        # Nachbau der Suche nach der stärksten Leiter in 13-backup.js (nur Ketten mit so vielen Gliedern wie Ebenen)
        d = daten["b5"]
        cutoff = d.get("cutoff", 2)
        ebene = {k["id"]: k["ebene"] for k in d["knoten"]}
        beste = []

        def suchen(kette, minimum, summe):
            weiter = [v for v in d["verbindungen"] if v["von"] == kette[-1] and v["anzahl"] >= cutoff]
            if not weiter:
                if len(kette) == len(d["ebenen"]):
                    beste.append((minimum, summe, kette))
                return
            for v in weiter:
                suchen(kette + [v["nach"]], min(minimum, v["anzahl"]), summe + v["anzahl"])

        for k in d["knoten"]:
            if ebene[k["id"]] == d["ebenen"][0]["schluessel"]:
                suchen([k["id"]], float("inf"), 0)
        if beste:
            print("B5-Nachbau: stärkste Leiter laut Folienskript:", max(beste)[2])
        else:
            hinweise.append("B5: Das Folienskript findet keine stärkste Leiter (es sucht nur Ketten mit genau "
                            f"{len(d['ebenen'])} Gliedern; die stärkste Leiter laut hvm.json hat "
                            f"{len(hvm['staerkste_leiter']['pfad'])})")

    # 5. Folie 08b
    if "f08b" in daten:
        for dim in daten["f08b"]["dimensionen"]:
            r = aaker[dim["name"]]
            soll = [zahl(r["HOLY"]), [zahl(r["Red Bull"]), zahl(r["waterdrop"])]]
            if [dim["marke"], dim["wettbewerber"]] != soll:
                fehler.append(f"f08b {dim['name']}: {dim['marke']} {dim['wettbewerber']}, CSV {soll}")
        print(f"f08b: {len(daten['f08b']['dimensionen'])} Dimensionen gegen aaker-folie-08b.csv geprüft")

    # 8. Folie 10: Wortbudget und Wortgleichheit
    if "f10-felder" in daten:
        f10 = daten["f10-felder"]
        neu = {feld: sum(woerter(w["text"]) for w in f10[feld]["stichworte"]) for feld in FELDER_10}
        bisher = None
        if INDEX.exists():
            html = INDEX.read_text(encoding="utf-8")
            m = re.search(r'<div class="steuerrad g6s-rad"[^>]*>\s*<script type="application/json">(.*?)</script>', html,
                          flags=re.S)
            if m:
                rad = json.loads(m.group(1))["felder"]
                bisher = {feld: sum(woerter(w["text"]) for w in rad[feld]["stichworte"]) for feld in FELDER_10}
        if bisher is None:
            hinweise.append("Folie 10: Steuerrad-JSON in index.html nicht gefunden – Wortbudget „bisher“ nicht geprüft")
        print("f10: Wortbudget " + ", ".join(f"{NAMEN_10[f]} bisher {bisher[f] if bisher else '?'} / neu {neu[f]}"
                                             for f in FELDER_10))
        zeile = re.search(r"Wortbudget \(gezählt per Skript\): Felder bisher (.*?) – zusammen (\d+) Wörter; neu (.*?) – "
                          r"zusammen (\d+) Wörter", md)
        if not zeile:
            fehler.append("Folie 10: Zeile „Wortbudget (gezählt per Skript): …“ nicht gefunden")
        else:
            def werte(text):
                return {f: int(x) for f, x in re.findall(r"(Markeneigenschaften|Markennutzen|Markentonalität) (\d+)",
                                                          text)}
            angabe_bisher, angabe_neu = werte(zeile.group(1)), werte(zeile.group(3))
            soll_neu = {NAMEN_10[f]: neu[f] for f in FELDER_10}
            if angabe_neu != soll_neu or int(zeile.group(4)) != sum(neu.values()):
                fehler.append(f"Folie 10: Wortbudget neu angegeben {angabe_neu} / {zeile.group(4)}, gezählt {soll_neu} / "
                              f"{sum(neu.values())}")
            if bisher:
                soll_bisher = {NAMEN_10[f]: bisher[f] for f in FELDER_10}
                if angabe_bisher != soll_bisher or int(zeile.group(2)) != sum(bisher.values()):
                    fehler.append(f"Folie 10: Wortbudget bisher angegeben {angabe_bisher} / {zeile.group(2)}, gezählt "
                                  f"{soll_bisher} / {sum(bisher.values())}")
        # Wortgleichheit der Simulations-Stichworte mit 07 und 08b
        texte_07 = set()
        if "f07" in daten:
            texte_07 = {k["text"].casefold() for k in daten["f07"]["knoten"]} | \
                       {n["text"].casefold() for n in daten["f07"]["nutzen"]}
        for w in f10["nutzen"]["stichworte"]:
            if w["quelle"] == "LA-KI" and w["text"].casefold() not in texte_07:
                fehler.append(f"Folie 10: Nutzen „{w['text']}“ (LA-KI) steht nicht wortgleich auf Folie 07")
        if "f08b" in daten:
            rad_08b = sorted(daten["f08b"]["steuerrad"])
            rad_10 = sorted(w["text"] for w in f10["tonalitaet"]["stichworte"])
            if rad_08b != rad_10:
                fehler.append(f"Folie 08b „steuerrad“ {rad_08b} ≠ Feld Tonalität auf Folie 10 {rad_10}")
            for w in f10["tonalitaet"]["stichworte"]:
                if w["quelle"] == "AN-KI" and w["text"] not in daten["f08b"]["steuerrad"]:
                    fehler.append(f"Folie 10: Tonalität „{w['text']}“ (AN-KI) fehlt in 08b „steuerrad“")

    # 6. Sprechtexte
    print("Sprechtexte (Wörter, Sekunden bei 1,9 Wörtern/s):")
    summen = {}
    for sid, text, angabe in sprechtexte(md):
        wz = woerter(text)
        sek = sekunden(wz)
        folie = sid.split("-")[0]
        summen.setdefault(folie, [0, 0])
        summen[folie][0] += wz
        print(f"  {sid:<10} {wz:>4} Wörter ≈ {sek:>3} s")
        if "alt-" not in sid and re.search(r"\b(von acht|alle acht|allen acht)\b", text) and "simuliert" not in text:
            fehler.append(f"Sprechtext {sid}: nennt Zahlen über die Personen („… acht“) ohne „simuliert“")
        if not angabe:
            fehler.append(f"Sprechtext {sid}: keine Angabe „N Wörter ≈ S s“ in der Zeile davor")
        elif (int(angabe.group(1)), int(angabe.group(2))) != (wz, sek):
            fehler.append(f"Sprechtext {sid}: angegeben {angabe.group(1)} Wörter ≈ {angabe.group(2)} s, "
                          f"gezählt {wz} Wörter ≈ {sek} s")
    for folie, (wz, _) in sorted(summen.items()):
        print(f"  Summe {folie:<5} {wz:>4} Wörter ≈ {sekunden(wz):>3} s")
    # Summenangaben im Text (Nacharbeit 23.10.2026): „**Sprechtext** (… Summe N Wörter ≈ S s …)“ vor dem ersten
    # Sprechtext einer Folie; bei Folie 10 „Bisher zusammen N Wörter ≈ S s, neu N Wörter ≈ S s“.
    for folie in ("f06", "f07", "f08b"):
        marke = md.find(f"<!-- sprech:{folie}-")
        kopf = md.rfind("**Sprechtext**", 0, marke)
        m = re.search(r"Summe (\d+) Wörter ≈ (\d+) s", md[kopf:marke]) if marke >= 0 and kopf >= 0 else None
        if folie in summen and m:
            if (int(m.group(1)), int(m.group(2))) != (summen[folie][0], sekunden(summen[folie][0])):
                fehler.append(f"Summe {folie}: angegeben {m.group(1)} Wörter ≈ {m.group(2)} s, gezählt "
                              f"{summen[folie][0]} Wörter ≈ {sekunden(summen[folie][0])} s")
        elif folie in summen:
            fehler.append(f"Summe {folie}: keine Angabe „Summe N Wörter ≈ S s“ im Kopf des Sprechtexts")
    m = re.search(r"Bisher zusammen (\d+) Wörter ≈\s+(\d+) s, neu (\d+) Wörter ≈\s+(\d+) s", md)
    if "f10" in summen:
        soll = (summen["f10alt"][0], sekunden(summen["f10alt"][0]), summen["f10"][0], sekunden(summen["f10"][0]))
        if not m or tuple(int(x) for x in m.groups()) != soll:
            fehler.append(f"Summe f10: angegeben {m.groups() if m else '–'}, gezählt bisher/neu {soll}")

    print()
    for h in hinweise:
        print("HINWEIS:", h)
    for f in fehler:
        print("FEHLER:", f)
    print("Ergebnis:", "keine Fehler" if not fehler else f"{len(fehler)} Fehler")
    return 1 if fehler else 0


if __name__ == "__main__":
    sys.exit(main())
