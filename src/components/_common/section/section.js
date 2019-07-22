import React from 'react';

import './section.scss';

const Section = ({ id, dark, children }) => {
  if (dark) {
    return (
      <section id={id} className="dark">{children}</section>
    );
  }

  return (
    <section id={id}>{children}</section>
  );
};

export default Section;
