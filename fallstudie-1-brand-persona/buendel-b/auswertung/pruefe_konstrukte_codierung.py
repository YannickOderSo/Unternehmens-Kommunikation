#!/usr/bin/env python3
"""Repertory Grid, P7-Auswertung: Konstrukt-Codierung prüfen und Nennungen zählen.

Bündel B, Fallstudie 1 (HOLY). Alle Antworten sind KI-simuliert (Tool), keine echten Befragten.
Das Skript rechnet nur Häufigkeiten; es macht keine Aussagen über Signifikanz oder Repräsentativität.

Aufruf (aus einem beliebigen Ordner):
    python3 auswertung/pruefe_konstrukte_codierung.py

Eingaben (relativ zum Ordner buendel-b):
    rohdaten/interviews/T*.json        Hauptgruppe (mit Persona-Block)
    rohdaten/kontrolle/T*.json         Kontrollgruppe (ohne Persona-Block, nur Triaden)
    codierung/konstrukte-codebuch.csv  id;links;rechts;definition;beispiele;im_persona_block
    codierung/konstrukte-zuordnung.csv gruppe;befragte;triade;elemente;paar;einzeln;pol_paar;pol_einzeln;code;holy_seite
    codierung/konstrukte-nebenaspekte.csv  gruppe;befragte;triade;hauptcode;nebencode;beleg;holy_seite
                                       (zählen nicht als Nennung; nur Information und Entscheidungshilfe bei Gleichstand)
    codierung/konstrukte-grenzfaelle.csv   gruppe;befragte;triade;code_jetzt;code_alternativ;holy_seite_alternativ;
                                       regel_jetzt;begruendung  (anders vertretbare Hauptcodes, nur Robustheitsprüfung;
                                       seit der Nacharbeit 23.10.2026)
    rohdaten/verworfen-erstlauf/interviews/T5.json, T6.json   verworfene Erstläufe (gleicher Prompt, erste Ziehung)
    codierung/konstrukte-erstlauf-zuordnung.csv  Codierung der Erstlauf-Triaden, gleiches Format wie die Zuordnung,
                                       gruppe = erstlauf (zählt nirgends mit, nur Vergleich der Ziehungen)

Ausgaben (Semikolon, UTF-8; letzte Spalte „quelle“ = Kennzeichnung, damit sie beim Teilen der CSV erhalten bleibt):
    Bildschirm: Prüfergebnis, gültige Triaden je Person, Nennungen je Code, Hinweise zur Ausrichtung, Belege zur
                Idealmarke bei K09, Vergleiche (Kontrollgruppe, Erstlauf), Robustheit der Grenzfälle
    auswertung/konstrukte-nennungen.csv: eine Zeile je Code
    auswertung/konstrukte-haupt-kontrolle.csv: eine Zeile je Person und Triade, die in beiden Gruppen gültig ist
    auswertung/konstrukte-erstlauf-vergleich.csv: eine Zeile je gültiger Erstlauf-Triade (T5, T6)
    auswertung/konstrukte-grenzfaelle-wirkung.csv: eine Zeile je Variante (jeder Grenzfall einzeln, alle zugleich)

Formeln (wie methoden.md §2, Schritt 2 und 4: „Relevanz = Häufigkeit der Nennung“):
    Nennungen (Relevanz)  = Anzahl der Zeilen in konstrukte-zuordnung.csv mit gruppe = haupt und code = K..
                            Jede gültige Triade einer befragten Person ist genau eine Zeile, also genau eine Nennung.
    Befragte              = Anzahl verschiedener Befragter (T1–T8) mit mindestens einer Nennung des Codes
    HOLY rechts / links   = Anzahl der Zeilen des Codes mit holy_seite = „rechts“ bzw. „links“
    Ausrichtung (Regel)   = rechts (7) steht der Pol, den HOLY in der Hauptgruppe häufiger bekommt;
                            HOLY rechts >= HOLY links muss gelten.
    Gleichstand (Regel)   = HOLY rechts = HOLY links in den Nennungen der Hauptgruppe. Dann entscheiden der Reihe nach:
                            1. die Nebenaspekte der Hauptgruppe (HOLY rechts vs. links in konstrukte-nebenaspekte.csv),
                            2. die Nennungen der Kontrollgruppe (HOLY rechts vs. links),
                            3. ist auch das gleich: Richtung im Protokoll begründen (Hinweis).
                            Spricht die erste Stufe, die nicht gleich ist, für links, ist das ein Fehler (Pole tauschen).
    Nebenaspekte          = Anzahl der Zeilen in konstrukte-nebenaspekte.csv mit nebencode = Code (nur Information)
    Nebenaspekte HOLY r/l = davon Zeilen mit holy_seite = „rechts“ bzw. „links“ (nur Information und Stufe 1 oben)
    Haupt ↔ Kontrolle     = je Person und Triade, die in beiden Gruppen gültig ist: gleicher Code ja/nein, gleiches
                            Paar ja/nein (gleiche zwei ähnliche Elemente). Gezählt: Zahl der Paare mit „ja“.
    Erstlauf ↔ Endlauf    = dasselbe für T5 und T6: Erstlauf (verworfen) gegen den ausgewerteten Lauf.
    Grenzfall-Wirkung     = Nennungen und Befragte je Code, wenn ein Grenzfall (bzw. alle zugleich) den alternativen
                            Code bekommt; gemeldet wird, ob sich die Relevanz (Befragte haupt ≥ 3, Auswahlregel in
                            repertory_grid.py) eines K-Codes ändert. Die Bewertungen (P8) ändern sich dadurch nicht.

Nachrechnen in Google Sheets (Zuordnung als Blatt „zuordnung“ importieren, Trennzeichen Semikolon;
Spalten A gruppe, B befragte, C triade, … I code, J holy_seite; Code-ID in A2 des Ergebnisblatts):
    Nennungen haupt:   =ZÄHLENWENNS(zuordnung!A:A;"haupt";zuordnung!I:I;A2)
    HOLY rechts haupt: =ZÄHLENWENNS(zuordnung!A:A;"haupt";zuordnung!I:I;A2;zuordnung!J:J;"rechts")
    HOLY links haupt:  =ZÄHLENWENNS(zuordnung!A:A;"haupt";zuordnung!I:I;A2;zuordnung!J:J;"links")
    Befragte haupt:    =ANZAHL2(EINDEUTIG(FILTER(zuordnung!B:B;zuordnung!A:A="haupt";zuordnung!I:I=A2)))
    (für die Kontrollgruppe "haupt" durch "kontrolle" ersetzen)
Nebenaspekte als Blatt „neben“ importieren (A gruppe, B befragte, C triade, D hauptcode, E nebencode, F beleg,
G holy_seite):
    Nebenaspekte haupt:            =ZÄHLENWENNS(neben!A:A;"haupt";neben!E:E;A2)
    Nebenaspekte HOLY rechts haupt: =ZÄHLENWENNS(neben!A:A;"haupt";neben!E:E;A2;neben!G:G;"rechts")
    Nebenaspekte HOLY links haupt:  =ZÄHLENWENNS(neben!A:A;"haupt";neben!E:E;A2;neben!G:G;"links")
Vergleich Haupt ↔ Kontrolle (konstrukte-haupt-kontrolle.csv als Blatt „hk“, Spalte E gleicher_code):
    gleicher Code:     =ZÄHLENWENN(hk!E:E;"ja")      von  =ANZAHL2(hk!E:E)-1

Das Skript ist deterministisch: gleiche Eingaben ergeben gleiche Ausgaben (feste Sortierung, kein Zufall).
"""
import csv
import json
import sys
from collections import Counter, defaultdict
from pathlib import Path

