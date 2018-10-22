const mongoose = require('mongoose'); // Import mongoose

// Create schema using mongoose.Schema
var Employees = new mongoose.Schema(
  {
    name: { type: String },
    mobile: { type: Number },
    email: { type: String },
    gender: { type: String }
  },
  { collection: 'Employees' }
);
module.exports = {
  deleteEmployee :deleteEmployee 
}
// Export schema
module.exports = mongoose.model('Employees', Employees);
module.exports.schema = Employees;


function deleteEmployee(){
  Employees.findByIdAndDelete({_id: req.params.id}, function (err, doc) {
    if (err) {
      res.send(err);
    } else {
      console.log('You have removed one employee record in database');
      res.send(doc);
    }
  });
}