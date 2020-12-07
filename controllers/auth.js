const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const mysqlConnection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.login = async (req,res) => {
    try{
        const {name, password} = req.body;

        if(!name ||!password){
            return res.status(400).render('login',{
                message:'이름과 비밀번호를 확인하세요'
            })
        }

        mysqlConnection.query('SELECT * FROM users WHERE name = ?',[name],async(error,results)=>
        {
            console.log(results);
            if(results.length==0 ){
                return res.status(401).render('login', {
                        message : 'Enter valid email or password'
                });
        }

        else if(!(await bcrypt.compare(password, results[0].password)) ){
                return res.status(401).render('login', {
                    message : 'Enter valid email or password'
              });
        }
            
            else{
                const name = results[0].name;
                
                const token = jwt.sign({name},process.env.JWT_SECRET,{
                    expiresIn:process.env.JWT_EXPIRES_IN
                });

                console.log("token is :"+token);

                const cookieOptions = {
                    expires : new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 *60 * 1000
                    ),
                    httpOnly : true
                }

                res.cookie('jwt',token,cookieOptions);
                res.status(200).redirect("/");
            }
        })


    }catch (error){
        console.log(error);
    }
}


exports.register = (req,res) =>
{
    console.log(req.body);

    const{ name, email, password, passwordConfirmed} = req.body;

    mysqlConnection.query('SELECT email FROM users WHERE email = ?',[email],async(error,results)=>{
        if(error){
            console.log(error);
        }
        if(results.length > 0){
            return res.render('register',{
                message:'이미 존재하는 이메일입니다.'
            })

        }
        else if(password !== passwordConfirmed){
            return res.render('register',{
                message:'비밀번호를 잘못 입력하셨습니다.'
            });
        }

        let hashedpassword = await bcrypt.hash(password,8);
        console.log(hashedpassword);

        mysqlConnection.query('INSERT INTO users SET ?',{name:name, email: email, password: password},(error, results)=>{
            if(error){
                console.log(error);
            }else{
                console.log(results);
                return res.render('register',{
                    message:'user registered.'
                });
            }
        })

    });
}
