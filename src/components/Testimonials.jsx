import React from 'react'
import './Testimonials.css'
import img1 from '.././assets/img/img (1).webp'
import img9 from '.././assets/img/img (9).webp'
import img2 from '.././assets/img/img (2).webp'
const Testimonials = () => {
    const testCard = [
        {img: img1, name: "Sarah L.", remarks: "\"The expertise of the OtoPilot team is unparalleled. They guided us through every step of our solar journey, and the results speak for themselves. Our energy bills have plummeted, and our carbon footprint has shrunk. Thank you, OtoPilot!\" - Sarah L."},
        {img: img9,name: "John D.", remarks: "\"OtoPilot has been a game-changer for our business. Their solar solutions have helped us save money and reduce our environmental impact. We couldn't be happier with the results.\" - John D."},
        {img: img2,name: "Isabella", remarks: "\"Working with OtoPilot was a breeze. Their team was professional, knowledgeable, and efficient. We're thrilled with our new solar system and the savings it's bringing us.\" - Isabella"}
    ]
  return (
    <div className='testimonials'>
      <div className="about-heading">
        <h1>TESTIMONIALS</h1>
      </div>
      <div className="about-text">
        <h1>WHAT OUR VALUED CLIENTS SAY ABOUT US</h1>
        <p>At OtoPilot, we take immense pride in the relationships we've built with our clients. Here's what some of them have to say about their experiences with us:</p>
      </div>
      <div className="test-cards">
        {testCard.map((card, index) => {
            return (
                <div key={index} className="card">
            <div className="info">
                <div className="img">
            <img src={card.img} width={120} alt="" />
            </div>
            <div className="name">{card.name}</div>
            </div>
            <div className="remarks">
                <p>{card.remarks}</p>
            </div>
        </div>
            )
        }
        )}
      </div>
    </div>
  )
}

export default Testimonials
