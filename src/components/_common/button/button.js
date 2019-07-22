import React from 'react';

import './button.scss';

const Button = ({ children }) => (
  <a className="btn" href="#">{children}</a>
);

export default Button;
