var connection = require('./connection.js');

var printQuestionMarks = (num) =>{
    var arr =[];
    
    for(i=0; i<num; i++){
        arr.push('?');
    }

    return arr.toString();
}

var objToSql = (ob) =>{
    var arr = [];
    for(var key in ob){
        var value = ob[key];

        if(Object.hasOwnProperty.call(ob, key)) {
            if(typeOf value === 'string' && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }

            arr.push(key+ '=' + value);
        }
    }

    return arr.toString();
}
var orm = {
    selectAll: (tableInput, cb)=>{
        var queryStr = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryStr, (err, result)=>{
            if(err) return err;
            cb(result);
        })
    },

    insertOne: (table, col, val, cb)=>{
        //INSERT INTO table_name (col) VALUES (val)
        var queryStr = 'INSERT INTO ' + table;
        queryStr += ` (${col}) VALUES = ??`
        }
}
module.exports = orm;