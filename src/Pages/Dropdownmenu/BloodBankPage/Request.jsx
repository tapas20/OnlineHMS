import { useState } from "react";
import { FaMapMarkerAlt, FaFilter, FaMap, FaMapPin } from "react-icons/fa";

const BloodRequestMap = () => {
  const [activeRequest, setActiveRequest] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  // Input states
  const [patientName, setPatientName] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [age, setAge] = useState("");
  const [disease, setDisease] = useState("");
  const [hospitalName, setHospitalName] = useState("");

  const requests = [
    {
      id: 1,
      bloodType: "O+",
      hospital: "City General",
      urgency: "urgent",
      distance: "0.7mi",
      timeLeft: "2h 15m",
    },
    {
      id: 2,
      bloodType: "A-",
      hospital: "Childrens Hospital",
      urgency: "critical",
      distance: "1.2mi",
      timeLeft: "1h 30m",
    },
    {
      id: 3,
      bloodType: "B+",
      hospital: "Regional Medical",
      urgency: "moderate",
      distance: "2.5mi",
      timeLeft: "5h 45m",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-4 border-b">
        <h3 className="text-xl font-bold text-red-600 mb-4">Request Blood</h3>

        {/* Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name of the Patient
            </label>
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="Enter patient name"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Blood Group Type <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Age
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter age"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Disease Name
            </label>
            <input
              type="text"
              value={disease}
              onChange={(e) => setDisease(e.target.value)}
              placeholder="Enter disease"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hospital Name
            </label>
            <input
              type="text"
              value={hospitalName}
              onChange={(e) => setHospitalName(e.target.value)}
              placeholder="Enter hospital name"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Existing UI (Map, Filters, Requests) */}
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="text-xl font-bold text-red-600 flex items-center">
          <FaMapMarkerAlt className="mr-2" /> Nearby Requests
        </h3>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full flex items-center"
        >
          <FaFilter className="mr-1" /> Filter
        </button>
      </div>

      {showFilters && (
        <div className="p-4 border-b bg-gray-50 flex flex-wrap gap-2">
          {["O+", "A+", "B+", "AB+", "O-"].map((group) => (
            <button
              key={group}
              className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm"
            >
              {group}
            </button>
          ))}
        </div>
      )}

      <div className="h-64 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          <div className="text-center">
            <FaMap className="text-4xl mx-auto mb-2" />
            <p>Interactive Map Display</p>
          </div>
        </div>

        {requests.map((req) => (
          <div
            key={req.id}
            onClick={() => setActiveRequest(req.id)}
            className={`absolute cursor-pointer ${
              req.urgency === "critical"
                ? "text-red-600"
                : req.urgency === "urgent"
                ? "text-orange-500"
                : "text-yellow-500"
            }`}
            style={{
              left: `${20 + req.id * 25}%`,
              top: `${30 + req.id * 10}%`,
            }}
          >
            <FaMapPin className="text-3xl" />
          </div>
        ))}
      </div>

      <div className="p-4">
        <h4 className="font-medium mb-2">Available Requests</h4>
        <div className="space-y-3">
          {requests.map((req) => (
            <div
              key={req.id}
              onClick={() => setActiveRequest(req.id)}
              className={`p-3 border rounded-lg cursor-pointer transition-all ${
                activeRequest === req.id
                  ? "border-red-500 bg-red-50"
                  : "border-gray-200 hover:border-red-300"
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-bold text-red-600">
                    {req.bloodType}
                  </span>
                  <span className="text-gray-600 ml-2">at {req.hospital}</span>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    req.urgency === "critical"
                      ? "bg-red-100 text-red-800"
                      : req.urgency === "urgent"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {req.urgency}
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>{req.distance} away</span>
                <span>Expires in {req.timeLeft}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BloodRequestMap;
