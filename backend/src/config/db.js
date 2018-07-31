const sql = require("mssql");
const env = process.env.NODE_ENV || 'development';
const dbConfig = require('./config')[env];
const poolPromise = new sql.ConnectionPool(dbConfig)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
}