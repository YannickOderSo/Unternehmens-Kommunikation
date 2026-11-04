# Mittelt die Zwischenbilder NNNN_k.jpg einer Bildfolge zu NNNN.jpg (Bewegungsunschärfe, linearer Mittelwert in sRGB-Werten
# nach Umrechnung in lineares Licht, damit helle Kanten nicht vergrauen). Aufruf: python3 unschaerfe.py <ordner>
# Werbespot HOLY (studentisches Konzept, HS Kaiserslautern) · KI-gestützt erstellt · Prüfung durch die Gruppe offen
import glob, os, re, sys
from collections import defaultdict
import numpy as np
from PIL import Image

ordner = sys.argv[1]
gruppen = defaultdict(list)
for f in glob.glob(os.path.join(ordner, '*_*.jpg')):
    m = re.match(r'(\d{4})_(\d+)\.jpg$', os.path.basename(f))
    if m: gruppen[m.group(1)].append(f)
for name, dateien in sorted(gruppen.items()):
    lin = sum((np.asarray(Image.open(f).convert('RGB'), np.float32) / 255) ** 2.2 for f in dateien) / len(dateien)
    Image.fromarray((np.clip(lin ** (1 / 2.2), 0, 1) * 255 + .5).astype(np.uint8)).save(os.path.join(ordner, name + '.jpg'), quality=96)
    for f in dateien: os.remove(f)
print('gemittelt:', len(gruppen), 'Bilder')
