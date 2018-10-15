const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Employee = new Schema({
    name: { type: String },
    mobile: { type: Number },
    email: { type: String },
    gender: { type: Boolean }
});

module.exports = mongoose.model('Employee', Employee);