import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import './ContactForm.css';

const ContactForm = () => {
  const { disclaimer } = useSelector(state => state.about.disclaimer);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    emailjs.init('7UT1VfD_tYKRR3-pI');

    const formattedDatetime = format(
      new Date(datetime),
      "eee MM/dd/yyyy 'at' hh:mm a",
    );

    // Remove non-digit characters from the phone number
    const cleanedPhone = phone.replace(/\D/g, '');

    // Check if the phone number starts with a country code and remove it
    const countryCodes = '1';
    let filteredPhone = cleanedPhone;

    for (const code of countryCodes) {
      if (filteredPhone.startsWith(code)) {
        filteredPhone = filteredPhone.slice(code.length);
        break;
      }
    }

    // Format the remaining digits of the phone number
    const formattedPhone = filteredPhone.replace(
      /(\d{3})(\d{3})(\d{4})/,
      '($1)$2-$3',
    );

    const templateParams = {
      name,
      email,
      location,
      phone: formattedPhone,
      formattedDatetime,
      description,
    };

    emailjs.send('service_7zdka3b', 'template_tjih0rt', templateParams).then(
      function () {
        setShowSuccessMessage(true); // Show success message
        setName('');
        setEmail('');
        setLocation('');
        setPhone('');
        setDatetime('');
        setDescription('');
      },
      function (error) {
        console.error('Email send error:', error);
      },
    );
  };

  return (
    <div className="form-container" id="form-container">
      {/* Display disclaimer */}
      <h3>{disclaimer}</h3>
      <div>
        <h4>Request a Quote to Schedule an Appointment</h4>
        <p>
          What can we do for you? Please specify the number of signers and
          describe the documents needing notarization
        </p>
        <form onSubmit={handleSubmit} className="form" id="contact-form">
          <div className="form-left">
            <div className="form-row">
              <label htmlFor="name">Name (required)</label> {/* Add label */}
              <input
                type="text"
                id="name"
                className="grey"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <br />
            {/* Add similar label and accessibility enhancements for other inputs */}
            <div className="form-row">
              <label htmlFor="email">Email (required)</label>
              <input
                type="email"
                id="email"
                className="grey"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <br />
            <div className="form-row">
              <label htmlFor="location">Suggested Location (required)</label>
              <input
                type="text"
                id="location"
                className="grey"
                name="location"
                value={location}
                onChange={e => setLocation(e.target.value)}
                required
              />
            </div>
            <br />
            <div className="form-row">
              <label htmlFor="phone">Phone (optional)</label>
              <input
                type="tel"
                id="phone"
                className="grey"
                name="phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div className="form-right">
            <div className="form-row">
              <label htmlFor="datetime">Date/Time (optional)</label>
              <input
                type="datetime-local"
                id="datetime"
                className="grey"
                name="datetime"
                value={datetime}
                onChange={e => setDatetime(e.target.value)}
              />
            </div>
            <br />
            <label htmlFor="description" className="bottom-label">
              Description (required)
            </label>
            <textarea
              id="description"
              className="grey"
              name="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows="4"
              maxLength="1000"
              placeholder="What can I do for you?"
              required
            ></textarea>
            <br />
          </div>
        </form>
        <div className="submit-container">
          <button type="submit" form="contact-form">
            Submit
          </button>{' '}
        </div>
        {showSuccessMessage && ( // Conditional rendering of success message
          <div className="success-container">
            <div className="success-message">
              <p>Message Sent Successfully!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
