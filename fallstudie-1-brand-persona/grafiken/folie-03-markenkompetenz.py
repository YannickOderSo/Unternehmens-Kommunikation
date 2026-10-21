"""Erzeugt die Grafik für Folie 3: Markenkern von HOLY (Zeitleiste, Kennzahlen, Marktrolle).

Werte aus markenkompetenz.md (Stand 17.10.2026). Kennzahlen sind Selbstauskünfte des Unternehmens.
Seit Mi, 21.10.2026 (Abgleich Vorlesung, Befunde #27/#28): Kicker „MARKENKERN · WER SIND WIR?“ statt
„MARKENKOMPETENZ · WER BIN ICH?“ und Feldname in der Quellenzeile wie in der Vorlesung (Stenger, S. 88–91 –
die Seitenangabe nur hier, nicht in der Quellenzeile: Fußzeilen mit Vorlesungsseiten sind nicht freigegeben,
Befund #4); Inhalte unverändert. Aufruf: python3 folie-03-markenkompetenz.py folie-03-markenkompetenz.svg
"""
import sys

W, H = 1400, 800
FONT = "Segoe UI, Calibri, Arial, Helvetica, sans-serif"
TEXT, GRAU, LINIE, FLAECHE = "#1F2A30", "#5E6A72", "#D3DAE0", "#F3F5F7"
SCHIEFER, SCHIEFER_HELL = "#2F4553", "#DDE5EC"
ROT, ROT_HELL = "#B3161D", "#F6DCD9"

ZEITLEISTE = [  # Jahr, Text, Status, Quelle
    (2020, "Gründung in Berlin", "✔", "[3]"),
    (2021, "Gaming Booster, online", "✔", "[4, 22]"),
    (2022, "Iced Tea → Softdrinks", "✔", "[4, 24]"),
    (2024, "erster Supermarkt", "✔", "[6]"),
    (2026, "TV-Kampagne und Syrup", "✎", "[5, 25, 39]"),
]
KENNZAHLEN = [  # Wert, Bezeichnung, Beleg
    ("über 170 Mio. €", "Umsatz 2025", "✎ [13, 16] · Stand 02/2026"),
    ("über 2 Mio.", "Kund:innen", "✔ [13] · Stand 02/2026"),
    ("über 170", "Mitarbeitende", "✎ [5, 17] · Stand 10/2026"),
]
ROLLEN = ["Marktführer", "Herausforderer", "Mitläufer", "Spezialist"]
ROLLE = "Herausforderer"

teile = []
add = teile.append


def text(x, y, inhalt, groesse, farbe=TEXT, gewicht="normal", anker="middle", stil="normal"):
    add(f'<text x="{x:.1f}" y="{y:.1f}" font-family="{FONT}" font-size="{groesse}" font-weight="{gewicht}" '
        f'font-style="{stil}" fill="{farbe}" text-anchor="{anker}">{inhalt}</text>')


