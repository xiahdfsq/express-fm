const express = require('express');
const router = express.Router();

// app.use('/video', videoRouter);
router.use('/user', require('./user'))
router.use('/video', require('./video'))

module.exports = router;

// 请求中间件
// app.use((req, res, next) => {
//     console.log("res, req>>>", `${req.method},${req.url},${Date.now()}`);
//     next();
// });
// app.get( '/', async(req, res)=>{    
//     try {
//         let back = await db.getDb();
//         res.send(back.users);
//     } catch (error) {
//         res.status(500).json({});
//     }
// })