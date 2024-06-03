import React from 'react'
import asset1 from '.././assets/img/Asset-1.png'
import asset8 from '.././assets/img/Asset-8.png'
import asset6 from '.././assets/img/Asset-6.png'
import asset4 from '.././assets/img/Asset-4.png'
import asset5  from '.././assets/img/Asset-5.png'
import empowerSolar from '.././assets/img/empower-solar.png'
import energyOne from '.././assets/img/energy-one.png'
import './Partners.css'
const Partners = () => {
    const imgSrc = [
        {src: asset1},
        {src: asset8},
        {src: asset6},
        {src: asset4},
        {src: asset5},
        {src: empowerSolar},
        {src: energyOne}
    ]
  return (
    <div className='partners'>
      <div className="about-heading">
        <h1>PARTNERS</h1>
      </div>
      <div className="about-text">
        <h1>UNLEASH YOUR SOLAR BUSINESS POTENTIAL</h1>
        <p>Join forces with OtoPilot, your strategic partner for success in the solar industry. At OtoPilot, we're committed to helping our partners thrive by providing innovative solutions and unparalleled support.</p>
      </div>
      <div className="partner-cards">
        {imgSrc.map((img, index) => {
          return (
            <div key={index} className="card">
              <img src={img.src} width={250} alt="partner" />
            </div>
          )
        }
        )}
      </div>
    </div>
  )
}

export default Partners
