const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  message: String,
  technician: String,
  attention: Boolean,
  date: {
    type: Date,
    default: new Date()
  }
});

module.exports = Log = mongoose.model('log', logSchema);
