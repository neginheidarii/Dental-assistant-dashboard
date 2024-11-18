import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie, PolarArea, Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [filterType, setFilterType] = useState("");

  const handleFilterClick = (type: string) => {
    setFilterType(type);
  };

  const handleDateChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const appointmentsData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Total Appointments",
        data: [50, 70, 100, 120, 200, 150, 80, 90, 60, 110, 130, 170],
        backgroundColor: "#4CAF50",
        borderColor: "#388E3C",
        borderWidth: 1,
      },
    ],
  };

  const callsReroutedData = {
    labels: ["Rerouted Calls", "Direct Calls"],
    datasets: [
      {
        label: "Calls Rerouted",
        data: [60, 40],
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  const aiDatabaseRefData = {
    labels: ["Profile Queries", "Order Lookups", "Billing Info"],
    datasets: [
      {
        label: "AI Database References",
        data: [1200, 800, 500],
        backgroundColor: ["#FFCE56", "#4BC0C0", "#FF6384"],
      },
    ],
  };

  const billPaymentStatusData = {
    labels: ["Active", "Deactivated"],
    datasets: [
      {
        label: "Bill Payment Status",
        data: [75, 25],
        backgroundColor: ["#4CAF50", "#F44336"],
      },
    ],
  };

  const ticketData = {
    labels: ["Open", "Closed", "Pending"],
    datasets: [
      {
        label: "Ticket Status",
        data: [30, 50, 20],
        backgroundColor: ["#FFCE56", "#4BC0C0", "#FF6384"],
      },
    ],
  };

  const activeStatusData = {
    labels: ["Active", "Deactivated"],
    datasets: [
      {
        label: "Account Status",
        data: [70, 30],
        backgroundColor: ["#4CAF50", "#F44336"],
      },
    ],
  };

  const phoneNumberStats = {
    labels: ["Active Numbers", "Inactive Numbers", "Unverified Numbers"],
    datasets: [
      {
        label: "Phone Number Breakdown",
        data: [7000, 2000, 876],
        backgroundColor: ["#4CAF50", "#F44336", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Filter Section */}
      <div className="mb-6 bg-white p-4 shadow rounded-lg flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-700 mb-4 md:mb-0">
          Filter Data:
        </h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleFilterClick("Weekly")}
            className={`px-4 py-2 rounded-lg ${
              filterType === "Weekly" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => handleFilterClick("Monthly")}
            className={`px-4 py-2 rounded-lg ${
              filterType === "Monthly"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Monthly
          </button>
          <div className="relative">
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              className="px-4 py-2 rounded-lg bg-gray-200"
              dateFormat="MMMM d, yyyy"
              placeholderText="Select Date Range"
            />
          </div>
        </div>
      </div>

      {/* Widgets Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tickets Open Visualization */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">
            Tickets Status
          </h2>
          <PolarArea data={ticketData} />
          <div className="mt-4 text-sm text-gray-600">
            <p>
              <strong>Open:</strong> 30 tickets
            </p>
            <p>
              <strong>Closed:</strong> 50 tickets
            </p>
            <p>
              <strong>Pending:</strong> 20 tickets
            </p>
          </div>
        </div>

        {/* Active/Deactivated Accounts */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">
            Account Status
          </h2>
          <Pie data={activeStatusData} />
          <div className="mt-4 text-sm text-gray-600">
            <p>
              <strong>Active:</strong> 70%
            </p>
            <p>
              <strong>Deactivated:</strong> 30%
            </p>
          </div>
        </div>

        {/* Phone Numbers */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Phone Numbers</h2>
          <Bar data={phoneNumberStats} options={{ indexAxis: "y" }} />
          <div className="mt-4 text-sm text-gray-600">
            <p>
              <strong>Total Numbers:</strong> 9,876
            </p>
            <p>
              <strong>Active:</strong> 7,000
            </p>
            <p>
              <strong>Inactive:</strong> 2,000
            </p>
            <p>
              <strong>Unverified:</strong> 876
            </p>
          </div>
        </div>

        {/* Total Appointments */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">
            Total Appointments (Monthly)
          </h2>
          <Bar data={appointmentsData} />
        </div>

        {/* Calls Rerouted */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">
            Calls Rerouted
          </h2>
          <Pie data={callsReroutedData} />
          <div className="mt-4 text-sm text-gray-600">
            <p>
              <strong>Rerouted Calls:</strong> 60%
            </p>
            <p>
              <strong>Direct Calls:</strong> 40%
            </p>
          </div>
        </div>

        {/* AI Database References */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">
            AI Database References
          </h2>
          <PolarArea data={aiDatabaseRefData} />
          <div className="mt-4 text-sm text-gray-600">
            <p>
              <strong>Profile Queries:</strong> 1,200
            </p>
            <p>
              <strong>Order Lookups:</strong> 800
            </p>
            <p>
              <strong>Billing Info:</strong> 500
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
