import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ambulanceTypes = [
  { type: "BLS", price: 2500 },
  { type: "ALS", price: 4500 },
];

const AmbulancePage = () => {
  const [selectedAmbulance, setSelectedAmbulance] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/payment");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Select Ambulance</h2>
      {ambulanceTypes.map((amb, idx) => (
        <div
          key={idx}
          className={`border p-2 rounded mb-2 cursor-pointer ${
            selectedAmbulance === amb ? "bg-teal-100" : ""
          }`}
          onClick={() => setSelectedAmbulance(amb)}
        >
          {amb.type} - ₹{amb.price}
        </div>
      ))}
      <button
        className="mt-4 bg-teal-600 text-white px-4 py-2 rounded"
        onClick={handleNext}
        disabled={!selectedAmbulance}
      >
        Confirm Ambulance
      </button>
    </div>
  );
};

export default AmbulancePage;
