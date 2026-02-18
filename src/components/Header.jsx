import React from 'react';


export function Header({ cartCount }) {
  return (
    // [BUG - LAYERS] '-z-50' places the header behind the body content when scrolling
    // [FIX] <header className="sticky top-0 bg-white border-b border-gray-200 z-50 shadow-sm">
    <header className="sticky top-0 bg-white border-b border-gray-200 -z-50 shadow-sm">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg text-xl">
            🛍️
          </div>
          <span className="text-xl font-bold tracking-tight">ShopUI</span>
        </div>


        <nav className="hidden md:flex gap-6">
          {/* [BUG - COLOR] 'text-white' on a white background makes the text invisible */}
          {/* [FIX] <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Home</a> */}
          <a href="#" className="text-white hover:text-blue-600 font-medium">Home</a>
          <a href="#" className="text-white hover:text-blue-600 font-medium">Products</a>
          <a href="#" className="text-white hover:text-blue-600 font-medium">About</a>
        </nav>


        <div className="relative p-2 text-xl">
          🛍️
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
