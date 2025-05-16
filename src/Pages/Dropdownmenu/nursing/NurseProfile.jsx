import React from "react";
import { useParams, Link } from "react-router-dom";

const NurseProfile = () => {
  const { id } = useParams();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">Nurse Profile #{id}</h2>
      <p>Details about Nurse {id} will be shown here.</p>
      <Link to={`/book/${id}`} className="bg-green-600 text-white px-4 py-2 mt-4 inline-block rounded">Book Now</Link>
    </div>
  );
};

export default NurseProfile;