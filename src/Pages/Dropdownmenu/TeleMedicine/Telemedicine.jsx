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

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientGender, setPatientGender] = useState("");

  const navigate = useNavigate();

  const filteredDoctors =
    selectedDepartment === "All"
      ? doctorsList
      : doctorsList.filter(
          (doctor) => doctor.specialization === selectedDepartment
        );

  const openModal = (doctor) => {
    if (!appointmentDate || !appointmentTime) {
      alert("Please select date and time first.");
      return;
    }
    setSelectedDoctor(doctor);
    setModalOpen(true);
  };

  const confirmBooking = () => {
    if (!patientName || !patientAge || !patientGender) {
      alert("Please fill in all patient details.");
      return;
    }

    navigate("/confirmation", {
      state: {
        doctorName: selectedDoctor.name,
        appointmentDate,
        appointmentTime,
        patientName,
        patientAge,
        patientGender,
      },
    });
  };

  return (
    <div className="bg-[#f0f9ff] min-h-screen p-6 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6 text-[#005f8d]">
        Book a Telemedicine Appointment
      </h2>

      {/* Department Selector */}
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
      </div>

      {/* Doctor Cards */}
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
                  onClick={() => openModal(doctor)}
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

      {/* Booking Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h3 className="text-lg font-bold text-[#005f8d] mb-4 text-center">
              Enter Patient Details
            </h3>
            <input
              type="text"
              placeholder="Patient Name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="w-full mb-3 p-2 border border-gray-300 rounded"
            />
            <input
              type="number"
              placeholder="Age"
              value={patientAge}
              onChange={(e) => setPatientAge(e.target.value)}
              className="w-full mb-3 p-2 border border-gray-300 rounded"
            />
            <select
              value={patientGender}
              onChange={(e) => setPatientGender(e.target.value)}
              className="w-full mb-3 p-2 border border-gray-300 rounded"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setModalOpen(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={confirmBooking}
                className="bg-[#0077b6] hover:bg-[#005f8d] text-white px-4 py-2 rounded"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Telemedicine;
