import React, { PropTypes } from 'react';
import Weather from './Weather';

const Forecast = ({ forecast }) =>
  <div>{forecast.map((day, i) => <Weather key={i} weather={day} />)}</div>;
Forecast.propTypes = {
  forecast: PropTypes.array.isRequired,
};

export default Forecast;
