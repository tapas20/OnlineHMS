import React, { useState } from "react";

const AIPrescriptionGenerator = () => {
  const [formData, setFormData] = useState({
    doctorName: "",
    patientName: "",
    age: "",
    symptoms: "",
    medicines: "",
    notes: "",
  });

  const [generatedPrescription, setGeneratedPrescription] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGeneratedPrescription(formData);
  };

  return (
    <div className="m-10 max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">AI Prescription Generator</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="doctorName"
          placeholder="Doctor's Name"
          value={formData.doctorName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="patientName"
          placeholder="Patient's Name"
          value={formData.patientName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="symptoms"
          placeholder="Symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        ></textarea>
        <textarea
          name="medicines"
          placeholder="Prescribed Medicines"
          value={formData.medicines}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        ></textarea>
        <textarea
          name="notes"
          placeholder="Additional Notes"
          value={formData.notes}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        ></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">
          Generate Prescription
        </button>
      </form>
      {generatedPrescription && (
        <div className="mt-6 p-4 bg-white rounded shadow-md">
          <h3 className="text-xl font-semibold">Prescription</h3>
          <p><strong>Doctor:</strong> {generatedPrescription.doctorName}</p>
          <p><strong>Patient:</strong> {generatedPrescription.patientName}, {generatedPrescription.age} years</p>
          <p><strong>Symptoms:</strong> {generatedPrescription.symptoms}</p>
          <p><strong>Medicines:</strong> {generatedPrescription.medicines}</p>
          {generatedPrescription.notes && <p><strong>Notes:</strong> {generatedPrescription.notes}</p>}
        </div>
      )}
    </div>
  );
};

export default AIPrescriptionGenerator;
