import React from 'react'
import "./navbar.scss";
import Logo from '../../assets/White logo - no background.png'

const Navbar = () => {
    return (
        <div className="container-nav">
        <nav id="Navbar">
            {/* <div className="navdiv">          </div> */}
            <img src={Logo} alt="LOGO" className="navImg" />
            <ul className='navLinks'>
                <li className='navLink'><a href='#introSec'>Home</a></li>
                <li className='navLink'><a href='#about'>About</a></li>
                <li className='navLink'><a href='#ProjectsSec'>Projects</a></li>
                <li className='navLink'><a href='#mainContainer'>Contact Me</a></li>
            </ul>
        </nav>
        </div>
    )
}

export default Navbar