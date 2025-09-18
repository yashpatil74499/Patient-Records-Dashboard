import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-lg p-4 hidden sm:block">
        <h1 className="text-2xl font-bold mb-6 text-blue-600">Dashboard</h1>
        <nav className="flex flex-col space-y-3">
          <Link to="/" className="hover:bg-blue-100 p-2 rounded-lg">Home</Link>
          <Link to="/patients" className="hover:bg-blue-100 p-2 rounded-lg">Patients</Link>
          <Link to="/patients/add" className="hover:bg-blue-100 p-2 rounded-lg">Add Patient</Link>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
