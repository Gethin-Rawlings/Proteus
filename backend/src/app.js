// app.js
const express = require('express');
const app = express();
const router = require('./routes');
const env = process.env.NODE_ENV || 'development';
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');


sql = require("mssql");

dbConfig = require('./config/config')[env];
sql.connect(dbConfig, function (err) {
    
    if (err) console.log(err);

});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});

app.use('/', router);

module.exports = app;
