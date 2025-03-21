import React from "react";

const PracticeManagementPortalForDoctors = () => {
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

        {/* Quick Action Buttons */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button className="bg-[#0077b6] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#005f8d] transition">
            Register Now
          </button>
          <button className="bg-[#0077b6] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#005f8d] transition">
            Apply for Internship
          </button>
          <button className="bg-[#0077b6] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#005f8d] transition">
            Manage Appointments
          </button>
        </div>
      </main>
    </div>
  );
};

export default PracticeManagementPortalForDoctors;
