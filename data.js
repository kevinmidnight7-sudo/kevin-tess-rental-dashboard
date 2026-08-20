window.RENTAL_DATA = {
  targetCount: 50,
  updated: "2026-08-20",
  checkedAt: "2026-08-20T08:07:50+01:00",
  headline: "I have searched far and wide for a house for Tess & Kevin and as of 20 August 2026, here are my suggestions...",
  recommendation: "Sycamore Court remains the strongest overall fit at £1,150 with two double bedrooms, allocated off-road parking and additional street parking. East Street in Farnham remains a practical two-car backup with off-street parking plus a private garage, while Gloster Close in Ash Vale offers two double bedrooms, allocated parking and a private garden. Today's list is deliberately short because multiple mandatory portal/detail pages failed the exact-page availability gate.",
  incomes: { kevin: 1730.97, tess: 1620 },
  changes: [
    { type: "removed", title: "Eleven previously active records removed under the hard gate", text: "On 20 August, eleven properties retained on 19 August could not have their exact detail pages reliably reopened. Rightmove IDs 88307421, 89655507, 89460432, 90921210, 174312392, 172823885, 90015357, 87792279, 175035293 and 174029021, plus OnTheMarket detail 19900076, therefore do not remain active on stale verification." },
    { type: "verified", title: "Sycamore Court remains live at £1,150", text: "The exact Rightmove page opened successfully on 20 August and still shows £1,150 pcm, two double bedrooms, allocated off-road parking plus additional on-street parking, Council Tax Band C and availability from 14 August 2026." },
    { type: "verified", title: "East Street and Gloster Close remain live", text: "East Street, Farnham remains live at £1,500 with two double bedrooms, off-street parking, a private garage and communal gardens. Gloster Close, Ash Vale remains live at £1,495 with two double bedrooms, allocated parking and a garden, available 11 September 2026." },
    { type: "rejected", title: "Fresh-looking results were not promoted without exact-page checks", text: "Current discovery surfaced candidates including Alexandra Road in Farnborough, Blackheath Lane near Guildford, Knaphill listings and Moore Close in Tongham, but their exact detail pages could not be reliably reopened during this run. They were not added from snippets or category pages alone." },
    { type: "coverage", title: "Mandatory source coverage is incomplete today", text: "The saved OnTheMarket GU2 filtered URL again failed during the 20 August run, and multiple Rightmove, Zoopla, OnTheMarket and direct-agent detail pages returned cache-miss/internal errors. Complete pagination and exact-page verification across every mandatory area/source could therefore not be guaranteed, and this run does not claim a comprehensive sweep." },
    { type: "verified", title: "Three active records passed today's hard gate", text: "Every retained active record had its exact detail URL opened successfully during this run. The active total is intentionally below 50 rather than padded with stale, unavailable or weakly verified listings." }
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
  const checkedAt = '2026-08-20T08:07:50+01:00';
  const verifiedLinks = new Set([
    'https://www.rightmove.co.uk/properties/90182370',
    'https://www.rightmove.co.uk/properties/91025910',
    'https://www.rightmove.co.uk/properties/89608194'
  ]);
  window.RENTAL_DATA.properties = window.RENTAL_DATA.properties.filter(property => verifiedLinks.has(property.link));
  window.RENTAL_DATA.properties.forEach(property => { property.verifiedAt = checkedAt; });

  const sycamore = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90182370');
  if (sycamore) {
    sycamore.rent = 1150;
    sycamore.availabilityStatus = 'Available from 14 August 2026; exact detail page live 20 August 2026';
    sycamore.parking = 'Allocated off-road space plus additional on-street parking';
    sycamore.parkingConfidence = 1;
    sycamore.councilBand = 'C';
    sycamore.summary = 'Two double bedrooms, allocated off-road parking plus additional street parking and a £1,150 rent make this the strongest all-round match.';
    sycamore.pros = ['£1,150 rent','Two double bedrooms','Allocated off-road parking','Additional street parking','Close to Farncombe station','Available now'];
  }

  const eastStreet = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/91025910');
  if (eastStreet) {
    eastStreet.rent = 1500;
    eastStreet.availabilityStatus = 'Available from 17 September 2026; exact detail page live 20 August 2026';
    eastStreet.councilBand = 'C';
    eastStreet.parking = 'Off-street parking plus private garage';
    eastStreet.parkingConfidence = 1;
    eastStreet.garden = 'Communal gardens';
    eastStreet.outdoorConfidence = 1;
  }

  const glosterClose = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/89608194');
  if (glosterClose) {
    glosterClose.rent = 1495;
    glosterClose.availabilityStatus = 'Available 11 September 2026; exact detail page live 20 August 2026';
    glosterClose.councilBand = 'D';
    glosterClose.parking = 'Allocated parking';
    glosterClose.parkingConfidence = 1;
    glosterClose.garden = 'Private garden accessed from the lounge/diner';
    glosterClose.outdoorConfidence = 1;
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