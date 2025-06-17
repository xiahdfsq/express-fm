const { User } = require('../model/index');

exports.register = async (req, res)=>{
    const userModel = new User(req.body)
    const saveRes = await userModel.save()
    res.status(201).json(saveRes)
}

exports.list = async (req, res)=>{
    console.log("method>>>", req.method);
    res.send("/index")
}