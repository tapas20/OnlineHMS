import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import { useWeb3 } from "../context/Web3Context";

const BlockchainAuthMiddleware = ({ children }) => {
  const navigate = useNavigate();
  const { web3, contract, account } = useWeb3();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      if (web3 && contract && account) {
        try {
          const isRegistered = await contract.methods
            .isRegistered(account)
            .call();

          setIsAuthenticated(isRegistered);
        } catch (error) {
          console.error("Blockchain auth check failed:", error);
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    };

    checkAuth();
  }, [web3, contract, account]);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/loginpatient");
    }
  }, [isAuthenticated, loading, navigate]);

  if (loading) {
    return <div>Loading authentication status from blockchain...</div>;
  }

  return isAuthenticated ? children : null;
};

export default BlockchainAuthMiddleware;
