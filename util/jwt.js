const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const tojwt = promisify(jwt.sign);
const verify = promisify(jwt.verify);
const { uuid } = require("../config/default")

module.exports.verifyToken = async (req, res, next) => {
    let token = req.headers.authorization;
    token = token?.split(' ')[1];
    if (!token) {
        res.status(402).json({ message: '请先登录' });
    } else {
        try {
            let obj = await verify(token, uuid)
            req.user = obj;
            console.log("token>>>", obj, token);
            next();
        } catch (error) {
            res.status(402).json({ message: 'token 失效' });
        }
    }
}

module.exports.createToken = async (payload) => {
    return await tojwt({ userInfo: payload }, uuid, { expiresIn: '1h' });
}