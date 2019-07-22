import React from 'react';
import {
  AboutMyselfSection,
  MyStackSection,
  FutureVenturesSection,
  CyberCupSection,
  GitHubSection,
} from '../_sections';

import './app.scss';

const App = () => (
  <React.Fragment>
    <AboutMyselfSection />
    <MyStackSection />
    <FutureVenturesSection />
    <CyberCupSection />
    <GitHubSection />
  </React.Fragment>
);

export default App;
