let employeeModel = require('../model/employeeModel.js');

let employeeCtrl = {
  findAllEmployees: findAllEmployees,
  createEmployeeData: createEmployeeData,
  findAnEmployee: findAnEmployee,
  findAndDelete: findAndDelete,
  updateEmployee: updateEmployee
};

function findAllEmployees(req, res) {

  employeeModel.findAllEmployees().then(response => {
    console.log('REquested for list of employess')
    res.send(response);
  });

} // Find all employee func
function findAnEmployee(req, res) {

  employeeModel.findEmployee(req.params.id).then(response => {
    console.log('requested for an employee details')
    res.send(response);
  });

} // Find an employee func

function createEmployeeData(req, res) {

  employeeModel.createEmployeeRecord(req.body).then(response => {
    console.log('Created a record for an employee');
    res.send(response);
  });
} // create record func

function updateEmployee(req, res) {

  employeeModel.updateEmployeeData(req).then(response => {
    console.log('Successfully updated an employee details')
    res.send(response);
  });

} // Update func
function findAndDelete(req, res) {

  employeeModel.deleteEmployee(req.params.id).then(response => {
    console.log('Successfully deleted an employee record')
    res.send(response);
  });

} // Delete an employee func

module.exports = employeeCtrl;
