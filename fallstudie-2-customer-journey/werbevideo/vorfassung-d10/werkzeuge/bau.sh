#!/bin/sh
# Baut den Werbespot reproduzierbar aus den Zwischenständen in ../intern/ (keine Netzanfragen, kein Schlüssel nötig).
# Voraussetzung: ../intern/stimme, ../intern/musik, ../intern/sfx (ElevenLabs-Ergebnisse, einmal erzeugt),
#   ../intern/handy (node aufnahme-handy.cjs), ../intern/bilder (sh vorbereiten.sh).
# Schritte: Ton mischen → Bilder rendern → Lautheit (2 Durchgänge loudnorm) → H.264/AAC → Poster → Untertitel → Prüfbilder.
# Werbespot HOLY (studentisches Konzept, HS Kaiserslautern) · KI-gestützt erstellt · Prüfung durch die Gruppe offen
set -e
HIER=$(cd "$(dirname "$0")" && pwd)
I="$HIER/../intern"; Z="$HIER/.."
cd "$HIER"
[ "$1" = "--ohne-bilder" ] || { rm -rf "$I/bilder-folge"; node render.cjs; }
python3 ton.py
python3 untertitel.py

# Lautheit: Messdurchgang, dann linear normalisieren auf -14 LUFS integriert, Spitze ≤ -1,5 dBTP
MESS=$(ffmpeg -hide_banner -nostats -i "$I/ton/mischung.wav" -af loudnorm=I=-14:TP=-1.5:LRA=11:print_format=json -f null - 2>&1 | sed -n '/^{/,/^}/p')
wert() { echo "$MESS" | python3 -c "import json,sys; print(json.load(sys.stdin)['$1'])"; }
ffmpeg -v error -y -i "$I/ton/mischung.wav" -af "loudnorm=I=-14:TP=-1.5:LRA=11:measured_I=$(wert input_i):measured_TP=$(wert input_tp):measured_LRA=$(wert input_lra):measured_thresh=$(wert input_thresh):offset=$(wert target_offset):linear=true,aresample=48000" \
  -ar 48000 -c:a pcm_s24le "$I/ton/mischung-norm.wav"

# Video: H.264 High, yuv420p, 30 fps, AAC 48 kHz Stereo, +faststart
ffmpeg -v error -y -framerate 30 -i "$I/bilder-folge/%04d.jpg" -i "$I/ton/mischung-norm.wav" \
  -c:v libx264 -profile:v high -preset slow -crf 19 -pix_fmt yuv420p -r 30 -g 60 -bf 2 \
  -color_primaries bt709 -color_trc bt709 -colorspace bt709 \
  -c:a aac -b:a 192k -ar 48000 -ac 2 -shortest -movflags +faststart \
  -metadata title="Zahlen statt Versprechen – Werbespot HOLY (studentisches Konzept)" \
  -metadata comment="Studentisches Konzept der Gruppe (HS Kaiserslautern) – keine Werbung der HOLY Softdrinks GmbH. Stimme, Musik und Geräusche KI-generiert (ElevenLabs)." \
  "$Z/holy-werbespot.mp4"

# Poster: Standbild der Endkarte (alle Pflichthinweise sichtbar)
ffmpeg -v error -y -ss 25.0 -i "$Z/holy-werbespot.mp4" -frames:v 1 -q:v 3 "$Z/holy-werbespot-poster.jpg"

# Prüfbilder: ein Standbild je Sekunde + Kontaktbogen
rm -rf "$I/pruefbilder"; mkdir -p "$I/pruefbilder"
ffmpeg -v error -y -i "$Z/holy-werbespot.mp4" -vf "fps=1" -q:v 3 "$I/pruefbilder/s%02d.jpg"
ffmpeg -v error -y -i "$Z/holy-werbespot.mp4" -vf "fps=1,scale=270:480,tile=8x4:padding=6:color=white" -frames:v 1 "$I/pruefbilder/kontaktbogen.jpg"
ls -la "$Z/holy-werbespot.mp4" "$Z/holy-werbespot-poster.jpg" "$Z/holy-werbespot.de.vtt"
