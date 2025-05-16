import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth if needed
    console.log("User logged out");
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-700">Diagnolab</h1>
      <ul className="flex gap-6">
        <li>
          <button
            onClick={() => navigate("/diagnosisbooking")}
            className="text-gray-700 hover:text-blue-600"
          >
            Booking
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/diagnosisprofile")}
            className="text-gray-700 hover:text-blue-600"
          >
            Profile
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/diagnosisreport")}
            className="text-gray-700 hover:text-blue-600"
          >
            Online Report
          </button>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="text-red-600 hover:underline"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
