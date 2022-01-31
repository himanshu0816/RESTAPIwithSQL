const mysql = require('mysql')

//Database Connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'cmysql'
})

db.connect((err) =>{
    if(err) throw err;
    console.log("Mysql Connected")
})

module.exports =db;