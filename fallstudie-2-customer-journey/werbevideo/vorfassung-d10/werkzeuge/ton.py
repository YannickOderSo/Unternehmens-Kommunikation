# Tonmischung des Werbespots (deterministisch; die Nachhall-Fläche der Endkarte nutzt Rauschen mit festem Startwert).
# Eingaben (alle in ../intern/, mit ElevenLabs erzeugt, siehe ../README.md):
#   stimme/durchlauf1.mp3 + stimme/saetze.json (ein Aufruf, Zeitstempel je Zeichen → Sätze und Wörter)
#   musik/musik1.mp3 (ElevenLabs Musik, 30 s, instrumental, 120 BPM)
#   sfx/*.mp3 (ElevenLabs Soundeffekte)
# Ausgaben: ../intern/ton/stimme-gelegt.wav, ../intern/ton/mischung.wav, ../intern/ton/untertitel.json
# Danach normalisiert bau.sh mit ffmpeg loudnorm (zwei Durchgänge) auf -14 LUFS / -1,5 dBTP.
# Werbespot HOLY (studentisches Konzept, HS Kaiserslautern) · KI-gestützt erstellt · Prüfung durch die Gruppe offen
import json, os, subprocess, re
import numpy as np

HIER = os.path.dirname(os.path.abspath(__file__))
IN = os.path.join(HIER, '..', 'intern')
AUS = os.path.join(IN, 'ton'); os.makedirs(AUS, exist_ok=True)
SR = 48000
DAUER = 26.8
N = int(DAUER * SR)

def lade(pfad, kanaele=2):
    roh = subprocess.run(['ffmpeg', '-v', 'error', '-i', pfad, '-ac', str(kanaele), '-ar', str(SR), '-f', 'f32le', '-'],
                         capture_output=True, check=True).stdout
    return np.frombuffer(roh, np.float32).reshape(-1, kanaele).copy()

def db(x): return 10 ** (x / 20)

def lufs(x):
    """Integrierte Lautheit über ffmpeg ebur128 (Messung, nicht Schätzung)."""
    p = os.path.join(AUS, '_mess.wav'); schreibe(p, x)
    r = subprocess.run(['ffmpeg', '-hide_banner', '-nostats', '-i', p, '-af', 'ebur128', '-f', 'null', '-'], capture_output=True, text=True).stderr
    return float(re.findall(r'I:\s+(-?[\d.]+) LUFS', r)[-1])

def schreibe(p, x):
    x = np.clip(x, -1, 1)
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-f', 'f32le', '-ar', str(SR), '-ac', str(x.shape[1]), '-i', '-', '-c:a', 'pcm_s24le', p],
                   input=x.astype(np.float32).tobytes(), check=True)

def lege(spur, x, t, gain=1.0):
    i = int(round(t * SR)); j = min(N, i + len(x))
    if j > i: spur[i:j] += x[:j - i] * gain

def rampe(x, ein=0.008, aus=0.012):
    x = x.copy(); a = int(ein * SR); b = int(aus * SR)
    if a: x[:a] *= np.linspace(0, 1, a)[:, None]
    if b: x[-b:] *= np.linspace(1, 0, b)[:, None]
    return x

# ---------- Stimme: Sätze aus dem einen Aufruf schneiden und an die Zeitpunkte des Drehbuchs legen ----------
saetze = json.load(open(os.path.join(IN, 'stimme', 'saetze.json')))
# Nacharbeit nach der Abnahme: ab „Erst nachlesen“ alles 1,0 s früher (Musik dort um zwei Schläge gekürzt, s. u.)
ZIEL = [0.35, 2.30, 3.10, 4.60, 7.62, 10.05, 12.62, 15.05, 17.10, 20.40, 21.15, 22.50, 23.62]
# Text im Bild/Untertitel (Aussprache-Schreibung „Holi“ nur im Sprechertext)
ANZEIGE = lambda s: s.replace('Holi', 'HOLY')
roh = lade(os.path.join(IN, 'stimme', 'durchlauf1.mp3'), 1)
stimme = np.zeros((N, 1), np.float32)
cues = []
for k, s in enumerate(saetze):
    vor = saetze[k - 1]['end'] if k else 0.0
    nach = saetze[k + 1]['start'] if k + 1 < len(saetze) else len(roh) / SR
    a = max(s['start'] - 0.05, (vor + s['start']) / 2)
    b = min(s['end'] + 0.08, (s['end'] + nach) / 2) if k + 1 < len(saetze) else len(roh) / SR
    stueck = rampe(roh[int(a * SR):int(b * SR)])
    versatz = s['start'] - a
    lege(stimme, stueck, ZIEL[k] - versatz)
    cues.append({'start': round(ZIEL[k], 3), 'ende': round(ZIEL[k] + (s['end'] - s['start']), 3), 'text': ANZEIGE(s['text']),
                 'woerter': [[ANZEIGE(w), round(ZIEL[k] + w0, 3), round(ZIEL[k] + w1, 3)] for w, w0, w1 in s['woerter']]})