BASIS = Path(__file__).resolve().parent.parent  # Ordner buendel-b
ROHDATEN = {"haupt": BASIS / "rohdaten" / "interviews", "kontrolle": BASIS / "rohdaten" / "kontrolle"}
CODEBUCH = BASIS / "codierung" / "konstrukte-codebuch.csv"
ZUORDNUNG = BASIS / "codierung" / "konstrukte-zuordnung.csv"
NEBEN = BASIS / "codierung" / "konstrukte-nebenaspekte.csv"
GRENZFAELLE = BASIS / "codierung" / "konstrukte-grenzfaelle.csv"
ERSTLAUF_ROH = BASIS / "rohdaten" / "verworfen-erstlauf" / "interviews"
ERSTLAUF_ZUORDNUNG = BASIS / "codierung" / "konstrukte-erstlauf-zuordnung.csv"
AUSGABE = BASIS / "auswertung" / "konstrukte-nennungen.csv"
AUS_HK = BASIS / "auswertung" / "konstrukte-haupt-kontrolle.csv"
AUS_ERSTLAUF = BASIS / "auswertung" / "konstrukte-erstlauf-vergleich.csv"
AUS_GRENZ = BASIS / "auswertung" / "konstrukte-grenzfaelle-wirkung.csv"
QUELLE = "KI-simuliert (Tool), codiert KI-gestützt – Bündel B, Workflow D25"
RELEVANZ_MIN_BEFRAGTE = 3   # wie die Auswahlregel in repertory_grid.py (Befragte der Hauptgruppe)

