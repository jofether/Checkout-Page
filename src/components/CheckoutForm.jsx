import React, { useState } from 'react';

export const CheckoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'United States',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.postalCode) newErrors.postalCode = 'Postal code is required';
    if (!formData.cardName) newErrors.cardName = 'Cardholder name is required';
    if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
    if (!formData.cardExpiry) newErrors.cardExpiry = 'Expiry date is required';
    if (!formData.cardCvc) newErrors.cardCvc = 'CVC is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const InputField = ({ label, name, type = 'text', placeholder, error }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition ${
          error ? 'border-red-500 bg-red-50' : 'border-gray-300'
        }`}
      />
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact Information */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 bg-indigo-600 text-white text-xs rounded-full">1</span>
          Contact Information
        </h2>
        <InputField label="Email Address" name="email" type="email" placeholder="john@example.com" error={errors.email} />
      </div>

      {/* Shipping Address */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 bg-indigo-600 text-white text-xs rounded-full">2</span>
          Shipping Address
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <InputField label="First Name" name="firstName" placeholder="John" error={errors.firstName} />
          <InputField label="Last Name" name="lastName" placeholder="Doe" error={errors.lastName} />
        </div>
        <InputField label="Street Address" name="address" placeholder="123 Main Street" error={errors.address} />
        <div className="grid grid-cols-3 gap-4 mt-4">
          <InputField label="City" name="city" placeholder="San Francisco" error={errors.city} />
          <InputField label="State" name="state" placeholder="CA" error={errors.state} />
          <InputField label="Postal Code" name="postalCode" placeholder="94105" error={errors.postalCode} />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
          <select value={formData.country} onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none">
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
            <option>United Kingdom</option>
          </select>
        </div>
      </div>

      {/* Payment Information */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 bg-indigo-600 text-white text-xs rounded-full">3</span>
          Payment Information
        </h2>
        <InputField label="Cardholder Name" name="cardName" placeholder="John Doe" error={errors.cardName} />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <InputField label="Card Number" name="cardNumber" placeholder="4242 4242 4242 4242" error={errors.cardNumber} />
          <div className="grid grid-cols-2 gap-4">
            <InputField label="MM/YY" name="cardExpiry" placeholder="12/25" error={errors.cardExpiry} />
            <InputField label="CVC" name="cardCvc" placeholder="123" error={errors.cardCvc} />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition disabled:opacity-50"
      >
        Continue to Review
      </button>
    </form>
  );
};
