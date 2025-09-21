// src/pages/dashboard.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  // Load user from session storage
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push("/auth"); // If no user found, redirect to login
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    router.push("/auth");
  };

  if (!user) return null; // Don't render until user is loaded

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex flex-col">
      {/* Top Navbar */}
      <header className="w-full bg-white shadow-md px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image
            src="/newLogo.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="text-xl font-bold text-green-700">
            SK Natural Farm Dashboard
          </h1>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow transition"
        >
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-8 py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome, {user.fullName || "User"} 👋
        </h2>
        <p className="text-gray-600 mb-8">
          You are logged in with <span className="font-medium">{user.email}</span>
        </p>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Card 1 */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2 text-green-700">
              Profile
            </h3>
            <p className="text-gray-600 text-sm">
              View and update your personal information.
            </p>
            <button className="mt-3 text-green-600 hover:underline">
              Go to Profile →
            </button>
          </div>

          {/* Example Card 2 */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2 text-green-700">
              Orders
            </h3>
            <p className="text-gray-600 text-sm">
              Track your past and current orders.
            </p>
            <button className="mt-3 text-green-600 hover:underline">
              View Orders →
            </button>
          </div>

          {/* Example Card 3 */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2 text-green-700">
              Support
            </h3>
            <p className="text-gray-600 text-sm">
              Need help? Get in touch with our team.
            </p>
            <button className="mt-3 text-green-600 hover:underline">
              Contact Support →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
