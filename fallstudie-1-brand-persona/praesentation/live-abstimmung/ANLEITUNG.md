# Live-Abstimmung einrichten – Schritt für Schritt

Für: Yannick · Dauer: ca. 10 Minuten · Stand: 19.10.2026
Gebraucht wird: ein **privates Google-Konto** (Gmail), ein Laptop mit Chrome, ein Handy.

## Worum es geht

Auf Folie 08 fragen wir: „Wenn HOLY ein Tier wäre – welches?“ (Adler, Löwe, Waschbär, Fuchs, Schwan).

1. Das Publikum scannt den **QR-Code** auf Folie 08 und landet auf unserer Abstimmseite (`abstimmen.html`).
2. Ein Tipp auf ein Tier schickt die Stimme an eine kleine **Web-App** im eigenen Google-Konto (dieses
   Skript: `apps-script.gs`). Sie schreibt die Stimme als Zeile in eine Google-Tabelle.
3. **Folie 08** fragt alle 2 Sekunden den Stand ab und zeichnet die Balken live.

Fällt etwas aus (kein Internet, Web-App nicht erreichbar), bleibt alles wie bisher: Werte eintippen oder
Zählmodus per Handzeichen (`../LIESMICH.md`, Abschnitt 6).

**Was gespeichert wird** (Blatt „Stimmen“): Zeit · Runde · Umfrage · Option (Nummer des Tiers) · Geraet.
„Geraet“ ist eine **zufällige ID**, die der Browser des Handys erzeugt – je Umfrage und Runde eine eigene,
damit beim Umentscheiden nur die letzte Stimme zählt (Probe und Vortrag sind so nicht verknüpfbar). Keine
Namen, keine E-Mail-Adressen, keine IP-Adressen. Das steht für das Publikum auch im Fuß der Abstimmseite.

---

## Schritt 1 – Tabelle anlegen (1 Min.)

1. In Chrome mit dem **privaten** Google-Konto anmelden und <https://sheets.google.com> öffnen.
2. **Leere Tabelle** anlegen.
3. Oben links auf „Unbenannte Tabelle“ klicken und sie **„HOLY Live-Abstimmung“** nennen.

> Hochschul-Konten erlauben die Einstellung „Jeder“ in Schritt 5 oft nicht. Deshalb ein privates Konto.

## Schritt 2 – Apps Script öffnen (1 Min.)

1. In der Tabelle im Menü **Erweiterungen → Apps Script**.
2. Es öffnet sich ein neuer Tab mit dem Editor. Links steht die Datei **Code.gs**, rechts etwas Code
   (`function myFunction() …`).
3. Oben links auf „Unbenanntes Projekt“ klicken, Namen **„HOLY Live-Abstimmung“** eingeben, „Umbenennen“.

Wichtig: Das Skript **aus der Tabelle heraus** öffnen (wie hier), nicht über script.google.com –
sonst weiß es nicht, in welche Tabelle es schreiben soll.

## Schritt 3 – Code einfügen und speichern (2 Min.)

1. Den Inhalt von `apps-script.gs` kopieren. Am einfachsten auf GitHub:
   <https://github.com/YannickOderSo/Unternehmens-Kommunikation/blob/master/fallstudie-1-brand-persona/praesentation/live-abstimmung/apps-script.gs>
   → rechts oben über dem Code das Symbol **„Copy raw file“** (zwei Rechtecke). Oder Claude bitten, den
   Code in den Chat zu schreiben.
2. Im Editor in **Code.gs** klicken, **Strg+A** (alles markieren), **Entf**, dann **Strg+V** (einfügen).
3. **Strg+S** oder das Disketten-Symbol „Projekt speichern“.

Die erste Zeile muss `/**` sein, darunter `@OnlyCurrentDoc` – das beschränkt das Skript auf diese eine
Tabelle.

## Schritt 4 – Einmal ausführen: Blatt anlegen, Berechtigung erteilen (2 Min.)

