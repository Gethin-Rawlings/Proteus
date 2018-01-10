// app.js
var express = require('express');
var app = express();
var router = require('./routes');
var env = process.env.NODE_ENV || 'development';
jwt  = require('jsonwebtoken')
sql = require("mssql");
dbConfig = require('./config/config')[env];
sql.connect(dbConfig, function (err) {
    
    if (err) console.log(err);

});

app.use('/', router);

module.exports = app;
