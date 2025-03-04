import Header from '../../Components/Header/Header.jsx';

export default function PatientDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Patient Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Patient Stats Cards */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-blue-800">Upcoming Appointments</h3>
              <p className="text-3xl font-bold mt-2">2</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-green-800">Medical Records</h3>
              <p className="text-3xl font-bold mt-2">5</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-purple-800">Prescriptions</h3>
              <p className="text-3xl font-bold mt-2">3</p>
            </div>
          </div>
          
          {/* Recent Activity */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {/* Activity Item */}
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Appointment with Dr. Smith</h4>
                    <p className="text-sm text-gray-500">Completed on 12/03/2023</p>
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