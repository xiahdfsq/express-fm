exports.list = async (req, res)=>{
    console.log("method>>>", req.method);
    res.send("/index")
}