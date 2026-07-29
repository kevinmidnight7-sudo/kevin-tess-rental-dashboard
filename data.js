window.RENTAL_DATA = {
  targetCount: 50,
  updated: "2026-07-29",
  checkedAt: "2026-07-29T15:57:00+01:00",
  headline: "I have searched far and wide for a house for Tess & Kevin and as of 29 July 2026, here are my suggestions...",
  recommendation: "The search radius has been corrected around Guildford. Sycamore Court is the strongest all-round value, Nugent Court is the most practical Guildford option, and the refurbished Charterhouse Road flat is the best premium Godalming choice. Chapel Street is included, but its explicit lack of parking pushes it down for a two-car household.",
  incomes: { kevin: 1730.97, tess: 1620 },
  changes: [
    { type: "new", title: "Twenty-five strong opportunities added", text: "Godalming, Guildford, Woking, Knaphill and Brookwood are now core search areas rather than afterthoughts." },
    { type: "verified", title: "Exact listing pages checked", text: "Thirty active records survived the current direct-page and cross-portal availability audit." },
    { type: "removed", title: "Five stale or unverified records removed", text: "Peabody Road, Lynchford Road, Station Approach, Holly Road and St Michaels Road were dropped rather than carried forward without a current supportable page." }
  ],
  properties: []
};

/* Load the verified rental dataset synchronously before the dashboard starts. */
document.write('<script src="data/properties-1.js?v=20260729-1557"><\/script>');
document.write('<script src="data/properties-2.js?v=20260729-1557"><\/script>');
document.write('<script src="data/properties-3.js?v=20260729-1557"><\/script>');

/* App enhancements: keep this loader block when refreshing rental data. */
(()=>{
  const css=document.createElement('link');css.rel='stylesheet';css.href='enhancements.css?v=20260727';document.head.appendChild(css);
  const script=document.createElement('script');script.src='enhancements.js?v=20260727';script.defer=true;document.head.appendChild(script);
})();
