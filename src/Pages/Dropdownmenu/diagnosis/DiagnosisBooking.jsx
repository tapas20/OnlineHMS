import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DiagnosisBooking = ({ onBook }) => {
  const [test, setTest] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  const testOptions = [
    "Blood Test",
    "Urine Test",
    "X-Ray",
    "Sugar Test",
    "ECG",
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    if (!test || !date || !time) return;

    const bookingData = { test, date, time };
    onBook(bookingData); // passed from App.jsx
    navigate("/diagnosisdashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleBooking}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Book a Lab Test
        </h2>

        <label className="block mb-2 font-medium">Select Test</label>
        <select
          value={test}
          onChange={(e) => setTest(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        >
          <option value="">-- Choose a Test --</option>
          {testOptions.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <label className="block mb-2 font-medium">Select Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <label className="block mb-2 font-medium">Select Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full mb-6 p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default DiagnosisBooking;
