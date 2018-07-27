// app.js
const express = require('express');
const app = express();
const router = require('./routes');
const env = process.env.NODE_ENV || 'development';
const morgan = require('morgan');
const cors = require('cors');
const compression = require("compression");
const helmet = require("helmet");
sql = require("mssql");

dbConfig = require('./config/config')[env];
sql.connect(dbConfig, function (err) {
    if (err)
        console.log(err);
});

app.use(morgan('combined'));
app.use(helmet());
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    next();
});
app.use(compression());
app.use('/', router);

module.exports = app;
