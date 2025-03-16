import React, { useState, useEffect } from "react";
import Web3 from "web3";

const AppointmentForm = () => {
  const [doctorAddress, setDoctorAddress] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [appointmentId, setAppointmentId] = useState("");
  const [appointmentDetails, setAppointmentDetails] = useState(null);

  // Contract ABI and Address
  const contractABI = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "address",
          name: "patient",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "doctor",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "timestamp",
          type: "uint256",
        },
      ],
      name: "AppointmentBooked",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "AppointmentCancelled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newTimestamp",
          type: "uint256",
        },
      ],
      name: "AppointmentRescheduled",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_doctor",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_timestamp",
          type: "uint256",
        },
      ],
      name: "bookAppointment",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
      ],
      name: "cancelAppointment",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "appointmentCount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "appointments",
      outputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "patient",
          type: "address",
        },
        {
          internalType: "address",
          name: "doctor",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "timestamp",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "status",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
      ],
      name: "getAppointment",
      outputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "patient",
          type: "address",
        },
        {
          internalType: "address",
          name: "doctor",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "timestamp",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "status",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  const contractAddress = "0x58eEB2090Bb45AeC2A5a0C3C12847d713124318f";

  // Initialize Web3 and Contract
  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        try {
          const web3 = new Web3(window.ethereum);
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const accounts = await web3.eth.getAccounts();
          setAccount(accounts[0]);

          const contractInstance = new web3.eth.Contract(
            contractABI,
            contractAddress
          );
          setContract(contractInstance);
        } catch (error) {
          console.error("Error initializing Web3:", error);
          alert("Failed to connect to MetaMask. Please try again.");
        }
      } else {
        alert("Please install MetaMask to use this app!");
      }
    };

    initWeb3();
  }, []);

  // Function to book an appointment
  const bookAppointment = async () => {
    if (!doctorAddress || !date) {
      alert("Please fill in all fields");
      return;
    }

    // Convert date to Unix timestamp
    const timestamp = Math.floor(new Date(date).getTime() / 1000);

    try {
      setLoading(true);

      // Call the `bookAppointment` function
      await contract.methods
        .bookAppointment(doctorAddress, timestamp)
        .send({ from: account, gas: 300000 });

      alert("Appointment booked successfully!");
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Function to cancel an appointment
  const cancelAppointment = async () => {
    const appointmentId = prompt("Enter Appointment ID:");

    if (!appointmentId || isNaN(appointmentId)) {
      alert("Enter a valid appointment ID.");
      return;
    }

    try {
      setLoading(true);

      // Call the `cancelAppointment` function
      await contract.methods
        .cancelAppointment(appointmentId)
        .send({ from: account, gas: 300000 });

      alert("Appointment cancelled successfully!");
    } catch (error) {
      console.error("Error cancelling appointment:", error);
      alert("Failed to cancel appointment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch appointment details
  const fetchAppointmentDetails = async () => {
    if (!appointmentId || isNaN(appointmentId)) {
      alert("Enter a valid appointment ID.");
      return;
    }

    try {
      setLoading(true);

      // Call the `getAppointment` function
      const appointment = await contract.methods
        .getAppointment(appointmentId)
        .call();

      // Convert BigInt values to strings or numbers
      const appointmentDate = new Date(
        Number(appointment.timestamp) * 1000
      ).toLocaleString();

      // Set appointment details
      setAppointmentDetails({
        id: appointment.id.toString(), // Convert BigInt to string
        patient: appointment.patient,
        doctor: appointment.doctor,
        date: appointmentDate,
        status: appointment.status,
      });
    } catch (error) {
      console.error("Error fetching appointment details:", error);
      alert("Failed to fetch appointment details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-5 max-w-lg mx-auto p-6 bg-white">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Book Appointment
      </h2>

      <div className="flex flex-col gap-4">
        {/* Doctor Address Input */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Doctor Address *
          </label>
          <input
            type="text"
            placeholder="Enter Doctor's Ethereum Address"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={doctorAddress}
            onChange={(e) => setDoctorAddress(e.target.value)}
          />
        </div>

        {/* Preferred Date Selection */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Preferred Date *
          </label>
          <input
            type="date"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Book Appointment Button */}
        <button
          onClick={bookAppointment}
          disabled={loading}
          className="cursor-pointer w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {loading ? "Booking..." : "Book Appointment"}
        </button>

        {/* Cancel Appointment Button */}
        <button
          onClick={cancelAppointment}
          disabled={loading}
          className="cursor-pointer w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition disabled:bg-gray-400"
        >
          {loading ? "Cancelling..." : "Cancel Appointment"}
        </button>

        {/* Fetch Appointment Details */}
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            See Appointment Details
          </h2>
          <label className="block text-gray-700 font-medium mb-1">
            Appointment ID *
          </label>
          <input
            type="text"
            placeholder="Enter Appointment ID"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={appointmentId}
            onChange={(e) => setAppointmentId(e.target.value)}
          />
          <button
            onClick={fetchAppointmentDetails}
            disabled={loading}
            className="cursor-pointer w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition disabled:bg-gray-400 mt-2"
          >
            {loading ? "Fetching..." : "Fetch Appointment Details"}
          </button>
        </div>

        {/* Display Appointment Details */}
        {appointmentDetails && (
          <div className="mt-4 p-4 border rounded-lg bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800">
              Appointment Details
            </h3>
            <p>
              <strong>ID:</strong> {appointmentDetails.id}
            </p>
            <p>
              <strong>Patient:</strong> {appointmentDetails.patient}
            </p>
            <p>
              <strong>Doctor:</strong> {appointmentDetails.doctor}
            </p>
            <p>
              <strong>Date:</strong> {appointmentDetails.date}
            </p>
            <p>
              <strong>Status:</strong> {appointmentDetails.status}
            </p>
          </div>
        )}
      </div>

      {/* Display Connected Account */}
      <div className="mt-4 text-gray-700">
        <strong>Connected Account:</strong> {account || "Not Connected"}
      </div>
    </div>
  );
};

export default AppointmentForm;
