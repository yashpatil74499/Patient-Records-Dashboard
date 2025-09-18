import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">Patient Dashboard</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/patients" className="hover:text-gray-200">
            Patients
          </Link>
          <Link to="/reports" className="hover:text-gray-200">
            Reports
          </Link>
        </div>
      </div>
    </nav>
  );
}
