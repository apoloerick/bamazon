//Modules 
var mysql      = require('mysql');
var inquirer   = require('inquirer');
var queries	   = require('/.queries')


//setting up a server connection
var connection = mysql.createConnection({
  host     : 'vhw3t8e71xdz9k14.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user     : 'hatuc0i9gyqj9mfp',
  password : 'i62aphdy0h3d0rt3',
  database : 'xxnj8e6dligu5izc'
});


//display items
function display(item, callback){

	item.query()
}

// create functions for use in main function

function askUser(){

	// prompt part

inquirer.prompt([
	{
		type: "input",
		message: "Enter your item id number?",
		name:"idnumber"
	},

	{
		type: "input",
		message: "How many do you need?",
		name:"quantity"
	}

	]).then(function(user){
		//update id number and quantity
		
		idNum = user.idnumber;

		quant = user.quantity;
		//check
		console.log("Your item Id Number is: "+idNum,"Quantity: "+quant)
	})


}
askUser();
 
connection.query('u 4 + 14 AS solution', function(err, rows, fields) {
  if (err) throw err;
 
  console.log('The solution is: ', rows[0].solution);
});
 

 //run connection

connection.connect(function(err){

	if(err) throw err;
	display(connection);
})