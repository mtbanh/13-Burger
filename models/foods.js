var orm = require('../config/orm.js');

var food ={
    all: function(cb){
        orm.selectAll('foods', (res)=>{
            cb(res);
        })
    },

    create: ( col, vals, cb)=>{
        orm.insertOne('foods', col, vals, (res)=>{
            cb(res)
        })
    },

    update: (objColVals, condition, cb)=>{
        orm.updateOne('foods', objColVals, condition, (res)=>{
            cb(res)
        })
    },

    delete: (condition, cb)=>{
        orm.deleteOne('foods', condition, (res)=>{
            cb(res)
        })
    }
};

module.exports = food;