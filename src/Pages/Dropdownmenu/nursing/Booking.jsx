import React, { useState } from "react";
import {
  FaUser,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaVenusMars,
  FaLanguage,
  FaFileMedical,
  FaPhone,
  FaCheckCircle,
  FaRupeeSign,
} from "react-icons/fa";
import { GiNurseMale, GiNurseFemale } from "react-icons/gi";

const Booking = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {!isSubmitted ? (
          <>
            {/* Form Header */}
            <div className="bg-blue-600 py-4 sm:py-6 px-4 sm:px-8 text-white">
              <h1 className="text-xl sm:text-3xl font-bold flex flex-col sm:flex-row items-center justify-center">
                <div className="flex items-center mb-2 sm:mb-0">
                  <GiNurseMale className="mr-2 text-lg sm:text-2xl" />
                  <GiNurseFemale className="mr-3 text-lg sm:text-2xl" />
                </div>
                <span className="text-center">Online Nursing Service Booking</span>
              </h1>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base text-center">
                Fill out the form below to book professional nursing care
              </p>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-8">
              {/* Patient Information */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                  <FaUser className="mr-2" />
                  Patient Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Age*</label>
                    <input
                      type="number"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Gender*</label>
                    <select
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Medical Condition*
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Nursing Requirements */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  Nursing Requirements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Service Type*
                    </label>
                    <select
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select</option>
                      <option>General Care</option>
                      <option>Post-Surgical</option>
                      <option>Elderly Care</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Duration*
                    </label>
                    <select
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select</option>
                      <option>12 hours/day</option>
                      <option>24 hours</option>
                      <option>Weekly</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Start Date*
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Time Slot*
                    </label>
                    <select
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select</option>
                      <option>Morning</option>
                      <option>Evening</option>
                      <option>Night</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Location Details */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  Location Details
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Full Address*
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-1">City*</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">
                        Pincode*
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">
                        Landmark
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                  <FaVenusMars className="mr-2" />
                  Preferences
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Nurse Gender
                    </label>
                    <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option value="">No Preference</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Language</label>
                    <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option value="">No Preference</option>
                      <option>English</option>
                      <option>Hindi</option>
                      <option>Odia</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Experience Level
                    </label>
                    <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option value="">No Preference</option>
                      <option>Basic</option>
                      <option>Mid-level</option>
                      <option>Certified</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                  <FaFileMedical className="mr-2" />
                  Additional Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Upload Prescription (Optional)
                    </label>
                    <input
                      type="file"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      accept=".pdf,.jpg,.png"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Upload Medical Reports (Optional)
                    </label>
                    <input
                      type="file"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      accept=".pdf,.jpg,.png"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-1">
                      Additional Notes
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      rows="3"
                      placeholder="Any special instructions or requirements"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                  <FaRupeeSign className="mr-2" />
                  Payment Method
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-blue-50">
                    <input
                      type="radio"
                      name="payment"
                      className="h-5 w-5 text-blue-600"
                      required
                    />
                    <span>Online Payment</span>
                  </label>
                  <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-blue-50">
                    <input
                      type="radio"
                      name="payment"
                      className="h-5 w-5 text-blue-600"
                    />
                    <span>UPI Payment</span>
                  </label>
                  <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-blue-50">
                    <input
                      type="radio"
                      name="payment"
                      className="h-5 w-5 text-blue-600"
                    />
                    <span>Pay at Visit</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-md transition duration-300"
                >
                  Submit Booking Request
                </button>
              </div>
            </form>
          </>
        ) : (
          /* Success Message */
          <div className="text-center p-12">
            <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Booking Successful!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for your booking request. Our team will contact you
              shortly to confirm the details.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Make Another Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
