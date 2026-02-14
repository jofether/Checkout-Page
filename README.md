# ShopHub - E-Commerce Checkout Application

A modern, responsive e-commerce checkout application built with React, Vite, and Tailwind CSS. This project features a complete multi-step checkout flow with product browsing, shopping cart management, and order review.

## Features

✨ **Product Browsing**: Browse a curated collection of products with ratings and prices
🛒 **Shopping Cart**: Add, remove, and update product quantities
📦 **Shipping Options**: Multiple shipping methods with different delivery times
📋 **Checkout Form**: Comprehensive form with validation for contact, shipping, and payment information
✅ **Order Review**: Review all order details before completing the purchase
🎨 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
💳 **Secure Checkout**: Security indicators and professional checkout UI

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Header with progress indicator
│   ├── ProductCard.jsx      # Product display card with add to cart
│   ├── CartItem.jsx         # Shopping cart item component
│   ├── OrderSummary.jsx     # Order summary with totals
│   ├── CheckoutForm.jsx     # Multi-field checkout form with validation
│   └── index.js             # Component exports
├── data.js                  # Product data and constants
├── App.jsx                  # Main app with checkout flow logic
├── main.jsx                 # React entry point
├── index.css                # Tailwind CSS directives
└── vite.config.js           # Vite configuration
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## How to Use

1. **Browse Products**: Start by selecting items from the product catalog
2. **Add to Cart**: Click "Add to Cart" on any product and select quantity
3. **Manage Cart**: Review your cart, update quantities, or remove items
4. **Choose Shipping**: Select your preferred shipping method
5. **Enter Information**: Fill in contact, shipping, and payment details
6. **Review Order**: Verify all information before final submission
7. **Complete Purchase**: Confirm your order

## Technologies Used

- **React 18** - UI framework
- **Vite 5** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **PostCSS** - CSS transformation tool

## Checkout Steps

### Step 1: Product Selection
Browse and add products to your shopping cart with customizable quantities.

### Step 2: Cart Review
View your cart items, adjust quantities, select shipping method, and see real-time total calculations.

### Step 3: Checkout
Enter your contact information, shipping address, and payment details with form validation.

### Step 4: Review
Review your order summary including items, shipping, taxes, and total amount before purchasing.

### Step 5: Confirmation
Receive order confirmation with order number and total amount.

## Components

### Header
Displays the store logo and a visual progress indicator showing which checkout step the user is on.

### ProductCard
Shows individual products with images, ratings, prices, and "Add to Cart" functionality.

### CartItem
Displays items in the shopping cart with quantity controls and remove option.

### OrderSummary
Shows itemized order breakdown with subtotal, shipping, taxes, and final total.

### CheckoutForm
Comprehensive form for collecting contact information, shipping address, and payment details with validation.

## Styling

This project uses Tailwind CSS for styling. The configuration includes:
- Custom color scheme with indigo primary color
- Responsive breakpoints for mobile, tablet, and desktop
- Smooth transitions and hover effects
- Professional form styling with error states

## Future Enhancements

- Payment gateway integration (Stripe, PayPal)
- User account and order history
- Product reviews and ratings system
- Inventory management
- Multiple payment methods
- Promo code functionality
- Guest checkout option
- Order tracking

## License

This project is for educational purposes.
