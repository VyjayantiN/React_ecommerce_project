import React from 'react'
import './Hero.css'
import hand from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hero from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
       <div> 
        <div className="hero-hand-icon"> 
        <p> New</p> 
        <img src={hand} alt="hand">
        </img>
        </div>
        <p>Collections</p>
        <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest collections</div>
            <img src={arrow} alt="arrow"/>
        </div>
      </div>
      <div className= "hero-right">
        <img src={hero} alt="hero"/>
      </div>
    </div>
  )
}

export default Hero
