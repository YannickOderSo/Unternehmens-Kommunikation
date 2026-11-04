# Tonmischung des Werbespots „Mein Moment.“ (Workflow D11 mit Nacharbeit nach der Abnahme; deterministisch, Rauschen mit
# festem Startwert). Eingaben (in ../intern/d11/, einmal mit ElevenLabs erzeugt, siehe ../README.md):
#   stimme/take1.mp3 + take1-zeit.json  (Haupttake, ein Aufruf der Sprachausgabe mit Zeitstempeln je Zeichen)
#   stimme/take2.mp3, take3.mp3 (+ -zeit.json)  (Nacharbeit: „Feierabend!“ freudig statt Seufzer, „Mmh!“ als Genuss-Laut,
#                                                 „Samstag: Squad!“ statt „Heute Abend: Squad.“)
#   musik/musik1.mp3                     (ElevenLabs Musik, instrumental, 120 BPM, Aufbau laut musik/anfrage.json)
#   sfx/*.mp3                            (ElevenLabs Soundeffekte, sfx/liste.json; einige aus der Vorfassung D10)
# Ausgaben: ../intern/d11/ton/mischung.wav (48 kHz Stereo, vor der Lautheitsnormalisierung), ton/stimme-gelegt.wav,
#   ton/musik-gelegt.wav, ton/untertitel.json (Zeiten der gesprochenen Sätze im Spot)
# Musik-Raster (gemessen: Schläge auf ganzen und halben Sekunden; Groove M 1–8,5, Break M 8,5–9, Groove M 9–15,
# Pause ohne Bass M 15,5–17, Drop M 17–21, Schlussschlag M 21). Zuordnung (M = Musikzeit, G = Spotzeit):
#   Hook G 0–1,5 = M 1–2,5 · Tape-Stop · Rückblenden G 2,8–8 = M 9,8–15 als dünnes „Radio“ (Hoch- und Tiefpass, leise)
#   plus Hi-Hats (Hochpass) im vollen Takt · Aufbau G 8–12 = M 13–17 (Filter öffnet sich, Bass erst ab 12,0) ·
#   Stille 11,55–11,98 · Drop G 12–15 = M 17–20 + eigener Sub-Bass-Schlag · Genuss G 15–17 = M 18–20 (erst dumpf) ·
#   Squad G 17–21 = M 17–21 (zweiter Einsatz, Schlussschlag M 21 fällt auf den Schnitt zur Endkarte) ·
#   Endkarte: weicher Groove, Sound-Logo (zwei TSCHK, 8-Bit-Pling auf das Zwinkern), harter Schlussschlag bei G 24,0.
# Werbespot HOLY (studentisches Konzept, HS Kaiserslautern) · KI-gestützt erstellt · Prüfung durch die Gruppe offen
import json, os, re, subprocess
import numpy as np

HIER = os.path.dirname(os.path.abspath(__file__))
IN = os.path.join(HIER, '..', 'intern', 'd11')
AUS = os.path.join(IN, 'ton'); os.makedirs(AUS, exist_ok=True)
SR = 48000
DAUER = 24.5
N = int(DAUER * SR)


def ff(args, eingabe=None):
    return subprocess.run(['ffmpeg', '-v', 'error'] + args, input=eingabe, capture_output=True, check=True).stdout


def lade(pfad, k=2):
    return np.frombuffer(ff(['-i', pfad, '-ac', str(k), '-ar', str(SR), '-f', 'f32le', '-']), np.float32).reshape(-1, k).copy()


def filt(x, kette):
    """Wendet eine ffmpeg-Filterkette auf ein Signal an (Stereo oder Mono bleibt erhalten)."""
    k = x.shape[1]
    roh = ff(['-f', 'f32le', '-ar', str(SR), '-ac', str(k), '-i', '-', '-af', kette, '-f', 'f32le', '-ar', str(SR), '-ac', str(k), '-'],
             x.astype(np.float32).tobytes())
    return np.frombuffer(roh, np.float32).reshape(-1, k).copy()


def schreibe(p, x):
    ff(['-y', '-f', 'f32le', '-ar', str(SR), '-ac', str(x.shape[1]), '-i', '-', '-c:a', 'pcm_s24le', p], np.clip(x, -1, 1).astype(np.float32).tobytes())


