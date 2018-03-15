const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const formidable = require('express-formidable');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
// import decode from 'jwt-decode';

router.use(bodyParser.urlencoded({ extended: true }));
router.use(formidable());

router.post('/useradmin', function (req, res) {

    const production = req.fields.production;
    const network = req.fields.network;
    const indie = req.fields.indie;
    const request = new sql.Request();     
    request.input('production', sql.Int, production); 
    request.input('network', sql.Int, production)
    request.input('indie', sql.Int, production)
    request.execute('PR_GET_USERS', function (err, result) {

        if (err) console.log(err)
            
                res.send(result)  
            
        });

    });

    
module.exports = router;