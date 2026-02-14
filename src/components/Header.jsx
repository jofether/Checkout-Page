import React from 'react';

export const Header = ({ currentStep }) => {
  const steps = ['Cart', 'Shipping', 'Payment', 'Review'];
  
  return (
    <div className="border-b border-gray-200 sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="py-6 flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">ShopHub</h1>
          </div>
          <div className="text-sm text-gray-500">Order #SH-2024-001</div>
        </div>
        
        {/* Progress Steps */}
        <div className="flex justify-between mb-6">
          {steps.map((step, index) => (
            <div key={step} className="flex flex-col items-center flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                index <= currentStep 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 text-gray-500'
              }`}>
                {index + 1}
              </div>
              <p className={`text-xs mt-2 ${index <= currentStep ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>
                {step}
              </p>
              {index < steps.length - 1 && (
                <div className={`h-0.5 w-full mt-4 ${index < currentStep ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
