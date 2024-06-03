import React from 'react'
import './About.css'
import one from '.././assets/img/1.png'
const About = () => {
  return (
    <div className='about'>
      
      
      <div className="about-heading">
        <h1>ABOUT US</h1>
      </div>
      <div className="about-content">
      <div className="left">
        <img src={one} width={500} alt="" />
      </div>
      <div className="right">
      <div className="about-text">
        <h2> Unleash Your Solar Business Potential <br /> with the Power of OtoPilot</h2>
        <h1>Welcome to OtoPilot, your trusted partner in unlocking</h1>
        <p>At OtoPilot, we are passionate about renewable energy and the incredible impact it can have on our world. We understand that the solar industry is not just a business; it's a movement toward a sustainable and cleaner future.</p>
        <div className="about-btn">
            <button>EXPLORE ABOUT US <span>  →</span></button>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default About
