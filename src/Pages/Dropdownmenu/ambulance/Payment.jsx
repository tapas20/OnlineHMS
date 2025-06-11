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

  // Example data, in a real app you'd probably use a global state or context to pass this
  const pickupLocation = "123 Main Street";
  const destination = "456 Elm Street";
  const selectedAmbulance = { type: "Basic Life Support", price: 2500 };

  // Function to handle payment
  const handlePayment = () => {
    alert("Payment successful!");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Payment</h2>
      {/* Display selected details */}
      <div className="mb-4">
        <div>
          <strong>Pickup Location:</strong> {pickupLocation}{" "}
          <button
            className="text-teal-600 underline ml-2"
            onClick={() => navigate("/")}
          >
            Change
          </button>
        </div>
        <div>
          <strong>Destination:</strong> {destination}{" "}
          <button
            className="text-teal-600 underline ml-2"
            onClick={() => navigate("/destination")}
          >
            Change
          </button>
        </div>
        <div>
          <strong>Ambulance Type:</strong> {selectedAmbulance.type} - ₹
          {selectedAmbulance.price}{" "}
          <button
            className="text-teal-600 underline ml-2"
            onClick={() => navigate("/ambulance")}
          >
            Change
          </button>
        </div>
      </div>
      {/* Customer Details */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Customer Mobile Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Patient Condition"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="datetime-local"
          placeholder="Date and Time of Pickup"
          value={pickupDateTime}
          onChange={(e) => setPickupDateTime(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="number"
          placeholder="Patient Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      
      {/* Payment Type */}
      <h3 className="font-semibold mt-2">Select Payment Method</h3>
      {paymentOptions.map((option, idx) => (
        <div
          key={idx}
          className={`border p-2 rounded mb-2 cursor-pointer ${
            paymentMethod === option ? "bg-teal-100" : ""
          }`}
          onClick={() => setPaymentMethod(option)}
        >
          {option}
        </div>
      ))}
  
      <button
        className="mt-4 bg-teal-600 text-white px-4 py-2 rounded"
        onClick={handlePayment}
        disabled={!phone || !paymentMethod || !customerName}
      >
        {paymentMethod === "Cash on Delivery" ? "Confirm Booking" : "Pay Now"}
      </button>
    </div>
  );
};

export default PaymentPage;
