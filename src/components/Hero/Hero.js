import React from 'react';
import { useSelector } from 'react-redux';
import './Hero.css';

const Hero = () => {
  // Extract counties and hero text from Redux store
  const { counties, heroText } = useSelector(state => state.about.hero);

  // Email and phone links
  const emailLink = `mailto:remotesigningservices@gmail.com?subject=Mobile%20Notary%20Inquiry`;
  const phoneLink = `tel:214-616-4549`;

  // Replace email and phone strings in heroText with links
  const formattedHeroText = heroText
    .replace(
      'remotesigningservices@gmail.com',
      `<a href="${emailLink}" alt="Email Me" class="contact">remotesigningservices@gmail.com</a>`,
    )
    .replace(
      '(214)616-4549',
      `<a href="${phoneLink}" alt="Call Me" class="contact">(214)616-4549</a>`,
    );

  return (
    <div className="hero-container">
      {/* Display counties */}
      <div className="title-container">
        <h3>{counties}</h3>
      </div>
      {/* Display hero text */}
      <div className="text-container">
        <p dangerouslySetInnerHTML={{ __html: formattedHeroText }} />
        {/* Display email and phone buttons */}
        <div className="phone">
          <a href={emailLink} alt="Email Me">
            <button>Email Me</button>
          </a>
          <a href={phoneLink} alt="Call Me">
            <button>Call Me</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
