var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'vietnamese_foods_db'
});

connection.connect((err)=>{
    if (err) return err;
    console.log(`connected`)
});

module.exports = connection;