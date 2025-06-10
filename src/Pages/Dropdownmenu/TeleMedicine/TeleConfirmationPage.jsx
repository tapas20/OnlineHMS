import React from "react";
import { useLocation } from "react-router-dom";

const ConfirmationPage = () => {
  const location = useLocation();
  const { doctorName, appointmentDate, appointmentTime, patientName } =
    location.state || {};

  if (!doctorName) {
    return (
      <div className="p-6 text-red-500 font-semibold text-center">
        No booking information found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
      <div className="text-center bg-white p-10 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Appointment Confirmed!
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Doctor:</strong> {doctorName}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Patient:</strong> {patientName}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Date:</strong> {appointmentDate}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Time:</strong> {appointmentTime}
        </p>
      </div>
    </div>
  );
};

export default ConfirmationPage;
