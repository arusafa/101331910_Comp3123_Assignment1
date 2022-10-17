const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        primaryKey: true,
        minlength: 3,
        maxlength: 100
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        unique: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 50
    }
});

const UsersModel = mongoose.model('user', userSchema);
module.exports = UsersModel;

