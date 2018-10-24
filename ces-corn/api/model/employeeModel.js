const MONGOOSE = require('mongoose');

let EmployeeModel = new MONGOOSE.Schema(
  {
    name: { type: String },
    mobile: { type: Number },
    email: { type: String },
    gender: { type: String }
  },
  { collection: 'Employees' }
);
// Statics and methods to assign func to schema 
EmployeeModel.statics.findAllEmployees = findAllEmployees;
EmployeeModel.statics.findEmployee = findEmployee;
EmployeeModel.statics.createEmployeeRecord = createEmployeeRecord;
EmployeeModel.statics.updateEmployeeData = updateEmployeeData;
EmployeeModel.statics.deleteEmployee = deleteEmployee;


module.exports = MONGOOSE.model('EmployeeModel', EmployeeModel);

function findAllEmployees() {
  return this.find({}, function (err, doc) {
    if (err) {
      return err;
    }
    return doc;
    // IF-ELSE
  });
} // FN FIND-ALL-EMPLOYEES

function findEmployee(empId) {
  return this.findById(empId, function (err, doc) {
    if (err) {
      return err;
    }
    return doc;
    // IF-ELSE
  });
}; // FIND - ONE - EMPLOYEE

function createEmployeeRecord(request) {
  return new Promise((resolve, reject) => {
    let empModel = this
    data = new empModel({
      name: request.name,
      mobile: request.mobile,
      email: request.email,
      gender: request.gender
    });
    data.save((err, doc) => {
      if (err) {
        reject(err)
      } else {
        resolve(doc);
      }
    }) // Save methhod end
  })// Promise end
} // Create record func end

function updateEmployeeData(req) {
  let emp = {
    name: req.body.name,
    mobile: req.body.mobile,
    email: req.body.email,
    gender: req.body.gender
  };
  return this.findOneAndUpdate({ _id: req.params.id }, { $set: emp }, { new: true }, function (err, doc) {
    if (err) {
      return err;
    }
    return doc;
    // IF-ELSE
  });
}
function deleteEmployee(paramID) {
  return this.findByIdAndDelete({ _id: paramID }, function (err, doc) {
    if (err) {
      return err;
    }
    return doc;
    // IF-ELSE
  });
} // DELETE-EMPLOYEE