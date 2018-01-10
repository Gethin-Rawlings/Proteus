var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var UserController = require('./users/UserController');
router.all('/users',jsonParser, UserController); 

var rounds = require('./commrounds/getOpenRounds');
router.all('/rounds',jsonParser, rounds);

var briefs = require('./briefs/getbriefs');
router.all('/briefs',jsonParser, briefs);

var organisations = require('./organisations/getOrganisations');
router.all('/organisations',jsonParser, organisations);

module.exports = router;