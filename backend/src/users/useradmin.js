const express = require('express');
const router = express.Router();
const formidable = require('express-formidable');
const sql = require('../config/db')
const verifyToken = require('../security/verifyToken')

router.use(formidable());

router.post('/useradmin', async (req, res) => {
    verifyToken(req, res)
    const production = req.fields.production;
    const network = req.fields.network;
    const indie = req.fields.indie;
    const username = req.fields.username;
    const token = req.headers.authorization;
    const request = new sql.Request();
    request.input('production', sql.Int, production);
    request.input('network', sql.Int, network)
    request.input('indie', sql.Int, indie)
    request.input('username', sql.VarChar(500), username)
    await request.execute('PR_GET_USERS', function (err, result) {
        if (err)
            console.log(err)
        res.send(result.recordset)
    });
});
module.exports = router;