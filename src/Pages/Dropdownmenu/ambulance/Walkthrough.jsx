import React from 'react'
import { NavLink } from 'react-router-dom'

const Walkthrough = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-4xl w-full flex flex-col items-center">
        {/* Image Section */}
        <div className="mb-8 w-80 h-80">
          <img
            src="./Images/amico.png" // Replace with your image path
            alt="Ambulance Request Illustration"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text Section */}
        <h1 className="text-3xl font-bold text-center mb-4">Request for an Ambulance</h1>
        <p className="text-lg text-center text-gray-600 mb-8 max-w-xl">
          "Quick and reliable service at your fingertips. Your safety is our priority."
        </p>

        {/* Pagination Dots */}
        <div className="flex space-x-2 mb-8">
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        </div>

        {/* Next Button */}
        <NavLink to="/screen">
        <button className="px-8 py-3 bg-teal-600 text-white rounded-lg text-lg hover:bg-teal-700 transition">
          Next
        </button>
        </NavLink>
      </div>
    </div>
  )
}

export default Walkthrough
