import React, { useState, useEffect } from 'react';
import { getDonorProfile, updateDonorProfile } from '../services/api';

const DonorProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await getDonorProfile(1); // Replace with dynamic ID
        setProfile(response.data);
      } catch (err) {
        setError('Failed to load profile');
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    try {
      await updateDonorProfile(profile.id, profile);
      alert('Profile updated successfully!');
    } catch (err) {
      alert('Failed to update profile');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Donor Profile</h1>

      {/* Profile form */}
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label htmlFor="first_name" className="block text-gray-700 mb-2">First Name</label>
          <input
            type="text"
            id="first_name"
            value={profile.first_name}
            onChange={(e) => setProfile({ ...profile, first_name: e.target.value })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* Add other fields like last name, blood type, etc. */}
        
        {/* Update button */}
        <button
          onClick={handleUpdate}
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default DonorProfile;
