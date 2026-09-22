window.RENTAL_DATA = {
  targetCount: 50,
  updated: "2026-09-22",
  checkedAt: "2026-09-22T08:08:18+01:00",
  headline: "I have searched far and wide for a house for Tess & Kevin and as of 22 September 2026, here are my suggestions...",
  recommendation: "Charterhouse Road in Chapel Fields, Godalming is today's strongest new core-area find at £1,350, with two double bedrooms and a parking space. Sycamore Drive in Ash Vale remains the strongest practical house-and-garden value option at £1,300. The £1,400 Woking terrace has been removed after its exact page changed to LET AGREED.",
  incomes: { kevin: 1730.97, tess: 1620 },
  changes: [
    { type: "added", title: "Charterhouse Road, Godalming added at £1,350", text: "A fresh Chapel Fields ground-floor apartment passed the exact-page gate on 22 September. It has two double bedrooms, a parking space and a core Godalming location, available from 19 November 2026." },
    { type: "added", title: "Camp Road, Farnborough added at £1,400", text: "This two-bedroom apartment passed the exact-page gate on 22 September with one allocated parking space, EPC B and Council Tax Band C, available from 29 September 2026." },
    { type: "removed", title: "Woking GU21 terrace removed — LET AGREED", text: "The exact Rightmove page for the £1,400 Woking terrace with garage and private garden now explicitly says LET AGREED, so it was removed on 22 September." },
    { type: "priority", title: "Manual-priority Woking bungalow remains dead", text: "Kevin's supplied Rightmove URL 93043806 again returned HTTP 410 Gone on 22 September, confirming it remains off the active dashboard." },
    { type: "coverage", title: "Mandatory OnTheMarket GU2 coverage remains incomplete", text: "The saved OnTheMarket GU2 filtered URL returned a DisabledError again on 22 September, so complete GU2 pagination could not be guaranteed. Discovery was run across accessible mandatory-area sources, but this refresh does not claim a fully comprehensive OnTheMarket sweep." }
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
document.write('<script src="data/properties-19.js?v=20260916-0800"><\/script>');
document.write('<script src="data/properties-20.js?v=20260919-0818"><\/script>');
document.write('<script src="data/properties-21.js?v=20260920-0731"><\/script>');
document.write('<script src="data/properties-22.js?v=20260921-0730"><\/script>');
document.write('<script src="data/properties-23.js?v=20260922-0808"><\/script>');

/* Current-run hard availability gate: only exact pages successfully reopened this run remain active. */
{
  const checkedAt = '2026-09-22T08:08:18+01:00';
  const verifiedNames = new Set([
    'East Street',
    'Moore Close, Tongham',
    'Hale Court, Fairview Gardens',
    'Aldershot GU11 Ground Floor Flat',
    'Anderson House, St Georges Road',
    '43 Frensham Road, Lower Bourne',
    'Waverley Close, Farnham',
    'Victoria Road, Aldershot',
    'Orchard House, Lambourne Way',
    'Sycamore Drive, Ash Vale',
    'Anchor Meadow, Farnborough',
    'Queensmead, Farnborough',
    'Charterhouse Road, Chapel Fields',
    'Camp Road, Farnborough'
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
    eastStreet.availabilityStatus = 'Available now; exact Rightmove detail page live 22 September 2026';
    eastStreet.duplicateKey = 'rightmove-91025910-east-street-farnham-gu9-1450';
    eastStreet.councilBand = 'C';
    eastStreet.parking = 'Off-street parking plus private garage';
    eastStreet.parkingConfidence = 1;
    eastStreet.garden = 'Communal gardens';
    eastStreet.outdoorConfidence = 1;
    eastStreet.label = 'Strong two-car Farnham backup';
    eastStreet.summary = '£1,450 with two double bedrooms, off-street parking plus a private garage and communal gardens.';
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