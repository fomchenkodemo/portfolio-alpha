import React from 'react';
import { LongParagraph } from '../_common';

import './footer.scss';

const Footer = () => (
  <footer>
    <div className="row">
      <LongParagraph>
        Copyright &copy; 2019 by Vasily Fomchenko. All rights reserved.
      </LongParagraph>
      <LongParagraph>
        Website is in development mode. Version 1.0.0 coming early next month (August, 2019).
      </LongParagraph>
    </div>
  </footer>
);

export default Footer;
