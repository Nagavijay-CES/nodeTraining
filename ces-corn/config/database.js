const mongoose = require('mongodb');

mongoose.connect('mongodb://localhost:27017/crud_database', { useNewUrlParser: true }, function (err, doc) {
    if (err) {

    }
    else {
        console.log("DB Connection Successful");
    }
})

module.exports = mongoose;