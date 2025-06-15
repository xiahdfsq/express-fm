const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');


router.get('/list', userController.list)
.get('/user', (req, res )=>{
    console.log("method>>>", req.method);
    res.send("/user")
})

module.exports = router;