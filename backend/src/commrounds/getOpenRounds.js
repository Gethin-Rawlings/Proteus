var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var bodyParser = require('body-parser');

router.get('/rounds', function (req, res) {
    var date = new Date();
    var request = new sql.Request(); 
    request.input('date', sql.DateTime, date); 
    request.execute('PR_GET_OPEN_ROUNDS', function (err, result) {
        if (err) console.log(err)
        var returnData = result.recordset;
        res.send(returnData);
    });
});

module.exports = router;