1. In der Leiste über dem Code die Funktion **„einrichten“** auswählen (Auswahlfeld neben „Debuggen“).
2. **Ausführen** klicken.
3. Es erscheint „Autorisierung erforderlich“ → **Berechtigungen prüfen** → das private Konto wählen.
4. Falls die Warnung **„Google hat diese App nicht überprüft“** kommt: unten links **„Erweitert“** →
   **„Zu HOLY Live-Abstimmung wechseln (unsicher)“**.
5. Im nächsten Fenster **„Zulassen“** (stehen dort Kästchen: alle anhaken, dann „Weiter“).
6. Unten im **Ausführungsprotokoll** steht „Blatt „Stimmen“ ist bereit“. In der Tabelle gibt es jetzt
   unten das Blatt **„Stimmen“** mit der Kopfzeile.

**Warum die Warnung?** Google zeigt sie bei jedem selbst geschriebenen Skript, das Google nicht geprüft
hat. Diese Prüfung braucht nur, wer eine App an viele fremde Menschen verteilt. Hier sind Autor und
einziger Nutzer dieselbe Person, der Code liegt offen im Repository, und er darf nur auf diese eine Tabelle
zugreifen (`@OnlyCurrentDoc`) – nicht auf Mails, Drive oder andere Dateien. „Unsicher“ heißt hier nur:
„nicht von Google geprüft“.

## Schritt 5 – Als Web-App bereitstellen (2 Min.)

1. Oben rechts **Bereitstellen → Neue Bereitstellung**.
2. Links neben „Typ auswählen“ das **Zahnrad** → **Web-App**.
3. Ausfüllen:
   - **Beschreibung:** `Live-Abstimmung v1`
   - **Ausführen als:** **Ich** (die eigene Gmail-Adresse)
   - **Wer hat Zugriff:** **Jeder**
4. **Bereitstellen**. (Fragt Google noch einmal nach der Berechtigung: wie in Schritt 4.)
5. Im Fenster steht die **Web-App-URL** – sie beginnt mit `https://script.google.com/macros/s/` und endet
   auf **`/exec`**. **Kopieren** klicken, dann „Fertig“.

Englische Oberfläche: Deploy → New deployment → Web app → Execute as: **Me** → Who has access: **Anyone**.

**Warum „Ausführen als: Ich“?** Das Skript schreibt mit den Rechten des eigenen Kontos in die eigene
Tabelle. Das Publikum bekommt dadurch **keinen** Zugriff auf die Tabelle – die bleibt privat und wird
nicht freigegeben.

**Warum „Zugriff: Jeder“?** Das Publikum soll ohne Google-Konto und ohne Anmeldung abstimmen. Mit
„Nur ich“ oder „Jeder mit Google-Konto“ sähen die Handys eine Google-Anmeldung statt der Abstimmung.
„Jeder“ bedeutet nur: Jeder darf die Web-App **aufrufen**. Sie nimmt eine Stimme an oder gibt die
**Stimmenzahlen** heraus (z. B. `[3, 1, 7, 0, 2]`) – keine Zeilen, keine Geräte-IDs, nichts aus dem
Konto. Löschen kann über die Web-App niemand etwas.

## Schritt 6 – Adresse eintragen (1 Min.)

Die kopierte URL in `../marke.js` bei `umfragen.tier.liveQuelle` eintragen (in einfachen Anführungszeichen,
Komma am Ende):

```js
liveQuelle: 'https://script.google.com/macros/s/AKfy…/exec',
```

Oder die URL **an Claude schicken** – Claude trägt sie ein, prüft die Web-App und lädt die Änderung auf
GitHub hoch. Die Abstimmseite liegt auf GitHub Pages und liest dieselbe `marke.js`: Die URL muss also
**auf GitHub** und **auf dem Präsentationsrechner** stehen.

**Selbst auf GitHub ändern (ohne Git):**
1. <https://github.com/YannickOderSo/Unternehmens-Kommunikation/blob/master/fallstudie-1-brand-persona/praesentation/marke.js>
   öffnen (angemeldet).
