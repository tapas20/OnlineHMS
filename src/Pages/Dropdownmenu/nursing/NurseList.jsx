import React from "react";
import { Link } from "react-router-dom";

const dummyNurses = [
  { id: 1, name: "Nurse A", specialty: "Elder Care" },
  { id: 2, name: "Nurse B", specialty: "ICU Support" },
  { id: 3, name: "Nurse C", specialty: "Younger Care" },
  { id: 4, name: "Nurse D", specialty: "Normal Support" },
];

const NurseList = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Available Nurses</h2>
    <ul>
      {dummyNurses.map((nurse) => (
        <li key={nurse.id} className="mb-4 border p-4 rounded">
          <h3 className="text-xl font-semibold">{nurse.name}</h3>
          <p>{nurse.specialty}</p>
          <Link to={`/nurse/${nurse.id}`} className="text-blue-600">View Profile</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default NurseList;