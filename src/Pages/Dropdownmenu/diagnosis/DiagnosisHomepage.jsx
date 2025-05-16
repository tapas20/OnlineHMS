import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-blue-800">
          Welcome to Diagnolab
        </h1>
        <p className="mb-6 text-gray-600">
          Book your lab tests online and get reports at home.
        </p>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate("/diagnosislogin")}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/diagnosisregister")}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
