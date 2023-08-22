import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import './ContactForm.css';

const ContactForm = () => {
  // Extract disclaimer text from Redux store
  const { disclaimer } = useSelector(state => state.about.disclaimer);

  // State for form input fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');

  // Handle form submission
  const handleSubmit = event => {
    event.preventDefault();

    // Initialize EmailJS
    emailjs.init('T4558Y3IxSEuZqC0l');

    // Prepare email template and send email
    const formattedDatetime = format(
      new Date(datetime),
      "eee MM/dd/yyyy 'at' hh:mm a",
    );

    const templateParams = {
      name,
      email,
      location,
      phone,
      formattedDatetime, // Pass pre-formatted datetime
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
      {/* Display disclaimer */}
      <h3>{disclaimer}</h3>
      <div>
        <h4>Request a Quote to Schedule an Appointment</h4>
        <form onSubmit={handleSubmit} className="form" id="contact-form">
          <div className="form-left">
            {/* Input fields for name, email, location, and phone */}
            {/* ... */}
          </div>
          <br />
          <div className="form-right">
            {/* Input fields for date/time and description */}
            {/* ... */}
          </div>
        </form>
        <div className="submit-container">
          {/* Submit button */}
          <input type="submit" value="Submit" form="contact-form" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
