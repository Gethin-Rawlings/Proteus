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

router.get('/userDetails', function (req, res){
    const username = req.query.user;
    console.log(username)
    console.log('wibble')
    const request = new sql.Request()
    request.input('username', sql.VarChar(50), username); 
    request.execute('PR_GET_USER_DETAILS', function (err, result) {
        
                console.log(result.recordset)
                res.send(result.recordset[0]);
            
        }
    )});

    
module.exports = router;