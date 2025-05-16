import React from "react";
import { NavLink } from "react-router-dom";

const LoginScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md sm:max-w-lg">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Sign In</h2>
        <p className="text-gray-600 mb-6">
          Welcome back! Let’s continue your journey with us.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Phone no/Email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <NavLink to="/forgotpassword">
              <button type="button" className="text-teal-600 hover:underline">
                Forgot password?
              </button>
            </NavLink>
          </div>
          <NavLink to="/ambulancepage">
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition"
            >
              Sign In
            </button>
          </NavLink>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-grow border-t"></div>
          <span className="mx-4 text-gray-400">OR</span>
          <div className="flex-grow border-t"></div>
        </div>

        {/* Social Login */}
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
      </div>
    </div>
  );
};

export default LoginScreen;
