import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Bloodcheckup = () => {
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
    <div className="flex justify-center items-center min-h-screen p-4" style={{ backgroundColor: "#FA4848" }}>
      <div className="bg-red-600 p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md relative">
        {/* Logo */}
        <div className="absolute top-4 right-4">
          <img src="./Images/Group.png" alt="Logo" className="w-12 h-12" />
        </div>

        <h2 className="text-white text-xl md:text-2xl font-semibold mb-6 text-center">Sign Up</h2>

        {/* Form Fields */}
        <div className="text-white">
<<<<<<< HEAD
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
=======
          {[
            { label: "Full Name", name: "fullName", type: "text", placeholder: "Enter full name" },
            { label: "Date of Birth", name: "dob", type: "date" },
            { label: "Age", name: "age", type: "number", placeholder: "Enter age" },
            { label: "Prevailing Health Conditions", name: "healthConditions", type: "text", placeholder: "Enter health conditions" },
            { label: "Blood Group", name: "bloodGroup", type: "text", placeholder: "Enter blood group" },
          ].map((field, index) => (
            <div key={index} className="mb-4">
              <label className="block font-medium">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder || ""}
                className="w-full bg-transparent border-b border-white outline-none py-2 text-lg"
              />
            </div>
          ))}
>>>>>>> 9e4bb1f02288ed53adfc1d85d7be3e9b9f81ce53
        </div>

        {/* Register Button */}
        <div className="mt-6 flex justify-center">
          <NavLink to="/checkup" className="bg-white text-red-600 font-bold py-2 px-6 md:px-8 rounded-full shadow-md hover:bg-gray-200 transition">
            REGISTER FOR CHECKUP
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Bloodcheckup;
