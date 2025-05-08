import { useState } from "react";
import { FaBell, FaExclamationTriangle, FaHeartbeat, FaCalendarAlt, FaBellSlash } from "react-icons/fa";

const BloodAlerts = () => {
  const [activeTab, setActiveTab] = useState("urgent");
  const [selectedAlert, setSelectedAlert] = useState(null);

  const alerts = [
    {
      id: 1,
      type: "urgent",
      bloodType: "O-",
      location: "City General Hospital",
      distance: "1.2mi",
      time: "Just now",
      matched: true,
    },
    {
      id: 2,
      type: "urgent",
      bloodType: "A+",
      location: "Childrens Medical",
      distance: "2.5mi",
      time: "15 min ago",
      matched: false,
    },
    {
      id: 3,
      type: "update",
      bloodType: null,
      message: "Your blood was used to save a life!",
      time: "2 days ago",
    },
    {
      id: 4,
      type: "reminder",
      bloodType: null,
      message: "You can donate again in 3 days",
      time: "1 week ago",
    },
  ];

  const filteredAlerts = alerts.filter((alert) =>
    activeTab === "all" ? true : alert.type === activeTab
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-4 border-b">
        <h3 className="text-xl font-bold text-red-600 flex items-center">
          <FaBell className="mr-2" /> Blood Alerts
        </h3>
        <div className="flex overflow-x-auto scrollbar-hide mt-3">
          <button
            onClick={() => setActiveTab("urgent")}
            className={`whitespace-nowrap px-4 py-2 mr-2 rounded-full text-sm font-medium ${
              activeTab === "urgent"
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Urgent Needs
          </button>
          <button
            onClick={() => setActiveTab("update")}
            className={`whitespace-nowrap px-4 py-2 mr-2 rounded-full text-sm font-medium ${
              activeTab === "update"
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Your Impact
          </button>
          <button
            onClick={() => setActiveTab("reminder")}
            className={`whitespace-nowrap px-4 py-2 mr-2 rounded-full text-sm font-medium ${
              activeTab === "reminder"
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Reminders
          </button>
          <button
            onClick={() => setActiveTab("all")}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium ${
              activeTab === "all"
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            All Alerts
          </button>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {filteredAlerts.map((alert) => (
          <div
            key={alert.id}
            onClick={() => setSelectedAlert(alert.id)}
            className={`p-4 cursor-pointer transition-colors ${
              selectedAlert === alert.id ? "bg-red-50" : "hover:bg-gray-50"
            }`}
          >
            <div className="flex items-start">
              <div
                className={`p-2 rounded-full mr-3 ${
                  alert.type === "urgent"
                    ? "bg-red-100 text-red-600"
                    : alert.type === "update"
                    ? "bg-green-100 text-green-600"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                {alert.type === "urgent" ? (
                  <FaExclamationTriangle />
                ) : alert.type === "update" ? (
                  <FaHeartbeat />
                ) : (
                  <FaCalendarAlt />
                )}
              </div>

              <div className="flex-1">
                {alert.type === "urgent" ? (
                  <>
                    <div className="flex justify-between">
                      <h4 className="font-bold">
                        <span className="text-red-600">{alert.bloodType}</span>{" "}
                        Needed
                      </h4>
                      {alert.matched && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          You Match
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {alert.location} • {alert.distance}
                    </p>
                  </>
                ) : (
                  <p className="text-gray-800">{alert.message}</p>
                )}
                <p className="text-gray-400 text-xs mt-1">{alert.time}</p>
              </div>
            </div>

            {selectedAlert === alert.id && alert.type === "urgent" && (
              <div className="mt-3 pt-3 border-t border-gray-100 animate-fade-in">
                <div className="flex space-x-2">
                  <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm font-medium">
                    Respond Now
                  </button>
                  <button className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 rounded-lg text-sm font-medium">
                    Share Request
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredAlerts.length === 0 && (
        <div className="p-8 text-center text-gray-500">
          <FaBellSlash className="text-3xl mx-auto mb-3" />
          <p>No {activeTab === "all" ? "" : activeTab} alerts to show</p>
        </div>
      )}
    </div>
  );
};

export default BloodAlerts;
