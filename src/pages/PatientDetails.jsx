import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePatients } from "../contexts/PatientsContext";

export default function PatientDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getPatientById } = usePatients();
  const patient = getPatientById(id);

  if (!patient) {
    return (
      <div className="bg-white p-6 rounded shadow">
        <p>Patient not found.</p>
        <button onClick={() => navigate(-1)} className="mt-3 px-3 py-1 bg-gray-200 rounded">Go Back</button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded shadow max-w-2xl">
      <button onClick={() => navigate(-1)} className="text-sm text-blue-500 mb-4">← Back</button>
      <h2 className="text-2xl font-bold mb-2">{patient.name}</h2>
      <div className="text-gray-700 space-y-2">
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Contact:</strong> {patient.contact}</p>
        <p><strong>Email:</strong> {patient.email || "—"}</p>
        <p><strong>Address:</strong> {patient.address || "—"}</p>
        <p><strong>Condition:</strong> {patient.condition || "—"}</p>
        {/* Add more fields if you have them */}
      </div>
    </div>
  );
}