BEFRAGTE = [f"T{i}" for i in range(1, 9)]
# Die 8 Triaden aus methoden.md §2 (M = HOLY, W1–W5 = Wettbewerber, I = Idealmarke)
TRIADEN = {1: "M–W1–W2", 2: "M–W3–I", 3: "W1–W4–I", 4: "M–W5–W2",
           5: "W2–W3–W4", 6: "M–W4–I", 7: "W1–W3–W5", 8: "M–W5–I"}
SEITEN = {"rechts", "links", "–"}
KOPF_ZUORDNUNG = ["gruppe", "befragte", "triade", "elemente", "paar", "einzeln",
                  "pol_paar", "pol_einzeln", "code", "holy_seite"]
KOPF_CODEBUCH = ["id", "links", "rechts", "definition", "beispiele", "im_persona_block"]
KOPF_NEBEN = ["gruppe", "befragte", "triade", "hauptcode", "nebencode", "beleg", "holy_seite"]
KOPF_GRENZ = ["gruppe", "befragte", "triade", "code_jetzt", "code_alternativ", "holy_seite_alternativ",
              "regel_jetzt", "begruendung"]
PERSONA_WERTE = ("ja", "nein", "Grenzfall")

fehler = []    # Verstöße gegen die Codierregeln -> Exit-Code 1
hinweise = []  # zur Kenntnis, im Protokoll zu begründen


def lies_csv(pfad, kopf):
    with open(pfad, encoding="utf-8", newline="") as f:
        r = csv.reader(f, delimiter=";")
        zeilen = list(r)
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


def lies_rohdaten(ordner_je_gruppe=None, personen=None):
    """Liest die Rohdateien; jede muss gültiges JSON sein. Ergebnis: {(gruppe, T, nr): triade}."""
    triaden = {}
    for gruppe, ordner in (ordner_je_gruppe or ROHDATEN).items():
        for b in (personen or BEFRAGTE):
            pfad = ordner / f"{b}.json"
            if not pfad.exists():
                fehler.append(f"Rohdatei fehlt: {pfad.relative_to(BASIS)}")
                continue
            try:
                d = json.loads(pfad.read_text(encoding="utf-8"))
            except json.JSONDecodeError as e:
                fehler.append(f"Kein gültiges JSON: {pfad.relative_to(BASIS)} ({e})")
                continue
            if not str(d.get("befragte", "")).startswith(b):
                fehler.append(f"{pfad.relative_to(BASIS)}: Feld befragte passt nicht zu {b}")
            for t in d.get("triaden", []):
                triaden[(gruppe, b, int(t["nr"]))] = t
    return triaden


def main():
    roh = lies_rohdaten()
    codebuch = lies_csv(CODEBUCH, KOPF_CODEBUCH)
    zuordnung = lies_csv(ZUORDNUNG, KOPF_ZUORDNUNG)
    neben = lies_csv(NEBEN, KOPF_NEBEN) if NEBEN.exists() else []

    # --- Codebuch prüfen ---------------------------------------------------------------
    codes = {}
    for c in codebuch:
        if c["id"] in codes:
            fehler.append(f"Codebuch: id {c['id']} doppelt")
        if not (c["id"][:1] in "KX" and c["id"][1:].isdigit()):
            fehler.append(f"Codebuch: id {c['id']} hat nicht die Form K01 … oder X01 …")
        if c["im_persona_block"] not in PERSONA_WERTE:
            fehler.append(f"Codebuch {c['id']}: im_persona_block muss ja, nein oder Grenzfall sein")
        codes[c["id"]] = c
    k_codes = [i for i in codes if i.startswith("K")]
    if not 8 <= len(k_codes) <= 12:
        fehler.append(f"Codebuch: {len(k_codes)} K-Codes, verlangt sind 8–12")

    pruefe_zuordnung(zuordnung, roh, codes)

    # --- Nebenaspekte prüfen (zählen nicht als Nennung) ---------------------------------
    pruefe_neben(neben, zuordnung, codes)
    return auswerten(codes, k_codes, zuordnung, neben, roh)


