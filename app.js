const { json } = require('body-parser');
const mysql = require('mysql');
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');

dotenv.config({path:'./.env'});

var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

const mysqlConnection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(cookieParser());

app.set('view engine','hbs');

mysqlConnection.connect((err)=>{
    if(!err)
    console.log('DB connected');
    else
    console.log('DB connection failed \n Error: '+JSON.stringify(err,undefined,2))
})


 //Define Router
 app.use('/',require('./routes/pages'));
 app.use('/auth',require('./routes/auth'));



//포트번호 설정
app.listen(3000,()=>console.log('Express server is running at port no : 30000'));

/*app.get("/",(req,res)=>{
   // res.send("<h1>Home Page</h1>")
   res.render("index.hbs"); 
});

app.get("/register",(req,res)=>{
    // res.send("<h1>Home Page</h1>")
    res.render("register.hbs"); 
 });

 app.get("/",(req,res)=>{
    // res.send("<h1>Home Page</h1>")
    res.render("index.hbs"); 
 });*/

 
