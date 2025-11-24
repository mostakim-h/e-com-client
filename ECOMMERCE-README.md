# ShopHub - Full-Featured Ecommerce Website

A modern, fully-featured ecommerce website built with Next.js 15, TypeScript, and HeroUI. This project provides a complete shopping experience with product browsing, cart management, and checkout functionality.

## 🚀 Features

### Core Features
- **Product Catalog**: Browse 12+ products across 6 categories
- **Product Details**: Detailed product pages with images, reviews, and specifications
- **Shopping Cart**: Add/remove items, update quantities with persistent storage
- **Checkout Process**: Multi-step checkout with shipping and payment information
- **Category Browsing**: Filter products by category
- **Search & Filter**: Search products and filter by category, price, and rating
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop

### User Experience
- **Dark/Light Mode**: Theme switcher with persistent preference
- **Loading States**: Smooth loading indicators for async operations
- **Toast Notifications**: User feedback for cart operations
- **Product Reviews**: Display customer reviews and ratings
- **Stock Management**: Real-time stock availability display

### Technical Features
- **Type-Safe**: Full TypeScript implementation
- **Context API**: Global state management for cart
- **Local Storage**: Persistent cart across sessions
- **Component Library**: HeroUI for consistent, accessible components
- **Modern UI**: Beautiful gradients, animations, and transitions

## 📁 Project Structure

```
client/
├── app/                          # Next.js app directory
│   ├── about/                   # About page
│   ├── cart/                    # Shopping cart page
│   ├── categories/              # Categories listing page
│   ├── checkout/                # Checkout process page
│   ├── contact/                 # Contact form page
│   ├── order-confirmation/      # Order success page
│   ├── product/[id]/           # Dynamic product details page
│   ├── shop/                    # Main shop/products page
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   └── providers.tsx           # Context providers
├── components/                  # Reusable components
│   ├── icons.tsx               # SVG icon components
│   ├── navbar.tsx              # Navigation bar with cart
│   ├── primitives.ts           # UI primitives
│   ├── product-card.tsx        # Product card component
│   └── theme-switch.tsx        # Dark/light mode toggle
├── config/                      # Configuration files
│   ├── fonts.ts                # Font configuration
│   └── site.ts                 # Site metadata and navigation
├── contexts/                    # React contexts
│   └── CartContext.tsx         # Shopping cart state management
├── data/                        # Mock data
│   └── products.ts             # Product and review data
├── styles/                      # Global styles
│   └── globals.css             # Global CSS
├── types/                       # TypeScript types
│   └── index.ts                # Type definitions
└── public/                      # Static assets
```

## 🛠️ Technologies Used

### Core
- **Next.js 15.3.1**: React framework with App Router
- **React 18.3.1**: UI library
- **TypeScript 5.6.3**: Type safety
- **Tailwind CSS 4.1.11**: Utility-first CSS

### UI Components
- **HeroUI 2.x**: Comprehensive UI component library
  - Accordion, Alert, Autocomplete
  - Avatar, Badge, Button, Card
  - Chip, Dropdown, Form, Image
  - Input, Modal, Navbar, Pagination
  - Select, Table, Tabs, Toast
  - And many more...

### Utilities
- **Framer Motion**: Animations
- **next-themes**: Theme management
- **clsx**: Conditional classnames

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ installed
- pnpm package manager (or npm/yarn)

### Installation

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Run the development server**
   ```bash
   pnpm dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
pnpm build
pnpm start
```

## 📄 Pages Overview

### Home Page (`/`)
- Hero section with call-to-action
- Featured products showcase
- Bestsellers section
- Benefits (Free shipping, Secure payment, Easy returns)
- Newsletter signup

### Shop Page (`/shop`)
- Grid view of all products
- Search functionality
- Category filter
- Sort options (Featured, Price, Rating, Newest)
- Active filter chips

### Product Details (`/product/[id]`)
- Image gallery with thumbnails
- Product information and pricing
- Color and size selection
- Quantity selector
- Add to cart functionality
- Product features list
- Customer reviews with ratings
- Rating distribution chart

### Cart Page (`/cart`)
- List of cart items
- Quantity adjustment
- Remove items
- Order summary with pricing breakdown
- Free shipping threshold indicator
- Proceed to checkout

### Checkout Page (`/checkout`)
- Multi-step checkout process
- Shipping information form
- Payment method selection
- Order summary sidebar
- Form validation

### Order Confirmation (`/order-confirmation`)
- Success message
- Order number
- Estimated delivery date
- Next steps information

### Categories Page (`/categories`)
- Visual category cards
- Product count per category
- Quick navigation to filtered shop

### About Page (`/about`)
- Company story
- Mission and values
- Statistics
- Customer benefits

### Contact Page (`/contact`)
- Contact form
- Customer service information
- Office address
- Quick links

## 🎨 Component Documentation

### ProductCard
```tsx
<ProductCard product={product} />
```
Displays a product with:
- Image with discount/stock badges
- Name and description
- Rating and review count
- Price (with original price if discounted)
- Quick add to cart button

### CartContext
```tsx
const { cart, addToCart, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartItemsCount } = useCart();
```

**Methods:**
- `addToCart(product, quantity, color?, size?)`: Add item to cart
- `removeFromCart(productId)`: Remove item from cart
- `updateQuantity(productId, quantity)`: Update item quantity
- `clearCart()`: Remove all items
- `getCartTotal()`: Calculate total price
- `getCartItemsCount()`: Get total item count

### Navbar
- Responsive navigation
- Search input
- Cart icon with badge
- Theme switcher
- Mobile menu

## 📊 Data Structure

### Product Interface
```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: ProductCategory;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  colors?: string[];
  sizes?: string[];
  tags?: string[];
  features?: string[];
}
```

### CartItem Interface
```typescript
interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}
```

## 🎯 Key Features Implementation

### Cart Persistence
The cart uses localStorage to persist data across sessions:
- Saves cart on every update
- Loads cart on page load
- Survives browser refresh

### State Management
- React Context API for global cart state
- No external state management library needed
- Clean and simple implementation

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly on mobile devices

### Performance
- Next.js App Router for optimal performance
- Image optimization with next/image
- Code splitting and lazy loading

## 🔧 Customization

### Adding New Products
Edit `data/products.ts`:
```typescript
export const products: Product[] = [
  {
    id: "13",
    name: "Your Product",
    description: "Product description",
    price: 99.99,
    images: ["image-url"],
    category: "electronics",
    // ... other properties
  },
  // ... existing products
];
```

### Changing Site Information
Edit `config/site.ts`:
```typescript
export const siteConfig = {
  name: "Your Shop Name",
  description: "Your description",
  navItems: [
    // ... your navigation items
  ],
};
```

### Styling
- Modify `tailwind.config.js` for theme colors
- Edit `styles/globals.css` for global styles
- Use HeroUI theme configuration for component styling

## 📦 Mock Data

The project includes 12 sample products across 6 categories:
- Electronics (Headphones, Smartwatch, Mouse)
- Clothing (T-shirts)
- Accessories (Wallet, Backpack, Sunglasses)
- Home (Coffee Mugs, Desk Lamp)
- Sports (Yoga Mat, Running Shoes)
- Books (Cookbooks)

Sample reviews are included for demonstration.

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📝 Future Enhancements

Potential features to add:
- [ ] User authentication and profiles
- [ ] Order history
- [ ] Wishlist functionality
- [ ] Product comparison
- [ ] Advanced filters (price range, brands)
- [ ] Product recommendations
- [ ] Email notifications
- [ ] Payment gateway integration
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Social sharing

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

---

**Built with ❤️ using Next.js and TypeScript**

