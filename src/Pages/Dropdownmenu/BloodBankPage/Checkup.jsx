import React from "react";

const Checkup = () => {
  return (
    <div className="flex items-center justify-center m-5 bg-gray-100">
      {/* Wrapper to contain both background and content */}
      <div className="relative w-[350px] h-100 bg-white shadow-lg rounded-b-3xl">
        {/* Background Image or Colored Header */}
        <div className="w-full h-[150px] bg-red-400 rounded-b-3xl flex flex-col items-center text-white">
          <h2 className="text-lg font-semibold mt-4">Hello Zoharin</h2>
        </div>

        {/* Foreground Content positioned inside the wrapper */}
        <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2 flex gap-4">
          {/* Blood Group Card */}
          <div className="bg-white shadow-md rounded-2xl p-4 w-36 text-center">
            <h3 className="text-gray-700 font-semibold">Your Blood Group</h3>
            <div className="relative w-12 mx-auto mt-2">
  <p className="absolute top-[20px] left-1/2 transform -translate-x-1/2 text-white text-xl font-bold">
    A+
  </p>
  <img src="/Images/blood-drop.png" alt="Blood Drop" className="w-12" />
</div>

          </div>

          {/* Donor Status Card */}
          <div className="bg-white shadow-md rounded-2xl p-4 w-36 text-center">
            <h3 className="text-gray-700 font-semibold">Donor Status</h3>
            <div className="flex justify-center mt-2">
              <div className="bg-yellow-400 w-12 h-12 flex items-center justify-center rounded-full">
                <span className="text-white text-3xl font-bold">×</span>
              </div>
            </div>
            <p className="text-gray-600 text-xs mt-2">
              Please get checked up first to donate
            </p>
          </div>
        </div>

        {/* Donate Button */}
        <div className="flex justify-center mt-40  mb-4">
          <button className="relative bg-gray-300 text-gray-500 font-semibold py-2 px-6 rounded-full shadow-md w-56 cursor-not-allowed">
            Donate Blood
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 w-5 h-5 rounded-full"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkup;