2. Rechts oben über dem Code das **Stift-Symbol** („Edit this file“).
3. Mit Strg+F `liveQuelle:` suchen, die URL zwischen die Anführungszeichen setzen. Nichts anderes ändern.
4. Rechts oben **„Commit changes…“** → im Fenster noch einmal **„Commit changes“**.
5. Dieselbe Zeile in der `marke.js` auf dem Präsentationsrechner ändern (oder den Ordner neu herunterladen).

**Kontrolle auf dem Handy** (nach 2–10 Minuten – so lange braucht GitHub Pages):
<https://yannickoderso.github.io/Unternehmens-Kommunikation/fallstudie-1-brand-persona/praesentation/abstimmen.html?u=tier>
öffnen. Es müssen die **fünf Tiere** erscheinen. Steht dort „Die Abstimmung ist gerade nicht geöffnet“:
noch etwas warten und neu laden; bleibt es so, steht die URL noch nicht auf GitHub (oder endet nicht auf
`/exec`).

Die URL steht damit öffentlich im Repository. Das ist nötig (die Abstimmseite braucht sie) und vertretbar:
Wer sie kennt, kann nur abstimmen oder Zahlen lesen.

## Schritt 7 – Testen (5 Min.)

**Im Browser, in einem privaten Fenster** (Chrome: **Strg+Umschalt+N**) – so sieht es das Publikum.
Wichtig: Im normalen Fenster ist man bei Google angemeldet; dann funktioniert die Web-App auch mit einer
falschen Einstellung bei „Wer hat Zugriff“, und der Fehler fiele erst im Hörsaal auf. `<URL>` jeweils durch
die Web-App-URL ersetzen:

| Test | Adresse | Erwartet |
|---|---|---|
| Stand lesen | `<URL>?aktion=stand&umfrage=tier&runde=probe&anzahl=5` | `{"ok":true,"werte":[0,0,0,0,0],"n":0,"zeit":"…"}` |
| Teststimme (Waschbär) | `<URL>?aktion=stimme&umfrage=tier&runde=probe&option=2&anzahl=5&geraet=test-laptop-1` | `{"ok":true}` und eine neue Zeile im Blatt „Stimmen“ |
| Umentscheiden (Adler) | dieselbe Adresse mit `option=0` | `{"ok":true}`; danach die Stand-Adresse (1. Zeile) neu laden: `"werte":[1,0,0,0,0]`, `"n":1` – nicht 2 |

Kommt im privaten Fenster eine **Google-Anmeldung** statt `{"ok":…}`: Schritt 5, „Wer hat Zugriff“ auf
**Jeder** stellen (Bereitstellungen verwalten → Bearbeiten → Neue Version → Bereitstellen).

Option = Nummer des Tiers ab 0: 0 Adler · 1 Löwe · 2 Waschbär · 3 Fuchs · 4 Schwan.

**Mit dem Handy** (am besten über **mobile Daten**, nicht WLAN – so wie das Publikum):

1. Auf dem Laptop die Präsentation öffnen (GitHub Pages oder lokal) und zu **Folie 08** gehen.
2. QR-Code mit dem Handy scannen, ein Tier antippen → Bestätigung auf dem Handy.
3. Nach wenigen Sekunden bewegt sich der Balken auf der Folie.
4. Auf dem Handy umentscheiden → der Balken wandert, die Zahl der Stimmen bleibt gleich.
5. Mindestens ein Handy nehmen, das **nicht bei Google angemeldet** ist (iPhone mit Safari oder ein
   Inkognito-Tab), möglichst iPhone und Android, aus der **letzten Reihe**.

Alle Teststimmen landen in der Runde **„probe“** und zählen im Vortrag nicht mit.

**Lasttest** (bei der Generalprobe, 1 Min.): Ob Google 20–40 Stimmen annimmt, die fast in derselben
Sekunde kommen, lässt sich ohne echten Test nicht sagen. Auf einem Rechner mit Node.js im Ordner
`praesentation/`:

```bash
node werkzeuge/live-abstimmung-test.mjs --lasttest <URL>
```

