const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const bodyParser = require('body-parser');
const formidable = require('express-formidable');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(formidable());

router.post('/users', function (req, res) {
    const name = req.fields.username;
    console.log(name)
    const password = req.fields.password;
    const request = new sql.Request();     
    request.input('name', sql.VarChar(50), name); 
    request.execute('PR_GET_USER', function (err, result) {
        if (err) console.log('err')
            if (result.recordset<1){
                res.send(result);
            }else{
                const accRecordset = result.recordset[0];
                const accPassword = accRecordset.password; 
                console.log(accPassword)
                bcrypt.compare(password, accPassword, function(error, result) {
                    if (error) console.log(error);
                        if(result == true){
                            let token = jwt.sign({ id: '1', username: name }, 'keyboard cat 4 ever', { expiresIn: 129600 });
                            res.json({
                                sucess: true,
                                err: null,
                                token
                            });       
                        }else{
                            res.json({
                                sucess: false,
                                err: 'User name or password incorrect',
                                token:null
                            })
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