const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  receiptCount: Number,
  errorCount: Number,
  topClients: [String]
});

module.exports = mongoose.model('Analytics', analyticsSchema);
