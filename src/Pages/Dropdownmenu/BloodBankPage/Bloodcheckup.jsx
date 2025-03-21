import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Bloodcheckup= () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    age: "",
    healthConditions: "",
    bloodGroup: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center m-10">
      <div className="bg-red-600 p-6 rounded-lg shadow-lg w-80 relative">
        {/* Semi-transparent overlapping circles */}
        <div className="absolute top-0 right-0">
        <img src="./Images/Group.png" alt=" Logo" className="w-30 h-30" />
        </div>

        <h2 className="text-white text-xl font-semibold mb-4">Sign Up</h2>

        {/* Form Fields */}
        <div className="text-white">
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
            className="w-full bg-transparent border-b border-white outline-none py-1"
          />

          <label className="block font-medium mt-4">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white outline-none py-1"
          />
          
          <label className="block font-medium mt-4">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age"
            className="w-full bg-transparent border-b border-white outline-none py-1"
          />

          <label className="block font-medium mt-4">Prevailing Health Conditions</label>
          <input
            type="text"
            name="healthConditions"
            value={formData.healthConditions}
            onChange={handleChange}
            placeholder="Enter health conditions"
            className="w-full bg-transparent border-b border-white outline-none py-1"
          />

          <label className="block font-medium mt-4">Blood Group</label>
          <input
            type="text"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            placeholder="Enter blood group"
            className="w-full bg-transparent border-b border-white outline-none py-1"
          />
        </div>

        {/* Register Button */}
        <div className="mt-6 flex justify-center">
          <NavLink to="/checkup" className="bg-white text-red-600 font-bold py-2 px-4 rounded-full shadow-md">
            REGISTER FOR CHECKUP
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Bloodcheckup;