Das schickt 40 Stimmen gleichzeitig in eine eigene Runde „lasttest-…“ (zählt weder in „probe“ noch im
Vortrag) und meldet am Ende **„BESTANDEN“** oder wie viele abgelehnt wurden. Ohne Node.js: die URL an
Claude schicken und um den Lasttest bitten. Danach dürfen die Zeilen der Runde „lasttest-…“ im Blatt
gelöscht werden. Abgelehnte Stimmen sähe das Publikum als „Das hat nicht geklappt“ mit „Nochmal
versuchen“; bei vielen Ablehnungen im Vortrag zur Ruhe aufrufen („bitte nacheinander“) oder Plan C.

---

## Vor dem Vortrag: Runde umstellen

Die Generalprobe läuft mit `runde: 'probe'`. Danach – **spätestens am Vortag** (So, 25.10.) – in
`../marke.js` umstellen:

```js
runde: 'vortrag-2026-10-26',
```

Damit startet Folie 08 im Vortrag bei null; die Probestimmen bleiben in der Tabelle, zählen aber nicht.
Auch die Zahlen im Browser-Speicher des Präsentationsrechners gehören zur Runde: Werte aus der
Generalprobe (Stimmen oder von Hand gezählt) zeigt Folie 08 in der neuen Runde nicht mehr.
Die Änderung muss **auf GitHub** (für die Abstimmseite; wie in Schritt 6, Zeile `runde:`) **und** auf dem
Präsentationsrechner stehen. Früh umstellen, weil Browser alte Dateien eine Weile zwischenspeichern.

**Kontrolle – beide Stellen:**
1. **GitHub:** <https://yannickoderso.github.io/Unternehmens-Kommunikation/fallstudie-1-brand-persona/praesentation/marke.js?v=1>
   öffnen (die Zahl hinter `?v=` bei jedem Versuch ändern, sonst kommt eine alte Fassung), Strg+F `runde`:
   Dort muss `'vortrag-2026-10-26'` stehen. Sonst zählen die Handys weiter in „probe“ – und Folie 08 zeigt
   „Live“ mit `n = 0`, ohne dass sich im Vortrag etwas bewegt.
2. **Präsentationsrechner:** Folie 08 zeigt „Live“ und `n = 0`; die Maus auf der Pille zeigt
   „Runde „vortrag-2026-10-26““.
3. Ohne Stimme: `<URL>?aktion=stand&umfrage=tier&runde=vortrag-2026-10-26&anzahl=5` zeigt `"n":0`.

Wer nach dem Umstellen doch mit dem Handy testet: die Testzeile danach im Blatt „Stimmen“ löschen (mit
der rechten Maustaste auf die Zeilennummer **links** klicken → „Zeile löschen“). Löschen und Sortieren
sind erlaubt.

Bedienung der Folie im Vortrag (Pille „Live“, Werte eintippen, Zählmodus): `../LIESMICH.md`, Abschnitt 6.

## Im Vortrag

- Die Web-App läuft von allein, nichts muss gestartet werden. Der Präsentationsrechner braucht Internet.
- Zeigt ein Handy eine Fehlermeldung: **einfach noch einmal tippen**. Doppelt zählt nichts – je Handy
  gilt die letzte Stimme.
- Klappt es gar nicht: **Plan C** – Hände zählen und eintippen bzw. per Klick zählen (LIESMICH, Abschnitt 6).
  Zahlen aus der Generalprobe (Runde „probe“) zeigt Folie 08 dabei nie; stehen noch die gekennzeichneten
  Beispielwerte da, setzt die erste Handstimme alles auf 0.

## Nach dem Vortrag

1. **Ergebnis sichern:** Folie 08 fotografieren oder die Zahlen notieren. Für die Ausarbeitung kann die
   Tabelle heruntergeladen werden (Datei → Herunterladen). Quelle z. B. „eigene Live-Umfrage im Hörsaal,
   26.10.2026, n = …“.
