import React from 'react'
import './work.css'
import Otext from '../assets/img/otext.jpeg'
import Broad from '../assets/img/bridge.jpeg'
import neume from '../assets/img/neumeric.png'
import sudhi from '../assets/img/sudhi.png'
import client from '../assets/img/clients.png'
import { themeContext } from "../Context";
import { useContext } from "react";
import { motion } from 'framer-motion'
const Vork = () => {
  const theme=  useContext(themeContext);
  const darkTheme = theme.state.darkmode;
  return (
     <div className='work'>
      <div className='Clients'>
      <span style={{color: darkTheme? 'white': 'black'}}>Worked For All These </span>
        <span>Clients and firms</span>
        <span> My focus is on leveraging cutting-edge technology to streamline processes, enhance decision-making, and improve customer experiences. Whether it's digital transformation or risk management, I bring strategic insight to every project. Let's connect to explore how I can support your business goals. </span>
        <div className='blur' style={{ background: '#333333',top: '0%', left: '0%' }}></div>
          <button className="button">
            Hire Me
          </button>

        
      </div>
      <div className='w-right'>
            <motion.div className='w-mainCircle'
            initial={{rotate:45}}
            whileInView={{rotate:0}}
            viewport={{margin: '-40px'}}
            transition={{duration: '3.5', type: 'spring'}}
            >
                      <div className='w-seccircle' style={{left: '82%',top: '31%'}}>
                          <img src={Otext} alt=''/>
                      </div>
                      <div className='w-seccircle'style={{left: '33%',top: '-12%'}}>
                          <img src={neume} alt=''/>
                      </div>
                      <div className='w-seccircle'style={{left: '-15%',top: '31%'}}>
                          <img src={Broad} alt=''/>
                      </div>
                      <div className='w-seccircle'style={{left: '33%',top: '80%'}}>
                          <img src={sudhi} alt=''/>
                      </div>
                      <div className='w-seccircle'style={{left: '33%',top: '31%'}}>
                          <img src={client} alt=''/>
                      </div>
            </motion.div>
      <div className='blur' style={{ background: 'green',top: '0%', left: '0%' }}></div>
      </div>
     
    </div>
  )
}

export default Vork
