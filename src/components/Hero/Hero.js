import React from 'react';
import { useSelector } from 'react-redux';
import './Hero.css';

const Hero = () => {
  const { counties, heroText } = useSelector(state => state.about.hero);

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
      <div className="title-container">
        <h3>{counties}</h3>
      </div>
      <div className="text-container">
        <p dangerouslySetInnerHTML={{ __html: formattedHeroText }} />
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
