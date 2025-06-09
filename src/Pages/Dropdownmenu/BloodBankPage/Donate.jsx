import { useState } from "react";
import { FaTint, FaCheckCircle } from "react-icons/fa";


const DonationScheduler = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCenter, setSelectedCenter] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  const centers = [
    { id: "1", name: "City Blood Center", slots: 5 },
    { id: "2", name: "Central Hospital", slots: 2 },
    { id: "3", name: "Community Clinic", slots: 8 },
  ];

  const handleSchedule = () => {
    setConfirmation(true);
    setTimeout(() => setConfirmation(false), 3000);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto">
      <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center">
        <FaTint className="mr-2" /> Schedule Donation
      </h3>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Name of the Donor</label>
        <input
          type="text"
          placeholder="Enter donor's name"
          onChange={(e) => setDonorName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Blood Group Type</label>
        <select
          onChange={(e) => setBloodGroup(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Age</label>
        <input
          type="number"
          min="18"
          max="65"
          placeholder="Enter age"
          onChange={(e) => setAge(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Location</label>
        <input
          type="text"
          placeholder="Enter location"
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Select Date</label>
        <input
          type="date"
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Nearest Centers</label>
        <div className="space-y-2">
          {centers.map((center) => (
            <div
              key={center.id}
              onClick={() => setSelectedCenter(center.id)}
              className={`p-3 border rounded-lg cursor-pointer transition-all ${
                selectedCenter === center.id
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300 hover:border-red-300"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{center.name}</span>
                <span
                  className={`text-sm px-2 py-1 rounded-full ${
                    center.slots < 3
                      ? "bg-red-100 text-red-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {center.slots} slots left
                </span>
              </div>
              <div className="text-sm text-gray-500 mt-1">0.5 miles away</div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleSchedule}
        disabled={!selectedDate || !selectedCenter}
        className={`w-full py-3 px-4 rounded-lg font-bold text-white transition-all ${
          !selectedDate || !selectedCenter
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-red-600 hover:bg-red-700 hover:shadow-md"
        }`}
      >
        Confirm Appointment
      </button>

      {confirmation && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg flex items-center animate-fade-in">
          <FaCheckCircle className="mr-2" />
          Appointment scheduled successfully!
        </div>
      )}
    </div>
  );
};

export default DonationScheduler;