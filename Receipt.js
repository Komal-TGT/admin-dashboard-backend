const mongoose = require('mongoose');

const receiptSchema = new mongoose.Schema({
  receiptId: { type: String, required: true, unique: true },
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  transactionData: Object,
  timestamp: { type: Date, default: Date.now },
  qrCodeUrl: String
});

module.exports = mongoose.model('Receipt', receiptSchema);
