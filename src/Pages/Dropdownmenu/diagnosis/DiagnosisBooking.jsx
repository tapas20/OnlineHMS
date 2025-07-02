import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUser,
  FaHeartbeat,
  FaClipboardList,
  FaMapMarkerAlt,
  FaUpload,
  FaMoneyBillWave,
} from "react-icons/fa";

const steps = [
  { id: 1, label: "Personal Info", icon: FaUser },
  { id: 2, label: "Symptoms", icon: FaHeartbeat },
  { id: 3, label: "Preferences", icon: FaClipboardList },
  { id: 4, label: "Location", icon: FaMapMarkerAlt },
  { id: 5, label: "Upload", icon: FaUpload },
  { id: 6, label: "Payment", icon: FaMoneyBillWave },
];

const DiagnosisBooking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    primarySymptom: "",
    symptomDuration: "",
    symptomSeverity: "",
    medicalHistory: "",
    currentMedications: "",
    allergies: "",
    diagnosisType: "",
    preferredTest: "",
    sampleCollection: "",
    preferredDateTime: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    file: null,
    payment: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted Form:", formData);
    setShowModal(true);
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            {/* Full Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="peer h-12 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                placeholder="Full Name"
              />
              <label className="absolute left-0 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-600">
                Full Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer h-12 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                placeholder="Email Address"
              />
              <label className="absolute left-0 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-600">
                Email Address
              </label>
            </div>

            {/* Phone Number */}
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="peer h-12 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                placeholder="Phone Number"
              />
              <label className="absolute left-0 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-600">
                Phone Number
              </label>
            </div>

            {/* Date of Birth */}
            <div className="relative">
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="peer h-12 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                placeholder="Date of Birth"
              />
              <label className="absolute left-0 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-600">
                Date of Birth
              </label>
            </div>

            {/* Gender */}
            <div className="relative col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Gender
              </label>
              <div className="flex gap-6 items-center">
                <label className="inline-flex items-center gap-2 text-gray-700">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                    className="form-radio text-indigo-600"
                  />
                  Male
                </label>
                <label className="inline-flex items-center gap-2 text-gray-700">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                    className="form-radio text-indigo-600"
                  />
                  Female
                </label>
                <label className="inline-flex items-center gap-2 text-gray-700">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={formData.gender === "other"}
                    onChange={handleChange}
                    className="form-radio text-indigo-600"
                  />
                  Other
                </label>
              </div>
            </div>
          </form>
        );

      case 2:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            {/* Primary Symptom */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Primary Symptom
              </label>
              <input
                type="text"
                name="primarySymptom"
                value={formData.primarySymptom || ""}
                onChange={handleChange}
                placeholder="e.g. Fever"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Symptom Duration */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Symptom Duration
              </label>
              <input
                type="text"
                name="symptomDuration"
                value={formData.symptomDuration || ""}
                onChange={handleChange}
                placeholder="e.g. 3 days"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Symptom Severity */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Symptom Severity
              </label>
              <select
                name="symptomSeverity"
                value={formData.symptomSeverity || ""}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select</option>
                <option value="mild">Mild</option>
                <option value="moderate">Moderate</option>
                <option value="severe">Severe</option>
              </select>
            </div>

            {/* Previous Medical Conditions */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Previous Medical Conditions
              </label>
              <input
                type="text"
                name="medicalHistory"
                value={formData.medicalHistory || ""}
                onChange={handleChange}
                placeholder="e.g. Diabetes, Asthma"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Current Medications */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Current Medications
              </label>
              <input
                type="text"
                name="currentMedications"
                value={formData.currentMedications || ""}
                onChange={handleChange}
                placeholder="e.g. Paracetamol, Insulin"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Allergies */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Allergies (if any)
              </label>
              <input
                type="text"
                name="allergies"
                value={formData.allergies || ""}
                onChange={handleChange}
                placeholder="e.g. Penicillin, Nuts"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            {/* Type of Diagnosis Required */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Type of Diagnosis Required
              </label>
              <select
                name="diagnosisType"
                value={formData.diagnosisType || ""}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              >
                <option value="">Select Type</option>
                <option value="online">Online</option>
                <option value="in-person">In-Person</option>
              </select>
            </div>

            {/* Preferred Test/Service */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Preferred Test / Service
              </label>
              <input
                type="text"
                name="preferredTest"
                value={formData.preferredTest || ""}
                onChange={handleChange}
                placeholder="e.g. Blood Test, MRI, Full Body Checkup"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Sample Collection Method */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Sample Collection Method
              </label>
              <select
                name="sampleCollection"
                value={formData.sampleCollection || ""}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              >
                <option value="">Select Method</option>
                <option value="home">Home Collection</option>
                <option value="center">Visit Diagnostic Center</option>
              </select>
            </div>

            {/* Preferred Date and Time */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Preferred Date & Time for Appointment / Sample Collection
              </label>
              <input
                type="datetime-local"
                name="preferredDateTime"
                value={formData.preferredDateTime || ""}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            {/* Full Address */}
            <div className="relative md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Address
              </label>
              <textarea
                name="address"
                value={formData.address || ""}
                onChange={handleChange}
                rows="3"
                placeholder="Street, Area, Landmark"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-800 placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            {/* Pincode with 📍 icon */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Pincode
              </label>
              <div className="relative">
                <div className="absolute left-3 top-3.5 text-indigo-400 text-lg pointer-events-none">
                  📍
                </div>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode || ""}
                  onChange={handleChange}
                  placeholder="e.g. 751001"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
              </div>
            </div>

            {/* City */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city || ""}
                onChange={handleChange}
                placeholder="e.g. Bhubaneswar"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            {/* State */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                State
              </label>
              <input
                type="text"
                name="state"
                value={formData.state || ""}
                onChange={handleChange}
                placeholder="e.g. Odisha"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Medical Reports (optional)
            </label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center w-full border-2 border-dashed border-indigo-300 rounded-xl h-40 cursor-pointer hover:bg-indigo-50 transition"
              >
                <div className="flex flex-col items-center justify-center pt-4 pb-6">
                  <svg
                    className="w-10 h-10 mb-2 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 15l4.5-4.5m0 0L12 15m-4.5-4.5V21m6-11.5L18 9l3 3m0 0l-3 3-6-6"
                    />
                  </svg>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-indigo-600">
                      Click to upload
                    </span>{" "}
                    or drag & drop
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    PDF, JPG, PNG up to 5MB
                  </p>
                </div>
                <input
                  id="file-upload"
                  type="file"
                  name="file"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="text-gray-700">
            <label className="block text-sm font-medium mb-4">
              Select Your Payment Method:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: "upi", icon: "💸", label: "UPI" },
                { value: "card", icon: "💳", label: "Credit/Debit Card" },
                { value: "cash", icon: "💵", label: "Cash on Visit" },
              ].map((option) => (
                <label
                  key={option.value}
                  className="flex flex-col items-center justify-center px-4 py-5 border rounded-xl cursor-pointer hover:bg-indigo-50 transition"
                >
                  <input
                    type="radio"
                    name="payment"
                    value={option.value}
                    checked={formData.payment === option.value}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="text-indigo-600 text-3xl mb-2">
                    {option.icon}
                  </div>
                  <span className="text-sm font-medium">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-[90vh] bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-6xl flex flex-col lg:flex-row overflow-hidden">
        {/* Sidebar Steps */}
        <div className="bg-gradient-to-b from-indigo-600 to-purple-600 text-white w-full lg:w-1/3 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Diagnosis Booking
            </h2>
            <ul className="space-y-4">
              {steps.map((step) => {
                const Icon = step.icon;
                const isActive = currentStep === step.id;
                return (
                  <li
                    key={step.id}
                    onClick={() => {
                      setDirection(step.id > currentStep ? 1 : -1);
                      setCurrentStep(step.id);
                    }}
                    className={`flex items-center space-x-3 transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "text-white font-bold"
                        : "text-purple-200 hover:text-white"
                    }`}
                  >
                    <Icon
                      className={`text-lg ${
                        isActive
                          ? "text-white"
                          : "text-purple-300 group-hover:text-white"
                      }`}
                    />
                    <span>{step.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="text-xs text-purple-200 text-center mt-8">
            Made by Anna 💜
          </p>
        </div>

        {/* Step Content */}
        <div className="w-full lg:w-2/3 p-8 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="min-h-[300px]"
            >
              <div className="text-xl font-semibold mb-6 text-indigo-700">
                Step {currentStep}: {steps[currentStep - 1].label}
              </div>
              {renderStep()}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
            >
              Back
            </button>

            {currentStep === steps.length ? (
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={nextStep}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-xl animate-fade-in-up">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              🎉 Congratulations!
            </h2>
            <p className="text-gray-700 mb-6">
              Your diagnosis booking has been successfully confirmed.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiagnosisBooking;
