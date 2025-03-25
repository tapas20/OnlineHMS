// OnlineHomeServiceTreatment.jsx
import { useState } from 'react';

const OnlineHomeServiceTreatment = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [address, setAddress] = useState({
    street: '',
    colony: '',
    city: '',
    state: '',
    country: '',
    phone: ''
  });
  const [isAddressFormVisible, setIsAddressFormVisible] = useState(false);
  const [isAddressAdded, setIsAddressAdded] = useState(false);

  const services = [
    {
      id: 1,
      name: 'Home Nursing',
      price: 5999,
      icon: 'fa-broom',
      description: ' wound care, injections, medication management, and post-surgica',
      duration: '2 hrs',
      color: 'text-indigo-500'
    },
    {
      id: 2,
      name: 'Elderly Care Services',
      price: 3999,
      icon: 'fa-wrench',
      description: ' seniors, including assistance with daily activities, mobility',
      duration: '1 hr',
      color: 'text-teal-500'
    },
    {
      id: 3,
      name: 'Newborn Care',
      price: 4999,
      icon: 'fa-bolt',
      description: ' breastfeeding support, newborn care',
      duration: '1.5 hrs',
      color: 'text-yellow-500'
    },
    {
      id: 4,
      name: 'Mental Health Counseling',
      price: 7999,
      icon: 'fa-bug',
      description: 'stress, anxiety, depression, and other mental health issues',
      duration: '2.5 hrs',
      color: 'text-red-500'
    },
    {
      id: 5,
      name: 'Blood Sample Collection',
      price: 1499,
      icon: 'fa-vial',
      description: 'Home lab sample pickup',
      duration: '30 mins',
      color: 'text-pink-500'
    },
    {
      id: 6,
      name: 'Diabetes Check',
      price: 1999,
      icon: 'fa-syringe',
      description: 'Blood sugar monitoring',
      duration: '45 mins',
      color: 'text-purple-500'
    },
    {
      id: 7,
      name: 'Pregnancy Care',
      price: 9999,
      icon: 'fa-baby',
      description: 'Special service for pregnant women',
      duration: '3 hrs',
      color: 'text-orange-500'
    },
    {
      id: 8,
      name: 'Gardening',
      price: 3499,
      icon: 'fa-leaf',
      description: 'Lawn & plant care',
      duration: '2 hrs',
      color: 'text-green-500'
    }
  ];

  const handleBooking = (service) => {
    if (!isAddressAdded) {
      alert('Please add your address first!');
      return;
    }
    setSelectedService(service);
  };

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleAddAddress = () => {
    const isAddressComplete = Object.values(address).every((field) => field.trim() !== '');
    if (isAddressComplete) {
      setIsAddressAdded(true);
      setIsAddressFormVisible(false);
    } else {
      alert('Please fill in all address fields!');
    }
  };

  const toggleAddressForm = () => {
    setIsAddressFormVisible(!isAddressFormVisible);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-purple-100 to-pink-100 p-4 md:p-8">
      {/* Header Section */}
      <div className="text-center mb-12 animate-fade-in-down">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Home Service Treatments
        </h1>
        <p className="text-base sm:text-lg text-gray-700">Professional care at your doorstep</p>
      </div>

      {/* Add Address Button */}
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <button
          onClick={toggleAddressForm}
          className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
            isAddressAdded
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600'
          }`}
        >
          {isAddressAdded ? 'Address Added' : 'Add Address'}
          <i className={`fas ${isAddressAdded ? 'fa-check' : 'fa-map-marker-alt'} ml-2`}></i>
        </button>
      </div>

      {/* Address Form (Hidden until toggled) */}
      {isAddressFormVisible && (
        <div className="max-w-3xl mx-auto mb-12 bg-white rounded-2xl shadow-xl p-6 animate-slide-up">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Delivery Address</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="street"
              placeholder="Street"
              value={address.street}
              onChange={handleAddressChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
            />
            <input
              type="text"
              name="colony"
              placeholder="Colony/Area"
              value={address.colony}
              onChange={handleAddressChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleAddressChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={address.state}
              onChange={handleAddressChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={address.country}
              onChange={handleAddressChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={address.phone}
              onChange={handleAddressChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          <button
            onClick={handleAddAddress}
            className="mt-4 w-full bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300"
          >
            Save Address
          </button>
        </div>
      )}

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 animate-fade-in-up"
          >
            <i className={`fas ${service.icon} text-4xl ${service.color} mb-4 animate-bounce`}></i>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{service.description}</p>
            <p className="text-gray-500 text-sm mb-4">
              <i className="fas fa-clock mr-1"></i> {service.duration}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-green-600">₹{service.price}</span>
              <button
                onClick={() => handleBooking(service)}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Delivery Status Section */}
      {selectedService && (
        <div className="mt-12 max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6 animate-slide-up">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Booking Confirmation</h2>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <i className="fas fa-shipping-fast text-5xl text-blue-600 animate-pulse"></i>
            <div>
              <p className="text-lg font-semibold text-gray-800">
                {selectedService.name} is on the way!
              </p>
              <p className="text-gray-600">
                To: {address.street}, {address.colony}, {address.city}, {address.state}, {address.country}
              </p>
              <p className="text-gray-600">Phone: {address.phone}</p>
              <p className="text-gray-500">
                Estimated Arrival: <i className="fas fa-truck text-blue-500 mr-1 animate-bounce"></i> 30-45 mins
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center animate-fade-in">
          <i className="fas fa-shield-alt text-4xl text-indigo-500 mb-4 animate-spin-slow"></i>
          <h3 className="text-xl font-semibold text-gray-800">Trusted Pros</h3>
          <p className="text-gray-600">Verified experts only</p>
        </div>
        <div className="text-center animate-fade-in">
          <i className="fas fa-calendar-check text-4xl text-teal-500 mb-4 animate-pulse"></i>
          <h3 className="text-xl font-semibold text-gray-800">Instant Booking</h3>
          <p className="text-gray-600">Schedule instantly</p>
        </div>
        <div className="text-center animate-fade-in">
          <i className="fas fa-rupee-sign text-4xl text-green-500 mb-4 animate-bounce"></i>
          <h3 className="text-xl font-semibold text-gray-800">Affordable Rates</h3>
          <p className="text-gray-600">Best prices in town</p>
        </div>
        <div className="text-center animate-fade-in">
          <i className="fas fa-headset text-4xl text-purple-500 mb-4 animate-pulse"></i>
          <h3 className="text-xl font-semibold text-gray-800">24/7 Support</h3>
          <p className="text-gray-600">Always here to help</p>
        </div>
      </div>
    </div>
  );
};

export default OnlineHomeServiceTreatment;