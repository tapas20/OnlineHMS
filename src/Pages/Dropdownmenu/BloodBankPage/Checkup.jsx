import React from "react";
import {Link} from "react-router-dom"

const Checkup = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-red-500">
       <header className="bg-red-600 text-white p-4 w-full max-w-5xl flex flex-wrap justify-between items-center shadow-lg rounded-lg">
        <h1 className="text-xl md:text-3xl font-extrabold tracking-wide">🩸 Blood Donation</h1>
        <nav>
          <ul className="flex flex-wrap space-x-3 md:space-x-6 text-sm md:text-lg font-medium">
            <li><a href="#" className="hover:text-gray-200 transition">Home</a></li>
            <li><a href="#" className="hover:text-gray-200 transition">My Donations</a></li>
            <li><a href="#" className="hover:text-gray-200 transition">Profile</a></li>
          </ul>
        </nav>
      </header>
      {/* Wrapper to contain both background and content */}
      <div className="relative w-full max-w-md bg-white shadow-lg rounded-3xl mt-6 min-h-[500px] md:min-h-[300px]">

        {/* Background Image or Colored Header */}
        <div className="w-full h-[150px] bg-red-400 rounded-b-3xl flex flex-col items-center text-white">
          <h2 className="text-lg font-semibold mt-4">Hello Zoharin</h2>
        </div>

        {/* Foreground Content positioned inside the wrapper */}
        <div className="absolute flex flex-col md:flex-row top-[80px] left-1/2 transform -translate-x-1/2 gap-4">

          {/* Blood Group Card */}
          <div className="bg-white shadow-md rounded-2xl p-4 w-36 text-center">
            <h3 className="text-gray-700 font-semibold">Your Blood Group</h3>
            <div className="relative w-12 mx-auto mt-2">
              <p className="absolute top-[20px] left-1/2 transform -translate-x-1/2 text-white text-xl font-bold">
                A+
              </p>
              <img
                src="/Images/blood-drop.png"
                alt="Blood Drop"
                className="w-12"
              />
            </div>
          </div>

          {/* Donor Status Card */}
          <div className="bg-white shadow-md rounded-2xl p-4 w-36 text-center">
            <h3 className="text-gray-700 font-semibold">Donor Status</h3>
            <div className="flex justify-center mt-2">
              <div className="bg-yellow-400 w-12 h-12 flex items-center justify-center rounded-full">
                <span className="text-white text-3xl font-bold">×</span>
              </div>
            </div>
            <p className="text-gray-600 text-xs mt-2">
              Please get checked up first to donate
            </p>
            <Link to="/trackingblood" className="text-gray-600 text-xs">Track Your Blood</Link>
          </div>
        </div>


 
         
        {/* Donate Button */}
        <div className="flex justify-center mt-75 md:mt-40 mb-4">
          
          <button className="relative bg-gray-300 text-gray-500 font-semibold py-2 px-6 rounded-full shadow-md w-56 cursor-not-allowed">
            Donate Blood
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 w-5 h-5 rounded-full"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkup;
