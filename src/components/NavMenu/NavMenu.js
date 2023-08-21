import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './NavMenu.css';

const NavMenu = ({ isScrolled }) => {
  const { top, requestQuote, serviceFees, faq } = useSelector(
    state => state.about.navigation,
  );

  const scrollToSection = (event, targetId) => {
    event.preventDefault();

    if (targetId === '') {
      // Scroll to the top with smooth behavior
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      // Scroll to the specified target with adjusted offset
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offsetInVh = -15; // Adjust this value as needed
        const viewportHeight = window.innerHeight;
        const offsetInPixels = (viewportHeight * offsetInVh) / 100; // Convert vh to pixels
        const targetOffsetTop =
          targetElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: targetOffsetTop + offsetInPixels,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <nav className={`nav-menu ${isScrolled ? 'nav-menu-bar' : ''}`}>
      <ul>
        <li>
          <a href="#" onClick={event => scrollToSection(event, '')}>
            {top}
          </a>
        </li>
        <li>
          <a
            href="#form-container"
            onClick={event => scrollToSection(event, '#form-container')}
          >
            {requestQuote}
          </a>
        </li>
        <li>
          <a
            href="#services-fees"
            onClick={event => scrollToSection(event, '#services-fees')}
          >
            {serviceFees}
          </a>
        </li>
        <li>
          <a href="#faq" onClick={event => scrollToSection(event, '#faq')}>
            {faq}
          </a>
        </li>
      </ul>
    </nav>
  );
};

NavMenu.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
};

export default NavMenu;
