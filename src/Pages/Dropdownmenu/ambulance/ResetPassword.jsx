import React from 'react'
import { NavLink } from 'react-router-dom'

const ResetPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Reset password</h2>
        <form className="space-y-4">
          <div>
            <input
              type="password"
              placeholder="New Password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <NavLink to="/setpassword">
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
          >
            Confirm password
          </button></NavLink>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
