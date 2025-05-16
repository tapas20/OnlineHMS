import React from "react";
import { NavLink } from "react-router-dom";

const SetPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-md p-10 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Congratulations
        </h2>
        <p className="text-gray-600 mb-6">
          Your account password has been successfully reset
        </p>
        <div className="flex justify-center mb-8">
          {/* Placeholder for image */}
          <img
            src="./Images/amico1.png"
            alt="Success Illustration"
            className="w-48 h-48 object-contain"
          />
        </div>
        <NavLink to="/ambulancepage">
          <button
            type="button"
            className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
          >
            Let’s Start
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default SetPassword;
