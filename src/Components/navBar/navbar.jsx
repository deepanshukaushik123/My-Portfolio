import React, {useState} from 'react'
import './navbar.scss';
import Logo from '../../assets/White logo - no background.png'
import menu from '../../assets/menu.png'


const Navbar = () => {

    // const [active, setActive] = useState(!active);
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className="container-nav">
        <nav id="Navbar">
            <img src={Logo} alt="LOGO" className="navImg" />
            <ul className='navLinks'>
                <li className='navLink'><a href='#introSec'>Home</a></li>
                <li className='navLink'><a href='#about'>About</a></li>
                <li className='navLink'><a href='#ProjectsSec'>Projects</a></li>
                <li className='navLink'><a href='#mainContainer'>Contact Me</a></li>
            </ul>
        </nav>

        <img src={menu} alt="Menu" className='mobMenu' onClick={()=> setShowMenu(!showMenu)} />
      <ul className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        <li className="listItem" onClick={()=>setShowMenu(false)}><a href='#introSec'>Home</a></li>
        <li className="listItem" onClick={()=>setShowMenu(false)}><a href='#about'>About</a></li>
        <li className="listItem" onClick={()=>setShowMenu(false)}><a href='#ProjectsSec'>Projects</a></li>
        <li className="listItem" onClick={()=>setShowMenu(false)}><a href='#mainContainer'>Contact Me</a></li>
      </ul>


        </div>
    )
}

export default Navbar