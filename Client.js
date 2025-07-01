const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  clientId: { type: String, required: true, unique: true },
  name: String,
  email: String,
  phone: String,
  plan: {
    name: String,
    expiryDate: Date
  },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' }
}, { timestamps: true });

module.exports = mongoose.model('Client', clientSchema);
