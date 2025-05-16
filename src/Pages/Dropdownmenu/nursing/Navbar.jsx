import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";


const Navbar = () => {
  const [userType, setUserType] = useState(null); // 'patient' | 'nurse' | null
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (type) => {
    setUserType(type);
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleRegister = (type) => {
    setUserType(type);
    setIsLoggedIn(true);
    setShowRegisterModal(false);
  };

  const handleLogout = () => {
    setUserType(null);
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <NavLink to="/" className="font-bold text-lg">
            Nursing
          </NavLink>

          <div className="space-x-4">
            {!isLoggedIn ? (
              <>
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="hover:underline"
                >
                  Login
                </button>
                <button
                  onClick={() => setShowRegisterModal(true)}
                  className="hover:underline"
                >
                  Register
                </button>
              </>
            ) : (
              <>
                {userType === "patient" && (
                  <>
                    <NavLink to="/find/nurses" className="hover:underline">
                      Find Nurse
                    </NavLink>
                    <NavLink
                      to="/patient/search-nurses"
                      className="hover:underline"
                    >
                      Search Nurse
                    </NavLink>
                    <NavLink
                      to="/patient/booking-confirmation"
                      className="hover:underline"
                    >
                      BookingConfirmation
                    </NavLink>
                    <NavLink to="/patient/profile" className="hover:underline">
                      Profile
                    </NavLink>
                  </>
                )}

                {userType === "nurse" && (
                  <>
                    <NavLink to="/nurse" className="hover:underline">
                      Nurse
                    </NavLink>
                    <NavLink
                      to="/patient/booking-status"
                      className="hover:underline"
                    >
                      BookingStatus
                    </NavLink>
                    <NavLink to="/nurse/profile2" className="hover:underline">
                      Profile
                    </NavLink>
                  </>
                )}

                <NavLink to="/about" className="hover:underline">
                  About
                </NavLink>
                <NavLink to="/contact" className="hover:underline">
                  Contact
                </NavLink>
                <button onClick={handleLogout} className="hover:underline">
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-black p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Login As</h2>
            <div className="space-x-5">
              <NavLink to="/patient/dashboard">
                <button
                  onClick={() => handleLogin("patient")}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Patient
                </button>
              </NavLink>
              <NavLink to="/nurse/dashboard">
              <button
                onClick={() => handleLogin("nurse")}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Nurse
              </button>
              </NavLink>
            </div>
            <button
              onClick={() => setShowLoginModal(false)}
              className="mt-4 text-red-500"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-black p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Signup As</h2>
            <div className="space-x-5">
              <NavLink to="/patient/dashboard">
                <button
                  onClick={() => handleRegister("patient")}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Patient
                </button>
              </NavLink>
              <NavLink to="/nurse/dashboard">
                <button
                  onClick={() => handleRegister("nurse")}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Nurse
                </button>
              </NavLink>
            </div>
            <button
              onClick={() => setShowRegisterModal(false)}
              className="mt-4 text-red-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
