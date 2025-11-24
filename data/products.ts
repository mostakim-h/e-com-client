import { Product, Review } from "@/types";

/**
 * Mock product data for the ecommerce store
 * In a real application, this would come from an API
 */
export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    description: "Premium noise-cancelling wireless headphones with 30-hour battery life. Experience crystal-clear audio quality with deep bass and comfortable over-ear design.",
    price: 199.99,
    originalPrice: 299.99,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop",
    ],
    category: "electronics",
    brand: "Sony",
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    stockCount: 45,
    colors: ["Black", "Silver", "Blue"],
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0",
      "Comfortable over-ear design",
      "Built-in microphone",
    ],
    tags: ["bestseller", "featured"],
  },
  {
    id: "2",
    name: "Classic Cotton T-Shirt",
    description: "Soft, breathable cotton t-shirt perfect for everyday wear. Available in multiple colors and sizes.",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
    ],
    category: "clothing",
    brand: "H&M",
    rating: 4.2,
    reviewCount: 89,
    inStock: true,
    stockCount: 120,
    colors: ["White", "Black", "Navy", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    features: [
      "100% Cotton",
      "Machine washable",
      "Comfortable fit",
      "Pre-shrunk fabric",
    ],
    tags: ["new"],
  },
  {
    id: "3",
    name: "Smart Watch Pro",
    description: "Advanced smartwatch with fitness tracking, heart rate monitor, and 7-day battery life. Stay connected with notifications and calls.",
    price: 349.99,
    originalPrice: 449.99,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop",
    ],
    category: "electronics",
    brand: "Apple",
    rating: 4.7,
    reviewCount: 256,
    inStock: true,
    stockCount: 32,
    colors: ["Black", "Silver", "Gold"],
    features: [
      "Heart rate monitoring",
      "Sleep tracking",
      "GPS enabled",
      "Water resistant",
      "7-day battery life",
      "App notifications",
    ],
    tags: ["bestseller", "featured"],
  },
  {
    id: "4",
    name: "Leather Wallet",
    description: "Genuine leather wallet with RFID blocking technology. Multiple card slots and slim design.",
    price: 49.99,
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&h=800&fit=crop",
    ],
    category: "accessories",
    brand: "Fossil",
    rating: 4.4,
    reviewCount: 67,
    inStock: true,
    stockCount: 88,
    colors: ["Brown", "Black"],
    features: [
      "Genuine leather",
      "RFID blocking",
      "8 card slots",
      "Slim design",
      "Bill compartment",
    ],
  },
  {
    id: "5",
    name: "Yoga Mat Premium",
    description: "Extra thick yoga mat with superior cushioning and non-slip surface. Perfect for yoga, pilates, and fitness exercises.",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=800&fit=crop",
    ],
    category: "sports",
    brand: "Lululemon",
    rating: 4.6,
    reviewCount: 143,
    inStock: true,
    stockCount: 65,
    colors: ["Purple", "Blue", "Green", "Pink"],
    features: [
      "6mm thickness",
      "Non-slip surface",
      "Easy to clean",
      "Includes carrying strap",
      "Eco-friendly material",
    ],
    tags: ["featured"],
  },
  {
    id: "6",
    name: "Ceramic Coffee Mug Set",
    description: "Set of 4 elegant ceramic coffee mugs. Microwave and dishwasher safe. Perfect for home or office.",
    price: 34.99,
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&h=800&fit=crop",
    ],
    category: "home",
    brand: "IKEA",
    rating: 4.3,
    reviewCount: 45,
    inStock: true,
    stockCount: 56,
    colors: ["White", "Black", "Mixed"],
    features: [
      "Set of 4 mugs",
      "Ceramic material",
      "Microwave safe",
      "Dishwasher safe",
      "16 oz capacity each",
    ],
  },
  {
    id: "7",
    name: "Running Shoes Pro",
    description: "High-performance running shoes with advanced cushioning and breathable mesh. Designed for long-distance comfort.",
    price: 129.99,
    originalPrice: 179.99,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop",
    ],
    category: "sports",
    brand: "Nike",
    rating: 4.8,
    reviewCount: 198,
    inStock: true,
    stockCount: 42,
    colors: ["Black", "White", "Blue", "Red"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    features: [
      "Advanced cushioning",
      "Breathable mesh",
      "Durable outsole",
      "Lightweight design",
      "Arch support",
    ],
    tags: ["bestseller"],
  },
  {
    id: "8",
    name: "Desk Lamp LED",
    description: "Adjustable LED desk lamp with touch control and USB charging port. Energy-efficient and eye-friendly lighting.",
    price: 59.99,
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop",
    ],
    category: "home",
    brand: "Philips",
    rating: 4.5,
    reviewCount: 72,
    inStock: true,
    stockCount: 38,
    colors: ["White", "Black"],
    features: [
      "Touch control",
      "USB charging port",
      "Adjustable brightness",
      "Flexible arm",
      "Energy efficient LED",
    ],
    tags: ["new"],
  },
  {
    id: "9",
    name: "Backpack Travel Pro",
    description: "Durable travel backpack with laptop compartment and multiple pockets. Water-resistant and comfortable for all-day wear.",
    price: 79.99,
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop",
    ],
    category: "accessories",
    brand: "North Face",
    rating: 4.6,
    reviewCount: 156,
    inStock: true,
    stockCount: 51,
    colors: ["Black", "Gray", "Navy"],
    features: [
      "Laptop compartment (up to 15.6\")",
      "Water-resistant",
      "Multiple pockets",
      "Padded shoulder straps",
      "USB charging port",
    ],
    tags: ["featured"],
  },
  {
    id: "10",
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with silent clicking and long battery life. Compatible with all operating systems.",
    price: 24.99,
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=800&fit=crop",
    ],
    category: "electronics",
    brand: "Logitech",
    rating: 4.3,
    reviewCount: 92,
    inStock: true,
    stockCount: 145,
    colors: ["Black", "White", "Gray"],
    features: [
      "Wireless connectivity",
      "Silent clicking",
      "Ergonomic design",
      "Long battery life (6 months)",
      "Universal compatibility",
    ],
  },
  {
    id: "11",
    name: "Sunglasses Aviator",
    description: "Classic aviator sunglasses with UV protection and polarized lenses. Timeless style for any occasion.",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&h=800&fit=crop",
    ],
    category: "accessories",
    brand: "Ray-Ban",
    rating: 4.4,
    reviewCount: 78,
    inStock: true,
    stockCount: 67,
    colors: ["Gold", "Silver", "Black"],
    features: [
      "UV400 protection",
      "Polarized lenses",
      "Metal frame",
      "Includes case",
      "Classic aviator style",
    ],
  },
  {
    id: "12",
    name: "Cookbook - Healthy Meals",
    description: "Comprehensive cookbook with over 200 healthy and delicious recipes. Perfect for beginners and experienced cooks.",
    price: 19.99,
    images: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=800&fit=crop",
    ],
    category: "books",
    brand: "Penguin",
    rating: 4.7,
    reviewCount: 234,
    inStock: true,
    stockCount: 94,
    features: [
      "200+ recipes",
      "Nutritional information",
      "Step-by-step instructions",
      "Beautiful photography",
      "Hardcover edition",
    ],
    tags: ["bestseller"],
  },
];

