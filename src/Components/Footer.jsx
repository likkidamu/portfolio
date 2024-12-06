import React from 'react';
import { UilFacebook, UilInstagram, UilGithub, UilGoogle } from '@iconscout/react-unicons';
import wave from '../assets/img/wave.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      {/* Wave background */}
      <img src={wave} style={{ width: '100%' }} alt="Wave" />
      
      {/* Footer Content */}
      <div className='f-content'>
        <span>
          <UilGoogle color='white' size='3rem' /> 
          <a href="mailto:likkidamodhar@gmail.com" className="email-link">likkidamodhar@gmail.com</a>
        </span>

        {/* Social Media Links */}
        <div className='f-container'>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <UilInstagram color="white" size="3rem" />
          </a>
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <UilFacebook color="white" size="3rem" />
          </a>
          <a href="https://github.com/likkidamu?tab=repositories" target="_blank" rel="noopener noreferrer">
            <UilGithub color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
