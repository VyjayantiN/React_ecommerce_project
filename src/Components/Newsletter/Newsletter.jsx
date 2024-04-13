import React from 'react'
import './Newsletter.css'
import exclusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1> Newsletter</h1>
        <h1>Stay Updated </h1>
        <p> with wonderful offers for you</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="exclusive_image" />
      </div>
    </div>
  )
}

export default Offers
