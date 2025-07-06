const mongoose = require('mongoose');
const md5 = require('../util/md5');

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
        required: true,
        set: val => md5(val),
        select: false
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
    cover: {
        type: String,
        default: null
    },
    channeldes: {
        type: String,
        default: null
    },
});

module.exports = userSchema;