def lufs(x):
    p = os.path.join(AUS, '_mess.wav'); schreibe(p, x)
    r = subprocess.run(['ffmpeg', '-hide_banner', '-nostats', '-i', p, '-af', 'ebur128', '-f', 'null', '-'], capture_output=True, text=True).stderr
    os.remove(p)
    return float(re.findall(r'I:\s+(-?[\d.]+) LUFS', r)[-1])


db = lambda d: 10 ** (d / 20)


def rampe(x, ein=0.006, aus=0.02):
    x = x.copy(); a = min(len(x), int(ein * SR)); b = min(len(x), int(aus * SR))
    if a: x[:a] *= np.linspace(0, 1, a)[:, None]
    if b: x[-b:] *= np.linspace(1, 0, b)[:, None]
    return x


def lege(spur, x, t, gain=1.0):
    i = int(round(t * SR)); a = max(0, -i); i = max(0, i); j = min(N, i + len(x) - a)
    if j > i: spur[i:j] += x[a:a + j - i] * gain


def huelle(punkte):
    """Stückweise lineare Hüllkurve aus (Zeit, Wert)-Paaren über die ganze Spotlänge."""
    t = np.arange(N) / SR; ts, vs = zip(*punkte)
    return np.interp(t, ts, vs).astype(np.float32)


# ---------------- Stimme ----------------
TAKES = {n: lade(os.path.join(IN, 'stimme', f'take{n}.mp3'), 1) for n in (1, 2, 3)}
# (Name, Take, von, bis im Take, Wortbeginn im Take, Ziel-Wortbeginn im Spot, Tempo, Pegel dB, Untertitel)
# Rückblenden-Sätze 1,5 dB leiser: der Drop soll deutlich lauter wirken (Musik liegt dort trotzdem ≥ 18 dB unter der Stimme)
SAETZE = [
    ('feierabend', 3, 0.10, 0.98, 0.14, 0.55, 1.00, -2, 'Feierabend!'),
    ('moment', 1, 2.05, 2.72, 2.31, 1.70, 1.00, 0, 'Moment.'),
    ('zurueck', 1, 2.70, 3.93, 2.73, 2.18, 1.08, 0, 'Kurz zurückspulen.'),
    ('montag', 1, 3.90, 5.75, 3.94, 3.04, 1.15, -1.5, 'Montag: Code war schon drin.'),
    ('dienstag', 1, 5.74, 7.76, 5.76, 4.64, 1.12, -1.5, 'Dienstag: erst mal nachgelesen.'),
    ('donnerstag', 1, 7.74, 9.42, 7.77, 6.60, 1.06, -1.5, 'Donnerstag: Paket da.'),
    ('jetzt', 1, 9.55, 10.40, 9.73, 8.30, 1.00, 0, 'Und jetzt …'),
    ('drei', 1, 10.76, 11.20, 10.80, 10.03, 1.00, 0, 'Drei.'),
    ('zwei', 1, 11.72, 12.18, 11.76, 10.53, 1.00, 0, 'Zwei.'),
    ('eins', 1, 12.68, 13.20, 12.72, 11.03, 1.00, 0, 'Eins.'),
    ('mmh', 2, 1.52, 3.50, 1.59, 15.55, 1.00, 0, 'Mmh! Raspberry Raptor.'),
    ('squad', 3, 3.86, 5.80, 3.89, 17.45, 1.00, -1, 'Samstag: Squad!'),
    ('holy', 1, 17.21, 18.80, 17.26, 21.20, 1.00, 0, 'HOLY. Mein Moment.'),
    ('deiner', 1, 18.86, 19.80, 19.11, 22.85, 1.00, 0, 'Und deiner?'),
]
stimme = np.zeros((N, 1), np.float32)
cues = []
for name, take, a, b, w0, ziel, tempo, pegel, text in SAETZE:
    stueck = TAKES[take][int(a * SR):int(b * SR)]
    if tempo != 1.0:
        stueck = filt(stueck, f'atempo={tempo}')
    stueck = rampe(stueck, 0.01, 0.04) * db(pegel)
    start = ziel - (w0 - a) / tempo
    lege(stimme, stueck, start)
    cues.append({'name': name, 'start': round(ziel, 3), 'ende': round(start + len(stueck) / SR - 0.03, 3), 'text': text})
