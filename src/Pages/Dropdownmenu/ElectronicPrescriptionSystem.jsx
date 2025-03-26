// src/components/PrescriptionForm.js
import React, { useState } from 'react';

const PrescriptionForm = () => {
  const [patientName, setPatientName] = useState('');
  const [medication, setMedication] = useState('');
  const [dosage, setDosage] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ patientName, medication, dosage, notes });
  };

  return (
    <form onSubmit={handleSubmit} className="m-10 max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Create Prescription</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Patient Name</label>
        <input
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Medication</label>
        <input
          type="text"
          value={medication}
          onChange={(e) => setMedication(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Dosage</label>
        <input
          type="text"
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
        Submit Prescription
      </button>
    </form>
  );
};

export default PrescriptionForm;