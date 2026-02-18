import React from 'react';

export function CartItem({ item, onRemove }) {
  return (
    <div className="flex gap-4 p-2 group relative">
      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>
      
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <h4 className="font-medium text-gray-800 truncate">{item.name}</h4>
        <p className="text-blue-600 font-semibold text-sm">${item.price}</p>
      </div>

      <button 
        onClick={() => onRemove(item.cartId)}
        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
      >
        🗑️
      </button>
    </div>
  );
}