const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./config/database.js');
var empCtrl = require('./api/controller/employeeCtrl.js');


var app = express();
app.use(bodyParser.json());
app.use('/employee', empCtrl);
app.get('/', function (req, res) {
    res.send('OK');
})
app.listen(5686);