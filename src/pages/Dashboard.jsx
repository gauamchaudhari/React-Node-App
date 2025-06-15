import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">
        Welcome to the Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-sm text-gray-500">Total Users</h2>
          <p className="text-2xl font-bold text-blue-600">120</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-sm text-gray-500">Total Roles</h2>
          <p className="text-2xl font-bold text-green-600">5</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-sm text-gray-500">Permissions</h2>
          <p className="text-2xl font-bold text-yellow-600">25</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-sm text-gray-500">Active Sessions</h2>
          <p className="text-2xl font-bold text-red-600">12</p>
        </div>
      </div>

      {/* Recent Activity Placeholder */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Recent Activity
        </h2>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>
            🔹 User <strong>Heena</strong> updated profile
          </li>
          <li>
            🔹 Admin <strong>Gautam</strong> added new role
          </li>
          <li>
            🔹 User <strong>Rinku</strong> deleted record
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
