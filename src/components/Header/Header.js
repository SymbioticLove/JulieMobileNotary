import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const { headerTitle, headerSubtitle } = useSelector(
    state => state.about.header,
  );

  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div className={`header-container ${isScrolled ? 'shadow' : ''}`}>
      <div className="logo">
        <img src="https://placehold.co/150" alt="Logo" />
      </div>
      <div className="title">
        <h1>{headerTitle}</h1>
        <p>{headerSubtitle}</p>
      </div>
      <div className="nav-menu"></div>
    </div>
  );
};

export default Header;
