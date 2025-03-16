import React from 'react'
import { NavLink } from 'react-router-dom'

const Otp = () => {
  return (
    <div className="flex items-center justify-center m-5 bg-gray-100">
    <div className="w-96  h-140 bg-white rounded-2xl shadow-lg text-center">
    <img src="./Images/shapes1.png" alt="Logo" className="w-50 h-50" />
      <h2 className="text-xl font-semibold ">OTP Verification</h2>
      <p className="text-gray-500 text-sm mt-1">
        Enter the OTP sent to <span className="font-medium">+91 9542983532</span>
      </p>

      <div className="flex justify-center space-x-3 mt-6">
        <input
          type="text"
          maxLength={1}
          className="w-12 h-12 text-center border-b-2 border-black text-xl font-semibold focus:outline-none"
          value="5"
        />
        <input
          type="text"
          maxLength={1}
          className="w-12 h-12 text-center border-b-2 border-black text-xl font-semibold focus:outline-none"
          value="4"
        />
        <input
          type="text"
          maxLength={1}
          className="w-12 h-12 text-center border-b-2 border-gray-300 text-xl font-semibold focus:outline-none"
          placeholder="_"
        />
        <input
          type="text"
          maxLength={1}
          className="w-12 h-12 text-center border-b-2 border-gray-300 text-xl font-semibold focus:outline-none"
          placeholder="_"
        />
      </div>

      <p className="text-sm text-gray-500 mt-4">
        Didn’t receive an OTP?{' '}
        <span className="text-red-500 font-medium cursor-pointer">Resend OTP</span>
      </p>

      <div className="mt-15 flex justify-center">
          <NavLink to="/bloodcheckup" className="relative bg-red-400 text-white font-semibold py-3 px-8 rounded-lg shadow-md w-full mx-10">
            Verify
         <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 w-6 h-6 rounded-full"></span>
          </NavLink>
        </div>
    </div>
  </div>

  )
}

export default Otp
