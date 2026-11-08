#!/usr/bin/env python3
"""Prüft redeskript.md gegen praesentation/index.html (unabhängig vom Generator geschrieben, D12).

1. Jeder Sprechtext-Absatz (<p data-schritt> in den Notizen der Folien 01–09) steht im Skript WÖRTLICH unter
   „## nn“ beim passenden „▶ Folie erscheint“ / „▶ Klick n“ (Vergleich nach Entfernen von Markdown-Zeichen
   und Zeilenumbrüchen).
2. Klicks je Folie und Sollzeiten (data-zeit) stimmen mit dem Kopf jeder Folie im Skript überein.
3. Jeder „Wann zeigen“-Text und jeder Antwortsatz der Backup-Folien kommt wörtlich im Kernsatz der Notiz vor.
   (Seit der Nacharbeit D12 steht der Warnhinweis ⚠ als eigener Kasten „  > ⚠“ unter der Antwort.)
Aufruf: python3 werkzeuge-redeskript/wortlaut-pruefen.py   (Rückgabe 0 = alles gleich)
"""
import html, pathlib, re, sys

BASIS = pathlib.Path(__file__).resolve().parent.parent
idx = (BASIS / 'praesentation' / 'index.html').read_text(encoding='utf-8')
md = (BASIS / 'redeskript.md').read_text(encoding='utf-8')


def norm(t):
    t = html.unescape(re.sub(r'<[^>]+>', '', t))
    t = t.replace('**', '').replace('*', '')
    return ' '.join(t.split())


def folie(fid):
    a = idx.index('id="%s"' % fid)
    b = idx.find('<section class="folie', a)
    return idx[a:b if b > 0 else len(idx)]


fehler, geprueft = [], 0
for nr in ['01', '02', '03', '04', '05', '06', '07', '08', '09']:
    sec = folie('f' + nr)
    noti = re.search(r'<aside class="notizen">(.*?)</aside>', sec, re.S).group(1)
    soll = int(re.search(r'data-zeit="(\d+)"', sec).group(1))
    inhalt = re.sub(r'<!--.*?-->', '', re.sub(r'<aside class="notizen">.*?</aside>', '', sec, flags=re.S), flags=re.S)
    schritte = max(int(x) for x in re.findall(r'data-schritt="(\d+)"', inhalt))
    klicks = schritte + (0 if nr == '09' else 1)
    m = re.search(r'^## %s · .*?(?=^## )' % nr, md, re.S | re.M)
    block = m.group(0)
    kopf = re.search(r'\*\*Soll:\*\* (\d+):(\d\d) .*?\*\*Klicks:\*\* (\d+)', block)
    if int(kopf.group(1)) * 60 + int(kopf.group(2)) != soll:
        fehler.append('%s: Sollzeit %s:%s ≠ data-zeit %d' % (nr, kopf.group(1), kopf.group(2), soll))
    if int(kopf.group(3)) != klicks:
        fehler.append('%s: Klicks %s ≠ %d' % (nr, kopf.group(3), klicks))
    # Absätze im Skript: von „- **▶ …**“ bis zum nächsten „- **▶“ oder Leerzeile
    eintraege = {}
    for e in re.finditer(r'^- \*\*▶ (Folie erscheint|Klick (\d+))\*\* · \*[^*]*\*  \n(.*?)(?=^- \*\*▶|^\s*$)', block,
                         re.S | re.M):
        n = 0 if e.group(1) == 'Folie erscheint' else int(e.group(2))
        eintraege[n] = norm(e.group(3))
    for n, p in re.findall(r'<p data-schritt="(\d+)"[^>]*>(.*?)</p>', noti, re.S):
        geprueft += 1
        soll_t, ist_t = norm(p), eintraege.get(int(n))
        if soll_t != ist_t:
            fehler.append('%s Schritt %s weicht ab:\n  index.html: %s\n  Skript:     %s' % (nr, n, soll_t, ist_t))

bk = md[md.index('## Backup'):]
for b in range(1, 10):
    noti = re.search(r'<aside class="notizen">(.*?)</aside>', folie('b%d' % b), re.S).group(1)
    p0 = norm(re.search(r'<p data-schritt="0"[^>]*>(.*?)</p>', noti, re.S).group(1))
    z = re.search(r'^- \*\*B%d · .*?\*\* – \*Wann zeigen: (.*?)\*  \n  (.*?)(?:  \n  ⚠|\n\n  > ⚠|\n- |\Z)' % b, bk, re.S | re.M)
    wann, antwort = norm(z.group(1)), norm(z.group(2)).replace(' […]', '')
    geprueft += 1
    if 'Wann zeigen? ' + wann not in p0 or antwort not in p0:
        fehler.append('B%d: Wann zeigen/Antwort nicht wörtlich in der Notiz' % b)

print('geprüft: %d Absätze/Einträge · Abweichungen: %d' % (geprueft, len(fehler)))
for f in fehler:
    print('-', f)
sys.exit(1 if fehler else 0)
