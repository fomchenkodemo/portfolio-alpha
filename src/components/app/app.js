import React from 'react';
import AboutMyselfSection from '../about-myself-section';
import MyStackSection from '../my-stack-section';
import FutureVentures from '../future-ventures';

import './app.scss';

const App = () => (
  <React.Fragment>
    <AboutMyselfSection />
    <MyStackSection />
    <FutureVentures />
  </React.Fragment>
);

export default App;
