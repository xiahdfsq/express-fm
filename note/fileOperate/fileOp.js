var fs = require("fs")
// import { readFile } from 'node:fs';

// 异步同步读取文件
fs.readFile('./a.txt', 'utf-8', (err, data)=>{
    if (err) throw err;
    console.log(data);
    fs.writeFile('./a.txt', data+'666', (err2) => {
        if (!err2) console.log('add content success');
    })
})


//console.log(fs)