add(f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">')
add(f'<rect width="{W}" height="{H}" fill="#FFFFFF"/>')

# Kopf
text(40, 44, "MARKENKERN · WER SIND WIR?", 14, ROT, "bold", "start")
text(40, 84, "HOLY: Herausforderer mit zuckerfreien Softdrinks zum Selbermixen", 30, TEXT, "bold", "start")

# Steuerrad-Symbol oben rechts (Zentrum hervorgehoben)
sx, sy = 1320, 62
add(f'<circle cx="{sx}" cy="{sy}" r="34" fill="{SCHIEFER_HELL}" stroke="#FFFFFF" stroke-width="2"/>')
add(f'<path d="M {sx} {sy - 34} A 34 34 0 0 1 {sx} {sy + 34} Z" fill="{ROT_HELL}"/>')
add(f'<line x1="{sx - 34}" y1="{sy}" x2="{sx + 34}" y2="{sy}" stroke="#FFFFFF" stroke-width="2"/>')
add(f'<line x1="{sx}" y1="{sy - 34}" x2="{sx}" y2="{sy + 34}" stroke="#FFFFFF" stroke-width="2"/>')
add(f'<circle cx="{sx}" cy="{sy}" r="13" fill="{ROT}" stroke="#FFFFFF" stroke-width="2"/>')
text(sx, 116, "Zentrum des Steuerrads", 11.5, GRAU)

# Zeitleiste (Abstände nach Jahren)
X_START, X_ENDE, Y_LINIE = 120, 1280, 230
JAHR0, JAHR1 = 2020, 2026


def xj(jahr):
    return X_START + (X_ENDE - X_START) * (jahr - JAHR0) / (JAHR1 - JAHR0)


x_handel = xj(2024)
add(f'<line x1="{X_START}" y1="{Y_LINIE}" x2="{x_handel:.1f}" y2="{Y_LINIE}" stroke="{SCHIEFER}" stroke-width="6" '
    f'stroke-linecap="round"/>')
add(f'<line x1="{x_handel:.1f}" y1="{Y_LINIE}" x2="{X_ENDE}" y2="{Y_LINIE}" stroke="{ROT}" stroke-width="6" '
    f'stroke-linecap="round"/>')
text(xj(2023), Y_LINIE - 14, "nur Onlineshop", 14, SCHIEFER, stil="italic")
text(xj(2025), Y_LINIE - 14, "auch im Handel", 14, ROT, stil="italic")

for jahr, inhalt, status, quelle in ZEITLEISTE:
    x = xj(jahr)
    farbe = ROT if jahr >= 2024 else SCHIEFER
    start = jahr == 2020
    add(f'<circle cx="{x:.1f}" cy="{Y_LINIE}" r="{14 if start else 11}" fill="{farbe if start else "#FFFFFF"}" '
        f'stroke="{farbe}" stroke-width="4"/>')
    text(x, Y_LINIE - 30, str(jahr), 22, farbe, "bold")
    text(x, Y_LINIE + 38, inhalt, 16, TEXT, "bold")
    text(x, Y_LINIE + 58, f"{status} {quelle}", 12, GRAU)

# Kennzahlen (unten links)
Y_K = 360
text(40, Y_K, "Laut Unternehmen", 17, GRAU, "bold", "start")
for i, (wert, bez, beleg) in enumerate(KENNZAHLEN):
    x = 40 + i * 262
    add(f'<rect x="{x}" y="{Y_K + 16}" width="246" height="150" rx="12" fill="{FLAECHE}"/>')
    # 28 px statt 30 px (Grafikprüfung 17.10.2026): „über 170 Mio. €“ endete 6 px vor dem Kachelrand und
    # kann mit Segoe UI (PowerPoint-Import) überlaufen
    text(x + 18, Y_K + 72, wert, 28, TEXT, "bold", "start")
    text(x + 18, Y_K + 104, bez, 17, TEXT, anker="start")
    text(x + 18, Y_K + 142, beleg, 12.5, GRAU, anker="start")
text(40, Y_K + 196, "Alle drei Werte sind Selbstauskünfte. Geprüfte Bilanzzahlen liegen uns nicht vor;", 13.5, GRAU,
     anker="start")
text(40, Y_K + 214, "einen Marktanteil zeigen wir nicht (keine belastbaren Daten für Pulver-Softdrinks).", 13.5, GRAU,
     anker="start")

# Rolle und Claim (unten rechts)
X_R = 830
text(X_R, Y_K, "Rolle im Markt", 17, GRAU, "bold", "start")
x = X_R
for rolle in ROLLEN:
    breite = 16 + 9.4 * len(rolle)
    aktiv = rolle == ROLLE
    add(f'<rect x="{x:.1f}" y="{Y_K + 18}" width="{breite:.1f}" height="38" rx="19" '
        f'fill="{ROT if aktiv else "#FFFFFF"}" stroke="{ROT if aktiv else LINIE}" stroke-width="2"/>')
    text(x + breite / 2, Y_K + 43, rolle, 15, "#FFFFFF" if aktiv else GRAU, "bold" if aktiv else "normal")
    x += breite + 10
text(X_R, Y_K + 92, "Greift den ganzen Softdrink-Markt an", 19, TEXT, "bold", "start")
text(X_R, Y_K + 116, "Jost ✔ [24] · „Challenger-Brand“ ✔ [13] · Rolle nach Kotler,", 13, GRAU, anker="start")
text(X_R, Y_K + 133, "Kriterium Angriff, Bezugsmarkt Softdrinks (H, unsere Einordnung)", 13, GRAU, anker="start")
add(f'<rect x="{X_R}" y="{Y_K + 156}" width="6" height="56" fill="{ROT}"/>')
text(X_R + 20, Y_K + 183, "„Geiler Geschmack mit gutem Gewissen“", 21, TEXT, "bold", "start", "italic")
text(X_R + 20, Y_K + 205, "Markenversprechen laut Website und Press Kit ✔ [5, 13]", 13, GRAU, anker="start")

# Quellenzeile
QUELLE = [
    "Quellen: Recherche-Dossier Kap. 2 (Stand 14.10.2026) und eigene Prüfung 17.10.2026; Nummern = Anhang B des Dossiers (Backup B8):",
    "[3] North Data (Registerdaten), [4] deutsche-startups.de 10/2023, [5] HOLY Story, [6] TikTok HOLY 05/2024, [13] HOLY Press Kit 02/2026,",
    "[16] WirtschaftsWoche 01/2026, [17] Karriereseite, [22] Symrise 09/2021, [24] Podcast „Digitale Vorreiter:innen“ #281, "
    "[25] HORIZONT 01/2026, [39] TikTok HOLY 04/2026.",
    "✔ geprüft · ✎ korrigiert · H unsere Einordnung · Feld „Markenkern“ wie in der Vorlesung, Rollen nach Kotler "
    "(mit der Vorlesung abgleichen) · Erstellt mit KI-Unterstützung (Claude Code; KI-Nachweis 55/56, D11).",
]
for i, zeile in enumerate(QUELLE):
    text(40, 708 + 18 * i, zeile, 12, GRAU, anker="start")

add("</svg>")
open(sys.argv[1], "w", encoding="utf-8").write("\n".join(teile) + "\n")
