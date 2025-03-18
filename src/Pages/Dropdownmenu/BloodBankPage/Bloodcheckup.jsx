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
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-red-600 p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md relative">
        {/* Logo */}
        <div className="absolute top-4 right-4">
          <img src="./Images/Group.png" alt="Logo" className="w-12 h-12" />
        </div>

        <h2 className="text-white text-xl md:text-2xl font-semibold mb-6 text-center">Sign Up</h2>

        {/* Form Fields */}
        <div className="text-white">
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
