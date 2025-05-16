import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/confirmation");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">Book Nurse #{id}</h2>
      <button onClick={handleBooking} className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Confirm Booking</button>
    </div>
  );
};

export default BookingPage;