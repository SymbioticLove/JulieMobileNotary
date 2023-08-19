import React from 'react';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const { headerTitle, headerSubtitle } = useSelector(
    state => state.about.header,
  );
  return (
    <div className="wrapper">
      <div className="header-container">
        <div className="logo">
          <img src="https://placehold.co/150" />
        </div>
        <div className="title">
          <h1>{headerTitle}</h1>
          <p>{headerSubtitle}</p>
        </div>
        <div className="nav-menu"></div>
      </div>
    </div>
  );
};

export default Header;
