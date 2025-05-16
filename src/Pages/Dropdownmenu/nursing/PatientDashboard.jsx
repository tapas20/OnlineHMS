import React from "react";
import { NavLink } from "react-router-dom";

const PatientDashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Patient Dashboard</h2>
      <p>Welcome back! Here are your recent bookings:</p>
      <ul className="mt-4 list-disc list-inside">
        <li>Booking #123 - Nurse A - Completed</li>
        <li>Booking #124 - Nurse B - Pending</li>
      </ul>
      <NavLink to="/patient/booking-status">
        <h1>Booking Status</h1>
      </NavLink>
      <NavLink to="/patient/search-nurses">
        <h1>search nurse</h1>
      </NavLink>
    </div>
  );
};

export default PatientDashboard;