"""Erzeugt die Grafik für Folie 5 (Backup B1): Limbic Map mit Persona Marco und dem Auftritt von HOLY.

Eigene, vereinfachte Darstellung nach Häusel / Gruppe Nymphenburg (Werte: limbic-map.md).
Winkel: 0° = oben, im Uhrzeigersinn. Punkte nach dem Rechenweg der Web-Folie f05
(gewichteter Mittelwert der Systemrichtungen, Verstärkung 2).
"""
import math
import sys

W, H = 1400, 800
CX, CY = 400, 430
R_KARTE = 205          # Rand der Karte (Profil 67/17/17 läge hier)
R_RING_IN, R_RING_AUS = 205, 262
R_FELD_IN, R_FELD_AUS = 268, 284
FONT = "Segoe UI, Calibri, Arial, Helvetica, sans-serif"

TEXT, GRAU, LINIE = "#1F2A30", "#5E6A72", "#B9C3CA"
SYSTEME = {  # Name: (Winkel, Linie, Fläche)
    "Balance": (180, "#2F4553", "#DDE5EC"),
    "Dominanz": (60, "#B3161D", "#F6DCD9"),
    "Stimulanz": (300, "#4B3F7A", "#E4E0F0"),
}
MISCH = [("Abenteuer/Thrill", 0), ("Disziplin/Kontrolle", 120), ("Fantasie/Genuss", 240)]
TYPEN = [("Abenteurer", 0), ("Performer", 51), ("Disziplinierte", 103), ("Traditionalisten", 154),
         ("Harmoniser", 206), ("Offene", 257), ("Hedonisten", 309)]
SEKTOR = 360 / 7
HOLY_GELB, HOLY_DUNKEL = "#FFD007", "#1D1D1B"

PERSONA = {"balance": 30, "dominanz": 30, "stimulanz": 40}
MARKE = {"balance": 30, "dominanz": 20, "stimulanz": 50}
MARKE_2021 = {"balance": 12.5, "dominanz": 35, "stimulanz": 52.5}   # nur Veranschaulichung (H), limbic-map.md 4.3
FELDER_MARKE = [("Spaß und Kreativität", 309), ("Abenteuer und Risiko", 0), ("Harmonie und Fürsorge", 206)]

teile = []
add = teile.append


def pol(winkel, r):
    a = math.radians(winkel)
    return CX + r * math.sin(a), CY - r * math.cos(a)


def text(x, y, inhalt, groesse, farbe=TEXT, gewicht="normal", anker="middle", stil="normal", drehung=None, halo=None):
    """drehung = (Grad, cx, cy): Text um den Punkt (cx, cy) drehen.
    halo = Farbe: Kontur in der Hintergrundfarbe unter der Schrift (unterbricht kreuzende Linien)."""
    dreh = f' transform="rotate({drehung[0]:.1f} {drehung[1]:.1f} {drehung[2]:.1f})"' if drehung else ""
    rand = (f' stroke="{halo}" stroke-width="6" stroke-linejoin="round" paint-order="stroke"' if halo else "")
    add(f'<text x="{x:.1f}" y="{y:.1f}" font-family="{FONT}" font-size="{groesse}" font-weight="{gewicht}" '
        f'font-style="{stil}" fill="{farbe}" text-anchor="{anker}"{dreh}{rand}>{inhalt}</text>')


def ringsektor(a1, a2, r1, r2, fill, stroke="none", breite=0, extra=""):
    """Ringstück von a1 bis a2 (im Uhrzeigersinn) zwischen r1 und r2."""
    gross = 1 if (a2 - a1) % 360 > 180 else 0
    x1, y1 = pol(a1, r2)
    x2, y2 = pol(a2, r2)
    x3, y3 = pol(a2, r1)
    x4, y4 = pol(a1, r1)
    d = (f"M {x1:.1f} {y1:.1f} A {r2} {r2} 0 {gross} 1 {x2:.1f} {y2:.1f} "
         f"L {x3:.1f} {y3:.1f} A {r1} {r1} 0 {gross} 0 {x4:.1f} {y4:.1f} Z")
    add(f'<path d="{d}" fill="{fill}" stroke="{stroke}" stroke-width="{breite}"{extra}/>')


