import React from "react";

const SearchNurses = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Search Nurses</h2>
      <input type="text" placeholder="Search by specialization..." className="border p-2 w-full mb-4 rounded" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 rounded shadow">
          <h3 className="font-semibold text-lg">Nurse A</h3>
          <p>Specialization: Geriatric Care</p>
          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Book Now</button>
        </div>
        <div className="border p-4 rounded shadow">
          <h3 className="font-semibold text-lg">Nurse B</h3>
          <p>Specialization: Pediatric Care</p>
          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default SearchNurses;