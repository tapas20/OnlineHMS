import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [account, setAccount] = useState(
    "0x1234567890abcdef1234567890abcdef12345678"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdownMenu = () => setIsDropdownOpen(!isDropdownOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  const AuthButtons = ({ isMobile = false }) => (
    <div
      className={`flex ${
        isMobile
          ? "flex-col w-full gap-3 bg-white/70 p-4 rounded-xl shadow-lg backdrop-blur-md border border-blue-200"
          : "space-x-4 items-center"
      }`}
    >
      {!isAuthenticated ? (
        <>
          <NavLink
            to="/signuppatient"
            className={`${
              isMobile ? "w-full" : ""
            } bg-gradient-to-r from-purple-500 to-purple-700 text-white px-5 py-2 rounded-xl shadow hover:from-purple-600 hover:to-purple-800 transition-all font-semibold text-center`}
            onClick={isMobile ? closeMenu : undefined}
          >
            🚀 Sign Up
          </NavLink>
          <NavLink
            to="/loginpatient"
            className={`${
              isMobile ? "w-full" : ""
            } bg-gradient-to-r from-green-500 to-green-700 text-white px-5 py-2 rounded-xl shadow hover:from-green-600 hover:to-green-800 transition-all font-semibold text-center`}
            onClick={isMobile ? closeMenu : undefined}
          >
            🔐 Login
          </NavLink>
        </>
      ) : (
        <>
          <span className="px-4 py-2 text-gray-700 bg-gray-100 rounded-xl shadow">
            {`${account.substring(0, 6)}...${account.substring(38)}`}
          </span>
          <button 
            onClick={logout}
            className={`${
              isMobile ? "w-full" : ""
            } bg-gradient-to-r from-red-500 to-red-700 text-white px-5 py-2 rounded-xl shadow hover:from-red-600 hover:to-red-800 transition-all font-semibold`}
          >
            🚪 Logout
          </button>
        </>
      )}
    </div>
  );

  return (
    <>
      <nav className="bg-white/70 backdrop-blur-md border-b border-gray-300 shadow-md px-4 py-3 md:px-10 w-full z-50 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="./Images/HealthCare.png"
              className="h-14 md:h-16"
              alt="Health Logo"
            />
            <span className="text-xl md:text-2xl font-bold text-blue-700 tracking-wide">
              HealthCare+
            </span>
          </div>

          {/* Hamburger for mobile */}
          <div
            className="text-3xl md:hidden text-blue-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? "✖" : "☰"}
          </div>

          {/* Navigation Links */}
          <ul
            className={`absolute md:static top-full left-2 right-2 mt-2 md:mt-0 w-[calc(100%-1rem)] md:w-auto
              ${isMenuOpen ? "block" : "hidden"}
              md:flex md:items-center md:space-x-8
              bg-white md:bg-transparent border border-gray-200 md:border-none
              shadow-2xl md:shadow-none rounded-2xl md:rounded-none
              p-4 md:p-0 transition-all duration-500 ease-in-out transform md:opacity-100 md:scale-100`}
          >
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact Us" },
            ].map(({ to, label }) => (
              <li key={label}>
                <NavLink
                  to={to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `group flex items-center gap-2 px-4 py-3 font-semibold rounded-xl ${
                      isActive ? "text-blue-700" : "text-gray-800"
                    } hover:text-blue-700 hover:bg-blue-100/30 hover:backdrop-blur-sm transition-all duration-300`
                  }
                >
                  <span>{label}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ➡️
                  </span>
                </NavLink>
              </li>
            ))}

            {/* Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdownMenu}
                className="flex items-center gap-2 text-gray-800 font-semibold hover:text-blue-700 px-4 py-3"
              >
                Our Services <span className="text-sm">▼</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 z-50 w-80 bg-white border border-gray-200 rounded-xl shadow-xl max-h-96 overflow-y-auto">
                  <ul className="divide-y divide-gray-100">
                    {[
                      {
                        path: "/bookappointment",
                        label: "1-Online Appointment System",
                      },
                      {
                        path: "/onlinemedicinedelivery",
                        label: "2-Online Medicine Delivery",
                      },
                      {
                        path: "/bloodhomescreen",
                        label: "3-Blood Bank & Donate Tracker",
                      },
                      { path: "/ai", label: "4-AI Prescription Generator" },
                      {
                        path: "/onlinehomeservicetreatment",
                        label: "5-Home Service Treatment",
                      },
                      {
                        path: "/electronichealthrecord",
                        label: "6-Electronic Health Record",
                      },
                      { path: "/telemedicine", label: "7-Telemedicine" },
                      {
                        path: "/practicemanagementportalfordoctors",
                        label: "8-Doctor Practice Portal",
                      },
                      {
                        path: "/electronicprescriptionsystem",
                        label: "9-Electronic Prescription",
                      },
                      { path: "/walkthrough", label: "10-Ambulance Service" },
                      {
                        path: "/caretakerhomepage",
                        label: "11-Caretaker Service",
                      },
                      {
                        path: "/diagnosishomepage",
                        label: "12-Diagnosis Service",
                      },
                      {
                        path: "/nursingservicehome",
                        label: "13-Nursing Service",
                      },
                    ].map(({ path, label }) => (
                      <li
                        key={label}
                        className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition-all text-sm font-medium"
                      >
                        <NavLink
                          to={path}
                          onClick={() => {
                            toggleDropdownMenu();
                            closeMenu();
                          }}
                        >
                          {label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            {/* Mobile Auth Buttons */}
            <li className="block md:hidden mt-4">
              <AuthButtons isMobile />
            </li>
          </ul>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex">
            <AuthButtons />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
