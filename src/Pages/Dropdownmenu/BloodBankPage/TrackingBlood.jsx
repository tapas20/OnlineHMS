import React from "react";
import { FaMapMarkerAlt, FaCheckCircle, FaClock, FaTimesCircle } from "react-icons/fa";

const BloodDonationTracking = () => {
  // Sample donation data
  const donation = {
    donationId: "BDT123456",
    date: "2025-03-20",
    bloodType: "O+",
    recipient: "John Doe",
    transfusionDate: "2025-03-21",
    transfusionTime: "10:30 AM",
    hospital: "City General Hospital",
    status: "Successful",
  };

  const statusColors = {
    Successful: "bg-green-500",
    Pending: "bg-yellow-500",
    Cancelled: "bg-red-500",
  };

  return (
    <div className="min-h-screen bg-red-400 flex flex-col items-center p-6">
      {/* Header Section */}
      <header className="bg-red-600 text-white p-4 w-full max-w-5xl flex flex-wrap justify-between items-center shadow-lg rounded-lg">
        <h1 className="text-xl md:text-3xl font-extrabold tracking-wide">🩸 Blood Donation</h1>
        <nav>
          <ul className="flex flex-wrap space-x-3 md:space-x-6 text-sm md:text-lg font-medium">
            <li><a href="#" className="hover:text-gray-200 transition">Home</a></li>
            <li><a href="#" className="hover:text-gray-200 transition">My Donations</a></li>
            <li><a href="#" className="hover:text-gray-200 transition">Profile</a></li>
          </ul>
        </nav>
      </header>

      {/* Tracking Timeline */}
      <main className="max-w-4xl w-full bg-white shadow-xl rounded-lg p-6 sm:p-8 mt-8 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-red-600 text-center">Tracking Your Blood Donation</h2>

        <div className="relative border-l-4 border-red-500 pl-6 space-y-6">
          {/* Donation Process */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Donation Collected</h3>
              <p className="text-gray-600">Donation ID: {donation.donationId} | {donation.date} | Blood Type: {donation.bloodType}</p>
            </div>
          </div>

          {/* Hospital Processing */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-white">
              <FaClock />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Processing at Hospital</h3>
              <p className="text-gray-600">Recipient: {donation.recipient || "N/A"} | Transfusion Date: {donation.transfusionDate} | Time: {donation.transfusionTime} | {donation.hospital}</p>
            </div>
          </div>

          {/* Transfusion Completed */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-4">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${statusColors[donation.status]} text-white`}>
              {donation.status === "Successful" ? <FaCheckCircle /> : donation.status === "Pending" ? <FaClock /> : <FaTimesCircle />}
            </div>
            <div>
              <h3 className="text-lg font-semibold">Transfusion {donation.status}</h3>
              <p className="text-gray-600">{donation.transfusionDate} at {donation.transfusionTime}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BloodDonationTracking;
