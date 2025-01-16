export const products = [
  {
    image: "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-14.png",
    name: "Bench",
    category: "Living Room",
    quantity: 10,
    price: 100,
    tags: ["best seller"]
  },
  {
    image: "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-01.png",
    name: "Bookcase",
    category: "Storage",
    quantity: 5,
    price: 200,
    tags: ["premium", "new"]
  },
  {
    image: "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-11.png",
    name: "Dining Table",
    category: "Dining",
    quantity: 20,
    price: 500,
    tags: ["premium", "best seller"]
  },
  {
    image: "https://furniforma.wpengine.com/wp-content/uploads/2024/12/catagory-dressing-table-2.jpg",
    name: "Dressing Table",
    category: "Bedroom",
    quantity: 8,
    price: 300,
    tags: ["premium"]
  },
  {
    image: "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-03.png",
    name: "Office Chair",
    category: "Office",
    quantity: 15,
    price: 150,
    tags: ["premium", "best seller"]
  },
  {
    image: "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-08.png",
    name: "Sofa",
    category: "Living Room",
    quantity: 12,
    price: 700,
    tags: ["premium", "new"]
  },
  {
    image: "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-02.png",
    name: "Study Table",
    category: "Study",
    quantity: 7,
    price: 250,
    tags: ["premium"]
  },
  {
    image: "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-09.png",
    name: "Stylish Furniture",
    category: "Decor",
    quantity: 18,
    price: 800,
    tags: ["premium", "new"]
  },
  {
    image: "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-12.png",
    name: "Wardrobe",
    category: "Bedroom",
    quantity: 4,
    price: 450,
    tags: ["new"]
  },
  {
    image: "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-05.png",
    name: "Wooden Chair",
    category: "Living Room",
    quantity: 25,
    price: 120,
    tags: ["best seller"]
  },
  {
    image: "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-04.png",
    name: "Wooden Cot",
    category: "Bedroom",
    quantity: 25,
    price: 600,
    tags: ["new"]
  },
  {
    image: "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-06.png",
    name: "Wooden Table",
    category: "Dining",
    quantity: 25,
    price: 300,
    tags: ["best seller"]
  },
  {
    image: "https://furniforma.wpengine.com/wp-content/uploads/2024/12/FF-category-img-07.png",
    name: "Wooden Lamp",
    category: "Decor",
    quantity: 25,
    price: 180,
    tags: ["new", "premium"]
  },
  {
    image: "https://furniforma.wpengine.com/wp-content/uploads/2024/12/product-1.jpg",
    name: "Outdoor Sofa",
    category: "home",
    quantity: 25,
    price: 180,
    tags: [""]
  },
  {
    image: "https://furniforma.wpengine.com/wp-content/uploads/2024/12/product-2.jpg",
    name: "Handmade Wooden Chair",
    category: "home",
    quantity: 25,
    price: 180,
    tags: [""]
  },
  {
    image: "https://furniforma.wpengine.com/wp-content/uploads/2024/12/product-3.jpg",
    name: "Decorative Light",
    category: "home",
    quantity: 25,
    price: 180,
    tags: [""]
  },
  {
    image: "https://furniforma.wpengine.com/wp-content/uploads/2024/12/product-4.jpg",
    name: "Cushion Lounge Chair",
    category: "home",
    quantity: 25,
    price: 180,
    tags: [""]
  }
];

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