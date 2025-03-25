import React from "react";
import { FaCheckCircle, FaClock } from "react-icons/fa";

const DeliverySuccess = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-blue-50 py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center animate-fade-in">
        <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Delivery Successful!</h1>
        <p className="text-lg text-gray-600 mb-6">
          Your medicines will arrive in <span className="font-semibold">20 minutes</span>.
        </p>
        <div className="flex items-center justify-center space-x-2">
          <FaClock className="text-2xl text-blue-500" />
          <p className="text-gray-600">Track your delivery in real-time.</p>
        </div>
      </div>
    </div>
  );
};

export default DeliverySuccess;