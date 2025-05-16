import React from "react";
import { NavLink } from "react-router-dom";

const AmbulancePage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <header className="text-center mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold">Ambulance</h1>
      </header>

      <section className="max-w-3xl mx-auto bg-gradient-to-r from-blue-400 to-blue-700 text-white rounded-lg p-4 sm:p-6 md:p-8 flex flex-col md:flex-row justify-between items-center mb-6 sm:mb-8">
        <div className="relative flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-4 md:mb-0">
          <img
            src="./Images/circle.png"
            alt="Circle"
            className="w-full h-full object-contain"
          />
          <img
            src="./Images/ambulance-ai-generated.png"
            alt="Ambulance"
            className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
          />
        </div>

        <div className="text-center md:text-left md:ml-6">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
            Ambulance tools
          </h2>
          <p className="max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="mt-4 px-4 sm:px-6 py-2 border border-white rounded hover:bg-white hover:text-blue-700 transition">
            READ MORE
          </button>
        </div>
      </section>

      <div className="text-center mb-6 sm:mb-8">
        <div className="bg-gray-200 inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-lg sm:text-xl font-semibold">
          Private Ambulance CALL - 18008908208
        </div>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 hover:shadow-xl transition">
          <div className="mb-4 flex justify-center">
            <img
              src="./Images/bookambulance.png"
              alt="Book Ambulance"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
          </div>
          <NavLink to="/pickup">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">
              Book Ambulance
            </h3>
          </NavLink>
          <p className="text-gray-600 text-center text-sm sm:text-base">
            Schedule Ambulance Fast and easy Patient Transfer
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 hover:shadow-xl transition">
          <div className="mb-4 flex justify-center">
            <img
              src="./Images/airambulance.png"
              alt="Air Ambulance"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">
            Air Ambulance
          </h3>
          <p className="text-gray-600 text-center text-sm sm:text-base">
            Schedule Air Ambulance Fast and easy Patient Transfer
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 hover:shadow-xl transition">
          <div className="mb-4 flex justify-center">
            <img
              src="./Images/bulkambulance.png"
              alt="Bulk Ambulance"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">
            Bulk Ambulance
          </h3>
          <p className="text-gray-600 text-center text-sm sm:text-base">
            For Emergency Multiple Ambulance Needs
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 hover:shadow-xl transition">
          <div className="mb-4 flex justify-center">
            <img
              src="./Images/bookambulance.png"
              alt="Rent Ambulance"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">
            Rent Ambulance
          </h3>
          <p className="text-gray-600 text-center text-sm sm:text-base">
            For Events, travel, Transfer & more
          </p>
        </div>
      </section>
    </div>
  );
};

export default AmbulancePage;
