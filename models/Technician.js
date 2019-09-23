const mongoose = require('mongoose')

const techSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
})

module.exports = Technician = mongoose.model('technician', techSchema)