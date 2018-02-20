const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const login = require('./users/login');
router.all('/login',jsonParser, login); 

const rounds = require('./commrounds/getOpenRounds');
router.all('/rounds',jsonParser, rounds);

const briefs = require('./briefs/getbriefs');
router.all('/briefs',jsonParser, briefs);

const organisations = require('./organisations/getOrganisations');
router.all('/organisations',jsonParser, organisations);

module.exports = router;