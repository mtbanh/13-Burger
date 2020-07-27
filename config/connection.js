var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'vietnamese_foods_db'
});
var MYSQL_URL = process.env.JAWSDB_URL || 'mysql://root:password@localhost:3306/vietnamese_foods_db'
var connection = mysql.createConnection(MYSQL_URL);

connection.connect((err)=>{
    if (err) return err;
    console.log(`connected`)
});

module.exports = connection;