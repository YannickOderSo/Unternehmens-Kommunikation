// Aufruf (im Repository): PLAYWRIGHT_CORE=… node fallstudie-2-customer-journey/konzept-website/werkzeuge/folie08-bilder.mjs fallstudie-2-customer-journey/praesentation/bilder
// Bildschirmfotos für Folie 08: 390 × 844, je Seite der Ausschnitt, den die Anmerkung auf der Folie beschreibt
const { chromium } = await import(process.env.PLAYWRIGHT_CORE + '/index.mjs');
const basis = 'file:///home/user/Unternehmens-Kommunikation/fallstudie-2-customer-journey/konzept-website/';
const ziel = process.argv[2];
const liste = [
  ['index.html', null, 'konzept-01-landingpage.png'],
  ['koffein-check.html', null, 'konzept-02-koffein-check.png'],
  ['produkt.html', '#packung-titel', 'konzept-03-produktseite.png'],
  ['warenkorb.html', null, 'konzept-04-warenkorb.png'],
  ['danke.html', '#h-weiter', 'konzept-05-danke.png'],
];
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
await p.route(/^https?:/, r => r.abort());
for (const [datei, anker, name] of liste) {
  await p.goto(basis + datei);
  await p.evaluate(() => document.fonts.ready);
  // Produktseite: Marcos Vorratsdose (Persona: 50er-Dose auf Vorrat) wählen
  if (datei === 'produkt.html') await p.click('.option[data-packung="50"]');
  if (anker) {
    await p.evaluate(a => {
      const el = document.querySelector(a);
      const oben = document.querySelector('.hinweisbalken').getBoundingClientRect().height;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - oben - 14, behavior: 'instant' });
    }, anker);
  }
  await p.waitForTimeout(250);
  await p.screenshot({ path: ziel + '/' + name });
  console.log(name, anker || 'oben');
}
await b.close();
