window.RENTAL_DATA = {
  targetCount: 50,
  updated: "2026-07-30",
  checkedAt: "2026-07-30T08:03:00+01:00",
  headline: "I have searched far and wide for a house for Tess & Kevin and as of 30 July 2026, here are my suggestions...",
  recommendation: "Sycamore Court remains the strongest all-round fit, with Nugent Court the most practical Guildford option. Park Street has been added as a central bills-included backup, but its lack of parking keeps it below the stronger two-car choices. The active shortlist now contains 31 deduplicated homes.",
  incomes: { kevin: 1730.97, tess: 1620 },
  changes: [
    { type: "new", title: "Park Street added", text: "A verified £1,500 central Guildford two-bedroom with gas, electricity and water included has joined the shortlist; no parking keeps it as a backup rather than a top pick." },
    { type: "verified", title: "Fresh portal sweep completed", text: "Current Godalming, Guildford and Woking search pages were inspected again on 30 July, with exact-page checks used for any new candidate." },
    { type: "coverage", title: "Some portal pages remain partly inaccessible", text: "A small number of Rightmove and OnTheMarket detail pages returned cache misses, so those candidates were not added or marked verified." }
  ],
  properties: []
};

/* Load the verified rental dataset synchronously before the dashboard starts. */
document.write('<script src="data/properties-1.js?v=20260729-1557"><\/script>');
document.write('<script src="data/properties-2.js?v=20260729-1557"><\/script>');
document.write('<script src="data/properties-3.js?v=20260729-1557"><\/script>');
document.write('<script src="data/properties-4.js?v=20260730-0803"><\/script>');

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
