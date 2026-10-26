#!/usr/bin/env python3
"""Zusammenfassung des KI-Nachweises als druckfertiges HTML (danach mit Chromium als PDF drucken).

Aufruf: 2026-10-26_ki-nachweis-zusammenfassung.py <ki-nachweis.md> <ausgabe.html> <stand TT.MM.JJJJ>
Übernimmt die drei Übersichtstabellen des Nachweises unverändert: Prompts an Claude Code (Abschnitt 1),
Delegationen an Unteragenten (Abschnitt 2), KI-Nutzung außerhalb von Claude Code (Abschnitt 3).
Ausgelassen werden nur automatische Systemmeldungen (Spalte „Von“ = „System“ oder „Systemhinweis …“), weil sie
keine Prompts der Gruppe sind; ihre Anzahl und Nummern stehen im Kopf des PDFs.
"""
import html, re, sys

md, out, stand = sys.argv[1:4]
s = open(md, encoding='utf-8').read()
REPO = 'https://github.com/yannickoderso/unternehmens-kommunikation/blob/master/ki-nachweis/ki-nachweis.md'


def tabelle(kopf):
    a = s.index(kopf)
    b = s.index('\n\n', a)
    zeilen = [l for l in s[a:b].splitlines() if l.startswith('|')]
    teile = lambda l: [c.strip() for c in re.split(r'(?<!\\)\|', l.strip())[1:-1]]
    return teile(zeilen[0]), [teile(l) for l in zeilen[2:]]


def inline(t):
    t = html.escape(t, quote=False)
    t = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', t)
    t = re.sub(r'`([^`]+)`', r'<code>\1</code>', t)
    t = re.sub(r'\*\*([^*]+)\*\*', r'<b>\1</b>', t)
    t = re.sub(r'(?<![\w*])\*([^*]+)\*(?![\w*])', r'<i>\1</i>', t)
    return t.replace('&amp;nbsp;', '&nbsp;')


k1, t1 = tabelle('| Nr. | Datum | Von |')
k2, t2 = tabelle('| Nr. | Datum | Ausgelöst durch Prompt |')
k3, t3 = tabelle('| ID | FS | Datum | Person |')

ist_system = lambda z: z[2] == 'System' or z[2].startswith('Systemhinweis')
system = [z for z in t1 if ist_system(z)]
prompts = [z for z in t1 if not ist_system(z)]
assert len(system) + len(prompts) == len(t1)
system_nr = ', '.join(z[0] for z in system if z[0] != '–')
system_ohne_nr = sum(1 for z in system if z[0] == '–')
fuer_lukas = sum(1 for z in prompts if 'Lukas' in z[2])
datum = [z[1] for z in t1]


def html_tabelle(kopf, zeilen, breiten):
    assert len(breiten) == len(kopf) and sum(breiten) == 100
    cols = ''.join(f'<col style="width:{b}%">' for b in breiten)
    th = ''.join(f'<th>{inline(k)}</th>' for k in kopf)
    tr = '\n'.join('<tr>' + ''.join(f'<td>{inline(c)}</td>' for c in z) + '</tr>' for z in zeilen)
    return f'<table><colgroup>{cols}</colgroup><thead><tr>{th}</tr></thead><tbody>\n{tr}\n</tbody></table>'


