import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [modalType, setModalType] = useState(null);
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

  const toggleModal = (type) => {
    if (modalType === type) {
      setModalType(null);
    } else {
      setModalType(type);
    }
  };

  const closeModal = () => setModalType(null);

  return (
    <>
      {/* Modal for Login/Signup Options */}
      {modalType && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl shadow-lg w-11/12 max-w-md p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-4">
              {modalType === "login" ? (
                <>
                  <h6 className="text-lg font-semibold text-gray-800 border-b pb-2">
                    Login Options
                  </h6>
                  <NavLink
                    to="/logindoctor"
                    onClick={closeModal}
                    className="block p-3 border rounded-md hover:bg-blue-50"
                  >
                    Login as a Doctor
                  </NavLink>
                  <NavLink
                    to="/loginpatient"
                    onClick={closeModal}
                    className="block p-3 border rounded-md hover:bg-green-50"
                  >
                    Login as a Patient
                  </NavLink>
                </>
              ) : (
                <>
                  <h6 className="text-lg font-semibold text-gray-800 border-b pb-2">
                    SignUp Options
                  </h6>
                  <NavLink
                    to="/signupdoctor"
                    onClick={closeModal}
                    className="block p-3 border rounded-md hover:bg-blue-50"
                  >
                    SignUp as a Doctor
                  </NavLink>
                  <NavLink
                    to="/signuppatient"
                    onClick={closeModal}
                    className="block p-3 border rounded-md hover:bg-green-50"
                  >
                    SignUp as a Patient
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      )}

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
              className="text-black px-4 py-3 font-semibold rounded-2xl"
            >
              Our Services
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-80 bg-white rounded-2xl shadow-xl max-h-80 overflow-y-auto">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink
                      to="/onlineappointment"
                      onClick={toggleDropdownMenu}
                    >
                      1-Online appointment systems
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    2-Online Medicine Delivery
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    3-Blood Bank Store and Blood Donate tracking system
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink to="/ai" onClick={toggleDropdownMenu}>
                      4-AI generated prescription according to the symptoms
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    5-Online Home service Treatment
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    6-Electronic Health Record (EHRs)
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    7-Telemedicine
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    8-Practice management portal for doctors
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    9-Electronic Prescription System
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Login/Signup Buttons for Mobile */}
          <li className="block md:hidden">
            <button
              onClick={() => {
                toggleModal("signup");
                closeMenu();
              }}
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all mt-2"
            >
              SignUp
            </button>
          </li>
          <li className="block md:hidden">
            <button
              onClick={() => {
                toggleModal("login");
                closeMenu();
              }}
              className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all mt-2"
            >
              Login
            </button>
          </li>
        </ul>

        {/* Login/Signup Buttons for Desktop */}
        <div className="hidden md:flex space-x-4">
          <button
            onClick={() => toggleModal("signup")}
            className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
          >
            SignUp
          </button>
          <button
            onClick={() => toggleModal("login")}
            className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all"
          >
            Login
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
