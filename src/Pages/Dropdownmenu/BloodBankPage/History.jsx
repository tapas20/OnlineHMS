import { useState } from "react";
import { FaHistory, FaChevronDown, FaShare, FaTrophy } from "react-icons/fa";

const DonationHistory = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedCard, setExpandedCard] = useState(null);

  const donations = [
    {
      id: 1,
      transactionId: "TXN1001",
      date: "2023-05-15T10:30:00",
      location: "City Blood Center",
      hospital: "City Hospital",
      points: 50,
      bloodType: "A+",
      age: 28,
      status: "completed",
      serviceType: "donate",
    },
    {
      id: 2,
      transactionId: "TXN1002",
      date: "2023-03-22T14:15:00",
      location: "Mobile Blood Drive",
      hospital: "Health Care Van",
      points: 50,
      bloodType: "A+",
      age: 30,
      status: "completed",
      serviceType: "donate",
    },
    {
      id: 3,
      transactionId: "TXN1003",
      date: "2023-01-10T09:00:00",
      location: "Central Hospital",
      hospital: "Central Hospital",
      points: 50,
      bloodType: "A+",
      age: 35,
      status: "completed",
      serviceType: "request",
    },
  ];

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="text-xl font-bold text-red-600 flex items-center">
          <FaHistory className="mr-2" /> Your Donations
        </h3>
        <div className="flex bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3 py-1 text-sm rounded-full ${
              activeTab === "all" ? "bg-red-600 text-white" : ""
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-3 py-1 text-sm rounded-full ${
              activeTab === "upcoming" ? "bg-red-600 text-white" : ""
            }`}
          >
            Upcoming
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="space-y-6">
            {donations.map((donation) => (
              <div key={donation.id} className="relative pl-10">
                {/* Timeline dot */}
                <div className="absolute left-0 w-4 h-4 rounded-full bg-red-600 border-4 border-white shadow-md"></div>

                <div
                  onClick={() => toggleExpand(donation.id)}
                  className={`bg-white border rounded-lg p-4 shadow-sm cursor-pointer transition-all ${
                    expandedCard === donation.id
                      ? "border-red-400 shadow-md"
                      : "border-gray-200 hover:border-red-300"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold">{donation.location}</h4>
                      <p className="text-gray-600 text-sm">
                        {new Date(donation.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mr-2">
                        +{donation.points} pts
                      </span>
                      <FaChevronDown
                        className={`text-gray-400 transition-transform ${
                          expandedCard === donation.id ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {expandedCard === donation.id && (
                    <div className="mt-3 pt-3 border-t border-gray-100 animate-fade-in">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Transaction ID</p>
                          <p className="font-medium">
                            {donation.transactionId}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">Hospital</p>
                          <p className="font-medium">{donation.hospital}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Blood Group</p>
                          <p className="font-medium">{donation.bloodType}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Age</p>
                          <p className="font-medium">{donation.age}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Status</p>
                          <p className="font-medium capitalize">
                            {donation.status}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">Service Type</p>
                          <p className="font-medium capitalize">
                            {donation.serviceType}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">Date & Time</p>
                          <p className="font-medium">
                            {new Date(donation.date).toLocaleString("en-US", {
                              dateStyle: "medium",
                              timeStyle: "short",
                            })}
                          </p>
                        </div>
                      </div>
                      <button className="mt-3 text-sm text-red-600 hover:text-red-800 flex items-center">
                        <FaShare className="mr-1" /> Share Achievement
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 bg-blue-50 p-4 rounded-lg flex items-center">
          <div className="bg-blue-100 p-3 rounded-full mr-3">
            <FaTrophy className="text-blue-600" />
          </div>
          <div>
            <h4 className="font-bold text-blue-800">You've saved 9 lives!</h4>
            <p className="text-blue-600 text-sm">
              Keep donating to reach your next milestone
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationHistory;
