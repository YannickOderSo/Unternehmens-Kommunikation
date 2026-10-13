"""Erzeugt die Grafik für Folie 2: Methoden → Felder des Markensteuerrads."""
import sys

W, H = 1400, 800
CX, CY, R, RI = 700, 370, 250, 92
FONT = "Segoe UI, Calibri, Arial, Helvetica, sans-serif"

HARD_FILL, HARD_TITLE, HARD_TEXT, HARD_LINE = "#DDE5EC", "#2F4553", "#4A5D6B", "#5B7080"
SOFT_FILL, SOFT_TITLE, SOFT_TEXT, SOFT_LINE = "#F6DCD9", "#8E1B1B", "#9A3B36", "#B3161D"
KERN = "#B3161D"
PFEIL = "#44525C"
GRAU = "#6B7780"

teile = []
add = teile.append


def text(x, y, inhalt, groesse, farbe, gewicht="normal", anker="middle", stil="normal"):
    add(f'<text x="{x}" y="{y}" font-family="{FONT}" font-size="{groesse}" font-weight="{gewicht}" '
        f'font-style="{stil}" fill="{farbe}" text-anchor="{anker}">{inhalt}</text>')


def pfeil(x1, y1, x2, y2, farbe=PFEIL, breite=2.5, spitze=11):
    """Linie mit ausgefüllter Pfeilspitze (als Polygon, damit PowerPoint sie beim Konvertieren behält)."""
    import math
    winkel = math.atan2(y2 - y1, x2 - x1)
    bx, by = x2 - spitze * math.cos(winkel), y2 - spitze * math.sin(winkel)
    add(f'<line x1="{x1}" y1="{y1}" x2="{bx:.1f}" y2="{by:.1f}" stroke="{farbe}" stroke-width="{breite}"/>')
    lx = bx + spitze * 0.5 * math.cos(winkel + math.pi / 2)
    ly = by + spitze * 0.5 * math.sin(winkel + math.pi / 2)
    rx = bx + spitze * 0.5 * math.cos(winkel - math.pi / 2)
    ry = by + spitze * 0.5 * math.sin(winkel - math.pi / 2)
    add(f'<polygon points="{x2},{y2} {lx:.1f},{ly:.1f} {rx:.1f},{ry:.1f}" fill="{farbe}"/>')


def methode(x, y, titel, unterzeile, folie, linie):
    add(f'<rect x="{x}" y="{y}" width="300" height="96" rx="10" fill="#FFFFFF" stroke="{linie}" stroke-width="2"/>')
    text(x + 150, y + 34, titel, 19, "#1F2A30", "bold")
    text(x + 150, y + 58, unterzeile, 14, "#4A555C")
    text(x + 150, y + 81, folie, 13, linie, "bold")


