// If running in Node.js version < 18, uncomment the line below:
// const fetch = require('node-fetch');

// --- YOUR PRODUCT DATA ---
// This is the product data you provided, formatted as a JavaScript array.
 const productsData =[
    {
      "position": 1,
      "sku": "B0DCHBC8JJ",
      "name": "BISSELL® Steam Shot™ OmniReach handheld portable steam cleaner for tile, grout, windows, bathrooms, kitchens, fabric steaming tool, includes 10 tools",
      "link": "https://www.amazon.com/BISSELL%C2%AE-ShotTM-OmniReach-Handheld-Cleaner/dp/B0DCHBC8JJ/ref=sr_1_1?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-1",
      "rating": 3.9,
      "reviews": 3042,
      "recent_sales": "70K+ bought in past month",
      "6666": "$39.99",
      "price": 3900,
      "original_6666": "$49.99",
      "extracted_original_6666": 49.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16",
          "type": "FREE delivery",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/71SObM77ztL._AC_UL320_.jpg"
    },
    {
      "position": 2,
      "sku": "B00EI7DPI0",
      "name": "Hamilton Beach Power Elite Wave Action Blender For Smoothies, 40 Oz Glass Jar, 12 Functions Including Puree, Crush Ice, 700 Watts - Black (58148A)",
      "link": "https://www.amazon.com/Hamilton-Beach-Functions-Dishwasher-58148A/dp/B00EI7DPI0/ref=sr_1_2?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-2",
      "rating": 4.2,
      "reviews": 62906,
      "recent_sales": "20K+ bought in past month",
      "6666": "$30.39",
      "price": 3000,
      "original_6666": "$44.95",
      "extracted_original_6666": 44.95,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/71k1RTjfAhL._AC_UL320_.jpg"
    },
    {
      "position": 3,
      "sku": "B09W4PLVQP",
      "name": "Brita Water Filter Pitcher for Tap and Drinking Water with 1 Standard Filter, Lasts 2 Months, 6-Cup Capacity, BPA Free, White",
      "link": "https://www.amazon.com/Brita-BPA-Free-Replaces-Accessories-Capacity/dp/B09W4PLVQP/ref=sr_1_3?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-3",
      "rating": 4.5,
      "reviews": 42728,
      "recent_sales": "40K+ bought in past month",
      "6666": "$15.99",
      "price": 1500,
      "original_6666": "$25.79",
      "extracted_original_6666": 25.79,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/71TjedQlkoL._AC_UL320_.jpg"
    },
    {
      "position": 4,
      "sku": "B06Y1YD5W7",
      "name": "Instant Pot Duo 7-in-1 Mini Electric Pressure Cooker, Slow Rice Cooker, Steamer, Sauté, Yogurt Maker, Warmer & Sterilizer, Includes Free App with over 1900 Recipes, Stainless Steel, 3 Quart",
      "link": "https://www.amazon.com/Instant-Pot-Duo-Mini-Programmable/dp/B06Y1YD5W7/ref=sr_1_4?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-4",
      "rating": 4.6,
      "reviews": 130830,
      "recent_sales": "20K+ bought in past month",
      "6666": "$56.99",
      "price": 5600,
      "original_6666": "$89.99",
      "extracted_original_6666": 89.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16",
          "type": "FREE delivery",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/71qc4ccAbBL._AC_UL320_.jpg"
    },
    {
      "position": 5,
      "sku": "B01FHOWYA2",
      "name": "Ninja Fit Compact Personal Blender, Portable Blender for-Smoothies, Shakes, Food Prep, and Frozen Blending, 700-Watt Base, (2) 16-oz. Cups and Spout Lids, Black QB3001SS",
      "link": "https://www.amazon.com/Ninja-Personal-Smoothies-Blending-700-Watt/dp/B01FHOWYA2/ref=sr_1_5?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-5",
      "rating": 4.7,
      "reviews": 39837,
      "recent_sales": "#1 Top Rated",
      "6666": "$59.99",
      "price": 5900,
      "original_6666": "$69.99",
      "extracted_original_6666": 69.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16",
          "type": "FREE delivery",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "more_offers": {
        "lowest_6666": "$52.29",
        "extracted_lowest_6666": 52.29,
        "link": "https://www.amazon.com/gp/offer-listing/B01FHOWYA2/ref=sr_1_5_olp?keywords=household+appliances&dib_tag=se&dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&qid=1752250959&sr=8-5",
        "offers_count": 7,
        "description": "(7 used & new offers)"
      },
      "image": "https://m.media-amazon.com/images/I/615oOUt8wGL._AC_UL320_.jpg"
    },
    {
      "position": 6,
      "sku": "B0BWHJ1FNK",
      "name": "Mixing Bowls with Airtight Lids Set, 26PCS Stainless Steel Khaki Bowls with Grater Attachments, Non-Slip Bottoms & Kitchen Gadgets Set, Size 7, 4, 2.5, 2.0,1.5, 1QT, Great for Mixing & Serving",
      "link": "https://www.amazon.com/Airtight-Stainless-Attachments-Non-Slip-Bottoms/dp/B0BWHJ1FNK/ref=sr_1_6?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-6",
      "rating": 4.7,
      "reviews": 2764,
      "recent_sales": "6K+ bought in past month",
      "6666": "$33.99",
      "price": 3300,
      "original_6666": "$42.99",
      "extracted_original_6666": 42.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/71XR3lo00cL._AC_UL320_.jpg"
    },
    {
      "position": 7,
      "sku": "B0764HS4SL",
      "name": "Fullstar Vegetable Chopper and Spiralizer - Food Chopper with Container, Fruit Slicer, Kitchen Gadgets & Accessories, Home Essentials (4 in 1, White)",
      "link": "https://www.amazon.com/Vegetable-Chopper-Spiralizer-Slicer-Choppers/dp/B0764HS4SL/ref=sr_1_7?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-7",
      "rating": 4.5,
      "reviews": 119051,
      "recent_sales": "20K+ bought in past month",
      "6666": "$23.99",
      "price": 2300,
      "original_6666": "$49.99",
      "extracted_original_6666": 49.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/810H7ed9agL._AC_UL320_.jpg"
    },
    {
      "position": 8,
      "sku": "B012T634SM",
      "name": "Magic Bullet Blender, Small, Silver, 11 Piece Set",
      "link": "https://www.amazon.com/Magic-Bullet-Blender-Small-Silver/dp/B012T634SM/ref=sr_1_8?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-8",
      "rating": 4.4,
      "reviews": 114886,
      "recent_sales": "20K+ bought in past month",
      "6666": "$39.75",
      "price": 3900,
      "original_6666": "$49.99",
      "extracted_original_6666": 49.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Jul 17 - 22",
          "type": "FREE delivery",
          "date": "Jul 17 - 22"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Jul 16 - 18",
          "type": "Or fastest delivery",
          "date": "Jul 16 - 18"
        }
      },
      "more_offers": {
        "lowest_6666": "$32.86",
        "extracted_lowest_6666": 32.86,
        "link": "https://www.amazon.com/gp/offer-listing/B012T634SM/ref=sr_1_8_olp?keywords=household+appliances&dib_tag=se&dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&qid=1752250959&sr=8-8",
        "offers_count": 9,
        "description": "(9+ used & new offers)"
      },
      "image": "https://m.media-amazon.com/images/I/61w2Tj7r0BL._AC_UL320_.jpg"
    },
    {
      "position": 9,
      "sku": "B09DKH8XDS",
      "name": "Paper Towel Holder Black, Premium Stainless Steel Kitchen Roll Dispenser, Countertop Roll Organizer with Weighted Base",
      "link": "https://www.amazon.com/Stainless-One-Handed-Operation-Countertop-Dispenser/dp/B09DKH8XDS/ref=sr_1_9?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-9",
      "rating": 4.4,
      "reviews": 7834,
      "recent_sales": "20K+ bought in past month",
      "6666": "$8.49",
      "price": 849,
      "original_6666": "$14.95",
      "extracted_original_6666": 14.95,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/51Bpz+u2+5L._AC_UL320_.jpg"
    },
    {
      "position": 10,
      "sku": "B08ZK5WDWN",
      "name": "Airtight Food Storage Containers with Lids, Vtopmart 24 pcs Plastic Kitchen and Pantry Organization Canisters for Cereal, Dry Food, Flour and Sugar, BPA Free, Includes 24 Labels，Black",
      "link": "https://www.amazon.com/Airtight-Containers-Vtopmart-Organization-Canisters/dp/B08ZK5WDWN/ref=sr_1_10?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-10",
      "rating": 4.7,
      "reviews": 24010,
      "recent_sales": "10K+ bought in past month",
      "6666": "$28.49",
      "price": 2800,
      "original_6666": "$36.99",
      "extracted_original_6666": 36.99,
      "6666_per": {
        "6666": 1.19,
        "unit": "count"
      },
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/91ojIYPNCzL._AC_UL320_.jpg"
    },
    {
      "position": 11,
      "sku": "B0C32SGKMJ",
      "name": "EUHOMY Nugget Ice Maker Countertop with Handle, Ready in 6 Mins, 34lbs Per Day, Removable Top Cover, Auto-Cleaning, Portable Sonic Ice Maker with Basket and Scoop, for Home/Party/RV/Camping (Black)",
      "link": "https://www.amazon.com/EUHOMY-Countertop-Removable-Auto-Cleaning-Portable/dp/B0C32SGKMJ/ref=sr_1_11?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-11",
      "rating": 4.2,
      "reviews": 16695,
      "recent_sales": "10K+ bought in past month",
      "6666": "$159.99",
      "price": 15009,
      "original_6666": "$189.99",
      "extracted_original_6666": 189.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16",
          "type": "FREE delivery",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/71dHlxHLqTL._AC_UL320_.jpg"
    },
    {
      "position": 12,
      "sku": "B003OAJGJO",
      "name": "Crock-Pot 7 Quart Oval Manual Slow Cooker, Stainless Steel (SCV700-S-BR), Versatile Cookware for Large Families or Entertaining",
      "link": "https://www.amazon.com/Crock-Pot-SCV700SS-Stainless-7-Quart-Manual/dp/B003OAJGJO/ref=sr_1_12?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-12",
      "rating": 4.6,
      "reviews": 36957,
      "recent_sales": "10K+ bought in past month",
      "6666": "$47.99",
      "price": 4700,
      "original_6666": "$59.99",
      "extracted_original_6666": 59.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16",
          "type": "FREE delivery",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "more_offers": {
        "lowest_6666": "$35.02",
        "extracted_lowest_6666": 35.02,
        "link": "https://www.amazon.com/gp/offer-listing/B003OAJGJO/ref=sr_1_12_olp?keywords=household+appliances&dib_tag=se&dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&qid=1752250959&sr=8-12",
        "offers_count": 12,
        "description": "(12+ used & new offers)"
      },
      "image": "https://m.media-amazon.com/images/I/81s15a8-lGL._AC_UL320_.jpg"
    },
    {
      "position": 13,
      "sku": "B098HZDKXW",
      "name": "Pressurized Handheld Multi-Surface Natural Steam Cleaner with 12 pcs Accessories, Multi-Purpose Steamer for Home Use, Steamer for Cleaning Floor, Upholstery, Grout and Car",
      "link": "https://www.amazon.com/Handheld-Pressurized-Accessory-Multi-Surface-Cleaning/dp/B098HZDKXW/ref=sr_1_13?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-13",
      "rating": 4.2,
      "reviews": 7574,
      "recent_sales": "30K+ bought in past month",
      "6666": "$49.99",
      "price": 4900,
      "original_6666": "$70.99",
      "extracted_original_6666": 70.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16",
          "type": "FREE delivery",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "image": "https://m.media-amazon.com/images/I/71KgBHILV6L._AC_UL320_.jpg"
    },
    {
      "position": 14,
      "sku": "B00N9N6GOY",
      "name": "Aroma Housewares Aroma 6-cup (cooked) 1.5 Qt. One Touch Rice Cooker, White (ARC-363NG), 6 cup cooked/ 3 cup uncook/ 1.5 Qt.",
      "link": "https://www.amazon.com/Housewares-cooked-Cooker-ARC-363NG-uncook/dp/B00N9N6GOY/ref=sr_1_14?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-14",
      "rating": 4.5,
      "reviews": 21969,
      "recent_sales": "30K+ bought in past month",
      "6666": "$17.99",
      "price": 1700,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "more_offers": {
        "lowest_6666": "$15.50",
        "extracted_lowest_6666": 15.5,
        "link": "https://www.amazon.com/gp/offer-listing/B00N9N6GOY/ref=sr_1_14_olp?keywords=household+appliances&dib_tag=se&dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&qid=1752250959&sr=8-14",
        "offers_count": 9,
        "description": "(9+ used & new offers)"
      },
      "image": "https://m.media-amazon.com/images/I/61m6eAej0ML._AC_UL320_.jpg"
    },
    {
      "position": 15,
      "sku": "B0CFDRFJF1",
      "name": "JOYMOOP Mop and Bucket Set with Wringer, Flat Mops for Floor Cleaning, Wall Mop Cleaner with Long Handle, Hardwood Floor Mop with 4 Microfiber Pads",
      "link": "https://www.amazon.com/JOYMOOP-Bucket-Cleaning-Hardwood-Microfiber/dp/B0CFDRFJF1/ref=sr_1_15?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-15",
      "rating": 4.3,
      "reviews": 24195,
      "recent_sales": "10K+ bought in past month",
      "6666": "$3449,",
      "price": 3400,
      "original_6666": "$47.49",
      "extracted_original_6666": 47.49,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Jul 18 - 24 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Jul 18 - 24"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Thu, Jul 17",
          "type": "Or fastest delivery",
          "date": "Thu, Jul 17"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/9174sn2ReoL._AC_UL320_.jpg"
    },
    {
      "position": 16,
      "sku": "B0CJN8ZWL1",
      "name": "Chicken Shredder Large Chicken Breast Shredder Tool Twist with Brush&Fork, Visible Meat Shredder Machine, Anti-Slip Strip, Ergonomic Handle, BPA Free, Suitable for Pork Beef Chicken(Orange)",
      "link": "https://www.amazon.com/SURETIVIAN-Shredder-Anti-Slip-Ergonomic-Suitable/dp/B0CJN8ZWL1/ref=sr_1_16?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-16",
      "rating": 4.7,
      "reviews": 15077,
      "recent_sales": "#1 Top Rated",
      "6666": "$9.49",
      "price": 949,
      "original_6666": "$15.99",
      "extracted_original_6666": 15.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/71Fl0mK2XLL._AC_UL320_.jpg"
    },
    {
      "position": 17,
      "sku": "B0BWSJVTCJ",
      "name": "Vitamix Propel Series 750 Blender, Professional Grade Blender, 4 Presets + Self-Cleaning, Smoothie, Frozen Dessert, Soups and Dips, 64-oz Pitcher, Black",
      "link": "https://www.amazon.com/Vitamix-Professional-Grade-Blending-Self-Cleaning-Container/dp/B0BWSJVTCJ/ref=sr_1_17_sspa?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household appliances&qid=1752250959&sr=8-17-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1",
      "rating": 4.4,
      "reviews": 452,
      "recent_sales": "3K+ bought in past month",
      "6666": "$379.95",
      "price": 37005,
      "original_6666": "$629.95",
      "extracted_original_6666": 629.95,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Jul 22 - Aug 7",
          "type": "FREE delivery",
          "date": "Jul 22 - Aug 7"
        }
      },
      "is_sponsored": true,
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/71vZk6aXveL._AC_UL320_.jpg"
    },
    {
      "position": 18,
      "sku": "B09D2QQZKG",
      "name": "Air Fryer Cheat Sheet Magnets Cooking Guide Booklet - Air Fryer Cookbooks - Air Fryer Liners - Air Fryers Kitchen Gifts Gadgets 2025 - Air Fryer Accessories - Air Fryer Cooking Guide",
      "link": "https://www.amazon.com/Fryer-Cheat-Magnets-Cooking-Booklet/dp/B09D2QQZKG/ref=sr_1_18?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-18",
      "rating": 4.6,
      "reviews": 23979,
      "recent_sales": "7K+ bought in past month",
      "6666": "$8.51",
      "price": 849,
      "original_6666": "$14.95",
      "extracted_original_6666": 14.95,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/811f+UIteXL._AC_UL320_.jpg"
    },
    {
      "position": 19,
      "sku": "B01H5FQ84Y",
      "name": "Elite Gourmet MST-275XP Electric Oval Slow Cooker, 2Qt Capacity, Purple",
      "link": "https://www.amazon.com/MST-275XP-Electric-Adjustable-Dishwasher-Safe-Ceramic/dp/B01H5FQ84Y/ref=sr_1_19?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-19",
      "rating": 4.5,
      "reviews": 36513,
      "recent_sales": "300+ bought in past month",
      "6666": "$24.64",
      "price": 2400,
      "original_6666": "$28.99",
      "extracted_original_6666": 28.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Thu, Jul 17 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Thu, Jul 17"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/71Dax+T9PZL._AC_UL320_.jpg"
    },
    {
      "position": 20,
      "sku": "B0D41JFYRR",
      "name": "11Pcs Crevice Cleaning Brush Set, Hard Bristle Cleaning Supplies for Kitchen, Bathroom, Corner, Grout, Sink, Cup, Teapot, Bottle, Blender",
      "link": "https://www.amazon.com/Dfacio-Crevice-Cleaning-Supplies-Bathroom/dp/B0D41JFYRR/ref=sr_1_20?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-20",
      "rating": 4.6,
      "reviews": 2063,
      "recent_sales": "10K+ bought in past month",
      "6666": "$7.59",
      "price": 749,
      "original_6666": "$9.99",
      "extracted_original_6666": 9.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/716P2YY3gfL._AC_UL320_.jpg"
    },
    {
      "position": 21,
      "sku": "B0775GR18G",
      "name": "AUOON Clip On Strainer Silicone for All Pots and Pans, Pasta Strainer Clip on Food Strainer for Meat Vegetables Fruit Silicone Kitchen Colander",
      "link": "https://www.amazon.com/Strainer-Spaghetti-Silicone-Colander-Approved/dp/B0775GR18G/ref=sr_1_21?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-21",
      "rating": 4.5,
      "reviews": 12580,
      "recent_sales": "4K+ bought in past month",
      "6666": "$8.49",
      "price": 849,
      "original_6666": "$9.99",
      "extracted_original_6666": 9.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/61rEjqHxCXL._AC_UL320_.jpg"
    },
    {
      "position": 22,
      "sku": "B0BP8D331P",
      "name": "BISSELL® CrossWave® HydroSteam™ Wet Dry Vac, Multi-Purpose Vacuum, Wash, and Steam, Sanitize Formula Included, 35151",
      "link": "https://www.amazon.com/BISSELL®-CrossWave®-HydroSteamTM-Multi-Purpose-35151/dp/B0BP8D331P/ref=sr_1_22_sspa?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household appliances&qid=1752250959&sr=8-22-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1",
      "rating": 4.2,
      "reviews": 2552,
      "recent_sales": "1K+ bought in past month",
      "6666": "$229.99",
      "price": 22009,
      "original_6666": "$319.99",
      "extracted_original_6666": 319.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16",
          "type": "FREE delivery",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_sponsored": true,
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/71El7VNu2ZL._AC_UL320_.jpg"
    },
    {
      "position": 23,
      "sku": "B0BG6YVCK9",
      "name": "ILIFE V5s Plus Robot Vacuum and Mop Combo, Works with 2.4G WiFi, Alexa/App/Remote Control, Automatic Self-Charging Robotic Vacuum Cleaner, for Pet Hair, Hard Floor, Low Carpet (V5s Pro Upgraded)",
      "link": "https://www.amazon.com/ILIFE-Automatic-Self-Charging-Robotic-Schedule/dp/B0BG6YVCK9/ref=sr_1_23_sspa?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household appliances&qid=1752250959&sr=8-23-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1",
      "rating": 4.1,
      "reviews": 13759,
      "recent_sales": "1K+ bought in past month",
      "6666": "$75.99",
      "price": 7500,
      "original_6666": "$199.99",
      "extracted_original_6666": 199.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16",
          "type": "FREE delivery",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_sponsored": true,
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/71qn3Ub5aOL._AC_UL320_.jpg"
    },
    {
      "position": 24,
      "sku": "B0DJG1731C",
      "name": "WINIX 5510 Air Purifier (New Generation of 5500-2) for Home Large Room Up to 1881 Ft² in 1 Hr, True HEPA, High Deodorization Carbon Filter and Auto Mode, Captures Pet Allergies, Smoke, Dust.",
      "link": "https://www.amazon.com/5510-Purifier-Generation-Deodorization-Allergies/dp/B0DJG1731C/ref=sr_1_24_sspa?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household appliances&qid=1752250959&sr=8-24-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1",
      "rating": 4.6,
      "reviews": 27999,
      "recent_sales": "8K+ bought in past month",
      "6666": "$135.49",
      "price": 13009,
      "original_6666": "$179.99",
      "extracted_original_6666": 179.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16",
          "type": "FREE delivery",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_sponsored": true,
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/71ENQM-0ptL._AC_UL320_.jpg"
    },
    {
      "position": 25,
      "sku": "B0FDQGPCG7",
      "name": "Midea MAW08V1QWT U-Shaped AC Window Air Conditioner",
      "link": "https://www.amazon.com/Midea-MAW08V1QWT-U-Shaped-Window-Conditioner/dp/B0FDQGPCG7/ref=sr_1_25_sspa?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household appliances&qid=1752250959&sr=8-25-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1",
      "rating": 3.8,
      "reviews": 64,
      "6666": "$279.99",
      "price": 27009,
      "original_6666": "$379.99",
      "extracted_original_6666": 379.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 23",
          "type": "FREE delivery",
          "date": "Wed, Jul 23"
        }
      },
      "is_sponsored": true,
      "image": "https://m.media-amazon.com/images/I/71pf9rrfFuL._AC_UL320_.jpg"
    },
    {
      "position": 26,
      "sku": "B0D25YFS8F",
      "name": "Olive Oil Sprayer for Cooking, 470ml 2 In 1 Glass Oil Dispenser/Pour Bottle, Kitchen Accessories, Kitchen Gadgets for Air Fryer, Salad, BBQ (Black)",
      "link": "https://www.amazon.com/SWEET-VIEW-Dispenser-Kitchen-Barbecue/dp/B0D25YFS8F/ref=sr_1_26?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-26",
      "rating": 4.3,
      "reviews": 5431,
      "recent_sales": "3K+ bought in past month",
      "6666": "$6.99",
      "price": 649,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "image": "https://m.media-amazon.com/images/I/71KDqUsrKGL._AC_UL320_.jpg"
    },
    {
      "position": 27,
      "sku": "B0BY58BYRZ",
      "name": "Multicolor Magnetic Measuring Spoons Set with Leveler - Stainless Steel, Stackable, Fits Spice Jars - For Baking Kitchen",
      "link": "https://www.amazon.com/Measuring-Stainless-Multicolors-Essentials-Tablespoon/dp/B0BY58BYRZ/ref=sr_1_27?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-27",
      "rating": 4.8,
      "reviews": 8975,
      "recent_sales": "400+ bought in past month",
      "6666": "$7.59",
      "price": 749,
      "original_6666": "$8.99",
      "extracted_original_6666": 8.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Thu, Jul 17 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Thu, Jul 17"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/812vHBDK03L._AC_UL320_.jpg"
    },
    {
      "position": 28,
      "sku": "B003OXNBYC",
      "name": "KitchenAid Classic Series 4.5 Quart Tilt-Head Stand Mixer K45SS, Onyx Black",
      "link": "https://www.amazon.com/KitchenAid-Classic-Quart-Tilt-Head-K45SSOB/dp/B003OXNBYC/ref=sr_1_28?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-28",
      "rating": 4.7,
      "reviews": 10938,
      "recent_sales": "2K+ bought in past month",
      "6666": "$299.95",
      "price": 29005,
      "original_6666": "$399.99",
      "extracted_original_6666": 399.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16",
          "type": "FREE delivery",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/51HXid8ExKL._AC_UL320_.jpg"
    },
    {
      "position": 29,
      "sku": "B09XMMZSWW",
      "name": "Surge Protector, Outlet Extender with Night Light, Addtam 5-Outlet Splitter and 4 USB Ports(1 USB C), Multi Plug Wall Outlet for Home Office Dorm Room Essentials",
      "link": "https://www.amazon.com/Protector-Extender-Addtam-5-Outlet-Splitter/dp/B09XMMZSWW/ref=sr_1_29?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-29",
      "rating": 4.6,
      "reviews": 9962,
      "recent_sales": "4K+ bought in past month",
      "6666": "$11.57",
      "price": 1100,
      "original_6666": "$14.99",
      "extracted_original_6666": 14.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/51fvNqvlFCL._AC_UL320_.jpg"
    },
    {
      "position": 30,
      "sku": "B0B3NJGSKL",
      "name": "Midea 12,000 BTU Smart Inverter Air Conditioner Window Unit with Heat and Dehumidifier – Cools up to 550 Sq. Ft., Energy Star Rated, Quiet Operation, Electronic Controls, Remote Control, White",
      "link": "https://www.amazon.com/Midea-Cooling-Inverter-Window-Conditioner/dp/B0B3NJGSKL/ref=sr_1_30_sspa?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household appliances&qid=1752250959&sr=8-30-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1",
      "rating": 4.3,
      "reviews": 16780,
      "recent_sales": "4K+ bought in past month",
      "6666": "$402.49",
      "price": 40009,
      "original_6666": "$49949,",
      "extracted_original_6666": 499.0,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Mon, Aug 11",
          "type": "FREE delivery",
          "date": "Mon, Aug 11"
        }
      },
      "is_sponsored": true,
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/71QonMhu34L._AC_UL320_.jpg"
    },
    {
      "position": 31,
      "sku": "B0DKPF2RKW",
      "name": "Nugget Ice Makers Countertop, Soft Pebble Ice Machine, Chewable Crushed Pellet Ice 42lbs/Day, Self-Cleaning Drainpipe Ice Maker for Party, Home, Kitchen, Bar, Office, Silver Gray",
      "link": "https://www.amazon.com/KOVIET-Countertop-Chewable-Self-Cleaning-Drainpipe/dp/B0DKPF2RKW/ref=sr_1_31_sspa?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household appliances&qid=1752250959&sr=8-31-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1",
      "rating": 4.2,
      "reviews": 136,
      "recent_sales": "100+ bought in past month",
      "6666": "$239.99",
      "price": 23009,
      "original_6666": "$299.99",
      "extracted_original_6666": 299.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Thu, Jul 17",
          "type": "FREE delivery",
          "date": "Thu, Jul 17"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_sponsored": true,
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/819lrCwpSnL._AC_UL320_.jpg"
    },
    {
      "position": 32,
      "sku": "B0DPNMDD97",
      "name": "BISSELL CrossWave Edge, Multi-Surface Hard Floor Cleaner Wet Dry Vacuum with Zero-Gap Edge Technology, 4111A",
      "link": "https://www.amazon.com/CrossWave-Multi-Surface-Zero-Gap-Technology-4111A/dp/B0DPNMDD97/ref=sr_1_32_sspa?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household appliances&qid=1752250959&sr=8-32-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1",
      "rating": 4.2,
      "reviews": 66,
      "recent_sales": "1K+ bought in past month",
      "6666": "$179.99",
      "price": 17009,
      "original_6666": "$229.99",
      "extracted_original_6666": 229.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Thu, Jul 17",
          "type": "FREE delivery",
          "date": "Thu, Jul 17"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_sponsored": true,
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/71qmES+cXRL._AC_UL320_.jpg"
    },
    {
      "position": 33,
      "sku": "B0BLGR4ZL7",
      "name": "Tineco Floor ONE S7 PRO Cordless Wet Dry Vacuum Cleaner, Smart Floor Cleaner Mop for Hard Floors, Long Run Time, Dual-Sided Edge Cleaning, Self-Cleaning, Centrifugal Drying Process",
      "link": "https://www.amazon.com/Tineco-Floor-ONE-Self-Cleaning-Centrifugal/dp/B0BLGR4ZL7/ref=sr_1_33_sspa?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household appliances&qid=1752250959&sr=8-33-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1",
      "rating": 4.2,
      "reviews": 931,
      "recent_sales": "1K+ bought in past month",
      "6666": "$42949,",
      "price": 4200,
      "original_6666": "$69949,",
      "extracted_original_6666": 699.0,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Thu, Jul 17",
          "type": "FREE delivery",
          "date": "Thu, Jul 17"
        }
      },
      "is_sponsored": true,
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/71nVhShA6oL._AC_UL320_.jpg"
    },
    {
      "position": 34,
      "sku": "B08JKXDFQ9",
      "name": "Meat Chopper, Hamburger Grinder, Premium Heat Resistant Smasher for Ground Beef, Burger Grinder Nylon Potato Mix Tool-Black",
      "link": "https://www.amazon.com/Chopper-Hamburger-Premium-Resistant-Smasher/dp/B08JKXDFQ9/ref=sr_1_34?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-34",
      "rating": 4.7,
      "reviews": 14201,
      "recent_sales": "10K+ bought in past month",
      "6666": "$7.98",
      "price": 749,
      "original_6666": "$9.99",
      "extracted_original_6666": 9.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/61qZUr2m6UL._AC_UL320_.jpg"
    },
    {
      "position": 35,
      "sku": "B0CPLVLFK2",
      "name": "Immersion Blender Handheld Corded Hand Blenders Set 1100W, Trigger Variable Speed 5 in 1 Stick Emulsifier with Chopper, Whisk and Frother for Soup, Baby Food and Smoothies",
      "link": "https://www.amazon.com/Immersion-Handheld-Variable-Emulsion-Smoothies/dp/B0CPLVLFK2/ref=sr_1_35?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-35",
      "rating": 4.6,
      "reviews": 4620,
      "recent_sales": "7K+ bought in past month",
      "6666": "$34.32",
      "price": 3400,
      "original_6666": "$49.99",
      "extracted_original_6666": 49.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "more_offers": {
        "lowest_6666": "$32.95",
        "extracted_lowest_6666": 32.95,
        "link": "https://www.amazon.com/gp/offer-listing/B0CPLVLFK2/ref=sr_1_35_olp?keywords=household+appliances&dib_tag=se&dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&qid=1752250959&sr=8-35",
        "offers_count": 5,
        "description": "(5+ used & new offers)"
      },
      "image": "https://m.media-amazon.com/images/I/61XRVcpkxxL._AC_UL320_.jpg"
    },
    {
      "position": 36,
      "sku": "B0BTSTKLBK",
      "name": "Pink Salt and Pepper Shakers Set - Pink Kitchen Accessories - Pink Kitchen Decor - 4 oz Glass Salt and Pepper Set for Cooking Table, RV, BBQ, Easy to Clean & Refill",
      "link": "https://www.amazon.com/Pink-Salt-Pepper-Shakers-Set/dp/B0BTSTKLBK/ref=sr_1_36?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-36",
      "rating": 4.7,
      "reviews": 5623,
      "recent_sales": "100+ bought in past month",
      "6666": "$7.59",
      "price": 749,
      "original_6666": "$10.61",
      "extracted_original_6666": 10.61,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Thu, Jul 17 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Thu, Jul 17"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/61646fijKIL._AC_UL320_.jpg"
    },
    {
      "position": 37,
      "sku": "B0C1NJDTTX",
      "name": "TUYU Electric Spin Scrubber, Full-Body IPX7 Waterproof Bathroom Scrubber with Power LCD Display, Adjustable Extension Handle, Cordless Shower Cleaner Brush for Bathtub Kitchen Wall Cleaning",
      "link": "https://www.amazon.com/Electric-Scrubber-Replaceable-Adjustable-Extension/dp/B0C1NJDTTX/ref=sr_1_37?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-37",
      "rating": 4.4,
      "reviews": 4128,
      "recent_sales": "20K+ bought in past month",
      "6666": "$33.99",
      "price": 3300,
      "original_6666": "$39.99",
      "extracted_original_6666": 39.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/71GhDHqOwNL._AC_UL320_.jpg"
    },
    {
      "position": 38,
      "sku": "B0CVXLXGRP",
      "name": "Tineco Floor ONE Stretch S6 Cordless Wet Dry Vacuum Cleaner, 180°Lay-Flat Smart Vacuum Mop, 40 Minutes Long Runtime 158℉ Flashdry Self-Cleaning, Dual-Sided Edge Cleaning Lightweight Floor Cleaner",
      "link": "https://www.amazon.com/Tineco-Floor-ONE-Stretch-Self-Cleaning/dp/B0CVXLXGRP/ref=sr_1_38_sspa?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household appliances&qid=1752250959&sr=8-38-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1",
      "rating": 4.3,
      "reviews": 575,
      "recent_sales": "3K+ bought in past month",
      "6666": "$31949,",
      "price": 3100,
      "original_6666": "$59949,",
      "extracted_original_6666": 599.0,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Mon, Jul 21",
          "type": "FREE delivery",
          "date": "Mon, Jul 21"
        }
      },
      "is_sponsored": true,
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/71zrzliGcAL._AC_UL320_.jpg"
    },
    {
      "position": 39,
      "sku": "B085FRKBMF",
      "name": "Braun MultiQuick 7 3-in-1 Immersion Blender with Food Processor – Powerful Handheld Electric Stick Blender - Emulsifier for Chopping, Beating & Whisking - Ideal for Soup, Puree, Smoothies & More",
      "link": "https://www.amazon.com/Braun-Immersion-Stainless-Processor-MultiQuick/dp/B085FRKBMF/ref=sr_1_39_sspa?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household appliances&qid=1752250959&sr=8-39-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1",
      "rating": 4.6,
      "reviews": 2910,
      "recent_sales": "2K+ bought in past month",
      "6666": "$74.99",
      "price": 7400,
      "original_6666": "$109.95",
      "extracted_original_6666": 109.95,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16",
          "type": "FREE delivery",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_sponsored": true,
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/61IPdj8WD1L._AC_UL320_.jpg"
    },
    {
      "position": 40,
      "sku": "B08CXKVSKX",
      "name": "Vospeed 9 IN 1 Stand Mixer, 850W Tilt-Head Multifunctional Electric Mixer with 8 QT Stainless Steel Bowl, 1.5L Glass Jar, Meat Grinder, Hook, Whisk, Beater Dishwasher Safe (Black)",
      "link": "https://www.amazon.com/Vospeed-Tilt-Head-Multifunctional-Dishwasher-safe-Stainless/dp/B08CXKVSKX/ref=sr_1_40_sspa?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household appliances&qid=1752250959&sr=8-40-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1",
      "rating": 4.3,
      "reviews": 1413,
      "6666": "$148.19",
      "price": 14009,
      "original_6666": "$199.99",
      "extracted_original_6666": 199.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Thu, Jul 17",
          "type": "FREE delivery",
          "date": "Thu, Jul 17"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_sponsored": true,
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/71bFtbpmddL._AC_UL320_.jpg"
    },
    {
      "position": 41,
      "sku": "B09HGTL7B2",
      "name": "24 Pcs Silverware Set with Steak Knives Service for 4,Stainless Steel Flatware Set,Mirror Polished Cutlery Utensil Set,Home Kitchen Eating Tableware Set,Include Fork Knife Spoon Set,Dishwasher Safe",
      "link": "https://www.amazon.com/Silverware-Stainless-Flatware-Tableware-Dishwasher/dp/B09HGTL7B2/ref=sr_1_41?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-41",
      "rating": 4.6,
      "reviews": 6262,
      "recent_sales": "8K+ bought in past month",
      "6666": "$14.99",
      "price": 1400,
      "6666_per": {
        "6666": 0.62,
        "unit": "count"
      },
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "image": "https://m.media-amazon.com/images/I/71ACC-x6MJL._AC_UL320_.jpg"
    },
    {
      "position": 42,
      "sku": "B08FLKF9SF",
      "name": "Aieve Appliance Sliders, 8 Pcs Small Appliance Slider for Countertop, Self Adhesive Home Finds Caster Wheels Rollers, Kitchen Must Have Gadgets for Stand Mixers, Coffee Makers, Air Fryers",
      "link": "https://www.amazon.com/AIEVE-Kitchen-Appliance-Sliders-Compatible/dp/B08FLKF9SF/ref=sr_1_42?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-42",
      "rating": 4.7,
      "reviews": 4080,
      "recent_sales": "2K+ bought in past month",
      "6666": "$4.79",
      "price": 449,
      "original_6666": "$5.99",
      "extracted_original_6666": 5.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/61k-FxNXebL._AC_UL320_.jpg"
    },
    {
      "position": 43,
      "sku": "B09Z65MVY5",
      "name": "Knife Set, HUNTER.DUAL 15 Pcs Kitchen Knife Set with Block Self Sharpening, Dishwasher Safe, Anti-slip Handle, Black",
      "link": "https://www.amazon.com/HUNTER-Dishwasher-Kitchen-Sharpening-Knives/dp/B09Z65MVY5/ref=sr_1_43?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-43",
      "rating": 4.6,
      "reviews": 5360,
      "recent_sales": "6K+ bought in past month",
      "6666": "$39.98",
      "price": 3900,
      "original_6666": "$69.99",
      "extracted_original_6666": 69.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16",
          "type": "FREE delivery",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/717WH4PX1gL._AC_UL320_.jpg"
    },
    {
      "position": 44,
      "sku": "B07RQVL8D5",
      "name": "BLACK+DECKER PowerCrush Countertop Blender, 6-Cup Glass Jar, For Smoothies and More, Stainless Steel Blade, 4 Speed Settings to Puree, Crush Ice, Chop, Dice, and Pulse, Dishwasher Safe, 700W Motor",
      "link": "https://www.amazon.com/BLACK-DECKER-BL1230SG-PowerCrush-Multi-Function/dp/B07RQVL8D5/ref=sr_1_44?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-44",
      "rating": 4.3,
      "reviews": 10633,
      "recent_sales": "3K+ bought in past month",
      "more_offers": {
        "lowest_6666": "$75.97",
        "extracted_lowest_6666": 75.97,
        "link": "https://www.amazon.com/gp/offer-listing/B07RQVL8D5/ref=sr_1_44_olp?keywords=household+appliances&dib_tag=se&dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&qid=1752250959&sr=8-44",
        "offers_count": 1,
        "description": "(1 new offer)"
      },
      "image": "https://m.media-amazon.com/images/I/711rlNbZmkL._AC_UL320_.jpg"
    },
    {
      "position": 45,
      "sku": "B0CX42VX3B",
      "name": "6-Piece Deluxe Nonstick Baking Pan Set - Professional Grade Carbon Steel Bakeware with White Marble Coating & Silicone Handles",
      "link": "https://www.amazon.com/BAKKEN-6-Piece-Deluxe-Nonstick-Baking/dp/B0CX42VX3B/ref=sr_1_45?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-45",
      "rating": 4.4,
      "reviews": 2723,
      "recent_sales": "600+ bought in past month",
      "6666": "$32.29",
      "price": 3200,
      "original_6666": "$37.99",
      "extracted_original_6666": 37.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Thu, Jul 17 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Thu, Jul 17"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Tue, Jul 15",
          "type": "Or fastest delivery",
          "date": "Tue, Jul 15"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/7199nRcYRlL._AC_UL320_.jpg"
    },
    {
      "position": 46,
      "sku": "B07F268WY8",
      "name": "Holikme Dryer Vent Cleaner Kit 2 Pack - Household Cleaning Supplies 304 Stainless Steel Dryer Lint Brush, Home Essentials for Lint Trap Dust & Pet Hair",
      "link": "https://www.amazon.com/Holikme-Household-Cleaning-Stainless-Essentials/dp/B07F268WY8/ref=sr_1_46?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-46",
      "rating": 4.2,
      "reviews": 38853,
      "recent_sales": "10K+ bought in past month",
      "6666": "$6.99",
      "price": 649,
      "original_6666": "$9.99",
      "extracted_original_6666": 9.99,
      "6666_per": {
        "6666": 3.5,
        "unit": "count"
      },
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/71uwYH+u6JL._AC_UL320_.jpg"
    },
    {
      "position": 47,
      "sku": "B09P4XPN7L",
      "name": "Meat Chopper, Hamburger Chopper, Potato Masher-Professional Multifunctional Heat Resistant Nylon Ground Beef Smasher Kitchen Tools And Gadgets, ​Safe For Non-Stick Cookware.",
      "link": "https://www.amazon.com/Hamburger-Masher-Professional-Multifunctional-Resistant-Non-Stick/dp/B09P4XPN7L/ref=sr_1_47?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-47",
      "rating": 4.6,
      "reviews": 3579,
      "recent_sales": "3K+ bought in past month",
      "6666": "$4.77",
      "price": 449,
      "original_6666": "$5.56",
      "extracted_original_6666": 5.56,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "image": "https://m.media-amazon.com/images/I/51C4GDzNqgL._AC_UL320_.jpg"
    },
    {
      "position": 48,
      "sku": "B00NGV4506",
      "name": "Ninja Professional Blender 1000W, Total Crushing Technology for Smoothies, Ice Crushing & Frozen Fruit, Full-Size Countertop Blender, 72-oz. Pitcher, Black & Grey, BL610",
      "link": "https://www.amazon.com/Ninja-Professional-Countertop-Technology-BL610/dp/B00NGV4506/ref=sr_1_48?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-48",
      "rating": 4.7,
      "reviews": 106709,
      "recent_sales": "10K+ bought in past month",
      "6666": "$98.99",
      "price": 9800,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16",
          "type": "FREE delivery",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "more_offers": {
        "lowest_6666": "$78.85",
        "extracted_lowest_6666": 78.85,
        "link": "https://www.amazon.com/gp/offer-listing/B00NGV4506/ref=sr_1_48_olp?keywords=household+appliances&dib_tag=se&dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&qid=1752250959&sr=8-48",
        "offers_count": 11,
        "description": "(11+ used & new offers)"
      },
      "image": "https://m.media-amazon.com/images/I/71iD5RyhuaL._AC_UL320_.jpg"
    },
    {
      "position": 49,
      "sku": "B0DDC6DNFF",
      "name": "Consciot CB08 11-Piece Blender for Kitchen and Personal Size, Blend Shakes and Smoothies, Frozen Drinks, Baby Food, Spreads & More, 3 Portable To-Go Cups & 2 Spout Lids & 1 Solid Lid, 900 Peak Watts",
      "link": "https://www.amazon.com/Consciot-CB08-11-Piece-Personal-Smoothies/dp/B0DDC6DNFF/ref=sr_1_49?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-49",
      "rating": 4.4,
      "reviews": 422,
      "recent_sales": "1K+ bought in past month",
      "6666": "$23.78",
      "price": 2300,
      "original_6666": "$32.99",
      "extracted_original_6666": 32.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/71S+Q+1jhQL._AC_UL320_.jpg"
    },
    {
      "position": 50,
      "sku": "B0C38WVJVQ",
      "name": "10 Inch Microwave Food Cover & Collapsible Silicone Mat - Splatter Guard, Plate Holder & Kitchen Colander for Meal Prep, Charcoal",
      "link": "https://www.amazon.com/LekDrok-Microwave-Splatter-Collapsible-Multi-Purpose/dp/B0C38WVJVQ/ref=sr_1_50?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-50",
      "rating": 4.5,
      "reviews": 1771,
      "recent_sales": "3K+ bought in past month",
      "6666": "$9.99",
      "price": 949,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "image": "https://m.media-amazon.com/images/I/71OxVk24wSL._AC_UL320_.jpg"
    },
    {
      "position": 51,
      "sku": "B08ZCCS682",
      "name": "Kitchen Shears, iBayam Kitchen Scissors All Purpose Heavy Duty Meat Poultry Shears, Dishwasher Safe Food Cooking Stainless Steel Utility Scissors, Home Apartment Essentials, 2-Pack, Black, Aqua Sky",
      "link": "https://www.amazon.com/iBayam-Scissors-Dishwasher-Multipurpose-Stainless/dp/B08ZCCS682/ref=sr_1_51?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-51",
      "rating": 4.8,
      "reviews": 53513,
      "recent_sales": "1K+ bought in past month",
      "6666": "$9.49",
      "price": 949,
      "original_6666": "$12.99",
      "extracted_original_6666": 12.99,
      "6666_per": {
        "6666": 4.75,
        "unit": "count"
      },
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/61ODBMQgJyS._AC_UL320_.jpg"
    },
    {
      "position": 52,
      "sku": "B00N3L2DMG",
      "name": "Hamilton Beach Dual Breakfast Sandwich Maker with Timer, Ready in 5 Minutes, Removable Dishwasher Safe PFAS-Free Non-Stick Egg Cooker Ring, Silver (25490MNA)",
      "link": "https://www.amazon.com/Hamilton-Beach-Breakfast-Sandwich-Maker/dp/B00N3L2DMG/ref=sr_1_52?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-52",
      "rating": 4.6,
      "reviews": 24821,
      "recent_sales": "3K+ bought in past month",
      "6666": "$36.56",
      "price": 3600,
      "original_6666": "$54.45",
      "extracted_original_6666": 54.45,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16",
          "type": "FREE delivery",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/81ky0potEEL._AC_UL320_.jpg"
    },
    {
      "position": 53,
      "sku": "B09XJ1Z8CV",
      "name": "Silicone Faucet Handle Drip Catcher Tray Mat, Silicone Faucet Mat Dish Soap Sponge Holder for Kitchen Sink Accessories Gadgets, Drying Mat for Kitchen Counter Bathroom Kitchen Sink Splash Guard -Grey",
      "link": "https://www.amazon.com/Silicone-Catcher-Kitchen-Accessories-Bathroom/dp/B09XJ1Z8CV/ref=sr_1_53?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-53",
      "rating": 4.0,
      "reviews": 9628,
      "recent_sales": "4K+ bought in past month",
      "6666": "$9.99",
      "price": 949,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "image": "https://m.media-amazon.com/images/I/71Id74T3vNL._AC_UL320_.jpg"
    },
    {
      "position": 54,
      "sku": "B00008WQ3L",
      "name": "Kamenstein 20 Jar Revolving Countertop Spice Rack with Spices Included, FREE Spice Refills for 5 Years, Polished Stainless Steel with Black Caps, 30020",
      "link": "https://www.amazon.com/Kamenstein-30020-Revolving-Countertop-Refills/dp/B00008WQ3L/ref=sr_1_54?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-54",
      "rating": 4.6,
      "reviews": 15375,
      "recent_sales": "7K+ bought in past month",
      "6666": "$31.69",
      "price": 3100,
      "original_6666": "$79.99",
      "extracted_original_6666": 79.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "more_offers": {
        "lowest_6666": "$31.06",
        "extracted_lowest_6666": 31.06,
        "link": "https://www.amazon.com/gp/offer-listing/B00008WQ3L/ref=sr_1_54_olp?keywords=household+appliances&dib_tag=se&dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&qid=1752250959&sr=8-54",
        "offers_count": 11,
        "description": "(11+ used & new offers)"
      },
      "image": "https://m.media-amazon.com/images/I/71pvhsDVYJL._AC_UL320_.jpg"
    },
    {
      "position": 55,
      "sku": "B08SBTP9DQ",
      "name": "Angry Mama Microwave Oven Steam Cleaner, Angry Mom Microwave Cleaner, Just Add Vinegar and Water, Cut Cleaning Time by Half (Green)",
      "link": "https://www.amazon.com/Aivwis-Microwave-Cleaner-Vinegar-Cleaning/dp/B08SBTP9DQ/ref=sr_1_55?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-55",
      "rating": 4.4,
      "reviews": 1617,
      "recent_sales": "1K+ bought in past month",
      "6666": "$6.39",
      "price": 649,
      "original_6666": "$7.99",
      "extracted_original_6666": 7.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/51cnApQwKzL._AC_UL320_.jpg"
    },
    {
      "position": 56,
      "sku": "B00DPX8UBA",
      "name": "BELLA Two Tier Food Steamer with Dishwasher Safe Lids and Stackable Baskets & Removable Base for Fast Simultaneous Cooking - Auto Shutoff & Boil Dry Protection, Stainless Steel, 7.4 QT, Black",
      "link": "https://www.amazon.com/BELLA-Stackable-Baskets-Protection-Vegetables/dp/B00DPX8UBA/ref=sr_1_56?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-56",
      "rating": 4.5,
      "reviews": 14362,
      "recent_sales": "3K+ bought in past month",
      "6666": "$39.99",
      "price": 3900,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16",
          "type": "FREE delivery",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "more_offers": {
        "lowest_6666": "$28.07",
        "extracted_lowest_6666": 28.07,
        "link": "https://www.amazon.com/gp/offer-listing/B00DPX8UBA/ref=sr_1_56_olp?keywords=household+appliances&dib_tag=se&dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&qid=1752250959&sr=8-56",
        "offers_count": 4,
        "description": "(4+ used & new offers)"
      },
      "image": "https://m.media-amazon.com/images/I/81Ol1F+XNQL._AC_UL320_.jpg"
    },
    {
      "position": 57,
      "sku": "B0C3H9MJQV",
      "name": "Metal 4 Pack Magnetic Spice Storage Rack Organizer for Refrigerator and Oven, Black Fridge Organizers and Storage",
      "link": "https://www.amazon.com/HuggieGems-Magnetic-Organizer-Refrigerator-Organizers/dp/B0C3H9MJQV/ref=sr_1_57?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-57",
      "rating": 4.8,
      "reviews": 7279,
      "recent_sales": "10K+ bought in past month",
      "6666": "$16.99",
      "price": 1600,
      "original_6666": "$19.99",
      "extracted_original_6666": 19.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_small_business": true,
      "image": "https://m.media-amazon.com/images/I/51imrSup74L._AC_UL320_.jpg"
    },
    {
      "position": 58,
      "sku": "B0CJ4WZXQF",
      "name": "Cisily Kitchen Sink Caddy Organzier with High Brush Holder, Sponge Holder for Sink, 304 Rustproof Stainless, Kitchen Countertop Soap Dispenser Organizer, Kitchen Decor and Accessories",
      "link": "https://www.amazon.com/Cisily-Organzier-Rustproof-Stainless-Organizer/dp/B0CJ4WZXQF/ref=sr_1_58?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-58",
      "rating": 4.4,
      "reviews": 3578,
      "recent_sales": "10K+ bought in past month",
      "6666": "$15.24",
      "price": 1500,
      "original_6666": "$26.99",
      "extracted_original_6666": 26.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/81w9xBQTvZL._AC_UL320_.jpg"
    },
    {
      "position": 59,
      "sku": "B0BSKQW2T2",
      "name": "Paper Towel Holder - Self-Adhesive or Drilling, Matte Black, Upgraded Aluminum Kitchen Roll Dispenser Under Cabinet, Lighter but Stronger Than Stainless Steel!",
      "link": "https://www.amazon.com/Paper-Towel-Holder-Self-Adhesive-Stainless/dp/B0BSKQW2T2/ref=sr_1_59?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-59",
      "rating": 3.9,
      "reviews": 7592,
      "recent_sales": "10K+ bought in past month",
      "6666": "$7.99",
      "price": 749,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "image": "https://m.media-amazon.com/images/I/71SdoAGoQFL._AC_UL320_.jpg"
    },
    {
      "position": 60,
      "sku": "B087RQCQQZ",
      "name": "BLUE GINKGO Over the Sink Colander Strainer Basket - Wash Vegetables and Fruits, Drain Cooked Pasta and Dry Dishes - Extendable - New Home Kitchen Essentials (7.9W x 14-19L x 2.75H) - Gray",
      "link": "https://www.amazon.com/Blue-Ginkgos-Colander-Strainer-Basket/dp/B087RQCQQZ/ref=sr_1_60?dib=eyJ2IjoiMSJ9.mQWtO75e26EEitxygWA6QT1ErQ0vFwKKN8WCJGhkWY3GteNooYcO_NYB5B0Q2oCIlMCsOfIoKqQNyxFM3XCRzvMCVgp58KPu5v7otzyOfo-g5EwnvcNnTETrGhiunftJP_HiySMuj8yWCSD7_2EuwloIKpEa1OL37ur59vEx5WQNv-4kJdOaCw168Xv3mJuba6YMznbUYRAkF2mLO7ShITxonALrR9KhaKIYEzg1XqXF__duPDMc0uNToZSlOz2UdfS1DowdrBJsRiiGb6n0r1ZygtOOhg5RAAxsSY14IS4.RNcBiI071vhumu1T3W2lOnr092-bVBm-XtinzY0jsDI&dib_tag=se&keywords=household+appliances&qid=1752250959&sr=8-60",
      "rating": 4.6,
      "reviews": 22347,
      "recent_sales": "1K+ bought in past month",
      "6666": "$15.29",
      "price": 1500,
      "original_6666": "$19.99",
      "extracted_original_6666": 19.99,
      "fulfillment": {
        "standard_delivery": {
          "text": "FREE delivery Wed, Jul 16 on $35 of items shipped by Amazon",
          "type": "FREE delivery",
          "condition": "on $35 of items shipped by Amazon",
          "date": "Wed, Jul 16"
        },
        "fastest_delivery": {
          "text": "Or fastest delivery Sun, Jul 13",
          "type": "Or fastest delivery",
          "date": "Sun, Jul 13"
        }
      },
      "is_limited_time_deal": true,
      "image": "https://m.media-amazon.com/images/I/71Wi4iH3vHL._AC_UL320_.jpg"
    }
  ]
