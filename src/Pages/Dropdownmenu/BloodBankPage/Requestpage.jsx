import React from 'react';

const Request = () => {
  const requests = [1, 2, 3, 4, 5]; 

  return (
    <div className='flex flex-col items-center min-h-screen justify-center ' style={{ backgroundColor: "#FA4848" }}>
      <div className='p-4 w-full   max-w-2xl'>
        <div className='w-full h-[50px] bg-red-700 rounded-b-3xl flex items-center justify-center text-white'>
          <h1 className='text-lg md:text-xl'>Requests</h1>
        </div>
        <div className='bg-gray-100 rounded-t-lg p-4 w-full'>
          {requests.map((_, index) => (
            <div key={index} className='border-b py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
              <div>
                <p className='text-lg font-semibold text-gray-800'>Requester #1234</p>
                <a href='#' className='text-red-500 text-sm'>View Details</a>
              </div>
              <div className='flex space-x-2'>
                <button className='bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto'>Accept</button>
                <button className='border border-gray-400 px-4 py-2 rounded w-full sm:w-auto'>Decline</button>
              </div>
            </div>
          ))}
        </div>
      </div> 
    </div>
  );
}

export default Request;
