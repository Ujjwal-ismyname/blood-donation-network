CREATE DATABASE blood_donation_network;
USE blood_donation_network;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('donor', 'recipient', 'blood_bank', 'admin') NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE donors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  dob DATE NOT NULL,
  gender ENUM('male', 'female', 'other') NOT NULL,
  blood_type ENUM('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-') NOT NULL,
  phone VARCHAR(15) NOT NULL,
  address TEXT NOT NULL,
  last_donation_date DATE,
  medical_conditions TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE recipients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  dob DATE NOT NULL,
  gender ENUM('male', 'female', 'other') NOT NULL,
  blood_type ENUM('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-') NOT NULL,
  phone VARCHAR(15) NOT NULL,
  address TEXT NOT NULL,
  hospital VARCHAR(100),
  reason TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE blood_banks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  name VARCHAR(100) NOT NULL,
  license_number VARCHAR(50) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  email VARCHAR(100) NOT NULL,
  address TEXT NOT NULL,
  coordinates POINT,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE blood_inventory (
  id INT AUTO_INCREMENT PRIMARY KEY,
  blood_bank_id INT,
  blood_type ENUM('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-') NOT NULL,
  component ENUM('whole_blood', 'red_cells', 'platelets', 'plasma') NOT NULL,
  units INT NOT NULL,
  collection_date DATE NOT NULL,
  expiry_date DATE NOT NULL,
  status ENUM('available', 'reserved', 'used') DEFAULT 'available',
  FOREIGN KEY (blood_bank_id) REFERENCES blood_banks(id)
);

CREATE TABLE donation_requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  donor_id INT,
  blood_bank_id INT,
  requested_date DATE NOT NULL,
  appointment_date DATE,
  status ENUM('pending', 'approved', 'completed', 'rejected') DEFAULT 'pending',
  FOREIGN KEY (donor_id) REFERENCES donors(id),
  FOREIGN KEY (blood_bank_id) REFERENCES blood_banks(id)
);

CREATE TABLE blood_requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  recipient_id INT,
  blood_type ENUM('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-') NOT NULL,
  component ENUM('whole_blood', 'red_cells', 'platelets', 'plasma') NOT NULL,
  units_required INT NOT NULL,
  urgency ENUM('normal', 'urgent', 'critical') DEFAULT 'normal',
  request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  required_by DATE NOT NULL,
  reason TEXT,
  status ENUM('pending', 'fulfilled', 'partially_fulfilled', 'expired') DEFAULT 'pending',
  FOREIGN KEY (recipient_id) REFERENCES recipients(id)
);
