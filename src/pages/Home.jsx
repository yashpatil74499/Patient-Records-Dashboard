export default function Home() {
  return (
    <div
      className="min-h-screen flex justify-center items-start pt-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome!</h1>
        <p className="text-gray-700">
          This is your patient records dashboard. Use the sidebar to navigate.
        </p>
      </div>
    </div>
  );
}
