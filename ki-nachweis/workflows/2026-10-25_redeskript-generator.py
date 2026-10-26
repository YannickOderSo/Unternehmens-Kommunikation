#!/usr/bin/env python3
"""Kompaktes Redeskript: gesprochener Text je Folie aus praesentation/index.html (data-schritt, p.gesprochen).
Aufruf: python3 bauen_redeskript.py <ziel.md> <ziel.html> <stand TT.MM.JJJJ>"""
import html, pathlib, re, subprocess, sys

REPO = pathlib.Path('/home/user/Unternehmens-Kommunikation/fallstudie-1-brand-persona')
INDEX = (REPO / 'praesentation/index.html').read_text(encoding='utf-8')
SCHRIFT = REPO / 'praesentation/schriften'
MARKE = 'HOLY'
GRUPPE_GESPROCHEN = 'Yannick Heisler, Elias Knauber und Lukas Welker'


def abschnitt(fid):
    m = re.search(r'<section[^>]*id="%s"' % fid, INDEX)
    n = re.search(r'<section class="folie', INDEX[m.end():])  # B7 enthält verschachtelte <section>
    return INDEX[m.start():(m.end() + n.start()) if n else len(INDEX)]


def zeit(fid):
    return int(re.search(r'<section[^>]*id="%s"[^>]*data-zeit="(\d+)"' % fid, INDEX).group(1))


def absaetze(fid):
    """[(nr, roh)] der data-schritt-Absätze in den Notizen"""
    return [(int(n), re.sub(r'\s+', ' ', p).strip())
            for n, p in re.findall(r'<p data-schritt="(\d+)"[^>]*>(.*?)</p>', abschnitt(fid), flags=re.S)]


def gesprochen(fid):
    return [re.sub(r'\s+', ' ', p).strip()
            for p in re.findall(r'<p class="gesprochen">(.*?)</p>', abschnitt(fid), flags=re.S)]


def text(roh):
    """HTML → Klartext, Marke eingesetzt, <i>-Notizen entfernt"""
    t = re.sub(r'<i>.*?</i>', '', roh)
    t = t.replace('<span data-marke></span>', MARKE).replace('<span data-gruppe></span>', GRUPPE_GESPROCHEN)
    t = re.sub(r'<[^>]+>', '', t)
    return html.unescape(t).strip()


def zitate(roh):
    """Wörtliche Rede „…“ auf oberster Ebene (verschachtelte ‚…‘ bleiben drin)"""
    t = text(roh)
    return re.findall(r'„([^“]*)“', t)


def kopf_und_rest(roh):
    """<b>Kopf</b> (ca. n s) Rest → (Kopf mit Zeit, Rest)"""
    m = re.match(r'<b>(.*?)</b>\s*(\([^)]*\))?\s*', roh)
    kopf = text(m.group(1)).rstrip(':')
    if m.group(2):
        kopf += ' ' + m.group(2)
    return kopf, roh[m.end():]


PLATZHALTER = ['[x %]', '[Name]', '[Zahl]', '[Wort]']


def regie(t):
    """Anweisungen im Fließtext kursiv: […] und (→ …) und (ca. n s); Platzhalter fett (mitsprechen)"""
    for i, ph in enumerate(PLATZHALTER):
        t = t.replace(ph, '\x00%d\x00' % i)
    t = re.sub(r'\[([^\[\]]*)\]', r'*[\1]*', t)
    t = re.sub(r'\((→[^)]*|ca\. \d+ s)\)', r'*(\1)*', t)
    for i, ph in enumerate(PLATZHALTER):
        t = t.replace('\x00%d\x00' % i, '**%s**' % ph)
    return t


def klick(nr):
    return '**▶ Folie erscheint**' if nr == 0 else '**▶ Klick %d**' % nr


