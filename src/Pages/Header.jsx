import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useWeb3 } from "../../context/Web3Context";

const Header = () => {
  const { account, logout, isAuthenticated } = useWeb3();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdownMenu = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const AuthButtons = ({ isMobile = false }) => (
    <div className={`flex ${isMobile ? "flex-col w-full" : "space-x-4"}`}>
      {!isAuthenticated ? (
        <>
          <NavLink
            to="/signuppatient"
            className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all ${
              isMobile ? "w-full mt-2" : ""
            }`}
            onClick={isMobile ? closeMenu : undefined}
          >
            SignUp
          </NavLink>
          <NavLink
            to="/loginpatient"
            className={`bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all ${
              isMobile ? "w-full mt-2" : ""
            }`}
            onClick={isMobile ? closeMenu : undefined}
          >
            Login
          </NavLink>
        </>
      ) : (
        <>
          <span className="px-4 py-2 text-gray-700">
            {`${account.substring(0, 6)}...${account.substring(38)}`}
          </span>
          <button
            onClick={logout}
            className={`bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all ${
              isMobile ? "w-full mt-2" : ""
            }`}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-100 shadow-lg w-full px-6 py-4 flex justify-between items-center relative z-40 md:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="./Images/HealthCare.png"
            className="h-16 md:h-16 mr-4"
            alt="Health Logo"
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? "✖" : "☰"}
        </div>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-full left-0 w-full bg-white md:bg-transparent md:flex md:space-x-8 p-4 md:p-0 shadow-md md:shadow-none rounded-md md:rounded-none transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block p-3 font-semibold rounded-md ${
                  isActive ? "text-blue-600" : "text-gray-800"
                } hover:text-blue-600 transition-all`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className="block p-3 font-semibold text-gray-800 hover:text-blue-600"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block p-3 font-semibold rounded-md ${
                  isActive ? "text-blue-600" : "text-gray-800"
                } hover:text-blue-600 transition-all`
              }
            >
              Contact Us
            </NavLink>
          </li>
          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              onClick={toggleDropdownMenu}
              className="cursor-pointer text-black px-4 py-3 font-semibold rounded-2xl"
            >
              Our Services
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-80 bg-white rounded-2xl shadow-xl max-h-80 overflow-y-auto">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink
                      to="/bookappointment"
                      onClick={() => {
                        toggleDropdownMenu();
                        closeMenu();
                      }}
                    >
                      1-Online appointment systems
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink
                      to="/onlinemedicinedelivery"
                      onClick={() => {
                        toggleDropdownMenu();
                        closeMenu();
                      }}
                    >
                      2-Online Medicine Delivery
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink
                      to="/bloodbankstore"
                      onClick={() => {
                        toggleDropdownMenu();
                        closeMenu();
                      }}
                    >
                      3-Blood Bank Store and Blood Donate tracking system
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink
                      to="/ai"
                      onClick={() => {
                        toggleDropdownMenu();
                        closeMenu();
                      }}
                    >
                      4-AI generated prescription according to the symptoms
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink
                      to="/onlinehomeservicetreatment"
                      onClick={() => {
                        toggleDropdownMenu();
                        closeMenu();
                      }}
                    >
                      5-Online Home service Treatment
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink
                      to="/electronichealthrecord"
                      onClick={() => {
                        toggleDropdownMenu();
                        closeMenu();
                      }}
                    >
                      6-Electronic Health Record (EHRs)
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink
                      to="/telemedicine"
                      onClick={() => {
                        toggleDropdownMenu();
                        closeMenu();
                      }}
                    >
                      7-Telemedicine
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink
                      to="/practicemanagementportalfordoctors"
                      onClick={() => {
                        toggleDropdownMenu();
                        closeMenu();
                      }}
                    >
                      8-Practice management portal for doctors
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink
                      to="/electronicprescriptionsystem"
                      onClick={() => {
                        toggleDropdownMenu();
                        closeMenu();
                      }}
                    >
                      9-Electronic Prescription System
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Login/Signup Buttons for Mobile */}
          <li className="block md:hidden">
            <AuthButtons isMobile />
          </li>
        </ul>

        {/* Login/Signup Buttons for Desktop */}
        <div className="hidden md:flex">
          <AuthButtons />
        </div>
      </nav>
    </>
  );
};

export default Header;
