window.RENTAL_DATA = {
  targetCount: 50,
  updated: "2026-08-02",
  checkedAt: "2026-08-02T08:18:00+01:00",
  headline: "I have searched far and wide for a house for Tess & Kevin and as of 2 August 2026, here are my suggestions...",
  recommendation: "Sycamore Court remains the strongest all-round fit. Broad Ha'penny is today's strongest new house-value option at £1,350 with allocated parking, visitor parking and communal grounds, while the newly verified £1,350 Tudor Way OpenRent flat offers two double bedrooms, EPC B and allocated parking. The shortlist now has 32 active records, with unverified or let-agreed discoveries rejected rather than used to pad the count.",
  incomes: { kevin: 1730.97, tess: 1620 },
  changes: [
    { type: "new", title: "Two useful verified homes added", text: "Broad Ha'penny in Farnham and a separate £1,350 Tudor Way OpenRent flat in Knaphill have joined the shortlist after exact-page checks." },
    { type: "verified", title: "Godalming search surfaced a tempting let-agreed home", text: "Ockford Road at £1,450 looked exceptional with two allocated spaces, visitor parking, private patio and communal gardens, but its exact Rightmove page says LET AGREED, so it was correctly excluded." },
    { type: "correction", title: "High Street Godalming record clarified", text: "The current exact listing at £1,400 is a two-double-bedroom apartment available 24 August; parking and garden remain unconfirmed, so it stays below better two-car options." },
    { type: "coverage", title: "OnTheMarket GU2 coverage incomplete this run", text: "The mandatory saved GU2 search returned a cache miss, so this run does not claim complete OnTheMarket GU2 pagination coverage. Exact accessible listing pages and other live portal searches were still checked, and no blocked page was assumed active." }
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

/* Current-run hard availability/price gate. Old chunk records stay historical but do not enter the active dashboard. */
{
  const excluded = new Set([
    'manor-road-guildford-gu2-1250',
    'queen-elizabeth-park-guildford-gu2-1500',
    'gated-development-woking-woking-gu21-1500',
    'ground-floor-gated-apartment-woking-gu22-1500'
  ]);
  window.RENTAL_DATA.properties = window.RENTAL_DATA.properties.filter(property => !excluded.has(property.duplicateKey));

  const checkedAt = '2026-08-02T08:18:00+01:00';
  const checkedKeys = new Set([
    'sycamore-court-long-gore-godalming-gu7-1250',
    'charterhouse-road-refurbished-apartment-godalming-gu7-1500',
    'angel-court-high-street-godalming-gu7-1400',
    'broad-hapenny-boundstone-farnham-gu10-1350',
    'tudor-way-knaphill-openrent-gu21-1350'
  ]);
  window.RENTAL_DATA.properties.forEach(property => {
    if (checkedKeys.has(property.duplicateKey)) property.verifiedAt = checkedAt;
  });

  const peperharow = window.RENTAL_DATA.properties.find(property => property.duplicateKey === 'peperharow-road-godalming-gu7-1450');
  if (peperharow) peperharow.availabilityStatus = 'Current page remains live but contains conflicting timing: status says Now while key text says mid-December; confirm with agent before viewing';

  const highStreet = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90957459');
  if (highStreet) {
    highStreet.name = 'High Street, Godalming';
    highStreet.rent = 1400;
    highStreet.availabilityStatus = 'Available from 24 August 2026';
    highStreet.parking = 'Not confirmed';
    highStreet.parkingConfidence = 0.2;
    highStreet.garden = 'Not confirmed; riverside walks and Phillips Memorial Park nearby';
    highStreet.outdoorConfidence = 0.3;
    highStreet.summary = 'Two double bedrooms in central Godalming at the comfort ceiling, with excellent transport access but unresolved parking.';
    highStreet.pros = ['£1,400 rent','Two double bedrooms','Central Godalming','Guildford by rail in under 10 minutes'];
    highStreet.cons = ['Parking unconfirmed','No dedicated garden confirmed','Council tax and EPC need confirming'];
    highStreet.verifiedAt = checkedAt;
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
