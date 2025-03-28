import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Web3 from "web3";
import { sha256 } from "js-sha256";

function LoginPatient() {
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState("");

  const navigate = useNavigate();

  // Initialize Web3 and contract
  const initWeb3 = async () => {
    if (window.ethereum) {
      try {
        const web3Instance = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);

        const contractABI = [
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "patientAddress",
                type: "address",
              },
            ],
            name: "PasswordUpdated",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "patientAddress",
                type: "address",
              },
            ],
            name: "PatientRegistered",
            type: "event",
          },
          {
            inputs: [
              {
                internalType: "string",
                name: "_fullName",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "_dob",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "_gender",
                type: "string",
              },
              {
                internalType: "string",
                name: "_contactNo",
                type: "string",
              },
              {
                internalType: "string",
                name: "_email",
                type: "string",
              },
              {
                internalType: "string",
                name: "_emergencyContact",
                type: "string",
              },
              {
                internalType: "string",
                name: "_medicalHistory",
                type: "string",
              },
              {
                internalType: "string",
                name: "_bloodGroup",
                type: "string",
              },
              {
                internalType: "string",
                name: "_allergies",
                type: "string",
              },
              {
                internalType: "string",
                name: "_passwordHash",
                type: "string",
              },
            ],
            name: "registerPatient",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "string",
                name: "_newPasswordHash",
                type: "string",
              },
            ],
            name: "updatePassword",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            name: "emailToAddress",
            outputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_patientAddress",
                type: "address",
              },
            ],
            name: "getPatient",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "",
                type: "string",
              },
              {
                internalType: "string",
                name: "",
                type: "string",
              },
              {
                internalType: "string",
                name: "",
                type: "string",
              },
              {
                internalType: "string",
                name: "",
                type: "string",
              },
              {
                internalType: "string",
                name: "",
                type: "string",
              },
              {
                internalType: "string",
                name: "",
                type: "string",
              },
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "string",
                name: "_email",
                type: "string",
              },
            ],
            name: "getPatientByEmail",
            outputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getPatientCount",
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
                internalType: "address",
                name: "_patientAddress",
                type: "address",
              },
            ],
            name: "isRegistered",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
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
            name: "patientAddresses",
            outputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            name: "patients",
            outputs: [
              {
                internalType: "string",
                name: "fullName",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "dob",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "gender",
                type: "string",
              },
              {
                internalType: "string",
                name: "contactNo",
                type: "string",
              },
              {
                internalType: "string",
                name: "email",
                type: "string",
              },
              {
                internalType: "string",
                name: "emergencyContact",
                type: "string",
              },
              {
                internalType: "string",
                name: "medicalHistory",
                type: "string",
              },
              {
                internalType: "string",
                name: "bloodGroup",
                type: "string",
              },
              {
                internalType: "string",
                name: "allergies",
                type: "string",
              },
              {
                internalType: "string",
                name: "passwordHash",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "string",
                name: "_email",
                type: "string",
              },
              {
                internalType: "string",
                name: "_passwordHash",
                type: "string",
              },
            ],
            name: "verifyPassword",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ];

        const contractAddress = "0x35Be442c5A4D96D4A118E0Cac5F0D68abFf76Ac1";
        const contractInstance = new web3Instance.eth.Contract(
          contractABI,
          contractAddress
        );
        setContract(contractInstance);
        setWeb3(web3Instance);
      } catch (error) {
        console.error("Error initializing Web3:", error);
        setError("Failed to connect to blockchain. Please try again.");
      }
    } else {
      setError("Please install MetaMask to use this app!");
    }
  };

  const hashPassword = (password) => {
    return sha256(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      if (!web3 || !contract) {
        await initWeb3();
      }

      // Password-based login
      const patientAddress = await contract.methods
        .getPatientByEmail(formData.userId)
        .call();

      if (patientAddress === "0x0000000000000000000000000000000000000000") {
        throw new Error("User not found");
      }

      const isValid = await contract.methods
        .verifyPassword(formData.userId, hashPassword(formData.password))
        .call();

      if (!isValid) {
        throw new Error("Invalid credentials");
      }

      setSuccess("Login successful! Redirecting...");
      console.log("Patient Login with Password:", {
        userId: formData.userId,
        password: formData.password,
      });

      // Wait a moment to show the success message before redirecting
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      console.error("Login failed:", err);
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Patient Login
        </h1>

        {/* Connection Status */}
        {account && (
          <div className="mb-4 p-2 bg-green-50 text-green-700 text-sm rounded">
            Connected: {account.substring(0, 6)}...{account.substring(38)}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-2 bg-red-50 text-red-700 text-sm rounded">
            {error}
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="mb-4 p-2 bg-green-50 text-green-700 text-sm rounded">
            {success}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email/User ID
            </label>
            <input
              type="text"
              value={formData.userId}
              onChange={(e) =>
                setFormData({ ...formData, userId: e.target.value })
              }
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email or user ID"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg text-white ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <NavLink
            to="/signuppatient"
            className="text-blue-600 hover:text-blue-700 text-sm"
          >
            Don't have an account? Register
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default LoginPatient;
