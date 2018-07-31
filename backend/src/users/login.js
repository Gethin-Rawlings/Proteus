const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const bodyParser = require('body-parser');
const formidable = require('express-formidable');
const jwt = require('jsonwebtoken');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(formidable());

router.post('/login', function (req, res) {
    const username = req.fields.username;
    const password = req.fields.password;
    const request = new sql.Request();
    request.input('username', sql.VarChar(50), username);
    request.execute('PR_GET_USER', function (err, result) {
        if (err) console.log(err)
        if (result.recordset[0] === undefined) {
            const responseToken = JSON.stringify({ success: false, err: "username or password incorrect", token: null })
            res.send(responseToken);
        } else {
            const accRecordset = result.recordset[0];
            const accPassword = accRecordset.password;
            const supplier = accRecordset.supplier;
            const network = accRecordset.network;
            const admin = accRecordset.admin;
            const finance = accRecordset.finance;
            const commission = accRecordset.commission;
            const classical = accRecordset.classical;
            const reports = accRecordset.reports;
            console.log(reports)
            bcrypt.compare(password, accPassword, function (error, result) {
                if (error) console.log(error);
                if (result == true) {
                    let token = jwt.sign({ username: username }, 'keyboard cat 4 ever', { expiresIn: 129600 });
                    const responseToken = JSON.stringify({ 
                                                            success: true, 
                                                            err: null, 
                                                            token: token,
                                                            admin: admin,
                                                            supplier: supplier,
                                                            network: network,
                                                            finance: finance,
                                                            commission: commission,
                                                            name : username,
                                                            classical : classical,
                                                            reports : reports
                                                        });
                    res.send(responseToken);
                } else {
                    const responseToken = JSON.stringify({ success: false, err: "username or password incorrect", token: null })
                    res.send(responseToken);
                }
            });
        }
    });
});

module.exports = router;