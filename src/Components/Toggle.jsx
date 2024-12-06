import React, { useContext } from 'react'
import './Toggle.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../Context'
const Toggle = () => {
  const theme = useContext(themeContext)
  const darkTheme = theme.state.darkmode;
  const handleclick=()=>{
      theme.dispatch({type :'toggle'});
  }
  return (
    <div className='toggle' onClick={handleclick}>
      <Moon/>
      <Sun/>
      <div className='pointer' style={darkTheme? {left: '2px'}:{right: '2px'}}>  </div>

    </div>
  )
}

export default Toggle
