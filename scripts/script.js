//dom manip//

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) => {
	const cityName = data.cityName;
	const weather = data.weather;

	//update details template

	details.innerHTML = `
  <h5 class="my-3">${cityName.EnglishName}</h5>
	<div class="my-3">${weather.WeatherText}</div>
	<div class="display-4 my-4">
			<span>${weather.Temperature.Metric.Value}</span>
			<span>&deg;C</span>
	</div>
`;
	// remove the d-none class if present:
	if (card.classList.contains('d-none')) {
		card.classList.remove('d-none');
	}
};

const updateCity = async (city) => {
	// console.log(city);
	const cityName = await getCity(city);
	const weather = await getWeather(cityName.Key);

	return {
		cityName: cityName,
		weather: weather,
	};
};

cityForm.addEventListener('submit', (e) => {
	//prevent refresh
	e.preventDefault();

	const city = cityForm.city.value.trim();
	cityForm.reset();
	//trim to clear any white-space

	//updat UI with city info.
	updateCity(city)
		.then((data) => updateUI(data))
		.catch((err) => console.log(err));
});
