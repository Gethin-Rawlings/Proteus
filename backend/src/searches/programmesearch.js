const express = require('express');
const router = express.Router();
const formidable = require('express-formidable');
const sql = require('../config/db')
const verifyToken = require('../security/verifyToken')

router.use(formidable());

router.post('/programmesearch', async (req, res) =>{
    verifyToken(req, res)
    const request = new sql.Request();
    request.input('production', sql.Int, req.fields.production);
    request.input('network', sql.Int, req.fields.network);
    request.input('indie', sql.Int, req.fields.indie);
    request.input('title', sql.VarChar(500), req.fields.text);
    request.input('userName', sql.VarChar(20), req.userId);
    await request.execute('PR_GET_PROGRAMMES', function (err, result) {
        if (err) 
            console.log(err)
        res.send(result.recordset)
    });
});
module.exports = router;