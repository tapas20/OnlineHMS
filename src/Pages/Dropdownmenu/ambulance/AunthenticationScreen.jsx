import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const AunthenticationScreen = () => {
    const [code, setCode] = useState(['', '', '', '']);

    const handleChange = (index, value) => {
      if (/^[0-9]?$/.test(value)) {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
        if (value && index < 3) {
          document.getElementById(`code-${index + 1}`).focus();
        }
      }
    };
  
    const handleResend = () => {
      alert('Verification code resent!');
    };
  
    const handleSubmit = () => {
      alert(`Code entered: ${code.join('')}`);
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Verification</h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            We’ve sent you the verification code on mobile number.
          </p>
          <div className="flex justify-between mb-4 space-x-2">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-12 h-12 md:w-16 md:h-16 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            ))}
          </div>
          <button
            onClick={handleResend}
            className="text-red-500 text-sm mb-6 hover:underline"
          >
            Re-send code
          </button>
         <NavLink to="/resetpassword">
          <button
            onClick={handleSubmit}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg text-lg font-medium"
          >
            Continue
          </button>
          </NavLink>
          {/* Optional: Custom mobile-style number pad (hidden on desktop) */}
          <div className="mt-8 grid grid-cols-3 gap-2 md:hidden">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, '⌫'].map((item, idx) => (
              <button
                key={idx}
                className="bg-gray-200 py-4 rounded-lg text-xl font-medium"
                onClick={() => {
                  if (item === '⌫') {
                    const lastFilled = [...code].reverse().findIndex((c) => c !== '');
                    if (lastFilled !== -1) {
                      const indexToClear = 3 - lastFilled;
                      handleChange(indexToClear, '');
                    }
                  } else if (typeof item === 'number') {
                    const nextEmpty = code.findIndex((c) => c === '');
                    if (nextEmpty !== -1) {
                      handleChange(nextEmpty, item.toString());
                    }
                  }
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
  );
}

export default AunthenticationScreen
