window.RENTAL_DATA = {
  targetCount: 50,
  updated: "2026-09-18",
  checkedAt: "2026-09-18T07:54:42+01:00",
  headline: "I have searched far and wide for a house for Tess & Kevin and as of 18 September 2026, here are my suggestions...",
  recommendation: "The manual-priority Woking GU22 bungalow has been removed after its exact Rightmove URL returned 410 Gone. The £1,500 Godalming garden apartment is now the strongest core-area option, while the £1,400 Woking terrace offers a private rear garden and garage inside the comfortable rent ceiling. East Street, Farnham remains a strong two-car backup at £1,450 and is now available immediately.",
  incomes: { kevin: 1730.97, tess: 1620 },
  changes: [
    { type: "removed", title: "Manual-priority Woking bungalow removed", text: "Kevin's supplied Rightmove URL 93043806 returned HTTP 410 Gone when its exact detail page was checked on 18 September. It has therefore been removed under the hard availability gate and should no longer be treated as an active candidate." },
    { type: "availability", title: "East Street is now available immediately", text: "The exact Rightmove page for East Street, Farnham remains live at £1,450 and now states Available Now. It still confirms two double bedrooms, off-street parking, a private garage and communal gardens." },
    { type: "verified", title: "Ten active records passed today's hard gate", text: "All 10 remaining carried-forward active records had their exact detail pages reopened successfully on 18 September. No stale records were retained and no search-snippet-only candidates were added." },
    { type: "coverage", title: "Mandatory OnTheMarket GU2 coverage remains incomplete", text: "The saved OnTheMarket GU2 filtered URL returned a DisabledError again on 18 September, so complete GU2 pagination could not be guaranteed. Discovery across the mandatory areas and other accessible sources was still run, but this refresh does not claim a fully comprehensive OnTheMarket sweep." }
  ],
  properties: []
};

/* Load the verified rental dataset synchronously before the dashboard starts. */
document.write('<script src="data/properties-1.js?v=20260729-1557"><\/script>');
document.write('<script src="data/properties-2.js?v=20260729-1557"><\/script>');
document.write('<script src="data/properties-3.js?v=20260729-1557"><\/script>');
document.write('<script src="data/properties-4.js?v=20260730-0803"><\/script>');
document.write('<script src="data/properties-5.js?v=20260801-0755"><\/script>');
document.write('<script src="data/properties-6.js?v=20260802-0818"><\/script>');
document.write('<script src="data/properties-7.js?v=20260805-0805"><\/script>');
document.write('<script src="data/properties-8.js?v=20260807-0818"><\/script>');
document.write('<script src="data/properties-9.js?v=20260810-0809"><\/script>');
document.write('<script src="data/properties-10.js?v=20260812-0804"><\/script>');
document.write('<script src="data/properties-11.js?v=20260813-0755"><\/script>');
document.write('<script src="data/properties-12.js?v=20260814-0807"><\/script>');
document.write('<script src="data/properties-13.js?v=20260815-0818"><\/script>');
document.write('<script src="data/properties-14.js?v=20260816-0800"><\/script>');
document.write('<script src="data/properties-15.js?v=20260817-0851"><\/script>');
document.write('<script src="data/properties-16.js?v=20260818-0809"><\/script>');
document.write('<script src="data/properties-17.js?v=20260822-0808"><\/script>');
document.write('<script src="data/properties-18.js?v=20260915-0813"><\/script>');
document.write('<script src="data/properties-19.js?v=20260916-0800"><\/script>');

/* Current-run hard availability gate: only exact pages successfully reopened this run remain active. */
{
  const checkedAt = '2026-09-18T07:54:42+01:00';
  const verifiedNames = new Set([
    'Ground Floor Garden Apartment, Godalming',
    'Woking GU21 Terrace with Garage',
    'East Street',
    'Moore Close, Tongham',
    'Hale Court, Fairview Gardens',
    'Aldershot GU11 Ground Floor Flat',
    'Merlin Road',
    'Anderson House, St Georges Road',
    '43 Frensham Road, Lower Bourne',
    'Waverley Close, Farnham'
  ]);
  window.RENTAL_DATA.properties = window.RENTAL_DATA.properties.filter(property => verifiedNames.has(property.name));
  window.RENTAL_DATA.properties.forEach(property => { property.verifiedAt = checkedAt; });

  const eastStreet = window.RENTAL_DATA.properties.find(property => property.name === 'East Street');
  if (eastStreet) {
    eastStreet.rent = 1450;
    eastStreet.score = 90;
    eastStreet.source = 'Rightmove';
    eastStreet.sourceType = 'portal';
    eastStreet.link = 'https://www.rightmove.co.uk/properties/91025910';
    eastStreet.status = 'Available';
    eastStreet.availabilityStatus = 'Available now; exact Rightmove detail page live 18 September 2026';
    eastStreet.duplicateKey = 'rightmove-91025910-east-street-farnham-gu9-1450';
    eastStreet.councilBand = 'C';
    eastStreet.parking = 'Off-street parking plus private garage';
    eastStreet.parkingConfidence = 1;
    eastStreet.garden = 'Communal gardens';
    eastStreet.outdoorConfidence = 1;
    eastStreet.label = 'Strong two-car Farnham backup';
    eastStreet.summary = '£1,450 with two double bedrooms, off-street parking plus a private garage and communal gardens.';
  }

  window.RENTAL_DATA.properties.sort((a, b) => (b.score - a.score) || ((a.distanceMiles ?? 999) - (b.distanceMiles ?? 999)) || (a.rent - b.rent));
  window.RENTAL_DATA.properties.forEach((property, index) => { property.rank = index + 1; });
}

/* Keep the Guildford-address filter exact instead of matching every GU1x/GU2x postcode. */
window.RENTAL_DATA.properties.forEach(property => {
  property.tags = (property.tags || []).filter(tag => tag !== 'guildford');
  if (String(property.area || '').startsWith('Guildford')) property.tags.push('guildford');
});

/* App enhancements: keep this loader block when refreshing rental data. */
(()=>{
  const css=document.createElement('link');css.rel='stylesheet';css.href='enhancements.css?v=20260727';document.head.appendChild(css);
  const script=document.createElement('script');script.src='enhancements.js?v=20260727';script.defer=true;document.head.appendChild(script);
})();