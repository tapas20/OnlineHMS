import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const caretakers = [
  {
    id: 1,
    name: "John Doe",
    photo: "https://via.placeholder.com/100",
    specialization: "Pediatric Care",
    experience: "5 years",
    rating: 4.8,
    price: "$30/hr",
    languages: ["English", "Spanish"],
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: "https://via.placeholder.com/100",
    specialization: "Geriatric Care",
    experience: "8 years",
    rating: 4.9,
    price: "$35/hr",
    languages: ["English"],
  },
  {
    id: 3,
    name: "Alex Lee",
    photo: "https://via.placeholder.com/100",
    specialization: "Post-operative Care",
    experience: "6 years",
    rating: 4.7,
    price: "$32/hr",
    languages: ["English", "Mandarin"],
  },
];

export default function CaretakerSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const filteredCaretakers = caretakers.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
      {/* Header */}
      <header
        className={`mb-8 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-4 drop-shadow-md">
          Find Your Perfect Caretaker
        </h1>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search by name, specialization, location..."
            className="w-full max-w-md p-3 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      {/* Filters */}
      <section
        className={`bg-white bg-opacity-70 backdrop-blur p-6 rounded-xl shadow-xl mb-10 transition-transform duration-700 ${
          fadeIn ? "translate-y-0" : "translate-y-10"
        }`}
      >
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Filters</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <select className="p-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-400">
            <option>Location</option>
            <option>New York</option>
            <option>Los Angeles</option>
          </select>
          <select className="p-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-400">
            <option>Experience</option>
            <option>Novice</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
          <select className="p-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-400">
            <option>Specialization</option>
            <option>Pediatric Care</option>
            <option>Geriatric Care</option>
          </select>
          <select className="p-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-400">
            <option>Availability</option>
            <option>Full-time</option>
            <option>Part-time</option>
          </select>
        </div>
      </section>

      {/* Caretaker list */}
      <section
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        {filteredCaretakers.map((c) => (
          <div
            key={c.id}
            className="bg-white p-6 rounded-2xl shadow-xl transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-105"
          >
            <img
              src={c.photo}
              alt={c.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-200"
            />
            <h3 className="text-lg font-bold text-center text-indigo-700">
              {c.name}
            </h3>
            <p className="text-center text-sm text-gray-500 mb-2">
              {c.specialization}
            </p>
            <div className="text-sm text-gray-600 space-y-1">
              <p>Experience: {c.experience}</p>
              <p>⭐ {c.rating}</p>
              <p>Price: {c.price}</p>
              <p>Languages: {c.languages.join(", ")}</p>
            </div>
            <NavLink to="/caretakerbookingpage">
            <button className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-full shadow hover:bg-indigo-600 transition transform hover:scale-105">
              Book Now
            </button>
            </NavLink>
          </div>
        ))}
      </section>
    </div>
  );
}