/**
 * Mock review data
 */
export const reviews: Review[] = [
  {
    id: "r1",
    productId: "1",
    userName: "John Doe",
    rating: 5,
    comment: "Amazing sound quality! The noise cancellation works perfectly. Best headphones I've ever owned.",
    date: "2025-11-15",
    helpful: 12,
  },
  {
    id: "r2",
    productId: "1",
    userName: "Sarah Smith",
    rating: 4,
    comment: "Great headphones, but took some time to get used to the controls. Overall very satisfied.",
    date: "2025-11-10",
    helpful: 8,
  },
  {
    id: "r3",
    productId: "3",
    userName: "Mike Johnson",
    rating: 5,
    comment: "This smartwatch is incredible! Tracks everything I need and the battery life is outstanding.",
    date: "2025-11-18",
    helpful: 15,
  },
  {
    id: "r4",
    productId: "3",
    userName: "Emily Chen",
    rating: 4.5,
    comment: "Love the features and design. Syncs perfectly with my phone. Highly recommend!",
    date: "2025-11-12",
    helpful: 9,
  },
  {
    id: "r5",
    productId: "7",
    userName: "David Wilson",
    rating: 5,
    comment: "Best running shoes I've ever purchased. So comfortable for long runs!",
    date: "2025-11-16",
    helpful: 11,
  },
];

/**
 * Get all products
 */
export const getAllProducts = (): Product[] => {
  return products;
};

/**
 * Get product by ID
 */
export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

/**
 * Get products by category
 */
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};

/**
 * Get featured products
 */
export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.tags?.includes("featured"));
};

/**
 * Get bestseller products
 */
export const getBestsellers = (): Product[] => {
  return products.filter((product) => product.tags?.includes("bestseller"));
};

/**
 * Get new products
 */
export const getNewProducts = (): Product[] => {
  return products.filter((product) => product.tags?.includes("new"));
};

/**
 * Get reviews for a product
 */
export const getProductReviews = (productId: string): Review[] => {
  return reviews.filter((review) => review.productId === productId);
};

/**
 * Search products by query
 */
export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery)
  );
};

/**
 * Get all unique brands from products
 */
export const getAllBrands = (): string[] => {
  const brands = products
    .map((product) => product.brand)
    .filter((brand): brand is string => brand !== undefined);
  return Array.from(new Set(brands)).sort();
};

