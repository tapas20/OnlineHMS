import React, { useState } from "react";
import { FaSearch, FaPrescription, FaStore, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const OnlineMedicineDelivery = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const medicines = [
    { id: 1, name: "Paracetamol", price: 10 },
    { id: 2, name: "Ibuprofen", price: 15 },
    { id: 3, name: "Vitamin C", price: 20 },
  ];

  const stores = [
    { id: 1, name: "HealthPlus Pharmacy", location: "Nearby" },
    { id: 2, name: "MedLife Store", location: "2 km away" },
    { id: 3, name: "PharmaEasy", location: "5 km away" },
  ];

  const addToCart = (medicine) => {
    setCart([...cart, medicine]);
    setTotal(total + medicine.price);
  };

  const handlePrescriptionUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`Prescription "${file.name}" uploaded successfully!`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-10 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="text-center mb-10 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Online Medicine Delivery
        </h1>
        <p className="text-lg text-gray-600">
          Get your medicines delivered to your doorstep quickly and safely.
        </p>
      </header>

      {/* Search Medicine Section */}
      <div className="mb-10 animate-slide-up">
        <div className="flex items-center bg-white p-4 rounded-lg shadow-lg">
          <FaSearch className="text-2xl text-gray-500" />
          <input
            type="text"
            placeholder="Search for medicines..."
            className="w-full p-2 ml-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Scan Prescription Section */}
      <div className="mb-10 animate-slide-up">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaPrescription className="text-2xl text-blue-500 mr-2" />
            Upload Prescription
          </h2>
          <input
            type="file"
            accept="image/*, .pdf"
            onChange={handlePrescriptionUpload}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Recommended Stores Section */}
      <div className="mb-10 animate-slide-up">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaStore className="text-2xl text-green-500 mr-2" />
          Recommended Stores
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store) => (
            <div key={store.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{store.name}</h3>
              <p className="text-gray-600 flex items-center">
                <FaMapMarkerAlt className="text-lg text-orange-500 mr-2" />
                {store.location}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Medicine List Section */}
      <div className="mb-10 animate-slide-up">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaShoppingCart className="text-2xl text-purple-500 mr-2" />
          Add Medicines
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {medicines.map((medicine) => (
            <div key={medicine.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{medicine.name}</h3>
              <p className="text-gray-600">
              ₹{medicine.price}</p>
              <button
                onClick={() => addToCart(medicine)}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 mt-4"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="mb-10 animate-slide-up">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaShoppingCart className="text-2xl text-purple-500 mr-2" />
          Your Cart
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-4">
              <p className="text-gray-800">{item.name}</p>
              <p className="text-gray-600">₹{item.price}</p>
            </div>
          ))}
          <div className="flex justify-between items-center mt-6">
            <p className="text-xl font-semibold text-gray-800">Total</p>
            <p className="text-xl font-semibold text-gray-800">₹{total}</p>
          </div>
          <Link
            to="/delivery-success"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 mt-4 block text-center"
          >
            Proceed to Delivery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnlineMedicineDelivery;