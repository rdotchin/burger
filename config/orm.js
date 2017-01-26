//Import (require) the mysql connection from connection.js
const connection = require('./connection.js');


/*=================Methods to Execute MySQL Commands=============================*/
//exported to burgers.js
var orm = {
	//table is passed when called in burgers.js and cb stands for call back function
	selectAll: function(table, cb){
		var queryString = 'SELECT * FROM ' + table;
		connection.query(queryString, function(err, result){
			if (err) throw err;
 			cb(result);
		});	
	},
	//vals is an array of values that we want to save to cols
	//cols are the columns we want to insert the values into
	/*'INSERT INTO burgers (burger_name, devoured, date) VALUES (?, 0, 2017-01-24'*/
	insertOne: function(table, cols, vals, cb){
		var queryString = 'INSERT INTO ' + table;
		queryString += ' (' + cols.toString(' ') + ')';
		queryString += ' VALUES (?, 0, CURRENT_TIMESTAMP)';
		console.log("queryString " + queryString);
		//takes the  
		connection.query(queryString, vals, function(err, result){
			if(err) throw err;
			console.log("insertOne()\n");
			console.log(result);
			cb(result);
		});
	}

	/*updateOne: function(table, col, condition, cb){
		var queryString = 'UPDATE ' + table;
		queryString += ' SET '

	}*/
};

module.exports = orm;

