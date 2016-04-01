import React, { PropTypes } from 'react';

const Content = ({ children }) =>
  <div className="content">
    {children}
  </div>;

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
