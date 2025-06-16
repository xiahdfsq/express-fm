const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/express-video');
    console.log('数据库连接成功');
}

main().then(res => {
    console.log("db con success>>>", res);
}).catch(err => {
    console.log("db con error>>>", err);
});

module.exports = {
    User: mongoose.model('User', require('./userModel'))
};

