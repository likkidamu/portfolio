import React from 'react'
import './Services.css'
import Card from './Card';
import design from '../assets/img/desighn.webp';
import Softdev from '../assets/img/<Card.png';
import Esolutions from '../assets/img/esolution.png';
import Resume from '../assets/img/Damodhar_resume.docx'
import { themeContext } from '../Context';
import { useContext } from "react";
import { motion } from 'framer-motion';
const Services = () => {
  const transition ={
    duration: 2, type: 'spring'
  }
  const theme=  useContext(themeContext)
  const darkTheme = theme.state.darkmode;
  return (
    <div className='Services' id='Services'>
      <div className='review'>
        <span style={{color: darkTheme? 'white': ''}}>My services</span>
         <span>I am a Awesome Full stack developer<br/>
         I can provide all theses servives </span>
         <a href={Resume} download="Damodhar_Resume.docx">
          <button className="button">
            Download Resume
          </button>
          </a>
      </div>
      <div className='cards'>
            <motion.div 
            initial={{top: '-2rem', left: '8rem' }}
            whileInView={{left: '8rem', top: '2rem'}}
            transition={transition}
            style={{left: '8rem', top: '2rem'}}>
            <Card
            image= {design}
            heading= {'UI/UX Design'}
            details={"I specialize in designing modern responsive website"}
            moreDetails={`As a UI/UX designer, my goal is to create intuitive, engaging, and user-centered experiences. I focus on a seamless user journey, ensuring that every design decision contributes to both aesthetic appeal and usability.`}
            />
            </motion.div>
            <motion.div 
            initial={{top: '10rem', left: '-14rem' }}
            whileInView={{left: '-8rem', top: '10rem'}}
            transition={transition} 
            style={{left: '-8rem', top: '10rem'}}>
            <Card
            image= {Softdev}
            heading= {'Application Developement'}
            details={"Java Full stack development"}
            moreDetails={"Java Full Stack Development is the process of building both the front-end and back-end of web applications using Java. It covers everything from creating the user interface that users interact with, to building the server-side logic and database systems that power the application. Full stack developers manage the entire application development process, ensuring that all parts of the system work together seamlessly. Whether it's developing a scalable back-end, integrating with databases, or building an intuitive front-end, Java Full Stack developers handle the complete development cycle. This approach provides a cohesive, efficient way to deliver robust, functional applications."}            />
            </motion.div>
            <motion.div 
            initial={{left: '19rem', top: '20rem'}}
            whileInView={{left: '15rem', top: '20rem'}}
            transition={transition} 
            style={{left: '15rem', top: '20rem'}}>
             <Card
            image= {Esolutions}
            heading={'Enterprise Solutions'}
            details={"Build robust applications for businesses"}
            moreDetails={"Enterprise solutions involve building custom, scalable applications to meet the needs of large businesses. These applications support key functions like CRM, ERP, and inventory management, handling high volumes of data and integrating with other systems. Built with technologies like Java and cloud computing, enterprise solutions improve efficiency, streamline operations, and ensure security and scalability for growing businesses."}
            />
            </motion.div>
     </div>
    </div>
    
  )
}

export default Services
