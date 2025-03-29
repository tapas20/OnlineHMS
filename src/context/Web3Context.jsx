import { createContext, useContext, useState, useEffect } from "react";
import Web3 from "web3";

const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const initWeb3 = async () => {
    if (window.ethereum) {
      try {
        const web3Instance = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);

        // Initialize your contract
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
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setAccount("");
  };

  // Handle account changes
  useEffect(() => {
    const handleAccountsChanged = (accounts) => {
      if (accounts.length === 0) {
        logout();
      } else {
        setAccount(accounts[0]);
      }
    };

    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
      return () => {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
      };
    }
  }, []);

  return (
    <Web3Context.Provider
      value={{
        web3,
        contract,
        account,
        isAuthenticated,
        loading,
        login,
        logout,
        initWeb3,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);
