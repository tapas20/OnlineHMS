import React, { useState } from "react";

const AppointmentForm = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [confirmationAddress, setConfirmationAddress] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [appointmentStatus, setAppointmentStatus] = useState("Scheduled");
  const [isCancelled, setIsCancelled] = useState(false);

  const doctors = [
    { name: "Dr. A. Sharma", address: "0x123...abc" },
    { name: "Dr. B. Verma", address: "0x456...def" },
    { name: "Dr. C. Roy", address: "0x789...ghi" },
  ];

  const handleSchedule = () => {
    if (selectedDoctor && confirmationAddress && appointmentDate) {
      setShowOutput(true);
      setAppointmentStatus("Scheduled");
      setIsCancelled(false);
    } else {
      alert("Please fill all fields.");
    }
  };

  const handleCancel = () => {
    setAppointmentStatus("Cancelled");
    setIsCancelled(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 py-10 px-4 flex items-center justify-center">
      <div className="backdrop-blur-xl bg-white/60 p-8 rounded-3xl shadow-2xl max-w-2xl w-full transition-all duration-500 hover:scale-[1.01]">
        <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-6 tracking-tight">
          ✨ Book Your Appointment
        </h2>

        {/* Doctor Dropdown */}
        <label className="block mb-2 text-gray-700 font-semibold">
          Select Doctor
        </label>
        <select
          className="w-full p-3 border border-gray-300 rounded-xl mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
        >
          <option value="">-- Choose Doctor --</option>
          {doctors.map((doc, index) => (
            <option key={index} value={doc.address}>
              {doc.name} ({doc.address})
            </option>
          ))}
        </select>

        {/* Appointment Date */}
        <label className="block mb-2 text-gray-700 font-semibold">
          Appointment Date
        </label>
        <input
          type="date"
          className="w-full p-3 border border-gray-300 rounded-xl mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
        />

        {/* Confirmation Address */}
        <label className="block mb-2 text-gray-700 font-semibold">
          Confirmation Address
        </label>
        <input
          type="text"
          placeholder="Enter Confirmation Address"
          className="w-full p-3 border border-gray-300 rounded-xl mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={confirmationAddress}
          onChange={(e) => setConfirmationAddress(e.target.value)}
        />

        {/* Schedule Button */}
        <button
          onClick={handleSchedule}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-xl font-semibold hover:from-indigo-500 hover:to-blue-600 transition-all duration-300 shadow-lg"
        >
          Schedule Appointment
        </button>

        {/* Output Section */}
        {showOutput && (
          <div className="mt-10 animate-fade-in-up space-y-6">
            <div className="bg-white/70 backdrop-blur-lg p-4 rounded-2xl shadow">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                📝 Appointment Details
              </h3>
              <p>
                <strong>Doctor Address:</strong> {selectedDoctor}
              </p>
              <p>
                <strong>Appointment Date:</strong> {appointmentDate}
              </p>
              <p>
                <strong>Confirmation Address:</strong> {confirmationAddress}
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-lg p-4 rounded-2xl shadow">
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                📍 Appointment Status
              </h3>
              <p
                className={`text-lg font-bold ${
                  appointmentStatus === "Cancelled"
                    ? "text-red-600"
                    : "text-green-700"
                }`}
              >
                {appointmentStatus}
              </p>
              {!isCancelled && (
                <button
                  onClick={handleCancel}
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow-md transition"
                >
                  Cancel Appointment
                </button>
              )}
            </div>

            <div className="bg-white/70 backdrop-blur-lg p-4 rounded-2xl shadow">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                📚 Appointment History
              </h3>
              <ul className="list-disc ml-6 space-y-1 text-gray-700">
                <li>Dr. A. Sharma – 2024-05-22 – Successful</li>
                <li>Dr. B. Verma – 2024-04-18 – Cancelled</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentForm;
