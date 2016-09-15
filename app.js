// Add Express
var express = require('express');
var app = express();

// Body Parser
var bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json() );

// Postgres Setup
var pg = require( 'pg' );
var connectionString = process.env.DATABASE_URL || 'postgres:localhost:5432/mr_muggles';

// Open /public
app.use( express.static( 'public ') );

// Set Port
var port = process.env.PORT || 8080;

// Listen on port
app.listen( port, function () {

	console.log( "Server listening on port ", port );

});

// Serve Home Page
app.get( '/', function( req, res ) {

	console.log( 'Base URL hit' );
	res.send( 'public/index.html' );

});