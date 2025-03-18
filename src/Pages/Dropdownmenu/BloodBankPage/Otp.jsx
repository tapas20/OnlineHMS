import React from 'react';
import { NavLink } from 'react-router-dom';

const Otp = () => {
  return (
    <div className="flex items-center justify-center  p-5 bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg text-center m-5 p-6 ">
        <img src="./Images/shapes1.png" alt="Logo" className="w-30 h-30 " />
        <h2 className="text-xl font-semibold mt-4">OTP Verification</h2>
        <p className="text-gray-500 text-sm mt-1">
          Enter the OTP sent to <span className="font-medium">+91 9542983532</span>
        </p>

        <div className="flex justify-center space-x-3 mt-6">
          {[1, 2, 3, 4].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border-b-2 border-black text-xl font-semibold focus:outline-none"
              placeholder="_"
            />
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-4">
          Didn’t receive an OTP?{' '}
          <span className="text-red-500 font-medium cursor-pointer">Resend OTP</span>
        </p>

        <div className="mt-6">
          <NavLink
            to="/bloodcheckup"
            className="bg-red-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md w-full block text-center"
          >
            Verify
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Otp;