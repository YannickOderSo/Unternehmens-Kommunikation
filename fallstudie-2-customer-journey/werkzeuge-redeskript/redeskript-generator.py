#!/usr/bin/env python3
"""Redeskript Fallstudie 2 (Customer Journey, HOLY): Sprechtext je Folie aus praesentation/index.html.

Angepasst aus ki-nachweis/workflows/2026-10-25_redeskript-generator.py (Fallstudie 1, D31) im Auftrag D12
(KI-Nachweis FS2 Nr. 26), KI-gestützt erstellt; Prüfung durch die Gruppe offen.

Quelle des Sprechtexts: die Absätze <p data-schritt="n"> in <aside class="notizen"> je Folie – WÖRTLICH übernommen.
Klicks = Schritte (höchstes data-schritt im Folieninhalt) + Weiterschalten; Sollzeit = data-zeit.
Regie in [ … ] wird kursiv gesetzt und nicht als Wort gezählt; Zeit bei 1,9 Wörtern/s (Planwert, nicht gemessen).
Kontrollpunkte, Reserve und Kürzungssumme werden aus data-zeit gerechnet und gegen gestaltungsplan.md 10.1/10.2 und die
Notizen geprüft (assert): Ändert sich dort etwas, bricht der Lauf ab, statt einen veralteten Text zu erzeugen.
Nacharbeit D12 (08.11.2026, nach Prüfung des Redeskripts): Spot-Hinweise 08, Handzeichen-Spanne, Übergabesätze aus
Gestaltungsplan 9.3, Rechtestatus B8, Kontrollpunkte gerechnet, Backup-Warnhinweise abgesetzt.

Aufruf (aus beliebigem Ordner; alle Pfade relativ zu diesem Skript):
    python3 werkzeuge-redeskript/redeskript-generator.py [--stand 08.11.2026] [--html datei.html] [--ohne-pdf]
Erzeugt ../redeskript.md und ../Fallstudie-2_Redeskript.pdf (über pandoc → HTML → Chromium-Druck, Schriften lokal
aus praesentation/schriften). Chromium: Umgebungsvariable CHROME, sonst /opt/pw-browsers/chromium-*/chrome-linux/chrome,
sonst chromium/google-chrome im PATH.
"""
import argparse, glob, html, os, pathlib, re, shutil, subprocess, sys, tempfile

BASIS = pathlib.Path(__file__).resolve().parent.parent          # fallstudie-2-customer-journey/
INDEX_PFAD = BASIS / 'praesentation' / 'index.html'
PLAN_PFAD = BASIS / 'gestaltungsplan.md'
SCHRIFT = BASIS / 'praesentation' / 'schriften'
ZIEL_MD = BASIS / 'redeskript.md'
ZIEL_PDF = BASIS / 'Fallstudie-2_Redeskript.pdf'
MARKE = 'HOLY'
GRUPPE_GESPROCHEN = 'Yannick Heisler, Elias Knauber und Lukas Welker'
TEMPO = 1.9                                                     # Wörter/s, Planwert aus FS1 (nicht gemessen)
VIDEO_09 = 16                                                   # s, Videobotschaft (Notiz 09)
SPOT_08 = 25                                                    # s, Werbespot optional (Notiz 08, data-zeit enthält ihn)
TIMEBOX_01 = 30                                                 # s, Handzeichen auf 01 (Notiz 01, Plan 9.1)
UEBERGABE_S = 3                                                 # s je Übergabesatz (Schätzung, nicht gemessen)
TOLERANZ = 30                                                   # s, Toleranz der Kontrollpunkte (Plan 10.2: Soll + 0:30)

INDEX = INDEX_PFAD.read_text(encoding='utf-8')
PLAN = PLAN_PFAD.read_text(encoding='utf-8')


# ───────────────────────────── Auslesen aus index.html ─────────────────────────────
def abschnitt(fid):
    m = re.search(r'<section[^>]*\bid="%s"' % fid, INDEX)
    n = re.search(r'<section class="folie', INDEX[m.end():])
    return INDEX[m.start():(m.end() + n.start()) if n else len(INDEX)]


def notizen(fid):
    m = re.search(r'<aside class="notizen">(.*?)</aside>', abschnitt(fid), flags=re.S)
    return m.group(1) if m else ''


def folieninhalt(fid):
    """Folie ohne Notizen und ohne Kommentare (für die Schrittzahl)"""
    s = re.sub(r'<aside class="notizen">.*?</aside>', '', abschnitt(fid), flags=re.S)
    return re.sub(r'<!--.*?-->', '', s, flags=re.S)


def zeit(fid):
    return int(re.search(r'<section[^>]*\bid="%s"[^>]*data-zeit="(\d+)"' % fid, INDEX).group(1))


def schritte(fid):
    return max([int(x) for x in re.findall(r'data-schritt="(\d+)"', folieninhalt(fid))] + [0])


def titel(fid):
    m = re.search(r'<h[12][^>]*>(.*?)</h[12]>', abschnitt(fid), flags=re.S)
    return ' '.join(text(m.group(1)).split())


def absaetze(fid):
    """[(nr, roh)] der data-schritt-Absätze in den Notizen"""
    return [(int(n), re.sub(r'\s+', ' ', p).strip())
            for n, p in re.findall(r'<p data-schritt="(\d+)"[^>]*>(.*?)</p>', notizen(fid), flags=re.S)]


def text(roh):
    """HTML → Klartext, Marke/Gruppe eingesetzt"""
    t = roh.replace('<span data-marke></span>', MARKE).replace('<span data-gruppe></span>', GRUPPE_GESPROCHEN)
    t = re.sub(r'<[^>]+>', '', t)
    return html.unescape(t).strip()


