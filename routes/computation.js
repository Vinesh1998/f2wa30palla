var express = require('express');

var router = express.Router();



/* GET Computation page. */

router.get('/', function(req,res,next) {

    var num1 = Math.floor(Math.random() * 10);

    var num2 = Math.floor(Math.random() * 10);

    var num3 = Math.floor(Math.random() * 10);

    var froundFunction = Math.fround(num1);

    var randomFunction = Math.random(num2);

    var roundFunction = Math.round(num3);

    res.render('computation',

    {

        title: 'Vineesh Palla computing functions',

        num1: num1,

        num2: num2,

        num3: num3,

    

        fround: froundFunction,

        random: randomFunction,

        round: roundFunction,

       

     });



    });




    module.exports = router;