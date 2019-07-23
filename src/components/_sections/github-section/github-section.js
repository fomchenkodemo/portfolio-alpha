import React from 'react';
import { Section, Heading, LongParagraph } from '../../_common';

import './github-section.scss';

const GitHubSection = () => (
  <Section id="github-section">
    <div className="row">
      <Heading level="2">GitHub</Heading>
      <LongParagraph>
          Other projects are stored on my GitHub page.
          Unfortunately, it has become a complete mess in recent months. My fault.
          Clean and updated version of my GitHub will be available early next month
          (August, 2019). Stay tuned.
      </LongParagraph>
    </div>
    <div className="row">
      <img
        id="github-logo"
        src={require('../../../assets/images/github-logo.png')}
        alt="GitHub"
      />
    </div>
  </Section>
);

export default GitHubSection;
