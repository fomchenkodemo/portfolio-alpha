import React from 'react';
import { Section, Heading, LongParagraph } from '../../_common';

import './my-stack-section.scss';

const MyStackSection = () => (
  <Section id="my-stack-section" dark>
    <div className="row">
      <Heading level="2">My stack</Heading>
      <LongParagraph>
        JavaScript ecosystem is really rich.
        There are tons of different frameworks, libraries and tools.
        These are the ones I chose for creating SPAs, PWAs and mobile apps.
        Also a little bit of back-end.
      </LongParagraph>
    </div>
    <div className="row group">
      <div className="col span_1_of_3">
        <div className="tech">
          <img
            className="tech-logo"
            src="src/assets/images/js-logo.png"
            alt="JavaScript"
          />
          <p className="tech-name">
            JavaScript (ES6 &amp; ES7)
          </p>
        </div>
      </div>
      <div className="col span_1_of_3">
        <div className="tech">
          <img
            className="tech-logo"
            src="src/assets/images/react-logo.png"
            alt="React &amp; React Native"
          />
          <p className="tech-name">
            React &amp; React Native
          </p>
        </div>
      </div>
      <div className="col span_1_of_3">
        <div className="tech">
          <img
            className="tech-logo"
            src="src/assets/images/redux-logo.png"
            alt="Redux"
          />
          <p className="tech-name">
            Redux
          </p>
        </div>
      </div>
    </div>
    <div className="row group">
      <div className="col span_1_of_3">
        <div className="tech">
          <img
            className="tech-logo"
            src="src/assets/images/webpack-logo.png"
            alt="Webpack"
          />
          <p className="tech-name">
            Webpack 4
          </p>
        </div>
      </div>
      <div className="col span_1_of_3">
        <div className="tech">
          <img
            className="tech-logo"
            src="src/assets/images/node-logo.png"
            alt="Node.js"
          />
          <p className="tech-name">
            Node.js
          </p>
        </div>
      </div>
      <div className="col span_1_of_3">
        <div className="tech">
          <img
            className="tech-logo"
            src="src/assets/images/mongodb-logo.png"
            alt="MongoDB"
          />
          <p className="tech-name">
            MongoDB
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export default MyStackSection;
