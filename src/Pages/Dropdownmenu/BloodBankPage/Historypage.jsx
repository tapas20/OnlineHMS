import React from 'react';

const Historypage = () => {
  const historyData = [1, 2, 3, 4, 5];
  return (
    <div className='flex flex-col items-center min-h-screen justify-center' style={{ backgroundColor: "#FA4848" }}>
      <div className="p-4 w-full max-w-2xl">
        <div className="w-full h-[50px] bg-red-700 rounded-b-3xl flex items-center justify-center text-white">
          <h1 className='text-lg sm:text-xl'>History</h1>
        </div>
        <div className="bg-white rounded-t-lg p-4 shadow-md">
          <div className="flex border-b-2 border-gray-300 mb-2 gap-2 sm:gap-5">
            <button className="border border-gray-400 px-3 sm:px-4 py-2 flex-1 text-sm sm:text-base">Donated</button>
            <button className="bg-red-500 text-white px-3 sm:px-4 py-2 flex-1 text-sm sm:text-base">Receiver</button>
          </div>
          {historyData.map((_, index) => (
            <div key={index} className="border-b py-3 sm:py-4 flex flex-col sm:flex-row justify-between">
              <div>
                <p className="font-semibold text-sm sm:text-base">Date: 11/12/18</p>
                <p className="text-gray-600 text-xs sm:text-sm">Location: 123, XYZ Apt</p>
              </div>
              <div className="text-left sm:text-right mt-2 sm:mt-0">
                <p className="font-semibold text-sm sm:text-base">Receiver ID: #43EQ</p>
                <p className="text-gray-600 text-xs sm:text-sm">Qty: 0.6 ounces</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Historypage;