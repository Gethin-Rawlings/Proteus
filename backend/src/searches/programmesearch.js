const express = require('express');
const router = express.Router();
const formidable = require('express-formidable');
const jwt = require('jsonwebtoken');
const sql = require('../config/db')
const verifyToken = require('../security/verifyToken')

router.use(formidable());

router.post('/programmesearch', async (req, res) =>{
    verifyToken(req)
    /*const token = req.headers.authorization;
    jwt.verify(token, 'keyboard cat 4 ever', function(err, decoded) {
        if(err){
            console.log(err)
        }
        req.userName = decoded.username
        console.log(decoded.username) 
      });*/
    console.log(req.userId)
    const request = new sql.Request();
    request.input('production', sql.Int, req.fields.production);
    request.input('network', sql.Int, req.fields.network);
    request.input('indie', sql.Int, req.fields.indie);
    request.input('title', sql.VarChar(500), req.fields.username);
    await request.execute('PR_GET_PROGRAMMES', function (err, result) {
        if (err) 
            console.log(err)
        res.send(result.recordset)
    });
});
module.exports = router;