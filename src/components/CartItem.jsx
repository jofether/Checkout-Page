import React from 'react';

export const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
      <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <span className="text-xs text-gray-400">Image</span>
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.category}</p>
        <p className="text-sm text-gray-600 mt-1">${item.price} each</p>
      </div>
      
      <div className="flex items-center gap-2">
        <button
          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
          className="p-1 border border-gray-300 rounded hover:bg-gray-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
        <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="p-1 border border-gray-300 rounded hover:bg-gray-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
      
      <div className="text-right">
        <p className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
        <button
          onClick={() => onRemove(item.id)}
          className="text-xs text-red-600 hover:text-red-700 font-medium mt-1"
        >
          Remove
        </button>
      </div>
    </div>
  );
};
