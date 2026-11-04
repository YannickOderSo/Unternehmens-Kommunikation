# Prüft den fertigen Werbespot „Mein Moment.“: Format (ffprobe), Lautheit und True Peak (ebur128), Standbilder
# (freezedetect), Lautheit des Drops gegen die Rückblenden, Pflichtzeile in jedem Bild (Bildbereich der Pille gegen Bild 0), Dateigröße, Volltextsuche nach
# Schlüsseln, Klonstimmen-ID und Modellkennungen in den versionierten Dateien von werbevideo/ (ohne intern/).
# Aufruf: python3 pruefen.py   · Werbespot HOLY (studentisches Konzept, HS Kaiserslautern) · KI-gestützt erstellt
import json, os, re, subprocess
import numpy as np

HIER = os.path.dirname(os.path.abspath(__file__))
Z = os.path.join(HIER, '..')
MP4 = os.path.join(Z, 'holy-werbespot.mp4')
fehler = []

info = json.loads(subprocess.run(['ffprobe', '-v', 'error', '-show_streams', '-show_format', '-of', 'json', MP4], capture_output=True, text=True).stdout)
v = next(s for s in info['streams'] if s['codec_type'] == 'video'); a = next(s for s in info['streams'] if s['codec_type'] == 'audio')
print('Video:', v['codec_name'], v.get('profile'), v['pix_fmt'], f"{v['width']}×{v['height']}", v['r_frame_rate'], v.get('nb_frames'), 'Bilder')
print('Ton:', a['codec_name'], a['sample_rate'], 'Hz', a['channels'], 'Kanäle · Dauer', info['format']['duration'], 's · Größe',
      round(int(info['format']['size']) / 1e6, 2), 'MB')
if not (v['codec_name'] == 'h264' and v.get('profile') == 'High' and v['pix_fmt'] == 'yuv420p' and v['width'] == 1080 and v['height'] == 1920 and v['r_frame_rate'] == '30/1'): fehler.append('Videoformat')
if not (a['codec_name'] == 'aac' and a['sample_rate'] == '48000' and a['channels'] == 2): fehler.append('Tonformat')
if int(info['format']['size']) > 15e6: fehler.append('größer als 15 MB')
if not 20 <= float(info['format']['duration']) <= 30: fehler.append('Dauer')
BILDER = round(float(info['format']['duration']) * 30)
with open(MP4, 'rb') as f: kopf = f.read(200000)
mo, md = kopf.find(b'moov'), kopf.find(b'mdat')
if mo < 0 or (0 <= md < mo): fehler.append('faststart')

r = subprocess.run(['ffmpeg', '-hide_banner', '-nostats', '-i', MP4, '-af', 'ebur128=peak=true', '-f', 'null', '-'], capture_output=True, text=True).stderr
I = float(re.findall(r'I:\s+(-?[\d.]+) LUFS', r)[-1]); TP = float(re.findall(r'Peak:\s+(-?[\d.]+) dBFS', r)[-1])
print('Lautheit:', I, 'LUFS · True Peak:', TP, 'dBTP')
if abs(I + 14) > 1 or TP > -1: fehler.append('Lautheit/True Peak')
# Drop gegen Rückblenden: Momentan-Lautheit (400 ms) im Median, Ziel mindestens +3 LU
zeilen = re.findall(r't:\s*([\d.]+)\s+TARGET.*?M:\s*(-?[\d.]+|-inf)', r)
T = np.array([float(a) for a, _ in zeilen]); Mo = np.array([float(b) if b != '-inf' else -99 for _, b in zeilen])
med = lambda a, b: float(np.median(Mo[(T >= a) & (T < b)]))
drop, rueck = med(12.4, 15.0), med(3.4, 8.0)
print('Momentan-Lautheit (Median): Drop 12–15 s', round(drop, 1), 'LUFS · Rückblenden 3–8 s', round(rueck, 1), 'LUFS · Abstand', round(drop - rueck, 1), 'LU')
if drop - rueck < 3: fehler.append('Drop nicht ≥ 3 LU lauter als die Rückblenden')

r = subprocess.run(['ffmpeg', '-hide_banner', '-nostats', '-i', MP4, '-vf', 'freezedetect=n=0.0005:d=0.3', '-map', '0:v', '-f', 'null', '-'], capture_output=True, text=True).stderr
st = re.findall(r'freeze_start: ([\d.]+)', r); print('Standbilder ≥ 0,3 s:', st or 'keine')
if st: fehler.append('Standbild')

# Pflichtzeile: Bereich der Pille (x 20–1060, y 112–210) in jedem Bild mit Bild 0 vergleichen
roh = subprocess.run(['ffmpeg', '-v', 'error', '-i', MP4, '-vf', 'crop=1040:98:20:112', '-f', 'rawvideo', '-pix_fmt', 'gray', '-'], capture_output=True).stdout
bilder = np.frombuffer(roh, np.uint8).reshape(-1, 98, 1040).astype(np.float32)
abw = np.abs(bilder - bilder[0]).mean(axis=(1, 2))
print('Pflichtzeile: Bilder', len(bilder), '· größte mittlere Abweichung zum Bild 0:', round(float(abw.max()), 2), 'Graustufen (Bild', int(abw.argmax()), ')')
if abs(len(bilder) - BILDER) > 1 or abw.max() > 6: fehler.append('Pflichtzeile')

# Volltextsuche in den versionierten Dateien (ohne intern/)
muster = [r'o3F1PJYpP2skP4ejJ6um', r'xi-api-key', r'sk_[0-9a-f]{20,}', r'eleven_[a-z0-9_]+', r'music_v1', r'scribe_v\d', r'claude', r'opus', r'sonnet', r'gpt-?\d']
treffer = []
for wurzel, ordner, dateien in os.walk(Z):
    if 'intern' in os.path.relpath(wurzel, Z).split(os.sep): continue
    for d in dateien:
        if d.endswith(('.md', '.py', '.cjs', '.sh', '.html', '.vtt', '.js', '.json')):
            p = os.path.join(wurzel, d)
            if os.path.abspath(p) == os.path.abspath(__file__): continue
            t = open(p, encoding='utf-8', errors='ignore').read()
            for m in muster:
                if re.search(m, t, re.I): treffer.append(f'{os.path.relpath(p, Z)}: {m}')
print('Volltextsuche:', treffer or 'keine Treffer')
if treffer: fehler.append('Volltextsuche')
print('ERGEBNIS:', 'alles in Ordnung' if not fehler else 'FEHLER: ' + ', '.join(fehler))
