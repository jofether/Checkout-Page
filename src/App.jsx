import React, { useState } from 'react';
import { Header, ProductCard, CartItem, OrderSummary, CheckoutForm } from './components';
import { PRODUCTS, SHIPPING_OPTIONS, TAX_RATE } from './data';

function App() {
  const [currentStep, setCurrentStep] = useState('products'); // products, cart, checkout, review, success
  const [cartItems, setCartItems] = useState([]);
  const [shippingOption, setShippingOption] = useState(SHIPPING_OPTIONS[0]);
  const [formData, setFormData] = useState(null);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity: product.quantity || 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity === 0) {
      removeFromCart(id);
    } else {
      setCartItems(prev =>
        prev.map(item => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const calculateTotals = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = shippingOption.price;
    const tax = subtotal * TAX_RATE;
    const total = subtotal + shipping + tax;
    return { subtotal, shipping, tax, total };
  };

  const { subtotal, shipping, tax, total } = calculateTotals();

  const renderContent = () => {
    switch (currentStep) {
      case 'products':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Shop Our Collections</h2>
              <p className="text-gray-600">Browse our selection of premium products</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={() => {
                    addToCart(product);
                    setCurrentStep('cart');
                  }}
                />
              ))}
            </div>
          </div>
        );

      case 'cart':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Shopping Cart</h2>
              <p className="text-gray-600">{cartItems.length} items in your cart</p>
            </div>
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <button
                  onClick={() => setCurrentStep('products')}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4 mb-6">
                {cartItems.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>
            )}
            {cartItems.length > 0 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Shipping Method</h3>
                  <div className="space-y-2">
                    {SHIPPING_OPTIONS.map(option => (
                      <label key={option.id} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="shipping"
                          checked={shippingOption.id === option.id}
                          onChange={() => setShippingOption(option)}
                          className="mr-3"
                        />
                        <span className="flex-1">
                          <p className="font-medium text-gray-900">{option.name}</p>
                        </span>
                        <span className="font-medium text-gray-900">${option.price.toFixed(2)}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setCurrentStep('products')}
                    className="border border-gray-300 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-50 font-medium"
                  >
                    Continue Shopping
                  </button>
                  <button
                    onClick={() => setCurrentStep('checkout')}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 font-medium"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        );

      case 'checkout':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Checkout</h2>
            <CheckoutForm
              onSubmit={(data) => {
                setFormData(data);
                setCurrentStep('review');
              }}
            />
          </div>
        );

      case 'review':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Review Your Order</h2>
              <p className="text-gray-600">Please verify your information before completing purchase</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Shipping Address</h3>
                  <address className="text-sm text-gray-600 not-italic space-y-1">
                    <p>{formData?.firstName} {formData?.lastName}</p>
                    <p>{formData?.address}</p>
                    <p>{formData?.city}, {formData?.state} {formData?.postalCode}</p>
                    <p>{formData?.country}</p>
                  </address>
                  <button
                    onClick={() => setCurrentStep('checkout')}
                    className="text-indigo-600 text-sm font-medium mt-3 hover:underline"
                  >
                    Edit Address
                  </button>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Payment Method</h3>
                  <p className="text-sm text-gray-600 mb-2">•••• •••• •••• {formData?.cardNumber?.slice(-4)}</p>
                  <p className="text-sm text-gray-600 mb-3">Expires: {formData?.cardExpiry}</p>
                  <button
                    onClick={() => setCurrentStep('checkout')}
                    className="text-indigo-600 text-sm font-medium hover:underline"
                  >
                    Edit Payment
                  </button>
                </div>

                <button
                  onClick={() => setCurrentStep('success')}
                  className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition"
                >
                  Complete Purchase
                </button>
              </div>

              <div>
                <OrderSummary items={cartItems} subtotal={subtotal} shipping={shipping} tax={tax} total={total} />
              </div>
            </div>
          </div>
        );

      case 'success':
        return (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
            <p className="text-gray-600 mb-6">Your order has been successfully placed.</p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8 text-left max-w-md mx-auto">
              <p className="text-sm text-gray-600 mb-2">Order Number</p>
              <p className="text-2xl font-bold text-gray-900 mb-6">#SH-2024-001</p>
              <p className="text-sm text-gray-600 mb-1">Total Amount</p>
              <p className="text-3xl font-bold text-indigo-600">${total.toFixed(2)}</p>
            </div>
            <button
              onClick={() => {
                setCurrentStep('products');
                setCartItems([]);
                setFormData(null);
              }}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 font-medium"
            >
              Continue Shopping
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  const stepMap = {
    'products': 0,
    'cart': 0,
    'checkout': 1,
    'review': 2,
    'success': 3
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header currentStep={stepMap[currentStep]} />
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {renderContent()}
          </div>
          
          {(currentStep === 'cart' || currentStep === 'checkout' || currentStep === 'review') && cartItems.length > 0 && (
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <OrderSummary items={cartItems} subtotal={subtotal} shipping={shipping} tax={tax} total={total} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;