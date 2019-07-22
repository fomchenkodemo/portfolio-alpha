import React from 'react';
import AboutMyselfSection from '../about-myself-section';
import MyStackSection from '../my-stack-section';
import FutureVentures from '../future-ventures';
import CyberCupSection from '../cybercup-section';

import './app.scss';

const App = () => (
  <React.Fragment>
    <AboutMyselfSection />
    <MyStackSection />
    <FutureVentures />
    <CyberCupSection />
  </React.Fragment>
);

export default App;
