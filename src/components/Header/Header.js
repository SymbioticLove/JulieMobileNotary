import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Header.css';
import NavMenu from '../NavMenu/NavMenu';

const Header = () => {
  // Extract header title and subtitle from Redux store
  const { headerTitle, headerSubtitle } = useSelector(
    state => state.about.header,
  );

  // State for scroll and typed subtitle
  const [isScrolled, setIsScrolled] = useState(false);
  const [typedSubtitle, setTypedSubtitle] = useState('');
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  // Handle scroll event
  const handleScroll = () => {
    if (window.innerWidth >= 1068) {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  };

  // Add and remove scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Typing effect for header subtitle
  useEffect(() => {
    if (currentLetterIndex < headerSubtitle.length + 1) {
      let typingTimer;

      if (currentLetterIndex === 0) {
        typingTimer = setTimeout(() => {
          setCurrentLetterIndex(1);
        }, 1000);
      } else {
        typingTimer = setTimeout(() => {
          setTypedSubtitle(headerSubtitle.substring(0, currentLetterIndex));
          setCurrentLetterIndex(prevIndex => prevIndex + 1);
        }, 100);
      }

      return () => clearTimeout(typingTimer);
    }
  }, [currentLetterIndex, headerSubtitle]);

  return (
    <div
      className={`header-container ${
        isScrolled && window.innerWidth >= 1068 ? 'shadow' : ''
      }`}
    >
      <div
        className={`title ${
          isScrolled && window.innerWidth >= 1068 ? 'bar-title' : ''
        }`}
      >
        {/* Display logo */}
        <div
          className={`logo ${
            isScrolled && window.innerWidth >= 1068 ? 'bar-logo' : ''
          }`}
        >
          <img src="https://placehold.co/200" alt="RSS Logo" />
        </div>
        {/* Display header title and typed subtitle */}
        <div>
          <h1>{headerTitle}</h1>
          <div className="subtitle">
            <p>{typedSubtitle}</p>
          </div>
        </div>
      </div>
      {/* Display navigation menu */}
      <div className="nav-menu-container">
        <NavMenu isScrolled={isScrolled} />
      </div>
    </div>
  );
};

export default Header;
