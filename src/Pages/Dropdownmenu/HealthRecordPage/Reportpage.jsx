import React from "react";

const Reportpage = () => {
  return (
    <div className="bg-teal-700 text-white font-sans min-h-screen p-4 ">
      <header className="flex flex-col sm:flex-row justify-between items-center p-4 bg-teal-700 text-white">
        <div className="flex items-center gap-4">
          <span className="text-lg">My Health Record</span>
          <span className="font-bold text-xl">Reports</span>
        </div>
        <div className="flex items-center gap-3 mt-2 sm:mt-0">
          <span>Moshiur</span>
          <img
            src="/Images/Profile.png"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>

      <div className="flex justify-center mt-4">
        <input
          type="text"
          placeholder="Search your report"
          className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-3 rounded-full border-none bg-white text-black text-lg shadow-md"
        />
      </div>

      <main className="p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            date: "Monday, 27 March 2023",
            center: "Healthy Family Centre",
            category: "Allergies",
            records: ["Peanuts Allergies - Severe", "Pollen - Mild"],
            total: 4,
            buttonText: "+ Add Allergy",
          },
          {
            date: "Wednesday, 10 April 2023",
            center: "Healthy Family Centre",
            category: "Allergies",
            records: [
              "Jone Smith - Diabetes",
              "Jone Kelly - Mild",
              "Joe Doe - Blood Pressure",
            ],
            total: 3,
            buttonText: "+ Add Family Member",
          },
          {
            date: "Wednesday, 10 April 2023",
            center: "Healthy Family Centre",
            category: "Allergies",
            records: [
              "Cancer - Sample Data",
              "Arthritis - Sample Data",
              "Diabetes - Sample Data",
              "Back Pain - Sample Data",
            ],
            total: 3,
            buttonText: "+ Add Diagnosis",
          },
        ].map((report, index) => (
          <div key={index} className="bg-white text-black rounded-2xl p-5 shadow-md flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{report.date}</h3>
              <span className="text-red-500 cursor-pointer">Delete Record</span>
            </div>
            <p className="text-gray-600">{report.center}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-teal-700 font-bold">{report.category}</p>
              <button className="bg-teal-700 text-white px-3 py-1 rounded-3xl">
                {report.buttonText}
              </button>
            </div>
            <p className="mt-2 font-semibold">Total Record: {report.total}</p>
            <ul className="list-none pl-0">
              {report.records.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Reportpage;