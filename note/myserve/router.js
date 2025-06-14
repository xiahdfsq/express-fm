var fs  = require("fs")
var url = require("url")
var controller = require("./controller")

module.exports = (req, res) => {
    if(req.method === 'GET') {
        var params = url.parse(req.url, true).query
        if(req.url == '/')  {
            controller.index(req, res)
        } else {
            fs.readFile('./sign.png', function(err, data){
                res.end(data)
            })
        }
    }   else if(req.method === 'POST') {
        var postData = ''
        req.on('data', function(chunk){
            postData += chunk
        })
        req.on('end', function(){
            var obj = require('querystring').parse(postData)
            controller.user(obj)
        })
    }
};