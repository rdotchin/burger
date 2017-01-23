var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var PORT = process.env.PORT || 8080;


var app = express();

app.listen(PORT, function(){
	console.log('listening on PORT http://localhost' + PORT)
})