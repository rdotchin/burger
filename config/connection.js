/*=======================Connect Node to MySQL==============================*/
//require mysql npm package
const mysql = require('mysql');

//create connection to burgers_db set to variable named connection
const connection = mysql.createConnection({
  			host     : 'localhost',
  			user     : 'root',
  			password : '',
  			database : 'burgers_db'
	});

//establish a connection
connection.connect(function(err){
	if(err){
		console.log('error connection: ' + err.stack)
	}
	console.log('connected to mysql as id ' + connection.threadId);
});
/*====================END Connect Node to MySQL==============================*/

//export the mysql connection variable to be used in orm.js
module.exports = connection;


