// OpenWeatherMap API
const personalKey = '4de8f23828879dec98d1f230e00b3bd4';
const baseURL1 = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const baseURL2 = ',us&units=imperial&appid=';

const createWeatherURL = ( zipCode ) => {

	return baseURL1 + zipCode + baseURL2 + personalKey;

};

// Function used to get weather data from OpenWeatherMap API
const getWeatherInfo = async ( zipCode ) => {

	const weatherURL = createWeatherURL( zipCode ); // Create valid API URL
	const response = await fetch( weatherURL ); // Get weather info from OpenWeatherMap.org

	try{

		const weatherData = await response.json(); // Convert response to JSON and store
		weatherData.zipCode = zipCode; // Store selected zip code in return data
		return weatherData;

	}catch( error ){

		console.log( error );

	}

};

// Function for posting app data to the server
const postAppData = async ( weatherData ) => {

	// Get user input
	const feelings = document.querySelector( '#feelings' ).value;

	// Create data for app entry
	const date = new Date();
	const entryID = date.getTime();
	const dateString = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;

	const appData = {
		'entryID': entryID,
		'date': dateString,
		'zipCode': weatherData.zipCode,
		'temp': weatherData.main.temp,
		'feelings': feelings
		};

	const response = await fetch( '/upload', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify( appData )
		});

	try{

		const returnData = await response.json();
		return returnData.entryID;

	}catch( error ){

		console.log( error );

	}

};

// Function for getting app data from the server
const getAppData = async ( entryID ) => {

	const response = await fetch( '/all' );

	try{

		const appData = await response.json(); // Convert response to JSON and store
		console.log( appData );
		return appData;

	}catch( error ){

		console.log( error );

	}

};

// Update app UI with the app data
const updateUI = async ( appData ) => {

	document.querySelector( '#date' ).innerHTML = appData.date;
	document.querySelector( '#temp' ).innerHTML = appData.temp;
	document.querySelector( '#content' ).innerHTML = appData.feelings;

};

// Main function used to add a journal entry to the app
const addJournalEntry = () => {

	// Store user input
	const zipCode = document.querySelector( '#zip' ).value;

	// Get weather info, post data to server, and return entry from server
	getWeatherInfo( zipCode )
		.then( function( weatherData ){ return postAppData( weatherData ); } )
		.then( function( entryID ){ return getAppData( entryID ); } )
		.then( function( appData ){ updateUI( appData );} );

};

// Add event listeners when the page is ready
document.addEventListener( 'DOMContentLoaded', () => {

	// Add functionality to 'Generate' button via click event listener
	document.querySelector( '#generate' ).addEventListener( 'click', addJournalEntry );

});