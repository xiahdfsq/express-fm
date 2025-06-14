const fs = require('fs');
const {promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

exports.getDb = async function() {
    let data = await readFile ('./db.json', 'utf8')
    return JSON.parse(data)
}

exports.saveDb = async function(data) {
    let res = await writeFile('./db.json', JSON.stringify(data))
    return res
}