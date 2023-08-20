import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './NavMenu.css';

const NavMenu = ({ isScrolled }) => {
  const { top, requestQuote, serviceFees, faq } = useSelector(
    state => state.about.navigation,
  );

  return (
    <nav className={`nav-menu ${isScrolled ? 'nav-menu-bar' : ''}`}>
      <ul>
        <li>
          <a href="#">{top}</a>
        </li>
        <li>
          <a href="#">{requestQuote}</a>
        </li>
        <li>
          <a href="#">{serviceFees}</a>
        </li>
        <li>
          <a href="#">{faq}</a>
        </li>
      </ul>
    </nav>
  );
};

NavMenu.propTypes = {
  isScrolled: PropTypes.bool.isRequired, // Define the prop type and make it required
};

export default NavMenu;
