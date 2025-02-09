export const products = [
  {
    id: "product-001",
    name: "Wooden Garden Bench",
    company: "Furniforma",
    price: { original: 120.0, discounted: 100.0 },
    reviews: {
        rating: 4.5,
    },
    stock: 10,
    images: [
      "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-14.png",
      "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-product-img-38-02.png",
      "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-product-img-38-03.png",
      "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-product-img-38-04.png"
    ],
    category: "Bench",
    tags: ["best seller"],
    shippingDetails: { deliveryDate: "31 January 2025", freeShippingThreshold: 150.0 },
    addOns: { wishlist: true, buyNow: true },
    paymentOptions: ["PayPal", "Google Pay", "Visa", "MasterCard", "PhonePe", "Amazon pay"],
    details: {
      description:{
          materialAndColor: "Made from high-quality wood with a natural finish.",
          manufacturingDetails: "Durable design and superior craftsmanship.",
          productFeature: "Compact and versatile, it fits seamlessly into various spaces.",
      },
      additionalInformation: {
         primaryMaterial: "Engineered Wood",
         dimensions: {
            width: 160,
            height: 158,
            depth: 140,
         },
         style: "contemporary",
         finish: "melamine",
         warranty: 12,
         productFeature: "made of engineered wood stable and durable structure",
         manufacturedBy: "M.R.Furniture (Pvt) Ltd",
         packedBy: "M.R.Furniture (Pvt) Ltd",
         marketedBy: "Basic furnitures, No. 154 Avenue, Anna Street, Brighton",
         countryOfOrigin: "IND",
         color: "Black, Brown, Red"

      },
      reviews: {
         user: {
            userName: "abc",
            profileUrl: ""
         },
         rating: 4.5,
         timeStamp: "3/12/2024",
         comments: "Torquent va rius arcu fringilla, venenatis nibh faucibus. Aptent odio nunc nisl, fermentum integer nisi natoque egestas. Pellentesque metus vehicula odio malesuada dolor sociosqu mollis."
      },
      warrantyTerms:{
          description: "This product is backed by a 6-year limited warranty, ensuring coverage against manufacturing defects.",
          conditions: {
            appliesTo: "Repairs or replacements under specified conditions",
            exclusions: ["Misuse", "Accidents", "Normal wear and tear"],
            reference: "For full details, please refer to the warranty terms and conditions."
          }
        ,
        foamWarranty: {
          description: "The foam is warranted against sagging.",
          duration: "24 months from the date of purchase"
        },
        overallProductWarranty: {
          description: "We provide a warranty on the overall product.",
          duration: "12 months",
          coverage: "Manufacturing defects or issues arising from normal use"
        },
        repairService: {
          description: "In the event of any issues covered under warranty, excluding fabric, we offer repair services to rectify the problem."
        },
        replacementPolicy: {
          description: "If a major defect is found within 12 months and it is determined to be a genuine product defect, we may offer a replacement.",
          conditions: "Excludes fabric and requires verification of the defect"
        },
      },
      materialCare: {
          description: "To maintain the product’s finish, wipe with a soft, damp cloth and use mild soap if necessary. Avoid abrasive cleaners, direct sunlight and excessive humidity to prevent damage. For upholstery, vacuum regularly and spot-clean as needed.",
          tips: ["Avoid prolonged exposure to direct sunlight.", "Avoid using sharp and pointed objects.", "Any spillages to be wiped with dry cloth.", "Never apply the cleaning agent or water.", "Instead, apply the cleaning agent only.", "Use clean, soft and dry cloth to remove dust."]
      }
    },
  },
  {
    id: "product-002",
    name: "Bookcase",
    company: "Furniforma",
     price: { original: 250.0, discounted: 200.0 },
    reviews: {
      rating: 4.6,
  },
    stock: 5,
    images: [
      "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-01.png",
    ],
    category: "Bookcase",
    tags: ["premium", "new"],
    shippingDetails: { deliveryDate: "2 February 2025", freeShippingThreshold: 200.0 },
    addOns: { wishlist: true, buyNow: true },
    paymentOptions: ["Amazon Pay", "Google Pay", "Paytm", "Visa"],
    details: {
      description:
      "Organize your books and decor with this premium bookcase, ideal for modern storage solutions.",
      materialAndColor: "Crafted from engineered wood with a walnut finish.",
      manufacturingDetails:
        "Built with precision and tested for long-lasting durability.",
      productFeature: "Spacious compartments with a contemporary design.",
      warranty: "3 years limited warranty",
      materialCare: "Wipe clean with a dry cloth. Avoid direct sunlight and heat.",
    },
  },
  {
    id: "product-003",
    name: "Dining Table",
    company: "Furniforma",
    price: { original: 600.0, discounted: 500.0 },
    reviews: {
      rating: 4.2,
  },
    stock: 20,
    images: [
      "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-11.png",
    ],
    category: "Dining Table",
    tags: ["premium", "best seller"],
    shippingDetails: { deliveryDate: "3 February 2025", freeShippingThreshold: 400.0 },
    addOns: { wishlist: true, buyNow: true },
    paymentOptions: ["Razorpay", "Payoneer", "MasterCard", "Visa"],
    details: {
      description:
      "A stunning dining table, combining elegance and practicality for family meals.",
      materialAndColor: "Solid wood with a polished mahogany finish.",
      manufacturingDetails:
        "Designed to enhance modern dining spaces with robust construction.",
      productFeature: "Seats up to six people comfortably with a spacious tabletop.",
      warranty: "5 years limited warranty",
      materialCare: "Dust regularly and avoid using abrasive cleaning solutions.",
    },
  },
  {
    id: "product-004",
    name: "Dressing Table",
    company: "Furniforma",
    price: { original: 350.0, discounted: 300.0 },
    reviews: {
      rating: 3,
  },
    stock: 8,
    images: [
      "https://furniforma.wpengine.com/wp-content/uploads/2024/12/catagory-dressing-table-2.jpg",
    ],
    category: "Dressing Table",
    tags: ["premium"],
    shippingDetails: { deliveryDate: "4 February 2025", freeShippingThreshold: 300.0 },
    addOns: { wishlist: true, buyNow: true },
    paymentOptions: ["Visa", "Google Pay", "PayPal"],
    details: {
      description: "A stylish dressing table, perfect for adding elegance to your bedroom.",
      materialAndColor: "Engineered wood with a smooth finish.",
      manufacturingDetails: "Designed for durability and style.",
      productFeature: "Ample storage with a large mirror.",
      warranty: "3 years limited warranty",
      materialCare: "Clean with a dry cloth. Avoid water exposure.",
    },
  },
  {
    id: "product-005",
    name: "Office Chair",
    company: "Furniforma",
    price: { original: 180.0, discounted: 150.0 },
    reviews: {
      rating: 4,
  },
    stock: 15,
    images: [
      "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-03.png",
    ],
    category: "Office Chair",
    tags: ["premium", "best seller"],
    shippingDetails: { deliveryDate: "1 February 2025", freeShippingThreshold: 200.0 },
    addOns: { wishlist: true, buyNow: true },
    paymentOptions: ["Google Pay", "Paytm", "Visa"],
    details: {
      description: "Ergonomic office chair to enhance your comfort and productivity.",
      materialAndColor: "Comfortable mesh back with adjustable height.",
      manufacturingDetails: "Made for long hours of seating with lumbar support.",
      productFeature: "Ergonomic design with smooth-rolling wheels.",
      warranty: "2 years limited warranty",
      materialCare: "Wipe clean with a damp cloth.",
    },
  },
  {
    id: "product-006",
    name: "Sofa",
    company: "Furniforma",
    price: { original: 850.0, discounted: 700.0 },
    reviews: {
      rating: 4.5,
   },
    stock: 12,
    images: [
      "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-08.png",
    ],
    category: "Sofa",
    tags: ["premium", "new"],
    shippingDetails: { deliveryDate: "5 February 2025", freeShippingThreshold: 500.0 },
    addOns: { wishlist: true, buyNow: true },
    paymentOptions: ["MasterCard", "Visa", "Razorpay"],
    details: {
      description: "A luxurious sofa designed for ultimate comfort and style.",
      materialAndColor: "High-quality fabric with plush cushions.",
      manufacturingDetails: "Built for durability and long-lasting use.",
      productFeature: "Spacious seating with a modern aesthetic.",
      warranty: "5 years limited warranty",
      materialCare: "Vacuum clean regularly and avoid direct sunlight.",
    },
  },
  {
    id: "product-007",
    name: "Study Table",
    company: "Furniforma",
     price: { original: 300.0, discounted: 250.0 },
    reviews: {
      rating: 4.7,
    },
    stock: 7,
    images: [
      "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-02.png",
    ],
    category: "Study Table",
    tags: ["premium"],
    shippingDetails: { deliveryDate: "6 February 2025", freeShippingThreshold: 250.0 },
    addOns: { wishlist: true, buyNow: true },
    paymentOptions: ["PayPal", "Visa", "Google Pay"],
    details: {
      description:
      "A functional study table, perfect for work or study sessions at home.",
      materialAndColor: "Solid wood with a polished oak finish.",
      manufacturingDetails:
        "Designed to provide ergonomic comfort while studying or working.",
      productFeature: "Built-in storage compartments for convenience.",
      warranty: "4 years limited warranty",
      materialCare: "Dust regularly. Avoid contact with liquids.",
    },
  },
  {
    id: "product-008",
    name: "Recliner Chair",
    company: "Furniforma",
    price: { original: 450.0, discounted: 400.0 },
    reviews: {
      rating: 3.5,
  },
    stock: 6,
    images: [
      "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-07.png",
    ],
    category: "Wooden Lamp",
    tags: ["premium", "best seller"],
    shippingDetails: { deliveryDate: "7 February 2025", freeShippingThreshold: 350.0 },
    addOns: { wishlist: true, buyNow: true },
    paymentOptions: ["PayPal", "Visa", "MasterCard"],
    details: {
      description: "A plush recliner chair for ultimate relaxation and comfort.",
      materialAndColor: "Leather upholstery with padded armrests and backrest.",
      manufacturingDetails: "Engineered for maximum comfort and durability.",
      productFeature: "Reclining function with adjustable footrest.",
      warranty: "3 years limited warranty",
      materialCare: "Clean with a soft cloth and avoid direct sunlight.",
    },
  },
  {
    id: "product-009",
    name: "Coffee Table",
    company: "Furniforma",
    price: { original: 200.0, discounted: 160.0 },
    reviews: {
      rating: 3.5,
  },
    stock: 10,
    images: [
      "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-04.png",
    ],
    category: "Wooden cot",
    tags: ["best seller", "new"],
    shippingDetails: { deliveryDate: "8 February 2025", freeShippingThreshold: 180.0 },
    addOns: { wishlist: true, buyNow: true },
    paymentOptions: ["Visa", "PayPal", "MasterCard"],
    details: {
      description: "A stylish and functional coffee table to complement your living space.",
      materialAndColor: "Glass top with a wooden frame.",
      manufacturingDetails: "Sleek design to fit any modern living room.",
      productFeature: "Spacious tabletop with a lower shelf for additional storage.",
      warranty: "2 years limited warranty",
      materialCare: "Wipe clean with a soft cloth.",
    },
  },
  {
    id: "product-010",
    name: "Bedside Table",
    company: "Furniforma",
    price: { original: 150.0, discounted: 130.0 },
    reviews: {
      rating: 5,
  },
    stock: 12,
    images: [
      "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-05.png",
    ],
    category: "Wooden Chair",
    tags: ["new", "premium"],
    shippingDetails: { deliveryDate: "9 February 2025", freeShippingThreshold: 120.0 },
    addOns: { wishlist: true, buyNow: true },
    paymentOptions: ["Google Pay", "PayPal", "Visa"],
    details: {
    description: "A minimalist bedside table to keep your essentials close at hand.",
      materialAndColor: "Wooden frame with a clean, natural finish.",
      manufacturingDetails: "Compact and sturdy, built to last.",
      productFeature: "Single drawer for storage with an open shelf.",
      warranty: "1 year limited warranty",
      materialCare: "Dust regularly and avoid moisture exposure.",
    },
  },
  {
    id: "product-011",
    name: "TV Stand",
    company: "Furniforma",
    price: { original: 320.0, discounted: 280.0 },
    reviews: {
      rating: 3,
  },
    stock: 8,
    images: [
      "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-06.png",
    ],
    category: "Wooden Table",
    tags: ["premium", "best seller"],
    shippingDetails: { deliveryDate: "10 February 2025", freeShippingThreshold: 250.0 },
    addOns: { wishlist: true, buyNow: true },
    paymentOptions: ["Visa", "PayPal", "MasterCard"],
    details: {
    description: "A modern TV stand with ample storage for your entertainment essentials.",
      materialAndColor: "Wood and metal with a contemporary black finish.",
      manufacturingDetails: "Designed for modern living rooms with a minimalist style.",
      productFeature: "Two spacious drawers and open shelving for storage.",
      warranty: "3 years limited warranty",
      materialCare: "Wipe clean with a soft, damp cloth.",
    },
  },
  {
    id: "product-012",
    name: "Sideboard",
    company: "Furniforma",
    price: { original: 400.0, discounted: 350.0 },
    reviews: {
      rating: 3,
  },
    stock: 5,
    images: [
      "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-12.png",
    ],
    category: "Wardrobe",
    tags: ["premium", "new"],
    shippingDetails: { deliveryDate: "11 February 2025", freeShippingThreshold: 300.0 },
    addOns: { wishlist: true, buyNow: true },
    paymentOptions: ["PayPal", "Visa", "MasterCard"],
    details: {
    description: "A stylish sideboard for your dining room or hallway.",
      materialAndColor: "Wooden frame with a smooth lacquer finish.",
      manufacturingDetails: "Built to complement modern dining spaces.",
      productFeature: "Ample storage with two cabinets and multiple compartments.",
      warranty: "3 years limited warranty",
      materialCare: "Dust regularly and avoid contact with liquids.",
    },
  },
  {
    id: "product-013",
    name: "Armchair",
    company: "Furniforma",
    price: { original: 220.0, discounted: 180.0 },
    reviews: {
      rating: 3,
  },
    stock: 9,
    images: [
      "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-09.png",
    ],
    category: "Stylish Furniture",
    tags: ["new", "premium"],
    shippingDetails: { deliveryDate: "12 February 2025", freeShippingThreshold: 150.0 },
    addOns: { wishlist: true, buyNow: true },
    paymentOptions: ["Visa", "PayPal", "Google Pay"],
    details: {
    description: "A comfortable armchair perfect for reading or relaxing.",
      materialAndColor: "Fabric upholstery with plush cushions.",
      manufacturingDetails: "Built for comfort and long-term use.",
      productFeature: "Ergonomic design with armrests for added support.",
      warranty: "2 years limited warranty",
      materialCare: "Vacuum clean regularly and spot clean when necessary.",
    },
  },
  {
    id: "product-014",
    name: "Bar Stool",
    company: "Furniforma",
    price: { original: 150.0, discounted: 130.0 },
    reviews: {
      rating: 3,
  },
    stock: 14,
    images: [
      "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-10.png",
    ],
    category: "Dressing Table",
    tags: ["best seller", "premium"],
    shippingDetails: { deliveryDate: "13 February 2025", freeShippingThreshold: 120.0 },
    addOns: { wishlist: true, buyNow: true },
    paymentOptions: ["Visa", "PayPal", "Google Pay"],
    details: {
    description: "A sleek bar stool to add a modern touch to your kitchen or bar area.",
      materialAndColor: "Metal frame with a padded leather seat.",
      manufacturingDetails: "Sturdy and designed for comfort and style.",
      productFeature: "Adjustable height with a swivel seat.",
      warranty: "1 year limited warranty",
      materialCare: "Wipe clean with a damp cloth.",
    },
  },
  {
    id: "product-015",
    name: "Wall Shelf",
    company: "Furniforma",
    price: { original: 100.0, discounted: 80.0 },
    reviews: {
      rating: 5,
  },
    stock: 20,
    images: [
      "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-13.png",
    ],
    category: "Bench",
    tags: ["new"],
    shippingDetails: { deliveryDate: "14 February 2025", freeShippingThreshold: 70.0 },
    addOns: { wishlist: true, buyNow: true },
    paymentOptions: ["Google Pay", "Visa", "Paytm"],
    details: {
    description: "A versatile wall shelf that provides extra storage and display space.",
      materialAndColor: "Wooden shelf with a dark walnut finish.",
      manufacturingDetails: "Compact and designed for easy installation.",
      productFeature: "Ideal for small spaces to display decor items or store books.",
      warranty: "1 year limited warranty",
      materialCare: "Dust regularly and avoid contact with liquids.",
    },
  },
  {
    id: "product-016",
    name: "Cabinet",
    company: "Furniforma",
    price: { original: 350.0, discounted: 300.0 },
    reviews: {
      rating: 4.5,
  },
    stock: 6,
    images: [
      "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-15.png",
    ],
    category: "Wooden Table",
    tags: ["premium", "best seller"],
    shippingDetails: { deliveryDate: "15 February 2025", freeShippingThreshold: 250.0 },
    addOns: { wishlist: true, buyNow: true },
    paymentOptions: ["Visa", "PayPal", "MasterCard"],
    details: {
    description: "A spacious cabinet to store your belongings and organize your space.",
      materialAndColor: "Engineered wood with a smooth, glossy finish.",
      manufacturingDetails: "Designed for durability and ample storage space.",
      productFeature: "Multiple compartments with adjustable shelves.",
      warranty: "2 years limited warranty",
      materialCare: "Wipe clean with a damp cloth and dry thoroughly.",
    },
  },
  {
    id: "product-017",
    name: "Decorative Light",
    company: "Furniforma",
    price: { original: 350.0, discounted: 300.0 },
    reviews: {
      rating: 4.5,
  },
    stock: 6,
    images: [
      "https://furniforma.wpengine.com/wp-content/uploads/2024/12/product-3.jpg",
    ],
    category: "Home",
    tags: ["premium", "best seller"],
    shippingDetails: { deliveryDate: "15 February 2025", freeShippingThreshold: 250.0 },
    addOns: { wishlist: true, buyNow: true },
    paymentOptions: ["Visa", "PayPal", "MasterCard"],
    details: {
    description: "A spacious cabinet to store your belongings and organize your space.",
      materialAndColor: "Engineered wood with a smooth, glossy finish.",
      manufacturingDetails: "Designed for durability and ample storage space.",
      productFeature: "Multiple compartments with adjustable shelves.",
      warranty: "2 years limited warranty",
      materialCare: "Wipe clean with a damp cloth and dry thoroughly.",
    },
  },
  {
    id: "product-018",
    name: "Cushion Lounge Chair",
    company: "Furniforma",
    price: { original: 350.0, discounted: 300.0 },
    reviews: {
      rating: 4.5,
  },
    stock: 6,
    images: [
      "https://furniforma.wpengine.com/wp-content/uploads/2024/12/product-4.jpg",
    ],
    category: "Home",
    tags: ["premium", "best seller"],
    shippingDetails: { deliveryDate: "15 February 2025", freeShippingThreshold: 250.0 },
    addOns: { wishlist: true, buyNow: true },
    paymentOptions: ["Visa", "PayPal", "MasterCard"],
    details: {
    description: "A spacious cabinet to store your belongings and organize your space.",
      materialAndColor: "Engineered wood with a smooth, glossy finish.",
      manufacturingDetails: "Designed for durability and ample storage space.",
      productFeature: "Multiple compartments with adjustable shelves.",
      warranty: "2 years limited warranty",
      materialCare: "Wipe clean with a damp cloth and dry thoroughly.",
    },
  },
  {
    id: "product-019",
    name: "Stylish Comfort Chair",
    company: "Furniforma",
    price: { original: 350.0, discounted: 300.0 },
    reviews: {
      rating: 4.5,
  },
    stock: 6,
    images: [
      "https://furniforma.wpengine.com/wp-content/uploads/2024/12/product-5.jpg",
    ],
    category: "Home",
    tags: ["premium", "best seller"],
    shippingDetails: { deliveryDate: "15 February 2025", freeShippingThreshold: 250.0 },
    addOns: { wishlist: true, buyNow: true },
    paymentOptions: ["Visa", "PayPal", "MasterCard"],
    details: {
    description: "A spacious cabinet to store your belongings and organize your space.",
      materialAndColor: "Engineered wood with a smooth, glossy finish.",
      manufacturingDetails: "Designed for durability and ample storage space.",
      productFeature: "Multiple compartments with adjustable shelves.",
      warranty: "2 years limited warranty",
      materialCare: "Wipe clean with a damp cloth and dry thoroughly.",
    },
  },
  {
    id: "product-020",
    name: "Stylish Sofa",
    company: "Furniforma",
    price: { original: 350.0, discounted: 300.0 },
    reviews: {
      rating: 4.5,
  },
    stock: 6,
    images: [
      "https://furniforma.wpengine.com/wp-content/uploads/2024/11/product-6.jpg",
    ],
    category: "Home",
    tags: ["premium", "best seller"],
    shippingDetails: { deliveryDate: "15 February 2025", freeShippingThreshold: 250.0 },
    addOns: { wishlist: true, buyNow: true },
    paymentOptions: ["Visa", "PayPal", "MasterCard"],
    details: {
      description: "A spacious cabinet to store your belongings and organize your space.",
      materialAndColor: "Engineered wood with a smooth, glossy finish.",
      manufacturingDetails: "Designed for durability and ample storage space.",
      productFeature: "Multiple compartments with adjustable shelves.",
      warranty: "2 years limited warranty",
      materialCare: "Wipe clean with a damp cloth and dry thoroughly.",
    },
  },
  {
    id: "product-021",
    name: "Handmade Wooden Chair",
    company: "Furniforma",
    price: { original: 350.0, discounted: 300.0 },
    reviews: {
      rating: 4.5,
  },
    stock: 6,
    images: [
      "https://furniforma.wpengine.com/wp-content/uploads/2024/12/product-2.jpg",
    ],
    category: "Home",
    tags: ["premium", "best seller"],
    shippingDetails: { deliveryDate: "15 February 2025", freeShippingThreshold: 250.0 },
    addOns: { wishlist: true, buyNow: true },
    paymentOptions: ["Visa", "PayPal", "MasterCard"],
    details: {
      description: "A spacious cabinet to store your belongings and organize your space.",
      materialAndColor: "Engineered wood with a smooth, glossy finish.",
      manufacturingDetails: "Designed for durability and ample storage space.",
      productFeature: "Multiple compartments with adjustable shelves.",
      warranty: "2 years limited warranty",
      materialCare: "Wipe clean with a damp cloth and dry thoroughly.",
    },
  },
  {
    id: "product-022",
    name: "Stylish Outdoor Sofa",
    company: "Furniforma",
    description: "A spacious cabinet to store your belongings and organize your space.",
    price: { original: 350.0, discounted: 300.0 },
    reviews: {
      rating: 4.5,
  },
    stock: 6,
    images: [
      "https://furniforma.wpengine.com/wp-content/uploads/2024/12/product-1.jpg",
    ],
    category: "Home",
    tags: ["premium", "best seller"],
    shippingDetails: { deliveryDate: "15 February 2025", freeShippingThreshold: 250.0 },
    addOns: { wishlist: true, buyNow: true },
    paymentOptions: ["Visa", "PayPal", "MasterCard"],
    details: {
      materialAndColor: "Engineered wood with a smooth, glossy finish.",
      manufacturingDetails: "Designed for durability and ample storage space.",
      productFeature: "Multiple compartments with adjustable shelves.",
      warranty: "2 years limited warranty",
      materialCare: "Wipe clean with a damp cloth and dry thoroughly.",
    },
  },
];


console.log(products.filter((product) => product.category === "Bench"));

export const comments = [
  {
    id: 1,
    productId: "101", // Product ID for reference
    productName: "Modern Sofa",
    author: "Priya Sharma",
    text: "This sofa is very comfortable and matches my living room decor perfectly!",
    rating: 5, // Rating out of 5
    timestamp: "2025-01-16T09:30:00Z",
    avatar: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0fGVufDB8fDB8fHww", // URL of the person's image
  },
  {
    id: 2,
    productId: "102", // Product ID for reference
    productName: "Wooden Dining Table",
    author: "Aditi Verma",
    text: "The table is sturdy and elegant. However, the delivery was delayed.",
    rating: 4,
    timestamp: "2025-01-15T14:45:00Z",
    avatar: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    id: 3,
    productId: "101",
    productName: "Modern Sofa",
    author: "Riya Gupta",
    text: "Great quality, but I feel it's a bit overpriced.",
    rating: 3,
    timestamp: "2025-01-16T10:15:00Z",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const sortingOptions = [
  { label: "Default Sorting", value: "default" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" }, 
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
];
