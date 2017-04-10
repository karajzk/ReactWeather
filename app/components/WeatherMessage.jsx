var React = require('react');

var WeatherMessage =  ({location, temp}) => (
      <h3>I'ts {temp} in {location}</h3>
    );

module.exports = WeatherMessage;
