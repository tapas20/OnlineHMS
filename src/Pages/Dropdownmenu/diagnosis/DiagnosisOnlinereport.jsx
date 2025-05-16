import React from "react";
import Navbar from "./DiagnosisNavbar";

const DiagnosisReport = () => {
  const dummyReports = [
    {
      id: "REP123456",
      patientName: "Anna Rout",
      testType: "Blood Test",
      date: "2025-05-20",
      result: "Hemoglobin: 13.5 g/dL\nWBC: 6000 /mm³\nPlatelets: 250,000 /mm³",
      remarks: "All values within normal range.",
      doctor: "Dr. Meena Sahu",
    },
    {
      id: "REP123789",
      patientName: "Amma Rout",
      testType: "Sugar Test",
      date: "2025-05-10",
      result: "Fasting Sugar: 95 mg/dL\nPostprandial: 125 mg/dL",
      remarks: "Normal sugar levels.",
      doctor: "Dr. A. Mishra",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">
          My Test Reports
        </h2>

        {dummyReports.map((report) => (
          <div
            key={report.id}
            className="bg-white shadow-md rounded-lg p-6 mb-6 border-l-4 border-green-500"
          >
            <div className="mb-2 text-sm text-gray-500">
              Report ID: {report.id}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {report.testType}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Patient:</strong> {report.patientName}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Date:</strong> {report.date}
            </p>
            <div className="bg-gray-100 p-4 rounded mb-2 whitespace-pre-wrap">
              <strong className="block text-gray-700 mb-2">Test Result:</strong>
              {report.result}
            </div>
            <p className="text-sm mb-1">
              <strong>Remarks:</strong> {report.remarks}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Verified by:</strong> {report.doctor}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiagnosisReport;
