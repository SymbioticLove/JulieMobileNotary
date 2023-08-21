import React from 'react';
import { useSelector } from 'react-redux';
import './Services.css';

const Services = () => {
  const {
    meetTitle,
    meetText,
    feesTitle,
    feesSubtitle1,
    feesSubtitle2,
    feesSubtitle3,
    notaryFees,
    estateFees,
    surcharges,
    serviceTitle,
    serviceText,
  } = useSelector(state => state.about.services);

  const renderItems = items => {
    return items.map((item, index) => <p key={index}>{item}</p>);
  };

  return (
    <div id="services-fees">
      <div className="fees-wrapper">
        <div className="meeting">
          <h2>{meetTitle}</h2>
          <p>{meetText}</p>
          <img
            src={process.env.PUBLIC_URL + '/coffee.jpg'}
            alt="Meeting Locations"
          />
        </div>
        <div className="meeting">
          <h2>{serviceTitle}</h2>
          <p>{serviceText}</p>
          <img
            src={process.env.PUBLIC_URL + '/handshake.jpg'}
            alt="Meeting Locations"
          />
        </div>
      </div>
      <div className="fees">
        <h2>{feesTitle}</h2>
        <div className="fee-container">
          <div>
            <h3>{feesSubtitle1}</h3>
            {renderItems(notaryFees)}
          </div>
          <div>
            <h3>{feesSubtitle2}</h3>
            {renderItems(estateFees)}
          </div>
          <div className="surcharges">
            <h3>{feesSubtitle3}</h3>
            {renderItems(surcharges)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
