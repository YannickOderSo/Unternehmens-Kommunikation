#!/bin/sh
# Baut den Werbespot „Mein Moment.“ reproduzierbar aus ../intern/d11/ (keine Netzanfragen, kein Schlüssel nötig).
# Voraussetzung: ../intern/d11/stimme, musik, sfx (ElevenLabs-Ergebnisse, einmal erzeugt – siehe ../README.md, Abschnitt
# „Neubau“), python3 vorbereiten.py und node aufnahme-handy.cjs (Bilder nach ../intern/d11/bilder).
# Schritte: Bilder rendern (3 Prozesse, 735 Bilder = 24,5 s) → Bewegungsunschärfe mitteln → Ton mischen → Lautheit
# (−14 LUFS integriert, Begrenzer −4 dBFS mit vierfacher Überabtastung; Ziel True Peak ≤ −2 dBTP nach AAC) → H.264/AAC →
# Poster → Untertitel → Prüfbilder.
# Aufruf: sh bau.sh   (sh bau.sh --ohne-bilder: nur Ton und Video neu)
# Werbespot HOLY (studentisches Konzept, HS Kaiserslautern) · KI-gestützt erstellt · Prüfung durch die Gruppe offen
set -e
HIER=$(cd "$(dirname "$0")" && pwd)
I="$HIER/../intern/d11"; Z="$HIER/.."
cd "$HIER"
if [ "$1" != "--ohne-bilder" ]; then
  rm -rf "$I/folge"; mkdir -p "$I/folge"
  node render.cjs folge "$I/folge" 0 245 > "$I/render-1.log" 2>&1 &
  node render.cjs folge "$I/folge" 245 490 > "$I/render-2.log" 2>&1 &
  node render.cjs folge "$I/folge" 490 735 > "$I/render-3.log" 2>&1 &
  wait
  cat "$I"/render-*.log
  python3 unschaerfe.py "$I/folge"
fi
python3 ton.py
python3 untertitel.py

# Lautheit: Pegel auf −14 LUFS, dann Spitzenbegrenzer mit vierfacher Überabtastung (Spitze ≤ −4 dBFS vor AAC, damit nach der AAC-Kodierung ≤ −2 dBTP; der laute Drop überschwingt im AAC stärker);
# zwei Durchgänge, weil der Begrenzer die Lautheit leicht senkt
lautheit() { ffmpeg -hide_banner -nostats -i "$1" -af ebur128 -f null - 2>&1 | sed -n 's/^ *I: *\(-*[0-9.]*\) LUFS/\1/p' | tail -1; }
KETTE() { echo "volume=${1}dB,aresample=192000,alimiter=limit=0.63:attack=1:release=60:level=false,aresample=48000"; }
G1=$(python3 -c "print(round(-14 - ($(lautheit "$I/ton/mischung.wav")), 2))")
ffmpeg -v error -y -i "$I/ton/mischung.wav" -af "$(KETTE $G1)" -ar 48000 -c:a pcm_s24le "$I/ton/_zw.wav"
G2=$(python3 -c "print(round($G1 - 14 - ($(lautheit "$I/ton/_zw.wav")), 2))")
ffmpeg -v error -y -i "$I/ton/mischung.wav" -af "$(KETTE $G2)" -ar 48000 -c:a pcm_s24le "$I/ton/mischung-norm.wav"
rm -f "$I/ton/_zw.wav"
echo "Verstärkung $G1 → $G2 dB"

ffmpeg -v error -y -framerate 30 -i "$I/folge/%04d.jpg" -i "$I/ton/mischung-norm.wav" \
  -c:v libx264 -profile:v high -preset slow -crf 20 -maxrate 4.2M -bufsize 8M -pix_fmt yuv420p -r 30 -g 60 -bf 2 \
  -color_primaries bt709 -color_trc bt709 -colorspace bt709 \
  -c:a aac -b:a 192k -ar 48000 -ac 2 -shortest -movflags +faststart \
  -metadata title="Mein Moment. – Werbespot HOLY (studentisches Konzept)" \
  -metadata comment="Studentisches Konzept der Gruppe (HS Kaiserslautern) – keine Werbung der HOLY Softdrinks GmbH. Stimme, Musik und Geräusche KI-generiert (ElevenLabs)." \
  "$Z/holy-werbespot.mp4"

# Poster: Standbild der Endkarte (alle Pflichthinweise, Raptor, „Und deiner?“ sichtbar)
ffmpeg -v error -y -ss 23.6 -i "$Z/holy-werbespot.mp4" -frames:v 1 -q:v 3 "$Z/holy-werbespot-poster.jpg"

# Prüfbilder: ein Standbild je 0,5 s + Kontaktbogen
rm -rf "$I/pruef"; mkdir -p "$I/pruef"
ffmpeg -v error -y -i "$Z/holy-werbespot.mp4" -vf "fps=2" -q:v 3 "$I/pruef/s%02d.jpg"
ffmpeg -v error -y -i "$Z/holy-werbespot.mp4" -vf "fps=2,scale=216:384,tile=10x5:padding=4:color=white" -frames:v 1 "$I/pruef/kontaktbogen.jpg"
ls -la "$Z/holy-werbespot.mp4" "$Z/holy-werbespot-poster.jpg" "$Z/holy-werbespot.de.vtt"