json.dump(cues, open(os.path.join(AUS, 'untertitel.json'), 'w'), ensure_ascii=False, indent=1)
stimme *= db(-16 - lufs(stimme))          # Stimme auf -16 LUFS (vor der Gesamtnormalisierung)
schreibe(os.path.join(AUS, 'stimme-gelegt.wav'), stimme)

# ---------- Musik ----------
# Schnitt im Takt: 15,00–16,00 s der Musik (zwei Schläge mit dem Break) fallen weg, damit unter dem Wechsel in die
# Handy-Strecke kein Loch entsteht; der Schlag bei 16,025 s folgt direkt auf 14,525/15,0 s (beide Schnittstellen 25 ms vor
# einem Schlag, 10 ms Überblendung). Zwei Schläge = halber Takt, Klatscher bleiben auf 2 und 4. Schlussakzent jetzt 22,23 s.
roh_m = lade(os.path.join(IN, 'musik', 'musik1.mp3'))
c0, c1, xf = int(15.0 * SR), int(16.0 * SR), int(0.01 * SR)
a_teil, b_teil = roh_m[:c0].copy(), roh_m[c1:].copy()
rampe_x = np.linspace(0, 1, xf)[:, None]
b_teil[:xf] = b_teil[:xf] * rampe_x + roh_m[c0:c0 + xf] * (1 - rampe_x)
musik = np.vstack([a_teil, b_teil])[:N]
musik = np.vstack([musik, np.zeros((N - len(musik), 2), np.float32)])
musik *= db(-16 - lufs(musik))
# Gag-Pause: Musik setzt bei 2,25 s aus und kommt bei 3,00 s auf den Schlag zurück
g = np.ones(N, np.float32)
i0, i1, f = int(2.25 * SR), int(3.0 * SR), int(0.03 * SR)
g[i0:i0 + f] = np.linspace(1, 0, f); g[i0 + f:i1] = 0
# Grundpegel 8 dB unter der Stimme, unter der Stimme weitere 4 dB (Ducking, 60 ms Anstieg / 150 ms Rückkehr,
# damit die Musik in Sprechpausen sofort aufgeht) – Nacharbeit: vorher 13 + 5 dB, Beat auf dem Handy kaum hörbar
env = np.abs(stimme[:, 0])
blk = int(0.02 * SR)
aktiv = np.repeat([env[i:i + blk].max() > 0.02 for i in range(0, N, blk)], blk)[:N].astype(np.float32)
glatt = np.zeros(N, np.float32); v = 0.0
auf, ab = 1 - np.exp(-1 / (0.06 * SR / blk)), 1 - np.exp(-1 / (0.15 * SR / blk))
for i in range(0, N, blk):
    z = aktiv[i]; v += (z - v) * (auf if z > v else ab); glatt[i:i + blk] = v
musik_gain = db(-8) * (1 - glatt * (1 - db(-4)))
musik = musik * (g * musik_gain)[:, None]
# Endkarte: Nachhall des Schlussschlags (22,10–22,60 s der gekürzten Musik, mit künstlichem Raum gefaltet, Tiefpass) als
# leise Klangfläche unter dem Claim; klingt bis 26,7 s aus – statt Stille nach dem Schlussakzent (Nacharbeit)
rng = np.random.default_rng(20261104)                      # fester Startwert: jeder Bau ergibt dieselbe Fläche
L = int(4.5 * SR); tt = np.arange(L) / SR
ir = rng.standard_normal((L, 2)).astype(np.float32) * np.exp(-tt / 1.3)[:, None]
quelle = musik[int(22.10 * SR):int(22.60 * SR)].copy()
from numpy.fft import rfft, irfft
nfft = 1 << int(np.ceil(np.log2(len(quelle) + L)))
hall = np.stack([irfft(rfft(quelle[:, k], nfft) * rfft(ir[:, k], nfft), nfft)[:len(quelle) + L] for k in range(2)], 1).astype(np.float32)
# Tiefpass 1,2 kHz (ffmpeg lowpass, zweipolig), damit die Fläche weich unter Stimme und Claim liegt
_hp = os.path.join(AUS, '_hall.wav'); schreibe(_hp, hall / max(1e-6, np.abs(hall).max()))
hall = subprocess.run(['ffmpeg', '-v', 'error', '-i', _hp, '-af', 'lowpass=f=1200:p=2,lowpass=f=1200:p=2', '-f', 'f32le', '-ac', '2', '-ar', str(SR), '-'],
                      capture_output=True, check=True).stdout
