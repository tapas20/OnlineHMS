import React from 'react';
import { NavLink } from 'react-router-dom';

const EmergencyAccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 sm:p-10 w-full max-w-md sm:max-w-3xl flex flex-col items-center">
        {/* Illustration */}
        <div className="w-40 sm:w-1/2 mb-6 sm:mb-8">
          <img 
            src="./Images/bro.png" 
            alt="Illustration" 
            className="w-full"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Hello!</h1>

        {/* Description */}
        <p className="text-gray-600 text-center mb-8 max-w-sm sm:max-w-md text-sm sm:text-base">
          Choose an option to access your emergency services: Log in for returning users or Sign up for new users.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:justify-center">
          <NavLink to="/loginscreen">
          <button className="w-full sm:w-auto px-8 py-3 border-2 border-teal-600 text-teal-600 rounded-lg hover:text-white hover:bg-teal-700 transition">
            Log In
          </button>
          </NavLink>
          <NavLink to="/signupscreen">
          <button className="w-full sm:w-auto px-8 py-3 border-2 border-teal-600 text-teal-600 rounded-lg hover:text-white hover:bg-teal-700 transition">
            Sign Up
          </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default EmergencyAccess;
