window.RENTAL_DATA = {
  updated: "2026-07-27",
  checkedAt: "2026-07-27T17:27:00+01:00",
  headline: "I have searched far and wide for a house for Tess & Kevin and as of 27 July 2026, here are my suggestions...",
  recommendation: "Wetherby Gardens is the strongest value-and-parking balance. St Michaels Road is the easiest two-car option. Quarry Street is the best Guildford-address choice, but it costs more and only one parking space is confirmed.",
  incomes: { kevin: 1730.97, tess: 1620 },
  changes: [
    { type: "new", title: "Ten homes ranked", text: "The shortlist now keeps ten active options rather than stopping at five." },
    { type: "photo", title: "Every card has an image", text: "Direct listing photos are used where available, with a live listing preview as backup." },
    { type: "app", title: "Mobile app makeover", text: "New sorting, filters, saved homes, animated details and a full cost breakdown." }
  ],
  properties: [
    {
      rank: 1, name: "Wetherby Gardens", area: "Farnborough, GU14", rent: 1200, score: 93,
      epc: "TBC", councilBand: "TBC", parking: "Resident + visitor", garden: "Communal gardens",
      tags: ["garden", "parking2", "under1400"], label: "Best value", status: "Available",
      link: "https://www.rightmove.co.uk/properties/102409619",
      image: "https://media.rightmove.co.uk/dir/crop/10%3A9-16%3A9/property-photo/44538042b/102409619/44538042b6f12c3df4fae2a9296219e1_max_476x317.jpeg",
      summary: "The strongest blend of low rent, two usable bedrooms, updated interiors and practical resident or visitor parking.",
      pros: ["£1,200 rent", "Parking flexibility", "Communal gardens", "Updated kitchen and bathroom"],
      cons: ["No private garden", "EPC and council-tax band need confirming"],
      bills: { councilTax: 157, energy: 120, water: 38, broadband: 30, contents: 15 }
    },
    {
      rank: 2, name: "St Michaels Road", area: "Aldershot, GU12", rent: 1400, score: 90,
      epc: "TBC", councilBand: "TBC", parking: "Two off-street spaces", garden: "Not stated",
      tags: ["parking2"], label: "Best for 2 cars", status: "Available",
      link: "https://www.rightmove.co.uk/properties/90694551",
      image: "https://media.rightmove.co.uk/dir/crop/10%3A9-16%3A9/property-photo/ab7cfb2ad/90694551/ab7cfb2addd16b4a4e3ed7bdb4d1589f_max_476x317.jpeg",
      summary: "Two proper parking spaces are rare. That practical advantage matters more for you than a prettier lobby with one awkward visitor bay.",
      pros: ["Two double bedrooms", "Two off-street spaces", "Private entrance", "Useful road access"],
      cons: ["No garden confirmed", "EPC and council tax need confirming"],
      bills: { councilTax: 170, energy: 135, water: 40, broadband: 30, contents: 15 }
    },
    {
      rank: 3, name: "Peabody Road", area: "Farnborough, GU14", rent: 1300, score: 88,
      epc: "TBC", councilBand: "TBC", parking: "Allocated parking", garden: "Not stated",
      tags: ["under1400"], label: "Best middle ground", status: "Available",
      link: "https://www.rightmove.co.uk/properties/91129149",
      image: "https://media.rightmove.co.uk/dir/crop/10%3A9-16%3A9/property-photo/e0f944078/91129149/e0f94407880d74923b21662d24dce45f_max_476x317.jpeg",
      summary: "A sensible mid-priced option with two useful bedrooms, allocated parking and an additional WC.",
      pros: ["£1,300 rent", "Allocated parking", "Two useful bedrooms", "Additional WC"],
      cons: ["Garden not confirmed", "EPC and council tax need checking"],
      bills: { councilTax: 155, energy: 128, water: 40, broadband: 32, contents: 15 }
    },
    {
      rank: 4, name: "Quarry Street", area: "Guildford, GU1", rent: 1475, score: 85,
      epc: "C", councilBand: "TBC", parking: "Secure space for 1 car", garden: "Communal gardens",
      tags: ["garden", "guildford", "epcC"], label: "Best Guildford location", status: "Available",
      link: "https://www.rightmove.co.uk/properties/164826218",
      image: "https://media.rightmove.co.uk/dir/property-photo/6d33eb36c/164826218/6d33eb36cb11dc56c4cae6cad26c519c_max_656x437.jpeg",
      summary: "The strongest Guildford-address compromise: central, EPC C, communal gardens and secure covered parking.",
      pros: ["Central Guildford", "EPC C", "Secure parking", "Communal gardens"],
      cons: ["Higher rent", "Smaller second bedroom", "Second-car parking unresolved"],
      bills: { councilTax: 175, energy: 135, water: 40, broadband: 35, contents: 15 }
    },
    {
      rank: 5, name: "High Street Maisonette", area: "Aldershot, GU12", rent: 1300, score: 84,
      epc: "D", councilBand: "A", parking: "One allocated space", garden: "Private terrace",
      tags: ["garden", "under1400"], label: "Best low-bill option", status: "Available",
      link: "https://www.rightmove.co.uk/properties/89460432",
      image: "https://media.rightmove.co.uk/dir/property-photo/e39d06b93/89460432/e39d06b9367061af60a1ed492649bcc4_max_656x437.jpeg",
      summary: "Band A council tax, an allocated space and a private terrace make the total cost stronger than the headline rent suggests.",
      pros: ["Band A council tax", "Private terrace", "Allocated parking", "Refurbished in 2026"],
      cons: ["High Street setting", "EPC D", "Second-car parking not guaranteed"],
      bills: { councilTax: 139, energy: 108, water: 36, broadband: 32, contents: 15 }
    },
    {
      rank: 6, name: "Bakehouse Mews", area: "Aldershot, GU11", rent: 1150, score: 82,
      epc: "D", councilBand: "A", parking: "Ask agent", garden: "Ask agent",
      tags: ["under1400"], label: "Best cheap backup", status: "Available",
      link: "https://www.rightmove.co.uk/properties/90946707",
      image: "https://image.thum.io/get/width/900/crop/600/noanimate/https://www.rightmove.co.uk/properties/90946707",
      summary: "Excellent monthly cost and low council tax, but parking remains the big unanswered question.",
      pros: ["£1,150 rent", "Council Tax Band A", "Close to station and town"],
      cons: ["Parking unconfirmed", "Garden unconfirmed", "EPC D"],
      bills: { councilTax: 139, energy: 105, water: 35, broadband: 27, contents: 14 }
    },
    {
      rank: 7, name: "Ash Road", area: "Aldershot, GU12", rent: 1250, score: 81,
      epc: "C", councilBand: "B", parking: "One off-street space", garden: "Not stated",
      tags: ["under1400", "epcC"], label: "Best efficient flat", status: "Available",
      link: "https://www.zoopla.co.uk/to-rent/details/67695822/",
      image: "https://image.thum.io/get/width/900/crop/600/noanimate/https://www.zoopla.co.uk/to-rent/details/67695822/",
      summary: "Two double bedrooms, EPC C and Band B council tax make this financially tidy. The weak point is one confirmed car space.",
      pros: ["Two double bedrooms", "EPC C", "Band B", "Off-street parking"],
      cons: ["One confirmed space", "No garden mentioned"],
      bills: { councilTax: 162, energy: 105, water: 36, broadband: 32, contents: 15 }
    },
    {
      rank: 8, name: "Aspen Grove", area: "Aldershot, GU12", rent: 1350, score: 77,
      epc: "TBC", councilBand: "TBC", parking: "Check with agent", garden: "Not stated",
      tags: ["under1400"], label: "Newer listing", status: "Available",
      link: "https://www.rightmove.co.uk/properties/91161741",
      image: "https://image.thum.io/get/width/900/crop/600/noanimate/https://www.rightmove.co.uk/properties/91161741",
      summary: "A newer two-bedroom apartment near the centre and station, but several practical details still need confirming.",
      pros: ["Two bedrooms", "Central access", "Within comfort range"],
      cons: ["Parking unclear", "No garden stated", "EPC and council tax unclear"],
      bills: { councilTax: 165, energy: 125, water: 40, broadband: 35, contents: 15 }
    },
    {
      rank: 9, name: "Wolseley Road", area: "Aldershot, GU11", rent: 1500, score: 75,
      epc: "TBC", councilBand: "TBC", parking: "Check with agent", garden: "Check with agent",
      tags: [], label: "Proper house backup", status: "Available",
      link: "https://www.rightmove.co.uk/properties/91157490",
      image: "https://image.thum.io/get/width/900/crop/600/noanimate/https://www.rightmove.co.uk/properties/91157490",
      summary: "A proper terraced house with two double bedrooms and two reception rooms, but it uses the full stretch budget.",
      pros: ["Proper house", "Two double bedrooms", "Two reception rooms"],
      cons: ["£1,500 rent", "Parking and garden need confirmation", "Less room to save"],
      bills: { councilTax: 185, energy: 145, water: 40, broadband: 35, contents: 15 }
    },
    {
      rank: 10, name: "Queens Road", area: "Aldershot, GU11", rent: 1100, score: 73,
      epc: "D", councilBand: "TBC", parking: "Ask agent", garden: "Communal garden",
      tags: ["garden", "under1400"], label: "Cheapest overall", status: "Available",
      link: "https://www.rightmove.co.uk/properties/90526110",
      image: "https://image.thum.io/get/width/900/crop/600/noanimate/https://www.rightmove.co.uk/properties/90526110",
      summary: "Excellent for saving and available now, though parking and equal bedroom quality need checking.",
      pros: ["£1,100 rent", "Communal garden", "Gas central heating", "Available now"],
      cons: ["Parking unclear", "Council tax needs confirming", "Bedroom sizes need checking"],
      bills: { councilTax: 145, energy: 95, water: 34, broadband: 25, contents: 11 }
    }
  ]
};