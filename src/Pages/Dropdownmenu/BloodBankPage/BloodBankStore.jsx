import React from "react";
import { NavLink } from "react-router-dom";

const BloodBankStore = () => {
  return (
    <div className="flex items-center justify-center m-5 ">
      <div className="bg-gradient-to-b from-[#FA4848] to-[#820000] text-white w-full max-w-3xl p-6 rounded-lg shadow-lg">
        <h6 className="text-2xl font-bold mt-4 text-center">Blood Bank Store</h6>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
          <NavLink to='/requestpage' className="text-center bg-white text-red-600 py-2 px-4 rounded-md font-semibold hover:bg-gray-100">Request Page</NavLink>
          <NavLink to='/historypage' className="text-center bg-white text-red-600 py-2 px-4 rounded-md font-semibold hover:bg-gray-100">History Page</NavLink>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-4">
          <img src="./Images/blood doner.png" alt="Donor Logo" className="w-32 md:w-40 h-auto" />
          <NavLink to="/number" className="text-lg font-bold text-center hover:underline">
            Donate your Blood and Save a Life
          </NavLink>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-4">
          <NavLink to='/receiveblood' className="text-lg font-bold text-center hover:underline">
            Receive Needed Blood and Save a Life
          </NavLink>
          <img src="./Images/blood receive.png" alt="Receiver Logo" className="w-32 md:w-40 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default BloodBankStore;