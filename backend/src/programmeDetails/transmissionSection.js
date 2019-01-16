const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const bodyParser = require('body-parser');
const formidable = require('express-formidable');
const sql = require('../config/db')

router.use(bodyParser.urlencoded({ extended: true }));
router.use(formidable());

router.get('/transmissionSection', async (req, res) => {
    const programme = req.query.programme;
    console.log(programme)
    const request = new sql.Request();
    request.input('programme', sql.VarChar(14), programme);
    await request.execute('PR_GET_TRANSMISSION_SECTION', function (err, result) {
        if (err) console.log(err)
        if (result.recordset[0] === undefined) {
            const response = JSON.stringify({ success: false, err: "update Failed" })
            res.send(response);
        } else {
            var returnData = result.recordset;
            res.send(returnData);
        }
    });
});
module.exports = router;