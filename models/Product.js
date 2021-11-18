[{   
    productId: String,
    upc: String,
    aisleLocations: [
      {
        bayNumber: Number,
        description: String,
        number: Number,
        numberOfFacings: Number,
        side: String,
        shelfNumber: Number,
        shelfPositionInBay: Number
      }
    ],
    brand: String,
    categories: [ String ],
    countryOrigin: String,
    description: String,
    images: [
      {
        perspective: String,
        sizes: [
          {
            size: String,
            url: String
          }
        ]
      },
    ],
    items: [
      {
        itemId: String,
        favorite: Boolean,
        fulfillment: {
          curbside: Boolean,
          delivery: Boolean,
          inStore: Boolean,
          shipToHome: Boolean
        },
        price: {
          regular: Number,
          promo: Number
        },
        size: String,
        soldBy: String
      }
    ],
    itemInformation: {
      depth: Number,
      height: Number,
      width: Number
    },
    temperature: {
      indicator: String,
      heatSensitive: Boolean
    }
}]