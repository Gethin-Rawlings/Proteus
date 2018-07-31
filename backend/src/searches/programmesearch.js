const express = require('express');
const router = express.Router();
const formidable = require('express-formidable');
const jwt = require('jsonwebtoken');

router.use(formidable());

router.post('/programmesearch', async (req, res) =>{

    const production = req.fields.production;
    const network = req.fields.network;
    const indie = req.fields.indie;
    const username = req.fields.username;
    const token = req.headers.authorization;
    jwt.verify(token, 'keyboard cat 4 ever', function(err, decoded) {
        console.log(decoded.username) 
      });
    const request = new sql.Request();
    request.input('production', sql.Int, production);
    request.input('network', sql.Int, network)
    request.input('indie', sql.Int, indie)
    request.input('title', sql.VarChar(500), username)
    await request.execute('PR_GET_PROGRAMMES', function (err, result) {
        if (err) 
            console.log(err)
        res.send(result.recordset)
    });
});
module.exports = router;