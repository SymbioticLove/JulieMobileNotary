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

  const handleSubmit = event => {
    event.preventDefault();

    // Initialize EmailJS
    emailjs.init('T4558Y3IxSEuZqC0l');

    // Prepare the email template and send the email
    const formattedDatetime = format(
      new Date(datetime),
      "eee MM/dd/yyyy 'at' hh:mm a",
    );

    const templateParams = {
      name,
      email,
      location,
      phone,
      formattedDatetime, // Pass the pre-formatted datetime
      description,
    };

    emailjs.send('service_eoyk5kl', 'template_plfpr2h', templateParams).then(
      function () {
        alert('Message Sent Successfully!');
        // Clear form fields after successful submission
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
      <h3>{disclaimer}</h3>
      <div>
        <h4>Request a Quote to Schedule an Appointment</h4>
        <form onSubmit={handleSubmit} className="form" id="contact-form">
          <div className="form-left">
            <div className="form-row">
              <input
                type="text"
                id="name"
                className="grey"
                name="name"
                placeholder="Name (required)"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <br />

            <div className="form-row">
              <input
                type="email"
                id="email"
                className="grey"
                name="email"
                placeholder="Email (required)"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <br />

            <div className="form-row">
              <input
                type="text"
                id="location"
                className="grey"
                name="location"
                placeholder="Location (required)"
                value={location}
                onChange={e => setLocation(e.target.value)}
                required
              />
            </div>
            <br />
            <div className="form-row">
              <input
                type="tel"
                id="phone"
                className="grey"
                name="phone"
                placeholder="Phone (optional)"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div className="form-right">
            <div className="form-row">
              <label htmlFor="datetime" className="datetime">
                Date/Time (optional)
              </label>
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

            <br />
            <textarea
              id="description"
              className="grey"
              name="description"
              placeholder="What are you looking for? (optional)"
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows="4"
              maxLength="1000"
              required
            ></textarea>
            <br />
          </div>
        </form>
        <div className="submit-container">
          <input type="submit" value="Submit" form="contact-form" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
