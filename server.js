// Initialize global vars
const appData = {}; // Empty obj used as endpoint for all routes
const port = 8080;

// Include Node.js modules
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );

// Initialize instance of the server using Express
const app = express();

// Setup server
app.use( express.static('www') ); // Specify app directory
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
app.use( cors() ); // Allow cross origin functionality
app.listen( port, portInfo );

// Port info callback
function portInfo(){
	console.log( `Server Running on Port: ${port}` );
}

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route
