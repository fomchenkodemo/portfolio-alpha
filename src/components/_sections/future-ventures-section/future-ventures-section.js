import React from 'react';
import { Section, Heading, LongParagraph } from '../../_common';

import './future-ventures-section.scss';

const FutureVentures = () => (
  <Section id="future-ventures-section">
    <div className="row">
      <Heading level="2">Future ventures</Heading>
      <LongParagraph>
        Of course, I&apos;m a junior developer for now, and
        there is still a lot of stuff to learn.
        Here is a list of what I want to teach myself in 2019.
      </LongParagraph>
    </div>
    <div className="row">
      <h3>Absolutely necessary</h3>
      <ul className="future-ventures-list">
        <li>Advanced CSS (layouts, adaptive design, animation)</li>
        <li>SASS</li>
        <li>TypeScript</li>
        <li>Electron</li>
        <li>SQL-databases</li>
      </ul>
    </div>
    <div className="row">
      <h3>Wanna try</h3>
      <ul className="future-ventures-list">
        <li>Other front-end frameworks (Angular, Vue)</li>
        <li>Android development with Kotlin</li>
      </ul>
    </div>
  </Section>
);

export default FutureVentures;
