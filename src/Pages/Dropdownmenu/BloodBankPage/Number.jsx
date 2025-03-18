import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Number = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const navigate = useNavigate();

  // Function to handle input change
  const handleInputChange = (event) => {
    setMobileNumber(event.target.value);
  };

  // Function to handle OTP button click
  const handleGetOtp = () => {
    if (mobileNumber.length === 10) {
      navigate("/otp");
    } else {
      alert("Please enter a valid 10-digit mobile number.");
    }
  };

  return (
    <div className="flex justify-center bg-pink-50 items-center px-4" >

      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 sm:p-8 md:p-10 m-10">
        {/* Image Section */}
       
          <img src="./Images/shapes.png" alt="Blood Donor Logo" className="w-32 h-32" />
       

        {/* Input Section */}
        <div className="mt-6 text-center">
          <h2 className="text-gray-700 text-lg font-semibold">
            Enter your mobile number
          </h2>
          <div className="mt-4 flex items-center border border-black rounded-full px-3 py-2 w-full">
            <span className="text-red-500 font-semibold">+91</span>
            <input
              type="text"
              placeholder="Enter number"
              value={mobileNumber}
              onChange={handleInputChange}
              className="flex-1 outline-none px-2 text-gray-700"
            />
          </div>
        </div>

        {/* Get OTP Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleGetOtp}
            className={`relative text-white font-semibold py-3 px-8 rounded-lg shadow-md w-full transition-all duration-300 ${
              mobileNumber.length === 10 ? "bg-red-600 hover:bg-red-700" : "bg-red-400 cursor-not-allowed"
            }`}
          >
            GET OTP
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 w-6 h-6 rounded-full"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Number;
