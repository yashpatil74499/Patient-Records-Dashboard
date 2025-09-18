import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePatients } from "../contexts/PatientsContext";

export default function AddPatient() {
  const { addPatient } = usePatients();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    contact: "",
    email: "",
    address: "",
    condition: ""
  });

  function onChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!form.name) return alert("Please enter name");
    addPatient({ ...form, age: Number(form.age || 0) });
    navigate("/patients");
  }

  return (
    <div className="bg-white p-6 rounded shadow max-w-xl">
      <h2 className="text-xl font-bold mb-4">Add New Patient</h2>
      <form onSubmit={onSubmit} className="space-y-3">
        <input name="name" value={form.name} onChange={onChange} placeholder="Name" className="w-full border rounded px-3 py-2" />
        <input name="age" type="number" value={form.age} onChange={onChange} placeholder="Age" className="w-full border rounded px-3 py-2" />
        <input name="contact" value={form.contact} onChange={onChange} placeholder="Contact" className="w-full border rounded px-3 py-2" />
        <input name="email" value={form.email} onChange={onChange} placeholder="Email" className="w-full border rounded px-3 py-2" />
        <input name="address" value={form.address} onChange={onChange} placeholder="Address" className="w-full border rounded px-3 py-2" />
        <input name="condition" value={form.condition} onChange={onChange} placeholder="Condition" className="w-full border rounded px-3 py-2" />

        <div className="flex gap-2">
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Add Patient</button>
          <button type="button" onClick={() => navigate(-1)} className="bg-gray-200 px-4 py-2 rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
}
