import React from 'react';
import { NavLink } from 'react-router-dom';

const AllRecord = () => {
  return (
    <div className="flex justify-center min-h-screen bg-teal-600 font-sans p-4 sm:p-6 md:p-8 ">
      <div className="w-full max-w-md bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
        <div className="flex justify-between text-sm">
          <a href="#" className="text-teal-700">&#x2190; My health record</a>
          <NavLink to='/reportpage' className="font-bold text-teal-700">All records</NavLink>
        </div>
        <div className="text-center mt-5">
          <img src="/Images/Profile.png" alt="Profile" className="w-20 h-20 rounded-full mx-auto" />
          <h2 className="mt-2 text-lg font-semibold">Moshiur</h2>
          <p className="text-gray-600">ID: 0000001</p>
        </div>
        <div className="mt-5 space-y-3">
          {[
            { icon: "\u2728", title: "Allergies", count: 4 },
            { icon: "\uD83D\uDE91", title: "Diagnoses/Conditions", count: 3 },
            { icon: "\uD83D\uDC8A", title: "Medications & Supplements", count: 4 },
            { icon: "\uD83C\uDF01", title: "Symptoms", count: 2 },
            { icon: "\uD83D\uDC9C", title: "Lab Tests", count: 4 },
            { icon: "\uD83E\uDDEC", title: "DNA Tests", count: 2 }
          ].map((record, index) => (
            <div key={index} className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm">
              <span className="text-2xl mr-4">{record.icon}</span>
              <div>
                <h3 className="font-semibold">{record.title}</h3>
                <p className="text-gray-600">{record.count} records found</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllRecord;