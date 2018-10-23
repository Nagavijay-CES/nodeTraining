import express from 'express';
import { json } from 'body-parser';

// Const { mongoose } = require('./config/database.js');
// import EmployeeCtrl from './api/controller/EmployeeCtrl.js';
// import routes from './config/routes.js';

let app = express();
let employeeRouter = require('./config/routes/employees.js');

app.use(json());

app.use('/employees', employeeRouter);

// App.get('/', function(req, res) {
//   res.send('Request Received');
// });

app.listen(5686);

module.exports = app;
