window.RENTAL_DATA = {
  targetCount: 50,
  updated: "2026-07-31",
  checkedAt: "2026-07-31T08:02:00+01:00",
  headline: "I have searched far and wide for a house for Tess & Kevin and as of 31 July 2026, here are my suggestions...",
  recommendation: "Sycamore Court remains the strongest all-round fit, with Nugent Court the most practical Guildford option. Park Street remains a useful central bills-included backup, but its lack of parking keeps it below the stronger two-car choices. The active shortlist remains at 31 deduplicated homes after today's verification sweep.",
  incomes: { kevin: 1730.97, tess: 1620 },
  changes: [
    { type: "verified", title: "Daily verification completed", text: "The active shortlist and fresh Guildford, Godalming, Farncombe and Woking candidates were checked again on 31 July 2026; no supportable material additions or ranking changes were found." },
    { type: "removed", title: "Dead candidates rejected", text: "Promising-looking Summers Road and Farncombe Street results were excluded after exact OnTheMarket pages confirmed they were no longer on the market or let agreed." },
    { type: "coverage", title: "Some portal pages remain partly inaccessible", text: "A small number of Rightmove and OnTheMarket detail pages returned cache misses, so they were not added or marked verified." }
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
