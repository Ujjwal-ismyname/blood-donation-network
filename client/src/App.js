import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.js';
import PrivateRoute from './components/PrivateRoute';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import DonorDashboard from './pages/DonorDashboard';
import RecipientDashboard from './pages/RecipientDashboard';
import BloodBankDashboard from './pages/BloodBankDashboard';
import DonorProfile from './pages/DonorProfile';
import RecipientProfile from './pages/RecipientProfile';
import BloodBankProfile from './pages/BloodBankProfile';
import DonationRequest from './pages/DonationRequest';
import BloodRequest from './pages/BloodRequest';
import FindBloodBank from './pages/FindBloodBank';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <main className="container mx-auto px-4 py-8 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/donor-dashboard" element={
              <PrivateRoute role="donor">
                <DonorDashboard />
              </PrivateRoute>
            } />
            <Route path="/recipient-dashboard" element={
              <PrivateRoute role="recipient">
                <RecipientDashboard />
              </PrivateRoute>
            } />
            <Route path="/blood-bank-dashboard" element={
              <PrivateRoute role="blood_bank">
                <BloodBankDashboard />
              </PrivateRoute>
            } />
            <Route path="/donor-profile" element={
              <PrivateRoute role="donor">
                <DonorProfile />
              </PrivateRoute>
            } />
            <Route path="/recipient-profile" element={
              <PrivateRoute role="recipient">
                <RecipientProfile />
              </PrivateRoute>
            } />
            <Route path="/blood-bank-profile" element={
              <PrivateRoute role="blood_bank">
                <BloodBankProfile />
              </PrivateRoute>
            } />
            <Route path="/donation-request" element={
              <PrivateRoute role="donor">
                <DonationRequest />
              </PrivateRoute>
            } />
            <Route path="/blood-request" element={
              <PrivateRoute role="recipient">
                <BloodRequest />
              </PrivateRoute>
            } />
            <Route path="/find-blood-bank" element={<FindBloodBank />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
