import React from 'react';
import { NavLink } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white px-4 py-6 sm:px-8 sm:py-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800 mb-2 sm:text-2xl sm:mb-4">Forgot password</h2>
        <p className="text-sm text-gray-600 mb-4 sm:text-base sm:mb-6 leading-relaxed">
          Don’t worry, it happens. Please enter the details associated with your account.
        </p>
        <input
          type="tel"
          inputMode="numeric"
          placeholder="Enter your mobile number"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 mb-4 sm:mb-6 text-sm sm:text-base"
        />
        <NavLink to="/aunthenticationscreen">
        <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition duration-300 text-sm sm:text-base">
          Get OTP
        </button>
        </NavLink>
        
      </div>
    </div>
  );
}

export default ForgotPassword;
