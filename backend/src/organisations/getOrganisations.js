var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var bodyParser = require('body-parser');

router.get('/organisations', function (req, res) {
    var paramaters = req.query;
    var type = paramaters.type;
    var request = new sql.Request(); 
    request.input('type', sql.VarChar(50), type); 
    request.execute('PR_GET_ORGANISATIONS', function (err, result) {
        if (err) console.log(err)
        var returnData = result.recordset;
        res.send(returnData);
    });
});

module.exports = router;