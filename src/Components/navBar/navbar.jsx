import React from 'react'
import "./navbar.scss";
import Logo from '../../assets/White logo - no background.png'

const Navbar = () => {
    return (
        <div className="container-nav">
        <nav className="Navbar">
            {/* <div className="navdiv">          </div> */}
            <img src={Logo} alt="LOGO" className="navImg" />
            <ul className='navLinks'>
                <li className='navLink'>Home</li>
                <li className='navLink'>About</li>
                <li className='navLink'>Projects</li>
                <li className='navLink'>Contact Me</li>
            </ul>
        </nav>
        </div>
    )
}

export default Navbar