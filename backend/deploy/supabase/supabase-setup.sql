-- SEWA DTU Users Table
-- Run this in your Supabase SQL editor to create the required users table

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Optional: Create indexes for better performance (though primary key and unique constraints already create indexes)
-- CREATE INDEX idx_users_email ON users(email);
-- CREATE INDEX idx_users_phone ON users(password);