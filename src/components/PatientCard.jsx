import React from "react";
import { usePatients } from "../contexts/PatientsContext";

export default function PatientCard({ patient }) {
  const { removePatient } = usePatients();

  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col">
      <h3 className="text-lg font-semibold">{patient.name}</h3>
      <p className="text-gray-600 text-sm">Age: {patient.age}</p>
      <p className="text-gray-600 text-sm">Condition: {patient.condition}</p>

      <div className="mt-3 flex justify-between">
        <button className="text-blue-600 hover:underline">
          View Details
        </button>

        <button
          onClick={() => removePatient(patient.id)}
          className="text-red-600 hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