stimme = filt(stimme, 'highpass=f=85,acompressor=threshold=-20dB:ratio=2.5:attack=8:release=120:makeup=2,equalizer=f=3500:t=q:w=1.2:g=2')
stimme *= db(-16 - lufs(stimme))
schreibe(os.path.join(AUS, 'stimme-gelegt.wav'), stimme)
json.dump(cues, open(os.path.join(AUS, 'untertitel.json'), 'w'), ensure_ascii=False, indent=1)

# ---------------- Musik ----------------
M = lade(os.path.join(IN, 'musik', 'musik1.mp3'))
M = np.vstack([M, np.zeros((SR * 8, 2), np.float32)])
M_radio = filt(M, 'highpass=f=180,highpass=f=180,lowpass=f=3200')           # dünn wie aus dem Handy, ohne Bass
M_hats = filt(M, 'highpass=f=6500,highpass=f=6500')                         # Hi-Hats/Shaker: Takt läuft weiter
M_ohne_bass = filt(M, 'highpass=f=160,highpass=f=160')
musik = np.zeros((N, 2), np.float32)


def teil(quelle, g0, g1, m0, gain=1.0, xf=0.006):
    s = quelle[int(m0 * SR):int(m0 * SR) + int((g1 - g0) * SR)].copy()
    lege(musik, rampe(s, xf, xf), g0, gain)


teil(M, 0.0, 1.5, 1.0, xf=0.002)                                    # Hook ab Bild 0
# Tape-Stop 1,5–1,85 s: Abspielrate fällt linear auf 0 (Lesekopf integriert die Rate)
L = int(0.35 * SR); tau = np.arange(L) / SR
pos = 2.5 * SR + np.cumsum(1 - tau / 0.35)
idx = np.clip(pos.astype(int), 0, len(M) - 2); fr = (pos - idx)[:, None]
stop = (M[idx] * (1 - fr) + M[idx + 1] * fr) * np.linspace(1, 0, L)[:, None] ** 0.7
lege(musik, stop.astype(np.float32), 1.5)
# Rückblenden G 2,8–8,0 (M 9,8–15): „Radio“-Bett leise, Hi-Hats im Takt darüber
for quelle, gain in ((M_radio, db(-15)), (M_hats, db(-4))):
    bett = quelle[int(9.8 * SR):int(15.0 * SR)].copy()
    bett[:int(0.2 * SR)] *= np.linspace(0, 1, int(0.2 * SR))[:, None]
    lege(musik, bett, 2.8, gain)
# Aufbau G 8–12 (M 13–17): vom Radio zur vollen Musik ohne Bass, Filter öffnet sich bis 10,5 s; Bass erst im Drop
rad = M_radio[int(13.0 * SR):int(17.0 * SR)]; ob = M_ohne_bass[int(13.0 * SR):int(17.0 * SR)]
x = np.clip((np.arange(len(rad)) / SR) / 2.5, 0, 1)[:, None] ** 1.5
auf = rad * (1 - x) * db(-13) + ob * x * db(-7 + 3 * x)
lege(musik, rampe(auf.astype(np.float32), 0.01, 0.004), 8.0)
teil(M, 12.0, 15.0, 17.0, xf=0.003)                                 # Drop
teil(M, 15.0, 17.0, 18.0, xf=0.003)                                 # Genuss (dumpf beginnend, siehe unten)
teil(M, 17.0, 21.0, 17.0, xf=0.003)                                 # Squad: zweiter Einsatz
teil(M, 21.0, 21.5, 21.0, xf=0.003)                                 # Schlussschlag auf den Schnitt zur Endkarte
# Endkarte: Hook-Groove weich (Hoch-/Tiefpass, leiser) bis zum Sound-Logo
aus_bett = filt(M[int(3.5 * SR):int(6.0 * SR)], 'highpass=f=120,lowpass=f=3500')
aus_bett[:int(0.2 * SR)] *= np.linspace(0, 1, int(0.2 * SR))[:, None]
aus_bett[-int(0.12 * SR):] *= np.linspace(1, 0, int(0.12 * SR))[:, None]
lege(musik, aus_bett, 21.05, db(-6))
teil(M, 24.0, 24.5, 21.0, xf=0.002)                                 # harter Schlussschlag (Sound-Logo)
# Stille vor dem Drop (11,55–11,98) und Atempause unter dem POV-Heben (15,0–15,9: dumpf, dann voll)
musik *= huelle([(0, 1), (11.5, 1), (11.56, 0.0), (11.98, 0.0), (12.0, 1), (24.5, 1)])[:, None]
atem = huelle([(0, 0), (14.98, 0), (15.0, 1), (15.7, 1), (16.0, 0), (24.5, 0)])[:, None]
musik = musik * (1 - atem) + filt(musik, 'lowpass=f=600:p=2') * atem * db(-3)
musik *= db(-9.0 - lufs(musik[int(12 * SR):int(15 * SR)]))        # Drop-Teil auf -9 LUFS (deutlich lauter als die Rückblenden)
# Eigener Sub-Bass-Schlag (Sinus 62 → 40 Hz) auf den Drop, den zweiten Einsatz und den Schlussschlag
def sub(dauer=0.9, f0=62, f1=40):
    tt = np.arange(int(dauer * SR)) / SR
    ph = 2 * np.pi * np.cumsum(f1 + (f0 - f1) * np.exp(-tt * 9)) / SR
    return (np.sin(ph) * np.exp(-tt * 3.2) * np.minimum(1, tt / 0.004)).astype(np.float32)[:, None].repeat(2, 1)