# Sonderfälle mit Bühnenanweisungen im Absatz: nur die wörtliche Rede, Regie knapp (Wortlaut der Rede aus index.html)
def folie_01():
    a = dict(absaetze('f01'))
    z0, z1, z2, z3 = zitate(a[0]), zitate(a[1]), zitate(a[2]), zitate(a[3])
    return [
        (0, 'Frage stellen (ca. 10 s)', '*[mit dem ersten Satz im Referentenfenster „Start“ klicken; unscharfes gelbes '
         'Oval]* „%s“ *[3–5 s warten, Zurufe kurz aufgreifen: „%s“]*'
         % (z0[0], z0[1])),
        (1, 'Hinweis (ca. 6 s)', '*[Bild schärfer]* „%s“ *[kurz warten; kommt nichts:]* „%s“' % (z1[0], z1[1])),
        (2, 'Auflösen (ca. 4 s)', '„%s“ *[wer richtig getippt hat: kurz würdigen]*' % z2[0]),
        (3, 'Thema nennen (ca. 10 s)', '„%s“' % z3[0] + '\n\n  *Nur wenn Folie 01b eingeschaltet ist, statt „Zuerst die '
         'Leitfrage.“: „%s“ – nicht zweimal hintereinander zum Zurufen auffordern.*' % zitate(re.search(
             r'<i>(.*?)</i>', a[3]).group(1))[0]),
    ]


def folie_01b():
    a = dict(absaetze('f01b'))
    g = gesprochen('f01b')
    zg2 = zitate(g[1])
    return [
        (0, 'Frage stellen (ca. 10 s)', '„%s“' % zitate(a[0])[0]),
        (None, 'Mitschreiben (ca. 25 s)', '*[Ein Teammitglied tippt jeden Zuruf + Enter; laut mitlesen:]* „%s“'
         % zitate(g[0])[0]),
        (None, 'Überleiten (ca. 10 s)', '„%s“ *[Bild↓ am Clicker → Folie 02]*' % zg2[0]),
    ]


def folie_02():
    a = dict(absaetze('f02'))
    teile = []
    teile.append((0, 'Ausgangslage und Leitfrage (ca. 12 s)', '„%s“' % zitate(a[0])[0]))
    # Klicks 1–5: ein Satz, auf fünf Klicks verteilt (Anführungszeichen öffnen in 1, schließen in 5)
    for n in range(1, 6):
        t = text(a[n])
        t = re.sub(r'^Klicks 1–5 \([^)]*\):\s*', '', t)
        t = t.replace('„', '').replace('“', '').strip()
        teile.append((n, 'Klicks 1–5, zusammen ca. 24 s' if n == 1 else '', t))
    for n in (6, 7):
        k, _ = kopf_und_rest(a[n])
        k = re.sub(r', ≈ \d+ Wörter', '', k)
        k = re.sub(r'^Klick \d+ ', '', k)
        teile.append((n, k, '„%s“' % zitate(a[n])[0]))
    return teile


def standard(fid):
    teile = []
    for n, roh in absaetze(fid):
        k, rest = kopf_und_rest(roh)
        t = text(rest)
        t = t.replace('(→ Folie 05b Gründerbefragung – Lukas übernimmt mit „Vorher die Innensicht“; seit 24.10.2026, '
                      'bis dahin → Folie 06)', '[→ Folie 05b, Lukas übernimmt]')
        t = regie(t)
        if fid == 'f08' and n == 0:
            m01b = re.search(r'<p><b>Mit Folie 01b \(optional\):</b>(.*?)</p>', abschnitt('f08'), flags=re.S)
            t += ('\n\n  *Nur mit Folie 01b: keine Abstimmung – die Frage nur rhetorisch stellen („%s“), zweimal '
                  'klicken, weiter bei Klick 2.*' % zitate(m01b.group(1))[0])
        teile.append((n, k, t))
    return teile


