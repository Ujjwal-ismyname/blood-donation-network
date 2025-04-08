import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth services
export const register = (userData) => api.post('/auth/register', userData);
export const login = (credentials) => api.post('/auth/login', credentials);

// Donor services
export const getDonorProfile = (id) => api.get(`/donors/${id}`);
export const createDonorProfile = (donorData) => api.post('/donors', donorData);
export const updateDonorProfile = (id, donorData) => api.put(`/donors/${id}`, donorData);
export const createDonationRequest = (requestData) => api.post('/requests/donation', requestData);
export const getDonationRequests = () => api.get('/requests/donation');

// Recipient services
export const getRecipientProfile = (id) => api.get(`/recipients/${id}`);
export const createRecipientProfile = (recipientData) => api.post('/recipients', recipientData);
export const updateRecipientProfile = (id, recipientData) => api.put(`/recipients/${id}`, recipientData);
export const createBloodRequest = (requestData) => api.post('/requests/blood', requestData);
export const getBloodRequests = () => api.get('/requests/blood');

// Blood bank services
export const getBloodBankProfile = (id) => api.get(`/blood-banks/${id}`);
export const createBloodBankProfile = (bloodBankData) => api.post('/blood-banks', bloodBankData);
export const updateBloodBankProfile = (id, bloodBankData) => api.put(`/blood-banks/${id}`, bloodBankData);
export const getBloodInventory = (bloodBankId) => api.get(`/inventory/${bloodBankId}`);
export const updateBloodInventory = (inventoryId, inventoryData) => api.put(`/inventory/${inventoryId}`, inventoryData);
export const getAllBloodBanks = () => api.get('/blood-banks');

export default api;
