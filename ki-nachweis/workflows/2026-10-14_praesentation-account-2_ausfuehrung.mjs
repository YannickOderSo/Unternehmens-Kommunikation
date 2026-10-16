// Ausführungshilfe für das Workflow-Skript 2026-10-14_praesentation-account-2.js (Account 2, 14.10.2026)
// ------------------------------------------------------------------------------------------------------
// Warum es diese Datei gibt: In der Claude-Code-Sitzung von Account 2 steht das Workflow-Werkzeug nicht zur
// Verfügung. Das Skript wird deshalb hier mit nachgebauten Funktionen agent/parallel/pipeline/phase/log ausgeführt:
//  - agent(auftrag, optionen): Liegt für den Agenten (über sein Label) schon eine Rückgabe vor, wird sie verwendet
//    (= Fortsetzen/„resume“). Sonst wird der Auftrag WÖRTLICH als Datei in den Ordner auftraege/ geschrieben und als
//    „ausstehend“ gemeldet. Die Hauptsitzung startet dann für jeden ausstehenden Auftrag einen Unteragenten
//    (Agent-Werkzeug, Typ general-purpose), der die Auftragsdatei liest, ausführt und seine Rückgabe als JSON
//    nach dem Schema des Skripts in rueckgaben/<label>.json schreibt.
//  - Danach wird diese Datei erneut ausgeführt; das Skript läuft bis zur nächsten Stufe weiter.
// Aufruf: node 2026-10-14_praesentation-account-2_ausfuehrung.mjs <zustandsordner>
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const HIER = path.dirname(fileURLToPath(import.meta.url))
const SKRIPT = path.join(HIER, '2026-10-14_praesentation-account-2.js')
const AUFTRAEGE = path.join(HIER, '2026-10-14_praesentation-account-2_auftraege')
const ZUSTAND = process.argv[2] || path.join(HIER, '_zustand')
const RUECKGABEN = path.join(ZUSTAND, 'rueckgaben')
fs.mkdirSync(AUFTRAEGE, { recursive: true })
fs.mkdirSync(RUECKGABEN, { recursive: true })

const kennung = label => label.toLowerCase()
  .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const ausstehend = []
const protokoll = []
const log = text => { protokoll.push(text); console.log('[log] ' + text) }
const phase = titel => console.log('[phase] ' + titel)

function agent (auftrag, optionen = {}) {
  const k = kennung(optionen.label || 'agent')
  const rueckgabe = path.join(RUECKGABEN, k + '.json')
  if (fs.existsSync(rueckgabe)) {
    const inhalt = fs.readFileSync(rueckgabe, 'utf8').trim()
    console.log('[fertig] ' + optionen.label)
    if (inhalt === 'null') return Promise.resolve(null) // Agent abgebrochen/gescheitert
    return Promise.resolve(JSON.parse(inhalt))
  }
  const hinweis = `

---
Technischer Hinweis zur Rückgabe (Ausführung ohne Workflow-Werkzeug): Schreibe deine Rückgabe als EIN gültiges JSON-Objekt nach dem folgenden JSON-Schema in die Datei ${rueckgabe} (Write-Werkzeug; danach mit node -e "JSON.parse(require('fs').readFileSync('${rueckgabe}','utf8'))" prüfen). Beende deine Arbeit mit einer kurzen Zusammenfassung (höchstens 15 Zeilen).
JSON-Schema: ${JSON.stringify(optionen.schema || {})}`
  const datei = path.join(AUFTRAEGE, k + '.md')
  fs.writeFileSync(datei, `<!-- Auftrag an Unteragent „${optionen.label}“ (Phase ${optionen.phase}), wörtlich wie vom Skript erzeugt -->\n\n` + auftrag + hinweis + '\n')
  ausstehend.push({ label: optionen.label, phase: optionen.phase, auftrag: datei, rueckgabe })
  return new Promise(() => {}) // bleibt offen, bis die Rückgabe vorliegt (nächster Aufruf)
}
const parallel = thunks => Promise.all(thunks.map(t => Promise.resolve().then(t).catch(f => { log('Fehler: ' + f); return null })))
const pipeline = (elemente, ...stufen) => Promise.all(elemente.map(async e => {
  let x = await stufen[0](e)
  for (const stufe of stufen.slice(1)) x = await stufe(x, e)
  return x
}))

let quelltext = fs.readFileSync(SKRIPT, 'utf8').replace('export const meta =', 'const meta =')
const AsyncFunction = (async () => {}).constructor
const lauf = new AsyncFunction('agent', 'parallel', 'pipeline', 'phase', 'log', 'args', quelltext)
let ergebnis
let fertig = false
lauf(agent, parallel, pipeline, phase, log, undefined).then(r => { ergebnis = r; fertig = true }, f => { console.log('[abbruch] ' + f.message); fertig = true })

process.on('beforeExit', () => {
  if (fertig && ergebnis) {
    fs.writeFileSync(path.join(ZUSTAND, 'ergebnis.json'), JSON.stringify(ergebnis, null, 2))
    console.log('[ende] Workflow abgeschlossen, Ergebnis in ' + path.join(ZUSTAND, 'ergebnis.json'))
  }
  if (ausstehend.length) {
    console.log('[ausstehend] ' + ausstehend.length + ' Auftrag/Aufträge:')
    for (const a of ausstehend) console.log(JSON.stringify(a))
  }
  fs.writeFileSync(path.join(ZUSTAND, 'protokoll.txt'), protokoll.join('\n') + '\n')
})
