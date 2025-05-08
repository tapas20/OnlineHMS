import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaHeartbeat,
  FaUserAlt,
  FaBell,
  FaHistory,
  FaTint,
} from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { NavLink } from "react-router-dom";
import DonationScheduler from "./Donate";
import BloodRequestMap from "./Request";
import DonationHistory from "./History";
import BloodAlerts from "./Alerts";

const BloodDonationLandingPage = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [activeTab, setActiveTab] = useState("donate");

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  const stats = [
    { value: "10K+", label: "Lives Saved" },
    { value: "5K+", label: "Active Donors" },
    { value: "100+", label: "Clinics" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Header */}
      <header className="bg-red-50 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* <div className="flex items-center space-x-2">
            <FaHeartbeat className="text-red-600 text-3xl" />
            <div className="text-red-600 font-bold text-2xl">LifeFlow</div>
          </div> */}

          <nav className="hidden md:flex space-x-8">
            {/* <a href="#" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Home
            </a> */}
            <NavLink
              to="/forecastdashboard"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              AI Predictions
            </NavLink>
            <NavLink
              to="/blockchain"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Blockchain Records
            </NavLink>
            <a
              href="#"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-4 text-red-600 text-xl">
              <a href="#" className="hover:text-red-800 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-red-800 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-red-800 transition-colors">
                <FaInstagram />
              </a>
            </div>

            <div className="relative">
              <div
                onClick={handleClick}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center font-bold text-white cursor-pointer shadow-md hover:shadow-lg transition-all"
              >
                <FaUserAlt />
              </div>

              {showDetails && (
                <div className="absolute right-0 mt-2 bg-white p-6 rounded-xl shadow-xl w-80 border border-red-100">
                  <h2 className="text-2xl font-bold mb-4 text-red-700">
                    Donor Profile
                  </h2>
                  <div className="space-y-3">
                    <p>
                      <strong className="text-gray-700">Name:</strong> John Doe
                    </p>
                    <p>
                      <strong className="text-gray-700">Blood Type:</strong>{" "}
                      <span className="text-red-600 font-semibold">A+</span>
                    </p>
                    <p>
                      <strong className="text-gray-700">Location:</strong> New
                      York, USA
                    </p>
                    <p>
                      <strong className="text-gray-700">Last Donation:</strong>{" "}
                      March 15, 2025
                    </p>
                    <p>
                      <strong className="text-gray-700">Points Earned:</strong>{" "}
                      1,250
                    </p>
                    <p>
                      <strong className="text-gray-700">Status:</strong>{" "}
                      <span className="text-green-600 font-semibold">
                        Eligible to donate
                      </span>
                    </p>
                  </div>
                  <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors">
                    View Full Profile
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Give <span className="text-red-600">Blood</span>,<br />
              Save <span className="text-red-600">Lives</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Join our community of heroes who make a difference every day. Your
              single donation can save up to 3 lives.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all">
                Become a Donor
              </button>
              <button className="bg-white hover:bg-gray-100 text-red-600 border border-red-600 font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all">
                Request Blood
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-md text-center"
                >
                  <div className="text-2xl font-bold text-red-600">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative">
              <img
                src="https://www.sriramakrishnahospital.com/wp-content/uploads/2021/06/Blood-Donation-1.jpg"
                alt="Blood donation"
                className="rounded-2xl ml-10 shadow-2xl w-full h-[380px] max-h-[500px] object-cover"
              />
              {/* <div className="absolute -bottom-6 left-6 bg-white p-6 rounded-2xl shadow-lg w-64">
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <FaTint className="text-red-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Urgent Need</div>
                    <div className="text-sm text-gray-600">Type O- in your area</div>
                  </div>
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                  Respond Now
                </button>
              </div> */}
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-64 h-64 bg-red-200 rounded-full -mr-32 -mt-32 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full -ml-64 -mb-64 opacity-10"></div>
      </section>

      {/* Quick Actions */}
      <section className="bg-white py-12 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveTab("donate")}
              className={`flex flex-col items-center p-4 rounded-xl w-24 transition-all ${
                activeTab === "donate"
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <FaTint className="text-xl mb-2" />
              <span className="text-xs cursor-pointer font-medium">Donate</span>
            </button>
            <button
              onClick={() => setActiveTab("request")}
              className={`flex flex-col items-center p-4 rounded-xl w-24 transition-all ${
                activeTab === "request"
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <IoMdNotifications className="text-xl mb-2" />
              <span className="text-xs font-medium">Request</span>
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`flex flex-col items-center p-4 rounded-xl w-24 transition-all ${
                activeTab === "history"
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <FaHistory className="text-xl mb-2" />
              <span className="text-xs font-medium">History</span>
            </button>
            <button
              onClick={() => setActiveTab("notifications")}
              className={`flex flex-col items-center p-4 rounded-xl w-24 transition-all ${
                activeTab === "notifications"
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <FaBell className="text-xl mb-2" />
              <span className="text-xs font-medium">Alerts</span>
            </button>
          </div>
        </div>
        {/* Conditional Rendering */}
        <div className="container mx-auto px-6 py-12">
          {activeTab === "donate" && <DonationScheduler />}
          {activeTab === "request" && <BloodRequestMap />}
          {activeTab === "history" && <DonationHistory />}
          {activeTab === "notifications" && <BloodAlerts />}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-red-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Impact Matters
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every donation creates a ripple effect of hope and healing in your
              community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaHeartbeat className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Immediate Impact
              </h3>
              <p className="text-gray-600">
                Your blood donation can be used within 24 hours to save lives in
                emergency situations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Community Support
              </h3>
              <p className="text-gray-600">
                Join a network of donors who are committed to making their
                communities healthier and safer.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Health Benefits
              </h3>
              <p className="text-gray-600">
                Regular donors enjoy health benefits including reduced risk of
                heart disease and free health screenings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your donation appointment today and join our life-saving
            mission.
          </p>
          <button className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all">
            Find a Donation Center
          </button>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FaHeartbeat className="text-red-600 text-2xl" />
                <div className="text-xl font-bold">LifeFlow</div>
              </div>
              <p className="text-gray-400">
                Connecting donors with those in need through technology and compassion.
              </p>
              <div className="flex space-x-4 mt-6 text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <FaInstagram />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Donate Blood</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Request Blood</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Eligibility</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Preparation Tips</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">After Donation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <address className="text-gray-400 not-italic">
                123 LifeSaver Ave<br />
                New York, NY 10001<br />
                <a href="tel:+18005551234" className="hover:text-white transition-colors">(800) 555-1234</a><br />
                <a href="mailto:info@lifeflow.org" className="hover:text-white transition-colors">info@lifeflow.org</a>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} LifeFlow Blood Donation Network. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default BloodDonationLandingPage;
