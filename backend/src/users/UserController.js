const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const bodyParser = require('body-parser');
const formidable = require('express-formidable');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
// import decode from 'jwt-decode';

router.use(bodyParser.urlencoded({ extended: true }));
router.use(formidable());

router.post('/users', function (req, res) {
    const username = req.fields.username;
    const password = req.fields.password;
    const request = new sql.Request();     
    request.input('username', sql.VarChar(50), username); 
    request.execute('PR_GET_USER', function (err, result) {
        if (err) console.log('err')
            if (result.recordset<1){
                res.send(result);
            }else{
                const accRecordset = result.recordset[0];
                const accPassword = accRecordset.password; 
                bcrypt.compare(password, accPassword, function(error, result) {
                    if (error) console.log(error);
                        if(result == true){
                            let token = jwt.sign({ id: '1', username: username }, 'keyboard cat 4 ever', { expiresIn: 129600 });
                            const responseToken = JSON.stringify({sucess: true,err: null,token});
                            res.send(responseToken);       
                        }else{
                            const responseToken = JSON.stringify({sucess: false,err: "username or password incorrect",token:null})
                            res.send(responseToken);
                        }
                });  
            }
        });
    });
 /*                   
router.post('/users', function (req, res){
    const name = req.body.name;
    const password = req.body.password;
    bcrypt.hash(password, 10, function(err, hash) {
        const request = new sql.Request();
        request.input('name', sql.constChar(50), name); 
        request.input('password', sql.constChar(2000), hash);
        request.execute('PR_POST_USER', function (error, result) {
            if (err) console.log(error)
                res.send(JSON.stringify(result.recordset));
            });
        });
    });
    */
    
module.exports = router;