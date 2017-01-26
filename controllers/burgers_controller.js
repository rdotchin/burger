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

router.post(function(req, res){

	})
router.put(function(req, res){

	})



module.exports = router;