# Folien in Vortragsreihenfolge: (id, Nummer, Kernaussage = Folientitel, Sprecher)
FOLIEN = [
    ('f01', '01', 'Welche Marke steckt dahinter? → Brand Persona & Markenidentität', 'Yannick'),
    ('f01b', '01b', 'Was verbinden Sie mit HOLY? (optional, zurzeit aus)', 'Yannick; ein Teammitglied tippt mit'),
    ('f02', '02', 'Jede Methode gehört zu einem Feld des Steuerrads', 'Yannick'),
    ('f03', '03', 'HOLY: Herausforderer mit Softdrinks zum Selbermixen', 'Yannick'),
    ('f04', '04', 'Ende 20, Schichtdienst – und Energie ohne Zucker', 'Yannick'),
    ('f05', '05', 'HOLY trifft Marcos Lust auf Neues, zeigt aber kaum seine Schicht', 'Yannick'),
    ('f05b', '05b', 'Laut Gründer verbindet HOLY Geschmack mit gutem Gewissen', 'Lukas'),
    ('f06', '06', 'HOLY hebt sich ab – aber vor allem durch Hürden', 'offen (Bündel B)'),
    ('f07', '07', 'Ohne Zucker → kein Absturz → verlässlich sein', 'offen (Bündel B)'),
    ('f08', '08', 'HOLY wäre Papagei und Chamäleon, kein Adler', 'offen (Bündel B)'),
    ('f08b', '08b', 'HOLY wirkt wie ein witziger Kumpel – der verkaufen will', 'offen (Bündel B)'),
    ('f09', '09', 'Vier Kanäle, vier Rollen – kein festes Schlüsselbild', 'Elias'),
    ('f09b', '09b', 'HOLY trifft den Ton, wirkt aber zersplittert', 'Elias'),
    ('f10', '10', 'HOLY: stimmige Identität – bis auf zwei Lücken', 'Elias'),
    ('f11', '11', 'HOLY: klare Positionierung, zwei Lücken, ein Bruch', 'Elias'),
    ('f12', '12', 'Danke! Fragen?', 'alle'),
]

WEITER = {'f01': 'Folie 02 (oder 01b, falls eingeschaltet)', 'f01b': 'Folie 02 (Bild↓ am Clicker)', 'f02': 'Folie 03',
          'f03': 'Folie 04', 'f04': 'Folie 05', 'f05': 'Folie 05b', 'f05b': 'Folie 06', 'f06': 'Folie 07',
          'f07': 'Folie 08', 'f08': 'Folie 08b', 'f08b': 'Folie 09', 'f09': 'Folie 09b', 'f09b': 'Folie 10',
          'f10': 'Folie 11', 'f11': 'Folie 12'}
UEBERGABE = {
    'f05': 'Übergabe: Yannick → Lukas („Vorher die Innensicht …“) – Clicker weitergeben',
    'f05b': 'Übergabe: Lukas → Sprecher:in Folien 06–08b (offen, Gruppe legt fest) – Clicker weitergeben',
    'f08b': 'Übergabe → Elias („Wie tritt HOLY auf? …“) – Clicker weitergeben',
}

