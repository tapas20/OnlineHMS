import React from "react";

const NurseProfile = () => {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Specialization" className="w-full p-2 border rounded" />
        <textarea placeholder="About You" className="w-full p-2 border rounded"></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Update Profile</button>
      </form>
    </div>
  );
};

export default NurseProfile;