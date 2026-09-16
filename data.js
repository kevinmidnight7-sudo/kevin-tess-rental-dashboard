window.RENTAL_DATA = {
  targetCount: 50,
  updated: "2026-09-16",
  checkedAt: "2026-09-16T08:00:00+01:00",
  headline: "I have searched far and wide for a house for Tess & Kevin and as of 16 September 2026, here are my suggestions...",
  recommendation: "Kevin's manual-priority Woking GU22 bungalow remains live at £1,430 with a large private garden and driveway. A newly listed £1,500 Lower Bourne/Farnham ground-floor apartment is today's strongest addition because it combines a garage, one allocated parking space, patio and communal gardens. The £1,500 Godalming garden apartment remains the strongest core-area option that passed today's exact-page gate.",
  incomes: { kevin: 1730.97, tess: 1620 },
  changes: [
    { type: "added", title: "New Lower Bourne two-car option at £1,500", text: "43 Frensham Road, Farnham GU10 was added today after its exact Rightmove page passed the gate. It has two bedrooms, two bathrooms, a garage plus one allocated parking space, French doors to a patio and communal gardens, and is available from around 24 October." },
    { type: "added", title: "Waverley Close added at £1,500", text: "This two-double-bedroom Farnham maisonette passed today's exact Rightmove check. It is available now, has EPC C, Council Tax Band D and a garage for parking, although no outdoor space or second parking bay is confirmed." },
    { type: "verified", title: "Manual-priority Woking bungalow remains live", text: "Kevin's supplied Rightmove URL 93043806 passed the exact-page gate again on 16 September at £1,430. It remains a two-bedroom bungalow with a large private garden, driveway/off-road parking and availability from 25 November 2026." },
    { type: "removed", title: "Charterhouse Road temporarily removed under the hard gate", text: "The previously used exact Zoopla URL could not be reliably reopened during this run, so Charterhouse Road is not being carried forward on yesterday's verification." },
    { type: "coverage", title: "Mandatory source coverage remains incomplete", text: "The saved OnTheMarket GU2 filtered URL was blocked/disabled again on 16 September, so complete OnTheMarket GU2 pagination could not be guaranteed. Search discovery was run across mandatory areas and sources, but portal indexing/access limitations mean this run does not claim a fully comprehensive sweep of every result page." },
    { type: "verified", title: "Eleven active records passed today's hard gate", text: "The active total is intentionally 11 rather than padded with stale or weakly verified listings. Ranks are contiguous after scoring and duplicate keys are unique." }
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
  const checkedAt = '2026-09-16T08:00:00+01:00';
  const verifiedNames = new Set([
    'Bungalow, Woking GU22',
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
    eastStreet.availabilityStatus = 'Available from 17 September 2026; exact Rightmove detail page live 16 September 2026';
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