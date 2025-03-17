import React from 'react'

const Requesr = () => {
  const requests = [1, 2, 3, 4, 5]; 
  return (
    <div className='flex flex-col items-center justify-center m-10'>
    <div className="p-4 w-100 ">
     <div className="w-full h-[50px] bg-red-500 rounded-b-3xl flex flex-col items-center text-white">
      <h1 className='mt-3'>Requests</h1>
      </div>
    <div className="bg-gray-100 rounded-t-lg p-4 w-full ">
      {requests.map((_, index) => (
        <div key={index} className="border-b py-4 flex gap-6 mt-5">
          <div>
             <p className="text-lg font-semibold text-gray-800">Requester #1234</p>
          <a href="#" className="text-red-500 text-sm">View Details</a>
          </div>
         
          <div className="mt-2 flex space-x-2">
            <button className="bg-red-500 text-white px-4 py-2 rounded">Accept</button>
            <button className="border border-gray-400 px-4 py-2 rounded">Decline</button>
          </div>
        </div>
      ))}
    </div>
  </div> 
    </div>
  
  )
}

export default Requesr
