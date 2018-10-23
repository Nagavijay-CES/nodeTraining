import { Router } from 'express';

let router = new Router();
let employeeCtrl = require('../../controller/EmployeeCtrl.js');

router.get('/', employeeCtrl.findAllEmployees);

module.exports = router;
