import React, { useState, useMemo } from "react";
import PatientCard from "../components/PatientCard";
import { usePatients } from "../contexts/PatientsContext";

export default function Patients() {
  const { patients } = usePatients();
  const [search, setSearch] = useState("");

  const filtered = useMemo(() =>
    patients.filter(p => p.name.toLowerCase().includes(search.toLowerCase())),
    [patients, search]
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-700">Patients</h2>
        <input
          className="border rounded px-3 py-1"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => (
          <PatientCard key={p.id} patient={p} />
        ))}
      </div>
    </div>
  );
}
