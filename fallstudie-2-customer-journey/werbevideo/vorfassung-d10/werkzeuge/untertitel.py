# Erzeugt ../holy-werbespot.de.vtt aus ../intern/ton/untertitel.json (Zeiten aus den ElevenLabs-Zeitstempeln,
# verschoben auf die Lage der Sätze im Spot). Lange Sätze werden am Komma bzw. Doppelpunkt geteilt (höchstens 42 Zeichen je Zeile).
# Zahlen erscheinen wie im Bild als Ziffern (Sprechertext schreibt sie aus, damit die Stimme sie richtig spricht); Zeiten bleiben.
# Werbespot HOLY (studentisches Konzept, HS Kaiserslautern) · KI-gestützt erstellt · Prüfung durch die Gruppe offen
import json, os
HIER = os.path.dirname(os.path.abspath(__file__))
cues = json.load(open(os.path.join(HIER, '..', 'intern', 'ton', 'untertitel.json')))
def zeit(s):
    m, s = divmod(s, 60); return f"00:{int(m):02d}:{s:06.3f}"
aus = ["WEBVTT", "Kind: captions", "Language: de", "",
       "NOTE Werbespot „Zahlen statt Versprechen“ – studentisches Konzept der Gruppe (HS Kaiserslautern), keine Werbung der HOLY Softdrinks GmbH. Stimme KI-generiert (ElevenLabs).", ""]
ZIFFERN = {   # Sprechertext → Anzeige (geschütztes Leerzeichen zwischen Zahl und Einheit)
    'Sieben Gramm auf fünfhundert Milliliter: eine Portion.': '7\u00a0g auf 500\u00a0ml: eine Portion.',
    'Hundertsechzig Milligramm Koffein.': '160\u00a0mg Koffein.',
    'Null Komma eins Gramm Zucker auf hundert Milliliter.': '0,1\u00a0g Zucker auf 100\u00a0ml.',
    'Achtzig Cent pro Portion.': '80\u00a0Cent pro Portion.',
}
liste = []
for c in cues:
    if c['text'] in ZIFFERN:                      # kurz genug für eine Zeile: ein Eintrag über den ganzen Satz
        liste.append([c['woerter'][0][1], c['woerter'][-1][2] + 0.25, ZIFFERN[c['text']]]); continue
    teile, akt = [], []
    for w in c['woerter']:
        akt.append(w)
        if len(' '.join(x[0] for x in akt)) > 30 and w[0][-1] in ',:' and w is not c['woerter'][-1]:
            teile.append(akt); akt = []
    if akt: teile.append(akt)
    for t in teile: liste.append([t[0][1], t[-1][2] + 0.25, ' '.join(x[0] for x in t)])
for n, (start, ende, text) in enumerate(liste, 1):
    if n < len(liste): ende = min(ende, liste[n][0] - 0.02)   # nie mit dem nächsten Untertitel überlappen
    aus += [str(n), f"{zeit(start)} --> {zeit(ende)}", text, ""]
n = len(liste)
open(os.path.join(HIER, '..', 'holy-werbespot.de.vtt'), 'w').write('\n'.join(aus))
print(n, 'Untertitel')
