// OpenWeatherMap API
const personalKey = '4de8f23828879dec98d1f230e00b3bd4';
const baseURL1 = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const baseURL2 = ',us&appid=';

const createWeatherURL = ( zipCode ) => {

	return baseURL1 + zipCode + baseURL2 + personalKey;

};

// Function used to get weather data from OpenWeatherMap API
const getWeatherInfo = async ( zipCode ) => {

	const weatherURL = createWeatherURL( zipCode );

	const response = await fetch( weatherURL );

	try{

		const weatherData = await response.json();
		console.log( weatherData );
		return weatherData;

	}catch( error ){

		console.log( error );

	}

};

/* Function to POST data */


/* Function to GET Project Data */


// Main function used to add a journal entry to the app
const addJournalEntry = () => {

	console.log( "addJournalEntry()" );

};

// Add event listeners when the page is ready
document.addEventListener( 'DOMContentLoaded', () => {

	// Add functionality to 'Generate' button via click event listener
	document.querySelector( '#generate' ).addEventListener( 'click', addJournalEntry );

});