// --- CONFIGURATION ---
const BASE_API_URL = 'http://localhost:5000'; // <<< IMPORTANT: REPLACE WITH YOUR ACTUAL BACKEND URL
const MOCK_DATA_ENDPOINT = '/api/mock-full-data';
const PRODUCTS_PER_GROUP = 10;

/**
 * Generates a random string of a given length.
 * @param {number} length
 * @returns {string}
 */
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/**
 * Generates a random integer between min (inclusive) and max (inclusive).
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Creates mock data for a single product and its associated models.
 * @param {Object} product The product data from your CSV.
 * @returns {Promise<Object>} The response from the API call.
 */
async function createMockDataForProduct(product) {
   
    try {
        const response = await fetch(`${BASE_API_URL}${MOCK_DATA_ENDPOINT}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error(`Error creating mock data for SKU: ${product.sku}. Status: ${response.status}`, data);
            return { success: false, productSku: product.sku, error: data };
        }

        console.log(`Successfully created mock data for SKU: ${product.sku}`);
        return { success: true, productSku: product.sku, data: data };

    } catch (error) {
        console.error(`Network or unexpected error for SKU: ${product.sku}`, error);
        return { success: false, productSku: product.sku, error: error.message };
    }
}

/**
 * Main function to process products in groups and create mock data.
 */
async function seedDatabaseWithProducts() {
    console.log(`Starting database seeding for ${productsData.length} products...`);
    console.log(`Processing in groups of ${PRODUCTS_PER_GROUP}.`);
    console.log(`Backend API URL: ${BASE_API_URL}`);

    for (let i = 0; i < productsData.length; i += PRODUCTS_PER_GROUP) {
        const productGroup = productsData.slice(i, i + PRODUCTS_PER_GROUP);
        console.log(`\n--- Processing Group ${Math.floor(i / PRODUCTS_PER_GROUP) + 1} (Products ${i + 1} to ${Math.min(i + PRODUCTS_PER_GROUP, productsData.length)}) ---`);

        const promises = productGroup.map(product => createMockDataForProduct(product));
        const results = await Promise.allSettled(promises);

        results.forEach((result, index) => {
            const currentProduct = productGroup[index];
            if (result.status === 'fulfilled') {
                if (result.value.success) {
                    console.log(`✅ Group ${Math.floor(i / PRODUCTS_PER_GROUP) + 1} - Product ${currentProduct.sku}: Success`);
                } else {
                    console.error(`❌ Group ${Math.floor(i / PRODUCTS_PER_GROUP) + 1} - Product ${currentProduct.sku}: Failed. Error:`, result.value.error);
                }
            } else {
                console.error(`Fatal error for Product ${currentProduct.sku}:`, result.reason);
            }
        });

        // Optional: Add a small delay between groups to avoid overwhelming the server
        if (i + PRODUCTS_PER_GROUP < productsData.length) {
            console.log(`Waiting for 2 seconds before next group...`);
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }

    console.log('\n--- Database seeding complete! ---');
}

// Execute the function
seedDatabaseWithProducts();
