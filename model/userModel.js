const mongoose = require('mongoose');

// 定义集合结构
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    },
    image: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    },
});

module.exports = userSchema;