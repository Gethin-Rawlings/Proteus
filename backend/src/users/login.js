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

router.post('/login', function (req, res) {
    const username = req.fields.username;
    const password = req.fields.password;
    const request = new sql.Request();     
    request.input('username', sql.VarChar(50), username); 
    request.execute('PR_GET_USER', function (err, result) {

        if (err) console.log(err)
            if (result.recordset[0] === undefined){
                res.send("username or password incorrect");
            }else{
                const accRecordset = result.recordset[0];
                const accPassword = accRecordset.password; 
                bcrypt.compare(password, accPassword, function(error, result) {
                    if (error) console.log(error);
                        if(result == true){
                            let token = jwt.sign({ id: '1', username: username }, 'keyboard cat 4 ever', { expiresIn: 129600 });
                            const responseToken = JSON.stringify({success: true,err: null,token:token});
                            res.send(responseToken);       
                        }else{
                            const responseToken = JSON.stringify({success: false,err: "username or password incorrect",token:null})
                            res.send(responseToken);
                        }
                });  
            }
        });
    });

    
module.exports = router;