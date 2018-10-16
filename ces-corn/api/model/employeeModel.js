const mongoose = require('mongoose'); // Import mongoose

// Create schema using mongoose.Schema
var Employees = new mongoose.Schema(
  {
    name: { type: String },
    mobile: { type: Number },
    email: { type: String },
    gender: { type: Boolean }
  },
  { collection: 'Employees' }
);

// Export schema
module.exports = mongoose.model('Employees', Employees);
module.exports.schema = Employees;
