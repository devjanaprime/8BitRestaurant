// Add Express
var express = require('express');
var app = express();
var path = require('path');
// Body Parser
var bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json() );

// Postgres Setup
var pg = require( 'pg' );
var connectionString = process.env.DATABASE_URL || 'postgres:localhost:5432/mr_muggles';

// Open /public
app.use( express.static( 'public') );

// Set Port
var port = process.env.PORT || 8080;

// Listen on port
app.listen( port, function () {

	console.log( "Server listening on port ", port );

});

// Serve Home Page
app.get( '/', function( req, res ) {

	console.log( 'Base URL hit' );
	res.sendFile(path.resolve( 'public/index.html' ));

});
app.use( express.static( 'node_modules/jquery/dist/') );

app.post('/employee', function(req,res){
	console.log('/employee hit', req.body);
	var first_name = req.body.first_name;
	var last_name = req.body.last_name;

	pg.connect(connectionString, function(err, client, done){
		if(err){
			console.log(err);
		} else {
			console.log('connected to db');
			console.log(first_name);
			client.query('INSERT INTO server(first_name, last_name) VALUES($1, $2)', [first_name, last_name]);
			res.send({success: true});
		}
	});


});
