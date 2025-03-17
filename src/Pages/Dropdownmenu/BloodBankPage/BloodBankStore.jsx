import React from "react";
import { NavLink } from "react-router-dom";

const BloodBankStore = () => {
  return (
    <div className="flex items-center justify-center m-5">
    <div className="bg-gradient-to-b from-[#FA4848] to-[#820000] text-white  w-100 h-120 rounded-lg  ">
      <h6 className="text-xl font-bold mt-4 text-center">Blood Bank Store</h6>
      <NavLink to='/requestpage'>Request page</NavLink>
      <NavLink to='/historypage' >History page</NavLink>

      <div className="flex flex-row items-center justify-center m-10">
        <img
          src="./Images/blood doner.png"
          alt="Donor Logo"
          className="w-40 h-auto "
        />
        <NavLink to="/number" 
        className="text-xl font-bold mt-4 text-center">
          Donate your Blood and Save a Life
        </NavLink>
      </div>

      <div className="flex flex-row items-center justify-center m-10">
        <NavLink to='/receiveblood' 
        className="text-xl font-bold mt-4 text-center">
        
          Receive's needed Blood and Save a Life
        </NavLink>
        <img
          src="./Images/blood receive.png"
          alt="doner Logo"
          className="w-40 h-auto "
        />
      </div>
    </div> 


  
    </div>
    
  );
};

export default BloodBankStore;
