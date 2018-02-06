const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const bodyParser = require('body-parser');

router.get('/rounds', function (req, res) {
    const date = new Date();
    const request = new sql.Request(); 
    request.input('date', sql.DateTime, date); 
    request.execute('PR_GET_OPEN_ROUNDS', function (err, result) {
        if (err) console.log(err)
        const returnData = result.recordset;
        res.send(returnData);
    });
});

module.exports = router;