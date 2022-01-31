const express = require('express')
const router = express.Router()
const db = require('../model/connection')

router.get('/employee-list',(req,res) =>{
    let sql = "SELECT * FROM user"
    db.query(sql,(err,result) =>{
        if(err) throw err;
        // console.log(result)
        res.json({result:result})
    })
})

router.get('/employee-list/:id',(req,res) =>{
    const id = req.params.id;
    let sql = `SELECT * FROM user where id = ${id}`
    db.query(sql,(err,result) =>{
        if(err) throw err;
        res.json({result:result})
    })
})
// router.post('/create-employee',(req,res)=>{
//     console.log(req.body)
// })
router.post('/create-employee',(req,res) =>{
    const {name,email,password,pno} = req.body
    const users = {name,email,password,pno};
    let sql = "INSERT INTO `users` SET ?"
    db.query(sql,users,(err,result) =>{
        if(err) throw err;
        res.json(result)
    })
})

router.delete("/employee-delete/:id",(req,res) =>{
    const id = req.params.id;
    let sql = `DELETE FROM users WHERE id= ${id}`;
    db.query(sql,(err,result) =>{
        if(err) throw err;
        res.json(result)
    })
})
module.exports = router