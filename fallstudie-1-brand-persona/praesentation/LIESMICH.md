# LIESMICH – Web-Präsentation bedienen (vorläufig)

Präsentation zur Fallstudie 1 „Brand Persona & Markenidentität“ (Marke **HOLY**), Termin Mo, 26.10.2026.
Stand: Fundament (Engine, Designsystem, Demo). Die einzelnen Folien entstehen gerade; bis dahin zeigt
`index.html` die Demo-Folien. Für Folien-Autor:innen: siehe `AUTOREN.md`.

## Starten

- `index.html` per Doppelklick öffnen – **Chrome oder Edge** (getestet mit Chromium 141). Läuft ohne
  Internet und ohne Server. Firefox/Safari funktionieren mit einfacheren Übergängen (nicht getestet).
- **F** = Vollbild. Die Folie (1920 × 1080) passt sich jedem Bildschirm an; bei 16:10-Beamern
  entstehen oben/unten schmale Ränder, nichts wird abgeschnitten.
- Neuladen (F5) bleibt auf derselben Folie und demselben Schritt (Adresse z. B. `index.html#f06.2`).

## Tasten

| Taste | Wirkung |
|---|---|
| → ↓ Leertaste Bild↓ Enter | weiter (nächster Schritt bzw. nächste Folie) |
| ← ↑ Bild↑ Rücktaste | zurück |
| Pos1 / Ende | erste / letzte Hauptfolie |
| Ziffern + Enter (z. B. 6 Enter) | Folie 06 anspringen |
| O | Übersicht aller Folien (mit Backup-Rubrik), Pfeile + Enter oder Klick |
| P | Referentenansicht im zweiten Fenster |
| F | Vollbild |
| B oder . | Schwarzbild (jede Taste blendet wieder ein) |
| T / D | Thema wechseln (Editorial, Bento, Keynote) / hell–dunkel |
| H oder ? | Hilfe mit allen Tasten |
| Esc | Fenster schließen, Eingabefeld verlassen |

- **Präsentations-Clicker** (sendet Bild↑/Bild↓ oder Pfeiltasten) funktioniert immer – auch wenn
  gerade ein Eingabefeld aktiv ist.
- **Touch**: nach links wischen = weiter, nach rechts = zurück.
- Nach der letzten Hauptfolie geht es nicht automatisch ins Backup – Backup über **O**.
- Bedienleiste unten rechts erscheint bei Mausbewegung und verschwindet nach 2,5 s
  (Pfeile, Nummer, Übersicht, Referentenansicht, Thema, hell/dunkel, Farbwähler, Vollbild, Hilfe).
- **Mini-Steuerrad** oben rechts (auf Folien zu einem Feld): Klick öffnet das Sprungmenü; ein Feld
  anklicken springt zur passenden Folie.

## Referentenansicht (Taste P)

Öffnet ein zweites Fenster (Pop-ups für die Datei erlauben). Auf den Laptop-Bildschirm ziehen, das
Hauptfenster per F auf dem Beamer im Vollbild.
- Aktuelle Folie, nächste Folie bzw. nächster Schritt, Sprechtext groß (A− / A+), Absätze zum
  aktuellen Schritt markiert.
- Gesamtuhr gegen 15:00 und Folienuhr gegen die Sollzeit (Farbe: ab 85 % gelb, darüber rot), Abgleich
  mit dem Plan („im Plan“, „0:20 hinter Plan“), Uhrzeit. Die Uhr startet beim ersten Weiterschalten;
  Pause/Weiter und „Zeit zurücksetzen“ per Knopf.
- Blättern geht in beiden Fenstern; beide bleiben synchron (auch bei `file://`). Knopf „Schwarzbild“
  schaltet nur den Saal schwarz.
- Direkt aufrufen: `index.html?referent`.

## Live-Umfrage (Analogien-Folie)

