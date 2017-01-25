/*=======================Connect Node to MySQL==============================*/
//require mysql npm package
var mysql = require('mysql');

//create connection to burgers_db set to variable named connection
var connection = mysql.createConnection({
  			host     : 'localhost',
  			user     : 'root',
  			password : '',
  			database : 'burgers_db'
	});

//establish a connection
/*connection.connect();*/
/*====================END Connect Node to MySQL==============================*/

//export the mysql connection variable to be used in orm.js
module.exports = connection;


