import React from 'react';
import { Heading } from '../_common';

import './header.scss';

const Header = () => (
  <header>
    <nav id="main-nav">
      <div className="row clearfix">
        <div id="lists-container" className="compressed">
          <ul id="home">
            <li className="list-option"><a href="#">Vasily Fomchenko</a></li>
          </ul>
          <ul id="main-list">
            <li className="list-option"><a href="#about-myself-section">About myself</a></li>
            <li className="list-option"><a href="#my-stack-section">My stack</a></li>
            <li className="list-option"><a href="#future-ventures-section">Future ventures</a></li>
            <li className="list-option"><a href="#cybercup-section">First project</a></li>
            <li className="list-option"><a href="#github-section">GitHub</a></li>
          </ul>
          <ul id="help-list">
            <li className="list-option"><a href="#">Contact</a></li>
          </ul>
        </div>
        <a id="mobile-nav-btn">
          <img
            id="menu-icon-light"
            className="mobile-nav-icon"
            src="src/assets/svg/menu-icon-light.svg"
            alt="Menu"
          />
          <img
            id="menu-icon-dark"
            className="mobile-nav-icon"
            src="src/assets/svg/menu-icon-dark.svg"
            alt="Menu"
          />
        </a>
      </div>
    </nav>
    <div id="greeting-container">
      <Heading level="1">
        Hello there. My name is Vasily.
        <br />
        And I&apos;m front-end developer.
      </Heading>
    </div>
    <a href="#about-myself-section" id="read-more-btn">
      <p href="#about-myself-section">Read more</p>
      <img
        href="#about-myself-section"
        src="src/assets/svg/down-arrow-icon.svg"
        alt="Down Arrow"
      />
    </a>
  </header>
);

export default Header;
