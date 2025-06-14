const express = require('express');
const db = require('./db.js');

const app = express();
//app.use(express.urlencoded())
app.use(express.json())
app.get( '/', async(req, res)=>{    
    try {
        let back = await db.getDb();
        res.send(back.users);
    } catch (error) {
        res.status(500).json({});
    }
})
app.post('/', async(req, res)=>{ 
    let body = req.body
    if(!body) {
        res.status(403).json({error: "No data"});
    } else {
        let obj = await db.getDb();
        let id = obj.users[obj.users.length - 1].id + 1
        obj.users.push({id, ...body})
        let writBback = await db.saveDb(obj);
        if(!writBback) res.status(200).send({success: true})
    }
})
app.put('/:id', async(req, res)=>{
    try {
        let userInfo = await db.getDb();
        let id = Number.parseInt(req.params.id)
        let userIndex = userInfo.users.findIndex(user => user.id === id)
        if(userIndex === -1) {
            res.status(403).json({error: "User not found"});
        } else {
            let {name, age} = req.body ?? {}
            if(name) userInfo.users[userIndex].name = name
            if(age) userInfo.users[userIndex].age = age
            let writBback = await db.saveDb(userInfo);
            if(!writBback) res.status(200).send({success: true})
        }
    } catch (error) {
        res.status(500).json({error});
    }
})
app.listen(3000, ()=>{
    console.log("服务重启>>>");
})