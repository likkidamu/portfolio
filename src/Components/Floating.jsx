import React from 'react'
import './Floating.css'
const Floating = ({ image, txt1 ,style}) => {
  return (
    <div className='floating' style={style}>
        <img src={image} alt="icon" />
        <span>{txt1}</span>
    </div>
  )
}
export default Floating


