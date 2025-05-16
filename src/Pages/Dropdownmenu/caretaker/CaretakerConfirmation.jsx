import React from "react";
import { Link } from "react-router-dom";

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
      <div className="text-center bg-white p-10 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Booking Confirmed!
        </h1>
        <p className="mb-6 text-gray-700">
          Thank you for booking. You’ll receive a confirmation email shortly.
        </p>
        <Link
          to="/"
          className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
