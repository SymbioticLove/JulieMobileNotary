import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Header.css';
import NavMenu from '../NavMenu/NavMenu';

const Header = () => {
  const { headerTitle, headerSubtitle } = useSelector(
    state => state.about.header,
  );

  const [isScrolled, setIsScrolled] = useState(false);
  const [typedSubtitle, setTypedSubtitle] = useState('');
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <div className={`header-container ${isScrolled ? 'shadow' : ''}`}>
      <div className={`title ${isScrolled ? 'bar-title' : ''}`}>
        <div className={`logo ${isScrolled ? 'bar-logo' : ''}`}>
          <img src="https://placehold.co/150" alt="RSS Logo" />
        </div>
        <div>
          <h1>{headerTitle}</h1>
          <p>{typedSubtitle}</p>
        </div>
      </div>
      <div className="nav-menu-container">
        <NavMenu isScrolled={isScrolled} />
      </div>
    </div>
  );
};

export default Header;
