# Schreibt ../holy-werbespot.de.vtt aus ../intern/d11/ton/untertitel.json (Zeiten aus den ElevenLabs-Zeitstempeln, so wie
# die Sätze in ton.py gelegt sind). Der Countdown wird zu einem Eintrag zusammengefasst.
# Werbespot HOLY (studentisches Konzept, HS Kaiserslautern) · KI-gestützt erstellt · Prüfung durch die Gruppe offen
import json, os
HIER = os.path.dirname(os.path.abspath(__file__))
cues = json.load(open(os.path.join(HIER, '..', 'intern', 'd11', 'ton', 'untertitel.json')))
zus = []
for c in cues:
    if c['name'] in ('zwei', 'eins'):
        zus[-1]['text'] += ' ' + c['text']; zus[-1]['ende'] = c['ende']
    else:
        zus.append(dict(c))
zeit = lambda s: f'00:{int(s // 60):02d}:{s % 60:06.3f}'
zeilen = ['WEBVTT', '', 'NOTE Werbespot „Mein Moment.“ – studentisches Konzept der Gruppe (HS Kaiserslautern), keine Werbung der '
          'HOLY Softdrinks GmbH. Stimme KI-generiert (ElevenLabs).', '']
for i, c in enumerate(zus, 1):
    ende = max(c['ende'], c['start'] + 0.8)
    if i < len(zus): ende = min(ende + 0.25, zus[i]['start'] - 0.02)
    zeilen += [str(i), f"{zeit(c['start'])} --> {zeit(ende)}", c['text'], '']
open(os.path.join(HIER, '..', 'holy-werbespot.de.vtt'), 'w').write('\n'.join(zeilen))
print(len(zus), 'Untertitel')