add(f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">')
add(f'<rect width="{W}" height="{H}" fill="#FFFFFF"/>')

# Markensteuerrad: vier Quadranten + Zentrum
quadranten = [
    (f"M{CX},{CY} L{CX-R},{CY} A{R},{R} 0 0 1 {CX},{CY-R} Z", HARD_FILL),  # oben links: Nutzen
    (f"M{CX},{CY} L{CX},{CY-R} A{R},{R} 0 0 1 {CX+R},{CY} Z", SOFT_FILL),  # oben rechts: Tonalität
    (f"M{CX},{CY} L{CX+R},{CY} A{R},{R} 0 0 1 {CX},{CY+R} Z", SOFT_FILL),  # unten rechts: Bild
    (f"M{CX},{CY} L{CX},{CY+R} A{R},{R} 0 0 1 {CX-R},{CY} Z", HARD_FILL),  # unten links: Attribute
]
for pfad, farbe in quadranten:
    add(f'<path d="{pfad}" fill="{farbe}" stroke="#FFFFFF" stroke-width="8"/>')

text(588, 236, "Markennutzen", 19, HARD_TITLE, "bold")
text(588, 260, "Was biete ich an?", 15, HARD_TEXT)
text(812, 236, "Markentonalität", 19, SOFT_TITLE, "bold")
text(812, 260, "Wie bin ich?", 15, SOFT_TEXT)
text(812, 488, "Markenbild", 19, SOFT_TITLE, "bold")
text(812, 514, "Wie trete ich auf?", 15, SOFT_TEXT)
text(590, 488, "Markenattribute", 19, HARD_TITLE, "bold")
text(590, 514, "Über welche", 15, HARD_TEXT)
text(590, 534, "Eigenschaften", 15, HARD_TEXT)
text(590, 554, "verfüge ich?", 15, HARD_TEXT)

add(f'<circle cx="{CX}" cy="{CY}" r="{RI}" fill="{KERN}" stroke="#FFFFFF" stroke-width="8"/>')
text(CX, CY - 8, "Marken-", 19, "#FFFFFF", "bold")
text(CX, CY + 15, "kompetenz", 19, "#FFFFFF", "bold")
text(CX, CY + 40, "Wer bin ich?", 14, "#FFFFFF")

text(505, 612, "HARD FACTS · rational", 14, HARD_LINE, "bold")
text(895, 612, "SOFT FACTS · emotional", 14, SOFT_LINE, "bold")

# Desk Research → Zentrum
add(f'<rect x="560" y="18" width="280" height="74" rx="10" fill="#FFFFFF" stroke="{KERN}" stroke-width="2"/>')
text(700, 48, "Desk Research", 19, "#1F2A30", "bold")
text(700, 74, "Herkunft, Historie, Marktrolle · Folie 3", 14, "#4A555C")
pfeil(CX, 92, CX, CY - RI - 4)

# Methoden links (hard facts) und rechts (soft facts)
methode(40, 180, "Laddering", "Means-End-Kette bis zu den Werten", "→ Folie 7", HARD_LINE)
methode(40, 464, "Repertory Grid", "Triadenvergleich mit Wettbewerbern", "→ Folie 6", HARD_LINE)
methode(1060, 180, "Analogiemethoden", "Marke als Mensch und als Tier", "→ Folie 8", SOFT_LINE)
methode(1060, 464, "Kommunikationsanalyse", "Instagram · Facebook · YouTube", "→ Folie 9", SOFT_LINE)

pfeil(340, 228, 488, 228)
pfeil(340, 512, 488, 512)
pfeil(1060, 228, 912, 228)
pfeil(1060, 512, 912, 512)

# Verkettung der Methoden
pfeil(190, 464, 190, 278, GRAU, 2)
text(205, 364, "Attribute sind die", 14, GRAU, anker="start", stil="italic")
text(205, 383, "Startpunkte", 14, GRAU, anker="start", stil="italic")
pfeil(1210, 276, 1210, 462, GRAU, 2)
text(1195, 364, "Tonalität ist der", 14, GRAU, anker="end", stil="italic")
text(1195, 383, "Prüfmaßstab", 14, GRAU, anker="end", stil="italic")

# Zielgruppe als Bezugsrahmen
pfeil(CX, 660, CX, CY + R + 6)
add('<rect x="40" y="660" width="1320" height="64" rx="10" fill="#EEF1F3" stroke="#C5CDD3" stroke-width="1.5"/>')
add(f'<text x="700" y="699" font-family="{FONT}" font-size="18" fill="#1F2A30" text-anchor="middle">'
    '<tspan font-weight="bold">Brand Persona + Limbic Map:</tspan> '
    'die Zielgruppe ist der Bezugsrahmen für alle Felder · Folien 4–5</text>')

# Quellenzeile
text(40, 772, "Eigene Darstellung nach Esch (Markensteuerrad) und Häusel (Limbic Map), erstellt mit KI-Unterstützung",
     13, GRAU, anker="start")
text(1360, 772, "Methoden: Desk Research + KI-Tools · Prompts im Backup", 13, GRAU, anker="end")

add("</svg>")
open(sys.argv[1], "w", encoding="utf-8").write("\n".join(teile) + "\n")