# ───────────────────────────── Aufbereiten ─────────────────────────────
def regie(t):
    """Anweisungen in […] kursiv (verschachtelte Anführungszeichen bleiben drin)"""
    return re.sub(r'\[([^\[\]]*)\]', r'*[\1]*', t)


def woerter(t):
    """gesprochene Wörter: ohne Regie in […] und ohne Markdown-Zeichen"""
    t = t.replace('**', '')
    while re.search(r'\[[^\[\]]*\]', t):
        t = re.sub(r'\[[^\[\]]*\]', ' ', t)
    t = re.sub(r'[„“‚‘*▶→–]', ' ', t)
    return len([w for w in t.split() if re.search(r'\w', w)])


def mmss(sek):
    return '%d:%02d' % (sek // 60, sek % 60)


def saetze(t):
    """Text in Sätze teilen (Abkürzungen wie S., Nr., z. B. bleiben zusammen)"""
    teile, start = [], 0
    for m in re.finditer(r'[.!?](?=\s+[A-ZÄÖÜ„])', t):
        davor = t[max(0, m.start() - 4):m.end()]
        if re.search(r'(\bS|\bNr|\bz\. B|\bca|\bvgl|\bd\. h)\.$', davor):
            continue
        teile.append(t[start:m.end()].strip())
        start = m.end()
    if t[start:].strip():
        teile.append(t[start:].strip())
    return teile


# ───────────────────────────── Folien, Sprecher (VORSCHLAG), Regie ─────────────────────────────
# Sprecherverteilung: NUR ein Vorschlag in Anlehnung an die FS1-Bündel (A: 01–03, B: 04–06, C: 07–09).
# Für Fallstudie 2 sind keine Rollen verteilt (Projektanweisungen im Repository) – die Gruppe entscheidet.
FOLIEN = [('f01', '01', 'Yannick'), ('f02', '02', 'Yannick'), ('f03', '03', 'Yannick'),
          ('f04', '04', 'Lukas'), ('f05', '05', 'Lukas'), ('f06', '06', 'Lukas'),
          ('f07', '07', 'Elias'), ('f08', '08', 'Elias'), ('f09', '09', 'Elias')]
WEITER = {'f01': 'Folie 02', 'f02': 'Folie 03', 'f03': 'Folie 04', 'f04': 'Folie 05', 'f05': 'Folie 06',
          'f06': 'Folie 07', 'f07': 'Folie 08', 'f08': 'Folie 09'}
# Übergabesätze: Vorlage aus Gestaltungsplan 9.3 („[Name]“ dort offen), Namen nur als Vorschlag eingesetzt;
# nicht in index.html, nicht in der Wortzahl, je ca. UEBERGABE_S s. Die Vorlage wird gegen den Plan geprüft.
UEBERGABE = {
    'f03': ('Yannick → Lukas', '… und welchen Weg Marco dabei geht, zeigt Ihnen jetzt [Name] auf der Karte.', 'Lukas'),
    'f06': ('Lukas → Elias', '… wie wir diesen Weg verbessern würden, zeigt [Name].', 'Elias'),
}
# Kontrollpunkte (Plan 10.2): Soll = Ende der Folie nach data-zeit, Toleranz = Soll + TOLERANZ (beides gerechnet)
KONTROLLPUNKT = {'f03': 'Kürzung 1 und 4', 'f05': 'Kürzung 2', 'f07': 'Kürzung 3'}
# Kürzungsvorrat (Plan 10.2; Sekunden werden in den Notizen der jeweiligen Folie geprüft)
KUERZUNG = [(1, 'f02', '02 Mediennutzung nur zeigen, nur Marker 92 % und Kaufkanal', 15),
            (2, 'f06', '06 Plätze 2 und 3 nur zeigen, nur den gelben Weg der Plätze 1', 30),
            (3, 'f07', '07 nur Recherche und Bindung ausführlich', 20),
            (4, 'f03', '03 Farbproben nur zeigen', 10)]

# Stolperstellen je Folie – verdichtet aus den Notizen in index.html, LIESMICH §5/§6 und Gestaltungsplan 10.2.
# „✂“ = Kürzungsvorrat laut Notizen (Kürzung 1–4, Plan 10.2).
ACHTUNG = {
    'f01': ['Timebox 30 s für die drei Handzeichen (mit den Fragen); ohne Hände den Ausweichsatz aus Schritt 0 sagen und '
            'weiterklicken – keine eigene Kauferfahrung der Gruppe behaupten, es gab keinen Selbstversuch (B1). Auf der '
            'Folie stehen keine Zahlen – das Ergebnis greift 09 wieder auf. Das Bild ist ein Werbebild von HOLY '
            '(„Raspberry Raptor“), kein eigenes Foto.',
            'Rückfrage „Ist das eine echte HOLY-Präsentation?“ → Nein, studentische Fallstudie, nicht im Auftrag von '
            'HOLY; Logo und Videobotschaft mit Einverständnis des Gründers (B8).'],
    'f02': ['Marco ist fiktiv (FS1). Das Bild ist ein Symbolbild (Lokführer aus der HOLY-Community), nicht Marco. Die '
            'Statista-Werte beschreiben die Kategorie, nicht HOLY-Kund:innen; die zwei Gruppen nicht mischen.',
            '„Habt ihr Leute befragt?“ → Nein, keine eigene Befragung: Persona aus FS1, Mediendaten und Bewertungen '
            'Dritter (B1, B5).',
            '✂ Kürzung 1 (Plan 10.2): Mediennutzung nur zeigen, nur den Marker 92 % und den Kaufkanal erklären, −15 s.'],
    'f03': ['„aufdringlich“ (~ B21) und „Service gelobt“ (~ B20) stammen aus KI-gestützten Stichproben eines '
            'Recherche-Agenten, nicht aus einer eigenen Codierung – als unsicher behandeln. „Die meiste Kritik betrifft '
            'die Zeit nach dem Kauf“ ist Hypothese (H B25) und teils ein Effekt der Quelle: Bewertungen entstehen fast '
            'nur nach dem Kauf – deshalb „in Bewertungen“. Die Bilder sind Beispiele je Band, alle gleich groß, keine '
            'Gewichtung.',
            '„Wo ist die Mundpropaganda?“ → in der Earned-Zählung (B3); ein ehrliches Bild dafür gibt es nicht.',
            '✂ Kürzung 4 (Plan 10.2): Farbproben nur zeigen, −10 s.'],
    'f04': ['„Zentral“ begründen wir mit der Persona (fiktiv) und dem Onlinekonto (Starter Sets, Mix & Match, Rewards) – '
            'Kanalanteile von HOLY kennen wir nicht. Den Weg haben wir aus Dossier und Abrufen nachgezeichnet, ohne '
            'eigene Testbestellung (B1). Die Bilder sind echte Touchpoints von HOLY und Dritten, nicht unsere Fotos.'],
    'f05': ['Die Urteile sind unsere Bewertung (Hypothese) auf Grundlage der Belege – kein Testkauf, kein Selbstversuch. '
            'Die Frage an Ü2 ist rhetorisch, keine Antwortrunde: Die Antwort ist der Koffein-Check auf 08.',
            'Ü4: alte Danke-Seiten mit totem Link – ob sie noch im Bestellablauf stehen, ist nicht geprüft (✎ T31); '
            '„kein Abo“ ✔ T30 (eine Nachfüll-Erinnerung ist nur unser Vorschlag, X14); Kritik nach dem Kauf H B25, '
            'teils Effekt der Quelle.'],
    'f06': ['Plätze 2 und 3 sind ein Vorschlag der Gruppe (H), nicht in einem Workshop geprüft. „44 Prozent“ lineares '
            'Fernsehen ist ✎ P14. „Warum nicht die Suchmaschine auf Platz 1?“ → Die Antwortseite bedient die Suche, '
            'sie ersetzt sie nicht (B2).',
            '✂ Kürzung 2 (Kontrollpunkt nach 05 überschritten): Plätze 2 und 3 nur zeigen, nur den gelben Weg durch die '
            'Plätze 1 erklären, −30 s.'],
    'f07': ['Die Maßnahmen sind Vorschläge der Gruppe (H); die Vorbilder sind ohne Wirkungsbeleg (YouTube: nur '
            'Unternehmensangabe, nicht unabhängig geprüft). Auf der Folie stehen nur Logos; Belegbilder sind '
            'zurückgehalten. „Warum diese Vorbilder?“ → B6.',
            '✂ Kürzung 3 (Plan 10.2, Kontrollpunkt nach 07 über {kp07_tol}): nur Recherche und Bindung ausführlich, '
            '−20 s; dann weder Live-Demo noch Werbespot (beide nur, wenn nach 07 höchstens {spot_bis} vergangen sind).'],
    'f08': ['**Spot nur zeigen, wenn die Gruppe ihn vorher angehört und abgenickt hat** – das Anhören steht aus (B9, '
            'README `werbevideo/`). **Ton im Beamer-Test prüfen** (LIESMICH §5), ebenso den Ton der Videobotschaft auf 09.',
            'Spot **oder** Live-Demo, nie beides; beide teilen sich die {spot} s auf 08 und laufen nur, wenn nach 07 '
            'höchstens {spot_bis} vergangen sind (Soll {kp07} + Reserve {reserve}); sonst beides weglassen. Den Spot im '
            'Präsentationsfenster per Maus starten, **einmal** klicken (im Referentenfenster gibt es keinen Knopf; wer '
            'an der Maus steht, legt die Gruppe fest). Abbrechen mit Pfeiltaste oder Clicker – liegt der Fokus im '
            'Referentenfenster, blättert der Clicker zugleich auf 09. Esc beendet im Vollbild vermutlich nur das '
            'Vollbild (Modellwissen, in der Generalprobe prüfen). Läuft er nicht: Pfeiltaste, ein Satz Überleitung, '
            'weiter.',
            'Live-Demo: Tab vorher öffnen, auf 150–200 % zoomen, höchstens 25 s, mit Alt+Tab zurück. Liefertermin, '
            'Code-Rabatt, Coins-Stand und Bewertungstexte auf den Seiten sind Beispielwerte.',
            '„Ist das eine echte HOLY-Seite?“ → Nein, Hinweisbalken auf jeder Seite (B8); die Wortmarke mit '
            'Einverständnis des Gründers. „Ist der Spot echte HOLY-Werbung?“ → Nein, studentisches Konzept (B8, B9).',
            '✂ Spot und Live-Demo entfallen, wenn nach 07 mehr als {spot_bis} vergangen sind (−{spot} s, Notiz 08).'],
    'f09': ['Die Kennzahlen sind ein Vorschlag der Gruppe (H), keine gemessenen Werte. Während der Videobotschaft nichts '
            'sprechen; keine Zitate oder Zahlen daraus ohne „laut Gründer“. Das Video wird nicht gekürzt.',
            'Klick 2 zeigt „Fragen?“ und die Sprungliste B1–B9 (im Referentenfenster erst in der Fragerunde). '
            '„Habt ihr selbst getestet/befragt?“ → B1, ehrlich „nein“. Werbespot → 08/B9.',
            '✂ Bei Zeitnot nur ein Fazit-Satz (Plan 10.2).'],
}

BACKUP = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9']
# Kurze Warnhinweise je Backup-Folie, verdichtet aus der zweiten Notiz der Folie
BACKUP_ACHTUNG = {
    'b1': 'Die Dossier-Recherche selbst ist KI-gestützt (Websuche durch Unteragenten, gegengeprüft); auch Abrufe und '
          'Screenshots haben Unteragenten gemacht (D02/D06); die Prüfung durch die Gruppe steht aus. Zahlen nur auf '
          'Nachfrage: 353 Befunde, 193 Bewertungen in den Stichproben A–E.',
    'b2': 'Keine Punktwertung je Kriterium. Die Übung S. 128/129 (Top 2) bleibt im Backup, bis Prof. Stenger anders '
          'antwortet.',
    'b3': 'Die Zuordnung Paid/Owned/Earned ist unsere (H); die Vorlesung ist hier uneinheitlich (✔ L13).',
    'b4': 'Welche Ketten HOLY führen, ist nicht geprüft; Kanalanteile kennen wir nicht.',
    'b5': 'Das anonyme Kurzzitat (REVIEWS.io, 13.10.2026, ✔ B10) nur auf Nachfrage. Stichproben A–E: ein einziger '
          'Codierdurchgang des Agenten (~). Rohdaten der Agenten enthalten teils Vornamen und Wohnorte – nie zeigen oder '
          'vorlesen. „Handelskäufer kommen dort kaum vor“ ist Deutung (H).',
    'b6': 'Status der Vorbilder: 10 ✔, 6 ✎, 1 ~. Wettbewerber mit Koffein-Ratgebern sind keine branchenfremden '
          'Vorbilder.',
    'b7': 'Kanalanteile von HOLY kennen wir nicht – Frage an HOLY und den Gründer.',
    'b8': 'Rechtestatus ist eine Einschätzung, keine Rechtsberatung. Fremdbilder: Veröffentlichung von der Gruppe '
          'beschlossen (KI-Nachweis FS2 Nr. 17), keine Genehmigung der Rechteinhaber eingeholt – keine Genehmigung '
          'behaupten. Logo: mit Einverständnis (Nr. 12); Videobotschaft: mit Zustimmung des Gründers (Nr. 18); '
          'Werbespot: studentisches Konzept, keine Werbung der HOLY Softdrinks GmbH; Stimme, Musik und Geräusche '
          'KI-generiert (Nr. 24 / D11); HOLY-Bilder darin ohne Genehmigung der Rechteinhaber (Nr. 17).',
    'b9': 'Die Spalte „Prüfung“ zeigt den Stand vom 08.11.2026 – die Prüfung durch die Gruppe steht aus.',
}


def teile_folie(fid):
    """[(nr, md_text)] je Schritt; Sprechtext wörtlich, Regie kursiv, auf 08 Reserve/Spot in eigenen Zeilen"""
    teile = []
    for n, roh in absaetze(fid):
        t = text(roh)
        if fid == 'f08' and n == 2:
            assert t.count(' [Spot ODER') == 1 and t.count(' [Spot läuft') == 1, 'Notiz 08 Schritt 2 geändert'
            t = t.replace(' [Spot ODER', '\n[Spot ODER').replace(' [Spot läuft', '\n[Spot läuft')
        if fid == 'f01' and n == 0:
            t = t.replace(' [Ergebnis frei nennen', '\n[Ergebnis frei nennen')
        teile.append((n, regie(t)))
    return teile


# ───────────────────────────── Planwerte prüfen ─────────────────────────────
def plan_pruefen(ende, summe):
    """Gerechnete Kontrollpunkte, Ziel und Kürzungen gegen gestaltungsplan.md und Notizen prüfen (Abbruch bei Abweichung)"""
    ziel = re.search(r'^\| kumuliert \|.*?Reserve = \*\*(\d+):(\d\d)\*\*', PLAN, flags=re.M)
    assert ziel, 'Gestaltungsplan 10.1: Zeile „kumuliert … Reserve = **m:ss**“ nicht gefunden'
    ziel = int(ziel.group(1)) * 60 + int(ziel.group(2))
    for fid in KONTROLLPUNKT:
        nr = fid[1:]
        z = re.search(r'^\| nach %s \| (\d+:\d\d) \| (\d+:\d\d) \|(.*)$' % nr, PLAN, flags=re.M)
        assert z, 'Gestaltungsplan 10.2: Kontrollpunkt nach %s fehlt' % nr
        assert (z.group(1), z.group(2)) == (mmss(ende[fid]), mmss(ende[fid] + TOLERANZ)), (
            'Kontrollpunkt nach %s: Plan %s/%s, gerechnet %s/%s' % (nr, z.group(1), z.group(2), mmss(ende[fid]),
                                                                   mmss(ende[fid] + TOLERANZ)))
        if fid == 'f07':
            spot_bis = mmss(ende[fid] + ziel - summe)
            assert 'bis %s' % spot_bis in z.group(3), 'Plan 10.2: Spot-Grenze %s nicht in der Zeile nach 07' % spot_bis
            assert 'höchstens %s vergangen' % spot_bis in notizen('f08'), 'Notiz 08: Spot-Grenze %s fehlt' % spot_bis
    k = re.search(r'Zusammen\s+−(\d+) s', PLAN)
    assert k and int(k.group(1)) == sum(x[3] for x in KUERZUNG), 'Plan 10.2: Summe der Kürzungen weicht ab'
    for nr, fid, _, sek in KUERZUNG:
        assert re.search(r'Kürzung %d\b.*?−%d s' % (nr, sek), notizen(fid), flags=re.S), 'Notiz %s: Kürzung %d' % (fid, nr)
    for fid, (_, vorlage, _) in UEBERGABE.items():
        assert vorlage in PLAN, 'Plan 9.3: Übergabesatz für %s nicht (mehr) im Plan' % fid
    assert 'Timebox %d s' % TIMEBOX_01 in notizen('f01'), 'Notiz 01: Timebox geändert'
    return ziel


# ───────────────────────────── Zusammenbau ─────────────────────────────
def bauen(stand):
    # erster Durchlauf: Sollzeiten → Kontrollpunkte, Reserve (alles aus data-zeit)
    ende, uhr = {}, 0
    for fid, _, _ in FOLIEN:
        uhr += zeit(fid)
        ende[fid] = uhr
    summe_soll = uhr
    ziel = plan_pruefen(ende, summe_soll)
    reserve = ziel - summe_soll
    werte = {'kp07': mmss(ende['f07']), 'kp07_tol': mmss(ende['f07'] + TOLERANZ), 'reserve': mmss(reserve),
             'spot_bis': mmss(ende['f07'] + reserve), 'spot': SPOT_08}

    tab, bloecke, summe_w, summe_klicks, spot_w, w01_0, w01_rest, w08 = [], [], 0, 0, 0, 0, 0, 0
    for fid, nr, wer in FOLIEN:
        teile = teile_folie(fid)
        soll = zeit(fid)
        s = schritte(fid)
        assert [n for n, _ in teile] == list(range(s + 1)), (fid, [n for n, _ in teile], s)
        klicks = s + (1 if fid in WEITER else 0)
        summe_klicks += klicks
        w = woerter(' '.join(t for _, t in teile))
        summe_w += w
        sek = round(w / TEMPO)
        extra, w_txt, gespr = '', str(w), '≈ %s' % mmss(sek)
        if fid == 'f01':
            w01_0 = woerter(teile[0][1])
            w01_rest = w - w01_0
            extra = ' + Warten auf Handzeichen'
        if fid == 'f08':
            spot_satz = re.search(r'\*\[Spot ODER[^\]]*\]\*(.*?)\*\[Spot läuft', teile[2][1], flags=re.S).group(1)
            spot_w = woerter(spot_satz)
            w08 = w
            w_txt = '%d (davon %d nur mit Spot)' % (w, spot_w)
            gespr = 'ohne Spot ≈ %s · mit Spot ≈ %s + 0:%02d' % (mmss(round((w - spot_w) / TEMPO)), mmss(sek), SPOT_08)
        if fid == 'f09':
            extra = ' + 0:%02d Video' % VIDEO_09
        zusatz = (SPOT_08 if fid == 'f08' else 0) + (VIDEO_09 if fid == 'f09' else 0)
        warn = ' ⏱' if sek + zusatz - soll > 5 else ''
        kp = ' · KP' if fid in KONTROLLPUNKT else ''
        tab.append('| %s | %s | %s | %s%s | %d | %s | %s%s%s |' % (
            nr, wer, mmss(soll), mmss(ende[fid]), kp, klicks, w_txt, gespr, extra, warn))
        wkopf = '**≈ %d Wörter**' % w
        if fid == 'f08':
            wkopf = '**≈ %d Wörter** (ohne Spot-Satz %d)' % (w, w - spot_w)
        kopf = ('## %s · %s\n\n**Spricht (Vorschlag):** %s · **Soll:** %s · **Ende bei:** %s · **Klicks:** %d · %s'
                % (nr, titel(fid), wer, mmss(soll), mmss(ende[fid]), klicks, wkopf))
        zeilen = [kopf, '']
        for n, t in teile:
            marke = '**▶ Folie erscheint**' if n == 0 else '**▶ Klick %d**' % n
            wn = woerter(t)
            koerper = '  \n  '.join(t.split('\n'))
            if fid == 'f08' and n == 2:
                mass = '≈ %d Wörter, ≈ %d s; mit Spot + %d Wörter + 0:%02d' % (
                    wn - spot_w, round((wn - spot_w) / TEMPO), spot_w, SPOT_08)
            else:
                mass = '≈ %d Wörter, ≈ %d s' % (wn, round(wn / TEMPO))
            zeilen.append('- %s · *%s*  \n  %s' % (marke, mass, koerper))
        if fid in UEBERGABE:
            richtung, vorlage, name = UEBERGABE[fid]
            zeilen.append('- **▶ Übergabe %s** *(Satz aus Gestaltungsplan 9.3, Name = Vorschlag; nicht in der '
                          'Präsentation, nicht in der Wortzahl)*  \n  „%s“  \n  *[während des Satzes den Clicker '
                          'übergeben; die nächste Person klickt weiter]*' % (richtung, vorlage.replace('[Name]', name)))
        if fid in WEITER:
            weiter = '- **▶ Klick %d → %s**' % (klicks, WEITER[fid])
            if fid in KONTROLLPUNKT:
                handlung = KONTROLLPUNKT[fid]
                if fid == 'f07':
                    weiter += ('  \n  *[Kontrollpunkt: Soll %s · Spot oder Live-Demo auf 08 nur bis %s (Soll + Reserve '
                               '%s) · ab %s (Toleranz) %s, dann weder Spot noch Live-Demo]*' % (
                                   mmss(ende[fid]), werte['spot_bis'], werte['reserve'], werte['kp07_tol'], handlung))
                else:
                    weiter += '  \n  *[Kontrollpunkt: Soll %s, Toleranz %s – sonst %s]*' % (
                        mmss(ende[fid]), mmss(ende[fid] + TOLERANZ), handlung)
            zeilen.append(weiter)
        else:
            zeilen.append('- **▶ Fragerunde** *[alle; Antwort kurz, Kern zuerst, nicht raten; Backup über die '
                          'Sprungliste]*')
        if fid in ACHTUNG:
            zeilen.append('\n' + '\n>\n'.join('> %s' % (x if x.startswith('✂') else '⚠ ' + x).format(**werte)
                                              for x in ACHTUNG[fid]))
        bloecke.append('\n'.join(zeilen))

    # Backup
    bk = ['## Backup B1–B9 – nur bei Rückfragen\n\nErreichbar über die Sprungliste auf Folie 09 (Klick 2, „Fragen?“) '
          'oder **O** → Backup. Nie „B“ + Ziffer tippen (**B** = Schwarzbild). **Z** = zurück ins Backup nach einem '
          'Sprung. Es antwortet, wer gefragt wird oder den Block gesprochen hat (Vorschlag). Antwortsätze wörtlich aus '
          'dem „Kernsatz“ der Notizen (höchstens drei Sätze; *[…]* = weitere Sätze in den Notizen). Die Kästen mit ⚠ '
          'werden nicht vorgelesen.\n']
    for fid in BACKUP:
        a = dict(absaetze(fid))
        t = text(a[0])
        m = re.match(r'Wann zeigen\?\s*(.*?)\s*Kernsatz:\s*(.*)$', t)
        wann, kern = m.group(1), m.group(2)
        s = saetze(kern)
        antwort = ' '.join(s[:3]) + (' *[…]*' if len(s) > 3 else '')
        z = '- **%s · %s** – *Wann zeigen: %s*  \n  %s' % (fid.upper(), titel(fid), wann, antwort)
        if fid in BACKUP_ACHTUNG:
            z += '\n\n  > ⚠ %s' % BACKUP_ACHTUNG[fid]
        bk.append(z + '\n')

    gz = round(summe_w / TEMPO)
    gz2 = round((summe_w - spot_w) / TEMPO)
    t01_0, t01_rest = round(w01_0 / TEMPO), round(w01_rest / TEMPO)
    warten = max(0, TIMEBOX_01 - t01_0)               # Warten auf Hände, wenn die Timebox die Fragen einschließt
    ueb = UEBERGABE_S * len(UEBERGABE)
    mit_spot = gz + VIDEO_09 + SPOT_08 + ueb
    ohne_spot = gz2 + VIDEO_09 + ueb
    f01_voll = TIMEBOX_01 + t01_rest
    t08_ohne = round((w08 - spot_w) / TEMPO)
    t08_mit = round(w08 / TEMPO) + SPOT_08
    kuerz = ' · '.join('(%d) %s, −%d s' % (nr, txt, sek) for nr, _, txt, sek in KUERZUNG)
    md = '''# Redeskript – Fallstudie 2: Customer Journey (HOLY)

**Sprechtext je Folie, mit Klicks.** Vortrag Di, 10.11.2026 · 15 Minuten · Stand {stand}\\
Gruppe: Yannick Heisler · Elias Knauber · Lukas Welker · **KI-gestützt erstellt** (KI-Nachweis FS2 Nr. 26, D12) ·
Prüfung durch die Gruppe offen

> **Sprecherverteilung = Vorschlag.** Für Fallstudie 2 sind die Rollen nicht verteilt. Der Vorschlag lehnt sich an die
> Bündel aus Fallstudie 1 an: 01–03 Yannick, 04–06 Lukas, 07–09 Elias. Die Gruppe entscheidet. Die Übergabesätze
> stammen aus dem Gestaltungsplan (9.3); nur die Namen darin sind Vorschlag (sie stehen nicht in der Präsentation und
> zählen nicht in den Wörtern).
>
> Der Sprechtext ist wörtlich aus den Notizen der Web-Präsentation übernommen (`praesentation/index.html`, Absätze
> mit `data-schritt`); maßgeblich bleibt die Präsentation. *Kursiv in eckigen Klammern* = Regie, wird nicht gesprochen
> (ist sie als Bedingung formuliert, nur den passenden Zweig sprechen). **▶ Klick n** = vorher einmal klicken (→,
> Leertaste oder Clicker). ⚠ = Stolperstelle, ✂ = darf bei Zeitnot weg (beides KI-gestützt verdichtet aus Notizen,
> `LIESMICH.md` und Gestaltungsplan 10.2). „Ende bei“ = Uhrzeit im Vortrag nach Sollzeit (`data-zeit`); KP =
> Kontrollpunkt. Belege und Antworten auf Rückfragen: Notizen der Folien (Referentenansicht **P**). Es gab keine
> eigene Erhebung – nichts davon als Selbstversuch, Interview oder Workshop ansprechen (B1).
>
> **Werbespot auf 08:** Das Anhören durch die Gruppe steht aus (README `werbevideo/`, B9). Nur zeigen, wenn die Gruppe
> ihn vorher angehört und abgenickt hat; Ton im Beamer-Test prüfen (`LIESMICH.md` §5).

## Ablauf auf einen Blick

| Folie | Spricht (Vorschlag) | Soll | Ende bei | Klicks | Wörter | gesprochen |
|---|---|---|---|---|---|---|
{tab}
| **Summe** | | **{summe}** | | **{klicks}** | **{gw}** | ≈ {gzt} + Video, Spot, Handzeichen |

*„Ende bei“ = kumulierte Sollzeit ohne Zuschlag für Handzeichen, Übergaben und Rückgriffe. „gesprochen“ = Wörter bei
1,9 Wörtern/s; auf 01 einschließlich der drei Fragen, ohne das Warten auf die Hände.*

**Zeit:** Summe Sollzeit {summe} von 15:00 (Soll von 08 enthält 0:{spot:02d} Werbespot). Der Sprechtext allein hat
≈ {gw} Wörter ≈ {gzt} bei 1,9 Wörtern/s (Planwert aus FS1, **nicht gemessen**); ohne den Spot-Satz auf 08 ≈ {gw2}
Wörter ≈ {gzt2}. Dazu kommen 0:{video:02d} Videobotschaft, optional 0:{spot:02d} Spot und die zwei Übergaben (je ca.
{ueb_s} s, geschätzt). **Handzeichen auf 01:** Die drei Fragen sind schon gesprochene Wörter (Schritt 0, ≈ {t01_0} s);
die Timebox von {timebox} s gilt hier für Fragen und Handzeichen zusammen, das Warten auf die Hände kommt also mit 0 bis
{warten} s dazu (Lesart des Skripts, KI-gestützt – die Gruppe legt fest, wie die Timebox gemeint ist). Ergibt mit Spot
≈ {mit_spot}–{mit_spot_max}, ohne Spot ≈ {ohne_spot}–{ohne_spot_max}; Live-Demo statt Spot wie ohne Spot plus
höchstens 0:{spot:02d}. Folie 08 allein: ohne Spot ≈ {t08_ohne} s, mit Spot ≈ {t08_mit} s plus Öffnen und Schließen
(`LIESMICH.md` §3: ≈ 105 s).

**Reserve:** Bis {ziel} (Plan 10.1: 11:50 + 0:40 Reserve) bleiben nach Soll nur {reserve} – **Spot oder Live-Demo, nie
beides**, und beide nur, wenn nach 07 höchstens {spot_bis} vergangen sind. Plan 10.1 hatte die Handzeichen aus der
Reserve genommen; diese Reserve gibt es seit dem Spot kaum noch. Nach Wortzahl passen volle Timebox und Schritt 1 von 01
(≈ {f01_voll} s) {f01_passt} die {soll01} s von 01 – aber nur bei 1,9 Wörtern/s. Laufen die Handzeichen länger oder
ist das Tempo langsamer, ist die Reserve weg: im Zweifel weder Spot noch Live-Demo. Bis 15:00 bleiben {bis15} für
Übergänge und Fragen. ⏱ = gesprochen mehr als 5 s über Soll.

**Kontrollpunkte** (Gestaltungsplan 10.2, Werte aus `data-zeit` gerechnet und gegen den Plan geprüft): {kp_text}.

**Kürzungsvorrat (✂, aus den Notizen):** {kuerz} · 08 Spot bzw. Live-Demo entfällt, −{spot} s · 09 nur ein
Fazit-Satz (Video nicht kürzen). Zusammen ohne 09 −{kuerz_summe} s. *Hinweis (KI-gestützte Ableitung, von der Gruppe
zu prüfen):* Kürzung 1 (02) und 4 (03) liegen vor dem Kontrollpunkt nach 03, Kürzung 3 auf 07 vor dem Kontrollpunkt
nach 07 – zeigt die Generalprobe, dass die Zeit nicht reicht, diese Kürzungen vorab fest einplanen.

{bloecke}

{backup}
'''.format(stand=stand, tab='\n'.join(tab), summe=mmss(summe_soll), klicks=summe_klicks,
           gw='{:,}'.format(summe_w).replace(',', '.'), gzt=mmss(gz),
           gw2='{:,}'.format(summe_w - spot_w).replace(',', '.'), gzt2=mmss(gz2),
           video=VIDEO_09, spot=SPOT_08, ueb_s=UEBERGABE_S, t01_0=t01_0, timebox=TIMEBOX_01, warten=warten,
           mit_spot=mmss(mit_spot), mit_spot_max=mmss(mit_spot + warten),
           ohne_spot=mmss(ohne_spot), ohne_spot_max=mmss(ohne_spot + warten),
           t08_ohne=t08_ohne, t08_mit=t08_mit, ziel=mmss(ziel), reserve=werte['reserve'],
           spot_bis=werte['spot_bis'], f01_voll=f01_voll, soll01=zeit('f01'),
           f01_passt='gerade noch in' if f01_voll <= zeit('f01') else 'nicht mehr in',
           bis15=mmss(900 - summe_soll),
           kp_text=' · '.join(
               'nach %s Soll %s, Toleranz %s → %s' % (f[1:], mmss(ende[f]), mmss(ende[f] + TOLERANZ), h)
               + (', ab dann weder Spot noch Live-Demo (beide nur bis %s)' % werte['spot_bis'] if f == 'f07' else '')
               for f, h in KONTROLLPUNKT.items()),
           kuerz=kuerz, kuerz_summe=sum(x[3] for x in KUERZUNG) + SPOT_08,
           bloecke='\n\n'.join(bloecke), backup='\n'.join(bk))
    info = {'soll': summe_soll, 'woerter': summe_w, 'klicks': summe_klicks, 'spot_woerter': spot_w,
            'mit_spot': (mit_spot, mit_spot + warten), 'ohne_spot': (ohne_spot, ohne_spot + warten),
            'reserve': reserve, 't08': (t08_ohne, t08_mit)}
    return md, info


CSS = """
@font-face {{ font-family: Inter; src: url('{s}/inter-latin-opsz-normal.woff2') format('woff2'); font-weight: 100 900; }}
@font-face {{ font-family: Inter; src: url('{s}/inter-latin-ext-opsz-normal.woff2') format('woff2'); font-weight: 100 900; unicode-range: U+0100-024F, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }}
@font-face {{ font-family: Inter; font-style: italic; src: url('{s}/inter-latin-opsz-italic.woff2') format('woff2'); font-weight: 100 900; }}
@font-face {{ font-family: Inter; font-style: italic; src: url('{s}/inter-latin-ext-opsz-italic.woff2') format('woff2'); font-weight: 100 900; unicode-range: U+0100-024F, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }}
@font-face {{ font-family: Fraunces; src: url('{s}/fraunces-latin-opsz-normal.woff2') format('woff2'); font-weight: 100 900; }}
@font-face {{ font-family: Fraunces; src: url('{s}/fraunces-latin-ext-opsz-normal.woff2') format('woff2'); font-weight: 100 900; unicode-range: U+0100-024F, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }}
@page {{ size: A4; margin: 14mm 15mm 16mm 15mm;
  @bottom-left {{ content: "Redeskript Fallstudie 2 · HOLY · Stand {stand} · KI-gestützt, Prüfung offen · Sprecher: Vorschlag"; font: 7.5pt Inter, sans-serif; color: #5C5547; }}
  @bottom-right {{ content: "Seite " counter(page) " von " counter(pages); font: 7.5pt Inter, sans-serif; color: #5C5547; }} }}
body {{ font-family: Inter, "Segoe UI", Arial, sans-serif; font-size: 11pt; line-height: 1.42; color: #1D1D1B; margin: 0; }}
h1 {{ font-family: Fraunces, Georgia, serif; font-size: 20pt; line-height: 1.15; margin: 0 0 6pt; }}
h2 {{ font-family: Fraunces, Georgia, serif; font-size: 14pt; line-height: 1.2; margin: 0 0 4pt; padding: 3pt 6pt; background: #FFF3B0; border-left: 4pt solid #FFD007; break-after: avoid; }}
section.level2 {{ margin: 0 0 12pt; break-inside: avoid; }}
section#ablauf-auf-einen-blick, section[id^="backup"] {{ break-inside: auto; }}
section.level2 > h2 + p {{ font-size: 9pt; color: #5C5547; margin: 0 0 4pt; break-after: avoid; }}
p {{ margin: 0 0 5pt; }}
ul {{ list-style: none; padding-left: 0; margin: 0; }}
li {{ margin: 0 0 5pt; padding-left: 0; break-inside: avoid; }}
li strong {{ color: #6B5300; }}
li em {{ color: #5C5547; font-size: 9.5pt; }}
blockquote {{ margin: 4pt 0 0; padding: 3pt 7pt; border-left: 3pt solid #C0392B; background: #FBEDEB; font-size: 9.2pt; break-inside: avoid; }}
blockquote p {{ margin: 0 0 2pt; }}
li blockquote {{ margin: 3pt 0 0; padding: 2pt 6pt; font-size: 9pt; color: #3A352C; }}
li > p {{ margin: 0 0 2pt; }}
section.level1 > blockquote {{ border-left-color: #1D1D1B; background: #F3EDE1; }}
table {{ border-collapse: collapse; width: 100%; font-size: 9pt; margin: 2pt 0 6pt; break-inside: avoid; }}
th, td {{ border: .5pt solid #CBC2B0; padding: 2pt 4pt; text-align: left; vertical-align: top; }}
th:nth-child(n+3):nth-child(-n+5), td:nth-child(n+3):nth-child(-n+5) {{ white-space: nowrap; }}
th {{ background: #EAE3D5; }}
tr:last-child td {{ background: #F3EDE1; }}
code {{ font-size: 8.5pt; }}
"""


def chrome_finden():
    if os.environ.get('CHROME'):
        return os.environ['CHROME']
    for p in sorted(glob.glob('/opt/pw-browsers/chromium-*/chrome-linux/chrome'), reverse=True):
        return p
    for n in ('chromium', 'chromium-browser', 'google-chrome', 'chrome'):
        if shutil.which(n):
            return shutil.which(n)
    sys.exit('Kein Chromium gefunden – Umgebungsvariable CHROME setzen.')


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--stand', default='08.11.2026')
    ap.add_argument('--html', help='Zwischen-HTML hier ablegen (sonst temporär)')
    ap.add_argument('--ohne-pdf', action='store_true')
    arg = ap.parse_args()

    md, info = bauen(arg.stand)
    ZIEL_MD.write_text(md, encoding='utf-8')
    print('Markdown:', ZIEL_MD.relative_to(BASIS.parent), '· Sollzeit', mmss(info['soll']), '· Klicks', info['klicks'],
          '· gesprochene Wörter', info['woerter'], '(davon Spot-Satz %d)' % info['spot_woerter'],
          '· mit Spot %s–%s, ohne %s–%s' % tuple(mmss(x) for x in info['mit_spot'] + info['ohne_spot']),
          '· Reserve', mmss(info['reserve']), '· 08 ohne/mit Spot %d/%d s' % info['t08'])
    if arg.ohne_pdf:
        return

    fragment = subprocess.run(['pandoc', '-f', 'gfm', '-t', 'html5', '--wrap=none', '--section-divs'], input=md,
                              capture_output=True, text=True, check=True).stdout
    css = CSS.format(s=SCHRIFT.as_uri(), stand=arg.stand)
    seite = ('<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Redeskript Fallstudie 2 – HOLY</title>'
             '<style>%s</style></head><body>%s</body></html>' % (css, fragment))
    with tempfile.TemporaryDirectory() as tmp:
        ziel_html = pathlib.Path(arg.html).resolve() if arg.html else pathlib.Path(tmp) / 'redeskript.html'
        ziel_html.write_text(seite, encoding='utf-8')
        pdf_tmp = pathlib.Path(tmp) / 'redeskript.pdf'
        subprocess.run([chrome_finden(), '--headless', '--no-sandbox', '--disable-gpu', '--no-pdf-header-footer',
                        '--run-all-compositor-stages-before-draw', '--virtual-time-budget=5000',
                        '--allow-file-access-from-files', '--user-data-dir=%s' % (pathlib.Path(tmp) / 'profil'),
                        '--print-to-pdf=%s' % pdf_tmp, ziel_html.as_uri()],
                       check=True, capture_output=True)
        shutil.copyfile(pdf_tmp, ZIEL_PDF)
    print('PDF:', ZIEL_PDF.relative_to(BASIS.parent))


if __name__ == '__main__':
    main()
