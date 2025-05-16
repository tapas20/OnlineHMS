import React from "react";
import { Link } from "react-router-dom";

const NurseLogin = () => {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Nurse Login</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Nurse ID or Email"
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
        />
        <Link to="/nurse/dashboard">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Login
          </button>
        </Link>
      </form>
    </div>
  );
};

export default NurseLogin;