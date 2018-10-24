const EXPRESS = require('express');
const BODY_PARSER = require('body-parser');

let databaseObj = require('./config/database.js');
let employeeRouter = require('./config/routes/employees.js');

let app = EXPRESS();
const PORT = 5686;

app.use(BODY_PARSER.json());
app.use('/employees', employeeRouter);

databaseObj.connectDB().then(response => {
    app.listen(PORT);
    console.log('Listening on port #', PORT);
});

module.exports = app;
