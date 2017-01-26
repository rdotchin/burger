/*setup a model for how to interface with the database*/

//Import (require) sql query functions from orm.js
var orm = require('./../config/orm.js');


/*=====================MODEL FOR HOW TO INTERFACE WITH THE DATABASE========================*/
var burger = {
	all: function(cb){
		orm.selectAll('burgers', function(res){
			/*console.log("all()\n");
			console.log(res);*/
			cb(res);
		})
	}
}







//export file
module.exports = burger;