import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* HEADER */}
      <div className="border-b border-gray-200 py-6 px-4 md:px-12 flex items-center justify-between">
        <div className="font-bold text-2xl text-indigo-600">ShopPay</div>
        <div className="text-sm text-gray-500">Secure Checkout</div>
      </div>

      {/* SPLIT LAYOUT: Form (Left) vs Summary (Right) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-6 md:p-12">
        
        {/* LEFT: INFORMATION FORM */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
            <input type="email" placeholder="Email address" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Shipping Address</h2>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="col-span-1 p-3 border border-gray-300 rounded-md" />
              <input type="text" placeholder="Last name" className="col-span-1 p-3 border border-gray-300 rounded-md" />
              <input type="text" placeholder="Address" className="col-span-2 p-3 border border-gray-300 rounded-md" />
              <input type="text" placeholder="City" className="col-span-1 p-3 border border-gray-300 rounded-md" />
              <input type="text" placeholder="Postal Code" className="col-span-1 p-3 border border-gray-300 rounded-md" />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment</h2>
            <div className="border border-gray-300 rounded-md p-4 bg-gray-50 text-center text-gray-500">
              [Credit Card Element Placeholder]
            </div>
          </div>
          
          <button className="w-full bg-indigo-600 text-white py-4 rounded-lg font-bold hover:bg-indigo-700 transition">
            Pay Now
          </button>
        </div>

        {/* RIGHT: ORDER SUMMARY (Sticky on Desktop) */}
        {/* FUTURE BUG: Remove 'sticky' to make summary scroll away */}
        <div className="bg-gray-50 p-8 rounded-xl h-fit lg:sticky lg:top-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h2>
          
          <div className="space-y-4 mb-6 border-b border-gray-200 pb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-white border border-gray-200 rounded-md flex items-center justify-center relative">
                  <span className="text-xs text-gray-400">Img</span>
                  <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">1</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-900">Premium Sneakers</p>
                  <p className="text-sm text-gray-500">Size: 10 / Black</p>
                </div>
              </div>
              <p className="font-medium text-gray-900">$120.00</p>
            </div>
          </div>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex justify-between"><span>Subtotal</span><span>$120.00</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>$15.00</span></div>
            <div className="flex justify-between"><span>Taxes</span><span>$10.80</span></div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900">Total</span>
            <span className="text-2xl font-bold text-gray-900">$145.80</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;