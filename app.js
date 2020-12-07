const { json } = require('body-parser');
const mysql = require('mysql');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path:'./.env'});

var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

app.set('view engine','hbs');

mysqlConnection.connect((err)=>{
    if(!err)
    console.log('DB connected');
    else
    console.log('DB connection failed \n Error: '+JSON.stringify(err,undefined,2))
})

//포트번호 설정
app.listen(3000,()=>console.log('Express server is running at port no : 30000'));

//get 모든 카페 데이터
app.get('/cafe',(req,res)=>{
    mysqlConnection.query('SELECT * FROM cafe',(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});

//모든 카페 데이터
app.get('/cafe',(req,res)=>{
    mysqlConnection.query('SELECT * FROM cafe',(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});
