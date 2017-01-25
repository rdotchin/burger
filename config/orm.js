//require the mysql connection from connection.js
var connection = require('./connection.js');

/*=================CONFIRM EXPORT/REQUIRE FROM CONNECTION.JS=====================*/
connection.query('SELECT * FROM burgers', function(err, rows, fields) {
  	if (err) throw err;
 	console.log('connection.js export to orm.js works');
 	console.log(rows);
  	
	});
/*=================Methods to Execute MySQL Commands=============================*/
//exported to burgers.js
module.exports = {

	selectAll: function(){
	connection.query('SELECT * FROM burgers', function(err, rows, fields) {
  	if (err) throw err;
 	console.log("selectAll function works\n");
 	console.log(rows);
  	
	});
	},
	
	insertOne: function(){
		connection.query('INSERT INTO burgers (burger_name, devoured, date) VALUES (?, 0, 2017-01-24', [preq.params.id], function(err, result){
			if(err) throw err;
			console.log("insertOne function works\n");
			console.log(results);

		});
	}}/*,

	updateOne(){

	}*/

