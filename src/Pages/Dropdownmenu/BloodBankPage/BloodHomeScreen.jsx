import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const BloodDonationLandingPage = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className=" bg-red-200 flex items-center justify-center ">
      <div className="bg-white  shadow-lg overflow-hidden w-full">
        {/* Header */}
        <div className="bg-white flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <div className="text-red-600 font-bold text-xl">❤️ BLOOD BANK</div>
          </div>
          <nav className="space-x-6 hidden md:flex">
            <a  href="#" className="text-gray-700 hover:text-red-600">
              Home
            </a>
            <NavLink to="/forecastdashboard" className="text-gray-700 hover:text-red-600">
              AI
            </NavLink>
            <NavLink to="/blockchain" className="text-gray-700 hover:text-red-600">
              BlockChain
            </NavLink>
            <a href="#" className="text-gray-700 hover:text-red-600">
              Contact
            </a>
          </nav>
          <div className="space-x-4 flex text-red-600 text-xl">


          <div className="flex flex-col items-center">
      {/* Profile Picture */}
      <div 
        onClick={handleClick}
        className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center  font-bold text-white cursor-pointer shadow-md hover:shadow-lg transition"
      >
        JD {/* Initials for John Doe */}
      </div>

      {/* Show full details on click */}
      {showDetails && (
        <div className="bg-white p-6 mt-4 rounded-2xl shadow-md w-80">
          <h2 className="text-2xl font-bold mb-4">Donor Profile</h2>
          <div className="space-y-2">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Blood Type:</strong> A+</p>
            <p><strong>Location:</strong> New York, USA</p>
            <p><strong>Last Donation:</strong> March 15, 2025</p>
            <p><strong>Health History:</strong> No issues reported</p>
            <p><strong>Eligibility:</strong> <span className="text-green-600 font-semibold">Eligible</span></p>
          </div>
        </div>
      )}
    </div>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center pt-5 bg-white">
          {/* Left side with background image */}
          <div
            className=" w-full md:w-1/2 h-64 md:h-[500px] bg-cover "
            style={{ backgroundImage: `url("/Images/receive.jpg")` }}
          ></div>

          {/* Right side with text */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-center p-8 ">
            <h2 className="text-3xl font-bold text-red-500 uppercase">
              Donate
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-red-700 my-2">
              YOUR BLOOD
            </h1>
            <p className="text-gray-700 mt-4 mb-6">
              <h2 className="text-2xl font-bold text-red-500 ">Save a Life</h2>
            </p>
            <p className="text-gray-600 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum lorem odio luctus egestas at amet eu libero fusce.
            </p>
            <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full">
              BOOK NOW
            </button>
            <div className=" w-1/2 grid grid-cols-2 gap-4 pt-2">
              <button className="bg-red-700 hover:bg-red-600 text-white py-2 rounded">
                Donate
              </button>
              <button className="bg-blue-700 hover:bg-blue-600 text-white py-2 rounded">
                Request
              </button>
              <button className="bg-green-700 hover:bg-green-600 text-white py-2 rounded">
                History
              </button>
              <button className="bg-yellow-700 hover:bg-yellow-600 text-white py-2 rounded">
                Notifications
              </button>
            </div>
          </div>
          <div
            className=" w-full md:w-1/2 h-64 md:h-[500px] bg-cover "
            style={{ backgroundImage: `url("/Images/donor.jpg")` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BloodDonationLandingPage;
