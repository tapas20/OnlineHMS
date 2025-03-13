import Header from '../../Components/Header/Header.jsx';

export default function DoctorDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Doctor Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Doctor Stats Cards */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-blue-800">Appointments</h3>
              <p className="text-3xl font-bold mt-2">12</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-green-800">Patients</h3>
              <p className="text-3xl font-bold mt-2">56</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-purple-800">Earnings</h3>
              <p className="text-3xl font-bold mt-2">$2,340</p>
            </div>
          </div>
          
          {/* Upcoming Appointments */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Upcoming Appointments</h2>
            <div className="space-y-4">
              {/* Appointment Item */}
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">John Doe</h4>
                    <p className="text-sm text-gray-500">10:00 AM - 10:30 AM</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}