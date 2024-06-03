import React from 'react';
import './Footer.css';
import logo from '.././assets/img/logo.png';
import plane from '.././assets/img/plane.png';
import insta from '.././assets/img/insta.png';
import linkedin from '.././assets/img/linkedin.png'
import fb from '.././assets/img/fb.png'
const Footer = () => {
    return (
      <>
        <div className='footer'>
            <div className="footer-section about-us">
                <img src={logo} width={250} alt="logo" />
                <div className="about-us-txt">
                    <p>64 E BROADWAY RD SUITE 200 TEMPE, AZ 85282</p>
                    <p>+1 888-779-1995</p>
                    <p>JOIN NOW</p>
                    <p>BOOK A DEMO</p>
                </div>
            </div>
            <div className="footer-section industry">
                <h1>Industry</h1>
                <div className="industry-txt">
                    <p>COMMERCIAL</p>
                    <p>HEALTH</p>
                    <p>FINANCIAL</p>
                    <p>GOVERNMENT</p>
                    <p>EDUCATION</p>
                </div>
            </div>
            <div className="footer-section industry">
                <h1>RESOURCES</h1>
                <div className="industry-txt">
                    <p>FAQ</p>
                    <p>COURSES</p>
                    <p>BLOG</p>
                </div>
            </div>
            <div className="footer-section industry">
                <h1>SERVICES</h1>
                <div className="industry-txt">
                    <p>MARKETING</p>
                    <p>OPERATION</p>
                    <p>SALE</p>
                    <div className="input">
                        <div className="icon">
                            <img src={plane} width={35} alt="plane" />
                        </div>
                        <input type="text" name="email" placeholder='Email address' />
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="social">
<img src={insta} width={30} alt="" />
<img src={linkedin} width={30} alt="" />
<img src={fb} width={30} alt="" />
</div>
<div className = "copyright">
    <p>Copyright © 2023 OtoPilot</p>
    </div>
        </div>
        </>
    );
}

export default Footer;
