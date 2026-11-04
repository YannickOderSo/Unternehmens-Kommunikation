# Bereitet die Bilder des Werbespots „Mein Moment.“ vor (Workflow D11): kopiert die verwendeten HOLY-Rohdateien
# (HOLY Softdrinks GmbH, Abruf 03.11.2026, Herkunft je Datei in praesentation/intern/roh/produkt/<ordner>/manifest.json)
# unverändert nach ../intern/d11/bilder/. Kein Bild wird hier bearbeitet oder vergrößert. ../intern/ ist per .gitignore ausgeschlossen.
# Aufruf: python3 vorbereiten.py   (danach node aufnahme-handy.cjs für die Bildschirmaufnahme der Konzept-Webseite)
# Werbespot HOLY (studentisches Konzept, HS Kaiserslautern) · KI-gestützt erstellt · Prüfung durch die Gruppe offen
import os, shutil
from PIL import Image

HIER = os.path.dirname(os.path.abspath(__file__))
ROH = os.path.join(HIER, '..', '..', 'praesentation', 'intern', 'roh', 'produkt')
WEB = os.path.join(HIER, '..', '..', 'konzept-website')
ZIEL = os.path.join(HIER, '..', 'intern', 'd11', 'bilder')
os.makedirs(ZIEL, exist_ok=True)
# Nicht mehr verwendet (Nacharbeit): lifestyle/person-haelt-probierboxen-shaker.jpg (Motiv der Milchshake-Ankündigung, viele Probierboxen)
alt = os.path.join(ZIEL, 'person-haelt-probierboxen-shaker.jpg')
if os.path.exists(alt): os.remove(alt)

ROHDATEIEN = [
    'packshots/raptor-sachet-1-portion.png',              # Hook: Sachet reißt, Hintergrund des Freeze; Drop-Schnitt 4
    'lifestyle/neueinsteiger-energy-sachet-hochformat.png',  # Auftauen: Pulver fällt in den Shaker; Drop-Schnitt 2
    'packshots/energy-starter-set.png',                   # Donnerstag: Paket da
    'lifestyle/zubereitung-2-eis-gelb.jpg',               # KLONK; Drop-Schnitt 3 (Eis-Glanz)
    'squad-rewards/level-2-praemie-raptor-kid-shaker.jpg',     # Countdown „3“
    'squad-rewards/level-3-praemie-teenage-raptor-shaker.jpg', # Countdown „2“
    'squad-rewards/level-4-praemie-og-raptor-shaker.jpg',      # Countdown „1“
    'packshots/energy-shaker-raptor.png',                 # KLACK; POV „Shaker hebt sich zur Kamera“
    'lifestyle/zubereitung-3-schuetteln-gelb.jpg',        # Drop-Schnitte 1 und 5: Schütteln
    'lifestyle/raptor-dose-shaker-fliesen-pink.jpg',      # Genuss („Mmh!“)
    'lifestyle/frau-trinkt-shaker-pink.png',              # Squad (HOLY-Werbemodel, ohne Sprechblase)
    'squad-rewards/level-1-raptor-egg.png',               # Squad: Abzeichen, Push-Symbol
    'squad-rewards/level-4-og-raptor.png',                # Pixel-Raptor (Sticker, reagierende Figur; Drop-Schnitt 6)
    'packshots/raptor-50er-dose-mit-gratis-shaker.png',   # Endkarte
]
for f in ROHDATEIEN:
    shutil.copy2(os.path.join(ROH, f), os.path.join(ZIEL, os.path.basename(f)))

# Konzept-Webseite: Wortmarke (Einverständnis KI-Nachweis FS2 Nr. 12) und Shaker-Bild aus dem Register (web-danke-shaker-50)
shutil.copy2(os.path.join(WEB, 'bilder', 'holy-logo-wortmarke.png'), ZIEL)
shutil.copy2(os.path.join(WEB, 'fremdbilder', 'web-danke-shaker-raptor.webp'), ZIEL)

for f in sorted(os.listdir(ZIEL)):
    try:
        print(f, Image.open(os.path.join(ZIEL, f)).size)
    except Exception:
        print(f)
