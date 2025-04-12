import React from 'react';

const DonorDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Donor Dashboard</h1>
      <p>Welcome to your dashboard! Here you can view your donation history, upcoming appointments, and more.</p>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Donation History</h2>
        {/* Replace with actual data */}
        <ul className="list-disc pl-5">
          <li>Blood Donation at XYZ Blood Bank - Date: 2025/03/15</li>
          <li>Blood Donation at ABC Blood Bank - Date: 2025/01/10</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
        {/* Replace with actual data */}
        <ul className="list-disc pl-5">
          <li>Appointment at XYZ Blood Bank - Date: 2025/04/20</li>
        </ul>
      </section>

      {/* Add navigation to other pages */}
      <div className="mt-6">
        <button
          onClick={() => window.location.href = '/donation-request'}
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Request Donation Appointment
        </button>
      </div>
    </div>
  );
};

export default DonorDashboard;
