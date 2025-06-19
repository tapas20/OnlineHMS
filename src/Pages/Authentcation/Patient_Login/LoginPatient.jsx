import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { sha256 } from "js-sha256";

function LoginPatient() {
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  // Simulated login function (replace with real logic)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Simulate async login
    setTimeout(() => {
      // Demo: Accept any userId/password where password is "password"
      if (!formData.userId) {
        setError("User ID is required");
      } else if (formData.password !== "password") {
        setError("Invalid credentials");
      } else {
        setSuccess("Login successful! Redirecting...");
        setTimeout(() => {
          navigate("/patientdash");
        }, 1500);
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Patient Login
        </h1>

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
