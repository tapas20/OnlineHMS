import React from "react";

const AppointmentForm = () => {
  return (
    <div className="m-5 max-w-lg mx-auto p-6 bg-white">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Appointment Details</h2>
      
      <div className="flex flex-col gap-4">
        {/* Department Selection */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Department *</label>
          <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Select Department</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Orthopedics</option>
          </select>
        </div>
        
        {/* Doctor Selection */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Doctor *</label>
          <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Select Doctor</option>
            <option>Dr. Smith</option>
            <option>Dr. Johnson</option>
            <option>Dr. Lee</option>
          </select>
        </div>
        
        {/* Preferred Date Selection */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Preferred Date *</label>
          <input type="date" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        
        {/* Terms & Conditions Checkbox */}
        <div className="flex items-center">
          <input type="checkbox" id="terms" className="mr-2" />
          <label htmlFor="terms" className="text-gray-700">I agree to the <a href="#" className="text-blue-600">Terms & Conditions</a></label>
        </div>
        
        {/* Submit Button */}
        <button className="cursor-pointer w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AppointmentForm;
