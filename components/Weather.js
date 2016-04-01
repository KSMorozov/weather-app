import React, { PropTypes } from 'react';

const Weather = ({ weather }) =>
  <div className="center">
    <h3>Temperature: {Math.round(weather.temp.day - 273)} (C)</h3>
    <p>Pressure: {weather.pressure}</p>
    <p>Humidity: {weather.humidity}</p>
  </div>;

Weather.propTypes = {
  weather: PropTypes.object.isRequired,
};

export default Weather;
