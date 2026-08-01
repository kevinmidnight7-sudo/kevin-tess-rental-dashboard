window.RENTAL_DATA = {
  targetCount: 50,
  updated: "2026-08-01",
  checkedAt: "2026-08-01T07:55:22+01:00",
  headline: "I have searched far and wide for a house for Tess & Kevin and as of 1 August 2026, here are my suggestions...",
  recommendation: "Sycamore Court remains the strongest all-round fit, with Nugent Court and the refurbished Charterhouse Road apartment close behind. Avon Road is today's standout new addition: £1,400 with two designated parking spaces, two good-sized doubles and maintained garden space. The active shortlist is now 30 genuinely supportable homes after removing four records that no longer pass the price or exact-page verification gate.",
  incomes: { kevin: 1730.97, tess: 1620 },
  changes: [
    { type: "new", title: "Three strong verified homes added", text: "Avon Road in Farnham, Lorne Gardens in Knaphill and East Street in Farnham have joined the shortlist after exact-page checks." },
    { type: "removed", title: "Four records removed", text: "Manor Road was removed after the stored £1,250 record could no longer be reconciled with the current market listing; Queen Elizabeth Park is now advertised at £1,550, above the cap; and two Woking gated-apartment records were dropped because their exact pages could not be reliably reverified." },
    { type: "ranking", title: "Avon Road enters the top four", text: "Two designated off-street spaces, maintained garden space and £1,400 rent make it unusually well matched to a two-car household." },
    { type: "coverage", title: "Blocked pages are excluded, not assumed live", text: "Some portal detail pages still returned cache misses during the sweep. Those records were excluded where no current exact-page evidence could support them rather than padding the shortlist." }
  ],
  properties: []
};

/* Load the verified rental dataset synchronously before the dashboard starts. */
document.write('<script src="data/properties-1.js?v=20260729-1557"><\/script>');
document.write('<script src="data/properties-2.js?v=20260729-1557"><\/script>');
document.write('<script src="data/properties-3.js?v=20260729-1557"><\/script>');
document.write('<script src="data/properties-4.js?v=20260730-0803"><\/script>');
document.write('<script src="data/properties-5.js?v=20260801-0755"><\/script>');

/* Current-run hard availability/price gate. Old chunk records stay historical but do not enter the active dashboard. */
{
  const excluded = new Set([
    'manor-road-guildford-gu2-1250',
    'queen-elizabeth-park-guildford-gu2-1500',
    'gated-development-woking-woking-gu21-1500',
    'ground-floor-gated-apartment-woking-gu22-1500'
  ]);
  window.RENTAL_DATA.properties = window.RENTAL_DATA.properties.filter(property => !excluded.has(property.duplicateKey));

  const checkedAt = '2026-08-01T07:55:22+01:00';
  window.RENTAL_DATA.properties.forEach(property => { property.verifiedAt = checkedAt; });

  const peperharow = window.RENTAL_DATA.properties.find(property => property.duplicateKey === 'peperharow-road-godalming-gu7-1450');
  if (peperharow) peperharow.availabilityStatus = 'Current page remains live but contains conflicting timing: status says Now while key text says mid-December; confirm with agent before viewing';

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