seite = f'''<!doctype html>
<html lang="de"><head><meta charset="utf-8">
<title>KI-Nachweis Fallstudie 1: Zusammenfassung</title>
<style>
@page {{ size: A4 landscape; margin: 11mm 11mm 12mm 11mm;
  @bottom-center {{ content: "KI-Nachweis Gruppe HOLY · Zusammenfassung · Seite " counter(page) " von " counter(pages);
    font: 7.5pt Carlito, Calibri, sans-serif; color: #555; }} }}
* {{ box-sizing: border-box; }}
html {{ -webkit-print-color-adjust: exact; print-color-adjust: exact; }}
body {{ margin: 0; font: 8.2pt/1.28 Carlito, Calibri, "Liberation Sans", sans-serif; color: #1d1d1b; background: #fff; }}
h1 {{ font: 700 16pt/1.2 Caladea, Cambria, Georgia, serif; color: #3a3a3a; margin: 0 0 2mm; }}
h2 {{ font: 700 11pt/1.2 Caladea, Cambria, Georgia, serif; color: #3a3a3a; margin: 5mm 0 1.5mm; break-after: avoid; }}
.linie {{ height: 1mm; background: #5f6b73; margin-bottom: 3mm; }}
.kopf {{ display: grid; grid-template-columns: max-content 1fr; gap: 0.3mm 4mm; margin: 0 0 2mm; }}
.kopf dt {{ font-weight: 700; }} .kopf dd {{ margin: 0; }}
p {{ margin: 0 0 1.5mm; }}
table {{ width: 100%; border-collapse: collapse; table-layout: fixed; }}
thead {{ display: table-header-group; }}
th {{ background: #5f6b73; color: #fff; text-align: left; font-weight: 700; padding: 1mm 1.6mm; }}
td {{ border-bottom: 0.25mm solid #c9cfd3; padding: 0.9mm 1.6mm; vertical-align: top; overflow-wrap: anywhere; }}
tbody tr:nth-child(even) td {{ background: #f3f4f5; }}
tr {{ break-inside: avoid; }}
code {{ font: 7.4pt "DejaVu Sans Mono", monospace; }}
.hinweis {{ font-size: 7.8pt; color: #444; }}
</style></head>
<body>
<h1>KI-Nachweis Fallstudie 1: Zusammenfassung</h1>
<div class="linie"></div>
<dl class="kopf">
<dt>Gruppe</dt><dd>Yannick Heisler · Elias Knauber · Lukas Welker (Marke HOLY)</dd>
<dt>Modul</dt><dd>Unternehmenskommunikation, Prof. Dr. Daniel Stenger, Hochschule Kaiserslautern</dd>
<dt>Tool</dt><dd>Claude Code (Anthropic), eine Cloud-Sitzung von Yannick Heisler im Repository der Gruppe; dazu KI-Nutzung außerhalb (Abschnitt 3)</dd>
<dt>Zeitraum</dt><dd>{inline(datum[0])} bis {inline(datum[-1])} · Stand {inline(stand)}</dd>
<dt>Umfang</dt><dd>{len(prompts)} Prompts der Gruppe an Claude Code (davon {fuer_lukas} im Auftrag von Lukas Welker) · {len(t2)} Delegationen an Unteragenten bzw. Übergaben · {len(t3)} Zeilen KI-Nutzung außerhalb von Claude Code</dd>
<dt>Vollständig</dt><dd>Alle Prompts wörtlich, Vorgehen, Dateien und Aufträge an Unteragenten: {REPO} · Rohdaten: ki-nachweis/rohprotokoll.jsonl</dd>
</dl>
<p class="hinweis">Die Tabellen sind unverändert aus dem KI-Nachweis übernommen. Nicht aufgeführt sind {len(system)} automatische
Systemmeldungen der Sitzung (Hinweise auf nicht committete Dateien, Meldungen fertiger oder abgebrochener Workflows,
Neustarts, Nutzungslimits); sie sind keine Prompts der Gruppe und stehen vollständig im KI-Nachweis
(Nr. {system_nr}{f" sowie {system_ohne_nr} ohne Nummer" if system_ohne_nr else ""}).</p>

<h2>1. Prompts an Claude Code</h2>
{html_tabelle(k1, prompts, [4, 7, 8, 39, 9, 33])}

<h2>2. Delegationen an Unteragenten und Übergaben</h2>
{html_tabelle(k2, t2, [4, 7, 10, 15, 24, 24, 16])}

<h2>3. KI-Nutzung außerhalb von Claude Code</h2>
{html_tabelle(k3, t3, [6, 3, 8, 8, 8, 11, 17, 15, 10, 14])}
</body></html>
'''
open(out, 'w', encoding='utf-8').write(seite)
print('Prompts', len(prompts), 'davon für Lukas', fuer_lukas, '| Systemmeldungen ausgelassen', len(system),
      '| Delegationen', len(t2), '| außerhalb', len(t3))
