// OpenWeatherMap API
const personalKey = '4de8f23828879dec98d1f230e00b3bd4';
const baseURL1 = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const baseURL2 = '&appid=';

const createWeatherURL = ( zipCode ) => {

	return baseURL1 + zipCode + baseURL2 + personalKey;

};

/* Function to GET Web API Data*/

/* Function to POST data */


/* Function to GET Project Data */
