window.RENTAL_DATA = {
  targetCount: 50,
  updated: "2026-08-17",
  checkedAt: "2026-08-17T08:51:09+01:00",
  headline: "I have searched far and wide for a house for Tess & Kevin and as of 17 August 2026, here are my suggestions...",
  recommendation: "Sycamore Court is again the strongest overall fit after its exact Rightmove page dropped back to £1,150 and now shows available now. Charterhouse Road remains the strongest premium Godalming alternative at £1,400 with secure underground allocated parking, visitor parking and communal gardens. Knaphill at £1,295 is today's strongest new backup because it adds residents parking, visitor parking and communal gardens within the comfortable rent range.",
  incomes: { kevin: 1730.97, tess: 1620 },
  changes: [
    { type: "price", title: "Sycamore Court dropped back to £1,150", text: "The exact Rightmove detail page opened successfully on 17 August and now shows £1,150 pcm and let available date 'Now'. It still confirms two double bedrooms, allocated off-road parking and additional on-street parking, so it remains the strongest all-round fit." },
    { type: "added", title: "Knaphill two-bed added at £1,295", text: "The exact Rightmove page is live and confirms two bedrooms, residents parking, visitor parking, communal gardens, EPC C and Council Tax Band C. The second bedroom is described as a single/office, so it ranks below the strongest Godalming options." },
    { type: "added", title: "Hallington Close added at £1,350", text: "The exact Rightmove page is live and ready for viewings, with two bedrooms, a private garage, Council Tax Band C and a Juliette balcony. No second parking space or garden is confirmed, and the move-in date must be confirmed with the agent." },
    { type: "removed", title: "One Aldershot listing removed as let agreed", text: "The exact Rightmove page for the £1,100 two-bedroom first-floor apartment now explicitly says LET AGREED, so it was removed immediately." },
    { type: "source", title: "Ilmdeen Court retained on a stronger live source", text: "Its OnTheMarket page failed to open reliably today, but the exact Romans/Rightmove listing opened and confirms £1,300, two bedrooms, EPC B, Council Tax Band C and one allocated parking bay. The dashboard now uses that verified Rightmove URL instead." },
    { type: "coverage", title: "OnTheMarket GU2 filtered-search coverage remains incomplete", text: "The mandatory saved GU2 filtered URL again returned an internal error, so complete OnTheMarket GU2 pagination could not be guaranteed. The Bridges direct page for one previously retained Tongham property and one older Rightmove record also failed exact-page verification and were removed under the hard gate." },
    { type: "verified", title: "Sixteen active records passed today's hard gate", text: "Every retained active record had an exact detail page opened during this run. The active total is intentionally below 50 rather than padded with stale, unavailable or weakly verified listings." }
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

/* Current-run hard availability gate: only exact pages successfully reopened this run remain active. */
{
  const checkedAt = '2026-08-17T08:51:09+01:00';
  const verifiedLinks = new Set([
    'https://www.rightmove.co.uk/properties/90182370',
    'https://www.rightmove.co.uk/properties/90655770',
    'https://www.rightmove.co.uk/properties/88307421',
    'https://www.rightmove.co.uk/properties/89655507',
    'https://www.onthemarket.com/details/19900076/',
    'https://www.rightmove.co.uk/properties/90957459',
    'https://www.rightmove.co.uk/properties/89460432',
    'https://www.rightmove.co.uk/properties/90946707',
    'https://www.rightmove.co.uk/properties/90921210',
    'https://www.rightmove.co.uk/properties/174312392',
    'https://www.rightmove.co.uk/properties/172823885',
    'https://www.rightmove.co.uk/properties/90015357',
    'https://www.rightmove.co.uk/properties/87792279',
    'https://www.rightmove.co.uk/properties/175035293',
    'https://www.rightmove.co.uk/properties/91903926',
    'https://www.rightmove.co.uk/properties/174029021'
  ]);
  window.RENTAL_DATA.properties = window.RENTAL_DATA.properties.filter(property => verifiedLinks.has(property.link));
  window.RENTAL_DATA.properties.forEach(property => { property.verifiedAt = checkedAt; });

  const sycamore = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90182370');
  if (sycamore) {
    sycamore.rent = 1150;
    sycamore.availabilityStatus = 'Available now; exact detail page live 17 August 2026';
    sycamore.parking = 'Allocated off-road space plus additional on-street parking';
    sycamore.parkingConfidence = 1;
    sycamore.councilBand = 'C';
    sycamore.summary = 'Two double bedrooms, allocated off-road parking plus additional street parking and a £1,150 rent make this the strongest all-round match.';
    sycamore.pros = ['£1,150 rent','Two double bedrooms','Allocated off-road parking','Additional street parking','Close to Farncombe station','Available now'];
  }

  const charterhouse = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90655770');
  if (charterhouse) {
    charterhouse.rent = 1400;
    charterhouse.availabilityStatus = 'Available from 24 August 2026; exact detail page live 17 August';
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
    bakehouse.availabilityStatus = 'Available now; exact detail page live 17 August';
    bakehouse.councilBand = 'A'; bakehouse.epc = 'D';
    bakehouse.summary = 'Very low £1,100 rent and Band A council tax keep this a strong savings-led backup, though parking remains unconfirmed.';
    bakehouse.pros = ['£1,100 rent','Council Tax Band A','Close to station and town','Available now'];
  }

  const brandHouse = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90015357');
  if (brandHouse) {
    brandHouse.rent = 1350;
    brandHouse.availabilityStatus = 'Exact detail page live 17 August 2026';
    brandHouse.councilBand = 'C';
    brandHouse.parking = 'One allocated parking space'; brandHouse.parkingConfidence = 1;
    brandHouse.garden = 'Private balcony overlooking a communal first-floor garden'; brandHouse.outdoorConfidence = 1;
  }

  const broadHaPenny = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90921210');
  if (broadHaPenny) {
    broadHaPenny.rent = 1295;
    broadHaPenny.availabilityStatus = 'Exact detail page live 17 August 2026';
    broadHaPenny.summary = 'A proper two-bedroom terraced house at £1,295 rent, with parking and a practical Farnham/Boundstone location.';
    broadHaPenny.pros = ['£1,295 rent','Two-bedroom terraced house','Parking','Below comfortable rent ceiling'];
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