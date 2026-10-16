# Übergabe 2 an Account 2 – Befunde aus der Live-Prüfung der Webseite

Erstellt von Claude Code (Account 1) am 16.10.2026 (KI-Nachweis, Delegation D07 und Übergabe Ü02).
Yannick kopiert den Text unten in die Sitzung von Account 2, sobald dessen Abschlussprüfung und Feinschliff fertig
sind (oder als nächste Aufgabe danach).

---

```text
Hinweis von Account 1 (16.10.2026): Die Web-Präsentation ist seit heute über GitHub Pages online (https://yannickoderso.github.io/Unternehmens-Kommunikation/). Account 1 hat deinen Stand 21d283a nach master übernommen, dort ein paar Dinge ergänzt und die Live-Seite von drei Prüf-Agenten testen lassen. Ergebnis: Technik und Bedienung funktionieren auf allen 63 Folienzuständen in allen Themen, nichts ragt über die Bühne, die Referentenansicht ist synchron. Unten stehen die verbleibenden Befunde für die Präsentation. Bitte bearbeite sie als nächstes Arbeitspaket.

ZUERST
1. master in deinen Branch übernehmen: git fetch origin master && git merge origin/master (Konflikte so lösen, dass die Änderungen von master erhalten bleiben).
2. Was auf master neu ist und NICHT zurückgedreht werden soll:
   - bilder/holy-logo-wortmarke.png und bilder/holy-logo-oval.png (offizielle Logos von de.holy.com, Abruf 16.10.2026); marke.js → logo zeigt jetzt auf die Wortmarke (Folie 09b); QUELLEN.md Abschnitt 4 entsprechend; Quellenzeile von f09b beginnt mit „Logo © HOLY Softdrinks GmbH, de.holy.com (Abruf 16.10.2026)“; alt-Text in js/folien/09-kommunikationsanalyse.js auf „Logo der Marke“ geändert.
   - In praesentation/index.html und _entwuerfe/richtung-*/muster.html: <meta name="robots" content="noindex, nofollow">; in praesentation/index.html zusätzlich ein Favicon als data-URI (behebt die einzige 404-Meldung in der Konsole).
   - Neu im Hauptverzeichnis: index.html (Startseite der Webseite) und .nojekyll.

BEFUNDE (Belege und Messwerte von den Prüf-Agenten)
1. (mittel) Referentenansicht: Der Sprechtext scrollt nicht zum aktuellen Schritt. In js/deck.js, referentAktualisieren() (ca. Z. 2306–2316) wird beim Folienwechsel scrollTop = 0 gesetzt, danach nur ist-erreicht/ist-jetzt umgeschaltet. Bei 1440×900 (Standardgröße des Popups) ist der aktuelle Absatz in 46 von 63 Zuständen nicht sichtbar, bei 1920×1080 in 31 von 63 (z. B. f07.3, f10.8, f02.7). Vorschlag: nach dem Umschalten den Absatz mit .ist-jetzt in den Blick holen (scrollTo bzw. scrollIntoView mit block: 'start', behavior: 'smooth') und mit A−/A+ prüfen.
2. (mittel) Handy hochkant (390×844): Die Bedienleiste (css/deck.css ab ca. Z. 436, .bedienleiste) ist breiter als der Bildschirm; „Zurück“ und Teile von „Weiter“ und der Foliennummer liegen außerhalb. Vorschlag: @media (max-width: 560px) Leiste begrenzen (max-width: calc(100vw - 32px), flex-wrap) oder Nebenknöpfe (Farbwähler, Thema, Referent, Vollbild) ausblenden; in der Hilfe (H) „Touch: nach links wischen = weiter, nach rechts = zurück“ ergänzen; im Hochformat einen kleinen Hinweis „Gerät quer halten“ (@media (orientation: portrait) and (max-width: 600px)).
3. (niedrig) Folie 08, Schritt 0–1 (Umfrage sichtbar): Ziffern zählen Stimmen und gehen zugleich in den Sprungpuffer. „1“ „0“ Enter zählt eine Stimme für Option 1 und meldet „Folie 0 gibt es nicht“ – jeder Sprungversuch verfälscht das Live-Ergebnis. Vorschlag: mindestens in LIESMICH und Hilfe darauf hinweisen; besser Ziffern nur zählen, wenn kein Sprungpuffer läuft, bzw. Zählmodus ausdrücklich aktivieren.
4. (niedrig) Touch-Ziele: Knöpfe der Bedienleiste 36×36 px; optional @media (pointer: coarse) auf 44×44 px.
5. (mittel) Einordnung auf den Folien: Wer direkt auf eine Folie oder das PDF kommt, sieht Wertungen über HOLY ohne Hinweis, dass es eine studentische Arbeit ist. Vorschlag: auf Folie 01 (Titelzustand) und/oder Folie 12 eine kleine Zeile, z. B. „Studentische Fallstudie, Hochschule Kaiserslautern · keine Verbindung zur HOLY Softdrinks GmbH“ (Metagröße, nicht im Wortbudget).
6. Danach Export erneuern: export/praesentation.pdf, export/uebersicht.png und export/folien/*.png (Folie 09b zeigt jetzt das Logo statt des Platzhalters).

ZUR INFO (Entscheidung der Gruppe, nicht umsetzen)
- Die Sprechernotizen (inkl. vorbereiteter Antworten auf Rückfragen) sind über die öffentliche Seite lesbar (Taste P, Quelltext). Die Gruppe entscheidet, ob das stört.

REGELN WIE BISHER
- Nur auf praesentation-account-2 arbeiten, nach jedem Schritt committen und pushen; nicht nach master mergen (das macht Account 1).
- Diesen Prompt und jede Delegation in ki-nachweis/ki-nachweis-account-2.md eintragen.
- Keine Fakten erfinden; Statista-Rohdaten gehören nicht ins öffentliche Repository (für Folie 04 gilt die Kurzfassung fallstudie-1-brand-persona/persona-daten.md – die Folieninhalte ersetzt die Gruppe selbst).
- Zum Schluss kurze Zusammenfassung (Stand, offene Punkte, letzter Commit) für Account 1.
```