# Knappe Stolperstellen je Folie (aus vortragsskript.md „Fallstricke“, fragerunde.md, LIESMICH; Prüfung D31).
# „✂“ = Kürzungsvorrat laut Kommentaren in index.html.
ACHTUNG = {
    'f01': ['Gründung und Marktstart erst auf Folie 02/03 nennen, nicht hier.'],
    'f01b': ['Nur einschalten, wenn auf Folie 08 die Live-Umfrage entfällt und die gestoppte Probe ≤ 14:00 dauert.'],
    'f02': ['Vorlesungsbegriffe: Identität ↔ Image (Stenger, S. 87) – bei Rückfragen zuerst „Image“, „Fremdbild“ nur '
            'als Erklärung. Repertory Grid und Laddering füllen das Rad nicht (nur Abgleich). Fußzeile „Ergebnisse '
            'geprüft“ nicht vertreten – „Unsere eigene Prüfung läuft noch.“'],
    'f03': ['„über 170 Millionen“ immer „laut Unternehmen“ (✎, keine geprüfte Bilanz). Wettbewerbsrollen nach Kotler '
            'stehen nicht in der Vorlesung (sie zitiert Kotler nur S. 16, 109–110); Kotler fehlt in B7 – keine Auflage '
            'oder Seite nennen; „Herausforderer“ ist unsere Einordnung (H).'],
    'f04': ['Marco ist fiktiv; Altersangabe = Gründeraussage (Jost), keine Kundendaten; 40 % = Kantar TGI 2023 via '
            'Statista (Kategorie).',
            '„Auf Zucker verzichten, auf Geschmack nicht“ (Pain/Gain) ist eine Annahme, obwohl der Block als Daten '
            'markiert ist; Name, Beruf, Wohnort und Zitat sind KI-Vorschläge – auf Nachfrage offen sagen.'],
    'f05': ['„Hedonisten“, Limbic Types und Gewichte sind unsere Erweiterung nach Gruppe Nymphenburg, nicht Vorlesung '
            '(S. 69–71, 93 zeigen sie nicht). Die drei Folgen sind Hypothesen; „Durchhalten ohne Zucker“ ist kein '
            'Wirkversprechen.'],
    'f05b': ['Immer „laut Gründer“ (Selbstauskunft, n = 1, zwei Sprachnachrichten – nicht „Interview“). „95 %“ nie '
             'von sich aus nennen.'],
    'f06': ['„seit 2025 im Supermarkt“ meint den breiten Ausbau; der erste Supermarkt war Frühjahr 2024 (Rückfrage). '
            'Immer „KI-simuliert“, nie „die Befragten“ allein.'],
    'f07': ['„kein Zuckerabsturz“ und „Gesundheit“ sind Sicht der simulierten Personen – kein Produktversprechen.',
            'Selbstachtung und Selbstbestimmung stehen nicht in der Grafik (nur direkte Verbindungen) – nicht darauf '
            'zeigen. „Für jeden Tag“ ist der Name unserer Idealmarke, kein HOLY-Satz.',
            'Nur Plan B (Präsentations-PDF): die Tierfrage schon hier stellen, Hände zählen, Ergebnis mündlich nennen – '
            'im PDF verrät der Titel von 08 die Auflösung.'],
    'f08': ['Der Link ist eingerichtet, also kommt der QR-Code: Zweig „Mit Link“ sprechen, ca. 20 s abstimmen lassen. '
            'Pille „offline“: Pille anklicken (neu versuchen), erst dann Plan C; bei „Beispieldaten“ sofort Plan C = '
            'Zweig „Ohne Link“: Tiere von der Folie vorlesen, **[Name]** zählt die Hände, Knopf „Werte“, Zahlen mit '
            'Tab bis hinter das letzte Tier, weiter mit Bild↓ am Clicker.',
            '**[x %]** = die große Zahl in Schritt 1. Steht dort „Noch keine Stimmen“, „Beispielwerte – keine Aussage“ '
            'oder „Papagei oder Chamäleon: keine Stimme“: keine Zahl nennen, „– [x %] sehen das auch“ weglassen. Die '
            'Live-Zahl ist ein Stimmungsbild, kein Beleg. Solange die Umfrage zu sehen ist, zählen die Ziffern 1–5 als '
            'Stimmen.',
            'Löwe und Schwan sind Beispiele (Folie: „Im Kontrast (Beispiel)“) – nach Wettbewerbern hat weder Elias noch '
            'die Simulation gefragt; nie als Ergebnis ausgeben.',
            '**[Name]** (wer bei Plan C zählt) vor dem Druck festlegen.',
            '✂ bei Zeitnot: Klick 1 „Hier vorgegeben …“ nur auf Nachfrage; Klick 2 „die ‚Squad‘“ und „– Abgleich auf '
            'Folie 10“ weglassen; Abstimmung nicht über 20 s.'],
    'f08b': ['Nicht „gemessen nach Aaker“ – Aaker ist eine Ergänzung aus der Literatur, nicht Vorlesung. „In allen acht '
             'Gesprächen“ = gemeinsames Bild des Modells (fast wortgleich, die Frage legt Verkauf nahe), keine starke '
             'Zustimmung; „Nicht-Kunden“ = simulierte Nicht-Kund:innen.',
             '✂ bei Zeitnot: Klick 2 „deutlich bei Kompetenz,“ · Klick 4 „mit unserem Selbstbild“.'],
    'f09': ['Follower sind Indizien, keine Engagement-Raten; „Produkt in der Hand“ ist ein Kandidat.'],
    'f09b': ['„Zum frechen Kumpel passt das“ meint die Selbstbild-Tonalität „frech · gesellig“ – nicht das '
             'KI-simulierte Fremdbild von 08b. Auf Nachfrage: „stimmig innerhalb der Identität (Hypothese)“.'],
    'f10': ['„gleichauf“ sagen, nicht „knapp vor“. „zuckerfrei“ gilt nicht für alle Linien (Milkshake mit Milch 15 g '
            'Zucker laut HOLY). Die Nutzen-Stichworte sind unsere Verdichtung aus HOLYs Versprechen ✔ [5]; '
            '„dazugehören“ stammt aus Elias\' Kommunikationsanalyse (laut Gründer gestützt).',
            'Klick 10 nur, wenn Folie 01b eingeschaltet ist und Wörter in der Wolke stehen – sonst führt Klick 10 schon '
            'zu Folie 11. Wörter aus der Probe vorher auf 01b mit „Wolke leeren“ löschen. **[Zahl]** und **[Wort]** '
            'von der Folie ablesen („x von y Ihrer Zurufe …“, markierte Wörter); den Satz „Was Sie genannt haben und '
            'bei uns fehlt: …“ mitsprechen.',
            'Nur Plan B (Präsentations-PDF `export/praesentation.pdf`, S. 13): Der Abgleich (Schritt 9) fehlt dort – '
            'mündlich sagen.',
            '✂ bei Zeitnot: Klick 1 „aus Berlin“ · Klick 3 „pro Portion“.'],
    'f11': ['Folie 11 endet schon mit „vielen Dank!“ – in der Generalprobe abstimmen, wer den Dank auf Folie 12 sagt. '
            'Keine Eurobeträge, keine beschlossene Reihenfolge.',
            'Nicht behaupten, HOLY verschweige Koffein – das Etikett nennt es; ob die Angabe vorn fehlt, vorher an einer '
            'aktuellen Packung prüfen. „Klar“ ist unsere Wertung des Selbstbilds (H); das KI-simulierte Fremdbild '
            'stützt sie nicht.',
            'Klick 2: Die Wortwahl „Bildwelt zu jung“ ist offen – sicherer: „Der Streetwear-Auftritt wirkt jünger als '
            'die Kundschaft von 25 bis 40“ (F32). „25 bis 40“ = laut Mitgründer Jost (Podcast 2024, sinngemäß), keine '
            'Kundendaten.',
            '✂ Zu lang (≈ 87 s bei Soll 75 s): in Klick 2 einen der Nachsätze „Das schließt auch …“ oder „Nebenbei …“ '
            'weglassen.'],
    'f12': ['Antwort kurz, Kern zuerst; nicht raten („Das haben wir nicht erhoben“). Sprünge: Steuerrad-Feld, Listen '
            '„Methoden“, „Ergebnisse“, „Backup“.'],
}

