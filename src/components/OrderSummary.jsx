import React from 'react';

export const OrderSummary = ({ items, subtotal, shipping, tax, total }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h2>
      
      <div className="space-y-4 mb-6 border-b border-gray-200 pb-6">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white border border-gray-200 rounded flex items-center justify-center text-xs text-gray-400">
                Img
              </div>
              <div>
                <p className="font-medium text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
              </div>
            </div>
            <p className="font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>
      
      <div className="space-y-3 text-sm text-gray-600 mb-6">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="font-medium text-gray-900">${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="pt-6 border-t border-gray-200 flex justify-between items-center">
        <span className="text-lg font-bold text-gray-900">Total</span>
        <span className="text-3xl font-bold text-indigo-600">${total.toFixed(2)}</span>
      </div>
      
      <div className="mt-6 p-3 bg-green-50 border border-green-200 rounded-lg">
        <p className="text-sm text-green-800 flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Secure checkout with SSL encryption
        </p>
      </div>
    </div>
  );
};
