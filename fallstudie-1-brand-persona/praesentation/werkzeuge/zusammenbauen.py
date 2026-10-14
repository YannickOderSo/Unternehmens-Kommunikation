#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
zusammenbauen.py – erzeugt index.html aus werkzeuge/vorlage.html und den Folien
=================================================================================

Was passiert:
  1. Alle Dateien folien/*.html werden in Dateinamen-Reihenfolge gelesen
     (Dateien, deren Name mit _ beginnt, werden übersprungen – außer sie werden
     mit --nur ausdrücklich angefordert, z. B. --nur _demo).
  2. Aus jeder Datei werden die <section class="folie" …>-Elemente übernommen.
  3. Gibt es css/folien/<dateiname>.css bzw. js/folien/<dateiname>.js, werden sie
     automatisch eingebunden (<dateiname> = Name der Folien-Datei ohne .html).
  4. Relative Pfade (src="bilder/…") werden so angepasst, dass sie auch für
     Ausgaben in Unterordnern stimmen (z. B. _test/f06.html).
  5. Am Ende stehen Hinweise (fehlende Notizen, Sollzeiten …) und die Summe
     der Sollzeiten.

Aufrufe (im Ordner praesentation/ oder von überall mit vollem Pfad):
  python3 werkzeuge/zusammenbauen.py                       → index.html (alle Folien)
  python3 werkzeuge/zusammenbauen.py --nur f06,f07 --ausgabe _test/f06.html
  python3 werkzeuge/zusammenbauen.py --nur 06-repertory-grid --ausgabe _test/rg.html
  python3 werkzeuge/zusammenbauen.py --nur _demo --ausgabe _test/demo.html
  python3 werkzeuge/zusammenbauen.py --liste               → nur Folienliste anzeigen

Nur Python-Standardbibliothek, keine Installation nötig.
"""

import argparse
import os
import re
import sys
from datetime import datetime

WURZEL = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FOLIEN_ORDNER = os.path.join(WURZEL, "folien")
VORLAGE = os.path.join(WURZEL, "werkzeuge", "vorlage.html")

FELDER = {"kompetenz", "attribute", "nutzen", "tonalitaet", "bild", "persona", "hub", "leer"}
BUENDEL = {"A", "B", "C", "alle"}


def maskieren(text):
    """Kommentare und <script>-Inhalte durch Leerzeichen ersetzen (gleiche Länge),
    damit Beispiele darin nicht als echte <section> erkannt werden."""
    def leer(m):
        return re.sub(r"[^\n]", " ", m.group(0))
    text = re.sub(r"<!--.*?-->", leer, text, flags=re.S)
    text = re.sub(r"(<script\b[^>]*>)(.*?)(</script>)",
                  lambda m: m.group(1) + leer(re.match(r".*", m.group(2), re.S)) + m.group(3),
                  text, flags=re.S | re.I)
    return text


def sections_finden(text):
    """Gibt eine Liste (start, ende) der äußersten <section>-Elemente zurück."""
    maske = maskieren(text)
    ergebnisse = []
    tiefe = 0
    start = None
    for m in re.finditer(r"<(/?)section\b[^>]*>", maske, flags=re.I):
        if m.group(1) == "":
            if tiefe == 0:
                start = m.start()
            tiefe += 1
        else:
            tiefe -= 1
            if tiefe == 0 and start is not None:
                ergebnisse.append((start, m.end()))
                start = None
            if tiefe < 0:
                tiefe = 0
    return ergebnisse


def attribut(tag, name):
    m = re.search(r'\s' + re.escape(name) + r'\s*=\s*"([^"]*)"', tag)
    if m:
        return m.group(1)
    m = re.search(r"\s" + re.escape(name) + r"\s*=\s*'([^']*)'", tag)
    if m:
        return m.group(1)
    if re.search(r"\s" + re.escape(name) + r"(\s|>|/)", tag):
        return ""
    return None


def pfade_anpassen(html, basis):
    """Relative Pfade in src/href/poster/url() um den Basis-Pfad ergänzen."""
    if not basis:
        return html

    def relativ(pfad):
        return not re.match(r"^([a-zA-Z][a-zA-Z0-9+.-]*:|/|#|\{\{)", pfad) and pfad.strip() != ""

    def attr_ersetzen(m):
        name, anf, pfad = m.group(1), m.group(2), m.group(3)
        if relativ(pfad):
            pfad = basis + pfad
        return "%s=%s%s%s" % (name, anf, pfad, anf)

    html = re.sub(r'\b(src|href|poster|xlink:href)=(["\'])([^"\']*)\2', attr_ersetzen, html)

    def url_ersetzen(m):
        anf, pfad = m.group(1), m.group(2)
        if relativ(pfad):
            pfad = basis + pfad
        return "url(%s%s%s)" % (anf, pfad, anf)

    html = re.sub(r"url\(\s*(['\"]?)([^'\")]+)\1\s*\)", url_ersetzen, html)
    return html


def zeit_text(sekunden):
    return "%d:%02d" % (sekunden // 60, sekunden % 60)


def folien_dateien():
    if not os.path.isdir(FOLIEN_ORDNER):
        return []
    return sorted(f for f in os.listdir(FOLIEN_ORDNER) if f.endswith(".html"))


def lesen(pfad):
    with open(pfad, "r", encoding="utf-8") as datei:
        return datei.read()


def folien_einlesen(dateiname):
    text = lesen(os.path.join(FOLIEN_ORDNER, dateiname))
    folien = []
    for start, ende in sections_finden(text):
        stueck = text[start:ende]
        tag = re.match(r"<section\b[^>]*>", stueck, flags=re.I).group(0)
        folien.append({
            "datei": dateiname,
            "html": stueck,
            "tag": tag,
            "id": attribut(tag, "id") or "",
            "klasse": attribut(tag, "class") or "",
            "titel": attribut(tag, "data-titel"),
            "zeit": attribut(tag, "data-zeit"),
            "feld": attribut(tag, "data-feld"),
            "buendel": attribut(tag, "data-buendel"),
            "optional": attribut(tag, "data-optional") is not None,
            "backup": attribut(tag, "data-backup") is not None,
            "notizen": re.search(r'<aside\b[^>]*class="[^"]*\bnotizen\b[^"]*"[^>]*>(.*?)</aside>', stueck, flags=re.S),
        })
    return folien


def main():
    parser = argparse.ArgumentParser(
        description="Erzeugt index.html aus werkzeuge/vorlage.html und folien/*.html.")
    parser.add_argument("--nur", help="Kommagetrennt: Folien-IDs (f06) und/oder Dateinamen (06-repertory-grid, _demo)")
    parser.add_argument("--ausgabe", help="Zieldatei (Standard: index.html im Ordner praesentation/)")
    parser.add_argument("--liste", action="store_true", help="Nur die gefundenen Folien auflisten")
    argumente = parser.parse_args()

    dateien = folien_dateien()
    if not dateien:
        print("FEHLER: Im Ordner folien/ liegen keine .html-Dateien.", file=sys.stderr)
        return 1

    # ---- Auswahl ------------------------------------------------------------
    gewuenscht_dateien = set()
    gewuenschte_ids = []
    if argumente.nur:
        for teil in [t.strip() for t in argumente.nur.split(",") if t.strip()]:
            name = teil if teil.endswith(".html") else teil + ".html"
            if name in dateien:
                gewuenscht_dateien.add(name)
            else:
                gewuenschte_ids.append(teil)

    ausgewaehlt = []
    gefundene_ids = set()
    for dateiname in dateien:
        unterstrich = dateiname.startswith("_")
        folien = folien_einlesen(dateiname)
        for f in folien:
            if argumente.nur:
                if dateiname in gewuenscht_dateien:
                    ausgewaehlt.append(f)
                elif f["id"] in gewuenschte_ids:
                    ausgewaehlt.append(f)
                    gefundene_ids.add(f["id"])
            elif not unterstrich:
                ausgewaehlt.append(f)

    for fid in gewuenschte_ids:
        if fid not in gefundene_ids:
            print("WARNUNG: „%s“ ist weder eine Datei in folien/ noch eine Folien-ID." % fid, file=sys.stderr)

    if argumente.liste:
        print("%-6s %-28s %-11s %-7s %-6s %s" % ("ID", "Datei", "Feld", "Bündel", "Zeit", "Titel"))
        for f in ausgewaehlt:
            zusatz = (" [optional]" if f["optional"] else "") + (" [Backup]" if f["backup"] else "")
            print("%-6s %-28s %-11s %-7s %-6s %s%s" % (f["id"], f["datei"], f["feld"] or "–", f["buendel"] or "–",
                                                     f["zeit"] or "–", f["titel"] or "–", zusatz))
        return 0

    if not ausgewaehlt:
        print("FEHLER: Keine Folien ausgewählt.", file=sys.stderr)
        return 1

    # ---- Ausgabepfad und Basis ----------------------------------------------
    ausgabe = argumente.ausgabe or os.path.join(WURZEL, "index.html")
    if not os.path.isabs(ausgabe):
        # relativ zum Präsentationsordner, damit der Aufruf von überall gleich wirkt
        ausgabe = os.path.join(WURZEL, ausgabe)
    ausgabe = os.path.normpath(ausgabe)
    ausgabe_ordner = os.path.dirname(ausgabe)
    os.makedirs(ausgabe_ordner, exist_ok=True)
    basis = os.path.relpath(WURZEL, ausgabe_ordner).replace(os.sep, "/")
    basis = "" if basis == "." else basis + "/"

    # ---- Prüfungen ----------------------------------------------------------
    hinweise = []
    ids = {}
    for f in ausgewaehlt:
        ort = "%s (%s)" % (f["id"] or "ohne ID", f["datei"])
        if "folie" not in f["klasse"].split():
            hinweise.append("%s: <section> ohne class=\"folie\" – wird von deck.js ignoriert" % ort)
        if not f["id"]:
            hinweise.append("%s: id fehlt (z. B. id=\"f06\")" % ort)
        elif f["id"] in ids:
            hinweise.append("%s: ID doppelt (auch in %s)" % (ort, ids[f["id"]]))
        else:
            ids[f["id"]] = f["datei"]
        if not f["titel"]:
            hinweise.append("%s: data-titel fehlt" % ort)
        if f["zeit"] is None:
            hinweise.append("%s: data-zeit (Sollzeit in Sekunden) fehlt" % ort)
        elif not re.match(r"^\d+$", f["zeit"]):
            hinweise.append("%s: data-zeit muss eine ganze Zahl (Sekunden) sein" % ort)
        if f["feld"] is not None and f["feld"] not in FELDER:
            hinweise.append("%s: data-feld=\"%s\" unbekannt (erlaubt: %s)" % (ort, f["feld"], ", ".join(sorted(FELDER))))
        if f["buendel"] is not None and f["buendel"] not in BUENDEL:
            hinweise.append("%s: data-buendel=\"%s\" unbekannt (A, B, C oder alle)" % (ort, f["buendel"]))
        if not f["notizen"] or not re.sub(r"<[^>]+>|\s", "", f["notizen"].group(1)):
            hinweise.append("%s: Sprechtext (<aside class=\"notizen\">) fehlt oder ist leer" % ort)

    # ---- Zusammenbauen ------------------------------------------------------
    vorlage = lesen(VORLAGE)
    folien_html = []
    css_links = []
    js_links = []
    gesehen_dateien = []
    for f in ausgewaehlt:
        if f["datei"] not in gesehen_dateien:
            gesehen_dateien.append(f["datei"])
            folien_html.append("<!-- ===== folien/%s ===== -->" % f["datei"])
        folien_html.append(pfade_anpassen(f["html"], basis))
    for dateiname in gesehen_dateien:
        stamm = dateiname[:-5]
        if os.path.isfile(os.path.join(WURZEL, "css", "folien", stamm + ".css")):
            css_links.append('<link rel="stylesheet" href="%scss/folien/%s.css">' % (basis, stamm))
        if os.path.isfile(os.path.join(WURZEL, "js", "folien", stamm + ".js")):
            js_links.append('<script src="%sjs/folien/%s.js"></script>' % (basis, stamm))

    hinweis = ("ERZEUGT von werkzeuge/zusammenbauen.py am %s – NICHT VON HAND BEARBEITEN. "
               "Änderungen in folien/*.html, css/, js/ oder marke.js machen und neu zusammenbauen."
               % datetime.now().strftime("%d.%m.%Y %H:%M"))
    ergebnis = (vorlage
                .replace("{{HINWEIS}}", hinweis)
                .replace("{{BASIS}}", basis)
                .replace("{{FOLIEN_CSS}}", "\n".join(css_links))
                .replace("{{FOLIEN_JS}}", "\n".join(js_links))
                .replace("{{FOLIEN}}", "\n\n".join(folien_html)))
    with open(ausgabe, "w", encoding="utf-8", newline="\n") as datei:
        datei.write(ergebnis)

    # ---- Bericht ------------------------------------------------------------
    haupt = [f for f in ausgewaehlt if not f["backup"] and not f["optional"]]
    summe = sum(int(f["zeit"]) for f in haupt if f["zeit"] and re.match(r"^\d+$", f["zeit"]))
    optional = [f for f in ausgewaehlt if f["optional"]]
    backup = [f for f in ausgewaehlt if f["backup"]]
    print("Geschrieben: %s" % os.path.relpath(ausgabe, os.getcwd()))
    print("Folien: %d (davon %d Backup, %d optional) aus %d Datei(en)"
          % (len(ausgewaehlt), len(backup), len(optional), len(gesehen_dateien)))
    print("Sollzeit Hauptfolien (ohne optionale und Backup): %s min" % zeit_text(summe))
    if css_links or js_links:
        print("Eingebunden: %d CSS, %d JS aus css/folien/ bzw. js/folien/" % (len(css_links), len(js_links)))
    if hinweise:
        print("\nHinweise (%d):" % len(hinweise))
        for h in hinweise:
            print("  – " + h)
    return 0


if __name__ == "__main__":
    sys.exit(main())