for t0, g in ((12.0, -7), (17.0, -10), (24.0, -8)):
    lege(musik, sub(), t0, db(g))
# Ducking unter der Stimme (Grundwert −6 dB, 40 ms Anstieg, 200 ms Rückkehr) …
env = np.abs(stimme[:, 0]); blk = int(0.01 * SR)
akt = np.array([env[i:i + blk].max() > 0.015 for i in range(0, N, blk)], np.float32)
gl = np.zeros_like(akt); v = 0.0
for i, z in enumerate(akt):
    v += (z - v) * (0.25 if z > v else 0.05); gl[i] = v
duck = np.repeat(gl, blk)[:N]
musik *= (1 - duck * (1 - db(-6)))[:, None]
# … und je Satz nachgemessen: Musik mindestens 8 dB unter der Stimme (Handy-Lautsprecher), weiche Übergänge
rms = lambda x: 20 * np.log10(np.sqrt(np.mean(x ** 2)) + 1e-9)
extra = np.zeros(N, np.float32)
for c_ in cues:
    i0, i1 = int(c_['start'] * SR), int(c_['ende'] * SR)
    d = rms(musik[i0:i1]) - rms(stimme[i0:i1]) + 8
    if d > 0:
        extra = np.maximum(extra, huelle([(0, 0), (c_['start'] - .08, 0), (c_['start'] - .02, d), (c_['ende'], d), (c_['ende'] + .15, 0), (DAUER, 0)]))
musik *= (10 ** (-extra / 20))[:, None]
# Vinyl-Knistern im Freeze (eigenes Rauschen, fester Startwert)
rng = np.random.default_rng(20261104)
kn = np.zeros((N, 2), np.float32); i0, i1 = int(1.6 * SR), int(8.6 * SR)
klicks = rng.random(i1 - i0) < 0.0009
kn[i0:i1] += (klicks * rng.uniform(-1, 1, i1 - i0) * 0.3)[:, None]
kn[i0:i1] += rng.standard_normal((i1 - i0, 2)).astype(np.float32) * 0.01
kn = filt(kn, 'highpass=f=900,lowpass=f=4500,lowpass=f=4500')   # weiche Klicks (harte Impulse überschwingen im AAC)
kn *= huelle([(0, 0), (1.6, 0), (1.7, 1), (8.0, 1), (8.6, 0), (DAUER, 0)])[:, None] * db(-16)
musik += kn

# ---------------- Geräusche ----------------
def sfx(n, tempo=1.0, tonhoehe=1.0):
    x = lade(os.path.join(IN, 'sfx', n + '.mp3'))
    if tonhoehe != 1.0:
        x = filt(x, f'asetrate={int(SR * tonhoehe)},aresample={SR}')
    if tempo != 1.0:
        x = filt(x, f'atempo={tempo}')
    return x / max(1e-6, np.abs(x).max()) * 0.5                      # Spitze auf −6 dBFS


geraeusch = np.zeros((N, 2), np.float32)
G = {n: sfx(n) for n in ['riss', 'pulver', 'kratzer', 'rueckspul', 'deckel', 'schluck', 'stempel', 'pixel', 'push', 'karton',
                         'riser', 'eis', 'plopp', 'tipp', 'whoosh', 'muenze', 'schlag', 'wisch']}
