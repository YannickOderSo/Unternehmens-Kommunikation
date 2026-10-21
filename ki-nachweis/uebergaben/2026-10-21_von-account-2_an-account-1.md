# Übergabe von Account 2 an Account 1 (laufend gepflegt)

Erstellt von Claude Code (Account 2) am 21.10.2026 auf Wunsch von Yannick (KI-Nachweis Account 2, A2-54):
„Ich will das du dein Limit planst solltest du bei 95% Wochen Limit ankommen will ich das du deine Tasks auf account
überschreibst“.

Account 2 hält diese Datei nach jedem Arbeitsschritt aktuell. Erreicht Account 2 **95 % seines Wochenlimits**, hört es
auf, stoppt laufende Workflows, aktualisiert diese Datei ein letztes Mal, committet und pusht. Dann kopiert Yannick den
Codeblock unten in die Sitzung von Account 1.

## Limitplan von Account 2

| Wann | Was Account 2 tut |
|------|-------------------|
| vor jedem Schritt und bei jeder Rückmeldung eines Workflows | Wochenlimit ablesen (Sitzungsdaten, `seven_day.utilization`) |
| unter 85 % | normal arbeiten; Workflows höchstens 2–3 Unteragenten |
| ab 85 % | keine neuen Workflows mehr, nur kleine Schritte direkt |
| ab 92 % | laufenden Schritt sauber abschließen, diese Datei vollständig aktualisieren und pushen |
| ab 95 % | alles stoppen, letzte Aktualisierung, Commit und Push, Yannick Bescheid geben → Account 1 übernimmt |

Grundlage für die Schätzung: Seit der letzten Zurücksetzung (Mo 19.10.2026, 15:00 UTC) hat Account 2 fast nur den
Workflow A2-D04 (30 Unteragenten) und die Hauptsitzung dazu laufen lassen – zusammen 71 %. Der Rest bis 95 % reicht
also etwa für ein Drittel eines solchen Laufs.

## Stand (wird laufend aktualisiert)

**Letzte Aktualisierung:** 21.10.2026, 00:08 UTC · Wochenlimit Account 2: **71 %** (Zurücksetzung Mo 26.10.2026, 15:00 UTC)
· Branch `praesentation-account-2`

| Aufgabe | Stand |
|---------|-------|
| Ü04 A) `fallstudie-1-brand-persona/praesentation/VORTRAGSREIFE.md` | geschrieben (Zwischenstand 2a03430); Abnahme läuft |
| Ü04 B) `fallstudie-1-brand-persona/fragerunde.md` | geschrieben (Zwischenstand 2a03430); Abnahme läuft |
| Ü04 Abnahme (Workflow A2-D04, letzter Agent) | läuft |
| Eigene Stichprobenprüfung durch Account 2, Hinweis auf überfällige Fristen (Di 20.10.) | offen |
| Zusammenfassung für Account 1 und Yannick (Top 10, Lieferplan Lukas/Elias, letzter Commit) | offen |
| Ü03 (Fallstudie 2) | zurückgestellt (Ü04 hat Vorrang) |

Geprüft wurde der Stand `master` a929391 (19.10.2026, nach D12–D14). Ausgenommen waren die Live-Abstimmung auf Folie 08
(D15) und die Bilder auf Folie 01/04 (D16).

## Falls Account 1 übernimmt

```text
Übernahme von Account 2 (Wochenlimit erreicht). Bitte zuerst ki-nachweis/uebergaben/2026-10-21_von-account-2_an-account-1.md lesen (Abschnitt „Stand“).
1. git fetch origin praesentation-account-2 und in master zusammenführen. Account 2 hat nur neue Dateien angelegt: fallstudie-1-brand-persona/praesentation/VORTRAGSREIFE.md, fallstudie-1-brand-persona/fragerunde.md, ki-nachweis/ki-nachweis-account-2.md, ki-nachweis/workflows/account-2_2026-10-19_vortragsreife-fragerunde.js, diese Übergabedatei. Bestehende Dateien der Präsentation hat Account 2 nicht geändert.
2. Offene Punkte aus der Tabelle „Stand“ übernehmen. Ist die Abnahme dort noch „läuft“ oder „offen“: beide Dateien selbst gegen die Anforderungen aus Ü04 prüfen (jeder Befund mit Folie, Stelle, Problem, Beleg, Vorschlag, zuständig, Dringlichkeit; Fragerunde 25–35 Fragen mit Antwort, wer, Beleg, Fallstricke; Gründer als Selbstauskunft; „95 %“ nur mit Zusatz).
3. Fristen in VORTRAGSREIFE.md mit „sofort (Di 20.10.)“ sind überfällig – als „sofort“ behandeln.
4. Die Befunde beziehen sich auf master a929391; was seitdem geändert wurde (D15, D16, Lieferungen von Lukas/Elias), vor dem Umsetzen gegenprüfen.
5. Im KI-Nachweis von Account 1 die Übernahme eintragen.
```
