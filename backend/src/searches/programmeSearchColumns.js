const express = require('express');
const router = express.Router();
const formidable = require('express-formidable');
const jwt = require('jsonwebtoken');
const sql = require('../config/db')

router.use(formidable());

router.get('/programmesearch', async (req, res) =>{
    const token = req.headers.authorization;
    jwt.verify(token, 'keyboard cat 4 ever', function(err, decoded) {
        if(err){
            console.log(err)
        }
        else return decoded
        }
      );
    const request = new sql.Request();
    request.input('user', sql.VarChar(500), decoded.username);
    await request.execute('PR_GET_PROGRAMMES', function (err, result) {
        if (err) 
            console.log(err)
        res.send(result.recordset)
    });
});
module.exports = router;