const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const login = require('./users/login');
router.all('/login',jsonParser, login); 

const rounds = require('./commrounds/getOpenRounds');
router.all('/rounds',jsonParser, rounds);

const briefs = require('./briefs/getBriefs');
router.all('/briefs',jsonParser, briefs);

const organisations = require('./organisations/getOrganisations');
router.all('/organisations',jsonParser, organisations);

const userAdmin = require('./users/userAdmin');
router.all('/userAdmin',jsonParser, userAdmin); 

module.exports = router;