var express = require('express');
var router = express.Router();

var food = require('../models/foods.js');

router.get('/', (req,res)=>{
    food.all((data)=>{
        var hbsObject ={
            foods: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    })
});

router.post('/api/foods', (req, res)=>{
    food.create(
        ['food_name', 'eaten'], 
        [req.body.food_name, req.body.eaten], (result)=>{
            res.json({id: result.insertId});
        })
})

router.put('/api/foods/:id', (req,res)=>{
    var condition = 'id = ' + req.params.id;
    burger.update({eaten : req.body.eaten}, condition, (result)=>{
        if(result.changedRows == 0){
            return res.status(404).end();
        }else {res.status(200).end()};
    })
})


module.exports = router