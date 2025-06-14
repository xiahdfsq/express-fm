var fs = require("fs")

module.exports = {
    index: function (req, res) {
        fs.readFile('./index.html', 'utf-8', function (err, data) {
            res.write(data)
            res.end()
        })
    },
    user: function (obj, res) {
        console.log('post data>>>', obj)
        res.end('post data: ' + obj.username + '--' + obj.age)
    },
}