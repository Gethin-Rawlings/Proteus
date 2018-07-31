const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const formidable = require('express-formidable');

router.use(bodyParser.urlencoded({extended: true}));
router.use(formidable());

router.get('/userDetails', async (req, res) => {
    const username = req.query.user;
    const request = new sql.Request()
    request.input('username', sql.VarChar(50), username);
    await request.execute('PR_GET_USER_DETAILS', function (err, result) {

        res.send(result.recordset[0]);
    })
});

module.exports = router;