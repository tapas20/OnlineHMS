import React from "react";
import Navbar from "./DiagnosisNavbar";

const DiagnosisDashboard = ({ bookings }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-700">Welcome back!</h2>;
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          My Bookings
        </h2>

        {bookings?.length === 0 ? (
          <p className="text-gray-500">No bookings yet.</p>
        ) : (
          <ul className="space-y-4">
            {bookings.map((booking, index) => (
              <li
                key={index}
                className="bg-white shadow p-4 rounded-lg border-l-4 border-blue-500"
              >
                <p>
                  <span className="font-semibold">Test:</span> {booking.test}
                </p>
                <p>
                  <span className="font-semibold">Date:</span> {booking.date}
                </p>
                <p>
                  <span className="font-semibold">Time:</span> {booking.time}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DiagnosisDashboard;


