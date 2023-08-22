import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './NavMenu.css';

const NavMenu = ({ isScrolled }) => {
  // Extract navigation labels from Redux store
  const { top, requestQuote, serviceFees, faq } = useSelector(
    state => state.about.navigation,
  );

  // Scroll to the specified section with optional offset
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

        // Check screen width before applying the offset
        if (window.innerWidth >= 1068) {
          const targetOffsetTop =
            targetElement.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: targetOffsetTop + offsetInPixels,
            behavior: 'smooth',
          });
        } else {
          // Scroll to the target without offset
          const targetOffsetTop =
            targetElement.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: targetOffsetTop,
            behavior: 'smooth',
          });
        }
      }
    }
  };

  return (
    <nav className={`nav-menu ${isScrolled ? 'nav-menu-bar' : ''}`}>
      <ul>
        {/* Scroll to top */}
        <li>
          <a href="#" onClick={event => scrollToSection(event, '')}>
            {top}
          </a>
        </li>
        {/* Scroll to request quote section */}
        <li>
          <a
            href="#form-container"
            onClick={event => scrollToSection(event, '#form-container')}
          >
            {requestQuote}
          </a>
        </li>
        {/* Scroll to service fees section */}
        <li>
          <a
            href="#services-fees"
            onClick={event => scrollToSection(event, '#services-fees')}
          >
            {serviceFees}
          </a>
        </li>
        {/* Scroll to FAQ section */}
        <li>
          <a href="#faq" onClick={event => scrollToSection(event, '#faq')}>
            {faq}
          </a>
        </li>
      </ul>
    </nav>
  );
};

// Prop validation for isScrolled
NavMenu.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
};

export default NavMenu;
