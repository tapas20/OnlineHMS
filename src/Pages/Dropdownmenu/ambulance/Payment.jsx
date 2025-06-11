import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const paymentOptions = ["UPI", "Credit Card", "Debit Card", "Cash on Delivery"];

const PaymentPage = () => {
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [condition, setCondition] = useState("");
  const [pickupDateTime, setPickupDateTime] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  const pickupLocation = "123 Main Street";
  const destination = "456 Elm Street";
  const selectedAmbulance = { type: "Basic Life Support", price: 2500 };

  const handlePayment = () => {
    alert("Payment successful!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 py-10 px-4 flex items-center justify-center">
      <div className="backdrop-blur-xl bg-white/60 p-8 rounded-3xl shadow-2xl max-w-3xl w-full transition-all duration-500 hover:scale-[1.01]">
        <h2 className="text-3xl font-extrabold text-center text-teal-700 mb-6 tracking-tight">
          🚑 Confirm Your Ambulance Booking
        </h2>

        {/* Display selected info */}
        <div className="bg-white/70 p-4 rounded-xl shadow mb-6 space-y-2 text-gray-700">
          <div>
            <strong>Pickup Location:</strong> {pickupLocation}
            <button
              className="text-blue-600 underline ml-2"
              onClick={() => navigate("/")}
            >
              Change
            </button>
          </div>
          <div>
            <strong>Destination:</strong> {destination}
            <button
              className="text-blue-600 underline ml-2"
              onClick={() => navigate("/destination")}
            >
              Change
            </button>
          </div>
          <div>
            <strong>Ambulance Type:</strong> {selectedAmbulance.type} – ₹
            {selectedAmbulance.price}
            <button
              className="text-blue-600 underline ml-2"
              onClick={() => navigate("/ambulance")}
            >
              Change
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="input-style"
          />
          <input
            type="text"
            placeholder="Customer Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input-style"
          />
          <input
            type="text"
            placeholder="Patient Condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="input-style"
          />
          <input
            type="datetime-local"
            placeholder="Date and Time of Pickup"
            value={pickupDateTime}
            onChange={(e) => setPickupDateTime(e.target.value)}
            className="input-style"
          />
          <input
            type="number"
            placeholder="Patient Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="input-style"
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="input-style"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Payment Options */}
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 mb-2">
            Select Payment Method
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {paymentOptions.map((option, idx) => (
              <div
                key={idx}
                className={`border p-3 rounded-xl cursor-pointer shadow-md text-center transition-all ${
                  paymentMethod === option
                    ? "bg-teal-200 ring-2 ring-teal-500 font-semibold"
                    : "bg-white hover:bg-gray-100"
                }`}
                onClick={() => setPaymentMethod(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          className="w-full mt-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:from-blue-500 hover:to-teal-600 transition-all disabled:opacity-50"
          onClick={handlePayment}
          disabled={!phone || !paymentMethod || !customerName}
        >
          {paymentMethod === "Cash on Delivery" ? "Confirm Booking" : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
