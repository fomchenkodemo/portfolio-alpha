/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { Component } from 'react';
import { Heading } from '../_common';

import './header.scss';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      sticky: false,
      compressed: true,
    };
  }

  componentDidMount() {
    window.onresize = () => this.toggleStickyOnResize();
    window.onscroll = () => this.toggleStickyOnScroll();

    if (window.innerWidth <= 767) {
      this.setState({ sticky: true });
    } else {
      this.toggleStickyOnScroll();
    }
  }

  toggleStickyOnResize() {
    if (window.innerWidth > 767) {
      this.toggleStickyOnScroll();
    } else {
      this.setState({ sticky: true });
    }
  }

  toggleStickyOnScroll() {
    if (window.innerWidth > 767) {
      const element = document.getElementById('about-myself-section');
      const elementRect = element.getBoundingClientRect().top;

      if (elementRect <= 60) {
        this.setState({ sticky: true });
      } else {
        this.setState({ sticky: false });
      }
    }
  }

  static scrollToTargetAdjusted(sectionId) {
    if (sectionId === '') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      return;
    }

    const element = document.getElementById(sectionId);
    const headerOffset = 58; // Not 60 to prevent space between sections

    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;

    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }

  toggleMenu() {
    const { compressed } = this.state;

    this.setState({ compressed: !compressed });
  }

  closeMenu() {
    this.setState({ compressed: true });
  }

  onOptionClick(event) {
    event.preventDefault();
    Header.scrollToTargetAdjusted(event.target.getAttribute('href').substr(1));
    this.closeMenu();
  }

  render() {
    const { sticky } = this.state;
    let mainNavClass = null;
    if (sticky) mainNavClass = 'sticky-nav';

    const { compressed } = this.state;
    let listsContainerClass = null;
    if (compressed) listsContainerClass = 'compressed';

    return (
      <header>
        <nav id="main-nav" className={mainNavClass}>
          <div className="row clearfix">
            <div id="lists-container" className={listsContainerClass}>
              <ul id="home">
                <li className="list-option">
                  <a href="#" onClick={event => this.onOptionClick(event)}>Vasily Fomchenko</a>
                </li>
              </ul>
              <ul id="main-list">
                <li className="list-option">
                  <a href="#about-myself-section" onClick={event => this.onOptionClick(event)}>About myself</a>
                </li>
                <li className="list-option">
                  <a href="#my-stack-section" onClick={event => this.onOptionClick(event)}>My stack</a>
                </li>
                <li className="list-option">
                  <a href="#future-ventures-section" onClick={event => this.onOptionClick(event)}>Future ventures</a>
                </li>
                <li className="list-option">
                  <a href="#cybercup-section" onClick={event => this.onOptionClick(event)}>First project</a>
                </li>
                <li className="list-option">
                  <a href="#github-section" onClick={event => this.onOptionClick(event)}>GitHub</a>
                </li>
              </ul>
              <ul id="help-list">
                <li className="list-option">
                  <a href="#" onClick={event => this.onOptionClick(event)}>Contact</a>
                </li>
              </ul>
            </div>
            <a id="mobile-nav-btn" onClick={() => this.toggleMenu()}>
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
        <a href="#about-myself-section" id="read-more-btn" onClick={event => this.onOptionClick(event)}>
          <p href="#about-myself-section" onClick={event => this.onOptionClick(event)}>Read more</p>
          <img
            href="#about-myself-section"
            src="src/assets/svg/down-arrow-icon.svg"
            alt="Down Arrow"
            onClick={event => this.onOptionClick(event)}
          />
        </a>
      </header>
    );
  }
}

export default Header;
