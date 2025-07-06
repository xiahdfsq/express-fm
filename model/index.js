const mongoose = require('mongoose');
const { mongopath } = require("../config/default")

async function main() {
    await mongoose.connect(mongopath);
    console.log('数据库连接成功');
}

main().then(res => {
    console.log("db connection success>>>", res);
}).catch(err => {
    console.log("db connection error>>>", err);
});

module.exports = {
    User: mongoose.model('User', require('./userModel'))
};

