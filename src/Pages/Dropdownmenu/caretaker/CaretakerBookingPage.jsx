import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    service: "",
    address: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBooking = (e) => {
    e.preventDefault();
    navigate("/caretakerconfirmation", { state: formData });
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
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg border"
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg border text-gray-500"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg border"
          />
          <input
            type="text"
            name="service"
            placeholder="Type of Treatment or Service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg border"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg border"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg border"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg border"
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg border"
          />
          <textarea
            name="notes"
            placeholder="Additional notes"
            value={formData.notes}
            onChange={handleChange}
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
