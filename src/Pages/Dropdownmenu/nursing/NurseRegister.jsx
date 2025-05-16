import React from "react";
import { NavLink } from "react-router-dom";

const NurseRegister = () => {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Nurse Registration</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Specialization" className="w-full p-2 border rounded" />
        <input type="file" className="w-full p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
        <NavLink to="/nurse/dashboard">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Register</button></NavLink>
      </form>
    </div>
  );
};

export default NurseRegister;