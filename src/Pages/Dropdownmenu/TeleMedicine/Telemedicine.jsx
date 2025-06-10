import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const departments = [
  "All",
  "Cardiology",
  "Dermatology",
  "Orthopedics",
  "Neurology",
  "Medicine Spesialist",
];

const doctorsList = [
  {
    id: 1,
    name: "Dr. A. Sharma",
    specialization: "Cardiology",
    available: "10:00 AM - 4:00 PM",
  },
  {
    id: 2,
    name: "Dr. B. Verma",
    specialization: "Dermatology",
    available: "12:00 PM - 6:00 PM",
  },
  {
    id: 3,
    name: "Dr. C. Patel",
    specialization: "Orthopedics",
    available: "9:00 AM - 3:00 PM",
  },
  {
    id: 4,
    name: "Dr. T. Tapas",
    specialization: "Medicine Spesialist",
    available: "9:00 AM - 3:00 PM",
  },
];

const Telemedicine = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [patientName, setPatientName] = useState("");

  const navigate = useNavigate();

  const filteredDoctors =
    selectedDepartment === "All"
      ? doctorsList
      : doctorsList.filter(
          (doctor) => doctor.specialization === selectedDepartment
        );

  const bookAppointment = (doctor) => {
    if (!appointmentDate || !appointmentTime || !patientName) {
      alert("Please fill in all fields: date, time, and patient name.");
      return;
    }

    // Navigate to confirmation page with state
    navigate("/confirmation", {
      state: {
        doctorName: doctor.name,
        appointmentDate,
        appointmentTime,
        patientName,
      },
    });
  };

  return (
    <div className="bg-[#f0f9ff] min-h-screen p-6 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6 text-[#005f8d]">
        Book a Telemedicine Appointment
      </h2>

      {/* Department and Patient Name */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center">
        <div>
          <label className="text-[#005f8d] font-medium mr-2">
            Select Department:
          </label>
          <select
            className="bg-white border border-gray-300 p-2 rounded-lg shadow-sm text-[#005f8d]"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-[#005f8d] font-medium mr-2">
            Patient Name:
          </label>
          <input
            type="text"
            className="bg-white border border-gray-300 p-2 rounded-lg shadow-sm text-[#005f8d]"
            placeholder="Enter patient name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
        </div>
      </div>

      {/* Doctors List */}
      {filteredDoctors.length > 0 ? (
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white p-6 rounded-lg shadow-md text-center w-full"
              >
                <img
                  src="/doctor-profile.jpg"
                  alt="Doctor Profile"
                  className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-[#0077b6]"
                />
                <h3 className="text-xl font-bold text-[#005f8d]">
                  {doctor.name}
                </h3>
                <p className="text-sm text-gray-600">{doctor.specialization}</p>
                <p className="text-sm text-gray-500">
                  Available: {doctor.available}
                </p>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-[#005f8d]">
                    Select Date:
                  </label>
                  <input
                    type="date"
                    className="bg-[#e0f2fe] text-[#005f8d] p-2 rounded-lg w-full border border-gray-300 shadow-sm"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-[#005f8d]">
                    Select Time:
                  </label>
                  <input
                    type="time"
                    className="bg-[#e0f2fe] text-[#005f8d] p-2 rounded-lg w-full border border-gray-300 shadow-sm"
                    value={appointmentTime}
                    onChange={(e) => setAppointmentTime(e.target.value)}
                  />
                </div>

                <button
                  onClick={() => bookAppointment(doctor)}
                  className="mt-4 px-4 py-2 bg-[#0077b6] hover:bg-[#005f8d] text-white font-semibold rounded-lg transition duration-300 shadow-md w-full"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-red-500 font-medium text-center w-full">
          No doctors available in this department.
        </p>
      )}
    </div>
  );
};

export default Telemedicine;
