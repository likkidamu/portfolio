import React from 'react'
import './Experience.css'
import { themeContext } from "../Context";
import { useContext } from "react";
const Experience = () => {
  const theme=  useContext(themeContext)
  const darkTheme = theme.state.darkmode;
  return (
    <div className='expirience' id='Experience'>
            <div className='Achievements'>
                <div className='circle' style={{color: darkTheme? 'black': ''}}> 4+</div>
                <span>Years</span>
                <span>Experience</span>
            </div>
            <div className='Achievements'>
                <div className='circle' style={{color: darkTheme? 'black': ''}}>10+</div>
                <span>Completed</span>
                <span>Projects</span>
            </div>
            <div className='Achievements'>
                <div className='circle'style={{color: darkTheme? 'black': ''}}>2</div>
                <span>Leading multinational</span>
                <span>Companies</span>
            </div>
    </div>

  )
}

export default Experience
