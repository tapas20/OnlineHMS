import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function ConfirmationPage() {
  const { state } = useLocation(); // receives form data

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
      <div className="text-center bg-white p-10 rounded-xl shadow-xl max-w-xl w-full">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Booking Confirmed!
        </h1>
        <p className="mb-6 text-gray-700">
          Thank you, <span className="font-semibold">{state?.name}</span>.
          You’ll receive a confirmation message shortly.
        </p>
        <div className="text-left mb-6 text-gray-700 space-y-2">
          <p>
            <strong>Gender:</strong> {state?.gender}
          </p>
          <p>
            <strong>Age:</strong> {state?.age}
          </p>
          <p>
            <strong>Service:</strong> {state?.service}
          </p>
          <p>
            <strong>Address:</strong> {state?.address}
          </p>
          <p>
            <strong>Mobile:</strong> {state?.phone}
          </p>
          <p>
            <strong>Estimated Time:</strong> {state?.date} at {state?.time}
          </p>
          {state?.notes && (
            <p>
              <strong>Notes:</strong> {state?.notes}
            </p>
          )}
        </div>
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
