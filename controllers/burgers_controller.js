var express = require('express');
var app = express();
var path = require('path')
require('./../models/burger.js');
var PORT = process.env.PORT || 8080;

//router
app.get('/index', function(req, res){
	res.sendFile(path.join(__dirname + './../views/index.handlebars'));
})


module.exports = app.listen(PORT, function(){
	console.log("listening on PORT http://localhost:" + PORT);
});