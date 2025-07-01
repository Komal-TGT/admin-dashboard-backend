// test.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Client = require('./models/Client');

dotenv.config();
connectDB();

const run = async () => {
  const testClient = new Client({
    clientId: 'CLNT_TEST',
    name: 'Test Client',
    email: 'test@example.com',
    phone: '1234567890',
    plan: { name: 'Standard', expiryDate: new Date('2026-01-01') },
    status: 'active'
  });

  await testClient.save();
  console.log("✅ Test client inserted!");
  process.exit();
};

run();
