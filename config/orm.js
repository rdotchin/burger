//require the mysql connection from connection.js
var connection = require('./connection.js');

/*=================Methods to Execute MySQL Commands=============================*/

module.exports = {

	selectAll: function(){
	connection.query('SELECT * FROM burgers', function(err, rows, fields) {
  	if (err) throw err;
 
  	console.log(rows);
	});
	},
	
	insertOne: function(){
		connection.query('INSERT INTO burgers (burger_name, devoured, date) VALUES (?, 0, 2017-01-24', [preq.params.id], function(err, result){
			if(err) throw err;
			console.log(results);

		});
	}}/*,

	updateOne(){

	}*/

