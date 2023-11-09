import React, {useState} from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton);

  return (
    <div className='container'>
    <nav className='navbar'>
        <div className='navbar-container'>
            <div className="navbar-logo" onClick={closeMenu}>
                <img src="/Images/pps-logo.png" alt="Logo" />
            </div>
            <div className="menu-icon" onClick={handleClick}>
                <span>Menu</span>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMenu}>
                        Events
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMenu}>
                        Stories
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMenu}>
                        Community
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links-mobile' onClick={closeMenu}>
                        Sign-Up
                    </Link>
                </li>
            </ul>
            {/* {button && <Button buttonStyle='but--outl'>SIGN UP</Button>} */}
        </div>    
    </nav>
    </div>
  )
}

export default Navbar