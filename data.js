window.RENTAL_DATA = {
  targetCount: 50,
  updated: "2026-09-15",
  checkedAt: "2026-09-15T08:13:46+01:00",
  headline: "I have searched far and wide for a house for Tess & Kevin and as of 15 September 2026, here are my suggestions...",
  recommendation: "Kevin's manual-priority Woking GU22 bungalow is live at £1,430 with a large private garden and its own driveway, making it the standout house-style watchlist option. In the core area, the new £1,500 Godalming ground-floor garden apartment is strong for location and outdoor space, while Charterhouse Road remains live at £1,500 and is now available immediately. East Street in Farnham has improved to £1,450 and retains off-street parking plus a private garage.",
  incomes: { kevin: 1730.97, tess: 1620 },
  changes: [
    { type: "added", title: "Manual-priority Woking bungalow is live at £1,430", text: "Kevin's supplied Rightmove URL 93043806 passed the exact-page gate on 15 September. It is a two-bedroom bungalow with a large private garden, allocated driveway/off-road parking and availability from 25 November 2026, so it has been added and kept prominent despite the £1,430 stretch-band rent." },
    { type: "added", title: "New Godalming garden apartment at £1,500", text: "A newly listed two-double-bedroom ground-floor apartment in Godalming passed the exact Rightmove check. It has a private enclosed patio garden, EPC C, Council Tax Band D and residents-permit street parking, available from 16 November." },
    { type: "added", title: "Fresh verified options materially expand the shortlist", text: "Moore Close in Tongham (£1,350), a Woking GU21 terrace with garage and private garden (£1,400), Hale Court in Farnham (£1,300), an Aldershot GU11 ground-floor flat (£1,250), Merlin Road in Farnborough (£1,400) and Anderson House in Farnham (£1,500) all passed exact-page checks and were added without padding." },
    { type: "price", title: "East Street has dropped to £1,450", text: "The exact Rightmove page now shows £1,450 pcm, reduced on 1 September, while retaining two double bedrooms, off-street parking, a private garage, communal gardens and Council Tax Band C." },
    { type: "verified", title: "Charterhouse Road is still live and now available immediately", text: "The exact Zoopla page reopened successfully on 15 September at £1,500 pcm and now states available immediately, with two bedrooms, private patio, communal gardens and a private single garage." },
    { type: "removed", title: "Sycamore Court removed under the hard gate", text: "The previously used exact Zoopla URL could not be reliably reopened during this run, so Sycamore Court has been removed rather than carried forward on stale verification." },
    { type: "coverage", title: "Mandatory source coverage is incomplete today", text: "The saved OnTheMarket GU2 filtered URL was blocked/disabled during the current run, so complete OnTheMarket GU2 pagination could not be guaranteed. Search discovery across mandatory areas was performed, but portal access limitations mean this run does not claim a comprehensive sweep of every accessible page across Rightmove, Zoopla, OpenRent, OnTheMarket and every direct agent." },
    { type: "verified", title: "Ten active records passed today's hard gate", text: "The active total is intentionally 10 rather than padded with stale or weakly verified listings. Ranks are contiguous after scoring and duplicate keys are unique." }
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

/* Current-run hard availability gate: only exact pages successfully reopened this run remain active. */
{
  const checkedAt = '2026-09-15T08:13:46+01:00';
  const verifiedNames = new Set([
    'Bungalow, Woking GU22',
    'Ground Floor Garden Apartment, Godalming',
    'Charterhouse Road — Dean Court',
    'Woking GU21 Terrace with Garage',
    'East Street',
    'Moore Close, Tongham',
    'Hale Court, Fairview Gardens',
    'Aldershot GU11 Ground Floor Flat',
    'Merlin Road',
    'Anderson House, St Georges Road'
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
    eastStreet.availabilityStatus = 'Available from 17 September 2026; exact Rightmove detail page live 15 September 2026';
    eastStreet.duplicateKey = 'rightmove-91025910-east-street-farnham-gu9-1450';
    eastStreet.councilBand = 'C';
    eastStreet.parking = 'Off-street parking plus private garage';
    eastStreet.parkingConfidence = 1;
    eastStreet.garden = 'Communal gardens';
    eastStreet.outdoorConfidence = 1;
    eastStreet.label = 'Strong two-car Farnham backup';
    eastStreet.summary = 'Now £1,450 with two double bedrooms, off-street parking plus a private garage and communal gardens.';
  }

  const charterhouse = window.RENTAL_DATA.properties.find(property => property.name === 'Charterhouse Road — Dean Court');
  if (charterhouse) {
    charterhouse.score = 92;
    charterhouse.status = 'Available';
    charterhouse.availabilityStatus = 'Available immediately; exact Zoopla detail page live 15 September 2026';
    charterhouse.verifiedAt = checkedAt;
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