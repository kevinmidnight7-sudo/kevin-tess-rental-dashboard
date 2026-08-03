window.RENTAL_DATA = {
  targetCount: 50,
  updated: "2026-08-03",
  checkedAt: "2026-08-03T08:02:00+01:00",
  headline: "I have searched far and wide for a house for Tess & Kevin and as of 3 August 2026, here are my suggestions...",
  recommendation: "Two of the strongest Godalming options have just become materially better value. Sycamore Court is now £1,195 rather than £1,250 and remains the strongest all-round fit, while the refurbished Charterhouse Road apartment is now £1,400 rather than £1,500 with secure underground allocated parking, visitor parking and communal gardens. No weakly verified discovery has been added just to increase the count.",
  incomes: { kevin: 1730.97, tess: 1620 },
  changes: [
    { type: "price", title: "Sycamore Court reduced to £1,195", text: "The exact Rightmove page is live today at £1,195 pcm, available 14 August, with two double bedrooms, allocated off-road parking and additional on-street parking." },
    { type: "price", title: "Charterhouse Road reduced to £1,400", text: "The exact Rightmove page is live today at £1,400 pcm, available 24 August, with EPC C, Band C council tax, secure underground allocated parking, visitor parking and maintained communal gardens." },
    { type: "verified", title: "Godalming market rechecked", text: "Current Godalming portal results were re-read against exact pages. Let-agreed and over-budget results were rejected rather than added." },
    { type: "coverage", title: "OnTheMarket GU2 saved search still inaccessible", text: "The mandatory exact GU2 filtered URL returned a cache miss this morning, so complete GU2 OnTheMarket pagination cannot honestly be claimed. Accessible live listing pages and other portal searches were still checked." }
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

  const checkedAt = '2026-08-03T08:02:00+01:00';

  const sycamore = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90182370');
  if (sycamore) {
    sycamore.rent = 1195;
    sycamore.availabilityStatus = 'Available from 14 August 2026; reduced to £1,195 pcm';
    sycamore.parking = 'Allocated off-road space plus additional on-street parking';
    sycamore.parkingConfidence = 1;
    sycamore.councilBand = 'C';
    sycamore.summary = 'Two double bedrooms, allocated off-road parking plus additional street parking and a newly reduced £1,195 rent make this the strongest all-round match.';
    sycamore.pros = ['£1,195 rent','Two double bedrooms','Allocated off-road parking','Additional street parking','Close to Farncombe station'];
    sycamore.verifiedAt = checkedAt;
  }

  const charterhouse = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90655770');
  if (charterhouse) {
    charterhouse.rent = 1400;
    charterhouse.availabilityStatus = 'Available from 24 August 2026; reduced to £1,400 pcm';
    charterhouse.epc = 'C';
    charterhouse.councilBand = 'C';
    charterhouse.parking = 'Secure underground allocated space plus visitor parking';
    charterhouse.parkingConfidence = 1;
    charterhouse.garden = 'Maintained communal gardens';
    charterhouse.outdoorConfidence = 0.95;
    charterhouse.label = 'Best premium Godalming value';
    charterhouse.summary = 'Recently refurbished with secure underground allocated parking, visitor parking and communal gardens; the reduction to £1,400 moves it into the comfort ceiling.';
    charterhouse.pros = ['£1,400 reduced rent','Secure underground parking','Visitor parking','Communal gardens','EPC C','Council Tax Band C'];
    charterhouse.cons = ['No pets'];
    charterhouse.verifiedAt = checkedAt;
  }

  const highStreet = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90957459');
  if (highStreet) {
    highStreet.name = 'High Street, Godalming';
    highStreet.rent = 1400;
    highStreet.availabilityStatus = 'Available from 24 August 2026';
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
