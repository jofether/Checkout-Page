import React from 'react';
import { CartItem } from './CartItem';
import { CreditCard } from 'lucide-react';

export function OrderSummary({ cart, total, onRemove }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="p-6 bg-gray-50 border-b border-gray-200">
        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          Order Summary
        </h2>
      </div>

      <div className="p-6 max-h-[400px] overflow-y-auto custom-scrollbar">
        {cart.length === 0 ? (
          <p className="text-gray-400 text-center py-8">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <CartItem key={item.cartId} item={item} onRemove={onRemove} />
            ))}
          </div>
        )}
      </div>

      <div className="p-6 bg-gray-50 border-t border-gray-200 space-y-4">
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <span className="text-base font-medium text-gray-600">Total</span>
          <span className="text-2xl font-bold text-blue-600">${total.toFixed(2)}</span>
        </div>

        <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all flex justify-center items-center gap-2">
          <CreditCard size={20} />
          Pay Now
        </button>
      </div>
    </div>
  );
}