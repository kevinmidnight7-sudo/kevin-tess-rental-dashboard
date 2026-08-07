window.RENTAL_DATA = {
  targetCount: 50,
  updated: "2026-08-07",
  checkedAt: "2026-08-07T08:18:00+01:00",
  headline: "I have searched far and wide for a house for Tess & Kevin and as of 7 August 2026, here are my suggestions...",
  recommendation: "Sycamore Court remains the strongest all-round fit at £1,195, with Charterhouse Road at £1,400 still the best premium Godalming option. Woodland Walk is today's best verified addition at £1,300 thanks to allocated parking, EPC B and Band B council tax. The list remains deliberately strict: candidates whose exact pages could not be reopened were not added.",
  incomes: { kevin: 1730.97, tess: 1620 },
  changes: [
    { type: "new", title: "Woodland Walk added at £1,300", text: "A newly verified Aldershot option with two bedrooms, allocated parking, EPC B, Council Tax Band B and immediate availability has joined the active shortlist." },
    { type: "verified", title: "Active shortlist rechecked", text: "All records retained in the active dashboard were reopened on their exact listing pages during this run. Sycamore Court remains £1,195 and Charterhouse Road remains £1,400." },
    { type: "coverage", title: "OnTheMarket GU2 pagination still unavailable", text: "The mandatory saved GU2 filtered search returned a cache miss again today. Accessible individual listings were checked, but this refresh does not claim complete OnTheMarket GU2 pagination." },
    { type: "coverage", title: "Fresh candidates rejected when exact pages failed", text: "Several newly surfaced Aldershot results looked viable in current search pages, but their exact detail pages returned cache misses. They were not added under the hard availability gate." }
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

/* Current-run hard availability/price gate. Old chunk records stay historical but do not enter the active dashboard. */
{
  const excluded = new Set([
    'manor-road-guildford-gu2-1250',
    'queen-elizabeth-park-guildford-gu2-1500',
    'gated-development-woking-woking-gu21-1500',
    'ground-floor-gated-apartment-woking-gu22-1500',
    'chapel-fields-first-floor-apartment-godalming-gu7-1300',
    'highview-knaphill-woking-gu21-1400',
    'peperharow-road-godalming-gu7-1450',
    'penstock-mews-godalming-gu7-1450',
    'wetherby-gardens-farnborough-gu14-1200',
    'worplesdon-court-guildford-gu2-1500',
    'upper-queen-street-godalming-gu7-1500',
    'maybury-road-woking-gu21-1450',
    'lorne-gardens-knaphill-woking-gu21-1450',
    'east-street-farnham-gu9-1500',
    'catteshall-lane-weyside-park-godalming-gu7-1400',
    'nugent-court-guildford-gu2-1500',
    'avon-road-farnham-gu9-1400',
    'station-approach-ash-vale-gu12-1100',
    'whyte-avenue-aldershot-gu12-1500'
  ]);
  window.RENTAL_DATA.properties = window.RENTAL_DATA.properties.filter(property => !excluded.has(property.duplicateKey));

  const checkedAt = '2026-08-07T08:18:00+01:00';
  const verifiedLinks = new Set([
    'https://www.rightmove.co.uk/properties/90182370',
    'https://www.rightmove.co.uk/properties/90655770',
    'https://www.rightmove.co.uk/properties/88307421',
    'https://www.rightmove.co.uk/properties/89655507',
    'https://www.onthemarket.com/details/19900076/',
    'https://www.onthemarket.com/details/18204801/',
    'https://www.rightmove.co.uk/properties/89608194',
    'https://www.rightmove.co.uk/properties/90022551',
    'https://www.rightmove.co.uk/properties/90957459',
    'https://www.onthemarket.com/details/19992527/',
    'https://www.onthemarket.com/details/18969926/',
    'https://www.onthemarket.com/details/19393140/',
    'https://www.rightmove.co.uk/properties/89460432',
    'https://www.rightmove.co.uk/properties/90946707',
    'https://www.rightmove.co.uk/properties/90526110',
    'https://www.zoopla.co.uk/to-rent/details/73014166/',
    'https://www.onthemarket.com/details/19482290/',
    'https://www.rightmove.co.uk/properties/90921210',
    'https://www.onthemarket.com/details/19620448/',
    'https://www.onthemarket.com/details/19831474/',
    'https://www.rightmove.co.uk/properties/174312392',
    'https://www.rightmove.co.uk/properties/91435758'
  ]);
  window.RENTAL_DATA.properties.forEach(property => {
    if (verifiedLinks.has(property.link)) property.verifiedAt = checkedAt;
  });

  const sycamore = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90182370');
  if (sycamore) {
    sycamore.rent = 1195;
    sycamore.availabilityStatus = 'Available from 14 August 2026; exact detail page live 7 August';
    sycamore.parking = 'Allocated off-road space plus additional on-street parking';
    sycamore.parkingConfidence = 1;
    sycamore.councilBand = 'C';
    sycamore.summary = 'Two double bedrooms, allocated off-road parking plus additional street parking and a £1,195 rent make this the strongest all-round match.';
    sycamore.pros = ['£1,195 rent','Two double bedrooms','Allocated off-road parking','Additional street parking','Close to Farncombe station'];
  }

  const charterhouse = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90655770');
  if (charterhouse) {
    charterhouse.rent = 1400;
    charterhouse.availabilityStatus = 'Available from 24 August 2026; exact detail page live 7 August';
    charterhouse.epc = 'C';
    charterhouse.councilBand = 'C';
    charterhouse.parking = 'Secure underground allocated space plus visitor parking';
    charterhouse.parkingConfidence = 1;
    charterhouse.garden = 'Maintained communal gardens';
    charterhouse.outdoorConfidence = 0.95;
    charterhouse.label = 'Best premium Godalming value';
    charterhouse.summary = 'Recently refurbished with secure underground allocated parking, visitor parking and communal gardens at £1,400.';
    charterhouse.pros = ['£1,400 rent','Secure underground parking','Visitor parking','Communal gardens','EPC C','Council Tax Band C'];
    charterhouse.cons = ['No pets'];
  }

  const bakehouse = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90946707');
  if (bakehouse) {
    bakehouse.rent = 1100;
    bakehouse.availabilityStatus = 'Available from 7 August 2026; exact detail page live 7 August';
    bakehouse.epc = 'D';
    bakehouse.councilBand = 'A';
    bakehouse.summary = '£1,100 with Band A council tax; one of the cheapest verified two-bedroom options, though parking and outdoor space remain unclear.';
    bakehouse.pros = ['£1,100 rent','Council Tax Band A','Close to station and town','Available from 7 August'];
  }

  const highStreet = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90957459');
  if (highStreet) {
    highStreet.name = 'High Street, Godalming';
    highStreet.rent = 1400;
    highStreet.availabilityStatus = 'Available from 24 August 2026; exact detail page live 7 August';
    highStreet.parking = 'Not confirmed';
    highStreet.parkingConfidence = 0.2;
    highStreet.garden = 'Not confirmed; riverside walks and Phillips Memorial Park nearby';
    highStreet.outdoorConfidence = 0.3;
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
