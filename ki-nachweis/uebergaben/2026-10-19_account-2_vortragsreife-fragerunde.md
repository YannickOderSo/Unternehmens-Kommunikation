# Übergabe 4 an Account 2 – Vortragsreife prüfen und Fragerunde vorbereiten

Erstellt von Claude Code (Account 1) am 19.10.2026 (KI-Nachweis, Prompt 77, Übergabe Ü04).
Yannick kopiert den Text unten in die Sitzung von Account 2.

**Warum diese Aufgabe:** Account 2 hatte am 18.10. eine Prüfung auf Vortragsreife begonnen (A2-D03, Bericht
`VORTRAGSREIFE.md`). Sie lief auf dem Stand **vor** D12 und ist nicht fertig geworden. Seitdem hat Account 1 viel
geändert: D12 (Folien 03, 05, 10, Logos, Backups), D14 (Gründerbefragung Horsch 2026), Folie 03/04 vom 19.10. Gerade
arbeitet Account 1 an der **Live-Abstimmung auf Folie 08 (D15)** und an **neuen Bildern für Folie 01 und 04 (D16)**.
Damit sich nichts überschneidet, macht Account 2 nur Prüfung und Vorbereitung und schreibt ausschließlich **neue**
Dateien.

---

```text
Neue Aufgabe von Account 1 (19.10.2026). Bitte beachte: Ü03 (Fallstudie 2) bleibt zurückgestellt. Diese Aufgabe hat Vorrang.

ZUERST
1. git fetch origin master && git merge origin/master in deinen Branch praesentation-account-2 (Konflikte so lösen, dass der Stand von master erhalten bleibt). master enthält jetzt: D12 (Präsentation übernommen, Folien 03/05/10 mit A1/A3, Logos 01/09b/12, Backups), D13/D14 (Gründerbefragung: fallstudie-1-brand-persona/gruenderbefragung.md, Kürzel GB = „Horsch 2026 (GB)“, Name freigegeben), Folie 03 Zusatz „auch laut Gründer Mathias Horsch (Befragung 10/2026)“, Folie 04 „Kern-Persona · Hypothese · fiktiv“.
2. Deinen alten Lauf A2-D03 NICHT fortsetzen (er prüfte den Stand vor D12), sondern neu aufsetzen: dein Skript ki-nachweis/workflows/2026-10-18_praesentation-account-2_vortragsreife.js als Vorlage nehmen, als neues Skript mit Präfix account-2_ speichern und an den neuen Stand anpassen.

ARBEITSPAKET (nur lesen und berichten, zwei neue Dateien)
A) fallstudie-1-brand-persona/praesentation/VORTRAGSREIFE.md – Prüfung auf Vortragsreife für Mo 26.10.2026 mit deinen 8 Blickwinkeln (Aufgabe & Bewertungsraster aus README.md, Storyline, Vortrag & Zeit (Sollzeit 14:00, Sprechtexte zählen), Rückfragen, Fakten, Technik im Hörsaal, Referentenansicht, Visualisierung & Beamer), je Blickwinkel Gegenprüfung, dann Vollständigkeitsprüfung. Jeder Befund: Folie, Stelle (Datei + Datenfeld/Zeile), Problem, Beleg (Screenshot unter praesentation/_test/account2-…), Vorschlag, zuständig (Yannick / Lukas / Elias / Account 1 technisch), Dringlichkeit bis 26.10. Beispieldaten von Bündel B und C (Folien 06–08b, 09–11) sind bekannt – bewerte, was davon bis 26.10. echt sein MUSS und bis wann.
   AUSGENOMMEN (Account 1 arbeitet gerade daran, nicht prüfen und nicht bewerten): Live-Abstimmung auf Folie 08 (QR-Code, abstimmen.html, live-abstimmung/, Anbindung in js/komponenten.js) und die Bilder auf Folie 01 (Rätselbild) und Folie 04 (Persona-Bild) samt ihren Platzhalter-Hinweisen.
B) fallstudie-1-brand-persona/fragerunde.md – Vorbereitung der Fragerunde: die 25–35 wahrscheinlichsten Fragen von Prof. Stenger und vom Publikum zu Methode, Daten, Ergebnissen, Empfehlungen und KI-Nutzung, je Frage: kurze Antwort (2–4 Sätze, mündlich), wer antwortet (nach Bündel), Beleg (Folie/Backup/Ausarbeitung mit Abschnitt) und Fallstricke („nicht sagen: …“). Grundlage: index.html (Folien, Notizen, Rückfragen), folienentwuerfe.md (Abschnitte „Mögliche Rückfragen“), markenkompetenz.md, persona-steckbrief.md, limbic-map.md, gruenderbefragung.md, Recherche-Dossier (Faktenstatus beachten), README.md (Bewertung), KI-Nachweis (Abschnitt 4 „Wie dieser Nachweis entsteht“). Nichts erfinden; Gründeraussagen immer als Selbstauskunft („laut Gründer Mathias Horsch (Befragung 10/2026)“); „95 %“ nur mit Zusatz „laut Gründer, Datengrundlage nicht offengelegt“. Mit Gegenprüfung jeder Antwort an der Quelle.

REGELN
- Nur auf deinem Branch praesentation-account-2 arbeiten; nicht nach master mergen (das macht Account 1).
- Ändere KEINE bestehende Datei der Präsentation oder der Ausarbeitungen (index.html, marke.js, js/, css/, bilder/, export/, LIESMICH.md, AUTOREN.md, QUELLEN.md, *.md in fallstudie-1-brand-persona/). Neu anlegen darfst du nur die zwei Dateien oben, dazu ki-nachweis/ki-nachweis-account-2.md und Workflow-Skripte mit Präfix account-2_ unter ki-nachweis/workflows/. Testausgaben nur unter praesentation/_test/ (nicht eingecheckt).
- Diesen Prompt und jede Delegation in ki-nachweis/ki-nachweis-account-2.md eintragen (wörtlich, wie bisher). Nach jedem Schritt committen und pushen.
- Öffne keine Dateien unter /root/.claude/uploads, keine Datei mit „NUR-Gruppenordner“ im Namen und nicht den Google-Drive-Gruppenordner. Statista-Werte nur, wie sie in persona-daten.md stehen.
- Keine Modellbezeichnungen in Dateien, Commits oder PRs.
- Zum Schluss: kurze Zusammenfassung für Account 1 und Yannick (Top-10-Befunde nach Dringlichkeit, was Lukas und Elias bis wann liefern müssen, letzter Commit).
```
