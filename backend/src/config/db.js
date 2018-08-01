const sql = require("mssql");
const env = process.env.NODE_ENV || 'development';
const dbConfig = require('./config')[env];

sql.connect(dbConfig, function (err) {
    if (err)
        console.log(err);
});

module.exports = sql