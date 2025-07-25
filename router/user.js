const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const validator = require("../middleware/validator/userValidator");    
const { verifyToken } = require('../util/jwt');
router
.post('/register', validator.register, userController.register)
.post('/login', validator.login, userController.login)
.get('/list', verifyToken, userController.list)
.put('/update', verifyToken, validator.update, userController.update)
.get('/user', (req, res )=>{
    console.log("method>>>", req.method);
    res.send("/user")
})

module.exports = router;