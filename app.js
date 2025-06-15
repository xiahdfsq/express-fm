const express = require('express');
const cors = require('cors');
const m = require('morgan');

const router = require('./router'); 

const app = express();

app.use(express.urlencoded())
app.use(express.json()) // 解析客户端发来的json数据
app.use(cors()); // 允许跨域
app.use(m('dev')); // 显示请求信息
app.use('/api', router); // 带前缀写法


// 上面路由匹配都没成功，给404
app.use((req, res) => {
    res.status(404).json({error: "Not found"});
});
// 错误处理中间件
app.use((err, req, res, next) => {
    res.status(500).json({error: err.message || "Server error"});
});
//const db = require('./db.js');
// app.post('/', async(req, res)=>{ 
//     let body = req.body
//     if(!body) {
//         res.status(403).json({error: "No data"});
//     } else {
//         let obj = await db.getDb();
//         let id = obj.users[obj.users.length - 1].id + 1
//         obj.users.push({id, ...body})
//         let writBback = await db.saveDb(obj);
//         if(!writBback) res.status(200).send({success: true})
//     }
// })
// app.put('/:id', async(req, res)=>{
//     try {
//         let userInfo = await db.getDb();
//         let id = Number.parseInt(req.params.id)
//         let userIndex = userInfo.users.findIndex(user => user.id === id)
//         if(userIndex === -1) {
//             res.status(403).json({error: "User not found"});
//         } else {
//             let {name, age} = req.body ?? {}
//             if(name) userInfo.users[userIndex].name = name
//             if(age) userInfo.users[userIndex].age = age
//             let writBback = await db.saveDb(userInfo);
//             if(!writBback) res.status(200).send({success: true})
//         }
//     } catch (error) {
//         res.status(500).json({error});
//     }
// })
app.listen(3000, () => {
    console.log("服务重启>>>");
})