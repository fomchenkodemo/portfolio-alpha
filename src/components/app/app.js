import React from 'react';
import {
  AboutMyselfSection,
  MyStackSection,
  FutureVenturesSection,
  CyberCupSection,
} from '../_sections';

import './app.scss';

const App = () => (
  <React.Fragment>
    <AboutMyselfSection />
    <MyStackSection />
    <FutureVenturesSection />
    <CyberCupSection />
  </React.Fragment>
);

export default App;
