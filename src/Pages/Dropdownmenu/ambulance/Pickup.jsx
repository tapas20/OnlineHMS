import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PickupPage = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/destination");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Pick-up Location</h2>
      <input
        type="text"
        placeholder="Enter pick-up location"
        value={pickupLocation}
        onChange={(e) => setPickupLocation(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button
        className="mt-4 bg-teal-600 text-white px-4 py-2 rounded"
        onClick={handleNext}
        disabled={!pickupLocation}
      >
        Confirm Pick-up
      </button>
    </div>
  );
};

export default PickupPage;
