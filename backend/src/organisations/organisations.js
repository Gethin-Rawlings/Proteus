var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var bodyParser = require('body-parser');

router.get('/organisations', function (req, res) {
    var paramaters = req.query;
    var organisationType = paramaters.organisationType;
    var request = new sql.Request(); 
    request.input('organisationType', sql.VarChar(50), organisationType); 
    request.execute('PR_GET_ORGANISATIONS', function (err, result) {
        if (err) console.log(err)
        var returnData = result.recordset;
        res.send(returnData);
    });
});

module.exports = router;