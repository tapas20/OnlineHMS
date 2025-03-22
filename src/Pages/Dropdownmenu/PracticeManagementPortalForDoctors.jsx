import React, { useState } from "react";

const PracticeManagementPortalForDoctors = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-[#f0f9ff] text-[#005f8d] flex flex-col items-center p-6">
      {/* Header */}
      <header className="w-full max-w-4xl text-center py-6">
        <h1 className="text-3xl font-bold text-[#0077b6]">
          Practice Management Portal for Doctors
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          A platform for medical professionals to gain hands-on experience.
        </p>
      </header>

      {/* Main Section */}
      <main className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-[#0077b6] mb-4">
          Start Your Medical Practice Journey
        </h2>

        <p className="text-gray-700">
          Register as a doctor, pharmacy staff, or healthcare professional and apply for internships, manage appointments, and enhance your skills.
        </p>

        {/* Buttons */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            className={`py-2 px-4 rounded-lg shadow-md transition ${
              openSection === "register" ? "bg-[#005f8d] text-white" : "bg-[#0077b6] text-white hover:bg-[#005f8d]"
            }`}
            onClick={() => toggleSection("register")}
          >
            Register Now
          </button>
          <button
            className={`py-2 px-4 rounded-lg shadow-md transition ${
              openSection === "internship" ? "bg-[#005f8d] text-white" : "bg-[#0077b6] text-white hover:bg-[#005f8d]"
            }`}
            onClick={() => toggleSection("internship")}
          >
            Apply for Internship
          </button>
          <button
            className={`py-2 px-4 rounded-lg shadow-md transition ${
              openSection === "appointment" ? "bg-[#005f8d] text-white" : "bg-[#0077b6] text-white hover:bg-[#005f8d]"
            }`}
            onClick={() => toggleSection("appointment")}
          >
            Manage Appointments
          </button>
        </div>

        {/* Expanding Sections */}
        {openSection && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-[#0077b6]">
              {openSection === "register" && "Register as a Medical Staff"}
              {openSection === "internship" && "Apply for Internship"}
              {openSection === "appointment" && "Manage Your Appointments"}
            </h2>

            {/* Form */}
            <form className="mt-4 flex flex-col gap-3">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
              />
              {openSection === "appointment" && (
                <input
                  type="date"
                  className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
                />
              )}
              <button className="bg-[#0077b6] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#005f8d] transition">
                Submit
              </button>
            </form>

            {/* Close Button */}
            <button
              onClick={() => toggleSection(null)}
              className="mt-4 text-red-500 hover:text-red-700 transition text-sm"
            >
              Close
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default PracticeManagementPortalForDoctors;
