import React from 'react';
import {
  AboutMyselfSection,
  MyStackSection,
  FutureVenturesSection,
  CyberCupSection,
  GitHubSection,
} from '../_sections';
import Footer from '../footer';

import './app.scss';

const App = () => (
  <React.Fragment>
    <AboutMyselfSection />
    <MyStackSection />
    <FutureVenturesSection />
    <CyberCupSection />
    <GitHubSection />
    <Footer />
  </React.Fragment>
);

export default App;
