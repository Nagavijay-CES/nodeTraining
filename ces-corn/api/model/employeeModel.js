import { Schema, model } from 'mongoose';

var EmployeeModel = new Schema(
  {
    name: { type: String },
    mobile: { type: Number },
    email: { type: String },
    gender: { type: String }
  },
  { collection: 'Employees' }
);

EmployeeModel.statics.deleteEmployee = deleteEmployee;
EmployeeModel.statics.findAllEmployees = findAllEmployees;

module.exports = model('EmployeeModel', EmployeeModel);

function deleteEmployee(paramID) {
  return EmployeeModel.findByIdAndDelete({ _id: paramID }, function(err, doc) {
    if (err) {
      return err;
    }
    console.log(
      'You have removed one employee record in database: ',
      JSON.stringify(doc)
    );
    return doc;
    // IF-ELSE
  });
} // DELETE-EMPLOYEE

function findAllEmployees() {
  return EmployeeModel.find({}, function(err, doc) {
    if (err) {
      return err;
    }
    console.log(
      'You have removed one employee record in database: ',
      JSON.stringify(doc)
    );
    return doc;
    // IF-ELSE
  });
} // FN FIND-ALL-EMPLOYEES
