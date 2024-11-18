// src/pages/Dashboard.tsx
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Metrics Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Widget 1 */}
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
          <p className="mt-2 text-3xl font-bold text-blue-600">1,234</p>
        </div>

        {/* Widget 2 */}
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Revenue</h2>
          <p className="mt-2 text-3xl font-bold text-green-600">$12,345</p>
        </div>

        {/* Widget 3 */}
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">
            Active Sessions
          </h2>
          <p className="mt-2 text-3xl font-bold text-red-600">456</p>
        </div>
      </div>

      {/* Detailed Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Recent Activity
        </h2>
        <div className="bg-white shadow rounded-lg p-4">
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-gray-700">User signed up</span>
              <span className="text-gray-500">2 hours ago</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">Payment received</span>
              <span className="text-gray-500">5 hours ago</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700">New comment</span>
              <span className="text-gray-500">1 day ago</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
