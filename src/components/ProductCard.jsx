import React from 'react';

export function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      <div className="h-48 overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
          <p className="text-gray-500 text-sm mt-1 line-clamp-2">{product.description}</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          <button
            onClick={onAdd}
            className="flex items-center gap-1 bg-gray-900 text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
          >
            ➕ Add
          </button>
        </div>
      </div>
    </div>
  );
}