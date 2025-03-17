import React from 'react'

const AllRecord = () => {
  return (
    <div className="flex justify-center bg-teal-600 font-sans m-0 p-0">
    <div className="w-11/12 max-w-sm bg-white rounded-2xl p-5 m-5 shadow-lg">
        <div className="flex justify-between text-sm">
            <a href="#" className="text-teal-700">&#x2190; My health record</a>
            <a href="#" className="font-bold text-teal-700">All records</a>
        </div>
        <div className="text-center mt-5">
            <img src="/Images/Profile.png" alt="Profile Picture" className="w-20 h-20 rounded-full mx-auto" />
            <h2 className="mt-2 text-lg font-semibold">Moshiur</h2>
            <p className="text-gray-600">ID: 0000001</p>
        </div>
        <div className="mt-5 space-y-3  ">
            <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                <span className="text-2xl mr-4">&#10024;</span>
                <div>
                    <h3 className="font-semibold">Allergies</h3>
                    <p className="text-gray-600">4 records found</p>
                </div>
            </div>
          
            <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                <span className="text-2xl mr-4">&#128657;</span>
                <div>
                    <h3 className="font-semibold">Diagnoses/Conditions</h3>
                    <p className="text-gray-600">3 records found</p>
                </div>
            </div>
            <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                <span className="text-2xl mr-4">&#128138;</span>
                <div>
                    <h3 className="font-semibold">Medications & Supplements</h3>
                    <p className="text-gray-600">4 records found</p>
                </div>
            </div>
            <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                <span className="text-2xl mr-4">&#127777;</span>
                <div>
                    <h3 className="font-semibold">Symptoms</h3>
                    <p className="text-gray-600">2 records found</p>
                </div>
            </div>
            <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                <span className="text-2xl mr-4">&#128300;</span>
                <div>
                    <h3 className="font-semibold">Lab Tests</h3>
                    <p className="text-gray-600">4 records found</p>
                </div>
            </div>
            <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                <span className="text-2xl mr-4">&#128376;</span>
                <div>
                    <h3 className="font-semibold">DNA Tests</h3>
                    <p className="text-gray-600">2 records found</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AllRecord
