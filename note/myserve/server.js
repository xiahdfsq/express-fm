var http = require("http")
var router = require("./router")
var server = http.createServer()

server.listen('8080', function(){
    console.log("get client request>>>", "http://127.0.0.1:8080");
})

server.on('request', function(req, res){
    //console.log("data>>>");
    //res.setHeader("Content-type", "text/plain; charset=utf-8")
    // res.setHeader("Content-type", "text/html; charset=utf-8")
    // res.write('serve respond content: <h1> 你好 </h1>')
    // res.end()
    router(req, res )
    
})