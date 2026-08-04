window.RENTAL_DATA = {
  targetCount: 50,
  updated: "2026-08-04",
  checkedAt: "2026-08-04T08:14:00+01:00",
  headline: "I have searched far and wide for a house for Tess & Kevin and as of 4 August 2026, here are my suggestions...",
  recommendation: "Sycamore Court remains the strongest verified all-round fit at £1,195 with two double bedrooms and useful two-car parking flexibility. Catteshall Lane remains a strong Godalming option at £1,400, while Gloster Close remains a proper house-and-garden choice. Today’s audit removed two listings that are no longer genuinely available and one with contradictory availability information rather than keeping questionable records active.",
  incomes: { kevin: 1730.97, tess: 1620 },
  changes: [
    { type: "removed", title: "Chapel Fields £1,300 removed", text: "The exact Rightmove detail page now explicitly says LET AGREED, so it has been removed from the active shortlist." },
    { type: "removed", title: "Highview, Knaphill removed", text: "The exact OnTheMarket detail page now says Let agreed, so the former £1,400 parking-and-gardens option is no longer treated as available." },
    { type: "removed", title: "Peperharow Road removed pending clarification", text: "Its exact Rightmove page gives contradictory availability information — one field says available now while the agent text says mid-December. Under the hard availability gate it is not shown as active until that conflict is resolved." },
    { type: "verified", title: "Core live options rechecked", text: "Sycamore Court (£1,195), Catteshall Lane (£1,400), Gloster Close (£1,495), Bakehouse Mews (£1,150) and High Street Godalming remain on accessible exact detail pages today." },
    { type: "coverage", title: "Several portal detail pages inaccessible", text: "The mandatory OnTheMarket GU2 filtered search and a number of exact portal detail URLs returned cache misses today. Promising new results such as Ockford Road in Godalming (£1,450) and Camela Villas in Aldershot (£1,400) were discovered but were not added because their exact detail pages could not be reliably opened. The sweep therefore does not claim complete OnTheMarket pagination today." }
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

/* Current-run hard availability/price gate. Old chunk records stay historical but do not enter the active dashboard. */
{
  const excluded = new Set([
    'manor-road-guildford-gu2-1250',
    'queen-elizabeth-park-guildford-gu2-1500',
    'gated-development-woking-woking-gu21-1500',
    'ground-floor-gated-apartment-woking-gu22-1500',
    'chapel-fields-first-floor-apartment-godalming-gu7-1300',
    'highview-knaphill-woking-gu21-1400',
    'peperharow-road-godalming-gu7-1450'
  ]);
  window.RENTAL_DATA.properties = window.RENTAL_DATA.properties.filter(property => !excluded.has(property.duplicateKey));

  const checkedAt = '2026-08-04T08:14:00+01:00';

  const sycamore = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90182370');
  if (sycamore) {
    sycamore.rent = 1195;
    sycamore.availabilityStatus = 'Available from 14 August 2026; exact detail page live 4 August';
    sycamore.parking = 'Allocated off-road space plus additional on-street parking';
    sycamore.parkingConfidence = 1;
    sycamore.councilBand = 'C';
    sycamore.summary = 'Two double bedrooms, allocated off-road parking plus additional street parking and a £1,195 rent make this the strongest all-round match.';
    sycamore.pros = ['£1,195 rent','Two double bedrooms','Allocated off-road parking','Additional street parking','Close to Farncombe station'];
    sycamore.verifiedAt = checkedAt;
  }

  const charterhouse = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90655770');
  if (charterhouse) {
    charterhouse.rent = 1400;
    charterhouse.availabilityStatus = 'Previously verified available from 24 August 2026; exact page inaccessible during 4 August sweep';
    charterhouse.epc = 'C';
    charterhouse.councilBand = 'C';
    charterhouse.parking = 'Secure underground allocated space plus visitor parking';
    charterhouse.parkingConfidence = 1;
    charterhouse.garden = 'Maintained communal gardens';
    charterhouse.outdoorConfidence = 0.95;
    charterhouse.label = 'Best premium Godalming value';
    charterhouse.summary = 'Recently refurbished with secure underground allocated parking, visitor parking and communal gardens; reduced to £1,400, but today’s portal detail page could not be reopened.';
    charterhouse.pros = ['£1,400 reduced rent','Secure underground parking','Visitor parking','Communal gardens','EPC C','Council Tax Band C'];
    charterhouse.cons = ['No pets','Exact portal page could not be reopened on 4 August'];
  }

  const catteshall = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.onthemarket.com/details/19937061/');
  if (catteshall) {
    catteshall.availabilityStatus = 'Current exact listing checked 4 August 2026';
    catteshall.verifiedAt = checkedAt;
  }

  const gloster = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/89608194');
  if (gloster) {
    gloster.availabilityStatus = 'Available from 11 September 2026; exact detail page live 4 August';
    gloster.verifiedAt = checkedAt;
  }

  const bakehouse = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90946707');
  if (bakehouse) {
    bakehouse.availabilityStatus = 'Available from 7 August 2026; exact detail page live 4 August';
    bakehouse.epc = 'D';
    bakehouse.councilBand = 'A';
    bakehouse.verifiedAt = checkedAt;
  }

  const highStreet = window.RENTAL_DATA.properties.find(property => property.link === 'https://www.rightmove.co.uk/properties/90957459');
  if (highStreet) {
    highStreet.name = 'High Street, Godalming';
    highStreet.rent = 1400;
    highStreet.availabilityStatus = 'Available from 24 August 2026; exact detail page live 4 August';
    highStreet.parking = 'Not confirmed';
    highStreet.parkingConfidence = 0.2;
    highStreet.garden = 'Not confirmed; riverside walks and Phillips Memorial Park nearby';
    highStreet.outdoorConfidence = 0.3;
    highStreet.verifiedAt = checkedAt;
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
