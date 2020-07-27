var connection = require('./connection.js');
const { query } = require('express');

var printQuestionMarks = (num) => {
    var arr = [];

    for (i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
}

var objToSql = (ob) => {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + '=' + value);
        }
    }

    return arr.toString();
}
var orm = {
    selectAll: (tableInput, cb) => {
        var queryStr = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryStr, (err, result) => {
            if (err) return err;
            cb(result);
        })
    },

    insertOne: (table, col, vals, cb) => {
        //INSERT INTO table_name (col) VALUES (val)
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += col.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, (err, result)=>{
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    updateOne: (table, objColVals, condition, cb)=>{
        //UPDATE table SET col=valu WHERE some_col = some_val
        var queryStr = " UPDATE " + table;
        queryStr += " SET "; queryStr += objToSql(objColVals); queryStr += " WHERE "; queryStr+= condition;
        console.log(queryStr);
        connection.query(queryStr, (err, result)=>{
            if (err) return err;
            cb(result);
        })
    },

    deleteOne: (table, condition, cb)=>{
        var queryStr = `DELETE FROM ` + table;
        queryStr += " WHERE ";
        queryStr += condition;

        connection.query(queryStr, (err, result)=>{
            if(err) {return err};
            cb(result);
        })
    }
}
module.exports = orm;