def pruefe_zuordnung(zuordnung, roh, codes):
    """Jede gültige Triade genau eine Zeile; Pole wörtlich wie in den Rohdaten; Codes aus dem Codebuch."""
    gesehen = Counter()
    for z in zuordnung:
        key = (z["gruppe"], z["befragte"], int(z["triade"]))
        ort = f"Zuordnung {z['gruppe']} {z['befragte']} Tr. {z['triade']}"
        gesehen[key] += 1
        t = roh.get(key)
        if t is None:
            fehler.append(f"{ort}: keine solche Triade in den Rohdaten")
            continue
        if t["uebersprungen"]:
            fehler.append(f"{ort}: Triade ist übersprungen und darf nicht codiert sein")
            continue
        soll_elem = TRIADEN[key[2]]
        if not z["elemente"].startswith(soll_elem):
            fehler.append(f"{ort}: elemente beginnt nicht mit {soll_elem}")
        if z["paar"] != "+".join(t["paar"]) or z["einzeln"] != t["einzeln"]:
            fehler.append(f"{ort}: paar/einzeln weicht von den Rohdaten ab")
        if z["pol_paar"] != t["pol_paar"] or z["pol_einzeln"] != t["pol_einzeln"]:
            fehler.append(f"{ort}: Polwortlaut weicht von den Rohdaten ab")
        if z["code"] != "sonstige" and z["code"] not in codes:
            fehler.append(f"{ort}: Code {z['code']} steht nicht im Codebuch")
        if z["gruppe"] in ("haupt", "erstlauf") and z["code"].startswith("X"):
            fehler.append(f"{ort}: X-Codes sind nur in der Kontrollgruppe erlaubt")
        if z["holy_seite"] not in SEITEN:
            fehler.append(f"{ort}: holy_seite muss rechts, links oder – sein")
        holy_in_triade = "M" in soll_elem.split("–")
        if not holy_in_triade and z["holy_seite"] != "–":
            fehler.append(f"{ort}: HOLY ist nicht in der Triade, holy_seite muss – sein")
        if holy_in_triade and z["holy_seite"] == "–" and z["code"] != "sonstige":
            fehler.append(f"{ort}: HOLY ist in der Triade, holy_seite fehlt")
    for key, t in sorted(roh.items()):
        if not t["uebersprungen"] and gesehen[key] != 1:
            fehler.append(f"Triade {key}: {gesehen[key]} Zeilen statt genau 1")


def pruefe_neben(neben, zuordnung, codes):
    haupt_von = {(z["gruppe"], z["befragte"], int(z["triade"])): z["code"] for z in zuordnung}
    for n in neben:
        key = (n["gruppe"], n["befragte"], int(n["triade"]))
        if haupt_von.get(key) != n["hauptcode"]:
            fehler.append(f"Nebenaspekt {key}: hauptcode {n['hauptcode']} passt nicht zur Zuordnung")
        if n["nebencode"] != "sonstige" and n["nebencode"] not in codes:
            fehler.append(f"Nebenaspekt {key}: Code {n['nebencode']} steht nicht im Codebuch")
        if n["nebencode"] == n["hauptcode"]:
            fehler.append(f"Nebenaspekt {key}: nebencode gleich hauptcode")
        if n["holy_seite"] not in SEITEN:
            fehler.append(f"Nebenaspekt {key}: holy_seite muss rechts, links oder – sein")
        elif n["holy_seite"] != "–" and ("M" not in TRIADEN[key[2]].split("–") or n["nebencode"] == "sonstige"):
            fehler.append(f"Nebenaspekt {key}: HOLY nicht in der Triade oder „sonstige“, holy_seite muss – sein")


def zaehle(zuordnung):
    """Nennungen und verschiedene Befragte je (Gruppe, Code)."""
    nennungen = defaultdict(Counter)
    befragte = defaultdict(lambda: defaultdict(set))
    for z in zuordnung:
        nennungen[z["gruppe"]][z["code"]] += 1
        befragte[z["gruppe"]][z["code"]].add(z["befragte"])
    return nennungen, befragte


