const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const bodyParser = require('body-parser');
const sql = require('../config/db')

router.get('/organisations', async (req, res) => {
    const paramaters = req.query;
    const type = paramaters.type;
    const request = new sql.Request();
    request.input('type', sql.VarChar(50), type);
    await request.execute('PR_GET_ORGANISATIONS', function (err, result) {
        if (err) console.log(err)
        var returnData = result.recordset;
        res.send(returnData);
    });
});

module.exports = router;