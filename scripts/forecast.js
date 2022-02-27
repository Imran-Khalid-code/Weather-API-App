//interacting with the api.

const key = 'vkcIBnGI1paIIj2wq7iRxEyOsNX7BuAZ';
//key from the accu weather website as a reference
//id not part of query parameter as in brackets, so place question mark after(after ? is what is inside query parameter).
//get weather info:
const getWeather = async (anything) => {
	const baseUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';

	const query = `${anything}?apikey=${key}`;
	//this apikey is just referecning the key above in the global space.
	const response = await fetch(baseUrl + query);
	const data = await response.json();
	console.log(data[0]);
	return data[0];
	//this data is the data.Key below - that key that we get from the first fetch which we are passing through as an argument. we are looking for this id which points to the data.Key belwo. grab it at the first index.
};

// getWeather('318251')
// 	.then((data) => console.log(data))
// 	.catch((err) => console.log(err));

//get city info:
const getCity = async (city) => {
	const baseUrl =
		'http://dataservice.accuweather.com/locations/v1/cities/search';
	const query = `?apikey=${key}&q=${city}`;

	const response = await fetch(baseUrl + query);
	const data = await response.json();
	console.log(data[0]);
	return data[0];
};
