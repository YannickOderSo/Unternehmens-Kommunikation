export const meta = {
  name: 'redeskript-pruefung',
  description: 'Kompaktes Redeskript (Fallstudie 1) von drei Prüfern prüfen lassen, Befunde adversarial gegenprüfen',
  phases: [
    { title: 'Prüfen', detail: 'Wortlaut, Inhalt/Regeln, Praxis' },
    { title: 'Gegenprüfen', detail: 'je Prüfer ein Widerleger' },
  ],
}

const SP = '/tmp/claude-0/-home-user-Unternehmens-Kommunikation/002eded1-dc13-5a62-bf74-88c0d7931eff/scratchpad/redeskript'
const FS = '/home/user/Unternehmens-Kommunikation/fallstudie-1-brand-persona'

const GEMEINSAM = `Kontext: Studentische Gruppe (Yannick Heisler, Elias Knauber, Lukas Welker) hält am Di, 27.10.2026 einen 15-Minuten-Vortrag über die Marke HOLY (Fallstudie 1, Brand Persona & Markenidentität). Claude hat daraus ein KOMPAKTES REDESKRIPT erzeugt: nur der Redetext je Folie mit Klicks, Übergaben, Sollzeit und kurzen Warnhinweisen (⚠), plus Kernsätze der Backup-Folien B1–B8. Der Redetext wurde per Skript wörtlich aus den Notizen der Web-Präsentation übernommen (Absätze <p data-schritt="n"> und <p class="gesprochen"> in index.html); bei Folie 01, 01b und 02 nur die wörtliche Rede in „…“ mit knapper Regie.

Dateien:
- Prüfling: ${SP}/redeskript.md (Markdown) und ${SP}/redeskript.pdf (13 Seiten, zum Ausdrucken; mit dem Read-Werkzeug und dem Parameter pages lesbar)
- Generator: ${SP}/bauen_redeskript.py
- Quelle des Redetexts: ${FS}/praesentation/index.html (Sections id="f01" … "f12", "b1" … "b8"; Notizen in <aside class="notizen">; Sollzeit im Attribut data-zeit)
- Ausführliches Vortragsskript mit Fallstricken: ${FS}/vortragsskript.md
- Fragerunde: ${FS}/fragerunde.md · Bedienung/Zeitplan: ${FS}/praesentation/LIESMICH.md (§3 Zeit, §12) · Klicklogik: ${FS}/praesentation/js/deck.js

Regeln: Nur lesen, nichts ändern. Jede Behauptung mit Fundstelle belegen (Datei + Zeile oder wörtliches Zitat). Nicht unter /root/.claude/uploads lesen; das Transkript der Gründerbefragung und Statista-PDFs nicht öffnen. Der Redetext selbst soll wörtlich der Präsentation entsprechen – Korrekturvorschläge am gesprochenen Wortlaut sind nur als ⚠-Hinweis oder als Hinweis „index.html ändern“ zulässig, nicht als stillschweigende Umformulierung. Melde nur echte Probleme; keine Geschmacksfragen. Wenn alles stimmt, gib eine leere Liste zurück.`

const BEFUNDE = {
  type: 'object',
  properties: {
    befunde: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string', description: 'kurz, z. B. W1, I3, P2' },
          schwere: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
          stelle: { type: 'string', description: 'Folie/Abschnitt im Redeskript' },
          problem: { type: 'string' },
          beleg: { type: 'string', description: 'Fundstellen mit Zitat' },
          korrektur: { type: 'string', description: 'konkreter Wortlaut der Korrektur im Redeskript oder Generator' },
        },
        required: ['id', 'schwere', 'stelle', 'problem', 'beleg', 'korrektur'],
      },
    },
    geprueft: { type: 'string', description: 'was genau geprüft wurde (Umfang)' },
  },
  required: ['befunde', 'geprueft'],
}

const URTEILE = {
  type: 'object',
  properties: {
    urteile: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          bestaetigt: { type: 'boolean' },
          begruendung: { type: 'string', description: 'mit Fundstelle' },
          korrektur_angepasst: { type: 'string', description: 'falls die vorgeschlagene Korrektur selbst falsch/unvollständig ist, die bessere; sonst leer' },
        },
        required: ['id', 'bestaetigt', 'begruendung', 'korrektur_angepasst'],
      },
    },
  },
  required: ['urteile'],
}