def auswerten(codes, k_codes, zuordnung, neben, roh):
    # --- Zählen ---------------------------------------------------------------------------
    nennungen = defaultdict(Counter)         # nennungen[gruppe][code]
    befragte = defaultdict(lambda: defaultdict(set))
    holy = defaultdict(Counter)              # holy[(gruppe, code)]["rechts"/"links"/"–"]
    gueltig = defaultdict(Counter)           # gueltig[gruppe][T]
    for z in zuordnung:
        g, c = z["gruppe"], z["code"]
        nennungen[g][c] += 1
        befragte[g][c].add(z["befragte"])
        holy[(g, c)][z["holy_seite"]] += 1
        gueltig[g][z["befragte"]] += 1
    neben_n = defaultdict(Counter)
    neben_holy = defaultdict(Counter)        # neben_holy[(gruppe, code)]["rechts"/"links"/"–"]
    for n in neben:
        neben_n[n["gruppe"]][n["nebencode"]] += 1
        neben_holy[(n["gruppe"], n["nebencode"])][n["holy_seite"]] += 1

    print("KI-simuliert (Tool) – Konstrukt-Codierung, Prüfung und Zählung")
    print()
    print("Gültige (nicht übersprungene) Triaden je Person:")
    for g in ("haupt", "kontrolle"):
        teile = [f"{b}={gueltig[g][b]}" for b in BEFRAGTE]
        print(f"  {g:9s} " + "  ".join(teile) + f"   Summe={sum(gueltig[g].values())}")
    print()

    zeilen_aus = []
    kopf = ["id", "links", "rechts", "nennungen_haupt", "befragte_haupt", "holy_rechts_haupt",
            "holy_links_haupt", "nennungen_kontrolle", "befragte_kontrolle", "holy_rechts_kontrolle",
            "holy_links_kontrolle", "nebenaspekte_haupt", "nebenaspekte_kontrolle",
            "neben_holy_rechts_haupt", "neben_holy_links_haupt", "im_persona_block", "ausrichtung", "quelle"]
    print(f"{'Code':5s} {'links':22s} {'rechts':24s} {'Nenn.H':>6s} {'Bef.H':>5s} {'HOLY r/l H':>10s}"
          f" {'Nenn.K':>6s} {'Bef.K':>5s} {'HOLY r/l K':>10s} {'Neben H/K':>9s} {'N-HOLY r/l H':>12s}  Block")
    for cid, c in codes.items():
        hr, hl = holy[("haupt", cid)]["rechts"], holy[("haupt", cid)]["links"]
        kr, kl = holy[("kontrolle", cid)]["rechts"], holy[("kontrolle", cid)]["links"]
        nr, nl = neben_holy[("haupt", cid)]["rechts"], neben_holy[("haupt", cid)]["links"]
        if cid.startswith("X"):
            ausrichtung = "nur Kontrollgruppe (geht nicht in P8)"
        elif hr > hl:
            ausrichtung = "HOLY rechts häufiger"
            if nl > nr:
                hinweise.append(f"{cid}: in den Nebenaspekten steht HOLY öfter links ({nl}) als rechts ({nr})"
                                " – im Protokoll erwähnen")
        elif hr < hl:
            ausrichtung = "HOLY links häufiger: Pole tauschen"
            fehler.append(f"{cid}: HOLY links ({hl}) häufiger als rechts ({hr}) – Pole tauschen")
        else:
            # Gleichstand (auch 0 = 0): Stufen der Gleichstandsregel, siehe Kopfkommentar
            stufen = [("Nebenaspekte haupt", nr, nl), ("Kontrollgruppe", kr, kl)]
            entscheid = next(((name, r, l) for name, r, l in stufen if r != l), None)
            grund = "HOLY nicht genannt" if hr == 0 else f"Gleichstand {hr}:{hl}"
            if entscheid is None:
                ausrichtung = f"{grund}: Richtung im Protokoll begründen"
                hinweise.append(f"{cid}: {grund}, auch Nebenaspekte und Kontrollgruppe gleich – Richtung begründen")
            elif entscheid[1] > entscheid[2]:
                ausrichtung = f"{grund}; {entscheid[0]} HOLY rechts {entscheid[1]}:{entscheid[2]}"
                hinweise.append(f"{cid}: {grund} in den Nennungen; entschieden durch {entscheid[0]}"
                                f" (HOLY rechts {entscheid[1]}, links {entscheid[2]})")
            else:
                ausrichtung = f"{grund}; {entscheid[0]} HOLY links: Pole tauschen"
                fehler.append(f"{cid}: {grund}; {entscheid[0]} HOLY links ({entscheid[2]}) häufiger"
                              f" als rechts ({entscheid[1]}) – Pole tauschen")
        if cid.startswith("K") and nennungen["haupt"][cid] == 0:
            fehler.append(f"{cid}: keine Nennung in der Hauptgruppe")
        werte = [cid, c["links"], c["rechts"], nennungen["haupt"][cid], len(befragte["haupt"][cid]), hr, hl,
                 nennungen["kontrolle"][cid], len(befragte["kontrolle"][cid]), kr, kl,
                 neben_n["haupt"][cid], neben_n["kontrolle"][cid], nr, nl, c["im_persona_block"], ausrichtung, QUELLE]
        zeilen_aus.append(werte)
        print(f"{cid:5s} {c['links'][:22]:22s} {c['rechts'][:24]:24s} {werte[3]:6d} {werte[4]:5d} {hr:4d}/{hl:<5d}"
              f" {werte[7]:6d} {werte[8]:5d} {kr:4d}/{kl:<5d} {werte[11]:4d}/{werte[12]:<4d} {nr:6d}/{nl:<5d}"
              f"  {c['im_persona_block']}")
    for g in ("haupt", "kontrolle"):
        print(f"sonstige ({g}): {nennungen[g]['sonstige']} Zeilen; als Nebenaspekt: {neben_n[g]['sonstige']}")
    # Übersicht für das Protokoll (Abschnitt 5): Wie viele K-Codes kommen auch ohne Persona-Block vor?
    k_mit_kontrolle = [cid for cid in k_codes if nennungen["kontrolle"][cid] > 0]
    k_block = [cid for cid in k_codes if codes[cid]["im_persona_block"] == "ja"]
    k_grenz = [cid for cid in k_codes if codes[cid]["im_persona_block"] == "Grenzfall"]
    print(f"K-Codes gesamt: {len(k_codes)}; davon auch in der Kontrollgruppe als Hauptcode: {len(k_mit_kontrolle)}"
          f" (fehlen: {', '.join(c for c in k_codes if c not in k_mit_kontrolle) or 'keiner'});"
          f" im Persona-Block angelegt: {len(k_block)}; Grenzfall: {len(k_grenz)} ({', '.join(k_grenz) or '–'})")
    print()

    # Für Gleichstände: Belege zum Nachprüfen zeigen (Nennungen und Nebenaspekte mit HOLY, Idealmarke I)
    for cid in codes:
        hr, hl = holy[("haupt", cid)]["rechts"], holy[("haupt", cid)]["links"]
        if cid.startswith("K") and hr == hl:
            print(f"Gleichstand {cid} (HOLY rechts {hr}, links {hl}) – Belege zum Nachprüfen:")
            for z in zuordnung:
                if z["gruppe"] == "haupt" and z["code"] == cid and z["holy_seite"] != "–":
                    print(f"  Nennung    {z['befragte']} Tr. {z['triade']}: HOLY {z['holy_seite']:6s}"
                          f" „{z['pol_paar']}“ ↔ „{z['pol_einzeln']}“")
            for n in neben:
                if n["gruppe"] == "haupt" and n["nebencode"] == cid and n["holy_seite"] != "–":
                    print(f"  Nebenasp.  {n['befragte']} Tr. {n['triade']}: HOLY {n['holy_seite']:6s} „{n['beleg']}“")
            for z in zuordnung:
                if z["gruppe"] == "haupt" and z["code"] == cid and "I" in TRIADEN[int(z["triade"])].split("–"):
                    seite_i = "Paar" if "I" in z["paar"].split("+") else "Einzel"
                    pol = z["pol_paar"] if seite_i == "Paar" else z["pol_einzeln"]
                    print(f"  Ideal I    {z['befragte']} Tr. {z['triade']}: I im {seite_i}-Pol „{pol}“")
            print(f"  Kontrollgruppe {cid}: HOLY rechts {holy[('kontrolle', cid)]['rechts']},"
                  f" links {holy[('kontrolle', cid)]['links']}")
            print()

    schreib(AUSGABE, kopf, zeilen_aus)

    ideal_bei_k09(zuordnung)
    vergleich_haupt_kontrolle(zuordnung, roh)
    erstlauf = erstlauf_vergleich(zuordnung, codes)
    grenzfaelle(zuordnung, erstlauf, codes, k_codes)

    for h in hinweise:
        print("HINWEIS:", h)
    for e in fehler:
        print("FEHLER:", e)
    print("Ergebnis:", "OK" if not fehler else f"{len(fehler)} Fehler")
    return 1 if fehler else 0


