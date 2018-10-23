import employeeModel from '../model/employeeModel.js';

// Module.exports = {
//     methods: {
//         findAllEmployees: findAllEmployees
//     }
// };

let employeeCtrl = {
  findAllEmployees: findAllEmployees,
  findAndDelete: findAndDelete
};

function findAllEmployees(req, res) {
  employeeModel.findAllEmployees().then(response => {
    res.ok(response);
  });
} // FN FIND-ALL-EMPLOYEES

function findAndDelete(req, res) {
  employeeModel.findAndDelete(req.params.id).then(response => {
    res.ok(response);
  });
} // FN FIND-AND-DELETE

module.exports = employeeCtrl;
