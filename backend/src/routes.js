const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const programmeSection = require('./programmeDetails/programmeSection');
router.all('/programmeSection', jsonParser, programmeSection);

const login = require('./users/login');
router.all('/login', jsonParser, login);

const rounds = require('./commrounds/getOpenRounds');
router.all('/rounds', jsonParser, rounds);

const briefs = require('./briefs/getBriefs');
router.all('/briefs', jsonParser, briefs);

const organisations = require('./organisations/getOrganisations');
router.all('/organisations', jsonParser, organisations);

const userAdmin = require('./users/useradmin');
router.all('/useradmin', jsonParser, userAdmin);

const updateUsers = require('./users/updateUsers');
router.all('/updateusers', jsonParser, updateUsers);

const userDetails = require('./users/userDetails');
router.all('/userDetails', jsonParser, userDetails);

const programmesearch = require('./searches/programmesearch');
router.all('/programmesearch', jsonParser, programmesearch);

const proposalsearch = require('./searches/proposalsearch');
router.all('/proposalsearch', jsonParser, proposalsearch);

const programmeSearchColumns = require('./searches/programmeSearchColumns');
router.all('/programmeSearchColumns', jsonParser, programmeSearchColumns);

module.exports = router;