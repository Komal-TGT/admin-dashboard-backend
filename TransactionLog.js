const mongoose = require('mongoose');

const transactionLogSchema = new mongoose.Schema({
  type: { type: String, enum: ['success', 'error'], required: true },
  message: String,
  route: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TransactionLog', transactionLogSchema);
