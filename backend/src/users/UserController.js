var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var bodyParser = require('body-parser');

router.post('/users', function (req, res) {
    console.log('wibble')
    var paramaters = req.body;
    var name = paramaters.username;
    var password = paramaters.password;
    var request = new sql.Request();     
    request.input('name', sql.VarChar(50), name); 
    request.input('PARAMS',sql.VarChar(1000),JSON.stringify(paramaters) );
    request.execute('PR_GET_USER', function (err, result) {
        if (err) console.log('err')
            if (result.recordset<1){
                res.send(result);
            }else{
                var accRecordset = result.recordset[0];
                var accPassword = accRecordset.password; 
                bcrypt.compare(password, accPassword, function(error, result) {
                    if (error) console.log(error);
                        if(result == false){
                            res.send(result);        
                        }else{
                            res.send(result);
                        }
                });  
            }
        });
    });
 /*                   
router.post('/users', function (req, res){
    var name = req.body.name;
    var password = req.body.password;
    bcrypt.hash(password, 10, function(err, hash) {
        var request = new sql.Request();
        request.input('name', sql.VarChar(50), name); 
        request.input('password', sql.VarChar(2000), hash);
        request.execute('PR_POST_USER', function (error, result) {
            if (err) console.log(error)
                res.send(JSON.stringify(result.recordset));
            });
        });
    });
    */
    
module.exports = router;