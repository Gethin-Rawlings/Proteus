// app.js
var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var env = process.env.NODE_ENV || 'development';
jwt  = require('jsonwebtoken')
sql = require("mssql");
dbConfig = require('./config/config')[env];
sql.connect(dbConfig, function (err) {
    
    if (err) console.log(err);

});

app.get('/', function (req, res) {
  res.send('hello world')
})
var UserController = require('./users/UserController');
app.all('/users',jsonParser, UserController); 

var rounds = require('./commrounds/getOpenRounds');
app.all('/rounds',jsonParser, rounds);

var briefs = require('./briefs/getbriefs');
app.all('/briefs',jsonParser, briefs);

var organisations = require('./organisations/getOrganisations');
app.all('/organisations',jsonParser, organisations);

module.exports = app;
