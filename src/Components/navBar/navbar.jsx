import React, {useState} from 'react'
import "./navbar.scss";
import Logo from '../../assets/White logo - no background.png'
import menu from '../../assets/menu.png'


const Navbar = () => {

    // const [active, setActive] = useState(!active);
    const [showMenu, setShowMenu] = useState(false)

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

        <img src={menu} alt="Menu" className='mobMenu' onClick={()=> setShowMenu(!showMenu)} />
      <ul className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        <li activeClass='active' className="listItem" onClick={()=>setShowMenu(false)}>Home</li>
        <li activeClass='active' className="listItem" onClick={()=>setShowMenu(false)}>About</li>
        <li activeClass='active' className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</li>
        <li activeClass='active' className="listItem" onClick={()=>setShowMenu(false)}>Clients</li>
        <li activeClass='active' className="listItem" onClick={()=>setShowMenu(false)}>Contact</li>
      </ul>


        </div>
    )
}

export default Navbar