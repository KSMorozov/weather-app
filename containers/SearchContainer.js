import React, { Component, PropTypes } from 'react';
import Content from '../components/Content';
import SearchBar from '../components/SearchBar';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'San Francisco',
    };
    this.handleSubmitCity = this.handleSubmitCity.bind(this);
    this.handleUpdateCity = this.handleUpdateCity.bind(this);
  }

  handleSubmitCity(e) {
    e.preventDefault();
    this.context.router.push({
      pathname: 'forecast',
      query: {
        city: this.state.city,
      },
    });
    this.setState({ city: '' });
  }

  handleUpdateCity(e) {
    this.setState({ city: e.target.value });
  }

  render() {
    return (
      <Content>
        <h2 className="title center">Enter a City Name</h2>
        <SearchBar
          onSubmitCity={this.handleSubmitCity}
          onUpdateCity={this.handleUpdateCity}
          city={this.state.city}
        />
      </Content>
    );
  }
}

SearchContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default SearchContainer;
