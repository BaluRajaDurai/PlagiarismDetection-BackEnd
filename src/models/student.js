const mongoose = require('mongoose')
const studentSchema =new mongoose.Schema({

    //student details
    studentname: String,
    studentbranch: String,
    studentemail: String,
    studentpassword: String

},{timestamps: true})
module.exports = mongoose.model('Student', studentSchema);
