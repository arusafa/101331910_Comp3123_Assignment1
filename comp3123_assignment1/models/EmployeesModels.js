const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({

    first_name: {
        type: String,
        required: true,
        maxLength: 100
    },
    last_name: {
        type: String,
        required: true,
        maxLength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxLength: 50
    },
    gender: {
        type: String,
        required: true,
        enum:["Male","Female","Other"],
        maxLength: 25
    },
    salary: {
        type: Number,
        required: true
    }
});

const Employee = mongoose.model("employee",employeeSchema);
module.exports = Employee;