window.RENTAL_DATA = {
  targetCount: 50,
  updated: "2026-08-18",
  checkedAt: "2026-08-18T08:09:21+01:00",
  headline: "I have searched far and wide for a house for Tess & Kevin and as of 18 August 2026, here are my suggestions...",
  recommendation: "Sycamore Court remains the strongest overall fit at £1,150 with two double bedrooms, allocated off-road parking and additional street parking. Charterhouse Road remains the strongest premium Godalming alternative at £1,400 with secure underground allocated parking, visitor parking and communal gardens. East Street in Farnham is today's strongest new two-car-friendly backup because it combines off-street parking with a private garage and communal gardens, though it sits at the £1,500 stretch ceiling.",
  incomes: { kevin: 1730.97, tess: 1620 },
  changes: [
    { type: "added", title: "East Street, Farnham added at £1,500", text: "The exact Rightmove detail page opened successfully on 18 August and confirms two double bedrooms, off-street parking, a private garage, communal gardens and Council Tax Band C. It is available from 17 September and sits at the stretch-rent ceiling." },
    { type: "added", title: "Gloster Close, Ash Vale added at £1,495", text: "The exact Rightmove detail page opened successfully on 18 August and confirms a semi-detached two-double-bedroom house with allocated parking, a private garden and availability from 11 September. It is a practical house-and-garden backup but only one parking space is confirmed." },
    { type: "removed", title: "High Street, Godalming removed as let agreed", text: "The exact Rightmove page now explicitly says LET AGREED, so the £1,400 Godalming town-centre apartment was removed immediately under the hard availability gate." },
    { type: "removed", title: "Hallington Close temporarily removed", text: "Its exact Rightmove URL failed to load reliably during today's run. It has therefore been hidden rather than retained on stale verification." },
    { type: "rejected", title: "Strong Farncombe house rejected after exact-page check", text: "A two-bedroom Farncombe house with two allocated spaces and a private rear garden surfaced in discovery, but its exact OnTheMarket page says No longer on the market, so it was not added." },
    { type: "coverage", title: "OnTheMarket GU2 filtered-search coverage remains incomplete", text: "The mandatory saved GU2 filtered URL again returned an internal error, so complete OnTheMarket GU2 pagination could not be guaranteed. Portal discovery was also uneven across some result pages, so this run does not claim a comprehensive sweep where pages were inaccessible." },
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
document.write('<script src="data/properties-16.js?v=20260818-0809"><\/script>');

/* Current-run hard availability gate: only exact pages successfully reopened this run remain active. */
{
  const checkedAt = '2026-08-18T08:09:21+01:00';
  const verifiedLinks = new Set([
    'https://www.rightmove.co.uk/properties/90182370',
    'https://www.rightmove.co.uk/properties/90655770',
    'https://www.rightmove.co.uk/properties/88307421',
    'https://www.rightmove.co.uk/properties/89655507',
    'https://www.onthemarket.com/details/19900076/',
    'https://www.rightmove.co.uk/properties/89460432',
    'https://www.rightmove.co.uk/properties/90946707',
    'https://www.rightmove.co.uk/properties/90921210',
    'https://www.rightmove.co.uk/properties/174312392',
    'https://www.rightmove.co.uk/properties/172823885',
    'https://www.rightmove.co.uk/properties/90015357',
    'https://www.rightmove.co.uk/properties/87792279',
    'https://www.rightmove.co.uk/properties/175035293',
    'https://www.rightmove.co.uk/properties/174029021',
    'https://www.rightmove.co.uk/properties/91025910',
    'https://www.rightmove.co.uk/properties/89608194'
  ]);
  window.RENTAL_DATA.properties = window.RENTAL_DATA.properties.filter(property => verifiedLinks.has(property.link));
  window.RENTAL_DATA.properties.forEach(property => { property.verifiedAt = checkedAt; });

  const sycamore = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90182370');
  if (sycamore) {
    sycamore.rent = 1150;
    sycamore.availabilityStatus = 'Available now; exact detail page live 18 August 2026';
    sycamore.parking = 'Allocated off-road space plus additional on-street parking';
    sycamore.parkingConfidence = 1;
    sycamore.councilBand = 'C';
    sycamore.summary = 'Two double bedrooms, allocated off-road parking plus additional street parking and a £1,150 rent make this the strongest all-round match.';
    sycamore.pros = ['£1,150 rent','Two double bedrooms','Allocated off-road parking','Additional street parking','Close to Farncombe station','Available now'];
  }

  const charterhouse = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90655770');
  if (charterhouse) {
    charterhouse.rent = 1400;
    charterhouse.availabilityStatus = 'Available from 24 August 2026; exact detail page live 18 August';
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
    bakehouse.availabilityStatus = 'Available now; exact detail page live 18 August';
    bakehouse.councilBand = 'A'; bakehouse.epc = 'D';
    bakehouse.summary = 'Very low £1,100 rent and Band A council tax keep this a strong savings-led backup, though parking remains unconfirmed.';
    bakehouse.pros = ['£1,100 rent','Council Tax Band A','Close to station and town','Available now'];
  }

  const brandHouse = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90015357');
  if (brandHouse) {
    brandHouse.rent = 1350;
    brandHouse.availabilityStatus = 'Exact detail page live 18 August 2026';
    brandHouse.councilBand = 'C';
    brandHouse.parking = 'One allocated parking space'; brandHouse.parkingConfidence = 1;
    brandHouse.garden = 'Private balcony overlooking a communal first-floor garden'; brandHouse.outdoorConfidence = 1;
  }

  const broadHaPenny = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90921210');
  if (broadHaPenny) {
    broadHaPenny.rent = 1295;
    broadHaPenny.availabilityStatus = 'Exact detail page live 18 August 2026';
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