import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="bg-red-600 text-white py-16 px-4 rounded-lg mb-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Blood Donation Network</h1>
          <p className="text-xl mb-8">Connecting donors, recipients, and blood banks to save lives</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="bg-white text-red-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100">
              Register Now
            </Link>
            <Link to="/find-blood-bank" className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-red-600">
              Find Blood Bank
            </Link>
          </div>
        </div>
      </section>
      
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-red-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">For Donors</h3>
            <p className="text-gray-600">
              Register as a donor, find nearby blood banks, schedule donations, and track your donation history.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-red-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">For Recipients</h3>
            <p className="text-gray-600">
              Submit blood requests, find matching blood types, connect with blood banks, and receive notifications.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-red-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">For Blood Banks</h3>
            <p className="text-gray-600">
              Manage blood inventory, process donation requests, fulfill recipient needs, and maintain records.
            </p>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-100 py-16 px-4 rounded-lg mb-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Blood Donation Facts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Did You Know?</h3>
              <p className="text-gray-600">
                The average human body contains about five liters of blood, which is made of several cellular and non-cellular components such as Red blood cells, Platelets, and Plasma.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Save Lives</h3>
              <p className="text-gray-600">
                One donated unit can save up to four lives depending on the number of components separated from your blood.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
