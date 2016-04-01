import React, { PropTypes } from 'react';
import Header from './Header';

const App = ({ children }) =>
  <div className="container">
    <Header />
    {children}
  </div>;

App.propTypes = {
  children: PropTypes.node,
};

export default App;
