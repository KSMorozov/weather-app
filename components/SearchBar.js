import React, { PropTypes } from 'react';

const SearchBar = (props) =>
  <form className="center" onSubmit={props.city ? props.onSubmitCity : null}>
    <input
      value={props.city}
      onChange={props.onUpdateCity}
      type="text"
    />
    <div className="center">
      <div onClick={props.city ? props.onSubmitCity : null}
        className={`button raised ${props.city ? 'green' : 'grey'}`}
      >
        <div className="center">Get Weather</div>
        <paper-ripple fit></paper-ripple>
      </div>
    </div>
  </form>;

SearchBar.propTypes = {
  city: PropTypes.string.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  onSubmitCity: PropTypes.func.isRequired,
};

export default SearchBar;
