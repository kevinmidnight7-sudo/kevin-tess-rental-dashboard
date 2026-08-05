window.RENTAL_DATA = {
  targetCount: 50,
  updated: "2026-08-05",
  checkedAt: "2026-08-05T08:05:00+01:00",
  headline: "I have searched far and wide for a house for Tess & Kevin and as of 5 August 2026, here are my suggestions...",
  recommendation: "Sycamore Court remains the strongest all-round fit at £1,195. Charterhouse Road at £1,400 is still the best premium Godalming option. Stone Street at £1,200 is today's standout new value find because it combines two double bedrooms, an allocated space, unrestricted street parking and a small rear garden. Station Approach at £1,100 is the strongest saving-led backup. Several older records were removed today after exact-page checks showed let agreed or could not be reopened reliably.",
  incomes: { kevin: 1730.97, tess: 1620 },
  changes: [
    { type: "new", title: "Four verified homes added", text: "Stone Street (£1,200), Station Approach (£1,100), a Woking town-centre apartment (£1,400) and Whyte Avenue (£1,500) all passed exact-detail-page checks today." },
    { type: "price", title: "Bakehouse Mews reduced to £1,100", text: "Its live Rightmove page now shows £1,100 rather than £1,150, with Band A council tax and availability from 7 August." },
    { type: "removed", title: "Penstock Mews, Wetherby Gardens and Worplesdon Court removed", text: "Current exact pages now show LET AGREED / Let agreed, so they have been removed from the active shortlist." },
    { type: "removed", title: "Four inaccessible records removed from active view", text: "Upper Queen Street, Maybury Road, Lorne Gardens and East Street could not pass today's exact-page gate, so they are hidden rather than carried forward on stale verification." },
    { type: "coverage", title: "OnTheMarket GU2 search still blocked", text: "The mandatory filtered GU2 URL returned a cache miss today. Individual exact listings that could be opened were checked, but the sweep does not claim complete OnTheMarket GU2 pagination." }
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
    'east-street-farnham-gu9-1500'
  ]);
  window.RENTAL_DATA.properties = window.RENTAL_DATA.properties.filter(property => !excluded.has(property.duplicateKey));

  const checkedAt = '2026-08-05T08:05:00+01:00';

  const sycamore = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90182370');
  if (sycamore) {
    sycamore.rent = 1195;
    sycamore.availabilityStatus = 'Available from 14 August 2026; exact detail page live 5 August';
    sycamore.parking = 'Allocated off-road space plus additional on-street parking';
    sycamore.parkingConfidence = 1;
    sycamore.councilBand = 'C';
    sycamore.summary = 'Two double bedrooms, allocated off-road parking plus additional street parking and a £1,195 rent make this the strongest all-round match.';
    sycamore.pros = ['£1,195 rent','Two double bedrooms','Allocated off-road parking','Additional street parking','Close to Farncombe station'];
    sycamore.verifiedAt = checkedAt;
  }

  const charterhouse = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90655770');
  if (charterhouse) {
    charterhouse.rent = 1400;
    charterhouse.availabilityStatus = 'Available from 24 August 2026; exact detail page live 5 August';
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
    charterhouse.verifiedAt = checkedAt;
  }

  const catteshall = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.onthemarket.com/details/19937061/');
  if (catteshall) {
    catteshall.availabilityStatus = 'Exact listing checked 5 August 2026';
    catteshall.verifiedAt = checkedAt;
  }

  const gloster = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/89608194');
  if (gloster) {
    gloster.availabilityStatus = 'Exact detail page live 5 August; advertised available from 11 September 2026';
    gloster.verifiedAt = checkedAt;
  }

  const bakehouse = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90946707');
  if (bakehouse) {
    bakehouse.rent = 1100;
    bakehouse.availabilityStatus = 'Available from 7 August 2026; exact detail page live 5 August';
    bakehouse.epc = 'D';
    bakehouse.councilBand = 'A';
    bakehouse.summary = 'Reduced to £1,100 with Band A council tax; one of the cheapest verified two-bedroom options, though parking and outdoor space remain unclear.';
    bakehouse.pros = ['£1,100 rent','Council Tax Band A','Close to station and town','Available from 7 August'];
    bakehouse.verifiedAt = checkedAt;
  }

  const highStreet = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90957459');
  if (highStreet) {
    highStreet.name = 'High Street, Godalming';
    highStreet.rent = 1400;
    highStreet.availabilityStatus = 'Available from 24 August 2026; exact detail page live 5 August';
    highStreet.parking = 'Not confirmed';
    highStreet.parkingConfidence = 0.2;
    highStreet.garden = 'Not confirmed; riverside walks and Phillips Memorial Park nearby';
    highStreet.outdoorConfidence = 0.3;
    highStreet.verifiedAt = checkedAt;
  }

  const yorkRoad = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.zoopla.co.uk/to-rent/details/73014166/');
  if (yorkRoad) yorkRoad.verifiedAt = checkedAt;

  const broad = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90921210');
  if (broad) broad.verifiedAt = checkedAt;

  const tudorOpenRent = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.onthemarket.com/details/19620448/');
  if (tudorOpenRent) tudorOpenRent.verifiedAt = checkedAt;

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
