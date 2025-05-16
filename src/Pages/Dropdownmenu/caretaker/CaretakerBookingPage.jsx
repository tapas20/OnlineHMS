import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBooking = (e) => {
    e.preventDefault();
    navigate("/caretakerconfirmation");
  };

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-xl bg-indigo-50 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">
          Booking Caretaker #{id}
        </h2>
        <form onSubmit={handleBooking} className="space-y-4">
          <input
            type="text"
            placeholder="Your Full Name"
            required
            className="w-full p-2 rounded-lg border"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-2 rounded-lg border"
          />
          <input
            type="date"
            required
            className="w-full p-2 rounded-lg border"
          />
          <input
            type="time"
            required
            className="w-full p-2 rounded-lg border"
          />
          <textarea
            placeholder="Additional notes"
            className="w-full p-2 rounded-lg border"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