Vorbereitung in `marke.js → umfragen.tier`: Frage, Antwortoptionen, `link` (Abstimm-Adresse z. B. von
Mentimeter/Particify – dann erscheint ein QR-Code), `ergebnisLink`, `unsereAntwort`.
**Das Publikum braucht Internet für das Umfrage-Werkzeug; die Präsentation selbst nicht.** Die
Ergebnisse kommen nicht automatisch auf die Folie. Zwei Wege:
1. **Zählen** (Handzeichen/Zurufe oder vom Handy ablesen): Klick auf eine Option = +1,
   Umschalt+Klick oder Rechtsklick = −1, auf der Folie auch Ziffern 1–9 (Umschalt = −1).
2. **Eintragen**: Doppelklick auf einen Wert oder Knopf „Werte“ (Maus über die Ergebniszeile) und die
   Zahlen aus dem Werkzeug eintippen; „Ergebnisse öffnen“ zeigt das Werkzeug in einem neuen Tab.
Prozente rechnet die Präsentation aus den Stimmen. Vor dem Vortrag **„Zurücksetzen“** (zweimal
klicken), sonst stehen noch die Beispielwerte da (Pille „Beispieldaten“). Ergebnisse bleiben beim
Neuladen erhalten. QR-Code vorher mit mehreren Handys aus der letzten Reihe testen.

## Live-Wortwolke

Ein Teammitglied klickt ins Eingabefeld unter der Wolke, tippt Zurufe und drückt Enter. Doppelte
Wörter werden größer. Während das Feld aktiv ist, blättern nur Clicker (Bild↑/Bild↓) und Esc verlässt
das Feld. „Wolke leeren“ (zweimal klicken), Alt+Klick entfernt ein Wort. Die Wolke erscheint auf späteren
Folien wieder (z. B. im Fazit).

## Thema und Markenfarben

- **T** wechselt das Thema, **D** hell/dunkel – gilt bis der Tab geschlossen wird. Standard in
  `marke.js` (`standardThema`, `standardModus`). Für helle Hörsäle: Editorial hell.
- **Farbwähler** in der Bedienleiste: Primär- und Sekundärfarbe live ausprobieren (gilt nur in diesem
  Tab; Knopf daneben stellt `marke.js` wieder her). Dauerhaft: `marke.js → farben`. Farben erst
  eintragen, wenn das Recherche-Dossier sie mit Quelle belegt.
- Zum Ausprobieren über die Adresse: `index.html?thema=bento&modus=dunkel&primaer=E30613&sekundaer=1D1D1B`.

## PDF / Druck

- **Strg+P** → „Als PDF speichern“, Seitenränder „Keine“, Hintergrundgrafiken an: jede Folie eine
  Seite, alle Schritte sichtbar, ohne Bedienelemente.
- `index.html?druck` zeigt die Druckansicht im Browser; `index.html?druck&notizen` setzt den
  Sprechtext unter jede Folie (Handout für die Gruppe).

## Vor dem 26.10. unbedingt

- Am Präsentationsrechner der Hochschule mit genau diesem Browser testen (Übergänge, Vollbild,
  Referentenfenster, Clicker).
- Im Hörsaal mit eingeschaltetem Licht von der letzten Reihe prüfen: Lesbarkeit, Kontraste, QR-Code.
- Umfrage-Link eintragen, QR testen, Beispielwerte zurücksetzen; Beispieldaten-Pillen nur entfernen,
  wenn keine erfundenen Werte mehr auf den Folien stehen.

## Dateien

`index.html` (erzeugt – nicht von Hand ändern) · `marke.js` (alles, was sich mit der Marke ändert) ·
`folien/` · `css/` · `js/` · `bilder/` · `schriften/` · `werkzeuge/` (zusammenbauen, prüfen) ·
`AUTOREN.md` (Schnittstelle für Folien) · `_entwuerfe/` (Gestaltungsrichtungen und Jury).
