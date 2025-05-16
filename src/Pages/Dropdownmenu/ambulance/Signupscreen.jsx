import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault(); // Prevent form reload

    // Simulate successful registration
    setIsSuccessModalOpen(true);

    // Simulate navigation to a new page after a delay
    setTimeout(() => {
      navigate("/ambulancepage"); // Replace with actual navigation
    }, 1000);
  };

  const handleWelcomeClick = () => {
    setIsSuccessModalOpen(false);
    navigate("/ambulancepage"); // Replace with actual navigation
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-2">Sign up</h2>
        <p className="mb-6 text-gray-600">
          Welcome, let’s start managing your health journey together.
        </p>

        <form className="space-y-4" onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="my-6 flex items-center justify-center">
          <span className="border-t w-full border-gray-300"></span>
          <span className="mx-4 text-gray-500">OR</span>
          <span className="border-t w-full border-gray-300"></span>
        </div>

        <div className="flex justify-center space-x-4">
          <button className="p-2 border rounded-full hover:bg-gray-100 transition">
            <img
              src="https://img.icons8.com/color/24/google-logo.png"
              alt="Google"
            />
          </button>
          <button className="p-2 border rounded-full hover:bg-gray-100 transition">
            <img
              src="https://img.icons8.com/color/24/facebook-new.png"
              alt="Facebook"
            />
          </button>
          <button className="p-2 border rounded-full hover:bg-gray-100 transition">
            <img
              src="https://img.icons8.com/ios-filled/24/mac-os.png"
              alt="Apple"
            />
          </button>
        </div>

        {isSuccessModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-white/00 backdrop-blur-md flex justify-center items-center">
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="flex justify-center items-center rounded-full bg-green-100 w-16 h-16 mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Success
              </h3>
              <p className="text-gray-600 mb-4">
                Your account has been successfully registered
              </p>
              <button
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleWelcomeClick}
              >
                Welcome
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpForm;