def schreib(pfad, kopf, zeilen):
    with open(pfad, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, delimiter=";", lineterminator="\n")
        w.writerow(kopf)
        w.writerows(zeilen)
    print(f"Geschrieben: {pfad.relative_to(BASIS)}")


def ideal_bei_k09(zuordnung):
    """Belege zur Idealmarke I bei K09 (rechter Pol „für jeden Tag“ = Name der Idealmarke): Auf welchem Pol steht I?
    Nur Auflistung zum Nachprüfen; welcher Pol dem Codebuch-Pol „für jeden Tag“ entspricht, liest man am Wortlaut."""
    print()
    print("K09 „Kick für Notfälle – für jeden Tag“: Wo steht die Idealmarke I? (Name von I: „mein idealer Drink für "
          "jeden Tag“)")
    for g in ("haupt", "kontrolle"):
        zeilen = [z for z in zuordnung if z["gruppe"] == g and z["code"] == "K09"]
        mit_i = 0
        for z in zeilen:
            if "I" not in TRIADEN[int(z["triade"])].split("–"):
                print(f"  {g:9s} {z['befragte']} Tr. {z['triade']}: I nicht in der Triade")
                continue
            mit_i += 1
            seite = "Paar" if "I" in z["paar"].split("+") else "Einzel"
            pol = z["pol_paar"] if seite == "Paar" else z["pol_einzeln"]
            print(f"  {g:9s} {z['befragte']} Tr. {z['triade']}: I im {seite}-Pol „{pol}“")
        print(f"  {g}: {len(zeilen)} Nennungen von K09, davon {mit_i} in Triaden mit I")


