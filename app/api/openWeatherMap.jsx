var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=cd1d1fdc733df9efe7d3273add1efb11';

//cd1d1fdc733df9efe7d3273add1efb11
//http://openweathermap.org/find?q=lviv

module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		
		return axios.get(requestUrl).then(function(res) {
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return (res.data.main.temp - 273.15).toFixed(1);
			}
		}, function (res) {
			throw new Error(res.data.message);
		});
	}
}