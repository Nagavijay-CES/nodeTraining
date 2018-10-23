let mongodb = require('mongoose');
// Let mongo = mongodb.MongoClient;

mongodb.connect(
  'mongodb://localhost:27017/crud_database',
  { useNewUrlParser: true },
  function(err) {
    if (err) {
      console.log('Error in connecting to Database', err);
    } else {
      console.log('Successfully Connected to database');
    }
  }
);

module.exports = mongodb;