def vergleich_haupt_kontrolle(zuordnung, roh):
    """Je Person und Triade, die in beiden Gruppen gültig ist: gleicher Code? gleiches Paar?"""
    haupt = {(z["befragte"], int(z["triade"])): z for z in zuordnung if z["gruppe"] == "haupt"}
    kontrolle = {(z["befragte"], int(z["triade"])): z for z in zuordnung if z["gruppe"] == "kontrolle"}
    zeilen = []
    for key in sorted(set(haupt) & set(kontrolle), key=lambda k: (BEFRAGTE.index(k[0]), k[1])):
        h, k = haupt[key], kontrolle[key]
        gleich_code = h["code"] == k["code"]
        gleich_paar = set(h["paar"].split("+")) == set(k["paar"].split("+"))
        zeilen.append([key[0], key[1], h["code"], k["code"], "ja" if gleich_code else "nein",
                       h["paar"], k["paar"], "ja" if gleich_paar else "nein", QUELLE])
    n = len(zeilen)
    n_code = sum(1 for z in zeilen if z[4] == "ja")
    n_paar = sum(1 for z in zeilen if z[7] == "ja")
    print()
    print(f"Haupt ↔ Kontrolle (dieselben Profile, ohne Persona-Block): {n} Person-Triaden in beiden Gruppen gültig; "
          f"gleicher Code: {n_code}; gleiches Paar: {n_paar}")
    schreib(AUS_HK, ["befragte", "triade", "code_haupt", "code_kontrolle", "gleicher_code", "paar_haupt",
                     "paar_kontrolle", "gleiches_paar", "quelle"], zeilen)


def erstlauf_vergleich(zuordnung, codes):
    """Verworfene Erstläufe T5/T6 (gleicher Prompt, erste Ziehung) gegen den ausgewerteten Lauf."""
    if not ERSTLAUF_ZUORDNUNG.exists():
        hinweise.append("Erstlauf-Zuordnung fehlt – Vergleich der Ziehungen entfällt")
        return []
    personen = sorted({p.stem for p in ERSTLAUF_ROH.glob("T*.json")}, key=BEFRAGTE.index)
    roh_e = lies_rohdaten({"erstlauf": ERSTLAUF_ROH}, personen)
    erst = lies_csv(ERSTLAUF_ZUORDNUNG, KOPF_ZUORDNUNG)
    if any(z["gruppe"] != "erstlauf" for z in erst):
        fehler.append("Erstlauf-Zuordnung: gruppe muss überall „erstlauf“ sein")
    pruefe_zuordnung(erst, roh_e, codes)
    haupt = {(z["befragte"], int(z["triade"])): z for z in zuordnung if z["gruppe"] == "haupt"}
    zeilen = []
    for z in erst:
        key = (z["befragte"], int(z["triade"]))
        h = haupt.get(key)
        if h is None:
            zeilen.append([key[0], key[1], z["code"], "(im ausgewerteten Lauf übersprungen)", "nein", z["paar"], "",
                           "nein", QUELLE])
            continue
        zeilen.append([key[0], key[1], z["code"], h["code"], "ja" if z["code"] == h["code"] else "nein",
                       z["paar"], h["paar"], "ja" if set(z["paar"].split("+")) == set(h["paar"].split("+")) else "nein",
                       QUELLE])
    # gültige Triaden im ausgewerteten Lauf, die im Erstlauf fehlen
    for key in sorted(haupt, key=lambda k: (BEFRAGTE.index(k[0]), k[1])):
        if key[0] in personen and not any((z["befragte"], int(z["triade"])) == key for z in erst):
            zeilen.append([key[0], key[1], "(im Erstlauf übersprungen)", haupt[key]["code"], "nein", "",
                           haupt[key]["paar"], "nein", QUELLE])
    n = len(zeilen)
    print()
    print(f"Erstlauf ↔ ausgewerteter Lauf ({', '.join(personen)}; gleicher Prompt, zweite Ziehung): {n} Triaden; "
          f"anderer Code: {sum(1 for x in zeilen if x[4] == 'nein')}; anderes Paar: "
          f"{sum(1 for x in zeilen if x[7] == 'nein')}")
    for x in zeilen:
        if x[4] == "nein":
            print(f"  {x[0]} Tr. {x[1]}: Erstlauf {x[2]} ({x[5]}) – ausgewertet {x[3]} ({x[6]})")
    schreib(AUS_ERSTLAUF, ["befragte", "triade", "code_erstlauf", "code_ausgewertet", "gleicher_code",
                           "paar_erstlauf", "paar_ausgewertet", "gleiches_paar", "quelle"], zeilen)
    return erst


