var React = require('react');

var About = (props) => {
	return (
		<div>
			<h3 className="text-center">About</h3>
			<p>
				This is a weather application build on React
			</p>
			<p>
				Here are some of the tools I used:
			</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react" target="_blank">React</a>
				</li>
				<li>
					<a href="http://openweathermap.org" target="_blank">Open Weather Map </a>
					- I used Open Weather Map to search for weather data by city name.
				</li>
			</ul>
		</div>
	)
};

module.exports = About;