2. **Web-App abschalten:** Apps Script → **Bereitstellen → Bereitstellungen verwalten** → die Bereitstellung
   auswählen → **Archivieren**. Danach nimmt die URL nichts mehr an.
3. In `../marke.js` `liveQuelle: ''` setzen (dann zeigt Folie 08 wieder nur den Zählmodus).
4. **Tabelle:** löschen (Google Drive → Papierkorb → endgültig löschen) **oder** behalten, bis die
   Bewertung feststeht. Sie enthält keine personenbezogenen Daten. Sparsamer ist trotzdem: nach dem
   Sichern der Ergebnisse die Spalte „Geraet“ löschen oder die ganze Tabelle.

---

## Wichtig zu wissen

- **Skript geändert? Neue Version bereitstellen.** Bereitstellen → **Bereitstellungen verwalten** →
  Stift (**Bearbeiten**) → bei „Version“ **Neue Version** → **Bereitstellen**. Sonst bleibt die alte Fassung
  aktiv. Die URL bleibt dabei gleich. **Nicht** „Neue Bereitstellung“ wählen – das erzeugt eine neue URL.
- **Nicht ändern:** den Blattnamen „Stimmen“ und die Reihenfolge der Spalten. Zeilen löschen, sortieren
  oder filtern ist in Ordnung.
- **Kontingente – nicht geprüft, Lasttest bei der Generalprobe (Schritt 7):** Google begrenzt, wie oft
  und wie viele Ausführungen eines Kontos gleichzeitig laufen dürfen
  (<https://developers.google.com/apps-script/guides/services/quotas>; die genauen Grenzen dort
  nachlesen). Alle Ausführungen laufen als Yannick („Ausführen als: Ich“). Stimmen, die gleichzeitig
  kommen, schreibt das Skript nacheinander; eine Stimme wartet höchstens 10 s, dann bekommt das Handy
  „bitte gleich noch einmal tippen“. Folie 08 fragt nur alle 2 s (eine Ausführung, ohne Warten).
- **Missbrauch:** Wer die URL kennt, kann auch von außerhalb des Hörsaals abstimmen – URL und Runde
  stehen öffentlich in `marke.js`. Eine neue Runde (z. B. `vortrag-2026-10-26-b`, überall gleich) hilft
  gegen Probestimmen und alte offene Tabs, **nicht** gegen gezielte Manipulation: Die Abstimmseite lädt
  die neue Runde ja selbst. Dagegen hilft im Vortrag nur Plan C (Handzeichen, LIESMICH Abschnitt 6) oder
  das Archivieren der Bereitstellung. Danach Spam-Zeilen im Blatt löschen – jede Zeile verlangsamt jede
  Stand-Abfrage, auch in anderen Runden.
- **Datenschutz:** Das Skript speichert keine IP-Adressen. Google und GitHub sehen beim Aufruf technisch
  die Verbindung, wie bei jeder Webseite – das sagt der Fuß der Abstimmseite dem Publikum. Die Tabelle
  bleibt privat im eigenen Konto.

## Wenn etwas nicht klappt

