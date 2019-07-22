import React from 'react';
import {
  Section,
  Heading,
  LongParagraph,
  Button,
} from '../../_common';

import './cybercup-section.scss';

const CyberCupSection = () => (
  <Section id="cybercup-section" dark>
    <div className="row">
      <Heading level="2">
        <img
          id="cybercup-logo"
          src="src/assets/svg/cybercup-logo.svg"
          alt="CyberCup"
        />
      </Heading>
      <LongParagraph>
        Over the past year I have been working on my first commercial project.
        This is a utility for gamers, allowing them to bet on their skills.
      </LongParagraph>
    </div>
    <div className="row">
      <div className="btn-container">
        <Button>Watch the video</Button>
      </div>
    </div>
  </Section>
);

export default CyberCupSection;
