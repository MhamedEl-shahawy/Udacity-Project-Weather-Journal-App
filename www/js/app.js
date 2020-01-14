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

	return appData.entryID;

};

// Function for getting app data
const getAppData = async ( entryID ) => {

	console.log( "getAppData()" );
	console.log( entryID );

};

// Main function used to add a journal entry to the app
const addJournalEntry = () => {

	// TO-DO Store user input

	// Get weather info, post data to server, and return entry from server
	const journalEntry = getWeatherInfo( 13659 )
							.then( function( weatherData ){ return postAppData( weatherData ); } )
							.then( function( entryID ){ return getAppData( entryID ); } );
	
	// TO-DO Update app display

};

// Add event listeners when the page is ready
document.addEventListener( 'DOMContentLoaded', () => {

	// Add functionality to 'Generate' button via click event listener
	document.querySelector( '#generate' ).addEventListener( 'click', addJournalEntry );

});