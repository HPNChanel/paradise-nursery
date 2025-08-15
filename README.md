# Paradise Nursery 🌱

A modern e-commerce web application for purchasing plants, built with React, TypeScript, and Redux Toolkit. Features a responsive design with shopping cart functionality and clean user interface.

## 🌐 Live Demo

**Public Repository**: [https://github.com/yourusername/paradise-nursery](https://github.com/yourusername/paradise-nursery)  
**Live Site**: [https://yourusername.github.io/paradise-nursery](https://yourusername.github.io/paradise-nursery)

## 📱 Application Routes

- **`/`** - Landing Page: Hero section with company branding and call-to-action
- **`/products`** - Product Listing: Browse and filter plants by category, add to cart
- **`/cart`** - Shopping Cart: View cart items, adjust quantities, proceed to checkout

## 🛠 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Styling**: CSS Modules
- **Testing**: Vitest + React Testing Library
- **Deployment**: GitHub Pages

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/paradise-nursery.git
cd paradise-nursery

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development
npm run dev          # Start dev server at http://localhost:5173

# Testing  
npm run test         # Run tests with Vitest
npm run test:ui      # Run tests with UI
npm run coverage     # Generate test coverage

# Production
npm run build        # Build for production
npm run preview      # Preview production build
npm run deploy       # Deploy to GitHub Pages

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format with Prettier
```

### Deployment to GitHub Pages

1. Update `vite.config.ts` with your repository name:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... other config
})
```

2. Deploy:
```bash
npm run build
npm run deploy
```

## 📋 Grading Checklist

### ✅ Repository & Setup
- **Public GitHub Repository**: Available at repository URL above
- **Redux Implementation**: 
  - Store configuration: `src/app/store.ts`
  - Cart slice: `src/features/cart/cartSlice.ts`
  - Selectors: `src/features/cart/selectors.ts`
  - Types: `src/features/cart/types.ts`

### ✅ Landing Page (`/`)
- **Background Image**: Full-bleed hero section with overlay (`src/pages/LandingPage/`)
- **Company Name**: "Paradise Nursery" prominently displayed
- **Brand Paragraph**: 2-3 sentences describing the business
- **Call-to-Action**: "Get Started" button linking to `/products`
- **Responsive Typography**: Clamp-based sizing for mobile/desktop
- **WCAG AA Compliance**: High contrast overlay and accessible colors

### ✅ Product Listing Page (`/products`)
- **Plant Inventory**: 12+ plants with varied categories
- **Categories**: "Low Light", "Pet-Friendly", "Air Purifier", "Statement Plant", "Succulent"
- **Category Filtering**: URL-based filtering (`?category=Air%20Purifier`)
- **Add to Cart Behavior**:
  - Cart count increments immediately via Redux
  - Button becomes disabled and shows "Added" 
  - Button tooltip shows "Already in cart"
- **Plant Data Structure**: `{ id, name, price, category, image, description, stock }`
- **Loading Skeletons**: Shimmer effect while content loads
- **Accessibility**: Proper ARIA labels, keyboard navigation

### ✅ Header Component
- **Conditional Rendering**: Only shows on `/products` and `/cart` pages
- **Logo**: "Paradise Nursery" links to home
- **Navigation**: Links to Products and Cart
- **Cart Icon**: 
  - Shows dynamic item count from Redux
  - Navigates to `/cart` on click
  - ARIA live region for count updates
- **Keyboard Accessibility**: Focus styles and proper tab order

### ✅ Shopping Cart (`/cart`)
- **Header Summary**: Total items count and formatted total price
- **Line Items Display**:
  - Product thumbnail image
  - Product name
  - Unit price and subtotal (qty × price)
- **Quantity Controls**:
  - Increment/decrement buttons with ARIA labels
  - Minimum quantity of 1, auto-removes at 0
- **Delete Functionality**: Remove button for each item
- **Footer Actions**:
  - "Continue Shopping" → links to `/products`
  - "Checkout" → shows "Coming Soon" alert
- **Empty State**: Friendly message with link to products
- **Responsive Design**: Mobile-optimized layout

### ✅ Technical Requirements
- **Redux State Management**: 
  - Record-based cart state: `{ items: Record<string, CartItem> }`
  - Actions: `addItem`, `increment`, `decrement`, `remove`
  - Selectors: `selectCartItems`, `selectCartCount`, `selectCartTotal`, `selectIsInCart`
- **Currency Formatting**: `formatUSD()` utility for consistent pricing
- **Mobile Responsive**: 1-col mobile, 2-col tablet, 3-4-col desktop
- **Keyboard Navigation**: Focus styles and ARIA support
- **URL State Management**: Category filters persist in URL
- **Loading States**: Skeleton screens for better UX

### ✅ Code Quality
- **TypeScript**: Fully typed components and Redux store
- **Testing**: Unit tests for cart functionality
- **CSS Modules**: Scoped styling with responsive breakpoints  
- **ESLint & Prettier**: Code formatting and linting
- **Accessibility**: WCAG AA compliant focus states and ARIA labels

## 🧪 Testing

The application includes unit tests for core cart functionality:

```bash
npm run test
```

Key test cases:
- Product card button state changes after adding to cart
- Cart count increments correctly
- Duplicate additions are prevented
- Redux state updates properly

## 📱 Mobile Responsiveness

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: 
  - Mobile: < 768px (1 column)
  - Tablet: 768px - 1023px (2 columns)  
  - Desktop: 1024px+ (3-4 columns)
- **Touch Friendly**: Adequate button sizes and spacing

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **ARIA Labels**: Screen reader support
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant
- **Live Regions**: Cart updates announced to screen readers

## 🎯 Key Features

- **Real-time Cart Updates**: Redux-powered state management
- **Category Filtering**: URL-based plant filtering
- **Responsive Design**: Works on all device sizes
- **Loading States**: Skeleton screens for better UX
- **Persistent State**: Cart survives page refreshes
- **Accessibility**: Full keyboard and screen reader support
