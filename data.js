window.RENTAL_DATA = {
  targetCount: 50,
  updated: "2026-08-22",
  checkedAt: "2026-08-22T08:08:58+01:00",
  headline: "I have searched far and wide for a house for Tess & Kevin and as of 22 August 2026, here are my suggestions...",
  recommendation: "Sycamore Court is restored as the strongest overall fit after its exact Zoopla page opened cleanly today at £1,150 pcm, available immediately, with two double bedrooms, allocated off-road parking and additional on-street parking. A new £1,500 Charterhouse Road ground-floor apartment is also added because its exact page confirms a private south-facing patio, communal gardens and a private garage. East Street in Farnham remains a useful two-car backup at £1,500 with off-street parking and a private garage.",
  incomes: { kevin: 1730.97, tess: 1620 },
  changes: [
    { type: "added", title: "Sycamore Court restored at £1,150", text: "On 22 August the exact Zoopla detail page opened successfully and shows £1,150 pcm, two double bedrooms, EPC C, Council Tax Band C, immediate availability, an allocated off-road parking space and additional on-street parking. This supersedes yesterday's temporary exclusion caused by conflicting stale direct-agent pricing." },
    { type: "added", title: "New Charterhouse Road option added at £1,500", text: "A newly listed Dean Court ground-floor apartment on Charterhouse Road passed the exact-page gate on 22 August. It has two bedrooms, a private south-facing patio opening to communal gardens, a private single garage, EPC E and availability from 29 August 2026." },
    { type: "verified", title: "East Street remains live at £1,500", text: "The exact Rightmove detail page opened successfully again on 22 August and still shows £1,500 pcm, two double bedrooms, off-street parking, a private garage, communal gardens, Council Tax Band C and availability from 17 September 2026." },
    { type: "rejected", title: "Let-agreed and weakly verified results remain excluded", text: "Ockford Road in Godalming surfaced during discovery at £1,450 with two allocated spaces, but its exact OnTheMarket page states Let agreed, so it was rejected. Other result-page-only candidates were not promoted without a successful exact-detail check." },
    { type: "coverage", title: "Mandatory source coverage is incomplete today", text: "The saved OnTheMarket GU2 filtered URL again failed with a cache-miss/internal error on 22 August. Search visibility was also uneven across OpenRent and some portal/direct-agent pages, so full pagination across every mandatory source and area could not be guaranteed and this run does not claim a comprehensive sweep." },
    { type: "verified", title: "Three active records passed today's hard gate", text: "The active total is intentionally three rather than padded with stale, unavailable or weakly verified listings. Ranks are contiguous and the loaded total matches this changes feed." }
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

/* Current-run hard availability gate: only exact pages successfully reopened this run remain active. */
{
  const checkedAt = '2026-08-22T08:08:58+01:00';
  const verifiedNames = new Set([
    'Sycamore Court, Long Gore',
    'East Street',
    'Charterhouse Road — Dean Court'
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
    sycamore.availabilityStatus = 'Available immediately; exact Zoopla detail page live 22 August 2026';
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
    eastStreet.availabilityStatus = 'Available from 17 September 2026; exact detail page live 22 August 2026';
    eastStreet.councilBand = 'C';
    eastStreet.parking = 'Off-street parking plus private garage';
    eastStreet.parkingConfidence = 1;
    eastStreet.garden = 'Communal gardens';
    eastStreet.outdoorConfidence = 1;
    eastStreet.summary = 'Two double bedrooms, off-street parking plus a private garage and communal gardens make this a strong two-car backup.';
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