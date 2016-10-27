//load the NPM package 
var mysql      = require('mysql');
var inquirer   = require('inquirer');

//setting up global variables

var user=;

//crud commands

var create =;
var read =;
var update =;
var delete =;

// Create a prompt with a series of questions

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

	]).then(function(user){})

//setting up a server connection

var connection = mysql.createConnection({
  host     : 'vhw3t8e71xdz9k14.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user     : 'hatuc0i9gyqj9mfp',
  password : 'i62aphdy0h3d0rt3',
  database : 'xxnj8e6dligu5izc'
});

 //run connection

connection.connect();
 
connection.query('SELECT 4 + 14 AS solution', function(err, rows, fields) {
  if (err) throw err;
 
  console.log('The solution is: ', rows[0].solution);
});
 

connection.end();