# Backup: Titel (Folienüberschrift) und wann zeigen; Kernsatz aus den Notizen (Schritt 0, nach „Kernsatz:“)
BACKUP = [
    ('b1', 'B1', 'KI liefert Tempo, die Fakten prüfen wir selbst'),
    ('b2', 'B2', 'Jeder KI-Schritt ist dokumentiert – und wird geprüft'),
    ('b3', 'B3', 'Gründeraussagen und Studien tragen unsere Persona'),
    ('b4', 'B4', 'Kein Konstrukt erfüllt alle drei Kriterien'),
    ('b5', 'B5', 'Die stärkste Leiter führt von „ohne Zucker“ über Verlässlichkeit zur Verantwortung'),
    ('b6', 'B6', 'Vier Namen, drei Profilfarben, vier Rollen'),
    ('b7', 'B7', 'Modelle aus der Literatur, Fakten aus geprüften Quellen'),
    ('b8', 'B8', 'Jede Quellennummer auf den Folien – hier aufgelöst'),
]
BACKUP_ACHTUNG = {
    'b1': 'Titel „die Fakten prüfen wir selbst“ und „nichts ungeprüft übernommen“ nicht wörtlich vertreten – „Unsere '
          'eigene Prüfung läuft noch.“ Die Aufzählung ist nicht abschließend: KI hat auch Dossier, Ausarbeitungen, die '
          'Präsentation, Name, Beruf und Zitat der Persona sowie die Illustrationen erstellt (F23) – nie „nur Tempo“ '
          'sagen.',
    'b2': '„Vollständig“ gilt nur für Prompts an Claude Code: Abschnitt 3 (andere Tools) enthält nur Elias\' '
          'Prompt-Sammlung, ein Workflow-Skript ist geschwärzt; P13, P14 sind Beispielzeilen (Pille „teils Beispiel“). '
          'Elias\' KI-Nutzung ist belegt (Zeile „E-EK-01–03“, KI-Nachweis E-EK-01 bis 03) – Tool und Prüfung nennt er '
          'selbst, kein Tool raten; Lukas: keine KI. „Belegt“ heißt dokumentiert, nicht von der Gruppe geprüft.',
    'b3': 'Ausnahme: Pain/Gain sind Annahmen im Datenblock. Gründeraussagen immer „laut Mitgründer Jost“ bzw. „laut '
          'Gründer Horsch“ (Selbstauskunft); „95 %“ nie von sich aus nennen; Statista/Kantar beschreiben die '
          'Kategorie, nicht HOLY-Kund:innen.',
    'b4': 'Die Notiz zu Schritt 1 sagt „Coca-Cola Zero knapp vor HOLY“ – stattdessen „gleichauf“ sagen.',
    'b5': 'Vollständig am Stück steht die stärkste Leiter nur bei T2 und T7; nur direkte Verbindungen – keine '
          'vollständige HVM.',
    'b7': '„Geprüfte Quellen“ = Faktenstatus aus den KI-Prüfungen des Dossiers; unsere eigene Prüfung läuft noch. Esch '
          'und Häusel nicht selbst eingesehen – keine Seiten nennen; Kotler fehlt in B7; keine Erlaubnis von HOLY für '
          'das Logo behaupten.',
    'b8': '✔ heißt „von den KI-Prüfungen des Dossiers bestätigt“, nicht „von uns geprüft“; „Firmenquelle“ = '
          'Selbstauskunft; 170 Mio. € sind ✎ – immer „laut Unternehmen“.',
}


