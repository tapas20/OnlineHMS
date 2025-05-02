import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export default function BlockchainLogViewer() {
  return (
   
    <div className='min-h-screen  bg-red-400'> <div className=" bg-gradient-to-br from-gray-100 to-white  p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
        🩸 Blockchain Log Viewer
      </h2>

      <div className="space-y-6">
        {/* First log entry */}
        <div className="border border-gray-200 rounded-xl p-5 bg-white hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-semibold text-gray-700">
              Transaction: TXN123456
            </h3>
            <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600">
              BLOOD001
            </span>
          </div>

          <p className="text-gray-600 mb-2">
            <strong>Hospital:</strong> City Hospital
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Date & Time:</strong> 2025-05-01 14:30
          </p>

          <div className="flex items-center mb-2">
            <span className="mr-2 font-semibold text-gray-700">Donation Chain:</span>
            <CheckCircle className="text-green-500 w-5 h-5" />
          </div>

          <div className="flex items-center mb-2">
            <span className="mr-2 font-semibold text-gray-700">Transfusion Chain:</span>
            <CheckCircle className="text-green-500 w-5 h-5" />
          </div>

          <p className="text-gray-600 mb-2">
            <strong>Source:</strong> Blood Bank A
          </p>
          <p className="text-gray-600">
            <strong>Status:</strong>{' '}
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
              Used for Patient X
            </span>
          </p>
        </div>

        {/* Second log entry */}
        <div className="border border-gray-200 rounded-xl p-5 bg-white hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-semibold text-gray-700">
              Transaction: TXN123457
            </h3>
            <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600">
              BLOOD002
            </span>
          </div>

          <p className="text-gray-600 mb-2">
            <strong>Hospital:</strong> General Hospital
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Date & Time:</strong> 2025-04-28 10:15
          </p>

          <div className="flex items-center mb-2">
            <span className="mr-2 font-semibold text-gray-700">Donation Chain:</span>
            <CheckCircle className="text-green-500 w-5 h-5" />
          </div>

          <div className="flex items-center mb-2">
            <span className="mr-2 font-semibold text-gray-700">Transfusion Chain:</span>
            <XCircle className="text-red-500 w-5 h-5" />
          </div>

          <p className="text-gray-600 mb-2">
            <strong>Source:</strong> Blood Bank B
          </p>
          <p className="text-gray-600">
            <strong>Status:</strong>{' '}
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
              Stored in Inventory
            </span>
          </p>
        </div>
      </div>
    </div>
      </div>

  );
}
