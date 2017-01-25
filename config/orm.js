//require the mysql connection from connection.js
var connection = require('./connection.js');

/*=================Methods to Execute MySQL Commands=============================*/

function selectAll(){
connection.query('SELECT * FROM burgers', function(err, rows, fields) {
  	if (err) throw err;
 
  	console.log(rows);
	});
}//End selectAll()

function insertOne(){

}//End insertOne()

function updateOne(){

}//end updateOne()