def mmss(sek):
    return '%d:%02d' % (sek // 60, sek % 60)


def woerter(t):
    """gesprochene Wörter: ohne Regie in […], (→ …)/(ca. n s) und ohne kursive Zeilen"""
    t = t.replace('**', '')
    while re.search(r'\[[^\[\]]*\]', t):
        t = re.sub(r'\[[^\[\]]*\]', ' ', t)
    t = re.sub(r'\*\([^)]*\)\*|\*[^*]*\*', ' ', t)
    t = re.sub(r'[„“‚‘*▶→–]', ' ', t)
    return len([w for w in t.split() if re.search(r'\w', w)])


def main():
    ziel_md, ziel_html, stand = sys.argv[1], sys.argv[2], sys.argv[3]
    teile_je_folie = {'f01': folie_01(), 'f01b': folie_01b(), 'f02': folie_02()}
    uhr, zeilen_tab, bloecke, gesamt_w = 0, [], [], [0]
    for fid, nr, titel, wer in FOLIEN:
        teile = teile_je_folie.get(fid) or (standard(fid) if fid != 'f12' else [])
        if fid == 'f12':
            k, rest = kopf_und_rest(gesprochen('f12')[0])
            teile = [(0, k, text(rest))]
        soll = zeit(fid)
        optional = fid == 'f01b'
        if not optional:
            uhr += soll
        klicks = max([n for n, _, _ in teile if n is not None] + [0])
        if fid == 'f10':
            klicks_txt = '9 (Schritt 10 nur mit 01b)'
            klicks = 9
        else:
            klicks_txt = str(klicks)
        gesprochen_txt = ' '.join(t for n, _, t in teile if not (fid == 'f10' and n == 10))
        w = woerter(gesprochen_txt)
        ende = '–' if optional or soll == 0 else mmss(uhr)
        sek = round(w / 1.9)
        if not optional and soll:
            gesamt_w[0] += w
        warn = ' ⏱' if soll and sek - soll > 5 else ''
        if fid == 'f08':
            warn = ' + 20–30 s Abstimmung ⏱'
        zeilen_tab.append('| %s | %s | %s | %s | %s | %s | ≈ %s%s |' % (
            nr, wer, mmss(soll) if soll else '–', ende, klicks_txt, w, mmss(sek), warn))
        kopf = '## %s · %s\n\n**Spricht:** %s · **Soll:** %s · **Ende bei:** %s · **Klicks:** %s · **≈ %d Wörter**' % (
            nr, titel, wer, mmss(soll) + (' (optional)' if optional else '') if soll else '– (zählt nicht)', ende,
            klicks_txt, w)
        zeilen = [kopf, '']
        for n, k, t in teile:
            marke = klick(n) if n is not None else '**▶ ohne Klick**'
            k = ' · *%s*' % k if k else ''
            zeilen.append('- %s%s  \n  %s' % (marke, k, t))
        if fid != 'f12':
            zeilen.append('- **▶ Klick → %s**%s' % (WEITER[fid], ('  \n  *%s*' % UEBERGABE[fid]) if fid in UEBERGABE else ''))
        if fid in ACHTUNG:
            zeilen.append('\n' + '\n>\n'.join('> %s' % (x if x.startswith('✂') else '⚠ ' + x) for x in ACHTUNG[fid]))
        bloecke.append('\n'.join(zeilen))

    # Backup
    bk = ['## Backup B1–B8 – nur bei Rückfragen\n\nErreichbar über Folie 12 → Liste „Backup“ (oder **O** → Rubrik '
          '„Backup“). Nie „B“ + Ziffer tippen (B = Schwarzbild). **Z** = zurück ins Backup (nur nach „Zu Folie …“), '
          '**Ende** = Folie 12.\n']
    for fid, nr, titel in BACKUP:
        a = dict(absaetze(fid))
        t = text(a[0])
        m = re.match(r'Wann zeigen\?\s*(.*?)\s*Kernsatz:\s*(.*)$', t)
        wann, kern = m.group(1), m.group(2)
        z = '- **%s · %s** – *%s*  \n  %s' % (nr, titel, wann, kern)
        if fid in BACKUP_ACHTUNG:
            z += '  \n  ⚠ %s' % BACKUP_ACHTUNG[fid]
        bk.append(z)

    md = '''# Redeskript – Fallstudie 1: Brand Persona & Markenidentität (HOLY)

**Kompakt: nur der Redetext je Folie, mit Klicks.** Vortrag Di, 27.10.2026 · 15 Minuten · Stand {stand}\\
Gruppe: Yannick Heisler · Elias Knauber · Lukas Welker · **Entwurf, KI-gestützt erstellt** (KI-Nachweis 171 und 175,
Workflow D31 und D32) · Prüfung durch die Gruppe offen

> Der Redetext ist wörtlich aus den Notizen der Web-Präsentation übernommen (`praesentation/index.html`); maßgeblich
> bleibt die Präsentation. *Kursiv in eckigen Klammern* = Regie; ist sie als Bedingung formuliert („Mit Link:“, „Ohne
> Link:“, „Liegt der Adler vorn:“, „Was Sie genannt haben …“), wird nur der passende Zweig gesprochen. **[fett]** =
> Platzhalter: Wert ablesen und mitsprechen. **▶ Klick n** = vorher einmal klicken (→, Leertaste oder Clicker).
> ⚠ = Stolperstelle, ✂ = darf bei Zeitnot weg. „Ende bei“ = Uhrzeit im Vortrag nach Sollzeit (ohne Folie 01b). Hintergrund,
> Quellen und Antworten auf Rückfragen: `vortragsskript.md`.

## Ablauf auf einen Blick

| Folie | Spricht | Soll | Ende bei | Klicks | Wörter | gesprochen |
|---|---|---|---|---|---|---|
{tab}

**Zeit:** Summe Sollzeit {summe} von 15:00. Die {puffer} bis 15:00 sind kein Spielraum: Der gesprochene Text allein hat
≈ {gw} Wörter ≈ {gz} (1,9 Wörter/s, ohne Folie 12). Mit Ratezeit (01) und 20–30 s Abstimmung (08) sind es
≈ {gz1}–{gz2}, dazu die Übergaben. Kürzungsschwelle in der Generalprobe: 14:15 (LIESMICH §3). ⏱ = gesprochen mehr als
5 s über Soll. Folie 01b ist zurzeit aus.

**Bei Zeitnot weglassen, in dieser Reihenfolge** (Kürzungsvorrat aus `index.html`): 11 Klick 2 „Das schließt auch …“
oder „Nebenbei …“ · 08 Klick 1 „Hier vorgegeben …“ nur auf Nachfrage; Klick 2 „die ‚Squad‘“ und „– Abgleich auf Folie
10“; Abstimmung nicht über 20 s · 08b Klick 2 „deutlich bei Kompetenz,“; Klick 4 „mit unserem Selbstbild“ · 10 Klick 1
„aus Berlin“; Klick 3 „pro Portion“.

{bloecke}

{backup}
'''.format(stand=stand, tab='\n'.join(zeilen_tab), summe=mmss(uhr), puffer=mmss(900 - uhr),
           bloecke='\n\n'.join(bloecke), backup='\n'.join(bk),
           gw='{:,}'.format(gesamt_w[0]).replace(',', '.'), gz=mmss(round(gesamt_w[0] / 1.9)), gz1=mmss(5 * round((gesamt_w[0] / 1.9 + 25) / 5)),
           gz2=mmss(5 * round((gesamt_w[0] / 1.9 + 40) / 5)))
    pathlib.Path(ziel_md).write_text(md, encoding='utf-8')

    fragment = subprocess.run(['pandoc', '-f', 'gfm', '-t', 'html5', '--wrap=none', '--section-divs'], input=md,
                              capture_output=True, text=True, check=True).stdout
    css = f"""
@font-face {{ font-family: Inter; src: url('file://{SCHRIFT}/inter-latin-opsz-normal.woff2') format('woff2'); font-weight: 100 900; }}
@font-face {{ font-family: Inter; src: url('file://{SCHRIFT}/inter-latin-ext-opsz-normal.woff2') format('woff2'); font-weight: 100 900; unicode-range: U+0100-024F, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }}
@font-face {{ font-family: Inter; font-style: italic; src: url('file://{SCHRIFT}/inter-latin-opsz-italic.woff2') format('woff2'); font-weight: 100 900; }}
@font-face {{ font-family: Fraunces; src: url('file://{SCHRIFT}/fraunces-latin-opsz-normal.woff2') format('woff2'); font-weight: 100 900; }}
@page {{ size: A4; margin: 14mm 15mm 16mm 15mm;
  @bottom-left {{ content: "Redeskript Fallstudie 1 · HOLY · Stand {stand} · Entwurf, KI-gestützt"; font: 7.5pt Inter, sans-serif; color: #5E6A72; }}
  @bottom-right {{ content: "Seite " counter(page) " von " counter(pages); font: 7.5pt Inter, sans-serif; color: #5E6A72; }} }}
body {{ font-family: Inter, "Segoe UI", Arial, sans-serif; font-size: 11pt; line-height: 1.42; color: #1F2A30; margin: 0; }}
h1 {{ font-family: Fraunces, Georgia, serif; font-size: 20pt; line-height: 1.15; margin: 0 0 6pt; }}
h2 {{ font-family: Fraunces, Georgia, serif; font-size: 14.5pt; margin: 0 0 4pt; padding: 3pt 6pt; background: #FFF6C2; border-left: 4pt solid #FFE14D; }}
section.level2 {{ break-inside: avoid; margin: 0 0 12pt; }}
section.level2 > p:first-of-type {{ font-size: 9pt; color: #5E6A72; margin: 0 0 4pt; }}
p {{ margin: 0 0 5pt; }}
ul {{ list-style: none; padding-left: 0; margin: 0; }}
li {{ margin: 0 0 5pt; padding-left: 0; break-inside: avoid; }}
li strong {{ color: #8A6A00; }}
li em {{ color: #5E6A72; font-size: 9.5pt; }}
blockquote {{ margin: 4pt 0 0; padding: 3pt 7pt; border-left: 3pt solid #C0392B; background: #FBEDEB; font-size: 9.2pt; }}
blockquote p {{ margin: 0; }}
section#redeskript-fallstudie-1-brand-persona-markenidentität-holy > blockquote, h1 + p + blockquote {{ border-left-color: #D9DEE2; background: #F6F7F8; }}
table {{ border-collapse: collapse; width: 100%; font-size: 9pt; margin: 2pt 0 6pt; }}
th, td {{ border: .5pt solid #D9DEE2; padding: 2pt 4pt; text-align: left; }}
th {{ background: #EEF1F3; }}
code {{ font-size: 8.5pt; }}
"""
    pathlib.Path(ziel_html).write_text(f'<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Redeskript '
                                       f'Fallstudie 1 – HOLY</title><style>{css}</style></head><body>{fragment}</body>'
                                       f'</html>', encoding='utf-8')
    print('Wörter gesamt', len(md.split()), '· Sollzeit', mmss(uhr))


if __name__ == '__main__':
    main()
