import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { CheckoutForm } from './components/CheckoutForm';
import { OrderSummary } from './components/OrderSummary';
import { PRODUCTS, SHIPPING_OPTIONS, TAX_RATE } from './data';

function App() {
  const [cart, setCart] = useState([]);
  
  // Simple cart logic
  const addToCart = (product) => {
    setCart([...cart, { ...product, cartId: Date.now() }]);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    // [BUG - TYPO] 'min-h-scren' is misspelled (missing 'e'), causing height issues
    // [FIX] <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
    <div className="min-h-scren bg-gray-50 font-sans text-gray-900">
      
      <Header cartCount={cart.length} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        {/* [BUG - LAYOUT] 'lg:flex-col' stacks elements vertically on desktop, breaking the side-by-side design */}
        {/* [FIX] <div className="flex flex-col lg:flex-row gap-8 items-start"> */}
        <div className="flex flex-col lg:flex-col gap-8 items-start">
          
          {/* Left Column: Form & Products */}
          <div className="flex-1 w-full space-y-8">
            <CheckoutForm />
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Recommended Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PRODUCTS.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAdd={() => addToCart(product)} 
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-96 sticky top-24">
            <OrderSummary 
              cart={cart} 
              total={cartTotal} 
              onRemove={removeFromCart} 
            />
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;