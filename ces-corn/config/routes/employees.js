const express = require('express');
let router = express.Router();
let employeeCtrl = require('../../api/controller/employeeCtrl.js');

router.get('/', employeeCtrl.findAllEmployees);
router.get('/:id', employeeCtrl.findAnEmployee);
router.post('/createEmployee', employeeCtrl.createEmployeeData);
router.put('/update/:id', employeeCtrl.updateEmployee);
router.delete('/:id', employeeCtrl.findAndDelete);

module.exports = router;