def punkt(profil):
    """Rechenweg wie in praesentation/js/folien/05-limbic-map.js: Verstärkung 2, Kartenrand = 1."""
    x = y = 0.0
    for name, (winkel, _, _) in SYSTEME.items():
        g = profil[name.lower()] / 100
        x += g * math.sin(math.radians(winkel))
        y += g * math.cos(math.radians(winkel))
    r = min(1.0, 2 * math.hypot(x, y))
    winkel = math.degrees(math.atan2(x, y)) % 360
    return winkel, r


add(f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">')
add(f'<rect width="{W}" height="{H}" fill="#FFFFFF"/>')
# Pfeilspitze für die Entwicklung 2021/22 → 2026
add('<defs><marker id="pfeil" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" '
    'orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#5E6A72"/></marker></defs>')

# Kopf
text(40, 52, "Limbic Map: Was treibt Marco an – und was spricht HOLY an?", 26, TEXT, "bold", "start")
text(40, 80, "HOLY trifft Marcos Lust auf Neues, zeigt aber kaum seine Schicht · Urteil: passt teilweise",
     17, GRAU, anker="start")

# Innenfläche: drei Systeme als Sektoren (je 120°, Mitte = Systemrichtung)
for name, (winkel, linie, flaeche) in SYSTEME.items():
    ringsektor(winkel - 60, winkel + 60, 0.01, R_KARTE, flaeche)
for _, winkel in MISCH:
    x, y = pol(winkel, R_KARTE)
    add(f'<line x1="{CX}" y1="{CY}" x2="{x:.1f}" y2="{y:.1f}" stroke="#FFFFFF" stroke-width="2"/>')
# Ring mit den sieben Typen
for name, winkel in TYPEN:
    hervor = name == "Hedonisten"
    ringsektor(winkel - SEKTOR / 2, winkel + SEKTOR / 2, R_RING_IN, R_RING_AUS,
               "#4B3F7A" if hervor else "#F3F5F7", "#FFFFFF", 2)
    x, y = pol(winkel, (R_RING_IN + R_RING_AUS) / 2)
    if hervor:
        # Grafikprüfung 17.10.2026: waagerecht war die weiße Schrift breiter als der schräge Sektor
        # („H“ und „n“ lagen außerhalb) → entlang des Rings gedreht, mittig im Sektor
        drehung = winkel - 360 if winkel > 180 else winkel
        text(x, y + 4.5, name, 13, "#FFFFFF", "bold", drehung=(drehung, x, y))
    else:
        text(x, y + 5, name, 13.5, TEXT)

# Mischbereiche (nach dem Ring, damit nichts abgeschnitten wird)
for name, winkel in MISCH:
    x, y = pol(winkel, 160 if winkel else 172)
    text(x, y + 5, name, 12.5, GRAU, stil="italic")

# Felder, die der HOLY-Auftritt anspricht (Bögen außerhalb des Rings)
for name, winkel in FELDER_MARKE:
    ringsektor(winkel - SEKTOR / 2 + 1, winkel + SEKTOR / 2 - 1, R_FELD_IN, R_FELD_AUS, HOLY_GELB)
    x, y = pol(winkel, R_FELD_AUS + 22)
    anker = "middle" if abs(math.sin(math.radians(winkel))) < 0.3 else ("start" if math.sin(math.radians(winkel)) > 0 else "end")
    text(x, y + 5, name, 14, TEXT, "bold", anker)

# Entwicklung 2021/22 → 2026 (Hypothese, nur Veranschaulichung)
w0, r0 = punkt(MARKE_2021)
w1, r1 = punkt(MARKE)
x0, y0 = pol(w0, r0 * R_KARTE)
x1, y1 = pol(w1, r1 * R_KARTE)
# Gestrichelter Pfeil (Grafikprüfung 17.10.2026: Richtung war ohne Spitze nicht erkennbar); er endet vor dem
# Markenpunkt 2026 (Radius 11 + Rand)
laenge = math.hypot(x1 - x0, y1 - y0)
ex, ey = x1 - (x1 - x0) * 17 / laenge, y1 - (y1 - y0) * 17 / laenge
sx, sy = x0 + (x1 - x0) * 6 / laenge, y0 + (y1 - y0) * 6 / laenge
add(f'<line x1="{sx:.1f}" y1="{sy:.1f}" x2="{ex:.1f}" y2="{ey:.1f}" stroke="{GRAU}" stroke-width="1.6" '
    f'stroke-dasharray="5 4" marker-end="url(#pfeil)"/>')
add(f'<circle cx="{x0:.1f}" cy="{y0:.1f}" r="5" fill="#FFFFFF" stroke="{GRAU}" stroke-width="1.6"/>')
# Beschriftung links unterhalb des Punkts, mit Abstand zur Linie (berührte sie vorher) und zum Typen-Ring
text(x0 - 18, y0 + 18, "HOLY 2021/22", 12, GRAU, "bold", anker="end")
text(x0 - 18, y0 + 33, "(Hypothese)", 12, GRAU, anker="end")

# Namen der Systeme erst nach dem Pfeil, mit Kontur in der Flächenfarbe: Der Pfeil kreuzt „Stimulanz“
# und wird dort unterbrochen statt durch die Schrift zu laufen (Grafikprüfung 17.10.2026)
for name, (winkel, linie, flaeche) in SYSTEME.items():
    x, y = pol(winkel, 128)
    text(x, y + 7, name, 21, linie, "bold", halo=flaeche)

# Punkte
wp, rp = punkt(PERSONA)
xp, yp = pol(wp, rp * R_KARTE)
add(f'<line x1="{xp:.1f}" y1="{yp:.1f}" x2="{x1:.1f}" y2="{y1:.1f}" stroke="{HOLY_DUNKEL}" stroke-width="1.5"/>')
add(f'<circle cx="{x1:.1f}" cy="{y1:.1f}" r="11" fill="{HOLY_GELB}" stroke="{HOLY_DUNKEL}" stroke-width="2.5"/>')
text(x1 + 2, y1 + 32, "HOLY 2026", 15, TEXT, "bold")
text(x1 + 2, y1 + 49, "(Mittelwert, kein Typ)", 12, GRAU)
add(f'<circle cx="{xp:.1f}" cy="{yp:.1f}" r="11" fill="{HOLY_DUNKEL}" stroke="#FFFFFF" stroke-width="2.5"/>')
text(xp + 18, yp - 12, "Marco", 16, TEXT, "bold", "start")

# Rechte Spalte
X0 = 760
text(X0, 150, "Gewichte in % (Schätzung des Teams, keine Messung)", 16, GRAU, "bold", "start")


def balken(y, beschriftung, profil):
    text(X0, y + 25, beschriftung, 17, TEXT, "bold", "start")
    x = X0 + 120
    breite_gesamt = 470
    for name in ("Balance", "Dominanz", "Stimulanz"):
        _, linie, flaeche = SYSTEME[name]
        wert = profil[name.lower()]
        b = breite_gesamt * wert / 100
        add(f'<rect x="{x:.1f}" y="{y}" width="{b:.1f}" height="38" fill="{flaeche}" stroke="#FFFFFF" stroke-width="2"/>')
        text(x + b / 2, y + 25, f"{name[0]} {wert}", 15, linie, "bold")
        x += b


balken(168, "Marco", PERSONA)
balken(216, "HOLY", MARKE)
# Lücke bei Dominanz markieren
xd1 = X0 + 120 + 470 * 0.30
add(f'<rect x="{xd1 + 470 * 0.20:.1f}" y="210" width="{470 * 0.10:.1f}" height="50" fill="none" '
    f'stroke="#B3161D" stroke-width="2.5" stroke-dasharray="6 4"/>')
text(X0 + 120, 284, "Lücke bei Dominanz: −10 Prozentpunkte (Spannen je ±5)", 15, "#B3161D", "bold", "start")


def block(y, titel, zeilen):
    add(f'<rect x="{X0}" y="{y}" width="600" height="{44 + 24 * len(zeilen)}" rx="10" fill="#F3F5F7"/>')
    text(X0 + 18, y + 28, titel, 17, TEXT, "bold", "start")
    for i, zeile in enumerate(zeilen):
        text(X0 + 18, y + 54 + 24 * i, zeile, 15, TEXT, anker="start")


block(316, "Limbic Type Marco: Hedonisten (Hypothese, knapp vor Offene)",
      ["Neugier · Unterhaltung · dazu im Alltag: Durchhalten in der Schicht"])
block(398, "HOLY spricht an: Spaß und Kreativität · Abenteuer und Risiko ·",
      ["Harmonie und Fürsorge (gelbe Bögen). Leistung nur als Produktangabe", "(„~4h“), ohne den Moment, in dem Marco sie braucht."])
block(508, "Folgen für die Kommunikation (Hypothesen für Folien 9–11)",
      ["Bildwelt: echte Schichtmomente, Raptor bleibt Absender",
       "Tonalität: Humor aus der Schicht statt Doppeldeutigkeit",
       "Botschaft: Durchhalten ohne Zucker, Koffein offen nennen"])

# Legende
add(f'<circle cx="{X0 + 10}" cy="672" r="8" fill="{HOLY_DUNKEL}"/>')
text(X0 + 26, 677, "Persona", 14, TEXT, anker="start")
add(f'<circle cx="{X0 + 110}" cy="672" r="8" fill="{HOLY_GELB}" stroke="{HOLY_DUNKEL}" stroke-width="2"/>')
text(X0 + 126, 677, "Marke (Mittelwert)", 14, TEXT, anker="start")
add(f'<rect x="{X0 + 270}" y="665" width="26" height="14" fill="{HOLY_GELB}"/>')
text(X0 + 304, 677, "Felder des HOLY-Auftritts", 14, TEXT, anker="start")
add(f'<rect x="{X0 + 490}" y="665" width="26" height="14" fill="#4B3F7A"/>')
text(X0 + 524, 677, "Typ Marco", 14, TEXT, anker="start")

# Quellenzeile
# Quellenzeile: Wortlaut wie im Folienentwurf 5 („derselbe Wortlaut für Web-Fußzeile, SVG und PNG“),
# auf drei Zeilen umbrochen; danach Hinweis zum Pfeil und KI-Kennzeichnung (Grafikprüfung 17.10.2026)
QUELLE = [
    "Eigene, vereinfachte Darstellung nach Häusel; Gruppe Nymphenburg Consult AG (2020): Die Limbic® Types in best for planning, "
    "S. 3–5; Lage der Typen: nymphenburg.de/limbic-r-types.html (Abruf 17.10.2026).",
    "Gewichte: Schätzung des Teams auf Basis von Statista Consumer Insights 02/2025 (Kategorie Energy Drinks), Podcast "
    "„Digitale Vorreiter:innen“ #281 (08/2024) und Recherche-Dossier.",
    "Limbic®, die Limbic® Map und die Limbic® Types sind urheber- und patentrechtlich geschützte Begriffe und Verfahren der "
    "Gruppe Nymphenburg Consult AG.",
    "Pfeil „HOLY 2021/22 → 2026“ nur zur Veranschaulichung (Hypothese, keine Daten) · Erstellt mit KI-Unterstützung "
    "(Claude Code; KI-Nachweis 52, D10).",
]
for i, zeile in enumerate(QUELLE):
    text(40, 734 + 17 * i, zeile, 12, GRAU, anker="start")

add("</svg>")
open(sys.argv[1], "w", encoding="utf-8").write("\n".join(teile) + "\n")
print(f"Marco: {wp:.0f}° / {rp:.2f}  HOLY: {w1:.0f}° / {r1:.2f}  HOLY 2021/22: {w0:.0f}° / {r0:.2f}")
