import React from 'react';
import { useSelector } from 'react-redux';
import './Footer.css';

const Footer = () => {
  // Extract copyright text from Redux store
  const { copyright } = useSelector(state => state.about.footer);

  // Portfolio link
  const portfolioLink = `https://symbioticlove.github.io/Portfolio/`;

  // Modify the first line of copyright text
  const modifiedCopyright = [...copyright]; // Create a copy of the array
  if (modifiedCopyright.length > 0) {
    modifiedCopyright[0] = modifiedCopyright[0].replace(
      'Matthew Ford',
      `<a href="${portfolioLink}" alt="Matthew Ford Portfolio" target="_blank" rel="noopener noreferrer" class="footer-link">Matthew Ford</a>`,
    );
  }

  // Payment service names and links
  const paymentServiceNames = ['PayPal', 'Cash App', 'Venmo', 'Zelle'];
  const paymentServiceLinks = [
    'https://www.paypal.com',
    'https://cash.app',
    'https://venmo.com',
    'https://www.zellepay.com',
  ];

  // Replace payment service names with links
  if (modifiedCopyright.length > 2) {
    paymentServiceNames.forEach((serviceName, index) => {
      modifiedCopyright[3] = modifiedCopyright[3].replace(
        new RegExp(serviceName, 'g'),
        `<a href="${paymentServiceLinks[index]}" alt="${serviceName}" target="_blank" rel="noopener noreferrer" class="footer-link">${serviceName}</a>`,
      );
    });
  }

  return (
    <div className="footer">
      {/* Display modified copyright text */}
      <div className="copyright">
        {modifiedCopyright.map((line, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: line }} />
        ))}
      </div>
      <div className="payment-images">
        <h4>Payments accepted through...</h4>
        {/* Display payment service logos */}
        <img
          src={process.env.PUBLIC_URL + '/ca_logo.svg'}
          alt="Cash App logo"
          className="ca-logo"
        />
        <img
          src="https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/C2/logos-buttons/optimize/34_Blue_PayPal_Pill_Button.png"
          alt="PayPal logo"
          className="pp-logo"
        />
        <img
          src={process.env.PUBLIC_URL + '/Venmo_Logo_White.png'}
          alt="Venmo logo"
          className="ven-logo"
        />
        <img
          src={process.env.PUBLIC_URL + '/Zelle_logo.png'}
          alt="Zelle logo"
          className="z-logo"
        />
        <h4>As well as cash and certified check</h4>
      </div>
    </div>
  );
};

export default Footer;
