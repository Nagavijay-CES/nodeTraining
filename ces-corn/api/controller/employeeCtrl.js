const express = require('express');

let router = express.Router();

let Employee = require('../model/employeeModel.js');

router.get('/', (req, res) => {
    console.log('Employee get method');
    Employee.find({}, function(err, doc){
        console.log('Entered')
        if (err) {
            res.send(err)
        }
        else {
            res.send(doc);
        }
    })

})

router.post('/save', (req, res) => {
    console.log('Employee save method');
    emp = new Employee({
        name: "Hi",
        mobile: "123",
        email: "hi@gmail.com",
        gender: true
    })

    emp.save((err, doc) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send('Hi')
        }
    })
   

})

module.exports = router;
