import React, { useContext } from 'react'
import './Intro.css'
import LinkedIn from '../assets/img/linkedin.png';
import Instagram from'../assets/img/instagram.png';
import Git from '../assets/img/github.png'
import Damu from '../assets/img/damunew.png';
import Crown from '../assets/img/crown.png';
import Thumb from '../assets/img/thumbup.png';
import Floating from './Floating';
import { themeContext } from '../Context';
import {motion, spring} from 'framer-motion'

const Intro = () => {
  const transition ={
    duration: 2, type: 'spring'
  }
  const theme=  useContext(themeContext)
  const darkTheme = theme.state.darkmode;
  return (
    <div className='Intro' >
        <div className='i-left'>
            <div className='i-name'>
            <span style={{ color: darkTheme ? 'white' : 'black' }}>Hey I Am</span>
            <span>Damodhar</span>
            <span> A Java Full Stack Developer with 4+ years of experience in
                 building and deploying scalable,
                 high-performance applications. 
                 Proficient in frontend technologies (React, Angular, JavaScript), 
                 backend services (Java, Spring Boot, Microservices), 
                 and cloud platforms (AWS, Azure). 
            </span>
            </div>
            <button className='button'>
                Hire Me
            </button>
            <div className='i-icons'>
                <a href='https://www.linkedin.com/in/damodhar-datta-reddy-likki-4030052b7/'>
                <img src={LinkedIn} alt=''/>
                </a>
                <a href='https://github.com/likkidamu?tab=repositories'>
                <img src={Git} alt='Git'/>
                </a>
            </div>
        </div>
             <div className='i-right' >
                <div className='i-img'>
                <img src={Damu} alt='Damu' />
                </div>
                < motion.div 
                initial={{top: '1%', left: '10%' }}
                whileInView={{top: '1%', left: '60%' }}
                transition={transition}
                style={{ position: 'absolute', top: '1%', left: '60%' }}>
                  
                    <Floating image={Crown} txt1='FullStack Developer'   />
                </motion.div>
                < motion.div 
                initial={{top: '75%', left: '-10%' }}
                whileInView={{top: '75%', left: '10%' }}
                transition={transition}
                style={{ position: 'absolute', top: '65%', left: '10%' }}>
                <Floating image={Thumb} txt1='Innovative Designs' />
                </motion.div>
                <div className='blur' style={{ background: 'skyblue',top: '0', left: '25%' }}></div>
                <div className='blur' style={{ background: 'purple',top: '80%', left: '0%' }}></div>
            </div>
           
    </div>
  )
}

export default Intro
