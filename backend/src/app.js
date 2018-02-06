// app.js
const express = require('express');
const app = express();
const router = require('./routes');
const env = process.env.NODE_ENV || 'development';
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');

jwt  = require('jsonwebtoken')
sql = require("mssql");

dbConfig = require('./config/config')[env];
sql.connect(dbConfig, function (err) {
    
    if (err) console.log(err);

});

app.use('/', router);

module.exports = app;
