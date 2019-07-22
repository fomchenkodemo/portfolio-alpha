import React from 'react';

import './heading.scss';

const Heading = ({ level, children }) => {
  switch (level) {
    case '1':
      return (
        <h1>{children}</h1>
      );
    case '2':
      return (
        <h2>{children}</h2>
      );
    case '3':
      return (
        <h3>{children}</h3>
      );
    default:
      return (
        <h3>{children}</h3>
      );
  }
};

export default Heading;
