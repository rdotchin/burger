var express = require('express');
var router = express.Router();
/*var path = require('path')*/
var burger = require('./../models/burger.js');



/*===========================EXPRESS ROUTES====================================*/
router.get('/', function(req, res){
	res.redirect('/index');
});

router.get('/index', function(req, res){
	burger.all(function(data){
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	})
});

router.post('/index/create', function(req, res){
	burger.create(['burger_name', 'devoured', 'date'], [req.body.burger_name, '0', 'CURRENT_TIMESTAMP'], function(data){
		console.log("Create burger :\n");
		console.log(data);
		res.redirect('/index');
	})

	})
router.put(function(req, res){

	})



module.exports = router;