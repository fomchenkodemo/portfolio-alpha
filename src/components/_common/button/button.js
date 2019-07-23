/* eslint-disable react/jsx-no-target-blank */

import React from 'react';

import './button.scss';

const Button = ({ href, blank, children }) => {
  if (blank) {
    return (
      <a className="btn" href={href} target="_blank">{children}</a>
    );
  }

  return (
    <a className="btn" href={href}>{children}</a>
  );
};

export default Button;
