import { useState, useEffect } from "react";

const ElectronicHealthRecord = () => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondImage(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-teal-600 ">
      <div className="relative w-80 h-[90vh] overflow-hidden">
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            showSecondImage ? "opacity-0" : "opacity-100"
          }`}
        >
          <h1 className="absolute top-60 right-0 text-white font-bold text-lg p-2">
            My Health Record
          </h1>
          <img
            src="/Images/Vector.png"
            alt="Home Page"
            className="w-100 h-10 mt-65"
          />
        </div>
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            showSecondImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 h-[60vh] ">
            <h1 className="text-teal-600 text-2xl font-bold">
              My health record
            </h1>
            <h2 className="text-lg text-gray-700 mt-4">Sign In</h2>
            <div className="w-full mt-4">
              <input
                type="text"
                placeholder="User Name"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            <div className="w-full mt-2">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            <div className="flex items-center mt-2">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-600 text-sm">Keep me signed in</span>
            </div>
            <button className="w-full  mt-4 bg-teal-600 text-white py-2 rounded-3xl hover:bg-teal-700 transition">
              Sign In
            </button>
            <p className="mt-2 text-sm text-gray-500 cursor-pointer hover:text-teal-600">
              Forgot Password?
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Not a Member?{" "}
              <span className="text-teal-600 cursor-pointer hover:underline">
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectronicHealthRecord;
