const { User } = require('../model/index');
const {createToken} = require('../util/jwt')

exports.register = async (req, res)=>{
    const userModel = new User(req.body)
    const saveRes = await userModel.save()
    let user = saveRes.toJSON()
    delete user.password
    res.status(201).json({user})
}

exports.update = async (req, res)=>{
    console.log("clg>>>", req.user);
    const dbBack = await User.findByIdAndUpdate(req.user.userInfo._id, req.body,{new: true})
    res.status(200).json({user: dbBack})
}

exports.login = async (req, res)=>{
    let dbBack = await User.findOne(req.body)
    if(!dbBack) return res.status(402).json({error: "Invalid credentials"})
    dbBack = dbBack.toJSON()
    dbBack.token = await createToken(dbBack);
    res.status(201).json(dbBack)
}

exports.list = async (req, res)=>{
    console.log("method>>>", req.method);
    res.send("/index")
}