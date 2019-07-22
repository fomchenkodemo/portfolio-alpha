import React from 'react';
import { Section, Heading, LongParagraph } from '../_common';

import './about-myself-section.scss';

const AboutMyselfSection = () => (
  <Section id="about-myself-section">
    <div className="row">
      <Heading level="2">About myself</Heading>
      <LongParagraph>
        I&apos;ve never dreamed of being programmer, to be honest.
        I was hooked by coding only in university. Despite my hatred towards math and physics,
        I had success in software engineering subjects.
        I&apos;ve played around with a lot of different technologies and programming languages,
        such as Java, C# and .NET, C++ and Python.
        But I&apos;ve always wanted to find out how outstanding user interfaces are created.
        And here JavaScript came into the picture.
        Since that very moment I&apos;ve finally decided to try myself as a front-end developer.
        And I can say, I&apos;m loving it.
      </LongParagraph>
    </div>
  </Section>
);

export default AboutMyselfSection;
