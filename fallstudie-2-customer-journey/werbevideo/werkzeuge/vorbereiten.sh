#!/bin/sh
# Kopiert die verwendeten Produkt-Rohdateien (HOLY Softdrinks GmbH, Abruf 03.11.2026, Herkunft je Datei in
# praesentation/intern/roh/produkt/<ordner>/manifest.json) unverändert nach ../intern/bilder/, damit der Spot nur aus
# werbevideo/intern/ gebaut werden kann. Beide Ordner sind per .gitignore ausgeschlossen (nicht veröffentlicht).
# Werbespot HOLY (studentisches Konzept, HS Kaiserslautern) · KI-gestützt erstellt · Prüfung durch die Gruppe offen
set -e
HIER=$(cd "$(dirname "$0")" && pwd)
ROH="$HIER/../../praesentation/intern/roh/produkt"
ZIEL="$HIER/../intern/bilder"
mkdir -p "$ZIEL"
for f in packshots/raptor-50er-dose.png packshots/raptor-50er-dose-mit-gratis-shaker.png packshots/raptor-sachet-1-portion.png \
         lifestyle/zubereitung-1-pulver-gelb.jpg lifestyle/zubereitung-3-schuetteln-gelb.jpg \
         squad-rewards/level-1-raptor-egg.png squad-rewards/level-2-raptor-kid.png \
         squad-rewards/level-3-teenage-raptor.png squad-rewards/level-4-og-raptor.png; do
  cp "$ROH/$f" "$ZIEL/$(basename "$f")"
done
ls -la "$ZIEL"
