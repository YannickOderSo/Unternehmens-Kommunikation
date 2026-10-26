#!/usr/bin/env python3
"""Selbstreflexion (Markdown im Repo) als Abgabe-HTML im Layout der Vorlage von Prof. Stenger bauen.

Aufruf: bauen.py <reflexion.md> <ausgabe.html> <stand TT.MM.JJJJ>
Übernimmt nur Abgabeteile: Kopfzeile (Name, Fallstudie, Aufgaben), die sechs Fragen mit Antworten und, falls
vorhanden, den KI-Hinweis. Entwurfskasten, Prüfliste und der Hinweis „← nur stehen lassen …“ bleiben draußen.
"""
import html, re, sys

md, out, stand = sys.argv[1:4]
s = open(md, encoding='utf-8').read()

kopf = re.search(r'^\*\*Name:\*\*(.*?)\n\n', s, re.S | re.M).group(0)
kopf = ' '.join(kopf.split())
felder = dict(re.findall(r'\*\*([^*]+?):\*\*\s*(.*?)(?=\s*·\s*\*\*|$)', kopf))
name = felder['Name']
fallstudie = felder['Fallstudie']
aufgaben = felder['Eigene Aufgaben im Team (Bündel)']

zeilen = []
for l in s.splitlines():
    if l.startswith('| ') and not l.startswith('| Reflektionsfrage') and not l.startswith('|---'):
        teile = [t.strip() for t in l.strip().strip('|').split('|')]
        assert len(teile) == 2, l
        zeilen.append(teile)
assert len(zeilen) == 6, len(zeilen)

ki = re.search(r'^\*KI-Nutzung:(.*?)\*', s, re.S | re.M)
ki = ' '.join(('KI-Nutzung:' + ki.group(1)).split()) if ki else ''

woerter = sum(len([t for t in a.split() if t not in ('–', '—')]) for _, a in zeilen)
assert woerter <= 500, woerter


def e(t):
    t = html.escape(t, quote=False)
    return t.replace(' – ', '&nbsp;– ').replace('S. ', 'S.&nbsp;').replace('Folie ', 'Folie&nbsp;')


ki_html = f'<p class="ki">{e(ki)}</p>\n' if ki else ''
tabelle = '\n'.join(f'<tr><th scope="row">{e(f)}</th><td>{e(a)}</td></tr>' for f, a in zeilen)

seite = f'''<!doctype html>
<html lang="de"><head><meta charset="utf-8">
<title>Selbstreflexion Fallstudie 1, {e(name)}</title>
<style>
@page {{ size: A4; margin: 13mm 15mm 14mm 15mm;
  @bottom-center {{ content: "Unternehmenskommunikation, Prof. Dr. Daniel Stenger · Selbstreflexion {e(name)}";
    font: 8.5pt Carlito, Calibri, sans-serif; color: #555; }} }}
* {{ box-sizing: border-box; }}
html {{ -webkit-print-color-adjust: exact; print-color-adjust: exact; }}
body {{ margin: 0; font: 9.6pt/1.3 Carlito, Calibri, "Liberation Sans", sans-serif; color: #1d1d1b; background: #fff;
  hyphens: auto; }}
h1 {{ font: 700 17pt/1.2 Caladea, Cambria, Georgia, serif; color: #3a3a3a; margin: 0 0 2.5mm; }}
.linie {{ height: 1.2mm; background: #5f6b73; margin-bottom: 3mm; }}
dl {{ display: grid; grid-template-columns: max-content 1fr; gap: 0.4mm 4mm; margin: 0 0 3mm; }}
dt {{ font-weight: 700; }} dd {{ margin: 0; }}
table {{ width: 100%; border-collapse: collapse; table-layout: fixed; }}
col.f {{ width: 25%; }}
thead th {{ background: #5f6b73; color: #fff; text-align: left; font-weight: 700; padding: 1.3mm 2.2mm; }}
tbody th, tbody td {{ border: 0.3mm solid #5f6b73; padding: 1.3mm 2.2mm; vertical-align: top; text-align: left; }}
tbody th {{ font-weight: 400; background: #f3f4f5; }}
tr {{ break-inside: avoid; }}
.fuss {{ display: flex; justify-content: space-between; gap: 6mm; margin-top: 2mm; }}
.grenze {{ font-weight: 700; white-space: nowrap; }}
.ki {{ margin: 2.5mm 0 0; font-style: italic; font-size: 9pt; }}
.stand {{ margin: 1.5mm 0 0; font-size: 9pt; color: #555; }}
</style></head>
<body>
<h1>Selbstreflektion Fallstudie {e(fallstudie.split(':')[0].split(' ')[0])}</h1>
<div class="linie"></div>
<dl>
<dt>Name</dt><dd>{e(name)}</dd>
<dt>Fallstudie</dt><dd>{e(fallstudie)}</dd>
<dt>Eigene Aufgaben im Team</dt><dd>{e(aufgaben)}</dd>
</dl>
<table>
<colgroup><col class="f"><col></colgroup>
<thead><tr><th scope="col">Reflektionsfrage</th><th scope="col">Erläuterung</th></tr></thead>
<tbody>
{tabelle}
</tbody>
</table>
<div class="fuss"><span class="grenze">max. 500 Wörter pro Fallstudie</span><span>Umfang der Erläuterungen: {woerter} Wörter</span></div>
{ki_html}<p class="stand">Stand: {e(stand)}</p>
</body></html>
'''
open(out, 'w', encoding='utf-8').write(seite)
print('Wörter', woerter, 'Zeilen', len(zeilen), 'KI-Hinweis', bool(ki))
