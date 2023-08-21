import React from 'react';
import { useSelector } from 'react-redux';
import './About.css';

const About = () => {
  const { aboutTitle, aboutText } = useSelector(state => state.about.about);

  return (
    <div className="about-container">
      <h2>{aboutTitle}</h2>
      <div>
        <div className="about-center">
          <img
            src={process.env.PUBLIC_URL + '/Hero.jpg'}
            alt="Seal"
            className="seal"
          />
        </div>
        <div className="about-text-container">
          <p>{aboutText[0]}</p>
          <p>{aboutText[1]}</p>
        </div>
      </div>
      <div className="about-around">
        <img
          src={process.env.PUBLIC_URL + '/harley.jpg'}
          alt="Harley Motorcycle"
          className="pic-row harley"
        />
        <img src={process.env.PUBLIC_URL + '/NNA1.png'} className="pic-row" />
        <img src={process.env.PUBLIC_URL + '/NSA1.png'} className="pic-row" />
      </div>
    </div>
  );
};

export default About;
