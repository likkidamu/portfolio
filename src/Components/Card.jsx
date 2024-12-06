import React, { useState } from 'react';
import './Card.css';
import { useContext } from "react";
import { themeContext } from '../Context';
import { motion } from 'framer-motion';
const Card = ({ image, heading, details, moreDetails }) => {
  const theme = useContext(themeContext);
  const darkTheme = theme.state.darkmode;


  const [showFullScreen, setShowFullScreen] = useState(false);

  const handleLearnMoreClick = () => {
    setShowFullScreen(true);
  };


  const handleCloseFullScreen = () => {
    setShowFullScreen(false);
  };

  return (
    <div className="card">
      <img className="card-image" src={image} alt="logo" />
      <span className="card-heading" style={{ color: darkTheme ? 'black' : '' }}>
        {heading}
      </span>
      <span className="card-details" style={{ color: darkTheme ? 'black' : '' }}>
        {details}
      </span>

      <button className='c-button' onClick={handleLearnMoreClick}>Learn more</button>

      {showFullScreen && (
        <motion.div 
        className="full-screen-overlay"
          initial={{ opacity: 0}} 
          animate={{ opacity: 1}}   
          exit={{ opacity: 0 }}    
          transition={{ duration: 1 }}    
        >
          <div className="full-screen-content" style={{ color: darkTheme ? 'black' : '' }}>
            <h2>More Details</h2>
            <p>{moreDetails}</p>
            <button className="close-btn" onClick={handleCloseFullScreen}>Close</button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Card;
