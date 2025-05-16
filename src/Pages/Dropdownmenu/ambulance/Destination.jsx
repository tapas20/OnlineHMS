import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DestinationPage = () => {
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/ambulancetype");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Destination</h2>
      <input
        type="text"
        placeholder="Enter destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button
        className="mt-4 bg-teal-600 text-white px-4 py-2 rounded"
        onClick={handleNext}
        disabled={!destination}
      >
        Confirm Destination
      </button>
    </div>
  );
};

export default DestinationPage;
