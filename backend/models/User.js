const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')
// const jwt  = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
    
}, { collection: 'users' })


const User = mongoose.model("USER", userSchema);
module.exports = User;