const PRUEFER = [
  {
    key: 'wortlaut',
    prompt: `${GEMEINSAM}

Dein Prüfauftrag: WORTLAUT UND KLICKS. Vergleiche für JEDE Hauptfolie (01, 01b, 02, 03, 04, 05, 05b, 06, 07, 08, 08b, 09, 09b, 10, 11, 12) jeden gesprochenen Satz im Redeskript mit den Absätzen data-schritt bzw. class="gesprochen" in index.html: Fehlt etwas, ist etwas hinzugekommen, verändert, in der falschen Reihenfolge oder am falschen Klick? Ersetzungen: <span data-marke></span> = „HOLY“, <span data-gruppe></span> = Namen der Gruppe. Prüfe auch: Klickzahl je Folie (stimmt sie mit der Logik in deck.js und den Notizen, z. B. Folie 01 „Klick 1 von 3“, Folie 02 sieben Klicks, Folie 10 Schritt 10 nur mit 01b?), die Tabelle „Ablauf auf einen Blick“ (Soll = data-zeit, „Ende bei“ = kumulierte Sollzeit ohne 01b, Summe 14:05), die Übergaben zwischen Sprecher:innen (Abgleich mit LIESMICH §3 und den Kopfzeilen „Spricht:“ in vortragsskript.md) und die Kernsätze der Backup-Folien (wörtlich aus Schritt 0 nach „Kernsatz:“). Weggelassene <i>-Notizen sind gewollt, außer sie enthalten etwas, das gesprochen werden muss.`,
  },
  {
    key: 'inhalt',
    prompt: `${GEMEINSAM}

Dein Prüfauftrag: INHALT, REGELN UND STOLPERSTELLEN. Lies jeden gesprochenen Satz als Prüfer:in (Prof. Stenger) und frage: Ist der Satz nach dem aktuellen Stand (vortragsskript.md – Abschnitte „Fallstricke“, fragerunde.md, Dossier recherche/holy-recherche.md, markenkompetenz.md, buendel-b/auswertung/*.csv) korrekt und sicher? Wo braucht der Redetext einen ⚠-Hinweis, der fehlt (z. B. veraltete Formulierungen, Gründeraussagen ohne „laut Gründer“, Aussagen über Befragte ohne „KI-simuliert“, Zahlen ohne Bezug)? Sind die vorhandenen ⚠-Hinweise sachlich richtig, vollständig und knapp? Projektregeln: Gründer Mathias Horsch immer als Selbstauskunft („laut Gründer“), „95 %“ nie von sich aus; KI-simulierte Befragung immer „KI-simuliert, 8 fiktive Befragte, keine echten Interviews“; keine Zahl ohne Quelle; Modellbegriffe nach Standardliteratur. Prüfe ebenso die Backup-Kernsätze und ihre ⚠.`,
  },
  {
    key: 'praxis',
    prompt: `${GEMEINSAM}

Dein Prüfauftrag: PRAXISTAUGLICHKEIT AUF DER BÜHNE UND ZEIT. Lies das PDF (${SP}/redeskript.pdf, alle 13 Seiten, mit Read und pages) und das Markdown. Frage: Kann eine Person, die die Folie nicht gebaut hat, damit sicher vortragen? Sind Regie, Klicks und Übergaben eindeutig (z. B. Folie 08 mit/ohne Link der Live-Umfrage, Platzhalter [x %]/[Name], Folie 01b optional, Folie 10 Schritt 10)? Sind Folien sauber auf Seiten verteilt (kein Block über Seitenumbruch zerrissen, lesbare Schriftgröße)? Fehlt etwas, das man kurz vor/auf der Bühne braucht und das in eine kompakte Fassung gehört (z. B. offene Sprecherfrage 06–08b, Kürzungskandidaten bei Zeitnot laut LIESMICH §3, Tasten für Notfälle)? Stimmen die Wortzahlen ungefähr mit den Sollzeiten (Projektwert ca. 114 Wörter/Minute: 1.614 Wörter ≈ 14:09) – wo wird es zu knapp? Bleib kompakt: Vorschläge, die das Skript wesentlich verlängern, nur, wenn sie wirklich nötig sind.`,
  },
]

const ergebnisse = await pipeline(
  PRUEFER,
  (p) => agent(p.prompt, { label: `pruefen:${p.key}`, phase: 'Prüfen', schema: BEFUNDE }),
  (r, p) => {
    if (!r || !r.befunde || r.befunde.length === 0) return { key: p.key, befunde: [], urteile: [], geprueft: r ? r.geprueft : 'kein Ergebnis' }
    return agent(`${GEMEINSAM}

Du bist WIDERLEGER. Ein anderer Prüfer (Auftrag: ${p.key}) hat die folgenden Befunde zum Redeskript gemeldet. Prüfe JEDEN Befund selbst an den Quellen und versuche, ihn zu widerlegen. bestaetigt=true nur, wenn das Problem nachweislich besteht und die Korrektur richtig ist; im Zweifel bestaetigt=false mit Begründung. Wenn das Problem besteht, die Korrektur aber falsch oder unvollständig ist: bestaetigt=true und eine bessere Korrektur in korrektur_angepasst.

Befunde (JSON):
${JSON.stringify(r.befunde, null, 2)}`, { label: `gegenpruefen:${p.key}`, phase: 'Gegenprüfen', schema: URTEILE })
      .then(v => ({ key: p.key, befunde: r.befunde, urteile: v ? v.urteile : [], geprueft: r.geprueft }))
  },
)

const alle = ergebnisse.filter(Boolean)
const zusammen = alle.map(e => {
  const u = Object.fromEntries((e.urteile || []).map(x => [x.id, x]))
  return {
    pruefer: e.key,
    geprueft: e.geprueft,
    befunde: e.befunde.map(b => ({ ...b, urteil: u[b.id] || null })),
  }
})
const n = zusammen.reduce((s, e) => s + e.befunde.length, 0)
const ok = zusammen.reduce((s, e) => s + e.befunde.filter(b => b.urteil && b.urteil.bestaetigt).length, 0)
log(`${n} Befunde, davon ${ok} bestätigt`)
return { zusammen, anzahl: n, bestaetigt: ok }
