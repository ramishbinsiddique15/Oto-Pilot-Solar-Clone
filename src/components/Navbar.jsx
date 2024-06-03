import React,{useState} from 'react'
import './Navbar.css'
import logo from '.././assets/img/logo.png'
const Navbar = () => {
    const [drop, setDrop] = useState()
    const toggleDrop = ()=>{
        setDrop(!drop)
    }
  return (
    <div className='navbar'>
      <nav>
        <div className="logo">
            <img src={logo} width={250}  />
        </div>
        <div className="menu">
            <div className="list">
            <ul>
                <li>HOME</li>
                <li>WHAT IS OTOPILOT?</li>
                <li>SERVICES</li>
                <li className='down' onClick={toggleDrop}>RESOURCES</li>
                <div className="dropdown" style={{opacity: drop?'1':'0'}}>
                    <p>Courses</p>
                    <p>Blog</p>
                </div>
                <li>MEMBERSHIP PLANS</li>
                <li>FAQ'S</li>
            </ul>
            </div>
            <div className="button">
                <button>BOOK A DEMO</button>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
