import React, { Component, PropTypes } from 'react';
import Content from '../components/Content';
import Forecast from '../components/Forecast';
import { fetchWeather } from '../utils/fetchUtils';

class ForecastContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      forecast: {},
    };
  }

  componentDidMount() {
    fetchWeather(this.props.location.query.city)
      .then((res) => this.setState({ forecast: res, loading: false }));
  }

  render() {
    return (
      <Content>
        <h2 className="center">5-Days Forecast for {this.props.location.query.city}</h2>
        {
          !this.state.loading
          ? <Forecast forecast={this.state.forecast.list} />
          : <div>Loading</div>
        }
      </Content>
    );
  }
}

ForecastContainer.propTypes = {
  location: PropTypes.shape({
    query: PropTypes.object.isRequired,
  }).isRequired,
};

export default ForecastContainer;
