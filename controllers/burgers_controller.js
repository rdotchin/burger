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

/*UPDATE burgers SET devoured=1 WHERE id = 1*/
router.put('/index/update/:id', function(req, res){
	var condition = ' WHERE id = ' + req.params.id;
	//devoured=value of input devour
	burger.update({devoured: req.body.devour}, condition, function(){
		console.log('Burger ' + req.params.id + ' updated!');
		res.redirect('/index');
	})
	})



module.exports = router;