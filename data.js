window.RENTAL_DATA = {
  targetCount: 50,
  updated: "2026-08-12",
  checkedAt: "2026-08-12T08:04:05+01:00",
  headline: "I have searched far and wide for a house for Tess & Kevin and as of 12 August 2026, here are my suggestions...",
  recommendation: "Sycamore Court remains the strongest overall fit at £1,150 with two double bedrooms, allocated off-road parking plus additional street parking in Godalming/Farncombe. Charterhouse Road remains the strongest premium Godalming alternative at £1,400 with secure underground allocated parking, visitor parking and communal gardens. A newly verified £1,500 Woking GU22 apartment adds another two-double-bedroom option with parking, though it remains a weaker two-car fit than the Godalming leaders.",
  incomes: { kevin: 1730.97, tess: 1620 },
  changes: [
    { type: "added", title: "New Woking GU22 apartment added at £1,500", text: "The exact Rightmove detail page is live today and confirms two double bedrooms, parking, Council Tax Band C and immediate availability. It is added as a stretch-budget Woking option; the listing does not confirm a second parking space or outdoor space." },
    { type: "verified", title: "Twenty-two active records passed today's hard gate", text: "Every retained active record had its exact detail page reopened during this run. Search-result-only candidates, 410/generic redirects and let-agreed pages were not added." },
    { type: "coverage", title: "OnTheMarket GU2 pagination remains unavailable", text: "The mandatory saved GU2 filtered search returned an internal/cache error again today. Individual accessible listing pages were checked directly, but this refresh does not claim complete OnTheMarket GU2 pagination." }
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

/* Current-run hard availability/price gate. Old chunk records stay historical but do not enter the active dashboard. */
{
  const excluded = new Set([
    'manor-road-guildford-gu2-1250','queen-elizabeth-park-guildford-gu2-1500','gated-development-woking-woking-gu21-1500','ground-floor-gated-apartment-woking-gu22-1500','chapel-fields-first-floor-apartment-godalming-gu7-1300','highview-knaphill-woking-gu21-1400','peperharow-road-godalming-gu7-1450','penstock-mews-godalming-gu7-1450','wetherby-gardens-farnborough-gu14-1200','worplesdon-court-guildford-gu2-1500','upper-queen-street-godalming-gu7-1500','maybury-road-woking-gu21-1450','lorne-gardens-knaphill-woking-gu21-1450','east-street-farnham-gu9-1500','catteshall-lane-weyside-park-godalming-gu7-1400','nugent-court-guildford-gu2-1500','avon-road-farnham-gu9-1400','station-approach-ash-vale-gu12-1100','whyte-avenue-aldershot-gu12-1500','woodland-walk-aldershot-gu12-1300','high-street-openrent-godalming-gu7-1200','tudor-way-knaphill-openrent-gu21-1350'
  ]);
  window.RENTAL_DATA.properties = window.RENTAL_DATA.properties.filter(property => !excluded.has(property.duplicateKey));

  const checkedAt = '2026-08-12T08:04:05+01:00';
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
    'https://www.onthemarket.com/details/18969926/',
    'https://www.onthemarket.com/details/19393140/',
    'https://www.rightmove.co.uk/properties/89460432',
    'https://www.rightmove.co.uk/properties/90946707',
    'https://www.rightmove.co.uk/properties/90526110',
    'https://www.zoopla.co.uk/to-rent/details/73014166/',
    'https://www.onthemarket.com/details/19482290/',
    'https://www.rightmove.co.uk/properties/90921210',
    'https://www.onthemarket.com/details/19831474/',
    'https://www.rightmove.co.uk/properties/174312392',
    'https://www.rightmove.co.uk/properties/173860292',
    'https://www.rightmove.co.uk/properties/172823885',
    'https://www.rightmove.co.uk/properties/174176489'
  ]);
  window.RENTAL_DATA.properties.forEach(property => { if (verifiedLinks.has(property.link)) property.verifiedAt = checkedAt; });

  const sycamore = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90182370');
  if (sycamore) {
    sycamore.rent = 1150;
    sycamore.availabilityStatus = 'Available from 14 August 2026; exact detail page live 12 August';
    sycamore.parking = 'Allocated off-road space plus additional on-street parking';
    sycamore.parkingConfidence = 1;
    sycamore.councilBand = 'C';
    sycamore.summary = 'Two double bedrooms, allocated off-road parking plus additional street parking and a £1,150 rent make this the strongest all-round match.';
    sycamore.pros = ['£1,150 rent','Two double bedrooms','Allocated off-road parking','Additional street parking','Close to Farncombe station'];
  }

  const charterhouse = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90655770');
  if (charterhouse) {
    charterhouse.rent = 1400;
    charterhouse.availabilityStatus = 'Available from 24 August 2026; exact detail page live 12 August';
    charterhouse.epc = 'C'; charterhouse.councilBand = 'C';
    charterhouse.parking = 'Secure underground allocated space plus visitor parking'; charterhouse.parkingConfidence = 1;
    charterhouse.garden = 'Maintained communal gardens'; charterhouse.outdoorConfidence = 0.95;
    charterhouse.label = 'Best premium Godalming value';
    charterhouse.summary = 'Recently refurbished with secure underground allocated parking, visitor parking and communal gardens at £1,400.';
    charterhouse.pros = ['£1,400 rent','Secure underground parking','Visitor parking','Communal gardens','EPC C','Council Tax Band C'];
    charterhouse.cons = ['No pets'];
  }

  const bakehouse = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90946707');
  if (bakehouse) {
    bakehouse.rent = 1100;
    bakehouse.availabilityStatus = 'Available now; exact detail page live 12 August';
    bakehouse.councilBand = 'A'; bakehouse.epc = 'D';
    bakehouse.summary = 'Very low £1,100 rent and Band A council tax keep this a strong savings-led backup, though parking remains unconfirmed.';
    bakehouse.pros = ['£1,100 rent','Council Tax Band A','Close to station and town','Available now'];
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