G['pulver_lupe'] = sfx('pulver', tonhoehe=0.7)                       # Zeitlupe: tiefer, langsamer
G['plopp_tief'] = sfx('plopp', tonhoehe=0.75)
G['pling'] = sfx('muenze', tonhoehe=1.5)
# Schütteln: einzelne Schläge aus der Aufnahme schneiden und auf die Achtel des Drops legen
sch = sfx('schuetteln'); e = np.abs(sch[:, 0])
hk = np.array([e[i:i + 480].max() for i in range(0, len(e), 480)])
spitzen = [i for i in range(2, len(hk) - 2) if hk[i] == hk[i - 2:i + 3].max() and hk[i] > 0.35 * hk.max()]
spitzen = sorted(sorted(spitzen, key=lambda i: -hk[i])[:4])
koerner = [rampe(sch[max(0, i * 480 - 960):i * 480 + int(0.2 * SR)], 0.003, 0.06) for i in spitzen]
PLAN = [
    ('riss', 0.12, 0), ('pulver', 0.18, -4), ('pulver_lupe', 0.9, -7),
    ('kratzer', 1.48, 0), ('pixel', 1.58, -9), ('rueckspul', 1.70, -3),
    ('whoosh', 3.0, -9), ('tipp', 3.52, 0), ('whoosh', 3.64, -12), ('plopp', 3.84, -6),
    ('whoosh', 4.42, -7), ('plopp', 4.62, -7), ('plopp', 4.87, -7), ('plopp_tief', 5.45, -3), ('stempel', 5.75, 0), ('pixel', 5.85, -12),
    ('whoosh', 6.47, -7), ('karton', 6.42, -4), ('pixel', 7.06, -12), ('plopp', 7.26, -9),
    ('whoosh', 7.98, -7), ('schlag', 9.0, -6), ('whoosh', 8.98, -6), ('pulver', 9.1, -6), ('eis', 9.53, 0),
    ('schlag', 10.0, -8), ('schlag', 10.5, -8), ('schlag', 11.0, -8), ('riser', 8.5, -3),
    ('deckel', 11.62, 0), ('whoosh', 11.8, -6), ('schlag', 12.0, 0),
    ('whoosh', 12.5, -12), ('eis', 13.02, -8), ('pulver', 13.5, -8), ('whoosh', 14.0, -12), ('pixel', 14.5, -6),
    ('whoosh', 14.98, -8), ('schluck', 15.35, -2), ('eis', 15.5, -12),
    ('push', 17.02, -4), ('whoosh', 17.0, -10), ('plopp', 17.5, -7), ('plopp', 18.0, -7), ('plopp', 18.5, -7),
    ('muenze', 19.0, -4), ('schlag', 19.0, -6), ('pling', 19.3, -10),
    ('schlag', 21.0, -3), ('whoosh', 21.02, -10), ('plopp', 22.85, -9), ('pixel', 22.97, -12),
    ('pling', 23.75, -4), ('schlag', 24.0, 0),
]
for n, t, d in PLAN:
    lege(geraeusch, rampe(G[n], 0.002, 0.03), t, db(d))
for k in range(12):                                                 # Achtel 12,0 … 14,75 s, betonte Viertel (= Schnitte)
    lege(geraeusch, koerner[k % len(koerner)], 12.0 + 0.25 * k - 0.02, db(-1 if k % 2 == 0 else -6))
for t0 in (23.5, 23.75):                                            # Sound-Logo: zwei Shaker-TSCHK vor dem Schlussschlag
    lege(geraeusch, koerner[0], t0 - 0.02, db(0))
geraeusch *= db(-2)

misch = stimme.repeat(2, 1) + musik + geraeusch
misch[-int(0.1 * SR):] *= np.linspace(1, 0, int(0.1 * SR))[:, None]   # nur gegen Knacken, kein Ausblenden
schreibe(os.path.join(AUS, 'mischung.wav'), misch)
schreibe(os.path.join(AUS, 'musik-gelegt.wav'), musik)
print('Lautheit Stimme', round(lufs(stimme), 1), '· Musik', round(lufs(musik), 1), '· Geräusche', round(lufs(geraeusch), 1),
      '· Mischung', round(lufs(misch), 1))
print('Schüttel-Körner bei', [round(i * 480 / SR, 2) for i in spitzen])
