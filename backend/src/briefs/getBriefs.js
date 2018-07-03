const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const bodyParser = require('body-parser');

/*
router.get('/briefs', function (req, res) {
            var paramaters = req.query;
            var organisation = paramaters.organisation;
            var year = paramaters.year;
            var round = paramaters.round;
            var request = new sql.Request();
            request.input('organisation', sql.Int, organisation) ;
            request.input('year', sql.Int, year) ;
            request.input('round', sql.Int, round) ;  
            request.query('select	cb.CB_NUMBER,cb.CB_CREATOR_ORG_ID,cb.CB_NOT_FOR_COMMISSIONING,crb.CBY_COMMISSIONING_EDITOR from	COMMISSIONING_BRIEFS cb join	COMMISSIONING_BRIEF_YEARS cby on		cb.CB_NUMBER = cby.CB_NUMBER join	COMM_ROUND_BRIEFS crb on cby.CBY_NUMBER = crb.CBY_NUMBER where	crb.ORG_ORGANISATION_ID = @organisation and		crb.CR_ROUND = @round and		crb.CR_YEAR = @year ', function (err, result) {
                if (err) console.log(err)
                res.send(result.recordset);
            });
        });
*/

router.get('/briefs', function (req, res) {
    const paramaters = req.query;
    const organisation = paramaters.organisation;
    const year = paramaters.year;
    const round = paramaters.round;
    const request = new sql.Request();
    request.input('organisation', sql.Int, organisation);
    request.input('year', sql.Int, year);
    request.input('round', sql.Int, round);
    request.input('PARAMS', sql.VarChar(1000), JSON.stringify(paramaters));
    request.execute('PR_GET_BRIEFS', function (err, result) {
        if (err) console.log(err)
        res.send(JSON.stringify(result.recordset));
    });
});

module.exports = router;