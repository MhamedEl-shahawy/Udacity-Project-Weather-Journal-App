// OpenWeatherMap API
const personalKey = '4de8f23828879dec98d1f230e00b3bd4';
const baseURL1 = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const baseURL2 = ',us&units=imperial&appid=';

const createWeatherURL = ( zipCode ) => {

	return baseURL1 + zipCode + baseURL2 + personalKey;

};

// Function used to get weather data from OpenWeatherMap API
const getWeatherInfo = async ( zipCode ) => {

	const weatherURL = createWeatherURL( zipCode );

	// TO-DO Store user input

	const response = await fetch( weatherURL );

	try{

		const weatherData = await response.json();
		console.log( weatherData );
		return weatherData;

	}catch( error ){

		console.log( error );

	}

};

// Function for posting app data
const postAppData = async ( weatherData ) => {

	console.log( "postAppData()" );
	console.log( weatherData );

	return "51294515"; // Debug entry ID

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