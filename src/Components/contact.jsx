import React, { useRef, useEffect, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [done,isDone]= useState(false);
  // Initialize Email.js with your Public Key (API Key)
  useEffect(() => {
    emailjs.init('Kn1nPqLjf96Sy4WGd'); // Public API Key (User ID)
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_f7w53lu', 'template_dtta4lf', form.current)
      .then(
        (result) => {
          console.log('SUCCESS:', result.text);
          form.current.reset();
          isDone(true);
        },
        (error) => {
          console.log('FAILED:', error.text);
        }
      );
  };

  // Correctly placed return statement inside the functional component
  return (
    <div className='contact-form' id='Contact'>
      <div className='c-left'>
        <span>Get in Touch</span>
        <span>Please Fill Out This Form</span>
        <div className='blur' style={{ background: '#1E90FF', top: '70%', left: '-15%' }}></div>
      </div>
      <div className='c-right'>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='user_Name' className='user' placeholder='Name' />
          <input type='text' name='user_Email' className='user' placeholder='Email' />
          <textarea name='message' className='user' placeholder='Message' />
          <input type='submit' className='button' value='Send' />
          {done && <span className="thank-you-message">{'Thanks for Contacting!!'}</span>}
          </form>
        <div className='blur' style={{ background: 'purple', top: '40%', left: '40%' }}></div>
      </div>
    </div>
  );
};

export default Contact;