def grenzfaelle(zuordnung, erst, codes, k_codes):
    """Robustheit: Grenzfälle einzeln und alle zugleich umcodieren und neu zählen (nur Information)."""
    if not GRENZFAELLE.exists():
        hinweise.append("konstrukte-grenzfaelle.csv fehlt – Robustheitsprüfung entfällt")
        return
    grenz = lies_csv(GRENZFAELLE, KOPF_GRENZ)
    alle = {(z["gruppe"], z["befragte"], int(z["triade"])): z for z in list(zuordnung) + list(erst)}
    for g in grenz:
        key = (g["gruppe"], g["befragte"], int(g["triade"]))
        ort = f"Grenzfall {key}"
        z = alle.get(key)
        if z is None:
            fehler.append(f"{ort}: keine solche Zuordnung")
            continue
        if z["code"] != g["code_jetzt"]:
            fehler.append(f"{ort}: code_jetzt {g['code_jetzt']} ≠ Zuordnung {z['code']}")
        if g["code_alternativ"] not in codes or g["code_alternativ"] == g["code_jetzt"]:
            fehler.append(f"{ort}: code_alternativ {g['code_alternativ']} ungültig")
        if g["holy_seite_alternativ"] not in SEITEN:
            fehler.append(f"{ort}: holy_seite_alternativ ungültig")

    def relevanz(zuo):
        _, bef = zaehle(zuo)
        return {c: len(bef["haupt"][c]) >= RELEVANZ_MIN_BEFRAGTE for c in k_codes}, zaehle(zuo)

    rel0, (n0, b0) = relevanz(zuordnung)
    k_kontrolle0 = sum(1 for c in k_codes if n0["kontrolle"][c] > 0)
    gh = [g for g in grenz if g["gruppe"] in ("haupt", "kontrolle")]
    varianten = [(f"{g['gruppe']} {g['befragte']} Tr. {g['triade']}: {g['code_jetzt']} → {g['code_alternativ']}", [g])
                 for g in gh]
    varianten.append(("alle Grenzfälle der Haupt- und Kontrollgruppe zugleich", gh))
    zeilen = []
    print()
    print(f"Grenzfälle (konstrukte-grenzfaelle.csv): {len(grenz)} Zeilen, davon {len(gh)} Haupt-/Kontrollgruppe")
    for name, auswahl in varianten:
        tausch = {(g["gruppe"], g["befragte"], int(g["triade"])): g["code_alternativ"] for g in auswahl}
        zuo = [dict(z, code=tausch.get((z["gruppe"], z["befragte"], int(z["triade"])), z["code"])) for z in zuordnung]
        rel, (n1, b1) = relevanz(zuo)
        geaendert = []
        for g in ("haupt", "kontrolle"):
            for c in sorted(set(n0[g]) | set(n1[g])):
                if (n0[g][c], len(b0[g][c])) != (n1[g][c], len(b1[g][c])):
                    geaendert.append(f"{c} {g} {n0[g][c]} ({len(b0[g][c])}) → {n1[g][c]} ({len(b1[g][c])})")
        rel_wechsel = [c for c in k_codes if rel[c] != rel0[c]]
        k_kontrolle = sum(1 for c in k_codes if n1["kontrolle"][c] > 0)
        zeilen.append([name, " · ".join(geaendert) or "–", ", ".join(rel_wechsel) or "keiner",
                       f"{k_kontrolle} von {len(k_codes)}", QUELLE])
        print(f"  {name}: Relevanz ändert sich bei {', '.join(rel_wechsel) or 'keinem K-Code'}; "
              f"K-Codes in der Kontrollgruppe {k_kontrolle} (vorher {k_kontrolle0}); {'; '.join(geaendert)}")
    ge = [g for g in grenz if g["gruppe"] == "erstlauf"]
    if ge and erst:
        tausch = {(g["befragte"], int(g["triade"])): g["code_alternativ"] for g in ge}
        haupt = {(z["befragte"], int(z["triade"])): z["code"] for z in zuordnung if z["gruppe"] == "haupt"}
        anders = sum(1 for z in erst if haupt.get((z["befragte"], int(z["triade"])))
                     != tausch.get((z["befragte"], int(z["triade"])), z["code"]))
        name = "Erstlauf: alle Grenzfälle des Erstlaufs mit dem alternativen Code"
        zeilen.append([name, f"anderer Code als im ausgewerteten Lauf: {anders} von {len(erst)}", "–", "–", QUELLE])
        print(f"  {name}: anderer Code in {anders} von {len(erst)} Triaden")
    schreib(AUS_GRENZ, ["variante", "nennungen_befragte_geaendert", "relevanz_aendert_sich_bei",
                        "k_codes_in_kontrolle", "quelle"], zeilen)


if __name__ == "__main__":
    sys.exit(main())
