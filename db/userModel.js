
const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const userSchema = new Schema ({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    } , 
    address: {
        type: String, 
        required: true
    },
    age: {
        type: Number, 
        required: true
    }
})

module.exports = mongoose.model('users', userSchema);