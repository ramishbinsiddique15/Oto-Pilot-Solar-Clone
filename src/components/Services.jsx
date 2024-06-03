import React from 'react'
import asset9 from '.././assets/img/Asset-9.png'
import asset33 from '.././assets/img/Asset-33.png'
import asset11 from '.././assets/img/Asset-11.png'
import './Services.css'

const Services = () => {
    const servicesCard = [
        {
            title: 'MARKETING',
            image: asset9
        },
        {
            title: 'SALES',
            image: asset33
        },
        {
            title: 'OPERATIONS',
            image: asset11
        }
    ]

    return (
        <div className='services'>
            <div className="about-heading">
                <h1>SERVICES</h1>
            </div>
            <div className="about-text">
                <h1>WHAT WE DO</h1>
                <p>Creating a company is a lot like crafting a story; you need a beginning, a middle, and an end. In the solar business, this is called marketing, sales, and operations. We tell the whole story.</p>
            </div>
            <div className="services-cards">
                {servicesCard.map((card, index) => (
                    <div key={index} className="card">
                        <div className="banner" style={{ backgroundImage: `url(${card.image})`, backgroundSize:'cover', backgroundPosition:'center' }}>
                        </div>
                        <h1>{card.title}</h1>
                        <button>LEARN MORE</button>
                    </div>
                ))}
            </div>
            <div className="about-btn">
                <button>BOOK A DEMO</button>
            </div>
        </div>
    )
}

export default Services
