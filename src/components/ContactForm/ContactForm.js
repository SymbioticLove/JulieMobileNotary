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

    emailjs.init('T4558Y3IxSEuZqC0l');

    const formattedDatetime = format(
      new Date(datetime),
      "eee MM/dd/yyyy 'at' hh:mm a",
    );

    // Format the phone number before sending
    const cleanedPhone = phone.replace(/\D/g, ''); // Remove non-digit characters
    const formattedPhone = cleanedPhone.replace(
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

    emailjs.send('service_eoyk5kl', 'template_plfpr2h', templateParams).then(
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
              <label htmlFor="location">Location (required)</label>
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
