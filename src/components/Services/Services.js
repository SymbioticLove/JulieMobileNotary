import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Services.css';
import pricesPDF from './prices.pdf'; // Import the PDF prices
import pricesPNG from './prices.png'; // Import the PNG prices
import mobilePNG from './mobilePrices.png'; //Import PNG mobile prices

const Services = () => {
  // Extract service and fee information from Redux store
  const { meetTitle, meetText, serviceTitle, serviceText } = useSelector(
    state => state.about.services,
  );

  const isSmallScreen = window.innerWidth < 767;

  // State to track whether the PDF can be rendered
  const [canRenderPDF, setCanRenderPDF] = useState(true);

  // Function to handle PDF rendering error
  const handlePDFError = () => {
    setCanRenderPDF(false);
  };

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
        {isSmallScreen ? (
          // Render download link with mobile image for small screens
          <>
            <img
              src={mobilePNG}
              alt="Mobile Prices"
              style={{ width: '100%', height: 'auto', marginBottom: '1rem' }}
            />
            <a
              href={canRenderPDF ? pricesPDF : pricesPNG}
              download={canRenderPDF ? 'prices.pdf' : 'prices.png'}
              className="prices-link"
            >
              View Prices
            </a>
          </>
        ) : (
          // Embed PDF or PNG based on rendering capability
          <object
            data={canRenderPDF ? pricesPDF : pricesPNG}
            type={canRenderPDF ? 'application/pdf' : 'image/png'}
            width="100%"
            height="600px"
          >
            <img
              src={pricesPNG} // Fallback image if PDF cannot be rendered
              alt="Prices"
              style={{ width: '100%', height: '600px', border: 'none' }}
              onError={handlePDFError}
            />
          </object>
        )}
      </div>
    </div>
  );
};

export default Services;
