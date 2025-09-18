import React, { createContext, useContext, useState, useEffect } from "react";

const PatientsContext = createContext();

export const PatientsProvider = ({ children }) => {
  // ✅ Load patients from localStorage (if available)
  const [patients, setPatients] = useState(() => {
    const saved = localStorage.getItem("patients");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Keep localStorage updated whenever patients change
  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  // ✅ Add a new patient
  const addPatient = (patient) => {
    setPatients((prev) => [...prev, { ...patient, id: Date.now() }]);
  };

  // ✅ Remove a specific patient
  const removePatient = (id) => {
    setPatients((prev) => prev.filter((p) => p.id !== id));
  };

  // ✅ Clear all patients (optional)
  const clearPatients = () => {
    setPatients([]);
  };

  return (
    <PatientsContext.Provider
      value={{ patients, addPatient, removePatient, clearPatients }}
    >
      {children}
    </PatientsContext.Provider>
  );
};

// ✅ Custom hook to use patients context easily
export const usePatients = () => useContext(PatientsContext);
