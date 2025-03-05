import React from "react";
import { NavLink } from "react-router-dom";

const Appointment = () => {
  return (
    <div className="appointment bg-[url('https://thumbs.dreamstime.com/b/doctors-group-medical-over-blue-clinic-background-88012369.jpg')] bg-cover bg-center bg-no-repeat w-full h-screen flex items-center justify-start">
      <div className="appointment0 mx-4 md:mx-auto md:ml-36 text-center md:text-left">
        <h2 className="text-green-800 text-lg md:text-2xl">
          Welcome to Hospital Management
        </h2>
        <h1 className="text-2xl md:text-4xl font-bold mt-2">
          We Take Care of Our <br className="hidden md:inline" />
          Patients' Health
        </h1>
        <p className="mt-4 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est expedita{" "}
          <br className="hidden md:inline" />
          sapiente laudantium molestias fugiat asperiores aperiam architecto
          facilis,
          <br className="hidden md:inline" /> vero placeat quia libero dolores
          maxime exercitationem laborum! <br className="hidden md:inline" />
          Saepe magni nisi libero!
        </p>
        <div className="mt-6 space-y-2 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center md:items-start">
          <NavLink to="/bookappointment">
            <button className="cursor-pointer h-10 px-4 md:w-auto bg-green-600 text-white font-bold rounded-md">
              Book Appointment
            </button>
          </NavLink>
          <NavLink to="/">
            <button className="cursor-pointer h-10 px-4  md:w-auto bg-green-600 text-white font-bold rounded-md">
              Get Appointment Details
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
