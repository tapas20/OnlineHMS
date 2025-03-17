import React from 'react'

const Historypage = () => {
  const historyData = [1, 2, 3, 4, 5];
  return (
    <div className='flex flex-col items-center justify-center m-10'>
     <div className="p-4 w-100 ">
     <div className="w-full h-[50px] bg-red-500 rounded-b-3xl flex flex-col items-center text-white">
      <h1 className='mt-3'>History</h1>
      </div>
    <div className="bg-white rounded-t-lg p-4">
      <div className="flex border-b-2 border-none mb-2 gap-5">
        
        <button className="border border-gray-400 px-4 py-2 flex-1">Donated</button>
        <button className="bg-red-500 text-white px-4 py-2 flex-1">Receiver</button>
      </div>
      {historyData.map((_, index) => (
        <div key={index} className="border-b py-4 flex justify-between">
          <div>
            <p className="font-semibold">Date : 11/12/18</p>
            <p className="text-gray-600">Location : 123, XYZ Apt</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">Receiver ID: #43EQ</p>
            <p className="text-gray-600">Qty: 0.6 ounces</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>
  )
}

export default Historypage
