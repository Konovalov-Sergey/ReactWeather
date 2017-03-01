var React = require('react');

var WeatherMessage = ({temp, location}) => {
	
	return (
		<h3 className="text-center">Temperature is {temp} &deg;C in {location}</h3>
	);
};
module.exports = WeatherMessage;