hall = np.frombuffer(hall, np.float32).reshape(-1, 2).copy(); os.remove(_hp)
flaeche = np.zeros((N, 2), np.float32); lege(flaeche, hall, 22.10)
f_ein, f_aus0, f_aus1 = int(22.10 * SR), int(25.4 * SR), int(26.7 * SR)
flaeche[f_ein:f_ein + int(0.35 * SR)] *= np.linspace(0, 1, int(0.35 * SR))[:, None]
flaeche[f_aus0:f_aus1] *= np.linspace(1, 0, f_aus1 - f_aus0)[:, None]; flaeche[f_aus1:] = 0
flaeche *= db(-30 - lufs(flaeche[f_ein:f_aus0]))           # Fläche auf -30 LUFS (14 dB unter der Stimme)
# Musik selbst: nach dem Schlussakzent bis 26,7 s auf null
e0, e1 = int(25.6 * SR), int(26.7 * SR)
musik[e0:e1] *= np.linspace(1, 0, e1 - e0)[:, None]; musik[e1:] = 0
musik = musik + flaeche

# ---------- Geräusche ----------
sfx = {n: lade(os.path.join(IN, 'sfx', n + '.mp3')) for n in ['plopp', 'wisch', 'whoosh', 'tick', 'tipp', 'muenze', 'eis', 'karte', 'schlag', 'riser']}
for n in sfx: sfx[n] = sfx[n] * db(-20 - max(-60, lufs(np.vstack([sfx[n], np.zeros((SR, 2), np.float32)]))))
# Riser erst nach „Und der Squad?“: nur die letzten 1,1 s (Anlauf in den Schlussakzent), damit er das Wort nicht überdeckt
sfx['riser_kurz'] = sfx['riser'][int(0.4 * SR):]
geraeusch = np.zeros((N, 2), np.float32)
PLAN = [  # (Name, Zeit s, Pegel dB relativ) – ab 14,9 s Zeiten der Nacharbeit (1,0 s früher, Handy-Strecke neu)
    ('plopp', 0.02, 0), ('wisch', 1.70, -2), ('plopp', 2.28, -4), ('whoosh', 2.84, -6), ('schlag', 3.0, -3),
    ('whoosh', 4.30, -4), ('plopp', 4.78, -6), ('whoosh', 7.30, -4),
    *[('tick', 7.55 + i * 0.1, -12) for i in range(7)], ('whoosh', 7.62, -8),
    ('schlag', 10.0, -6), ('eis', 10.12, -9), ('schlag', 12.5, -3), ('karte', 12.62, -6), ('whoosh', 14.88, -3),
    ('whoosh', 15.42, -12),                                   # Wischfahrt durch die Startseite
    ('tipp', 16.76, -2), ('karte', 16.72, -8), ('plopp', 17.30, -9), ('wisch', 17.75, -8), ('tipp', 19.48, -2),
    ('whoosh', 19.58, -9), ('whoosh', 20.08, -4),
    ('tipp', 21.03, -2), ('muenze', 21.55, -6), ('riser_kurz', 21.13, -16), ('schlag', 23.21 - 1.0, -2), ('plopp', 25.15, -8),
]
for n, t, d in PLAN: lege(geraeusch, rampe(sfx[n], 0.002, 0.03), t, db(d))

misch = stimme.repeat(2, 1) + musik + geraeusch
schreibe(os.path.join(AUS, 'mischung.wav'), misch)
print('Lautheit Stimme', round(lufs(stimme), 1), '· Musik', round(lufs(musik), 1), '· Geräusche', round(lufs(geraeusch), 1), '· Mischung', round(lufs(misch), 1))
os.remove(os.path.join(AUS, '_mess.wav'))
