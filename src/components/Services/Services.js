import React from 'react';
import { useSelector } from 'react-redux';
import './Services.css';
import pricesPDF from './prices.pdf'; // Import the PDF file

const Services = () => {
  // Extract service and fee information from Redux store
  const { meetTitle, meetText, feesTitle, serviceTitle, serviceText } =
    useSelector(state => state.about.services);

  const isSmallScreen = window.innerWidth < 767;

  return (
    <div id="services-fees">
      <div className="fees-wrapper">
        {/* Display meeting services */}
        <div className="meeting">
          <h2>{meetTitle}</h2>
          <p>{meetText}</p>
          <img
            src={process.env.PUBLIC_URL + '/coffee.jpg'}
            alt="Meeting Locations"
          />
        </div>
        {/* Display other services */}
        <div className="meeting">
          <h2>{serviceTitle}</h2>
          <p>{serviceText}</p>
          <img
            src={process.env.PUBLIC_URL + '/handshake.jpg'}
            alt="Meeting Locations"
          />
        </div>
      </div>
      {/* Display fees and surcharges */}
      <div className="fees">
        <h2>{feesTitle}</h2>
        <p className="feeDis">Subject to change without notice</p>
        {isSmallScreen ? (
          // Render download link for small screens
          <a href={pricesPDF} download="prices.pdf" className="prices-link">
            View Prices
          </a>
        ) : (
          // Embed PDF for larger screens
          <embed
            src={pricesPDF}
            type="application/pdf"
            width="100%"
            height="600px"
            style={{ border: 'none' }} // Add borderless style
          />
        )}
      </div>
    </div>
  );
};

export default Services;
