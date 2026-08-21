window.RENTAL_DATA = {
  targetCount: 50,
  updated: "2026-08-21",
  checkedAt: "2026-08-21T07:50:13+01:00",
  headline: "I have searched far and wide for a house for Tess & Kevin and as of 21 August 2026, here are my suggestions...",
  recommendation: "East Street in Farnham is the only previously retained property that passed today's exact-page hard gate without a source conflict. It remains a useful two-car backup at £1,500 with off-street parking, a private garage and communal gardens. Sycamore Court is removed today because Rightmove and Bourne Estate Agents conflict on the current rent, and Gloster Close is removed because its exact page could not be reliably reopened. The list is deliberately short rather than padded with weakly verified records.",
  incomes: { kevin: 1730.97, tess: 1620 },
  changes: [
    { type: "removed", title: "Sycamore Court removed after direct-agent price conflict", text: "On 21 August the exact Rightmove detail page showed £1,195 pcm, while Bourne Estate Agents' live property page showed £1,250 pcm for the same Sycamore Court listing. Because the hard gate excludes listings that conflict with the direct agent page, Sycamore Court has been removed rather than choosing one price." },
    { type: "removed", title: "Gloster Close removed under the hard gate", text: "The exact Rightmove detail URL for Gloster Close could not be reliably reopened on 21 August and returned an internal/cache error. It therefore does not remain active on yesterday's verification." },
    { type: "verified", title: "East Street remains live at £1,500", text: "The exact Rightmove page opened successfully on 21 August and still shows £1,500 pcm, two double bedrooms, off-street parking, a private garage, communal gardens, Council Tax Band C and availability from 17 September 2026." },
    { type: "rejected", title: "Fresh Guildford and Farncombe candidates were not promoted without repeatable exact-page checks", text: "Discovery surfaced a £1,395 two-bedroom ground-floor Guildford apartment with off-street parking and communal garden, and a £1,300 Farncombe Street two-bedroom flat with communal garden and permit parking. Their exact detail URLs could not be reliably reopened after discovery, so neither was added." },
    { type: "coverage", title: "Mandatory source coverage is incomplete today", text: "The saved OnTheMarket GU2 filtered URL again failed with an internal error on 21 August. OpenRent discovery was also limited, and several Rightmove, Zoopla, OnTheMarket and direct-agent detail pages returned cache-miss/internal errors. Complete pagination and exact-page verification across every mandatory area/source could therefore not be guaranteed, and this run does not claim a comprehensive sweep." },
    { type: "verified", title: "One active record passed today's hard gate", text: "The active total is intentionally one rather than padded with stale, unavailable or weakly verified listings. Ranks remain contiguous and the loaded total matches the changes feed." }
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
  const checkedAt = '2026-08-21T07:50:13+01:00';
  const verifiedLinks = new Set([
    'https://www.rightmove.co.uk/properties/91025910'
  ]);
  window.RENTAL_DATA.properties = window.RENTAL_DATA.properties.filter(property => verifiedLinks.has(property.link));
  window.RENTAL_DATA.properties.forEach(property => { property.verifiedAt = checkedAt; });

  const eastStreet = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/91025910');
  if (eastStreet) {
    eastStreet.rent = 1500;
    eastStreet.status = 'Available';
    eastStreet.availabilityStatus = 'Available from 17 September 2026; exact detail page live 21 August 2026';
    eastStreet.councilBand = 'C';
    eastStreet.parking = 'Off-street parking plus private garage';
    eastStreet.parkingConfidence = 1;
    eastStreet.garden = 'Communal gardens';
    eastStreet.outdoorConfidence = 1;
    eastStreet.summary = 'Two double bedrooms, off-street parking plus a private garage and communal gardens make this the strongest currently verified two-car backup.';
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