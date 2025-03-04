import { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPatient() {
  const [loginMethod, setLoginMethod] = useState('password'); // 'password' or 'otp'
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    email: '',
    otp: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginMethod === 'password') {
      console.log('Patient Login with Password:', {
        userId: formData.userId,
        password: formData.password,
      });
    } else {
      console.log('Patient Login with OTP:', {
        email: formData.email,
        otp: formData.otp,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Patient Login
        </h1>

        {/* Toggle between Password and OTP Login */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setLoginMethod('password')}
            className={`px-4 py-2 rounded-l-lg ${
              loginMethod === 'password'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Password
          </button>
          <button
            onClick={() => setLoginMethod('otp')}
            className={`px-4 py-2 rounded-r-lg ${
              loginMethod === 'otp'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            OTP
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {loginMethod === 'password' ? (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  User ID
                </label>
                <input
                  type="text"
                  value={formData.userId}
                  onChange={(e) =>
                    setFormData({ ...formData, userId: e.target.value })
                  }
                  className="input-field"
                  placeholder="Enter User ID"
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
                  className="input-field"
                  placeholder="Enter Password"
                  required
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="input-field"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  OTP
                </label>
                <input
                  type="text"
                  value={formData.otp}
                  onChange={(e) =>
                    setFormData({ ...formData, otp: e.target.value })
                  }
                  className="input-field"
                  placeholder="Enter OTP"
                  required
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            to="/patient-register"
            className="text-blue-600 hover:text-blue-700 text-sm"
          >
            Don't have an account? Register
          </Link>
        </div>
      </div>
    </div>
  );
}


export default LoginPatient;
 
 