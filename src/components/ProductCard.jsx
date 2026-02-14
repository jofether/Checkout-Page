import React from 'react';

export const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = React.useState(1);
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center relative">
        <span className="text-gray-400 text-sm">Product Image</span>
        {product.badge && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {product.badge}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900">{product.name}</h3>
          <div className="flex items-center bg-yellow-100 px-2 py-1 rounded">
            <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm text-yellow-700">4.8</span>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-3">{product.category}</p>
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
            )}
          </div>
          <div className="flex items-center border border-gray-300 rounded-md">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-1 text-gray-500 hover:text-gray-700"
            >
              -
            </button>
            <span className="px-3 py-1 text-sm font-medium">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="p-1 text-gray-500 hover:text-gray-700"
            >
              +
            </button>
          </div>
        </div>
        
        <button
          onClick={() => onAddToCart({ ...product, quantity })}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
