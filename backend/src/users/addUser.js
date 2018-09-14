const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const bodyParser = require('body-parser');
const formidable = require('express-formidable');
const jwt = require('jsonwebtoken');
const sql = require('../config/db')

router.use(bodyParser.urlencoded({ extended: true }));
router.use(formidable());

router.post('/updateUsers', async (req, res) => {
    const username = req.fields.userName;
    const userFirstname = req.fields.userFirstname;
    const userLastname = req.fields.userLastname;
    const userEmailAddress = req.fields.userEmailAddress;
    const userMobileNumber = req.fields.userMobileNumber;
    const accountExpiryDate = req.fields.accountExpiryDate;
    const userIdIndie = req.fields.userIdIndie;
    const password = bcrypt.hashSync(req.fields.userPassword, 10);
    const request = new sql.Request();
    request.input('username', sql.VarChar(50), username);
    request.input('userFirstname', sql.VarChar(50), userFirstname);
    request.input('userLastname', sql.VarChar(50), userLastname);
    request.input('userEmailAddress', sql.VarChar(50), userEmailAddress);
    request.input('userMobileNumber', sql.VarChar(50), userMobileNumber);
    request.input('accountExpiryDate', sql.VarChar(50), accountExpiryDate);
    request.input('userIdIndie', sql.VarChar(50), userIdIndie);
    request.input('password', sql.VarChar(50), password);
    await request.execute('PR_ADD_USER', function (err, result) {
        if (err) console.log(err)
        if (result.recordset[0] === undefined) {
            const response = JSON.stringify({ success: false, err: "update Failed" })
            res.send(response);
        } else {
            const response = JSON.stringify({ success: true, err: null })
            res.send(response);
        }
    });
});

module.exports = router;