import React from "react";

export default function PatientModal({ patient, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full">
        <h2 className="text-xl font-bold">{patient.name}</h2>
        <p className="mt-2">Age: {patient.age}</p>
        <p>Contact: {patient.contact}</p>

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl"
        >
          Close
        </button>
      </div>
    </div>
  );
}
