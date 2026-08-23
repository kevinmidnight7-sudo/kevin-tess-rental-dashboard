window.RENTAL_DATA = {
  targetCount: 50,
  updated: "2026-08-23",
  checkedAt: "2026-08-23T08:04:27+01:00",
  headline: "I have searched far and wide for a house for Tess & Kevin and as of 23 August 2026, here are my suggestions...",
  recommendation: "Sycamore Court remains the strongest overall fit at £1,150 pcm after its exact Zoopla page reopened cleanly today, with two double bedrooms, allocated off-road parking and additional on-street parking. Charterhouse Road remains the strongest premium Godalming option at £1,500 with a private south-facing patio, communal gardens and a private garage. Weyside on Catteshall Lane is a newly added £1,350 core-area value option with off-street parking, while East Street in Farnham remains a useful two-car backup at £1,500 with off-street parking and a private garage.",
  incomes: { kevin: 1730.97, tess: 1620 },
  changes: [
    { type: "added", title: "Weyside, Catteshall Lane added at £1,350", text: "The exact Zoopla detail page was verified on 23 August and confirms a two-bedroom top-floor apartment in Godalming with off-street parking, EPC C, Council Tax Band D and availability from 25 September 2026. Bedroom two is described as a single, no outdoor space is confirmed and the number of parking spaces is unspecified, so it is scored conservatively." },
    { type: "verified", title: "Sycamore Court remains live at £1,150", text: "The exact Zoopla detail page reopened successfully on 23 August and still shows £1,150 pcm, two double bedrooms, EPC C, Council Tax Band C, immediate availability, an allocated off-road parking space and additional on-street parking." },
    { type: "verified", title: "Charterhouse Road remains live at £1,500", text: "The exact Zoopla detail page reopened successfully on 23 August and still shows £1,500 pcm, two bedrooms, a private south-facing patio, communal gardens, a private single garage, EPC E and availability from 29 August 2026." },
    { type: "verified", title: "East Street remains live at £1,500", text: "The exact Rightmove detail page reopened successfully on 23 August and still shows £1,500 pcm, two double bedrooms, off-street parking, a private garage, communal gardens, Council Tax Band C and availability from 17 September 2026." },
    { type: "rejected", title: "Search-result-only and failed exact-page candidates remain excluded", text: "Fresh results were discovered across the required areas, but records were not promoted when the exact listing page could not be reliably reopened or when the live detail page conflicted with discovery data. A Farncombe Street result at £1,300, for example, surfaced in current searches but its exact detail fetch failed during this run." },
    { type: "coverage", title: "Mandatory source coverage is incomplete today", text: "The saved OnTheMarket GU2 filtered URL again failed with a cache-miss/internal error on 23 August. Search visibility and exact-page access were also uneven across some OpenRent, Rightmove, Zoopla, OnTheMarket and direct-agent results, so full pagination across every mandatory source and area could not be guaranteed and this run does not claim a comprehensive sweep." },
    { type: "verified", title: "Four active records passed today's hard gate", text: "The active total is intentionally four rather than padded with stale, unavailable or weakly verified listings. Ranks are contiguous, duplicate keys are unique and the loaded total matches this changes feed." }
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
document.write('<script src="data/properties-18.js?v=20260823-0804"><\/script>');

/* Current-run hard availability gate: only exact pages successfully reopened this run remain active. */
{
  const checkedAt = '2026-08-23T08:04:27+01:00';
  const verifiedNames = new Set([
    'Sycamore Court, Long Gore',
    'East Street',
    'Charterhouse Road — Dean Court',
    'Weyside, Catteshall Lane'
  ]);
  window.RENTAL_DATA.properties = window.RENTAL_DATA.properties.filter(property => verifiedNames.has(property.name));
  window.RENTAL_DATA.properties.forEach(property => { property.verifiedAt = checkedAt; });

  const sycamore = window.RENTAL_DATA.properties.find(property => property.name === 'Sycamore Court, Long Gore');
  if (sycamore) {
    sycamore.rent = 1150;
    sycamore.score = 96;
    sycamore.source = 'Zoopla';
    sycamore.sourceType = 'portal';
    sycamore.link = 'https://www.zoopla.co.uk/to-rent/details/67546637/';
    sycamore.status = 'Available';
    sycamore.availabilityStatus = 'Available immediately; exact Zoopla detail page live 23 August 2026';
    sycamore.duplicateKey = 'sycamore-court-long-gore-godalming-gu7-1150';
    sycamore.epc = 'C';
    sycamore.councilBand = 'C';
    sycamore.parking = 'Allocated off-road space plus additional on-street parking';
    sycamore.parkingConfidence = 1;
    sycamore.garden = 'No garden confirmed';
    sycamore.outdoorConfidence = 0.2;
    sycamore.label = 'Best overall fit';
    sycamore.summary = 'At £1,150 with two double bedrooms, allocated off-road parking plus additional street parking and a core Godalming/Farncombe location, this is the strongest neutral-budget fit.';
  }

  const eastStreet = window.RENTAL_DATA.properties.find(property => property.name === 'East Street');
  if (eastStreet) {
    eastStreet.rent = 1500;
    eastStreet.status = 'Available';
    eastStreet.availabilityStatus = 'Available from 17 September 2026; exact Rightmove detail page live 23 August 2026';
    eastStreet.councilBand = 'C';
    eastStreet.parking = 'Off-street parking plus private garage';
    eastStreet.parkingConfidence = 1;
    eastStreet.garden = 'Communal gardens';
    eastStreet.outdoorConfidence = 1;
    eastStreet.summary = 'Two double bedrooms, off-street parking plus a private garage and communal gardens make this a strong two-car backup.';
  }

  const charterhouse = window.RENTAL_DATA.properties.find(property => property.name === 'Charterhouse Road — Dean Court');
  if (charterhouse) {
    charterhouse.status = 'Available';
    charterhouse.availabilityStatus = 'Available from 29 August 2026; exact Zoopla detail page live 23 August 2026';
  }

  const weyside = window.RENTAL_DATA.properties.find(property => property.name === 'Weyside, Catteshall Lane');
  if (weyside) {
    weyside.status = 'Available';
    weyside.availabilityStatus = 'Available from 25 September 2026; exact Zoopla detail page verified 23 August 2026';
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