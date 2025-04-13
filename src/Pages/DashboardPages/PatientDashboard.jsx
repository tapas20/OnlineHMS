import Header from "../../Components/Header/Header.jsx";
import React, { useState } from "react";

export default function PatientDashboard() {
  // State management using hooks
  const [searchQuery, setSearchQuery] = useState("");
  const [featureStates, setFeatureStates] = useState({});

  // Medical color palette
  const colors = {
    primary: "bg-blue-600",
    primaryHover: "hover:bg-blue-700",
    secondary: "bg-teal-500",
    secondaryHover: "hover:bg-teal-600",
    text: "text-gray-800",
    shadow: "hover:shadow-xl",
  };

  const features = [
    {
      id: "appointments",
      title: "Appointments",
      icon: "📅",
      desc: "Schedule and manage your appointments",
    },
    {
      id: "records",
      title: "Medical Records",
      icon: "📋",
      desc: "View your health history",
    },
    {
      id: "prescriptions",
      title: "Prescriptions",
      icon: "💊",
      desc: "Manage your medications",
    },
    {
      id: "labs",
      title: "Lab Results",
      icon: "🧪",
      desc: "Check your test results",
    },
    {
      id: "billing",
      title: "Billing",
      icon: "💳",
      desc: "View and pay your bills",
    },
    {
      id: "messages",
      title: "Messages",
      icon: "✉",
      desc: "Contact your healthcare provider",
    },
    {
      id: "profile",
      title: "Profile",
      icon: "👤",
      desc: "Update your personal information",
    },
    {
      id: "healthTips",
      title: "Health Tips",
      icon: "💡",
      desc: "Get personalized health advice",
    },
    {
      id: "insurance",
      title: "Insurance",
      icon: "🛡",
      desc: "Manage insurance details",
    },
    {
      id: "telehealth",
      title: "Telehealth",
      icon: "📹",
      desc: "Book virtual consultations",
    },
  ];

  // Toggle feature state
  const toggleFeature = (id) => {
    setFeatureStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filter features based on search
  const filteredFeatures = features.filter(
    (feature) =>
      feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feature.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with Search */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h1 className={`text-3xl font-bold ${colors.text}`}>
              Patient Dashboard
            </h1>
            <div className="mt-4 sm:mt-0 relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                🔍
              </span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredFeatures.map((feature) => (
              <div
                key={feature.id}
                className={`
                  ${colors.primary} 
                  ${colors.primaryHover} 
                  ${colors.shadow}
                  rounded-lg p-6 
                  text-white 
                  transform transition-all duration-300
                  hover:scale-105 hover:rotate-1
                  cursor-pointer
                  flex flex-col items-center text-center
                  ${featureStates[feature.id] ? "ring-2 ring-teal-400" : ""}
                `}
              >
                <span className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </span>
                <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
                <p className="text-sm opacity-90 mb-4">{feature.desc}</p>

                {/* Toggle Button */}
                <button
                  onClick={() => toggleFeature(feature.id)}
                  className={`
                    px-4 py-2 rounded-full
                    ${featureStates[feature.id] ? colors.secondary : "bg-white"}
                    ${
                      featureStates[feature.id]
                        ? colors.secondaryHover
                        : "hover:bg-gray-100"
                    }
                    text-sm font-medium
                    ${
                      featureStates[feature.id] ? "text-white" : "text-blue-600"
                    }
                    transition-all duration-200
                  `}
                >
                  {featureStates[feature.id] ? "Active" : "Activate"}
                </button>
              </div>
            ))}
          </div>

          {/* Welcome Section */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto transition-all duration-300 hover:shadow-lg">
            <h2 className={`text-2xl font-semibold ${colors.text} mb-4`}>
              Welcome Back, Patient!
            </h2>
            <p className="text-gray-600">
              Manage your healthcare needs efficiently with our comprehensive
              dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