| Was man sieht | Ursache | Lösung |
|---|---|---|
| Google-Anmeldung oder „Zugriff verweigert“ beim Aufruf der URL | Zugriff steht nicht auf „Jeder“ | Bereitstellungen verwalten → Bearbeiten → Wer hat Zugriff: **Jeder** → Neue Version → Bereitstellen |
| Laptop zeigt „Live“, Handys melden „Das hat nicht geklappt – Die Abstimmung ist gerade nicht erreichbar“ | Zugriff steht nicht auf „Jeder“ (der angemeldete Laptop merkt es nicht) oder Web-App archiviert | Test-Adressen im **privaten Fenster** öffnen (Schritt 7); Zugriff **Jeder**, Neue Version |
| Handy: „Die Abstimmung ist gerade nicht geöffnet“ | `liveQuelle` (oder `runde`) steht noch nicht auf GitHub, GitHub Pages ist noch nicht aktuell, oder die URL endet nicht auf `/exec` | einige Minuten warten, neu laden; `marke.js` auf GitHub prüfen (Schritt 6, Kontrolle) |
| „Jeder“ gibt es nicht zur Auswahl | Konto einer Organisation (z. B. Hochschule) | mit privatem Gmail-Konto von vorn |
| „Skriptfunktion nicht gefunden: doGet“ | Code nicht eingefügt oder nicht gespeichert | Schritt 3, dann neue Version bereitstellen |
| `{"ok":false,"fehler":"Unbekannte Aktion …"}` | Adresse ohne oder mit falschem `?aktion=` | Test-Adressen genau übernehmen |
| `{"ok":false,"fehler":"Serverfehler: …"}` | z. B. Skript nicht aus der Tabelle heraus angelegt | Schritte 1–2 wiederholen (Erweiterungen → Apps Script) |
| Fehler mit „Berechtigung“ oder „permission“, obwohl „Zulassen“ geklickt wurde | Einschränkung `@OnlyCurrentDoc` | Funktion „einrichten“ noch einmal ausführen; hilft das nicht: Claude fragen |
| URL endet auf `/dev` | Test-URL, funktioniert nur für den Autor | die Web-App-URL mit **`/exec`** nehmen |
| Änderungen am Skript wirken nicht | alte Version noch aktiv | „Neue Version“ (siehe oben) |
| Folie 08 zeigt „offline“ | kein Internet am Präsentationsrechner, `liveQuelle` falsch, Web-App archiviert oder sehr langsam (Maus auf der Pille zeigt den Grund) | Klick auf die Pille = sofort neu versuchen; bleibt es: Plan C (LIESMICH, Abschnitt 6); danach URL und Internet prüfen |
| Probestimmen erscheinen im Vortrag | `runde` nicht umgestellt oder alte `marke.js` auf einem Gerät | `runde` auf GitHub und auf dem Präsentationsrechner prüfen („Vor dem Vortrag“, Kontrolle); notfalls Probezeilen löschen |
| Folie 08 zeigt „Live“ und `n = 0`, Handys stimmen ab, nichts bewegt sich | Runde auf GitHub und auf dem Präsentationsrechner verschieden | beide auf `'vortrag-2026-10-26'` (Kontrolle oben) |

**Fehler nachsehen:** Im Apps-Script-Editor links auf **„Ausführungen“** (Liste mit Uhr-Symbol) – dort
steht jeder Aufruf mit Zeit und gegebenenfalls Fehlermeldung.

## Für die Technik: prüfen ohne Google-Konto

Im Ordner `praesentation/` (braucht nur Node.js):

```bash
node werkzeuge/live-abstimmung-test.mjs                  # Prüfungen des Skripts (Exit-Code 0 = bestanden)
node werkzeuge/live-abstimmung-test.mjs --server 8787    # lokale Web-App mit dem echten Skript (Strg+C beendet sie)
```

Dann `marke.js` **nicht** ändern, sondern die Adresse mit `?quelle=` übergeben und die Dateien im Browser öffnen
(als Datei oder über localhost – auf GitHub Pages wird `?quelle=` ignoriert):

| Was | Adresse |
|---|---|
| Folie 08 | `index.html?quelle=http://localhost:8787/exec#f08` |
| Referentenfenster | `index.html?referent&quelle=http://localhost:8787/exec#f08` (Taste P gibt `?quelle` nicht weiter) |
| Abstimmseite | `abstimmen.html?u=tier&quelle=http://localhost:8787/exec` – jeder weitere Browser bzw. jedes private Fenster zählt als eigenes Handy |

Eine `liveQuelle` auf `localhost` in `marke.js` nimmt die Abstimmseite absichtlich nicht an („noch nicht
freigeschaltet“). Der QR-Code auf der Folie zeigt auch in diesem Test auf GitHub Pages; echte Handys erreichen
den Laptop so nicht. Für die Generalprobe mit Handys braucht es die echte Web-App (Schritt 7).

Die Schnittstelle (Parameter, Antworten, Prüfung der Eingaben) steht im Kopf von `apps-script.gs`.
